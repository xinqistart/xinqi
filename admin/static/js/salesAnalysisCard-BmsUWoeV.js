import { i as D } from "./index-BMoo9HBP.js";
import { _ as S, n as C, q as d, p as k, t as A, E as w, r as h, c as L, o as T, e as a, z as b, b as r, h as z, u } from "./index-DAdfXJ2i.js";
const N = { class: "sales-analysis-card" }, q = { class: "card-header" }, B = { class: "card-title" }, I = { class: "card-title right-title" }, R = { class: "card-body" }, V = { class: "chart-section" }, E = { class: "table-section" }, F = { __name: "salesAnalysisCard", props: { leftTitle: { type: String, required: true }, rightTitle: { type: String, required: true }, chartData: { type: Array, default: () => [] }, tableData: { type: Array, default: () => [] } }, setup(l) {
  const { $t: o } = C(), _ = o("bigscreen.bigscreen.ranking"), f = o("bigscreen.bigscreen.shopName"), m = o("bigscreen.bigscreen.count"), s = l, y = d(() => [...s.chartData].sort((t, e) => e.ct - t.ct).slice(0, 5).map((t) => t.name)), g = d(() => [...s.chartData].sort((t, e) => e.ct - t.ct).slice(0, 5).map((t) => t.ct)), v = d(() => [...s.tableData].sort((t, e) => e.ct - t.ct).slice(0, 5).map((t, e) => ({ ...t, rank: e + 1 }))), c = k(null);
  let n = null;
  const p = () => {
    c.value && (n || (n = D(c.value)), n.setOption({ grid: { left: 30, right: 10, top: 30, bottom: 80 }, xAxis: { type: "category", data: y.value, axisLabel: { color: "#666666", fontSize: 12 } }, yAxis: { type: "value", axisLabel: { color: "#666666", fontSize: 12 } }, series: [{ type: "bar", barWidth: "30%", data: g.value, itemStyle: { color: "#5C81FD", borderRadius: [4, 4, 0, 0] }, label: { show: true, position: "top", color: "#666666", fontSize: 12, formatter: ({ value: t }) => t || 0 } }] }));
  };
  return A(() => {
    p();
  }), w(() => s.chartData, () => {
    p();
  }, { deep: true }), (t, e) => {
    const i = h("el-table-column"), x = h("el-table");
    return T(), L("div", N, [a("div", q, [a("span", B, b(l.leftTitle), 1), a("span", I, b(l.rightTitle), 1)]), a("div", R, [a("div", V, [a("div", { ref_key: "chartRef", ref: c, class: "echart", style: { height: "100%" } }, null, 512)]), e[0] || (e[0] = a("div", { class: "divider" }, null, -1)), a("div", E, [r(x, { data: v.value, style: { width: "100%" } }, { default: z(() => [r(i, { type: "index", label: u(_), width: "100" }, null, 8, ["label"]), r(i, { prop: "name", label: u(f) }, null, 8, ["label"]), r(i, { prop: "ct", label: u(m) }, null, 8, ["label"])]), _: 1 }, 8, ["data"])])])]);
  };
} }, W = S(F, [["__scopeId", "data-v-306634ee"]]);
export {
  W as default
};
