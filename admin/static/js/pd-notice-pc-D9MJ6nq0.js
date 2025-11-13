import { _ as f } from "./base-show-pnQX27ct.js";
import h from "./default-image-COzMKpJv.js";
import { s as v } from "./useCompShowHooks-DgYh5gcW.js";
import { _ as y, r as i, g as a, o as s, h as n, e, x as l, c as r, b as D, F as x, v as b, w as c, D as _, z as w } from "./index-DAdfXJ2i.js";
import { _ as k } from "./ic_notice_title-CBoA872e.js";
const S = v(), $ = { key: 0 }, B = { class: "flex align-center", style: { height: "100%" } }, z = { class: "margin-lr-xs flex align-center" }, C = ["src"], L = { class: "notice-image", src: k }, N = { style: { "font-size": "14px" } };
function U(t, F, I, O, P, V) {
  const p = i("el-carousel-item"), m = i("el-carousel"), d = h, g = f;
  return s(), a(g, { styles: t.setData.styles }, { default: n(() => [e("div", { class: "notice-component text-orange", style: l({ marginBottom: `${t.setData.pageSpacing}px` }) }, [t.setData.noticeList ? (s(), r("div", $, [D(m, { height: "50px", "indicator-position": "none", interval: t.setData.interval }, { default: n(() => [e("div", { style: l([{ height: "100%" }, { color: `${t.setData.textColor}` }]) }, [(s(true), r(x, null, b(t.setData.noticeList, (o, u) => (s(), a(p, { key: u, style: { width: "100%", "padding-left": "10px" } }, { default: n(() => [e("div", B, [e("div", z, [c(e("img", { class: "notice-image", src: o.imageUrl }, null, 8, C), [[_, o.imageUrl]]), c(e("img", L, null, 512), [[_, !o.imageUrl]])]), e("div", N, [e("span", null, w(o.content), 1)])])]), _: 2 }, 1024))), 128))], 4)]), _: 1 }, 8, ["interval"])])) : (s(), a(d, { key: 1 }))], 4)]), _: 1 }, 8, ["styles"]);
}
const j = y(S, [["render", U], ["__scopeId", "data-v-30b090ef"]]), G = Object.freeze(Object.defineProperty({ __proto__: null, default: j }, Symbol.toStringTag, { value: "Module" }));
export {
  G as _
};
