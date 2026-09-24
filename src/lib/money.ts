export function formatFcfa(value: number): string {
  const abs = Math.round(Math.abs(value));
  const formatted = abs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${value < 0 ? "-" : ""}${formatted} FCFA`;
}

export function discountPercent(price: number, compareAt?: number): number | null {
  if (!compareAt || compareAt <= price) return null;
  return Math.round((1 - price / compareAt) * 100);
}
