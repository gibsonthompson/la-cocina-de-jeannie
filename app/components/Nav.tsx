import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/wedding-catering", label: "Wedding Catering" },
  { href: "/event-catering", label: "Events" },
  { href: "/menus", label: "Menus" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Nav({ overInk = false }: { overInk?: boolean }) {
  const text = overInk ? "text-ivory" : "text-ink";
  return (
    <header className={`absolute inset-x-0 top-0 z-20 ${text}`}>
      <nav className="shell flex items-center justify-between py-6">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium tracking-wide opacity-80 transition-opacity hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/truck"
            className="hidden font-body text-sm font-medium opacity-70 transition-opacity hover:opacity-100 sm:inline"
          >
            The Food Truck&nbsp;&rarr;
          </Link>
          <Link href="/quote" className="btn-gold">
            Request a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
