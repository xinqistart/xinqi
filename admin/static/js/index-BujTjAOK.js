import { A as ue, p as H, aA as P, q as J, R as ce, K as fe, S as pe, b1 as B, P as ge, U as X, _ as ye, c as w, o as p, b as d, h as m, r as y, e as u, z as l, f as c, g as S, B as g, ba as he, F as be, v as ve, C as we, a_ as $e } from "./index-DAdfXJ2i.js";
import Ie from "./index-sB6MalEe.js";
import Se from "./order-goods-info-CxpE49Zn.js";
import Oe from "./order-user-info-YRvKWCyA.js";
import De from "./order-logistics-DWwBY9ly.js";
import Ce from "./order-refunds-COLRKxYr.js";
import { o as ke, a as x, b as Pe, p as Re, d as Te, g as _, c as _e, t as Le, e as Ye, f as Fe } from "./orderinfo-BW26vGJU.js";
import { d as Ne, g as ee } from "./orderrefunds-9t-28G2V.js";
import { g as Ve } from "./configlogistics-CtSivpVp.js";
import { g as He } from "./supplier-CbDQWRL9.js";
import { g as Be } from "./shopinfo-DR8w8ULX.js";
import { b as Me, l as Ue } from "./orderinfo-DpyYs_v8.js";
import { t as je } from "./orderbill-CJo17PNX.js";
import "./order-store-info-DarXLMJX.js";
import "./shopstore-oR_kr_Ba.js";
import "./clientType-BhCLU4J5.js";
import "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
const ze = { components: { OrderItem: Ie, OrderGoodsInfo: Se, OrderUserInfo: Oe, OrderRefunds: Ce, OrderLogistics: De }, props: { orderId: { type: String } }, setup(a) {
  var _a, _b;
  const { proxy: r } = ue(), D = H([]), n = P().endOf("day"), K = J(() => {
    var _a2;
    return (_a2 = X()) == null ? void 0 : _a2.initConfig;
  }), e = ce({ form: {}, formDetails: {}, date: void 0, pickerOptions: { disabledDate: void 0, cellClassName: void 0, shortcuts: [{ text: r.$t("mall.orderinfo.today"), value() {
    return [P(n).subtract(1, "days").format("YYYY-MM-DD HH:mm:ss"), n.format("YYYY-MM-DD HH:mm:ss")];
  } }, { text: r.$t("mall.orderinfo.yesterday"), value() {
    const o = P(n).subtract(2, "days"), t = P(n).subtract(1, "days");
    return [o.format("YYYY-MM-DD HH:mm:ss"), t.format("YYYY-MM-DD HH:mm:ss")];
  } }, { text: r.$t("mall.orderinfo.lastWeek"), value() {
    return [P(n).subtract(7, "days").format("YYYY-MM-DD HH:mm:ss"), n.format("YYYY-MM-DD HH:mm:ss")];
  } }, { text: r.$t("mall.orderinfo.lastMonth"), value() {
    return [P(n).subtract(1, "months").format("YYYY-MM-DD HH:mm:ss"), n.format("YYYY-MM-DD HH:mm:ss")];
  } }, { text: r.$t("mall.orderinfo.lastThreeMonths"), value() {
    return [P(n).subtract(3, "months").format("YYYY-MM-DD HH:mm:ss"), n.format("YYYY-MM-DD HH:mm:ss")];
  } }] }, status: ((_a = r.$route.query) == null ? void 0 : _a.orderStatus) ? r.$route.query.orderStatus + "" : "-1", status0: 0, status1: 0, status2: 0, status4: 0, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: Me, billData: { dialog: false, row: { orderBill: void 0 }, form: { id: void 0 }, option: je }, dialogLogistics: false, logisticsForm: { id: "", labelTemplateId: "", recAddress: "", recName: "", recTel: "", sendName: "", sendTel: "", sendAddress: "", orderItemIds: [], row: { listOrderItem: [], orderBill: void 0 }, shopId: null, deliveryType: null, logisticsCode: null, logisticsNo: null, address: null }, logisticsOption: {}, dialogRefunds: false, orderItemObj: { listOrderRefunds: [] }, orderRefunds: {}, orderRefundsStatusList: [], orderRefundsRules: { status: [{ required: true, message: r.$t("mall.orderinfo.selectRefundStatus"), trigger: "change" }] }, orderRefundsSubmitLoading: false });
  e.logisticsOption = Ue(D, e.logisticsForm);
  const v = H(null), L = H(null), $ = H(null), C = (_b = fe()) == null ? void 0 : _b.permissions, O = J(() => ({ addBtn: !!C["mall:orderinfo:add"], delBtn: !!C["mall:orderinfo:del"], editBtn: !!C["mall:orderinfo:edit"], viewBtn: !!C["mall:orderinfo:get"] }));
  function M() {
    var _a2;
    const o = JSON.parse(JSON.stringify(e.tableData));
    o.map((t) => {
      t.shopId = t.$shopId, t.appType = t.$appType, t.orderType = t.$orderType, t.deliveryWay = t.$deliveryWay, t.paymentType = t.$paymentType, t.deliveryType = t.$deliveryType, t.status = t.statusDesc, t.isPay = t.isPay == 1 ? r.$t("mall.orderinfo.paid") : r.$t("mall.orderinfo.unpaid"), t.orderLogistics && (t.userNameOrderLogistics = t.recName, t.telNumOrderLogistics = t.recTel, t.addressOrderLogistics = t.recAddress);
      let i = "";
      t.listOrderItem.map((I) => {
        i = i + I.spuName + " \xD7" + I.quantity + `    
`;
      }), t.name = i;
    }), (_a2 = r.$Export) == null ? void 0 : _a2.excel({ columns: e.tableOption.column, data: o });
  }
  function Y(o) {
    e.dialogRefunds = true, e.orderRefunds = {}, e.orderItemObj = { listOrderRefunds: [] }, ee(o.id).then((t) => {
      e.orderItemObj = t.data;
      const i = e.orderItemObj.listOrderRefunds[0];
      e.orderRefundsStatusList = [], o.status == "1" && i.status == "1" && (e.orderRefundsStatusList = [{ label: r.$t("mall.orderinfo.agreeToRefund"), value: "11" }, { label: r.$t("mall.orderinfo.rejectRefund"), value: "12" }]), o.status == "2" && (i.status == "2" && (e.orderRefundsStatusList = [{ label: r.$t("mall.orderinfo.waitingForReturn"), value: "21" }, { label: r.$t("mall.orderinfo.rejectReturnRefund"), value: "22" }]), i.status == "21" && (e.orderRefundsStatusList = [{ label: r.$t("mall.orderinfo.receivedReturnAgreeRefund"), value: "211" }, { label: r.$t("mall.orderinfo.receivedReturnRejectRefund"), value: "212" }]));
    });
  }
  function U(o) {
    r.$prompt(r.$t("mall.orderinfo.enterPrice"), r.$t("commons.tip"), { confirmButtonText: r.$t("commons.confirm"), cancelButtonText: r.$t("commons.cancel"), inputType: "number", inputPattern: /\S/, inputErrorMessage: r.$t("mall.orderinfo.enterPrice") }).then(({ value: t }) => {
      Fe({ id: o.id, paymentPrice: t }).then(() => {
        h(e.page);
      });
    });
  }
  function j(o) {
    e.status = o.paneName, e.page.currentPage = 1, h(e.page);
  }
  function b(o, t) {
    e.tableLoading = true, e.form = o, x(o.id).then((i) => {
      e.formDetails = i.data, o.userInfo = i.data.userInfo, o.app = i.data.app, o.orderLogistics = i.data.orderLogistics, v.value.rowView(o, t), e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function z(o) {
    r.$confirm(r.$t("mall.orderinfo.confirmCancelOrder"), r.$t("commons.tip"), { confirmButtonText: r.$t("commons.confirm"), cancelButtonText: r.$t("commons.cancel"), type: "warning" }).then(function() {
      return Ye(o.id).then(() => {
        r.$message({ showClose: true, message: r.$t("mall.orderinfo.cancelSuccess"), type: "success" }), h(e.page);
      });
    });
  }
  const k = J(() => {
    var _a2;
    return (_a2 = X()) == null ? void 0 : _a2.userInfo;
  });
  function R(o) {
    return new Promise((t) => {
      k.value.type == "3" && k.value.supplierId ? He(k.value.supplierId).then((i) => {
        t(i.data);
      }) : Be(o).then((i) => {
        t(i.data);
      });
    });
  }
  function A(o) {
    e.logisticsForm.id = "", e.logisticsForm.deliveryType = "1", e.logisticsForm.logisticsNo = "", e.logisticsForm.logisticsCode = "", e.logisticsForm.labelTemplateId = "", e.logisticsForm.row = o, e.logisticsForm.shopId = o.shopId, e.logisticsForm.recAddress = o.recAddress, e.logisticsForm.recName = o.recName, e.logisticsForm.recTel = o.recTel, R(o.shopId).then((t) => {
      e.logisticsForm.sendName = t.name, e.logisticsForm.sendTel = t.phone, e.logisticsForm.sendAddress = t.address;
    }), e.logisticsForm.orderItemIds = [], e.dialogLogistics = true;
  }
  function E(o) {
    const t = ge(o);
    D.value = [], t.row = JSON.parse(JSON.stringify(e.form)), t.row.listOrderItem = t.listOrderItem, t.shopId = t.row.shopId, t.orderItemIds = t.row.listOrderItem.map((i) => i.id), t.id || (t.logisticsNo = "", t.logisticsName = "", t.logisticsCode = "", t.recAddress = t.row.recAddress, t.recName = t.row.recName, t.recTel = t.row.recTel), e.logisticsForm = t, R(t.shopId).then((i) => {
      e.logisticsForm.sendName = i.name, e.logisticsForm.sendTel = i.phone, e.logisticsForm.sendAddress = i.address;
    }), e.dialogLogistics = true, Ve().then((i) => {
      if (D.value = i.data, i.data) {
        const I = t.logisticsCode ? i.data.find((N) => N.code === t.logisticsCode) : void 0;
        I ? D.value = I.labelTemplates : D.value = [], r.$nextTick(() => {
          L.value.updateDic("labelTemplateId", D.value);
        });
      }
    });
  }
  function q(o) {
    r.$confirm(r.$t("mall.orderinfo.confirmPickUpOrder"), r.$t("commons.tip"), { confirmButtonText: r.$t("commons.confirm"), cancelButtonText: r.$t("commons.cancel"), type: "warning" }).then(function() {
      return Le(o.id).then(() => {
        r.$message({ showClose: true, message: r.$t("mall.orderinfo.pickUpSuccess"), type: "success" }), h(e.page);
      });
    });
  }
  function G(o, t) {
    if (o.orderId = o.row.id, o.orderItemIds = o.orderItemIds ? o.orderItemIds.join(",") : "", !o.orderItemIds || !o.orderItemIds.length) {
      r.$message({ showClose: true, message: r.$t("mall.orderinfo.selectOrderItem"), type: "warning" }), t();
      return;
    }
    o.id && o.deliveryType == 1 ? o.orderLogisticsId = o.id : o.orderLogisticsId = "", o.weight || (o.weight = 0), o.logisticsNo = o.logisticsNo ? o.logisticsNo.replace(/\s/g, "") : o.logisticsNo, _e(o).then(() => {
      r.$message({ showClose: true, message: r.$t("mall.orderinfo.shipSuccess"), type: "success" }), e.dialogLogistics = false, e.tableLoading = true, t(), h(e.page), e.logisticsForm = { id: "", labelTemplateId: "", recAddress: "", recName: "", recTel: "", sendName: "", sendTel: "", sendAddress: "", orderItemIds: [], row: { listOrderItem: [], orderBill: void 0 }, shopId: null, deliveryType: null, logisticsCode: null, logisticsNo: null, address: null };
    }).catch(() => {
      t();
    });
  }
  function s(o) {
    e.page.currentPage = 1, o ? e.date = o : e.date = [], h(e.page);
  }
  function f(o, t) {
    o = B(o), e.paramsSearch = o, e.page.currentPage = 1, h(e.page, o), t();
  }
  function W(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), h(e.page);
  }
  function F() {
    let o = B({ id: a.orderId });
    e.date && e.date.length > 0 && (o = B({ beginTime: e.date[0], endTime: e.date[1] })), _({ ...o, current: 1, size: 0, status: "0" }).then((t) => {
      e.status0 = t.data.total;
    }), _({ ...o, current: 1, size: 0, status: "1" }).then((t) => {
      e.status1 = t.data.total;
    }), _({ ...o, current: 1, size: 0, status: "2" }).then((t) => {
      e.status2 = t.data.total;
    }), _({ ...o, current: 1, size: 0, status: "4" }).then((t) => {
      e.status4 = t.data.total;
    });
  }
  function h(o, t) {
    e.tableLoading = true, _(B(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs, status: e.status != "-1" ? e.status : null, beginTime: e.date ? e.date[0] : "", endTime: e.date ? e.date[1] : "", id: a.orderId || (t == null ? void 0 : t.id) }, t, e.paramsSearch))).then((i) => {
      e.tableData = i.data.records, e.page.total = i.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false, F();
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function te(o) {
    r.$confirm(r.$t("commons.confirmDelete"), r.$t("commons.tip"), { confirmButtonText: r.$t("commons.confirm"), cancelButtonText: r.$t("commons.cancel"), type: "warning" }).then(function() {
      return Te(o.id);
    }).then(() => {
      r.$message({ showClose: true, message: r.$t("commons.delSuccess"), type: "success" }), h(e.page);
    });
  }
  function oe(o, t, i, I) {
    Re(o).then(() => {
      r.$message({ showClose: true, message: r.$t("commons.updateSuccess"), type: "success" }), i(), h(e.page);
    }).catch(() => {
      I();
    });
  }
  function ae(o, t, i) {
    Pe(o).then(() => {
      r.$message({ showClose: true, message: r.$t("commons.addSuccess"), type: "success" }), t(), h(e.page);
    }).catch(() => {
      i();
    });
  }
  function re() {
    h(e.page);
  }
  function se(o) {
    x(o.id).then((t) => {
      e.billData.row = t.data, e.billData.form = t.data.orderBill ? t.data.orderBill : {}, e.billData.dialog = true;
    });
  }
  function ne(o, t) {
    e.billData.row && e.billData.form && e.billData.form.id && (e.billData.row.orderBill = e.billData.form, ke(e.billData.form).then(() => {
      r.$message({ showClose: true, message: r.$t("commons.updateSuccess"), type: "success" }), e.billData.dialog = false, h(e.page), t();
    }));
  }
  function le(o) {
    e.logisticsForm.orderItemIds = o.map((t) => t.id);
  }
  function ie(o) {
    Ne(o).then(() => {
      e.orderRefundsSubmitLoading = false, ee(o.orderItemId).then((t) => {
        const i = t.data.data;
        Y(i);
      }).catch(() => {
        this.orderRefundsSubmitLoading = false;
      });
    }).catch(() => {
      this.orderRefundsSubmitLoading = false;
    }), this.$refs.orderRefunds.validate((t) => {
      if (t) this.orderRefundsSubmitLoading = true;
      else return false;
    });
  }
  function de({ columns: o, data: t }) {
    const i = [];
    return o.length > 0 && o.forEach((I, N) => {
      let Q = I.property;
      if (Q == "name") {
        let T = 0, V = 0;
        t.map((me) => {
          me.listOrderItem.map((Z) => {
            V += Z.paymentPrice, T += Z.quantity;
          });
        }), i[N] = r.$t("mall.orderinfo.aggregateSales") + T + r.$t("mall.orderinfo.aggregateAmount") + V.toFixed(2);
      } else if (Q == "salesPrice") {
        let T = 0;
        t.map((V) => {
          T += Number(V.paymentPrice);
        }), i[N] = r.$t("mall.orderinfo.amountPaid") + T.toFixed(2);
      }
    }), i;
  }
  return { ...pe(e), initConfig: K, userInfo: k, orderLogisticsRef: $, crudLogisticsRef: L, permissions: C, permissionList: O, exportExcel: M, handleOrderItemStatus: Y, handleEditPrice: U, handleClickStatus: j, openView: b, orderCancelF: z, showDialogLogistics: A, updateOrderLogistics: E, takeGoodsF: q, deliveryF: G, dateChange: s, searchChange: f, sortChange: W, getCount: F, getPageF: h, handleDel: te, handleUpdate: oe, handleSave: ae, refreshChange: re, showDialogBill: se, billDataSubmit: ne, logisticsHandleSelectionChange: le, orderRefundsSubmit: ie, summaryMethod: de, crud: v };
} }, Ae = { class: "order-num" }, Ee = { class: "order-num" }, qe = { class: "order-num" }, Ge = { class: "order-num" }, We = { style: { float: "left", "margin-right": "10px" } }, Je = { style: { "text-align": "left" } }, Ke = { class: "grid-content" }, Qe = { class: "grid-content" }, Ze = { key: 0, class: "grid-content" }, Xe = { class: "flex-none" }, xe = { class: "flex-1 mx-[5px]" }, et = { class: "spu-name" }, tt = { class: "spec-info" }, ot = { class: "flex-none" }, at = { class: "price-info" }, rt = { key: 0 }, st = { key: 1 }, nt = { class: "flex items-center justify-end" }, lt = { class: "grid-content" }, it = { class: "grid-content" }, dt = { style: { "text-align": "left" } }, mt = { class: "grid-content" }, ut = { class: "grid-content" }, ct = { key: 0, class: "grid-content" }, ft = { key: 1, class: "grid-content" }, pt = { key: 2, class: "grid-content" }, gt = { key: 3, class: "grid-content" }, yt = { class: "grid-content" }, ht = { class: "grid-content" }, bt = { class: "mt-[-40px]" };
function vt(a, r, D, n, K, e) {
  const v = y("el-tab-pane"), L = y("el-tabs"), $ = y("el-button"), C = y("el-date-picker"), O = y("el-tag"), M = y("order-item"), Y = y("order-logistics"), U = y("order-user-info"), j = y("el-image"), b = he, z = y("avue-crud"), k = y("avue-form"), R = y("el-dialog"), A = y("order-goods-info"), E = y("el-drawer"), q = y("order-refunds"), G = $e;
  return p(), w("div", null, [d(L, { modelValue: a.status, "onUpdate:modelValue": r[0] || (r[0] = (s) => a.status = s), type: "border-card", onTabClick: n.handleClickStatus }, { default: m(() => [d(v, { name: "-1" }, { label: m(() => [u("span", null, l(a.$t("mall.orderinfo.allOrders")), 1)]), _: 1 }), d(v, { name: "0" }, { label: m(() => [u("span", null, [c(l(a.$t("mall.orderinfo.pendingPayment")), 1), u("label", Ae, "\uFF08" + l(a.status0) + "\uFF09", 1)])]), _: 1 }), d(v, { name: "1" }, { label: m(() => [u("span", null, [c(l(a.$t("mall.orderinfo.toBeShipped")), 1), u("label", Ee, "\uFF08" + l(a.status1) + "\uFF09", 1)])]), _: 1 }), d(v, { name: "2" }, { label: m(() => [u("span", null, [c(l(a.$t("mall.orderinfo.toBeReceived")), 1), u("label", qe, "\uFF08" + l(a.status2) + "\uFF09", 1)])]), _: 1 }), d(v, { name: "3" }, { label: m(() => [u("span", null, l(a.$t("mall.orderinfo.completedOrders")), 1)]), _: 1 }), d(v, { name: "4" }, { label: m(() => [u("span", null, [c(l(a.$t("mall.orderinfo.toBeReviewed")), 1), u("label", Ge, "\uFF08" + l(a.status4) + "\uFF09", 1)])]), _: 1 }), d(v, { name: "5" }, { label: m(() => [u("span", null, l(a.$t("mall.orderinfo.canceledOrders")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabClick"]), d(G, { class: "mt-[-15px]" }, { default: m(() => [d(z, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": r[4] || (r[4] = (s) => a.form = s), page: a.page, "onUpdate:page": r[5] || (r[5] = (s) => a.page = s), data: a.tableData, permission: n.permissionList, "table-loading": a.tableLoading, option: a.tableOption, "summary-method": n.summaryMethod, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange, onDateChange: n.dateChange }, { "menu-left": m(() => [d($, { type: "primary", icon: "download", size: "small", onClick: r[1] || (r[1] = we((s) => n.exportExcel(), ["stop"])) }, { default: m(() => [c(l(a.$t("mall.orderinfo.exportOrders")), 1)]), _: 1 })]), "menu-right": m(() => [u("div", We, [d(C, { modelValue: a.date, "onUpdate:modelValue": r[2] || (r[2] = (s) => a.date = s), shortcuts: a.pickerOptions && a.pickerOptions.shortcuts, "disabled-date": a.pickerOptions && a.pickerOptions.disabledDate, "cell-class-name": a.pickerOptions && a.pickerOptions.cellClassName, type: "datetimerange", "value-format": "YYYY-MM-DD HH:mm:ss", "range-separator": a.$t("commons.to"), "start-placeholder": a.$t("mall.orderinfo.startDate"), onChange: r[3] || (r[3] = (s) => n.dateChange(a.date)), "end-placeholder": a.$t("mall.orderinfo.endDate"), align: "left" }, null, 8, ["modelValue", "shortcuts", "disabled-date", "cell-class-name", "range-separator", "start-placeholder", "end-placeholder"])])]), status: m((s) => [u("div", Je, [u("div", Ke, [c(l(a.$t("mall.orderinfo.orderStatus")) + " ", 1), d(O, { type: s.row.status == "2" || s.row.status == "3" || s.row.status == "4" ? "success" : "danger", effect: "dark", size: "small" }, { default: m(() => [c(l(s.row.statusDesc), 1)]), _: 2 }, 1032, ["type"])]), u("div", Qe, [c(l(a.$t("mall.orderinfo.paymentStatus")) + " ", 1), d(O, { type: s.row.isPay == "1" ? "success" : "danger", effect: "dark", size: "small" }, { default: m(() => [c(l(s.row.isPay == "1" ? a.$t("mall.orderinfo.paid") : a.$t("mall.orderinfo.unpaid")), 1)]), _: 2 }, 1032, ["type"])]), s.row.appraisesStatus ? (p(), w("div", Ze, [c(l(a.$t("mall.orderinfo.reviewStatus")) + " ", 1), d(O, { type: s.row.appraisesStatus != "0" ? "success" : "danger", effect: "dark", size: "small" }, { default: m(() => [c(l(s.row.appraisesStatus == "0" ? a.$t("mall.orderinfo.notReviewed") : s.row.appraisesStatus == "1" ? a.$t("mall.orderinfo.reviewed") : s.row.appraisesStatus == "2" ? a.$t("mall.orderinfo.reviewedWithAdditionalComments") : ""), 1)]), _: 2 }, 1032, ["type"])])) : g("", true)])]), "orderNo-form": m(() => [d(M, { form: a.form }, null, 8, ["form"])]), "listOrderItem-form": m(() => [u("div", null, [d(Y, { ref: "orderLogisticsRef", form: a.formDetails, onUpdateOrderLogistics: n.updateOrderLogistics }, null, 8, ["form", "onUpdateOrderLogistics"])])]), "userId-form": m(() => [d(U, { form: a.form }, null, 8, ["form"])]), name: m((s) => [u("div", null, [(p(true), w(be, null, ve(s.row.listOrderItem, (f, W) => (p(), w("div", { key: W, class: "flex order-item items-center" }, [u("div", Xe, [d(j, { src: f.picUrl, class: "order-item-image mt-[5px]", fit: "contain" }, null, 8, ["src"])]), u("div", xe, [u("div", et, [f.supplierId && n.initConfig.VERSION_01_SUPPLIER_STATUS === 1 ? (p(), S(O, { key: 0, type: "success", size: "small", class: "mr-1", title: "\u4F9B\u5E94\u5546\u5546\u54C1\u7531\u4F9B\u5E94\u5546\u53D1\u8D27" }, { default: m(() => [c(l(a.$t("mall.goodsspu.supplierId")), 1)]), _: 1 })) : g("", true), s.row.orderType != "0" ? (p(), S(O, { key: 1, size: "small", type: "danger" }, { default: m(() => [c(l(s.row.orderType == "1" ? a.$t("mall.orderinfo.bargain") : s.row.orderType == "2" ? a.$t("mall.orderinfo.groupBuy") : s.row.orderType == "3" ? a.$t("mall.orderinfo.flashSale") : ""), 1)]), _: 2 }, 1024)) : g("", true), c(" " + l(f.spuName), 1)]), u("div", tt, l(f.specInfo), 1)]), u("div", ot, [u("div", at, [d(b, { color: "#555555", amount: f.paymentPrice }, null, 8, ["amount"]), f.paymentCouponPrice ? (p(), w("div", rt, [c(l(a.$t("mall.orderinfo.applyCoupon")) + "(", 1), d(b, { color: "#555555", amount: f.paymentCouponPrice }, null, 8, ["amount"]), r[11] || (r[11] = c(") ", -1))])) : g("", true), f.paymentPoints ? (p(), w("div", st, [r[12] || (r[12] = c(" +", -1)), d(b, { size: "sm", color: "#555555", b: false, amount: f.paymentPointsPrice }, null, 8, ["amount"]), c("( " + l(a.$t("mall.orderinfo.applyPointsUse", { value: f.paymentPoints })) + ") ", 1)])) : g("", true), u("div", null, " \xD7 " + l(f.quantity) + l(a.$t("mall.orderinfo.pieces")), 1), u("div", nt, [f.status != "0" ? (p(), S(O, { key: 0, type: "danger", size: "small", class: "mr-[5px]", onClick: (F) => n.handleOrderItemStatus(f) }, { default: m(() => [c(l(f.statusDesc), 1)]), _: 2 }, 1032, ["onClick"])) : g("", true), f.status == "0" && s.row.isPay == "0" && !s.row.status && n.userInfo.type != "3" ? (p(), S($, { key: 1, class: "!contents", icon: "edit", link: "", type: "primary", size: "small", onClick: (F) => n.handleEditPrice(f) }, { default: m(() => [c(l(a.$t("mall.orderinfo.adjustPrice")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true)])])])]))), 128))])]), createTime: m((s) => [u("div", null, [u("div", lt, l(s.row.createTime), 1), u("div", it, l(s.row.orderNo), 1)])]), salesPrice: m((s) => [u("div", dt, [u("div", mt, [c(l(a.$t("mall.orderinfo.orderAmount")), 1), d(b, { color: "#555555", amount: s.row.salesPrice }, null, 8, ["amount"])]), u("div", ut, [c(l(a.$t("mall.orderinfo.shippingFee")) + " ", 1), d(b, { color: "#555555", b: false, amount: s.row.freightPrice }, null, 8, ["amount"])]), s.row.paymentPointsPrice ? (p(), w("div", ct, [c(l(a.$t("mall.orderinfo.pointsDeduction")), 1), d(b, { color: "#555555", b: false, amount: s.row.paymentPointsPrice }, null, 8, ["amount"])])) : g("", true), s.row.paymentCouponPrice ? (p(), w("div", ft, [c(l(a.$t("mall.orderinfo.couponDeduction")), 1), d(b, { color: "#555555", b: false, amount: s.row.paymentCouponPrice }, null, 8, ["amount"])])) : g("", true), s.row.paymentUserGradeDiscountPrice ? (p(), w("div", pt, [c(l(a.$t("mall.orderinfo.levelDeduction")), 1), d(b, { color: "#555555", b: false, amount: s.row.paymentUserGradeDiscountPrice }, null, 8, ["amount"])])) : g("", true), s.row.paymentVipDiscountPrice ? (p(), w("div", gt, [c(l(a.$t("mall.orderinfo.memberDeduction")), 1), d(b, { color: "#555555", b: false, amount: s.row.paymentVipDiscountPrice }, null, 8, ["amount"])])) : g("", true), u("div", yt, [c(l(a.$t("mall.orderinfo.paymentAmount")) + "\uFF1A", 1), d(b, { amount: s.row.paymentPrice }, null, 8, ["amount"])]), u("div", ht, l(a.$t("mall.orderrefunds.paymentPoints")) + l(s.row.paymentPoints), 1)])]), menu: m((s) => [n.permissions["mall:orderinfo:get"] ? (p(), S($, { key: 0, type: "primary", link: "", onClick: (f) => n.openView(s.row, s.index) }, { default: m(() => [c(l(a.$t("mall.orderinfo.orderDetails")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true), n.permissions["mall:orderinfo:edit"] && s.row.deliveryWay == "1" && s.row.status == "1" ? (p(), S($, { key: 1, type: "primary", link: "", onClick: (f) => n.showDialogLogistics(s.row) }, { default: m(() => [c(l(a.$t("mall.orderinfo.ship")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true), n.permissions["mall:orderinfo:edit"] && s.row.deliveryWay == "2" && s.row.status == "1" ? (p(), S($, { key: 2, type: "primary", link: "", onClick: (f) => n.takeGoodsF(s.row) }, { default: m(() => [c(l(a.$t("mall.orderinfo.pickUp")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true), n.permissions["mall:orderinfo:edit"] && s.row.isPay == "0" && !s.row.status ? (p(), S($, { key: 3, type: "primary", link: "", onClick: (f) => n.orderCancelF(s.row) }, { default: m(() => [c(l(a.$t("commons.cancel")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true), n.permissions["mall:orderbill:index"] && s.row.isPay == "1" ? (p(), S($, { key: 4, type: "primary", link: "", onClick: (f) => n.showDialogBill(s.row) }, { default: m(() => [c(l(a.$t("mall.orderinfo.invoiceInformation")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "summary-method", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange", "onDateChange"]), d(R, { modelValue: a.billData.dialog, "onUpdate:modelValue": r[7] || (r[7] = (s) => a.billData.dialog = s), title: a.$t("mall.orderinfo.invoiceStatus"), width: "60%" }, { default: m(() => [d(k, { modelValue: a.billData.form, "onUpdate:modelValue": r[6] || (r[6] = (s) => a.billData.form = s), option: a.billData.option, onSubmit: n.billDataSubmit }, null, 8, ["modelValue", "option", "onSubmit"])]), _: 1 }, 8, ["modelValue", "title"]), d(E, { modelValue: a.dialogLogistics, "onUpdate:modelValue": r[9] || (r[9] = (s) => a.dialogLogistics = s), title: a.$t("mall.orderinfo.ship"), size: "80%" }, { default: m(() => [u("div", bt, [d(k, { ref: "crudLogisticsRef", modelValue: a.logisticsForm, "onUpdate:modelValue": r[8] || (r[8] = (s) => a.logisticsForm = s), class: "mb-[20px]", option: a.logisticsOption, onSubmit: n.deliveryF }, { orderItemIds: m(() => [d(A, { listOrderItem: a.logisticsForm.row.listOrderItem, checkbox: true, onHandleOrderItemStatus: n.handleOrderItemStatus, onHandleSelectionChange: n.logisticsHandleSelectionChange }, null, 8, ["listOrderItem", "onHandleOrderItemStatus", "onHandleSelectionChange"])]), _: 1 }, 8, ["modelValue", "option", "onSubmit"])])]), _: 1 }, 8, ["modelValue", "title"]), d(R, { modelValue: a.dialogRefunds, "onUpdate:modelValue": r[10] || (r[10] = (s) => a.dialogRefunds = s), title: a.$t("mall.orderinfo.refundManagement"), width: "40%" }, { default: m(() => [d(q, { orderItemObj: a.orderItemObj, onOrderRefundsSubmit: n.orderRefundsSubmit }, null, 8, ["orderItemObj", "onOrderRefundsSubmit"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const Bt = ye(ze, [["render", vt], ["__scopeId", "data-v-17e7db52"]]);
export {
  Bt as default
};
