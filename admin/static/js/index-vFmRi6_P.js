import { A as B, R as O, p as z, U as D, K as F, q as I, S as P, b1 as T, _ as j, r as i, j as N, c as q, o as u, b as l, h as o, e as S, g, B as R, f as p, z as d, w as E, a_ as H } from "./index-DAdfXJ2i.js";
import { t as M, b as K, p as Z, d as G, c as J, v as Q } from "./tenantapply-7t4Fiwj5.js";
import { M as W } from "./list-CpVj7t9v.js";
import "./user-CcdA_mZX.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const X = { components: { MaterialList: W }, setup() {
  var _a, _b;
  const { proxy: a } = B(), e = O({ form: { imgUrl: void 0, userAvatar: void 0, longitude: "", latitude: "", address: "", companyLicense: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: M, dialogShopApply: false, applyForm: { status: 1, applyDetail: "" }, applyRules: { status: [{ required: true, message: a.$t("upms.tenantapply.selectReviewStatus"), trigger: "blur" }], applyDetail: [] }, verifyRow: { id: "" }, addressInfo: [] }), w = z(null), s = (_a = D()) == null ? void 0 : _a.userInfo, c = (_b = F()) == null ? void 0 : _b.permissions, k = I(() => ({ addBtn: !!c["upms:tenantapply:add"], delBtn: !!c["upms:tenantapply:del"], editBtn: !!c["upms:tenantapply:edit"], viewBtn: !!c["upms:tenantapply:get"] }));
  function f() {
    const { href: t } = a.$router.resolve({ path: "/upms/tenantapply/form" });
    window.open(t, "_blank");
  }
  function y(t, n) {
    window.openType = n, window.tenantId = s.tenantId, n == "add" ? (e.form.imgUrl = [], e.form.userAvatar = []) : (e.form.userAvatar = [e.form.userAvatar], e.form.imgUrl = [e.form.imgUrl], e.addressInfo = [e.form.longitude, e.form.latitude, e.form.address]), t();
  }
  function v() {
    w.value.validate((t) => {
      if (t) e.tableLoading = true, Q(Object.assign({ id: e.verifyRow.id }, e.applyForm)).then(() => {
        e.tableLoading = false, e.dialogShopApply = false, a.$message({ showClose: true, message: a.$t("upms.tenantapply.reviewSuccessful"), type: "success" }), r(e.page), a.$confirm(a.$t("upms.tenant.addTenantTip"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
          setTimeout(() => {
            D().logOut();
          }, 10);
        });
      }).catch(() => {
        e.tableLoading = false;
      });
      else return false;
    });
  }
  function _(t) {
    e.dialogShopApply = true, e.verifyRow = t;
  }
  function b(t, n) {
    t = T(t), e.paramsSearch = t, e.page.currentPage = 1, r(e.page, t), n();
  }
  function $(t) {
    const n = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = n) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = n) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(t, n) {
    e.tableLoading = true, J(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page.descs, ascs: e.page.ascs }, n, e.paramsSearch)).then((m) => {
      e.tableData = m.data.records, e.page.total = m.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function C(t) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return G(t.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function A(t, n, m, h) {
    t.imgUrl = t.imgUrl.length > 0 ? t.imgUrl[0] : "", t.userAvatar = t.userAvatar.length > 0 ? t.userAvatar[0] : "";
    const V = e.addressInfo;
    t.longitude = V[0], t.latitude = V[1], t.address = V[2], Z(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), m(), r(e.page);
    }).catch(() => {
      h();
    });
  }
  function L(t, n, m) {
    t.imgUrl = t.imgUrl.length > 0 ? t.imgUrl[0] : "", t.userAvatar = t.userAvatar.length > 0 ? t.userAvatar[0] : "";
    const h = e.addressInfo;
    t.longitude = h[0], t.latitude = h[1], t.address = h[2], K(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), n(), r(e.page);
    }).catch(() => {
      m();
    });
  }
  function U() {
    r(e.page);
  }
  return { ...P(e), permissions: c, permissionList: k, toApply: f, beforeOpen: y, submitForm: v, openVerifyView: _, searchChange: b, sortChange: $, getPageF: r, handleDel: C, handleUpdate: A, handleSave: L, refreshChange: U, formNameRef: w };
} }, Y = { class: "execution" };
function x(a, e, w, s, c, k) {
  const f = i("el-button"), y = i("el-tag"), v = i("material-list"), _ = i("avue-crud"), b = i("el-radio"), $ = i("el-radio-group"), r = i("el-form-item"), C = i("el-input"), A = i("el-form"), L = i("el-dialog"), U = H, t = N("loading");
  return u(), q("div", Y, [l(U, null, { default: o(() => [l(_, { ref: "crud", page: a.page, "onUpdate:page": e[1] || (e[1] = (n) => a.page = n), modelValue: a.form, "onUpdate:modelValue": e[2] || (e[2] = (n) => a.form = n), style: { border: "none" }, data: a.tableData, permission: s.permissionList, "table-loading": a.tableLoading, option: a.tableOption, "before-open": s.beforeOpen, onOnLoad: s.getPageF, onRefreshChange: s.refreshChange, onRowUpdate: s.handleUpdate, onRowSave: s.handleSave, onRowDel: s.handleDel, onSortChange: s.sortChange, onSearchChange: s.searchChange }, { "menu-left": o(() => [l(f, { type: "success", size: "small", onClick: e[0] || (e[0] = (n) => s.toApply()) }, { default: o(() => [p(d(a.$t("upms.tenantapply.settlementApplicationAddress")), 1)]), _: 1 })]), menu: o((n) => [s.permissions["mall:shopapply:verify"] && n.row.status == "0" ? (u(), g(f, { key: 0, type: "primary", link: "", icon: "finished", onClick: (m) => s.openVerifyView(n.row) }, { default: o(() => [p(d(a.$t("upms.tenantapply.review")), 1)]), _: 1 }, 8, ["onClick"])) : R("", true)]), status: o((n) => [S("div", null, [n.row.status == "0" ? (u(), g(y, { key: 0, size: "small", type: "warning" }, { default: o(() => [p(d(a.$t("upms.tenantapply.inReview")), 1)]), _: 1 })) : n.row.status == "1" ? (u(), g(y, { key: 1, size: "small", type: "success" }, { default: o(() => [p(d(a.$t("upms.tenantapply.approved")), 1)]), _: 1 })) : n.row.status == "2" ? (u(), g(y, { key: 2, size: "small", type: "danger" }, { default: o(() => [p(d(a.$t("upms.tenantapply.notApproved")), 1)]), _: 1 })) : R("", true)])]), companyLicense: o((n) => [S("div", null, [S("div", null, [n.row.companyLicense ? (u(), g(v, { key: 0, value: [n.row.companyLicense], disabled: true, type: "image", num: 1, width: 90, height: 90 }, null, 8, ["value"])) : R("", true)])])]), "companyLicense-form": o(() => [S("div", null, [l(v, { value: [a.form.companyLicense], disabled: true, type: "image", num: 1, width: 150, height: 150 }, null, 8, ["value"])])]), _: 1 }, 8, ["page", "modelValue", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), l(L, { modelValue: a.dialogShopApply, "onUpdate:modelValue": e[6] || (e[6] = (n) => a.dialogShopApply = n), title: a.$t("upms.tenantapply.review"), width: "40%" }, { footer: o(() => [E((u(), g(f, { type: "primary", onClick: e[5] || (e[5] = (n) => s.submitForm()) }, { default: o(() => [p(d(a.$t("upms.tenantapply.submitImmediately")), 1)]), _: 1 })), [[t, a.tableLoading]])]), default: o(() => [l(A, { ref: "formNameRef", model: a.applyForm, rules: a.applyRules, "label-width": 110 }, { default: o(() => [l(r, { label: a.$t("upms.tenantapply.reviewStatus"), prop: "status" }, { default: o(() => [l($, { modelValue: a.applyForm.status, "onUpdate:modelValue": e[3] || (e[3] = (n) => a.applyForm.status = n), class: "ml-4" }, { default: o(() => [l(b, { value: 1, size: "large" }, { default: o(() => [p(d(a.$t("upms.tenantapply.pass")), 1)]), _: 1 }), l(b, { value: 2, size: "large" }, { default: o(() => [p(d(a.$t("upms.tenantapply.fail")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), l(r, { label: a.$t("upms.tenantapply.reviewExplanation"), prop: "applyDetail" }, { default: o(() => [l(C, { modelValue: a.applyForm.applyDetail, "onUpdate:modelValue": e[4] || (e[4] = (n) => a.applyForm.applyDetail = n), type: "textarea" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model", "rules"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const pe = j(X, [["render", x]]);
export {
  pe as default
};
