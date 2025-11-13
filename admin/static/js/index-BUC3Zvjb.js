import { q, A as se, R as ae, U as Q, p as W, E as K, S as ie, b1 as X, K as ne, _ as re, c as D, o as d, b as f, w as pe, B as m, h as r, r as b, e as S, z as c, g as h, f as y, a_ as le, D as de } from "./index-DAdfXJ2i.js";
import { _ as Y } from "./goods-select-DrMu2Gwf.js";
import { G as ce, _ as x } from "./goods-supplier-sync-B6V0ptyp.js";
import { _ as ee } from "./BaseEditor-CKHWT0N2.js";
import { g as ue, e as me, a as fe, p as ge, d as he, b as Se, c as ye, f as be } from "./goodsspu-DKL_9wDU.js";
import { g as Ie } from "./goodsspec-B5ivNhww.js";
import { f as ve } from "./goodsspuspec-aVm7uABh.js";
import { g as ke } from "./pointsconfig-Df6yTocn.js";
import { g as De } from "./distributionconfig-DFgn2QpM.js";
import { a as Te } from "./goodsspu-Dmc9OYVL.js";
import { M as Ce } from "./list-CpVj7t9v.js";
import { g as Re } from "./freighttemplat-H0ep6JZX.js";
import $e from "./goods-supplier-select-Bn7KARNC.js";
import Oe from "./goods-supplier-import-Ct9VZjok.js";
import Ue from "./goods-excel-import-D-YnK_6M.js";
import _e from "./details-dialog-CE2jsaHe.js";
import "./suppliergoodsspuspec-DZt0HeAC.js";
import "./goodsspecvalue-CIlXCfn0.js";
import "./suppliergoodsspu-B_JJ2gkc.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
import "./supplier-BS6wXSgi.js";
const Ae = { components: { BaseEditor: ee, SkuForm: x, MaterialList: Ce, GoodsSelect: Y, GoodsSupplierSelect: $e, GoodsSupplierImport: Oe, GoodsExcelImport: Ue, GoodsSupplierSync: ce, SupplierDetailsDialog: _e }, props: { goodsId: { type: String } }, setup(s) {
  var _a;
  const n = q(() => {
    var _a2;
    return (_a2 = Q()) == null ? void 0 : _a2.initConfig;
  }), { proxy: i } = se(), e = ae({ goodsRecommendList: [], form: { id: "", picUrls: void 0, shopId: "", videoUrl: "", specType: "", pointsDeductScale: void 0, pointsDeductAmount: 0, firstRebate: void 0, secondRebate: void 0, description: "", goodsRecommend: { spuIds: [], spuId: "" } }, tableOption: Te, tabsActive: 1, tableData: [], defaults: {}, searchParams: {}, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: { categoryId: [], categoryFirst: "", categorySecond: "", categoryThird: "", categoryShopFirst: "", categoryShopSecond: "", categoryShopThird: "", categoryShopId: void 0 }, tableLoading: false, goodsSpec: null, goodsSpuSpec: null, goodsSku: [], goodsSkuData: [], goodsSpuSpecData: [], optionAppraises: { props: { avatar: "nickName", author: "headimgUrl", body: "content" } }, selectionData: [], pointsConfig: { defaultDeductScale: 0, defaultDeductAmount: 0 }, distributionConfig: null, reFreshMaterialList: true, dicFreightTemplatId: [], propsFreightTemplatId: { label: "name", value: "id" }, verifyStatus: "-1", userInfo: null });
  e.userInfo = (_a = Q()) == null ? void 0 : _a.userInfo;
  const O = W(null), U = q(() => {
    var _a2;
    return (_a2 = ne()) == null ? void 0 : _a2.permissions;
  }), R = q(() => ({ addBtn: !!(U.value["mall:goodsspu:add"] && n.value.VERSION_01_SUPPLIER_STATUS === 1), viewBtn: !!U.value["mall:goodsspu:get"] }));
  a(), K(() => e.form.shopId, (o, t) => {
    t && o != t && (e.form.picUrls = [], e.form.freightTemplatId = "", e.form.supplierId = "");
  }), K(() => e.searchParams.isSupplier, (o) => {
    o == "1" ? e.defaults.supplierId.search = true : (e.defaults.supplierId.search = false, e.searchParams.supplierId = "");
  }), K(() => e.form.supplierId, (o, t) => {
    e.form.supplierSpuId || (e.form.freightTemplatId = ""), L();
  });
  function L() {
    (e.form.supplierId || e.form.shopId) && Re({ shopId: e.form.supplierId ? e.form.supplierId : e.form.shopId, ofType: e.form.supplierId ? "2" : "1" }).then((o) => {
      let t = o.data || [];
      i.$nextTick(() => {
        O.value.updateDic("freightTemplatId", t), e.form.freightType == "1" ? e.tableOption.group[0].column.find((p) => p.prop == "freightAmount").display = true : e.form.freightType == "2" && (e.tableOption.group[0].column.find((p) => p.prop == "freightTemplatId").display = true), e.form.supplierId ? (e.tableOption.group[0].column.find((p) => p.prop == "supplierId").display = true, e.tableOption.group[1].column.find((p) => p.prop == "specType").editDisabled = true) : (e.tableOption.group[0].column.find((p) => p.prop == "supplierId").display = false, e.tableOption.group[1].column.find((p) => p.prop == "specType").editDisabled = false);
      });
    });
  }
  function k(o) {
    e.selectionData = o;
  }
  function B(o) {
    if (e.selectionData.length <= 0) {
      i.$message.error(i.$t("commons.selectGoods"));
      return;
    }
    i.$prompt(i.$t("commons.inputTips", { name: i.$t("mall.goodsspu.verifyDetail") }), i.$t("commons.tip"), { confirmButtonText: i.$t("commons.confirm"), cancelButtonText: i.$t("commons.cancel") }).then(({ value: t }) => {
      let p = "";
      e.selectionData.forEach((g) => {
        p += g.id + ",";
      }), be({ ids: p, verifyStatus: o, verifyDetail: t }).then(() => {
        I(e.page);
      });
    });
  }
  function V(o) {
    if (e.selectionData.length <= 0) {
      i.$message.error(i.$t("commons.selectGoods"));
      return;
    }
    let t = e.selectionData.filter((g) => g.supplierSpuId);
    if (o == 1 && t.length > 0) {
      i.$message.error("\u4F9B\u5E94\u5546\u5546\u54C1\u4E0D\u5141\u8BB8\u8FDB\u884C\u6279\u91CF\u4E0A\u67B6\u64CD\u4F5C");
      return;
    }
    let p = "";
    e.selectionData.forEach((g) => {
      p += g.id + ",";
    }), C(p, o);
  }
  function j(o) {
    o && o.id && (o.supplierSpuId && o.shelf == "1" ? i.$confirm("\u8BE5\u5546\u54C1\u4E3A\u4F9B\u5E94\u5546\u5546\u54C1,\u662F\u5426\u786E\u5B9A\u4E0A\u67B6(\u5982\u679C\u4F9B\u5E94\u5546\u5546\u54C1\u72B6\u6001\u4E3A\u4E0B\u67B6,\u5219\u4E0D\u80FD\u8FDB\u884C\u4E0A\u67B6\u64CD\u4F5C)?", i.$t("commons.tip"), { confirmButtonText: i.$t("commons.confirm"), cancelButtonText: i.$t("commons.cancel"), type: "warning" }).then(() => {
      C(o.id, o.shelf);
    }).catch(() => {
      o.shelf = o.shelf == 1 ? 0 : 1;
    }) : C(o.id, o.shelf));
  }
  function C(o, t) {
    o && ye({ ids: o, shelf: t }).then(() => {
      I(e.page);
    }).catch(() => {
      I(e.page);
    });
  }
  function T(o, t) {
    e.goodsSkuData = o, e.goodsSpuSpecData = t;
  }
  async function E(o, t) {
    e.tableOption.tabsActive = 1, e.tabsActive = 1, e.dicFreightTemplatId = [], e.goodsSpuSpec = [], e.goodsSku = [], e.goodsRecommendList = [], e.form.goodsRecommend = { spuIds: [], spuId: e.form.id }, t == "add" ? (e.form.supplierId = "", e.userInfo.type == "2" && (e.form.shopId = e.userInfo.shopId), i.$nextTick(() => {
      e.tableOption.group[0].column.find((p) => p.prop == "supplierId").display = false;
    }), await $(), o()) : t == "edit" && Se(e.form.id).then(async (p) => {
      e.form.description = p.data.description, e.form.ensureIds = p.data.ensureIds, await _({ spuId: e.form.id }), await $();
      const g = p.data.skus.filter((l) => (l.picUrls = l.picUrl ? [l.picUrl] : [], l));
      e.goodsSku = g, p.data.goodsRecommend ? (e.goodsRecommendList = [], e.form.goodsRecommend = p.data.goodsRecommend) : (e.goodsRecommendList = [], e.form.goodsRecommend = { spuIds: [], spuId: e.form.id }), o(), i.$forceUpdate();
    }), Z(0);
  }
  function _(o) {
    ve(o).then((t) => {
      e.goodsSpuSpec = t.data;
    });
  }
  function $() {
    Ie().then((o) => {
      e.goodsSpec = o.data;
    }), e.pointsConfig ? e.form.pointsDeductScale || (e.form.pointsDeductScale = e.pointsConfig.defaultDeductScale, e.form.pointsDeductAmount = e.pointsConfig.defaultDeductAmount) : ke().then((o) => {
      e.pointsConfig = o.data ? o.data : null, e.form.pointsDeductScale || (e.form.pointsDeductScale = e.pointsConfig.defaultDeductScale, e.form.pointsDeductAmount = e.pointsConfig.defaultDeductAmount);
    }), e.distributionConfig ? e.form.firstRebate || (e.form.firstRebate = e.distributionConfig.firstRebate, e.form.secondRebate = e.distributionConfig.secondRebate) : A();
  }
  function A() {
    e.distributionConfig || De().then((o) => {
      e.distributionConfig = o.data ? o.data : null, !e.form.firstRebate && e.distributionConfig && (e.form.firstRebate = e.distributionConfig.firstRebate, e.form.secondRebate = e.distributionConfig.secondRebate);
    });
  }
  function P(o, t) {
    o = X(o), e.paramsSearch = o, e.page.currentPage = 1, I(e.page, o), t();
  }
  function F(o) {
    const t = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = t) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = t) : (e.page.ascs = "", e.page.descs = ""), I(e.page);
  }
  function I(o, t) {
    e.tableLoading = true, e.paramsSearch.categoryId && (e.paramsSearch.categoryFirst = e.paramsSearch.categoryId[0], e.paramsSearch.categorySecond = e.paramsSearch.categoryId[1], e.paramsSearch.categoryThird = e.paramsSearch.categoryId[2] || "", e.paramsSearch.categoryId = []), e.paramsSearch.categoryShopId && (e.paramsSearch.categoryShopFirst = e.paramsSearch.categoryShopId[0], e.paramsSearch.categoryShopId[1] && (e.paramsSearch.categoryShopSecond = e.paramsSearch.categoryShopId[1], e.paramsSearch.categoryShopId[2] && (e.paramsSearch.categoryShopThird = e.paramsSearch.categoryShopId[2])), e.paramsSearch.categoryShopId = []), ue(X(Object.assign({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs, verifyStatus: e.verifyStatus != "-1" ? e.verifyStatus : null, id: s.goodsId }, t, e.paramsSearch))).then((p) => {
      const g = p.data.records;
      g.forEach(function(l) {
        const v = [];
        l.categoryFirst && v.push(l.categoryFirst), l.categorySecond && v.push(l.categorySecond), l.categoryThird && v.push(l.categoryThird), l.categoryId = v;
        const G = [];
        l.categoryShopFirst && G.push(l.categoryShopFirst), l.categoryShopSecond && G.push(l.categoryShopSecond), l.categoryShopThird && G.push(l.categoryShopThird), l.categoryShopId = G;
      }), e.tableData = g, e.page.total = p.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false, i.$nextTick(() => {
        O.value.dicInit("cascader");
      });
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function w(o) {
    i.$confirm(i.$t("commons.confirmDelete"), i.$t("commons.tip"), { confirmButtonText: i.$t("commons.confirm"), cancelButtonText: i.$t("commons.cancel"), type: "warning" }).then(function() {
      return he(o.id);
    }).then(() => {
      i.$message({ showClose: true, message: i.$t("commons.delSuccess"), type: "success" }), I(e.page);
    });
  }
  function z(o, t, p, g) {
    o.skus = e.goodsSkuData, o.spuSpec = e.goodsSpuSpecData, o.categoryFirst = o.categoryId[0], o.categorySecond = o.categoryId[1] ?? "", o.categoryThird = o.categoryId[2] ?? "", o.categoryShopFirst = o.categoryShopId[0], o.categoryShopId[1] ? (o.categoryShopSecond = o.categoryShopId[1], o.categoryShopId[2] ? o.categoryShopThird = o.categoryShopId[2] : o.categoryShopThird = "") : (o.categoryShopSecond = "", o.categoryShopThird = "");
    let l = true;
    if (o.skus.forEach((v) => {
      if (v.picUrls && v.picUrls.length > 0 && (v.picUrl = v.picUrls[0]), !v.firstRebate && v.firstRebate !== 0) {
        l = false, i.$message({ showClose: true, message: i.$t("commons.inputTips", { name: i.$t("mall.goodsspu.firstRebate") }), type: "error" });
        return;
      }
      if (!v.secondRebate && v.secondRebate !== 0) {
        l = false, i.$message({ showClose: true, message: i.$t("commons.inputTips", { name: i.$t("mall.goodsspu.secondRebate") }), type: "error" });
        return;
      }
    }), l) o.goodsRecommend || (o.goodsRecommend = null), o.supplierId || (o.supplierId = ""), ge(o).then(() => {
      e.goodsRecommendList = [], e.form.shopId = "", i.$message({ showClose: true, message: i.$t("commons.updateSuccess"), type: "success" }), I(e.page), i.$forceUpdate(), p();
    }).catch(() => {
      g();
    });
    else return g(), false;
  }
  function N(o, t, p) {
    o.skus = e.goodsSkuData, o.spuSpec = e.goodsSpuSpecData, o.categoryFirst = o.categoryId[0], o.categorySecond = o.categoryId[1], o.categoryThird = o.categoryId[2], o.categoryShopFirst = o.categoryShopId[0], o.categoryShopId[1] ? o.categoryShopSecond = o.categoryShopId[1] : o.categoryShopSecond = "", o.categoryShopId[2] ? o.categoryShopThird = o.categoryShopId[2] : o.categoryShopSecond = "";
    let g = true;
    if (o.skus.forEach((l) => {
      if (l.picUrls && l.picUrls.length > 0 && (l.picUrl = l.picUrls[0]), !l.firstRebate && l.firstRebate !== 0) {
        g = false, i.$message({ showClose: true, message: i.$t("commons.inputTips", { name: i.$t("mall.goodsspu.firstRebate") }), type: "error" });
        return;
      }
      if (!l.secondRebate && l.secondRebate !== 0) {
        g = false, i.$message({ showClose: true, message: i.$t("commons.inputTips", { name: i.$t("mall.goodsspu.secondRebate") }), type: "error" });
        return;
      }
    }), g) o.goodsRecommend || (o.goodsRecommend = null), fe(o).then(() => {
      i.$message({ showClose: true, message: i.$t("commons.addSuccess"), type: "success" }), t(), I(e.page);
    }).catch(() => {
      p();
    });
    else return p(), false;
  }
  function a() {
    I(e.page);
  }
  function u(o) {
    e.verifyStatus = o.paneName, e.page.currentPage = 1, I(e.page);
  }
  function M() {
    i.$confirm(i.$t("mall.goodsspu.esTitle"), i.$t("commons.tip"), { confirmButtonText: i.$t("commons.confirm"), cancelButtonText: i.$t("commons.cancel"), type: "warning" }).then(function() {
      me().then(() => {
      }), setTimeout(() => {
        i.$alert(i.$t("mall.goodsspu.esTip"), i.$t("commons.tip"), { confirmButtonText: i.$t("commons.confirm") });
      }, 1e3);
    });
  }
  function H() {
    e.tabsActive < 6 && (e.tableOption.tabsActive == 0 && (e.tableOption.tabsActive = 1), e.tableOption.tabsActive++, e.tabsActive++);
  }
  function oe(o, t) {
    o && t && Z(o.index);
  }
  function Z(o) {
    e.tableOption.tabsActive = Number(o) + 1, e.tabsActive = Number(o) + 1, e.tabsActive == 1 ? e.form.supplierSpuId ? (e.tableOption.group[0].column.find((t) => t.prop == "supplierId").editDisabled = true, e.tableOption.group[0].column.find((t) => t.prop == "freightType").editDisabled = true, e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").editDisabled = true, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").editDisabled = true, e.form.freightTemplatId && (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = true), (e.form.freightAmount || e.form.freightAmount == 0) && (e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = true)) : e.form.freightType == "0" ? (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = false) : e.form.freightType == "1" ? (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = true) : e.form.freightType == "2" ? (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = true, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = false) : (e.tableOption.group[0].column.find((t) => t.prop == "freightTemplatId").display = false, e.tableOption.group[0].column.find((t) => t.prop == "freightAmount").display = false) : e.tabsActive == 4 ? e.form.pointsGiveSwitch == "1" ? e.tableOption.group[3].column.find((t) => t.prop == "pointsGiveNum").display = true : e.tableOption.group[3].column.find((t) => t.prop == "pointsGiveNum").display = false : e.tabsActive == 5 && (e.form.pointsDeductSwitch == "1" ? (e.tableOption.group[4].column.find((t) => t.prop == "pointsDeductScale").display = true, e.tableOption.group[4].column.find((t) => t.prop == "pointsDeductAmount").display = true) : (e.tableOption.group[4].column.find((t) => t.prop == "pointsDeductScale").display = false, e.tableOption.group[4].column.find((t) => t.prop == "pointsDeductAmount").display = false));
  }
  const J = W();
  function te(o) {
    J.value.showDetail(o.supplierSpuId);
  }
  return { ...ie(e), initConfig: n, permissions: U, permissionList: R, selectionChange: k, batchVerify: B, batchShelf: V, changeShelf: j, putObjShelfF: C, getGoodsSku: T, beforeOpen: E, fetchTreeF: _, specListF: $, getDefaultDistributionConfig: A, searchChange: P, sortChange: F, getPageF: I, handleDel: w, handleUpdate: z, handleSave: N, refreshChange: a, handleClickStatus: u, esInitF: M, onNextStep: H, handleTabClick: oe, crud: O, goodsSupplierDetailRef: J, showGoodsSupplierDetail: te };
} }, Fe = { class: "flex justify-center" }, Ge = { key: 0, class: "flex justify-center items-center" }, Le = { class: "flex-c" }, Be = { class: "flex justify-center" }, Ve = ["src"], je = { style: { color: "red" } }, Ee = { style: { height: "100%" } }, Pe = { key: 0 }, we = { key: 1, class: "jl-text-tips" }, ze = { key: 0 }, Ne = { class: "jl-text-tips" }, Me = { key: 1, class: "jl-text-tips" }, He = { key: 0 }, qe = { class: "jl-text-tips" }, Ke = { key: 1, class: "jl-text-tips" }, Ze = { key: 0 };
function Je(s, n, i, e, O, U) {
  const R = b("el-tab-pane"), L = b("el-tabs"), k = b("el-button"), B = b("el-tooltip"), V = b("GoodsExcelImport"), j = b("GoodsSupplierImport"), C = b("GoodsSupplierSync"), T = b("el-tag"), E = b("SupplierDetailsDialog"), _ = b("el-popover"), $ = b("el-switch"), A = ee, P = x, F = b("material-list"), I = Y, w = b("avue-crud"), z = le, N = b("GoodsSupplierSelect");
  return d(), D("div", null, [f(L, { modelValue: s.verifyStatus, "onUpdate:modelValue": n[0] || (n[0] = (a) => s.verifyStatus = a), type: "border-card", onTabClick: e.handleClickStatus }, { default: r(() => [f(R, { name: "-1" }, { label: r(() => [S("span", null, c(s.$t("commons.allGoods")), 1)]), _: 1 }), f(R, { name: "0" }, { label: r(() => [S("span", null, c(s.$t("mall.goodsspu.verifyStatus0")), 1)]), _: 1 }), f(R, { name: "1" }, { label: r(() => [S("span", null, c(s.$t("mall.goodsspu.verifyStatus1")), 1)]), _: 1 }), f(R, { name: "2" }, { label: r(() => [S("span", null, c(s.$t("mall.goodsspu.verifyStatus2")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabClick"]), f(z, { class: "mt-[-15px]" }, { default: r(() => [f(w, { ref: "crud", page: s.page, "onUpdate:page": n[12] || (n[12] = (a) => s.page = a), defaults: s.defaults, "onUpdate:defaults": n[13] || (n[13] = (a) => s.defaults = a), search: s.searchParams, "onUpdate:search": n[14] || (n[14] = (a) => s.searchParams = a), modelValue: s.form, "onUpdate:modelValue": n[15] || (n[15] = (a) => s.form = a), style: { "margin-bottom": "50px" }, data: s.tableData, permission: e.permissionList, "table-loading": s.tableLoading, option: s.tableOption, "before-open": e.beforeOpen, onOnLoad: e.getPageF, onRefreshChange: e.refreshChange, onRowUpdate: e.handleUpdate, onRowSave: e.handleSave, onRowDel: e.handleDel, onSortChange: e.sortChange, onSearchChange: e.searchChange, onSelectionChange: e.selectionChange, onTabClick: e.handleTabClick }, { "menu-left": r(() => [e.permissions["mall:goodsspu:edit"] ? (d(), h(k, { key: 0, type: "success", onClick: n[1] || (n[1] = (a) => e.batchShelf("1")) }, { default: r(() => [y(c(s.$t("mall.goodsspu.menuBatchOn")), 1)]), _: 1 })) : m("", true), e.permissions["mall:goodsspu:edit"] ? (d(), h(k, { key: 1, type: "danger", onClick: n[2] || (n[2] = (a) => e.batchShelf("0")) }, { default: r(() => [y(c(s.$t("mall.goodsspu.menuBatchOff")), 1)]), _: 1 })) : m("", true), e.permissions["mall:goodsspu:verify"] ? (d(), h(k, { key: 2, type: "warning", onClick: n[3] || (n[3] = (a) => e.batchVerify("1")) }, { default: r(() => [y(c(s.$t("mall.goodsspu.menuBatchVerify1")), 1)]), _: 1 })) : m("", true), e.permissions["mall:goodsspu:verify"] ? (d(), h(k, { key: 3, type: "warning", onClick: n[4] || (n[4] = (a) => e.batchVerify("2")) }, { default: r(() => [y(c(s.$t("mall.goodsspu.menuBatchVerify2")), 1)]), _: 1 })) : m("", true), f(B, { class: "box-item", effect: "dark", "raw-content": "", content: "\u70B9\u51FB\u4F1A\u5237\u65B0\u5546\u54C1\u7F13\u5B58<a target='_blank' href='https://www.ruanyifeng.com/blog/2017/08/elasticsearch.html'>(\u67E5\u770BES\u4ECB\u7ECD)</a>", placement: "top-start" }, { default: r(() => [e.permissions["mall:goodsspu:esinit"] ? (d(), h(k, { key: 0, type: "danger", onClick: n[5] || (n[5] = (a) => e.esInitF()) }, { default: r(() => [y(c(s.$t("mall.goodsspu.menuEsInit")), 1)]), _: 1 })) : m("", true)]), _: 1 }), f(V, { onRefresh: e.refreshChange }, null, 8, ["onRefresh"]), n[16] || (n[16] = S("span", { style: { "margin-left": "10px" } }, null, -1)), f(j, { onRefresh: e.refreshChange }, null, 8, ["onRefresh"])]), "menu-form": r(() => [s.tabsActive < 6 ? (d(), h(k, { key: 0, type: "success", onClick: n[6] || (n[6] = (a) => e.onNextStep()) }, { default: r(() => [y(c(s.$t("mall.goodsspu.batchImportTip9")), 1)]), _: 1 })) : m("", true)]), menu: r(({ size: a, row: u, index: M }) => [e.permissions["mall:goodsspu:edit"] && !u.supplierSpuId ? (d(), h(k, { key: 0, text: "", type: "primary", icon: "el-icon-edit", size: a, onClick: (H) => s.$refs.crud.rowEdit(u, M) }, { default: r(() => [y(c(s.$t("commons.edit")), 1)]), _: 1 }, 8, ["size", "onClick"])) : m("", true), e.permissions["mall:goodsspu:edit"] && u.supplierSpuId ? (d(), h(C, { key: 1, goods: u, onRefresh: e.refreshChange }, null, 8, ["goods", "onRefresh"])) : m("", true), e.permissions["mall:goodsspu:del"] ? (d(), h(k, { key: 2, text: "", type: "primary", icon: "Delete", size: a, disabled: u.shelf == 1, onClick: (H) => e.handleDel(u) }, { default: r(() => [y(c(s.$t("commons.delete")), 1)]), _: 1 }, 8, ["size", "disabled", "onClick"])) : m("", true)]), name: r((a) => [S("div", null, [S("div", Fe, c(a.row.name), 1), a.row.supplierSpuId ? (d(), D("div", Ge, [f(_, { placement: "top", width: 160, trigger: "hover" }, { reference: r(() => [f(T, { type: "success", size: "small" }, { default: r(() => [...n[17] || (n[17] = [y("\u4F9B\u5E94\u5546\u5546\u54C1", -1)])]), _: 1 })]), default: r(() => [S("div", Le, [f(E, { supplierId: a.row.supplierId }, null, 8, ["supplierId"])])]), _: 2 }, 1024)])) : m("", true)])]), picUrls: r((a) => [S("div", Be, [a.row.picUrls ? (d(), D("img", { key: 0, class: "w-[58px]", src: a.row.picUrls && a.row.picUrls.length > 0 ? a.row.picUrls[0] : "" }, null, 8, Ve)) : m("", true)])]), pointsGiveSwitch: r((a) => [S("div", null, [a.row.vipDiscountSwitch == 1 ? (d(), h(T, { key: 0, size: "small", type: "success", style: { "margin-left": "5px" } }, { default: r(() => [y(c(s.$t("mall.goodsspu.vipDiscountSwitch")), 1)]), _: 1 })) : m("", true), a.row.pointsDeductSwitch == 1 ? (d(), h(T, { key: 1, size: "small", type: "success", style: { "margin-left": "5px" } }, { default: r(() => [y(c(s.$t("mall.goodsspu.pointsDeductSwitch")), 1)]), _: 1 })) : m("", true), a.row.pointsGiveSwitch == 1 ? (d(), h(T, { key: 2, size: "small", type: "success", style: { "margin-left": "5px" } }, { default: r(() => [y(c(s.$t("mall.goodsspu.pointsGiveSwitch")), 1)]), _: 1 })) : m("", true)])]), shelf: r((a) => [f($, { modelValue: a.row.shelf, "onUpdate:modelValue": (u) => a.row.shelf = u, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (u) => e.changeShelf(a.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), priceDown: r((a) => [S("div", je, " \uFFE5" + c(a.row.priceDown) + c(a.row.priceUp == a.row.priceDown ? "" : "~\uFFE5" + a.row.priceUp), 1)]), verifyStatus: r((a) => [S("div", null, [a.row.verifyStatus == 0 ? (d(), h(T, { key: 0, size: "small" }, { default: r(() => [y(c(s.$t("mall.goodsspu.verifyStatus0")), 1)]), _: 1 })) : m("", true), a.row.verifyStatus == 1 ? (d(), h(T, { key: 1, size: "small", type: "success" }, { default: r(() => [y(c(s.$t("mall.goodsspu.verifyStatus1")), 1)]), _: 1 })) : m("", true), a.row.verifyStatus == 2 ? (d(), h(T, { key: 2, size: "small", type: "danger" }, { default: r(() => [y(c(s.$t("mall.goodsspu.verifyStatus2")), 1)]), _: 1 })) : m("", true)])]), "description-form": r(() => [S("div", Ee, [f(A, { value: s.form.description, "onUpdate:value": n[7] || (n[7] = (a) => s.form.description = a), shopId: s.form.shopId }, null, 8, ["value", "shopId"])])]), "skus-form": r(() => [f(P, { specType: s.form.specType, goodsSpec: s.goodsSpec, goodsSpuSpec: s.goodsSpuSpec, goodsSku: s.goodsSku, form: s.form, onGetGoodsSku: e.getGoodsSku }, null, 8, ["specType", "goodsSpec", "goodsSpuSpec", "goodsSku", "form", "onGetGoodsSku"])]), "picUrls-form": r((a) => [s.form.shopId ? (d(), D("div", Pe, [s.reFreshMaterialList ? (d(), h(F, { key: 0, value: s.form.picUrls, "onUpdate:value": n[8] || (n[8] = (u) => s.form.picUrls = u), disabled: a.type == "view", type: "image", num: 5, shopId: s.form.shopId }, null, 8, ["value", "disabled", "shopId"])) : m("", true)])) : (d(), D("div", we, c(s.$t("commons.selectShopFirst")), 1))]), "videoUrl-form": r((a) => [s.form.shopId ? (d(), D("div", ze, [s.reFreshMaterialList ? (d(), h(F, { key: 0, disabled: a.type == "view", value: s.form.videoUrl ? [s.form.videoUrl] : [], type: "video", num: 1, shopId: s.form.shopId, onSureSuccess: n[9] || (n[9] = (u) => s.form.videoUrl = u ? u[0] : "") }, null, 8, ["disabled", "value", "shopId"])) : m("", true), S("p", Ne, c(s.$t("mall.goodsspu.videoUrlTip")), 1)])) : (d(), D("div", Me, c(s.$t("commons.selectShopFirst")), 1))]), "goodsRecommend-form": r((a) => [s.form.shopId ? (d(), D("div", He, [f(I, { value: s.goodsRecommendList, "onUpdate:value": n[10] || (n[10] = (u) => s.goodsRecommendList = u), goodsIds: s.form.goodsRecommend.spuIds, "onUpdate:goodsIds": n[11] || (n[11] = (u) => s.form.goodsRecommend.spuIds = u), disabled: a.type == "view", shopId: s.form.shopId, showGoodsList: true }, null, 8, ["value", "goodsIds", "disabled", "shopId"]), S("p", qe, c(s.$t("mall.goodsspu.goodsRecommendTip")), 1)])) : (d(), D("div", Ke, c(s.$t("commons.selectShopFirst")), 1))]), _: 1 }, 8, ["page", "defaults", "search", "modelValue", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange", "onSelectionChange", "onTabClick"])]), _: 1 }), e.permissions["mall:goodsspu:add"] ? pe((d(), D("div", Ze, [f(N, { ref: "goodsSupplierDetailRef" }, null, 512)], 512)), [[de, false]]) : m("", true)]);
}
const Do = re(Ae, [["render", Je]]);
export {
  Do as default
};
