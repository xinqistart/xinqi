import { aO as w, n as Y, A as j, R as A, q as R, K as E, S as H, cp as Z, b1 as g, P as _, _ as G, r as h, c as B, o as f, b as d, h as i, g as D, z as b, B as V, f as P, a_ as J } from "./index-DAdfXJ2i.js";
import { f as Q } from "./organ-Uz8t_88q.js";
import { g as F } from "./user-CcdA_mZX.js";
import { t as X, d as x, g as ee } from "./loglogin-DSKzCisN.js";
import { M as ae } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
function se(a) {
  return w.request("get", "/upms/shopuser/page", { params: a });
}
function oe(a) {
  return w.request("post", "/upms/shopuser", { data: a });
}
function te(a) {
  return w.request("delete", "/upms/shopuser/" + a);
}
function re(a) {
  return w.request("put", "/upms/shopuser", { data: a });
}
function le(a) {
  return w.request("put", "/upms/user/password", { data: a });
}
const { $t: o } = Y(), ne = (a, e, n) => {
  window.openType === "edit" ? n() : F({ username: e }).then((t) => {
    t.data > 0 ? n(new Error(o("mall.shopapply.userUsernameExist"))) : n();
  });
}, ie = (a, e, n) => {
  window.openType == "view" || window.openType == "edit" && window.validForm.phone == e ? n() : F({ phone: e }).then((t) => {
    t.data > 0 ? n(new Error(o("upms.tenant.phoneNumberExists"))) : n();
  });
}, ue = { dialogDrag: true, index: true, indexLabel: o("commons.indexLabel"), indexWidth: 100, searchShow: false, searchMenuSpan: 0, searchLabelWidth: 180, searchGutter: 50, searchLabelPosition: "left", labelPosition: "left", menuAlign: "center", align: "center", viewBtn: true, excelBtn: true, printBtn: false, column: [{ fixed: true, label: o("mall.shopuser.nickName"), span: 15, prop: "nickName", rules: [{ required: true, message: o("mall.shopuser.nickName") + o("commons.notNull") }, { max: 20, message: o("commons.lengthTips", { length: 20 }), trigger: "blur" }] }, { label: o("mall.shopuser.shopId"), prop: "shopId", type: "select", filterable: true, search: true, searchLabelWidth: 120, searchSpan: 8, span: 15, labelPosition: "left", props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", editDisabled: true, rules: [{ required: true, message: o("mall.shopuser.shopId") + o("commons.notNull") }] }, { fixed: true, label: o("mall.shopuser.username"), prop: "username", searchLabelWidth: 120, searchSpan: 8, span: 15, editDisabled: true, search: true, rules: [{ required: true, message: o("mall.shopuser.username") + o("commons.notNull") }, { min: 3, max: 20, message: o("commons.lengthTips", { length: 20 }), trigger: "blur" }, { validator: ne, trigger: "blur" }] }, { label: o("mall.shopuser.password"), prop: "password", type: "password", value: "", span: 15, hide: true, viewDisplay: false, editDisplay: false, rules: [{ required: true, min: 6, max: 20, message: o("login.passwordRuleReg6"), trigger: "blur" }] }, { width: 150, label: o("commons.createTime"), prop: "createTime", type: "datetime", format: "YYYY-MM-DD HH:mm", valueFormat: "YYYY-MM-DD HH:mm:ss", editDisabled: true, addDisplay: false, span: 24 }, { label: o("mall.shopuser.phone"), prop: "phone", span: 15, rules: [{ required: true, message: o("mall.shopuser.phone") + o("commons.notNull") }, { min: 11, max: 11, message: o("commons.lengthTips", { length: 11 }), trigger: "blur" }, { validator: ie, trigger: "blur" }] }, { label: o("mall.shopuser.email"), prop: "email", span: 15, editDisabled: true }, { label: o("mall.shopuser.avatar"), prop: "avatar", dataType: "string", type: "img", align: "center", width: 110, slot: true, formslot: true, span: 24, rules: [{ type: "array", required: true, message: o("mall.shopuser.avatar") + o("commons.notNull"), trigger: "change" }] }, { label: o("upms.user.lockFlag"), prop: "lockFlag", type: "radio", slot: true, labelWidth: 120, width: 100, sortable: true, rules: [{ required: true, message: o("upms.user.lockFlag") + o("commons.notNull"), trigger: "blur" }], dicData: [{ label: o("commons.yes"), value: "0" }, { label: o("commons.no"), value: "9" }] }, { label: o("mall.shopuser.smsSwitchOrder"), prop: "smsSwitchOrder", type: "radio", searchLabelWidth: 120, labelWidth: 150, searchSpan: 8, width: 100, search: true, value: "0", rules: [{ required: true, message: o("mall.shopuser.smsSwitchOrder") + o("commons.notNull"), trigger: "blur" }], dicData: [{ label: o("commons.close"), value: "0" }, { label: o("commons.open"), value: "1" }] }, { label: o("mall.shopuser.pushSwitchOrder"), prop: "pushSwitchOrder", type: "radio", searchLabelWidth: 120, labelWidth: 150, searchSpan: 8, width: 100, search: true, labelPosition: "left", value: "0", rules: [{ required: true, message: o("mall.shopuser.pushSwitchOrder") + o("commons.notNull"), trigger: "blur" }], dicData: [{ label: o("commons.close"), value: "0" }, { label: o("commons.open"), value: "1" }] }, { label: o("mall.shopuser.isKefu"), prop: "isKefu", type: "radio", searchLabelWidth: 120, labelWidth: 150, searchSpan: 8, search: true, width: 100, value: "0", rules: [{ required: true, message: o("mall.shopuser.isKefu") + o("commons.notNull"), trigger: "blur" }], dicData: [{ label: o("commons.close"), value: "0" }, { label: o("commons.open"), value: "1" }] }] }, pe = { components: { MaterialList: ae }, setup() {
  const { proxy: a } = j(), e = A({ form2: { password: "" }, option2: { column: [{ label: a.$t("mall.shopuser.newPassword"), prop: "password", rules: [{ required: true, min: 6, message: a.$t("mall.shopuser.passwordLength"), trigger: "change" }] }] }, selectRow: { id: "", username: "" }, dialogVisible: false, treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeData: [], tableOption: ue, checkedKeys: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "", isAsc: false }, list: [], listLoading: true, role: [], form: { shopId: void 0, avatar: void 0 }, dialogVisible2: false, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading2: false, tableOption2: X }), n = R(() => {
    var _a;
    return (_a = E()) == null ? void 0 : _a.permissions;
  }), t = R(() => ({ addBtn: !!n.value["mall:shopuser:add"], delBtn: !!n.value["mall:shopuser:del"], editBtn: !!n.value["mall:shopuser:edit"], viewBtn: !!n.value["mall:shopuser:get"] })), v = R(() => ({ addBtn: !!n.value["sys:loglogin:add"], delBtn: !!n.value["sys:loglogin:del"], editBtn: !!n.value["sys:loglogin:edit"], viewBtn: !!n.value["sys:loglogin:get"] }));
  m();
  function k(s, r) {
    s.id = e.selectRow.id, le(s).then(() => {
      r(), a.$notify({ title: a.$t("mall.shopuser.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 }), e.dialogVisible = false, e.form2.password = "";
    }).catch(() => {
      r();
    });
  }
  function L(s) {
    e.selectRow = s, e.dialogVisible = true;
  }
  function m() {
    Q().then((s) => {
      e.treeData = s.data;
    });
  }
  function $(s) {
    e.page.currentPage = 1, u(e.page, { organId: s.id });
  }
  function y(s) {
    const r = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page.descs = "", e.page.ascs = r) : s.order == "descending" ? (e.page.ascs = "", e.page.descs = r) : (e.page.ascs = "", e.page.descs = ""), u(e.page);
  }
  function u(s, r) {
    e.listLoading = true, se(g(Object.assign({ current: s.currentPage, size: s.pageSize, descs: e.page.descs, ascs: e.page.ascs }, r, e.paramsSearch))).then((p) => {
      e.list = p.data.records, e.page.total = p.data.total, e.page.currentPage = s.currentPage, e.page.pageSize = s.pageSize, e.listLoading = false;
    });
  }
  function S(s, r) {
    s = g(s), e.paramsSearch = s, e.page.currentPage = 1, u(e.page, s), r();
  }
  function O() {
    u(e.page);
  }
  function l(s, r, p) {
    s.avatar = s.avatar.length > 0 ? s.avatar[0] : "", oe(g(s)).then(() => {
      u(e.page), a.$notify({ title: a.$t("mall.shopuser.success"), message: a.$t("mall.shopuser.createSuccess"), type: "success", duration: 2e3 }), r();
    }).catch(() => {
      p();
    });
  }
  function C(s, r, p, M) {
    s.avatar = s.avatar.length > 0 ? s.avatar[0] : "", re(g(s)).then(() => {
      u(e.page), p(), a.$notify({ title: a.$t("mall.shopuser.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      M();
    });
  }
  function q(s, r) {
    a.$confirm(a.$t("mall.shopuser.confirmDelete") + s.username + a.$t("mall.shopuser.continuePrompt"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      te(s.id).then(() => {
        e.list.splice(r, 1), a.$notify({ title: a.$t("mall.shopuser.success"), message: a.$t("commons.delSuccess"), type: "success", duration: 2e3 });
      });
    });
  }
  function I(s, r) {
    window.openType = r, window.validForm = _(e.form), r == "add" ? e.form.avatar = [] : e.form.avatar = [e.form.avatar], s();
  }
  function N(s) {
    e.selectRow = s, e.tableData2 = [], e.page2.currentPage = 1, e.dialogVisible2 = true, c(e.page2);
  }
  function T(s, r) {
    s = g(s), e.page2.currentPage = 1, c(e.page2, s), r();
  }
  function U(s) {
    const r = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = r) : s.order == "descending" ? (e.page2.ascs = "", e.page2.descs = r) : (e.page2.ascs = "", e.page2.descs = ""), c(e.page2);
  }
  function c(s, r) {
    e.tableLoading2 = true, ee(g(Object.assign({ current: s.currentPage, size: s.pageSize, descs: e.page2.descs, ascs: e.page2.ascs, createId: e.selectRow.id }, r))).then((p) => {
      e.tableData2 = p.data.records, e.page2.total = p.data.total, e.page2.currentPage = s.currentPage, e.page2.pageSize = s.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function z(s) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return x(s.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), c(e.page2);
    });
  }
  function W() {
    c(e.page2);
  }
  function K(s) {
    Z(s).then((r) => {
      r.errCode == 0 ? a.$message({ showClose: true, message: a.$t("commons.actionSuccess"), type: "success" }) : a.$message({ showClose: true, message: "\u5BA2\u670D\u5DF2\u521D\u59CB\u5316,\u8BF7\u52FF\u91CD\u590D\u64CD\u4F5C", type: "error" });
    }).catch((r) => {
      a.$message({ showClose: true, message: "\u672A\u8FDE\u63A5\u5230\u5BA2\u670D\u7CFB\u7EDF,\u8BF7\u76F4\u63A5\u4F7F\u7528\u5BA2\u670D\u8D26\u53F7\u767B\u5F55", type: "error" });
    });
  }
  return { ...H(e), permissions: n, permissionList: t, permissionList2: v, subPasswordF: k, editPasswordF: L, init: m, nodeClick: $, sortChange: y, getPageF: u, searchChange: S, refreshChange: O, handleSave: l, handleUpdate: C, handleDel: q, beforeOpen: I, showLoglogin: N, searchChange2: T, sortChange2: U, getPage2F: c, handleDel2: z, refreshChange2: W, onInitKefu: K };
} }, de = { class: "user" }, me = { key: 1 };
function ce(a, e, n, t, v, k) {
  const L = h("el-tag"), m = h("el-button"), $ = h("material-list"), y = h("avue-crud"), u = h("avue-form"), S = h("el-dialog"), O = J;
  return f(), B("div", de, [d(O, null, { default: i(() => [d(y, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[1] || (e[1] = (l) => a.form = l), page: a.page, "onUpdate:page": e[2] || (e[2] = (l) => a.page = l), option: a.tableOption, permission: t.permissionList, "table-loading": a.listLoading, "before-open": t.beforeOpen, data: a.list, onOnLoad: t.getPageF, onSortChange: t.sortChange, onSearchChange: t.searchChange, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel }, { lockFlag: i((l) => [d(L, { size: "small", effect: "light", type: l.row.lockFlag == "0" ? "success" : "danger" }, { default: i(() => [P(b(l.label), 1)]), _: 2 }, 1032, ["type"])]), menu: i((l) => [t.permissions["sys:user:password"] ? (f(), D(m, { key: 0, link: "", type: "primary", plain: "", onClick: (C) => t.editPasswordF(l.row) }, { default: i(() => [P(b(a.$t("mall.shopuser.changePassword")), 1)]), _: 1 }, 8, ["onClick"])) : V("", true), t.permissions["sys:loglogin:index"] ? (f(), D(m, { key: 1, link: "", type: "primary", plain: "", onClick: (C) => t.showLoglogin(l.row) }, { default: i(() => [P(b(a.$t("mall.shopuser.loginLog")), 1)]), _: 1 }, 8, ["onClick"])) : V("", true), t.permissions["mall:shopuser:edit"] && l.row.isKefu == "1" ? (f(), D(m, { key: 2, link: "", type: "primary", plain: "", onClick: (C) => t.onInitKefu(l.row) }, { default: i(() => [P(b(a.$t("mall.pagedevise.customerServiceInitialization")), 1)]), _: 1 }, 8, ["onClick"])) : V("", true)]), "avatar-form": i(() => [a.form.shopId ? (f(), D($, { key: 0, value: a.form.avatar, "onUpdate:value": e[0] || (e[0] = (l) => a.form.avatar = l), type: "image", num: 1, shopId: a.form.shopId, width: 100, height: 100 }, null, 8, ["value", "shopId"])) : (f(), B("div", me, b(a.$t("commons.selectShopFirst")), 1))]), _: 1 }, 8, ["modelValue", "page", "option", "permission", "table-loading", "before-open", "data", "onOnLoad", "onSortChange", "onSearchChange", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel"]), d(S, { title: a.$t("mall.shopuser.modifyUser") + a.selectRow.username + a.$t("mall.shopuser.password1"), modelValue: a.dialogVisible, "onUpdate:modelValue": e[4] || (e[4] = (l) => a.dialogVisible = l), width: "40%" }, { default: i(() => [d(u, { ref: "form", modelValue: a.form2, "onUpdate:modelValue": e[3] || (e[3] = (l) => a.form2 = l), option: a.option2, onSubmit: t.subPasswordF }, null, 8, ["modelValue", "option", "onSubmit"])]), _: 1 }, 8, ["title", "modelValue"]), d(S, { title: a.$t("mall.shopuser.logDetails") + a.selectRow.username + "\u3011", modelValue: a.dialogVisible2, "onUpdate:modelValue": e[6] || (e[6] = (l) => a.dialogVisible2 = l), width: "60%" }, { default: i(() => [d(y, { ref: "crud", page: a.page2, "onUpdate:page": e[5] || (e[5] = (l) => a.page2 = l), data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, permission: t.permissionList2, onOnLoad: t.getPage2F, onSearchChange: t.searchChange2, onRefreshChange: t.refreshChange2, onSortChange: t.sortChange2, onRowDel: t.handleDel2 }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onSearchChange", "onRefreshChange", "onSortChange", "onRowDel"])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 })]);
}
const Pe = G(pe, [["render", ce]]);
export {
  Pe as default
};
