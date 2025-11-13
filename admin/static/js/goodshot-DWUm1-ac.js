import { b as D } from "./largescreen-Cv8DzdZU.js";
import { d as Y, R as x, aA as i, r as n, j as k, c as r, o as d, e, B as w, b as c, F as C, v as M, w as V, g as j, h as _, z as p, f as B, _ as N } from "./index-DAdfXJ2i.js";
const T = { class: "bigcard-bg" }, F = { class: "goods-card" }, O = { class: "flex justify-between" }, $ = { class: "time-select" }, z = { class: "card-icon mt-[8px]" }, I = { style: { height: "230px", overflow: "auto", "border-radius": "8px" } }, S = { class: "grid grid-cols-5 gap-2 mt-[10px]" }, U = { class: "truncate" }, H = { key: 0, class: "flex justify-center", style: { "margin-top": "-230px" } }, q = { class: "chain" }, A = { class: "subheading-1" }, E = { class: "subheading-one" }, G = Y({ __name: "goodshot", setup(J) {
  const a = x({ todayDate: "", data: [], today: 0, yesterday: 0, allCount: 0 });
  m();
  function m(o = i().format("YYYY-MM-DD")) {
    a.todayDate = o;
    const s = { beginTime: i(o).startOf("day").format("YYYY-MM-DD 00:00:00"), endTime: i(o).startOf("day").format("YYYY-MM-DD 23:59:59") };
    D(s).then((l) => {
      a.data = l.data.spu;
    }).catch(() => {
    });
  }
  return (o, s) => {
    const l = n("el-date-picker"), u = n("FontIcon"), f = n("el-avatar"), g = n("el-empty"), y = n("el-button"), h = n("el-col"), v = k("tippy");
    return d(), r("div", T, [e("div", F, [e("div", O, [e("div", $, [c(l, { modelValue: a.todayDate, "onUpdate:modelValue": s[0] || (s[0] = (t) => a.todayDate = t), clearable: false, editable: false, type: "date", onChange: m }, null, 8, ["modelValue"])]), e("div", z, [c(u, { class: "card-iconfont", icon: "jl_gift" })])]), e("div", I, [e("div", S, [(d(true), r(C, null, M(a.data, (t, b) => V((d(), j(f, { style: { "background-color": "#ffffff", "border-radius": "8px" }, key: b, size: 60, title: t.ct, src: t.picUrls ? JSON.parse(t.picUrls)[0] : "", shape: "square" }, { default: _(() => [e("div", U, p(t.name), 1)]), _: 2 }, 1032, ["title", "src"])), [[v, { content: t.name + "(\u9500\u91CF:" + t.ct + ")" }]])), 128))])]), a.data.length == 0 ? (d(), r("div", H, [c(g, { "image-size": 88 })])) : w("", true)]), e("div", q, [e("div", A, [e("div", E, p(o.$t("welcome.welcome.goodsHot")) + " TOP10 ", 1), s[2] || (s[2] = e("div", { class: "subheading-three" }, null, -1))]), c(h, { span: 8, style: { "text-align": "right" } }, { default: _(() => [c(y, { class: "details-btn", type: "primary", onClick: s[1] || (s[1] = (t) => o.$router.push("/mall/goods/goodsspu")) }, { default: _(() => [B(p(o.$t("welcome.welcome.goodsManage")), 1)]), _: 1 })]), _: 1 })])]);
  };
} }), R = N(G, [["__scopeId", "data-v-d8240f1e"]]);
export {
  R as default
};
