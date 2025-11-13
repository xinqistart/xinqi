import { A as f, R as h, q as b, K as S, S as C, b1 as w, _, r as L, c as R, o as y, b as l, h as P, a_ as $ } from "./index-DAdfXJ2i.js";
import { t as B, a as D, p as O, d as v, b as z } from "./configsms-DRGECGVS.js";
const U = { setup() {
  const { proxy: s } = f(), e = h({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: B }), d = b(() => {
    var _a;
    const a = (_a = S()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["upms:sysconfigsms:add"], delBtn: !!a["upms:sysconfigsms:del"], editBtn: !!a["upms:sysconfigsms:edit"], viewBtn: !!a["upms:sysconfigsms:get"] };
  });
  function n(a, o) {
    a = w(a), e.paramsSearch = a, e.page.currentPage = 1, t(e.page, a), o();
  }
  function p(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function t(a, o) {
    e.tableLoading = true, z(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function r(a) {
    s.$confirm(s.$t("commons.confirmDelete"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(function() {
      return v(a.id);
    }).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.delSuccess"), type: "success" }), t(e.page);
    });
  }
  function g(a, o, c, u) {
    O(a).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.updateSuccess"), type: "success" }), c(), t(e.page);
    }).catch(() => {
      u();
    });
  }
  function i(a, o, c) {
    D(a).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.addSuccess"), type: "success" }), o(), t(e.page);
    }).catch(() => {
      c();
    });
  }
  function m() {
    t(e.page);
  }
  return { ...C(e), permissionList: d, searchChange: n, sortChange: p, getPageF: t, handleDel: r, handleUpdate: g, handleSave: i, refreshChange: m };
} };
function j(s, e, d, n, p, t) {
  const r = L("avue-crud"), g = $;
  return y(), R("div", null, [l(g, null, { default: P(() => [l(r, { ref: "crud", page: s.page, data: s.tableData, permission: n.permissionList, "table-loading": s.tableLoading, option: s.tableOption, modelValue: s.form, "onUpdate:modelValue": e[0] || (e[0] = (i) => s.form = i), onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const x = _(U, [["render", j]]);
export {
  x as default
};
