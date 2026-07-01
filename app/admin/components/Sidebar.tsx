"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, Inbox, Truck, CalendarDays, LogOut, Menu, X, ExternalLink } from "lucide-react";
import { signOut } from "../actions";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/leads", label: "Leads", icon: Inbox },
  { href: "/admin/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/admin/truck", label: "Food Truck", icon: Truck },
];

export default function Sidebar({ email }: { email?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string, exact?: boolean) => (exact ? pathname === href : pathname.startsWith(href));

  return (
    <>
      {/* mobile top bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#16203B] px-4 py-3 text-cream md:hidden">
        <span className="font-display text-lg font-semibold">Jeannie <span className="italic text-gold">&amp; Co.</span></span>
        <button onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="h-6 w-6" /></button>
      </div>

      {/* overlay */}
      {open && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setOpen(false)} />}

      <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#16203B] text-cream transition-transform md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex items-center justify-between px-6 py-6">
          <div>
            <p className="font-display text-xl font-semibold leading-none">Jeannie <span className="italic text-gold">&amp; Co.</span></p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/50">Admin</p>
          </div>
          <button onClick={() => setOpen(false)} className="md:hidden" aria-label="Close menu"><X className="h-5 w-5" /></button>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {nav.map((n) => {
            const active = isActive(n.href, n.exact);
            const Icon = n.icon;
            return (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-gold text-[#16203B]" : "text-cream/75 hover:bg-white/5 hover:text-cream"}`}>
                <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-1 border-t border-white/10 px-3 py-4">
          <Link href="/" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-cream/70 hover:bg-white/5 hover:text-cream">
            <ExternalLink className="h-[18px] w-[18px]" /> View site
          </Link>
          <form action={signOut}>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-cream/70 hover:bg-white/5 hover:text-cream">
              <LogOut className="h-[18px] w-[18px]" /> Sign out
            </button>
          </form>
          {email && <p className="truncate px-3 pt-2 text-[11px] text-cream/40">{email}</p>}
        </div>
      </aside>
    </>
  );
}
