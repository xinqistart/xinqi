import { o as Y } from "./largescreen-Cv8DzdZU.js";
import { R as f, aA as i, S as h, _, r as A, c as g, o as p, e as t, b as m, f as v, z as a, h as b } from "./index-DAdfXJ2i.js";
const w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAmCAYAAACh1knUAAAAAXNSR0IArs4c6QAAAdJJREFUWEftmLsvRFEQxn/jEYSOXqNSE42EkFDxB3gVlBQSGtQ0EiGhpCD8AVQEIdHI9hoaPZ14LYaRuyKbXfece08iYk93s99889157dwjOB5VrQIeHeE5WLWIPLnYiAvIMP9PiKq2A6NAM1CRF6k1YCdJaoABYDyP7wW4ADZE5Mx++0yNqi4CU7nnAunKAB3ArWsqI1w9cAq0FrFTYElEpkVVh4AtBwfbwKSI3Dhg7eUagGVg0AE/bELsbVscwAbJAtdAXCdYhzUClY68GRPy7GHgyOsNy5oQy9Ovn5KQ/BT8mYicAOeBCqgN6CzG9VNE3oA6EXkIIURVa4A7oKwQX1xq5oADG74pxdgE7/kYE/NJIpLSt595XET82FKgS0J858gucByoWLuA/iTFau1bKyK+e2pBX9GqeZ+0fVeAwxQ1+N202/aZJBEJ5N+NptQ1vl3jFtcAqLjUrEdbeABXn18BY0mK1drXPhltYU59VNUWaRsFif59N4GjQAPN2nckSURSR8GHIK5GfLhSYUtCCs2R12KVnCrWfsZvlppLoMnPLjj6yoTMAAvBqf0IZ02IDZo9oNfPNhh6H+jLXdSUAxM/3BgF8xoRfd0YAasi8voOl+XZJC2cI4sAAAAASUVORK5CYII=", C = { setup() {
  const s = f({ statistics: { todayDate: "", today: 0, yesterday: 0, qoq: 0 } });
  r();
  function o(e, d) {
    return d === 0 ? e : Number(((e - d) / d).toFixed(2)) * 1;
  }
  async function r(e = i().format("YYYY-MM-DD")) {
    s.statistics.todayDate = e;
    const d = { beginTime: i(e).startOf("day").format("YYYY-MM-DD 00:00:00"), endTime: i(e).startOf("day").format("YYYY-MM-DD 23:59:59") }, l = { beginTime: i(e).add(-1, "day").startOf("day").format("YYYY-MM-DD 00:00:00"), endTime: i(e).add(-1, "day").startOf("day").format("YYYY-MM-DD 23:59:59") }, n = await Y(d);
    s.statistics.today = n.data.sum;
    const c = await Y(l);
    s.statistics.yesterday = c.data.sum, s.statistics.qoq = o(n.data.sum, c.data.sum);
  }
  return { ...h(s), getStatistics: r, jl_task: w };
} }, E = { class: "bigcard-bg" }, D = { class: "card-bg" }, N = { class: "flex justify-between items-center" }, q = { class: "time-select" }, V = { class: "card-content" }, B = { class: "card-tittle" }, I = { class: "turnover" }, R = { class: "chain" }, M = { class: "subheading-1" }, S = { class: "subheading-one" }, U = { class: "subheading-two" }, k = { class: "subheading-1" }, K = { class: "subheading-one" }, O = { class: "subheading-three" };
function F(s, o, r, e, d, l) {
  const n = A("el-date-picker"), c = A("ArrowRight"), y = A("el-icon");
  return p(), g("div", E, [t("div", D, [t("div", N, [t("div", q, [m(n, { modelValue: s.statistics.todayDate, "onUpdate:modelValue": o[0] || (o[0] = (u) => s.statistics.todayDate = u), clearable: false, editable: false, type: "date", onChange: e.getStatistics }, null, 8, ["modelValue", "onChange"])]), t("div", null, [t("div", { class: "details-btn", onClick: o[1] || (o[1] = (u) => s.$router.push("/mall/order/orderinfo")) }, [v(a(s.$t("welcome.welcome.orderMannage")) + " ", 1), m(y, null, { default: b(() => [m(c)]), _: 1 })])])]), t("div", V, [t("div", null, [t("div", B, a(s.$t("welcome.welcome.orderToday")), 1), t("div", I, [t("text", null, a(s.statistics.today || 0), 1)])])])]), t("div", R, [t("div", M, [t("div", S, a(s.$t("welcome.welcome.orderYesterday")), 1), t("div", U, a(s.statistics.yesterday || 0), 1)]), t("div", k, [t("div", K, a(s.$t("welcome.welcome.qoq")), 1), t("div", O, a(s.statistics.qoq || 0) + "%", 1)])])]);
}
const Q = _(C, [["render", F], ["__scopeId", "data-v-6c2ccd3d"]]);
export {
  Q as default
};
