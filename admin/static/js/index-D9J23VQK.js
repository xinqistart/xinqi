import { B as p } from "./wxapp-DzjQ_kFh.js";
import { A as h, R as g, be as _, S as f, _ as y, r as i, c as r, o as c, B as I, b as m, x as w, h as l, f as b, z as x } from "./index-DAdfXJ2i.js";
const k = { props: { appId: { type: String }, showImg: { type: Boolean, default() {
  return true;
} }, width: { type: Number, default() {
  return 100;
} }, height: { type: Number, default() {
  return 100;
} } }, setup(o, n) {
  const { proxy: a } = h(), e = g({ headers: { Authorization: "Bearer " + _().access_token }, mediaId: null, mediaData: null });
  s();
  function d(t) {
    t.code != 0 ? a.$message({ showClose: true, message: a.$t("commons.uploadError") + t.msg, type: "error" }) : (e.mediaId = t.data.mediaId, n.emit("change", e.mediaId), s());
  }
  function s() {
    e.mediaId && p(o.appId, e.mediaId).then((t) => {
      e.mediaData = t.data;
    });
  }
  return { ...f(e), uploadSuccess: d, getMedia: s };
}, emits: ["change"] }, B = ["src"];
function S(o, n, a, e, d, s) {
  const t = i("el-button"), u = i("el-upload");
  return c(), r("div", null, [a.showImg && o.mediaData ? (c(), r("img", { key: 0, style: w("width: " + a.width + "px; height: " + a.height + "px"), src: "data:image/jpg;base64," + o.mediaData }, null, 12, B)) : I("", true), m(u, { action: "/weixin/wxmamedia/upload?mediaType=image&appId=" + a.appId, "show-file-list": false, headers: o.headers, "on-success": e.uploadSuccess }, { default: l(() => [m(t, { link: "", type: "primary" }, { default: l(() => [b(x(o.$t("commons.upload")), 1)]), _: 1 })]), _: 1 }, 8, ["action", "headers", "on-success"])]);
}
const N = y(k, [["render", S]]);
export {
  N as _
};
