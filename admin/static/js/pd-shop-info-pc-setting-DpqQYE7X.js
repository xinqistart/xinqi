import c from "./base-setting-BI1Sz0yX.js";
import b from "./color-picker-select-B039aU8e.js";
import { s as v } from "./useCompSettingHooks-BBSAXeOe.js";
import { _ as S, r as n, c as V, o as d, b as l, h as o, g as $, B as D, f as p, z as r, e as k } from "./index-DAdfXJ2i.js";
const C = v(), y = { class: "padding-top-xs" };
function B(e, a, N, h, z, O) {
  const m = n("el-radio"), i = n("el-radio-group"), s = n("el-form-item"), u = b, f = n("el-input"), _ = n("el-form"), g = c;
  return d(), V("div", null, [l(g, null, { title: o(() => [p(r(e.$t("mall.pagedevise.shopInfo")), 1)]), tip: o(() => [k("div", y, r(e.$t("mall.pagedevise.shopInfoTip")), 1)]), content: o(() => [l(_, { ref: "form", "label-position": "left", "label-width": "90px", model: e.formData }, { default: o(() => [l(s, { label: e.$t("mall.pagedevise.tiling") }, { default: o(() => [l(i, { modelValue: e.formData.fullScreen, "onUpdate:modelValue": a[0] || (a[0] = (t) => e.formData.fullScreen = t) }, { default: o(() => [l(m, { value: "default" }, { default: o(() => [p(r(e.$t("mall.pagedevise.default")), 1)]), _: 1 }), l(m, { value: "fullScreen" }, { default: o(() => [p(r(e.$t("mall.pagedevise.fullscreen")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), e.currentCompIndex != -1 ? (d(), $(s, { key: 0, label: e.$t("mall.pagedevise.bgColor") }, { default: o(() => [l(u, { bgValue: e.formData.background, onOnChange: a[1] || (a[1] = (t) => e.formData.background = t) }, null, 8, ["bgValue"])]), _: 1 }, 8, ["label"])) : D("", true), l(s, { label: e.$t("mall.pagedevise.pageSpacing") }, { default: o(() => [l(f, { modelValue: e.formData.pageSpacing, "onUpdate:modelValue": a[2] || (a[2] = (t) => e.formData.pageSpacing = t), size: "small", type: "number", placeholder: e.$t("mall.pagedevise.pageSpacing") }, { append: o(() => [...a[3] || (a[3] = [p("px", -1)])]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const I = S(C, [["render", B]]), U = Object.freeze(Object.defineProperty({ __proto__: null, default: I }, Symbol.toStringTag, { value: "Module" }));
export {
  U as _
};
