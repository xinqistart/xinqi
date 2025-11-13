import { A as u, R as _, t as b, S as g, _ as h, r as d, c as v, o as $, b as c, h as l, e as m, z as O, a_ as S } from "./index-DAdfXJ2i.js";
import { a as V, g as x, p as y } from "./configstorage-L_cIw-iV.js";
const C = { setup() {
  const { proxy: e } = u(), t = _({ form: {}, tableOption: V });
  b(() => {
    o();
  });
  function o() {
    x().then((a) => {
      t.form = a.data ? a.data : {};
    });
  }
  function n(a, s) {
    y(t.form).then((r) => {
      s(), t.form = r.data, e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      s();
    });
  }
  return { ...g(t), handleGet: o, handleUpdate: n };
} }, B = { class: "clearfix" };
function U(e, t, o, n, a, s) {
  const r = d("avue-form"), p = d("el-card"), f = S;
  return $(), v("div", null, [c(f, null, { default: l(() => [c(p, { class: "box-card" }, { header: l(() => [m("div", B, [m("span", null, O(e.$t("upms.configstorage.config")), 1)])]), default: l(() => [c(r, { modelValue: e.form, "onUpdate:modelValue": t[0] || (t[0] = (i) => e.form = i), style: { "padding-left": "30px" }, option: e.tableOption, onSubmit: n.handleUpdate }, null, 8, ["modelValue", "option", "onSubmit"])]), _: 1 })]), _: 1 })]);
}
const w = h(C, [["render", U], ["__scopeId", "data-v-2f3e98b0"]]);
export {
  w as default
};
