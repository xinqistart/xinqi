import { A as w, R as y, q as v, K as _, S as I, b1 as D, _ as L, r as $, c as B, o as O, b as p, h as i, e as d, z as c, C as R, f as P, a_ as U } from "./index-DAdfXJ2i.js";
import { _ as E } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { b as S, c as F, p as z, d as T, g as V } from "./couponuser-BDN5Bz1z.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
const x = { components: {}, setup() {
  const { proxy: o } = w(), e = y({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: S }), f = v(() => {
    var _a;
    const a = (_a = _()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:couponuser:add"], delBtn: !!a["mall:couponuser:del"], editBtn: !!a["mall:couponuser:edit"], viewBtn: !!a["mall:couponuser:get"] };
  });
  function r() {
    const a = JSON.parse(JSON.stringify(e.tableData));
    a.map((n) => {
      let s = n.type == "1" ? o.$t("mall.couponinfo.type1") : n.type == "2" ? o.$t("mall.couponinfo.type2") : "";
      s = s + "     " + n.$couponId, s = s + "     " + o.$t("mall.couponinfo.orderFull") + n.premiseAmount + o.$t("mall.couponinfo.orderFullUse"), n.couponId = s, n.shopId = n.$shopId, n.status = n.$status;
    }), o.$Export.excel({ title: "\u9886\u5238\u8BB0\u5F55", columns: S.column, data: a });
  }
  function h(a, n) {
    a = D(a), e.paramsSearch = a, e.page.currentPage = 1, l(e.page, a), n();
  }
  function b(a) {
    const n = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = n) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = n) : (e.page.ascs = "", e.page.descs = ""), l(e.page);
  }
  function l(a, n) {
    e.tableLoading = true, V(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, n, e.paramsSearch)).then((s) => {
      e.tableData = s.data.records, e.page.total = s.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(a) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return T(a.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), l(e.page);
    });
  }
  function m(a, n, s, C) {
    z(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), s(), l(e.page);
    }).catch(() => {
      C();
    });
  }
  function g(a, n, s) {
    F(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), n(), l(e.page);
    }).catch(() => {
      s();
    });
  }
  function t() {
    l(e.page);
  }
  return { ...I(e), permissionList: f, exportExcel: r, searchChange: h, sortChange: b, getPageF: l, handleDel: u, handleUpdate: m, handleSave: g, refreshChange: t };
} }, N = { class: "execution" };
function j(o, e, f, r, h, b) {
  const l = $("el-button"), u = E, m = $("avue-crud"), g = U;
  return O(), B("div", N, [p(g, null, { default: i(() => [p(m, { ref: "crud", page: o.page, "onUpdate:page": e[1] || (e[1] = (t) => o.page = t), data: o.tableData, permission: r.permissionList, "table-loading": o.tableLoading, option: o.tableOption, modelValue: o.form, "onUpdate:modelValue": e[2] || (e[2] = (t) => o.form = t), onOnLoad: r.getPageF, onRefreshChange: r.refreshChange, onRowUpdate: r.handleUpdate, onRowSave: r.handleSave, onRowDel: r.handleDel, onSortChange: r.sortChange, onSearchChange: r.searchChange }, { "menu-left": i(() => [p(l, { type: "primary", onClick: e[0] || (e[0] = R((t) => r.exportExcel(), ["stop"])), icon: "Download" }, { default: i(() => [P(c(o.$t("commons.importLabel")), 1)]), _: 1 })]), userId: i(({ row: t }) => [p(u, { userId: t.userId, userInfo: t.userInfo }, null, 8, ["userId", "userInfo"])]), couponId: i((t) => [d("div", null, c(t.row.type == "1" ? o.$t("mall.couponinfo.type1") : t.row.type == "2" ? o.$t("mall.couponinfo.type2") : ""), 1), d("div", null, c(t.row.name), 1), d("div", null, c(o.$t("mall.couponinfo.orderFull")) + c(t.row.premiseAmount) + c(o.$t("mall.couponinfo.orderFullUse")), 1)]), validEndTime: i((t) => [d("div", null, c(t.row.validBeginTime), 1), d("div", null, c(o.$t("commons.to")) + c(t.row.validEndTime), 1)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const K = L(x, [["render", j]]);
export {
  K as default
};
