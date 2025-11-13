import { n as b, A as y, R as w, p as D, K as v, q as _, S as C, _ as S, r as L, c as $, o as R, b as c, h as x, a_ as B } from "./index-DAdfXJ2i.js";
import { g as I, a as O, p as T, d as q, f as N } from "./organ-Uz8t_88q.js";
const { $t: e } = b(), U = (a, n, s) => {
  window.openType === "edit" ? s() : I({ code: n }).then((t) => {
    t.data.length > 0 ? s(new Error(e("upms.organ.orgCodeExists"))) : s();
  });
}, E = { dialogDrag: true, headerAlign: "center", align: "center", viewBtn: true, defaultExpandAll: true, searchMenuSpan: 6, labelPosition: "left", column: [{ label: e("upms.organ.parentId"), prop: "parentId", type: "tree", hide: true, span: 11, defaultExpandAll: true, checkStrictly: true, width: 260, props: { label: "name", value: "id" }, rules: [{ required: true, message: e("upms.organ.parentId") + e("commons.notNull"), trigger: "change" }] }, { label: e("upms.organ.name"), prop: "name", align: "left", offset: 1, span: 12, width: 260, rules: [{ required: true, message: e("upms.organ.name") + e("commons.notNull"), trigger: "blur" }] }, { label: e("upms.organ.type"), prop: "type", type: "select", span: 11, dicUrl: "/upms/dict/type/organ_type", rules: [{ required: true, message: e("upms.organ.type") + e("commons.notNull"), trigger: "blur" }] }, { label: e("upms.organ.code"), hide: true, offset: 1, span: 12, prop: "code", editDisabled: true, rules: [{ required: true, message: e("upms.organ.code") + e("commons.notNull"), trigger: "blur" }, { validator: U, trigger: "blur" }] }, { label: e("upms.organ.sort"), type: "number", span: 11, prop: "sort", rules: [{ required: true, message: e("upms.organ.sort") + e("commons.notNull"), trigger: "blur" }] }, { label: e("upms.organ.phone"), hide: true, offset: 1, span: 12, prop: "phone" }, { label: e("upms.organ.fax"), span: 11, hide: true, prop: "fax" }, { label: e("upms.organ.email"), hide: true, offset: 1, span: 12, prop: "email" }, { label: e("upms.organ.address"), hide: true, span: 11, prop: "address" }, { label: e("upms.organ.remarks"), hide: true, offset: 1, span: 12, prop: "remarks" }, { label: e("commons.createTime"), prop: "createTime", span: 11, editDisplay: false, addDisplay: false }, { label: e("upms.organ.updateTime"), prop: "updateTime", hide: true, editDisplay: false, addDisplay: false }] }, P = { setup() {
  var _a;
  const { proxy: a } = y(), n = w({ form: {}, tableOption: E, tableData: [], tableLoading: false, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" } }), s = D(null), t = (_a = v()) == null ? void 0 : _a.permissions, p = _(() => ({ addBtn: !!t["sys:organ:add"], delBtn: !!t["sys:organ:del"], editBtn: !!t["sys:organ:edit"], viewBtn: !!t["sys:organ:get"] }));
  function r() {
    n.tableLoading = true, N().then((o) => {
      n.tableData = o.data, s.value.DIC.parentId = n.tableData, n.tableData.length <= 0 && (s.value.DIC.parentId = n.tableData.concat([{ id: "0", name: a.$t("upms.menu.topLevel") }])), n.tableLoading = false;
    }).catch(() => {
      n.tableLoading = false;
    });
  }
  function d(o) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return q(o.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), r();
    });
  }
  function i() {
    r();
  }
  function u(o, l, m, h) {
    T(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), m(), r();
    }).catch(() => {
      h();
    });
  }
  function g(o, l, m) {
    O(o).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), l(), r();
    }).catch(() => {
      m();
    });
  }
  function f(o, l) {
    window.openType = l, o();
  }
  return { ...C(n), permissions: t, permissionList: p, getPageF: r, handleDel: d, handleUpdate: u, handleSave: g, refreshChange: i, beforeOpen: f, crud: s };
} }, k = { class: "app-container calendar-list-container" };
function A(a, n, s, t, p, r) {
  const d = L("avue-crud"), i = B;
  return R(), $("div", k, [c(i, null, { default: x(() => [c(d, { ref: "crud", onOnLoad: t.getPageF, option: a.tableOption, data: a.tableData, permission: t.permissionList, "table-loading": a.tableLoading, "before-open": t.beforeOpen, modelValue: a.form, "onUpdate:modelValue": n[0] || (n[0] = (u) => a.form = u), onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel }, null, 8, ["onOnLoad", "option", "data", "permission", "table-loading", "before-open", "modelValue", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel"])]), _: 1 })]);
}
const F = S(P, [["render", A]]);
export {
  F as default
};
