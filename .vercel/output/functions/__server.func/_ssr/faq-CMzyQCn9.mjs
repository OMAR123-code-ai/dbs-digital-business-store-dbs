import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as FAQS } from "./catalog-DE7Vi_Xf.mjs";
import { P as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-CMzyQCn9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	const extra = [
		...FAQS,
		{
			q: "Livrez-vous hors du Burkina Faso ?",
			a: "Oui. Nous livrons dans toute l'Afrique de l'Ouest (Côte d'Ivoire, Mali, Niger, Togo, Bénin, Sénégal, Ghana, etc.). Les délais varient de 3 à 7 jours ouvrés."
		},
		{
			q: "Les produits sont-ils garantis ?",
			a: "Les produits électroniques bénéficient d'une garantie constructeur ou DBS de 3 à 12 mois selon l'article. Les détails figurent sur la fiche produit."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: "Questions fréquentes"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 rounded-xl border border-line bg-surface",
			children: extra.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-line px-5 last:border-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full items-center justify-between py-4 text-left text-sm font-medium",
					onClick: () => setOpen(open === idx ? -1 : idx),
					children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
						size: 16,
						className: open === idx ? "rotate-180" : ""
					})]
				}), open === idx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-4 text-sm leading-relaxed text-muted",
					children: f.a
				}) : null]
			}, f.q))
		})]
	});
}
//#endregion
export { FaqPage as component };
