import Link from "next/link";
import type { Metadata } from "next";
import CateringPage from "../components/CateringPage";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Wedding Catering in North Georgia | Jeannie & Co.",
  description:
    "Full-service wedding catering across North Georgia by Jeannie & Co. Homemade American cuisine with a little spice, custom menus, charcuterie, and appetizers.",
};

const steps = [
  { n: "01", t: "Tell us about your day", d: "Share your date, guest count, and the feeling you're after." },
  { n: "02", t: "We build your menu & quote", d: "A custom menu and a clear quote, tailored to your celebration." },
  { n: "03", t: "We cater, you celebrate", d: "Setup, serving, and cleanup handled, so you can be present." },
];

const faqs = [
  { q: "How many guests do you cater?", a: "Most events start around 25 guests. Reach out for smaller or larger gatherings and we'll find a fit." },
  { q: "How far in advance should we book?", a: "For weddings, three or more months is ideal. Two weeks is the minimum for smaller events." },
  { q: "Do you offer full-service?", a: "Yes. Full-service includes setup, serving, and cleanup. Drop-off is available on request." },
  { q: "Do you provide rentals?", a: "Chairs, tables, and similar rentals are available on request." },
];

export default function WeddingCatering() {
  return (
    <CateringPage
      label="Wedding Catering"
      title="Wedding catering with the warmth of home."
      intro="Full-service Latin and American wedding catering across North Georgia, so your day feels like a family gathering and you get to enjoy every minute of it."
    >
      <Reveal className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="label">What we handle</p>
          <h2 className="mt-4 font-display text-3xl text-navy">Everything around the food.</h2>
          <p className="mt-5 font-body text-[15px] leading-relaxed text-charcoal/80">
            Full-service means setup, serving, and cleanup, built around your
            timeline. Prefer drop-off? That works too. We shape the service to
            your day, not the other way around.
          </p>
        </div>
        <div>
          <p className="label">Our food</p>
          <h2 className="mt-4 font-display text-3xl text-navy">Homemade, Latin &amp; American.</h2>
          <p className="mt-5 font-body text-[15px] leading-relaxed text-charcoal/80">
            Custom menus built from homemade favorites: charcuterie boards,
            appetizers, hot entrees, and the flavors that feel like home. Full
            menus are on the way.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-24">
        <p className="label text-center">How it works</p>
        <div className="mt-10 grid gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-cream p-9">
              <span className="font-display text-3xl text-gold">{s.n}</span>
              <h3 className="mt-4 font-display text-xl text-navy">{s.t}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/75">{s.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-24 grid grid-cols-2 gap-5 md:grid-cols-4">
        {["Reception", "Charcuterie", "Plated dinner", "Sweet table"].map((l) => (
          <div key={l} className="media aspect-[3/4]"><span className="cap">{l}</span></div>
        ))}
      </Reveal>

      <Reveal className="mt-24 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="label">Good to know</p>
          <h2 className="mt-4 font-display text-3xl text-navy">Questions, answered.</h2>
        </div>
        <dl className="divide-y divide-navy/10">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-display text-lg text-navy">{f.q}</dt>
              <dd className="mt-2 font-body text-sm leading-relaxed text-charcoal/75">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-20 bg-navy px-8 py-16 text-center text-cream">
        <h2 className="font-display text-3xl sm:text-4xl">Let&rsquo;s plan your wedding menu.</h2>
        <Link href="/quote" className="btn-gold mt-8">Request a quote</Link>
      </Reveal>
    </CateringPage>
  );
}