import { n as q, A as x, R as I, p as O, q as $, K as k, S as P, b1 as U, _ as E, r as b, c as D, o as c, b as h, h as f, B as C, g as A, F as V, v as F, a_ as j } from "./index-DAdfXJ2i.js";
import { _ as z } from "./goods-card-item-0N1hfAvK.js";
import { _ as N } from "./goods-select-DrMu2Gwf.js";
import { a as W, p as L, d as Y, g as H, b as M } from "./couponinfo-DcPdU1o6.js";
import { b as K } from "./goodsspu-Dmc9OYVL.js";
import "./goodsspu-DKL_9wDU.js";
const { $t: o } = q();
function Z(s) {
  return { indexLabel: o("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelWidth: 90, searchLabelPosition: "left", labelPosition: "left", column: [{ label: o("mall.couponinfo.shopId"), prop: "shopId", type: "select", span: 24, props: { label: "name", value: "id" }, search: true, filterable: true, clearable: false, editDisabled: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: o("commons.selectShop") + o("commons.notNull"), trigger: "blur" }] }, { label: o("commons.createTime"), prop: "createTime", sortable: true, addDisplay: false, editDisplay: false }, { label: o("mall.couponinfo.name"), prop: "name", span: 24, sortable: true, rules: [{ required: true, message: o("commons.inputTips", { name: o("mall.couponinfo.name") }), trigger: "blur" }, { max: 30, message: o("commons.lengthTips", { length: 30 }) }] }, { label: o("mall.couponinfo.sort"), prop: "sort", type: "number", span: 11, sortable: true, rules: [{ required: true, message: o("commons.inputTips", { name: o("mall.couponinfo.sort") }), trigger: "blur" }] }, { label: o("mall.couponinfo.premiseAmount"), prop: "premiseAmount", type: "number", minRows: 0, min: 0, precision: 2, offset: 1, span: 12, sortable: true, formslot: true, editDisabled: true, rules: [{ required: true, message: o("commons.inputTips", { name: o("mall.couponinfo.premiseAmount") }), trigger: "blur" }], labelTip: o("mall.couponinfo.premiseAmountTip"), formatter: (l) => l.premiseAmount }, { label: o("commons.type"), prop: "type", type: "radio", search: true, span: 10, sortable: true, editDisabled: true, rules: [{ required: true, message: o("commons.selectTips", { name: o("commons.type") }), trigger: "blur" }], dicData: [{ label: o("mall.couponinfo.type1"), value: "1" }, { label: o("mall.couponinfo.type2"), value: "2" }], control: (l) => l == "1" ? { reduceAmount: { display: true }, discount: { display: false } } : { reduceAmount: { display: false }, discount: { display: true } } }, { label: o("mall.couponinfo.reduceAmount"), prop: "reduceAmount", type: "number", min: 0, minRows: 0, precision: 2, offset: 2, span: 12, labelWidth: 200, sortable: true, display: false, editDisabled: true, hide: true, rules: [{ required: true, message: o("commons.inputTips", { name: o("mall.couponinfo.reduceAmount") }), trigger: "blur" }, { required: true, validator: s, trigger: "blur" }] }, { label: o("mall.couponinfo.discount"), prop: "discount", type: "number", minRows: 0.1, maxRows: 9.9, labelWidth: 200, offset: 2, span: 12, precision: 1, max: 10, min: 0, sortable: true, display: false, hide: true, rules: [{ required: true, message: o("commons.inputTips", { name: o("mall.couponinfo.discount") }), trigger: "blur" }], labelTip: o("mall.couponinfo.discountTip") }, { label: o("mall.couponinfo.expireType"), prop: "expireType", type: "radio", search: true, searchLabelWidth: 100, span: 10, sortable: true, rules: [{ required: true, message: o("commons.selectTips", { name: o("mall.couponinfo.expireType") }), trigger: "blur" }], dicData: [{ label: o("mall.couponinfo.expireType1"), value: "1" }, { label: o("mall.couponinfo.expireType2"), value: "2" }], control: (l, a) => a.expireType == "2" ? { validDays: { display: false }, validTime: { display: true } } : { validDays: { display: true }, validTime: { display: false } } }, { label: o("mall.couponinfo.validDays"), prop: "validDays", type: "number", offset: 2, span: 12, min: 1, rules: [{ required: true, message: o("commons.inputTips", { name: o("mall.couponinfo.validDays") }), trigger: "blur" }] }, { label: o("commons.timeRange"), prop: "validTime", sortable: true, span: 12, width: 110, type: "datetimerange", valueFormat: "YYYY-MM-DD HH:mm:ss", rules: [{ type: "array", required: true, message: o("commons.notNull"), trigger: "change" }] }, { label: o("commons.enabled"), prop: "enable", type: "radio", search: true, sortable: true, span: 10, slot: true, rules: [{ required: true, message: o("commons.notNull"), trigger: "blur" }], dicData: [{ label: o("commons.close"), value: "0" }, { label: o("commons.open"), value: "1" }] }, { label: o("mall.couponinfo.stock"), type: "number", prop: "stock", min: 0, offset: 2, span: 12, sortable: true, rules: [{ required: true, message: o("commons.inputTips", { name: o("mall.couponinfo.stock") }), trigger: "blur" }], labelTip: o("mall.couponinfo.stockTip") }, { label: o("mall.couponinfo.suitType"), prop: "suitType", type: "radio", search: true, sortable: true, span: 12, editDisabled: true, rules: [{ required: true, message: o("commons.selectTips", { name: o("mall.couponinfo.suitType") }), trigger: "blur" }], dicData: [{ label: o("commons.allGoods"), value: "1" }, { label: o("commons.designatedGoods"), value: "2" }], control: (l) => l == "2" ? { listGoodsSpu: { display: true } } : { listGoodsSpu: { display: false } } }, { label: o("commons.designatedGoods"), prop: "listGoodsSpu", formslot: true, display: false, hide: true, span: 24 }] };
}
const { $t: J } = q(), Q = { setup() {
  const { proxy: s } = x(), a = I({ form: { premiseAmount: 0, reduceAmount: 0, listGoodsSpu: [], validTime: [], id: "", validBeginTime: "", validEndTime: "", suitType: "", expireType: "", shopId: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, tableOption: Z((e, n, t) => {
    a.form.premiseAmount && a.form.reduceAmount > a.form.premiseAmount ? t(new Error(J("mall.couponinfo.reduceAmountTip"))) : t();
  }), paramsSearch: { categoryFirst: void 0, categorySecond: void 0 }, tableLoading: false, dialogVisibleGoods: false, form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: { categoryId: void 0, categoryFirst: void 0, categorySecond: void 0 }, tableLoading2: false, tableOption2: K, selectionGoodsSpu: [] }), i = O(null), R = $(() => {
    var _a;
    const e = (_a = k()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:couponinfo:add"], delBtn: !!e["mall:couponinfo:del"], editBtn: !!e["mall:couponinfo:edit"], viewBtn: !!e["mall:couponinfo:get"] };
  });
  function B(e) {
    e && e.id && L({ id: e.id, enable: e.enable }).then(() => {
    });
  }
  function v(e) {
    a.form.listGoodsSpu.splice(e, 1);
  }
  function y(e, n) {
    if (a.selectionGoodsSpu = [], n == "add") a.form.validTime = [];
    else if (a.form.expireType == "2") {
      const t = [];
      t.push(a.form.validBeginTime), t.push(a.form.validEndTime), a.form.validTime = t;
    } else a.form.validTime = [];
    (n == "edit" || n == "view") && (a.form.suitType == "2" || a.form.suitType == "3") && M(a.form.id).then((t) => {
      const m = t.data;
      a.form.listGoodsSpu = m.listGoodsSpu;
    }), e();
  }
  function T(e, n) {
    e = U(e), a.paramsSearch = e, a.page.currentPage = 1, p(a.page, e), n();
  }
  function S(e) {
    const n = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (a.page.descs = "", a.page.ascs = n) : e.order == "descending" ? (a.page.ascs = "", a.page.descs = n) : (a.page.ascs = "", a.page.descs = ""), p(a.page);
  }
  function p(e, n) {
    a.tableLoading = true, H(Object.assign({ current: e.currentPage, size: e.pageSize, descs: a.page.descs, ascs: a.page.ascs }, n, a.paramsSearch)).then((t) => {
      a.tableData = t.data.records, a.page.total = t.data.total, a.page.currentPage = e.currentPage, a.page.pageSize = e.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function _(e) {
    s.$confirm(s.$t("commons.confirmDelete"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(function() {
      return Y(e.id);
    }).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.delSuccess"), type: "success" }), p(a.page);
    });
  }
  function G(e, n, t, m) {
    e.expireType == "2" && (e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1]);
    const d = e.listGoodsSpu;
    if (d && d.length > 0) {
      const g = [];
      d.forEach(function(w) {
        g.push({ id: w.id });
      }), e.listGoodsSpu = g;
    } else e.listGoodsSpu = null;
    L(e).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.updateSuccess"), type: "success" }), t(), p(a.page);
    }).catch(() => {
      m();
    });
  }
  function r(e, n, t) {
    e.expireType == "2" && (e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1]);
    const m = e.listGoodsSpu;
    if (m && m.length > 0) {
      const d = [];
      m.forEach(function(g) {
        d.push({ id: g.id });
      }), e.listGoodsSpu = d;
    } else e.listGoodsSpu = null;
    W(e).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.addSuccess"), type: "success" }), n(), p(a.page);
    }).catch(() => {
      t();
    });
  }
  function u() {
    p(a.page);
  }
  return { ...P(a), permissionList: R, changeEnable: B, removeGoods: v, beforeOpen: y, searchChange: T, sortChange: S, getPageF: p, handleDel: _, handleUpdate: G, handleSave: r, refreshChange: u, crud: i };
} }, X = { key: 0 };
function ee(s, l, a, i, R, B) {
  const v = b("el-switch"), y = N, T = z, S = b("el-col"), p = b("el-row"), _ = b("avue-crud"), G = j;
  return c(), D("div", null, [h(G, null, { default: f(() => [h(_, { ref: "crud", page: s.page, "onUpdate:page": l[1] || (l[1] = (r) => s.page = r), data: s.tableData, permission: i.permissionList, "table-loading": s.tableLoading, option: s.tableOption, "before-open": i.beforeOpen, modelValue: s.form, "onUpdate:modelValue": l[2] || (l[2] = (r) => s.form = r), onOnLoad: i.getPageF, onRefreshChange: i.refreshChange, onRowUpdate: i.handleUpdate, onRowSave: i.handleSave, onRowDel: i.handleDel, onSortChange: i.sortChange, onSearchChange: i.searchChange }, { enable: f((r) => [h(v, { "active-value": "1", "inactive-value": "0", modelValue: r.row.enable, "onUpdate:modelValue": (u) => r.row.enable = u, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (u) => i.changeEnable(r.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "listGoodsSpu-form": f((r) => [s.form.shopId && s.form.suitType == "2" ? (c(), D("div", X, [s.form.suitType == "2" && r.type != "view" ? (c(), A(y, { key: 0, shopId: s.form.shopId, value: s.form.listGoodsSpu, "onUpdate:value": l[0] || (l[0] = (u) => s.form.listGoodsSpu = u) }, null, 8, ["shopId", "value"])) : C("", true), s.form.suitType == "2" ? (c(), A(p, { key: 1, gutter: 4, class: "mt-[5px]" }, { default: f(() => [(c(true), D(V, null, F(s.form.listGoodsSpu, (u, e) => (c(), A(S, { span: 4, key: u.id }, { default: f(() => [h(T, { "pic-url": u.picUrls[0], item: u, index: e, disabled: r.type == "view", onRemoveIndex: (n) => i.removeGoods(e) }, null, 8, ["pic-url", "item", "index", "disabled", "onRemoveIndex"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)) : C("", true)])) : C("", true)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "before-open", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const ie = E(Q, [["render", ee], ["__scopeId", "data-v-91c9f2c6"]]);
export {
  ie as default
};
