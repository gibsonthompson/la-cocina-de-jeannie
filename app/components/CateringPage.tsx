import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";

export default function CateringPage({
  label,
  title,
  es,
  intro,
  children,
}: {
  label: string;
  title: string;
  es?: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <main>
      <Nav light />
      <header className="relative bg-navy text-cream">
        <div className="shell relative pb-20 pt-44 md:pb-24">
          <Reveal className="max-w-3xl">
            <p className="label text-gold-soft">{label}</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
            {es && <p className="es mt-4 text-2xl">{es}</p>}
            {intro && (
              <p className="mt-7 max-w-xl font-body text-base leading-relaxed text-cream/75">
                {intro}
              </p>
            )}
          </Reveal>
        </div>
      </header>
      <section className="bg-cream">
        <div className="shell py-20 md:py-28">{children}</div>
      </section>
      <Footer />
    </main>
  );
}