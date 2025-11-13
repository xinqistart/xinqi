import { aO as d, n as h, A as S, R as y, q as k, K as v, S as q, _ as T, r as l, c as B, o as N, b as s, h as r, e as c, z as I, f as u, a_ as $ } from "./index-DAdfXJ2i.js";
function V() {
  return d.request("get", "/weixin/wxcomponentconfig");
}
function C(o) {
  return d.request("put", "/weixin/wxcomponentconfig", { data: o });
}
const { $t: e } = h(), K = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 200, labelPosition: "left", column: [{ label: e("wxcomponent.wxcomponentconfig.appId"), labelTip: "\u5FAE\u4FE1\u7B2C\u4E09\u65B9\u5E73\u53F0APPID", prop: "appId", span: 13, rules: [{ required: true, message: e("wxcomponent.wxcomponentconfig.appId") + e("commons.notNull"), trigger: "blur" }] }, { label: e("wxcomponent.wxcomponentconfig.appSecret"), labelTip: "\u5FAE\u4FE1\u7B2C\u4E09\u65B9\u5E73\u53F0AppSecret", prop: "appSecret", span: 13, rules: [{ required: true, message: e("wxcomponent.wxcomponentconfig.appSecret") + e("commons.notNull"), trigger: "blur" }] }, { label: e("wxcomponent.wxcomponentconfig.token"), labelTip: "\u5BF9\u5E94\u5FAE\u4FE1\u7B2C\u4E09\u65B9\u5E73\u53F0\u6D88\u606F\u6821\u9A8CToken", prop: "token", span: 13, rules: [{ required: true, message: e("wxcomponent.wxcomponentconfig.token") + e("commons.notNull"), trigger: "blur" }] }, { label: e("wxcomponent.wxcomponentconfig.aesKey"), labelTip: "\u5BF9\u5E94\u5FAE\u4FE1\u7B2C\u4E09\u65B9\u5E73\u53F0\u6D88\u606F\u52A0\u89E3\u5BC6Key", prop: "aesKey", span: 13, rules: [{ required: true, message: e("wxcomponent.wxcomponentconfig.aesKey") + e("commons.notNull"), trigger: "blur" }] }] }, O = { components: {}, setup() {
  const { proxy: o } = S(), n = y({ form: {}, tableOption: K });
  a();
  const i = k(() => {
    var _a;
    const t = (_a = v()) == null ? void 0 : _a.permissions;
    return { addBtn: !!t["mall:wxcomponentconfig:add"], delBtn: !!t["mall:wxcomponentconfig:del"], editBtn: !!t["mall:wxcomponentconfig:edit"], viewBtn: !!t["mall:wxcomponentconfig:get"] };
  });
  function a() {
    V().then((t) => {
      n.form = t.data ? t.data : {};
    });
  }
  function m(t, p) {
    C(n.form).then(() => {
      p(), o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      p();
    });
  }
  return { ...q(n), permissionList: i, handleGet: a, handleUpdate: m };
} }, A = { class: "execution" }, L = { class: "clearfix" }, P = { class: "jl-text-tips mt-[5px]" };
function R(o, n, i, a, m, t) {
  const p = l("TopRight"), f = l("el-icon"), g = l("el-link"), x = l("avue-form"), w = l("el-card"), _ = $;
  return N(), B("div", A, [s(_, null, { default: r(() => [s(w, { class: "box-card" }, { header: r(() => [c("div", L, [c("span", null, I(o.$t("wxcomponent.wxcomponentconfig.config")), 1)]), c("div", P, [n[2] || (n[2] = u(" \u63D0\u793A:\u5FAE\u4FE1\u6A21\u5757\u7684\u516C\u4F17\u53F7\u548C\u5C0F\u7A0B\u5E8F\u6258\u7BA1\u5230\u672C\u7CFB\u7EDF\u7BA1\u7406\u7684\u5FC5\u987B\u914D\u7F6E.", -1)), s(g, { type: "primary", href: "https://open.weixin.qq.com/cgi-bin/frame?t=home/wx_plugin_tmpl&lang=zh_CN", target: "_blank" }, { default: r(() => [n[1] || (n[1] = u("\u5FAE\u4FE1\u7B2C\u4E09\u65B9\u5E73\u53F0\u8BF4\u660E", -1)), s(f, null, { default: r(() => [s(p)]), _: 1 })]), _: 1 })])]), default: r(() => [s(x, { modelValue: o.form, "onUpdate:modelValue": n[0] || (n[0] = (b) => o.form = b), style: { "padding-left": "30px", "margin-top": "20px" }, option: o.tableOption, permission: a.permissionList, onSubmit: a.handleUpdate }, null, 8, ["modelValue", "option", "permission", "onSubmit"]), n[3] || (n[3] = c("br", null, null, -1))]), _: 1 })]), _: 1 })]);
}
const D = T(O, [["render", R], ["__scopeId", "data-v-dda231c0"]]);
export {
  D as default
};
