import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="shell grid gap-12 py-20 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-cream">Jeannie <span className="italic text-gold">&amp; Co.</span></p>
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-cream/70">Catering for the moments that matter, across North Georgia.</p>
          <p className="mt-4 font-display text-lg italic text-gold">Made by hand, served with care.</p>
        </div>
        <div>
          <h3 className="label mb-5">Catering</h3>
          <ul className="space-y-3 font-body text-sm text-cream/75">
            <li><Link href="/wedding-catering" className="link-ed hover:text-gold">Wedding catering</Link></li>
            <li><Link href="/event-catering" className="link-ed hover:text-gold">Event catering</Link></li>
            <li><Link href="/menus" className="link-ed hover:text-gold">Menus</Link></li>
            <li><Link href="/gallery" className="link-ed hover:text-gold">Gallery</Link></li>
            <li><Link href="/quote" className="link-ed hover:text-gold">Start planning</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="label mb-5">Reach Jeannie</h3>
          <ul className="space-y-3 font-body text-sm text-cream/75">
            <li><a href="tel:+10000000000" className="link-ed hover:text-gold">(000) 000-0000</a></li>
            <li><a href="mailto:hello@jeannieandco.com" className="link-ed hover:text-gold">hello@jeannieandco.com</a></li>
            <li><a href="https://instagram.com" className="link-ed hover:text-gold">Instagram</a></li>
            <li><Link href="/truck" className="link-ed hover:text-gold">La Cocina de Jeannie (food truck)</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10"><div className="shell flex flex-col gap-2 py-7 font-body text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between"><span>&copy; 2026 Jeannie &amp; Co. &middot; North Georgia</span><span>Catering &amp; Events</span></div></div>
    </footer>
  );
}