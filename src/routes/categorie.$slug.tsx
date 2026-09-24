import { Link, createFileRoute } from "@tanstack/react-router";
import { CATEGORIES, getCategory, productsInCategory, type CategorySlug } from "@/data/catalog";
import { ProductGrid } from "@/components/product-card";

export const Route = createFileRoute("/categorie/$slug")({
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const cat = getCategory(slug);
  const products = cat ? productsInCategory(slug as CategorySlug) : [];

  if (!cat) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-xl font-bold">Catégorie introuvable</h1>
        <Link to="/boutique" className="mt-4 inline-block text-sm font-semibold text-gold-deep">
          Voir toute la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <p className="text-xs text-muted">
        <Link to="/" className="no-underline hover:text-ink">
          Accueil
        </Link>{" "}
        › {cat.name}
      </p>
      <h1 className="mt-2 text-2xl font-bold">{cat.navLabel ?? cat.name}</h1>
      <p className="mt-1 text-sm text-muted">{cat.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            to="/categorie/$slug"
            params={{ slug: c.slug }}
            className={`rounded-full px-3 py-1 text-xs font-medium no-underline ${
              c.slug === cat.slug ? "bg-ink text-white" : "bg-surface text-ink ring-1 ring-line"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
