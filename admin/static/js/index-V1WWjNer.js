import { A as q, R as H, p as K, q as P, K as Z, E as J, S as Q, b1 as R, _ as W, r as k, c as h, o as d, b as g, h as l, g as y, B as S, z as c, e as F, f as I, a_ as X } from "./index-DAdfXJ2i.js";
import { _ as V, f as Y } from "./suppliergoodsspuspec-DZt0HeAC.js";
import { _ as G } from "./BaseEditor-CKHWT0N2.js";
import { t as x, b as ee, c as oe, p as te, d as se, g as ae, e as ie } from "./suppliergoodsspu-B_JJ2gkc.js";
import { g as ne } from "./goodsspec-B5ivNhww.js";
import { M as re } from "./list-CpVj7t9v.js";
import le from "./goods-supplier-excel-import-COnm6xZN.js";
import "./goodsspecvalue-CIlXCfn0.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const pe = { name: "suppliergoodsspu", components: { BaseEditor: G, SkuFormSupplier: V, MaterialList: re, GoodsSupplierExcelImport: le }, props: { goodsId: { type: String } }, setup(t) {
  const { proxy: s } = q(), e = H({ form: { id: "", picUrls: void 0, supplierId: "", videoUrl: "", specType: "", description: "" }, tableOption: x, tabsActive: 1, tableData: [], defaults: {}, searchParams: {}, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: { categoryId: [], categoryFirst: "", categorySecond: "", categoryThird: "" }, tableLoading: false, goodsSpec: null, goodsSpuSpec: null, goodsSku: [], goodsSkuData: [], goodsSpuSpecData: [], optionAppraises: { props: { avatar: "nickName", author: "headimgUrl", body: "content" } }, selectionData: [], reFreshMaterialList: true, dicFreightTemplatId: [], propsFreightTemplatId: { label: "name", value: "id" } }), r = K(null), b = P(() => {
    var _a;
    return (_a = Z()) == null ? void 0 : _a.permissions;
  }), _ = P(() => ({ addBtn: !!b.value["mall:suppliergoodsspu:add"], delBtn: !!b.value["mall:suppliergoodsspu:del"], editBtn: !!b.value["mall:suppliergoodsspu:edit"], viewBtn: !!b.value["mall:suppliergoodsspu:get"] }));
  E(), J(() => e.form.supplierId, (o, a) => {
    a && o != a && (e.form.picUrls = []);
  });
  function f(o) {
    e.selectionData = o;
  }
  function A(o) {
    if (e.selectionData.length <= 0) {
      s.$message.error(s.$t("commons.selectGoods"));
      return;
    }
    let a = "";
    e.selectionData.forEach((u) => {
      a += u.id + ",";
    }), o == 1 ? v(a, o) : s.$confirm(s.$t("mall.suppliergoodsspu.supplierTip10"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(() => {
      v(a, o);
    }).catch(() => {
    });
  }
  function C(o) {
    o && o.id && (o.shelf == "1" ? v(o.id, o.shelf) : s.$confirm(s.$t("mall.suppliergoodsspu.supplierTip10"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(() => {
      v(o.id, o.shelf);
    }).catch(() => {
      o.shelf = "1";
    }));
  }
  function v(o, a) {
    o && ie({ ids: o, shelf: a }).then(() => {
      n(e.page);
    }).catch(() => {
      n(e.page);
    });
  }
  function B(o, a) {
    e.goodsSkuData = o, e.goodsSpuSpecData = a;
  }
  async function w(o, a) {
    e.tableOption.tabsActive = 1, e.tabsActive = 1, e.dicFreightTemplatId = [], e.goodsSpuSpec = [], e.goodsSku = [], a == "add" ? (await T(), o()) : ae(e.form.id).then(async (u) => {
      e.form.description = u.data.description, await U({ spuId: e.form.id }), await T();
      const m = u.data.skus.filter((p) => (p.picUrls = p.picUrl ? [p.picUrl] : [], p));
      e.goodsSku = m, o(), s.$forceUpdate();
    }), j(0);
  }
  function U(o) {
    Y(o).then((a) => {
      e.goodsSpuSpec = a.data;
    });
  }
  function T() {
    ne().then((o) => {
      e.goodsSpec = o.data;
    });
  }
  function L(o, a) {
    o = R(o), e.paramsSearch = o, e.page.currentPage = 1, n(e.page, o), a();
  }
  function i(o) {
    const a = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = a) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = a) : (e.page.ascs = "", e.page.descs = ""), n(e.page);
  }
  function n(o, a) {
    e.tableLoading = true, e.paramsSearch.categoryId && (e.paramsSearch.categoryFirst = e.paramsSearch.categoryId[0], e.paramsSearch.categorySecond = e.paramsSearch.categoryId[1], e.paramsSearch.categoryThird = e.paramsSearch.categoryId[2] || "", e.paramsSearch.categoryId = []), ee(R(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs, id: t.goodsId }, a, e.paramsSearch))).then((u) => {
      const m = u.data.records;
      m.forEach(function(p) {
        const O = [];
        p.categoryFirst && O.push(p.categoryFirst), p.categorySecond && O.push(p.categorySecond), p.categoryThird && O.push(p.categoryThird), p.categoryId = O;
      }), e.tableData = m, e.page.total = u.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false, s.$nextTick(() => {
        r.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function $(o) {
    s.$confirm(s.$t("mall.suppliergoodsspu.supplierTip11"), s.$t("commons.tip"), { confirmButtonText: s.$t("commons.confirm"), cancelButtonText: s.$t("commons.cancel"), type: "warning" }).then(function() {
      return se(o.id);
    }).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.delSuccess"), type: "success" }), n(e.page);
    });
  }
  function D(o, a, u, m) {
    o.skus = e.goodsSkuData, o.spuSpec = e.goodsSpuSpecData, o.categoryFirst = o.categoryId[0], o.categorySecond = o.categoryId[1] ?? "", o.categoryThird = o.categoryId[2] ?? "", o.skus.forEach((p) => {
      p.picUrls && p.picUrls.length > 0 && (p.picUrl = p.picUrls[0]);
    }), te(o).then(() => {
      e.form.supplierId = "", s.$message({ showClose: true, message: s.$t("commons.updateSuccess"), type: "success" }), n(e.page), s.$forceUpdate(), u();
    }).catch(() => {
      m();
    });
  }
  function N(o, a, u) {
    o.skus = e.goodsSkuData, o.spuSpec = e.goodsSpuSpecData, o.categoryFirst = o.categoryId[0], o.categorySecond = o.categoryId[1], o.categoryThird = o.categoryId[2], o.skus.forEach((m) => {
      m.picUrls && m.picUrls.length > 0 && (m.picUrl = m.picUrls[0]);
    }), oe(o).then(() => {
      s.$message({ showClose: true, message: s.$t("commons.addSuccess"), type: "success" }), a(), n(e.page);
    }).catch(() => {
      u();
    });
  }
  function E() {
    n(e.page);
  }
  function z() {
    e.tabsActive < 3 && (e.tableOption.tabsActive == 0 && (e.tableOption.tabsActive = 1), e.tableOption.tabsActive++, e.tabsActive++);
  }
  function M(o, a) {
    o && a && j(o.index);
  }
  function j(o) {
    e.tableOption.tabsActive = Number(o) + 1, e.tabsActive = Number(o) + 1, e.tabsActive == 1 && (e.form.freightType == "0" ? (e.tableOption.group[0].column.find((a) => a.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((a) => a.prop == "freightAmount").display = false) : e.form.freightType == "1" ? (e.tableOption.group[0].column.find((a) => a.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((a) => a.prop == "freightAmount").display = true) : e.form.freightType == "2" ? (e.tableOption.group[0].column.find((a) => a.prop == "freightTemplatId").display = true, e.tableOption.group[0].column.find((a) => a.prop == "freightAmount").display = false) : (e.tableOption.group[0].column.find((a) => a.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((a) => a.prop == "freightAmount").display = false));
  }
  return { ...Q(e), permissions: b, permissionList: _, selectionChange: f, batchShelf: A, changeShelf: C, getGoodsSku: B, beforeOpen: w, fetchTreeF: U, specListF: T, searchChange: L, sortChange: i, getPageF: n, handleDel: $, handleUpdate: D, handleSave: N, refreshChange: E, onNextStep: z, handleTabClick: M, crud: r };
} }, de = { class: "ml-2 text-gray-500" }, ce = { class: "flex justify-center" }, ue = ["src"], me = { style: { color: "red" } }, ge = { style: { height: "100%" } }, fe = { key: 0 }, he = { key: 1, class: "jl-text-tips" }, Se = { key: 0 }, ye = { key: 1, class: "jl-text-tips" }, be = { key: 2, class: "jl-text-tips" }, ve = { key: 1, class: "jl-text-tips" };
function ke(t, s, e, r, b, _) {
  const f = k("el-button"), A = k("GoodsSupplierExcelImport"), C = k("el-tooltip"), v = k("el-switch"), B = G, w = V, U = k("material-list"), T = k("avue-crud"), L = X;
  return d(), h("div", null, [g(L, { class: "mt-[-15px]" }, { default: l(() => [g(T, { ref: "crud", page: t.page, "onUpdate:page": s[6] || (s[6] = (i) => t.page = i), defaults: t.defaults, "onUpdate:defaults": s[7] || (s[7] = (i) => t.defaults = i), search: t.searchParams, "onUpdate:search": s[8] || (s[8] = (i) => t.searchParams = i), modelValue: t.form, "onUpdate:modelValue": s[9] || (s[9] = (i) => t.form = i), style: { "margin-bottom": "50px" }, data: t.tableData, permission: r.permissionList, "table-loading": t.tableLoading, option: t.tableOption, "before-open": r.beforeOpen, onOnLoad: r.getPageF, onRefreshChange: r.refreshChange, onRowUpdate: r.handleUpdate, onRowSave: r.handleSave, onRowDel: r.handleDel, onSortChange: r.sortChange, onSearchChange: r.searchChange, onSelectionChange: r.selectionChange, onTabClick: r.handleTabClick }, { "menu-left": l(() => [r.permissions["mall:suppliergoodsspu:edit"] ? (d(), y(f, { key: 0, type: "success", onClick: s[0] || (s[0] = (i) => r.batchShelf("1")) }, { default: l(() => [I(c(t.$t("mall.goodsspu.menuBatchOn")), 1)]), _: 1 })) : S("", true), r.permissions["mall:suppliergoodsspu:edit"] ? (d(), y(f, { key: 1, type: "danger", onClick: s[1] || (s[1] = (i) => r.batchShelf("0")) }, { default: l(() => [I(c(t.$t("mall.goodsspu.menuBatchOff")), 1)]), _: 1 })) : S("", true), g(A, { onRefresh: r.refreshChange }, null, 8, ["onRefresh"]), F("span", de, c(t.$t("mall.goodsspu.commodityEditorTip5")), 1)]), menu: l(({ size: i, row: n, index: $ }) => [g(f, { text: "", type: "primary", icon: "el-icon-view", size: i, onClick: (D) => t.$refs.crud.rowView(n, $) }, { default: l(() => [I(c(t.$t("commons.view")), 1)]), _: 1 }, 8, ["size", "onClick"]), r.permissions["mall:suppliergoodsspu:edit"] ? (d(), y(C, { key: 0, effect: "dark", content: t.$t("mall.suppliergoodsspu.supplierTip12"), placement: "top", disabled: n.shelf != 1 }, { default: l(() => [g(f, { text: "", type: "primary", icon: "el-icon-edit", size: i, disabled: n.shelf == 1, onClick: (D) => t.$refs.crud.rowEdit(n, $) }, { default: l(() => [I(c(t.$t("commons.edit")), 1)]), _: 1 }, 8, ["size", "disabled", "onClick"])]), _: 2 }, 1032, ["content", "disabled"])) : S("", true), r.permissions["mall:suppliergoodsspu:del"] ? (d(), y(C, { key: 1, effect: "dark", content: t.$t("mall.suppliergoodsspu.supplierTip12"), placement: "top", disabled: n.shelf != 1 }, { default: l(() => [g(f, { text: "", type: "primary", icon: "Delete", size: i, disabled: n.shelf == 1, onClick: (D) => r.handleDel(n) }, { default: l(() => [I(c(t.$t("commons.delete")), 1)]), _: 1 }, 8, ["size", "disabled", "onClick"])]), _: 2 }, 1032, ["content", "disabled"])) : S("", true)]), "menu-form": l(() => [t.tabsActive < 3 ? (d(), y(f, { key: 0, type: "success", onClick: s[2] || (s[2] = (i) => r.onNextStep()) }, { default: l(() => [I(c(t.$t("mall.suppliergoodsspu.batchImportTip9")), 1)]), _: 1 })) : S("", true)]), picUrls: l((i) => [F("div", ce, [i.row.picUrls ? (d(), h("img", { key: 0, class: "w-[58px]", src: i.row.picUrls && i.row.picUrls.length > 0 ? i.row.picUrls[0] : "" }, null, 8, ue)) : S("", true)])]), shelf: l((i) => [g(v, { modelValue: i.row.shelf, "onUpdate:modelValue": (n) => i.row.shelf = n, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", disabled: !r.permissions["mall:suppliergoodsspu:edit"], onChange: (n) => r.changeShelf(i.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])]), priceDown: l((i) => [F("div", me, " \uFFE5" + c(i.row.priceDown) + c(i.row.priceUp == i.row.priceDown ? "" : "~\uFFE5" + i.row.priceUp), 1)]), "description-form": l((i) => [F("div", ge, [g(B, { value: t.form.description, "onUpdate:value": s[3] || (s[3] = (n) => t.form.description = n), shopId: t.form.supplierId, disabled: i.type == "view" }, null, 8, ["value", "shopId", "disabled"])])]), "skus-form": l((i) => [g(w, { specType: t.form.specType, goodsSpec: t.goodsSpec, goodsSpuSpec: t.goodsSpuSpec, goodsSku: t.goodsSku, form: t.form, disabled: i.type == "view", onGetGoodsSku: r.getGoodsSku }, null, 8, ["specType", "goodsSpec", "goodsSpuSpec", "goodsSku", "form", "disabled", "onGetGoodsSku"])]), "picUrls-form": l((i) => [t.form.supplierId ? (d(), h("div", fe, [t.reFreshMaterialList ? (d(), y(U, { key: 0, value: t.form.picUrls, "onUpdate:value": s[4] || (s[4] = (n) => t.form.picUrls = n), disabled: i.type == "view", type: "image", num: 5, shopId: t.form.supplierId }, null, 8, ["value", "disabled", "shopId"])) : S("", true)])) : (d(), h("div", he, c(t.$t("commons.selectSupplierFirst")), 1))]), "videoUrl-form": l((i) => [t.form.supplierId ? (d(), h("div", Se, [t.reFreshMaterialList ? (d(), y(U, { key: 0, type: "video", disabled: i.type == "view", value: t.form.videoUrl ? [t.form.videoUrl] : [], num: 1, shopId: t.form.supplierId, onSureSuccess: s[5] || (s[5] = (n) => t.form.videoUrl = n ? n[0] : "") }, null, 8, ["disabled", "value", "shopId"])) : S("", true), !t.form.videoUrl && i.type == "view" ? (d(), h("div", ye, c(t.$t("commons.notData")), 1)) : (d(), h("p", be, c(t.$t("mall.suppliergoodsspu.videoUrlTip")), 1))])) : (d(), h("div", ve, c(t.$t("commons.selectSupplierFirst")), 1))]), _: 1 }, 8, ["page", "defaults", "search", "modelValue", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange", "onSelectionChange", "onTabClick"])]), _: 1 })]);
}
const Pe = W(pe, [["render", ke], ["__scopeId", "data-v-e25090b1"]]);
export {
  Pe as default
};
