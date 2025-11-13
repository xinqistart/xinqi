import { A as h, R as b, K as S, q as C, S as w, b1 as L, _ as R, r as P, c as _, o as $, b as l, h as B, a_ as D } from "./index-DAdfXJ2i.js";
import { a as O, p as v, d as U, b as y } from "./shopdepositconfig-wq2MNSiQ.js";
import { t as z } from "./shopdepositconfig-fw286n0T.js";
const j = { name: "shopdepositconfig", setup() {
  const { proxy: o } = h(), e = b({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: z }), r = S().permissions, n = C(() => ({ addBtn: !!r["mall:shopdepositconfig:add"], delBtn: !!r["mall:shopdepositconfig:del"], editBtn: !!r["mall:shopdepositconfig:edit"], viewBtn: !!r["mall:shopdepositconfig:get"] }));
  function t(a, s) {
    e.tableLoading = true, y(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function p(a) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return U(a.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), t(e.page);
    });
  }
  function d(a, s, c, f) {
    v(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), c(), t(e.page);
    }).catch(() => {
      f();
    });
  }
  function g(a, s, c) {
    O(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), s(), t(e.page);
    }).catch(() => {
      c();
    });
  }
  function i(a, s) {
    a = L(a), e.paramsSearch = a, e.page.currentPage = 1, t(e.page, a), s();
  }
  function m(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function u() {
    t(e.page);
  }
  return { ...w(e), permissions: r, permissionList: n, getPageF: t, handleDel: p, handleUpdate: d, handleSave: g, searchChange: i, sortChange: m, refreshChange: u };
} };
function V(o, e, r, n, t, p) {
  const d = P("avue-crud"), g = D;
  return $(), _("div", null, [l(g, null, { default: B(() => [l(d, { ref: "crud", modelValue: o.form, "onUpdate:modelValue": e[0] || (e[0] = (i) => o.form = i), page: o.page, "onUpdate:page": e[1] || (e[1] = (i) => o.page = i), data: o.tableData, permission: n.permissionList, "table-loading": o.tableLoading, option: o.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const A = R(j, [["render", V]]);
export {
  A as default
};
