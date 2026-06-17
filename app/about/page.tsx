import Link from "next/link";
import CateringPage from "../components/CateringPage";

export default function About() {
  return (
    <CateringPage
      eyebrow="Meet your guide"
      title="Hi family, I'm Jeannie."
      es="Bienvenidos a mi cocina."
    >
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="photo-ph aspect-[4/5] w-full"><span>Portrait of Jeannie</span></div>
        <div className="space-y-5 font-body text-base leading-relaxed text-cocoa/85">
          <p>
            For those who don&rsquo;t know me, I&rsquo;m a Buffalo native, Puerto
            Rican, and now based in North Georgia. I&rsquo;m also a proud mom of
            five who has always had a love for cooking and bringing people
            together through food.
          </p>
          <p>
            For over ten years, I&rsquo;ve been catering for family, friends, and
            special occasions, and now I&rsquo;m excited to expand and share my
            passion with even more people.
          </p>
          <p>
            I specialize in homemade American and Latin cuisine made with sabor,
            love, and flavors that feel like home. Whether it&rsquo;s a family
            gathering, a celebration, or a special event, I would love to be part
            of your special day.
          </p>
          <p className="es text-xl">
            Celebrando momentos especiales, un bocado a la vez.
          </p>
          <div className="pt-3">
            <Link href="/quote" className="btn-gold">Request a Quote</Link>
          </div>
        </div>
      </div>
    </CateringPage>
  );
}
