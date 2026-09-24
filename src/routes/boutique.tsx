import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, type CategorySlug } from "@/data/catalog";
import { ProductGrid } from "@/components/product-card";

export const Route = createFileRoute("/boutique")({
  component: ShopPage,
});

function ShopPage() {
  const [cat, setCat] = useState<"all" | CategorySlug>("all");
  const [sort, setSort] = useState<"pop" | "price-asc" | "price-desc" | "new">("pop");

  const products = useMemo(() => {
    let list = cat === "all" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === cat);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "new") list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    if (sort === "pop") list.sort((a, b) => b.reviewCount - a.reviewCount);
    return list;
  }, [cat, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold">Boutique</h1>
      <p className="mt-1 text-sm text-muted">Tous les produits Digital Business Store, en un seul endroit.</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setCat("all")}
          className={`rounded-full px-3 py-1 text-xs font-medium ${cat === "all" ? "bg-ink text-white" : "bg-surface ring-1 ring-line"}`}
        >
          Tout
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setCat(c.slug)}
            className={`rounded-full px-3 py-1 text-xs font-medium ${cat === c.slug ? "bg-ink text-white" : "bg-surface ring-1 ring-line"}`}
          >
            {c.name}
          </button>
        ))}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="ml-auto h-8 rounded-full border border-line bg-surface px-3 text-xs"
        >
          <option value="pop">Popularité</option>
          <option value="new">Nouveautés</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>
      <div className="mt-6">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
