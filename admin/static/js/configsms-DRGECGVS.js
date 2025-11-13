import { aO as t, n as a } from "./index-DAdfXJ2i.js";
function n(s) {
  return t.request("get", "/upms/configsms/page", { params: s });
}
function o(s) {
  return t.request("post", "/upms/configsms", { data: s });
}
function u(s) {
  return t.request("delete", "/upms/configsms/" + s);
}
function l(s) {
  return t.request("put", "/upms/configsms", { data: s });
}
function c() {
  return t.request("get", "/upms/configsms");
}
const { $t: e } = a(), p = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 100, labelPosition: "left", group: [{ icon: "el-icon-s-order", label: e("upms.configsms.accountConfiguration"), prop: "group1", column: [{ label: "regionId", prop: "regionId", sortable: true, labelWidth: 150, span: 13, type: "select", filterable: true, placeholder: e("commons.selectInput"), allowCreate: true, dicData: [{ label: "cn-hangzhou", value: "cn-hangzhou" }], rules: [{ required: true, message: e("upms.configsms.enterRegionId"), trigger: "change" }, { max: 64, message: e("pay.payconfig.maxLength64") }] }, { label: "access_key", prop: "accessKeyId", labelWidth: 150, span: 13, sortable: true, rules: [{ required: true, message: e("upms.configsms.enterAccessKey"), trigger: "blur" }, { max: 64, message: e("pay.payconfig.maxLength64") }] }, { label: "access_secret", prop: "accessKeySecret", labelWidth: 150, span: 13, sortable: true, rules: [{ required: true, message: e("upms.configsms.enterAccessSecret"), trigger: "blur" }, { max: 64, message: e("pay.payconfig.maxLength64") }] }] }, { icon: "el-icon-s-finance", label: e("upms.configsms.templateConfiguration"), prop: "group2", column: [{ label: "", prop: "templates", formslot: true, span: 24 }] }] };
export {
  o as a,
  n as b,
  u as d,
  c as g,
  l as p,
  p as t
};
