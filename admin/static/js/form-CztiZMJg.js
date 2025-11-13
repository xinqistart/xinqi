import { A as g, R as _, t as b, K as p, q as h, S as v, _ as x, r as c, c as B, o as O, b as i, h as l, e as r, z as S, a_ as $ } from "./index-DAdfXJ2i.js";
import { g as y, p as V } from "./pointsconfig-Df6yTocn.js";
import { t as C } from "./pointsconfig-No0xAy1F.js";
const j = { setup() {
  const { proxy: e } = g(), o = _({ form: {}, tableOption: C });
  b(() => {
    var _a;
    const t = (_a = p()) == null ? void 0 : _a.permissions;
    o.tableOption.disabled = !(t["mall:pointsconfig:add"] || t["mall:pointsconfig:edit"]), o.tableOption.submitBtn = !!(t["mall:pointsconfig:add"] || t["mall:pointsconfig:edit"]), o.tableOption.emptyBtn = !!(t["mall:pointsconfig:add"] || t["mall:pointsconfig:edit"]), s();
  });
  const d = h(() => {
    var _a;
    const t = (_a = p()) == null ? void 0 : _a.permissions;
    return { addBtn: !!t["mall:pointsconfig:add"], delBtn: !!t["mall:pointsconfig:del"], editBtn: !!t["mall:pointsconfig:edit"], viewBtn: !!t["mall:pointsconfig:get"] };
  });
  function s() {
    y().then((t) => {
      o.form = t.data ? t.data : {};
    });
  }
  function m(t, n) {
    V(o.form).then((a) => {
      n(), o.form = a.data, e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      n();
    });
  }
  return { ...v(o), permissionList: d, handleGet: s, handleUpdate: m };
} }, k = { class: "execution" }, w = { class: "text-bold text-xl" };
function U(e, o, d, s, m, t) {
  const n = c("avue-form"), a = c("el-card"), f = $;
  return O(), B("div", k, [i(f, null, { default: l(() => [i(a, { class: "box-card" }, { header: l(() => [r("div", null, [r("div", w, S(e.$t("mall.pointsconfig.config")), 1), o[1] || (o[1] = r("div", { class: "jl-text-tips mt-1" }, " \u63D0\u793A: \u53EF\u5728\u6BCF\u4E2A\u5546\u54C1\u5355\u72EC\u8BBE\u7F6E\u4E0D\u540C\u7684\u62B5\u6263\u89C4\u5219. ", -1))])]), default: l(() => [i(n, { style: { padding: "20px", "padding-right": "80px", "margin-top": "20px" }, modelValue: e.form, "onUpdate:modelValue": o[0] || (o[0] = (u) => e.form = u), option: e.tableOption, onSubmit: s.handleUpdate, permission: s.permissionList }, null, 8, ["modelValue", "option", "onSubmit", "permission"])]), _: 1 })]), _: 1 })]);
}
const R = x(j, [["render", U], ["__scopeId", "data-v-10320e5a"]]);
export {
  R as default
};
