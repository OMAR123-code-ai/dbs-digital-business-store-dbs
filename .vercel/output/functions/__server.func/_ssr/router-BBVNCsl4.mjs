import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, V as require_jsx_runtime, _ as createFileRoute, b as useNavigate, d as HeadContent, f as useRouterState, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as WHATSAPP_NUMBER, r as NAV_LINKS, t as CATEGORIES, u as WHATSAPP_TEXT, y as searchProducts } from "./catalog-DE7Vi_Xf.mjs";
import { n as formatFcfa, r as cn } from "./money-D6QbAXaQ.mjs";
import { n as useShop, t as cartTotals } from "./shop-C0Pv3fJc.mjs";
import { D as Instagram, E as Laptop, M as Dumbbell, O as House, P as ChevronDown, T as LayoutGrid, b as MessageCircle, d as ShoppingBag, f as Shirt, g as Plus, h as Search, i as User, j as Facebook, k as Headphones, l as Sparkles, n as Youtube, o as TriangleAlert, r as X, s as Trash2, u as Smartphone, x as Menu, y as Minus } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-crBlQrnx.js
var import_jsx_runtime = require_jsx_runtime();
function DbsMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "dbsGold",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#f0d789"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "45%",
						stopColor: "#c9a227"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#8d6b12"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "10",
				width: "8",
				height: "28",
				rx: "1.2",
				fill: "url(#dbsGold)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "36",
				y: "10",
				width: "8",
				height: "28",
				rx: "1.2",
				fill: "url(#dbsGold)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "7",
				width: "32",
				height: "5",
				rx: "1",
				fill: "url(#dbsGold)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "8,7 24,2 40,7",
				fill: "url(#dbsGold)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "18",
				width: "12",
				height: "20",
				rx: "1",
				fill: "url(#dbsGold)",
				opacity: "0.92"
			})
		]
	});
}
function DbsLogo({ compact = false, to = "/", inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex shrink-0 items-center gap-2 no-underline sm:gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DbsMark, { className: compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("leading-tight", compact && "hidden sm:block"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "block font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-gold sm:text-[15px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sm:hidden",
					children: "DBS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "Digital Business Store"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-0.5 hidden max-w-[220px] text-[9px] font-medium uppercase tracking-[0.14em] sm:block", inverted ? "text-white/55" : "text-muted"),
				children: "L'innovation au service de votre quotidien"
			})]
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BBVNCsl4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SearchBox({ compact = false }) {
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const setSearchOpen = useShop((s) => s.setSearchOpen);
	const results = (0, import_react.useMemo)(() => q.trim().length >= 1 ? searchProducts(q).slice(0, 6) : [], [q]);
	function go(slug) {
		setOpen(false);
		setSearchOpen(false);
		if (slug) navigate({
			to: "/produit/$slug",
			params: { slug }
		});
		else navigate({
			to: "/recherche",
			search: { q }
		});
		setQ("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				go();
			},
			className: "flex h-11 items-center rounded-full border border-line bg-surface pl-4 pr-1.5 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => {
					setQ(e.target.value);
					setOpen(true);
				},
				onFocus: () => setOpen(true),
				placeholder: "Rechercher un produit, une marque, une catégorie...",
				className: "h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-subtle"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				"aria-label": "Rechercher",
				className: "grid h-8 w-8 place-items-center rounded-full bg-gold text-gold-fg hover:bg-gold-hover",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 })
			})]
		}), open && results.length > 0 && !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-0 right-0 z-40 mt-2 overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--shadow-float)]",
			children: [results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => go(p.slug),
				className: "flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.images[0],
					alt: "",
					className: "h-11 w-11 rounded-md object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-sm font-medium",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs tabular-nums text-muted",
						children: formatFcfa(p.price)
					})]
				})]
			}, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => go(),
				className: "w-full border-t border-line px-3 py-2.5 text-left text-sm font-medium text-gold-deep hover:bg-paper",
				children: "Voir tous les résultats"
			})]
		}) : null]
	});
}
function QtyControl({ value, onChange, min = 1, max = 99, size = "md" }) {
	const btn = size === "sm" ? "h-7 w-7" : "h-9 w-9";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center rounded-full border border-line-strong bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Diminuer",
				className: cn(btn, "grid place-items-center text-ink"),
				onClick: () => onChange(Math.max(min, value - 1)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 14 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-7 text-center text-sm font-semibold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Augmenter",
				className: cn(btn, "grid place-items-center text-ink"),
				onClick: () => onChange(Math.min(max, value + 1)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
			})
		]
	});
}
function CartDrawer() {
	const navigate = useNavigate();
	const open = useShop((s) => s.cartOpen);
	const close = useShop((s) => s.closeCart);
	const items = useShop((s) => s.items);
	const setQty = useShop((s) => s.setQty);
	const remove = useShop((s) => s.remove);
	const promoInput = useShop((s) => s.promoInput);
	const appliedPromo = useShop((s) => s.appliedPromo);
	const setPromoInput = useShop((s) => s.setPromoInput);
	const applyPromo = useShop((s) => s.applyPromo);
	const totals = cartTotals(items, appliedPromo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-0 z-50 bg-ink/45 transition-opacity duration-200 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`,
		onClick: close
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-surface shadow-[var(--shadow-float)] transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`,
		"aria-hidden": !open,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between border-b border-line px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-base font-semibold",
					children: [
						"Votre panier (",
						totals.count,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: close,
					"aria-label": "Fermer",
					className: "grid h-9 w-9 place-items-center rounded-full hover:bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto px-5 py-4",
				children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center gap-3 py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							className: "text-subtle",
							size: 36
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Votre panier est vide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								close();
								navigate({ to: "/boutique" });
							},
							className: "rounded-full bg-gold px-5 py-2 text-sm font-semibold text-gold-fg hover:bg-gold-hover",
							children: "Découvrir la boutique"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-4",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 border-b border-line pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/produit/$slug",
							params: { slug: item.slug },
							onClick: close,
							className: "h-20 w-20 shrink-0 overflow-hidden rounded-md bg-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/produit/$slug",
										params: { slug: item.slug },
										onClick: close,
										className: "text-sm font-medium text-ink no-underline hover:text-gold-deep",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => remove(item.key),
										className: "text-subtle hover:text-sale",
										"aria-label": "Retirer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
									})]
								}),
								item.color ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-[11px] capitalize text-muted",
									children: ["Couleur : ", item.color.replace("-", " ")]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-semibold tabular-nums",
									children: formatFcfa(item.price)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
										size: "sm",
										value: item.qty,
										onChange: (n) => setQty(item.key, n)
									})
								})
							]
						})]
					}, item.key))
				})
			}),
			items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: promoInput,
							onChange: (e) => setPromoInput(e.target.value),
							placeholder: "Code promo",
							className: "h-10 flex-1 rounded-md border border-line bg-paper px-3 text-sm outline-none focus:border-gold"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => applyPromo(promoInput),
							className: "h-10 rounded-md border border-ink bg-ink px-3 text-sm font-semibold text-white hover:bg-ink-soft",
							children: "Appliquer"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-1.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Sous-total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums text-ink",
									children: formatFcfa(totals.subtotal)
								})]
							}),
							totals.discount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", { children: ["Remise ", appliedPromo ? `(${appliedPromo})` : ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "tabular-nums",
									children: ["-", formatFcfa(totals.discount)]
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Livraison" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums text-ink",
									children: totals.shipping === 0 ? "Offerte" : formatFcfa(totals.shipping)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-t border-line pt-2 text-base font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: formatFcfa(totals.total)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							close();
							navigate({ to: "/paiement" });
						},
						className: "mt-4 w-full rounded-full bg-gold py-3 text-sm font-semibold text-gold-fg hover:bg-gold-hover",
						children: "Passer au paiement"
					})
				]
			}) : null
		]
	})] });
}
function AccountPanel() {
	const open = useShop((s) => s.accountOpen);
	const setOpen = useShop((s) => s.setAccountOpen);
	const account = useShop((s) => s.account);
	const saveAccount = useShop((s) => s.saveAccount);
	const orders = useShop((s) => s.orders);
	const closeCart = useShop((s) => s.closeCart);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-end bg-ink/45",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-full w-full max-w-md overflow-y-auto bg-surface shadow-[var(--shadow-float)]",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between border-b border-line px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Compte"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						className: "grid h-9 w-9 place-items-center rounded-full hover:bg-paper",
						"aria-label": "Fermer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-3 px-5 py-5",
					onSubmit: (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						saveAccount({
							name: String(fd.get("name") ?? ""),
							email: String(fd.get("email") ?? ""),
							phone: String(fd.get("phone") ?? ""),
							city: String(fd.get("city") ?? ""),
							address: String(fd.get("address") ?? "")
						});
						setOpen(false);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Enregistrez vos informations pour accélérer le paiement. Elles restent sur cet appareil."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "name",
							label: "Nom complet",
							defaultValue: account.name,
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "email",
							label: "E-mail",
							type: "email",
							defaultValue: account.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "phone",
							label: "Téléphone",
							defaultValue: account.phone,
							placeholder: "70 00 00 00",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "city",
							label: "Ville",
							defaultValue: account.city,
							placeholder: "Ouagadougou"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "address",
							label: "Adresse de livraison",
							defaultValue: account.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full rounded-full bg-gold py-2.5 text-sm font-semibold text-gold-fg hover:bg-gold-hover",
							children: "Enregistrer"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line px-5 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-sm font-semibold",
						children: "Mes commandes"
					}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Aucune commande pour le moment."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/suivi",
							search: { id: o.id },
							onClick: () => {
								setOpen(false);
								closeCart();
							},
							className: "flex items-center justify-between rounded-lg border border-line px-3 py-2.5 text-sm no-underline hover:border-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: ["#", o.id]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-muted",
								children: new Date(o.createdAt).toLocaleDateString("fr-FR")
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums font-medium",
								children: formatFcfa(o.total)
							})]
						}) }, o.id))
					})]
				})
			]
		})
	});
}
function Field({ name, label, defaultValue, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block font-medium text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			defaultValue,
			placeholder,
			className: "h-10 w-full rounded-md border border-line bg-paper px-3 outline-none focus:border-gold"
		})]
	});
}
var CAT_ICONS = {
	electronique: Smartphone,
	mode: Shirt,
	accessoires: Headphones,
	maison: House,
	beaute: Sparkles,
	sport: Dumbbell,
	"high-tech": Laptop,
	autres: LayoutGrid
};
function SiteShell({ children }) {
	const setHydrated = useShop((s) => s.setHydrated);
	(0, import_react.useEffect)(() => {
		Promise.resolve(useShop.persist.rehydrate()).then(() => setHydrated());
	}, [setHydrated]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-hidden bg-ink text-[11px] text-white/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hidden items-center gap-2 sm:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Livraison rapide dans toute l'Afrique" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/30",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paiement sécurisé" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/30",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service client disponible 7j/7 - 24h/24" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sm:hidden",
					children: "Livraison rapide · Paiement sécurisé · 7j/7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/promotions",
					className: "max-w-full truncate rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-gold-fg no-underline hover:bg-gold-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sm:hidden",
						children: "Offre exclusive : jusqu'à -50%"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Offre exclusive : jusqu'à -50% sur une sélection d'articles !"
					})]
				})
			]
		})
	});
}
function Header() {
	const count = useShop((s) => s.items.reduce((n, i) => n + i.qty, 0));
	const hydrated = useShop((s) => s.hydrated);
	const openCart = useShop((s) => s.openCart);
	const setAccountOpen = useShop((s) => s.setAccountOpen);
	const [mobileSearch, setMobileSearch] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-ink-mid bg-ink text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center gap-4 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenu, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DbsLogo, { inverted: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden flex-1 md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 md:hidden",
							onClick: () => setMobileSearch((v) => !v),
							"aria-label": "Recherche",
							children: mobileSearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setAccountOpen(true),
							className: "flex items-center gap-2 rounded-full px-2 py-1.5 hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-sm sm:inline",
								children: "Compte"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "hidden items-center gap-2 rounded-full px-2 py-1.5 text-white no-underline hover:bg-white/10 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "Contact"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: openCart,
							className: "relative flex items-center gap-2 rounded-full px-2 py-1.5 hover:bg-white/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 18 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-sm sm:inline",
									children: "Panier"
								}),
								hydrated && count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-gold-fg",
									children: count
								}) : null
							]
						})
					]
				})
			]
		}), mobileSearch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10 px-4 py-3 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, { compact: true })
		}) : null]
	});
}
function NavBar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-x-auto border-b border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-2 py-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "flex items-center gap-2 whitespace-nowrap px-3 py-3 text-sm font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { size: 16 }),
						"Toutes les catégories",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							size: 14,
							className: cn("transition-transform", open && "rotate-180")
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-0 top-full z-30 w-72 overflow-hidden rounded-xl border border-line bg-surface py-2 shadow-[var(--shadow-float)]",
					children: CATEGORIES.map((c) => {
						const Icon = CAT_ICONS[c.slug];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/categorie/$slug",
							params: { slug: c.slug },
							onClick: () => setOpen(false),
							className: "flex items-center gap-3 px-4 py-2.5 text-sm text-ink no-underline hover:bg-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 16,
								className: "text-gold-deep"
							}), c.name]
						}, c.slug);
					})
				}) : null]
			}), NAV_LINKS.map((l) => {
				const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.href,
					className: cn("whitespace-nowrap px-3 py-3 text-sm no-underline", active ? "border-b-2 border-gold font-semibold text-ink" : "border-b-2 border-transparent text-muted hover:text-ink"),
					children: l.label
				}, l.href);
			})]
		})
	});
}
function MobileMenu() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 lg:hidden",
		onClick: () => setOpen(true),
		"aria-label": "Menu",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-ink/50 lg:hidden",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-full w-72 overflow-y-auto bg-surface p-4 text-ink",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DbsLogo, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					"aria-label": "Fermer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col",
				children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.href,
					onClick: () => setOpen(false),
					className: "border-b border-line py-3 text-sm font-medium text-ink no-underline",
					children: l.label
				}, l.href)), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/categorie/$slug",
					params: { slug: c.slug },
					onClick: () => setOpen(false),
					className: "border-b border-line py-3 text-sm text-ink no-underline",
					children: c.name
				}, c.slug))]
			})]
		})
	}) : null] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-16 bg-ink text-white/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DbsLogo, { inverted: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs leading-relaxed text-white/55",
						children: "L'innovation au service de votre quotidien. Produits de qualité, livraison rapide dans toute l'Afrique, paiement mobile sécurisé."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Liens utiles",
					links: [
						["Accueil", "/"],
						["Boutique", "/boutique"],
						["À propos", "/a-propos"],
						["FAQ", "/faq"],
						["Contact", "/contact"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Catégories",
					links: [
						["Électronique", "/categorie/electronique"],
						["Mode & Accessoires", "/categorie/mode"],
						["Maison & Lifestyle", "/categorie/maison"],
						["Promotions", "/promotions"],
						["Nouveautés", "/nouveautes"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Service client",
					links: [
						["Livraison", "/livraison"],
						["Retours & échanges", "/retours"],
						["Suivi de commande", "/suivi"],
						["Conditions générales", "/cgu"],
						["Politique de confidentialité", "/confidentialite"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-sm font-semibold text-white",
						children: "Suivez-nous"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
								icon: Facebook,
								label: "Facebook"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
								icon: Instagram,
								label: "Instagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TikTokIcon, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
								icon: Youtube,
								label: "YouTube"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white no-underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppGlyph, {}), "WhatsApp"]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-[11px] text-white/45",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2025 Digital Business Store. Tous droits réservés." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Burkina Faso | Afrique | Monde" })]
			})
		})]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-3 text-sm font-semibold text-white",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: href,
			className: "text-sm text-white/70 no-underline hover:text-gold",
			children: label
		}) }, href))
	})] });
}
function Social({ icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80",
		title: label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 15 })
	});
}
function TikTokIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80",
		title: "TikTok",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "h-3.5 w-3.5 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.5 3c.4 2.6 1.8 4.4 4.5 4.7v2.4c-1.5 0-2.9-.5-4.1-1.3v6.7c0 3.4-2.7 6.1-6.2 6.1S2.5 18.9 2.5 15.5 5.2 9.4 8.7 9.4c.4 0 .8 0 1.2.1v2.6c-.4-.1-.8-.2-1.2-.2-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V3h2.2Z" })
		})
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`,
		target: "_blank",
		rel: "noreferrer",
		className: "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-float)] no-underline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppGlyph, {}), "WhatsApp"]
	});
}
function WhatsAppGlyph() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "h-4 w-4 fill-current",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.2A9.8 9.8 0 0 0 2.8 16.7L2 22l5.5-.8A9.8 9.8 0 1 0 12 2.2Zm5.4 13.9c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5 0-.3-.1-.7-.2-1.2-.4-2.1-.9-3.5-2.6-4.1-3.3-.6-.7-1.3-1.9-1.3-3.1 0-1.2.6-1.8.8-2 .2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.4.7 1.1 1.5 1.8 2 .8.5 1.5.8 1.8.9.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l2 .9c.3.1.4.2.5.4.1.4 0 1-.2 1.5Z" })
	});
}
function CategoryIconGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-3 sm:grid-cols-8",
		children: CATEGORIES.map((c) => {
			const Icon = CAT_ICONS[c.slug];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/categorie/$slug",
				params: { slug: c.slug },
				className: "flex flex-col items-center gap-2 rounded-xl bg-surface px-2 py-4 text-center no-underline shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-12 w-12 place-items-center rounded-full bg-paper text-ink-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 22,
						strokeWidth: 1.6
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-medium leading-tight text-ink",
					children: c.name
				})]
			}, c.slug);
		})
	});
}
var styles_default = "/assets/styles-Cnvfkn0N.css";
var APP_NAME = "Digital Business Store";
var Route$19 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Digital Business Store — l'innovation au service de votre quotidien. Livraison rapide dans toute l'Afrique, paiement Orange Money, Moov Money et Wave."
			},
			{
				name: "theme-color",
				content: "#0B0C10"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
			}
		]
	}),
	component: Root,
	notFoundComponent: NotFound
});
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Page introuvable"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Ce lien n'existe pas ou a été déplacé."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-fg no-underline",
				children: "Retour à l'accueil"
			})
		]
	});
}
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					position: "top-center",
					toastOptions: { style: {
						background: "#0b0c10",
						color: "#fff",
						border: "1px solid #c9a227"
					} }
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$18 = () => import("./routes-DBeHMLNM.mjs");
var Route$18 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./a-propos-Dxs_kZmx.mjs");
var Route$17 = createFileRoute("/a-propos")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./boutique-B3ZuEBzF.mjs");
var Route$16 = createFileRoute("/boutique")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./cgu-DrAq9U3k.mjs");
var Route$15 = createFileRoute("/cgu")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./compte-CbTuSdjI.mjs");
var Route$14 = createFileRoute("/compte")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./confidentialite-CJxMCoU5.mjs");
var Route$13 = createFileRoute("/confidentialite")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./confirmation-BeWQifBk.mjs");
var Route$12 = createFileRoute("/confirmation")({
	validateSearch: (s) => ({ id: typeof s.id === "string" ? s.id : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./contact-D0VzA_cT.mjs");
var Route$11 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./faq-CMzyQCn9.mjs");
var Route$10 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./livraison-WGPNU40H.mjs");
var Route$9 = createFileRoute("/livraison")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./nouveautes-TnalWLKb.mjs");
var Route$8 = createFileRoute("/nouveautes")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./paiement-BIf5U6lT.mjs");
var Route$7 = createFileRoute("/paiement")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./panier-DYbR_q6o.mjs");
var Route$6 = createFileRoute("/panier")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./promotions-BTszxfmM.mjs");
var Route$5 = createFileRoute("/promotions")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./recherche-DHzrFW2X.mjs");
var Route$4 = createFileRoute("/recherche")({
	validateSearch: (s) => ({ q: typeof s.q === "string" ? s.q : "" }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./retours-DrBLYlUW.mjs");
var Route$3 = createFileRoute("/retours")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./suivi-BRlAyJPX.mjs");
var Route$2 = createFileRoute("/suivi")({
	validateSearch: (s) => ({ id: typeof s.id === "string" ? s.id : "" }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./categorie._slug-B4ZnCfkz.mjs");
var Route$1 = createFileRoute("/categorie/$slug")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./produit._slug-DHpPLvoj.mjs");
var Route = createFileRoute("/produit/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$18.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$19
	}),
	AProposRoute: Route$17.update({
		id: "/a-propos",
		path: "/a-propos",
		getParentRoute: () => Route$19
	}),
	BoutiqueRoute: Route$16.update({
		id: "/boutique",
		path: "/boutique",
		getParentRoute: () => Route$19
	}),
	CguRoute: Route$15.update({
		id: "/cgu",
		path: "/cgu",
		getParentRoute: () => Route$19
	}),
	CompteRoute: Route$14.update({
		id: "/compte",
		path: "/compte",
		getParentRoute: () => Route$19
	}),
	ConfidentialiteRoute: Route$13.update({
		id: "/confidentialite",
		path: "/confidentialite",
		getParentRoute: () => Route$19
	}),
	ConfirmationRoute: Route$12.update({
		id: "/confirmation",
		path: "/confirmation",
		getParentRoute: () => Route$19
	}),
	ContactRoute: Route$11.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$19
	}),
	FaqRoute: Route$10.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$19
	}),
	LivraisonRoute: Route$9.update({
		id: "/livraison",
		path: "/livraison",
		getParentRoute: () => Route$19
	}),
	NouveautesRoute: Route$8.update({
		id: "/nouveautes",
		path: "/nouveautes",
		getParentRoute: () => Route$19
	}),
	PaiementRoute: Route$7.update({
		id: "/paiement",
		path: "/paiement",
		getParentRoute: () => Route$19
	}),
	PanierRoute: Route$6.update({
		id: "/panier",
		path: "/panier",
		getParentRoute: () => Route$19
	}),
	PromotionsRoute: Route$5.update({
		id: "/promotions",
		path: "/promotions",
		getParentRoute: () => Route$19
	}),
	RechercheRoute: Route$4.update({
		id: "/recherche",
		path: "/recherche",
		getParentRoute: () => Route$19
	}),
	RetoursRoute: Route$3.update({
		id: "/retours",
		path: "/retours",
		getParentRoute: () => Route$19
	}),
	SuiviRoute: Route$2.update({
		id: "/suivi",
		path: "/suivi",
		getParentRoute: () => Route$19
	}),
	CategorieSlugRoute: Route$1.update({
		id: "/categorie/$slug",
		path: "/categorie/$slug",
		getParentRoute: () => Route$19
	}),
	ProduitSlugRoute: Route.update({
		id: "/produit/$slug",
		path: "/produit/$slug",
		getParentRoute: () => Route$19
	})
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { Route$4 as a, QtyControl as c, Route$2 as i, DbsMark as l, Route as n, Route$12 as o, Route$1 as r, CategoryIconGrid as s, router_exports as t };
