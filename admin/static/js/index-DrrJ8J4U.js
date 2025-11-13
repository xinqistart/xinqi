import { ci as c, t as i, p as l, _ as f, g as u, o as m, h as _, e as d, a_ as p } from "./index-DAdfXJ2i.js";
const h = { name: "AvueIframe", props: { src: { type: String } }, setup() {
  c.configure({ showSpinner: false }), i(() => {
    o();
  });
  const a = l(null);
  function s() {
    c.start();
  }
  function t() {
    c.done();
  }
  function o() {
    s();
    let e = 3;
    const n = setInterval(() => {
      e--, e == 0 && (t(), clearInterval(n));
    }, 1e3);
    r();
  }
  function r() {
    const e = a, n = document.documentElement.clientHeight - 150;
    e.value && (e.value.style.height = `${n}px`, e.value.attachEvent ? e.value.attachEvent("onload", () => {
      t();
    }) : e.value.onload = () => {
      t();
    });
  }
  return { iframeRef: a, show: s, hide: t, load: o };
} }, v = ["src"];
function g(a, s, t, o, r, e) {
  const n = p;
  return m(), u(n, null, { default: _(() => [d("iframe", { src: t.src, class: "iframe", ref: "iframeRef" }, null, 8, v)]), _: 1 });
}
const I = f(h, [["render", g]]);
export {
  I as default
};
