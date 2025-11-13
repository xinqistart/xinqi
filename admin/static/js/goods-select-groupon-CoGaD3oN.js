import { A as L, R as I, p as G, S as v, b1 as V, _ as k, r as g, c as P, o as w, e as _, b as r, h as c, f as m, z as b, F as z } from "./index-DAdfXJ2i.js";
import { a as D, g as O } from "./grouponinfo-D4yBI7DS.js";
const B = { props: { shopId: { type: String }, value: { type: Array, default: () => [] }, goodsIds: { type: Array, default: () => [] } }, setup(a, n) {
  const { proxy: C } = L(), e = I({ dialogVisibleGoods: false, form2: {}, tableData2: [], selectionGoodsSpu: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: { shopId: "" }, tableLoading2: false, tableOption2: D }), p = G(null);
  function S() {
    e.tableData2 = [], e.dialogVisibleGoods = true, s(e.page2);
  }
  function s(o, t) {
    e.tableLoading2 = true, e.tableLoading2 = true, a.shopId && a.shopId != "-1" && (e.paramsSearch2.shopId = a.shopId), O(V(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, t, e.paramsSearch2))).then((i) => {
      const d = i.data.records;
      e.tableData2 = d, e.page2.total = i.data.total, e.page2.currentPage = o.currentPage, e.page2.pageSize = o.pageSize, e.tableLoading2 = false, C.$nextTick(() => {
        p.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function u(o, t) {
    o = V(o), e.paramsSearch2 = o, e.page2.currentPage = 1, s(e.page2, o), t();
  }
  function f() {
    s(e.page2);
  }
  function h(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = t) : o.order == "descending" ? (e.page2.ascs = "", e.page2.descs = t) : (e.page2.ascs = "", e.page2.descs = ""), s(e.page2);
  }
  function l(o) {
    e.selectionGoodsSpu = o;
  }
  function y() {
    const o = e.selectionGoodsSpu.map((d) => d.id), t = [], i = G(a.value);
    i.value.map((d) => {
      d && o.indexOf(d.id) === -1 && (o.push(d.id), t.push(d));
    }), i.value = [...e.selectionGoodsSpu, ...t], e.dialogVisibleGoods = false, n.emit("update:value", i), n.emit("update:goodsIds", o);
  }
  return { ...v(e), crud: p, getPage2: s, searchChange2: u, refreshChange2: f, sortChange2: h, selectionChange2: l, onShowGoodsList: S, subGoods: y };
} };
function A(a, n, C, e, p, S) {
  const s = g("el-button"), u = g("el-image"), f = g("avue-crud"), h = g("el-dialog");
  return w(), P(z, null, [_("div", null, [r(s, { class: "addBtn", type: "primary", icon: "el-icon-circle-plus", plain: "", size: "small", onClick: e.onShowGoodsList }, { default: c(() => [m(b(a.$t("commons.selectGoodsBargain")), 1)]), _: 1 }, 8, ["onClick"])]), _("div", null, [r(h, { title: "$t('commons.selectGoods')", modelValue: a.dialogVisibleGoods, "onUpdate:modelValue": n[2] || (n[2] = (l) => a.dialogVisibleGoods = l), width: "83%", top: "20px", "append-to-body": "" }, { footer: c(() => [r(s, { onClick: n[1] || (n[1] = (l) => a.dialogVisibleGoods = false) }, { default: c(() => [m(b(a.$t("commons.cancel")), 1)]), _: 1 }), r(s, { type: "primary", onClick: e.subGoods }, { default: c(() => [m(b(a.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])]), default: c(() => [r(f, { ref: "crud", modelValue: a.form2, "onUpdate:modelValue": n[0] || (n[0] = (l) => a.form2 = l), page: a.page2, data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2, onSelectionChange: e.selectionChange2 }, { picUrl: c((l) => [r(u, { style: { width: "100px", height: "100px" }, src: l.row.picUrl }, null, 8, ["src"])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange", "onSelectionChange"])]), _: 1 }, 8, ["modelValue"])])], 64);
}
const $ = k(B, [["render", A]]);
export {
  $ as _
};
