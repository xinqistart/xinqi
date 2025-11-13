import { aO as h, n as A, b0 as T, A as E, R as H, q as D, K as W, S as _, b1 as g, P as M, _ as x, r as f, c as K, o as P, b as d, h as u, e as Z, g as O, B as R, f as L, z as V, a_ as G } from "./index-DAdfXJ2i.js";
import { f as J } from "./organ-Uz8t_88q.js";
import { g as B } from "./user-CcdA_mZX.js";
import { t as Q, d as X, g as ee } from "./loglogin-DSKzCisN.js";
function ae(a) {
  return h.request("get", "/upms/supplieruser/page", { params: a });
}
function se(a) {
  return h.request("post", "/upms/supplieruser", { data: a });
}
function te(a) {
  return h.request("delete", "/upms/supplieruser/" + a);
}
function oe(a) {
  return h.request("put", "/upms/supplieruser", { data: a });
}
function le(a) {
  return h.request("put", "/upms/user/password", { data: a });
}
const { $t: t } = A(), re = (a, e, n) => {
  window.openType === "edit" ? n() : B({ username: e }).then((o) => {
    o.data > 0 ? n(new Error(t("mall.shopapply.userUsernameExist"))) : n();
  });
}, ne = (a, e, n) => {
  window.openType == "view" || window.openType == "edit" && window.validForm.phone == e ? n() : B({ phone: e }).then((o) => {
    o.data > 0 ? n(new Error(t("upms.tenant.phoneNumberExists"))) : n();
  });
}, ie = { dialogDrag: true, index: true, indexLabel: t("commons.indexLabel"), indexWidth: 80, menuAlign: "center", align: "center", viewBtn: true, excelBtn: true, printBtn: false, searchShow: false, labelWidth: 160, searchGutter: 50, searchLabelWidth: 120, searchMenuSpan: 6, searchLabelPosition: "left", column: [{ fixed: true, label: t("mall.supplieruser.nickName"), prop: "nickName", rules: [{ required: true, message: t("mall.supplieruser.nickName") + t("commons.notNull") }, { min: 3, max: 20, message: t("commons.lengthTips", { length: 20 }), trigger: "blur" }], labelTip: t("mall.shopuser.nickNameTip") }, { label: t("mall.supplieruser.supplierId"), prop: "supplierId", type: "select", filterable: true, search: true, props: { label: "name", value: "id" }, dicUrl: "/mall/supplier/list", editDisabled: true, rules: [{ required: true, message: t("mall.supplieruser.supplierId") + t("commons.notNull") }] }, { fixed: true, label: t("mall.supplieruser.username"), prop: "username", editDisabled: true, search: true, rules: [{ required: true, message: t("mall.supplieruser.username") + t("commons.notNull") }, { min: 3, max: 20, message: t("commons.lengthTips", { length: 20 }), trigger: "blur" }, { validator: re, trigger: "blur" }] }, { label: t("mall.supplieruser.password"), prop: "password", type: "password", value: "", hide: true, viewDisplay: false, editDisplay: false, rules: [{ required: true, min: 6, max: 20, message: t("login.passwordRuleReg6"), trigger: "blur" }] }, { label: t("upms.user.lockFlag"), prop: "lockFlag", type: "radio", slot: true, sortable: true, value: "0", rules: [{ required: true, message: t("upms.user.lockFlag") + t("commons.notNull"), trigger: "blur" }], dicData: [{ label: t("commons.yes"), value: "0" }, { label: t("commons.no"), value: "9" }] }, { width: 150, label: t("commons.createTime"), prop: "createTime", type: "datetime", format: "YYYY-MM-DD HH:mm", valueFormat: "YYYY-MM-DD HH:mm:ss", editDisabled: true, editDisplay: false, addDisplay: false, span: 24 }, { label: t("mall.supplieruser.phone"), prop: "phone", rules: [{ required: true, message: t("mall.supplieruser.phone") + t("commons.notNull") }, { min: 11, max: 11, message: t("commons.lengthTips", { length: 11 }), trigger: "blur" }, { validator: ne, trigger: "blur" }] }, { label: t("mall.supplieruser.email"), prop: "email" }, { label: t("mall.supplieruser.smsSwitchOrder"), prop: "smsSwitchOrder", type: "radio", search: true, searchLabelWidth: 120, labelWidth: 140, value: "0", labelTip: t("mall.supplieruser.smsSwitchOrderTip"), rules: [{ required: true, message: t("mall.supplieruser.smsSwitchOrder") + t("commons.notNull"), trigger: "blur" }], dicData: [{ label: t("commons.close"), value: "0" }, { label: t("commons.open"), value: "1" }] }, { label: t("mall.supplieruser.avatar"), prop: "avatar", slot: true, type: "upload", listType: "picture-img", action: "/upms/file/upload?fileType=image&dir=user/", accept: "image/png, image/jpeg", propsHttp: { res: "link" }, loadText: t("commons.uploadFileLoading"), fileSize: T.limitUploadImageSize * 1e3, labelTip: t("mall.material.uplaodFileSizeTip", { size: T.limitUploadImageSize }) }] }, pe = { components: {}, setup() {
  const { proxy: a } = E(), e = H({ form2: { password: "" }, option2: { column: [{ label: a.$t("mall.shopuser.newPassword"), labelWidth: 150, span: 22, prop: "password", rules: [{ required: true, min: 6, message: a.$t("mall.shopuser.passwordLength"), trigger: "change" }] }] }, selectRow: { id: "", username: "" }, paramsSearch: {}, dialogVisible: false, treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeData: [], tableOption: ie, checkedKeys: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "", isAsc: false }, list: [], listLoading: true, role: [], form: {}, dialogVisible2: false, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, tableLoading2: false, tableOption2: Q }), n = D(() => {
    var _a;
    return (_a = W()) == null ? void 0 : _a.permissions;
  }), o = D(() => ({ addBtn: !!n.value["mall:supplieruser:add"], delBtn: !!n.value["mall:supplieruser:del"], editBtn: !!n.value["mall:supplieruser:edit"], viewBtn: !!n.value["mall:supplieruser:get"] })), b = D(() => ({ addBtn: !!n.value["sys:loglogin:add"], delBtn: !!n.value["sys:loglogin:del"], editBtn: !!n.value["sys:loglogin:edit"], viewBtn: !!n.value["sys:loglogin:get"] }));
  c();
  function $(s, l) {
    s.id = e.selectRow.id, le(s).then(() => {
      l(), a.$notify({ title: a.$t("mall.shopuser.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 }), e.dialogVisible = false, e.form2.password = "";
    }).catch(() => {
      l();
    });
  }
  function y(s) {
    e.selectRow = s, e.dialogVisible = true;
  }
  function c() {
    J().then((s) => {
      e.treeData = s.data;
    });
  }
  function w(s) {
    e.page.currentPage = 1, i(e.page, { organId: s.id });
  }
  function S(s) {
    const l = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page.descs = "", e.page.ascs = l) : s.order == "descending" ? (e.page.ascs = "", e.page.descs = l) : (e.page.ascs = "", e.page.descs = ""), i(e.page);
  }
  function i(s, l) {
    e.listLoading = true, ae(g(Object.assign({ current: s.currentPage, size: s.pageSize, descs: e.page.descs, ascs: e.page.ascs }, l, e.paramsSearch))).then((p) => {
      e.list = p.data.records, e.page.total = p.data.total, e.page.currentPage = s.currentPage, e.page.pageSize = s.pageSize, e.listLoading = false;
    });
  }
  function v(s, l) {
    s = g(s), e.paramsSearch = s, e.page.currentPage = 1, i(e.page, s), l();
  }
  function r() {
    i(e.page);
  }
  function C(s, l, p) {
    se(g(s)).then(() => {
      i(e.page), a.$notify({ title: a.$t("mall.shopuser.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 }), l();
    }).catch(() => {
      p();
    });
  }
  function k(s, l, p, j) {
    oe(g(s)).then(() => {
      i(e.page), p(), a.$notify({ title: a.$t("mall.shopuser.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      j();
    });
  }
  function F(s, l) {
    a.$confirm(a.$t("mall.shopuser.confirmDelete") + s.username + a.$t("mall.shopuser.continuePrompt"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      te(s.id).then(() => {
        e.list.splice(l, 1), a.$notify({ title: a.$t("mall.shopuser.success"), message: a.$t("commons.delSuccess"), type: "success", duration: 2e3 });
      });
    });
  }
  function z(s, l) {
    window.validForm = M(e.form), window.openType = l, s();
  }
  function N(s) {
    e.selectRow = s, e.tableData2 = [], e.page2.currentPage = 1, e.dialogVisible2 = true, m(e.page2);
  }
  function U(s, l) {
    s = g(s), e.page2.currentPage = 1, m(e.page2, s), l();
  }
  function q(s) {
    const l = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = l) : s.order == "descending" ? (e.page2.ascs = "", e.page2.descs = l) : (e.page2.ascs = "", e.page2.descs = ""), m(e.page2);
  }
  function m(s, l) {
    e.tableLoading2 = true, ee(g(Object.assign({ current: s.currentPage, size: s.pageSize, descs: e.page2.descs, ascs: e.page2.ascs, createId: e.selectRow.id }, l))).then((p) => {
      e.tableData2 = p.data.records, e.page2.total = p.data.total, e.page2.currentPage = s.currentPage, e.page2.pageSize = s.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function I(s) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return X(s.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), m(e.page2);
    });
  }
  function Y() {
    m(e.page2);
  }
  return { ..._(e), permissions: n, permissionList: o, permissionList2: b, subPasswordF: $, editPasswordF: y, init: c, nodeClick: w, sortChange: S, getPageF: i, searchChange: v, refreshChange: r, handleSave: C, handleUpdate: k, handleDel: F, beforeOpen: z, showLoglogin: N, searchChange2: U, sortChange2: q, getPage2F: m, handleDel2: I, refreshChange2: Y };
} }, ue = { class: "user" }, de = ["src"];
function me(a, e, n, o, b, $) {
  const y = f("el-tag"), c = f("el-button"), w = f("avue-crud"), S = f("avue-form"), i = f("el-dialog"), v = G;
  return P(), K("div", ue, [d(v, null, { default: u(() => [d(w, { option: a.tableOption, ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (r) => a.form = r), page: a.page, "onUpdate:page": e[1] || (e[1] = (r) => a.page = r), permission: o.permissionList, "table-loading": a.listLoading, "before-open": o.beforeOpen, onOnLoad: o.getPageF, onSortChange: o.sortChange, onSearchChange: o.searchChange, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, data: a.list }, { lockFlag: u((r) => [d(y, { size: "small", effect: "light", type: r.row.lockFlag == "0" ? "success" : "danger" }, { default: u(() => [L(V(r.label), 1)]), _: 2 }, 1032, ["type"])]), menu: u((r) => [o.permissions["sys:user:password"] ? (P(), O(c, { key: 0, link: "", type: "primary", plain: "", onClick: (C) => o.editPasswordF(r.row) }, { default: u(() => [L(V(a.$t("mall.shopuser.changePassword")), 1)]), _: 1 }, 8, ["onClick"])) : R("", true), o.permissions["sys:loglogin:index"] ? (P(), O(c, { key: 1, link: "", type: "primary", plain: "", onClick: (C) => o.showLoglogin(r.row) }, { default: u(() => [L(V(a.$t("mall.shopuser.loginLog")), 1)]), _: 1 }, 8, ["onClick"])) : R("", true)]), avatar: u((r) => [Z("img", { style: { height: "100px" }, src: r.row.avatar }, null, 8, de)]), _: 1 }, 8, ["option", "modelValue", "page", "permission", "table-loading", "before-open", "onOnLoad", "onSortChange", "onSearchChange", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "data"]), d(i, { title: a.$t("mall.shopuser.modifyUser") + a.selectRow.username + a.$t("mall.shopuser.password1"), modelValue: a.dialogVisible, "onUpdate:modelValue": e[3] || (e[3] = (r) => a.dialogVisible = r), width: "40%" }, { default: u(() => [d(S, { ref: "form", modelValue: a.form2, "onUpdate:modelValue": e[2] || (e[2] = (r) => a.form2 = r), option: a.option2, onSubmit: o.subPasswordF }, null, 8, ["modelValue", "option", "onSubmit"])]), _: 1 }, 8, ["title", "modelValue"]), d(i, { title: a.$t("mall.shopuser.logDetails") + a.selectRow.username + "\u3011", modelValue: a.dialogVisible2, "onUpdate:modelValue": e[5] || (e[5] = (r) => a.dialogVisible2 = r), width: "60%" }, { default: u(() => [d(w, { ref: "crud", page: a.page2, "onUpdate:page": e[4] || (e[4] = (r) => a.page2 = r), data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, permission: o.permissionList2, onOnLoad: o.getPage2F, onSearchChange: o.searchChange2, onRefreshChange: o.refreshChange2, onSortChange: o.sortChange2, onRowDel: o.handleDel2 }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onSearchChange", "onRefreshChange", "onSortChange", "onRowDel"])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 })]);
}
const be = x(pe, [["render", me]]);
export {
  be as default
};
