import { i as h, L as f } from "./index-BMoo9HBP.js";
import { _ as p, r as c, c as m, o as u, e as s, f as b, b as d, h as x, z as _ } from "./index-DAdfXJ2i.js";
const w = { props: { vData: { type: Object, default: () => ({ data: [], title: "" }) } }, data() {
  return {};
}, watch: { "vData.data": { handler: function() {
  this.$nextTick(() => {
    this.initChart();
  });
}, deep: true } }, mounted() {
}, methods: { initChart() {
  let i = h(document.getElementById("chart_id2")), e = { nameList: [], dataList: [] };
  this.vData.data && this.vData.data.map((t) => {
    e.nameList.push(t.spu_name), e.dataList.push(t.ct);
  });
  let o = e.nameList, r = e.dataList, n = [];
  for (let t = 0; t < e.nameList.length; t++) {
    let a = { name: e.nameList[t], color: "rgb(243,186,130)", value: r[t], itemStyle: { normal: { show: true, barBorderRadius: 10 }, emphasis: { shadowBlur: 15, shadowColor: "rgba(0, 0, 0, 0.1)" } } };
    n.push(a);
  }
  let l = { color: "rgb(243,186,130)", tooltip: { trigger: "item" }, grid: { borderWidth: 0, top: "5%", left: "2%", right: "2%", bottom: "0%", containLabel: true }, xAxis: [{ type: "value", axisTick: { show: false }, axisLine: { show: false }, splitLine: { show: false }, axisLabel: { show: false } }], yAxis: [{ type: "category", inverse: true, axisTick: { show: false }, axisLine: { show: false }, axisLabel: { show: true, inside: false, textStyle: { color: "#b3ccf8", fontSize: 13 }, formatter: function(t) {
    var a = t;
    return a.length > 10 && (a = a.substr(0, 10) + "..."), a;
  } }, data: o }, { type: "category", axisLine: { show: false }, axisTick: { show: false }, axisLabel: { show: true, inside: false, textStyle: { color: "#b3ccf8", fontSize: 13 }, formatter: (t) => `${t}` }, splitArea: { show: false }, splitLine: { show: false }, data: r.reverse() }], series: [{ name: "", type: "bar", zlevel: 2, barWidth: "13px", data: n, animationDuration: 1500, itemStyle: { color: new f(0, 0, 1, 1, [{ offset: 0, color: "#3861fb" }, { offset: 1, color: "#2fc0d2" }]) }, label: { normal: { color: "#b3ccf8", show: false, position: [0, "-15px"], textStyle: { fontSize: 13 }, formatter: (t, a) => t.name } } }] };
  i.setOption(l, true), window.addEventListener("resize", () => {
    i.resize();
  });
} } }, L = { class: "chart-item sub-chart-item" }, v = { class: "sub-content" }, g = { class: "sub-title" };
function y(i, e, o, r, n, l) {
  const t = c("DArrowRight"), a = c("el-icon");
  return u(), m("div", L, [s("div", v, [s("div", g, [s("span", null, [d(a, { color: "#4189f1", style: { "font-size": "14px", "line-height": "22px", "margin-right": "5px" } }, { default: x(() => [d(t)]), _: 1 })]), b(_(o.vData.title), 1)]), e[0] || (e[0] = s("div", { class: "sub-body" }, [s("div", { class: "chart-item" }, [s("div", { id: "chart_id2", class: "chart" })])], -1))])]);
}
const z = p(w, [["render", y], ["__scopeId", "data-v-9b50aef5"]]);
export {
  z as default
};
