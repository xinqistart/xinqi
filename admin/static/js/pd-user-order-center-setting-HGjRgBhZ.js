import _ from "./base-setting-BI1Sz0yX.js";
import d from "./color-picker-select-B039aU8e.js";
import { n as g, _ as b, r as m, c as C, o as D, b as t, h as a, f as c, z as V } from "./index-DAdfXJ2i.js";
import { s as v } from "./useCompSettingHooks-BBSAXeOe.js";
const { $t: $ } = g(), w = v({ setup(e, o, n) {
  function s() {
    n.formData.rowNum === 4 ? n.formData.menus.length === 5 && n.formData.menus.splice(4, 1) : n.formData.menus.length === 4 && n.formData.menus.push({ imageUrl: "", pageUrl: "", name: $("mall.pagedevise.title") });
  }
  return { rowNumChange: s };
} });
function O(e, o, n, s, h, y) {
  const i = d, r = m("el-form-item"), p = m("el-input"), u = m("el-form"), f = _;
  return D(), C("div", null, [t(f, null, { title: a(() => [c(V(e.$t("mall.pagedevise.orderCenter")), 1)]), content: a(() => [t(u, { ref: "form", "label-position": "left", model: e.formData }, { default: a(() => [t(r, { "label-width": "90px", label: e.$t("mall.pagedevise.textColor") }, { default: a(() => [t(i, { bgValue: e.formData.textColor, "onUpdate:bgValue": o[0] || (o[0] = (l) => e.formData.textColor = l), useType: "pure", onOnChange: o[1] || (o[1] = (l) => e.formData.textColor = l) }, null, 8, ["bgValue"])]), _: 1 }, 8, ["label"]), t(r, { "label-width": "90px", label: e.$t("mall.pagedevise.title") }, { default: a(() => [t(p, { modelValue: e.formData.title, "onUpdate:modelValue": o[2] || (o[2] = (l) => e.formData.title = l), size: "small" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(r, { "label-width": "90px", label: e.$t("mall.pagedevise.titleColor") }, { default: a(() => [t(i, { bgValue: e.formData.titleColor, onOnChange: o[3] || (o[3] = (l) => e.formData.titleColor = l) }, null, 8, ["bgValue"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const U = b(w, [["render", O]]), T = Object.freeze(Object.defineProperty({ __proto__: null, default: U }, Symbol.toStringTag, { value: "Module" }));
export {
  T as _
};
