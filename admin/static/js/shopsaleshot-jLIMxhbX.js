import { b as Y } from "./largescreen-Cv8DzdZU.js";
import { d as w, R as k, aA as _, r as n, j as C, c as l, o as c, e, B as M, b as d, F as V, v as j, h as p, w as h, f as m, z as i, _ as N } from "./index-DAdfXJ2i.js";
const T = { class: "bigcard-bg" }, $ = { class: "goods-card" }, B = { class: "flex justify-between" }, F = { class: "time-select" }, I = { class: "card-icon mt-[8px]" }, S = { class: "mt-[5px]", style: { height: "230px", overflow: "auto", "border-radius": "8px" } }, z = { class: "flex items-center" }, O = { class: "truncate flex" }, H = { class: "px-1 ml-[5px] mt-[-10px]" }, U = { class: "flex-1 truncate" }, q = { class: "text-[12px] text-[#555555] font-bold" }, A = { key: 0, class: "flex justify-center", style: { "margin-top": "-230px" } }, E = { class: "chain" }, L = { class: "subheading-1" }, P = { class: "subheading-one" }, R = w({ __name: "shopsaleshot", setup(G) {
  const a = k({ todayDate: "", data: [], today: 0, yesterday: 0, allCount: 0 });
  f();
  function f(s = _().format("YYYY-MM-DD")) {
    a.todayDate = s;
    const o = { beginTime: _(s).startOf("day").format("YYYY-MM-DD 00:00:00"), endTime: _(s).startOf("day").format("YYYY-MM-DD 23:59:59") };
    Y(o).then((r) => {
      a.data = r.data.shopInfo;
    }).catch(() => {
    });
  }
  return (s, o) => {
    const r = n("el-date-picker"), v = n("FontIcon"), y = n("el-avatar"), g = n("el-empty"), x = n("el-button"), b = n("el-col"), u = C("tippy");
    return c(), l("div", T, [e("div", $, [e("div", B, [e("div", F, [d(r, { modelValue: a.todayDate, "onUpdate:modelValue": o[0] || (o[0] = (t) => a.todayDate = t), clearable: false, editable: false, type: "date", onChange: f }, null, 8, ["modelValue"])]), e("div", I, [d(v, { class: "card-iconfont", icon: "jl_store-04" })])]), e("div", S, [(c(true), l(V, null, j(a.data, (t, D) => (c(), l("div", { key: D, class: "mt-[5px]" }, [e("div", z, [e("div", null, [d(y, { size: 50, src: t.imgUrl, shape: "square", style: { "background-color": "#ffffff", "border-radius": "8px" } }, { default: p(() => [h((c(), l("div", O, [m(i(t.name), 1)])), [[u, { content: t.name }]])]), _: 2 }, 1032, ["src"])]), e("div", H, [h((c(), l("div", U, [m(i(t.name), 1)])), [[u, { content: t.name }]]), e("div", q, i(s.$t("mall.goodsspu.saleNum")) + ": " + i(t.ct), 1)])])]))), 128))]), a.data.length == 0 ? (c(), l("div", A, [d(g, { "image-size": 88 })])) : M("", true)]), e("div", E, [e("div", L, [e("div", P, i(s.$t("welcome.welcome.shopHot")) + " TOP10 ", 1), o[2] || (o[2] = e("div", { class: "subheading-three" }, null, -1))]), d(b, { span: 8, style: { "text-align": "right" } }, { default: p(() => [d(x, { class: "details-btn", type: "primary", onClick: o[1] || (o[1] = (t) => s.$router.push("/mall/shop/info")) }, { default: p(() => [m(i(s.$t("welcome.welcome.shopManage")), 1)]), _: 1 })]), _: 1 })])]);
  };
} }), Q = N(R, [["__scopeId", "data-v-31b5f3fe"]]);
export {
  Q as default
};
