import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About Jeannie | Jeannie & Co. Catering",
  description: "Jeannie is a Buffalo native and Puerto Rican mom of five based in North Georgia, catering homemade American and Latin cuisine for over ten years.",
};

export default function About() {
  return (
    <main className="bg-cream">
      <section className="bg-cream">
        <Nav />
        <div className="shell grid items-center gap-14 pb-24 pt-36 md:grid-cols-[1fr_1.05fr] md:pb-32">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden"><Image src="/photos/jeannie-family.jpg" alt="Jeannie and her family" fill priority sizes="(max-width:768px) 100vw, 45vw" className="object-cover" /></div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">Meet your guide</p>
            <h1 className="mt-4 font-display text-5xl text-navy sm:text-6xl">Hi family, I&rsquo;m Jeannie.</h1>
            <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-charcoal/85">
              <p>For those who don&rsquo;t know me, I&rsquo;m a Buffalo native, Puerto Rican, and now based in North Georgia. I&rsquo;m also a proud mom of five who has always had a love for cooking and bringing people together through food.</p>
              <p>For over ten years, I&rsquo;ve been catering for family, friends, and special occasions, and now I&rsquo;m excited to share my passion with even more people.</p>
              <p>I specialize in homemade American and Latin cuisine made with love, care, and flavors that feel like home. Whether it&rsquo;s a family gathering, a celebration, or a special event, I would love to be part of your special day.</p>
            </div>
            <p className="es mt-7 text-xl">Celebrating special moments, one bite at a time.</p>
            <Link href="/quote" className="btn-gold mt-8">Talk to Jeannie</Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="shell grid grid-cols-2 gap-5 py-16 md:grid-cols-4">
          {["/photos/04-crostini.jpg","/photos/01-charcuterie-overhead.jpg","/photos/03-appetizer-spread.jpg","/photos/02-charcuterie-box.jpg"].map((src,i)=>(
            <Reveal key={src} delay={(i%4)*0.05}><div className="relative aspect-square w-full overflow-hidden"><Image src={src} alt="" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" /></div></Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}