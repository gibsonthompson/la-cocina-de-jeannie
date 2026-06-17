import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="shell grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="text-gold">
          <Logo className="text-ivory" />
          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-ivory/70">
            Latin &amp; American catering for the moments that matter, across North
            Georgia.
          </p>
          <p className="mt-4 es text-base">Con sabor &amp; love.</p>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Catering</h3>
          <ul className="space-y-2 font-body text-sm text-ivory/75">
            <li><Link href="/wedding-catering" className="hover:text-gold">Wedding catering</Link></li>
            <li><Link href="/event-catering" className="hover:text-gold">Event catering</Link></li>
            <li><Link href="/menus" className="hover:text-gold">Menus</Link></li>
            <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link href="/quote" className="hover:text-gold">Request a quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Reach Jeannie</h3>
          <ul className="space-y-2 font-body text-sm text-ivory/75">
            {/* PLACEHOLDER contact details — swap for real ones */}
            <li><a href="tel:+10000000000" className="hover:text-gold">(000) 000-0000</a></li>
            <li><a href="mailto:hello@lacocinadejeannie.com" className="hover:text-gold">hello@lacocinadejeannie.com</a></li>
            <li><a href="https://instagram.com" className="hover:text-gold">Instagram</a></li>
            <li><Link href="/truck" className="hover:text-gold">The food truck &rarr;</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="shell flex flex-col gap-2 py-6 font-body text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} La Cocina de Jeannie. North Georgia.</span>
          <span>Latin &amp; American Cuisine &middot; Catering &amp; Food Truck</span>
        </div>
      </div>
    </footer>
  );
}
