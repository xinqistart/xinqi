import { aO as t, n as i } from "./index-DAdfXJ2i.js";
function s(r) {
  return t.request("get", "/mall/distributionorder/page", { params: r });
}
function o(r) {
  return t.request("post", "/mall/distributionorder", { data: r });
}
function a(r) {
  return t.request("delete", "/mall/distributionorder/" + r);
}
function n(r) {
  return t.request("put", "/mall/distributionorder", { data: r });
}
const { $t: e } = i(), u = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelWidth: 90, searchLabelPosition: "left", column: [{ label: e("mall.distributionorder.shopId"), prop: "shopId", type: "select", search: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", display: false }, { label: e("commons.createTime"), prop: "createTime", sortable: true }, { label: e("mall.distributionorder.distributionLevel"), prop: "distributionLevel", type: "radio", sortable: true, search: true, dicData: [{ label: e("mall.distributionorder.distributionLevel1"), value: "1" }, { label: e("mall.distributionorder.distributionLevel2"), value: "2" }] }, { label: e("mall.distributionorder.distributionUserId"), prop: "distributionUserId", minWidth: 120, search: true, rules: [{ required: true, message: e("mall.distributionorder.distributionUserId") + e("commons.notNull"), trigger: "blur" }, { max: 31, message: e("commons.lengthTips", { length: 31 }) }] }, { label: e("mall.distributionorder.orderId"), prop: "orderId", sortable: true, search: true, minWidth: 120, rules: [{ required: true, message: e("mall.distributionorder.orderId") + e("commons.notNull"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.distributionorder.userId"), prop: "userId", search: true, minWidth: 120, rules: [{ max: 31, message: e("commons.lengthTips", { length: 31 }) }] }, { label: e("mall.distributionorder.commission"), prop: "commission", sortable: true, rules: [{ required: true, message: e("mall.distributionorder.commission") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.distributionorder.commissionStatus"), prop: "commissionStatus", sortable: true, type: "radio", search: true, dicData: [{ label: e("mall.distributionorder.commissionStatus1"), value: "1" }, { label: e("mall.distributionorder.commissionStatus2"), value: "2" }] }] }, d = { dialogDrag: true, index: false, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", refreshBtn: false, columnBtn: false, addBtn: false, delBtn: false, searchMenuSpan: 6, dateBtn: true, column: [{ label: e("commons.createTime"), prop: "createTime", display: false }, { label: e("mall.distributionorder.orderId"), prop: "orderId", slot: true, display: false }, { label: e("mall.distributionorder.userId"), prop: "userId", slot: true, width: 260, display: false }, { label: e("mall.distributionorder.commission"), prop: "commission", sortable: true, rules: [{ required: true, message: e("mall.distributionorder.commission") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.distributionorder.commissionStatus"), prop: "commissionStatus", sortable: true, type: "radio", search: true, searchLabelWidth: 100, dicData: [{ label: e("mall.distributionorder.commissionStatus1"), value: "1" }, { label: e("mall.distributionorder.commissionStatus2"), value: "2" }] }] };
export {
  o as a,
  d as b,
  a as d,
  s as g,
  n as p,
  u as t
};
