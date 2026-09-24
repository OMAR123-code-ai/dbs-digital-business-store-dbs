import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  value,
  size = 13,
  className,
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${value} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = value >= i + 0.5;
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "text-star" : "text-line-strong"}
            fill={filled ? "currentColor" : "none"}
            strokeWidth={1.6}
          />
        );
      })}
    </span>
  );
}
