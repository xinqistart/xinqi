import { _ as g } from "./base-show-pnQX27ct.js";
import { s as u } from "./useCompShowHooks-DgYh5gcW.js";
import { R as f, S as R, _ as b, g as $, o as n, h as w, e as a, V as r, x as e, c as D, F as y, v, z as h } from "./index-DAdfXJ2i.js";
const z = u({ setup: (t, s, l) => {
  const i = f({ ...l, show: false });
  function p() {
    i.show = false;
  }
  return { ...R(i), onClickFn: p };
} }), B = ["src"], L = ["src"];
function S(t, s, l, i, p, k) {
  const d = g;
  return n(), $(d, { styles: t.setData.styles, class: "float-btn", style: e({ ...t.setBgStyle(t.setData.background), width: `${t.setData.width}px`, height: `${t.setData.height}px`, left: t.setData.left || t.setData.left == 0 ? `${t.setData.left}px` : "", right: t.setData.right || t.setData.right == 0 ? `${t.setData.right}px` : "", bottom: t.setData.bottom || t.setData.bottom == 0 ? `${t.setData.bottom}px` : "", top: t.setData.top || t.setData.top == 0 ? `${t.setData.top}px` : "", borderBottomLeftRadius: `${t.setData.bottomLeftRadius}px`, borderTopRightRadius: `${t.setData.topRightRadius}px`, borderTopLeftRadius: `${t.setData.topLeftRadius}px`, borderBottomRightRadius: `${t.setData.bottomRightRadius}px` }) }, { default: w(() => [a("div", { class: r({ mark: t.setData.show == "1" }), onClick: s[0] || (s[0] = (o) => t.setData.show == "0") }, null, 2), a("div", { class: r(t.setData.show == "1" ? "list-active" : "list"), style: e({ bottom: t.setData.height || t.setData.height == 0 ? `${t.setData.height}px` : "" }) }, [(n(true), D(y, null, v(t.setData.itemList, (o, m) => (n(), D("div", { class: r(["list-item", { show: t.setData.show == "1" }]), style: e({ ...t.setBgStyle(t.setData.background), width: `${t.setData.width}px`, height: `${t.setData.height}px`, marginBottom: `${t.setData.itemMarginBottom}px`, borderBottomLeftRadius: `${t.setData.bottomLeftRadius}px`, borderTopRightRadius: `${t.setData.topRightRadius}px`, borderTopLeftRadius: `${t.setData.topLeftRadius}px`, borderBottomRightRadius: `${t.setData.bottomRightRadius}px` }), key: m }, [a("img", { class: "icon", src: o.imageUrl, style: e({ width: parseInt(t.setData.size) + "px", height: parseInt(t.setData.size) + "px" }) }, null, 12, B), a("span", { class: "name", style: e({ fontSize: t.setData.fontSize + "px", color: t.setData.textColor, marginTop: o.content ? "4px" : "" }) }, h(o.content), 5)], 6))), 128))], 6), a("div", { class: "list-item show no-mb", onClick: s[1] || (s[1] = (o) => t.setData.show = t.setData.show == "1" ? "0" : "1") }, [a("img", { class: "icon", style: e({ width: parseInt(t.setData.size) + "px", height: parseInt(t.setData.size) + "px" }), src: t.setData.show == "1" ? t.isURLIcon(t.setData.closeIcon) : t.isURLIcon(t.setData.openIcon) }, null, 12, L), a("span", { class: "name", style: e({ fontSize: t.setData.fontSize + "px", color: t.setData.textColor, marginTop: t.setData.closeText || t.setData.openText ? "4px" : "" }) }, h(t.setData.show == "1" ? t.setData.closeText : t.setData.openText), 5)])]), _: 1 }, 8, ["styles", "style"]);
}
const T = b(z, [["render", S], ["__scopeId", "data-v-e5975c11"]]), U = Object.freeze(Object.defineProperty({ __proto__: null, default: T }, Symbol.toStringTag, { value: "Module" }));
export {
  T as _,
  U as a
};
