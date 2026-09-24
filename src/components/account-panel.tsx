import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { formatFcfa } from "@/lib/money";
import { useShop } from "@/store/shop";

export function AccountPanel() {
  const open = useShop((s) => s.accountOpen);
  const setOpen = useShop((s) => s.setAccountOpen);
  const account = useShop((s) => s.account);
  const saveAccount = useShop((s) => s.saveAccount);
  const orders = useShop((s) => s.orders);
  const closeCart = useShop((s) => s.closeCart);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-ink/45" onClick={() => setOpen(false)}>
      <aside
        className="h-full w-full max-w-md overflow-y-auto bg-surface shadow-[var(--shadow-float)]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="text-base font-semibold">Compte</h2>
          <button type="button" onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-paper" aria-label="Fermer">
            <X size={18} />
          </button>
        </header>
        <form
          className="space-y-3 px-5 py-5"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            saveAccount({
              name: String(fd.get("name") ?? ""),
              email: String(fd.get("email") ?? ""),
              phone: String(fd.get("phone") ?? ""),
              city: String(fd.get("city") ?? ""),
              address: String(fd.get("address") ?? ""),
            });
            setOpen(false);
          }}
        >
          <p className="text-sm text-muted">
            Enregistrez vos informations pour accélérer le paiement. Elles restent sur cet appareil.
          </p>
          <Field name="name" label="Nom complet" defaultValue={account.name} required />
          <Field name="email" label="E-mail" type="email" defaultValue={account.email} />
          <Field name="phone" label="Téléphone" defaultValue={account.phone} placeholder="70 00 00 00" required />
          <Field name="city" label="Ville" defaultValue={account.city} placeholder="Ouagadougou" />
          <Field name="address" label="Adresse de livraison" defaultValue={account.address} />
          <button type="submit" className="w-full rounded-full bg-gold py-2.5 text-sm font-semibold text-gold-fg hover:bg-gold-hover">
            Enregistrer
          </button>
        </form>
        <div className="border-t border-line px-5 py-5">
          <h3 className="mb-3 text-sm font-semibold">Mes commandes</h3>
          {orders.length === 0 ? (
            <p className="text-sm text-muted">Aucune commande pour le moment.</p>
          ) : (
            <ul className="space-y-2">
              {orders.map((o) => (
                <li key={o.id}>
                  <Link
                    to="/suivi"
                    search={{ id: o.id }}
                    onClick={() => {
                      setOpen(false);
                      closeCart();
                    }}
                    className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5 text-sm no-underline hover:border-gold"
                  >
                    <span>
                      <span className="font-semibold">#{o.id}</span>
                      <span className="ml-2 text-muted">
                        {new Date(o.createdAt).toLocaleDateString("fr-FR")}
                      </span>
                    </span>
                    <span className="tabular-nums font-medium">{formatFcfa(o.total)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
}

function Field({
  name,
  label,
  defaultValue,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-line bg-paper px-3 outline-none focus:border-gold"
      />
    </label>
  );
}
