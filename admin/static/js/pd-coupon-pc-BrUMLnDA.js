import { _ as h } from "./base-show-pnQX27ct.js";
import { s as f } from "./useCompShowHooks-DgYh5gcW.js";
import { g as b } from "./couponinfo-DcPdU1o6.js";
import { R as y, t as _, E as D, S as $, _ as x, g as k, o as a, h as w, e as s, x as n, c as l, F as C, v as I, B as r, z as t } from "./index-DAdfXJ2i.js";
const S = f({ setup: (e, c, m) => {
  const d = y({ ...m, couponInfoList: [] });
  _(() => {
    e.setData.loadNumber && p();
  }), D(() => e.setData.loadNumber, (i, u) => {
    i != u && p();
  });
  function p() {
    b(Object.assign({ current: 0, size: e.setData.loadNumber, descs: "", ascs: "sort" })).then((i) => {
      d.couponInfoList = i.data.records;
    }).catch(() => {
    });
  }
  return { ...$(d) };
} }), B = { class: "item flex" }, N = { class: "flex text-white electronic-coupons" }, R = { class: "margin-top-xs text-xs text-center overflow-1 coupons-shop-name" }, U = { class: "text-center" }, z = { class: "number text-bold" }, A = { class: "text-center" }, T = { class: "text-xs" }, F = ["onTap"], L = { key: 1, class: "margin-top-sm received" }, j = { class: "flex text-white electronic-coupons" }, M = { class: "margin-top-xs text-xs overflow-1 text-center coupons-shop-name" }, O = { class: "text-center" }, P = { class: "number text-bold" }, E = { class: "text-center" }, V = { class: "text-xs" }, Y = ["onTap"], q = { key: 1, class: "margin-top-sm received" }, G = { style: { position: "absolute", right: "0", padding: "12px 2px", "font-size": "12px", color: "red", "text-align": "center", border: "red solid 1px", "border-radius": "4px", "writing-mode": "vertical-rl" } };
function H(e, c, m, d, p, i) {
  const u = h;
  return a(), k(u, { styles: e.setData.styles }, { default: w(() => [s("div", { class: "pageComponent flex bg-white", style: n({ backgroundColor: e.setData.background, marginBottom: `${e.setData.pageSpacing}px` }) }, [s("div", { class: "flex padding-sm", style: n([{ width: "100%", "max-width": "100%" }, { ...e.setBgStyle(e.setData.background) }]) }, [(a(true), l(C, null, I(e.couponInfoList, (o, g) => (a(), l("div", { class: "flex", style: { "margin-right": "8px" }, key: g }, [s("div", B, [o.type == "1" ? (a(), l("div", { key: 0, class: "cu-item radius coupons-image", style: n({ ...e.setBgStyle(e.setData.themeColor), "background-image": e.setData.couponImage1 ? "url(" + e.setData.couponImage1 + ")" : "", backgroundColor: e.setData.themeColor }) }, [s("div", N, [s("div", { class: "flex-twice", style: n([{ color: "#f92713" }, { color: e.setData.textColor1 }]) }, [s("div", R, t(o.shopInfo ? o.shopInfo.name : e.$t("mall.pagedevise.storeName")), 1), s("div", U, [c[0] || (c[0] = s("span", { class: "text-price text-xl" }, null, -1)), s("span", z, t(o.reduceAmount), 1)]), s("div", A, [s("div", T, t(e.$t("mall.pagedevise.couponFull")) + t(o.premiseAmount) + t(e.$t("mall.pagedevise.couponYuanAvailable")), 1)])], 4), s("div", { class: "shadow-blur radius text-center t1-l", style: n("color:" + e.setData.textColor1) }, [o.couponUser ? r("", true) : (a(), l("div", { key: 0, onTap: (v) => e.couponUserSave(o), class: "already btn" }, [s("span", null, t(e.$t("mall.pagedevise.couponReceive")), 1)], 40, F)), o.couponUser ? (a(), l("div", L, t(e.$t("mall.pagedevise.couponReceived")), 1)) : r("", true)], 4)])], 4)) : o.type == "2" && e.setData.themeColor2 ? (a(), l("div", { key: 1, class: "cu-item radius coupons-image2", style: n({ ...e.setBgStyle(e.setData.themeColor2), "background-image": e.setData.couponImage2 ? "url(" + e.setData.couponImage2 + ")" : "", backgroundColor: e.setData.themeColor2 }) }, [s("div", j, [s("div", { class: "flex-twice padding-lr-xs", style: n([{ color: "#f92713" }, { color: e.setData.textColor2 }]) }, [s("div", M, t(o.shopInfo ? o.shopInfo.name : e.$t("mall.pagedevise.storeName")), 1), s("div", O, [s("span", P, t(o.discount) + t(e.$t("mall.pagedevise.userDiscount")), 1)]), s("div", E, [s("div", V, t(e.$t("mall.pagedevise.couponFull")) + t(o.premiseAmount) + t(e.$t("mall.pagedevise.couponYuanAvailable")), 1)])], 4), s("div", { class: "shadow-blur radius text-center t1-l", style: n("color:" + e.setData.textColor2) }, [o.couponUser ? r("", true) : (a(), l("div", { key: 0, onTap: (v) => e.couponUserSave(o), class: "margin-top-sm already btn" }, t(e.$t("mall.pagedevise.couponReceive")), 41, Y)), o.couponUser ? (a(), l("div", q, t(e.$t("mall.pagedevise.couponReceived")), 1)) : r("", true)], 4)])], 4)) : r("", true)])]))), 128)), s("div", G, t(e.$t("mall.pagedevise.receiveMore")), 1)], 4)], 4)]), _: 1 }, 8, ["styles"]);
}
const J = x(S, [["render", H], ["__scopeId", "data-v-4dbca52c"]]), Z = Object.freeze(Object.defineProperty({ __proto__: null, default: J }, Symbol.toStringTag, { value: "Module" }));
export {
  Z as _
};
