import { A as I, R as P, p as L, t as U, K as $, q as R, S as N, b1 as j, _ as z, r as d, c as O, o as b, b as p, h as s, e as k, z as v, F as V, v as W, g as A, f as B, B as F, C as K, a_ as E } from "./index-DAdfXJ2i.js";
import { t as M, g as q, a as H, p as Z, d as G } from "./wxtemplatemsg-CoX4ZmA5.js";
import { b as J } from "./wxapp-BACewdCT.js";
const Q = { setup() {
  var _a;
  const { proxy: t } = I(), e = P({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, form: { useType: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: M, dicDataUseType: [] }), f = L(null), o = L(null);
  U(() => {
    e.dicDataUseType = f.value.DIC.useType, h();
  });
  const i = (_a = $()) == null ? void 0 : _a.permissions, T = R(() => ({ addBtn: !!i["wxma:wxtemplatemsg:add"], delBtn: !!i["wxma:wxtemplatemsg:del"], editBtn: !!i["wxma:wxtemplatemsg:edit"], viewBtn: !!i["wxma:wxtemplatemsg:get"] }));
  function w(a, n) {
    return a ? n.name.indexOf(a) !== -1 : true;
  }
  function h() {
    J({ appType: "1" }).then((a) => {
      e.treeWxAppData = a.data, e.treeWxAppData && e.treeWxAppData.length > 0 && u({ id: e.treeWxAppData[0].id });
    });
  }
  function u(a) {
    e.appId != a.id && (t.$nextTick(() => {
      o.value.setCurrentKey(a.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = a.id, e.paramsSearch = {}, f.value.searchReset(), r(e.page));
  }
  function y(a, n) {
    a = j(a), e.paramsSearch = a, e.page.currentPage = 1, r(e.page, a), n();
  }
  function _(a) {
    const n = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = n) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = n) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(a, n) {
    e.appId && (e.tableLoading = true, q(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs, appId: e.appId }, n, e.paramsSearch)).then((c) => {
      e.tableData = c.data.records, e.page.total = c.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
      const m = e.dicDataUseType;
      for (let g = 0; g < m.length; g++) {
        m[g].disabled = false;
        for (let S = 0; S < e.tableData.length; S++) m[g].value == e.tableData[S].useType && (m[g].disabled = true);
      }
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function C(a) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return G(a.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function D(a, n, c, m) {
    Z(Object.assign({ appId: e.appId }, a)).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), c(), r(e.page);
    }).catch(() => {
      m();
    });
  }
  function x(a, n, c) {
    H(Object.assign({ appId: e.appId }, a)).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), n(), r(e.page);
    }).catch(() => {
      c();
    });
  }
  function l() {
    r(e.page);
  }
  return { ...N(e), permissions: i, permissionList: T, filterNode: w, getWxAppListF: h, nodeClick: u, searchChange: y, sortChange: _, getPageF: r, handleDel: C, handleUpdate: D, handleSave: x, refreshChange: l, tree: o, crud: f };
} }, X = { style: { "border-top": "solid 1px #eceef6" } }, Y = { style: { display: "flex", "justify-content": "center" } };
function ee(t, e, f, o, i, T) {
  const w = d("avue-tree"), h = d("el-card"), u = d("el-col"), y = d("el-button"), _ = d("el-radio"), r = d("el-radio-group"), C = d("avue-crud"), D = d("el-row"), x = E;
  return b(), O("div", X, [p(x, null, { default: s(() => [p(D, { span: 24, gutter: 10 }, { default: s(() => [p(u, { xs: 24, sm: 24, md: 3 }, { default: s(() => [p(h, { shadow: "never" }, { header: s(() => [k("div", Y, [k("span", null, v(t.$t("wxma.wxlive.miniprogramName")), 1)])]), default: s(() => [p(w, { ref: "tree", style: { "margin-top": "-1px" }, option: t.treeOption, data: t.treeWxAppData, onNodeClick: o.nodeClick }, null, 8, ["option", "data", "onNodeClick"])]), _: 1 })]), _: 1 }), p(u, { xs: 24, sm: 24, md: 21 }, { default: s(() => [p(C, { ref: "crud", page: t.page, "onUpdate:page": e[2] || (e[2] = (l) => t.page = l), style: { "padding-left": "10px", "border-left": "solid 1px #eceef6" }, modelValue: t.form, "onUpdate:modelValue": e[3] || (e[3] = (l) => t.form = l), data: t.tableData, permission: o.permissionList, "table-loading": t.tableLoading, option: t.tableOption, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { "menu-left": s(() => [o.permissions["wxma:wxtemplatemsg:add"] && t.tableData.length < 2 ? (b(), A(y, { key: 0, type: "primary", size: "small", icon: "Plus", onClick: e[0] || (e[0] = K((l) => t.$refs.crud.rowAdd(), ["stop"])) }, { default: s(() => [B(v(t.$t("commons.addNew")), 1)]), _: 1 })) : F("", true)]), "useType-form": s(({ type: l }) => [p(r, { modelValue: t.form.useType, "onUpdate:modelValue": e[1] || (e[1] = (a) => t.form.useType = a), size: "small", disabled: l != "add" }, { default: s(() => [(b(true), O(V, null, W(t.dicDataUseType, (a) => (b(), A(_, { key: a.value, border: "", label: a.value, disabled: a.disabled }, { default: s(() => [B(v(a.label), 1)]), _: 2 }, 1032, ["label", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), _: 1 }, 8, ["page", "modelValue", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 })]), _: 1 })]);
}
const ne = z(Q, [["render", ee]]);
export {
  ne as default
};
