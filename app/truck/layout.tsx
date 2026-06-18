import Link from "next/link";
import Image from "next/image";
import badge from "../../public/logo-truck-t.png";

const links = [
  { href: "/truck/where", label: "Where We Are" },
  { href: "/truck/menu", label: "Menu" },
];

export default function TruckLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="zone-truck min-h-screen">
      <header className="border-b-4 border-truck-gold bg-truck-blue text-white">
        <nav className="shell flex items-center justify-between py-3">
          <Link href="/truck" className="flex items-center gap-3 font-display text-lg font-bold">
            <Image src={badge} alt="" width={44} height={44} className="h-11 w-11" />
            La Cocina de Jeannie
          </Link>
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hidden font-body text-sm font-semibold hover:text-truck-gold sm:inline">
                {l.label}
              </Link>
            ))}
            <Link href="/truck/book" className="btn-flag">Book the Truck</Link>
          </div>
        </nav>
      </header>

      {children}

      <footer className="bg-truck-blue text-white">
        <div className="shell flex flex-col items-center justify-between gap-3 py-8 text-center sm:flex-row sm:text-left">
          <p className="font-display text-lg font-bold">La Cocina de Jeannie &middot; Food Truck</p>
          <Link href="/" className="font-body text-sm font-semibold text-truck-gold hover:underline">
            Back to catering
          </Link>
        </div>
      </footer>
    </div>
  );
}