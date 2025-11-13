import { n as b, A as S, R as C, p as w, q as _, K as L, S as x, b1 as B, _ as $, r as R, c as v, o as D, b as u, h as I, a_ as P } from "./index-DAdfXJ2i.js";
import { a as O, p as T, d as y, g as z } from "./goodsspuspec-aVm7uABh.js";
const { $t: r } = b(), U = { dialogDrag: true, index: true, indexLabel: r("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: r("mall.goodsspuspec.id"), prop: "id", sortable: true }, { label: r("mall.goodsspuspec.tenantId"), prop: "tenantId", sortable: true }, { label: r("mall.goodsspuspec.spuId"), prop: "spuId", sortable: true }, { label: r("mall.goodsspuspec.specId"), prop: "specId", sortable: true }, { label: r("mall.goodsspuspec.createTime"), prop: "createTime", sortable: true }, { label: r("mall.goodsspuspec.updateTime"), prop: "updateTime", sortable: true }] }, j = { setup() {
  const { proxy: s } = S(), e = C({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: U }), l = w(null), t = _(() => {
    var _a;
    const a = (_a = L()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:goodsspuspec:add"], delBtn: !!a["mall:goodsspuspec:del"], editBtn: !!a["mall:goodsspuspec:edit"], viewBtn: !!a["mall:goodsspuspec:get"] };
  });
  function i(a, o) {
    a = B(a), e.paramsSearch = a, e.page.currentPage = 1, n(e.page, a), o();
  }
  function g(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), n(e.page);
  }
  function n(a, o) {
    e.tableLoading = true, z(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, o, e.paramsSearch)).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false, s.$nextTick(() => {
        l.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function p(a) {
    s.$confirm(s.$t("commons.confirmDelete"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(function() {
      return y(a.id);
    }).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.delSuccess"), type: "success" }), n(e.page);
    });
  }
  function d(a, o, c, f) {
    T(a).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.updateSuccess"), type: "success" }), c(), n(e.page);
    }).catch(() => {
      f();
    });
  }
  function m(a, o, c) {
    O(a).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.addSuccess"), type: "success" }), o(), n(e.page);
    }).catch(() => {
      c();
    });
  }
  function h() {
    n(e.page);
  }
  return { ...x(e), permissionList: t, searchChange: i, sortChange: g, getPageF: n, handleDel: p, handleUpdate: d, handleSave: m, refreshChange: h, crud: l };
} }, k = { class: "execution" };
function A(s, e, l, t, i, g) {
  const n = R("avue-crud"), p = P;
  return D(), v("div", k, [u(p, null, { default: I(() => [u(n, { ref: "crud", page: s.page, "onUpdate:page": e[0] || (e[0] = (d) => s.page = d), data: s.tableData, permission: t.permissionList, "table-loading": s.tableLoading, option: s.tableOption, onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, null, 8, ["page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const E = $(j, [["render", A]]);
export {
  E as default
};
