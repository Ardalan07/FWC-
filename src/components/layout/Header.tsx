import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Brand, CallButton } from "../ui/Actions";
import { business } from "../../data/content";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <div className="utility">
        <div className="container">
          <span>
            <i /> Here when you need us. Available 24/7.
          </span>
          <a href={business.login} target="_blank" rel="noreferrer">
            Client login <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <header>
        <div className="container header-inner">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            <a href="#services">Our services</a>
            <a href="#why-fwc">Why FWC</a>
            <a href="#projects">Our work</a>
            <a href="#faq">FAQs</a>
          </nav>
          <CallButton location="header" className="header-phone" />
          <a
            className="mobile-phone"
            href={business.tel}
            aria-label={`Call ${business.phone}`}
          >
            <Phone size={20} />
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ["Our services", "services"],
              ["Why FWC", "why-fwc"],
              ["Our work", "projects"],
              ["FAQs", "faq"],
              ["Get an estimate", "estimate"],
            ].map(([name, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {name}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
