import Link from "next/link";
import type { Metadata } from "next";
import CateringPage from "../components/CateringPage";

export const metadata: Metadata = {
  title: "Wedding Catering in North Georgia | La Cocina de Jeannie",
  description:
    "Full-service wedding catering across North Georgia. Homemade Latin & American cuisine, custom menus, charcuterie, and appetizers. Con sabor & love.",
};

const steps = [
  { n: "01", t: "Tell us about your day", d: "Share your date, guest count, and the feel you're after." },
  { n: "02", t: "We build your menu & quote", d: "A custom menu and a clear quote, tailored to your celebration." },
  { n: "03", t: "We cater, you celebrate", d: "Setup, serving, and cleanup handled, so you can be present." },
];

// PLACEHOLDER FAQ — adjust answers once the real policies are set.
const faqs = [
  { q: "How many guests do you cater?", a: "Most events start around 25 guests. Reach out for smaller or larger gatherings and we'll find a fit." },
  { q: "How far in advance should we book?", a: "For weddings, three or more months is ideal. Two weeks is the minimum for smaller events." },
  { q: "Do you offer full-service?", a: "Yes. Full-service catering includes setup, serving, and cleanup. Drop-off is available on request." },
  { q: "Do you provide rentals?", a: "Chairs, tables, and similar rentals are available on request." },
];

export default function WeddingCatering() {
  return (
    <CateringPage
      eyebrow="Wedding Catering"
      title="Wedding catering with sabor, love, and the warmth of home."
      es="Tu boda, con sabor de casa."
      intro="Full-service Latin & American wedding catering across North Georgia, so your day feels like a family gathering and you get to enjoy every minute of it."
    >
      {/* What we handle */}
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">What we handle</p>
          <h2 className="mt-3 text-3xl text-ink">Everything around the food.</h2>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-cocoa/80">
            {/* PLACEHOLDER service model */}
            Full-service catering means we handle setup, serving, and cleanup,
            built around your timeline. Prefer drop-off? That&rsquo;s available
            too. We&rsquo;ll shape the service to your day, not the other way
            around.
          </p>
        </div>
        <div>
          <p className="eyebrow">Our food</p>
          <h2 className="mt-3 text-3xl text-ink">Homemade, Latin &amp; American.</h2>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-cocoa/80">
            {/* PLACEHOLDER menu */}
            Custom menus built from homemade favorites: charcuterie boards,
            appetizers, hot entrees, and the flavors that feel like home. Full
            menus are on the way.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="mt-20">
        <p className="eyebrow text-center">How it works</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-cocoa/10 bg-white p-8">
              <span className="font-display text-3xl text-gold">{s.n}</span>
              <h3 className="mt-3 text-xl text-ink">{s.t}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-cocoa/75">{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery teaser */}
      <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
        {["Reception", "Charcuterie", "Plated dinner", "Sweet table"].map((l, i) => (
          <div key={i} className="photo-ph aspect-[3/4]"><span>{l}</span></div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-20 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-3 text-3xl text-ink">Questions, answered.</h2>
        </div>
        <dl className="divide-y divide-cocoa/10">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-display text-lg text-ink">{f.q}</dt>
              <dd className="mt-2 font-body text-sm leading-relaxed text-cocoa/75">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-3xl bg-vino px-8 py-14 text-center text-ivory">
        <h2 className="text-3xl text-ivory sm:text-4xl">Let&rsquo;s plan your wedding menu.</h2>
        <p className="es mt-2 text-xl text-gold-soft">Hablemos de tu boda.</p>
        <Link href="/quote" className="btn-gold mt-7">Request a Quote</Link>
      </div>
    </CateringPage>
  );
}
