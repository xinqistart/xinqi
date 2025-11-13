import { n as f, A as S, R as C, K as w, q as L, S as B, b1 as v, _ as R, r as $, c as D, o as P, b as d, h as T, a_ as _ } from "./index-DAdfXJ2i.js";
import { a as x, p as O, d as y, b as A } from "./userbalance-Dmj44VeU.js";
const { $t: s } = f(), U = { dialogDrag: true, indexLabel: s("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: s("mall.userbalance.userId"), prop: "userId", sortable: true, rules: [{ required: true, message: s("mall.userbalance.userId") + s("commons.notNull"), trigger: "blur" }, { max: 32, message: s("commons.lengthTips", { length: 32 }) }] }, { label: s("commons.createTime"), prop: "createTime", sortable: true }, { label: s("commons.updateTime"), prop: "updateTime", sortable: true }, { label: s("mall.userbalance.totalAmount"), prop: "totalAmount", sortable: true, rules: [{ required: true, message: s("mall.userbalance.totalAmount") + s("commons.notNull"), trigger: "blur" }] }, { label: s("mall.userbalance.remarks"), prop: "remarks", sortable: true, rules: [{ max: 500, message: s("commons.lengthTips", { length: 500 }) }] }, { label: s("mall.userbalance.version"), prop: "version", sortable: true, rules: [] }] }, k = { name: "userbalance", setup() {
  const { proxy: n } = S(), e = C({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: U }), l = w().permissions, t = L(() => ({ addBtn: !!l["mall:userbalance:add"], delBtn: !!l["mall:userbalance:del"], editBtn: !!l["mall:userbalance:edit"], viewBtn: !!l["mall:userbalance:get"] }));
  function r(a, o) {
    e.tableLoading = true, A(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function g(a) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return y(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function u(a, o, c, h) {
    O(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), c(), r(e.page);
    }).catch(() => {
      h();
    });
  }
  function i(a, o, c) {
    x(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), o(), r(e.page);
    }).catch(() => {
      c();
    });
  }
  function m(a, o) {
    a = v(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), o();
  }
  function p(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function b() {
    r(e.page);
  }
  return { ...B(e), permissions: l, permissionList: t, getPageF: r, handleDel: g, handleUpdate: u, handleSave: i, searchChange: m, sortChange: p, refreshChange: b };
} };
function z(n, e, l, t, r, g) {
  const u = $("avue-crud"), i = _;
  return P(), D("div", null, [d(i, null, { default: T(() => [d(u, { ref: "crud", modelValue: n.form, "onUpdate:modelValue": e[0] || (e[0] = (m) => n.form = m), page: n.page, "onUpdate:page": e[1] || (e[1] = (m) => n.page = m), data: n.tableData, permission: t.permissionList, "table-loading": n.tableLoading, option: n.tableOption, onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const V = R(k, [["render", z]]);
export {
  V as default
};
