import { aO as r, n as l } from "./index-DAdfXJ2i.js";
function o(t) {
  return r.request("get", "/upms/log/page", { params: t });
}
function s(t) {
  return r.request("delete", "/upms/log/" + t);
}
const { $t: e } = l(), p = { dialogDrag: true, index: true, indexLabel: e("commons.indexLabel"), indexWidth: 80, menuAlign: "center", menuWidth: 150, align: "center", refreshBtn: true, showColumnBtn: false, addBtn: false, editBtn: false, viewBtn: true, excelBtn: true, printBtn: false, menuType: "text", searchShow: false, searchMenuSpan: 6, labelWidth: 110, searchGutter: 30, searchLabelPosition: "left", props: { label: "label", value: "value" }, column: [{ label: e("commons.type"), prop: "type", type: "select", sortable: true, dicUrl: "/upms/dict/type/log_type", search: true }, { label: e("upms.log.title"), prop: "title" }, { label: e("upms.log.remoteAddr"), prop: "remoteAddr" }, { label: e("upms.log.requestUri"), prop: "requestUri" }, { label: e("upms.log.method"), prop: "method", type: "select", sortable: true, dicUrl: "/upms/dict/type/request_method", search: true }, { label: e("upms.log.createBy"), sortable: true, searchLabelWidth: 100, prop: "createBy", search: true }, { label: e("upms.log.serviceId"), sortable: true, prop: "serviceId", hide: true }, { width: 80, label: e("upms.log.time"), prop: "time" }, { width: 150, label: e("commons.createTime"), prop: "createTime", type: "datetime", sortable: true, format: "YYYY-MM-DD HH:mm", valueFormat: "YYYY-MM-DD HH:mm:ss" }, { label: e("upms.log.exception"), prop: "exception" }] };
export {
  s as d,
  o as g,
  p as t
};
