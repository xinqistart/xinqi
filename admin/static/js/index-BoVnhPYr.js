import { A as S, R as b, K as C, q as v, S as w, b1 as p, _ as L, r as R, c as P, o as _, b as m, h as $, a_ as B } from "./index-DAdfXJ2i.js";
import { t as D, a as O, p as U, d as y, b as z } from "./liveconfig-DzqXjveo.js";
const V = { name: "liveconfig", setup() {
  const { proxy: n } = S(), e = b({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: D }), r = C().permissions, o = v(() => ({ addBtn: !!r["live:liveconfig:add"], delBtn: !!r["live:liveconfig:del"], editBtn: !!r["live:liveconfig:edit"], viewBtn: !!r["live:liveconfig:get"] }));
  function t(a, s) {
    e.tableLoading = true, z(p({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs, ...s, ...e.paramsSearch })).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function d(a) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return y(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), t(e.page);
    });
  }
  function g(a, s, c, h) {
    U(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), c(), t(e.page);
    }).catch(() => {
      h();
    });
  }
  function l(a, s, c) {
    O(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), s(), t(e.page);
    }).catch(() => {
      c();
    });
  }
  function i(a, s) {
    a = p(a), e.paramsSearch = a, e.page.currentPage = 1, t(e.page, a), s();
  }
  function u(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function f() {
    t(e.page);
  }
  return { ...w(e), permissions: r, permissionList: o, getPageF: t, handleDel: d, handleUpdate: g, handleSave: l, searchChange: i, sortChange: u, refreshChange: f };
} };
function j(n, e, r, o, t, d) {
  const g = R("avue-crud"), l = B;
  return _(), P("div", null, [m(l, null, { default: $(() => [m(g, { ref: "crud", modelValue: n.form, "onUpdate:modelValue": e[0] || (e[0] = (i) => n.form = i), page: n.page, "onUpdate:page": e[1] || (e[1] = (i) => n.page = i), data: n.tableData, permission: o.permissionList, "table-loading": n.tableLoading, option: n.tableOption, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const x = L(V, [["render", j]]);
export {
  x as default
};
