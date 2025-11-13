import y from "./orderCountCard-CK-ZinJZ.js";
import T from "./salesAnalysisCard-BmsUWoeV.js";
import U from "./goodsHot-BdOCqbu9.js";
import { d as N, n as $, p as n, aA as l, t as j, U as b, b1 as C, c as E, o as z, F as J, e as K, b as a, u as k, r as I, h as o, _ as W } from "./index-DAdfXJ2i.js";
import { o as X, b as Z, a as P, s as q } from "./largescreen-Cv8DzdZU.js";
import "./index-BMoo9HBP.js";
const Q = { class: "mt-3 ml-3" }, tt = N({ __name: "dataAnalysis", setup(at) {
  const { $t: s } = $(), V = s("bigscreen.bigscreen.to"), w = s("bigscreen.bigscreen.endDate"), A = s("bigscreen.bigscreen.startDate"), u = n([l().add(-1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"), l().startOf("day").format("YYYY-MM-DD HH:mm:ss")]), R = n(0), d = n(), D = n({ title: s("bigscreen.bigscreen.yesterday"), count: "", sum: 0 }), p = n({ title: s("bigscreen.bigscreen.last7Days"), count: "", sum: 0 }), v = n({ title: s("bigscreen.bigscreen.thisMonth"), count: "", sum: 0 }), h = n({ title: s("bigscreen.bigscreen.thisYear"), count: "", sum: 0 }), m = n({ title: s("bigscreen.bigscreen.orderCountAnalysis"), subtitle1: s("bigscreen.bigscreen.orderCategoryRank"), subtitle2: s("bigscreen.bigscreen.orderShopRank"), data: [], data2: [] }), c = n({ title: s("bigscreen.bigscreen.goodsSalesAnalysis"), subtitle1: s("bigscreen.bigscreen.goodsSalesCategoryRank"), subtitle2: s("bigscreen.bigscreen.goodsSalesShopRank"), data: [], data2: [] }), f = n({ title: s("bigscreen.bigscreen.salesAmountAnalysis"), subtitle1: s("bigscreen.bigscreen.amountCategoryRank"), subtitle2: s("bigscreen.bigscreen.amountShopRank"), data: [], data2: [] }), O = n({ title: s("bigscreen.bigscreen.orderGoodsTop10"), data: [] }), x = n({ title: s("bigscreen.bigscreen.goodsSalesTop10"), data: [] }), S = n({ title: s("bigscreen.bigscreen.amountGoodsTop10"), data: [] });
  function M(e, t) {
    t == 1 ? u.value = [l().add(-1, "day").format("YYYY-MM-DD HH:mm:ss"), l().startOf("day").format("YYYY-MM-DD HH:mm:ss")] : t == 2 ? u.value = [l().add(-6, "day").format("YYYY-MM-DD 00:00:00"), l().endOf("day").format("YYYY-MM-DD HH:mm:ss")] : t == 3 ? u.value = [l().startOf("month").format("YYYY-MM-DD HH:mm:ss"), l().endOf("month").format("YYYY-MM-DD HH:mm:ss")] : t == 4 && (u.value = [l().startOf("years").format("YYYY-MM-DD HH:mm:ss"), l().endOf("years").format("YYYY-MM-DD HH:mm:ss")]), _();
  }
  j(() => {
    var _a, _b;
    ((_a = b()) == null ? void 0 : _a.userInfo.shopId) && (d.value = (_b = b()) == null ? void 0 : _b.userInfo.shopId), B(), _();
  });
  function _() {
    var _a, _b;
    if (((_a = b()) == null ? void 0 : _a.userInfo.type) == "3") return;
    let e = { beginTime: u.value[0], endTime: u.value[1], shopId: "" };
    R.value == 3 && (e.shopId = (_b = b()) == null ? void 0 : _b.userInfo.shopId), F(e), G(e), L(e);
  }
  function B() {
    let e = { beginTime: l().add(-1, "day").startOf("day").format("YYYY-MM-DD HH:mm:ss"), endTime: l().startOf("day").format("YYYY-MM-DD HH:mm:ss") };
    H(e, D);
    let t = { beginTime: l().add(-6, "day").format("YYYY-MM-DD 00:00:00"), endTime: l().endOf("day").format("YYYY-MM-DD HH:mm:ss") };
    H(t, p);
    let g = { beginTime: l().startOf("month").format("YYYY-MM-DD HH:mm:ss"), endTime: l().endOf("month").format("YYYY-MM-DD HH:mm:ss") };
    H(g, v);
    let r = { beginTime: l().startOf("years").format("YYYY-MM-DD HH:mm:ss"), endTime: l().endOf("years").format("YYYY-MM-DD HH:mm:ss") };
    H(r, h);
  }
  function F(e) {
    d.value && (e.shopId = d.value), X(C(e)).then((t) => {
      m.value.data = t.data.category, m.value.data2 = t.data.shopInfo, O.value.data = t.data.spu;
    }).catch(() => {
    });
  }
  function G(e) {
    d.value && (e.shopId = d.value), Z(C(e)).then((t) => {
      c.value.data = t.data.category, c.value.data2 = t.data.shopInfo, x.value.data = t.data.spu;
    }).catch(() => {
    });
  }
  function L(e) {
    d.value && (e.shopId = d.value), P(C(e)).then((t) => {
      f.value.data = t.data.category, f.value.data2 = t.data.shopInfo, S.value.data = t.data.spu;
    }).catch(() => {
    });
  }
  function H(e, t) {
    var _a;
    ((_a = b()) == null ? void 0 : _a.userInfo.type) != "3" && (t.beginTime = e.beginTime, t.endTime = e.endTime, q(e).then((g) => {
      t.count = g.data.count, t.sum = g.data.sum;
    }).catch(() => {
    }));
  }
  return (e, t) => {
    const g = I("el-date-picker"), r = I("el-col"), Y = I("el-row");
    return z(), E(J, null, [K("div", Q, [a(g, { modelValue: u.value, "onUpdate:modelValue": t[0] || (t[0] = (i) => u.value = i), "value-format": "YYYY-MM-DD HH:mm:ss", type: "daterange", align: "right", "unlink-panels": "", "range-separator": k(V), "start-placeholder": k(A), "end-placeholder": k(w), onChange: t[1] || (t[1] = (i) => _()) }, null, 8, ["modelValue", "range-separator", "start-placeholder", "end-placeholder"])]), a(Y, { style: { "background-color": "#f7f8fa" } }, { default: o(() => [a(r, { span: 24, xl: 14, lg: 14, xs: 24, sm: 24, md: 24 }, { default: o(() => [a(Y, null, { default: o(() => [a(r, { class: "card-margin", span: 12, xl: 12, lg: 12, xs: 24, sm: 24, md: 24 }, { default: o(() => [a(y, { title: D.value.title, orderCount: D.value.count, amount: D.value.sum, onViewClick: t[2] || (t[2] = (i) => M(i, 1)) }, null, 8, ["title", "orderCount", "amount"])]), _: 1 }), a(r, { class: "card-margin", span: 12, xl: 12, lg: 12, xs: 24, sm: 24, md: 24 }, { default: o(() => [a(y, { title: p.value.title, orderCount: p.value.count, amount: p.value.sum, onViewClick: t[3] || (t[3] = (i) => M(i, 2)) }, null, 8, ["title", "orderCount", "amount"])]), _: 1 })]), _: 1 }), a(Y, null, { default: o(() => [a(r, { class: "card-margin", span: 12, xl: 12, lg: 12, xs: 24, sm: 24, md: 24 }, { default: o(() => [a(y, { title: v.value.title, orderCount: v.value.count, amount: v.value.sum, onViewClick: t[4] || (t[4] = (i) => M(i, 3)) }, null, 8, ["title", "orderCount", "amount"])]), _: 1 }), a(r, { class: "card-margin", span: 12, xl: 12, lg: 12, xs: 24, sm: 24, md: 24 }, { default: o(() => [a(y, { title: h.value.title, orderCount: h.value.count, amount: h.value.sum, onViewClick: t[5] || (t[5] = (i) => M(i, 4)) }, null, 8, ["title", "orderCount", "amount"])]), _: 1 })]), _: 1 }), a(Y, null, { default: o(() => [a(r, { class: "card-margin" }, { default: o(() => [a(T, { leftTitle: m.value.subtitle1, rightTitle: m.value.subtitle2, chartData: m.value.data, tableData: m.value.data2 }, null, 8, ["leftTitle", "rightTitle", "chartData", "tableData"])]), _: 1 })]), _: 1 }), a(Y, null, { default: o(() => [a(r, { class: "card-margin" }, { default: o(() => [a(T, { leftTitle: c.value.subtitle1, rightTitle: c.value.subtitle2, chartData: c.value.data, tableData: c.value.data2 }, null, 8, ["leftTitle", "rightTitle", "chartData", "tableData"])]), _: 1 })]), _: 1 }), a(Y, null, { default: o(() => [a(r, { class: "card-margin" }, { default: o(() => [a(T, { leftTitle: f.value.subtitle1, rightTitle: f.value.subtitle2, chartData: f.value.data, tableData: f.value.data2 }, null, 8, ["leftTitle", "rightTitle", "chartData", "tableData"])]), _: 1 })]), _: 1 })]), _: 1 }), a(r, { class: "card-margin", span: 24, xl: 10, lg: 10, xs: 24, sm: 24, md: 24 }, { default: o(() => [a(U, { bottomData1: O.value, bottomData2: x.value, bottomData3: S.value }, null, 8, ["bottomData1", "bottomData2", "bottomData3"])]), _: 1 })]), _: 1 })], 64);
  };
} }), it = W(tt, [["__scopeId", "data-v-7f67a4a0"]]);
export {
  it as default
};
