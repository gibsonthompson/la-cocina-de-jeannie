import { createClient } from "@/lib/supabase/server";
import MonthCalendar from "../components/MonthCalendar";
import type { Lead, TruckStop } from "@/lib/types";

export const metadata = { title: "Calendar | Admin" };

export default async function CalendarPage() {
  const supabase = await createClient();
  const [{ data: leads }, { data: stops }] = await Promise.all([
    supabase.from("leads").select("*").eq("status", "booked").not("event_date", "is", null),
    supabase.from("truck_schedule").select("*").eq("status", "scheduled"),
  ]);
  return <MonthCalendar events={(leads ?? []) as Lead[]} stops={(stops ?? []) as TruckStop[]} />;
}
