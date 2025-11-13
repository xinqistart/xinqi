import { n as te, b0 as G, A as oe, R as ie, be as ne, p as J, I as le, U as se, $ as H, t as re, K as pe, q as de, S as me, b1 as ue, _ as fe, r as u, c as T, o as c, b as i, h as t, g as P, B as y, e as w, f as s, z as n, F as ge, v as ce, a_ as we } from "./index-DAdfXJ2i.js";
import { C as Z, D as he, E as xe, F as be, G as ye, H as Ie, I as Pe, J as _e, K as ke } from "./wxapp-DzjQ_kFh.js";
import { b as $e, a as ve } from "./wxapp-BACewdCT.js";
import { f as Re } from "./organ-Uz8t_88q.js";
import Ce from "./index-B882UJYP.js";
import Se from "./basicinfo-BdyEMjiW.js";
import { g as Ae } from "./pagedevise-C4VLpPB5.js";
import { u as Q } from "./pageDevise-DcQ8796K.js";
import { c as K } from "./clientType-BhCLU4J5.js";
import "./404-CYs5n2Yq.js";
import "./setting-BJtEEskD.js";
import "./index-0HWMArnC.js";
import "./index-D9J23VQK.js";
import "./index-Bshxa3s9.js";
import "./index-CVy61yge.js";
import "./vue-qr-Ee6k57BN.js";
import "./codeaudit-BlbhtHAj.js";
import "./serveraddress-DLdZ5ZRL.js";
import "./liveinfo-BP8Miqr_.js";
import "./userprivacysetting-CmR3ueaN.js";
import "./summary-CRtAAVvZ.js";
import "./index-BMoo9HBP.js";
const { $t: p } = te(), Me = (e, a, h) => {
  window.openType === "edit" ? h() : Z({ id: a }).then((r) => {
    r.data.length > 0 ? h(new Error(p("wxma.wxapp.duplicateAppId"))) : h();
  });
}, Fe = (e, a, h) => {
  window.openType === "edit" ? h() : Z({ weixinSign: a }).then((r) => {
    r.data.length > 0 ? h(new Error(p("wxma.wxapp.duplicateWeixinSign"))) : h();
  });
}, Te = { dialogType: "drawer", dialogWidth: "80%", menuAlign: "center", align: "center", menuWidth: 200, menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, defaultExpandAll: true, searchMenuSpan: 6, labelWidth: 140, searchGutter: 50, searchLabelPosition: "left", labelPosition: "left", column: [{ label: p("wxma.wxapp.name"), prop: "name", align: "left", search: true, slot: true, display: false, minWidth: 200, rules: [{ required: true, message: p("wxma.wxapp.name") + p("commons.notNull"), trigger: "blur" }] }, { label: p("wxma.wxapp.weixinSign"), prop: "weixinSign", searchLabelWidth: 110, search: true, hide: true, display: false }, { label: p("wxma.wxapp.id"), prop: "id", search: true, hide: true, display: false }, { label: p("wxma.wxapp.shopId"), prop: "shopId", type: "select", search: true, filterable: true, display: false, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", dicFormatter: (e) => (e || (e = []), e.unshift({ id: "-1", name: p("wxma.wxapp.mall") }), e) }], group: [{ icon: "el-icon-s-order", label: p("commons.baseInfo"), prop: "group1", column: [{ label: p("wxma.wxapp.miniProgramCode"), prop: "qrCode", type: "upload", listType: "picture-img", span: 23, offset: 1, fileType: "img", action: "/upms/file/upload?fileType=image&dir=wx/", accept: "image/png, image/jpeg", fileSize: G.limitUploadImageSize * 1e3, labelTip: p("mall.material.uplaodFileSizeTip", { size: G.limitUploadImageSize }), limit: 1, propsHttp: { res: "link" }, loadText: p("wxma.wxapp.uploadingImage") }, { label: p("wxma.wxapp.miniProgramName"), prop: "name", offset: 1, span: 12, align: "left", rules: [{ required: true, message: p("wxma.wxapp.enterMiniProgramName"), trigger: "blur" }] }, { label: p("wxma.wxapp.weixinOriginalId"), prop: "weixinSign", editDisabled: true, span: 11, rules: [{ required: true, message: p("wxma.wxapp.enterWeixinOriginalId"), trigger: "blur" }, { validator: Fe, trigger: "blur" }], labelTip: p("wxma.wxapp.weixinOriginalIdDetails") }, { label: "AppID", prop: "id", offset: 1, span: 12, editDisabled: true, rules: [{ required: true, message: p("wxma.wxapp.enterAppId"), trigger: "blur" }, { validator: Me, trigger: "blur" }], labelTip: p("wxma.wxapp.appIdDetails") }, { label: "AppSecret", prop: "secret", type: "password", span: 11, labelTip: p("wxma.wxapp.appSecretDetails") }, { label: p("wxma.wxapp.introduction"), offset: 1, span: 12, prop: "signature" }, { label: p("wxma.wxapp.principalName"), span: 11, prop: "principalName" }, { label: p("wxma.wxapp.noteInformation"), offset: 1, span: 12, prop: "remarks" }, { label: p("wxma.wxapp.sort"), offset: 1, span: 12, prop: "sort" }, { label: p("wxma.wxapp.shopId"), prop: "shopId", type: "select", search: true, offset: 1, span: 12, filterable: true, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", dicFormatter: (e) => (e || (e = []), e.unshift({ id: "-1", name: p("wxma.wxapp.mall") }), e) }] }] }, Le = { components: { fasRegist: Ce, baseInfo: Se }, setup() {
  var _a, _b;
  const { proxy: e } = oe(), a = ie({ headers: { Authorization: "Bearer " + ne().access_token }, treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, form: { id: "", shopId: "-1", keyPath: "" }, authorizerList: [], dialogAuthorizerInfo: false, host: window.location.href.split("#")[0], tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "sort", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: Te, treeOrganData: [], openWxApp: null, dialogFastRegist: false, dialogBasicInfo: false, dialogFastRegistMp: false, wxMpAppData: [], fastRegistMpFormLoading: false, fastRegistMpForm: { wxAppId: "" }, fastRegistMpFormRules: { wxAppId: [{ required: true, message: e.$t("wxma.wxfastregist.pleaseSelectOfficialAccount"), trigger: "change" }] } }), h = J(), r = le(), x = (_a = se()) == null ? void 0 : _a.userInfo;
  (() => {
    if (x.type == "-1") {
      const o = H();
      o && (a.headers["switch-tenant-id"] = o);
    }
  })();
  const L = J();
  re(() => {
    R(), _(), x.type == "2" && (a.form.shopId = x.shopId, L.value.tableOption.group[0].column.forEach((o) => {
      o.prop == "shopId" && (o.display = false);
    }));
  });
  const f = (_b = pe()) == null ? void 0 : _b.permissions, C = de(() => ({ addBtn: !!f["wxma:wxapp:add"], delBtn: !!f["wxma:wxapp:del"], editBtn: !!f["wxma:wxapp:edit"], viewBtn: !!f["wxma:wxapp:get"] }));
  function k() {
    a.form.keyPath = "";
  }
  function S(o) {
    a.form.keyPath = o.link;
  }
  function A(o) {
    a.page.currentPage = 1, b(a.page, { organId: o.id });
  }
  function R() {
    Re().then((o) => {
      a.treeOrganData = o.data;
    });
  }
  function z(o) {
    a.tableLoading = true, ke(o).then((m) => {
      a.tableLoading = false, a.dialogAuthorizerInfo = true;
      const g = m.data.authorizationInfo.funcInfo;
      g.forEach(function(I, E) {
        g[E] = I + "";
      }), a.authorizerList = g;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function D() {
    const o = H() || x.tenantId, m = x.shopId || "-1", g = "view/wxopen/auth.html?authType=2&tenantId=" + o + "&shopId=" + m + "&host=" + a.host;
    window.location.href = g;
  }
  function M(o) {
    e.$alert('<textarea rows="3" style="width: 100%">' + a.host + "wxma/portal/" + o.id + "</textarea>", e.$t("wxma.wxapp.accessAddress"), { dangerouslyUseHTMLString: true });
  }
  function $(o) {
    e.$confirm(e.$t("wxma.wxapp.confirmApiReset"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      a.tableLoading = true, _e({ id: o }).then((m) => {
        a.tableLoading = false, m.code == "0" && e.$message({ showClose: true, message: e.$t("wxma.wxapp.apiResetSuccess"), type: "success" });
      }).catch(() => {
        a.tableLoading = false;
      });
    });
  }
  function F(o) {
    a.tableLoading = true, Pe({ id: o, sceneStr: "1" }).then(() => {
      a.tableLoading = false, b(a.page);
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function O(o, m) {
    o = ue(o), a.paramsSearch = o, a.page.currentPage = 1, b(a.page, o), m();
  }
  function d(o) {
    const m = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (a.page.descs = "", a.page.ascs = m) : o.order == "descending" ? (a.page.ascs = "", a.page.descs = m) : (a.page.ascs = "", a.page.descs = ""), b(a.page);
  }
  function b(o, m) {
    a.tableLoading = true, Ie(Object.assign({ current: a.page.currentPage, size: a.page.pageSize, descs: a.page.descs, ascs: a.page.ascs, appType: "1" }, m, a.paramsSearch)).then((g) => {
      a.tableData = g.data.records, a.page.total = g.data.total, a.page.currentPage = o.currentPage, a.page.pageSize = o.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function v(o, m) {
    x.type == "2", window.openType = m, o();
  }
  function V(o) {
    e.$confirm(e.$t("wxma.wxapp.confirmDelete") + o.name + "\u3011", e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return ye(o.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), b(a.page);
    });
  }
  function B(o, m, g, I) {
    o.id = o.id.trim(), o.secret && (o.secret = o.secret.trim()), be(o).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), g(), b(a.page);
    }).catch(() => {
      I();
    });
  }
  function U(o, m, g) {
    o.id = o.id.trim(), o.secret = o.secret.trim(), xe(Object.assign(o, { isComponent: "0", appType: "1" })).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), m(), b(a.page);
    }).catch(() => {
      g();
    });
  }
  function q() {
    b(a.page);
  }
  function N(o) {
    a.tableLoading = true, he({ id: o }).then((m) => {
      a.tableLoading = false, e.$alert('<textarea rows="5" style="width: 100%">' + m.data + "</textarea>", "AccessToken", { dangerouslyUseHTMLString: true });
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function W(o) {
    a.openWxApp = o, a.dialogBasicInfo = true;
  }
  function j() {
    a.dialogFastRegist = true;
  }
  function l(o) {
    window.localStorage.removeItem("divPageId");
    const m = H() || x.tenantId;
    window.localStorage.removeItem("divPageId_" + m + x.username), Ae(Object.assign({ current: 0, size: 10, descs: "", ascs: "", pageType: "1", appId: o.id }, {}, {})).then((g) => {
      const I = g.data.records;
      I.length > 0 ? Q().updateDataObj({ fixed: true, appId: o.id, clientType: K.MA, pageId: I[0].id }) : Q().updateDataObj({ fixed: true, appId: o.id, clientType: K.MA, pageId: null }), r.push({ name: e.$t("wxma.wxapp.mallPageDecoration") });
    }).catch(() => {
      Q().updateDataObj({ fixed: true, appId: o.id, clientType: K.MA, pageId: null }), r.push({ name: e.$t("wxma.wxapp.mallPageDecoration") });
    });
  }
  function _() {
    $e({ appType: "2", isComponent: "1" }).then((o) => {
      a.wxMpAppData = o.data;
    });
  }
  function X() {
    a.dialogFastRegistMp = true;
  }
  function Y() {
    h.value.validate(async (o) => {
      if (o) {
        let m = await ve(a.fastRegistMpForm.wxAppId);
        if (!m) {
          e.$message({ showClose: true, message: e.$t("wxma.wxfastregist.officialAccountNotFound"), type: "error" });
          return;
        }
        a.fastRegistMpFormLoading = true;
        let g = m.data, I = g.id, E = g.componentAppId, ee = encodeURIComponent(window.location.href.split("#")[0] + "#/wxfastregistmp?mpAppId=" + I);
        const ae = "view/wxopen/authmp2ma.html?copy_wx_verify=1&appid=" + I + "&component_appid=" + E + "&redirect_uri=" + ee;
        window.location.href = ae, setTimeout(() => {
          a.fastRegistMpFormLoading = false;
        }, 3e3);
      }
    });
  }
  return { ...me(a), permissions: f, permissionList: C, crudRef: L, keyPathRemove: k, uploadCertSuccess: S, nodeClick: A, handleOrgan: R, getAuthorizerInfoF: z, toAuth: D, toAccess: M, clearQuotaF: $, createQrCodeF: F, searchChange: O, sortChange: d, getPageF: b, beforeOpen: v, handleDel: V, handleUpdate: B, handleSave: U, refreshChange: q, getAccessTokenF: N, getBasicInfoView: W, toFastRegist: j, fastRegistMpFormRef: h, toFastRegistMp: X, goFastRegistMp: Y, onDivPageHome: l };
} }, ze = { class: "flex items-center" }, De = { class: "flex items-center" }, Oe = { key: 0 }, Ve = { class: "el-upload__tip" }, Be = { key: 0 }, Ue = { class: "pt-2" }, qe = { class: "dialog-footer" };
function Ne(e, a, h, r, x, L) {
  const f = u("el-button"), C = u("Warning"), k = u("el-icon"), S = u("TopRight"), A = u("el-link"), R = u("el-popover"), z = u("el-tag"), D = u("el-upload"), M = u("el-image"), $ = u("el-col"), F = u("el-row"), O = u("avue-crud"), d = u("el-checkbox"), b = u("el-checkbox-group"), v = u("el-dialog"), V = u("fasRegist"), B = u("baseInfo"), U = u("el-option"), q = u("el-select"), N = u("el-form-item"), W = u("el-form"), j = we;
  return c(), T("div", null, [i(j, null, { default: t(() => [i(F, { span: 24 }, { default: t(() => [i($, { xs: 24, sm: 24, md: 24 }, { default: t(() => [i(O, { ref: "crudRef", modelValue: e.form, "onUpdate:modelValue": a[0] || (a[0] = (l) => e.form = l), page: e.page, "onUpdate:page": a[1] || (a[1] = (l) => e.page = l), option: e.tableOption, "onUpdate:option": a[2] || (a[2] = (l) => e.tableOption = l), data: e.tableData, "table-loading": e.tableLoading, permission: r.permissionList, "before-open": r.beforeOpen, onOnLoad: r.getPageF, onRefreshChange: r.refreshChange, onRowUpdate: r.handleUpdate, onRowSave: r.handleSave, onRowDel: r.handleDel, onSortChange: r.sortChange, onSearchChange: r.searchChange }, { "menu-left": t(() => [r.permissions["wxma:wxapp:add"] ? (c(), P(f, { key: 0, type: "primary", size: "small", onClick: r.toAuth }, { default: t(() => [s(n(e.$t("wxma.wxapp.oneClickAuthorization")), 1)]), _: 1 }, 8, ["onClick"])) : y("", true), r.permissions["wxma:wxapp:add"] ? (c(), P(f, { key: 1, type: "success", size: "small", onClick: r.toFastRegist }, { default: t(() => [s(n(e.$t("wxma.wxapp.quickRegisterMiniProgram")) + " ", 1), i(R, { title: e.$t("commons.tip"), width: 300, trigger: "hover" }, { reference: t(() => [i(k, null, { default: t(() => [i(C)]), _: 1 })]), default: t(() => [w("div", ze, [a[10] || (a[10] = s(" \u8C03\u7528\u5FAE\u4FE1\u63D0\u4F9B\u7684\u63A5\u53E3\u6CE8\u518C, ", -1)), i(A, { target: "_blank", type: "primary", href: "https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/Register_Mini_Programs/Fast_Registration_Interface_document.html" }, { default: t(() => [s(n(e.$t("pay.payconfig.officialDocs")), 1), i(k, null, { default: t(() => [i(S)]), _: 1 })]), _: 1 })])]), _: 1 }, 8, ["title"])]), _: 1 }, 8, ["onClick"])) : y("", true), r.permissions["wxma:wxapp:add"] ? (c(), P(f, { key: 2, type: "success", size: "small", onClick: r.toFastRegistMp }, { default: t(() => [s(n(e.$t("wxma.wxfastregist.reuseRegMP")) + " ", 1), i(R, { title: e.$t("commons.tip"), width: 300, trigger: "hover" }, { reference: t(() => [i(k, null, { default: t(() => [i(C)]), _: 1 })]), default: t(() => [w("div", De, [a[11] || (a[11] = s(" \u8C03\u7528\u5FAE\u4FE1\u63D0\u4F9B\u7684\u63A5\u53E3\u6CE8\u518C, ", -1)), i(A, { target: "_blank", type: "primary", href: "https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/product/Register_Mini_Programs/fast_registration_of_mini_program.html" }, { default: t(() => [s(n(e.$t("pay.payconfig.officialDocs")), 1), i(k, null, { default: t(() => [i(S)]), _: 1 })]), _: 1 })])]), _: 1 }, 8, ["title"])]), _: 1 }, 8, ["onClick"])) : y("", true)]), menu: t((l) => [i(f, { link: "", type: "primary", plain: "", class: "mag_left", onClick: (_) => r.getAccessTokenF(l.row.id) }, { default: t(() => [s(n(e.$t("wxma.wxapp.viewAccessToken")), 1)]), _: 1 }, 8, ["onClick"]), i(f, { link: "", type: "primary", plain: "", class: "mag_left", onClick: (_) => r.clearQuotaF(l.row.id) }, { default: t(() => [s(n(e.$t("wxma.wxapp.apiReset")), 1)]), _: 1 }, 8, ["onClick"])]), "keyPath-form": t((l) => [l.row.keyPath ? (c(), T("div", Oe, [i(z, { closable: "", onClose: r.keyPathRemove }, { default: t(() => [s(n(l.row.keyPath), 1)]), _: 2 }, 1032, ["onClose"])])) : y("", true), l.row.keyPath ? y("", true) : (c(), P(D, { key: 1, action: "/weixin/wxapp/cert/upload?appId=" + e.form.id, headers: e.headers, limit: 1, "on-success": r.uploadCertSuccess }, { tip: t(() => [w("div", Ve, n(e.$t("wxma.wxapp.uploadFileRequest")), 1)]), default: t(() => [i(f, { size: "small", type: "primary" }, { default: t(() => [s(n(e.$t("wxma.wxapp.clickToUpload")), 1)]), _: 1 })]), _: 1 }, 8, ["action", "headers", "on-success"]))]), name: t((l) => [i(F, { span: 24, gutter: 10 }, { default: t(() => [l.row.isComponent == "0" ? (c(), P($, { key: 0, span: 14, style: { "text-align": "center" } }, { default: t(() => [i(M, { style: { width: "160px", height: "160px" }, src: l.row.qrCode }, null, 8, ["src"]), a[12] || (a[12] = w("p", null, null, -1))]), _: 2 }, 1024)) : y("", true), l.row.isComponent == "1" ? (c(), P($, { key: 1, span: 14, style: { "text-align": "center" } }, { default: t(() => [i(M, { style: { width: "160px", height: "160px" }, src: l.row.qrCode }, null, 8, ["src"]), a[13] || (a[13] = w("p", null, null, -1)), r.permissions["wxma:wxapp:add"] && l.row.isComponent == "1" ? (c(), P(f, { key: 0, type: "warning", size: "small", onClick: r.toAuth }, { default: t(() => [s(n(e.$t("wxma.wxapp.reauthorize")), 1)]), _: 1 }, 8, ["onClick"])) : y("", true), i(f, { type: "primary", size: "small", onClick: (_) => r.getAuthorizerInfoF(l.row.id) }, { default: t(() => [s(n(e.$t("wxma.wxapp.authorizationInfo")), 1)]), _: 1 }, 8, ["onClick"]), r.permissions["wxma:wxapp:edit"] ? (c(), P(f, { key: 1, type: "success", size: "small", onClick: (_) => r.getBasicInfoView(l.row) }, { default: t(() => [s(n(e.$t("wxma.wxapp.miniProgramInfo")), 1)]), _: 1 }, 8, ["onClick"])) : y("", true)]), _: 2 }, 1024)) : y("", true), i($, { span: 10 }, { default: t(() => [w("div", null, n(e.$t("wxma.wxapp.miniProgramName")) + "\uFF1A" + n(l.row.name), 1), w("div", null, "AppID\uFF1A" + n(l.row.id), 1), w("div", null, n(e.$t("wxma.wxapp.weixinOriginalId")) + "\uFF1A" + n(l.row.weixinSign), 1), w("div", null, n(e.$t("wxma.wxapp.principal")) + n(l.row.principalName), 1), w("div", null, n(e.$t("wxma.wxapp.additionTime")) + "\uFF1A" + n(l.row.createTime), 1)]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 1 }, 8, ["modelValue", "page", "option", "data", "table-loading", "permission", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 }), i(v, { modelValue: e.dialogAuthorizerInfo, "onUpdate:modelValue": a[4] || (a[4] = (l) => e.dialogAuthorizerInfo = l), title: e.$t("wxma.wxapp.viewPermissionSet"), width: "30%" }, { default: t(() => [i(b, { modelValue: e.authorizerList, "onUpdate:modelValue": a[3] || (a[3] = (l) => e.authorizerList = l) }, { default: t(() => [i(d, { label: "1", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.messageManagementPermission")), 1)]), _: 1 }), i(d, { label: "2", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.userManagerPermission")), 1)]), _: 1 }), i(d, { label: "3", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.accountServicePermission")), 1)]), _: 1 }), i(d, { label: "4", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.webServicePermission")), 1)]), _: 1 }), i(d, { label: "5", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.weShopPermission")), 1)]), _: 1 }), i(d, { label: "6", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.multiCustomerServicePermission")), 1)]), _: 1 }), i(d, { label: "7", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.massNotificationPermission")), 1)]), _: 1 }), i(d, { label: "8", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.wechatCardCouponPermission")), 1)]), _: 1 }), i(d, { label: "9", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.wechatScanPermission")), 1)]), _: 1 }), i(d, { label: "10", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.wechatWIFIPermission")), 1)]), _: 1 }), i(d, { label: "11", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.materialManagementPermission")), 1)]), _: 1 }), i(d, { label: "12", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.wechatShakeNearbyPermission")), 1)]), _: 1 }), i(d, { label: "13", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.wechatStorePermission")), 1)]), _: 1 }), i(d, { label: "15", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.customMenuPermission")), 1)]), _: 1 }), i(d, { label: "22", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.cityServiceInterfacePermission")), 1)]), _: 1 }), i(d, { label: "26", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.wechatElectronicInvoicePermission")), 1)]), _: 1 }), i(d, { label: "24", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.wechatOpenPlatformAccountManagementPermission")), 1)]), _: 1 }), i(d, { label: "17", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.accountManagementPermission")), 1)]), _: 1 }), i(d, { label: "18", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.developmentManagementAndDataAnalysisPermission")), 1)]), _: 1 }), i(d, { label: "19", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.customerServiceMessageManagementPermission")), 1)]), _: 1 }), i(d, { label: "24", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.wechatOpenPlatformAccountManagementPermission")), 1)]), _: 1 }), i(d, { label: "30", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.miniProgramBasicInfoSettingPermission")), 1)]), _: 1 }), i(d, { label: "37", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.miniProgramNearbyLocationPermissionSet")), 1)]), _: 1 }), i(d, { label: "40", disabled: "" }, { default: t(() => [s(n(e.$t("wxma.wxapp.miniProgramPluginManagementPermissionSet")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["modelValue", "title"]), i(v, { modelValue: e.dialogFastRegist, "onUpdate:modelValue": a[5] || (a[5] = (l) => e.dialogFastRegist = l), title: e.$t("wxma.wxapp.quickRegisterMiniProgram"), width: "80%" }, { default: t(() => [i(V)]), _: 1 }, 8, ["modelValue", "title"]), i(v, { modelValue: e.dialogBasicInfo, "onUpdate:modelValue": a[6] || (a[6] = (l) => e.dialogBasicInfo = l), title: e.$t("wxma.wxapp.miniProgramBasicInformation"), width: "80%", top: "10px" }, { default: t(() => [e.dialogBasicInfo ? (c(), T("div", Be, [i(B, { wxApp: e.openWxApp }, null, 8, ["wxApp"])])) : y("", true)]), _: 1 }, 8, ["modelValue", "title"]), i(v, { modelValue: e.dialogFastRegistMp, "onUpdate:modelValue": a[9] || (a[9] = (l) => e.dialogFastRegistMp = l), title: e.$t("wxma.wxfastregist.reuseFastRegMP") }, { footer: t(() => [w("div", qe, [i(f, { onClick: a[8] || (a[8] = (l) => e.dialogFastRegistMp = false) }, { default: t(() => [s(n(e.$t("wxma.wxfastregist.cancel")), 1)]), _: 1 }), i(f, { type: "primary", loading: e.fastRegistMpFormLoading, onClick: r.goFastRegistMp }, { default: t(() => [s(n(e.$t("wxma.wxauthaudit.adminAuth")), 1)]), _: 1 }, 8, ["loading", "onClick"])])]), default: t(() => [i(W, { ref: "fastRegistMpFormRef", model: e.fastRegistMpForm, rules: e.fastRegistMpFormRules, "label-width": "auto", "status-icon": "" }, { default: t(() => [i(N, { label: e.$t("wxma.wxfastregist.officialAccount"), prop: "wxAppId" }, { default: t(() => [i(q, { modelValue: e.fastRegistMpForm.wxAppId, "onUpdate:modelValue": a[7] || (a[7] = (l) => e.fastRegistMpForm.wxAppId = l), placeholder: e.$t("wxma.wxfastregist.selectOfficialAccount") }, { default: t(() => [(c(true), T(ge, null, ce(e.wxMpAppData, (l, _) => (c(), P(U, { key: _, label: l.name, value: l.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), w("div", Ue, n(e.$t("wxma.wxfastregist.authReminder")), 1)]), _: 1 }, 8, ["model", "rules"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const ma = fe(Le, [["render", Ne], ["__scopeId", "data-v-19bf632d"]]);
export {
  ma as default
};
