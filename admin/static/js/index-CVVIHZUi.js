import { A as K, R as N, q as R, K as j, S as A, cp as T, b1 as w, P as M, _ as q, r as g, c as E, o as C, b as i, h as r, e as Z, g as _, B as O, f as v, z as $, a_ as H } from "./index-DAdfXJ2i.js";
import { d as G, p as J, c as Q, f as W, h as X } from "./user-CcdA_mZX.js";
import { f as Y } from "./organ-Uz8t_88q.js";
import { a as x } from "./user-HkervIX0.js";
import { t as ee, g as ae } from "./loglogin-DSKzCisN.js";
import { M as oe } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const se = { components: { MaterialList: oe }, setup() {
  const { proxy: a } = K(), e = N({ form2: { password: "" }, option2: { column: [{ label: a.$t("upms.user.newPwd"), prop: "password", rules: [{ required: true, min: 6, message: a.$t("upms.user.min6Chars"), trigger: "change" }] }] }, selectRow: { id: "", username: "" }, dialogVisible: false, treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeData: [], tableOption: x, checkedKeys: [], page: { page: 1, total: 0, currentPage: 1, pageSize: 20, descs: "", ascs: "", isAsc: false }, list: [], listLoading: true, role: [], form: { avatar: void 0 }, dialogVisible2: false, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, tableLoading2: false, tableOption2: ee }), d = R(() => {
    var _a;
    return (_a = j()) == null ? void 0 : _a.permissions;
  }), n = R(() => ({ addBtn: !!d.value["sys:user:add"], delBtn: !!d.value["sys:user:del"], editBtn: !!d.value["sys:user:edit"], viewBtn: !!d.value["sys:user:get"] })), B = R(() => ({ addBtn: !!d.value["sys:loglogin:add"], delBtn: !!d.value["sys:loglogin:del"], editBtn: !!d.value["sys:loglogin:edit"], viewBtn: !!d.value["sys:loglogin:get"] }));
  u();
  function D(o, s) {
    o.id = e.selectRow.id, X(o).then(() => {
      s(), a.$notify({ title: a.$t("commons.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 }), e.dialogVisible = false, e.form2.password = "";
    }).catch(() => {
      s();
    });
  }
  function y(o) {
    e.selectRow = o, e.dialogVisible = true;
  }
  function u() {
    Y().then((o) => {
      e.treeData = o.data;
    });
  }
  function m(o) {
    e.page.page = 1, l(e.page, { organId: o.id });
  }
  function S(o) {
    const s = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), l(e.page);
  }
  function l(o, s) {
    e.listLoading = true, W(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s)).then((c) => {
      e.list = c.data.records, e.page.total = c.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.listLoading = false;
    });
  }
  function P(o, s) {
    o = w(o), e.page.currentPage = 1, l(e.page, o), s();
  }
  function f() {
    l(e.page);
  }
  function V(o, s, c) {
    o.avatar = o.avatar.length > 0 ? o.avatar[0] : "", Q(w(o)).then(() => {
      l(e.page), a.$notify({ title: a.$t("commons.success"), message: a.$t("mall.shopuser.createSuccess"), type: "success", duration: 2e3 }), s();
    }).catch(() => {
      c();
    });
  }
  function k(o, s, c, I) {
    o.avatar = o.avatar.length > 0 ? o.avatar[0] : "", J(w(o)).then(() => {
      l(e.page), c(), a.$notify({ title: a.$t("commons.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      I();
    });
  }
  function h(o, s) {
    a.$confirm(a.$t("mall.shopuser.confirmDelete") + o.username + a.$t("mall.shopuser.continuePrompt"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      G(o.id).then(() => {
        e.list.splice(s, 1), a.$notify({ title: a.$t("commons.success"), message: a.$t("commons.delSuccess"), type: "success", duration: 2e3 });
      });
    });
  }
  function L(o, s) {
    window.openType = s, window.validForm = M(e.form), s == "add" ? e.form.avatar = [] : e.form.avatar = e.form.avatar ? [e.form.avatar] : [], o();
  }
  function t(o) {
    e.selectRow = o, e.tableData2 = [], e.page2.currentPage = 1, e.dialogVisible2 = true, p(e.page2);
  }
  function b(o, s) {
    o = w(o), e.page2.currentPage = 1, p(e.page2, o), s();
  }
  function U(o) {
    const s = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = s) : o.order == "descending" ? (e.page2.ascs = "", e.page2.descs = s) : (e.page2.ascs = "", e.page2.descs = ""), p(e.page2);
  }
  function p(o, s) {
    e.tableLoading2 = true, ae(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page2.descs, ascs: e.page2.ascs, createId: e.selectRow.id }, s)).then((c) => {
      e.tableData2 = c.data.records, e.page2.total = c.data.total, e.page2.currentPage = o.currentPage, e.page2.pageSize = o.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function z() {
    p(e.page2);
  }
  function F(o) {
    T(o).then((s) => {
      s.errCode == 0 ? a.$message({ showClose: true, message: a.$t("commons.actionSuccess"), type: "success" }) : a.$message({ showClose: true, message: "\u5BA2\u670D\u5DF2\u521D\u59CB\u5316,\u8BF7\u52FF\u91CD\u590D\u64CD\u4F5C", type: "error" });
    }).catch((s) => {
      a.$message({ showClose: true, message: "\u672A\u8FDE\u63A5\u5230\u5BA2\u670D\u7CFB\u7EDF,\u8BF7\u76F4\u63A5\u4F7F\u7528\u5BA2\u670D\u8D26\u53F7\u767B\u5F55", type: "error" });
    });
  }
  return { ...A(e), permissions: d, permissionList: n, permissionList2: B, subPassword: D, editPasswordF: y, init: u, nodeClick: m, sortChange: S, getPageF: l, searchChange: P, refreshChange: f, handleSave: V, handleUpdate: k, handleDel: h, beforeOpen: L, showLoglogin: t, searchChange2: b, sortChange2: U, getPage2F: p, refreshChange2: z, onInitKefu: F };
} }, te = { class: "user", style: { "border-top": "solid 1px #eceef6" } }, ne = ["src"];
function re(a, e, d, n, B, D) {
  const y = g("avue-tree"), u = g("el-card"), m = g("el-col"), S = g("el-tag"), l = g("el-button"), P = g("material-list"), f = g("avue-crud"), V = g("el-row"), k = g("avue-form"), h = g("el-dialog"), L = H;
  return C(), E("div", te, [i(L, null, { default: r(() => [i(V, { gutter: 5 }, { default: r(() => [i(m, { xs: 24, sm: 24, md: 4 }, { default: r(() => [i(u, { shadow: "never" }, { default: r(() => [i(y, { option: a.treeOption, data: a.treeData, onNodeClick: n.nodeClick }, null, 8, ["option", "data", "onNodeClick"])]), _: 1 })]), _: 1 }), i(m, { xs: 24, sm: 24, md: 20, class: "user__main" }, { default: r(() => [i(f, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[1] || (e[1] = (t) => a.form = t), page: a.page, "onUpdate:page": e[2] || (e[2] = (t) => a.page = t), option: a.tableOption, permission: n.permissionList, "table-loading": a.listLoading, "before-open": n.beforeOpen, data: a.list, onOnLoad: n.getPageF, onSortChange: n.sortChange, onSearchChange: n.searchChange, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel }, { lockFlag: r((t) => [i(S, { size: "small", effect: "light", type: t.row.lockFlag == "0" ? "success" : "danger" }, { default: r(() => [v($(t.label), 1)]), _: 2 }, 1032, ["type"])]), menu: r((t) => [n.permissions["sys:user:password"] ? (C(), _(l, { key: 0, type: "primary", link: "", onClick: (b) => n.editPasswordF(t.row) }, { default: r(() => [v($(a.$t("upms.user.changePwd")), 1)]), _: 1 }, 8, ["onClick"])) : O("", true), n.permissions["sys:loglogin:index"] ? (C(), _(l, { key: 1, type: "primary", link: "", onClick: (b) => n.showLoglogin(t.row) }, { default: r(() => [v($(a.$t("upms.user.log")), 1)]), _: 1 }, 8, ["onClick"])) : O("", true), n.permissions["sys:user:edit"] && t.row.isKefu == "1" ? (C(), _(l, { key: 2, link: "", type: "primary", plain: "", onClick: (b) => n.onInitKefu(t.row) }, { default: r(() => [...e[7] || (e[7] = [v("\u521D\u59CB\u5316\u5BA2\u670D", -1)])]), _: 1 }, 8, ["onClick"])) : O("", true)]), "avatar-form": r(() => [i(P, { value: a.form.avatar, "onUpdate:value": e[0] || (e[0] = (t) => a.form.avatar = t), type: "image", num: 1, width: 150, height: 150 }, null, 8, ["value"])]), avatar: r((t) => [Z("img", { style: { height: "100px" }, src: t.row.avatar }, null, 8, ne)]), _: 1 }, 8, ["modelValue", "page", "option", "permission", "table-loading", "before-open", "data", "onOnLoad", "onSortChange", "onSearchChange", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel"])]), _: 1 })]), _: 1 }), i(h, { modelValue: a.dialogVisible, "onUpdate:modelValue": e[4] || (e[4] = (t) => a.dialogVisible = t), title: a.$t("upms.user.editUser") + a.selectRow.username + a.$t("upms.user.pwdSuffix"), width: "40%" }, { default: r(() => [i(k, { ref: "form", modelValue: a.form2, "onUpdate:modelValue": e[3] || (e[3] = (t) => a.form2 = t), option: a.option2, onSubmit: n.subPassword }, null, 8, ["modelValue", "option", "onSubmit"])]), _: 1 }, 8, ["modelValue", "title"]), i(h, { modelValue: a.dialogVisible2, "onUpdate:modelValue": e[6] || (e[6] = (t) => a.dialogVisible2 = t), title: a.$t("upms.user.logPrefix") + a.selectRow.username + "\u3011", width: "60%" }, { default: r(() => [i(f, { ref: "crud", page: a.page2, "onUpdate:page": e[5] || (e[5] = (t) => a.page2 = t), data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, permission: n.permissionList2, onOnLoad: n.getPage2F, onSearchChange: n.searchChange2, onRefreshChange: n.refreshChange2, onSortChange: n.sortChange2 }, null, 8, ["page", "data", "table-loading", "option", "permission", "onOnLoad", "onSearchChange", "onRefreshChange", "onSortChange"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const we = q(se, [["render", re]]);
export {
  we as default
};
