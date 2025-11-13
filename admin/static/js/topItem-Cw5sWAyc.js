import { d as p, A as x, c as m, o as r, e as n, w as v, B as g, b as f, h, r as y, j as _, f as b, z as u, g as D, u as S, _ as z } from "./index-DAdfXJ2i.js";
function W(e, s) {
  const o = () => {
    let t = document.body.clientWidth || document.documentElement.clientWidth, a = document.body.clientHeight || document.documentElement.clientHeight;
    const c = 1920, i = 1080;
    let l = t / c, d = a / i;
    s && (l -= 0.1, d -= 0.1), e.style.transform = `scale(${l}, ${d})`;
  };
  o(), window.addEventListener("resize", o);
}
function F(e) {
  for (var s = ["\u5143", "\u4E07\u5143", "\u4EBF\u5143", "\u4E07\u4EBF"], o = 1e4, t = e, a = s[0], c = 0; c < 4 && (a = s[c], !(w(t) < 5)); c++) t = t / o;
  t = Number(t);
  var i = { money: 0, unit: "" };
  return i.money = t.toFixed(2), i.unit = a, i;
}
function w(e) {
  if (e) {
    var s = e.toString(), o = s.indexOf("."), t = s;
    return o != -1 && (t = s.substring(0, o)), t.length;
  }
  return 0;
}
const $ = () => {
  var e = document.documentElement;
  (e.requestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen).call(e);
}, A = () => {
  (document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen).call(document);
}, I = { class: "chart-item sub-chart-item" }, T = { class: "sub-content" }, k = { class: "sub-title" }, q = { class: "sub-body sub-card" }, C = { class: "sub-with-order" }, E = { class: "sub-money" }, B = { class: "sub-with-money" }, R = { class: "sub-money" }, j = { class: "sub-name" }, H = { class: "amount-unit" }, N = p({ __name: "topItem", props: { vData: { type: Object, default: () => ({ sum: 0 }) }, queryType: { type: [String, Number] } }, setup(e) {
  const { proxy: s } = x();
  return (o, t) => {
    const a = y("DArrowRight"), c = y("el-icon"), i = y("InfoFilled"), l = _("tippy");
    return r(), m("div", I, [n("div", T, [n("div", k, [n("span", null, [n("span", null, [f(c, { color: "#4189f1", style: { "font-size": "14px", "line-height": "22px", "margin-right": "5px" } }, { default: h(() => [f(a)]), _: 1 })]), v((r(), m("span", null, [b(u(e.vData.title), 1)])), [[l, { content: e.vData.beginTime + " - " + e.vData.endTime, zIndex: 41e3 }]]), v((r(), D(c, { style: { color: "#888888", "font-size": "14px", "margin-left": "5px" } }, { default: h(() => [f(i)]), _: 1 })), [[l, { content: "\u63D0\u793A:\u5305\u62EC\u5DF2\u9000\u6B3E\u72B6\u6001\u8BA2\u5355\u6570\u636E.", zIndex: 41e3 }]])]), e.queryType ? v((r(), m("div", { key: 0, style: { float: "right", "font-size": "14px", color: "#cccccc", cursor: "pointer" }, onClick: t[0] || (t[0] = (d) => o.$emit("loadData", e.queryType)) }, [...t[1] || (t[1] = [b(" \u67E5\u770B ", -1)])])), [[l, { content: "\u70B9\u51FB\u67E5\u770B" + e.vData.title + "\u6570\u636E\u7EDF\u8BA1\u5206\u6790", zIndex: 41e3 }]]) : g("", true)]), n("div", q, [n("div", C, [n("div", E, u(e.vData.count ? e.vData.count : 0), 1), t[2] || (t[2] = n("div", { class: "sub-name" }, "\u8BA2\u5355\u91CF", -1))]), n("div", B, [n("div", R, u(e.vData.sum || 0), 1), n("div", j, [t[3] || (t[3] = b(" \u91D1\u989D ", -1)), n("span", H, "(" + u(S(F)(e.vData.sum).unit) + ")", 1)])])])])]);
  };
} }), O = z(N, [["__scopeId", "data-v-9fcf7d4a"]]), U = Object.freeze(Object.defineProperty({ __proto__: null, default: O }, Symbol.toStringTag, { value: "Module" }));
export {
  O as T,
  A as e,
  $ as r,
  W as s,
  U as t
};
