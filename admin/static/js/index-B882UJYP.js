import { aO as d, n as B, A as M, R as T, I as $, t as F, K as N, q as D, i as I, S as O, b1 as z, _ as V, c as p, o as i, g as f, e as w, b as S, r as _, z as u, h as m, f as h, B as j, a_ as A } from "./index-DAdfXJ2i.js";
import { n as U } from "./404-CYs5n2Yq.js";
function W(e) {
  return d.request("get", "/weixin/wxfastregist/page", { params: e });
}
function E(e) {
  return d.request("post", "/weixin/wxfastregist", { data: e });
}
function H(e) {
  return d.request("delete", "/weixin/wxfastregist/" + e);
}
function K(e) {
  return d.request("put", "/weixin/wxfastregist", { data: e });
}
function Z(e) {
  return d.request("get", "/weixin/wxfastregist/status/" + e);
}
function G(e, l) {
  return d.request("post", "/weixin/wxfastregist/mp/" + e + "/" + l);
}
const { $t: t } = B(), J = { dialogDrag: true, dialogWidth: "80%", indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, editBtn: false, searchMenuSpan: 6, labelWidth: 135, column: [{ label: t("wxma.wxfastregist.name"), prop: "name", sortable: true, rules: [{ required: true, message: t("wxma.wxfastregist.name") + t("commons.notNull"), trigger: "blur" }, { max: 100, message: t("commons.lengthTips", { length: 100 }) }] }, { label: t("wxma.wxfastregist.code"), prop: "code", rules: [{ required: true, message: t("wxma.wxfastregist.code") + t("commons.notNull"), trigger: "blur" }, { max: 50, message: t("commons.lengthTips", { length: 50 }) }] }, { label: t("wxma.wxfastregist.codeType"), prop: "codeType", type: "select", dicData: [{ label: t("wxma.wxfastregist.unifiedSocialCreditCode"), value: "1" }, { label: t("wxma.wxfastregist.organizationCode"), value: "2" }, { label: t("wxma.wxfastregist.businessLicenseRegistrationNumber"), value: "3" }], rules: [{ required: true, message: t("wxma.wxfastregist.codeType") + t("commons.notNull"), trigger: "blur" }, { max: 2, message: t("commons.lengthTips", { length: 2 }) }] }, { label: t("wxma.wxfastregist.legalPersonaWechat"), prop: "legalPersonaWechat", rules: [{ required: true, message: t("wxma.wxfastregist.legalPersonaWechat") + t("commons.notNull"), trigger: "blur" }, { max: 50, message: t("commons.lengthTips", { length: 50 }) }] }, { label: t("wxma.wxfastregist.legalPersonaName"), prop: "legalPersonaName", rules: [{ required: true, message: t("wxma.wxfastregist.legalPersonaName") + t("commons.notNull"), trigger: "blur" }, { max: 100, message: t("commons.lengthTips", { length: 100 }) }] }, { label: t("wxma.wxfastregist.status"), prop: "status", sortable: true, display: false }, { label: t("wxma.wxfastregist.msg"), prop: "msg", display: false }, { label: t("wxma.wxapp.shopId"), prop: "shopId", type: "select", search: true, filterable: true, display: false, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", dicFormatter: (e) => (e || (e = []), e.unshift({ id: "-1", name: t("wxma.wxapp.mall") }), e) }] }, Q = { components: { noExist: U }, setup() {
  var _a;
  const { proxy: e } = M(), l = $(), a = T({ form: {}, showAuthMpInfo: l.currentRoute.value.path == "/wxfastregistmp", loadFail: false, loading: true, errorMsg: "", formMp: { appId: l.currentRoute.value.query.mpAppId, ticket: l.currentRoute.value.query.ticket }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: J });
  F(() => {
    a.formMp.appId && a.formMp.ticket ? (a.loadFail = false, a.loading = true, G(a.formMp.appId, a.formMp.ticket).then((s) => {
      e.$message({ showClose: true, message: e.$t("wxma.wxapp.successfulSubmission"), type: "success" }), a.loading = false, setTimeout(() => {
        L();
      }, 2e3);
    }).catch((s) => {
      a.errorMsg = s, a.loadFail = true, a.loading = false;
    })) : (a.loadFail = true, a.loading = false);
  });
  const o = (_a = N()) == null ? void 0 : _a.permissions, C = D(() => ({ addBtn: !!o["wxma:wxapp:add"], delBtn: !!o["wxma:wxapp:add"], editBtn: !!o["wxma:wxapp:add"], viewBtn: !!o["wxma:wxapp:add"] }));
  function k(s, r) {
    s = z(s), a.paramsSearch = s, a.page.currentPage = 1, n(a.page, s), r();
  }
  function x(s) {
    const r = s.prop ? s.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    s.order == "ascending" ? (a.page.descs = "", a.page.ascs = r) : s.order == "descending" ? (a.page.ascs = "", a.page.descs = r) : (a.page.ascs = "", a.page.descs = ""), n(a.page);
  }
  function n(s, r) {
    a.tableLoading = true, W(Object.assign({ current: a.page.currentPage, size: a.page.pageSize, descs: a.page.descs, ascs: a.page.ascs }, r, a.paramsSearch)).then((g) => {
      a.tableData = g.data.records, a.page.total = g.data.total, a.page.currentPage = s.currentPage, a.page.pageSize = s.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function b(s) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return H(s.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), n(a.page);
    });
  }
  function y(s, r, g, q) {
    K(s).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), g(), n(a.page);
    }).catch(() => {
      q();
    });
  }
  function c(s, r, g) {
    E(s).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), r(), n(a.page);
    }).catch(() => {
      g();
    });
  }
  function v() {
    n(a.page);
  }
  function P({ row: s, columnIndex: r }) {
    if (r == 7 && s.status != "0" && s.status != "89252" && s.status != "89251") return { color: "red" };
  }
  function R(s) {
    a.tableLoading = true, Z(s).then(() => {
      a.tableLoading = false, n(a.page);
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function L() {
    l.push("/weixin/wxma/wxapp");
  }
  return { ...O(a), permissions: o, permissionList: C, searchChange: k, sortChange: x, getPageF: n, handleDel: b, handleUpdate: y, handleSave: c, refreshChange: v, cellStyle: P, goFirstPage: I, goBack: L, getStatusF: R };
} }, X = { class: "bg-white h-full" }, Y = { key: 0, class: "flex justify-center" }, ee = { class: "text-center" }, ae = { class: "pt-20 flex justify-center" }, te = { class: "text-center" }, se = { key: 0, class: "mt-20" }, oe = { key: 1, class: "mt-20" }, ne = { class: "my-5" };
function re(e, l, a, o, C, k) {
  const x = _("noExist"), n = _("el-button"), b = _("avue-crud"), y = A;
  return i(), p("div", X, [e.showAuthMpInfo ? (i(), p("div", Y, [w("div", ee, [w("div", ae, [S(x)]), w("div", te, [e.loadFail ? (i(), p("div", se, u(e.$t("wxma.wxfastregist.mpToMaFail")), 1)) : (i(), p("div", oe, [e.loading ? (i(), f(n, { key: 0, loading: e.loading, link: "" }, { default: m(() => [h(u(e.$t("wxma.wxfastregist.loading")), 1)]), _: 1 }, 8, ["loading"])) : (i(), f(n, { key: 1, link: "", type: "success" }, { default: m(() => [h(u(e.$t("wxma.wxfastregist.loadSuccess")), 1)]), _: 1 }))])), w("div", ne, u(e.errorMsg), 1), S(n, { type: "primary", onClick: o.goBack }, { default: m(() => [h(u(e.$t("login.back")), 1)]), _: 1 }, 8, ["onClick"])])])])) : (i(), f(y, { key: 1 }, { default: m(() => [S(b, { ref: "crud", page: e.page, data: e.tableData, permission: o.permissionList, "table-loading": e.tableLoading, option: e.tableOption, "cell-style": o.cellStyle, modelValue: e.form, "onUpdate:modelValue": l[0] || (l[0] = (c) => e.form = c), onOnLoad: o.getPageF, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onSortChange: o.sortChange, onSearchChange: o.searchChange }, { menu: m((c) => [o.permissions["wxma:wxapp:add"] && (c.row.status == "89251" || c.row.status == "89252") ? (i(), f(n, { key: 0, link: "", type: "primary", size: "small", onClick: (v) => o.getStatusF(c.row.id) }, { default: m(() => [h(u(e.$t("wxma.wxfastregist.queryStatus")), 1)]), _: 1 }, 8, ["onClick"])) : j("", true)]), _: 1 }, 8, ["page", "data", "permission", "table-loading", "option", "cell-style", "modelValue", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 }))]);
}
const ce = V(Q, [["render", re]]);
export {
  ce as default
};
