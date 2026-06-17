import Link from "next/link";

/**
 * PLACEHOLDER LOGO.
 * Swap this whole component for the real catering logo when it's ready.
 * Uses currentColor so it adapts to light/dark sections.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="La Cocina de Jeannie — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
        {/* simplified coqui placeholder mark */}
        <path
          d="M24 14c-4 0-6.5 2.6-6.5 6 0 2 1 3.6 2.4 4.7-1.7.5-3 1.7-3 3.4 0 1.2.9 2.1 2.2 2.1 1.2 0 2-.7 2.4-1.8.7.3 1.6.5 2.5.5s1.8-.2 2.5-.5c.4 1.1 1.2 1.8 2.4 1.8 1.3 0 2.2-.9 2.2-2.1 0-1.7-1.3-2.9-3-3.4 1.4-1.1 2.4-2.7 2.4-4.7 0-3.4-2.5-6-6.5-6Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-display text-lg leading-none tracking-tight">
        La&nbsp;Cocina <span className="es">de Jeannie</span>
      </span>
    </Link>
  );
}
