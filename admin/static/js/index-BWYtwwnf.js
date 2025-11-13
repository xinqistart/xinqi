import { aO as y, n as F, A as W, R as A, q as E, K as M, S as H, b1 as k, _ as K, r as c, c as U, o as S, b as r, h as n, f, z as i, e as m, B as P, g as Z, a_ as J } from "./index-DAdfXJ2i.js";
import { _ as Q } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import { g as G } from "./userinfo-BgcUdIqU.js";
import { b as X, p as Y, g as x } from "./distributionorder-Dg6CYd8w.js";
import { b as ee } from "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function N(t) {
  return y.request("get", "/mall/distributionuser/page", { params: t });
}
function R(t) {
  return y.request("post", "/mall/distributionuser", { data: t });
}
function te(t) {
  return y.request("delete", "/mall/distributionuser/" + t);
}
function ae(t) {
  return y.request("put", "/mall/distributionuser", { data: t });
}
const { $t: g } = F(), oe = { dialogDrag: true, indexLabel: g("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, addBtn: false, searchMenuSpan: 7, labelWidth: 150, column: [{ label: g("commons.createTime"), prop: "createTime", sortable: true, display: false }, { label: g("mall.distributionuser.userId"), prop: "userId", display: false, slot: true, rules: [{ required: true, message: g("mall.distributionuser.userId") + g("commons.notNull"), trigger: "blur" }, { max: 31, message: g("commons.lengthTips", { length: 31 }) }] }, { label: g("mall.distributionuser.commissionTotal"), span: 24, prop: "commissionTotal", sortable: true, rules: [{ required: true, message: g("mall.distributionuser.commissionTotal") + g("commons.notNull"), trigger: "blur" }] }, { label: g("mall.distributionuser.commissionWithdrawal"), span: 24, prop: "commissionWithdrawal", sortable: true, rules: [{ required: true, message: g("mall.distributionuser.commissionWithdrawal") + g("commons.notNull"), trigger: "blur" }] }] }, ne = { components: {}, setup() {
  const { proxy: t } = W(), e = A({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: oe, selectedDistributionUser: { userId: "" }, dialogVisiblePromoters: false, promotGrade: "1", form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch2: {}, tableLoading2: false, tableOption2: ee, dialogVisibleDistributionOrder: false, orderGrade: "1", form3: {}, tableData3: [], page3: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch3: {}, tableLoading3: false, tableOption3: X, date3: [] }), B = E(() => {
    var _a;
    const a = (_a = M()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:distributionuser:add"], delBtn: !!a["mall:distributionuser:del"], editBtn: !!a["mall:distributionuser:edit"], viewBtn: !!a["mall:distributionuser:get"] };
  });
  function l() {
    t.$prompt(t.$t("mall.distributionuser.userCodeTip"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), inputPattern: /[\S]/, inputErrorMessage: t.$t("mall.distributionuser.userCodeNull") }).then(({ value: a }) => {
      e.tableLoading = true, G({ userCode: a }).then((s) => {
        e.tableLoading = false;
        const d = s.data.records;
        d.length > 0 ? (e.tableLoading = true, N({ userId: d[0].id }).then((V) => {
          V.data.records.length > 0 ? (t.$message({ showClose: true, message: t.$t("mall.distributionuser.userIsDistributor"), type: "error" }), e.tableLoading = false) : t.$confirm(t.$t("mall.distributionuser.setDistributor") + d[0].nickName + t.$t("mall.distributionuser.setDistributor2"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(() => {
            const q = d[0].id;
            R({ userId: q }).then(() => {
              t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), u(e.page), e.tableLoading = false;
            }).catch(() => {
              e.tableLoading = false;
            });
          }).catch(() => {
            e.tableLoading = false;
          });
        }).catch(() => {
          e.tableLoading = false;
        })) : (t.$message({ showClose: true, message: t.$t("mall.distributionuser.userNotExist"), type: "error" }), e.tableLoading = false);
      }).catch(() => {
        e.tableLoading = false;
      });
    });
  }
  function T(a, s) {
    a = k(a), e.paramsSearch = a, e.page.currentPage = 1, u(e.page, a), s();
  }
  function z(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), u(e.page);
  }
  function u(a, s) {
    e.tableLoading = true, N(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((d) => {
      e.tableData = d.data.records, e.page.total = d.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function I(a) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return te(a.userId);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), u(e.page);
    });
  }
  function w(a, s, d, V) {
    ae(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), u(e.page), d();
    }).catch(() => {
      V();
    });
  }
  function h(a, s, d) {
    R(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), s(), u(e.page);
    }).catch(() => {
      d();
    });
  }
  function $() {
    u(e.page);
  }
  function L(a) {
    e.selectedDistributionUser = a, e.promotGrade = "1", e.tableData2 = [], e.dialogVisiblePromoters = true, b(e.page2);
  }
  function b(a, s) {
    e.tableLoading2 = true, e.promotGrade == "1" && (s = Object.assign({ parentId: e.selectedDistributionUser.userId }, s)), e.promotGrade == "2" && (s = Object.assign({ parentSecondId: e.selectedDistributionUser.userId }, s)), G(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, s, e.paramsSearch2)).then((d) => {
      e.tableData2 = d.data.records, e.page2.total = d.data.total, e.page2.currentPage = a.currentPage, e.page2.pageSize = a.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function _(a, s) {
    a = k(a), e.paramsSearch2 = a, e.page2.currentPage = 1, b(e.page2, a), s();
  }
  function C(a) {
    e.promotGrade = a, b(e.page2);
  }
  function D(a) {
    e.selectedDistributionUser = a, e.orderGrade = "1", e.tableData3 = [], e.dialogVisibleDistributionOrder = true, p(e.page3);
  }
  function p(a, s) {
    e.tableLoading3 = true, x(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page3.descs, ascs: e.page3.ascs, distributionUserId: e.selectedDistributionUser.userId, distributionLevel: e.orderGrade, beginTime: e.date3[0], endTime: e.date3[1] }, s, e.paramsSearch3)).then((d) => {
      e.tableData3 = d.data.records, e.page3.total = d.data.total, e.page3.currentPage = a.currentPage, e.page3.pageSize = a.pageSize, e.tableLoading3 = false;
    }).catch(() => {
      e.tableLoading3 = false;
    });
  }
  function v(a, s) {
    a = k(a), e.paramsSearch3 = a, e.page3.currentPage = 1, p(e.page3, a), s();
  }
  function o(a) {
    e.orderGrade = a, p(e.page3);
  }
  function O(a) {
    a ? e.date3 = a : e.date3 = [], p(e.page3);
  }
  function j(a, s, d) {
    Y(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), p(e.page3), s();
    }).catch(() => {
      d();
    });
  }
  return { ...H(e), permissionList: B, selectUser: l, searchChange: T, sortChange: z, getPageF: u, handleDel: I, handleUpdate: w, handleSave: h, refreshChange: $, showPromoters: L, getPage2F: b, searchChange2: _, promotGradeChange: C, showDistributionOrder: D, getPage3F: p, searchChange3: v, orderGradeChange: o, dateChange3: O, handleUpdate3: j };
} }, re = { class: "execution" }, se = { style: { "margin-bottom": "20px", "text-align": "center" } }, ie = { class: "image-slot" }, le = { key: 0 }, de = { key: 1 }, ue = { key: 0 }, ge = { style: { "margin-bottom": "20px", "text-align": "center" } }, me = { class: "image-slot" };
function ce(t, e, B, l, T, z) {
  const u = c("el-button"), I = Q, w = c("avue-crud"), h = c("el-radio-button"), $ = c("el-radio-group"), L = c("Picture"), b = c("el-icon"), _ = c("el-image"), C = c("el-col"), D = c("el-row"), p = c("el-dialog"), v = J;
  return S(), U("div", re, [r(v, null, { default: n(() => [r(w, { ref: "crud", modelValue: t.form, "onUpdate:modelValue": e[1] || (e[1] = (o) => t.form = o), page: t.page, data: t.tableData, permission: l.permissionList, "table-loading": t.tableLoading, option: t.tableOption, onOnLoad: l.getPageF, onRefreshChange: l.refreshChange, onRowUpdate: l.handleUpdate, onRowSave: l.handleSave, onRowDel: l.handleDel, onSortChange: l.sortChange, onSearchChange: l.searchChange }, { "menu-left": n(() => [r(u, { type: "primary", icon: "Plus", onClick: e[0] || (e[0] = (o) => l.selectUser()) }, { default: n(() => [f(i(t.$t("mall.distributionuser.addUser")), 1)]), _: 1 })]), menu: n((o) => [r(u, { type: "primary", link: "", onClick: (O) => l.showPromoters(o.row) }, { default: n(() => [f(i(t.$t("mall.distributionuser.promoters")), 1)]), _: 1 }, 8, ["onClick"]), r(u, { type: "primary", link: "", onClick: (O) => l.showDistributionOrder(o.row) }, { default: n(() => [f(i(t.$t("mall.distributionuser.order")), 1)]), _: 1 }, 8, ["onClick"])]), userId: n(({ row: o }) => [r(I, { userId: o.userId, userInfo: o.userInfo }, null, 8, ["userId", "userInfo"])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), r(p, { modelValue: t.dialogVisiblePromoters, "onUpdate:modelValue": e[4] || (e[4] = (o) => t.dialogVisiblePromoters = o), title: t.$t("mall.distributionuser.promotersList"), width: "60%" }, { default: n(() => [m("div", se, [r($, { modelValue: t.promotGrade, "onUpdate:modelValue": e[2] || (e[2] = (o) => t.promotGrade = o), size: "small", onChange: l.promotGradeChange }, { default: n(() => [r(h, { label: "1" }, { default: n(() => [f(i(t.$t("mall.distributionuser.firstLevel")), 1)]), _: 1 }), r(h, { label: "2" }, { default: n(() => [f(i(t.$t("mall.distributionuser.secondLevel")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onChange"])]), r(w, { ref: "crud2", page: t.page2, "onUpdate:page": e[3] || (e[3] = (o) => t.page2 = o), data: t.tableData2, "table-loading": t.tableLoading2, option: t.tableOption2, onOnLoad: l.getPage2F, onSearchChange: l.searchChange2 }, { userId: n((o) => [r(D, null, { default: n(() => [r(C, { span: 8, style: { "text-align": "right" } }, { default: n(() => [r(_, { src: o.row.headimgUrl, style: { width: "50px" } }, { error: n(() => [m("div", ie, [r(b, null, { default: n(() => [r(L)]), _: 1 })])]), _: 1 }, 8, ["src"])]), _: 2 }, 1024), r(C, { span: 16, style: { "padding-left": "10px", "text-align": "left" } }, { default: n(() => [m("div", null, i(t.$t("mall.userinfo.nickName")) + "\uFF1A" + i(o.row.nickName ? o.row.nickName : "Unknow"), 1), m("div", null, i(t.$t("mall.userinfo.userCode")) + "\uFF1A" + i(o.row.userCode), 1), m("div", null, i(t.$t("mall.userinfo.phone")) + "\uFF1A" + i(o.row.phone), 1)]), _: 2 }, 1024)]), _: 2 }, 1024)]), distributionUser: n((o) => [o.row.distributionUser ? (S(), U("div", le, i(t.$t("commons.yes")), 1)) : P("", true), o.row.distributionUser ? P("", true) : (S(), U("div", de, i(t.$t("commons.no")), 1))]), commissionTotal: n((o) => [o.row.distributionUser ? (S(), U("div", ue, i(o.row.distributionUser.commissionTotal), 1)) : P("", true)]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onOnLoad", "onSearchChange"])]), _: 1 }, 8, ["modelValue", "title"]), r(p, { modelValue: t.dialogVisibleDistributionOrder, "onUpdate:modelValue": e[7] || (e[7] = (o) => t.dialogVisibleDistributionOrder = o), title: "\u63A8\u5E7F\u8BA2\u5355", width: "60%", top: "10px" }, { default: n(() => [m("div", ge, [r($, { modelValue: t.orderGrade, "onUpdate:modelValue": e[5] || (e[5] = (o) => t.orderGrade = o), size: "small", onChange: l.orderGradeChange }, { default: n(() => [r(h, { label: "1" }, { default: n(() => [f(i(t.$t("mall.distributionuser.firstLevelOrder")), 1)]), _: 1 }), r(h, { label: "2" }, { default: n(() => [f(i(t.$t("mall.distributionuser.secondLevelOrder")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onChange"])]), r(w, { ref: "crud3", page: t.page3, "onUpdate:page": e[6] || (e[6] = (o) => t.page3 = o), data: t.tableData3, "table-loading": t.tableLoading3, option: t.tableOption3, onSearchChange: l.searchChange3, onDateChange: l.dateChange3, onRowUpdate: l.handleUpdate3 }, { userId: n((o) => [o.row.userInfo ? (S(), Z(D, { key: 0 }, { default: n(() => [r(C, { span: 8, style: { "text-align": "right" } }, { default: n(() => [r(_, { src: o.row.userInfo.headimgUrl, style: { width: "50px" } }, { error: n(() => [m("div", me, [r(b, null, { default: n(() => [r(L)]), _: 1 })])]), _: 1 }, 8, ["src"])]), _: 2 }, 1024), r(C, { span: 16, style: { "padding-left": "10px", "text-align": "left" } }, { default: n(() => [m("div", null, i(t.$t("mall.userinfo.nickName")) + "\uFF1A" + i(o.row.userInfo.nickName ? o.row.userInfo.nickName : "Unknow"), 1), m("div", null, i(t.$t("mall.userinfo.userCode")) + "\uFF1A" + i(o.row.userInfo.userCode), 1), m("div", null, i(t.$t("mall.userinfo.phone")) + "\uFF1A" + i(o.row.userInfo.phone), 1)]), _: 2 }, 1024)]), _: 2 }, 1024)) : P("", true)]), orderId: n((o) => [m("div", null, i(o.row.orderInfo.orderNo), 1)]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onSearchChange", "onDateChange", "onRowUpdate"])]), _: 1 }, 8, ["modelValue"])]), _: 1 })]);
}
const $e = K(ne, [["render", ce]]);
export {
  $e as default
};
