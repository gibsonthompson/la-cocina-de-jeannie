import Nav from "./Nav";
import Footer from "./Footer";

export default function CateringPage({
  eyebrow,
  title,
  es,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  es?: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <main>
      <Nav overInk />
      <header className="relative overflow-hidden bg-ink text-ivory">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(70% 80% at 80% 0%, rgba(115,38,55,0.5), transparent 60%)",
          }}
        />
        <div className="shell relative pb-16 pt-40 md:pb-20 md:pt-44">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
            {title}
          </h1>
          {es && <p className="es mt-3 text-2xl">{es}</p>}
          {intro && (
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ivory/75">
              {intro}
            </p>
          )}
        </div>
      </header>
      <section className="bg-ivory">
        <div className="shell py-16 md:py-20">{children}</div>
      </section>
      <Footer />
    </main>
  );
}
