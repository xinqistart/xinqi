import { A as x, R as v, t as $, S as w, _ as V, r as a, c as k, o as S, b as e, h as n, e as c, f, z as m, a_ as C } from "./index-DAdfXJ2i.js";
import { g as O, p as R } from "./configeditor-CYxVeM-q.js";
import { t as B } from "./configeditor-BZawu1jk.js";
const D = { setup() {
  const { proxy: o } = x(), t = v({ form: {}, tableOption: B });
  $(() => {
    r();
  });
  function r() {
    O().then((s) => {
      t.form = s.data ? s.data : {};
    });
  }
  function i(s, l) {
    R(t.form).then((p) => {
      l(), t.form = p.data, o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      l();
    });
  }
  return { ...w(t), handleGet: r, handleUpdate: i };
} }, N = { class: "clearfix" }, T = { class: "flex items-center ml-[140px] text-gray-500" }, U = { class: "mx-[5px]" };
function j(o, t, r, i, s, l) {
  const p = a("avue-form"), _ = a("el-icon-warning"), d = a("el-icon"), u = a("TopRight"), g = a("el-link"), h = a("el-card"), y = C;
  return S(), k("div", null, [e(y, { style: { "box-shadow": "none" } }, { default: n(() => [e(h, { class: "box-card" }, { header: n(() => [c("div", N, [c("span", null, m(o.$t("upms.configeditor.config")), 1)])]), default: n(() => [e(p, { style: { "padding-left": "30px", "margin-top": "20px" }, modelValue: o.form, "onUpdate:modelValue": t[0] || (t[0] = (b) => o.form = b), option: o.tableOption, onSubmit: i.handleUpdate }, null, 8, ["modelValue", "option", "onSubmit"]), c("div", T, [e(d, { size: "13" }, { default: n(() => [e(_)]), _: 1 }), c("span", U, [f(m(o.$t("pay.payconfig.officialDocs2")) + " ", 1), e(g, { type: "primary", href: "https://froala.com/wysiwyg-editor/docs/overview/", target: "_blank" }, { default: n(() => [f(m(o.$t("pay.payconfig.officialDocs")), 1), e(d, null, { default: n(() => [e(u)]), _: 1 })]), _: 1 })])])]), _: 1 })]), _: 1 })]);
}
const G = V(D, [["render", j]]);
export {
  G as default
};
