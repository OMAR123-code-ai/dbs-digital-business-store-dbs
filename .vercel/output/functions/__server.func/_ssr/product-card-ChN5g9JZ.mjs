import { V as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatFcfa, r as cn, t as discountPercent } from "./money-D6QbAXaQ.mjs";
import { n as useShop } from "./shop-C0Pv3fJc.mjs";
import { c as Star } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-ChN5g9JZ.js
var import_jsx_runtime = require_jsx_runtime();
function Stars({ value, size = 13, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-0.5", className),
		"aria-label": `${value} sur 5`,
		children: Array.from({ length: 5 }).map((_, i) => {
			const filled = value >= i + .5;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				size,
				className: filled ? "text-star" : "text-line-strong",
				fill: filled ? "currentColor" : "none",
				strokeWidth: 1.6
			}, i);
		})
	});
}
function ProductCard({ product, compact = false }) {
	const addToCart = useShop((s) => s.addToCart);
	const off = discountPercent(product.price, product.compareAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col rounded-xl border border-line bg-surface p-3 shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-float)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/produit/$slug",
			params: { slug: product.slug },
			className: "relative block overflow-hidden rounded-lg bg-paper",
			children: [off ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute left-2 top-2 z-10 rounded-md bg-sale px-1.5 py-0.5 text-[11px] font-bold text-white",
				children: [
					"-",
					off,
					"%"
				]
			}) : product.isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-2 top-2 z-10 rounded-md bg-success px-1.5 py-0.5 text-[11px] font-bold text-white",
				children: "Nouveau"
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.images[0],
				alt: product.name,
				className: "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/produit/$slug",
					params: { slug: product.slug },
					className: "text-[13px] font-medium leading-snug text-ink no-underline hover:text-gold-deep",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: product.rating }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] text-subtle",
						children: [
							"(",
							product.reviewCount,
							")"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[15px] font-bold tabular-nums text-ink",
						children: formatFcfa(product.price)
					}), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[12px] tabular-nums text-subtle line-through",
						children: formatFcfa(product.compareAt)
					}) : null]
				}),
				!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						addToCart(product, 1, product.colors?.[0]?.id);
						toast.success(`${product.name} ajouté au panier`);
					},
					className: cn("mt-3 w-full rounded-full bg-gold py-2 text-[13px] font-semibold text-gold-fg", "transition-colors duration-150 hover:bg-gold-hover"),
					children: "Ajouter au panier"
				}) : null
			]
		})]
	});
}
function ProductGrid({ products }) {
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl border border-dashed border-line bg-surface px-6 py-16 text-center text-sm text-muted",
		children: "Aucun produit ne correspond à votre recherche."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
		children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	});
}
//#endregion
export { ProductGrid as n, Stars as r, ProductCard as t };
