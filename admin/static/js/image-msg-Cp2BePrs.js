import { _ as r, c as s, o, b as c, r as a } from "./index-DAdfXJ2i.js";
const n = { props: { msgBody: { type: Object, default: () => {
} } }, data() {
  return {};
}, methods: {} };
function l(i, p, e, u, d, m) {
  const t = a("el-image");
  return o(), s("view", null, [c(t, { mode: "aspectFit", style: { width: "140px", height: "140px" }, src: e.msgBody.sourcePicture.url, "preview-teleported": true, "preview-src-list": [e.msgBody.sourcePicture.url] }, null, 8, ["src", "preview-src-list"])]);
}
const g = r(n, [["render", l]]);
export {
  g as default
};
