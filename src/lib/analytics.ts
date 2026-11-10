type EventName =
  | "hero_cta_click"
  | "phone_click"
  | "lead_form_start"
  | "lead_form_submit"
  | "lead_form_success"
  | "lead_form_error";
// No vendor scripts or collection run until an approved consent integration listens.
export function track(name: EventName, location: string) {
  window.dispatchEvent(
    new CustomEvent("fwc:analytics", { detail: { event: name, location } }),
  );
}
