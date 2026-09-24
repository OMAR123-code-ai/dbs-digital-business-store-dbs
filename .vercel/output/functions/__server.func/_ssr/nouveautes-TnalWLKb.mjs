import { V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PRODUCTS } from "./catalog-DE7Vi_Xf.mjs";
import { n as ProductGrid } from "./product-card-ChN5g9JZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nouveautes-TnalWLKb.js
var import_jsx_runtime = require_jsx_runtime();
function NewPage() {
	const products = PRODUCTS.filter((p) => p.isNew);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Nouveautés"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Les dernières arrivées Digital Business Store."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products })
			})
		]
	});
}
//#endregion
export { NewPage as component };
