import { aO as h, A as S, R as N, aA as i, be as A, t as j, S as R, _ as z, r as c, j as q, c as U, o as I, w as F, g as C, h as r, e as f, b as t, f as k, z as D, D as $, F as B, v as E, a_ as K } from "./index-DAdfXJ2i.js";
import { i as P } from "./index-BMoo9HBP.js";
function L(e) {
  return h.request("get", "/weixin/wxmasummary/userportrait", { params: e });
}
function X(e) {
  return h.request("get", "/weixin/wxmasummary/dailyvisittrend", { params: e });
}
function G(e) {
  return h.request("get", "/weixin/wxmasummary/monthlyvisittrend", { params: e });
}
function H(e) {
  return h.request("get", "/weixin/wxmasummary/weeklyvisittrend", { params: e });
}
function J(e) {
  return h.request("get", "/weixin/wxmasummary/dailysummary", { params: e });
}
function Q(e) {
  return h.request("get", "/weixin/wxmasummary/dailyretaininfo", { params: e });
}
function Z(e) {
  return h.request("get", "/weixin/wxmasummary/monthlyretaininfo", { params: e });
}
function _(e) {
  return h.request("get", "/weixin/wxmasummary/weeklyretaininfo", { params: e });
}
const ee = { props: { wxApp: { type: Object } }, setup(e) {
  const { proxy: n } = S(), x = /* @__PURE__ */ new Date();
  x.setTime(x.getTime() - 3600 * 1e3 * 24);
  const a = N({ headers: { Authorization: "Bearer " + A().access_token }, loading: false, tabVal: "1", pickerOptions: { shortcuts: void 0, cellClassName: void 0, firstDayOfWeek: 1, disabledDate(l) {
    return l.getTime() > x.getTime();
  } }, retainInfoForm: { selectType: "date", selectDate: i(x).format("YYYYMMDD"), refDate: "" }, visitTrendForm: { selectType: "date", dailySummaryDate: i(/* @__PURE__ */ new Date()).subtract(1, "days").format("YYYYMMDD"), selectDate: i(/* @__PURE__ */ new Date()).subtract(1, "days").format("YYYYMMDD"), sharePv: 0, shareUv: 0, visitTotal: 0, data: [], refDate: "" }, userPortraitForm: { selectType: "Activity", selectDateType: 0, selectDate: i(/* @__PURE__ */ new Date()).subtract(1, "days").format("YYYYMMDD"), refDate: "" }, dataObj: {} });
  j(() => {
    Y(), O(a.tabVal);
  });
  function O(l) {
    a.tabVal = l, a.tabVal == "1" ? g() : a.tabVal == "2" ? T() : a.tabVal == "3" && V();
  }
  function V() {
    a.loading = true;
    const l = i(a.userPortraitForm.selectDate).subtract(a.userPortraitForm.selectDateType, "days").format("YYYYMMDD"), o = { appId: e.wxApp.id, startDate: l, endDate: a.userPortraitForm.selectDate };
    L(o).then((d) => {
      const u = d.data;
      a.userPortraitForm.refDate = u.refDate;
      const y = { ages: n.$t("wxma.wxapp.age"), province: n.$t("wxma.wxapp.province"), city: n.$t("wxma.wxapp.city"), platforms: n.$t("wxma.wxapp.deviceType"), devices: n.$t("wxma.wxapp.deviceModel"), genders: n.$t("wxma.wxapp.gender") };
      for (const w in u.visitUv) {
        const v = [];
        for (const b in u.visitUv[w]) v.push({ name: b, value: u.visitUv[w][b] });
        a.dataObj[w] = { title: y[w], dataUv: v };
      }
      for (const w in u.visitUvNew) {
        const v = [];
        for (const b in u.visitUvNew[w]) v.push({ name: b, value: u.visitUvNew[w][b] });
        a.dataObj[w].dataUvNew = v;
      }
      a.loading = false, m();
    }).catch(() => {
      a.loading = false;
    });
  }
  function m() {
    if (a.userPortraitForm.selectType == "New") for (const l in a.dataObj) M(a.dataObj[l].dataUvNew, a.dataObj[l].title);
    else for (const l in a.dataObj) M(a.dataObj[l].dataUv, a.dataObj[l].title);
  }
  function Y() {
    a.loading = true;
    const l = { appId: e.wxApp.id, startDate: a.visitTrendForm.dailySummaryDate, endDate: a.visitTrendForm.dailySummaryDate };
    J(l).then((o) => {
      const d = o.data[0];
      a.visitTrendForm.dailySummaryDate = d.refDate, a.visitTrendForm.visitTotal = d.visitTotal, a.visitTrendForm.sharePv = d.sharePv, a.visitTrendForm.shareUv = d.shareUv, a.loading = false;
    }).catch(() => {
      a.loading = false;
    });
  }
  function g() {
    if (a.loading = true, a.visitTrendForm.selectType == "date") {
      const l = { appId: e.wxApp.id, startDate: i(a.visitTrendForm.selectDate).format("YYYYMMDD"), endDate: i(a.visitTrendForm.selectDate).format("YYYYMMDD") };
      X(l).then((o) => {
        a.visitTrendForm.data = o.data, a.loading = false;
      }).catch(() => {
        a.loading = false;
      });
    } else if (a.visitTrendForm.selectType == "month") {
      const l = i().month();
      i(a.visitTrendForm.selectDate).month() == l && (a.visitTrendForm.selectDate = i(a.visitTrendForm.selectDate).subtract(1, "months").format("YYYYMMDD"));
      const o = { appId: e.wxApp.id, startDate: i(a.visitTrendForm.selectDate).startOf("month").format("YYYYMMDD"), endDate: i(a.visitTrendForm.selectDate).endOf("month").format("YYYYMMDD") };
      G(o).then((d) => {
        a.visitTrendForm.data = d.data, a.loading = false;
      }).catch(() => {
        a.loading = false;
      });
    } else {
      const l = i().isoWeekday(1).isoWeek();
      i(a.retainInfoForm.selectDate).isoWeekday(1).isoWeek() == l && (a.retainInfoForm.selectDate = i(a.retainInfoForm.selectDate).isoWeekday(1).subtract(1, "isoWeek").format("YYYYMMDD"));
      const o = { appId: e.wxApp.id, startDate: i(a.retainInfoForm.selectDate).isoWeekday(1).startOf("isoWeek").format("YYYYMMDD"), endDate: i(a.retainInfoForm.selectDate).isoWeekday(1).endOf("isoWeek").format("YYYYMMDD") };
      H(o).then((d) => {
        a.visitTrendForm.data = d.data, a.loading = false;
      }).catch(() => {
        a.loading = false;
      });
    }
  }
  function T() {
    if (a.loading = true, a.retainInfoForm.selectType == "date") {
      const l = { appId: e.wxApp.id, startDate: a.retainInfoForm.selectDate, endDate: a.retainInfoForm.selectDate };
      Q(l).then((o) => {
        p(o.data, n.$t("wxma.wxapp.day"));
      }).catch(() => {
        a.loading = false;
      });
    } else if (a.retainInfoForm.selectType == "week") {
      const l = i().isoWeekday(1).isoWeek();
      i(a.retainInfoForm.selectDate).isoWeekday(1).isoWeek() == l && (a.retainInfoForm.selectDate = i(a.retainInfoForm.selectDate).isoWeekday(1).subtract(1, "isoWeek").format("YYYYMMDD"));
      const o = { appId: e.wxApp.id, startDate: i(a.retainInfoForm.selectDate).isoWeekday(1).startOf("isoWeek").format("YYYYMMDD"), endDate: i(a.retainInfoForm.selectDate).isoWeekday(1).endOf("isoWeek").format("YYYYMMDD") };
      _(o).then((d) => {
        p(d.data, n.$t("wxma.wxapp.week"));
      }).catch(() => {
        a.loading = false;
      });
    } else {
      const l = i().month();
      i(a.retainInfoForm.selectDate).month() == l && (a.retainInfoForm.selectDate = i(a.retainInfoForm.selectDate).subtract(1, "months").format("YYYYMMDD"));
      const o = { appId: e.wxApp.id, startDate: i(a.retainInfoForm.selectDate).startOf("month").format("YYYYMMDD"), endDate: i(a.retainInfoForm.selectDate).endOf("month").format("YYYYMMDD") };
      Z(o).then((d) => {
        p(d.data, n.$t("wxma.wxapp.month"));
      }).catch(() => {
        a.loading = false;
      });
    }
  }
  function M(l, o) {
    const d = document.getElementById("userPortraitChart" + o), u = P(d), y = { legend: { top: "5%", type: "scroll", left: "center" }, tooltip: { trigger: "item", formatter: "{a} <br/>{b} : {c} ({d}%)" }, series: [{ name: o, type: "pie", radius: [50, 100], center: ["50%", "50%"], roseType: "radius", itemStyle: { borderRadius: 5 }, label: { show: false }, emphasis: { label: { show: true } }, data: l }] };
    y && u.setOption(y), l.loading = false;
  }
  function p(l, o) {
    a.retainInfoForm.refDate = l.refDate;
    const d = [], u = [], y = [];
    for (const s in l.visitUv) s == "0" ? d.push(n.$t("wxma.wxapp.current") + o + n.$t("buttons.hsadd")) : d.push(s + o + n.$t("wxma.wxapp.after")), u.push(l.visitUv[s]);
    for (const s in l.visitUvNew) y.push(l.visitUv[s]);
    const w = document.getElementById("retainInfoChart"), v = P(w), b = { legend: { icon: "roundRect", data: [n.$t("wxma.wxapp.activeRetention"), n.$t("wxma.wxapp.newRetention")] }, tooltip: { trigger: "axis" }, xAxis: { type: "category", data: "proxy.$" }, yAxis: { name: l.refDate, type: "value" }, series: [{ name: n.$t("wxma.wxapp.activeRetention"), data: u, type: "line", smooth: true }, { name: n.$t("wxma.wxapp.newRetention"), data: y, type: "line", smooth: true }] };
    v.setOption(b), a.loading = false;
  }
  return { ...R(a), getDailySummary: Y, handleTabClick: O, getVisitTrend: g, getRetainInfoData: T, changeUserPortraitType: m, getUserPortraitData: V };
} }, ae = { class: "clearfix" }, te = ["id"];
function le(e, n, x, a, O, V) {
  const m = c("el-form-item"), Y = c("el-date-picker"), g = c("el-form"), T = c("el-tab-pane"), M = c("el-tabs"), p = c("el-option"), l = c("el-select"), o = c("el-table-column"), d = c("el-table"), u = c("el-col"), y = c("el-row"), w = c("el-card"), v = K, b = q("loading");
  return I(), U("div", null, [F((I(), C(v, null, { default: r(() => [f("div", null, [t(g, { inline: true }, { default: r(() => [t(m, { label: e.$t("wxma.wxapp.cumulativeOverview") }, null, 8, ["label"]), t(m, { label: e.$t("wxma.wxapp.endDate") }, { default: r(() => [t(Y, { shortcuts: e.pickerOptions && e.pickerOptions.shortcuts, "disabled-date": e.pickerOptions && e.pickerOptions.disabledDate, "cell-class-name": e.pickerOptions && e.pickerOptions.cellClassName, size: "small", onChange: a.getDailySummary, clearable: false, modelValue: e.visitTrendForm.dailySummaryDate, "onUpdate:modelValue": n[0] || (n[0] = (s) => e.visitTrendForm.dailySummaryDate = s), align: "right", format: "YYYYMMDD", placeholder: e.$t("wxma.wxapp.startDate") }, null, 8, ["shortcuts", "disabled-date", "cell-class-name", "onChange", "modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), t(m, { label: e.$t("wxma.wxapp.totalUsers") }, { default: r(() => [k(D(e.visitTrendForm.visitTotal), 1)]), _: 1 }, 8, ["label"]), t(m, { label: e.$t("wxma.wxapp.forwardCount") }, { default: r(() => [k(D(e.visitTrendForm.sharePv), 1)]), _: 1 }, 8, ["label"]), t(m, { label: e.$t("wxma.wxapp.forwarders") }, { default: r(() => [k(D(e.visitTrendForm.shareUv), 1)]), _: 1 }, 8, ["label"])]), _: 1 }), t(M, { modelValue: e.tabVal, "onUpdate:modelValue": n[1] || (n[1] = (s) => e.tabVal = s), onTabChange: a.handleTabClick }, { default: r(() => [t(T, { name: "1" }, { label: r(() => [f("span", null, D(e.$t("wxma.wxapp.visitTrend")), 1)]), _: 1 }), t(T, { name: "2" }, { label: r(() => [f("span", null, D(e.$t("wxma.wxapp.retentionData")), 1)]), _: 1 }), t(T, { name: "3" }, { label: r(() => [f("span", null, D(e.$t("wxma.wxapp.userPortrait")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabChange"]), n[10] || (n[10] = f("br", null, null, -1)), F(f("div", null, [t(g, { inline: true }, { default: r(() => [t(m, null, { default: r(() => [t(l, { size: "small", style: { width: "100px" }, modelValue: e.visitTrendForm.selectType, "onUpdate:modelValue": n[2] || (n[2] = (s) => e.visitTrendForm.selectType = s), placeholder: e.$t("wxma.wxapp.pleaseSelect"), onChange: a.getVisitTrend }, { default: r(() => [t(p, { label: e.$t("wxma.wxapp.dailyTrend"), value: "date" }, null, 8, ["label"]), t(p, { label: e.$t("wxma.wxapp.monthlyTrend"), value: "month" }, null, 8, ["label"]), t(p, { label: e.$t("wxma.wxapp.weeklyTrend"), value: "week" }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])]), _: 1 }), t(m, null, { default: r(() => [t(Y, { shortcuts: e.pickerOptions && e.pickerOptions.shortcuts, "disabled-date": e.pickerOptions && e.pickerOptions.disabledDate, "cell-class-name": e.pickerOptions && e.pickerOptions.cellClassName, size: "small", onChange: a.getVisitTrend, clearable: false, type: e.visitTrendForm.selectType, modelValue: e.visitTrendForm.selectDate, "onUpdate:modelValue": n[3] || (n[3] = (s) => e.visitTrendForm.selectDate = s), align: "right", format: "YYYYMMDD", placeholder: e.$t("wxma.wxapp.pleaseSelect") }, null, 8, ["shortcuts", "disabled-date", "cell-class-name", "onChange", "type", "modelValue", "placeholder"])]), _: 1 }), t(m, null, { default: r(() => [k(D(e.visitTrendForm.refDate), 1)]), _: 1 })]), _: 1 }), t(d, { data: e.visitTrendForm.data, border: "", style: { width: "100%" } }, { default: r(() => [t(o, { prop: "refDate", label: e.$t("wxma.wxapp.date") }, null, 8, ["label"]), t(o, { prop: "sessionCnt", label: e.$t("wxma.wxapp.openCount") }, null, 8, ["label"]), t(o, { prop: "visitPv", label: e.$t("wxma.wxapp.visitCount") }, null, 8, ["label"]), t(o, { prop: "visitUv", label: e.$t("wxma.wxapp.visitorCount") }, null, 8, ["label"]), t(o, { prop: "visitUvNew", label: e.$t("wxma.wxapp.newUserCount") }, null, 8, ["label"]), t(o, { prop: "stayTimeUv", label: e.$t("wxma.wxapp.avgStayTime") }, null, 8, ["label"]), t(o, { prop: "stayTimeSession", label: e.$t("wxma.wxapp.avgVisitTime") }, null, 8, ["label"]), t(o, { prop: "visitDepth", label: e.$t("wxma.wxapp.avgVisitDepth") }, null, 8, ["label"])]), _: 1 }, 8, ["data"]), n[8] || (n[8] = f("div", { id: "visitTrendChart", style: { width: "100%", height: "400px" } }, null, -1))], 512), [[$, e.tabVal == "1"]]), F(f("div", null, [t(g, { inline: true }, { default: r(() => [t(m, null, { default: r(() => [t(l, { size: "small", modelValue: e.retainInfoForm.selectType, "onUpdate:modelValue": n[4] || (n[4] = (s) => e.retainInfoForm.selectType = s), placeholder: e.$t("wxma.wxapp.pleaseSelect"), onChange: a.getRetainInfoData, style: { width: "100px" } }, { default: r(() => [t(p, { label: e.$t("wxma.wxapp.dayRetention"), value: "date" }, null, 8, ["label"]), t(p, { label: e.$t("wxma.wxapp.monthRetention"), value: "month" }, null, 8, ["label"]), t(p, { label: e.$t("wxma.wxapp.weekRetention"), value: "week" }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])]), _: 1 }), t(m, null, { default: r(() => [t(Y, { shortcuts: e.pickerOptions && e.pickerOptions.shortcuts, "disabled-date": e.pickerOptions && e.pickerOptions.disabledDate, "cell-class-name": e.pickerOptions && e.pickerOptions.cellClassName, size: "small", clearable: false, onChange: a.getRetainInfoData, type: e.retainInfoForm.selectType, modelValue: e.retainInfoForm.selectDate, "onUpdate:modelValue": n[5] || (n[5] = (s) => e.retainInfoForm.selectDate = s), align: "right", format: "YYYYMMDD", placeholder: e.$t("wxma.wxapp.startDate") }, null, 8, ["shortcuts", "disabled-date", "cell-class-name", "onChange", "type", "modelValue", "placeholder"])]), _: 1 }), t(m, null, { default: r(() => [k(D(e.retainInfoForm.refDate), 1)]), _: 1 })]), _: 1 }), n[9] || (n[9] = f("div", { id: "retainInfoChart", style: { width: "100%", height: "400px" } }, null, -1))], 512), [[$, e.tabVal == "2"]]), F(f("div", null, [t(g, { inline: true }, { default: r(() => [t(m, null, { default: r(() => [t(l, { size: "small", style: { width: "100px" }, modelValue: e.userPortraitForm.selectDateType, "onUpdate:modelValue": n[6] || (n[6] = (s) => e.userPortraitForm.selectDateType = s), placeholder: e.$t("wxma.wxapp.pleaseSelect"), onChange: a.getUserPortraitData }, { default: r(() => [t(p, { label: e.$t("wxma.wxapp.lastDay"), value: 0 }, null, 8, ["label"]), t(p, { label: e.$t("wxma.wxapp.last7Days"), value: 6 }, null, 8, ["label"]), t(p, { label: e.$t("wxma.wxapp.last30Days"), value: 29 }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])]), _: 1 }), t(m, null, { default: r(() => [t(l, { size: "small", modelValue: e.userPortraitForm.selectType, "onUpdate:modelValue": n[7] || (n[7] = (s) => e.userPortraitForm.selectType = s), placeholder: e.$t("wxma.wxapp.pleaseSelect"), style: { width: "100px" }, onChange: a.changeUserPortraitType }, { default: r(() => [t(p, { label: e.$t("wxma.wxapp.activeUsers"), value: "Activity" }, null, 8, ["label"]), t(p, { label: e.$t("wxma.wxapp.newUsers"), value: "New" }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])]), _: 1 }), t(m, null, { default: r(() => [k(D(e.userPortraitForm.refDate), 1)]), _: 1 })]), _: 1 }), (I(true), U(B, null, E(e.dataObj, (s, W) => (I(), C(w, { class: "box-card", key: W, style: { "margin-bottom": "20px" }, shadow: "never" }, { header: r(() => [f("div", ae, [f("span", null, D(s.title), 1)])]), default: r(() => [t(y, { gutter: 20 }, { default: r(() => [t(u, { span: 12 }, { default: r(() => [f("div", { id: "userPortraitChart" + s.title, style: { width: "100%", height: "300px" } }, null, 8, te)]), _: 2 }, 1024), t(u, { span: 12 }, { default: r(() => [F(t(d, { data: s.dataUvNew, height: "300", style: { width: "100%" } }, { default: r(() => [t(o, { prop: "name", label: s.title }, null, 8, ["label"]), t(o, { prop: "value", label: e.$t("wxma.wxapp.users") }, null, 8, ["label"])]), _: 2 }, 1032, ["data"]), [[$, e.userPortraitForm.selectType == "New"]]), F(t(d, { data: s.dataUv, height: "300", style: { width: "100%" } }, { default: r(() => [t(o, { prop: "name", label: s.title }, null, 8, ["label"]), t(o, { prop: "value", label: e.$t("wxma.wxapp.users") }, null, 8, ["label"])]), _: 2 }, 1032, ["data"]), [[$, e.userPortraitForm.selectType == "Activity"]])]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128))], 512), [[$, e.tabVal == "3"]])])]), _: 1 })), [[b, e.loading]])]);
}
const re = z(ee, [["render", le]]);
export {
  re as default
};
