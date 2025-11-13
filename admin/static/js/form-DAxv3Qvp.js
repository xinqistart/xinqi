import { aO as c, n as h, A as b, R as y, t as q, q as _, K as A, S as w, _ as S, r as d, c as x, o as v, b as s, h as p, e as i, z as I, a_ as B } from "./index-DAdfXJ2i.js";
function $() {
  return c.request("get", "/upms/thirdpartyconfig");
}
function R(t) {
  return c.request("put", "/upms/thirdpartyconfig", { data: t });
}
const { $t: e } = h(), O = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 150, labelPosition: "left", group: [{ icon: "el-icon-s-order", label: "QQ", prop: "group1", span: 13, column: [{ label: e("upms.thirdpartyconfig.qqAppId"), prop: "qqAppId", rules: [{ required: true, message: e("upms.thirdpartyconfig.qqAppIdRequired"), trigger: "blur" }] }, { label: e("upms.thirdpartyconfig.qqAppKey"), prop: "qqAppKey", rules: [{ required: true, message: e("upms.thirdpartyconfig.qqAppKeyRequired"), trigger: "blur" }] }] }, { icon: "el-icon-s-order", label: e("upms.thirdpartyconfig.wechat"), prop: "group2", span: 13, column: [{ label: e("upms.thirdpartyconfig.wechatAppId"), prop: "wxAppId", rules: [{ required: true, message: e("upms.thirdpartyconfig.wechatAppIdRequired"), trigger: "blur" }] }, { label: e("upms.thirdpartyconfig.wechatAppSecret"), prop: "wxAppSecret", rules: [{ required: true, message: e("upms.thirdpartyconfig.wechatAppSecretRequired"), trigger: "blur" }] }] }] }, V = { components: {}, setup() {
  const { proxy: t } = b(), o = y({ form: {}, tableOption: O });
  q(() => {
    a();
  });
  const l = _(() => {
    var _a;
    const r = (_a = A()) == null ? void 0 : _a.permissions;
    return { addBtn: !!r["mall:thirdpartyconfig:add"], delBtn: !!r["mall:thirdpartyconfig:del"], editBtn: !!r["mall:thirdpartyconfig:edit"], viewBtn: !!r["mall:thirdpartyconfig:get"] };
  });
  function a() {
    $().then((r) => {
      o.form = r.data ? r.data : {};
    });
  }
  function u(r, n) {
    R(o.form).then(() => {
      n(), t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      n();
    });
  }
  return { ...w(o), permissionList: l, handleGet: a, handleUpdate: u };
} }, C = { class: "clearfix" };
function K(t, o, l, a, u, r) {
  const n = d("avue-form"), m = d("el-card"), f = B;
  return v(), x("div", null, [s(f, null, { default: p(() => [s(m, { class: "box-card" }, { header: p(() => [i("div", C, [i("span", null, I(t.$t("upms.thirdpartyconfig.config")), 1)])]), default: p(() => [s(n, { style: { "padding-left": "30px", "margin-top": "20px" }, modelValue: t.form, "onUpdate:modelValue": o[0] || (o[0] = (g) => t.form = g), option: t.tableOption, onSubmit: a.handleUpdate, permission: a.permissionList }, null, 8, ["modelValue", "option", "onSubmit", "permission"]), o[1] || (o[1] = i("br", null, null, -1))]), _: 1 })]), _: 1 })]);
}
const k = S(V, [["render", K], ["__scopeId", "data-v-d93d9019"]]);
export {
  k as default
};
