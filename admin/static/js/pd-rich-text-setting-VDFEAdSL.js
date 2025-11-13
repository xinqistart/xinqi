import { _ as m } from "./BaseEditor-CKHWT0N2.js";
import g from "./base-setting-BI1Sz0yX.js";
import { s as v } from "./useCompSettingHooks-BBSAXeOe.js";
import { R as b, S as y, _ as $, r, c as T, o as h, b as a, h as o, f as l, z as s, e as d } from "./index-DAdfXJ2i.js";
const C = v({ components: { BaseEditor: m }, setup(e, t, u) {
  const i = b({ dialog: false });
  return { ...y(i) };
} }), V = { style: { "max-height": "700px", overflow: "auto" } }, B = { class: "mt-[0px]" };
function S(e, t, u, i, R, w) {
  const p = r("el-button"), _ = g, f = m, c = r("el-dialog");
  return h(), T("div", null, [a(_, null, { title: o(() => [l(s(e.$t("mall.pagedevise.richText")), 1)]), tip: o(() => [l(s(e.$t("mall.pagedevise.richTextTip")), 1)]), content: o(() => [a(p, { class: "mt-1", onClick: t[0] || (t[0] = (n) => e.dialog = true) }, { default: o(() => [l(s(e.$t("mall.pagedevise.editContent")), 1)]), _: 1 })]), _: 1 }), a(c, { modelValue: e.dialog, "onUpdate:modelValue": t[3] || (t[3] = (n) => e.dialog = n), width: "80%", "append-to-body": true, top: "10px" }, { footer: o(() => [d("div", B, [a(p, { type: "primary", onClick: t[2] || (t[2] = (n) => e.dialog = false) }, { default: o(() => [l(s(e.$t("buttons.pureConfirm")), 1)]), _: 1 })])]), default: o(() => [d("div", V, [a(f, { value: e.formData.content, "onUpdate:value": t[1] || (t[1] = (n) => e.formData.content = n), shopId: e.shopId, clientType: e.clientType }, null, 8, ["value", "shopId", "clientType"])])]), _: 1 }, 8, ["modelValue"])]);
}
const k = $(C, [["render", S]]), j = Object.freeze(Object.defineProperty({ __proto__: null, default: k }, Symbol.toStringTag, { value: "Module" }));
export {
  j as _
};
