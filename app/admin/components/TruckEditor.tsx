"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, MapPin, Clock, Pencil, Trash2, X } from "lucide-react";
import { StopBadge } from "./StatusBadge";
import { saveTruckStop, deleteTruckStop, type TruckStopInput } from "../actions";
import { fmtDate, fmtTime, todayISO } from "@/lib/format";
import type { TruckStop } from "@/lib/types";

const blank = (): TruckStopInput => ({ date: todayISO(), start_time: "", end_time: "", location_name: "", address: "", notes: "", status: "scheduled" });

export default function TruckEditor({ initial }: { initial: TruckStop[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<TruckStopInput | null>(null);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const today = todayISO();
  const upcoming = initial.filter((s) => s.date >= today);
  const past = initial.filter((s) => s.date < today).reverse();

  function openNew() { setErr(null); setEditing(blank()); }
  function openEdit(s: TruckStop) {
    setErr(null);
    setEditing({ id: s.id, date: s.date, start_time: s.start_time || "", end_time: s.end_time || "", location_name: s.location_name, address: s.address || "", notes: s.notes || "", status: s.status });
  }
  async function save() {
    if (!editing) return;
    setSaving(true); setErr(null);
    const res = await saveTruckStop(editing);
    setSaving(false);
    if (res?.error) { setErr(res.error); return; }
    setEditing(null); router.refresh();
  }
  async function remove(s: TruckStop) {
    if (!confirm(`Delete the stop at ${s.location_name}?`)) return;
    const res = await deleteTruckStop(s.id);
    if (res?.error) { alert(res.error); return; }
    router.refresh();
  }

  const Row = (s: TruckStop) => (
    <li key={s.id} className="flex items-center gap-4 px-5 py-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#1F4FD8]/10 text-center text-[#1F4FD8]">
        <span className="text-[10px] font-bold uppercase leading-none">{fmtDate(s.date).split(" ")[0]}</span>
        <span className="text-base font-bold leading-none">{fmtDate(s.date).split(" ")[1].replace(",", "")}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2"><p className="truncate font-medium text-[#2A2521]">{s.location_name}</p><StopBadge status={s.status} /></div>
        <p className="mt-0.5 flex flex-wrap items-center gap-x-3 text-xs text-stone-500">
          {(s.start_time || s.end_time) && <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{fmtTime(s.start_time)}{s.end_time ? ` – ${fmtTime(s.end_time)}` : ""}</span>}
          {s.address && <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{s.address}</span>}
        </p>
      </div>
      <button onClick={() => openEdit(s)} className="rounded-lg p-2 text-stone-400 hover:bg-stone-100 hover:text-[#1E2B4D]"><Pencil className="h-4 w-4" /></button>
      <button onClick={() => remove(s)} className="rounded-lg p-2 text-stone-400 hover:bg-rose-50 hover:text-rose-600"><Trash2 className="h-4 w-4" /></button>
    </li>
  );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold text-[#1E2B4D]">Food Truck Schedule</h1>
          <p className="mt-1 text-sm text-stone-500">Add where the truck will be. Scheduled stops show on the public site.</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 rounded-lg bg-[#1F4FD8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1a44bd]"><Plus className="h-4 w-4" /> Add stop</button>
      </div>

      <section className="mt-7 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
        <div className="border-b border-stone-100 px-5 py-3.5"><h2 className="font-display text-lg font-semibold text-[#1E2B4D]">Upcoming</h2></div>
        {upcoming.length === 0 ? (
          <div className="px-5 py-14 text-center text-sm text-stone-500">No upcoming stops. Add one so people know where to find the truck.</div>
        ) : <ul className="divide-y divide-stone-100">{upcoming.map(Row)}</ul>}
      </section>

      {past.length > 0 && (
        <section className="mt-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
          <div className="border-b border-stone-100 px-5 py-3.5"><h2 className="font-display text-lg font-semibold text-stone-500">Past</h2></div>
          <ul className="divide-y divide-stone-100 opacity-70">{past.slice(0, 10).map(Row)}</ul>
        </section>
      )}

      {editing && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setEditing(null)} />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">
              <h2 className="font-display text-xl font-semibold text-[#1E2B4D]">{editing.id ? "Edit stop" : "New stop"}</h2>
              <button onClick={() => setEditing(null)} className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4 px-6 py-5">
              <Field label="Location name" required>
                <input value={editing.location_name} onChange={(e) => setEditing({ ...editing, location_name: e.target.value })} placeholder="e.g. Cumming Farmers Market" className={inp} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Date" required><input type="date" value={editing.date} onChange={(e) => setEditing({ ...editing, date: e.target.value })} className={inp} /></Field>
                <Field label="Status">
                  <select value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value as "scheduled" | "canceled" })} className={inp}>
                    <option value="scheduled">Scheduled</option><option value="canceled">Canceled</option>
                  </select>
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Start time"><input type="time" value={editing.start_time ?? ""} onChange={(e) => setEditing({ ...editing, start_time: e.target.value })} className={inp} /></Field>
                <Field label="End time"><input type="time" value={editing.end_time ?? ""} onChange={(e) => setEditing({ ...editing, end_time: e.target.value })} className={inp} /></Field>
              </div>
              <Field label="Address"><input value={editing.address ?? ""} onChange={(e) => setEditing({ ...editing, address: e.target.value })} placeholder="Street, city" className={inp} /></Field>
              <Field label="Notes"><textarea rows={2} value={editing.notes ?? ""} onChange={(e) => setEditing({ ...editing, notes: e.target.value })} placeholder="Anything guests should know" className={inp} /></Field>
              {err && <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{err}</p>}
            </div>
            <div className="flex justify-end gap-3 border-t border-stone-100 px-6 py-4">
              <button onClick={() => setEditing(null)} className="rounded-lg px-4 py-2 text-sm font-medium text-stone-600 hover:bg-stone-100">Cancel</button>
              <button onClick={save} disabled={saving} className="rounded-lg bg-[#1F4FD8] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1a44bd] disabled:opacity-60">{saving ? "Saving..." : "Save stop"}</button>
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
