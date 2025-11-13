import { A as l, R as m, q as u, K as f, S as h, b1 as C, _ as b, r as _, c as S, o as L, b as d, h as P, a_ as D } from "./index-DAdfXJ2i.js";
import { t as w, d as $, g as O } from "./log-BE2CIHJR.js";
const R = { setup() {
  const { proxy: n } = l(), e = m({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: w }), i = u(() => {
    var _a;
    return { delBtn: !!((_a = f()) == null ? void 0 : _a.permissions)["sys:log:del"] };
  });
  function s(a) {
    const t = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), o(e.page);
  }
  function o(a, t) {
    e.tableLoading = true, O(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, t)).then((p) => {
      e.tableData = p.data.records, e.page.total = p.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    });
  }
  function g(a) {
    n.$confirm(n.$t("upms.dict.confirmDeletion"), n.$t("upms.dict.warning"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return $(a.id);
    }).then(() => {
      o(e.page), n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" });
    });
  }
  function r(a, t) {
    a = C(a), e.paramsSearch = a, e.page.currentPage = 1, o(e.page, a), t();
  }
  function c() {
    o(e.page);
  }
  return { ...h(e), permissionList: i, sortChange: s, getPageF: o, handleDel: g, searchChange: r, refreshChange: c };
} }, z = { class: "log" };
function B(n, e, i, s, o, g) {
  const r = _("avue-crud"), c = D;
  return L(), S("div", z, [d(c, null, { default: P(() => [d(r, { ref: "crud", page: n.page, "onUpdate:page": e[0] || (e[0] = (a) => n.page = a), data: n.tableData, "table-loading": n.tableLoading, option: n.tableOption, permission: s.permissionList, onOnLoad: s.getPageF, onSearchChange: s.searchChange, onRefreshChange: s.refreshChange, onSortChange: s.sortChange, onRowDel: s.handleDel }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onSearchChange", "onRefreshChange", "onSortChange", "onRowDel"])]), _: 1 })]);
}
const x = b(R, [["render", B]]);
export {
  x as default
};
