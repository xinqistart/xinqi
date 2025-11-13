import { R as m, S as u, _ as p, r as h, c as a, o as n, F as f, v as g, B as r, e, b as c, z as l, aO as _ } from "./index-DAdfXJ2i.js";
const v = { props: { objData: { type: Array } }, setup() {
  const t = m({});
  return { ...u(t) };
} }, b = { class: "news-home" }, k = ["href"], y = { class: "news-main" }, w = { class: "news-content" }, x = { class: "news-content-title" }, B = ["href"], j = { class: "news-main-item" }, D = { class: "news-content-item flex items-center" }, N = { class: "news-content-item-title" }, V = { class: "news-content-item-img" };
function $(t, q, d, C, F, O) {
  const i = h("el-image");
  return n(), a("div", b, [(n(true), a(f, null, g(d.objData, (s, o) => (n(), a("div", { key: o, class: "news-div" }, [o == 0 ? (n(), a("a", { key: 0, target: "_blank", href: s.url }, [e("div", y, [e("div", w, [c(i, { class: "material-img", fit: "fill", style: { height: "100px" }, src: s.thumbUrl }, null, 8, ["src"]), e("div", x, [e("span", null, l(s.title), 1)])])])], 8, k)) : r("", true), o > 0 ? (n(), a("a", { key: 1, target: "_blank", href: s.url }, [e("div", j, [e("div", D, [e("div", N, l(s.title), 1), e("div", V, [c(i, { class: "material-img", fit: "fill", src: s.thumbUrl }, null, 8, ["src"])])])])], 8, B)) : r("", true)]))), 128))]);
}
const S = p(v, [["render", $], ["__scopeId", "data-v-ef4bd21c"]]);
function U(t) {
  return _.request("get", "/weixin/freepublish/page", { params: t });
}
function z(t) {
  return _.request("delete", "/weixin/freepublish", { params: t });
}
export {
  S as _,
  z as d,
  U as g
};
