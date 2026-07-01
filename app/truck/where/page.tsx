import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { fmtDate, fmtTime, todayISO } from "@/lib/format";
import type { TruckStop } from "@/lib/types";

export const metadata: Metadata = {
  title: "Where We Are | La Cocina de Jeannie",
  description: "Find the La Cocina de Jeannie food truck around North Georgia this week.",
};
export const revalidate = 300;

export default async function Where() {
  const supabase = await createClient();
  const { data } = await supabase.from("truck_schedule").select("*").eq("status", "scheduled").gte("date", todayISO()).order("date");
  const stops = (data ?? []) as TruckStop[];

  return (
    <section className="bg-cream">
      <div className="shell py-16 md:py-24">
        <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-truck-red">Where we are</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-truck-blue sm:text-6xl">Catch the truck.</h1>

        {stops.length === 0 ? (
          <div className="mt-12 rounded-2xl border-2 border-dashed border-truck-blue/20 bg-white px-6 py-16 text-center">
            <p className="font-display text-2xl font-bold text-truck-blue">No stops on the calendar right now.</p>
            <p className="mt-2 font-body text-navy-deep/70">Check back soon, or book the truck for your own event.</p>
            <Link href="/truck/book" className="btn-flag mt-6 inline-flex">Book the truck</Link>
          </div>
        ) : (
          <div className="mt-12 space-y-4">
            {stops.map((s) => (
              <div key={s.id} className="flex flex-col gap-4 rounded-2xl border-2 border-truck-blue/15 bg-white p-6 sm:flex-row sm:items-center">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-truck-red text-center text-white">
                  <span className="text-xs font-bold uppercase leading-none">{fmtDate(s.date).split(" ")[0]}</span>
                  <span className="font-display text-2xl font-extrabold leading-none">{fmtDate(s.date).split(" ")[1].replace(",", "")}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-extrabold text-truck-blue">{s.location_name}</h3>
                  <p className="mt-1 font-body text-sm text-navy-deep/70">
                    {(s.start_time || s.end_time) && <span>{fmtTime(s.start_time)}{s.end_time ? ` – ${fmtTime(s.end_time)}` : ""}</span>}
                    {s.address && <span>{s.start_time ? " · " : ""}{s.address}</span>}
                  </p>
                  {s.notes && <p className="mt-1 font-body text-sm text-navy-deep/60">{s.notes}</p>}
                </div>
                {s.address && (
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(s.address)}`} target="_blank" className="btn-flag !bg-truck-gold !text-truck-blue self-start sm:self-auto">Directions</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
