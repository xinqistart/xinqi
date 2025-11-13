import { R as s } from "./videojs-player.esm-CCSu0y3h.js";
import { _ as l, c, o as m, b as d, e as p, r as f, z as u } from "./index-DAdfXJ2i.js";
const _ = { components: { VideoPlayer: s }, props: { msgBody: { type: Object, default: () => {
} } }, data() {
  return { modal: "", content: "" };
}, methods: { formatFileSize(t) {
  let e = ["k", "KB", "MB", "GB", "TB"];
  for (; t >= 1024 && e.length > 1; ) t /= 1024, e.shift();
  return Number(t.toFixed(2)) + e[0];
}, formatDurationTime(t) {
  t = Math.round(t);
  var e = parseInt(t / 3600), r = parseInt((t - e * 3600) / 60);
  r < 10 && (r = "0" + r);
  var o = parseInt((t - e * 3600) % 60);
  o < 10 && (o = "0" + o), e < 10 && (e = e == 0 ? "" : `0${e}:`);
  var a = e + r + ":" + o;
  return t > 0 ? a : "00:00";
} } }, h = { class: "text-[12px]" };
function v(t, e, r, o, a, i) {
  const n = f("video-player");
  return m(), c("div", null, [d(n, { style: { width: "300px", height: "200px", display: "flex", "justify-content": "center", "align-items": "center" }, controls: "", src: r.msgBody.videoUrl }, null, 8, ["src"]), p("div", h, u(i.formatFileSize(r.msgBody.videoSize)), 1)]);
}
const x = l(_, [["render", v]]);
export {
  x as default
};
