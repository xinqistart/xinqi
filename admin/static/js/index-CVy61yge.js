import { A as v, R as V, be as k, t as U, S as C, _ as B, r as c, c as f, o as m, b as _, h as p, g as L, B as N, f as S, z as h, e as b } from "./index-DAdfXJ2i.js";
const E = { props: { appId: { type: String }, mediaIdsValue: { type: Array }, limit: { type: Number, default() {
  return 1;
} }, uploadTip: { type: String }, disabled: { type: Boolean, default() {
  return false;
} } }, setup(o, t) {
  const { proxy: d } = v(), e = V({ headers: { Authorization: "Bearer " + k().access_token }, fileList: [], mediaIds: o.mediaIdsValue, dialogVisible: false, dialogImageUrl: "" });
  U(() => {
    r();
  });
  const I = (a) => {
    e.dialogImageUrl = a.url, e.dialogVisible = true;
  };
  function y(a) {
    a.code != 0 && d.$message({ showClose: true, message: d.$t("commons.uploadError") + a.msg, type: "error" });
  }
  function r() {
    o.mediaIdsValue && o.mediaIdsValue.forEach((a) => {
      e.fileList.push({ name: d.$t("wxma.wxauthaudit.imgNotDisplayed"), mediaId: a, url: "/img/no_pc.png" });
    });
  }
  async function u(a) {
    const s = a.type === "image/jpg" || a.type === "image/jpeg" || a.type === "image/png" || a.type === "image/gif" || a.type === "image/bmp" || a.type === "image/webp", l = a.size / 1024 / 1024 < 10;
    return s && l || d.$message({ showClose: true, message: d.$t("wxma.wxauthaudit.imageSizeLimit"), type: "error" }), s && l;
  }
  function g(a) {
    d.$message.error(d.$t("pay.payapplyform.uploadError") + a);
  }
  const n = (a, s) => {
    e.mediaIds = [], s && s.map((i) => {
      i.response ? e.mediaIds.push(i.response.data.mediaId) : i.mediaId && e.mediaIds.push(i.mediaId);
    });
    let l = e.mediaIds.length > 0 ? e.mediaIds : null;
    t.emit("change", l);
  }, w = (a, s) => {
    e.mediaIds = [], s && s.map((i) => {
      i.response ? e.mediaIds.push(i.response.data.mediaId) : i.mediaId && e.mediaIds.push(i.mediaId);
    });
    let l = e.mediaIds.length > 0 ? e.mediaIds : null;
    t.emit("change", l);
  };
  return { ...C(e), uploadSuccess: y, uploadError: g, beforeUpload: u, handlePreview: I, handleChange: n, handleRemove: w, getMedia: r };
}, emits: ["change"] }, x = { class: "el-upload__tip" }, z = ["src"], A = { key: 1 };
function M(o, t, d, e, I, y) {
  const r = c("el-button"), u = c("el-upload"), g = c("el-dialog");
  return m(), f("div", null, [_(u, { "file-list": o.fileList, "onUpdate:fileList": t[0] || (t[0] = (n) => o.fileList = n), action: "/weixin/wxauthaudit/uploadauthmaterial/" + d.appId, limit: 0, headers: o.headers, "before-upload": e.beforeUpload, "on-success": e.uploadSuccess, "on-error": e.uploadError, "on-preview": e.handlePreview, "on-change": e.handleChange, "on-remove": e.handleRemove, "list-type": "picture" }, { tip: p(() => [b("div", x, h(d.uploadTip), 1)]), default: p(() => [d.disabled ? N("", true) : (m(), L(r, { key: 0, link: "", type: "primary" }, { default: p(() => [S(h(o.$t("commons.upload")), 1)]), _: 1 }))]), _: 1 }, 8, ["file-list", "action", "headers", "before-upload", "on-success", "on-error", "on-preview", "on-change", "on-remove"]), _(g, { modelValue: o.dialogVisible, "onUpdate:modelValue": t[1] || (t[1] = (n) => o.dialogVisible = n) }, { default: p(() => [b("div", null, [o.dialogImageUrl ? (m(), f("img", { key: 0, "w-full": "", src: o.dialogImageUrl, alt: "Preview Image" }, null, 8, z)) : (m(), f("div", A, h(o.$t("wxma.wxauthaudit.imgNotDisplayed")), 1))])]), _: 1 }, 8, ["modelValue"])]);
}
const R = B(E, [["render", M], ["__scopeId", "data-v-bee7ba27"]]);
export {
  R as default
};
