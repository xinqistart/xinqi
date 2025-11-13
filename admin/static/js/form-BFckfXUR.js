import { aO as p, n as v, A as _, R as h, t as y, q as A, K as D, S, _ as x, r as u, c as B, o as T, b as i, h as s, e as m, z as $, a_ as q } from "./index-DAdfXJ2i.js";
import { M as w } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
function H() {
  return p.request("get", "/mall/mallconfig");
}
function L(e) {
  return p.request("put", "/mall/mallconfig", { data: e });
}
const { $t: t } = v(), O = { dialogDrag: true, indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 200, labelPosition: "left", column: [{ label: t("mall.mallconfig.notifyHost"), prop: "notifyHost", span: 13, display: true, rules: [{ required: true, message: t("mall.mallconfig.notifyHost") + t("commons.notNull"), trigger: "blur" }, { max: 200, message: t("commons.lengthTips", { length: 200 }) }], labelTip: t("mall.mallconfig.notifyHostTip") }, { label: t("mall.mallconfig.userDefaultAvatar"), prop: "userDefaultAvatar", span: 13, display: true, slot: true, rules: [{ required: true, message: t("mall.mallconfig.userDefaultAvatar") + t("commons.notNull"), trigger: "blur" }, { max: 200, message: t("commons.lengthTips", { length: 200 }) }], labelTip: t("mall.mallconfig.userDefaultAvatar") }] }, V = { components: { MaterialList: w }, setup() {
  const { proxy: e } = _(), a = h({ form: { userDefaultAvatar: "" }, tableOption: O });
  y(() => {
    o();
  });
  const c = A(() => {
    var _a;
    const l = (_a = D()) == null ? void 0 : _a.permissions;
    return { addBtn: !!l["mall:mallconfig:add"], delBtn: !!l["mall:mallconfig:del"], editBtn: !!l["mall:mallconfig:edit"], viewBtn: !!l["mall:mallconfig:get"] };
  });
  function o() {
    H().then((l) => {
      a.form = l.data ? l.data : {};
    });
  }
  function f(l, n) {
    L(a.form).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), n();
    }).catch(() => {
      n();
    });
  }
  return { ...S(a), permissionList: c, handleGet: o, handleUpdate: f };
} }, C = { class: "execution" }, M = { class: "clearfix" };
function N(e, a, c, o, f, l) {
  const n = u("material-list"), d = u("avue-form"), g = u("el-card"), b = q;
  return T(), B("div", C, [i(b, null, { default: s(() => [i(g, { class: "box-card" }, { header: s(() => [m("div", M, [m("span", null, $(e.$t("mall.mallconfig.title")), 1)])]), default: s(() => [i(d, { style: { "padding-left": "30px", "margin-top": "20px" }, modelValue: e.form, "onUpdate:modelValue": a[1] || (a[1] = (r) => e.form = r), option: e.tableOption, onSubmit: o.handleUpdate, permission: o.permissionList }, { userDefaultAvatar: s(() => [m("div", null, [i(n, { value: e.form.userDefaultAvatar ? [e.form.userDefaultAvatar] : [], onSureSuccess: a[0] || (a[0] = (r) => e.form.userDefaultAvatar = r ? r[0] : ""), type: "image", num: 1 }, null, 8, ["value"])])]), default: s(() => [a[2] || (a[2] = m("br", null, null, -1))]), _: 1 }, 8, ["modelValue", "option", "onSubmit", "permission"])]), _: 1 })]), _: 1 })]);
}
const E = x(V, [["render", N]]);
export {
  E as default
};
