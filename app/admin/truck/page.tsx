import { createClient } from "@/lib/supabase/server";
import TruckEditor from "../components/TruckEditor";
import type { TruckStop } from "@/lib/types";

export const metadata = { title: "Food Truck | Admin" };

export default async function TruckAdmin() {
  const supabase = await createClient();
  const { data } = await supabase.from("truck_schedule").select("*").order("date", { ascending: true });
  return <TruckEditor initial={(data ?? []) as TruckStop[]} />;
}
