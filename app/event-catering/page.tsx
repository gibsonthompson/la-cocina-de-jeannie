import Link from "next/link";
import type { Metadata } from "next";
import CateringPage from "../components/CateringPage";

export const metadata: Metadata = {
  title: "Event Catering in North Georgia | La Cocina de Jeannie",
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
      eyebrow="Event Catering"
      title="For every celebration worth gathering for."
      es="Para cada momento especial."
      intro="Showers, birthdays, quinceañeras, corporate events, and private parties across North Georgia, catered with sabor & love."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {events.map((e) => (
          <div key={e.t} className="rounded-2xl border border-cocoa/10 bg-white p-8">
            <div className="photo-ph mb-6 aspect-[16/10]"><span>{e.t}</span></div>
            <h3 className="text-xl text-ink">{e.t}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-cocoa/75">{e.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-vino px-8 py-14 text-center text-ivory">
        <h2 className="text-3xl text-ivory sm:text-4xl">Tell us what you&rsquo;re celebrating.</h2>
        <p className="es mt-2 text-xl text-gold-soft">Cuéntanos tu celebración.</p>
        <Link href="/quote" className="btn-gold mt-7">Request a Quote</Link>
      </div>
    </CateringPage>
  );
}
