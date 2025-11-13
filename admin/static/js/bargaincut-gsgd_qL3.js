import { aO as t, n as r } from "./index-DAdfXJ2i.js";
function n(a) {
  return t.request("get", "/mall/bargaincut/page", { params: a });
}
function u(a) {
  return t.request("post", "/mall/bargaincut", { data: a });
}
function o(a) {
  return t.request("delete", "/mall/bargaincut/" + a);
}
function c(a) {
  return t.request("put", "/mall/bargaincut", { data: a });
}
const { $t: e } = r(), s = { dialogDrag: true, index: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: e("mall.bargaincut.id"), prop: "id", sortable: true }, { label: e("mall.bargaincut.tenantId"), prop: "tenantId", sortable: true }, { label: e("mall.bargaincut.delFlag"), prop: "delFlag", sortable: true }, { label: e("commons.createTime"), prop: "createTime", sortable: true }, { label: e("commons.updateTime"), prop: "updateTime", sortable: true }, { label: e("mall.bargaincut.createId"), prop: "createId", sortable: true }, { label: e("mall.bargaincut.bargainId"), prop: "bargainId", sortable: true }, { label: e("mall.bargaincut.userId"), prop: "userId", sortable: true }, { label: e("mall.bargaincut.cutPrice"), prop: "cutPrice", sortable: true }] }, b = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, refreshBtn: false, menu: false, addBtn: false, column: [{ label: e("commons.createTime"), prop: "createTime", sortable: true }, { label: e("mall.bargaincut.userId"), prop: "userId", slot: true, width: 240 }, { label: e("mall.bargaincut.cutPrice"), prop: "cutPrice", sortable: true }] };
export {
  u as a,
  b,
  o as d,
  n as g,
  c as p,
  s as t
};
