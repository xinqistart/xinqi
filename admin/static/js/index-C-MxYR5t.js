import { aO as u, n as B, A as $, R as L, K as S, q, S as I, b1 as P, _ as R, r as _, c as C, o as p, b as f, h as c, B as b, g as D, f as T, z as x, a_ as O } from "./index-DAdfXJ2i.js";
import { _ as N } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function A(e) {
  return u.request("get", "/mall/userwithdrawrecord/page", { params: e });
}
function M(e) {
  return u.request("post", "/mall/userwithdrawrecord", { data: e });
}
function z(e) {
  return u.request("delete", "/mall/userwithdrawrecord/" + e);
}
function U(e) {
  return u.request("put", "/mall/userwithdrawrecord", { data: e });
}
function V(e) {
  return u.request("put", "/mall/userwithdrawrecord/status", { data: e });
}
const { $t: a } = B(), j = { dialogDrag: true, indexLabel: a("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, addBtn: false, searchMenuSpan: 6, labelWidth: 110, searchGutter: 30, searchLabelPosition: "left", column: [{ label: a("commons.createTime"), prop: "createTime", display: false, sortable: true }, { label: a("commons.updateTime"), prop: "updateTime", minWidth: 120, display: false, sortable: true }, { label: a("mall.userwithdrawrecord.userId"), prop: "userId", sortable: true, slot: true, display: false, width: 220 }, { label: a("mall.userwithdrawrecord.withdrawType"), prop: "withdrawType", search: true, sortable: true, type: "radio", searchLabelWidth: 120, dicData: [{ label: a("mall.userwithdrawrecord.withdrawType1"), value: "1" }], rules: [{ required: true, message: a("mall.userwithdrawrecord.withdrawType") + a("commons.notNull"), trigger: "blur" }, { max: 2, message: a("commons.lengthTips", { length: 2 }) }] }, { label: a("mall.userwithdrawrecord.applyAmount"), prop: "applyAmount", sortable: true, rules: [{ required: true, message: a("mall.userwithdrawrecord.applyAmount") + a("commons.notNull"), trigger: "blur" }] }, { label: a("mall.userwithdrawrecord.paymentMethod"), prop: "paymentMethod", sortable: true, type: "radio", searchLabelWidth: 100, search: true, dicData: [{ label: a("mall.userwithdrawrecord.paymentMethod1"), value: "1" }, { label: a("mall.userwithdrawrecord.paymentMethod2"), value: "2" }], rules: [{ required: true, message: a("mall.userwithdrawrecord.paymentMethod") + a("commons.notNull"), trigger: "blur" }, { max: 2, message: a("commons.lengthTips", { length: 2 }) }] }, { label: a("mall.userwithdrawrecord.status"), prop: "status", search: true, type: "radio", sortable: true, display: false, dicData: [{ label: a("mall.goodsspu.verifyStatus0"), value: "0" }, { label: a("mall.goodsspu.verifyStatus1"), value: "1" }, { label: a("mall.goodsspu.verifyStatus2"), value: "2" }], rules: [{ required: true, message: a("mall.userwithdrawrecord.status") + a("commons.notNull"), trigger: "blur" }, { max: 2, message: a("commons.lengthTips", { length: 2 }) }] }, { label: a("mall.userwithdrawrecord.paymentDetail"), prop: "paymentDetail", sortable: true, type: "textarea", rules: [{ required: true, message: a("mall.userwithdrawrecord.paymentDetail") + a("commons.notNull"), trigger: "blur" }, { max: 1024, message: a("commons.lengthTips", { length: 1024 }) }] }, { label: a("mall.userwithdrawrecord.verifyDetail"), prop: "verifyDetail", sortable: true, display: false, type: "textarea", rules: [{ max: 50, message: a("commons.lengthTips", { length: 50 }) }] }, { label: a("mall.userwithdrawrecord.remarks"), prop: "remarks", sortable: true, rules: [{ max: 500, message: a("commons.lengthTips", { length: 500 }) }] }] }, W = { components: {}, setup() {
  var _a;
  const { proxy: e } = $(), r = L({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: j });
  let d = (_a = S()) == null ? void 0 : _a.permissions;
  const s = q(() => {
    var _a2;
    return d = (_a2 = S()) == null ? void 0 : _a2.permissions, { addBtn: !!d["mall:userwithdrawrecord:add"], delBtn: !!d["mall:userwithdrawrecord:del"], editBtn: !!d["mall:userwithdrawrecord:edit"], viewBtn: !!d["mall:userwithdrawrecord:get"] };
  });
  function y(t, o) {
    t = P(t), r.paramsSearch = t, r.page.currentPage = 1, n(r.page, t), o();
  }
  function v(t) {
    const o = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (r.page.descs = "", r.page.ascs = o) : t.order == "descending" ? (r.page.ascs = "", r.page.descs = o) : (r.page.ascs = "", r.page.descs = ""), n(r.page);
  }
  function n(t, o) {
    r.tableLoading = true, A(Object.assign({ current: t.currentPage, size: t.pageSize, descs: r.page.descs, ascs: r.page.ascs }, o, r.paramsSearch)).then((i) => {
      r.tableData = i.data.records, r.page.total = i.data.total, r.page.currentPage = t.currentPage, r.page.pageSize = t.pageSize, r.tableLoading = false;
    }).catch(() => {
      r.tableLoading = false;
    });
  }
  function m(t) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return z(t.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), n(r.page);
    });
  }
  function h(t, o, i, k) {
    U(t).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), i(), n(r.page);
    }).catch(() => {
      k();
    });
  }
  function g(t, o, i) {
    M(t).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), o(), n(r.page);
    }).catch(() => {
      i();
    });
  }
  function l() {
    n(r.page);
  }
  function w(t, o) {
    e.$prompt(e.$t("mall.userwithdrawrecord.enterReviewDetails"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel") }).then(({ value: i }) => {
      V({ status: t, id: o.id, verifyDetail: i }).then(() => {
        n(r.page);
      });
    });
  }
  return { ...I(r), permissions: d, permissionList: s, searchChange: y, sortChange: v, getPageF: n, handleDel: m, handleUpdate: h, handleSave: g, refreshChange: l, verify: w };
} }, F = { class: "execution" }, E = { key: 0 };
function G(e, r, d, s, y, v) {
  const n = N, m = _("el-button"), h = _("avue-crud"), g = O;
  return p(), C("div", F, [f(g, null, { default: c(() => [f(h, { ref: "crud", page: e.page, data: e.tableData, permission: s.permissionList, modelValue: e.form, "onUpdate:modelValue": r[0] || (r[0] = (l) => e.form = l), "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { userId: c((l) => [f(n, { userId: l.row.userId, userInfo: l.row.userInfo }, null, 8, ["userId", "userInfo"])]), menu: c((l) => [l.row.status == "0" ? (p(), C("div", E, [s.permissions["mall:userwithdrawrecord:edit"] ? (p(), D(m, { key: 0, link: "", icon: "check", type: "success", onClick: (w) => s.verify("1", l.row) }, { default: c(() => [T(x(e.$t("mall.userwithdrawrecord.approveAndPaid")), 1)]), _: 1 }, 8, ["onClick"])) : b("", true), s.permissions["mall:userwithdrawrecord:edit"] ? (p(), D(m, { key: 1, link: "", icon: "close", type: "danger", onClick: (w) => s.verify("2", l.row) }, { default: c(() => [T(x(e.$t("mall.userwithdrawrecord.disapprove")), 1)]), _: 1 }, 8, ["onClick"])) : b("", true)])) : b("", true)]), _: 1 }, 8, ["page", "data", "permission", "modelValue", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const X = R(W, [["render", G]]);
export {
  X as default
};
