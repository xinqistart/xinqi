import { q as g, p as I, R as T, E as f, n as D, A as S, S as C, b1 as w, _ as x, c as A, o as $, e as s, b as _, f as y, z as o, h as H, r as M } from "./index-DAdfXJ2i.js";
import { p as N, g as B } from "./pagedevise-C4VLpPB5.js";
import { u as V } from "./pageDevise-DcQ8796K.js";
import { u as q } from "./usePageDeviseHooks-DhghPmFl.js";
import { c as r } from "./clientType-BhCLU4J5.js";
import "./appPageUrls-CBYQzZv9.js";
import "./base-show-pnQX27ct.js";
import "./goodsspu-DKL_9wDU.js";
import "./pageDeviseConfig-CnWYCywQ.js";
import "./pd-login-pc-EdPv3vQY.js";
import "./useCompShowHooks-DgYh5gcW.js";
import "./default-image-COzMKpJv.js";
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
import "./pd-dialog-config-CaAEMGIz.js";
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
import "./pd-splash-screen-Lo9VSchM.js";
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
const { $t: e } = D(), O = { emits: ["onSuccess"], setup(p, m) {
  const l = V(), v = q(), n = g(() => l.pageDeviseData || {}), d = I([]), t = T({ form: { pageId: "", clientType: l.currentClientType, shopId: l.currentShopId, appId: l.currentAppId }, tableOption: {} });
  f(() => t.form.clientType, () => {
    a();
  }, { immediate: true }), f(() => t.form.appId, () => {
    a();
  }, { immediate: true }), f(() => n.value.id, () => {
    t.form.pageId = "", a();
  }), l.currentShopId !== "-1" ? t.tableOption = { dialogDrag: true, indexLabel: e("mall.pagedevise.serialNumber"), menuAlign: "center", align: "center", dialogWidth: "300px", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, labelPosition: "left", column: [{ label: e("mall.pagedevise.selectPage"), prop: "pageId", type: "select", span: 24, props: { label: "pageName", value: "id" }, dicData: g(() => d.value), rules: [{ required: true, message: e("mall.pagedevise.selectPageToCover"), trigger: "blur" }] }] } : t.tableOption = { dialogDrag: true, indexLabel: e("mall.pagedevise.serialNumber"), dialogWidth: "40%", menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, labelPosition: "left", column: [{ label: e("mall.pagedevise.applicationType"), span: 24, prop: "clientType", hide: true, type: "select", readonly: true, value: r.MA, rules: [{ required: true, message: e("mall.pagedevise.selectType"), trigger: "blur" }], dicData: g(() => t.form.clientType === r.H5PC ? [{ label: "PC", value: r.H5PC }] : [{ label: e("mall.pagedevise.wechatMiniProgram"), value: r.MA }, { label: e("mall.pagedevise.wechatPublicAccount"), value: r.H5WX }, { label: "H5", value: r.H5 }, { label: "APP", value: r.APP }]), cascader: ["appId"], control: (u) => u == r.MA ? { appId: { display: true, dicUrl: "/weixin/wxapp/list?appType=1", rules: [{ required: true, message: e("mall.pagedevise.selectMiniProgram"), trigger: "blur" }] } } : u == r.H5WX ? { appId: { display: true, dicUrl: "/weixin/wxapp/list?appType=2", rules: [{ required: true, message: e("mall.pagedevise.selectPublicAccount"), trigger: "blur" }] } } : { appId: { display: false } } }, { label: e("mall.pagedevise.belongs"), prop: "appId", type: "select", span: 24, labelPosition: "left", hide: true, display: false, props: { label: "name", value: "id" }, dicUrl: "/weixin/wxapp/list?appType=1" }, { label: e("mall.pagedevise.selectPage"), prop: "pageId", type: "select", span: 24, labelPosition: "left", props: { label: "pageName", value: "id" }, dicData: g(() => d.value), rules: [{ required: true, message: e("mall.pagedevise.selectPageToCover"), trigger: "blur" }] }] };
  function a() {
    B(w({ clientType: t.form.clientType ?? r.MA, shopId: n.value.shopId, appId: t.form.appId ?? "-1", size: 9999 })).then((u) => {
      d.value = u.data.records.filter((c) => c.id !== n.value.id);
    });
  }
  const { proxy: b } = S();
  async function h(u, c) {
    const i = d.value.find((P) => P.id === t.form.pageId);
    if (!i) {
      b.$message.error(e("mall.pagedevise.selectPageToCover"));
      return;
    }
    i.pageComponent = n.value.pageComponent, N(i).then(() => {
      b.$confirm(e("mall.pagedevise.copySuccessPrompt"), e("commons.tip"), { confirmButtonText: e("commons.confirm"), cancelButtonText: e("commons.cancel"), type: "success" }).then(function() {
        c(), m.emit("onSuccess", i.id), l.updateDataObj({ currentShopId: i.shopId, currentAppId: i.appId, currentClientType: i.clientType, currentSelectPageType: i.pageType }), v.useInit(i.id);
      }).catch(() => {
        c(), m.emit("onSuccess");
      });
    });
  }
  return { ...C(t), handleUpdate: h };
} }, U = { class: "ml-[5px] mb-[5px]" }, W = { class: "text-red-500" }, k = { class: "jl-text-tips ml-[5px] mb-[15px]" }, L = { class: "text-gray-400" };
function j(p, m, l, v, n, d) {
  const t = M("avue-form");
  return $(), A("div", null, [s("div", U, [y(o(p.$t("mall.pagedevise.noteClicking")) + " " + o(p.$t("commons.submit")) + " " + o(p.$t("mall.pagedevise.willCopyPageData")) + " ", 1), s("b", W, o(p.$t("mall.pagedevise.overwrite")) + o(p.$t("mall.pagedevise.toSelectedPage")), 1)]), s("div", k, o(p.$t("mall.pagedevise.tipCreatePageFirst")), 1), _(t, { modelValue: p.form, "onUpdate:modelValue": m[0] || (m[0] = (a) => p.form = a), option: p.tableOption, onSubmit: v.handleUpdate }, { "pageId-type": H(({ item: a }) => [s("div", null, [s("div", null, [y(o(a.pageName) + " ", 1), s("span", L, o(a.pageType), 1)])])]), _: 1 }, 8, ["modelValue", "option", "onSubmit"])]);
}
const St = x(O, [["render", j]]);
export {
  St as default
};
