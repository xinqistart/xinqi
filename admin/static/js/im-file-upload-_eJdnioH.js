import { A as f, R as u, be as m, S as h, b0 as n, _ as b, c as g, o as _, b as k, h as y, ai as S, r as v } from "./index-DAdfXJ2i.js";
const z = { props: { fileType: { type: String, required: true } }, setup(e, l) {
  const { proxy: t } = f(), a = u({ dialogVisible: false, acceptFile: "*", actionUrl: "/upms/file/upload/out?dir=im/" + e.fileType + "&fileType=" + e.fileType, headers: { Authorization: "Bearer " + m().access_token } });
  switch (e.fileType) {
    case "image":
      a.acceptFile = "image/*";
      break;
    case "video":
      a.acceptFile = "video/*";
      break;
    case "file":
      a.acceptFile = "*";
      break;
  }
  function c(s, i) {
    let p = { path: s.link, size: i.size };
    l.emit("change", p);
  }
  const r = (s) => {
    let i = n.limitUploadImageSize;
    return e.fileType != "image" && (i = n.limitUploadFileSize), s.size / 1024 / 1024 > i ? (t.$message.error(`${t.$t("commons.notOut")}${i}MB!`), false) : true;
  }, o = () => {
  }, d = () => {
    a.dialogVisible = true;
  };
  return { ...h(a), uploadSuccess: c, beforeUpload: r, handleRemove: o, handlePreview: d };
} };
function F(e, l, t, a, c, r) {
  const o = v("el-upload");
  return _(), g("div", null, [k(o, { action: e.actionUrl, headers: e.headers, limit: 1, "show-file-list": false, accept: e.acceptFile, "on-success": a.uploadSuccess, "before-upload": a.beforeUpload }, { default: y(() => [S(e.$slots, "default")]), _: 3 }, 8, ["action", "headers", "accept", "on-success", "before-upload"])]);
}
const U = b(z, [["render", F]]);
export {
  U as default
};
