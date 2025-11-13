import { A as g, R as _, t as v, K as p, q as B, S as h, _ as U, r as i, c as O, o as y, b as n, h as s, e as S, f as V, z as $, a_ as x } from "./index-DAdfXJ2i.js";
import { t as C, g as k, p as w } from "./balanceconfig-DCTcGE9V.js";
import { M as L } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const M = { components: { MaterialList: L }, setup() {
  const { proxy: t } = g(), a = _({ form: { picUrls: void 0 }, tableOption: C });
  v(() => {
    var _a;
    const e = (_a = p()) == null ? void 0 : _a.permissions;
    a.tableOption.disabled = !(e["mall:balanceconfig:add"] || e["mall:balanceconfig:edit"]), a.tableOption.submitBtn = !!(e["mall:balanceconfig:add"] || e["mall:balanceconfig:edit"]), a.tableOption.emptyBtn = !!(e["mall:balanceconfig:add"] || e["mall:balanceconfig:edit"]), o();
  });
  const c = B(() => {
    var _a;
    const e = (_a = p()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:balanceconfig:add"], delBtn: !!e["mall:balanceconfig:del"], editBtn: !!e["mall:balanceconfig:edit"], viewBtn: !!e["mall:balanceconfig:get"] };
  });
  function o() {
    k().then((e) => {
      a.form = e.data ? e.data : {};
    }).catch((e) => {
    });
  }
  function d(e, l) {
    w(a.form).then((r) => {
      l(), a.form = r.data, t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      l();
    });
  }
  return { ...h(a), permissionList: c, handleGet: o, handleUpdate: d };
} };
function N(t, a, c, o, d, e) {
  const l = i("el-text"), r = i("material-list"), f = i("avue-form"), u = i("el-card"), b = x;
  return y(), O("div", null, [n(b, null, { default: s(() => [n(u, { class: "box-card" }, { header: s(() => [n(l, { size: "large", tag: "b" }, { default: s(() => [V($(t.$t("mall.balanceconfig.set")), 1)]), _: 1 })]), default: s(() => [n(f, { ref: "crud", modelValue: t.form, "onUpdate:modelValue": a[1] || (a[1] = (m) => t.form = m), style: { padding: "30px" }, option: t.tableOption, permission: o.permissionList, onSubmit: o.handleUpdate }, { picUrls: s(() => [S("div", null, [n(r, { value: t.form.picUrls, "onUpdate:value": a[0] || (a[0] = (m) => t.form.picUrls = m), type: "image", num: 3 }, null, 8, ["value"])])]), _: 1 }, 8, ["modelValue", "option", "permission", "onSubmit"])]), _: 1 })]), _: 1 })]);
}
const H = U(M, [["render", N]]);
export {
  H as default
};
