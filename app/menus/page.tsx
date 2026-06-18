import Link from "next/link";
import CateringPage from "../components/CateringPage";
import Reveal from "../components/Reveal";

const categories = [
  { t: "Charcuterie & boards", items: ["Grazing board", "Appetizer spread", "Seasonal selection"] },
  { t: "Appetizers", items: ["Empanadas", "Tostones", "Hot & cold bites"] },
  { t: "Entrees", items: ["Latin favorites", "American classics", "Family-style platters"] },
  { t: "Sweets", items: ["Dessert table", "Flan", "Seasonal treats"] },
];

export default function Menus() {
  return (
    <CateringPage
      label="Menus"
      title="Homemade flavors, built around your event."
      intro="A taste of what's possible. Every event gets a custom menu, so this is a starting point, not a limit. Full seasonal menus coming soon."
    >
      <Reveal className="grid gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-2">
        {categories.map((c) => (
          <div key={c.t} className="bg-cream p-9">
            <h3 className="font-display text-2xl text-navy">{c.t}</h3>
            <ul className="mt-5 space-y-2 font-body text-sm text-charcoal/75">
              {c.items.map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
      <p className="mt-8 font-body text-sm italic text-charcoal/55">
        Placeholder menu. Final dishes, pricing, and dietary options to come.
      </p>
      <div className="mt-12">
        <Link href="/quote" className="btn-gold">Request a custom menu</Link>
      </div>
    </CateringPage>
  );
}