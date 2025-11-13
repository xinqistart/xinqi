import { A as k, R as v, q as L, K as B, S as R, b1 as U, _ as I, r as u, c as T, o as V, b as c, h as p, g as D, B as O, f as P, z as A, e as $, a_ as z } from "./index-DAdfXJ2i.js";
import { h as Q, e as j, p as F, f as E, g as M } from "./payapplyform-CBqkDjfz.js";
import { g as N } from "./payconfig-CEsNU9sp.js";
import { p as q } from "./shopinfo-DR8w8ULX.js";
import { V as H } from "./vue-qr-Ee6k57BN.js";
const K = { components: { VueQr: H }, props: { shopIdSelect: null, aliAuthToken: { type: String } }, setup(o, r) {
  const { proxy: t } = k(), e = v({ form: {}, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: Q, dialogAliAuth: false, aliAuthQrCodeScene: "" }), S = L(() => {
    var _a;
    const a = (_a = B()) == null ? void 0 : _a.permissions;
    return { addBtn: !!a["pay:payapplyform:add"], delBtn: !!a["pay:payapplyform:del"], editBtn: !!a["pay:payapplyform:edit"], viewBtn: !!a["pay:payapplyform:get"] };
  });
  function _(a, s) {
    a = U(a), e.paramsSearch = a, e.page.currentPage = 1, l(e.page, a), s();
  }
  function h(a) {
    const s = a.prop ? a.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    a.order == "ascending" ? (e.page.descs = null, e.page.ascs = s) : a.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = null), l(e.page);
  }
  function l(a, s) {
    o.shopIdSelect && (e.tableLoading = true, M(Object.assign({ current: a.currentPage, size: a.pageSize, descs: e.page.descs, ascs: e.page.ascs, shopId: o.shopIdSelect, payType: "2" }, s, e.paramsSearch)).then((i) => {
      let d = i.data.records;
      d && d.forEach((w) => {
        w.enable = w.subMchid == o.aliAuthToken;
      }), e.tableData = d, e.page.total = i.data.total, e.page.currentPage = a.currentPage, e.page.pageSize = a.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function m(a) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      return E(a.id);
    }).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.delSuccess"), type: "success" }), l(e.page);
    });
  }
  function f(a, s, i, d) {
    F(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" }), i(), l(e.page);
    }).catch(() => {
      d();
    });
  }
  function g(a, s, i) {
    a.payType = "1", j(a).then(() => {
      t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" }), s(), l(e.page);
    }).catch(() => {
      i();
    });
  }
  function y() {
    l(e.page);
  }
  function C() {
    e.tableLoading = true, N("2").then((a) => {
      e.tableLoading = false;
      const s = a.data;
      if (s == null) t.$message({ showClose: true, message: t.$t("pay.payapplyform.configureAlipayFirst"), type: "error" });
      else {
        const i = encodeURIComponent("http://" + window.location.host + "/pay/aliopenauth/redirect?tenantId=" + s.tenantId), d = "https://openauth.alipay.com/oauth2/appToAppAuth.htm?app_id=" + s.appId + "&state=" + o.shopIdSelect + "&redirect_uri=" + i;
        e.dialogAliAuth = true, e.aliAuthQrCodeScene = d;
      }
    });
  }
  function b() {
    l(e.page);
  }
  function n(a) {
    a && a.id && q({ id: o.shopIdSelect, aliAuthToken: a.subMchid }).then(() => {
      l(e.page), r.emit("refreshAliAuthToken", a.subMchid);
    }).catch(() => {
      l(e.page);
    });
  }
  return { ...R(e), permissionList: S, searchChange: _, sortChange: h, getPageF: l, handleDel: m, handleUpdate: f, handleSave: g, refreshChange: y, getAliAuth: C, changeEnable: n, authQrCodeClose: b };
} }, W = { class: "execution" }, Z = { style: { color: "black" } }, G = { style: { color: "#8c939d" } };
function J(o, r, t, e, S, _) {
  const h = u("el-button"), l = u("el-switch"), m = u("avue-crud"), f = u("vue-qr"), g = u("el-col"), y = u("el-row"), C = u("el-dialog"), b = z;
  return V(), T("div", W, [c(b, null, { default: p(() => [c(m, { ref: "crud", page: o.page, "onUpdate:page": r[1] || (r[1] = (n) => o.page = n), modelValue: o.form, "onUpdate:modelValue": r[2] || (r[2] = (n) => o.form = n), data: o.tableData, permission: e.permissionList, "table-loading": o.tableLoading, option: o.tableOption, onOnLoad: e.getPageF, onRefreshChange: e.refreshChange, onRowUpdate: e.handleUpdate, onRowSave: e.handleSave, onRowDel: e.handleDel, onSortChange: e.sortChange, onSearchChange: e.searchChange }, { "menu-left": p(() => [c(h, { type: "success", size: "small", onClick: r[0] || (r[0] = (n) => e.getAliAuth()) }, { default: p(() => [P(A(o.$t("pay.payapplyform.generateAuthQRCode")), 1)]), _: 1 })]), enable: p((n) => [n.row.subMchid ? (V(), D(l, { key: 0, modelValue: n.row.enable, "onUpdate:modelValue": (a) => n.row.enable = a, style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (a) => e.changeEnable(n.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])) : O("", true)]), _: 1 }, 8, ["page", "modelValue", "data", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), c(C, { modelValue: o.dialogAliAuth, "onUpdate:modelValue": r[3] || (r[3] = (n) => o.dialogAliAuth = n), title: o.$t("pay.payapplyform.scanWithAlipay"), center: "", "append-to-body": "", width: "350px", onClose: e.authQrCodeClose }, { default: p(() => [c(y, null, { default: p(() => [c(g, { span: 24 }, { default: p(() => [c(f, { text: o.aliAuthQrCodeScene, size: 320, dotScale: 1 }, null, 8, ["text"])]), _: 1 }), c(g, { span: 24 }, { default: p(() => [$("p", Z, A(o.$t("pay.payapplyform.openLinkAlipay")), 1), $("p", G, A(o.aliAuthQrCodeScene), 1)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "title", "onClose"])]), _: 1 })]);
}
const oe = I(K, [["render", J]]);
export {
  oe as default
};
