import { n as b, A as S, R as C, K as k, q as w, S as L, b1 as B, _ as R, r as $, c as D, o as P, b as i, h as T, a_ as _ } from "./index-DAdfXJ2i.js";
import { a as v, p as x, d as I, b as O } from "./tenantpackagemenu-Moa1a5ji.js";
const { $t: t } = b(), y = { dialogDrag: true, indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: t("upms.tenantpackagemenu.packageId"), prop: "packageId", sortable: true, rules: [{ required: true, message: t("upms.tenantpackagemenu.packageId") + t("commons.notNull"), trigger: "blur" }, { max: 32, message: t("commons.lengthTips", { length: 32 }) }] }, { label: t("commons.createTime"), prop: "createTime", sortable: true, rules: [] }, { label: t("upms.tenantpackagemenu.updateTime"), prop: "updateTime", sortable: true, rules: [] }, { label: t("upms.tenantpackagemenu.menuIds"), prop: "menuIds", sortable: true, rules: [{ required: true, message: t("upms.tenantpackagemenu.menuIds") + t("commons.notNull"), trigger: "blur" }, { max: 5e3, message: t("commons.lengthTips", { length: 5e3 }) }] }] }, U = { name: "tenantpackagemenu", setup() {
  const { proxy: n } = S(), e = C({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: y }), c = k().permissions, s = w(() => ({ addBtn: !!c["upms:tenantpackagemenu:add"], delBtn: !!c["upms:tenantpackagemenu:del"], editBtn: !!c["upms:tenantpackagemenu:edit"], viewBtn: !!c["upms:tenantpackagemenu:get"] }));
  function r(a, o) {
    e.tableLoading = true, O(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((p) => {
      e.tableData = p.data.records, e.page.total = p.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(a) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return I(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function g(a, o, p, f) {
    x(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), p(), r(e.page);
    }).catch(() => {
      f();
    });
  }
  function m(a, o, p) {
    v(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), o(), r(e.page);
    }).catch(() => {
      p();
    });
  }
  function l(a, o) {
    a = B(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), o();
  }
  function d(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function h() {
    r(e.page);
  }
  return { ...L(e), permissions: c, permissionList: s, getPageF: r, handleDel: u, handleUpdate: g, handleSave: m, searchChange: l, sortChange: d, refreshChange: h };
} };
function z(n, e, c, s, r, u) {
  const g = $("avue-crud"), m = _;
  return P(), D("div", null, [i(m, null, { default: T(() => [i(g, { ref: "crud", modelValue: n.form, "onUpdate:modelValue": e[0] || (e[0] = (l) => n.form = l), page: n.page, "onUpdate:page": e[1] || (e[1] = (l) => n.page = l), data: n.tableData, permission: s.permissionList, "table-loading": n.tableLoading, option: n.tableOption, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const q = R(U, [["render", z]]);
export {
  q as default
};
