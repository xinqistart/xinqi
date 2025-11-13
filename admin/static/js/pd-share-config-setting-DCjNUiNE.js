import $ from "./base-setting-BI1Sz0yX.js";
import { s as w } from "./useCompSettingHooks-BBSAXeOe.js";
import { g as V } from "./wxapp-BACewdCT.js";
import { u as y } from "./pageDevise-DcQ8796K.js";
import { q as T, R as L, t as A, S as M, _ as U, r, c as z, o as W, b as a, h as t, e as c, z as m, f as v } from "./index-DAdfXJ2i.js";
const C = w({ setup(e, o, h) {
  const D = y(), I = T(() => D.currentShopId), i = L({ wxAppList: [] });
  A(() => {
    d();
  });
  function d() {
    V({ appType: "1", shopId: I.value }).then((s) => {
      const p = s.data.records;
      p && p.length > 0 ? i.wxAppList = p : i.wxAppList = [];
    });
  }
  function n(s, p) {
    const g = s ? i.wxAppList.filter((f) => f ? f.id.toLowerCase().indexOf(s.toLowerCase()) === 0 : false) : i.wxAppList;
    p(g);
  }
  function u(s) {
    s ? h.formData.shareWxMaId = s.id : h.formData.shareWxMaId = "";
  }
  return { ...M(i), querySearchWxMaId: n, handleSelect: u };
} }), j = { class: "jl-text-tips" }, k = { class: "jl-text-tips" };
function O(e, o, h, D, I, i) {
  const d = r("material-list"), n = r("el-form-item"), u = r("el-input"), s = r("el-radio"), p = r("el-radio-group"), g = r("Warning"), f = r("el-icon"), _ = r("el-tooltip"), b = r("el-form"), S = $;
  return W(), z("div", null, [a(S, null, { title: t(() => [v(m(e.$t("mall.pagedevise.share")), 1)]), content: t(() => [c("div", null, [c("div", j, m(e.$t("mall.pagedevise.tipForAppOnly")), 1), a(b, { ref: "form", "label-width": "110px", "label-position": "left", model: e.formData }, { default: t(() => [a(n, { class: "mt-[20px]", label: e.$t("mall.pagedevise.shareImage") }, { default: t(() => [a(d, { value: e.formData.shareImageUrl ? [e.formData.shareImageUrl] : [], type: "image", shopId: e.shopId, num: 1, divStyle: "width:100%;margin-bottom:0px;height:90px;line-height: 90px;", onSureSuccess: o[0] || (o[0] = (l) => e.formData.shareImageUrl = l ? l[0] : ""), onDeleteMaterial: o[1] || (o[1] = (l) => e.formData.shareImageUrl = "") }, null, 8, ["value", "shopId"])]), _: 1 }, 8, ["label"]), a(n, { label: e.$t("mall.pagedevise.shareTitle") }, { default: t(() => [a(u, { modelValue: e.formData.shareTitle, "onUpdate:modelValue": o[2] || (o[2] = (l) => e.formData.shareTitle = l), clearable: "", size: "small", type: "primary", link: "", placeholder: e.$t("mall.pagedevise.shareTitle") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(n, { label: e.$t("mall.pagedevise.shareDescription") }, { default: t(() => [a(u, { modelValue: e.formData.shareDesc, "onUpdate:modelValue": o[3] || (o[3] = (l) => e.formData.shareDesc = l), clearable: "", size: "small", type: "textarea", placeholder: e.$t("mall.pagedevise.shareDescription") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(n, { label: e.$t("mall.pagedevise.shareIcon") }, { default: t(() => [a(p, { modelValue: e.formData.shareIconShow, "onUpdate:modelValue": o[4] || (o[4] = (l) => e.formData.shareIconShow = l) }, { default: t(() => [a(s, { value: "0" }, { default: t(() => [v(m(e.$t("commons.close")), 1)]), _: 1 }), a(s, { value: "1" }, { default: t(() => [v(m(e.$t("commons.open")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"]), a(_, { class: "box-item", effect: "dark", content: e.$t("mall.pagedevise.shareIconTip"), placement: "top" }, { default: t(() => [a(f, null, { default: t(() => [a(g)]), _: 1 })]), _: 1 }, 8, ["content"])]), _: 1 }, 8, ["label"]), a(n, { label: e.$t("mall.pagedevise.shareIcon") }, { default: t(() => [a(d, { value: e.formData.shareIcon ? [e.formData.shareIcon] : [], type: "image", shopId: e.shopId, num: 1, width: "50", height: "50", onSureSuccess: o[5] || (o[5] = (l) => e.formData.shareIcon = l ? l[0] : ""), onDeleteMaterial: o[6] || (o[6] = (l) => e.formData.shareIcon = "") }, null, 8, ["value", "shopId"]), c("p", k, m(e.$t("commons.imageSizeTip", { size: "26*26" })), 1)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])])]), _: 1 })]);
}
const B = U(C, [["render", O]]), R = Object.freeze(Object.defineProperty({ __proto__: null, default: B }, Symbol.toStringTag, { value: "Module" }));
export {
  R as _
};
