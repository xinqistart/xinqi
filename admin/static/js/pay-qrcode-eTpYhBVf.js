import { n as V, R as B, bi as k, S as D, _ as Q, r as i, j as z, c as y, o as p, g as j, B as v, e as d, b as a, h as l, f as g, z as r, ai as P, ba as N, w as $ } from "./index-DAdfXJ2i.js";
import { V as I } from "./vue-qr-Ee6k57BN.js";
const { $t: R } = V(), q = { components: { VueQr: I }, props: { needBeforeClose: { type: Boolean, default: false }, showBtn: { type: Boolean, default: true }, btnText: { type: String, default: R("components.pay.pay") }, amount: { type: [String, Number], default: "" } }, setup(e, o) {
  const n = B({ payDialog: false, loading: false, payQrCode: "", paymentType: "2" });
  function s(t) {
    e.needBeforeClose ? o.emit("beforeClose", () => {
      o.emit("onClose"), t();
    }) : (o.emit("onClose"), t());
  }
  function _() {
    n.payDialog = false, o.emit("onClose");
  }
  function C() {
    m(), o.emit("onShow");
  }
  function f(t) {
    n.payQrCode = t, n.payDialog = true, o.emit("onShow");
  }
  function m() {
    n.loading = true, n.payQrCode = null, o.emit("changePayType", { paymentType: n.paymentType, done: (t) => {
      n.payQrCode = t, n.payDialog = true, n.loading = false;
    } });
  }
  return { ...D(n), priceToThousands: k, payTypeChange: m, onShowPayDialog: f, onShow: C, beforeClose: s, onClose: _ };
} }, F = { key: 0, class: "flex-c" }, U = { class: "relative text-center" }, x = { key: 0, class: "text-center" }, E = { key: 1 };
function M(e, o, n, s, _, C) {
  const f = i("el-button"), m = N, t = i("FontIcon"), c = i("el-row"), h = i("el-radio"), b = i("el-radio-group"), w = i("vue-qr"), T = i("el-dialog"), S = z("loading");
  return p(), y("div", null, [n.showBtn ? (p(), j(f, { key: 0, text: "", onClick: s.onShow, type: "primary" }, { default: l(() => [g(r(n.btnText), 1)]), _: 1 }, 8, ["onClick"])) : v("", true), d("div", { onClick: o[0] || (o[0] = (...u) => s.onShow && s.onShow(...u)) }, [P(e.$slots, "default")]), a(T, { modelValue: e.payDialog, "onUpdate:modelValue": o[2] || (o[2] = (u) => e.payDialog = u), title: e.$t("components.pay.selectPayment"), "before-close": s.beforeClose, "append-to-body": true, width: "30%" }, { default: l(() => [n.amount ? (p(), y("div", F, [g(r(e.$t("components.pay.pleasePay")), 1), a(m, { class: "mx-2", amount: n.amount, size: "xl" }, null, 8, ["amount"]), g(r(e.$t("components.pay.yuan")), 1)])) : v("", true), a(c, { justify: "center" }, { default: l(() => [a(b, { modelValue: e.paymentType, "onUpdate:modelValue": o[1] || (o[1] = (u) => e.paymentType = u), size: "large", onChange: s.payTypeChange }, { default: l(() => [a(h, { value: "2", border: "" }, { default: l(() => [a(c, { align: "middle", justify: "center" }, { default: l(() => [a(t, { class: "mr-[6px]", icon: "jl_zhifubaozhifu", "font-size": "24px", style: { color: "#2d8cf0" } }), d("div", null, r(e.$t("components.pay.alipay")), 1)]), _: 1 })]), _: 1 }), a(h, { value: "1", border: "" }, { default: l(() => [a(c, { align: "middle", justify: "center" }, { default: l(() => [a(t, { class: "mr-[6px]", icon: "jl_weixin", "font-size": "24px", style: { color: "#4caf50" } }), d("div", null, r(e.$t("components.pay.wechat")), 1)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "onChange"])]), _: 1 }), a(c, { justify: "center", style: { "min-height": "280px", "margin-top": "10px" } }, { default: l(() => [$((p(), y("div", U, [e.payQrCode && e.payQrCode != "error" ? (p(), y("div", x, [a(w, { logoSrc: e.paymentType == "2" ? "/img/alipay.png" : "/img/wxpay.png", text: e.payQrCode, logoScale: 0.15, logoMargin: 5, logoCornerRadius: 0, size: 280 }, null, 8, ["logoSrc", "text"]), d("div", null, r(e.$t("components.pay.payTip")), 1)])) : (p(), y("div", E, [d("p", null, r(e.$t("components.pay.selectPaymentTip")), 1)]))])), [[S, e.loading]]), o[3] || (o[3] = d("br", null, null, -1))]), _: 1 })]), _: 1 }, 8, ["modelValue", "title", "before-close"])]);
}
const H = Q(q, [["render", M]]);
export {
  H as P
};
