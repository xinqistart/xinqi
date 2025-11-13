import { A as O, p as _, R as A, E as q, t as B, a3 as P, a1 as U, W as L, aR as D, S as T, _ as z, c as F, o as m, e as a, b as s, h as d, g as I, B as f, r as i, f as g, z as u, w as E, D as M, V as j } from "./index-DAdfXJ2i.js";
import { a as W, b as G } from "./useNav-CaFDUZom.js";
import { u as N } from "./verifyCode-tnwrOe84.js";
import { f as H, a as J, g as K, p as Q } from "./shopapply-CD2Zl2jR.js";
import { F as X } from "./index-N3Ti2Rv6.js";
import "./shopinfo-DR8w8ULX.js";
import "./user-CcdA_mZX.js";
const Y = { components: { Footer: X }, setup() {
  const { proxy: e } = O(), { isDisabled: n, text: S } = N(), l = _(), t = A({ form: { id: "", userPhone: "", longitude: "", latitude: "", address: "", tenantId: void 0, status: "", smsCode: "" }, formOption: J, formOption2: H, addressInfo: [], type: void 0, id: void 0, active: 0, tenantInfo: null, applyLogId: void 0, useRenderIcon: W });
  q(() => t.addressInfo, (o) => {
    o.length > 0 ? t.form.address = o[2] : t.form.address = "";
  }, { deep: true, immediate: true });
  const { device: R } = G(), r = P();
  B(() => {
    t.form.tenantId = r.query.tenant_id, t.type = r.query.type, t.id = r.query.id, window.tenantId = String(r.query.tenant_id), U(t.form.tenantId);
    const o = L().getItem(`applyLogId${t.form.tenantId}`);
    o && (t.applyLogId = o), y(), (t.type == "edit" || t.type == "view") && (t.active = 1, v());
  });
  function w() {
    e.$prompt(e.$t("mall.shopapply.enterApplicationNumber"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), inputPattern: /\S/, inputErrorMessage: e.$t("mall.shopapply.incorrectApplicationNumberFormat") }).then(({ value: o }) => {
      window.location.href = "#/mall/shop/shopapply/form?tenant_id=" + t.form.tenantId + "&type=view&id=" + o, location.reload();
    });
  }
  function b(o) {
    window.location.href = "#/mall/shop/shopapply/form?tenant_id=" + t.form.tenantId + "&type=view&id=" + o, location.reload();
  }
  function V() {
    window.location.href = "#/mall/shop/shopapply/form?tenant_id=" + t.form.tenantId, location.reload();
  }
  function y() {
    D(t.form.tenantId).then((o) => {
      t.tenantInfo = o.data;
    });
  }
  function v() {
    K({ tenantId: t.form.tenantId, id: t.id }).then((o) => {
      o.data ? (t.form = o.data, t.addressInfo = t.form.address ? [t.form.longitude, t.form.latitude, t.form.address] : [], t.form.status == "1" ? t.type = "view" : t.type = "edit", t.form.status != "0" && (t.active = 3)) : e.$message({ showClose: true, message: e.$t("mall.shopapply.noSuchApplication"), type: "error" });
    });
  }
  function C(o, k) {
    const c = t.addressInfo;
    o.longitude = c[0], o.latitude = c[1], o.address = c[2], o.mallName = t.tenantInfo.name, Q(o).then((h) => {
      L().setItem(`applyLogId${t.form.tenantId}`, h.data.id), window.location.href = "#/mall/shop/shopapply/form?tenant_id=" + t.form.tenantId + "&type=view&id=" + h.data.id, location.reload();
    }).catch(() => {
      k();
    });
  }
  async function $() {
    await l.value.validateField(["userPhone"]) && N().start(l.value, "userPhone", t.form.userPhone, 60, 5, false);
  }
  return { ...T(t), ruleFormRef: l, device: R, toView: w, reApply: V, getTenantF: y, getOneF: v, handleUpdate: C, queryView: b, useVerifyCodeF: $, text: S, isDisabled: n };
} }, Z = { class: "box-card-apply-form" }, x = { class: "align-center" }, ee = { class: "flex-c" }, te = { class: "mt-[20px] text-center" }, oe = { key: 0, class: "flex-c" };
function ne(e, n, S, l, t, R) {
  const r = i("el-step"), w = i("el-steps"), b = i("el-alert"), V = i("el-link"), y = i("avue-input-map"), v = i("Position"), C = i("el-icon"), $ = i("el-button"), o = i("el-input"), k = i("avue-form"), c = i("el-text"), h = i("Footer");
  return m(), F("div", { class: j({ "mobile-apply": l.device == "mobile", "pc-apply": l.device != "mobile" }) }, [a("div", null, [n[6] || (n[6] = a("div", { class: "shopapplybg" }, null, -1)), a("div", null, [s(w, { active: e.active, "finish-status": e.form.status == "2" ? "error" : "success", class: "steps-layout", "align-center": "" }, { default: d(() => [s(r, { title: e.$t("mall.shopapply.fillInInformation"), description: e.$t("mall.shopapply.fillInShopInformation") }, null, 8, ["title", "description"]), s(r, { title: e.$t("mall.shopapply.informationUnderReview"), description: e.$t("mall.shopapply.mallAdminReviewInformation") }, null, 8, ["title", "description"]), e.form.status != "1" && e.form.status != "2" ? (m(), I(r, { key: 0, title: e.$t("mall.shopapply.settlementResult"), description: e.$t("mall.shopapply.settlementResult") }, null, 8, ["title", "description"])) : f("", true), e.form.status == "1" ? (m(), I(r, { key: 1, title: e.$t("mall.shopapply.settlementSuccessful") }, null, 8, ["title"])) : f("", true), e.form.status == "2" ? (m(), I(r, { key: 2, title: e.$t("mall.shopapply.settlementFailed") }, null, 8, ["title"])) : f("", true)]), _: 1 }, 8, ["active", "finish-status"])]), a("div", Z, [a("div", x, [a("div", null, [e.tenantInfo ? (m(), I(b, { key: 0, style: { "background-color": "unset" }, title: e.$t("mall.shopapply.applySettlementFor") + "\u3010" + e.tenantInfo.name + "\u3011", type: "warning", closable: false, center: "" }, null, 8, ["title"])) : f("", true)]), a("div", ee, [s(V, { type: "primary", href: "/", underline: false }, { default: d(() => [g(u(e.$t("mall.shopapply.loginNow")), 1)]), _: 1 })])]), s(k, { ref: "ruleFormRef", modelValue: e.form, "onUpdate:modelValue": n[2] || (n[2] = (p) => e.form = p), option: e.type == "view" ? e.formOption2 : e.formOption, onSubmit: l.handleUpdate }, { address: d(() => [a("div", null, [s(y, { modelValue: e.addressInfo, "onUpdate:modelValue": n[0] || (n[0] = (p) => e.addressInfo = p), placeholder: e.$t("mall.shopinfo.selectMapLocation"), style: { width: "100%" } }, null, 8, ["modelValue", "placeholder"]), E(a("div", null, [s(C, null, { default: d(() => [s(v)]), _: 1 }), g(u(e.form.address), 1)], 512), [[M, e.form.address]])])]), smsCode: d(() => [a("div", null, [s(o, { modelValue: e.form.smsCode, "onUpdate:modelValue": n[1] || (n[1] = (p) => e.form.smsCode = p), size: "default", disabled: e.type == "view", placeholder: e.$t("mall.shopapply.enterVerificationCode") }, { suffix: d(() => [s($, { link: "", disabled: l.isDisabled, style: { height: "32px !important" }, onClick: l.useVerifyCodeF }, { default: d(() => [g(u(l.text.length > 0 ? l.text + e.$t("login.info") : e.$t("login.getVerifyCode")), 1)]), _: 1 }, 8, ["disabled", "onClick"])]), _: 1 }, 8, ["modelValue", "disabled", "placeholder"])])]), _: 1 }, 8, ["modelValue", "option", "onSubmit"])]), a("div", te, [e.applyLogId ? (m(), F("div", oe, [s(c, null, { default: d(() => [g(u(e.$t("upms.tenantapply.applicationRecord")), 1)]), _: 1 }), a("a", { class: "cursor-pointer text-blue-600", onClick: n[3] || (n[3] = (p) => l.queryView(e.applyLogId)) }, u(e.applyLogId), 1)])) : f("", true), a("a", { class: "cursor-pointer ml-[10px] text-blue-600", onClick: n[4] || (n[4] = (...p) => l.toView && l.toView(...p)) }, u(e.$t("upms.tenantapply.applicationInquiry")), 1), e.form.id || e.applyLogId ? (m(), F("a", { key: 1, class: "cursor-pointer text-blue-600 ml-[10px]", onClick: n[5] || (n[5] = (...p) => l.reApply && l.reApply(...p)) }, u(e.$t("upms.tenantapply.reapply")), 1)) : f("", true)]), n[7] || (n[7] = a("br", null, null, -1)), s(h), n[8] || (n[8] = a("br", null, null, -1))])], 2);
}
const me = z(Y, [["render", ne], ["__scopeId", "data-v-a60b1ee9"]]);
export {
  me as default
};
