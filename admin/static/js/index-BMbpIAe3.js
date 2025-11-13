import { b7 as _, n as j, b8 as h, W as Y, U as S, aA as q, _ as A, c as p, o as c, b as r, h as d, g as v, B as f, e as a, z as M, r as l, F as W, v as Q, w as X, bf as Z, a$ as $, f as P, V as O } from "./index-DAdfXJ2i.js";
import ee from "./normal-msg-DHaN57lh.js";
import se from "./image-msg-Cp2BePrs.js";
import te from "./video-msg-C_m-ByXp.js";
import oe from "./emoji-nxSQDtl7.js";
import ne from "./im-file-upload-_eJdnioH.js";
import ie from "./index-DIqWz31M.js";
import ae from "./index-B9aeWnVz.js";
import { _ as re } from "./goods-page-D6dcgAEu.js";
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
import "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./couponuser-BDN5Bz1z.js";
import "./userrecord-Cw1Kh-cW.js";
import "./pointsrecord-B3LJmQYJ.js";
import "./userbalancerecord-DZ_kN2UL.js";
import "./userbalance-Dmj44VeU.js";
import "./useronline-CekuxQ4G.js";
import "./index-B7mn90c9.js";
const { $t: D } = j();
function le(s, e) {
  const o = { userID: e, msgIDList: [] };
  s.markC2CMessageAsRead(o).then((g) => {
    _.updateTotalUnreadMsgCount();
  }).catch((g) => {
  });
}
function U(s, e, o = false) {
  return new Promise((g, t) => {
    o ? s.sendMessageNotOss(e).then(({ data: i, errCode: m }) => {
      g(i);
    }).catch((i) => {
      i.errCode == 301 ? uni.showToast({ title: D("chat.notFoundCS"), icon: "none" }) : uni.showToast({ title: D("chat.sendFail"), icon: "none" }), t();
    }) : s.sendMessage(e).then(({ data: i, errCode: m }) => {
      g(i);
    }).catch((i) => {
      i.errCode == 301 ? uni.showToast({ title: D("chat.notFoundCS"), icon: "none" }) : uni.showToast({ title: D("chat.sendFail"), icon: "none" }), t();
    });
  });
}
function ce(s, e, o) {
  return new Promise((g, t) => {
    s.createTextMessage(o).then(({ data: i }) => {
      U(s, { recvID: e, groupID: "", offlinePushInfo: "", message: i }).then((u) => {
        g(u);
      }).catch((u) => {
        t();
      });
    }).catch((i) => {
      uni.showToast({ title: D("chat.createMsgFail"), icon: "none" }), t(i);
    });
  });
}
function de(s, e, o) {
  return new Promise((g, t) => {
    let i = { uuid: _.chatMsgUUID(), type: R(o.path), width: 100, height: 100, size: o.size, url: o.path };
    const m = { sourcePicture: i, bigPicture: i, snapshotPicture: i };
    s.createImageMessage(m).then(({ data: u }) => {
      U(s, { recvID: e, groupID: "", message: u }, true).then((y) => {
        g(y);
      }).catch((y) => {
        t(y);
      });
    }).catch((u) => {
      t(u);
    });
  });
}
function ge(s, e, o) {
  return new Promise((g, t) => {
    let i = { videoPath: o.path, videoType: R(o.path), duration: o.duration, snapshotPath: o.path, videoUUID: _.chatMsgUUID(), videoUrl: o.path, videoSize: o.size || 0 };
    s.createVideoMessage(i).then(({ data: m }) => {
      U(s, { recvID: e, groupID: "", message: m }, true).then((I) => {
        g(I);
      }).catch((I) => {
        t(I);
      });
    });
  });
}
function me(s, e, o) {
  return new Promise((g, t) => {
    const i = { data: JSON.stringify(o), extension: "", description: "" };
    s.createCustomMessage(i).then(({ data: m }) => {
      U(s, { recvID: e, groupID: "", message: m }).then((I) => {
        g(I);
      }).catch((I) => {
        t();
      });
    }).catch((m) => {
      t(m);
    });
  });
}
const R = (s) => {
  const e = s.lastIndexOf(".");
  return s.slice(e + 1);
}, C = { sendMsgText: ce, sendMsgImage: de, sendMsgVideo: ge, sendMsgCustom: me, markMsgRead: le }, he = { components: { ImFileUpload: ne, ImageMsg: se, VideoMsg: te, NormalMsg: ee, EmojiChat: oe, UserShop: ie, UserMall: ae, GoodsPageSelect: re }, data() {
  var _a, _b;
  return { dayjs: q, chatRecordLocalSaveKey: "chat_record_" + ((_a = S()) == null ? void 0 : _a.userInfo.tenantId) + "_", title: "", chatUserId: null, chatUserinfo: { showName: "" }, chatMessageRecord: [], inputMsgText: "", InputBottom: 0, topMsgContent: null, showPage: false, sendMsgSuccess: true, getMessageOptions: { userID: "", groupID: "", startClientMsgID: "", count: 999 }, IMuserID: h().IMdata.IMuserID, JIMConnect: false, userInfo: (_b = S()) == null ? void 0 : _b.userInfo, modalName: "", mallUserId: "", userInfoDialog: { visible: false }, goodsDialog: { value: "", visible: false } };
}, watch: { chatMessageRecord(s) {
  this.showPage && this.$nextTick(() => {
    let e = document.getElementById("idmessage");
    e.scrollTop = e.scrollHeight;
  });
} }, unmounted() {
  this.showPage = false, h().mitt.off("JIMLogin"), h().mitt.off("JIMDisconnect"), h().mitt.off("JIMMsgChange");
}, created() {
  var _a;
  const s = (_a = S()) == null ? void 0 : _a.userInfo;
  !s || !s.id || (h().mitt.on("JIMDisconnect", (e) => {
    this.JIMConnect = false, this.loadLocalChatRecord();
  }), h().mitt.on("JIMLogin", (e) => {
    this.JIMConnect = true, this.loadChatRecord();
  }), h().mitt.on("JIMMsgChange", (e) => {
    this.showPage && this.loadChatRecord();
  }));
}, methods: { getCurChatData(s) {
  this.chatUserId = s.userID, s && (this.mallUserId = _.ChatUserIdToMallUserId(s.userID), this.showPage = true, this.title = s.showName, this.IMuserID = _.GetIMuserID(), this.getMessageOptions.userID = this.chatUserId, this.chatRecordLocalSaveKey = "chat_record_" + this.IMuserID + this.chatUserId, this.loadChatRecord());
}, onKeyup(s) {
  this.onSendText();
}, sendMsgSuccessHandle(s) {
  this.chatMessageRecord.push(JSON.parse(s)), this.inputMsgText = "", this.toBottom(), _.saveIMMsg(this.chatMessageRecord, this.getMessageOptions.userID), this.topMsgContent = null, this.sendMsgSuccess = true;
}, loadChatRecord() {
  if (!this.showPage) return;
  let s = h().JIM;
  s && (s.getHistoryMessageList(this.getMessageOptions).then((e) => {
    const o = JSON.parse(e.data) || [];
    _.saveIMMsg(o, this.chatUserId), this.chatMessageRecord = o, this.toBottom();
  }).catch((e) => {
    this.loadLocalChatRecord();
  }), C.markMsgRead(s, this.chatUserId));
}, loadLocalChatRecord() {
  if (!this.showPage) return;
  let s = Y().getItem(this.chatRecordLocalSaveKey);
  const e = s ? JSON.parse(s) : [];
  this.chatMessageRecord = e, this.toBottom();
}, toBottom() {
  this.showPage && this.$nextTick(() => {
    let s = document.getElementById("idmessage");
    s.scrollTop = s.scrollHeight;
  });
}, onChangeEmoji(s) {
  this.inputMsgText += s;
}, formatTimeMsg(s) {
  return _.parseTimeMsg(s);
}, onSendCustom() {
  if (!this.topMsgContent) return;
  if (!this.sendMsgSuccess) {
    this.$message.info(this.$t("im.im.sending"));
    return;
  }
  this.sendMsgSuccess = false;
  let s = h().JIM;
  C.sendMsgCustom(s, this.getMessageOptions.userID, this.topMsgContent).then((e) => {
    this.sendMsgSuccessHandle(e);
  }).catch(() => {
  });
}, onSendText() {
  var s = this, e = s.inputMsgText;
  if (!e || e == "" || e.trim().length == 0) return;
  if (!this.sendMsgSuccess) {
    this.$message.info(this.$t("im.im.sending"));
    return;
  }
  this.sendMsgSuccess = false;
  let o = h().JIM;
  C.sendMsgText(o, this.getMessageOptions.userID, e).then((g) => {
    this.sendMsgSuccessHandle(g);
  }).catch(() => {
  });
}, onSendImage(s) {
  let e = h().JIM;
  C.sendMsgImage(e, this.getMessageOptions.userID, s).then((o) => {
    this.sendMsgSuccessHandle(o);
  }).catch(() => {
  });
}, onSendVideo(s) {
  let e = h().JIM;
  C.sendMsgVideo(e, this.getMessageOptions.userID, s).then((o) => {
    this.sendMsgSuccessHandle(o);
  }).catch(() => {
  });
}, showUserInfo() {
  this.userInfoDialog.visible = true;
}, onChangeGoods(s) {
  if (s) {
    let e = s, o = "\xA5" + e.priceDown;
    e.priceUp && e.priceDown != e.priceUp && (o = o + " - \xA5" + e.priceUp), this.topMsgContent = { id: e.id, imgUrl: e.picUrls ? e.picUrls[0] : "", name: e.name, desc: o, url: "/pages/goods/goods-detail/index?id=" + e.id, type: "\u5546\u54C1" };
  }
}, onConfirmGoods() {
  this.onSendCustom(), this.goodsDialog.visible = false;
} } }, pe = { style: { height: "100%" }, class: "bg-gray-50" }, ue = { class: "flex items-center justify-between w-full px-[10px]" }, Ie = ["title"], fe = { class: "cu-chat chat-list radius bg-gray-50" }, _e = { id: "chatlist" }, Me = { class: "message bg-gray-50" }, ye = { key: 0, class: "text-sm text-gray text-center padding" }, ve = ["id"], Ce = { class: "main" }, De = { key: 0 }, Ue = { key: 1 }, Se = { key: 0, style: { "user-select": "text" } }, be = { key: 1 }, xe = { key: 2 }, we = { class: "date" }, Te = { key: 0, class: "chat-input-layout solids-top bg-gray-50" }, ke = { class: "flex align-center", style: { "font-size": "20px" } }, Je = { class: "margin-left-sm" }, Pe = { class: "margin-left-sm" }, Oe = { class: "margin-left-sm" }, Re = ["placeholder"], Be = { style: { position: "absolute", bottom: "-20px", right: "20px" } }, Ve = { key: 0 }, Ne = { key: 0 };
function Fe(s, e, o, g, t, i) {
  const m = l("UserFilled"), u = l("el-icon"), I = l("el-header"), y = l("el-empty"), b = l("el-avatar"), B = l("normal-msg"), V = l("image-msg"), N = l("video-msg"), x = l("el-main"), F = l("emoji-chat"), H = l("el-popover"), w = l("ImFileUpload"), L = l("el-footer"), T = l("el-container"), z = l("UserShop"), E = l("UserMall"), k = l("el-dialog"), G = l("GoodsPageSelect"), J = l("el-button");
  return c(), p("div", pe, [r(T, { style: { height: "100%" }, class: "bg-gray-50" }, { default: d(() => [t.mallUserId ? (c(), v(I, { key: 0, height: "50px", class: "flex items-center", style: { "--el-header-padding": "0", "border-bottom": "1px solid #f0f0f0", "font-weight": "600" } }, { default: d(() => [a("div", ue, [a("div", { title: "User ID:" + t.mallUserId }, M(t.title), 9, Ie), a("div", null, [r(u, { class: "cursor-pointer", onClick: e[0] || (e[0] = (n) => i.showUserInfo()) }, { default: d(() => [r(m)]), _: 1 })])])]), _: 1 })) : f("", true), r(x, { style: { "--el-main-padding": "0" }, class: "page-container bg-gray-50" }, { default: d(() => [r(T, { style: { height: "100%" }, class: "padding-bottom" }, { default: d(() => [r(x, { id: "idmessage", style: { height: "500px", "--el-main-padding": "0" } }, { default: d(() => [a("div", fe, [a("div", _e, [a("div", Me, [t.chatMessageRecord.length == 0 ? (c(), p("div", ye, [r(y)])) : f("", true), (c(true), p(W, null, Q(t.chatMessageRecord, (n, K) => (c(), p("div", { id: n, key: K, class: O(["cu-item bg-gray-50", n.sendID == t.IMuserID ? "self" : ""]) }, [n.sendID != t.IMuserID ? (c(), v(b, { key: 0, shape: "square", size: 40, src: n.senderFaceUrl }, null, 8, ["src"])) : f("", true), a("div", Ce, [a("div", { class: O(["content message-bg", n.sendID == t.IMuserID ? "bg-green" : "bg-white message-bg-user"]) }, [n.contentType == 110 ? (c(), p("div", De, [r(B, { msgBody: n.customElem ? JSON.parse(n.customElem.data) : "" }, null, 8, ["msgBody"])])) : (c(), p("div", Ue, [n.contentType == 101 ? (c(), p("div", Se, M(n.content), 1)) : n.contentType == 102 ? (c(), p("div", be, [r(V, { msgBody: n.content ? JSON.parse(n.content) : "" }, null, 8, ["msgBody"])])) : n.contentType == 104 ? (c(), p("div", xe, [r(N, { msgBody: n.content ? JSON.parse(n.content) : "" }, null, 8, ["msgBody"])])) : f("", true)]))], 2)]), n.sendID == t.IMuserID ? (c(), v(b, { key: 1, class: "mr-[10px]", shape: "square", size: 40, src: n.senderFaceUrl }, null, 8, ["src"])) : f("", true), a("div", we, M(t.dayjs(n.sendTime).format("YYYY-MM-DD HH:mm:ss")), 1)], 10, ve))), 128))])])])]), _: 1 }), r(L, { height: "200px", style: { "--el-footer-padding": "0" } }, { default: d(() => [t.chatUserId ? (c(), p("div", Te, [a("div", ke, [r(H, { placement: "top-start", width: 400, trigger: "hover" }, { reference: d(() => [...e[8] || (e[8] = [a("div", { class: "action" }, [a("span", { class: "cuIcon-emoji" })], -1)])]), default: d(() => [a("div", null, [r(F, { onOnClickItem: i.onChangeEmoji }, null, 8, ["onOnClickItem"])])]), _: 1 }), a("div", Je, [r(w, { "file-type": "image", onChange: i.onSendImage }, { default: d(() => [...e[9] || (e[9] = [a("div", { class: "cuIcon-camera" }, null, -1)])]), _: 1 }, 8, ["onChange"])]), a("div", Pe, [r(w, { "file-type": "video", onChange: i.onSendVideo }, { default: d(() => [...e[10] || (e[10] = [a("div", { class: "cuIcon-video" }, null, -1)])]), _: 1 }, 8, ["onChange"])]), a("div", Oe, [a("div", { class: "cuIcon-goods", onClick: e[1] || (e[1] = (n) => t.goodsDialog.visible = true) })])]), X(a("textarea", { "onUpdate:modelValue": e[2] || (e[2] = (n) => t.inputMsgText = n), class: "chat-input margin-top-sm bg-gray-50", placeholder: s.$t("im.im.inputContent"), "adjust-position": false, focus: false, maxlength: "500", "cursor-spacing": "10", onKeyup: e[3] || (e[3] = $((...n) => i.onKeyup && i.onKeyup(...n), ["enter"])) }, null, 40, Re), [[Z, t.inputMsgText]]), a("div", Be, [a("button", { class: "cu-btn bg-green", onClick: e[4] || (e[4] = (n) => i.onSendText()) }, M(s.$t("im.im.send")) + " \u21B5 ", 1)])])) : f("", true)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }), r(k, { modelValue: t.userInfoDialog.visible, "onUpdate:modelValue": e[5] || (e[5] = (n) => t.userInfoDialog.visible = n), width: "90%", "destroy-on-close": "", "append-to-body": "" }, { default: d(() => [t.userInfoDialog.visible ? (c(), p("div", Ve, [t.userInfo.type == "2" ? (c(), v(z, { key: 0, "user-id": t.mallUserId }, null, 8, ["user-id"])) : (c(), v(E, { key: 1, "user-id": t.mallUserId }, null, 8, ["user-id"]))])) : f("", true)]), _: 1 }, 8, ["modelValue"]), r(k, { modelValue: t.goodsDialog.visible, "onUpdate:modelValue": e[7] || (e[7] = (n) => t.goodsDialog.visible = n), width: "90%" }, { footer: d(() => [r(J, { onClick: e[6] || (e[6] = (n) => t.goodsDialog.visible = false) }, { default: d(() => [P(M(s.$t("commons.cancel")), 1)]), _: 1 }), r(J, { type: "primary", onClick: i.onConfirmGoods }, { default: d(() => [P(M(s.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])]), default: d(() => [t.goodsDialog.visible ? (c(), p("div", Ne, [r(G, { onOnChangeItem: i.onChangeGoods }, null, 8, ["onOnChangeItem"])])) : f("", true)]), _: 1 }, 8, ["modelValue"])]);
}
const js = A(he, [["render", Fe], ["__scopeId", "data-v-3e1f6534"]]);
export {
  js as default
};
