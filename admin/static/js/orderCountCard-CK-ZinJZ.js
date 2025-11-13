import { _ as g, n as C, r as i, c as p, o as b, e as t, z as e, f, b as a, u as n, h as w } from "./index-DAdfXJ2i.js";
const k = { class: "order-count-card" }, x = { class: "card-header" }, y = { class: "card-title left-title" }, N = { class: "card-body" }, S = { class: "card-section left" }, V = { class: "count" }, B = { class: "order-btn" }, L = { class: "card-section right" }, A = { class: "amount" }, I = { class: "amount-btn" }, R = { __name: "orderCountCard", props: { title: { type: String, default: "\u8BA2\u5355\u7EDF\u8BA1" }, orderCount: { type: [Number, String], default: 0 }, amount: { type: [Number, String], default: 0 } }, emits: ["viewClick"], setup(s, { emit: r }) {
  const { $t: o } = C(), d = o("bigscreen.bigscreen.view"), l = o("bigscreen.bigscreen.orderCount"), _ = o("bigscreen.bigscreen.amount"), u = r, m = () => {
    u("viewClick");
  };
  return (z, c) => {
    const h = i("ArrowRight"), v = i("el-icon");
    return b(), p("div", k, [t("div", x, [t("span", y, e(s.title), 1), t("span", { class: "card-title right-title", onClick: m }, [f(e(n(d)) + " ", 1), a(v, null, { default: w(() => [a(h)]), _: 1 })])]), t("div", N, [t("div", S, [t("div", V, e(s.orderCount || 0), 1), t("div", B, e(n(l)), 1)]), c[0] || (c[0] = t("div", { class: "divider" }, null, -1)), t("div", L, [t("div", A, e(s.amount || 0), 1), t("div", I, e(n(_)), 1)])])]);
  };
} }, E = g(R, [["__scopeId", "data-v-897e8a52"]]);
export {
  E as default
};
