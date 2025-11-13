import { d as k, n as y, p, R as C, E as v, t as O, c, o as s, e as t, V as _, z as d, F as g, v as D, g as B, B as N, r as T, _ as $ } from "./index-DAdfXJ2i.js";
const j = { class: "goods-and-shop-hot" }, z = { class: "card" }, P = { class: "card-header" }, V = { class: "card-column" }, E = { class: "card-content" }, F = { key: 0, class: "content" }, H = { class: "content-item-col" }, I = { class: "content-item-col" }, S = { class: "content-item-col" }, w = { key: 1 }, x = k({ __name: "goodsHot", props: { bottomData1: { type: Object, default: () => ({ title: "\u8BA2\u5355\u91CF\u5546\u54C1\u6392\u884CTOP10" }) }, bottomData2: { type: Object, default: () => ({ title: "\u8BA2\u5355\u91CF\u5546\u54C1\u6392\u884CTOP10" }) }, bottomData3: { type: Object, default: () => ({ title: "\u8BA2\u5355\u91CF\u5546\u54C1\u6392\u884CTOP10" }) } }, setup(l) {
  const { $t: u } = y(), r = p(1), e = l, a = C({ data: [] }), f = p([{ name: u("bigscreen.bigscreen.goodsName") }, { name: u("bigscreen.bigscreen.goodsSales") }, { name: u("bigscreen.bigscreen.goodsAmount") }]);
  v(() => e.bottomData1, () => {
    a.data = e.bottomData1.data, n(1);
  }, { immediate: true, deep: true }), v(() => e.bottomData2, () => {
    a.data = e.bottomData2.data, n(1);
  }, { immediate: true, deep: true }), v(() => e.bottomData3, () => {
    a.data = e.bottomData3.data, n(1);
  }, { immediate: true, deep: true }), O(() => {
    n(1);
  });
  function n(m) {
    r.value = m, m === 1 ? a.data = e.bottomData1.data : m === 2 ? a.data = e.bottomData2.data : a.data = e.bottomData3.data;
  }
  return (m, i) => {
    const h = T("el-empty");
    return s(), c("div", j, [t("div", z, [t("div", P, [t("div", { class: _(["card-title card-title-left", { "card-title-cur": r.value == 1 }]), onClick: i[0] || (i[0] = (o) => n(1)) }, d(l.bottomData1.title), 3), t("div", { class: _(["card-title", { "card-title-cur": r.value == 2 }]), onClick: i[1] || (i[1] = (o) => n(2)) }, d(l.bottomData2.title), 3), t("div", { class: _(["card-title card-title-right", { "card-title-cur": r.value == 3 }]), onClick: i[2] || (i[2] = (o) => n(3)) }, d(l.bottomData3.title), 3)]), t("div", V, [(s(true), c(g, null, D(f.value, (o, b) => (s(), c("div", { key: b, class: "card-column-item" }, d(o.name || "--"), 1))), 128))]), t("div", E, [a.data.length > 0 ? (s(), c("div", F, [(s(true), c(g, null, D(a.data, (o, b) => (s(), c("div", { key: b, class: "content-item" }, [t("span", H, d(o.name || o.spu_name || "--"), 1), t("span", I, d(o.ct || "--"), 1), t("span", S, d(o.amount || "--"), 1)]))), 128))])) : (s(), c("div", w, [a.data.length == 0 ? (s(), B(h, { key: 0, "image-size": 88 })) : N("", true)]))])])]);
  };
} }), G = $(x, [["__scopeId", "data-v-91d7934b"]]);
export {
  G as default
};
