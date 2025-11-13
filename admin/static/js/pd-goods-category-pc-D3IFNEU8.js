import { _ as x } from "./base-show-pnQX27ct.js";
import { s as P } from "./useCompShowHooks-DgYh5gcW.js";
import { f as B } from "./goodscategory-DvhXgk83.js";
import { R as H, t as S, S as T, _ as N, r as k, g as V, o as a, h as C, e as t, x as l, z as r, c as s, F as d, v as c, V as z, f as g, b as W, B as v } from "./index-DAdfXJ2i.js";
const L = P({ setup: (e, h, D) => {
  const p = H({ ...D, goodsCategory: [] });
  S(() => {
    f(), _();
  });
  function f() {
    B().then((n) => {
      p.goodsCategory = n.data;
    });
  }
  function _() {
    let n = e.setData.categoryTextBgColor || "#e53c43";
    document.querySelectorAll(".cp-goods-category-pc").forEach((y) => {
      y.style.setProperty("--categoryColorPd", n);
    });
  }
  return { ...T(p) };
} }), F = { class: "cp-goods-category-pc pd-preview-component-width-pc" }, U = { class: "flex" }, j = { class: "header-menu flex align-center" }, E = ["href"], I = { class: "padding-lr flex align-center" }, M = { class: "cu-list grid col-5 no-border" }, O = { class: "category-name" }, R = ["src"], q = { key: 0, class: "text-gray text-sm padding-lr", style: { width: "100%" } }, A = { key: 0, class: "text-gray text-center" }, G = { class: "cu-list grid col-5 no-border" }, J = { class: "category-name" }, K = ["src"], Q = { key: 0, class: "text-gray text-center" };
function X(e, h, D, p, f, _) {
  const n = k("el-icon-arrow-right"), $ = k("el-icon"), y = x;
  return a(), V(y, { styles: e.setData.styles }, { default: C(() => [t("div", F, [t("div", U, [t("div", { style: l({ ...e.setBgStyle(e.setData.categoryBgColor), width: e.setData.categoryWidth ? `${e.setData.categoryWidth}px` : "220px" }), class: "text-center padding-tb-sm text-bold" }, [t("span", { style: l({ color: `${e.setData.firstTitleColor}` }) }, r(e.setData.firstTitle), 5)], 4), t("div", j, [(a(true), s(d, null, c(e.setData.titles, (o, u) => (a(), s("div", { key: u, style: l({ color: `${e.setData.textColor}` }), class: "item-menu padding-tb-sm" }, [t("span", { target: "_blank", href: o.pageUrl }, r(o.navName), 9, E)], 4))), 128))])]), t("div", null, [t("div", { class: z(["nav-menu", { "bg-white": e.setData.categoryBgType == 1 }]), style: l({ width: e.setData.categoryWidth ? `${e.setData.categoryWidth}px` : "220px", height: e.setData.categoryHeight ? `${e.setData.categoryHeight}px` : "550px" }) }, [t("div", { class: "menu-wrap", style: l({ height: e.setData.categoryHeight ? `${e.setData.categoryHeight}px` : "550px" }) }, [(a(true), s(d, null, c(e.goodsCategory, (o, u) => (a(), s("div", { key: u, class: "menu-item" }, [t("div", { class: "item-text", style: l({ paddingLeft: e.setData.itemPaddingLeft ? `${e.setData.itemPaddingLeft}px` : "20px", width: e.setData.categoryWidth ? `${e.setData.categoryWidth}px` : "220px" }) }, [g(r(o.name) + " ", 1), W($, { class: "item-arrow" }, { default: C(() => [W(n)]), _: 1 })], 4), e.setData.levelNum == 3 ? (a(), s("div", { key: 0, class: "children", style: l([{ overflow: "auto", height: "550px" }, { left: e.setData.categoryWidth ? `${e.setData.categoryWidth}px` : "220px", width: e.setData.categoryWidth ? `${1226 - e.setData.categoryWidth}px` : "1006px", height: e.setData.categoryHeight ? `${e.setData.categoryHeight}px` : "550px" }]) }, [(a(true), s(d, null, c(o.children, (i, m) => (a(), s("div", { key: m, style: { width: "100%" } }, [t("div", I, [g(r(i.name) + " ", 1), h[0] || (h[0] = t("span", { class: "cuIcon-right" }, null, -1))]), t("div", M, [(a(true), s(d, null, c(i.children, (w, b) => (a(), s("div", { key: b, class: "cu-item text-center" }, [t("span", O, [t("div", null, [t("img", { class: "image-class", src: w.picUrl }, null, 8, R)]), g(" " + r(w.name), 1)])]))), 128))]), !i.children || i.children == 0 ? (a(), s("div", q, r(e.$t("mall.pagedevise.noProductData")), 1)) : v("", true)]))), 128)), !o.children || o.children == 0 ? (a(), s("div", A, r(e.$t("mall.pagedevise.noProductData")), 1)) : v("", true)], 4)) : (a(), s("div", { key: 1, class: "children", style: l([{ overflow: "auto", height: "550px" }, { left: e.setData.categoryWidth ? `${e.setData.categoryWidth}px` : "220px", width: e.setData.categoryWidth ? `${1226 - e.setData.categoryWidth}px` : "1006px", height: e.setData.categoryHeight ? `${e.setData.categoryHeight}px` : "550px" }]) }, [t("div", G, [(a(true), s(d, null, c(o.children, (i, m) => (a(), s("div", { key: m, class: "cu-item text-center" }, [t("span", J, [t("div", null, [t("img", { class: "image-class", src: i.picUrl }, null, 8, K)]), g(" " + r(i.name), 1)])]))), 128))]), !o.children || o.children == 0 ? (a(), s("div", Q, r(e.$t("mall.pagedevise.noProductData")), 1)) : v("", true)], 4))]))), 128))], 4)], 6)])])]), _: 1 }, 8, ["styles"]);
}
const Y = N(L, [["render", X], ["__scopeId", "data-v-af1e0523"]]), se = Object.freeze(Object.defineProperty({ __proto__: null, default: Y }, Symbol.toStringTag, { value: "Module" }));
export {
  se as _
};
