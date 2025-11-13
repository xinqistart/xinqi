import { p as D, t as Te, ch as Fe, bl as xe, ad as Ee, q as Re, ah as N, E as ke, H as He, cc as Pe } from "./index-DAdfXJ2i.js";
function pe(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
}
function fe(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = {});
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((s) => i.indexOf(s) < 0).forEach((s) => {
    typeof t[s] > "u" ? t[s] = e[s] : pe(e[s]) && pe(t[s]) && Object.keys(e[s]).length > 0 && fe(t[s], e[s]);
  });
}
const Me = { body: {}, addEventListener() {
}, removeEventListener() {
}, activeElement: { blur() {
}, nodeName: "" }, querySelector() {
  return null;
}, querySelectorAll() {
  return [];
}, getElementById() {
  return null;
}, createEvent() {
  return { initEvent() {
  } };
}, createElement() {
  return { children: [], childNodes: [], style: {}, setAttribute() {
  }, getElementsByTagName() {
    return [];
  } };
}, createElementNS() {
  return {};
}, importNode() {
  return null;
}, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
function k() {
  const t = typeof document < "u" ? document : {};
  return fe(t, Me), t;
}
const je = { document: Me, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
}, pushState() {
}, go() {
}, back() {
} }, CustomEvent: function() {
  return this;
}, addEventListener() {
}, removeEventListener() {
}, getComputedStyle() {
  return { getPropertyValue() {
    return "";
  } };
}, Image() {
}, Date() {
}, screen: {}, setTimeout() {
}, clearTimeout() {
}, matchMedia() {
  return {};
}, requestAnimationFrame(t) {
  return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
}, cancelAnimationFrame(t) {
  typeof setTimeout > "u" || clearTimeout(t);
} };
function G() {
  const t = typeof window < "u" ? window : {};
  return fe(t, je), t;
}
function $e(t) {
  return t === void 0 && (t = ""), t.trim().split(" ").filter((e) => !!e.trim());
}
function We(t) {
  const e = t;
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null;
    } catch {
    }
    try {
      delete e[i];
    } catch {
    }
  });
}
function Ce(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function Z() {
  return Date.now();
}
function qe(t) {
  const e = G();
  let i;
  return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i;
}
function Ye(t, e) {
  e === void 0 && (e = "x");
  const i = G();
  let s, n, r;
  const l = qe(t);
  return i.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((a) => a.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0;
}
function U(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object";
}
function Xe(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11);
}
function V() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (s != null && !Xe(s)) {
      const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, l = n.length; r < l; r += 1) {
        const a = n[r], o = Object.getOwnPropertyDescriptor(s, a);
        o !== void 0 && o.enumerable && (U(t[a]) && U(s[a]) ? s[a].__swiper__ ? t[a] = s[a] : V(t[a], s[a]) : !U(t[a]) && U(s[a]) ? (t[a] = {}, s[a].__swiper__ ? t[a] = s[a] : V(t[a], s[a])) : t[a] = s[a]);
      }
    }
  }
  return t;
}
function K(t, e, i) {
  t.style.setProperty(e, i);
}
function Ie(t) {
  let { swiper: e, targetPosition: i, side: s } = t;
  const n = G(), r = -e.translate;
  let l = null, a;
  const o = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const d = i > r ? "next" : "prev", u = (c, p) => d === "next" && c >= p || d === "prev" && c <= p, f = () => {
    a = (/* @__PURE__ */ new Date()).getTime(), l === null && (l = a);
    const c = Math.max(Math.min((a - l) / o, 1), 0), p = 0.5 - Math.cos(c * Math.PI) / 2;
    let m = r + p * (i - r);
    if (u(m, i) && (m = i), e.wrapperEl.scrollTo({ [s]: m }), u(m, i)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({ [s]: m });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(f);
  };
  f();
}
function j(t, e) {
  e === void 0 && (e = "");
  const i = G(), s = [...t.children];
  return i.HTMLSlotElement && t instanceof HTMLSlotElement && s.push(...t.assignedElements()), e ? s.filter((n) => n.matches(e)) : s;
}
function Ue(t, e) {
  const i = [e];
  for (; i.length > 0; ) {
    const s = i.shift();
    if (t === s) return true;
    i.push(...s.children, ...s.shadowRoot ? s.shadowRoot.children : [], ...s.assignedElements ? s.assignedElements() : []);
  }
}
function Ke(t, e) {
  const i = G();
  let s = e.contains(t);
  return !s && i.HTMLSlotElement && e instanceof HTMLSlotElement && (s = [...e.assignedElements()].includes(t), s || (s = Ue(t, e))), s;
}
function J(t) {
  try {
    console.warn(t);
    return;
  } catch {
  }
}
function oe(t, e) {
  e === void 0 && (e = []);
  const i = document.createElement(t);
  return i.classList.add(...Array.isArray(e) ? e : $e(e)), i;
}
function Qe(t, e) {
  const i = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s;
  }
  return i;
}
function Ze(t, e) {
  const i = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s;
  }
  return i;
}
function $(t, e) {
  return G().getComputedStyle(t, null).getPropertyValue(e);
}
function me(t) {
  let e = t, i;
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (i += 1);
    return i;
  }
}
function Je(t, e) {
  const i = [];
  let s = t.parentElement;
  for (; s; ) i.push(s), s = s.parentElement;
  return i;
}
function he(t, e, i) {
  const s = G();
  return t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
}
function ge(t, e) {
  e === void 0 && (e = ""), typeof trustedTypes < "u" ? t.innerHTML = trustedTypes.createPolicy("html", { createHTML: (i) => i }).createHTML(e) : t.innerHTML = e;
}
let ee;
function et() {
  const t = G(), e = k();
  return { smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style, touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch) };
}
function Oe() {
  return ee || (ee = et()), ee;
}
let te;
function tt(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const i = Oe(), s = G(), n = s.navigator.platform, r = e || s.navigator.userAgent, l = { ios: false, android: false }, a = s.screen.width, o = s.screen.height, d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = r.match(/(iPad).*OS\s([\d_]+)/);
  const f = r.match(/(iPod)(.*OS\s([\d_]+))?/), c = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = n === "Win32";
  let m = n === "MacIntel";
  const S = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !u && m && i.touch && S.indexOf(`${a}x${o}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), m = false), d && !p && (l.os = "android", l.android = true), (u || c || f) && (l.os = "ios", l.ios = true), l;
}
function Le(t) {
  return t === void 0 && (t = {}), te || (te = tt(t)), te;
}
let ie;
function it() {
  const t = G(), e = Le();
  let i = false;
  function s() {
    const a = t.navigator.userAgent.toLowerCase();
    return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0;
  }
  if (s()) {
    const a = String(t.navigator.userAgent);
    if (a.includes("Version/")) {
      const [o, d] = a.split("Version/")[1].split(" ")[0].split(".").map((u) => Number(u));
      i = o < 16 || o === 16 && d < 2;
    }
  }
  const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent), r = s(), l = r || n && e.ios;
  return { isSafari: i || r, needPerspectiveFix: i, need3dFix: l, isWebView: n };
}
function ze() {
  return ie || (ie = it()), ie;
}
function st(t) {
  let { swiper: e, on: i, emit: s } = t;
  const n = G();
  let r = null, l = null;
  const a = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, o = () => {
    !e || e.destroyed || !e.initialized || (r = new ResizeObserver((f) => {
      l = n.requestAnimationFrame(() => {
        const { width: c, height: p } = e;
        let m = c, S = p;
        f.forEach((P) => {
          let { contentBoxSize: g, contentRect: y, target: w } = P;
          w && w !== e.el || (m = y ? y.width : (g[0] || g).inlineSize, S = y ? y.height : (g[0] || g).blockSize);
        }), (m !== c || S !== p) && a();
      });
    }), r.observe(e.el));
  }, d = () => {
    l && n.cancelAnimationFrame(l), r && r.unobserve && e.el && (r.unobserve(e.el), r = null);
  }, u = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  i("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      o();
      return;
    }
    n.addEventListener("resize", a), n.addEventListener("orientationchange", u);
  }), i("destroy", () => {
    d(), n.removeEventListener("resize", a), n.removeEventListener("orientationchange", u);
  });
}
function nt(t) {
  let { swiper: e, extendParams: i, on: s, emit: n } = t;
  const r = [], l = G(), a = function(u, f) {
    f === void 0 && (f = {});
    const c = l.MutationObserver || l.WebkitMutationObserver, p = new c((m) => {
      if (e.__preventObserver__) return;
      if (m.length === 1) {
        n("observerUpdate", m[0]);
        return;
      }
      const S = function() {
        n("observerUpdate", m[0]);
      };
      l.requestAnimationFrame ? l.requestAnimationFrame(S) : l.setTimeout(S, 0);
    });
    p.observe(u, { attributes: typeof f.attributes > "u" ? true : f.attributes, childList: e.isElement || (typeof f.childList > "u" ? true : f).childList, characterData: typeof f.characterData > "u" ? true : f.characterData }), r.push(p);
  }, o = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const u = Je(e.hostEl);
        for (let f = 0; f < u.length; f += 1) a(u[f]);
      }
      a(e.hostEl, { childList: e.params.observeSlideChildren }), a(e.wrapperEl, { attributes: false });
    }
  }, d = () => {
    r.forEach((u) => {
      u.disconnect();
    }), r.splice(0, r.length);
  };
  i({ observer: false, observeParents: false, observeSlideChildren: false }), s("init", o), s("destroy", d);
}
var rt = { on(t, e, i) {
  const s = this;
  if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
  const n = i ? "unshift" : "push";
  return t.split(" ").forEach((r) => {
    s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e);
  }), s;
}, once(t, e, i) {
  const s = this;
  if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
  function n() {
    s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
    for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++) l[a] = arguments[a];
    e.apply(s, l);
  }
  return n.__emitterProxy = e, s.on(t, n, i);
}, onAny(t, e) {
  const i = this;
  if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
  const s = e ? "unshift" : "push";
  return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i;
}, offAny(t) {
  const e = this;
  if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
  const i = e.eventsAnyListeners.indexOf(t);
  return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
}, off(t, e) {
  const i = this;
  return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach((s) => {
    typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n, r) => {
      (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[s].splice(r, 1);
    });
  }), i;
}, emit() {
  const t = this;
  if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
  let e, i, s;
  for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
  return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], i = r.slice(1, r.length), s = t) : (e = r[0].events, i = r[0].data, s = r[0].context || t), i.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((o) => {
    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((d) => {
      d.apply(s, [o, ...i]);
    }), t.eventsListeners && t.eventsListeners[o] && t.eventsListeners[o].forEach((d) => {
      d.apply(s, i);
    });
  }), t;
} };
function at() {
  const t = this;
  let e, i;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight, !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt($(s, "padding-left") || 0, 10) - parseInt($(s, "padding-right") || 0, 10), i = i - parseInt($(s, "padding-top") || 0, 10) - parseInt($(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, { width: e, height: i, size: t.isHorizontal() ? e : i }));
}
function lt() {
  const t = this;
  function e(v, x) {
    return parseFloat(v.getPropertyValue(t.getDirectionLabel(x)) || 0);
  }
  const i = t.params, { wrapperEl: s, slidesEl: n, size: r, rtlTranslate: l, wrongRTL: a } = t, o = t.virtual && i.virtual.enabled, d = o ? t.virtual.slides.length : t.slides.length, u = j(n, `.${t.params.slideClass}, swiper-slide`), f = o ? t.virtual.slides.length : u.length;
  let c = [];
  const p = [], m = [];
  let S = i.slidesOffsetBefore;
  typeof S == "function" && (S = i.slidesOffsetBefore.call(t));
  let P = i.slidesOffsetAfter;
  typeof P == "function" && (P = i.slidesOffsetAfter.call(t));
  const g = t.snapGrid.length, y = t.slidesGrid.length;
  let w = i.spaceBetween, E = -S, T = 0, I = 0;
  if (typeof r > "u") return;
  typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * r : typeof w == "string" && (w = parseFloat(w)), t.virtualSize = -w, u.forEach((v) => {
    l ? v.style.marginLeft = "" : v.style.marginRight = "", v.style.marginBottom = "", v.style.marginTop = "";
  }), i.centeredSlides && i.cssMode && (K(s, "--swiper-centered-offset-before", ""), K(s, "--swiper-centered-offset-after", ""));
  const C = i.grid && i.grid.rows > 1 && t.grid;
  C ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
  let b;
  const h = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter((v) => typeof i.breakpoints[v].slidesPerView < "u").length > 0;
  for (let v = 0; v < f; v += 1) {
    b = 0;
    let x;
    if (u[v] && (x = u[v]), C && t.grid.updateSlide(v, x, u), !(u[v] && $(x, "display") === "none")) {
      if (i.slidesPerView === "auto") {
        h && (u[v].style[t.getDirectionLabel("width")] = "");
        const O = getComputedStyle(x), z = x.style.transform, F = x.style.webkitTransform;
        if (z && (x.style.transform = "none"), F && (x.style.webkitTransform = "none"), i.roundLengths) b = t.isHorizontal() ? he(x, "width") : he(x, "height");
        else {
          const R = e(O, "width"), L = e(O, "padding-left"), A = e(O, "padding-right"), M = e(O, "margin-left"), B = e(O, "margin-right"), _ = O.getPropertyValue("box-sizing");
          if (_ && _ === "border-box") b = R + M + B;
          else {
            const { clientWidth: W, offsetWidth: X } = x;
            b = R + L + A + M + B + (X - W);
          }
        }
        z && (x.style.transform = z), F && (x.style.webkitTransform = F), i.roundLengths && (b = Math.floor(b));
      } else b = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (b = Math.floor(b)), u[v] && (u[v].style[t.getDirectionLabel("width")] = `${b}px`);
      u[v] && (u[v].swiperSlideSize = b), m.push(b), i.centeredSlides ? (E = E + b / 2 + T / 2 + w, T === 0 && v !== 0 && (E = E - r / 2 - w), v === 0 && (E = E - r / 2 - w), Math.abs(E) < 1 / 1e3 && (E = 0), i.roundLengths && (E = Math.floor(E)), I % i.slidesPerGroup === 0 && c.push(E), p.push(E)) : (i.roundLengths && (E = Math.floor(E)), (I - Math.min(t.params.slidesPerGroupSkip, I)) % t.params.slidesPerGroup === 0 && c.push(E), p.push(E), E = E + b + w), t.virtualSize += b + w, T = b, I += 1;
    }
  }
  if (t.virtualSize = Math.max(t.virtualSize, r) + P, l && a && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = `${t.virtualSize + w}px`), i.setWrapperSize && (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + w}px`), C && t.grid.updateWrapperSize(b, c), !i.centeredSlides) {
    const v = [];
    for (let x = 0; x < c.length; x += 1) {
      let O = c[x];
      i.roundLengths && (O = Math.floor(O)), c[x] <= t.virtualSize - r && v.push(O);
    }
    c = v, Math.floor(t.virtualSize - r) - Math.floor(c[c.length - 1]) > 1 && c.push(t.virtualSize - r);
  }
  if (o && i.loop) {
    const v = m[0] + w;
    if (i.slidesPerGroup > 1) {
      const x = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup), O = v * i.slidesPerGroup;
      for (let z = 0; z < x; z += 1) c.push(c[c.length - 1] + O);
    }
    for (let x = 0; x < t.virtual.slidesBefore + t.virtual.slidesAfter; x += 1) i.slidesPerGroup === 1 && c.push(c[c.length - 1] + v), p.push(p[p.length - 1] + v), t.virtualSize += v;
  }
  if (c.length === 0 && (c = [0]), w !== 0) {
    const v = t.isHorizontal() && l ? "marginLeft" : t.getDirectionLabel("marginRight");
    u.filter((x, O) => !i.cssMode || i.loop ? true : O !== u.length - 1).forEach((x) => {
      x.style[v] = `${w}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let v = 0;
    m.forEach((O) => {
      v += O + (w || 0);
    }), v -= w;
    const x = v > r ? v - r : 0;
    c = c.map((O) => O <= 0 ? -S : O > x ? x + P : O);
  }
  if (i.centerInsufficientSlides) {
    let v = 0;
    m.forEach((O) => {
      v += O + (w || 0);
    }), v -= w;
    const x = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
    if (v + x < r) {
      const O = (r - v - x) / 2;
      c.forEach((z, F) => {
        c[F] = z - O;
      }), p.forEach((z, F) => {
        p[F] = z + O;
      });
    }
  }
  if (Object.assign(t, { slides: u, snapGrid: c, slidesGrid: p, slidesSizesGrid: m }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
    K(s, "--swiper-centered-offset-before", `${-c[0]}px`), K(s, "--swiper-centered-offset-after", `${t.size / 2 - m[m.length - 1] / 2}px`);
    const v = -t.snapGrid[0], x = -t.slidesGrid[0];
    t.snapGrid = t.snapGrid.map((O) => O + v), t.slidesGrid = t.slidesGrid.map((O) => O + x);
  }
  if (f !== d && t.emit("slidesLengthChange"), c.length !== g && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== y && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !o && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
    const v = `${i.containerModifierClass}backface-hidden`, x = t.el.classList.contains(v);
    f <= i.maxBackfaceHiddenSlides ? x || t.el.classList.add(v) : x && t.el.classList.remove(v);
  }
}
function ot(t) {
  const e = this, i = [], s = e.virtual && e.params.virtual.enabled;
  let n = 0, r;
  typeof t == "number" ? e.setTransition(t) : t === true && e.setTransition(e.params.speed);
  const l = (a) => s ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1) if (e.params.centeredSlides) (e.visibleSlides || []).forEach((a) => {
    i.push(a);
  });
  else for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
    const a = e.activeIndex + r;
    if (a > e.slides.length && !s) break;
    i.push(l(a));
  }
  else i.push(l(e.activeIndex));
  for (r = 0; r < i.length; r += 1) if (typeof i[r] < "u") {
    const a = i[r].offsetHeight;
    n = a > n ? a : n;
  }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function dt() {
  const t = this, e = t.slides, i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
  for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment();
}
const ve = (t, e, i) => {
  e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i);
};
function ut(t) {
  t === void 0 && (t = this && this.translate || 0);
  const e = this, i = e.params, { slides: s, rtlTranslate: n, snapGrid: r } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let l = -t;
  n && (l = t), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let a = i.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < s.length; o += 1) {
    const d = s[o];
    let u = d.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (u -= s[0].swiperSlideOffset);
    const f = (l + (i.centeredSlides ? e.minTranslate() : 0) - u) / (d.swiperSlideSize + a), c = (l - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - u) / (d.swiperSlideSize + a), p = -(l - u), m = p + e.slidesSizesGrid[o], S = p >= 0 && p <= e.size - e.slidesSizesGrid[o], P = p >= 0 && p < e.size - 1 || m > 1 && m <= e.size || p <= 0 && m >= e.size;
    P && (e.visibleSlides.push(d), e.visibleSlidesIndexes.push(o)), ve(d, P, i.slideVisibleClass), ve(d, S, i.slideFullyVisibleClass), d.progress = n ? -f : f, d.originalProgress = n ? -c : c;
  }
}
function ft(t) {
  const e = this;
  if (typeof t > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    t = e && e.translate && e.translate * u || 0;
  }
  const i = e.params, s = e.maxTranslate() - e.minTranslate();
  let { progress: n, isBeginning: r, isEnd: l, progressLoop: a } = e;
  const o = r, d = l;
  if (s === 0) n = 0, r = true, l = true;
  else {
    n = (t - e.minTranslate()) / s;
    const u = Math.abs(t - e.minTranslate()) < 1, f = Math.abs(t - e.maxTranslate()) < 1;
    r = u || n <= 0, l = f || n >= 1, u && (n = 0), f && (n = 1);
  }
  if (i.loop) {
    const u = e.getSlideIndexByData(0), f = e.getSlideIndexByData(e.slides.length - 1), c = e.slidesGrid[u], p = e.slidesGrid[f], m = e.slidesGrid[e.slidesGrid.length - 1], S = Math.abs(t);
    S >= c ? a = (S - c) / m : a = (S + m - p) / m, a > 1 && (a -= 1);
  }
  Object.assign(e, { progress: n, progressLoop: a, isBeginning: r, isEnd: l }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), r && !o && e.emit("reachBeginning toEdge"), l && !d && e.emit("reachEnd toEdge"), (o && !r || d && !l) && e.emit("fromEdge"), e.emit("progress", n);
}
const se = (t, e, i) => {
  e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i);
};
function ct() {
  const t = this, { slides: e, params: i, slidesEl: s, activeIndex: n } = t, r = t.virtual && i.virtual.enabled, l = t.grid && i.grid && i.grid.rows > 1, a = (f) => j(s, `.${i.slideClass}${f}, swiper-slide${f}`)[0];
  let o, d, u;
  if (r) if (i.loop) {
    let f = n - t.virtual.slidesBefore;
    f < 0 && (f = t.virtual.slides.length + f), f >= t.virtual.slides.length && (f -= t.virtual.slides.length), o = a(`[data-swiper-slide-index="${f}"]`);
  } else o = a(`[data-swiper-slide-index="${n}"]`);
  else l ? (o = e.find((f) => f.column === n), u = e.find((f) => f.column === n + 1), d = e.find((f) => f.column === n - 1)) : o = e[n];
  o && (l || (u = Ze(o, `.${i.slideClass}, swiper-slide`)[0], i.loop && !u && (u = e[0]), d = Qe(o, `.${i.slideClass}, swiper-slide`)[0], i.loop && !d === 0 && (d = e[e.length - 1]))), e.forEach((f) => {
    se(f, f === o, i.slideActiveClass), se(f, f === u, i.slideNextClass), se(f, f === d, i.slidePrevClass);
  }), t.emitSlidesClasses();
}
const Q = (t, e) => {
  if (!t || t.destroyed || !t.params) return;
  const i = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`, s = e.closest(i());
  if (s) {
    let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
    !n && t.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      s.shadowRoot && (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), n && n.remove());
    })), n && n.remove();
  }
}, ne = (t, e) => {
  if (!t.slides[e]) return;
  const i = t.slides[e].querySelector('[loading="lazy"]');
  i && i.removeAttribute("loading");
}, de = (t) => {
  if (!t || t.destroyed || !t.params) return;
  let e = t.params.lazyPreloadPrevNext;
  const i = t.slides.length;
  if (!i || !e || e < 0) return;
  e = Math.min(e, i);
  const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView), n = t.activeIndex;
  if (t.params.grid && t.params.grid.rows > 1) {
    const l = n, a = [l - e];
    a.push(...Array.from({ length: e }).map((o, d) => l + s + d)), t.slides.forEach((o, d) => {
      a.includes(o.column) && ne(t, d);
    });
    return;
  }
  const r = n + s - 1;
  if (t.params.rewind || t.params.loop) for (let l = n - e; l <= r + e; l += 1) {
    const a = (l % i + i) % i;
    (a < n || a > r) && ne(t, a);
  }
  else for (let l = Math.max(n - e, 0); l <= Math.min(r + e, i - 1); l += 1) l !== n && (l > r || l < n) && ne(t, l);
};
function pt(t) {
  const { slidesGrid: e, params: i } = t, s = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1) typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
  return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function mt(t) {
  const e = this, i = e.rtlTranslate ? e.translate : -e.translate, { snapGrid: s, params: n, activeIndex: r, realIndex: l, snapIndex: a } = e;
  let o = t, d;
  const u = (p) => {
    let m = p - e.virtual.slidesBefore;
    return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m;
  };
  if (typeof o > "u" && (o = pt(e)), s.indexOf(i) >= 0) d = s.indexOf(i);
  else {
    const p = Math.min(n.slidesPerGroupSkip, o);
    d = p + Math.floor((o - p) / n.slidesPerGroup);
  }
  if (d >= s.length && (d = s.length - 1), o === r && !e.params.loop) {
    d !== a && (e.snapIndex = d, e.emit("snapIndexChange"));
    return;
  }
  if (o === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = u(o);
    return;
  }
  const f = e.grid && n.grid && n.grid.rows > 1;
  let c;
  if (e.virtual && n.virtual.enabled && n.loop) c = u(o);
  else if (f) {
    const p = e.slides.find((S) => S.column === o);
    let m = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(m) && (m = Math.max(e.slides.indexOf(p), 0)), c = Math.floor(m / n.grid.rows);
  } else if (e.slides[o]) {
    const p = e.slides[o].getAttribute("data-swiper-slide-index");
    p ? c = parseInt(p, 10) : c = o;
  } else c = o;
  Object.assign(e, { previousSnapIndex: a, snapIndex: d, previousRealIndex: l, realIndex: c, previousIndex: r, activeIndex: o }), e.initialized && de(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (l !== c && e.emit("realIndexChange"), e.emit("slideChange"));
}
function ht(t, e) {
  const i = this, s = i.params;
  let n = t.closest(`.${s.slideClass}, swiper-slide`);
  !n && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((a) => {
    !n && a.matches && a.matches(`.${s.slideClass}, swiper-slide`) && (n = a);
  });
  let r = false, l;
  if (n) {
    for (let a = 0; a < i.slides.length; a += 1) if (i.slides[a] === n) {
      r = true, l = a;
      break;
    }
  }
  if (n && r) i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = l;
  else {
    i.clickedSlide = void 0, i.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
}
var gt = { updateSize: at, updateSlides: lt, updateAutoHeight: ot, updateSlidesOffset: dt, updateSlidesProgress: ut, updateProgress: ft, updateSlidesClasses: ct, updateActiveIndex: mt, updateClickedSlide: ht };
function vt(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this, { params: i, rtlTranslate: s, translate: n, wrapperEl: r } = e;
  if (i.virtualTranslate) return s ? -n : n;
  if (i.cssMode) return n;
  let l = Ye(r, t);
  return l += e.cssOverflowAdjustment(), s && (l = -l), l || 0;
}
function wt(t, e) {
  const i = this, { rtlTranslate: s, params: n, wrapperEl: r, progress: l } = i;
  let a = 0, o = 0;
  const d = 0;
  i.isHorizontal() ? a = s ? -t : t : o = t, n.roundLengths && (a = Math.floor(a), o = Math.floor(o)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? a : o, n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -a : -o : n.virtualTranslate || (i.isHorizontal() ? a -= i.cssOverflowAdjustment() : o -= i.cssOverflowAdjustment(), r.style.transform = `translate3d(${a}px, ${o}px, ${d}px)`);
  let u;
  const f = i.maxTranslate() - i.minTranslate();
  f === 0 ? u = 0 : u = (t - i.minTranslate()) / f, u !== l && i.updateProgress(t), i.emit("setTranslate", i.translate, e);
}
function St() {
  return -this.snapGrid[0];
}
function yt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function bt(t, e, i, s, n) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = true), s === void 0 && (s = true);
  const r = this, { params: l, wrapperEl: a } = r;
  if (r.animating && l.preventInteractionOnTransition) return false;
  const o = r.minTranslate(), d = r.maxTranslate();
  let u;
  if (s && t > o ? u = o : s && t < d ? u = d : u = t, r.updateProgress(u), l.cssMode) {
    const f = r.isHorizontal();
    if (e === 0) a[f ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!r.support.smoothScroll) return Ie({ swiper: r, targetPosition: -u, side: f ? "left" : "top" }), true;
      a.scrollTo({ [f ? "left" : "top"]: -u, behavior: "smooth" });
    }
    return true;
  }
  return e === 0 ? (r.setTransition(0), r.setTranslate(u), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(u), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = true, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(c) {
    !r || r.destroyed || c.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = false, i && r.emit("transitionEnd"));
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), true;
}
var Tt = { getTranslate: vt, setTranslate: wt, minTranslate: St, maxTranslate: yt, translateTo: bt };
function xt(t, e) {
  const i = this;
  i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), i.emit("setTransition", t, e);
}
function Be(t) {
  let { swiper: e, runCallbacks: i, direction: s, step: n } = t;
  const { activeIndex: r, previousIndex: l } = e;
  let a = s;
  a || (r > l ? a = "next" : r < l ? a = "prev" : a = "reset"), e.emit(`transition${n}`), i && a === "reset" ? e.emit(`slideResetTransition${n}`) : i && r !== l && (e.emit(`slideChangeTransition${n}`), a === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`));
}
function Et(t, e) {
  t === void 0 && (t = true);
  const i = this, { params: s } = i;
  s.cssMode || (s.autoHeight && i.updateAutoHeight(), Be({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
}
function Pt(t, e) {
  t === void 0 && (t = true);
  const i = this, { params: s } = i;
  i.animating = false, !s.cssMode && (i.setTransition(0), Be({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
}
var Mt = { setTransition: xt, transitionStart: Et, transitionEnd: Pt };
function Ct(t, e, i, s, n) {
  t === void 0 && (t = 0), i === void 0 && (i = true), typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let l = t;
  l < 0 && (l = 0);
  const { params: a, snapGrid: o, slidesGrid: d, previousIndex: u, activeIndex: f, rtlTranslate: c, wrapperEl: p, enabled: m } = r;
  if (!m && !s && !n || r.destroyed || r.animating && a.preventInteractionOnTransition) return false;
  typeof e > "u" && (e = r.params.speed);
  const S = Math.min(r.params.slidesPerGroupSkip, l);
  let P = S + Math.floor((l - S) / r.params.slidesPerGroup);
  P >= o.length && (P = o.length - 1);
  const g = -o[P];
  if (a.normalizeSlideIndex) for (let C = 0; C < d.length; C += 1) {
    const b = -Math.floor(g * 100), h = Math.floor(d[C] * 100), v = Math.floor(d[C + 1] * 100);
    typeof d[C + 1] < "u" ? b >= h && b < v - (v - h) / 2 ? l = C : b >= h && b < v && (l = C + 1) : b >= h && (l = C);
  }
  if (r.initialized && l !== f && (!r.allowSlideNext && (c ? g > r.translate && g > r.minTranslate() : g < r.translate && g < r.minTranslate()) || !r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (f || 0) !== l)) return false;
  l !== (u || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(g);
  let y;
  l > f ? y = "next" : l < f ? y = "prev" : y = "reset";
  const w = r.virtual && r.params.virtual.enabled;
  if (!(w && n) && (c && -g === r.translate || !c && g === r.translate)) return r.updateActiveIndex(l), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), a.effect !== "slide" && r.setTranslate(g), y !== "reset" && (r.transitionStart(i, y), r.transitionEnd(i, y)), false;
  if (a.cssMode) {
    const C = r.isHorizontal(), b = c ? g : -g;
    if (e === 0) w && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = true), w && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = true, requestAnimationFrame(() => {
      p[C ? "scrollLeft" : "scrollTop"] = b;
    })) : p[C ? "scrollLeft" : "scrollTop"] = b, w && requestAnimationFrame(() => {
      r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = false;
    });
    else {
      if (!r.support.smoothScroll) return Ie({ swiper: r, targetPosition: b, side: C ? "left" : "top" }), true;
      p.scrollTo({ [C ? "left" : "top"]: b, behavior: "smooth" });
    }
    return true;
  }
  const I = ze().isSafari;
  return w && !n && I && r.isElement && r.virtual.update(false, false, l), r.setTransition(e), r.setTranslate(g), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, y), e === 0 ? r.transitionEnd(i, y) : r.animating || (r.animating = true, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(b) {
    !r || r.destroyed || b.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, y));
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), true;
}
function It(t, e, i, s) {
  t === void 0 && (t = 0), i === void 0 && (i = true), typeof t == "string" && (t = parseInt(t, 10));
  const n = this;
  if (n.destroyed) return;
  typeof e > "u" && (e = n.params.speed);
  const r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let l = t;
  if (n.params.loop) if (n.virtual && n.params.virtual.enabled) l = l + n.virtual.slidesBefore;
  else {
    let a;
    if (r) {
      const c = l * n.params.grid.rows;
      a = n.slides.find((p) => p.getAttribute("data-swiper-slide-index") * 1 === c).column;
    } else a = n.getSlideIndexByData(l);
    const o = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, { centeredSlides: d } = n.params;
    let u = n.params.slidesPerView;
    u === "auto" ? u = n.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(n.params.slidesPerView, 10)), d && u % 2 === 0 && (u = u + 1));
    let f = o - a < u;
    if (d && (f = f || a < Math.ceil(u / 2)), s && d && n.params.slidesPerView !== "auto" && !r && (f = false), f) {
      const c = d ? a < n.activeIndex ? "prev" : "next" : a - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
      n.loopFix({ direction: c, slideTo: true, activeSlideIndex: c === "next" ? a + 1 : a - o + 1, slideRealIndex: c === "next" ? n.realIndex : void 0 });
    }
    if (r) {
      const c = l * n.params.grid.rows;
      l = n.slides.find((p) => p.getAttribute("data-swiper-slide-index") * 1 === c).column;
    } else l = n.getSlideIndexByData(l);
  }
  return requestAnimationFrame(() => {
    n.slideTo(l, e, i, s);
  }), n;
}
function Ot(t, e, i) {
  e === void 0 && (e = true);
  const s = this, { enabled: n, params: r, animating: l } = s;
  if (!n || s.destroyed) return s;
  typeof t > "u" && (t = s.params.speed);
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", true), 1));
  const o = s.activeIndex < r.slidesPerGroupSkip ? 1 : a, d = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !d && r.loopPreventsSliding) return false;
    if (s.loopFix({ direction: "next" }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
      s.slideTo(s.activeIndex + o, t, e, i);
    }), true;
  }
  return r.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + o, t, e, i);
}
function Lt(t, e, i) {
  e === void 0 && (e = true);
  const s = this, { params: n, snapGrid: r, slidesGrid: l, rtlTranslate: a, enabled: o, animating: d } = s;
  if (!o || s.destroyed) return s;
  typeof t > "u" && (t = s.params.speed);
  const u = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !u && n.loopPreventsSliding) return false;
    s.loopFix({ direction: "prev" }), s._clientLeft = s.wrapperEl.clientLeft;
  }
  const f = a ? s.translate : -s.translate;
  function c(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const p = c(f), m = r.map((y) => c(y)), S = n.freeMode && n.freeMode.enabled;
  let P = r[m.indexOf(p) - 1];
  if (typeof P > "u" && (n.cssMode || S)) {
    let y;
    r.forEach((w, E) => {
      p >= w && (y = E);
    }), typeof y < "u" && (P = S ? r[y] : r[y > 0 ? y - 1 : y]);
  }
  let g = 0;
  if (typeof P < "u" && (g = l.indexOf(P), g < 0 && (g = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (g = g - s.slidesPerViewDynamic("previous", true) + 1, g = Math.max(g, 0))), n.rewind && s.isBeginning) {
    const y = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
    return s.slideTo(y, t, e, i);
  } else if (n.loop && s.activeIndex === 0 && n.cssMode) return requestAnimationFrame(() => {
    s.slideTo(g, t, e, i);
  }), true;
  return s.slideTo(g, t, e, i);
}
function zt(t, e, i) {
  e === void 0 && (e = true);
  const s = this;
  if (!s.destroyed) return typeof t > "u" && (t = s.params.speed), s.slideTo(s.activeIndex, t, e, i);
}
function Bt(t, e, i, s) {
  e === void 0 && (e = true), s === void 0 && (s = 0.5);
  const n = this;
  if (n.destroyed) return;
  typeof t > "u" && (t = n.params.speed);
  let r = n.activeIndex;
  const l = Math.min(n.params.slidesPerGroupSkip, r), a = l + Math.floor((r - l) / n.params.slidesPerGroup), o = n.rtlTranslate ? n.translate : -n.translate;
  if (o >= n.snapGrid[a]) {
    const d = n.snapGrid[a], u = n.snapGrid[a + 1];
    o - d > (u - d) * s && (r += n.params.slidesPerGroup);
  } else {
    const d = n.snapGrid[a - 1], u = n.snapGrid[a];
    o - d <= (u - d) * s && (r -= n.params.slidesPerGroup);
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, i);
}
function At() {
  const t = this;
  if (t.destroyed) return;
  const { params: e, slidesEl: i } = t, s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let n = t.getSlideIndexWhenGrid(t.clickedIndex), r;
  const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`, a = t.grid && t.params.grid && t.params.grid.rows > 1;
  if (e.loop) {
    if (t.animating) return;
    r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? t.slideToLoop(r) : n > (a ? (t.slides.length - s) / 2 - (t.params.grid.rows - 1) : t.slides.length - s) ? (t.loopFix(), n = t.getSlideIndex(j(i, `${l}[data-swiper-slide-index="${r}"]`)[0]), Ce(() => {
      t.slideTo(n);
    })) : t.slideTo(n);
  } else t.slideTo(n);
}
var _t = { slideTo: Ct, slideToLoop: It, slideNext: Ot, slidePrev: Lt, slideReset: zt, slideToClosest: Bt, slideToClickedSlide: At };
function Gt(t, e) {
  const i = this, { params: s, slidesEl: n } = i;
  if (!s.loop || i.virtual && i.params.virtual.enabled) return;
  const r = () => {
    j(n, `.${s.slideClass}, swiper-slide`).forEach((p, m) => {
      p.setAttribute("data-swiper-slide-index", m);
    });
  }, l = () => {
    const c = j(n, `.${s.slideBlankClass}`);
    c.forEach((p) => {
      p.remove();
    }), c.length > 0 && (i.recalcSlides(), i.updateSlides());
  }, a = i.grid && s.grid && s.grid.rows > 1;
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || a) && l();
  const o = s.slidesPerGroup * (a ? s.grid.rows : 1), d = i.slides.length % o !== 0, u = a && i.slides.length % s.grid.rows !== 0, f = (c) => {
    for (let p = 0; p < c; p += 1) {
      const m = i.isElement ? oe("swiper-slide", [s.slideBlankClass]) : oe("div", [s.slideClass, s.slideBlankClass]);
      i.slidesEl.append(m);
    }
  };
  if (d) {
    if (s.loopAddBlankSlides) {
      const c = o - i.slides.length % o;
      f(c), i.recalcSlides(), i.updateSlides();
    } else J("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    r();
  } else if (u) {
    if (s.loopAddBlankSlides) {
      const c = s.grid.rows - i.slides.length % s.grid.rows;
      f(c), i.recalcSlides(), i.updateSlides();
    } else J("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    r();
  } else r();
  i.loopFix({ slideRealIndex: t, direction: s.centeredSlides ? void 0 : "next", initial: e });
}
function Dt(t) {
  let { slideRealIndex: e, slideTo: i = true, direction: s, setTranslate: n, activeSlideIndex: r, initial: l, byController: a, byMousewheel: o } = t === void 0 ? {} : t;
  const d = this;
  if (!d.params.loop) return;
  d.emit("beforeLoopFix");
  const { slides: u, allowSlidePrev: f, allowSlideNext: c, slidesEl: p, params: m } = d, { centeredSlides: S, initialSlide: P } = m;
  if (d.allowSlidePrev = true, d.allowSlideNext = true, d.virtual && m.virtual.enabled) {
    i && (!m.centeredSlides && d.snapIndex === 0 ? d.slideTo(d.virtual.slides.length, 0, false, true) : m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, false, true) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, false, true)), d.allowSlidePrev = f, d.allowSlideNext = c, d.emit("loopFix");
    return;
  }
  let g = m.slidesPerView;
  g === "auto" ? g = d.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(m.slidesPerView, 10)), S && g % 2 === 0 && (g = g + 1));
  const y = m.slidesPerGroupAuto ? g : m.slidesPerGroup;
  let w = S ? Math.max(y, Math.ceil(g / 2)) : y;
  w % y !== 0 && (w += y - w % y), w += m.loopAdditionalSlides, d.loopedSlides = w;
  const E = d.grid && m.grid && m.grid.rows > 1;
  u.length < g + w || d.params.effect === "cards" && u.length < g + w * 2 ? J("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : E && m.grid.fill === "row" && J("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const T = [], I = [], C = E ? Math.ceil(u.length / m.grid.rows) : u.length, b = l && C - P < g && !S;
  let h = b ? P : d.activeIndex;
  typeof r > "u" ? r = d.getSlideIndex(u.find((L) => L.classList.contains(m.slideActiveClass))) : h = r;
  const v = s === "next" || !s, x = s === "prev" || !s;
  let O = 0, z = 0;
  const R = (E ? u[r].column : r) + (S && typeof n > "u" ? -g / 2 + 0.5 : 0);
  if (R < w) {
    O = Math.max(w - R, y);
    for (let L = 0; L < w - R; L += 1) {
      const A = L - Math.floor(L / C) * C;
      if (E) {
        const M = C - A - 1;
        for (let B = u.length - 1; B >= 0; B -= 1) u[B].column === M && T.push(B);
      } else T.push(C - A - 1);
    }
  } else if (R + g > C - w) {
    z = Math.max(R - (C - w * 2), y), b && (z = Math.max(z, g - C + P + 1));
    for (let L = 0; L < z; L += 1) {
      const A = L - Math.floor(L / C) * C;
      E ? u.forEach((M, B) => {
        M.column === A && I.push(B);
      }) : I.push(A);
    }
  }
  if (d.__preventObserver__ = true, requestAnimationFrame(() => {
    d.__preventObserver__ = false;
  }), d.params.effect === "cards" && u.length < g + w * 2 && (I.includes(r) && I.splice(I.indexOf(r), 1), T.includes(r) && T.splice(T.indexOf(r), 1)), x && T.forEach((L) => {
    u[L].swiperLoopMoveDOM = true, p.prepend(u[L]), u[L].swiperLoopMoveDOM = false;
  }), v && I.forEach((L) => {
    u[L].swiperLoopMoveDOM = true, p.append(u[L]), u[L].swiperLoopMoveDOM = false;
  }), d.recalcSlides(), m.slidesPerView === "auto" ? d.updateSlides() : E && (T.length > 0 && x || I.length > 0 && v) && d.slides.forEach((L, A) => {
    d.grid.updateSlide(A, L, d.slides);
  }), m.watchSlidesProgress && d.updateSlidesOffset(), i) {
    if (T.length > 0 && x) {
      if (typeof e > "u") {
        const L = d.slidesGrid[h], M = d.slidesGrid[h + O] - L;
        o ? d.setTranslate(d.translate - M) : (d.slideTo(h + Math.ceil(O), 0, false, true), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - M, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - M));
      } else if (n) {
        const L = E ? T.length / m.grid.rows : T.length;
        d.slideTo(d.activeIndex + L, 0, false, true), d.touchEventsData.currentTranslate = d.translate;
      }
    } else if (I.length > 0 && v) if (typeof e > "u") {
      const L = d.slidesGrid[h], M = d.slidesGrid[h - z] - L;
      o ? d.setTranslate(d.translate - M) : (d.slideTo(h - z, 0, false, true), n && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - M, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - M));
    } else {
      const L = E ? I.length / m.grid.rows : I.length;
      d.slideTo(d.activeIndex - L, 0, false, true);
    }
  }
  if (d.allowSlidePrev = f, d.allowSlideNext = c, d.controller && d.controller.control && !a) {
    const L = { slideRealIndex: e, direction: s, setTranslate: n, activeSlideIndex: r, byController: true };
    Array.isArray(d.controller.control) ? d.controller.control.forEach((A) => {
      !A.destroyed && A.params.loop && A.loopFix({ ...L, slideTo: A.params.slidesPerView === m.slidesPerView ? i : false });
    }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({ ...L, slideTo: d.controller.control.params.slidesPerView === m.slidesPerView ? i : false });
  }
  d.emit("loopFix");
}
function Vt() {
  const t = this, { params: e, slidesEl: i } = t;
  if (!e.loop || !i || t.virtual && t.params.virtual.enabled) return;
  t.recalcSlides();
  const s = [];
  t.slides.forEach((n) => {
    const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    s[r] = n;
  }), t.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), s.forEach((n) => {
    i.append(n);
  }), t.recalcSlides(), t.slideTo(t.realIndex, 0);
}
var Nt = { loopCreate: Gt, loopFix: Dt, loopDestroy: Vt };
function Ft(t) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = true), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = false;
  });
}
function Rt() {
  const t = this;
  t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = true), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = false;
  }));
}
var kt = { setGrabCursor: Ft, unsetGrabCursor: Rt };
function Ht(t, e) {
  e === void 0 && (e = this);
  function i(s) {
    if (!s || s === k() || s === G()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(t);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(e);
}
function we(t, e, i) {
  const s = G(), { params: n } = t, r = n.edgeSwipeDetection, l = n.edgeSwipeThreshold;
  return r && (i <= l || i >= s.innerWidth - l) ? r === "prevent" ? (e.preventDefault(), true) : false : true;
}
function jt(t) {
  const e = this, i = k();
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  const n = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
    n.pointerId = s.pointerId;
  } else s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    we(e, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: l, enabled: a } = e;
  if (!a || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let o = s.target;
  if (r.touchEventsTarget === "wrapper" && !Ke(o, e.wrapperEl) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved) return;
  const d = !!r.noSwipingClass && r.noSwipingClass !== "", u = s.composedPath ? s.composedPath() : s.path;
  d && s.target && s.target.shadowRoot && u && (o = u[0]);
  const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, c = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (c ? Ht(f, o) : o.closest(f))) {
    e.allowClick = true;
    return;
  }
  if (r.swipeHandler && !o.closest(r.swipeHandler)) return;
  l.currentX = s.pageX, l.currentY = s.pageY;
  const p = l.currentX, m = l.currentY;
  if (!we(e, s, p)) return;
  Object.assign(n, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), l.startX = p, l.startY = m, n.touchStartTime = Z(), e.allowClick = true, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = false);
  let S = true;
  o.matches(n.focusableElements) && (S = false, o.nodeName === "SELECT" && (n.isTouched = false)), i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== o && (s.pointerType === "mouse" || s.pointerType !== "mouse" && !o.matches(n.focusableElements)) && i.activeElement.blur();
  const P = S && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || P) && !o.isContentEditable && s.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
}
function $t(t) {
  const e = k(), i = this, s = i.touchEventsData, { params: n, touches: r, rtlTranslate: l, enabled: a } = i;
  if (!a || !n.simulateTouch && t.pointerType === "mouse") return;
  let o = t;
  if (o.originalEvent && (o = o.originalEvent), o.type === "pointermove" && (s.touchId !== null || o.pointerId !== s.pointerId)) return;
  let d;
  if (o.type === "touchmove") {
    if (d = [...o.changedTouches].find((T) => T.identifier === s.touchId), !d || d.identifier !== s.touchId) return;
  } else d = o;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
    return;
  }
  const u = d.pageX, f = d.pageY;
  if (o.preventedByNestedSwiper) {
    r.startX = u, r.startY = f;
    return;
  }
  if (!i.allowTouchMove) {
    o.target.matches(s.focusableElements) || (i.allowClick = false), s.isTouched && (Object.assign(r, { startX: u, startY: f, currentX: u, currentY: f }), s.touchStartTime = Z());
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) if (i.isVertical()) {
    if (f < r.startY && i.translate <= i.maxTranslate() || f > r.startY && i.translate >= i.minTranslate()) {
      s.isTouched = false, s.isMoved = false;
      return;
    }
  } else {
    if (l && (u > r.startX && -i.translate <= i.maxTranslate() || u < r.startX && -i.translate >= i.minTranslate())) return;
    if (!l && (u < r.startX && i.translate <= i.maxTranslate() || u > r.startX && i.translate >= i.minTranslate())) return;
  }
  if (e.activeElement && e.activeElement.matches(s.focusableElements) && e.activeElement !== o.target && o.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && o.target === e.activeElement && o.target.matches(s.focusableElements)) {
    s.isMoved = true, i.allowClick = false;
    return;
  }
  s.allowTouchCallbacks && i.emit("touchMove", o), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = u, r.currentY = f;
  const c = r.currentX - r.startX, p = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(c ** 2 + p ** 2) < i.params.threshold) return;
  if (typeof s.isScrolling > "u") {
    let T;
    i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = false : c * c + p * p >= 25 && (T = Math.atan2(Math.abs(p), Math.abs(c)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? T > n.touchAngle : 90 - T > n.touchAngle);
  }
  if (s.isScrolling && i.emit("touchMoveOpposite", o), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = true), s.isScrolling || o.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
    s.isTouched = false;
    return;
  }
  if (!s.startMoving) return;
  i.allowClick = false, !n.cssMode && o.cancelable && o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation();
  let m = i.isHorizontal() ? c : p, S = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1), S = Math.abs(S) * (l ? 1 : -1)), r.diff = m, m *= n.touchRatio, l && (m = -m, S = -S);
  const P = i.touchesDirection;
  i.swipeDirection = m > 0 ? "prev" : "next", i.touchesDirection = S > 0 ? "prev" : "next";
  const g = i.params.loop && !n.cssMode, y = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
  if (!s.isMoved) {
    if (g && y && i.loopFix({ direction: i.swipeDirection }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
      const T = new window.CustomEvent("transitionend", { bubbles: true, cancelable: true, detail: { bySwiperTouchMove: true } });
      i.wrapperEl.dispatchEvent(T);
    }
    s.allowMomentumBounce = false, n.grabCursor && (i.allowSlideNext === true || i.allowSlidePrev === true) && i.setGrabCursor(true), i.emit("sliderFirstMove", o);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), n._loopSwapReset !== false && s.isMoved && s.allowThresholdMove && P !== i.touchesDirection && g && y && Math.abs(m) >= 1) {
    Object.assign(r, { startX: u, startY: f, currentX: u, currentY: f, startTranslate: s.currentTranslate }), s.loopSwapReset = true, s.startTranslate = s.currentTranslate;
    return;
  }
  i.emit("sliderMove", o), s.isMoved = true, s.currentTranslate = m + s.startTranslate;
  let w = true, E = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (E = 0), m > 0 ? (g && y && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] - (n.slidesPerView !== "auto" && i.slides.length - n.slidesPerView >= 2 ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween : 0) - i.params.spaceBetween : i.minTranslate()) && i.loopFix({ direction: "prev", setTranslate: true, activeSlideIndex: 0 }), s.currentTranslate > i.minTranslate() && (w = false, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** E))) : m < 0 && (g && y && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween + (n.slidesPerView !== "auto" && i.slides.length - n.slidesPerView >= 2 ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] + i.params.spaceBetween : 0) : i.maxTranslate()) && i.loopFix({ direction: "next", setTranslate: true, activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10))) }), s.currentTranslate < i.maxTranslate() && (w = false, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** E))), w && (o.preventedByNestedSwiper = true), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0) if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
    if (!s.allowThresholdMove) {
      s.allowThresholdMove = true, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
      return;
    }
  } else {
    s.currentTranslate = s.startTranslate;
    return;
  }
  !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate));
}
function Wt(t) {
  const e = this, i = e.touchEventsData;
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  let n;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (n = [...s.changedTouches].find((T) => T.identifier === i.touchId), !n || n.identifier !== i.touchId) return;
  } else {
    if (i.touchId !== null || s.pointerId !== i.pointerId) return;
    n = s;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))) return;
  i.pointerId = null, i.touchId = null;
  const { params: l, touches: a, rtlTranslate: o, slidesGrid: d, enabled: u } = e;
  if (!u || !l.simulateTouch && s.pointerType === "mouse") return;
  if (i.allowTouchCallbacks && e.emit("touchEnd", s), i.allowTouchCallbacks = false, !i.isTouched) {
    i.isMoved && l.grabCursor && e.setGrabCursor(false), i.isMoved = false, i.startMoving = false;
    return;
  }
  l.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === true || e.allowSlidePrev === true) && e.setGrabCursor(false);
  const f = Z(), c = f - i.touchStartTime;
  if (e.allowClick) {
    const T = s.path || s.composedPath && s.composedPath();
    e.updateClickedSlide(T && T[0] || s.target, T), e.emit("tap click", s), c < 300 && f - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
  }
  if (i.lastClickTime = Z(), Ce(() => {
    e.destroyed || (e.allowClick = true);
  }), !i.isTouched || !i.isMoved || !e.swipeDirection || a.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
    i.isTouched = false, i.isMoved = false, i.startMoving = false;
    return;
  }
  i.isTouched = false, i.isMoved = false, i.startMoving = false;
  let p;
  if (l.followFinger ? p = o ? e.translate : -e.translate : p = -i.currentTranslate, l.cssMode) return;
  if (l.freeMode && l.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  const m = p >= -e.maxTranslate() && !e.params.loop;
  let S = 0, P = e.slidesSizesGrid[0];
  for (let T = 0; T < d.length; T += T < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
    const I = T < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof d[T + I] < "u" ? (m || p >= d[T] && p < d[T + I]) && (S = T, P = d[T + I] - d[T]) : (m || p >= d[T]) && (S = T, P = d[d.length - 1] - d[d.length - 2]);
  }
  let g = null, y = null;
  l.rewind && (e.isBeginning ? y = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
  const w = (p - d[S]) / P, E = S < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (c > l.longSwipesMs) {
    if (!l.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (w >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? g : S + E) : e.slideTo(S)), e.swipeDirection === "prev" && (w > 1 - l.longSwipesRatio ? e.slideTo(S + E) : y !== null && w < 0 && Math.abs(w) > l.longSwipesRatio ? e.slideTo(y) : e.slideTo(S));
  } else {
    if (!l.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(S + E) : e.slideTo(S) : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : S + E), e.swipeDirection === "prev" && e.slideTo(y !== null ? y : S));
  }
}
function Se() {
  const t = this, { params: e, el: i } = t;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = t, l = t.virtual && t.params.virtual.enabled;
  t.allowSlideNext = true, t.allowSlidePrev = true, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
  const a = l && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !a ? t.slideTo(t.slides.length - 1, 0, false, true) : t.params.loop && !l ? t.slideToLoop(t.realIndex, 0, false, true) : t.slideTo(t.activeIndex, 0, false, true), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
    t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
  }, 500)), t.allowSlidePrev = n, t.allowSlideNext = s, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function qt(t) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
}
function Yt() {
  const t = this, { wrapperEl: e, rtlTranslate: i, enabled: s } = t;
  if (!s) return;
  t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, false);
}
function Xt(t) {
  const e = this;
  Q(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function Ut() {
  const t = this;
  t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = true, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
}
const Ae = (t, e) => {
  const i = k(), { params: s, el: n, wrapperEl: r, device: l } = t, a = !!s.nested, o = e === "on" ? "addEventListener" : "removeEventListener", d = e;
  !n || typeof n == "string" || (i[o]("touchstart", t.onDocumentTouchStart, { passive: false, capture: a }), n[o]("touchstart", t.onTouchStart, { passive: false }), n[o]("pointerdown", t.onTouchStart, { passive: false }), i[o]("touchmove", t.onTouchMove, { passive: false, capture: a }), i[o]("pointermove", t.onTouchMove, { passive: false, capture: a }), i[o]("touchend", t.onTouchEnd, { passive: true }), i[o]("pointerup", t.onTouchEnd, { passive: true }), i[o]("pointercancel", t.onTouchEnd, { passive: true }), i[o]("touchcancel", t.onTouchEnd, { passive: true }), i[o]("pointerout", t.onTouchEnd, { passive: true }), i[o]("pointerleave", t.onTouchEnd, { passive: true }), i[o]("contextmenu", t.onTouchEnd, { passive: true }), (s.preventClicks || s.preventClicksPropagation) && n[o]("click", t.onClick, true), s.cssMode && r[o]("scroll", t.onScroll), s.updateOnWindowResize ? t[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Se, true) : t[d]("observerUpdate", Se, true), n[o]("load", t.onLoad, { capture: true }));
};
function Kt() {
  const t = this, { params: e } = t;
  t.onTouchStart = jt.bind(t), t.onTouchMove = $t.bind(t), t.onTouchEnd = Wt.bind(t), t.onDocumentTouchStart = Ut.bind(t), e.cssMode && (t.onScroll = Yt.bind(t)), t.onClick = qt.bind(t), t.onLoad = Xt.bind(t), Ae(t, "on");
}
function Qt() {
  Ae(this, "off");
}
var Zt = { attachEvents: Kt, detachEvents: Qt };
const ye = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Jt() {
  const t = this, { realIndex: e, initialized: i, params: s, el: n } = t, r = s.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const l = k(), a = s.breakpointsBase === "window" || !s.breakpointsBase ? s.breakpointsBase : "container", o = ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase ? t.el : l.querySelector(s.breakpointsBase), d = t.getBreakpoint(r, a, o);
  if (!d || t.currentBreakpoint === d) return;
  const f = (d in r ? r[d] : void 0) || t.originalParams, c = ye(t, s), p = ye(t, f), m = t.params.grabCursor, S = f.grabCursor, P = s.enabled;
  c && !p ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses()) : !c && p && (n.classList.add(`${s.containerModifierClass}grid`), (f.grid.fill && f.grid.fill === "column" || !f.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), t.emitContainerClasses()), m && !S ? t.unsetGrabCursor() : !m && S && t.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((I) => {
    if (typeof f[I] > "u") return;
    const C = s[I] && s[I].enabled, b = f[I] && f[I].enabled;
    C && !b && t[I].disable(), !C && b && t[I].enable();
  });
  const g = f.direction && f.direction !== s.direction, y = s.loop && (f.slidesPerView !== s.slidesPerView || g), w = s.loop;
  g && i && t.changeDirection(), V(t.params, f);
  const E = t.params.enabled, T = t.params.loop;
  Object.assign(t, { allowTouchMove: t.params.allowTouchMove, allowSlideNext: t.params.allowSlideNext, allowSlidePrev: t.params.allowSlidePrev }), P && !E ? t.disable() : !P && E && t.enable(), t.currentBreakpoint = d, t.emit("_beforeBreakpoint", f), i && (y ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !w && T ? (t.loopCreate(e), t.updateSlides()) : w && !T && t.loopDestroy()), t.emit("breakpoint", f);
}
function ei(t, e, i) {
  if (e === void 0 && (e = "window"), !t || e === "container" && !i) return;
  let s = false;
  const n = G(), r = e === "window" ? n.innerHeight : i.clientHeight, l = Object.keys(t).map((a) => {
    if (typeof a == "string" && a.indexOf("@") === 0) {
      const o = parseFloat(a.substr(1));
      return { value: r * o, point: a };
    }
    return { value: a, point: a };
  });
  l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < l.length; a += 1) {
    const { point: o, value: d } = l[a];
    e === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = o) : d <= i.clientWidth && (s = o);
  }
  return s || "max";
}
var ti = { setBreakpoint: Jt, getBreakpoint: ei };
function ii(t, e) {
  const i = [];
  return t.forEach((s) => {
    typeof s == "object" ? Object.keys(s).forEach((n) => {
      s[n] && i.push(e + n);
    }) : typeof s == "string" && i.push(e + s);
  }), i;
}
function si() {
  const t = this, { classNames: e, params: i, rtl: s, el: n, device: r } = t, l = ii(["initialized", i.direction, { "free-mode": t.params.freeMode && i.freeMode.enabled }, { autoheight: i.autoHeight }, { rtl: s }, { grid: i.grid && i.grid.rows > 1 }, { "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column" }, { android: r.android }, { ios: r.ios }, { "css-mode": i.cssMode }, { centered: i.cssMode && i.centeredSlides }, { "watch-progress": i.watchSlidesProgress }], i.containerModifierClass);
  e.push(...l), n.classList.add(...e), t.emitContainerClasses();
}
function ni() {
  const t = this, { el: e, classNames: i } = t;
  !e || typeof e == "string" || (e.classList.remove(...i), t.emitContainerClasses());
}
var ri = { addClasses: si, removeClasses: ni };
function ai() {
  const t = this, { isLocked: e, params: i } = t, { slidesOffsetBefore: s } = i;
  if (s) {
    const n = t.slides.length - 1, r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
    t.isLocked = t.size > r;
  } else t.isLocked = t.snapGrid.length === 1;
  i.allowSlideNext === true && (t.allowSlideNext = !t.isLocked), i.allowSlidePrev === true && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = false), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var li = { checkOverflow: ai }, ue = { init: true, direction: "horizontal", oneWayMovement: false, swiperElementNodeName: "SWIPER-CONTAINER", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, eventsPrefix: "swiper", enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 5, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, loop: false, loopAddBlankSlides: true, loopAdditionalSlides: 0, loopPreventsSliding: true, rewind: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-blank", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideFullyVisibleClass: "swiper-slide-fully-visible", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", lazyPreloaderClass: "swiper-lazy-preloader", lazyPreloadPrevNext: 0, runCallbacksOnInit: true, _emitClasses: false };
function oi(t, e) {
  return function(s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0], r = s[n];
    if (typeof r != "object" || r === null) {
      V(e, s);
      return;
    }
    if (t[n] === true && (t[n] = { enabled: true }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = true), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = true), !(n in t && "enabled" in r)) {
      V(e, s);
      return;
    }
    typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = true), t[n] || (t[n] = { enabled: false }), V(e, s);
  };
}
const re = { eventsEmitter: rt, update: gt, translate: Tt, transition: Mt, slide: _t, loop: Nt, grabCursor: kt, events: Zt, breakpoints: ti, checkOverflow: li, classes: ri }, ae = {};
let ce = class H {
  constructor() {
    let e, i;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++) n[r] = arguments[r];
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? i = n[0] : [e, i] = n, i || (i = {}), i = V({}, i), e && !i.el && (i.el = e);
    const l = k();
    if (i.el && typeof i.el == "string" && l.querySelectorAll(i.el).length > 1) {
      const u = [];
      return l.querySelectorAll(i.el).forEach((f) => {
        const c = V({}, i, { el: f });
        u.push(new H(c));
      }), u;
    }
    const a = this;
    a.__swiper__ = true, a.support = Oe(), a.device = Le({ userAgent: i.userAgent }), a.browser = ze(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], i.modules && Array.isArray(i.modules) && a.modules.push(...i.modules);
    const o = {};
    a.modules.forEach((u) => {
      u({ params: i, swiper: a, extendParams: oi(i, o), on: a.on.bind(a), once: a.once.bind(a), off: a.off.bind(a), emit: a.emit.bind(a) });
    });
    const d = V({}, ue, o);
    return a.params = V({}, d, ae, i), a.originalParams = V({}, a.params), a.passedParams = V({}, i), a.params && a.params.on && Object.keys(a.params.on).forEach((u) => {
      a.on(u, a.params.on[u]);
    }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, { enabled: a.params.enabled, el: e, classNames: [], slides: [], slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal() {
      return a.params.direction === "horizontal";
    }, isVertical() {
      return a.params.direction === "vertical";
    }, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, cssOverflowAdjustment() {
      return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
    }, allowSlideNext: a.params.allowSlideNext, allowSlidePrev: a.params.allowSlidePrev, touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: a.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, pointerId: null, touchId: null }, allowClick: true, allowTouchMove: a.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), a.emit("_swiper"), a.params.init && a.init(), a;
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: i, params: s } = this, n = j(i, `.${s.slideClass}, swiper-slide`), r = me(n[0]);
    return me(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.find((i) => i.getAttribute("data-swiper-slide-index") * 1 === e));
  }
  getSlideIndexWhenGrid(e) {
    return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? e = Math.floor(e / this.params.grid.rows) : this.params.grid.fill === "row" && (e = e % Math.ceil(this.slides.length / this.params.grid.rows))), e;
  }
  recalcSlides() {
    const e = this, { slidesEl: i, params: s } = e;
    e.slides = j(i, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = true, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = false, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, i) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(), l = (s.maxTranslate() - n) * e + n;
    s.translateTo(l, typeof i > "u" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.forEach((s) => {
      const n = e.getSlideClasses(s);
      i.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
    }), e.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = "current"), i === void 0 && (i = false);
    const s = this, { params: n, slides: r, slidesGrid: l, slidesSizesGrid: a, size: o, activeIndex: d } = s;
    let u = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let f = r[d] ? Math.ceil(r[d].swiperSlideSize) : 0, c;
      for (let p = d + 1; p < r.length; p += 1) r[p] && !c && (f += Math.ceil(r[p].swiperSlideSize), u += 1, f > o && (c = true));
      for (let p = d - 1; p >= 0; p -= 1) r[p] && !c && (f += r[p].swiperSlideSize, u += 1, f > o && (c = true));
    } else if (e === "current") for (let f = d + 1; f < r.length; f += 1) (i ? l[f] + a[f] - l[d] < o : l[f] - l[d] < o) && (u += 1);
    else for (let f = d - 1; f >= 0; f -= 1) l[d] - l[f] < o && (u += 1);
    return u;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: i, params: s } = e;
    s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
      l.complete && Q(e, l);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function n() {
      const l = e.rtlTranslate ? e.translate * -1 : e.translate, a = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode) n(), s.autoHeight && e.updateAutoHeight();
    else {
      if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(l.length - 1, 0, false, true);
      } else r = e.slideTo(e.activeIndex, 0, false, true);
      r || n();
    }
    s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, i) {
    i === void 0 && (i = true);
    const s = this, n = s.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((r) => {
      e === "vertical" ? r.style.width = "" : r.style.height = "";
    }), s.emit("changeDirection"), i && s.update()), s;
  }
  changeLanguageDirection(e) {
    const i = this;
    i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), i.el.dir = "ltr"), i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted) return true;
    let s = e || i.params.el;
    if (typeof s == "string" && (s = document.querySelector(s)), !s) return false;
    s.swiper = i, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = true);
    const n = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : j(s, n())[0];
    return !l && i.params.createElements && (l = oe("div", i.params.wrapperClass), s.append(l), j(s, `.${i.params.slideClass}`).forEach((a) => {
      l.append(a);
    })), Object.assign(i, { el: s, wrapperEl: l, slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l, hostEl: i.isElement ? s.parentNode.host : s, mounted: true, rtl: s.dir.toLowerCase() === "rtl" || $(s, "direction") === "rtl", rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || $(s, "direction") === "rtl"), wrongRTL: $(l, "display") === "-webkit-box" }), true;
  }
  init(e) {
    const i = this;
    if (i.initialized || i.mount(e) === false) return i;
    i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, false, true) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, false, true), i.params.loop && i.loopCreate(void 0, true), i.attachEvents();
    const n = [...i.el.querySelectorAll('[loading="lazy"]')];
    return i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((r) => {
      r.complete ? Q(i, r) : r.addEventListener("load", (l) => {
        Q(i, l.target);
      });
    }), de(i), i.initialized = true, de(i), i.emit("init"), i.emit("afterInit"), i;
  }
  destroy(e, i) {
    e === void 0 && (e = true), i === void 0 && (i = true);
    const s = this, { params: n, el: r, wrapperEl: l, slides: a } = s;
    return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = false, s.detachEvents(), n.loop && s.loopDestroy(), i && (s.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), l && l.removeAttribute("style"), a && a.length && a.forEach((o) => {
      o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), o.removeAttribute("style"), o.removeAttribute("data-swiper-slide-index");
    })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((o) => {
      s.off(o);
    }), e !== false && (s.el && typeof s.el != "string" && (s.el.swiper = null), We(s)), s.destroyed = true), null;
  }
  static extendDefaults(e) {
    V(ae, e);
  }
  static get extendedDefaults() {
    return ae;
  }
  static get defaults() {
    return ue;
  }
  static installModule(e) {
    H.prototype.__modules__ || (H.prototype.__modules__ = []);
    const i = H.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((i) => H.installModule(i)), H) : (H.installModule(e), H);
  }
};
Object.keys(re).forEach((t) => {
  Object.keys(re[t]).forEach((e) => {
    ce.prototype[e] = re[t][e];
  });
});
ce.use([st, nt]);
const _e = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function q(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object" && !t.__swiper__;
}
function Y(t, e) {
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((s) => i.indexOf(s) < 0).forEach((s) => {
    typeof t[s] > "u" ? t[s] = e[s] : q(e[s]) && q(t[s]) && Object.keys(e[s]).length > 0 ? e[s].__swiper__ ? t[s] = e[s] : Y(t[s], e[s]) : t[s] = e[s];
  });
}
function Ge(t) {
  return t === void 0 && (t = {}), t.navigation && typeof t.navigation.nextEl > "u" && typeof t.navigation.prevEl > "u";
}
function De(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function Ve(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function Ne(t) {
  t === void 0 && (t = "");
  const e = t.split(" ").map((s) => s.trim()).filter((s) => !!s), i = [];
  return e.forEach((s) => {
    i.indexOf(s) < 0 && i.push(s);
  }), i.join(" ");
}
function di(t) {
  return t === void 0 && (t = ""), t ? t.includes("swiper-wrapper") ? t : `swiper-wrapper ${t}` : "swiper-wrapper";
}
function ui(t) {
  let { swiper: e, slides: i, passedParams: s, changedParams: n, nextEl: r, prevEl: l, scrollbarEl: a, paginationEl: o } = t;
  const d = n.filter((h) => h !== "children" && h !== "direction" && h !== "wrapperClass"), { params: u, pagination: f, navigation: c, scrollbar: p, virtual: m, thumbs: S } = e;
  let P, g, y, w, E, T, I, C;
  n.includes("thumbs") && s.thumbs && s.thumbs.swiper && !s.thumbs.swiper.destroyed && u.thumbs && (!u.thumbs.swiper || u.thumbs.swiper.destroyed) && (P = true), n.includes("controller") && s.controller && s.controller.control && u.controller && !u.controller.control && (g = true), n.includes("pagination") && s.pagination && (s.pagination.el || o) && (u.pagination || u.pagination === false) && f && !f.el && (y = true), n.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || a) && (u.scrollbar || u.scrollbar === false) && p && !p.el && (w = true), n.includes("navigation") && s.navigation && (s.navigation.prevEl || l) && (s.navigation.nextEl || r) && (u.navigation || u.navigation === false) && c && !c.prevEl && !c.nextEl && (E = true);
  const b = (h) => {
    e[h] && (e[h].destroy(), h === "navigation" ? (e.isElement && (e[h].prevEl.remove(), e[h].nextEl.remove()), u[h].prevEl = void 0, u[h].nextEl = void 0, e[h].prevEl = void 0, e[h].nextEl = void 0) : (e.isElement && e[h].el.remove(), u[h].el = void 0, e[h].el = void 0));
  };
  n.includes("loop") && e.isElement && (u.loop && !s.loop ? T = true : !u.loop && s.loop ? I = true : C = true), d.forEach((h) => {
    if (q(u[h]) && q(s[h])) Object.assign(u[h], s[h]), (h === "navigation" || h === "pagination" || h === "scrollbar") && "enabled" in s[h] && !s[h].enabled && b(h);
    else {
      const v = s[h];
      (v === true || v === false) && (h === "navigation" || h === "pagination" || h === "scrollbar") ? v === false && b(h) : u[h] = s[h];
    }
  }), d.includes("controller") && !g && e.controller && e.controller.control && u.controller && u.controller.control && (e.controller.control = u.controller.control), n.includes("children") && i && m && u.virtual.enabled ? (m.slides = i, m.update(true)) : n.includes("virtual") && m && u.virtual.enabled && (i && (m.slides = i), m.update(true)), n.includes("children") && i && u.loop && (C = true), P && S.init() && S.update(true), g && (e.controller.control = u.controller.control), y && (e.isElement && (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), e.el.appendChild(o)), o && (u.pagination.el = o), f.init(), f.render(), f.update()), w && (e.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), e.el.appendChild(a)), a && (u.scrollbar.el = a), p.init(), p.updateSize(), p.setTranslate()), E && (e.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"), r.classList.add("swiper-button-next"), ge(r, e.hostEl.constructor.nextButtonSvg), r.part.add("button-next"), e.el.appendChild(r)), (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-button-prev"), ge(l, e.hostEl.constructor.prevButtonSvg), l.part.add("button-prev"), e.el.appendChild(l))), r && (u.navigation.nextEl = r), l && (u.navigation.prevEl = l), c.init(), c.update()), n.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), n.includes("direction") && e.changeDirection(s.direction, false), (T || C) && e.loopDestroy(), (I || C) && e.loopCreate(), e.update();
}
function be(t, e) {
  t === void 0 && (t = {});
  const i = { on: {} }, s = {}, n = {};
  Y(i, ue), i._emitClasses = true, i.init = false;
  const r = {}, l = _e.map((o) => o.replace(/_/, "")), a = Object.assign({}, t);
  return Object.keys(a).forEach((o) => {
    typeof t[o] > "u" || (l.indexOf(o) >= 0 ? q(t[o]) ? (i[o] = {}, n[o] = {}, Y(i[o], t[o]), Y(n[o], t[o])) : (i[o] = t[o], n[o] = t[o]) : o.search(/on[A-Z]/) === 0 && typeof t[o] == "function" ? i.on[`${o[2].toLowerCase()}${o.substr(3)}`] = t[o] : r[o] = t[o]);
  }), ["navigation", "pagination", "scrollbar"].forEach((o) => {
    i[o] === true && (i[o] = {}), i[o] === false && delete i[o];
  }), { params: i, passedParams: n, rest: r, events: s };
}
function fi(t, e) {
  let { el: i, nextEl: s, prevEl: n, paginationEl: r, scrollbarEl: l, swiper: a } = t;
  Ge(e) && s && n && (a.params.navigation.nextEl = s, a.originalParams.navigation.nextEl = s, a.params.navigation.prevEl = n, a.originalParams.navigation.prevEl = n), De(e) && r && (a.params.pagination.el = r, a.originalParams.pagination.el = r), Ve(e) && l && (a.params.scrollbar.el = l, a.originalParams.scrollbar.el = l), a.init(i);
}
function ci(t, e, i, s, n) {
  const r = [];
  if (!e) return r;
  const l = (o) => {
    r.indexOf(o) < 0 && r.push(o);
  };
  if (i && s) {
    const o = s.map(n), d = i.map(n);
    o.join("") !== d.join("") && l("children"), s.length !== i.length && l("children");
  }
  return _e.filter((o) => o[0] === "_").map((o) => o.replace(/_/, "")).forEach((o) => {
    if (o in t && o in e) if (q(t[o]) && q(e[o])) {
      const d = Object.keys(t[o]), u = Object.keys(e[o]);
      d.length !== u.length ? l(o) : (d.forEach((f) => {
        t[o][f] !== e[o][f] && l(o);
      }), u.forEach((f) => {
        t[o][f] !== e[o][f] && l(o);
      }));
    } else t[o] !== e[o] && l(o);
  }), r;
}
const pi = (t) => {
  !t || t.destroyed || !t.params.virtual || t.params.virtual && !t.params.virtual.enabled || (t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.emit("_virtualUpdated"), t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate());
};
function le(t, e, i) {
  t === void 0 && (t = {});
  const s = [], n = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] }, r = (l, a) => {
    Array.isArray(l) && l.forEach((o) => {
      const d = typeof o.type == "symbol";
      a === "default" && (a = "container-end"), d && o.children ? r(o.children, a) : o.type && (o.type.name === "SwiperSlide" || o.type.name === "AsyncComponentWrapper") || o.componentOptions && o.componentOptions.tag === "SwiperSlide" ? s.push(o) : n[a] && n[a].push(o);
    });
  };
  return Object.keys(t).forEach((l) => {
    if (typeof t[l] != "function") return;
    const a = t[l]();
    r(a, l);
  }), i.value = e.value, e.value = s, { slides: s, slots: n };
}
function mi(t, e, i) {
  if (!i) return null;
  const s = (u) => {
    let f = u;
    return u < 0 ? f = e.length + u : f >= e.length && (f = f - e.length), f;
  }, n = t.value.isHorizontal() ? { [t.value.rtlTranslate ? "right" : "left"]: `${i.offset}px` } : { top: `${i.offset}px` }, { from: r, to: l } = i, a = t.value.params.loop ? -e.length : 0, o = t.value.params.loop ? e.length * 2 : e.length, d = [];
  for (let u = a; u < o; u += 1) u >= r && u <= l && d.length < e.length && d.push(e[s(u)]);
  return d.map((u) => {
    if (u.props || (u.props = {}), u.props.style || (u.props.style = {}), u.props.swiperRef = t, u.props.style = n, u.type) return N(u.type, { ...u.props }, u.children);
    if (u.componentOptions) return N(u.componentOptions.Ctor, { ...u.props }, u.componentOptions.children);
  });
}
const gi = { name: "Swiper", props: { tag: { type: String, default: "div" }, wrapperTag: { type: String, default: "div" }, modules: { type: Array, default: void 0 }, init: { type: Boolean, default: void 0 }, direction: { type: String, default: void 0 }, oneWayMovement: { type: Boolean, default: void 0 }, swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" }, touchEventsTarget: { type: String, default: void 0 }, initialSlide: { type: Number, default: void 0 }, speed: { type: Number, default: void 0 }, cssMode: { type: Boolean, default: void 0 }, updateOnWindowResize: { type: Boolean, default: void 0 }, resizeObserver: { type: Boolean, default: void 0 }, nested: { type: Boolean, default: void 0 }, focusableElements: { type: String, default: void 0 }, width: { type: Number, default: void 0 }, height: { type: Number, default: void 0 }, preventInteractionOnTransition: { type: Boolean, default: void 0 }, userAgent: { type: String, default: void 0 }, url: { type: String, default: void 0 }, edgeSwipeDetection: { type: [Boolean, String], default: void 0 }, edgeSwipeThreshold: { type: Number, default: void 0 }, autoHeight: { type: Boolean, default: void 0 }, setWrapperSize: { type: Boolean, default: void 0 }, virtualTranslate: { type: Boolean, default: void 0 }, effect: { type: String, default: void 0 }, breakpoints: { type: Object, default: void 0 }, breakpointsBase: { type: String, default: void 0 }, spaceBetween: { type: [Number, String], default: void 0 }, slidesPerView: { type: [Number, String], default: void 0 }, maxBackfaceHiddenSlides: { type: Number, default: void 0 }, slidesPerGroup: { type: Number, default: void 0 }, slidesPerGroupSkip: { type: Number, default: void 0 }, slidesPerGroupAuto: { type: Boolean, default: void 0 }, centeredSlides: { type: Boolean, default: void 0 }, centeredSlidesBounds: { type: Boolean, default: void 0 }, slidesOffsetBefore: { type: Number, default: void 0 }, slidesOffsetAfter: { type: Number, default: void 0 }, normalizeSlideIndex: { type: Boolean, default: void 0 }, centerInsufficientSlides: { type: Boolean, default: void 0 }, watchOverflow: { type: Boolean, default: void 0 }, roundLengths: { type: Boolean, default: void 0 }, touchRatio: { type: Number, default: void 0 }, touchAngle: { type: Number, default: void 0 }, simulateTouch: { type: Boolean, default: void 0 }, shortSwipes: { type: Boolean, default: void 0 }, longSwipes: { type: Boolean, default: void 0 }, longSwipesRatio: { type: Number, default: void 0 }, longSwipesMs: { type: Number, default: void 0 }, followFinger: { type: Boolean, default: void 0 }, allowTouchMove: { type: Boolean, default: void 0 }, threshold: { type: Number, default: void 0 }, touchMoveStopPropagation: { type: Boolean, default: void 0 }, touchStartPreventDefault: { type: Boolean, default: void 0 }, touchStartForcePreventDefault: { type: Boolean, default: void 0 }, touchReleaseOnEdges: { type: Boolean, default: void 0 }, uniqueNavElements: { type: Boolean, default: void 0 }, resistance: { type: Boolean, default: void 0 }, resistanceRatio: { type: Number, default: void 0 }, watchSlidesProgress: { type: Boolean, default: void 0 }, grabCursor: { type: Boolean, default: void 0 }, preventClicks: { type: Boolean, default: void 0 }, preventClicksPropagation: { type: Boolean, default: void 0 }, slideToClickedSlide: { type: Boolean, default: void 0 }, loop: { type: Boolean, default: void 0 }, loopedSlides: { type: Number, default: void 0 }, loopPreventsSliding: { type: Boolean, default: void 0 }, loopAdditionalSlides: { type: Number, default: void 0 }, loopAddBlankSlides: { type: Boolean, default: void 0 }, rewind: { type: Boolean, default: void 0 }, allowSlidePrev: { type: Boolean, default: void 0 }, allowSlideNext: { type: Boolean, default: void 0 }, swipeHandler: { type: Boolean, default: void 0 }, noSwiping: { type: Boolean, default: void 0 }, noSwipingClass: { type: String, default: void 0 }, noSwipingSelector: { type: String, default: void 0 }, passiveListeners: { type: Boolean, default: void 0 }, containerModifierClass: { type: String, default: void 0 }, slideClass: { type: String, default: void 0 }, slideActiveClass: { type: String, default: void 0 }, slideVisibleClass: { type: String, default: void 0 }, slideFullyVisibleClass: { type: String, default: void 0 }, slideBlankClass: { type: String, default: void 0 }, slideNextClass: { type: String, default: void 0 }, slidePrevClass: { type: String, default: void 0 }, wrapperClass: { type: String, default: void 0 }, lazyPreloaderClass: { type: String, default: void 0 }, lazyPreloadPrevNext: { type: Number, default: void 0 }, runCallbacksOnInit: { type: Boolean, default: void 0 }, observer: { type: Boolean, default: void 0 }, observeParents: { type: Boolean, default: void 0 }, observeSlideChildren: { type: Boolean, default: void 0 }, a11y: { type: [Boolean, Object], default: void 0 }, autoplay: { type: [Boolean, Object], default: void 0 }, controller: { type: Object, default: void 0 }, coverflowEffect: { type: Object, default: void 0 }, cubeEffect: { type: Object, default: void 0 }, fadeEffect: { type: Object, default: void 0 }, flipEffect: { type: Object, default: void 0 }, creativeEffect: { type: Object, default: void 0 }, cardsEffect: { type: Object, default: void 0 }, hashNavigation: { type: [Boolean, Object], default: void 0 }, history: { type: [Boolean, Object], default: void 0 }, keyboard: { type: [Boolean, Object], default: void 0 }, mousewheel: { type: [Boolean, Object], default: void 0 }, navigation: { type: [Boolean, Object], default: void 0 }, pagination: { type: [Boolean, Object], default: void 0 }, parallax: { type: [Boolean, Object], default: void 0 }, scrollbar: { type: [Boolean, Object], default: void 0 }, thumbs: { type: Object, default: void 0 }, virtual: { type: [Boolean, Object], default: void 0 }, zoom: { type: [Boolean, Object], default: void 0 }, grid: { type: [Object], default: void 0 }, freeMode: { type: [Boolean, Object], default: void 0 }, enabled: { type: Boolean, default: void 0 } }, emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "_virtualUpdated", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"], setup(t, e) {
  let { slots: i, emit: s } = e;
  const { tag: n, wrapperTag: r } = t, l = D("swiper"), a = D(null), o = D(false), d = D(false), u = D(null), f = D(null), c = D(null), p = { value: [] }, m = { value: [] }, S = D(null), P = D(null), g = D(null), y = D(null), { params: w, passedParams: E } = be(t);
  le(i, p, m), c.value = E, m.value = p.value;
  const T = () => {
    le(i, p, m), o.value = true;
  };
  w.onAny = function(b) {
    for (var h = arguments.length, v = new Array(h > 1 ? h - 1 : 0), x = 1; x < h; x++) v[x - 1] = arguments[x];
    s(b, ...v);
  }, Object.assign(w.on, { _beforeBreakpoint: T, _containerClasses(b, h) {
    l.value = h;
  } });
  const I = { ...w };
  if (delete I.wrapperClass, f.value = new ce(I), f.value.virtual && f.value.params.virtual.enabled) {
    f.value.virtual.slides = p.value;
    const b = { cache: false, slides: p.value, renderExternal: (h) => {
      a.value = h;
    }, renderExternalUpdate: false };
    Y(f.value.params.virtual, b), Y(f.value.originalParams.virtual, b);
  }
  xe(() => {
    !d.value && f.value && (f.value.emitSlidesClasses(), d.value = true);
    const { passedParams: b } = be(t), h = ci(b, c.value, p.value, m.value, (v) => v.props && v.props.key);
    c.value = b, (h.length || o.value) && f.value && !f.value.destroyed && ui({ swiper: f.value, slides: p.value, passedParams: b, changedParams: h, nextEl: S.value, prevEl: P.value, scrollbarEl: y.value, paginationEl: g.value }), o.value = false;
  }), Pe("swiper", f), ke(a, () => {
    He(() => {
      pi(f.value);
    });
  }), Te(() => {
    u.value && (fi({ el: u.value, nextEl: S.value, prevEl: P.value, paginationEl: g.value, scrollbarEl: y.value, swiper: f.value }, w), s("swiper", f.value));
  }), Ee(() => {
    f.value && !f.value.destroyed && f.value.destroy(true, false);
  });
  function C(b) {
    return w.virtual ? mi(f, b, a.value) : (b.forEach((h, v) => {
      h.props || (h.props = {}), h.props.swiperRef = f, h.props.swiperSlideIndex = v;
    }), b);
  }
  return () => {
    const { slides: b, slots: h } = le(i, p, m);
    return N(n, { ref: u, class: Ne(l.value) }, [h["container-start"], N(r, { class: di(w.wrapperClass) }, [h["wrapper-start"], C(b), h["wrapper-end"]]), Ge(t) && [N("div", { ref: P, class: "swiper-button-prev" }), N("div", { ref: S, class: "swiper-button-next" })], Ve(t) && N("div", { ref: y, class: "swiper-scrollbar" }), De(t) && N("div", { ref: g, class: "swiper-pagination" }), h["container-end"]]);
  };
} }, vi = { name: "SwiperSlide", props: { tag: { type: String, default: "div" }, swiperRef: { type: Object, required: false }, swiperSlideIndex: { type: Number, default: void 0, required: false }, zoom: { type: Boolean, default: void 0, required: false }, lazy: { type: Boolean, default: false, required: false }, virtualIndex: { type: [String, Number], default: void 0 } }, setup(t, e) {
  let { slots: i } = e, s = false;
  const { swiperRef: n } = t, r = D(null), l = D("swiper-slide"), a = D(false);
  function o(f, c, p) {
    c === r.value && (l.value = p);
  }
  Te(() => {
    !n || !n.value || (n.value.on("_slideClass", o), s = true);
  }), Fe(() => {
    s || !n || !n.value || (n.value.on("_slideClass", o), s = true);
  }), xe(() => {
    !r.value || !n || !n.value || (typeof t.swiperSlideIndex < "u" && (r.value.swiperSlideIndex = t.swiperSlideIndex), n.value.destroyed && l.value !== "swiper-slide" && (l.value = "swiper-slide"));
  }), Ee(() => {
    !n || !n.value || n.value.off("_slideClass", o);
  });
  const d = Re(() => ({ isActive: l.value.indexOf("swiper-slide-active") >= 0, isVisible: l.value.indexOf("swiper-slide-visible") >= 0, isPrev: l.value.indexOf("swiper-slide-prev") >= 0, isNext: l.value.indexOf("swiper-slide-next") >= 0 }));
  Pe("swiperSlide", d);
  const u = () => {
    a.value = true;
  };
  return () => N(t.tag, { class: Ne(`${l.value}`), ref: r, "data-swiper-slide-index": typeof t.virtualIndex > "u" && n && n.value && n.value.params.loop ? t.swiperSlideIndex : t.virtualIndex, onLoadCapture: u }, t.zoom ? N("div", { class: "swiper-zoom-container", "data-swiper-zoom": typeof t.zoom == "number" ? t.zoom : void 0 }, [i.default && i.default(d.value), t.lazy && !a.value && N("div", { class: "swiper-lazy-preloader" })]) : [i.default && i.default(d.value), t.lazy && !a.value && N("div", { class: "swiper-lazy-preloader" })]);
} };
function wi(t) {
  let { swiper: e, extendParams: i, on: s, emit: n, params: r } = t;
  e.autoplay = { running: false, paused: false, timeLeft: 0 }, i({ autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: false, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } });
  let l, a, o = r && r.autoplay ? r.autoplay.delay : 3e3, d = r && r.autoplay ? r.autoplay.delay : 3e3, u, f = (/* @__PURE__ */ new Date()).getTime(), c, p, m, S, P, g, y;
  function w(M) {
    !e || e.destroyed || !e.wrapperEl || M.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", w), !(y || M.detail && M.detail.bySwiperTouchMove) && v());
  }
  const E = () => {
    if (e.destroyed || !e.autoplay.running) return;
    e.autoplay.paused ? c = true : c && (d = u, c = false);
    const M = e.autoplay.paused ? u : f + d - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = M, n("autoplayTimeLeft", M, M / o), a = requestAnimationFrame(() => {
      E();
    });
  }, T = () => {
    let M;
    return e.virtual && e.params.virtual.enabled ? M = e.slides.find((_) => _.classList.contains("swiper-slide-active")) : M = e.slides[e.activeIndex], M ? parseInt(M.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, I = (M) => {
    if (e.destroyed || !e.autoplay.running) return;
    cancelAnimationFrame(a), E();
    let B = typeof M > "u" ? e.params.autoplay.delay : M;
    o = e.params.autoplay.delay, d = e.params.autoplay.delay;
    const _ = T();
    !Number.isNaN(_) && _ > 0 && typeof M > "u" && (B = _, o = _, d = _), u = B;
    const W = e.params.speed, X = () => {
      !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(W, true, true), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, W, true, true), n("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(W, true, true), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, W, true, true), n("autoplay")), e.params.cssMode && (f = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        I();
      })));
    };
    return B > 0 ? (clearTimeout(l), l = setTimeout(() => {
      X();
    }, B)) : requestAnimationFrame(() => {
      X();
    }), B;
  }, C = () => {
    f = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = true, I(), n("autoplayStart");
  }, b = () => {
    e.autoplay.running = false, clearTimeout(l), cancelAnimationFrame(a), n("autoplayStop");
  }, h = (M, B) => {
    if (e.destroyed || !e.autoplay.running) return;
    clearTimeout(l), M || (g = true);
    const _ = () => {
      n("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", w) : v();
    };
    if (e.autoplay.paused = true, B) {
      P && (u = e.params.autoplay.delay), P = false, _();
      return;
    }
    u = (u || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - f), !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0), _());
  }, v = () => {
    e.isEnd && u < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = (/* @__PURE__ */ new Date()).getTime(), g ? (g = false, I(u)) : I(), e.autoplay.paused = false, n("autoplayResume"));
  }, x = () => {
    if (e.destroyed || !e.autoplay.running) return;
    const M = k();
    M.visibilityState === "hidden" && (g = true, h(true)), M.visibilityState === "visible" && v();
  }, O = (M) => {
    M.pointerType === "mouse" && (g = true, y = true, !(e.animating || e.autoplay.paused) && h(true));
  }, z = (M) => {
    M.pointerType === "mouse" && (y = false, e.autoplay.paused && v());
  }, F = () => {
    e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", O), e.el.addEventListener("pointerleave", z));
  }, R = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", O), e.el.removeEventListener("pointerleave", z));
  }, L = () => {
    k().addEventListener("visibilitychange", x);
  }, A = () => {
    k().removeEventListener("visibilitychange", x);
  };
  s("init", () => {
    e.params.autoplay.enabled && (F(), L(), C());
  }), s("destroy", () => {
    R(), A(), e.autoplay.running && b();
  }), s("_freeModeStaticRelease", () => {
    (m || g) && v();
  }), s("_freeModeNoMomentumRelease", () => {
    e.params.autoplay.disableOnInteraction ? b() : h(true, true);
  }), s("beforeTransitionStart", (M, B, _) => {
    e.destroyed || !e.autoplay.running || (_ || !e.params.autoplay.disableOnInteraction ? h(true, true) : b());
  }), s("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        b();
        return;
      }
      p = true, m = false, g = false, S = setTimeout(() => {
        g = true, m = true, h(true);
      }, 200);
    }
  }), s("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !p)) {
      if (clearTimeout(S), clearTimeout(l), e.params.autoplay.disableOnInteraction) {
        m = false, p = false;
        return;
      }
      m && e.params.cssMode && v(), m = false, p = false;
    }
  }), s("slideChange", () => {
    e.destroyed || !e.autoplay.running || (P = true);
  }), Object.assign(e.autoplay, { start: C, stop: b, pause: h, resume: v });
}
export {
  wi as A,
  vi as S,
  gi as a,
  ce as b
};
