import { A as F, R as E, p as W, t as j, K as q, q as K, b1 as N, S as H, _ as Z, r as p, c as M, o as d, b as i, h as s, g as c, B as w, e as R, z as m, F as A, v as O, f as u, a_ as G } from "./index-DAdfXJ2i.js";
import { _ as z } from "./index-BFdurQqx.js";
import { _ as J } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { a as Q, g as X, b as Y, p as ee, d as ae, u as te, s as ne, c as oe } from "./wxuser-CjU5rPob.js";
import { g as se } from "./wxusertags-B5lS-gOk.js";
import { b as re } from "./wxapp-BACewdCT.js";
import "./wxfreepublish-LUjjosG7.js";
import "./index-DnwcmTGn.js";
import "./index-C6Tt6Vi-.js";
import "./wxmaterial-DvTatkAN.js";
import "./index-BHfBwpZw.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
const le = { components: { WxMsg: z }, props: { appIdProp: { type: String }, wxUserIdProp: { type: String } }, setup(o) {
  var _a;
  const { proxy: t } = F(), e = E({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "subscribe_time" }, paramsSearch: {}, tableLoading: false, tableOption: Q, selectionData: [], dialogTagging: false, checkedTags: [], userTagsData: [], taggingType: "", dialogMsgVisible: false, wxUserId: "" }), r = W(null), _ = W(null);
  j(() => {
    o.appIdProp || x();
  });
  const h = (_a = q()) == null ? void 0 : _a.permissions, C = K(() => ({ addBtn: !!h["wxmp:wxuser:add"], delBtn: !!h["wxmp:wxuser:del"], editBtn: !!h["wxmp:wxuser:edit"], viewBtn: !!h["wxmp:wxuser:get"] }));
  function $(n, a) {
    return n ? a.name.indexOf(n) !== -1 : true;
  }
  function x() {
    re({ appType: "2" }).then((n) => {
      e.treeWxAppData = n.data, e.treeWxAppData && e.treeWxAppData.length > 0 && b({ id: e.treeWxAppData[0].id });
    });
  }
  function b(n) {
    e.appId != n.id && (t.$nextTick(() => {
      _.value.setCurrentKey(n.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = n.id, e.paramsSearch = {}, r.value.searchReset(), r.value.DIC.tagidList = [], e.userTagsData = [], T());
  }
  function T() {
    e.tableLoading = true, se({ appId: e.appId }).then((n) => {
      if (n.code == "0") {
        const a = n.data;
        e.userTagsData = a, r.value.DIC.tagidList = a;
      } else t.$message.error(t.$t("wxmp.wxuser.getUserLabelError") + n.msg);
      e.tableLoading = false, g(e.page);
    }).catch(() => {
      e.tableLoading = false, g(e.page);
    });
  }
  function I(n) {
    e.wxUserId = n.id, e.dialogMsgVisible = true;
  }
  function L() {
    const n = [];
    for (let a = 0; a < e.selectionData.length; a++) n.push(e.selectionData[a].openId);
    if (e.checkedTags.length <= 0) {
      t.$message.error(t.$t("wxmp.wxuser.selectLabel"));
      return;
    }
    if (n.length <= 0) {
      t.$message.error(t.$t("wxmp.wxuser.selectUser"));
      return;
    }
    e.tableLoading = true, oe({ taggingType: e.taggingType, appId: e.appId, tagIds: e.checkedTags, openIds: n }).then((a) => {
      e.tableLoading = false, e.checkedTags = [], r.value.selectClear(), a.code == "0" ? g(e.page) : t.$message.error(t.$t("wxmp.wxuser.taggingError") + a.msg);
    }).catch(() => {
      e.tableLoading = false;
    }), e.dialogTagging = false;
  }
  function f(n) {
    e.selectionData = n;
  }
  function U(n, a) {
    n = N(n), e.paramsSearch = n, e.page.currentPage = 1, g(e.page, n), a();
  }
  function D() {
    t.$confirm(t.$t("wxmp.wxuser.syncUserPrompt"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(() => {
      e.tableLoading = true, ne({ appId: e.appId }).then((n) => {
        e.tableLoading = false, n.code == "0" ? g(e.page) : t.$message.error(t.$t("wxmp.wxuser.syncUserError") + n.msg);
      }).catch(() => {
        e.tableLoading = false;
      }), setTimeout(() => {
        e.tableLoading && (e.tableLoading = false, t.$alert(t.$t("wxmp.wxuser.syncUserSuccess"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm") }));
      }, 3e3);
    });
  }
  function y(n) {
    const a = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (e.page.descs = "", e.page.ascs = a) : n.order == "descending" ? (e.page.ascs = "", e.page.descs = a) : (e.page.ascs = "", e.page.descs = ""), g(e.page);
  }
  function g(n, a) {
    o.appIdProp && (e.appId = o.appIdProp), e.appId && (e.tableLoading = true, X(N(Object.assign({ current: n.currentPage, size: n.pageSize, descs: e.page.descs, ascs: e.page.ascs, appType: "2", appId: e.appId, id: o.wxUserIdProp }, a, e.paramsSearch))).then((l) => {
      e.tableData = l.data.records, e.page.total = l.data.total, e.page.currentPage = n.currentPage, e.page.pageSize = n.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function S(n, a) {
    t.$prompt(t.$t("wxmp.wxuser.enterNote"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), inputPattern: /\S/, inputErrorMessage: t.$t("wxmp.wxuser.inputNotEmpty") }).then(({ value: l }) => {
      e.tableLoading = true, n.remark = l, te(n).then((k) => {
        e.tableLoading = false, k.code == "0" ? (e.tableData.splice(a, 1, Object.assign({}, n)), t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), g(e.page)) : t.$message.error(k.msg);
      }).catch(() => {
        e.tableLoading = false;
      });
    });
  }
  function v(n) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return ae(n.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), g(e.page);
    });
  }
  function P(n, a, l, k) {
    ee(n).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), l(), g(e.page);
    }).catch(() => {
      k();
    });
  }
  function V(n, a, l) {
    Y(n).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), a(), g(e.page);
    }).catch(() => {
      l();
    });
  }
  function B() {
    g(e.page);
  }
  return { ...H(e), permissions: h, permissionList: C, filterNode: $, getWxAppListF: x, nodeClick: b, wxMsgDo: I, toTagging: L, selectionChange: f, searchChange: U, synchroWxUserF: D, sortChange: y, getPageF: g, updateRemarkF: S, handleDel: v, handleUpdate: P, handleSave: V, refreshChange: B, tree: _, crud: r };
} }, ie = { class: "execution", style: { "border-top": "solid 1px #eceef6" } }, pe = { style: { display: "flex", "justify-content": "center" } }, de = { class: "dialog-footer" };
function ge(o, t, e, r, _, h) {
  const C = p("avue-tree"), $ = p("el-card"), x = p("el-col"), b = p("el-tag"), T = p("el-icon-map-location"), I = p("el-icon"), L = p("el-link"), f = p("el-button"), U = p("el-checkbox"), D = p("el-checkbox-group"), y = p("el-dialog"), g = J, S = p("el-option"), v = p("el-select"), P = p("avue-crud"), V = p("el-row"), B = z, n = G;
  return d(), M("div", ie, [i(n, null, { default: s(() => [i(V, { span: 24, gutter: 10 }, { default: s(() => [e.appIdProp ? w("", true) : (d(), c(x, { key: 0, xs: 24, sm: 24, md: 3 }, { default: s(() => [i($, null, { header: s(() => [R("div", pe, [R("span", null, m(o.$t("wxmp.wxuser.appName")), 1)])]), default: s(() => [i(C, { ref: "tree", option: o.treeOption, style: { "margin-top": "-1px" }, data: o.treeWxAppData, props: o.treeWxAppProps, "filter-node-method": r.filterNode, "node-key": "id", "default-expand-all": "", onNodeClick: r.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 })), i(x, { xs: 24, sm: 24, md: e.appIdProp ? 24 : 21 }, { default: s(() => [i(P, { ref: "crud", page: o.page, "onUpdate:page": t[5] || (t[5] = (a) => o.page = a), style: { "padding-left": "10px", "border-left": "solid 1px #eceef6" }, data: o.tableData, "table-loading": o.tableLoading, option: o.tableOption, permission: r.permissionList, onOnLoad: r.getPageF, onRefreshChange: r.refreshChange, onRowUpdate: r.handleUpdate, onRowSave: r.handleSave, onRowDel: r.handleDel, onSortChange: r.sortChange, onSearchChange: r.searchChange, onSelectionChange: r.selectionChange }, { subscribe: s((a) => [i(b, { size: "small", effect: "dark", type: a.row.subscribe == "1" ? "success" : a.row.subscribe == "0" ? "danger" : "warning" }, { default: s(() => [u(m(a.row.$subscribe), 1)]), _: 2 }, 1032, ["type"])]), sex: s((a) => [a.row.sex ? (d(), c(b, { key: 0, size: "small", effect: "light", type: a.row.sex == "1" ? "primary" : a.row.sex == "2" ? "danger" : "warning" }, { default: s(() => [u(m(a.row.$sex), 1)]), _: 2 }, 1032, ["type"])) : w("", true)]), latitude: s((a) => [a.row.longitude ? (d(), c(L, { key: 0, type: "primary", target: "_blank", href: "https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx=" + a.row.longitude + "&pointy=" + a.row.latitude + "&name=" + a.row.nickName + "&ref=joolun" }, { default: s(() => [i(I, null, { default: s(() => [i(T)]), _: 1 })]), _: 1 }, 8, ["href"])) : w("", true)]), "menu-left": s(() => [r.permissions["wxmp:wxuser:tagging"] ? (d(), c(f, { key: 0, type: "success", size: "small", onClick: t[0] || (t[0] = (a) => {
    o.dialogTagging = true, o.taggingType = "tagging";
  }) }, { default: s(() => [u(m(o.$t("wxmp.wxuser.tagging")), 1)]), _: 1 })) : w("", true), r.permissions["wxmp:wxuser:tagging"] ? (d(), c(f, { key: 1, type: "warning", size: "small", onClick: t[1] || (t[1] = (a) => {
    o.dialogTagging = true, o.taggingType = "unTagging";
  }) }, { default: s(() => [u(m(o.$t("wxmp.wxuser.removeTag")), 1)]), _: 1 })) : w("", true), r.permissions["wxmp:wxuser:synchro"] ? (d(), c(f, { key: 2, type: "danger", size: "small", onClick: r.synchroWxUserF }, { default: s(() => [u(m(o.$t("wxmp.wxuser.syncUser")), 1)]), _: 1 }, 8, ["onClick"])) : w("", true), i(y, { modelValue: o.dialogTagging, "onUpdate:modelValue": t[4] || (t[4] = (a) => o.dialogTagging = a), title: o.taggingType == "tagging" ? o.$t("wxmp.wxuser.selectTag") : o.$t("wxmp.wxuser.selectRemoveTag"), width: "30%" }, { footer: s(() => [R("span", de, [i(f, { onClick: t[3] || (t[3] = (a) => o.dialogTagging = false) }, { default: s(() => [u(m(o.$t("commons.cancel")), 1)]), _: 1 }), i(f, { type: "primary", onClick: r.toTagging }, { default: s(() => [u(m(o.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])])]), default: s(() => [i(D, { modelValue: o.checkedTags, "onUpdate:modelValue": t[2] || (t[2] = (a) => o.checkedTags = a) }, { default: s(() => [(d(true), M(A, null, O(o.userTagsData, (a) => (d(), c(U, { key: a.id, label: a.id }, { default: s(() => [u(m(a.name), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["modelValue", "title"])]), menu: s((a) => [r.permissions["wxmp:wxuser:edit:remark"] ? (d(), c(f, { key: 0, type: "primary", icon: "Edit", link: "", onClick: (l) => r.updateRemarkF(a.row, a.index) }, { default: s(() => [u(m(o.$t("wxmp.wxuser.modifyNote")), 1)]), _: 1 }, 8, ["onClick"])) : w("", true), r.permissions["wxmp:wxmsg:index"] ? (d(), c(f, { key: 1, type: "primary", icon: "ChatLineSquare", link: "", onClick: (l) => r.wxMsgDo(a.row) }, { default: s(() => [u(m(o.$t("wxmp.wxuser.message")), 1)]), _: 1 }, 8, ["onClick"])) : w("", true), r.permissions["mall:userinfo:get"] && a.row.mallUserId ? (d(), c(g, { key: 2, "user-id": a.row.mallUserId, "set-slot": true }, { default: s(() => [i(f, { type: "primary", link: "", icon: "User" }, { default: s(() => [u(m(o.$t("commons.userMallInfo")), 1)]), _: 1 })]), _: 1 }, 8, ["user-id"])) : w("", true)]), tagidListSearch: s((a) => [i(v, { modelValue: a.row.tagidList, "onUpdate:modelValue": (l) => a.row.tagidList = l, placeholder: o.$t("wxmp.wxuser.select") }, { default: s(() => [(d(true), M(A, null, O(o.userTagsData, (l) => (d(), c(S, { key: l.id, label: l.name, value: l.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 1 }, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange", "onSelectionChange"])]), _: 1 }, 8, ["md"])]), _: 1 }), i(y, { modelValue: o.dialogMsgVisible, "onUpdate:modelValue": t[6] || (t[6] = (a) => o.dialogMsgVisible = a), title: o.$t("wxmp.wxuser.userMessage"), width: "700px", top: "10px" }, { default: s(() => [o.dialogMsgVisible ? (d(), c(B, { key: 0, appId: o.appId, wxUserId: o.wxUserId }, null, 8, ["appId", "wxUserId"])) : w("", true)]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const Ue = Z(le, [["render", ge], ["__scopeId", "data-v-64714c96"]]);
export {
  Ue as default
};
