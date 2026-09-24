import { V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/a-propos-Dxs_kZmx.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep",
				children: "Digital Business Store"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-bold",
				children: "L'innovation au service de votre quotidien"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-ink-soft",
				children: "DBS est une boutique en ligne née à Ouagadougou, pensée pour l'Afrique. Nous sélectionnons des produits électroniques, mode, maison et lifestyle de qualité, livrés rapidement dans toute la région, avec un paiement mobile simple : Orange Money, Moov Money et Wave."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-3",
				children: [
					["Meilleure qualité", "Chaque article est contrôlé avant expédition."],
					["Livraison Afrique", "Réseau logistique dans toute l'Afrique de l'Ouest."],
					["DBS Payment", "Passerelle sécurisée, sans carte bancaire obligatoire."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: d
					})]
				}, t))
			})
		]
	});
}
//#endregion
export { AboutPage as component };
