import n from "./index-DrrJ8J4U.js";
import { A as c, R as s, S as a, _ as p, r as m, c as l, o as i, b as d } from "./index-DAdfXJ2i.js";
const u = { components: { IFrame: n }, setup() {
  const { proxy: e } = c(), t = s({ src: "", height: document.documentElement.clientHeight - 94.5 + "px;", loading: true });
  return (() => {
    const o = window.location.href.replace("/#" + e.$route.path, "") + "/doc.html";
    t.src = o;
  })(), { ...a(t) };
} };
function _(e, t, o, f, h, x) {
  const r = m("IFrame");
  return i(), l("div", null, [d(r, { src: e.src }, null, 8, ["src"])]);
}
const I = p(u, [["render", _]]);
export {
  I as default
};
