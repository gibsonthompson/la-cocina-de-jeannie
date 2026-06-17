import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav overInk />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(80% 60% at 75% 15%, rgba(115,38,55,0.55), transparent 60%), radial-gradient(50% 50% at 15% 90%, rgba(199,164,90,0.18), transparent 60%)",
          }}
        />
        <div className="shell relative grid items-center gap-12 pb-20 pt-40 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-44">
          <div>
            <p className="eyebrow rise rise-1">North Georgia Catering</p>
            <h1 className="rise rise-2 mt-5 text-[2.7rem] leading-[1.05] sm:text-6xl">
              Homemade flavors for your most important moments.
            </h1>
            <p className="es rise rise-2 mt-3 text-xl sm:text-2xl">
              Sabor que se siente como en casa.
            </p>
            <p className="rise rise-3 mt-6 max-w-md font-body text-base leading-relaxed text-ivory/75">
              Latin &amp; American catering for weddings, showers, and
              celebrations across North Georgia. Crafted by Jeannie, served with
              sabor &amp; love.
            </p>
            <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-6">
              <Link href="/quote" className="btn-gold">
                Request a Quote
              </Link>
              <Link href="/truck" className="btn-ghost">
                Find the food truck <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="rise rise-3 photo-ph aspect-[4/5] w-full">
            <span>Signature event photo</span>
          </div>
        </div>
      </section>

      {/* ---------------- TWO PATHS ---------------- */}
      <section className="bg-ivory">
        <div className="shell py-20 md:py-28">
          <p className="eyebrow text-center">Two ways to gather</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl text-ink sm:text-4xl">
            One kitchen, two kinds of celebration.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/wedding-catering"
              className="group rounded-2xl border border-cocoa/10 bg-white p-9 transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(27,20,24,0.4)]"
            >
              <div className="photo-ph mb-7 aspect-[16/10] w-full">
                <span>Wedding tablescape</span>
              </div>
              <p className="es text-base">Para tu día especial</p>
              <h3 className="mt-1 text-2xl text-ink">Catering your special day</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-cocoa/80">
                Weddings, showers, and celebrations. Full-service and planned
                around you, so you can be present for every moment.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-vino transition-colors group-hover:text-vino-soft">
                Explore catering <span aria-hidden>&rarr;</span>
              </span>
            </Link>

            <Link
              href="/truck"
              className="group rounded-2xl border border-cocoa/10 bg-white p-9 transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(26,86,196,0.35)]"
            >
              <div className="photo-ph mb-7 aspect-[16/10] w-full">
                <span>The food truck</span>
              </div>
              <p className="es text-base">A la calle</p>
              <h3 className="mt-1 text-2xl text-ink">Catch the food truck</h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-cocoa/80">
                Street-style Latin &amp; American favorites, out in the North
                Georgia community. Find us, or bring us to your event.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-flag-blue">
                Find the truck <span aria-hidden>&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SOCIAL PROOF ---------------- */}
      <section className="bg-vino text-ivory">
        <div className="shell py-20 md:py-24">
          <p className="eyebrow text-center text-gold-soft">
            Trusted by North Georgia families
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {/* PLACEHOLDER testimonials — replace with real client quotes */}
            {[
              {
                q: "Jeannie made our wedding feel like a family gathering. Every guest asked who catered.",
                n: "Placeholder — Bride, Dahlonega",
              },
              {
                q: "The charcuterie boards were stunning and the food was unforgettable. Worth every penny.",
                n: "Placeholder — Host, Cumming",
              },
              {
                q: "She handled everything so we could enjoy the day. Sabor and heart in every bite.",
                n: "Placeholder — Mother of the Bride",
              },
            ].map((t, i) => (
              <figure key={i} className="text-center md:text-left">
                <div className="mb-3 text-gold-soft" aria-hidden>
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <blockquote className="font-display text-lg italic leading-snug">
                  &ldquo;{t.q}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-body text-xs uppercase tracking-[0.18em] text-ivory/60">
                  {t.n}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED WORK ---------------- */}
      <section className="bg-ivory">
        <div className="shell py-20 md:py-28">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Recent celebrations</p>
              <h2 className="mt-3 max-w-xl text-3xl text-ink sm:text-4xl">
                Celebrating special moments, one bite at a time.
              </h2>
              <p className="es mt-2 text-lg">Un bocado a la vez.</p>
            </div>
            <Link href="/gallery" className="link-quiet whitespace-nowrap">
              View the gallery &rarr;
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              "Charcuterie board",
              "Plated dinner",
              "Dessert table",
              "Outdoor reception",
              "Appetizer spread",
              "Family-style entrees",
            ].map((label, i) => (
              <div
                key={i}
                className={`photo-ph ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
              >
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MEET JEANNIE ---------------- */}
      <section className="bg-sand">
        <div className="shell grid items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
          <div className="photo-ph aspect-[4/5] w-full">
            <span>Portrait of Jeannie</span>
          </div>
          <div>
            <p className="eyebrow">Meet your guide</p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Hi family, I&rsquo;m Jeannie.
            </h2>
            <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-cocoa/85">
              <p>
                A Buffalo native, Puerto Rican, and now based in North Georgia.
                I&rsquo;m a proud mom of five who has always loved cooking and
                bringing people together through food.
              </p>
              <p>
                For over ten years I&rsquo;ve catered for family, friends, and
                special occasions. I specialize in homemade American and Latin
                cuisine made with sabor, love, and flavors that feel like home.
              </p>
              <p className="es mt-1 text-lg">
                I&rsquo;d love to be part of your special day.
              </p>
            </div>
            <Link href="/about" className="mt-8 inline-flex btn-gold">
              About Jeannie
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, rgba(115,38,55,0.6), transparent 65%)",
          }}
        />
        <div className="shell relative py-24 text-center md:py-28">
          <h2 className="mx-auto max-w-2xl text-4xl leading-tight sm:text-5xl">
            Let&rsquo;s make your celebration unforgettable.
          </h2>
          <p className="es mt-3 text-2xl">Celebremos juntos.</p>
          <div className="mt-9 flex justify-center">
            <Link href="/quote" className="btn-gold">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
