import { _ as c } from "./base-show-pnQX27ct.js";
import { s as u } from "./useCompShowHooks-DgYh5gcW.js";
import { u as f } from "./pageDevise-DcQ8796K.js";
import { p as v, q as h, t as _, _ as D, r as w, g as r, o as n, h as $, e as s, V as p, w as y, B as m, c as C, x as l, D as b, z as t } from "./index-DAdfXJ2i.js";
const S = u({ setup(e) {
  const a = v(false), o = f(), i = h(() => o.pageDeviseData && o.pageDeviseData.id && o.pageDeviseData.pageComponent && o.pageDeviseData.pageComponent.pdPageConfig.mallName ? o.pageDeviseData.pageComponent.pdPageConfig.mallName : e.mallName);
  return _(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? a.value = true : a.value = false;
    });
  }), { isFixed: a, showName: i };
} }), N = { key: 0 }, I = { class: "topbar-menu flex" }, k = { class: "topbar-user flex" }, z = { class: "margin-left" }, B = { class: "margin-left" }, E = { class: "margin-left" }, P = { class: "margin-left-xs" }, H = { class: "margin-left" }, O = { class: "margin-left-xs" }, V = { class: "margin-left-xl" }, j = { class: "margin-left-xs" }, F = { class: "btn margin-left" };
function M(e, a, o, i, U, W) {
  const g = w("el-image"), d = c;
  return n(), r(d, { styles: e.setData.styles }, { default: $(() => [s("div", { class: p(["top-image-box", { "is-fixed": e.isFixed ?? false }]) }, [e.setData ? y((n(), C("div", N, [e.setData.topImageShow == "1" ? (n(), r(g, { key: 0, class: "flex top-image", style: l(`height: ${e.setData.height}px`), src: e.setData.topImageUrl }, null, 8, ["style", "src"])) : m("", true)], 512)), [[b, !e.preview || e.setData.topImageShow == "1" && e.setData.topImageUrl && e.preview]]) : m("", true), s("div", { class: p(["nav-topbar", { "nav-topbar-preview": e.preview }]), style: l({ height: `${e.setData.topNavHeight}px` }) }, [s("div", { class: "container", style: l({ color: `${e.setData.headerTextColor}`, lineHeight: `${e.setData.textHeight}px`, fontSize: `${e.setData.fontSize}px`, fontWeight: `${e.setData.fontWeight}`, backgroundColor: `${e.setData.headerBgColor}` }) }, [s("div", I, [s("span", null, t(e.showName || "\u5546\u57CE\u540D\u79F0"), 1)]), s("div", k, [s("span", null, t(e.$t("mall.pagedevise.userNickname")), 1), s("span", z, t(e.$t("mall.pagedevise.myOrders")), 1), s("span", B, t(e.$t("mall.pagedevise.personalCenter")), 1), s("span", E, [a[0] || (a[0] = s("span", { class: "cuIcon-cart" }, null, -1)), s("span", P, t(e.$t("mall.pagedevise.shoppingCartEmpty")), 1)]), s("span", H, [a[1] || (a[1] = s("span", { class: "cuIcon-message" }, null, -1)), s("span", O, t(e.$t("mall.pagedevise.messagesEmpty")), 1)]), s("span", V, [s("span", j, t(e.$t("mall.pagedevise.merchantServices")), 1), a[2] || (a[2] = s("span", { class: "cuIcon-unfold" }, null, -1))]), s("span", F, t(e.$t("mall.pagedevise.logout")), 1)])], 4)], 6)], 2)]), _: 1 }, 8, ["styles"]);
}
const T = D(S, [["render", M], ["__scopeId", "data-v-93da4157"]]), G = Object.freeze(Object.defineProperty({ __proto__: null, default: T }, Symbol.toStringTag, { value: "Module" }));
export {
  T as _,
  G as a
};
