import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Menus | Jeannie & Co. Catering",
  description: "A taste of what Jeannie & Co. makes: charcuterie, appetizers, entrees, and sweets. Every event gets a custom menu across North Georgia.",
};

const categories = [
  { t:"Charcuterie & boards", items:["Grazing board","Charcuterie box","Seasonal spread"] },
  { t:"Appetizers", items:["Whipped feta crostini","Empanadas","Hot and cold bites"] },
  { t:"Entrees", items:["Pernil and Latin plates","American classics","Family-style platters"] },
  { t:"Sweets", items:["Dessert table","Flan","Seasonal treats"] },
];

export default function Menus() {
  return (
    <main className="bg-cream">
      <section className="relative text-cream">
        <Nav light />
        <Image src="/photos/04-crostini.jpg" alt="Crostini close up" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="shell relative pb-20 pt-40">
          <Reveal className="max-w-3xl">
            <p className="label text-gold-soft">Menus</p>
            <h1 className="mt-4 font-display text-6xl font-semibold leading-[1.04] sm:text-7xl">Homemade flavors, built around your event.</h1>
            <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-cream/85">
              A taste of what&rsquo;s possible. Every event gets a custom menu, so this is a
              starting point, not a limit. Full seasonal menus coming soon.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <div className="grid gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-2">
          {categories.map((c)=>(
            <div key={c.t} className="bg-cream p-9">
              <h3 className="font-display text-2xl text-navy">{c.t}</h3>
              <ul className="mt-5 space-y-2 font-body text-sm text-charcoal/75">
                {c.items.map((i)=>(<li key={i} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> {i}</li>))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 font-body text-sm italic text-charcoal/55">Final dishes come together when we plan your event.</p>
        <div className="mt-10"><Link href="/quote" className="btn-gold">Plan your menu</Link></div>
      </section>
      <Footer />
    </main>
  );
}