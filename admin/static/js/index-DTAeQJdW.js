import { aO as i, n as S, A as C, R as w, K as T, q as L, S as B, b1 as x, _ as R, r as $, c as D, o as O, b as h, h as P, a_ as _ } from "./index-DAdfXJ2i.js";
function v(a) {
  return i.request("get", "/mall/freighttemplatcharge/page", { params: a });
}
function q(a) {
  return i.request("post", "/mall/freighttemplatcharge", { data: a });
}
function F(a) {
  return i.request("delete", "/mall/freighttemplatcharge/" + a);
}
function I(a) {
  return i.request("put", "/mall/freighttemplatcharge", { data: a });
}
const { $t: r } = S(), N = { dialogDrag: true, indexLabel: r("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: r("mall.freighttemplatcharge.id"), prop: "id", sortable: true, rules: [{ required: true, message: r("mall.freighttemplatcharge.id") + r("commons.notNull"), trigger: "blur" }, { max: 32, message: r("commons.lengthTips", { length: 32 }) }] }, { label: r("mall.freighttemplatcharge.shopId"), prop: "shopId", sortable: true, rules: [{ required: true, message: r("mall.freighttemplatcharge.shopId") + r("commons.notNull"), trigger: "blur" }, { max: 32, message: r("commons.lengthTips", { length: 32 }) }] }, { label: r("commons.createTime"), prop: "createTime", sortable: true }, { label: r("commons.updateTime"), prop: "updateTime", sortable: true }, { label: r("mall.freighttemplatcharge.freightTemplatId"), prop: "freightTemplatId", sortable: true, rules: [{ max: 32, message: r("commons.lengthTips", { length: 32 }) }] }, { label: r("mall.freighttemplatcharge.firstNum"), prop: "firstNum", sortable: true, rules: [] }, { label: r("mall.freighttemplatcharge.firstFreight"), prop: "firstFreight", sortable: true, rules: [] }, { label: r("mall.freighttemplatcharge.continueNum"), prop: "continueNum", sortable: true, rules: [] }, { label: r("mall.freighttemplatcharge.continueFreight"), prop: "continueFreight", sortable: true, rules: [] }, { label: r("mall.freighttemplatcharge.charges"), prop: "charges", sortable: true, rules: [{ max: 65535, message: r("commons.lengthTips", { length: 65535 }) }] }] }, y = { name: "freighttemplatcharge", setup() {
  const { proxy: a } = C(), e = w({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: N }), l = T().permissions, n = L(() => ({ addBtn: !!l["mall:freighttemplatcharge:add"], delBtn: !!l["mall:freighttemplatcharge:del"], editBtn: !!l["mall:freighttemplatcharge:edit"], viewBtn: !!l["mall:freighttemplatcharge:get"] }));
  function o(t, s) {
    e.tableLoading = true, v(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page.descs, ascs: e.page.ascs }, s, e.paramsSearch)).then((g) => {
      e.tableData = g.data.records, e.page.total = g.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(t) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return F(t.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), o(e.page);
    });
  }
  function m(t, s, g, b) {
    I(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), g(), o(e.page);
    }).catch(() => {
      b();
    });
  }
  function p(t, s, g) {
    q(t).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), s(), o(e.page);
    }).catch(() => {
      g();
    });
  }
  function c(t, s) {
    t = x(t), e.paramsSearch = t, e.page.currentPage = 1, o(e.page, t), s();
  }
  function d(t) {
    const s = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), o(e.page);
  }
  function f() {
    o(e.page);
  }
  return { ...B(e), permissions: l, permissionList: n, getPageF: o, handleDel: u, handleUpdate: m, handleSave: p, searchChange: c, sortChange: d, refreshChange: f };
} };
function U(a, e, l, n, o, u) {
  const m = $("avue-crud"), p = _;
  return O(), D("div", null, [h(p, null, { default: P(() => [h(m, { ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[0] || (e[0] = (c) => a.form = c), page: a.page, "onUpdate:page": e[1] || (e[1] = (c) => a.page = c), data: a.tableData, permission: n.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, null, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const j = R(y, [["render", U]]);
export {
  j as default
};
