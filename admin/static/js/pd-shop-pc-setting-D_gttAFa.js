import R from "./base-setting-BI1Sz0yX.js";
import { g as N } from "./pageDeviseConfig-CnWYCywQ.js";
import { s as j } from "./useCompSettingHooks-BBSAXeOe.js";
import { a as F } from "./shopinfo-DR8w8ULX.js";
import { R as O, t as P, S as T, _ as E, r as n, c as b, o as f, b as o, h as t, e as i, f as g, z as v, F as q, v as A, g as G } from "./index-DAdfXJ2i.js";
const H = j({ setup() {
  const e = O({ itemValue: N, shopList: [] });
  P(() => {
    l();
  });
  function l() {
    F().then((r) => {
      e.shopList = r.data;
    });
  }
  function c(r, s) {
    r ? e.shopList.map((m) => {
      m.id == r && (s.id = m.id, s.name = m.name, s.imgUrl = m.imgUrl, s.address = m.address);
    }) : (s.id = "", s.name = "", s.imgUrl = "");
  }
  return { ...T(e), onChangeShop: c };
} }), J = { class: "draggable-item" }, K = ["onClick"], Q = { class: "draggable-focus" }, W = { class: "flex items-center" }, X = { class: "flex items-center" }, Y = { class: "w-full pl-[5px]" };
function Z(e, l, c, r, s, m) {
  const D = n("MaterialList"), p = n("el-form-item"), u = n("el-input"), V = n("el-color-picker"), h = n("el-tooltip"), C = n("el-button"), $ = n("Rank"), I = n("el-icon"), _ = n("el-col"), k = n("el-image"), S = n("el-option"), U = n("el-select"), y = n("el-row"), L = n("draggable"), w = n("el-form"), z = R;
  return f(), b("div", null, [o(z, null, { title: t(() => [g(v(e.$t("mall.pagedevise.storeRecommendation")), 1)]), content: t(() => [o(w, { "label-position": "left", ref: "form", "label-width": "90px", model: e.formData }, { default: t(() => [o(p, { label: e.$t("mall.pagedevise.titleImage") }, { default: t(() => [o(D, { value: e.formData.titleImage ? [e.formData.titleImage] : [], onSureSuccess: l[0] || (l[0] = (a) => e.formData.titleImage = a ? a[0] : ""), onDeleteMaterial: l[1] || (l[1] = (a) => e.formData.titleImage = ""), type: "image", shopId: e.shopId, num: 1, width: 120, height: 48 }, null, 8, ["value", "shopId"])]), _: 1 }, 8, ["label"]), o(p, { label: e.$t("mall.pagedevise.title") }, { default: t(() => [o(u, { modelValue: e.formData.title, "onUpdate:modelValue": l[2] || (l[2] = (a) => e.formData.title = a), size: "small", placeholder: e.$t("mall.pagedevise.title") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), o(p, { label: e.$t("mall.pagedevise.titleColor") }, { default: t(() => [o(h, { effect: "dark", content: e.$t("mall.pagedevise.colorCodeDescription"), placement: "top" }, { default: t(() => [o(u, { modelValue: e.formData.titleColor, "onUpdate:modelValue": l[4] || (l[4] = (a) => e.formData.titleColor = a), size: "small" }, { append: t(() => [o(V, { size: "small", modelValue: e.formData.titleColor, "onUpdate:modelValue": l[3] || (l[3] = (a) => e.formData.titleColor = a) }, null, 8, ["modelValue"])]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["content"])]), _: 1 }, 8, ["label"]), o(p, { label: e.$t("mall.pagedevise.pageSpacing") }, { default: t(() => [o(u, { modelValue: e.formData.pageSpacing, "onUpdate:modelValue": l[5] || (l[5] = (a) => e.formData.pageSpacing = a), size: "small", type: "number", placeholder: e.$t("mall.pagedevise.pageSpacing") }, { append: t(() => [...l[9] || (l[9] = [g("px", -1)])]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), o(p, { label: e.$t("mall.pagedevise.store") }, { default: t(() => [i("div", null, [o(C, { class: "addBtn", type: "primary", icon: "el-icon-circle-plus", plain: "", size: "small", onClick: l[6] || (l[6] = (a) => e.addItem(e.formData.shopInfoData, e.itemValue)) }, { default: t(() => [g(v(e.$t("mall.pagedevise.addStore")), 1)]), _: 1 })])]), _: 1 }, 8, ["label"]), i("div", null, [o(L, { "item-key": "id", modelValue: e.formData.shopInfoData, "onUpdate:modelValue": l[7] || (l[7] = (a) => e.formData.shopInfoData = a), onChange: l[8] || (l[8] = (a) => e.draggableChangeItem(a, e.formData.shopInfoData)) }, { item: t(({ element: a, index: B }) => [i("div", J, [o(y, null, { default: t(() => [i("i", { class: "draggable-del", onClick: (d) => e.delItem(e.formData.shopInfoData, B) }, "x", 8, K), o(_, { span: 3, class: "canDraggable" }, { default: t(() => [i("div", Q, [o(I, null, { default: t(() => [o($)]), _: 1 })])]), _: 1 }), o(_, { span: 21 }, { default: t(() => [i("div", W, [i("div", X, [o(k, { class: "w-[50px] h-[50px]", src: a.imgUrl }, null, 8, ["src"])]), i("div", Y, [o(U, { filterable: "", modelValue: a.id, "onUpdate:modelValue": (d) => a.id = d, placeholder: e.$t("commons.selectShop"), onChange: (d) => e.onChangeShop(d, a) }, { default: t(() => [(f(true), b(q, null, A(e.shopList, (d, M) => (f(), G(S, { style: { width: "100%" }, key: M, label: d.name, value: d.id }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "onChange"])])])]), _: 2 }, 1024)]), _: 2 }, 1024)])]), _: 1 }, 8, ["modelValue"])])]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const x = E(H, [["render", Z]]), ne = Object.freeze(Object.defineProperty({ __proto__: null, default: x }, Symbol.toStringTag, { value: "Module" }));
export {
  ne as _
};
