import { aO as C, n as R, A as z, R as q, q as F, K as x, S as E, b1 as G, _ as j, r as d, c as _, o as g, b as n, h as s, e as m, f, z as p, g as k, B as S, F as N, v as O, C as A, a_ as J } from "./index-DAdfXJ2i.js";
import { b as M } from "./userinfo-BgcUdIqU.js";
import { a as W } from "./userinfo-Byg3Ujwc.js";
import "./clientType-BhCLU4J5.js";
function H(e) {
  return C.request("get", "/mall/grouponuser/page", { params: e });
}
function K(e) {
  return C.request("post", "/mall/grouponuser", { data: e });
}
function Z(e) {
  return C.request("delete", "/mall/grouponuser/" + e);
}
function Q(e) {
  return C.request("put", "/mall/grouponuser", { data: e });
}
const { $t: l } = R(), B = { dialogDrag: true, indexLabel: l("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, printBtn: false, viewBtn: true, menu: false, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelPosition: "right", column: [{ label: l("mall.grouponuser.shopId"), prop: "shopId", type: "select", props: { label: "name", value: "id" }, search: true, editDisabled: true, filterable: true, dicUrl: "/mall/shopinfo/list", rules: [{ required: true, message: l("mall.grouponuser.shopId") + l("commons.notNull"), trigger: "blur" }] }, { label: l("commons.createTime"), prop: "createTime", sortable: true }, { label: l("mall.grouponuser.grouponId"), prop: "grouponId", sortable: true, type: "select", searchLabelWidth: 100, search: true, filterable: true, slot: true, props: { label: "name", value: "id" }, dicUrl: "/mall/grouponinfo/list" }, { label: l("mall.grouponuser.userId"), prop: "userId", slot: true, width: 360 }, { label: l("mall.grouponuser.status"), prop: "status", slot: true, dicData: [{ label: l("mall.grouponuser.status0"), value: "0" }, { label: l("mall.grouponuser.status1"), value: "1" }, { label: l("mall.bargainuser.status2"), value: "2" }] }, { label: l("mall.grouponuser.spuId"), prop: "spuId", type: "select", filterable: true, editDisabled: true, props: { label: "name", value: "id" }, cascader: ["skuId"], dicUrl: "/mall/goodsspu/list", rules: [{ required: true, message: l("mall.grouponuser.spuId") + l("commons.notNull"), trigger: "blur" }] }, { label: l("mall.grouponuser.skuId"), prop: "skuId", type: "select", filterable: true, editDisabled: true, props: { label: "name", value: "id" }, dicUrl: "/mall/goodssku/list/{{key}}", rules: [{ required: true, message: l("mall.grouponuser.skuId") + l("commons.notNull"), trigger: "blur" }] }, { label: l("mall.grouponuser.grouponPrice"), prop: "grouponPrice", sortable: true }, { label: l("mall.grouponuser.validBeginTime"), prop: "validBeginTime", sortable: true }, { label: l("mall.grouponuser.validEndTime"), prop: "validEndTime", sortable: true }] }, X = { setup() {
  const { proxy: e } = z(), o = q({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: B, dialogVisibleUserDetail: false, tableOptionUser: W, userInfoValue: {} }), V = F(() => {
    var _a;
    const a = (_a = x()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["mall:grouponuser:add"], delBtn: !!a["mall:grouponuser:del"], editBtn: !!a["mall:grouponuser:edit"], viewBtn: !!a["mall:grouponuser:get"] };
  });
  function u() {
    const a = JSON.parse(JSON.stringify(o.tableData));
    a.map((t) => {
      t.shopId = t.$shopId, t.grouponId = t.$grouponId, t.status = t.$status, t.spuId = t.$spuId, t.skuId = t.$skuId;
      let i = "";
      t.listGrouponUser.map((w) => {
        i = i + w.id + `    
`;
      }), t.userId = i;
    }), e.$Export.excel({ title: "\u62FC\u56E2\u8BB0\u5F55", columns: B.column, data: a });
  }
  function D(a, t) {
    a = G(a), o.paramsSearch = a, o.page.currentPage = 1, c(o.page, a), t();
  }
  function L(a) {
    const t = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (o.page.descs = "", o.page.ascs = t) : a.order == "descending" ? (o.page.ascs = "", o.page.descs = t) : (o.page.ascs = "", o.page.descs = ""), c(o.page);
  }
  function c(a, t) {
    o.tableLoading = true, H(Object.assign({ current: a.currentPage, size: a.pageSize, descs: o.page.descs, ascs: o.page.ascs, isLeader: "1" }, t, o.paramsSearch)).then((i) => {
      o.tableData = i.data.records, o.page.total = i.data.total, o.page.currentPage = a.currentPage, o.page.pageSize = a.pageSize, o.tableLoading = false;
    }).catch(() => {
      o.tableLoading = false;
    });
  }
  function h(a) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return Z(a.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), c(o.page);
    });
  }
  function $(a, t, i, w) {
    Q(a).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), i(), c(o.page);
    }).catch(() => {
      w();
    });
  }
  function v(a, t, i) {
    K(a).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), t(), c(o.page);
    }).catch(() => {
      i();
    });
  }
  function I() {
    c(o.page);
  }
  function U(a) {
    o.dialogVisibleUserDetail = true, a && M(a).then((t) => {
      t.data ? o.userInfoValue = t.data : (o.userInfoValue = {}, e.$message.error(e.$t("commons.notFoundUser")));
    });
  }
  return { ...E(o), permissionList: V, exportExcel: u, searchChange: D, sortChange: L, getPageF: c, handleDel: h, handleUpdate: $, handleSave: v, showUserInfo: U, refreshChange: I };
} }, Y = { class: "execution" }, ee = { class: "flex-c py-[10px]" }, oe = ["onClick"], ae = ["onClick"], te = { key: 0 };
function re(e, o, V, u, D, L) {
  const c = d("el-button"), h = d("el-avatar"), $ = d("el-badge"), v = d("UserFilled"), I = d("el-icon"), U = d("el-tooltip"), a = d("el-alert"), t = d("el-tag"), i = d("avue-crud"), w = J, P = d("avue-form"), T = d("el-dialog");
  return g(), _("div", Y, [n(w, null, { default: s(() => [n(i, { ref: "crud", page: e.page, "onUpdate:page": o[1] || (o[1] = (r) => e.page = r), data: e.tableData, permission: u.permissionList, "table-loading": e.tableLoading, option: e.tableOption, modelValue: e.form, "onUpdate:modelValue": o[2] || (o[2] = (r) => e.form = r), onOnLoad: u.getPageF, onRefreshChange: u.refreshChange, onRowUpdate: u.handleUpdate, onRowSave: u.handleSave, onRowDel: u.handleDel, onSortChange: u.sortChange, onSearchChange: u.searchChange }, { "menu-left": s(() => [n(c, { type: "primary", icon: "download", size: "small", onClick: o[0] || (o[0] = A((r) => u.exportExcel(), ["stop"])) }, { default: s(() => [f(p(e.$t("commons.importLabel")), 1)]), _: 1 })]), userId: s((r) => [m("div", null, [m("div", ee, [n(U, { placement: "top" }, { content: s(() => [m("div", { class: "text-white cursor-pointer flex-c", onClick: (b) => u.showUserInfo(r.row.userId) }, [n(I, null, { default: s(() => [n(v)]), _: 1 }), f(p(r.row.nickName), 1)], 8, oe)]), default: s(() => [n($, { value: e.$t("mall.grouponuser.grouponUser") }, { default: s(() => [n(h, { src: r.row.headimgUrl, style: { color: "#e6a23c", "border-style": "solid" } }, null, 8, ["src"])]), _: 2 }, 1032, ["value"])]), _: 2 }, 1024), (g(true), _(N, null, O(r.row.listGrouponUser, (b, y) => (g(), _("div", { key: y }, [b.id != r.row.id ? (g(), k(U, { key: 0, placement: "top" }, { content: s(() => [m("div", { class: "text-white cursor-pointer flex-c", onClick: (le) => u.showUserInfo(b.userId) }, [n(I, null, { default: s(() => [n(v)]), _: 1 }), f(p(b.nickName), 1)], 8, ae)]), default: s(() => [(g(), k(h, { key: y, src: b.headimgUrl }, null, 8, ["src"]))]), _: 2 }, 1024)) : S("", true)]))), 128)), m("div", null, [(g(true), _(N, null, O(r.row.grouponNum - r.row.listGrouponUser.length, (b, y) => (g(), k(h, { key: y }, { default: s(() => [...o[5] || (o[5] = [f("?", -1)])]), _: 1 }))), 128))])]), r.row.grouponNum > r.row.listGrouponUser.length ? (g(), k(a, { key: 0, closable: false, center: "", type: "warning" }, { title: s(() => [m("div", null, p(e.$t("mall.grouponuser.moreLeft")) + p(r.row.grouponNum - r.row.listGrouponUser.length) + p(e.$t("mall.grouponuser.moreLeftOk")), 1)]), _: 2 }, 1024)) : S("", true)])]), status: s((r) => [n(t, { size: "small", type: r.row.status == "0" ? "warning" : r.row.status == "1" ? "success" : "danger", effect: "dark" }, { default: s(() => [f(p(r.row.$status), 1)]), _: 2 }, 1032, ["type"])]), grouponId: s((r) => [m("div", null, [n(t, { size: "small", type: "danger", effect: "dark" }, { default: s(() => [f(p(r.row.grouponNum) + p(e.$t("mall.grouponinfo.grouponNumTip")), 1)]), _: 2 }, 1024), f(" " + p(r.row.$grouponId), 1)])]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 }), n(T, { modelValue: e.dialogVisibleUserDetail, "onUpdate:modelValue": o[4] || (o[4] = (r) => e.dialogVisibleUserDetail = r), title: e.$t("commons.userDetails"), "append-to-body": true, width: "66%" }, { default: s(() => [e.dialogVisibleUserDetail ? (g(), _("div", te, [n(P, { modelValue: e.userInfoValue, "onUpdate:modelValue": o[3] || (o[3] = (r) => e.userInfoValue = r), option: e.tableOptionUser }, null, 8, ["modelValue", "option"])])) : S("", true)]), _: 1 }, 8, ["modelValue", "title"])]);
}
const de = j(X, [["render", re]]);
export {
  de as default
};
