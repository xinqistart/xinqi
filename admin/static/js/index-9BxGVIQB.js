import { A as k, R as P, be as L, p as S, q as A, U as $, $ as W, t as N, S as B, _ as j, r, j as T, c, o as p, b as n, h as d, e as v, z as O, w as F, B as w, F as C, v as E, a_ as M } from "./index-DAdfXJ2i.js";
import { _ as y, g as U, d as K } from "./wxfreepublish-LUjjosG7.js";
import { b as R } from "./wxapp-BACewdCT.js";
const q = { components: { WxNews: y }, setup() {
  const { proxy: a } = k(), e = P({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, tableData: [], page: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "" }, page1: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "" }, tableLoading: false, headers: { Authorization: "Bearer " + L().access_token } }), g = S(null), l = A(() => {
    var _a;
    return (_a = $()) == null ? void 0 : _a.userInfo;
  });
  (() => {
    if (l.value.type == "-1") {
      const t = W();
      t && (e.headers["switch-tenant-id"] = t);
    }
  })(), N(() => {
    _();
  });
  function x(t, o) {
    return t ? o.name.indexOf(t) !== -1 : true;
  }
  function _() {
    R({ appType: "2" }).then((t) => {
      e.treeWxAppData = t.data, e.treeWxAppData && e.treeWxAppData.length > 0 && u({ id: e.treeWxAppData[0].id });
    });
  }
  function u(t) {
    e.appId != t.id && (a.$nextTick(() => {
      g.value && g.value.setCurrentKey(t.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = t.id, s(e.page));
  }
  function s(t, o) {
    e.tableData = [], e.tableLoading = true, U(Object.assign({ current: t.currentPage, size: t.pageSize, appId: e.appId }, o)).then((m) => {
      e.tableData = m.data.items, e.page.total = m.data.totalCount, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function f(t) {
    e.page.currentPage = 1, e.page.pageSize = t, s(e.page);
  }
  function h(t) {
    e.page.currentPage = t, s(e.page);
  }
  function b(t) {
    a.$confirm(a.$t("wxmp.wxfreepublish.confirmDeleteWarning"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      e.tableLoading = true, K({ id: t.articleId, appId: e.appId }).then((o) => {
        e.tableLoading = false, o.code == "0" ? s(e.page) : (e.tableLoading = false, a.$message.error(a.$t("wxmp.wxfreepublish.deleteError") + o.msg));
      }).catch(() => {
        e.tableLoading = false;
      });
    });
  }
  return { ...B(e), filterNode: x, getWxAppListF: _, nodeClick: u, getPageF: s, sizeChange: f, currentChange: h, delMaterial: b, tree: g };
} }, H = { class: "execution", style: { "border-top": "solid 1px #eceef6" } }, V = { style: { display: "flex", "justify-content": "center" } }, G = { class: "waterfall" }, J = { key: 0, class: "el-table__empty-block" };
function Q(a, e, g, l, x, _) {
  const u = r("avue-tree"), s = r("el-card"), f = r("el-col"), h = y, b = r("el-button"), t = r("el-empty"), o = r("el-pagination"), m = r("el-row"), z = M, D = T("loading");
  return p(), c("div", H, [n(z, null, { default: d(() => [n(m, { span: 24, gutter: 10 }, { default: d(() => [n(f, { xs: 24, sm: 24, md: 3 }, { default: d(() => [n(s, { shadow: "never" }, { header: d(() => [v("div", V, [v("span", null, O(a.$t("wxmp.wxfreepublish.officialAccountName")), 1)])]), default: d(() => [n(u, { style: { "margin-top": "-1px" }, option: a.treeOption, data: a.treeWxAppData, ref: "tree", onNodeClick: l.nodeClick }, null, 8, ["option", "data", "onNodeClick"])]), _: 1 })]), _: 1 }), n(f, { xs: 24, sm: 24, md: 20, class: "user__main", style: { "min-height": "76vh", padding: "10px", "border-left": "solid 1px #eceef6" } }, { default: d(() => [F((p(), c("div", G, [(p(true), c(C, null, E(a.tableData, (i, I) => (p(), c(C, null, [i.content && i.content.newsItem ? (p(), c("div", { key: I, class: "waterfall-item" }, [n(h, { objData: i.content.newsItem }, null, 8, ["objData"]), n(b, { class: "mt-[10px]", type: "danger", icon: "delete", circle: "", onClick: (X) => l.delMaterial(i) }, null, 8, ["onClick"])])) : w("", true)], 64))), 256))])), [[D, a.tableLoading]]), a.tableData.length <= 0 && !a.tableLoading ? (p(), c("div", J, [n(t)])) : w("", true), n(o, { style: { "margin-top": "50px" }, onSizeChange: l.sizeChange, onCurrentChange: l.currentChange, "current-page": a.page.currentPage, "onUpdate:currentPage": e[0] || (e[0] = (i) => a.page.currentPage = i), "page-sizes": [10, 20], "page-size": a.page.pageSize, layout: "total, sizes, prev, pager, next, jumper", total: a.page.total, class: "pagination" }, null, 8, ["onSizeChange", "onCurrentChange", "current-page", "page-size", "total"])]), _: 1 })]), _: 1 })]), _: 1 })]);
}
const te = j(q, [["render", Q], ["__scopeId", "data-v-2dadaefe"]]);
export {
  te as default
};
