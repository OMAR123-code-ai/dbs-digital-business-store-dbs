import { Link, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  Headphones,
  House,
  LayoutGrid,
  Menu,
  MessageCircle,
  Search,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  User,
  Laptop,
  Dumbbell,
  X,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CATEGORIES, NAV_LINKS, WHATSAPP_NUMBER, WHATSAPP_TEXT } from "@/data/catalog";
import { DbsLogo } from "@/components/logo";
import { SearchBox } from "@/components/search-box";
import { CartDrawer } from "@/components/cart-drawer";
import { AccountPanel } from "@/components/account-panel";
import { useShop } from "@/store/shop";
import { cn } from "@/lib/utils";

const CAT_ICONS = {
  electronique: Smartphone,
  mode: Shirt,
  accessoires: Headphones,
  maison: House,
  beaute: Sparkles,
  sport: Dumbbell,
  "high-tech": Laptop,
  autres: LayoutGrid,
} as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const setHydrated = useShop((s) => s.setHydrated);
  useEffect(() => {
    void Promise.resolve(useShop.persist.rehydrate()).then(() => setHydrated());
  }, [setHydrated]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <TopBar />
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
      <AccountPanel />
      <WhatsAppFab />
    </div>
  );
}

function TopBar() {
  return (
    <div className="overflow-x-hidden bg-ink text-[11px] text-white/80">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <p className="hidden items-center gap-2 sm:flex">
          <span>Livraison rapide partout dans le monde</span>
          <span className="text-white/30">|</span>
          <span>Paiement sécurisé</span>
          <span className="text-white/30">|</span>
          <span>Service client disponible 7j/7 - 24h/24</span>
        </p>
        <p className="sm:hidden">Livraison rapide · Paiement sécurisé · 7j/7</p>
        <Link
          to="/promotions"
          className="max-w-full truncate rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-gold-fg no-underline hover:bg-gold-hover"
        >
          <span className="sm:hidden">Offre exclusive : jusqu&apos;à -50%</span>
          <span className="hidden sm:inline">
            Offre exclusive : jusqu&apos;à -50% sur une sélection d&apos;articles !
          </span>
        </Link>
      </div>
    </div>
  );
}

function Header() {
  const count = useShop((s) => s.items.reduce((n, i) => n + i.qty, 0));
  const hydrated = useShop((s) => s.hydrated);
  const openCart = useShop((s) => s.openCart);
  const setAccountOpen = useShop((s) => s.setAccountOpen);
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <header className="border-b border-ink-mid bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4">
        <MobileMenu />
        <DbsLogo inverted />
        <div className="hidden flex-1 md:block">
          <SearchBox />
        </div>
        <div className="ml-auto flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 md:hidden"
            onClick={() => setMobileSearch((v) => !v)}
            aria-label="Recherche"
          >
            {mobileSearch ? <X size={18} /> : <Search size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setAccountOpen(true)}
            className="flex items-center gap-2 rounded-full px-2 py-1.5 hover:bg-white/10"
          >
            <User size={18} />
            <span className="hidden text-sm sm:inline">Compte</span>
          </button>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full px-2 py-1.5 text-white no-underline hover:bg-white/10 sm:flex"
          >
            <MessageCircle size={18} />
            <span className="text-sm">Contact</span>
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative flex items-center gap-2 rounded-full px-2 py-1.5 hover:bg-white/10"
          >
            <ShoppingBag size={18} />
            <span className="hidden text-sm sm:inline">Panier</span>
            {hydrated && count > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-gold-fg">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </div>
      {mobileSearch ? (
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          <SearchBox compact />
        </div>
      ) : null}
    </header>
  );
}

function NavBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div className="relative border-b border-line bg-surface">
      <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-2 py-0">
        <div className="relative" ref={ref}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex items-center gap-2 whitespace-nowrap px-3 py-3 text-sm font-semibold"
          >
            <LayoutGrid size={16} />
            Toutes les catégories
            <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
          </button>
          {open ? (
            <div className="absolute left-0 top-full z-50 w-72 overflow-hidden rounded-xl border border-line bg-surface py-2 shadow-[var(--shadow-float)]">
              {CATEGORIES.map((c) => {
                const Icon = CAT_ICONS[c.slug];
                return (
                  <Link
                    key={c.slug}
                    to="/categorie/$slug"
                    params={{ slug: c.slug }}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-ink no-underline hover:bg-paper"
                  >
                    <Icon size={16} className="text-gold-deep" />
                    {c.name}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
        {NAV_LINKS.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              to={l.href as never}
              className={cn(
                "whitespace-nowrap px-3 py-3 text-sm no-underline",
                active
                  ? "border-b-2 border-gold font-semibold text-ink"
                  : "border-b-2 border-transparent text-muted hover:text-ink",
              )}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Menu"
      >
        <Menu size={20} />
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-ink/50 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="h-full w-72 overflow-y-auto bg-surface p-4 text-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <DbsLogo compact />
              <button type="button" onClick={() => setOpen(false)} aria-label="Fermer">
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href as never}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-sm font-medium text-ink no-underline"
                >
                  {l.label}
                </Link>
              ))}
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to="/categorie/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-sm text-ink no-underline"
                >
                  {c.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <DbsLogo inverted />
          <p className="mt-4 text-xs leading-relaxed text-white/55">
            L&apos;innovation au service de votre quotidien. Produits de qualité, livraison rapide
            partout dans le monde, paiement mobile sécurisé.
          </p>
        </div>
        <FooterCol
          title="Liens utiles"
          links={[
            ["Accueil", "/"],
            ["Boutique", "/boutique"],
            ["À propos", "/a-propos"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
          ]}
        />
        <FooterCol
          title="Catégories"
          links={[
            ["Électronique", "/categorie/electronique"],
            ["Mode & Accessoires", "/categorie/mode"],
            ["Maison & Lifestyle", "/categorie/maison"],
            ["Promotions", "/promotions"],
            ["Nouveautés", "/nouveautes"],
          ]}
        />
        <FooterCol
          title="Service client"
          links={[
            ["Livraison", "/livraison"],
            ["Retours & échanges", "/retours"],
            ["Suivi de commande", "/suivi"],
            ["Conditions générales", "/cgu"],
            ["Politique de confidentialité", "/confidentialite"],
          ]}
        />
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Suivez-nous</h3>
          <div className="flex items-center gap-2">
            <Social icon={Facebook} label="Facebook" />
            <Social icon={Instagram} label="Instagram" />
            <TikTokIcon />
            <Social icon={Youtube} label="YouTube" />
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white no-underline shadow-md hover:brightness-110"
            aria-label="WhatsApp"
          >
            <WhatsAppGlyph className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-[11px] text-white/45">
          <p>© 2026 Digital Business Store. Tous droits réservés.</p>
          <p>Burkina Faso | Afrique | Monde</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link to={href as never} className="text-sm text-white/70 no-underline hover:text-gold">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({ icon: Icon, label }: { icon: typeof Facebook; label: string }) {
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80"
      title={label}
    >
      <Icon size={15} />
    </span>
  );
}

function TikTokIcon() {
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80"
      title="TikTok"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
        <path d="M14.5 3c.4 2.6 1.8 4.4 4.5 4.7v2.4c-1.5 0-2.9-.5-4.1-1.3v6.7c0 3.4-2.7 6.1-6.2 6.1S2.5 18.9 2.5 15.5 5.2 9.4 8.7 9.4c.4 0 .8 0 1.2.1v2.6c-.4-.1-.8-.2-1.2-.2-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V3h2.2Z" />
      </svg>
    </span>
  );
}

/** Floating WhatsApp — official green icon only, no text */
function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] no-underline transition-transform hover:scale-110"
      aria-label="Contacter sur WhatsApp"
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-current", className)} aria-hidden>
      <path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.73.93-.9 1.12-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.16.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.02c.14.19 2.01 3.07 4.87 4.3.68.29 1.21.47 1.62.6.68.21 1.3.18 1.79.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.06c-1.54 0-3.04-.41-4.35-1.19l-.31-.18-3.11.82.83-3.04-.2-.33a8.16 8.16 0 0 1-1.26-4.37c0-4.51 3.67-8.18 8.19-8.18 4.51 0 8.18 3.67 8.18 8.18 0 4.52-3.67 8.19-8.18 8.19Z" />
    </svg>
  );
}

export function CategoryIconGrid() {
  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
      {CATEGORIES.map((c) => {
        const Icon = CAT_ICONS[c.slug];
        return (
          <Link
            key={c.slug}
            to="/categorie/$slug"
            params={{ slug: c.slug }}
            className="flex flex-col items-center gap-2 rounded-xl bg-surface px-2 py-4 text-center no-underline shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-paper text-ink-soft">
              <Icon size={22} strokeWidth={1.6} />
            </span>
            <span className="text-[11px] font-medium leading-tight text-ink">{c.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
