import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PRODUCT_REVIEWS, b as similarProducts, m as getProduct, p as getCategory } from "./catalog-DE7Vi_Xf.mjs";
import { n as formatFcfa, t as discountPercent } from "./money-D6QbAXaQ.mjs";
import { n as useShop } from "./shop-C0Pv3fJc.mjs";
import { A as HardDrive, I as Camera, L as Battery, p as Shield, v as Monitor } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as Stars, t as ProductCard } from "./product-card-ChN5g9JZ.mjs";
import { c as QtyControl, n as Route } from "./router-BBVNCsl4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/produit._slug-DHpPLvoj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	const navigate = useNavigate();
	const addToCart = useShop((s) => s.addToCart);
	const addReview = useShop((s) => s.addReview);
	const userReviews = useShop((s) => s.userReviews);
	const account = useShop((s) => s.account);
	const [image, setImage] = (0, import_react.useState)(0);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [color, setColor] = (0, import_react.useState)(product?.colors?.[0]?.id);
	const [tab, setTab] = (0, import_react.useState)("desc");
	const extras = (0, import_react.useMemo)(() => {
		if (!product) return [];
		return userReviews.filter((r) => r.productId === product.id);
	}, [userReviews, product]);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-xl font-bold",
			children: "Produit introuvable"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/boutique",
			className: "mt-4 inline-block text-sm font-semibold text-gold-deep",
			children: "Retour à la boutique"
		})]
	});
	const cat = getCategory(product.category);
	const off = discountPercent(product.price, product.compareAt);
	const reviews = [...extras.map((r) => ({
		id: r.date + r.author,
		author: r.author,
		city: "",
		rating: r.rating,
		date: r.date,
		title: r.title,
		body: r.body
	})), ...PRODUCT_REVIEWS[product.id] ?? []];
	const similar = similarProducts(product);
	const specIcon = {
		screen: Monitor,
		storage: HardDrive,
		camera: Camera,
		battery: Battery,
		generic: Shield
	};
	function buyNow() {
		if (!product) return;
		addToCart(product, qty, color);
		navigate({ to: "/paiement" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-5 text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "no-underline hover:text-ink",
						children: "Accueil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-1",
						children: "›"
					}),
					cat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/categorie/$slug",
						params: { slug: cat.slug },
						className: "no-underline hover:text-ink",
						children: cat.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-1",
						children: "›"
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink",
						children: product.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.05fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden w-16 shrink-0 flex-col gap-2 sm:flex",
						children: product.images.map((src, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setImage(idx),
							className: `overflow-hidden rounded-md border ${image === idx ? "border-gold" : "border-line"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								className: "aspect-square w-full object-cover"
							})
						}, src + idx))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-80 flex-1 overflow-hidden rounded-xl border border-line bg-surface",
						children: [off ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute left-3 top-3 z-10 rounded-md bg-sale px-2 py-0.5 text-xs font-bold text-white",
							children: [
								"-",
								off,
								"%"
							]
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[image],
							alt: product.name,
							className: "h-full w-full object-contain p-6"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
							value: product.rating,
							size: 15
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted",
							children: [
								"(",
								product.reviewCount,
								" avis)"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-extrabold tabular-nums",
							children: formatFcfa(product.price)
						}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base text-subtle line-through tabular-nums",
							children: formatFcfa(product.compareAt)
						}), off ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-md bg-sale/10 px-2 py-0.5 text-xs font-bold text-sale",
							children: [
								"-",
								off,
								"%"
							]
						}) : null] }) : null]
					}),
					product.specs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2",
						children: product.specs.map((s) => {
							const Icon = specIcon[s.icon];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-sm text-ink-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 16,
									className: "text-muted"
								}), s.label]
							}, s.label);
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted",
						children: product.description
					}),
					product.colors && product.colors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 text-sm font-medium",
							children: ["Couleur : ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "capitalize",
								children: product.colors.find((c) => c.id === color)?.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": c.name,
								onClick: () => setColor(c.id),
								className: `h-7 w-7 rounded-full border-2 ${color === c.id ? "border-gold" : "border-line-strong"}`,
								style: { background: c.hex }
							}, c.id))
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Quantité :"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
								value: qty,
								max: product.stock,
								onChange: setQty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [product.stock, " en stock"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								addToCart(product, qty, color);
								toast.success("Ajouté au panier");
							},
							className: "flex-1 rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg hover:bg-gold-hover",
							children: "Ajouter au panier"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: buyNow,
							className: "flex-1 rounded-full bg-ink py-3 text-sm font-semibold text-white hover:bg-ink-soft",
							children: "Acheter maintenant"
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 border-b border-line",
				children: [
					["desc", "Description"],
					["avis", `Avis (${product.reviewCount + extras.length})`],
					["liv", "Livraison"],
					["ret", "Retours"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: `mr-5 border-b-2 py-3 text-sm font-medium ${tab === id ? "border-gold text-ink" : "border-transparent text-muted"}`,
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-6",
				children: [
					tab === "desc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-3xl text-sm leading-relaxed text-ink-soft",
						children: product.longDescription
					}) : null,
					tab === "liv" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-3xl text-sm leading-relaxed text-ink-soft",
						children: "Livraison sous 3 à 7 jours dans toute l'Afrique de l'Ouest. Frais de 5 000 FCFA, offerts dès 400 000 FCFA d'achat. Suivi par SMS et WhatsApp dès l'expédition."
					}) : null,
					tab === "ret" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-3xl text-sm leading-relaxed text-ink-soft",
						children: "Retours acceptés sous 7 jours si le produit est non utilisé, dans son emballage d'origine. Les articles défectueux sont échangés ou remboursés intégralement via votre moyen de paiement (Orange Money, Moov Money ou Wave)."
					}) : null,
					tab === "avis" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[1.2fr_0.8fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: reviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-muted",
								children: "Soyez le premier à donner votre avis."
							}) : reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-xl border border-line bg-surface p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-semibold",
											children: [
												r.author,
												" ",
												r.city ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-normal text-muted",
													children: ["· ", r.city]
												}) : null
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: r.rating })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-medium",
										children: r.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: r.body
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[11px] text-subtle",
										children: r.date
									})
								]
							}, r.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "h-fit rounded-xl border border-line bg-surface p-4",
							onSubmit: (e) => {
								e.preventDefault();
								const fd = new FormData(e.currentTarget);
								addReview({
									productId: product.id,
									author: String(fd.get("author") || account.name || "Client DBS"),
									rating: Number(fd.get("rating") || 5),
									title: String(fd.get("title") || "Mon avis"),
									body: String(fd.get("body") || ""),
									date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")
								});
								toast.success("Merci pour votre avis");
								e.currentTarget.reset();
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold",
									children: "Laisser un avis"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "author",
									placeholder: "Votre nom",
									defaultValue: account.name,
									className: "mt-3 h-10 w-full rounded-md border border-line px-3 text-sm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "rating",
									defaultValue: "5",
									className: "mt-2 h-10 w-full rounded-md border border-line px-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "5",
											children: "5 étoiles"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "4",
											children: "4 étoiles"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "3",
											children: "3 étoiles"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "2",
											children: "2 étoiles"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "1",
											children: "1 étoile"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "title",
									required: true,
									placeholder: "Titre",
									className: "mt-2 h-10 w-full rounded-md border border-line px-3 text-sm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "body",
									required: true,
									rows: 4,
									placeholder: "Votre expérience",
									className: "mt-2 w-full rounded-md border border-line px-3 py-2 text-sm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "mt-3 w-full rounded-full bg-gold py-2 text-sm font-semibold text-gold-fg",
									children: "Publier"
								})
							]
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-lg font-bold",
					children: "Produits similaires"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: similar.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						compact: true
					}, p.id))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
