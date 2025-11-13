import { A as b, U as D, R as x, t as k, aA as I, n as L, S as $, _ as S, r as a, c as B, o as O, e as n, g as R, B as U, h as i, f as C, z as f, b as s } from "./index-DAdfXJ2i.js";
import { i as z } from "./index-BMoo9HBP.js";
import { a as F } from "./useronline-CekuxQ4G.js";
import { a as _ } from "./clientType-BhCLU4J5.js";
const { $t: h } = L(), N = { setup() {
  const { proxy: t } = b(), r = D().userInfo, e = x({ userOnlineLoadData: true, statistics: { userOnlineCount: 0, userOnlineUpdateDate: "", userOnlineData: [] } });
  k(() => {
    c();
  });
  async function c() {
    if (e.userOnlineLoadData) {
      e.userOnlineLoadData = false, e.statistics.userOnlineUpdateDate = I().format("YYYY-MM-DD HH:mm:ss");
      let d = 0;
      e.statistics.userOnlineCount = 0, e.statistics.userOnlineData = [];
      const m = Object.keys(_).length;
      for (const o in _) F(o).then((l) => {
        const u = l.data;
        e.statistics.userOnlineData.push({ title: _[o], name: _[o], key: o, value: u }), d++, e.statistics.userOnlineCount = e.statistics.userOnlineCount + u, d === m && (e.statistics.userOnlineData.sort(function(p, g) {
          return g.value - p.value;
        }), w(), e.userOnlineLoadData = true);
      }).catch(() => {
        e.userOnlineLoadData = true;
      });
    } else t.$message.success(h("welcome.welcome.dataLoadiing"));
  }
  function w() {
    const d = document.getElementById("iduseronlinechart"), m = z(d), o = { title: { text: h("welcome.welcome.userOnlineChart"), x: "center", textStyle: { fontSize: "15", fontWeight: "400", color: "#666666" } }, legend: { orient: "vertical", bottom: 20, left: 0 }, tooltip: { trigger: "item" }, series: [{ name: h("welcome.welcome.userOnlineChart"), type: "pie", top: 15, radius: ["50%", "70%"], data: e.statistics.userOnlineData, itemStyle: { color: function(l) {
      return ["#5C81FD", "#41C2AE", "#F7255D", "#FCB13E", "#C4C7CF", "#828cc5"][l.dataIndex];
    } }, label: { show: true, formatter: function(l) {
      return l.percent.toFixed(0) + "%";
    } } }] };
    o && m.setOption(o);
  }
  return { ...$(e), userInfo: r, getStatistics: c };
} }, j = { class: "bigcard-bg2" }, E = { class: "flex justify-between items-center" }, M = { style: { float: "right", padding: "3px 0", "font-size": "15px", display: "flex", "align-items": "center" } }, V = { class: "data-view-content mt-[20px]" }, Y = { style: { "margin-bottom": "10px", "font-size": "15px", "text-align": "center", color: "#666666" } };
function A(t, r, e, c, w, d) {
  const m = a("Refresh"), o = a("el-icon"), l = a("el-tooltip"), u = a("el-col"), p = a("el-table-column"), g = a("el-table"), v = a("el-row"), y = a("el-card");
  return O(), B("div", j, [n("div", null, [c.userInfo.type == "1" || c.userInfo.type == "-1" ? (O(), R(y, { key: 0, shadow: "never", class: "box-card" }, { default: i(() => [n("div", E, [n("div", null, [r[0] || (r[0] = n("div", { class: "el-icon-user-solid" }, null, -1)), C(" " + f(t.$t("welcome.welcome.userOnlineCount")) + "\uFF1A" + f(t.statistics.userOnlineCount), 1)]), n("div", M, [C(f(t.statistics.userOnlineUpdateDate) + " ", 1), s(l, { content: t.$t("welcome.welcome.clickRefresh"), placement: "top" }, { default: i(() => [s(o, { onClick: c.getStatistics, style: { margin: "5px" } }, { default: i(() => [s(m)]), _: 1 }, 8, ["onClick"])]), _: 1 }, 8, ["content"])])]), n("div", V, [s(v, { span: 24, gutter: 10 }, { default: i(() => [s(u, { xs: 24, sm: 24, md: 12 }, { default: i(() => [...r[1] || (r[1] = [n("div", null, [n("div", null, [n("div", { id: "iduseronlinechart", style: { width: "100%", height: "250px", "border-right": "1px solid #eceef6" } })])], -1)])]), _: 1 }), s(u, { xs: 24, sm: 24, md: 12 }, { default: i(() => [n("div", null, [n("div", Y, f(t.$t("welcome.welcome.userOnlineRank")), 1), s(g, { data: t.statistics.userOnlineData, "default-sort": { prop: "value", order: "descending" }, style: { width: "100%" }, size: "small" }, { default: i(() => [s(p, { label: t.$t("welcome.welcome.rank"), align: "center", type: "index", width: "100" }, null, 8, ["label"]), s(p, { prop: "title", align: "center", label: t.$t("welcome.welcome.clientNum") }, null, 8, ["label"]), s(p, { prop: "value", align: "center", label: t.$t("welcome.welcome.num") }, null, 8, ["label"])]), _: 1 }, 8, ["data"])])]), _: 1 })]), _: 1 })])]), _: 1 })) : U("", true)])]);
}
const G = S(N, [["render", A], ["__scopeId", "data-v-baa51f3e"]]);
export {
  G as default
};
