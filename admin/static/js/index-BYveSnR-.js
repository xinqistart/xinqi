import { R as d, q as p, K as l, S as f, b1 as u, _ as m, r as h, c as b, o as C, b as c, h as S, a_ as L } from "./index-DAdfXJ2i.js";
import { a as P } from "./configeditor-CYxVeM-q.js";
import { t as _ } from "./configeditor-BZawu1jk.js";
const B = { setup() {
  const e = d({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: _ }), n = p(() => {
    var _a;
    const a = (_a = l()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["sys:configeditor:add"], delBtn: !!a["sys:configeditor:del"], editBtn: !!a["sys:configeditor:edit"], viewBtn: !!a["sys:configeditor:get"] };
  });
  function i(a, o) {
    a = u(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), o();
  }
  function s(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(a, o) {
    e.tableLoading = true, P(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((t) => {
      e.tableData = t.data.records, e.page.total = t.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function g() {
    r(e.page);
  }
  return { ...f(e), permissionList: n, searchChange: i, sortChange: s, getPageF: r, refreshChange: g };
} };
function z(e, n, i, s, r, g) {
  const a = h("avue-crud"), o = L;
  return C(), b("div", null, [c(o, null, { default: S(() => [c(a, { ref: "crud", page: e.page, "onUpdate:page": n[0] || (n[0] = (t) => e.page = t), data: e.tableData, permission: s.permissionList, "table-loading": e.tableLoading, option: e.tableOption, modelValue: e.form, "onUpdate:modelValue": n[1] || (n[1] = (t) => e.form = t), onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onSortChange: s.sortChange, onSearchChange: s.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const V = m(B, [["render", z]]);
export {
  V as default
};
