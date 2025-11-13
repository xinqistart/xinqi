import { aO as f, n as $, A, R as O, p as T, t as P, K as R, q as N, S as W, b1 as z, _ as j, r as d, c as q, o as C, b as p, h as l, e as v, z as S, g as B, B as k, f as L, a_ as F } from "./index-DAdfXJ2i.js";
import { _ as M } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { C as K } from "./wxapp-DzjQ_kFh.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function E(a) {
  return f.request("get", "/weixin/wxuser/page", { params: a });
}
function V(a) {
  return f.request("post", "/weixin/wxuser", { data: a });
}
function G(a) {
  return f.request("delete", "/weixin/wxuser/" + a);
}
function H(a) {
  return f.request("put", "/weixin/wxuser", { data: a });
}
const { $t: n } = $(), Z = { dialogDrag: true, index: false, indexLabel: n("commons.indexLabel"), menuAlign: "center", align: "center", editBtn: false, delBtn: false, addBtn: false, excelBtn: true, printBtn: false, viewBtn: true, searchShow: false, menuWidth: 150, menuType: "text", searchMenuSpan: 6, searchGutter: 30, searchLabelPosition: "left", defaultSort: { prop: "createTime", order: "descending" }, column: [{ label: n("wxma.wxuser.headimgUrl"), prop: "headimgUrl", imgWidth: 50, dataType: "string", fileType: "img", type: "upload", listType: "picture-img", editDisplay: false }, { label: n("wxma.wxuser.nickName"), prop: "nickName", width: 100, sortable: true, search: true, editDisplay: false }, { label: n("wxma.wxuser.openId"), prop: "openId", editDisplay: false, search: true }, { label: n("wxma.wxuser.unionId"), prop: "unionId", editDisplay: false, search: true }, { label: n("wxma.wxuser.sex"), prop: "sex", width: 60, type: "select", sortable: true, search: true, editDisplay: false, slot: true, dicUrl: "/upms/dict/type/wx_sex" }, { label: n("wxma.wxuser.country"), prop: "country", sortable: true, search: true, editDisplay: false }, { label: n("wxma.wxuser.province"), prop: "province", sortable: true, editDisplay: false }, { label: n("wxma.wxuser.city"), prop: "city", sortable: true, search: true, editDisplay: false }, { label: n("wxma.wxuser.language"), prop: "language", sortable: true, editDisplay: false }, { label: n("wxma.wxuser.remark"), prop: "remark", hide: true }, { label: n("commons.createTime"), prop: "createTime", type: "datetime", sortable: true, editDisplay: false }, { label: n("wxma.wxuser.updateTime"), prop: "updateTime", type: "datetime", sortable: true, hide: true, editDisplay: false }] }, J = { setup() {
  var _a;
  const { proxy: a } = A(), e = O({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, wxUserId: "", tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: Z, selectionData: [], dialogTagging: false, checkedTags: [], userTagsData: [], taggingType: "", tagId: "" }), x = T(null), s = T(null);
  P(() => {
    g();
  });
  const c = (_a = R()) == null ? void 0 : _a.permissions, I = N(() => ({ addBtn: !!c["wxmp:wxuser:add"], delBtn: !!c["wxmp:wxuser:del"], editBtn: !!c["wxmp:wxuser:edit"], viewBtn: !!c["wxmp:wxuser:get"] }));
  function h(t, o) {
    return t ? o.name.indexOf(t) !== -1 : true;
  }
  function g() {
    K({ appType: "1" }).then((t) => {
      e.treeWxAppData = t.data, e.treeWxAppData && e.treeWxAppData.length > 0 && m({ id: e.treeWxAppData[0].id });
    });
  }
  function m(t) {
    e.appId != t.id && (a.$nextTick(() => {
      s.value.setCurrentKey(t.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = t.id, e.paramsSearch = {}, x.value.searchReset(), i(e.page));
  }
  function w(t, o) {
    t = z(t), e.paramsSearch = t, e.page.currentPage = 1, i(e.page, t), o();
  }
  function b(t) {
    const o = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = o) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = o) : (e.page.ascs = "", e.page.descs = ""), i(e.page);
  }
  function i(t, o) {
    e.appId && (e.tableLoading = true, E(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs, appType: "1", appId: e.appId, tagId: e.tagId }, o, e.paramsSearch)).then((u) => {
      e.tableData = u.data.records, e.page.total = u.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function y(t) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return G(t.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), i(e.page);
    });
  }
  function _(t, o, u, U) {
    H(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), u(), i(e.page);
    }).catch(() => {
      U();
    });
  }
  function D(t, o, u) {
    V(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), o(), i(e.page);
    }).catch(() => {
      u();
    });
  }
  function r() {
    i(e.page);
  }
  return { ...W(e), permissions: c, permissionList: I, filterNode: h, getWxAppListF: g, nodeClick: m, searchChange: w, sortChange: b, getPageF: i, handleDel: y, handleUpdate: _, handleSave: D, refreshChange: r, tree: s, crud: x };
} }, Q = { style: { "border-top": "solid 1px #eceef6" } }, X = { style: { display: "flex", "justify-content": "center" } };
function Y(a, e, x, s, c, I) {
  const h = d("avue-tree"), g = d("el-card"), m = d("el-col"), w = d("el-tag"), b = d("el-button"), i = M, y = d("avue-crud"), _ = d("el-row"), D = F;
  return C(), q("div", Q, [p(D, null, { default: l(() => [p(_, { span: 24, gutter: 10 }, { default: l(() => [p(m, { xs: 24, sm: 24, md: 3 }, { default: l(() => [p(g, { shadow: "never" }, { header: l(() => [v("div", X, [v("span", null, S(a.$t("wxma.wxlive.miniprogramName")), 1)])]), default: l(() => [p(h, { ref: "tree", style: { "margin-top": "-1px" }, option: a.treeOption, data: a.treeWxAppData, onNodeClick: s.nodeClick }, null, 8, ["option", "data", "onNodeClick"])]), _: 1 })]), _: 1 }), p(m, { xs: 24, sm: 24, md: 21 }, { default: l(() => [p(y, { ref: "crud", page: a.page, "onUpdate:page": e[0] || (e[0] = (r) => a.page = r), style: { "padding-left": "10px", "border-left": "solid 1px #eceef6" }, data: a.tableData, "table-loading": a.tableLoading, option: a.tableOption, permission: s.permissionList, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { sex: l((r) => [r.row.sex ? (C(), B(w, { key: 0, size: "small", effect: "light", type: r.row.sex == "1" ? "primary" : r.row.sex == "2" ? "danger" : "warning" }, { default: l(() => [L(S(r.row.$sex), 1)]), _: 2 }, 1032, ["type"])) : k("", true)]), menu: l((r) => [s.permissions["mall:userinfo:get"] && r.row.mallUserId ? (C(), B(i, { key: 0, "user-id": r.row.mallUserId, "set-slot": true }, { default: l(() => [p(b, { type: "primary", link: "", icon: "User" }, { default: l(() => [L(S(a.$t("commons.userMallInfo")), 1)]), _: 1 })]), _: 1 }, 8, ["user-id"])) : k("", true)]), _: 1 }, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 })]), _: 1 })]);
}
const oe = j(J, [["render", Y]]);
export {
  oe as default
};
