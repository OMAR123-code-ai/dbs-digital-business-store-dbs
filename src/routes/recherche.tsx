import { createFileRoute } from "@tanstack/react-router";
import { searchProducts } from "@/data/catalog";
import { ProductGrid } from "@/components/product-card";

type Search = { q?: string };

export const Route = createFileRoute("/recherche")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: typeof s.q === "string" ? s.q : "",
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q = "" } = Route.useSearch();
  const products = searchProducts(q);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold">Recherche</h1>
      <p className="mt-1 text-sm text-muted">
        {q ? (
          <>
            {products.length} résultat{products.length > 1 ? "s" : ""} pour « {q} »
          </>
        ) : (
          "Saisissez un mot-clé dans la barre de recherche."
        )}
      </p>
      <div className="mt-6">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
