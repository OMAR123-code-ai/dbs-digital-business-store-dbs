import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { formatFcfa } from "@/lib/money";
import { useShop } from "@/store/shop";

type Search = { id?: string };

export const Route = createFileRoute("/suivi")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    id: typeof s.id === "string" ? s.id : "",
  }),
  component: TrackingPage,
});

function TrackingPage() {
  const { id: qid = "" } = Route.useSearch();
  const orders = useShop((s) => s.orders);
  const [query, setQuery] = useState(qid);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(Boolean(qid));

  const order = useMemo(() => {
    if (!submitted) return undefined;
    const needle = query.replace("#", "").trim().toUpperCase();
    return orders.find((o) => o.id.toUpperCase() === needle || `#${o.id}` === query.trim().toUpperCase());
  }, [orders, query, submitted]);

  const steps = ["Payée", "Préparation", "Expédiée", "Livrée"] as const;
  const current =
    order?.status === "delivered" ? 3 : order?.status === "shipped" ? 2 : order?.status === "preparing" ? 1 : 0;

  return (
    <div className="mx-auto max-w-lg px-4 py-12">
      <h1 className="text-2xl font-bold">Suivi de commande</h1>
      <form
        className="mt-6 space-y-3 rounded-xl border border-line bg-surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="N° commande (ex. DBS10324)"
          className="h-10 w-full rounded-md border border-line px-3 text-sm"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Téléphone (optionnel)"
          className="h-10 w-full rounded-md border border-line px-3 text-sm"
        />
        <button type="submit" className="w-full rounded-full bg-gold py-2.5 text-sm font-semibold text-gold-fg">
          Suivre
        </button>
      </form>
      {submitted && !order ? (
        <p className="mt-4 text-sm text-muted">
          Aucune commande trouvée. Vérifiez le numéro ou passez commande depuis votre panier.
        </p>
      ) : null}
      {order ? (
        <div className="mt-6 rounded-xl border border-line bg-surface p-5">
          <p className="text-sm font-semibold">#{order.id}</p>
          <p className="text-xs text-muted">{new Date(order.createdAt).toLocaleString("fr-FR")}</p>
          <p className="mt-2 text-lg font-bold tabular-nums">{formatFcfa(order.total)}</p>
          <ol className="mt-5 grid grid-cols-4 gap-2 text-center text-[11px]">
            {steps.map((s, i) => (
              <li key={s} className={i <= current ? "font-semibold text-gold-deep" : "text-subtle"}>
                <span className={`mx-auto mb-1 block h-2 w-2 rounded-full ${i <= current ? "bg-gold" : "bg-line"}`} />
                {s}
              </li>
            ))}
          </ol>
          <ul className="mt-4 space-y-1 text-sm">
            {order.items.map((i) => (
              <li key={i.key} className="flex justify-between">
                <span>
                  {i.name} × {i.qty}
                </span>
                <span className="tabular-nums">{formatFcfa(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
