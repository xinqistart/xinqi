import { R as p, q as d, K as l, S as f, b1 as u, _ as m, r as h, c as b, o as C, b as c, h as S, a_ as L } from "./index-DAdfXJ2i.js";
import { t as P, b as _ } from "./configstorage-L_cIw-iV.js";
const y = { setup() {
  const e = p({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: P }), o = d(() => {
    var _a;
    const a = (_a = l()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["sys:sysconfigstorage:add"], delBtn: !!a["sys:sysconfigstorage:del"], editBtn: !!a["sys:sysconfigstorage:edit"], viewBtn: !!a["sys:sysconfigstorage:get"] };
  });
  function g(a, s) {
    a = u(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), s();
  }
  function n(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(a, s) {
    e.tableLoading = true, _(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((t) => {
      e.tableData = t.data.records, e.page.total = t.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function i() {
    r(e.page);
  }
  return { ...f(e), permissionList: o, searchChange: g, sortChange: n, getPageF: r, refreshChange: i };
} };
function B(e, o, g, n, r, i) {
  const a = h("avue-crud"), s = L;
  return C(), b("div", null, [c(s, null, { default: S(() => [c(a, { ref: "crud", page: e.page, "onUpdate:page": o[0] || (o[0] = (t) => e.page = t), data: e.tableData, permission: n.permissionList, "table-loading": e.tableLoading, option: e.tableOption, modelValue: e.form, "onUpdate:modelValue": o[1] || (o[1] = (t) => e.form = t), onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onSortChange: n.sortChange, onSearchChange: n.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const R = m(y, [["render", B]]);
export {
  R as default
};
