import Link from "next/link";
import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main>
      {/* ================= HERO: real food, full-bleed ================= */}
      <section className="relative min-h-[92vh] text-cream">
        <Nav light />
        <Image src="/photos/03-appetizer-spread.jpg" alt="An appetizer spread catered by Jeannie & Co." fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/30 to-navy-deep/80" />
        <div className="shell relative flex min-h-[92vh] flex-col justify-end pb-20 pt-40">
          <Reveal className="max-w-3xl">
            <p className="label text-gold-soft">North Georgia &middot; Catering</p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[1.0] sm:text-8xl">A table worth gathering around.</h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-cream/85">
              Homemade Latin and American catering for weddings, showers, and
              celebrations. Built by hand, served with a little spice.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <Link href="/quote" className="btn-gold">Request a quote</Link>
              <Link href="/menus" className="link-ed text-cream">Explore the menu</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-navy text-cream/80">
        <div className="shell flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-center font-body text-[12px] uppercase tracking-label">
          <span>10+ years</span><span className="text-gold">&middot;</span>
          <span>Full-service &amp; drop-off</span><span className="text-gold">&middot;</span>
          <span>Weddings &amp; celebrations</span><span className="text-gold">&middot;</span>
          <span>North Georgia</span>
        </div>
      </section>

      {/* ================= INTRO STATEMENT ================= */}
      <section className="bg-cream">
        <div className="shell py-24 md:py-32">
          <Reveal className="max-w-4xl">
            <p className="font-display text-3xl leading-[1.25] text-navy sm:text-[2.6rem] sm:leading-[1.22]">
              For more than ten years, Jeannie has cooked for the people she
              loves. Now she sets the table for yours.
            </p>
            <p className="es mt-8 text-2xl">Flavor that feels like home.</p>
          </Reveal>
        </div>
      </section>

      {/* ================= SIGNATURE SPREADS (make them hungry) ================= */}
      <section className="bg-cream-deep">
        <div className="shell py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="label">Signature spreads</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy sm:text-5xl">
              Tables that make people ask who catered.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src="/photos/01-charcuterie-overhead.jpg" alt="Charcuterie board" fill sizes="(max-width:768px) 100vw, 58vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full">
                <Image src="/photos/04-crostini.jpg" alt="Whipped feta crostini with roasted tomato" fill sizes="(max-width:768px) 100vw, 42vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.04} className="md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src="/photos/02-charcuterie-box.jpg" alt="Charcuterie box" fill sizes="(max-width:768px) 100vw, 42vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src="/photos/03-appetizer-spread.jpg" alt="Appetizer spread" fill sizes="(max-width:768px) 100vw, 58vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-10"><Link href="/gallery" className="link-ed text-navy">View the full gallery</Link></Reveal>
        </div>
      </section>

      {/* ================= SERVICES / PATHS ================= */}
      <section className="bg-cream">
        <div className="shell py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="label">What we cater</p>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Find your celebration.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t:"Weddings", d:"Full-service catering planned around your day, so you can be present for it.", href:"/wedding-catering" },
              { t:"Events & parties", d:"Showers, birthdays, quinceañeras, corporate, and private gatherings.", href:"/event-catering" },
              { t:"The food truck", d:"Street-style Latin and American favorites, out in the community.", href:"/truck" },
            ].map((s)=>(
              <Reveal key={s.t}>
                <Link href={s.href} className="group block h-full border border-navy/12 bg-cream-deep/40 p-9 transition-colors hover:border-gold">
                  <h3 className="font-display text-2xl text-navy">{s.t}</h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-charcoal/80">{s.d}</p>
                  <span className="mt-6 inline-block font-body text-sm font-semibold text-gold">Explore &rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-navy text-cream">
        <div className="shell py-24 md:py-32">
          <Reveal className="text-center"><p className="label text-gold-soft">How it works</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Three steps to a full table.</h2></Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 md:grid-cols-3">
            {[
              { n:"01", t:"Tell us about your day", d:"Share your date, guest count, and the feeling you're after." },
              { n:"02", t:"We build your menu & quote", d:"A custom menu and a clear quote, tailored to your celebration." },
              { n:"03", t:"We cater, you celebrate", d:"Setup, serving, and cleanup handled, so you can enjoy your guests." },
            ].map((s)=>(
              <div key={s.n} className="bg-navy p-9">
                <span className="font-display text-3xl text-gold">{s.n}</span>
                <h3 className="mt-3 font-display text-xl text-cream">{s.t}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-cream/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PACKAGES (with starting-at) ================= */}
      <section className="bg-cream">
        <div className="shell py-24 md:py-32">
          <Reveal className="max-w-2xl"><p className="label">Sample packages</p>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">A starting point, not a limit.</h2></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t:"Grazing & charcuterie", p:"$18", d:"Artisan boards and grazing tables, styled to impress." },
              { t:"Passed appetizers", p:"$26", d:"Hot and cold bites, crostini, and homemade favorites." },
              { t:"Full-service event", p:"$42", d:"Plated or buffet entrees with setup, serving, and cleanup." },
            ].map((p)=>(
              <Reveal key={p.t}>
                <div className="flex h-full flex-col border border-navy/12 p-9">
                  <h3 className="font-display text-2xl text-navy">{p.t}</h3>
                  <p className="mt-4 font-display text-3xl text-gold">{p.p}<span className="font-body text-sm text-charcoal/60"> / guest</span></p>
                  <p className="mt-1 font-body text-[11px] uppercase tracking-label text-charcoal/45">Starting at &middot; placeholder</p>
                  <p className="mt-4 font-body text-[15px] leading-relaxed text-charcoal/80">{p.d}</p>
                  <Link href="/quote" className="link-ed mt-auto pt-7 text-navy">Request this package</Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 font-body text-sm italic text-charcoal/55">
            Final pricing depends on guest count, menu, and service style. Placeholder figures, to be set.
          </p>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="bg-cream-deep">
        <div className="shell py-24 md:py-28">
          <Reveal className="text-center"><p className="label">Kind words</p></Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              { q:"Every single guest asked who catered. Jeannie made our wedding feel like family.", n:"Placeholder", e:"Bride, Dahlonega" },
              { q:"The charcuterie was stunning and the food was unforgettable. Worth every penny.", n:"Placeholder", e:"Birthday, Cumming" },
              { q:"She handled everything so we could enjoy the day. Heart in every bite.", n:"Placeholder", e:"Shower, Gainesville" },
            ].map((t,i)=>(
              <Reveal key={i} delay={i*0.06}>
                <div className="mb-3 text-gold" aria-hidden>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <blockquote className="font-display text-xl italic leading-snug text-navy">&ldquo;{t.q}&rdquo;</blockquote>
                <p className="mt-4 font-body text-xs uppercase tracking-label text-charcoal/55">{t.n} &middot; {t.e}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MEET JEANNIE ================= */}
      <section className="bg-cream">
        <div className="shell grid items-center gap-14 py-24 md:grid-cols-[1fr_1.05fr] md:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image src="/photos/jeannie-family.jpg" alt="Jeannie and her family" fill sizes="(max-width:768px) 100vw, 45vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">Meet your guide</p>
            <h2 className="mt-5 font-display text-4xl text-navy sm:text-5xl">Hi family, I&rsquo;m Jeannie.</h2>
            <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-charcoal/85">
              <p>A Buffalo native, Puerto Rican, and now based in North Georgia. A proud mom of five who has always loved cooking and bringing people together through food.</p>
              <p>For over ten years I&rsquo;ve catered for family, friends, and special occasions. I cook homemade American and Latin food made with love, care, and a little spice.</p>
            </div>
            <Link href="/about" className="btn-outline mt-9 border-navy text-navy">About Jeannie</Link>
          </Reveal>
        </div>
      </section>

      {/* ================= CREDENTIALS ================= */}
      <section className="bg-navy text-cream">
        <div className="shell grid gap-8 py-16 text-center sm:grid-cols-4">
          {[["10+","Years catering"],["200+","Events served"],["Certified","Food-safety"],["North GA","Service area"]].map(([a,b])=>(
            <div key={b}><p className="font-display text-4xl text-gold">{a}</p><p className="mt-2 font-body text-xs uppercase tracking-label text-cream/60">{b}</p></div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA on ambiance photo ================= */}
      <section className="relative text-cream">
        <Image src="/photos/05-champagne-evening.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="shell relative py-28 text-center md:py-36">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">Let&rsquo;s set your table.</h2>
            <p className="mt-5 font-body text-lg text-cream/80">Tell us about your celebration and we&rsquo;ll send a custom menu and quote within 24 hours.</p>
            <div className="mt-9 flex justify-center"><Link href="/quote" className="btn-gold">Request a quote</Link></div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}