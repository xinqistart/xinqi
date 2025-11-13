import { n as B, A as N, R as T, K as L, q as D, S as R, b1 as I, _ as O, r as $, c as v, o as d, b as P, h as r, g as u, B as h, f as g, z as i, e as _, a_ as x } from "./index-DAdfXJ2i.js";
import { u as U, a as V, p as z, d as F, g as E } from "./shopdeposit-BYUiOAto.js";
const { $t: o } = B(), j = { dialogDrag: true, indexLabel: o("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, searchGutter: 30, searchLabelPosition: "left", column: [{ label: o("mall.shopdeposit.shopId"), prop: "shopId", sortable: true, display: false, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list" }, { label: o("mall.shopdeposit.amount"), prop: "amount", sortable: true, rules: [{ required: true, message: o("mall.shopdeposit.amount") + o("commons.notNull"), trigger: "blur" }] }, { label: o("mall.shopdeposit.isPay"), prop: "isPay", type: "select", sortable: true, display: false, search: true, dicData: [{ label: o("mall.orderinfo.isPay0"), value: "0" }, { label: o("mall.orderinfo.isPay1"), value: "1" }] }, { label: o("mall.shopdeposit.status"), prop: "status", type: "select", search: true, sortable: true, display: false, dicData: [{ label: o("mall.shopdeposit.status1"), value: "1" }, { label: o("mall.shopdeposit.status2"), value: "2" }, { label: o("mall.shopdeposit.status3"), value: "3" }] }, { label: o("mall.shopdeposit.paymentType"), prop: "paymentType", type: "select", search: true, sortable: true, display: false, searchLabelWidth: 120, dicData: [{ label: o("mall.orderinfo.paymentType1"), value: "1" }, { label: o("mall.orderinfo.paymentType2"), value: "2" }] }, { label: o("mall.shopdeposit.paymentTime"), prop: "paymentTime", sortable: true, rules: [] }, { label: o("mall.shopdeposit.transactionId"), prop: "transactionId", sortable: true, rules: [{ max: 32, message: o("commons.lengthTips", { length: 32 }) }] }, { label: o("mall.shopdeposit.withdrawNotes"), prop: "withdrawNotes", slot: true, display: false }] }, q = { name: "shopdeposit", setup() {
  const { proxy: e } = N(), a = T({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: j }), f = L().permissions, n = D(() => ({ addBtn: !!f["mall:shopdeposit:add"], delBtn: !!f["mall:shopdeposit:del"], editBtn: !!f["mall:shopdeposit:edit"], viewBtn: !!f["mall:shopdeposit:get"] }));
  function m(s, l) {
    a.tableLoading = true, E(Object.assign({ current: s.currentPage, size: s.pageSize, descs: a.page.descs, ascs: a.page.ascs }, l, a.paramsSearch)).then((p) => {
      a.tableData = p.data.records, a.page.total = p.data.total, a.page.currentPage = s.currentPage, a.page.pageSize = s.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function k(s) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return F(s.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), m(a.page);
    });
  }
  function c(s, l, p, C) {
    z(s).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), p(), m(a.page);
    }).catch(() => {
      C();
    });
  }
  function y(s, l, p) {
    V(s).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), l(), m(a.page);
    }).catch(() => {
      p();
    });
  }
  function b(s, l) {
    s = I(s), a.paramsSearch = s, a.page.currentPage = 1, m(a.page, s), l();
  }
  function w(s) {
    const l = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (a.page.descs = "", a.page.ascs = l) : s.order == "descending" ? (a.page.ascs = "", a.page.descs = l) : (a.page.ascs = "", a.page.descs = ""), m(a.page);
  }
  function t() {
    m(a.page);
  }
  function S(s, l) {
    let p = "";
    l == "3" && (p = e.$t("mall.shopdeposit.confirmTransfer")), l == "1" && (p = e.$t("mall.shopdeposit.confirmCloseRequest")), e.$confirm(p, e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      U({ shopId: s.shopId, status: l }).then((C) => {
        C.code == 0 && m(a.page);
      });
    });
  }
  return { ...R(a), permissions: f, permissionList: n, getPageF: m, handleDel: k, handleUpdate: c, handleSave: y, searchChange: b, sortChange: w, refreshChange: t, updateStatusExamineF: S };
} }, A = { key: 0 }, W = { key: 1 };
function G(e, a, f, n, m, k) {
  const c = $("el-tag"), y = $("el-button"), b = $("avue-crud"), w = x;
  return d(), v("div", null, [P(w, null, { default: r(() => [P(b, { ref: "crud", modelValue: e.form, "onUpdate:modelValue": a[0] || (a[0] = (t) => e.form = t), page: e.page, "onUpdate:page": a[1] || (a[1] = (t) => e.page = t), data: e.tableData, permission: n.permissionList, "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, { withdrawNotes: r((t) => [t.row.withdrawNotes.phoneNo ? (d(), v("p", A, i(e.$t("mall.shopdeposit.phoneNumber")) + i(t.row.withdrawNotes.phoneNo), 1)) : h("", true), t.row.withdrawNotes.paymentInfo ? (d(), v("p", W, i(e.$t("mall.shopdeposit.receiptInformation")) + i(t.row.withdrawNotes.paymentInfo), 1)) : h("", true)]), isPay: r(({ row: t }) => [_("div", null, [t.isPay == "1" ? (d(), u(c, { key: 0, type: "success" }, { default: r(() => [g(i(e.$t("mall.orderinfo.isPay1")), 1)]), _: 1 })) : h("", true), t.isPay == "0" ? (d(), u(c, { key: 1, type: "primary" }, { default: r(() => [g(i(e.$t("mall.orderinfo.isPay0")), 1)]), _: 1 })) : h("", true)])]), status: r(({ row: t }) => [_("div", null, [t.status == "1" ? (d(), u(c, { key: 0, type: "success" }, { default: r(() => [g(i(e.$t("mall.shopdeposit.status1")), 1)]), _: 1 })) : t.status == "2" ? (d(), u(c, { key: 1, type: "primary" }, { default: r(() => [g(i(e.$t("mall.shopdeposit.status2")), 1)]), _: 1 })) : t.status == "3" ? (d(), u(c, { key: 2, type: "info" }, { default: r(() => [g(i(e.$t("mall.shopdeposit.status3")), 1)]), _: 1 })) : h("", true)])]), menu: r((t) => [t.row.status == "2" && n.permissions["mall:shopdeposit:withdraw:examine"] ? (d(), u(y, { key: 0, type: "warning", link: "", onClick: (S) => n.updateStatusExamineF(t.row, "1") }, { default: r(() => [g(i(e.$t("mall.shopdeposit.closeWithdrawalRequest")), 1)]), _: 1 }, 8, ["onClick"])) : h("", true), t.row.status == "2" && n.permissions["mall:shopdeposit:withdraw:examine"] ? (d(), u(y, { key: 1, type: "danger", link: "", onClick: (S) => n.updateStatusExamineF(t.row, "3") }, { default: r(() => [g(i(e.$t("mall.shopdeposit.completeTransfer")), 1)]), _: 1 }, 8, ["onClick"])) : h("", true)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const M = O(q, [["render", G]]);
export {
  M as default
};
