import { createComponent as e, createRenderEffect as t, mergeProps as n, sharedConfig as r, splitProps as i, untrack as a } from "solid-js";
//#region ../../node_modules/.pnpm/solid-js@1.9.14/node_modules/solid-js/web/dist/web.js
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
		n.has(i) || (n.add(i), t.addEventListener(i, pe));
	}
}
function h(e, t, n) {
	v(e) || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function ne(e, t, n, r) {
	v(e) || (r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r));
}
function re(e, t, n) {
	v(e) || (n ? e.setAttribute(t, "") : e.removeAttribute(t));
}
function ie(e, t) {
	v(e) || (t == null ? e.removeAttribute("class") : e.className = t);
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
		!r || r === "undefined" || t[r] || (de(e, r, !1), delete n[r]);
	}
	for (a = 0, o = r.length; a < o; a++) {
		let i = r[a], o = !!t[i];
		!i || i === "undefined" || n[i] === o || !o || (de(e, i, !0), n[i] = o);
	}
	return n;
}
function se(e, t, n) {
	if (!t) return n ? h(e, "style") : t;
	let r = e.style;
	if (typeof t == "string") return r.cssText = t;
	typeof n == "string" && (r.cssText = n = void 0), n ||= {}, t ||= {};
	let i, a;
	for (a in n) t[a] ?? r.removeProperty(a), delete n[a];
	for (a in t) i = t[a], i !== n[a] && (r.setProperty(a, i), n[a] = i);
	return n;
}
function g(e, n = {}, r, i) {
	let a = {};
	return i || t(() => a.children = y(e, n.children, a.children)), t(() => typeof n.ref == "function" && _(n.ref, e)), t(() => le(e, n, r, !0, a, !0)), a;
}
function _(e, t, n) {
	return a(() => e(t, n));
}
function ce(e, n, r, i) {
	if (r !== void 0 && !i && (i = []), typeof n != "function") return y(e, n, i, r);
	t((t) => y(e, n(), t, r), i);
}
function le(e, t, n, r, i = {}, a = !1) {
	t ||= {};
	for (let r in i) if (!(r in t)) {
		if (r === "children") continue;
		i[r] = fe(e, r, null, i[r], n, a, t);
	}
	for (let o in t) {
		if (o === "children") {
			r || y(e, t.children);
			continue;
		}
		let s = t[o];
		i[o] = fe(e, o, s, i[o], n, a, t);
	}
}
function v(e) {
	return !!r.context && !r.done && (!e || e.isConnected);
}
function ue(e) {
	return e.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function de(e, t, n) {
	let r = t.trim().split(/\s+/);
	for (let t = 0, i = r.length; t < i; t++) e.classList.toggle(r[t], n);
}
function fe(e, t, n, r, i, a, l) {
	let f, p, m, g, _;
	if (t === "style") return se(e, n, r);
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
	else if ((_ = t.slice(0, 5) === "prop:") || (m = s.has(t)) || !i && ((g = u(t, e.tagName)) || (p = o.has(t))) || (f = e.nodeName.includes("-") || "is" in l)) {
		if (_) t = t.slice(5), p = !0;
		else if (v(e)) return n;
		t === "class" || t === "className" ? ie(e, n) : f && !p && !m ? e[ue(t)] = n : e[g || t] = n;
	} else {
		let r = i && t.indexOf(":") > -1 && ee[t.split(":")[0]];
		r ? ne(e, r, t, n) : h(e, c[t] || t, n);
	}
	return n;
}
function pe(e) {
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
function y(e, n, r, i, a) {
	let o = v(e);
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
			t && t.nodeType === 3 ? t.data !== n && (t.data = n) : t = document.createTextNode(n), r = x(e, r, i, t);
		} else r = r !== "" && typeof r == "string" ? e.firstChild.data = n : e.textContent = n;
	} else if (n == null || s === "boolean") {
		if (o) return r;
		r = x(e, r, i);
	} else if (s === "function") return t(() => {
		let t = n();
		for (; typeof t == "function";) t = t();
		r = y(e, t, r, i);
	}), () => r;
	else if (Array.isArray(n)) {
		let s = [], l = r && Array.isArray(r);
		if (b(s, n, r, a)) return t(() => r = y(e, s, r, i, !0)), () => r;
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
			if (r = x(e, r, i), c) return r;
		} else l ? r.length === 0 ? me(e, s, i) : f(e, r, s) : (r && x(e), me(e, s));
		r = s;
	} else if (n.nodeType) {
		if (o && n.parentNode) return r = c ? [n] : n;
		if (Array.isArray(r)) {
			if (c) return r = x(e, r, i, n);
			x(e, r, null, n);
		} else r == null || r === "" || !e.firstChild ? e.appendChild(n) : e.replaceChild(n, e.firstChild);
		r = n;
	}
	return r;
}
function b(e, t, n, r) {
	let i = !1;
	for (let a = 0, o = t.length; a < o; a++) {
		let o = t[a], s = n && n[e.length], c;
		if (!(o == null || o === !0 || o === !1)) if ((c = typeof o) == "object" && o.nodeType) e.push(o);
		else if (Array.isArray(o)) i = b(e, o, s) || i;
		else if (c === "function") if (r) {
			for (; typeof o == "function";) o = o();
			i = b(e, Array.isArray(o) ? o : [o], Array.isArray(s) ? s : [s]) || i;
		} else e.push(o), i = !0;
		else {
			let t = String(o);
			s && s.nodeType === 3 && s.data === t ? e.push(s) : e.push(document.createTextNode(t));
		}
	}
	return i;
}
function me(e, t, n = null) {
	for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n);
}
function x(e, t, n, r) {
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
var he = /*#__PURE__*/ m("<svg xmlns=http://www.w3.org/2000/svg viewBox=\"0 0 24 24\"fill=none stroke-linecap=round stroke-linejoin=round>");
function S(e) {
	let [t, r] = i(e, [
		"size",
		"color",
		"strokeWidth",
		"children",
		"ref"
	]);
	return (() => {
		var e = he(), i = t.ref;
		return typeof i == "function" ? _(i, e) : t.ref = e, g(e, n({
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
		}, r), !0, !0), ce(e, () => t.children), e;
	})();
}
S.displayName = "IconBase";
//#endregion
//#region src/icons/alert.tsx
var ge = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), _e = /*#__PURE__*/ m("<svg><path d=\"M12 8v5\"></svg>", !1, !0, !1), ve = /*#__PURE__*/ m("<svg><circle cx=12 cy=16 r=0.5></svg>", !1, !0, !1);
function C(t) {
	return e(S, n({
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
			ge(),
			_e(),
			ve()
		];
	} }));
}
C.displayName = "Alert";
//#endregion
//#region src/icons/angry.tsx
var ye = /*#__PURE__*/ m("<svg><path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z\"></svg>", !1, !0, !1), be = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\"></svg>", !1, !0, !1), xe = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\"></svg>", !1, !0, !1), Se = /*#__PURE__*/ m("<svg><path d=\"M8 16c1.769-3.095 6.231-3.095 8 0\"></svg>", !1, !0, !1), Ce = /*#__PURE__*/ m("<svg><path d=\"m7 7 2 1\"></svg>", !1, !0, !1), we = /*#__PURE__*/ m("<svg><path d=\"m15 8 2-1\"></svg>", !1, !0, !1);
function w(t) {
	return e(S, n({
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
			ye(),
			be(),
			xe(),
			Se(),
			Ce(),
			we()
		];
	} }));
}
w.displayName = "Angry";
//#endregion
//#region src/icons/annoyed.tsx
var Te = /*#__PURE__*/ m("<svg><path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z\"></svg>", !1, !0, !1), Ee = /*#__PURE__*/ m("<svg><path d=\"M8 15h8\"></svg>", !1, !0, !1), De = /*#__PURE__*/ m("<svg><path d=\"M8 9h2\"></svg>", !1, !0, !1), Oe = /*#__PURE__*/ m("<svg><path d=\"M14 9h2\"></svg>", !1, !0, !1);
function T(t) {
	return e(S, n({
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
			Ee(),
			De(),
			Oe()
		];
	} }));
}
T.displayName = "Annoyed";
//#endregion
//#region src/icons/arrow-left-from-line.tsx
var ke = /*#__PURE__*/ m("<svg><path d=\"m9 7-5.87 5.798c-.173.111-.173.293 0 .404L9 19\"></svg>", !1, !0, !1), Ae = /*#__PURE__*/ m("<svg><path d=\"M5 13h12\"></svg>", !1, !0, !1), je = /*#__PURE__*/ m("<svg><path d=\"M21 6v14\"></svg>", !1, !0, !1);
function E(t) {
	return e(S, n({
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
			ke(),
			Ae(),
			je()
		];
	} }));
}
E.displayName = "ArrowLeftFromLine";
//#endregion
//#region src/icons/arrow-left-to-line.tsx
var Me = /*#__PURE__*/ m("<svg><path d=\"m13 6-5.87 5.798c-.173.111-.173.293 0 .404L13 18\"></svg>", !1, !0, !1), Ne = /*#__PURE__*/ m("<svg><path d=\"M9 12h12\"></svg>", !1, !0, !1), Pe = /*#__PURE__*/ m("<svg><path d=\"M3 5v14\"></svg>", !1, !0, !1);
function D(t) {
	return e(S, n({
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
			Me(),
			Ne(),
			Pe()
		];
	} }));
}
D.displayName = "ArrowLeftToLine";
//#endregion
//#region src/icons/arrow-left.tsx
var Fe = /*#__PURE__*/ m("<svg><path d=\"m12 5-6.646 6.646a.5.5 0 0 0 0 .708L12 19\"></svg>", !1, !0, !1), Ie = /*#__PURE__*/ m("<svg><path d=\"M6 12h13\"></svg>", !1, !0, !1);
function O(t) {
	return e(S, n({
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
O.displayName = "ArrowLeft";
//#endregion
//#region src/icons/arrow-right-from-line.tsx
var Le = /*#__PURE__*/ m("<svg><path d=\"M7 12h12\"></svg>", !1, !0, !1), Re = /*#__PURE__*/ m("<svg><path d=\"M3 5v14\"></svg>", !1, !0, !1), ze = /*#__PURE__*/ m("<svg><path d=\"m15 6 5.848 5.646a.49.49 0 0 1 0 .708L15 18\"></svg>", !1, !0, !1);
function k(t) {
	return e(S, n({
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
			Le(),
			Re(),
			ze()
		];
	} }));
}
k.displayName = "ArrowRightFromLine";
//#endregion
//#region src/icons/arrow-right-to-line.tsx
var Be = /*#__PURE__*/ m("<svg><path d=\"M3 12.051h12\"></svg>", !1, !0, !1), Ve = /*#__PURE__*/ m("<svg><path d=\"M21 5v14\"></svg>", !1, !0, !1), He = /*#__PURE__*/ m("<svg><path d=\"m11 6 5.646 5.646a.5.5 0 0 1 0 .708L11 18\"></svg>", !1, !0, !1);
function A(t) {
	return e(S, n({
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
A.displayName = "ArrowRightToLine";
//#endregion
//#region src/icons/arrow-up-left.tsx
var Ue = /*#__PURE__*/ m("<svg><path d=\"m8 8 9 9\"></svg>", !1, !0, !1), We = /*#__PURE__*/ m("<svg><path d=\"M7 17V7.5a.5.5 0 0 1 .5-.5H17\"></svg>", !1, !0, !1);
function j(t) {
	return e(S, n({
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
		return [Ue(), We()];
	} }));
}
j.displayName = "ArrowUpLeft";
//#endregion
//#region src/icons/arrow-up-right.tsx
var Ge = /*#__PURE__*/ m("<svg><path d=\"M7 7h9.5a.5.5 0 0 1 .5.5V17\"></svg>", !1, !0, !1), Ke = /*#__PURE__*/ m("<svg><path d=\"m7 17 9-9\"></svg>", !1, !0, !1);
function M(t) {
	return e(S, n({
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
		return [Ge(), Ke()];
	} }));
}
M.displayName = "ArrowUpRight";
//#endregion
//#region src/icons/bar-chart.tsx
var qe = /*#__PURE__*/ m("<svg><path d=\"M3 3v17a1 1 0 0 0 1 1h17\"></svg>", !1, !0, !1), Je = /*#__PURE__*/ m("<svg><path d=\"M7 6h4\"></svg>", !1, !0, !1), Ye = /*#__PURE__*/ m("<svg><path d=\"M7 11h12\"></svg>", !1, !0, !1), Xe = /*#__PURE__*/ m("<svg><path d=\"M7 16h8\"></svg>", !1, !0, !1);
function N(t) {
	return e(S, n({
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
			qe(),
			Je(),
			Ye(),
			Xe()
		];
	} }));
}
N.displayName = "BarChart";
//#endregion
//#region src/icons/bell-ring.tsx
var Ze = /*#__PURE__*/ m("<svg><path d=\"M5.778 9.588C5.778 5.95 8.564 3 12 3s6.222 2.95 6.222 6.588v3.817c0 .585.129 1.161.376 1.684l1.027 2.175c.247.523.375 1.1.375 1.684V19H4v-.052c0-.585.129-1.161.375-1.684l1.027-2.175c.247-.523.376-1.1.376-1.684z\"></svg>", !1, !0, !1), Qe = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1), $e = /*#__PURE__*/ m("<svg><path d=\"M2 8c.167-.833.5-3.5 3-6\"></svg>", !1, !0, !1), et = /*#__PURE__*/ m("<svg><path d=\"M19 2c.833.833 2.6 3.2 3 6\"></svg>", !1, !0, !1);
function P(t) {
	return e(S, n({
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
			Ze(),
			Qe(),
			$e(),
			et()
		];
	} }));
}
P.displayName = "BellRing";
//#endregion
//#region src/icons/bookmark.tsx
var tt = /*#__PURE__*/ m("<svg><path d=\"M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.229a1 1 0 0 1-1.517.856l-4.966-2.996a1 1 0 0 0-1.033 0l-4.968 2.996A1 1 0 0 1 5 20.23z\"></svg>", !1, !0, !1);
function F(t) {
	return e(S, n({
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
		return tt();
	} }));
}
F.displayName = "Bookmark";
//#endregion
//#region src/icons/calendar-check.tsx
var nt = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"></svg>", !1, !0, !1), rt = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), it = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), at = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), ot = /*#__PURE__*/ m("<svg><path d=\"m9 16.4 1.93 1.544a.1.1 0 0 0 .133-.007L15 14\"></svg>", !1, !0, !1);
function I(t) {
	return e(S, n({
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
			nt(),
			rt(),
			it(),
			at(),
			ot()
		];
	} }));
}
I.displayName = "CalendarCheck";
//#endregion
//#region src/icons/calendar-days.tsx
var st = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"></svg>", !1, !0, !1), ct = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), lt = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), ut = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), dt = /*#__PURE__*/ m("<svg><circle cx=8 cy=14 r=0.5></svg>", !1, !0, !1), ft = /*#__PURE__*/ m("<svg><circle cx=8 cy=18 r=0.5></svg>", !1, !0, !1), pt = /*#__PURE__*/ m("<svg><circle cx=12 cy=18 r=0.5></svg>", !1, !0, !1), mt = /*#__PURE__*/ m("<svg><circle cx=16 cy=18 r=0.5></svg>", !1, !0, !1), ht = /*#__PURE__*/ m("<svg><circle cx=12 cy=14 r=0.5></svg>", !1, !0, !1), gt = /*#__PURE__*/ m("<svg><circle cx=16 cy=14 r=0.5></svg>", !1, !0, !1);
function L(t) {
	return e(S, n({
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
			st(),
			ct(),
			lt(),
			ut(),
			dt(),
			ft(),
			pt(),
			mt(),
			ht(),
			gt()
		];
	} }));
}
L.displayName = "CalendarDays";
//#endregion
//#region src/icons/calendar-x.tsx
var _t = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"></svg>", !1, !0, !1), vt = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), yt = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), bt = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), xt = /*#__PURE__*/ m("<svg><path d=\"m10 14 4 4\"></svg>", !1, !0, !1), St = /*#__PURE__*/ m("<svg><path d=\"m10 18 4-4\"></svg>", !1, !0, !1);
function R(t) {
	return e(S, n({
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
			_t(),
			vt(),
			yt(),
			bt(),
			xt(),
			St()
		];
	} }));
}
R.displayName = "CalendarX";
//#endregion
//#region src/icons/calendar.tsx
var Ct = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=4 rx=2></svg>", !1, !0, !1), wt = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), Tt = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Et = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1);
function z(t) {
	return e(S, n({
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
			Ct(),
			wt(),
			Tt(),
			Et()
		];
	} }));
}
z.displayName = "Calendar";
//#endregion
//#region src/icons/chat.tsx
var Dt = /*#__PURE__*/ m("<svg><path d=\"M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9.304a2 2 0 0 1-2 2H7.659a2 2 0 0 0-1.189.392l-3.673 2.715A.5.5 0 0 1 2 20.009z\"></svg>", !1, !0, !1), Ot = /*#__PURE__*/ m("<svg><path d=\"M6 8h11\"></svg>", !1, !0, !1), kt = /*#__PURE__*/ m("<svg><path d=\"M6 13h9\"></svg>", !1, !0, !1);
function B(t) {
	return e(S, n({
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
			Dt(),
			Ot(),
			kt()
		];
	} }));
}
B.displayName = "Chat";
//#endregion
//#region src/icons/check.tsx
var At = /*#__PURE__*/ m("<svg><path d=\"m4 13 8.07 5.675a.5.5 0 0 0 .73-.174L20 5\"></svg>", !1, !0, !1);
function V(t) {
	return e(S, n({
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
		return At();
	} }));
}
V.displayName = "Check";
//#endregion
//#region src/icons/chevron-down.tsx
var jt = /*#__PURE__*/ m("<svg><path d=\"m6 9 5.646 5.646a.5.5 0 0 0 .708 0L18 9\"></svg>", !1, !0, !1);
function H(t) {
	return e(S, n({
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
		return jt();
	} }));
}
H.displayName = "ChevronDown";
//#endregion
//#region src/icons/chevron-up.tsx
var Mt = /*#__PURE__*/ m("<svg><path d=\"m6 15 5.646-5.646a.5.5 0 0 1 .708 0L18 15\"></svg>", !1, !0, !1);
function U(t) {
	return e(S, n({
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
		return Mt();
	} }));
}
U.displayName = "ChevronUp";
//#endregion
//#region src/icons/chevrons-down-up.tsx
var Nt = /*#__PURE__*/ m("<svg><path d=\"m7 4 4.705 4.874a.407.407 0 0 0 .59 0L17 4\"></svg>", !1, !0, !1), Pt = /*#__PURE__*/ m("<svg><path d=\"m7 20 4.646-4.646a.5.5 0 0 1 .708 0L17 20\"></svg>", !1, !0, !1);
function W(t) {
	return e(S, n({
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
		return [Nt(), Pt()];
	} }));
}
W.displayName = "ChevronsDownUp";
//#endregion
//#region src/icons/chevrons-down.tsx
var Ft = /*#__PURE__*/ m("<svg><path d=\"m7 6 4.705 4.874a.407.407 0 0 0 .59 0L17 6\"></svg>", !1, !0, !1), It = /*#__PURE__*/ m("<svg><path d=\"m7 13 4.705 4.874a.407.407 0 0 0 .59 0L17 13\"></svg>", !1, !0, !1);
function G(t) {
	return e(S, n({
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
		return [Ft(), It()];
	} }));
}
G.displayName = "ChevronsDown";
//#endregion
//#region src/icons/chevrons-up-down.tsx
var Lt = /*#__PURE__*/ m("<svg><path d=\"m7 9 4.646-4.646a.5.5 0 0 1 .708 0L17 9\"></svg>", !1, !0, !1), Rt = /*#__PURE__*/ m("<svg><path d=\"m7 15 4.646 4.646a.5.5 0 0 0 .708 0L17 15\"></svg>", !1, !0, !1);
function K(t) {
	return e(S, n({
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
		return [Lt(), Rt()];
	} }));
}
K.displayName = "ChevronsUpDown";
//#endregion
//#region src/icons/chevrons-up.tsx
var zt = /*#__PURE__*/ m("<svg><path d=\"m7 11 4.646-4.646a.5.5 0 0 1 .708 0L17 11\"></svg>", !1, !0, !1), Bt = /*#__PURE__*/ m("<svg><path d=\"m7 18 4.646-4.646a.5.5 0 0 1 .708 0L17 18\"></svg>", !1, !0, !1);
function q(t) {
	return e(S, n({
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
		return [zt(), Bt()];
	} }));
}
q.displayName = "ChevronsUp";
//#endregion
//#region src/icons/circle-arrow-left.tsx
var Vt = /*#__PURE__*/ m("<svg><path d=\"m12 8-3.914 3.798a.28.28 0 0 0 0 .404L12 16\"></svg>", !1, !0, !1), Ht = /*#__PURE__*/ m("<svg><path d=\"M9 12h7\"></svg>", !1, !0, !1), Ut = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function J(t) {
	return e(S, n({
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
			Vt(),
			Ht(),
			Ut()
		];
	} }));
}
J.displayName = "CircleArrowLeft";
//#endregion
//#region src/icons/circle-arrow-out-up-left.tsx
var Wt = /*#__PURE__*/ m("<svg><path d=\"m3 3 8 8\"></svg>", !1, !0, !1), Gt = /*#__PURE__*/ m("<svg><path d=\"M2 8V2.5a.5.5 0 0 1 .5-.5H8\"></svg>", !1, !0, !1), Kt = /*#__PURE__*/ m("<svg><path d=\"M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2\"></svg>", !1, !0, !1);
function Y(t) {
	return e(S, n({
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
			Wt(),
			Gt(),
			Kt()
		];
	} }));
}
Y.displayName = "CircleArrowOutUpLeft";
//#endregion
//#region src/icons/circle-arrow-out-up-right.tsx
var qt = /*#__PURE__*/ m("<svg><path d=\"M16 2h5.5a.5.5 0 0 1 .5.5V8\"></svg>", !1, !0, !1), Jt = /*#__PURE__*/ m("<svg><path d=\"m13 11 8-8\"></svg>", !1, !0, !1), Yt = /*#__PURE__*/ m("<svg><path d=\"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2\"></svg>", !1, !0, !1);
function X(t) {
	return e(S, n({
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
			qt(),
			Jt(),
			Yt()
		];
	} }));
}
X.displayName = "CircleArrowOutUpRight";
//#endregion
//#region src/icons/circle-chevron-down.tsx
var Xt = /*#__PURE__*/ m("<svg><path d=\"m8 10 3.764 3.899c.13.135.341.135.472 0L16 10\"></svg>", !1, !0, !1), Zt = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function Z(t) {
	return e(S, n({
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
		return [Xt(), Zt()];
	} }));
}
Z.displayName = "CircleChevronDown";
//#endregion
//#region src/icons/circle-chevron-up.tsx
var Qt = /*#__PURE__*/ m("<svg><path d=\"m8 14 3.646-3.646a.5.5 0 0 1 .708 0L16 14\"></svg>", !1, !0, !1), $t = /*#__PURE__*/ m("<svg><path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z\"></svg>", !1, !0, !1);
function Q(t) {
	return e(S, n({
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
		return [Qt(), $t()];
	} }));
}
Q.displayName = "CircleChevronUp";
//#endregion
//#region src/icons/clock-arrow-left.tsx
var en = /*#__PURE__*/ m("<svg><path d=\"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10\"></svg>", !1, !0, !1), tn = /*#__PURE__*/ m("<svg><path d=\"m18 13-3.914 3.899c-.115.056-.115.146 0 .202L18 21\"></svg>", !1, !0, !1), nn = /*#__PURE__*/ m("<svg><path d=\"M15 17h7\"></svg>", !1, !0, !1), rn = /*#__PURE__*/ m("<svg><path d=\"M12 6v5l1 1\"></svg>", !1, !0, !1);
function an(t) {
	return e(S, n({
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
			en(),
			tn(),
			nn(),
			rn()
		];
	} }));
}
an.displayName = "ClockArrowLeft";
//#endregion
//#region src/icons/column-chart-plain-increasing.tsx
var on = /*#__PURE__*/ m("<svg><path d=\"M5 21v-6\"></svg>", !1, !0, !1), sn = /*#__PURE__*/ m("<svg><path d=\"M19 3v18\"></svg>", !1, !0, !1), cn = /*#__PURE__*/ m("<svg><path d=\"M12 21V9\"></svg>", !1, !0, !1);
function ln(t) {
	return e(S, n({
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
			on(),
			sn(),
			cn()
		];
	} }));
}
ln.displayName = "ColumnChartPlainIncreasing";
//#endregion
//#region src/icons/column-chart.tsx
var un = /*#__PURE__*/ m("<svg><path d=\"M3 3v17a1 1 0 0 0 1 1h17\"></svg>", !1, !0, !1), dn = /*#__PURE__*/ m("<svg><path d=\"M8 17v-4\"></svg>", !1, !0, !1), fn = /*#__PURE__*/ m("<svg><path d=\"M13 5v12\"></svg>", !1, !0, !1), pn = /*#__PURE__*/ m("<svg><path d=\"M18 17V9\"></svg>", !1, !0, !1);
function mn(t) {
	return e(S, n({
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
			un(),
			dn(),
			fn(),
			pn()
		];
	} }));
}
mn.displayName = "ColumnChart";
//#endregion
//#region src/icons/credit-card.tsx
var hn = /*#__PURE__*/ m("<svg><path d=\"M2 10v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7M2 10V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3M2 10h20\"></svg>", !1, !0, !1);
function gn(t) {
	return e(S, n({
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
		return hn();
	} }));
}
gn.displayName = "CreditCard";
//#endregion
//#region src/icons/download.tsx
var _n = /*#__PURE__*/ m("<svg><path d=\"M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4\"></svg>", !1, !0, !1), vn = /*#__PURE__*/ m("<svg><path d=\"m6 10 5.293 5.293a1 1 0 0 0 1.414 0L18 10\"></svg>", !1, !0, !1), yn = /*#__PURE__*/ m("<svg><path d=\"M12 3v11\"></svg>", !1, !0, !1);
function bn(t) {
	return e(S, n({
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
			_n(),
			vn(),
			yn()
		];
	} }));
}
bn.displayName = "Download";
//#endregion
//#region src/icons/draft-book.tsx
var xn = /*#__PURE__*/ m("<svg><path d=\"M4 18v2a2 2 0 0 0 2 2h13.857M4 18h15.857M4 18V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.857a.143.143 0 0 1-.143.143M20 22h-.143m0-4-.576.538a2 2 0 0 0 0 2.924l.576.538\"></svg>", !1, !0, !1), Sn = /*#__PURE__*/ m("<svg><path d=\"M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.278M12 6h3.5a.5.5 0 0 1 .5.5v1.278\"></svg>", !1, !0, !1);
function Cn(t) {
	return e(S, n({
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
		return [xn(), Sn()];
	} }));
}
Cn.displayName = "DraftBook";
//#endregion
//#region src/icons/external-link.tsx
var wn = /*#__PURE__*/ m("<svg><path d=\"M18 13v7.583c0 .23-.187.417-.417.417H3.417A.417.417 0 0 1 3 20.583V6.417c0-.23.187-.417.417-.417H11\"></svg>", !1, !0, !1), Tn = /*#__PURE__*/ m("<svg><path d=\"M15 3h5.5a.5.5 0 0 1 .5.5V9\"></svg>", !1, !0, !1), En = /*#__PURE__*/ m("<svg><path d=\"M10 14 20 4\"></svg>", !1, !0, !1);
function Dn(t) {
	return e(S, n({
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
			wn(),
			Tn(),
			En()
		];
	} }));
}
Dn.displayName = "ExternalLink";
//#endregion
//#region src/icons/eye-closed.tsx
var On = /*#__PURE__*/ m("<svg><path d=\"M21 8c0 3.314-4.03 6-9 6s-9-2.686-9-6\"></svg>", !1, !0, !1), kn = /*#__PURE__*/ m("<svg><path d=\"m5 12-3 3\"></svg>", !1, !0, !1), An = /*#__PURE__*/ m("<svg><path d=\"m19 12 3 3\"></svg>", !1, !0, !1), jn = /*#__PURE__*/ m("<svg><path d=\"m9 14-1 4\"></svg>", !1, !0, !1), Mn = /*#__PURE__*/ m("<svg><path d=\"m14 14 1 4\"></svg>", !1, !0, !1);
function Nn(t) {
	return e(S, n({
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
			On(),
			kn(),
			An(),
			jn(),
			Mn()
		];
	} }));
}
Nn.displayName = "EyeClosed";
//#endregion
//#region src/icons/eye.tsx
var Pn = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1), Fn = /*#__PURE__*/ m("<svg><path d=\"M2 12C5 6.718 13.2-.678 22 12\"></svg>", !1, !0, !1), In = /*#__PURE__*/ m("<svg><path d=\"M22.008 12.023c-3 5.282-11.2 12.678-20 0\"></svg>", !1, !0, !1);
function Ln(t) {
	return e(S, n({
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
			Pn(),
			Fn(),
			In()
		];
	} }));
}
Ln.displayName = "Eye";
//#endregion
//#region src/icons/file.tsx
var Rn = /*#__PURE__*/ m("<svg><path d=\"M4 4a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 20 8.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), zn = /*#__PURE__*/ m("<svg><path d=\"M13 2v5a2 2 0 0 0 2 2h5\"></svg>", !1, !0, !1);
function Bn(t) {
	return e(S, n({
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
		return [Rn(), zn()];
	} }));
}
Bn.displayName = "File";
//#endregion
//#region src/icons/folder.tsx
var Vn = /*#__PURE__*/ m("<svg><path d=\"M3 7a2 2 0 0 1 2-2h2.4a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z\"></svg>", !1, !0, !1);
function Hn(t) {
	return e(S, n({
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
		return Vn();
	} }));
}
Hn.displayName = "Folder";
//#endregion
//#region src/icons/frown.tsx
var Un = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Wn = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1), Gn = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=0.5></svg>", !1, !0, !1), Kn = /*#__PURE__*/ m("<svg><path d=\"M8 16c1.769-3.095 6.231-3.095 8 0\"></svg>", !1, !0, !1);
function qn(t) {
	return e(S, n({
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
			Un(),
			Wn(),
			Gn(),
			Kn()
		];
	} }));
}
qn.displayName = "Frown";
//#endregion
//#region src/icons/grid-2x2-plus.tsx
var Jn = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), Yn = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), Xn = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1), Zn = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), Qn = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function $n(t) {
	return e(S, n({
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
			Jn(),
			Yn(),
			Xn(),
			Zn(),
			Qn()
		];
	} }));
}
$n.displayName = "Grid2x2Plus";
//#endregion
//#region src/icons/grid-2x2-x.tsx
var er = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), tr = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), nr = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1), rr = /*#__PURE__*/ m("<svg><path d=\"m16 16 6 5\"></svg>", !1, !0, !1), ir = /*#__PURE__*/ m("<svg><path d=\"m16 21 6-5\"></svg>", !1, !0, !1);
function ar(t) {
	return e(S, n({
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
			er(),
			tr(),
			nr(),
			rr(),
			ir()
		];
	} }));
}
ar.displayName = "Grid2x2X";
//#endregion
//#region src/icons/grid-2x2.tsx
var or = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1), sr = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), cr = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1);
function lr(t) {
	return e(S, n({
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
			or(),
			sr(),
			cr()
		];
	} }));
}
lr.displayName = "Grid2x2";
//#endregion
//#region src/icons/grid-3x3.tsx
var ur = /*#__PURE__*/ m("<svg><path d=\"M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), dr = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), fr = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1), pr = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), mr = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1);
function hr(t) {
	return e(S, n({
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
			ur(),
			dr(),
			fr(),
			pr(),
			mr()
		];
	} }));
}
hr.displayName = "Grid3x3";
//#endregion
//#region src/icons/heart.tsx
var gr = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"m11.958 7.692-1.183-1.27C7.639 3.053 2 5.272 2 9.874c0 1.451.623 2.834 1.71 3.795l8.098 7.16a.29.29 0 0 0 .384 0l8.097-7.16A5.07 5.07 0 0 0 22 9.875c0-4.602-5.639-6.82-8.775-3.454l-1.183 1.27a.06.06 0 0 1-.084 0Z\"></svg>", !1, !0, !1), _r = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function vr(t) {
	return e(S, n({
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
		return [gr(), _r()];
	} }));
}
vr.displayName = "Heart";
//#endregion
//#region src/icons/home.tsx
var yr = /*#__PURE__*/ m("<svg><path d=\"M3 9.468a1 1 0 0 1 .36-.768l8-6.667a1 1 0 0 1 1.28 0l8 6.667a1 1 0 0 1 .36.768V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), br = /*#__PURE__*/ m("<svg><path d=\"M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7\"></svg>", !1, !0, !1);
function xr(t) {
	return e(S, n({
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
		return [yr(), br()];
	} }));
}
xr.displayName = "Home";
//#endregion
//#region src/icons/laugh.tsx
var Sr = /*#__PURE__*/ m("<svg><path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z\"></svg>", !1, !0, !1), Cr = /*#__PURE__*/ m("<svg><path d=\"M16.933 14.143c-2.453 5.143-7.413 5.143-9.866 0A.1.1 0 0 1 7.156 14h9.688a.1.1 0 0 1 .089.143Z\"></svg>", !1, !0, !1), wr = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\"></svg>", !1, !0, !1), Tr = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\"></svg>", !1, !0, !1);
function Er(t) {
	return e(S, n({
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
			Sr(),
			Cr(),
			wr(),
			Tr()
		];
	} }));
}
Er.displayName = "Laugh";
//#endregion
//#region src/icons/layout-dashboard.tsx
var Dr = /*#__PURE__*/ m("<svg><rect width=7 height=9 x=3 y=3 rx=0.5></svg>", !1, !0, !1), Or = /*#__PURE__*/ m("<svg><rect width=7 height=9 x=14 y=12 rx=0.5></svg>", !1, !0, !1), kr = /*#__PURE__*/ m("<svg><rect width=7 height=5 x=3 y=16 rx=0.5></svg>", !1, !0, !1), Ar = /*#__PURE__*/ m("<svg><rect width=7 height=5 x=14 y=3 rx=0.5></svg>", !1, !0, !1);
function jr(t) {
	return e(S, n({
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
			Dr(),
			Or(),
			kr(),
			Ar()
		];
	} }));
}
jr.displayName = "LayoutDashboard";
//#endregion
//#region src/icons/layout-grid.tsx
var Mr = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=3 rx=0.5></svg>", !1, !0, !1), Nr = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=14 y=3 rx=0.5></svg>", !1, !0, !1), Pr = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=14 rx=0.5></svg>", !1, !0, !1), Fr = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=14 y=14 rx=0.5></svg>", !1, !0, !1);
function Ir(t) {
	return e(S, n({
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
			Mr(),
			Nr(),
			Pr(),
			Fr()
		];
	} }));
}
Ir.displayName = "LayoutGrid";
//#endregion
//#region src/icons/list-chevrons-down-up.tsx
var Lr = /*#__PURE__*/ m("<svg><path d=\"m14 19 3.253-2.908a.38.38 0 0 1 .494 0L21 19\"></svg>", !1, !0, !1), Rr = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), zr = /*#__PURE__*/ m("<svg><path d=\"M3 12h7\"></svg>", !1, !0, !1), Br = /*#__PURE__*/ m("<svg><path d=\"M3 19h7\"></svg>", !1, !0, !1), Vr = /*#__PURE__*/ m("<svg><path d=\"m14 5 3.253 2.908a.38.38 0 0 0 .494 0L21 5\"></svg>", !1, !0, !1);
function Hr(t) {
	return e(S, n({
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
			Lr(),
			Rr(),
			zr(),
			Br(),
			Vr()
		];
	} }));
}
Hr.displayName = "ListChevronsDownUp";
//#endregion
//#region src/icons/list-chevrons-up-down.tsx
var Ur = /*#__PURE__*/ m("<svg><path d=\"m14 8 3.253-2.908a.38.38 0 0 1 .494 0L21 8\"></svg>", !1, !0, !1), Wr = /*#__PURE__*/ m("<svg><path d=\"m14 16 3.253 2.908a.38.38 0 0 0 .494 0L21 16\"></svg>", !1, !0, !1), Gr = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), Kr = /*#__PURE__*/ m("<svg><path d=\"M3 12h7\"></svg>", !1, !0, !1), qr = /*#__PURE__*/ m("<svg><path d=\"M3 19h7\"></svg>", !1, !0, !1);
function Jr(t) {
	return e(S, n({
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
			Ur(),
			Wr(),
			Gr(),
			Kr(),
			qr()
		];
	} }));
}
Jr.displayName = "ListChevronsUpDown";
//#endregion
//#region src/icons/meh.tsx
var Yr = /*#__PURE__*/ m("<svg><path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z\"></svg>", !1, !0, !1), Xr = /*#__PURE__*/ m("<svg><path d=\"M7 15h10\"></svg>", !1, !0, !1), Zr = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\"></svg>", !1, !0, !1), Qr = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\"></svg>", !1, !0, !1);
function $r(t) {
	return e(S, n({
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
			Yr(),
			Xr(),
			Zr(),
			Qr()
		];
	} }));
}
$r.displayName = "Meh";
//#endregion
//#region src/icons/menu-vertical.tsx
var ei = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=4 rx=1></svg>", !1, !0, !1), ti = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=11 rx=1></svg>", !1, !0, !1), ni = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=18 rx=1></svg>", !1, !0, !1);
function ri(t) {
	return e(S, n({
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
			ei(),
			ti(),
			ni()
		];
	} }));
}
ri.displayName = "MenuVertical";
//#endregion
//#region src/icons/menu.tsx
var ii = /*#__PURE__*/ m("<svg><path d=\"M4 5h15\"></svg>", !1, !0, !1), ai = /*#__PURE__*/ m("<svg><path d=\"M4 12h15\"></svg>", !1, !0, !1), oi = /*#__PURE__*/ m("<svg><path d=\"M4 19h15\"></svg>", !1, !0, !1);
function si(t) {
	return e(S, n({
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
			ii(),
			ai(),
			oi()
		];
	} }));
}
si.displayName = "Menu";
//#endregion
//#region src/icons/mic-off.tsx
var ci = /*#__PURE__*/ m("<svg><path d=\"M9.17 4A3.001 3.001 0 0 1 15 5v5\"></svg>", !1, !0, !1), li = /*#__PURE__*/ m("<svg><path d=\"M14 14.236A3 3 0 0 1 9 12V9\"></svg>", !1, !0, !1), ui = /*#__PURE__*/ m("<svg><path d=\"M18.839 13.5q.16-.726.161-1.5v-2\"></svg>", !1, !0, !1), di = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m4-1.255A6.97 6.97 0 0 1 12 19m0 0v3\"></svg>", !1, !0, !1), fi = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function pi(t) {
	return e(S, n({
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
			ci(),
			li(),
			ui(),
			di(),
			fi()
		];
	} }));
}
pi.displayName = "MicOff";
//#endregion
//#region src/icons/mic-vintage.tsx
var mi = /*#__PURE__*/ m("<svg><path d=\"M9 12a3 3 0 1 0 6 0V5a3 3 0 1 0-6 0m0 7V8.5M9 12h2M9 5v3.5M9 5h2M9 8.5h2\"></svg>", !1, !0, !1), hi = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7v-2m-7 9v3\"></svg>", !1, !0, !1);
function gi(t) {
	return e(S, n({
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
		return [mi(), hi()];
	} }));
}
gi.displayName = "MicVintage";
//#endregion
//#region src/icons/mic.tsx
var _i = /*#__PURE__*/ m("<svg><rect width=6 height=13 x=9 y=2 rx=3></svg>", !1, !0, !1), vi = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m7-9v2a7 7 0 0 1-7 7m0 0v3\"></svg>", !1, !0, !1);
function yi(t) {
	return e(S, n({
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
		return [_i(), vi()];
	} }));
}
yi.displayName = "Mic";
//#endregion
//#region src/icons/moon.tsx
var bi = /*#__PURE__*/ m("<svg><path d=\"M12 21c4.567 0 7.917-3.376 8.819-7.802.125-.616-.406-1.142-1.034-1.117-8.525.34-8.443-4.734-7.975-7.918.09-.611-.375-1.167-.988-1.087A9.002 9.002 0 0 0 12 21Z\"></svg>", !1, !0, !1);
function xi(t) {
	return e(S, n({
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
		return bi();
	} }));
}
xi.displayName = "Moon";
//#endregion
//#region src/icons/notification.tsx
var Si = /*#__PURE__*/ m("<svg><path d=\"M5 9a7 7 0 0 1 14 0v4.056a4 4 0 0 0 .422 1.789l1.156 2.31a4 4 0 0 1 .422 1.79V19H3v-.056a4 4 0 0 1 .422-1.789l1.156-2.31A4 4 0 0 0 5 13.055z\"></svg>", !1, !0, !1), Ci = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1);
function wi(t) {
	return e(S, n({
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
		return [Si(), Ci()];
	} }));
}
wi.displayName = "Notification";
//#endregion
//#region src/icons/paperclip.tsx
var Ti = /*#__PURE__*/ m("<svg><path d=\"M10 6.21v9.58a2 2 0 0 0 4 0V6a4 4 0 0 0-8 0v10a6 6 0 0 0 12 0V6.21\"></svg>", !1, !0, !1);
function Ei(t) {
	return e(S, n({
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
		return Ti();
	} }));
}
Ei.displayName = "Paperclip";
//#endregion
//#region src/icons/pen-line.tsx
var Di = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"M8.214 20.064 21.116 6.412a2.737 2.737 0 1 0-3.979-3.76L4.19 16.351q-.114.123-.184.275l-2.277 5.03a.5.5 0 0 0 .628.675l5.477-2.016a1 1 0 0 0 .381-.252Z\"></path><path d=\"M12 21h9\"></svg>", !1, !0, !1), Oi = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function ki(t) {
	return e(S, n({
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
		return [Di(), Oi()];
	} }));
}
ki.displayName = "PenLine";
//#endregion
//#region src/icons/phone-forward.tsx
var Ai = /*#__PURE__*/ m("<svg><path d=\"M7.362 2h-4.23a.966.966 0 0 0-.964.819c-1.062 7.066 2.651 17.334 18.73 19.175.587.067 1.102-.408 1.102-1.012v-5.153c0-.533-.398-.978-.918-1.027l-4.306-.4a1 1 0 0 0-.61.143l-2.154 1.32a.18.18 0 0 1-.18.007 18.8 18.8 0 0 1-6.593-5.62L6.95 9.86a.215.215 0 0 1 0-.254l1.219-1.66c.131-.179.202-.396.202-.62V3.032A1.02 1.02 0 0 0 7.362 2Z\"></svg>", !1, !0, !1), ji = /*#__PURE__*/ m("<svg><path d=\"M13 6h7\"></svg>", !1, !0, !1), Mi = /*#__PURE__*/ m("<svg><path d=\"m18 2 3.824 3.6c.235.22.235.58 0 .8L18 10\"></svg>", !1, !0, !1);
function Ni(t) {
	return e(S, n({
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
			Ai(),
			ji(),
			Mi()
		];
	} }));
}
Ni.displayName = "PhoneForward";
//#endregion
//#region src/icons/phone-incoming.tsx
var Pi = /*#__PURE__*/ m("<svg><path d=\"M7.362 2h-4.23a.966.966 0 0 0-.964.819c-1.062 7.066 2.651 17.334 18.73 19.175.587.067 1.102-.408 1.102-1.012v-5.153c0-.533-.398-.978-.918-1.027l-4.306-.4a1 1 0 0 0-.61.143l-2.154 1.32a.18.18 0 0 1-.18.007 18.8 18.8 0 0 1-6.593-5.62L6.95 9.86a.215.215 0 0 1 0-.254l1.219-1.66c.131-.179.202-.396.202-.62V3.032A1.02 1.02 0 0 0 7.362 2Z\"></svg>", !1, !0, !1), Fi = /*#__PURE__*/ m("<svg><path d=\"M16 2v5a1 1 0 0 0 1 1h5\"></svg>", !1, !0, !1), Ii = /*#__PURE__*/ m("<svg><path d=\"m17 7 5-5\"></svg>", !1, !0, !1);
function Li(t) {
	return e(S, n({
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
			Pi(),
			Fi(),
			Ii()
		];
	} }));
}
Li.displayName = "PhoneIncoming";
//#endregion
//#region src/icons/phone-outgoing.tsx
var Ri = /*#__PURE__*/ m("<svg><path d=\"M7.362 2h-4.23a.966.966 0 0 0-.964.819c-1.062 7.066 2.651 17.334 18.73 19.175.587.067 1.102-.408 1.102-1.012v-5.153c0-.533-.398-.978-.918-1.027l-4.306-.4a1 1 0 0 0-.61.143l-2.154 1.32a.18.18 0 0 1-.18.007 18.8 18.8 0 0 1-6.593-5.62L6.95 9.86a.215.215 0 0 1 0-.254l1.219-1.66c.131-.179.202-.396.202-.62V3.032A1.02 1.02 0 0 0 7.362 2Z\"></svg>", !1, !0, !1), zi = /*#__PURE__*/ m("<svg><path d=\"M22 8V3a1 1 0 0 0-1-1h-5\"></svg>", !1, !0, !1), Bi = /*#__PURE__*/ m("<svg><path d=\"m21 3-5 5\"></svg>", !1, !0, !1);
function Vi(t) {
	return e(S, n({
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
			Ri(),
			zi(),
			Bi()
		];
	} }));
}
Vi.displayName = "PhoneOutgoing";
//#endregion
//#region src/icons/phone-x.tsx
var Hi = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.308a.95.95 0 0 0-.954.794c-1.052 6.854 2.627 16.813 18.554 18.598A.987.987 0 0 0 22 20.911v-4.998a1 1 0 0 0-.91-.996l-4.265-.387a1 1 0 0 0-.605.138l-2.133 1.28a.19.19 0 0 1-.178.006 18.5 18.5 0 0 1-6.531-5.45l-.286-.38a.205.205 0 0 1 0-.247L8.3 8.267a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1Z\"></svg>", !1, !0, !1), Ui = /*#__PURE__*/ m("<svg><path d=\"m15 3 6 6\"></svg>", !1, !0, !1), Wi = /*#__PURE__*/ m("<svg><path d=\"m21 3-6 6\"></svg>", !1, !0, !1);
function Gi(t) {
	return e(S, n({
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
			Hi(),
			Ui(),
			Wi()
		];
	} }));
}
Gi.displayName = "PhoneX";
//#endregion
//#region src/icons/phone.tsx
var Ki = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.308a.95.95 0 0 0-.954.794c-1.052 6.854 2.627 16.813 18.554 18.598A.987.987 0 0 0 22 20.911v-4.998a1 1 0 0 0-.91-.996l-4.265-.387a1 1 0 0 0-.605.138l-2.133 1.28a.19.19 0 0 1-.178.006 18.5 18.5 0 0 1-6.531-5.45l-.286-.38a.205.205 0 0 1 0-.247L8.3 8.267a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1Z\"></svg>", !1, !0, !1);
function qi(t) {
	return e(S, n({
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
		return Ki();
	} }));
}
qi.displayName = "Phone";
//#endregion
//#region src/icons/pie-chart.tsx
var Ji = /*#__PURE__*/ m("<svg><path d=\"M21.996 13.107Q22 12.954 22 12.8C22 6.835 17.165 2 11.2 2q-.154 0-.307.004c-.51.014-.893.448-.893.957V13a1 1 0 0 0 1 1h10.039c.51 0 .942-.384.957-.893Z\"></svg>", !1, !0, !1), Yi = /*#__PURE__*/ m("<svg><path d=\"M20 17.632A9.82 9.82 0 0 1 11.827 22C6.4 22 2 17.6 2 12.173A9.82 9.82 0 0 1 6.368 4\"></svg>", !1, !0, !1);
function Xi(t) {
	return e(S, n({
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
		return [Ji(), Yi()];
	} }));
}
Xi.displayName = "PieChart";
//#endregion
//#region src/icons/play.tsx
var Zi = /*#__PURE__*/ m("<svg><path d=\"M5 20.152v-16.5a1 1 0 0 1 1.463-.887L20.49 10.1a1 1 0 0 1 .084 1.723L6.547 20.989A1 1 0 0 1 5 20.152Z\"></svg>", !1, !0, !1);
function Qi(t) {
	return e(S, n({
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
		return Zi();
	} }));
}
Qi.displayName = "Play";
//#endregion
//#region src/icons/plus.tsx
var $i = /*#__PURE__*/ m("<svg><path d=\"M12 5v14\"></svg>", !1, !0, !1), ea = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1);
function ta(t) {
	return e(S, n({
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
		return [$i(), ea()];
	} }));
}
ta.displayName = "Plus";
//#endregion
//#region src/icons/search.tsx
var na = /*#__PURE__*/ m("<svg><circle cx=11 cy=11 r=8></svg>", !1, !0, !1), ra = /*#__PURE__*/ m("<svg><path d=\"M16.947 17.054 21 21\"></svg>", !1, !0, !1);
function ia(t) {
	return e(S, n({
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
		return [na(), ra()];
	} }));
}
ia.displayName = "Search";
//#endregion
//#region src/icons/send.tsx
var aa = /*#__PURE__*/ m("<svg><path d=\"M21.693 12.478 2.778 21.002a.5.5 0 0 1-.69-.576l2.042-8.284a.5.5 0 0 0 0-.24L2.087 3.619a.5.5 0 0 1 .691-.575l18.915 8.523a.5.5 0 0 1 0 .912Z\"></svg>", !1, !0, !1), oa = /*#__PURE__*/ m("<svg><path d=\"M4.16 12.022h17.386\"></svg>", !1, !0, !1);
function sa(t) {
	return e(S, n({
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
		return [aa(), oa()];
	} }));
}
sa.displayName = "Send";
//#endregion
//#region src/icons/settings-control.tsx
var ca = /*#__PURE__*/ m("<svg><path d=\"M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0h9\"></svg>", !1, !0, !1), la = /*#__PURE__*/ m("<svg><path d=\"M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 0H5\"></svg>", !1, !0, !1);
function ua(t) {
	return e(S, n({
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
		return [ca(), la()];
	} }));
}
ua.displayName = "SettingsControl";
//#endregion
//#region src/icons/settings.tsx
var da = /*#__PURE__*/ m("<svg><path d=\"M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82c0-1.586-1.757-2.541-3.088-1.679l-1.334.865a1 1 0 0 1-1.456-.428l-.945-2.1a1 1 0 0 1 .426-1.284l1.45-.806c1.372-.762 1.372-2.734 0-3.496l-1.45-.806a1 1 0 0 1-.426-1.284l.945-2.1a1 1 0 0 1 1.456-.428l1.334.865c1.33.862 3.088-.093 3.088-1.679V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82c0 1.586 1.757 2.541 3.088 1.679l1.334-.865a1 1 0 0 1 1.456.428l.945 2.1a1 1 0 0 1-.427 1.284l-1.449.806c-1.372.762-1.372 2.734 0 3.496l1.45.806a1 1 0 0 1 .426 1.284l-.945 2.1a1 1 0 0 1-1.456.428l-1.334-.865c-1.33-.862-3.088.093-3.088 1.679V21a1 1 0 0 1-1 1Z\"></svg>", !1, !0, !1), fa = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1);
function pa(t) {
	return e(S, n({
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
		return [da(), fa()];
	} }));
}
pa.displayName = "Settings";
//#endregion
//#region src/icons/shield-check.tsx
var ma = /*#__PURE__*/ m("<svg><path d=\"M4 5.256a.23.23 0 0 1 .227-.229c2.45-.018 4.83-.82 6.791-2.29l.808-.606a.29.29 0 0 1 .348 0l.808.605a11.45 11.45 0 0 0 6.79 2.291.23.23 0 0 1 .228.229v6.712a10.29 10.29 0 0 1-7.977 10.027.1.1 0 0 1-.046 0A10.29 10.29 0 0 1 4 11.968V5.256Z\"></svg>", !1, !0, !1), ha = /*#__PURE__*/ m("<svg><path d=\"m9 12 1.741 1.625a.5.5 0 0 0 .737-.06L15 9\"></svg>", !1, !0, !1);
function ga(t) {
	return e(S, n({
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
		return [ma(), ha()];
	} }));
}
ga.displayName = "ShieldCheck";
//#endregion
//#region src/icons/shopping-bag.tsx
var _a = /*#__PURE__*/ m("<svg><path d=\"m21 6-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM3 6h18\"></svg>", !1, !0, !1), va = /*#__PURE__*/ m("<svg><path d=\"M16 10a4 4 0 0 1-8 0\"></svg>", !1, !0, !1);
function ya(t) {
	return e(S, n({
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
		return [_a(), va()];
	} }));
}
ya.displayName = "ShoppingBag";
//#endregion
//#region src/icons/sliders-horizontal.tsx
var ba = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), xa = /*#__PURE__*/ m("<svg><path d=\"M14 5V3m0 2v2m0-2h7\"></svg>", !1, !0, !1), Sa = /*#__PURE__*/ m("<svg><path d=\"M8 12v-2m0 2v2m0-2H3\"></svg>", !1, !0, !1), Ca = /*#__PURE__*/ m("<svg><path d=\"M12 12h9\"></svg>", !1, !0, !1), wa = /*#__PURE__*/ m("<svg><path d=\"M3 19h9\"></svg>", !1, !0, !1), Ta = /*#__PURE__*/ m("<svg><path d=\"M16 19v-2m0 2v2m0-2h5\"></svg>", !1, !0, !1);
function Ea(t) {
	return e(S, n({
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
			ba(),
			xa(),
			Sa(),
			Ca(),
			wa(),
			Ta()
		];
	} }));
}
Ea.displayName = "SlidersHorizontal";
//#endregion
//#region src/icons/sliders-vertical.tsx
var Da = /*#__PURE__*/ m("<svg><path d=\"M5 3v7\"></svg>", !1, !0, !1), Oa = /*#__PURE__*/ m("<svg><path d=\"M5 14v7m0-7H3m2 0h2\"></svg>", !1, !0, !1), ka = /*#__PURE__*/ m("<svg><path d=\"M12 8h2m-2 0h-2m2 0V3\"></svg>", !1, !0, !1), Aa = /*#__PURE__*/ m("<svg><path d=\"M12 12v9\"></svg>", !1, !0, !1), ja = /*#__PURE__*/ m("<svg><path d=\"M19 3v9\"></svg>", !1, !0, !1), Ma = /*#__PURE__*/ m("<svg><path d=\"M19 16h2m-2 0h-2m2 0v5\"></svg>", !1, !0, !1);
function Na(t) {
	return e(S, n({
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
			Da(),
			Oa(),
			ka(),
			Aa(),
			ja(),
			Ma()
		];
	} }));
}
Na.displayName = "SlidersVertical";
//#endregion
//#region src/icons/smile-plus.tsx
var Pa = /*#__PURE__*/ m("<svg><path d=\"M21.95 11q.05.493.05 1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2q.507 0 1 .05\"></svg>", !1, !0, !1), Fa = /*#__PURE__*/ m("<svg><path d=\"M7 15c2.45 3.43 7.55 3.43 10 0\"></svg>", !1, !0, !1), Ia = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\"></svg>", !1, !0, !1), La = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z\"></svg>", !1, !0, !1), Ra = /*#__PURE__*/ m("<svg><path d=\"M19 2v6\"></svg>", !1, !0, !1), za = /*#__PURE__*/ m("<svg><path d=\"M16 5h6\"></svg>", !1, !0, !1);
function Ba(t) {
	return e(S, n({
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
			Pa(),
			Fa(),
			Ia(),
			La(),
			Ra(),
			za()
		];
	} }));
}
Ba.displayName = "SmilePlus";
//#endregion
//#region src/icons/smile.tsx
var Va = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Ha = /*#__PURE__*/ m("<svg><path d=\"M7 15c2.45 3.43 7.55 3.43 10 0\"></svg>", !1, !0, !1), Ua = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1), Wa = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=0.5></svg>", !1, !0, !1);
function Ga(t) {
	return e(S, n({
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
			Va(),
			Ha(),
			Ua(),
			Wa()
		];
	} }));
}
Ga.displayName = "Smile";
//#endregion
//#region src/icons/square-arrow-out-up-left.tsx
var Ka = /*#__PURE__*/ m("<svg><path d=\"M3 9V3.5a.5.5 0 0 1 .5-.5H9\"></svg>", !1, !0, !1), qa = /*#__PURE__*/ m("<svg><path d=\"m4 4 8 8\"></svg>", !1, !0, !1), Ja = /*#__PURE__*/ m("<svg><path d=\"M3 13v7.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H13\"></svg>", !1, !0, !1);
function Ya(t) {
	return e(S, n({
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
			Ka(),
			qa(),
			Ja()
		];
	} }));
}
Ya.displayName = "SquareArrowOutUpLeft";
//#endregion
//#region src/icons/square-arrow-out-up-right.tsx
var Xa = /*#__PURE__*/ m("<svg><path d=\"M21 13v7.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5H11\"></svg>", !1, !0, !1), Za = /*#__PURE__*/ m("<svg><path d=\"M15 3h5.5a.5.5 0 0 1 .5.5V9\"></svg>", !1, !0, !1), Qa = /*#__PURE__*/ m("<svg><path d=\"m12 12 8-8\"></svg>", !1, !0, !1);
function $a(t) {
	return e(S, n({
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
			Xa(),
			Za(),
			Qa()
		];
	} }));
}
$a.displayName = "SquareArrowOutUpRight";
//#endregion
//#region src/icons/square-arrow-up-left.tsx
var eo = /*#__PURE__*/ m("<svg><path d=\"m10 10 5 5\"></svg>", !1, !0, !1), to = /*#__PURE__*/ m("<svg><path d=\"M20.5 21h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5Z\"></svg>", !1, !0, !1), no = /*#__PURE__*/ m("<svg><path d=\"M9 15V9.5a.5.5 0 0 1 .5-.5H15\"></svg>", !1, !0, !1);
function ro(t) {
	return e(S, n({
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
			eo(),
			to(),
			no()
		];
	} }));
}
ro.displayName = "SquareArrowUpLeft";
//#endregion
//#region src/icons/square-arrow-up-right.tsx
var io = /*#__PURE__*/ m("<svg><path d=\"M9 9h5.7a.3.3 0 0 1 .3.3V15\"></svg>", !1, !0, !1), ao = /*#__PURE__*/ m("<svg><path d=\"m9 15 5-5\"></svg>", !1, !0, !1), oo = /*#__PURE__*/ m("<svg><path d=\"M20.5 21h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5Z\"></svg>", !1, !0, !1);
function $(t) {
	return e(S, n({
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
			io(),
			ao(),
			oo()
		];
	} }));
}
$.displayName = "SquareArrowUpRight";
//#endregion
//#region src/icons/square-chevron-down.tsx
var so = /*#__PURE__*/ m("<svg><path d=\"m8 10 3.764 3.899c.13.135.341.135.472 0L16 10\"></svg>", !1, !0, !1), co = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1.5></svg>", !1, !0, !1);
function lo(t) {
	return e(S, n({
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
		return [so(), co()];
	} }));
}
lo.displayName = "SquareChevronDown";
//#endregion
//#region src/icons/square-chevron-up.tsx
var uo = /*#__PURE__*/ m("<svg><path d=\"m8 14 3.646-3.646a.5.5 0 0 1 .708 0L16 14\"></svg>", !1, !0, !1), fo = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1);
function po(t) {
	return e(S, n({
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
		return [uo(), fo()];
	} }));
}
po.displayName = "SquareChevronUp";
//#endregion
//#region src/icons/star.tsx
var mo = /*#__PURE__*/ m("<svg><path d=\"M11.952 2.146a.05.05 0 0 1 .096 0l2.41 7.42a.05.05 0 0 0 .048.035h7.802a.05.05 0 0 1 .03.09l-6.313 4.586a.05.05 0 0 0-.018.056l2.411 7.42a.05.05 0 0 1-.077.056l-6.312-4.586a.05.05 0 0 0-.058 0l-6.312 4.586a.05.05 0 0 1-.077-.056l2.41-7.42a.05.05 0 0 0-.017-.056L1.663 9.691a.05.05 0 0 1 .03-.09h7.801a.05.05 0 0 0 .048-.035z\"></svg>", !1, !0, !1);
function ho(t) {
	return e(S, n({
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
		return mo();
	} }));
}
ho.displayName = "Star";
//#endregion
//#region src/icons/swap-horizontal.tsx
var go = /*#__PURE__*/ m("<svg><path d=\"M8 3 4.13 6.798c-.173.112-.173.292 0 .404L8 11\"></svg>", !1, !0, !1), _o = /*#__PURE__*/ m("<svg><path d=\"M6 7h14\"></svg>", !1, !0, !1), vo = /*#__PURE__*/ m("<svg><path d=\"m16 13 3.646 3.646a.5.5 0 0 1 0 .708L16 21\"></svg>", !1, !0, !1), yo = /*#__PURE__*/ m("<svg><path d=\"M4 17h14\"></svg>", !1, !0, !1);
function bo(t) {
	return e(S, n({
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
			go(),
			_o(),
			vo(),
			yo()
		];
	} }));
}
bo.displayName = "SwapHorizontal";
//#endregion
//#region src/icons/swap-vertical.tsx
var xo = /*#__PURE__*/ m("<svg><path d=\"M7 4v14\"></svg>", !1, !0, !1), So = /*#__PURE__*/ m("<svg><path d=\"m3 16 3.646 3.646a.5.5 0 0 0 .708 0L11 16\"></svg>", !1, !0, !1), Co = /*#__PURE__*/ m("<svg><path d=\"m13 8 3.646-3.646a.5.5 0 0 1 .708 0L21 8\"></svg>", !1, !0, !1), wo = /*#__PURE__*/ m("<svg><path d=\"M17 6v14\"></svg>", !1, !0, !1);
function To(t) {
	return e(S, n({
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
			xo(),
			So(),
			Co(),
			wo()
		];
	} }));
}
To.displayName = "SwapVertical";
//#endregion
//#region src/icons/thumbs-down.tsx
var Eo = /*#__PURE__*/ m("<svg><path d=\"M17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4m0 12h-.265a1 1 0 0 0-.954.702l-2.165 6.928a.37.37 0 0 1-.48.238 4.07 4.07 0 0 1-2.656-3.392l-.393-3.665A.907.907 0 0 0 9.185 14H3.18a1 1 0 0 1-.986-1.164l1.667-10A1 1 0 0 1 4.847 2H17m0 12V2\"></svg>", !1, !0, !1);
function Do(t) {
	return e(S, n({
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
		return Eo();
	} }));
}
Do.displayName = "ThumbsDown";
//#endregion
//#region src/icons/thumbs-up.tsx
var Oo = /*#__PURE__*/ m("<svg><path d=\"M7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4m0-12h.265a1 1 0 0 0 .954-.702l2.165-6.928a.37.37 0 0 1 .48-.238 4.07 4.07 0 0 1 2.656 3.392l.393 3.665c.05.461.439.811.902.811h6.005a1 1 0 0 1 .986 1.164l-1.667 10a1 1 0 0 1-.986.836H7m0-12v12\"></svg>", !1, !0, !1);
function ko(t) {
	return e(S, n({
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
		return Oo();
	} }));
}
ko.displayName = "ThumbsUp";
//#endregion
//#region src/icons/trash-2.tsx
var Ao = /*#__PURE__*/ m("<svg><path d=\"M3 6h2m0 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6m2 0h-2m0 0h-3M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8\"></svg>", !1, !0, !1), jo = /*#__PURE__*/ m("<svg><path d=\"M10 11v6\"></svg>", !1, !0, !1), Mo = /*#__PURE__*/ m("<svg><path d=\"M14 11v6\"></svg>", !1, !0, !1);
function No(t) {
	return e(S, n({
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
			Ao(),
			jo(),
			Mo()
		];
	} }));
}
No.displayName = "Trash2";
//#endregion
//#region src/icons/trash.tsx
var Po = /*#__PURE__*/ m("<svg><path d=\"M3 6h2m16 0h-2M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8M8 6H5m11 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6\"></svg>", !1, !0, !1);
function Fo(t) {
	return e(S, n({
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
		return Po();
	} }));
}
Fo.displayName = "Trash";
//#endregion
//#region src/icons/user-check.tsx
var Io = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), Lo = /*#__PURE__*/ m("<svg><path d=\"M15 14.755A8 8 0 0 0 2 21\"></svg>", !1, !0, !1), Ro = /*#__PURE__*/ m("<svg><path d=\"m16 19.333 1.608 1.34a.5.5 0 0 0 .71-.071L22 16\"></svg>", !1, !0, !1);
function zo(t) {
	return e(S, n({
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
			Io(),
			Lo(),
			Ro()
		];
	} }));
}
zo.displayName = "UserCheck";
//#endregion
//#region src/icons/user.tsx
var Bo = /*#__PURE__*/ m("<svg><circle cx=12 cy=8 r=5></svg>", !1, !0, !1), Vo = /*#__PURE__*/ m("<svg><path d=\"M20 21a8 8 0 1 0-16 0\"></svg>", !1, !0, !1);
function Ho(t) {
	return e(S, n({
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
		return [Bo(), Vo()];
	} }));
}
Ho.displayName = "User";
//#endregion
//#region src/icons/users.tsx
var Uo = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), Wo = /*#__PURE__*/ m("<svg><path d=\"M18 21a8 8 0 1 0-16 0\"></svg>", !1, !0, !1), Go = /*#__PURE__*/ m("<svg><path d=\"M18 4c.833 1.333 2 4.9 0 8.5\"></svg>", !1, !0, !1), Ko = /*#__PURE__*/ m("<svg><path d=\"M18 12.5c1.5 1.333 4.4 4.9 4 8.5\"></svg>", !1, !0, !1);
function qo(t) {
	return e(S, n({
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
			Uo(),
			Wo(),
			Go(),
			Ko()
		];
	} }));
}
qo.displayName = "Users";
//#endregion
//#region src/icons/video-camera.tsx
var Jo = /*#__PURE__*/ m("<svg><path d=\"M14.214 7H4.786C4.352 7 4 7.336 4 7.75v7.5c0 .414.352.75.786.75h9.428c.434 0 .786-.336.786-.75v-7.5c0-.414-.352-.75-.786-.75Z\"></svg>", !1, !0, !1), Yo = /*#__PURE__*/ m("<svg><path d=\"m15 12.105 3.704 1.792c.554.268 1.296-.02 1.296-.503V9.606c0-.483-.742-.771-1.296-.503L15 10.895\"></svg>", !1, !0, !1), Xo = /*#__PURE__*/ m("<svg><path d=\"m7 21 2.143-3.57a1 1 0 0 1 1.714 0L13 21\"></svg>", !1, !0, !1), Zo = /*#__PURE__*/ m("<svg><circle cx=6.5 cy=3.5 r=1.5></svg>", !1, !0, !1), Qo = /*#__PURE__*/ m("<svg><circle cx=11.5 cy=3.5 r=1.5></svg>", !1, !0, !1);
function $o(t) {
	return e(S, n({
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
			Jo(),
			Yo(),
			Xo(),
			Zo(),
			Qo()
		];
	} }));
}
$o.displayName = "VideoCamera";
//#endregion
//#region src/icons/video.tsx
var es = /*#__PURE__*/ m("<svg><rect width=14 height=12 x=2 y=6 rx=1></svg>", !1, !0, !1), ts = /*#__PURE__*/ m("<svg><path d=\"m16 13 4.445 2.964A1 1 0 0 0 22 15.131V8.869a1 1 0 0 0-1.555-.833L16 11\"></svg>", !1, !0, !1);
function ns(t) {
	return e(S, n({
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
		return [es(), ts()];
	} }));
}
ns.displayName = "Video";
//#endregion
//#region src/icons/x.tsx
var rs = /*#__PURE__*/ m("<svg><path d=\"m6 6 12 12\"></svg>", !1, !0, !1), is = /*#__PURE__*/ m("<svg><path d=\"M18 6 6 18\"></svg>", !1, !0, !1);
function as(t) {
	return e(S, n({
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
		return [rs(), is()];
	} }));
}
as.displayName = "X";
//#endregion
export { C as Alert, w as Angry, T as Annoyed, O as ArrowLeft, E as ArrowLeftFromLine, D as ArrowLeftToLine, k as ArrowRightFromLine, A as ArrowRightToLine, j as ArrowUpLeft, M as ArrowUpRight, N as BarChart, P as BellRing, F as Bookmark, z as Calendar, I as CalendarCheck, L as CalendarDays, R as CalendarX, B as Chat, V as Check, H as ChevronDown, U as ChevronUp, G as ChevronsDown, W as ChevronsDownUp, q as ChevronsUp, K as ChevronsUpDown, J as CircleArrowLeft, Y as CircleArrowOutUpLeft, X as CircleArrowOutUpRight, Z as CircleChevronDown, Q as CircleChevronUp, an as ClockArrowLeft, mn as ColumnChart, ln as ColumnChartPlainIncreasing, gn as CreditCard, bn as Download, Cn as DraftBook, Dn as ExternalLink, Ln as Eye, Nn as EyeClosed, Bn as File, Hn as Folder, qn as Frown, lr as Grid2x2, $n as Grid2x2Plus, ar as Grid2x2X, hr as Grid3x3, vr as Heart, xr as Home, Er as Laugh, jr as LayoutDashboard, Ir as LayoutGrid, Hr as ListChevronsDownUp, Jr as ListChevronsUpDown, $r as Meh, si as Menu, ri as MenuVertical, yi as Mic, pi as MicOff, gi as MicVintage, xi as Moon, wi as Notification, Ei as Paperclip, ki as PenLine, qi as Phone, Ni as PhoneForward, Li as PhoneIncoming, Vi as PhoneOutgoing, Gi as PhoneX, Xi as PieChart, Qi as Play, ta as Plus, ia as Search, sa as Send, pa as Settings, ua as SettingsControl, ga as ShieldCheck, ya as ShoppingBag, Ea as SlidersHorizontal, Na as SlidersVertical, Ga as Smile, Ba as SmilePlus, Ya as SquareArrowOutUpLeft, $a as SquareArrowOutUpRight, ro as SquareArrowUpLeft, $ as SquareArrowUpRight, lo as SquareChevronDown, po as SquareChevronUp, ho as Star, bo as SwapHorizontal, To as SwapVertical, Do as ThumbsDown, ko as ThumbsUp, Fo as Trash, No as Trash2, Ho as User, zo as UserCheck, qo as Users, ns as Video, $o as VideoCamera, as as X };

//# sourceMappingURL=index.js.map