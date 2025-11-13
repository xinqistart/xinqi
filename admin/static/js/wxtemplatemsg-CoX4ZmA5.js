import { aO as a, n as r } from "./index-DAdfXJ2i.js";
function s(t) {
  return a.request("get", "/weixin/wxtemplatemsg/page", { params: t });
}
function o(t) {
  return a.request("post", "/weixin/wxtemplatemsg", { data: t });
}
function i(t) {
  return a.request("delete", "/weixin/wxtemplatemsg/" + t);
}
function u(t) {
  return a.request("put", "/weixin/wxtemplatemsg", { data: t });
}
function n(t) {
  return request({ url: "/weixin/wxtemplatemsg/send/mp/" + t.appId, method: "post", data: t });
}
const { $t: e } = r(), l = [{ label: e("wxma.wxtemplatemsg.orderNumber"), value: "order.orderNo" }, { label: e("wxma.wxtemplatemsg.orderTime"), value: "order.createTime" }, { label: e("wxma.wxtemplatemsg.orderPaymentTime"), value: "order.paymentTime" }, { label: e("wxma.wxtemplatemsg.orderDeliveryTime"), value: "order.deliveryTime" }, { label: e("wxma.wxtemplatemsg.orderReceivedTime"), value: "order.receiverTime" }, { label: e("wxma.wxtemplatemsg.orderTransactionTime"), value: "order.closingTime" }, { label: e("wxma.wxtemplatemsg.orderSalePrice"), value: "order.salesPrice" }, { label: e("wxma.wxtemplatemsg.orderPaymentAmount"), value: "order.paymentPrice" }, { label: e("wxma.wxtemplatemsg.orderName"), value: "order.name" }, { label: e("wxma.wxtemplatemsg.orderStatus"), value: "order.statusDesc" }, { label: e("wxma.wxtemplatemsg.orderType"), value: "order.orderTypeDesc" }, { label: e("wxma.wxtemplatemsg.shippingAmount"), value: "order.freightPrice" }, { label: e("wxma.wxtemplatemsg.paymentPoints"), value: "order.paymentPoints" }, { label: e("wxma.wxtemplatemsg.receiverPhone"), value: "orderLogistics.telNum" }, { label: e("wxma.wxtemplatemsg.receiverName"), value: "orderLogistics.userName" }, { label: e("wxma.wxtemplatemsg.logisticsAddress"), value: "orderLogistics.address" }, { label: e("wxma.wxtemplatemsg.logisticsVendor"), value: "orderLogistics.logisticsName" }, { label: e("wxma.wxtemplatemsg.logisticsNumber"), value: "orderLogistics.logisticsNo" }], p = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, addBtn: false, viewBtn: true, searchGutter: 30, searchLabelPosition: "left", column: [{ label: e("commons.enabled"), prop: "enable", type: "radio", search: true, sortable: true, value: "0", rules: [{ required: true, message: e("commons.notNull"), trigger: "blur" }], dicData: [{ label: e("commons.close"), value: "0" }, { label: e("commons.open"), value: "1" }] }, { label: e("wxma.wxtemplatemsg.useType"), prop: "useType", type: "select", search: true, sortable: true, formslot: true, rules: [{ required: true, message: e("wxma.wxtemplatemsg.useType") + e("commons.notNull"), trigger: "blur" }], dicData: [{ label: e("wxma.wxtemplatemsg.orderPaymentSuccess"), value: "2" }, { label: e("wxma.wxtemplatemsg.orderShippingReminder"), value: "3" }] }, { label: e("wxma.wxtemplatemsg.priTmplId"), prop: "priTmplId", rules: [{ required: true, message: e("wxma.wxtemplatemsg.priTmplId") + e("commons.notNull"), trigger: "blur" }] }, { label: e("wxma.wxtemplatemsg.title"), prop: "title", rules: [{ required: true, message: e("wxma.wxtemplatemsg.title") + e("commons.notNull"), trigger: "blur" }] }, { label: e("wxma.wxtemplatemsg.content"), prop: "content", type: "dynamic", hide: true, span: 24, rules: [{ required: true, message: e("wxma.wxtemplatemsg.content") + e("commons.notNull"), trigger: "blur" }], children: { align: "center", headerAlign: "center", column: [{ label: e("wxma.wxtemplatemsg.title"), prop: "name", rules: [{ required: true, message: e("wxma.wxtemplatemsg.enterTemplateTitle"), trigger: "blur" }] }, { label: e("wxma.wxtemplatemsg.correspondingAttribute"), prop: "attribute", type: "select", filterable: true, allowCreate: true, rules: [{ required: true, message: e("wxma.wxtemplatemsg.selectCorrespondingAttribute"), trigger: "blur" }], dicData: l }] } }] };
export {
  o as a,
  l as b,
  i as d,
  s as g,
  u as p,
  n as s,
  p as t
};
