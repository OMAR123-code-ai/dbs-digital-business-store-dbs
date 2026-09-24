import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useShop } from "./shop-C0Pv3fJc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/panier-DYbR_q6o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PanierPage() {
	const open = useShop((s) => s.openCart);
	(0, import_react.useEffect)(() => {
		open();
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: "Panier"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Votre panier s'ouvre sur la droite. Ajoutez des articles depuis la boutique."
		})]
	});
}
//#endregion
export { PanierPage as component };
