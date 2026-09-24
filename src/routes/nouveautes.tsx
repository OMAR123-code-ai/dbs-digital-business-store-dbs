import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/data/catalog";
import { ProductGrid } from "@/components/product-card";

export const Route = createFileRoute("/nouveautes")({
  component: NewPage,
});

function NewPage() {
  const products = PRODUCTS.filter((p) => p.isNew);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold">Nouveautés</h1>
      <p className="mt-1 text-sm text-muted">Les dernières arrivées Digital Business Store.</p>
      <div className="mt-6">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
