import { n as L, A as w, R as B, K as R, q as T, E as I, p as O, bi as P, S as z, b1 as U, _ as $, r as h, c as j, o as M, b, h as S, e as d, z as k } from "./index-DAdfXJ2i.js";
import { a as N, p as V, d as q, g as x } from "./tenantpackagecost-VuyOGNHB.js";
import { M as A } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const { $t: o } = L(), F = { dialogDrag: true, indexLabel: o("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: o("upms.tenantpackagecost.img"), prop: "img", type: "img", slot: true, rules: [{ required: true, message: o("upms.tenantpackagecost.img") + o("commons.notNull"), trigger: "blur" }] }, { label: o("upms.tenantpackagecost.type"), prop: "type", type: "select", sortable: true, editDisabled: true, rules: [{ required: true, message: o("upms.tenantpackagecost.type") + o("commons.notNull"), trigger: "blur" }, { max: 1, message: o("commons.lengthTips", { length: 1 }) }], dicData: [{ label: o("upms.tenantpackagecost.oneDay"), value: "1" }, { label: o("upms.tenantpackagecost.oneMonth"), value: "2" }, { label: o("upms.tenantpackagecost.oneYear"), value: "3" }] }, { label: o("upms.tenantpackagecost.amount"), prop: "amount", type: "number", sortable: true, min: 0.01, precision: 2, rules: [{ required: true, message: o("upms.tenantpackagecost.amount") + o("commons.notNull"), trigger: "blur" }] }] }, E = { components: { MaterialList: A }, props: { packageId: { type: String } }, setup(n) {
  const { proxy: t } = w(), e = B({ form: { img: void 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, defaults: {}, tableOption: F }), s = R().permissions, u = T(() => ({ addBtn: !!s["upms:tenantpackagecost:add"], delBtn: !!s["upms:tenantpackagecost:del"], editBtn: !!s["upms:tenantpackagecost:edit"], viewBtn: !!s["upms:tenantpackagecost:get"] }));
  I(() => n.packageId, () => {
    e.paramsSearch = { packageId: n.packageId }, i(e.page, e.paramsSearch);
  });
  function i(a, r) {
    e.tableLoading = true, x(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs, packageId: n.packageId }, r, e.paramsSearch)).then((p) => {
      e.tableData = p.data.records, e.page.total = p.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function g(a) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return q(a.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), i(e.page);
    });
  }
  function m(a, r, p, l) {
    a.img = a.img.length > 0 ? a.img[0] : "", V(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), p(), i(e.page);
    }).catch(() => {
      l();
    });
  }
  function c(a, r, p) {
    a.img = a.img.length > 0 ? a.img[0] : "", a.packageId = n.packageId, N(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), r(), i(e.page);
    }).catch(() => {
      p();
    });
  }
  function C(a, r) {
    a = U(a), e.paramsSearch = a, e.page.currentPage = 1, i(e.page, a), r();
  }
  function y(a) {
    const r = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = r) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = r) : (e.page.ascs = "", e.page.descs = ""), i(e.page);
  }
  function v() {
    i(e.page);
  }
  const f = O();
  function D(a, r) {
    window.openType = r, r == "add" ? e.form.img = [] : e.form.img = [e.form.img];
    const p = e.tableData.map((l) => l.type);
    f.value.defaults.type.dicData.map((l) => {
      p.includes(l.value) ? l.disabled = true : l.disabled = false;
    }), a();
  }
  return { ...z(e), crudCostRef: f, permissions: s, permissionList: u, priceToThousands: P, getPageF: i, handleDel: g, handleUpdate: m, handleSave: c, searchChange: C, sortChange: y, refreshChange: v, beforeOpen: D };
} }, H = { class: "jl-text-tips" }, K = { class: "jl-amount-sm jl-text-price" };
function Y(n, t, e, s, u, i) {
  const g = h("MaterialList"), m = h("avue-crud");
  return M(), j("div", null, [b(m, { ref: "crudCostRef", defaults: n.defaults, "onUpdate:defaults": t[1] || (t[1] = (c) => n.defaults = c), modelValue: n.form, "onUpdate:modelValue": t[2] || (t[2] = (c) => n.form = c), page: n.page, "onUpdate:page": t[3] || (t[3] = (c) => n.page = c), data: n.tableData, permission: s.permissionList, "table-loading": n.tableLoading, option: n.tableOption, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange, "before-open": s.beforeOpen }, { "img-form": S(() => [d("div", null, [b(g, { value: n.form.img, "onUpdate:value": t[0] || (t[0] = (c) => n.form.img = c), type: "image", num: 1, width: 200, height: 200 }, null, 8, ["value"]), d("p", H, k(n.$t("commons.imageSizeTip", { size: "200*200" })), 1)])]), amount: S((c) => [d("div", K, k(s.priceToThousands(c.row.amount, { digit: 2 })), 1)]), _: 1 }, 8, ["defaults", "modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange", "before-open"])]);
}
const ae = $(E, [["render", Y]]);
export {
  ae as default
};
