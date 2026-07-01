"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import type { LeadSource } from "@/lib/types";

const eventTypes = ["Wedding","Shower","Birthday","Quinceañera","Corporate","Private party","Other"];

export default function Quote() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [f, setF] = useState({ name: "", email: "", phone: "", event_date: "", guest_count: "", event_type: "Wedding", message: "", company: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  async function submit() {
    setError(null);
    if (f.name.trim().length < 2) return setError("Please enter your name.");
    if (!f.email.trim() && !f.phone.trim()) return setError("Add an email or phone so we can reach you.");
    setLoading(true);
    const source: LeadSource = f.event_type === "Wedding" ? "wedding" : "event";
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, source }),
      });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) return setError(data.error || "Something went wrong.");
      setSent(true);
    } catch {
      setLoading(false);
      setError("Network error. Please try again.");
    }
  }

  if (sent) {
    return (
      <main className="bg-cream">
        <Nav />
        <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
          <p className="label">Sent</p>
          <h1 className="mt-4 font-display text-5xl text-navy sm:text-6xl">Thank you.</h1>
          <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-charcoal/80">We&rsquo;ll be in touch within 24 hours with a custom menu for your event.</p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-cream">
      <Nav />
      <section className="shell grid gap-16 pb-28 pt-36 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="label">Inquire</p>
          <h1 className="mt-4 font-display text-5xl text-navy sm:text-6xl">Tell us about your event.</h1>
          <p className="mt-6 max-w-sm font-body text-[15px] leading-relaxed text-charcoal/80">
            Share a few details about your event and we&rsquo;ll get back to you within 24
            hours with a custom menu for your event.
          </p>
          <p className="mt-6 font-body text-sm text-charcoal/60">Events typically begin around a <span className="font-semibold text-navy">$[minimum]</span> minimum. {/* PLACEHOLDER: set your minimum */}</p>
          <p className="mt-3 font-body text-sm text-charcoal/60">Prefer to talk? <a href="tel:+10000000000" className="link-ed text-navy">(000) 000-0000</a></p>
        </div>
        <div className="border border-navy/12 bg-cream-deep/30 p-8 md:p-10">
          <div className="grid gap-5">
            {/* honeypot */}
            <input tabIndex={-1} autoComplete="off" value={f.company} onChange={set("company")} className="hidden" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="label">Your name</span><input value={f.name} onChange={set("name")} className={inp} placeholder="First and last" /></label>
              <label className="block"><span className="label">Email</span><input type="email" value={f.email} onChange={set("email")} className={inp} placeholder="you@email.com" /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="label">Phone</span><input value={f.phone} onChange={set("phone")} className={inp} placeholder="(000) 000-0000" /></label>
              <label className="block"><span className="label">Event date</span><input type="date" value={f.event_date} onChange={set("event_date")} className={inp} /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="label">Guest count</span><input type="number" min={0} value={f.guest_count} onChange={set("guest_count")} className={inp} placeholder="Approximate is fine" /></label>
              <label className="block"><span className="label">Type of event</span>
                <select value={f.event_type} onChange={set("event_type")} className={inp}>{eventTypes.map((t) => <option key={t}>{t}</option>)}</select>
              </label>
            </div>
            <label className="block"><span className="label">Tell us what you&rsquo;re thinking</span><textarea rows={4} value={f.message} onChange={set("message")} className={inp} placeholder="The vibe, the food you love, anything we should know." /></label>
            {error && <p className="rounded bg-rose-50 px-3 py-2 font-body text-sm text-rose-700">{error}</p>}
            <button onClick={submit} disabled={loading} className="btn-gold mt-2 w-full disabled:opacity-60">{loading ? "Sending..." : "Send it to Jeannie"}</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const inp = "mt-2 w-full border border-navy/15 bg-cream px-4 py-3 font-body text-sm outline-none focus:border-gold";
