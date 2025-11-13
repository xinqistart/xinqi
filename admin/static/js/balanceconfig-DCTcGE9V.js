import { aO as l, n } from "./index-DAdfXJ2i.js";
function t(a) {
  return l.request("get", "/mall/balanceconfig/page", { params: a });
}
function o(a) {
  return l.request("post", "/mall/balanceconfig", { data: a });
}
function s(a) {
  return l.request("delete", "/mall/balanceconfig/" + a);
}
function i(a) {
  return l.request("put", "/mall/balanceconfig", { data: a });
}
function c() {
  return l.request("get", "/mall/balanceconfig");
}
const { $t: e } = n(), m = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 150, searchLabelPosition: "right", labelPosition: "left", column: [{ label: e("mall.balanceconfig.enable"), prop: "enable", type: "radio", sortable: true, span: 13, labelWidth: 180, rules: [{ required: true, message: e("mall.balanceconfig.enable") + e("commons.notNull"), trigger: "blur" }, { max: 2, message: e("commons.lengthTips", { length: 2 }) }], dicData: [{ label: e("commons.open"), value: "1" }, { label: e("commons.close"), value: "0" }], labelTip: e("mall.balanceconfig.enableTip"), control: (a) => a == "1" ? { rechargeEnable: { display: true }, lowestAmount: { display: true }, rechargeRemind: { display: true } } : { rechargeEnable: { display: false }, lowestAmount: { display: false }, rechargeRemind: { display: false } } }, { label: e("mall.balanceconfig.rechargeEnable"), prop: "rechargeEnable", sortable: true, type: "radio", span: 13, labelWidth: 180, rules: [{ required: true, message: e("mall.balanceconfig.rechargeEnable") + e("commons.notNull"), trigger: "blur" }, { max: 2, message: e("commons.lengthTips", { length: 2 }) }], dicData: [{ label: e("commons.open"), value: "1" }, { label: e("commons.close"), value: "0" }], labelTip: e("mall.balanceconfig.rechargeEnableTip"), control: (a) => a == "1" ? { lowestAmount: { display: true }, rechargeRemind: { display: true } } : { lowestAmount: { display: false }, rechargeRemind: { display: false } } }, { label: e("mall.balanceconfig.lowestAmount"), prop: "lowestAmount", sortable: true, type: "number", minRows: 0.01, span: 13, labelWidth: 180, precision: 2, rules: [{ required: true, message: e("mall.balanceconfig.lowestAmount") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.balanceconfig.rechargeRemind"), prop: "rechargeRemind", type: "textarea", sortable: true, span: 13, labelWidth: 180, rules: [{ required: true, message: e("mall.balanceconfig.rechargeRemind") + e("commons.notNull"), trigger: "blur" }, { max: 65535, message: e("commons.lengthTips", { length: 65535 }) }] }] };
export {
  o as a,
  t as b,
  s as d,
  c as g,
  i as p,
  m as t
};
