export type LeadSource = "wedding" | "event" | "truck" | "other";
export type LeadStatus = "new" | "contacted" | "booked" | "done" | "lost";
export type TruckStopStatus = "scheduled" | "canceled";

export interface Lead {
  id: string;
  created_at: string;
  updated_at: string;
  source: LeadSource;
  name: string;
  email: string | null;
  phone: string | null;
  event_date: string | null;
  guest_count: number | null;
  event_type: string | null;
  message: string | null;
  status: LeadStatus;
  notes: string | null;
}

export interface TruckStop {
  id: string;
  created_at: string;
  date: string;
  start_time: string | null;
  end_time: string | null;
  location_name: string;
  address: string | null;
  lat: number | null;
  lng: number | null;
  notes: string | null;
  status: TruckStopStatus;
}
