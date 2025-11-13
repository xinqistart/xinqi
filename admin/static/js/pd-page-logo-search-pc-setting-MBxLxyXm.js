import g from "./base-setting-BI1Sz0yX.js";
import c from "./color-picker-select-B039aU8e.js";
import { s as b } from "./useCompSettingHooks-BBSAXeOe.js";
import { _ as v, r as a, c as S, o as p, b as l, h as o, g as $, B as V, f as n, z as m } from "./index-DAdfXJ2i.js";
const k = b();
function C(e, t, y, B, N, O) {
  const s = a("el-radio"), u = a("el-radio-group"), d = a("el-form-item"), i = c, _ = a("el-form"), f = g;
  return p(), S("div", null, [l(f, null, { title: o(() => [n(m(e.$t("mall.pagedevise.homeLogoAndSearch")), 1)]), tip: o(() => [...t[2] || (t[2] = [n(" \u63D0\u793A: logo\u548C\u540D\u79F0\u4E0E\u9875\u9762\u914D\u7F6E\u5185\u5BB9\u4E00\u81F4. ", -1)])]), content: o(() => [l(_, { ref: "form", "label-width": "70px", "label-position": "left", model: e.formData }, { default: o(() => [l(d, { label: e.$t("mall.pagedevise.tiling") }, { default: o(() => [l(u, { modelValue: e.formData.fullScreen, "onUpdate:modelValue": t[0] || (t[0] = (r) => e.formData.fullScreen = r) }, { default: o(() => [l(s, { value: "default" }, { default: o(() => [n(m(e.$t("mall.pagedevise.default")), 1)]), _: 1 }), l(s, { value: "fullScreen" }, { default: o(() => [n(m(e.$t("mall.pagedevise.fullscreen")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), e.currentCompIndex != -1 ? (p(), $(d, { key: 0, label: e.$t("mall.pagedevise.bgColor") }, { default: o(() => [l(i, { bgValue: e.formData.background, onOnChange: t[1] || (t[1] = (r) => e.formData.background = r) }, null, 8, ["bgValue"])]), _: 1 }, 8, ["label"])) : V("", true)]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const D = v(k, [["render", C]]), z = Object.freeze(Object.defineProperty({ __proto__: null, default: D }, Symbol.toStringTag, { value: "Module" }));
export {
  z as _
};
