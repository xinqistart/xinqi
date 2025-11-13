import { aO as p, n as C, A as S, R as w, K as T, q as y, S as L, b1 as P, _ as B, r as v, c as x, o as D, b as d, h as R, a_ as $ } from "./index-DAdfXJ2i.js";
function I(e) {
  return p.request("get", "/mall/shoplogisticsaccount/page", { params: e });
}
function O(e) {
  return p.request("post", "/mall/shoplogisticsaccount", { data: e });
}
function _(e) {
  return p.request("delete", "/mall/shoplogisticsaccount/" + e);
}
function q(e) {
  return p.request("put", "/mall/shoplogisticsaccount", { data: e });
}
const { $t: t } = C(), U = { dialogDrag: true, indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, searchLabelPosition: "left", labelPosition: "left", column: [{ label: t("mall.shoplogisticsaccount.shopId"), prop: "shopId", type: "select", filterable: true, search: true, labelWidth: 240, span: 20, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", editDisabled: true, rules: [{ required: true, message: t("mall.shoplogisticsaccount.shopId") + t("commons.notNull") }] }, { label: t("mall.shoplogisticsaccount.logisticsCode"), prop: "logisticsCode", dicUrl: "/mall/configlogistics/logisticscompany", labelTip: "\u5728\u7CFB\u7EDF\u7BA1\u7406\u4E2D\u65B0\u589E\u5FEB\u9012\u516C\u53F8", tipPlacement: "top", span: 20, labelWidth: 240, type: "select", filterable: true, props: { label: "name", value: "code" }, dicFormatter: (e) => e && e instanceof Array ? e : [], rules: [{ required: true, message: t("mall.shoplogisticsaccount.logisticsCode") + t("commons.notNull"), trigger: "blur" }] }, { label: t("mall.shoplogisticsaccount.accountId"), prop: "accountId", sortable: true, labelWidth: 240, width: 140, span: 20, labelTip: t("mall.shoplogisticsaccount.accountIdTip"), rules: [{ required: true, message: t("mall.shoplogisticsaccount.accountId") + t("commons.notNull"), trigger: "blur" }, { max: 32, message: t("commons.lengthTips", { length: 32 }) }] }, { label: t("mall.shoplogisticsaccount.accountKey"), prop: "accountKey", sortable: true, labelWidth: 240, span: 20, labelTip: t("mall.shoplogisticsaccount.accountKeyTip"), rules: [{ max: 32, message: t("commons.lengthTips", { length: 32 }) }] }, { label: t("mall.shoplogisticsaccount.net"), prop: "net", sortable: true, labelWidth: 240, span: 20, labelTip: t("mall.shoplogisticsaccount.netTip"), rules: [{ max: 64, message: t("commons.lengthTips", { length: 64 }) }] }, { label: t("mall.shoplogisticsaccount.code"), prop: "code", sortable: true, labelWidth: 240, span: 20, labelTip: t("mall.shoplogisticsaccount.codeTip"), rules: [{ max: 64, message: t("commons.lengthTips", { length: 64 }) }] }] }, W = { name: "shoplogisticsaccount", setup() {
  const { proxy: e } = S(), a = w({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: U }), c = T().permissions, o = y(() => ({ addBtn: !!c["mall:shoplogisticsaccount:add"], delBtn: !!c["mall:shoplogisticsaccount:del"], editBtn: !!c["mall:shoplogisticsaccount:edit"], viewBtn: !!c["mall:shoplogisticsaccount:get"] }));
  function l(s, n) {
    a.tableLoading = true, I(Object.assign({ current: s.currentPage, size: s.pageSize, descs: a.page.descs, ascs: a.page.ascs }, n, a.paramsSearch)).then((i) => {
      a.tableData = i.data.records, a.page.total = i.data.total, a.page.currentPage = s.currentPage, a.page.pageSize = s.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function m(s) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return _(s.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), l(a.page);
    });
  }
  function u(s, n, i, b) {
    q(s).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), i(), l(a.page);
    }).catch(() => {
      b();
    });
  }
  function g(s, n, i) {
    O(s).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), n(), l(a.page);
    }).catch(() => {
      i();
    });
  }
  function r(s, n) {
    s = P(s), a.paramsSearch = s, a.page.currentPage = 1, l(a.page, s), n();
  }
  function h(s) {
    const n = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (a.page.descs = "", a.page.ascs = n) : s.order == "descending" ? (a.page.ascs = "", a.page.descs = n) : (a.page.ascs = "", a.page.descs = ""), l(a.page);
  }
  function f() {
    l(a.page);
  }
  return { ...L(a), permissions: c, permissionList: o, getPageF: l, handleDel: m, handleUpdate: u, handleSave: g, searchChange: r, sortChange: h, refreshChange: f };
} };
function z(e, a, c, o, l, m) {
  const u = v("avue-crud"), g = $;
  return D(), x("div", null, [d(g, null, { default: R(() => [d(u, { ref: "crud", modelValue: e.form, "onUpdate:modelValue": a[0] || (a[0] = (r) => e.form = r), page: e.page, "onUpdate:page": a[1] || (a[1] = (r) => e.page = r), data: e.tableData, permission: o.permissionList, "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const A = B(W, [["render", z]]);
export {
  A as default
};
