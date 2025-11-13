import { a as Oe } from "./shopstore-oR_kr_Ba.js";
import { R as X, E as K, S as x, _ as ee, r as h, c as w, o as p, b as d, h as s, F as ae, v as re, g as I, e as c, f as g, z as u, t as ve, aq as Z, aO as T, n as Ie, A as Ce, aA as S, p as L, K as $e, q as se, U as we, bi as _e, W as B, b1 as ne, B as _, ba as De, C as de, a_ as ke } from "./index-DAdfXJ2i.js";
import { c as Fe } from "./shopinfo-DR8w8ULX.js";
import Pe from "./index-sB6MalEe.js";
import Se from "./order-goods-info-CxpE49Zn.js";
import Te from "./order-goods-info-cashier-C9kN9f6n.js";
import { P as Ye } from "./pay-qrcode-eTpYhBVf.js";
import "./order-store-info-DarXLMJX.js";
import "./clientType-BhCLU4J5.js";
import "./orderinfo-BW26vGJU.js";
import "./supplier-CbDQWRL9.js";
import "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
import "./vue-qr-Ee6k57BN.js";
const Me = { props: { shopId: { type: String, default: "" }, value: { type: String, default: "" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false } }, setup(e, l) {
  const a = X({ selectData: [], loadingData: false, selectId: e.value || "" });
  K(() => e.shopId, () => {
    n(), a.selectId = "";
  }, { immediate: true, deep: true }), K(() => e.value, () => {
    a.selectId = e.value;
  }, { immediate: true, deep: true });
  function n() {
    a.loadingData = true, Oe({ current: 1, size: 10, shopId: e.shopId }).then(($) => {
      a.loadingData = false, a.selectData = $.data.records;
    }).catch(() => {
      a.loadingData = false;
    });
  }
  function C($) {
    const f = a.selectData.find((O) => O.id === $);
    l.emit("update:value", f.id), l.emit("update:name", f.name), l.emit("change", f);
  }
  return { ...x(a), remoteMethod: n, changeItem: C };
} }, Ne = { style: { width: "100%" } }, Be = { style: { "margin-left": "10px" } }, We = { class: "jl-text-tips ml-[5px]" };
function Le(e, l, a, n, C, $) {
  const f = h("el-option"), O = h("el-select");
  return p(), w("div", Ne, [d(O, { onChange: l[0] || (l[0] = (i) => n.changeItem(i)), modelValue: e.selectId, "onUpdate:modelValue": l[1] || (l[1] = (i) => e.selectId = i), disabled: a.disabled, filterable: "", placeholder: e.$t("commons.inputPlease"), style: { width: "100%" } }, { default: s(() => [(p(true), w(ae, null, re(e.selectData, (i, k) => (p(), I(f, { key: k, label: i.name, value: i.id }, { default: s(() => [c("div", Be, [g(u(i.name), 1), c("span", We, u(i.phone), 1)])]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled", "placeholder"])]);
}
const fe = ee(Me, [["render", Le]]), Ve = { props: { value: { type: String, default: "" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false } }, setup(e, l) {
  const a = X({ selectData: [], loadingData: false, selectId: e.value || "" });
  ve(() => {
    Z(C(), 1e3);
  });
  function n(f) {
    f && f !== "" ? (a.loadingData = true, Z(C(f), 1e3)) : Z(C(e.name), 1e3);
  }
  function C(f) {
    a.loadingData = true, Fe({ current: 1, size: 99, name: f }).then((O) => {
      a.loadingData = false, a.selectData = O.data.records;
    }).catch(() => {
      a.loadingData = false;
    });
  }
  function $(f) {
    const O = a.selectData.find((i) => i.id === f);
    l.emit("update:value", O.id), l.emit("update:name", O.name), l.emit("change", O);
  }
  return { ...x(a), remoteMethod: n, changeItem: $ };
} }, He = { style: { width: "100%" } }, Ue = { style: { "margin-left": "10px" } }, qe = { class: "jl-text-tips ml-[5px]" };
function Re(e, l, a, n, C, $) {
  const f = h("el-option"), O = h("el-select");
  return p(), w("div", He, [d(O, { onChange: l[0] || (l[0] = (i) => n.changeItem(i)), modelValue: e.selectId, "onUpdate:modelValue": l[1] || (l[1] = (i) => e.selectId = i), disabled: a.disabled, filterable: "", placeholder: e.$t("commons.inputPlease"), style: { width: "100%" } }, { default: s(() => [(p(true), w(ae, null, re(e.selectData, (i, k) => (p(), I(f, { key: k, label: i.name, value: i.id }, { default: s(() => [c("div", Ue, [g(u(i.name), 1), c("span", qe, u(i.phone), 1)])]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled", "placeholder"])]);
}
const pe = ee(Ve, [["render", Re]]);
function ie(e) {
  return T.request("post", "/mall/ordercashier", { data: e });
}
function V(e) {
  return T.request("get", "/mall/ordercashier/page", { params: e });
}
function me(e) {
  return T.request("get", "/mall/ordercashier/" + e);
}
function ze(e) {
  return T.request("delete", "/mall/ordercashier/" + e);
}
function je(e) {
  return T.request("put", "/mall/ordercashier", { data: e });
}
function ue(e) {
  return T.request("put", "/mall/ordercashier/cancel", { params: { id: e } });
}
function ce(e) {
  return T.request("post", "/mall/ordercashier/unified", { data: e });
}
const { $t: m } = Ie(), Ae = { dialogType: "drawer", dialogWidth: "80%", index: false, indexLabel: m("commons.indexLabel"), menuAlign: "center", align: "center", menuWidth: 150, menuType: "text", searchShow: false, printBtn: false, editBtn: false, delBtn: false, addBtn: true, viewBtn: false, defaultExpandAll: true, searchMenuSpan: 6, searchLabelPosition: "left", labelPosition: "left", labelWidth: 110, dateBtn: false, searchGutter: 30, searchLabelWidth: 90, column: [{ label: m("mall.ordercashier.shopId"), prop: "shopId", type: "select", search: true, filterable: true, minWidth: 120, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", display: false }, { label: m("mall.ordercashier.userId"), prop: "userId", sortable: true, hide: true, display: false }, { label: m("mall.ordercashier.isPay"), prop: "isPay", type: "radio", hide: true, search: true, display: false, dicData: [{ label: m("commons.yes"), value: "1" }, { label: m("commons.no"), value: "0" }] }, { label: m("mall.ordercashier.orderNo"), prop: "orderNo", search: true, hide: true, display: false }, { label: m("mall.ordercashier.name"), prop: "name", search: false, minWidth: 400, slot: true, display: false, merges: [{ s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }] }, { label: m("mall.ordercashier.createTime"), prop: "createTime", sortable: true, minWidth: 250, slot: true, display: false }, { label: m("mall.ordercashier.orderType"), prop: "orderType", search: false, type: "radio", sortable: true, hide: true, display: false, dicData: [{ label: m("mall.orderinfo.orderType0"), value: "0" }] }, { label: m("mall.ordercashier.deliveryWay"), prop: "deliveryWay", search: false, type: "radio", sortable: true, minWidth: 100, hide: true, display: false, searchValue: "3", dicData: [{ label: m("mall.orderinfo.deliveryWay1"), value: "1" }, { label: m("mall.orderinfo.deliveryWay2"), value: "2" }, { label: m("mall.orderinfo.deliveryWay3"), value: "3" }] }, { label: m("mall.ordercashier.status"), prop: "status", type: "select", sortable: true, slot: true, minWidth: 150, search: true, display: false, dicData: [{ label: m("mall.orderinfo.status0"), value: "0" }, { label: m("mall.orderinfo.status3"), value: "3" }, { label: m("mall.orderinfo.status5"), value: "5" }] }, { label: m("mall.ordercashier.paymentType"), prop: "paymentType", search: false, type: "radio", sortable: true, hide: true, minWidth: 110, display: false, dicData: [{ label: m("mall.orderinfo.paymentType1"), value: "1" }, { label: m("mall.orderinfo.paymentType2"), value: "2" }, { label: m("mall.orderinfo.paymentType3"), value: "3" }] }, { label: m("mall.ordercashier.salesPrice"), prop: "salesPrice", sortable: true, slot: true, minWidth: 200, display: false }, { label: m("mall.ordercashier.paymentPrice"), prop: "paymentPrice", hide: true, display: false }, { label: m("mall.ordercashier.paymentTime"), prop: "paymentTime", sortable: true, hide: true, display: false }, { label: m("mall.ordercashier.closingTime"), prop: "closingTime", sortable: true, hide: true, display: false }, { label: m("commons.updateTime"), prop: "updateTime", sortable: true, hide: true, display: false }, { label: m("mall.ordercashier.remark"), prop: "remark", hide: true, display: false }], group: [{ icon: "el-icon-s-order", label: m("commons.baseInfo"), prop: "group1", column: [{ label: m("mall.orderinfo.shopId"), prop: "shopId", type: "select", filterable: true, props: { label: "name", value: "id" }, editDisabled: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: m("commons.selectShop") + m("commons.notNull"), trigger: "blur" }] }, { prop: "orderNo", formslot: true, span: 24 }] }, { icon: "el-icon-goods", label: m("mall.goodsspu.description"), prop: "group3", column: [{ prop: "listOrderItem", formslot: true, span: 24 }] }] }, Ee = { components: { OrderGoodsInfoCashier: Te, ShopSelect: pe, ShopStoreSelect: fe, PayQrCode: Ye, OrderItem: Pe, OrderGoodsInfo: Se }, setup() {
  var _a, _b;
  const { proxy: e } = Ce(), l = S().endOf("day"), a = X({ form: { listOrderItem: void 0 }, formDetails: {}, orderOfflineForm: { orderType: 0, deliveryWay: 3, paymentPrice: 0, id: "", shopId: "", shopName: "", storeId: "", storeName: "", skus: [] }, beforeOrderOfflineFormShopId: "", orderOfflineRules: { shopId: [{ required: true, message: e.$t("commons.notNull"), trigger: "blur" }], storeId: [{ required: true, message: e.$t("commons.notNull"), trigger: "blur" }], skus: [{ required: true, message: e.$t("commons.notNull"), trigger: "blur" }] }, orderOfflineDrawer: false, payQrCode: "", date: void 0, pickerOptions: { disabledDate: void 0, cellClassName: void 0, shortcuts: [{ text: e.$t("mall.ordercashier.today"), value() {
    return [S(l).subtract(1, "days").format("YYYY-MM-DD HH:mm:ss"), l.format("YYYY-MM-DD HH:mm:ss")];
  } }, { text: e.$t("mall.ordercashier.yesterday"), value() {
    const r = S(l).subtract(2, "days"), t = S(l).subtract(1, "days");
    return [r.format("YYYY-MM-DD HH:mm:ss"), t.format("YYYY-MM-DD HH:mm:ss")];
  } }, { text: e.$t("mall.ordercashier.lastWeek"), value() {
    return [S(l).subtract(7, "days").format("YYYY-MM-DD HH:mm:ss"), l.format("YYYY-MM-DD HH:mm:ss")];
  } }, { text: e.$t("mall.ordercashier.lastMonth"), value() {
    return [S(l).subtract(1, "months").format("YYYY-MM-DD HH:mm:ss"), l.format("YYYY-MM-DD HH:mm:ss")];
  } }, { text: e.$t("mall.ordercashier.lastThreeMonths"), value() {
    return [S(l).subtract(3, "months").format("YYYY-MM-DD HH:mm:ss"), l.format("YYYY-MM-DD HH:mm:ss")];
  } }] }, status: ((_a = e.$route.query) == null ? void 0 : _a.orderStatus) ? e.$route.query.orderStatus + "" : "-1", status0: 0, status1: 0, status2: 0, status4: 0, tableData: [], page: { deliveryWay: 3, total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: Ae }), n = L(null), C = L(null), $ = L(null), f = (_b = $e()) == null ? void 0 : _b.permissions, O = se(() => ({ addBtn: !!f["mall:orderinfo:add"], delBtn: !!f["mall:orderinfo:del"], editBtn: !!f["mall:orderinfo:edit"], viewBtn: !!f["mall:orderinfo:get"] })), i = se(() => {
    var _a2;
    return (_a2 = we()) == null ? void 0 : _a2.userInfo;
  });
  function k() {
    var _a2;
    const r = JSON.parse(JSON.stringify(a.tableData));
    r.map((t) => {
      t.shopId = t.$shopId, t.appType = t.$appType, t.orderType = t.$orderType, t.deliveryWay = t.$deliveryWay, t.paymentType = t.$paymentType, t.deliveryType = t.$deliveryType, t.status = t.statusDesc, t.isPay = t.isPay == 1 ? e.$t("mall.orderinfo.isPay1") : e.$t("mall.orderinfo.isPay0"), t.orderLogistics && (t.userNameOrderLogistics = t.recName, t.telNumOrderLogistics = t.recTel, t.addressOrderLogistics = t.recAddress);
      let b = "";
      t.listOrderItem.map((D) => {
        b = b + D.spuName + " \xD7" + D.quantity + `    
`;
      }), t.name = b;
    }), (_a2 = e.$Export) == null ? void 0 : _a2.excel({ columns: a.tableOption.column, data: r });
  }
  function Y(r) {
    a.status = r.paneName, a.page.currentPage = 1, y(a.page);
  }
  function U(r, t) {
    a.tableLoading = true, a.form = r, me(r.id).then((b) => {
      a.formDetails = b.data, r.userInfo = b.data.userInfo, r.app = b.data.app, r.orderLogistics = b.data.orderLogistics, n.value.rowView(r, t), a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function q(r) {
    e.$confirm(e.$t("mall.ordercashier.confirmCancelOrder"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return ue(r.id).then(() => {
        e.$message({ showClose: true, message: e.$t("mall.ordercashier.cancelSuccess"), type: "success" }), y(a.page);
      });
    }).catch(() => {
    });
  }
  function R(r) {
    a.page.currentPage = 1, r ? a.date = r : a.date = [], y(a.page);
  }
  function F(r, t) {
    r = ne(r), a.paramsSearch = r, a.page.currentPage = 1, y(a.page, r), t();
  }
  function M(r) {
    const t = r.prop ? r.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    r.order == "ascending" ? (a.page.descs = "", a.page.ascs = t) : r.order == "descending" ? (a.page.ascs = "", a.page.descs = t) : (a.page.ascs = "", a.page.descs = ""), y(a.page);
  }
  function N() {
    let r = {};
    a.date && a.date.length > 0 && (r = { beginTime: a.date[0], endTime: a.date[1] }), V({ ...r, current: 1, size: 0, status: "0" }).then((t) => {
      a.status0 = t.data.total;
    }), V({ ...r, current: 1, size: 0, status: "1" }).then((t) => {
      a.status1 = t.data.total;
    }), V({ ...r, current: 1, size: 0, status: "2" }).then((t) => {
      a.status2 = t.data.total;
    }), V({ ...r, current: 1, size: 0, status: "4" }).then((t) => {
      a.status4 = t.data.total;
    });
  }
  function y(r = a.page, t) {
    a.tableLoading = true, V(ne(Object.assign({ current: r.currentPage, size: r.pageSize, descs: a.page.descs, ascs: a.page.ascs, deliveryWay: 3, status: a.status != "-1" ? a.status : null, beginTime: a.date ? a.date[0] : "", endTime: a.date ? a.date[1] : "" }, t, a.paramsSearch))).then((b) => {
      a.tableData = b.data.records, a.page.total = b.data.total, a.page.currentPage = r.currentPage, a.page.pageSize = r.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function z(r) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return ze(r.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), y(a.page);
    });
  }
  function j(r, t, b, D) {
    je(r).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), b(), y(a.page);
    }).catch(() => {
      D();
    });
  }
  function A(r, t, b) {
    ie(r).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), t(), y(a.page);
    }).catch(() => {
      b();
    });
  }
  function W() {
    y(a.page);
  }
  const P = L();
  function E(r) {
    a.beforeOrderOfflineFormShopId != r.id && (a.orderOfflineForm.storeId = null, a.orderOfflineForm.storeName = null, a.orderOfflineForm.paymentPrice = 0, a.orderOfflineForm.skus = []), a.beforeOrderOfflineFormShopId = r.id;
  }
  function Q() {
  }
  function G() {
    a.orderOfflineForm.skus = [], a.orderOfflineDrawer = false, le();
  }
  function o() {
    P.value && P.value.validate((r) => {
      if (r) {
        if (a.orderOfflineForm.skus.length == 0) return e.$message({ showClose: true, message: e.$t("commons.selectGoods"), type: "warning" }), false;
        if (a.orderOfflineForm.skus.some((t) => t.skuId == null || !t.skuId)) return e.$message({ showClose: true, message: e.$t("mall.ordercashier.selectItemSpecifications"), type: "warning" }), false;
        if (a.orderOfflineForm.paymentPrice < 0) return e.$message({ showClose: true, message: e.$t("mall.ordercashier.paymentAmountMinZero"), type: "warning" }), false;
        e.$confirm(e.$t("mall.ordercashier.confirmSubmitOrder"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
          ie(a.orderOfflineForm).then((t) => {
            a.orderOfflineForm.id = t.data.id, e.$message({ showClose: true, message: e.$t("mall.ordercashier.submitSuccess"), type: "success" }), a.orderOfflineForm.paymentPrice <= 0 ? ce({ paymentType: 1, id: t.data.id }).then(() => {
              y(a.page);
            }) : (y(a.page), oe()), ye(a.orderOfflineForm);
          });
        }).catch(() => {
        });
      }
    });
  }
  function v(r) {
    a.orderOfflineForm.skus = r, H();
  }
  function H() {
    a.orderOfflineForm.paymentPrice = 0, a.orderOfflineForm.skus.forEach((r) => {
      r.paymentPrice && (a.orderOfflineForm.paymentPrice = r.paymentPrice + a.orderOfflineForm.paymentPrice);
    });
  }
  const te = L();
  function oe() {
    te.value.onShow();
  }
  function he() {
    me(a.orderOfflineForm.id).then((r) => {
      const t = r.data;
      t && t.isPay == "1" && (P.value.resetFields(), a.orderOfflineDrawer = false, a.orderOfflineForm.id = null, a.orderOfflineForm.paymentPrice = 0, y(a.page));
    });
  }
  function ge(r, { paymentType: t, done: b }) {
    ce({ paymentType: t, id: r.id }).then((D) => {
      if (D.code == 0) {
        let J = null;
        t == "1" && (J = D.data.codeUrl), t == "2" && (J = D.data.qrCode), b(J);
      }
    });
  }
  function le(r) {
    if (!r || !a.orderOfflineForm.id) {
      a.orderOfflineForm.skus = [], a.orderOfflineForm.paymentPrice = 0, a.orderOfflineDrawer = false, a.orderOfflineForm.id = null, a.orderOfflineForm.paymentPrice = 0;
      return;
    }
    if (!a.orderOfflineForm.id) {
      a.orderOfflineForm.skus = [], a.orderOfflineForm.paymentPrice = 0, r();
      return;
    }
    e.$confirm(e.$t("mall.ordercashier.closeToCancelOrder"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(() => {
      ue(a.orderOfflineForm.id).then(() => {
        P.value.resetFields();
        try {
          r();
        } catch {
        }
        a.orderOfflineDrawer = false, a.orderOfflineForm.id = null, a.orderOfflineForm.paymentPrice = 0, y(a.page);
      });
    });
  }
  function ye(r) {
    B().setItem("shopId" + i.value.id, r.shopId), B().setItem("storeId" + i.value.id, r.storeId);
  }
  function be() {
    try {
      a.orderOfflineForm.shopId = B().getItem("shopId" + i.value.id), a.orderOfflineForm.storeId = B().getItem("storeId" + i.value.id);
    } catch {
      B().removeItem("shopId" + i.value.id), B().removeItem("storeId" + i.value.id);
    }
  }
  return K(() => a.orderOfflineForm.skus, () => {
    H();
  }, { deep: true }), { ...x(a), orderLogisticsRef: $, crudLogisticsRef: C, permissions: f, permissionList: O, exportExcel: k, handleClickStatus: Y, openView: U, orderCancelF: q, dateChange: R, searchChange: F, sortChange: M, getCount: N, getPageF: y, handleDel: z, handleUpdate: j, handleSave: A, refreshChange: W, cancelOrderCashier: G, submitOrderCashier: o, changeSkus: v, changeShop: E, changeShopStore: Q, showPayDialog: ge, closePayDialog: he, closeOrderPay: le, getCacheShopId: be, showOrderPayDialog: oe, payQrCodeRef: te, priceToThousands: _e, orderOfflineFormRef: P, crud: n };
} }, Qe = { style: { float: "left", "margin-right": "10px" } }, Ge = { style: { "text-align": "left" } }, Je = { class: "grid-content" }, Ze = { class: "grid-content" }, Ke = { key: 0, class: "grid-content" }, Xe = { class: "spu-name" }, xe = { class: "spec-info" }, ea = { class: "grid-content", style: { color: "red" } }, aa = { class: "grid-content" }, ra = { key: 0, class: "grid-content" }, ta = { key: 1, class: "grid-content" }, oa = { class: "grid-content" }, la = { class: "grid-content" }, sa = { style: { "text-align": "left" } }, na = { class: "grid-content" }, da = { class: "grid-content", style: { color: "red" } }, ia = { key: 1, class: "jl-text-tips" }, ma = { class: "jl-text-tips" }, ua = { style: { width: "100%" } }, ca = { class: "pb-[25px] mx-[15px]" }, fa = { class: "mr-[10px]" };
function pa(e, l, a, n, C, $) {
  const f = h("el-tab-pane"), O = h("el-tabs"), i = h("el-button"), k = h("el-date-picker"), Y = h("el-tag"), U = h("order-item"), q = h("order-goods-info"), R = h("el-image"), F = h("el-col"), M = De, N = h("el-row"), y = h("pay-qr-code"), z = h("avue-crud"), j = ke, A = pe, W = h("el-form-item"), P = fe, E = h("el-form"), Q = h("order-goods-info-cashier"), G = h("el-drawer");
  return p(), w("div", null, [d(O, { modelValue: e.status, "onUpdate:modelValue": l[0] || (l[0] = (o) => e.status = o), type: "border-card", onTabClick: n.handleClickStatus }, { default: s(() => [d(f, { name: "-1" }, { label: s(() => [c("span", null, u(e.$t("mall.ordercashier.allOrders")), 1)]), _: 1 }), d(f, { name: "0" }, { label: s(() => [c("span", null, u(e.$t("mall.ordercashier.unpaidOrders")), 1)]), _: 1 }), d(f, { name: "3" }, { label: s(() => [c("span", null, u(e.$t("mall.ordercashier.completedOrders")), 1)]), _: 1 }), d(f, { name: "5" }, { label: s(() => [c("span", null, u(e.$t("mall.ordercashier.canceledOrders")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabClick"]), d(j, { class: "mt-[-15px]" }, { default: s(() => [d(z, { ref: "crud", modelValue: e.form, "onUpdate:modelValue": l[5] || (l[5] = (o) => e.form = o), page: e.page, "onUpdate:page": l[6] || (l[6] = (o) => e.page = o), data: e.tableData, permission: n.permissionList, "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange, onDateChange: n.dateChange }, { "menu-left": s(() => [d(i, { type: "primary", icon: "plus", size: "small", onClick: l[1] || (l[1] = de((o) => {
    n.getCacheShopId(), e.orderOfflineDrawer = true;
  }, ["stop"])) }, { default: s(() => [g(u(e.$t("mall.ordercashier.addOrder")), 1)]), _: 1 }), d(i, { type: "primary", icon: "download", size: "small", onClick: l[2] || (l[2] = de((o) => n.exportExcel(), ["stop"])) }, { default: s(() => [g(u(e.$t("mall.ordercashier.exportOrders")), 1)]), _: 1 })]), "menu-right": s(() => [c("div", Qe, [d(k, { shortcuts: e.pickerOptions && e.pickerOptions.shortcuts, "disabled-date": e.pickerOptions && e.pickerOptions.disabledDate, modelValue: e.date, "onUpdate:modelValue": l[3] || (l[3] = (o) => e.date = o), "cell-class-name": e.pickerOptions && e.pickerOptions.cellClassName, type: "datetimerange", "value-format": "YYYY-MM-DD HH:mm:ss", onChange: l[4] || (l[4] = (o) => n.dateChange(e.date)), "range-separator": e.$t("commons.to"), "start-placeholder": e.$t("mall.ordercashier.startDate"), "end-placeholder": e.$t("mall.ordercashier.endDate"), align: "left" }, null, 8, ["shortcuts", "disabled-date", "modelValue", "cell-class-name", "range-separator", "start-placeholder", "end-placeholder"])])]), status: s((o) => [c("div", Ge, [c("div", Je, [g(u(e.$t("mall.ordercashier.orderStatus")) + " ", 1), d(Y, { type: o.row.status == "2" || o.row.status == "3" || o.row.status == "4" ? "success" : "danger", effect: "dark", size: "small" }, { default: s(() => [g(u(o.row.statusDesc), 1)]), _: 2 }, 1032, ["type"])]), c("div", Ze, [g(u(e.$t("mall.ordercashier.paymentStatus")) + " ", 1), d(Y, { type: o.row.isPay == "1" ? "success" : "danger", effect: "dark", size: "small" }, { default: s(() => [g(u(o.row.isPay == "1" ? e.$t("mall.orderinfo.isPay1") : e.$t("mall.orderinfo.isPay0")), 1)]), _: 2 }, 1032, ["type"])]), o.row.appraisesStatus ? (p(), w("div", Ke, [g(u(e.$t("mall.ordercashier.reviewStatus")) + " ", 1), d(Y, { type: o.row.appraisesStatus != "0" ? "success" : "danger", effect: "dark", size: "small" }, { default: s(() => [g(u(o.row.appraisesStatus == "0" ? e.$t("mall.ordercashier.notReviewed") : o.row.appraisesStatus == "1" ? e.$t("mall.ordercashier.reviewed") : o.row.appraisesStatus == "2" ? e.$t("mall.ordercashier.reviewedWithAdditionalComments") : ""), 1)]), _: 2 }, 1032, ["type"])])) : _("", true)])]), "orderNo-form": s(() => [d(U, { isCashier: true, form: e.form }, null, 8, ["form"])]), "listOrderItem-form": s(() => [c("div", null, [d(q, { listOrderItem: e.form.listOrderItem, isCashier: true, checkbox: false }, null, 8, ["listOrderItem"])])]), name: s((o) => [c("div", null, [(p(true), w(ae, null, re(o.row.listOrderItem, (v, H) => (p(), I(N, { gutter: 10, key: H, style: { padding: "5px", border: "1px solid #eaeaea" } }, { default: s(() => [d(F, { span: 3 }, { default: s(() => [d(R, { src: v.picUrl, width: "50px", height: "50px" }, null, 8, ["src"])]), _: 2 }, 1024), d(F, { span: 13, style: { "text-align": "left" } }, { default: s(() => [c("div", Xe, u(v.spuName), 1), c("div", xe, u(v.specInfo), 1)]), _: 2 }, 1024), d(F, { span: 8 }, { default: s(() => [c("div", ea, [d(M, { amount: v.paymentPrice, b: false }, null, 8, ["amount"])]), c("div", aa, "\xD7" + u(v.quantity) + "\u4EF6", 1), v.status != "0" ? (p(), w("div", ra, [d(Y, { type: "danger" }, { default: s(() => [g(u(v.statusDesc), 1)]), _: 2 }, 1024)])) : _("", true), v.status == "0" && o.row.isPay == "0" && !o.row.status ? (p(), w("div", ta)) : _("", true)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128))])]), createTime: s((o) => [c("div", null, [c("div", oa, u(o.row.createTime), 1), c("div", la, u(o.row.orderNo), 1)])]), salesPrice: s((o) => [c("div", sa, [c("div", na, [g(u(e.$t("mall.ordercashier.orderAmount")), 1), d(M, { amount: o.row.salesPrice, color: "#555555" }, null, 8, ["amount"])]), c("div", da, [g(u(e.$t("mall.ordercashier.paymentAmount")), 1), d(M, { amount: o.row.paymentPrice }, null, 8, ["amount"])])])]), menu: s((o) => [n.permissions["mall:orderinfo:get"] ? (p(), I(i, { key: 0, type: "primary", link: "", onClick: (v) => n.openView(o.row, o.index) }, { default: s(() => [g(u(e.$t("mall.goodsappraises.orderItemId")), 1)]), _: 1 }, 8, ["onClick"])) : _("", true), n.permissions["mall:orderinfo:edit"] && o.row.isPay == "0" && !o.row.status ? (p(), I(i, { key: 1, type: "primary", link: "", onClick: (v) => n.orderCancelF(o.row) }, { default: s(() => [g(u(e.$t("commons.cancel")), 1)]), _: 1 }, 8, ["onClick"])) : _("", true), n.permissions["mall:orderinfo:edit"] && o.row.isPay != "1" && o.row.status != "5" ? (p(), I(y, { key: 2, amount: o.row.paymentPrice, onChangePayType: (v) => n.showPayDialog(o.row, v) }, null, 8, ["amount", "onChangePayType"])) : _("", true)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange", "onDateChange"])]), _: 1 }), d(G, { modelValue: e.orderOfflineDrawer, "onUpdate:modelValue": l[12] || (l[12] = (o) => e.orderOfflineDrawer = o), size: "80%", "destroy-on-close": true, "before-close": n.closeOrderPay }, { header: s(() => [c("h4", null, u(e.$t("mall.ordercashier.addOfflineOrder")), 1)]), default: s(() => [d(E, { ref: "orderOfflineFormRef", inline: true, model: e.orderOfflineForm, rules: e.orderOfflineRules, "label-width": "120px", "status-icon": "" }, { default: s(() => [d(N, null, { default: s(() => [d(F, { span: 12 }, { default: s(() => [d(W, { label: e.$t("mall.ordercashier.selectStore"), prop: "shopId", style: { width: "100%" } }, { default: s(() => [e.orderOfflineDrawer ? (p(), I(A, { key: 0, value: e.orderOfflineForm.shopId, "onUpdate:value": l[7] || (l[7] = (o) => e.orderOfflineForm.shopId = o), name: e.orderOfflineForm.shopName, "onUpdate:name": l[8] || (l[8] = (o) => e.orderOfflineForm.shopName = o), disabled: !!e.orderOfflineForm.id, onChange: n.changeShop }, null, 8, ["value", "name", "disabled", "onChange"])) : _("", true)]), _: 1 }, 8, ["label"])]), _: 1 }), d(F, { span: 12 }, { default: s(() => [d(W, { label: e.$t("mall.ordercashier.selectBranch"), prop: "storeId", style: { width: "95%" } }, { default: s(() => [e.orderOfflineForm.shopId ? (p(), I(P, { key: 0, disabled: !!e.orderOfflineForm.id, shopId: e.orderOfflineForm.shopId, value: e.orderOfflineForm.storeId, "onUpdate:value": l[9] || (l[9] = (o) => e.orderOfflineForm.storeId = o), onChange: n.changeShopStore, name: e.orderOfflineForm.storeName, "onUpdate:name": l[10] || (l[10] = (o) => e.orderOfflineForm.storeName = o) }, null, 8, ["disabled", "shopId", "value", "onChange", "name"])) : (p(), w("div", ia, u(e.$t("commons.selectShopFirst")), 1))]), _: 1 }, 8, ["label"])]), _: 1 })]), _: 1 }), e.orderOfflineForm.shopId ? _("", true) : (p(), I(W, { key: 0, label: e.$t("mall.goodsspu.description"), prop: "skus", style: { width: "98%" } }, { default: s(() => [c("div", ma, u(e.$t("commons.selectShopFirst")), 1)]), _: 1 }, 8, ["label"]))]), _: 1 }, 8, ["model", "rules"]), c("div", ua, [e.orderOfflineForm.shopId ? (p(), I(Q, { key: 0, value: e.orderOfflineForm.skus, "onUpdate:value": l[11] || (l[11] = (o) => e.orderOfflineForm.skus = o), shopId: e.orderOfflineForm.shopId, disabled: !!e.orderOfflineForm.id, onChangeSkus: n.changeSkus }, null, 8, ["value", "shopId", "disabled", "onChangeSkus"])) : _("", true)])]), footer: s(() => [d(N, { justify: "end", align: "middle" }, { default: s(() => [c("div", null, [c("div", ca, [c("span", fa, u(e.$t("mall.ordercashier.paymentAmountCol")), 1), d(M, { amount: e.orderOfflineForm.paymentPrice }, null, 8, ["amount"])])])]), _: 1 }), d(N, { justify: "end", align: "middle" }, { default: s(() => [d(i, { icon: "Close", onClick: n.closeOrderPay }, { default: s(() => [g(u(e.$t("commons.close")), 1)]), _: 1 }, 8, ["onClick"]), e.orderOfflineForm.id ? (p(), I(i, { key: 0, type: "success", icon: "WalletFilled", onClick: n.showOrderPayDialog }, { default: s(() => [g(u(e.$t("mall.ordercashier.pay")), 1)]), _: 1 }, 8, ["onClick"])) : (p(), I(i, { key: 1, type: "primary", icon: "Check", onClick: n.submitOrderCashier }, { default: s(() => [g(u(e.$t("commons.submit")), 1)]), _: 1 }, 8, ["onClick"]))]), _: 1 })]), _: 1 }, 8, ["modelValue", "before-close"]), d(y, { ref: "payQrCodeRef", showBtn: false, amount: e.orderOfflineForm.paymentPrice, onOnClose: n.closePayDialog, onChangePayType: l[13] || (l[13] = (o) => n.showPayDialog(e.orderOfflineForm, o)) }, null, 8, ["amount", "onOnClose"])]);
}
const Pa = ee(Ee, [["render", pa], ["__scopeId", "data-v-6eaecbb0"]]);
export {
  Pa as default
};
