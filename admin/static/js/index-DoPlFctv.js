import { n as y, A as D, R as B, p as v, t as A, q as L, K as O, S as $, b1 as k, _ as W, r as l, c as R, o as C, b as r, h as p, e as I, z as U, g as N, B as M, a_ as P } from "./index-DAdfXJ2i.js";
import { _ as V } from "./index-BFdurQqx.js";
import { g as j, a as T, p as F, d as K } from "./wxusertags-B5lS-gOk.js";
import { b as q } from "./wxapp-BACewdCT.js";
import "./wxfreepublish-LUjjosG7.js";
import "./index-DnwcmTGn.js";
import "./index-C6Tt6Vi-.js";
import "./wxmaterial-DvTatkAN.js";
import "./index-BHfBwpZw.js";
import "./videojs-player.esm-CCSu0y3h.js";
const { $t: b } = y(), z = { dialogDrag: true, index: false, menuAlign: "center", align: "center", excelBtn: true, printBtn: false, viewBtn: true, searchShow: false, menuWidth: 150, menuType: "text", searchMenuSpan: 6, column: [{ label: b("wxmp.wxusertags.name"), prop: "name", rules: [{ required: true, message: b("wxmp.wxusertags.name") + b("commons.notNull"), trigger: "blur" }] }] }, E = { setup() {
  const { proxy: t } = D(), e = B({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "subscribe_time" }, paramsSearch: {}, tableLoading: false, tableOption: z, dialogMsgVisible: false, wxUserId: "" }), g = v(null);
  A(() => {
    m();
  });
  const n = L(() => {
    var _a;
    const a = (_a = O()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["wxmp:wxusertags:add"], delBtn: !!a["wxmp:wxusertags:del"], editBtn: !!a["wxmp:wxusertags:edit"], viewBtn: !!a["wxmp:wxusertags:get"] };
  });
  function _(a, o) {
    return a ? o.name.indexOf(a) !== -1 : true;
  }
  function m() {
    q({ appType: "2" }).then((a) => {
      e.treeWxAppData = a.data, e.treeWxAppData && e.treeWxAppData.length > 0 && i({ id: e.treeWxAppData[0].id });
    });
  }
  function i(a) {
    e.appId != a.id && (t.$nextTick(() => {
      g.value.setCurrentKey(a.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = a.id, e.paramsSearch = {}, s(e.page));
  }
  function u(a, o) {
    a = k(a), e.paramsSearch = a, e.page.currentPage = 1, s(e.page, a), o();
  }
  function c(a) {
    const o = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), s(e.page);
  }
  function s(a, o) {
    e.appId && (e.tableLoading = true, j(Object.assign({ appId: e.appId }, o, e.paramsSearch)).then((d) => {
      e.tableData = d.data, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function f(a) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return K({ appId: e.appId, id: a.id });
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), s(e.page);
    });
  }
  function h(a, o, d, S) {
    F(Object.assign({ appId: e.appId }, a)).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), d(), s(e.page);
    }).catch(() => {
      S();
    });
  }
  function x(a, o, d) {
    T(Object.assign({ appId: e.appId }, a)).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), o(), s(e.page);
    }).catch(() => {
      d();
    });
  }
  function w() {
    s(e.page);
  }
  return { ...$(e), permissionList: n, filterNode: _, getWxAppListF: m, nodeClick: i, searchChange: u, sortChange: c, getPageF: s, handleDel: f, handleUpdate: h, handleSave: x, refreshChange: w, tree: g };
} }, H = { class: "execution", style: { "border-top": "solid 1px #eceef6" } }, Z = { class: "clearfix", style: { display: "flex", "justify-content": "center" } };
function G(t, e, g, n, _, m) {
  const i = l("avue-tree"), u = l("el-card"), c = l("el-col"), s = l("avue-crud"), f = l("el-row"), h = V, x = l("el-dialog"), w = P;
  return C(), R("div", H, [r(w, null, { default: p(() => [r(f, { span: 24, gutter: 10 }, { default: p(() => [r(c, { xs: 24, sm: 24, md: 3 }, { default: p(() => [r(u, null, { header: p(() => [I("div", Z, [I("span", null, U(t.$t("wxmp.wxusertags.appName")), 1)])]), default: p(() => [r(i, { style: { "margin-top": "-1px" }, option: t.treeOption, data: t.treeWxAppData, props: t.treeWxAppProps, "filter-node-method": n.filterNode, "node-key": "id", "default-expand-all": "", ref: "tree", onNodeClick: n.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 }), r(c, { xs: 24, sm: 24, md: 21 }, { default: p(() => [r(s, { style: { "padding-left": "10px", "border-left": "solid 1px #eceef6" }, ref: "crud", page: t.page, "onUpdate:page": e[0] || (e[0] = (a) => t.page = a), data: t.tableData, "table-loading": t.tableLoading, option: t.tableOption, permission: n.permissionList, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 }), r(x, { title: t.$t("wxmp.wxusertags.userMessage"), modelValue: t.dialogMsgVisible, "onUpdate:modelValue": e[1] || (e[1] = (a) => t.dialogMsgVisible = a), width: "40%" }, { default: p(() => [t.dialogMsgVisible ? (C(), N(h, { key: 0, appId: t.appId, wxUserId: t.wxUserId }, null, 8, ["appId", "wxUserId"])) : M("", true)]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 })]);
}
const pe = W(E, [["render", G], ["__scopeId", "data-v-94ed8742"]]);
export {
  pe as default
};
