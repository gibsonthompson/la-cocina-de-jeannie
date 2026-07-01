import Link from "next/link";
import Image from "next/image";
import { Baloo_2 } from "next/font/google";

const truck = Baloo_2({ subsets:["latin"], weight:["500","600","700","800"], variable:"--font-truck", display:"swap" });

const links = [
  { href: "/truck/where", label: "Where We Are" },
  { href: "/truck/menu", label: "Menu" },
];

export default function TruckLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`zone-truck ${truck.variable} min-h-screen bg-cream`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .zone-truck .font-display{font-family:var(--font-truck),system-ui,sans-serif;letter-spacing:0}
        @keyframes truckIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
        .truck-enter{animation:truckIn 1s cubic-bezier(.22,1,.36,1) both}
        @media (prefers-reduced-motion: reduce){.truck-enter{animation:none}}
      `}} />
      <div className="truck-enter">
        <header className="sticky top-0 z-40 border-b-4 border-truck-gold bg-white/95 backdrop-blur">
          <nav className="shell flex items-center justify-between py-3">
            <Link href="/truck" aria-label="La Cocina de Jeannie, food truck home" className="flex items-center">
              <Image src="/logo-truck-t.png" alt="La Cocina de Jeannie" width={72} height={72} priority className="h-14 w-14 md:h-[68px] md:w-[68px]" />
            </Link>
            <div className="flex items-center gap-7">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="hidden font-display text-[15px] font-bold text-truck-blue hover:text-truck-red sm:inline">{l.label}</Link>
              ))}
              <Link href="/truck/book" className="btn-flag">Book the Truck</Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-truck-blue text-white">
          <div className="shell flex flex-col items-center justify-between gap-4 py-10 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <Image src="/logo-truck-t.png" alt="" width={52} height={52} className="h-12 w-12" />
              <p className="font-display text-xl font-extrabold">La Cocina de Jeannie</p>
            </div>
            <Link href="/" className="font-display text-sm font-bold text-truck-gold hover:underline">Back to catering</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}