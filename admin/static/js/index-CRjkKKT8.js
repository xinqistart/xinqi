import { aO as p, n as C, A as S, R as w, K as T, q as L, S as y, b1 as B, _ as P, r as v, c as x, o as D, b as d, h as R, a_ as $ } from "./index-DAdfXJ2i.js";
function I(e) {
  return p.request("get", "/mall/supplierlogisticsaccount/page", { params: e });
}
function O(e) {
  return p.request("post", "/mall/supplierlogisticsaccount", { data: e });
}
function _(e) {
  return p.request("delete", "/mall/supplierlogisticsaccount/" + e);
}
function q(e) {
  return p.request("put", "/mall/supplierlogisticsaccount", { data: e });
}
const { $t: s } = C(), U = { dialogDrag: true, indexLabel: s("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 240, searchLabelPosition: "left", labelPosition: "left", column: [{ label: s("mall.supplierlogisticsaccount.supplierId"), prop: "supplierId", type: "select", filterable: true, search: true, span: 20, searchLabelWidth: 120, props: { label: "name", value: "id" }, dicUrl: "/mall/supplier/list", editDisabled: true, rules: [{ required: true, message: s("mall.supplierlogisticsaccount.supplierId") + s("commons.notNull") }] }, { label: s("mall.supplierlogisticsaccount.logisticsCode"), prop: "logisticsCode", dicUrl: "/mall/configlogistics/logisticscompany", dicFormatter: (e) => e && e instanceof Array ? e : [], span: 20, type: "select", filterable: true, props: { label: "name", value: "code" }, rules: [{ required: true, message: s("mall.supplierlogisticsaccount.logisticsCode") + s("commons.notNull"), trigger: "blur" }] }, { label: s("mall.supplierlogisticsaccount.accountId"), prop: "accountId", sortable: true, minWidth: 200, span: 20, labelTip: s("mall.supplierlogisticsaccount.accountIdTip"), rules: [{ required: true, message: s("mall.supplierlogisticsaccount.accountId") + s("commons.notNull"), trigger: "blur" }, { max: 32, message: s("commons.lengthTips", { length: 32 }) }] }, { label: s("mall.supplierlogisticsaccount.accountKey"), prop: "accountKey", sortable: true, span: 20, labelTip: s("mall.shoplogisticsaccount.accountKeyTip"), rules: [{ max: 32, message: s("commons.lengthTips", { length: 32 }) }] }, { label: s("mall.supplierlogisticsaccount.net"), prop: "net", span: 20, sortable: true, labelTip: s("mall.shoplogisticsaccount.netTip"), rules: [{ max: 64, message: s("commons.lengthTips", { length: 64 }) }] }, { label: s("mall.supplierlogisticsaccount.code"), prop: "code", span: 20, sortable: true, labelTip: s("mall.shoplogisticsaccount.codeTip"), rules: [{ max: 64, message: s("commons.lengthTips", { length: 64 }) }] }] }, z = { name: "supplierlogisticsaccount", setup() {
  const { proxy: e } = S(), a = w({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: U }), c = T().permissions, o = L(() => ({ addBtn: !!c["mall:supplierlogisticsaccount:add"], delBtn: !!c["mall:supplierlogisticsaccount:del"], editBtn: !!c["mall:supplierlogisticsaccount:edit"], viewBtn: !!c["mall:supplierlogisticsaccount:get"] }));
  function l(t, n) {
    a.tableLoading = true, I(Object.assign({ current: t.currentPage, size: t.pageSize, descs: a.page.descs, ascs: a.page.ascs }, n, a.paramsSearch)).then((r) => {
      a.tableData = r.data.records, a.page.total = r.data.total, a.page.currentPage = t.currentPage, a.page.pageSize = t.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function m(t) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return _(t.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), l(a.page);
    });
  }
  function u(t, n, r, b) {
    q(t).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), r(), l(a.page);
    }).catch(() => {
      b();
    });
  }
  function g(t, n, r) {
    O(t).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), n(), l(a.page);
    }).catch(() => {
      r();
    });
  }
  function i(t, n) {
    t = B(t), a.paramsSearch = t, a.page.currentPage = 1, l(a.page, t), n();
  }
  function h(t) {
    const n = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (a.page.descs = "", a.page.ascs = n) : t.order == "descending" ? (a.page.ascs = "", a.page.descs = n) : (a.page.ascs = "", a.page.descs = ""), l(a.page);
  }
  function f() {
    l(a.page);
  }
  return { ...y(a), permissions: c, permissionList: o, getPageF: l, handleDel: m, handleUpdate: u, handleSave: g, searchChange: i, sortChange: h, refreshChange: f };
} };
function j(e, a, c, o, l, m) {
  const u = v("avue-crud"), g = $;
  return D(), x("div", null, [d(g, null, { default: R(() => [d(u, { ref: "crud", modelValue: e.form, "onUpdate:modelValue": a[0] || (a[0] = (i) => e.form = i), page: e.page, "onUpdate:page": a[1] || (a[1] = (i) => e.page = i), data: e.tableData, permission: o.permissionList, "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const F = P(z, [["render", j]]);
export {
  F as default
};
