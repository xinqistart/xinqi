import f from "./base-setting-BI1Sz0yX.js";
import { s as c } from "./useCompSettingHooks-BBSAXeOe.js";
import { _ as g, r as l, c as b, o as v, b as o, h as t, f as r, z as i } from "./index-DAdfXJ2i.js";
const D = c();
function $(e, a, h, w, S, y) {
  const m = l("el-radio"), d = l("el-radio-group"), s = l("el-form-item"), p = l("el-input"), _ = l("el-form"), u = f;
  return v(), b("div", null, [o(u, null, { title: t(() => [r(i(e.$t("mall.pagedevise.goodsDetailiIntroduce")), 1)]), content: t(() => [o(_, { ref: "form", "label-width": "90", "label-position": "left", model: e.formData }, { default: t(() => [o(s, { label: e.$t("mall.pagedevise.titleDisplay") }, { default: t(() => [o(d, { modelValue: e.formData.titleShow, "onUpdate:modelValue": a[0] || (a[0] = (n) => e.formData.titleShow = n) }, { default: t(() => [o(m, { value: "1" }, { default: t(() => [r(i(e.$t("commons.show")), 1)]), _: 1 }), o(m, { value: "0" }, { default: t(() => [r(i(e.$t("commons.gone")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(s, { "label-width": "90", label: e.$t("mall.pagedevise.titleText") }, { default: t(() => [o(p, { modelValue: e.formData.title, "onUpdate:modelValue": a[1] || (a[1] = (n) => e.formData.title = n), type: "text", placeholder: e.$t("mall.pagedevise.titleText") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const V = g(D, [["render", $]]), z = Object.freeze(Object.defineProperty({ __proto__: null, default: V }, Symbol.toStringTag, { value: "Module" }));
export {
  z as _
};
