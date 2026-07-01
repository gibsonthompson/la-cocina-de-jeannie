import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Sidebar from "./components/Sidebar";

export const metadata = { title: "Admin | Jeannie & Co." };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  // /admin/login renders its own tree; middleware handles the redirect there.
  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#F7F5EF] font-body text-[#2A2521]">
      <Sidebar email={user.email} />
      <main className="md:pl-64">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-10 md:py-10">{children}</div>
      </main>
    </div>
  );
}
