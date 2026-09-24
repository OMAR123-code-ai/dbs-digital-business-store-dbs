import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function DbsMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dbsGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d789" />
          <stop offset="45%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#8d6b12" />
        </linearGradient>
      </defs>
      <rect x="4" y="10" width="8" height="28" rx="1.2" fill="url(#dbsGold)" />
      <rect x="36" y="10" width="8" height="28" rx="1.2" fill="url(#dbsGold)" />
      <rect x="8" y="7" width="32" height="5" rx="1" fill="url(#dbsGold)" />
      <polygon points="8,7 24,2 40,7" fill="url(#dbsGold)" />
      <rect x="18" y="18" width="12" height="20" rx="1" fill="url(#dbsGold)" opacity="0.92" />
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
    <Link to={to} className="flex shrink-0 items-center gap-2 no-underline sm:gap-2.5">
      <DbsMark className={compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"} />
      <span className={cn("leading-tight", compact && "hidden sm:block")}>
        <span className="block font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-gold sm:text-[15px]">
          <span className="sm:hidden">DBS</span>
          <span className="hidden sm:inline">Digital Business Store</span>
        </span>
        <span
          className={cn(
            "mt-0.5 hidden max-w-[220px] text-[9px] font-medium uppercase tracking-[0.14em] sm:block",
            inverted ? "text-white/55" : "text-muted",
          )}
        >
          L'innovation au service de votre quotidien
        </span>
      </span>
    </Link>
  );
}
