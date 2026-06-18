import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where We Are | La Cocina de Jeannie Food Truck",
  description: "Today's location and this week's schedule for the La Cocina de Jeannie food truck.",
};

// PLACEHOLDER schedule. Wire to a Supabase `truck_schedule` table
// (date, location_name, lat, lng, start_time, end_time, status) that Jeannie
// updates from her phone. Drives the live status, map pin, and 7-day list.
const schedule = [
  { day: "Today", spot: "Placeholder — Downtown lot", time: "11:00a – 8:00p", live: true },
  { day: "Thu", spot: "Placeholder — Brewery", time: "5:00p – 9:00p" },
  { day: "Fri", spot: "Placeholder — Town square", time: "11:00a – 8:00p" },
  { day: "Sat", spot: "Placeholder — Farmers market", time: "9:00a – 2:00p" },
  { day: "Sun", spot: "Off", time: "—" },
];

export default function Where() {
  return (
    <section className="bg-cream">
      <div className="shell py-14">
        <div className="flex flex-col items-start gap-3 bg-truck-blue p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-truck-gold opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-truck-gold" />
            </span>
            <p className="font-display text-xl font-bold">Open now — Placeholder lot, until 8:00p</p>
          </div>
          <span className="font-body text-sm text-white/80">Updated by Jeannie</span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="media aspect-[16/10] w-full"><span className="cap">Google Map — today&rsquo;s pin</span></div>
          <div>
            <h2 className="font-display text-2xl font-bold text-truck-blue">This week</h2>
            <ul className="mt-4 divide-y divide-navy/10">
              {schedule.map((s) => (
                <li key={s.day} className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-body text-sm font-bold text-navy-deep">
                      {s.day} {s.live && <span className="ml-2 bg-truck-red px-2 py-0.5 text-[10px] font-bold uppercase text-white">Live</span>}
                    </p>
                    <p className="font-body text-sm text-navy-deep/70">{s.spot}</p>
                  </div>
                  <span className="font-body text-sm text-navy-deep/60">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 font-body text-xs italic text-navy-deep/50">
          Placeholder schedule. Connect to live data so Jeannie can update from her phone.
        </p>
      </div>
    </section>
  );
}