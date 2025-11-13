import { aO as l, n as r } from "./index-DAdfXJ2i.js";
function s(t) {
  return l.request("get", "/mall/usercollect/page", { params: t });
}
function n(t) {
  return l.request("post", "/mall/usercollect", { data: t });
}
function u(t) {
  return l.request("delete", "/mall/usercollect/" + t);
}
function o(t) {
  return l.request("put", "/mall/usercollect", { data: t });
}
const { $t: e } = r(), m = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, menu: false, column: [{ label: e("commons.createTime"), prop: "createTime", sortable: true }, { label: e("mall.usercollect.userId"), prop: "userId", sortable: true, slot: true, minWidth: 160, rules: [{ required: true, message: e("mall.usercollect.userId") + e("commons.notNull"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.usercollect.relationId"), prop: "relationId", sortable: true, slot: true, minWidth: 260, rules: [{ required: true, message: e("mall.usercollect.relationId") + e("commons.notNull"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }] };
export {
  n as a,
  u as d,
  s as g,
  o as p,
  m as t
};
