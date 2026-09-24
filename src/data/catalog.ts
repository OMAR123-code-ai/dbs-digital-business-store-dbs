export type CategorySlug =
  | "electronique"
  | "mode"
  | "accessoires"
  | "maison"
  | "beaute"
  | "sport"
  | "high-tech"
  | "autres";

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
};

export type ProductSpec = {
  icon: "screen" | "storage" | "camera" | "battery" | "generic";
  label: string;
};

export type Review = {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  body: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  compareAt?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
  description: string;
  longDescription: string;
  specs?: ProductSpec[];
  colors?: ProductColor[];
  stock: number;
};

export type Category = {
  slug: CategorySlug;
  name: string;
  navLabel?: string;
  blurb: string;
};

export const CATEGORIES: Category[] = [
  { slug: "electronique", name: "Électronique", blurb: "Smartphones, audio et recharge" },
  { slug: "mode", name: "Mode", navLabel: "Mode & Accessoires", blurb: "Style & élégance au quotidien" },
  { slug: "accessoires", name: "Accessoires", blurb: "Sacs, montres et coques" },
  { slug: "maison", name: "Maison", navLabel: "Maison & Lifestyle", blurb: "Confort et décoration" },
  { slug: "beaute", name: "Beauté & Santé", blurb: "Parfums, soins et bien-être" },
  { slug: "sport", name: "Sport & Loisirs", blurb: "Baskets et équipement" },
  { slug: "high-tech", name: "High-Tech", blurb: "Tablettes, montres et PC" },
  { slug: "autres", name: "Autres", blurb: "Le reste de la sélection" },
];

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/categorie/electronique", label: "Électronique" },
  { href: "/categorie/mode", label: "Mode & Accessoires" },
  { href: "/categorie/maison", label: "Maison & Lifestyle" },
  { href: "/promotions", label: "Promotions" },
  { href: "/a-propos", label: "À propos" },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "p-earbuds",
    slug: "ecouteurs-sans-fil-bluetooth",
    name: "Écouteurs sans fil Bluetooth",
    category: "electronique",
    price: 31990,
    compareAt: 39990,
    images: ["/images/products/earbuds.jpg"],
    rating: 4.7,
    reviewCount: 124,
    featured: true,
    description: "Écouteurs true wireless avec étui de charge, son clair et autonomie longue durée.",
    longDescription:
      "Profitez d'un son riche et d'un maintien confortable toute la journée. Boîtier compact, connexion Bluetooth instantanée et commandes tactiles. Idéal pour les appels, la musique et vos déplacements en ville.",
    specs: [
      { icon: "battery", label: "Autonomie 28 h avec étui" },
      { icon: "generic", label: "Bluetooth 5.3" },
      { icon: "generic", label: "Réduction de bruit" },
    ],
    colors: [
      { id: "noir", name: "Noir", hex: "#1a1a1a" },
      { id: "blanc", name: "Blanc", hex: "#f3f3f3" },
    ],
    stock: 48,
  },
  {
    id: "p-smartwatch",
    slug: "montre-connectee-smartwatch",
    name: "Montre connectée Smartwatch",
    category: "high-tech",
    price: 25490,
    compareAt: 29990,
    images: ["/images/products/smartwatch.jpg"],
    rating: 4.6,
    reviewCount: 88,
    featured: true,
    bestSeller: true,
    description: "Suivi santé, notifications et écran couleur haute définition.",
    longDescription:
      "Une smartwatch complète pour le sport et le quotidien : rythme cardiaque, oxymétrie, nombreuses cadrans et étanchéité pour la pluie. Synchronisation avec Android et iOS.",
    specs: [
      { icon: "screen", label: "Écran AMOLED 1.8\"" },
      { icon: "battery", label: "Autonomie 7 jours" },
      { icon: "generic", label: "GPS + cardio" },
    ],
    colors: [
      { id: "noir", name: "Noir", hex: "#111111" },
      { id: "acier", name: "Acier", hex: "#8a8f98" },
    ],
    stock: 36,
  },
  {
    id: "p-sneakers",
    slug: "baskets-tendance-unisexe",
    name: "Baskets tendance unisexe",
    category: "sport",
    price: 22490,
    compareAt: 29990,
    images: ["/images/products/sneakers.jpg"],
    rating: 4.5,
    reviewCount: 76,
    featured: true,
    description: "Baskets légères, semelle confort et look urbain.",
    longDescription:
      "Conçues pour marcher longtemps sans effort. Mesh respirant, semelle amortie et silhouette contemporaine qui s'accorde avec tout.",
    colors: [
      { id: "noir", name: "Noir", hex: "#161616" },
      { id: "blanc", name: "Blanc", hex: "#f5f5f5" },
    ],
    stock: 54,
  },
  {
    id: "p-dress",
    slug: "robe-elegante-femme",
    name: "Robe élégante femme",
    category: "mode",
    price: 17490,
    compareAt: 24990,
    images: ["/images/products/dress.jpg"],
    rating: 4.6,
    reviewCount: 52,
    featured: true,
    description: "Robe fluide pour les occasions et le quotidien chic.",
    longDescription:
      "Coupe flatteuse, tissu fluide et couleur profonde. Parfaite pour un dîner, un événement ou un look de bureau raffiné.",
    colors: [
      { id: "rouge", name: "Rouge", hex: "#9b1c2c" },
      { id: "noir", name: "Noir", hex: "#1b1b1b" },
    ],
    stock: 22,
  },
  {
    id: "p-backpack",
    slug: "sac-a-dos-multifonction",
    name: "Sac à dos multifonction",
    category: "accessoires",
    price: 16990,
    compareAt: 20990,
    images: ["/images/products/backpack.jpg"],
    rating: 4.5,
    reviewCount: 43,
    featured: true,
    description: "Sac à dos urbain avec compartiment ordinateur.",
    longDescription:
      "Poche laptop 15,6\", compartiments organisés et bretelles rembourrées. Résistant à la pluie légère, idéal campus, bureau et voyage.",
    colors: [{ id: "noir", name: "Noir", hex: "#1a1a1a" }],
    stock: 40,
  },
  {
    id: "p-charger65",
    slug: "chargeur-rapide-65w",
    name: "Chargeur rapide 65W",
    category: "electronique",
    price: 12990,
    compareAt: 15280,
    images: ["/images/products/charger-65w.jpg", "/images/products/charger-white.jpg"],
    rating: 4.8,
    reviewCount: 210,
    bestSeller: true,
    description: "Charge ultra-rapide USB-C pour téléphone, tablette et laptop.",
    longDescription:
      "GaN compact 65 W, compatible USB-C PD. Rechargez votre smartphone en un temps record, sans surchauffe.",
    stock: 80,
  },
  {
    id: "p-headphones",
    slug: "casque-audio-bluetooth",
    name: "Casque audio Bluetooth",
    category: "electronique",
    price: 18990,
    compareAt: 23740,
    images: ["/images/products/headphones.jpg"],
    rating: 4.7,
    reviewCount: 176,
    bestSeller: true,
    description: "Casque circum-aural, basses profondes et confort longue durée.",
    longDescription:
      "Coussinets moelleux, réduction de bruit passive et autonomie de 30 heures. Le compagnon idéal des trajets et du télétravail.",
    colors: [
      { id: "noir", name: "Noir", hex: "#111111" },
      { id: "creme", name: "Crème", hex: "#e8d9c4" },
    ],
    stock: 33,
  },
  {
    id: "p-tshirt",
    slug: "t-shirt-homme-premium",
    name: "T-shirt homme premium",
    category: "mode",
    price: 14990,
    compareAt: 19990,
    images: ["/images/products/tshirt.jpg"],
    rating: 4.4,
    reviewCount: 132,
    bestSeller: true,
    description: "Coton peigné, coupe régulière, finitions soignées.",
    longDescription:
      "Un basique haut de gamme qui garde sa forme au lavage. Doux, respirant, à porter seul ou sous une veste.",
    colors: [
      { id: "beige", name: "Beige", hex: "#d9c5a8" },
      { id: "blanc", name: "Blanc", hex: "#f4f4f4" },
      { id: "noir", name: "Noir", hex: "#1a1a1a" },
    ],
    stock: 70,
  },
  {
    id: "p-tablet",
    slug: "tablette-android-10",
    name: "Tablette Android 10\"",
    category: "high-tech",
    price: 79990,
    images: ["/images/products/tablet.jpg"],
    rating: 4.5,
    reviewCount: 86,
    isNew: true,
    description: "Tablette 10 pouces pour le travail, les cours et le divertissement.",
    longDescription:
      "Écran Full HD, 8 Go de RAM, 128 Go de stockage et batterie longue durée. Parfaite pour Netflix, la bureautique et la lecture.",
    specs: [
      { icon: "screen", label: "Écran 10\" Full HD" },
      { icon: "storage", label: "128 Go" },
      { icon: "battery", label: "Batterie 7000 mAh" },
    ],
    stock: 19,
  },
  {
    id: "p-perfume",
    slug: "parfum-homme",
    name: "Parfum homme",
    category: "beaute",
    price: 22990,
    images: ["/images/products/perfume.jpg"],
    rating: 4.6,
    reviewCount: 64,
    isNew: true,
    description: "Fragrance boisée et ambrée, tenue longue durée.",
    longDescription:
      "Des notes de bergamote, bois de cèdre et vanille. Un parfum distingué pour le jour comme pour le soir, en flacon cadeau.",
    stock: 45,
  },
  {
    id: "p-watch-woman",
    slug: "montre-connectee-femme",
    name: "Montre connectée femme",
    category: "accessoires",
    price: 21990,
    images: ["/images/products/watch-woman.jpg"],
    rating: 4.5,
    reviewCount: 53,
    isNew: true,
    description: "Bracelet fin, écran lumineux et suivi d'activité.",
    longDescription:
      "Élégante et légère, elle suit vos pas, votre sommeil et vos notifications. Plusieurs bracelets interchangeables.",
    colors: [
      { id: "or-rose", name: "Or rose", hex: "#d4a574" },
      { id: "or", name: "Or", hex: "#c9a227" },
    ],
    stock: 28,
  },
  {
    id: "p-smartphone",
    slug: "smartphone-5g-128-go",
    name: "Smartphone 5G 128 Go",
    category: "electronique",
    price: 249990,
    compareAt: 299990,
    images: [
      "/images/products/smartphone-blue.jpg",
      "/images/products/smartphone.jpg",
      "/images/products/smartphone-2.jpg",
      "/images/products/phone-case.jpg",
    ],
    rating: 4.6,
    reviewCount: 124,
    featured: true,
    bestSeller: true,
    description:
      "Un smartphone puissant et élégant, conçu pour vous offrir une expérience fluide et immersive. Idéal pour le travail, le divertissement et la créativité.",
    longDescription:
      "Processeur 5G dernière génération, écran AMOLED 120 Hz, triple capteur photo 50 MP et batterie 5000 mAh avec charge rapide. Un téléphone pensé pour durer, avec des finitions premium et une interface fluide au quotidien.",
    specs: [
      { icon: "screen", label: "Écran 6.7\" AMOLED" },
      { icon: "storage", label: "128 Go de stockage" },
      { icon: "camera", label: "Caméra 50 MP" },
      { icon: "battery", label: "Batterie 5000 mAh" },
    ],
    colors: [
      { id: "noir", name: "Noir", hex: "#1c1c1e" },
      { id: "bleu", name: "Bleu", hex: "#2f5f8a" },
      { id: "or", name: "Or", hex: "#c9a227" },
    ],
    stock: 14,
  },
  {
    id: "p-case",
    slug: "coque-de-protection",
    name: "Coque de protection",
    category: "accessoires",
    price: 9990,
    images: ["/images/products/phone-case.jpg"],
    rating: 4.4,
    reviewCount: 91,
    description: "Coque fine, coins renforcés, anti-rayures.",
    longDescription:
      "Protège votre smartphone des chocs du quotidien tout en restant élégante et légère. Accès intégral aux boutons et ports.",
    colors: [
      { id: "noir", name: "Noir", hex: "#1a1a1a" },
      { id: "transparent", name: "Transparent", hex: "#dfe3ea" },
    ],
    stock: 120,
  },
  {
    id: "p-charger-white",
    slug: "chargeur-rapide",
    name: "Chargeur rapide",
    category: "electronique",
    price: 12990,
    compareAt: 15990,
    images: ["/images/products/charger-white.jpg"],
    rating: 4.5,
    reviewCount: 67,
    description: "Chargeur USB-C compact pour une recharge quotidienne fiable.",
    longDescription: "Format voyage, protection contre les surtensions, compatible avec la plupart des smartphones.",
    stock: 90,
  },
  {
    id: "p-laptop",
    slug: "ordinateur-portable",
    name: "Ordinateur portable 14\"",
    category: "high-tech",
    price: 389990,
    compareAt: 449990,
    images: ["/images/products/laptop.jpg"],
    rating: 4.6,
    reviewCount: 41,
    description: "Ultrabook 14 pouces, SSD 512 Go, idéal bureautique et création.",
    longDescription:
      "Léger, silencieux, autonomie d'une journée. Parfait pour les professionnels, étudiants et créateurs nomades.",
    specs: [
      { icon: "screen", label: "Écran 14\" Full HD" },
      { icon: "storage", label: "SSD 512 Go" },
      { icon: "generic", label: "16 Go RAM" },
    ],
    stock: 8,
  },
  {
    id: "p-handbag",
    slug: "sac-a-main-cuir",
    name: "Sac à main structure",
    category: "mode",
    price: 28990,
    compareAt: 34990,
    images: ["/images/products/handbag.jpg"],
    rating: 4.7,
    reviewCount: 38,
    description: "Sac structuré en similicuir premium, anse et bandoulière.",
    longDescription: "Assez grand pour le quotidien, assez élégant pour le soir. Doublure soignée et compartiments pratiques.",
    colors: [
      { id: "beige", name: "Beige", hex: "#d7c4a8" },
      { id: "noir", name: "Noir", hex: "#1a1a1a" },
    ],
    stock: 18,
  },
  {
    id: "p-speaker",
    slug: "enceinte-bluetooth",
    name: "Enceinte Bluetooth portable",
    category: "electronique",
    price: 19990,
    compareAt: 24990,
    images: ["/images/products/speaker.jpg"],
    rating: 4.5,
    reviewCount: 102,
    description: "Son 360°, étanche, 12 heures d'autonomie.",
    longDescription: "Emportez votre musique partout : plage, terrasse, voyage. Pairing simple et basses surprenantes.",
    stock: 44,
  },
  {
    id: "p-lamp",
    slug: "lampe-de-chevet",
    name: "Lampe de chevet design",
    category: "maison",
    price: 15990,
    images: ["/images/products/lamp.jpg"],
    rating: 4.4,
    reviewCount: 29,
    isNew: true,
    description: "Éclairage chaud, abat-jour textile, pied bois.",
    longDescription: "Crée une ambiance douce dans la chambre ou le salon. Ampoule LED incluse.",
    stock: 26,
  },
  {
    id: "p-cream",
    slug: "creme-hydratante",
    name: "Crème hydratante visage",
    category: "beaute",
    price: 12990,
    images: ["/images/products/cream.jpg"],
    rating: 4.6,
    reviewCount: 77,
    description: "Soin quotidien, texture légère, pour tous types de peaux.",
    longDescription: "Formule enrichie pour hydrater 24 h sans effet gras. Idéale sous le maquillage ou seule.",
    stock: 60,
  },
  {
    id: "p-football",
    slug: "ballon-de-football",
    name: "Ballon de football",
    category: "sport",
    price: 9990,
    images: ["/images/products/football.jpg"],
    rating: 4.3,
    reviewCount: 48,
    description: "Ballon match, coutures renforcées, excellent rebond.",
    longDescription: "Pour l'entraînement et les matchs entre amis. Taille 5, compatible gazon et terrain synthétique.",
    stock: 35,
  },
  {
    id: "p-wallet",
    slug: "portefeuille-cuir",
    name: "Portefeuille cuir",
    category: "accessoires",
    price: 11990,
    images: ["/images/products/wallet.jpg"],
    rating: 4.5,
    reviewCount: 58,
    description: "Format compact, emplacements cartes et billets.",
    longDescription: "Cuir grainé, finitions soignées. Glisse dans la poche sans encombre.",
    colors: [{ id: "marron", name: "Marron", hex: "#6b3f2a" }],
    stock: 50,
  },
  {
    id: "p-mouse",
    slug: "souris-sans-fil",
    name: "Souris sans fil",
    category: "high-tech",
    price: 8990,
    images: ["/images/products/mouse.jpg"],
    rating: 4.4,
    reviewCount: 93,
    description: "Souris silencieuse, 2,4 GHz + Bluetooth, autonomie 6 mois.",
    longDescription: "Précise pour le bureau, discrète pour les réunions. Compatible Windows, macOS et Android.",
    stock: 75,
  },
  {
    id: "p-blender",
    slug: "mixeur-blender",
    name: "Mixeur blender",
    category: "maison",
    price: 34990,
    compareAt: 42990,
    images: ["/images/products/blender.jpg"],
    rating: 4.5,
    reviewCount: 31,
    description: "Blender puissant pour smoothies, sauces et soupes.",
    longDescription: "Bol en verre, lames inox, plusieurs vitesses. Un allié de la cuisine familiale.",
    stock: 16,
  },
  {
    id: "p-loafers",
    slug: "mocassins-homme",
    name: "Mocassins homme",
    category: "mode",
    price: 24990,
    compareAt: 29990,
    images: ["/images/products/loafers.jpg"],
    rating: 4.4,
    reviewCount: 27,
    description: "Mocassins habillés, semelle confort, cuir lisse.",
    longDescription: "Du bureau au week-end. Une chaussure polyvalente qui élève n'importe quelle tenue.",
    colors: [{ id: "noir", name: "Noir", hex: "#1a1a1a" }],
    stock: 21,
  },
  {
    id: "p-lipstick",
    slug: "rouge-a-levres",
    name: "Rouge à lèvres satin",
    category: "beaute",
    price: 7990,
    images: ["/images/products/lipstick.jpg"],
    rating: 4.6,
    reviewCount: 44,
    isNew: true,
    description: "Couleur intense, fini satin, hydratation 8 h.",
    longDescription: "Pigments riches, application facile, tenue confortable. Une touche de couleur pour toutes les carnations.",
    colors: [
      { id: "nude", name: "Nude", hex: "#c48a72" },
      { id: "rouge", name: "Rouge", hex: "#9b1c2c" },
    ],
    stock: 55,
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Mamadou S.",
    avatar: "/images/avatars/mamadou.jpg",
    rating: 5,
    text: "Produits de très bonne qualité et livraison rapide. Je recommande vivement DBS !",
    ago: "Il y a 2 jours",
  },
  {
    id: "t2",
    name: "Aïcha K.",
    avatar: "/images/avatars/aicha.jpg",
    rating: 5,
    text: "Service client au top, j'ai reçu mon colis en moins de 5 jours. Merci DBS !",
    ago: "Il y a 1 semaine",
  },
  {
    id: "t3",
    name: "Issa T.",
    avatar: "/images/avatars/issa.jpg",
    rating: 5,
    text: "Je suis très satisfait de mon achat. Le paiement via Orange Money est simple et rapide.",
    ago: "Il y a 2 semaines",
  },
];

export const FAQS = [
  {
    q: "Quels sont les délais de livraison ?",
    a: "La livraison se fait dans toute l'Afrique de l'Ouest sous 3 à 7 jours ouvrés selon la destination. Au Burkina Faso, comptez généralement 24 à 72 h après confirmation du paiement. Vous recevez un numéro de suivi par SMS et WhatsApp.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Nous acceptons Orange Money, Moov Money et Wave via DBS Payment, notre passerelle sécurisée. Le montant est débité uniquement après confirmation. Aucune saisie de carte bancaire n'est nécessaire.",
  },
  {
    q: "Puis-je retourner un produit ?",
    a: "Oui. Vous disposez de 7 jours après réception pour demander un retour si l'article est non utilisé, dans son emballage d'origine. Les articles défectueux sont échangés ou remboursés intégralement.",
  },
  {
    q: "Comment suivre ma commande ?",
    a: "Rendez-vous dans Suivi de commande et saisissez votre numéro (ex. #DBS10324) ainsi que votre numéro de téléphone. Vous pouvez aussi écrire à notre service client WhatsApp, disponible 7j/7.",
  },
];

export const PRODUCT_REVIEWS: Record<string, Review[]> = {
  "p-smartphone": [
    {
      id: "r1",
      author: "Fatou B.",
      city: "Ouagadougou",
      rating: 5,
      date: "12 sept. 2025",
      title: "Excellent rapport qualité-prix",
      body: "L'écran est magnifique, la batterie tient vraiment la journée. Livraison en 4 jours, très satisfaite.",
    },
    {
      id: "r2",
      author: "Jean-Marc O.",
      city: "Bobo-Dioulasso",
      rating: 4,
      date: "3 sept. 2025",
      title: "Fluide et beau",
      body: "Le 5G est un vrai plus. L'appareil photo est bon en journée. Seul bémol : un peu glissant sans coque.",
    },
    {
      id: "r3",
      author: "Awa N.",
      city: "Koudougou",
      rating: 5,
      date: "28 août 2025",
      title: "Je recommande",
      body: "Payé en Orange Money sans souci. Le téléphone est neuf, scellé, exactement comme sur le site.",
    },
  ],
};

export const PROMO_CODES: Record<string, { type: "percent" | "fixed"; value: number; label: string }> = {
  DBS10: { type: "percent", value: 10, label: "10 % de réduction" },
  WELCOME: { type: "percent", value: 15, label: "15 % de bienvenue" },
  AFRICA: { type: "fixed", value: 5000, label: "5 000 FCFA de remise" },
};

export const SHIPPING_FEE = 5000;
export const FREE_SHIPPING_FROM = 400000;
export const WHATSAPP_NUMBER = "22670000000";
export const WHATSAPP_TEXT = encodeURIComponent(
  "Bonjour Digital Business Store, j'ai une question concernant une commande.",
);

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function productsInCategory(slug: CategorySlug) {
  if (slug === "mode") {
    return PRODUCTS.filter((p) => p.category === "mode" || p.category === "accessoires");
  }
  if (slug === "maison") {
    return PRODUCTS.filter((p) => p.category === "maison");
  }
  return PRODUCTS.filter((p) => p.category === slug);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter((p) => {
    const cat = CATEGORIES.find((c) => c.slug === p.category)?.name ?? "";
    return `${p.name} ${p.description} ${cat}`.toLowerCase().includes(q);
  });
}

export function similarProducts(product: Product, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.featured))
    .slice(0, limit);
}

export function featuredProducts() {
  return PRODUCTS.filter((p) => p.featured).slice(0, 5);
}

export function bestSellers() {
  return PRODUCTS.filter((p) => p.bestSeller).slice(0, 3);
}

export function newArrivals() {
  return PRODUCTS.filter((p) => p.isNew).slice(0, 3);
}

export function promoProducts() {
  return PRODUCTS.filter((p) => p.compareAt && p.compareAt > p.price);
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
