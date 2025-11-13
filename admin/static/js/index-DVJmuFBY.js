import { aO as i, n as I, A as v, R as B, q as L, K as $, S as x, b1 as D, _ as R, r as _, c as S, o as C, b as c, h as g, B as O, e as f, z as P, a_ as q } from "./index-DAdfXJ2i.js";
import { _ as y } from "./index.vue_vue_type_script_setup_true_name_MallUser_lang-Dagqh1tY.js";
import "./userinfo-BgcUdIqU.js";
import "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function T(t) {
  return i.request("get", "/mall/userfootprint/page", { params: t });
}
function U(t) {
  return i.request("post", "/mall/userfootprint", { data: t });
}
function z(t) {
  return i.request("delete", "/mall/userfootprint/" + t);
}
function V(t) {
  return i.request("put", "/mall/userfootprint", { data: t });
}
const { $t: o } = I(), N = { dialogDrag: true, indexLabel: o("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, menu: false, column: [{ label: o("commons.createTime"), prop: "createTime", sortable: true }, { label: o("mall.userfootprint.userId"), prop: "userId", sortable: true, minWidth: 160, slot: true, rules: [{ required: true, message: o("mall.userfootprint.userId") + o("commons.notNull"), trigger: "blur" }, { max: 32, message: o("commons.lengthTips", { length: 32 }) }] }, { label: o("mall.userfootprint.relationId"), prop: "relationId", sortable: true, minWidth: 260, slot: true, rules: [{ required: true, message: o("mall.userfootprint.relationId") + o("commons.notNull"), trigger: "blur" }, { max: 32, message: o("commons.lengthTips", { length: 32 }) }] }] }, j = { setup() {
  const { proxy: t } = v(), a = B({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: N }), h = L(() => {
    var _a;
    const e = (_a = $()) == null ? void 0 : _a.permissions;
    return { addBtn: !!e["mall:userfootprint:add"], delBtn: !!e["mall:userfootprint:del"], editBtn: !!e["mall:userfootprint:edit"], viewBtn: !!e["mall:userfootprint:get"] };
  });
  function n(e, s) {
    e = D(e), a.paramsSearch = e, a.page.currentPage = 1, r(a.page, e), s();
  }
  function b(e) {
    const s = e.prop ? e.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    e.order == "ascending" ? (a.page.descs = "", a.page.ascs = s) : e.order == "descending" ? (a.page.ascs = "", a.page.descs = s) : (a.page.ascs = "", a.page.descs = ""), r(a.page);
  }
  function r(e, s) {
    a.tableLoading = true, T(Object.assign({ current: e.currentPage, size: e.pageSize, descs: a.page.descs, ascs: a.page.ascs }, s, a.paramsSearch)).then((l) => {
      a.tableData = l.data.records, a.page.total = l.data.total, a.page.currentPage = e.currentPage, a.page.pageSize = e.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function u(e) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return z(e.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), r(a.page);
    });
  }
  function d(e, s, l, w) {
    V(e).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), l(), r(a.page);
    }).catch(() => {
      w();
    });
  }
  function m(e, s, l) {
    U(e).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), s(), r(a.page);
    }).catch(() => {
      l();
    });
  }
  function p() {
    r(a.page);
  }
  return { ...x(a), permissionList: h, searchChange: n, sortChange: b, getPageF: r, handleDel: u, handleUpdate: d, handleSave: m, refreshChange: p };
} }, k = { class: "execution" }, A = { key: 0 };
function F(t, a, h, n, b, r) {
  const u = y, d = _("el-avatar"), m = _("avue-crud"), p = q;
  return C(), S("div", k, [c(p, null, { default: g(() => [c(m, { ref: "crud", modelValue: t.form, "onUpdate:modelValue": a[0] || (a[0] = (e) => t.form = e), page: t.page, data: t.tableData, permission: n.permissionList, "table-loading": t.tableLoading, option: t.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, { userId: g(({ row: e }) => [c(u, { userId: e.userId, userInfo: e.userInfo }, null, 8, ["userId", "userInfo"])]), relationId: g((e) => [e.row.goodsSpu ? (C(), S("div", A, [f("div", null, [c(d, { src: e.row.goodsSpu.picUrls[0], shape: "square" }, null, 8, ["src"])]), f("div", null, [f("span", null, P(e.row.goodsSpu.name), 1)])])) : O("", true)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Z = R(j, [["render", F], ["__scopeId", "data-v-d7c26239"]]);
export {
  Z as default
};
