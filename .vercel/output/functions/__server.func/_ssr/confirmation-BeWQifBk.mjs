import { V as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatFcfa } from "./money-D6QbAXaQ.mjs";
import { n as useShop } from "./shop-C0Pv3fJc.mjs";
import { N as CircleCheck } from "../_libs/lucide-react.mjs";
import { o as Route$12 } from "./router-BBVNCsl4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confirmation-BeWQifBk.js
var import_jsx_runtime = require_jsx_runtime();
function ConfirmationPage() {
	const { id } = Route$12.useSearch();
	const orders = useShop((s) => s.orders);
	const lastOrderId = useShop((s) => s.lastOrderId);
	const order = orders.find((o) => o.id === (id ?? lastOrderId));
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-xl font-bold",
			children: "Commande introuvable"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/suivi",
			className: "mt-4 inline-block text-sm font-semibold text-gold-deep",
			children: "Suivre une commande"
		})]
	});
	const methodLabel = order.method === "orange" ? "Orange Money" : order.method === "moov" ? "Moov Money" : "Wave";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-lg px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-line bg-surface p-8 text-center shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "mx-auto text-success",
					size: 48
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-2xl font-bold",
					children: "Paiement confirmé"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"Merci ",
						order.account.name || "",
						". Votre commande ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-ink",
							children: ["#", order.id]
						}),
						" a été payée via ",
						methodLabel,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg font-bold tabular-nums",
					children: formatFcfa(order.total)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2 text-left text-sm",
					children: order.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between border-b border-line py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							i.name,
							" × ",
							i.qty
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatFcfa(i.price * i.qty)
						})]
					}, i.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs text-muted",
					children: [
						"Un reçu a été enregistré sur cet appareil. Conservez le numéro #",
						order.id,
						" pour le suivi."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/suivi",
						search: { id: order.id },
						className: "rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg no-underline hover:bg-gold-hover",
						children: "Suivre ma commande"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/boutique",
						className: "rounded-full border border-line py-3 text-sm font-semibold text-ink no-underline",
						children: "Continuer vos achats"
					})]
				})
			]
		})
	});
}
//#endregion
export { ConfirmationPage as component };
