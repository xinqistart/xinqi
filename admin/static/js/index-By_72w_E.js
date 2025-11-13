import { n as j, A as O, R as q, bd as F, p as L, t as E, q as B, K, S as H, b1 as X, _ as Y, r as s, c, o as p, b as n, h as r, e as f, z as l, g as $, B as d, f as m, a_ as G } from "./index-DAdfXJ2i.js";
import { _ as N, g as Z, a as J, p as Q, d as ee } from "./index-BFdurQqx.js";
import { b as te } from "./wxapp-BACewdCT.js";
import { W as ae } from "./index-BHfBwpZw.js";
import { W as oe } from "./index-DnwcmTGn.js";
import ne from "./index-DSmhSPn5.js";
import "./wxfreepublish-LUjjosG7.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./wxmaterial-DvTatkAN.js";
import "./index-C6Tt6Vi-.js";
import "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
import "./wxuser-CjU5rPob.js";
import "./wxusertags-B5lS-gOk.js";
const { $t: y } = j(), re = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", editBtn: false, delBtn: false, addBtn: false, viewBtn: false, searchBtn: true, excelBtn: true, printBtn: false, searchShow: false, searchMenuSpan: 6, labelWidth: 110, menuWidth: 80, searchGutter: 50, searchLabelPosition: "left", defaultSort: { prop: "createTime", order: "descending" }, column: [{ label: y("wxmp.wxmsg.repType"), prop: "repType", type: "select", dicUrl: "/upms/dict/type/wx_req_type", search: true, sortable: true, width: 110 }, { label: y("wxmp.wxmsg.nickName"), prop: "nickName", overHidden: false, search: true, slot: true, searchLabelWidth: 100, width: 210 }, { label: y("wxmp.wxmsg.repContent"), prop: "repContent", overHidden: true, align: "left", slot: true }, { label: y("wxmp.wxmsg.createTime"), type: "date", prop: "createTime", sortable: true, width: 110 }, { label: y("wxmp.wxmsg.readFlag"), prop: "readFlag", type: "select", dicUrl: "/upms/dict/type/yes_no", search: true, sortable: true, slot: true, searchLabelWidth: 100, width: 110 }] }, se = { components: { WxMsg: N, WxVideoPlayer: ae, WxVoicePlayer: oe, WxMpUser: ne }, setup() {
  const { proxy: a } = O(), e = q({ qqMapKey: F, treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, dialogMsgVisible: false, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: re, wxUserId: "", dialogWxUserVisible: false }), C = L(null), i = L(null);
  E(() => {
    b();
  });
  const h = B(() => {
    var _a;
    return (_a = K()) == null ? void 0 : _a.permissions;
  }), T = B(() => ({ addBtn: !!h.value["wxmp:wxmsg:add"], delBtn: !!h.value["wxmp:wxmsg:del"], editBtn: !!h.value["wxmp:wxmsg:edit"], viewBtn: !!h.value["wxmp:wxmsg:get"] }));
  function U(o, u) {
    return o ? u.name.indexOf(o) !== -1 : true;
  }
  function b() {
    te({ appType: "2" }).then((o) => {
      e.treeWxAppData = o.data, e.treeWxAppData && e.treeWxAppData.length > 0 && x({ id: e.treeWxAppData[0].id });
    });
  }
  function x(o) {
    e.appId != o.id && (a.$nextTick(() => {
      i.value.setCurrentKey(o.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = o.id, e.paramsSearch = {}, C.value.searchReset(), w(e.page));
  }
  function g(o) {
    e.wxUserId = o.wxUserId, e.dialogMsgVisible = true, o.readFlag = "1";
  }
  function W(o, u) {
    o = X(o), e.paramsSearch = o, e.page.currentPage = 1, w(e.page, o), u();
  }
  function v(o) {
    const u = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = u) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = u) : (e.page.ascs = "", e.page.descs = ""), w(e.page);
  }
  function w(o, u) {
    e.appId && (e.tableLoading = true, Z(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs, appId: e.appId, type: "1" }, u, e.paramsSearch)).then((_) => {
      e.tableData = _.data.records, e.page.total = _.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function S(o) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return ee(o.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), w(e.page);
    });
  }
  function k(o, u, _, P) {
    Q(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), _(), w(e.page);
    }).catch(() => {
      P();
    });
  }
  function D(o, u, _) {
    J(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), u(), w(e.page);
    }).catch(() => {
      _();
    });
  }
  function I() {
    w(e.page);
  }
  function V(o) {
    e.wxUserId = o.wxUserId, e.dialogWxUserVisible = true;
  }
  return { ...H(e), permissions: h, permissionList: T, filterNode: U, getWxAppListF: b, nodeClick: x, wxMsgDo: g, searchChange: W, sortChange: v, getPageF: w, handleDel: S, handleUpdate: k, handleSave: D, refreshChange: I, tree: i, crud: C, onShowMpUserInfo: V };
} }, le = { style: { "border-top": "solid 1px #eceef6" } }, ie = { style: { display: "flex", "justify-content": "center" } }, pe = ["onClick"], de = { key: 0 }, me = { key: 1 }, ce = { key: 2 }, ue = { key: 3 }, ge = { key: 4 }, we = { key: 5 }, fe = { key: 6 }, _e = ["href"], he = ["src"], xe = { key: 7 }, ye = { key: 8 }, be = { key: 9 }, ve = ["src"], ke = { key: 11 }, Ie = ["href"], Ce = { key: 0 }, Ue = { key: 0 };
function We(a, e, C, i, h, T) {
  const U = s("avue-tree"), b = s("el-card"), x = s("el-col"), g = s("el-tag"), W = s("User"), v = s("el-icon"), w = s("el-avatar"), S = s("el-badge"), k = s("el-button"), D = s("WxVoicePlayer"), I = s("WxVideoPlayer"), V = s("el-icon-map-location"), o = s("el-link"), u = s("avue-crud"), _ = s("el-row"), P = N, M = s("el-dialog"), z = G, A = s("WxMpUser");
  return p(), c("div", le, [n(z, null, { default: r(() => [n(_, { span: 24, gutter: 10 }, { default: r(() => [n(x, { xs: 24, sm: 24, md: 3 }, { default: r(() => [n(b, { shadow: "never" }, { header: r(() => [f("div", ie, [f("span", null, l(a.$t("wxmp.wxmsg.appName")), 1)])]), default: r(() => [n(U, { option: a.treeOption, style: { "margin-top": "-1px" }, data: a.treeWxAppData, props: a.treeWxAppProps, "filter-node-method": i.filterNode, "node-key": "id", ref: "tree", "default-expand-all": "", onNodeClick: i.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 }), n(x, { xs: 24, sm: 24, md: 21 }, { default: r(() => [n(u, { ref: "crud", style: { "padding-left": "10px", "border-left": "solid 1px #eceef6" }, page: a.page, "onUpdate:page": e[0] || (e[0] = (t) => a.page = t), data: a.tableData, permission: i.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: i.getPageF, onRefreshChange: i.refreshChange, onRowUpdate: i.handleUpdate, onRowSave: i.handleSave, onRowDel: i.handleDel, onSortChange: i.sortChange, onSearchChange: i.searchChange }, { appName: r((t) => [n(g, { type: "success", size: "small" }, { default: r(() => [m(l(t.row.appName), 1)]), _: 2 }, 1024)]), nickName: r((t) => [f("div", { class: "flex-c min-h-[60px]", onClick: (R) => i.onShowMpUserInfo(t.row) }, [n(S, { value: t.row.countMsg, class: "count-msg" }, { default: r(() => [n(w, { src: t.row.headimgUrl }, { default: r(() => [n(v, null, { default: r(() => [n(W)]), _: 1 })]), _: 1 }, 8, ["src"])]), _: 2 }, 1032, ["value"]), n(k, { class: "ml-[5px]", link: "", type: "primary" }, { default: r(() => [m(l(t.row.nickName || t.row.wxUserId), 1)]), _: 2 }, 1024)], 8, pe)]), readFlag: r((t) => [n(g, { type: t.row.readFlag == "1" ? "success" : "danger", size: "small" }, { default: r(() => [m(l(t.row.$readFlag), 1)]), _: 2 }, 1032, ["type"])]), repContent: r((t) => [t.row.repType == "event" && t.row.repEvent == "subscribe" ? (p(), c("div", de, [n(g, { type: "success", size: "small" }, { default: r(() => [m(l(a.$t("wxmp.wxmsg.follow")), 1)]), _: 1 })])) : d("", true), t.row.repType == "event" && t.row.repEvent == "unsubscribe" ? (p(), c("div", me, [n(g, { type: "danger", size: "small" }, { default: r(() => [m(l(a.$t("wxmp.wxmsg.unfollow")), 1)]), _: 1 })])) : d("", true), t.row.repType == "event" && t.row.repEvent == "CLICK" ? (p(), c("div", ce, [n(g, { size: "small" }, { default: r(() => [m(l(a.$t("wxmp.wxmsg.clickMenu")), 1)]), _: 1 }), m("\uFF1A\u3010" + l(t.row.repName) + "\u3011 ", 1)])) : d("", true), t.row.repType == "event" && t.row.repEvent == "VIEW" ? (p(), c("div", ue, [n(g, { size: "small" }, { default: r(() => [m(l(a.$t("wxmp.wxmsg.clickMenuLink")), 1)]), _: 1 }), m("\uFF1A\u3010" + l(t.row.repUrl) + "\u3011 ", 1)])) : d("", true), t.row.repType == "event" && t.row.repEvent == "scancode_waitmsg" ? (p(), c("div", ge, [n(g, { size: "small" }, { default: r(() => [m(l(a.$t("wxmp.wxmsg.scanResult")), 1)]), _: 1 }), m("\uFF1A\u3010" + l(t.row.repContent) + "\u3011 ", 1)])) : d("", true), t.row.repType == "text" ? (p(), c("div", we, l(t.row.repContent), 1)) : d("", true), t.row.repType == "image" ? (p(), c("div", fe, [f("a", { target: "_blank", href: t.row.repUrl }, [f("img", { src: t.row.repUrl, style: { width: "100px" } }, null, 8, he)], 8, _e)])) : d("", true), t.row.repType == "voice" ? (p(), c("div", xe, [n(D, { appId: a.appId, objData: t.row }, null, 8, ["appId", "objData"])])) : d("", true), t.row.repType == "video" ? (p(), c("div", ye, [n(I, { appId: a.appId, objData: t.row, style: { "margin-top": "40px" } }, null, 8, ["appId", "objData"])])) : d("", true), t.row.repType == "shortvideo" ? (p(), c("div", be, [n(I, { appId: a.appId, objData: t.row, style: { "margin-top": "40px" } }, null, 8, ["appId", "objData"])])) : d("", true), t.row.repType == "location" ? (p(), $(o, { key: 10, type: "primary", target: "_blank", href: "https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx=" + t.row.repLocationY + "&pointy=" + t.row.repLocationX + "&name=" + t.row.repContent + "&ref=joolun" }, { default: r(() => [f("img", { src: "https://apis.map.qq.com/ws/staticmap/v2/?zoom=10&markers=color:blue|label:A|" + t.row.repLocationX + "," + t.row.repLocationY + "&key=" + a.qqMapKey + "&size=200*150" }, null, 8, ve), e[3] || (e[3] = f("p", null, null, -1)), n(v, null, { default: r(() => [n(V)]), _: 1 }), m(l(t.row.repContent), 1)]), _: 2 }, 1032, ["href"])) : d("", true), t.row.repType == "link" ? (p(), c("div", ke, [n(g, { size: "small" }, { default: r(() => [m(l(a.$t("wxmp.wxmsg.link")), 1)]), _: 1 }), e[4] || (e[4] = m("\uFF1A", -1)), f("a", { href: t.row.repUrl, target: "_blank" }, l(t.row.repName), 9, Ie)])) : d("", true)]), menu: r((t) => [i.permissions["wxmp:wxmsg:index"] ? (p(), $(k, { key: 0, type: "primary", icon: "ChatDotRound", link: "", onClick: (R) => i.wxMsgDo(t.row) }, { default: r(() => [m(l(a.$t("wxmp.wxmsg.message")), 1)]), _: 1 }, 8, ["onClick"])) : d("", true)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 }), n(M, { modelValue: a.dialogMsgVisible, "onUpdate:modelValue": e[1] || (e[1] = (t) => a.dialogMsgVisible = t), title: a.$t("wxmp.wxmsg.userMessage"), width: "800px", top: "20px" }, { default: r(() => [f("div", null, [a.dialogMsgVisible ? (p(), c("div", Ce, [n(P, { appId: a.appId, wxUserId: a.wxUserId }, null, 8, ["appId", "wxUserId"])])) : d("", true)])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 }), n(M, { modelValue: a.dialogWxUserVisible, "onUpdate:modelValue": e[2] || (e[2] = (t) => a.dialogWxUserVisible = t), title: "\u516C\u4F17\u53F7\u7528\u6237\u8D44\u6599", width: "90%", top: "20px" }, { default: r(() => [f("div", null, [a.dialogWxUserVisible ? (p(), c("div", Ue, [n(A, { appIdProp: a.appId, wxUserIdProp: a.wxUserId }, null, 8, ["appIdProp", "wxUserIdProp"])])) : d("", true)])]), _: 1 }, 8, ["modelValue"])]);
}
const Ee = Y(se, [["render", We], ["__scopeId", "data-v-ce8c471d"]]);
export {
  Ee as default
};
