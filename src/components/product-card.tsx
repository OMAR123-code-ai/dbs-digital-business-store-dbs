import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { discountPercent, formatFcfa } from "@/lib/money";
import { cn } from "@/lib/utils";
import { Stars } from "@/components/stars";
import { useShop } from "@/store/shop";
import type { Product } from "@/data/catalog";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const addToCart = useShop((s) => s.addToCart);
  const off = discountPercent(product.price, product.compareAt);

  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-surface p-3 shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-float)]">
      <Link
        to="/produit/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden rounded-lg bg-paper"
      >
        {off ? (
          <span className="absolute left-2 top-2 z-10 rounded-md bg-sale px-1.5 py-0.5 text-[11px] font-bold text-white">
            -{off}%
          </span>
        ) : product.isNew ? (
          <span className="absolute left-2 top-2 z-10 rounded-md bg-success px-1.5 py-0.5 text-[11px] font-bold text-white">
            Nouveau
          </span>
        ) : null}
        <img
          src={product.images[0]}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="mt-3 flex flex-1 flex-col">
        <Link
          to="/produit/$slug"
          params={{ slug: product.slug }}
          className="text-[13px] font-medium leading-snug text-ink no-underline hover:text-gold-deep"
        >
          {product.name}
        </Link>
        <div className="mt-1 flex items-center gap-1.5">
          <Stars value={product.rating} />
          <span className="text-[11px] text-subtle">({product.reviewCount})</span>
        </div>
        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <span className="text-[15px] font-bold tabular-nums text-ink">{formatFcfa(product.price)}</span>
          {product.compareAt ? (
            <span className="text-[12px] tabular-nums text-subtle line-through">
              {formatFcfa(product.compareAt)}
            </span>
          ) : null}
        </div>
        {!compact ? (
          <button
            type="button"
            onClick={() => {
              addToCart(product, 1, product.colors?.[0]?.id);
              toast.success(`${product.name} ajouté au panier`);
            }}
            className={cn(
              "mt-3 w-full rounded-full bg-gold py-2 text-[13px] font-semibold text-gold-fg",
              "transition-colors duration-150 hover:bg-gold-hover",
            )}
          >
            Ajouter au panier
          </button>
        ) : null}
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-line bg-surface px-6 py-16 text-center text-sm text-muted">
        Aucun produit ne correspond à votre recherche.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
