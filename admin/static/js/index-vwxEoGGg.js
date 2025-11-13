import { R as re } from "./videojs-player.esm-CCSu0y3h.js";
import { aO as $, A as ie, R as se, be as pe, p as Y, U as me, q as de, t as Z, $ as ue, bm as ee, E as ce, ad as fe, b1 as te, S as ge, b0 as U, K as he, _ as ye, c as I, o as i, e as b, b as r, g as u, B as g, h as l, r as s, f as c, z as d, F as D, v as N, x as be, bn as Ie, w as Te, j as _e } from "./index-DAdfXJ2i.js";
import { a as ve } from "./shopinfo-DR8w8ULX.js";
import { a as $e } from "./supplier-CbDQWRL9.js";
function ke(t) {
  return $.request("get", "/mall/materialgroup/page", { params: t });
}
const ae = (t) => $.request("post", "/mall/materialgroup", { data: t }), Ce = (t) => $.request("delete", "/mall/materialgroup/" + t), Se = (t) => $.request("put", "/mall/materialgroup", { data: t });
function we(t) {
  return $.request("get", "/mall/material/page", { params: t });
}
function oe(t) {
  return $.request("post", "/mall/material", { data: t });
}
function Le(t) {
  return $.request("delete", "/mall/material/" + t);
}
function le(t) {
  return $.request("put", "/mall/material", { data: t });
}
const Pe = { components: { VideoPlayer: re }, props: { selectType: { type: String }, value: { type: Array, default() {
  return [];
} }, shopIdVal: { type: String }, num: { type: Number, default() {
  return 5;
} }, checkMaterial: { type: Boolean, default() {
  return false;
} } }, setup(t, m) {
  var _a;
  const { proxy: a } = ie(), e = se({ ofType: "", userInfo: null, materialType: "1", listGroupForm: { id: "", name: "" }, treeOptions: { defaultExpandAll: true, menu: false, addBtn: false, props: { id: "id", label: "name", value: "id" }, formOption: { labelWidth: 100, column: [{ label: "id", hide: true, display: false, prop: "id" }, { label: a.$t("mall.material.shopId"), hide: true, display: false, prop: "shopId" }, { label: a.$t("mall.material.groupName"), span: 24, prop: "name", rules: [{ required: true, message: a.$t("mall.material.enterGroupName"), trigger: "blur" }] }] } }, headers: { Authorization: "Bearer " + pe().access_token }, dialogVisible: false, listDialogVisible: false, materialgroupList: [], materialgroupObjId: "", materialgroupObj: { name: "" }, materialgroupLoading: false, tableData: [], page: { total: 0, currentPage: 1, pageSize: 12, ascs: "", descs: "create_time" }, tableLoading: false, groupId: null, urls: t.value || [], width: 150, height: 150, type: "image", shopId: "", shopList: [], supplierList: [], videoPlay: false, playerOptions: { autoplay: false, muted: true, loop: false, preload: "auto", language: "zh-CN", aspectRatio: "4:3", fluid: true, poster: "", width: document.documentElement.clientWidth, notSupportedMessage: a.$t("mall.material.videoCannotPlay") } }), j = Y(null);
  e.userInfo = (_a = me()) == null ? void 0 : _a.userInfo, e.userInfo.type == "2" ? (e.ofType = "1", e.shopId = e.userInfo.shopId) : e.userInfo.type == "3" ? (e.ofType = "2", e.shopId = e.userInfo.supplierId) : (e.ofType = "0", h());
  const P = de(() => {
    var _a2;
    return (_a2 = he()) == null ? void 0 : _a2.permissions;
  });
  Z(() => {
    const o = ue();
    o && !ee() && (e.headers["switch-tenant-id"] = o);
  }), ce(() => t.shopIdVal, (o) => {
    o && T(o);
  }), Z(() => {
    e.userInfo.type == "2" ? C() : (e.userInfo.type == "3" || C(), f()), e.videoPlay = true;
  }), fe(() => {
  });
  function w() {
    e.videoPlay = false, a.$nextTick(() => {
      var _a2;
      try {
        (_a2 = j.value) == null ? void 0 : _a2.pause();
      } catch {
      }
    });
  }
  function M(o) {
    e.page.currentPage = o, y(e.page);
  }
  function C() {
    ve().then((o) => {
      e.shopList = o.data || [], t.shopIdVal ? (t.selectType && (e.materialType = t.selectType), T(t.shopIdVal)) : e.shopList.length > 0 && T(e.shopList[0].id);
    });
  }
  function f() {
    $e().then((o) => {
      e.supplierList = o.data || [], t.shopIdVal ? (t.selectType && (e.materialType = t.selectType), T(t.shopIdVal)) : e.supplierList.length > 0 && T(e.supplierList[0].id);
    });
  }
  function T(o) {
    e.shopId = e.ofType == "0" ? "" : o, h();
  }
  function h() {
    if (!e.shopId || e.shopId == "") {
      if (e.ofType == "1") {
        a.$message.error(a.$t("commons.selectShopFirst"));
        return;
      }
      if (e.ofType == "2") {
        a.$message.error(a.$t("commons.selectSupplierFirst"));
        return;
      }
    }
    e.materialgroupLoading = true, ke(te({ total: 0, current: 1, size: 999, ascs: "create_time", shopId: e.shopId, ofType: e.ofType, materialType: e.materialType })).then((o) => {
      e.materialgroupLoading = false;
      const p = o.data.records || [];
      e.materialgroupList = p, e.groupId = null, e.page.currentPage = 1, e.page.total = 0, p.length > 0 ? q(p[0]) : e.tableData = [];
    });
  }
  function V(o) {
    a.$confirm(a.$t("mall.material.confirmDeleteGroup"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      if (e.tableData.length > 0) {
        a.$message({ type: "error", message: a.$t("mall.material.moveMaterialsFirst") });
        return;
      }
      Ce(o.id).then(function() {
        h();
      });
    });
  }
  function G(o) {
    a.$prompt(a.$t("mall.material.enterGroupNamePrompt"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), inputValue: o.name }).then(({ value: p }) => {
      Se({ id: o.id, name: p }).then(function() {
        o.name = p, L();
      });
    });
  }
  function _() {
  }
  function R() {
    if (!P.value["mall:material:add"]) {
      a.$message.error(a.$t("commons.noPermission"));
      return;
    }
    if (!e.shopId || e.shopId == "") {
      if (e.ofType == "1") {
        a.$message.error(a.$t("commons.selectShopFirst"));
        return;
      }
      if (e.ofType == "2") {
        a.$message.error(a.$t("commons.selectSupplierFirst"));
        return;
      }
    }
    a.$prompt(a.$t("mall.material.enterGroupNamePrompt"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), inputPattern: /[\S]/, inputErrorMessage: a.$t("commons.notNull"), inputValue: "" }).then(({ value: o }) => {
      ae({ name: o, shopId: e.shopId, ofType: e.ofType, materialType: e.materialType }).then(function() {
        h();
      });
    });
  }
  function S(o) {
    if (!P.value["mall:material:add"]) {
      a.$message.error(a.$t("commons.noPermission"));
      return;
    }
    ae({ name: e.listGroupForm.name, shopId: e.shopId, materialType: e.materialType }).then(function() {
      o(), h();
    });
  }
  function L() {
    e.page.currentPage = 1, e.page.total = 0, h();
  }
  const z = Y(null);
  function q(o) {
    a.$nextTick(() => {
      var _a2;
      (_a2 = z.value) == null ? void 0 : _a2.setCurrentKey(o.id), F(o);
    });
  }
  function F(o) {
    e.listGroupForm.id = o.id, e.materialgroupObj = o, e.materialgroupObjId = o.id, e.page.currentPage = 1, e.page.total = 0, o.id && (e.groupId = o.id, y(e.page));
  }
  function y(o) {
    if (!e.shopId || e.shopId == "") {
      if (e.ofType == "1") {
        a.$message.error(a.$t("commons.selectShopFirst"));
        return;
      }
      if (e.ofType == "2") {
        a.$message.error(a.$t("commons.selectSupplierFirst"));
        return;
      }
    }
    e.tableLoading = true, we(te({ current: o.currentPage, size: o.pageSize, descs: e.page.descs, ascs: e.page.ascs, shopId: e.shopId, groupId: e.groupId })).then((p) => {
      const k = p.data.records;
      e.page.total = p.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableData = k, e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function E(o) {
    e.page.currentPage = 1, e.page.pageSize = o, y(e.page);
  }
  function x(o) {
    a.$prompt(a.$t("mall.material.enterMaterialName"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), inputPattern: /[\S]/, inputErrorMessage: a.$t("commons.notNull"), inputValue: o.name }).then(({ value: p }) => {
      le({ id: o.id, name: p }).then(function() {
        y(e.page);
      });
    });
  }
  function A(o) {
    a.$prompt(a.$t("mall.material.materialLink"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), inputValue: o.url });
  }
  function H(o) {
    a.$confirm(a.$t("mall.material.confirmDeleteMaterial"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      Le(o.id).then(function() {
        y(e.page);
      });
    });
  }
  function B(o) {
    const p = o.split("-");
    le({ id: p[0], groupId: p[1] }).then(function() {
      y(e.page);
    });
  }
  function K() {
  }
  const O = Y(null);
  function W(o, p) {
    if (!o.link) {
      a.$message.error(a.$t("mall.material.urlNotNull"));
      return;
    }
    if (!e.shopId || e.shopId == "") {
      if (e.ofType == "1") {
        a.$message.error(a.$t("commons.selectShopFirst"));
        return;
      }
      if (e.ofType == "2") {
        a.$message.error(a.$t("commons.selectSupplierFirst"));
        return;
      }
    }
    oe({ type: e.materialType, groupId: e.groupId, name: p.name, url: o.link, shopId: e.shopId, ofType: e.ofType }).then(function() {
      y(e.page), setTimeout(() => {
        O.value.clearFiles();
      }, 2e3);
    });
  }
  function J(o) {
    try {
      let p = o.message ? JSON.parse(o.message).msg : o.message;
      a.$message.error(p);
    } catch {
    }
  }
  function n() {
    a.$prompt(a.$t("mall.material.enterVideoLink"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), inputPattern: /[\S]/, inputErrorMessage: a.$t("mall.material.videoLinkRequired") }).then(({ value: o }) => {
      oe({ type: e.materialType, groupId: e.groupId, name: o, url: o, shopId: e.shopId, ofType: e.ofType }).then(function() {
        y(e.page);
      });
    });
  }
  function Q(o) {
    if (!e.groupId) return a.$message.error(a.$t("mall.material.selectGroup")), false;
    if (e.materialType == "2") {
      const p = o.type === "video/mp4" || o.type === "video/avi" || o.type === "video/mpeg" || o.type === "video/quicktime" || o.type === "video/x-ms-wmv" || o.type === "video/x-msvideo" || o.type === "video/x-flv", k = o.size / 1024 / 1024 < U.limitUploadFileSize;
      return k ? p && k : (a.$message.error(a.$t("mall.material.uplaodFileSizeTip", { size: U.limitUploadFileSize })), false);
    } else {
      const p = o.type === "image/jpeg" || o.type === "image/png" || o.type === "image/gif" || o.type === "image/bmp" || o.type === "image/webp", k = o.size / 1024 / 1024 < U.limitUploadImageSize;
      return k ? p && k : (a.$message.error(a.$t("mall.material.uplaodFileSizeTip", { size: U.limitUploadImageSize })), false);
    }
  }
  function v() {
    m.emit("update:value", e.urls);
  }
  function X() {
    ne(), h();
  }
  function ne() {
    e.groupId = null, e.materialgroupList = [], e.tableData = [], e.listGroupForm = { id: "", name: "" }, e.page.currentPage = 1, e.page.total = 0, e.ofType == "1" ? e.shopList.length > 0 && (e.shopId = e.shopList[0].id) : e.ofType == "2" ? e.supplierList.length > 0 && (e.shopId = e.supplierList[0].id) : e.shopId = "";
  }
  return { ...ge(e), permissions: P, listGroupRef: z, uploadRef: O, videoIndexRef: j, videoPause: w, currentChange: M, getshopList: C, changeShopInfo: T, materialgroupPageF: h, materialgroupDelete: V, materialgroupEditF: G, materialgroupAddF: S, addNode: R, treeFormBeforeOpen: _, nodeClick: F, tabClick: L, getPageF: y, sizeChange: E, materialRename: x, materialUrl: A, materialDel: H, handleCommand: B, handleProgress: K, handleSuccess: W, handleError: J, beforeUpload: Q, checkMaterialChange: v, uploadVideoUrl: n, ofTypeChange: X, judgePlatformPage: ee };
} }, Ve = { class: "flex padding-lr-lg mt-[5px]" }, ze = { key: 0, class: "flex align-center" }, Fe = { key: 1, class: "flex align-center" }, Be = { class: "text-center" }, Oe = { class: "pl-[10px]" }, Ue = { class: "flex items-center" }, De = { class: "text-[18px] font-bold" }, Ne = { class: "flex justify-end", style: { "z-index": "99", position: "absolute", right: "0px", float: "right", width: "300px" } }, je = { key: 1, style: { width: "100%", height: "200px" } }, Me = { class: "mt-[20px]" }, Ge = ["title"];
function Re(t, m, a, e, j, P) {
  const w = s("el-radio-button"), M = s("el-radio-group"), C = s("el-form-item"), f = s("el-button"), T = s("el-option"), h = s("el-select"), V = s("el-tab-pane"), G = s("avue-tree"), _ = s("el-col"), R = s("el-upload"), S = s("el-row"), L = s("el-alert"), z = s("el-image"), q = s("video-player"), F = s("el-checkbox"), y = s("el-icon-arrow-down"), E = s("el-icon"), x = s("el-dropdown-item"), A = s("el-dropdown-menu"), H = s("el-dropdown"), B = s("el-card"), K = s("el-checkbox-group"), O = s("el-pagination"), W = s("el-tabs"), J = _e("loading");
  return i(), I("div", null, [b("div", Ve, [t.userInfo && (t.userInfo.type == "-1" || t.userInfo.type == "1") && !e.judgePlatformPage() ? (i(), u(C, { key: 0, class: "mr-[80px]", label: t.$t("commons.materialLibrary") }, { default: l(() => [r(M, { modelValue: t.ofType, "onUpdate:modelValue": m[0] || (m[0] = (n) => t.ofType = n), onChange: e.ofTypeChange }, { default: l(() => [r(w, { value: "0" }, { default: l(() => [c(d(t.$t("commons.material1")), 1)]), _: 1 }), r(w, { value: "1" }, { default: l(() => [c(d(t.$t("commons.material2")), 1)]), _: 1 }), r(w, { value: "2" }, { default: l(() => [c(d(t.$t("commons.material3")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "onChange"])]), _: 1 }, 8, ["label"])) : g("", true), r(C, null, { default: l(() => [t.ofType == "1" ? (i(), I("div", ze, [r(f, { link: "" }, { default: l(() => [c(d(t.$t("mall.orderinfo.shopId")) + "\uFF1A", 1)]), _: 1 }), r(h, { modelValue: t.shopId, "onUpdate:modelValue": m[1] || (m[1] = (n) => t.shopId = n), placeholder: t.$t("commons.selectShop"), style: { width: "300px" }, onChange: e.changeShopInfo }, { default: l(() => [(i(true), I(D, null, N(t.shopList, (n) => (i(), u(T, { key: n.id, label: n.name, value: n.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])])) : g("", true), t.ofType == "2" ? (i(), I("div", Fe, [r(f, { link: "" }, { default: l(() => [c(d(t.$t("mall.suppliergoodsspu.supplierId")) + "\uFF1A", 1)]), _: 1 }), r(h, { modelValue: t.shopId, "onUpdate:modelValue": m[2] || (m[2] = (n) => t.shopId = n), placeholder: t.$t("commons.selectSupplier"), style: { width: "300px" }, onChange: e.changeShopInfo }, { default: l(() => [(i(true), I(D, null, N(t.supplierList, (n) => (i(), u(T, { key: n.id, label: n.name, value: n.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])])) : g("", true)]), _: 1 })]), r(W, { modelValue: t.materialType, "onUpdate:modelValue": m[8] || (m[8] = (n) => t.materialType = n), type: "border-card", onTabChange: e.tabClick }, { default: l(() => [!a.selectType || a.selectType == "1" ? (i(), u(V, { key: 0, name: "1" }, { label: l(() => [b("span", null, d(t.$t("commons.image")), 1)]), _: 1 })) : g("", true), !a.selectType || a.selectType == "2" ? (i(), u(V, { key: 1, name: "2" }, { label: l(() => [b("span", null, d(t.$t("commons.video")), 1)]), _: 1 })) : g("", true), r(S, null, { default: l(() => [r(_, { style: { padding: "15px", height: "670px" }, span: 4 }, { default: l(() => [b("div", Be, [e.permissions["mall:material:add"] ? (i(), u(f, { key: 0, class: "w-full mb-[10px]", size: "large", type: "primary", icon: "plus", onClick: e.addNode }, { default: l(() => [c(d(t.$t("mall.material.groupIdAdd")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true)]), r(G, { ref: "listGroupRef", modelValue: t.listGroupForm, "onUpdate:modelValue": m[3] || (m[3] = (n) => t.listGroupForm = n), style: be({ "max-height": a.checkMaterial ? "600px" : "100%", "overflow-y": "auto" }), "node-key": "id", option: t.treeOptions, data: t.materialgroupList, onBeforeOpen: e.treeFormBeforeOpen, onSave: e.materialgroupAddF, onNodeClick: e.nodeClick }, null, 8, ["modelValue", "style", "option", "data", "onBeforeOpen", "onSave", "onNodeClick"])]), _: 1 }), r(_, { span: 20, style: { "border-left": "#e5e7ed 1px solid" } }, { default: l(() => [r(B, { style: { border: "none" } }, Ie({ default: l(() => [Te((i(), I("div", null, [t.groupId ? g("", true) : (i(), u(L, { key: 0, title: t.$t("mall.material.file"), type: "error", closable: false, center: "" }, null, 8, ["title"])), t.groupId && t.tableData.length <= 0 ? (i(), u(L, { key: 1, title: t.$t("welcome.welcome.notData"), type: "info", closable: false, center: "", "show-icon": "" }, null, 8, ["title"])) : g("", true), r(K, { modelValue: t.urls, "onUpdate:modelValue": m[6] || (m[6] = (n) => t.urls = n), max: a.num, onChange: e.checkMaterialChange }, { default: l(() => [r(S, { gutter: 10 }, { default: l(() => [(i(true), I(D, null, N(t.tableData, (n, Q) => (i(), u(_, { key: Q, span: 4 }, { default: l(() => [r(B, { "body-style": { padding: "10px" }, style: { "margin-bottom": "10px", "border-radius": "0px" }, shadow: "hover" }, { default: l(() => [n.type == "1" ? (i(), u(z, { key: 0, style: { width: "100%", height: "150px" }, src: n.url, fit: "contain", "preview-teleported": true, "preview-src-list": [n.url] }, null, 8, ["src", "preview-src-list"])) : (i(), I("div", je, [r(q, { ref_for: true, ref: "videoIndexRef", style: { width: "100%", height: "200px" }, controls: "", src: n.url }, null, 8, ["src"])])), b("div", Me, [a.checkMaterial ? (i(), u(F, { key: 0, class: "material-name", value: n.url, title: n.name }, { default: l(() => [c(d(n.name), 1)]), _: 2 }, 1032, ["value", "title"])) : (i(), I("div", { key: 1, class: "material-name", title: n.name }, d(n.name), 9, Ge)), r(S, { class: "compile" }, { default: l(() => [r(_, { span: 6, class: "col-do" }, { default: l(() => [r(f, { link: "", class: "button-do", onClick: (v) => e.materialRename(n) }, { default: l(() => [c(d(t.$t("mall.material.rename")), 1)]), _: 1 }, 8, ["onClick"])]), _: 2 }, 1024), r(_, { span: 6, class: "col-do" }, { default: l(() => [r(f, { link: "", class: "button-do", onClick: (v) => e.materialUrl(n) }, { default: l(() => [c(d(t.$t("mall.material.link")), 1)]), _: 1 }, 8, ["onClick"])]), _: 2 }, 1024), r(_, { span: 6, class: "col-do" }, { default: l(() => [r(H, { trigger: "click", onCommand: e.handleCommand }, { dropdown: l(() => [r(A, { style: { "max-height": "300px", "overflow-y": "auto" } }, { default: l(() => [(i(true), I(D, null, N(t.materialgroupList, (v, X) => (i(), u(x, { key: X, command: n.id + "-" + v.id, disabled: n.groupId == v.id }, { default: l(() => [c(d(v.name), 1)]), _: 2 }, 1032, ["command", "disabled"]))), 128))]), _: 2 }, 1024)]), default: l(() => [r(f, { link: "", class: "button-do" }, { default: l(() => [c(d(t.$t("mall.material.groupId")), 1), r(E, null, { default: l(() => [r(y)]), _: 1 })]), _: 1 })]), _: 2 }, 1032, ["onCommand"])]), _: 2 }, 1024), r(_, { span: 6, class: "col-do" }, { default: l(() => [e.permissions["mall:material:del"] ? (i(), u(f, { key: 0, link: "", class: "button-do", style: { color: "red" }, onClick: (v) => e.materialDel(n) }, { default: l(() => [c(d(t.$t("commons.delete")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true)]), _: 2 }, 1024)]), _: 2 }, 1024)])]), _: 2 }, 1024)]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 }, 8, ["modelValue", "max", "onChange"]), r(O, { "current-page": t.page.currentPage, "onUpdate:currentPage": m[7] || (m[7] = (n) => t.page.currentPage = n), "page-sizes": [12, 24], "page-size": t.page.pageSize, total: t.page.total, style: { "padding-top": "20px", "margin-left": "20px" }, layout: "->, total, sizes, prev, pager, next, jumper", class: "pagination", onSizeChange: e.sizeChange, onCurrentChange: e.currentChange }, null, 8, ["current-page", "page-size", "total", "onSizeChange", "onCurrentChange"])])), [[J, t.tableLoading]])]), _: 2 }, [t.groupId ? { name: "header", fn: l(() => [b("div", null, [r(S, { justify: "space-between" }, { default: l(() => [b("div", Oe, [b("div", Ue, [b("span", De, d(t.materialgroupObj.name), 1), b("span", null, [e.permissions["mall:material:edit"] ? (i(), u(f, { key: 0, link: "", icon: "edit", type: "primary", style: { "margin-left": "30px" }, onClick: m[4] || (m[4] = (n) => e.materialgroupEditF(t.materialgroupObj)) }, { default: l(() => [c(d(t.$t("mall.material.rename")), 1)]), _: 1 })) : g("", true), e.permissions["mall:material:del"] ? (i(), u(f, { key: 1, link: "", icon: "delete", type: "danger", style: { "margin-left": "10px" }, onClick: m[5] || (m[5] = (n) => e.materialgroupDelete(t.materialgroupObj)) }, { default: l(() => [c(d(t.$t("commons.delete")), 1)]), _: 1 })) : g("", true)])])]), b("div", Ne, [t.materialType == "2" ? (i(), u(f, { key: 0, class: "mr-5", size: "small", type: "primary", icon: "plus", onClick: e.uploadVideoUrl }, { default: l(() => [c(d(t.$t("mall.material.videoUrlAdd")), 1)]), _: 1 }, 8, ["onClick"])) : g("", true), r(R, { ref: "uploadRef", action: t.materialType == "2" ? "/upms/file/upload?fileType=video&dir=material/" : "/upms/file/upload?fileType=image&dir=material/", accept: t.materialType == "2" ? "video/*" : "image/*", headers: t.headers, limit: 12, multiple: t.materialType != "2", "file-list": [], "on-progress": e.handleProgress, "before-upload": e.beforeUpload, "on-success": e.handleSuccess, "on-error": e.handleError }, { default: l(() => [r(f, { type: "primary", icon: "upload" }, { default: l(() => [c(d(t.$t("commons.uploadFIleClick")), 1)]), _: 1 })]), _: 1 }, 8, ["action", "accept", "headers", "multiple", "on-progress", "before-upload", "on-success", "on-error"])])]), _: 1 })])]), key: "0" } : void 0]), 1024)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabChange"])]);
}
const Ke = ye(Pe, [["render", Re], ["__scopeId", "data-v-2a037979"]]);
export {
  Ke as default
};
