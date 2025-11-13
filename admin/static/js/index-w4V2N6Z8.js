import { A as _, R as S, q as w, K as B, S as L, b1 as R, _ as D, r as p, c as P, o as V, b as l, h as i, e as $, a_ as y } from "./index-DAdfXJ2i.js";
import { _ as v } from "./BaseEditor-CKHWT0N2.js";
import { a as O, b as E, p as U, d as z, g as j } from "./articleinfo-BbcsyAN4.js";
import { M as k } from "./list-CpVj7t9v.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const F = { components: { MaterialList: k, BaseEditor: v }, setup() {
  const { proxy: n } = _(), a = S({ form: { articleContent: "", picUrl: [] }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: O }), f = w(() => {
    var _a;
    const e = (_a = B()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:articleinfo:add"], delBtn: !!e["mall:articleinfo:del"], editBtn: !!e["mall:articleinfo:edit"], viewBtn: !!e["mall:articleinfo:get"] };
  });
  function t(e) {
    e && e.id && U({ id: e.id, enable: e.enable }).then(() => {
    });
  }
  function h(e, o) {
    e = R(e), a.paramsSearch = e, a.page.currentPage = 1, s(a.page, e), o();
  }
  function b(e) {
    const o = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (a.page.descs = "", a.page.ascs = o) : e.order == "descending" ? (a.page.ascs = "", a.page.descs = o) : (a.page.ascs = "", a.page.descs = ""), s(a.page);
  }
  function s(e, o) {
    a.tableLoading = true, j(Object.assign({ current: e.currentPage, size: e.pageSize, descs: a.page.descs, ascs: a.page.ascs }, o, a.paramsSearch)).then((r) => {
      const c = r.data.records;
      c.forEach(function(C) {
        C.picUrl = [C.picUrl];
      }), a.tableData = c, a.page.total = r.data.total, a.page.currentPage = e.currentPage, a.page.pageSize = e.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function d(e) {
    n.$confirm(n.$t("commons.confirmDelete"), n.$t("commons.tip"), { confirmButtonText: n.$t("commons.confirm"), cancelButtonText: n.$t("commons.cancel"), type: "warning" }).then(function() {
      return z(e.id);
    }).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.delSuccess"), type: "success" }), s(a.page);
    });
  }
  function m(e, o, r, c) {
    e.picUrl = e.picUrl[0], U(e).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), r(), s(a.page);
    }).catch(() => {
      c();
    });
  }
  function g(e, o, r) {
    e.picUrl = e.picUrl[0], E(e).then(() => {
      n.$message({ showClose: true, message: n.$t("commons.addSuccess"), type: "success" }), o(), s(a.page);
    }).catch(() => {
      r();
    });
  }
  function u() {
    s(a.page);
  }
  return { ...L(a), permissionList: f, changeEnable: t, searchChange: h, sortChange: b, getPageF: s, handleDel: d, handleUpdate: m, handleSave: g, refreshChange: u };
} }, A = { class: "execution" };
function M(n, a, f, t, h, b) {
  const s = p("el-image"), d = p("el-switch"), m = p("material-list"), g = v, u = p("avue-crud"), e = y;
  return V(), P("div", A, [l(e, null, { default: i(() => [l(u, { ref: "crud", page: n.page, "onUpdate:page": a[2] || (a[2] = (o) => n.page = o), data: n.tableData, permission: t.permissionList, "table-loading": n.tableLoading, option: n.tableOption, modelValue: n.form, "onUpdate:modelValue": a[3] || (a[3] = (o) => n.form = o), onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, { picUrl: i((o) => [l(s, { style: { width: "100px", height: "100px" }, src: o.row.picUrl[0] }, null, 8, ["src"])]), enable: i((o) => [l(d, { modelValue: o.row.enable, "onUpdate:modelValue": (r) => o.row.enable = r, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (r) => t.changeEnable(o.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "picUrl-form": i(() => [$("div", null, [l(m, { value: n.form.picUrl, "onUpdate:value": a[0] || (a[0] = (o) => n.form.picUrl = o), type: "image", num: 1 }, null, 8, ["value"])])]), "articleContent-form": i(() => [l(g, { value: n.form.articleContent, "onUpdate:value": a[1] || (a[1] = (o) => n.form.articleContent = o) }, null, 8, ["value"])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const W = D(F, [["render", M]]);
export {
  W as default
};
