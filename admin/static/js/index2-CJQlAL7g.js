import { A as j, R as A, be as F, q as K, U as q, K as H, $ as N, p as E, S as M, b1 as Z, _ as G, r as p, c as y, o as d, b as n, h as t, e as l, w as O, z as c, f as m, D as V, B as u, g as _, F as J, v as Q, C as W, a_ as X } from "./index-DAdfXJ2i.js";
import { a as Y, p as x, d as ee, b as ae } from "./payconfig-CEsNU9sp.js";
import { a as te, _ as oe } from "./alipay-tip-D698dNTo.js";
const ne = { setup() {
  const { proxy: a } = j(), e = A({ form: { keyPath: void 0, privateKeyPath: void 0, privateCertPath: void 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: [], descs: [] }, paramsSearch: {}, tableLoading: false, tableOption: te, headers: { Authorization: "Bearer " + F().access_token }, dicDataType: [{ name: a.$t("pay.payconfig.wechatPay"), id: "1", disabled: false }, { name: a.$t("pay.payconfig.alipay"), id: "2", disabled: false }, { name: a.$t("pay.payconfig.paypal"), id: "3", disabled: false }] }), L = K(() => {
    var _a;
    return (_a = q()) == null ? void 0 : _a.userInfo;
  }), i = K(() => {
    var _a;
    return (_a = H()) == null ? void 0 : _a.permissions;
  }), B = K(() => ({ addBtn: !!i.value["pay:payconfig:add"], delBtn: !!i.value["pay:payconfig:del"], editBtn: !!i.value["pay:payconfig:edit"], viewBtn: !!i.value["pay:payconfig:get"] }));
  (() => {
    if (L.value.type == "-1") {
      const o = N();
      o && (e.headers["switch-tenant-id"] = o);
    }
  })();
  function U() {
    e.form.keyPath = "";
  }
  function h() {
    e.form.privateKeyPath = "";
  }
  function b() {
    e.form.privateCertPath = "";
  }
  function D(o, s, r) {
    e.form.keyPath = o.link;
  }
  function g(o, s, r) {
    e.form.privateKeyPath = o.link;
  }
  function S(o, s, r) {
    e.form.privateCertPath = o.link;
  }
  function R(o, s) {
    o = Z(o), e.paramsSearch = o, e.page.currentPage = 1, f(e.page, o), s();
  }
  function $(o) {
    const s = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = [], e.page.ascs = s) : o.order == "descending" ? (e.page.ascs = [], e.page.descs = s) : (e.page.ascs = [], e.page.descs = []), f(e.page);
  }
  function f(o, s) {
    e.tableLoading = true, ae(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((r) => {
      e.tableData = r.data.records, e.page.total = r.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false;
      const v = e.dicDataType;
      for (let w = 0; w < v.length; w++) {
        v[w].disabled = false;
        for (let I = 0; I < e.tableData.length; I++) v[w].id == e.tableData[I].type && (v[w].disabled = true);
      }
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function P(o) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return ee(o.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), f(e.page);
    });
  }
  function C(o, s, r, v) {
    x(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), r(), f(e.page);
    }).catch(() => {
      v();
    });
  }
  const T = E(null);
  function k(o, s, r) {
    Y(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), s(), f(e.page);
    }).catch(() => {
      r();
    });
  }
  function z() {
    f(e.page);
  }
  return { ...M(e), crud: T, permissions: i, permissionList: B, keyPathRemove: U, privateKeyPathRemove: h, privateCertPathRemove: b, uploadKeySuccess: D, uploadPrivateKeySuccess: g, uploadPrivateCertSuccess: S, searchChange: R, sortChange: $, getPageF: f, handleDel: P, handleUpdate: C, handleSave: k, refreshChange: z };
} }, se = { class: "execution" }, ie = { class: "jl-text-tips" }, re = { key: 0 }, le = { key: 0 }, pe = { key: 0 }, de = { key: 0 }, ce = { key: 1 }, fe = { class: "flex place-items-center text-gray-500" }, me = { class: "mx-[5px]" }, ue = { class: "flex place-items-center text-gray-500" }, ge = { class: "mx-[5px]" }, ye = { class: "flex place-items-center text-gray-500" }, he = { class: "mx-[5px]" };
function ve(a, e, L, i, B, U) {
  const h = p("el-button"), b = p("el-image"), D = p("InfoFilled"), g = p("el-icon"), S = p("el-popover"), R = p("el-radio"), $ = p("el-radio-group"), f = p("el-tag"), P = p("el-upload"), C = p("el-icon-warning"), T = p("TopRight"), k = p("el-link"), z = p("avue-crud"), o = X;
  return d(), y("div", se, [n(o, null, { default: t(() => [n(z, { ref: "crud", page: a.page, "onUpdate:page": e[2] || (e[2] = (s) => a.page = s), data: a.tableData, permission: i.permissionList, "table-loading": a.tableLoading, option: a.tableOption, modelValue: a.form, "onUpdate:modelValue": e[3] || (e[3] = (s) => a.form = s), onOnLoad: i.getPageF, onRefreshChange: i.refreshChange, onRowUpdate: i.handleUpdate, onRowSave: i.handleSave, onRowDel: i.handleDel, onSortChange: i.sortChange, onSearchChange: i.searchChange }, { "menu-left": t(() => [i.permissions["pay:payconfig:add"] && a.tableData.length < 2 ? (d(), _(h, { key: 0, type: "primary", icon: "Plus", onClick: e[0] || (e[0] = W((s) => a.$refs.crud.rowAdd(), ["stop"])) }, { default: t(() => [m(c(a.$t("pay.payconfig.newPayConfig")), 1)]), _: 1 })) : u("", true), l("span", ie, c(a.$t("pay.payconfig.newPayConfigTip")), 1)]), "appId-label": t(({}) => [a.form.type == 1 ? (d(), _(S, { key: 0, "append-to-body": "", trigger: "hover", width: "430px" }, { default: t(() => [e[4] || (e[4] = l("div", null, " \u63D0\u793A: \u5FAE\u4FE1\u652F\u4ED8\u5E73\u53F0-\u4EA7\u54C1\u4E2D\u5FC3-AppID\u8D26\u53F7\u7BA1\u7406-\u9009\u62E9\u5176\u4E2D\u4E00\u4E2A\u6709\u6548AppID ", -1)), n(b, { src: "/img/tip/wxpay-tip.jpg", style: { width: "400px", height: "300px" }, "preview-src-list": ["/img/tip/wxpay-tip.jpg"] })]), reference: t(() => [n(g, null, { default: t(() => [n(D)]), _: 1 })]), _: 1 })) : u("", true), e[5] || (e[5] = l("span", null, "AppId", -1))]), "type-form": t((s) => [l("div", null, [n($, { modelValue: a.form.type, "onUpdate:modelValue": e[1] || (e[1] = (r) => a.form.type = r), size: "small", disabled: s.type != "add" }, { default: t(() => [(d(true), y(J, null, Q(a.dicDataType, (r) => (d(), _(R, { border: "", key: r.id, label: r.id, disabled: r.disabled }, { default: t(() => [m(c(r.name), 1)]), _: 2 }, 1032, ["label", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])])]), "keyPath-form": t(() => [a.form.keyPath ? (d(), y("div", re, [n(f, { closable: "", onClose: i.keyPathRemove }, { default: t(() => [m(c(a.form.keyPath.slice(0, 60)), 1)]), _: 1 }, 8, ["onClose"])])) : u("", true), a.form.keyPath ? u("", true) : (d(), _(P, { key: 1, action: "/pay/payconfig/cert/upload", headers: a.headers, limit: 1, "on-success": i.uploadKeySuccess }, { default: t(() => [n(h, { size: "small", type: "primary" }, { default: t(() => [m(c(a.$t("pay.payconfig.clickUpload")), 1)]), _: 1 })]), _: 1 }, 8, ["headers", "on-success"]))]), "privateKeyPath-form": t(() => [a.form.privateKeyPath ? (d(), y("div", le, [n(f, { closable: "", onClose: i.privateKeyPathRemove }, { default: t(() => [m(c(a.form.privateKeyPath.slice(0, 60)), 1)]), _: 1 }, 8, ["onClose"])])) : u("", true), a.form.privateKeyPath ? u("", true) : (d(), _(P, { key: 1, action: "/pay/payconfig/cert/upload", headers: a.headers, limit: 1, "on-success": i.uploadPrivateKeySuccess }, { default: t(() => [n(h, { size: "small", type: "primary" }, { default: t(() => [m(c(a.$t("pay.payconfig.clickUpload")), 1)]), _: 1 })]), _: 1 }, 8, ["headers", "on-success"]))]), "privateCertPath-form": t(() => [a.form.privateCertPath ? (d(), y("div", pe, [n(f, { closable: "", onClose: i.privateCertPathRemove }, { default: t(() => [m(c(a.form.privateCertPath.slice(0, 60)), 1)]), _: 1 }, 8, ["onClose"])])) : u("", true), a.form.privateCertPath ? u("", true) : (d(), _(P, { key: 1, action: "/pay/payconfig/cert/upload", headers: a.headers, limit: 1, "on-success": i.uploadPrivateCertSuccess }, { default: t(() => [n(h, { size: "small", type: "primary" }, { default: t(() => [m(c(a.$t("pay.payconfig.clickUpload")), 1)]), _: 1 })]), _: 1 }, 8, ["headers", "on-success"]))]), type: t((s) => [s.row.type == "1" ? (d(), y("div", de, [n(b, { class: "pay-img", src: "/img/wx-pay.png" })])) : u("", true), s.row.type == "2" ? (d(), y("div", ce, [n(b, { class: "pay-img", src: "/img/ali-pay.png" })])) : u("", true)]), "dividedReceiptTypeTips-form": t(() => [l("div", null, [O(l("div", fe, [n(g, { size: "13" }, { default: t(() => [n(C)]), _: 1 }), l("span", me, c(a.$t("pay.payconfig.configInstructions")), 1), n(k, { type: "primary", href: "https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_3&index=4", target: "_blank" }, { default: t(() => [m(c(a.$t("pay.payconfig.officialDocs")), 1), n(g, null, { default: t(() => [n(T)]), _: 1 })]), _: 1 })], 512), [[V, a.form.type == "1"]]), O(l("div", null, [l("div", ue, [n(g, { size: "13" }, { default: t(() => [n(C)]), _: 1 }), l("span", ge, c(a.$t("pay.payconfig.viewOfficialDocs")), 1), n(k, { type: "primary", href: "https://opendoc.alipay.com/pre-open/06p5tq?pathHash=de4060c1", target: "_blank" }, { default: t(() => [...e[6] || (e[6] = [m("https://opendoc.alipay.com/pre-open/06p5tq?pathHash=de4060c1", -1)])]), _: 1 })]), n(S, { placement: "top", width: "925", trigger: "hover" }, { reference: t(() => [l("div", null, [l("div", ye, [n(g, { size: "13" }, { default: t(() => [n(C)]), _: 1 }), l("span", he, c(a.$t("pay.payconfig.alipayAccountInfo")), 1), n(k, { type: "primary", href: "https://b.alipay.com/page/store-management/infomanage", target: "_blank" }, { default: t(() => [...e[7] || (e[7] = [m("https://b.alipay.com/page/store-management/infomanage", -1)])]), _: 1 })])])]), default: t(() => [e[8] || (e[8] = l("img", { width: "900", src: oe }, null, -1))]), _: 1 })], 512), [[V, a.form.type == "2"]])])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Ce = G(ne, [["render", ve], ["__scopeId", "data-v-81ba425e"]]);
export {
  Ce as default
};
