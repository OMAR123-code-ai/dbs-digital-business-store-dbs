import { Link, useNavigate } from "@tanstack/react-router";
import { ShoppingBag, Trash2, X } from "lucide-react";
import { formatFcfa } from "@/lib/money";
import { cartTotals, useShop } from "@/store/shop";
import { QtyControl } from "@/components/qty";

export function CartDrawer() {
  const navigate = useNavigate();
  const open = useShop((s) => s.cartOpen);
  const close = useShop((s) => s.closeCart);
  const items = useShop((s) => s.items);
  const setQty = useShop((s) => s.setQty);
  const remove = useShop((s) => s.remove);
  const promoInput = useShop((s) => s.promoInput);
  const appliedPromo = useShop((s) => s.appliedPromo);
  const setPromoInput = useShop((s) => s.setPromoInput);
  const applyPromo = useShop((s) => s.applyPromo);
  const totals = cartTotals(items, appliedPromo);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-ink/45 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-surface shadow-[var(--shadow-float)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="text-base font-semibold">Votre panier ({totals.count})</h2>
          <button type="button" onClick={close} aria-label="Fermer" className="grid h-9 w-9 place-items-center rounded-full hover:bg-paper">
            <X size={18} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <ShoppingBag className="text-subtle" size={36} />
              <p className="text-sm text-muted">Votre panier est vide.</p>
              <button
                type="button"
                onClick={() => {
                  close();
                  navigate({ to: "/boutique" });
                }}
                className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-gold-fg hover:bg-gold-hover"
              >
                Découvrir la boutique
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.key} className="flex gap-3 border-b border-line pb-4">
                  <Link to="/produit/$slug" params={{ slug: item.slug }} onClick={close} className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-paper">
                    <img src={item.image} alt="" className="h-full w-full object-cover" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to="/produit/$slug"
                        params={{ slug: item.slug }}
                        onClick={close}
                        className="text-sm font-medium text-ink no-underline hover:text-gold-deep"
                      >
                        {item.name}
                      </Link>
                      <button type="button" onClick={() => remove(item.key)} className="text-subtle hover:text-sale" aria-label="Retirer">
                        <Trash2 size={15} />
                      </button>
                    </div>
                    {item.color ? (
                      <p className="mt-0.5 text-[11px] capitalize text-muted">Couleur : {item.color.replace("-", " ")}</p>
                    ) : null}
                    <p className="mt-1 text-sm font-semibold tabular-nums">{formatFcfa(item.price)}</p>
                    <div className="mt-2">
                      <QtyControl size="sm" value={item.qty} onChange={(n) => setQty(item.key, n)} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <footer className="border-t border-line px-5 py-4">
            <div className="mb-3 flex gap-2">
              <input
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Code promo"
                className="h-10 flex-1 rounded-md border border-line bg-paper px-3 text-sm outline-none focus:border-gold"
              />
              <button
                type="button"
                onClick={() => applyPromo(promoInput)}
                className="h-10 rounded-md border border-ink bg-ink px-3 text-sm font-semibold text-white hover:bg-ink-soft"
              >
                Appliquer
              </button>
            </div>
            <dl className="space-y-1.5 text-sm">
              <div className="flex justify-between text-muted">
                <dt>Sous-total</dt>
                <dd className="tabular-nums text-ink">{formatFcfa(totals.subtotal)}</dd>
              </div>
              {totals.discount > 0 ? (
                <div className="flex justify-between text-success">
                  <dt>Remise {appliedPromo ? `(${appliedPromo})` : ""}</dt>
                  <dd className="tabular-nums">-{formatFcfa(totals.discount)}</dd>
                </div>
              ) : null}
              <div className="flex justify-between text-muted">
                <dt>Livraison</dt>
                <dd className="tabular-nums text-ink">
                  {totals.shipping === 0 ? "Offerte" : formatFcfa(totals.shipping)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-line pt-2 text-base font-bold">
                <dt>Total</dt>
                <dd className="tabular-nums">{formatFcfa(totals.total)}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={() => {
                close();
                navigate({ to: "/paiement" });
              }}
              className="mt-4 w-full rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg hover:bg-gold-hover"
            >
              Passer au paiement
            </button>
          </footer>
        ) : null}
      </aside>
    </>
  );
}
