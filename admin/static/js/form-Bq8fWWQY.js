import { A as k, R as C, t as w, S as U, _ as j, r as s, c as u, o as p, b as t, h as a, e as l, f as _, z as r, a_ as O } from "./index-DAdfXJ2i.js";
import { t as B, g as N, p as I } from "./configstorage-L_cIw-iV.js";
const R = { setup() {
  const { proxy: e } = k(), o = C({ form: {}, tableOption: B });
  w(() => {
    c();
  });
  function c() {
    N().then((i) => {
      o.form = i.data ? i.data : {};
    });
  }
  function m(i, n) {
    I(o.form).then((d) => {
      n && n(), o.form = d.data, e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      n && n();
    });
  }
  return { ...U(o), handleGet: c, handleUpdate: m };
} }, T = { class: "clearfix" }, z = { class: "jl-text-tips" }, A = { key: 0, class: "mt-[-20px]" }, D = { key: 1 };
function E(e, o, c, m, i, n) {
  const d = s("el-radio"), b = s("el-radio-group"), g = s("el-form-item"), h = s("el-form"), v = s("avue-form"), y = s("el-button"), $ = s("el-row"), S = s("el-card"), V = O;
  return p(), u("div", null, [t(V, null, { default: a(() => [t(S, { class: "box-card" }, { header: a(() => [l("div", T, [l("span", null, r(e.$t("upms.configstorage.config")), 1)])]), default: a(() => [t(h, { "label-position": "left", class: "pl-[30px]" }, { default: a(() => [t(g, { label: e.$t("upms.configstorage.isSelf"), "label-width": "150", class: "mt-2" }, { default: a(() => [l("div", null, [t(b, { modelValue: e.form.isSelf, "onUpdate:modelValue": o[0] || (o[0] = (f) => e.form.isSelf = f) }, { default: a(() => [t(d, { value: "1" }, { default: a(() => [_(r(e.$t("commons.yes")), 1)]), _: 1 }), t(d, { value: "0" }, { default: a(() => [_(r(e.$t("commons.no")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"]), o[2] || (o[2] = l("br", null, null, -1)), l("div", z, r(e.$t("upms.configstorage.isSelfTip")), 1)])]), _: 1 }, 8, ["label"])]), _: 1 }), e.form.isSelf == "1" ? (p(), u("div", A, [t(v, { style: { "padding-left": "30px" }, modelValue: e.form, "onUpdate:modelValue": o[1] || (o[1] = (f) => e.form = f), option: e.tableOption, onSubmit: m.handleUpdate }, null, 8, ["modelValue", "option", "onSubmit"])])) : (p(), u("div", D, [t($, { justify: "center", style: { width: "100%" } }, { default: a(() => [t(y, { type: "primary", onClick: m.handleUpdate, icon: "Check" }, { default: a(() => [_(r(e.$t("commons.submit")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 })]))]), _: 1 })]), _: 1 })]);
}
const q = j(R, [["render", E], ["__scopeId", "data-v-89e25746"]]);
export {
  q as default
};
