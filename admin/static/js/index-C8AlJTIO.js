import { A as h, R as f, q as b, K as S, S as C, b1 as _, _ as w, r as L, c as R, o as P, b as p, h as $, a_ as B } from "./index-DAdfXJ2i.js";
import { a as D, p as O, d as v, b as y } from "./distributionconfig-DFgn2QpM.js";
import { t as z } from "./distributionconfig-BvZQ2smc.js";
const U = { setup() {
  const { proxy: n } = h(), e = f({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: z }), g = b(() => {
    var _a;
    const a = (_a = S()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:distributionconfig:add"], delBtn: !!a["mall:distributionconfig:del"], editBtn: !!a["mall:distributionconfig:edit"], viewBtn: !!a["mall:distributionconfig:get"] };
  });
  function o(a, s) {
    a = _(a), e.paramsSearch = a, e.page.currentPage = 1, t(e.page, a), s();
  }
  function l(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function t(a, s) {
    e.tableLoading = true, y(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((c) => {
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
  function i(a, s, c, u) {
    O(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), c(), t(e.page);
    }).catch(() => {
      u();
    });
  }
  function d(a, s, c) {
    D(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), s(), t(e.page);
    }).catch(() => {
      c();
    });
  }
  function m() {
    t(e.page);
  }
  return { ...C(e), permissionList: g, searchChange: o, sortChange: l, getPageF: t, handleDel: r, handleUpdate: i, handleSave: d, refreshChange: m };
} }, j = { class: "execution" };
function x(n, e, g, o, l, t) {
  const r = L("avue-crud"), i = B;
  return P(), R("div", j, [p(i, null, { default: $(() => [p(r, { ref: "crud", page: n.page, data: n.tableData, permission: o.permissionList, "table-loading": n.tableLoading, option: n.tableOption, modelValue: n.form, "onUpdate:modelValue": e[0] || (e[0] = (d) => n.form = d), onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const A = w(U, [["render", x]]);
export {
  A as default
};
