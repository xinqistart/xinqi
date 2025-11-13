import { aO as m, n as w, A as D, R as P, K as B, q as L, E as q, S as O, b1 as R, _ as I, r as v, c as $, o as z, b as c, h, e as f, z as N, a_ as U } from "./index-DAdfXJ2i.js";
import { M } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
function V(t) {
  return m.request("get", "/mall/viprights/page", { params: t });
}
function j(t) {
  return m.request("post", "/mall/viprights", { data: t });
}
function x(t) {
  return m.request("delete", "/mall/viprights/" + t);
}
function E(t) {
  return m.request("put", "/mall/viprights", { data: t });
}
const { $t: a } = w(), k = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: true, excelBtn: false, printBtn: false, viewBtn: true, searchMenuSpan: 6, searchGutter: 50, searchLabelPosition: "right", labelPosition: "left", column: [{ label: a("mall.viprights.vipTypeId"), prop: "vipTypeId", span: 13, sortable: true, hide: true, display: false, rules: [{ required: true, message: a("commons.inputPlease") + a("mall.viprights.vipTypeId"), trigger: "blur" }, { max: 32, message: a("commons.lengthTips", { length: 32 }) }] }, { label: a("mall.viprights.rightsName"), prop: "rightsName", span: 13, rules: [{ required: true, message: a("commons.inputPlease") + a("mall.viprights.rightsName"), trigger: "blur" }, { max: 30, message: a("commons.lengthTips", { length: 30 }) }] }, { label: a("commons.enabled"), prop: "enable", span: 13, sortable: true, minWidth: 100, type: "radio", rules: [{ required: true, message: a("commons.notNull"), trigger: "blur" }], dicData: [{ label: a("commons.close"), value: "0" }, { label: a("commons.open"), value: "1" }] }, { label: a("mall.viprights.type"), prop: "type", span: 13, type: "radio", editDisabled: true, rules: [{ required: true, message: a("commons.inputPlease") + a("mall.viprights.type"), trigger: "blur" }], dicData: [{ label: a("mall.viprights.type1"), value: "1" }, { label: a("mall.viprights.type2"), value: "2" }], control: (t) => t == "1" ? { discount: { label: a("mall.viprights.discount") } } : t == "2" ? { discount: { label: a("mall.viprights.points") } } : { discount: { label: a("mall.viprights.discount") } } }, { label: a("mall.viprights.discount"), prop: "discount", span: 13, type: "number", precision: 0, min: 0, max: 100, rules: [{ required: true, message: a("commons.notNull"), trigger: "blur" }], labelTip: a("mall.viprights.discountTip") }, { label: a("mall.viprights.icon"), prop: "icon", span: 24, rules: [{ required: true, message: a("commons.inputPlease") + a("mall.viprights.icon"), trigger: "blur" }, { max: 500, message: a("commons.lengthTips", { length: 500 }) }] }, { label: a("mall.viprights.intro"), prop: "intro", type: "textarea", span: 24, minRows: 0, maxRows: 2, rules: [{ max: 500, message: a("commons.lengthTips", { length: 500 }) }] }, { label: a("mall.viprights.createTime"), prop: "createTime", sortable: true, display: false, minWidth: 100, rules: [{ required: true, message: a("commons.inputPlease") + a("mall.viprights.createTime"), trigger: "blur" }] }, { label: a("mall.viprights.updateTime"), prop: "updateTime", sortable: true, hide: true, display: false, rules: [{ required: true, message: a("commons.inputPlease") + a("mall.viprights.updateTime"), trigger: "blur" }] }] }, A = { name: "viprights", components: { MaterialList: M }, props: { vipTypeId: { type: String, default: "" } }, setup(t) {
  const { proxy: n } = D(), e = P({ form: { icon: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: [], descs: [] }, defaults: { type: { dicData: [] } }, paramsSearch: {}, tableLoading: false, tableOption: k }), r = B().permissions, b = L(() => ({ addBtn: !!r["mall:viprights:add"], delBtn: !!r["mall:viprights:del"], editBtn: !!r["mall:viprights:edit"], viewBtn: !!r["mall:viprights:get"] }));
  q(() => t.vipTypeId, () => {
    o();
  }, { immediate: true, deep: true });
  function o(s, i) {
    if (s = s || e.page, e.tableLoading = true, !t.vipTypeId) {
      e.tableLoading = false;
      return;
    }
    V(Object.assign({ current: s.currentPage, size: s.pageSize, descs: e.page.descs, ascs: e.page.ascs, vipTypeId: t.vipTypeId }, i, e.paramsSearch)).then((p) => {
      var _a;
      e.tableData = p.data.records, e.page.total = p.data.total, e.page.currentPage = s.currentPage, e.page.pageSize = s.pageSize, e.tableLoading = false, ((_a = e.tableData) == null ? void 0 : _a.length) === 2 ? e.tableOption.addBtn = false : e.tableOption.addBtn = true;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(s) {
    n.$confirm(n.$t("commons.delConfirm"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return x(s.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), o(e.page);
    });
  }
  function g(s, i, p, C) {
    E(s).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), p(), o(e.page);
    }).catch(() => {
      C();
    });
  }
  function d(s, i, p) {
    s.vipTypeId = t.vipTypeId, j(s).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), i(), o(e.page);
    }).catch(() => {
      p();
    });
  }
  function l(s, i) {
    s = R(s), e.paramsSearch = s, e.page.currentPage = 1, o(e.page, s), i();
  }
  function y(s) {
    const i = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page.descs = [], e.page.ascs = i) : s.order == "descending" ? (e.page.ascs = [], e.page.descs = i) : (e.page.ascs = [], e.page.descs = []), o(e.page);
  }
  function S() {
    o(e.page);
  }
  function T(s) {
    var _a;
    ((_a = e.tableData) == null ? void 0 : _a.length) > 0 ? e.defaults.type.dicData.forEach((i) => {
      e.tableData.find((p) => i.value == p.type) ? i.disabled = true : i.disabled = false;
    }) : e.defaults.type.dicData.forEach((i) => {
      i.disabled = false;
    }), s();
  }
  return { ...O(e), beforeOpen: T, permissions: r, permissionList: b, getPageF: o, handleDel: u, handleUpdate: g, handleSave: d, searchChange: l, sortChange: y, refreshChange: S };
} }, F = { class: "jl-text-tips" }, _ = ["src"];
function W(t, n, e, r, b, o) {
  const u = v("MaterialList"), g = v("avue-crud"), d = U;
  return z(), $("div", null, [c(d, null, { default: h(() => [c(g, { ref: "crud", modelValue: t.form, "onUpdate:modelValue": n[2] || (n[2] = (l) => t.form = l), page: t.page, "onUpdate:page": n[3] || (n[3] = (l) => t.page = l), defaults: t.defaults, "onUpdate:defaults": n[4] || (n[4] = (l) => t.defaults = l), "before-open": r.beforeOpen, data: t.tableData, permission: r.permissionList, "table-loading": t.tableLoading, option: t.tableOption, onOnLoad: r.getPageF, onRefreshChange: r.refreshChange, onRowUpdate: r.handleUpdate, onRowSave: r.handleSave, onRowDel: r.handleDel, onSortChange: r.sortChange, onSearchChange: r.searchChange }, { "icon-form": h(() => [f("div", null, [c(u, { value: t.form.icon ? [t.form.icon] : [], onSureSuccess: n[0] || (n[0] = (l) => t.form.icon = l ? l[0] : ""), onDeleteMaterial: n[1] || (n[1] = (l) => t.form.icon = ""), type: "image", num: 1, width: 60, height: 60 }, null, 8, ["value"]), f("p", F, N(t.$t("commons.imageSizeTip", { size: "60*60" })), 1)])]), icon: h((l) => [f("img", { style: { height: "60px" }, src: l.row.icon }, null, 8, _)]), _: 1 }, 8, ["modelValue", "page", "defaults", "before-open", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Y = I(A, [["render", W]]);
export {
  Y as default
};
