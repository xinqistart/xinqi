import { A as B, p as N, R as S, E as q, S as T, q as O, aO as U, _ as G, r, g as c, B as D, o as d, h as n, f as k, z as y, e as m, c as _, b, ba as R, F as x, v as V } from "./index-DAdfXJ2i.js";
const A = { props: { shopId: { type: String, default: "" }, value: { type: Array, default: () => [] }, disabled: { type: Boolean, default: false } }, setup(s, p) {
  const { proxy: l } = B(), o = N(), u = S({ tableData: [], spuDataTemp: [], reload: false, tableOption: { addBtn: false, editBtn: false, addRowBtn: O(() => !s.disabled), cellBtn: false, cancelBtn: false, menuWidth: 90, labelWidth: 90, labelPosition: "right", align: "center", height: 500, index: true, column: [{ label: l.$t("mall.ordercashier.productName"), width: 200, prop: "spuId", rules: [{ required: true, message: l.$t("commons.notNull"), trigger: "blur" }] }, { label: l.$t("mall.ordercashier.productSpecification"), prop: "skuId", rules: [{ required: true, message: l.$t("commons.notNull"), trigger: "blur" }] }, { label: l.$t("mall.ordercashier.productImage"), width: 90, prop: "picUrl" }, { label: l.$t("mall.ordercashier.unitPrice"), width: 90, prop: "salesPrice" }, { label: l.$t("mall.ordercashier.stock"), width: 90, prop: "stock" }, { label: l.$t("mall.ordercashier.quantity"), width: 170, prop: "quantity", rules: [{ required: true, message: l.$t("commons.notNull"), trigger: "blur" }] }, { label: l.$t("mall.ordercashier.totalAmount"), width: 170, prop: "paymentPrice", type: "number", min: 0, precision: 2, rules: [{ required: true, message: l.$t("commons.notNull"), trigger: "blur" }] }] } });
  q(() => s.shopId, (t, e) => {
    if (t !== e) try {
      u.tableData = [], h();
    } catch {
    }
  }, { immediate: true }), q(u.tableData, () => {
    i();
  }, { deep: true });
  function i() {
    const t = u.tableData.map((e) => ({ spuId: e.spuId, skuId: e.skuId, quantity: e.quantity, paymentPrice: e.paymentPrice, salesPrice: e.salesPrice, stock: e.stock, freightPrice: 0, paymentPoints: 0, paymentCouponPrice: 0, paymentPointsPrice: 0, paymentUserGradeDiscountPrice: 0, picUrl: "", couponUserId: "" }));
    p.emit("changeSkus", t);
  }
  function h() {
    s.shopId && U.get(`/mall/goodsspu/list?shopId=${s.shopId}`).then((t) => {
      u.spuDataTemp = t.data || [];
    });
  }
  function f(t) {
    t.spuId && U.get(`/mall/goodssku/list/${t.spuId}`).then((e) => {
      t.skuDataTemp = e.data || [], t.skuId && (t.skuId = "", t.picUrl = "", t.quantity = 0, t.paymentPrice = 0, t.salesPrice = 0, t.stock = 0, i());
    });
  }
  function I(t) {
    var _a;
    const e = (_a = t.skuDataTemp) == null ? void 0 : _a.find((a) => a.id === t.skuId);
    e && (t.salesPrice = e.salesPrice, t.stock = e.stock, t.picUrl = e.picUrl, t.quantity = 1, t.paymentPrice = t.salesPrice * t.quantity, i());
  }
  function P(t) {
    return !!u.tableData.find((e) => e.skuId === t.id) || t.stock < 1;
  }
  function C(t, e) {
    t.quantity = e, t.paymentPrice = t.salesPrice * t.quantity, i();
  }
  function g(t, e) {
    t.paymentPrice = e, i();
  }
  function v(t, e) {
    u.tableData.splice(e, 1), i();
  }
  return { ...T(u), formGoodsSkuRef: o, rowDelete: v, spuChange: f, skuDisabledChange: P, skuChange: I, paymentPriceChange: g, quantityChange: C };
} }, j = { key: 1 }, E = { key: 1 };
function F(s, p, l, o, $, u) {
  const i = r("el-option"), h = r("el-select"), f = r("el-row"), I = r("el-image"), P = R, C = r("el-text"), g = r("el-input-number"), v = r("el-button"), t = r("avue-crud");
  return s.reload ? D("", true) : (d(), c(t, { key: 0, ref: "formGoodsSkuRef", option: s.tableOption, data: s.tableData }, { "spuId-header": n(({ column: e }) => [m("div", null, [k(y((e || {}).label), 1), p[0] || (p[0] = m("span", { class: "text-red-500 mr-[2px]" }, "*", -1))])]), spuId: n(({ row: e }) => [b(f, { justify: "start", align: "middle" }, { default: n(() => [b(h, { modelValue: e.spuId, "onUpdate:modelValue": (a) => e.spuId = a, class: "w-[95%]", disabled: l.disabled, placeholder: s.$t("commons.selectGoods"), filterable: "", onChange: (a) => o.spuChange(e) }, { default: n(() => [(d(true), _(x, null, V(s.spuDataTemp, (a) => (d(), c(i, { key: a.value, disabled: a.disabled, label: a.name, value: a.id }, null, 8, ["disabled", "label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "placeholder", "onChange"])]), _: 2 }, 1024)]), "skuId-header": n(({ column: e }) => [m("div", null, [k(y((e || {}).label), 1), p[1] || (p[1] = m("span", { class: "text-red-500 mr-[2px]" }, "*", -1))])]), skuId: n(({ row: e }) => [b(f, { justify: "start", align: "middle" }, { default: n(() => [b(h, { class: "w-[95%]", disabled: l.disabled, modelValue: e.skuId, "onUpdate:modelValue": (a) => e.skuId = a, placeholder: s.$t("mall.ordercashier.selectItemSpecifications"), filterable: "", onChange: (a) => o.skuChange(e) }, { default: n(() => [(d(true), _(x, null, V(e.skuDataTemp, (a) => (d(), c(i, { key: a.value, disabled: o.skuDisabledChange(a), label: a.name, value: a.id }, null, 8, ["disabled", "label", "value"]))), 128))]), _: 2 }, 1032, ["disabled", "modelValue", "onUpdate:modelValue", "placeholder", "onChange"])]), _: 2 }, 1024)]), picUrl: n(({ row: e }) => [e.picUrl ? (d(), c(I, { key: 0, src: e.picUrl, fit: "contain", style: { width: "50px", height: "50px" } }, null, 8, ["src"])) : D("", true)]), salesPrice: n(({ row: e }) => [b(P, { amount: e.salesPrice, color: "#555555" }, null, 8, ["amount"])]), stock: n(({ row: e }) => [b(C, null, { default: n(() => [k(y(e.stock), 1)]), _: 2 }, 1024)]), quantity: n(({ row: e }) => [m("div", null, [e.skuId ? (d(), c(g, { key: 0, disabled: l.disabled, "model-value": e.quantity, precision: 0, min: 1, max: e.stock, onChange: (a) => o.quantityChange(e, a) }, null, 8, ["disabled", "model-value", "max", "onChange"])) : (d(), _("div", j, "0"))])]), paymentPrice: n(({ row: e }) => [m("div", null, [e.skuId ? (d(), c(g, { key: 0, disabled: l.disabled, onChange: (a) => o.paymentPriceChange(e, a), "model-value": e.paymentPrice, precision: 2, min: 0 }, null, 8, ["disabled", "onChange", "model-value"])) : (d(), _("div", E, "0"))])]), menu: n(({ row: e, index: a }) => [l.disabled ? D("", true) : (d(), c(v, { key: 0, text: "", type: "danger", onClick: (W) => o.rowDelete(e, a) }, { default: n(() => [k(y(s.$t("commons.delete")), 1)]), _: 1 }, 8, ["onClick"]))]), _: 1 }, 8, ["option", "data"]));
}
const L = G(A, [["render", F]]);
export {
  L as default
};
