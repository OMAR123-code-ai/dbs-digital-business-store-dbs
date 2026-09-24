import { V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as searchProducts } from "./catalog-DE7Vi_Xf.mjs";
import { n as ProductGrid } from "./product-card-ChN5g9JZ.mjs";
import { a as Route$4 } from "./router-BBVNCsl4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recherche-DHzrFW2X.js
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { q = "" } = Route$4.useSearch();
	const products = searchProducts(q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Recherche"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					products.length,
					" résultat",
					products.length > 1 ? "s" : "",
					" pour « ",
					q,
					" »"
				] }) : "Saisissez un mot-clé dans la barre de recherche."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products })
			})
		]
	});
}
//#endregion
export { SearchPage as component };
