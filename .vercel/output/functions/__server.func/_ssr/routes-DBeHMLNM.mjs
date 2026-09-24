import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TESTIMONIALS, d as bestSellers, f as featuredProducts, g as newArrivals, n as FAQS } from "./catalog-DE7Vi_Xf.mjs";
import { F as Check, P as ChevronDown, R as ArrowRight, a as Truck, b as MessageCircle, k as Headphones, m as ShieldCheck } from "../_libs/lucide-react.mjs";
import { r as Stars, t as ProductCard } from "./product-card-ChN5g9JZ.mjs";
import { s as CategoryIconGrid } from "./router-BBVNCsl4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBeHMLNM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIconGrid, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRow, {
			title: "Produits en vedette",
			href: "/boutique",
			products: featuredProducts()
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collections, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRow, {
					title: "Meilleures ventes",
					href: "/boutique",
					products: bestSellers(),
					nested: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductRow, {
					title: "Nouveautés",
					href: "/nouveautes",
					products: newArrivals(),
					nested: true
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProof, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAndNewsletter, {})
	] });
}
function Hero() {
	const slides = [
		{
			image: "/images/heroes/hero-main.jpg",
			kicker: "Électronique  ·  Mode & Accessoires  ·  Maison  ·  Lifestyle",
			title: "Des produits de qualité",
			accent: "pour un quotidien meilleur"
		},
		{
			image: "/images/heroes/hero-audio.jpg",
			kicker: "High-Tech  ·  Audio  ·  5G",
			title: "La tech qui avance",
			accent: "avec vous, partout en Afrique"
		},
		{
			image: "/images/heroes/hero-fashion.jpg",
			kicker: "Mode  ·  Style  ·  Élégance",
			title: "Le style accessible",
			accent: "sans compromettre la qualité"
		}
	];
	const [i, setI] = (0, import_react.useState)(0);
	const slide = slides[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-2xl bg-ink text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slide.image,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative grid min-h-[340px] items-center px-6 py-10 sm:min-h-[420px] sm:px-12 lg:min-h-[460px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-sans text-3xl font-extrabold leading-tight sm:text-5xl",
								children: [slide.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-gold",
									children: slide.accent
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs tracking-wide text-white/70 sm:text-sm",
								children: slide.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/boutique",
								className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-fg no-underline hover:bg-gold-hover",
								children: ["Découvrir maintenant", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid grid-cols-2 gap-3 border-t border-white/10 bg-ink/70 px-4 py-4 backdrop-blur-sm sm:grid-cols-4 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
							icon: Check,
							title: "Meilleure qualité",
							sub: "Garantie"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
							icon: Truck,
							title: "Livraison rapide",
							sub: "Partout en Afrique"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
							icon: ShieldCheck,
							title: "Paiement sécurisé",
							sub: "DBS Payment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
							icon: Headphones,
							title: "Assistance 7j/7",
							sub: "WhatsApp & Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-24 left-1/2 hidden -translate-x-1/2 gap-1.5 sm:flex",
					children: slides.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Slide ${idx + 1}`,
						onClick: () => setI(idx),
						className: `h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-gold" : "w-1.5 bg-white/50"}`
					}, idx))
				})
			]
		})
	});
}
function Trust({ icon: Icon, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 16 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs font-semibold text-white",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] text-white/60",
			children: sub
		})] })]
	});
}
function ProductRow({ title, href, products, nested = false }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex items-end justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-bold sm:text-xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: href,
			className: "text-sm font-medium text-muted no-underline hover:text-gold-deep",
			children: "Voir tout →"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: nested ? "grid grid-cols-3 gap-3" : "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
		children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
			product: p,
			compact: nested
		}, p.id))
	})] });
	if (nested) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: inner });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-6",
		children: inner
	});
}
function Collections() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: [
				{
					slug: "electronique",
					title: "Collection Électronique",
					sub: "Technologie et innovation",
					image: "/images/collections/electronique.jpg"
				},
				{
					slug: "mode",
					title: "Collection Mode",
					sub: "Style & Élégance",
					image: "/images/collections/mode.jpg"
				},
				{
					slug: "maison",
					title: "Maison & Lifestyle",
					sub: "Confort au quotidien",
					image: "/images/collections/maison.jpg"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/categorie/$slug",
				params: { slug: c.slug },
				className: "group relative min-h-44 overflow-hidden rounded-xl no-underline",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.image,
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full min-h-44 flex-col justify-end p-5 text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/75",
								children: c.sub
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm",
								children: ["Découvrir ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })]
							})
						]
					})
				]
			}, c.slug))
		})
	});
}
function SocialProof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-bold sm:text-xl",
				children: "Ce que disent nos clients"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/faq",
				className: "text-sm font-medium text-muted no-underline hover:text-gold-deep",
				children: "Voir tous les avis →"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-4",
			children: [TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-surface p-4 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.avatar,
							alt: "",
							className: "h-10 w-10 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: t.rating })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-ink-soft",
						children: t.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[11px] text-subtle",
						children: t.ago
					})
				]
			}, t.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col justify-center gap-4 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofLine, {
						icon: Truck,
						title: "Livraison rapide",
						sub: "Dans toute l'Afrique"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofLine, {
						icon: ShieldCheck,
						title: "Paiement sécurisé",
						sub: "DBS Payment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofLine, {
						icon: MessageCircle,
						title: "Service client",
						sub: "7j/7 - 24h/24"
					})
				]
			})]
		})]
	});
}
function ProofLine({ icon: Icon, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-10 w-10 place-items-center rounded-full bg-gold-soft text-gold-deep",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted",
			children: sub
		})] })]
	});
}
function FaqAndNewsletter() {
	const [open, setOpen] = (0, import_react.useState)(0);
	const [email, setEmail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_1.3fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-lg font-bold",
						children: "Questions fréquentes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: FAQS.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(open === idx ? null : idx),
							className: "flex w-full items-center justify-between py-3 text-left text-sm font-medium",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								size: 16,
								className: open === idx ? "rotate-180" : ""
							})]
						}), open === idx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-3 text-sm leading-relaxed text-muted",
							children: f.a
						}) : null]
					}, f.q)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/faq",
						className: "mt-4 inline-block text-sm font-semibold text-gold-deep no-underline",
						children: "Voir toutes les FAQ →"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl bg-ink text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-[1.1fr_0.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "p-6 sm:p-8",
						onSubmit: (e) => {
							e.preventDefault();
							setDone(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: "Restez informé de nos offres exclusives"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/70",
								children: "Inscrivez-vous à notre newsletter et recevez nos meilleures offres."
							}),
							done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 rounded-lg bg-white/10 px-4 py-3 text-sm",
								children: "Merci ! Votre inscription est confirmée."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-2 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "Votre adresse e-mail",
									className: "h-11 flex-1 rounded-full border-0 bg-white px-4 text-sm text-ink outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "h-11 rounded-full bg-gold px-5 text-sm font-semibold text-gold-fg hover:bg-gold-hover",
									children: "S'abonner"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-48",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/heroes/newsletter.jpg",
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-l from-transparent to-ink/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "absolute bottom-4 left-4 right-4 text-sm font-semibold leading-snug",
								children: "Les meilleures offres, directement dans votre boîte !"
							})
						]
					})]
				})
			})]
		})
	});
}
//#endregion
export { Home as component };
