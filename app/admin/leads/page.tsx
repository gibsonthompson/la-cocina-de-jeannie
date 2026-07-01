import { createClient } from "@/lib/supabase/server";
import LeadsBoard from "../components/LeadsBoard";
import type { Lead } from "@/lib/types";

export const metadata = { title: "Leads | Admin" };

export default async function LeadsPage({ searchParams }: { searchParams: Promise<{ open?: string }> }) {
  const { open } = await searchParams;
  const supabase = await createClient();
  const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
  return <LeadsBoard initial={(data ?? []) as Lead[]} openId={open} />;
}
