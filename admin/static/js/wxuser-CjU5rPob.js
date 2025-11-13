import { aO as r, n as s } from "./index-DAdfXJ2i.js";
function i(t) {
  return r.request("get", "/weixin/wxuser/page", { params: t });
}
function l(t) {
  return r.request("post", "/weixin/wxuser", { data: t });
}
function p(t) {
  return r.request("delete", "/weixin/wxuser/" + t);
}
function u(t) {
  return r.request("put", "/weixin/wxuser", { data: t });
}
function n(t) {
  return r.request("post", "/weixin/wxuser/synchron", { data: t });
}
function d(t) {
  return r.request("put", "/weixin/wxuser/remark", { data: t });
}
function c(t) {
  return r.request("put", "/weixin/wxuser/tagid-list", { data: t });
}
const { $t: e } = s(), o = { dialogDrag: true, index: false, indexLabel: e("commons.indexLabel"), selection: true, menuAlign: "center", align: "center", editBtn: false, delBtn: false, addBtn: false, excelBtn: true, printBtn: false, viewBtn: true, searchShow: false, menuWidth: 170, menuType: "text", searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelPosition: "left", defaultSort: { prop: "subscribeTime", order: "descending" }, column: [{ label: e("wxmp.wxuser.headimgUrl"), prop: "headimgUrl", imgWidth: 50, dataType: "string", fileType: "img", type: "upload", listType: "picture-img", editDisplay: false }, { label: e("wxmp.wxuser.nickName"), prop: "nickName", width: 100, searchLabelWidth: 100, sortable: true, search: true, editDisplay: false }, { label: e("wxmp.wxuser.subscribe"), prop: "subscribe", width: 100, searchLabelWidth: 100, type: "select", sortable: true, search: true, editDisplay: false, slot: true, dicUrl: "/upms/dict/type/wx_subscribe" }, { label: e("wxmp.wxuser.openId"), prop: "openId", search: true }, { label: e("wxmp.wxuser.unionId"), prop: "unionId", search: true }, { label: e("wxmp.wxuser.subscribeScene"), prop: "subscribeScene", type: "select", width: 100, searchLabelWidth: 100, sortable: true, search: true, editDisplay: false, dicUrl: "/upms/dict/type/wx_subscribe_scene" }, { label: e("wxmp.wxuser.subscribeTime"), prop: "subscribeTime", type: "datetime", width: 95, sortable: "custom", editDisplay: false }, { label: e("wxmp.wxuser.sex"), prop: "sex", width: 80, searchLabelWidth: 100, type: "select", sortable: true, search: true, editDisplay: false, slot: true, dicUrl: "/upms/dict/type/wx_sex" }, { label: e("wxmp.wxuser.country"), prop: "country", sortable: true, search: true, editDisplay: false, width: 80 }, { label: e("wxmp.wxuser.province"), prop: "province", sortable: true, editDisplay: false, width: 80 }, { label: e("wxmp.wxuser.city"), prop: "city", sortable: true, search: true, editDisplay: false, width: 80 }, { label: e("wxmp.wxuser.language"), prop: "language", sortable: true, editDisplay: false, width: 80 }, { label: e("wxmp.wxuser.tagidList"), prop: "tagidList", type: "select", searchLabelWidth: 100, editDisplay: false, searchslot: true, search: true, props: { label: "name", value: "id" } }, { label: e("wxmp.wxuser.remark"), sortable: true, minWidth: 110, prop: "remark" }, { label: e("wxmp.wxuser.qrSceneStr"), prop: "qrSceneStr", type: "select", dicUrl: "/upms/dict/type/wx_qr_scene_str", sortable: true, search: true, minWidth: 110, searchLabelWidth: 100, editDisplay: false }, { label: e("wxmp.wxuser.subscribeNum"), prop: "subscribeNum", width: 110, sortable: true, editDisplay: false }, { label: e("commons.createTime"), prop: "createTime", type: "datetime", sortable: true, hide: true, editDisplay: false }, { label: e("wxmp.wxuser.updateTime"), prop: "updateTime", type: "datetime", sortable: true, hide: true, editDisplay: false }, { label: e("wxmp.wxuser.cancelSubscribeTime"), prop: "cancelSubscribeTime", type: "datetime", sortable: true, hide: true, editDisplay: false }, { label: e("wxmp.wxuser.latitude"), prop: "latitude", slot: true, editDisplay: false, viewDisplay: false, width: 100 }] }, b = { index: false, indexLabel: e("commons.indexLabel"), selection: true, menuAlign: "center", align: "center", editBtn: false, delBtn: false, addBtn: false, excelBtn: false, printBtn: false, viewBtn: false, searchShow: true, menu: false, menuWidth: 150, menuType: "text", searchMenuSpan: 6, defaultSort: { prop: "subscribeTime", order: "descending" }, column: [{ label: e("wxmp.wxuser.headimgUrl"), prop: "headimgUrl", type: "upload", fileType: "img", imgWidth: 50, listType: "picture-img", editDisplay: false }, { label: e("wxmp.wxuser.nickName"), prop: "nickName", width: 100, sortable: true, search: true, editDisplay: false }, { label: e("wxmp.wxuser.subscriptionChannel"), prop: "subscribeScene", type: "select", sortable: true, search: true, editDisplay: false, dicUrl: "/upms/dict/type/wx_subscribe_scene" }, { label: e("wxmp.wxuser.subscriptionTime"), prop: "subscribeTime", type: "datetime", width: 95, sortable: "custom", editDisplay: false }, { label: e("wxmp.wxuser.gender"), prop: "sex", width: 70, type: "select", sortable: true, search: true, editDisplay: false, slot: true, dicUrl: "/upms/dict/type/wx_sex" }, { label: e("wxmp.wxuser.country"), prop: "country", sortable: true, search: true, editDisplay: false }, { label: e("wxmp.wxuser.province"), prop: "province", sortable: true, editDisplay: false }, { label: e("wxmp.wxuser.city"), prop: "city", sortable: true, search: true, editDisplay: false }, { label: e("wxmp.wxuser.language"), prop: "language", sortable: true, search: true, editDisplay: false }, { label: e("wxmp.wxuser.QRCodeScanningScene"), prop: "qrSceneStr", type: "select", dicUrl: "/upms/dict/type/wx_qr_scene_str", sortable: true, search: true, editDisplay: false }, { label: e("wxmp.wxuser.userIdentifier"), prop: "openId", hide: true, editDisplay: false }, { label: e("wxmp.wxuser.remark"), sortable: true, minWidth: 110, prop: "remark" }, { label: "union_id", prop: "unionId", hide: true, editDisplay: false }, { label: e("wxmp.wxuser.subscriptionCount"), prop: "subscribeNum", width: 90, sortable: true, editDisplay: false }] };
export {
  o as a,
  l as b,
  c,
  p as d,
  i as g,
  u as p,
  n as s,
  b as t,
  d as u
};
