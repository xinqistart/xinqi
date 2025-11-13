import { _ as u } from "./base-show-pnQX27ct.js";
import { s as p } from "./useCompShowHooks-DgYh5gcW.js";
import { _ as h, g as y, o as t, h as v, e as o, c as e, B as n, x as l, z as i, F as c, v as d, w as _, D as m } from "./index-DAdfXJ2i.js";
const f = p(), b = { class: "cu-list bg-transparent padding-bottom-xs" }, D = { class: "cu-bar" }, k = { key: 0 }, $ = { class: "grid col-4 bg-transparent" }, w = { class: "padding-bottom-sm" }, x = { class: "flex justify-center" }, U = ["src"], C = ["src"], S = { key: 1, class: "cu-list menu bg-transparent" }, B = { class: "flex" }, j = ["src"], z = ["src"];
function T(a, N, O, V, W, E) {
  const g = u;
  return t(), y(g, { styles: a.setData.styles }, { default: v(() => [o("div", b, [o("div", D, [o("div", { class: "title", style: l({ color: `${a.setData.textColor}` }) }, i(a.setData.title), 5)]), a.setData.showType == "grid" ? (t(), e("div", k, [o("div", $, [(t(true), e(c, null, d(a.setData.menus, (s, r) => _((t(), e("div", { key: r, class: "bg-transparent" }, [o("div", w, [o("div", x, [s.imageUrl.startsWith("http") ? (t(), e("img", { key: 0, src: s.imageUrl, class: "item-img" }, null, 8, U)) : (t(), e("img", { key: 1, src: `${s.imageUrl}`, class: "item-img" }, null, 8, C))]), o("div", { class: "text-grey text-df margin-top-xs flex justify-center", style: l({ color: `${a.setData.textColor}` }) }, i(s.name), 5)])])), [[m, s.enable]])), 128))])])) : n("", true), a.setData.showType == "list" ? (t(), e("div", S, [(t(true), e(c, null, d(a.setData.menus, (s, r) => _((t(), e("div", { key: r, class: "cu-item bg-transparent" }, [o("div", B, [s.imageUrl.startsWith("http") ? (t(), e("img", { key: 0, src: s.imageUrl, class: "item-img-list" }, null, 8, j)) : (t(), e("img", { key: 1, src: `${s.imageUrl}`, class: "item-img-list" }, null, 8, z)), o("div", { class: "margin-left-sm text-df", style: l({ color: `${a.setData.textColor}` }) }, i(s.name), 5)])])), [[m, s.enable]])), 128))])) : n("", true)])]), _: 1 }, 8, ["styles"]);
}
const F = h(f, [["render", T], ["__scopeId", "data-v-55b27b04"]]), P = Object.freeze(Object.defineProperty({ __proto__: null, default: F }, Symbol.toStringTag, { value: "Module" }));
export {
  P as _
};
