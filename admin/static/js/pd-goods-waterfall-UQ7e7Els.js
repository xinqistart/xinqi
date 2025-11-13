import { _ as j } from "./base-show-pnQX27ct.js";
import { s as F } from "./useCompShowHooks-DgYh5gcW.js";
import { S as V, a as U, b as G, A as X } from "./autoplay-SLPogy2y.js";
import { p as Y, t as q, _ as J, r as A, g as T, o as g, h as S, e as u, x as f, c as h, B as b, f as K, V as E, z as y, b as Q, au as Z, av as ee, F as L, v as H } from "./index-DAdfXJ2i.js";
var te = "wc-waterfall{position:relative;display:block;box-sizing:border-box!important;overflow:unset!important}wc-waterfall>*{position:absolute;box-sizing:border-box}";
const P = (e) => e.nodeType == 1, se = (e, a) => {
  const t = e();
  class n extends HTMLElement {
    constructor() {
      super(), this.$props = e();
      const c = {};
      for (const o in this.$props) c[o] = { get: () => this.$props[o], set: (s) => {
        this.$props[o] = a != null && a[o] ? a[o](s) : M(t, o, s), this.render();
      } };
      Object.defineProperties(this, c);
    }
    static get observedAttributes() {
      return Object.keys(t).filter((c) => W(t[c]));
    }
    attributeChangedCallback(c, o, s) {
      this.$props[c] = a != null && a[c] ? a[c](s) : M(t, c, s);
    }
  }
  return n;
}, M = (e, a, t) => {
  const n = e[a];
  return W(n) ? { number: (l) => Number(l), string: (l) => String(l), boolean: (l) => l != null && l != "false" }[typeof n](t) : void 0;
}, W = (e) => {
  const a = typeof e;
  return a == "number" || a == "string" || a == "boolean";
};
function oe(e) {
  let a = 0;
  for (let t = 0; t < e.length; t++) a = e[a] <= e[t] ? a : t;
  return a;
}
function ae(e, { getW: a, setW: t, getH: n, setH: l, getPad: c, setX: o, setY: s, getChildren: p }, { cols: r, gap: i }) {
  const [d, v] = Array.isArray(i) ? i : [i, i], [k, O, B, x] = c(e), D = p(e), I = D.length;
  if (I) {
    const N = (a(e) - d * (r - 1) - (x + O)) / r;
    Array.prototype.forEach.call(D, (m) => t(m, N));
    const _ = Array.prototype.map.call(D, (m) => n(m)), w = Array(r).fill(k);
    for (let m = 0; m < I; m++) {
      const z = D[m], $ = oe(w);
      s(z, w[$]), o(z, x + (N + d) * $), w[$] += _[m] + v;
    }
    l(e, Math.max(...w) - v + B);
  } else l(e, k + B);
}
const R = Symbol(), C = Symbol();
function re(e, a) {
  let t, n, l;
  function c() {
    t = new ResizeObserver((r) => r.some(({ target: i }) => i[C] != i.offsetWidth || i[R] != i.offsetHeight) && p()), t.observe(e), Array.prototype.forEach.call(e.children, (r) => t.observe(r)), n = new MutationObserver((r) => {
      r.forEach((i) => {
        i.addedNodes.forEach((d) => P(d) && t.observe(d)), i.removedNodes.forEach((d) => P(d) && t.unobserve(d));
      }), p();
    }), n.observe(e, { childList: true, attributes: false }), l = new MutationObserver(() => p()), l.observe(e, { childList: false, attributes: true }), p();
  }
  function o() {
    t.disconnect(), n.disconnect(), l.disconnect();
  }
  let s = false;
  function p() {
    s || (s = true, requestAnimationFrame(() => {
      a(), e[C] = e.offsetWidth, e[R] = e.offsetHeight, l.takeRecords(), s = false;
    }));
  }
  return { relayout: p, mount: c, unmount: o };
}
const ne = (e, a) => re(e, () => {
  ae(e, { getW: (t) => t.offsetWidth, setW: (t, n) => t.style.width = n + "px", getH: (t) => (t[C] = t.offsetWidth, t[R] = t.offsetHeight), setH: (t, n) => t.style.height = n + "px", getPad: (t) => {
    const n = getComputedStyle(t);
    return [parseInt(n.paddingTop), parseInt(n.paddingRight), parseInt(n.paddingBottom), parseInt(n.paddingLeft)];
  }, setX: (t, n) => t.style.left = n + "px", setY: (t, n) => t.style.top = n + "px", getChildren: (t) => t.children }, a);
});
document.head.appendChild(Object.assign(document.createElement("style"), { innerText: te }));
const ie = () => ({ cols: 2, gap: 4 }), le = { gap: (e) => typeof e == "string" ? e.includes(" ") ? e.split(" ").map(Number) : Number(e) : e };
class de extends se(ie, le) {
  constructor() {
    super();
  }
  connectedCallback() {
    this._layout = ne(this, this), this._layout.mount();
  }
  disconnectedCallback() {
    this._layout.unmount();
  }
  render() {
    var a;
    (a = this._layout) == null || a.relayout();
  }
}
customElements.get("wc-waterfall") || customElements.define("wc-waterfall", de);
const pe = F({ components: { Swiper: U, SwiperSlide: V }, setup: () => {
  G.use([X]);
  const e = Y();
  q(() => {
    const o = (s) => {
      var _a;
      const p = (_a = e.value) == null ? void 0 : _a.current[s];
      if (!p) return;
      const r = p.offsetHeight;
      p.style.gridRowEnd = `span ${Math.ceil(r)}`;
    };
    window.addEventListener("resize", () => {
      o(0);
    });
  });
  function a(o) {
    if (o) {
      let s = o;
      return o = t(n(o)), { backgroundColor: s, "background-image": `-webkit-linear-gradient(-4deg, rgba(${o}, 1) 30%, #fff 50%, rgba(${o}, 1) 70%)!important` };
    } else return {};
  }
  function t(o) {
    var s = o.toLowerCase();
    if (s && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(s)) {
      if (s.length === 4) {
        let i = "#";
        for (let d = 1; d < 4; d += 1) i += s.slice(d, d + 1).concat(s.slice(d, d + 1));
        s = i;
      }
      let r = [];
      for (let i = 1; i < 7; i += 2) r.push(parseInt("0x" + s.slice(i, i + 2)));
      return r.join(",");
    }
    return s;
  }
  function n(o) {
    const s = o.match(/(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
    if (s) {
      const p = parseInt(s[1], 10), r = parseInt(s[2], 10), i = parseInt(s[3], 10);
      let d = "#" + l(p) + l(r) + l(i);
      if (s[4]) {
        const v = Math.round(parseFloat(s[4]) * 255);
        d += l(v);
      }
      return d;
    }
    return o;
  }
  function l(o) {
    const s = o.toString(16);
    return s.length === 1 ? "0" + s : s;
  }
  function c(o) {
    let s = o.priceDown * (o.pointsDeductScale / 100);
    return s = Number(s).toFixed(2), Math.ceil(s / o.pointsDeductAmount) + "\u79EF\u5206+" + (o.priceDown - s) + "\u5143";
  }
  return { vipBgStyle: a, pointsDeductNumber: c };
} }), ce = { key: 0, class: "cu-bar justify-center", style: { "min-height": "40px" } }, ue = { class: "goods-container" }, ge = { gap: 10, cols: 2 }, fe = { key: 0 }, he = ["src"], me = { key: 0 }, be = { class: "img-box" }, ye = ["src"], ve = { key: 0, class: "flex align-center padding-lr-xs margin-top-xs" }, De = { key: 1, class: "margin-top-sm" };
function we(e, a, t, n, l, c) {
  const o = A("swiper-slide"), s = A("swiper"), p = j;
  return g(), T(p, { styles: e.setData.styles }, { default: S(() => [u("div", { class: "goods-waterfall-component", style: f({ ...e.setBgStyle(e.setData.background) }) }, [e.setData.showTitle != "0" ? (g(), h("div", ce, [u("div", { class: "action text-bold", style: f([{ color: `${e.setData.titleColor}` }, { "font-size": "13px" }]) }, [a[0] || (a[0] = u("div", { class: "cuIcon-move" }, null, -1)), u("div", { style: { margin: "0 5px" }, class: E(e.setData.titleIcon) }, null, 2), K(" " + y(e.setData.title) + " ", 1), a[1] || (a[1] = u("div", { class: "cuIcon-move" }, null, -1))], 4)])) : b("", true), u("div", ue, [u("wc-waterfall", ge, [e.setData.showSwiper === "1" ? (g(), h("div", { key: 0, class: "", style: f({ borderRadius: `${e.setData.goodsBgRadius}px` }) }, [e.setData.swiperList ? (g(), h("div", fe, [Q(s, Z(ee({ autoplay: { delay: e.setData.swiperInterval || 3e3 }, loop: e.setData.swiperList && e.setData.swiperList.length > 1 })), { default: S(() => [(g(true), h(L, null, H(e.setData.swiperList, (r, i) => (g(), T(o, { key: i }, { default: S(() => [u("img", { src: r.imageUrl ? r.imageUrl : e.noImage, class: "swiper-card-img", style: f({ borderRadius: `${e.setData.goodsBgRadius}px`, height: `${e.setData.swiperHeight}px` }) }, null, 12, he)]), _: 2 }, 1024))), 128))]), _: 1 }, 16)])) : b("", true)], 4)) : b("", true), (g(true), h(L, null, H(e.setData.goodsList, (r, i) => (g(), h("div", { key: i, class: "goods-box", style: f({ ...e.setBgStyle(e.setData.goodsBackground), borderRadius: `${e.setData.goodsBgRadius}px` }) }, [r ? (g(), h("div", me, [u("div", be, [u("img", { style: f({ borderRadius: `${e.setData.goodsImageRadius}px`, borderTopLeftRadius: `${e.setData.goodsBgRadius}px`, borderTopRightRadius: `${e.setData.goodsBgRadius}px` }), src: r.picUrls[0] ? r.picUrls[0] : e.noImage, mode: "aspectFill", class: "card-img" }, null, 12, ye)]), u("div", { class: "text-black padding-lr-xs margin-top-xs", style: f({ color: `${e.setData.goodsNameColor}`, fontSize: `${e.setData.goodsNameSize}px` }) }, y(r.name), 5), u("div", { class: "text-gray text-sm multi-line-omit padding-lr-xs", style: f({ color: `${e.setData.sellColor}` }) }, y(r.sellPoint), 5), e.setData.showTag != "0" ? (g(), h("div", ve, [u("div", { class: "cu-tag bg-red radius sm", style: f({ ...e.setBgStyle(e.setData.shippingBg), color: `${e.setData.shippingColor}`, borderRadius: `${e.setData.shippingRadius}px` }) }, y(e.$t("mall.pagedevise.goodsFreeShipping")), 5), r.pointsGiveSwitch == "1" || r.pointsDeductSwitch == "1" ? (g(), h("div", { key: 0, style: f({ ...e.setBgStyle(e.setData.integralBg), color: `${e.setData.integralColor}`, borderRadius: `${e.setData.integralRadius}px` }), class: "cu-tag bg-orange radius sm" }, y(e.$t("mall.pagedevise.goodsPoints")), 5)) : b("", true), r.vipDiscountSwitch == "1" ? (g(), h("div", { key: 1, style: f({ ...e.vipBgStyle(e.setData.vipBg), color: `${e.setData.vipColor}`, borderRadius: `${e.setData.vipTagRadius}px` }), class: "vip-goods-tag radius sm margin-left-xs" }, " SVIP ", 4)) : b("", true)])) : b("", true), r.pointsDeductSwitch == "1" && e.setData.showPointDeduction == "1" ? (g(), h("div", De, [u("div", { class: "text-orange margin-left-xs text-sm text-bold", style: f({ color: `${e.setData.pointDeductionColor}` }) }, y(e.pointsDeductNumber(r)), 5)])) : b("", true), u("div", { style: f({ color: `${e.setData.priceColor}`, fontSize: `${e.setData.priceSize}px` }), class: E(["text-price text-bold text-scarlet text-xl padding-left-xs padding-bottom-xs", r.pointsDeductSwitch == "1" && e.setData.showPointDeduction == "1" ? "text-decorat" : "margin-top-xs"]) }, y(r.priceDown), 7)])) : b("", true)], 4))), 128))])])], 4)]), _: 1 }, 8, ["styles"]);
}
const $e = J(pe, [["render", we], ["__scopeId", "data-v-e56d71d6"]]), Be = Object.freeze(Object.defineProperty({ __proto__: null, default: $e }, Symbol.toStringTag, { value: "Module" }));
export {
  Be as _
};
