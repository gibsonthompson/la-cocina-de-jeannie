import type { LeadSource } from "./types";

interface LeadNotice {
  name: string;
  source: LeadSource;
  event_date?: string | null;
  guest_count?: number | null;
  event_type?: string | null;
  phone?: string | null;
  email?: string | null;
}

/** Sends an SMS to the owner on a new lead. Never throws; logs and returns. */
export async function notifyOwnerOfLead(lead: LeadNotice): Promise<void> {
  const to = process.env.OWNER_SMS_TO;
  const from = process.env.TELNYX_FROM;
  const key = process.env.TELNYX_API_KEY;
  if (!to || !from || !key || key === "dummy") return; // not configured yet

  const parts = [
    `New ${lead.source} inquiry`,
    lead.name,
    lead.event_type ? `Type: ${lead.event_type}` : null,
    lead.event_date ? `Date: ${lead.event_date}` : null,
    lead.guest_count ? `Guests: ${lead.guest_count}` : null,
    lead.phone ? `Phone: ${lead.phone}` : null,
    lead.email ? `Email: ${lead.email}` : null,
  ].filter(Boolean);

  try {
    await fetch("https://api.telnyx.com/v2/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({ from, to, text: parts.join("\n") }),
    });
  } catch (err) {
    console.error("Lead SMS failed:", err);
  }
}
