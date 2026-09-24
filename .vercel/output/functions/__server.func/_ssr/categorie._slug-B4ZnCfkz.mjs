import { V as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as productsInCategory, p as getCategory, t as CATEGORIES } from "./catalog-DE7Vi_Xf.mjs";
import { n as ProductGrid } from "./product-card-ChN5g9JZ.mjs";
import { r as Route$1 } from "./router-BBVNCsl4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categorie._slug-B4ZnCfkz.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { slug } = Route$1.useParams();
	const cat = getCategory(slug);
	const products = cat ? productsInCategory(slug) : [];
	if (!cat) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-xl font-bold",
			children: "Catégorie introuvable"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/boutique",
			className: "mt-4 inline-block text-sm font-semibold text-gold-deep",
			children: "Voir toute la boutique"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "no-underline hover:text-ink",
						children: "Accueil"
					}),
					" ",
					"› ",
					cat.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-2xl font-bold",
				children: cat.navLabel ?? cat.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: cat.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/categorie/$slug",
					params: { slug: c.slug },
					className: `rounded-full px-3 py-1 text-xs font-medium no-underline ${c.slug === cat.slug ? "bg-ink text-white" : "bg-surface text-ink ring-1 ring-line"}`,
					children: c.name
				}, c.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products })
			})
		]
	});
}
//#endregion
export { CategoryPage as component };
