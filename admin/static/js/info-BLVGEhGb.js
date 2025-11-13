import { A as K, R as X, aD as M, p as q, S as Z, _ as G, c as J, o as b, b as a, h as r, r as p, e as g, a$ as oe, f as w, z as y, b0 as W, q as Q, K as ne, U as D, b1 as E, b2 as ae, aO as te, b3 as le, b4 as re, g as C, B as F, a_ as se } from "./index-DAdfXJ2i.js";
import { u as H } from "./verifyCode-tnwrOe84.js";
import { f as ie } from "./organ-Uz8t_88q.js";
import { t as de, d as ue, g as pe } from "./log-BE2CIHJR.js";
import { t as me, d as ce, g as ge } from "./loglogin-DSKzCisN.js";
import { e as fe, b as he } from "./user-CcdA_mZX.js";
const be = { props: { type: { type: String }, phone: { type: String } }, setup(e, n) {
  const { isDisabled: o, text: l } = H(), { proxy: I } = K(), $ = X({ formData: { phone: "", code: "" }, formRules: { phone: [{ required: true, trigger: "blur", validator: (f, m, h) => {
    M(m)[0] ? h(new Error(M(M(m))[1])) : h();
  } }], code: [{ required: true, trigger: "blur", validator: (f, m, h) => {
    (m == null ? void 0 : m.length) != 4 ? h(new Error(I.$t("components.codephone.enter4DigitCode"))) : h();
  } }] } }), i = q();
  $.formData.phone = e.phone;
  async function u() {
    i.value.validate((f) => {
      f && n.emit("handleDone", $.formData, e.type);
    });
  }
  function v() {
    H().start(i.value, "phone", $.formData.phone);
  }
  return { ...Z($), handleDone: u, ruleFormRef: i, sendSmsVerifyCode: v, isDisabled: o, text: l };
} }, we = "/img/login/login-phone.png", ye = "/img/login/login-code.png", $e = { class: "code-phone" }, ve = { class: "w-full flex justify-between items-center" };
function Ce(e, n, o, l, I, $) {
  const i = p("el-input"), u = p("el-form-item"), v = p("el-button"), f = p("el-form");
  return b(), J("div", $e, [a(f, { rules: e.formRules, ref: "ruleFormRef", model: e.formData, "label-width": "0" }, { default: r(() => [a(u, { prop: "phone" }, { default: r(() => [a(i, { class: "input-phone", modelValue: e.formData.phone, "onUpdate:modelValue": n[0] || (n[0] = (m) => e.formData.phone = m), disabled: o.type == "3", placeholder: e.$t("components.codephone.enterPhoneNumber") }, { prefix: r(() => [...n[4] || (n[4] = [g("i", { class: "login-icon" }, [g("img", { class: "icon-login-icon", src: we })], -1)])]), _: 1 }, 8, ["modelValue", "disabled", "placeholder"])]), _: 1 }), a(u, { prop: "code" }, { default: r(() => [g("div", ve, [a(i, { modelValue: e.formData.code, "onUpdate:modelValue": n[1] || (n[1] = (m) => e.formData.code = m), onKeyup: oe(l.handleDone, ["enter"]), placeholder: e.$t("components.codephone.enterVerificationCode") }, { prefix: r(() => [...n[5] || (n[5] = [g("i", { class: "login-icon" }, [g("img", { class: "icon-login-icon", src: ye })], -1)])]), _: 1 }, 8, ["modelValue", "onKeyup", "placeholder"]), a(v, { disabled: l.isDisabled, class: "ml-2", onClick: n[2] || (n[2] = (m) => l.sendSmsVerifyCode()) }, { default: r(() => [w(y(l.text.length > 0 ? l.text + e.$t("login.info") : e.$t("login.getVerifyCode")), 1)]), _: 1 }, 8, ["disabled"])])]), _: 1 }), a(u, null, { default: r(() => [a(v, { type: "primary", class: "w-full", onClick: n[3] || (n[3] = (m) => l.handleDone()) }, { default: r(() => [w(y(o.type == "1" ? e.$t("components.codephone.login") : e.$t("commons.confirm")), 1)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["rules", "model"])]);
}
const Y = G(be, [["render", Ce], ["__scopeId", "data-v-21c36b30"]]), Fe = { name: "UserInfo", components: { CodePhone: Y }, setup() {
  const { proxy: e } = K(), n = (t, d, c) => {
    o.ruleForm.password && o.ruleForm.password !== "" ? d !== o.ruleForm.newpassword1 ? c(new Error(e.$t("upms.user.pwdNotMatch"))) : c() : c(new Error(e.$t("commons.notNull")));
  }, o = X({ tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, tableLoading: false, tableOption: de, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, tableLoading2: false, tableOption2: me, treeOrganData: [], organProps: { label: "name", value: "id" }, optionAvatar: { emptyBtn: false, submitBtn: false, labelWidth: 120, column: [{ prop: "avatar", type: "upload", listType: "picture-img", action: "/upms/file/upload?fileType=image&dir=user/", fileSize: W.limitUploadImageSize * 1e3, labelTip: e.$t("mall.material.uplaodFileSizeTip", { size: W.limitUploadImageSize }), propsHttp: { res: "link" }, loadText: e.$t("upms.user.uploading"), span: 24, accept: "image/png, image/jpeg" }] }, switchStatus: "", show: false, phone: "", ruleForm: { id: "", organId: "", username: "", password: "", newpassword1: "", newpassword2: "", avatar: "", email: "", nickName: "" }, rulesBase: { username: [{ required: true, message: e.$t("upms.user.usernameRequired"), trigger: "blur" }] }, rules: { password: [{ required: true, min: 6, message: e.$t("upms.user.oldPwdReq"), trigger: "change" }], newpassword1: [{ required: true, min: 6, message: e.$t("upms.user.min6Chars"), trigger: "change" }], newpassword2: [{ required: true, validator: n, trigger: "blur" }] }, dialogBindPhone: false, doType: null }), l = q(false), I = q(), $ = q(), i = Q(() => D().userInfo);
  o.ruleForm.id = i.value.id, o.ruleForm.organId = i.value.organId, o.ruleForm.username = i.value.username, o.phone = i.value.phone, o.ruleForm.email = i.value.email, o.ruleForm.nickName = i.value.nickName, o.ruleForm.avatar = i.value.avatar != null ? i.value.avatar : "", o.switchStatus = "userManager", _();
  const u = ne().permissions, v = Q(() => ({ delBtn: !!u["sys:log:del"] })), f = Q(() => ({ addBtn: !!u["sys:loglogin:add"], delBtn: !!u["sys:loglogin:del"], editBtn: !!u["sys:loglogin:edit"], viewBtn: !!u["sys:loglogin:get"] }));
  function m(t) {
    e.$confirm(e.$t("upms.user.confirmUnbind"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      te.request("put", "/upms/user/thridparty/unbind", { params: { type: t } }).then(() => {
        e.$alert(e.$t("upms.user.unbindSucc"), e.$t("commons.success"), { confirmButtonText: e.$t("commons.confirm") }), D().setUserInfoAction();
      });
    });
  }
  function h(t) {
    let d, c, V;
    const j = encodeURIComponent(window.location.origin + "/#/authredirect");
    t === "WX" ? (d = le, V = "https://open.weixin.qq.com/connect/qrconnect?appid=" + d + "&redirect_uri=" + j + "&state=WX_BIND&response_type=code&scope=snsapi_login#wechat_redirect") : t === "QQ" && (c = re, V = "https://graph.qq.com/oauth2.0/authorize?response_type=code&state=QQ_BIND&client_id=" + c + "&redirect_uri=" + j), e.$confirm(e.$t("upms.user.authNewWindow"), e.$t("upms.user.confirmInfo"), { distinguishCancelAndClose: true, confirmButtonText: e.$t("upms.user.authSuccess"), cancelButtonText: e.$t("upms.user.authFail") }).then(() => {
      D().setUserInfoAction();
    }).catch(() => {
      D().setUserInfoAction();
    }), ae(V, t, 540, 540);
  }
  function R(t, d) {
    he(Object.assign({ id: o.ruleForm.id, doType: d }, t)).then((c) => {
      if (c.code == 0) {
        let V = "";
        d == "2" ? (o.phone = t.phone, V = e.$t("upms.user.bindSuccess")) : (o.phone = null, V = e.$t("upms.user.unbindSucc")), o.dialogBindPhone = false, D().setUserInfoAction(), e.$notify({ title: e.$t("commons.success"), message: V, type: "success", duration: 2e3 });
      }
    });
  }
  function k(t) {
    o.doType = t, o.dialogBindPhone = true;
  }
  function _() {
    ie().then((t) => {
      o.treeOrganData = t.data;
    });
  }
  function T(t) {
    o.switchStatus = t;
  }
  function P(t) {
    l.value = true, t && t.validate((d) => {
      if (d) fe(E(o.ruleForm)).then((c) => {
        l.value = false, c.data ? (e.$notify({ title: e.$t("commons.success"), message: e.$t("commons.updateSuccess"), type: "success", duration: 2e3 }), o.switchStatus === "passwordManager" && (D().logOut(), location.reload())) : e.$notify({ title: e.$t("upms.user.failure"), message: c.data.msg, type: "error", duration: 2e3 });
      }).catch(() => {
        l.value = false, e.$notify({ title: e.$t("upms.user.failure"), message: e.$t("upms.user.modifyFail"), type: "error", duration: 2e3 });
      });
      else return l.value = false, false;
    });
  }
  function L(t, d) {
    o.ruleForm.avatar = t, d();
  }
  function B(t) {
    const d = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (o.page.descs = "", o.page.ascs = d) : t.order == "descending" ? (o.page.ascs = "", o.page.descs = d) : (o.page.ascs = "", o.page.descs = ""), S(o.page);
  }
  function S(t, d) {
    o.tableLoading = true, pe(Object.assign({ current: t.currentPage, size: t.pageSize, descs: o.page.descs, ascs: o.page.ascs, createId: i.value.id }, d)).then((c) => {
      o.tableData = c.data.records, o.page.total = c.data.total, o.page.currentPage = t.currentPage, o.page.pageSize = t.pageSize, o.tableLoading = false;
    }).catch(() => {
      o.tableLoading = false;
    });
  }
  function O(t) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return ue(t.id);
    }).then(() => {
      S(o.page), e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" });
    }).catch(function() {
    });
  }
  function U(t, d) {
    S(o.page, t), d();
  }
  function z() {
    S(o.page);
  }
  function N(t, d) {
    t = E(t), o.page2.currentPage = 1, s(o.page2, t), d();
  }
  function A(t) {
    const d = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (o.page2.descs = "", o.page2.ascs = d) : t.order == "descending" ? (o.page2.ascs = "", o.page2.descs = d) : (o.page2.ascs = "", o.page2.descs = ""), s(o.page2);
  }
  function s(t, d) {
    o.tableLoading2 = true, ge(Object.assign({ current: t.currentPage, size: t.pageSize, descs: o.page2.descs, ascs: o.page2.ascs, createId: i.value.id }, d)).then((c) => {
      o.tableData2 = c.data.records, o.page2.total = c.data.total, o.page2.currentPage = t.currentPage, o.page2.pageSize = t.pageSize, o.tableLoading2 = false;
    }).catch(() => {
      o.tableLoading2 = false;
    });
  }
  function x(t) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return ce(t.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), s(o.page2);
    });
  }
  function ee() {
    s(o.page2);
  }
  return { ...Z(o), loading: l, ruleFormPwdRef: I, ruleFormRef: $, userInfo: i, permissions: u, permissionList: v, permissionList2: f, handleUnBindThirdParty: m, handleBindThirdParty: h, handleBindPhone: R, showBindPhone: k, handleOrgan: _, switchTab: T, submitForm: P, handleAvatarSuccess: L, sortChange: B, getPageF: S, handleDel: O, searchChange: U, refreshChange: z, searchChange2: N, sortChange2: A, getPage2F: s, handleDel2: x, refreshChange2: ee };
} }, Pe = { class: "text-center w-[100%]" }, Se = { class: "py-[20px] px-[10px]" }, Ve = { class: "text-center w-[100%]" }, Be = { class: "box" }, De = { class: "box" }, Ie = { class: "" };
function _e(e, n, o, l, I, $) {
  const i = p("el-input"), u = p("el-form-item"), v = p("avue-input-tree"), f = p("el-col"), m = p("el-button"), h = p("el-row"), R = p("avue-form"), k = p("Check"), _ = p("el-icon"), T = p("el-form"), P = p("el-tab-pane"), L = p("FontIcon"), B = p("el-link"), S = p("IconifyIconOnline"), O = p("avue-crud"), U = se, z = p("el-tabs"), N = Y, A = p("el-dialog");
  return b(), J("div", null, [a(z, { modelValue: e.switchStatus, "onUpdate:modelValue": n[19] || (n[19] = (s) => e.switchStatus = s), type: "border-card", onTabChange: l.switchTab }, { default: r(() => [a(P, { label: e.$t("upms.user.basicInfo"), name: "userManager" }, { default: r(() => [n[21] || (n[21] = g("br", null, null, -1)), a(h, null, { default: r(() => [a(f, { span: 12 }, { default: r(() => [e.switchStatus === "userManager" ? (b(), C(T, { key: 0, ref: "ruleFormRef", model: e.ruleForm, rules: e.rulesBase, "label-width": "100px" }, { default: r(() => [a(u, { label: e.$t("upms.user.username"), prop: "username" }, { default: r(() => [a(i, { modelValue: e.ruleForm.username, "onUpdate:modelValue": n[0] || (n[0] = (s) => e.ruleForm.username = s), type: "text", disabled: "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), a(u, { label: e.$t("upms.user.organization"), prop: "organId" }, { default: r(() => [a(v, { value: e.ruleForm.organId, "onUpdate:value": n[1] || (n[1] = (s) => e.ruleForm.organId = s), type: "tree", placeholder: e.$t("upms.user.selectOrg"), dic: e.treeOrganData, props: e.organProps, disabled: "" }, null, 8, ["value", "placeholder", "dic", "props"])]), _: 1 }, 8, ["label"]), a(u, { label: e.$t("upms.user.phone"), prop: "phone" }, { default: r(() => [a(h, null, { default: r(() => [a(f, { span: 20, style: { "padding-right": "20px" } }, { default: r(() => [a(i, { modelValue: e.phone, "onUpdate:modelValue": n[2] || (n[2] = (s) => e.phone = s), placeholder: e.$t("upms.user.bindMobile"), disabled: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }), e.phone ? (b(), C(f, { key: 0, span: 3 }, { default: r(() => [a(m, { onClick: n[3] || (n[3] = (s) => l.showBindPhone("3")) }, { default: r(() => [w(y(e.$t("upms.user.unbind")), 1)]), _: 1 })]), _: 1 })) : F("", true), e.phone ? F("", true) : (b(), C(f, { key: 1, span: 3 }, { default: r(() => [a(m, { onClick: n[4] || (n[4] = (s) => l.showBindPhone("2")) }, { default: r(() => [w(y(e.$t("upms.user.bindPhone")), 1)]), _: 1 })]), _: 1 }))]), _: 1 })]), _: 1 }, 8, ["label"]), a(u, { label: e.$t("upms.user.nickname"), prop: "nickName" }, { default: r(() => [a(i, { modelValue: e.ruleForm.nickName, "onUpdate:modelValue": n[5] || (n[5] = (s) => e.ruleForm.nickName = s), placeholder: e.$t("upms.user.enterNickname") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(u, { label: e.$t("upms.user.email"), prop: "email" }, { default: r(() => [a(i, { modelValue: e.ruleForm.email, "onUpdate:modelValue": n[6] || (n[6] = (s) => e.ruleForm.email = s), placeholder: e.$t("upms.user.enterEmail") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(u, { label: "" }, { default: r(() => [a(R, { modelValue: e.ruleForm, "onUpdate:modelValue": n[7] || (n[7] = (s) => e.ruleForm = s), option: e.optionAvatar, "upload-after": l.handleAvatarSuccess }, null, 8, ["modelValue", "option", "upload-after"])]), _: 1 }), a(u, null, { default: r(() => [g("div", Pe, [a(m, { type: "primary", loading: l.loading, onClick: n[8] || (n[8] = (s) => l.submitForm(l.ruleFormRef)) }, { default: r(() => [a(_, { class: "mr-2" }, { default: r(() => [a(k)]), _: 1 }), w(y(e.$t("commons.submit")), 1)]), _: 1 }, 8, ["loading"])])]), _: 1 })]), _: 1 }, 8, ["model", "rules"])) : F("", true)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["label"]), a(P, { label: e.$t("upms.user.changePwd"), name: "passwordManager" }, { default: r(() => [g("div", Se, [e.switchStatus === "passwordManager" ? (b(), C(T, { key: 0, ref: "ruleFormPwdRef", model: e.ruleForm, rules: e.rules, "label-width": "100px" }, { default: r(() => [a(u, { label: e.$t("upms.user.oldPwd"), prop: "password" }, { default: r(() => [a(i, { modelValue: e.ruleForm.password, "onUpdate:modelValue": n[9] || (n[9] = (s) => e.ruleForm.password = s), type: "password" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), a(u, { label: e.$t("upms.user.password"), prop: "newpassword1" }, { default: r(() => [a(i, { modelValue: e.ruleForm.newpassword1, "onUpdate:modelValue": n[10] || (n[10] = (s) => e.ruleForm.newpassword1 = s), type: "password" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), a(u, { label: e.$t("upms.user.confirmPwd"), prop: "newpassword2" }, { default: r(() => [a(i, { modelValue: e.ruleForm.newpassword2, "onUpdate:modelValue": n[11] || (n[11] = (s) => e.ruleForm.newpassword2 = s), type: "password" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), a(u, null, { default: r(() => [g("div", Ve, [a(m, { type: "primary", loading: l.loading, onClick: n[12] || (n[12] = (s) => l.submitForm(l.ruleFormPwdRef)) }, { default: r(() => [a(_, { class: "mr-2" }, { default: r(() => [a(k)]), _: 1 }), w(y(e.$t("commons.submit")), 1)]), _: 1 }, 8, ["loading"])])]), _: 1 })]), _: 1 }, 8, ["model", "rules"])) : F("", true)])]), _: 1 }, 8, ["label"]), a(P, { label: e.$t("upms.user.thirdPartyLogin"), name: "thirdPartyManager", class: "thirdparty-container" }, { default: r(() => [g("div", Be, [g("span", null, [a(L, { class: "thirdparty-icon", style: { color: "#2bb673" }, icon: "jl_wechat" })]), g("p", null, [l.userInfo.wxOpenid ? F("", true) : (b(), C(B, { key: 0, type: "primary", onClick: n[13] || (n[13] = (s) => l.handleBindThirdParty("WX")) }, { default: r(() => [w(y(e.$t("upms.user.bindWechat")), 1)]), _: 1 })), l.userInfo.wxOpenid ? (b(), C(B, { key: 1, type: "danger", onClick: n[14] || (n[14] = (s) => l.handleUnBindThirdParty("WX")) }, { default: r(() => [w(y(e.$t("upms.user.unbindWechat")), 1)]), _: 1 })) : F("", true)])]), g("div", De, [g("span", Ie, [a(S, { icon: "fa:qq", class: "thirdparty-icon", style: { color: "#2d8cf0" } })]), g("p", null, [l.userInfo.qqOpenid ? F("", true) : (b(), C(B, { key: 0, type: "primary", onClick: n[15] || (n[15] = (s) => l.handleBindThirdParty("QQ")) }, { default: r(() => [w(y(e.$t("upms.user.bindQQ")), 1)]), _: 1 })), l.userInfo.qqOpenid ? (b(), C(B, { key: 1, type: "danger", onClick: n[16] || (n[16] = (s) => l.handleUnBindThirdParty("QQ")) }, { default: r(() => [w(y(e.$t("upms.user.unbindQQ")), 1)]), _: 1 })) : F("", true)])])]), _: 1 }, 8, ["label"]), a(P, { label: e.$t("upms.user.operLog"), name: "logManager" }, { default: r(() => [a(U, null, { default: r(() => [a(O, { ref: "crud", page: e.page, "onUpdate:page": n[17] || (n[17] = (s) => e.page = s), data: e.tableData, "table-loading": e.tableLoading, option: e.tableOption, permission: l.permissionList, onOnLoad: l.getPageF, onSearchChange: l.searchChange, onRefreshChange: l.refreshChange, onSortChange: l.sortChange, onRowDel: l.handleDel }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onSearchChange", "onRefreshChange", "onSortChange", "onRowDel"])]), _: 1 })]), _: 1 }, 8, ["label"]), a(P, { label: e.$t("upms.user.log"), name: "logloginManager" }, { default: r(() => [a(U, null, { default: r(() => [a(O, { page: e.page2, "onUpdate:page": n[18] || (n[18] = (s) => e.page2 = s), data: e.tableData2, "table-loading": e.tableLoading2, option: e.tableOption2, permission: l.permissionList2, onOnLoad: l.getPage2F, onSearchChange: l.searchChange2, onRefreshChange: l.refreshChange2, onSortChange: l.sortChange2, onRowDel: l.handleDel2 }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onSearchChange", "onRefreshChange", "onSortChange", "onRowDel"])]), _: 1 })]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["modelValue", "onTabChange"]), a(A, { modelValue: e.dialogBindPhone, "onUpdate:modelValue": n[20] || (n[20] = (s) => e.dialogBindPhone = s), title: e.doType == "2" ? e.$t("upms.user.bindMobileShort") : e.$t("upms.user.unbindMobile"), "close-on-click-modal": false, width: "30%" }, { default: r(() => [a(N, { type: e.doType, phone: e.phone, onHandleDone: l.handleBindPhone }, null, 8, ["type", "phone", "onHandleDone"])]), _: 1 }, 8, ["modelValue", "title"])]);
}
const Le = G(Fe, [["render", _e], ["__scopeId", "data-v-85dda850"]]);
export {
  Le as default
};
