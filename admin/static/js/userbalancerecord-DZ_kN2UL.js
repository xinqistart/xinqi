import { n as r, aO as l } from "./index-DAdfXJ2i.js";
const { $t: e } = r(), s = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: false, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelWidth: 90, searchLabelPosition: "left", column: [{ label: e("commons.createTime"), prop: "createTime", type: "date", search: false, sortable: true }, { label: e("commons.type"), prop: "type", type: "select", search: true, dicData: [{ label: e("mall.userbalancerecord.type1"), value: "1" }, { label: e("mall.userbalancerecord.type2"), value: "2" }, { label: e("mall.userbalancerecord.type3"), value: "3" }, { label: e("mall.userbalancerecord.type4"), value: "4" }] }, { label: e("mall.userbalancerecord.amount"), prop: "amount", sortable: true, slot: true }, { label: e("mall.userbalancerecord.isPay"), prop: "isPay", type: "select", search: true, searchValue: "1", dicData: [{ label: e("commons.no"), value: "0" }, { label: e("commons.yes"), value: "1" }] }, { label: e("mall.userbalancerecord.userId"), prop: "userId" }, { label: e("mall.userbalancerecord.relationId"), prop: "relationId", labelTip: e("mall.userbalancerecord.relationIdTip"), hide: true, slot: true }] };
function n(a) {
  return l.request("get", "/mall/userbalancerecord/page", { params: a });
}
function c(a) {
  return l.request("post", "/mall/userbalancerecord", { data: a });
}
function o(a) {
  return l.request("delete", "/mall/userbalancerecord/" + a);
}
function u(a) {
  return l.request("put", "/mall/userbalancerecord", { data: a });
}
export {
  c as a,
  o as d,
  n as g,
  u as p,
  s as t
};
