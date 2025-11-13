import { aO as i, n as S, A as C, R as w, K as L, q as B, S as R, b1 as $, _ as D, r as O, c as P, o as _, b as m, h as v, a_ as x } from "./index-DAdfXJ2i.js";
function y(a) {
  return i.request("get", "/mall/userinfolabel/page", { params: a });
}
function U(a) {
  return i.request("post", "/mall/userinfolabel", { data: a });
}
function q(a) {
  return i.request("delete", "/mall/userinfolabel/" + a);
}
function z(a) {
  return i.request("put", "/mall/userinfolabel", { data: a });
}
const { $t: d } = S(), j = { dialogDrag: true, indexLabel: d("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: d("mall.userinfolabel.labelName"), prop: "labelName", sortable: true, rules: [{ max: 100, message: d("commons.lengthTips", { length: 100 }) }] }] }, T = { name: "userinfolabel", setup() {
  const { proxy: a } = C(), e = w({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: j }), r = L().permissions, t = B(() => ({ addBtn: !!r["mall:userinfolabel:add"], delBtn: !!r["mall:userinfolabel:del"], editBtn: !!r["mall:userinfolabel:edit"], viewBtn: !!r["mall:userinfolabel:get"] }));
  function o(n, s) {
    e.tableLoading = true, y(Object.assign({ current: n.currentPage, size: n.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((l) => {
      e.tableData = l.data.records, e.page.total = l.data.total, e.page.currentPage = n.currentPage, e.page.pageSize = n.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function p(n) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return q(n.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), o(e.page);
    });
  }
  function u(n, s, l, b) {
    z(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), l(), o(e.page);
    }).catch(() => {
      b();
    });
  }
  function g(n, s, l) {
    U(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), s(), o(e.page);
    }).catch(() => {
      l();
    });
  }
  function c(n, s) {
    n = $(n), e.paramsSearch = n, e.page.currentPage = 1, o(e.page, n), s();
  }
  function f(n) {
    const s = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : n.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), o(e.page);
  }
  function h() {
    o(e.page);
  }
  return { ...R(e), permissions: r, permissionList: t, getPageF: o, handleDel: p, handleUpdate: u, handleSave: g, searchChange: c, sortChange: f, refreshChange: h };
} };
function V(a, e, r, t, o, p) {
  const u = O("avue-crud"), g = x;
  return _(), P("div", null, [m(g, null, { default: v(() => [m(u, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (c) => a.form = c), page: a.page, "onUpdate:page": e[1] || (e[1] = (c) => a.page = c), data: a.tableData, permission: t.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const A = D(T, [["render", V]]);
export {
  A as default
};
