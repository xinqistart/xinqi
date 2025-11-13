import { n as O, A as R, R as N, p as K, K as M, q as U, S as _, b1 as j, _ as z, r as g, j as F, c as A, o as u, b as f, h as d, g as C, B as L, f as w, z as D, e as q, w as E, a_ as H } from "./index-DAdfXJ2i.js";
import { b as W, p as Z, d as G, g as J } from "./tenantpackage-D3Nb2FO1.js";
import { p as Q, g as X } from "./tenantpackagemenu-Moa1a5ji.js";
import { b as Y } from "./menu-Cs0Cprgy.js";
import x from "./index-Cer_QWGK.js";
import "./tenantpackagecost-VuyOGNHB.js";
import "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const { $t: o } = O(), ee = { dialogDrag: true, indexLabel: o("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelPosition: "left", column: [{ label: o("upms.tenantpackage.name"), prop: "name", span: 11, sortable: true, rules: [{ required: true, message: o("upms.tenantpackage.name") + o("commons.notNull"), trigger: "blur" }, { max: 255, message: o("commons.lengthTips", { length: 255 }) }] }, { label: o("upms.tenantpackage.mallMode"), prop: "mallMode", sortable: true, span: 12, searchLabelWidth: 100, type: "select", search: true, editDisabled: true, dicData: [{ label: o("upms.tenantpackage.singleStoreMode"), value: "1" }, { label: o("upms.tenantpackage.multiStoreMode"), value: "2" }], rules: [{ required: true, message: o("upms.tenantpackage.mallMode") + o("commons.notNull"), trigger: "blur" }, { max: 1, message: o("commons.lengthTips", { length: 1 }) }] }, { label: o("commons.createTime"), prop: "createTime", sortable: true, display: false, rules: [] }, { label: o("upms.tenantpackage.updateTime"), prop: "updateTime", sortable: true, display: false, rules: [] }, { label: o("upms.tenantpackage.description"), prop: "description", type: "textarea", span: 11, sortable: true, rules: [{ max: 65535, message: o("commons.lengthTips", { length: 65535 }) }] }] }, ae = { name: "tenantpackage", components: { tenantPackageCost: x }, setup() {
  const { proxy: a } = R(), e = N({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: ee, checkedKeys: [], dialogPermissionVisible: false, treeData: [], menuIds: [], id: void 0, defaultProps: { label: "name", value: "id" }, dialogLoading: false, dialogCostVisible: false }), h = K(null), n = M().permissions, $ = U(() => ({ addBtn: !!n["upms:tenantpackage:add"], delBtn: !!n["upms:tenantpackage:del"], editBtn: !!n["upms:tenantpackage:edit"], viewBtn: !!n["upms:tenantpackage:get"] }));
  function r(t, s) {
    e.tableLoading = true, J(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((i) => {
      e.tableData = i.data.records, e.page.total = i.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function c(t) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return G(t.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function y(t, s, i, m) {
    Z(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), i(), r(e.page);
    }).catch(() => {
      m();
    });
  }
  function S(t, s, i) {
    W(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), s(), r(e.page);
    }).catch(() => {
      i();
    });
  }
  function b(t, s) {
    t = j(t), e.paramsSearch = t, e.page.currentPage = 1, r(e.page, t), s();
  }
  function P(t) {
    const s = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function V() {
    r(e.page);
  }
  function v(t) {
    e.dialogLoading = true, e.menuIds = [], e.menuIds = h.value.getCheckedKeys().concat(h.value.getHalfCheckedKeys()), Q({ packageId: t, menuIds: e.menuIds }).then(() => {
      e.dialogLoading = false, e.dialogPermissionVisible = false, a.$notify({ title: a.$t("commons.success"), message: a.$t("commons.updateSuccess"), type: "success", duration: 2e3 });
    }).catch(() => {
      e.dialogLoading = false;
    });
  }
  function l(t) {
    e.tableLoading = true, X(t.id).then((s) => (e.checkedKeys = s.data.menuIds, Y())).then((s) => {
      e.id = t.id, e.treeData = s.data, e.checkedKeys = p(e.treeData, e.checkedKeys, []), e.dialogPermissionVisible = true, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function p(t, s, i) {
    for (let m = 0; m < t.length; m++) {
      const k = t[m];
      k.children && k.children.length !== 0 ? p(k.children, s, i) : i.push(s.filter((I) => I === k.id));
    }
    return i;
  }
  function T(t, s) {
    return t ? s.label.indexOf(t) !== -1 : true;
  }
  function B(t) {
    e.id = t.id, e.dialogCostVisible = true;
  }
  return { ..._(e), permissions: n, permissionList: $, getPageF: r, handleDel: c, handleUpdate: y, handleSave: S, searchChange: b, sortChange: P, refreshChange: V, handlePermission: l, resolveAllEunuchNodeId: p, filterNode: T, updatePermession: v, menuTree: h, handleCost: B };
} }, te = { class: "dialog-footer" };
function ne(a, e, h, n, $, r) {
  const c = g("el-button"), y = g("avue-crud"), S = g("el-tree"), b = g("el-dialog"), P = g("tenantPackageCost"), V = H, v = F("loading");
  return u(), A("div", null, [f(V, null, { default: d(() => [f(y, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (l) => a.form = l), page: a.page, "onUpdate:page": e[1] || (e[1] = (l) => a.page = l), data: a.tableData, permission: n.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, { menu: d((l) => [n.permissions["upms:tenantpackagemenu:get"] ? (u(), C(c, { key: 0, type: "primary", link: "", onClick: (p) => n.handlePermission(l.row) }, { default: d(() => [w(D(a.$t("upms.tenantpackage.packageMenuPermissions")), 1)]), _: 1 }, 8, ["onClick"])) : L("", true), n.permissions["upms:tenantpackagecost:index"] ? (u(), C(c, { key: 1, type: "primary", link: "", onClick: (p) => n.handleCost(l.row) }, { default: d(() => [w(D(a.$t("upms.tenantpackage.packageFeeConfiguration")), 1)]), _: 1 }, 8, ["onClick"])) : L("", true)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), f(b, { modelValue: a.dialogPermissionVisible, "onUpdate:modelValue": e[3] || (e[3] = (l) => a.dialogPermissionVisible = l), title: a.$t("upms.tenantpackage.roleSet") }, { footer: d(() => [q("div", te, [E((u(), C(c, { type: "primary", onClick: e[2] || (e[2] = (l) => n.updatePermession(a.id)) }, { default: d(() => [w(D(a.$t("upms.tenantpackage.updateTime")), 1)]), _: 1 })), [[v, a.dialogLoading]])])]), default: d(() => [a.dialogPermissionVisible ? (u(), C(S, { key: 0, class: "filter-tree", data: a.treeData, "default-checked-keys": a.checkedKeys, "check-strictly": false, "node-key": "id", "highlight-current": "", ref: "menuTree", props: a.defaultProps, "show-checkbox": "", "filter-node-method": n.filterNode, "default-expand-all": "" }, null, 8, ["data", "default-checked-keys", "props", "filter-node-method"])) : L("", true)]), _: 1 }, 8, ["modelValue", "title"]), f(b, { modelValue: a.dialogCostVisible, "onUpdate:modelValue": e[4] || (e[4] = (l) => a.dialogCostVisible = l), title: a.$t("upms.tenantpackage.packageFee") }, { default: d(() => [f(P, { packageId: a.id }, null, 8, ["packageId"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const he = z(ae, [["render", ne]]);
export {
  he as default
};
