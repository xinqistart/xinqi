import { A as O, p as w, E as $, t as D, bl as N, q as A, U as L, _ as B, g as d, o as n, h as o, B as c, b as r, r as g, c as v, f, z as p, ba as U } from "./index-DAdfXJ2i.js";
import { a as q } from "./orderinfo-BW26vGJU.js";
import { a as V } from "./supplier-CbDQWRL9.js";
import z from "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
const E = { components: { SupplierDetailsDialog: z }, props: { listOrderItem: { type: Array, default: () => [] }, checkbox: { type: Boolean, default: false }, isCashier: { type: Boolean, default: false } }, emits: ["handleOrderItemStatus", "updateOrderLogistics", "handleSelectionChange"], setup(t, h) {
  const { proxy: i } = O(), s = w(), S = w(false), I = w(void 0);
  $(() => t.listOrderItem, () => {
    s.value.clearSelection(), s.value.toggleAllSelection();
  }, { deep: true }), D(() => {
    s.value.clearSelection(), i.$nextTick(() => {
      h.emit("handleSelectionChange", []);
    }), t.listOrderItem && s.value.toggleAllSelection(), e();
  }), N(() => {
    i.$nextTick(() => {
      h.emit("handleSelectionChange", []);
    }), t.listOrderItem && s.value.toggleAllSelection();
  });
  const a = A(() => {
    var _a;
    return (_a = L()) == null ? void 0 : _a.userInfo;
  }), k = (l) => {
    let u = l.status != "2" && l.status != "4" && l.status != "1" && l.status != "3";
    return l.supplierId ? a.value.type === "3" || a.value.type === "-1" || a.value.type === "1" ? u : false : u;
  }, y = (l) => {
    h.emit("handleOrderItemStatus", l);
  }, C = (l) => {
    let u = l.filter((_) => _.status != "2" && _.status != "4" && _.status != "1" && _.status != "3");
    i.$nextTick(() => {
      h.emit("handleSelectionChange", u);
    });
  }, P = (l) => {
    q(l.orderId).then((u) => {
      I.value = u.data, S.value = true;
    });
  }, m = (l) => {
    h.emit("updateOrderLogistics", l);
  }, b = w([]);
  function e() {
    V().then((l) => {
      b.value = l.data;
    });
  }
  function T(l) {
    var _a;
    return l ? ((_a = b.value.find((u) => u.id == l)) == null ? void 0 : _a.name) || l : "\u2014";
  }
  return { formOrder: I, orderLogisticsDialog: S, showDialog: P, multipleTableRef: s, updateOrderLogistics: m, handleOrderItemStatus: y, onSelectable: k, handleSelectionChange: C, getSupplierName: T };
} }, R = { key: 0 }, j = { key: 0 }, G = { key: 0, class: "grid-content" }, H = { key: 1 };
function M(t, h, i, s, S, I) {
  const a = g("el-table-column"), k = g("el-image"), y = g("el-tag"), C = g("SupplierDetailsDialog"), P = g("el-tooltip"), m = U, b = g("el-table");
  return n(), d(b, { ref: "multipleTableRef", data: i.listOrderItem, border: "", style: { width: "100%" }, onSelectionChange: s.handleSelectionChange }, { default: o(() => [i.checkbox ? (n(), d(a, { key: 0, selectable: s.onSelectable, type: "selection", width: "55" }, null, 8, ["selectable"])) : c("", true), r(a, { align: "center", prop: "picUrl", label: t.$t("commons.image"), width: "120" }, { default: o((e) => [r(k, { src: e.row.picUrl, width: "40", height: "40" }, null, 8, ["src"])]), _: 1 }, 8, ["label"]), r(a, { align: "left", prop: "spuName", label: t.$t("mall.orderinfo.productName"), width: "180" }, { default: o((e) => [i.isCashier ? c("", true) : (n(), v("span", R, [e.row.deliveryType == 1 ? (n(), d(y, { key: 0, size: "small" }, { default: o(() => [f(p(t.$t("mall.orderinfo.deliveryType1")), 1)]), _: 1 })) : e.row.deliveryType ? (n(), d(y, { key: 1, type: "success", size: "small" }, { default: o(() => [f(p(e.row.deliveryType == "2" ? t.$t("mall.orderinfo.deliveryType2") : e.row.deliveryType == "3" ? t.$t("mall.orderinfo.deliveryType3") : t.$t("mall.orderinfo.deliveryType0")), 1)]), _: 2 }, 1024)) : c("", true)])), f(" " + p(e.row.spuName), 1)]), _: 1 }, 8, ["label"]), r(a, { align: "center", prop: "specInfo", label: t.$t("mall.orderinfo.specification") }, { default: o((e) => [f(p(e.row.specInfo || e.row.spuName), 1)]), _: 1 }, 8, ["label"]), r(a, { align: "center", prop: "supplierId", "min-width": "125", label: t.$t("mall.goodsspu.supplierId") }, { default: o((e) => [r(P, { effect: "dark", content: "\u4F9B\u5E94\u5546\u5546\u54C1\u7531\u4F9B\u5E94\u5546\u53D1\u8D27", placement: "top" }, { default: o(() => [e.row.supplierId ? (n(), v("div", j, [r(C, { supplierId: e.row.supplierId, text: s.getSupplierName(e.row.supplierId) }, null, 8, ["supplierId", "text"])])) : c("", true)]), _: 2 }, 1024)]), _: 1 }, 8, ["label"]), r(a, { align: "center", prop: "salesPrice", label: t.$t("mall.ordercashier.unitPrice"), width: "100" }, { default: o((e) => [r(m, { color: "#555555", amount: e.row.salesPrice }, null, 8, ["amount"])]), _: 1 }, 8, ["label"]), r(a, { align: "center", prop: "quantity", label: t.$t("mall.orderinfo.quantity"), width: "80" }, null, 8, ["label"]), r(a, { align: "center", prop: "salesPriceTotal", label: t.$t("mall.orderinfo.totalPrice"), width: "100" }, { default: o((e) => [r(m, { color: "#555555", amount: e.row.salesPrice * e.row.quantity }, null, 8, ["amount"])]), _: 1 }, 8, ["label"]), i.isCashier ? c("", true) : (n(), d(a, { key: 1, align: "center", prop: "freightPrice", label: t.$t("mall.ordercashier.freightPrice"), width: "100" }, { default: o((e) => [f(" \uFFE5" + p(e.row.freightPrice), 1)]), _: 1 }, 8, ["label"])), r(a, { align: "center", prop: "status", label: t.$t("commons.status"), width: "100" }, { default: o((e) => [e.row.status != "0" ? (n(), v("div", G, [r(y, { type: "danger", onClick: (T) => s.handleOrderItemStatus(e.row) }, { default: o(() => [f(p(e.row.statusDesc), 1)]), _: 2 }, 1032, ["onClick"])])) : (n(), v("div", H, p(e.row.statusDesc), 1))]), _: 1 }, 8, ["label"]), i.isCashier ? c("", true) : (n(), d(a, { key: 2, align: "center", prop: "paymentCouponPrice", label: t.$t("mall.orderinfo.couponDeductionAmount"), width: "100" }, { default: o((e) => [r(m, { color: "#555555", amount: e.row.paymentCouponPrice }, null, 8, ["amount"])]), _: 1 }, 8, ["label"])), i.isCashier ? c("", true) : (n(), d(a, { key: 3, align: "center", prop: "paymentPointsPrice", label: t.$t("mall.ordercashier.paymentPointsPrice"), width: "100" }, { default: o((e) => [r(m, { color: "#555555", amount: e.row.paymentPointsPrice }, null, 8, ["amount"])]), _: 1 }, 8, ["label"])), r(a, { align: "center", prop: "salesPriceTotal", label: t.$t("mall.orderinfo.paymentAmount"), width: "110" }, { default: o((e) => [r(m, { color: "#555555", amount: e.row.paymentPrice }, null, 8, ["amount"])]), _: 1 }, 8, ["label"]), i.isCashier ? c("", true) : (n(), d(a, { key: 4, align: "center", prop: "salesPriceTotal", label: t.$t("mall.ordercashier.paymentPoints"), width: "110" }, { default: o((e) => [f(p(e.row.paymentPoints), 1)]), _: 1 }, 8, ["label"]))]), _: 1 }, 8, ["data", "onSelectionChange"]);
}
const X = B(E, [["render", M]]);
export {
  X as default
};
