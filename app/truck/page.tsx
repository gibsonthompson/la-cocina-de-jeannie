import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Food Truck | La Cocina de Jeannie",
  description: "Street-style Latin and American food truck serving North Georgia. Find us today, or book the truck for your event.",
};

const cards = [
  { t:"Find us today", d:"Live location and this week's schedule.", href:"/truck/where", cta:"See the map" },
  { t:"The menu", d:"Street-style Latin and American plates.", href:"/truck/menu", cta:"View menu" },
  { t:"Book the truck", d:"Parties, work events, and neighborhoods.", href:"/truck/book", cta:"Get a date" },
];

export default function Truck() {
  return (
    <>
      <section className="relative overflow-hidden bg-truck-red text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{backgroundImage:"radial-gradient(circle at 20% 30%, #fff 2px, transparent 2px)", backgroundSize:"26px 26px"}} />
        <div className="shell relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-truck-gold">On the streets of North GA</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.98] sm:text-7xl">Street food, hecho con sabor.</h1>
            <p className="mt-6 max-w-md font-body text-lg text-white/90">Latin and American favorites, served fresh from the truck. Catch us around town, or bring the truck to your party.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/truck/where" className="btn-flag !bg-truck-gold !text-truck-blue">Where we are today</Link>
              <Link href="/truck/book" className="btn-flag border-2 border-white !bg-transparent hover:!bg-white hover:!text-truck-red">Book the truck</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative aspect-square w-64 md:w-[22rem]">
              <Image src="/logo-truck-t.png" alt="La Cocina de Jeannie food truck badge" fill sizes="(max-width:768px) 16rem, 22rem" priority className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="shell grid gap-5 py-16 md:grid-cols-3 md:py-20">
          {cards.map((c)=>(
            <Link key={c.t} href={c.href} className="group rounded-2xl border-2 border-truck-blue/15 bg-white p-8 transition-all hover:-translate-y-1 hover:border-truck-blue hover:shadow-lg">
              <h3 className="font-display text-2xl font-extrabold text-truck-blue">{c.t}</h3>
              <p className="mt-2 font-body text-sm text-navy-deep/70">{c.d}</p>
              <span className="mt-5 inline-block font-display text-sm font-bold text-truck-red">{c.cta} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-truck-blue text-white">
        <div className="shell flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="font-display text-4xl font-extrabold uppercase sm:text-5xl">Hungry yet?</h2>
          <p className="max-w-md font-body text-white/85">Find the truck this week, or lock in a date for your next get-together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/truck/where" className="btn-flag !bg-truck-gold !text-truck-blue">Find the truck</Link>
            <Link href="/truck/book" className="btn-flag">Book the truck</Link>
          </div>
        </div>
      </section>
    </>
  );
}