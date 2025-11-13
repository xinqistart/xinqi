import { aO as _, n as F, A as Y, R as H, p as O, t as K, E as W, q as Z, K as j, S as J, b1 as Q, _ as X, r as g, c as y, o as u, b as m, h as d, e as k, g as R, B as S, F as w, v as M, f as U, z as h, a_ as x } from "./index-DAdfXJ2i.js";
import { _ as ee } from "./goods-card-item-0N1hfAvK.js";
import { _ as te } from "./goods-select-DrMu2Gwf.js";
import { a as ae } from "./shopinfo-DR8w8ULX.js";
import { M as oe } from "./list-CpVj7t9v.js";
import { f as le } from "./goodscategory-DvhXgk83.js";
import "./goodsspu-Dmc9OYVL.js";
import "./goodsspu-DKL_9wDU.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./supplier-CbDQWRL9.js";
function ne(a) {
  return _.request("get", "/mall/activebackground/page", { params: a });
}
function ie(a) {
  return _.request("post", "/mall/activebackground", { data: a });
}
function se(a) {
  return _.request("get", "/mall/activebackground/" + a);
}
function re(a) {
  return _.request("delete", "/mall/activebackground/" + a);
}
function z(a) {
  return _.request("put", "/mall/activebackground", { data: a });
}
const { $t: o } = F(), ce = { dialogDrag: true, indexLabel: o("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 120, searchLabelPosition: "right", labelPosition: "left", column: [{ label: o("commons.createTime"), prop: "createTime", sortable: true, addDisplay: false, editDisplay: false, span: 13, width: 110 }, { label: o("commons.updateTime"), prop: "updateTime", width: 170, sortable: true, addDisplay: false, editDisplay: false }, { label: o("mall.activebackground.activeName"), prop: "activeName", sortable: true, rules: [{ required: true, message: o("mall.activebackground.activeName") + o("commons.notNull"), trigger: "blur" }, { max: 30, message: o("commons.lengthTips", { length: 30 }) }] }, { label: o("commons.enabled"), prop: "enable", sortable: true, span: 13, type: "radio", rules: [{ required: true, message: o("commons.notNull"), trigger: "blur" }], dicData: [{ label: o("commons.close"), value: "0" }, { label: o("commons.open"), value: "1" }] }, { label: o("mall.activebackground.picUrl"), prop: "picUrl", dataType: "string", type: "img", align: "center", slot: true, formslot: true, span: 24, rules: [{ required: true, message: o("commons.notNull"), trigger: "change" }] }, { label: o("commons.timeRange"), prop: "validTime", type: "datetimerange", editDisabled: true, hide: false, span: 13, valueFormat: "YYYY-MM-DD HH:mm:ss", rules: [{ type: "array", required: true, message: o("commons.notNull"), trigger: "change" }] }, { label: o("mall.activebackground.suitType"), prop: "suitType", sortable: true, span: 13, type: "radio", rules: [{ required: true, message: o("mall.activebackground.suitType") + o("commons.notNull"), trigger: "blur" }], value: "1", dicData: [{ label: o("mall.activebackground.suitType1"), value: "1" }, { label: o("mall.activebackground.suitType2"), value: "2" }, { label: o("mall.activebackground.suitType3"), value: "3" }, { label: o("mall.activebackground.suitType4"), value: "4" }], control: (a) => a == "1" ? { listActiveBackgroundRelation: { display: false } } : a == "2" ? { listActiveBackgroundRelation: { label: o("commons.selectGoods"), display: true, rules: [{ required: true, message: o("commons.selectGoods"), trigger: "blur" }] } } : a == "3" ? { listActiveBackgroundRelation: { label: o("commons.selectType"), display: true, rules: [{ required: true, message: o("commons.selectTypeTip"), trigger: "blur" }] } } : a == "4" ? { listActiveBackgroundRelation: { label: o("commons.selectShop"), display: true, rules: [{ required: true, message: o("commons.selectShop") + o("commons.notNull"), trigger: "blur" }] } } : { listActiveBackgroundRelation: { label: o("commons.selectGoods"), display: true } } }, { label: o("mall.activebackground.listActiveBackgroundRelation"), prop: "listActiveBackgroundRelation", hide: true, display: false, span: 24 }] }, de = { components: { MaterialList: oe }, setup() {
  const { proxy: a } = Y(), t = H({ form: { id: "", shopId: "", suitType: "1", listActiveBackgroundRelation: [], validTime: null, validBeginTime: null, validEndTime: null, picUrl: null }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: ce, dialogVisibleGoods: false, listShopInfo: [], treeGoodsCategory: [], selectionActiveBackgroundRelation: [] }), N = O(null);
  K(() => {
    I(), C();
  }), W(() => t.form.suitType, () => {
    t.form.listActiveBackgroundRelation = [];
  }, { immediate: true });
  const r = Z(() => {
    var _a;
    const e = (_a = j()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:activebackground:add"], delBtn: !!e["mall:activebackground:del"], editBtn: !!e["mall:activebackground:edit"], viewBtn: !!e["mall:activebackground:get"] };
  });
  function P(e, l) {
    e = Q(e), t.paramsSearch = e, t.page.currentPage = 1, p(t.page, e), l();
  }
  function G(e) {
    const l = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (t.page.descs = "", t.page.ascs = l) : e.order == "descending" ? (t.page.ascs = "", t.page.descs = l) : (t.page.ascs = "", t.page.descs = ""), p(t.page);
  }
  function p(e, l) {
    t.tableLoading = true, ne(Object.assign({ current: e.currentPage, size: e.pageSize, descs: t.page.descs, ascs: t.page.ascs }, l, t.paramsSearch)).then((n) => {
      t.tableData = n.data.records, t.page.total = n.data.total, t.page.currentPage = e.currentPage, t.page.pageSize = e.pageSize, t.tableLoading = false;
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function D(e) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return re(e.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), p(t.page);
    });
  }
  function v(e, l, n, s) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1];
    const c = e.listActiveBackgroundRelation;
    if (c && c.length > 0) {
      const f = [];
      c.forEach(function(b) {
        let q;
        t.form.suitType == "2" && (q = b.id), (t.form.suitType == "3" || t.form.suitType == "4") && (q = b), f.push({ relationId: q });
      }), e.listActiveBackgroundRelation = f;
    } else e.listActiveBackgroundRelation = null;
    z(e).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), n(), p(t.page);
    }).catch(() => {
      s();
    });
  }
  function E(e, l, n) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1];
    const s = e.listActiveBackgroundRelation;
    if (s && s.length > 0) {
      const c = [];
      s.forEach(function(f) {
        let b;
        t.form.suitType == "2" && (b = f.id), (t.form.suitType == "3" || t.form.suitType == "4") && (b = f), c.push({ relationId: b });
      }), e.listActiveBackgroundRelation = c;
    } else e.listActiveBackgroundRelation = null;
    ie(e).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), l(), p(t.page);
    }).catch(() => {
      n();
    });
  }
  function A() {
    p(t.page);
  }
  function L(e, l) {
    if (l == "add") t.form.validTime = [];
    else {
      const n = [];
      n.push(t.form.validBeginTime), n.push(t.form.validEndTime), t.form.validTime = n;
    }
    l == "add" ? (t.form.picUrl = [], T()) : t.form.picUrl = [t.form.picUrl], (l == "edit" || l == "view") && (t.form.suitType == "2" || t.form.suitType == "3" || t.form.suitType == "4") && se(t.form.id).then((n) => {
      const s = n.data, c = [];
      s.listActiveBackgroundRelation.forEach((f) => {
        t.form.suitType == "2" && c.push(f.goodsSpu), (t.form.suitType == "3" || t.form.suitType == "4") && c.push(f.relationId);
      }), t.form.listActiveBackgroundRelation = c, t.form.suitType == "3" && t.form.listActiveBackgroundRelation && a.$nextTick(() => {
        i(t.form.listActiveBackgroundRelation);
      });
    }).catch(() => {
    }), e();
  }
  function V(e) {
    e && e.id && z({ id: e.id, enable: e.enable }).then(() => {
    }).catch(() => {
      A();
    });
  }
  function $(e) {
    t.form.listActiveBackgroundRelation.splice(e, 1);
  }
  function C() {
    t.listShopInfo.length <= 0 && ae().then((e) => {
      t.listShopInfo = e.data;
    });
  }
  function I() {
    t.treeGoodsCategory.length <= 0 && le().then((e) => {
      let l = e.data || [];
      T(l), t.treeGoodsCategory = l;
    });
  }
  function T(e = t.treeGoodsCategory) {
    e.forEach((l) => {
      l.disabled = false, l.checked = false, l.children && l.children.forEach((n) => {
        n.disabled = false, n.checked = false, n.children && n.children.forEach((s) => {
          s.disabled = false, s.checked = false;
        });
      });
    });
  }
  const B = O();
  function i(e) {
    let l = [];
    return B.value && (T(), B.value.getCheckedNodes().forEach((n) => {
      n.data && n.data.children && n.data.children.forEach((s) => {
        s.disabled = true, s.checked = false, l.push(s.id), s.children && s.children.forEach((c) => {
          c.disabled = true, c.checked = false, l.push(c.id);
        });
      });
    }), t.form.listActiveBackgroundRelation = e.filter((n) => !l.includes(n))), true;
  }
  return { ...J(t), permissionList: r, searchChange: P, sortChange: G, getPage: p, handleDel: D, handleUpdate: v, handleSave: E, refreshChange: A, beforeOpen: L, changeEnable: V, removeRelation: $, getListShopInfo: C, crud: N, changeRelationCategory: i, treeGoodsCategoryRef: B };
} }, ue = { class: "execution" }, me = { key: 0 }, pe = { key: 1 }, ge = { key: 2 };
function fe(a, t, N, r, P, G) {
  const p = g("el-switch"), D = g("MaterialList"), v = g("el-tag"), E = te, A = ee, L = g("el-col"), V = g("el-row"), $ = g("el-cascader"), C = g("el-option"), I = g("el-select"), T = g("avue-crud"), B = x;
  return u(), y("div", ue, [m(B, null, { default: d(() => [m(T, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": t[4] || (t[4] = (i) => a.form = i), page: a.page, data: a.tableData, permission: r.permissionList, "table-loading": a.tableLoading, option: a.tableOption, "before-open": r.beforeOpen, onOnLoad: r.getPage, onRefreshChange: r.refreshChange, onRowUpdate: r.handleUpdate, onRowSave: r.handleSave, onRowDel: r.handleDel, onSortChange: r.sortChange, onSearchChange: r.searchChange }, { enable: d((i) => [m(p, { modelValue: i.row.enable, "onUpdate:modelValue": (e) => i.row.enable = e, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (e) => r.changeEnable(i.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "picUrl-form": d(() => [m(D, { value: a.form.picUrl, "onUpdate:value": t[0] || (t[0] = (i) => a.form.picUrl = i), type: "image", num: 1, width: 350, height: 80 }, null, 8, ["value"]), k("p", null, h(a.$t("mall.activebackground.picUrlTip1")), 1)]), validTime: d(({ row: i }) => [k("div", null, [(/* @__PURE__ */ new Date()).getTime() > new Date(i.validEndTime).getTime() ? (u(), y("div", me, [m(v, { type: "danger" }, { default: d(() => [U(h(i.validBeginTime), 1)]), _: 2 }, 1024), k("p", null, h(a.$t("commons.to")), 1), m(v, { type: "danger" }, { default: d(() => [U(h(i.validEndTime), 1)]), _: 2 }, 1024)])) : (u(), y("div", pe, [m(v, { type: "success" }, { default: d(() => [U(h(i.validBeginTime), 1)]), _: 2 }, 1024), k("p", null, h(a.$t("commons.to")), 1), m(v, { type: "success" }, { default: d(() => [U(h(i.validEndTime), 1)]), _: 2 }, 1024)]))])]), "listActiveBackgroundRelation-form": d((i) => [k("div", null, [a.form.suitType == "2" && i.type != "view" ? (u(), R(E, { key: 0, value: a.form.listActiveBackgroundRelation, "onUpdate:value": t[1] || (t[1] = (e) => a.form.listActiveBackgroundRelation = e), shopId: "-1" }, null, 8, ["value"])) : S("", true), a.form.suitType == "2" ? (u(), R(V, { key: 1, gutter: 4, class: "mt-[5px]" }, { default: d(() => [(u(true), y(w, null, M(a.form.listActiveBackgroundRelation, (e, l) => (u(), R(L, { key: e.id, span: 4 }, { default: d(() => [m(A, { "pic-url": e.picUrls[0], item: e, index: l, disabled: i.type == "view", onRemoveIndex: (n) => r.removeRelation(l) }, null, 8, ["pic-url", "item", "index", "disabled", "onRemoveIndex"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)) : S("", true), a.form.suitType == "3" ? (u(), y("div", ge, [m($, { ref: "treeGoodsCategoryRef", style: { width: "100%" }, modelValue: a.form.listActiveBackgroundRelation, "onUpdate:modelValue": t[2] || (t[2] = (e) => a.form.listActiveBackgroundRelation = e), options: a.treeGoodsCategory, props: { multiple: true, checkStrictly: true, emitPath: false, value: "id", label: "name" }, "show-all-levels": false, placeholder: a.$t("commons.selectTypeTip"), onChange: r.changeRelationCategory }, null, 8, ["modelValue", "options", "placeholder", "onChange"]), t[5] || (t[5] = k("div", { class: "jl-text-tips" }, " \u63D0\u793A: \u5982\u679C\u9009\u4E2D\u4E86\u7236\u7EA7\u5206\u7C7B,\u5B50\u5206\u7C7B\u81EA\u52A8\u5168\u90E8\u751F\u6548. ", -1))])) : S("", true), a.form.suitType == "4" ? (u(), R(I, { key: 3, modelValue: a.form.listActiveBackgroundRelation, "onUpdate:modelValue": t[3] || (t[3] = (e) => a.form.listActiveBackgroundRelation = e), multiple: "", placeholder: a.$t("commons.selectShop") }, { default: d(() => [(u(true), y(w, null, M(a.listShopInfo, (e) => (u(), R(C, { key: e.id, label: e.name, value: e.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])) : S("", true)])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Ue = X(de, [["render", fe], ["__scopeId", "data-v-47be907d"]]);
export {
  Ue as default
};
