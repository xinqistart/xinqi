import { d as M, R as V, aA as u, p as y, r as p, c, o as n, e as s, V as g, z as l, F as k, v as D, g as T, B, w, b as v, D as Y, h as b, f as C, _ as S } from "./index-DAdfXJ2i.js";
import { b as H } from "./largescreen-Cv8DzdZU.js";
const N = { class: "goods-and-shop-hot" }, O = { class: "card" }, z = { class: "card-header" }, A = { class: "card-column" }, I = { class: "card-content" }, F = { key: 0, class: "content" }, P = { class: "content-item-col" }, j = { class: "content-item-col" }, E = { class: "content-item-col" }, G = { key: 1 }, L = { class: "card-footer" }, R = { class: "time-select" }, U = M({ __name: "goodsAndShopHot", setup(q) {
  const o = V({ todayDate: "", data: [], today: 0, yesterday: 0, allCount: 0 });
  _();
  const d = y([{ name: "\u5546\u54C1\u540D\u79F0" }, { name: "\u5546\u54C1\u9500\u91CF" }, { name: "\u5546\u54C1\u91D1\u989D" }]), r = y({ spu: [], shopInfo: [] });
  function _(e = u().format("YYYY-MM-DD")) {
    o.todayDate = e;
    const t = { beginTime: u(e).startOf("day").format("YYYY-MM-DD 00:00:00"), endTime: u(e).startOf("day").format("YYYY-MM-DD 23:59:59") };
    H(t).then((i) => {
      r.value = i.data, o.data = i.data.spu;
    }).catch(() => {
    });
  }
  function f(e) {
    e === 0 ? (d.value = [{ name: "\u5546\u54C1\u540D\u79F0" }, { name: "\u5546\u54C1\u9500\u91CF" }, { name: "\u5546\u54C1\u91D1\u989D" }], o.data = r.value.spu) : (d.value = [{ name: "\u95E8\u5E97\u540D\u79F0" }, { name: "\u95E8\u5E97\u9500\u91CF" }, { name: "\u95E8\u5E97\u9500\u552E\u91D1\u989D" }], o.data = r.value.shopInfo);
  }
  return (e, t) => {
    const i = p("el-empty"), $ = p("el-date-picker"), h = p("el-button");
    return n(), c("div", N, [s("div", O, [s("div", z, [s("div", { class: g(["card-title card-title-left", { "card-title-cur": d.value[0].name == "\u5546\u54C1\u540D\u79F0" }]), onClick: t[0] || (t[0] = (a) => f(0)) }, l(e.$t("welcome.welcome.goodsHot")) + " TOP10 ", 3), s("div", { class: g(["card-title card-title-right", { "card-title-cur": d.value[0].name == "\u95E8\u5E97\u540D\u79F0" }]), onClick: t[1] || (t[1] = (a) => f(1)) }, l(e.$t("welcome.welcome.shopHot")) + " TOP10 ", 3)]), s("div", A, [(n(true), c(k, null, D(d.value, (a, m) => (n(), c("div", { key: m, class: "card-column-item" }, l(a.name || 0), 1))), 128))]), s("div", I, [o.data.length > 0 ? (n(), c("div", F, [(n(true), c(k, null, D(o.data, (a, m) => (n(), c("div", { key: m, class: "content-item" }, [s("span", P, l(a.name || "--"), 1), s("span", j, l(a.ct || 0), 1), s("span", E, l(a.ct || 0), 1)]))), 128))])) : (n(), c("div", G, [o.data.length == 0 ? (n(), T(i, { key: 0, "image-size": 88 })) : B("", true)]))]), s("div", L, [s("div", R, [v($, { modelValue: o.todayDate, "onUpdate:modelValue": t[2] || (t[2] = (a) => o.todayDate = a), clearable: false, editable: false, type: "date", onChange: _ }, null, 8, ["modelValue"])]), w(v(h, { class: "details-btn", type: "primary", onClick: t[3] || (t[3] = (a) => e.$router.push("/mall/goods/goodsspu")) }, { default: b(() => [C(l(e.$t("welcome.welcome.goodsManage")), 1)]), _: 1 }, 512), [[Y, d.value[0].name == "\u5546\u54C1\u540D\u79F0"]]), w(v(h, { class: "details-btn", type: "primary", onClick: t[4] || (t[4] = (a) => e.$router.push("/mall/shop/info")) }, { default: b(() => [C(l(e.$t("welcome.welcome.shopManage")), 1)]), _: 1 }, 512), [[Y, d.value[0].name == "\u95E8\u5E97\u540D\u79F0"]])])])]);
  };
} }), Q = S(U, [["__scopeId", "data-v-12b44fa9"]]);
export {
  Q as default
};
