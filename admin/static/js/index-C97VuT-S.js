import { n as b, A as f, R as S, q as C, K as w, S as T, b1 as _, _ as x, r as L, c as B, o as O, b as i, h as $, a_ as R } from "./index-DAdfXJ2i.js";
import { a as q, p as D, d as N, b as P } from "./userrecord-Cw1Kh-cW.js";
const { $t: e } = b(), v = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: e("mall.userrecord.id"), prop: "id", sortable: true, rules: [{ required: true, message: e("mall.userrecord.id") + e("commons.notNull"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.userrecord.tenantId"), prop: "tenantId", sortable: true, rules: [{ required: true, message: e("mall.userrecord.tenantId") + e("commons.notNull"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.userrecord.delFlag"), prop: "delFlag", sortable: true, rules: [{ required: true, message: e("mall.userrecord.delFlag") + e("commons.notNull"), trigger: "blur" }, { max: 2, message: '$t("commons.lengthTips", { length: 2 })' }] }, { label: e("mall.userrecord.createTime"), prop: "createTime", sortable: true, rules: [{ required: true, message: e("mall.userrecord.createTime") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.userrecord.updateTime"), prop: "updateTime", sortable: true, rules: [{ required: true, message: e("mall.userrecord.updateTime") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.userrecord.userId"), prop: "userId", sortable: true, rules: [{ required: true, message: e("mall.userrecord.userId") + e("commons.notNull"), trigger: "blur" }, { max: 31, message: e("commons.lengthTips", { length: 31 }) }] }, { label: e("mall.userrecord.totalOrder"), prop: "totalOrder", sortable: true, rules: [{ required: true, message: e("mall.userrecord.totalOrder") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.userrecord.totalAmount"), prop: "totalAmount", sortable: true, rules: [{ required: true, message: e("mall.userrecord.totalAmount") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.userrecord.remarks"), prop: "remarks", sortable: true, rules: [{ max: 500, message: e("commons.lengthTips", { length: 500 }) }] }] }, I = { setup() {
  const { proxy: s } = f(), r = S({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: v }), d = C(() => {
    var _a;
    const a = (_a = w()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:userrecord:add"], delBtn: !!a["mall:userrecord:del"], editBtn: !!a["mall:userrecord:edit"], viewBtn: !!a["mall:userrecord:get"] };
  });
  function t(a, o) {
    a = _(a), r.paramsSearch = a, r.page.currentPage = 1, n(r.page, a), o();
  }
  function g(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (r.page.descs = "", r.page.ascs = o) : a.order == "descending" ? (r.page.ascs = "", r.page.descs = o) : (r.page.ascs = "", r.page.descs = ""), n(r.page);
  }
  function n(a, o) {
    r.tableLoading = true, P(Object.assign({ current: a.currentPage, size: a.pageSize, descs: r.page.descs, ascs: r.page.ascs }, o, r.paramsSearch)).then((l) => {
      r.tableData = l.data.records, r.page.total = l.data.total, r.page.currentPage = a.currentPage, r.page.pageSize = a.pageSize, r.tableLoading = false;
    }).catch(() => {
      r.tableLoading = false;
    });
  }
  function c(a) {
    s.$confirm(s.$t("commons.confirmDelete"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(function() {
      return N(a.id);
    }).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.delSuccess"), type: "success" }), n(r.page);
    });
  }
  function u(a, o, l, h) {
    D(a).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.updateSuccess"), type: "success" }), l(), n(r.page);
    }).catch(() => {
      h();
    });
  }
  function m(a, o, l) {
    q(a).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.addSuccess"), type: "success" }), o(), n(r.page);
    }).catch(() => {
      l();
    });
  }
  function p() {
    n(r.page);
  }
  return { ...T(r), permissionList: d, searchChange: t, sortChange: g, getPageF: n, handleDel: c, handleUpdate: u, handleSave: m, refreshChange: p };
} }, y = { class: "execution" };
function A(s, r, d, t, g, n) {
  const c = L("avue-crud"), u = R;
  return O(), B("div", y, [i(u, null, { default: $(() => [i(c, { ref: "crud", page: s.page, data: s.tableData, permission: t.permissionList, "table-loading": s.tableLoading, option: s.tableOption, modelValue: s.form, "onUpdate:modelValue": r[0] || (r[0] = (m) => s.form = m), onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const z = x(I, [["render", A]]);
export {
  z as default
};
