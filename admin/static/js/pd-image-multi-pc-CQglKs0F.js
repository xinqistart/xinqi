import { _ as l } from "./base-show-pnQX27ct.js";
import { s as m } from "./useCompShowHooks-DgYh5gcW.js";
import { _ as d, g, o as s, h as c, e as a, x as t, V as p, c as r, F as u, v as _ } from "./index-DAdfXJ2i.js";
const b = m(), f = { class: "imageMultiComponent" }, h = { class: "flex justify-center align-center" }, y = ["src"];
function v(e, $, k, I, w, B) {
  const n = l;
  return s(), g(n, { styles: e.setData.styles }, { default: c(() => [a("div", f, [a("div", { style: t({ marginBottom: `${e.setData.pageSpacing}px` }) }, [a("div", { class: "image-m-bg padding-sm", style: t({ background: e.setData.backgroundImg ? `url(${e.setData.backgroundImg}) no-repeat ` : "" }) }, [a("div", h, [a("div", { class: p(["cu-list grid", "col-" + e.setData.rowNum]), style: { background: "transparent !important" } }, [(s(true), r(u, null, _(e.setData.imageItems, (o, i) => (s(), r("div", { key: i }, [a("div", null, [a("img", { class: "image-box margin-lr-xs", style: t({ height: `${e.setData.imageHeight}px`, width: `${e.setData.imageWidth}px`, borderRadius: `${e.setData.imageRadius1}px` }), src: o.imageUrl ? o.imageUrl : e.noImage }, null, 12, y)])]))), 128))], 2)])], 4)], 4)])]), _: 1 }, 8, ["styles"]);
}
const D = d(b, [["render", v], ["__scopeId", "data-v-35b32b69"]]), C = Object.freeze(Object.defineProperty({ __proto__: null, default: D }, Symbol.toStringTag, { value: "Module" }));
export {
  C as _
};
