# Verification — 4 November 2026

Executed locally using Node 26 and headless Chrome:
- ESLint passed.
- Strict TypeScript check and production build passed. Vite emitted two harmless annotation warnings from Zod; no build errors.
- 14 unit/server-contract tests passed.
- Browser layouts passed at 320, 375, 390, 430, 768, 1024 and 1440px with no horizontal overflow.
- Mobile menu Escape behavior, FAQ expansion and service-to-form preselection passed.
- Mocked frontend form tests passed: accessible validation, provider failure, preserved entries, retry and accepted confirmation. No real lead was sent.
- Automated axe WCAG A/AA checks reported zero violations at 375 and 1440px after correcting service-number contrast.
- npm installation audit reported zero vulnerabilities after updating Vitest and overriding the vulnerable transitive minimatch version. Re-run dependency checks before launch.
- Production HTML contains page content and business schema without executing client JavaScript.

Limits: automated checks do not establish complete WCAG compliance. Real-device Safari/Android testing, manual screen-reader assessment, production Core Web Vitals/INP, approved live destination delivery, durable adapter integration, analytics consent/vendor mappings, final privacy policy and legacy-URL migration remain launch work. See INTEGRATION.md.

One cold local mobile lab sample (375×812, 4× CPU slowdown, 150ms network latency, approximately 1.6Mbps download): LCP 1.20s, CLS 0.0013. This is a single synthetic localhost measurement, not production field performance; INP was not measured.
