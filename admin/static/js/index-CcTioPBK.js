import { A as y, R as B, q as L, K as R, S as $, b1 as D, _ as P, r as _, c as v, o as p, b as u, h as i, e as x, g as b, f as S, z as C, a_ as z } from "./index-DAdfXJ2i.js";
import { _ as O } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { a as I, b as k, p as U, d as j, g as F } from "./pointsrecord-B3LJmQYJ.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
const N = { components: {}, setup() {
  const { proxy: t } = y(), e = B({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: I }), m = L(() => {
    var _a;
    const a = (_a = R()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:pointsrecord:add"], delBtn: !!a["mall:pointsrecord:del"], editBtn: !!a["mall:pointsrecord:edit"], viewBtn: !!a["mall:pointsrecord:get"] };
  });
  function n({ row: a, columnIndex: o }) {
    if (o == 3) return a.amount > 0 ? { color: "green", fontWeight: "bold", fontSize: "20" } : { color: "red", fontWeight: "bold", fontSize: "20" };
  }
  function f(a, o) {
    a = D(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), o();
  }
  function h(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(a, o) {
    e.tableLoading = true, F(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function d(a) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return j(a.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function l(a, o, c, w) {
    U(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), c(), r(e.page);
    }).catch(() => {
      w();
    });
  }
  function g(a, o, c) {
    k(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), o(), r(e.page);
    }).catch(() => {
      c();
    });
  }
  function s() {
    r(e.page);
  }
  return { ...$(e), permissionList: m, cellStyle: n, searchChange: f, sortChange: h, getPageF: r, handleDel: d, handleUpdate: l, handleSave: g, refreshChange: s };
} }, T = { class: "execution" };
function V(t, e, m, n, f, h) {
  const r = O, d = _("el-text"), l = _("avue-crud"), g = z;
  return p(), v("div", T, [u(g, null, { default: i(() => [u(l, { ref: "crud", page: t.page, "onUpdate:page": e[0] || (e[0] = (s) => t.page = s), data: t.tableData, permission: n.permissionList, "table-loading": t.tableLoading, option: t.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, { userCode: i(({ row: s }) => [u(r, { userId: s.userId, userInfo: s.userInfo }, null, 8, ["userId", "userInfo"])]), amount: i((s) => [x("div", null, [s.row.amount > 0 ? (p(), b(d, { key: 0, tag: "b", type: "success" }, { default: i(() => [S(C(s.row.amount), 1)]), _: 2 }, 1024)) : (p(), b(d, { key: 1, tag: "b", type: "danger" }, { default: i(() => [S(C(s.row.amount), 1)]), _: 2 }, 1024))])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const M = P(N, [["render", V]]);
export {
  M as default
};
