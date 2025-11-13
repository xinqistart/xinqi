import { aO as u, n as d, A as m, R as f, q as b, K as h, S as k, _ as C, r as _, c as L, o as x, b as g, h as B, a_ as S } from "./index-DAdfXJ2i.js";
function $(n) {
  return u.request("get", "/upms/token/page", { params: n });
}
function y(n) {
  return u.request("delete", "/upms/token/" + n);
}
const { $t: o } = d(), D = { dialogDrag: true, index: true, indexLabel: o("commons.indexLabel"), indexWidth: 80, menuAlign: "center", align: "center", viewBtn: true, delBtn: true, addBtn: false, editBtn: false, excelBtn: true, printBtn: false, selection: true, menuType: "text", searchMenuSpan: 6, column: [{ label: o("upms.token.userId"), prop: "userId", hide: true, sortable: true, align: "center" }, { label: o("upms.token.username"), prop: "username", align: "center" }, { label: o("upms.token.accessToken"), prop: "accessToken", align: "center", overHidden: true }, { label: o("commons.type"), prop: "tokenType", sortable: true, hide: true, align: "center" }, { label: o("upms.token.expiresAt"), prop: "expiresAt", sortable: true, align: "center" }] }, P = { setup() {
  const { proxy: n } = m(), e = f({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, descs: "", ascs: "" }, tableLoading: false, tableOption: D }), i = b(() => {
    var _a;
    return { delBtn: !!((_a = h()) == null ? void 0 : _a.permissions)["sys:token:del"] };
  });
  function a(t) {
    const s = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(t, s) {
    e.tableLoading = true, $(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s)).then((l) => {
      e.tableData = l.data.records, e.page.total = l.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function p(t) {
    n.$confirm(n.$t("upms.token.mandatory") + t.username + n.$t("upms.token.offline"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return y(t.accessToken);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function c() {
    r(e.page);
  }
  return { ...k(e), permissionList: i, sortChange: a, getPageF: r, handleDel: p, refreshChange: c };
} };
function O(n, e, i, a, r, p) {
  const c = _("avue-crud"), t = S;
  return x(), L("div", null, [g(t, null, { default: B(() => [g(c, { ref: "crud", page: n.page, "onUpdate:page": e[0] || (e[0] = (s) => n.page = s), data: n.tableData, "table-loading": n.tableLoading, option: n.tableOption, permission: a.permissionList, onOnLoad: a.getPageF, onSortChange: a.sortChange, onRefreshChange: a.refreshChange, onRowDel: a.handleDel }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onSortChange", "onRefreshChange", "onRowDel"])]), _: 1 })]);
}
const w = C(P, [["render", O]]);
export {
  w as default
};
