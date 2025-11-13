import { aO as c, n as b, A as _, R as S, t as h, q as v, K as N, S as w, _ as x, r as p, c as B, o as q, b as l, h as m, e as i, z as $, a_ as U } from "./index-DAdfXJ2i.js";
function y() {
  return c.request("get", "/upms/emailconfig");
}
function O(s) {
  return c.request("put", "/upms/emailconfig", { data: s });
}
const { $t: e } = b(), P = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 180, labelPosition: "left", column: [{ label: e("upms.emailconfig.mailSmtpHost"), prop: "mailSmtpHost", span: 13, rules: [{ required: true, message: e("upms.emailconfig.mailSmtpHost") + e("commons.notNull"), trigger: "blur" }] }, { label: e("upms.emailconfig.mailSmtpUsername"), prop: "mailSmtpUsername", span: 13, rules: [{ required: true, message: e("upms.emailconfig.mailSmtpUsername") + e("commons.notNull"), trigger: "blur" }] }, { label: e("upms.emailconfig.mailSmtpPassword"), prop: "mailSmtpPassword", span: 13, rules: [{ required: true, message: e("upms.emailconfig.mailSmtpPassword") + e("commons.notNull"), trigger: "blur" }] }, { label: e("upms.emailconfig.siteName"), prop: "siteName", span: 13, rules: [{ required: true, message: e("upms.emailconfig.siteName") + e("commons.notNull"), trigger: "blur" }] }] }, V = { components: {}, setup() {
  const { proxy: s } = _(), a = S({ form: {}, tableOption: P });
  h(() => {
    n();
  });
  const r = v(() => {
    var _a;
    const t = (_a = N()) == null ? void 0 : _a.permissions;
    return { addBtn: !!t["mall:emailconfig:add"], delBtn: !!t["mall:emailconfig:del"], editBtn: !!t["mall:emailconfig:edit"], viewBtn: !!t["mall:emailconfig:get"] };
  });
  function n() {
    y().then((t) => {
      a.form = t.data ? t.data : {};
    });
  }
  function u(t, o) {
    O(a.form).then(() => {
      o(), s.$message({ showClose: true, message: s.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      o();
    });
  }
  return { ...w(a), permissionList: r, handleGet: n, handleUpdate: u };
} }, C = { class: "clearfix" };
function H(s, a, r, n, u, t) {
  const o = p("avue-form"), d = p("el-card"), f = U;
  return q(), B("div", null, [l(f, null, { default: m(() => [l(d, { class: "box-card" }, { header: m(() => [i("div", C, [i("span", null, $(s.$t("upms.emailconfig.config")), 1)])]), default: m(() => [l(o, { style: { "padding-left": "30px", "margin-top": "20px" }, modelValue: s.form, "onUpdate:modelValue": a[0] || (a[0] = (g) => s.form = g), option: s.tableOption, onSubmit: n.handleUpdate, permission: n.permissionList }, null, 8, ["modelValue", "option", "onSubmit", "permission"]), a[1] || (a[1] = i("br", null, null, -1))]), _: 1 })]), _: 1 })]);
}
const k = x(V, [["render", H], ["__scopeId", "data-v-2a9eeee2"]]);
export {
  k as default
};
