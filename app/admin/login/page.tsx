"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Login() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit() {
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    router.push(params.get("next") || "/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#16203B] px-6 font-body">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <p className="font-display text-3xl font-semibold text-cream">Jeannie <span className="italic text-gold">&amp; Co.</span></p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/50">Admin</p>
        </div>
        <div className="mt-8 rounded-2xl bg-white p-8 shadow-xl">
          <div className="space-y-4">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#2A2521]/60">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm outline-none focus:border-[#C6A24F] focus:ring-2 focus:ring-[#C6A24F]/20" placeholder="you@email.com" />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#2A2521]/60">Password</span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm outline-none focus:border-[#C6A24F] focus:ring-2 focus:ring-[#C6A24F]/20" placeholder="••••••••" />
            </label>
            {error && <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
            <button onClick={submit} disabled={loading}
              className="w-full rounded-lg bg-[#1E2B4D] py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-[#16203B] disabled:opacity-60">
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
