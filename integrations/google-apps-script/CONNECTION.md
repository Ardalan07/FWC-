# Your Google Sheets connection

Deployment health check returned `POST_REQUIRED`, so the web app is reachable.

Spreadsheet ID: `154Tb5zzPOScZocHlxCkFKbiKayiwe0dCNEJtE4mwNr4`

The supplied deployment URL is saved in the ignored `.env.local` file. A random private secret has also been generated there. The deployment ID is a public identifier and is not the shared secret.

## Required Google setup

In Apps Script > Project Settings > Script Properties, set:

| Property | Value |
| --- | --- |
| `SPREADSHEET_ID` | `154Tb5zzPOScZocHlxCkFKbiKayiwe0dCNEJtE4mwNr4` |
| `SHEET_NAME` | `Website Leads` |
| `SHARED_SECRET` | Copy the value of `GOOGLE_APPS_SCRIPT_SECRET` from your local `.env.local` file |

Run `setupSheet` once and authorize access. If you change script code, update the web-app deployment to a new version. Do not put the private secret in chat, a URL or a VITE_ variable.

A local-only `/api/leads` route is now prepared for both `npm run dev` and `npm run preview`. It validates requests, limits requests per local client and forwards to Google with the server secret. The Google script performs durable duplicate detection. Restart the local server after changing environment values.

`VITE_LEAD_ENDPOINT=/api/leads` is now enabled locally after successful verification. The preview server has been rebuilt and restarted. The website form now uses the local server route.

The Vite middleware is for local use, not production deployment. A production website still needs a backend/serverless host for `/api/leads`; uploading `dist/` alone does not run it. The final runtime and trusted per-client rate-limiting configuration depend on that host.

Current verification: a deliberately incomplete, non-customer request returned `accepted: false, code: SAVE_FAILED`. The deployment therefore has not passed configuration checks; no real lead was sent. Check the Script Properties and run setupSheet as described above. Lint, 28 tests and the production build passed. Local middleware rejected missing-origin and invalid-field requests, and the shared secret was verified absent from the frontend build.

## Successful verification, 6 November 2026

Google confirmed a clearly labeled test row, then acknowledged an identical retry with duplicate=true. A real mobile-browser form submission through the local backend also reached the confirmed-success state using the same test ID, so only one test row was created. The test row is named `FWC INTEGRATION TEST - please delete` and can be deleted after review. Local submissions are enabled. Production hosting and a production backend deployment are still outstanding.
