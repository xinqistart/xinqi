import { A as b, R as w, q as v, K as B, S as I, b1 as L, _ as R, r as h, c as _, o as S, b as c, h as p, B as $, e as u, z as D, a_ as P } from "./index-DAdfXJ2i.js";
import { _ as y } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { t as O, a as U, p as z, d as V, g as j } from "./usercollect-Ma36dIuQ.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
const k = { setup() {
  const { proxy: o } = b(), a = w({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: O }), m = v(() => {
    var _a;
    const e = (_a = B()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:usercollect:add"], delBtn: !!e["mall:usercollect:del"], editBtn: !!e["mall:usercollect:edit"], viewBtn: !!e["mall:usercollect:get"] };
  });
  function s(e, n) {
    e = L(e), a.paramsSearch = e, a.page.currentPage = 1, t(a.page, e), n();
  }
  function f(e) {
    const n = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (a.page.descs = "", a.page.ascs = n) : e.order == "descending" ? (a.page.ascs = "", a.page.descs = n) : (a.page.ascs = "", a.page.descs = ""), t(a.page);
  }
  function t(e, n) {
    a.tableLoading = true, j(Object.assign({ current: e.currentPage, size: e.pageSize, descs: a.page.descs, ascs: a.page.ascs, type: "1" }, n, a.paramsSearch)).then((r) => {
      a.tableData = r.data.records, a.page.total = r.data.total, a.page.currentPage = e.currentPage, a.page.pageSize = e.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function l(e) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return V(e.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), t(a.page);
    });
  }
  function d(e, n, r, C) {
    z(e).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), r(), t(a.page);
    }).catch(() => {
      C();
    });
  }
  function i(e, n, r) {
    U(e).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), n(), t(a.page);
    }).catch(() => {
      r();
    });
  }
  function g() {
    t(a.page);
  }
  return { ...I(a), permissionList: m, searchChange: s, sortChange: f, getPageF: t, handleDel: l, handleUpdate: d, handleSave: i, refreshChange: g };
} }, F = { key: 0 };
function N(o, a, m, s, f, t) {
  const l = y, d = h("el-avatar"), i = h("avue-crud"), g = P;
  return S(), _("div", null, [c(g, null, { default: p(() => [c(i, { ref: "crud", modelValue: o.form, "onUpdate:modelValue": a[0] || (a[0] = (e) => o.form = e), page: o.page, data: o.tableData, permission: s.permissionList, "table-loading": o.tableLoading, option: o.tableOption, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { userId: p(({ row: e }) => [c(l, { userId: e.userId, userInfo: e.userInfo }, null, 8, ["userId", "userInfo"])]), relationId: p((e) => [e.row.goodsSpu ? (S(), _("div", F, [u("div", null, [c(d, { src: e.row.goodsSpu.picUrls[0], shape: "square" }, null, 8, ["src"])]), u("div", null, [u("span", null, D(e.row.goodsSpu.name), 1)])])) : $("", true)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const K = R(k, [["render", N], ["__scopeId", "data-v-890f1150"]]);
export {
  K as default
};
