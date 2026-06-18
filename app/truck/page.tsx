import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import badge from "../../public/logo-truck-t.png";

export const metadata: Metadata = {
  title: "The Food Truck | La Cocina de Jeannie",
  description:
    "Street-style Latin & American food truck serving North Georgia. Find us today or book the truck for your event.",
};

export default function Truck() {
  return (
    <>
      <section className="bg-truck-red text-white">
        <div className="shell grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-truck-gold">
              On the streets of North GA
            </p>
            <h1 className="mt-4 font-display text-5xl font-black leading-[1.04] sm:text-6xl">
              Street food, hecho con sabor.
            </h1>
            <p className="mt-5 max-w-md font-body text-base text-white/90">
              Latin and American favorites, served fresh from the truck. Catch us
              around town, or bring the truck to your event.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/truck/where" className="btn-flag bg-truck-gold !text-truck-blue">Where we are today</Link>
              <Link href="/truck/book" className="btn border-2 border-white text-white hover:bg-white hover:text-truck-red">
                Book the truck
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={badge} alt="La Cocina de Jeannie food truck" width={340} height={340} className="w-64 md:w-80" priority />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="shell grid gap-6 py-16 md:grid-cols-3">
          {[
            { t: "Find us today", d: "Live location and this week's schedule.", href: "/truck/where", cta: "See the map" },
            { t: "The menu", d: "Street-style Latin & American plates.", href: "/truck/menu", cta: "View menu" },
            { t: "Book the truck", d: "Parties, work events, neighborhoods.", href: "/truck/book", cta: "Get a date" },
          ].map((c) => (
            <Link key={c.t} href={c.href} className="border-2 border-truck-blue/15 p-8 transition-colors hover:border-truck-blue">
              <h3 className="font-display text-2xl font-bold text-truck-blue">{c.t}</h3>
              <p className="mt-2 font-body text-sm text-navy-deep/70">{c.d}</p>
              <span className="mt-4 inline-block font-body text-sm font-bold text-truck-red">{c.cta} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}