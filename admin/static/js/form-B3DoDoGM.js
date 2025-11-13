import { A as c, R as g, t as _, q as h, K as b, E as v, S as B, _ as y, r as m, c as S, o as V, b as i, h as r, e as f, z as $, a_ as w } from "./index-DAdfXJ2i.js";
import { g as C, p as O } from "./shopdepositconfig-wq2MNSiQ.js";
import { t as U } from "./shopdepositconfig-fw286n0T.js";
const k = { setup() {
  const { proxy: t } = c(), e = g({ defaults: {}, form: { enable: false }, tableOption: U });
  _(() => {
    o();
  });
  const d = h(() => {
    var _a;
    const s = (_a = b()) == null ? void 0 : _a.permissions;
    return { addBtn: !!s["mall:shopdepositconfig:add"], delBtn: !!s["mall:shopdepositconfig:del"], editBtn: !!s["mall:shopdepositconfig:edit"], viewBtn: !!s["mall:shopdepositconfig:get"] };
  });
  function o() {
    C().then((s) => {
      e.form = s.data ? s.data : {};
    });
  }
  function p(s, a) {
    O(e.form).then((n) => {
      a(), e.form = n.data, t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      a();
    });
  }
  return v(() => e.form.enable, (s, a) => {
    s == 0 ? e.defaults.amount.display = false : e.defaults.amount.display = true;
  }), { ...B(e), permissionList: d, handleGet: o, handleUpdate: p };
} }, x = { class: "clearfix" };
function j(t, e, d, o, p, s) {
  const a = m("avue-form"), n = m("el-card"), u = w;
  return V(), S("div", null, [i(u, null, { default: r(() => [i(n, { class: "box-card" }, { header: r(() => [f("div", x, [f("span", null, $(t.$t("mall.shopdepositconfig.config")), 1)])]), default: r(() => [i(a, { defaults: t.defaults, "onUpdate:defaults": e[0] || (e[0] = (l) => t.defaults = l), modelValue: t.form, "onUpdate:modelValue": e[1] || (e[1] = (l) => t.form = l), style: { "padding-left": "30px", "margin-top": "20px" }, option: t.tableOption, permission: o.permissionList, onSubmit: o.handleUpdate }, null, 8, ["defaults", "modelValue", "option", "permission", "onSubmit"])]), _: 1 })]), _: 1 })]);
}
const R = y(k, [["render", j]]);
export {
  R as default
};
