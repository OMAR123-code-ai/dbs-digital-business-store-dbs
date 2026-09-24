import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { formatFcfa } from "@/lib/money";
import { useShop } from "@/store/shop";

type Search = { id?: string };

export const Route = createFileRoute("/confirmation")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    id: typeof s.id === "string" ? s.id : undefined,
  }),
  component: ConfirmationPage,
});

function ConfirmationPage() {
  const { id } = Route.useSearch();
  const orders = useShop((s) => s.orders);
  const lastOrderId = useShop((s) => s.lastOrderId);
  const order = orders.find((o) => o.id === (id ?? lastOrderId));

  if (!order) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-xl font-bold">Commande introuvable</h1>
        <Link to="/suivi" className="mt-4 inline-block text-sm font-semibold text-gold-deep">
          Suivre une commande
        </Link>
      </div>
    );
  }

  const methodLabel = order.method === "orange" ? "Orange Money" : order.method === "moov" ? "Moov Money" : "Wave";

  return (
    <div className="mx-auto max-w-lg px-4 py-12">
      <div className="rounded-2xl border border-line bg-surface p-8 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="mx-auto text-success" size={48} />
        <h1 className="mt-4 text-2xl font-bold">Paiement confirmé</h1>
        <p className="mt-2 text-sm text-muted">
          Merci {order.account.name || ""}. Votre commande <span className="font-semibold text-ink">#{order.id}</span> a
          été payée via {methodLabel}.
        </p>
        <p className="mt-4 text-lg font-bold tabular-nums">{formatFcfa(order.total)}</p>
        <ul className="mt-6 space-y-2 text-left text-sm">
          {order.items.map((i) => (
            <li key={i.key} className="flex justify-between border-b border-line py-2">
              <span>
                {i.name} × {i.qty}
              </span>
              <span className="tabular-nums">{formatFcfa(i.price * i.qty)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">
          Un reçu a été enregistré sur cet appareil. Conservez le numéro #{order.id} pour le suivi.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Link
            to="/suivi"
            search={{ id: order.id }}
            className="rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg no-underline hover:bg-gold-hover"
          >
            Suivre ma commande
          </Link>
          <Link to="/boutique" className="rounded-full border border-line py-3 text-sm font-semibold text-ink no-underline">
            Continuer vos achats
          </Link>
        </div>
      </div>
    </div>
  );
}
