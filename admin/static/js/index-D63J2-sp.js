import { aO as L, n as J, A as Q, R as ee, bd as ae, p as z, t as te, q as F, K as se, S as oe, b1 as E, cm as le, _ as ne, r, c as g, o as p, b as s, h as o, e as c, z as m, B as u, g as y, f as w, F as K, v as H, a_ as re } from "./index-DAdfXJ2i.js";
import { _ as Z } from "./wxfreepublish-LUjjosG7.js";
import { b as pe } from "./wxapp-BACewdCT.js";
import { t as ie, g as de } from "./wxuser-CjU5rPob.js";
import { g as me } from "./wxusertags-B5lS-gOk.js";
import { W as ue, a as ge } from "./index-DnwcmTGn.js";
import { W as ce } from "./index-BHfBwpZw.js";
import "./index-C6Tt6Vi-.js";
import "./wxmaterial-DvTatkAN.js";
import "./videojs-player.esm-CCSu0y3h.js";
function we(t) {
  return L.request("get", "/weixin/wxmassmsg/page", { params: t });
}
function X(t) {
  return L.request("post", "/weixin/wxmassmsg", { data: t });
}
function be(t) {
  return L.request("delete", "/weixin/wxmassmsg/" + t);
}
function Y(t) {
  return L.request("put", "/weixin/wxmassmsg", { data: t });
}
const { $t: i } = J(), fe = { dialogDrag: true, index: false, indexLabel: i("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: false, excelBtn: true, editBtn: false, delBtn: false, viewBtn: true, printBtn: false, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelPosition: "left", defaultSort: { prop: "createTime", order: "descending" }, column: [{ label: i("commons.createTime"), prop: "createTime", width: 110, sortable: true }, { label: i("wxmp.wxmassmsg.isToAll"), width: 160, prop: "isToAll", type: "select", dicUrl: "/upms/dict/type/yes_no", search: true, sortable: true }, { label: i("wxmp.wxmassmsg.repType"), prop: "repType", width: 110, type: "select", dicUrl: "/upms/dict/type/wx_rep_type", search: true, sortable: true }, { label: i("wxmp.wxmassmsg.repContent"), prop: "repContent", overHidden: true, align: "left", width: 350, slot: true }, { label: i("wxmp.wxmassmsg.repMediaId"), labelWidth: 300, span: 24, prop: "repMediaId", hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.repName"), labelWidth: 300, span: 24, prop: "repName", hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.repDesc"), labelWidth: 300, span: 24, prop: "repDesc", hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.repUrl"), prop: "repUrl", labelWidth: 200, span: 24, hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.repHqUrl"), prop: "repHqUrl", labelWidth: 200, span: 24, hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.repThumbMediaId"), labelWidth: 200, span: 24, prop: "repThumbMediaId", hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.repThumbUrl"), labelWidth: 200, span: 24, prop: "repThumbUrl", hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.content"), labelWidth: 200, span: 24, prop: "content", display: false, hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.msgId"), labelWidth: 200, span: 24, prop: "msgId", hide: true, sortable: true }, { label: i("wxmp.wxmassmsg.msgStatus"), prop: "msgStatus", type: "select", searchLabelWidth: 100, width: 110, dicUrl: "/upms/dict/type/wx_mass_msg_status", search: true, sortable: true }, { label: i("wxmp.wxmassmsg.totalCount"), prop: "totalCount", width: 110, sortable: true }, { label: i("wxmp.wxmassmsg.filterCount"), prop: "filterCount", width: 130, sortable: true }, { label: i("wxmp.wxmassmsg.sentCount"), prop: "sentCount", width: 130, sortable: true }, { label: i("wxmp.wxmassmsg.errorCount"), width: 130, prop: "errorCount", sortable: true }] }, he = { components: { WxReplySelect: ge, WxNews: Z, WxVideoPlayer: ce, WxVoicePlayer: ue }, setup() {
  const { proxy: t } = Q(), e = ee({ form: {}, treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, tableOption2: ie, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "subscribe_time" }, tableLoading2: false, dialogVisibleUser: false, loadingSub: false, userTagsData: [], handleType: null, hackResetWxReplySelect: false, dialogVisible: false, qqMapKey: ae, objData: { tagId: "", sendType: "", repType: "text", isToAll: "1" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, paramsSearch2: {}, tableLoading: false, tableOption: fe, wxUserList: [], selectionData: [], type: "" }), D = z(null), l = z(null), I = z(null);
  te(() => {
    _();
  });
  const C = F(() => {
    var _a;
    return (_a = se()) == null ? void 0 : _a.permissions;
  }), W = F(() => ({ addBtn: !!C.value["wxmp:wxmassmsg:add"], delBtn: !!C.value["wxmp:wxmassmsg:del"], editBtn: !!C.value["wxmp:wxmassmsg:edit"], viewBtn: !!C.value["wxmp:wxmassmsg:get"] }));
  function V(a, n) {
    return a ? n.name.indexOf(a) !== -1 : true;
  }
  function _() {
    pe({ appType: "2" }).then((a) => {
      e.treeWxAppData = a.data, e.treeWxAppData && e.treeWxAppData.length > 0 && b({ id: e.treeWxAppData[0].id });
    });
  }
  function b(a) {
    e.appId != a.id && (t.$nextTick(() => {
      I.value.setCurrentKey(a.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = a.id, e.paramsSearch = {}, l.value.searchReset(), d(e.page), T());
  }
  function j(a) {
    e.wxUserList.splice(a, 1);
  }
  function $() {
    let a = e.wxUserList;
    a = [...a, ...e.selectionData], e.wxUserList = le(a), e.dialogVisibleUser = false;
  }
  function A(a) {
    e.selectionData = a;
  }
  function h(a, n) {
    e.tableLoading2 = true, de(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page2.descs, ascs: e.page2.ascs, appId: e.appId, subscribe: "1" }, n, e.paramsSearch)).then((f) => {
      e.tableData2 = f.data.records, e.page2.total = f.data.total, e.page2.currentPage = a.currentPage, e.page2.pageSize = a.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function P() {
    e.tableData2 = [], e.dialogVisibleUser = true, D.value && D.value.searchReset(), h(e.page2);
  }
  function T() {
    e.userTagsData = [], me({ appId: e.appId }).then((a) => {
      a.code == "0" ? e.userTagsData = a.data : t.$message.error(t.$t("wxmp.wxmassmsg.getUserLabelError") + a.msg);
    });
  }
  function R() {
    if (e.loadingSub = true, e.handleType == "add") {
      const a = [];
      for (let n = 0; n < e.wxUserList.length; n++) a.push(e.wxUserList[n].openId);
      X(Object.assign({ appId: e.appId, type: e.type, openIds: a }, e.objData)).then(() => {
        t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), d(e.page), e.dialogVisible = false, e.loadingSub = false;
      }).catch(() => {
        e.loadingSub = false;
      });
    }
    e.handleType == "edit" && Y(e.objData).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), d(e.page), e.dialogVisible = false, e.loadingSub = false;
    });
  }
  function S() {
    e.hackResetWxReplySelect = false, t.$nextTick(() => {
      e.hackResetWxReplySelect = true;
    }), e.handleType = "add", e.dialogVisible = true, e.objData = { tagId: "", sendType: "", repType: "text", isToAll: "1" };
  }
  function U(a, n) {
    a = E(a), e.paramsSearch = a, e.page.currentPage = 1, d(e.page, a), n();
  }
  function O(a, n) {
    a = E(a), e.paramsSearch2 = a, e.page2.currentPage = 1, h(e.page2, a), n();
  }
  function x(a) {
    const n = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = n) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = n) : (e.page.ascs = "", e.page.descs = ""), d(e.page);
  }
  function k(a) {
    const n = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = n) : a.order == "descending" ? (e.page2.ascs = "", e.page2.descs = n) : (e.page2.ascs = "", e.page2.descs = ""), h(e.page2);
  }
  function d(a, n) {
    e.appId && (e.tableLoading = true, we(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs, appId: e.appId }, n, e.paramsSearch)).then((f) => {
      e.tableData = f.data.records, e.page.total = f.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function B(a) {
    t.$confirm(t.$t("wxmp.wxmassmsg.confirmDeleteMessage"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return be(a.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), d(e.page);
    });
  }
  function N(a, n, f, G) {
    Y(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), f(), d(e.page);
    }).catch(() => {
      G();
    });
  }
  function q(a, n, f) {
    X(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), n(), d(e.page);
    }).catch(() => {
      f();
    });
  }
  function v() {
    d(e.page);
  }
  function M() {
    h(e.page2);
  }
  return { ...oe(e), permissions: C, permissionList: W, filterNode: V, getWxAppListF: _, nodeClick: b, removeWxUser: j, subUser: $, selectionChange2: A, getPage2F: h, showWxUserList: P, listUserTagsF: T, handleSubmit: R, handleAdd: S, searchChange: U, searchChange2: O, sortChange: x, sortChange2: k, getPageF: d, handleDel: B, handleUpdate: N, handleSave: q, refreshChange: v, refreshChange2: M, tree: I, crud: l, crud2: D };
} }, ye = { class: "execution", style: { "border-top": "solid 1px #eceef6" } }, xe = { style: { display: "flex", "justify-content": "center" } }, Ce = { class: "nick-name" }, _e = { key: 0 }, Se = { key: 1 }, ke = { key: 2 }, De = ["href"], Te = { key: 3 }, Ue = { key: 4 }, ve = { key: 5 }, Le = ["src"], Ie = { key: 7 }, We = ["href"], Ve = { class: "title" }, je = { key: 0, class: "w-full" }, $e = { class: "dialog-footer" }, Ae = { class: "dialog-footer" };
function Pe(t, e, D, l, I, C) {
  const W = r("avue-tree"), V = r("el-card"), _ = r("el-col"), b = r("el-button"), j = Z, $ = r("el-image"), A = r("WxVoicePlayer"), h = r("WxVideoPlayer"), P = r("el-icon-map-location"), T = r("el-icon"), R = r("el-link"), S = r("el-tag"), U = r("avue-crud"), O = r("el-row"), x = r("el-option"), k = r("el-select"), d = r("el-form-item"), B = r("el-avatar"), N = r("WxReplySelect"), q = r("el-form"), v = r("el-dialog"), M = re;
  return p(), g("div", ye, [s(M, null, { default: o(() => [s(O, { span: 24, gutter: 10 }, { default: o(() => [s(_, { xs: 24, sm: 24, md: 3 }, { default: o(() => [s(V, { shadow: "never" }, { header: o(() => [c("div", xe, [c("span", null, m(t.$t("wxmp.wxmassmsg.officialAccountName")), 1)])]), default: o(() => [s(W, { option: t.treeOption, style: { "margin-top": "-1px" }, data: t.treeWxAppData, props: t.treeWxAppProps, "filter-node-method": l.filterNode, "node-key": "id", ref: "tree", "default-expand-all": "", onNodeClick: l.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 }), s(_, { xs: 24, sm: 24, md: 21 }, { default: o(() => [s(U, { ref: "crud", modelValue: t.form, "onUpdate:modelValue": e[0] || (e[0] = (a) => t.form = a), page: t.page, "onUpdate:page": e[1] || (e[1] = (a) => t.page = a), style: { "padding-left": "10px", "border-left": "solid 1px #eceef6" }, data: t.tableData, permission: l.permissionList, "table-loading": t.tableLoading, option: t.tableOption, onOnLoad: l.getPageF, onRefreshChange: l.refreshChange, onRowUpdate: l.handleUpdate, onRowSave: l.handleSave, onRowDel: l.handleDel, onSortChange: l.sortChange, onSearchChange: l.searchChange }, { "menu-left": o(() => [l.permissions["wxmp:wxmassmsg:add"] ? (p(), y(b, { key: 0, type: "primary", icon: "plus", onClick: l.handleAdd }, { default: o(() => [w(m(t.$t("wxmp.wxmassmsg.addMassMessage")), 1)]), _: 1 }, 8, ["onClick"])) : u("", true)]), menu: o((a) => [l.permissions["wxmp:wxmassmsg:del"] && a.row.msgStatus == "SEND_SUCCESS" && (a.row.repType == "news" || a.row.repType == "video") ? (p(), y(b, { key: 0, type: "primary", link: "", icon: "delete", onClick: (n) => l.handleDel(a.row) }, { default: o(() => [w(m(t.$t("wxmp.wxmassmsg.delete")), 1)]), _: 1 }, 8, ["onClick"])) : u("", true)]), repContent: o((a) => [c("div", Ce, m(a.row.nickName), 1), a.row.repType == "text" ? (p(), g("div", _e, m(a.row.repContent), 1)) : u("", true), a.row.repType == "news" ? (p(), g("div", Se, [s(j, { objData: a.row.content.articles }, null, 8, ["objData"])])) : u("", true), a.row.repType == "image" ? (p(), g("div", ke, [c("a", { target: "_blank", href: a.row.repUrl }, [s($, { src: a.row.repUrl, class: "w-[58px]" }, null, 8, ["src"])], 8, De)])) : u("", true), a.row.repType == "voice" ? (p(), g("div", Te, [s(A, { appId: t.appId, objData: Object.assign({ type: "2" }, a.row) }, null, 8, ["appId", "objData"])])) : u("", true), a.row.repType == "video" ? (p(), g("div", Ue, [s(h, { appId: t.appId, objData: Object.assign({ type: "2" }, a.row), style: { "margin-top": "40px" } }, null, 8, ["appId", "objData"])])) : u("", true), a.row.repType == "shortvideo" ? (p(), g("div", ve, [s(h, { appId: t.appId, objData: Object.assign({ type: "2" }, a.row), style: { "margin-top": "40px" } }, null, 8, ["appId", "objData"])])) : u("", true), a.row.repType == "location" ? (p(), y(R, { key: 6, type: "primary", target: "_blank", href: "https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx=" + a.row.repLocationY + "&pointy=" + a.row.repLocationX + "&name=" + a.row.repContent + "&ref=joolun" }, { default: o(() => [c("img", { src: "https://apis.map.qq.com/ws/staticmap/v2/?zoom=10&markers=color:blue|label:A|" + a.row.repLocationX + "," + a.row.repLocationY + "&key=" + t.qqMapKey + "&size=200*150" }, null, 8, Le), e[11] || (e[11] = c("p", null, null, -1)), s(T, null, { default: o(() => [s(P)]), _: 1 }), w(m(a.row.repContent), 1)]), _: 2 }, 1032, ["href"])) : u("", true), a.row.repType == "link" ? (p(), g("div", Ie, [s(S, { size: "small" }, { default: o(() => [w(m(t.$t("wxmp.wxmassmsg.link")), 1)]), _: 1 }), e[12] || (e[12] = w("\uFF1A", -1)), c("a", { href: a.row.repUrl, target: "_blank" }, m(a.row.repName), 9, We)])) : u("", true)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 }), s(v, { modelValue: t.dialogVisible, "onUpdate:modelValue": e[7] || (e[7] = (a) => t.dialogVisible = a), title: t.handleType == "add" ? t.$t("wxmp.wxmassmsg.addMassMessageTitle") : t.$t("wxmp.wxmassmsg.editMassMessageTitle"), width: "50%" }, { footer: o(() => [c("span", $e, [s(b, { onClick: e[6] || (e[6] = (a) => t.dialogVisible = false) }, { default: o(() => [w(m(t.$t("commons.cancel")), 1)]), _: 1 }), s(b, { type: "primary", loading: t.loadingSub, onClick: l.handleSubmit }, { default: o(() => [w(m(t.$t("wxmp.wxmassmsg.submitAndSend")), 1)]), _: 1 }, 8, ["loading", "onClick"])])]), default: o(() => [s(q, { "label-width": "100px" }, { default: o(() => [s(d, { label: t.$t("wxmp.wxmassmsg.sendToAllUsers") }, { default: o(() => [s(k, { modelValue: t.objData.isToAll, "onUpdate:modelValue": e[2] || (e[2] = (a) => t.objData.isToAll = a), placeholder: t.$t("wxmp.wxmassmsg.select") }, { default: o(() => [s(x, { key: "1", label: t.$t("wxmp.wxmassmsg.yes"), value: "1" }, null, 8, ["label"]), s(x, { key: "0", label: t.$t("wxmp.wxmassmsg.no"), value: "0" }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), t.objData.isToAll == "0" ? (p(), y(d, { key: 0, label: t.$t("wxmp.wxmassmsg.sendType") }, { default: o(() => [s(k, { modelValue: t.objData.sendType, "onUpdate:modelValue": e[3] || (e[3] = (a) => t.objData.sendType = a), placeholder: t.$t("wxmp.wxmassmsg.select") }, { default: o(() => [s(x, { key: "1", label: t.$t("wxmp.wxmassmsg.specifyLabel"), value: "1" }, null, 8, ["label"]), s(x, { key: "2", label: t.$t("wxmp.wxmassmsg.specifyUser"), value: "2" }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder"]), t.objData.sendType == "1" ? (p(), y(k, { key: 0, modelValue: t.objData.tagId, "onUpdate:modelValue": e[4] || (e[4] = (a) => t.objData.tagId = a), placeholder: t.$t("wxmp.wxmassmsg.selectLabel") }, { default: o(() => [(p(true), g(K, null, H(t.userTagsData, (a) => (p(), y(x, { key: a.id, label: a.name, value: a.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])) : u("", true)]), _: 1 }, 8, ["label"])) : u("", true), t.objData.sendType == "2" && t.objData.isToAll == "0" ? (p(), y(d, { key: 1, label: t.$t("wxmp.wxmassmsg.user") }, { default: o(() => [s(b, { type: "primary", icon: "user", onClick: l.showWxUserList }, { default: o(() => [w(m(t.$t("wxmp.wxmassmsg.selectUsers")), 1)]), _: 1 }, 8, ["onClick"]), e[13] || (e[13] = c("p", null, null, -1)), (p(true), g(K, null, H(t.wxUserList, (a, n) => (p(), y(S, { key: a.id, effect: "plain", style: { height: "unset", "padding-top": "5px", margin: "5px" }, closable: "", onClose: (f) => l.removeWxUser(n) }, { default: o(() => [s(B, { title: "openId:" + a.openId, src: a.headimgUrl }, null, 8, ["title", "src"]), c("div", Ve, m(a.nickName), 1)]), _: 2 }, 1032, ["onClose"]))), 128))]), _: 1 }, 8, ["label"])) : u("", true), s(d, { label: t.$t("wxmp.wxmassmsg.responseMessage") }, { default: o(() => [t.hackResetWxReplySelect ? (p(), g("div", je, [s(N, { objData: t.objData, "onUpdate:objData": e[5] || (e[5] = (a) => t.objData = a), appId: t.appId, newsType: "2" }, null, 8, ["objData", "appId"])])) : u("", true)]), _: 1 }, 8, ["label"])]), _: 1 })]), _: 1 }, 8, ["modelValue", "title"]), s(v, { modelValue: t.dialogVisibleUser, "onUpdate:modelValue": e[10] || (e[10] = (a) => t.dialogVisibleUser = a), title: t.$t("wxmp.wxmassmsg.selectUser"), width: "80%" }, { footer: o(() => [c("span", Ae, [s(b, { onClick: e[9] || (e[9] = (a) => t.dialogVisibleUser = false) }, { default: o(() => [w(m(t.$t("commons.cancel")), 1)]), _: 1 }), s(b, { type: "primary", onClick: l.subUser }, { default: o(() => [w(m(t.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])])]), default: o(() => [s(U, { ref: "crud2", page: t.page2, "onUpdate:page": e[8] || (e[8] = (a) => t.page2 = a), data: t.tableData2, "table-loading": t.tableLoading2, option: t.tableOption2, onOnLoad: l.getPage2F, onRefreshChange: l.refreshChange2, onSortChange: l.sortChange2, onSearchChange: l.searchChange2, onSelectionChange: l.selectionChange2 }, { sex: o((a) => [s(S, { size: "small", effect: "light", type: a.row.sex == "1" ? "primary" : a.row.sex == "2" ? "danger" : "warning" }, { default: o(() => [w(m(a.row.$sex), 1)]), _: 2 }, 1032, ["type"])]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange", "onSelectionChange"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const Xe = ne(he, [["render", Pe]]);
export {
  Xe as default
};
