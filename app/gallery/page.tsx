import Image from "next/image";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Gallery | Jeannie & Co. Catering",
  description: "A look at recent celebrations across North Georgia. Charcuterie, appetizers, and event setups catered by Jeannie & Co.",
};

const shots = [
  { src:"/photos/01-charcuterie-overhead.jpg", a:"Charcuterie board, overhead" },
  { src:"/photos/03-appetizer-spread.jpg", a:"Appetizer spread on display" },
  { src:"/photos/04-crostini.jpg", a:"Whipped feta crostini" },
  { src:"/photos/02-charcuterie-box.jpg", a:"Charcuterie box" },
  { src:"/photos/05-champagne-evening.jpg", a:"Evening event service" },
];

export default function Gallery() {
  return (
    <main className="bg-cream">
      <section className="bg-navy text-cream">
        <Nav light />
        <div className="shell pb-16 pt-40">
          <Reveal className="max-w-3xl">
            <p className="label text-gold-soft">Gallery</p>
            <h1 className="mt-4 font-display text-6xl font-semibold leading-[1.04] sm:text-7xl">Special moments, one bite at a time.</h1>
            <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-cream/80">
              A look at recent celebrations across North Georgia.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...shots, ...shots.slice(0,3)].map((s,i)=>(
            <Reveal key={i} delay={(i%3)*0.05}>
              <div className={`relative w-full overflow-hidden ${i%5===0?"aspect-[4/5]":i%5===2?"aspect-square":"aspect-[3/4]"}`}>
                <Image src={s.src} alt={s.a} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 font-body text-sm italic text-charcoal/55">More photos from recent events added as we go.</p>
      </section>
      <Footer />
    </main>
  );
}