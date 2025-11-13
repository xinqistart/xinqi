import { _ as c } from "./base-show-pnQX27ct.js";
import { R as i, S as l, n as g, _ as p, r as _, g as o, o as t, h, e as m, c as a, b as n, w as y, D as d } from "./index-DAdfXJ2i.js";
import { s as u } from "./useCompShowHooks-DgYh5gcW.js";
const v = "/static/png/shopping-cart-CXT1X4Yz.png", f = "/static/png/category1-vr9TPbnD.png", b = "/static/png/category2-Bj_DwVAe.png", w = "/static/png/category3-CyNZr4fT.png", { $t: P } = g(), I = u({ setup() {
  const e = i({ shoppingCartImg: v, category1Img: f, category2Img: b, category3Img: w });
  return { ...l(e) };
} }), D = { style: { "min-height": "20px" } }, C = { key: 0, class: "relative" }, k = { key: 3, class: "text-center" };
function N(e, $, S, T, j, V) {
  const s = _("el-image"), r = c;
  return t(), o(r, { styles: e.setData.styles }, { default: h(() => [m("div", D, [e.setData.levelNum == 1 ? (t(), a("div", C, [n(s, { src: e.category1Img, style: { width: "100%", height: "100%" } }, null, 8, ["src"]), y(n(s, { src: e.shoppingCartImg, style: { position: "absolute", bottom: "0", left: "0", width: "100%", height: "55px" } }, null, 8, ["src"]), [[d, e.setData.showMyCart == "1"]])])) : e.setData.levelNum == 2 ? (t(), o(s, { key: 1, src: e.category2Img, style: { width: "100%", height: "100%" } }, null, 8, ["src"])) : e.setData.levelNum == 3 ? (t(), o(s, { key: 2, src: e.category3Img, style: { width: "100%", height: "100%" } }, null, 8, ["src"])) : (t(), a("div", k, "\u6682\u65E0\u6570\u636E"))])]), _: 1 }, 8, ["styles"]);
}
const B = p(I, [["render", N], ["__scopeId", "data-v-b1bb6cb8"]]), R = Object.freeze(Object.defineProperty({ __proto__: null, default: B }, Symbol.toStringTag, { value: "Module" }));
export {
  R as _
};
