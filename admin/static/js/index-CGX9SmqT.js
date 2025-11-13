import { aO as C, A as g, R as A, aA as r, p as b, t as $, S as _, _ as M, r as x, c as v, o as k, b as o, h as i, e as l, z as Y, a_ as S } from "./index-DAdfXJ2i.js";
import { i as c } from "./index-BMoo9HBP.js";
import { b as I } from "./wxapp-BACewdCT.js";
function O(a) {
  return C.request("get", "/weixin/wxmpsummary/usersummary", { params: a });
}
function U(a) {
  return C.request("get", "/weixin/wxmpsummary/usercumulate", { params: a });
}
function E(a) {
  return C.request("get", "/weixin/wxmpsummary/interfacesummary", { params: a });
}
const V = { setup() {
  const { proxy: a } = g(), e = A({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, datePickerOptions: { disabledDate(t) {
    return t >= new Date(/* @__PURE__ */ new Date() - 3600 * 1e3 * 24);
  }, shortcuts: void 0, cellClassName: void 0 }, startDate: r().add(-7, "days").format("YYYY-MM-DD"), endDate: r().add(-1, "days").format("YYYY-MM-DD"), dateValues: void 0, xAxisData: [], seriesData1: [], seriesData2: [], seriesData3: [], seriesData4: [], seriesData5: [], seriesData6: [], seriesData7: [] }), f = b(null);
  $(() => {
    y(), e.dateValues = [r().add(-7, "days").format("YYYY-MM-DD"), r().add(-1, "days").format("YYYY-MM-DD")];
  });
  function u(t, s) {
    return t ? s.name.indexOf(t) !== -1 : true;
  }
  function y() {
    I({ appType: "2" }).then((t) => {
      e.treeWxAppData = t.data, e.treeWxAppData && e.treeWxAppData.length > 0 && w({ id: e.treeWxAppData[0].id });
    });
  }
  function w(t) {
    e.appId != t.id && (a.$nextTick(() => {
      f.value.setCurrentKey(t.id);
    }), e.appId = t.id, e.startDate = r().add(-7, "days").format("YYYY-MM-DD"), e.endDate = r().add(-1, "days").format("YYYY-MM-DD"), e.dateValues = [r().add(-7, "days").format("YYYY-MM-DD"), r().add(-1, "days").format("YYYY-MM-DD")], e.xAxisData = [], e.seriesData1 = [], e.seriesData2 = [], e.seriesData3 = [], e.seriesData4 = [], e.seriesData5 = [], e.seriesData6 = [], e.seriesData7 = [], m());
  }
  function h() {
    const t = new Date(e.dateValues[0]), s = new Date(e.dateValues[1]);
    if (r(s).diff(r(t), "day") > 6) return a.$message.error(a.$t("wxmp.wxsummary.selectIntervalWithin7Days")), false;
    e.startDate = r(t).format("YYYY-MM-DD"), e.endDate = r(s).format("YYYY-MM-DD"), e.xAxisData = [], e.seriesData1 = [], e.seriesData2 = [], e.seriesData5 = [], e.seriesData6 = [], m();
  }
  function m() {
    const t = r(e.endDate).diff(r(e.startDate), "day");
    for (let s = 0; s <= t; s++) e.xAxisData.push(r(e.startDate).add(s, "days").format("YYYY-MM-DD")), e.seriesData1.push(0), e.seriesData2.push(0), e.seriesData5.push(0), e.seriesData6.push(0);
    O({ appId: e.appId, startDate: e.startDate, endDate: e.endDate }).then((s) => {
      s.data ? e.xAxisData.forEach((p, n) => {
        s.data.forEach((d) => {
          d.refDate.indexOf(p) >= 0 && (e.seriesData5[n] = e.seriesData5[n] + d.newUser, e.seriesData6[n] = e.seriesData6[n] + d.cancelUser);
        });
      }) : (e.seriesData5 = [], e.seriesData6 = []), c(document.getElementById("userSummaryChart")).setOption({ title: { text: a.$t("wxmp.wxsummary.userGrowthData") }, color: ["#67C23A", "#e5323e"], legend: { data: [a.$t("wxmp.wxsummary.newUsers"), a.$t("wxmp.wxsummary.unfollowedUsers")] }, tooltip: {}, xAxis: { data: e.xAxisData }, yAxis: {}, series: [{ name: a.$t("wxmp.wxsummary.newUsers"), type: "bar", label: { normal: { show: true } }, barGap: 0, data: e.seriesData5 }, { name: a.$t("wxmp.wxsummary.unfollowedUsers"), type: "bar", label: { normal: { show: true } }, data: e.seriesData6 }] });
    }), U({ appId: e.appId, startDate: e.startDate, endDate: e.endDate }).then((s) => {
      s.data ? s.data.forEach((p, n) => {
        e.seriesData7[n] = p.cumulateUser;
      }) : e.seriesData7 = [], c(document.getElementById("userCumulateChart")).setOption({ title: { text: a.$t("wxmp.wxsummary.totalUserStatistics") }, legend: { data: [a.$t("wxmp.wxsummary.totalUserCount")] }, xAxis: { type: "category", data: e.xAxisData }, yAxis: { type: "value" }, series: [{ name: a.$t("wxmp.wxsummary.totalUserCount"), data: e.seriesData7, type: "line", smooth: true, label: { normal: { show: true } } }] });
    }), E({ appId: e.appId, startDate: e.startDate, endDate: e.endDate }).then((s) => {
      s.data.forEach((n, d) => {
        e.seriesData1[d] = n.callbackCount, e.seriesData2[d] = n.maxTimeCost, e.seriesData3[d] = n.totalTimeCost, e.seriesData4[d] = n.failCount;
      }), c(document.getElementById("interfaceSummaryChart")).setOption({ title: { text: a.$t("wxmp.wxsummary.interfaceAnalysisData") }, color: ["#67C23A", "#e5323e"], legend: { data: [a.$t("wxmp.wxsummary.passiveRepliesCount"), a.$t("wxmp.wxsummary.failedAttemptsCount")] }, tooltip: {}, xAxis: { data: e.xAxisData }, yAxis: {}, series: [{ name: a.$t("wxmp.wxsummary.passiveRepliesCount"), type: "bar", label: { normal: { show: true } }, barGap: 0, data: e.seriesData1 }, { name: a.$t("wxmp.wxsummary.failedAttemptsCount"), type: "bar", label: { normal: { show: true } }, data: e.seriesData4 }] }), c(document.getElementById("interfaceSummaryChart2")).setOption({ title: { text: a.$t("wxmp.wxsummary.interfaceAnalysisData") }, color: ["#E6A23C", "#165dff"], legend: { data: [a.$t("wxmp.wxsummary.maxResponseTime"), a.$t("wxmp.wxsummary.totalResponseTime")] }, tooltip: {}, xAxis: { data: e.xAxisData }, yAxis: {}, series: [{ name: a.$t("wxmp.wxsummary.maxResponseTime"), type: "bar", label: { normal: { show: true } }, data: e.seriesData2 }, { name: a.$t("wxmp.wxsummary.totalResponseTime"), type: "bar", label: { normal: { show: true } }, data: e.seriesData3 }] });
    });
  }
  return { ..._(e), filterNode: u, getWxAppListF: y, nodeClick: w, changeDate: h, getSummary: m, tree: f };
} }, W = { class: "execution", style: { "border-top": "solid 1px #eceef6" } }, N = { style: { display: "flex", "justify-content": "center" } }, P = { class: "clearfix" }, R = { class: "demonstration" };
function B(a, e, f, u, y, w) {
  const h = x("avue-tree"), m = x("el-card"), t = x("el-col"), s = x("el-date-picker"), D = x("el-row"), p = S;
  return k(), v("div", W, [o(p, null, { default: i(() => [o(D, { span: 24, gutter: 10 }, { default: i(() => [o(t, { xs: 24, sm: 24, md: 3 }, { default: i(() => [o(m, { shadow: "never" }, { header: i(() => [l("div", N, [l("span", null, Y(a.$t("wxmp.wxsummary.appName")), 1)])]), default: i(() => [o(h, { option: a.treeOption, style: { "margin-top": "-1px" }, data: a.treeWxAppData, props: a.treeWxAppProps, "filter-node-method": u.filterNode, "node-key": "id", "default-expand-all": "", ref: "tree", onNodeClick: u.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 }), o(t, { xs: 24, sm: 24, md: 21, style: { "border-left": "solid 1px #eceef6" } }, { default: i(() => [o(m, { class: "box-card", style: { "padding-left": "10px", "box-shadow": "none" } }, { header: i(() => [l("div", P, [l("span", R, Y(a.$t("wxmp.wxsummary.timeRange")), 1), o(s, { shortcuts: a.datePickerOptions && a.datePickerOptions.shortcuts, "disabled-date": a.datePickerOptions && a.datePickerOptions.disabledDate, "cell-class-name": a.datePickerOptions && a.datePickerOptions.cellClassName, modelValue: a.dateValues, "onUpdate:modelValue": e[0] || (e[0] = (n) => a.dateValues = n), type: "daterange", onChange: u.changeDate, "range-separator": a.$t("commons.to"), "start-placeholder": a.$t("wxmp.wxsummary.startDate"), "end-placeholder": a.$t("wxmp.wxsummary.endDate") }, null, 8, ["shortcuts", "disabled-date", "cell-class-name", "modelValue", "onChange", "range-separator", "start-placeholder", "end-placeholder"])])]), default: i(() => [o(D, null, { default: i(() => [o(t, { span: 12 }, { default: i(() => [...e[1] || (e[1] = [l("div", { id: "userSummaryChart", style: { width: "80%", height: "340px" } }, null, -1)])]), _: 1 }), o(t, { span: 12 }, { default: i(() => [...e[2] || (e[2] = [l("div", { id: "userCumulateChart", style: { width: "80%", height: "340px" } }, null, -1)])]), _: 1 }), o(t, { span: 12 }, { default: i(() => [...e[3] || (e[3] = [l("div", { id: "interfaceSummaryChart", style: { width: "80%", height: "340px" } }, null, -1)])]), _: 1 }), o(t, { span: 12 }, { default: i(() => [...e[4] || (e[4] = [l("div", { id: "interfaceSummaryChart2", style: { width: "80%", height: "340px" } }, null, -1)])]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 })]);
}
const j = M(V, [["render", B], ["__scopeId", "data-v-d1812d55"]]);
export {
  j as default
};
