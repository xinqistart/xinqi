import { aO as h, n as I, A as S, R as $, K as W, q as B, S as x, b1 as q, _ as w, r as d, c as D, o as N, b as u, h as l, e as n, f as T, z as i, ba as j, a_ as L } from "./index-DAdfXJ2i.js";
import { _ as C } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function R(a) {
  return h.request("get", "/mall/vipuserrecharge/page", { params: a });
}
function O(a) {
  return h.request("post", "/mall/vipuserrecharge", { data: a });
}
function U(a) {
  return h.request("delete", "/mall/vipuserrecharge/" + a);
}
function z(a) {
  return h.request("put", "/mall/vipuserrecharge", { data: a });
}
const { $t: e } = I(), k = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, addBtn: false, delBtn: false, editBtn: false, menu: false, labelWidth: 130, column: [{ label: e("mall.vipuserrecharge.userId"), prop: "userId", minWidth: 210, rules: [{ required: true, message: e("commons.inputPlease") + e("mall.vipuserrecharge.userId"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.vipuserrecharge.vipTypeId"), prop: "vipTypeId", minWidth: 110, rules: [{ required: true, message: e("commons.inputPlease") + e("mall.vipuserrecharge.vipTypeId"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.vipuserrecharge.vipCostId"), prop: "vipCostId", minWidth: 110, rules: [{ required: true, message: e("commons.inputPlease") + e("mall.vipuserrecharge.vipCostId"), trigger: "blur" }, { max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.vipuserrecharge.count"), prop: "count", rules: [{ required: true, message: e("commons.inputPlease") + e("mall.vipuserrecharge.count"), trigger: "blur" }] }, { label: e("mall.vipuserrecharge.paymentPrice"), prop: "paymentPrice", sortable: true, minWidth: 110, rules: [{ required: true, message: e("commons.inputPlease") + e("mall.vipuserrecharge.paymentPrice"), trigger: "blur" }] }, { label: e("mall.vipuserrecharge.isPay"), prop: "isPay", minWidth: 110, sortable: true, rules: [{ required: true, message: e("commons.inputPlease") + e("mall.vipuserrecharge.isPay"), trigger: "blur" }, { max: 2, message: e("commons.lengthTips", { length: 2 }) }] }, { label: e("mall.vipuserrecharge.beginTime"), prop: "beginTime", sortable: true, minWidth: 110, rules: [] }, { label: e("mall.vipuserrecharge.endTime"), prop: "endTime", sortable: true, minWidth: 110, rules: [] }, { label: e("mall.vipuserrecharge.paymentType"), prop: "paymentType", minWidth: 90, rules: [{ max: 2, message: e("commons.lengthTips", { length: 2 }) }], dicData: [{ label: e("mall.vipuserrecharge.paymentType1"), value: "1" }, { label: e("mall.vipuserrecharge.paymentType2"), value: "2" }] }, { label: e("mall.vipuserrecharge.paymentTime"), prop: "paymentTime", minWidth: 110, sortable: true, rules: [] }, { label: e("mall.vipuserrecharge.transactionId"), prop: "transactionId", minWidth: 100, rules: [{ max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.vipuserrecharge.tradeNo"), prop: "tradeNo", minWidth: 100, rules: [{ max: 32, message: e("commons.lengthTips", { length: 32 }) }] }, { label: e("mall.vipuserrecharge.tradeType"), prop: "tradeType", minWidth: 90, rules: [{ max: 20, message: e("commons.lengthTips", { length: 20 }) }] }, { label: e("mall.vipuserrecharge.createTime"), prop: "createTime", sortable: true, minWidth: 110, rules: [{ required: true, message: e("commons.inputPlease") + e("mall.vipuserrecharge.createTime"), trigger: "blur" }] }, { label: e("mall.vipuserrecharge.updateTime"), prop: "updateTime", hide: true, rules: [{ required: true, message: e("commons.inputPlease") + e("mall.vipuserrecharge.updateTime"), trigger: "blur" }] }] }, V = { name: "vipuserrecharge", components: { mallUser: C }, setup() {
  const { proxy: a } = S(), r = $({ form: { vipType: { vipName: "" }, vipCost: { originalPrice: 0, salesPrice: 0 }, userInfo: { nickName: "" } }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: k }), g = W().permissions, p = B(() => ({ addBtn: !!g["mall:vipuserrecharge:add"], delBtn: !!g["mall:vipuserrecharge:del"], editBtn: !!g["mall:vipuserrecharge:edit"], viewBtn: !!g["mall:vipuserrecharge:get"] }));
  function m(s, o) {
    r.tableLoading = true, R(Object.assign({ current: s.currentPage, size: s.pageSize, descs: r.page.descs, ascs: r.page.ascs }, o, r.paramsSearch)).then((c) => {
      r.tableData = c.data.records, r.page.total = c.data.total, r.page.currentPage = s.currentPage, r.page.pageSize = s.pageSize, r.tableLoading = false;
    }).catch(() => {
      r.tableLoading = false;
    });
  }
  function _(s) {
    a.$confirm(a.$t("commons.delConfirm"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return U(s.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), m(r.page);
    });
  }
  function v(s, o, c, t) {
    z(s).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), c(), m(r.page);
    }).catch(() => {
      t();
    });
  }
  function f(s, o, c) {
    O(s).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), o(), m(r.page);
    }).catch(() => {
      c();
    });
  }
  function b(s, o) {
    s = q(s), r.paramsSearch = s, r.page.currentPage = 1, m(r.page, s), o();
  }
  function y(s) {
    const o = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (r.page.descs = "", r.page.ascs = o) : s.order == "descending" ? (r.page.ascs = "", r.page.descs = o) : (r.page.ascs = "", r.page.descs = ""), m(r.page);
  }
  function P() {
    m(r.page);
  }
  return { ...x(r), permissions: g, permissionList: p, getPageF: m, handleDel: _, handleUpdate: v, handleSave: f, searchChange: b, sortChange: y, refreshChange: P };
} }, A = { class: "jl-text-tips" }, F = { class: "flex-c" }, M = { class: "text-left" }, E = { class: "jl-amount-xxs jl-text-price" }, H = { class: "jl-amount-xxs jl-text-price" }, K = { class: "text-right" }, Z = { class: "flex items-center justify-center" };
function G(a, r, g, p, m, _) {
  const v = C, f = d("Warning"), b = d("el-icon"), y = d("el-tooltip"), P = j, s = d("el-tag"), o = d("avue-crud"), c = L;
  return N(), D("div", null, [u(c, null, { default: l(() => [u(o, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": r[0] || (r[0] = (t) => a.form = t), page: a.page, "onUpdate:page": r[1] || (r[1] = (t) => a.page = t), data: a.tableData, permission: p.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: p.getPageF, onRefreshChange: p.refreshChange, onRowUpdate: p.handleUpdate, onRowSave: p.handleSave, onRowDel: p.handleDel, onSortChange: p.sortChange, onSearchChange: p.searchChange }, { "menu-left": l(() => [n("span", A, i(a.$t("mall.vipuserrecharge.vipTip")), 1)]), userId: l(({ row: t }) => [n("div", F, [u(v, { userId: t.userId, userInfo: t.userInfo }, null, 8, ["userId", "userInfo"])])]), "userId-form": l(() => [n("div", null, i(a.form.userInfo.nickName), 1)]), vipTypeId: l(({ row: t }) => {
    var _a;
    return [n("div", null, i((_a = t.vipType) == null ? void 0 : _a.vipName), 1)];
  }), "vipTypeId-form": l(() => {
    var _a;
    return [n("div", null, i((_a = a.form.vipType) == null ? void 0 : _a.vipName), 1)];
  }), vipCostId: l(({ row: t }) => {
    var _a, _b;
    return [n("div", M, [n("div", null, [T(i(a.$t("mall.vipuserrecharge.originalPrice")), 1), n("span", E, i((_a = t.vipCost) == null ? void 0 : _a.originalPrice), 1)]), n("div", null, [T(i(a.$t("mall.vipuserrecharge.discountedPrice")), 1), n("span", H, i((_b = t.vipCost) == null ? void 0 : _b.salesPrice), 1)])])];
  }), "vipCostId-form": l(() => {
    var _a, _b;
    return [n("div", K, [n("div", null, i(a.$t("mall.vipuserrecharge.originalPrice")) + i((_a = a.form.vipCost) == null ? void 0 : _a.originalPrice), 1), n("div", null, i(a.$t("mall.vipuserrecharge.discountedPrice")) + i((_b = a.form.vipCost) == null ? void 0 : _b.salesPrice), 1)])];
  }), paymentPrice: l(({ row: t }) => [n("div", Z, [u(y, { effect: "dark", content: a.$t("mall.vipuserrecharge.priceDiscrepancyNote") }, { default: l(() => [u(b, { class: "mr-[3px]" }, { default: l(() => [u(f)]), _: 1 })]), _: 1 }, 8, ["content"]), n("span", null, [u(P, { amount: t.paymentPrice }, null, 8, ["amount"])])])]), isPay: l(({ row: t }) => [n("div", null, [u(s, { type: t.isPay == "1" ? "success" : "danger", size: "small" }, { default: l(() => [T(i(t.isPay == "1" ? a.$t("mall.vipuserrecharge.isPay1") : a.$t("mall.vipuserrecharge.isPay0")), 1)]), _: 2 }, 1032, ["type"])])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const ae = w(V, [["render", G]]);
export {
  ae as default
};
