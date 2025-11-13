import { aO as b, n as L, q as V, U as $, A as q, R as O, K as z, S as N, b1 as _, _ as E, r as u, c as M, o as T, b as r, h as p, e as c, z as h, g as R, B as I, f as U, a_ as j } from "./index-DAdfXJ2i.js";
import A from "./index-DHjOFW3f.js";
import F from "./index-CjnAwTq8.js";
import { M as H } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
function G(e) {
  return b.request("get", "/mall/viptype/page", { params: e });
}
function K(e) {
  return b.request("post", "/mall/viptype", { data: e });
}
function Z(e) {
  return b.request("delete", "/mall/viptype/" + e);
}
function B(e) {
  return b.request("put", "/mall/viptype", { data: e });
}
const { $t: n } = L(), J = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, searchGutter: 50, searchLabelPosition: "right", labelPosition: "left", column: [{ label: n("mall.viptype.vipName"), prop: "vipName", span: 13, rules: [{ required: true, message: n("commons.inputPlease") + n("mall.viptype.vipName"), trigger: "blur" }, { max: 32, message: n("commons.lengthTips", { length: 32 }) }] }, { label: n("mall.viptype.sort"), prop: "sort", span: 13, sortable: true, rules: [{ required: true, message: n("commons.inputPlease") + n("mall.viptype.sort"), trigger: "blur" }] }, { label: n("mall.viptype.backgroundImage"), prop: "backgroundImage", type: "img", span: 13, rules: [{ required: true, message: n("commons.inputPlease") + n("mall.viptype.backgroundImage"), trigger: "blur" }, { max: 200, message: n("commons.lengthTips", { length: 200 }) }] }, { label: n("mall.viptype.icon"), prop: "icon", span: 13, type: "img", rules: [{ required: true, message: n("commons.inputPlease") + n("mall.viptype.icon"), trigger: "blur" }, { max: 200, message: n("commons.lengthTips", { length: 200 }) }] }, { label: n("commons.enabled"), prop: "enable", sortable: true, span: 12, type: "radio", value: "1", rules: [{ required: true, message: n("commons.notNull"), trigger: "blur" }], dicData: [{ label: n("commons.close"), value: "0" }, { label: n("commons.open"), value: "1" }] }, { label: n("mall.viptype.remark"), prop: "remark", type: "textarea", span: 24, minRows: 0, maxRows: 2, rules: [{ max: 200, message: n("commons.lengthTips", { length: 200 }) }] }, { label: n("mall.viptype.createTime"), prop: "createTime", sortable: true, display: false, rules: [{ required: true, message: n("commons.inputPlease") + n("mall.viptype.createTime"), trigger: "blur" }] }, { label: n("mall.viptype.updateTime"), prop: "updateTime", sortable: true, display: false, rules: [{ required: true, message: n("commons.inputPlease") + n("mall.viptype.updateTime"), trigger: "blur" }] }] }, Q = { name: "viptype", components: { VipCost: A, VipRights: F, MaterialList: H }, setup() {
  const e = V(() => {
    var _a;
    return (_a = $()) == null ? void 0 : _a.initConfig;
  }), { proxy: o } = q(), t = O({ form: { icon: "", backgroundImage: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "sort", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: J, vipcost: { dialog: false }, viprights: { dialog: false }, curRow: { id: "" } }), l = z().permissions, P = V(() => ({ addBtn: !!l["mall:viptype:add"], delBtn: !!l["mall:viptype:del"], editBtn: !!l["mall:viptype:edit"], viewBtn: !!l["mall:viptype:get"] }));
  function m(a, s) {
    t.tableLoading = true, G(Object.assign({ current: a.currentPage, size: a.pageSize, descs: t.page.descs, ascs: t.page.ascs }, s, t.paramsSearch)).then((g) => {
      t.tableData = g.data.records, t.page.total = g.data.total, t.page.currentPage = a.currentPage, t.page.pageSize = a.pageSize, t.tableLoading = false;
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function d(a) {
    o.$confirm(o.$t("commons.delConfirm"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return Z(a.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), m(t.page);
    });
  }
  function y(a, s, g, D) {
    B(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), g(), m(t.page);
    }).catch(() => {
      D();
    });
  }
  function f(a, s, g) {
    K(a).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), s(), m(t.page);
    }).catch(() => {
      g();
    });
  }
  function S(a, s) {
    a = _(a), t.paramsSearch = a, t.page.currentPage = 1, m(t.page, a), s();
  }
  function C(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (t.page.descs = "", t.page.ascs = s) : a.order == "descending" ? (t.page.ascs = "", t.page.descs = s) : (t.page.ascs = "", t.page.descs = ""), m(t.page);
  }
  function w() {
    m(t.page);
  }
  function v(a) {
    a && a.id && B({ id: a.id, enable: a.enable }).then(() => {
    });
  }
  function k(a) {
    t.curRow = a, t.vipcost.dialog = true;
  }
  function i(a) {
    t.curRow = a, t.viprights.dialog = true;
  }
  return { ...N(t), initConfig: e, permissions: l, permissionList: P, getPageF: m, handleDel: d, handleUpdate: y, handleSave: f, searchChange: S, sortChange: C, changeEnable: v, viprightsSet: i, vipcostSet: k, refreshChange: w };
} }, W = { class: "jl-text-tips" }, X = { class: "jl-text-tips" };
function Y(e, o, t, l, P, m) {
  const d = u("el-button"), y = u("el-switch"), f = u("MaterialList"), S = u("avue-crud"), C = j, w = u("vip-cost"), v = u("el-dialog"), k = u("vip-rights");
  return T(), M("div", null, [r(C, null, { default: p(() => [r(S, { ref: "crud", modelValue: e.form, "onUpdate:modelValue": o[4] || (o[4] = (i) => e.form = i), page: e.page, "onUpdate:page": o[5] || (o[5] = (i) => e.page = i), data: e.tableData, permission: l.permissionList, "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: l.getPageF, onRefreshChange: l.refreshChange, onRowUpdate: l.handleUpdate, onRowSave: l.handleSave, onRowDel: l.handleDel, onSortChange: l.sortChange, onSearchChange: l.searchChange }, { menu: p((i) => [l.initConfig.VERSION_01_SUPPER_VIP_STATUS === 1 ? (T(), R(d, { key: 0, icon: "el-icon-key", link: "", type: "primary", onClick: (a) => l.vipcostSet(i.row) }, { default: p(() => [U(h(e.$t("mall.viptype.vipFeeSet")), 1)]), _: 1 }, 8, ["onClick"])) : I("", true), l.initConfig.VERSION_01_SUPPER_VIP_STATUS === 1 ? (T(), R(d, { key: 1, icon: "el-icon-collection-tag", type: "primary", link: "", onClick: (a) => l.viprightsSet(i.row) }, { default: p(() => [U(h(e.$t("mall.viptype.vipDiscountSet")), 1)]), _: 1 }, 8, ["onClick"])) : I("", true)]), enable: p((i) => [r(y, { "active-value": "1", "inactive-value": "0", modelValue: i.row.enable, "onUpdate:modelValue": (a) => i.row.enable = a, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (a) => l.changeEnable(i.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "icon-form": p(() => [c("div", null, [r(f, { value: e.form.icon && e.form.icon.length ? [e.form.icon] : [], onSureSuccess: o[0] || (o[0] = (i) => e.form.icon = i ? i[0] : ""), onDeleteMaterial: o[1] || (o[1] = (i) => e.form.icon = ""), type: "image", num: 1, width: 120, height: 36 }, null, 8, ["value"]), c("p", W, h(e.$t("commons.imageSizeTip", { size: "120px*36px" })), 1)])]), "backgroundImage-form": p(() => [c("div", null, [r(f, { value: e.form.backgroundImage && e.form.backgroundImage.length ? [e.form.backgroundImage] : [], onSureSuccess: o[2] || (o[2] = (i) => e.form.backgroundImage = i ? i[0] : ""), onDeleteMaterial: o[3] || (o[3] = (i) => e.form.backgroundImage = ""), type: "image", num: 1, width: 260, height: 130 }, null, 8, ["value"]), c("p", X, h(e.$t("commons.imageSizeTip", { size: "736px*360px" })), 1)])]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 }), r(v, { title: e.$t("mall.viptype.vipFeeSet"), modelValue: e.vipcost.dialog, "onUpdate:modelValue": o[6] || (o[6] = (i) => e.vipcost.dialog = i), width: "880px" }, { default: p(() => [c("div", null, [r(w, { vipTypeId: e.curRow.id }, null, 8, ["vipTypeId"])])]), _: 1 }, 8, ["title", "modelValue"]), r(v, { title: e.$t("mall.viptype.vipDiscountSet"), modelValue: e.viprights.dialog, "onUpdate:modelValue": o[7] || (o[7] = (i) => e.viprights.dialog = i), width: "880px" }, { default: p(() => [c("div", null, [r(k, { vipTypeId: e.curRow.id }, null, 8, ["vipTypeId"])])]), _: 1 }, 8, ["title", "modelValue"])]);
}
const re = E(Q, [["render", Y]]);
export {
  re as default
};
