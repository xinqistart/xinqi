import { A as N, R as A, p as z, S as q, b1 as R, _ as B, r as m, c as P, o as b, b as s, h, e as S, n as ee, g as $, q as ce, t as ue, c5 as me, C as J, B as D, f as F, z as V, F as X, v as Y } from "./index-DAdfXJ2i.js";
import { t as he, g as fe } from "./articleinfo-BbcsyAN4.js";
import { f as ye } from "./goodscategory-DvhXgk83.js";
import { f as be } from "./pd-goods-category-2-Ye8qS6.js";
import { t as Ce, g as ve } from "./seckillinfo-xOI7603-.js";
import { t as Ie, g as Pe } from "./grouponinfo-D4yBI7DS.js";
import { a as we, g as _e } from "./bargaininfo-DC3QEOqY.js";
import { _ as ae } from "./goods-page-D6dcgAEu.js";
import Se from "./index-D3U0TkIE.js";
import { g as Te } from "./wxapp-BACewdCT.js";
import { c as K } from "./clientType-BhCLU4J5.js";
const ke = { props: { shopId: { type: String }, value: { type: String } }, setup(a, n) {
  const { proxy: i } = N(), e = A({ form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: { shopId: "" }, tableLoading2: false, tableOption2: he, selectRow: a.value }), C = z(null);
  function g(o, t) {
    e.tableLoading2 = true, a.shopId && a.shopId != "-1" && (e.paramsSearch2.shopId = a.shopId), fe(R(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, t, e.paramsSearch2))).then((f) => {
      const w = f.data.records;
      w.forEach(function(T) {
        const U = [];
        T.categoryFirst && U.push(T.categoryFirst), T.categorySecond && U.push(T.categorySecond), T.categoryId = U;
      }), e.tableData2 = w, e.page2.total = f.data.total, e.page2.currentPage = o.currentPage, e.page2.pageSize = o.pageSize, e.tableLoading2 = false, i.$nextTick(() => {
        C.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function v(o, t) {
    o = R(o), e.paramsSearch2 = o, e.page2.currentPage = 1, g(e.page2, o), t();
  }
  function y() {
    g(e.page2);
  }
  function I(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = t) : o.order == "descending" ? (e.page2.ascs = "", e.page2.descs = t) : (e.page2.ascs = "", e.page2.descs = ""), g(e.page2);
  }
  function d(o) {
    e.selectRow = o.id, n.emit("update:value", o.id), n.emit("onChangeItem", o);
  }
  return { ...q(e), crud: C, rowClick: d, getPage2: g, searchChange2: v, refreshChange2: y, sortChange2: I };
} };
function Le(a, n, i, e, C, g) {
  const v = m("el-radio"), y = m("el-image"), I = m("el-switch"), d = m("avue-crud");
  return b(), P("div", null, [s(d, { ref: "crud", modelValue: a.form2, "onUpdate:modelValue": n[1] || (n[1] = (o) => a.form2 = o), page: a.page2, data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onRowClick: e.rowClick, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2 }, { radio: h(({ row: o }) => [s(v, { modelValue: a.selectRow, "onUpdate:modelValue": n[0] || (n[0] = (t) => a.selectRow = t), value: o.id }, { default: h(() => [...n[2] || (n[2] = [S("br", null, null, -1)])]), _: 1 }, 8, ["modelValue", "value"])]), picUrl: h((o) => [s(y, { style: { width: "50px", height: "50px" }, src: o.row.picUrl }, null, 8, ["src"])]), shelf: h((o) => [s(I, { disabled: "", "active-value": "1", "inactive-value": "0", modelValue: o.row.shelf, "onUpdate:modelValue": (t) => o.row.shelf = t, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onRowClick", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"])]);
}
const oe = B(ke, [["render", Le]]), { $t: p } = ee(), Ta = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 100, searchGutter: 50, searchLabelPosition: "right", labelPosition: "left", column: [{ label: p("mall.goodscategory.parentId"), prop: "parentId", type: "tree", span: 20, hide: true, props: { label: "name", value: "id" }, rules: [{ required: true, message: p("mall.goodscategory.parentId") + p("commons.notNull"), trigger: "change" }] }, { label: p("mall.goodscategory.name"), prop: "name", align: "left", span: 20, rules: [{ required: true, message: p("mall.goodscategory.name") + p("commons.notNull"), trigger: "blur" }, { max: 16, message: p("commons.lengthTips", { length: 16 }) }] }, { label: p("mall.goodscategory.enable"), prop: "enable", type: "radio", sortable: true, span: 20, slot: true, rules: [{ required: true, message: p("mall.goodscategory.enable") + p("commons.notNull"), trigger: "blur" }], dicData: [{ label: p("commons.close"), value: "0" }, { label: p("commons.open"), value: "1" }] }, { label: p("mall.goodscategory.sort"), type: "number", prop: "sort", span: 20, rules: [{ required: true, message: p("mall.goodscategory.sort") + p("commons.notNull"), trigger: "blur" }] }, { label: p("mall.goodscategory.picUrl"), prop: "picUrl", width: 200, span: 20, dataType: "string", type: "img", align: "center", slot: true, formslot: true, rules: [{ required: true, message: p("commons.notNull"), trigger: "change" }] }, { label: p("mall.goodscategory.page"), prop: "page", hide: true, formslot: true }, { label: p("commons.createTime"), prop: "createTime", editDisplay: false, addDisplay: false }, { label: p("mall.goodscategory.updateTime"), prop: "updateTime", editDisplay: false, addDisplay: false }] }, De = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, editBtn: false, delBtn: false, addBtn: false, menu: false, maxHeight: 500, searchMenuSpan: 6, column: [{ label: "", prop: "radio", width: 90, hide: false }, { label: p("mall.goodscategory.parentId"), prop: "parentId", type: "tree", hide: true, props: { label: "name", value: "id" }, rules: [{ required: true, message: p("mall.goodscategory.parentId") + p("commons.notNull"), trigger: "change" }] }, { label: p("mall.goodscategory.name"), prop: "name", align: "left", rules: [{ required: true, message: p("mall.goodscategory.name") + p("commons.notNull"), trigger: "blur" }, { max: 16, message: p("commons.lengthTips", { length: 16 }) }] }, { label: p("mall.goodscategory.enable"), prop: "enable", type: "radio", sortable: true, span: 24, slot: true, rules: [{ required: true, message: p("mall.goodscategory.enable") + p("commons.notNull"), trigger: "blur" }], dicData: [{ label: p("commons.close"), value: "0" }, { label: p("commons.open"), value: "1" }] }, { label: p("mall.goodscategory.sort"), type: "number", prop: "sort", rules: [{ required: true, message: p("mall.goodscategory.sort") + p("commons.notNull"), trigger: "blur" }] }, { label: p("mall.goodscategory.picUrl"), prop: "picUrl", width: 80, dataType: "array", slot: true, formslot: true, rules: [{ type: "array", required: true, message: p("commons.notNull"), trigger: "change" }] }, { label: p("mall.goodscategory.page"), prop: "page", hide: true, formslot: true }, { label: p("commons.createTime"), prop: "createTime", editDisplay: false, addDisplay: false }, { label: p("mall.goodscategory.updateTime"), prop: "updateTime", editDisplay: false, addDisplay: false }] }, Ve = { props: { shopId: { type: String }, value: { type: String }, goodsCategory: { type: Object } }, setup(a, n) {
  const { proxy: i } = N(), e = A({ form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: {}, tableLoading2: false, tableOption2: De, selectRow: a.value }), C = z(null);
  function g() {
    e.tableLoading2 = true, ye().then((t) => {
      const f = t.data;
      e.tableLoading2 = false, e.tableData2 = f;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function v(t, f) {
    t = R(t), e.paramsSearch2 = t, e.page2.currentPage = 1, g(), f();
  }
  function y() {
    g();
  }
  function I(t) {
    const f = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = f) : t.order == "descending" ? (e.page2.ascs = "", e.page2.descs = f) : (e.page2.ascs = "", e.page2.descs = ""), g();
  }
  function d(t) {
    if (t.parentId == "0") return 1;
    if (t.children && t.children.length > 0) return 2;
    {
      let f = 3;
      return e.tableData2.map((w) => {
        w.children && w.children.map((T) => {
          if (T.id == t.id) return f = 2, 2;
        });
      }), f;
    }
  }
  function o(t, f, w, T) {
    e.selectRow = t.id, t.levelNum = d(t), n.emit("update:value", t.id), n.emit("update:goodsCategory", t), n.emit("onChangeItem", t);
  }
  return { ...q(e), crud: C, rowClick: o, getPage2: g, searchChange2: v, refreshChange2: y, sortChange2: I };
} };
function Oe(a, n, i, e, C, g) {
  const v = m("el-radio"), y = m("el-image"), I = m("el-switch"), d = m("avue-crud");
  return b(), P("div", null, [s(d, { ref: "crud", modelValue: a.form2, "onUpdate:modelValue": n[1] || (n[1] = (o) => a.form2 = o), page: a.page2, data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onRowClick: e.rowClick, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2 }, { radio: h(({ row: o }) => [s(v, { modelValue: a.selectRow, "onUpdate:modelValue": n[0] || (n[0] = (t) => a.selectRow = t), value: o.id }, { default: h(() => [...n[2] || (n[2] = [S("br", null, null, -1)])]), _: 1 }, 8, ["modelValue", "value"])]), picUrl: h((o) => [s(y, { style: { width: "50px", height: "50px" }, src: o.row.picUrl }, null, 8, ["src"])]), shelf: h((o) => [s(I, { modelValue: o.row.enable, "onUpdate:modelValue": (t) => o.row.enable = t, disabled: "", "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onRowClick", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"])]);
}
const ne = B(Ve, [["render", Oe]]), { $t: u } = ee(), ka = { dialogDrag: true, indexLabel: u("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 100, searchGutter: 50, searchLabelPosition: "right", labelPosition: "left", column: [{ label: u("mall.goodscategoryshop.parentId"), prop: "parentId", type: "tree", span: 20, hide: true, props: { label: "name", value: "id" }, rules: [{ required: true, message: u("mall.goodscategoryshop.parentId") + u("commons.notNull"), trigger: "change" }] }, { label: u("mall.goodscategoryshop.name"), prop: "name", align: "left", span: 20, sortable: true, rules: [{ required: true, message: u("mall.goodscategoryshop.name") + u("commons.notNull"), trigger: "blur" }, { max: 16, message: u("commons.lengthTips", { length: 16 }) }] }, { label: u("mall.goodscategoryshop.enable"), prop: "enable", type: "radio", sortable: true, span: 20, slot: true, rules: [{ required: true, message: u("mall.goodscategoryshop.enable") + u("commons.notNull"), trigger: "blur" }], dicData: [{ label: u("commons.close"), value: "0" }, { label: u("commons.open"), value: "1" }] }, { label: u("mall.goodscategoryshop.sort"), type: "number", prop: "sort", span: 20, rules: [{ required: true, message: u("mall.goodscategoryshop.sort") + u("commons.notNull"), trigger: "blur" }] }, { label: u("mall.goodscategoryshop.picUrl"), prop: "picUrl", width: 200, dataType: "string", type: "img", align: "center", span: 20, slot: true, formslot: true, rules: [{ required: true, message: u("commons.notNull"), trigger: "change" }] }, { label: u("mall.goodscategoryshop.page"), prop: "page", hide: true, span: 20, formslot: true }] }, Re = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, editBtn: false, delBtn: false, addBtn: false, menu: false, maxHeight: 500, searchMenuSpan: 6, column: [{ label: "", prop: "radio", width: 60, hide: false }, { label: u("mall.goodscategoryshop.parentId"), prop: "parentId", type: "tree", hide: true, props: { label: "name", value: "id" }, rules: [{ required: true, message: u("mall.goodscategoryshop.parentId") + u("commons.notNull"), trigger: "change" }] }, { label: u("mall.goodscategoryshop.name"), prop: "name", align: "left", rules: [{ required: true, message: u("mall.goodscategoryshop.name") + u("commons.notNull"), trigger: "blur" }, { max: 16, message: u("commons.lengthTips", { length: 16 }) }] }, { label: u("mall.goodscategoryshop.enable"), prop: "enable", type: "radio", sortable: true, span: 24, slot: true, rules: [{ required: true, message: u("mall.goodscategoryshop.enable") + u("commons.notNull"), trigger: "blur" }], dicData: [{ label: u("commons.close"), value: "0" }, { label: u("commons.open"), value: "1" }] }, { label: u("mall.goodscategoryshop.sort"), type: "number", sortable: true, prop: "sort", rules: [{ required: true, message: u("mall.goodscategoryshop.sort") + u("commons.notNull"), trigger: "blur" }] }, { label: u("mall.goodscategoryshop.picUrl"), prop: "picUrl", width: 80, dataType: "array", slot: true, formslot: true, rules: [{ type: "array", required: true, message: u("commons.notNull"), trigger: "change" }] }, { label: u("mall.goodscategoryshop.page"), prop: "page", hide: true, formslot: true }, { label: u("commons.createTime"), prop: "createTime", editDisplay: false, addDisplay: false }, { label: u("commons.updateTime"), prop: "updateTime", editDisplay: false, addDisplay: false }] }, Ue = { props: { shopId: { type: String, required: true }, value: { type: String }, goodsCategory: { type: Object } }, setup(a, n) {
  const { proxy: i } = N(), e = A({ form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: {}, tableLoading2: false, tableOption2: Re, selectRow: a.value }), C = z(null);
  function g() {
    e.tableLoading2 = true, be(R({ shopId: a.shopId })).then((o) => {
      const t = o.data, f = [{ id: "0", name: i.$t("mall.goodscategory.parentTop"), parentId: "0" }];
      t.forEach((w) => {
        f.push({ id: w.id, name: w.name, parentId: w.parentId });
      }), C.value.DIC.parentId = f, e.tableLoading2 = false, e.tableData2 = t;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function v(o, t) {
    o = R(o), e.paramsSearch2 = o, e.page2.currentPage = 1, g(), t();
  }
  function y() {
    g();
  }
  function I(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = t) : o.order == "descending" ? (e.page2.ascs = "", e.page2.descs = t) : (e.page2.ascs = "", e.page2.descs = ""), g();
  }
  function d(o) {
    e.selectRow = o.id, n.emit("update:value", o.id), n.emit("update:goodsCategory", o), n.emit("onChangeItem", o);
  }
  return { ...q(e), crud: C, rowClick: d, getPage2: g, searchChange2: v, refreshChange2: y, sortChange2: I };
} };
function xe(a, n, i, e, C, g) {
  const v = m("el-radio"), y = m("el-image"), I = m("el-switch"), d = m("avue-crud");
  return b(), P("div", null, [s(d, { ref: "crud", modelValue: a.form2, "onUpdate:modelValue": n[1] || (n[1] = (o) => a.form2 = o), page: a.page2, data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onRowClick: e.rowClick, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2 }, { radio: h(({ row: o }) => [s(v, { modelValue: a.selectRow, "onUpdate:modelValue": n[0] || (n[0] = (t) => a.selectRow = t), value: o.id }, { default: h(() => [...n[2] || (n[2] = [S("br", null, null, -1)])]), _: 1 }, 8, ["modelValue", "value"])]), picUrl: h((o) => [s(y, { style: { width: "50px", height: "50px" }, src: o.row.picUrl }, null, 8, ["src"])]), shelf: h((o) => [s(I, { disabled: "", "active-value": "1", "inactive-value": "0", modelValue: o.row.enable, "onUpdate:modelValue": (t) => o.row.enable = t, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onRowClick", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"])]);
}
const te = B(Ue, [["render", xe]]), Ne = { props: { shopId: { type: String }, value: { type: String } }, setup(a, n) {
  const { proxy: i } = N(), e = A({ form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: { shopId: "" }, tableLoading2: false, tableOption2: Ce, selectRow: a.value, seckillHallDateList: [] }), C = z(null);
  function g(o, t) {
    e.tableLoading2 = true, e.tableLoading2 = true, a.shopId && a.shopId != "-1" && (e.paramsSearch2.shopId = a.shopId), ve(R(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, t, e.paramsSearch2))).then((f) => {
      const w = f.data.records;
      e.tableData2 = w, e.page2.total = f.data.total, e.page2.currentPage = o.currentPage, e.page2.pageSize = o.pageSize, e.tableLoading2 = false, i.$nextTick(() => {
        C.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function v(o, t) {
    o = R(o), e.paramsSearch2 = o, e.page2.currentPage = 1, g(e.page2, o), t();
  }
  function y() {
    g(e.page2);
  }
  function I(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = t) : o.order == "descending" ? (e.page2.ascs = "", e.page2.descs = t) : (e.page2.ascs = "", e.page2.descs = ""), g(e.page2);
  }
  function d(o) {
    e.selectRow = o.id, n.emit("update:value", o.id), n.emit("onChangeItem", o);
  }
  return { ...q(e), crud: C, rowClick: d, getPage2: g, searchChange2: v, refreshChange2: y, sortChange2: I };
} };
function Ae(a, n, i, e, C, g) {
  const v = m("el-radio"), y = m("el-image"), I = m("avue-crud");
  return b(), P("div", null, [s(I, { ref: "crud", modelValue: a.form2, "onUpdate:modelValue": n[1] || (n[1] = (d) => a.form2 = d), page: a.page2, data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onRowClick: e.rowClick, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2 }, { radio: h(({ row: d }) => [s(v, { modelValue: a.selectRow, "onUpdate:modelValue": n[0] || (n[0] = (o) => a.selectRow = o), value: d.id }, { default: h(() => [...n[2] || (n[2] = [S("br", null, null, -1)])]), _: 1 }, 8, ["modelValue", "value"])]), picUrl: h((d) => [s(y, { style: { width: "50px", height: "50px" }, src: d.row.picUrl }, null, 8, ["src"])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onRowClick", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"])]);
}
const le = B(Ne, [["render", Ae]]), ze = { props: { shopId: { type: String }, value: { type: String } }, setup(a, n) {
  const { proxy: i } = N(), e = A({ form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: { shopId: "" }, tableLoading2: false, tableOption2: Ie, selectRow: a.value, selectionGoodsSpu: [] }), C = z(null);
  function g(t, f) {
    e.tableLoading2 = true, e.tableLoading2 = true, a.shopId && a.shopId != "-1" && (e.paramsSearch2.shopId = a.shopId), Pe(R(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, f, e.paramsSearch2))).then((w) => {
      const T = w.data.records;
      e.tableData2 = T, e.page2.total = w.data.total, e.page2.currentPage = t.currentPage, e.page2.pageSize = t.pageSize, e.tableLoading2 = false, i.$nextTick(() => {
        C.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function v(t, f) {
    t = R(t), e.paramsSearch2 = t, e.page2.currentPage = 1, g(e.page2, t), f();
  }
  function y() {
    g(e.page2);
  }
  function I(t) {
    const f = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = f) : t.order == "descending" ? (e.page2.ascs = "", e.page2.descs = f) : (e.page2.ascs = "", e.page2.descs = ""), g(e.page2);
  }
  function d(t) {
    e.selectionGoodsSpu = t;
  }
  function o(t) {
    e.selectRow = t.id, n.emit("update:value", t.id), n.emit("onChangeItem", t);
  }
  return { ...q(e), crud: C, rowClick: o, getPage2: g, searchChange2: v, refreshChange2: y, sortChange2: I, selectionChange2: d };
} };
function qe(a, n, i, e, C, g) {
  const v = m("el-radio"), y = m("el-image"), I = m("avue-crud");
  return b(), $(I, { ref: "crud", modelValue: a.form2, "onUpdate:modelValue": n[1] || (n[1] = (d) => a.form2 = d), page: a.page2, data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onRowClick: e.rowClick, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2 }, { radio: h(({ row: d }) => [s(v, { modelValue: a.selectRow, "onUpdate:modelValue": n[0] || (n[0] = (o) => a.selectRow = o), value: d.id }, { default: h(() => [...n[2] || (n[2] = [S("br", null, null, -1)])]), _: 1 }, 8, ["modelValue", "value"])]), picUrl: h((d) => [s(y, { style: { width: "50px", height: "50px" }, src: d.row.picUrl }, null, 8, ["src"])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onRowClick", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"]);
}
const se = B(ze, [["render", qe]]), Be = { props: { shopId: { type: String }, value: { type: String } }, setup(a, n) {
  const { proxy: i } = N(), e = A({ form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: { shopId: "" }, tableLoading2: false, tableOption2: we, selectRow: a.value }), C = z(null);
  function g(o, t) {
    e.tableLoading2 = true, e.tableLoading2 = true, a.shopId && a.shopId != "-1" && (e.paramsSearch2.shopId = a.shopId), _e(R(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, t, e.paramsSearch2))).then((f) => {
      const w = f.data.records;
      e.tableData2 = w, e.page2.total = f.data.total, e.page2.currentPage = o.currentPage, e.page2.pageSize = o.pageSize, e.tableLoading2 = false, i.$nextTick(() => {
        C.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function v(o, t) {
    o = R(o), e.paramsSearch2 = o, e.page2.currentPage = 1, g(e.page2, o), t();
  }
  function y() {
    g(e.page2);
  }
  function I(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = t) : o.order == "descending" ? (e.page2.ascs = "", e.page2.descs = t) : (e.page2.ascs = "", e.page2.descs = ""), g(e.page2);
  }
  function d(o) {
    e.selectRow = o.id, n.emit("update:value", o.id), n.emit("onChangeItem", o);
  }
  return { ...q(e), crud: C, rowClick: d, getPage2: g, searchChange2: v, refreshChange2: y, sortChange2: I };
} };
function je(a, n, i, e, C, g) {
  const v = m("el-radio"), y = m("el-image"), I = m("avue-crud");
  return b(), P("div", null, [s(I, { ref: "crud", modelValue: a.form2, "onUpdate:modelValue": n[1] || (n[1] = (d) => a.form2 = d), page: a.page2, data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onRowClick: e.rowClick, onOnLoad: e.getPage2, onRefreshChange: e.refreshChange2, onSortChange: e.sortChange2, onSearchChange: e.searchChange2 }, { radio: h(({ row: d }) => [s(v, { modelValue: a.selectRow, "onUpdate:modelValue": n[0] || (n[0] = (o) => a.selectRow = o), value: d.id }, { default: h(() => [...n[2] || (n[2] = [S("br", null, null, -1)])]), _: 1 }, 8, ["modelValue", "value"])]), picUrl: h((d) => [s(y, { style: { width: "50px", height: "50px" }, src: d.row.picUrl }, null, 8, ["src"])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onRowClick", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange"])]);
}
const re = B(Be, [["render", je]]), k = { singlePage: "\u5355\u9875\u9762", seckillPage: "\u79D2\u6740\u8BE6\u60C5\u9875\u9762", bargainPage: "\u780D\u4EF7\u8BE6\u60C5\u9875\u9762", grouponPage: "\u62FC\u56E2\u8BE6\u60C5\u9875\u9762", goodsPage: "\u5546\u54C1\u8BE6\u60C5\u9875\u9762", goodsCategoryPage: "\u5546\u54C1\u5206\u7C7B\u9875\u9762", articlePage: "\u6587\u7AE0\u8BE6\u60C5\u9875\u9762", shopPage: "\u5E97\u94FA\u8BE6\u60C5\u9875\u9762", pageDevisePage: "\u88C5\u4FEE\u9875\u9762", httpPage: "\u5916\u94FE", miniProgram: "\u5C0F\u7A0B\u5E8F" }, Q = { data: [{ name: "\u5355\u9875\u9762", children: [{ name: "\u5546\u57CE\u9875\u9762", pageType: k.singlePage, children: [{ name: "\u57FA\u7840\u9875\u9762", children: [{ path: "/pages/home/index", name: "\u9996\u9875" }, { path: "/pages/base/search/index", name: "\u641C\u7D22\u9875" }, { path: "/pages/goods/goods-category/index", name: "\u5546\u54C1\u5206\u7C7B" }, { path: "/pages/goods/goods-list/index", name: "\u5546\u54C1\u5217\u8868" }, { path: "/pages/shopping-cart/index", name: "\u8D2D\u7269\u8F66" }, { path: "/pages/shop/shop-list/index", name: "\u5E97\u94FA\u5217\u8868" }, { path: "/pages/article/article-list/index", name: "\u6587\u7AE0\u5217\u8868" }, { path: "/pages/message/list/index", name: "\u804A\u5929\u5217\u8868" }, { path: "/pages/live/room-list/index", name: "\u76F4\u64AD(\u4EC5\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F)" }, { path: "/package-live/pages/room-list/index", name: "\u76F4\u64AD\u5217\u8868" }] }, { name: "\u7528\u6237\u9875\u9762", children: [{ path: "/pages/user/user-center/index", name: "\u4E2A\u4EBA\u4E2D\u5FC3" }, { path: "/pages/order/order-list/index", name: "\u8BA2\u5355\u5217\u8868" }, { path: "/pages/user/user-info/index", name: "\u4E2A\u4EBA\u8D44\u6599" }, { path: "/pages/user/user-address/list/index", name: "\u5730\u5740\u5217\u8868" }, { path: "/pages/user/user-bill/list/index", name: "\u53D1\u7968\u5217\u8868" }, { path: "/pages/user/user-collect/index", name: "\u6536\u85CF\u5217\u8868" }, { path: "/pages/user/user-footprint/index", name: "\u8DB3\u8FF9\u5217\u8868" }, { path: "/pages/user/user-appraises/index", name: "\u8BC4\u4EF7\u5217\u8868" }, { path: "/pages/user/user-points-record/index", name: "\u79EF\u5206\u8BB0\u5F55" }, { path: "/pages/signrecord/signrecord-info/index", name: "\u79EF\u5206\u7B7E\u5230" }, { path: "/pages/signrecord/signrecord-list/index", name: "\u7B7E\u5230\u8BB0\u5F55" }, { path: "/pages/shop/shop-apply/index", name: "\u5E97\u94FA\u7533\u8BF7\u5165\u9A7B" }, { path: "/pages/user-balance/user-balance/index", name: "\u7528\u6237\u4F59\u989D" }, { path: "/pages/customer-service/mall/index", name: "\u5546\u57CE\u5BA2\u670D" }, { path: "/pages/user-vip/vip-center/index", name: "\u4ED8\u8D39\u4F1A\u5458" }] }, { name: "\u5206\u9500\u9875\u9762", children: [{ path: "/pages/distribution/distribution-center/index", name: "\u5206\u9500\u4E2D\u5FC3" }, { path: "/pages/distribution/distribution-card/index", name: "\u5206\u9500\u63A8\u5E7F" }, { path: "/pages/distribution/distribution-promotion-statistical/index", name: "\u5206\u9500\u7EDF\u8BA1" }, { path: "/pages/distribution/distribution-promotion-ranking/index", name: "\u5206\u9500\u6392\u884C" }, { path: "/pages/distribution/distribution-order-list/index", name: "\u5206\u9500\u8BA2\u5355" }] }] }, { name: "\u8425\u9500\u9875\u9762", pageType: k.singlePage, children: [{ name: "\u79D2\u6740", children: [{ path: "/pages/seckill/seckill-list/index", name: "\u79D2\u6740\u5217\u8868" }, { path: "/pages/seckill/seckill-user-list/index", name: "\u79D2\u6740\u8BB0\u5F55" }] }, { name: "\u780D\u4EF7", children: [{ path: "/pages/bargain/bargain-list/index", name: "\u780D\u4EF7\u5217\u8868" }, { path: "/pages/bargain/bargain-user-list/index", name: "\u780D\u4EF7\u8BB0\u5F55" }] }, { name: "\u62FC\u56E2", children: [{ path: "/pages/groupon/groupon-list/index", name: "\u62FC\u56E2\u5217\u8868" }, { path: "/pages/groupon/groupon-user-list/index", name: "\u62FC\u56E2\u8BB0\u5F55" }] }, { name: "\u4F18\u60E0\u5238", children: [{ path: "/pages/coupon/coupon-list/index", name: "\u4F18\u60E0\u5238\u5217\u8868" }, { path: "/pages/coupon/coupon-user-list/index", name: "\u7528\u6237\u4F18\u60E0\u5238" }] }] }] }, { name: "\u5546\u54C1\u9875\u9762", children: [{ name: "\u666E\u901A\u5546\u54C1", pageType: k.goodsPage, path: "/pages/goods/goods-detail/index", children: [] }, { name: "\u780D\u4EF7\u5546\u54C1", pageType: k.bargainPage, path: "/pages/bargain/bargain-detail/index", children: [] }, { name: "\u62FC\u56E2\u5546\u54C1", pageType: k.grouponPage, path: "/pages/groupon/groupon-detail/index", children: [] }, { name: "\u5546\u54C1\u5206\u7C7B\u67E5\u8BE2", pageType: k.goodsCategoryPage, path: "/pages/goods/goods-list/index", children: [] }] }, { name: "\u6587\u7AE0\u9875\u9762", children: [{ name: "\u6587\u7AE0\u8BE6\u60C5", pageType: k.articlePage, path: "/pages/article/article-info/index", children: [] }] }, { name: "\u81EA\u5B9A\u4E49\u9875\u9762", children: [{ name: "\u88C5\u4FEE\u9875\u9762", pageType: k.pageDevisePage, children: [{ name: "\u9996\u9875", path: "/pages/home/index", isShopPage: false, children: [] }, { name: "\u4E2A\u4EBA\u4E2D\u5FC3", path: "/pages/user/user-center/index", isShopPage: false, children: [] }, { name: "\u81EA\u5B9A\u4E49\u9875\u97621", path: "/pages/page-devise/index1", children: [] }, { name: "\u81EA\u5B9A\u4E49\u9875\u97622", path: "/pages/page-devise/index2", children: [] }, { name: "\u81EA\u5B9A\u4E49\u9875\u97623", path: "/pages/page-devise/index3", children: [] }, { name: "\u81EA\u5B9A\u4E49\u9875\u97624", path: "/pages/page-devise/index4", children: [] }, { name: "\u81EA\u5B9A\u4E49\u9875\u97625", path: "/pages/page-devise/index5", children: [] }] }, { name: "\u81EA\u5B9A\u4E49\u94FE\u63A5", pageType: k.httpPage, children: [] }] }] }, $e = { components: { goodsPage: ae, goodsGrouponPage: se, goodsSeckillPage: le, goodsBargainPage: re, goodsCategoryPage: ne, goodsCategoryShopPage: te, pageDevisePage: Se, articlePage: oe }, props: { page: [String], clientType: { type: String, default: "" }, shopId: { type: String, default: "-1" }, disabled: { type: Boolean, default: false } }, setup(a, n) {
  const { proxy: i } = N(), e = A({ pageType: k, firstLoad: true, showDialog: false, pageUrls: [], defaultProps: { children: "children", key: "name", label: "name" }, showPages: [], showPagePath: [], showPagesType: "", selectId: "", goodsCategory: { parentId: void 0, levelNum: 2, name: void 0 }, selectPage: "", curRow: {}, wxAppList: [], selectAppId: "" }), C = z(), g = ce(() => a.page);
  ue(() => {
    e.pageUrls = o(), v(), E();
  });
  function v() {
    g.value && (e.selectId = y(g.value, "id"));
  }
  function y(l, _) {
    var r = new RegExp("(^|\\?|&)" + _ + "=([^&]*)(\\s|&|$)", "i");
    return r.test(l) ? unescape(RegExp.$2.replace(/\+/g, " ")) : "";
  }
  function I(l = g.value) {
    let _ = "";
    if (l) {
      let r = l;
      (r.indexOf("http") != -1 || r.indexOf("?") != -1) && (r = r.substring(r.indexOf("/"), r.indexOf("?"))), e.selectPage = r, Q.data.map((L) => {
        L.children.map((O) => {
          O.children && O.children.length > 0 ? O.children.map((x) => {
            x.children && x.children.length > 0 ? x.children.map((M) => {
              M.path == r && (_ = M.name);
            }) : x.path == r && (_ = x.name);
          }) : O.path == r && (_ = O.name);
        });
      });
    }
    return _;
  }
  function d() {
    a.disabled || (e.showDialog = true, e.showDialog && e.firstLoad && i.$nextTick(() => {
      e.firstLoad = false;
      const l = Q.data[0].children[0].name;
      C.value.setCurrentKey(l);
      const _ = C.value.getNode(l);
      t(_ == null ? void 0 : _.data);
    }));
  }
  function o() {
    let l = JSON.parse(JSON.stringify(Q.data));
    a.shopId != "-1" && (l = l.map((r) => (r.children && (r.children = r.children.filter((L) => L.pageType != k.articlePage), r.children.length == 0 && (r = null)), r)), l = l.filter((r) => !!r));
    function _(r, L = 1) {
      if (L > 1) r.data = r.children, r.children = [];
      else if (r.children && r.children.length > 0) for (let O = 0; O < r.children.length; O++) _(r.children[O], L + 1);
    }
    for (let r = 0; r < l.length; r++) l[r].showCheckbox = false, _(l[r]);
    return l;
  }
  function t(l) {
    e.showPages = l.data || [], e.showPagePath = l.path || "", e.showPagesType = l.pageType || "";
  }
  function f() {
    let l = "";
    if (e.showPagesType == k.singlePage || e.showPagesType == k.httpPage) l = e.selectPage;
    else if (e.showPagesType == k.goodsCategoryPage) e.goodsCategory && (a.shopId && a.shopId != "-1" ? e.goodsCategory.parentId == 0 ? l = e.showPagePath + "?categoryShopFirst=" + e.selectId + "&title=" + e.goodsCategory.name : e.goodsCategory.levelNum == 2 ? l = e.showPagePath + "?categoryShopSecond=" + e.selectId + "&title=" + e.goodsCategory.name : l = e.showPagePath + "?categoryShopThird=" + e.selectId + "&title=" + e.goodsCategory.name : e.goodsCategory.parentId == 0 ? l = e.showPagePath + "?categoryFirst=" + e.selectId + "&title=" + e.goodsCategory.name : e.goodsCategory.levelNum == 2 ? l = e.showPagePath + "?categorySecond=" + e.selectId + "&title=" + e.goodsCategory.name : l = e.showPagePath + "?categoryThird=" + e.selectId + "&title=" + e.goodsCategory.name);
    else {
      if (!e.selectId) {
        i.$message.error(i.$t("components.apppageselect.selectTip"));
        return;
      }
      e.showPagesType == k.pageDevisePage ? l = e.selectId : l = e.showPagePath + "?id=" + e.selectId;
    }
    l = T(l), n.emit("changePage", l), n.emit("onChangeItem", e.curRow, l), e.showDialog = false;
  }
  function w(l) {
    e.selectPage = l.path;
  }
  function T(l) {
    return a.shopId && a.shopId != "-1" && l.indexOf("shopId") == -1 && (l.indexOf("?") > -1 ? l = l + "&shopId=" + a.shopId : l = l + "?shopId=" + a.shopId), l;
  }
  function U() {
    a.page && (me(a.page) ? i.$message.success("\u590D\u5236\u6210\u529F") : i.$message.error("\u590D\u5236\u5931\u8D25"));
  }
  function H() {
    e.curRow = {}, n.emit("changePage", ""), n.emit("onChangeItem", e.curRow);
  }
  function Z(l) {
    e.curRow = l;
  }
  function E() {
    Te({ appType: "1", shopId: a.shopId }).then((l) => {
      const _ = l.data.records;
      _ && _.length > 0 ? e.wxAppList = _ : e.wxAppList = [];
    });
  }
  function G(l, _) {
    if (l) {
      const r = a.clientType == K.APP ? e.wxAppList.filter((L) => L ? L.weixinSign.toLowerCase().indexOf(l.toLowerCase()) === 0 : false) : e.wxAppList.filter((L) => L ? L.id.toLowerCase().indexOf(l.toLowerCase()) === 0 : false);
      _(r);
    } else _(e.wxAppList);
  }
  function W(l) {
    l ? a.clientType == K.APP ? e.selectAppId = l.weixinSign : e.selectAppId = l.id : e.selectAppId = "";
  }
  return { ...q(e), treeRef: C, onClear: H, pageValue: g, getPageName: I, changeDialog: d, onConfirm: f, onSelectPage: w, copyText: U, handleNodeClick: t, onChangeItem: Z, clientTypesValue: K, querySearchWxMaId: G, handleSelect: W };
} }, Me = { class: "w-full" }, Fe = ["title"], He = { key: 0 }, Ze = { class: "font-bold text-blue" }, Ee = { key: 1 }, Ge = { key: 2 }, We = { key: 3 }, Je = { key: 4 }, Ke = { key: 5 }, Qe = { key: 6 }, Xe = { key: 7 }, Ye = { key: 8, class: "px-[20px] py-[20px]" }, ea = { class: "mb-[10px]" }, aa = { class: "jl-text-tips mt-[10px]" }, oa = { key: 9, class: "px-[20px] py-[20px]" }, na = { key: 0, class: "jl-text-tips flex-c" }, ta = { key: 1 }, la = { class: "mb-[10px]" }, sa = { class: "flex items-center" }, ra = { class: "leading-[20px]" }, ia = { class: "jl-text-tips" }, ga = { class: "jl-text-tips" }, da = { key: 0, class: "mt-2" }, pa = { key: 1, class: "mt-2" };
function ca(a, n, i, e, C, g) {
  const v = m("CircleClose"), y = m("el-icon"), I = m("ArrowRight"), d = m("el-input"), o = m("CopyDocument"), t = m("el-text"), f = m("el-tree"), w = m("el-aside"), T = m("el-button"), U = m("el-col"), H = m("el-row"), Z = ae, E = re, G = se, W = le, l = te, _ = ne, r = oe, L = m("page-devise-page"), O = m("el-avatar"), x = m("el-autocomplete"), M = m("el-main"), ie = m("el-container"), ge = m("el-dialog");
  return b(), P("div", Me, [S("div", null, [S("div", { class: "cursor-pointer", onClick: n[1] || (n[1] = J((...c) => e.changeDialog && e.changeDialog(...c), ["stop"])) }, [s(d, { disabled: i.disabled, value: e.getPageName(), title: i.page, readonly: "", placeholder: "path" }, { append: h(() => [i.disabled ? D("", true) : (b(), $(y, { key: 0, class: "mr-[5px]", onClick: n[0] || (n[0] = J((c) => e.onClear(), ["stop"])) }, { default: h(() => [s(v)]), _: 1 })), s(y, null, { default: h(() => [s(I)]), _: 1 })]), _: 1 }, 8, ["disabled", "value", "title"])]), S("div", { class: "flex items-center bg-gray-100 p-[5px] cursor-pointer", title: i.page, onClick: n[2] || (n[2] = J((...c) => e.copyText && e.copyText(...c), ["stop"])) }, [s(y, { size: "15px", class: "mr-[5px]" }, { default: h(() => [s(o)]), _: 1 }), s(t, { class: "ml-[5px] text-nowrap truncate leading-[15px]" }, { default: h(() => [F(V(i.page), 1)]), _: 1 })], 8, Fe)]), s(ge, { modelValue: a.showDialog, "onUpdate:modelValue": n[16] || (n[16] = (c) => a.showDialog = c), width: "1110px", top: "10px", "append-to-body": "" }, { footer: h(() => [s(T, { onClick: n[15] || (n[15] = (c) => a.showDialog = false) }, { default: h(() => [F(V(a.$t("commons.cancel")), 1)]), _: 1 }), s(T, { type: "primary", onClick: e.onConfirm }, { default: h(() => [F(V(a.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])]), default: h(() => [s(ie, { style: { "min-height": "500px" } }, { default: h(() => [s(w, { width: "180px" }, { default: h(() => [s(f, { ref: "treeRef", "node-key": "name", data: a.pageUrls, "default-expand-all": true, "highlight-current": true, props: a.defaultProps, onNodeClick: e.handleNodeClick }, null, 8, ["data", "props", "onNodeClick"])]), _: 1 }), s(M, null, { default: h(() => [a.showPagesType == a.pageType.singlePage ? (b(), P("div", He, [(b(true), P(X, null, Y(a.showPages, (c, de) => (b(), P("div", { key: de }, [S("div", Ze, V(c.name), 1), s(H, { gutter: 5, style: { "margin-bottom": "20px" } }, { default: h(() => [(b(true), P(X, null, Y(c.children, (j, pe) => (b(), $(U, { key: pe, style: { "margin-top": "5px" }, span: 6 }, { default: h(() => [s(T, { type: a.selectPage == j.path ? "primary" : "", class: "w-full", size: "small", text: a.selectPage != j.path, bg: a.selectPage != j.path, onClick: (ma) => e.onSelectPage(j) }, { default: h(() => [F(V(j.name), 1)]), _: 2 }, 1032, ["type", "text", "bg", "onClick"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)]))), 128))])) : D("", true), a.showPagesType == a.pageType.goodsPage ? (b(), P("div", Ee, [s(Z, { value: a.selectId, "onUpdate:value": n[3] || (n[3] = (c) => a.selectId = c), shopId: i.shopId, onOnChangeItem: e.onChangeItem }, null, 8, ["value", "shopId", "onOnChangeItem"])])) : D("", true), a.showPagesType == a.pageType.bargainPage ? (b(), P("div", Ge, [s(E, { value: a.selectId, "onUpdate:value": n[4] || (n[4] = (c) => a.selectId = c), shopId: i.shopId, onOnChangeItem: e.onChangeItem }, null, 8, ["value", "shopId", "onOnChangeItem"])])) : D("", true), a.showPagesType == a.pageType.grouponPage ? (b(), P("div", We, [s(G, { value: a.selectId, "onUpdate:value": n[5] || (n[5] = (c) => a.selectId = c), shopId: i.shopId, onOnChangeItem: e.onChangeItem }, null, 8, ["value", "shopId", "onOnChangeItem"])])) : D("", true), a.showPagesType == a.pageType.seckillPage ? (b(), P("div", Je, [s(W, { value: a.selectId, "onUpdate:value": n[6] || (n[6] = (c) => a.selectId = c), shopId: i.shopId, onOnChangeItem: e.onChangeItem }, null, 8, ["value", "shopId", "onOnChangeItem"])])) : D("", true), a.showPagesType == a.pageType.goodsCategoryPage ? (b(), P("div", Ke, [i.shopId && i.shopId != "-1" ? (b(), $(l, { key: 0, value: a.selectId, "onUpdate:value": n[7] || (n[7] = (c) => a.selectId = c), goodsCategory: a.goodsCategory, "onUpdate:goodsCategory": n[8] || (n[8] = (c) => a.goodsCategory = c), shopId: i.shopId, onOnChangeItem: e.onChangeItem }, null, 8, ["value", "goodsCategory", "shopId", "onOnChangeItem"])) : (b(), $(_, { key: 1, value: a.selectId, "onUpdate:value": n[9] || (n[9] = (c) => a.selectId = c), goodsCategory: a.goodsCategory, "onUpdate:goodsCategory": n[10] || (n[10] = (c) => a.goodsCategory = c), onOnChangeItem: e.onChangeItem }, null, 8, ["value", "goodsCategory", "onOnChangeItem"]))])) : D("", true), a.showPagesType == a.pageType.articlePage ? (b(), P("div", Qe, [s(r, { value: a.selectId, "onUpdate:value": n[11] || (n[11] = (c) => a.selectId = c), onOnChangeItem: e.onChangeItem }, null, 8, ["value", "onOnChangeItem"])])) : D("", true), a.showPagesType == a.pageType.pageDevisePage ? (b(), P("div", Xe, [s(L, { value: a.selectId, "onUpdate:value": n[12] || (n[12] = (c) => a.selectId = c), clientType: i.clientType, shopId: i.shopId, select: true }, null, 8, ["value", "clientType", "shopId"])])) : D("", true), a.showPagesType == a.pageType.httpPage ? (b(), P("div", Ye, [S("div", ea, V(a.$t("components.apppageselect.diyPath")) + ": ", 1), s(d, { modelValue: a.selectPage, "onUpdate:modelValue": n[13] || (n[13] = (c) => a.selectPage = c), placeholder: "\u8F93\u5165\u81EA\u5B9A\u4E49\u5730\u5740" }, null, 8, ["modelValue"]), S("div", aa, V(a.$t("components.apppageselect.diyPathTip")), 1)])) : D("", true), a.showPagesType == a.pageType.miniProgram ? (b(), P("div", oa, [i.clientType == e.clientTypesValue.H5 ? (b(), P("div", na, V(e.clientTypesValue.H5) + "\u7AEF\u4E0D\u652F\u6301\u8BBE\u7F6E\u8DF3\u8F6C\u5C0F\u7A0B\u5E8F ", 1)) : (b(), P("div", ta, [S("div", la, "\u8DF3\u8F6C\u7684\u5C0F\u7A0B\u5E8F:" + V(i.clientType) + "\u7AEF", 1), s(x, { modelValue: a.selectAppId, "onUpdate:modelValue": n[14] || (n[14] = (c) => a.selectAppId = c), "fetch-suggestions": e.querySearchWxMaId, clearable: "", placeholder: a.$t("commons.inputPlease"), onSelect: e.handleSelect }, { default: h(({ item: c }) => [S("div", sa, [s(O, { src: c.logo, class: "mr-[10px]", size: 70, shape: "square" }, null, 8, ["src"]), S("div", null, [S("div", ra, V(c.name), 1), S("div", ia, "AppID: " + V(c.id), 1), S("div", ga, " \u539F\u59CBID: " + V(c.weixinSign), 1)])])]), _: 1 }, 8, ["modelValue", "fetch-suggestions", "placeholder", "onSelect"]), i.clientType == e.clientTypesValue.APP ? (b(), P("div", da, " \u6CE8\u610F:App\u7AEF\u8DF3\u8F6C\u5C0F\u7A0B\u5E8F\u5FC5\u987B\u586B\u5199\u5C0F\u7A0B\u5E8F\u7684\u539F\u59CBID. ")) : D("", true), i.clientType == e.clientTypesValue.MA ? (b(), P("div", pa, " \u6CE8\u610F:\u5C0F\u7A0B\u5E8F\u7AEF\u5FC5\u987B\u586B\u5199\u5C0F\u7A0B\u5E8F\u7684AppID. ")) : D("", true)]))])) : D("", true)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue"])]);
}
const ua = B($e, [["render", ca]]), La = Object.freeze(Object.defineProperty({ __proto__: null, default: ua }, Symbol.toStringTag, { value: "Module" }));
export {
  ua as _,
  ka as a,
  La as b,
  Ta as t
};
