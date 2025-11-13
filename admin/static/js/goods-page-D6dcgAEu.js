import { A as b, R as _, p as v, S as V, b1 as w, _ as R, c as U, o as k, b as l, h as s, e as C, z as I, r as i } from "./index-DAdfXJ2i.js";
import { t as L } from "./goodsspu-Dmc9OYVL.js";
import { g as P } from "./goodsspu-DKL_9wDU.js";
const D = { props: { shopId: { type: String }, value: { type: String } }, setup(o, t) {
  const { proxy: f } = b(), e = _({ form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: { shopId: "", categoryId: "", categoryFirst: "", categorySecond: "" }, tableLoading2: false, tableOption2: L, selectRow: o.value }), d = v(null);
  function c(a, r) {
    e.tableLoading2 = true, o.shopId && o.shopId != "-1" && (e.paramsSearch2.shopId = o.shopId), e.paramsSearch2.categoryId && (e.paramsSearch2.categoryFirst = e.paramsSearch2.categoryId[0], e.paramsSearch2.categorySecond = e.paramsSearch2.categoryId[1], e.paramsSearch2.categoryThird = e.paramsSearch2.categoryId[2]), e.paramsSearch2.categoryShopId && (e.paramsSearch2.categoryShopFirst = e.paramsSearch2.categoryShopId[0], e.paramsSearch2.categoryShopSecond = e.paramsSearch2.categoryShopId[1], e.paramsSearch2.categoryShopThird = e.paramsSearch2.categoryShopId[2]), P(w(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, r, e.paramsSearch2))).then((S) => {
      const y = S.data.records;
      y.forEach(function(n) {
        const m = [];
        n.categoryFirst && m.push(n.categoryFirst), n.categorySecond && m.push(n.categorySecond), n.categoryId = m;
      }), e.tableData2 = y, e.page2.total = S.data.total, e.page2.currentPage = a.currentPage, e.page2.pageSize = a.pageSize, e.tableLoading2 = false, f.$nextTick(() => {
        d.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function p(a, r) {
    a = w(a), e.paramsSearch2 = a, e.page2.currentPage = 1, c(e.page2, a), r();
  }
  function g() {
    c(e.page2);
  }
  function h(a) {
    const r = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = r) : a.order == "descending" ? (e.page2.ascs = "", e.page2.descs = r) : (e.page2.ascs = "", e.page2.descs = ""), c(e.page2);
  }
  function u(a) {
    e.selectRow = a.id, t.emit("update:value", a.id), t.emit("onChangeItem", a);
  }
  return { ...V(e), crud: d, rowClick: u, getPage2: c, searchChange2: p, refreshChange2: g, sortChange2: h };
} }, z = { style: { color: "red" } };
function F(o, t, f, e, d, c) {
  const p = i("el-radio"), g = i("el-image"), h = i("el-switch"), u = i("avue-crud");
  return k(), U("div", null, [l(u, { ref: "crud", modelValue: o.form2, "onUpdate:modelValue": t[1] || (t[1] = (a) => o.form2 = a), page: o.page2, data: o.tableData2, "table-loading": o.tableLoading2, option: o.tableOption2, onRowClick: e.rowClick, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2 }, { radio: s(({ row: a }) => [l(p, { modelValue: o.selectRow, "onUpdate:modelValue": t[0] || (t[0] = (r) => o.selectRow = r), value: a.id }, { default: s(() => [...t[2] || (t[2] = [C("br", null, null, -1)])]), _: 1 }, 8, ["modelValue", "value"])]), picUrls: s((a) => [l(g, { style: { width: "50px", height: "50px" }, src: a.row.picUrls && a.row.picUrls.length > 0 ? a.row.picUrls[0] : "" }, null, 8, ["src"])]), shelf: s((a) => [l(h, { modelValue: a.row.shelf, "onUpdate:modelValue": (r) => a.row.shelf = r, disabled: "", "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), price: s((a) => [C("div", z, " \uFFE5" + I(a.row.priceDown) + I(a.row.priceUp == a.row.priceDown ? "" : "~\uFFE5" + a.row.priceUp), 1)]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onRowClick", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"])]);
}
const A = R(D, [["render", F]]);
export {
  A as _
};
