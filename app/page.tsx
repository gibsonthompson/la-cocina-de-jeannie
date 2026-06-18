import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main>
      {/* ============== HERO: food-plating video ============== */}
      <section className="relative min-h-screen text-cream">
        <Nav light />
        {/* Background media. Poster shows now; drop the plating loop in later:
            add  <source src="/hero-plating.mp4" type="video/mp4" />  and the
            video autoplays over the poster with zero layout change. */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="scrim absolute inset-0" />

        <div className="shell relative flex min-h-screen flex-col justify-end pb-24 pt-40">
          <Reveal className="max-w-3xl">
            <p className="label text-gold-soft">North Georgia &middot; Catering</p>
            <h1 className="mt-6 font-display text-[3.4rem] font-medium leading-[1.02] sm:text-7xl">
              A table worth gathering around.
            </h1>
            <p className="mt-7 max-w-md font-body text-lg leading-relaxed text-cream/80">
              Latin and American catering for weddings and celebrations, made by
              hand, with a little spice.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link href="/quote" className="btn-gold">Request a quote</Link>
              <Link href="/about" className="link-ed text-cream">Meet Jeannie</Link>
            </div>
          </Reveal>
        </div>
        <span className="absolute bottom-7 right-6 z-10 font-body text-[11px] uppercase tracking-label text-cream/45 md:right-12">
          Plated by hand
        </span>
      </section>

      {/* ============== OPENING STATEMENT ============== */}
      <section className="bg-cream">
        <div className="shell py-28 md:py-40">
          <Reveal className="max-w-4xl">
            <p className="font-display text-3xl leading-[1.25] text-navy sm:text-[2.7rem] sm:leading-[1.22]">
              For more than ten years, Jeannie has cooked for the people she
              loves. Now she sets the table for yours.
            </p>
            <p className="es mt-8 text-2xl">Flavor that feels like home.</p>
          </Reveal>
        </div>
      </section>

      {/* ============== TWO WORLDS (asymmetric, not a card grid) ============== */}
      <section className="bg-cream-deep">
        <div className="shell space-y-20 py-24 md:space-y-28 md:py-32">
          {/* Catering — the larger, dominant block */}
          <Reveal className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr]">
            <Link href="/wedding-catering" className="media aspect-[16/10] w-full">
              <span className="cap">Wedding tablescape</span>
            </Link>
            <div>
              <p className="label">The flagship</p>
              <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">
                Weddings &amp; celebrations
              </h2>
              <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-charcoal/80">
                Full-service catering planned around your day, so you can be
                present for every moment of it. Custom menus, charcuterie, and
                homemade flavors that feel like family.
              </p>
              <Link href="/wedding-catering" className="link-ed mt-7 inline-block text-navy">
                Explore catering
              </Link>
            </div>
          </Reveal>

          {/* Food truck — secondary, offset the other way and smaller */}
          <Reveal className="grid items-center gap-10 md:grid-cols-[1fr_1.25fr]">
            <div className="md:order-2">
              <Link href="/truck" className="media aspect-[16/10] w-full">
                <span className="cap">The food truck</span>
              </Link>
            </div>
            <div className="md:order-1">
              <p className="label text-truck-red">Out in the community</p>
              <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">
                The food truck
              </h2>
              <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-charcoal/80">
                Street-style Latin and American favorites, served fresh wherever
                we park. Catch us around North Georgia, or bring the truck to
                your event.
              </p>
              <Link href="/truck" className="link-ed mt-7 inline-block text-navy">
                Find the truck
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== SELECTED CELEBRATIONS (editorial photo set) ============== */}
      <section className="bg-cream">
        <div className="shell py-24 md:py-32">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="label">Selected celebrations</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-navy sm:text-5xl">
                Special moments, one bite at a time.
              </h2>
            </div>
            <Link href="/gallery" className="link-ed text-navy">View the gallery</Link>
          </Reveal>

          {/* asymmetric arrangement, varied sizes */}
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="media aspect-[16/11] w-full"><span className="cap">Plated dinner</span></div>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-5">
              <div className="media aspect-[16/11] w-full md:aspect-[4/5]"><span className="cap">Charcuterie</span></div>
            </Reveal>
            <Reveal delay={0.04} className="md:col-span-4">
              <div className="media aspect-square w-full"><span className="cap">Dessert table</span></div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8">
              <div className="media aspect-[16/9] w-full"><span className="cap">Reception spread</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== MEET JEANNIE ============== */}
      <section className="bg-cream-deep">
        <div className="shell grid items-center gap-14 py-24 md:grid-cols-[1fr_1.1fr] md:py-32">
          <Reveal>
            <div className="media aspect-[4/5] w-full"><span className="cap">Portrait of Jeannie</span></div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label">Meet your guide</p>
            <h2 className="mt-6 font-display text-4xl text-navy sm:text-5xl">
              Hi family, I&rsquo;m Jeannie.
            </h2>
            <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-charcoal/85">
              <p>
                A Buffalo native, Puerto Rican, and now based in North Georgia. A
                proud mom of five who has always loved cooking and bringing people
                together through food.
              </p>
              <p>
                For over ten years I&rsquo;ve catered for family, friends, and
                special occasions. I cook homemade American and Latin food made
                with love, care, and a little spice.
              </p>
            </div>
            <Link href="/about" className="btn-outline mt-9 border-navy text-navy">
              About Jeannie
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============== ONE PULL QUOTE (restrained social proof) ============== */}
      <section className="bg-navy text-cream">
        <div className="shell py-28 text-center md:py-36">
          <Reveal className="mx-auto max-w-3xl">
            <div className="mb-6 text-gold" aria-hidden>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            {/* PLACEHOLDER testimonial */}
            <blockquote className="font-display text-2xl italic leading-snug sm:text-4xl sm:leading-[1.3]">
              &ldquo;Jeannie made our wedding feel like a family gathering. Every
              single guest asked who catered.&rdquo;
            </blockquote>
            <p className="mt-8 font-body text-xs uppercase tracking-label text-cream/55">
              Placeholder &middot; Bride, Dahlonega
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============== CLOSING ============== */}
      <section className="bg-cream">
        <div className="shell py-28 text-center md:py-36">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-4xl leading-tight text-navy sm:text-6xl">
              Let&rsquo;s set your table.
            </h2>
            <div className="mt-10 flex justify-center">
              <Link href="/quote" className="btn-gold">Request a quote</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}