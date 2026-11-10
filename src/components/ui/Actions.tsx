import { ArrowUpRight, Phone } from "lucide-react";
import { business } from "../../data/content";
import { track } from "../../lib/analytics";
export function EstimateButton({
  label = "Get an estimate",
  location = "page",
  light = false,
}: {
  label?: string;
  location?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-white" : "button-red"}`}
      href="#estimate"
      onClick={() => {
        if (location === "hero") track("hero_cta_click", location);
      }}
    >
      {label}
      <ArrowUpRight size={18} />
    </a>
  );
}
export function CallButton({
  location = "page",
  className = "",
}: {
  location?: string;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={business.tel}
      onClick={() => track("phone_click", location)}
    >
      <Phone size={17} />
      <span>{business.phone}</span>
    </a>
  );
}
export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="FWC Companies home">
      <span className="brand-mark">
        FWC
        <span />
      </span>
      <span className="brand-label">
        COMPANIES<small>PLUMBING · ELECTRICAL · HVAC</small>
      </span>
    </a>
  );
}
