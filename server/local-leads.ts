import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";
import { createLeadHandler } from "./leads";
import { createGoogleSheetsDelivery } from "./google-apps-script";

/** Local dev/preview only. Production needs a deployed server endpoint. */
export function localLeadPlugin(env: Record<string, string>): Plugin {
  const counters = new Map<string, { start: number; count: number }>();
  const configured =
    !!env.GOOGLE_APPS_SCRIPT_URL && !!env.GOOGLE_APPS_SCRIPT_SECRET;
  const deliver = configured
    ? createGoogleSheetsDelivery({
        url: env.GOOGLE_APPS_SCRIPT_URL,
        secret: env.GOOGLE_APPS_SCRIPT_SECRET,
      })
    : null;
  async function middleware(
    req: IncomingMessage,
    res: ServerResponse,
    next: () => void,
  ) {
    if (req.url?.split("?")[0] !== "/api/leads") return next();
    if (!deliver) {
      res.writeHead(503, {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      });
      res.end('{"accepted":false}');
      return;
    }
    try {
      // Allow the explicitly configured HTTPS review URL through a local tunnel.
      // Never infer a trusted origin from arbitrary forwarded headers.
      const sharedOrigin = env.SHARE_ORIGIN
        ? new URL(env.SHARE_ORIGIN).origin
        : undefined;
      const origin =
        sharedOrigin && req.headers.origin === sharedOrigin
          ? sharedOrigin
          : `http://${req.headers.host}`;
      const headers = new Headers();
      for (const [name, value] of Object.entries(req.headers)) {
        if (value)
          headers.set(name, Array.isArray(value) ? value.join(",") : value);
      }
      let length = 0;
      const chunks: Buffer[] = [];
      for await (const chunk of req) {
        const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        length += buffer.length;
        if (length > 8192) {
          res.writeHead(413, {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          });
          res.end('{"accepted":false}');
          return;
        }
        chunks.push(buffer);
      }
      const request = new Request(new URL("/api/leads", origin), {
        method: req.method,
        headers,
        ...(["GET", "HEAD"].includes(req.method ?? "GET")
          ? {}
          : { body: Buffer.concat(chunks).toString("utf8") }),
      });
      const handler = createLeadHandler({
        origin,
        clientKey: () => req.socket.remoteAddress ?? "local",
        allowRequest: async (client) => {
          const now = Date.now();
          for (const [key, value] of counters)
            if (now - value.start >= 60000) counters.delete(key);
          const current = counters.get(client) ?? { start: now, count: 0 };
          counters.set(client, current);
          return ++current.count <= 15;
        },
        // Google Sheets is the durable receipt store: every retry reaches its locked ID lookup.
        // Do not replace this with an in-memory "accepted" cache that could hide payload conflicts.
        claim: async () => "new",
        accept: async () => {},
        release: async () => {},
        deliver,
      });
      const response = await handler(request);
      res.writeHead(response.status, Object.fromEntries(response.headers));
      res.end(await response.text());
    } catch {
      res.writeHead(502, {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      });
      res.end('{"accepted":false}');
    }
  }
  return {
    name: "fwc-local-leads",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}
