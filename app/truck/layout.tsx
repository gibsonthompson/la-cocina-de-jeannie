import Link from "next/link";

const links = [
  { href: "/truck/where", label: "Where We Are" },
  { href: "/truck/menu", label: "Menu" },
];

export default function TruckLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="zone-truck min-h-screen">
      {/* Truck nav */}
      <header className="border-b-4 border-flag-yellow bg-flag-blue text-white">
        <nav className="shell flex items-center justify-between py-4">
          <Link href="/truck" className="flex items-center gap-2 font-display text-lg font-bold">
            {/* PLACEHOLDER truck logo */}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-flag-yellow text-flag-blue">●</span>
            La Cocina de Jeannie
          </Link>
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hidden font-body text-sm font-semibold sm:inline hover:text-flag-yellow">
                {l.label}
              </Link>
            ))}
            <Link href="/truck/book" className="btn-flag">Book the Truck</Link>
          </div>
        </nav>
      </header>

      {children}

      {/* Truck footer */}
      <footer className="bg-flag-blue text-white">
        <div className="shell flex flex-col items-center justify-between gap-3 py-8 text-center sm:flex-row sm:text-left">
          <p className="font-display text-lg font-bold">La Cocina de Jeannie · Food Truck</p>
          <Link href="/" className="font-body text-sm font-semibold text-flag-yellow hover:underline">
            ← Back to catering
          </Link>
        </div>
      </footer>
    </div>
  );
}
