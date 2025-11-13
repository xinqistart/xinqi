import { A as B, R as L, p as O, q as R, K as V, S as $, b1 as y, _ as D, r as d, c as I, o as U, b as m, h as r, g as P, B as k, f as S, z as v, a_ as w } from "./index-DAdfXJ2i.js";
import { b as z, c as E, p as T, d as N, g as j } from "./grouponinfo-D4yBI7DS.js";
import { M as F } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const M = { components: { MaterialList: F }, setup() {
  const { proxy: n } = B(), a = L({ form: { shopId: "", parentId: "", validTime: [], validBeginTime: "", validEndTime: "", picUrl: void 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: z, reFreshMaterialList: true }), p = O(null), t = R(() => {
    var _a;
    const e = (_a = V()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:grouponinfo:add"], delBtn: !!e["mall:grouponinfo:del"], editBtn: !!e["mall:grouponinfo:edit"], viewBtn: !!e["mall:grouponinfo:get"] };
  });
  function b(e) {
    e && e.id && T({ id: e.id, enable: e.enable }).then(() => {
    });
  }
  function C(e, i) {
    if (i == "add") a.form.validTime = [];
    else {
      const s = [];
      s.push(a.form.validBeginTime), s.push(a.form.validEndTime), a.form.validTime = s;
    }
    i == "add" ? a.form.picUrl = [] : a.form.picUrl = [a.form.picUrl], e();
  }
  function g(e, i) {
    e = y(e), a.paramsSearch = e, a.page.currentPage = 1, l(a.page, e), i();
  }
  function f(e) {
    const i = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (a.page.descs = "", a.page.ascs = i) : e.order == "descending" ? (a.page.ascs = "", a.page.descs = i) : (a.page.ascs = "", a.page.descs = ""), l(a.page);
  }
  function l(e, i) {
    a.tableLoading = true, j(Object.assign({ current: e.currentPage, size: e.pageSize, descs: a.page.descs, ascs: a.page.ascs }, i, a.paramsSearch)).then((s) => {
      a.tableData = s.data.records, a.page.total = s.data.total, a.page.currentPage = e.currentPage, a.page.pageSize = e.pageSize, a.tableLoading = false, n.$nextTick(() => {
        p.value.dicInit("cascader");
      });
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function u(e) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return N(e.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), l(a.page);
    });
  }
  function h(e, i, s, _) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1], T(e).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), s(), l(a.page);
    }).catch(() => {
      _();
    });
  }
  function o(e, i, s) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1], E(e).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), i(), l(a.page);
    }).catch(() => {
      s();
    });
  }
  function c() {
    l(a.page);
  }
  return { ...$(a), permissionList: t, changeEnable: b, beforeOpen: C, searchChange: g, sortChange: f, getPageF: l, handleDel: u, handleUpdate: h, handleSave: o, refreshChange: c, crud: p };
} }, A = { class: "execution" };
function q(n, a, p, t, b, C) {
  const g = d("el-switch"), f = d("el-tag"), l = d("material-list"), u = d("avue-crud"), h = w;
  return U(), I("div", A, [m(h, null, { default: r(() => [m(u, { ref: "crud", page: n.page, "onUpdate:page": a[1] || (a[1] = (o) => n.page = o), data: n.tableData, permission: t.permissionList, "table-loading": n.tableLoading, option: n.tableOption, "before-open": t.beforeOpen, modelValue: n.form, "onUpdate:modelValue": a[2] || (a[2] = (o) => n.form = o), onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, { enable: r((o) => [m(g, { "active-value": "1", "inactive-value": "0", modelValue: o.row.enable, "onUpdate:modelValue": (c) => o.row.enable = c, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (c) => t.changeEnable(o.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), name: r((o) => [m(f, { type: "danger", size: "small", effect: "dark" }, { default: r(() => [S(v(o.row.grouponNum) + v(n.$t("mall.grouponinfo.grouponNumTip")), 1)]), _: 2 }, 1024), S(" " + v(o.row.name), 1)]), "picUrl-form": r(() => [n.form.shopId ? (U(), P(l, { key: 0, value: n.form.picUrl, "onUpdate:value": a[0] || (a[0] = (o) => n.form.picUrl = o), type: "image", shopId: n.form.shopId, num: 1, width: n.form.parentId == "0" ? 300 : 150, height: 150 }, null, 8, ["value", "shopId", "width"])) : k("", true)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "before-open", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Y = D(M, [["render", q]]);
export {
  Y as default
};
