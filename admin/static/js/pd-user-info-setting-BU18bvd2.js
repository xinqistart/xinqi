import f from "./base-setting-BI1Sz0yX.js";
import { s as _ } from "./useCompSettingHooks-BBSAXeOe.js";
import { _ as u, r as n, c as d, o as v, b as o, h as t, f as i, z as a } from "./index-DAdfXJ2i.js";
const g = _();
function b(e, l, h, S, w, y) {
  const s = n("el-switch"), r = n("el-form-item"), m = n("el-form"), c = f;
  return v(), d("div", null, [o(c, null, { title: t(() => [i(a(e.$t("mall.pagedevise.userProfile")), 1)]), tip: t(() => [i(a(e.$t("mall.pagedevise.userProfileTip")), 1)]), content: t(() => [o(m, { ref: "form", "label-position": "left", model: e.formData }, { default: t(() => [o(r, { label: e.$t("mall.pagedevise.signInPoints") }, { default: t(() => [o(s, { modelValue: e.formData.pointsSignBtn, "onUpdate:modelValue": l[0] || (l[0] = (p) => e.formData.pointsSignBtn = p), "active-text": e.$t("commons.yes"), "inactive-text": e.$t("commons.no"), "active-value": true, "inactive-value": false, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "active-text", "inactive-text"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const $ = u(g, [["render", b]]), D = Object.freeze(Object.defineProperty({ __proto__: null, default: $ }, Symbol.toStringTag, { value: "Module" }));
export {
  D as _
};
