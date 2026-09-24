import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/money-D6QbAXaQ.js
function formatFcfa(value) {
	const formatted = Math.round(Math.abs(value)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	return `${value < 0 ? "-" : ""}${formatted} FCFA`;
}
function discountPercent(price, compareAt) {
	if (!compareAt || compareAt <= price) return null;
	return Math.round((1 - price / compareAt) * 100);
}
//#endregion
export { formatFcfa as n, cn as r, discountPercent as t };
