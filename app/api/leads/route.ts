import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { notifyOwnerOfLead } from "@/lib/notify";
import type { LeadSource } from "@/lib/types";

const SOURCES: LeadSource[] = ["wedding", "event", "truck", "other"];
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, drop silently.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (email && !isEmail(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : "";
  if (!email && !phone) {
    return NextResponse.json({ error: "Add an email or phone so we can reach you." }, { status: 400 });
  }

  const source = SOURCES.includes(body.source as LeadSource) ? (body.source as LeadSource) : "other";

  let guest_count: number | null = null;
  if (body.guest_count !== undefined && body.guest_count !== null && body.guest_count !== "") {
    const n = Number(body.guest_count);
    if (!Number.isFinite(n) || n < 0 || n > 100000) {
      return NextResponse.json({ error: "Guest count doesn't look right." }, { status: 400 });
    }
    guest_count = Math.round(n);
  }

  let event_date: string | null = null;
  if (typeof body.event_date === "string" && body.event_date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(body.event_date)) {
      return NextResponse.json({ error: "Event date is invalid." }, { status: 400 });
    }
    event_date = body.event_date;
  }

  const record = {
    source,
    name,
    email: email || null,
    phone: phone || null,
    event_date,
    guest_count,
    event_type: typeof body.event_type === "string" ? body.event_type.slice(0, 80) : null,
    message: typeof body.message === "string" ? body.message.slice(0, 5000) : null,
  };

  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("leads").insert(record);
    if (error) throw error;
  } catch (err) {
    console.error("Lead insert failed:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  await notifyOwnerOfLead(record);
  return NextResponse.json({ ok: true });
}
