"use client";

import { useState } from "react";

/**
 * Book-the-truck inquiry. Same backend pattern as /quote:
 * POST to /api/leads (source: truck) -> Supabase insert -> SMS to Jeannie + email.
 */
export default function BookTruck() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const input =
    "w-full rounded-lg border-2 border-flag-blue/20 bg-white px-4 py-3 font-body text-sm text-ink outline-none focus:border-flag-blue";
  const label = "mb-2 block font-body text-xs font-bold uppercase tracking-[0.16em] text-ink/70";

  return (
    <section className="bg-white">
      <div className="shell max-w-2xl py-16">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-flag-red">Book the Truck</p>
        <h1 className="mt-3 font-display text-5xl font-black text-flag-blue">Bring us to your event.</h1>
        <p className="mt-4 font-body text-base text-ink/70">
          Birthday parties, work events, neighborhood gatherings. Tell us the details.
        </p>

        {sent ? (
          <div className="mt-10 rounded-2xl border-2 border-flag-yellow bg-flag-blue/5 p-10 text-center">
            <h2 className="font-display text-3xl font-bold text-flag-blue">You&rsquo;re on the list!</h2>
            <p className="mt-3 font-body text-sm text-ink/75">
              Jeannie will text you back within 24 hours to lock in a date.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Name *</label>
                <input id="name" name="name" required className={input} />
              </div>
              <div>
                <label htmlFor="phone" className={label}>Phone *</label>
                <input id="phone" name="phone" type="tel" required className={input} />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className={label}>Event date</label>
                <input id="date" name="date" type="date" className={input} />
              </div>
              <div>
                <label htmlFor="headcount" className={label}>Estimated headcount</label>
                <input id="headcount" name="headcount" type="number" className={input} />
              </div>
            </div>
            <div>
              <label htmlFor="location" className={label}>Location / city</label>
              <input id="location" name="location" className={input} />
            </div>
            <div>
              <label htmlFor="message" className={label}>Tell us about your event</label>
              <textarea id="message" name="message" rows={4} className={input} />
            </div>
            <button type="submit" className="btn-flag w-full sm:w-auto">Request a date</button>
          </form>
        )}
      </div>
    </section>
  );
}
