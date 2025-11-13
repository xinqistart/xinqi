import { A as F, R as N, p as P, E as R, S as A, b1 as B, _ as T, c as m, o as f, B as U, e as y, b as l, h as d, f as S, z as u, r as g, F as D, v as E, g as J } from "./index-DAdfXJ2i.js";
import { b as j } from "./goodsspu-Dmc9OYVL.js";
import { h as O, g as Z } from "./goodsspu-DKL_9wDU.js";
const $ = { props: { shopId: { type: String }, value: { type: Array, default: () => [] }, goodsIds: { type: [Array || String], default: () => [] }, showGoodsList: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, span: { type: Number, default: 3 } }, setup(a, n) {
  const { proxy: h } = F(), e = N({ goodsListValue: a.value || [], dialogVisibleGoods: false, form2: {}, tableData2: [], selectionGoodsSpu: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: { verifyStatus: "1", shelf: "1", shopId: "", categoryFirst: "", categorySecond: "", categoryThird: "", categoryId: "" }, tableLoading2: false, tableOption2: j }), _ = P(null);
  R(() => a.goodsIds, (o, s) => {
    o.length > 0 ? O(o).then((t) => {
      e.tableData2 = t.data || [];
    }) : e.tableData2 = [];
  });
  function z() {
    e.tableData2 = [], e.dialogVisibleGoods = true, i(e.page2);
  }
  function i(o = e.page2, s) {
    e.tableLoading2 = true, a.shopId && a.shopId != "-1" && (e.paramsSearch2.shopId = a.shopId), e.paramsSearch2.categoryId && (e.paramsSearch2.categoryFirst = e.paramsSearch2.categoryId[0], e.paramsSearch2.categorySecond = e.paramsSearch2.categoryId[1], e.paramsSearch2.categoryThird = e.paramsSearch2.categoryId[2]), e.paramsSearch2.categoryShopId && (e.paramsSearch2.categoryShopFirst = e.paramsSearch2.categoryShopId[0], e.paramsSearch2.categoryShopSecond = e.paramsSearch2.categoryShopId[1], e.paramsSearch2.categoryShopThird = e.paramsSearch2.categoryShopId[2]), Z(B(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, s, e.paramsSearch2))).then((t) => {
      const p = t.data.records;
      p.forEach(function(c) {
        const r = [];
        c.categoryFirst && r.push(c.categoryFirst), c.categorySecond && r.push(c.categorySecond), c.categoryId = r;
      }), e.tableData2 = p || [], e.page2.total = t.data.total, e.page2.currentPage = o.currentPage, e.page2.pageSize = o.pageSize, e.tableLoading2 = false, h.$nextTick(() => {
        _.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function b(o, s) {
    o = B(o), e.paramsSearch2 = o, e.page2.currentPage = 1, i(e.page2, o), s();
  }
  function I() {
    i(e.page2);
  }
  function C(o) {
    const s = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = s) : o.order == "descending" ? (e.page2.ascs = "", e.page2.descs = s) : (e.page2.ascs = "", e.page2.descs = ""), i(e.page2);
  }
  function L(o) {
    e.selectionGoodsSpu = o;
  }
  function V() {
    const o = e.selectionGoodsSpu.map((t) => t.id), s = [];
    e.goodsListValue || (e.goodsListValue = []), e.goodsListValue.map((t) => {
      t && o.indexOf(t.id) === -1 && (o.push(t.id), s.push(t));
    }), e.goodsListValue = [...e.selectionGoodsSpu, ...s], e.dialogVisibleGoods = false, n.emit("update:value", e.goodsListValue), n.emit("update:goodsIds", o);
  }
  function v(o) {
    var _a;
    e.goodsListValue.splice(o, 1);
    const s = (_a = e.goodsListValue) == null ? void 0 : _a.map((t) => t.id);
    n.emit("update:value", e.goodsListValue ? e.goodsListValue : []), n.emit("update:goodsIds", s || []);
  }
  a.showGoodsList && a.goodsIds && a.goodsIds.length > 0 && w(a.goodsIds);
  function w(o) {
    O(o).then((s) => {
      const t = s.data.map((r) => r.id), p = JSON.parse(JSON.stringify(o));
      p.map((r, k) => {
        t.indexOf(r) === -1 && p.splice(k, 1);
      });
      const c = new Array(p.length);
      s.data.map((r) => {
        const k = p.indexOf(r.id);
        c[k] = r;
      }), n.emit("update:value", c), n.emit("update:goodsIds", p), e.goodsListValue = c;
    });
  }
  function G() {
    e.goodsListValue = [], n.emit("update:value", []), n.emit("update:goodsIds", []);
  }
  return { ...A(e), goodsSelectRef: _, getPage2: i, searchChange2: b, refreshChange2: I, sortChange2: C, selectionChange2: L, onShowGoodsList: z, subGoods: V, onClearGoodsList: G, removeGoodsItem: v };
} }, q = { key: 0 }, H = { style: { color: "red" } }, K = { key: 0 }, M = ["src"], Q = { style: { padding: "4px" } }, W = { style: { "font-size": "12px" } }, X = { key: 0, class: "bottom clearfix" };
function Y(a, n, h, e, _, z) {
  const i = g("el-button"), b = g("el-image"), I = g("el-switch"), C = g("avue-crud"), L = g("el-dialog"), V = g("el-tooltip"), v = g("el-card"), w = g("el-col"), G = g("el-row");
  return f(), m(D, null, [h.disabled ? U("", true) : (f(), m("div", q, [l(i, { class: "addBtn", type: "primary", icon: "el-icon-circle-plus", plain: "", size: "small", onClick: e.onShowGoodsList }, { default: d(() => [S(u(a.$t("commons.selectGoods")), 1)]), _: 1 }, 8, ["onClick"]), l(i, { type: "primary", link: "", onClick: e.onClearGoodsList }, { default: d(() => [S(u(a.$t("commons.clear")), 1)]), _: 1 }, 8, ["onClick"])])), y("div", null, [l(L, { modelValue: a.dialogVisibleGoods, "onUpdate:modelValue": n[2] || (n[2] = (o) => a.dialogVisibleGoods = o), title: a.$t("commons.selectGoods"), width: "80%", top: "70px", "append-to-body": "" }, { footer: d(() => [l(i, { onClick: n[1] || (n[1] = (o) => a.dialogVisibleGoods = false) }, { default: d(() => [S(u(a.$t("commons.cancel")), 1)]), _: 1 }), l(i, { type: "primary", onClick: e.subGoods }, { default: d(() => [S(u(a.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])]), default: d(() => [l(C, { ref: "goodsSelectRef", modelValue: a.form2, "onUpdate:modelValue": n[0] || (n[0] = (o) => a.form2 = o), page: a.page2, data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2, onSelectionChange: e.selectionChange2 }, { picUrls: d((o) => [l(b, { style: { "z-index": "9999", width: "100px", height: "100px" }, src: o.row.picUrls && o.row.picUrls.length > 0 ? o.row.picUrls[0] : "" }, null, 8, ["src"])]), shelf: d((o) => [l(I, { modelValue: o.row.shelf, "onUpdate:modelValue": (s) => o.row.shelf = s, "active-value": "1", "inactive-value": "0", disabled: "", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), price: d((o) => [y("div", H, " \uFFE5" + u(o.row.priceDown) + u(o.row.priceUp == o.row.priceDown ? "" : "~\uFFE5" + o.row.priceUp), 1)]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange", "onSelectionChange"])]), _: 1 }, 8, ["modelValue", "title"]), h.showGoodsList ? (f(), m("div", K, [l(G, { gutter: 4 }, { default: d(() => [(f(true), m(D, null, E(a.goodsListValue, (o, s) => (f(), J(w, { key: s, span: h.span }, { default: d(() => [l(v, { "body-style": { padding: "0px" }, style: { "margin-top": "20px" } }, { default: d(() => [y("img", { src: o.picUrls && o.picUrls.length > 0 ? o.picUrls[0] : "", class: "image" }, null, 8, M), y("div", Q, [l(V, { effect: "dark", content: o.name, placement: "top-start" }, { default: d(() => [y("div", W, u(o.name), 1)]), _: 2 }, 1032, ["content"]), h.disabled ? U("", true) : (f(), m("div", X, [l(i, { link: "", class: "button", size: "small", round: "", style: { color: "red" }, onClick: (t) => e.removeGoodsItem(s) }, { default: d(() => [S(u(a.$t("commons.removeLabel")), 1)]), _: 1 }, 8, ["onClick"])]))])]), _: 2 }, 1024)]), _: 2 }, 1032, ["span"]))), 128))]), _: 1 })])) : U("", true)])], 64);
}
const se = T($, [["render", Y]]);
export {
  se as _
};
