import { n as l, aO as r } from "./index-DAdfXJ2i.js";
const { $t: e } = l(), o = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelWidth: 90, searchLabelPosition: "left", column: [{ label: e("upms.loglogin.createId"), prop: "createId", sortable: true }, { label: e("upms.loglogin.createBy"), prop: "createBy", searchLabelWidth: 110, sortable: true, search: true }, { label: e("commons.createTime"), prop: "createTime", sortable: true }, { label: e("upms.loglogin.remoteAddr"), prop: "remoteAddr", sortable: true }, { label: e("upms.loglogin.address"), prop: "address", sortable: true }, { label: e("upms.loglogin.userAgent"), prop: "userAgent", sortable: true, overHidden: true }, { label: e("upms.loglogin.requestUri"), prop: "requestUri" }, { label: e("commons.type"), prop: "type", type: "select", sortable: true, dicUrl: "/upms/dict/type/log_type", search: true }, { label: e("upms.loglogin.grantType"), prop: "grantType", type: "select", searchLabelWidth: 110, sortable: true, dicUrl: "/upms/dict/type/authorized_grant_types", search: true }, { label: e("upms.loglogin.exception"), prop: "exception" }] };
function s(t) {
  return r.request("get", "/upms/loglogin/page", { params: t });
}
function p(t) {
  return r.request("post", "/upms/loglogin", { data: t });
}
function n(t) {
  return r.request("delete", "/upms/loglogin/" + t);
}
function u(t) {
  return r.request("put", "/upms/loglogin", { data: t });
}
export {
  p as a,
  n as d,
  s as g,
  u as p,
  o as t
};
