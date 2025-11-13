import { _ as B } from "./BaseEditor-CKHWT0N2.js";
import { A as O, R as Q, t as x, q as N, aA as c, b9 as L, ap as Z, S as G, U as Y, _ as J, r as d, c as p, o as i, e as l, b as n, h as o, g as I, B as u, z as s, F as H, v as U, V as K, ba as W, C as X, f as D } from "./index-DAdfXJ2i.js";
import { T as ee, a as ae, u as q, g as te } from "./index-CxUwxPH6.js";
import { g as ne } from "./tenantpackage-D3Nb2FO1.js";
import { g as oe } from "./tenantpackagecost-VuyOGNHB.js";
import { g as re } from "./agreementconfig-BApCRbNY.js";
import { P as se } from "./pay-qrcode-eTpYhBVf.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./vue-qr-Ee6k57BN.js";
const ie = { components: { PayQrCode: se, TenantPackageRecharge: ee, BaseEditor: B }, props: { showHome: { type: Boolean, default: false } }, setup() {
  const { proxy: a } = O(), e = Q({ agreementContent: "", activeName: "first", tenantInfoMy: { id: "", name: "", expireTime: "", packageId: "" }, tenantPackageMyName: null, expireTimeDayMy: null, expireTimeDayMyHour: null, expireTimeDayMyHourTimer: null, tenantPackageData: [], tenantPackage: { description: "" }, tenantPackageCostData: [], tenantPackageCost: { type: "1", amount: 0 }, formRules: { packageId: [{ required: true, message: a.$t("upms.tenant.selectPackage"), trigger: "change" }], packageCostId: [{ required: true, message: a.$t("upms.tenant.selectCost"), trigger: "change" }], count: [{ required: true, message: a.$t("upms.tenant.enterQuantity"), trigger: "change" }], agreeToS: [{ required: true, message: a.$t("upms.tenant.checkServiceTerms"), trigger: "change" }] }, form: { id: "", packageId: "", packageCostId: "", count: 1, paymentPrice: 0, agreeToS: false, expireTime: "" }, dialogVisible: false });
  x(async () => {
    await g(), await $(), _(), P();
  }), e.tenantPackageMyName = N(() => {
    var _a;
    const t = (_a = e.tenantPackageData.find((m) => m.id == e.tenantInfoMy.packageId)) == null ? void 0 : _a.name;
    return t || "";
  }), e.expireTimeDayMy = N(() => {
    if (e.tenantInfoMy.expireTime) {
      const t = c(e.tenantInfoMy.expireTime).diff(c(), "day");
      return t == 0 && c(e.tenantInfoMy.expireTime).diff(c()) < 0 ? -1 : t;
    }
    return 0;
  });
  function _() {
    re("1").then((t) => {
      var _a;
      e.agreementContent = (_a = t.data) == null ? void 0 : _a.agreementContent;
    });
  }
  function g() {
    L({}).then((t) => {
      e.tenantInfoMy = t.data, e.tenantInfoMy.packageId ? e.form.packageId = e.tenantInfoMy.packageId : e.activeName = "second", T();
    });
  }
  async function $() {
    const t = await ne({ current: 1 });
    e.tenantPackageData = t.data.records || [], e.tenantInfoMy.packageId ? (e.form.packageId = e.tenantInfoMy.packageId, await M()) : e.tenantPackageData.length > 0 && (e.form.packageId = e.tenantPackageData[0].id, await M());
  }
  async function M(t = e.form.packageId) {
    if (!t) {
      C();
      return;
    }
    e.tenantPackage = e.tenantPackageData.find((f) => f.id === t), e.form.packageId = t;
    const m = await oe({ current: 1, packageId: t });
    e.tenantPackageCostData = m.data.records || [], e.tenantPackageCostData.length > 0 ? (e.form.packageCostId = e.tenantPackageCostData[0].id, e.tenantPackageCost = e.tenantPackageCostData[0]) : (e.form.packageCostId = "", e.tenantPackageCost = { type: "1", amount: 0 }), C();
  }
  function k() {
    e.tenantPackageCost = e.tenantPackageCostData.find((t) => t.id === e.form.packageCostId), C();
  }
  function C() {
    if (!e.tenantPackageCost || !e.tenantPackageCost.amount) {
      e.form.paymentPrice = 0, e.form.expireTime = "";
      return;
    }
    e.form.paymentPrice = e.tenantPackageCost.amount * e.form.count;
    let t = c().add(0, "days").format("YYYY-MM-DD");
    e.form.packageId == e.tenantInfoMy.packageId && e.tenantInfoMy.expireTime && (t = e.tenantInfoMy.expireTime), e.tenantPackageCost.type == "1" ? e.form.expireTime = c(t).add(e.form.count, "days").format("YYYY-MM-DD") : e.tenantPackageCost.type == "2" ? e.form.expireTime = c(t).add(e.form.count, "months").format("YYYY-MM-DD") : e.tenantPackageCost.type == "3" && (e.form.expireTime = c(t).add(e.form.count, "years").format("YYYY-MM-DD"));
  }
  function w() {
    a.$refs.elFormRef.validate((t, m) => {
      if (t) {
        if (e.form.count <= 0) {
          a.$message({ showClose: true, message: a.$t("upms.tenant.quantityCannotBeZero"), type: "error" });
          return;
        }
        if (!e.form.agreeToS) {
          a.$message({ showClose: true, message: a.$t("upms.tenant.agreeToServiceAgreement"), type: "warning" });
          return;
        }
        ae({ tenantId: e.tenantInfoMy.id, packageId: e.form.packageId, packageCostId: e.form.packageCostId, count: e.form.count, paymentPrice: e.form.paymentPrice }).then((f) => {
          e.form.id = f.data.id, e.form.paymentPrice <= 0 ? q({ paymentType: 1, id: f.data.id }).then(() => {
            Y().refreshTenantInfo();
          }) : a.$refs.payQrCodeRef.onShow();
        });
      }
    });
  }
  function P() {
    e.activeName == "first" && e.tenantPackageData.length > 0 && (e.form.packageId = e.tenantInfoMy.packageId, M());
  }
  function v(t, { paymentType: m, done: f }) {
    q({ paymentType: m, id: t.id }).then((y) => {
      let h = null;
      y.code == 0 ? m == "1" ? h = y.data.codeUrl : m == "2" && (h = y.data.qrCode) : a.$message({ showClose: true, message: a.$t("upms.tenant.checkPaymentMethod"), type: "error" }), f(h);
    }).catch((y) => {
    });
  }
  function b() {
    te(e.form.id).then((t) => {
      const m = t.data;
      m && m.isPay == "1" && (a.$message({ showClose: true, message: a.$t("upms.tenant.paymentSuccess"), type: "success" }), e.activeName = "third", g(), $(), Y().refreshTenantInfo());
    });
  }
  function T() {
    const t = c(e.tenantInfoMy.expireTime).diff(c());
    t && t < 0 || (e.expireTimeDayMyHourTimer = setInterval(() => {
      let m = c(e.tenantInfoMy.expireTime).diff(c());
      const f = Math.floor(m / (3600 * 1e3));
      m -= f * 60 * 60 * 1e3;
      const y = Math.floor(m / (60 * 1e3));
      m -= y * 60 * 1e3;
      const h = Math.floor(m / 1e3);
      e.expireTimeDayMyHour = `${f.toString().padStart(2, "0")}:${y.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}`, m <= 0 && e.expireTimeDayMyHourTimer && clearInterval(e.expireTimeDayMyHourTimer);
    }, 1e3));
  }
  Z(() => {
    e.expireTimeDayMyHourTimer && clearInterval(e.expireTimeDayMyHourTimer);
  });
  function V() {
    window.location.href = "/";
  }
  return { ...G(e), changeTenantPackageCost: k, getTenantPackageCost: M, showPayDialog: v, closePayDialog: b, tabChange: P, onSubmit: w, goHome: V, quantityChange: C };
} }, le = { class: "text-center" }, me = { class: "mt-[10px]", style: { "font-size": "28px", color: "#111", "text-align": "center" } }, de = { style: { "margin-left": "10px", "font-size": "14px", color: "#f40" } }, pe = { key: 0 }, ue = { key: 1 }, fe = { key: 2 }, ce = { style: { margin: "0 20px" } }, ge = { key: 0, class: "mt-[20px]" }, ye = { class: "mt-[10px]" }, ke = { key: 0 }, Ce = { key: 1, class: "mt-[20px]" }, Ie = { class: "pt-[10px]" }, Te = { class: "py-[8px]" }, he = { key: 0 }, Me = { key: 1 }, Pe = { key: 2 }, be = { key: 0, class: "jl-text-tips" }, ve = { class: "jl-text-tips ml-[10px]" }, De = { class: "flex items-center" }, _e = { key: 2 };
function $e(a, e, _, g, $, M) {
  const k = d("el-row"), C = d("el-tab-pane"), w = d("el-tabs"), P = d("el-radio-button"), v = d("el-radio-group"), b = d("el-col"), T = d("el-form-item"), V = d("el-alert"), t = d("el-button"), m = d("el-image"), f = W, y = d("el-input-number"), h = d("el-checkbox"), R = d("tenant-package-recharge"), j = d("el-form"), A = d("el-card"), z = B, F = d("el-dialog"), E = d("pay-qr-code");
  return i(), p(H, null, [l("div", null, [n(A, null, { default: o(() => [n(k, { justify: "center", style: { padding: "40px 20px 10px" } }, { default: o(() => [l("div", null, [l("div", le, [l("span", null, s(a.tenantInfoMy.name), 1)]), l("div", me, [l("span", null, s(a.tenantPackageMyName || a.$t("upms.tenant.noPackageAvailable")), 1)]), a.tenantInfoMy.packageId && a.tenantInfoMy.id ? (i(), I(k, { key: 0, class: "mt-[10px]", style: { "font-size": "14px", color: "#f40" }, align: "middle", justify: "start" }, { default: o(() => [l("div", null, s(a.$t("upms.tenant.expirationTime")) + s(a.tenantInfoMy.expireTime), 1), l("div", de, [a.expireTimeDayMy && a.expireTimeDayMy < 0 ? (i(), p("span", pe, s(a.$t("upms.tenant.expired")) + s(Math.abs(a.expireTimeDayMy)) + s(a.$t("upms.tenant.days")), 1)) : a.expireTimeDayMy == 0 ? (i(), p("span", ue, s(a.$t("upms.tenant.remainingTime")) + s(a.expireTimeDayMyHour), 1)) : (i(), p("span", fe, s(a.expireTimeDayMy) + s(a.$t("upms.tenant.daysUntilExpiration")), 1))])]), _: 1 })) : u("", true)])]), _: 1 }), l("div", ce, [n(j, { ref: "elFormRef", class: "pt-[10px]", rules: a.formRules, model: a.form }, { default: o(() => [n(w, { modelValue: a.activeName, "onUpdate:modelValue": e[0] || (e[0] = (r) => a.activeName = r), style: { width: "260px", padding: "5px", margin: "auto", border: "solid 1px rgb(30 32 35 / 10%)", "border-radius": "10px" }, class: "flex justify-center", onTabChange: g.tabChange }, { default: o(() => [a.tenantInfoMy.packageId ? (i(), I(C, { key: 0, label: a.$t("upms.tenant.packageRenewal"), name: "first" }, { default: o(() => [...e[11] || (e[11] = [l("br", null, null, -1)])]), _: 1 }, 8, ["label"])) : u("", true), a.tenantInfoMy.packageId ? (i(), I(C, { key: 1, label: a.$t("upms.tenant.packageUpgrade"), name: "second" }, { default: o(() => [...e[12] || (e[12] = [l("br", null, null, -1)])]), _: 1 }, 8, ["label"])) : u("", true), a.tenantInfoMy.packageId ? (i(), I(C, { key: 2, label: a.$t("upms.tenant.packageRecords"), name: "third" }, { default: o(() => [...e[13] || (e[13] = [l("br", null, null, -1)])]), _: 1 }, 8, ["label"])) : u("", true)]), _: 1 }, 8, ["modelValue", "onTabChange"]), a.activeName == "second" ? (i(), p("div", ge, [n(T, { prop: "packageId" }, { default: o(() => [n(k, null, { default: o(() => [n(b, { span: 24 }, { default: o(() => [n(v, { modelValue: a.form.packageId, "onUpdate:modelValue": e[1] || (e[1] = (r) => a.form.packageId = r), onChange: g.getTenantPackageCost }, { default: o(() => [(i(true), p(H, null, U(a.tenantPackageData, (r, S) => (i(), I(P, { key: S, value: r.id }, { default: o(() => [l("span", null, s(r.name), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 8, ["modelValue", "onChange"])]), _: 1 }), n(b, { span: 24 }, { default: o(() => [l("div", ye, s(a.$t("upms.tenant.packageDescription")) + s(a.tenantPackage.description), 1)]), _: 1 })]), _: 1 })]), _: 1 }), a.tenantInfoMy.packageId && a.tenantInfoMy.packageId != a.form.packageId ? (i(), p("div", ke, [n(V, { title: a.$t("upms.tenant.noteInconsistentPackage"), type: "error", closable: false }, null, 8, ["title"])])) : u("", true)])) : u("", true), a.activeName != "third" ? (i(), p("div", Ce, [n(T, { label: a.$t("upms.tenant.packageType"), prop: "packageCostId" }, { default: o(() => [n(k, null, { default: o(() => [n(b, { span: 24 }, { default: o(() => [n(v, { modelValue: a.form.packageCostId, "onUpdate:modelValue": e[2] || (e[2] = (r) => a.form.packageCostId = r), fill: "#ffffff", "text-color": "#666666", onChange: g.changeTenantPackageCost }, { default: o(() => [(i(true), p(H, null, U(a.tenantPackageCostData, (r, S) => (i(), I(P, { border: "", key: S, value: r.id, class: K(a.form.packageCostId == r.id ? "radio-check-item" : "") }, { default: o(() => [a.form.packageCostId == r.id ? (i(), I(t, { key: 0, class: "icon-check", type: "success", icon: "Check", size: "small", circle: "" })) : u("", true), l("div", null, [n(m, { src: r.img, fit: "fill", style: { width: "100px", height: "100px" } }, null, 8, ["src"])]), l("div", null, [l("div", Ie, [n(f, { amount: r.amount, size: "sm" }, null, 8, ["amount"])]), l("div", Te, [r.type == 1 ? (i(), p("span", he, s(a.$t("upms.tenant.perDay")), 1)) : u("", true), r.type == 2 ? (i(), p("span", Me, s(a.$t("upms.tenant.perMonth")), 1)) : u("", true), r.type == 3 ? (i(), p("span", Pe, s(a.$t("upms.tenant.perYear")), 1)) : u("", true)])])]), _: 2 }, 1032, ["value", "class"]))), 128))]), _: 1 }, 8, ["modelValue", "onChange"]), a.tenantPackageCostData.length == 0 ? (i(), p("div", be, s(a.$t("upms.tenant.noData")), 1)) : u("", true)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["label"]), n(T, { label: a.$t("upms.tenant.purchaseQuantity"), prop: "count" }, { default: o(() => [n(y, { modelValue: a.form.count, "onUpdate:modelValue": e[3] || (e[3] = (r) => a.form.count = r), min: 1, precision: 0, step: 1, max: 99999, onChange: g.quantityChange }, null, 8, ["modelValue", "onChange"]), l("div", ve, s(a.$t("upms.tenant.estimatedExpirationTime")) + s(a.form.expireTime), 1)]), _: 1 }, 8, ["label"]), n(T, { label: a.$t("upms.tenant.paymentAmount"), prop: "paymentPrice" }, { default: o(() => [n(f, { amount: a.form.paymentPrice }, null, 8, ["amount"])]), _: 1 }, 8, ["label"]), n(T, { props: "agreeToS" }, { default: o(() => [n(h, { modelValue: a.form.agreeToS, "onUpdate:modelValue": e[5] || (e[5] = (r) => a.form.agreeToS = r) }, { default: o(() => [l("div", De, [l("div", null, s(a.$t("upms.tenant.iHaveReadAndAgree")), 1), n(t, { link: "", plain: "", type: "primary", onClick: e[4] || (e[4] = X((r) => a.dialogVisible = true, ["stop"])) }, { default: o(() => [D(s(a.$t("upms.tenant.serviceAgreement")), 1)]), _: 1 })])]), _: 1 }, 8, ["modelValue"])]), _: 1 }), n(k, { justify: "center", style: { width: "100%" } }, { default: o(() => [n(t, { type: "primary", onClick: g.onSubmit }, { default: o(() => [D(s(a.$t("upms.tenant.buyNow")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 })])) : u("", true), a.activeName == "third" ? (i(), p("div", _e, [n(R, { tenantId: a.tenantInfoMy.id, isPay: "1" }, null, 8, ["tenantId"]), _.showHome ? (i(), I(k, { key: 0, justify: "center", style: { width: "100%" } }, { default: o(() => [n(t, { type: "primary", icon: "House", onClick: g.goHome }, { default: o(() => [D(s(a.$t("commons.backHome")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 })) : u("", true)])) : u("", true)]), _: 1 }, 8, ["rules", "model"])])]), _: 1 })]), n(F, { modelValue: a.dialogVisible, "onUpdate:modelValue": e[8] || (e[8] = (r) => a.dialogVisible = r), width: "50%", "close-on-click-modal": false, "close-on-press-escape": false, onClose: e[9] || (e[9] = (r) => a.dialogVisible = false) }, { footer: o(() => [n(t, { type: "primary", onClick: e[7] || (e[7] = (r) => a.dialogVisible = false) }, { default: o(() => [D(s(a.$t("upms.tenant.confirm")), 1)]), _: 1 })]), default: o(() => [l("div", null, [n(z, { value: a.agreementContent, "onUpdate:value": e[6] || (e[6] = (r) => a.agreementContent = r), disabled: true }, null, 8, ["value"])])]), _: 1 }, 8, ["modelValue"]), n(E, { ref: "payQrCodeRef", showBtn: false, amount: a.form.paymentPrice, onOnClose: g.closePayDialog, onChangePayType: e[10] || (e[10] = (r) => g.showPayDialog(a.form, r)) }, null, 8, ["amount", "onOnClose"])], 64);
}
const je = J(ie, [["render", $e], ["__scopeId", "data-v-5849253b"]]);
export {
  je as default
};
