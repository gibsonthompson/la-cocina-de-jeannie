import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/wedding-catering", label: "Weddings" },
  { href: "/event-catering", label: "Events" },
  { href: "/menus", label: "Menus" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Nav({ light = false }: { light?: boolean }) {
  const tone = light ? "text-cream" : "text-navy";
  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${tone}`}>
      <nav className="shell flex items-center justify-between py-7">
        <Logo />
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-ed opacity-85 hover:opacity-100">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link href="/truck" className="hidden text-sm font-medium opacity-70 hover:opacity-100 md:inline">
            Food Truck
          </Link>
          <Link href="/quote" className="btn-gold !px-6 !py-3">
            Inquire
          </Link>
        </div>
      </nav>
    </header>
  );
}