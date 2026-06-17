"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

/**
 * Inquiry form.
 * On submit this currently just shows a confirmation. To make it live:
 *   POST the payload to /api/leads which should
 *     1) insert into a Supabase `leads` table (source: wedding | event | other)
 *     2) send an SMS to Jeannie
 *     3) send a confirmation email to the customer
 * Same pattern as RSA's booking form.
 */
export default function Quote() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    // await fetch("/api/leads", { method: "POST", body: JSON.stringify(data) });
    setSent(true);
  }

  return (
    <main>
      <Nav overInk />
      <header className="relative overflow-hidden bg-ink text-ivory">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(70% 80% at 80% 0%, rgba(115,38,55,0.5), transparent 60%)" }}
        />
        <div className="shell relative pb-14 pt-40 md:pt-44">
          <p className="eyebrow">Request a Quote</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
            Tell us about your celebration.
          </h1>
          <p className="es mt-3 text-2xl">Cuéntanos de tu evento.</p>
        </div>
      </header>

      <section className="bg-ivory">
        <div className="shell max-w-2xl py-16 md:py-20">
          {sent ? (
            <div className="rounded-2xl border border-gold/40 bg-white p-10 text-center">
              <h2 className="text-3xl text-ink">Thank you!</h2>
              <p className="es mt-2 text-xl">Gracias, familia.</p>
              <p className="mx-auto mt-5 max-w-md font-body text-[15px] leading-relaxed text-cocoa/80">
                Jeannie received your request and will reach out personally within
                24 hours. Con sabor &amp; love.
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
                <SelectField
                  label="Event type"
                  name="eventType"
                  required
                  options={["Wedding", "Shower", "Birthday", "Quinceañera", "Corporate", "Other"]}
                />
                <Field label="Event date" name="eventDate" type="date" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Estimated guest count" name="guests" type="number" />
                <Field label="Location or venue (city)" name="location" />
              </div>
              <SelectField
                label="Service style"
                name="service"
                options={["Full-service", "Drop-off", "Not sure yet"]}
              />
              <TextArea label="Tell us about your event" name="message" />
              <button type="submit" className="btn-gold w-full sm:w-auto">
                Send request
              </button>
              <p className="font-body text-xs text-cocoa/55">
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

function labelCls() {
  return "mb-2 block font-body text-xs font-semibold uppercase tracking-[0.16em] text-cocoa/70";
}
function inputCls() {
  return "w-full rounded-lg border border-cocoa/20 bg-white px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={labelCls()}>
        {label} {required && <span className="text-vino">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className={inputCls()} />
    </div>
  );
}

function SelectField({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={labelCls()}>
        {label} {required && <span className="text-vino">*</span>}
      </label>
      <select id={name} name={name} required={required} defaultValue="" className={inputCls()}>
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className={labelCls()}>{label}</label>
      <textarea id={name} name={name} rows={4} className={inputCls()} />
    </div>
  );
}
