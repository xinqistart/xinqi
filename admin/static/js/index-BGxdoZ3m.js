import { A as $, R as D, K as v, q as x, S as O, b1 as y, _ as B, r as f, c as L, o as h, b as d, h as r, e as u, g as S, f as I, z as C, ba as R, a_ as U } from "./index-DAdfXJ2i.js";
import { _ as P } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { _ as k } from "./order-info.vue_vue_type_script_setup_true_name_OrderInfoDialog_lang-M98RTvM1.js";
import { t as z, a as V, p as j, d as T, g as A } from "./distributionorder-Dg6CYd8w.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
import "./index-sB6MalEe.js";
import "./order-store-info-DarXLMJX.js";
import "./shopstore-oR_kr_Ba.js";
import "./order-user-info-YRvKWCyA.js";
import "./order-logistics-DWwBY9ly.js";
import "./order-goods-info-CxpE49Zn.js";
import "./orderinfo-BW26vGJU.js";
import "./supplier-CbDQWRL9.js";
import "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
const F = { components: { OrderInfoDialog: k }, setup() {
  var _a;
  const { proxy: a } = $(), e = D({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: z }), i = (_a = v()) == null ? void 0 : _a.permissions, s = x(() => ({ addBtn: !!i["mall:distributionorder:add"], delBtn: !!i["mall:distributionorder:del"], editBtn: !!i["mall:distributionorder:edit"], viewBtn: !!i["mall:distributionorder:get"] }));
  function _(t, o) {
    t = y(t), e.paramsSearch = t, e.page.currentPage = 1, n(e.page, t), o();
  }
  function b(t) {
    const o = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), n(e.page);
  }
  function n(t, o) {
    e.tableLoading = true, A(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function l(t) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return T(t.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), n(e.page);
    });
  }
  function p(t, o, c, w) {
    j(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), c(), n(e.page);
    }).catch(() => {
      w();
    });
  }
  function m(t, o, c) {
    V(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), o(), n(e.page);
    }).catch(() => {
      c();
    });
  }
  function g() {
    n(e.page);
  }
  return { ...O(e), permissions: i, permissionList: s, searchChange: _, sortChange: b, getPageF: n, handleDel: l, handleUpdate: p, handleSave: m, refreshChange: g };
} }, N = { class: "execution" }, q = { class: "flex-c" }, E = { class: "flex-c" }, H = { class: "flex-c" };
function K(a, e, i, s, _, b) {
  const n = f("OrderInfoDialog"), l = P, p = R, m = f("el-text"), g = f("avue-crud"), t = U;
  return h(), L("div", N, [d(t, null, { default: r(() => [d(g, { ref: "crud", page: a.page, data: a.tableData, permission: s.permissionList, "table-loading": a.tableLoading, option: a.tableOption, modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (o) => a.form = o), onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { orderId: r(({ row: o }) => [u("div", q, [d(n, { orderId: o.orderId }, null, 8, ["orderId"])])]), distributionUserId: r(({ row: o }) => [d(l, { userId: o.distributionUserId, userInfo: o.distributionUser ? o.distributionUser.userInfo : {} }, null, 8, ["userId", "userInfo"])]), userId: r(({ row: o }) => [u("div", E, [d(l, { userId: o.userId, userInfo: o.userInfo }, null, 8, ["userId", "userInfo"])])]), commission: r(({ row: o }) => [u("div", H, [d(p, { amount: o.commission }, null, 8, ["amount"])])]), commissionStatus: r((o) => [u("div", null, [o.row.commissionStatus == "2" ? (h(), S(m, { key: 0, tag: "b", type: "success" }, { default: r(() => [I(C(o.row.$commissionStatus), 1)]), _: 2 }, 1024)) : (h(), S(m, { key: 1, tag: "b", type: "danger" }, { default: r(() => [I(C(o.row.$commissionStatus), 1)]), _: 2 }, 1024))])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const de = B(F, [["render", K]]);
export {
  de as default
};
