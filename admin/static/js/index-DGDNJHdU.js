import { n as V, A as v, R as z, q as U, K as I, S as T, b1 as O, _ as N, r as g, c as q, o as _, b as c, h as l, g as F, B as A, e as K, f as D, z as C, a_ as Z } from "./index-DAdfXJ2i.js";
import { g as R, d as E, a as G, p as H, b as M, c as W, e as J, f as Q } from "./dict-B2OHV-lB.js";
const { $t: s } = V(), X = { dialogDrag: true, index: true, indexLabel: s("commons.indexLabel"), menuAlign: "center", align: "center", showColumnBtn: false, viewBtn: true, menuType: "text", searchShow: false, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelPosition: "right", column: [{ label: s("commons.type"), prop: "type", search: true, rules: [{ required: true, message: s("upms.dict.type") + s("commons.notNull"), trigger: "blur" }] }, { label: s("upms.dict.description"), prop: "description", rules: [{ required: true, message: s("upms.dict.description") + s("commons.notNull"), trigger: "blur" }] }, { width: 150, label: s("commons.createTime"), prop: "createTime", type: "datetime", addDisplay: false, editDisabled: true, sortable: true }] }, Y = { menuAlign: "center", align: "center", refreshBtn: true, showColumnBtn: false, height: 500, column: [{ label: s("upms.dict.dataValue"), prop: "value", rules: [{ required: true, message: s("upms.dict.enterDataValue"), trigger: "blur" }] }, { label: s("upms.dict.tagName"), prop: "label", rules: [{ required: true, message: s("upms.dict.enterTagName"), trigger: "blur" }] }, { label: s("mall.grouponinfo.sort"), prop: "sort", type: "number", rules: [{ required: true, message: s("upms.dict.enterSorting"), trigger: "blur" }] }, { label: s("upms.dict.description"), prop: "description", rules: [{ required: true, message: s("upms.dict.description"), trigger: "blur" }] }] }, x = { setup() {
  const { proxy: a } = v(), e = z({ clickObj: null, form: {}, dialogFormVisible: false, tableData: [], tableOption: X, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, tableLoading: false, form2: { dictId: "", type: "" }, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: {}, tableLoading2: false, tableOption2: Y }), L = U(() => {
    var _a;
    const t = (_a = I()) == null ? void 0 : _a.permissions;
    return { addBtn: !!t["sys:dict:add"], delBtn: !!t["sys:dict:del"], editBtn: !!t["sys:dict:edit"] };
  });
  function n(t) {
    const o = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), d(e.page);
  }
  function d(t, o) {
    e.tableLoading = true, Q(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o)).then((r) => {
      e.tableData = r.data.records, e.page.total = r.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
    });
  }
  function j(t, o, r, w) {
    J(O(t)).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), d(e.page), r();
    }).catch((B) => {
      a.$message({ showClose: true, message: B.message, type: "error" }), w();
    });
  }
  function m(t, o, r) {
    W(O(t)).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), d(e.page), o();
    }).catch(() => {
      r();
    });
  }
  function f(t, o) {
    d(e.page, O(t)), o();
  }
  function u(t) {
    a.$confirm(a.$t("upms.dict.confirmDeletion"), a.$t("upms.dict.warning"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return M(t);
    }).then(() => {
      e.tableData = [], d(e.page), a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), h();
    }).catch(function() {
    });
  }
  function y() {
    d(e.page);
  }
  function h(t) {
    t ? (e.clickObj = t, e.page2.currentPage = 1, p(e.page2)) : e.clickObj = null;
  }
  function b(t) {
    e.form2.dictId = e.clickObj.id, e.form2.type = e.clickObj.type, t();
  }
  function S(t) {
    const o = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = o) : t.order == "descending" ? (e.page2.ascs = "", e.page2.descs = o) : (e.page2.ascs = "", e.page2.descs = ""), p(e.page2);
  }
  function p(t, o) {
    e.tableLoading2 = true, R(Object.assign({ current: e.page2.currentPage, size: e.page2.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, o, e.paramsSearch2, { dictId: e.clickObj.id })).then((r) => {
      e.tableData2 = r.data.records, e.page2.total = r.data.total, e.page2.currentPage = t.currentPage, e.page2.pageSize = t.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function i(t) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return E(t.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), p(e.page2);
    });
  }
  function k(t, o, r, w) {
    H(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), r(), p(e.page2);
    }).catch(() => {
      w();
    });
  }
  function $(t, o, r) {
    G(Object.assign({ dictId: e.clickObj.id, type: e.clickObj.type }, t)).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), o(), p(e.page2);
    }).catch(() => {
      r();
    });
  }
  function P() {
    R(e.page2);
  }
  return { ...T(e), permissionList: L, handleItem: h, sortChange: n, getPageF: d, handleUpdate: j, handleSave: m, searchChange: f, handleDel: u, refreshChange: y, beforeOpen2: b, getPage2F: p, handleUpdate2: k, handleSave2: $, handleDel2: i, sortChange2: S, refreshChange2: P };
} }, ee = { class: "jl-border" };
function ae(a, e, L, n, d, j) {
  const m = g("el-button"), f = g("avue-crud"), u = g("el-col"), y = g("DocumentCopy"), h = g("el-icon"), b = g("el-row"), S = g("el-card"), p = Z;
  return _(), q("div", null, [c(p, null, { default: l(() => [c(b, { gutter: 10 }, { default: l(() => [c(u, { span: a.clickObj ? 12 : 24 }, { default: l(() => [K("div", ee, [c(f, { ref: "crud", page: a.page, "onUpdate:page": e[0] || (e[0] = (i) => a.page = i), data: a.tableData, permission: n.permissionList, "table-loading": a.tableLoading, option: a.tableOption, modelValue: a.form, "onUpdate:modelValue": e[1] || (e[1] = (i) => a.form = i), onOnLoad: n.getPageF, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onSearchChange: n.searchChange, onSortChange: n.sortChange, onRefreshChange: n.refreshChange, onRowDel: n.handleDel }, { menu: l((i) => [c(m, { link: "", type: "primary", icon: "position", size: "small", onClick: (k) => n.handleItem(i.row) }, { default: l(() => [D(C(a.$t("upms.dict.keyValueList")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRowUpdate", "onRowSave", "onSearchChange", "onSortChange", "onRefreshChange", "onRowDel"])])]), _: 1 }, 8, ["span"]), a.clickObj ? (_(), F(u, { key: 0, span: 12 }, { default: l(() => [c(S, { class: "box-card", shadow: "never" }, { header: l(() => [c(b, { justify: "space-between", align: "middle" }, { default: l(() => [c(u, { span: 20 }, { default: l(() => [c(h, null, { default: l(() => [c(y)]), _: 1 }), D(C(a.$t("upms.dict.typeKeyValueList")) + C(a.clickObj.type), 1)]), _: 1 }), c(u, { span: 4 }, { default: l(() => [c(m, { link: "", type: "danger", onClick: e[2] || (e[2] = (i) => n.handleItem()) }, { default: l(() => [D(C(a.$t("commons.close")), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), default: l(() => [c(f, { ref: "crud2", modelValue: a.form2, "onUpdate:modelValue": e[3] || (e[3] = (i) => a.form2 = i), page: a.page2, "onUpdate:page": e[4] || (e[4] = (i) => a.page2 = i), data: a.tableData2, permission: n.permissionList, "before-open": n.beforeOpen2, option: a.tableOption2, "table-loading": a.tableLoading2, onOnLoad: n.getPage2F, onRowUpdate: n.handleUpdate2, onRowSave: n.handleSave2, onRowDel: n.handleDel2, onRefreshChange: n.refreshChange2, onSortChange: n.sortChange2 }, null, 8, ["modelValue", "page", "data", "permission", "before-open", "option", "table-loading", "onOnLoad", "onRowUpdate", "onRowSave", "onRowDel", "onRefreshChange", "onSortChange"])]), _: 1 })]), _: 1 })) : A("", true)]), _: 1 })]), _: 1 })]);
}
const oe = N(x, [["render", ae]]);
export {
  oe as default
};
