import { A as h, R as f, q as b, K as S, S as C, b1 as _, _ as w, r as v, c as L, o as R, b as p, h as P, a_ as $ } from "./index-DAdfXJ2i.js";
import { a as B, p as D, d as O, b as x } from "./goodsspecvalue-CIlXCfn0.js";
import { t as y } from "./goodsspecvalue-Ctzffg6t.js";
const z = { setup() {
  const { proxy: s } = h(), e = f({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: y }), i = b(() => {
    var _a;
    const a = (_a = S()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:goodsspecvalue:add"], delBtn: !!a["mall:goodsspecvalue:del"], editBtn: !!a["mall:goodsspecvalue:edit"], viewBtn: !!a["mall:goodsspecvalue:get"] };
  });
  function n(a, o) {
    a = _(a), e.paramsSearch = a, e.page.currentPage = 1, t(e.page, a), o();
  }
  function l(a) {
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
    s.$confirm(s.$t("commons.confirmDelete"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(function() {
      return O(a.id);
    }).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.delSuccess"), type: "success" }), t(e.page);
    });
  }
  function d(a, o, c, u) {
    D(a).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.updateSuccess"), type: "success" }), c(), t(e.page);
    }).catch(() => {
      u();
    });
  }
  function g(a, o, c) {
    B(a).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.addSuccess"), type: "success" }), o(), t(e.page);
    }).catch(() => {
      c();
    });
  }
  function m() {
    t(e.page);
  }
  return { ...C(e), permissionList: i, searchChange: n, sortChange: l, getPageF: t, handleDel: r, handleUpdate: d, handleSave: g, refreshChange: m };
} }, U = { class: "execution" };
function j(s, e, i, n, l, t) {
  const r = v("avue-crud"), d = $;
  return R(), L("div", U, [p(d, null, { default: P(() => [p(r, { ref: "crud", page: s.page, "onUpdate:page": e[0] || (e[0] = (g) => s.page = g), data: s.tableData, permission: n.permissionList, "table-loading": s.tableLoading, option: s.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const T = w(z, [["render", j]]);
export {
  T as default
};
