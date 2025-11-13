import { aO as t, n as i } from "./index-DAdfXJ2i.js";
function d(r) {
  return t.request("get", "/upms/role/page", { params: r });
}
function a(r) {
  return t.request("get", "/upms/role/list", { params: r });
}
function g(r) {
  return t.request("post", "/upms/role", { data: r });
}
function c(r) {
  return t.request("put", "/upms/role", { data: r });
}
function b(r) {
  return t.request("delete", "/upms/role/" + r);
}
function f(r) {
  return t.request("put", "/upms/role/menu", { data: r });
}
function D(r) {
  return t.request("get", "/upms/menu/tree/" + r);
}
const { $t: e } = i(), u = (r, s, l) => {
  window.openType === "edit" ? l() : a({ roleName: s }).then((o) => {
    o.data.length > 0 ? l(new Error(e("upms.role.roleNameExists"))) : l();
  });
}, n = (r, s, l) => {
  window.openType === "edit" ? l() : a({ roleCode: s }).then((o) => {
    o.data.length > 0 ? l(new Error(e("upms.role.roleCodeExists"))) : l();
  });
}, h = { dialogDrag: true, index: true, indexLabel: e("commons.indexLabel"), indexWidth: 80, menuAlign: "center", align: "center", editBtn: false, delBtn: false, viewBtn: true, excelBtn: true, printBtn: false, menuType: "text", labelWidth: 130, searchMenuSpan: 6, labelPosition: "left", column: [{ label: e("upms.role.roleName"), prop: "roleName", span: 24, rules: [{ required: true, message: e("upms.role.roleName") + e("commons.notNull"), trigger: "blur" }, { min: 2, max: 20, message: e("commons.lengthRangeTip", { min: 2, max: 20 }), trigger: "blur" }, { validator: u, trigger: "blur" }] }, { label: e("upms.role.roleCode"), prop: "roleCode", span: 24, rules: [{ required: true, message: e("upms.role.roleCode") + e("commons.notNull"), trigger: "blur" }, { max: 20, message: e("commons.lengthTips", { length: 20 }), trigger: "blur" }, { validator: n, trigger: "blur" }] }, { label: e("upms.role.roleDesc"), prop: "roleDesc", overHidden: true, span: 24, rules: [{ required: true, message: e("upms.role.roleDesc") + e("commons.notNull"), trigger: "blur" }] }, { width: 180, label: e("upms.role.dsType"), prop: "dsType", type: "select", span: 24, sortable: true, rules: [{ required: true, message: e("upms.role.dsType") + e("commons.notNull"), trigger: "blur" }], dicData: [{ label: e("upms.role.all"), value: 0 }, { label: e("upms.role.custom"), value: 1 }, { label: e("upms.role.currentAndSub"), value: 2 }, { label: e("upms.role.current"), value: 3 }] }, { label: e("upms.role.dsScope"), prop: "dsScope", formslot: true, showColumn: false, labelTip: e("upms.role.diyRoleTip"), hide: true }, { label: e("commons.createTime"), prop: "createTime", type: "datetime", format: "YYYY-MM-DD HH:mm", valueFormat: "YYYY-MM-DD HH:mm:ss", editDisplay: false, addDisplay: false, sortable: true, span: 24 }] }, x = { dialogDrag: true, index: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", viewBtn: true, excelBtn: true, printBtn: false, menuType: "text", searchMenuSpan: 6, labelWidth: 130, column: [{ label: e("upms.role.roleName"), prop: "roleName", span: 24, rules: [{ required: true, message: e("upms.role.roleNameRequired"), trigger: "blur" }, { min: 3, max: 20, message: e("upms.role.roleNameLength"), trigger: "blur" }, { validator: u, trigger: "blur" }] }, { label: e("upms.role.roleCode"), prop: "roleCode", span: 24, editDisabled: true, rules: [{ required: true, message: e("upms.role.roleCodeRequired"), trigger: "blur" }, { min: 3, max: 20, message: e("upms.role.roleNameLength"), trigger: "blur" }, { validator: n, trigger: "blur" }] }, { label: e("upms.role.roleDescription"), prop: "roleDesc", overHidden: true, span: 24, rules: [{ required: true, message: e("upms.role.roleDescriptionRequired"), trigger: "blur" }] }, { label: e("commons.createTime"), prop: "createTime", type: "datetime", format: "YYYY-MM-DD HH:mm", valueFormat: "YYYY-MM-DD HH:mm:ss", editDisplay: false, addDisplay: false, sortable: true, span: 24 }] };
export {
  c as a,
  g as b,
  x as c,
  b as d,
  D as f,
  d as g,
  f as p,
  h as t
};
