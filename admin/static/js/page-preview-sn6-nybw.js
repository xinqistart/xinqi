import { a as V } from "./pd-dialog-config-CaAEMGIz.js";
import { a as P } from "./pd-splash-screen-Lo9VSchM.js";
import { s as y } from "./pageDeviseConfig-CnWYCywQ.js";
import { bl as b, q as g, p as v, t as N, ap as S, _ as k, c as i, o, e as d, B as n, b as D, g as _, w as T, r as w, D as L, F as x, v as B, x as H, y as R } from "./index-DAdfXJ2i.js";
import "./base-show-pnQX27ct.js";
import "./goodsspu-DKL_9wDU.js";
import "./useCompShowHooks-DgYh5gcW.js";
import "./pageDevise-DcQ8796K.js";
import "./clientType-BhCLU4J5.js";
import "./default-image-COzMKpJv.js";
import "./pd-login-pc-EdPv3vQY.js";
import "./pd-bargain-pc-BBHvcIo4.js";
import "./ic_bargain_title-D39V029J.js";
import "./pd-brand-pc-BRg6GgW1.js";
import "./pd-coupon-pc-BrUMLnDA.js";
import "./couponinfo-DcPdU1o6.js";
import "./pd-goods-category-pc-D3IFNEU8.js";
import "./goodscategory-DvhXgk83.js";
import "./pd-goods-pc-DDynZDni.js";
import "./pd-goods-row-pc-BKVJqghz.js";
import "./pd-groupon-pc-DDZUjvwS.js";
import "./ic_groupon_title-CwXpbXgl.js";
import "./pd-image-multi-pc-CQglKs0F.js";
import "./pd-image-pc-MQKq3-QU.js";
import "./pd-nav-button-pc-CXuBp7bG.js";
import "./pd-notice-pc-D9MJ6nq0.js";
import "./ic_notice_title-CBoA872e.js";
import "./pd-page-config-pc-pwENpGT0.js";
import "./pd-page-footer-pc-CnufhIeS.js";
import "./pd-page-header-pc-D2x1RYdW.js";
import "./pd-page-logo-search-pc-CHloCHKG.js";
import "./pd-rich-text-pc-YEbXaE_l.js";
import "./BaseEditor-CKHWT0N2.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./pd-search-pc-DOXhBNCx.js";
import "./pd-seckill-pc-mitg3xEo.js";
import "./ic_seckill_title-COMXdhN5.js";
import "./pd-shop-pc-Bur0OITm.js";
import "./pd-swiper-pc-Bn5RVxT-.js";
import "./pd-title-text-pc-B025RQNZ.js";
import "./pd-shop-info-pc-DOAY7lZq.js";
import "./shopinfo-DR8w8ULX.js";
import "./pd-shop-tabbar-pc-C8PQg2yo.js";
import "./pd-category-Belh5v7N.js";
import "./pd-goods-detail-action-8b8i4sKG.js";
import "./pd-goods-detail-appraises-BkqURG15.js";
import "./pd-goods-detail-desc-JYzVVkXc.js";
import "./pd-goods-detail-name-C7g6tL9m.js";
import "./pd-goods-detail-price-D0U9yQF0.js";
import "./pd-goods-detail-recommend-DhJbaHTG.js";
import "./pd-goods-detail-sku-CliQfoOX.js";
import "./pd-goods-detail-swiper-DpA8hSWW.js";
import "./pd-bargain-rn9mKt4K.js";
import "./pd-brand-CWYUAcd_.js";
import "./pd-coupon-BQQlIWY-.js";
import "./pd-float-btn-FvbdUYvN.js";
import "./pd-goods-category-2-Ye8qS6.js";
import "./pd-goods-market-lUqDnjIL.js";
import "./pd-goods-new-BGr_klxt.js";
import "./pd-goods-row-JRiKY43t.js";
import "./pd-goods-waterfall-UQ7e7Els.js";
import "./autoplay-SLPogy2y.js";
import "./pd-goods-C5R_I1ep.js";
import "./pd-groupon-B14CCuYX.js";
import "./pd-image-hot-DadQHaUk.js";
import "./pd-image-multi-D1x8UUX5.js";
import "./pd-image-B4Bj1o_j.js";
import "./pd-live-room-COeaPgZM.js";
import "./pd-nav-button-BdAGSLTs.js";
import "./pd-notice-Bdl2JuKF.js";
import "./pd-page-config-eS2iONoZ.js";
import "./pd-rich-text-kuIeJoZE.js";
import "./pd-search-CrI2tG3s.js";
import "./pd-seckill-y6w79MJA.js";
import "./pd-shop-BBWPsdIK.js";
import "./pd-swiper-CE9uHf9E.js";
import "./pd-tab-bar-rBmrR-Ys.js";
import "./pd-title-text-kvc5FlzB.js";
import "./pd-top-nav-DY27d3n5.js";
import "./pd-shop-info-CawVyldo.js";
import "./pd-shop-search-ChH7U97n.js";
import "./pd-user-info-BKvD5bO8.js";
import "./pd-user-order-center-DQP1ONiL.js";
import "./pd-user-service-center-C2lGNhyv.js";
import "./pd-user-wallet-Boq0CsFY.js";
const E = { components: { ...y }, props: { themeData: {}, pageDeviseData: { type: Object, default: () => ({ pageComponent: { componentsList: [] } }) }, overflow: { type: String, defalut: "auto" } }, setup(a) {
  b(() => {
  });
  const f = g(() => {
    var _a;
    return (_a = a.pageDeviseData.pageComponent) == null ? void 0 : _a.componentsList;
  }), m = g(() => a.pageDeviseData.pageType === "/pages/home/index"), e = v(null), t = v(null), p = g(() => a.pageDeviseData);
  N(() => {
    t.value && t.value.addEventListener("scroll", s);
  }), S(() => {
    t.value && t.value.removeEventListener("scroll", s);
  });
  const r = v(false);
  function s() {
    if (!e.value || !p.value.pageComponent || !p.value.pageComponent.pdPageConfig || !p.value.pageComponent.pdPageConfig.topNav || p.value.pageComponent.pdPageConfig.topNav.transparentNav != 1) return;
    const c = e.value.offsetHeight;
    t.value.scrollTop > c ? r.value = true : r.value = false;
  }
  const l = g(() => a.pageDeviseData.pageType === "/pages/home/index" || a.pageDeviseData.pageType === "/pages/shop/shop-detail/index");
  return { pageScroll: r, pageDeviseDataView: p, topNavViewRef: e, pgViewPreviewIdRef: t, componentsList: f, isHomePagePreview: m, showTabbar: l };
} }, I = { class: "pg-pd-preview" }, F = { key: 0 }, U = { ref: "topNavViewRef", class: "pg-pd-preview-top-nav" }, j = { key: 1, class: "pg-pd-preview-wrapper" }, q = { key: 2, style: { position: "relative" } };
function z(a, f, m, e, t, p) {
  var _a;
  const r = w("pd-page-config-component"), s = P, l = V, c = w("pd-top-nav-component"), u = w("pd-tab-bar-component");
  return o(), i("div", I, [d("div", { ref: "pgViewPreviewIdRef", class: "pg-pd-preview-components-list", style: H({ overflow: m.overflow }) }, [e.pageDeviseDataView.id && e.pageDeviseDataView.pageComponent ? (o(), i("div", F, [D(r, { class: "pg-pd-preview-page", setData: e.pageDeviseDataView.pageComponent.pdPageConfig }, null, 8, ["setData"]), e.pageDeviseDataView.pageComponent.pdSplashScreen ? (o(), _(s, { key: 0, class: "pg-pd-preview-page", setData: e.pageDeviseDataView.pageComponent.pdSplashScreen }, null, 8, ["setData"])) : n("", true), e.pageDeviseDataView.pageComponent.pdDialogConfig ? (o(), _(l, { key: 1, class: "pg-pd-preview-page", setData: e.pageDeviseDataView.pageComponent.pdDialogConfig }, null, 8, ["setData"])) : n("", true), T(d("div", U, [D(c, { pageDeviseData: e.pageDeviseDataView, isHomePagePreview: e.isHomePagePreview, pageScroll: e.pageScroll, setData: e.pageDeviseDataView.pageComponent.pdPageConfig.topNav }, null, 8, ["pageDeviseData", "isHomePagePreview", "pageScroll", "setData"])], 512), [[L, e.pageDeviseDataView.pageComponent.pdPageConfig.topNav]])])) : n("", true), e.componentsList ? (o(), i("div", j, [(o(true), i(x, null, B(e.componentsList, (C, h) => (o(), i("div", { key: h }, [(o(), _(R(C.componentName), { setData: C.data, preview: true, pageDeviseData: m.pageDeviseData }, null, 8, ["setData", "pageDeviseData"]))]))), 128))])) : n("", true), e.showTabbar ? (o(), i("div", q, [d("div", null, [D(u, { setData: (_a = e.pageDeviseDataView.pageComponent) == null ? void 0 : _a.pdTabBar, preview: true }, null, 8, ["setData"])])])) : n("", true)], 4)]);
}
const ho = k(E, [["render", z], ["__scopeId", "data-v-b417760a"]]);
export {
  ho as default
};
