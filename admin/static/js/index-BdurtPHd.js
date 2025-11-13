import { A as f, R as h, q as b, K as S, S as C, b1 as w, _, r as L, c as R, o as P, b as p, h as $, a_ as B } from "./index-DAdfXJ2i.js";
import { t as D, a as O, p as v, d as U, g as y } from "./bargaincut-gsgd_qL3.js";
const z = { setup() {
  const { proxy: n } = f(), e = h({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: D }), d = b(() => {
    var _a;
    const a = (_a = S()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:bargaincut:add"], delBtn: !!a["mall:bargaincut:del"], editBtn: !!a["mall:bargaincut:edit"], viewBtn: !!a["mall:bargaincut:get"] };
  });
  function s(a, o) {
    a = w(a), e.paramsSearch = a, e.page.currentPage = 1, t(e.page, a), o();
  }
  function l(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function t(a, o) {
    e.tableLoading = true, y(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((r) => {
      e.tableData = r.data.records, e.page.total = r.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function i(a) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return U(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), t(e.page);
    });
  }
  function g(a, o, r, u) {
    v(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), r(), t(e.page);
    }).catch(() => {
      u();
    });
  }
  function c(a, o, r) {
    O(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), o(), t(e.page);
    }).catch(() => {
      r();
    });
  }
  function m() {
    t(e.page);
  }
  return { ...C(e), permissionList: d, searchChange: s, sortChange: l, getPageF: t, handleDel: i, handleUpdate: g, handleSave: c, refreshChange: m };
} }, j = { class: "execution" };
function V(n, e, d, s, l, t) {
  const i = L("avue-crud"), g = B;
  return P(), R("div", j, [p(g, null, { default: $(() => [p(i, { ref: "crud", page: n.page, "onUpdate:page": e[0] || (e[0] = (c) => n.page = c), data: n.tableData, permission: s.permissionList, "table-loading": n.tableLoading, option: n.tableOption, modelValue: n.form, "onUpdate:modelValue": e[1] || (e[1] = (c) => n.form = c), onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const F = _(z, [["render", V]]);
export {
  F as default
};
