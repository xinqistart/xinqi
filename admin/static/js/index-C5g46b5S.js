import { A, R as j, be as F, q as T, U as q, K as N, $ as H, p as E, S as M, b1 as Z, _ as G, r as l, c as y, o as p, b as n, h as t, e as d, w as V, z as c, f as m, D as O, B as u, g as _, F as J, v as Q, C as W, a_ as X } from "./index-DAdfXJ2i.js";
import { a as Y, p as x, d as ee, b as ae } from "./payconfig-CEsNU9sp.js";
import { t as te, _ as oe } from "./alipay-tip-D698dNTo.js";
const ne = { setup() {
  const { proxy: a } = A(), e = j({ form: { keyPath: void 0, privateKeyPath: void 0, privateCertPath: void 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: te, headers: { Authorization: "Bearer " + F().access_token }, dicDataType: [{ name: a.$t("pay.payconfig.wechatPay"), id: "1", disabled: false }, { name: a.$t("pay.payconfig.alipay"), id: "2", disabled: false }] }), B = T(() => {
    var _a;
    return (_a = q()) == null ? void 0 : _a.userInfo;
  }), s = T(() => {
    var _a;
    return (_a = N()) == null ? void 0 : _a.permissions;
  }), U = T(() => ({ addBtn: !!s.value["pay:payconfig:add"], delBtn: !!s.value["pay:payconfig:del"], editBtn: !!s.value["pay:payconfig:edit"], viewBtn: !!s.value["pay:payconfig:get"] }));
  (() => {
    if (B.value.type == "-1") {
      const o = H();
      o && (e.headers["switch-tenant-id"] = o);
    }
  })();
  function L() {
    e.form.keyPath = "";
  }
  function h() {
    e.form.privateKeyPath = "";
  }
  function b() {
    e.form.privateCertPath = "";
  }
  function R(o) {
    e.form.keyPath = o.link;
  }
  function g(o) {
    e.form.privateKeyPath = o.link;
  }
  function S(o) {
    e.form.privateCertPath = o.link;
  }
  function $(o, i) {
    o = Z(o), e.paramsSearch = o, e.page.currentPage = 1, f(e.page, o), i();
  }
  function I(o) {
    const i = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = null, e.page.ascs = i) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = i) : (e.page.ascs = "", e.page.descs = null), f(e.page);
  }
  function f(o, i) {
    e.tableLoading = true, ae(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs }, i, e.paramsSearch)).then((r) => {
      e.tableData = r.data.records, e.page.total = r.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false;
      const v = e.dicDataType;
      for (let w = 0; w < v.length; w++) {
        v[w].disabled = false;
        for (let K = 0; K < e.tableData.length; K++) v[w].id == e.tableData[K].type && (v[w].disabled = true);
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
  function k(o, i, r, v) {
    x(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), r(), f(e.page);
    }).catch(() => {
      v();
    });
  }
  const D = E(null);
  function C(o, i, r) {
    Y(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), i(), f(e.page);
    }).catch(() => {
      r();
    });
  }
  function z() {
    f(e.page);
  }
  return { ...M(e), crud: D, permissions: s, permissionList: U, keyPathRemove: L, privateKeyPathRemove: h, privateCertPathRemove: b, uploadKeySuccess: R, uploadPrivateKeySuccess: g, uploadPrivateCertSuccess: S, searchChange: $, sortChange: I, getPageF: f, handleDel: P, handleUpdate: k, handleSave: C, refreshChange: z };
} }, se = { class: "execution" }, ie = { key: 0 }, re = { key: 0 }, le = { key: 0 }, pe = { key: 0 }, de = { key: 1 }, ce = { class: "flex place-items-center text-gray-500" }, fe = { class: "mx-[5px]" }, me = { class: "flex place-items-center text-gray-500" }, ue = { class: "mx-[5px]" }, ge = { class: "flex place-items-center text-gray-500" }, ye = { class: "mx-[5px]" };
function he(a, e, B, s, U, L) {
  const h = l("el-button"), b = l("el-image"), R = l("InfoFilled"), g = l("el-icon"), S = l("el-popover"), $ = l("el-radio"), I = l("el-radio-group"), f = l("el-tag"), P = l("el-upload"), k = l("el-icon-warning"), D = l("TopRight"), C = l("el-link"), z = l("avue-crud"), o = X;
  return p(), y("div", se, [n(o, null, { default: t(() => [n(z, { ref: "crud", page: a.page, "onUpdate:page": e[2] || (e[2] = (i) => a.page = i), data: a.tableData, permission: s.permissionList, "table-loading": a.tableLoading, modelValue: a.form, "onUpdate:modelValue": e[3] || (e[3] = (i) => a.form = i), option: a.tableOption, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { "menu-left": t(() => [s.permissions["pay:payconfig:add"] && a.tableData.length < 2 ? (p(), _(h, { key: 0, type: "primary", icon: "Plus", onClick: e[0] || (e[0] = W((i) => a.$refs.crud.rowAdd(), ["stop"])) }, { default: t(() => [m(c(a.$t("pay.payconfig.newPayConfig")), 1)]), _: 1 })) : u("", true)]), "appId-label": t(({}) => [a.form.type == 1 ? (p(), _(S, { key: 0, "append-to-body": "", trigger: "hover", width: "430px" }, { default: t(() => [e[4] || (e[4] = d("div", null, " \u63D0\u793A: \u5FAE\u4FE1\u652F\u4ED8\u5E73\u53F0-\u4EA7\u54C1\u4E2D\u5FC3-AppID\u8D26\u53F7\u7BA1\u7406-\u9009\u62E9\u5176\u4E2D\u4E00\u4E2A\u6709\u6548AppI ", -1)), n(b, { src: "/img/tip/wxpay-tip.jpg", style: { width: "400px", height: "300px" }, "preview-src-list": ["/img/tip/wxpay-tip.jpg"] })]), reference: t(() => [n(g, null, { default: t(() => [n(R)]), _: 1 })]), _: 1 })) : u("", true), e[5] || (e[5] = d("span", null, "AppId", -1))]), "type-form": t((i) => [d("div", null, [n(I, { modelValue: a.form.type, "onUpdate:modelValue": e[1] || (e[1] = (r) => a.form.type = r), size: "small", disabled: i.type != "add" }, { default: t(() => [(p(true), y(J, null, Q(a.dicDataType, (r) => (p(), _($, { border: "", key: r.id, label: r.id, disabled: r.disabled }, { default: t(() => [m(c(r.name), 1)]), _: 2 }, 1032, ["label", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])])]), "keyPath-form": t(() => [a.form.keyPath ? (p(), y("div", ie, [n(f, { closable: "", onClose: s.keyPathRemove }, { default: t(() => [m(c(a.form.keyPath.slice(0, 60)), 1)]), _: 1 }, 8, ["onClose"])])) : u("", true), a.form.keyPath ? u("", true) : (p(), _(P, { key: 1, action: "/pay/payconfig/cert/upload", headers: a.headers, limit: 1, "on-success": s.uploadKeySuccess }, { default: t(() => [n(h, { size: "small", type: "primary" }, { default: t(() => [m(c(a.$t("pay.payconfig.clickUpload")), 1)]), _: 1 })]), _: 1 }, 8, ["headers", "on-success"]))]), "privateKeyPath-form": t(() => [a.form.privateKeyPath ? (p(), y("div", re, [n(f, { closable: "", onClose: s.privateKeyPathRemove }, { default: t(() => [m(c(a.form.privateKeyPath.slice(0, 60)), 1)]), _: 1 }, 8, ["onClose"])])) : u("", true), a.form.privateKeyPath ? u("", true) : (p(), _(P, { key: 1, action: "/pay/payconfig/cert/upload", headers: a.headers, limit: 1, "on-success": s.uploadPrivateKeySuccess }, { default: t(() => [n(h, { size: "small", type: "primary" }, { default: t(() => [m(c(a.$t("pay.payconfig.clickUpload")), 1)]), _: 1 })]), _: 1 }, 8, ["headers", "on-success"]))]), "privateCertPath-form": t(() => [a.form.privateCertPath ? (p(), y("div", le, [n(f, { closable: "", onClose: s.privateCertPathRemove }, { default: t(() => [m(c(a.form.privateCertPath.slice(0, 60)), 1)]), _: 1 }, 8, ["onClose"])])) : u("", true), a.form.privateCertPath ? u("", true) : (p(), _(P, { key: 1, action: "/pay/payconfig/cert/upload", headers: a.headers, limit: 1, "on-success": s.uploadPrivateCertSuccess }, { default: t(() => [n(h, { size: "small", type: "primary" }, { default: t(() => [m(c(a.$t("pay.payconfig.clickUpload")), 1)]), _: 1 })]), _: 1 }, 8, ["headers", "on-success"]))]), type: t((i) => [i.row.type == "1" ? (p(), y("div", pe, [n(b, { class: "pay-img", src: "/img/wx-pay.png" })])) : u("", true), i.row.type == "2" ? (p(), y("div", de, [n(b, { class: "pay-img", src: "/img/ali-pay.png" })])) : u("", true)]), "dividedReceiptTypeTips-form": t(() => [d("div", null, [V(d("div", ce, [n(g, { size: "13" }, { default: t(() => [n(k)]), _: 1 }), d("span", fe, c(a.$t("pay.payconfig.configInstructions")), 1), n(C, { type: "primary", href: "https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_3&index=4", target: "_blank" }, { default: t(() => [m(c(a.$t("pay.payconfig.officialDocs")), 1), n(g, null, { default: t(() => [n(D)]), _: 1 })]), _: 1 })], 512), [[O, a.form.type == "1"]]), V(d("div", null, [d("div", me, [n(g, { size: "13" }, { default: t(() => [n(k)]), _: 1 }), d("span", ue, c(a.$t("pay.payconfig.configInstructions")), 1), n(C, { type: "primary", href: "https://opendoc.alipay.com/pre-open/06p5tq?pathHash=de4060c1", target: "_blank" }, { default: t(() => [m(c(a.$t("pay.payconfig.officialDocs")), 1), n(g, null, { default: t(() => [n(D)]), _: 1 })]), _: 1 })]), n(S, { placement: "top", width: "925", trigger: "hover" }, { reference: t(() => [d("div", null, [d("div", ge, [n(g, { size: "13" }, { default: t(() => [n(k)]), _: 1 }), d("span", ye, c(a.$t("pay.payconfig.alipayAccountInfo")), 1), n(C, { type: "primary", href: "https://b.alipay.com/page/store-management/infomanage", target: "_blank" }, { default: t(() => [...e[6] || (e[6] = [m("https://b.alipay.com/page/store-management/infomanage", -1)])]), _: 1 })])])]), default: t(() => [e[7] || (e[7] = d("img", { width: "900", src: oe }, null, -1))]), _: 1 })], 512), [[O, a.form.type == "2"]])])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "modelValue", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Pe = G(ne, [["render", he], ["__scopeId", "data-v-24101af9"]]);
export {
  Pe as default
};
