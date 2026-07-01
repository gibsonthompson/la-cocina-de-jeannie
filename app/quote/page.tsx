"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const eventTypes = ["Wedding","Shower","Birthday","Quinceañera","Corporate","Private party","Other"];

export default function Quote() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <main className="bg-cream">
        <Nav />
        <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
          <p className="label">Sent</p>
          <h1 className="mt-4 font-display text-5xl text-navy sm:text-6xl">Thank you.</h1>
          <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-charcoal/80">
            We&rsquo;ll be in touch within 24 hours with a custom menu for your event.
          </p>
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
          <p className="mt-8 font-body text-sm text-charcoal/60">Prefer to talk? <a href="tel:+10000000000" className="link-ed text-navy">(000) 000-0000</a></p>
        </div>
        <div className="border border-navy/12 bg-cream-deep/30 p-8 md:p-10">
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="label">Your name</span><input className="mt-2 w-full border border-navy/15 bg-cream px-4 py-3 font-body text-sm outline-none focus:border-gold" placeholder="First and last" /></label>
              <label className="block"><span className="label">Email</span><input type="email" className="mt-2 w-full border border-navy/15 bg-cream px-4 py-3 font-body text-sm outline-none focus:border-gold" placeholder="you@email.com" /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="label">Event date</span><input type="date" className="mt-2 w-full border border-navy/15 bg-cream px-4 py-3 font-body text-sm outline-none focus:border-gold" /></label>
              <label className="block"><span className="label">Guest count</span><input type="number" className="mt-2 w-full border border-navy/15 bg-cream px-4 py-3 font-body text-sm outline-none focus:border-gold" placeholder="Approximate is fine" /></label>
            </div>
            <label className="block"><span className="label">Type of event</span>
              <select className="mt-2 w-full border border-navy/15 bg-cream px-4 py-3 font-body text-sm outline-none focus:border-gold">
                {eventTypes.map((t)=>(<option key={t}>{t}</option>))}
              </select>
            </label>
            <label className="block"><span className="label">Tell us what you&rsquo;re thinking</span><textarea rows={4} className="mt-2 w-full border border-navy/15 bg-cream px-4 py-3 font-body text-sm outline-none focus:border-gold" placeholder="The vibe, the food you love, anything we should know." /></label>
            <button onClick={()=>setSent(true)} className="btn-gold mt-2 w-full">Send it to Jeannie</button>
            <p className="font-body text-xs text-charcoal/50">This is a placeholder form. Hook it up to your leads table to go live.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}