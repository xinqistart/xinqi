import { A as Y, R as y, aA as t, n as D, S as h, _ as M, r as u, c as _, o as x, e as n, z as g, b as p, h as b, f as R } from "./index-DAdfXJ2i.js";
import { s as v } from "./largescreen-Cv8DzdZU.js";
import { e as w, i as C } from "./index-BMoo9HBP.js";
const { $t: S } = D(), $ = { setup() {
  const { proxy: a } = Y(), e = y({ dateRange: void 0, dateRangeBefore: [t().add(-6, "day").startOf("day").format("YYYY-MM-DD"), t().format("YYYY-MM-DD")], dataCount: [], dataSum: [], xAxisData: [] });
  e.dateRange = [t().add(-6, "day").startOf("day").format("YYYY-MM-DD"), t().format("YYYY-MM-DD")], r();
  function l(o) {
    return { beginTime: t(o).startOf("day").format("YYYY-MM-DD 00:00:00"), endTime: t(o).add(1, "day").startOf("day").format("YYYY-MM-DD 00:00:00") };
  }
  async function r() {
    const o = t(e.dateRange[1]).diff(t(e.dateRange[0]), "day");
    if (o > 6) {
      a.$message.error(S("welcome.welcome.orderRange7")), e.dateRange = e.dateRangeBefore;
      return;
    }
    e.dateRangeBefore = e.dateRange, e.dataCount = [], e.dataSum = [], e.xAxisData = [];
    const d = o + 1, i = e.dateRange[0];
    for (let s = 0; s < d; s++) {
      const m = t(i).add(s, "day").format("YYYY-MM-DD"), f = await v(l(m));
      e.dataCount.push(f.data.count || 0), e.dataSum.push(f.data.sum || 0), e.xAxisData.push(m);
    }
    await a.$nextTick(() => {
      c();
    });
  }
  function c() {
    const o = document.getElementById("idordersales");
    if (!w) return;
    const d = C(o), s = { legend: { data: ["\u9500\u91CF", "\u91D1\u989D"], right: 60 }, xAxis: { data: e.xAxisData }, yAxis: { type: "value" }, grid: { left: "2%", right: "2%", bottom: "12%", containLabel: true }, tooltip: { trigger: "axis" }, series: [{ color: "#848e9e", data: e.dataCount, name: "\u9500\u91CF", type: "line", showSymbol: false, smooth: true }, { color: "#7492ff", data: e.dataSum, name: "\u91D1\u989D", type: "line", showSymbol: false, smooth: true }] };
    d.setOption(s);
  }
  return { ...h(e), getStatistics: r };
} }, A = { class: "bigcard-bg" }, B = { class: "ordersales-card" }, k = { class: "flex justify-between align-center", style: { "margin-bottom": "20px" } }, O = { style: { "margin-left": "20px", color: "#666666" } }, V = { class: "time-select" }, N = { class: "card-icon" };
function I(a, e, l, r, c, o) {
  const d = u("el-date-picker"), i = u("el-button");
  return x(), _("div", A, [n("div", B, [n("div", k, [n("div", O, g(a.$t("welcome.welcome.orderSalesMap")), 1), n("div", V, [p(d, { onChange: r.getStatistics, modelValue: a.dateRange, "onUpdate:modelValue": e[0] || (e[0] = (s) => a.dateRange = s), clearable: false, editable: false, type: "daterange", format: "YYYY-MM-DD", "value-format": "YYYY-MM-DD" }, null, 8, ["onChange", "modelValue"])]), n("div", N, [p(i, { class: "details-btn", type: "primary", onClick: e[1] || (e[1] = (s) => a.$router.push("/mall/order/orderinfo")) }, { default: b(() => [R(g(a.$t("welcome.welcome.orderMannage")), 1)]), _: 1 })])]), e[2] || (e[2] = n("div", { id: "idordersales", style: { width: "100%", height: "268px" } }, null, -1))])]);
}
const L = M($, [["render", I], ["__scopeId", "data-v-c74aec31"]]);
export {
  L as default
};
