import { n as oe, A as ie, R as se, p as H, I as pe, U as re, t as de, q as X, K as ue, S as me, $ as G, b1 as we, _ as fe, r as w, c as z, o as g, b as n, h as t, e as x, B as y, g as b, f as s, z as i, F as Z, v as Y, a_ as ce } from "./index-DAdfXJ2i.js";
import { b as ae, w as ge, g as ee, c as xe, d as be, e as he, f as ye, h as ke, p as $e, i as ve, j as Me, k as _e, l as Ce, m as Se } from "./wxapp-BACewdCT.js";
import { f as Te } from "./organ-Uz8t_88q.js";
import { g as Ie } from "./pagedevise-C4VLpPB5.js";
import { V as Ae } from "./vue-qr-Ee6k57BN.js";
import { u as E } from "./pageDevise-DcQ8796K.js";
import { c as J } from "./clientType-BhCLU4J5.js";
const { $t: r } = oe(), Le = (e, a, v) => {
  window.openType === "edit" ? v() : ae({ id: a }).then((p) => {
    p.data.length > 0 ? v(new Error(r("wxmp.wxapp.duplicateAppId"))) : v();
  });
}, Pe = (e, a, v) => {
  window.openType === "edit" ? v() : ae({ weixinSign: a }).then((p) => {
    p.data.length > 0 ? v(new Error(r("wxmp.wxapp.duplicateWeixinSign"))) : v();
  });
}, De = { dialogType: "drawer", dialogWidth: "80%", menuAlign: "center", align: "center", menuWidth: 200, menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, defaultExpandAll: true, labelWidth: 110, searchGutter: 50, searchLabelWidth: 90, searchMenuSpan: 6, labelPosition: "left", searchLabelPosition: "left", column: [{ label: r("wxmp.wxapp.name"), prop: "name", offset: 1, span: 12, search: true, slot: true, rules: [{ required: true, message: r("wxmp.wxapp.name") + r("commons.notNull"), trigger: "blur" }] }, { label: r("wxmp.wxapp.weixinType"), prop: "weixinType", type: "select", span: 11, dicUrl: "/upms/dict/type/weixin_type", sortable: true, search: true, width: 120, searchLabelWidth: 100, rules: [{ required: true, message: r("wxmp.wxapp.weixinType") + r("commons.notNull"), trigger: "blur" }] }, { label: r("wxmp.wxapp.verifyType"), prop: "verifyType", type: "select", dicUrl: "/upms/dict/type/wx_verify_type", sortable: true, search: true, slot: true, width: 120, searchLabelWidth: 100, offset: 1, span: 12, rules: [{ required: true, message: r("wxmp.wxapp.verifyType") + r("commons.notNull"), trigger: "blur" }] }, { label: r("wxmp.wxapp.weixinSign"), prop: "weixinSign", search: true, hide: true, span: 11, searchLabelWidth: 140, editDisabled: true, rules: [{ required: true, message: r("wxmp.wxapp.weixinSign") + r("commons.notNull"), trigger: "blur" }, { validator: Pe, trigger: "blur" }], labelTip: r("wxmp.wxapp.weixinOriginalIdDetails") }, { label: r("wxmp.wxapp.id"), prop: "id", search: true, hide: true, offset: 1, span: 12, editDisabled: true, rules: [{ required: true, message: r("wxmp.wxapp.id") + r("commons.notNull"), trigger: "blur" }, { validator: Le, trigger: "blur" }], labelTip: r("wxmp.wxapp.appIdDetails") }, { label: r("wxmp.wxapp.secret"), prop: "secret", span: 11, hide: true, labelTip: r("wxmp.wxapp.appSecretDetails") }, { label: r("commons.createTime"), prop: "createTime", type: "datetime", sortable: true, hide: true, editDisplay: false, addDisplay: false }, { label: r("wxmp.wxapp.updateTime"), prop: "updateTime", type: "datetime", sortable: true, hide: true, editDisplay: false, addDisplay: false }, { label: r("wxmp.wxapp.token"), prop: "token", offset: 1, span: 12, hide: true }, { label: r("wxmp.wxapp.aesKey"), prop: "aesKey", span: 11, hide: true }, { label: r("wxmp.wxapp.principalName"), prop: "principalName", offset: 1, span: 12, hide: true }, { label: r("wxmp.wxapp.community"), prop: "community", span: 11, hide: true }, { label: r("wxmp.wxapp.remarks"), prop: "remarks", offset: 1, span: 12, hide: true }, { label: r("wxma.wxapp.sort"), offset: 1, span: 12, prop: "sort", hide: true }, { label: r("wxma.wxapp.shopId"), prop: "shopId", type: "select", search: true, display: true, width: 130, offset: 1, span: 12, filterable: true, labelTip: r("wxmp.wxapp.notSelectedMallOfficialAccount"), props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", dicFormatter: (e) => (e || (e = []), e.unshift({ id: "-1", name: r("wxmp.wxapp.mallOfficialAccount") }), e) }] }, ze = { components: { VueQr: Ae }, setup() {
  var _a;
  const { proxy: e } = ie(), a = se({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, form: { shopId: "" }, authorizerList: [], dialogAuthorizerInfo: false, host: window.location.href.split("#")[0], tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "sort", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: De, treeOrganData: [], organProps: { label: "name", value: "id" }, formWxMalink2: { appid: "", notify_users: "0", show_profile: "0" }, qrCodeSceneDialog: false, scene: null, qrCodeScene: null, wxMaLinkDialog: false, wxMalinkLoading: false, wxMalinks: [], wxMalinkOpenAppId: null, wxMalinkAddDialog: false, wxMalinkAddLoading: false, rulesWxMalink: { appid: [{ required: true, message: e.$t("wxmp.wxapp.enterAppId"), trigger: "blur" }, { min: 2, max: 20, message: e.$t("wxmp.wxapp.validAppId"), trigger: "blur" }], notify_users: [{ required: true, message: e.$t("wxmp.wxapp.chooseTemplateMessageOption"), trigger: "blur" }], show_profile: [{ required: true, message: e.$t("wxmp.wxapp.chooseOfficialHomePageOption"), trigger: "blur" }] }, tableDataMa: [] }), v = H(null), p = pe(), M = (_a = re()) == null ? void 0 : _a.userInfo, O = H();
  de(() => {
    L(), M.type == "2" && (a.form.shopId = M.shopId, O.value.tableOption.column.forEach((o) => {
      o.prop == "shopId" && (o.display = false);
    }));
  });
  const f = X(() => {
    var _a2;
    return (_a2 = ue()) == null ? void 0 : _a2.permissions;
  }), _ = X(() => ({ addBtn: !!f.value["wxmp:wxapp:add"], delBtn: !!f.value["wxmp:wxapp:del"], editBtn: !!f.value["wxmp:wxapp:edit"], viewBtn: !!f.value["wxmp:wxapp:get"] }));
  function m(o) {
    a.page.currentPage = 1, k(a.page, { organId: o.id });
  }
  function L() {
    Te().then((o) => {
      a.treeOrganData = o.data;
    });
  }
  function h(o) {
    a.tableLoading = true, Se(o).then((d) => {
      a.tableLoading = false, a.dialogAuthorizerInfo = true;
      const c = d.data.authorizationInfo.funcInfo;
      c.forEach(function(A, le) {
        c[le] = A + "";
      }), a.authorizerList = c;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function V() {
    const o = G() || M.tenantId, d = M.shopId || "-1", c = "view/wxopen/auth.html?authType=1&tenantId=" + o + "&shopId=" + d + "&host=" + a.host;
    window.location.href = c;
  }
  function P(o) {
    e.$alert('<textarea rows="3" style="width: 100%">' + a.host + "weixin/portal/" + o.id + "</textarea>", e.$t("wxmp.wxapp.accessAddress"), { dangerouslyUseHTMLString: true });
  }
  function q(o) {
    e.$confirm(e.$t("wxmp.wxapp.confirmApiReset"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      a.tableLoading = true, Ce({ id: o }).then((d) => {
        a.tableLoading = false, d.code == "0" && e.$message({ showClose: true, message: e.$t("wxmp.wxapp.apiResetSuccess"), type: "success" });
      }).catch(() => {
        a.tableLoading = false;
      });
    });
  }
  function u(o) {
    e.$prompt(e.$t("wxmp.wxapp.enterSceneValue"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel") }).then(({ value: d }) => {
      _e({ id: o, sceneStr: d }).then((c) => {
        a.scene = d, a.qrCodeSceneDialog = true, a.qrCodeScene = c.data;
      });
    });
  }
  function U(o) {
    a.tableLoading = true, Me({ id: o, sceneStr: "1" }).then(() => {
      a.tableLoading = false, k(a.page);
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function C(o, d) {
    o = we(o), a.paramsSearch = o, a.page.currentPage = 1, k(a.page, o), d();
  }
  function W(o) {
    const d = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (a.page.descs = "", a.page.ascs = d) : o.order == "descending" ? (a.page.ascs = "", a.page.descs = d) : (a.page.ascs = "", a.page.descs = ""), k(a.page);
  }
  function k(o, d) {
    a.tableLoading = true, ee(Object.assign({ current: o.currentPage, size: o.pageSize, descs: a.page.descs, ascs: a.page.ascs, appType: "2" }, d, a.paramsSearch)).then((c) => {
      a.tableData = c.data.records, a.page.total = c.data.total, a.page.currentPage = o.currentPage, a.page.pageSize = o.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function B(o, d) {
    window.openType = d, o();
  }
  function F(o) {
    e.$confirm(e.$t("wxmp.wxapp.confirmDelete") + o.name + "\u3011", e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return ve(o.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), k(a.page);
    });
  }
  function R(o, d, c, A) {
    o.id = o.id.trim(), o.secret && (o.secret = o.secret.trim()), $e(o).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), c(), k(a.page);
    }).catch(() => {
      A();
    });
  }
  function N(o, d) {
    o.id = o.id.trim(), o.secret = o.secret.trim(), ke(Object.assign(o, { isComponent: "0", appType: "2" })).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), d(), k(a.page);
    }).catch(() => {
      d();
    });
  }
  function S() {
    k(a.page);
  }
  function T(o) {
    a.tableLoading = true, ye({ id: o }).then((d) => {
      a.tableLoading = false;
      const c = '<textarea rows="5" style="width: 100%">' + d.data + "</textarea>";
      e.$alert(c, "AccessToken", { dangerouslyUseHTMLString: true });
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function D(o) {
    a.tableLoading = true, he({ id: o }).then((d) => {
      a.tableLoading = false;
      const c = '<textarea rows="5" style="width: 100%">' + d.data + "</textarea>";
      e.$alert(c, "JsapiTicket", { dangerouslyUseHTMLString: true });
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function j(o) {
    a.wxMaLinkDialog = true, a.wxMalinkOpenAppId = o, I();
  }
  function I() {
    a.wxMalinks = [], a.wxMalinkLoading = true, be(a.wxMalinkOpenAppId).then((o) => {
      a.wxMalinkLoading = false, a.wxMalinks = o.data.items;
    }).catch(() => {
      a.wxMalinkLoading = false;
    });
  }
  function l(o) {
    e.$confirm(e.$t("wxmp.wxapp.confirmUnlink"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      a.wxMalinkLoading = true, xe(a.wxMalinkOpenAppId, { appid: o }).then(() => {
        e.$confirm(e.$t("wxmp.wxapp.unlinkRequestSent"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }), a.wxMalinkLoading = false, I();
      }).catch(() => {
        a.wxMalinkLoading = false;
      });
    }).catch(function() {
    });
  }
  function $() {
    a.wxMalinkAddDialog = true, Q();
  }
  function Q() {
    a.wxMalinkAddLoading = true, ee({ current: 1, size: 100, descs: "", ascs: "", appType: "1" }).then((o) => {
      a.tableDataMa = o.data.records, a.wxMalinkAddLoading = false;
    }).catch(() => {
      a.wxMalinkAddLoading = false;
    });
  }
  const K = H(null);
  function te() {
    K.value.validate((o) => {
      if (o) a.wxMalinkAddLoading = true, ge(a.wxMalinkOpenAppId, a.formWxMalink2).then(() => {
        e.$confirm(e.$t("wxmp.wxapp.associationRequestSent"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }), a.wxMalinkAddLoading = false, a.wxMalinkAddDialog = false, I();
      }).catch(() => {
        a.wxMalinkAddLoading = false;
      });
      else return false;
    });
  }
  function ne(o) {
    window.localStorage.removeItem("divPageId");
    const d = G() || M.tenantId;
    window.localStorage.removeItem("divPageId_" + d + M.username), Ie(Object.assign({ current: 0, size: 10, descs: "", ascs: "", pageType: "1", appId: o.id }, {}, {})).then((c) => {
      const A = c.data.records;
      A.length > 0 ? E().updateDataObj({ fixed: true, appId: o.id, clientType: J.H5WX, pageId: A[0].id }) : E().updateDataObj({ fixed: true, appId: o.id, clientType: J.H5WX, pageId: null }), p.push({ name: e.$t("wxmp.wxapp.mallPageDecoration") });
    }).catch(() => {
      E().updateDataObj({ fixed: true, appId: o.id, clientType: J.H5WX, pageId: null }), p.push({ name: e.$t("wxmp.wxapp.mallPageDecoration") });
    });
  }
  return { ...me(a), permissions: f, permissionList: _, crudRef: O, nodeClick: m, handleOrgan: L, getAuthorizerInfoF: h, toAuth: V, toAccess: P, clearQuotaF: q, getQrCodeF: u, createQrCodeF: U, searchChange: C, sortChange: W, getPageF: k, beforeOpen: B, handleDel: F, handleUpdate: R, handleSave: N, refreshChange: S, getAccessTokenF: T, getJsapiTicketF: D, wxMaLink: j, getWxMalinkF: I, wxMaUnlinkF: l, wxMaUnlinkView: $, getPageMa: Q, wxMalinkAddF: te, onDivPageHome: ne, formWxMalink2Ref: K, formName: v };
} }, Oe = { class: "text-left pl-[20px]" }, Ve = { key: 0 };
function qe(e, a, v, p, M, O) {
  const f = w("el-button"), _ = w("vue-qr"), m = w("el-col"), L = w("el-image"), h = w("el-row"), V = w("el-link"), P = w("el-tag"), q = w("avue-crud"), u = w("el-checkbox"), U = w("el-checkbox-group"), C = w("el-dialog"), W = w("el-alert"), k = w("el-avatar"), B = w("el-text"), F = w("el-card"), R = w("el-option"), N = w("el-select"), S = w("el-form-item"), T = w("el-radio"), D = w("el-radio-group"), j = w("el-form"), I = ce;
  return g(), z("div", null, [n(I, null, { default: t(() => [n(h, { span: 24 }, { default: t(() => [n(m, { xs: 24, sm: 24, md: 24 }, { default: t(() => [n(q, { ref: "crudRef", modelValue: e.form, "onUpdate:modelValue": a[0] || (a[0] = (l) => e.form = l), page: e.page, "onUpdate:page": a[1] || (a[1] = (l) => e.page = l), data: e.tableData, "table-loading": e.tableLoading, option: e.tableOption, permission: p.permissionList, "before-open": p.beforeOpen, onOnLoad: p.getPageF, onRefreshChange: p.refreshChange, onRowUpdate: p.handleUpdate, onRowSave: p.handleSave, onRowDel: p.handleDel, onSortChange: p.sortChange, onSearchChange: p.searchChange }, { "menu-left": t(() => [p.permissions["wxmp:wxapp:add"] ? (g(), b(f, { key: 0, type: "primary", size: "small", plain: "", onClick: p.toAuth }, { default: t(() => [s(i(e.$t("wxmp.wxapp.oneClickAuthorization")), 1)]), _: 1 }, 8, ["onClick"])) : y("", true)]), menu: t((l) => [n(f, { type: "primary", link: "", class: "mag_left", onClick: ($) => p.getAccessTokenF(l.row.id) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.viewAccessToken")), 1)]), _: 1 }, 8, ["onClick"]), n(f, { type: "primary", link: "", class: "mag_left", onClick: ($) => p.getJsapiTicketF(l.row.id) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.viewJsapiTicket")), 1)]), _: 1 }, 8, ["onClick"]), n(f, { type: "primary", link: "", class: "mag_left", onClick: ($) => p.clearQuotaF(l.row.id) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.apiReset")), 1)]), _: 1 }, 8, ["onClick"]), n(f, { type: "primary", link: "", class: "mag_left", onClick: ($) => p.getQrCodeF(l.row.id) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.sceneQRCode")), 1)]), _: 1 }, 8, ["onClick"])]), name: t((l) => [x("div", null, [n(h, { span: 24, gutter: 10 }, { default: t(() => [l.row.isComponent == "0" ? (g(), b(m, { key: 0, span: 12, style: { "text-align": "center" } }, { default: t(() => [l.row.qrCode ? (g(), b(_, { key: 0, text: l.row.qrCode, size: 128, dotScale: 1 }, null, 8, ["text"])) : y("", true), a[12] || (a[12] = x("br", null, null, -1)), l.row.qrCode ? y("", true) : (g(), b(f, { key: 1, type: "success", size: "small", onClick: ($) => p.createQrCodeF(l.row.id) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.generateQRCode")), 1)]), _: 1 }, 8, ["onClick"])), p.permissions["wxmp:wxapp:edit"] && l.row.isComponent == "0" ? (g(), b(f, { key: 2, type: "warning", size: "small", onClick: ($) => p.toAccess(l.row) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.accessSystem")), 1)]), _: 1 }, 8, ["onClick"])) : y("", true)]), _: 2 }, 1024)) : y("", true), l.row.isComponent == "1" ? (g(), b(m, { key: 1, span: 12, style: { "text-align": "center" } }, { default: t(() => [n(L, { style: { width: "128px", height: "128px" }, src: l.row.qrCode }, null, 8, ["src"]), a[13] || (a[13] = x("p", null, null, -1)), p.permissions["wxmp:wxapp:add"] ? (g(), b(f, { key: 0, type: "warning", size: "small", onClick: p.toAuth }, { default: t(() => [s(i(e.$t("wxmp.wxapp.reauthorize")), 1)]), _: 1 }, 8, ["onClick"])) : y("", true), n(f, { type: "success", size: "small", onClick: ($) => p.getAuthorizerInfoF(l.row.id) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.authorizationInfo")), 1)]), _: 1 }, 8, ["onClick"]), n(f, { type: "primary", size: "small", onClick: ($) => p.wxMaLink(l.row.id) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.linkMiniProgram")), 1)]), _: 1 }, 8, ["onClick"])]), _: 2 }, 1024)) : y("", true), n(m, { span: 12 }, { default: t(() => [x("div", Oe, [x("div", null, i(e.$t("wxmp.wxapp.name")) + "\uFF1A" + i(l.row.name), 1), x("div", null, "AppID\uFF1A" + i(l.row.id), 1), x("div", null, i(e.$t("wxmp.wxapp.originalID")) + i(l.row.weixinSign), 1), x("div", null, i(e.$t("wxmp.wxapp.introduction")) + i(l.row.signature), 1), x("div", null, i(e.$t("wxmp.wxapp.principal")) + i(l.row.principalName), 1), x("div", null, i(e.$t("wxma.wxapp.additionTime")) + "\uFF1A" + i(l.row.createTime), 1)])]), _: 2 }, 1024)]), _: 2 }, 1024)])]), verifyType: t((l) => [x("div", null, [l.row.verifyType == "-1" ? (g(), z("div", Ve, [n(V, { type: "danger", effect: "dark", size: "small", target: "_blank", href: "https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN" }, { default: t(() => [s(i(l.row.$verifyType), 1)]), _: 2 }, 1024)])) : y("", true), l.row.verifyType == "0" || l.row.verifyType == "1" || l.row.verifyType == "2" ? (g(), b(P, { key: 1, type: "success", effect: "dark", size: "small" }, { default: t(() => [s(i(l.row.$verifyType), 1)]), _: 2 }, 1024)) : y("", true), l.row.verifyType == "3" || l.row.verifyType == "4" || l.row.verifyType == "5" ? (g(), b(P, { key: 2, type: "warning", effect: "dark", size: "small" }, { default: t(() => [s(i(l.row.$verifyType), 1)]), _: 2 }, 1024)) : y("", true)])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "permission", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 }), n(C, { modelValue: e.dialogAuthorizerInfo, "onUpdate:modelValue": a[3] || (a[3] = (l) => e.dialogAuthorizerInfo = l), title: e.$t("wxmp.wxapp.viewPermissionSet"), width: "30%" }, { default: t(() => [x("div", null, [n(U, { modelValue: e.authorizerList, "onUpdate:modelValue": a[2] || (a[2] = (l) => e.authorizerList = l) }, { default: t(() => [n(u, { label: "1", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.messageManagementPermission")), 1)]), _: 1 }), n(u, { label: "2", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.userManagerPermission")), 1)]), _: 1 }), n(u, { label: "3", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.accountServicePermission")), 1)]), _: 1 }), n(u, { label: "4", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.webServicePermission")), 1)]), _: 1 }), n(u, { label: "5", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.weShopPermission")), 1)]), _: 1 }), n(u, { label: "6", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.multiCustomerServicePermission")), 1)]), _: 1 }), n(u, { label: "7", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.massNotificationPermission")), 1)]), _: 1 }), n(u, { label: "8", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.wechatCardCouponPermission")), 1)]), _: 1 }), n(u, { label: "9", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.wechatScanPermission")), 1)]), _: 1 }), n(u, { label: "10", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.wechatWIFIPermission")), 1)]), _: 1 }), n(u, { label: "11", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.materialManagementPermission")), 1)]), _: 1 }), n(u, { label: "12", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.wechatShakeNearbyPermission")), 1)]), _: 1 }), n(u, { label: "13", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.wechatStorePermission")), 1)]), _: 1 }), n(u, { label: "15", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.customMenuPermission")), 1)]), _: 1 }), n(u, { label: "22", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.cityServiceInterfacePermission")), 1)]), _: 1 }), n(u, { label: "26", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.wechatElectronicInvoicePermission")), 1)]), _: 1 }), n(u, { label: "24", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.wechatOpenPlatformAccountManagementPermission")), 1)]), _: 1 }), n(u, { label: "17", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.accountManagementPermission")), 1)]), _: 1 }), n(u, { label: "18", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.developmentManagementAndDataAnalysisPermission")), 1)]), _: 1 }), n(u, { label: "19", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.customerServiceMessageManagementPermission")), 1)]), _: 1 }), n(u, { label: "24", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.wechatOpenPlatformAccountManagementPermission")), 1)]), _: 1 }), n(u, { label: "30", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.miniProgramBasicInfoSettingPermission")), 1)]), _: 1 }), n(u, { label: "37", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.miniProgramNearbyLocationPermissionSet")), 1)]), _: 1 }), n(u, { label: "40", disabled: "" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.miniProgramPluginManagementPermissionSet")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])])]), _: 1 }, 8, ["modelValue", "title"]), n(C, { modelValue: e.qrCodeSceneDialog, "onUpdate:modelValue": a[4] || (a[4] = (l) => e.qrCodeSceneDialog = l), title: e.$t("wxmp.wxapp.sceneValue") + e.scene, center: "", width: "50%" }, { default: t(() => [x("div", null, [e.qrCodeScene ? (g(), b(h, { key: 0 }, { default: t(() => [n(m, { span: 8 }, { default: t(() => [n(_, { text: e.qrCodeScene, size: 160, dotScale: 1 }, null, 8, ["text"]), a[14] || (a[14] = x("p", null, "160x160", -1))]), _: 1 }), n(m, { span: 8 }, { default: t(() => [n(_, { text: e.qrCodeScene, size: 200, dotScale: 1 }, null, 8, ["text"]), a[15] || (a[15] = x("p", null, "200x200", -1))]), _: 1 }), n(m, { span: 8 }, { default: t(() => [n(_, { text: e.qrCodeScene, size: 320, dotScale: 1 }, null, 8, ["text"]), a[16] || (a[16] = x("p", null, "320x320", -1))]), _: 1 })]), _: 1 })) : y("", true)])]), _: 1 }, 8, ["modelValue", "title"]), n(C, { modelValue: e.wxMaLinkDialog, "onUpdate:modelValue": a[6] || (a[6] = (l) => e.wxMaLinkDialog = l), title: e.$t("wxmp.wxapp.mpLinkManagement"), center: "", width: "50%" }, { default: t(() => [n(h, null, { default: t(() => [n(m, { span: 20 }, { default: t(() => [n(W, { closable: false, title: e.$t("wxmp.wxapp.associationDetails"), type: "info" }, null, 8, ["title"])]), _: 1 }), n(m, { span: 4, style: { "text-align": "center" }, class: "flex items-center justify-center" }, { default: t(() => [n(f, { type: "success", size: "small", onClick: a[5] || (a[5] = (l) => p.wxMaUnlinkView()) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.add")), 1)]), _: 1 })]), _: 1 })]), _: 1 }), a[18] || (a[18] = x("br", null, null, -1)), (g(true), z(Z, null, Y(e.wxMalinks, (l, $) => (g(), b(F, { key: $, shadow: "never" }, { default: t(() => [n(h, { class: "border-solid border-[1px] border-gray-200 m-1 p-1 rounded-sm" }, { default: t(() => [n(m, { span: 4, style: { "text-align": "center" }, class: "flex items-center justify-center" }, { default: t(() => [n(k, { src: l.headimg_url }, null, 8, ["src"])]), _: 2 }, 1024), n(m, { span: 20 }, { default: t(() => [n(h, null, { default: t(() => [n(m, { span: 3, class: "meta_key" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.miniProgram")), 1)]), _: 1 }), n(m, { span: 21 }, { default: t(() => [s(i(l.nickname), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), n(h, null, { default: t(() => [n(m, { span: 3, class: "meta_key" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.originalID")), 1)]), _: 1 }), n(m, { span: 21 }, { default: t(() => [s(i(l.username), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), n(h, null, { default: t(() => [n(m, { span: 3, class: "meta_key" }, { default: t(() => [...a[17] || (a[17] = [s("APPID\uFF1A", -1)])]), _: 1 }), n(m, { span: 21 }, { default: t(() => [s(i(l.appid), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), n(h, null, { default: t(() => [n(m, { span: 3, class: "meta_key" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.status")), 1)]), _: 1 }), n(m, { span: 21 }, { default: t(() => [s(i(l.status == 1 ? e.$t("wxmp.wxapp.associated") : l.status == 2 ? e.$t("wxmp.wxapp.waitingForMpAdmin") : l.status == 3 ? e.$t("wxmp.wxapp.mpAdminRefused") : l.status == 12 ? e.$t("wxmp.wxapp.waitingForOfficialAccountAdmin") : "") + " ", 1), l.status == 1 ? (g(), b(B, { key: 0, type: "danger", class: "cursor-pointer", size: "small", onClick: (Q) => p.wxMaUnlinkF(l.appid) }, { default: t(() => [s(i(e.$t("wxmp.wxapp.unlink")), 1)]), _: 1 }, 8, ["onClick"])) : y("", true)]), _: 2 }, 1024)]), _: 2 }, 1024), n(h, null, { default: t(() => [n(m, { span: 3, class: "meta_key" }, { default: t(() => [s(i(l.func_infos[0].name) + "\uFF1A", 1)]), _: 2 }, 1024), n(m, { span: 21 }, { default: t(() => [s(i(l.func_infos[0].status == 0 ? e.$t("wxmp.wxapp.notOpened") : l.func_infos[0].status == 1 ? e.$t("wxmp.wxapp.opened") : ""), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), n(h, null, { default: t(() => [n(m, { span: 3, class: "meta_key" }, { default: t(() => [s(i(l.func_infos[1].name) + "\uFF1A", 1)]), _: 2 }, 1024), n(m, { span: 21 }, { default: t(() => [s(i(l.func_infos[1].status == 0 ? e.$t("wxmp.wxapp.notOpened") : l.func_infos[1].status == 1 ? e.$t("wxmp.wxapp.opened") : ""), 1)]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128))]), _: 1 }, 8, ["modelValue", "title"]), n(C, { modelValue: e.wxMalinkAddDialog, "onUpdate:modelValue": a[11] || (a[11] = (l) => e.wxMalinkAddDialog = l), title: e.$t("wxmp.wxapp.addMiniProgram"), center: "", width: "40%" }, { default: t(() => [e.wxMalinkAddDialog ? (g(), b(j, { key: 0, ref: "formWxMalink2Ref", model: e.formWxMalink2, rules: e.rulesWxMalink, "label-width": "250px" }, { default: t(() => [n(S, { label: e.$t("wxmp.wxapp.miniProgramAppId"), prop: "appid" }, { default: t(() => [n(N, { modelValue: e.formWxMalink2.appid, "onUpdate:modelValue": a[7] || (a[7] = (l) => e.formWxMalink2.appid = l), filterable: "", placeholder: e.$t("commons.select") }, { default: t(() => [(g(true), z(Z, null, Y(e.tableDataMa, (l) => (g(), b(R, { key: l.id, label: l.name, value: l.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), n(S, { label: e.$t("wxmp.wxapp.sendTemplateMessage"), prop: "notify_users" }, { default: t(() => [n(D, { modelValue: e.formWxMalink2.notify_users, "onUpdate:modelValue": a[8] || (a[8] = (l) => e.formWxMalink2.notify_users = l) }, { default: t(() => [n(T, { value: "1" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.yes")), 1)]), _: 1 }), n(T, { value: "0" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.no")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), n(S, { label: e.$t("wxmp.wxapp.showOnOfficialHomePage"), prop: "show_profile" }, { default: t(() => [n(D, { modelValue: e.formWxMalink2.show_profile, "onUpdate:modelValue": a[9] || (a[9] = (l) => e.formWxMalink2.show_profile = l) }, { default: t(() => [n(T, { value: "1" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.yes")), 1)]), _: 1 }), n(T, { value: "0" }, { default: t(() => [s(i(e.$t("wxmp.wxapp.no")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), n(S, { size: "large" }, { default: t(() => [n(f, { type: "primary", onClick: a[10] || (a[10] = (l) => p.wxMalinkAddF()) }, { default: t(() => [s(i(e.$t("commons.submit")), 1)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model", "rules"])) : y("", true)]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const Qe = fe(ze, [["render", qe], ["__scopeId", "data-v-c5352c0a"]]);
export {
  Qe as default
};
