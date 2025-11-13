import { d as u, n as p, t as d, c as f, o as g, e as n } from "./index-DAdfXJ2i.js";
import { i as y } from "./index-BMoo9HBP.js";
import { f as h } from "./userinfo-BgcUdIqU.js";
import { a as s } from "./clientType-BhCLU4J5.js";
const C = { class: "bigcard-bg2" }, S = u({ __name: "mallusersourcepie", setup(_) {
  const { $t: r } = p();
  d(() => {
    i();
  });
  async function i() {
    var _a;
    const a = document.getElementById("idmallusersource"), t = y(a), c = (_a = await h("app_type", {})) == null ? void 0 : _a.data.map((e, o) => ({ name: s[e.name] || e.name, value: e.value, label: { show: o == 0 }, labelLine: { show: o == 0 } })), l = [];
    for (const e in s) l.push(s[e]);
    const m = { title: { text: r("welcome.welcome.userSourceRatio"), x: "center", textStyle: { fontSize: "15", fontWeight: "400", color: "#666666" } }, tooltip: { trigger: "item" }, legend: { orient: "vertical", bottom: 20, left: 0 }, series: [{ name: r("welcome.welcome.userSourceRatio"), top: 15, type: "pie", radius: ["50%", "70%"], data: c, itemStyle: { color: function(e) {
      return ["#5C81FD", "#41C2AE", "#F7255D", "#FCB13E", "#C4C7CF", "#e2e5eb"][e.dataIndex];
    } }, label: { show: true, formatter: function(e) {
      return e.percent.toFixed(0) + "%";
    } } }] };
    t.setOption(m);
  }
  return (a, t) => (g(), f("div", C, [...t[0] || (t[0] = [n("div", { class: "relative source-card-bg2", style: { "background-color": "#ffffff" } }, [n("div", { id: "idmallusersource", style: { width: "100%", height: "268px" } })], -1)])]));
} });
export {
  S as _
};
