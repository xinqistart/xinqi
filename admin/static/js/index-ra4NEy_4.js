import { aO as u, n as T, A as w, R as v, q as z, K as C, S as R, _ as $, r as p, c as B, o as D, e as k, b as l, f as _, z as S, h, a_ as x } from "./index-DAdfXJ2i.js";
function L(e) {
  return u.request("get", "/upms/client/page", { params: e });
}
function q(e) {
  return u.request("post", "/upms/client/", { data: e });
}
function G(e) {
  return u.request("delete", "/upms/client/" + e);
}
function O(e) {
  return u.request("put", "/upms/client", { data: e });
}
const { $t: a } = T(), P = { dialogDrag: true, index: true, indexLabel: a("commons.indexLabel"), menuAlign: "center", align: "center", viewBtn: true, excelBtn: true, printBtn: false, menuType: "text", searchMenuSpan: 6, labelPosition: "left", column: [{ width: 150, label: a("upms.client.id"), prop: "id", span: 11, align: "center", sortable: true, editDisabled: true, rules: [{ required: true, message: a("upms.client.id") + a("commons.notNull"), trigger: "blur" }] }, { label: a("upms.client.clientSecret"), prop: "clientSecret", align: "center", sortable: true, overHidden: true, width: 120, offset: 1, span: 12, rules: [{ required: true, message: a("upms.client.clientSecret") + a("commons.notNull"), trigger: "blur" }] }, { label: a("upms.client.scope"), prop: "scope", span: 11, align: "center", rules: [{ required: true, message: a("upms.client.scope") + a("commons.notNull"), trigger: "blur" }] }, { label: a("upms.client.authorizedGrantTypes"), prop: "authorizedGrantTypes", align: "center", type: "checkbox", dicUrl: "/upms/dict/type/authorized_grant_types", overHidden: true, offset: 1, span: 12, rules: [{ required: true, message: a("upms.client.authorizedGrantTypes") + a("commons.notNull"), trigger: "blur" }] }, { label: a("upms.client.webServerRedirectUri"), prop: "webServerRedirectUri", align: "center", span: 11, hide: true }, { label: a("upms.client.authorities"), prop: "authorities", align: "center", offset: 1, span: 12, hide: true }, { label: a("upms.client.autoapprove"), prop: "autoapprove", align: "center", span: 11, type: "radio", dicUrl: "/upms/dict/type/true_false", hide: true, rules: [{ required: true, message: a("upms.client.autoapprove") + a("commons.notNull"), trigger: "blur" }] }, { label: a("upms.client.accessTokenValidity"), prop: "accessTokenValidity", type: "number", min: 0, labelWidth: 120, offset: 1, span: 12, precision: 0, align: "center" }, { label: a("upms.client.refreshTokenValidity"), prop: "refreshTokenValidity", type: "number", min: 0, span: 11, labelWidth: 120, precision: 0, align: "center" }, { label: a("upms.client.additionalInformation"), prop: "additionalInformation", align: "center", offset: 1, span: 12, hide: true }, { label: a("upms.client.resourceIds"), prop: "resourceIds", align: "center", span: 11, hide: true }] }, U = { setup() {
  const { proxy: e } = w(), t = v({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, tableLoading: false, tableOption: P }), f = z(() => {
    var _a;
    const n = (_a = C()) == null ? void 0 : _a.permissions;
    return { addBtn: !!n["sys:client:add"], delBtn: !!n["sys:client:del"], editBtn: !!n["sys:client:edit"], viewBtn: !!n["sys:client:get"] };
  });
  function s(n) {
    const r = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (t.page.descs = "", t.page.ascs = r) : n.order == "descending" ? (t.page.ascs = "", t.page.descs = r) : (t.page.ascs = "", t.page.descs = ""), i(t.page);
  }
  function i(n, r) {
    t.tableLoading = true, L(Object.assign({ current: t.page.currentPage, size: t.page.pageSize, descs: t.page.descs, ascs: t.page.ascs }, r)).then((o) => {
      const c = o.data.records;
      c.forEach(function(y) {
        y.authorizedGrantTypes = y.authorizedGrantTypes.split(",");
      }), t.tableData = c, t.page.total = o.data.total, t.page.currentPage = n.currentPage, t.page.pageSize = n.pageSize, t.tableLoading = false;
    });
  }
  function b(n) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return G(n.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), i(t.page);
    });
  }
  function d(n, r, o, c) {
    n.authorizedGrantTypes = n.authorizedGrantTypes.join(","), O(n).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), i(t.page), o();
    }).catch(() => {
      c();
    });
  }
  function g(n, r, o) {
    n.authorizedGrantTypes = n.authorizedGrantTypes.join(","), q(n).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), i(t.page), r();
    }).catch(() => {
      o();
    });
  }
  function m() {
    i(t.page);
  }
  return { ...R(t), permissionList: f, sortChange: s, getPageF: i, handleDel: b, handleUpdate: d, handleSave: g, refreshChange: m };
} }, N = { class: "jl-text-tips ml-5" };
function j(e, t, f, s, i, b) {
  const d = p("TopRight"), g = p("el-icon"), m = p("el-link"), n = p("avue-crud"), r = x;
  return D(), B("div", null, [k("div", N, [_(S(e.$t("upms.client.tips")), 1), l(m, { class: "ml-[20px]", href: "https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html", target: "_blank", type: "primary" }, { default: h(() => [_(S(e.$t("upms.client.document")), 1), l(g, null, { default: h(() => [l(d)]), _: 1 })]), _: 1 })]), l(r, null, { default: h(() => [l(n, { ref: "crud", page: e.page, "onUpdate:page": t[0] || (t[0] = (o) => e.page = o), data: e.tableData, "table-loading": e.tableLoading, option: e.tableOption, permission: s.permissionList, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange"])]), _: 1 })]);
}
const I = $(U, [["render", j]]);
export {
  I as default
};
