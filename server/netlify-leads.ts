import { createLeadHandler } from "./leads";
import { createGoogleSheetsDelivery } from "./google-apps-script";

/** Runtime env is supplied by Netlify, never included in the browser build. */
export async function handleNetlifyLead(
  request: Request,
  env: Record<string, string | undefined>,
  clientIp: string,
  send: typeof fetch = fetch,
): Promise<Response> {
  if (request.method !== "POST")
    return Response.json(
      { accepted: false },
      { status: 405, headers: { Allow: "POST", "Cache-Control": "no-store" } },
    );
  const origin = new URL(request.url).origin;
  if (request.headers.get("origin") !== origin)
    return Response.json(
      { accepted: false },
      { status: 403, headers: { "Cache-Control": "no-store" } },
    );
  const url = env.GOOGLE_APPS_SCRIPT_URL;
  const secret = env.GOOGLE_APPS_SCRIPT_SECRET;
  if (!url || !secret) return unavailable();
  try {
    const deliver = createGoogleSheetsDelivery({ url, secret, fetch: send });
    return await createLeadHandler({
      origin,
      clientKey: () => clientIp,
      // Netlify's exported function config enforces the per-client limit at the edge.
      allowRequest: async () => true,
      // The Apps Script's locked request-ID lookup is the durable receipt store.
      // Forward retries so it can check both the ID and the payload fingerprint.
      claim: async () => "new",
      accept: async () => {},
      release: async () => {},
      deliver,
    })(request);
  } catch {
    // Do not disclose runtime configuration, secrets or provider responses.
    return unavailable();
  }
}
function unavailable() {
  return Response.json(
    { accepted: false, code: "SERVICE_UNAVAILABLE" },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
