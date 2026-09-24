import { createFileRoute } from "@tanstack/react-router";
import { promoProducts } from "@/data/catalog";
import { ProductGrid } from "@/components/product-card";

export const Route = createFileRoute("/promotions")({
  component: PromotionsPage,
});

function PromotionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 rounded-2xl bg-ink px-6 py-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Offre exclusive</p>
        <h1 className="mt-2 text-3xl font-bold">Jusqu'à -50% sur une sélection d'articles</h1>
        <p className="mt-2 max-w-xl text-sm text-white/70">
          Codes promo : <span className="font-semibold text-gold">DBS10</span> (−10%),{" "}
          <span className="font-semibold text-gold">WELCOME</span> (−15%),{" "}
          <span className="font-semibold text-gold">AFRICA</span> (−5 000 FCFA).
        </p>
      </div>
      <ProductGrid products={promoProducts()} />
    </div>
  );
}
