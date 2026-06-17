import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Food Truck | La Cocina de Jeannie",
  description:
    "Street-style Latin & American food truck serving North Georgia. Find us today or book the truck for your event.",
};

export default function Truck() {
  return (
    <>
      {/* Hero */}
      <section className="bg-flag-red text-white">
        <div className="shell grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-flag-yellow">
              On the streets of North GA
            </p>
            <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] sm:text-6xl">
              Street food, hecho con sabor.
            </h1>
            <p className="mt-5 max-w-md font-body text-base text-white/90">
              Latin &amp; American favorites, served fresh from the truck. Catch us
              around town, or bring the truck to your event.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/truck/where" className="btn-flag bg-flag-yellow !text-flag-blue">
                Where we are today
              </Link>
              <Link href="/truck/book" className="inline-flex items-center rounded-full border-2 border-white px-7 py-3 font-body text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-flag-red">
                Book the truck
              </Link>
            </div>
          </div>
          <div className="photo-ph aspect-[4/3] w-full border-2 border-flag-yellow">
            <span className="!text-white/80">The truck</span>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white">
        <div className="shell grid gap-6 py-16 md:grid-cols-3">
          {[
            { t: "Find us today", d: "Live location and this week's schedule.", href: "/truck/where", cta: "See the map" },
            { t: "The menu", d: "Street-style Latin & American plates.", href: "/truck/menu", cta: "View menu" },
            { t: "Book the truck", d: "Parties, work events, neighborhoods.", href: "/truck/book", cta: "Get a date" },
          ].map((c) => (
            <Link key={c.t} href={c.href} className="rounded-2xl border-2 border-flag-blue/15 p-8 transition-colors hover:border-flag-blue">
              <h3 className="font-display text-2xl font-bold text-flag-blue">{c.t}</h3>
              <p className="mt-2 font-body text-sm text-ink/70">{c.d}</p>
              <span className="mt-4 inline-block font-body text-sm font-bold text-flag-red">{c.cta} →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
