import { z } from "zod";
const serviceIds = [
  "plumbing",
  "electrical",
  "hvac",
  "sewer",
  "trenchless",
  "drains",
  "emergency",
];
export const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\d\s.-]{7,25}$/, "Enter a valid phone number.")
    .refine(
      (v) => v.replace(/\D/g, "").length >= 10,
      "Include your area code.",
    ),
  email: z.union([z.email("Enter a valid email."), z.literal("")]),
  service: z
    .string()
    .refine((v) => ["unsure", ...serviceIds].includes(v), "Choose a service."),
  zip: z.string().regex(/^\d{5}$/, "Enter a 5-digit ZIP code."),
  message: z.string().trim().max(2000),
  website: z.string().max(0),
});
export type Lead = z.infer<typeof leadSchema>;
export async function submitLead(lead: Lead, key: string) {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT;
  if (!endpoint)
    throw new Error(
      "Online requests are not available yet. Please call (714) 410-2728 to request an estimate.",
    );
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Idempotency-Key": key },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok)
    throw new Error(
      "Your request could not be confirmed. Please try again or call (714) 410-2728.",
    );
  const data = (await response.json()) as { accepted?: boolean };
  if (data.accepted !== true)
    throw new Error(
      "We could not confirm receipt. Please call (714) 410-2728.",
    );
}
