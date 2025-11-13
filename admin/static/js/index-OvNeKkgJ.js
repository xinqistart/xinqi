import { aO as f, n as P, A as B, R as D, p as L, q as U, K as k, S as $, b1 as O, _ as z, r as c, c as V, o as T, b as r, h as o, e as m, z as b, f as R, a_ as q } from "./index-DAdfXJ2i.js";
import { _ as N } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { b as A, g as j } from "./bargaincut-gsgd_qL3.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function x(a) {
  return f.request("get", "/mall/bargainuser/page", { params: a });
}
function F(a) {
  return f.request("post", "/mall/bargainuser", { data: a });
}
function E(a) {
  return f.request("delete", "/mall/bargainuser/" + a);
}
function W(a) {
  return f.request("put", "/mall/bargainuser", { data: a });
}
const { $t: l } = P(), M = { dialogDrag: true, indexLabel: l("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, menu: false, searchLabelPosition: "left", labelPosition: "left", searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelWidth: 90, column: [{ label: l("mall.bargainuser.shopId"), prop: "shopId", type: "select", props: { label: "name", value: "id" }, search: true, editDisabled: true, filterable: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: l("mall.bargainuser.shopId") + l("commons.notNull"), trigger: "blur" }] }, { label: l("commons.createTime"), prop: "createTime", width: 110, sortable: true }, { label: l("mall.bargainuser.userId"), prop: "userId", slot: true, minWidth: 180 }, { label: l("mall.bargainuser.bargainId"), prop: "bargainId", sortable: true, type: "select", search: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/bargaininfo/list" }, { label: l("mall.bargainuser.spuId"), prop: "spuId", type: "select", filterable: true, editDisabled: true, props: { label: "name", value: "id" }, cascader: ["skuId"], dicUrl: "/mall/goodsspu/list", rules: [{ required: true, message: l("mall.bargainuser.spuId") + l("commons.notNull"), trigger: "blur" }] }, { label: l("mall.bargainuser.skuId"), prop: "skuId", type: "select", filterable: true, editDisabled: true, props: { label: "name", value: "id" }, dicUrl: "/mall/goodssku/list/{{key}}", rules: [{ required: true, message: l("mall.bargainuser.skuId") + l("commons.notNull"), trigger: "blur" }] }, { label: l("mall.bargainuser.status"), prop: "status", sortable: true, slot: true, dicData: [{ label: l("mall.bargainuser.status0"), value: "0" }, { label: l("mall.bargainuser.status1"), value: "1" }, { label: l("mall.bargainuser.status2"), value: "2" }] }, { label: l("mall.bargainuser.validBeginTime"), prop: "validBeginTime", sortable: true, width: 100 }, { label: l("mall.bargainuser.validEndTime"), prop: "validEndTime", sortable: true, width: 100 }, { label: l("mall.bargainuser.bargainPrice"), prop: "bargainPrice", sortable: true }, { label: l("mall.bargainuser.havBargainAmount"), prop: "havBargainAmount", slot: true, sortable: true }, { label: l("mall.bargainuser.floorBuy"), prop: "floorBuy", sortable: true, width: 150, dicData: [{ label: l("commons.no"), value: "0" }, { label: l("commons.yes"), value: "1" }] }, { label: l("mall.bargainuser.isBuy"), prop: "isBuy", sortable: true, dicData: [{ label: l("commons.no"), value: "0" }, { label: l("commons.yes"), value: "1" }] }] }, G = { setup() {
  const { proxy: a } = B(), e = D({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, bargainUserId: "", paramsSearch: {}, tableLoading: false, tableOption: M, dialogVisibleCut: false, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, tableLoading2: false, tableOption2: A }), h = L(null), i = U(() => {
    var _a;
    const t = (_a = k()) == null ? void 0 : _a.permissions;
    return { addBtn: !!t["mall:bargainuser:add"], delBtn: !!t["mall:bargainuser:del"], editBtn: !!t["mall:bargainuser:edit"], viewBtn: !!t["mall:bargainuser:get"] };
  });
  function _(t, n) {
    e.bargainUserId && (e.tableLoading2 = true, j(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, n, { bargainUserId: e.bargainUserId })).then((u) => {
      e.tableData2 = u.data.records, e.page2.total = u.data.total, e.page2.currentPage = t.currentPage, e.page2.pageSize = t.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    }));
  }
  function y(t) {
    e.tableData2 = [], e.dialogVisibleCut = true, e.bargainUserId = t, e.page2 = { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, _(e.page2);
  }
  function v(t, n) {
    t = O(t), e.paramsSearch = t, e.page.currentPage = 1, d(e.page, t), n();
  }
  function w(t) {
    const n = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = n) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = n) : (e.page.ascs = "", e.page.descs = ""), d(e.page);
  }
  function d(t, n) {
    e.tableLoading = true, x(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page.descs, ascs: e.page.ascs }, n, e.paramsSearch)).then((u) => {
      e.tableData = u.data.records, e.page.total = u.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false, a.$nextTick(() => {
        h.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function g(t) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return E(t.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), d(e.page);
    });
  }
  function p(t, n, u, C) {
    W(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), u(), d(e.page);
    }).catch(() => {
      C();
    });
  }
  function I(t, n, u) {
    F(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), n(), d(e.page);
    }).catch(() => {
      u();
    });
  }
  function S() {
    d(e.page);
  }
  return { ...$(e), permissionList: i, getPage2F: _, showCut: y, searchChange: v, sortChange: w, getPageF: d, handleDel: g, handleUpdate: p, handleSave: I, refreshChange: S, crud: h };
} }, H = { class: "execution" }, K = ["onClick"], Z = { style: { color: "red" } }, J = { class: "image-slot" };
function Q(a, e, h, i, _, y) {
  const v = N, w = c("el-tag"), d = c("el-icon-view"), g = c("el-icon"), p = c("avue-crud"), I = c("Picture"), S = c("el-image"), t = c("el-col"), n = c("el-row"), u = c("el-dialog"), C = q;
  return T(), V("div", H, [r(C, null, { default: o(() => [r(p, { ref: "crud", page: a.page, "onUpdate:page": e[0] || (e[0] = (s) => a.page = s), data: a.tableData, permission: i.permissionList, "table-loading": a.tableLoading, modelValue: a.form, "onUpdate:modelValue": e[1] || (e[1] = (s) => a.form = s), option: a.tableOption, onOnLoad: i.getPageF, onRefreshChange: i.refreshChange, onRowUpdate: i.handleUpdate, onRowSave: i.handleSave, onRowDel: i.handleDel, onSortChange: i.sortChange, onSearchChange: i.searchChange }, { userId: o(({ row: s }) => [r(v, { userId: s.userId, userInfo: s.userInfo }, null, 8, ["userId", "userInfo"])]), status: o((s) => [r(w, { size: "small", type: s.row.status == "0" ? "warning" : s.row.status == "1" ? "success" : "danger", effect: "dark" }, { default: o(() => [R(b(s.row.$status), 1)]), _: 2 }, 1032, ["type"])]), havBargainAmount: o((s) => [m("div", { onClick: (X) => i.showCut(s.row.id) }, [m("i", Z, b(s.row.havBargainAmount), 1), r(g, { style: { "margin-left": "10px" } }, { default: o(() => [r(d)]), _: 1 })], 8, K)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "modelValue", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), r(u, { modelValue: a.dialogVisibleCut, "onUpdate:modelValue": e[3] || (e[3] = (s) => a.dialogVisibleCut = s), title: a.$t("mall.bargainuser.helpDetails"), width: "60%" }, { default: o(() => [r(p, { ref: "crud2", page: a.page2, "onUpdate:page": e[2] || (e[2] = (s) => a.page2 = s), data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onOnLoad: i.getPage2F }, { userId: o((s) => [r(n, null, { default: o(() => [r(t, { span: 8, style: { "text-align": "right" } }, { default: o(() => [r(S, { src: s.row.headimgUrl, style: { width: "50px" } }, { error: o(() => [m("div", J, [r(g, null, { default: o(() => [r(I)]), _: 1 })])]), _: 1 }, 8, ["src"])]), _: 2 }, 1024), r(t, { span: 16, style: { "padding-left": "10px", "text-align": "left" } }, { default: o(() => [m("div", null, b(a.$t("mall.bargaincut.nickName")) + "\uFF1A" + b(s.row.nickName), 1)]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onOnLoad"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const re = z(G, [["render", Q]]);
export {
  re as default
};
