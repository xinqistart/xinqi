import { d as x, I as b, p as y, r as l, c as o, o as s, e as m, b as t, h as a, B as v, z as p, F as w, v as k, f as C } from "./index-DAdfXJ2i.js";
import { g as B } from "./userinfo-BgcUdIqU.js";
const D = { style: { height: "100px", "margin-top": "5px", "background-color": "#def3fe", "border-radius": "15px" } }, N = { key: 0 }, V = { class: "jl-text-tips" }, F = ["src"], z = x({ __name: "malluserlist", setup(P) {
  const u = b(), r = y([]);
  g();
  function g() {
    B({ current: 1, size: 5, descs: "create_time" }).then((e) => {
      r.value = e.data.records;
    });
  }
  function _(e) {
    u.push(e);
  }
  return (e, i) => {
    const d = l("el-row"), c = l("el-col"), f = l("el-button");
    return s(), o("div", null, [m("div", D, [t(d, { align: "middle", justify: "center", style: { height: "100px", "padding-left": "10px" } }, { default: a(() => [t(c, { span: 16 }, { default: a(() => [t(d, { align: "middle", style: { "margin-left": "30px" } }, { default: a(() => [r.value.length == 0 ? (s(), o("div", N, [m("div", V, p(e.$t("welcome.welcome.notData")), 1)])) : v("", true), (s(true), o(w, null, k(r.value, (n, h) => (s(), o("img", { style: { "margin-left": "-15px" }, key: h, class: "user-image", src: n.headimgUrl ? n.headimgUrl : "https://gd-hbimg.huaban.com/604c9274421dab50b7413ce21d55e4d31fc453ae36a32-KsDMvK_fw1200webp" }, null, 8, F))), 128))]), _: 1 })]), _: 1 }), t(c, { span: 8, style: { "padding-right": "1rem", "text-align": "right" } }, { default: a(() => [t(f, { onClick: i[0] || (i[0] = (n) => _("/mall/user/userInfo")), type: "primary", style: { width: "6rem", height: "40px !important", "margin-top": "8px", border: "none", "border-radius": "30px !important" } }, { default: a(() => [C(p(e.$t("welcome.welcome.userManage")), 1)]), _: 1 })]), _: 1 })]), _: 1 })])]);
  };
} });
export {
  z as _
};
