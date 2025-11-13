import { aO as w, A as z, R as P, K as B, q as L, S as R, b1 as V, _ as U, r as m, c as k, o as l, b as c, h as r, e as q, g, B as b, f as u, z as p, ba as j, a_ as A } from "./index-DAdfXJ2i.js";
import { t as N } from "./orderbill-CJo17PNX.js";
import { _ as F } from "./order-info.vue_vue_type_script_setup_true_name_OrderInfoDialog_lang-M98RTvM1.js";
import T from "./index-sB6MalEe.js";
import "./order-user-info-YRvKWCyA.js";
import "./order-logistics-DWwBY9ly.js";
import "./order-goods-info-CxpE49Zn.js";
import "./orderinfo-BW26vGJU.js";
import "./supplier-CbDQWRL9.js";
import "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
import "./order-store-info-DarXLMJX.js";
import "./shopstore-oR_kr_Ba.js";
import "./clientType-BhCLU4J5.js";
function E(e) {
  return w.request("get", "/mall/orderbill/page", { params: e });
}
function H(e) {
  return w.request("post", "/mall/orderbill", { data: e });
}
function K(e) {
  return w.request("delete", "/mall/orderbill/" + e);
}
function Z(e) {
  return w.request("put", "/mall/orderbill", { data: e });
}
const G = { name: "orderbill", components: { OrderItem: T, OrderInfoDialog: F }, setup() {
  const { proxy: e } = z(), o = P({ form: { orderId: "", orderInfo: {} }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: N }), f = B().permissions, n = L(() => ({ addBtn: !!f["mall:orderbill:add"], delBtn: !!f["mall:orderbill:del"], editBtn: !!f["mall:orderbill:edit"], viewBtn: !!f["mall:orderbill:get"] }));
  function i(t, s) {
    o.tableLoading = true, E(Object.assign({ current: t.currentPage, size: t.pageSize, descs: o.page.descs, ascs: o.page.ascs }, s, o.paramsSearch)).then((d) => {
      o.tableData = d.data.records, o.page.total = d.data.total, o.page.currentPage = t.currentPage, o.page.pageSize = t.pageSize, o.tableLoading = false;
    }).catch(() => {
      o.tableLoading = false;
    });
  }
  function O(t) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return K(t.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), i(o.page);
    });
  }
  function _(t, s, d, a) {
    Z(t).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), d(), i(o.page);
    }).catch(() => {
      a();
    });
  }
  function y(t, s, d) {
    H(t).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), s(), i(o.page);
    }).catch(() => {
      d();
    });
  }
  function C(t, s) {
    t = V(t), o.paramsSearch = t, o.page.currentPage = 1, i(o.page, t), s();
  }
  function S(t) {
    const s = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (o.page.descs = "", o.page.ascs = s) : t.order == "descending" ? (o.page.ascs = "", o.page.descs = s) : (o.page.ascs = "", o.page.descs = ""), i(o.page);
  }
  function h() {
    i(o.page);
  }
  function I(t) {
    return !(!t.orderInfo || t.orderInfo.isPay == 1);
  }
  return { ...R(o), permissions: f, permissionList: n, menuStatusDisabled: I, getPageF: i, handleDel: O, handleUpdate: _, handleSave: y, searchChange: C, sortChange: S, refreshChange: h };
} }, J = { key: 0 }, M = { key: 0 };
function Q(e, o, f, n, i, O) {
  const _ = m("el-button"), y = m("order-item"), C = j, S = m("el-text"), h = m("el-tag"), I = m("OrderItem"), t = m("OrderInfoDialog"), s = m("avue-crud"), d = A;
  return l(), k("div", null, [c(d, null, { default: r(() => [c(s, { ref: "crud", modelValue: e.form, "onUpdate:modelValue": o[0] || (o[0] = (a) => e.form = a), page: e.page, "onUpdate:page": o[1] || (o[1] = (a) => e.page = a), data: e.tableData, permission: n.permissionList, "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, { menu: r(({ size: a, row: $, index: v }) => [c(_, { text: "", type: "primary", icon: "el-icon-view", size: a, onClick: (D) => e.$refs.crud.rowView($, v) }, { default: r(() => [u(p(e.$t("mall.orderbill.view")), 1)]), _: 1 }, 8, ["size", "onClick"]), c(_, { text: "", type: "primary", icon: "el-icon-edit", size: a, disabled: n.menuStatusDisabled($), onClick: (D) => e.$refs.crud.rowEdit($, v) }, { default: r(() => [u(p(e.$t("mall.orderbill.process")), 1)]), _: 1 }, 8, ["size", "disabled", "onClick"])]), "orderinfo-form": r(() => [e.form.orderInfo ? (l(), g(y, { key: 0, form: e.form.orderInfo }, null, 8, ["form"])) : b("", true)]), billAmount: r((a) => [c(C, { color: "#555555", amount: a.row.billAmount }, null, 8, ["amount"])]), billStatus: r((a) => [a.row.orderInfo ? (l(), k("div", J, [c(S, { type: a.row.orderInfo.isPay == "1" ? "success" : "danger", effect: "dark", size: "small" }, { default: r(() => [u(p(a.row.orderInfo.isPay == "1" ? e.$t("mall.orderbill.paid") : e.$t("mall.orderbill.unpaid")), 1)]), _: 2 }, 1032, ["type"])])) : b("", true), a.row.billStatus == 1 ? (l(), g(h, { key: 1, size: "small" }, { default: r(() => [u(p(a.row.$billStatus), 1)]), _: 2 }, 1024)) : b("", true), a.row.billStatus == 2 ? (l(), g(S, { key: 2, size: "small", type: "success" }, { default: r(() => [u(p(a.row.$billStatus), 1)]), _: 2 }, 1024)) : b("", true), a.row.billStatus == 3 ? (l(), g(h, { key: 3, size: "small", type: "info" }, { default: r(() => [u(p(a.row.$billStatus), 1)]), _: 2 }, 1024)) : b("", true), a.row.billStatus == 4 ? (l(), g(h, { key: 4, size: "small" }, { default: r(() => [u(p(a.row.$billStatus), 1)]), _: 2 }, 1024)) : b("", true)]), "orderId-form": r(() => [q("div", null, [e.form.orderInfo ? (l(), k("div", M, [c(I, { form: e.form.orderInfo }, null, 8, ["form"])])) : (l(), g(t, { key: 1, orderId: e.form.orderId }, null, 8, ["orderId"]))])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const me = U(G, [["render", Q]]);
export {
  me as default
};
