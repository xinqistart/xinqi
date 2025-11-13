import { aO as m, n as w, A as C, R as _, K as v, q as A, S as L, b1 as R, _ as B, r as P, c as $, o as y, b as u, h as f, ba as D, a_ as O } from "./index-DAdfXJ2i.js";
function q(a) {
  return m.request("get", "/mall/balancerechargeconfig/page", { params: a });
}
function x(a) {
  return m.request("post", "/mall/balancerechargeconfig", { data: a });
}
function U(a) {
  return m.request("delete", "/mall/balancerechargeconfig/" + a);
}
function z(a) {
  return m.request("put", "/mall/balancerechargeconfig", { data: a });
}
const { $t: t } = w(), j = { dialogDrag: true, indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, searchLabelPosition: "right", labelPosition: "left", labelWidth: 100, column: [{ label: t("mall.balancerechargeconfig.sort"), prop: "sort", sortable: true, type: "number", precision: 0, span: 11, rules: [{ required: true, message: t("mall.balancerechargeconfig.sort") + t("commons.notNull"), trigger: "blur" }] }, { label: t("mall.balancerechargeconfig.priceAmount"), prop: "priceAmount", sortable: true, type: "number", minRows: 0.01, precision: 2, offset: 1, span: 12, rules: [{ required: true, message: t("mall.balancerechargeconfig.priceAmount") + t("commons.notNull"), trigger: "blur" }] }, { label: t("mall.balancerechargeconfig.giveAmount"), prop: "giveAmount", sortable: true, type: "number", minRows: 0.01, precision: 2, span: 11, rules: [{ required: true, message: t("mall.balancerechargeconfig.giveAmount") + t("commons.notNull"), trigger: "blur" }] }] }, N = { name: "balancerechargeconfig", setup() {
  const { proxy: a } = C(), e = _({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: j }), l = v().permissions, o = A(() => ({ addBtn: !!l["mall:balancerechargeconfig:add"], delBtn: !!l["mall:balancerechargeconfig:del"], editBtn: !!l["mall:balancerechargeconfig:edit"], viewBtn: !!l["mall:balancerechargeconfig:get"] }));
  function c(n, s) {
    e.tableLoading = true, q(Object.assign({ current: n.currentPage, size: n.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((i) => {
      e.tableData = i.data.records, e.page.total = i.data.total, e.page.currentPage = n.currentPage, e.page.pageSize = n.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function h(n) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return U(n.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), c(e.page);
    });
  }
  function g(n, s, i, S) {
    z(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), i(), c(e.page);
    }).catch(() => {
      S();
    });
  }
  function p(n, s, i) {
    x(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), s(), c(e.page);
    }).catch(() => {
      i();
    });
  }
  function d(n, s) {
    n = R(n), e.paramsSearch = n, e.page.currentPage = 1, c(e.page, n), s();
  }
  function r(n) {
    const s = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : n.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), c(e.page);
  }
  function b() {
    c(e.page);
  }
  return { ...L(e), permissions: l, permissionList: o, getPageF: c, handleDel: h, handleUpdate: g, handleSave: p, searchChange: d, sortChange: r, refreshChange: b };
} };
function V(a, e, l, o, c, h) {
  const g = D, p = P("avue-crud"), d = O;
  return y(), $("div", null, [u(d, null, { default: f(() => [u(p, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (r) => a.form = r), page: a.page, "onUpdate:page": e[1] || (e[1] = (r) => a.page = r), data: a.tableData, permission: o.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { priceAmount: f((r) => [u(g, { amount: r.row.priceAmount }, null, 8, ["amount"])]), giveAmount: f((r) => [u(g, { amount: r.row.giveAmount }, null, 8, ["amount"])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const F = B(N, [["render", V]]);
export {
  F as default
};
