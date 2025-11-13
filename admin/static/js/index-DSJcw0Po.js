import { A as b, R as S, q as C, K as w, S as y, cq as L, _ as R, r as _, c as O, o as P, b as u, h as $, a_ as v } from "./index-DAdfXJ2i.js";
import { t as B, a as D, g, p as j, d as U } from "./loglogin-DSKzCisN.js";
const z = { setup() {
  const { proxy: n } = b(), e = S({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: B }), d = C(() => {
    var _a;
    const a = (_a = w()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["sys:loglogin:add"], delBtn: !!a["sys:loglogin:del"], editBtn: !!a["sys:loglogin:edit"], viewBtn: !!a["sys:loglogin:get"] };
  });
  function s(a) {
    const o = {};
    return Object.keys(a).forEach((t) => {
      L(a[t]) || (o[t] = a[t]);
    }), o;
  }
  function l(a, o) {
    a = s(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), o();
  }
  function p(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(a, o) {
    e.tableLoading = true, g(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((t) => {
      e.tableData = t.data.records, e.page.total = t.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function i(a) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return U(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), g(e.page);
    });
  }
  function c(a, o, t, h) {
    j(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), t(), g(e.page);
    }).catch(() => {
      h();
    });
  }
  function m(a, o, t) {
    D(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), o(), g(e.page);
    }).catch(() => {
      t();
    });
  }
  function f() {
    r(e.page);
  }
  return { ...y(e), permissionList: d, searchChange: l, sortChange: p, getPageF: r, handleDel: i, handleUpdate: c, handleSave: m, refreshChange: f };
} };
function k(n, e, d, s, l, p) {
  const r = _("avue-crud"), i = v;
  return P(), O("div", null, [u(i, null, { default: $(() => [u(r, { ref: "crud", page: n.page, "onUpdate:page": e[0] || (e[0] = (c) => n.page = c), data: n.tableData, permission: s.permissionList, "table-loading": n.tableLoading, option: n.tableOption, modelValue: n.form, "onUpdate:modelValue": e[1] || (e[1] = (c) => n.form = c), onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const q = R(z, [["render", k]]);
export {
  q as default
};
