import { A as T, R as B, p as L, q as O, K as R, S as V, b1 as I, _ as P, r as g, c as _, o as b, b as f, h as u, e as $, g as D, B as k, a_ as y } from "./index-DAdfXJ2i.js";
import { b as E, c as w, p as C, d as z, g as j } from "./bargaininfo-DC3QEOqY.js";
import { M as F } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const M = { components: { MaterialList: F }, setup() {
  const { proxy: n } = T(), a = B({ form: { validTime: void 0, validBeginTime: "", validEndTime: "", shopId: "", parentId: "", picUrl: void 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: E, reFreshMaterialList: true }), c = L(null), o = O(() => {
    var _a;
    const e = (_a = R()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:bargaininfo:add"], delBtn: !!e["mall:bargaininfo:del"], editBtn: !!e["mall:bargaininfo:edit"], viewBtn: !!e["mall:bargaininfo:get"] };
  });
  function h(e) {
    e && e.id && C({ id: e.id, enable: e.enable }).then(() => {
    });
  }
  function v(e, t) {
    if (t == "add") a.form.validTime = [];
    else {
      const s = [];
      s.push(a.form.validBeginTime), s.push(a.form.validEndTime), a.form.validTime = s;
    }
    t == "add" ? a.form.picUrl = [] : a.form.picUrl = [a.form.picUrl], e();
  }
  function d(e, t) {
    e = I(e), a.paramsSearch = e, a.page.currentPage = 1, l(a.page, e), t();
  }
  function m(e) {
    const t = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (a.page.descs = "", a.page.ascs = t) : e.order == "descending" ? (a.page.ascs = "", a.page.descs = t) : (a.page.ascs = "", a.page.descs = ""), l(a.page);
  }
  function l(e, t) {
    a.tableLoading = true, j(Object.assign({ current: e.currentPage, size: e.pageSize, descs: a.page.descs, ascs: a.page.ascs }, t, a.paramsSearch)).then((s) => {
      a.tableData = s.data.records, a.page.total = s.data.total, a.page.currentPage = e.currentPage, a.page.pageSize = e.pageSize, a.tableLoading = false, n.$nextTick(() => {
        c.value.dicInit("cascader");
      });
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function p(e) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return z(e.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), l(a.page);
    });
  }
  function i(e, t, s, S) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1], C(e).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), s(), l(a.page);
    }).catch(() => {
      S();
    });
  }
  function r(e, t, s) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1], w(e).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), t(), l(a.page);
    }).catch(() => {
      s();
    });
  }
  function U() {
    l(a.page);
  }
  return { ...V(a), permissionList: o, changeEnable: h, beforeOpen: v, searchChange: d, sortChange: m, getPageF: l, handleDel: p, handleUpdate: i, handleSave: r, refreshChange: U, crud: c };
} };
function N(n, a, c, o, h, v) {
  const d = g("el-switch"), m = g("material-list"), l = g("avue-crud"), p = y;
  return b(), _("div", null, [f(p, null, { default: u(() => [f(l, { ref: "crud", page: n.page, "onUpdate:page": a[1] || (a[1] = (i) => n.page = i), data: n.tableData, permission: o.permissionList, "table-loading": n.tableLoading, modelValue: n.form, "onUpdate:modelValue": a[2] || (a[2] = (i) => n.form = i), option: n.tableOption, "before-open": o.beforeOpen, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { enable: u((i) => [f(d, { modelValue: i.row.enable, "onUpdate:modelValue": (r) => i.row.enable = r, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (r) => o.changeEnable(i.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "picUrl-form": u(() => [$("div", null, [n.form.shopId ? (b(), D(m, { key: 0, value: n.form.picUrl, "onUpdate:value": a[0] || (a[0] = (i) => n.form.picUrl = i), type: "image", shopId: n.form.shopId, num: 1, width: n.form.parentId == "0" ? 300 : 150, height: 150 }, null, 8, ["value", "shopId", "width"])) : k("", true)])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "modelValue", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const W = P(M, [["render", N]]);
export {
  W as default
};
