import { leadSchema, type Lead } from "../src/lib/lead-schema";
/** Supply production adapters backed by durable shared storage, never process memory. */
export interface LeadDependencies {
  origin: string;
  clientKey(request: Request): string; // Trusted hosting metadata, not arbitrary forwarded headers.
  allowRequest(clientKey: string): Promise<boolean>;
  claim(key: string): Promise<"new" | "accepted" | "pending">;
  accept(key: string): Promise<void>;
  release(key: string): Promise<void>;
  deliver(lead: Lead, idempotencyKey: string): Promise<void>;
}
const reply = (status: number, accepted = false) =>
  Response.json(
    { accepted },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("empty");
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 8192) {
      await reader.cancel();
      throw new Error("size");
    }
    chunks.push(value);
  }
  const all = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    all.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(new TextDecoder().decode(all)) as unknown;
}
/** Hosting-neutral handler; not exposed until approved delivery and storage adapters exist. */
export function createLeadHandler(deps: LeadDependencies) {
  return async (request: Request): Promise<Response> => {
    if (request.method !== "POST") return reply(405);
    if (request.headers.get("origin") !== deps.origin) return reply(403);
    if (
      request.headers.get("content-type")?.split(";")[0].trim() !==
      "application/json"
    )
      return reply(415);
    const key = request.headers.get("idempotency-key");
    if (!key || !/^[-a-f0-9]{36}$/i.test(key)) return reply(400);
    try {
      if (!(await deps.allowRequest(deps.clientKey(request))))
        return reply(429);
      let raw: unknown;
      try {
        raw = await readBody(request);
      } catch {
        return reply(400);
      }
      const parsed = leadSchema.safeParse(raw);
      if (!parsed.success) return reply(422);
      const claim = await deps.claim(key);
      if (claim === "accepted") return reply(200, true);
      if (claim === "pending") return reply(409);
      try {
        await deps.deliver(parsed.data, key);
      } catch {
        await deps.release(key);
        return reply(502);
      }
      // On receipt-store failure keep the claim pending, preventing uncertain duplicate delivery.
      await deps.accept(key);
      return reply(201, true);
    } catch {
      return reply(503);
    }
  };
}
