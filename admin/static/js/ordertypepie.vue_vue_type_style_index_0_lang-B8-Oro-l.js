import { d as i, n as m, t as d, c as p, o as w, e as n } from "./index-DAdfXJ2i.js";
import { i as y } from "./index-BMoo9HBP.js";
import { h as f } from "./orderinfo-BW26vGJU.js";
const u = { class: "bigcard-bg2" }, v = i({ __name: "ordertypepie", setup(g) {
  const { $t: e } = m();
  d(() => {
    a();
  });
  async function a() {
    var _a;
    const c = document.getElementById("idordertype"), t = y(c), l = (_a = await f("order_type", { isPay: "1" })) == null ? void 0 : _a.data.map((o, r) => ({ name: o.name == "0" ? e("welcome.welcome.orderType0") : o.name == "1" ? e("welcome.welcome.orderType1") : o.name == "2" ? e("welcome.welcome.orderType2") : o.name == "3" ? e("welcome.welcome.orderType3") : o.name, value: o.value, label: { show: r == 0 }, labelLine: { show: r == 0 } }));
    e("welcome.welcome.orderType0"), e("welcome.welcome.orderType1"), e("welcome.welcome.orderType2"), e("welcome.welcome.orderType3");
    const s = { title: { text: e("welcome.welcome.orderTypeRatio"), x: "center", textStyle: { fontSize: "15", fontWeight: "400", color: "#666666" } }, tooltip: { trigger: "item" }, legend: { orient: "vertical", bottom: 20, left: 0 }, series: [{ name: e("welcome.welcome.orderTypeRatio"), type: "pie", top: 15, radius: ["50%", "70%"], data: l, itemStyle: { color: function(o) {
      return ["#5C81FD", "#41C2AE", "#F7255D", "#FCB13E"][o.dataIndex];
    } }, label: { show: true, formatter: function(o) {
      return o.percent.toFixed(0) + "%";
    } } }] };
    t.setOption(s);
  }
  return (c, t) => (w(), p("div", u, [...t[0] || (t[0] = [n("div", { class: "relative source-card-bg2", style: { "background-color": "#ffffff" } }, [n("div", { id: "idordertype", style: { width: "100%", height: "268px" } })], -1)])]));
} });
export {
  v as _
};
