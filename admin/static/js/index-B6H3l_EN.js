import { A as w, R as y, K as V, q as L, E as B, S as D, b1 as P, _ as I, r as d, c as O, o as R, b as l, h as p, e as g, z as _, w as z, f as T, D as j, a_ as k } from "./index-DAdfXJ2i.js";
import { p as U, c as E, d as F, e as M } from "./supplier-CbDQWRL9.js";
import { t as N } from "./supplier-BS6wXSgi.js";
import { M as A } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
const q = { components: { MaterialList: A }, name: "supplier", setup() {
  const { proxy: n } = w(), a = y({ form: { imgUrl: void 0, longitude: void 0, latitude: void 0, id: void 0, address: void 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: N, addressInfo: [] }), i = V().permissions, s = L(() => ({ addBtn: !!i["mall:supplier:add"], delBtn: !!i["mall:supplier:del"], editBtn: !!i["mall:supplier:edit"], viewBtn: !!i["mall:supplier:get"] }));
  B(() => a.addressInfo, (e) => {
    e.length > 0 ? a.form.address = e[2] : a.form.address = "";
  }, { deep: true, immediate: true });
  function t(e, o) {
    a.tableLoading = true, M(Object.assign({ current: e.currentPage, size: e.pageSize, descs: a.page.descs, ascs: a.page.ascs }, o, a.paramsSearch)).then((r) => {
      a.tableData = r.data.records, a.page.total = r.data.total, a.page.currentPage = e.currentPage, a.page.pageSize = e.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function $(e) {
    if (e.enable == "1") {
      n.$message({ showClose: true, message: "\u8BF7\u5C06\u4F9B\u5E94\u5546\u5173\u95ED\u540E\u518D\u5220\u9664!", type: "warning" });
      return;
    }
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return F(e.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), t(a.page);
    });
  }
  function u(e, o, r, m) {
    e.imgUrl = e.imgUrl.length > 0 ? e.imgUrl[0] : "";
    const S = a.addressInfo;
    e.longitude = S[0], e.latitude = S[1], e.address = S[2], U(e).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), r(), t(a.page);
    }).catch(() => {
      m();
    });
  }
  function f(e, o, r) {
    e.imgUrl = e.imgUrl.length > 0 ? e.imgUrl[0] : "";
    const m = a.addressInfo;
    e.longitude = m[0], e.latitude = m[1], e.address = m[2], E(e).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), o(), t(a.page);
    }).catch(() => {
      r();
    });
  }
  function h(e, o) {
    e = P(e), a.paramsSearch = e, a.page.currentPage = 1, t(a.page, e), o();
  }
  function b(e) {
    const o = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (a.page.descs = "", a.page.ascs = o) : e.order == "descending" ? (a.page.ascs = "", a.page.descs = o) : (a.page.ascs = "", a.page.descs = ""), t(a.page);
  }
  function c() {
    t(a.page);
  }
  function v(e, o) {
    window.openType = o, o == "add" ? a.form.imgUrl = [] : (a.form.imgUrl = [a.form.imgUrl], a.addressInfo = a.form.address ? [a.form.longitude, a.form.latitude, a.form.address] : []), e();
  }
  function C(e) {
    e && e.id && (e.enable == "0" ? n.$confirm("\u5173\u95ED\u64CD\u4F5C\u4F1A\u5F71\u54CD\u8BE5\u4F9B\u5E94\u5546\u5546\u54C1\u548C\u6240\u6709\u76F8\u5173\u5E97\u94FA\u5546\u54C1\u7684\u4E0B\u67B6,\u8BF7\u8C28\u614E\u64CD\u4F5C,\u662F\u5426\u786E\u5B9A\u4E0B\u67B6?", n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(() => {
      U({ id: e.id, enable: e.enable }).then(() => {
        n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" });
      }).catch(() => {
        c();
      });
    }).catch(() => {
      e.enable = "1";
    }) : U({ id: e.id, enable: e.enable }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      c();
    }));
  }
  return { ...D(a), permissions: i, permissionList: s, getPageF: t, handleDel: $, handleUpdate: u, handleSave: f, searchChange: h, sortChange: b, refreshChange: c, beforeOpen: v, changeEnable: C };
} }, H = { class: "jl-text-tips" };
function K(n, a, i, s, t, $) {
  const u = d("el-switch"), f = d("avue-input-map"), h = d("Position"), b = d("el-icon"), c = d("material-list"), v = d("avue-crud"), C = k;
  return R(), O("div", null, [l(C, null, { default: p(() => [l(v, { ref: "crud", modelValue: n.form, "onUpdate:modelValue": a[2] || (a[2] = (e) => n.form = e), page: n.page, "onUpdate:page": a[3] || (a[3] = (e) => n.page = e), data: n.tableData, permission: s.permissionList, "table-loading": n.tableLoading, option: n.tableOption, "before-open": s.beforeOpen, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { enable: p((e) => [l(u, { "active-value": "1", "inactive-value": "0", modelValue: e.row.enable, "onUpdate:modelValue": (o) => e.row.enable = o, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (o) => s.changeEnable(e.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "address-form": p((e) => [g("div", null, [l(f, { modelValue: n.addressInfo, "onUpdate:modelValue": a[0] || (a[0] = (o) => n.addressInfo = o), placeholder: n.$t("mall.shopinfo.selectMapLocation"), style: { width: "100%" } }, null, 8, ["modelValue", "placeholder"]), z(g("div", null, [l(b, null, { default: p(() => [l(h)]), _: 1 }), T(_(n.form.address), 1)], 512), [[j, n.form.address]])])]), "imgUrl-form": p(() => [g("div", null, [l(c, { value: n.form.imgUrl, "onUpdate:value": a[1] || (a[1] = (e) => n.form.imgUrl = e), type: "image", num: 1, width: 100, height: 100 }, null, 8, ["value"]), g("p", H, _(n.$t("commons.imageSizeTip", { size: "100*100" })), 1)])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const ee = I(q, [["render", K]]);
export {
  ee as default
};
