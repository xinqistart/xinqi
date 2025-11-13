import { _ } from "./base-show-pnQX27ct.js";
import { s as f } from "./useCompShowHooks-DgYh5gcW.js";
import { g as u } from "./shopinfo-DR8w8ULX.js";
import { R as v, t as b, S as y, _ as I, r as c, g as x, o as w, h as n, e as s, b as p, f as l, z as a, V as S, x as $ } from "./index-DAdfXJ2i.js";
const k = f({ setup: (e, t, i) => {
  const o = v({ ...i, shopInfo: { imgUrl: "", address: "", phone: "", collectCount: 0 } });
  b(() => {
    r();
  });
  function r() {
    o.shopId && o.shopId != "-1" && u(o.shopId).then((d) => {
      o.shopInfo = d.data;
    });
  }
  return { ...y(o) };
} }), C = { class: "cp-goods-category-pc pd-preview-component-width-pc" }, O = { class: "cu-item padding-lr-sm padding-tb" }, j = { class: "content shop-detail align-center flex margin-top" }, z = { class: "flex justify-between", style: { width: "100%" } }, B = { class: "margin-left-sm" }, V = { class: "text-xl text-black text-bold" }, D = { class: "flex margin-top-sm align-center" }, N = { class: "text-df" }, F = { class: "cu-btn sm margin-left text-bold" }, M = { class: "cu-btn sm margin-left text-bold" }, P = { class: "flex shop-search margin-right", style: { width: "400px" } }, R = { class: "cu-bar search shop-search", style: { width: "400px", "margin-right": "0" } }, T = { class: "search-form radius padding-right-xs bg-gray", style: { height: "40px" } }, U = { class: "response padding-left-sm text-left" };
function q(e, t, i, o, r, d) {
  const h = c("el-avatar"), g = c("el-image"), m = _;
  return w(), x(m, { styles: e.setData.styles, style: $({ ...e.setBgStyle(e.setData.background) }) }, { default: n(() => [s("div", C, [s("div", O, [s("div", j, [p(g, { style: { width: "60px", height: "60px" }, src: e.shopInfo.imgUrl }, { error: n(() => [p(h, { shape: "square" }, { default: n(() => [...t[0] || (t[0] = [l("LOGO", -1)])]), _: 1 })]), _: 1 }, 8, ["src"]), s("div", z, [s("div", B, [s("div", V, a(e.shopInfo.name), 1), s("div", D, [s("span", N, a(e.shopInfo.collectCount) + a(e.$t("mall.pagedevise.peopleHaveFavorited")), 1), s("span", F, [s("span", { class: S(["margin-right-xs", "cuIcon-" + (e.shopInfo.collectId ? "likefill text-red" : "like text-red")]) }, null, 2), l(" " + a(e.shopInfo.collectId ? e.$t("mall.pagedevise.alreadyFavorited") : e.$t("mall.pagedevise.favorite")), 1)]), s("span", M, [t[1] || (t[1] = s("span", { class: "cuIcon-ticket text-green margin-right-xs" }, null, -1)), l(a(e.$t("mall.pagedevise.getCoupon")), 1)]), t[2] || (t[2] = s("span", { class: "cu-btn sm margin-left" }, [s("span", { class: "cuIcon-share text-green" })], -1))])]), s("div", P, [s("div", R, [s("div", T, [s("div", U, [s("span", null, a(e.$t("mall.pagedevise.shopSearch")), 1)]), t[3] || (t[3] = s("span", { class: "search-icon-class cuIcon-search btn" }, null, -1))])])])])])])])]), _: 1 }, 8, ["styles", "style"]);
}
const G = I(k, [["render", q], ["__scopeId", "data-v-e58732dd"]]), J = Object.freeze(Object.defineProperty({ __proto__: null, default: G }, Symbol.toStringTag, { value: "Module" }));
export {
  J as _
};
