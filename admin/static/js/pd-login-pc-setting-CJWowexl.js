import _ from "./base-setting-BI1Sz0yX.js";
import { s as g } from "./useCompSettingHooks-BBSAXeOe.js";
import { _ as b, r as s, c as v, o as V, b as t, h as l, e as D, f as a, z as u } from "./index-DAdfXJ2i.js";
const S = g();
function I(o, e, y, j, w, B) {
  const n = s("el-radio"), i = s("el-radio-group"), d = s("el-form-item"), m = s("MaterialList"), f = s("el-form"), p = _;
  return V(), v("div", null, [t(p, null, { title: l(() => [...e[3] || (e[3] = [a("\u767B\u5F55\u9875\u9762\u8BBE\u7F6E", -1)])]), tip: l(() => [...e[4] || (e[4] = [])]), content: l(() => [t(f, { "label-position": "left", ref: "form", "label-width": "90px", model: o.formData }, { default: l(() => [t(d, { label: "\u5BBD\u5EA6\u8303\u56F4" }, { default: l(() => [t(i, { modelValue: o.formData.fullScreen, "onUpdate:modelValue": e[0] || (e[0] = (r) => o.formData.fullScreen = r) }, { default: l(() => [t(n, { value: "default" }, { default: l(() => [a(u(o.$t("mall.pagedevise.default")), 1)]), _: 1 }), t(n, { value: "fullScreen" }, { default: l(() => [a(u(o.$t("mall.pagedevise.fullscreen")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }), t(d, { label: "\u5BF9\u9F50\u65B9\u5F0F" }, { default: l(() => [t(i, { modelValue: o.formData.align, "onUpdate:modelValue": e[1] || (e[1] = (r) => o.formData.align = r) }, { default: l(() => [t(n, { value: "left" }, { default: l(() => [...e[5] || (e[5] = [a("\u5DE6\u8FB9", -1)])]), _: 1 }), t(n, { value: "center" }, { default: l(() => [...e[6] || (e[6] = [a("\u5C45\u4E2D", -1)])]), _: 1 }), t(n, { value: "right" }, { default: l(() => [...e[7] || (e[7] = [a("\u53F3\u8FB9", -1)])]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }), t(d, { label: "\u80CC\u666F\u56FE\u7247" }, { default: l(() => [t(m, { singleValue: o.formData.bgImage, "onUpdate:singleValue": e[2] || (e[2] = (r) => o.formData.bgImage = r), num: 1, "is-single": true, type: "image", width: 200, height: 100, shopId: o.shopId }, null, 8, ["singleValue", "shopId"])]), _: 1 }), e[8] || (e[8] = D("div", { class: "jl-text-tips" }, "\u63D0\u793A:\u9875\u9762\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u80CC\u666F\u56FE\u7247.", -1))]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const $ = b(S, [["render", I], ["__scopeId", "data-v-cabe45b4"]]), U = Object.freeze(Object.defineProperty({ __proto__: null, default: $ }, Symbol.toStringTag, { value: "Module" }));
export {
  U as _
};
