import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Battery, Camera, HardDrive, Monitor, Shield, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  PRODUCT_REVIEWS,
  getCategory,
  getProduct,
  similarProducts,
} from "@/data/catalog";
import { discountPercent, formatFcfa } from "@/lib/money";
import { ProductCard } from "@/components/product-card";
import { QtyControl } from "@/components/qty";
import { Stars } from "@/components/stars";
import { useShop } from "@/store/shop";

export const Route = createFileRoute("/produit/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const navigate = useNavigate();
  const addToCart = useShop((s) => s.addToCart);
  const addReview = useShop((s) => s.addReview);
  const userReviews = useShop((s) => s.userReviews);
  const account = useShop((s) => s.account);

  const [image, setImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product?.colors?.[0]?.id);
  const [tab, setTab] = useState<"desc" | "avis" | "liv" | "ret">("desc");

  const extras = useMemo(() => {
    if (!product) return [];
    return userReviews.filter((r) => r.productId === product.id);
  }, [userReviews, product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-xl font-bold">Produit introuvable</h1>
        <Link to="/boutique" className="mt-4 inline-block text-sm font-semibold text-gold-deep">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  const cat = getCategory(product.category);
  const off = discountPercent(product.price, product.compareAt);
  const reviews = [...extras.map((r) => ({
    id: r.date + r.author,
    author: r.author,
    city: "",
    rating: r.rating,
    date: r.date,
    title: r.title,
    body: r.body,
  })), ...(PRODUCT_REVIEWS[product.id] ?? [])];
  const similar = similarProducts(product);

  const specIcon = {
    screen: Monitor,
    storage: HardDrive,
    camera: Camera,
    battery: Battery,
    generic: Shield,
  } as const;

  function buyNow() {
    if (!product) return;
    addToCart(product, qty, color);
    navigate({ to: "/paiement" });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <nav className="mb-5 text-xs text-muted">
        <Link to="/" className="no-underline hover:text-ink">
          Accueil
        </Link>
        <span className="mx-1">›</span>
        {cat ? (
          <>
            <Link to="/categorie/$slug" params={{ slug: cat.slug }} className="no-underline hover:text-ink">
              {cat.name}
            </Link>
            <span className="mx-1">›</span>
          </>
        ) : null}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex gap-3">
          <div className="hidden w-16 shrink-0 flex-col gap-2 sm:flex">
            {product.images.map((src, idx) => (
              <button
                key={src + idx}
                type="button"
                onClick={() => setImage(idx)}
                className={`overflow-hidden rounded-md border ${image === idx ? "border-gold" : "border-line"}`}
              >
                <img src={src} alt="" className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="relative min-h-80 flex-1 overflow-hidden rounded-xl border border-line bg-surface">
            {off ? (
              <span className="absolute left-3 top-3 z-10 rounded-md bg-sale px-2 py-0.5 text-xs font-bold text-white">
                -{off}%
              </span>
            ) : null}
            <img src={product.images[image]} alt={product.name} className="h-full w-full object-contain p-6" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Stars value={product.rating} size={15} />
            <span className="text-sm text-muted">({product.reviewCount} avis)</span>
          </div>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <span className="text-2xl font-extrabold tabular-nums">{formatFcfa(product.price)}</span>
            {product.compareAt ? (
              <>
                <span className="text-base text-subtle line-through tabular-nums">{formatFcfa(product.compareAt)}</span>
                {off ? (
                  <span className="rounded-md bg-sale/10 px-2 py-0.5 text-xs font-bold text-sale">-{off}%</span>
                ) : null}
              </>
            ) : null}
          </div>

          {product.specs ? (
            <ul className="mt-5 space-y-2">
              {product.specs.map((s) => {
                const Icon = specIcon[s.icon];
                return (
                  <li key={s.label} className="flex items-center gap-2 text-sm text-ink-soft">
                    <Icon size={16} className="text-muted" />
                    {s.label}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-5 text-sm leading-relaxed text-muted">{product.description}</p>
          )}

          {product.colors && product.colors.length > 0 ? (
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">
                Couleur : <span className="capitalize">{product.colors.find((c) => c.id === color)?.name}</span>
              </p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    aria-label={c.name}
                    onClick={() => setColor(c.id)}
                    className={`h-7 w-7 rounded-full border-2 ${color === c.id ? "border-gold" : "border-line-strong"}`}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-medium">Quantité :</span>
            <QtyControl value={qty} max={product.stock} onChange={setQty} />
            <span className="text-xs text-muted">{product.stock} en stock</span>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                addToCart(product, qty, color);
                toast.success("Ajouté au panier");
              }}
              className="flex-1 rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg hover:bg-gold-hover"
            >
              Ajouter au panier
            </button>
            <button
              type="button"
              onClick={buyNow}
              className="flex-1 rounded-full bg-ink py-3 text-sm font-semibold text-white hover:bg-ink-soft"
            >
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-b border-line">
        {(
          [
            ["desc", "Description"],
            ["avis", `Avis (${product.reviewCount + extras.length})`],
            ["liv", "Livraison"],
            ["ret", "Retours"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`mr-5 border-b-2 py-3 text-sm font-medium ${
              tab === id ? "border-gold text-ink" : "border-transparent text-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="py-6">
        {tab === "desc" ? (
          <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">{product.longDescription}</p>
        ) : null}
        {tab === "liv" ? (
          <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">
            Livraison sous 3 à 7 jours dans toute l'Afrique de l'Ouest. Frais de 5 000 FCFA, offerts dès 400 000
            FCFA d'achat. Suivi par SMS et WhatsApp dès l'expédition.
          </p>
        ) : null}
        {tab === "ret" ? (
          <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">
            Retours acceptés sous 7 jours si le produit est non utilisé, dans son emballage d'origine. Les articles
            défectueux sont échangés ou remboursés intégralement via votre moyen de paiement (Orange Money, Moov Money
            ou Wave).
          </p>
        ) : null}
        {tab === "avis" ? (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <ul className="space-y-4">
              {reviews.length === 0 ? (
                <li className="text-sm text-muted">Soyez le premier à donner votre avis.</li>
              ) : (
                reviews.map((r) => (
                  <li key={r.id} className="rounded-xl border border-line bg-surface p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">
                        {r.author} {r.city ? <span className="font-normal text-muted">· {r.city}</span> : null}
                      </p>
                      <Stars value={r.rating} />
                    </div>
                    <p className="mt-1 text-sm font-medium">{r.title}</p>
                    <p className="mt-1 text-sm text-muted">{r.body}</p>
                    <p className="mt-2 text-[11px] text-subtle">{r.date}</p>
                  </li>
                ))
              )}
            </ul>
            <form
              className="h-fit rounded-xl border border-line bg-surface p-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                addReview({
                  productId: product.id,
                  author: String(fd.get("author") || account.name || "Client DBS"),
                  rating: Number(fd.get("rating") || 5),
                  title: String(fd.get("title") || "Mon avis"),
                  body: String(fd.get("body") || ""),
                  date: new Date().toLocaleDateString("fr-FR"),
                });
                toast.success("Merci pour votre avis");
                e.currentTarget.reset();
              }}
            >
              <h3 className="text-sm font-semibold">Laisser un avis</h3>
              <input name="author" placeholder="Votre nom" defaultValue={account.name} className="mt-3 h-10 w-full rounded-md border border-line px-3 text-sm" />
              <select name="rating" defaultValue="5" className="mt-2 h-10 w-full rounded-md border border-line px-3 text-sm">
                <option value="5">5 étoiles</option>
                <option value="4">4 étoiles</option>
                <option value="3">3 étoiles</option>
                <option value="2">2 étoiles</option>
                <option value="1">1 étoile</option>
              </select>
              <input name="title" required placeholder="Titre" className="mt-2 h-10 w-full rounded-md border border-line px-3 text-sm" />
              <textarea name="body" required rows={4} placeholder="Votre expérience" className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm" />
              <button type="submit" className="mt-3 w-full rounded-full bg-gold py-2 text-sm font-semibold text-gold-fg">
                Publier
              </button>
            </form>
          </div>
        ) : null}
      </div>

      <section className="mt-6">
        <h2 className="mb-4 text-lg font-bold">Produits similaires</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {similar.map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
