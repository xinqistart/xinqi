import { A as h, R as b, K as S, q as C, S as w, b1 as L, _ as R, r as P, c as _, o as $, b as p, h as B, a_ as D } from "./index-DAdfXJ2i.js";
import { t as O, a as v, p as U, d as y, b as z } from "./balanceconfig-DCTcGE9V.js";
const j = { name: "balanceconfig", setup() {
  const { proxy: n } = h(), e = b({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: O }), c = S().permissions, o = C(() => ({ addBtn: !!c["mall:balanceconfig:add"], delBtn: !!c["mall:balanceconfig:del"], editBtn: !!c["mall:balanceconfig:edit"], viewBtn: !!c["mall:balanceconfig:get"] }));
  function t(a, s) {
    e.tableLoading = true, z(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((r) => {
      e.tableData = r.data.records, e.page.total = r.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
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
  function i(a, s, r, f) {
    U(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), r(), t(e.page);
    }).catch(() => {
      f();
    });
  }
  function g(a, s, r) {
    v(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), s(), t(e.page);
    }).catch(() => {
      r();
    });
  }
  function l(a, s) {
    a = L(a), e.paramsSearch = a, e.page.currentPage = 1, t(e.page, a), s();
  }
  function m(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function u() {
    t(e.page);
  }
  return { ...w(e), permissions: c, permissionList: o, getPageF: t, handleDel: d, handleUpdate: i, handleSave: g, searchChange: l, sortChange: m, refreshChange: u };
} };
function V(n, e, c, o, t, d) {
  const i = P("avue-crud"), g = D;
  return $(), _("div", null, [p(g, null, { default: B(() => [p(i, { ref: "crud", modelValue: n.form, "onUpdate:modelValue": e[0] || (e[0] = (l) => n.form = l), page: n.page, "onUpdate:page": e[1] || (e[1] = (l) => n.page = l), data: n.tableData, permission: o.permissionList, "table-loading": n.tableLoading, option: n.tableOption, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const x = R(j, [["render", V]]);
export {
  x as default
};
