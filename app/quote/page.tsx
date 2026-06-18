"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

/**
 * Inquiry form. On submit it shows a confirmation. To go live, POST to an
 * /api/leads route that: 1) inserts into Supabase `leads` (source: wedding |
 * event | other), 2) sends an SMS to Jeannie, 3) emails the customer a
 * confirmation. Same pattern as RSA's booking form.
 */
export default function Quote() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <Nav light />
      <header className="bg-navy text-cream">
        <div className="shell pb-16 pt-44">
          <p className="label text-gold-soft">Request a quote</p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] sm:text-6xl">
            Tell us about your celebration.
          </h1>
        </div>
      </header>

      <section className="bg-cream">
        <div className="shell max-w-prose2 py-20">
          {sent ? (
            <div className="border border-gold/40 bg-cream-deep p-10 text-center">
              <h2 className="font-display text-3xl text-navy">Thank you!</h2>
              <p className="mx-auto mt-5 max-w-md font-body text-[15px] leading-relaxed text-charcoal/80">
                Jeannie received your request and will reach out personally within
                24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid gap-6 sm:grid-cols-2">
                <SelectField label="Event type" name="eventType" required
                  options={["Wedding", "Shower", "Birthday", "Quinceañera", "Corporate", "Other"]} />
                <Field label="Event date" name="eventDate" type="date" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Estimated guest count" name="guests" type="number" />
                <Field label="Location or venue (city)" name="location" />
              </div>
              <SelectField label="Service style" name="service"
                options={["Full-service", "Drop-off", "Not sure yet"]} />
              <TextArea label="Tell us about your event" name="message" />
              <button type="submit" className="btn-gold w-full sm:w-auto">Send request</button>
              <p className="font-body text-xs text-charcoal/55">
                We&rsquo;ll text and email you back within 24 hours.
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

const labelCls = "mb-2 block font-body text-[11px] font-semibold uppercase tracking-label text-charcoal/70";
const inputCls = "w-full border border-navy/20 bg-cream px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-gold";

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={labelCls}>{label} {required && <span className="text-truck-red">*</span>}</label>
      <input id={name} name={name} type={type} required={required} className={inputCls} />
    </div>
  );
}
function SelectField({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={labelCls}>{label} {required && <span className="text-truck-red">*</span>}</label>
      <select id={name} name={name} required={required} defaultValue="" className={inputCls}>
        <option value="" disabled>Select…</option>
        {options.map((o) => (<option key={o} value={o}>{o}</option>))}
      </select>
    </div>
  );
}
function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className={labelCls}>{label}</label>
      <textarea id={name} name={name} rows={4} className={inputCls} />
    </div>
  );
}