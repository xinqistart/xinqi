import { aO as B, n as F, A as H, R as Z, p as N, t as G, q as P, K as J, S as Q, b1 as X, _ as Y, r as s, c as C, o as r, b as p, h as t, e as b, z as d, g as u, B as i, f as c, F as I, v as K, a_ as ee } from "./index-DAdfXJ2i.js";
import { b as ae } from "./wxapp-BACewdCT.js";
import { r as te } from "./dict-B2OHV-lB.js";
import { a as le } from "./index-DnwcmTGn.js";
import "./wxfreepublish-LUjjosG7.js";
import "./index-C6Tt6Vi-.js";
import "./wxmaterial-DvTatkAN.js";
function ne(a) {
  return B.request("get", "/weixin/wxautoreply/page", { params: a });
}
function z(a) {
  return B.request("post", "/weixin/wxautoreply", { data: a });
}
function oe(a) {
  return B.request("delete", "/weixin/wxautoreply/" + a);
}
function E(a) {
  return B.request("put", "/weixin/wxautoreply", { data: a });
}
const { $t: f } = F(), pe = { dialogDrag: true, index: true, indexLabel: f("commons.indexLabel"), indexWidth: 80, menuAlign: "center", align: "center", menuType: "text", addBtn: false, delBtn: false, editBtn: false, searchShow: false, searchMenuSpan: 6, column: [{ label: f("wxmp.wxautoreply.replyMessageType"), prop: "repType", type: "select", dicUrl: "/upms/dict/type/wx_rep_type" }] }, re = { dialogDrag: true, index: true, indexLabel: f("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: false, delBtn: false, editBtn: false, searchMenuSpan: 6, column: [{ label: f("wxmp.wxautoreply.requestMessageType"), prop: "reqType", type: "select", dicUrl: "/upms/dict/type/wx_req_type", sortable: true }, { label: f("wxmp.wxautoreply.replyMessageType"), prop: "repType", type: "select", dicUrl: "/upms/dict/type/wx_rep_type", sortable: true }] }, se = { dialogDrag: true, index: true, indexLabel: f("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: false, delBtn: false, editBtn: false, searchMenuSpan: 6, column: [{ label: f("wxmp.wxautoreply.keyword"), prop: "reqKey", search: true, sortable: true }, { label: f("wxmp.wxautoreply.matchType"), prop: "repMate", type: "select", dicUrl: "/upms/dict/type/wx_rep_mate", sortable: true }, { label: f("wxmp.wxautoreply.replyMessageType"), prop: "repType", type: "select", dicUrl: "/upms/dict/type/wx_rep_type", sortable: true }] }, de = { components: { WxReplySelect: le }, setup() {
  const { proxy: a } = H(), e = Z({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption1: pe, tableOption2: re, tableOption3: se, dialog1Visible: false, type: "1", objData: { reqKey: "", repMate: "", reqType: "text", repType: "text" }, handleType: null, dictData: /* @__PURE__ */ new Map(), hackResetWxReplySelect: false }), L = N(null), o = N(null);
  S("wx_req_type"), S("wx_rep_mate"), G(() => {
    V();
  });
  const x = P(() => {
    var _a;
    return (_a = J()) == null ? void 0 : _a.permissions;
  }), U = P(() => ({ addBtn: !!x.value["wxmp:wxautoreply:add"], delBtn: !!x.value["wxmp:wxautoreply:del"], editBtn: !!x.value["wxmp:wxautoreply:edit"], viewBtn: !!x.value["wxmp:wxautoreply:get"] }));
  function M(n, g) {
    return n ? g.name.indexOf(n) !== -1 : true;
  }
  function V() {
    ae({ appType: "2" }).then((n) => {
      e.treeWxAppData = n.data, e.treeWxAppData && e.treeWxAppData.length > 0 && D({ id: e.treeWxAppData[0].id });
    });
  }
  function D(n) {
    e.appId != n.id && (a.$nextTick(() => {
      o.value.setCurrentKey(n.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = n.id, e.paramsSearch = {}, L.value.searchReset(), y(e.page));
  }
  function S(n) {
    te(n).then((g) => {
      e.dictData.set(n, g.data);
    });
  }
  function v() {
    e.hackResetWxReplySelect = false, a.$nextTick(() => {
      e.hackResetWxReplySelect = true;
    }), e.handleType = "add", e.dialog1Visible = true, e.objData = { reqKey: "", repMate: "", reqType: "text", repType: "text" };
  }
  function m(n) {
    e.hackResetWxReplySelect = false, a.$nextTick(() => {
      e.hackResetWxReplySelect = true;
    }), e.handleType = "edit", e.dialog1Visible = true, e.objData = Object.assign({}, n);
  }
  function T(n) {
    e.tableData = [], e.page.currentPage = 1, e.type = n.paneName, y(e.page);
  }
  function R(n, g) {
    n = X(n), e.paramsSearch = n, e.page.currentPage = 1, y(e.page, n), g();
  }
  function A(n) {
    const g = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (e.page.descs = "", e.page.ascs = g) : n.order == "descending" ? (e.page.ascs = "", e.page.descs = g) : (e.page.ascs = "", e.page.descs = ""), y(e.page);
  }
  function y(n, g) {
    e.appId && (e.tableLoading = true, ne(Object.assign({ current: n.currentPage, size: n.pageSize, descs: e.page.descs, ascs: e.page.ascs, appId: e.appId, type: e.type }, g, e.paramsSearch)).then((_) => {
      if (e.tableData = _.data.records, e.page.total = _.data.total, e.page.currentPage = n.currentPage, e.page.pageSize = n.pageSize, e.tableLoading = false, e.type == "2") {
        const w = e.dictData.get("wx_req_type");
        for (let h = 0; h < w.length; h++) {
          w[h].disabled = false;
          for (let l = 0; l < e.tableData.length; l++) w[h].value == e.tableData[l].reqType && (w[h].disabled = true);
        }
      }
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function W(n) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return oe(n.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), y(e.page);
    });
  }
  function O() {
    e.handleType == "add" && z(Object.assign({ appId: e.appId, type: e.type }, e.objData)).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), y(e.page), e.dialog1Visible = false;
    }), e.handleType == "edit" && E(e.objData).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), y(e.page), e.dialog1Visible = false;
    });
  }
  function q(n, g, _, w) {
    E(n).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), _(), y(e.page);
    }).catch(() => {
      w();
    });
  }
  function $(n) {
    z(Object.assign({ appId: e.appId, type: e.type }, e.objData)).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), y(e.page), e.dialog1Visible = false;
    }).catch(() => {
      n();
    });
  }
  function k() {
    e.objData = { reqKey: "", repMate: "", reqType: "text", repType: "text" }, y(e.page);
  }
  return { ...Q(e), permissions: x, permissionList: U, filterNode: M, getWxAppListF: V, nodeClick: D, remoteDict: S, handleAdd: v, handleEdit: m, handleClick: T, searchChange: R, sortChange: A, getPageF: y, handleDel: W, handleSubmit: O, handleUpdate: q, handleSave: $, refreshChange: k, tree: o, crud: L };
} }, ie = { class: "execution wxautoreply", style: { "border-top": "solid 1px #eceef6" } }, ue = { style: { display: "flex", "justify-content": "center" } }, ce = { class: "flex-c" }, me = { key: 0, class: "add_but" }, ye = { class: "flex-c" }, ge = { class: "add_but" }, fe = { class: "flex-c" }, we = { key: 0, style: { width: "100%" } }, be = { class: "dialog-footer" };
function he(a, e, L, o, x, U) {
  const M = s("avue-tree"), V = s("el-card"), D = s("el-col"), S = s("Star"), v = s("el-icon"), m = s("el-button"), T = s("avue-crud"), R = s("el-tab-pane"), A = s("el-icon-chat-line-round"), y = s("Message"), W = s("el-tabs"), O = s("el-row"), q = s("el-option"), $ = s("el-select"), k = s("el-form-item"), n = s("el-input"), g = s("WxReplySelect"), _ = s("el-form"), w = s("el-dialog"), h = ee;
  return r(), C("div", ie, [p(h, null, { default: t(() => [p(O, { span: 24, gutter: 10 }, { default: t(() => [p(D, { xs: 24, sm: 24, md: 3 }, { default: t(() => [p(V, { shadow: "never" }, { header: t(() => [b("div", ue, [b("span", null, d(a.$t("wxmp.wxautoreply.officialAccountName")), 1)])]), default: t(() => [p(M, { option: a.treeOption, style: { "margin-top": "-1px" }, data: a.treeWxAppData, props: a.treeWxAppProps, "filter-node-method": o.filterNode, "node-key": "id", ref: "tree", "default-expand-all": "", onNodeClick: o.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 }), p(D, { xs: 24, sm: 24, md: 21, style: { "min-height": "76vh", padding: "10px", "border-left": "solid 1px #eceef6" } }, { default: t(() => [p(W, { modelValue: a.type, "onUpdate:modelValue": e[3] || (e[3] = (l) => a.type = l), onTabClick: o.handleClick }, { default: t(() => [p(R, { name: "1" }, { label: t(() => [b("span", ce, [p(v, null, { default: t(() => [p(S)]), _: 1 }), c(d(a.$t("wxmp.wxautoreply.followResponse")), 1)])]), default: t(() => [p(T, { ref: "crud", page: a.page, "onUpdate:page": e[0] || (e[0] = (l) => a.page = l), data: a.tableData, permission: o.permissionList, "table-loading": a.tableLoading, option: a.tableOption1, onRefreshChange: o.refreshChange }, { "menu-left": t(() => [a.tableData.length <= 0 ? (r(), C("div", me, [o.permissions["wxmp:wxautoreply:add"] ? (r(), u(m, { key: 0, type: "primary", icon: "plus", onClick: o.handleAdd }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.add")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true)])) : i("", true)]), menu: t((l) => [o.permissions["wxmp:wxautoreply:edit"] ? (r(), u(m, { key: 0, link: "", type: "primary", icon: "edit", onClick: (j) => o.handleEdit(l.row) }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.edit")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true), o.permissions["wxmp:wxautoreply:del"] ? (r(), u(m, { key: 1, link: "", type: "danger", icon: "delete", onClick: (j) => o.handleDel(l.row) }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.delete")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "onRefreshChange"])]), _: 1 }), p(R, { name: "2" }, { label: t(() => [b("span", ye, [p(v, null, { default: t(() => [p(A)]), _: 1 }), c(d(a.$t("wxmp.wxautoreply.messageResponse")), 1)])]), default: t(() => [p(T, { ref: "crud", page: a.page, "onUpdate:page": e[1] || (e[1] = (l) => a.page = l), data: a.tableData, permission: o.permissionList, "table-loading": a.tableLoading, option: a.tableOption2, onRefreshChange: o.refreshChange, onSortChange: o.sortChange }, { "menu-left": t(() => [b("div", ge, [o.permissions["wxmp:wxautoreply:add"] ? (r(), u(m, { key: 0, type: "primary", icon: "plus", onClick: o.handleAdd }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.add")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true)])]), menu: t((l) => [o.permissions["wxmp:wxautoreply:edit"] ? (r(), u(m, { key: 0, link: "", type: "primary", icon: "edit", onClick: (j) => o.handleEdit(l.row) }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.edit")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true), o.permissions["wxmp:wxautoreply:del"] ? (r(), u(m, { key: 1, link: "", type: "danger", icon: "delete", onClick: (j) => o.handleDel(l.row) }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.delete")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "onRefreshChange", "onSortChange"])]), _: 1 }), p(R, { name: "3" }, { label: t(() => [b("span", fe, [p(v, null, { default: t(() => [p(y)]), _: 1 }), c(d(a.$t("wxmp.wxautoreply.keywordResponse")), 1)])]), default: t(() => [p(T, { ref: "crud", page: a.page, "onUpdate:page": e[2] || (e[2] = (l) => a.page = l), data: a.tableData, permission: o.permissionList, "table-loading": a.tableLoading, option: a.tableOption3, onRefreshChange: o.refreshChange, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { "menu-left": t(() => [b("div", null, [o.permissions["wxmp:wxautoreply:add"] ? (r(), u(m, { key: 0, type: "primary", icon: "plus", onClick: o.handleAdd }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.add")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true)])]), menu: t((l) => [o.permissions["wxmp:wxautoreply:edit"] ? (r(), u(m, { key: 0, link: "", type: "primary", icon: "edit", onClick: (j) => o.handleEdit(l.row) }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.edit")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true), o.permissions["wxmp:wxautoreply:del"] ? (r(), u(m, { key: 1, link: "", type: "danger", icon: "delete", onClick: (j) => o.handleDel(l.row) }, { default: t(() => [c(d(a.$t("wxmp.wxautoreply.delete")), 1)]), _: 1 }, 8, ["onClick"])) : i("", true)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "onRefreshChange", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabClick"])]), _: 1 })]), _: 1 }), p(w, { modelValue: a.dialog1Visible, "onUpdate:modelValue": e[9] || (e[9] = (l) => a.dialog1Visible = l), title: a.handleType == "add" ? a.$t("wxmp.wxautoreply.addResponseMessage") : a.$t("wxmp.wxautoreply.editResponseMessage"), width: "50%" }, { footer: t(() => [b("span", be, [p(m, { onClick: e[8] || (e[8] = (l) => a.dialog1Visible = false) }, { default: t(() => [c(d(a.$t("commons.cancel")), 1)]), _: 1 }), p(m, { type: "primary", onClick: o.handleSubmit }, { default: t(() => [c(d(a.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])])]), default: t(() => [p(_, { "label-width": "100px" }, { default: t(() => [a.type == "2" ? (r(), u(k, { key: 0, label: a.$t("wxmp.wxautoreply.requestMessageType") }, { default: t(() => [p($, { modelValue: a.objData.reqType, "onUpdate:modelValue": e[4] || (e[4] = (l) => a.objData.reqType = l), placeholder: a.$t("wxmp.wxautoreply.select") }, { default: t(() => [(r(true), C(I, null, K(a.dictData.get("wx_req_type"), (l) => (r(), C(I, { key: l.value }, [l.value !== "event" ? (r(), u(q, { key: 0, label: l.label, value: l.value, disabled: l.disabled }, null, 8, ["label", "value", "disabled"])) : i("", true)], 64))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])) : i("", true), a.type == "3" ? (r(), u(k, { key: 1, label: a.$t("wxmp.wxautoreply.matchType") }, { default: t(() => [p($, { modelValue: a.objData.repMate, "onUpdate:modelValue": e[5] || (e[5] = (l) => a.objData.repMate = l), placeholder: a.$t("wxmp.wxautoreply.select"), style: { width: "100px" } }, { default: t(() => [(r(true), C(I, null, K(a.dictData.get("wx_rep_mate"), (l) => (r(), u(q, { key: l.value, label: l.label, value: l.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])) : i("", true), a.type == "3" ? (r(), u(k, { key: 2, label: a.$t("wxmp.wxautoreply.keywords") }, { default: t(() => [p(n, { modelValue: a.objData.reqKey, "onUpdate:modelValue": e[6] || (e[6] = (l) => a.objData.reqKey = l), placeholder: a.$t("wxmp.wxautoreply.enterContent"), clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])) : i("", true), p(k, { label: a.$t("wxmp.wxautoreply.responseMessage") }, { default: t(() => [a.hackResetWxReplySelect ? (r(), C("div", we, [p(g, { objData: a.objData, "onUpdate:objData": e[7] || (e[7] = (l) => a.objData = l), appId: a.appId, oneNews: a.type != "1" }, null, 8, ["objData", "appId", "oneNews"])])) : i("", true)]), _: 1 }, 8, ["label"])]), _: 1 })]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const Te = Y(de, [["render", he]]);
export {
  Te as default
};
