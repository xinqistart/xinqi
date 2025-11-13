import { aO as p, n as S, A as v, R, K as N, q as y, S as C, b1 as L, _ as P, r as T, c as _, o as w, b as u, h as D, a_ as O } from "./index-DAdfXJ2i.js";
function I(r) {
  return p.request("get", "/mall/orderprofitsharing/page", { params: r });
}
function A(r) {
  return p.request("post", "/mall/orderprofitsharing", { data: r });
}
function B(r) {
  return p.request("delete", "/mall/orderprofitsharing/" + r);
}
function x(r) {
  return p.request("put", "/mall/orderprofitsharing", { data: r });
}
const { $t: e } = S(), E = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, showSummary: true, sumColumnList: [{ label: "\u603B\u8BA1: ", name: "amount", type: "sum", decimals: 2 }], searchMenuSpan: 6, labelWidth: 150, searchGutter: 30, searchLabelPosition: "left", column: [{ label: e("mall.orderprofitsharing.shopId"), prop: "shopId", type: "select", search: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", display: false }, { label: e("commons.createTime"), prop: "createTime", sortable: true }, { label: e("mall.orderprofitsharing.orderId"), prop: "orderId", sortable: true, search: true, rules: [{ required: true, message: e("mall.orderprofitsharing.orderId") + e("commons.notNull"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("commons.type"), prop: "paymentType", search: true, type: "radio", sortable: true, hide: true, width: 110, display: false, dicData: [{ label: e("mall.orderinfo.paymentType1"), value: "1" }, { label: e("mall.orderinfo.paymentType2"), value: "2" }] }, { label: e("mall.orderprofitsharing.dividedReceiptType"), prop: "dividedReceiptType", sortable: true, rules: [{ required: true, message: e("mall.orderprofitsharing.dividedReceiptType") + e("commons.notNull"), trigger: "blur" }, { max: 20, message: e("commons.lengthTips", { length: 20 }) }], dicData: [{ label: e("mall.orderprofitsharing.MERCHANT_ID"), value: "MERCHANT_ID" }, { label: e("mall.orderprofitsharing.PERSONAL_OPENID"), value: "PERSONAL_OPENID" }, { label: e("mall.orderprofitsharing.PERSONAL_SUB_OPENID"), value: "PERSONAL_SUB_OPENID" }, { label: e("mall.orderprofitsharing.userId"), value: "userId" }, { label: e("mall.orderprofitsharing.cardAliasNo"), value: "cardAliasNo" }, { label: e("mall.orderprofitsharing.loginName"), value: "loginName" }] }, { label: e("mall.orderprofitsharing.dividedReceiptAccount"), prop: "dividedReceiptAccount", sortable: true, rules: [{ required: true, message: e("mall.orderprofitsharing.dividedReceiptAccount") + e("commons.notNull"), trigger: "blur" }, { max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("mall.orderprofitsharing.dividedReceiptName"), prop: "dividedReceiptName", sortable: true, rules: [{ required: true, message: e("mall.orderprofitsharing.dividedReceiptName") + e("commons.notNull"), trigger: "blur" }, { max: 200, message: e("commons.lengthTips", { length: 200 }) }] }, { label: e("mall.orderprofitsharing.amount"), prop: "amount", sortable: true, rules: [{ required: true, message: e("mall.orderprofitsharing.amount") + e("commons.notNull"), trigger: "blur" }] }, { label: e("mall.orderprofitsharing.description"), prop: "description", sortable: true, search: true, searchLabelWidth: 100, rules: [{ max: 250, message: e("commons.lengthTips", { length: 250 }) }] }] }, q = { name: "orderprofitsharing", setup() {
  const { proxy: r } = v(), a = R({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: E }), l = N().permissions, o = y(() => ({ addBtn: !!l["mall:orderprofitsharing:add"], delBtn: !!l["mall:orderprofitsharing:del"], editBtn: !!l["mall:orderprofitsharing:edit"], viewBtn: !!l["mall:orderprofitsharing:get"] }));
  function n(t, s) {
    a.tableLoading = true, I(Object.assign({ current: t.currentPage, size: t.pageSize, descs: a.page.descs, ascs: a.page.ascs }, s, a.paramsSearch)).then((i) => {
      a.tableData = i.data.records, a.page.total = i.data.total, a.page.currentPage = t.currentPage, a.page.pageSize = t.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function g(t) {
    r.$confirm(r.$t("commons.confirmDelete"), r.$t("commons.tip"), { confirmButtonText: r.$t("commons.confirm"), cancelButtonText: r.$t("commons.cancel"), type: "warning" }).then(function() {
      return B(t.id);
    }).then(() => {
      r.$message({ showClose: true, message: r.$t("commons.delSuccess"), type: "success" }), n(a.page);
    });
  }
  function c(t, s, i, b) {
    x(t).then(() => {
      r.$message({ showClose: true, message: r.$t("commons.updateSuccess"), type: "success" }), i(), n(a.page);
    }).catch(() => {
      b();
    });
  }
  function m(t, s, i) {
    A(t).then(() => {
      r.$message({ showClose: true, message: r.$t("commons.addSuccess"), type: "success" }), s(), n(a.page);
    }).catch(() => {
      i();
    });
  }
  function d(t, s) {
    t = L(t), a.paramsSearch = t, a.page.currentPage = 1, n(a.page, t), s();
  }
  function h(t) {
    const s = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (a.page.descs = "", a.page.ascs = s) : t.order == "descending" ? (a.page.ascs = "", a.page.descs = s) : (a.page.ascs = "", a.page.descs = ""), n(a.page);
  }
  function f() {
    n(a.page);
  }
  return { ...C(a), permissions: l, permissionList: o, getPageF: n, handleDel: g, handleUpdate: c, handleSave: m, searchChange: d, sortChange: h, refreshChange: f };
} };
function $(r, a, l, o, n, g) {
  const c = T("avue-crud"), m = O;
  return w(), _("div", null, [u(m, null, { default: D(() => [u(c, { ref: "crud", modelValue: r.form, "onUpdate:modelValue": a[0] || (a[0] = (d) => r.form = d), page: r.page, "onUpdate:page": a[1] || (a[1] = (d) => r.page = d), data: r.tableData, permission: o.permissionList, "table-loading": r.tableLoading, option: r.tableOption, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const z = P(q, [["render", $]]);
export {
  z as default
};
