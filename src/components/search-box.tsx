import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { searchProducts } from "@/data/catalog";
import { formatFcfa } from "@/lib/money";
import { useShop } from "@/store/shop";

export function SearchBox({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const setSearchOpen = useShop((s) => s.setSearchOpen);
  const results = useMemo(() => (q.trim().length >= 1 ? searchProducts(q).slice(0, 6) : []), [q]);

  function go(slug?: string) {
    setOpen(false);
    setSearchOpen(false);
    if (slug) {
      navigate({ to: "/produit/$slug", params: { slug } });
    } else {
      navigate({ to: "/recherche", search: { q } });
    }
    setQ("");
  }

  return (
    <div className="relative w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          go();
        }}
        className="flex h-11 items-center rounded-full border border-line bg-surface pl-4 pr-1.5 shadow-sm"
      >
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Rechercher un produit, une marque, une catégorie..."
          className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-subtle"
        />
        <button
          type="submit"
          aria-label="Rechercher"
          className="grid h-8 w-8 place-items-center rounded-full bg-gold text-gold-fg hover:bg-gold-hover"
        >
          <Search size={16} />
        </button>
      </form>
      {open && results.length > 0 && !compact ? (
        <div className="absolute left-0 right-0 z-40 mt-2 overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-float)]">
          {results.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => go(p.slug)}
              className="flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-paper"
            >
              <img src={p.images[0]} alt="" className="h-11 w-11 rounded-md object-cover" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">{p.name}</span>
                <span className="text-xs tabular-nums text-muted">{formatFcfa(p.price)}</span>
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => go()}
            className="w-full border-t border-line px-3 py-2.5 text-left text-sm font-medium text-gold-deep hover:bg-paper"
          >
            Voir tous les résultats
          </button>
        </div>
      ) : null}
    </div>
  );
}
