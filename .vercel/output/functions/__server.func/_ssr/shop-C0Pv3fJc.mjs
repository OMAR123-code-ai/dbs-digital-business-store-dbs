import { h as getProductById, o as PROMO_CODES, s as SHIPPING_FEE } from "./catalog-DE7Vi_Xf.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-C0Pv3fJc.js
function lineKey(productId, color) {
	return `${productId}__${color ?? "default"}`;
}
function nextOrderId(existing) {
	return `DBS${existing.reduce((acc, o) => {
		const n = Number(o.id.replace(/\D/g, ""));
		return Number.isFinite(n) ? Math.max(acc, n) : acc;
	}, 10323) + 1}`;
}
function cartTotals(items, promoCode) {
	const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
	const shipping = subtotal >= 4e5 || subtotal === 0 ? 0 : SHIPPING_FEE;
	const promo = promoCode ? PROMO_CODES[promoCode] : void 0;
	let discount = 0;
	if (promo?.type === "percent") discount = Math.round(subtotal * promo.value / 100);
	if (promo?.type === "fixed") discount = promo.value;
	discount = Math.min(discount, subtotal);
	const total = Math.max(0, subtotal - discount + shipping);
	return {
		subtotal,
		shipping,
		discount,
		total,
		count: items.reduce((s, i) => s + i.qty, 0)
	};
}
var useShop = create()(persist((set, get) => ({
	hydrated: false,
	items: [],
	cartOpen: false,
	accountOpen: false,
	searchOpen: false,
	promoInput: "",
	appliedPromo: null,
	account: {
		name: "",
		email: "",
		phone: "",
		city: "",
		address: ""
	},
	orders: [],
	userReviews: [],
	lastOrderId: null,
	setHydrated: () => set({ hydrated: true }),
	openCart: () => set({ cartOpen: true }),
	closeCart: () => set({ cartOpen: false }),
	toggleCart: () => set((s) => ({ cartOpen: !s.cartOpen })),
	setAccountOpen: (accountOpen) => set({ accountOpen }),
	setSearchOpen: (searchOpen) => set({ searchOpen }),
	addToCart: (product, qty = 1, color) => {
		const apply = () => {
			const key = lineKey(product.id, color);
			const items = [...useShop.getState().items];
			const existing = items.find((i) => i.key === key);
			if (existing) existing.qty = Math.min(product.stock, existing.qty + qty);
			else items.unshift({
				key,
				productId: product.id,
				slug: product.slug,
				name: product.name,
				image: product.images[0] ?? "",
				price: product.price,
				qty: Math.min(product.stock, qty),
				color
			});
			useShop.setState({
				items,
				cartOpen: true
			});
		};
		if (!get().hydrated) {
			Promise.resolve(useShop.persist.rehydrate()).then(() => {
				useShop.setState({ hydrated: true });
				apply();
			});
			return;
		}
		apply();
	},
	setQty: (key, qty) => {
		if (qty <= 0) {
			set({ items: get().items.filter((i) => i.key !== key) });
			return;
		}
		set({ items: get().items.map((i) => {
			if (i.key !== key) return i;
			const max = getProductById(i.productId)?.stock ?? 99;
			return {
				...i,
				qty: Math.min(max, qty)
			};
		}) });
	},
	remove: (key) => set({ items: get().items.filter((i) => i.key !== key) }),
	clearCart: () => set({
		items: [],
		appliedPromo: null,
		promoInput: ""
	}),
	setPromoInput: (promoInput) => set({ promoInput }),
	applyPromo: (code) => {
		const normalized = code.trim().toUpperCase();
		const found = PROMO_CODES[normalized];
		if (!found) return {
			ok: false,
			message: "Code promo invalide."
		};
		set({
			appliedPromo: normalized,
			promoInput: normalized
		});
		return {
			ok: true,
			message: `Code appliqué : ${found.label}`
		};
	},
	clearPromo: () => set({
		appliedPromo: null,
		promoInput: ""
	}),
	saveAccount: (partial) => set({ account: {
		...get().account,
		...partial
	} }),
	placeOrder: (method, phone) => {
		const { items, appliedPromo, account, orders } = get();
		const totals = cartTotals(items, appliedPromo);
		const order = {
			id: nextOrderId(orders),
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			items: items.map((i) => ({ ...i })),
			...totals,
			promo: appliedPromo ?? void 0,
			method,
			phone,
			account: {
				...account,
				phone: account.phone || phone
			},
			status: "paid"
		};
		set({
			orders: [order, ...orders],
			items: [],
			appliedPromo: null,
			promoInput: "",
			cartOpen: false,
			lastOrderId: order.id
		});
		return order;
	},
	addReview: (review) => set({ userReviews: [review, ...get().userReviews] })
}), {
	name: "dbs-shop-v1",
	storage: createJSONStorage(() => localStorage),
	skipHydration: true,
	merge: (persisted, current) => {
		const p = persisted ?? {};
		return {
			...current,
			...p,
			items: current.items.length > 0 ? current.items : p.items ?? [],
			orders: (p.orders?.length ?? 0) >= current.orders.length ? p.orders ?? current.orders : current.orders,
			account: current.account.name ? current.account : p.account ?? current.account,
			userReviews: current.userReviews.length > 0 ? current.userReviews : p.userReviews ?? [],
			cartOpen: current.cartOpen,
			accountOpen: current.accountOpen,
			searchOpen: current.searchOpen,
			hydrated: true
		};
	},
	partialize: (s) => ({
		items: s.items,
		appliedPromo: s.appliedPromo,
		promoInput: s.promoInput,
		account: s.account,
		orders: s.orders,
		userReviews: s.userReviews,
		lastOrderId: s.lastOrderId
	})
}));
//#endregion
export { useShop as n, cartTotals as t };
