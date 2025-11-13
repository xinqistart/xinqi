import { a3 as c, aO as s, aP as a, aQ as d, _ as p, c as f, o as u } from "./index-DAdfXJ2i.js";
const l = { name: "authredirect", setup() {
  const t = c().query, e = window.location.href;
  let o = encodeURIComponent(window.location.origin + "/#/authredirect");
  if (a == "development" && (o = encodeURIComponent(d + "/#/authredirect")), e.indexOf("LOGIN") > 0) {
    if (e.indexOf("WX") > 0 || e.indexOf("QQ") > 0) {
      const n = t.state.split("_")[0], i = t.code;
      window.opener.location.href = `${window.location.origin}/#/login?type=${n}&code=${i}&redirectUri=${o}&time=` + (/* @__PURE__ */ new Date()).getTime();
    }
    window.close();
  } else if (e.indexOf("BIND") > 0 && (e.indexOf("WX") > 0 || e.indexOf("QQ") > 0)) {
    const n = t.state.split("_")[0], i = t.code;
    s.request("put", "/upms/user/thridparty/bind", { params: { type: n, code: i, redirectUri: o } }).then(() => {
      window.close();
    });
  }
}, methods: {} };
function m(r, t, e, o, n, i) {
  return u(), f("div");
}
const h = p(l, [["render", m]]);
export {
  h as default
};
