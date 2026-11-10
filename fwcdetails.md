# FWC Companies — Website Discovery & Requirements Report

**Site audited:** https://fwccompanies.com/
**Audit date:** 4 November 2026
**Method:** Live inspection in Chrome (desktop ~1019–1280px and narrow/mobile widths), DOM/metadata extraction, `sitemap.xml` and `robots.txt` review. No forms were submitted and no accounts were created.

**Legend:** ✅ Confirmed (observed on site) · ⚠️ Assumption / inference · ❓ Not verified

Reference screenshots are in the attached `fwc-screenshots.zip` (file names cited below as `[ss: 01]` etc.).

---

## 1. Executive Summary

FWC Companies (legal/brand name on site: **FWC LLC**) is a 24/7 plumbing, electrical and HVAC contractor based in Placentia, CA, serving Orange County (OC) and the Inland Empire (IE), with a strong focus on **multifamily and residential** properties, plus restoration/mitigation (fire, flood, mold, asbestos, lead) work with insurance coordination.

The current site is built on **Jobber's website builder** ("Powered by Jobber") and is tightly coupled to Jobber services (Client Hub login, embedded request form, Jobber AI chat). It has **13 indexable pages**: Home, 7 service pages, 1 certifications page, 1 financing page, and 3 project showcases. There is **no About, Contact, Careers, Service Areas, Reviews, or Blog page** (`/about`, `/contact`, `/services` all return 404).

**Most critical findings**

| # | Finding | Severity |
|---|---|---|
| 1 | Meta descriptions on **Plumbing** and **Electrical** pages name a different company: *"trust RPM Property Services Inc."* | 🔴 High |
| 2 | HVAC page meta description is restoration copy ("Fire, flood, mold, asbestos, and lead removal"); an HVAC benefit card also contains restoration copy | 🔴 High |
| 3 | Primary lead form (embedded Jobber request form) rendered as a broken 150px placeholder in our session `[ss: 05]` ❓ | 🔴 High (verify) |
| 4 | Inconsistent service-area/location claims (Anaheim vs Placentia vs Norco vs Santa Ana; Arizona, LA, San Bernardino mentioned in places) | 🔴 High |
| 5 | Inconsistent financing figures (meta: "up to $250,000"; page: "up to $400,000") | 🟠 Medium-High |
| 6 | Typos in URL/titles ("opetions", "Ceritified", "Cast Rron", "Commerical"), duplicated URL segment (`/certifications/certifications`) | 🟠 Medium |
| 7 | Poor image alt text ("Uploaded image", "Generating alt text…") on ~24 images; FAQ items use repeated `<h3>Question</h3>` | 🟠 Medium |
| 8 | No LocalBusiness/Plumber/Electrician/HVACBusiness schema; no About/Contact/Reviews pages; no testimonials anywhere | 🟠 Medium |
| 9 | Hamburger-only navigation even on desktop; parent menu items are non-clickable buttons; menu doesn't close with Esc | 🟡 Medium |

**Recommendation:** Rebuild on a flexible CMS/framework with a clear service → sub-service → location hierarchy, dedicated About/Contact/Careers/Reviews/Service-Area pages, LocalBusiness schema, a native (or reliably embedded) estimate form with tracking, and corrected, consistent business facts. Keep Jobber integrations (Client Hub, requests, chat) unless the client wants to change their operations platform.

---

## 2. Business & Company Profile

| Item | Value | Status / Source |
|---|---|---|
| Brand name | FWC Companies | ✅ Page title, homepage |
| Legal / footer name | FWC LLC | ✅ Footer, chat widget, JSON-LD `WebSite.name` |
| Industry | Trades contractor — Plumbing, Electrical, HVAC; also restoration/mitigation & general construction | ✅ |
| Self-description | "a trusted construction and contracting company based in Placentia and Norco, California. Specializing in multifamily and residential projects…" | ✅ Home › About FWC |
| Positioning | Licensed, certified, 24/7 emergency service; stocked inventory for all trades; works with property owners and insurance agents | ✅ |
| Mission / Vision / Values | **None published** | ❓ Request from client |
| Company history / founding year | Not stated. The NuDrain/NuFlow badge shows "EST. 1998" — this is **the NuFlow badge's date, not necessarily FWC's** | ⚠️ Do not reuse as FWC's founding date without confirmation |
| Contractor licence | Hero logo graphic shows "CSLB 10702…" (cut off in the image) | ❓ Full CSLB licence number not verified — request |
| Phone | (714) 410-2728 (`tel:+17144102728`) | ✅ |
| Email | robert@fwccompanies.com | ✅ Footer |
| Address | 2007 East Miraloma Avenue, Placentia, California 92870 | ✅ Footer |
| Other base mentioned | Norco, CA (About); "Based in Anaheim/Placentia" (Emergency page) | ⚠️ Inconsistent — confirm |
| Hours | Open 24/7 (12:00 AM – 11:59 PM, Sun–Sat), "Open Now" badge | ✅ Footer |
| Emergency response time | "Usually onsite within 1 hour *(location dependent)*" | ✅ Plumbing & HVAC FAQ |
| Target customers | Multifamily property owners/managers, residential homeowners, commercial properties; insurance-related restoration clients | ✅ |
| Warranties | "Workmanship warranties on our installations, along with applicable manufacturer warranties" | ✅ HVAC FAQ (terms not specified) |
| HVAC brands serviced | Carrier, Trane, Lennox, Rheem, Goodman, Amana, York, Daikin, Mitsubishi, Bosch, Payne | ✅ HVAC FAQ |
| Partnerships | NuDrain / NuFlow **Certified Installer** (trenchless epoxy pipe lining) | ✅ Badge + trenchless copy |
| Financing partner | Hearth (`https://app.gethearth.com/partners/fwc-llc`) | ✅ |
| Operations platform | Jobber (Client Hub, request forms, AI chat) | ✅ |

### Certifications & accreditations (as claimed)

| Claim | Where | Status |
|---|---|---|
| BBB A+ Rated & Accredited — https://www.bbb.org/us/ca/placentia/profile/general-contractor/fwc-llc-1126-850066125 | Certifications page (URL shown as plain text, not linked) | ✅ claimed / ❓ rating not independently verified |
| EPA Certified ("EPA Ceritified Safe") | Certifications | ✅ claimed |
| Asbestos Trained & Certified | Certifications, FAQs | ✅ claimed |
| Mold Trained & Certified | Certifications, FAQs | ✅ claimed |
| Lead paint certified | FAQs | ✅ claimed |
| OSHA 10 & 30, fair housing, sexual harassment training | Drain & Sewer page | ✅ claimed |
| NuDrain / NuFlow Certified Installer | Home, Trenchless page | ✅ |
| Certification graphic also shows "Insured", "General Contractor", "Electrical/Plumbing Certified", "Quality Guaranteed" | Certifications hero image `[ss: 10]` | ✅ image only |

### Services (complete list as published)

**Plumbing:** water heaters (standard & tankless install/replace/maintain); leak detection & slab leak repair; drain & sewer (blockages, camera inspections, main line repairs); trenchless sewer repair; pipe bursting; repipes & new installs (PEX, copper, full system); fixture repairs & installs (faucets, toilets, showers); code-compliant updates; same-day service; 24/7 emergency plumbing; "start to finish including cement, drywall, and flooring surfacing restoration."

**Electrical:** panel rebuilds & replacements (service upgrades, breakers, safety compliance); dedicated circuits & wiring (appliances, HVAC, EV chargers); lighting (LED retrofits, security, common-area, custom layouts); outlet & switch installs (turnover updates, GFCI, modern finishes); troubleshooting; 24/7 emergency electrical; new construction & remodel installs.

**HVAC:** central heating & air; split systems; mini-splits; package units; rooftop units; soffit-mounted air handlers; heat pumps; equipment change-outs; preventive maintenance; troubleshooting; new construction installs; system upgrades — residential, multifamily, commercial.

**Drain & sewer / trenchless:** NuDrain/NuFlow epoxy pipe lining (cured-in-place); pipe bursting; pipe types: cast iron, ABS, PVC, vitrified clay, concrete, ductile iron (DIP), HDPE; free hydro-jetting and/or pipe inspection offer ("Ask me how!").

**Drain cleaning methods (10):** drain snaking/cabling; mechanical augering; root cutting; hydro-jetting; high-flow sewer jetting; chain knocking/flailing; mechanical pipe descaling; rotary brush cleaning; flex-shaft drain cleaning; enzymatic/biological treatment.

**Emergency / restoration:** plumbing leaks, electrical failures, fire damage, flooding, mold, asbestos, lead; insurance coordination; large-scale disaster response. ⚠️ Restoration is referenced across the site but **has no dedicated page**.

**Other work evidenced in showcases (not listed as services):** irrigation/sprinkler valve replacement; slide gate motor replacement with photo-eye sensors and loop detectors. ⚠️ Confirm whether these are offered services.

### Service areas

Homepage list: **Anaheim, Brea, Chino, Corona/Norco, Fullerton, Garden Grove, Huntington Beach, Irvine, Orange, Riverside, Santa Ana, "And more!"** — "Reach out if your town is not listed!" A service-area map image is shown ("Map showing Southern California cities within a red boundary").

Conflicting mentions elsewhere (⚠️ confirm with client):
- Plumbing FAQ: "Orange & South County, as well as most Inland Empire & San Bernardino Counties"
- Electrical FAQ: includes **Los Angeles**
- Drain & Sewer hero: "Orange & Riverside Counties' along with **Arizona**"
- Financing FAQ: "California and **Arizona**"
- Project showcases located in Cypress, Ontario, Highland (CA)

### Social & listings

| Platform | URL |
|---|---|
| Google (Maps) | https://maps.app.goo.gl/JFuDfKaphYBdyT2K8 |
| Facebook | https://www.facebook.com/FWCCOMPANIES |
| Instagram | https://www.instagram.com/fwccompaniesllc/ |
| Yelp | https://www.yelp.com/biz/fwc-companies-placentia |
| BBB | https://www.bbb.org/us/ca/placentia/profile/general-contractor/fwc-llc-1126-850066125 |

### Testimonials & reviews
**None on the website.** ❓ Ratings on Google/Yelp/BBB were not checked — recommend pulling real reviews (with permission) for the new site.

### Careers
"Join the team!" — "Want to be a part of a team you can be proud of? Apply today… We are always looking for experienced plumbers, electricians, finished carpenters, flooring & countertop installers, and more!" Button: **Apply Online** (destination ❓ not verified).

---

## 3. Complete Existing Sitemap

Source: `https://fwccompanies.com/sitemap.xml` (13 URLs) + navigation crawl. `robots.txt` allows all, disallows `/__manifest`, `/*.data`, `/cdn-cgi/`, `/preview`, `/ping`.

```
/ (Home)
├── Services (menu group — no landing page; /services = 404)
│   ├── /services/plumbing-services
│   ├── /services/drain-sewer-restoration-and-repairs
│   ├── /services/trenchless-pipe-bursting
│   ├── /services/drain-cleaning-root-removal
│   ├── /services/electrical-services
│   ├── /services/hvac-installs-and-service
│   └── /services/emergency-response-services
├── Project Showcases (menu group — no index page)
│   ├── /project-showcases/efficient-irrigation-valve-replacement-cleanup
│   ├── /project-showcases/commercial-water-heater-clean-out-restores-performance
│   └── /project-showcases/show-off-your-slide-gate-motor-replacement-with-safety-upgrades
├── Certifications (menu group)
│   └── /certifications/certifications
└── Monthly Payments/Financing (menu group)
    └── /monthly-payments-financing/monthly-payment-opetions

External: Client Login → https://clienthub.getjobber.com/client_hubs/5f587aec-e1e7-4481-b99d-dc3479a5a376/login/new
Tested 404s: /about, /contact, /services
```

**Header (all pages):** logo · phone (714) 410-2728 · Client Login · Monthly Payment Options (button) · hamburger menu `[ss: 04]`.
**Footer (all pages):** "FWC LLC" · Contact (Google/Facebook/Instagram/Yelp icons, phone, email, address, Client Login) · Business Hours table with "Open Now" badge · Quick Links (all 13 pages) · "Powered by Jobber" `[ss: 03]`.
**Global floating element:** Jobber AI chat bubble (bottom-right) `[ss: 06]`.

---

## 4. Page-by-Page Content Inventory

> All pages share the header/footer above. "Get an Estimate" buttons appear to scroll to / open the Jobber request form ⚠️. FAQ answers are present in both accordions and FAQPage JSON-LD.

### 4.1 Home — https://fwccompanies.com/
- **Purpose:** Overview, trust, service summary, lead capture.
- **SEO title:** FWC Companies : Plumbing, Electrical, Hvac Specialists in OC & IE
- **Meta description:** "FWC Companies offers expert Plumbing, Electrical, and HVAC services in Orange County and Inland Empire. Licensed, Certified, and available 24/7 for emergencies. Check this link for our Monthly Payment Options: https://app.gethearth.com/partners/fwc-llc" (⚠️ raw URL in meta)
- **Structured data:** `WebSite` (name "FWC LLC"), `FAQPage` (3 Q&As). Canonical present; 4 Open Graph tags; `lang="en"`.

| Section | Content | Headings | CTA |
|---|---|---|---|
| Hero (navy left panel + image right) `[ss: 01]` | "Licensed plumbing, electrical, hvac with emergency services available 24/7 in O.C. & I.E." Image = FWC logo graphic (flag/cross/hammer + "FWC Plumbing Electrical… CSLB… 24/7 Emergency 714-410-…") | **H1:** Plumbing, Electrical, HVAC Services in O.C. & I.E. | Get an Estimate |
| Why use us? `[ss: 02]` | Three long text blocks (Plumbing / Electrical / HVAC "We specialize in" lists — see §2) beside sticky NuDrain/NuFlow badge | H2: We handle all Plumbing, Electrical, & HVAC · H3: Comprehensive Plumbing Solutions · H3: Expert Electrical Solutions · H3: Experienced HVAC Solutions | — |
| Services cards | Plumbing ("Complete plumbing repairs and installations including emergency plumbing and water heater swaps."), Electrical ("Electrical panel upgrades, service calls, and emergency electrical repairs by certified experts."), HVAC ("Service and Custom HVAC services for residential and multifamily projects."), Trenchless ("Discover how NuFlow's trenchless epoxy pipe lining restores aging drain and sewer pipes, minimizing excavation, demolition, and disruption.") | H2: Explore our expert services · 4×H3 | Card links |
| Emergency banner | "Fast, certified response for plumbing, electrical, and restoration emergencies. Call or chat now!" | H2: Available 24/7 for emergency repairs | — |
| Service areas | 11 cities + "And more!" "Reach out if your town is not listed!" | H2: Proudly Serving OC & IE Communities | Get an Estimate |
| Map | Service-area map image | H2: Service Location Maps | — |
| About FWC ("Our promise") | Company description, certifications (asbestos/lead/mold), insurance coordination, stocked inventory, "reliable partner for construction and emergency services in Orange County and beyond." Image: two workers in hard hats | H2: About FWC | — |
| Careers | Recruiting copy (see §2) | H2: Join the team! | Apply Online |
| FAQ (accordion) | Do you offer emergency repair services? · Are you certified for asbestos, lead, and mold removal? · Do you work with insurance companies? | H2: Frequently asked questions · 3×H3 "Question" | — |
| Estimate form | Embedded Jobber request iframe (150px tall) — did not render in our session `[ss: 05]` | H2: Get an Estimate | — |

**Images (14):** logo; hero (×2, same file); NuDrain badge; 6 service/gallery photos; map; workers photo; one 1050×1050 image; Jobber logo. Alt text: 8 are "Uploaded image" or "Generating alt text…".

### 4.2 Plumbing Services — /services/plumbing-services
- **Title:** Plumbing Services
- **Meta:** "Reliable plumbing solutions in Anaheim and surrounding areas. From water heater swaps to slab leak repairs, trust **RPM Property Services Inc.**" 🔴
- **H1:** Plumbing Services in OC, IE, and Beyond — "Trusted plumbing solutions for residential and multifamily properties in Orange and Riverside Counties, CA." CTA: **Get In Contact**
- **Benefits (H2: Why Choose Our Plumbing Services):** Comprehensive Plumbing Repairs (incl. cement, drywall, flooring restoration) · Stocked Truck Inventory for Fast Service · Certified and Experienced Team (asbestos, lead, mold) · 24/7 Emergency Response
- **Gallery:** "Snip of some of our service work" (1 image)
- **CTA band:** "Need Immediate Plumbing Assistance? Contact Us Today!" → Get an Estimate
- **FAQ (5):** issue types handled · licensed & certified · emergency response ("Usually onsite within 1 hour") · insurance (fire, flood, mold, mitigation) · areas beyond Anaheim/OC ("Orange & South County… Inland Empire & San Bernardino Counties"). Final CTA: Get In Contact.

### 4.3 Electrical Services — /services/electrical-services
- **Title:** Electrical Services
- **Meta:** "Reliable electrical services in Anaheim and surrounding areas. From service calls to full panel upgrades, trust **RPM Property Services Inc.**" 🔴
- **H1:** Expert Electrical Services in OC & IE — "Providing comprehensive electrical solutions for homes and businesses in OC, IE, and nearby areas." CTA: Get an Estimate
- **Benefits:** Experienced Electricians · Comprehensive Solutions (repairs → rewiring, panel upgrades) · Emergency Service Available (24/7) · Quality Workmanship
- **Gallery:** "Our work" · **CTA:** "Schedule Your Electrical Service Today" → Get In Contact
- **FAQ (5):** residential services · licensed & insured · emergencies · new construction/remodel · areas (Anaheim, Santa Ana, OC, **Los Angeles**, Irvine, Huntington Beach, Garden Grove, Fullerton).

### 4.4 HVAC Installs and Service — /services/hvac-installs-and-service
- **Title:** HVAC Installs and Service
- **Meta:** "Expert restoration and remediation services in Anaheim, California. Fire, flood, mold, asbestos, and lead removal. 24/7 emergency response." 🔴 (wrong page copy)
- **H1:** HVAC Service and Installations — "Fast and reliable Heating and Cooling services for residential, Commerical, & Multifamily properties." (typo)
- **Benefits:** Repair, Service, & Preventive Maintenance · New Construction Installations · Comprehensive Trouble Shooting Solutions (🔴 body copy is about fire/flood/mold/asbestos restoration — wrong) · 24/7 Emergency Response · Insurance Collaboration
- **CTA:** "COOL OFF HOT HEAD!" — "Contact FWC for expert repairs/installs now!" → Get in Contact
- **FAQ (5):** warranties · emergency response (within the hour) · insurance · systems installed · brands serviced.

### 4.5 Emergency Response Services — /services/emergency-response-services
- **Title:** Emergency Response Services
- **Meta:** "Fast, reliable emergency response services for plumbing, electrical, fire, flood, and mold issues in Anaheim and surrounding areas."
- **H1:** Emergency Response Services in Anaheim & Orange County — "Rapid assistance for plumbing, electrical, fire, flood, and mold emergencies—24/7 availability to protect your property."
- **Benefits:** Immediate Response (includes "714-410-2728" in text) · Comprehensive Solutions · Certified Expertise ("We use all the same tooling and software's insurance requires.") · Trusted Local Professionals ("Based in Anaheim/Placentia with a large crew…")
- **CTA:** "Get Immediate Help Now" → **PANIC BUTTON! CALL NOW**
- **FAQ (5):** emergency types · arrival time · licensing/certs · insurance · large-scale disaster response.
- **Images:** construction-site interior photos (good descriptive alt text).

### 4.6 Trenchless & Pipe Bursting — /services/trenchless-pipe-bursting
- **Title:** Trenchless & Pipe Bursting
- **Meta:** "Expert trenchless sewer and drain pipe restoration in Orange County. Minimize disruption with epoxy pipe lining solutions."
- **H1:** Drain & Sewer Restoration in Orange County (⚠️ H1 doesn't match page name / title) `[ss: 07]`
- **Content `[ss: 08]`:** "Where Can Pipe Lining Be Used? Just about Anywhere!" (corrosion/pinhole leaks copy) · "Why Go Trenchless?" · "Where to use Lining Systems": single-family & multi-tenant, high-rise condos/apartments, commercial, hospitals, historic buildings, schools, yard/property drains, any building with DWV systems · "Once pipes are repaired you will notice": improved flow rate, structurally sound pipes, no groundwater contamination, no tree root invasion.
- **Image:** NuDrain 4-step process infographic (Inspection & Diagnosis → Cleaning → Lining → Cure & Evaluation) `[ss: 09]` — valuable to rebuild as HTML.
- **Benefits:** Minimizes Disruption · Cost-Effective Solution · Long-Lasting Results · Versatile Applications
- **CTA:** "Restore Your Sewer System Today" → Get an Estimate
- **FAQ (6):** pipe types for epoxy lining · how trenchless works (cured-in-place liner) · suitability… (6 Qs total).

### 4.7 Drain & Sewer Restoration and Repairs — /services/drain-sewer-restoration-and-repairs
- **Title:** Drain sewer restoration and repairs
- **Meta:** "Expert drain sewer restoration and repairs by FWC LLC in Orange County and surrounding areas. Reliable plumbing solutions you can trust."
- **H1:** Drain & Sewer Restoration Specialist. — "Expert sewer and drain pipe services across Orange & Riverside Counties' along with Arizona by FWC LLC" · CTA: **Get a FREE sewer pipe inspection.**
- **Benefits (H2: Why do we call ourselves Drain Sewer Specialist?):** Comprehensive Pipe Solutions (pipe materials list; typo "Cast Rron") · Advanced Cleaning Techniques · Certified Plumbing Specialists (OSHA 10 & 30 etc.) · 24/7 Emergency Response → "Call Now!"
- **Offer block:** "Everyone likes a free service — Free hydro jetting &/or pipe Inspection services. Ask me how! Hit the get quote button."
- **FAQ (6):** sewer repair types · underground drain repair · Huntington Beach & Garden Grove · emergency response · hazardous-material certs · trenchless.

### 4.8 Drain Cleaning Root Removal — /services/drain-cleaning-root-removal
- **Title:** Drain cleaning root removal
- **Meta:** "Expert drain cleaning root removal by FWC LLC in Santa Ana and Orange County. Reliable, efficient sewer pipe cleaning solutions."
- **H1:** Drain Cleaning Root Removal Experts in Orange & Riverside Counties — "Professional sewer pipe cleaning and root removal services." CTA: **Get my pipes flowing again!**
- **"Types of Clog Removal — What Method to use?"**: 10 method cards each with one-line use case (see §2).
- **Benefits:** Comprehensive Cleaning Methods · Prevent Sewer Blockages · Experienced Technicians · 24/7 Emergency Response
- **CTA:** "Schedule Your Drain Root Removal Today" (Garden Grove, Fullerton) → Get an Estimate
- **FAQ (5):** root causes · hydro-jetting · Huntington Beach · inspection frequency · descaling risk.

### 4.9 Certifications — /certifications/certifications
- **Title:** Certifications · **Meta:** "Explore our industry certifications and accreditations that ensure quality, safety, and expertise in every project."
- **H1:** Certified for Your Peace of Mind — "Trust our industry-leading certifications… accredited, certified, & educated to the highest standards." `[ss: 10]`
- **Blocks:** BBB A+ Rated & Accredited (+ plain-text BBB URL) · EPA Ceritified Safe (typo) · Asbestos Trained & Certified · Mold Trained & Certified
- **CTA:** "Experience the Difference with Certified Experts" → Get an Estimate
- **Images (8):** 6 with "Uploaded image"/placeholder alt. No certificate numbers or expiry dates shown.

### 4.10 Monthly Payment Options — /monthly-payments-financing/monthly-payment-opetions
- **Title:** Monthly payment opetions (typo) · **Meta:** "Flexible monthly payment plans with 0% interest up to **$250,000**. Apply in under 2 minutes. Serving Santa Ana and nearby areas."
- **H1:** Flexible Monthly Payment Plans — "Affordable financing options for plumbing and remodeling projects with quick approval. https://app.gethearth.com/partners/fwc-llc" (raw URL as text)
- **Benefits:** Easy Application Process (under 2 min; doesn't affect credit score) · Fixed Monthly Payments (no prepayment penalties/hidden fees) · Fast Funding (1–5 days) · Competitive Loan Options (17 partners; loans up to **$400,000**; 0% interest; terms 12 months–30 years)
- **CTA:** "Explore The Options" → **Click To Get A Direct Link** (button)
- **FAQ (5):** qualifying projects · prepayment penalties · approval time · how to apply · areas (California & Arizona).
- ⚠️ Lending claims (0% APR, amounts, credit impact) should be confirmed against Hearth's current terms and compliance language.

### 4.11–4.13 Project Showcases (template: H1 title · "Month, Year | City, California" · Project Overview → Summary / The Work / The Outcome · Image Gallery "Get inspired by our work") — **no meta descriptions on any**

| Page | Date / Location | Summary | Images |
|---|---|---|---|
| [Efficient Irrigation Valve Replacement & Cleanup](https://fwccompanies.com/project-showcases/efficient-irrigation-valve-replacement-cleanup) | April 2026 · Cypress, CA | Replaced worn ¾" Orbit sprinkler valve, reconnected wiring, leak-tested, cleaned up | 5 |
| [Commercial water heater clean-out restores performance](https://fwccompanies.com/project-showcases/commercial-water-heater-clean-out-restores-performance) `[ss: 11]` | July 2026 · Ontario, CA | Drained/disassembled 100-gal commercial tank, removed calcium/lime/sediment, flushed, relit, leak-checked | 10 |
| [Show off your slide gate motor replacement with safety upgrades](https://fwccompanies.com/project-showcases/show-off-your-slide-gate-motor-replacement-with-safety-upgrades) | May 2026 · Highland, CA | New slide gate motor, 2 photoelectric sensors, 2 loop detector modules, tested to manufacturer requirements | 6 |

⚠️ The third title ("Show off your…") reads like an unedited AI/template prompt — rename before migration.

---

## 5. Design & Branding Analysis

| Element | Current state |
|---|---|
| **Logo** | Patriotic metallic emblem: US flag + cross + crossed hammer/wrench + "FWC" chrome lettering, "Plumbing Electrical…", CSLB number, "24/7 Emergency 714-410-…". Used as header icon (file is 1536×1024 shown at ~75px) and as the homepage hero image. No simplified/horizontal/monochrome/SVG variant observed. ❓ Request vector source. |
| **Colours (computed)** | Navy hero/panels `#1F3B4D` (rgb 31,59,77) · Footer near-black navy `#0E1A22` · Primary CTA maroon `#800000` (Monthly Payment Options) · Body text `#233D48` / `#333333` · Light section bg ≈ `#F1F2F4` · White. Logo adds red/blue/chrome. |
| **Typography** | Headings: **Poppins** (H1/H2 36px 700; H3 26px 600). Body: **Open Sans** 16px 400. H1 and H2 are the same size — weak hierarchy. Homepage "Why use us" body copy renders in large bold, hurting readability `[ss: 02]`. |
| **Header** | White sticky bar: logo · phone · Client Login (outlined) · Monthly Payment Options (maroon, 8px radius) · hamburger. Hamburger used even on desktop; slide-in panel with accordion groups `[ss: 04]`. |
| **Hero** | Split layout: navy text panel left, image right. Service page heroes sometimes render with an empty/late-loading image area `[ss: 07]`. Showcase hero uses full-bleed photo with dark overlay `[ss: 11]`. |
| **Sections** | Jobber template blocks: two-column image/text, eyebrow pill labels ("Benefits", "Advantages", "FAQs"), 4-up benefit cards, CTA bands, accordions, galleries. Spacing is generous but repetitive. |
| **Footer** | Dark 3-column: Contact, Business Hours table, Quick Links (two columns of all 13 pages, inconsistent capitalisation). |
| **Imagery** | Real job-site photos (authentic, but inconsistent quality/crop), vendor badges and infographic images, a likely AI-generated certification banner. |
| **Mobile** `[ss: 12]` | Stacks correctly; header reduces to logo + hamburger (phone number hidden from header on mobile — a missed click-to-call); chat bubble overlaps hero CTA at narrow widths; hero image appears below the fold. |
| **Animation/interaction** | Accordions, slide-in menu, gallery, floating chat. No notable motion. |
| **Tone** | Mixed — professional copy alongside informal/caps lines ("PANIC BUTTON! CALL NOW", "COOL OFF HOT HEAD!", "Ask me how!"). |

**Outdated/weak elements:** template look identical to other Jobber sites; chrome/clip-art logo as hero; no trust strip (reviews, licence, years, jobs completed); no photography of the team/trucks in hero; repetitive section patterns; no visual differentiation between the three trades.

---

## 6. Existing Functionality & User Workflows

| Feature | Provider | Workflow | Status |
|---|---|---|---|
| **Click-to-call** | Native `tel:` | Header/footer/menu phone links | ✅ |
| **Get an Estimate (request form)** | Jobber Client Hub embedded request form (`clienthub.getjobber.com/hubs/…/public/requests/1996540/embedded_new`) | User clicks "Get an Estimate" → form at page bottom → submits request into Jobber | ⚠️ Iframe was 150px and showed a broken-content icon in our session; direct URL returned a Cloudflare block for our automated browser. **Fields not verified.** Test manually on a normal browser/phone. |
| **Client Login** | Jobber Client Hub | Existing clients log in to view quotes, invoices, appointments, pay ⚠️ | ✅ link |
| **Live chat** | Jobber AI chat ("FWC LLC chat — Powered by Jobber AI") | Bubble → "Get started with chat": Your name, Phone number or email → Chat Now | ✅ (not submitted) |
| **Financing** | Hearth partner page | "Monthly Payment Options" / "Click To Get A Direct Link" buttons (no `href` — JS-driven) → Hearth application | ⚠️ Destination inferred from on-page URL |
| **FAQ accordions** | Jobber | Expand/collapse; mirrored in FAQPage schema | ✅ |
| **Image galleries** | Jobber | On service & showcase pages | ✅ |
| **Business hours / Open Now badge** | Jobber | Auto status | ✅ |
| **Careers "Apply Online"** | Unknown | Button | ❓ destination not verified |
| **Analytics** | Google tag (gtag.js); Datadog RUM (Jobber platform) | — | ✅ scripts present; GA property ID not recorded |
| **Search, blog, booking calendar, e-commerce, registration, downloads, embedded map** | — | — | **Not present** |

---

## 7. Assets & Media Inventory

All site images are on Jobber's CDN: `https://d13cw1lxlociqy.cloudfront.net/<id>`. Recommend obtaining originals from the client rather than scraping.

| Asset | URL | Size | Notes |
|---|---|---|---|
| Primary logo | https://d13cw1lxlociqy.cloudfront.net/z3siq4r1jksopx1lxlgit9d3qato | 1536×1024 | Raster; request vector |
| Home hero (logo graphic) | https://d13cw1lxlociqy.cloudfront.net/ig3c1odsecrwx5ihmj3j2wf2ay40 | 997×600 | Loaded twice |
| NuDrain/NuFlow badge | https://d13cw1lxlociqy.cloudfront.net/cb9ng6yh02ezvv7xdv56ce2mrfj7 | 1000×839 | ⚠️ Partner trademark — confirm usage rights |
| Home service images | …/vvtc8206sya5vb5yzuxrs4ot513n (720×720), …/u287b8ltogn40ge3t1eazckplx83 (720×480), …/y9rqgrhujzqnzch5fpbxgo7adome, …/os98a7c7ehtumkrntidmeekltk1h, …/oee645xdi0z3ev6gbc8xuqjpuw69, …/0tbgkilpay9i3z7dpeo8flwaf3i9 (720×540) | — | Job photos |
| Service-area map | https://d13cw1lxlociqy.cloudfront.net/76qg8fadcgz6bn7g7uknsgw3y5nr | 720×540 | Replace with interactive map |
| Workers photo (About) | https://d13cw1lxlociqy.cloudfront.net/rx11uc1pw7uarkqgvqax0cxdsc92 | 1024×1024 | ⚠️ May be stock/AI — confirm |
| Home image (careers?) | https://d13cw1lxlociqy.cloudfront.net/p3adijy4dbobacxlke7wtpsh9cd0 | 1050×1050 | |
| Plumbing gallery | https://d13cw1lxlociqy.cloudfront.net/8qasfql3zj8fqiedefw9tzay4d7b | — | |
| Slide-gate showcase | https://d13cw1lxlociqy.cloudfront.net/z8ykfv19jod95e0pwb2mwomyevvo | — | |
| NuDrain process infographic | Trenchless page | — | Rebuild as accessible HTML steps |
| Certification banner + BBB seal | Certifications page | — | Get official BBB/EPA badge files |
| Videos / PDFs / downloads | — | — | **None found** |
| Favicon | ❓ not recorded | | |

**Image counts per page:** Home 14 · Plumbing 3 · Electrical 4 · HVAC 5 · Emergency 5 · Certifications 8 · Financing 5 · Trenchless 6 · Drain & Sewer 5 · Drain Cleaning 6 · Showcases 5 / 10 / 6 (includes logo + Jobber logo).

---

## 8. SEO Analysis

### 8.1 Titles & descriptions

| URL | Title | Meta description | Issues |
|---|---|---|---|
| / | FWC Companies : Plumbing, Electrical, Hvac Specialists in OC & IE | Has raw Hearth URL | "Hvac" casing; URL in meta |
| /services/plumbing-services | Plumbing Services | **RPM Property Services Inc.** | 🔴 wrong company; generic title |
| /services/electrical-services | Electrical Services | **RPM Property Services Inc.** | 🔴 wrong company; generic title |
| /services/hvac-installs-and-service | HVAC Installs and Service | Restoration copy | 🔴 mismatched |
| /services/emergency-response-services | Emergency Response Services | OK (Anaheim) | No brand/location in title |
| /services/trenchless-pipe-bursting | Trenchless & Pipe Bursting | OK | H1 mismatch |
| /services/drain-sewer-restoration-and-repairs | Drain sewer restoration and repairs | OK | Sentence case, no brand |
| /services/drain-cleaning-root-removal | Drain cleaning root removal | OK (Santa Ana) | Sentence case |
| /certifications/certifications | Certifications | OK | Duplicate URL segment |
| /monthly-payments-financing/monthly-payment-opetions | Monthly payment opetions | $250k vs page $400k | 🔴 typo in URL+title |
| 3 × /project-showcases/… | Project titles | **Missing** | No descriptions |

### 8.2 Other SEO issues
- **No LocalBusiness / Plumber / Electrician / HVACBusiness schema** (only `WebSite` + `FAQPage`). No NAP, geo, hours, `sameAs` in schema.
- **No location pages** despite 11+ cities listed; location targeting is scattered and contradictory across pages (Anaheim, Santa Ana, Placentia, Norco, Riverside, LA, San Bernardino, Arizona).
- **Alt text:** ~24 images use "Uploaded image" or "Generating alt text…".
- **Heading semantics:** every FAQ item is `<h3>Question</h3>` (≈47 meaningless H3s site-wide); H1/H2 equal visual size.
- **Thin/duplicate content:** benefit cards and FAQs repeat the same "24/7 / certified / insurance" points on every page.
- **No About/Contact/Reviews pages** — weak E-E-A-T signals; no testimonials, licence number, team, or years in business stated.
- **URL structure:** redundant (`/certifications/certifications`), typo slug, verbose showcase slugs, category paths without index pages (`/services` 404).
- **Links:** BBB and Hearth URLs appear as plain text, not links. Footer Quick Links list every page with inconsistent capitalisation.
- **Broken/missing:** No broken internal links found among the 13 sitemap URLs (all 200). 404 page has empty `<title>`. Estimate form iframe failed to render in testing ❓.
- **Performance:** DOMContentLoaded ≈0.5s, load ≈0.7s on desktop cached view (rough, single sample). Oversized logo (1536px for ~75px display) and duplicate hero load. Core Web Vitals ❓ not measured — run PageSpeed Insights.

---

## 9. UX/UI Issues

| Area | Issue | Severity |
|---|---|---|
| Lead capture | Only one form, at the very bottom of pages, inside a small iframe that may not render; no quick "call / text / request" bar on mobile | High |
| Trust | No reviews, testimonials, licence #, team photos, years in business, or guarantees above the fold | High |
| Navigation | Hamburger on desktop hides all services; parent items ("Services", "Project Showcases") aren't pages; Certifications/Financing groups each contain one link; Esc doesn't close menu | High |
| Content accuracy | Wrong company in meta, wrong HVAC benefit copy, conflicting areas & loan amounts, typos | High |
| Information architecture | Restoration/mitigation, water heaters, leak detection, repipes, EV chargers, panel upgrades — key money services — have no pages | High |
| Hierarchy & readability | Large bold body paragraphs on home; long bullet lists; H1 = H2 size | Medium |
| Mobile | Phone not in mobile header; chat bubble overlaps CTA; hero image pushed below fold | Medium |
| Tone | "PANIC BUTTON!", "COOL OFF HOT HEAD!" may undercut professionalism with property managers | Medium |
| Imagery | Logo used as hero image; inconsistent photo quality; vendor/AI graphics carry key information as images | Medium |
| Accessibility | Poor alt text; text-in-images (process infographic, cert banner); meaningless H3s; non-link buttons for navigation (financing); contrast of white-on-maroon OK, but check small grey text ❓ | Medium |
| Showcases | Only 3 projects, odd titles, no index/filter, no before/after | Low–Medium |

---

## 10. Proposed New Website Sitemap

```
Home
├── Services (index)
│   ├── Plumbing
│   │   ├── Water Heaters (Tank & Tankless)            [NEW]
│   │   ├── Leak Detection & Slab Leak Repair          [NEW]
│   │   ├── Repiping (PEX/Copper)                      [NEW]
│   │   ├── Drain Cleaning & Root Removal              (migrate)
│   │   ├── Sewer & Drain Repair                       (migrate: drain-sewer-restoration)
│   │   └── Trenchless Pipe Lining & Pipe Bursting     (migrate)
│   ├── Electrical
│   │   ├── Panel Upgrades & Rebuilds                  [NEW]
│   │   ├── EV Charger & Dedicated Circuits            [NEW]
│   │   └── Lighting & Unit Turnover Electrical        [NEW]
│   ├── HVAC
│   │   ├── AC & Heat Pump Installation                [NEW]
│   │   └── HVAC Repair & Maintenance                  [NEW]
│   ├── 24/7 Emergency Services                        (migrate)
│   └── Restoration & Mitigation (Fire/Flood/Mold/Asbestos/Lead) [NEW — confirm scope]
├── Who We Serve                                       [NEW]
│   ├── Multifamily & Property Managers
│   ├── Homeowners
│   └── Commercial
├── Service Areas (index + map)                        [NEW]
│   └── /service-areas/{city}  (Anaheim, Brea, Chino, Corona/Norco, Fullerton, Garden Grove,
│        Huntington Beach, Irvine, Orange, Riverside, Santa Ana …)
├── Projects (filterable index)                        [NEW index]
│   └── /projects/{slug}                               (migrate 3)
├── Financing                                          (migrate, fix)
├── About                                              [NEW]
│   ├── Licenses & Certifications                      (migrate)
│   └── Reviews                                        [NEW]
├── Careers                                            [NEW]
├── FAQ (consolidated)                                 [NEW, from existing FAQs]
├── Contact / Get an Estimate                          [NEW]
└── Utility: Client Login (Jobber), Privacy Policy [NEW], Terms [NEW], Accessibility statement [NEW], 404
```

### Page specifications

| Page | Purpose | Recommended sections | Migrate | New content needed | Components | Functional reqs | Primary CTA |
|---|---|---|---|---|---|---|---|
| **Home** | Convert visitors; route to trade | Hero (headline, sub, dual CTA, trust chips: licensed/24-7/BBB A+/~1hr response) · Trade selector (Plumbing/Electrical/HVAC/Emergency) · Why FWC (stocked trucks, multifamily expertise, certs, insurance coordination) · Featured projects · Reviews · Service-area map · Financing teaser · Careers teaser · FAQ · Estimate form | Hero copy, service summaries, About copy, area list, FAQ, careers copy | Real hero photo (crew/trucks), reviews, stats (years, jobs), licence # | Hero, icon cards, logo strip, testimonial carousel, map, accordion, sticky CTA bar | Native form → Jobber; click-to-call tracking; LocalBusiness schema | Call (714) 410-2728 / Get an Estimate |
| **Services index** | Overview of all services | Grid by trade with short descriptions | Card blurbs | Short blurbs for new pages | Card grid | — | Get an Estimate |
| **Trade pages** (Plumbing, Electrical, HVAC) | Rank & convert per trade | Hero · Sub-service cards · Why us · Process steps · Gallery/projects · Brands (HVAC) · Areas served · FAQ · CTA form | "We specialize in" lists, benefits, FAQs, brand list, galleries | Unique intro copy per trade; corrected meta | Hero, cards, steps, gallery, accordion, inline form | Service schema + FAQ schema | Get an Estimate |
| **Sub-service pages** | Long-tail SEO | Problem → solution · Methods · Pricing factors · FAQ · CTA | Drain methods list, trenchless use-cases, pipe types, NuDrain process | Copy for new sub-services | Method cards, process stepper (rebuild infographic in HTML) | — | Free sewer inspection / Get an Estimate |
| **Emergency** | Immediate call capture | Big call button · What counts as emergency · Response promise (~1 hr, location-dependent) · Insurance coordination · FAQ | All emergency copy & FAQs | Reworded CTA (replace "PANIC BUTTON") | Sticky call bar, checklist | Click-to-call, after-hours messaging | Call Now |
| **Restoration & Mitigation** | Capture insurance-related jobs | Fire/flood/mold/asbestos/lead · Insurance process · Certifications | Restoration copy scattered across pages | Confirm scope & process | Process steps, cert badges | — | Call / Request inspection |
| **Who We Serve** pages | Speak to property managers vs homeowners | Pain points · Services · Turnover/maintenance programs · Case studies | Multifamily mentions | Audience-specific copy, any PM programs | Split content, logos (if permitted) | Optional commercial inquiry form | Request a Proposal |
| **Service Areas + city pages** | Local SEO | City intro · Services in city · Projects in city · Map · FAQ | City list, map | Unique copy per city (avoid doorway pages) | Map, city grid | Interactive map (Google/Mapbox) | Get an Estimate |
| **Projects index & detail** | Proof of work | Filter by trade/city · Summary / The Work / The Outcome · Before/after · Related service | 3 showcases (rename slide-gate title) | More projects; before/after photos | Filter chips, cards, lightbox, before/after slider | CMS collection | Start Your Project |
| **Financing** | Remove price objection | How it works · Benefits · Terms (verified) · FAQ · Apply | All financing copy & FAQs | Confirm amounts/APR/terms & compliance disclaimer with Hearth | Steps, benefit cards, accordion | Proper outbound link to Hearth; event tracking | Check Your Rate |
| **About** | Trust/E-E-A-T | Story/history · Mission & values · Team · Locations (Placentia, Norco?) · Licences · Community | About copy | History, mission, team bios/photos, licence # | Timeline, team grid | — | Contact Us |
| **Licenses & Certifications** | Verify credentials | Cards per cert with issuer, number, link | 4 cert blocks, BBB URL | Cert numbers, badge files | Badge cards with links | Linked BBB profile | Get an Estimate |
| **Reviews** | Social proof | Aggregate rating · Reviews · Links to Google/Yelp/BBB | Social links | Real reviews (permission) | Review cards/widget | Optional review platform embed | Leave a Review / Get an Estimate |
| **Careers** | Recruiting | Why work here · Open roles (plumbers, electricians, finish carpenters, flooring & countertop installers) · Benefits · Apply | Careers copy | Roles, benefits, application flow | Job cards | Application form with file upload (or ATS link) | Apply Now |
| **FAQ** | Consolidated answers | Grouped by trade/emergency/financing/insurance | ~45 existing FAQs (dedupe) | — | Grouped accordions, search | FAQPage schema | Contact |
| **Contact / Estimate** | Single conversion page | Form · Phone/email/address · Hours · Map · Areas | NAP, hours | — | Form, map | Form with spam protection, Jobber integration, confirmation page, conversion tracking | Submit Request |

---

## 11. Recommended Design Direction

- **Personality:** dependable, fast, professional — "the crew property managers trust at 2 a.m." Keep patriotic/craft heritage but modernise.
- **Logo:** commission a cleaned-up vector system — full emblem (for trucks/print), simplified horizontal lockup and monochrome icon for web. Stop using the logo as the hero.
- **Palette (evolve existing):** Navy `#1F3B4D` (primary), Deep navy `#0E1A22` (footer/dark), Maroon/Red `#800000` → consider a brighter, accessible emergency red for CTAs, light neutral `#F1F2F4`, white; optional trade accents (blue = plumbing, amber = electrical, teal = HVAC) used sparingly. Validate WCAG AA contrast.
- **Typography:** keep **Poppins** (headings) + **Open Sans** (body) for continuity, or move to a single variable family (e.g., Inter) — establish a proper scale (H1 48–56 / H2 32–36 / H3 22–24 desktop).
- **Imagery:** real crew, branded trucks, before/after shots; consistent crop ratios; no text baked into images.
- **Layout patterns:** split hero with real photo + trust chips; icon-led trade cards; sticky mobile action bar (Call · Text · Estimate); horizontal desktop mega-menu with visible phone and "24/7 Emergency" pill.
- **Motion:** subtle reveal on scroll, accordion transitions; respect `prefers-reduced-motion`.

---

## 12. Functional Requirements for Development

**Existing → keep/replace**
1. Click-to-call everywhere; sticky on mobile; call tracking number optional (❓ client decision).
2. Estimate/request form — build native, accessible form (name, phone, email, address/city, service type, property type [single-family/multifamily/commercial], urgency, description, photo upload, preferred contact) that posts to **Jobber** (API/Zapier/embedded fallback). Include honeypot/Turnstile, success page, email notifications, GA4/Ads conversion events. ❓ Confirm current Jobber form fields with client.
3. Client Login link to Jobber Client Hub.
4. Jobber AI chat — retain or replace (❓ client decision); ensure it doesn't cover CTAs on mobile.
5. Financing link to Hearth partner page with proper `<a>` links and disclaimer.
6. FAQ accordions with FAQPage schema.
7. Project galleries with lightbox.
8. Business hours / open-now indicator.

**New (recommended)**
9. CMS-managed collections: Services, Locations, Projects, FAQs, Reviews, Jobs, Certifications.
10. Interactive service-area map + "Do you serve my city?" lookup (ZIP/city).
11. Reviews display (Google/Yelp/BBB) — via embed or manually curated.
12. Careers application form (resume upload) or ATS integration.
13. Structured data: LocalBusiness (Plumber/Electrician/HVACBusiness), Service, BreadcrumbList, FAQPage, Review/AggregateRating (only where compliant).
14. 301 redirect map from all 13 old URLs.
15. XML sitemap, robots, canonical tags, OG/Twitter cards, custom 404.
16. Analytics: GA4, Google Tag Manager, Search Console, call & form conversion tracking; cookie consent if required (CCPA notice).
17. Accessibility: WCAG 2.2 AA; keyboard-operable menu (Esc to close, focus trap); skip link.
18. Performance: responsive images (WebP/AVIF, `srcset`), lazy-loading, font subsetting; target LCP < 2.5s on mobile.
19. Security/maintenance: HTTPS/HSTS, form rate-limiting, automated backups, uptime monitoring, documented CMS roles.

**Proposed 301 redirects**

| Old | New |
|---|---|
| /services/plumbing-services | /services/plumbing |
| /services/electrical-services | /services/electrical |
| /services/hvac-installs-and-service | /services/hvac |
| /services/emergency-response-services | /services/emergency |
| /services/trenchless-pipe-bursting | /services/plumbing/trenchless-pipe-lining |
| /services/drain-sewer-restoration-and-repairs | /services/plumbing/sewer-drain-repair |
| /services/drain-cleaning-root-removal | /services/plumbing/drain-cleaning-root-removal |
| /certifications/certifications | /about/licenses-certifications |
| /monthly-payments-financing/monthly-payment-opetions | /financing |
| /project-showcases/efficient-irrigation-valve-replacement-cleanup | /projects/irrigation-valve-replacement-cypress |
| /project-showcases/commercial-water-heater-clean-out-restores-performance | /projects/commercial-water-heater-clean-out-ontario |
| /project-showcases/show-off-your-slide-gate-motor-replacement-with-safety-upgrades | /projects/slide-gate-motor-replacement-highland |

---

## 13. Content Migration Checklist

- [ ] NAP: FWC LLC / FWC Companies · (714) 410-2728 · robert@fwccompanies.com · 2007 E Miraloma Ave, Placentia, CA 92870 · 24/7
- [ ] Social links (Google, Facebook, Instagram, Yelp) + BBB profile URL
- [ ] Homepage hero, "Why use us" trade lists, service card blurbs, emergency banner, About FWC, careers copy
- [ ] Service-area city list (11 + "and more") and map
- [ ] All 7 service pages: H1/sub-heads, benefits, FAQs (fix HVAC "Trouble Shooting" card copy)
- [ ] Drain-cleaning 10-method list with descriptions
- [ ] Trenchless use-cases, "you will notice" list, NuDrain 4-step process (convert to HTML)
- [ ] Pipe materials list (fix "Cast Rron"), free hydro-jetting/inspection offer
- [ ] HVAC brands list; warranty statement; ~1-hour response statement
- [ ] Certifications (BBB A+, EPA, asbestos, mold, lead, OSHA 10/30, NuFlow/NuDrain installer)
- [ ] Financing benefits & FAQs (after verifying figures)
- [ ] 3 project showcases with all photos (rename titles)
- [ ] All ~45 FAQs (deduplicate, fix typos)
- [ ] Original-resolution photos and logo files from client (not CDN scrapes)
- [ ] Remove all "RPM Property Services Inc." references
- [ ] GA/Google tag IDs, Jobber hub/form IDs
- [ ] 301 redirects; resubmit sitemap in Search Console

---

## 14. Missing Information to Request from the Client

1. **Correct legal name, DBA, and CSLB licence number(s)** (C-36 plumbing, C-10 electrical, C-20 HVAC, B general?) and insurance/bonding details.
2. **Locations:** Is Placentia the only office? What is the Norco connection? Why do pages mention Anaheim/Santa Ana as base?
3. **Definitive service area** — counties/cities; is **Arizona**, **Los Angeles**, or **San Bernardino** actually served?
4. **Restoration/mitigation scope** — offered as a service line? Licences/certs (IICRC?) and insurance carriers worked with.
5. **Company history:** founding year, owner(s) story, team size, number of trucks, jobs completed.
6. **Mission, vision, values**, and preferred tone (keep "PANIC BUTTON"-style humour or go professional?).
7. **Reviews/testimonials** and permission to display; ratings on Google/Yelp/BBB.
8. **Certification details:** certificate numbers, issuing bodies, expiry; official badge files; NuFlow/NuDrain logo usage permission.
9. **Financing terms:** confirm with Hearth — max amount ($250k vs $400k), 0% APR conditions, term range, required disclosures, states covered.
10. **Lead handling:** current Jobber request form fields, who receives leads, response SLA, whether to keep Jobber AI chat, call-tracking preference.
11. **Careers:** open roles, benefits, pay ranges (CA pay-transparency), where "Apply Online" goes.
12. **Brand assets:** vector logo, brand colours/fonts (if any), truck wrap/uniform photos, team photos.
13. **Photography:** high-res originals; before/after sets; more projects (multifamily case studies especially).
14. **Commercial/multifamily clients** that can be named as references or logos.
15. **Warranty terms** in detail; any maintenance plans/memberships.
16. **Domain/hosting/DNS access**, Google Business Profile, Search Console & GA access.
17. **Confirmation of irrigation and gate-motor work** as offered services.
18. **Privacy policy / terms** — existing documents or need new ones.

---

## 15. Prioritised Development Recommendations

### 🔴 High
1. **Fix factual/brand errors immediately (even on the current site):** remove "RPM Property Services Inc." meta descriptions; correct HVAC meta & benefit copy; unify financing figures and service areas.
2. **Reliable lead capture:** native, mobile-first estimate form integrated with Jobber; sticky mobile Call/Estimate bar; verify the current iframe works for real users today.
3. **New information architecture:** visible desktop navigation, service/sub-service pages for high-value jobs (water heaters, slab leaks, repipes, panel upgrades, EV chargers, AC install), Contact and About pages.
4. **Local SEO foundation:** LocalBusiness schema, unique titles/metas with brand + location, Google Business Profile alignment, consistent NAP, service-area pages with unique content.
5. **Trust signals above the fold:** licence #, BBB A+, reviews, response-time promise, real crew photography.
6. **301 redirect plan** for all 13 URLs to protect existing rankings.

### 🟠 Medium
7. Professional visual redesign and logo system; consistent type scale; reduce wall-of-text sections.
8. Accessibility pass: real alt text, semantic FAQ headings, keyboard-operable menu, no text-in-images.
9. Projects index with filters and before/after; rename existing showcases.
10. Reviews page and Careers page with application form.
11. Image performance (responsive formats/sizes; drop 1536px logo for header SVG).
12. Analytics & conversion tracking (GA4/GTM, call tracking, form events).
13. Consolidated FAQ page; dedupe repeated benefit copy.

### 🟡 Low
14. Who-We-Serve audience pages (multifamily/property managers, homeowners, commercial).
15. Blog/resources (maintenance tips, trenchless explainer) for long-tail SEO.
16. Online booking/scheduling via Jobber (if client wants self-scheduling).
17. Spanish-language content (❓ ask client if relevant to their market).
18. Maintenance plan / membership landing page (if offered).

---

### Appendix A — Verification notes
- **Not verified:** estimate form fields and whether the iframe works for normal visitors (blocked/blank in our automated session); destinations of "Apply Online", "Monthly Payment Options" and "Click To Get A Direct Link" buttons (no `href`; JS-driven); full CSLB licence number; BBB rating and review platform ratings; Core Web Vitals; favicon; GA property ID.
- **Platform:** Jobber Websites (HTML server-rendered; assets on `d13cw1lxlociqy.cloudfront.net`; scripts: Google gtag.js, Datadog RUM).
- **Screenshots (fwc-screenshots.zip):** 01 home hero desktop · 02 home services + NuDrain badge · 03 footer · 04 nav menu open · 05 estimate form not rendering · 06 Jobber AI chat · 07 trenchless hero · 08 trenchless content · 09 trenchless benefits + NuDrain process · 10 certifications hero · 11 project showcase hero · 12 mobile home hero.