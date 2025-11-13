import { _ as p } from "./base-show-pnQX27ct.js";
import { s as d } from "./useCompShowHooks-DgYh5gcW.js";
import { p as u, t as m, bl as f, ap as g, _ as h, r as v, g as n, o as l, h as w, e as o, V as y, B as b, x as C } from "./index-DAdfXJ2i.js";
const k = d({ setup: (e, t, i) => {
  const s = u(false);
  m(() => {
    s.value = e.setData.show == "1";
  }), f(() => {
    s.value = e.setData.show == "1";
  }), g(() => {
    s.value = false;
  });
  function a() {
    s.value = false;
  }
  return { show: s, onClickFn: a };
} }), D = { style: { position: "relative" } }, B = { class: "cu-dialog bg-transparent", style: { width: "100%" } };
function U(e, t, i, s, a, z) {
  const r = v("el-image"), c = p;
  return l(), n(c, { styles: e.setData.styles }, { default: w(() => [o("div", D, [o("div", { class: y(["cu-modal", e.show ? "show" : ""]) }, [o("div", B, [e.setData.imageUrl ? (l(), n(r, { key: 0, style: C({ height: e.setData.imageHeight + "px", width: e.setData.imageWidth + "px" }), src: e.setData.imageUrl, fit: "fill" }, null, 8, ["style", "src"])) : b("", true), o("div", { onClick: t[0] || (t[0] = (..._) => e.onClickFn && e.onClickFn(..._)), class: "margin-top" }, [...t[1] || (t[1] = [o("span", { class: "cuIcon-close close-btn" }, null, -1)])])])], 2)])]), _: 1 }, 8, ["styles"]);
}
const $ = h(k, [["render", U], ["__scopeId", "data-v-e83a5e96"]]), j = Object.freeze(Object.defineProperty({ __proto__: null, default: $ }, Symbol.toStringTag, { value: "Module" }));
export {
  j as _,
  $ as a
};
