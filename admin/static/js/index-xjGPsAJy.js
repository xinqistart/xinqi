import { aO as g, n as v, A as _, R as B, q as D, K as L, S as P, b1 as b, _ as R, r as C, c as $, o as O, b as d, h as y, a_ as q } from "./index-DAdfXJ2i.js";
function U(t) {
  return g.request("get", "/mall/articlecategory/page", { params: t });
}
function V(t) {
  return g.request("post", "/mall/articlecategory", { data: t });
}
function x(t) {
  return g.request("delete", "/mall/articlecategory/" + t);
}
function S(t) {
  return g.request("put", "/mall/articlecategory", { data: t });
}
const { $t: n } = v(), z = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelPosition: "left", column: [{ label: n("mall.articlecategory.name"), prop: "name", sortable: true, rules: [{ required: true, message: n("commons.pleaseInput") + n("mall.articlecategory.name"), trigger: "blur" }, { max: 100, message: n("commons.lengthTips", { length: 100 }) }] }, { label: n("mall.articlecategory.sort"), prop: "sort", offset: 1, span: 11, sortable: true, rules: [{ required: true, message: n("mall.articlecategory.sort") + n("commons.notNull"), trigger: "blur" }] }, { label: n("mall.articlecategory.enable"), prop: "enable", type: "radio", search: true, sortable: true, span: 24, slot: true, rules: [{ required: true, message: n("mall.articlecategory.enable") + n("commons.notNull"), trigger: "blur" }], dicData: [{ label: n("commons.close"), value: "0" }, { label: n("commons.open"), value: "1" }] }] }, j = { setup() {
  const { proxy: t } = _(), e = B({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: z }), p = D(() => {
    var _a;
    const a = (_a = L()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:articlecategory:add"], delBtn: !!a["mall:articlecategory:del"], editBtn: !!a["mall:articlecategory:edit"], viewBtn: !!a["mall:articlecategory:get"] };
  });
  function o(a) {
    a && a.id && S({ id: a.id, enable: a.enable }).then(() => {
    }).catch(() => {
      i();
    });
  }
  function h(a, l) {
    a = b(a), e.paramsSearch = a, e.page.currentPage = 1, s(e.page, a), l();
  }
  function f(a) {
    const l = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = l) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = l) : (e.page.ascs = "", e.page.descs = ""), s(e.page);
  }
  function s(a, l) {
    e.tableLoading = true, U(b(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, l, e.paramsSearch))).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(a) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return x(a.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), s(e.page);
    });
  }
  function m(a, l, c, w) {
    S(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), c(), s(e.page);
    }).catch(() => {
      w();
    });
  }
  function r(a, l, c) {
    V(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), l(), s(e.page);
    }).catch(() => {
      c();
    });
  }
  function i() {
    s(e.page);
  }
  return { ...P(e), permissionList: p, changeEnable: o, searchChange: h, sortChange: f, getPageF: s, handleDel: u, handleUpdate: m, handleSave: r, refreshChange: i };
} }, k = { class: "execution" };
function T(t, e, p, o, h, f) {
  const s = C("el-switch"), u = C("avue-crud"), m = q;
  return O(), $("div", k, [d(m, null, { default: y(() => [d(u, { ref: "crud", page: t.page, "onUpdate:page": e[0] || (e[0] = (r) => t.page = r), data: t.tableData, permission: o.permissionList, "table-loading": t.tableLoading, option: t.tableOption, modelValue: t.form, "onUpdate:modelValue": e[1] || (e[1] = (r) => t.form = r), onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { enable: y((r) => [d(s, { "active-value": "1", "inactive-value": "0", modelValue: r.row.enable, "onUpdate:modelValue": (i) => r.row.enable = i, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (i) => o.changeEnable(r.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const E = R(j, [["render", T]]);
export {
  E as default
};
