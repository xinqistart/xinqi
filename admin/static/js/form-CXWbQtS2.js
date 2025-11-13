import { _ as S } from "./single-img-upload-BdzFfNk9.js";
import { A, p as T, R as U, t as B, a3 as N, W as F, S as O, _ as q, c as y, o as m, e as n, b as i, h as r, g as C, B as v, r as p, f as g, z as u, V as P } from "./index-DAdfXJ2i.js";
import { a as z, b as D } from "./useNav-CaFDUZom.js";
import { u as _ } from "./verifyCode-tnwrOe84.js";
import { f as M, a as E, g as W, p as j } from "./tenantapply-7t4Fiwj5.js";
import { F as G } from "./index-N3Ti2Rv6.js";
import "./user-CcdA_mZX.js";
const H = { components: { Footer: G }, setup() {
  const { proxy: e } = A(), { isDisabled: t, text: $ } = _(), l = T(), o = U({ form: { id: "", status: "", companyLicense: "", userPhone: "", smsCode: "" }, formOption: E, formOption2: M, fileList: [], addressInfo: [], type: void 0, id: void 0, active: 0, tenantInfo: null, applyLogId: void 0, useRenderIcon: z, headers: {} }), { device: L } = D(), d = N();
  B(() => {
    o.id = d.query.id;
    try {
      const a = F().getItem("applyTenantId");
      a && (o.type = d.query.type, o.applyLogId = a), f();
    } catch {
    }
    (o.type == "edit" || o.type == "view") && (o.active = 1, f());
  });
  function w() {
    e.$prompt(e.$t("upms.tenantapply.enterApplicationNumber"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), inputPattern: /\S/, inputErrorMessage: e.$t("upms.tenantapply.incorrectApplicationNumberFormat") }).then(({ value: a }) => {
      window.location.href = "#/upms/tenantapply/form?type=view&id=" + a, location.reload();
    });
  }
  function b(a) {
    window.location.href = "#/upms/tenantapply/form?type=view&id=" + a, location.reload();
  }
  function I() {
    window.location.href = "#/upms/tenantapply/form", location.reload();
  }
  function f() {
    o.id && o.id != "undefined" && W({ id: o.id }).then((a) => {
      a.data ? (o.form = a.data, o.form.status == "1" ? o.type = "view" : o.type = "edit", o.form.status != "0" && (o.active = 3)) : e.$message({ showClose: true, message: e.$t("upms.tenantapply.noSuchApplication"), type: "error" });
    });
  }
  function h(a, k) {
    j(a).then((c) => {
      c.data.id && F().setItem("applyTenantId", c.data.id), window.location.href = "#/upms/tenantapply/form?type=view&id=" + c.data.id, location.reload();
    }).catch(() => {
      k();
    });
  }
  async function V() {
    await l.value.validateField(["userPhone"]) && _().start(l.value, "userPhone", o.form.userPhone, 60, 6, false);
  }
  return { ...O(o), ruleFormRef: l, device: L, toView: w, reApply: I, getOneF: f, handleUpdate: h, queryView: b, useVerifyCodeF: V, text: $, isDisabled: t };
} }, J = { class: "box-card-apply-form" }, K = { class: "align-center" }, Q = { class: "flex-c" }, X = { style: { overflow: "auto" }, class: "mt-2" }, Y = { class: "ml-[20px]", style: { color: "#888" } }, Z = { key: 0 }, x = { key: 1 }, ee = { class: "mt-[20px] text-center" }, te = { key: 0, class: "flex-c" };
function oe(e, t, $, l, o, L) {
  const d = p("el-step"), w = p("el-steps"), b = p("el-alert"), I = p("el-link"), f = p("el-text"), h = p("el-image"), V = S, a = p("el-button"), k = p("el-input"), c = p("avue-form"), R = p("Footer");
  return m(), y("div", { class: P({ "mobile-apply": l.device == "mobile", "pc-apply": l.device != "mobile" }) }, [n("div", null, [t[6] || (t[6] = n("div", { class: "tenantapplybg" }, null, -1)), n("div", null, [i(w, { active: e.active, "finish-status": e.form.status == "2" ? "error" : "success", class: "steps-layout", "align-center": "" }, { default: r(() => [i(d, { title: e.$t("upms.tenantapply.fillInInformation"), description: e.$t("upms.tenantapply.fillInMallInformation") }, null, 8, ["title", "description"]), i(d, { title: e.$t("upms.tenantapply.informationUnderReview"), description: e.$t("upms.tenantapply.platformAdminReview") }, null, 8, ["title", "description"]), e.form.status != "1" && e.form.status != "2" ? (m(), C(d, { key: 0, title: e.$t("upms.tenantapply.settlementResult"), description: e.$t("upms.tenantapply.settlementResult") }, null, 8, ["title", "description"])) : v("", true), e.form.status == "1" ? (m(), C(d, { key: 1, title: e.$t("upms.tenantapply.successfulSettlement") }, null, 8, ["title"])) : v("", true), e.form.status == "2" ? (m(), C(d, { key: 2, title: e.$t("upms.tenantapply.failedSettlement") }, null, 8, ["title"])) : v("", true)]), _: 1 }, 8, ["active", "finish-status"])]), n("div", J, [n("div", K, [n("div", null, [i(b, { style: { "background-color": "unset" }, title: e.$t("upms.tenantapply.applyForSettlement"), type: "warning", closable: false, center: "" }, null, 8, ["title"]), n("div", null, [n("div", Q, [i(I, { type: "primary", href: "/", underline: false }, { default: r(() => [g(u(e.$t("upms.tenantapply.immediateLogin")), 1)]), _: 1 })])])])]), n("div", X, [i(c, { ref: "ruleFormRef", modelValue: e.form, "onUpdate:modelValue": t[2] || (t[2] = (s) => e.form = s), option: e.type == "view" ? e.formOption2 : e.formOption, onSubmit: l.handleUpdate }, { "baseInfo2-header": r(() => [n("div", null, [i(f, { tag: "b", size: "large" }, { default: r(() => [g(u(e.$t("upms.tenantapply.companyInfo")), 1)]), _: 1 }), n("span", Y, u(e.$t("commons.applyTip")), 1)])]), companyLicense: r(() => [e.type == "view" ? (m(), y("div", Z, [i(h, { src: e.form.companyLicense, "preview-src-list": [e.form.companyLicense], "preview-teleported": true }, null, 8, ["src", "preview-src-list"])])) : (m(), y("div", x, [i(V, { value: e.form.companyLicense, "onUpdate:value": t[0] || (t[0] = (s) => e.form.companyLicense = s), needToken: false, actionUrl: "/upms/file/upload/out?fileType=image&dir=tenantapply/" }, null, 8, ["value"])]))]), smsCode: r(() => [n("div", null, [i(k, { modelValue: e.form.smsCode, "onUpdate:modelValue": t[1] || (t[1] = (s) => e.form.smsCode = s), size: "default", disabled: e.type == "view", placeholder: e.$t("upms.tenantapply.enterVerificationCode") }, { suffix: r(() => [i(a, { link: "", disabled: l.isDisabled, style: { height: "32px !important" }, onClick: l.useVerifyCodeF }, { default: r(() => [g(u(l.text.length > 0 ? l.text + e.$t("login.info") : e.$t("login.getVerifyCode")), 1)]), _: 1 }, 8, ["disabled", "onClick"])]), _: 1 }, 8, ["modelValue", "disabled", "placeholder"])])]), _: 1 }, 8, ["modelValue", "option", "onSubmit"])])]), n("div", ee, [e.applyLogId ? (m(), y("div", te, [i(f, null, { default: r(() => [g(u(e.$t("upms.tenantapply.applicationRecord")), 1)]), _: 1 }), n("a", { class: "cursor-pointer text-blue-600", onClick: t[3] || (t[3] = (s) => l.queryView(e.applyLogId)) }, u(e.applyLogId), 1)])) : v("", true), n("a", { class: "cursor-pointer ml-[10px] text-blue-600", onClick: t[4] || (t[4] = (...s) => l.toView && l.toView(...s)) }, u(e.$t("upms.tenantapply.applicationInquiry")), 1), e.form.id || e.applyLogId ? (m(), y("a", { key: 1, class: "cursor-pointer text-blue-600 ml-[10px]", onClick: t[5] || (t[5] = (...s) => l.reApply && l.reApply(...s)) }, u(e.$t("upms.tenantapply.reapply")), 1)) : v("", true)]), t[7] || (t[7] = n("br", null, null, -1)), i(R), t[8] || (t[8] = n("br", null, null, -1))])], 2);
}
const de = q(H, [["render", oe], ["__scopeId", "data-v-e422675e"]]);
export {
  de as default
};
