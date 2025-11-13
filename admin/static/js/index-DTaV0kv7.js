import { aO as u, n as S, A as C, R as w, K as L, q as B, S as R, b1 as $, _ as v, r as D, c as O, o as P, b as m, h as _, a_ as x } from "./index-DAdfXJ2i.js";
function y(a) {
  return u.request("get", "/mall/usershoplabel/page", { params: a });
}
function U(a) {
  return u.request("post", "/mall/usershoplabel", { data: a });
}
function q(a) {
  return u.request("delete", "/mall/usershoplabel/" + a);
}
function z(a) {
  return u.request("put", "/mall/usershoplabel", { data: a });
}
const { $t: c } = S(), I = { dialogDrag: true, indexLabel: c("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: c("mall.usershoplabel.shopId"), prop: "shopId", type: "select", search: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: c("mall.usershoplabel.shopId") + c("commons.notNull") }] }, { label: c("mall.usershoplabel.labelName"), prop: "labelName", sortable: true, rules: [{ max: 100, message: c("commons.lengthTips", { length: 100 }) }] }] }, j = { name: "usershoplabel", setup() {
  const { proxy: a } = C(), e = w({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: I }), l = L().permissions, n = B(() => ({ addBtn: !!l["mall:usershoplabel:add"], delBtn: !!l["mall:usershoplabel:del"], editBtn: !!l["mall:usershoplabel:edit"], viewBtn: !!l["mall:usershoplabel:get"] }));
  function o(s, t) {
    e.tableLoading = true, y(Object.assign({ current: s.currentPage, size: s.pageSize, descs: e.page.descs, ascs: e.page.ascs }, t, e.paramsSearch)).then((r) => {
      e.tableData = r.data.records, e.page.total = r.data.total, e.page.currentPage = s.currentPage, e.page.pageSize = s.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function g(s) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return q(s.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), o(e.page);
    });
  }
  function i(s, t, r, b) {
    z(s).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), r(), o(e.page);
    }).catch(() => {
      b();
    });
  }
  function d(s, t, r) {
    U(s).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), t(), o(e.page);
    }).catch(() => {
      r();
    });
  }
  function p(s, t) {
    s = $(s), e.paramsSearch = s, e.page.currentPage = 1, o(e.page, s), t();
  }
  function h(s) {
    const t = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : s.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), o(e.page);
  }
  function f() {
    o(e.page);
  }
  return { ...R(e), permissions: l, permissionList: n, getPageF: o, handleDel: g, handleUpdate: i, handleSave: d, searchChange: p, sortChange: h, refreshChange: f };
} };
function N(a, e, l, n, o, g) {
  const i = D("avue-crud"), d = x;
  return P(), O("div", null, [m(d, null, { default: _(() => [m(i, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (p) => a.form = p), page: a.page, "onUpdate:page": e[1] || (e[1] = (p) => a.page = p), data: a.tableData, permission: n.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const V = v(j, [["render", N]]);
export {
  V as default
};
