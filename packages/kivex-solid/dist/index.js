import { createComponent as e, createRenderEffect as t, mergeProps as n, sharedConfig as r, splitProps as i, untrack as a } from "solid-js";
//#region ../../node_modules/solid-js/web/dist/web.js
var o = /*#__PURE__*/ new Set([
	"className",
	"value",
	"readOnly",
	"noValidate",
	"formNoValidate",
	"isMap",
	"noModule",
	"playsInline",
	"adAuctionHeaders",
	"allowFullscreen",
	"browsingTopics",
	"defaultChecked",
	"defaultMuted",
	"defaultSelected",
	"disablePictureInPicture",
	"disableRemotePlayback",
	"preservesPitch",
	"shadowRootClonable",
	"shadowRootCustomElementRegistry",
	"shadowRootDelegatesFocus",
	"shadowRootSerializable",
	"sharedStorageWritable",
	.../* @__PURE__ */ "allowfullscreen.async.alpha.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.hidden.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.adauctionheaders.browsingtopics.credentialless.defaultchecked.defaultmuted.defaultselected.defer.disablepictureinpicture.disableremoteplayback.preservespitch.shadowrootclonable.shadowrootcustomelementregistry.shadowrootdelegatesfocus.shadowrootserializable.sharedstoragewritable".split(".")
]), s = /*#__PURE__*/ new Set([
	"innerHTML",
	"textContent",
	"innerText",
	"children"
]), c = /*#__PURE__*/ Object.assign(Object.create(null), {
	className: "class",
	htmlFor: "for"
}), l = /*#__PURE__*/ Object.assign(Object.create(null), {
	class: "className",
	novalidate: {
		$: "noValidate",
		FORM: 1
	},
	formnovalidate: {
		$: "formNoValidate",
		BUTTON: 1,
		INPUT: 1
	},
	ismap: {
		$: "isMap",
		IMG: 1
	},
	nomodule: {
		$: "noModule",
		SCRIPT: 1
	},
	playsinline: {
		$: "playsInline",
		VIDEO: 1
	},
	readonly: {
		$: "readOnly",
		INPUT: 1,
		TEXTAREA: 1
	},
	adauctionheaders: {
		$: "adAuctionHeaders",
		IFRAME: 1
	},
	allowfullscreen: {
		$: "allowFullscreen",
		IFRAME: 1
	},
	browsingtopics: {
		$: "browsingTopics",
		IMG: 1
	},
	defaultchecked: {
		$: "defaultChecked",
		INPUT: 1
	},
	defaultmuted: {
		$: "defaultMuted",
		AUDIO: 1,
		VIDEO: 1
	},
	defaultselected: {
		$: "defaultSelected",
		OPTION: 1
	},
	disablepictureinpicture: {
		$: "disablePictureInPicture",
		VIDEO: 1
	},
	disableremoteplayback: {
		$: "disableRemotePlayback",
		AUDIO: 1,
		VIDEO: 1
	},
	preservespitch: {
		$: "preservesPitch",
		AUDIO: 1,
		VIDEO: 1
	},
	shadowrootclonable: {
		$: "shadowRootClonable",
		TEMPLATE: 1
	},
	shadowrootdelegatesfocus: {
		$: "shadowRootDelegatesFocus",
		TEMPLATE: 1
	},
	shadowrootserializable: {
		$: "shadowRootSerializable",
		TEMPLATE: 1
	},
	sharedstoragewritable: {
		$: "sharedStorageWritable",
		IFRAME: 1,
		IMG: 1
	}
});
function u(e, t) {
	let n = l[e];
	return typeof n == "object" ? n[t] ? n.$ : void 0 : n;
}
var d = /*#__PURE__*/ new Set([
	"beforeinput",
	"click",
	"dblclick",
	"contextmenu",
	"focusin",
	"focusout",
	"input",
	"keydown",
	"keyup",
	"mousedown",
	"mousemove",
	"mouseout",
	"mouseover",
	"mouseup",
	"pointerdown",
	"pointermove",
	"pointerout",
	"pointerover",
	"pointerup",
	"touchend",
	"touchmove",
	"touchstart"
]), ee = {
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace"
};
function f(e, t, n) {
	let r = n.length, i = t.length, a = r, o = 0, s = 0, c = t[i - 1].nextSibling, l = null;
	for (; o < i || s < a;) {
		if (t[o] === n[s]) {
			o++, s++;
			continue;
		}
		for (; t[i - 1] === n[a - 1];) i--, a--;
		if (i === o) {
			let t = a < r ? s ? n[s - 1].nextSibling : n[a - s] : c;
			for (; s < a;) e.insertBefore(n[s++], t);
		} else if (a === s) for (; o < i;) (!l || !l.has(t[o])) && t[o].remove(), o++;
		else if (t[o] === n[a - 1] && n[s] === t[i - 1]) {
			let r = t[--i].nextSibling;
			e.insertBefore(n[s++], t[o++].nextSibling), e.insertBefore(n[--a], r), t[i] = n[a];
		} else {
			if (!l) {
				l = /* @__PURE__ */ new Map();
				let e = s;
				for (; e < a;) l.set(n[e], e++);
			}
			let r = l.get(t[o]);
			if (r != null) if (s < r && r < a) {
				let c = o, u = 1, d;
				for (; ++c < i && c < a && !((d = l.get(t[c])) == null || d !== r + u);) u++;
				if (u > r - s) {
					let i = t[o];
					for (; s < r;) e.insertBefore(n[s++], i);
				} else e.replaceChild(n[s++], t[o++]);
			} else o++;
			else t[o++].remove();
		}
	}
}
var p = "_$DX_DELEGATE";
function m(e, t, n, r) {
	let i, o = () => {
		let t = r ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
		return t.innerHTML = e, n ? t.content.firstChild.firstChild : r ? t.firstChild : t.content.firstChild;
	}, s = t ? () => a(() => document.importNode(i ||= o(), !0)) : () => (i ||= o()).cloneNode(!0);
	return s.cloneNode = s, s;
}
function te(e, t = window.document) {
	let n = t[p] || (t[p] = /* @__PURE__ */ new Set());
	for (let r = 0, i = e.length; r < i; r++) {
		let i = e[r];
		n.has(i) || (n.add(i), t.addEventListener(i, ue));
	}
}
function h(e, t, n) {
	y(e) || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function ne(e, t, n, r) {
	y(e) || (r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r));
}
function re(e, t, n) {
	y(e) || (n ? e.setAttribute(t, "") : e.removeAttribute(t));
}
function ie(e, t) {
	y(e) || (t == null ? e.removeAttribute("class") : e.className = t);
}
function ae(e, t, n, r) {
	if (r) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
	else if (Array.isArray(n)) {
		let r = n[0];
		e.addEventListener(t, n[0] = (t) => r.call(e, n[1], t));
	} else e.addEventListener(t, n, typeof n != "function" && n);
}
function oe(e, t, n = {}) {
	let r = Object.keys(t || {}), i = Object.keys(n), a, o;
	for (a = 0, o = i.length; a < o; a++) {
		let r = i[a];
		!r || r === "undefined" || t[r] || (b(e, r, !1), delete n[r]);
	}
	for (a = 0, o = r.length; a < o; a++) {
		let i = r[a], o = !!t[i];
		!i || i === "undefined" || n[i] === o || !o || (b(e, i, !0), n[i] = o);
	}
	return n;
}
function g(e, t, n) {
	if (!t) return n ? h(e, "style") : t;
	let r = e.style;
	if (typeof t == "string") return r.cssText = t;
	typeof n == "string" && (r.cssText = n = void 0), n ||= {}, t ||= {};
	let i, a;
	for (a in n) t[a] ?? r.removeProperty(a), delete n[a];
	for (a in t) i = t[a], i !== n[a] && (r.setProperty(a, i), n[a] = i);
	return n;
}
function _(e, n = {}, r, i) {
	let a = {};
	return i || t(() => a.children = S(e, n.children, a.children)), t(() => typeof n.ref == "function" && v(n.ref, e)), t(() => ce(e, n, r, !0, a, !0)), a;
}
function v(e, t, n) {
	return a(() => e(t, n));
}
function se(e, n, r, i) {
	if (r !== void 0 && !i && (i = []), typeof n != "function") return S(e, n, i, r);
	t((t) => S(e, n(), t, r), i);
}
function ce(e, t, n, r, i = {}, a = !1) {
	t ||= {};
	for (let r in i) if (!(r in t)) {
		if (r === "children") continue;
		i[r] = x(e, r, null, i[r], n, a, t);
	}
	for (let o in t) {
		if (o === "children") {
			r || S(e, t.children);
			continue;
		}
		let s = t[o];
		i[o] = x(e, o, s, i[o], n, a, t);
	}
}
function y(e) {
	return !!r.context && !r.done && (!e || e.isConnected);
}
function le(e) {
	return e.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function b(e, t, n) {
	let r = t.trim().split(/\s+/);
	for (let t = 0, i = r.length; t < i; t++) e.classList.toggle(r[t], n);
}
function x(e, t, n, r, i, a, l) {
	let f, p, m, _, v;
	if (t === "style") return g(e, n, r);
	if (t === "classList") return oe(e, n, r);
	if (n === r) return r;
	if (t === "ref") a || n(e);
	else if (t.slice(0, 3) === "on:") {
		let i = t.slice(3);
		r && e.removeEventListener(i, r, typeof r != "function" && r), n && e.addEventListener(i, n, typeof n != "function" && n);
	} else if (t.slice(0, 10) === "oncapture:") {
		let i = t.slice(10);
		r && e.removeEventListener(i, r, !0), n && e.addEventListener(i, n, !0);
	} else if (t.slice(0, 2) === "on") {
		let i = t.slice(2).toLowerCase(), a = d.has(i);
		if (!a && r) {
			let t = Array.isArray(r) ? r[0] : r;
			e.removeEventListener(i, t);
		}
		(a || n) && (ae(e, i, n, a), a && te([i]));
	} else if (t.slice(0, 5) === "attr:") h(e, t.slice(5), n);
	else if (t.slice(0, 5) === "bool:") re(e, t.slice(5), n);
	else if ((v = t.slice(0, 5) === "prop:") || (m = s.has(t)) || !i && ((_ = u(t, e.tagName)) || (p = o.has(t))) || (f = e.nodeName.includes("-") || "is" in l)) {
		if (v) t = t.slice(5), p = !0;
		else if (y(e)) return n;
		t === "class" || t === "className" ? ie(e, n) : f && !p && !m ? e[le(t)] = n : e[_ || t] = n;
	} else {
		let r = i && t.indexOf(":") > -1 && ee[t.split(":")[0]];
		r ? ne(e, r, t, n) : h(e, c[t] || t, n);
	}
	return n;
}
function ue(e) {
	if (r.registry && r.events && r.events.find(([t, n]) => n === e)) return;
	let t = e.target, n = `$$${e.type}`, i = e.target, a = e.currentTarget, o = (t) => Object.defineProperty(e, "target", {
		configurable: !0,
		value: t
	}), s = () => {
		let r = t[n];
		if (r && !t.disabled) {
			let i = t[`${n}Data`];
			if (i === void 0 ? r.call(t, e) : r.call(t, i, e), e.cancelBubble) return;
		}
		return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && o(t.host), !0;
	}, c = () => {
		for (; s() && (t = t._$host || t.parentNode || t.host););
	};
	if (Object.defineProperty(e, "currentTarget", {
		configurable: !0,
		get() {
			return t || document;
		}
	}), r.registry && !r.done && (r.done = _$HY.done = !0), e.composedPath) {
		let n = e.composedPath();
		o(n[0]);
		for (let e = 0; e < n.length - 2 && (t = n[e], s()); e++) {
			if (t._$host) {
				t = t._$host, c();
				break;
			}
			if (t.parentNode === a) break;
		}
	} else c();
	o(i);
}
function S(e, n, r, i, a) {
	let o = y(e);
	if (o) {
		!r && (r = [...e.childNodes]);
		let t = [];
		for (let e = 0; e < r.length; e++) {
			let n = r[e];
			n.nodeType === 8 && n.data.slice(0, 2) === "!$" ? n.remove() : t.push(n);
		}
		r = t;
	}
	for (; typeof r == "function";) r = r();
	if (n === r) return r;
	let s = typeof n, c = i !== void 0;
	if (e = c && r[0] && r[0].parentNode || e, s === "string" || s === "number") {
		if (o || s === "number" && (n = n.toString(), n === r)) return r;
		if (c) {
			let t = r[0];
			t && t.nodeType === 3 ? t.data !== n && (t.data = n) : t = document.createTextNode(n), r = T(e, r, i, t);
		} else r = r !== "" && typeof r == "string" ? e.firstChild.data = n : e.textContent = n;
	} else if (n == null || s === "boolean") {
		if (o) return r;
		r = T(e, r, i);
	} else if (s === "function") return t(() => {
		let t = n();
		for (; typeof t == "function";) t = t();
		r = S(e, t, r, i);
	}), () => r;
	else if (Array.isArray(n)) {
		let s = [], l = r && Array.isArray(r);
		if (C(s, n, r, a)) return t(() => r = S(e, s, r, i, !0)), () => r;
		if (o) {
			if (!s.length) return r;
			if (i === void 0) return r = [...e.childNodes];
			let t = s[0];
			if (t.parentNode !== e) return r;
			let n = [t];
			for (; (t = t.nextSibling) !== i;) n.push(t);
			return r = n;
		}
		if (s.length === 0) {
			if (r = T(e, r, i), c) return r;
		} else l ? r.length === 0 ? w(e, s, i) : f(e, r, s) : (r && T(e), w(e, s));
		r = s;
	} else if (n.nodeType) {
		if (o && n.parentNode) return r = c ? [n] : n;
		if (Array.isArray(r)) {
			if (c) return r = T(e, r, i, n);
			T(e, r, null, n);
		} else r == null || r === "" || !e.firstChild ? e.appendChild(n) : e.replaceChild(n, e.firstChild);
		r = n;
	}
	return r;
}
function C(e, t, n, r) {
	let i = !1;
	for (let a = 0, o = t.length; a < o; a++) {
		let o = t[a], s = n && n[e.length], c;
		if (!(o == null || o === !0 || o === !1)) if ((c = typeof o) == "object" && o.nodeType) e.push(o);
		else if (Array.isArray(o)) i = C(e, o, s) || i;
		else if (c === "function") if (r) {
			for (; typeof o == "function";) o = o();
			i = C(e, Array.isArray(o) ? o : [o], Array.isArray(s) ? s : [s]) || i;
		} else e.push(o), i = !0;
		else {
			let t = String(o);
			s && s.nodeType === 3 && s.data === t ? e.push(s) : e.push(document.createTextNode(t));
		}
	}
	return i;
}
function w(e, t, n = null) {
	for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n);
}
function T(e, t, n, r) {
	if (n === void 0) return e.textContent = "";
	let i = r || document.createTextNode("");
	if (t.length) {
		let r = !1;
		for (let a = t.length - 1; a >= 0; a--) {
			let o = t[a];
			if (i !== o) {
				let t = o.parentNode === e;
				!r && !a ? t ? e.replaceChild(i, o) : e.insertBefore(i, n) : t && o.remove();
			} else r = !0;
		}
	} else e.insertBefore(i, n);
	return [i];
}
//#endregion
//#region src/components/IconBase.tsx
var de = /*#__PURE__*/ m("<svg xmlns=http://www.w3.org/2000/svg viewBox=\"0 0 24 24\"fill=none stroke-linecap=round stroke-linejoin=round>");
function E(e) {
	let [t, r] = i(e, [
		"size",
		"color",
		"strokeWidth",
		"children",
		"ref"
	]);
	return (() => {
		var e = de(), i = t.ref;
		return typeof i == "function" ? v(i, e) : t.ref = e, _(e, n({
			get width() {
				return t.size ?? 24;
			},
			get height() {
				return t.size ?? 24;
			},
			get stroke() {
				return t.color ?? "currentColor";
			},
			get "stroke-width"() {
				return t.strokeWidth ?? 2;
			}
		}, r), !0, !0), se(e, () => t.children), e;
	})();
}
E.displayName = "IconBase";
//#endregion
//#region src/icons/bookmark.tsx
var fe = /*#__PURE__*/ m("<svg><path d=\"M6 4h12v16l-6-5.5l-6 5.5z\"></svg>", !1, !0, !1);
function D(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return fe();
	} }));
}
D.displayName = "Bookmark";
//#endregion
//#region src/icons/chat.tsx
var pe = /*#__PURE__*/ m("<svg><path d=\"M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V15.3043C22 16.4089 21.1046 17.3043 20 17.3043H12H7.65891C7.23095 17.3043 6.81428 17.4416 6.47012 17.696L2.7972 20.4108C2.46715 20.6547 2 20.4191 2 20.0087V6Z\"></svg>", !1, !0, !1), me = /*#__PURE__*/ m("<svg><path d=\"M6 8L17 8\"></svg>", !1, !0, !1), he = /*#__PURE__*/ m("<svg><path d=\"M6 13H15\"></svg>", !1, !0, !1);
function O(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			pe(),
			me(),
			he()
		];
	} }));
}
O.displayName = "Chat";
//#endregion
//#region src/icons/close.tsx
var ge = /*#__PURE__*/ m("<svg><rect x=7.75736 y=6.34314 width=14 height=2 rx=1 transform=\"rotate(45 7.75736 6.34314)\"></svg>", !1, !0, !1), _e = /*#__PURE__*/ m("<svg><rect x=16.2426 y=6.34314 width=2 height=14 rx=1 transform=\"rotate(45 16.2426 6.34314)\"></svg>", !1, !0, !1);
function k(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ge(), _e()];
	} }));
}
k.displayName = "Close";
//#endregion
//#region src/icons/dashboard.tsx
var ve = /*#__PURE__*/ m("<svg><rect x=3 y=3 width=7 height=7 rx=1></svg>", !1, !0, !1), A = /*#__PURE__*/ m("<svg><rect x=14 y=3 width=7 height=7 rx=1></svg>", !1, !0, !1), j = /*#__PURE__*/ m("<svg><rect x=3 y=14 width=7 height=7 rx=1></svg>", !1, !0, !1), M = /*#__PURE__*/ m("<svg><rect x=14 y=14 width=7 height=7 rx=1></svg>", !1, !0, !1);
function N(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			ve(),
			A(),
			j(),
			M()
		];
	} }));
}
N.displayName = "Dashboard";
//#endregion
//#region src/icons/draft-book.tsx
var P = /*#__PURE__*/ m("<svg><path d=\"M4 18V20C4 21.1046 4.89543 22 6 22H13.1429H17.7143H19.8571M4 18H13.1429H17.7143H19.8571M4 18V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V17.8571C20 17.936 19.936 18 19.8571 18M20 22H19.8571M19.8571 18L19.2808 18.5379C18.4337 19.3286 18.4337 20.6714 19.2808 21.4621L19.8571 22\"></svg>", !1, !0, !1), F = /*#__PURE__*/ m("<svg><path d=\"M9.6 14H12M14.4 14H12M12 14V6M12 6H8.5C8.22386 6 8 6.22386 8 6.5V7.77778M12 6H15.5C15.7761 6 16 6.22386 16 6.5V7.77778\"></svg>", !1, !0, !1);
function I(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [P(), F()];
	} }));
}
I.displayName = "DraftBook";
//#endregion
//#region src/icons/file.tsx
var ye = /*#__PURE__*/ m("<svg><path d=\"M4 4C4 2.89543 4.89543 2 6 2H12H13.1716C13.702 2 14.2107 2.21071 14.5858 2.58579L19.4142 7.41421C19.7893 7.78929 20 8.29799 20 8.82843V12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z\"></svg>", !1, !0, !1), be = /*#__PURE__*/ m("<svg><path d=\"M13 2V7C13 8.10457 13.8954 9 15 9H20\"></svg>", !1, !0, !1);
function L(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [ye(), be()];
	} }));
}
L.displayName = "File";
//#endregion
//#region src/icons/folder.tsx
var xe = /*#__PURE__*/ m("<svg><path d=\"M3 7C3 5.89543 3.89543 5 5 5H7.4C8.02951 5 8.62229 5.29639 9 5.8L10.05 7.2C10.4277 7.70361 11.0205 8 11.65 8H19C20.1046 8 21 8.89543 21 10V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V13.5V8.75V7Z\"></svg>", !1, !0, !1);
function R(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return xe();
	} }));
}
R.displayName = "Folder";
//#endregion
//#region src/icons/heart.tsx
var Se = /*#__PURE__*/ m("<svg><path d=\"M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z\"></svg>", !1, !0, !1);
function z(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Se();
	} }));
}
z.displayName = "Heart";
//#endregion
//#region src/icons/home.tsx
var Ce = /*#__PURE__*/ m("<svg><path d=\"M3 9.46838C3 9.1716 3.13182 8.89015 3.35982 8.70015L11.3598 2.03349C11.7307 1.72445 12.2693 1.72445 12.6402 2.03349L20.6402 8.70015C20.8682 8.89015 21 9.1716 21 9.46837V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.46838Z\"></svg>", !1, !0, !1), we = /*#__PURE__*/ m("<svg><path d=\"M9 21V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V21\"></svg>", !1, !0, !1);
function B(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ce(), we()];
	} }));
}
B.displayName = "Home";
//#endregion
//#region src/icons/menu-vertical.tsx
var Te = /*#__PURE__*/ m("<svg><circle cx=12 cy=9 r=1></svg>", !1, !0, !1), V = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=1></svg>", !1, !0, !1), Ee = /*#__PURE__*/ m("<svg><circle cx=12 cy=15 r=1></svg>", !1, !0, !1);
function H(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Te(),
			V(),
			Ee()
		];
	} }));
}
H.displayName = "MenuVertical";
//#endregion
//#region src/icons/menu.tsx
var De = /*#__PURE__*/ m("<svg><rect x=4 y=5 width=16 height=2 rx=1></svg>", !1, !0, !1), Oe = /*#__PURE__*/ m("<svg><rect x=4 y=11 width=16 height=2 rx=1></svg>", !1, !0, !1), ke = /*#__PURE__*/ m("<svg><rect x=4 y=17 width=16 height=2 rx=1></svg>", !1, !0, !1);
function U(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			De(),
			Oe(),
			ke()
		];
	} }));
}
U.displayName = "Menu";
//#endregion
//#region src/icons/notification.tsx
var Ae = /*#__PURE__*/ m("<svg><path d=\"M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V13.0557C19 13.6767 19.1446 14.2892 19.4223 14.8446L20.5777 17.1554C20.8554 17.7108 21 18.3233 21 18.9443V19H3V18.9443C3 18.3233 3.14458 17.7108 3.42229 17.1554L4.57771 14.8446C4.85542 14.2892 5 13.6767 5 13.0557V9Z\"></svg>", !1, !0, !1), je = /*#__PURE__*/ m("<svg><path d=\"M10 22H14\"></svg>", !1, !0, !1);
function W(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Ae(), je()];
	} }));
}
W.displayName = "Notification";
//#endregion
//#region src/icons/pen-line.tsx
var Me = /*#__PURE__*/ m("<svg><g clip-path=url(#clip0_47_35)><path d=\"M8.21428 20.0643L21.1165 6.4117C22.155 5.31286 22.106 3.58026 21.0072 2.54182C19.9083 1.50338 18.1757 1.55234 17.1373 2.65117L4.18896 16.3525C4.11277 16.4332 4.05053 16.5259 4.00478 16.6269L1.72771 21.6562C1.54474 22.0603 1.93957 22.4848 2.35589 22.3316L7.83287 20.3159C7.97772 20.2626 8.10827 20.1765 8.21428 20.0643Z\"></path><path d=\"M12 21H21\"></svg>", !1, !0, !1), Ne = /*#__PURE__*/ m("<svg><defs><clipPath id=clip0_47_35><rect width=24 height=24></svg>", !1, !0, !1);
function G(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Me(), Ne()];
	} }));
}
G.displayName = "PenLine";
//#endregion
//#region src/icons/play-arrow.tsx
var Pe = /*#__PURE__*/ m("<svg><path d=\"M20.4183 11.7363C20.6175 11.8521 20.6172 12.1399 20.4179 12.2553L6.41609 20.3637C6.21599 20.4796 5.96555 20.3351 5.96575 20.1038L5.98014 3.86221C5.98034 3.63098 6.23104 3.4869 6.43094 3.60314L20.4183 11.7363Z\"></svg>", !1, !0, !1);
function K(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Pe();
	} }));
}
K.displayName = "PlayArrow";
//#endregion
//#region src/icons/plus.tsx
var Fe = /*#__PURE__*/ m("<svg><rect x=11 y=5 width=2 height=14 rx=1></svg>", !1, !0, !1), Ie = /*#__PURE__*/ m("<svg><rect x=19 y=11 width=2 height=14 rx=1 transform=\"rotate(90 19 11)\"></svg>", !1, !0, !1);
function q(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Fe(), Ie()];
	} }));
}
q.displayName = "Plus";
//#endregion
//#region src/icons/search.tsx
var Le = /*#__PURE__*/ m("<svg><circle cx=11 cy=11 r=8></svg>", !1, !0, !1), Re = /*#__PURE__*/ m("<svg><path d=\"M16.9471 17.0541L21 21\"></svg>", !1, !0, !1);
function J(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [Le(), Re()];
	} }));
}
J.displayName = "Search";
//#endregion
//#region src/icons/settings.tsx
var ze = /*#__PURE__*/ m("<svg><path d=\"M12.3192 2C13.7332 2.00023 14.955 2.9877 15.2518 4.37012L15.3056 4.61914C15.4302 5.19874 16.0289 5.54288 16.5927 5.35938L16.6972 5.3252C18.06 4.8816 19.5463 5.46451 20.245 6.71582L20.621 7.3877C21.2895 8.58516 21.0605 10.0838 20.0653 11.0273L19.8056 11.2734C19.3896 11.6677 19.3888 12.3311 19.8046 12.7256L20.0663 12.9727C21.0609 13.9162 21.2891 15.4142 20.621 16.6113L20.246 17.2842C19.5472 18.5358 18.0601 19.1177 16.6972 18.6738L16.5927 18.6396C16.0288 18.4561 15.4301 18.801 15.3056 19.3809L15.2518 19.6299C14.9551 21.0123 13.7331 21.9998 12.3192 22H11.6825C10.2688 22 9.04722 21.013 8.7499 19.6309L8.69619 19.3809C8.57156 18.8011 7.97197 18.4559 7.4081 18.6396L7.30458 18.6738C5.94167 19.1179 4.45466 18.5356 3.75576 17.2842L3.38076 16.6113C2.71254 15.4141 2.94069 13.9162 3.93544 12.9727L4.19619 12.7256C4.61197 12.3312 4.61197 11.6688 4.19619 11.2744L3.93544 11.0273C2.94058 10.0837 2.71227 8.58496 3.38076 7.3877L3.75576 6.71582C4.45452 5.46434 5.94166 4.88244 7.30458 5.32617L7.4081 5.35938C7.97191 5.54294 8.57155 5.19883 8.69619 4.61914L8.7499 4.36914C9.04721 2.98706 10.2687 2 11.6825 2H12.3192ZM11.6825 4C11.2112 4 10.8041 4.32929 10.705 4.79004L10.6513 5.03906C10.2774 6.77815 8.4804 7.81241 6.78896 7.26172L6.68544 7.22754C6.23113 7.07963 5.73574 7.27425 5.50283 7.69141L5.12685 8.36328C4.90414 8.76235 4.9808 9.26166 5.3124 9.57617L5.57216 9.82324C6.81951 11.0063 6.81952 12.9937 5.57216 14.1768L5.3124 14.4238C4.98079 14.7383 4.90412 15.2376 5.12685 15.6367L5.50185 16.3086C5.73482 16.7259 6.23108 16.9206 6.68544 16.7725L6.78896 16.7383C8.48045 16.1873 10.2773 17.2208 10.6513 18.96L10.705 19.21C10.804 19.6707 11.2112 20 11.6825 20H12.3192C12.7904 19.9998 13.1978 19.6707 13.2968 19.21L13.3495 18.9609C13.7231 17.2214 15.52 16.1875 17.2118 16.7383L17.3163 16.7725C17.7707 16.9205 18.2659 16.7259 18.4989 16.3086L18.8749 15.6367C19.0976 15.2377 19.021 14.7383 18.6893 14.4238L18.4286 14.1758C17.1812 12.9924 17.1815 11.0052 18.4296 9.82227L18.6893 9.57617C19.0212 9.26164 19.0968 8.76149 18.8739 8.3623L18.4989 7.69043C18.2659 7.27356 17.7705 7.07972 17.3163 7.22754L17.2118 7.26172C15.5203 7.81231 13.7231 6.77832 13.3495 5.03906L13.2968 4.79004C13.1978 4.32934 12.7904 4.00023 12.3192 4H11.6825ZM12.0009 8.5C13.9338 8.50007 15.5009 10.067 15.5009 12C15.5009 13.933 13.9338 15.4999 12.0009 15.5C10.0679 15.5 8.50087 13.933 8.50087 12C8.50087 10.067 10.0679 8.5 12.0009 8.5ZM12.0009 10.5C11.1724 10.5 10.5009 11.1716 10.5009 12C10.5009 12.8284 11.1724 13.5 12.0009 13.5C12.8292 13.4999 13.5009 12.8284 13.5009 12C13.5009 11.1716 12.8292 10.5001 12.0009 10.5Z\"></svg>", !1, !0, !1);
function Y(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return ze();
	} }));
}
Y.displayName = "Settings";
//#endregion
//#region src/icons/share.tsx
var Be = /*#__PURE__*/ m("<svg><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></svg>", !1, !0, !1), Ve = /*#__PURE__*/ m("<svg><polyline points=\"16 6 12 2 8 6\"></svg>", !1, !0, !1), He = /*#__PURE__*/ m("<svg><line x1=12 y1=2 x2=12 y2=15></svg>", !1, !0, !1);
function X(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Be(),
			Ve(),
			He()
		];
	} }));
}
X.displayName = "Share";
//#endregion
//#region src/icons/star.tsx
var Ue = /*#__PURE__*/ m("<svg><path d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"></svg>", !1, !0, !1);
function Z(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return Ue();
	} }));
}
Z.displayName = "Star";
//#endregion
//#region src/icons/thumb.tsx
var We = /*#__PURE__*/ m("<svg><path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></svg>", !1, !0, !1);
function Q(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return We();
	} }));
}
Q.displayName = "Thumb";
//#endregion
//#region src/icons/users.tsx
var Ge = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), Ke = /*#__PURE__*/ m("<svg><path d=\"M18 21C18 16.5817 14.4183 13 10 13C5.58172 13 2 16.5817 2 21\"></svg>", !1, !0, !1), qe = /*#__PURE__*/ m("<svg><path d=\"M18 4C18.8333 5.33333 20 8.9 18 12.5\"></svg>", !1, !0, !1), Je = /*#__PURE__*/ m("<svg><path d=\"M18 12.5C19.5 13.8333 22.4 17.4 22 21\"></svg>", !1, !0, !1);
function $(t) {
	return e(E, n({
		get size() {
			return t.size ?? 24;
		},
		get color() {
			return t.color ?? "currentColor";
		},
		get strokeWidth() {
			return t.strokeWidth ?? 2;
		}
	}, t, { get children() {
		return [
			Ge(),
			Ke(),
			qe(),
			Je()
		];
	} }));
}
$.displayName = "Users";
//#endregion
export { D as Bookmark, O as Chat, k as Close, N as Dashboard, I as DraftBook, L as File, R as Folder, z as Heart, B as Home, U as Menu, H as MenuVertical, W as Notification, G as PenLine, K as PlayArrow, q as Plus, J as Search, Y as Settings, X as Share, Z as Star, Q as Thumb, $ as Users };

//# sourceMappingURL=index.js.map