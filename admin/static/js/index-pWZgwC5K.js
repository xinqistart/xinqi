import { aO as C, n as L, A as O, R as q, p as A, q as F, K as M, S as j, b1 as D, _ as E, r as y, c, o as d, b as n, h as u, B as f, F as B, v as R, e as t, z as l, g as N, f as g, ba as G, a_ as W } from "./index-DAdfXJ2i.js";
import { _ as H } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function K(e) {
  return C.request("get", "/mall/goodsappraises/page", { params: e });
}
function Q(e) {
  return C.request("post", "/mall/goodsappraises", { data: e });
}
function Z(e) {
  return C.request("delete", "/mall/goodsappraises/" + e);
}
function z(e) {
  return C.request("put", "/mall/goodsappraises", { data: e });
}
const { $t: h } = L(), J = { dialogDrag: true, menuAlign: "center", searchShow: false, align: "center", menuType: "text", excelBtn: false, printBtn: false, delBtn: false, addBtn: false, viewBtn: false, editBtn: false, dateBtn: true, menu: false, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, column: [{ label: h("mall.goodsappraises.createTime"), prop: "createTime", sortable: true, width: 150, display: false }, { label: h("mall.goodsappraises.shopId"), prop: "shopId", type: "select", search: true, filterable: true, display: false, cascader: ["spuId"], props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list" }, { label: h("mall.goodsappraises.spuId"), prop: "spuId", type: "select", search: true, display: false, hide: true, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/goodsspu/list?shopId={{key}}" }, { label: h("mall.goodsappraises.nickName"), prop: "nickName", editDisplay: false, slot: true }, { label: h("mall.goodsappraises.specInfo"), prop: "specInfo", width: 200, slot: true, editDisplay: false, align: "left" }, { label: h("mall.goodsappraises.orderItem"), prop: "orderItem", width: 240, slot: true, editDisplay: false, align: "left" }, { label: h("mall.goodsappraises.appraises"), prop: "appraises", sortable: true, slot: true, editDisplay: false, width: 220, align: "left" }, { label: h("mall.goodsappraises.appraises2"), prop: "appraises2", slot: true, formslot: true, align: "left" }] }, X = { setup() {
  const { proxy: e } = O(), s = q({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: J, date: [], spuId: null }), I = A(null), i = F(() => {
    var _a;
    const o = (_a = M()) == null ? void 0 : _a.permissions;
    return { addBtn: !!o["mall:goodsappraises:add"], delBtn: !!o["mall:goodsappraises:del"], editBtn: !!o["mall:goodsappraises:edit"], viewBtn: !!o["mall:goodsappraises:get"] };
  });
  function T(o) {
    o ? s.date = o : s.date = [], m(s.page);
  }
  function V(o) {
    e.$prompt("\u8BF7\u8F93\u5165", e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), inputPattern: /[\S]/, inputErrorMessage: e.$t("commons.notNull") }).then(({ value: p }) => {
      o.sellerReply = p, z(o).then(() => {
        e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), m(s.page);
      });
    });
  }
  function $(o, p) {
    o = D(o), s.paramsSearch = o, s.page.currentPage = 1, m(s.page, o), p();
  }
  function v(o) {
    const p = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (s.page.descs = "", s.page.ascs = p) : o.order == "descending" ? (s.page.ascs = "", s.page.descs = p) : (s.page.ascs = "", s.page.descs = ""), m(s.page);
  }
  function m(o, p) {
    s.tableLoading = true, K(D({ current: o.currentPage, size: o.pageSize, descs: s.page.descs, ascs: s.page.ascs, beginTime: s.date[0], endTime: s.date[1], spuId: s.spuId, ...p, ...s.paramsSearch })).then((a) => {
      s.tableData = a.data.records, s.page.total = a.data.total, s.page.currentPage = o.currentPage, s.page.pageSize = o.pageSize, s.tableLoading = false, e.$nextTick(() => {
        I.value.dicInit("cascader");
      });
    }).catch(() => {
      s.tableLoading = false;
    });
  }
  function w(o) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return Z(o.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), m(s.page);
    });
  }
  function b(o, p, a, r) {
    z(o).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), a(), m(s.page);
    }).catch(() => {
      r();
    });
  }
  function k(o, p, a) {
    Q(o).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), p(), m(s.page);
    }).catch(() => {
      a();
    });
  }
  function _() {
    m(s.page);
  }
  return { ...j(s), permissionList: i, dateChange: T, reply: V, searchChange: $, sortChange: v, getPageF: m, handleDel: w, handleUpdate: b, handleSave: k, refreshChange: _, crudRef: I };
} }, Y = { key: 0, shadow: "none" }, x = { style: { padding: "8px" } }, ee = { class: "bottom clearfix" }, ae = { class: "time" }, se = { key: 0 }, oe = { style: { color: "red" }, class: "el-icon-chat-dot-round" }, te = { class: "time" }, le = { key: 0 }, re = { style: { color: "red" }, class: "el-icon-chat-dot-round" }, ne = { class: "time" }, ie = { key: 1 }, de = { key: 0 }, pe = { style: { color: "red" }, class: "el-icon-chat-dot-round" }, ce = { class: "time" }, ue = { key: 0 }, me = { style: { color: "red" }, class: "el-icon-chat-dot-round" }, ge = { class: "time" }, he = { key: 1 };
function fe(e, s, I, i, T, V) {
  const $ = H, v = y("el-image"), m = G, w = y("el-rate"), b = y("el-col"), k = y("el-row"), _ = y("el-button"), o = y("avue-crud"), p = W;
  return d(), c("div", null, [n(p, null, { default: u(() => [n(o, { ref: "crudRef", page: e.page, "onUpdate:page": s[0] || (s[0] = (a) => e.page = a), modelValue: e.form, "onUpdate:modelValue": s[1] || (s[1] = (a) => e.form = a), data: e.tableData, permission: i.permissionList, "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: i.getPageF, onRefreshChange: i.refreshChange, onRowUpdate: i.handleUpdate, onRowSave: i.handleSave, onRowDel: i.handleDel, onSortChange: i.sortChange, onSearchChange: i.searchChange, onDateChange: i.dateChange }, { nickName: u(({ row: a }) => [n($, { userId: a.userId, headimgUrl: a.headimgUrl, nickName: a.nickName }, null, 8, ["userId", "headimgUrl", "nickName"])]), specInfo: u((a) => [a.row.orderItem ? (d(), c("div", Y, [n(v, { src: a.row.orderItem.picUrl, "preview-src-list": a.row.orderItem.picUrl, "hide-on-click-modal": true, "preview-teleported": true }, null, 8, ["src", "preview-src-list"]), t("div", x, [t("span", null, l(a.row.orderItem.spuName), 1), t("div", ee, [t("div", ae, l(a.row.orderItem.specInfo), 1)])])])) : f("", true)]), orderItem: u((a) => [a.row.orderItem ? (d(), c("div", se, [t("div", null, l(e.$t("mall.goodsappraises.orderNo")) + l(a.row.orderInfo.orderNo), 1), t("div", null, [g(l(e.$t("mall.goodsappraises.purchasePrice")), 1), n(m, { amount: a.row.orderItem.salesPrice }, null, 8, ["amount"])]), t("div", null, l(e.$t("mall.goodsappraises.purchaseQuantity")) + l(a.row.orderItem.quantity), 1)])) : f("", true)]), appraises: u((a) => [t("div", null, [t("div", null, [g(l(e.$t("mall.goodsappraises.productRating")) + " ", 1), n(w, { modelValue: a.row.goodsScore, "onUpdate:modelValue": (r) => a.row.goodsScore = r, disabled: "" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), t("div", null, [g(l(e.$t("mall.goodsappraises.serviceRating")) + " ", 1), n(w, { modelValue: a.row.serviceScore, "onUpdate:modelValue": (r) => a.row.serviceScore = r, disabled: "" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), t("div", null, [g(l(e.$t("mall.goodsappraises.logisticsRating")) + " ", 1), n(w, { modelValue: a.row.logisticsScore, "onUpdate:modelValue": (r) => a.row.logisticsScore = r, disabled: "" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), t("div", null, [t("div", oe, l(e.$t("mall.goodsappraises.buyerMessage")), 1), t("div", te, l(a.row.createTime), 1), t("div", null, l(a.row.content ? a.row.content : e.$t("mall.goodsappraises.lazyWriter")), 1), n(k, { gutter: 20 }, { default: u(() => [(d(true), c(B, null, R(a.row.picUrls, (r, S) => (d(), N(b, { key: S, span: 6 }, { default: u(() => [n(v, { src: r, "preview-src-list": a.row.picUrls, "hide-on-click-modal": true, "preview-teleported": true, "z-index": 9999 }, null, 8, ["src", "preview-src-list"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)]), a.row.replyTime ? (d(), c("div", le, [t("div", re, l(e.$t("mall.goodsappraises.sellerReply")) + "\uFF1A ", 1), t("div", ne, l(a.row.replyTime), 1), t("div", null, [g(l(a.row.sellerReply) + " ", 1), n(_, { type: "warning", circle: "", size: "small", onClick: (r) => i.reply(a.row) }, null, 8, ["onClick"])])])) : f("", true), a.row.replyTime ? f("", true) : (d(), c("div", ie, [n(_, { size: "small", link: "", type: "primary", icon: "EditPen", onClick: (r) => i.reply(a.row) }, { default: u(() => [g(l(e.$t("mall.goodsappraises.replyNow")), 1)]), _: 1 }, 8, ["onClick"])]))])]), appraises2: u((a) => [a.row.listGoodsAppraises.length > 0 ? (d(), c("div", de, [(d(true), c(B, null, R(a.row.listGoodsAppraises, (r, S) => (d(), c("div", { key: S }, [t("div", null, [t("div", pe, l(e.$t("mall.goodsappraises.buyerMessage")), 1), t("div", ce, l(r.createTime), 1), t("div", null, l(r.content ? r.content : e.$t("mall.goodsappraises.lazyWriter")), 1), n(k, { gutter: 20 }, { default: u(() => [(d(true), c(B, null, R(r.picUrls, (U, P) => (d(), N(b, { key: P, span: 6 }, { default: u(() => [n(v, { src: U, "preview-src-list": r.picUrls, "hide-on-click-modal": true, "preview-teleported": true }, null, 8, ["src", "preview-src-list"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)]), r.replyTime ? (d(), c("div", ue, [t("div", me, l(e.$t("mall.goodsappraises.sellerReply")) + "\uFF1A ", 1), t("div", ge, l(r.replyTime), 1), t("div", null, [g(l(r.sellerReply) + " ", 1), n(_, { type: "warning", circle: "", size: "small", onClick: (U) => i.reply(r) }, null, 8, ["onClick"])])])) : f("", true), r.replyTime ? f("", true) : (d(), c("div", he, [n(_, { size: "small", link: "", type: "primary", onClick: (U) => i.reply(r) }, { default: u(() => [g(l(e.$t("mall.goodsappraises.replyNow")), 1)]), _: 1 }, 8, ["onClick"])]))]))), 128))])) : f("", true)]), _: 1 }, 8, ["page", "modelValue", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange", "onDateChange"])]), _: 1 })]);
}
const ke = E(X, [["render", fe], ["__scopeId", "data-v-d69daf0f"]]);
export {
  ke as default
};
