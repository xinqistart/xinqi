import { _ } from "./base-show-pnQX27ct.js";
import u from "./default-image-COzMKpJv.js";
import { s as h } from "./useCompShowHooks-DgYh5gcW.js";
import { _ as f } from "./ic_notice_title-CBoA872e.js";
import { _ as y, r as l, g as n, o as t, h as r, e as o, x as s, c as a, b, F as D, v, z as k } from "./index-DAdfXJ2i.js";
const $ = h(), R = { key: 0 }, L = { class: "flex align-center" }, B = { class: "margin-lr-xs flex align-center", style: { height: "40px" } }, S = ["src"], x = { key: 1, class: "notice-image", src: f, style: { width: "40px", height: "22px" } };
function z(e, I, T, C, F, N) {
  const c = l("el-carousel-item"), d = l("el-carousel"), p = u, g = _;
  return t(), n(g, { styles: e.setData.styles }, { default: r(() => [o("div", { class: "notice-component", style: s({ marginBottom: `${e.setData.pageSpacing}px` }) }, [e.setData.noticeList ? (t(), a("div", R, [b(d, { height: "40px", "indicator-position": "none", interval: e.setData.interval, style: s([{ height: "100%", "background-size": "100%" }, { ...e.setBgStyle(e.setData.background), borderTopLeftRadius: `${e.setData.topLeftRadius}px`, borderTopRightRadius: `${e.setData.topRightRadius}px`, borderBottomLeftRadius: `${e.setData.bottomLeftRadius}px`, borderBottomRightRadius: `${e.setData.bottomRightRadius}px`, "background-image": e.setData.backgroundImg ? `url(${e.setData.backgroundImg})` : "" }]) }, { default: r(() => [(t(true), a(D, null, v(e.setData.noticeList, (i, m) => (t(), n(c, { key: m, style: { width: "100%" } }, { default: r(() => [o("div", { style: s([{ height: "100%" }, { color: `${e.setData.textColor}` }]) }, [o("div", L, [o("div", B, [i.imageUrl ? (t(), a("img", { key: 0, class: "notice-image", src: i.imageUrl }, null, 8, S)) : (t(), a("img", x))]), o("div", { style: s([{ "font-size": "14px", "line-height": "40px" }, { fontSize: `${e.setData.noticeFontSize}px`, paddingLeft: `${e.setData.noticeTextMarginLeft}px` }]) }, [o("span", null, k(i.content), 1)], 4)])], 4)]), _: 2 }, 1024))), 128))]), _: 1 }, 8, ["interval", "style"])])) : (t(), n(p, { key: 1 }))], 4)]), _: 1 }, 8, ["styles"]);
}
const w = y($, [["render", z], ["__scopeId", "data-v-3476c820"]]), E = Object.freeze(Object.defineProperty({ __proto__: null, default: w }, Symbol.toStringTag, { value: "Module" }));
export {
  E as _
};
