import { d as l, n as d, t as m, c as p, o as u, e as a } from "./index-DAdfXJ2i.js";
import { i as f } from "./index-BMoo9HBP.js";
import { b as h } from "./clientType-BhCLU4J5.js";
import { h as g } from "./orderinfo-BW26vGJU.js";
const y = { class: "bigcard-bg2" }, S = l({ __name: "ordersourcepie", setup(b) {
  const { $t: r } = d();
  m(() => {
    s();
  });
  async function s() {
    var _a;
    const n = document.getElementById("idordersource"), t = f(n), i = (_a = await g("app_type", {})) == null ? void 0 : _a.data.map((e, o) => ({ name: h[e.name] || e.name, value: e.value, label: { show: o == 0 }, labelLine: { show: o == 0 } })), c = { title: { text: r("welcome.welcome.orderSourceRatio"), x: "center", textStyle: { fontSize: "15", fontWeight: "400", color: "#666666" } }, tooltip: { trigger: "item" }, legend: { orient: "vertical", left: 0, bottom: 20 }, series: [{ name: r("welcome.welcome.orderSourceRatio"), type: "pie", top: 15, radius: ["50%", "70%"], itemStyle: { color: function(e) {
      return ["#5C81FD", "#41C2AE", "#F7255D", "#FCB13E", "#C4C7CF", "#a9c9b0"][e.dataIndex];
    } }, labelLine: { show: true, length: 10, length2: 20, lineStyle: { width: 1 } }, data: i, label: { show: true, formatter: function(e) {
      return e.percent.toFixed(0) + "%";
    } } }] };
    t.setOption(c);
  }
  return (n, t) => (u(), p("div", y, [...t[0] || (t[0] = [a("div", { class: "relative source-card-bg2", style: { "background-color": "#ffffff" } }, [a("div", { id: "idordersource", style: { width: "100%", height: "268px" } })], -1)])]));
} });
export {
  S as _
};
