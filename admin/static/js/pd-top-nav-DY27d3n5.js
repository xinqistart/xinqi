import { s as t, _ as h } from "./base-show-pnQX27ct.js";
import { u as d } from "./pageDevise-DcQ8796K.js";
import { s as k } from "./useCompShowHooks-DgYh5gcW.js";
import { q as p, t as S, bl as y, p as D, E as m, _ as C, g as b, o as s, h as N, c as o, B as r, x as i, e as u, V as w, w as L, z as B, D as P } from "./index-DAdfXJ2i.js";
const A = k({ props: { isHomePagePreview: { type: Boolean, default: void 0 }, pageScroll: { type: Boolean, default: false } }, setup(e) {
  const n = p(() => {
    var _a;
    return e.isHomePagePreview ? (_a = e.pageDeviseData) == null ? void 0 : _a.pdThemeConfig : d().themeData;
  });
  S(() => {
    f();
  }), y(() => {
    f();
  });
  const c = p(() => {
    var _a;
    return e.isHomePagePreview ? (_a = e.pageDeviseData) == null ? void 0 : _a.pageComponent.pdShareConfig : d().pageDeviseData.pageComponent.pdShareConfig;
  }), a = D({}), g = D(false);
  function f() {
    m(() => {
      var _a;
      return (_a = n.value) == null ? void 0 : _a.backgroundColor;
    }, (l) => {
      var _a, _b;
      l ? g.value ? e.setData.backgroundAfter ? a.value = t(e.setData.backgroundAfter) : a.value = t((_a = n.value) == null ? void 0 : _a.backgroundColor) : a.value = {} : e.setData.background ? a.value = t(e.setData.background) : a.value = t((_b = n.value) == null ? void 0 : _b.backgroundColor);
    }), m(() => e.setData.transparentNav, (l) => {
      var _a, _b;
      l == "1" ? g.value ? e.setData.backgroundAfter ? a.value = t(e.setData.backgroundAfter) : a.value = t((_a = n.value) == null ? void 0 : _a.backgroundColor) : a.value = {} : e.setData.background ? a.value = t(e.setData.background) : a.value = t((_b = n.value) == null ? void 0 : _b.backgroundColor);
    }), m(() => e.pageScroll, (l) => {
      var _a, _b;
      g.value = l, e.setData.transparentNav == "1" ? l ? e.setData.backgroundAfter ? a.value = t(e.setData.backgroundAfter) : a.value = t((_a = n.value) == null ? void 0 : _a.backgroundColor) : a.value = {} : e.setData.background ? a.value = t(e.setData.background) : a.value = t((_b = n.value) == null ? void 0 : _b.backgroundColor);
    }, { deep: true, immediate: true });
  }
  const v = p(() => {
    var _a, _b, _c, _d, _e;
    return e.isHomePagePreview ? (_b = (_a = e.pageDeviseData) == null ? void 0 : _a.pageComponent.pdThemeConfig) == null ? void 0 : _b.navigationBarTextColor : (_e = (_d = (_c = d().pageDeviseData) == null ? void 0 : _c.pageComponent) == null ? void 0 : _d.pdThemeConfig) == null ? void 0 : _e.navigationBarTextColor;
  });
  return { pageScrollStatus: g, shareConfig: c, topNavStatusBg: v, topNavBgStyle: a };
} }), H = "/static/png/top-nav-white-tgXYDZXp.png", $ = "/static/png/top-nav-black-BFw-yaUw.png", I = { class: "", style: { width: "100%", height: "30px", "margin-top": "-50px" } }, U = { key: 0, class: "padding-lr-sm padding-tb-xs", src: H }, _ = { key: 1, class: "padding-lr-sm padding-tb-xs", src: $ }, T = { class: "flex items-center" }, z = { key: 0, class: "cuIcon-back" }, M = { key: 1 }, E = ["src"], V = ["src"], j = { key: 0, class: "cp-top-nav-right" }, O = ["src"];
function W(e, n, c, a, g, f) {
  var _a;
  const v = h;
  return s(), b(v, { styles: (_a = e.setData) == null ? void 0 : _a.styles }, { default: N(() => [e.setData ? (s(), o("div", { key: 0, class: "cp-top-nav", style: i({ ...e.topNavBgStyle, position: e.setData.fixedNav == "1" ? "fixed" : "relative" }) }, [u("div", I, [e.topNavStatusBg == "#ffffff" ? (s(), o("img", U)) : r("", true), e.topNavStatusBg != "#ffffff" ? (s(), o("img", _)) : r("", true)]), u("div", { class: "cp-top-nav-left", style: i({ paddingLeft: e.setData.showBack == 1 && !(e.isHomePage || e.isHomePagePreview === true) ? "15px" : "0" }) }, [u("div", T, [e.isHomePage || e.isHomePagePreview === true ? r("", true) : (s(), o("div", { key: 0, style: i({ color: e.setData.transparentNav == 1 && e.pageScrollStatus ? e.setData.titleColorAfter : "#ffffff" }), class: w(e.setData.transparentNav != 1 || e.pageScrollStatus ? "" : "navigator-back-icon") }, [e.setData.showBack == 1 ? (s(), o("span", z)) : r("", true)], 6)), e.setData.topNavLeft.imageShow == 1 ? (s(), o("div", M, [e.setData.topNavLeft.imageCenter != "1" ? (s(), o("img", { key: 0, src: e.pageScrollStatus ? e.setData.topNavLeft.imageUrlAfter || e.setData.topNavLeft.imageUrl : e.setData.topNavLeft.imageUrl || e.noImage, style: i({ width: `${e.setData.topNavLeft.imageWidth}px`, height: `${e.setData.topNavLeft.imageHeight}px`, marginLeft: `${e.setData.topNavLeft.imageMarginLeft}px` }) }, null, 12, E)) : r("", true)])) : r("", true)])], 4), u("div", { class: "cp-top-nav-content", style: i({ color: e.setData.transparentNav == 1 && e.pageScrollStatus ? e.setData.titleColorAfter : e.setData.titleColor }) }, [L(u("span", null, B(e.setData.title), 513), [[P, e.setData.titleShow != "0" || e.pageScrollStatus]]), e.setData.topNavLeft.imageCenter == "1" ? (s(), o("img", { key: 0, src: e.pageScrollStatus ? e.setData.topNavLeft.imageUrlAfter || e.setData.topNavLeft.imageUrl : e.setData.topNavLeft.imageUrl || e.noImage, style: i({ width: `${e.setData.topNavLeft.imageWidth}px`, height: `${e.setData.topNavLeft.imageHeight}px`, marginLeft: `${e.setData.topNavLeft.imageMarginLeft}px` }) }, null, 12, V)) : r("", true)], 4), e.shareConfig && e.shareConfig.shareIconShow == 1 ? (s(), o("div", j, [e.shareConfig.shareIcon ? (s(), o("img", { key: 0, src: e.shareConfig.shareIcon, style: { width: "25px", height: "25px" }, class: "margin-right-sm" }, null, 8, O)) : (s(), o("span", { key: 1, style: i({ color: e.setData.transparentNav == 1 && e.pageScrollStatus ? e.setData.titleColorAfter : e.setData.titleColor }), class: "margin-right-sm cuIcon-forward" }, null, 4))])) : r("", true)], 4)) : r("", true)]), _: 1 }, 8, ["styles"]);
}
const X = C(A, [["render", W], ["__scopeId", "data-v-17825cbe"]]), G = Object.freeze(Object.defineProperty({ __proto__: null, default: X }, Symbol.toStringTag, { value: "Module" }));
export {
  X as _,
  G as a
};
