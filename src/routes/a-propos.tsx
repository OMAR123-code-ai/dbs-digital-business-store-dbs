import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a-propos")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Digital Business Store</p>
      <h1 className="mt-2 text-3xl font-bold">L'innovation au service de votre quotidien</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        DBS est une boutique en ligne née à Ouagadougou, pensée pour l'Afrique. Nous sélectionnons des produits
        électroniques, mode, maison et lifestyle de qualité, livrés rapidement dans toute la région, avec un paiement
        mobile simple : Orange Money, Moov Money et Wave.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["Meilleure qualité", "Chaque article est contrôlé avant expédition."],
          ["Livraison Afrique", "Réseau logistique dans toute l'Afrique de l'Ouest."],
          ["DBS Payment", "Passerelle sécurisée, sans carte bancaire obligatoire."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border border-line bg-surface p-4">
            <h2 className="text-sm font-semibold">{t}</h2>
            <p className="mt-1 text-sm text-muted">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
