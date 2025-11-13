import { _ as f } from "./base-show-pnQX27ct.js";
import { s as v } from "./useCompShowHooks-DgYh5gcW.js";
import { p as r, t as w, ap as g, _ as y, r as k, g as d, o as a, h as C, c as u, B as c, e as _, z as p } from "./index-DAdfXJ2i.js";
const D = v({ setup: (e, n, m) => {
  const t = r(e.setData.showSecond), s = r(false), l = r();
  w(() => {
    s.value = e.setData.show == "1", e.setData.show == "1" && i();
  }), g(() => {
    s.value = false;
  });
  function o() {
    s.value = false;
  }
  function i() {
    l.value = setInterval(() => {
      t.value > 0 ? t.value-- : (clearInterval(l.value), o());
    }, 1e3);
  }
  return { show: s, showSecond: t, onClickFn: o };
} }), S = { key: 0, class: "cu-modal show", style: { "z-index": "9999", overflow: "hidden" } }, b = { key: 1, class: "pd-splash-screen-details" }, $ = { class: "pd-splash-screen-jump-time" };
function z(e, n, m, t, s, l) {
  const o = k("el-image"), i = f;
  return a(), d(i, { styles: e.setData.styles, style: { "z-index": "9999", width: "100%", height: "100%", overflow: "hidden" } }, { default: C(() => [e.show ? (a(), u("div", S, [e.setData.imageUrl ? (a(), d(o, { key: 0, src: e.setData.imageUrl, fit: "fill", style: { "z-index": "9999", width: "100%", height: "750px", overflow: "hidden" } }, null, 8, ["src"])) : c("", true), e.setData.showClick == "1" ? (a(), u("view", b, "\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5")) : c("", true), _("div", { onClick: n[0] || (n[0] = (...h) => e.onClickFn && e.onClickFn(...h)) }, [_("span", $, p(e.$t("mall.pagedevise.jump")) + " " + p(e.showSecond), 1)])])) : c("", true)]), _: 1 }, 8, ["styles"]);
}
const B = y(D, [["render", z], ["__scopeId", "data-v-eb38f303"]]), U = Object.freeze(Object.defineProperty({ __proto__: null, default: B }, Symbol.toStringTag, { value: "Module" }));
export {
  U as _,
  B as a
};
