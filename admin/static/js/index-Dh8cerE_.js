import { aO as u, n as _, A as C, R as D, K as w, q as y, S as L, b1 as B, _ as I, r as $, c as R, o as O, b as m, h, a_ as P } from "./index-DAdfXJ2i.js";
import { _ as q } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function v(a) {
  return u.request("get", "/mall/signrecord/page", { params: a });
}
function x(a) {
  return u.request("post", "/mall/signrecord", { data: a });
}
function T(a) {
  return u.request("delete", "/mall/signrecord/" + a);
}
function U(a) {
  return u.request("put", "/mall/signrecord", { data: a });
}
const { $t: s } = _(), z = { dialogDrag: true, indexLabel: s("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: s("commons.createTime"), prop: "createTime", sortable: true }, { label: s("mall.signrecord.updateTime"), prop: "updateTime", sortable: true, rules: [{ required: true, message: s("mall.signrecord.updateTime") + s("commons.notNull"), trigger: "blur" }] }, { label: s("mall.signrecord.userId"), prop: "userId", slot: true }, { label: s("mall.signrecord.continuDays"), prop: "continuDays", sortable: true, rules: [{ required: true, message: s("mall.signrecord.continuDays") + s("commons.notNull"), trigger: "blur" }] }, { label: s("mall.signrecord.cumulateDays"), prop: "cumulateDays", sortable: true, rules: [{ required: true, message: s("mall.signrecord.cumulateDays") + s("commons.notNull"), trigger: "blur" }] }] }, j = { setup() {
  var _a;
  const { proxy: a } = C(), e = D({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: z }), c = (_a = w()) == null ? void 0 : _a.permissions, t = y(() => ({ addBtn: !!c["mall:signrecord:add"], delBtn: !!c["mall:signrecord:del"], editBtn: !!c["mall:signrecord:edit"], viewBtn: !!c["mall:signrecord:get"] }));
  function p(n, r) {
    n = B(n), e.paramsSearch = n, e.page.currentPage = 1, o(e.page, n), r();
  }
  function f(n) {
    const r = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (e.page.descs = "", e.page.ascs = r) : n.order == "descending" ? (e.page.ascs = "", e.page.descs = r) : (e.page.ascs = "", e.page.descs = ""), o(e.page);
  }
  function o(n, r) {
    e.tableLoading = true, v(Object.assign({ current: n.currentPage, size: n.pageSize, descs: e.page.descs, ascs: e.page.ascs }, r, e.paramsSearch)).then((i) => {
      e.tableData = i.data.records, e.page.total = i.data.total, e.page.currentPage = n.currentPage, e.page.pageSize = n.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function d(n) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return T(n.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), o(e.page);
    });
  }
  function g(n, r, i, S) {
    U(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), i(), o(e.page);
    }).catch(() => {
      S();
    });
  }
  function l(n, r, i) {
    x(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), r(), o(e.page);
    }).catch(() => {
      i();
    });
  }
  function b() {
    o(e.page);
  }
  return { ...L(e), permissions: c, permissionList: t, searchChange: p, sortChange: f, getPageF: o, handleDel: d, handleUpdate: g, handleSave: l, refreshChange: b };
} }, N = { class: "execution" };
function V(a, e, c, t, p, f) {
  const o = q, d = $("avue-crud"), g = P;
  return O(), R("div", N, [m(g, null, { default: h(() => [m(d, { ref: "crud", page: a.page, data: a.tableData, permission: t.permissionList, "table-loading": a.tableLoading, option: a.tableOption, modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (l) => a.form = l), onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, { userId: h(({ row: l }) => [m(o, { userId: l.userId, userInfo: l.userInfo }, null, 8, ["userId", "userInfo"])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const H = I(j, [["render", V]]);
export {
  H as default
};
