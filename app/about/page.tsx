import Link from "next/link";
import CateringPage from "../components/CateringPage";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <CateringPage
      label="Meet your guide"
      title="Hi family, I'm Jeannie."
    >
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="media aspect-[4/5] w-full"><span className="cap">Portrait of Jeannie</span></div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-6 space-y-5 font-body text-base leading-relaxed text-charcoal/85">
            <p>
              For those who don&rsquo;t know me, I&rsquo;m a Buffalo native, Puerto
              Rican, and now based in North Georgia. I&rsquo;m also a proud mom of
              five who has always had a love for cooking and bringing people
              together through food.
            </p>
            <p>
              For over ten years, I&rsquo;ve been catering for family, friends, and
              special occasions, and now I&rsquo;m excited to share my passion with
              even more people.
            </p>
            <p>
              I specialize in homemade American and Latin cuisine made with
              love, care, and flavors that feel like home. Whether it&rsquo;s a family
              gathering, a celebration, or a special event, I would love to be part
              of your special day.
            </p>
            <p className="es text-xl">Celebrating special moments, one bite at a time.</p>
          </div>
          <Link href="/quote" className="btn-gold mt-8">Request a quote</Link>
        </Reveal>
      </div>
    </CateringPage>
  );
}