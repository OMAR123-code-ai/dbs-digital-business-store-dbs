import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatFcfa, r as cn } from "./money-D6QbAXaQ.mjs";
import { n as useShop, t as cartTotals } from "./shop-C0Pv3fJc.mjs";
import { F as Check, m as ShieldCheck, t as Zap, w as Lock } from "../_libs/lucide-react.mjs";
import { l as DbsMark } from "./router-BBVNCsl4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paiement-BIf5U6lT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var METHODS = [
	{
		id: "orange",
		name: "Orange Money",
		hint: "Paiement mobile Orange",
		color: "bg-orange-money",
		glyph: "OM"
	},
	{
		id: "moov",
		name: "Moov Money",
		hint: "Paiement mobile Moov Africa",
		color: "bg-moov",
		glyph: "M"
	},
	{
		id: "wave",
		name: "Wave",
		hint: "Paiement Wave",
		color: "bg-wave",
		glyph: "~"
	}
];
function CheckoutPage() {
	const navigate = useNavigate();
	const items = useShop((s) => s.items);
	const account = useShop((s) => s.account);
	const saveAccount = useShop((s) => s.saveAccount);
	const appliedPromo = useShop((s) => s.appliedPromo);
	const placeOrder = useShop((s) => s.placeOrder);
	const totals = cartTotals(items, appliedPromo);
	const [method, setMethod] = (0, import_react.useState)("orange");
	const [phone, setPhone] = (0, import_react.useState)(account.phone);
	const [name, setName] = (0, import_react.useState)(account.name);
	const [city, setCity] = (0, import_react.useState)(account.city);
	const [address, setAddress] = (0, import_react.useState)(account.address);
	const [step, setStep] = (0, import_react.useState)("form");
	const [error, setError] = (0, import_react.useState)("");
	const previewId = (0, import_react.useMemo)(() => {
		return `DBS10324`;
	}, []);
	if (items.length === 0 && step !== "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-xl font-bold",
			children: "Votre panier est vide"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/boutique",
			className: "mt-4 inline-block text-sm font-semibold text-gold-deep",
			children: "Continuer vos achats"
		})]
	});
	function onContinue(e) {
		e.preventDefault();
		if (!name.trim() || !phone.trim() || !city.trim()) {
			setError("Merci de renseigner nom, téléphone et ville.");
			return;
		}
		saveAccount({
			name,
			phone,
			city,
			address
		});
		setError("");
		setStep("pay");
	}
	function pay() {
		if (phone.replace(/\D/g, "").length < 8) {
			setError("Indiquez un numéro de téléphone mobile valide.");
			return;
		}
		setError("");
		setStep("wait");
		window.setTimeout(() => {
			const order = placeOrder(method, phone);
			navigate({
				to: "/confirmation",
				search: { id: order.id }
			});
		}, 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-lg px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-float)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between bg-ink px-5 py-4 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DbsMark, { className: "h-8 w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold tracking-[0.14em] uppercase text-gold",
							children: "DBS Payment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-white/55",
							children: "Paiement sécurisé"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
						size: 16,
						className: "text-gold"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-line bg-paper px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wide text-muted",
							children: "Commande Shopify"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: ["N° commande : ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: ["#", previewId]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-lg font-bold tabular-nums",
							children: ["Montant total : ", formatFcfa(totals.total)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted",
							children: "Les informations de votre commande sont récupérées automatiquement depuis Shopify. Vous n'avez rien à saisir."
						})
					]
				}),
				step === "form" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-3 px-5 py-5",
					onSubmit: onContinue,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Livraison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Nom complet",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							placeholder: "Téléphone",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: city,
							onChange: (e) => setCity(e.target.value),
							placeholder: "Ville",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: address,
							onChange: (e) => setAddress(e.target.value),
							placeholder: "Adresse (quartier, rue)",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm"
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sale",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg hover:bg-gold-hover",
							children: "Continuer vers le paiement"
						})
					]
				}) : null,
				step === "pay" || step === "wait" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-sm font-semibold",
							children: "Choisissez votre moyen de paiement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: METHODS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: cn("flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-3", method === m.id ? "border-gold bg-gold-soft/40" : "border-line"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("grid h-9 w-9 place-items-center rounded-md text-xs font-bold text-white", m.color),
										children: m.glyph
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm font-semibold",
											children: m.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted",
											children: m.hint
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "method",
										checked: method === m.id,
										onChange: () => setMethod(m.id),
										className: "accent-gold"
									})
								]
							}, m.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-1 block font-medium",
								children: ["Numéro ", METHODS.find((m) => m.id === method)?.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								placeholder: "70 00 00 00",
								className: "h-10 w-full rounded-md border border-line px-3 text-sm"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-sale",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: step === "wait",
							onClick: pay,
							className: "mt-5 w-full rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg hover:bg-gold-hover disabled:opacity-70",
							children: step === "wait" ? "Traitement en cours…" : "Payer maintenant"
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex items-center justify-between text-[10px] font-medium text-muted",
						children: [
							"Commande Shopify",
							"DBS Payment",
							"Paiement",
							"Confirmation"
						].map((label, idx) => {
							const active = step === "form" ? idx <= 1 : step === "pay" || step === "wait" ? idx <= 2 : idx <= 3;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-1 flex-col items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-6 w-6 place-items-center rounded-full", active ? "bg-gold text-gold-fg" : "bg-paper text-subtle"),
									children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 }) : idx + 1
								}), label]
							}, label);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex justify-between text-[11px] text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 12 }), " Paiement sécurisé"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { size: 12 }), " Transactions rapides"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Assistance 7j/7" })
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { CheckoutPage as component };
