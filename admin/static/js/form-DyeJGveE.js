import { A as B, R as h, t as y, K as u, q as U, S as O, _ as k, r as a, c as f, o as d, b as r, h as s, g as C, B as b, f as S, z as V, a_ as $ } from "./index-DAdfXJ2i.js";
import { g as w, p as L } from "./distributionconfig-DFgn2QpM.js";
import { t as M } from "./distributionconfig-BvZQ2smc.js";
import { M as N } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const j = { components: { MaterialList: N }, setup() {
  const { proxy: e } = B(), o = h({ form: void 0, tableOption: M });
  y(() => {
    var _a;
    const t = (_a = u()) == null ? void 0 : _a.permissions;
    o.tableOption.disabled = !(t["mall:distributionconfig:add"] || t["mall:distributionconfig:edit"]), o.tableOption.submitBtn = !!(t["mall:distributionconfig:add"] || t["mall:distributionconfig:edit"]), o.tableOption.emptyBtn = !!(t["mall:distributionconfig:add"] || t["mall:distributionconfig:edit"]), i();
  });
  const p = U(() => {
    var _a;
    const t = (_a = u()) == null ? void 0 : _a.permissions;
    return { addBtn: !!t["mall:distributionconfig:add"], delBtn: !!t["mall:distributionconfig:del"], editBtn: !!t["mall:distributionconfig:edit"], viewBtn: !!t["mall:distributionconfig:get"] };
  });
  function i() {
    w().then((t) => {
      o.form = t.data ? t.data : { picUrls: void 0 };
    });
  }
  function c(t, n) {
    L(o.form).then((l) => {
      n(), o.form = l.data, e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      n();
    });
  }
  return { ...O(o), permissionList: p, handleGet: i, handleUpdate: c };
} }, x = { key: 0 };
function z(e, o, p, i, c, t) {
  const n = a("el-text"), l = a("material-list"), g = a("avue-form"), _ = a("el-card"), v = $;
  return d(), f("div", null, [r(v, null, { default: s(() => [r(_, { class: "box-card" }, { header: s(() => [r(n, { size: "large", tag: "b" }, { default: s(() => [S(V(e.$t("mall.distributionconfig.distributionConfig")), 1)]), _: 1 })]), default: s(() => [e.form ? (d(), C(g, { key: 0, ref: "crud", modelValue: e.form, "onUpdate:modelValue": o[1] || (o[1] = (m) => e.form = m), style: { padding: "30px" }, option: e.tableOption, permission: i.permissionList, onSubmit: i.handleUpdate }, { picUrls: s(() => [e.form ? (d(), f("div", x, [r(l, { value: e.form.picUrls, "onUpdate:value": o[0] || (o[0] = (m) => e.form.picUrls = m), type: "image", num: 3 }, null, 8, ["value"])])) : b("", true)]), _: 1 }, 8, ["modelValue", "option", "permission", "onSubmit"])) : b("", true)]), _: 1 })]), _: 1 })]);
}
const P = k(j, [["render", z], ["__scopeId", "data-v-d3e13b0d"]]);
export {
  P as default
};
