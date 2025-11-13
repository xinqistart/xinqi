import { _ } from "./base-show-pnQX27ct.js";
import { s as p } from "./useCompShowHooks-DgYh5gcW.js";
import { R as d, S as u, _ as b, g as f, o, h, e as a, x as r, V as m, c as i, F as v, v as g, w as y, z as w, D as S } from "./index-DAdfXJ2i.js";
const D = p({ setup() {
  const e = d({ navCur: 0, tabbarItem: [] }), n = (t) => {
    if (!t) return t;
    if (t.startsWith("/")) return t = `${t}`, new URL(t, import.meta.url).href;
    if (t.startsWith("http")) return t;
  };
  return { ...u(e), getAssetsFile: n };
} }), B = { class: "cuIcon-cu-image" }, C = ["src"];
function F(e, n, t, $, k, z) {
  const l = _;
  return o(), f(l, { styles: e.setData.styles }, { default: h(() => [a("div", { class: m(["cu-bar tabbar cp-tab-bar bg-white", e.preview ? "" : "foot"]), style: r(e.setData.styles) }, [(o(true), i(v, null, g(e.setData.tabbarItem, (s, c) => y((o(), i("div", { key: c, class: "action" }, [a("div", B, [a("img", { style: r(s.imageStyle), src: e.navCur == s.index ? e.getAssetsFile(s.selectedIconPath) : e.getAssetsFile(s.iconPath) }, null, 12, C)]), a("div", { style: r([{ color: e.navCur == s.index ? e.setData.tabBarStyle.selectedColor : e.setData.tabBarStyle.color }]) }, w(s.text), 5)])), [[S, s.visible]])), 128))], 6)]), _: 1 }, 8, ["styles"]);
}
const I = b(D, [["render", F], ["__scopeId", "data-v-7d9cf9a1"]]), j = Object.freeze(Object.defineProperty({ __proto__: null, default: I }, Symbol.toStringTag, { value: "Module" }));
export {
  I as _,
  j as a
};
