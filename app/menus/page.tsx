import Link from "next/link";
import CateringPage from "../components/CateringPage";

// PLACEHOLDER menu structure — replace categories and items with the real menu.
const categories = [
  { t: "Charcuterie & boards", items: ["Grazing board", "Appetizer spread", "Seasonal selection"] },
  { t: "Appetizers", items: ["Empanadas", "Tostones", "Hot & cold bites"] },
  { t: "Entrees", items: ["Latin favorites", "American classics", "Family-style platters"] },
  { t: "Sweets", items: ["Dessert table", "Flan", "Seasonal treats"] },
];

export default function Menus() {
  return (
    <CateringPage
      eyebrow="Menus"
      title="Homemade flavors, built around your event."
      es="Menús hechos en casa."
      intro="A taste of what's possible. Every event gets a custom menu — this is a starting point, not a limit. Full seasonal menus coming soon."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((c) => (
          <div key={c.t} className="rounded-2xl border border-cocoa/10 bg-white p-8">
            <h3 className="text-2xl text-ink">{c.t}</h3>
            <ul className="mt-4 space-y-2 font-body text-sm text-cocoa/75">
              {c.items.map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 font-body text-sm italic text-cocoa/60">
        Placeholder menu — final dishes, pricing, and dietary options to come.
      </p>

      <div className="mt-12">
        <Link href="/quote" className="btn-gold">Request a custom menu</Link>
      </div>
    </CateringPage>
  );
}
