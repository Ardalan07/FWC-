import type { Config, Context } from "@netlify/functions";
import { handleNetlifyLead } from "../../server/netlify-leads";

export default async (request: Request, context: Context) =>
  handleNetlifyLead(request, process.env, context.ip);

export const config: Config = {
  path: "/api/leads",
  rateLimit: {
    windowLimit: 10,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};
