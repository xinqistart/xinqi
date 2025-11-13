import { _ } from "./base-show-pnQX27ct.js";
import { s as u } from "./useCompShowHooks-DgYh5gcW.js";
import { R as p, q as m, S as y, _ as f, g, o as t, h, e as a, x as r, z as c, c as o, F as v, v as D, V as b } from "./index-DAdfXJ2i.js";
const k = u({ setup(e) {
  const l = p({}), n = m(() => e.setData["styleTypeData" + e.setData.styleType]);
  return { ...y(l), orderMenus: n };
} }), x = { class: "cu-list grid col-5 no-border radius-sm bg-transparent", style: { height: "80px" } }, C = { class: "flex flex-sub flex-direction align-center justify-center" }, $ = ["src"];
function S(e, l, n, z, B, j) {
  const i = _;
  return t(), g(i, { styles: e.setData.styles }, { default: h(() => [a("div", { class: "title", style: r({ color: e.setData.titleColor }) }, c(e.setData.title), 5), a("div", x, [(t(true), o(v, null, D(e.orderMenus, (s, d) => (t(), o("div", { class: "cu-item", key: d }, [a("div", C, [s.imageUrl ? (t(), o("img", { key: 0, src: s.imageUrl, width: "30", height: "30", style: { margin: "auto" } }, null, 8, $)) : (t(), o("div", { key: 1, class: b(s.icon), style: r({ color: `${e.setData.textColor}` }) }, null, 6)), a("div", { class: "text-df margin-top-sm", style: r({ color: `${e.setData.textColor}` }) }, c(s.name), 5)])]))), 128))])]), _: 1 }, 8, ["styles"]);
}
const w = f(k, [["render", S], ["__scopeId", "data-v-1da908c8"]]), U = Object.freeze(Object.defineProperty({ __proto__: null, default: w }, Symbol.toStringTag, { value: "Module" }));
export {
  U as _
};
