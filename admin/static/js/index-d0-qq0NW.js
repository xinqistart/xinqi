import { A as T, R as B, K as L, q as O, S as R, b1 as _, _ as $, r as P, c as U, o as z, b as m, h as u, e as h, z as b, a_ as k } from "./index-DAdfXJ2i.js";
import { _ as C } from "./BaseEditor-CKHWT0N2.js";
import { a as V, p as j, d as E, b as N } from "./agreementconfig-BApCRbNY.js";
import { r as F } from "./dict-B2OHV-lB.js";
import { t as A } from "./agreementconfig-D5PH4kdV.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
const I = { name: "agreementconfig", components: { BaseEditor: C }, setup() {
  const { proxy: n } = T(), e = B({ form: { agreementContent: "" }, tableData: [], dicData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: [], descs: [] }, defaults: { agreementType: { dicData: [] } }, paramsSearch: {}, tableLoading: false, tableOption: A }), i = L().permissions, o = O(() => ({ addBtn: !!i["upms:agreementconfig:add"], delBtn: !!i["upms:agreementconfig:del"], editBtn: !!i["upms:agreementconfig:edit"], viewBtn: !!i["upms:agreementconfig:get"] }));
  function r(a, t) {
    e.tableLoading = true, N(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, t, e.paramsSearch)).then(async (d) => {
      e.tableData = d.data.records, e.page.total = d.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false, D();
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function f(a) {
    n.$confirm(n.$t("commons.delConfirm"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return E(a.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function c(a, t, d, w) {
    j(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), d(), r(e.page);
    }).catch(() => {
      w();
    });
  }
  function g(a, t, d) {
    V(a).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), t(), r(e.page);
    }).catch(() => {
      d();
    });
  }
  function l(a, t) {
    a = _(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), t();
  }
  function s(a) {
    const t = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = [], e.page.ascs = t) : a.order == "descending" ? (e.page.ascs = [], e.page.descs = t) : (e.page.ascs = [], e.page.descs = []), r(e.page);
  }
  function p() {
    r(e.page);
  }
  function D() {
    F("agreement_type").then((a) => {
      e.dicData = a.data || [];
    });
  }
  function S() {
    n.$nextTick(() => {
      const a = [];
      e.dicData.forEach((t) => {
        e.tableData.findIndex((d) => t.value == d.agreementType) == -1 && a.push({ label: t.label, value: t.value, desc: t.description });
      }), e.defaults.agreementType.dicData = a;
    });
  }
  function y(a, t) {
    t == "add" ? S() : n.$nextTick(() => {
      e.defaults.agreementType.dicData = e.dicData;
    }), a();
  }
  function v(a) {
    var _a;
    return (_a = e.dicData.find((t) => t.value == a)) == null ? void 0 : _a.description;
  }
  return { ...R(e), beforeOpen: y, permissions: i, permissionList: o, getPageF: r, handleDel: f, handleUpdate: c, handleSave: g, searchChange: l, sortChange: s, agreementTypeNote: v, refreshChange: p };
} };
function q(n, e, i, o, r, f) {
  const c = C, g = P("avue-crud"), l = k;
  return z(), U("div", null, [m(l, null, { default: u(() => [m(g, { ref: "crud", modelValue: n.form, "onUpdate:modelValue": e[1] || (e[1] = (s) => n.form = s), page: n.page, "onUpdate:page": e[2] || (e[2] = (s) => n.page = s), defaults: n.defaults, "onUpdate:defaults": e[3] || (e[3] = (s) => n.defaults = s), data: n.tableData, "before-open": o.beforeOpen, permission: o.permissionList, "table-loading": n.tableLoading, option: n.tableOption, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { agreementType: u((s) => [h("div", null, b(s.row.$agreementType) + " [" + b(o.agreementTypeNote(s.row.agreementType)) + "] ", 1)]), "agreementContent-form": u((s) => [h("div", null, [m(c, { value: n.form.agreementContent, "onUpdate:value": e[0] || (e[0] = (p) => n.form.agreementContent = p), disabled: s.disabled }, null, 8, ["value", "disabled"])])]), _: 1 }, 8, ["modelValue", "page", "defaults", "data", "before-open", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Q = $(I, [["render", q]]);
export {
  Q as default
};
