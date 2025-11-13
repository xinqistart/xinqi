import { A as Z, R as J, p as Q, q as R, E as X, S as Y, b1 as j, K as x, _ as ee, c as g, o as d, b as m, h as p, r as h, g as w, z as f, e as I, B as V, f as N, a_ as oe } from "./index-DAdfXJ2i.js";
import { _ as E, f as te } from "./suppliergoodsspuspec-DZt0HeAC.js";
import { _ as G } from "./BaseEditor-CKHWT0N2.js";
import { a as ae, b as se, g as z, c as re, p as ie, d as ne, e as ce } from "./suppliergoodsspu-B_JJ2gkc.js";
import { g as pe } from "./goodsspec-B5ivNhww.js";
import { M as le } from "./list-CpVj7t9v.js";
import de from "./details-dialog-CE2jsaHe.js";
import "./goodsspecvalue-CIlXCfn0.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
import "./supplier-BS6wXSgi.js";
const ue = { name: "suppliergoodsspuselect", components: { BaseEditor: G, SkuFormSupplier: E, MaterialList: le, SupplierDetailsDialog: de }, props: { goodsId: { type: String } }, setup(a) {
  const { proxy: s } = Z(), e = J({ form: { id: "", picUrls: void 0, supplierId: "", videoUrl: "", specType: "", description: "" }, tableOption: ae, tabsActive: 1, tableData: [], defaults: {}, searchParams: {}, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: { categoryId: [], categoryFirst: "", categorySecond: "", categoryThird: "" }, tableLoading: false, goodsSpec: null, goodsSpuSpec: null, goodsSku: [], goodsSkuData: [], goodsSpuSpecData: [], optionAppraises: { props: { avatar: "nickName", author: "headimgUrl", body: "content" } }, selectionData: [], reFreshMaterialList: true, dicFreightTemplatId: [], propsFreightTemplatId: { label: "name", value: "id" }, selectRow: "" }), n = Q(null), $ = R(() => {
    var _a;
    return (_a = x()) == null ? void 0 : _a.permissions;
  }), A = R(() => ({ addBtn: false, delBtn: false, editBtn: false, viewBtn: true }));
  B(), X(() => e.form.supplierId, (o, t) => {
    t && o != t && (e.form.picUrls = []);
  });
  function U(o) {
    e.selectionData = o, s.$emit("selectionChange", e.selectionData);
  }
  function D(o) {
    if (e.selectionData.length <= 0) {
      s.$message.error(s.$t("commons.selectGoods"));
      return;
    }
    let t = "";
    e.selectionData.forEach((l) => {
      t += l.id + ",";
    }), k(t, o);
  }
  function T(o) {
    o && o.id && k(o.id, o.shelf);
  }
  function k(o, t) {
    o && ce({ ids: o, shelf: t }).then(() => {
      r(e.page);
    });
  }
  function C(o, t) {
    e.goodsSkuData = o, e.goodsSpuSpecData = t;
  }
  async function _(o, t) {
    e.tableOption.tabsActive = 1, e.tabsActive = 1, e.dicFreightTemplatId = [], e.goodsSpuSpec = [], e.goodsSku = [], t == "add" ? (await S(), o()) : z(e.form.id).then(async (l) => {
      let i = l.data, c = [];
      if (i) {
        i.categoryFirst && c.push(i.categoryFirst), i.categorySecond && c.push(i.categorySecond), i.categoryThird && c.push(i.categoryThird), i.categoryId = c, e.form = i, await b({ spuId: e.form.id }), await S();
        const y = l.data.skus.filter((v) => (v.picUrls = v.picUrl ? [v.picUrl] : [], v));
        e.goodsSku = y;
      }
      o(), s.$forceUpdate();
    }), P(0);
  }
  function b(o) {
    te(o).then((t) => {
      e.goodsSpuSpec = t.data;
    });
  }
  function S() {
    pe().then((o) => {
      e.goodsSpec = o.data;
    });
  }
  function O(o, t) {
    o = j(o), e.paramsSearch = o, e.page.currentPage = 1, r(e.page, o), t();
  }
  function F(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), r(e.page);
  }
  function r(o, t) {
    e.tableLoading = true, e.paramsSearch.categoryId && (e.paramsSearch.categoryFirst = e.paramsSearch.categoryId[0], e.paramsSearch.categorySecond = e.paramsSearch.categoryId[1], e.paramsSearch.categoryThird = e.paramsSearch.categoryId[2] || "", e.paramsSearch.categoryId = []), se(j(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs, id: a.goodsId, shelf: "1" }, t, e.paramsSearch))).then((l) => {
      const i = l.data.records;
      i.forEach(function(c) {
        const y = [];
        c.categoryFirst && y.push(c.categoryFirst), c.categorySecond && y.push(c.categorySecond), c.categoryThird && y.push(c.categoryThird), c.categoryId = y;
      }), e.tableData = i, e.page.total = l.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false, s.$nextTick(() => {
        n.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function u(o) {
    s.$confirm(s.$t("commons.confirmDelete"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(function() {
      return ne(o.id);
    }).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.delSuccess"), type: "success" }), r(e.page);
    });
  }
  function L(o, t, l, i) {
    o.skus = e.goodsSkuData, o.spuSpec = e.goodsSpuSpecData, o.categoryFirst = o.categoryId[0], o.categorySecond = o.categoryId[1] ?? "", o.categoryThird = o.categoryId[2] ?? "", o.skus.forEach((c) => {
      c.picUrls && c.picUrls.length > 0 && (c.picUrl = c.picUrls[0]);
    }), ie(o).then(() => {
      e.form.supplierId = "", s.$message({ showClose: true, message: s.$t("commons.updateSuccess"), type: "success" }), r(e.page), s.$forceUpdate(), l();
    }).catch(() => {
      i();
    });
  }
  function M(o, t, l) {
    o.skus = e.goodsSkuData, o.spuSpec = e.goodsSpuSpecData, o.categoryFirst = o.categoryId[0], o.categorySecond = o.categoryId[1], o.categoryThird = o.categoryId[2], o.skus.forEach((i) => {
      i.picUrls && i.picUrls.length > 0 && (i.picUrl = i.picUrls[0]);
    }), re(o).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.addSuccess"), type: "success" }), t(), r(e.page);
    }).catch(() => {
      l();
    });
  }
  function B() {
    r(e.page);
  }
  function W() {
    e.tabsActive < 3 && (e.tableOption.tabsActive == 0 && (e.tableOption.tabsActive = 1), e.tableOption.tabsActive++, e.tabsActive++);
  }
  function q(o, t) {
    o && t && P(o.index);
  }
  function P(o) {
    e.tableOption.tabsActive = Number(o) + 1, e.tabsActive = Number(o) + 1, e.tabsActive == 1 && (e.form.freightType == "0" ? (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = false) : e.form.freightType == "1" ? (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = true) : e.form.freightType == "2" ? (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = true, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = false) : (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = false));
  }
  async function H(o) {
    s.$loading({ lock: true, text: "\u6DFB\u52A0\u4E2D,\u8BF7\u7A0D\u540E", background: "rgba(0, 0, 0, 0.3)" }), e.selectRow = o.$index, await b({ spuId: o.id }), z(o.id).then((t) => {
      t.data, s.$loading().close();
    }).catch((t) => {
      s.$loading().close();
    });
  }
  function K(o) {
    n.value.rowView({ id: o });
  }
  return { ...Y(e), permissions: $, permissionList: A, selectionChange: U, batchShelf: D, changeShelf: T, getGoodsSku: C, beforeOpen: _, fetchTreeF: b, specListF: S, searchChange: O, sortChange: F, getPageF: r, handleDel: u, handleUpdate: L, handleSave: M, refreshChange: B, onNextStep: W, handleTabClick: q, rowClick: H, crud: n, showDetail: K };
} }, ge = { class: "ml-2 text-gray-500" }, me = { class: "flex justify-center" }, fe = ["src"], he = { style: { color: "red" } }, Se = { style: { height: "100%" } }, ye = { key: 0 }, be = { key: 1 }, ke = { key: 1, class: "jl-text-tips" }, ve = { key: 0 }, Ie = { key: 1, class: "jl-text-tips" }, Ue = { key: 1, class: "jl-text-tips" };
function De(a, s, e, n, $, A) {
  const U = h("Warning"), D = h("el-icon"), T = h("el-button"), k = h("SupplierDetailsDialog"), C = h("el-switch"), _ = G, b = E, S = h("material-list"), O = h("avue-crud"), F = oe;
  return d(), g("div", null, [m(F, { class: "mt-[-15px]" }, { default: p(() => [m(O, { ref: "crud", page: a.page, "onUpdate:page": s[3] || (s[3] = (r) => a.page = r), defaults: a.defaults, "onUpdate:defaults": s[4] || (s[4] = (r) => a.defaults = r), search: a.searchParams, "onUpdate:search": s[5] || (s[5] = (r) => a.searchParams = r), modelValue: a.form, "onUpdate:modelValue": s[6] || (s[6] = (r) => a.form = r), style: { "margin-bottom": "50px" }, data: a.tableData, permission: n.permissionList, "table-loading": a.tableLoading, option: a.tableOption, "before-open": n.beforeOpen, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange, onSelectionChange: n.selectionChange, onTabClick: n.handleTabClick }, { "menu-left": p(() => [I("span", ge, [m(D, { size: "11", class: "mr-1" }, { default: p(() => [m(U)]), _: 1 }), N(f(a.$t("mall.suppliergoodsspu.supplierTip9")), 1)])]), "menu-form": p(() => [a.tabsActive < 3 ? (d(), w(T, { key: 0, type: "success", onClick: s[0] || (s[0] = (r) => n.onNextStep()) }, { default: p(() => [N(f(a.$t("mall.suppliergoodsspu.batchImportTip9")), 1)]), _: 1 })) : V("", true)]), menu: p(({ size: r, row: u, index: L }) => [m(k, { supplierId: u.supplierId }, null, 8, ["supplierId"])]), picUrls: p((r) => [I("div", me, [r.row.picUrls ? (d(), g("img", { key: 0, class: "w-[58px]", src: r.row.picUrls && r.row.picUrls.length > 0 ? r.row.picUrls[0] : "" }, null, 8, fe)) : V("", true)])]), shelf: p((r) => [m(C, { modelValue: r.row.shelf, "onUpdate:modelValue": (u) => r.row.shelf = u, disabled: "", "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), priceDown: p((r) => [I("div", he, " \uFFE5" + f(r.row.priceDown) + f(r.row.priceUp == r.row.priceDown ? "" : "~\uFFE5" + r.row.priceUp), 1)]), "description-form": p(() => [I("div", Se, [m(_, { value: a.form.description, disabled: true }, null, 8, ["value"])])]), "skus-form": p(() => [m(b, { specType: a.form.specType, goodsSpec: a.goodsSpec, goodsSpuSpec: a.goodsSpuSpec, goodsSku: a.goodsSku, form: a.form, disabled: true, onGetGoodsSku: n.getGoodsSku }, null, 8, ["specType", "goodsSpec", "goodsSpuSpec", "goodsSku", "form", "onGetGoodsSku"])]), "picUrls-form": p((r) => [a.form.supplierId ? (d(), g("div", ye, [a.reFreshMaterialList ? (d(), w(S, { key: 0, value: a.form.picUrls, "onUpdate:value": s[1] || (s[1] = (u) => a.form.picUrls = u), disabled: r.type == "view", type: "image", num: 5, shopId: a.form.supplierId }, null, 8, ["value", "disabled", "shopId"])) : (d(), g("div", be, f(a.$t("commons.notData")), 1))])) : (d(), g("div", ke, f(a.$t("commons.selectSupplierFirst")), 1))]), "videoUrl-form": p((r) => [a.form.supplierId ? (d(), g("div", ve, [a.form.videoUrl ? (d(), w(S, { key: 0, disabled: r.type == "view", value: a.form.videoUrl ? [a.form.videoUrl] : [], type: "video", num: 1, shopId: a.form.supplierId, onSureSuccess: s[2] || (s[2] = (u) => a.form.videoUrl = u ? u[0] : "") }, null, 8, ["disabled", "value", "shopId"])) : (d(), g("div", Ie, f(a.$t("commons.notData")), 1))])) : (d(), g("div", Ue, f(a.$t("commons.selectSupplierFirst")), 1))]), _: 1 }, 8, ["page", "defaults", "search", "modelValue", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange", "onSelectionChange", "onTabClick"])]), _: 1 })]);
}
const Ee = ee(ue, [["render", De], ["__scopeId", "data-v-d11bd37e"]]);
export {
  Ee as default
};
