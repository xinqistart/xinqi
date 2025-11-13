import { R as V } from "./videojs-player.esm-CCSu0y3h.js";
import { g as h, a as D } from "./wxmaterial-DvTatkAN.js";
import { A as j, R as O, S as T, _ as I, r as i, j as L, c as g, o as r, B as _, w as k, b as d, h as u, f as P, z as R, e as B, g as b } from "./index-DAdfXJ2i.js";
const M = { components: { VideoPlayer: V }, props: { objData: { type: Object }, appId: { type: String } }, setup(e) {
  const { proxy: o } = j(), t = O({ dialogVideo: false, outTime: false, mainLoading: false, playerOptions: { autoplay: false, muted: false, loop: false, preload: "auto", language: "zh-CN", aspectRatio: "4:3", fluid: true, sources: [{ type: "video/mp4", src: "" }], poster: "", width: document.documentElement.clientWidth, notSupportedMessage: o.$t("components.wxvideoplay.videoUnavailable") } });
  t.outTime = e.objData.type === "1" && parseInt((/* @__PURE__ */ new Date()).getTime() - new Date(e.objData.createTime).getTime()) >= 2592e5;
  function m() {
    t.dialogVideo = true, p();
  }
  async function y(a, l) {
    let n;
    return t.mainLoading = true, await D({ mediaId: a, fileName: l, appId: e.appId }).then((s) => {
      t.mainLoading = false, n = window.URL.createObjectURL(new Blob([s.data]));
    }), n;
  }
  async function v(a, l) {
    let n;
    return t.mainLoading = true, await h({ mediaId: a, fileName: l, appId: e.appId }).then((s) => {
      t.mainLoading = false, n = window.URL.createObjectURL(new Blob([s.data]));
    }), n;
  }
  function p() {
    e.objData.type == "2" ? t.playerOptions.sources[0].src = e.objData.repUrl : e.objData.type == "1" && y(e.objData.repMediaId, e.objData.repMediaId + ".mp4").then((a) => {
      t.playerOptions.sources[0].src = a;
    });
  }
  function f() {
  }
  function c() {
  }
  return { ...T(t), playVideo: m, getTempMaterialOtherF: y, getMaterialOtherF: v, getVideo: p, onPlayerPlay: f, onPlayerPause: c };
} }, U = { key: 0 }, $ = { key: 1 };
function C(e, o, t, m, y, v) {
  const p = i("el-button"), f = i("el-icon-video-play"), c = i("el-icon"), a = i("Timer"), l = i("video-player"), n = i("el-dialog"), s = L("loading");
  return r(), g("div", null, [e.outTime ? _("", true) : (r(), g("div", U, [d(p, { icon: "VideoPlay", link: "", onClick: o[0] || (o[0] = (w) => m.playVideo()) }, { default: u(() => [P(R(e.$t("components.wxvideoplay.clickPlayVideo")), 1)]), _: 1 })])), e.outTime ? (r(), g("div", $, [d(c, { class: "shipin-i" }, { default: u(() => [d(f)]), _: 1 }), o[2] || (o[2] = B("p", null, null, -1)), d(c, null, { default: u(() => [d(a)]), _: 1 })])) : _("", true), k((r(), b(n, { modelValue: e.dialogVideo, "onUpdate:modelValue": o[1] || (o[1] = (w) => e.dialogVideo = w), title: e.$t("components.wxvideoplay.videoPlay"), width: "40%", "append-to-body": "" }, { default: u(() => [e.playerOptions.sources[0].src ? (r(), b(l, { key: 0, style: { width: "100%", height: "500px" }, controls: "", src: e.playerOptions.sources[0].src }, null, 8, ["src"])) : _("", true)]), _: 1 }, 8, ["modelValue", "title"])), [[s, e.mainLoading]])]);
}
const z = I(M, [["render", C]]);
export {
  z as W
};
