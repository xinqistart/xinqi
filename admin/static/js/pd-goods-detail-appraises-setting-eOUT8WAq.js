import d from "./base-setting-BI1Sz0yX.js";
import { s as u } from "./useCompSettingHooks-BBSAXeOe.js";
import { _, r as a, c as f, o as b, b as t, h as l, f as c, z as g } from "./index-DAdfXJ2i.js";
const D = u();
function v(e, o, $, h, y, N) {
  const s = a("el-input"), m = a("el-form-item"), r = a("el-input-number"), i = a("el-form"), p = d;
  return b(), f("div", null, [t(p, null, { title: l(() => [c(g(e.$t("mall.pagedevise.goodsDetailAppraises2")), 1)]), content: l(() => [t(i, { ref: "form", "label-position": "left", model: e.formData, "label-width": "70" }, { default: l(() => [t(m, { label: e.$t("mall.pagedevise.titleText") }, { default: l(() => [t(s, { modelValue: e.formData.title, "onUpdate:modelValue": o[0] || (o[0] = (n) => e.formData.title = n), type: "text", placeholder: e.$t("mall.pagedevise.titleText") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), t(m, { label: e.$t("mall.pagedevise.goodsDetailNumber") }, { default: l(() => [t(r, { modelValue: e.formData.showNum, "onUpdate:modelValue": o[1] || (o[1] = (n) => e.formData.showNum = n), size: "small", type: "number", placeholder: "0", min: 0, max: 10 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const V = _(D, [["render", v]]), z = Object.freeze(Object.defineProperty({ __proto__: null, default: V }, Symbol.toStringTag, { value: "Module" }));
export {
  z as _
};
