# Temporary friend review

The current review uses a Cloudflare Quick Tunnel to the local production preview on port 4173. It is not a permanent deployment. Keep the Mac awake with internet access, the Vite preview and the tunnel process running.

The current URL is recorded as SHARE_ORIGIN in the ignored .env.local. Only the explicitly configured hostname is allowed by Vite. The lead backend accepts this exact HTTPS origin as well as the normal local request origin; it does not trust arbitrary forwarded headers. The form still writes to the configured Google Sheet, so label test submissions clearly.

To create a new review session:

1. Start `npm run preview -- --port 4173 --strictPort` after building.
2. Run `cloudflared tunnel --url http://127.0.0.1:4173 --protocol http2 --no-autoupdate` using your installed cloudflared binary. The initial review used a standalone official download at /tmp/fwc-sharing/cloudflared.
3. Copy the printed HTTPS origin to SHARE_ORIGIN in .env.local and restart the preview server.
4. Share that URL. A new tunnel has a different hostname. Stopping the tunnel ends access; clear SHARE_ORIGIN and restart preview when sharing is no longer needed.

Cloudflare's official guide: https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/

Permanent hosting must include the server-side /api/leads route, not only the static dist folder.
