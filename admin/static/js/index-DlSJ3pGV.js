import { aO as i, n as b, A as S, R as C, q as w, K as L, S as B, b1 as _, _ as x, r as R, c as $, o as D, b as p, h as O, a_ as P } from "./index-DAdfXJ2i.js";
function v(a) {
  return i.request("get", "/mall/ensure/page", { params: a });
}
function y(a) {
  return i.request("post", "/mall/ensure", { data: a });
}
function q(a) {
  return i.request("delete", "/mall/ensure/" + a);
}
function U(a) {
  return i.request("put", "/mall/ensure", { data: a });
}
const { $t: r } = b(), z = { dialogDrag: true, indexLabel: r("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: r("mall.ensure.name"), prop: "name", rules: [{ required: true, message: r("mall.ensure.name") + r("commons.notNull"), trigger: "blur" }, { max: 50, message: r("commons.lengthTips", { length: 50 }) }] }, { label: r("mall.ensure.detail"), prop: "detail", type: "textarea", rules: [{ max: 200, message: r("commons.lengthTips", { length: 200 }) }] }] }, T = { setup() {
  const { proxy: a } = S(), e = C({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: z }), d = w(() => {
    var _a;
    const n = (_a = L()) == null ? void 0 : _a.permissions;
    return { addBtn: !!n["mall:ensure:add"], delBtn: !!n["mall:ensure:del"], editBtn: !!n["mall:ensure:edit"], viewBtn: !!n["mall:ensure:get"] };
  });
  function t(n, s) {
    n = _(n), e.paramsSearch = n, e.page.currentPage = 1, o(e.page, n), s();
  }
  function m(n) {
    const s = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : n.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), o(e.page);
  }
  function o(n, s) {
    e.tableLoading = true, v(Object.assign({ current: n.currentPage, size: n.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((l) => {
      e.tableData = l.data.records, e.page.total = l.data.total, e.page.currentPage = n.currentPage, e.page.pageSize = n.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(n) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return q(n.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), o(e.page);
    });
  }
  function g(n, s, l, f) {
    U(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), l(), o(e.page);
    }).catch(() => {
      f();
    });
  }
  function c(n, s, l) {
    y(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), s(), o(e.page);
    }).catch(() => {
      l();
    });
  }
  function h() {
    o(e.page);
  }
  return { ...B(e), permissionList: d, searchChange: t, sortChange: m, getPageF: o, handleDel: u, handleUpdate: g, handleSave: c, refreshChange: h };
} }, j = { class: "execution" };
function V(a, e, d, t, m, o) {
  const u = R("avue-crud"), g = P;
  return D(), $("div", j, [p(g, null, { default: O(() => [p(u, { ref: "crud", page: a.page, "onUpdate:page": e[0] || (e[0] = (c) => a.page = c), data: a.tableData, permission: t.permissionList, "table-loading": a.tableLoading, option: a.tableOption, modelValue: a.form, "onUpdate:modelValue": e[1] || (e[1] = (c) => a.form = c), onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const A = x(T, [["render", V]]);
export {
  A as default
};
