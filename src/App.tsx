import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Phone,
  Wrench,
  Zap,
  Wind,
  Building2,
  Truck,
  Layers3,
} from "lucide-react";
import { Header } from "./components/layout/Header";
import { Brand, CallButton, EstimateButton } from "./components/ui/Actions";
import { ServicesSection } from "./components/sections/Services";
import { LeadForm } from "./components/forms/LeadForm";
import { business, faqs } from "./data/content";
import { track } from "./lib/analytics";
export default function App() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Header />
      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span /> BASED IN PLACENTIA, CALIFORNIA
              </p>
              <h1>
                Plumbing.
                <br />
                Electrical. HVAC.
                <br />
                <span>Problems solved.</span>
              </h1>
              <p className="hero-description">
                Plumbing, electrical & HVAC services for the places you call
                home and the properties you manage.
              </p>
              <div className="hero-actions">
                <EstimateButton location="hero" />
                <a
                  className="hero-call"
                  href={business.tel}
                  onClick={() => track("phone_click", "hero")}
                >
                  <Phone size={17} /> Call our team
                </a>
              </div>
              <div className="hero-proof">
                <span>
                  <Check size={15} /> Residential & multifamily
                </span>
                <span>
                  <Clock3 size={15} /> 24/7 emergency help
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/images/plumbing.webp"
                alt="Service technician accessing tools in a fully equipped work van"
                width="476"
                height="612"
                fetchPriority="high"
              />
              <div className="photo-label">
                <span className="live-dot" />
                <div>
                  <strong>Ready for the unexpected.</strong>
                  <span>Repairs. Installations. Emergency help.</span>
                </div>
                <ArrowUpRight size={22} />
              </div>
              <div className="photo-location">
                <MapPin size={13} /> BASED IN PLACENTIA, CA
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Built around your property’s needs.</span>
            <a href="#services">
              EXPLORE OUR SERVICES <ArrowDown size={15} />
            </a>
          </div>
        </section>
        <div className="trade-strip">
          <div className="container">
            <span>
              <Wrench />
              Plumbing
            </span>
            <span>
              <Zap />
              Electrical
            </span>
            <span>
              <Wind />
              Heating & cooling
            </span>
            <span>
              <Clock3 />
              24/7 response
            </span>
          </div>
        </div>
        <ServicesSection onSelect={setSelected} />
        <section id="why-fwc" className="section why-section">
          <div className="container why-grid">
            <div className="why-image">
              <img
                src="/assets/images/work.webp"
                loading="lazy"
                width="720"
                height="480"
                alt="Electrical panels and organized wiring from the existing FWC work gallery"
              />
              <div className="image-caption">
                <span>THE DETAILS MAKE THE DIFFERENCE.</span>
                <p>
                  Practical expertise.
                  <br />
                  From the inside out.
                </p>
              </div>
            </div>
            <div className="why-copy">
              <p className="eyebrow">THE FWC APPROACH</p>
              <h2>
                Your property has
                <br />a lot of moving parts.
                <br />
                We help keep them moving.
              </h2>
              <p>
                One team for your essential trades. FWC works with homeowners
                and multifamily property managers on repairs, installations, and
                the unexpected.
              </p>
              <div className="benefit">
                <Building2 />
                <div>
                  <h3>We understand your property.</h3>
                  <p>
                    Residential and multifamily experience, from an individual
                    unit to a larger project.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <Truck />
                <div>
                  <h3>Equipped for the work.</h3>
                  <p>
                    Stocked inventory across trades to support the job at hand.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <Layers3 />
                <div>
                  <h3>More solutions. Less juggling.</h3>
                  <p>
                    Plumbing, electrical, HVAC, and drain expertise in one
                    place.
                  </p>
                </div>
              </div>
              <a className="text-link" href="#estimate">
                Let’s discuss your project <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow">A CLOSER LOOK</p>
                <h2>Real work. Real attention to detail.</h2>
              </div>
              <a className="text-link" href="#estimate">
                Have a project in mind? <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="project-grid">
              <article className="project-feature">
                <img
                  src="/assets/images/work.webp"
                  width="720"
                  height="480"
                  loading="lazy"
                  alt="Electrical distribution panels with neatly routed wiring"
                />
                <div>
                  <span className="eyebrow">ELECTRICAL · WORK GALLERY</span>
                  <h3>Behind the walls. Ahead of the details.</h3>
                  <p>
                    A closer look at the electrical work featured in FWC’s
                    service gallery.
                  </p>
                </div>
              </article>
              <article className="project-story">
                <span className="eyebrow">PROJECT SPOTLIGHT · ONTARIO, CA</span>
                <Wrench size={37} strokeWidth={1.3} />
                <h3>A fresh start for a hard-working water heater.</h3>
                <p>
                  FWC’s July 2026 commercial project involved cleaning out a
                  100-gallon water heater: removing sediment, flushing the tank,
                  relighting, and checking for leaks.
                </p>
                <div className="project-tags">
                  <span>Commercial plumbing</span>
                  <span>Maintenance</span>
                </div>
                <a
                  className="text-link"
                  href="#estimate"
                  onClick={() => setSelected("plumbing")}
                >
                  Discuss a similar project <ArrowUpRight size={17} />
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="section process">
          <div className="container">
            <p className="eyebrow">FROM “WHAT NOW?” TO WHAT’S NEXT.</p>
            <h2>Getting help should be simple.</h2>
            <div className="steps">
              {[
                [
                  "01",
                  "Tell us what’s happening.",
                  "Call for urgent help or send an estimate request with a few details.",
                ],
                [
                  "02",
                  "Let’s talk through the details.",
                  "Discuss your location, service needs, and current availability with our team.",
                ],
                [
                  "03",
                  "Plan the next step.",
                  "Work with FWC to arrange the appropriate service for your property.",
                ],
              ].map(([n, h, p]) => (
                <div className="step" key={n}>
                  <span>{n}</span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="estimate" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">LET’S TAKE IT FROM HERE.</p>
              <h2>
                One less thing
                <br />
                on your list.
              </h2>
              <p>
                Tell us what your property needs. From everyday repairs to
                bigger plans, start a conversation with FWC.
              </p>
              <div className="contact-urgent">
                <Clock3 size={22} />
                <div>
                  <strong>Need help right now?</strong>
                  <p>For emergencies, give us a call.</p>
                  <CallButton location="form" />
                </div>
              </div>
              <div className="contact-location">
                <MapPin size={19} />
                <p>
                  <strong>Based in Placentia, California</strong>
                  <br />
                  Call with your ZIP code to confirm service availability.
                </p>
              </div>
            </div>
            <div className="form-card">
              <LeadForm selected={selected} />
            </div>
          </div>
        </section>
        <section id="faq" className="section faq-section">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">A LITTLE CLARITY</p>
              <h2>
                Good questions.
                <br />
                Straight answers.
              </h2>
              <p>Still have something on your mind?</p>
              <CallButton location="faq" className="text-link" />
            </div>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <div>
              <p className="eyebrow">YOUR NEXT STEP STARTS HERE.</p>
              <h2>
                Let’s get your property
                <br />
                back to its best.
              </h2>
            </div>
            <EstimateButton />
            <CallButton location="final" className="final-phone" />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Brand />
              <p>
                Essential trades.
                <br />
                Personal attention.
              </p>
            </div>
            <div>
              <h3>Let’s connect</h3>
              <a href={business.tel}>{business.phone}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
              <span>Available 24/7</span>
            </div>
            <div>
              <h3>Find us</h3>
              <address>{business.address}</address>
              <a href={business.login} target="_blank" rel="noreferrer">
                Client login <ArrowUpRight size={13} />
              </a>
            </div>
            <div>
              <h3>Explore</h3>
              <a href="#services">Our services</a>
              <a href="#projects">Our work</a>
              <a href="#estimate">Request an estimate</a>
              <a
                href="https://www.instagram.com/fwccompaniesllc/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <details id="privacy" className="privacy">
            <summary>
              Privacy information <ChevronDown size={14} />
            </summary>
            <p>
              Contact information provided to FWC is used to respond to service
              inquiries. Please do not include sensitive information in
              messages. For questions about your information, contact{" "}
              {business.email}. For urgent assistance, please call our team.
            </p>
          </details>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} FWC LLC. All rights reserved.
            </span>
            <span>PLUMBING · ELECTRICAL · HVAC</span>
          </div>
        </div>
      </footer>
      <div className="sticky-mobile">
        <a href={business.tel} onClick={() => track("phone_click", "sticky")}>
          <Phone size={18} />
          Call now
        </a>
        <a href="#estimate">
          Get estimate
          <ArrowUpRight size={18} />
        </a>
      </div>
    </>
  );
}
