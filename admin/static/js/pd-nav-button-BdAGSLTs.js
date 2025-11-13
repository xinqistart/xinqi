import { _ as l } from "./base-show-pnQX27ct.js";
import { s as d } from "./useCompShowHooks-DgYh5gcW.js";
import { _ as u, g as c, o as s, h as p, e as t, x as r, V as g, c as o, F as m, v as _, B as b, z as f } from "./index-DAdfXJ2i.js";
const h = d(), y = ["url"], v = { style: { display: "flex", "justify-content": "center" } }, D = ["src"];
function R(e, B, $, w, z, L) {
  const n = l;
  return s(), c(n, { styles: e.setData.styles }, { default: p(() => [t("div", { style: r([{ "background-size": "100% 100%" }, { ...e.setBgStyle(e.setData.background), borderTopLeftRadius: `${e.setData.topLeftRadius}px`, borderTopRightRadius: `${e.setData.topRightRadius}px`, borderBottomLeftRadius: `${e.setData.bottomLeftRadius}px`, borderBottomRightRadius: `${e.setData.bottomRightRadius}px`, "background-image": e.setData.backgroundImg ? `url(${e.setData.backgroundImg})` : "" }]) }, [t("div", { class: g(["grid no-border", "col-" + e.setData.rowNum]) }, [(s(true), o(m, null, _(e.setData.navButtons, (a, i) => (s(), o("div", { key: i, class: "cu-item", style: { "text-align": "center" } }, [t("div", { url: a.pageUrl, "hover-class": "none" }, [t("div", v, [t("img", { style: { width: "48px", height: "48px", margin: "auto" }, src: a.imageUrl ? a.imageUrl : e.noImage }, null, 8, D)]), e.setData.showTitle != "0" ? (s(), o("div", { key: 0, class: "text-sm", style: r({ color: `${e.setData.textColor}` }) }, f(a.navName), 5)) : b("", true)], 8, y)]))), 128))], 2)], 4)]), _: 1 }, 8, ["styles"]);
}
const k = u(h, [["render", R], ["__scopeId", "data-v-79b557db"]]), I = Object.freeze(Object.defineProperty({ __proto__: null, default: k }, Symbol.toStringTag, { value: "Module" }));
export {
  I as _
};
