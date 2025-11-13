import { U as c, b1 as y, aA as s, _ as k, r as n, j as B, c as b, o as Y, b as o, w as _, e as i, z as d, h as T, B as C, V as g, f as z, g as Q, D as M, a0 as q, x as L } from "./index-DAdfXJ2i.js";
import { T as V, r as A, e as N, s as U } from "./topItem-Cw5sWAyc.js";
import { s as j, a as R, b as E, o as P } from "./largescreen-Cv8DzdZU.js";
import W from "./orderCountChart-CLUUljqK.js";
import G from "./saleamountChart-v2uiuqLf.js";
import J from "./spusaleChart-DJDiFN68.js";
import K from "./orderCountBottom-MKdLR-3x.js";
import X from "./saleamountBottom-Bw0kcxhL.js";
import Z from "./spusaleBottom-mrLKrTLI.js";
import $ from "./dataAnalysis-CLHE9AQY.js";
import "./index-BMoo9HBP.js";
import "./orderCountCard-CK-ZinJZ.js";
import "./salesAnalysisCard-BmsUWoeV.js";
import "./goodsHot-BdOCqbu9.js";
const tt = { components: { TopItem: V, orderCountChart: W, saleamontChart: G, spusaleChart: J, orderCountBottom: K, spusaleBottom: Z, saleamountBottom: X, DataAnalysis: $ }, props: { isSpa: { type: Boolean, defalut: false } }, data() {
  return { isFullScreen: false, nowTime: "", week: "", date: "", timer: null, showTitle: true, curQueryType: "3", bottomData1: { title: "\u8BA2\u5355\u91CF\u5546\u54C1\u6392\u884CTOP10", data: [] }, bottomData2: { title: "\u5546\u54C1\u9500\u91CF\u6392\u884CTOP10", data: [] }, bottomData3: { title: "\u91D1\u989D\u5546\u54C1\u6392\u884CTOP10", data: [] }, centerData1: { title: "\u8BA2\u5355\u6570\u91CF\u5206\u6790", subtitle1: "\u8BA2\u5355\u91CF\u5206\u7C7B\u6392\u884C", subtitle2: "\u8BA2\u5355\u91CF\u5E97\u94FA\u6392\u884C", data: [], data2: [] }, centerData2: { title: "\u5546\u54C1\u9500\u91CF\u5206\u6790", subtitle1: "\u5546\u54C1\u9500\u91CF\u5206\u7C7B\u6392\u884C", subtitle2: "\u5546\u54C1\u9500\u91CF\u5E97\u94FA\u6392\u884C", data: [], data2: [] }, centerData3: { title: "\u9500\u552E\u91D1\u989D\u5206\u6790", subtitle1: "\u91D1\u989D\u5206\u7C7B\u6392\u884C", subtitle2: "\u91D1\u989D\u5E97\u94FA\u6392\u884C", data: [], data2: [] }, topData1: { title: "\u6628\u65E5", count: "", sum: 0 }, topData2: { title: "\u6700\u8FD17\u65E5", count: "", sum: 0 }, topData3: { title: "\u5F53\u6708", count: "", sum: 0 }, topData4: { title: "\u4ECA\u5E74", count: "", sum: 0 }, shopId: "" };
}, mounted() {
  var _a, _b, _c;
  ((_a = c()) == null ? void 0 : _a.userInfo.shopId) && (this.shopId = (_b = c()) == null ? void 0 : _b.userInfo.shopId), ((_c = c()) == null ? void 0 : _c.userInfo.type) != "3", this.initData(), this.nowTimes(), U(this.$refs.BigDataRef, !this.isSpa);
}, beforeUnmount() {
  clearInterval(this.timer);
}, methods: { loadData(a) {
  var _a, _b;
  if (this.showTitle = false, setTimeout(() => {
    this.showTitle = true;
  }, 200), this.curQueryType = a, ((_a = c()) == null ? void 0 : _a.userInfo.type) == "3") return;
  s().add(-1, "day").format("YYYY-MM-DD HH:mm:ss"), s().startOf("day").format("YYYY-MM-DD HH:mm:ss");
  let t = { beginTime: s().add(-6, "day").format("YYYY-MM-DD 00:00:00"), endTime: s().endOf("day").format("YYYY-MM-DD HH:mm:ss") }, r = { beginTime: s().startOf("month").format("YYYY-MM-DD HH:mm:ss"), endTime: s().endOf("month").format("YYYY-MM-DD HH:mm:ss"), shopId: (_b = c()) == null ? void 0 : _b.userInfo.shopId }, m = { beginTime: s().startOf("years").format("YYYY-MM-DD HH:mm:ss"), endTime: s().endOf("years").format("YYYY-MM-DD HH:mm:ss") }, e = m;
  this.curQueryType == 1 ? e = t : this.curQueryType == 2 ? e = r : this.curQueryType == 3 && (e = m), this.getOrdercount(e), this.getSpusale(e), this.getSaleamount(e);
}, initData() {
  let a = { beginTime: s().add(-1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"), endTime: s().startOf("day").format("YYYY-MM-DD HH:mm:ss") };
  this.getStatistics(a, this.topData1);
  let t = { beginTime: s().add(-6, "day").format("YYYY-MM-DD 00:00:00"), endTime: s().endOf("day").format("YYYY-MM-DD HH:mm:ss") };
  this.getStatistics(t, this.topData2);
  let r = { beginTime: s().startOf("month").format("YYYY-MM-DD HH:mm:ss"), endTime: s().endOf("month").format("YYYY-MM-DD HH:mm:ss") };
  this.getStatistics(r, this.topData3);
  let m = { beginTime: s().startOf("years").format("YYYY-MM-DD HH:mm:ss"), endTime: s().endOf("years").format("YYYY-MM-DD HH:mm:ss") };
  this.getStatistics(m, this.topData4), this.loadData(3);
}, getOrdercount(a) {
  this.shopId && (a.shopId = this.shopId), P(y(a)).then((t) => {
    this.centerData1.data = t.data.category, this.centerData1.data2 = t.data.shopInfo, this.bottomData1.data = t.data.spu;
  }).catch(() => {
  });
}, getSpusale(a) {
  this.shopId && (a.shopId = this.shopId), E(y(a)).then((t) => {
    this.centerData2.data = t.data.category, this.centerData2.data2 = t.data.shopInfo, this.bottomData2.data = t.data.spu;
  }).catch(() => {
  });
}, getSaleamount(a) {
  this.shopId && (a.shopId = this.shopId), R(y(a)).then((t) => {
    this.centerData3.data = t.data.category, this.centerData3.data2 = t.data.shopInfo, this.bottomData3.data = t.data.spu;
  }).catch(() => {
  });
}, getStatistics(a, t) {
  var _a;
  ((_a = c()) == null ? void 0 : _a.userInfo.type) != "3" && (t.beginTime = a.beginTime, t.endTime = a.endTime, j(a).then((r) => {
    t.count = r.data.count, t.sum = r.data.sum;
  }).catch(() => {
  }));
}, onFullScreen() {
  this.isSpa ? this.isFullScreen ? (N(), this.isFullScreen = false) : (A(), this.isFullScreen = true) : window.open("/#/mall/bigscreen/fullscreen");
}, timeFormate(a) {
  let t = new Date(a), r = t.getFullYear(), m = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, e = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(), l = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(), h = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(), D = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds(), p = t.getDay(), f = "\u661F\u671F" + ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][p];
  this.week = f, this.date = r + "." + m + "." + e, this.nowTime = l + ":" + h + ":" + D;
}, nowTimes() {
  this.timeFormate(/* @__PURE__ */ new Date()), setInterval(this.nowTimes, 1e3), this.clear();
}, clear() {
  clearInterval(this.nowTimes), this.nowTimes = null;
}, queryTypeFilter(a) {
  return a == 1 ? "\u6700\u8FD17\u65E5\u6570\u636E\u7EDF\u8BA1\u5206\u6790" : a == 2 ? "\u5F53\u6708\u6570\u636E\u7EDF\u8BA1\u5206\u6790" : (a == 3, "\u4ECA\u5E74\u6570\u636E\u7EDF\u8BA1\u5206\u6790");
} } }, et = { class: "home-container" }, at = { ref: "BigDataRef", class: "wrap" }, st = { class: "showTime" }, ot = { class: "time" }, it = { class: "date" }, nt = { style: { top: "310px", position: "absolute", "text-align": "center", width: "100%", "font-weight": "bold", "font-size": "22px", "line-height": "22px", color: "#ffffff" } }, rt = { key: 0 };
function lt(a, t, r, m, e, l) {
  const h = n("DataAnalysis"), D = n("FullScreen"), p = n("el-icon"), u = n("top-item"), f = n("InfoFilled"), v = n("order-count-chart"), I = n("spusale-chart"), H = n("saleamont-chart"), w = n("order-count-bottom"), S = n("spusale-bottom"), x = n("saleamount-bottom"), F = B("tippy");
  return Y(), b("div", et, [o(h), _(i("div", at, [i("header", null, [t[1] || (t[1] = i("h2", null, "\u5546\u57CE\u6570\u636E\u76D1\u63A7\u5927\u5C4F", -1)), i("div", st, [i("span", ot, d(e.date), 1), i("span", it, [i("span", null, d(e.week), 1), i("span", null, d(e.nowTime), 1)])]), i("div", { style: { right: "50px", position: "absolute", top: "10px", cursor: "pointer", "font-size": "20px" }, title: "\u5168\u5C4F", onClick: t[0] || (t[0] = (...O) => l.onFullScreen && l.onFullScreen(...O)) }, [o(p, { color: "#ffffff" }, { default: T(() => [o(D)]), _: 1 })])]), i("div", null, [i("div", null, [o(u, { vData: e.topData1, style: { left: "50px" } }, null, 8, ["vData"]), o(u, { queryType: 1, class: g(e.curQueryType == "1" ? "cur-query" : ""), vData: e.topData2, date: e.date, style: { left: "512px" }, onLoadData: l.loadData }, null, 8, ["class", "vData", "date", "onLoadData"]), o(u, { queryType: 2, class: g(e.curQueryType == "2" ? "cur-query" : ""), vData: e.topData3, style: { left: "974px" }, onLoadData: l.loadData }, null, 8, ["class", "vData", "onLoadData"]), o(u, { queryType: 3, class: g(e.curQueryType == "3" ? "cur-query" : ""), vData: e.topData4, style: { left: "1436px" }, onLoadData: l.loadData }, null, 8, ["class", "vData", "onLoadData"]), o(q, { name: "el-zoom-in-top" }, { default: T(() => [_(i("div", nt, [z(d(l.queryTypeFilter(e.curQueryType)) + " ", 1), _((Y(), Q(p, { style: { color: "#888888", "font-size": "16px" } }, { default: T(() => [o(f)]), _: 1 })), [[F, { content: "\u63D0\u793A:\u7EDF\u8BA1\u8BA2\u5355\u7684\u6240\u6709\u6570\u636E(\u5305\u62EC\u6536\u94F6\u53F0\u8BA2\u5355),\u4E0D\u5305\u62EC\u5DF2\u9000\u6B3E\u72B6\u6001\u8BA2\u5355\u6570\u636E.", zIndex: 41e3 }]])], 512), [[M, e.showTitle]])]), _: 1 }), e.shopId ? C("", true) : (Y(), b("div", rt, [o(v, { vData: e.centerData1, style: { left: "50px" } }, null, 8, ["vData"]), o(I, { vData: e.centerData2, style: { left: "666px" } }, null, 8, ["vData"]), o(H, { vData: e.centerData3, style: { left: "1282px" } }, null, 8, ["vData"])])), i("div", { style: L([{ position: "absolute" }, { top: e.shopId ? "400px !important" : "710px !important" }]) }, [o(w, { vData: e.bottomData1, style: { left: "50px" } }, null, 8, ["vData"]), o(S, { vData: e.bottomData2, style: { left: "666px" } }, null, 8, ["vData"]), o(x, { vData: e.bottomData3, style: { left: "1282px" } }, null, 8, ["vData"])], 4)])])], 512), [[M, false]])]);
}
const Mt = k(tt, [["render", lt], ["__scopeId", "data-v-59bc4e45"]]);
export {
  Mt as default
};
