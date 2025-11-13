import { f as V } from "./supplier-BS6wXSgi.js";
import { g as c } from "./supplier-CbDQWRL9.js";
import { A as b, R as y, S as v, _, c as S, o as $, b as s, h as a, f as h, z as w, r as p, e as d, F as B } from "./index-DAdfXJ2i.js";
const D = { props: { supplierId: { type: String }, text: { type: String, default: "\u4F9B\u5E94\u5546\u8D44\u6599" } }, setup(e) {
  const { proxy: o } = b(), l = y({ addressInfo: [], supplierInfo: { dialogVisible: false, form: {}, option: { detail: true, submitBtn: false, emptyBtn: false, ...V } } });
  function n(r = e.supplierId) {
    c(r).then((i) => {
      l.supplierInfo.form = i.data || {}, l.supplierInfo.dialogVisible = true, l.addressInfo = l.supplierInfo.form.address ? [l.supplierInfo.form.longitude, l.supplierInfo.form.latitude, l.supplierInfo.form.address] : [];
    });
  }
  return { ...v(l), showSupplierDetail: n };
} }, k = { class: "py-1" };
function C(e, o, l, n, r, i) {
  const u = p("el-button"), f = p("avue-input-map"), m = p("avue-form"), I = p("el-dialog");
  return $(), S(B, null, [s(u, { onClick: o[0] || (o[0] = (t) => n.showSupplierDetail()), link: "", icon: "Shop", type: "primary" }, { default: a(() => [h(w(e.$t("mall.goodsspu.supplierInformation")), 1)]), _: 1 }), s(I, { modelValue: e.supplierInfo.dialogVisible, "onUpdate:modelValue": o[3] || (o[3] = (t) => e.supplierInfo.dialogVisible = t), title: e.$t("mall.goodsspu.supplierInformation"), width: "800", "append-to-body": "" }, { default: a(() => [d("div", null, [s(m, { modelValue: e.supplierInfo.form, "onUpdate:modelValue": o[2] || (o[2] = (t) => e.supplierInfo.form = t), option: e.supplierInfo.option }, { address: a((t) => [d("div", k, [s(f, { modelValue: e.addressInfo, "onUpdate:modelValue": o[1] || (o[1] = (g) => e.addressInfo = g), placeholder: e.$t("mall.shopinfo.selectMapLocation"), style: { width: "100%" } }, null, 8, ["modelValue", "placeholder"])])]), _: 1 }, 8, ["modelValue", "option"])])]), _: 1 }, 8, ["modelValue", "title"])], 64);
}
const O = _(D, [["render", C]]);
export {
  O as default
};
