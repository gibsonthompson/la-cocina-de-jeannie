import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export default function StatCard({ label, value, sub, icon: Icon, href, accent }: {
  label: string; value: string | number; sub?: string; icon: LucideIcon; href?: string; accent?: string;
}) {
  const body = (
    <div className="flex items-start justify-between rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">{label}</p>
        <p className="mt-2 font-display text-4xl font-semibold text-[#1E2B4D]">{value}</p>
        {sub && <p className="mt-1 text-sm text-stone-500">{sub}</p>}
      </div>
      <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: (accent || "#C6A24F") + "1a", color: accent || "#C6A24F" }}>
        <Icon className="h-5 w-5" />
      </span>
    </div>
  );
  return href ? <Link href={href}>{body}</Link> : body;
}
