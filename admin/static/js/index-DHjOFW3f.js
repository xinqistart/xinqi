import { aO as d, n as C, A as P, R as D, p as T, K as w, q as B, E as O, S as I, b1 as q, _ as L, r as R, c as $, o as U, b as g, h as z, a_ as V } from "./index-DAdfXJ2i.js";
function _(s) {
  return d.request("get", "/mall/vipcost/page", { params: s });
}
function j(s) {
  return d.request("post", "/mall/vipcost", { data: s });
}
function E(s) {
  return d.request("delete", "/mall/vipcost/" + s);
}
function k(s) {
  return d.request("put", "/mall/vipcost", { data: s });
}
const { $t: t } = C(), x = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, addBtn: true, searchMenuSpan: 6, column: [{ label: t("mall.vipcost.vipTypeId"), prop: "vipTypeId", hide: true, display: false, rules: [{ required: true, message: t("commons.inputPlease") + t("mall.vipcost.vipTypeId"), trigger: "blur" }, { max: 32, message: t("commons.lengthTips", { length: 32 }) }] }, { label: t("mall.vipcost.type"), prop: "type", type: "radio", editDisabled: true, rules: [{ required: true, message: t("commons.inputPlease") + t("mall.vipcost.type"), trigger: "blur" }, { max: 1, message: t("commons.lengthTips", { length: 1 }) }], dicData: [{ label: t("mall.vipcost.type1"), value: "1" }, { label: t("mall.vipcost.type2"), value: "2" }, { label: t("mall.vipcost.type3"), value: "3" }] }, { label: t("commons.enabled"), prop: "enable", sortable: true, type: "radio", value: "0", rules: [{ required: true, message: t("commons.notNull"), trigger: "blur" }], dicData: [{ label: t("commons.close"), value: "0" }, { label: t("commons.open"), value: "1" }] }, { label: t("mall.vipcost.originalPrice"), prop: "originalPrice", type: "number", precision: 0.01, min: 0, sortable: true, rules: [{ required: true, message: t("commons.inputPlease") + t("mall.vipcost.originalPrice"), trigger: "blur" }] }, { label: t("mall.vipcost.salesPrice"), prop: "salesPrice", type: "number", precision: 0.01, min: 0, rules: [{ required: true, message: t("commons.inputPlease") + t("mall.vipcost.salesPrice"), trigger: "blur" }] }, { label: t("mall.vipcost.createTime"), prop: "createTime", sortable: true, display: false, rules: [{ required: true, message: t("commons.inputPlease") + t("mall.vipcost.createTime"), trigger: "blur" }] }] }, A = { name: "vipcost", props: { vipTypeId: { type: String, default: "" } }, setup(s) {
  const { proxy: n } = P(), e = D({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: [], descs: [] }, defaults: { type: { dicData: [] } }, paramsSearch: {}, tableLoading: false, tableOption: x }), l = T(), c = w().permissions, m = B(() => ({ addBtn: !!c["mall:vipcost:add"], delBtn: !!c["mall:vipcost:del"], editBtn: !!c["mall:vipcost:edit"], viewBtn: !!c["mall:vipcost:get"] }));
  O(() => s.vipTypeId, () => {
    r();
  }, { immediate: true, deep: true });
  function r(a, o) {
    if (a = a || e.page, e.tableLoading = true, !s.vipTypeId) {
      e.tableLoading = false;
      return;
    }
    _(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs, vipTypeId: s.vipTypeId }, o, e.paramsSearch)).then((i) => {
      var _a;
      e.tableData = i.data.records, e.page.total = i.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false, ((_a = e.tableData) == null ? void 0 : _a.length) === 3 ? e.tableOption.addBtn = false : e.tableOption.addBtn = true;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(a) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return E(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function p(a, o, i, S) {
    k(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), i(), r(e.page);
    }).catch(() => {
      S();
    });
  }
  function f(a, o, i) {
    a.vipTypeId = s.vipTypeId, j(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), o(), r(e.page);
    }).catch(() => {
      i();
    });
  }
  function b(a, o) {
    a = q(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), o();
  }
  function h(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = [], e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = [], e.page.descs = o) : (e.page.ascs = [], e.page.descs = []), r(e.page);
  }
  function v() {
    r(e.page);
  }
  function y(a) {
    var _a;
    ((_a = e.tableData) == null ? void 0 : _a.length) > 0 ? e.defaults.type.dicData.forEach((o) => {
      e.tableData.find((i) => o.value == i.type) ? o.disabled = true : o.disabled = false;
    }) : e.defaults.type.dicData.forEach((o) => {
      o.disabled = false;
    }), a();
  }
  return { ...I(e), crud: l, beforeOpen: y, permissions: c, permissionList: m, getPageF: r, handleDel: u, handleUpdate: p, handleSave: f, searchChange: b, sortChange: h, refreshChange: v };
} };
function F(s, n, e, l, c, m) {
  const r = R("avue-crud"), u = V;
  return U(), $("div", null, [g(u, null, { default: z(() => [g(r, { ref: "crud", modelValue: s.form, "onUpdate:modelValue": n[0] || (n[0] = (p) => s.form = p), page: s.page, "onUpdate:page": n[1] || (n[1] = (p) => s.page = p), defaults: s.defaults, "onUpdate:defaults": n[2] || (n[2] = (p) => s.defaults = p), "before-open": l.beforeOpen, data: s.tableData, permission: l.permissionList, "table-loading": s.tableLoading, option: s.tableOption, onOnLoad: l.getPageF, onRefreshChange: l.refreshChange, onRowUpdate: l.handleUpdate, onRowSave: l.handleSave, onRowDel: l.handleDel, onSortChange: l.sortChange, onSearchChange: l.searchChange }, null, 8, ["modelValue", "page", "defaults", "before-open", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const H = L(A, [["render", F]]);
export {
  H as default
};
