import N from "./base-setting-BI1Sz0yX.js";
import { _ as j } from "./app-page-select-i6M56i7e.js";
import E from "./color-picker-select-B039aU8e.js";
import { s as M } from "./useCompSettingHooks-BBSAXeOe.js";
import { B as O } from "./pageDevise-DcQ8796K.js";
import { p as P, _ as R, r as n, j as q, c as g, o as d, b as l, h as o, B as V, g as y, e as r, z as f, w as A, f as F } from "./index-DAdfXJ2i.js";
const G = M({ setup(e, t, p) {
  const u = P(true);
  setTimeout(() => {
    u.value = false;
  }, 1e3);
  function _(c) {
    c === true ? p.formData.menus.forEach((m) => {
      m.imageUrl = "";
    }) : p.formData.menus.forEach((m, i) => {
      m.imageUrl = O.menus[i].imageUrl;
    });
  }
  return { loading: u, diyIconChange: _ };
} }), H = { key: 0 }, J = { class: "draggable-item" }, K = { class: "draggable-focus" }, L = ["src"];
function Q(e, t, p, u, _, c) {
  const m = n("el-input"), i = n("el-form-item"), b = n("el-radio-button"), $ = n("el-radio-group"), D = E, v = n("el-switch"), w = n("Rank"), U = n("el-icon"), h = n("el-col"), C = n("material-list"), I = j, S = n("el-row"), k = n("draggable"), T = n("el-form"), B = N, z = q("loading");
  return d(), g("div", null, [l(B, null, { title: o(() => [F(f(e.$t("mall.pagedevise.myServices")), 1)]), content: o(() => [l(T, { ref: "form", "label-position": "left", model: e.formData }, { default: o(() => [l(i, { "label-width": "90px", label: e.$t("mall.pagedevise.title") }, { default: o(() => [l(m, { modelValue: e.formData.title, "onUpdate:modelValue": t[0] || (t[0] = (a) => e.formData.title = a), size: "small" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), l(i, { "label-width": "90px", label: e.$t("mall.pagedevise.style") }, { default: o(() => [l($, { modelValue: e.formData.showType, "onUpdate:modelValue": t[1] || (t[1] = (a) => e.formData.showType = a), size: "small" }, { default: o(() => [l(b, { label: "grid" }, { default: o(() => [r("div", null, f(e.$t("mall.pagedevise.gridStyle")), 1)]), _: 1 }), l(b, { label: "list" }, { default: o(() => [r("div", null, f(e.$t("mall.pagedevise.listStyle")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), l(i, { "label-width": "90px", label: e.$t("mall.pagedevise.textColor") }, { default: o(() => [l(D, { bgValue: e.formData.textColor, onOnChange: t[2] || (t[2] = (a) => e.formData.textColor = a) }, null, 8, ["bgValue"])]), _: 1 }, 8, ["label"]), l(i, { "label-width": "90px", label: e.$t("mall.pagedevise.customIcon") }, { default: o(() => [l(v, { modelValue: e.formData.diyIcon, "onUpdate:modelValue": t[3] || (t[3] = (a) => e.formData.diyIcon = a), size: "small", "active-text": e.$t("commons.yes"), "inactive-text": e.$t("commons.no"), onChange: e.diyIconChange }, null, 8, ["modelValue", "active-text", "inactive-text", "onChange"])]), _: 1 }, 8, ["label"]), e.loading ? (d(), g("div", H, [A(r("div", null, null, 512), [[z, e.loading]])])) : V("", true), e.loading ? V("", true) : (d(), y(k, { key: 1, modelValue: e.formData.menus, "onUpdate:modelValue": t[4] || (t[4] = (a) => e.formData.menus = a), "item-key": "id", handle: ".draggable-focus", onChange: t[5] || (t[5] = (a) => e.draggableChangeItem(a, e.formData.menus)) }, { item: o(({ element: a }) => [r("div", J, [l(S, null, { default: o(() => [l(h, { span: 3, class: "canDraggable" }, { default: o(() => [r("div", K, [l(U, null, { default: o(() => [l(w)]), _: 1 })])]), _: 1 }), l(h, { span: 21 }, { default: o(() => [l(i, { "label-width": "50px", label: e.$t("mall.pagedevise.image") }, { default: o(() => [e.formData.diyIcon ? (d(), y(C, { key: 0, value: a.imageUrl ? [a.imageUrl] : [], type: "image", shopId: e.shopId, num: 1, width: 50, height: 50, onSureSuccess: (s) => a.imageUrl = s ? s[0] : "", onDeleteMaterial: (s) => a.imageUrl = "" }, null, 8, ["value", "shopId", "onSureSuccess", "onDeleteMaterial"])) : (d(), g("img", { key: 1, width: 45, height: 45, src: `${a.imageUrl}` }, null, 8, L))]), _: 2 }, 1032, ["label"]), l(i, { label: e.$t("mall.pagedevise.name"), "label-width": "50px" }, { default: o(() => [l(m, { modelValue: a.name, "onUpdate:modelValue": (s) => a.name = s, placeholder: e.$t("mall.pagedevise.name") }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["label"]), l(i, { label: e.$t("mall.pagedevise.page"), "label-width": "50px", class: "mt-[8px]" }, { default: o(() => [l(I, { clientType: e.clientType, shopId: e.shopId, page: a.pageUrl, onChangePage: (s) => a.pageUrl = s }, null, 8, ["clientType", "shopId", "page", "onChangePage"])]), _: 2 }, 1032, ["label"]), l(i, { label: e.$t("mall.pagedevise.show"), "label-width": "50px" }, { default: o(() => [l(v, { modelValue: a.enable, "onUpdate:modelValue": (s) => a.enable = s, "active-text": e.$t("commons.yes"), "inactive-text": e.$t("commons.no") }, null, 8, ["modelValue", "onUpdate:modelValue", "active-text", "inactive-text"])]), _: 2 }, 1032, ["label"])]), _: 2 }, 1024)]), _: 2 }, 1024)])]), _: 1 }, 8, ["modelValue"]))]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const W = R(G, [["render", Q]]), ae = Object.freeze(Object.defineProperty({ __proto__: null, default: W }, Symbol.toStringTag, { value: "Module" }));
export {
  ae as _
};
