import { d as m, n as i, t as w, c as d, o as u, e as a } from "./index-DAdfXJ2i.js";
import { i as f } from "./index-BMoo9HBP.js";
import { f as p } from "./userinfo-BgcUdIqU.js";
const x = { class: "bigcard-bg2" }, b = m({ __name: "mallusersexpie", setup(g) {
  const { $t: e } = i();
  w(() => {
    s();
  });
  async function s() {
    var _a;
    const l = document.getElementById("idmallusersex"), t = f(l), c = (_a = await p("sex", {})) == null ? void 0 : _a.data.map((o, n) => ({ name: o.name == "0" ? e("welcome.welcome.userSexUnknow") : o.name == "1" ? e("welcome.welcome.male") : o.name == "2" ? e("welcome.welcome.female") : o.name ? o.name : e("welcome.welcome.notSet"), value: o.value, label: { show: n == 0 }, labelLine: { show: n == 0 } }));
    e("welcome.welcome.userSexUnknow"), e("welcome.welcome.male"), e("welcome.welcome.female"), e("welcome.welcome.notSet");
    const r = { title: { text: e("welcome.welcome.userGenderRatio"), x: "center", textStyle: { fontSize: "15", fontWeight: "400", color: "#666666" } }, tooltip: { trigger: "item" }, legend: { orient: "vertical", bottom: 20, left: 0 }, series: [{ name: e("welcome.welcome.userGenderRatio"), type: "pie", top: 15, radius: ["50%", "70%"], data: c, itemStyle: { color: function(o) {
      return ["#5C81FD", "#41C2AE", "#F7255D", "#FCB13E", "#C4C7CF"][o.dataIndex];
    } }, label: { show: true, formatter: function(o) {
      return o.percent.toFixed(0) + "%";
    } } }] };
    t.setOption(r);
  }
  return (l, t) => (u(), d("div", x, [...t[0] || (t[0] = [a("div", { class: "relative source-card-bg2", style: { "background-color": "#ffffff" } }, [a("div", { id: "idmallusersex", style: { width: "100%", height: "268px" } })], -1)])]));
} });
export {
  b as _
};
