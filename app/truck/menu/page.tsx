import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truck Menu | La Cocina de Jeannie",
  description: "Street-style Latin & American menu from the La Cocina de Jeannie food truck.",
};

// PLACEHOLDER truck menu — replace with the real street menu + prices.
const menu = [
  { t: "Handhelds", items: ["Empanadas", "Loaded fries", "Street tacos"] },
  { t: "Plates", items: ["Rice & beans plate", "Pernil plate", "Combo plate"] },
  { t: "Sides & sweets", items: ["Tostones", "Maduros", "Sweet treat of the day"] },
];

export default function TruckMenu() {
  return (
    <section className="bg-white">
      <div className="shell py-16">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-flag-red">The Menu</p>
        <h1 className="mt-3 font-display text-5xl font-black text-flag-blue">Street food favorites.</h1>
        <p className="mt-4 max-w-md font-body text-base text-ink/70">
          Quick, fresh, and full of sabor. Final menu and prices coming soon.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {menu.map((m) => (
            <div key={m.t} className="rounded-2xl border-2 border-flag-blue/15 p-7">
              <h2 className="font-display text-xl font-bold text-flag-red">{m.t}</h2>
              <ul className="mt-4 space-y-2 font-body text-sm text-ink/75">
                {m.items.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-flag-yellow" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
