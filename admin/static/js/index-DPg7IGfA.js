import { A as S, R as L, p as V, q as w, K as N, S as $, b1 as y, _ as P, r as m, c as B, o as U, b as s, h as r, g as O, B as R, a_ as D } from "./index-DAdfXJ2i.js";
import { b as I, p as k, c as z, d as E, g as T } from "./seckillinfo-xOI7603-.js";
import { M as j } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const F = { components: { MaterialList: j }, setup() {
  const { proxy: o } = S(), a = L({ form: { picUrl: void 0, shopId: "", seckillNum: 0, limitNum: 0, eachLimitNum: 0 }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: I, reFreshMaterialList: true }), p = V(null), t = w(() => {
    var _a;
    const e = (_a = N()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:seckillinfo:add"], delBtn: !!e["mall:seckillinfo:del"], editBtn: !!e["mall:seckillinfo:edit"], viewBtn: !!e["mall:seckillinfo:get"] };
  });
  function b(e, l) {
    l == "add" ? a.form.picUrl = [] : a.form.picUrl = [a.form.picUrl], e();
  }
  function C(e, l) {
    e = y(e), a.paramsSearch = e, a.page.currentPage = 1, i(a.page, e), l();
  }
  function d(e) {
    const l = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (a.page.descs = "", a.page.ascs = l) : e.order == "descending" ? (a.page.ascs = "", a.page.descs = l) : (a.page.ascs = "", a.page.descs = ""), i(a.page);
  }
  function i(e, l) {
    a.tableLoading = true, T(Object.assign({ current: e.currentPage, size: e.pageSize, descs: a.page.descs, ascs: a.page.ascs }, l, a.paramsSearch)).then((c) => {
      a.tableData = c.data.records, a.page.total = c.data.total, a.page.currentPage = e.currentPage, a.page.pageSize = e.pageSize, a.tableLoading = false, o.$nextTick(() => {
        p.value.dicInit("cascader");
      });
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function u(e) {
    o.$confirm(o.$t("commons.confirmDelete"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(function() {
      return E(e.id);
    }).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.delSuccess"), type: "success" }), i(a.page);
    });
  }
  function f(e, l, c, v) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", k(e).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" }), c(), i(a.page);
    }).catch(() => {
      v();
    });
  }
  function g(e, l, c) {
    e.picUrl = e.picUrl.length > 0 ? e.picUrl[0] : "", z(e).then(() => {
      o.$message({ showClose: true, message: o.$t("commons.addSuccess"), type: "success" }), l(), i(a.page);
    }).catch(() => {
      c();
    });
  }
  function h() {
    i(a.page);
  }
  function n(e) {
    e && e.id && k({ id: e.id, enable: e.enable }).then(() => {
    });
  }
  return { ...$(a), permissionList: t, beforeOpen: b, searchChange: C, sortChange: d, getPageF: i, handleDel: u, handleUpdate: f, handleSave: g, refreshChange: h, changeEnable: n, crud: p };
} };
function _(o, a, p, t, b, C) {
  const d = m("el-input-number"), i = m("el-tooltip"), u = m("el-switch"), f = m("material-list"), g = m("avue-crud"), h = D;
  return U(), B("div", null, [s(h, null, { default: r(() => [s(g, { ref: "crud", page: o.page, "onUpdate:page": a[3] || (a[3] = (n) => o.page = n), data: o.tableData, permission: t.permissionList, "table-loading": o.tableLoading, option: o.tableOption, modelValue: o.form, "onUpdate:modelValue": a[4] || (a[4] = (n) => o.form = n), "before-open": t.beforeOpen, onOnLoad: t.getPageF, onRefreshChange: t.refreshChange, onRowUpdate: t.handleUpdate, onRowSave: t.handleSave, onRowDel: t.handleDel, onSortChange: t.sortChange, onSearchChange: t.searchChange }, { "seckillNum-form": r((n) => [s(i, { effect: "dark", content: o.$t("mall.seckillinfo.soldQuantityExceedsTotalLimit"), placement: "top" }, { default: r(() => [s(d, { modelValue: o.form.seckillNum, "onUpdate:modelValue": a[0] || (a[0] = (e) => o.form.seckillNum = e), "controls-position": "right", disabled: n.type == "view", min: 0, max: o.form.limitNum, placeholder: o.$t("mall.seckillinfo.enterSoldQuantity") }, null, 8, ["modelValue", "disabled", "max", "placeholder"])]), _: 2 }, 1032, ["content"])]), "eachLimitNum-form": r((n) => [s(i, { effect: "dark", content: o.$t("mall.seckillinfo.perPersonLimitExceedsTotalLimit"), placement: "top" }, { default: r(() => [s(d, { modelValue: o.form.eachLimitNum, "onUpdate:modelValue": a[1] || (a[1] = (e) => o.form.eachLimitNum = e), "controls-position": "right", disabled: n.type == "view", min: 1, max: o.form.limitNum ? o.form.limitNum : 1, placeholder: o.$t("mall.seckillinfo.enterPerPersonLimit") }, null, 8, ["modelValue", "disabled", "max", "placeholder"])]), _: 2 }, 1032, ["content"])]), enable: r((n) => [s(u, { modelValue: n.row.enable, "onUpdate:modelValue": (e) => n.row.enable = e, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (e) => t.changeEnable(n.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), "picUrl-form": r(() => [o.form.shopId ? (U(), O(f, { key: 0, value: o.form.picUrl, "onUpdate:value": a[2] || (a[2] = (n) => o.form.picUrl = n), type: "image", shopId: o.form.shopId, num: 1, width: 100, height: 100 }, null, 8, ["value", "shopId"])) : R("", true)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const J = P(F, [["render", _]]);
export {
  J as default
};
