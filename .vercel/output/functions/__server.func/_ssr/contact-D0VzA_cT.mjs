import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as WHATSAPP_NUMBER, u as WHATSAPP_TEXT } from "./catalog-DE7Vi_Xf.mjs";
import { C as Mail, S as MapPin, _ as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D0VzA_cT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Service client disponible 7j/7 — 24h/24."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: Phone,
							title: "Téléphone / WhatsApp",
							text: "+226 70 00 00 00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: Mail,
							title: "E-mail",
							text: "contact@digitalbusinessstore.africa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: MapPin,
							title: "Siège",
							text: "Ouagadougou, Burkina Faso — Afrique de l'Ouest"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`,
							className: "inline-flex rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white no-underline",
							children: "Écrire sur WhatsApp"
						})
					]
				}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-xl border border-line bg-surface p-6 text-sm",
					children: "Merci, votre message a bien été transmis. Notre équipe vous répondra dans les plus brefs délais."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-3 rounded-xl border border-line bg-surface p-6",
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							placeholder: "Nom",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							placeholder: "E-mail",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Téléphone",
							className: "h-10 w-full rounded-md border border-line px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 5,
							placeholder: "Votre message",
							className: "w-full rounded-md border border-line px-3 py-2 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full rounded-full bg-gold py-2.5 text-sm font-semibold text-gold-fg",
							children: "Envoyer"
						})
					]
				})]
			})
		]
	});
}
function Info({ icon: Icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-3 rounded-xl border border-line bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-10 w-10 place-items-center rounded-full bg-gold-soft text-gold-deep",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: text
		})] })]
	});
}
//#endregion
export { ContactPage as component };
