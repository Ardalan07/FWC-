# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

The application is now scaffolded as React + strict TypeScript + Vite + Tailwind CSS.

- `instruction.MD` is the governing project brief.
- `fwcdetails.md` is the factual discovery source.
- `src/` contains the landing page, reusable header/actions/services/form, content and validation.
- `server/leads.ts` is a hosting-neutral submission handler requiring real delivery and durable-storage adapters. It is not deployed.
- `docs/INTEGRATION.md` records remaining production gates.

Actual scripts: `npm run dev`, `npm run build` (type-check, client build, Vite SSR build and static prerender), `npm run preview`, `npm run typecheck`, `npm run lint`, `npm test`. See package.json for additional QA scripts.

Online submission stays disabled without VITE_LEAD_ENDPOINT. Never enable it without an approved endpoint. No advertising vendors are installed; analytics events are local readiness hooks only. The header wordmark is provisional; original photo and brand rights require client confirmation.

## What this project is

A single-page, mobile-first, ClickFunnels-style **lead-generation landing page** for FWC Companies (legal name FWC LLC), a 24/7 plumbing/electrical/HVAC contractor in Placentia, CA serving Orange County and the Inland Empire. It replaces an existing Jobber-builder site. This is explicitly **not** a traditional multi-page corporate site for phase one — it's one high-converting page optimized for paid traffic (Google/Meta Ads).

Primary conversion: estimate/contact form submission. Secondary conversion: phone call.

## Source-of-truth priority (critical)

When content, copy, or business facts are ambiguous or conflicting, resolve in this order:
1. Client-approved requirements (explicit instructions given in the session)
2. `fwcdetails.md` (the discovery report)
3. Existing repository content (once code exists)
4. The live site at fwccompanies.com

**Never invent** testimonials, certifications, reviews, addresses, years of experience, pricing, guarantees, or other business claims. Mark anything unconfirmed as `TODO: Client confirmation required` rather than guessing. Only confirmed-active services may be presented; legacy/unclear services require explicit approval before inclusion.

### Known data landmines from the discovery report

The current live site has verified factual errors — do not carry these into the new build, and flag them if asked to "migrate" content verbatim:
- Plumbing and Electrical page meta descriptions name a different company ("RPM Property Services Inc.") — never reuse.
- The HVAC page's meta description and one benefit card contain restoration (fire/flood/mold) copy, not HVAC copy.
- Service area claims conflict across pages (Anaheim vs. Placentia vs. Norco vs. Santa Ana; stray mentions of Arizona, LA, San Bernardino) — do not assert a service area beyond what's client-confirmed.
- Financing figures conflict ($250,000 in meta vs. $400,000 on-page) — treat both as unverified until confirmed with Hearth/the client.
- Company founding year, CSLB license number, and several certification details are unverified — see `fwcdetails.md` §14 ("Missing Information to Request from the Client") before stating any of these as fact.

## Technology stack (required once code exists)

- React + TypeScript (strict mode)
- Vite
- Tailwind CSS
- React Router, React Hook Form + Zod, Lucide React, Vitest + React Testing Library, Playwright, ESLint + Prettier — add only as needed, not preemptively

Avoid unnecessary dependencies and overengineering. Do not introduce a different framework without explicit approval. Plan for prerendering/SSR for SEO, but don't build it until it's actually needed.

## Planned component architecture

`instruction.MD` specifies this structure for when the app is scaffolded:

```
src/components/layout
src/components/ui
src/components/sections
src/components/forms
src/pages
src/data
src/hooks
src/lib
src/types
src/styles
public/assets
```

Key reusable components called out: `Header`, `HeroSection`, `TrustBar`, `ServiceCard`, `ServicesSection`, `ProjectsGallery`, `LeadForm`, `FAQAccordion`, `StickyMobileCTA`, `Footer`. Keep business content (copy, service data) separate from UI components where practical — e.g. service definitions belong in `src/data`, not hardcoded in JSX.

## Landing page structure

Single page, in this order (reorderable only when justified by UX/CRO reasoning): Header → Hero → Trust Indicators → Services → Why Choose FWC → Projects → How It Works → Contact Form → FAQ → Final CTA → Footer. A sticky mobile CTA bar (Call Now / Get Estimate) must persist across the page without blocking content.

## Design direction

This refines/supersedes the generic guidance in `instruction.MD` §6 with concrete decisions. Direction: **"Navy & Signal Red"** — clean, fast-to-scan, built for a property manager calling at 2 a.m. and a homeowner comparing three contractors on their phone. Keeps FWC's existing navy/red so the brand stays recognizable, but drops the chrome/clip-art emblem-as-hero look.

**Palette**

| Role | Colour | Use |
|---|---|---|
| Primary | Navy `#1B3A4B` | Header, hero panels, headings |
| Dark | Ink `#0E1A22` | Footer, dark sections |
| Action | Signal red `#C8102E` | Call / Estimate / Emergency buttons only — never decorative |
| Surface | Off-white `#F5F6F7` | Section backgrounds |
| Accent (optional) | Amber `#F2A900` | "24/7" / "Open now" labels, used sparingly |

Verify every text/colour pairing against WCAG AA contrast before shipping. The old maroon (`#800000`) is retired — reads dull and dated next to signal red.

**Typography:** Poppins (headings) + Inter (body), both free on Google Fonts — keeps continuity with the current site's Poppins while fixing its weak hierarchy and bold-body-text readability problem.

| Role | Font | Weight | Size (desktop / mobile) |
|---|---|---|---|
| H1 | Poppins | 700 | 52 / 34px, line-height 1.1 |
| H2 | Poppins | 700 | 34 / 26px, line-height 1.2 |
| H3 | Poppins | 600 | 22 / 20px |
| Body | Inter | 400 | 17 / 16px, line-height 1.6 |
| Buttons, nav, labels | Inter | 600 | 15–16px |
| Phone number, "24/7" | Poppins | 700 | Larger than nav text |

Rules: load only Poppins 600/700 and Inter 400/600, self-hosted as WOFF2 with `font-display: swap`. Never bold body paragraphs (the current homepage does this). Keep text lines to ~65–75 characters. If a more distinctive, industrial feel is wanted later, **Barlow Semi Condensed 700** is a reasonable heading alternative to Poppins (fits long service names like "Trenchless Pipe Lining" on one mobile line) — but it costs continuity with the current brand look, so treat it as a fallback option, not the default.

**Look and feel**
- Hero: a real crew/truck photo with a dark navy overlay, not the logo graphic. Headline names the trades + area; two CTAs (Call, Get an Estimate) plus small trust chips (Licensed · BBB A+ · 24/7 · ~1hr response).
- Service cards: white cards, subtle borders, simple line icons; a light per-trade accent color (blue/amber/teal) on icons only, used sparingly.
- Navigation: full horizontal nav on desktop with a services dropdown, a visible phone number, and a red "24/7 Emergency" button — not the current hamburger-only pattern.
- Mobile: the sticky bottom bar (Call / Text / Estimate) is the single biggest conversion lever — treat it as non-negotiable, not decorative.
- Proof sections: project cards with before/after, a reviews strip, certification badges.
- Logo: keep the full emblem for trucks/print; commission a simplified horizontal vector lockup for the web header — never use the emblem as the hero image again.

**Avoid:** stock "smiling plumber" photography, gradients/glass effects, text baked into images, and the jokey all-caps lines from the current site ("PANIC BUTTON!", "COOL OFF HOT HEAD!") — they undercut credibility with multifamily/property-manager clients.

**Stack note:** ignore any suggestion (from this or future design discussion) to build this on Next.js, Astro, or a WordPress theme — the required stack is locked in `instruction.MD` §4 as React + TypeScript (strict) + Vite + Tailwind. Design direction above applies within that stack.

## Non-negotiable constraints

- **Mobile-first, always.** Design and test at 320/375/390/430/768/1024/1440px. No horizontal scroll, 44×44px minimum touch targets, no hover-only functionality, respect safe-area insets.
- **Lead form is business-critical.** Server-side validation, spam/rate limiting, duplicate-submission prevention, accessible error states, and a real approved submission destination (business email/CRM/Jobber) — never fake a successful submission or expose API credentials client-side. Confirm integration details before wiring up production submission.
- **Analytics only after approval**, and never send PII (name/email/phone) in event payloads. Planned events: `page_view`, `hero_cta_click`, `phone_click`, `lead_form_start`, `lead_form_submit`, `lead_form_success`, `lead_form_error`.
- **Performance/accessibility/security targets:** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1; WCAG 2.2 AA; HTTPS, server-side validation, no hardcoded secrets, minimal data retention.
- Never claim tests passed, or report a task complete, unless actually executed/verified.

## Working process

Before changing code: inspect existing conventions, read `instruction.MD` and `fwcdetails.md`, identify relevant files, and plan substantial changes before implementing. Keep changes small and focused; don't touch unrelated files. After implementation: run lint/type-check/tests/build (once configured), verify responsive behavior where possible, and report actual results — including limitations — rather than assuming success. Work incrementally through the phases in `instruction.MD` §15 (requirements → design system → component build → form/integrations → SEO/perf/a11y → production readiness) rather than building everything at once.
