import { aO as L, n as A, A as B, R as F, K as N, q as j, S as q, b1 as C, _ as W, c as I, o as m, b as u, h as r, r as b, g as D, B as w, f, z as o, e as s, F as E, v as G, x as T, a_ as M } from "./index-DAdfXJ2i.js";
import { _ as H } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { t as K } from "./orderinfo-DpyYs_v8.js";
import { t as Z, g as J } from "./couponuser-BDN5Bz1z.js";
import { g as Q } from "./orderinfo-BW26vGJU.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function X(e) {
  return L.request("get", "/mall/usershop/page", { params: e });
}
function Y(e) {
  return L.request("post", "/mall/usershop", { data: e });
}
function x(e) {
  return L.request("delete", "/mall/usershop/" + e);
}
function ee(e) {
  return L.request("put", "/mall/usershop", { data: e });
}
const { $t: y } = A(), ae = { dialogDrag: true, indexLabel: y("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: false, delBtn: false, searchMenuSpan: 6, labelWidth: 120, searchGutter: 40, searchLabelWidth: 90, expand: true, column: [{ label: y("mall.usershop.shopId"), prop: "shopId", type: "select", search: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", display: false }, { label: y("mall.usershop.userCode"), prop: "userCode", search: true, editDisplay: false }, { label: y("mall.usershop.userId"), prop: "userId", slot: true, minWidth: 110, editDisplay: false }, { label: y("commons.createTime"), prop: "createTime", sortable: true, editDisplay: false }, { label: y("mall.usershop.labelIds"), prop: "labelIds", type: "checkbox", dataType: "array", search: true, props: { label: "labelName", value: "id" }, dicUrl: "/mall/usershoplabel/list" }, { label: y("mall.usershop.remarks"), prop: "remarks", sortable: true, rules: [{ max: 500, message: y("commons.lengthTips", { length: 500 }) }] }] }, te = { props: { userId: { type: String } }, setup(e) {
  var _a;
  const { proxy: l } = B(), a = F({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: ae, dialogVisibleRecord: false, page3: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, tableData3: [], tableLoading3: false, tableOption3: K, paramsSearch3: {}, page4: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, tableData4: [], tableLoading4: false, tableOption4: Z, paramsSearch4: {}, menuActive: "2", selectUserId: "", selectShopId: "" }), i = (_a = N()) == null ? void 0 : _a.permissions, z = j(() => ({ addBtn: !!i["mall:usershop:add"], delBtn: !!i["mall:usershop:del"], editBtn: !!i["mall:usershop:edit"], viewBtn: !!i["mall:usershop:get"] }));
  function R(n, d) {
    n = C(n), a.paramsSearch = n, a.page.currentPage = 1, g(a.page, n), d();
  }
  function h(n) {
    const d = n.prop ? n.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    n.order == "ascending" ? (a.page.descs = "", a.page.ascs = d) : n.order == "descending" ? (a.page.ascs = "", a.page.descs = d) : (a.page.ascs = "", a.page.descs = ""), g(a.page);
  }
  function g(n, d) {
    a.tableLoading = true, X(C({ current: n.currentPage, size: n.pageSize, descs: a.page.descs, ascs: a.page.ascs, userId: e.userId, ...d, ...a.paramsSearch })).then((p) => {
      a.tableData = p.data.records, a.page.total = p.data.total, a.page.currentPage = n.currentPage, a.page.pageSize = n.pageSize, a.tableLoading = false, e.userId && a.tableData.length == 0 && l.$message.warning(l.$t("mall.usershop.noShopUser"));
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function U(n) {
    l.$confirm(l.$t("commons.confirmDelete"), l.$t("commons.tip"), { confirmButtonText: l.$t("commons.confirm"), cancelButtonText: l.$t("commons.cancel"), type: "warning" }).then(function() {
      return x(n.id);
    }).then(() => {
      l.$message({ showClose: true, message: l.$t("commons.delSuccess"), type: "success" }), g(a.page);
    });
  }
  function k(n, d, p, V) {
    ee(n).then(() => {
      l.$message({ showClose: true, message: l.$t("commons.updateSuccess"), type: "success" }), p(), g(a.page);
    }).catch(() => {
      V();
    });
  }
  function P(n, d, p) {
    Y(n).then(() => {
      l.$message({ showClose: true, message: l.$t("commons.addSuccess"), type: "success" }), d(), g(a.page);
    }).catch(() => {
      p();
    });
  }
  function _() {
    g(a.page);
  }
  function O(n) {
    a.menuActive = n, a.menuActive == "2" && (a.page3.currentPage = 1, S(a.page3)), a.menuActive == "3" && (a.page4.currentPage = 1, $(a.page4));
  }
  function v(n, d) {
    a.tableData3 = [], a.menuActive = "2", a.selectUserId = n, a.selectShopId = d, a.dialogVisibleRecord = true, S(a.page3);
  }
  function S(n, d) {
    a.selectUserId && (a.tableLoading3 = true, Q(Object.assign({ current: n.currentPage, size: n.pageSize, descs: a.page3.descs, ascs: a.page3.ascs, userId: a.selectUserId, shopId: a.selectShopId }, d)).then((p) => {
      a.tableData3 = p.data.records, a.page3.total = p.data.total, a.page3.currentPage = n.currentPage, a.page3.pageSize = n.pageSize, a.tableLoading3 = false;
    }).catch(() => {
      a.tableLoading3 = false;
    }));
  }
  function $(n, d) {
    a.selectUserId && (a.tableLoading4 = true, J(Object.assign({ current: n.currentPage, size: n.pageSize, descs: a.page4.descs, ascs: a.page4.ascs, userId: a.selectUserId, shopId: a.selectShopId }, d)).then((p) => {
      a.tableData4 = p.data.records, a.page4.total = p.data.total, a.page4.currentPage = n.currentPage, a.page4.pageSize = n.pageSize, a.tableLoading4 = false;
    }).catch(() => {
      a.tableLoading4 = false;
    }));
  }
  function t(n, d) {
    n = C(n), a.paramsSearch3 = n, a.page3.currentPage = 1, S(a.page3, n), d();
  }
  function c(n, d) {
    n = C(n), a.paramsSearch4 = n, a.page4.currentPage = 1, $(a.page4, n), d();
  }
  return { ...q(a), permissions: i, permissionList: z, searchChange: R, sortChange: h, getPageF: g, handleDel: U, handleUpdate: k, handleSave: P, refreshChange: _, tabSelect: O, showUserRecord: v, getPage3F: S, getPage4F: $, searchChange3: t, searchChange4: c };
} }, oe = { class: "execution" }, ne = ["src"], se = { class: "spu-name" }, re = { class: "spec-info" }, le = { class: "grid-content", style: { color: "red" } }, ie = { class: "grid-content" }, de = { class: "grid-content" }, ue = { class: "grid-content" }, ce = { style: { "text-align": "left" } }, pe = { class: "grid-content" }, ge = { class: "grid-content" }, me = { class: "grid-content" }, fe = { class: "grid-content" }, he = { key: 0 }, be = { key: 1, class: "grid-content" }, ye = { class: "grid-content", style: { color: "red" } }, ve = { class: "grid-content", style: { color: "red" } }, Se = { style: { "text-align": "left" } }, we = { class: "grid-content" }, Pe = { class: "grid-content" }, $e = { key: 0, class: "grid-content" };
function Ie(e, l, a, i, z, R) {
  const h = b("el-col"), g = b("el-row"), U = b("el-button"), k = H, P = b("avue-crud"), _ = b("el-tab-pane"), O = b("el-tabs"), v = b("el-tag"), S = b("el-dialog"), $ = M;
  return m(), I("div", oe, [u($, null, { default: r(() => [u(P, { ref: "crud", page: e.page, data: e.tableData, permission: i.permissionList, modelValue: e.form, "onUpdate:modelValue": l[0] || (l[0] = (t) => e.form = t), "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: i.getPageF, onRefreshChange: i.refreshChange, onRowUpdate: i.handleUpdate, onRowSave: i.handleSave, onRowDel: i.handleDel, onSortChange: i.sortChange, onSearchChange: i.searchChange }, { expand: r(({ row: t }) => [t.userInfo ? (m(), D(g, { key: 0, type: "flex", justify: "center" }, { default: r(() => [u(h, { span: 6 }, { default: r(() => [s("div", null, o(e.$t("mall.shopdeposit.phoneNumber")) + o(t.userInfo.phone), 1), s("div", null, o(e.$t("mall.userinfo.userCode")) + "\uFF1A" + o(t.userInfo.userCode), 1)]), _: 2 }, 1024), u(h, { span: 6 }, { default: r(() => [s("div", null, o(e.$t("mall.userinfo.province")) + "\uFF1A" + o(t.userInfo.province), 1), s("div", null, o(e.$t("mall.userinfo.city")) + "\uFF1A" + o(t.userInfo.city), 1)]), _: 2 }, 1024), u(h, { span: 6 }, { default: r(() => [s("div", null, o(e.$t("mall.userinfo.sex")) + "\uFF1A" + o(t.userInfo.sex == "1" ? e.$t("mall.orderinfo.male") : t.userInfo.sex == "2" ? e.$t("mall.orderinfo.female") : e.$t("mall.orderinfo.unknown")), 1)]), _: 2 }, 1024)]), _: 2 }, 1024)) : w("", true)]), menu: r((t) => [i.permissions["mall:usershop:get"] ? (m(), D(U, { key: 0, link: "", type: "primary", plain: "", onClick: (c) => i.showUserRecord(t.row.userInfo.id, t.row.shopId) }, { default: r(() => [f(o(e.$t("mall.userinfo.details")), 1)]), _: 1 }, 8, ["onClick"])) : w("", true)]), userId: r(({ row: t }) => [u(k, { userId: t.userId, userInfo: t.userInfo }, null, 8, ["userId", "userInfo"])]), _: 1 }, 8, ["page", "data", "permission", "modelValue", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), u(S, { modelValue: e.dialogVisibleRecord, "onUpdate:modelValue": l[4] || (l[4] = (t) => e.dialogVisibleRecord = t), title: e.$t("mall.userinfo.userDetailRecords"), width: "85%" }, { default: r(() => [u(O, { modelValue: e.menuActive, "onUpdate:modelValue": l[1] || (l[1] = (t) => e.menuActive = t), "tab-position": "top", onTabChange: i.tabSelect }, { default: r(() => [u(_, { name: "2", label: e.$t("mall.userinfo.consumptionRecord") }, null, 8, ["label"]), u(_, { name: "3", label: e.$t("mall.userinfo.couponRecords") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "onTabChange"]), s("div", { class: "display-crud", style: T(e.menuActive == "2" ? "display:block" : "") }, [u(P, { ref: "crud3", page: e.page3, "onUpdate:page": l[2] || (l[2] = (t) => e.page3 = t), data: e.tableData3, "table-loading": e.tableLoading3, option: e.tableOption3, onSearchChange: i.searchChange3, onOnLoad: i.getPage3F }, { name: r((t) => [(m(true), I(E, null, G(t.row.listOrderItem, (c, n) => (m(), D(g, { key: n, gutter: 10, style: { padding: "5px", border: "1px solid #eaeaea" } }, { default: r(() => [u(h, { span: 3 }, { default: r(() => [s("img", { src: c.picUrl, width: "100%" }, null, 8, ne)]), _: 2 }, 1024), u(h, { span: 13, style: { "text-align": "left" } }, { default: r(() => [s("div", se, [t.row.orderType != "0" ? (m(), D(v, { key: 0, type: "danger" }, { default: r(() => [f(o(t.row.orderType == "1" ? e.$t("mall.orderinfo.bargain") : t.row.orderType == "2" ? e.$t("mall.orderinfo.groupBuy") : t.row.orderType == "3" ? e.$t("mall.orderinfo.flashSale") : ""), 1)]), _: 2 }, 1024)) : w("", true), f(" " + o(c.spuName), 1)]), s("div", re, o(c.specInfo), 1)]), _: 2 }, 1024), u(h, { span: 8 }, { default: r(() => [s("div", le, " \uFFE5" + o(c.paymentPrice) + o(c.paymentCouponPrice ? e.$t("mall.orderinfo.applyCoupon") + c.paymentCouponPrice : "") + o(c.paymentPoints ? e.$t("mall.orderinfo.applyPoints") + c.paymentPoints : ""), 1), s("div", ie, " \xD7" + o(c.quantity) + o(e.$t("mall.orderinfo.pieces")), 1)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128))]), createTime: r((t) => [s("div", null, [s("div", de, o(t.row.createTime), 1), s("div", ue, o(t.row.orderNo), 1)])]), salesPrice: r((t) => [s("div", ce, [s("div", pe, o(e.$t("mall.orderinfo.orderAmount")) + o(t.row.salesPrice), 1), s("div", ge, o(e.$t("mall.orderinfo.shippingFee")) + o(t.row.freightPrice), 1), s("div", me, o(e.$t("mall.orderinfo.couponDeduction")) + o(t.row.paymentCouponPrice), 1), s("div", fe, o(e.$t("mall.orderinfo.pointsDeduction")) + o(t.row.paymentPointsPrice), 1), t.row.paymentUserGradeDiscountPrice ? (m(), I("div", he, o(e.$t("mall.orderinfo.levelDiscount")) + o(t.row.paymentUserGradeDiscountPrice), 1)) : w("", true), t.row.paymentVipDiscountPrice ? (m(), I("div", be, o(e.$t("mall.orderinfo.memberDeduction")) + o(t.row.paymentVipDiscountPrice), 1)) : w("", true), s("div", ye, o(e.$t("mall.orderinfo.paymentAmount")) + o(t.row.paymentPrice), 1), s("div", ve, o(e.$t("mall.orderinfo.paymentPoints")) + o(t.row.paymentPoints), 1)])]), status: r((t) => [s("div", Se, [s("div", we, [f(o(e.$t("mall.orderinfo.orderStatus")) + " ", 1), u(v, { type: t.row.status == "2" || t.row.status == "3" || t.row.status == "4" ? "success" : "danger", effect: "dark", size: "small" }, { default: r(() => [f(o(t.row.statusDesc), 1)]), _: 2 }, 1032, ["type"])]), s("div", Pe, [f(o(e.$t("mall.orderinfo.paymentStatus")) + " ", 1), u(v, { type: t.row.isPay == "1" ? "success" : "danger", effect: "dark", size: "small" }, { default: r(() => [f(o(t.row.isPay == "1" ? e.$t("mall.orderinfo.paid") : e.$t("mall.orderinfo.unpaid")), 1)]), _: 2 }, 1032, ["type"])]), t.row.appraisesStatus ? (m(), I("div", $e, [f(o(e.$t("mall.orderinfo.reviewStatus")) + " ", 1), u(v, { type: t.row.appraisesStatus != "0" ? "success" : "danger", effect: "dark", size: "small" }, { default: r(() => [f(o(t.row.appraisesStatus == "0" ? e.$t("mall.orderinfo.notReviewed") : t.row.appraisesStatus == "1" ? e.$t("mall.orderinfo.reviewed") : t.row.appraisesStatus == "2" ? e.$t("mall.orderinfo.reviewedWithAdditionalComments") : ""), 1)]), _: 2 }, 1032, ["type"])])) : w("", true)])]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onSearchChange", "onOnLoad"])], 4), s("div", { class: "display-crud", style: T(e.menuActive == "3" ? "display:block" : "") }, [u(P, { ref: "crud4", page: e.page4, "onUpdate:page": l[3] || (l[3] = (t) => e.page4 = t), data: e.tableData4, "table-loading": e.tableLoading4, option: e.tableOption4, onSearchChange: i.searchChange4, onOnLoad: i.getPage4F }, { couponId: r((t) => [s("div", null, o(t.row.type == "1" ? "\u4EE3\u91D1\u5238" : t.row.type == "2" ? "\u6298\u6263\u5238" : ""), 1), s("div", null, o(t.row.name), 1), s("div", null, o(e.$t("mall.userinfo.orderThreshold")) + o(t.row.premiseAmount) + o(e.$t("mall.userinfo.canUse")), 1)]), validEndTime: r((t) => [s("div", null, o(t.row.validBeginTime), 1), s("div", null, o(e.$t("commons.to")) + o(t.row.validEndTime), 1)]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onSearchChange", "onOnLoad"])], 4)]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const Re = W(te, [["render", Ie], ["__scopeId", "data-v-a6b8ea2a"]]);
export {
  Re as default
};
