import { be as V, _ as v, r as s, j as k, c as f, o as i, w as x, B as C, g, h as r, b as l, f as S, z as b, e as u } from "./index-DAdfXJ2i.js";
import { g as B } from "./wxapp-DzjQ_kFh.js";
const R = { name: "wx-ma-qrcode-down", components: {}, props: { appId: { type: String }, scene: { type: String, default() {
  return null;
} }, page: { type: String, default() {
  return null;
} } }, data() {
  return { headers: { Authorization: "Bearer " + V().access_token }, tableLoading: false, formQrCode: { appId: this.appId, scene: this.scene, page: this.page, width: 430, autoColor: true, lineColorRgb: null, isHyaline: false }, rulesQrCode: { lineColorRgb: [{ required: true, message: this.$t("components.wxmaqrcodedown.chooseColor"), trigger: "blur" }] }, qrCodeScene: "" };
}, created() {
}, unmounted: function() {
}, mounted() {
}, beforeUnmount() {
}, computed: {}, methods: { getMaCode(o) {
  this.$refs[o].validate((t) => {
    if (t) {
      this.tableLoading = true;
      const c = this.formQrCode;
      let a = this.formQrCode.lineColorRgb;
      if (a) {
        a = a.replace("rgb(", "").replace(")", "");
        const e = a.split(",");
        c.lineColor = { r: e[0].replace(/\s*/g, ""), g: e[1].replace(/\s*/g, ""), b: e[2].replace(/\s*/g, "") };
      }
      B(c).then((e) => {
        this.tableLoading = false, this.qrCodeScene = e.data;
      }).catch(() => {
        this.tableLoading = false;
      });
    }
  });
} } }, j = { key: 0 }, L = { class: "flex items-center justify-center" }, U = ["src"], $ = { class: "jl-text-tips flex items-center justify-center" };
function N(o, t, c, a, e, _) {
  const m = s("el-option"), p = s("el-select"), d = s("el-form-item"), h = s("el-color-picker"), w = s("el-input-number"), Q = s("el-button"), q = s("el-form"), y = k("loading");
  return i(), f("div", null, [x((i(), g(q, { ref: "formQrCode", model: e.formQrCode, rules: e.rulesQrCode }, { default: r(() => [l(d, { label: o.$t("components.wxmaqrcodedown.qrCodeColor") }, { default: r(() => [l(p, { modelValue: e.formQrCode.autoColor, "onUpdate:modelValue": t[0] || (t[0] = (n) => e.formQrCode.autoColor = n), placeholder: o.$t("commons.select") }, { default: r(() => [l(m, { label: o.$t("components.wxmaqrcodedown.default"), value: true }, null, 8, ["label"]), l(m, { label: o.$t("components.wxmaqrcodedown.custom"), value: false }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), e.formQrCode.autoColor == false ? (i(), g(d, { key: 0, label: o.$t("components.wxmaqrcodedown.selectColor") }, { default: r(() => [l(h, { modelValue: e.formQrCode.lineColorRgb, "onUpdate:modelValue": t[1] || (t[1] = (n) => e.formQrCode.lineColorRgb = n), "color-format": "rgb" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"])) : C("", true), l(d, { label: o.$t("components.wxmaqrcodedown.qrCodeWidth") }, { default: r(() => [l(w, { modelValue: e.formQrCode.width, "onUpdate:modelValue": t[2] || (t[2] = (n) => e.formQrCode.width = n), size: "small", min: 280, max: 1280, placeholder: o.$t("components.wxmaqrcodedown.enterQRCodeWidth") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), l(d, { label: o.$t("components.wxmaqrcodedown.transparentBackground") }, { default: r(() => [l(p, { modelValue: e.formQrCode.isHyaline, "onUpdate:modelValue": t[3] || (t[3] = (n) => e.formQrCode.isHyaline = n), placeholder: o.$t("commons.select") }, { default: r(() => [l(m, { label: o.$t("commons.yes"), value: true }, null, 8, ["label"]), l(m, { label: o.$t("commons.no"), value: false }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), l(d, { style: { "text-align": "center" } }, { default: r(() => [l(Q, { type: "primary", onClick: t[4] || (t[4] = (n) => _.getMaCode("formQrCode")) }, { default: r(() => [S(b(o.$t("components.wxmaqrcodedown.confirm")), 1)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model", "rules"])), [[y, e.tableLoading]]), e.qrCodeScene ? (i(), f("div", j, [u("div", L, [u("img", { src: "data:image/jpg;base64," + e.qrCodeScene, width: "100%", style: { width: "200px", height: "200px" } }, null, 8, U)]), u("div", $, b(o.$t("components.wxmaqrcodedown.tip")), 1)])) : C("", true)]);
}
const H = v(R, [["render", N]]);
export {
  H as _
};
