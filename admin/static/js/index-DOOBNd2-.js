import { R as M, m as G, U as H, S as O, _ as B, r as e, c as v, o as l, b as o, g as t, B as i, e as F, h as r } from "./index-DAdfXJ2i.js";
import { F as w } from "./index-N3Ti2Rv6.js";
import A from "./guide-SEsvsQCf.js";
import I from "./goodshot-DWUm1-ac.js";
import N from "./shopsaleshot-jLIMxhbX.js";
import T from "./ordersalesline-Dath0HdK.js";
import V from "./ordersalescard-D6GIraKB.js";
import L from "./ordercountcard-D6pT5lab.js";
import R from "./goodscountcard-Do79MnFI.js";
import { _ as E } from "./ordersourcepie.vue_vue_type_style_index_0_lang-DrLxUrIE.js";
import { _ as j } from "./ordertypepie.vue_vue_type_style_index_0_lang-B8-Oro-l.js";
import { _ as q } from "./malluserlist.vue_vue_type_style_index_0_lang-D82cp3EQ.js";
import z from "./mallusercard-sRqklCdx.js";
import { _ as D } from "./mallusersexpie.vue_vue_type_style_index_0_lang-DjhK5kyR.js";
import { _ as J } from "./mallusersourcepie.vue_vue_type_style_index_0_lang-DwyJqAp_.js";
import K from "./mallusermap-C0ounAKq.js";
import Q from "./malluseronline-BQ1vRwDz.js";
import W from "./goodsAndShopHot-D1n6n-l1.js";
import "./vue-qr-Ee6k57BN.js";
import "./orderinfo-BW26vGJU.js";
import "./wxapp-BACewdCT.js";
import "./wxapp-DzjQ_kFh.js";
import "./largescreen-Cv8DzdZU.js";
import "./index-BMoo9HBP.js";
import "./goodsspu-DKL_9wDU.js";
import "./clientType-BhCLU4J5.js";
import "./userinfo-BgcUdIqU.js";
import "./useronline-CekuxQ4G.js";
const X = { components: { Footer: w, Guide: A, OrderSalesLine: T, OrderSalesCard: V, OrderSourcePic: E, OrderCountCard: L, OrderTypePie: j, ShopSalesHot: N, GoodsCountCard: R, GoodsHot: I, MallUserList: q, MallUserCard: z, MallUserSexPie: D, MallUserSourcePie: J, MallUserMap: K, MallUserOnline: Q, GoodsAndShopHot: W }, setup() {
  const _ = M({ infoTitle: G().Title }), n = H().userInfo;
  function c() {
    return n.type != "2";
  }
  return { ...O(_), hasPermission: c, userInfo: n };
} }, Y = { class: "m-2" };
function Z(_, n, c, s, $, oo) {
  const d = e("order-sales-card"), a = e("el-col"), p = e("order-count-card"), f = e("mall-user-card"), u = e("goods-count-card"), m = e("el-row"), x = e("guide"), g = e("order-sales-line"), h = e("GoodsAndShopHot"), P = e("order-source-pic"), b = e("mall-user-sex-pie"), y = e("mall-user-source-pie"), k = e("order-type-pie"), S = e("mall-user-online"), C = e("mall-user-map"), U = e("Footer");
  return l(), v("div", Y, [o(m, { gutter: 10, style: { "background-color": "#f5f9fe" } }, { default: r(() => [o(a, { class: "mb-2", span: s.hasPermission() ? 6 : 14, xs: 24, sm: 24, md: 24, lg: s.hasPermission() ? 6 : 14, xl: s.hasPermission() ? 6 : 14 }, { default: r(() => [o(d)]), _: 1 }, 8, ["span", "lg", "xl"]), o(a, { class: "mb-2", span: s.hasPermission() ? 6 : 8, xs: 24, sm: 24, md: 24, lg: s.hasPermission() ? 6 : 8, xl: s.hasPermission() ? 6 : 8 }, { default: r(() => [o(p)]), _: 1 }, 8, ["span", "lg", "xl"]), s.hasPermission() ? (l(), t(a, { key: 0, class: "mb-2", span: 6, xs: 24, sm: 24, md: 24, lg: s.hasPermission() ? 6 : 14, xl: s.hasPermission() ? 6 : 14 }, { default: r(() => [o(f)]), _: 1 }, 8, ["lg", "xl"])) : i("", true), o(a, { class: "mb-2", span: s.hasPermission() ? 6 : 14, xs: 24, sm: 24, md: 24, lg: s.hasPermission() ? 6 : 14, xl: s.hasPermission() ? 6 : 14 }, { default: r(() => [o(u)]), _: 1 }, 8, ["span", "lg", "xl"])]), _: 1 }), o(m, { gutter: 10, class: "mb-2", style: { "background-color": "#f5f9fe" } }, { default: r(() => [o(a, { span: s.hasPermission() ? 12 : 14, xs: 12, sm: 12, md: 12, lg: s.hasPermission() ? 12 : 14, xl: s.hasPermission() ? 12 : 14 }, { default: r(() => [o(x)]), _: 1 }, 8, ["span", "lg", "xl"]), o(a, { span: s.hasPermission() ? 12 : 14, xs: 12, sm: 12, md: 12, lg: s.hasPermission() ? 12 : 14, xl: s.hasPermission() ? 12 : 14 }, { default: r(() => [o(g)]), _: 1 }, 8, ["span", "lg", "xl"])]), _: 1 }), o(m, { class: "mb-2", style: { "background-color": "#f5f9fe" } }, { default: r(() => [o(a, { span: s.hasPermission() ? 24 : 14, xs: 24, sm: 24, md: 24, lg: s.hasPermission() ? 24 : 14, xl: s.hasPermission() ? 24 : 14 }, { default: r(() => [o(h)]), _: 1 }, 8, ["span", "lg", "xl"])]), _: 1 }), o(m, { gutter: 10, class: "mb-2", style: { "background-color": "#f5f9fe" } }, { default: r(() => [o(a, { span: 6, xs: 24, sm: 24, md: 24, lg: 6, xl: 6 }, { default: r(() => [o(P)]), _: 1 }), s.hasPermission() ? (l(), t(a, { key: 0, span: 6, xs: 24, sm: 24, md: 24, lg: 6, xl: 6 }, { default: r(() => [o(b)]), _: 1 })) : i("", true), s.hasPermission() ? (l(), t(a, { key: 1, span: 6, xs: 24, sm: 24, md: 24, lg: 6, xl: 6 }, { default: r(() => [o(y)]), _: 1 })) : i("", true), o(a, { span: 6, xs: 24, sm: 24, md: 24, lg: 6, xl: 6 }, { default: r(() => [o(k)]), _: 1 })]), _: 1 }), s.hasPermission() ? (l(), t(m, { key: 0, gutter: 10, style: { "background-color": "#f5f9fe" } }, { default: r(() => [o(a, { span: 12, xs: 24, sm: 24, md: 24, lg: 12, xl: 12 }, { default: r(() => [o(S)]), _: 1 }), o(a, { style: { "margin-bottom": "10px" }, span: 12, xs: 24, sm: 24, md: 24, lg: 12, xl: 12 }, { default: r(() => [o(C)]), _: 1 })]), _: 1 })) : i("", true), o(U), n[0] || (n[0] = F("br", null, null, -1))]);
}
const Bo = B(X, [["render", Z], ["__scopeId", "data-v-ef9b79ec"]]);
export {
  Bo as default
};
