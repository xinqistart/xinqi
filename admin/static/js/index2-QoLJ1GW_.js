import { A as _, R as A, q as L, K as j, S as I, b1 as y, P as N, _ as T, r as p, c as q, o as R, b as i, h as r, e as K, f as u, z as m, g as k, B, a_ as M } from "./index-DAdfXJ2i.js";
import { d as Z, p as E, c as H, f as G, h as J } from "./user-CcdA_mZX.js";
import { b as Q } from "./user-HkervIX0.js";
import { t as W, g as X } from "./loglogin-DSKzCisN.js";
import { M as Y } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const x = { components: { MaterialList: Y }, setup() {
  const { proxy: a } = _(), e = A({ form2: { password: "" }, option2: { column: [{ label: a.$t("upms.user.newPwd"), prop: "password", rules: [{ required: true, min: 6, message: a.$t("upms.user.min6Chars"), trigger: "change" }] }] }, selectRow: { id: "", username: "" }, dialogVisible: false, tableOption: Q, checkedKeys: [], page: { page: 1, total: 0, currentPage: 1, pageSize: 20, descs: "", ascs: "", isAsc: false }, list: [], listLoading: true, role: [], form: { type: "", avatar: void 0 }, dialogVisible2: false, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, tableLoading2: false, tableOption2: W }), l = L(() => {
    var _a;
    return (_a = j()) == null ? void 0 : _a.permissions;
  }), n = L(() => ({ addBtn: !!l.value["sys:user:add"], delBtn: !!l.value["sys:user:del"], editBtn: !!l.value["sys:user:edit"], viewBtn: !!l.value["sys:user:get"] })), $ = L(() => ({ addBtn: !!l.value["sys:loglogin:add"], delBtn: !!l.value["sys:loglogin:del"], editBtn: !!l.value["sys:loglogin:edit"], viewBtn: !!l.value["sys:loglogin:get"] }));
  function O(o, t) {
    o.id = e.selectRow.id, J(o).then(() => {
      t(), a.$notify({ title: a.$t("commons.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 }), e.dialogVisible = false, e.form2.password = "";
    }).catch(() => {
      t();
    });
  }
  function w(o) {
    e.selectRow = o, e.dialogVisible = true;
  }
  function h(o) {
    e.page.page = 1, d(e.page, { organId: o.id });
  }
  function c(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), d(e.page);
  }
  function d(o, t) {
    e.listLoading = true, G(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs }, t)).then((g) => {
      e.list = g.data.records, e.page.total = g.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.listLoading = false;
    });
  }
  function C(o, t) {
    o = y(o), e.page.currentPage = 1, d(e.page, o), t();
  }
  function b() {
    d(e.page);
  }
  function P(o, t, g) {
    o.avatar = o.avatar.length > 0 ? o.avatar[0] : "", o.organId = "-1", o.type = "-1", H(y(o)).then(() => {
      d(e.page), a.$notify({ title: a.$t("commons.success"), message: a.$t("shopuser.index.a3n2n2"), type: "success", duration: 2e3 }), t();
    }).catch(() => {
      g();
    });
  }
  function v(o, t, g, F) {
    o.avatar = o.avatar.length > 0 ? o.avatar[0] : "", E(y(o)).then(() => {
      d(e.page), g(), a.$notify({ title: a.$t("commons.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      F();
    });
  }
  function S(o, t) {
    a.$confirm(a.$t("mall.shopuser.confirmDelete") + o.username + a.$t("mall.shopuser.continuePrompt"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      Z(o.id).then(() => {
        e.list.splice(t, 1), a.$notify({ title: a.$t("commons.success"), message: a.$t("commons.delSuccess"), type: "success", duration: 2e3 });
      });
    });
  }
  function s(o, t) {
    window.openType = t, window.validForm = N(e.form), t == "add" ? e.form.avatar = [] : e.form.avatar = [e.form.avatar], o();
  }
  function V(o) {
    e.selectRow = o, e.tableData2 = [], e.page2.currentPage = 1, e.dialogVisible2 = true, f(e.page2);
  }
  function z(o, t) {
    o = y(o), e.page2.currentPage = 1, f(e.page2, o), t();
  }
  function U(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = t) : o.order == "descending" ? (e.page2.ascs = "", e.page2.descs = t) : (e.page2.ascs = "", e.page2.descs = ""), f(e.page2);
  }
  function f(o, t) {
    e.tableLoading2 = true, X(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page2.descs, ascs: e.page2.ascs, createId: e.selectRow.id }, t)).then((g) => {
      e.tableData2 = g.data.records, e.page2.total = g.data.total, e.page2.currentPage = o.currentPage, e.page2.pageSize = o.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function D() {
    f(e.page2);
  }
  return { ...I(e), permissions: l, permissionList: n, permissionList2: $, subPassword: O, editPasswordF: w, nodeClick: h, sortChange: c, getPageF: d, searchChange: C, refreshChange: b, handleSave: P, handleUpdate: v, handleDel: S, beforeOpen: s, showLoglogin: V, searchChange2: z, sortChange2: U, getPage2F: f, refreshChange2: D };
} }, ee = { class: "user" }, ae = ["src"];
function oe(a, e, l, n, $, O) {
  const w = p("el-tag"), h = p("el-button"), c = p("el-radio"), d = p("el-radio-group"), C = p("material-list"), b = p("avue-crud"), P = p("avue-form"), v = p("el-dialog"), S = M;
  return R(), q("div", ee, [i(S, null, { default: r(() => [i(b, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[2] || (e[2] = (s) => a.form = s), page: a.page, "onUpdate:page": e[3] || (e[3] = (s) => a.page = s), option: a.tableOption, permission: n.permissionList, "table-loading": a.listLoading, "before-open": n.beforeOpen, data: a.list, onOnLoad: n.getPageF, onSortChange: n.sortChange, onSearchChange: n.searchChange, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel }, { lockFlag: r((s) => [i(w, { size: "small", effect: "light", type: s.row.lockFlag == "0" ? "success" : "danger" }, { default: r(() => [u(m(s.label), 1)]), _: 2 }, 1032, ["type"])]), menu: r((s) => [n.permissions["sys:user:password"] ? (R(), k(h, { key: 0, link: "", type: "primary", size: "small", plain: "", onClick: (V) => n.editPasswordF(s.row) }, { default: r(() => [u(m(a.$t("upms.user.changePwd")), 1)]), _: 1 }, 8, ["onClick"])) : B("", true), n.permissions["sys:loglogin:index"] ? (R(), k(h, { key: 1, link: "", type: "primary", size: "small", plain: "", onClick: (V) => n.showLoglogin(s.row) }, { default: r(() => [u(m(a.$t("upms.user.log")), 1)]), _: 1 }, 8, ["onClick"])) : B("", true)]), "type-form": r(() => [i(d, { modelValue: a.form.type, "onUpdate:modelValue": e[0] || (e[0] = (s) => a.form.type = s) }, { default: r(() => [i(c, { value: "1" }, { default: r(() => [u(m(a.$t("upms.user.mallAdmin")), 1)]), _: 1 }), i(c, { value: "2" }, { default: r(() => [u(m(a.$t("upms.user.shopAdmin")), 1)]), _: 1 }), i(c, { value: "3" }, { default: r(() => [u(m(a.$t("upms.user.supplierUser")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), "avatar-form": r(() => [i(C, { value: a.form.avatar, "onUpdate:value": e[1] || (e[1] = (s) => a.form.avatar = s), type: "image", num: 1, width: 150, height: 150 }, null, 8, ["value"])]), avatar: r((s) => [K("img", { style: { height: "100px" }, src: s.row.avatar }, null, 8, ae)]), _: 1 }, 8, ["modelValue", "page", "option", "permission", "table-loading", "before-open", "data", "onOnLoad", "onSortChange", "onSearchChange", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel"]), i(v, { modelValue: a.dialogVisible, "onUpdate:modelValue": e[5] || (e[5] = (s) => a.dialogVisible = s), title: a.$t("upms.user.editUser") + a.selectRow.username + a.$t("upms.user.pwdSuffix"), width: "40%" }, { default: r(() => [i(P, { ref: "form", modelValue: a.form2, "onUpdate:modelValue": e[4] || (e[4] = (s) => a.form2 = s), option: a.option2, onSubmit: n.subPassword }, null, 8, ["modelValue", "option", "onSubmit"])]), _: 1 }, 8, ["modelValue", "title"]), i(v, { modelValue: a.dialogVisible2, "onUpdate:modelValue": e[7] || (e[7] = (s) => a.dialogVisible2 = s), title: a.$t("upms.user.logPrefix") + a.selectRow.username + "\u3011", width: "60%" }, { default: r(() => [i(b, { ref: "crud", page: a.page2, "onUpdate:page": e[6] || (e[6] = (s) => a.page2 = s), data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, permission: n.permissionList2, onOnLoad: n.getPage2F, onSearchChange: n.searchChange2, onRefreshChange: n.refreshChange2, onSortChange: n.sortChange2 }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onSearchChange", "onRefreshChange", "onSortChange"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const me = T(x, [["render", oe]]);
export {
  me as default
};
