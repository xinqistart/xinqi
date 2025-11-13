import { aO as A, n as F, A as Y, R as H, p as O, t as j, E as K, q as W, K as Z, S as J, b1 as Q, _ as X, r as f, c as y, o as m, b as u, h as c, e as T, g as _, B as D, F as w, v as z, z as h, f as k, a_ as x } from "./index-DAdfXJ2i.js";
import { _ as ee } from "./goods-card-item-0N1hfAvK.js";
import { _ as te } from "./goods-select-DrMu2Gwf.js";
import { f as oe } from "./goodscategory-DvhXgk83.js";
import { a as ae } from "./shopinfo-DR8w8ULX.js";
import { M as le } from "./list-CpVj7t9v.js";
import "./goodsspu-Dmc9OYVL.js";
import "./goodsspu-DKL_9wDU.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./supplier-CbDQWRL9.js";
function ie(o) {
  return A.request("get", "/mall/activeborder/page", { params: o });
}
function re(o) {
  return A.request("post", "/mall/activeborder", { data: o });
}
function ne(o) {
  return A.request("get", "/mall/activeborder/" + o);
}
function se(o) {
  return A.request("delete", "/mall/activeborder/" + o);
}
function M(o) {
  return A.request("put", "/mall/activeborder", { data: o });
}
const { $t: a } = F(), de = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, searchLabelPosition: "right", labelPosition: "left", column: [{ label: a("commons.createTime"), prop: "createTime", sortable: true, addDisplay: false, span: 13, width: 110, editDisplay: false }, { label: a("commons.updateTime"), prop: "updateTime", width: 170, sortable: true, addDisplay: false, editDisplay: false }, { label: a("mall.activeborder.activeName"), prop: "activeName", sortable: true, rules: [{ required: true, message: a("mall.activeborder.activeName") + a("commons.notNull"), trigger: "blur" }, { max: 30, message: a("commons.lengthTips", { length: 30 }) }] }, { label: a("mall.activeborder.picUrl"), prop: "picUrl", width: 260, type: "img", dataType: "array", slot: true, formslot: true, span: 24, rules: [{ type: "array", required: true, message: a("commons.notNull"), trigger: "change" }] }, { label: a("commons.timeRange"), prop: "validTime", type: "datetimerange", editDisabled: true, hide: false, span: 12, valueFormat: "YYYY-MM-DD HH:mm:ss", rules: [{ type: "array", required: true, message: a("commons.notNull"), trigger: "change" }] }, { label: a("commons.enabled"), prop: "enable", sortable: true, type: "radio", span: 13, rules: [{ required: true, message: a("commons.notNull"), trigger: "blur" }], dicData: [{ label: a("commons.close"), value: "0" }, { label: a("commons.open"), value: "1" }] }, { label: a("mall.activeborder.suitType"), prop: "suitType", sortable: true, type: "radio", rules: [{ required: true, message: a("mall.activeborder.suitType") + a("commons.notNull"), trigger: "blur" }], value: "1", dicData: [{ label: a("mall.activebackground.suitType1"), value: "1" }, { label: a("mall.activebackground.suitType2"), value: "2" }, { label: a("mall.activebackground.suitType3"), value: "3" }, { label: a("mall.activebackground.suitType4"), value: "4" }], span: 24, control: (o) => o == "1" ? { listActiveBorderRelation: { display: false } } : o == "2" ? { listActiveBorderRelation: { label: a("commons.selectGoods"), display: true, rules: [{ required: true, message: a("commons.selectGoods"), trigger: "blur" }] } } : o == "3" ? { listActiveBorderRelation: { label: a("commons.selectType"), display: true, rules: [{ required: true, message: a("commons.selectTypeTip"), trigger: "blur" }] } } : o == "4" ? { listActiveBorderRelation: { label: a("commons.selectShop"), display: true, rules: [{ required: true, message: a("commons.selectShop") + a("commons.notNull"), trigger: "blur" }] } } : { listActiveBorderRelation: { label: a("commons.selectGoods"), display: true } } }, { label: a("mall.activeborder.listActiveBorderRelation"), prop: "listActiveBorderRelation", hide: true, display: false, span: 24 }] }, ce = { components: { MaterialList: le }, setup() {
  const { proxy: o } = Y(), t = H({ form: { id: "", parentId: "", shopId: "", suitType: "1", listActiveBorderRelation: [], validTime: null, validBeginTime: null, validEndTime: null, picUrl: null }, form2: { id: "", shopId: "", suitType: "1", listActiveBorderRelation: [], validTime: null, validBeginTime: null, validEndTime: null, picUrl: null }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: de, dialogVisibleGoods: false, listShopInfo: [], treeGoodsCategory: [], selectionActiveBorderRelation: [] }), N = O(null);
  j(() => {
    U(), S();
  }), K(() => t.form.suitType, () => {
    t.form.listActiveBorderRelation = [];
  }, { immediate: true });
  const s = W(() => {
    var _a;
    const e = (_a = Z()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:activeborder:add"], delBtn: !!e["mall:activeborder:del"], editBtn: !!e["mall:activeborder:edit"], viewBtn: !!e["mall:activeborder:get"] };
  });
  function P(e, l) {
    e = Q(e), t.paramsSearch = e, t.page.currentPage = 1, p(t.page, e), l();
  }
  function G(e) {
    const l = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (t.page.descs = "", t.page.ascs = l) : e.order == "descending" ? (t.page.ascs = "", t.page.descs = l) : (t.page.ascs = "", t.page.descs = ""), p(t.page);
  }
  function p(e, l) {
    t.tableLoading = true, ie(Object.assign({ current: e.currentPage, size: e.pageSize, descs: t.page.descs, ascs: t.page.ascs }, l, t.paramsSearch)).then((i) => {
      t.tableData = i.data.records, t.page.total = i.data.total, t.page.currentPage = e.currentPage, t.page.pageSize = e.pageSize, t.tableLoading = false;
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function v(e) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return se(e.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), p(t.page);
    });
  }
  function E(e, l, i, n) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1];
    const d = e.listActiveBorderRelation;
    if (d && d.length > 0) {
      const g = [];
      d.forEach(function(b) {
        let q;
        t.form.suitType == "2" && (q = b.id), (t.form.suitType == "3" || t.form.suitType == "4") && (q = b), g.push({ relationId: q });
      }), e.listActiveBorderRelation = g;
    } else e.listActiveBorderRelation = null;
    M(e).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), i(), p(t.page);
    }).catch(() => {
      n();
    });
  }
  function V(e, l, i) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", e.validBeginTime = e.validTime[0], e.validEndTime = e.validTime[1];
    const n = e.listActiveBorderRelation;
    if (n && n.length > 0) {
      const d = [];
      n.forEach(function(g) {
        let b;
        t.form.suitType == "2" && (b = g.id), (t.form.suitType == "3" || t.form.suitType == "4") && (b = g), d.push({ relationId: b });
      }), e.listActiveBorderRelation = d;
    } else e.listActiveBorderRelation = null;
    re(e).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), l(), p(t.page);
    }).catch(() => {
      i();
    });
  }
  function C() {
    p(t.page);
  }
  function I(e, l) {
    if (l == "add") t.form.validTime = [];
    else {
      const i = [];
      i.push(t.form.validBeginTime), i.push(t.form.validEndTime), t.form.validTime = i;
    }
    l == "add" ? (t.form.picUrl = [], B()) : t.form.picUrl = [t.form.picUrl], (l == "edit" || l == "view") && (t.form.suitType == "2" || t.form.suitType == "3" || t.form.suitType == "4") && ne(t.form.id).then((i) => {
      const n = i.data, d = [];
      n.listActiveBorderRelation.forEach((g) => {
        t.form.suitType == "2" && d.push(g.goodsSpu), (t.form.suitType == "3" || t.form.suitType == "4") && d.push(g.relationId);
      }), t.form.listActiveBorderRelation = d, t.form.suitType == "3" && t.form.listActiveBorderRelation && o.$nextTick(() => {
        r(t.form.listActiveBorderRelation);
      });
    }).catch(() => {
    }), e();
  }
  function L(e) {
    e && e.id && M({ id: e.id, enable: e.enable }).then(() => {
    }).catch(() => {
      C();
    });
  }
  function $(e) {
    t.form.listActiveBorderRelation.splice(e, 1);
  }
  function S() {
    t.listShopInfo.length <= 0 && ae().then((e) => {
      t.listShopInfo = e.data;
    });
  }
  function U() {
    t.treeGoodsCategory.length <= 0 && oe().then((e) => {
      let l = e.data || [];
      B(l), t.treeGoodsCategory = l;
    });
  }
  function B(e = t.treeGoodsCategory) {
    e.forEach((l) => {
      l.disabled = false, l.checked = false, l.children && l.children.forEach((i) => {
        i.disabled = false, i.checked = false, i.children && i.children.forEach((n) => {
          n.disabled = false, n.checked = false;
        });
      });
    });
  }
  const R = O();
  function r(e) {
    let l = [];
    return R.value && (B(), R.value.getCheckedNodes().forEach((i) => {
      i.data && i.data.children && i.data.children.forEach((n) => {
        n.disabled = true, n.checked = false, l.push(n.id), n.children && n.children.forEach((d) => {
          d.disabled = true, d.checked = false, l.push(d.id);
        });
      });
    }), t.form.listActiveBorderRelation = e.filter((i) => !l.includes(i))), true;
  }
  return { ...J(t), permissionList: s, searchChange: P, sortChange: G, getPage: p, handleDel: v, handleUpdate: E, handleSave: V, refreshChange: C, beforeOpen: I, changeEnable: L, removeRelation: $, getListShopInfo: S, getTreeGoodsCategory: U, crud: N, changeRelationCategory: r, treeGoodsCategoryRef: R };
} }, me = { class: "execution" }, ue = { key: 0 }, pe = { key: 1 }, fe = { class: "jl-text-tips" }, ge = { key: 2 };
function he(o, t, N, s, P, G) {
  const p = f("el-switch"), v = f("el-tag"), E = f("MaterialList"), V = te, C = ee, I = f("el-col"), L = f("el-row"), $ = f("el-cascader"), S = f("el-option"), U = f("el-select"), B = f("avue-crud"), R = x;
  return m(), y("div", me, [u(R, null, { default: c(() => [u(B, { ref: "crud", page: o.page, data: o.tableData, permission: s.permissionList, modelValue: o.form, "onUpdate:modelValue": t[4] || (t[4] = (r) => o.form = r), "table-loading": o.tableLoading, option: o.tableOption, "before-open": s.beforeOpen, onOnLoad: s.getPage, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { enable: c((r) => [u(p, { modelValue: r.row.enable, "onUpdate:modelValue": (e) => r.row.enable = e, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (e) => s.changeEnable(r.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), validTime: c(({ row: r }) => [T("div", null, [(/* @__PURE__ */ new Date()).getTime() > new Date(r.validEndTime).getTime() ? (m(), y("div", ue, [u(v, { type: "danger" }, { default: c(() => [k(h(r.validBeginTime), 1)]), _: 2 }, 1024), T("p", null, h(o.$t("commons.to")), 1), u(v, { type: "danger" }, { default: c(() => [k(h(r.validEndTime), 1)]), _: 2 }, 1024)])) : (m(), y("div", pe, [u(v, { type: "success" }, { default: c(() => [k(h(r.validBeginTime), 1)]), _: 2 }, 1024), T("p", null, h(o.$t("commons.to")), 1), u(v, { type: "success" }, { default: c(() => [k(h(r.validEndTime), 1)]), _: 2 }, 1024)]))])]), "picUrl-form": c(() => [u(E, { value: o.form.picUrl, "onUpdate:value": t[0] || (t[0] = (r) => o.form.picUrl = r), type: "image", num: 1, width: o.form.parentId == "0" ? 300 : 150, height: 150 }, null, 8, ["value", "width"]), T("p", fe, h(o.$t("commons.imageSizeTip", { size: "350px*350px" })), 1)]), "listActiveBorderRelation-form": c((r) => [T("div", null, [o.form.suitType == "2" && r.type != "view" ? (m(), _(V, { key: 0, value: o.form.listActiveBorderRelation, "onUpdate:value": t[1] || (t[1] = (e) => o.form.listActiveBorderRelation = e), shopId: "-1" }, null, 8, ["value"])) : D("", true), o.form.suitType == "2" ? (m(), _(L, { key: 1, gutter: 4, class: "mt-[5px]" }, { default: c(() => [(m(true), y(w, null, z(o.form.listActiveBorderRelation, (e, l) => (m(), _(I, { key: e.id, span: 4 }, { default: c(() => [u(C, { "pic-url": e.picUrls[0], item: e, index: l, disabled: r.type == "view", onRemoveIndex: (i) => s.removeRelation(l) }, null, 8, ["pic-url", "item", "index", "disabled", "onRemoveIndex"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)) : D("", true), o.form.suitType == "3" ? (m(), y("div", ge, [u($, { ref: "treeGoodsCategoryRef", style: { width: "100%" }, modelValue: o.form.listActiveBorderRelation, "onUpdate:modelValue": t[2] || (t[2] = (e) => o.form.listActiveBorderRelation = e), options: o.treeGoodsCategory, props: { multiple: true, checkStrictly: true, emitPath: false, value: "id", label: "name" }, "show-all-levels": false, placeholder: o.$t("commons.selectTypeTip"), onChange: s.changeRelationCategory }, null, 8, ["modelValue", "options", "placeholder", "onChange"]), t[5] || (t[5] = T("div", { class: "jl-text-tips" }, " \u63D0\u793A: \u5982\u679C\u9009\u4E2D\u4E86\u7236\u7EA7\u5206\u7C7B,\u5B50\u5206\u7C7B\u81EA\u52A8\u5168\u90E8\u751F\u6548. ", -1))])) : D("", true), o.form.suitType == "4" ? (m(), _(U, { key: 3, modelValue: o.form.listActiveBorderRelation, "onUpdate:modelValue": t[3] || (t[3] = (e) => o.form.listActiveBorderRelation = e), multiple: "", placeholder: o.$t("commons.selectShop") }, { default: c(() => [(m(true), y(w, null, z(o.listShopInfo, (e) => (m(), _(S, { key: e.id, label: e.name, value: e.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])) : D("", true)])]), _: 1 }, 8, ["page", "data", "permission", "modelValue", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const ke = X(ce, [["render", he], ["__scopeId", "data-v-063aaf79"]]);
export {
  ke as default
};
