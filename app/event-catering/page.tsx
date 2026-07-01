import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Event Catering in North Georgia | Jeannie & Co.",
  description: "Catering for showers, birthdays, quinceañeras, corporate events, and private parties across North Georgia. Homemade American and Latin cuisine.",
};

const events = [
  { t:"Showers & birthdays", d:"Intimate gatherings with charcuterie, appetizers, and homemade favorites." },
  { t:"Quinceañeras", d:"A celebration worthy of the moment, with flavors that feel like home." },
  { t:"Corporate & private", d:"Office events and private parties, handled start to finish." },
];

export default function EventCatering() {
  return (
    <main>
      <section className="relative min-h-[74vh] text-cream">
        <Nav light />
        <Image src="/photos/03-appetizer-spread.jpg" alt="Appetizer spread for an event" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-navy-deep/40 to-navy-deep/90" />
        <div className="shell relative flex min-h-[74vh] flex-col justify-end pb-20 pt-40">
          <Reveal className="max-w-3xl">
            <p className="label text-gold-soft">Event Catering</p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[1.02] sm:text-7xl">For every celebration worth gathering for.</h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-cream/85">
              Showers, birthdays, quinceañeras, corporate events, and private parties
              across North Georgia, catered with care and a little spice.
            </p>
            <div className="mt-9"><Link href="/quote" className="btn-gold">Tell us about your event</Link></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="shell py-24 md:py-32">
          <Reveal className="max-w-2xl"><p className="label">What we cater</p><h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Catering for every occasion.</h2></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((e,i)=>(
              <Reveal key={e.t} delay={i*0.06}>
                <div className="h-full border border-navy/12 bg-cream-deep/40 p-9">
                  <h3 className="font-display text-2xl text-navy">{e.t}</h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-charcoal/80">{e.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="shell grid items-center gap-12 py-20 md:grid-cols-2">
          <Reveal><div className="relative aspect-[4/3] w-full overflow-hidden"><Image src="/photos/02-charcuterie-box.jpg" alt="Charcuterie box" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" /></div></Reveal>
          <Reveal delay={0.08}>
            <p className="label">Our food</p>
            <h2 className="mt-4 font-display text-4xl text-navy">Homemade favorites.</h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-charcoal/80">
              American and Latin food, made by hand, with a little spice. Charcuterie
              boards, appetizers, and entrees, built around your event and the flavors
              that feel like home.
            </p>
            <Link href="/menus" className="link-ed mt-7 inline-block text-navy">See the menu</Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="shell py-24 text-center md:py-28">
          <Reveal className="mx-auto max-w-2xl"><h2 className="font-display text-4xl sm:text-5xl">Tell us what you&rsquo;re celebrating.</h2><div className="mt-9 flex justify-center"><Link href="/quote" className="btn-gold">Start planning</Link></div></Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}