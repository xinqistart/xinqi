import { _ as w } from "./base-show-pnQX27ct.js";
import { s as S } from "./useCompShowHooks-DgYh5gcW.js";
import { S as C, a as R, b as k, A as B } from "./autoplay-SLPogy2y.js";
import { _ as T, r as v, g as $, o as l, h, e as o, x as r, c as d, B as c, f as z, V as I, z as n, F as D, v as b, b as L, au as F, av as N } from "./index-DAdfXJ2i.js";
const A = S({ components: { Swiper: R, SwiperSlide: C }, setup: () => {
  k.use([B]);
  function s(a) {
    if (a) {
      let t = a;
      return a = f(m(a)), { backgroundColor: t, "background-image": `-webkit-linear-gradient(-4deg, rgba(${a}, 1) 30%, #fff 50%, rgba(${a}, 1) 70%)!important` };
    } else return {};
  }
  function f(a) {
    var t = a.toLowerCase();
    if (t && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t)) {
      if (t.length === 4) {
        let i = "#";
        for (let e = 1; e < 4; e += 1) i += t.slice(e, e + 1).concat(t.slice(e, e + 1));
        t = i;
      }
      let g = [];
      for (let i = 1; i < 7; i += 2) g.push(parseInt("0x" + t.slice(i, i + 2)));
      return g.join(",");
    }
    return t;
  }
  function m(a) {
    const t = a.match(/(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
    if (t) {
      const y = parseInt(t[1], 10), g = parseInt(t[2], 10), i = parseInt(t[3], 10);
      let e = "#" + u(y) + u(g) + u(i);
      if (t[4]) {
        const p = Math.round(parseFloat(t[4]) * 255);
        e += u(p);
      }
      return e;
    }
    return a;
  }
  function u(a) {
    const t = a.toString(16);
    return t.length === 1 ? "0" + t : t;
  }
  return { vipBgStyle: s };
} }), P = { key: 0, class: "cu-bar justify-center", style: { "min-height": "40px" } }, U = { key: 0, class: "padding-sm" }, j = { class: "flex align-center" }, x = { style: { width: "108px", height: "108px" } }, V = ["src"], M = { class: "margin-left-sm", style: { width: "65%" } }, H = { class: "flex align-center" }, G = { class: "flex justify-between" }, O = { key: 1, class: "goods-container flex" }, E = { key: 0 }, q = ["src"], J = { key: 0 }, K = { class: "img-box" }, Q = ["src"], W = { class: "flex align-center" }, X = { class: "flex justify-between align-center" }, Y = { key: 2, class: "goods-container flex" }, Z = { key: 0 }, _ = { class: "img-box" }, ss = ["src"];
function es(s, f, m, u, a, t) {
  const y = v("swiper-slide"), g = v("swiper"), i = w;
  return l(), $(i, { styles: s.setData.styles }, { default: h(() => [o("div", { class: "goodsComponent", style: r({ ...s.setBgStyle(s.setData.background) }) }, [s.setData.showTitle != "0" ? (l(), d("div", P, [o("div", { class: "action text-bold", style: r([{ color: `${s.setData.titleColor}` }, { "font-size": "13px" }]) }, [f[0] || (f[0] = o("div", { class: "cuIcon-move" }, null, -1)), o("div", { style: { margin: "0 5px" }, class: I(s.setData.titleIcon) }, null, 2), z(" " + n(s.setData.title) + " ", 1), f[1] || (f[1] = o("div", { class: "cuIcon-move" }, null, -1))], 4)])) : c("", true), o("div", null, [s.setData.showType == "row" ? (l(), d("div", { key: 0, class: "cu-card article no-card", style: r({ borderRadius: `${s.setData.goodsRadius}px` }) }, [(l(true), d(D, null, b(s.setData.goodsList, (e, p) => (l(), d("div", { key: p, class: "bg-white goods-item solid-bottom" }, [e ? (l(), d("div", U, [o("div", j, [o("div", x, [o("img", { style: r({ borderRadius: `${s.setData.radius}px`, borderTopLeftRadius: `${s.setData.goodsradius}px`, borderTopRightRadius: `${s.setData.goodsradius}px` }), src: e.picUrls[0] ? e.picUrls[0] : s.noImage, mode: "aspectFill", class: "row-img" }, null, 12, V)]), o("div", M, [o("div", { class: "text-black overflow-1", style: r({ color: `${s.setData.goodsColor}`, fontSize: `${s.setData.goodsSize}px` }) }, n(e.name), 5), o("div", { class: "text-gray text-sm overflow-2", style: r({ color: `${s.setData.sellColor}` }) }, n(e.sellPoint), 5), o("div", H, [o("div", { class: "cu-tag bg-red radius sm margin-right-sm", style: r({ ...s.setBgStyle(s.setData.shippingBg), color: `${s.setData.shippingColor}`, borderRadius: `${s.setData.shippingRadius}px` }) }, n(s.$t("mall.pagedevise.goodsFreeShipping")), 5), e.pointsGiveSwitch == "1" ? (l(), d("div", { key: 0, style: r({ ...s.setBgStyle(s.setData.integralBg), color: `${s.setData.integralColor}`, borderRadius: `${s.setData.integralRadius}px` }), class: "cu-tag bg-orange radius sm margin-right-sm" }, n(s.$t("mall.pagedevise.goodsPoints")), 5)) : c("", true), o("div", { class: "text-gray text-sm", style: r({ color: `${s.setData.salenumColor}` }) }, n(s.$t("mall.pagedevise.goodsSold")) + n(e.saleNum), 5)]), o("div", G, [o("div", { class: "text-price text-bold text-lg text-red", style: r({ color: `${s.setData.priceColor}`, fontSize: `${s.setData.priceSize}px` }) }, n(e.priceDown), 5), o("div", { class: "round buy text-sm", style: r({ ...s.setBgStyle(s.setData.buyBg), color: `${s.setData.buyColor}`, borderRadius: `${s.setData.buyRadius}px` }) }, [o("div", null, n(s.$t("mall.pagedevise.buyNow")), 1)], 4)])])])])) : c("", true)]))), 128))], 4)) : s.setData.showType == "card" ? (l(), d("div", O, [s.setData.showSwiper === "1" ? (l(), d("div", { key: 0, class: "goods-box", style: r({ ...s.setBgStyle(s.setData.goodsBackground), borderRadius: `${s.setData.goodsRadius}px` }) }, [s.setData.swiperList ? (l(), d("div", E, [L(g, F(N({ autoplay: { delay: s.setData.swiperInterval || 3e3 }, loop: s.setData.swiperList && s.setData.swiperList.length > 1 })), { default: h(() => [(l(true), d(D, null, b(s.setData.swiperList, (e, p) => (l(), $(y, { key: p }, { default: h(() => [o("img", { src: e.imageUrl ? e.imageUrl : s.noImage, class: "swiper-card-img" }, null, 8, q)]), _: 2 }, 1024))), 128))]), _: 1 }, 16)])) : c("", true)], 4)) : c("", true), (l(true), d(D, null, b(s.setData.goodsList, (e, p) => (l(), d("div", { key: p, class: "goods-box", style: r({ ...s.setBgStyle(s.setData.goodsBackground), borderRadius: `${s.setData.goodsRadius}px` }) }, [e ? (l(), d("div", J, [o("div", K, [o("img", { style: r({ borderRadius: `${s.setData.radius}px`, borderTopLeftRadius: `${s.setData.goodsradius}px`, borderTopRightRadius: `${s.setData.goodsradius}px` }), src: e.picUrls[0] ? e.picUrls[0] : s.noImage, mode: "aspectFill", class: "card-img" }, null, 12, Q)]), o("div", { class: "text-black padding-lr-xs overflow-1 margin-top-xs", style: r({ color: `${s.setData.goodsColor}`, fontSize: `${s.setData.goodsSize}px` }) }, n(e.name), 5), o("div", { class: "text-gray text-sm overflow-1 padding-lr-xs", style: r({ color: `${s.setData.sellColor}` }) }, n(e.sellPoint), 5), o("div", W, [o("div", { class: "cu-tag bg-red radius sm margin-left-sm", style: r({ ...s.setBgStyle(s.setData.shippingBg), color: `${s.setData.shippingColor}`, borderRadius: `${s.setData.shippingRadius}px` }) }, n(s.$t("mall.pagedevise.goodsFreeShipping")), 5), e.pointsGiveSwitch == "1" ? (l(), d("div", { key: 0, style: r({ ...s.setBgStyle(s.setData.integralBg), color: `${s.setData.integralColor}`, borderRadius: `${s.setData.integralRadius}px` }), class: "cu-tag bg-orange radius sm" }, n(s.$t("mall.pagedevise.goodsPoints")), 5)) : c("", true), e.vipDiscountSwitch == "1" ? (l(), d("div", { key: 1, style: r({ ...s.vipBgStyle(s.setData.vipBg), color: `${s.setData.vipColor}`, borderRadius: `${s.setData.vipTagRadius}px` }), class: "vip-goods-tag radius sm margin-left-sm" }, " SVIP ", 4)) : c("", true)]), o("div", X, [o("div", { class: "text-gray text-sm padding-lr-xs", style: r({ color: `${s.setData.salenumColor}` }) }, n(s.$t("mall.pagedevise.goodsSold")) + n(e.saleNum), 5), o("div", { class: "text-price text-bold text-scarlet text-xl padding-right-xs", style: r({ color: `${s.setData.priceColor}`, fontSize: `${s.setData.priceSize}px` }) }, n(e.priceDown), 5)])])) : c("", true)], 4))), 128))])) : s.setData.showType == "moreCard" ? (l(), d("div", Y, [(l(true), d(D, null, b(s.setData.goodsList, (e, p) => (l(), d("div", { key: p, class: "goods-box2", style: r({ ...s.setBgStyle(s.setData.goodsBackground), borderRadius: `${s.setData.goodsRadius}px` }) }, [e ? (l(), d("div", Z, [o("div", _, [o("img", { style: r({ borderRadius: `${s.setData.radius}px`, borderTopLeftRadius: `${s.setData.goodsradius}px`, borderTopRightRadius: `${s.setData.goodsradius}px` }), src: e.picUrls[0] ? e.picUrls[0] : s.noImage, mode: "aspectFill", class: "card-img" }, null, 12, ss)]), o("div", { class: "text-black padding-lr-xs overflow-2 margin-top-xs", style: r({ color: `${s.setData.goodsColor}`, fontSize: `${s.setData.goodsSize}px` }) }, n(e.name), 5), o("div", { class: "text-price text-bold text-scarlet text-xl padding-left-xs padding-bottom-xs", style: r({ color: `${s.setData.priceColor}`, fontSize: `${s.setData.priceSize}px` }) }, n(e.priceDown), 5)])) : c("", true)], 4))), 128))])) : c("", true)])], 4)]), _: 1 }, 8, ["styles"]);
}
const ts = T(A, [["render", es], ["__scopeId", "data-v-b3759b9c"]]), ls = Object.freeze(Object.defineProperty({ __proto__: null, default: ts }, Symbol.toStringTag, { value: "Module" }));
export {
  ls as _
};
