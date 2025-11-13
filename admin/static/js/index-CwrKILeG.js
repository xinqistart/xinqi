import { A as P, P as w, R as B, K as L, q as O, S as R, b1 as D, _ as A, r as U, c as b, o as _, b as l, h as i, e as u, z as p, B as v, f as C, ba as V, a_ as j } from "./index-DAdfXJ2i.js";
import { _ as y } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { t as z, a as k, p as N, d as F, g as T } from "./userbalancerecord-DZ_kN2UL.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
const q = { name: "userbalancerecord", components: { MallUser: y }, setup() {
  const { proxy: a } = P(), c = w(z);
  c.menu = true;
  const e = B({ form: { userId: "", relationId: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: { isPay: "1" }, tableLoading: false, tableOption: c }), t = L().permissions, S = O(() => ({ addBtn: !!t["mall:userbalancerecord:add"], delBtn: !!t["mall:userbalancerecord:del"], editBtn: !!t["mall:userbalancerecord:edit"], viewBtn: !!t["mall:userbalancerecord:get"] }));
  function r(n, s) {
    e.tableLoading = true, T(Object.assign({ current: n.currentPage, size: n.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((d) => {
      e.tableData = d.data.records, e.page.total = d.data.total, e.page.currentPage = n.currentPage, e.page.pageSize = n.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function m(n) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return F(n.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function g(n, s, d, I) {
    N(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), d(), r(e.page);
    }).catch(() => {
      I();
    });
  }
  function f(n, s, d) {
    k(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), s(), r(e.page);
    }).catch(() => {
      d();
    });
  }
  function h(n, s) {
    n = D(n), e.paramsSearch = n, e.page.currentPage = 1, r(e.page, n), s();
  }
  function o(n) {
    const s = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : n.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function $() {
    r(e.page);
  }
  return { ...R(e), permissions: t, permissionList: S, getPageF: r, handleDel: m, handleUpdate: g, handleSave: f, searchChange: h, sortChange: o, refreshChange: $ };
} }, x = { class: "jl-text-tips" }, E = { class: "text-left" }, H = { key: 0 }, K = { key: 1 }, M = { class: "flex justify-center" };
function Z(a, c, e, t, S, r) {
  const m = V, g = y, f = U("avue-crud"), h = j;
  return _(), b("div", null, [l(h, null, { default: i(() => [l(f, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": c[0] || (c[0] = (o) => a.form = o), page: a.page, "onUpdate:page": c[1] || (c[1] = (o) => a.page = o), data: a.tableData, permission: t.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, { "menu-left": i(() => [u("span", x, p(a.$t("mall.userbalancerecord.tip")), 1)]), amount: i(({ row: o }) => [u("div", E, [o.type == 1 ? (_(), b("div", H, [C(p(a.$t("mall.userbalancerecord.paymentAmount")), 1), l(m, { amount: o.payAmount }, null, 8, ["amount"])])) : v("", true), o.type == 1 ? (_(), b("div", K, [C(p(a.$t("mall.userbalancerecord.giftAmount")), 1), l(m, { amount: o.giveAmount }, null, 8, ["amount"])])) : v("", true), u("div", null, [C(p(a.$t("mall.userbalancerecord.totalAmount")), 1), l(m, { amount: o.amount }, null, 8, ["amount"])])])]), "userId-form": i(() => [u("div", null, [l(g, { userId: a.form.userId, showName: true }, null, 8, ["userId"])])]), userId: i(({ row: o }) => [u("div", M, [l(g, { userId: o.userId }, null, 8, ["userId"])])]), "relationId-form": i(() => [u("div", null, p(a.form.relationId), 1)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const ee = A(q, [["render", Z]]);
export {
  ee as default
};
