"use client";
import { useState } from "react";

export default function Book() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [f, setF] = useState({ name: "", email: "", phone: "", event_date: "", guest_count: "", message: "", company: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  async function submit() {
    setError(null);
    if (f.name.trim().length < 2) return setError("Please enter your name.");
    if (!f.email.trim() && !f.phone.trim()) return setError("Add an email or phone so we can reach you.");
    setLoading(true);
    try {
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...f, source: "truck", event_type: "Food truck booking" }) });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) return setError(data.error || "Something went wrong.");
      setSent(true);
    } catch { setLoading(false); setError("Network error. Please try again."); }
  }

  if (sent) {
    return (
      <section className="bg-cream">
        <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <h1 className="font-display text-5xl font-extrabold uppercase text-truck-blue">You&rsquo;re on the list!</h1>
          <p className="mt-4 max-w-md font-body text-navy-deep/75">We&rsquo;ll reach out within 24 hours to lock in your date.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1fr_1.2fr] md:py-24">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-truck-red">Book the truck</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.95] text-truck-blue sm:text-6xl">Bring the truck to your party.</h1>
          <p className="mt-5 max-w-sm font-body text-navy-deep/75">Birthdays, work events, neighborhood get-togethers. Tell us the details and we&rsquo;ll make it happen.</p>
        </div>
        <div className="rounded-2xl border-2 border-truck-blue/15 bg-white p-8 md:p-10">
          <div className="grid gap-5">
            <input tabIndex={-1} autoComplete="off" value={f.company} onChange={set("company")} className="hidden" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
              <L label="Your name"><input value={f.name} onChange={set("name")} className={inp} placeholder="First and last" /></L>
              <L label="Phone"><input value={f.phone} onChange={set("phone")} className={inp} placeholder="(000) 000-0000" /></L>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <L label="Email"><input type="email" value={f.email} onChange={set("email")} className={inp} placeholder="you@email.com" /></L>
              <L label="Event date"><input type="date" value={f.event_date} onChange={set("event_date")} className={inp} /></L>
            </div>
            <L label="Guest count"><input type="number" min={0} value={f.guest_count} onChange={set("guest_count")} className={inp} placeholder="Approximate is fine" /></L>
            <L label="Details"><textarea rows={3} value={f.message} onChange={set("message")} className={inp} placeholder="Location, type of event, anything else" /></L>
            {error && <p className="rounded bg-rose-50 px-3 py-2 font-body text-sm text-rose-700">{error}</p>}
            <button onClick={submit} disabled={loading} className="btn-flag mt-1 w-full disabled:opacity-60">{loading ? "Sending..." : "Request a date"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const inp = "mt-2 w-full rounded-lg border border-truck-blue/20 bg-cream px-4 py-3 font-body text-sm outline-none focus:border-truck-gold";
function L({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="font-display text-xs font-bold uppercase tracking-wide text-truck-blue/70">{label}</span>{children}</label>;
}
