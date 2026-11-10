import { describe, it, expect } from "vitest";
import { leadSchema } from "../src/lib/leads";
const valid = {
  name: "Test Customer",
  phone: "(714) 555-0123",
  email: "",
  zip: "92870",
  service: "plumbing",
  message: "Water heater needs service",
  website: "",
};
describe("lead input boundary", () => {
  it("accepts a complete request with optional email omitted", () =>
    expect(leadSchema.safeParse(valid).success).toBe(true));
  it.each([
    { phone: "123" },
    { service: "unknown" },
    { zip: "9287" },
    { email: "bad-email" },
    { message: "x".repeat(2001) },
    { website: "bot.example" },
  ])("rejects invalid or spam input %j", (patch) =>
    expect(leadSchema.safeParse({ ...valid, ...patch }).success).toBe(false),
  );
  it("normalizes surrounding whitespace", () =>
    expect(leadSchema.parse({ ...valid, name: "  Test Customer  " }).name).toBe(
      "Test Customer",
    ));
});
