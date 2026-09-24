import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PRODUCTS, t as CATEGORIES } from "./catalog-DE7Vi_Xf.mjs";
import { n as ProductGrid } from "./product-card-ChN5g9JZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/boutique-B3ZuEBzF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const [cat, setCat] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("pop");
	const products = (0, import_react.useMemo)(() => {
		let list = cat === "all" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === cat);
		if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
		if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
		if (sort === "new") list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
		if (sort === "pop") list.sort((a, b) => b.reviewCount - a.reviewCount);
		return list;
	}, [cat, sort]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Boutique"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Tous les produits Digital Business Store, en un seul endroit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCat("all"),
						className: `rounded-full px-3 py-1 text-xs font-medium ${cat === "all" ? "bg-ink text-white" : "bg-surface ring-1 ring-line"}`,
						children: "Tout"
					}),
					CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCat(c.slug),
						className: `rounded-full px-3 py-1 text-xs font-medium ${cat === c.slug ? "bg-ink text-white" : "bg-surface ring-1 ring-line"}`,
						children: c.name
					}, c.slug)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sort,
						onChange: (e) => setSort(e.target.value),
						className: "ml-auto h-8 rounded-full border border-line bg-surface px-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "pop",
								children: "Popularité"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "new",
								children: "Nouveautés"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-asc",
								children: "Prix croissant"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "price-desc",
								children: "Prix décroissant"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products })
			})
		]
	});
}
//#endregion
export { ShopPage as component };
