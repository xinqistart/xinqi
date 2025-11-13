import { n as g, A as _, R as b, t as h, q as x, K as v, ck as B, S, cl as y, _ as $, r as u, c as w, o as V, b as l, h as r, e as i, z as k, a_ as C } from "./index-DAdfXJ2i.js";
const { $t: t } = g(), L = { dialogDrag: true, indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 150, labelPosition: "left", column: [{ label: t("mall.imconfig.url"), prop: "url", span: 13, display: true, rules: [{ required: true, message: t("mall.imconfig.url") + t("commons.notNull"), trigger: "blur" }, { max: 200, message: t("commons.lengthTips", { length: 200 }) }] }, { label: t("mall.imconfig.secret"), prop: "secret", span: 13, display: true, rules: [{ required: true, message: t("mall.imconfig.secret") + t("commons.notNull"), trigger: "blur" }, { max: 200, message: t("commons.lengthTips", { length: 200 }) }] }] }, N = { setup() {
  const { proxy: n } = _(), s = b({ form: {}, tableOption: L });
  h(() => {
    o();
  });
  const m = x(() => {
    var _a;
    const e = (_a = v()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:imconfig:add"], delBtn: !!e["mall:imconfig:del"], editBtn: !!e["mall:imconfig:edit"], viewBtn: !!e["mall:imconfig:get"] };
  });
  function o() {
    B().then((e) => {
      s.form = e.data ? e.data : {};
    });
  }
  function c(e, a) {
    y(s.form).then(() => {
      a(), n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      a();
    });
  }
  return { ...S(s), permissionList: m, handleGet: o, handleUpdate: c };
} }, O = { class: "execution" }, q = { class: "clearfix" };
function I(n, s, m, o, c, e) {
  const a = u("avue-form"), d = u("el-card"), p = C;
  return V(), w("div", O, [l(p, null, { default: r(() => [l(d, { class: "box-card" }, { header: r(() => [i("div", q, [i("span", null, k(n.$t("mall.imconfig.title")), 1)])]), default: r(() => [l(a, { style: { "padding-left": "30px", "margin-top": "20px" }, modelValue: n.form, "onUpdate:modelValue": s[0] || (s[0] = (f) => n.form = f), option: n.tableOption, onSubmit: o.handleUpdate, permission: o.permissionList }, null, 8, ["modelValue", "option", "onSubmit", "permission"]), s[1] || (s[1] = i("br", null, null, -1))]), _: 1 })]), _: 1 })]);
}
const U = $(N, [["render", I], ["__scopeId", "data-v-4c29e482"]]);
export {
  U as default
};
