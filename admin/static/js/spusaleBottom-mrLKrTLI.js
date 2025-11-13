import { i as p, L as u } from "./index-BMoo9HBP.js";
import { _ as m, r, c as b, o as x, e as s, f as w, b as c, h as f, z as _ } from "./index-DAdfXJ2i.js";
const v = { props: { vData: { type: Object, default: () => ({ data: [], title: "" }) } }, data() {
  return {};
}, watch: { "vData.data": { handler: function() {
  this.$nextTick(() => {
    this.initChart();
  });
}, deep: true } }, mounted() {
}, methods: { initChart() {
  let i = p(document.getElementById("chart_id3")), e = { nameList: [], dataList: [] };
  this.vData.data && this.vData.data.map((t) => {
    e.nameList.push(t.name || "\u672A\u77E5"), e.dataList.push(t.ct);
  });
  let o = e.nameList, n = e.dataList, l = [];
  for (let t = 0; t < e.nameList.length; t++) {
    let a = { name: e.nameList[t], color: "rgb(243,186,130)", value: n[t], itemStyle: { normal: { show: true, barBorderRadius: 10 }, emphasis: { shadowBlur: 15, shadowColor: "rgba(0, 0, 0, 0.1)" } } };
    l.push(a);
  }
  let d = { color: "rgb(243,186,130)", tooltip: { trigger: "item" }, grid: { borderWidth: 0, top: "5%", left: "2%", right: "2%", bottom: "0%", containLabel: true }, xAxis: [{ type: "value", axisTick: { show: false }, axisLine: { show: false }, splitLine: { show: false }, axisLabel: { show: false } }], yAxis: [{ type: "category", inverse: true, axisTick: { show: false }, axisLine: { show: false }, axisLabel: { show: true, inside: false, textStyle: { color: "#b3ccf8", fontSize: 13 }, formatter: function(t) {
    var a = t;
    return a.length > 10 && (a = a.substr(0, 10) + "..."), a;
  } }, data: o }, { type: "category", axisLine: { show: false }, axisTick: { show: false }, axisLabel: { show: true, inside: false, textStyle: { color: "#b3ccf8", fontSize: 13 } }, splitArea: { show: false }, splitLine: { show: false }, data: n.reverse() }], series: [{ name: "", type: "bar", zlevel: 2, barWidth: "13px", data: l, animationDuration: 1500, itemStyle: { color: new u(0, 0, 1, 1, [{ offset: 0, color: "#3861fb" }, { offset: 1, color: "#2fc0d2" }]) }, label: { normal: { color: "#b3ccf8", show: false, position: [0, "-15px"], textStyle: { fontSize: 13 }, formatter: (t, a) => t.name } } }] };
  i.setOption(d, true), window.addEventListener("resize", () => {
    i.resize();
  });
} } }, L = { class: "chart-item sub-chart-item" }, y = { class: "sub-content" }, g = { class: "sub-title", style: { "justify-content": "space-between", display: "flex" } };
function D(i, e, o, n, l, d) {
  const t = r("DArrowRight"), a = r("el-icon"), h = r("el-tooltip");
  return x(), b("div", L, [s("div", y, [s("div", g, [s("div", null, [s("span", null, [c(a, { color: "#4189f1", style: { "font-size": "14px", "line-height": "22px", "margin-right": "5px" } }, { default: f(() => [c(t)]), _: 1 })]), w(_(o.vData.title), 1)]), s("div", null, [c(h, { placement: "top", content: "\u6309\u5546\u54C1\u540D\u79F0\u7EDF\u8BA1,\u5982\u679C\u5546\u54C1\u540D\u79F0\u88AB\u4FEE\u6539,\u5219\u8BE5\u6570\u636E\u4E5F\u4F1A\u4FEE\u6539" }, { default: f(() => [...e[0] || (e[0] = [s("i", { class: "el-icon-warning-outline" }, null, -1)])]), _: 1 })])]), e[1] || (e[1] = s("div", { class: "sub-body" }, [s("div", { class: "chart-item" }, [s("div", { id: "chart_id3", class: "chart" })])], -1))])]);
}
const B = m(v, [["render", D], ["__scopeId", "data-v-f554be8c"]]);
export {
  B as default
};
