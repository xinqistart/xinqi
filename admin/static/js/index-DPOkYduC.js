import { aO as c, n as b, A as S, R as C, q as w, K as _, S as L, b1 as R, _ as B, r as P, c as $, o as x, b as d, h as y, a_ as D } from "./index-DAdfXJ2i.js";
function O(a) {
  return c.request("get", "/mall/signconfig/page", { params: a });
}
function q(a) {
  return c.request("post", "/mall/signconfig", { data: a });
}
function v(a) {
  return c.request("delete", "/mall/signconfig/" + a);
}
function T(a) {
  return c.request("put", "/mall/signconfig", { data: a });
}
const { $t: s } = b(), z = { dialogDrag: true, indexLabel: s("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 100, searchGutter: 50, searchLabelPosition: "right", labelPosition: "left", column: [{ label: s("commons.createTime"), prop: "createTime", sortable: true, display: false }, { label: s("mall.signconfig.sort"), prop: "sort", type: "number", minRows: 0, span: 20, sortable: true, rules: [{ required: true, message: s("mall.signconfig.sort") + s("commons.notNull"), trigger: "blur" }] }, { label: s("mall.signconfig.name"), prop: "name", span: 20, sortable: true, rules: [{ required: true, message: s("mall.signconfig.name") + s("commons.notNull"), trigger: "blur" }, { max: 20, message: s("commons.lengthTips", { length: 20 }) }] }, { label: s("mall.signconfig.posts"), prop: "posts", type: "number", minRows: 0, span: 20, sortable: true, rules: [{ required: true, message: s("mall.signconfig.posts") + s("commons.notNull"), trigger: "blur" }] }] }, U = { setup() {
  const { proxy: a } = S(), e = C({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: z }), u = w(() => {
    var _a;
    const n = (_a = _()) == null ? void 0 : _a.permissions;
    return { addBtn: !!n["mall:signconfig:add"], delBtn: !!n["mall:signconfig:del"], editBtn: !!n["mall:signconfig:edit"], viewBtn: !!n["mall:signconfig:get"] };
  });
  function t(n, o) {
    n = R(n), e.paramsSearch = n, e.page.currentPage = 1, r(e.page, n), o();
  }
  function p(n) {
    const o = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : n.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(n, o) {
    e.tableLoading = true, O(Object.assign({ current: n.currentPage, size: n.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((l) => {
      e.tableData = l.data.records, e.page.total = l.data.total, e.page.currentPage = n.currentPage, e.page.pageSize = n.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function i(n) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return v(n.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function g(n, o, l, h) {
    T(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), l(), r(e.page);
    }).catch(() => {
      h();
    });
  }
  function m(n, o, l) {
    q(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), o(), r(e.page);
    }).catch(() => {
      l();
    });
  }
  function f() {
    r(e.page);
  }
  return { ...L(e), permissionList: u, searchChange: t, sortChange: p, getPageF: r, handleDel: i, handleUpdate: g, handleSave: m, refreshChange: f };
} }, j = { class: "execution" };
function N(a, e, u, t, p, r) {
  const i = P("avue-crud"), g = D;
  return x(), $("div", j, [d(g, null, { default: y(() => [d(i, { ref: "crud", page: a.page, data: a.tableData, permission: t.permissionList, "table-loading": a.tableLoading, option: a.tableOption, modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (m) => a.form = m), onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const k = B(U, [["render", N]]);
export {
  k as default
};
