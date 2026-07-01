"use client";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarCheck, Truck } from "lucide-react";
import type { Lead, TruckStop } from "@/lib/types";

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function MonthCalendar({ events, stops }: { events: Lead[]; stops: TruckStop[] }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const byDay = useMemo(() => {
    const map: Record<string, { events: Lead[]; stops: TruckStop[] }> = {};
    const push = (d: string, k: "events" | "stops", v: Lead | TruckStop) => {
      (map[d] ??= { events: [], stops: [] })[k].push(v as never);
    };
    events.forEach((e) => e.event_date && push(e.event_date, "events", e));
    stops.forEach((s) => push(s.date, "stops", s));
    return map;
  }, [events, stops]);

  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(startPad).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const iso = (d: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const isToday = (d: number) => year === now.getFullYear() && month === now.getMonth() && d === now.getDate();

  function shift(delta: number) {
    let m = month + delta, y = year;
    if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; }
    setMonth(m); setYear(y);
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold text-[#1E2B4D]">Calendar</h1>
          <p className="mt-1 text-sm text-stone-500">Booked events and scheduled truck stops.</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => shift(-1)} className="rounded-lg border border-stone-200 bg-white p-2 hover:bg-stone-50"><ChevronLeft className="h-4 w-4" /></button>
          <span className="min-w-[9.5rem] text-center font-display text-lg font-semibold text-[#1E2B4D]">{MONTHS[month]} {year}</span>
          <button onClick={() => shift(1)} className="rounded-lg border border-stone-200 bg-white p-2 hover:bg-stone-50"><ChevronRight className="h-4 w-4" /></button>
          <button onClick={() => { setMonth(now.getMonth()); setYear(now.getFullYear()); }} className="ml-1 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium hover:bg-stone-50">Today</button>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 text-xs text-stone-500">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Booked event</span>
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
              <div key={i} className={`min-h-[92px] border-b border-r border-stone-100 p-1.5 ${i % 7 === 6 ? "border-r-0" : ""} ${!d ? "bg-stone-50/50" : ""}`}>
                {d && (
                  <>
                    <span className={`inline-grid h-6 w-6 place-items-center rounded-full text-xs font-medium ${isToday(d) ? "bg-[#1E2B4D] text-cream" : "text-stone-500"}`}>{d}</span>
                    <div className="mt-1 space-y-1">
                      {data?.events.map((e) => (
                        <div key={e.id} className="flex items-center gap-1 truncate rounded bg-emerald-50 px-1.5 py-0.5 text-[11px] font-medium text-emerald-700">
                          <CalendarCheck className="h-3 w-3 shrink-0" /><span className="truncate">{e.name}</span>
                        </div>
                      ))}
                      {data?.stops.map((s) => (
                        <div key={s.id} className="flex items-center gap-1 truncate rounded bg-[#1F4FD8]/10 px-1.5 py-0.5 text-[11px] font-medium text-[#1F4FD8]">
                          <Truck className="h-3 w-3 shrink-0" /><span className="truncate">{s.location_name}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
