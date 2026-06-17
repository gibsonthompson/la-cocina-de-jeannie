import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where We Are | La Cocina de Jeannie Food Truck",
  description: "Today's location and this week's schedule for the La Cocina de Jeannie food truck.",
};

// PLACEHOLDER schedule. Wire this to a Supabase `truck_schedule` table
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
    <section className="bg-white">
      <div className="shell py-14">
        {/* Live status */}
        <div className="flex flex-col items-start gap-3 rounded-2xl bg-flag-blue p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flag-yellow opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-flag-yellow" />
            </span>
            <p className="font-display text-xl font-bold">
              Open now — Placeholder lot, until 8:00p
            </p>
          </div>
          <span className="font-body text-sm text-white/80">Updated by Jeannie</span>
        </div>

        {/* Map + schedule */}
        <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="photo-ph aspect-[16/10] w-full border-2 border-flag-blue/20">
            <span className="!text-flag-blue/60">Google Map — today&rsquo;s pin</span>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-flag-blue">This week</h2>
            <ul className="mt-4 divide-y divide-ink/10">
              {schedule.map((s) => (
                <li key={s.day} className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-body text-sm font-bold text-ink">
                      {s.day} {s.live && <span className="ml-2 rounded bg-flag-red px-2 py-0.5 text-[10px] font-bold uppercase text-white">Live</span>}
                    </p>
                    <p className="font-body text-sm text-ink/70">{s.spot}</p>
                  </div>
                  <span className="font-body text-sm text-ink/60">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 font-body text-xs italic text-ink/50">
          Placeholder schedule — connect to live data so Jeannie can update from her phone.
        </p>
      </div>
    </section>
  );
}
