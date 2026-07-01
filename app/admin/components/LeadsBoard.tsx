"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Mail, Phone, Trash2, Calendar, Users, Tag, Clock } from "lucide-react";
import { StatusBadge, SourceBadge } from "./StatusBadge";
import { updateLead, deleteLead } from "../actions";
import { fmtDate, fmtDateTime, relative } from "@/lib/format";
import type { Lead, LeadStatus, LeadSource } from "@/lib/types";

const STATUSES: LeadStatus[] = ["new", "contacted", "booked", "done", "lost"];
const SOURCES: (LeadSource | "all")[] = ["all", "wedding", "event", "truck", "other"];

export default function LeadsBoard({ initial, openId }: { initial: Lead[]; openId?: string }) {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>(initial);
  const [status, setStatus] = useState<LeadStatus | "all">("all");
  const [source, setSource] = useState<LeadSource | "all">("all");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(false);

  useEffect(() => setLeads(initial), [initial]);
  useEffect(() => {
    if (openId) {
      const l = initial.find((x) => x.id === openId);
      if (l) openDrawer(l);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId, initial]);

  function openDrawer(l: Lead) { setSelected(l); setNotes(l.notes || ""); setSavedAt(false); }
  function closeDrawer() { setSelected(null); }

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length };
    for (const s of STATUSES) c[s] = leads.filter((l) => l.status === s).length;
    return c;
  }, [leads]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return leads.filter((l) => {
      if (status !== "all" && l.status !== status) return false;
      if (source !== "all" && l.source !== source) return false;
      if (needle) {
        const hay = `${l.name} ${l.email ?? ""} ${l.phone ?? ""} ${l.event_type ?? ""} ${l.message ?? ""}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [leads, status, source, q]);

  async function setLeadStatus(l: Lead, s: LeadStatus) {
    setLeads((prev) => prev.map((x) => (x.id === l.id ? { ...x, status: s } : x)));
    setSelected((cur) => (cur && cur.id === l.id ? { ...cur, status: s } : cur));
    const res = await updateLead(l.id, { status: s });
    if (res?.error) { setLeads(initial); alert(res.error); }
    router.refresh();
  }
  async function saveNotes() {
    if (!selected) return;
    setSaving(true);
    const res = await updateLead(selected.id, { notes });
    setSaving(false);
    if (res?.error) { alert(res.error); return; }
    setLeads((prev) => prev.map((x) => (x.id === selected.id ? { ...x, notes } : x)));
    setSavedAt(true); setTimeout(() => setSavedAt(false), 2000);
  }
  async function remove(l: Lead) {
    if (!confirm(`Delete the inquiry from ${l.name}? This can't be undone.`)) return;
    setLeads((prev) => prev.filter((x) => x.id !== l.id));
    closeDrawer();
    const res = await deleteLead(l.id);
    if (res?.error) { setLeads(initial); alert(res.error); }
    router.refresh();
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold text-[#1E2B4D]">Leads</h1>
          <p className="mt-1 text-sm text-stone-500">{leads.length} total inquiries.</p>
        </div>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, email, message..."
            className="w-64 rounded-lg border border-stone-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-[#C6A24F] focus:ring-2 focus:ring-[#C6A24F]/20" />
        </div>
      </div>

      {/* status tabs */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {(["all", ...STATUSES] as const).map((s) => (
          <button key={s} onClick={() => setStatus(s)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium capitalize transition-colors ${status === s ? "bg-[#1E2B4D] text-cream" : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-stone-50"}`}>
            {s} <span className={status === s ? "text-cream/60" : "text-stone-400"}>{counts[s] ?? 0}</span>
          </button>
        ))}
        <span className="mx-1 h-5 w-px bg-stone-200" />
        <select value={source} onChange={(e) => setSource(e.target.value as LeadSource | "all")}
          className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm capitalize text-stone-600 outline-none">
          {SOURCES.map((s) => <option key={s} value={s}>{s === "all" ? "All sources" : s}</option>)}
        </select>
      </div>

      {/* table */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
        {filtered.length === 0 ? (
          <div className="px-5 py-20 text-center text-sm text-stone-500">No leads match these filters.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-stone-50 text-left text-xs uppercase tracking-wide text-stone-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="hidden px-5 py-3 font-semibold md:table-cell">Event</th>
                <th className="hidden px-5 py-3 font-semibold lg:table-cell">Date</th>
                <th className="px-5 py-3 font-semibold">Status</th>
                <th className="hidden px-5 py-3 text-right font-semibold sm:table-cell">Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.map((l) => (
                <tr key={l.id} onClick={() => openDrawer(l)} className="cursor-pointer hover:bg-stone-50">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#2A2521]">{l.name}</span>
                      <SourceBadge source={l.source} />
                    </div>
                    <span className="mt-0.5 block text-xs text-stone-400 md:hidden">{l.event_type}{l.event_date ? ` · ${fmtDate(l.event_date)}` : ""}</span>
                  </td>
                  <td className="hidden px-5 py-3.5 text-stone-600 md:table-cell">{l.event_type || "—"}{l.guest_count ? ` · ${l.guest_count} guests` : ""}</td>
                  <td className="hidden px-5 py-3.5 text-stone-600 lg:table-cell">{l.event_date ? fmtDate(l.event_date) : "—"}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={l.status} /></td>
                  <td className="hidden px-5 py-3.5 text-right text-xs text-stone-400 sm:table-cell">{relative(l.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* drawer */}
      {selected && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30" onClick={closeDrawer} />
          <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-stone-100 px-6 py-5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-2xl font-semibold text-[#1E2B4D]">{selected.name}</h2>
                  <SourceBadge source={selected.source} />
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-400"><Clock className="h-3.5 w-3.5" /> {fmtDateTime(selected.created_at)}</p>
              </div>
              <button onClick={closeDrawer} className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100"><X className="h-5 w-5" /></button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
              {/* status */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">Status</p>
                <div className="flex flex-wrap gap-1.5">
                  {STATUSES.map((s) => (
                    <button key={s} onClick={() => setLeadStatus(selected, s)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${selected.status === s ? "bg-[#1E2B4D] text-cream" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}>{s}</button>
                  ))}
                </div>
              </div>

              {/* contact */}
              <div className="grid grid-cols-1 gap-2">
                {selected.email && <a href={`mailto:${selected.email}`} className="flex items-center gap-3 rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm hover:border-[#C6A24F]"><Mail className="h-4 w-4 text-stone-400" /> {selected.email}</a>}
                {selected.phone && <a href={`tel:${selected.phone}`} className="flex items-center gap-3 rounded-lg border border-stone-200 px-3.5 py-2.5 text-sm hover:border-[#C6A24F]"><Phone className="h-4 w-4 text-stone-400" /> {selected.phone}</a>}
              </div>

              {/* details */}
              <div className="grid grid-cols-2 gap-3">
                <Detail icon={Tag} label="Event" value={selected.event_type || "—"} />
                <Detail icon={Calendar} label="Date" value={selected.event_date ? fmtDate(selected.event_date) : "—"} />
                <Detail icon={Users} label="Guests" value={selected.guest_count ? String(selected.guest_count) : "—"} />
              </div>

              {selected.message && (
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-stone-500">Message</p>
                  <p className="whitespace-pre-wrap rounded-lg bg-stone-50 p-3.5 text-sm text-stone-700">{selected.message}</p>
                </div>
              )}

              {/* notes */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Private notes</p>
                  {savedAt && <span className="text-xs text-emerald-600">Saved</span>}
                </div>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} placeholder="Follow-up details, quote sent, etc."
                  className="w-full rounded-lg border border-stone-200 p-3 text-sm outline-none focus:border-[#C6A24F] focus:ring-2 focus:ring-[#C6A24F]/20" />
                <button onClick={saveNotes} disabled={saving} className="mt-2 rounded-lg bg-[#1E2B4D] px-4 py-2 text-xs font-semibold text-cream hover:bg-[#16203B] disabled:opacity-60">{saving ? "Saving..." : "Save notes"}</button>
              </div>
            </div>

            <div className="border-t border-stone-100 px-6 py-4">
              <button onClick={() => remove(selected)} className="flex items-center gap-2 text-sm font-medium text-rose-600 hover:text-rose-700"><Trash2 className="h-4 w-4" /> Delete inquiry</button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}

function Detail({ icon: Icon, label, value }: { icon: typeof Tag; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-stone-200 p-3">
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-400"><Icon className="h-3.5 w-3.5" /> {label}</p>
      <p className="mt-1 text-sm font-medium text-[#2A2521]">{value}</p>
    </div>
  );
}
