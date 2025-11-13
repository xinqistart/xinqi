import { A as H, R as F, p as T, U as q, q as N, K as W, S as Z, b1 as G, _ as J, r as p, j as Q, c as I, o as f, e as m, b as d, h as l, f as y, z as c, g as w, B as V, a_ as X, w as Y } from "./index-DAdfXJ2i.js";
import { t as x, p as ee, f as U, a as oe, b as se, d as ae, g as te } from "./role-CqXGtjfJ.js";
import { f as ne } from "./organ-Uz8t_88q.js";
import { f as K } from "./menu-Cs0Cprgy.js";
const le = { setup() {
  const { proxy: o } = H(), e = F({ tableOption: x, dsScopeData: [], treeData: [], checkedKeys: [], checkedKeysData: [], checkedDsScope: [], defaultProps: { label: "name", value: "id" }, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, menuIds: "", list: [], listLoading: true, form: { dsType: "", dsScope: "", roleCode: "" }, id: void 0, roleCode: void 0, rolesOptions: void 0, dialogPermissionVisible: false, dialogLoading: false }), k = T(null), t = T(null), $ = q().userInfo, g = N(() => {
    var _a;
    return (_a = W()) == null ? void 0 : _a.permissions;
  }), b = N(() => ({ addBtn: !!g.value["sys:role:add"], delBtn: !!g.value["sys:role:del"], editBtn: !!g.value["sys:role:edit"], viewBtn: !!g.value["sys:role:get"] }));
  function D(s) {
    const n = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (e.page.descs = "", e.page.ascs = n) : s.order == "descending" ? (e.page.ascs = "", e.page.descs = n) : (e.page.ascs = "", e.page.descs = ""), i(e.page);
  }
  function i(s, n) {
    e.listLoading = true, te(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, n)).then((r) => {
      e.list = r.data.records, e.page.total = r.data.total, e.page.currentPage = s.currentPage, e.page.pageSize = s.pageSize, e.listLoading = false;
    }).catch(() => {
      e.listLoading = false;
    });
  }
  function L() {
    i(e.page);
  }
  function S(s, n) {
    e.page.currentPage = 1, i(e.page, G(s)), n();
  }
  function h(s, n) {
    window.openType = n, ne().then((r) => {
      e.dsScopeData = r.data, e.form.dsScope ? e.checkedDsScope = e.form.dsScope.split(",") : e.checkedDsScope = [];
    }), s();
  }
  function R(s) {
    e.listLoading = true, U(s.id).then((n) => (e.checkedKeys = [], e.checkedKeysData = [], e.checkedKeys = n.data, K())).then((n) => {
      e.treeData = n.data, e.checkedKeysData = C(e.treeData, e.checkedKeys, []), e.dialogPermissionVisible = true, e.id = s.id, e.roleCode = s.roleCode, e.listLoading = false;
    }).catch(function() {
      e.listLoading = false;
    });
  }
  function C(s, n, r) {
    for (let u = 0; u < s.length; u++) {
      const _ = s[u];
      _.children && _.children.length !== 0 ? C(_.children, n, r) : r.push(n.filter((z) => z === _.id));
    }
    return r;
  }
  function P(s, n) {
    return s ? n.label.indexOf(s) !== -1 : true;
  }
  function O(s) {
    s();
  }
  function a(s, n) {
    o.$confirm(o.$t("upms.dict.confirmDeletion"), o.$t("upms.dict.warning"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return ae(s.id);
    }).then(() => {
      i(e.page), e.list.splice(n, 1), o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" });
    }).catch(function() {
    });
  }
  function v(s, n) {
    e.form.dsType == "1" && (e.form.dsScope = t.value.getCheckedKeys().join(",")), se(e.form).then(() => {
      i(e.page), s(), o.$notify({ title: o.$t("mall.shopuser.success"), message: o.$t("mall.shopuser.createSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      n();
    });
  }
  function B(s, n, r, u) {
    e.form.dsType == "1" && (e.form.dsScope = t.value.getCheckedKeys().join(",")), oe(e.form).then(() => {
      i(e.page), r(), o.$notify({ title: o.$t("mall.shopuser.success"), message: o.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      u();
    });
  }
  function j(s) {
    e.dialogLoading = true, e.menuIds = "", e.menuIds = k.value.getCheckedKeys().join(",").concat(",").concat(k.value.getHalfCheckedKeys().join(",")), ee({ roleId: s, menuId: e.menuIds }).then(() => {
      e.dialogLoading = false, e.dialogPermissionVisible = false, K().then(() => U(s)).then(() => {
        o.$notify({ title: o.$t("mall.shopuser.success"), message: o.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
      });
    }).catch(() => {
      e.dialogLoading = false;
    });
  }
  const E = [{ label: "\u7BA1\u7406\u5458", value: "ROLE_ADMIN" }, { label: "\u5E97\u94FA\u7BA1\u7406\u5458", value: "ROLE_SHOP_USER" }, { label: "\u4F9B\u5E94\u5546", value: "ROLE_SUPPLIER_USER" }];
  function A(s, n) {
    const r = s ? E.filter((u) => u ? u.value.toLowerCase().indexOf(s.toLowerCase()) === 0 : false) : E;
    n(r);
  }
  function M(s) {
    s ? e.form.roleCode = s.value : e.form.roleCode = "";
  }
  return { ...Z(e), userInfo: $, permissions: g, permissionList: b, sortChange: D, getPageF: i, refreshChange: L, searchChange: S, beforeOpen: h, handlePermission: R, resolveAllEunuchNodeId: C, filterNode: P, getNodeData: O, handleDel: a, handleSave: v, handleUpdate: B, updatePermession: j, scopeTree: t, menuTree: k, querySearchRoleCode: A, handleSelectRoleCode: M };
} }, re = { class: "app-container calendar-list-container" }, ie = { class: "px-2" }, de = { class: "pl-[16px]" }, ce = { class: "my-[5px]" }, ue = { class: "leading-[20px]" }, pe = { class: "jl-text-tips" }, fe = { key: 0 }, me = { key: 1, class: "jl-text-tips" }, ge = { class: "dialog-footer" };
function he(o, e, k, t, $, g) {
  const b = p("Warning"), D = p("el-icon"), i = p("el-text"), L = p("el-autocomplete"), S = p("el-tree"), h = p("el-button"), R = p("avue-crud"), C = X, P = p("el-dialog"), O = Q("loading");
  return f(), I("div", re, [m("div", ie, [d(i, { class: "mx-1" }, { default: l(() => [d(D, { class: "mr-1" }, { default: l(() => [d(b)]), _: 1 }), y(" " + c(o.$t("wxmp.wxmassmsg.roleCoding")), 1)]), _: 1 }), e[5] || (e[5] = m("br", null, null, -1)), m("div", de, [d(i, null, { default: l(() => [y(c(o.$t("wxmp.wxmassmsg.roleCoding2")), 1)]), _: 1 })])]), d(C, null, { default: l(() => [d(R, { ref: "crud", page: o.page, "onUpdate:page": e[1] || (e[1] = (a) => o.page = a), modelValue: o.form, "onUpdate:modelValue": e[2] || (e[2] = (a) => o.form = a), option: o.tableOption, data: o.list, "table-loading": o.listLoading, "before-open": t.beforeOpen, permission: t.permissionList, onOnLoad: t.getPageF, onSortChange: t.sortChange, onSearchChange: t.searchChange, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel }, { "roleCode-form": l(() => [d(L, { modelValue: o.form.roleCode, "onUpdate:modelValue": e[0] || (e[0] = (a) => o.form.roleCode = a), "fetch-suggestions": t.querySearchRoleCode, clearable: "", placeholder: o.$t("commons.inputPlease") + " " + o.$t("upms.role.roleCode"), onSelect: t.handleSelectRoleCode }, { default: l(({ item: a }) => [m("div", ce, [m("div", ue, c(a.value), 1), m("div", pe, c(a.label), 1)])]), _: 1 }, 8, ["modelValue", "fetch-suggestions", "placeholder", "onSelect"])]), "dsScope-form": l(() => [o.form.dsType == "1" ? (f(), I("div", fe, [d(S, { ref: "scopeTree", class: "filter-tree", data: o.dsScopeData, "check-strictly": true, "node-key": "id", "highlight-current": "", props: o.defaultProps, "default-checked-keys": o.checkedDsScope, "show-checkbox": "" }, null, 8, ["data", "props", "default-checked-keys"])])) : (f(), I("div", me, c(o.$t("upms.role.diyRoleTip")), 1))]), menu: l((a) => [a.row.roleCode == "ROLE_ADMIN" && t.userInfo.type == "-1" || a.row.roleCode != "ROLE_ADMIN" && t.permissions["sys:role:edit"] ? (f(), w(h, { key: 0, type: "primary", icon: "Edit", link: "", onClick: (v) => o.$refs.crud.rowEdit(a.row, a.index) }, { default: l(() => [y(c(o.$t("commons.edit")), 1)]), _: 1 }, 8, ["onClick"])) : V("", true), a.row.roleCode == "ROLE_ADMIN" && t.userInfo.type == "-1" || a.row.roleCode != "ROLE_ADMIN" && t.permissions["sys:role:del"] ? (f(), w(h, { key: 1, type: "primary", icon: "Delete", link: "", onClick: (v) => o.$refs.crud.rowDel(a.row, a.index) }, { default: l(() => [y(c(o.$t("commons.delete")), 1)]), _: 1 }, 8, ["onClick"])) : V("", true), a.row.roleCode == "ROLE_ADMIN" && t.userInfo.type == "-1" || a.row.roleCode != "ROLE_ADMIN" && t.permissions["sys:role:perm"] ? (f(), w(h, { key: 2, link: "", type: "primary", icon: "User", onClick: (v) => t.handlePermission(a.row) }, { default: l(() => [y(c(o.$t("upms.role.permission")), 1)]), _: 1 }, 8, ["onClick"])) : V("", true)]), _: 1 }, 8, ["page", "modelValue", "option", "data", "table-loading", "before-open", "permission", "onOnLoad", "onSortChange", "onSearchChange", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel"])]), _: 1 }), d(P, { modelValue: o.dialogPermissionVisible, "onUpdate:modelValue": e[4] || (e[4] = (a) => o.dialogPermissionVisible = a), title: o.$t("upms.role.assignPermission") }, { footer: l(() => [m("div", ge, [Y((f(), w(h, { type: "primary", onClick: e[3] || (e[3] = (a) => t.updatePermession(o.id)) }, { default: l(() => [y(c(o.$t("upms.role.update")), 1)]), _: 1 })), [[O, o.dialogLoading]])])]), default: l(() => [d(S, { ref: "menuTree", class: "filter-tree", data: o.treeData, "default-checked-keys": o.checkedKeysData, "check-strictly": false, "node-key": "id", "highlight-current": "", props: o.defaultProps, "show-checkbox": "", "filter-node-method": t.filterNode, "default-expand-all": "" }, null, 8, ["data", "default-checked-keys", "props", "filter-node-method"])]), _: 1 }, 8, ["modelValue", "title"])]);
}
const ve = J(le, [["render", he]]);
export {
  ve as default
};
