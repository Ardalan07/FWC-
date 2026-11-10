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
