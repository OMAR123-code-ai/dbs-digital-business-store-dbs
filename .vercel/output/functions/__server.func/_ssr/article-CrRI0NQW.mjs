import { V as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/article-CrRI0NQW.js
var import_jsx_runtime = require_jsx_runtime();
function Article({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-4 text-sm leading-relaxed text-ink-soft",
			children: body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
		})]
	});
}
//#endregion
export { Article as t };
