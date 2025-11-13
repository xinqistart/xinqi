import { A as U, R as I, p as K, q as S, K as N, S as j, b1 as z, _ as F, r as g, j as A, c as E, o as C, b as f, h as l, g as L, B as H, f as w, z as V, a_ as q, e as M, w as Z } from "./index-DAdfXJ2i.js";
import { c as G, p as J, f as _, a as Q, b as W, d as X, g as Y } from "./role-CqXGtjfJ.js";
import { f as $ } from "./menu-Cs0Cprgy.js";
const x = { setup() {
  const { proxy: o } = U(), e = I({ tableOption: G, treeData: [], checkedKeys: [], defaultProps: { label: "name", value: "id" }, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, menuIds: "", list: [], listLoading: true, form: { dsType: "" }, id: void 0, roleCode: void 0, rolesOptions: void 0, dialogPermissionVisible: false, dialogLoading: false }), u = K(null), n = S(() => {
    var _a;
    return (_a = N()) == null ? void 0 : _a.permissions;
  }), v = S(() => ({ addBtn: !!n.value["sys:role:add"], delBtn: !!n.value["sys:role:del"], editBtn: !!n.value["sys:role:edit"], viewBtn: !!n.value["sys:role:get"] }));
  function k(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), t(e.page);
  }
  function t(a, s) {
    e.listLoading = true, Y(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s)).then((r) => {
      e.list = r.data.records, e.page.total = r.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.listLoading = false;
    }).catch(() => {
      e.listLoading = false;
    });
  }
  function m() {
    t(e.page);
  }
  function h(a, s) {
    e.page.currentPage = 1, t(e.page, z(a)), s();
  }
  function y(a, s) {
    window.openType = s, a();
  }
  function b(a) {
    e.listLoading = true, _(a.id).then((s) => (e.checkedKeys = s.data, $())).then((s) => {
      e.treeData = s.data, e.checkedKeys = d(e.treeData, e.checkedKeys, []), e.dialogPermissionVisible = true, e.id = a.id, e.roleCode = a.roleCode, e.listLoading = false;
    }).catch(function() {
      e.listLoading = false;
    });
  }
  function d(a, s, r) {
    for (let c = 0; c < a.length; c++) {
      const p = a[c];
      p.children && p.children.length !== 0 ? d(p.children, s, r) : r.push(s.filter((T) => T === p.id));
    }
    return r;
  }
  function i(a, s) {
    return a ? s.label.indexOf(a) !== -1 : true;
  }
  function P(a) {
    a();
  }
  function D(a, s) {
    o.$confirm(o.$t("upms.dict.confirmDeletion"), o.$t("upms.dict.warning"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return X(a.id);
    }).then(() => {
      t(e.page), e.list.splice(s, 1), o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" });
    }).catch(function() {
    });
  }
  function O(a, s) {
    e.form.dsType = "0", W(e.form).then(() => {
      t(e.page), a(), o.$notify({ title: o.$t("mall.shopuser.success"), message: o.$t("mall.shopuser.createSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      s();
    });
  }
  function B(a, s, r, c) {
    Q(e.form).then(() => {
      t(e.page), r(), o.$notify({ title: o.$t("mall.shopuser.success"), message: o.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      c();
    });
  }
  function R(a) {
    e.dialogLoading = true, e.menuIds = "", e.menuIds = u.value.getCheckedKeys().join(",").concat(",").concat(u.value.getHalfCheckedKeys().join(",")), J({ roleId: a, menuId: e.menuIds }).then(() => {
      e.dialogLoading = false, e.dialogPermissionVisible = false, $().then(() => _(a)).then(() => {
        o.$notify({ title: o.$t("mall.shopuser.success"), message: o.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
      });
    }).catch(() => {
      e.dialogLoading = false;
    });
  }
  return { ...j(e), permissions: n, permissionList: v, sortChange: k, getPageF: t, refreshChange: m, searchChange: h, beforeOpen: y, handlePermission: b, resolveAllEunuchNodeId: d, filterNode: i, getNodeData: P, handleDel: D, handleSave: O, handleUpdate: B, updatePermession: R, menuTree: u };
} }, ee = { class: "app-container calendar-list-container" }, oe = { class: "dialog-footer" };
function ae(o, e, u, n, v, k) {
  const t = g("el-button"), m = g("avue-crud"), h = q, y = g("el-tree"), b = g("el-dialog"), d = A("loading");
  return C(), E("div", ee, [f(h, null, { default: l(() => [f(m, { ref: "crud", page: o.page, "onUpdate:page": e[0] || (e[0] = (i) => o.page = i), option: o.tableOption, modelValue: o.form, "onUpdate:modelValue": e[1] || (e[1] = (i) => o.form = i), data: o.list, "table-loading": o.listLoading, "before-open": n.beforeOpen, permission: n.permissionList, onOnLoad: n.getPageF, onSortChange: n.sortChange, onSearchChange: n.searchChange, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel }, { menu: l((i) => [n.permissions["sys:role:perm"] ? (C(), L(t, { key: 0, type: "primary", icon: "User", text: "", onClick: (P) => n.handlePermission(i.row) }, { default: l(() => [w(V(o.$t("upms.role.permission")), 1)]), _: 1 }, 8, ["onClick"])) : H("", true)]), _: 1 }, 8, ["page", "option", "modelValue", "data", "table-loading", "before-open", "permission", "onOnLoad", "onSortChange", "onSearchChange", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel"])]), _: 1 }), f(b, { modelValue: o.dialogPermissionVisible, "onUpdate:modelValue": e[3] || (e[3] = (i) => o.dialogPermissionVisible = i), title: o.$t("upms.role.assignPermission") }, { footer: l(() => [M("div", oe, [Z((C(), L(t, { type: "primary", onClick: e[2] || (e[2] = (i) => n.updatePermession(o.id)) }, { default: l(() => [w(V(o.$t("upms.role.update")), 1)]), _: 1 })), [[d, o.dialogLoading]])])]), default: l(() => [f(y, { class: "filter-tree", data: o.treeData, "default-checked-keys": o.checkedKeys, "check-strictly": false, "node-key": "id", ref: "menuTree", "highlight-current": "", props: o.defaultProps, "show-checkbox": "", "filter-node-method": n.filterNode, "default-expand-all": "" }, null, 8, ["data", "default-checked-keys", "props", "filter-node-method"])]), _: 1 }, 8, ["modelValue", "title"])]);
}
const ie = F(x, [["render", ae]]);
export {
  ie as default
};
