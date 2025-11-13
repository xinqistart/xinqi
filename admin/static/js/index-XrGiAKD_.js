import { aO as p, n as V, A as $, R as x, K as B, q as P, S as R, b1 as v, _ as N, r as T, c as O, o as q, b as m, h, e as C, z as D, a_ as w } from "./index-DAdfXJ2i.js";
import { M as z } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
function k(a) {
  return p.request("get", "/mall/usergradeconfig/page", { params: a });
}
function W(a) {
  return p.request("post", "/mall/usergradeconfig", { data: a });
}
function U(a) {
  return p.request("delete", "/mall/usergradeconfig/" + a);
}
function _(a) {
  return p.request("put", "/mall/usergradeconfig", { data: a });
}
const { $t: n } = V();
function j(a) {
  return { dialogDrag: true, indexLabel: n("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 120, searchLabelPosition: "right", labelPosition: "left", column: [{ label: n("mall.usergradeconfig.gradeName"), prop: "gradeName", span: 24, labelWidth: 170, rules: [{ required: true, message: n("mall.usergradeconfig.gradeName") + n("commons.notNull"), trigger: "blur" }, { max: 32, message: n("commons.lengthTips", { length: 32 }) }] }, { label: n("mall.usergradeconfig.grade"), prop: "grade", sortable: true, addDisabled: true, editDisabled: true, type: "number", placeholder: n("mall.usergradeconfig.gradeTip"), span: 24, labelWidth: 170 }, { label: n("mall.usergradeconfig.discount"), prop: "discount", type: "number", min: 0, max: 100, sortable: true, span: 24, labelWidth: 170, labelTip: n("mall.usergradeconfig.discountTip"), rules: [{ required: true, message: n("mall.usergradeconfig.discount") + n("commons.notNull"), trigger: "blur" }] }, { label: n("mall.usergradeconfig.deblockingValue"), prop: "deblockingValue", type: "number", sortable: true, span: 24, labelWidth: 170, labelTip: n("mall.usergradeconfig.deblockingValueTip"), rules: [{ required: true, message: n("mall.usergradeconfig.deblockingValue") + n("commons.notNull"), trigger: "blur" }, { validator: a, trigger: "blur" }] }, { label: n("mall.usergradeconfig.remark"), hide: true, prop: "remark", type: "textarea", span: 24, labelWidth: 170, rules: [{ max: 200, message: n("commons.lengthTips", { length: 200 }) }] }, { label: n("mall.usergradeconfig.icon"), prop: "icon", type: "img", dataType: "array", labelWidth: 170, span: 24, viewDisabled: true, rules: [{ required: true, type: "array", message: n("commons.notNull"), trigger: "blur" }] }, { label: n("mall.usergradeconfig.backgroundImage"), prop: "backgroundImage", dataType: "array", labelWidth: 170, span: 24, type: "img", rules: [{ required: true, message: n("commons.notNull"), trigger: "blur" }] }, { label: n("commons.createTime"), prop: "createTime", span: 24, labelWidth: 170, hide: true, addDisplay: false, editDisplay: false }, { label: n("commons.updateTime"), prop: "updateTime", span: 24, labelWidth: 170, sortable: true, addDisplay: false, editDisplay: false }] };
}
const M = { components: { MaterialList: z }, setup() {
  const { proxy: a } = $(), e = x({ form: { icon: void 0, grade: void 0, backgroundImage: void 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: j(async (r, t, s) => {
    if (e.form.grade > 0) {
      const L = await k({ grade: e.form.grade - 1 });
      t <= L.data.records[0].deblockingValue && s(new Error(a.$t("mall.usergradeconfig.unlockValueGreaterThanPrev")));
    }
    const c = await k({ grade: e.form.grade + 1 });
    c.data.records && c.data.records.length > 0 && t >= c.data.records[0].deblockingValue && s(new Error(a.$t("mall.usergradeconfig.unlockValueLessThanNext"))), s();
  }) }), o = B().permissions, y = P(() => ({ addBtn: !!o["mall:usergradeconfig:add"], delBtn: !!o["mall:usergradeconfig:del"], editBtn: !!o["mall:usergradeconfig:edit"], viewBtn: !!o["mall:usergradeconfig:get"] }));
  function g(r, t) {
    e.tableLoading = true, k(v({ current: r.currentPage, size: r.pageSize, descs: e.page.descs, ascs: e.page.ascs, ...t, ...e.paramsSearch })).then((s) => {
      e.tableData = s.data.records, e.page.total = s.data.total, e.page.currentPage = r.currentPage, e.page.pageSize = r.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(r) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return U(r.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), g(e.page);
    });
  }
  function f(r, t, s, c) {
    r.backgroundImage = r.backgroundImage.length > 0 ? r.backgroundImage[0] : "", r.icon = r.icon.length > 0 ? r.icon[0] : "", _(r).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), s(), g(e.page);
    }).catch(() => {
      c();
    });
  }
  function b(r, t, s) {
    r.backgroundImage = r.backgroundImage.length > 0 ? r.backgroundImage[0] : "", r.icon = r.icon.length > 0 ? r.icon[0] : "", W(r).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), t(), g(e.page);
    }).catch(() => {
      s(), S();
    });
  }
  function i(r, t) {
    r = v(r), e.paramsSearch = r, e.page.currentPage = 1, g(e.page, r), t();
  }
  function d(r) {
    const t = r.prop ? r.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    r.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : r.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), g(e.page);
  }
  function S() {
    g(e.page);
  }
  function I(r, t) {
    t == "add" ? (e.form.grade = e.form.grade ? e.form.grade : e.page.total, e.form.icon = [], e.form.backgroundImage = []) : (e.form.icon = [e.form.icon], e.form.backgroundImage = [e.form.backgroundImage]), r();
  }
  return { ...R(e), permissions: o, permissionList: y, getPageF: g, handleDel: u, handleUpdate: f, handleSave: b, searchChange: i, sortChange: d, beforeOpen: I, refreshChange: S };
} }, A = { class: "jl-text-tips" }, E = { class: "jl-text-tips" };
function F(a, l, e, o, y, g) {
  const u = T("MaterialList"), f = T("avue-crud"), b = w;
  return q(), O("div", null, [m(b, null, { default: h(() => [m(f, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": l[2] || (l[2] = (i) => a.form = i), page: a.page, "onUpdate:page": l[3] || (l[3] = (i) => a.page = i), data: a.tableData, permission: o.permissionList, "table-loading": a.tableLoading, option: a.tableOption, "before-open": o.beforeOpen, onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { "icon-form": h((i) => [m(u, { value: a.form.icon, "onUpdate:value": l[0] || (l[0] = (d) => a.form.icon = d), type: "image", disabled: i.disabled, num: 1, width: 130, height: 40 }, null, 8, ["value", "disabled"]), C("p", A, D(a.$t("commons.imageSizeTip", { size: "258px*78px" })), 1)]), "backgroundImage-form": h((i) => [m(u, { value: a.form.backgroundImage, "onUpdate:value": l[1] || (l[1] = (d) => a.form.backgroundImage = d), type: "image", disabled: i.disabled, num: 1, width: 240, height: 115 }, null, 8, ["value", "disabled"]), C("p", E, D(a.$t("commons.imageSizeTip", { size: "724px*346px" })), 1)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Y = N(M, [["render", F]]);
export {
  Y as default
};
