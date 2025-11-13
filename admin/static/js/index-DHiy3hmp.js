import { n as B, cj as P, A as R, R as V, p as w, U as j, t as z, E as q, q as W, K as A, S as E, b1 as H, _ as J, r as F, c, o as h, b as $, h as d, e as L, z as b, g as C, F as D, v as U, a_ as G } from "./index-DAdfXJ2i.js";
import { a as K, b as M, p as Z, d as Q, c as X } from "./freighttemplat-H0ep6JZX.js";
import { a as Y } from "./shopinfo-DR8w8ULX.js";
import { a as _ } from "./supplier-CbDQWRL9.js";
const { $t: a } = B(), x = { dialogDrag: true, index: true, indexLabel: a("commons.indexLabel"), indexWidth: 110, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, labelPosition: "left", searchLabelPosition: "left", labelWidth: 110, searchGutter: 50, searchLabelWidth: 90, column: [{ label: a("commons.ofType"), prop: "ofType", type: "radio", search: true, searchSpan: 6, sortable: true, display: true, editDisabled: true, dicData: [{ label: a("mall.freighttemplat.shopId"), value: "1" }, { label: a("mall.freighttemplat.supplierId"), value: "2" }], rules: [{ required: true, message: a("commons.ofType") + a("commons.notNull"), trigger: "change" }], cascader: ["shopId"], control: (t, e) => {
  if (t == "2") return { shopId: { label: a("mall.freighttemplat.supplierId"), dicUrl: "/mall/supplier/list" } };
  if (t == "1") return { shopId: { label: a("mall.freighttemplat.shopId"), dicUrl: "/mall/shopinfo/list" } };
} }, { label: "sds", prop: "shopId", type: "select", props: { label: "name", value: "id" }, search: true, searchSpan: 6, filterable: true, editDisabled: true, rules: [{ required: true, message: a("commons.notNull"), trigger: "change" }] }, { label: a("mall.freighttemplat.name"), prop: "name", rules: [{ required: true, message: a("mall.freighttemplat.name") + a("commons.notNull"), trigger: "blur" }, { max: 100, message: a("commons.lengthTips", { length: 100 }) }] }, { label: a("mall.freighttemplat.chargeType"), prop: "chargeType", type: "radio", search: true, searchLabelPosition: "right", sortable: true, dicData: [{ label: a("mall.freighttemplat.chargeType1"), value: "1" }, { label: a("mall.freighttemplat.chargeType2"), value: "2" }, { label: a("mall.freighttemplat.chargeType3"), value: "3" }], rules: [{ required: true, message: a("mall.freighttemplat.chargeType") + a("commons.notNull"), trigger: "blur" }] }, { label: a("mall.freighttemplat.sort"), prop: "sort", type: "number", sortable: true, rules: [{ required: true, message: a("mall.freighttemplat.sort") + a("commons.notNull"), trigger: "blur" }] }, { label: a("mall.freighttemplat.freightTemplatChargeListFirst"), prop: "freightTemplatChargeListFirst", hide: true, span: 24, rules: [{ required: true, message: a("mall.freighttemplat.freightTemplatChargeListFirst") + a("commons.notNull"), trigger: "blur" }] }, { label: a("mall.freighttemplat.freightTemplatChargeList"), prop: "freightTemplatChargeList", type: "dynamic", hide: true, span: 24, children: { align: "center", headerAlign: "center", height: "280px", column: [{ label: a("mall.freighttemplat.shopId"), prop: "shopId", hide: true, display: false }, { label: a("mall.freighttemplatcharge.freightTemplatId"), prop: "freightTemplatId", hide: true, display: false }, { label: a("mall.freighttemplatcharge.areaId"), prop: "areaId", type: "cascader", width: "240px", multiple: true, checkStrictly: true, rules: [{ required: true, message: a("mall.freighttemplatcharge.areaId") + a("commons.notNull"), trigger: "blur" }], props: { label: "name", value: "id" }, lazy: true, lazyLoad(t, e) {
  const l = t.level, I = (t.data || {}).id;
  let o = [];
  const u = () => {
    e((o || []).map((m) => Object.assign(m, { leaf: l >= 2 })));
  };
  l == 0 ? P.get("/upms/tablearea/list?pid=0").then((m) => {
    o = m.data, u();
  }) : l == 1 ? P.get(`/upms/tablearea/list?pid=${I}`).then((m) => {
    o = m.data, u();
  }) : l == 2 ? P.get(`/upms/tablearea/list?pid=${I}`).then((m) => {
    o = m.data, u();
  }) : u();
} }, { label: a("mall.freighttemplatcharge.firstNum") + a("mall.freighttemplatcharge.chargeType1"), prop: "firstNum", labelWidth: 150, type: "number", rules: [{ required: true, message: a("commons.inputTips", { name: a("mall.freighttemplatcharge.firstNum") }), trigger: "blur" }] }, { label: a("mall.freighttemplatcharge.firstFreight"), prop: "firstFreight", type: "number", labelWidth: 150, minRows: 0, precision: 2, rules: [{ required: true, message: a("commons.inputTips", { name: a("mall.freighttemplatcharge.firstFreight") }), trigger: "blur" }] }, { label: a("mall.freighttemplatcharge.continueNum") + a("mall.freighttemplatcharge.chargeType1"), prop: "continueNum", labelWidth: 150, type: "number", rules: [{ required: true, message: a("commons.inputTips", { name: a("mall.freighttemplatcharge.continueNum") }), trigger: "blur" }] }, { label: a("mall.freighttemplatcharge.continueFreight"), prop: "continueFreight", type: "number", minRows: 0, labelWidth: 150, precision: 2, rules: [{ required: true, message: a("commons.inputTips", { name: a("mall.freighttemplatcharge.continueFreight") }), trigger: "blur" }] }] } }] }, ee = { disabled: false, menuBtn: false, labelPosition: "top", column: [{ label: "areaId", prop: "areaId", display: false, hide: true, type: "array" }, { label: "areaIds", prop: "areaIds", display: false, hide: true, type: "array" }, { label: a("mall.freighttemplatcharge.firstNum") + a("mall.freighttemplatcharge.chargeType1"), span: 11, prop: "firstNum", type: "number", rules: [{ required: true, message: a("commons.notNull"), trigger: "blur" }] }, { label: a("mall.freighttemplatcharge.firstFreight"), offset: 1, span: 12, prop: "firstFreight", type: "number", minRows: 0, precision: 2, rules: [{ required: true, message: a("commons.inputTips", { name: a("mall.freighttemplatcharge.firstFreight") }), trigger: "blur" }] }, { label: a("mall.freighttemplatcharge.continueNum") + a("mall.freighttemplatcharge.chargeType1"), span: 11, prop: "continueNum", type: "number", rules: [{ required: true, message: a("commons.inputTips", { name: a("mall.freighttemplatcharge.continueNum") }), trigger: "blur" }] }, { label: a("mall.freighttemplatcharge.continueFreight"), offset: 1, span: 12, prop: "continueFreight", type: "number", minRows: 0, precision: 2, rules: [{ required: true, message: a("commons.inputTips", { name: a("mall.freighttemplatcharge.continueFreight") }), trigger: "blur" }] }] }, te = { setup() {
  var _a;
  const { proxy: t } = R(), e = V({ form: { id: void 0, freightTemplatChargeListFirst: void 0, freightTemplatChargeList: void 0, chargeType: "1", shopId: "", ofType: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "sort", descs: "" }, defaults: {}, defaultsFirst: {}, searchParams: {}, paramsSearch: {}, tableLoading: false, tableOption: x, formFirst: { firstNum: 0, firstFreight: 0, continueNum: 0, continueFreight: 0, areaId: [["0"]], areaIds: ["0"] }, firstFreightOption: ee, userInfo: null, shopList: [], supplierList: [] }), y = w(null);
  e.userInfo = (_a = j()) == null ? void 0 : _a.userInfo, T(), p(), z(() => {
    t.$nextTick(() => {
      e.userInfo.type == "2" && (e.defaults.ofType.search = false, e.searchParams.ofType = "1", e.searchParams.shopId = e.userInfo.shopId), e.userInfo.type == "3" && (e.defaults.ofType.search = false, e.searchParams.ofType = "2", e.searchParams.supplierId = e.userInfo.supplierId);
    });
  }), q(() => e.form.chargeType, (r) => {
    let s = t.$t("mall.freighttemplatcharge.chargeType1");
    r == "1" ? s = t.$t("mall.freighttemplatcharge.chargeType1") : r == "2" ? s = t.$t("mall.freighttemplatcharge.chargeType2") : r == "3" && (s = t.$t("mall.freighttemplatcharge.chargeType3")), e.defaults.freightTemplatChargeList.children.column.map((n) => {
      n.prop == "firstNum" ? n.label = t.$t("mall.freighttemplatcharge.firstNum") + s : n.prop == "continueNum" && (n.label = t.$t("mall.freighttemplatcharge.continueNum") + s);
    }), e.defaultsFirst.firstNum.label = t.$t("mall.freighttemplatcharge.firstNum") + s, e.defaultsFirst.continueNum.label = t.$t("mall.freighttemplatcharge.continueNum") + s;
  }), q(() => e.searchParams.ofType, (r) => {
    r == "2" ? e.defaults.shopId.label = t.$t("mall.freighttemplat.supplierId") : e.defaults.shopId.label = t.$t("mall.freighttemplat.shopId"), e.searchParams.shopId = "";
  });
  const l = W(() => {
    var _a2;
    const r = (_a2 = A()) == null ? void 0 : _a2.permissions;
    return { addBtn: !!r["mall:freighttemplat:add"], delBtn: !!r["mall:freighttemplat:del"], editBtn: !!r["mall:freighttemplat:edit"], viewBtn: !!r["mall:freighttemplat:get"] };
  });
  function N(r, s) {
    r = H(r), e.paramsSearch = r, e.page.currentPage = 1, o(e.page, r), s();
  }
  function I(r) {
    const s = r.prop ? r.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    r.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : r.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), o(e.page);
  }
  function o(r, s) {
    e.tableLoading = true, X(Object.assign({ current: r.currentPage, size: r.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((n) => {
      e.tableData = n.data.records, e.page.total = n.data.total, e.page.currentPage = r.currentPage, e.page.pageSize = r.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(r) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return Q(r.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), o(e.page);
    });
  }
  function m(r, s, n, g) {
    e.form.freightTemplatChargeListFirst = JSON.stringify(e.formFirst), e.formFirst.areaId = [["0"]], e.formFirst.areaIds = ["0"], r.freightTemplatChargeList.unshift(e.formFirst), r.freightTemplatChargeList.map((f) => {
      f.shopId = r.shopId, f.areaIds = [], f.areaId.map((O) => {
        f.areaIds.push(O[O.length - 1]);
      });
    }), Z(r).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), n(), o(e.page);
    }).catch(() => {
      g();
    });
  }
  function v(r, s, n) {
    e.form.freightTemplatChargeListFirst = JSON.stringify(e.formFirst), e.formFirst.areaId = [["0"]], e.formFirst.areaIds = ["0"], r.ofType || (r.ofType = e.form.ofType, r.ofType || (e.userInfo.type == "2" ? r.ofType = "1" : e.userInfo.type == "3" && (r.ofType = "2"))), r.freightTemplatChargeList.unshift(e.formFirst), r.freightTemplatChargeList.map((g) => {
      g.shopId = r.shopId, g.areaIds = [], g.areaId.map((f) => {
        g.areaIds.push(f[f.length - 1]);
      });
    }), M(r).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), s(), o(e.page);
    }).catch(() => {
      n();
    });
  }
  function S() {
    o(e.page);
  }
  function i(r, s) {
    (e.userInfo.type == "2" || e.userInfo.type == "3") && (e.defaults.ofType.display = false, e.userInfo.type == "2" && y.value.updateDic("shopId", e.shopList), e.userInfo.type == "3" && y.value.updateDic("shopId", e.supplierList)), s == "add" ? (e.formFirst = { firstNum: 0, firstFreight: 0, continueNum: 0, continueFreight: 0, areaId: [["0"]], areaIds: ["0"] }, e.firstFreightOption.disabled = false, e.form.freightTemplatChargeListFirst = e.formFirst, e.userInfo.type == "2" && (e.form.shopId = e.userInfo.shopId), e.userInfo.type == "3" && (e.form.shopId = e.userInfo.supplierId), r()) : (s == "view" ? e.firstFreightOption.disabled = true : e.firstFreightOption.disabled = false, K(e.form.id).then((n) => {
      const g = n.data;
      e.form.freightTemplatChargeList = g.freightTemplatChargeList, e.form.freightTemplatChargeList && e.form.freightTemplatChargeList.length > 0 ? e.formFirst = e.form.freightTemplatChargeList[0] : e.formFirst = { firstNum: 0, firstFreight: 0, continueNum: 0, continueFreight: 0, areaId: [["0"]], areaIds: ["0"] }, e.form.freightTemplatChargeListFirst = e.formFirst, e.form.freightTemplatChargeList.shift(), r();
    }).catch(() => {
      r();
    }));
  }
  function T() {
    Y().then((r) => {
      e.shopList = r.data || [];
    });
  }
  function p() {
    _().then((r) => {
      e.supplierList = r.data || [];
    });
  }
  function k(r) {
    var _a2, _b;
    return r.ofType == "2" ? (_a2 = e.supplierList.find((s) => s.id == r.shopId)) == null ? void 0 : _a2.name : (_b = e.shopList.find((s) => s.id == r.shopId)) == null ? void 0 : _b.name;
  }
  return { ...E(e), permissionList: l, searchChange: N, sortChange: I, getPageF: o, handleDel: u, handleUpdate: m, handleSave: v, refreshChange: S, crud: y, beforeOpen: i, getShowName: k };
} }, ae = { class: "execution" }, re = { key: 0 }, se = { key: 1 }, le = { key: 2 }, ie = { class: "jl-text-tips mt-[6px] mb-[10px]" };
function oe(t, e, y, l, N, I) {
  const o = F("el-option"), u = F("el-select"), m = F("avue-form"), v = F("avue-crud"), S = G;
  return h(), c("div", ae, [$(S, null, { default: d(() => [$(v, { ref: "crud", modelValue: t.form, "onUpdate:modelValue": e[4] || (e[4] = (i) => t.form = i), page: t.page, "onUpdate:page": e[5] || (e[5] = (i) => t.page = i), defaults: t.defaults, "onUpdate:defaults": e[6] || (e[6] = (i) => t.defaults = i), search: t.searchParams, "onUpdate:search": e[7] || (e[7] = (i) => t.searchParams = i), data: t.tableData, permission: l.permissionList, "table-loading": t.tableLoading, option: t.tableOption, "before-open": l.beforeOpen, onOnLoad: l.getPageF, onRefreshChange: l.refreshChange, onRowUpdate: l.handleUpdate, onRowSave: l.handleSave, onRowDel: l.handleDel, onSortChange: l.sortChange, onSearchChange: l.searchChange }, { "shopId-header": d(() => [t.userInfo.type == "2" ? (h(), c("span", re, b(t.$t("mall.freighttemplat.shopId")), 1)) : t.userInfo.type == "3" ? (h(), c("span", se, b(t.$t("mall.freighttemplat.supplierId")), 1)) : (h(), c("span", le, b(t.$t("mall.freighttemplat.shopId")) + "/" + b(t.$t("mall.freighttemplat.supplierId")), 1))]), "shopId-search": d(({ disabled: i, size: T }) => [L("div", null, [t.searchParams.ofType == "2" ? (h(), C(u, { key: 0, modelValue: t.searchParams.shopId, "onUpdate:modelValue": e[0] || (e[0] = (p) => t.searchParams.shopId = p), filterable: "", clearable: "", disabled: !t.searchParams.ofType, size: T }, { default: d(() => [(h(true), c(D, null, U(t.supplierList, (p) => (h(), C(o, { key: p.id, label: p.name, value: p.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled", "size"])) : (h(), C(u, { key: 1, modelValue: t.searchParams.shopId, "onUpdate:modelValue": e[1] || (e[1] = (p) => t.searchParams.shopId = p), filterable: "", clearable: "", disabled: !t.searchParams.ofType, size: T }, { default: d(() => [(h(true), c(D, null, U(t.shopList, (p) => (h(), C(o, { key: p.id, label: p.name, value: p.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled", "size"]))])]), "freightTemplatChargeListFirst-form": d(() => [L("div", null, [L("div", ie, b(t.$t("mall.freighttemplat.freightTip")), 1), $(m, { modelValue: t.formFirst, "onUpdate:modelValue": e[2] || (e[2] = (i) => t.formFirst = i), defaults: t.defaultsFirst, "onUpdate:defaults": e[3] || (e[3] = (i) => t.defaultsFirst = i), option: t.firstFreightOption }, null, 8, ["modelValue", "defaults", "option"])])]), shopId: d(({ row: i }) => [L("div", null, b(l.getShowName(i)), 1)]), _: 1 }, 8, ["modelValue", "page", "defaults", "search", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const ue = J(te, [["render", oe]]);
export {
  ue as default
};
