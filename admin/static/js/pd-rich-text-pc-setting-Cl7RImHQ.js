import { _ as u } from "./BaseEditor-CKHWT0N2.js";
import g from "./base-setting-BI1Sz0yX.js";
import { s as v } from "./useCompSettingHooks-BBSAXeOe.js";
import { R as b, S as y, _ as $, r, c as T, o as C, b as a, h as o, f as s, z as l, e as d } from "./index-DAdfXJ2i.js";
const V = v({ components: { BaseEditor: u }, setup(e, t, m) {
  const i = b({ dialog: false });
  return { ...y(i) };
} }), h = { style: { "max-height": "700px", overflow: "auto" } }, B = { class: "mt-[0px]" };
function S(e, t, m, i, R, w) {
  const p = r("el-button"), _ = g, f = u, c = r("el-dialog");
  return C(), T("div", null, [a(_, null, { title: o(() => [s(l(e.$t("mall.pagedevise.richText")), 1)]), content: o(() => [a(p, { class: "mt-1", onClick: t[0] || (t[0] = (n) => e.dialog = true) }, { default: o(() => [s(l(e.$t("mall.pagedevise.editContent")), 1)]), _: 1 })]), _: 1 }), a(c, { modelValue: e.dialog, "onUpdate:modelValue": t[3] || (t[3] = (n) => e.dialog = n), width: "80%", "append-to-body": true, top: "10px" }, { footer: o(() => [d("div", B, [a(p, { type: "primary", onClick: t[2] || (t[2] = (n) => e.dialog = false) }, { default: o(() => [s(l(e.$t("buttons.pureConfirm")), 1)]), _: 1 })])]), default: o(() => [d("div", h, [a(f, { value: e.formData.content, "onUpdate:value": t[1] || (t[1] = (n) => e.formData.content = n), shopId: e.shopId, clientType: e.clientType }, null, 8, ["value", "shopId", "clientType"])])]), _: 1 }, 8, ["modelValue"])]);
}
const k = $(V, [["render", S]]), j = Object.freeze(Object.defineProperty({ __proto__: null, default: k }, Symbol.toStringTag, { value: "Module" }));
export {
  j as _
};
