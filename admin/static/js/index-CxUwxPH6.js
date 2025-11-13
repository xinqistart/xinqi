import { aO as g, n as C, A as S, R as T, K as I, q as v, S as w, b1 as d, _ as L, r as $, c as q, o as D, b as h, h as b, f as O, z as x, a_ as B } from "./index-DAdfXJ2i.js";
function R(a) {
  return g.request("get", "/upms/tenantpackagerecharge/page", { params: a });
}
function _(a) {
  return g.request("post", "/upms/tenantpackagerecharge", { data: a });
}
function W(a) {
  return g.request("get", "/upms/tenantpackagerecharge/" + a);
}
function U(a) {
  return g.request("delete", "/upms/tenantpackagerecharge/" + a);
}
function N(a) {
  return g.request("put", "/upms/tenantpackagerecharge", { data: a });
}
function M(a) {
  return g.request("post", "/upms/tenantpackagerecharge/unified", { data: a });
}
const { $t: e } = C(), j = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: false, menu: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 60, searchGutter: 30, searchLabelPosition: "left", column: [{ label: e("commons.createTime"), prop: "createTime", sortable: true, rules: [] }, { label: e("upms.tenantpackagerecharge.tenantId"), prop: "tenantId", search: true, type: "select", sortable: true, display: false, props: { label: "name", value: "id" }, dicUrl: "/upms/tenant/list" }, { label: e("upms.tenantpackagerecharge.packageId"), prop: "packageId", search: true, type: "select", searchLabelWidth: 120, display: false, props: { label: "name", value: "id" }, dicUrl: "/upms/tenantpackage/list" }, { label: e("upms.tenantpackagerecharge.packageCostId"), prop: "packageCostId", sortable: true, display: false, slot: true, props: { label: "type", value: "id" }, dicUrl: "/upms/tenantpackagecost/list" }, { label: e("upms.tenantpackagerecharge.count"), prop: "count", sortable: true, rules: [{ required: true, message: e("upms.tenantpackagerecharge.count") + e("commons.notNull"), trigger: "blur" }] }, { label: e("upms.tenantpackagerecharge.paymentPrice"), prop: "paymentPrice", sortable: true, rules: [{ required: true, message: e("upms.tenantpackagerecharge.paymentPrice") + e("commons.notNull"), trigger: "blur" }] }, { label: e("upms.tenantpackagerecharge.isPay"), prop: "isPay", type: "select", sortable: true, display: false, search: true, dicData: [{ label: e("mall.orderinfo.isPay0"), value: "0" }, { label: e("mall.orderinfo.isPay1"), value: "1" }], html: true, formatter: (a) => a.isPay == "0" ? '<b style="color:red">' + e("mall.orderinfo.isPay0") + "</b>" : '<b style="color:green">' + e("mall.orderinfo.isPay1") + "</b>" }, { label: e("upms.tenantpackagerecharge.paymentType"), prop: "paymentType", type: "select", search: true, searchLabelWidth: 120, sortable: true, display: false, dicData: [{ label: e("mall.orderinfo.paymentType1"), value: "1" }, { label: e("mall.orderinfo.paymentType2"), value: "2" }] }, { label: e("upms.tenantpackagerecharge.paymentTime"), prop: "paymentTime", sortable: true, rules: [] }, { label: e("upms.tenantpackagerecharge.transactionId"), prop: "transactionId", sortable: true, rules: [{ max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("upms.tenantpackagerecharge.tradeNo"), prop: "tradeNo", sortable: true, rules: [{ max: 32, message: e("commons.lengthTips", { length: 32 }) }] }] };
e("commons.indexLabel"), e("commons.createTime"), e("upms.tenant.tenantPackage"), e("upms.tenant.tenantPackageRequired"), e("pay.payconfig.maxLength64"), e("upms.tenantpackagerecharge.tenantPackageCost"), e("upms.tenantpackagerecharge.quantity"), e("upms.tenantpackagerecharge.enterQuantity"), e("upms.tenantpackagerecharge.paymentAmount"), e("upms.tenantpackagerecharge.enterPaymentAmount"), e("upms.tenantpackagerecharge.isPaid"), e("pay.payconfig.paymentType"), e("upms.tenantpackagerecharge.paymentTime"), e("upms.tenantpackagerecharge.paymentTransactionID"), e("commons.lengthTips", { length: 32 }), e("upms.tenantpackagerecharge.merchantOrderNumber"), e("commons.lengthTips", { length: 32 });
const z = { name: "systenantpackagerecharge", props: { tenantId: { type: String, default: "" }, isPay: { type: String, default: "" } }, setup(a) {
  const { proxy: n } = S(), t = T({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: j }), s = I().permissions, m = v(() => ({ addBtn: !!s["upms:tenantpackagerecharge:add"], delBtn: !!s["upms:tenantpackagerecharge:del"], editBtn: !!s["upms:tenantpackagerecharge:edit"], viewBtn: !!s["upms:tenantpackagerecharge:get"] }));
  function p(r, l) {
    t.tableLoading = true, R(d(Object.assign({ current: r.currentPage, size: r.pageSize, descs: t.page.descs, ascs: t.page.ascs, tenantId: a.tenantId || "", isPay: a.isPay || "" }, l, t.paramsSearch))).then((c) => {
      t.tableData = c.data.records, t.page.total = c.data.total, t.page.currentPage = r.currentPage, t.page.pageSize = r.pageSize, t.tableLoading = false;
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function u(r) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return U(r.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), p(t.page);
    });
  }
  function i(r, l, c, P) {
    N(r).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), c(), p(t.page);
    }).catch(() => {
      P();
    });
  }
  function o(r, l, c) {
    _(r).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), l(), p(t.page);
    }).catch(() => {
      c();
    });
  }
  function f(r, l) {
    r = d(r), t.paramsSearch = r, t.page.currentPage = 1, p(t.page, r), l();
  }
  function y(r) {
    const l = r.prop ? r.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    r.order == "ascending" ? (t.page.descs = "", t.page.ascs = l) : r.order == "descending" ? (t.page.ascs = "", t.page.descs = l) : (t.page.ascs = "", t.page.descs = ""), p(t.page);
  }
  function k() {
    p(t.page);
  }
  return { ...w(t), permissions: s, permissionList: m, getPageF: p, handleDel: u, handleUpdate: i, handleSave: o, searchChange: f, sortChange: y, refreshChange: k };
} };
function A(a, n, t, s, m, p) {
  const u = $("avue-crud"), i = B;
  return D(), q("div", null, [h(i, null, { default: b(() => [h(u, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": n[0] || (n[0] = (o) => a.form = o), page: a.page, "onUpdate:page": n[1] || (n[1] = (o) => a.page = o), data: a.tableData, permission: s.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { packageCostId: b((o) => [O(x(o.row.$packageCostId == "1" ? a.$t("upms.tenantpackagerecharge.daily") : o.row.$packageCostId == "2" ? a.$t("upms.tenantpackagerecharge.monthly") : o.row.$packageCostId == "3" ? a.$t("upms.tenantpackagerecharge.yearly") : ""), 1)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const V = L(z, [["render", A]]), E = Object.freeze(Object.defineProperty({ __proto__: null, default: V }, Symbol.toStringTag, { value: "Module" }));
export {
  V as T,
  _ as a,
  W as g,
  E as i,
  M as u
};
