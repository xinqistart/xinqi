import { n as N, cs as j, A as E, R as F, $ as Z, be as W, q as I, K, S as q, ct as L, cu as P, cv as G, cw as M, cx as J, cy as Q, cz as X, cA as Y, cB as x, b1 as ee, _ as te, r as u, c as $, o as h, b as o, h as n, e as d, z as l, B as _, f as p, g as R, a_ as ae } from "./index-DAdfXJ2i.js";
const { $t: i } = N(), se = (e, a, A) => {
  if (!/^(?:(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)+[a-zA-Z]{2,}$/.test(a)) {
    A(new Error(i("upms.h5portaldomain.domainFormatError")));
    return;
  }
  j(a).then((T) => {
    const r = T.data;
    r && r.id ? A(new Error(i("upms.h5portaldomain.domainExist"))) : A();
  });
}, oe = { dialogDrag: true, indexLabel: i("commons.indexLabel"), dialogWidth: "40%", menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: false, editBtn: false, addBtn: false, delBtn: false, searchMenuSpan: 6, menuWidth: 100, column: [{ label: i("upms.h5portaldomain.id"), prop: "id", sortable: true, span: 24, formatter: (e, a) => a.replace(/\s*/g, ""), rules: [{ required: true, message: i("upms.h5portaldomain.id") + i("commons.notNull"), trigger: "blur" }, { validator: se, trigger: "blur" }, { max: 200, message: i("commons.lengthTips", { length: 200 }) }], labelTip: i("upms.h5portaldomain.exampleDomain") }, { label: i("commons.type"), prop: "type", type: "select", formslot: true, filterable: false, clearable: false, value: "1", dicData: [{ label: i("upms.h5portaldomain.pcVersion"), value: "1" }, { label: i("upms.h5portaldomain.mobileVersion"), value: "2" }], rules: [{ required: true, message: i("upms.h5portaldomain.type") + i("commons.notNull"), trigger: "change" }], sortable: true }, { label: i("upms.h5portaldomain.isDefault"), prop: "isDefault", sortable: true, type: "select", formslot: false, display: false, value: false, dicData: [{ label: i("commons.yes"), value: true }, { label: i("commons.no"), value: false }] }, { label: i("upms.h5portaldomain.isAccessHttp"), prop: "isAccessHttp", type: "select", display: false, value: false, dicData: [{ label: i("commons.yes"), value: true }, { label: i("commons.no"), value: false }] }, { label: i("upms.h5portaldomain.isAccessHttps"), prop: "isAccessHttps", type: "select", display: false, minWidth: 150, value: false, dicData: [{ label: i("commons.yes"), value: true }, { label: i("commons.no"), value: false }] }, { label: i("upms.h5portaldomain.isAutoHttps"), prop: "isAutoHttps", type: "select", display: false, value: false, dicData: [{ label: i("commons.yes"), value: true }, { label: i("commons.no"), value: false }] }, { label: i("commons.createTime"), prop: "createTime", sortable: true, formslot: false, display: false }] }, ne = { setup() {
  const { proxy: e } = E(), a = F({ defaultPcDomain: "", defaultH5Domain: "", type: "1", form: { type: "1" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "is_default" }, paramsSearch: {}, tableLoading: false, tableOption: oe, showAdd: false, showResetDomain: false, domainTotal: 0, uploadFileUrl: "/upms/h5portaldomain/ssl/upload", headers: { Authorization: "Bearer " + W().access_token, "switch-tenant-id": Z() } }), A = I(() => {
    var _a;
    const t = (_a = K()) == null ? void 0 : _a.permissions;
    return { addBtn: !!t["sys:h5portaldomain:add"], delBtn: !!t["sys:h5portaldomain:del"], editBtn: !!t["sys:h5portaldomain:edit"], viewBtn: !!t["sys:h5portaldomain:get"] };
  });
  function m(t, c) {
    t = ee(t), a.paramsSearch = t, a.page.currentPage = 1, r(a.page, t), c();
  }
  function T(t) {
    const c = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (a.page.descs = "", a.page.ascs = c) : t.order == "descending" ? (a.page.ascs = "", a.page.descs = c) : (a.page.ascs = "", a.page.descs = ""), r(a.page);
  }
  function r(t, c) {
    a.tableLoading = true, setTimeout(() => {
      x(Object.assign({ current: t.currentPage, size: t.pageSize, descs: a.page.descs, ascs: a.page.ascs, type: a.type }, c, a.paramsSearch)).then((y) => {
        a.tableData = y.data.records, a.page.total = y.data.total, a.page.currentPage = t.currentPage, a.page.pageSize = t.pageSize, a.tableLoading = false, a.domainTotal = y.data.total, C();
      }).catch(() => {
        a.tableLoading = false;
      });
    }, 1e3);
  }
  function C() {
    if (a.showResetDomain = false, a.domainTotal < 10) if (a.showAdd = true, a.domainTotal == 0) a.showResetDomain = true;
    else {
      let t = false;
      a.tableData.map((c) => {
        c.isDefault == "1" && (t = true, c.type == 1 ? a.defaultPcDomain = c.id : a.defaultH5Domain = c.id);
      }), t || (a.showResetDomain = true);
    }
    else a.showAdd = false;
  }
  function w() {
    Y(a.type).then(() => {
      r(a.page);
    }).catch(() => {
    });
  }
  function v(t) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return J(t.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), r(a.page);
    }).catch(function() {
    });
  }
  function H(t, c, y, s) {
    Q(t).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), y(), r(a.page);
    }).catch(() => {
      s();
    });
  }
  async function f(t, c, y) {
    if (t.isDefault = null, await C(), a.domainTotal >= 10) {
      e.$message({ showClose: true, message: e.$t("upms.h5portaldomain.maxDomainExceeded"), type: "info" }), y();
      return;
    }
    t.id.indexOf("www.") == 0 && (t.id = t.id.replace("www.", "")), X(t).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), c(), r(a.page);
    }).catch(() => {
      y();
    });
  }
  function D() {
    r(a.page);
  }
  function g(t) {
    if (t && t.id) {
      if (t.isAutoHttps && !t.isAccessHttp) {
        e.$message({ showClose: true, message: e.$t("upms.h5portaldomain.pleaseCloseHttpToHttps"), type: "warning" }), t.isAccessHttp = !t.isAccessHttp;
        return;
      }
      e.$confirm(`${e.$t("upms.h5portaldomain.confirm")}${t.isAccessHttp ? e.$t("upms.h5portaldomain.enable") : e.$t("upms.h5portaldomain.disable")}http${e.$t("upms.h5portaldomain.ma")}\uFF1F`, e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
        t.isAccessHttp ? L(t.id, "http") : P(t.id, "http"), r(a.page);
      }).catch(() => {
        t.isAccessHttp = !t.isAccessHttp;
      });
    }
  }
  function k(t) {
    if (t && t.id) {
      if (t.isAutoHttps && !t.isAccessHttps) {
        e.$message({ showClose: true, message: e.$t("upms.h5portaldomain.pleaseCloseHttpToHttps"), type: "warning" }), t.isAccessHttps = !t.isAccessHttps;
        return;
      }
      if (t.isAccessHttps && (!t.havSslCert || !t.havSslCertKey)) {
        e.$message({ showClose: true, message: e.$t("upms.h5portaldomain.fileNotUploaded"), type: "warning" }), t.isAccessHttps = !t.isAccessHttps;
        return;
      }
      e.$confirm(`${e.$t("upms.h5portaldomain.confirm")}${t.isAccessHttps ? e.$t("upms.h5portaldomain.enable") : e.$t("upms.h5portaldomain.disable")}https${e.$t("upms.h5portaldomain.ma")}\uFF1F`, e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
        t.isAccessHttps ? L(t.id, "https") : P(t.id, "https"), r(a.page);
      }).catch(() => {
        t.isAccessHttps = !t.isAccessHttps;
      });
    }
  }
  function S(t) {
    if (!t.isAccessHttp && t.isAutoHttps) {
      e.$message({ showClose: true, message: e.$t("upms.h5portaldomain.httpNotEnabled"), type: "warning" }), t.isAutoHttps = !t.isAutoHttps;
      return;
    }
    if (!t.isAccessHttps && t.isAutoHttps) {
      e.$message({ showClose: true, message: e.$t("upms.h5portaldomain.httpsNotEnabled"), type: "warning" }), t.isAutoHttps = !t.isAutoHttps;
      return;
    }
    t && t.id && e.$confirm(`${e.$t("upms.h5portaldomain.confirm")}${t.isAutoHttps ? e.$t("upms.h5portaldomain.enable") : e.$t("upms.h5portaldomain.disable")}${e.$t("upms.h5portaldomain.auto")}https${e.$t("upms.h5portaldomain.ma")}?`, e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      t.isAutoHttps ? G(t.id) : M(t.id), r(a.page);
    }).catch(() => {
      t.isAutoHttps = !t.isAutoHttps;
    });
  }
  const B = (t) => t.size / 1024 > 100 ? (e.$message.error(e.$t("upms.h5portaldomain.sizeLimitExceeded")), false) : true;
  function z(t) {
    t.link ? (e.$message({ showClose: true, message: e.$t("upms.h5portaldomain.uploadSuccess"), type: "success" }), r(a.page)) : e.$message({ showClose: true, message: e.$t("upms.h5portaldomain.uploadFailed") + t, type: "error" });
  }
  function V(t) {
    a.type = t.paneName, a.page.currentPage = 1, r(a.page);
  }
  function U(t, c) {
    c == "add" && (a.form.type = a.type), t();
  }
  return { ...q(a), permissionList: A, searchChange: m, sortChange: T, getPageF: r, handleClickTab: V, getDomainTotal: C, setDefaultDomain: w, handleSave: f, handleUpdate: H, handleDel: v, refreshChange: D, beforeOpen: U, beforeUpload: B, uploadSuccess: z, changeAutoAccessHttps: S, changeAccessHttps: k, changeAccessHttp: g };
} }, le = { class: "flex items-center" }, ie = { class: "flex items-center" }, pe = { style: { "font-size": "14px" } }, de = { key: 0, class: "flex justify-center items-center" }, me = { key: 0 }, ce = { key: 0 }, re = { class: "flex justify-center items-center" }, ue = { class: "items-center" }, he = { class: "flex justify-center items-center" }, fe = { key: 0 }, ge = { key: 1 }, ye = { class: "flex justify-center items-center" }, be = { key: 0 }, $e = { key: 1 }, ve = { key: 0, class: "flex justify-center items-center" }, _e = { class: "text-left" };
function Ae(e, a, A, m, T, r) {
  const C = u("el-tab-pane"), w = u("el-tabs"), v = u("el-button"), H = u("Warning"), f = u("el-icon"), D = u("el-popover"), g = u("el-link"), k = u("el-switch"), S = u("el-image"), B = u("Check"), z = u("Close"), V = u("el-tag"), U = u("Upload"), t = u("el-upload"), c = u("avue-crud"), y = ae;
  return h(), $("div", null, [o(w, { modelValue: e.type, "onUpdate:modelValue": a[0] || (a[0] = (s) => e.type = s), type: "border-card", onTabClick: m.handleClickTab }, { default: n(() => [o(C, { name: "1" }, { label: n(() => [d("span", null, l(e.$t("upms.h5portaldomain.mallPC")), 1)]), _: 1 }), o(C, { name: "2" }, { label: n(() => [d("span", null, l(e.$t("upms.h5portaldomain.mallH5Mobile")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabClick"]), o(y, { class: "mt-[-15px]" }, { default: n(() => [o(c, { ref: "crud", data: e.tableData, permission: m.permissionList, "table-loading": e.tableLoading, modelValue: e.form, "onUpdate:modelValue": a[4] || (a[4] = (s) => e.form = s), "before-open": m.beforeOpen, option: e.tableOption, onOnLoad: m.getPageF, onRefreshChange: m.refreshChange, onRowUpdate: m.handleUpdate, onRowSave: m.handleSave, onRowDel: m.handleDel, onSortChange: m.sortChange, onSearchChange: m.searchChange }, { "menu-left": n(() => [d("div", le, [e.showAdd ? (h(), R(v, { key: 0, class: "mr-[10px]", type: "primary", icon: "el-icon-plus", size: "small", onClick: a[1] || (a[1] = (s) => e.$refs.crud.rowAdd()) }, { default: n(() => [p(l(e.$t("commons.addNew")), 1)]), _: 1 })) : _("", true), o(D, { title: e.$t("commons.tip"), width: 450, trigger: "hover" }, { reference: n(() => [o(f, { class: "ml-1" }, { default: n(() => [o(H)]), _: 1 })]), default: n(() => [d("div", null, l(e.$t("upms.h5portaldomain.maxDomainCount")), 1), d("div", ie, l(e.$t("upms.h5portaldomain.maxDomainCount2")), 1)]), _: 1 }, 8, ["title"]), e.showResetDomain ? (h(), R(v, { key: 1, type: "primary", icon: "el-icon-refresh-right", size: "small", onClick: a[2] || (a[2] = (s) => m.setDefaultDomain()) }, { default: n(() => [p(l(e.$t("upms.h5portaldomain.setDefaultDomain")), 1)]), _: 1 })) : _("", true), d("span", pe, l(e.$t("upms.h5portaldomain.existingDomainCount")) + l(e.domainTotal) + l(e.$t("upms.h5portaldomain.domainCount")), 1)])]), menu: n(({ row: s, index: b }) => [s.isDefault == "0" ? (h(), R(v, { key: 0, link: "", type: "primary", icon: "el-icon-delete", size: "small", onClick: (O) => e.$refs.crud.rowDel(s, b) }, { default: n(() => [p(l(e.$t("upms.h5portaldomain.delete")), 1)]), _: 1 }, 8, ["onClick"])) : _("", true), s.isDefault == "1" ? (h(), R(v, { key: 1, link: "", type: "primary", size: "small", onClick: a[3] || (a[3] = (O) => m.setDefaultDomain()) }, { default: n(() => [p(l(e.$t("upms.h5portaldomain.resetDefaultDomain")), 1)]), _: 1 })) : _("", true)]), id: n(({ row: s }) => [o(g, { type: "primary", href: "http://" + s.id, target: "_blank" }, { default: n(() => [p(l(s.id), 1)]), _: 2 }, 1032, ["href"])]), isAccessHttp: n(({ row: s }) => [e.tableLoading ? _("", true) : (h(), $("div", de, [o(k, { modelValue: s.isAccessHttp, "onUpdate:modelValue": (b) => s.isAccessHttp = b, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (b) => m.changeAccessHttp(s) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]), o(D, { title: e.$t("upms.h5portaldomain.enableHttpLinkAccess"), width: 550, trigger: "hover", placement: "top" }, { reference: n(() => [o(f, { class: "ml-2" }, { default: n(() => [o(H)]), _: 1 })]), default: n(() => [d("div", null, [d("div", null, [o(g, { type: "primary", href: "http://" + s.id, target: "_blank" }, { default: n(() => [p("http://" + l(s.id), 1)]), _: 2 }, 1032, ["href"])]), d("div", null, [o(g, { type: "primary", href: "http://www." + s.id, target: "_blank" }, { default: n(() => [p("http://www." + l(s.id), 1)]), _: 2 }, 1032, ["href"])]), s.isDefault != "1" ? (h(), $("div", me, [d("div", null, l(e.$t("upms.h5portaldomain.mustResolveDomain")) + l(s.id) + l(e.$t("upms.h5portaldomain.parseDefaultDomain", { value: s.id })) + l(e.defaultPcDomain) + l(e.$t("upms.h5portaldomain.otherwiseCannotAccess")), 1), d("div", null, l(e.$t("upms.h5portaldomain.domainResolutionGuide")), 1), o(S, { src: "/img/h5portaldomain/domain-tip.png", style: { width: "530px", height: "300px" }, "preview-src-list": ["/img/h5portaldomain/domain-tip.png"], "preview-teleported": true, fit: "cover" })])) : _("", true)])]), _: 2 }, 1032, ["title"])]))]), isAccessHttps: n(({ row: s }) => [e.tableLoading ? _("", true) : (h(), $("div", ce, [d("div", re, [o(k, { modelValue: s.isAccessHttps, "onUpdate:modelValue": (b) => s.isAccessHttps = b, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (b) => m.changeAccessHttps(s) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]), o(D, { title: e.$t("upms.h5portaldomain.enableHttpsLinkAccess"), width: 550, trigger: "hover", placement: "top" }, { reference: n(() => [o(f, { class: "ml-2" }, { default: n(() => [o(H)]), _: 1 })]), default: n(() => [d("div", null, [d("div", null, [o(g, { type: "primary", href: "https://" + s.id, target: "_blank" }, { default: n(() => [p("https://" + l(s.id), 1)]), _: 2 }, 1032, ["href"])]), d("div", null, [o(g, { type: "primary", href: "https://www." + s.id, target: "_blank" }, { default: n(() => [p("https://www." + l(s.id), 1)]), _: 2 }, 1032, ["href"])]), d("div", null, [d("div", null, l(e.$t("upms.h5portaldomain.sslCertificateGuide")), 1), o(S, { src: "/img/h5portaldomain/pemkey-tip.png", style: { width: "530px", height: "300px" }, "preview-src-list": ["/img/h5portaldomain/pemkey-tip.png"], "preview-teleported": true, fit: "cover" })])])]), _: 2 }, 1032, ["title"])]), d("div", ue, [d("div", he, [o(V, { type: s.havSslCert ? "success" : "danger", size: "small" }, { default: n(() => [s.havSslCert ? (h(), $("label", fe, [o(f, null, { default: n(() => [o(B)]), _: 1 }), p(l(e.$t("upms.h5portaldomain.uploaded")), 1)])) : (h(), $("label", ge, [o(f, null, { default: n(() => [o(z)]), _: 1 }), p(l(e.$t("upms.h5portaldomain.notUploaded")), 1)])), p(l(e.$t("upms.h5portaldomain.pemCertificate")), 1)]), _: 2 }, 1032, ["type"]), o(t, { accept: ".pem", action: e.uploadFileUrl, headers: e.headers, data: { id: s.id }, limit: 1, "on-success": m.uploadSuccess, "before-upload": m.beforeUpload }, { default: n(() => [o(v, { type: "primary", size: "small", link: "" }, { default: n(() => [o(f, null, { default: n(() => [o(U)]), _: 1 }), p(l(e.$t("upms.h5portaldomain.upload")), 1)]), _: 1 })]), _: 1 }, 8, ["action", "headers", "data", "on-success", "before-upload"])]), d("div", ye, [o(V, { type: s.havSslCertKey ? "success" : "danger", size: "small" }, { default: n(() => [s.havSslCertKey ? (h(), $("label", be, [o(f, null, { default: n(() => [o(B)]), _: 1 }), p(l(e.$t("upms.h5portaldomain.uploaded")), 1)])) : (h(), $("label", $e, [o(f, null, { default: n(() => [o(z)]), _: 1 }), p(l(e.$t("upms.h5portaldomain.notUploaded")), 1)])), p(l(e.$t("upms.h5portaldomain.keyCertificate")), 1)]), _: 2 }, 1032, ["type"]), o(t, { accept: ".key", action: e.uploadFileUrl, headers: e.headers, data: { id: s.id }, limit: 1, "on-success": m.uploadSuccess, "before-upload": m.beforeUpload }, { default: n(() => [o(v, { type: "primary", size: "small", link: "" }, { default: n(() => [o(f, null, { default: n(() => [o(U)]), _: 1 }), p(l(e.$t("upms.h5portaldomain.upload")), 1)]), _: 1 })]), _: 1 }, 8, ["action", "headers", "data", "on-success", "before-upload"])])])]))]), isAutoHttps: n(({ row: s }) => [e.tableLoading ? _("", true) : (h(), $("div", ve, [o(k, { modelValue: s.isAutoHttps, "onUpdate:modelValue": (b) => s.isAutoHttps = b, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (b) => m.changeAutoAccessHttps(s) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]), o(D, { title: e.$t("upms.h5portaldomain.autoRedirectToHttps"), width: 550, trigger: "hover", placement: "top" }, { reference: n(() => [o(f, { class: "ml-2" }, { default: n(() => [o(H)]), _: 1 })]), default: n(() => [d("div", null, [d("div", null, [p(l(e.$t("upms.h5portaldomain.automaticallyRedirect")), 1), o(g, { type: "primary", href: "http://" + s.id, target: "_blank" }, { default: n(() => [p("http://" + l(s.id), 1)]), _: 2 }, 1032, ["href"]), p(l(e.$t("upms.h5portaldomain.willRedirectTo")), 1), o(g, { type: "primary", href: "https://" + s.id, target: "_blank" }, { default: n(() => [p("https://" + l(s.id), 1)]), _: 2 }, 1032, ["href"])]), d("div", _e, [p(l(e.$t("upms.h5portaldomain.automaticallyRedirect")), 1), o(g, { type: "primary", href: "http://www." + s.id, target: "_blank" }, { default: n(() => [p("http://www." + l(s.id), 1)]), _: 2 }, 1032, ["href"]), p(l(e.$t("upms.h5portaldomain.willRedirectTo")), 1), o(g, { type: "primary", href: "https://www." + s.id, target: "_blank" }, { default: n(() => [p("https://www." + l(s.id), 1)]), _: 2 }, 1032, ["href"])])])]), _: 2 }, 1032, ["title"])]))]), _: 1 }, 8, ["data", "permission", "table-loading", "modelValue", "before-open", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const He = te(ne, [["render", Ae], ["__scopeId", "data-v-9909df0b"]]);
export {
  He as default
};
