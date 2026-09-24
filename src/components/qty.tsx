import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QtyControl({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
}) {
  const btn = size === "sm" ? "h-7 w-7" : "h-9 w-9";
  return (
    <div className="inline-flex items-center rounded-full border border-line-strong bg-surface">
      <button
        type="button"
        aria-label="Diminuer"
        className={cn(btn, "grid place-items-center text-ink")}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus size={14} />
      </button>
      <span className="min-w-7 text-center text-sm font-semibold tabular-nums">{value}</span>
      <button
        type="button"
        aria-label="Augmenter"
        className={cn(btn, "grid place-items-center text-ink")}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
