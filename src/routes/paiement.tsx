import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, Lock, ShieldCheck, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { formatFcfa } from "@/lib/money";
import { DbsMark } from "@/components/logo";
import { cartTotals, useShop, type PayMethod } from "@/store/shop";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/paiement")({
  component: CheckoutPage,
});

const METHODS: { id: PayMethod; name: string; hint: string; color: string; glyph: string }[] = [
  { id: "orange", name: "Orange Money", hint: "Paiement mobile Orange", color: "bg-orange-money", glyph: "OM" },
  { id: "moov", name: "Moov Money", hint: "Paiement mobile Moov Africa", color: "bg-moov", glyph: "M" },
  { id: "wave", name: "Wave", hint: "Paiement Wave", color: "bg-wave", glyph: "~" },
];

function CheckoutPage() {
  const navigate = useNavigate();
  const items = useShop((s) => s.items);
  const account = useShop((s) => s.account);
  const saveAccount = useShop((s) => s.saveAccount);
  const appliedPromo = useShop((s) => s.appliedPromo);
  const placeOrder = useShop((s) => s.placeOrder);
  const totals = cartTotals(items, appliedPromo);

  const [method, setMethod] = useState<PayMethod>("orange");
  const [phone, setPhone] = useState(account.phone);
  const [name, setName] = useState(account.name);
  const [city, setCity] = useState(account.city);
  const [address, setAddress] = useState(account.address);
  const [step, setStep] = useState<"form" | "pay" | "wait" | "done">("form");
  const [error, setError] = useState("");

  const previewId = useMemo(() => {
    const max = 10324;
    return `DBS${max}`;
  }, []);

  if (items.length === 0 && step !== "done") {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-xl font-bold">Votre panier est vide</h1>
        <Link to="/boutique" className="mt-4 inline-block text-sm font-semibold text-gold-deep">
          Continuer vos achats
        </Link>
      </div>
    );
  }

  function onContinue(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !city.trim()) {
      setError("Merci de renseigner nom, téléphone et ville.");
      return;
    }
    saveAccount({ name, phone, city, address });
    setError("");
    setStep("pay");
  }

  function pay() {
    if (phone.replace(/\D/g, "").length < 8) {
      setError("Indiquez un numéro de téléphone mobile valide.");
      return;
    }
    setError("");
    setStep("wait");
    window.setTimeout(() => {
      const order = placeOrder(method, phone);
      navigate({ to: "/confirmation", search: { id: order.id } });
    }, 1600);
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10">
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-float)]">
        <header className="flex items-center justify-between bg-ink px-5 py-4 text-white">
          <div className="flex items-center gap-2">
            <DbsMark className="h-8 w-8" />
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.14em] uppercase text-gold">
                DBS Payment
              </p>
              <p className="text-[11px] text-white/55">Paiement sécurisé</p>
            </div>
          </div>
          <Lock size={16} className="text-gold" />
        </header>

        <div className="border-b border-line bg-paper px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Commande Shopify</p>
          <p className="text-sm">
            N° commande : <span className="font-semibold">#{previewId}</span>
          </p>
          <p className="mt-1 text-lg font-bold tabular-nums">Montant total : {formatFcfa(totals.total)}</p>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Les informations de votre commande sont récupérées automatiquement depuis Shopify. Vous n'avez rien à
            saisir.
          </p>
        </div>

        {step === "form" ? (
          <form className="space-y-3 px-5 py-5" onSubmit={onContinue}>
            <h2 className="text-sm font-semibold">Livraison</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom complet" className="h-10 w-full rounded-md border border-line px-3 text-sm" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Téléphone" className="h-10 w-full rounded-md border border-line px-3 text-sm" />
            <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ville" className="h-10 w-full rounded-md border border-line px-3 text-sm" />
            <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Adresse (quartier, rue)" className="h-10 w-full rounded-md border border-line px-3 text-sm" />
            {error ? <p className="text-xs text-sale">{error}</p> : null}
            <button type="submit" className="w-full rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg hover:bg-gold-hover">
              Continuer vers le paiement
            </button>
          </form>
        ) : null}

        {step === "pay" || step === "wait" ? (
          <div className="px-5 py-5">
            <h2 className="mb-3 text-sm font-semibold">Choisissez votre moyen de paiement</h2>
            <div className="space-y-2">
              {METHODS.map((m) => (
                <label
                  key={m.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-3",
                    method === m.id ? "border-gold bg-gold-soft/40" : "border-line",
                  )}
                >
                  <span className={cn("grid h-9 w-9 place-items-center rounded-md text-xs font-bold text-white", m.color)}>
                    {m.glyph}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold">{m.name}</span>
                    <span className="text-xs text-muted">{m.hint}</span>
                  </span>
                  <input
                    type="radio"
                    name="method"
                    checked={method === m.id}
                    onChange={() => setMethod(m.id)}
                    className="accent-gold"
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-1 block font-medium">Numéro {METHODS.find((m) => m.id === method)?.name}</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="70 00 00 00"
                className="h-10 w-full rounded-md border border-line px-3 text-sm"
              />
            </label>
            {error ? <p className="mt-2 text-xs text-sale">{error}</p> : null}
            <button
              type="button"
              disabled={step === "wait"}
              onClick={pay}
              className="mt-5 w-full rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg hover:bg-gold-hover disabled:opacity-70"
            >
              {step === "wait" ? "Traitement en cours…" : "Payer maintenant"}
            </button>
          </div>
        ) : null}

        <div className="border-t border-line px-5 py-4">
          <ol className="flex items-center justify-between text-[10px] font-medium text-muted">
            {["Commande Shopify", "DBS Payment", "Paiement", "Confirmation"].map((label, idx) => {
              const active = step === "form" ? idx <= 1 : step === "pay" || step === "wait" ? idx <= 2 : idx <= 3;
              return (
                <li key={label} className="flex flex-1 flex-col items-center gap-1">
                  <span
                    className={cn(
                      "grid h-6 w-6 place-items-center rounded-full",
                      active ? "bg-gold text-gold-fg" : "bg-paper text-subtle",
                    )}
                  >
                    {active ? <Check size={12} /> : idx + 1}
                  </span>
                  {label}
                </li>
              );
            })}
          </ol>
          <div className="mt-4 flex justify-between text-[11px] text-muted">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={12} /> Paiement sécurisé
            </span>
            <span className="inline-flex items-center gap-1">
              <Zap size={12} /> Transactions rapides
            </span>
            <span>Assistance 7j/7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
