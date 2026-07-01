import type { LeadStatus, LeadSource, TruckStopStatus } from "@/lib/types";

const LEAD: Record<LeadStatus, string> = {
  new: "bg-blue-50 text-blue-700 ring-blue-600/20",
  contacted: "bg-amber-50 text-amber-700 ring-amber-600/20",
  booked: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  done: "bg-stone-100 text-stone-600 ring-stone-500/20",
  lost: "bg-rose-50 text-rose-700 ring-rose-600/20",
};
const SOURCE: Record<LeadSource, string> = {
  wedding: "bg-[#F5EFE2] text-[#1E2B4D] ring-[#C6A24F]/40",
  event: "bg-[#F5EFE2] text-[#1E2B4D] ring-[#C6A24F]/40",
  truck: "bg-[#1F4FD8]/10 text-[#1F4FD8] ring-[#1F4FD8]/25",
  other: "bg-stone-100 text-stone-600 ring-stone-500/20",
};

export function StatusBadge({ status }: { status: LeadStatus }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ring-1 ring-inset ${LEAD[status]}`}>{status}</span>;
}
export function SourceBadge({ source }: { source: LeadSource }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ring-inset ${SOURCE[source]}`}>{source}</span>;
}
export function StopBadge({ status }: { status: TruckStopStatus }) {
  const c = status === "scheduled" ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20" : "bg-rose-50 text-rose-700 ring-rose-600/20";
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ring-1 ring-inset ${c}`}>{status}</span>;
}
