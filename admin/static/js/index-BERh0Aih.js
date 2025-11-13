import { A as z, R as F, p as O, U as D, K as B, q as P, E as j, S as N, b1 as T, $ as q, _ as M, r as p, j as E, c as H, o as h, b as r, h as l, e as f, z as d, w as L, f as g, D as K, g as b, B as k, a_ as Z } from "./index-DAdfXJ2i.js";
import { t as G, b as J, p as Q, d as W, c as X, v as Y } from "./shopapply-CD2Zl2jR.js";
import { M as x } from "./list-CpVj7t9v.js";
import "./shopinfo-DR8w8ULX.js";
import "./user-CcdA_mZX.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./supplier-CbDQWRL9.js";
const ee = { components: { MaterialList: x }, setup() {
  var _a, _b;
  const { proxy: a } = z(), e = F({ form: { imgUrl: void 0, userAvatar: void 0, address: void 0, latitude: void 0, longitude: void 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: G, dialogShopApply: false, applyForm: { status: 1, applyDetail: "" }, applyRules: { status: [{ required: true, message: a.$t("mall.shopapply.selectReviewStatus"), trigger: "blur" }], applyDetail: [] }, verifyRow: void 0, addressInfo: [] }), $ = O(null), s = (_a = D()) == null ? void 0 : _a.userInfo, c = (_b = B()) == null ? void 0 : _b.permissions, I = P(() => ({ addBtn: !!c["mall:shopapply:add"], delBtn: !!c["mall:shopapply:del"], editBtn: !!c["mall:shopapply:edit"], viewBtn: !!c["mall:shopapply:get"] }));
  j(() => e.addressInfo, (o) => {
    o.length > 0 ? e.form.address = o[2] : e.form.address = "";
  }, { deep: true, immediate: true });
  function y() {
    var _a2;
    let o = s.tenantId;
    ((_a2 = D()) == null ? void 0 : _a2.userInfo.type) == "-1" && (o = q());
    const { href: n } = a.$router.resolve({ path: "/mall/shop/shopapply/form", query: { tenant_id: o } });
    window.open(n, "_blank");
  }
  function v(o, n) {
    window.openType = n, window.tenantId = s.tenantId, n == "add" ? (e.form.imgUrl = [], e.form.userAvatar = []) : (e.form.userAvatar = [e.form.userAvatar], e.form.imgUrl = [e.form.imgUrl], e.addressInfo = e.form.address ? [e.form.longitude, e.form.latitude, e.form.address] : []), o();
  }
  function C() {
    $.value.validate((o) => {
      if (o) e.tableLoading = true, Y(Object.assign({ id: e.verifyRow.id }, e.applyForm)).then(() => {
        e.tableLoading = false, e.dialogShopApply = false, a.$message({ showClose: true, message: a.$t("mall.shopapply.reviewSuccessful"), type: "success" }), i(e.page);
      }).catch(() => {
        e.tableLoading = false;
      });
      else return false;
    });
  }
  function A(o) {
    e.dialogShopApply = true, e.verifyRow = o;
  }
  function V(o, n) {
    o = T(o), e.paramsSearch = o, e.page.currentPage = 1, i(e.page, o), n();
  }
  function S(o) {
    const n = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = n) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = n) : (e.page.ascs = "", e.page.descs = ""), i(e.page);
  }
  function i(o, n) {
    e.tableLoading = true, X(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs }, n, e.paramsSearch)).then((m) => {
      e.tableData = m.data.records, e.page.total = m.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function w(o) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return W(o.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), i(e.page);
    });
  }
  function _(o, n, m, u) {
    o.imgUrl = o.imgUrl.length > 0 ? o.imgUrl[0] : "", o.userAvatar = o.userAvatar.length > 0 ? o.userAvatar[0] : "";
    const t = e.addressInfo;
    o.longitude = t[0], o.latitude = t[1], o.address = t[2], Q(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), m(), i(e.page);
    }).catch(() => {
      u();
    });
  }
  function U(o, n, m) {
    o.imgUrl = o.imgUrl.length > 0 ? o.imgUrl[0] : "", o.userAvatar = o.userAvatar.length > 0 ? o.userAvatar[0] : "";
    const u = e.addressInfo;
    o.longitude = u[0], o.latitude = u[1], o.address = u[2], J(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), n(), i(e.page);
    }).catch(() => {
      m();
    });
  }
  function R() {
    i(e.page);
  }
  return { ...N(e), permissions: c, permissionList: I, toApply: y, beforeOpen: v, submitForm: C, openVerifyView: A, searchChange: V, sortChange: S, getPageF: i, handleDel: w, handleUpdate: _, handleSave: U, refreshChange: R, formNameRef: $ };
} }, ae = { class: "execution" }, oe = { class: "jl-text-tips" }, te = { class: "jl-text-tips" };
function le(a, e, $, s, c, I) {
  const y = p("el-button"), v = p("el-tag"), C = p("avue-input-map"), A = p("Position"), V = p("el-icon"), S = p("material-list"), i = p("avue-crud"), w = p("el-option"), _ = p("el-select"), U = p("el-form-item"), R = p("el-input"), o = p("el-form"), n = p("el-dialog"), m = Z, u = E("loading");
  return h(), H("div", ae, [r(m, null, { default: l(() => [r(i, { ref: "crud", page: a.page, "onUpdate:page": e[4] || (e[4] = (t) => a.page = t), modelValue: a.form, "onUpdate:modelValue": e[5] || (e[5] = (t) => a.form = t), style: { border: "none" }, data: a.tableData, permission: s.permissionList, "table-loading": a.tableLoading, option: a.tableOption, "before-open": s.beforeOpen, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { "menu-left": l(() => [r(y, { type: "primary", size: "small", onClick: e[0] || (e[0] = (t) => s.toApply()) }, { default: l(() => [g(d(a.$t("mall.shopapply.settlementApplicationAddress")), 1)]), _: 1 })]), menu: l((t) => [s.permissions["mall:shopapply:verify"] && t.row.status == "0" ? (h(), b(y, { key: 0, type: "primary", link: "", icon: "finished", onClick: (se) => s.openVerifyView(t.row) }, { default: l(() => [g(d(a.$t("mall.shopapply.review")), 1)]), _: 1 }, 8, ["onClick"])) : k("", true)]), status: l((t) => [f("div", null, [t.row.status == "0" ? (h(), b(v, { key: 0, size: "small", type: "warning" }, { default: l(() => [g(d(a.$t("mall.shopapply.underReview")), 1)]), _: 1 })) : t.row.status == "1" ? (h(), b(v, { key: 1, size: "small", type: "success" }, { default: l(() => [g(d(a.$t("mall.shopapply.approved")), 1)]), _: 1 })) : t.row.status == "2" ? (h(), b(v, { key: 2, size: "small", type: "danger" }, { default: l(() => [g(d(a.$t("mall.shopapply.notApproved")), 1)]), _: 1 })) : k("", true)])]), "address-form": l(() => [f("div", null, [r(C, { modelValue: a.addressInfo, "onUpdate:modelValue": e[1] || (e[1] = (t) => a.addressInfo = t), placeholder: a.$t("mall.shopinfo.selectMapLocation"), style: { width: "100%" } }, null, 8, ["modelValue", "placeholder"]), L(f("div", null, [r(V, null, { default: l(() => [r(A)]), _: 1 }), g(d(a.form.address), 1)], 512), [[K, a.form.address]])])]), "imgUrl-form": l(() => [f("div", null, [r(S, { value: a.form.imgUrl, "onUpdate:value": e[2] || (e[2] = (t) => a.form.imgUrl = t), type: "image", num: 1, width: 150, height: 150 }, null, 8, ["value"]), f("p", oe, d(a.$t("commons.imageSizeTip", { size: "100*100" })), 1)])]), "userAvatar-form": l(() => [f("div", null, [r(S, { value: a.form.userAvatar, "onUpdate:value": e[3] || (e[3] = (t) => a.form.userAvatar = t), type: "image", num: 1, width: 150, height: 150 }, null, 8, ["value"]), f("p", te, d(a.$t("commons.imageSizeTip", { size: "100*100" })), 1)])]), _: 1 }, 8, ["page", "modelValue", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), r(n, { modelValue: a.dialogShopApply, "onUpdate:modelValue": e[9] || (e[9] = (t) => a.dialogShopApply = t), title: a.$t("mall.shopapply.review"), width: "40%" }, { footer: l(() => [L((h(), b(y, { type: "primary", onClick: e[8] || (e[8] = (t) => s.submitForm()) }, { default: l(() => [g(d(a.$t("mall.shopapply.submitNow")), 1)]), _: 1 })), [[u, a.tableLoading]])]), default: l(() => [r(o, { ref: "formNameRef", model: a.applyForm, rules: a.applyRules, "label-width": 110 }, { default: l(() => [r(U, { label: a.$t("mall.shopapply.reviewStatus"), prop: "status" }, { default: l(() => [r(_, { modelValue: a.applyForm.status, "onUpdate:modelValue": e[6] || (e[6] = (t) => a.applyForm.status = t), placeholder: a.$t("mall.shopapply.selectReviewStatus") }, { default: l(() => [r(w, { label: a.$t("mall.shopapply.approve"), value: 1 }, null, 8, ["label"]), r(w, { label: a.$t("mall.shopapply.reject"), value: 2 }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), r(U, { label: a.$t("mall.shopapply.reviewComments"), prop: "applyDetail" }, { default: l(() => [r(R, { modelValue: a.applyForm.applyDetail, "onUpdate:modelValue": e[7] || (e[7] = (t) => a.applyForm.applyDetail = t), type: "textarea" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model", "rules"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const ce = M(ee, [["render", le]]);
export {
  ce as default
};
