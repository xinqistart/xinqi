import { n as t, aO as l } from "./index-DAdfXJ2i.js";
const { $t: e } = t(), o = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, addBtn: false, editBtn: false, delBtn: false, viewBtn: true, menu: false, searchMenuSpan: 6, column: [{ label: e("mall.pointsrecord.userCode"), prop: "userCode", search: true, slot: true }, { label: e("mall.pointsrecord.amount"), prop: "amount", sortable: true }, { label: e("commons.type"), prop: "recordType", search: true, slot: true, type: "radio", dicData: [{ label: e("mall.pointsrecord.recordType0"), value: "0" }, { label: e("mall.pointsrecord.recordType2"), value: "2" }, { label: e("mall.pointsrecord.recordType3"), value: "3" }, { label: e("mall.pointsrecord.recordType4"), value: "4" }, { label: e("mall.pointsrecord.recordType5"), value: "5" }, { label: e("mall.pointsrecord.recordType6"), value: "6" }, { label: e("mall.pointsrecord.recordType7"), value: "7" }] }, { label: e("mall.pointsrecord.description"), prop: "description" }, { label: e("mall.pointsrecord.shopId"), prop: "shopId", type: "select", filterable: true, props: { label: "name", value: "id" }, search: true, editDisabled: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: e("mall.pointsrecord.shopId") + e("commons.notNull"), trigger: "blur" }] }, { label: e("commons.createTime"), prop: "createTime", sortable: true }] }, n = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: false, editBtn: false, delBtn: false, menu: false, refreshBtn: false, column: [{ label: e("mall.pointsrecord.amount"), prop: "amount", sortable: true }, { label: e("mall.pointsrecord.description"), prop: "description" }, { label: e("commons.createTime"), prop: "createTime", sortable: true }] };
function s(r) {
  return l.request("get", "/mall/pointsrecord/page", { params: r });
}
function p(r) {
  return l.request("post", "/mall/pointsrecord", { data: r });
}
function c(r) {
  return l.request("delete", "/mall/pointsrecord/" + r);
}
function d(r) {
  return l.request("put", "/mall/pointsrecord", { data: r });
}
export {
  o as a,
  p as b,
  c as d,
  s as g,
  d as p,
  n as t
};
