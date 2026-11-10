import { defineConfig, loadEnv } from "vite";
import { localLeadPlugin } from "./server/local-leads";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const allowedHosts = env.SHARE_ORIGIN
    ? [new URL(env.SHARE_ORIGIN).hostname]
    : [];
  return {
    server: { allowedHosts },
    preview: { allowedHosts },
    plugins: [react(), tailwindcss(), localLeadPlugin(env)],
  };
});
