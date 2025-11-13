import M from "./base-setting-BI1Sz0yX.js";
import { i as P } from "./pageDeviseConfig-CnWYCywQ.js";
import { s as R } from "./useCompSettingHooks-BBSAXeOe.js";
import { g as j } from "./goodsbrand-BK_6Xr87.js";
import { R as F, P as O, t as T, S as E, _ as q, r as n, c as b, o as f, b as a, h as t, e as i, f as g, z as v, F as A, v as G, g as H } from "./index-DAdfXJ2i.js";
const J = R({ setup() {
  const e = F({ itemValue: O(P), dicList: [] });
  T(() => {
    l();
  });
  function l() {
    j().then((m) => {
      e.dicList = m.data;
    });
  }
  function c(m, s) {
    m ? e.dicList.map((r) => {
      r.id == m && (s.id = r.id, s.brandName = r.brandName, s.picUrl = r.picUrl);
    }) : (s.id = "", s.brandName = "", s.picUrl = "");
  }
  return { ...E(e), onChangeData: c };
} }), K = { class: "draggable-item" }, Q = ["onClick"], W = { class: "draggable-focus" }, X = { class: "flex items-center" }, Y = { class: "flex items-center" }, Z = { class: "w-full pl-[5px]" };
function x(e, l, c, m, s, r) {
  const D = n("MaterialList"), p = n("el-form-item"), u = n("el-input"), V = n("el-color-picker"), C = n("el-tooltip"), $ = n("el-button"), L = n("Rank"), k = n("el-icon"), _ = n("el-col"), I = n("el-image"), U = n("el-option"), y = n("el-select"), w = n("el-row"), N = n("draggable"), z = n("el-form"), h = M;
  return f(), b("div", null, [a(h, null, { title: t(() => [g(v(e.$t("mall.pagedevise.brand")), 1)]), content: t(() => [a(z, { ref: "form", "label-position": "left", "label-width": "90px", model: e.formData }, { default: t(() => [a(p, { label: e.$t("mall.pagedevise.titleImage") }, { default: t(() => [a(D, { value: e.formData.titleImage ? [e.formData.titleImage] : [], onSureSuccess: l[0] || (l[0] = (o) => e.formData.titleImage = o ? o[0] : ""), type: "image", onDeleteMaterial: l[1] || (l[1] = (o) => e.formData.titleImage = ""), shopId: e.shopId, num: 1, width: 120, height: 48 }, null, 8, ["value", "shopId"])]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("mall.pagedevise.title") }, { default: t(() => [a(u, { modelValue: e.formData.title, "onUpdate:modelValue": l[2] || (l[2] = (o) => e.formData.title = o), size: "small", placeholder: e.$t("mall.pagedevise.title") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("mall.pagedevise.titleColor") }, { default: t(() => [a(C, { effect: "dark", content: e.$t("mall.pagedevise.colorCodeDescription"), placement: "top" }, { default: t(() => [a(u, { modelValue: e.formData.titleColor, "onUpdate:modelValue": l[4] || (l[4] = (o) => e.formData.titleColor = o), size: "small" }, { append: t(() => [a(V, { modelValue: e.formData.titleColor, "onUpdate:modelValue": l[3] || (l[3] = (o) => e.formData.titleColor = o), size: "small" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["content"])]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("mall.pagedevise.pageSpacing") }, { default: t(() => [a(u, { modelValue: e.formData.pageSpacing, "onUpdate:modelValue": l[5] || (l[5] = (o) => e.formData.pageSpacing = o), size: "small", type: "number", placeholder: e.$t("mall.pagedevise.pageSpacing") }, { append: t(() => [...l[9] || (l[9] = [g("px", -1)])]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("mall.pagedevise.brand") }, { default: t(() => [i("div", null, [a($, { class: "addBtn", type: "primary", icon: "el-icon-circle-plus", plain: "", size: "small", onClick: l[6] || (l[6] = (o) => e.addItem(e.formData.itemList, e.itemValue)) }, { default: t(() => [g(v(e.$t("commons.addNew")), 1)]), _: 1 })])]), _: 1 }, 8, ["label"]), i("div", null, [a(N, { modelValue: e.formData.itemList, "onUpdate:modelValue": l[7] || (l[7] = (o) => e.formData.itemList = o), "item-key": "id", onChange: l[8] || (l[8] = (o) => e.draggableChangeItem(o, e.formData.itemList)) }, { item: t(({ element: o, index: B }) => [i("div", K, [a(w, null, { default: t(() => [i("i", { class: "draggable-del", onClick: (d) => e.delItem(e.formData.itemList, B) }, "x", 8, Q), a(_, { span: 3, class: "canDraggable" }, { default: t(() => [i("div", W, [a(k, null, { default: t(() => [a(L)]), _: 1 })])]), _: 1 }), a(_, { span: 21 }, { default: t(() => [i("div", X, [i("div", Y, [a(I, { class: "w-[50px] h-[50px]", src: o.picUrl }, null, 8, ["src"])]), i("div", Z, [a(y, { modelValue: o.id, "onUpdate:modelValue": (d) => o.id = d, filterable: "", placeholder: e.$t("commons.select"), onChange: (d) => e.onChangeData(d, o) }, { default: t(() => [(f(true), b(A, null, G(e.dicList, (d, S) => (f(), H(U, { key: S, style: { width: "100%" }, label: d.brandName, value: d.id }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "onChange"])])])]), _: 2 }, 1024)]), _: 2 }, 1024)])]), _: 1 }, 8, ["modelValue"])])]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const ee = q(J, [["render", x]]), ie = Object.freeze(Object.defineProperty({ __proto__: null, default: ee }, Symbol.toStringTag, { value: "Module" }));
export {
  ie as _
};
