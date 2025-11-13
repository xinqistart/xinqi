import { _ as B, g as x } from "./wxfreepublish-LUjjosG7.js";
import { b as M } from "./wxmaterial-DvTatkAN.js";
import { aO as _, n as O, R as V, S as N, _ as R, r as m, j as q, c as i, B as w, o as r, w as j, e as h, F as D, v as I, b as o, z as b, h as d, f as z } from "./index-DAdfXJ2i.js";
function F(e) {
  return _.request("get", "/weixin/wxdraft/page", { params: e });
}
function se(e) {
  return _.request("post", "/weixin/wxdraft", { data: e });
}
function ce(e) {
  return _.request("delete", "/weixin/wxdraft", { params: e });
}
function ge(e) {
  return _.request("put", "/weixin/wxdraft", { data: e });
}
function de(e, s) {
  return _.request("post", "/weixin/wxdraft/publish/" + e + "/" + s);
}
const { $t: k } = O(), U = { dialogDrag: true, index: true, indexLabel: k("commons.indexLabel"), menuAlign: "center", align: "center", editBtn: false, delBtn: false, addBtn: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: "media_id", prop: "mediaId" }, { label: k("wxmp.wxmaterial_voice.name"), prop: "name" }, { label: k("wxmp.wxmaterial_voice.updateTime"), prop: "updateTime" }] }, { $t: L } = O(), E = { dialogDrag: true, index: true, indexLabel: L("commons.indexLabel"), menuAlign: "center", align: "center", editBtn: false, delBtn: false, addBtn: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, column: [{ label: "media_id", prop: "mediaId" }, { label: L("wxmp.wxmaterial.name"), prop: "name" }, { label: L("wxmp.wxmaterial.updateTime"), prop: "updateTime" }] }, $ = { props: { appId: { type: String }, objData: { type: Object }, newsType: { type: String, default: "1" } }, components: { WxNews: B }, setup(e, s) {
  const a = V({ tableLoading: false, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, tableOptionVoice: U, tableOptionVideo: E });
  f(a.page);
  function l(n) {
    s.emit("selectMaterial", n);
  }
  function f(n, p) {
    a.tableLoading = true, e.objData.repType == "news" ? e.newsType == "1" ? x(Object.assign({ current: n.currentPage, size: n.pageSize, appId: e.appId }, p)).then((g) => {
      const u = g.data.items;
      u.forEach((c) => {
        c.mediaId = c.articleId, c.content.articles = c.content.newsItem;
      }), a.tableData = u, a.page.total = g.data.totalCount, a.page.currentPage = n.currentPage, a.page.pageSize = n.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    }) : e.newsType == "2" && F(Object.assign({ current: n.currentPage, size: n.pageSize, appId: e.appId }, p)).then((g) => {
      const u = g.data.items;
      u.forEach((c) => {
        c.mediaId = c.articleId, c.content.articles = c.content.newsItem;
      }), a.tableData = u, a.page.total = g.data.totalCount, a.page.currentPage = n.currentPage, a.page.pageSize = n.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    }) : M(Object.assign({ current: n.currentPage, size: n.pageSize, appId: e.appId, type: e.objData.repType }, p)).then((g) => {
      a.tableData = g.data.items, a.page.total = g.data.totalCount, a.page.currentPage = n.currentPage, a.page.pageSize = n.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function S(n) {
    a.page.currentPage = 1, a.page.pageSize = n, f(a.page);
  }
  function y(n) {
    a.page.currentPage = n, f(a.page);
  }
  function C() {
    f(a.page);
  }
  return { ...N(a), selectMaterial: l, getPageF: f, sizeChange: S, currentChange: y, refreshChange: C };
} }, A = { key: 0 }, W = { class: "waterfall" }, G = ["title"], H = { key: 0, class: "el-table__empty-block" }, J = { class: "el-table__empty-text" }, K = { class: "dialog-footer mt-2" }, Q = { key: 1 }, X = { key: 2 }, Y = { key: 3 }, Z = { class: "waterfall" }, ee = { key: 0, class: "waterfall-item" }, ae = { key: 0, class: "el-table__empty-block" }, te = { class: "el-table__empty-text" }, ne = { class: "dialog-footer" };
function oe(e, s, a, l, f, S) {
  const y = m("el-image"), C = m("el-icon-circle-check"), n = m("el-icon"), p = m("el-button"), g = m("el-row"), u = m("el-pagination"), c = m("avue-crud"), T = B, P = q("loading");
  return a.objData.repType == "image" ? (r(), i("div", A, [j((r(), i("div", W, [(r(true), i(D, null, I(e.tableData, (t) => (r(), i("div", { key: t.mediaId, class: "waterfall-item" }, [o(y, { fit: "fill", class: "material-img", src: t.url }, null, 8, ["src"]), h("div", { class: "item-name", title: t.name }, b(t.name), 9, G), o(g, { class: "flex-c" }, { default: d(() => [o(p, { size: "small", type: "primary", onClick: (v) => l.selectMaterial(t) }, { default: d(() => [z(b(e.$t("commons.selectLabel")), 1), o(n, { class: "el-icon--right" }, { default: d(() => [o(C)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), _: 2 }, 1024)]))), 128))])), [[P, e.tableLoading]]), e.tableData.length <= 0 && !e.tableLoading ? (r(), i("div", H, [h("span", J, b(e.$t("commons.notData")), 1)])) : w("", true), h("div", K, [o(u, { "current-page": e.page.currentPage, "onUpdate:currentPage": s[0] || (s[0] = (t) => e.page.currentPage = t), layout: "total, sizes, prev, pager, next, jumper", class: "pagination", "page-sizes": [10, 20], "page-size": e.page.pageSize, total: e.page.total, onSizeChange: l.sizeChange, onCurrentChange: l.currentChange }, null, 8, ["current-page", "page-size", "total", "onSizeChange", "onCurrentChange"])])])) : a.objData.repType == "voice" ? (r(), i("div", Q, [o(c, { ref: "crud", page: e.page, "onUpdate:page": s[1] || (s[1] = (t) => e.page = t), data: e.tableData, "table-loading": e.tableLoading, option: e.tableOptionVoice, onOnLoad: l.getPageF, onSizeChange: l.sizeChange, onRefreshChange: l.refreshChange }, { menu: d((t) => [o(p, { type: "primary", link: "", icon: "CircleCheck", onClick: (v) => l.selectMaterial(t.row) }, { default: d(() => [z(b(e.$t("commons.selectLabel")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onOnLoad", "onSizeChange", "onRefreshChange"])])) : a.objData.repType == "video" ? (r(), i("div", X, [o(c, { ref: "crud", page: e.page, "onUpdate:page": s[2] || (s[2] = (t) => e.page = t), data: e.tableData, "table-loading": e.tableLoading, option: e.tableOptionVideo, onOnLoad: l.getPageF, onSizeChange: l.sizeChange, onRefreshChange: l.refreshChange }, { menu: d((t) => [o(p, { type: "primary", link: "", icon: "CircleCheck", onClick: (v) => l.selectMaterial(t.row) }, { default: d(() => [z(b(e.$t("commons.selectLabel")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onOnLoad", "onSizeChange", "onRefreshChange"])])) : a.objData.repType == "news" ? (r(), i("div", Y, [j((r(), i("div", Z, [(r(true), i(D, null, I(e.tableData, (t) => (r(), i(D, { key: t }, [t.content && t.content.articles ? (r(), i("div", ee, [o(T, { objData: t.content.articles }, null, 8, ["objData"]), o(g, { class: "mt-[10px] flex-c" }, { default: d(() => [o(p, { type: "primary", size: "small", onClick: (v) => l.selectMaterial(t) }, { default: d(() => [z(b(e.$t("commons.selectLabel")), 1), o(n, { class: "el-icon--right" }, { default: d(() => [o(C)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), _: 2 }, 1024)])) : w("", true)], 64))), 128))])), [[P, e.tableLoading]]), e.tableData.length <= 0 && !e.tableLoading ? (r(), i("div", ae, [h("span", te, b(e.$t("commons.notData")), 1)])) : w("", true), h("span", ne, [o(u, { "current-page": e.page.currentPage, "onUpdate:currentPage": s[3] || (s[3] = (t) => e.page.currentPage = t), "page-sizes": [10, 20], "page-size": e.page.pageSize, layout: "total, sizes, prev, pager, next, jumper", total: e.page.total, class: "pagination", onSizeChange: l.sizeChange }, null, 8, ["current-page", "page-size", "total", "onSizeChange"])])])) : w("", true);
}
const pe = R($, [["render", oe], ["__scopeId", "data-v-1cb4e89c"]]);
export {
  pe as _,
  se as a,
  ge as b,
  ce as d,
  F as g,
  de as p
};
