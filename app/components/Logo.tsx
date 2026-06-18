import Link from "next/link";

/** Catering wordmark, used in nav and footer. The food truck uses its own
 *  "La Cocina de Jeannie" wordmark in app/truck/layout.tsx. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Jeannie and Co., home"
      className={`font-display text-[20px] leading-none tracking-tight ${className}`}
    >
      Jeannie <span className="italic text-gold">&amp; Co.</span>
    </Link>
  );
}