import { A as D, R as L, K as P, q as $, E as B, S as H, b1 as O, _ as R, r as m, c as _, o as I, b as r, h as i, e as p, z as u, w as V, f as y, D as j, B as z, a_ as T } from "./index-DAdfXJ2i.js";
import { b as w, c as k, p as A, d as F, a as N } from "./shopstore-oR_kr_Ba.js";
import { M as E } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const M = { components: { MaterialList: E }, name: "shopstore", setup() {
  const { proxy: o } = D(), e = L({ form: { shopId: void 0, imgUrl: void 0, longitude: void 0, latitude: void 0, address: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: w, addressInfo: [] }), d = P().permissions, n = $(() => ({ addBtn: !!d["mall:shopstore:add"], delBtn: !!d["mall:shopstore:del"], editBtn: !!d["mall:shopstore:edit"], viewBtn: !!d["mall:shopstore:get"] }));
  B(() => e.addressInfo, (s) => {
    s.length > 0 ? e.form.address = s[2] : e.form.address = "";
  }, { deep: true, immediate: true });
  function t(s, a) {
    e.tableLoading = true, N(Object.assign({ current: s.currentPage, size: s.pageSize, descs: e.page.descs, ascs: e.page.ascs }, a, e.paramsSearch)).then((l) => {
      e.tableData = l.data.records, e.page.total = l.data.total, e.page.currentPage = s.currentPage, e.page.pageSize = s.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function C(s) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return F(s.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), t(e.page);
    });
  }
  function f(s, a, l, c) {
    s.imgUrl = s.imgUrl.length > 0 ? s.imgUrl[0] : "";
    const U = e.addressInfo;
    s.longitude = U[0], s.latitude = U[1], s.address = U[2], s.businessHours instanceof Array && (s.businessHours = s.businessHours.join(",")), A(s).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), l(), t(e.page);
    }).catch(() => {
      c();
    });
  }
  function g(s, a, l) {
    s.imgUrl = s.imgUrl.length > 0 ? s.imgUrl[0] : "";
    const c = e.addressInfo;
    s.longitude = c[0], s.latitude = c[1], s.address = c[2], s.businessHours instanceof Array && (s.businessHours = s.businessHours.join(",")), k(s).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), a(), t(e.page);
    }).catch(() => {
      l();
    });
  }
  function h(s, a) {
    s = O(s), e.paramsSearch = s, e.page.currentPage = 1, t(e.page, s), a();
  }
  function b(s) {
    const a = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page.descs = "", e.page.ascs = a) : s.order == "descending" ? (e.page.ascs = "", e.page.descs = a) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function S() {
    t(e.page);
  }
  function v(s, a) {
    window.openType = a, e.addressInfo = [], a == "add" ? e.form.imgUrl = [] : (e.addressInfo = e.form.address ? [e.form.longitude, e.form.latitude, e.form.address] : [], e.form.imgUrl = [e.form.imgUrl]), s();
  }
  return { ...H(e), permissions: d, permissionList: n, getPageF: t, handleDel: C, handleUpdate: f, handleSave: g, searchChange: h, sortChange: b, refreshChange: S, beforeOpen: v };
} }, W = { class: "ml-2 text-gray-500" }, q = { key: 0 }, K = { class: "jl-text-tips" }, Z = { class: "jl-text-tips" };
function G(o, e, d, n, t, C) {
  const f = m("Warning"), g = m("el-icon"), h = m("material-list"), b = m("avue-input-map"), S = m("Position"), v = m("avue-crud"), s = T;
  return I(), _("div", null, [r(s, null, { default: i(() => [r(v, { ref: "crud", modelValue: o.form, "onUpdate:modelValue": e[2] || (e[2] = (a) => o.form = a), page: o.page, "onUpdate:page": e[3] || (e[3] = (a) => o.page = a), data: o.tableData, permission: n.permissionList, "table-loading": o.tableLoading, option: o.tableOption, "before-open": n.beforeOpen, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, { "menu-left": i(() => [p("span", W, [r(g, { size: "11", class: "mr-1" }, { default: i(() => [r(f)]), _: 1 }), e[4] || (e[4] = y("\u95E8\u5E97\u529F\u80FD\u53EA\u505A\u5E97\u94FA\u7EBF\u4E0B\u95E8\u5E97\u4F4D\u7F6E\u5C55\u793A \u548C \u4E0B\u5355\u65F6\u81EA\u63D0\u95E8\u5E97\u7684\u9009\u62E9, \u76EE\u524D\u6CA1\u6709\u95E8\u5E97\u5E93\u5B58\u529F\u80FD.", -1))])]), "imgUrl-form": i(() => [o.form.shopId ? (I(), _("div", q, [r(h, { value: o.form.imgUrl, "onUpdate:value": e[0] || (e[0] = (a) => o.form.imgUrl = a), type: "image", shopId: o.form.shopId, num: 1, width: 100, height: 100 }, null, 8, ["value", "shopId"]), p("p", K, u(o.$t("commons.imageSizeTip", { size: "100*100" })), 1)])) : z("", true), p("div", Z, u(o.$t("commons.selectShopFirst")), 1)]), "address-form": i(() => [p("div", null, [r(b, { modelValue: o.addressInfo, "onUpdate:modelValue": e[1] || (e[1] = (a) => o.addressInfo = a), placeholder: o.$t("mall.shopstore.mapTip"), style: { width: "100%" } }, null, 8, ["modelValue", "placeholder"]), V(p("div", null, [r(g, null, { default: i(() => [r(S)]), _: 1 }), y(u(o.form.address), 1)], 512), [[j, o.form.address]])])]), businessHours: i((a) => [p("div", null, u(a.row.businessHours ? a.row.businessHours.split(",").join("-") : "-"), 1)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const ae = R(M, [["render", G]]);
export {
  ae as default
};
