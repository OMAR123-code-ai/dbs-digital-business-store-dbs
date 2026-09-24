import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Real DBS logo image (upload public/images/logo-dbs.png) */
export function DbsMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-dbs.png"
      alt=""
      className={cn("shrink-0 object-contain", className)}
      width={44}
      height={44}
      onError={(e) => {
        // Fallback SVG if image not yet uploaded
        const el = e.currentTarget;
        el.style.display = "none";
        const sib = el.nextElementSibling as HTMLElement | null;
        if (sib) sib.style.display = "block";
      }}
    />
  );
}

function DbsMarkFallback({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("hidden shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dbsGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d789" />
          <stop offset="45%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#8d6b12" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="none" stroke="url(#dbsGold)" strokeWidth="2" />
      <rect x="14" y="14" width="6" height="18" rx="1" fill="url(#dbsGold)" />
      <rect x="22" y="10" width="5" height="22" rx="1" fill="url(#dbsGold)" />
      <rect x="29" y="16" width="5" height="16" rx="1" fill="url(#dbsGold)" />
    </svg>
  );
}

export function DbsLogo({
  compact = false,
  to = "/",
  inverted = false,
}: {
  compact?: boolean;
  to?: string;
  inverted?: boolean;
}) {
  return (
    <Link to={to} className="flex shrink-0 items-center gap-2.5 no-underline">
      <span className="relative flex items-center">
        <DbsMark className={compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"} />
        <DbsMarkFallback className={compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"} />
      </span>
      {!compact && (
        <span className="hidden leading-tight sm:block">
          <span className="block font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-gold sm:text-[14px]">
            Digital Business Store
          </span>
          <span
            className={cn(
              "mt-0.5 block max-w-[200px] text-[9px] font-medium uppercase tracking-[0.12em]",
              inverted ? "text-white/50" : "text-muted",
            )}
          >
            L&apos;innovation au service de votre quotidien
          </span>
        </span>
      )}
    </Link>
  );
}
