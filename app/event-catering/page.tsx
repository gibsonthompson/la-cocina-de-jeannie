import Link from "next/link";
import type { Metadata } from "next";
import CateringPage from "../components/CateringPage";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Event Catering in North Georgia | Jeannie & Co.",
  description:
    "Catering for showers, birthdays, quinceañeras, corporate events, and private parties across North Georgia. Homemade Latin & American cuisine.",
};

const events = [
  { t: "Showers & birthdays", d: "Intimate gatherings with charcuterie, appetizers, and homemade favorites." },
  { t: "Quinceañeras", d: "A celebration worthy of the moment, with flavors that feel like home." },
  { t: "Corporate & private", d: "Office events and private parties, handled start to finish." },
];

export default function EventCatering() {
  return (
    <CateringPage
      label="Event Catering"
      title="For every celebration worth gathering for."
      intro="Showers, birthdays, quinceañeras, corporate events, and private parties across North Georgia, catered with care and a little spice."
    >
      <Reveal className="grid gap-5 md:grid-cols-3">
        {events.map((e) => (
          <div key={e.t}>
            <div className="media mb-6 aspect-[16/11]"><span className="cap">{e.t}</span></div>
            <h3 className="font-display text-xl text-navy">{e.t}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/75">{e.d}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-20 bg-navy px-8 py-16 text-center text-cream">
        <h2 className="font-display text-3xl sm:text-4xl">Tell us what you&rsquo;re celebrating.</h2>
        <Link href="/quote" className="btn-gold mt-8">Request a quote</Link>
      </Reveal>
    </CateringPage>
  );
}