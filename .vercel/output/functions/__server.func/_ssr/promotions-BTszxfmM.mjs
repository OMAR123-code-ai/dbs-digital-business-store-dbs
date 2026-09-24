import { V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as promoProducts } from "./catalog-DE7Vi_Xf.mjs";
import { n as ProductGrid } from "./product-card-ChN5g9JZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/promotions-BTszxfmM.js
var import_jsx_runtime = require_jsx_runtime();
function PromotionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 rounded-2xl bg-ink px-6 py-8 text-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold",
					children: "Offre exclusive"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-bold",
					children: "Jusqu'à -50% sur une sélection d'articles"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 max-w-xl text-sm text-white/70",
					children: [
						"Codes promo : ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-gold",
							children: "DBS10"
						}),
						" (−10%),",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-gold",
							children: "WELCOME"
						}),
						" (−15%),",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-gold",
							children: "AFRICA"
						}),
						" (−5 000 FCFA)."
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: promoProducts() })]
	});
}
//#endregion
export { PromotionsPage as component };
