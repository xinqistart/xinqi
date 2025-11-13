import { aO as a, n as s } from "./index-DAdfXJ2i.js";
function n(l) {
  return a.request("get", "/live/liveconfig/page", { params: l });
}
function o(l) {
  return a.request("post", "/live/liveconfig", { data: l });
}
function r(l) {
  return a.request("get", "/live/liveconfig");
}
function u(l) {
  return a.request("delete", "/malivell/liveconfig/" + l);
}
function m(l) {
  return a.request("put", "/live/liveconfig", { data: l });
}
const { $t: e } = s(), p = { dialogDrag: true, menuAlign: "center", align: "center", labelPosition: "left", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 160, column: [{ label: e("mall.distributionconfig.enable"), prop: "enable", type: "radio", sortable: true, span: 24, rules: [{ required: true, message: e("mall.distributionconfig.enable") + e("commons.notNull"), trigger: "blur" }, { max: 2, message: e("commons.lengthTips", { length: 2 }) }], dicData: [{ label: e("commons.open"), value: "1" }, { label: e("commons.close"), value: "0" }], labelTip: "\u76F4\u64AD\u529F\u80FD\u662F\u5426\u542F\u7528", control: (l, t) => {
  if (t.enable == "0") return { pushDomain: { display: false }, pullDomain: { display: false }, appName: { display: false }, pushAuthKey: { display: false }, pullAuthKey: { display: false }, isHttps: { display: false } };
  if (t.enable == "1") return { pushDomain: { display: true }, pullDomain: { display: true }, appName: { display: true }, pushAuthKey: { display: true }, pullAuthKey: { display: true }, isHttps: { display: true } };
} }, { label: e("mall.liveconfig.appName"), prop: "appName", placeholder: "\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0:\u53EA\u652F\u6301\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u77ED\u5212\u7EBF(-)\u3001\u4E0B\u5212\u7EBF(_)\u3001\u7B49\u53F7(=)", sortable: true, labelTip: "\u53EA\u652F\u6301\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u77ED\u5212\u7EBF(-)\u3001\u4E0B\u5212\u7EBF(_)\u3001\u7B49\u53F7(=)", rules: [{ required: true, message: e("mall.distributionconfig.enable") + e("commons.notNull"), trigger: "blur" }, { max: 100, message: e("commons.lengthTips", { length: 100 }) }] }, { label: e("mall.liveconfig.isHttps"), prop: "isHttps", type: "radio", rules: [{ required: true, message: e("mall.distributionconfig.enable") + e("commons.notNull"), trigger: "blur" }, { max: 2, message: e("commons.lengthTips", { length: 2 }) }], dicData: [{ label: e("commons.open"), value: "1" }, { label: e("commons.close"), value: "0" }] }, { label: e("mall.liveconfig.pushDomain"), prop: "pushDomain", sortable: true, rules: [{ required: true, message: e("mall.distributionconfig.enable") + e("commons.notNull"), trigger: "blur" }, { max: 500, message: e("commons.lengthTips", { length: 500 }) }] }, { label: e("mall.liveconfig.pushAuthKey"), prop: "pushAuthKey", sortable: true, rules: [{ required: true, message: e("mall.distributionconfig.enable") + e("commons.notNull"), trigger: "blur" }, { max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("mall.liveconfig.pullDomain"), prop: "pullDomain", sortable: true, rules: [{ required: true, message: e("mall.distributionconfig.enable") + e("commons.notNull"), trigger: "blur" }, { max: 500, message: e("commons.lengthTips", { length: 500 }) }] }, { label: e("mall.liveconfig.pullAuthKey"), prop: "pullAuthKey", sortable: true, rules: [{ required: true, message: e("mall.distributionconfig.enable") + e("commons.notNull"), trigger: "blur" }, { max: 64, message: e("commons.lengthTips", { length: 64 }) }] }] };
export {
  o as a,
  n as b,
  u as d,
  r as g,
  m as p,
  p as t
};
