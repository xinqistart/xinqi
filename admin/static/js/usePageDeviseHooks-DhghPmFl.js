import { A as k, q as c, n as ee, b1 as x, P as l, bq as te } from "./index-DAdfXJ2i.js";
import { d as ae, a as j, p as ne, g as O, b as oe } from "./pagedevise-C4VLpPB5.js";
import { a as N } from "./appPageUrls-CBYQzZv9.js";
import { d as L } from "./base-show-pnQX27ct.js";
import { u as re, a as W } from "./pageDevise-DcQ8796K.js";
import { a as ue, b as C, c as $, d as pe } from "./pageDeviseConfig-CnWYCywQ.js";
import { c as d } from "./clientType-BhCLU4J5.js";
const { $t: r } = ee();
function fe() {
  const { proxy: s } = k(), e = re(), u = c(() => e.getComponentsList), p = c(() => e.currentCompIndex), g = c(() => e.currentClientType), D = c(() => e.currentAppId), h = c(() => e.currentShopId), B = c(() => e.currentSelectPageType), v = c(() => e.homePagePath), A = c(() => e.homeShopPagePath);
  async function P(t) {
    t ? e.setPageId(t) : (await e.getPageId(), e.pageId ? e.setPageId(e.pageId) : e.currentShopId != "-1" && e.setShopId(e.currentShopId)), i();
  }
  function I() {
    e.setPageId(null), e.updateDataObj({ currentComp: null, currentCompIndex: null, currentCompData: null, currentCompSetShow: false }), e.updateData("pageDeviseData", {});
  }
  function f(t = B.value) {
    const a = [];
    let n = N.pages;
    return h.value != "-1" && (n = N.pagesShop), n.map((o) => {
      g.value == d.H5PC ? o.notPc !== true && a.push({ name: o.name, path: o.path, tableData: [], form: {} }) : o.notPc !== false && a.push({ name: o.name, path: o.path, tableData: [], form: {} });
    }), new Promise((o, m) => {
      O(x({ pageType: t, clientType: g.value, appId: D.value, shopId: h.value })).then((Z) => {
        const T = Z.data.records ?? [];
        a.forEach((b) => {
          b.tableData = T.filter((_) => _.pageType == b.path);
        }), e.updateData("currentPageList", a), o(T);
      }).finally(() => {
        o([]);
      });
    });
  }
  async function H() {
    O({ clientType: g.value, appId: D.value, shopId: "-1", pageType: v.value, enable: 1 }).then((t) => {
      var _a;
      const a = t.data.records ?? [];
      if (a.length > 0) {
        const n = ((_a = a[0].pageComponent) == null ? void 0 : _a.pdThemeConfig) || W;
        e.updateData("themeData", n);
      }
    });
  }
  function q(t) {
    if (!e.pageDeviseData.id) {
      s.$message({ showClose: true, message: r("mall.pagedevise.plsPage") });
      return;
    }
    const a = t.componentName.split("Component")[0];
    let n = C[a];
    e.getPageDeviseData.clientType == d.H5PC && (n = $[a]), p.value != null ? u.value.splice(p.value + 1, 0, { componentName: t.componentName, id: y(), data: l(n) }) : u.value.push({ componentName: t.componentName, id: y(), data: l(n) }), S(u.value.length - 1, a);
  }
  function S(t, a) {
    e.updateDataObj({ currentComp: a.split("Component")[0], currentCompIndex: t, currentCompData: u.value[t].data }), w(), e.updateData("currentCompSetShow", true);
  }
  function E(t, a) {
    e.updateDataObj({ currentComp: t.split("Component")[0], currentCompIndex: t, currentCompData: a }), w(), e.updateData("currentCompSetShow", true);
  }
  function U() {
    e.updateDataObj({ currentCompIndex: null, currentCompData: null, currentCompSetShow: false });
  }
  function F() {
    e.updateDataObj({ currentCompIndex: null, currentCompData: null, currentCompSetShow: false });
  }
  function R() {
    const a = c(() => e.currentComp).value;
    let n = C[a];
    e.getPageDeviseData.clientType == d.H5PC && (n = $[a]), e.updateData("currentCompData", l(n));
    try {
      u.value[p.value].data = e.currentCompData;
    } catch {
      e.pageDeviseData.pageComponent[a] = e.currentCompData;
    }
  }
  function w() {
    const t = c(() => e.currentComp), a = c(() => e.currentCompData), n = t.value, o = C[n];
    if (typeof a.value == "string") {
      e.updateData("currentCompData", l(o));
      try {
        u.value[p.value].data = e.currentCompData;
      } catch {
        e.pageDeviseData.pageComponent[n] = e.currentCompData;
      }
    } else o && Object.keys(o).forEach((m) => {
      a.value[m] || (a.value[m] = o[m]);
    });
  }
  function V() {
    s.$confirm(r("mall.pagedevise.deleteCompConfirm"), r("commons.tip"), { confirmButtonText: r("commons.confirm"), cancelButtonText: r("commons.cancel"), type: "warning" }).then(() => {
      u.value.splice(p.value, 1), e.updateDataObj({ currentCompIndex: null, currentCompData: null, currentCompSetShow: false });
    });
  }
  function z(t) {
    if (e.updateDataObj({ currentCompSetShow: false }), t == "up") {
      if (p.value == 0) return false;
      L(u.value, p.value - 1, p.value), e.updateData("currentCompIndex", p.value - 1);
    } else {
      if (p.value == u.value.length - 1) return false;
      L(u.value, p.value + 1, p.value), e.updateData("currentCompIndex", p.value + 1);
    }
    e.updateDataObj({ currentCompIndex: null, currentCompData: null, currentCompSetShow: false });
  }
  function G(t) {
    e.updateDataObj({ currentCompIndex: null, currentCompData: null, currentCompSetShow: false }), te(u.value, t.moved.newIndex, t.moved.oldIndex);
  }
  function J() {
    e.resetPageDeviseData();
  }
  function i() {
    e.updateDataObj({ currentCompIndex: null, currentComp: null, currentCompData: null, currentCompSetShow: false }), e.pageId ? oe(e.pageId).then((t) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      e.updateData("pageDeviseData", t.data), e.updateDataObj({ currentShopId: (_a = t.data) == null ? void 0 : _a.shopId, currentAppId: (_b = t.data) == null ? void 0 : _b.appId, currentClientType: (_c = t.data) == null ? void 0 : _c.clientType, currentSelectPageType: (_d = t.data) == null ? void 0 : _d.pageType }), f(), ((_e = t.data) == null ? void 0 : _e.pageComponent) || J(), ((_f = t.data) == null ? void 0 : _f.pageType) === v.value || ((_g = t.data) == null ? void 0 : _g.pageType) == A.value ? e.updateData("themeData", ((_i = (_h = t.data) == null ? void 0 : _h.pageComponent) == null ? void 0 : _i.pdThemeConfig) || W) : H();
    }) : f();
  }
  function K(t, a) {
    j(t).then((n) => {
      s.$message({ showClose: true, message: r("commons.addSuccess"), type: "success" }), e.setPageId(n.data.id), i(), a && a();
    }).catch((n) => {
    });
  }
  function M(t) {
    const a = e.pageDeviseData;
    a.id ? ne(x(a)).then(() => {
      s.$message({ showClose: true, message: r("commons.saveSuccess"), type: "success" }), i();
    }) : j(a).then((n) => {
      s.$message({ showClose: true, message: r("commons.addSuccess"), type: "success" }), e.setPageId(n.data.id), i();
    }), t && t();
  }
  function y() {
    return u.value.length || 0 ? u.value.reduce((a, n) => a.id > n.id ? a : n).id + 1 : 1;
  }
  function Q(t, a) {
    if (!t) return false;
    s.$confirm(r("mall.pagedevise.deletePageConfirm"), r("commons.tip"), { confirmButtonText: r("commons.confirm"), cancelButtonText: r("commons.cancel"), type: "warning" }).then(async function() {
      return I(), ae(t);
    }).then(() => {
      s.$message({ showClose: true, message: r("commons.delSuccess"), type: "success" }), P(), a && a();
    });
  }
  function X(t) {
    e.pdWindow === null || e.pdWindow.closed ? e.pdWindow = window.open(t) : s.$confirm("\u60A8\u5F53\u524D\u5DF2\u6253\u5F00\u5176\u4ED6\u88C5\u4FEE\u9875\u9762\uFF0C\u88C5\u4FEE\u9875\u9762\u53EA\u80FD\u6253\u5F00\u4E00\u4E2A\uFF0C\u5982\u679C\u9700\u8981\u6253\u5F00\u591A\u4E2A\u8BF7\u4F7F\u7528\u4E0D\u540C\u6D4F\u89C8\u5668\u6253\u5F00\u3002", r("commons.tip"), { confirmButtonText: r("commons.confirm"), showCancelButton: false, type: "warning" }).then(async function() {
      e.pdWindow.close(), e.pdWindow = window.open(t), e.pdWindow.focus();
    }).catch(() => {
      e.pdWindow.close(), e.pdWindow = window.open(t), e.pdWindow.focus();
    });
  }
  function Y(t) {
    let a = ue;
    e.getPageDeviseData.clientType == d.H5PC && (a = pe);
    let n;
    return a.map((o) => {
      n || (n = o.componentList.find((m) => m.componentName == t));
    }), n ? n.name : t;
  }
  return { draggableChange: G, componentAdd: q, componentSort: z, componentDelete: V, settingConfirm: F, settingResetData: R, settingCancel: U, getPageDeviseData: i, getPageDeviseList: f, showDivSetting: E, showSetting: S, updatePageDeviseData: M, savePageDeviseDataBase: K, delPageDeviseData: Q, changeClientTypeInit: I, useInit: P, goPdWindow: X, getComponentTitle: Y };
}
export {
  fe as u
};
