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
//#region src/icons/activity.tsx
var ge = /*#__PURE__*/ m("<svg><path d=\"M3 12h2.42a.1.1 0 0 0 .1-.08l2.4-9.57c.02-.1.16-.1.19 0l5.8 19.37a.1.1 0 0 0 .2 0l3.61-9.66a.1.1 0 0 1 .1-.06H21\"></svg>", !1, !0, !1);
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
		return ge();
	} }));
}
C.displayName = "Activity";
//#endregion
//#region src/icons/alert.tsx
var _e = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), ve = /*#__PURE__*/ m("<svg><path d=\"M12 8v4\"></svg>", !1, !0, !1), ye = /*#__PURE__*/ m("<svg><circle cx=12 cy=16 r=0.5></svg>", !1, !0, !1);
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
			_e(),
			ve(),
			ye()
		];
	} }));
}
w.displayName = "Alert";
//#endregion
//#region src/icons/angry.tsx
var be = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), xe = /*#__PURE__*/ m("<svg><path d=\"M8 16c1.77-2.67 6.23-2.67 8 0\"></svg>", !1, !0, !1), Se = /*#__PURE__*/ m("<svg><path d=\"m7 7 2 1\"></svg>", !1, !0, !1), Ce = /*#__PURE__*/ m("<svg><path d=\"m15 8 2-1\"></svg>", !1, !0, !1), we = /*#__PURE__*/ m("<svg><circle cx=8 cy=11 r=0.5></svg>", !1, !0, !1), Te = /*#__PURE__*/ m("<svg><circle cx=16 cy=11 r=0.5></svg>", !1, !0, !1);
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
			be(),
			xe(),
			Se(),
			Ce(),
			we(),
			Te()
		];
	} }));
}
T.displayName = "Angry";
//#endregion
//#region src/icons/annoyed.tsx
var Ee = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), De = /*#__PURE__*/ m("<svg><path d=\"M8 15h8\"></svg>", !1, !0, !1), Oe = /*#__PURE__*/ m("<svg><path d=\"M8 9h2\"></svg>", !1, !0, !1), ke = /*#__PURE__*/ m("<svg><path d=\"M14 9h2\"></svg>", !1, !0, !1);
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
			Ee(),
			De(),
			Oe(),
			ke()
		];
	} }));
}
E.displayName = "Annoyed";
//#endregion
//#region src/icons/arrow-left-from-line.tsx
var Ae = /*#__PURE__*/ m("<svg><path d=\"m9 7-5.87 5.8c-.17.1-.17.3 0 .4L9 19\"></svg>", !1, !0, !1), je = /*#__PURE__*/ m("<svg><path d=\"M5 13h12\"></svg>", !1, !0, !1), Me = /*#__PURE__*/ m("<svg><path d=\"M21 6v14\"></svg>", !1, !0, !1);
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
			Ae(),
			je(),
			Me()
		];
	} }));
}
D.displayName = "ArrowLeftFromLine";
//#endregion
//#region src/icons/arrow-left-to-line.tsx
var Ne = /*#__PURE__*/ m("<svg><path d=\"m13 6-5.87 5.8c-.17.1-.17.3 0 .4L13 18\"></svg>", !1, !0, !1), Pe = /*#__PURE__*/ m("<svg><path d=\"M9 12h12\"></svg>", !1, !0, !1), Fe = /*#__PURE__*/ m("<svg><path d=\"M3 5v14\"></svg>", !1, !0, !1);
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
		return [
			Ne(),
			Pe(),
			Fe()
		];
	} }));
}
O.displayName = "ArrowLeftToLine";
//#endregion
//#region src/icons/arrow-left.tsx
var Ie = /*#__PURE__*/ m("<svg><path d=\"m12 5-6.65 6.65a.5.5 0 0 0 0 .7L12 19\"></svg>", !1, !0, !1), Le = /*#__PURE__*/ m("<svg><path d=\"M6 12h13\"></svg>", !1, !0, !1);
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
		return [Ie(), Le()];
	} }));
}
k.displayName = "ArrowLeft";
//#endregion
//#region src/icons/arrow-right-from-line.tsx
var Re = /*#__PURE__*/ m("<svg><path d=\"M7 12h12\"></svg>", !1, !0, !1), ze = /*#__PURE__*/ m("<svg><path d=\"M3 5v14\"></svg>", !1, !0, !1), Be = /*#__PURE__*/ m("<svg><path d=\"m15 6 5.85 5.65a.5.5 0 0 1 0 .7L15 18\"></svg>", !1, !0, !1);
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
			Re(),
			ze(),
			Be()
		];
	} }));
}
A.displayName = "ArrowRightFromLine";
//#endregion
//#region src/icons/arrow-right-to-line.tsx
var Ve = /*#__PURE__*/ m("<svg><path d=\"M3 12.05h12\"></svg>", !1, !0, !1), He = /*#__PURE__*/ m("<svg><path d=\"M21 5v14\"></svg>", !1, !0, !1), Ue = /*#__PURE__*/ m("<svg><path d=\"m11 6 5.65 5.65a.5.5 0 0 1 0 .7L11 18\"></svg>", !1, !0, !1);
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
		return [
			Ve(),
			He(),
			Ue()
		];
	} }));
}
j.displayName = "ArrowRightToLine";
//#endregion
//#region src/icons/arrow-up-from-line.tsx
var We = /*#__PURE__*/ m("<svg><path d=\"m6 9 5.65-5.85a.5.5 0 0 1 .7 0L18 9\"></svg>", !1, !0, !1), Ge = /*#__PURE__*/ m("<svg><path d=\"M12 3.8V17\"></svg>", !1, !0, !1), Ke = /*#__PURE__*/ m("<svg><path d=\"M5 21h14\"></svg>", !1, !0, !1);
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
		return [
			We(),
			Ge(),
			Ke()
		];
	} }));
}
M.displayName = "ArrowUpFromLine";
//#endregion
//#region src/icons/arrow-up-left.tsx
var qe = /*#__PURE__*/ m("<svg><path d=\"m8 8 9 9\"></svg>", !1, !0, !1), Je = /*#__PURE__*/ m("<svg><path d=\"M7 17V7.5a.5.5 0 0 1 .5-.5H17\"></svg>", !1, !0, !1);
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
		return [qe(), Je()];
	} }));
}
N.displayName = "ArrowUpLeft";
//#endregion
//#region src/icons/arrow-up-right.tsx
var Ye = /*#__PURE__*/ m("<svg><path d=\"M7 7h9.5a.5.5 0 0 1 .5.5V17\"></svg>", !1, !0, !1), Xe = /*#__PURE__*/ m("<svg><path d=\"m7 17 9-9\"></svg>", !1, !0, !1);
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
		return [Ye(), Xe()];
	} }));
}
P.displayName = "ArrowUpRight";
//#endregion
//#region src/icons/arrow-up-to-line.tsx
var Ze = /*#__PURE__*/ m("<svg><path d=\"m5 13 5.65-5.85a.5.5 0 0 1 .7 0L17 13\"></svg>", !1, !0, !1), Qe = /*#__PURE__*/ m("<svg><path d=\"M11 8v13.2\"></svg>", !1, !0, !1), $e = /*#__PURE__*/ m("<svg><path d=\"M5 3h14\"></svg>", !1, !0, !1);
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
		return [
			Ze(),
			Qe(),
			$e()
		];
	} }));
}
F.displayName = "ArrowUpToLine";
//#endregion
//#region src/icons/bar-chart.tsx
var et = /*#__PURE__*/ m("<svg><path d=\"M3 3v17a1 1 0 0 0 1 1h17\"></svg>", !1, !0, !1), tt = /*#__PURE__*/ m("<svg><path d=\"M7 6h4\"></svg>", !1, !0, !1), nt = /*#__PURE__*/ m("<svg><path d=\"M7 11h12\"></svg>", !1, !0, !1), rt = /*#__PURE__*/ m("<svg><path d=\"M7 16h8\"></svg>", !1, !0, !1);
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
			et(),
			tt(),
			nt(),
			rt()
		];
	} }));
}
I.displayName = "BarChart";
//#endregion
//#region src/icons/bell-ring.tsx
var it = /*#__PURE__*/ m("<svg><path d=\"M5.78 9.59C5.78 5.95 8.56 3 12 3s6.22 2.95 6.22 6.59v3.82q0 .89.38 1.68l1.03 2.17q.36.8.37 1.69V19H4v-.05q0-.89.38-1.69L5.4 15.1q.38-.8.38-1.69z\"></svg>", !1, !0, !1), at = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1), ot = /*#__PURE__*/ m("<svg><path d=\"M2 8c.17-.83.5-3.5 3-6\"></svg>", !1, !0, !1), st = /*#__PURE__*/ m("<svg><path d=\"M19 2c.83.83 2.6 3.2 3 6\"></svg>", !1, !0, !1);
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
			it(),
			at(),
			ot(),
			st()
		];
	} }));
}
L.displayName = "BellRing";
//#endregion
//#region src/icons/bookmark.tsx
var ct = /*#__PURE__*/ m("<svg><path d=\"M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.23a1 1 0 0 1-1.52.85l-4.96-3a1 1 0 0 0-1.04 0l-4.96 3A1 1 0 0 1 5 20.24z\"></svg>", !1, !0, !1);
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
		return ct();
	} }));
}
R.displayName = "Bookmark";
//#endregion
//#region src/icons/briefcase-conveyor-belt.tsx
var lt = /*#__PURE__*/ m("<svg><path d=\"M18.4 6H5.6C4.72 6 4 6.58 4 7.29v6.42c0 .71.72 1.29 1.6 1.29h12.8c.88 0 1.6-.58 1.6-1.29V7.3c0-.72-.72-1.3-1.6-1.3\"></svg>", !1, !0, !1), ut = /*#__PURE__*/ m("<svg><path d=\"M8 15V3.44C8 2.64 8.9 2 10 2h4c1.1 0 2 .65 2 1.44V15\"></svg>", !1, !0, !1), dt = /*#__PURE__*/ m("<svg><path d=\"M4 19h16\"></svg>", !1, !0, !1), ft = /*#__PURE__*/ m("<svg><path d=\"M6 19v2\"></svg>", !1, !0, !1), pt = /*#__PURE__*/ m("<svg><path d=\"M10 19v2\"></svg>", !1, !0, !1), mt = /*#__PURE__*/ m("<svg><path d=\"M14 19v2\"></svg>", !1, !0, !1), ht = /*#__PURE__*/ m("<svg><path d=\"M18 19v2\"></svg>", !1, !0, !1);
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
			lt(),
			ut(),
			dt(),
			ft(),
			pt(),
			mt(),
			ht()
		];
	} }));
}
z.displayName = "BriefcaseConveyorBelt";
//#endregion
//#region src/icons/briefcase-medical.tsx
var gt = /*#__PURE__*/ m("<svg><rect width=20 height=14 x=2 y=6 rx=2></svg>", !1, !0, !1), _t = /*#__PURE__*/ m("<svg><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></svg>", !1, !0, !1), vt = /*#__PURE__*/ m("<svg><path d=\"M6 6v14\"></svg>", !1, !0, !1), yt = /*#__PURE__*/ m("<svg><path d=\"M18 6v14\"></svg>", !1, !0, !1), bt = /*#__PURE__*/ m("<svg><path d=\"M12 11v4\"></svg>", !1, !0, !1), xt = /*#__PURE__*/ m("<svg><path d=\"M10 13h4\"></svg>", !1, !0, !1);
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
			gt(),
			_t(),
			vt(),
			yt(),
			bt(),
			xt()
		];
	} }));
}
B.displayName = "BriefcaseMedical";
//#endregion
//#region src/icons/briefcase.tsx
var St = /*#__PURE__*/ m("<svg><rect width=20 height=14 x=2 y=6 rx=2></svg>", !1, !0, !1), Ct = /*#__PURE__*/ m("<svg><path d=\"M8 20V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16\"></svg>", !1, !0, !1);
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
		return [St(), Ct()];
	} }));
}
V.displayName = "Briefcase";
//#endregion
//#region src/icons/brush.tsx
var wt = /*#__PURE__*/ m("<svg><path d=\"m2.25 21.32 2.5-6.67A1 1 0 0 1 5.7 14h12.62a1 1 0 0 1 .93.65l2.5 6.67a.5.5 0 0 1-.46.68H2.72a.5.5 0 0 1-.47-.68\"></svg>", !1, !0, !1), Tt = /*#__PURE__*/ m("<svg><path d=\"M6 14a2 2 0 1 1 0-4h4\"></svg>", !1, !0, !1), Et = /*#__PURE__*/ m("<svg><path d=\"M14 10h4a2 2 0 1 1 0 4\"></svg>", !1, !0, !1), Dt = /*#__PURE__*/ m("<svg><path d=\"M10 10V4a2 2 0 1 1 4 0v6\"></svg>", !1, !0, !1), Ot = /*#__PURE__*/ m("<svg><path d=\"m8 22 1-4\"></svg>", !1, !0, !1), kt = /*#__PURE__*/ m("<svg><path d=\"m16 22-1-4\"></svg>", !1, !0, !1);
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
		return [
			wt(),
			Tt(),
			Et(),
			Dt(),
			Ot(),
			kt()
		];
	} }));
}
H.displayName = "Brush";
//#endregion
//#region src/icons/calendar-check.tsx
var At = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), jt = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), Mt = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Nt = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), Pt = /*#__PURE__*/ m("<svg><path d=\"m9 16.4 1.93 1.54a.1.1 0 0 0 .13 0L15 14\"></svg>", !1, !0, !1);
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
		return [
			At(),
			jt(),
			Mt(),
			Nt(),
			Pt()
		];
	} }));
}
U.displayName = "CalendarCheck";
//#endregion
//#region src/icons/calendar-days.tsx
var Ft = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), It = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), Lt = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Rt = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), zt = /*#__PURE__*/ m("<svg><circle cx=8 cy=14 r=0.5></svg>", !1, !0, !1), Bt = /*#__PURE__*/ m("<svg><circle cx=8 cy=18 r=0.5></svg>", !1, !0, !1), Vt = /*#__PURE__*/ m("<svg><circle cx=12 cy=18 r=0.5></svg>", !1, !0, !1), Ht = /*#__PURE__*/ m("<svg><circle cx=16 cy=18 r=0.5></svg>", !1, !0, !1), Ut = /*#__PURE__*/ m("<svg><circle cx=12 cy=14 r=0.5></svg>", !1, !0, !1), Wt = /*#__PURE__*/ m("<svg><circle cx=16 cy=14 r=0.5></svg>", !1, !0, !1);
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
		return [
			Ft(),
			It(),
			Lt(),
			Rt(),
			zt(),
			Bt(),
			Vt(),
			Ht(),
			Ut(),
			Wt()
		];
	} }));
}
W.displayName = "CalendarDays";
//#endregion
//#region src/icons/calendar-x.tsx
var Gt = /*#__PURE__*/ m("<svg><path d=\"M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"></svg>", !1, !0, !1), Kt = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), qt = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), Jt = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1), Yt = /*#__PURE__*/ m("<svg><path d=\"m10 14 4 4\"></svg>", !1, !0, !1), Xt = /*#__PURE__*/ m("<svg><path d=\"m10 18 4-4\"></svg>", !1, !0, !1);
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
		return [
			Gt(),
			Kt(),
			qt(),
			Jt(),
			Yt(),
			Xt()
		];
	} }));
}
G.displayName = "CalendarX";
//#endregion
//#region src/icons/calendar.tsx
var Zt = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=4 rx=2></svg>", !1, !0, !1), Qt = /*#__PURE__*/ m("<svg><path d=\"M8 2v4\"></svg>", !1, !0, !1), $t = /*#__PURE__*/ m("<svg><path d=\"M16 2v4\"></svg>", !1, !0, !1), en = /*#__PURE__*/ m("<svg><path d=\"M3 10h18\"></svg>", !1, !0, !1);
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
		return [
			Zt(),
			Qt(),
			$t(),
			en()
		];
	} }));
}
K.displayName = "Calendar";
//#endregion
//#region src/icons/chat.tsx
var tn = /*#__PURE__*/ m("<svg><path d=\"M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9.3a2 2 0 0 1-2 2H7.66a2 2 0 0 0-1.19.4L2.8 20.4A.5.5 0 0 1 2 20z\"></svg>", !1, !0, !1), nn = /*#__PURE__*/ m("<svg><path d=\"M6 8h11\"></svg>", !1, !0, !1), rn = /*#__PURE__*/ m("<svg><path d=\"M6 13h9\"></svg>", !1, !0, !1);
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
		return [
			tn(),
			nn(),
			rn()
		];
	} }));
}
q.displayName = "Chat";
//#endregion
//#region src/icons/check.tsx
var an = /*#__PURE__*/ m("<svg><path d=\"m4 13 8.07 5.68a.5.5 0 0 0 .73-.18L20 5\"></svg>", !1, !0, !1);
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
		return an();
	} }));
}
J.displayName = "Check";
//#endregion
//#region src/icons/chevron-down.tsx
var on = /*#__PURE__*/ m("<svg><path d=\"m6 9 5.65 5.65a.5.5 0 0 0 .7 0L18 9\"></svg>", !1, !0, !1);
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
		return on();
	} }));
}
Y.displayName = "ChevronDown";
//#endregion
//#region src/icons/chevron-up.tsx
var sn = /*#__PURE__*/ m("<svg><path d=\"m6 15 5.65-5.65a.5.5 0 0 1 .7 0L18 15\"></svg>", !1, !0, !1);
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
		return sn();
	} }));
}
X.displayName = "ChevronUp";
//#endregion
//#region src/icons/chevrons-down-up.tsx
var cn = /*#__PURE__*/ m("<svg><path d=\"m7 4 4.7 4.87a.4.4 0 0 0 .6 0L17 4\"></svg>", !1, !0, !1), ln = /*#__PURE__*/ m("<svg><path d=\"m7 20 4.65-4.65a.5.5 0 0 1 .7 0L17 20\"></svg>", !1, !0, !1);
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
		return [cn(), ln()];
	} }));
}
Z.displayName = "ChevronsDownUp";
//#endregion
//#region src/icons/chevrons-down.tsx
var un = /*#__PURE__*/ m("<svg><path d=\"m7 6 4.7 4.87a.4.4 0 0 0 .6 0L17 6\"></svg>", !1, !0, !1), dn = /*#__PURE__*/ m("<svg><path d=\"m7 13 4.7 4.87a.4.4 0 0 0 .6 0L17 13\"></svg>", !1, !0, !1);
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
		return [un(), dn()];
	} }));
}
Q.displayName = "ChevronsDown";
//#endregion
//#region src/icons/chevrons-up-down.tsx
var fn = /*#__PURE__*/ m("<svg><path d=\"m7 9 4.65-4.65a.5.5 0 0 1 .7 0L17 9\"></svg>", !1, !0, !1), pn = /*#__PURE__*/ m("<svg><path d=\"m7 15 4.65 4.65a.5.5 0 0 0 .7 0L17 15\"></svg>", !1, !0, !1);
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
		return [fn(), pn()];
	} }));
}
mn.displayName = "ChevronsUpDown";
//#endregion
//#region src/icons/chevrons-up.tsx
var hn = /*#__PURE__*/ m("<svg><path d=\"m7 11 4.65-4.65a.5.5 0 0 1 .7 0L17 11\"></svg>", !1, !0, !1), gn = /*#__PURE__*/ m("<svg><path d=\"m7 18 4.65-4.65a.5.5 0 0 1 .7 0L17 18\"></svg>", !1, !0, !1);
function _n(t) {
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
		return [hn(), gn()];
	} }));
}
_n.displayName = "ChevronsUp";
//#endregion
//#region src/icons/circle-arrow-left.tsx
var vn = /*#__PURE__*/ m("<svg><path d=\"m12 8-3.91 3.8a.3.3 0 0 0 0 .4L12 16\"></svg>", !1, !0, !1), yn = /*#__PURE__*/ m("<svg><path d=\"M9 12h7\"></svg>", !1, !0, !1), bn = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function xn(t) {
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
			vn(),
			yn(),
			bn()
		];
	} }));
}
xn.displayName = "CircleArrowLeft";
//#endregion
//#region src/icons/circle-arrow-out-up-left.tsx
var Sn = /*#__PURE__*/ m("<svg><path d=\"m3 3 8 8\"></svg>", !1, !0, !1), Cn = /*#__PURE__*/ m("<svg><path d=\"M2 8V2.5a.5.5 0 0 1 .5-.5H8\"></svg>", !1, !0, !1), wn = /*#__PURE__*/ m("<svg><path d=\"M2 12A10 10 0 1 0 12 2\"></svg>", !1, !0, !1);
function Tn(t) {
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
			Sn(),
			Cn(),
			wn()
		];
	} }));
}
Tn.displayName = "CircleArrowOutUpLeft";
//#endregion
//#region src/icons/circle-arrow-out-up-right.tsx
var En = /*#__PURE__*/ m("<svg><path d=\"M16 2h5.5a.5.5 0 0 1 .5.5V8\"></svg>", !1, !0, !1), Dn = /*#__PURE__*/ m("<svg><path d=\"m13 11 8-8\"></svg>", !1, !0, !1), On = /*#__PURE__*/ m("<svg><path d=\"M22 12A10 10 0 1 1 12 2\"></svg>", !1, !0, !1);
function kn(t) {
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
			En(),
			Dn(),
			On()
		];
	} }));
}
kn.displayName = "CircleArrowOutUpRight";
//#endregion
//#region src/icons/circle-check-big.tsx
var An = /*#__PURE__*/ m("<svg><path d=\"M21.54 9q.45 1.43.46 3a10 10 0 1 1-7-9.54\"></svg>", !1, !0, !1), jn = /*#__PURE__*/ m("<svg><path d=\"m9.5 10.5 2.23 1.85a1 1 0 0 0 1.44-.23L21 3\"></svg>", !1, !0, !1);
function Mn(t) {
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
		return [An(), jn()];
	} }));
}
Mn.displayName = "CircleCheckBig";
//#endregion
//#region src/icons/circle-check.tsx
var Nn = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Pn = /*#__PURE__*/ m("<svg><path d=\"m9 13 1.73 1.35a1 1 0 0 0 1.44-.23L15 10\"></svg>", !1, !0, !1);
function Fn(t) {
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
		return [Nn(), Pn()];
	} }));
}
Fn.displayName = "CircleCheck";
//#endregion
//#region src/icons/circle-chevron-down.tsx
var In = /*#__PURE__*/ m("<svg><path d=\"m8 10 3.76 3.9c.13.13.34.13.48 0L16 10\"></svg>", !1, !0, !1), Ln = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1);
function Rn(t) {
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
		return [In(), Ln()];
	} }));
}
Rn.displayName = "CircleChevronDown";
//#endregion
//#region src/icons/circle-chevron-up.tsx
var zn = /*#__PURE__*/ m("<svg><path d=\"m8 14 3.65-3.65a.5.5 0 0 1 .7 0L16 14\"></svg>", !1, !0, !1), Bn = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1);
function Vn(t) {
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
		return [zn(), Bn()];
	} }));
}
Vn.displayName = "CircleChevronUp";
//#endregion
//#region src/icons/clock-arrow-left.tsx
var Hn = /*#__PURE__*/ m("<svg><path d=\"M22 12a10 10 0 1 0-10 10\"></svg>", !1, !0, !1), Un = /*#__PURE__*/ m("<svg><path d=\"m18 13-3.91 3.9q-.18.1 0 .2L18 21\"></svg>", !1, !0, !1), Wn = /*#__PURE__*/ m("<svg><path d=\"M15 17h7\"></svg>", !1, !0, !1), Gn = /*#__PURE__*/ m("<svg><path d=\"M12 6v5l1 1\"></svg>", !1, !0, !1);
function Kn(t) {
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
			Hn(),
			Un(),
			Wn(),
			Gn()
		];
	} }));
}
Kn.displayName = "ClockArrowLeft";
//#endregion
//#region src/icons/column-chart-plain-increasing.tsx
var qn = /*#__PURE__*/ m("<svg><path d=\"M5 21v-6\"></svg>", !1, !0, !1), Jn = /*#__PURE__*/ m("<svg><path d=\"M19 3v18\"></svg>", !1, !0, !1), Yn = /*#__PURE__*/ m("<svg><path d=\"M12 21V9\"></svg>", !1, !0, !1);
function Xn(t) {
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
			qn(),
			Jn(),
			Yn()
		];
	} }));
}
Xn.displayName = "ColumnChartPlainIncreasing";
//#endregion
//#region src/icons/column-chart.tsx
var Zn = /*#__PURE__*/ m("<svg><path d=\"M3 3v17a1 1 0 0 0 1 1h17\"></svg>", !1, !0, !1), Qn = /*#__PURE__*/ m("<svg><path d=\"M8 17v-4\"></svg>", !1, !0, !1), $n = /*#__PURE__*/ m("<svg><path d=\"M13 5v12\"></svg>", !1, !0, !1), er = /*#__PURE__*/ m("<svg><path d=\"M18 17V9\"></svg>", !1, !0, !1);
function tr(t) {
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
			Zn(),
			Qn(),
			$n(),
			er()
		];
	} }));
}
tr.displayName = "ColumnChart";
//#endregion
//#region src/icons/columns-2.tsx
var nr = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), rr = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1);
function ir(t) {
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
		return [nr(), rr()];
	} }));
}
ir.displayName = "Columns2";
//#endregion
//#region src/icons/columns-3.tsx
var ar = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), or = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), sr = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1);
function cr(t) {
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
			ar(),
			or(),
			sr()
		];
	} }));
}
cr.displayName = "Columns3";
//#endregion
//#region src/icons/compass.tsx
var lr = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), ur = /*#__PURE__*/ m("<svg><path d=\"m13.05 14.32-4.67 1.55a.2.2 0 0 1-.25-.25l1.56-4.67a2 2 0 0 1 1.26-1.27l4.67-1.55a.2.2 0 0 1 .25.25l-1.55 4.67a2 2 0 0 1-1.27 1.27\"></svg>", !1, !0, !1);
function dr(t) {
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
		return [lr(), ur()];
	} }));
}
dr.displayName = "Compass";
//#endregion
//#region src/icons/credit-card.tsx
var fr = /*#__PURE__*/ m("<svg><path d=\"M2 10v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7M2 10V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3M2 10h20\"></svg>", !1, !0, !1);
function pr(t) {
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
		return fr();
	} }));
}
pr.displayName = "CreditCard";
//#endregion
//#region src/icons/download.tsx
var mr = /*#__PURE__*/ m("<svg><path d=\"M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4\"></svg>", !1, !0, !1), hr = /*#__PURE__*/ m("<svg><path d=\"m6 10 5.3 5.3a1 1 0 0 0 1.4 0L18 10\"></svg>", !1, !0, !1), gr = /*#__PURE__*/ m("<svg><path d=\"M12 3v11\"></svg>", !1, !0, !1);
function _r(t) {
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
			mr(),
			hr(),
			gr()
		];
	} }));
}
_r.displayName = "Download";
//#endregion
//#region src/icons/draft-book.tsx
var vr = /*#__PURE__*/ m("<svg><path d=\"M4 18v2a2 2 0 0 0 2 2h13.86M4 18h15.86M4 18V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.86a.14.14 0 0 1-.14.14m.14 4h-.14m0-4-.58.54a2 2 0 0 0 0 2.92l.58.54\"></svg>", !1, !0, !1), yr = /*#__PURE__*/ m("<svg><path d=\"M9.6 14H12m2.4 0H12m0 0V6m0 0H8.5a.5.5 0 0 0-.5.5v1.28M12 6h3.5a.5.5 0 0 1 .5.5v1.28\"></svg>", !1, !0, !1);
function br(t) {
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
		return [vr(), yr()];
	} }));
}
br.displayName = "DraftBook";
//#endregion
//#region src/icons/eraser.tsx
var xr = /*#__PURE__*/ m("<svg><path d=\"M22 21h-9m0 0H8.46a1 1 0 0 1-.76-.35L2.6 14.7a1 1 0 0 1 .06-1.35L13.29 2.7a1 1 0 0 1 1.42 0l7.12 7.12a1 1 0 0 1 .03 1.38z\"></svg>", !1, !0, !1), Sr = /*#__PURE__*/ m("<svg><path d=\"M5.64 10.59 14 19\"></svg>", !1, !0, !1);
function Cr(t) {
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
		return [xr(), Sr()];
	} }));
}
Cr.displayName = "Eraser";
//#endregion
//#region src/icons/external-link.tsx
var wr = /*#__PURE__*/ m("<svg><path d=\"M18 13v7.58c0 .23-.19.42-.42.42H3.42a.4.4 0 0 1-.42-.42V6.42c0-.23.19-.42.42-.42H11\"></svg>", !1, !0, !1), Tr = /*#__PURE__*/ m("<svg><path d=\"M15 3h5.5a.5.5 0 0 1 .5.5V9\"></svg>", !1, !0, !1), Er = /*#__PURE__*/ m("<svg><path d=\"M10 14 20 4\"></svg>", !1, !0, !1);
function Dr(t) {
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
			wr(),
			Tr(),
			Er()
		];
	} }));
}
Dr.displayName = "ExternalLink";
//#endregion
//#region src/icons/eye-closed.tsx
var Or = /*#__PURE__*/ m("<svg><path d=\"M21 8c0 3.31-4.03 6-9 6s-9-2.69-9-6\"></svg>", !1, !0, !1), kr = /*#__PURE__*/ m("<svg><path d=\"m5 12-3 3\"></svg>", !1, !0, !1), Ar = /*#__PURE__*/ m("<svg><path d=\"m19 12 3 3\"></svg>", !1, !0, !1), jr = /*#__PURE__*/ m("<svg><path d=\"m9 14-1 4\"></svg>", !1, !0, !1), Mr = /*#__PURE__*/ m("<svg><path d=\"m14 14 1 4\"></svg>", !1, !0, !1);
function Nr(t) {
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
			Or(),
			kr(),
			Ar(),
			jr(),
			Mr()
		];
	} }));
}
Nr.displayName = "EyeClosed";
//#endregion
//#region src/icons/eye.tsx
var Pr = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1), Fr = /*#__PURE__*/ m("<svg><path d=\"M2 12C5 6.72 13.2-.68 22 12\"></svg>", !1, !0, !1), Ir = /*#__PURE__*/ m("<svg><path d=\"M22 12.02c-3 5.29-11.2 12.68-20 0\"></svg>", !1, !0, !1);
function Lr(t) {
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
			Pr(),
			Fr(),
			Ir()
		];
	} }));
}
Lr.displayName = "Eye";
//#endregion
//#region src/icons/file-volume.tsx
var Rr = /*#__PURE__*/ m("<svg><path d=\"M4 10V4a2 2 0 0 1 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2h-3\"></svg>", !1, !0, !1), zr = /*#__PURE__*/ m("<svg><path d=\"M13 2v5a2 2 0 0 0 2 2h5\"></svg>", !1, !0, !1), Br = /*#__PURE__*/ m("<svg><path d=\"M3 19.07v-3.14a1 1 0 0 1 1-1h1.4a1 1 0 0 0 .66-.24l1.11-.97a.5.5 0 0 1 .83.38v6.95a.5.5 0 0 1-.78.4l-1.74-1.2a1 1 0 0 0-.57-.18H4a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), Vr = /*#__PURE__*/ m("<svg><path d=\"M11.99 14.53c.76.79 1.82 2.98.02 5.5\"></svg>", !1, !0, !1);
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
			Rr(),
			zr(),
			Br(),
			Vr()
		];
	} }));
}
Hr.displayName = "FileVolume";
//#endregion
//#region src/icons/file.tsx
var Ur = /*#__PURE__*/ m("<svg><path d=\"M4 4a2 2 0 0 1 2-2h7.17a2 2 0 0 1 1.42.59L19.4 7.4a2 2 0 0 1 .6 1.43V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Wr = /*#__PURE__*/ m("<svg><path d=\"M13 2v5a2 2 0 0 0 2 2h5\"></svg>", !1, !0, !1);
function Gr(t) {
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
		return [Ur(), Wr()];
	} }));
}
Gr.displayName = "File";
//#endregion
//#region src/icons/folder.tsx
var Kr = /*#__PURE__*/ m("<svg><path d=\"M3 7a2 2 0 0 1 2-2h2.4a2 2 0 0 1 1.6.8l1.05 1.4a2 2 0 0 0 1.6.8H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1);
function qr(t) {
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
		return Kr();
	} }));
}
qr.displayName = "Folder";
//#endregion
//#region src/icons/frown.tsx
var Jr = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Yr = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1), Xr = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=0.5></svg>", !1, !0, !1), Zr = /*#__PURE__*/ m("<svg><path d=\"M8 16a4.6 4.6 0 0 1 8 0\"></svg>", !1, !0, !1);
function Qr(t) {
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
			Jr(),
			Yr(),
			Xr(),
			Zr()
		];
	} }));
}
Qr.displayName = "Frown";
//#endregion
//#region src/icons/gem.tsx
var $r = /*#__PURE__*/ m("<svg><path d=\"M12.02 21.98a.02.02 0 0 1-.04 0L2.02 9.03A.02.02 0 0 1 2.04 9h19.92a.02.02 0 0 1 .02.03z\"></svg>", !1, !0, !1), ei = /*#__PURE__*/ m("<svg><path d=\"m2 9 3.4-5.11A2 2 0 0 1 7.08 3h9.86a2 2 0 0 1 1.66.89L22 9\"></svg>", !1, !0, !1), ti = /*#__PURE__*/ m("<svg><path d=\"M10.67 3 8.3 8.3a2 2 0 0 0-.07 1.44L12 21\"></svg>", !1, !0, !1), ni = /*#__PURE__*/ m("<svg><path d=\"m13.33 3 2.36 5.3a2 2 0 0 1 .07 1.44L12 21\"></svg>", !1, !0, !1);
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
			$r(),
			ei(),
			ti(),
			ni()
		];
	} }));
}
ri.displayName = "Gem";
//#endregion
//#region src/icons/generic-layout.tsx
var ii = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), ai = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), oi = /*#__PURE__*/ m("<svg><path d=\"M12 9v12\"></svg>", !1, !0, !1);
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
si.displayName = "GenericLayout";
//#endregion
//#region src/icons/gift.tsx
var ci = /*#__PURE__*/ m("<svg><rect width=16 height=10 x=4 y=11 rx=2></svg>", !1, !0, !1), li = /*#__PURE__*/ m("<svg><path d=\"M5.5 11H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.5\"></svg>", !1, !0, !1), ui = /*#__PURE__*/ m("<svg><path d=\"M12 7v14\"></svg>", !1, !0, !1), di = /*#__PURE__*/ m("<svg><path d=\"M8 7 5.85 4.85A1.67 1.67 0 0 1 7.03 2h.42q.55 0 1.04.25l.34.16c.76.38 1.38 1 1.76 1.76L12 7\"></svg>", !1, !0, !1), fi = /*#__PURE__*/ m("<svg><path d=\"m16 7 2.15-2.15A1.67 1.67 0 0 0 16.97 2h-.42q-.55 0-1.04.25l-.34.16c-.76.38-1.38 1-1.76 1.76L12 7\"></svg>", !1, !0, !1);
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
pi.displayName = "Gift";
//#endregion
//#region src/icons/globe-check.tsx
var mi = /*#__PURE__*/ m("<svg><path d=\"M11 2.05A10 10 0 1 0 22 12\"></svg>", !1, !0, !1), hi = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), gi = /*#__PURE__*/ m("<svg><path d=\"M11 2.32C9.28 3.42 8 7.33 8 12c0 5.52 1.79 10 4 10s4-4.48 4-10\"></svg>", !1, !0, !1), _i = /*#__PURE__*/ m("<svg><path d=\"m13 6 2.62 1.75a.5.5 0 0 0 .67-.1L20 3\"></svg>", !1, !0, !1);
function vi(t) {
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
			mi(),
			hi(),
			gi(),
			_i()
		];
	} }));
}
vi.displayName = "GlobeCheck";
//#endregion
//#region src/icons/globe-lock.tsx
var yi = /*#__PURE__*/ m("<svg><path d=\"M21.8 14A10 10 0 1 1 11 2.05\"></svg>", !1, !0, !1), bi = /*#__PURE__*/ m("<svg><path d=\"M2 12h8\"></svg>", !1, !0, !1), xi = /*#__PURE__*/ m("<svg><path d=\"M11 2.32C9.28 3.42 8 7.33 8 12c0 5.52 1.79 10 4 10 1.64 0 3.38-3.47 4-7\"></svg>", !1, !0, !1), Si = /*#__PURE__*/ m("<svg><rect width=8 height=5 x=13 y=6 rx=1></svg>", !1, !0, !1), Ci = /*#__PURE__*/ m("<svg><path d=\"M15 5V4a2 2 0 1 1 4 0v1\"></svg>", !1, !0, !1);
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
		return [
			yi(),
			bi(),
			xi(),
			Si(),
			Ci()
		];
	} }));
}
wi.displayName = "GlobeLock";
//#endregion
//#region src/icons/globe-off.tsx
var Ti = /*#__PURE__*/ m("<svg><path d=\"M21.17 16a10 10 0 0 0 .83-4A10 10 0 0 0 12 2a10 10 0 0 0-4 .83\"></svg>", !1, !0, !1), Ei = /*#__PURE__*/ m("<svg><path d=\"M4.86 5A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 7-2.86\"></svg>", !1, !0, !1), Di = /*#__PURE__*/ m("<svg><path d=\"M2 12h10\"></svg>", !1, !0, !1), Oi = /*#__PURE__*/ m("<svg><path d=\"M17 12h5\"></svg>", !1, !0, !1), ki = /*#__PURE__*/ m("<svg><path d=\"M15.98 11c-.1-2.52-.62-4.74-1.36-6.36C13.76 2.7 12.76 2 12 2s-1.75.71-2.62 2.64\"></svg>", !1, !0, !1), Ai = /*#__PURE__*/ m("<svg><path d=\"M8.2 9a23 23 0 0 0-.2 3c0 2.93.54 5.53 1.38 7.36C10.25 21.3 11.25 22 12 22s1.75-.71 2.63-2.64c.42-.93.77-2.08 1.01-3.36\"></svg>", !1, !0, !1), ji = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function Mi(t) {
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
			Ti(),
			Ei(),
			Di(),
			Oi(),
			ki(),
			Ai(),
			ji()
		];
	} }));
}
Mi.displayName = "GlobeOff";
//#endregion
//#region src/icons/globe-x.tsx
var Ni = /*#__PURE__*/ m("<svg><path d=\"M11 2.05A10 10 0 1 0 22 12\"></svg>", !1, !0, !1), Pi = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), Fi = /*#__PURE__*/ m("<svg><path d=\"M11 2.32C9.28 3.42 8 7.33 8 12c0 5.52 1.79 10 4 10s4-4.48 4-10\"></svg>", !1, !0, !1), Ii = /*#__PURE__*/ m("<svg><path d=\"m15 3 5 5\"></svg>", !1, !0, !1), Li = /*#__PURE__*/ m("<svg><path d=\"m15 8 5-5\"></svg>", !1, !0, !1);
function Ri(t) {
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
			Ni(),
			Pi(),
			Fi(),
			Ii(),
			Li()
		];
	} }));
}
Ri.displayName = "GlobeX";
//#endregion
//#region src/icons/globe.tsx
var zi = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Bi = /*#__PURE__*/ m("<svg><path d=\"M2 12h20\"></svg>", !1, !0, !1), Vi = /*#__PURE__*/ m("<svg><path d=\"M12 2c.75 0 1.75.71 2.63 2.64C15.46 6.47 16 9.07 16 12s-.54 5.53-1.37 7.36C13.75 21.3 12.75 22 12 22s-1.75-.71-2.62-2.64C8.54 17.53 8 14.93 8 12s.54-5.53 1.38-7.36C10.25 2.7 11.25 2 12 2\"></svg>", !1, !0, !1);
function Hi(t) {
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
			zi(),
			Bi(),
			Vi()
		];
	} }));
}
Hi.displayName = "Globe";
//#endregion
//#region src/icons/grid-2x2-plus.tsx
var Ui = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), Wi = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), Gi = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1), Ki = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), qi = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function Ji(t) {
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
			Ui(),
			Wi(),
			Gi(),
			Ki(),
			qi()
		];
	} }));
}
Ji.displayName = "Grid2x2Plus";
//#endregion
//#region src/icons/grid-2x2-x.tsx
var Yi = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), Xi = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), Zi = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1), Qi = /*#__PURE__*/ m("<svg><path d=\"m16 16 6 5\"></svg>", !1, !0, !1), $i = /*#__PURE__*/ m("<svg><path d=\"m16 21 6-5\"></svg>", !1, !0, !1);
function ea(t) {
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
			Yi(),
			Xi(),
			Zi(),
			Qi(),
			$i()
		];
	} }));
}
ea.displayName = "Grid2x2X";
//#endregion
//#region src/icons/grid-2x2.tsx
var ta = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1), na = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1), ra = /*#__PURE__*/ m("<svg><path d=\"M12 3v18\"></svg>", !1, !0, !1);
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
		return [
			ta(),
			na(),
			ra()
		];
	} }));
}
ia.displayName = "Grid2x2";
//#endregion
//#region src/icons/grid-3x3-plus.tsx
var aa = /*#__PURE__*/ m("<svg><path d=\"M12 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8\"></svg>", !1, !0, !1), oa = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), sa = /*#__PURE__*/ m("<svg><path d=\"M15 3v12\"></svg>", !1, !0, !1), ca = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), la = /*#__PURE__*/ m("<svg><path d=\"M3 15h12\"></svg>", !1, !0, !1), ua = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), da = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1);
function fa(t) {
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
			aa(),
			oa(),
			sa(),
			ca(),
			la(),
			ua(),
			da()
		];
	} }));
}
fa.displayName = "Grid3x3Plus";
//#endregion
//#region src/icons/grid-3x3.tsx
var pa = /*#__PURE__*/ m("<svg><path d=\"M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), ma = /*#__PURE__*/ m("<svg><path d=\"M9 3v18\"></svg>", !1, !0, !1), ha = /*#__PURE__*/ m("<svg><path d=\"M15 3v18\"></svg>", !1, !0, !1), ga = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), _a = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1);
function va(t) {
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
			pa(),
			ma(),
			ha(),
			ga(),
			_a()
		];
	} }));
}
va.displayName = "Grid3x3";
//#endregion
//#region src/icons/handbag.tsx
var ya = /*#__PURE__*/ m("<svg><path d=\"M20.25 21H3.75a1.5 1.5 0 0 1-1.48-1.73L3.74 9.7A2 2 0 0 1 5.72 8h12.56a2 2 0 0 1 1.98 1.7l1.47 9.57A1.5 1.5 0 0 1 20.25 21\"></svg>", !1, !0, !1), ba = /*#__PURE__*/ m("<svg><path d=\"M16 12V6a4 4 0 0 0-8 0v6\"></svg>", !1, !0, !1);
function xa(t) {
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
		return [ya(), ba()];
	} }));
}
xa.displayName = "Handbag";
//#endregion
//#region src/icons/hashtag.tsx
var Sa = /*#__PURE__*/ m("<svg><path d=\"M4 9h16\"></svg>", !1, !0, !1), Ca = /*#__PURE__*/ m("<svg><path d=\"M4 15h16\"></svg>", !1, !0, !1), wa = /*#__PURE__*/ m("<svg><path d=\"m7 21 3-18\"></svg>", !1, !0, !1), Ta = /*#__PURE__*/ m("<svg><path d=\"m14 21 3-18\"></svg>", !1, !0, !1);
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
			Sa(),
			Ca(),
			wa(),
			Ta()
		];
	} }));
}
Ea.displayName = "Hashtag";
//#endregion
//#region src/icons/heart-crack.tsx
var Da = /*#__PURE__*/ m("<svg><path d=\"m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16a.3.3 0 0 0 .38 0l8.1-7.16A5 5 0 0 0 22 9.87c0-4.6-5.64-6.82-8.77-3.45L12.04 7.7z\"></svg>", !1, !0, !1), Oa = /*#__PURE__*/ m("<svg><path d=\"m12 8-1 1.98a.02.02 0 0 0 .02.03l1.96.98v.03l-1.97 1.97V13L13 15\"></svg>", !1, !0, !1);
function ka(t) {
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
		return [Da(), Oa()];
	} }));
}
ka.displayName = "HeartCrack";
//#endregion
//#region src/icons/heart-off.tsx
var Aa = /*#__PURE__*/ m("<svg><path d=\"m16.73 16.82-4.54 4a.3.3 0 0 1-.38 0l-8.1-7.15A5 5 0 0 1 2 9.87C2 7.67 3.3 6 5 5.25\"></svg>", !1, !0, !1), ja = /*#__PURE__*/ m("<svg><path d=\"m19 14.81 1.29-1.14A5 5 0 0 0 22 9.87c0-4.6-5.64-6.82-8.77-3.45L12.04 7.7h-.08l-1.19-1.27a5 5 0 0 0-1.27-1\"></svg>", !1, !0, !1), Ma = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
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
			Aa(),
			ja(),
			Ma()
		];
	} }));
}
Na.displayName = "HeartOff";
//#endregion
//#region src/icons/heart.tsx
var Pa = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"m11.96 7.7-1.19-1.28a5.07 5.07 0 1 0-7.06 7.25l8.1 7.16a.3.3 0 0 0 .38 0l8.1-7.16A5 5 0 0 0 22 9.87c0-4.6-5.64-6.81-8.77-3.45L12.04 7.7z\"></svg>", !1, !0, !1), Fa = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function Ia(t) {
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
		return [Pa(), Fa()];
	} }));
}
Ia.displayName = "Heart";
//#endregion
//#region src/icons/home.tsx
var La = /*#__PURE__*/ m("<svg><path d=\"M3 9.47a1 1 0 0 1 .36-.77l8-6.67a1 1 0 0 1 1.28 0l8 6.67a1 1 0 0 1 .36.77V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></svg>", !1, !0, !1), Ra = /*#__PURE__*/ m("<svg><path d=\"M9 21v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7\"></svg>", !1, !0, !1);
function za(t) {
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
		return [La(), Ra()];
	} }));
}
za.displayName = "Home";
//#endregion
//#region src/icons/info.tsx
var Ba = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Va = /*#__PURE__*/ m("<svg><path d=\"M12 12v4\"></svg>", !1, !0, !1), Ha = /*#__PURE__*/ m("<svg><circle cx=12 cy=8 r=0.5></svg>", !1, !0, !1);
function Ua(t) {
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
			Ba(),
			Va(),
			Ha()
		];
	} }));
}
Ua.displayName = "Info";
//#endregion
//#region src/icons/key-round.tsx
var Wa = /*#__PURE__*/ m("<svg><path d=\"M10 8q0 1.21.45 2.28c.18.43.1.95-.24 1.26L2.33 18.7a1 1 0 0 0-.33.74V21a1 1 0 0 0 1 1h2.98l.02-.02v-1.96l.02-.02h2.96l.02-.02v-2.96l.02-.02h1.53a1 1 0 0 0 .75-.33l2.25-2.51c.27-.3.7-.4 1.1-.31Q15.3 14 16 14a6 6 0 1 0-6-6\"></svg>", !1, !0, !1), Ga = /*#__PURE__*/ m("<svg><circle cx=16.5 cy=7.5 r=0.5></svg>", !1, !0, !1);
function Ka(t) {
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
		return [Wa(), Ga()];
	} }));
}
Ka.displayName = "KeyRound";
//#endregion
//#region src/icons/key.tsx
var qa = /*#__PURE__*/ m("<svg><circle cx=7.5 cy=15.5 r=5.5></svg>", !1, !0, !1), Ja = /*#__PURE__*/ m("<svg><path d=\"M11.5 11.5 20 2\"></svg>", !1, !0, !1), Ya = /*#__PURE__*/ m("<svg><path d=\"m18.64 4.1 2.18 1.84a1 1 0 0 1 .08 1.45l-2.27 2.44a1 1 0 0 1-1.35.1l-1.99-1.55\"></svg>", !1, !0, !1);
function Xa(t) {
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
			qa(),
			Ja(),
			Ya()
		];
	} }));
}
Xa.displayName = "Key";
//#endregion
//#region src/icons/laugh-wink.tsx
var Za = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Qa = /*#__PURE__*/ m("<svg><path d=\"M8 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), $a = /*#__PURE__*/ m("<svg><path d=\"M13 9c.8-.77 2.24-1.38 4 0\"></svg>", !1, !0, !1), eo = /*#__PURE__*/ m("<svg><path d=\"M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14\"></svg>", !1, !0, !1);
function to(t) {
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
			Za(),
			Qa(),
			$a(),
			eo()
		];
	} }));
}
to.displayName = "LaughWink";
//#endregion
//#region src/icons/laugh.tsx
var no = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), ro = /*#__PURE__*/ m("<svg><path d=\"M16.93 14.14c-2.45 5.15-7.41 5.15-9.86 0a.1.1 0 0 1 .09-.14h9.68a.1.1 0 0 1 .1.14\"></svg>", !1, !0, !1), io = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), ao = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function oo(t) {
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
			no(),
			ro(),
			io(),
			ao()
		];
	} }));
}
oo.displayName = "Laugh";
//#endregion
//#region src/icons/layout-dashboard.tsx
var so = /*#__PURE__*/ m("<svg><rect width=7 height=9 x=3 y=3 rx=0.5></svg>", !1, !0, !1), co = /*#__PURE__*/ m("<svg><rect width=7 height=9 x=14 y=12 rx=0.5></svg>", !1, !0, !1), lo = /*#__PURE__*/ m("<svg><rect width=7 height=5 x=3 y=16 rx=0.5></svg>", !1, !0, !1), uo = /*#__PURE__*/ m("<svg><rect width=7 height=5 x=14 y=3 rx=0.5></svg>", !1, !0, !1);
function fo(t) {
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
			so(),
			co(),
			lo(),
			uo()
		];
	} }));
}
fo.displayName = "LayoutDashboard";
//#endregion
//#region src/icons/layout-grid.tsx
var po = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=3 rx=0.5></svg>", !1, !0, !1), mo = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=14 y=3 rx=0.5></svg>", !1, !0, !1), ho = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=14 rx=0.5></svg>", !1, !0, !1), go = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=14 y=14 rx=0.5></svg>", !1, !0, !1);
function _o(t) {
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
			po(),
			mo(),
			ho(),
			go()
		];
	} }));
}
_o.displayName = "LayoutGrid";
//#endregion
//#region src/icons/layout-list.tsx
var vo = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=3 rx=1></svg>", !1, !0, !1), yo = /*#__PURE__*/ m("<svg><rect width=7 height=7 x=3 y=14 rx=1></svg>", !1, !0, !1), bo = /*#__PURE__*/ m("<svg><path d=\"M14 20h7\"></svg>", !1, !0, !1), xo = /*#__PURE__*/ m("<svg><path d=\"M14 15h7\"></svg>", !1, !0, !1), So = /*#__PURE__*/ m("<svg><path d=\"M14 9h7\"></svg>", !1, !0, !1), Co = /*#__PURE__*/ m("<svg><path d=\"M14 4h7\"></svg>", !1, !0, !1);
function wo(t) {
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
			vo(),
			yo(),
			bo(),
			xo(),
			So(),
			Co()
		];
	} }));
}
wo.displayName = "LayoutList";
//#endregion
//#region src/icons/layout-panel-left.tsx
var To = /*#__PURE__*/ m("<svg><path d=\"M20 3h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), Eo = /*#__PURE__*/ m("<svg><path d=\"M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), Do = /*#__PURE__*/ m("<svg><rect width=7 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1);
function Oo(t) {
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
			To(),
			Eo(),
			Do()
		];
	} }));
}
Oo.displayName = "LayoutPanelLeft";
//#endregion
//#region src/icons/layout-panel-right.tsx
var ko = /*#__PURE__*/ m("<svg><path d=\"M9 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), Ao = /*#__PURE__*/ m("<svg><path d=\"M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), jo = /*#__PURE__*/ m("<svg><path d=\"M21 3h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function Mo(t) {
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
			ko(),
			Ao(),
			jo()
		];
	} }));
}
Mo.displayName = "LayoutPanelRight";
//#endregion
//#region src/icons/layout-panel-top.tsx
var No = /*#__PURE__*/ m("<svg><path d=\"M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), Po = /*#__PURE__*/ m("<svg><path d=\"M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), Fo = /*#__PURE__*/ m("<svg><rect width=18 height=7 x=3 y=3 rx=1></svg>", !1, !0, !1);
function Io(t) {
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
			No(),
			Po(),
			Fo()
		];
	} }));
}
Io.displayName = "LayoutPanelTop";
//#endregion
//#region src/icons/layout-template.tsx
var Lo = /*#__PURE__*/ m("<svg><path d=\"M10.71 14H4.3c-.72 0-1.3.45-1.3 1v5c0 .55.58 1 1.29 1h6.42c.71 0 1.29-.45 1.29-1v-5c0-.55-.58-1-1.29-1\"></svg>", !1, !0, !1), Ro = /*#__PURE__*/ m("<svg><path d=\"M20.29 14H16.7c-.39 0-.71.45-.71 1v5c0 .55.32 1 .71 1h3.58c.39 0 .71-.45.71-1v-5c0-.55-.32-1-.71-1\"></svg>", !1, !0, !1), zo = /*#__PURE__*/ m("<svg><path d=\"M20 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function Bo(t) {
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
			Lo(),
			Ro(),
			zo()
		];
	} }));
}
Bo.displayName = "LayoutTemplate";
//#endregion
//#region src/icons/link-2-off.tsx
var Vo = /*#__PURE__*/ m("<svg><path d=\"M17 17a5 5 0 0 0 0-10h-1\"></svg>", !1, !0, !1), Ho = /*#__PURE__*/ m("<svg><path d=\"M8 17H7A5 5 0 0 1 7 7\"></svg>", !1, !0, !1), Uo = /*#__PURE__*/ m("<svg><path d=\"M7 12h5\"></svg>", !1, !0, !1), Wo = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function Go(t) {
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
			Vo(),
			Ho(),
			Uo(),
			Wo()
		];
	} }));
}
Go.displayName = "Link2Off";
//#endregion
//#region src/icons/link-2.tsx
var Ko = /*#__PURE__*/ m("<svg><path d=\"M8 7H7a5 5 0 0 0 0 10h1m8-10h1a5 5 0 0 1 0 10h-1\"></svg>", !1, !0, !1), qo = /*#__PURE__*/ m("<svg><path d=\"M7 12h9\"></svg>", !1, !0, !1);
function Jo(t) {
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
		return [Ko(), qo()];
	} }));
}
Jo.displayName = "Link2";
//#endregion
//#region src/icons/list-chevrons-down-up.tsx
var Yo = /*#__PURE__*/ m("<svg><path d=\"m14 19 3.25-2.9a.4.4 0 0 1 .5 0L21 19\"></svg>", !1, !0, !1), Xo = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), Zo = /*#__PURE__*/ m("<svg><path d=\"M3 12h7\"></svg>", !1, !0, !1), Qo = /*#__PURE__*/ m("<svg><path d=\"M3 19h7\"></svg>", !1, !0, !1), $o = /*#__PURE__*/ m("<svg><path d=\"m14 5 3.25 2.9a.4.4 0 0 0 .5 0L21 5\"></svg>", !1, !0, !1);
function es(t) {
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
			Yo(),
			Xo(),
			Zo(),
			Qo(),
			$o()
		];
	} }));
}
es.displayName = "ListChevronsDownUp";
//#endregion
//#region src/icons/list-chevrons-up-down.tsx
var ts = /*#__PURE__*/ m("<svg><path d=\"m14 8 3.25-2.9a.4.4 0 0 1 .5 0L21 8\"></svg>", !1, !0, !1), ns = /*#__PURE__*/ m("<svg><path d=\"m14 16 3.25 2.9a.4.4 0 0 0 .5 0L21 16\"></svg>", !1, !0, !1), rs = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), is = /*#__PURE__*/ m("<svg><path d=\"M3 12h7\"></svg>", !1, !0, !1), as = /*#__PURE__*/ m("<svg><path d=\"M3 19h7\"></svg>", !1, !0, !1);
function os(t) {
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
			ts(),
			ns(),
			rs(),
			is(),
			as()
		];
	} }));
}
os.displayName = "ListChevronsUpDown";
//#endregion
//#region src/icons/list-filter.tsx
var ss = /*#__PURE__*/ m("<svg><path d=\"M2 5h20\"></svg>", !1, !0, !1), cs = /*#__PURE__*/ m("<svg><path d=\"M6 12h12\"></svg>", !1, !0, !1), ls = /*#__PURE__*/ m("<svg><path d=\"M10 19h4\"></svg>", !1, !0, !1);
function us(t) {
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
			ss(),
			cs(),
			ls()
		];
	} }));
}
us.displayName = "ListFilter";
//#endregion
//#region src/icons/list-ordered.tsx
var ds = /*#__PURE__*/ m("<svg><path d=\"M13 5h8\"></svg>", !1, !0, !1), fs = /*#__PURE__*/ m("<svg><path d=\"M13 12h8\"></svg>", !1, !0, !1), ps = /*#__PURE__*/ m("<svg><path d=\"M13 19h8\"></svg>", !1, !0, !1), ms = /*#__PURE__*/ m("<svg><path d=\"M4.5 4h1a.5.5 0 0 1 .5.5V10m0 0H4.5M6 10h1.5\"></svg>", !1, !0, !1), hs = /*#__PURE__*/ m("<svg><path d=\"m4.5 15.29.63-.54a1.63 1.63 0 1 1 2.12 2.47L6 18.29l-.97.83a.5.5 0 0 0 .32.88H9\"></svg>", !1, !0, !1);
function gs(t) {
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
			ds(),
			fs(),
			ps(),
			ms(),
			hs()
		];
	} }));
}
gs.displayName = "ListOrdered";
//#endregion
//#region src/icons/list-todo.tsx
var _s = /*#__PURE__*/ m("<svg><path d=\"M13 5h8\"></svg>", !1, !0, !1), vs = /*#__PURE__*/ m("<svg><path d=\"M13 12h8\"></svg>", !1, !0, !1), ys = /*#__PURE__*/ m("<svg><path d=\"M13 19h8\"></svg>", !1, !0, !1), bs = /*#__PURE__*/ m("<svg><rect width=6 height=6 x=3 y=4 rx=1></svg>", !1, !0, !1), xs = /*#__PURE__*/ m("<svg><path d=\"m3 18 1.65 1.65a.5.5 0 0 0 .7 0L9 16\"></svg>", !1, !0, !1);
function Ss(t) {
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
			_s(),
			vs(),
			ys(),
			bs(),
			xs()
		];
	} }));
}
Ss.displayName = "ListTodo";
//#endregion
//#region src/icons/list.tsx
var Cs = /*#__PURE__*/ m("<svg><circle cx=3 cy=5 r=1></svg>", !1, !0, !1), ws = /*#__PURE__*/ m("<svg><circle cx=3 cy=12 r=1></svg>", !1, !0, !1), Ts = /*#__PURE__*/ m("<svg><circle cx=3 cy=19 r=1></svg>", !1, !0, !1), Es = /*#__PURE__*/ m("<svg><path d=\"M8 5h13\"></svg>", !1, !0, !1), Ds = /*#__PURE__*/ m("<svg><path d=\"M8 12h13\"></svg>", !1, !0, !1), Os = /*#__PURE__*/ m("<svg><path d=\"M8 19h13\"></svg>", !1, !0, !1);
function ks(t) {
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
			Cs(),
			ws(),
			Ts(),
			Es(),
			Ds(),
			Os()
		];
	} }));
}
ks.displayName = "List";
//#endregion
//#region src/icons/lock-keyhole.tsx
var As = /*#__PURE__*/ m("<svg><path d=\"M20 10H4c-.55 0-1 .49-1 1.09v9.82c0 .6.45 1.09 1 1.09h16c.55 0 1-.49 1-1.09v-9.82c0-.6-.45-1.09-1-1.09\"></svg>", !1, !0, !1), js = /*#__PURE__*/ m("<svg><path d=\"M7 10V6.44C7 4 9.24 2 12 2s5 1.99 5 4.44V10\"></svg>", !1, !0, !1), Ms = /*#__PURE__*/ m("<svg><circle cx=12 cy=16 r=1></svg>", !1, !0, !1);
function Ns(t) {
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
			As(),
			js(),
			Ms()
		];
	} }));
}
Ns.displayName = "LockKeyhole";
//#endregion
//#region src/icons/lock-open-keyhole.tsx
var Ps = /*#__PURE__*/ m("<svg><path d=\"M20 10H4c-.55 0-1 .49-1 1.09v9.82c0 .6.45 1.09 1 1.09h16c.55 0 1-.49 1-1.09v-9.82c0-.6-.45-1.09-1-1.09\"></svg>", !1, !0, !1), Fs = /*#__PURE__*/ m("<svg><path d=\"M16.87 5c-.52-1.87-2.5-3-4.87-3-2.76 0-5 1.99-5 4.44V10\"></svg>", !1, !0, !1), Is = /*#__PURE__*/ m("<svg><path d=\"M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"></svg>", !1, !0, !1);
function Ls(t) {
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
			Ps(),
			Fs(),
			Is()
		];
	} }));
}
Ls.displayName = "LockOpenKeyhole";
//#endregion
//#region src/icons/lock-open.tsx
var Rs = /*#__PURE__*/ m("<svg><path d=\"M20 11H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), zs = /*#__PURE__*/ m("<svg><path d=\"M17 6a5.1 5.1 0 0 0-5-4 5 5 0 0 0-5 5v4\"></svg>", !1, !0, !1);
function Bs(t) {
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
		return [Rs(), zs()];
	} }));
}
Bs.displayName = "LockOpen";
//#endregion
//#region src/icons/lock.tsx
var Vs = /*#__PURE__*/ m("<svg><rect width=18 height=11 x=3 y=11 rx=1></svg>", !1, !0, !1), Hs = /*#__PURE__*/ m("<svg><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></svg>", !1, !0, !1);
function Us(t) {
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
		return [Vs(), Hs()];
	} }));
}
Us.displayName = "Lock";
//#endregion
//#region src/icons/log-in.tsx
var Ws = /*#__PURE__*/ m("<svg><path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></svg>", !1, !0, !1), Gs = /*#__PURE__*/ m("<svg><path d=\"m10 7 5.08 4.23a1 1 0 0 1 0 1.54L10 17\"></svg>", !1, !0, !1), Ks = /*#__PURE__*/ m("<svg><path d=\"M3 12h11\"></svg>", !1, !0, !1);
function qs(t) {
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
			Ws(),
			Gs(),
			Ks()
		];
	} }));
}
qs.displayName = "LogIn";
//#endregion
//#region src/icons/log-out.tsx
var Js = /*#__PURE__*/ m("<svg><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></svg>", !1, !0, !1), Ys = /*#__PURE__*/ m("<svg><path d=\"m16 7 5.08 4.23a1 1 0 0 1 0 1.54L16 17\"></svg>", !1, !0, !1), Xs = /*#__PURE__*/ m("<svg><path d=\"M9 12h11\"></svg>", !1, !0, !1);
function Zs(t) {
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
			Js(),
			Ys(),
			Xs()
		];
	} }));
}
Zs.displayName = "LogOut";
//#endregion
//#region src/icons/mail-check.tsx
var Qs = /*#__PURE__*/ m("<svg><path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7\"></svg>", !1, !0, !1), $s = /*#__PURE__*/ m("<svg><path d=\"m15 19 2.99 1.99H18L22 17\"></svg>", !1, !0, !1), ec = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function tc(t) {
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
			Qs(),
			$s(),
			ec()
		];
	} }));
}
tc.displayName = "MailCheck";
//#endregion
//#region src/icons/mail-minus.tsx
var nc = /*#__PURE__*/ m("<svg><path d=\"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8\"></svg>", !1, !0, !1), rc = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), ic = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function ac(t) {
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
			nc(),
			rc(),
			ic()
		];
	} }));
}
ac.displayName = "MailMinus";
//#endregion
//#region src/icons/mail-open.tsx
var oc = /*#__PURE__*/ m("<svg><path d=\"M2 10.89a2 2 0 0 1 .66-1.49l8-7.2a2 2 0 0 1 2.68 0l8 7.2a2 2 0 0 1 .66 1.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), sc = /*#__PURE__*/ m("<svg><path d=\"m3 10 7.89 5.26a2 2 0 0 0 2.22 0L21 10\"></svg>", !1, !0, !1);
function cc(t) {
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
		return [oc(), sc()];
	} }));
}
cc.displayName = "MailOpen";
//#endregion
//#region src/icons/mail-plus.tsx
var lc = /*#__PURE__*/ m("<svg><path d=\"M12 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6\"></svg>", !1, !0, !1), uc = /*#__PURE__*/ m("<svg><path d=\"M19 16v6\"></svg>", !1, !0, !1), dc = /*#__PURE__*/ m("<svg><path d=\"M16 19h6\"></svg>", !1, !0, !1), fc = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function pc(t) {
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
			lc(),
			uc(),
			dc(),
			fc()
		];
	} }));
}
pc.displayName = "MailPlus";
//#endregion
//#region src/icons/mail-x.tsx
var mc = /*#__PURE__*/ m("<svg><path d=\"M13 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7\"></svg>", !1, !0, !1), hc = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1), gc = /*#__PURE__*/ m("<svg><path d=\"m17 17 4 4\"></svg>", !1, !0, !1), _c = /*#__PURE__*/ m("<svg><path d=\"m17 21 4-4\"></svg>", !1, !0, !1);
function vc(t) {
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
			mc(),
			hc(),
			gc(),
			_c()
		];
	} }));
}
vc.displayName = "MailX";
//#endregion
//#region src/icons/mail.tsx
var yc = /*#__PURE__*/ m("<svg><path d=\"M2 18V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2\"></svg>", !1, !0, !1), bc = /*#__PURE__*/ m("<svg><path d=\"m2 8 9.1 4.55a2 2 0 0 0 1.8 0L22 8\"></svg>", !1, !0, !1);
function xc(t) {
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
		return [yc(), bc()];
	} }));
}
xc.displayName = "Mail";
//#endregion
//#region src/icons/map-pin-check.tsx
var Sc = /*#__PURE__*/ m("<svg><path d=\"m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64a.05.05 0 0 0 .08 0\"></svg>", !1, !0, !1), Cc = /*#__PURE__*/ m("<svg><path d=\"m10 9.5 1.56 1.46h.07L14 8\"></svg>", !1, !0, !1);
function wc(t) {
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
		return [Sc(), Cc()];
	} }));
}
wc.displayName = "MapPinCheck";
//#endregion
//#region src/icons/map-pin.tsx
var Tc = /*#__PURE__*/ m("<svg><path d=\"m12.04 21.93 5.79-9.64a6.8 6.8 0 1 0-11.66 0l5.79 9.64a.05.05 0 0 0 .08 0\"></svg>", !1, !0, !1), Ec = /*#__PURE__*/ m("<svg><circle cx=12 cy=9 r=2></svg>", !1, !0, !1);
function Dc(t) {
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
		return [Tc(), Ec()];
	} }));
}
Dc.displayName = "MapPin";
//#endregion
//#region src/icons/map-pinned.tsx
var Oc = /*#__PURE__*/ m("<svg><path d=\"m12.04 12.94 3.2-5.03a3.84 3.84 0 1 0-6.48 0l3.2 5.03a.04.04 0 0 0 .08 0\"></svg>", !1, !0, !1), kc = /*#__PURE__*/ m("<svg><circle cx=12 cy=5.5 r=0.5></svg>", !1, !0, !1), Ac = /*#__PURE__*/ m("<svg><path d=\"m3 21 5.19-1.78a2 2 0 0 1 1.27-.01l4.83 1.59a2 2 0 0 0 1.25 0L21 19\"></svg>", !1, !0, !1), jc = /*#__PURE__*/ m("<svg><path d=\"M21 11v8\"></svg>", !1, !0, !1), Mc = /*#__PURE__*/ m("<svg><path d=\"M3 14v7\"></svg>", !1, !0, !1), Nc = /*#__PURE__*/ m("<svg><path d=\"M9 11v8\"></svg>", !1, !0, !1), Pc = /*#__PURE__*/ m("<svg><path d=\"M15 14v6\"></svg>", !1, !0, !1), Fc = /*#__PURE__*/ m("<svg><path d=\"M9 10.5 3 14\"></svg>", !1, !0, !1), Ic = /*#__PURE__*/ m("<svg><path d=\"m13 12.5 1.19.82a2 2 0 0 0 2.05.13L21 11\"></svg>", !1, !0, !1);
function Lc(t) {
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
			Oc(),
			kc(),
			Ac(),
			jc(),
			Mc(),
			Nc(),
			Pc(),
			Fc(),
			Ic()
		];
	} }));
}
Lc.displayName = "MapPinned";
//#endregion
//#region src/icons/map.tsx
var Rc = /*#__PURE__*/ m("<svg><path d=\"m3 8 4.74-3.25a2 2 0 0 1 2.2-.05l4.12 2.6a2 2 0 0 0 2.2-.04L21 4\"></svg>", !1, !0, !1), zc = /*#__PURE__*/ m("<svg><path d=\"m3 20 4.93-2.54a2 2 0 0 1 1.8-.02l4.3 2.12a2 2 0 0 0 1.77 0L21 17\"></svg>", !1, !0, !1), Bc = /*#__PURE__*/ m("<svg><path d=\"M21 4v13\"></svg>", !1, !0, !1), Vc = /*#__PURE__*/ m("<svg><path d=\"M3 8v12\"></svg>", !1, !0, !1), Hc = /*#__PURE__*/ m("<svg><path d=\"M9 5v12\"></svg>", !1, !0, !1), Uc = /*#__PURE__*/ m("<svg><path d=\"M15 8v11\"></svg>", !1, !0, !1);
function Wc(t) {
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
			Rc(),
			zc(),
			Bc(),
			Vc(),
			Hc(),
			Uc()
		];
	} }));
}
Wc.displayName = "Map";
//#endregion
//#region src/icons/meh-blank.tsx
var Gc = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Kc = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), qc = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function Jc(t) {
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
			Gc(),
			Kc(),
			qc()
		];
	} }));
}
Jc.displayName = "MehBlank";
//#endregion
//#region src/icons/meh.tsx
var Yc = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Xc = /*#__PURE__*/ m("<svg><path d=\"M7 15h10\"></svg>", !1, !0, !1), Zc = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Qc = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1);
function $c(t) {
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
			Yc(),
			Xc(),
			Zc(),
			Qc()
		];
	} }));
}
$c.displayName = "Meh";
//#endregion
//#region src/icons/menu-horizontal.tsx
var el = /*#__PURE__*/ m("<svg><circle cx=5 cy=12 r=1></svg>", !1, !0, !1), tl = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=1></svg>", !1, !0, !1), nl = /*#__PURE__*/ m("<svg><circle cx=19 cy=12 r=1></svg>", !1, !0, !1);
function rl(t) {
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
			el(),
			tl(),
			nl()
		];
	} }));
}
rl.displayName = "MenuHorizontal";
//#endregion
//#region src/icons/menu-vertical.tsx
var il = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=4 rx=1></svg>", !1, !0, !1), al = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=11 rx=1></svg>", !1, !0, !1), ol = /*#__PURE__*/ m("<svg><rect width=2 height=2 x=11 y=18 rx=1></svg>", !1, !0, !1);
function sl(t) {
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
			il(),
			al(),
			ol()
		];
	} }));
}
sl.displayName = "MenuVertical";
//#endregion
//#region src/icons/menu.tsx
var cl = /*#__PURE__*/ m("<svg><path d=\"M4 5h15\"></svg>", !1, !0, !1), ll = /*#__PURE__*/ m("<svg><path d=\"M4 12h15\"></svg>", !1, !0, !1), ul = /*#__PURE__*/ m("<svg><path d=\"M4 19h15\"></svg>", !1, !0, !1);
function dl(t) {
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
			cl(),
			ll(),
			ul()
		];
	} }));
}
dl.displayName = "Menu";
//#endregion
//#region src/icons/mic-off.tsx
var fl = /*#__PURE__*/ m("<svg><path d=\"M9.17 4A3 3 0 0 1 15 5v5\"></svg>", !1, !0, !1), pl = /*#__PURE__*/ m("<svg><path d=\"M14 14.24A3 3 0 0 1 9 12V9\"></svg>", !1, !0, !1), ml = /*#__PURE__*/ m("<svg><path d=\"M18.84 13.5q.16-.73.16-1.5v-2\"></svg>", !1, !0, !1), hl = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m4-1.25A7 7 0 0 1 12 19m0 0v3\"></svg>", !1, !0, !1), gl = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function _l(t) {
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
			fl(),
			pl(),
			ml(),
			hl(),
			gl()
		];
	} }));
}
_l.displayName = "MicOff";
//#endregion
//#region src/icons/mic-vintage.tsx
var vl = /*#__PURE__*/ m("<svg><path d=\"M9 12a3 3 0 1 0 6 0V5a3 3 0 1 0-6 0m0 7V8.5M9 12h2M9 5v3.5M9 5h2M9 8.5h2\"></svg>", !1, !0, !1), yl = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m0 0a7 7 0 0 0 7-7v-2m-7 9v3\"></svg>", !1, !0, !1);
function bl(t) {
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
		return [vl(), yl()];
	} }));
}
bl.displayName = "MicVintage";
//#endregion
//#region src/icons/mic.tsx
var xl = /*#__PURE__*/ m("<svg><rect width=6 height=13 x=9 y=2 rx=3></svg>", !1, !0, !1), Sl = /*#__PURE__*/ m("<svg><path d=\"M5 10v2a7 7 0 0 0 7 7m7-9v2a7 7 0 0 1-7 7m0 0v3\"></svg>", !1, !0, !1);
function Cl(t) {
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
		return [xl(), Sl()];
	} }));
}
Cl.displayName = "Mic";
//#endregion
//#region src/icons/moon-star.tsx
var wl = /*#__PURE__*/ m("<svg><path d=\"M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.37-1.16-.99-1.08A9 9 0 0 0 12 21\"></svg>", !1, !0, !1), Tl = /*#__PURE__*/ m("<svg><path d=\"M19.54 3.26a1 1 0 0 0 .95.7h1.73l-1.4 1.01a1 1 0 0 0-.37 1.12L21 7.74l-1.4-1.02a1 1 0 0 0-1.18 0l-1.4 1.02.54-1.65a1 1 0 0 0-.37-1.12l-1.4-1.02h1.73a1 1 0 0 0 .95-.69L19 1.62z\"></svg>", !1, !0, !1);
function El(t) {
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
		return [wl(), Tl()];
	} }));
}
El.displayName = "MoonStar";
//#endregion
//#region src/icons/moon.tsx
var Dl = /*#__PURE__*/ m("<svg><path d=\"M12 21c4.57 0 7.92-3.38 8.82-7.8.12-.62-.4-1.14-1.03-1.12-8.53.34-8.45-4.73-7.98-7.92.09-.6-.37-1.16-.99-1.08A9 9 0 0 0 12 21\"></svg>", !1, !0, !1);
function Ol(t) {
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
		return Dl();
	} }));
}
Ol.displayName = "Moon";
//#endregion
//#region src/icons/mouse-pointer.tsx
var kl = /*#__PURE__*/ m("<svg><path d=\"M9.95 19.88 3.05 3.1a.05.05 0 0 1 .06-.07l16.77 6.9a.05.05 0 0 1 0 .1l-6.43 2.14a2 2 0 0 0-1.27 1.27l-2.14 6.42a.05.05 0 0 1-.1 0Z\"></svg>", !1, !0, !1), Al = /*#__PURE__*/ m("<svg><path d=\"m13 13 6 6\"></svg>", !1, !0, !1);
function jl(t) {
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
		return [kl(), Al()];
	} }));
}
jl.displayName = "MousePointer";
//#endregion
//#region src/icons/navigation-2.tsx
var Ml = /*#__PURE__*/ m("<svg><path d=\"M11.98 2.04a.02.02 0 0 1 .04 0l7.96 18.92-.02.02-7.6-2.85a1 1 0 0 0-.71 0l-7.6 2.85a.02.02 0 0 1-.03-.02z\"></svg>", !1, !0, !1);
function Nl(t) {
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
		return Ml();
	} }));
}
Nl.displayName = "Navigation2";
//#endregion
//#region src/icons/navigation.tsx
var Pl = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"m21.96 2.02.02.02-7.96 18.91a.02.02 0 0 1-.04 0l-2.84-7.58a1 1 0 0 0-.5-.55l-7.6-3.8a.02.02 0 0 1 0-.04z\"></svg>", !1, !0, !1), Fl = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function Il(t) {
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
		return [Pl(), Fl()];
	} }));
}
Il.displayName = "Navigation";
//#endregion
//#region src/icons/notification.tsx
var Ll = /*#__PURE__*/ m("<svg><path d=\"M5 9a7 7 0 0 1 14 0v4.06a4 4 0 0 0 .42 1.79l1.16 2.3a4 4 0 0 1 .42 1.8V19H3v-.06a4 4 0 0 1 .42-1.79l1.16-2.3a4 4 0 0 0 .42-1.8z\"></svg>", !1, !0, !1), Rl = /*#__PURE__*/ m("<svg><path d=\"M10 22h4\"></svg>", !1, !0, !1);
function zl(t) {
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
		return [Ll(), Rl()];
	} }));
}
zl.displayName = "Notification";
//#endregion
//#region src/icons/package-check.tsx
var Bl = /*#__PURE__*/ m("<svg><path d=\"m15.38 20.13-1.13.62-1.28.71a2 2 0 0 1-1.94 0l-7-3.89A2 2 0 0 1 3 15.82V8.18a2 2 0 0 1 1.03-1.75l7-3.89a2 2 0 0 1 1.94 0l7 3.89A2 2 0 0 1 21 8.18V11\"></svg>", !1, !0, !1), Vl = /*#__PURE__*/ m("<svg><path d=\"m17 16 1.84 1.84a.2.2 0 0 0 .3-.02L22 14\"></svg>", !1, !0, !1), Hl = /*#__PURE__*/ m("<svg><path d=\"m3.5 7.5 7.56 4a2 2 0 0 0 1.88 0l7.56-4\"></svg>", !1, !0, !1), Ul = /*#__PURE__*/ m("<svg><path d=\"M12 12v9\"></svg>", !1, !0, !1), Wl = /*#__PURE__*/ m("<svg><path d=\"m8.5 4.5 8 5\"></svg>", !1, !0, !1);
function Gl(t) {
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
			Bl(),
			Vl(),
			Hl(),
			Ul(),
			Wl()
		];
	} }));
}
Gl.displayName = "PackageCheck";
//#endregion
//#region src/icons/paint-bucket.tsx
var Kl = /*#__PURE__*/ m("<svg><path d=\"m10 5 2.3-2.3a1 1 0 0 1 1.4 0l6.95 6.95a.5.5 0 0 1 0 .7l-8.03 8.03a3 3 0 0 1-4.24 0l-3.76-3.76a3 3 0 0 1 0-4.24L7 8\"></svg>", !1, !0, !1), ql = /*#__PURE__*/ m("<svg><path d=\"m8 3.5 3 3\"></svg>", !1, !0, !1), Jl = /*#__PURE__*/ m("<svg><path d=\"M4 12.5h14.5\"></svg>", !1, !0, !1), Yl = /*#__PURE__*/ m("<svg><path d=\"M19.98 15.06a.02.02 0 0 1 .04 0l1.35 4.04a1.44 1.44 0 1 1-2.74 0z\"></svg>", !1, !0, !1);
function Xl(t) {
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
			Kl(),
			ql(),
			Jl(),
			Yl()
		];
	} }));
}
Xl.displayName = "PaintBucket";
//#endregion
//#region src/icons/paperclip.tsx
var Zl = /*#__PURE__*/ m("<svg><path d=\"M10 6.21v9.58a2 2 0 0 0 4 0V6a4 4 0 0 0-8 0v10a6 6 0 0 0 12 0V6.21\"></svg>", !1, !0, !1);
function Ql(t) {
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
		return Zl();
	} }));
}
Ql.displayName = "Paperclip";
//#endregion
//#region src/icons/pen-line.tsx
var $l = /*#__PURE__*/ m("<svg><g clip-path=url(#a)><path d=\"m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35q-.11.12-.18.28l-2.28 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .39-.26Z\"></path><path d=\"M12 21h9\"></svg>", !1, !0, !1), eu = /*#__PURE__*/ m("<svg><defs><clipPath id=a><rect width=24 height=24></svg>", !1, !0, !1);
function tu(t) {
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
		return [$l(), eu()];
	} }));
}
tu.displayName = "PenLine";
//#endregion
//#region src/icons/pen-tool.tsx
var nu = /*#__PURE__*/ m("<svg><path d=\"M10.73 16.34 6.1 14.33a1 1 0 0 1-.57-.68L2.8 2.85l.02-.02 10.82 2.68a1 1 0 0 1 .67.56l2.07 4.6\"></svg>", !1, !0, !1), ru = /*#__PURE__*/ m("<svg><rect width=10 height=4 x=10.66 y=17.68 rx=1 transform=\"rotate(-45.78 10.66 17.68)\"></svg>", !1, !0, !1), iu = /*#__PURE__*/ m("<svg><path d=\"m3.53 3.53 4.5 4.5\"></svg>", !1, !0, !1), au = /*#__PURE__*/ m("<svg><circle cx=8.53 cy=8.53 r=0.5></svg>", !1, !0, !1);
function ou(t) {
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
			nu(),
			ru(),
			iu(),
			au()
		];
	} }));
}
ou.displayName = "PenTool";
//#endregion
//#region src/icons/pencil.tsx
var su = /*#__PURE__*/ m("<svg><path d=\"m8.21 20.06 12.9-13.65a2.74 2.74 0 1 0-3.97-3.76L4.19 16.35q-.11.12-.18.28l-2.28 5.03a.5.5 0 0 0 .63.67l5.47-2.01a1 1 0 0 0 .39-.26Z\"></svg>", !1, !0, !1), cu = /*#__PURE__*/ m("<svg><path d=\"M15.5 4.5 19 8\"></svg>", !1, !0, !1);
function lu(t) {
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
		return [su(), cu()];
	} }));
}
lu.displayName = "Pencil";
//#endregion
//#region src/icons/phone-call.tsx
var uu = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), du = /*#__PURE__*/ m("<svg><path d=\"M13 6a4.18 4.18 0 0 1 5 4.1v.9\"></svg>", !1, !0, !1), fu = /*#__PURE__*/ m("<svg><path d=\"M14 2h1a7 7 0 0 1 7 7v2\"></svg>", !1, !0, !1);
function pu(t) {
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
			uu(),
			du(),
			fu()
		];
	} }));
}
pu.displayName = "PhoneCall";
//#endregion
//#region src/icons/phone-forward.tsx
var mu = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.87a.2.2 0 0 1-.18 0 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3a1 1 0 0 0-1-1.03\"></svg>", !1, !0, !1), hu = /*#__PURE__*/ m("<svg><path d=\"M13 6h7\"></svg>", !1, !0, !1), gu = /*#__PURE__*/ m("<svg><path d=\"m18 2 3.82 3.6c.24.22.24.58 0 .8L18 10\"></svg>", !1, !0, !1);
function _u(t) {
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
			mu(),
			hu(),
			gu()
		];
	} }));
}
_u.displayName = "PhoneForward";
//#endregion
//#region src/icons/phone-incoming.tsx
var vu = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.87a.2.2 0 0 1-.18 0 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3a1 1 0 0 0-1-1.03\"></svg>", !1, !0, !1), yu = /*#__PURE__*/ m("<svg><path d=\"M16 2v5a1 1 0 0 0 1 1h5\"></svg>", !1, !0, !1), bu = /*#__PURE__*/ m("<svg><path d=\"m17 7 5-5\"></svg>", !1, !0, !1);
function xu(t) {
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
			vu(),
			yu(),
			bu()
		];
	} }));
}
xu.displayName = "PhoneIncoming";
//#endregion
//#region src/icons/phone-off.tsx
var Su = /*#__PURE__*/ m("<svg><path d=\"M10 13.33a19 19 0 0 0 3.91 2.62.2.2 0 0 0 .18 0l2.13-1.28a1 1 0 0 1 .6-.14l4.27.39a1 1 0 0 1 .91 1v5a1 1 0 0 1-1.1.97C14.3 21.15 9.8 19 6.88 16.25\"></svg>", !1, !0, !1), Cu = /*#__PURE__*/ m("<svg><path d=\"m7.76 11-.38-.5-.29-.38a.2.2 0 0 1 0-.24L8.3 8.27a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1H3.3a.95.95 0 0 0-.95.8c-.47 3.08.02 6.8 2.15 10.12\"></svg>", !1, !0, !1), wu = /*#__PURE__*/ m("<svg><path d=\"M2 22 22 2\"></svg>", !1, !0, !1);
function Tu(t) {
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
			Su(),
			Cu(),
			wu()
		];
	} }));
}
Tu.displayName = "PhoneOff";
//#endregion
//#region src/icons/phone-outgoing.tsx
var Eu = /*#__PURE__*/ m("<svg><path d=\"M7.36 2H3.13a1 1 0 0 0-.96.82C1.1 9.89 4.82 20.15 20.9 21.99a1 1 0 0 0 1.1-1v-5.16c0-.53-.4-.98-.92-1.03l-4.3-.4a1 1 0 0 0-.61.15L14 15.87a.2.2 0 0 1-.18 0 19 19 0 0 1-6.6-5.62l-.28-.39a.2.2 0 0 1 0-.25l1.22-1.66q.2-.28.2-.62v-4.3a1 1 0 0 0-1-1.03\"></svg>", !1, !0, !1), Du = /*#__PURE__*/ m("<svg><path d=\"M22 8V3a1 1 0 0 0-1-1h-5\"></svg>", !1, !0, !1), Ou = /*#__PURE__*/ m("<svg><path d=\"m21 3-5 5\"></svg>", !1, !0, !1);
function ku(t) {
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
			Eu(),
			Du(),
			Ou()
		];
	} }));
}
ku.displayName = "PhoneOutgoing";
//#endregion
//#region src/icons/phone-x.tsx
var Au = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1), ju = /*#__PURE__*/ m("<svg><path d=\"m15 3 6 6\"></svg>", !1, !0, !1), Mu = /*#__PURE__*/ m("<svg><path d=\"m21 3-6 6\"></svg>", !1, !0, !1);
function Nu(t) {
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
			Au(),
			ju(),
			Mu()
		];
	} }));
}
Nu.displayName = "PhoneX";
//#endregion
//#region src/icons/phone.tsx
var Pu = /*#__PURE__*/ m("<svg><path d=\"M7.5 2.5H3.3a.95.95 0 0 0-.95.8C1.3 10.14 4.98 20.1 20.91 21.9a1 1 0 0 0 1.09-1v-5a1 1 0 0 0-.91-1l-4.26-.38a1 1 0 0 0-.61.14l-2.13 1.28a.2.2 0 0 1-.18 0 18.5 18.5 0 0 1-6.53-5.45l-.29-.38a.2.2 0 0 1 0-.24l1.21-1.6a1 1 0 0 0 .2-.6V3.5a1 1 0 0 0-1-1\"></svg>", !1, !0, !1);
function Fu(t) {
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
		return Pu();
	} }));
}
Fu.displayName = "Phone";
//#endregion
//#region src/icons/pie-chart.tsx
var Iu = /*#__PURE__*/ m("<svg><path d=\"M22 13.1v-.3A10.8 10.8 0 0 0 11.2 2h-.3a.94.94 0 0 0-.9.96V13a1 1 0 0 0 1 1h10.04c.5 0 .94-.38.96-.9\"></svg>", !1, !0, !1), Lu = /*#__PURE__*/ m("<svg><path d=\"M20 17.63A9.8 9.8 0 0 1 11.83 22 9.83 9.83 0 0 1 2 12.17 9.8 9.8 0 0 1 6.37 4\"></svg>", !1, !0, !1);
function Ru(t) {
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
		return [Iu(), Lu()];
	} }));
}
Ru.displayName = "PieChart";
//#endregion
//#region src/icons/pin.tsx
var zu = /*#__PURE__*/ m("<svg><path d=\"M6 4a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4 1 1 0 0 0-1 1v2.33a2 2 0 0 0 .4 1.2l2.2 2.94a2 2 0 0 1 .4 1.2V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.17a2 2 0 0 1 .59-1.42L8.4 11.6a2 2 0 0 0 .6-1.43V7a1 1 0 0 0-1-1 2 2 0 0 1-2-2\"></svg>", !1, !0, !1), Bu = /*#__PURE__*/ m("<svg><path d=\"M12 17v5\"></svg>", !1, !0, !1);
function Vu(t) {
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
		return [zu(), Bu()];
	} }));
}
Vu.displayName = "Pin";
//#endregion
//#region src/icons/pipette.tsx
var Hu = /*#__PURE__*/ m("<svg><path d=\"M13.64 7.26 7.1 14.03l-.15.23L6 18m0 0c-2 2-.35.13 0 0m0 0 4.18-.7a1 1 0 0 0 .32-.2l6.36-6.6\"></svg>", !1, !0, !1), Uu = /*#__PURE__*/ m("<svg><path d=\"m15.31 5.41 2.7-2.7a2.34 2.34 0 0 1 3.27-.1c.92.87.96 2.3.09 3.2l-2.83 2.83\"></svg>", !1, !0, !1), Wu = /*#__PURE__*/ m("<svg><path d=\"M19.07 7.76a2 2 0 0 1-2.83 2.83l-2.83-2.83a2 2 0 0 1 2.83-2.83\"></svg>", !1, !0, !1);
function Gu(t) {
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
			Hu(),
			Uu(),
			Wu()
		];
	} }));
}
Gu.displayName = "Pipette";
//#endregion
//#region src/icons/play-square.tsx
var Ku = /*#__PURE__*/ m("<svg><path d=\"M9 15.12V8.88c0-.28.3-.47.55-.33l5.25 2.77a.38.38 0 0 1 .03.65l-5.25 3.47a.37.37 0 0 1-.58-.32\"></svg>", !1, !0, !1), qu = /*#__PURE__*/ m("<svg><path d=\"M3 20V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1\"></svg>", !1, !0, !1);
function Ju(t) {
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
		return [Ku(), qu()];
	} }));
}
Ju.displayName = "PlaySquare";
//#endregion
//#region src/icons/play.tsx
var Yu = /*#__PURE__*/ m("<svg><path d=\"M5 20.15V3.65a1 1 0 0 1 1.46-.88L20.5 10.1a1 1 0 0 1 .08 1.72L6.55 21A1 1 0 0 1 5 20.15\"></svg>", !1, !0, !1);
function Xu(t) {
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
		return Yu();
	} }));
}
Xu.displayName = "Play";
//#endregion
//#region src/icons/plus.tsx
var Zu = /*#__PURE__*/ m("<svg><path d=\"M12 5v14\"></svg>", !1, !0, !1), Qu = /*#__PURE__*/ m("<svg><path d=\"M5 12h14\"></svg>", !1, !0, !1);
function $u(t) {
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
		return [Zu(), Qu()];
	} }));
}
$u.displayName = "Plus";
//#endregion
//#region src/icons/radio.tsx
var ed = /*#__PURE__*/ m("<svg><path d=\"M18 20a10 10 0 0 0 4-8 10 10 0 0 0-4-8\"></svg>", !1, !0, !1), td = /*#__PURE__*/ m("<svg><path d=\"M6 20a10 10 0 0 1-4-8 10 10 0 0 1 4-8\"></svg>", !1, !0, !1), nd = /*#__PURE__*/ m("<svg><path d=\"M8.26 16.69A6 6 0 0 1 6 12c0-1.9.88-3.59 2.26-4.69\"></svg>", !1, !0, !1), rd = /*#__PURE__*/ m("<svg><path d=\"M15.74 7.3A6 6 0 0 1 18 12a6 6 0 0 1-2.26 4.7\"></svg>", !1, !0, !1), id = /*#__PURE__*/ m("<svg><path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1);
function ad(t) {
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
			ed(),
			td(),
			nd(),
			rd(),
			id()
		];
	} }));
}
ad.displayName = "Radio";
//#endregion
//#region src/icons/refresh-cw.tsx
var od = /*#__PURE__*/ m("<svg><path d=\"M19.48 6.77a10.5 10.5 0 0 0-5.94-3.63 9 9 0 0 0-10.48 7.23\"></svg>", !1, !0, !1), sd = /*#__PURE__*/ m("<svg><path d=\"M20.9 11.61a9 9 0 0 1-10.62 9.23C7.22 20.28 5.15 17.66 4 15\"></svg>", !1, !0, !1), cd = /*#__PURE__*/ m("<svg><path d=\"M8 14H3.5a.5.5 0 0 0-.5.5V19\"></svg>", !1, !0, !1), ld = /*#__PURE__*/ m("<svg><path d=\"M20 3v4.5a.5.5 0 0 1-.5.5H15\"></svg>", !1, !0, !1);
function ud(t) {
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
			od(),
			sd(),
			cd(),
			ld()
		];
	} }));
}
ud.displayName = "RefreshCw";
//#endregion
//#region src/icons/rotate-cw-square.tsx
var dd = /*#__PURE__*/ m("<svg><path d=\"M15.5 5H17a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.25M11 5H7a2 2 0 0 0-2 2v3.25\"></svg>", !1, !0, !1), fd = /*#__PURE__*/ m("<svg><path d=\"m9 2 2.3 2.3a1 1 0 0 1 0 1.4L9 8\"></svg>", !1, !0, !1);
function pd(t) {
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
		return [dd(), fd()];
	} }));
}
pd.displayName = "RotateCwSquare";
//#endregion
//#region src/icons/rows-2.tsx
var md = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), hd = /*#__PURE__*/ m("<svg><path d=\"M3 12h18\"></svg>", !1, !0, !1);
function gd(t) {
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
		return [md(), hd()];
	} }));
}
gd.displayName = "Rows2";
//#endregion
//#region src/icons/rows-3.tsx
var _d = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1), vd = /*#__PURE__*/ m("<svg><path d=\"M3 9h18\"></svg>", !1, !0, !1), yd = /*#__PURE__*/ m("<svg><path d=\"M3 15h18\"></svg>", !1, !0, !1);
function bd(t) {
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
			_d(),
			vd(),
			yd()
		];
	} }));
}
bd.displayName = "Rows3";
//#endregion
//#region src/icons/search.tsx
var xd = /*#__PURE__*/ m("<svg><circle cx=11 cy=11 r=8></svg>", !1, !0, !1), Sd = /*#__PURE__*/ m("<svg><path d=\"M16.95 17.05 21 21\"></svg>", !1, !0, !1);
function Cd(t) {
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
		return [xd(), Sd()];
	} }));
}
Cd.displayName = "Search";
//#endregion
//#region src/icons/send.tsx
var wd = /*#__PURE__*/ m("<svg><path d=\"M21.7 12.48 2.77 21a.5.5 0 0 1-.7-.57l2.05-8.29v-.24L2.09 3.62a.5.5 0 0 1 .69-.58l18.91 8.53a.5.5 0 0 1 0 .9Z\"></svg>", !1, !0, !1), Td = /*#__PURE__*/ m("<svg><path d=\"M4.16 12.02h17.39\"></svg>", !1, !0, !1);
function Ed(t) {
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
		return [wd(), Td()];
	} }));
}
Ed.displayName = "Send";
//#endregion
//#region src/icons/settings-control.tsx
var Dd = /*#__PURE__*/ m("<svg><path d=\"M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h9\"></svg>", !1, !0, !1), Od = /*#__PURE__*/ m("<svg><path d=\"M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0H5\"></svg>", !1, !0, !1);
function kd(t) {
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
		return [Dd(), Od()];
	} }));
}
kd.displayName = "SettingsControl";
//#endregion
//#region src/icons/settings.tsx
var Ad = /*#__PURE__*/ m("<svg><path d=\"M12.8 22h-1.6a1 1 0 0 1-1-1v-1.82a2 2 0 0 0-3.09-1.68l-1.33.87a1 1 0 0 1-1.46-.43l-.94-2.1a1 1 0 0 1 .42-1.29l1.45-.8a2 2 0 0 0 0-3.5l-1.45-.8a1 1 0 0 1-.42-1.29l.94-2.1a1 1 0 0 1 1.46-.43l1.33.87a2 2 0 0 0 3.09-1.68V3a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.82a2 2 0 0 0 3.09 1.68l1.33-.87a1 1 0 0 1 1.46.43l.94 2.1a1 1 0 0 1-.42 1.29l-1.45.8a2 2 0 0 0 0 3.5l1.45.8a1 1 0 0 1 .42 1.29l-.94 2.1a1 1 0 0 1-1.46.43l-1.33-.87a2 2 0 0 0-3.09 1.68V21a1 1 0 0 1-1 1\"></svg>", !1, !0, !1), jd = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=3></svg>", !1, !0, !1);
function Md(t) {
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
		return [Ad(), jd()];
	} }));
}
Md.displayName = "Settings";
//#endregion
//#region src/icons/shield-check.tsx
var Nd = /*#__PURE__*/ m("<svg><path d=\"M4 5.26a.23.23 0 0 1 .23-.23c2.45-.02 4.83-.82 6.79-2.3l.8-.6a.3.3 0 0 1 .35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3.23.23 0 0 1 .22.23v6.7A10.3 10.3 0 0 1 12.02 22h-.04A10.3 10.3 0 0 1 4 11.97z\"></svg>", !1, !0, !1), Pd = /*#__PURE__*/ m("<svg><path d=\"m9 12 1.74 1.63a.5.5 0 0 0 .74-.07L15 9\"></svg>", !1, !0, !1);
function Fd(t) {
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
		return [Nd(), Pd()];
	} }));
}
Fd.displayName = "ShieldCheck";
//#endregion
//#region src/icons/shield-question.tsx
var Id = /*#__PURE__*/ m("<svg><path d=\"M4 5.18a.23.23 0 0 1 .23-.23 11.4 11.4 0 0 0 6.79-2.29l.8-.6a.3.3 0 0 1 .35 0l.81.6a11.5 11.5 0 0 0 6.8 2.3.23.23 0 0 1 .22.22v6.72a10.3 10.3 0 0 1-7.98 10.02h-.04A10.3 10.3 0 0 1 4 11.9z\"></svg>", !1, !0, !1), Ld = /*#__PURE__*/ m("<svg><path d=\"M9.17 9A3 3 0 0 1 15 10c0 1.66-1.34 3.5-3 3.5\"></svg>", !1, !0, !1), Rd = /*#__PURE__*/ m("<svg><circle cx=12 cy=17 r=0.5></svg>", !1, !0, !1);
function zd(t) {
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
			Id(),
			Ld(),
			Rd()
		];
	} }));
}
zd.displayName = "ShieldQuestion";
//#endregion
//#region src/icons/shopping-bag.tsx
var Bd = /*#__PURE__*/ m("<svg><path d=\"m21 6-2.7-3.6a1 1 0 0 0-.8-.4h-11a1 1 0 0 0-.8.4L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM3 6h18\"></svg>", !1, !0, !1), Vd = /*#__PURE__*/ m("<svg><path d=\"M16 10a4 4 0 0 1-8 0\"></svg>", !1, !0, !1);
function Hd(t) {
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
		return [Bd(), Vd()];
	} }));
}
Hd.displayName = "ShoppingBag";
//#endregion
//#region src/icons/shopping-cart.tsx
var Ud = /*#__PURE__*/ m("<svg><path d=\"M5 7h14.5a2 2 0 0 1 1.96 2.43l-1.11 5A2 2 0 0 1 18.4 16H8.6a2 2 0 0 1-1.95-1.57zm0 0L4 2\"></svg>", !1, !0, !1), Wd = /*#__PURE__*/ m("<svg><path d=\"M2 2h2\"></svg>", !1, !0, !1), Gd = /*#__PURE__*/ m("<svg><circle cx=9 cy=21 r=1></svg>", !1, !0, !1), Kd = /*#__PURE__*/ m("<svg><circle cx=18 cy=21 r=1></svg>", !1, !0, !1);
function qd(t) {
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
			Ud(),
			Wd(),
			Gd(),
			Kd()
		];
	} }));
}
qd.displayName = "ShoppingCart";
//#endregion
//#region src/icons/sim-card.tsx
var Jd = /*#__PURE__*/ m("<svg><path d=\"M3 4a2 2 0 0 1 2-2h9.35a2 2 0 0 1 1.62.83l4.65 6.42a2 2 0 0 1 .38 1.18V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></svg>", !1, !0, !1), Yd = /*#__PURE__*/ m("<svg><rect width=8 height=9 x=8 y=9 rx=0.5></svg>", !1, !0, !1), Xd = /*#__PURE__*/ m("<svg><path d=\"M12 9v2.98q0 .02.02.02H16\"></svg>", !1, !0, !1), Zd = /*#__PURE__*/ m("<svg><path d=\"M8.5 15h3.48l.02.02V18\"></svg>", !1, !0, !1);
function Qd(t) {
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
			Jd(),
			Yd(),
			Xd(),
			Zd()
		];
	} }));
}
Qd.displayName = "SimCard";
//#endregion
//#region src/icons/sliders-horizontal.tsx
var $d = /*#__PURE__*/ m("<svg><path d=\"M3 5h7\"></svg>", !1, !0, !1), ef = /*#__PURE__*/ m("<svg><path d=\"M14 5V3m0 2v2m0-2h7\"></svg>", !1, !0, !1), tf = /*#__PURE__*/ m("<svg><path d=\"M8 12v-2m0 2v2m0-2H3\"></svg>", !1, !0, !1), nf = /*#__PURE__*/ m("<svg><path d=\"M12 12h9\"></svg>", !1, !0, !1), rf = /*#__PURE__*/ m("<svg><path d=\"M3 19h9\"></svg>", !1, !0, !1), af = /*#__PURE__*/ m("<svg><path d=\"M16 19v-2m0 2v2m0-2h5\"></svg>", !1, !0, !1);
function of(t) {
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
			$d(),
			ef(),
			tf(),
			nf(),
			rf(),
			af()
		];
	} }));
}
of.displayName = "SlidersHorizontal";
//#endregion
//#region src/icons/sliders-vertical.tsx
var sf = /*#__PURE__*/ m("<svg><path d=\"M5 3v7\"></svg>", !1, !0, !1), cf = /*#__PURE__*/ m("<svg><path d=\"M5 14v7m0-7H3m2 0h2\"></svg>", !1, !0, !1), lf = /*#__PURE__*/ m("<svg><path d=\"M12 8h2m-2 0h-2m2 0V3\"></svg>", !1, !0, !1), uf = /*#__PURE__*/ m("<svg><path d=\"M12 12v9\"></svg>", !1, !0, !1), df = /*#__PURE__*/ m("<svg><path d=\"M19 3v9\"></svg>", !1, !0, !1), ff = /*#__PURE__*/ m("<svg><path d=\"M19 16h2m-2 0h-2m2 0v5\"></svg>", !1, !0, !1);
function pf(t) {
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
			sf(),
			cf(),
			lf(),
			uf(),
			df(),
			ff()
		];
	} }));
}
pf.displayName = "SlidersVertical";
//#endregion
//#region src/icons/smile-plus.tsx
var mf = /*#__PURE__*/ m("<svg><path d=\"M21.95 11q.05.5.05 1A10 10 0 1 1 12 2q.5 0 1 .05\"></svg>", !1, !0, !1), hf = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.15 6.15 0 0 0 10 0\"></svg>", !1, !0, !1), gf = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), _f = /*#__PURE__*/ m("<svg><path d=\"M16 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), vf = /*#__PURE__*/ m("<svg><path d=\"M19 2v6\"></svg>", !1, !0, !1), yf = /*#__PURE__*/ m("<svg><path d=\"M16 5h6\"></svg>", !1, !0, !1);
function bf(t) {
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
			mf(),
			hf(),
			gf(),
			_f(),
			vf(),
			yf()
		];
	} }));
}
bf.displayName = "SmilePlus";
//#endregion
//#region src/icons/smile-wink.tsx
var xf = /*#__PURE__*/ m("<svg><path d=\"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20\"></svg>", !1, !0, !1), Sf = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.15 6.15 0 0 0 10 0\"></svg>", !1, !0, !1), Cf = /*#__PURE__*/ m("<svg><path d=\"M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), wf = /*#__PURE__*/ m("<svg><path d=\"M13.42 9.5c.8-.77 2.26-1.38 4.02 0\"></svg>", !1, !0, !1);
function Tf(t) {
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
			xf(),
			Sf(),
			Cf(),
			wf()
		];
	} }));
}
Tf.displayName = "SmileWink";
//#endregion
//#region src/icons/smile.tsx
var Ef = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), Df = /*#__PURE__*/ m("<svg><path d=\"M7 15a6.15 6.15 0 0 0 10 0\"></svg>", !1, !0, !1), Of = /*#__PURE__*/ m("<svg><circle cx=8 cy=10 r=0.5></svg>", !1, !0, !1), kf = /*#__PURE__*/ m("<svg><circle cx=16 cy=10 r=0.5></svg>", !1, !0, !1);
function Af(t) {
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
			Ef(),
			Df(),
			Of(),
			kf()
		];
	} }));
}
Af.displayName = "Smile";
//#endregion
//#region src/icons/sparkles.tsx
var jf = /*#__PURE__*/ m("<svg><path d=\"m10.87 12.09-4.44-1.9a.2.2 0 0 1 0-.37l4.44-1.9a2 2 0 0 0 1.05-1.05l1.9-4.44a.2.2 0 0 1 .36 0l1.9 4.44a2 2 0 0 0 1.06 1.05l4.43 1.9a.2.2 0 0 1 0 .36l-4.44 1.9a2 2 0 0 0-1.05 1.06l-1.9 4.43a.2.2 0 0 1-.36 0l-1.9-4.43a2 2 0 0 0-1.06-1.05\"></svg>", !1, !0, !1), Mf = /*#__PURE__*/ m("<svg><path d=\"m4.07 18.89-1.96-.84a.05.05 0 0 1 0-.1l1.96-.83a2 2 0 0 0 1.05-1.05l.83-1.96a.05.05 0 0 1 .1 0l.84 1.96a2 2 0 0 0 1.05 1.05l1.95.83a.05.05 0 0 1 0 .1l-1.96.84a2 2 0 0 0-1.05 1.05l-.83 1.95a.05.05 0 0 1-.1 0l-.84-1.95a2 2 0 0 0-1.05-1.05\"></svg>", !1, !0, !1), Nf = /*#__PURE__*/ m("<svg><path d=\"M5 2v4\"></svg>", !1, !0, !1), Pf = /*#__PURE__*/ m("<svg><path d=\"M3 4h4\"></svg>", !1, !0, !1);
function Ff(t) {
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
			jf(),
			Mf(),
			Nf(),
			Pf()
		];
	} }));
}
Ff.displayName = "Sparkles";
//#endregion
//#region src/icons/split.tsx
var If = /*#__PURE__*/ m("<svg><path d=\"m4 4 7.32 6.4a2 2 0 0 1 .68 1.5V22\"></svg>", !1, !0, !1), Lf = /*#__PURE__*/ m("<svg><path d=\"M3 8V3.5a.5.5 0 0 1 .5-.5H8\"></svg>", !1, !0, !1), Rf = /*#__PURE__*/ m("<svg><path d=\"M21 8V3.5a.5.5 0 0 0-.5-.5H16\"></svg>", !1, !0, !1), zf = /*#__PURE__*/ m("<svg><path d=\"m20 4-5 4\"></svg>", !1, !0, !1);
function Bf(t) {
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
			If(),
			Lf(),
			Rf(),
			zf()
		];
	} }));
}
Bf.displayName = "Split";
//#endregion
//#region src/icons/square-activity.tsx
var Vf = /*#__PURE__*/ m("<svg><path d=\"M7 11.98h1.35l.05-.04 1.33-4.9c.01-.05.09-.05.1 0l3.24 9.92c.01.05.08.05.1 0l2.01-4.94.05-.04H17\"></svg>", !1, !0, !1), Hf = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=2></svg>", !1, !0, !1);
function Uf(t) {
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
		return [Vf(), Hf()];
	} }));
}
Uf.displayName = "SquareActivity";
//#endregion
//#region src/icons/square-arrow-out-up-left.tsx
var Wf = /*#__PURE__*/ m("<svg><path d=\"M3 9V3.5a.5.5 0 0 1 .5-.5H9\"></svg>", !1, !0, !1), Gf = /*#__PURE__*/ m("<svg><path d=\"m4 4 8 8\"></svg>", !1, !0, !1), Kf = /*#__PURE__*/ m("<svg><path d=\"M3 13v7.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H13\"></svg>", !1, !0, !1);
function qf(t) {
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
			Wf(),
			Gf(),
			Kf()
		];
	} }));
}
qf.displayName = "SquareArrowOutUpLeft";
//#endregion
//#region src/icons/square-arrow-out-up-right.tsx
var Jf = /*#__PURE__*/ m("<svg><path d=\"M21 13v7.5a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5H11\"></svg>", !1, !0, !1), Yf = /*#__PURE__*/ m("<svg><path d=\"M15 3h5.5a.5.5 0 0 1 .5.5V9\"></svg>", !1, !0, !1), Xf = /*#__PURE__*/ m("<svg><path d=\"m12 12 8-8\"></svg>", !1, !0, !1);
function Zf(t) {
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
			Jf(),
			Yf(),
			Xf()
		];
	} }));
}
Zf.displayName = "SquareArrowOutUpRight";
//#endregion
//#region src/icons/square-arrow-up-left.tsx
var Qf = /*#__PURE__*/ m("<svg><path d=\"m10 10 5 5\"></svg>", !1, !0, !1), $f = /*#__PURE__*/ m("<svg><path d=\"M20.5 21h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5\"></svg>", !1, !0, !1), ep = /*#__PURE__*/ m("<svg><path d=\"M9 15V9.5a.5.5 0 0 1 .5-.5H15\"></svg>", !1, !0, !1);
function tp(t) {
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
			Qf(),
			$f(),
			ep()
		];
	} }));
}
tp.displayName = "SquareArrowUpLeft";
//#endregion
//#region src/icons/square-arrow-up-right.tsx
var np = /*#__PURE__*/ m("<svg><path d=\"M9 9h5.7a.3.3 0 0 1 .3.3V15\"></svg>", !1, !0, !1), rp = /*#__PURE__*/ m("<svg><path d=\"m9 15 5-5\"></svg>", !1, !0, !1), ip = /*#__PURE__*/ m("<svg><path d=\"M20.5 21h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5\"></svg>", !1, !0, !1);
function ap(t) {
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
			np(),
			rp(),
			ip()
		];
	} }));
}
ap.displayName = "SquareArrowUpRight";
//#endregion
//#region src/icons/square-chevron-down.tsx
var op = /*#__PURE__*/ m("<svg><path d=\"m8 10 3.76 3.9c.13.13.34.13.48 0L16 10\"></svg>", !1, !0, !1), sp = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1.5></svg>", !1, !0, !1);
function cp(t) {
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
		return [op(), sp()];
	} }));
}
cp.displayName = "SquareChevronDown";
//#endregion
//#region src/icons/square-chevron-up.tsx
var lp = /*#__PURE__*/ m("<svg><path d=\"m8 14 3.65-3.65a.5.5 0 0 1 .7 0L16 14\"></svg>", !1, !0, !1), up = /*#__PURE__*/ m("<svg><rect width=18 height=18 x=3 y=3 rx=1></svg>", !1, !0, !1);
function dp(t) {
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
		return [lp(), up()];
	} }));
}
dp.displayName = "SquareChevronUp";
//#endregion
//#region src/icons/star.tsx
var fp = /*#__PURE__*/ m("<svg><path d=\"M11.95 2.15a.05.05 0 0 1 .1 0l2.4 7.42.06.03h7.8a.05.05 0 0 1 .03.1l-6.31 4.58-.02.05 2.4 7.42a.05.05 0 0 1-.07.06l-6.31-4.59h-.06l-6.31 4.59a.05.05 0 0 1-.08-.06L8 14.33l-.02-.05-6.3-4.59a.05.05 0 0 1 .02-.09h7.8l.05-.03z\"></svg>", !1, !0, !1);
function pp(t) {
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
		return fp();
	} }));
}
pp.displayName = "Star";
//#endregion
//#region src/icons/sun-dim.tsx
var mp = /*#__PURE__*/ m("<svg><path d=\"M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"></svg>", !1, !0, !1), hp = /*#__PURE__*/ m("<svg><circle cx=4 cy=12 r=0.5></svg>", !1, !0, !1), gp = /*#__PURE__*/ m("<svg><circle cx=12 cy=4 r=0.5></svg>", !1, !0, !1), _p = /*#__PURE__*/ m("<svg><circle cx=20 cy=12 r=0.5></svg>", !1, !0, !1), vp = /*#__PURE__*/ m("<svg><circle cx=12 cy=20 r=0.5></svg>", !1, !0, !1), yp = /*#__PURE__*/ m("<svg><circle cx=6 cy=18 r=0.5></svg>", !1, !0, !1), bp = /*#__PURE__*/ m("<svg><circle cx=6 cy=6 r=0.5></svg>", !1, !0, !1), xp = /*#__PURE__*/ m("<svg><circle cx=18 cy=6 r=0.5></svg>", !1, !0, !1), Sp = /*#__PURE__*/ m("<svg><circle cx=18 cy=18 r=0.5></svg>", !1, !0, !1);
function Cp(t) {
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
			mp(),
			hp(),
			gp(),
			_p(),
			vp(),
			yp(),
			bp(),
			xp(),
			Sp()
		];
	} }));
}
Cp.displayName = "SunDim";
//#endregion
//#region src/icons/sun-moon.tsx
var wp = /*#__PURE__*/ m("<svg><path d=\"M9.06 21c3.07 0 5.32-2.26 5.93-5.22.08-.41-.28-.77-.7-.75-5.73.23-5.68-3.17-5.36-5.3.06-.4-.26-.78-.67-.73a6.03 6.03 0 0 0 .8 12\"></svg>", !1, !0, !1), Tp = /*#__PURE__*/ m("<svg><path d=\"M15.97 12C15.8 10 15 8.07 12 8\"></svg>", !1, !0, !1), Ep = /*#__PURE__*/ m("<svg><path d=\"M12 4V2\"></svg>", !1, !0, !1), Dp = /*#__PURE__*/ m("<svg><path d=\"M20 12h2\"></svg>", !1, !0, !1), Op = /*#__PURE__*/ m("<svg><path d=\"M18 6.5 19.5 5\"></svg>", !1, !0, !1);
function kp(t) {
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
			wp(),
			Tp(),
			Ep(),
			Dp(),
			Op()
		];
	} }));
}
kp.displayName = "SunMoon";
//#endregion
//#region src/icons/sun.tsx
var Ap = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=4></svg>", !1, !0, !1), jp = /*#__PURE__*/ m("<svg><path d=\"M12 4V2\"></svg>", !1, !0, !1), Mp = /*#__PURE__*/ m("<svg><path d=\"M12 20v2\"></svg>", !1, !0, !1), Np = /*#__PURE__*/ m("<svg><path d=\"M4 12H2\"></svg>", !1, !0, !1), Pp = /*#__PURE__*/ m("<svg><path d=\"M20 12h2\"></svg>", !1, !0, !1), Fp = /*#__PURE__*/ m("<svg><path d=\"M6.5 5.5 5 4\"></svg>", !1, !0, !1), Ip = /*#__PURE__*/ m("<svg><path d=\"M17.5 5.5 19 4\"></svg>", !1, !0, !1), Lp = /*#__PURE__*/ m("<svg><path d=\"M18.5 18.5 20 20\"></svg>", !1, !0, !1), Rp = /*#__PURE__*/ m("<svg><path d=\"m4 20 1.5-1.5\"></svg>", !1, !0, !1);
function zp(t) {
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
			Ap(),
			jp(),
			Mp(),
			Np(),
			Pp(),
			Fp(),
			Ip(),
			Lp(),
			Rp()
		];
	} }));
}
zp.displayName = "Sun";
//#endregion
//#region src/icons/swap-horizontal.tsx
var Bp = /*#__PURE__*/ m("<svg><path d=\"M8 3 4.13 6.8c-.17.11-.17.29 0 .4L8 11\"></svg>", !1, !0, !1), Vp = /*#__PURE__*/ m("<svg><path d=\"M6 7h14\"></svg>", !1, !0, !1), Hp = /*#__PURE__*/ m("<svg><path d=\"m16 13 3.65 3.65a.5.5 0 0 1 0 .7L16 21\"></svg>", !1, !0, !1), Up = /*#__PURE__*/ m("<svg><path d=\"M4 17h14\"></svg>", !1, !0, !1);
function Wp(t) {
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
			Bp(),
			Vp(),
			Hp(),
			Up()
		];
	} }));
}
Wp.displayName = "SwapHorizontal";
//#endregion
//#region src/icons/swap-vertical.tsx
var Gp = /*#__PURE__*/ m("<svg><path d=\"M7 4v14\"></svg>", !1, !0, !1), Kp = /*#__PURE__*/ m("<svg><path d=\"m3 16 3.65 3.65a.5.5 0 0 0 .7 0L11 16\"></svg>", !1, !0, !1), qp = /*#__PURE__*/ m("<svg><path d=\"m13 8 3.65-3.65a.5.5 0 0 1 .7 0L21 8\"></svg>", !1, !0, !1), Jp = /*#__PURE__*/ m("<svg><path d=\"M17 6v14\"></svg>", !1, !0, !1);
function Yp(t) {
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
			Gp(),
			Kp(),
			qp(),
			Jp()
		];
	} }));
}
Yp.displayName = "SwapVertical";
//#endregion
//#region src/icons/tag-plus.tsx
var Xp = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.5 9.01a1 1 0 0 0 1.4-.04L17.27 17\"></svg>", !1, !0, !1), Zp = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), Qp = /*#__PURE__*/ m("<svg><path d=\"M19 8v6\"></svg>", !1, !0, !1), $p = /*#__PURE__*/ m("<svg><path d=\"M16 11h6\"></svg>", !1, !0, !1);
function em(t) {
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
			Xp(),
			Zp(),
			Qp(),
			$p()
		];
	} }));
}
em.displayName = "TagPlus";
//#endregion
//#region src/icons/tag-x.tsx
var tm = /*#__PURE__*/ m("<svg><path d=\"m16 6-4.24-3.72a1 1 0 0 0-.69-.28H3a1 1 0 0 0-1 1v8.57a1 1 0 0 0 .31.73l9.5 9.01a1 1 0 0 0 1.4-.04L17.27 17\"></svg>", !1, !0, !1), nm = /*#__PURE__*/ m("<svg><path d=\"M6.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), rm = /*#__PURE__*/ m("<svg><path d=\"m17 13 4-4\"></svg>", !1, !0, !1), im = /*#__PURE__*/ m("<svg><path d=\"m17 9 4 4\"></svg>", !1, !0, !1);
function am(t) {
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
			tm(),
			nm(),
			rm(),
			im()
		];
	} }));
}
am.displayName = "TagX";
//#endregion
//#region src/icons/tags.tsx
var om = /*#__PURE__*/ m("<svg><path d=\"M7 9.33V2.77c0-.43.34-.77.77-.77h6.18q.3 0 .53.21l7.28 6.92c.3.3.32.78.03 1.08l-6.2 6.55a.77.77 0 0 1-1.09.03l-7.26-6.9A.8.8 0 0 1 7 9.32\"></svg>", !1, !0, !1), sm = /*#__PURE__*/ m("<svg><path d=\"M10.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"></svg>", !1, !0, !1), cm = /*#__PURE__*/ m("<svg><path d=\"M3 8v3.17a2 2 0 0 0 .59 1.42l7.4 7.4a2 2 0 0 0 2.3.37L14 20\"></svg>", !1, !0, !1);
function lm(t) {
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
			om(),
			sm(),
			cm()
		];
	} }));
}
lm.displayName = "Tags";
//#endregion
//#region src/icons/target.tsx
var um = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=10></svg>", !1, !0, !1), dm = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=6></svg>", !1, !0, !1), fm = /*#__PURE__*/ m("<svg><circle cx=12 cy=12 r=2></svg>", !1, !0, !1);
function pm(t) {
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
			um(),
			dm(),
			fm()
		];
	} }));
}
pm.displayName = "Target";
//#endregion
//#region src/icons/thumbs-down.tsx
var mm = /*#__PURE__*/ m("<svg><path d=\"M17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4m0 12h-.26a1 1 0 0 0-.96.7l-2.16 6.93a.37.37 0 0 1-.48.24 4.1 4.1 0 0 1-2.66-3.4l-.4-3.66a.9.9 0 0 0-.9-.81h-6a1 1 0 0 1-.99-1.16l1.67-10A1 1 0 0 1 4.85 2H17m0 12V2\"></svg>", !1, !0, !1);
function hm(t) {
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
		return mm();
	} }));
}
hm.displayName = "ThumbsDown";
//#endregion
//#region src/icons/thumbs-up.tsx
var gm = /*#__PURE__*/ m("<svg><path d=\"M7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4m0-12h.27a1 1 0 0 0 .95-.7l2.16-6.93a.37.37 0 0 1 .48-.24 4.1 4.1 0 0 1 2.66 3.4l.4 3.66a.9.9 0 0 0 .9.81h6a1 1 0 0 1 .99 1.16l-1.67 10a1 1 0 0 1-.99.84H7m0-12v12\"></svg>", !1, !0, !1);
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
		return gm();
	} }));
}
$.displayName = "ThumbsUp";
//#endregion
//#region src/icons/trash-2.tsx
var _m = /*#__PURE__*/ m("<svg><path d=\"M3 6h2m0 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6m2 0h-2m0 0h-3M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8\"></svg>", !1, !0, !1), vm = /*#__PURE__*/ m("<svg><path d=\"M10 11v6\"></svg>", !1, !0, !1), ym = /*#__PURE__*/ m("<svg><path d=\"M14 11v6\"></svg>", !1, !0, !1);
function bm(t) {
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
			_m(),
			vm(),
			ym()
		];
	} }));
}
bm.displayName = "Trash2";
//#endregion
//#region src/icons/trash.tsx
var xm = /*#__PURE__*/ m("<svg><path d=\"M3 6h2m16 0h-2M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8M8 6H5m11 0h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6\"></svg>", !1, !0, !1);
function Sm(t) {
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
		return xm();
	} }));
}
Sm.displayName = "Trash";
//#endregion
//#region src/icons/truck-electric.tsx
var Cm = /*#__PURE__*/ m("<svg><path d=\"M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), wm = /*#__PURE__*/ m("<svg><path d=\"M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), Tm = /*#__PURE__*/ m("<svg><path d=\"M5 18H4a2 2 0 0 1-2-2v-5m12 7V6a2 2 0 0 0-2-2H8\"></svg>", !1, !0, !1), Em = /*#__PURE__*/ m("<svg><path d=\"M4 2 2.13 5.74a.12.12 0 0 0 .14.17l2.51-.84a.12.12 0 0 1 .16.15L4 8.5\"></svg>", !1, !0, !1), Dm = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), Om = /*#__PURE__*/ m("<svg><path d=\"M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14\"></svg>", !1, !0, !1);
function km(t) {
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
			Cm(),
			wm(),
			Tm(),
			Em(),
			Dm(),
			Om()
		];
	} }));
}
km.displayName = "TruckElectric";
//#endregion
//#region src/icons/truck.tsx
var Am = /*#__PURE__*/ m("<svg><circle cx=7 cy=18 r=2></svg>", !1, !0, !1), jm = /*#__PURE__*/ m("<svg><circle cx=17 cy=18 r=2></svg>", !1, !0, !1), Mm = /*#__PURE__*/ m("<svg><path d=\"M5 18H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12\"></svg>", !1, !0, !1), Nm = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), Pm = /*#__PURE__*/ m("<svg><path d=\"M19 18h1a2 2 0 0 0 2-2v-3.54a2 2 0 0 0-.65-1.47l-3.78-3.46A2 2 0 0 0 16.22 7H14\"></svg>", !1, !0, !1);
function Fm(t) {
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
			Am(),
			jm(),
			Mm(),
			Nm(),
			Pm()
		];
	} }));
}
Fm.displayName = "Truck";
//#endregion
//#region src/icons/upload.tsx
var Im = /*#__PURE__*/ m("<svg><path d=\"M3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5\"></svg>", !1, !0, !1), Lm = /*#__PURE__*/ m("<svg><path d=\"m7 8 4.65-4.65a.5.5 0 0 1 .7 0L17 8\"></svg>", !1, !0, !1), Rm = /*#__PURE__*/ m("<svg><path d=\"M12 4v11\"></svg>", !1, !0, !1);
function zm(t) {
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
			Im(),
			Lm(),
			Rm()
		];
	} }));
}
zm.displayName = "Upload";
//#endregion
//#region src/icons/user-check.tsx
var Bm = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), Vm = /*#__PURE__*/ m("<svg><path d=\"M15 14.76A8 8 0 0 0 2 21\"></svg>", !1, !0, !1), Hm = /*#__PURE__*/ m("<svg><path d=\"m16 19.33 1.6 1.34a.5.5 0 0 0 .72-.07L22 16\"></svg>", !1, !0, !1);
function Um(t) {
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
			Bm(),
			Vm(),
			Hm()
		];
	} }));
}
Um.displayName = "UserCheck";
//#endregion
//#region src/icons/user.tsx
var Wm = /*#__PURE__*/ m("<svg><circle cx=12 cy=8 r=5></svg>", !1, !0, !1), Gm = /*#__PURE__*/ m("<svg><path d=\"M20 21a8 8 0 1 0-16 0\"></svg>", !1, !0, !1);
function Km(t) {
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
		return [Wm(), Gm()];
	} }));
}
Km.displayName = "User";
//#endregion
//#region src/icons/users.tsx
var qm = /*#__PURE__*/ m("<svg><circle cx=10 cy=8 r=5></svg>", !1, !0, !1), Jm = /*#__PURE__*/ m("<svg><path d=\"M18 21a8 8 0 1 0-16 0\"></svg>", !1, !0, !1), Ym = /*#__PURE__*/ m("<svg><path d=\"M18 4c.83 1.33 2 4.9 0 8.5\"></svg>", !1, !0, !1), Xm = /*#__PURE__*/ m("<svg><path d=\"M18 12.5c1.5 1.33 4.4 4.9 4 8.5\"></svg>", !1, !0, !1);
function Zm(t) {
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
			qm(),
			Jm(),
			Ym(),
			Xm()
		];
	} }));
}
Zm.displayName = "Users";
//#endregion
//#region src/icons/van.tsx
var Qm = /*#__PURE__*/ m("<svg><path d=\"M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), $m = /*#__PURE__*/ m("<svg><path d=\"M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"></svg>", !1, !0, !1), eh = /*#__PURE__*/ m("<svg><path d=\"M5 18H4c-1.1 0-2-.77-2-1.71V7.7C2 6.77 2.9 6 4 6h11.56a2 2 0 0 1 1.9 1.37L19 12\"></svg>", !1, !0, !1), th = /*#__PURE__*/ m("<svg><path d=\"M9 18h6\"></svg>", !1, !0, !1), nh = /*#__PURE__*/ m("<svg><path d=\"M19.55 18H20a2 2 0 0 0 2-2v-.7a3 3 0 0 0-.83-2.08l-.28-.3a3 3 0 0 0-2.17-.92H14a1 1 0 0 1-1-1V6\"></svg>", !1, !0, !1);
function rh(t) {
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
			Qm(),
			$m(),
			eh(),
			th(),
			nh()
		];
	} }));
}
rh.displayName = "Van";
//#endregion
//#region src/icons/video-camera.tsx
var ih = /*#__PURE__*/ m("<svg><path d=\"M14.21 7H4.8a.77.77 0 0 0-.79.75v7.5c0 .41.35.75.79.75h9.42c.44 0 .79-.34.79-.75v-7.5a.77.77 0 0 0-.79-.75\"></svg>", !1, !0, !1), ah = /*#__PURE__*/ m("<svg><path d=\"m15 12.1 3.7 1.8c.56.26 1.3-.02 1.3-.5V9.6c0-.48-.74-.76-1.3-.5L15 10.9\"></svg>", !1, !0, !1), oh = /*#__PURE__*/ m("<svg><path d=\"m7 21 2.14-3.57a1 1 0 0 1 1.72 0L13 21\"></svg>", !1, !0, !1), sh = /*#__PURE__*/ m("<svg><circle cx=6.5 cy=3.5 r=1.5></svg>", !1, !0, !1), ch = /*#__PURE__*/ m("<svg><circle cx=11.5 cy=3.5 r=1.5></svg>", !1, !0, !1);
function lh(t) {
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
			ih(),
			ah(),
			oh(),
			sh(),
			ch()
		];
	} }));
}
lh.displayName = "VideoCamera";
//#endregion
//#region src/icons/video.tsx
var uh = /*#__PURE__*/ m("<svg><rect width=14 height=12 x=2 y=6 rx=1></svg>", !1, !0, !1), dh = /*#__PURE__*/ m("<svg><path d=\"m16 13 4.45 2.96a1 1 0 0 0 1.55-.83V8.87a1 1 0 0 0-1.55-.83L16 11\"></svg>", !1, !0, !1);
function fh(t) {
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
		return [uh(), dh()];
	} }));
}
fh.displayName = "Video";
//#endregion
//#region src/icons/volume-1.tsx
var ph = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.22a1 1 0 0 0 .6-.2l3.38-2.6a.5.5 0 0 1 .8.39V19.1a.5.5 0 0 1-.76.42l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), mh = /*#__PURE__*/ m("<svg><path d=\"M17 7c1.17 1.33 2.8 5.2 0 10\"></svg>", !1, !0, !1);
function hh(t) {
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
		return [ph(), mh()];
	} }));
}
hh.displayName = "Volume1";
//#endregion
//#region src/icons/volume-2.tsx
var gh = /*#__PURE__*/ m("<svg><path d=\"M2 15V9a1 1 0 0 1 1-1h3.67a1 1 0 0 0 .6-.2l2.93-2.2a.5.5 0 0 1 .8.4v12.12a.5.5 0 0 1-.76.43l-4-2.4a1 1 0 0 0-.52-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), _h = /*#__PURE__*/ m("<svg><path d=\"M16 9c.83 1 2 3.6 0 6\"></svg>", !1, !0, !1), vh = /*#__PURE__*/ m("<svg><path d=\"M19 5c2.33 2.33 5.6 8.4 0 14\"></svg>", !1, !0, !1);
function yh(t) {
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
			gh(),
			_h(),
			vh()
		];
	} }));
}
yh.displayName = "Volume2";
//#endregion
//#region src/icons/volume-off.tsx
var bh = /*#__PURE__*/ m("<svg><path d=\"M7 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.72a1 1 0 0 1 .52.14l4 2.4a.5.5 0 0 0 .76-.42V12\"></svg>", !1, !0, !1), xh = /*#__PURE__*/ m("<svg><path d=\"m10 5.75.2-.15a.5.5 0 0 1 .8.4v1\"></svg>", !1, !0, !1), Sh = /*#__PURE__*/ m("<svg><path d=\"M16 9a5 5 0 0 1 1.09 3.5\"></svg>", !1, !0, !1), Ch = /*#__PURE__*/ m("<svg><path d=\"M19 5c1.92 1.92 4.47 6.37 2.2 11\"></svg>", !1, !0, !1), wh = /*#__PURE__*/ m("<svg><path d=\"m2 2 20 20\"></svg>", !1, !0, !1);
function Th(t) {
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
			bh(),
			xh(),
			Sh(),
			Ch(),
			wh()
		];
	} }));
}
Th.displayName = "VolumeOff";
//#endregion
//#region src/icons/volume-x.tsx
var Eh = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.22a1 1 0 0 0 .6-.2l3.38-2.6a.5.5 0 0 1 .8.39V19.1a.5.5 0 0 1-.76.42l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1), Dh = /*#__PURE__*/ m("<svg><path d=\"m16 9 6 6\"></svg>", !1, !0, !1), Oh = /*#__PURE__*/ m("<svg><path d=\"m22 9-6 6\"></svg>", !1, !0, !1);
function kh(t) {
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
			Eh(),
			Dh(),
			Oh()
		];
	} }));
}
kh.displayName = "VolumeX";
//#endregion
//#region src/icons/volume.tsx
var Ah = /*#__PURE__*/ m("<svg><path d=\"M2 15.57V8.43a1 1 0 0 1 1-1h4.22a1 1 0 0 0 .6-.2l3.38-2.6a.5.5 0 0 1 .8.39V19.1a.5.5 0 0 1-.76.42l-4.55-2.81a1 1 0 0 0-.53-.15H3a1 1 0 0 1-1-1\"></svg>", !1, !0, !1);
function jh(t) {
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
		return Ah();
	} }));
}
jh.displayName = "Volume";
//#endregion
//#region src/icons/wand.tsx
var Mh = /*#__PURE__*/ m("<svg><path d=\"m12 12-9 9\"></svg>", !1, !0, !1), Nh = /*#__PURE__*/ m("<svg><path d=\"M10 9H8\"></svg>", !1, !0, !1), Ph = /*#__PURE__*/ m("<svg><path d=\"m12 6-1-1\"></svg>", !1, !0, !1), Fh = /*#__PURE__*/ m("<svg><path d=\"M15 4V2\"></svg>", !1, !0, !1), Ih = /*#__PURE__*/ m("<svg><path d=\"M20 9h2\"></svg>", !1, !0, !1), Lh = /*#__PURE__*/ m("<svg><path d=\"M15 14v2\"></svg>", !1, !0, !1), Rh = /*#__PURE__*/ m("<svg><path d=\"m18 12 1 1\"></svg>", !1, !0, !1), zh = /*#__PURE__*/ m("<svg><path d=\"m18 6 1-1\"></svg>", !1, !0, !1), Bh = /*#__PURE__*/ m("<svg><circle cx=15 cy=9 r=0.5></svg>", !1, !0, !1);
function Vh(t) {
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
			Mh(),
			Nh(),
			Ph(),
			Fh(),
			Ih(),
			Lh(),
			Rh(),
			zh(),
			Bh()
		];
	} }));
}
Vh.displayName = "Wand";
//#endregion
//#region src/icons/x.tsx
var Hh = /*#__PURE__*/ m("<svg><path d=\"m6 6 12 12\"></svg>", !1, !0, !1), Uh = /*#__PURE__*/ m("<svg><path d=\"M18 6 6 18\"></svg>", !1, !0, !1);
function Wh(t) {
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
		return [Hh(), Uh()];
	} }));
}
Wh.displayName = "X";
//#endregion
export { C as Activity, w as Alert, T as Angry, E as Annoyed, k as ArrowLeft, D as ArrowLeftFromLine, O as ArrowLeftToLine, A as ArrowRightFromLine, j as ArrowRightToLine, M as ArrowUpFromLine, N as ArrowUpLeft, P as ArrowUpRight, F as ArrowUpToLine, I as BarChart, L as BellRing, R as Bookmark, V as Briefcase, z as BriefcaseConveyorBelt, B as BriefcaseMedical, H as Brush, K as Calendar, U as CalendarCheck, W as CalendarDays, G as CalendarX, q as Chat, J as Check, Y as ChevronDown, X as ChevronUp, Q as ChevronsDown, Z as ChevronsDownUp, _n as ChevronsUp, mn as ChevronsUpDown, xn as CircleArrowLeft, Tn as CircleArrowOutUpLeft, kn as CircleArrowOutUpRight, Fn as CircleCheck, Mn as CircleCheckBig, Rn as CircleChevronDown, Vn as CircleChevronUp, Kn as ClockArrowLeft, tr as ColumnChart, Xn as ColumnChartPlainIncreasing, ir as Columns2, cr as Columns3, dr as Compass, pr as CreditCard, _r as Download, br as DraftBook, Cr as Eraser, Dr as ExternalLink, Lr as Eye, Nr as EyeClosed, Gr as File, Hr as FileVolume, qr as Folder, Qr as Frown, ri as Gem, si as GenericLayout, pi as Gift, Hi as Globe, vi as GlobeCheck, wi as GlobeLock, Mi as GlobeOff, Ri as GlobeX, ia as Grid2x2, Ji as Grid2x2Plus, ea as Grid2x2X, va as Grid3x3, fa as Grid3x3Plus, xa as Handbag, Ea as Hashtag, Ia as Heart, ka as HeartCrack, Na as HeartOff, za as Home, Ua as Info, Xa as Key, Ka as KeyRound, oo as Laugh, to as LaughWink, fo as LayoutDashboard, _o as LayoutGrid, wo as LayoutList, Oo as LayoutPanelLeft, Mo as LayoutPanelRight, Io as LayoutPanelTop, Bo as LayoutTemplate, Jo as Link2, Go as Link2Off, ks as List, es as ListChevronsDownUp, os as ListChevronsUpDown, us as ListFilter, gs as ListOrdered, Ss as ListTodo, Us as Lock, Ns as LockKeyhole, Bs as LockOpen, Ls as LockOpenKeyhole, qs as LogIn, Zs as LogOut, xc as Mail, tc as MailCheck, ac as MailMinus, cc as MailOpen, pc as MailPlus, vc as MailX, Wc as Map, Dc as MapPin, wc as MapPinCheck, Lc as MapPinned, $c as Meh, Jc as MehBlank, dl as Menu, rl as MenuHorizontal, sl as MenuVertical, Cl as Mic, _l as MicOff, bl as MicVintage, Ol as Moon, El as MoonStar, jl as MousePointer, Il as Navigation, Nl as Navigation2, zl as Notification, Gl as PackageCheck, Xl as PaintBucket, Ql as Paperclip, tu as PenLine, ou as PenTool, lu as Pencil, Fu as Phone, pu as PhoneCall, _u as PhoneForward, xu as PhoneIncoming, Tu as PhoneOff, ku as PhoneOutgoing, Nu as PhoneX, Ru as PieChart, Vu as Pin, Gu as Pipette, Xu as Play, Ju as PlaySquare, $u as Plus, ad as Radio, ud as RefreshCw, pd as RotateCwSquare, gd as Rows2, bd as Rows3, Cd as Search, Ed as Send, Md as Settings, kd as SettingsControl, Fd as ShieldCheck, zd as ShieldQuestion, Hd as ShoppingBag, qd as ShoppingCart, Qd as SimCard, of as SlidersHorizontal, pf as SlidersVertical, Af as Smile, bf as SmilePlus, Tf as SmileWink, Ff as Sparkles, Bf as Split, Uf as SquareActivity, qf as SquareArrowOutUpLeft, Zf as SquareArrowOutUpRight, tp as SquareArrowUpLeft, ap as SquareArrowUpRight, cp as SquareChevronDown, dp as SquareChevronUp, pp as Star, zp as Sun, Cp as SunDim, kp as SunMoon, Wp as SwapHorizontal, Yp as SwapVertical, em as TagPlus, am as TagX, lm as Tags, pm as Target, hm as ThumbsDown, $ as ThumbsUp, Sm as Trash, bm as Trash2, Fm as Truck, km as TruckElectric, zm as Upload, Km as User, Um as UserCheck, Zm as Users, rh as Van, fh as Video, lh as VideoCamera, jh as Volume, hh as Volume1, yh as Volume2, Th as VolumeOff, kh as VolumeX, Vh as Wand, Wh as X };

//# sourceMappingURL=index.js.map