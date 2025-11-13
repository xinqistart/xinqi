import { aO as m, n as N, A as E, R as M, p as A, q as G, K as W, S as Z, b1 as U, cm as H, _ as K, r as p, c as z, o as k, b as d, h as c, e as _, g as $, B as x, f as P, z as y, F as J, v as Q, a_ as X } from "./index-DAdfXJ2i.js";
import { _ as ee } from "./goods-card-item-0N1hfAvK.js";
import { a as le, g as ae } from "./seckillinfo-xOI7603-.js";
function ne(a) {
  return m.request("get", "/mall/seckillhall/page", { params: a });
}
function oe(a) {
  return m.request("post", "/mall/seckillhall", { data: a });
}
function te(a) {
  return m.request("get", "/mall/seckillhall/" + a);
}
function se(a) {
  return m.request("delete", "/mall/seckillhall/" + a);
}
function q(a) {
  return m.request("put", "/mall/seckillhall", { data: a });
}
const { $t: i } = N(), ie = { dialogDrag: true, indexLabel: i("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 90, searchGutter: 50, searchLabelWidth: 90, searchLabelPosition: "right", column: [{ label: i("mall.seckillhall.hallDate"), prop: "hallDate", type: "date", format: "YYYY-MM-DD", valueFormat: "YYYY-MM-DD", search: true, sortable: true, rules: [{ required: true, message: i("mall.seckillhall.hallDate") + i("commons.notNull"), trigger: "blur" }] }, { label: i("mall.seckillhall.hallTime"), prop: "hallTime", type: "select", filterable: true, sortable: true, labelTip: "\u79D2\u6740\u65F6\u95F4\u671F\u9650\u53EA\u5728\u5F53\u524D\u5C0F\u65F6\u5185,\u6BD4\u5982:\u9009\u62E9\u4E8610,\u90A3\u4E48\u79D2\u6740\u65F6\u95F4\u4E3A 10:00-11:00", dicData: [{ label: "00:00", value: "0" }, { label: "01:00", value: "1" }, { label: "02:00", value: "2" }, { label: "03:00", value: "3" }, { label: "04:00", value: "4" }, { label: "05:00", value: "5" }, { label: "06:00", value: "6" }, { label: "07:00", value: "7" }, { label: "08:00", value: "8" }, { label: "09:00", value: "9" }, { label: "10:00", value: "10" }, { label: "11:00", value: "11" }, { label: "12:00", value: "12" }, { label: "13:00", value: "13" }, { label: "14:00", value: "14" }, { label: "15:00", value: "15" }, { label: "16:00", value: "16" }, { label: "17:00", value: "17" }, { label: "18:00", value: "18" }, { label: "19:00", value: "19" }, { label: "20:00", value: "20" }, { label: "21:00", value: "21" }, { label: "22:00", value: "22" }, { label: "23:00", value: "23" }], rules: [{ required: true, message: i("mall.seckillhall.hallTime") + i("commons.notNull"), trigger: "blur" }] }, { label: i("commons.enabled"), prop: "enable", type: "radio", search: true, sortable: true, slot: true, rules: [{ required: true, message: i("commons.notNull"), trigger: "blur" }], dicData: [{ label: i("commons.close"), value: "0" }, { label: i("commons.open"), value: "1" }] }, { label: i("mall.seckillhall.listSeckillInfo"), prop: "listSeckillInfo", formslot: true, hide: true, span: 24 }] }, re = { setup() {
  const { proxy: a } = E(), e = M({ form: { id: "", listSeckillInfo: [] }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: ie, form2: {}, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch2: {}, tableLoading2: false, tableOption2: le, selectionSeckillInfo: [], dialogVisibleSeckillInfo: false }), v = A(null), o = G(() => {
    var _a;
    const l = (_a = W()) == null ? void 0 : _a.permissions;
    return { addBtn: !!l["mall:seckillhall:add"], delBtn: !!l["mall:seckillhall:del"], editBtn: !!l["mall:seckillhall:edit"], viewBtn: !!l["mall:seckillhall:get"] };
  });
  function O(l) {
    e.form.listSeckillInfo.splice(l, 1);
  }
  function B() {
    let l = e.form.listSeckillInfo;
    l = [...l, ...e.selectionSeckillInfo], e.form.listSeckillInfo = H(l), e.dialogVisibleSeckillInfo = false;
  }
  function C(l) {
    e.selectionSeckillInfo = l;
  }
  function u(l, t) {
    e.tableLoading2 = true, ae(Object.assign({ current: l.currentPage, size: l.pageSize, descs: e.page2.descs, ascs: e.page2.ascs }, t, e.paramsSearch2)).then((r) => {
      const g = r.data.records;
      e.tableData2 = g, e.page2.total = r.data.total, e.page2.currentPage = l.currentPage, e.page2.pageSize = l.pageSize, e.tableLoading2 = false, a.$nextTick(() => {
        v.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function I(l, t) {
    l = U(l), e.paramsSearch2 = l, e.page2.currentPage = 1, u(e.page2, l), t();
  }
  function w(l) {
    u(l.page);
  }
  function L(l) {
    const t = l.prop ? l.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    l.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = t) : l.order == "descending" ? (e.page2.ascs = "", e.page2.descs = t) : (e.page2.ascs = "", e.page2.descs = ""), s(e.page);
  }
  function h() {
    e.tableData2 = [], e.dialogVisibleSeckillInfo = true, u(e.page2);
  }
  function D(l, t) {
    (t == "edit" || t == "view") && te(e.form.id).then((r) => {
      const g = r.data;
      e.form.listSeckillInfo = g.listSeckillInfo;
    }), l();
  }
  function V(l, t) {
    l = U(l), e.paramsSearch = l, e.page.currentPage = 1, s(e.page, l), t();
  }
  function n(l) {
    const t = l.prop ? l.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    l.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : l.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), s(e.page);
  }
  function s(l, t) {
    e.tableLoading = true, ne(Object.assign({ current: l.currentPage, size: l.pageSize, descs: e.page.descs, ascs: e.page.ascs }, t, e.paramsSearch)).then((r) => {
      e.tableData = r.data.records, e.page.total = r.data.total, e.page.currentPage = l.currentPage, e.page.pageSize = l.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function b(l) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return se(l.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), s(e.page);
    });
  }
  function R(l, t, r, g) {
    const f = l.listSeckillInfo, S = [];
    f && f.forEach(function(j) {
      S.push({ id: j.id });
    }), l.listSeckillInfo = S, q(l).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), r(), s(e.page);
    }).catch(() => {
      g();
    });
  }
  function T(l, t, r) {
    const g = l.listSeckillInfo, f = [];
    g && g.forEach(function(S) {
      f.push({ id: S.id });
    }), l.listSeckillInfo = f, oe(l).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), t(), s(e.page);
    }).catch(() => {
      r();
    });
  }
  function F() {
    s(e.page);
  }
  function Y(l) {
    l && l.id && q({ id: l.id, enable: l.enable }).then(() => {
    });
  }
  return { ...Z(e), permissionList: o, removeSeckillInfo: O, subGoods: B, selectionChange2: C, getPage2F: u, searchChange2: I, refreshChange2: w, sortChange2: L, showSeckillInfoList: h, beforeOpen: D, searchChange: V, sortChange: n, getPageF: s, handleDel: b, handleUpdate: R, handleSave: T, refreshChange: F, changeEnable: Y, crud: v };
} }, ce = { class: "execution" }, de = ["src"], ue = { class: "dialog-footer" };
function ge(a, e, v, o, O, B) {
  const C = p("el-switch"), u = p("el-button"), I = ee, w = p("el-col"), L = p("el-row"), h = p("avue-crud"), D = p("el-dialog"), V = X;
  return k(), z("div", ce, [d(V, null, { default: c(() => [d(h, { ref: "crud1", page: a.page, "onUpdate:page": e[1] || (e[1] = (n) => a.page = n), data: a.tableData, permission: o.permissionList, "table-loading": a.tableLoading, option: a.tableOption, "before-open": o.beforeOpen, modelValue: a.form, "onUpdate:modelValue": e[2] || (e[2] = (n) => a.form = n), onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { enable: c((n) => [d(C, { "active-value": "1", "inactive-value": "0", modelValue: n.row.enable, "onUpdate:modelValue": (s) => n.row.enable = s, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (s) => o.changeEnable(n.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "listSeckillInfo-form": c((n) => [_("div", null, [n.column.boxType != "view" ? (k(), $(u, { key: 0, size: "small", type: "primary", onClick: e[0] || (e[0] = (s) => o.showSeckillInfoList()) }, { default: c(() => [P(y(a.$t("mall.seckillhall.selectSeckillProduct")), 1)]), _: 1 })) : x("", true), d(L, { gutter: 4, class: "mt-[5px]" }, { default: c(() => [(k(true), z(J, null, Q(a.form.listSeckillInfo, (s, b) => (k(), $(w, { span: 4, key: s.id }, { default: c(() => [d(I, { "pic-url": s.picUrl, item: s, index: b, disabled: n.type == "view", onRemoveIndex: (R) => o.removeSeckillInfo(b) }, null, 8, ["pic-url", "item", "index", "disabled", "onRemoveIndex"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "before-open", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), d(D, { title: a.$t("mall.seckillhall.selectSeckillProductPrompt"), modelValue: a.dialogVisibleSeckillInfo, "onUpdate:modelValue": e[6] || (e[6] = (n) => a.dialogVisibleSeckillInfo = n), width: "90%", top: "20px" }, { footer: c(() => [_("span", ue, [d(u, { onClick: e[5] || (e[5] = (n) => a.dialogVisibleSeckillInfo = false) }, { default: c(() => [P(y(a.$t("commons.cancel")), 1)]), _: 1 }), d(u, { type: "primary", onClick: o.subGoods }, { default: c(() => [P(y(a.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])])]), default: c(() => [d(h, { ref: "crud", modelValue: a.form2, "onUpdate:modelValue": e[3] || (e[3] = (n) => a.form2 = n), page: a.page2, "onUpdate:page": e[4] || (e[4] = (n) => a.page2 = n), data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onOnLoad: o.getPage2F, onRefreshChange: o.refreshChange2, onSortChange: o.sortChange2, onSearchChange: o.searchChange2, onSelectionChange: o.selectionChange2 }, { picUrl: c((n) => [_("img", { style: { height: "100px" }, src: n.row.picUrl }, null, 8, de)]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange", "onSelectionChange"])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 })]);
}
const he = K(re, [["render", ge]]);
export {
  he as default
};
