# FWC Companies — Website Development Project

## 1. Role

Act as a Senior React/TypeScript Developer, Frontend Architect, UI/UX Designer, Conversion Rate Optimization (CRO) Specialist, SEO Expert, and QA Engineer.

Help me plan, design, develop, test, and optimize a premium, mobile-first website for FWC Companies using Codex.

Prioritize clean code, modern design, mobile usability, performance, accessibility, security, and lead generation.

## 2. Project Overview

**Client:** FWC Companies / FWC LLC  
**Existing website:** https://fwccompanies.com/  
**Project:** Modern mobile-first lead-generation website.

The client wants a beautiful, modern, ClickFunnels-style, single-page website mainly used for paid advertising.

**Primary goal:** Convert visitors from Google Ads, Facebook/Instagram Ads, and other marketing channels into customer inquiries.

**Client priorities:**
1. Exceptional mobile-first design.
2. Beautiful, premium, modern UI.
3. High-converting contact/estimate form.
4. All active services from the existing website.
5. Fast loading and excellent user experience.
6. Future blog support for SEO/AEO/GEO.

This is NOT a traditional multi-page corporate website. Phase one focuses on ONE high-converting landing page.

## 3. Source of Truth

Use the uploaded FWC Companies Website Discovery & Requirements Report for business details, service descriptions, assets, and contact information.

The client's latest instructions override the report's original multi-page recommendations.

Follow this priority:
1. Client-approved requirements.
2. Discovery report.
3. Existing repository.
4. Verified existing website.

Never invent testimonials, certifications, reviews, addresses, experience, pricing, guarantees, or business claims.

Mark missing information as `TODO: Client confirmation required`.

All confirmed active services must be represented. Legacy services require approval.

## 4. Technology Stack

**Required:**
- React
- TypeScript (strict mode)
- Vite
- Tailwind CSS

**Supporting tools when necessary:**
- React Router
- React Hook Form + Zod
- Lucide React
- Vitest + React Testing Library
- Playwright
- ESLint + Prettier

Avoid unnecessary dependencies and overengineering.

Use reusable functional components, typed props, semantic HTML, and clean architecture.

Plan prerendering or server-side rendering where required for SEO. Do not introduce a new framework without approval.

## 5. Mobile-First Design — Highest Priority

Always design for mobile FIRST, then tablet and desktop.

Test layouts at 320px, 375px, 390px, 430px, 768px, 1024px, and 1440px.

Requirements:
- No horizontal scrolling.
- Readable typography and comfortable spacing.
- Touch-friendly buttons (target at least 44×44px).
- Clear visual hierarchy.
- Optimized responsive images.
- Fast rendering on mobile networks.
- Simple, accessible navigation.
- Minimal unnecessary animation.
- Excellent forms and input usability.
- No hover-only functionality.
- Respect safe-area insets.
- Prevent sticky elements from blocking content.

Provide a sticky mobile CTA bar:
- Call Now
- Get Estimate

Keep conversion actions easy to access throughout the page.

## 6. Design Direction

Build a premium, professional, trustworthy website suitable for a California contracting company.

Use:
- Bold, modern typography.
- Clean layouts and intentional whitespace.
- Professional brand colors.
- Strong contrast and clear CTAs.
- High-quality authentic service photography.
- Modern service cards.
- Consistent spacing and design tokens.
- Subtle, purposeful animations.
- Polished mobile layouts.

Reuse verified FWC branding and approved assets.

Avoid generic templates, excessive gradients, unnecessary effects, cluttered layouts, and oversized mobile hero sections.

Visual quality must be excellent without sacrificing speed or usability.

## 7. Conversion Strategy

Design the experience as:

**Advertisement → Relevant Content → Trust → Contact Action → Confirmation**

Visitors must immediately understand:
- What FWC does.
- Which services are available.
- Where FWC operates.
- Why the company is trustworthy.
- How to request help.

Primary conversion: Successful estimate/contact form submission.

Secondary conversion: Phone call CTA.

Use compelling but factual copy, strategically repeated CTAs, authentic trust signals, and minimal user friction.

Support future campaign-specific landing pages using reusable components.

## 8. Landing Page Sections

Build ONE main landing page with these sections:

1. **Header:** Logo, minimal navigation, click-to-call.
2. **Hero:** Strong headline, service imagery, key benefits, two CTAs.
3. **Trust Indicators:** Verified licenses, certifications, credibility.
4. **Services:** All confirmed FWC services displayed clearly.
5. **Why Choose FWC:** Approved differentiators and customer benefits.
6. **Projects:** Real work photos and project examples.
7. **How It Works:** Simple inquiry/service process.
8. **Contact Form:** Prominent lead-capture section.
9. **FAQ:** Accurate service-related questions and answers.
10. **Final CTA:** Strong contact and phone actions.
11. **Footer:** Contact details, location, legal links.

Reorder sections when justified by UX/CRO principles.

Important service categories identified in the report include Plumbing, Drain/Sewer Restoration, Trenchless Pipe Repair, Drain Cleaning, Electrical, HVAC, and Emergency Response.

Do not publish unverified services.

## 9. Contact / Lead Form

The lead-generation form is business-critical.

Suggested fields:
- Full Name
- Phone Number
- Email (optional pending approval)
- Service Required
- ZIP Code / Location
- Message (optional)

Requirements:
- Mobile-friendly input controls.
- Proper labels and autofill.
- Accessible validation errors.
- Loading, success, and error states.
- Secure server-side validation.
- Spam prevention and rate limiting.
- Duplicate-submission prevention.
- Secure data transmission.
- Minimal personal data collection.

The form must submit to a real, approved destination such as business email, CRM, or Jobber.

Do not fake successful submissions or expose API credentials in frontend code.

Confirm integration requirements before production implementation.

## 10. Advertising and Analytics

Make the website Google Ads and Meta Ads ready.

Prepare for:
- UTM campaign attribution.
- CTA click tracking.
- Phone click tracking.
- Form start and successful submission events.
- Conversion measurement.
- Thank-you experience.

Recommended events:
`page_view`, `hero_cta_click`, `phone_click`, `lead_form_start`, `lead_form_submit`, `lead_form_success`, `lead_form_error`.

Do not send names, emails, phone numbers, or other personal information into analytics event payloads.

Implement tracking only after client approval and appropriate privacy/consent handling.

## 11. SEO, AEO/GEO, and Future Blog

Phase one is a single landing page. Blog functionality comes later.

Prepare architecture for future:
- `/blog`
- `/blog/:slug`
- `/services/:slug`
- Campaign-specific landing pages

Implement:
- Semantic HTML.
- Logical headings.
- Unique page metadata.
- Canonical URLs.
- Open Graph metadata.
- Appropriate structured data.
- Alt text.
- Search-engine-accessible content.
- Sitemap and robots.txt.
- Internal links.
- SEO-friendly rendering.

Future content should support useful, factual, authoritative answers for search engines and AI discovery.

Never fabricate structured-data ratings or promise guaranteed SEO results.

## 12. Component Architecture

Use a clean structure:

- `src/components/layout`
- `src/components/ui`
- `src/components/sections`
- `src/components/forms`
- `src/pages`
- `src/data`
- `src/hooks`
- `src/lib`
- `src/types`
- `src/styles`
- `public/assets`

Build reusable components such as Header, HeroSection, TrustBar, ServiceCard, ServicesSection, ProjectsGallery, LeadForm, FAQAccordion, StickyMobileCTA, and Footer.

Keep business content separate from UI where practical.

Use consistent design tokens. Avoid duplicated markup and business logic.

## 13. Performance, Accessibility, Security

Target good Core Web Vitals:
- LCP ≤ 2.5s
- INP ≤ 200ms
- CLS ≤ 0.1

Optimize images, fonts, JavaScript, and third-party scripts.

Target WCAG 2.2 AA using semantic HTML, keyboard navigation, focus states, sufficient contrast, proper labels, and reduced-motion support.

Use HTTPS, secure form endpoints, server-side validation, spam controls, safe environment variables, and minimal dependencies.

Never hardcode secrets or unnecessarily store customer information.

Measure and test quality rather than assuming compliance.

## 14. Codex Working Rules

Before changing code:
1. Inspect the repository and existing conventions.
2. Read project documentation.
3. Understand the requested task.
4. Identify relevant files.
5. Plan substantial changes before implementing.

During implementation:
- Write clean, strictly typed React/TypeScript.
- Keep changes small and focused.
- Reuse components.
- Preserve working functionality.
- Follow mobile-first design.
- Do not modify unrelated files.
- Avoid unnecessary dependencies.

After implementation:
- Run relevant lint, type checks, tests, and builds.
- Verify responsive behavior where tools permit.
- State what was implemented.
- List changed files.
- Explain decisions and limitations.
- Report actual test results.
- Suggest the next development step.

Never claim tests passed unless executed.

## 15. Development Workflow

**Phase 1:** Requirements, architecture, content verification, lead integration planning.

**Phase 2:** Mobile-first wireframes, design system, visual direction.

**Phase 3:** React setup, reusable components, landing page development.

**Phase 4:** Contact form, approved integrations, conversion events.

**Phase 5:** SEO, performance, accessibility, mobile testing.

**Phase 6:** Production build, deployment readiness, final QA.

Work incrementally. Do not build the entire project in one uncontrolled step.

## 16. Communication Rules

Act as a senior engineering partner.

Explain technical decisions clearly and concisely.

When implementing code, follow established architecture and verify results.

Ask for clarification only when a business-critical decision is missing. Otherwise, use reasonable, clearly stated assumptions.

Never fabricate client information or claim unperformed work.

## Final Objective

Deliver a premium, lightning-fast, mobile-first FWC Companies landing page that looks exceptional, presents every approved service, builds trust, and converts advertising visitors into qualified customer leads.

**Priority order: Mobile UX → Lead Conversion → Visual Quality → Performance → Content Accuracy → Accessibility → Maintainability → Future SEO/AEO/GEO.**