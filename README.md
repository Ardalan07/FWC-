# FWC Companies

Mobile-first React + strict TypeScript + Vite + Tailwind landing page.

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

`npm run build` creates a static, prerendered `dist/` deployment. All content remains present without JavaScript. React hydrates menus, service selection and form behavior.

Copy `.env.example` to `.env.local` only when a tested lead endpoint is available. Online lead submission deliberately stays disabled without it; telephone actions work. Read [production integration requirements](docs/INTEGRATION.md) before enabling collection, analytics or publishing.

Services/FAQs/business data: `src/data/content.ts`. Styles/tokens: `src/styles/globals.css`. Shared actions, header, services and form are reusable components. Remaining page sections live in `src/App.tsx` for the single-page scope.

Browser QA: after `npm run build`, start `npm run preview`, then run `npm run test:browser`. Install the matching Chromium with `npx playwright install chromium`, or set `CHROME_PATH` to an installed Chrome executable. The runner checks seven widths, interactions and automated axe accessibility checks. For a local-only mocked form test, start Vite with `VITE_LEAD_ENDPOINT=/api/leads`, set `QA_URL` to that server and `QA_FORM=1`; the test intercepts every submission and sends no real lead.

Google Sheets integration: deploy [the separate Apps Script receiver](integrations/google-apps-script/Code.gs) following [its setup guide](integrations/google-apps-script/README.md). The server-only forwarding adapter is `server/google-apps-script.ts`. No Google endpoint is connected until the deployment URL, private shared secret and website backend are configured.
