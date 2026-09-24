import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useShop } from "./shop-C0Pv3fJc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compte-CbTuSdjI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ComptePage() {
	const setOpen = useShop((s) => s.setAccountOpen);
	(0, import_react.useEffect)(() => {
		setOpen(true);
	}, [setOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: "Votre compte"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Le panneau compte s'ouvre à droite. Renseignez vos informations pour accélérer le paiement et consulter vos commandes."
		})]
	});
}
//#endregion
export { ComptePage as component };
