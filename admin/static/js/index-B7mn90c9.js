import { aO as m, n as D, _ as B, A as L, R as P, K as $, q as R, S as V, c as C, o as I, b as p, h as i, r as T, e as v, ba as O, f as U, z as _, B as A, a_ as z, b1 as w } from "./index-DAdfXJ2i.js";
import { _ as N } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function k(t) {
  return m.request("get", "/mall/vipuser/page", { params: t });
}
function q(t) {
  return m.request("post", "/mall/vipuser", { data: t });
}
function x(t) {
  return m.request("delete", "/mall/vipuser/" + t);
}
function j(t) {
  return m.request("put", "/mall/vipuser", { data: t });
}
const { $t: u } = D(), F = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: false, menu: false, searchMenuSpan: 6, labelWidth: 120, searchLabelPosition: "left", labelPosition: "left", column: [{ label: u("mall.vipuser.userId"), prop: "userId", minWidth: 120 }, { label: u("mall.vipuser.vipTypeId"), prop: "vipTypeId", sortable: "custom", search: true, searchLabelWidth: 120, type: "select", props: { label: "vipName", value: "id" }, dicUrl: "/mall/viptype/list" }, { label: u("mall.vipuser.endTime"), prop: "endTime", sortable: "custom" }, { label: u("mall.vipuser.totalDiscountAmount"), prop: "totalDiscountAmount", sortable: "custom" }, { label: u("mall.vipuser.createTime"), prop: "createTime", sortable: "custom" }, { label: u("mall.vipuser.updateTime"), prop: "updateTime" }] }, W = { name: "vipuser", props: { userId: { type: String } }, setup(t) {
  const { proxy: n } = L(), e = P({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: F }), s = $().permissions, S = R(() => ({ addBtn: !!s["mall:vipuser:add"], delBtn: !!s["mall:vipuser:del"], editBtn: !!s["mall:vipuser:edit"], viewBtn: !!s["mall:vipuser:get"] }));
  function l(a, r) {
    e.tableLoading = true, k(w({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs, userId: t.userId, ...r, ...e.paramsSearch })).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function d(a) {
    n.$confirm(n.$t("commons.delConfirm"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return x(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), l(e.page);
    });
  }
  function g(a, r, c, y) {
    j(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), c(), l(e.page);
    }).catch(() => {
      y();
    });
  }
  function f(a, r, c) {
    q(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), r(), l(e.page);
    }).catch(() => {
      c();
    });
  }
  function h(a, r) {
    a = w(a), e.paramsSearch = a, e.page.currentPage = 1, l(e.page, a), r();
  }
  function b(a) {
    const r = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = [], e.page.ascs = r) : a.order == "descending" ? (e.page.ascs = [], e.page.descs = r) : (e.page.ascs = [], e.page.descs = []), l(e.page);
  }
  function o() {
    l(e.page);
  }
  return { ...V(e), permissions: s, permissionList: S, getPageF: l, handleDel: d, handleUpdate: g, handleSave: f, searchChange: h, sortChange: b, refreshChange: o };
} }, M = { key: 0, class: "jl-text-tips" }, E = { class: "flex-c" };
function H(t, n, e, s, S, l) {
  const d = N, g = T("el-tag"), f = O, h = T("avue-crud"), b = z;
  return I(), C("div", null, [p(b, null, { default: i(() => [p(h, { ref: "crud", modelValue: t.form, "onUpdate:modelValue": n[0] || (n[0] = (o) => t.form = o), page: t.page, "onUpdate:page": n[1] || (n[1] = (o) => t.page = o), data: t.tableData, permission: s.permissionList, "table-loading": t.tableLoading, option: t.tableOption, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { "menu-left": i(() => [e.userId ? A("", true) : (I(), C("span", M, _(t.$t("mall.vipuser.userVipTip")), 1))]), userId: i(({ row: o }) => [v("div", E, [p(d, { userId: o.userId, userInfo: o.userInfo }, null, 8, ["userId", "userInfo"])])]), "userId-form": i(() => [v("div", null, _(t.form.userInfo.nickName), 1)]), endTime: i(({ row: o }) => [p(g, { type: (/* @__PURE__ */ new Date()).getTime() > new Date(o.endTime).getTime() ? "danger" : "success" }, { default: i(() => [U(_(o.endTime), 1)]), _: 2 }, 1032, ["type"])]), totalDiscountAmount: i(({ row: o }) => [v("div", null, [p(f, { amount: o.totalDiscountAmount }, null, 8, ["amount"])])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const X = B(W, [["render", H]]);
export {
  X as default
};
