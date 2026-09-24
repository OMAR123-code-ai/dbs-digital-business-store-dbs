import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatFcfa } from "./money-D6QbAXaQ.mjs";
import { n as useShop } from "./shop-C0Pv3fJc.mjs";
import { i as Route$2 } from "./router-BBVNCsl4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/suivi-BRlAyJPX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackingPage() {
	const { id: qid = "" } = Route$2.useSearch();
	const orders = useShop((s) => s.orders);
	const [query, setQuery] = (0, import_react.useState)(qid);
	const [phone, setPhone] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(Boolean(qid));
	const order = (0, import_react.useMemo)(() => {
		if (!submitted) return void 0;
		const needle = query.replace("#", "").trim().toUpperCase();
		return orders.find((o) => o.id.toUpperCase() === needle || `#${o.id}` === query.trim().toUpperCase());
	}, [
		orders,
		query,
		submitted
	]);
	const steps = [
		"Payée",
		"Préparation",
		"Expédiée",
		"Livrée"
	];
	const current = order?.status === "delivered" ? 3 : order?.status === "shipped" ? 2 : order?.status === "preparing" ? 1 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Suivi de commande"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 space-y-3 rounded-xl border border-line bg-surface p-5",
				onSubmit: (e) => {
					e.preventDefault();
					setSubmitted(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "N° commande (ex. DBS10324)",
						className: "h-10 w-full rounded-md border border-line px-3 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: phone,
						onChange: (e) => setPhone(e.target.value),
						placeholder: "Téléphone (optionnel)",
						className: "h-10 w-full rounded-md border border-line px-3 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full rounded-full bg-gold py-2.5 text-sm font-semibold text-gold-fg",
						children: "Suivre"
					})
				]
			}),
			submitted && !order ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Aucune commande trouvée. Vérifiez le numéro ou passez commande depuis votre panier."
			}) : null,
			order ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						children: ["#", order.id]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: new Date(order.createdAt).toLocaleString("fr-FR")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg font-bold tabular-nums",
						children: formatFcfa(order.total)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 grid grid-cols-4 gap-2 text-center text-[11px]",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: i <= current ? "font-semibold text-gold-deep" : "text-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mx-auto mb-1 block h-2 w-2 rounded-full ${i <= current ? "bg-gold" : "bg-line"}` }), s]
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-1 text-sm",
						children: order.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								i.name,
								" × ",
								i.qty
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatFcfa(i.price * i.qty)
							})]
						}, i.key))
					})
				]
			}) : null
		]
	});
}
//#endregion
export { TrackingPage as component };
