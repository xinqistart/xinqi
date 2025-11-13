import { aO as c, n as b, A as S, R as C, q as w, K as _, S as L, b1 as B, _ as D, r as N, c as v, o as x, b as g, h as y, a_ as R } from "./index-DAdfXJ2i.js";
function $(a) {
  return c.request("get", "/mall/useraddress/page", { params: a });
}
function O(a) {
  return c.request("post", "/mall/useraddress", { data: a });
}
function P(a) {
  return c.request("delete", "/mall/useraddress/" + a);
}
function T(a) {
  return c.request("put", "/mall/useraddress", { data: a });
}
const { $t: t } = b(), I = { dialogDrag: true, index: true, indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: t("mall.useraddress.id"), prop: "id", sortable: true }, { label: t("commons.createTime"), prop: "createTime", sortable: true }, { label: t("commons.updateTime"), prop: "updateTime", sortable: true }, { label: t("mall.useraddress.userId"), prop: "userId", sortable: true }, { label: t("mall.useraddress.userName"), prop: "userName", sortable: true }, { label: t("mall.useraddress.postalCode"), prop: "postalCode", sortable: true }, { label: t("mall.useraddress.provinceName"), prop: "provinceName", sortable: true }, { label: t("mall.useraddress.cityName"), prop: "cityName", sortable: true }, { label: t("mall.useraddress.countyName"), prop: "countyName", sortable: true }, { label: t("mall.useraddress.detailInfo"), prop: "detailInfo", sortable: true }, { label: t("mall.useraddress.telNum"), prop: "telNum", sortable: true }, { label: t("mall.useraddress.isDefault"), prop: "isDefault", sortable: true }] }, q = { setup() {
  const { proxy: a } = S(), e = C({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: I }), i = w(() => {
    var _a;
    const s = (_a = _()) == null ? void 0 : _a.permissions;
    return { addBtn: !!s["mall:useraddress:add"], delBtn: !!s["mall:useraddress:del"], editBtn: !!s["mall:useraddress:edit"], viewBtn: !!s["mall:useraddress:get"] };
  });
  function r(s, n) {
    s = B(s), e.paramsSearch = s, e.page.currentPage = 1, o(e.page, s), n();
  }
  function m(s) {
    const n = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page.descs = "", e.page.ascs = n) : s.order == "descending" ? (e.page.ascs = "", e.page.descs = n) : (e.page.ascs = "", e.page.descs = ""), o(e.page);
  }
  function o(s, n) {
    e.tableLoading = true, $(Object.assign({ current: s.currentPage, size: s.pageSize, descs: e.page.descs, ascs: e.page.ascs }, n, e.paramsSearch)).then((l) => {
      e.tableData = l.data.records, e.page.total = l.data.total, e.page.currentPage = s.currentPage, e.page.pageSize = s.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function d(s) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return P(s.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), o(e.page);
    });
  }
  function u(s, n, l, h) {
    T(s).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), l(), o(e.page);
    }).catch(() => {
      h();
    });
  }
  function p(s, n, l) {
    O(s).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), n(), o(e.page);
    }).catch(() => {
      l();
    });
  }
  function f() {
    o(e.page);
  }
  return { ...L(e), permissionList: i, searchChange: r, sortChange: m, getPageF: o, handleDel: d, handleUpdate: u, handleSave: p, refreshChange: f };
} }, z = { class: "execution" };
function U(a, e, i, r, m, o) {
  const d = N("avue-crud"), u = R;
  return x(), v("div", z, [g(u, null, { default: y(() => [g(d, { ref: "crud", page: a.page, "onUpdate:page": e[0] || (e[0] = (p) => a.page = p), data: a.tableData, permission: r.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: r.getPageF, onRefreshChange: r.refreshChange, onRowUpdate: r.handleUpdate, onRowSave: r.handleSave, onRowDel: r.handleDel, onSortChange: r.sortChange, onSearchChange: r.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const k = D(q, [["render", U]]);
export {
  k as default
};
