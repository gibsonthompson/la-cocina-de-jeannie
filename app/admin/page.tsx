import Link from "next/link";
import { Inbox, CalendarCheck, Truck, Sparkles } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import StatCard from "./components/StatCard";
import { StatusBadge, SourceBadge } from "./components/StatusBadge";
import { fmtDate, fmtDateShort, relative, todayISO } from "@/lib/format";
import type { Lead, TruckStop } from "@/lib/types";

export default async function Dashboard() {
  const supabase = await createClient();
  const today = todayISO();

  const [{ data: recent }, { count: newCount }, { data: upcoming }, { data: stops }] = await Promise.all([
    supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(6),
    supabase.from("leads").select("id", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("leads").select("*").eq("status", "booked").gte("event_date", today).order("event_date").limit(5),
    supabase.from("truck_schedule").select("*").eq("status", "scheduled").gte("date", today).order("date").limit(5),
  ]);

  const leads = (recent ?? []) as Lead[];
  const events = (upcoming ?? []) as Lead[];
  const truck = (stops ?? []) as TruckStop[];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold text-[#1E2B4D]">Dashboard</h1>
          <p className="mt-1 text-sm text-stone-500">Here's what's happening across the business.</p>
        </div>
        <Link href="/admin/leads" className="rounded-lg bg-[#1E2B4D] px-4 py-2.5 text-sm font-semibold text-cream hover:bg-[#16203B]">View all leads</Link>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="New leads" value={newCount ?? 0} sub="awaiting a reply" icon={Inbox} href="/admin/leads" accent="#2563eb" />
        <StatCard label="Upcoming events" value={events.length} sub="booked and on the calendar" icon={CalendarCheck} href="/admin/calendar" accent="#059669" />
        <StatCard label="Truck stops" value={truck.length} sub="scheduled ahead" icon={Truck} href="/admin/truck" accent="#1F4FD8" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <section className="lg:col-span-2 rounded-2xl border border-stone-200/80 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
            <h2 className="font-display text-lg font-semibold text-[#1E2B4D]">Recent inquiries</h2>
            <Link href="/admin/leads" className="text-sm font-medium text-[#C6A24F] hover:underline">See all</Link>
          </div>
          {leads.length === 0 ? (
            <div className="flex flex-col items-center gap-2 px-5 py-14 text-center">
              <Sparkles className="h-8 w-8 text-stone-300" />
              <p className="text-sm text-stone-500">No inquiries yet. They'll show up here the moment a form comes in.</p>
            </div>
          ) : (
            <ul className="divide-y divide-stone-100">
              {leads.map((l) => (
                <li key={l.id}>
                  <Link href={`/admin/leads?open=${l.id}`} className="flex items-center gap-4 px-5 py-3.5 hover:bg-stone-50">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-medium text-[#2A2521]">{l.name}</p>
                        <SourceBadge source={l.source} />
                      </div>
                      <p className="mt-0.5 truncate text-sm text-stone-500">
                        {l.event_type || "Inquiry"}{l.event_date ? ` · ${fmtDate(l.event_date)}` : ""}{l.guest_count ? ` · ${l.guest_count} guests` : ""}
                      </p>
                    </div>
                    <StatusBadge status={l.status} />
                    <span className="hidden w-16 text-right text-xs text-stone-400 sm:block">{relative(l.created_at)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="space-y-6">
          <section className="rounded-2xl border border-stone-200/80 bg-white shadow-sm">
            <div className="border-b border-stone-100 px-5 py-4"><h2 className="font-display text-lg font-semibold text-[#1E2B4D]">Next events</h2></div>
            {events.length === 0 ? (
              <p className="px-5 py-8 text-center text-sm text-stone-500">Nothing booked yet.</p>
            ) : (
              <ul className="divide-y divide-stone-100">
                {events.map((e) => (
                  <li key={e.id} className="flex items-center gap-3 px-5 py-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-50 text-center text-emerald-700">
                      <span className="text-[10px] font-bold uppercase leading-none">{fmtDateShort(e.event_date).split(" ")[0]}</span>
                      <span className="text-sm font-bold leading-none">{fmtDateShort(e.event_date).split(" ")[1]}</span>
                    </div>
                    <div className="min-w-0"><p className="truncate text-sm font-medium">{e.name}</p><p className="truncate text-xs text-stone-500">{e.event_type || "Event"}</p></div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rounded-2xl border border-stone-200/80 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-[#1E2B4D]">Truck this week</h2>
              <Link href="/admin/truck" className="text-sm font-medium text-[#C6A24F] hover:underline">Edit</Link>
            </div>
            {truck.length === 0 ? (
              <p className="px-5 py-8 text-center text-sm text-stone-500">No stops scheduled.</p>
            ) : (
              <ul className="divide-y divide-stone-100">
                {truck.map((s) => (
                  <li key={s.id} className="px-5 py-3">
                    <p className="text-sm font-medium">{s.location_name}</p>
                    <p className="text-xs text-stone-500">{fmtDate(s.date)}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
