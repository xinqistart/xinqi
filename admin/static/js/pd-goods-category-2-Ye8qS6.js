import { _ as f } from "./base-show-pnQX27ct.js";
import { aO as o, R as y, t as b, S as D, n as _, _ as v, g as $, o as l, h as k, e, x as s, c as i, B as C, V as p, z as u, F as I, v as R } from "./index-DAdfXJ2i.js";
import { s as B } from "./useCompShowHooks-DgYh5gcW.js";
import { g as S } from "./goodscategory-DvhXgk83.js";
function T(t) {
  return o.request("get", "/mall/goodscategoryshop/page", { params: t });
}
function M(t) {
  return o.request("get", "/mall/goodscategoryshop/tree", { params: t });
}
function N(t) {
  return o.request("post", "/mall/goodscategoryshop", { data: t });
}
function E(t) {
  return o.request("delete", "/mall/goodscategoryshop/" + t);
}
function G(t) {
  return o.request("put", "/mall/goodscategoryshop", { data: t });
}
const { $t: A } = _(), x = B({ setup: (t, g, a) => {
  const r = y({ ...a, TabCur: 0, firstCategoryData: [], secondCategoryData: [], categoryData: [] });
  b(() => {
    d();
  });
  function d() {
    a.shopId && a.shopId != "-1" ? T({ current: 1, size: 5, ascs: "sort", parentId: "0", shopId: a.shopId, enable: "1" }).then((n) => {
      r.categoryData = n.data.records;
    }) : S({ current: 1, size: 5, ascs: "sort", parentId: "0", enable: "1" }).then((n) => {
      r.categoryData = n.data.records;
    });
  }
  return { ...D(r) };
} }), z = { class: "", style: { width: "90%" } }, w = { class: "nav text-df", style: { position: "relative", display: "flex" } }, O = { class: "action" };
function j(t, g, a, r, d, n) {
  const m = f;
  return l(), $(m, { styles: t.setData.styles }, { default: k(() => [e("div", { class: "pageComponent", style: s({ marginBottom: `${t.setData.pageSpacing}px` }) }, [e("div", { class: "cu-bar h-[40px]", style: s([{ "background-size": "100% 100%" }, { ...t.setBgStyle(t.setData.background), borderTopLeftRadius: `${t.setData.topLeftRadius}px`, borderTopRightRadius: `${t.setData.topRightRadius}px`, borderBottomLeftRadius: `${t.setData.bottomLeftRadius}px`, borderBottomRightRadius: `${t.setData.bottomRightRadius}px`, "background-image": t.setData.backgroundImg ? `url(${t.setData.backgroundImg})` : "" }]) }, [e("div", z, [e("div", w, [t.setData.firstTitleShow != "0" ? (l(), i("div", { key: 0, class: p(["cu-item", "cur text-bold text-lg"]), style: s([{ height: "35px", "line-height": "35px" }, { color: `${t.setData.textColor}` }]) }, u(t.setData.firstTitle || t.$t("mall.pagedevise.home")), 5)) : C("", true), (l(true), i(I, null, R(t.categoryData, (h, c) => (l(), i("div", { key: c, class: p(["cu-item", t.setData.firstTitleShow == "0" && c == 0 ? "cur text-bold text-lg" : ""]), style: s([{ height: "35px", "line-height": "35px" }, { color: `${t.setData.textColor}` }]) }, u(h.name), 7))), 128))])]), e("div", O, [e("div", { class: "cuIcon-moreandroid text-black margin-left-sm", style: s({ color: `${t.setData.textColor}` }) }, null, 4)])], 4)], 4)]), _: 1 }, 8, ["styles"]);
}
const q = v(x, [["render", j], ["__scopeId", "data-v-1bdf8695"]]), H = Object.freeze(Object.defineProperty({ __proto__: null, default: q }, Symbol.toStringTag, { value: "Module" }));
export {
  H as _,
  N as a,
  E as d,
  M as f,
  G as p
};
