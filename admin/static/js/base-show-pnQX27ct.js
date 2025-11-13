import { h as l } from "./goodsspu-DKL_9wDU.js";
import { _ as u, c as p, o as f, ai as g, x as m } from "./index-DAdfXJ2i.js";
function x(e, o) {
  return new Promise((t, a) => {
    l(e).then((s) => {
      const i = s.data.map((n) => n.id), r = JSON.parse(JSON.stringify(e));
      r.map((n, c) => {
        i.indexOf(n) === -1 && r.splice(c, 1);
      });
      const d = new Array(r.length);
      s.data.map((n) => {
        const c = r.indexOf(n.id);
        d[c] = n;
      }), t(d);
    }).catch((s) => {
      a(s);
    });
  });
}
function _(e) {
  return e && e.indexOf("gradient") !== -1 ? { backgroundImage: e, backgroundColor: "transparent" } : e ? { backgroundColor: e, backgroundImage: "none" } : {};
}
function O(e, o, t) {
  return e[o] = e.splice(t, 1, e[o])[0], e;
}
function B(e) {
  return e = e.replace(/-(\w)/g, function(o, t) {
    return t.toUpperCase();
  }), e.replace(".vue", "");
}
function C(e) {
  return /^http[s]?:\/\/.*/.test(e) ? e : "/src/views/mall/pagedevise/devise/assets" + e;
}
const y = { props: { styles: { type: Object, default: () => ({ backgroundColor: "" }) } }, setup() {
  return { setBgStyle: _ };
} };
function b(e, o, t, a, s, i) {
  return f(), p("div", { style: m([{ position: "relative", display: "block" }, [t.styles, { ...a.setBgStyle(t.styles.backgroundColor) }]]) }, [g(e.$slots, "default")], 4);
}
const h = u(y, [["render", b]]), w = Object.freeze(Object.defineProperty({ __proto__: null, default: h }, Symbol.toStringTag, { value: "Module" }));
export {
  h as _,
  w as b,
  O as d,
  x as g,
  C as i,
  _ as s,
  B as t
};
