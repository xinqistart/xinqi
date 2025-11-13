import { A as f, R as h, q as b, K as S, S as C, b1 as _, _ as w, r as L, c as R, o as P, b as l, h as $, a_ as B } from "./index-DAdfXJ2i.js";
import { a as D, p as O, d as v, b as x } from "./pointsconfig-Df6yTocn.js";
import { t as y } from "./pointsconfig-No0xAy1F.js";
const z = { setup() {
  const { proxy: n } = f(), e = h({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: y }), d = b(() => {
    var _a;
    const a = (_a = S()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:pointsconfig:add"], delBtn: !!a["mall:pointsconfig:del"], editBtn: !!a["mall:pointsconfig:edit"], viewBtn: !!a["mall:pointsconfig:get"] };
  });
  function s(a, o) {
    a = _(a), e.paramsSearch = a, e.page.currentPage = 1, t(e.page, a), o();
  }
  function p(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function t(a, o) {
    e.tableLoading = true, x(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function r(a) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return v(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), t(e.page);
    });
  }
  function i(a, o, c, u) {
    O(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), c(), t(e.page);
    }).catch(() => {
      u();
    });
  }
  function g(a, o, c) {
    D(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), o(), t(e.page);
    }).catch(() => {
      c();
    });
  }
  function m() {
    t(e.page);
  }
  return { ...C(e), permissionList: d, searchChange: s, sortChange: p, getPageF: t, handleDel: r, handleUpdate: i, handleSave: g, refreshChange: m };
} }, U = { class: "execution" };
function j(n, e, d, s, p, t) {
  const r = L("avue-crud"), i = B;
  return P(), R("div", U, [l(i, null, { default: $(() => [l(r, { ref: "crud", page: n.page, "onUpdate:page": e[0] || (e[0] = (g) => n.page = g), data: n.tableData, permission: s.permissionList, "table-loading": n.tableLoading, option: n.tableOption, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const T = w(z, [["render", j]]);
export {
  T as default
};
