import { n as j, A as B, R as v, q as U, K as z, S as T, b1 as V, _ as I, r as p, c as F, o as L, b as r, h as l, g as N, B as A, f as _, z as h, e as P, a_ as q } from "./index-DAdfXJ2i.js";
import { a as Z, p as x, d as E, b as G } from "./goodsspec-B5ivNhww.js";
import { a as H, p as K, d as M, b as W } from "./goodsspecvalue-CIlXCfn0.js";
import { t as J } from "./goodsspecvalue-Ctzffg6t.js";
const { $t: g } = j(), Q = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, searchGutter: 50, searchLabelPosition: "right", labelPosition: "left", column: [{ label: g("mall.goodsspec.name"), prop: "name", search: true, sortable: true, rules: [{ required: true, message: g("mall.goodsspec.name") + g("commons.notNull"), trigger: "blur" }, { max: 50, message: g("commons.lengthTips", { length: 50 }) }] }, { label: g("commons.createTime"), prop: "createTime", sortable: true, addDisplay: false, editDisplay: false }, { label: g("mall.goodsspec.updateTime"), prop: "updateTime", sortable: true, labelWidth: 120, addDisplay: false, editDisplay: false }] }, X = { setup() {
  const { proxy: o } = B(), e = v({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: Q, clickObj: null, form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, tableLoading2: false, tableOption2: J, paramsSearch2: {} }), y = U(() => {
    var _a;
    const a = (_a = z()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:goodsspec:add"], delBtn: !!a["mall:goodsspec:del"], editBtn: !!a["mall:goodsspec:edit"], viewBtn: !!a["mall:goodsspec:get"] };
  });
  function n(a, t) {
    a = V(a), e.paramsSearch = a, e.page.currentPage = 1, d(e.page, a), t();
  }
  function D(a) {
    const t = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), d(e.page);
  }
  function d(a, t) {
    e.tableLoading = true, G(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, t, e.paramsSearch)).then((s) => {
      e.tableData = s.data.records, e.page.total = s.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function m(a) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return E(a.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), d(e.page);
    });
  }
  function u(a, t, s, O) {
    x(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), s(), d(e.page);
    }).catch(() => {
      O();
    });
  }
  function f(a, t, s) {
    Z(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), t(), d(e.page);
    }).catch(() => {
      s();
    });
  }
  function b() {
    d(e.page);
  }
  function S(a) {
    a ? (e.clickObj = a, e.page2.currentPage = 1, i(e.page2)) : e.clickObj = null;
  }
  function C(a) {
    e.form2.specId = e.clickObj.id, a();
  }
  function w(a) {
    const t = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = t) : a.order == "descending" ? (e.page2.ascs = "", e.page2.descs = t) : (e.page2.ascs = "", e.page2.descs = ""), i(e.page2);
  }
  function i(a, t) {
    e.tableLoading2 = true, W(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, t, e.paramsSearch2, { specId: e.clickObj.id })).then((s) => {
      e.tableData2 = s.data.records, e.page2.total = s.data.total, e.page2.currentPage = a.currentPage, e.page2.pageSize = a.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function c(a) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return M(a.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), i(e.page2);
    });
  }
  function $(a, t, s, O) {
    K(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), s(), i(e.page2);
    }).catch(() => {
      O();
    });
  }
  function k(a, t, s) {
    H(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), t(), i(e.page2);
    }).catch(() => {
      s();
    });
  }
  function R() {
    i(e.page2);
  }
  return { ...T(e), permissionList: y, searchChange: n, sortChange: D, getPageF: d, handleDel: m, handleUpdate: u, handleSave: f, refreshChange: b, handleItem: S, beforeOpen2: C, sortChange2: w, getPage2F: i, handleDel2: c, handleUpdate2: $, handleSave2: k, refreshChange2: R };
} }, Y = { class: "execution" }, ee = { class: "clearfix" };
function ae(o, e, y, n, D, d) {
  const m = p("el-button"), u = p("avue-crud"), f = p("el-col"), b = p("el-icon-document-copy"), S = p("el-icon"), C = p("el-card"), w = p("el-row"), i = q;
  return L(), F("div", Y, [r(i, { style: { "border-top": "#ebeef6 1px solid" } }, { default: l(() => [r(w, { gutter: 10 }, { default: l(() => [r(f, { span: o.clickObj ? 12 : 24 }, { default: l(() => [r(u, { ref: "crud", modelValue: o.form, "onUpdate:modelValue": e[0] || (e[0] = (c) => o.form = c), page: o.page, "onUpdate:page": e[1] || (e[1] = (c) => o.page = c), data: o.tableData, permission: n.permissionList, "table-loading": o.tableLoading, option: o.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, { menu: l((c) => [r(m, { type: "primary", link: "", onClick: ($) => n.handleItem(c.row) }, { default: l(() => [_(h(o.$t("mall.goodsspec.menuSpec")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 }, 8, ["span"]), o.clickObj ? (L(), N(f, { key: 0, span: 12, style: { "border-left": "#ebeef6 1px solid" } }, { default: l(() => [r(C, { class: "box-card" }, { header: l(() => [P("div", ee, [P("h3", null, [r(S, null, { default: l(() => [r(b)]), _: 1 }), _(" " + h(o.$t("mall.goodsspec.specList")) + "\uFF1A" + h(o.clickObj.name), 1)]), r(m, { style: { float: "right" }, type: "primary", link: "", onClick: e[2] || (e[2] = (c) => n.handleItem()) }, { default: l(() => [_(h(o.$t("commons.close")), 1)]), _: 1 })])]), default: l(() => [r(u, { ref: "crud2", modelValue: o.form2, "onUpdate:modelValue": e[3] || (e[3] = (c) => o.form2 = c), page: o.page2, "onUpdate:page": e[4] || (e[4] = (c) => o.page2 = c), data: o.tableData2, permission: n.permissionList, "before-open": n.beforeOpen2, option: o.tableOption2, "table-loading": o.tableLoading2, onOnLoad: n.getPage2F, onRowUpdate: n.handleUpdate2, onRowSave: n.handleSave2, onRowDel: n.handleDel2, onRefreshChange: n.refreshChange2, onSortChange: n.sortChange2 }, null, 8, ["modelValue", "page", "data", "permission", "before-open", "option", "table-loading", "onOnLoad", "onRowUpdate", "onRowSave", "onRowDel", "onRefreshChange", "onSortChange"])]), _: 1 })]), _: 1 })) : A("", true)]), _: 1 })]), _: 1 })]);
}
const ce = I(X, [["render", ae], ["__scopeId", "data-v-a3028504"]]);
export {
  ce as default
};
