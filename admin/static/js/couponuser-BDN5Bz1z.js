import { n as o, aO as a } from "./index-DAdfXJ2i.js";
const { $t: e } = o(), r = { dialogDrag: true, index: true, indexLabel: e("commons.indexLabel"), indexWidth: 80, menuAlign: "center", align: "center", menuType: "text", searchShow: false, printBtn: false, viewBtn: true, menu: false, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelPosition: "left", labelPosition: "left", column: [{ label: e("mall.couponuser.shopId"), prop: "shopId", type: "select", props: { label: "name", value: "id" }, search: true, filterable: true, editDisabled: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: e("mall.couponuser.shopId") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.couponuser.createTime"), prop: "createTime", sortable: true }, { label: e("mall.couponuser.userId"), prop: "userId", minWidth: 110, slot: true }, { label: e("mall.couponuser.couponId"), prop: "couponId", type: "select", slot: true, search: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/couponinfo/list" }, { label: e("mall.couponuser.couponCode"), prop: "couponCode", searchLabelWidth: 110, search: true }, { label: e("mall.couponuser.validEndTime"), prop: "validEndTime", slot: true }, { label: e("mall.couponuser.status"), prop: "status", type: "radio", search: true, dicData: [{ label: e("mall.couponuser.status0"), value: "0" }, { label: e("mall.couponuser.status1"), value: "1" }, { label: e("mall.couponuser.status2"), value: "2" }] }, { label: e("mall.couponuser.usedTime"), prop: "usedTime", sortable: true }] }, s = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", searchShow: false, menu: false, addBtn: false, refreshBtn: false, searchMenuSpan: 6, column: [{ label: e("mall.couponuser.shopId"), prop: "shopId", type: "select", props: { label: "name", value: "id" }, search: true, filterable: true, editDisabled: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: e("commons.selectShop") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.couponuser.createTime2"), prop: "createTime", sortable: true }, { label: e("mall.couponuser.couponCode"), prop: "couponId", type: "select", slot: true, search: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/couponinfo/list" }, { label: e("mall.couponuser.couponCode"), prop: "couponCode", search: true }, { label: e("mall.couponuser.validEndTime"), prop: "validEndTime", slot: true }, { label: e("mall.couponuser.status"), prop: "status", type: "radio", search: true, dicData: [{ label: e("mall.couponuser.status0"), value: "0" }, { label: e("mall.couponuser.status1"), value: "1" }, { label: e("mall.couponuser.status2"), value: "2" }] }, { label: e("mall.couponuser.usedTime"), prop: "usedTime", sortable: true }] }, t = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", searchShow: false, menu: false, addBtn: false, refreshBtn: false, searchMenuSpan: 6, column: [{ label: e("mall.couponuser.shopId"), prop: "shopId", type: "select", filterable: true, props: { label: "name", value: "id" }, editDisabled: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: e("commons.selectShop") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.couponuser.createTime2"), prop: "createTime", sortable: true }, { label: e("mall.couponuser.couponCode"), prop: "couponId", type: "select", slot: true, search: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/couponinfo/list" }, { label: e("mall.couponuser.couponCode"), prop: "couponCode", search: true }, { label: e("mall.couponuser.validEndTime"), prop: "validEndTime", slot: true }, { label: e("mall.couponuser.status"), prop: "status", type: "radio", search: true, dicData: [{ label: e("mall.couponuser.status0"), value: "0" }, { label: e("mall.couponuser.status1"), value: "1" }, { label: e("mall.couponuser.status2"), value: "2" }] }, { label: e("mall.couponuser.usedTime"), prop: "usedTime", sortable: true }] };
function n(l) {
  return a.request("get", "/mall/couponuser/page", { params: l });
}
function p(l) {
  return a.request("post", "/mall/couponuser", { data: l });
}
function c(l) {
  return a.request("delete", "/mall/couponuser/" + l);
}
function i(l) {
  return a.request("put", "/mall/couponuser", { data: l });
}
export {
  s as a,
  r as b,
  p as c,
  c as d,
  n as g,
  i as p,
  t
};
