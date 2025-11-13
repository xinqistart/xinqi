import { _ as f, r as o, c as u, o as l, b as n, h as s, e as a, z as d, g as x, B as v, f as b } from "./index-DAdfXJ2i.js";
const y = { props: { picUrl: { type: String }, item: { type: Object, default: () => {
} }, disabled: { type: Boolean, default: false } }, setup(c, t) {
  function e() {
    t.emit("removeIndex");
  }
  return { removeIndex: e };
} }, g = { class: "mb-[5px]" }, h = { class: "px-[5px]" }, k = { class: "text-xs h-[34px] text-line-2 mb-[10px]" }, B = { class: "flex justify-end" };
function C(c, t, e, i, N, V) {
  const r = o("el-image"), _ = o("el-tooltip"), m = o("el-button"), p = o("el-card");
  return l(), u("div", g, [n(p, { shadow: "never", "body-style": "padding: 0;" }, { default: s(() => [n(r, { src: e.picUrl, class: "w-full h-[140px]" }, null, 8, ["src"]), a("div", h, [n(_, { effect: "dark", content: e.item.name, placement: "top-start" }, { default: s(() => [a("div", k, d(e.item.name), 1)]), _: 1 }, 8, ["content"]), a("div", B, [e.disabled ? v("", true) : (l(), x(m, { key: 0, link: "", size: "small", type: "danger", onClick: t[0] || (t[0] = (w) => i.removeIndex()) }, { default: s(() => [b(d(c.$t("commons.removeLabel")), 1)]), _: 1 }))])])]), _: 1 })]);
}
const j = f(y, [["render", C]]);
export {
  j as _
};
