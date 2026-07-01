"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { LeadStatus, TruckStopStatus } from "@/lib/types";

export async function updateLead(id: string, patch: { status?: LeadStatus; notes?: string }) {
  const supabase = await createClient();
  const { error } = await supabase.from("leads").update(patch).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/leads");
  revalidatePath("/admin");
  revalidatePath("/admin/calendar");
  return { ok: true };
}

export async function deleteLead(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("leads").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/leads");
  return { ok: true };
}

export interface TruckStopInput {
  id?: string;
  date: string;
  start_time: string | null;
  end_time: string | null;
  location_name: string;
  address: string | null;
  notes: string | null;
  status: TruckStopStatus;
}

export async function saveTruckStop(input: TruckStopInput) {
  const supabase = await createClient();
  if (!input.date || !input.location_name?.trim()) {
    return { error: "Date and location are required." };
  }
  const row = {
    date: input.date,
    start_time: input.start_time || null,
    end_time: input.end_time || null,
    location_name: input.location_name.trim(),
    address: input.address?.trim() || null,
    notes: input.notes?.trim() || null,
    status: input.status,
  };
  const q = input.id
    ? supabase.from("truck_schedule").update(row).eq("id", input.id)
    : supabase.from("truck_schedule").insert(row);
  const { error } = await q;
  if (error) return { error: error.message };
  revalidatePath("/admin/truck");
  revalidatePath("/admin");
  revalidatePath("/admin/calendar");
  return { ok: true };
}

export async function deleteTruckStop(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("truck_schedule").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/truck");
  return { ok: true };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export interface CalendarEventInput {
  id?: string;
  title: string;
  date: string;
  event_type: string | null;
  guest_count: number | null;
  location: string | null;
  notes: string | null;
}

export async function saveCalendarEvent(input: CalendarEventInput) {
  const supabase = await createClient();
  if (!input.title?.trim() || !input.date) return { error: "Title and date are required." };
  const row = {
    title: input.title.trim(),
    date: input.date,
    event_type: input.event_type?.trim() || null,
    guest_count: input.guest_count ?? null,
    location: input.location?.trim() || null,
    notes: input.notes?.trim() || null,
  };
  const q = input.id
    ? supabase.from("calendar_events").update(row).eq("id", input.id)
    : supabase.from("calendar_events").insert(row);
  const { error } = await q;
  if (error) return { error: error.message };
  revalidatePath("/admin/calendar");
  revalidatePath("/admin");
  return { ok: true };
}

export async function deleteCalendarEvent(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("calendar_events").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/calendar");
  return { ok: true };
}