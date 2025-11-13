import { _ as T, c as _, o as l, e as n, b as m, h as c, r as a, z as d, g as p, B as u, f as g, F as y, v as b, V as k, b7 as D, b8 as r, U as Y, aA as z, j as E, w as F } from "./index-DAdfXJ2i.js";
import K from "./index-BMbpIAe3.js";
import "./normal-msg-DHaN57lh.js";
import "./index-BujTjAOK.js";
import "./index-sB6MalEe.js";
import "./order-store-info-DarXLMJX.js";
import "./shopstore-oR_kr_Ba.js";
import "./clientType-BhCLU4J5.js";
import "./order-goods-info-CxpE49Zn.js";
import "./orderinfo-BW26vGJU.js";
import "./supplier-CbDQWRL9.js";
import "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
import "./order-user-info-YRvKWCyA.js";
import "./order-logistics-DWwBY9ly.js";
import "./order-refunds-COLRKxYr.js";
import "./orderrefunds-9t-28G2V.js";
import "./configlogistics-CtSivpVp.js";
import "./shopinfo-DR8w8ULX.js";
import "./orderinfo-DpyYs_v8.js";
import "./orderbill-CJo17PNX.js";
import "./index-BUC3Zvjb.js";
import "./goods-select-DrMu2Gwf.js";
import "./goodsspu-Dmc9OYVL.js";
import "./goodsspu-DKL_9wDU.js";
import "./goods-supplier-sync-B6V0ptyp.js";
import "./suppliergoodsspuspec-DZt0HeAC.js";
import "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./goodsspecvalue-CIlXCfn0.js";
import "./goodsspec-B5ivNhww.js";
import "./suppliergoodsspu-B_JJ2gkc.js";
import "./goodsspuspec-aVm7uABh.js";
import "./pointsconfig-Df6yTocn.js";
import "./distributionconfig-DFgn2QpM.js";
import "./freighttemplat-H0ep6JZX.js";
import "./BaseEditor-CKHWT0N2.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./goods-supplier-select-Bn7KARNC.js";
import "./goods-supplier-import-Ct9VZjok.js";
import "./goods-excel-import-D-YnK_6M.js";
import "./image-msg-Cp2BePrs.js";
import "./video-msg-C_m-ByXp.js";
import "./emoji-nxSQDtl7.js";
import "./im-file-upload-_eJdnioH.js";
import "./index-DIqWz31M.js";
import "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./couponuser-BDN5Bz1z.js";
import "./index-B9aeWnVz.js";
import "./userrecord-Cw1Kh-cW.js";
import "./pointsrecord-B3LJmQYJ.js";
import "./userbalancerecord-DZ_kN2UL.js";
import "./userbalance-Dmj44VeU.js";
import "./useronline-CekuxQ4G.js";
import "./index-B7mn90c9.js";
import "./goods-page-D6dcgAEu.js";
const R = { components: { ImChatDialog: K }, data() {
  return { dayjs: z, dialogVisible: false, Conversation: [], loadmore: false, modalName: null, chatUserId: "", curChatItem: {}, contextMenu: { chatItem: {} }, userInfo: Y().userInfo };
}, computed: { unreadCount() {
  return r().JIMMsgCount;
}, IMData() {
  return r().IMdata;
}, enableAudio() {
  return r().enableAudio;
} }, created() {
  this.userInfo.isKefu == "1" && r().initIm(), r().mitt.on("JIMConversation", (e) => {
    this.getConversation();
  }), r().mitt.on("JIMDisconnect", (e) => {
    this.getConversation();
  }), r().mitt.on("JIMLogin", (e) => {
    this.getConversation();
  });
}, unmounted() {
  this.showPage = false, r().mitt.off("JIMLogin"), r().mitt.off("JIMDisconnect"), r().mitt.off("JIMMsgChange");
}, methods: { changeMsgAudio() {
  r().changeMsgAudio();
}, handleEvent(e, t, h) {
  this.contextMenu.chatItem = e, t();
}, handleHide(e, t) {
}, reconnect() {
  r().initIm();
}, showDialog() {
  this.dialogVisible = true, this.curChatItem && this.$nextTick(() => {
    this.openChat(this.curChatItem);
  });
}, searchChatChange(e) {
  this.Conversation.forEach((t) => {
    if (t.conversationID == e) {
      this.openChat(t);
      return;
    }
  });
}, openChat(e) {
  e.unreadCount = 0, this.$refs.imChatRef.getCurChatData(e), this.curChatItem = e;
}, openMenu(e, t) {
  this.contextMenu.chatItem = e, this.contextMenu.top = t.clientY, this.openChat(e);
}, getConversation() {
  let e = r();
  e.JIM && e.JIM.getAllConversationList().then((t) => {
    if (t.errCode == 0) {
      const h = JSON.parse(t.data);
      this.Conversation = h;
    }
  }).catch((t) => {
  });
}, pinConversation(e) {
  const t = { conversationID: e.conversationID, isPinned: !e.isPinned };
  r().JIM.pinConversation(t).then(({ data: v }) => {
    this.getConversation();
  }).catch((v) => {
  });
}, deleteConversation(e) {
  let t = this, h = r().JIM;
  D.deleteConversation(e), h.deleteConversationFromLocalAndSvr(e.conversationID).then(({ data: v }) => {
    t.getConversation();
  }).catch((v) => {
  });
}, formatTimeMsg(e) {
  return D.parseTimeMsg(e);
} } }, O = { class: "flex items-center justify-center" }, q = { class: "text-[14px] ml-[5px]" }, G = { class: "flex items-center" }, Q = ["id"], W = { key: 0 }, X = { class: "border border-gray-100 bg-gray-50" }, Z = { class: "text-orange-500" }, $ = { class: "flex-c" }, ee = { key: 0 }, te = { style: { "overflow-y": "auto", height: "750px", "margin-top": "5px" } }, oe = ["onClick"], ne = { class: "flex py-[10px] px-[10px] items-center" }, ie = { class: "ml-[5px]" }, se = { class: "flex justify-between" }, ae = { class: "flex items-center" }, re = { class: "text-[12px] text-gray-400" }, le = { id: "imcontextmenucov", ref: "contextmenuImRef", class: "contextmenu-im el-dropdown-menu el-popper", style: { display: "none" } };
function ce(e, t, h, v, i, s) {
  const w = a("Headset"), I = a("el-icon"), M = a("el-badge"), f = a("el-button"), x = a("el-alert"), J = a("el-option"), V = a("el-select"), A = a("el-empty"), U = a("el-avatar"), S = a("Upload"), N = a("el-aside"), H = a("ImChatDialog"), L = a("el-main"), B = a("el-container"), j = a("el-dialog"), P = E("contextmenu");
  return l(), _("div", null, [n("div", { class: "search-container h-[48px] flex-c cursor-pointer navbar-bg-hover", onClick: t[0] || (t[0] = (...o) => s.showDialog && s.showDialog(...o)) }, [m(M, { value: s.unreadCount, hidden: s.unreadCount == 0, class: "flex items-center" }, { default: c(() => [n("div", O, [m(I, null, { default: c(() => [m(w)]), _: 1 }), n("span", q, d(e.$t("mall.pagedevise.customerService")), 1)])]), _: 1 }, 8, ["value", "hidden"])]), m(j, { modelValue: i.dialogVisible, "onUpdate:modelValue": t[3] || (t[3] = (o) => i.dialogVisible = o), width: "940", top: "10px" }, { header: c(({ titleId: o, titleClass: C }) => [n("div", G, [n("h4", { id: o, class: k(C) }, d(e.$t("im.im.chat")), 11, Q), i.userInfo.isKefu == "1" ? (l(), _("div", W, [s.enableAudio ? (l(), p(f, { key: 0, link: "", icon: "Bell", onClick: s.changeMsgAudio }, null, 8, ["onClick"])) : (l(), p(f, { key: 1, link: "", icon: "MuteNotification", onClick: s.changeMsgAudio }, null, 8, ["onClick"]))])) : u("", true)])]), default: c(() => [n("div", X, [i.userInfo.isKefu != "1" ? (l(), p(x, { key: 0, type: "info", center: "", closable: false }, { default: c(() => [n("span", Z, d(e.$t("im.im.notChatAccount")), 1)]), _: 1 })) : u("", true), s.IMData.IMcheckIMLoginOK && s.IMData.IMconnectStatus == 0 ? (l(), p(x, { key: 1, type: "warning", center: "", closable: false }, { default: c(() => [n("div", $, [g(d(e.$t("im.im.connectFail")) + ",", 1), m(f, { link: "", type: "primary", size: "small", onClick: s.reconnect }, { default: c(() => [g(d(e.$t("im.im.reconnect")), 1)]), _: 1 }, 8, ["onClick"])])]), _: 1 })) : u("", true), i.dialogVisible ? (l(), p(B, { key: 2 }, { default: c(() => [m(N, { width: "220px", class: "border-r-2 border-gray-100" }, { default: c(() => [i.Conversation && i.Conversation.length > 0 ? (l(), _("div", ee, [m(V, { filterable: "", clearable: "", placeholder: e.$t("im.im.inputSearch"), style: { width: "100%" }, "suffix-icon": "Search", onChange: s.searchChatChange }, { default: c(() => [(l(true), _(y, null, b(i.Conversation, (o) => (l(), p(J, { key: o.conversationID, label: o.showName, value: o.conversationID }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["placeholder", "onChange"])])) : u("", true), n("div", te, [i.Conversation.length == 0 ? (l(), p(A, { key: 0 })) : u("", true), (l(true), _(y, null, b(i.Conversation, (o, C) => F((l(), _("div", { key: C, class: k(i.curChatItem.userID == o.userID ? "bg-gray-200" : ""), onClick: (me) => s.openChat(o) }, [n("div", ne, [m(M, { value: o.unreadCount, hidden: o.unreadCount == 0, class: "flex items-center" }, { default: c(() => [m(U, { shape: "square", size: 40, src: o.faceURL, class: "bg-slate-300" }, null, 8, ["src"])]), _: 2 }, 1032, ["value", "hidden"]), n("div", ie, [n("div", se, [n("div", ae, [o.isPinned ? (l(), p(I, { key: 0, color: "#ff0000" }, { default: c(() => [m(S)]), _: 1 })) : u("", true), g(d(o.showName), 1)])]), n("div", re, d(i.dayjs(o.latestMsgSendTime).format("YYYY-MM-DD HH:mm:ss")), 1)])])], 10, oe)), [[P, { id: "imcontextmenucov", event: s.handleEvent, value: o, hide: s.handleHide }]])), 128))])]), _: 1 }), m(L, { style: { "--el-main-padding": "0" } }, { default: c(() => [m(H, { ref: "imChatRef", chatUserId: i.chatUserId }, null, 8, ["chatUserId"])]), _: 1 })]), _: 1 })) : u("", true), n("ul", le, [n("li", { class: "el-dropdown-menu__item", onClick: t[1] || (t[1] = (o) => s.pinConversation(i.contextMenu.chatItem)) }, d(i.contextMenu.chatItem.isPinned ? e.$t("im.im.unpinned") : e.$t("im.im.pinned")), 1), n("li", { class: "el-dropdown-menu__item el-dropdown-menu__item--divided", onClick: t[2] || (t[2] = (o) => s.deleteConversation(i.contextMenu.chatItem)) }, d(e.$t("commons.delete")), 1)], 512)])]), _: 1 }, 8, ["modelValue"])]);
}
const Ct = T(R, [["render", ce], ["__scopeId", "data-v-b982c7f7"]]);
export {
  Ct as default
};
