import { R as P } from "./videojs-player.esm-CCSu0y3h.js";
import { A as U, R as L, be as O, E as v, U as R, $ as j, S as A, P as E, _ as F, c, o as d, e as m, b as s, B as y, F as I, v as H, x as k, h as u, r, g as z, f as w, z as h, V as q, w as G, D as J } from "./index-DAdfXJ2i.js";
import K from "./index-vwxEoGGg.js";
const Q = { name: "MaterialList", components: { MaterialPage: K, VideoPlayer: P }, props: { shopId: { type: String }, value: { type: Array, default() {
  return [];
} }, singleValue: { type: String, default() {
  return "";
} }, isSingle: { type: Boolean, default() {
  return false;
} }, type: { type: String }, divStyle: { type: String }, num: { type: Number, default() {
  return 5;
} }, width: { type: [Number, String], default() {
  return 110;
} }, height: { type: [Number, String], default() {
  return 110;
} }, disabled: { type: Boolean, default() {
  return false;
} }, showBorder: { type: Boolean, default() {
  return true;
} } }, emits: ["sureSuccess", "deleteMaterial"], setup(l, a) {
  var _a;
  const { proxy: i } = U(), e = L({ typeVal: "", headers: { Authorization: "Bearer " + O().access_token }, dialogVisible: false, url: void 0, listDialogVisible: false, materialgroupList: [], materialgroupObjId: "", materialgroupObj: {}, materialgroupLoading: false, tableData: [], page: { total: 0, currentPage: 1, pageSize: 12, ascs: "", descs: "create_time" }, tableLoading: false, groupId: null, urls: l.isSingle ? l.singleValue ? [l.singleValue] : [] : l.value, urlsSelect: [] });
  if (l.type == "image" ? e.typeVal = "1" : l.type == "video" && (e.typeVal = "2"), v(() => l.type, (t, n) => {
    t != n && (t == "image" ? e.typeVal = "1" : t == "video" && (e.typeVal = "2"));
  }), v(() => l.shopId, (t, n) => {
    t != n && (e.tableData = [], e.page.currentPage = 1);
  }), l.isSingle && v(() => l.singleValue, (t, n) => {
    t != n && (e.urls = l.singleValue ? [l.singleValue] : []);
  }), v(() => l.value, (t, n) => {
    t != n && (e.urls = t || []);
  }), ((_a = R()) == null ? void 0 : _a.userInfo.type) == "-1") {
    const t = j();
    t && (e.headers["switch-tenant-id"] = t);
  }
  function C(t) {
    e.page.currentPage = t;
  }
  function M(t, n) {
    if (n == "up") {
      const _ = l.value[t - 1];
      e.urls.splice(t - 1, 1, l.value[t]), e.urls.splice(t, 1, _);
    }
    if (n == "down") {
      const _ = l.value[t + 1];
      e.urls.splice(t + 1, 1, l.value[t]), e.urls.splice(t, 1, _);
    }
  }
  function p(t) {
    e.dialogVisible = true, l.isSingle ? e.url = l.singleValue : e.url = l.value[t];
  }
  function S(t) {
    i.$confirm(i.$t("commons.tip2"), i.$t("commons.tip"), { confirmButtonText: i.$t("commons.confirm"), cancelButtonText: i.$t("commons.cancel"), type: "warning" }).then(function() {
      var _a2;
      e.urls.splice(t, 1), l.isSingle ? a.emit("update:singleValue", ((_a2 = e.urls) == null ? void 0 : _a2.length) > 0 ? e.urls[0] : "") : a.emit("update:value", e.urls), a.emit("deleteMaterial", e.urls), a.emit("sureSuccess", e.urls);
    });
  }
  function g() {
    e.urlsSelect = E(e.urls), e.listDialogVisible = true;
  }
  function V() {
    var _a2;
    if (e.urlsSelect.length > l.num) {
      i.$message.error("\u53EA\u80FD\u9009\u62E9" + l.num + "\u5F20\u56FE\u7247");
      return;
    }
    e.urls = e.urlsSelect, e.urlsSelect = [], l.isSingle ? a.emit("update:singleValue", ((_a2 = e.urls) == null ? void 0 : _a2.length) > 0 ? e.urls[0] : "") : a.emit("update:value", e.urls), a.emit("sureSuccess", e.urls), e.listDialogVisible = false;
  }
  return { ...A(e), currentChange: C, moveMaterial: M, zoomMaterial: p, deleteMaterial: S, toSeleteMaterial: g, sureUrls: V };
} }, W = ["src"], X = { class: "el-upload-list__item-actions" }, Y = ["onClick"], Z = ["onClick"], $ = ["onClick"], x = ["onClick"], ee = ["src"], le = { class: "dialog-footer" };
function te(l, a, i, e, C, M) {
  var _a;
  const p = r("el-image"), S = r("el-icon-back"), g = r("el-icon"), V = r("el-icon-view"), t = r("el-icon-delete"), n = r("el-icon-right"), _ = r("el-icon-plus"), T = r("video-player"), B = r("el-dialog"), N = r("material-page"), D = r("el-button");
  return d(), c(I, null, [m("div", { style: k(i.divStyle ? i.divStyle : "") }, [(d(true), c(I, null, H(l.urls, (o, f) => (d(), c("ul", { key: f, class: "el-upload-list el-upload-list--picture-card" }, [m("li", { tabindex: "0", class: q(["is-ready flex justify-center", i.showBorder ? "el-upload-list__item " : ""]), style: k(i.divStyle ? i.divStyle : "width: " + i.width + "px;height: " + i.height + "px") }, [m("div", null, [i.type == "image" ? (d(), z(p, { key: 0, src: o || "", alt: "", class: "el-upload-list__item-thumbnail" }, null, 8, ["src"])) : y("", true), i.type == "video" ? (d(), c("video", { key: 1, class: "el-upload-list__item-thumbnail", src: o }, null, 8, W)) : y("", true), m("span", X, [f != 0 && !i.disabled ? (d(), c("span", { key: 0, class: "el-upload-list__item-preview", onClick: (b) => e.moveMaterial(f, "up") }, [s(g, { size: 18 }, { default: u(() => [s(S)]), _: 1 })], 8, Y)) : y("", true), m("span", { class: "el-upload-list__item-preview", onClick: (b) => e.zoomMaterial(f) }, [s(g, { size: 18 }, { default: u(() => [s(V)]), _: 1 })], 8, Z), G(m("span", { class: "el-upload-list__item-delete", onClick: (b) => e.deleteMaterial(f) }, [s(g, { size: 18 }, { default: u(() => [s(t)]), _: 1 })], 8, $), [[J, !i.disabled]]), f != l.urls.length - 1 && !i.disabled ? (d(), c("span", { key: 1, class: "el-upload-list__item-preview", style: { "margin-left": "10px" }, onClick: (b) => e.moveMaterial(f, "down") }, [s(g, { size: 18 }, { default: u(() => [s(n)]), _: 1 })], 8, x)) : y("", true)])])], 6)]))), 128)), i.num > ((_a = l.urls) == null ? void 0 : _a.length) ? (d(), c("div", { key: 0, tabindex: "0", class: "el-upload el-upload--picture-card", style: k(i.divStyle ? i.divStyle : "width: " + i.width + "px;height: " + i.height + "px;line-height:" + i.height + "px;"), onClick: a[0] || (a[0] = (...o) => e.toSeleteMaterial && e.toSeleteMaterial(...o)) }, [s(g, null, { default: u(() => [s(_)]), _: 1 })], 4)) : y("", true)], 4), s(B, { modelValue: l.dialogVisible, "onUpdate:modelValue": a[1] || (a[1] = (o) => l.dialogVisible = o), "append-to-body": "", width: "35%" }, { default: u(() => [l.dialogVisible && i.type == "video" ? (d(), z(T, { key: 0, ref: "videoDialogRef", controls: "", style: { width: "100%", height: "200px" }, src: l.url }, null, 8, ["src"])) : (d(), c("img", { key: 1, src: l.url, style: { width: "100%", height: "100%" } }, null, 8, ee))]), _: 1 }, 8, ["modelValue"]), s(B, { modelValue: l.listDialogVisible, "onUpdate:modelValue": a[4] || (a[4] = (o) => l.listDialogVisible = o), "append-to-body": "", top: "5px", width: "80%" }, { header: u(() => [w(h(l.$t("commons.material")) + " ", 1), m("span", null, "(\u5DF2\u9009" + h(l.urlsSelect.length) + "/" + h(i.num) + ")", 1)]), footer: u(() => [m("span", le, [s(D, { onClick: a[3] || (a[3] = (o) => l.listDialogVisible = false) }, { default: u(() => [w(h(l.$t("commons.cancel")), 1)]), _: 1 }), s(D, { type: "primary", onClick: e.sureUrls }, { default: u(() => [w(h(l.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])])]), default: u(() => [s(N, { value: l.urlsSelect, "onUpdate:value": a[2] || (a[2] = (o) => l.urlsSelect = o), style: { border: "#dedfe5 1px solid", "padding-top": "5px" }, checkMaterial: true, shopIdVal: i.shopId, selectType: l.typeVal, num: i.num }, null, 8, ["value", "shopIdVal", "selectType", "num"])]), _: 1 }, 8, ["modelValue"])], 64);
}
const oe = F(Q, [["render", te], ["__scopeId", "data-v-26240339"]]);
export {
  oe as M
};
