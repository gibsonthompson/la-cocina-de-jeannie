import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Wedding Catering in North Georgia | Jeannie & Co.",
  description: "Full-service wedding catering across North Georgia. Homemade American and Latin cuisine, custom menus, charcuterie, and appetizers.",
};

const steps = [
  { n:"01", t:"Tell us about your day", d:"Share your date, guest count, and the feeling you're after." },
  { n:"02", t:"We build your menu", d:"A custom menu tailored to your celebration, with everything laid out clearly." },
  { n:"03", t:"We cater, you celebrate", d:"Setup, serving, and cleanup handled, so you can be present." },
];
const faqs = [
  { q:"How many guests do you cater?", a:"Most events start around 25 guests. Reach out for smaller or larger gatherings and we'll find a fit." },
  { q:"How far in advance should we book?", a:"For weddings, three or more months is ideal. Two weeks is the minimum for smaller events." },
  { q:"Do you offer full-service?", a:"Yes. Full-service includes setup, serving, and cleanup. Drop-off is available on request." },
  { q:"Do you provide rentals?", a:"Chairs, tables, and similar rentals are available on request." },
];

export default function WeddingCatering() {
  return (
    <main>
      <section className="relative min-h-[78vh] text-cream">
        <Nav light />
        <Image src="/photos/01-charcuterie-overhead.jpg" alt="Charcuterie spread for a wedding" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/55 via-navy-deep/45 to-navy-deep/90" />
        <div className="shell relative flex min-h-[78vh] flex-col justify-end pb-20 pt-40">
          <Reveal className="max-w-3xl">
            <p className="label text-gold-soft">Wedding Catering</p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[1.02] sm:text-7xl">Wedding catering with the warmth of home.</h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-cream/85">
              Full-service Latin and American wedding catering across North Georgia,
              so your day feels like a family gathering and you get to enjoy every
              minute of it.
            </p>
            <div className="mt-9"><Link href="/quote" className="btn-gold">Check your date</Link></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="shell grid gap-14 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <p className="label">What we handle</p>
            <h2 className="mt-4 font-display text-4xl text-navy">Everything around the food.</h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-charcoal/80">
              Full-service means setup, serving, and cleanup, built around your
              timeline. Prefer drop-off? That works too. We shape the service to your
              day, not the other way around.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">Our food</p>
            <h2 className="mt-4 font-display text-4xl text-navy">Homemade, Latin &amp; American.</h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-charcoal/80">
              Custom menus built from homemade favorites: charcuterie boards,
              appetizers, hot entrees, and the flavors that feel like home. Full menus
              are on the way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="shell grid grid-cols-2 gap-5 py-20 md:grid-cols-4">
          {["/photos/03-appetizer-spread.jpg","/photos/04-crostini.jpg","/photos/02-charcuterie-box.jpg","/photos/01-charcuterie-overhead.jpg"].map((src,i)=>(
            <Reveal key={src} delay={(i%4)*0.05}><div className="relative aspect-[3/4] w-full overflow-hidden"><Image src={src} alt="" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" /></div></Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="shell py-24 md:py-32">
          <Reveal><p className="label text-gold-soft">How it works</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Three simple steps.</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 md:grid-cols-3">
            {steps.map((s)=>(<div key={s.n} className="bg-navy p-9"><span className="font-display text-3xl text-gold">{s.n}</span><h3 className="mt-3 font-display text-xl text-cream">{s.t}</h3><p className="mt-2 font-body text-sm leading-relaxed text-cream/70">{s.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="shell grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
          <Reveal><p className="label">Good to know</p><h2 className="mt-4 font-display text-4xl text-navy">Questions, answered.</h2></Reveal>
          <dl className="divide-y divide-navy/10">
            {faqs.map((f)=>(<div key={f.q} className="py-5"><dt className="font-display text-lg text-navy">{f.q}</dt><dd className="mt-2 font-body text-sm leading-relaxed text-charcoal/75">{f.a}</dd></div>))}
          </dl>
        </div>
      </section>

      <section className="relative text-cream">
        <Image src="/photos/05-champagne-evening.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="shell relative py-28 text-center md:py-32">
          <Reveal className="mx-auto max-w-2xl"><h2 className="font-display text-5xl leading-tight sm:text-6xl">Let&rsquo;s plan your wedding menu.</h2><p className="mt-5 font-body text-lg text-cream/80">Tell us about your wedding and we&rsquo;ll get back to you within 24 hours.</p><div className="mt-9 flex justify-center"><Link href="/quote" className="btn-gold">Start planning</Link></div></Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}