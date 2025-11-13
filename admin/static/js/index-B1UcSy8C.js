import { n as y, A as U, R as D, K as L, q as B, S as V, b1 as C, _, r as h, c as $, o as R, b as m, h as f, e as T, z as P, a_ as z } from "./index-DAdfXJ2i.js";
import { p as w, a as N, d as O, b as x } from "./goodsbrand-BK_6Xr87.js";
import { M } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const { $t: n } = y(), j = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: true, viewBtn: true, searchMenuSpan: 6, column: [{ label: n("mall.goodsbrand.brandName"), prop: "brandName", sortable: true, rules: [{ required: true, message: n("mall.goodsbrand.brandName") + n("commons.notNull"), trigger: "blur" }, { max: 64, message: n("commons.lengthTips", { length: 64 }) }] }, { label: n("mall.goodsbrand.picUrl"), prop: "picUrl", type: "img", rules: [{ required: true, message: n("mall.goodsbrand.picUrl") + n("commons.notNull"), trigger: "blur" }, { min: 0, max: 500, message: n("commons.lengthTips", { length: 500 }) }] }, { label: n("mall.goodsbrand.sort"), prop: "sort", type: "number", sortable: true, rules: [] }, { label: n("commons.enabled"), prop: "enable", sortable: true, type: "radio", rules: [{ required: true, message: n("commons.notNull"), trigger: "blur" }], dicData: [{ label: n("commons.close"), value: "0" }, { label: n("commons.open"), value: "1" }] }, { label: n("mall.goodsbrand.createTime"), prop: "createTime", sortable: true, addDisplay: false, editDisplay: false, rules: [] }, { label: n("mall.goodsbrand.updateTime"), prop: "updateTime", sortable: true, addDisplay: false, editDisplay: false, rules: [] }] }, k = { name: "goodsbrand", components: { MaterialList: M }, setup() {
  const { proxy: o } = U(), e = D({ form: { picUrl: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "sort", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: j }), i = L().permissions, t = B(() => ({ addBtn: !!i["mall:goodsbrand:add"], delBtn: !!i["mall:goodsbrand:del"], editBtn: !!i["mall:goodsbrand:edit"], viewBtn: !!i["mall:goodsbrand:get"] }));
  function l(a, r) {
    e.tableLoading = true, x(C({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs, ...r, ...e.paramsSearch })).then((d) => {
      e.tableData = d.data.records, e.page.total = d.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function S(a) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return O(a.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), l(e.page);
    });
  }
  function p(a, r, d, v) {
    w(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), d(), l(e.page);
    }).catch(() => {
      v();
    });
  }
  function g(a, r, d) {
    N(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), r(), l(e.page);
    }).catch(() => {
      d();
    });
  }
  function u(a, r) {
    a = C(a), e.paramsSearch = a, e.page.currentPage = 1, l(e.page, a), r();
  }
  function b(a) {
    const r = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = r) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = r) : (e.page.ascs = "", e.page.descs = ""), l(e.page);
  }
  function s() {
    l(e.page);
  }
  function c(a) {
    a && a.id && w({ id: a.id, enable: a.enable }).then(() => {
    });
  }
  return { ...V(e), permissions: i, permissionList: t, getPageF: l, handleDel: S, handleUpdate: p, handleSave: g, searchChange: u, sortChange: b, refreshChange: s, changeEnable: c };
} }, q = { class: "jl-text-tips" };
function A(o, e, i, t, l, S) {
  const p = h("el-switch"), g = h("MaterialList"), u = h("avue-crud"), b = z;
  return R(), $("div", null, [m(b, null, { default: f(() => [m(u, { ref: "crud", modelValue: o.form, "onUpdate:modelValue": e[1] || (e[1] = (s) => o.form = s), page: o.page, "onUpdate:page": e[2] || (e[2] = (s) => o.page = s), data: o.tableData, permission: t.permissionList, "table-loading": o.tableLoading, option: o.tableOption, onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, { enable: f((s) => [m(p, { modelValue: s.row.enable, "onUpdate:modelValue": (c) => s.row.enable = c, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (c) => t.changeEnable(s.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "picUrl-form": f((s) => [m(g, { singleValue: o.form.picUrl, "onUpdate:singleValue": e[0] || (e[0] = (c) => o.form.picUrl = c), disabled: s.type == "view", num: 1, "is-single": true, type: "image", width: 100, height: 100 }, null, 8, ["singleValue", "disabled"]), T("p", q, P(o.$t("commons.imageSizeTip", { size: "100px*100px" })), 1)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Q = _(k, [["render", A]]);
export {
  Q as default
};
