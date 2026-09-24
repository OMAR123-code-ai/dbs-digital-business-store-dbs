import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useState } from "react";
import {
  FAQS,
  TESTIMONIALS,
  bestSellers,
  featuredProducts,
  newArrivals,
} from "@/data/catalog";
import { CategoryIconGrid } from "@/components/site-shell";
import { ProductCard } from "@/components/product-card";
import { Stars } from "@/components/stars";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <CategoryIconGrid />
      </section>
      <ProductRow
        title="Produits en vedette"
        href="/boutique"
        products={featuredProducts()}
      />
      <Collections />
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductRow
            title="Meilleures ventes"
            href="/boutique"
            products={bestSellers()}
            nested
          />
          <ProductRow
            title="Nouveautés"
            href="/nouveautes"
            products={newArrivals()}
            nested
          />
        </div>
      </section>
      <SocialProof />
      <FaqAndNewsletter />
    </div>
  );
}

function Hero() {
  const slides = [
    {
      image: "/images/heroes/hero-main.jpg",
      kicker: "Électronique  ·  Mode & Accessoires  ·  Maison  ·  Lifestyle",
      title: "Des produits de qualité",
      accent: "pour un quotidien meilleur",
    },
    {
      image: "/images/heroes/hero-audio.jpg",
      kicker: "High-Tech  ·  Audio  ·  5G",
      title: "La tech qui avance",
      accent: "avec vous, partout en Afrique",
    },
    {
      image: "/images/heroes/hero-fashion.jpg",
      kicker: "Mode  ·  Style  ·  Élégance",
      title: "Le style accessible",
      accent: "sans compromettre la qualité",
    },
  ];
  const [i, setI] = useState(0);
  const slide = slides[i]!;

  return (
    <section className="mx-auto max-w-7xl px-4 pt-6">
      <div className="relative overflow-hidden rounded-2xl bg-ink text-white">
        <img
          src={slide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10" />
        <div className="relative grid min-h-[340px] items-center px-6 py-10 sm:min-h-[420px] sm:px-12 lg:min-h-[460px]">
          <div className="max-w-xl">
            <h1 className="font-sans text-3xl font-extrabold leading-tight sm:text-5xl">
              {slide.title}
              <span className="mt-1 block text-gold">{slide.accent}</span>
            </h1>
            <p className="mt-4 text-xs tracking-wide text-white/70 sm:text-sm">{slide.kicker}</p>
            <Link
              to="/boutique"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-fg no-underline hover:bg-gold-hover"
            >
              Découvrir maintenant
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-3 border-t border-white/10 bg-ink/70 px-4 py-4 backdrop-blur-sm sm:grid-cols-4 sm:px-8">
          <Trust icon={Check} title="Meilleure qualité" sub="Garantie" />
          <Trust icon={Truck} title="Livraison rapide" sub="Partout en Afrique" />
          <Trust icon={ShieldCheck} title="Paiement sécurisé" sub="DBS Payment" />
          <Trust icon={Headphones} title="Assistance 7j/7" sub="WhatsApp & Contact" />
        </div>
        <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 gap-1.5 sm:flex">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-gold" : "w-1.5 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust({
  icon: Icon,
  title,
  sub,
}: {
  icon: typeof Check;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
        <Icon size={16} />
      </span>
      <span>
        <span className="block text-xs font-semibold text-white">{title}</span>
        <span className="text-[11px] text-white/60">{sub}</span>
      </span>
    </div>
  );
}

function ProductRow({
  title,
  href,
  products,
  nested = false,
}: {
  title: string;
  href: string;
  products: ReturnType<typeof featuredProducts>;
  nested?: boolean;
}) {
  const inner = (
    <>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
        <Link to={href as "/boutique"} className="text-sm font-medium text-muted no-underline hover:text-gold-deep">
          Voir tout →
        </Link>
      </div>
      <div className={nested ? "grid grid-cols-3 gap-3" : "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} compact={nested} />
        ))}
      </div>
    </>
  );
  if (nested) return <div>{inner}</div>;
  return <section className="mx-auto max-w-7xl px-4 py-6">{inner}</section>;
}

function Collections() {
  const items = [
    {
      slug: "electronique" as const,
      title: "Collection Électronique",
      sub: "Technologie et innovation",
      image: "/images/collections/electronique.jpg",
    },
    {
      slug: "mode" as const,
      title: "Collection Mode",
      sub: "Style & Élégance",
      image: "/images/collections/mode.jpg",
    },
    {
      slug: "maison" as const,
      title: "Maison & Lifestyle",
      sub: "Confort au quotidien",
      image: "/images/collections/maison.jpg",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((c) => (
          <Link
            key={c.slug}
            to="/categorie/$slug"
            params={{ slug: c.slug }}
            className="group relative min-h-44 overflow-hidden rounded-xl no-underline"
          >
            <img src={c.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
            <div className="relative flex h-full min-h-44 flex-col justify-end p-5 text-white">
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="text-sm text-white/75">{c.sub}</p>
              <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                Découvrir <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-lg font-bold sm:text-xl">Ce que disent nos clients</h2>
        <Link to="/faq" className="text-sm font-medium text-muted no-underline hover:text-gold-deep">
          Voir tous les avis →
        </Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-4">
        {TESTIMONIALS.map((t) => (
          <article key={t.id} className="rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <Stars value={t.rating} />
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.text}</p>
            <p className="mt-2 text-[11px] text-subtle">{t.ago}</p>
          </article>
        ))}
        <aside className="flex flex-col justify-center gap-4 rounded-xl border border-line bg-surface p-5">
          <ProofLine icon={Truck} title="Livraison rapide" sub="Dans toute l'Afrique" />
          <ProofLine icon={ShieldCheck} title="Paiement sécurisé" sub="DBS Payment" />
          <ProofLine icon={MessageCircle} title="Service client" sub="7j/7 - 24h/24" />
        </aside>
      </div>
    </section>
  );
}

function ProofLine({
  icon: Icon,
  title,
  sub,
}: {
  icon: typeof Truck;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-soft text-gold-deep">
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-sm font-semibold">{title}</span>
        <span className="text-xs text-muted">{sub}</span>
      </span>
    </div>
  );
}

function FaqAndNewsletter() {
  const [open, setOpen] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="rounded-xl border border-line bg-surface p-5">
          <h2 className="mb-3 text-lg font-bold">Questions fréquentes</h2>
          <div>
            {FAQS.map((f, idx) => (
              <div key={f.q} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
                >
                  {f.q}
                  <ChevronDown size={16} className={open === idx ? "rotate-180" : ""} />
                </button>
                {open === idx ? <p className="pb-3 text-sm leading-relaxed text-muted">{f.a}</p> : null}
              </div>
            ))}
          </div>
          <Link to="/faq" className="mt-4 inline-block text-sm font-semibold text-gold-deep no-underline">
            Voir toutes les FAQ →
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl bg-ink text-white">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <form
              className="p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <h2 className="text-xl font-bold">Restez informé de nos offres exclusives</h2>
              <p className="mt-2 text-sm text-white/70">
                Inscrivez-vous à notre newsletter et recevez nos meilleures offres.
              </p>
              {done ? (
                <p className="mt-6 rounded-lg bg-white/10 px-4 py-3 text-sm">Merci ! Votre inscription est confirmée.</p>
              ) : (
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse e-mail"
                    className="h-11 flex-1 rounded-full border-0 bg-white px-4 text-sm text-ink outline-none"
                  />
                  <button
                    type="submit"
                    className="h-11 rounded-full bg-gold px-5 text-sm font-semibold text-gold-fg hover:bg-gold-hover"
                  >
                    S'abonner
                  </button>
                </div>
              )}
            </form>
            <div className="relative min-h-48">
              <img src="/images/heroes/newsletter.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink/40" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold leading-snug">
                Les meilleures offres, directement dans votre boîte !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
