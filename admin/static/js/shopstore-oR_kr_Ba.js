import { aO as l, n as a } from "./index-DAdfXJ2i.js";
function t(s) {
  return l.request("get", "/mall/shopstore/page", { params: s });
}
function o(s) {
  return l.request("post", "/mall/shopstore", { data: s });
}
function n(s) {
  return l.request("get", "/mall/shopstore/" + s);
}
function p(s) {
  return l.request("delete", "/mall/shopstore/" + s);
}
function m(s) {
  return l.request("put", "/mall/shopstore", { data: s });
}
const { $t: e } = a(), i = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, searchGutter: 50, searchLabelPosition: "left", labelPosition: "left", column: [{ label: e("mall.shopstore.shopId"), prop: "shopId", type: "select", span: 20, props: { label: "name", value: "id" }, search: true, editDisabled: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: e("mall.shopstore.shopId") + e("commons.notNull"), trigger: "blur" }] }, { label: e("commons.createTime"), prop: "createTime", sortable: true, span: 20, display: false }, { label: e("mall.shopstore.name"), prop: "name", sortable: true, span: 20, rules: [{ required: true, message: e("mall.shopstore.name") + e("commons.notNull"), trigger: "blur" }, { max: 200, message: e("commons.lengthTips", { length: 200 }) }] }, { label: e("mall.shopstore.phone"), prop: "phone", span: 20, rules: [{ required: true, message: e("mall.shopstore.phone") + e("commons.notNull"), trigger: "blur" }, { max: 15, message: e("commons.lengthTips", { length: 15 }) }] }, { label: e("mall.shopstore.businessHours"), prop: "businessHours", type: "timerange", span: 20, valueFormat: "HH:mm:ss", rules: [{ required: true, message: e("mall.shopstore.businessHours") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.shopstore.country"), prop: "country", sortable: true, span: 20, display: false, hide: true, rules: [{ max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("mall.shopstore.province"), prop: "province", sortable: true, display: false, hide: true, rules: [{ max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("mall.shopstore.city"), prop: "city", sortable: true, display: false, span: 20, hide: true, rules: [{ max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("mall.shopstore.address"), prop: "address", span: 20, formslot: true }, { label: e("mall.shopstore.imgUrl"), prop: "imgUrl", dataType: "string", span: 20, type: "img", rules: [{ required: true, message: e("commons.notNull"), trigger: "blur" }], labelTip: e("mall.shopstore.imgUrlTip") }] }, u = { detail: true, dialogDrag: false, index: false, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: false, printBtn: false, addBtn: false, delBtn: false, viewBtn: false, submitBtn: false, emptyBtn: false, searchMenuSpan: 6, labelWidth: 110, column: [{ label: e("mall.orderinfo.shopId"), prop: "shopId", type: "select", props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list" }, { label: e("commons.createTime"), prop: "createTime", display: false }, { label: e("mall.shopstore.name"), prop: "name" }, { label: e("mall.shopstore.phone"), prop: "phone" }, { label: e("mall.shopstore.businessHours"), prop: "businessHours", type: "timerange", valueFormat: "HH:mm:ss" }, { label: e("mall.shopstore.country"), prop: "country", sortable: true, display: false, readonly: true, hide: true, rules: [{ max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("mall.shopstore.province"), prop: "province", sortable: true, display: false, readonly: true, hide: true, rules: [{ max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("mall.shopstore.city"), prop: "city", sortable: true, display: false, hide: true }, { label: e("mall.shopstore.address"), prop: "address", span: 24 }, { label: e("commons.image"), prop: "imgUrl" }] };
export {
  t as a,
  i as b,
  o as c,
  p as d,
  n as g,
  m as p,
  u as t
};
