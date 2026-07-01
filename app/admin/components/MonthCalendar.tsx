"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CalendarCheck, Truck, Plus, X, Star } from "lucide-react";
import { saveCalendarEvent, deleteCalendarEvent, type CalendarEventInput } from "../actions";
import type { Lead, TruckStop, CalendarEvent } from "@/lib/types";

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const blank = (date: string): CalendarEventInput => ({ title: "", date, event_type: "", guest_count: null, location: "", notes: "" });

export default function MonthCalendar({ booked, stops, events }: { booked: Lead[]; stops: TruckStop[]; events: CalendarEvent[] }) {
  const router = useRouter();
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [editing, setEditing] = useState<CalendarEventInput | null>(null);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const byDay = useMemo(() => {
    const map: Record<string, { booked: Lead[]; stops: TruckStop[]; events: CalendarEvent[] }> = {};
    const slot = (d: string) => (map[d] ??= { booked: [], stops: [], events: [] });
    booked.forEach((e) => e.event_date && slot(e.event_date).booked.push(e));
    stops.forEach((s) => slot(s.date).stops.push(s));
    events.forEach((e) => slot(e.date).events.push(e));
    return map;
  }, [booked, stops, events]);

  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(startPad).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  const iso = (d: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const isToday = (d: number) => year === now.getFullYear() && month === now.getMonth() && d === now.getDate();
  function shift(delta: number) { let m = month + delta, y = year; if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; } setMonth(m); setYear(y); }

  function openNew(date: string) { setErr(null); setEditing(blank(date)); }
  function openEdit(e: CalendarEvent) { setErr(null); setEditing({ id: e.id, title: e.title, date: e.date, event_type: e.event_type || "", guest_count: e.guest_count, location: e.location || "", notes: e.notes || "" }); }
  async function save() {
    if (!editing) return;
    setSaving(true); setErr(null);
    const res = await saveCalendarEvent(editing);
    setSaving(false);
    if (res?.error) { setErr(res.error); return; }
    setEditing(null); router.refresh();
  }
  async function remove() {
    if (!editing?.id) return;
    if (!confirm(`Delete "${editing.title}"?`)) return;
    const res = await deleteCalendarEvent(editing.id);
    if (res?.error) { setErr(res.error); return; }
    setEditing(null); router.refresh();
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold text-[#1E2B4D]">Calendar</h1>
          <p className="mt-1 text-sm text-stone-500">Events, booked inquiries, and truck stops. Click any day to add an event.</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => openNew(iso(now.getDate() && month === now.getMonth() && year === now.getFullYear() ? now.getDate() : 1))}
            className="mr-1 flex items-center gap-2 rounded-lg bg-[#1E2B4D] px-4 py-2 text-sm font-semibold text-cream hover:bg-[#16203B]"><Plus className="h-4 w-4" /> Add event</button>
          <button onClick={() => shift(-1)} className="rounded-lg border border-stone-200 bg-white p-2 hover:bg-stone-50"><ChevronLeft className="h-4 w-4" /></button>
          <span className="min-w-[9.5rem] text-center font-display text-lg font-semibold text-[#1E2B4D]">{MONTHS[month]} {year}</span>
          <button onClick={() => shift(1)} className="rounded-lg border border-stone-200 bg-white p-2 hover:bg-stone-50"><ChevronRight className="h-4 w-4" /></button>
          <button onClick={() => { setMonth(now.getMonth()); setYear(now.getFullYear()); }} className="ml-1 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium hover:bg-stone-50">Today</button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-stone-500">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#C6A24F]" /> Event</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Booked inquiry</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#1F4FD8]" /> Truck stop</span>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
        <div className="grid grid-cols-7 border-b border-stone-100 bg-stone-50 text-center text-xs font-semibold uppercase tracking-wide text-stone-500">
          {DOW.map((d) => <div key={d} className="py-2.5">{d}</div>)}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((d, i) => {
            const data = d ? byDay[iso(d)] : undefined;
            return (
              <div key={i} onClick={() => d && openNew(iso(d))}
                className={`group relative min-h-[104px] border-b border-r border-stone-100 p-1.5 ${i % 7 === 6 ? "border-r-0" : ""} ${!d ? "bg-stone-50/50" : "cursor-pointer hover:bg-stone-50/70"}`}>
                {d && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className={`inline-grid h-6 w-6 place-items-center rounded-full text-xs font-medium ${isToday(d) ? "bg-[#1E2B4D] text-cream" : "text-stone-500"}`}>{d}</span>
                      <Plus className="h-3.5 w-3.5 text-stone-300 opacity-0 group-hover:opacity-100" />
                    </div>
                    <div className="mt-1 space-y-1">
                      {data?.events.map((e) => (
                        <button key={e.id} onClick={(ev) => { ev.stopPropagation(); openEdit(e); }}
                          className="flex w-full items-center gap-1 truncate rounded bg-[#C6A24F]/15 px-1.5 py-0.5 text-left text-[11px] font-medium text-[#8a6d1f] hover:bg-[#C6A24F]/25">
                          <Star className="h-3 w-3 shrink-0" /><span className="truncate">{e.title}</span>
                        </button>
                      ))}
                      {data?.booked.map((e) => (
                        <Link key={e.id} href={`/admin/leads?open=${e.id}`} onClick={(ev) => ev.stopPropagation()}
                          className="flex items-center gap-1 truncate rounded bg-emerald-50 px-1.5 py-0.5 text-[11px] font-medium text-emerald-700 hover:bg-emerald-100">
                          <CalendarCheck className="h-3 w-3 shrink-0" /><span className="truncate">{e.name}</span>
                        </Link>
                      ))}
                      {data?.stops.map((s) => (
                        <Link key={s.id} href="/admin/truck" onClick={(ev) => ev.stopPropagation()}
                          className="flex items-center gap-1 truncate rounded bg-[#1F4FD8]/10 px-1.5 py-0.5 text-[11px] font-medium text-[#1F4FD8] hover:bg-[#1F4FD8]/20">
                          <Truck className="h-3 w-3 shrink-0" /><span className="truncate">{s.location_name}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {editing && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setEditing(null)} />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">
              <h2 className="font-display text-xl font-semibold text-[#1E2B4D]">{editing.id ? "Edit event" : "New event"}</h2>
              <button onClick={() => setEditing(null)} className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4 px-6 py-5">
              <Field label="Title" required>
                <input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} placeholder="e.g. Bennett Wedding" className={inp} autoFocus />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Date" required><input type="date" value={editing.date} onChange={(e) => setEditing({ ...editing, date: e.target.value })} className={inp} /></Field>
                <Field label="Guests"><input type="number" min={0} value={editing.guest_count ?? ""} onChange={(e) => setEditing({ ...editing, guest_count: e.target.value === "" ? null : Number(e.target.value) })} className={inp} placeholder="Optional" /></Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Type"><input value={editing.event_type ?? ""} onChange={(e) => setEditing({ ...editing, event_type: e.target.value })} placeholder="Wedding, corporate..." className={inp} /></Field>
                <Field label="Location"><input value={editing.location ?? ""} onChange={(e) => setEditing({ ...editing, location: e.target.value })} placeholder="Venue or address" className={inp} /></Field>
              </div>
              <Field label="Notes"><textarea rows={2} value={editing.notes ?? ""} onChange={(e) => setEditing({ ...editing, notes: e.target.value })} className={inp} /></Field>
              {err && <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{err}</p>}
            </div>
            <div className="flex items-center justify-between border-t border-stone-100 px-6 py-4">
              {editing.id ? <button onClick={remove} className="text-sm font-medium text-rose-600 hover:text-rose-700">Delete</button> : <span />}
              <div className="flex gap-3">
                <button onClick={() => setEditing(null)} className="rounded-lg px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-100">Cancel</button>
                <button onClick={save} disabled={saving} className="rounded-lg bg-[#1E2B4D] px-5 py-2 text-sm font-semibold text-cream hover:bg-[#16203B] disabled:opacity-60">{saving ? "Saving..." : "Save event"}</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const inp = "w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm outline-none focus:border-[#C6A24F] focus:ring-2 focus:ring-[#C6A24F]/20";
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">{label}{required && <span className="text-rose-500"> *</span>}</span>
      {children}
    </label>
  );
}