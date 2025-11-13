import { R as h, q as y, S as v, aZ as S, K as k, _ as B, c as L, o as u, b as i, h as s, e as o, r as p, f as P, z as c, g as z, B as O, a_ as C } from "./index-DAdfXJ2i.js";
import { t as $ } from "./tenant-DZmYgWqm.js";
import "./user-CcdA_mZX.js";
const D = { setup() {
  const e = h({ tableOption: $, tableData: [], tableLoading: false, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, form: { logo: void 0 } }), l = y(() => {
    var _a;
    const a = (_a = k()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["sys:tenant:add"], delBtn: !!a["sys:tenant:del"], editBtn: !!a["sys:tenant:edit"], viewBtn: !!a["sys:tenant:get"] };
  });
  function d(a, m) {
    e.tableLoading = true, S(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs, status: "0" }, m, e.paramsSearch)).then((r) => {
      e.tableData = r.data.records, e.page.total = r.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function n(a) {
    window.open("#/mall/shop/shopapply/form?tenant_id=" + a.id, "_blank");
  }
  return { ...v(e), permissionList: l, getPageF: d, handleShopapply: n };
} }, N = { class: "p-2" }, V = { class: "flex items-center" };
function w(e, l, d, n, a, m) {
  const r = p("el-alert"), g = p("el-avatar"), _ = p("el-button"), f = p("avue-crud"), b = C;
  return u(), L("div", null, [i(b, null, { default: s(() => [i(r, { title: e.$t("upms.tenant.applyTips"), type: "error", closable: false, center: "" }, null, 8, ["title"]), o("div", N, [i(f, { page: e.page, "onUpdate:page": l[0] || (l[0] = (t) => e.page = t), option: e.tableOption, data: e.tableData, permission: n.permissionList, "table-loading": e.tableLoading, onOnLoad: n.getPageF }, { name: s(({ row: t }) => [o("div", V, [t.logo ? (u(), z(g, { key: 0, shape: "square", size: 26, src: t.logo, class: "mr-2" }, null, 8, ["src"])) : O("", true), o("span", null, c(t.name), 1)])]), homeUrl: s(({ row: t }) => [o("div", null, [o("span", null, c(t.homeUrl || "-"), 1)])]), menu: s((t) => [i(_, { link: "", type: "primary", icon: "promotion", onClick: (U) => n.handleShopapply(t.row) }, { default: s(() => [P(c(e.$t("upms.tenant.shopEntryApplication")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 }, 8, ["page", "option", "data", "permission", "table-loading", "onOnLoad"])])]), _: 1 })]);
}
const R = B(D, [["render", w]]);
export {
  R as default
};
