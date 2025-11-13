import { _ as $ } from "./base-show-pnQX27ct.js";
import { s as y } from "./useCompShowHooks-DgYh5gcW.js";
import { q as R, _ as v, g as w, o, h as S, e as l, x as s, c as r, B as i, w as k, z as g, D as B, F as C, v as T } from "./index-DAdfXJ2i.js";
const I = y({ setup: (e) => {
  const u = R(() => {
    let a = "";
    return e.setData.gradientColorA && e.setData.gradientColorB ? a = `linear-gradient(${e.setData.gradientColorA} 5%, ${e.setData.gradientColorB} 60%)` : a = e.setData.gradientColorA ? e.setData.gradientColorA : e.setData.gradientColorB ? e.setData.gradientColorB : "", a;
  });
  function m(a) {
    if (a) {
      let t = a;
      return a = c(h(a)), { backgroundColor: t, "background-image": `-webkit-linear-gradient(-4deg, rgba(${a}, 1) 30%, #fff 50%, rgba(${a}, 1) 70%)!important` };
    } else return {};
  }
  function c(a) {
    var t = a.toLowerCase();
    if (t && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t)) {
      if (t.length === 4) {
        let d = "#";
        for (let n = 1; n < 4; n += 1) d += t.slice(n, n + 1).concat(t.slice(n, n + 1));
        t = d;
      }
      let f = [];
      for (let d = 1; d < 7; d += 2) f.push(parseInt("0x" + t.slice(d, d + 2)));
      return f.join(",");
    }
    return t;
  }
  function h(a) {
    const t = a.match(/(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
    if (t) {
      const D = parseInt(t[1], 10), f = parseInt(t[2], 10), d = parseInt(t[3], 10);
      let n = "#" + p(D) + p(f) + p(d);
      if (t[4]) {
        const b = Math.round(parseFloat(t[4]) * 255);
        n += p(b);
      }
      return n;
    }
    return a;
  }
  function p(a) {
    const t = a.toString(16);
    return t.length === 1 ? "0" + t : t;
  }
  return { boxBg: u, vipBgStyle: m };
} }), L = { class: "flex align-center ml-[2px] mt-[5px] mb-[5px]" }, z = ["src"], A = ["src"], G = { key: 1, class: "flex align-center justify-center padding-lr-xs padding-tb-xs" }, M = { class: "align-center mb-[5px]" };
function j(e, u, m, c, h, p) {
  const a = $;
  return o(), w(a, { styles: e.setData.styles }, { default: S(() => [l("div", { class: "goodsComponent", style: s({ ...e.setBgStyle(e.setData.background), borderTopLeftRadius: `${e.setData.topLeftRadius}px`, borderTopRightRadius: `${e.setData.topRightRadius}px`, borderBottomLeftRadius: `${e.setData.bottomLeftRadius}px`, borderBottomRightRadius: `${e.setData.bottomRightRadius}px`, background: e.boxBg }) }, [l("div", { class: "goods-row-bg", style: s([{ padding: "5px 8px", "white-space": "nowrap" }, { "background-image": e.setData.backgroundImg ? `url(${e.setData.backgroundImg})` : "", borderTopLeftRadius: `${e.setData.topLeftRadius}px`, borderTopRightRadius: `${e.setData.topRightRadius}px`, borderBottomLeftRadius: `${e.setData.bottomLeftRadius}px`, borderBottomRightRadius: `${e.setData.bottomRightRadius}px` }]) }, [l("div", { class: "flex align-center justify-between", style: s({ color: `${e.setData.titleColor}` }) }, [l("div", L, [e.setData.showTitle != "0" ? (o(), r("span", { key: 0, class: "text-df", style: s({ color: `${e.setData.titleColor}`, fontSize: `${e.setData.titleSize}px`, fontWeight: `${e.setData.fontWeight}` }) }, g(e.setData.title), 5)) : i("", true), e.setData.showTitleImage != "0" ? k((o(), r("img", { key: 1, class: "title-image margin-right-xs", src: e.setData.titleImage, style: s({ width: `${e.setData.titleImageWidth}px`, height: `${e.setData.titleImageHeight}px` }) }, null, 12, z)), [[B, e.setData.titleImage]]) : i("", true)]), e.setData.showMore != "0" ? (o(), r("div", { key: 0, class: "text-sm margin-right-xs", style: s({ color: `${e.setData.titleColor}` }) }, g(e.$t("mall.pagedevise.viewMore") + ">"), 5)) : i("", true)], 4), e.setData.goodsList && e.setData.goodsList.length > 0 ? (o(), r("div", { key: 0, class: "goods-detail mb-[5px]", style: s({ flexWrap: e.setData.rowStyle == "1" ? "wrap" : "nowrap" }) }, [(o(true), r(C, null, T(e.setData.goodsList, (t, D) => (o(), r("div", { key: D, style: s({ flexBasis: `calc(${100 / e.setData.columnNum}%)`, flexShrink: 0, flexGrow: 0, overflow: "hidden", padding: "0 4px" }) }, [t ? (o(), r("div", { key: 0, class: "item", style: s({ ...e.setBgStyle(e.setData.goodsbackground), borderRadius: `${e.setData.goodsradius}px` }) }, [l("div", { class: "img-box", style: s({ borderRadius: `${e.setData.radius}px` }) }, [l("img", { style: s({ borderRadius: `${e.setData.radius}px`, borderTopLeftRadius: `${e.setData.goodsradius}px`, borderTopRightRadius: `${e.setData.goodsradius}px`, ...e.setBgStyle(e.setData.goodsImageBackground) }), src: t.picUrls[0] ? t.picUrls[0] : e.noImage, class: "card-img" }, null, 12, A)], 4), e.setData.showGoodsName != "0" ? (o(), r("div", { key: 0, class: "goods-name flex justify-center text-black text-center text-sm overflow-1", style: s([{ "margin-right": "3px", "margin-left": "3px" }, { color: `${e.setData.goodsColor}`, fontSize: `${e.setData.goodsNameSize}px` }]) }, g(t.name), 5)) : i("", true), e.setData.showTag == "1" ? (o(), r("div", G, [l("div", { class: "cu-tag bg-red radius sm", style: s({ ...e.setBgStyle(e.setData.shippingBg), color: `${e.setData.shippingColor}`, borderRadius: `${e.setData.shippingRadius}px` }) }, g(e.$t("mall.pagedevise.goodsFreeShipping")), 5), t.pointsGiveSwitch == "1" || t.pointsDeductSwitch == "1" ? (o(), r("div", { key: 0, style: s({ ...e.setBgStyle(e.setData.integralBg), color: `${e.setData.integralColor}`, borderRadius: `${e.setData.integralRadius}px` }), class: "cu-tag bg-orange radius sm" }, g(e.$t("mall.pagedevise.goodsPoints")), 5)) : i("", true), t.vipDiscountSwitch == "1" ? (o(), r("div", { key: 1, style: s({ ...e.vipBgStyle(e.setData.vipBg), color: `${e.setData.vipColor}`, borderRadius: `${e.setData.vipTagRadius}px`, overflow: "hidden" }), class: "vip-goods-tag radius sm margin-left-xs" }, " SVIP ", 4)) : i("", true)])) : i("", true), u[0] || (u[0] = l("div", { class: "Tag-box" }, null, -1)), l("div", M, [e.setData.showGoodsPrice != "0" ? (o(), r("div", { key: 0, class: "cu-btn sm round flex price-image", style: s({ ...e.setBgStyle(e.setData.color), borderRadius: `${e.setData.priceTagRadius}px`, marginTop: `${e.setData.priceImgMarginTop}px`, "background-image": e.setData.priceImage ? `url(${e.setData.priceImage})` : "", color: `${e.setData.priceColor}`, columnGap: `${e.setData.priceGap}px` }) }, [e.setData.priceLeftText ? (o(), r("div", { key: 0, class: "price-left-text", style: s({ fontSize: `${e.setData.priceLeftTextSize}px` }) }, g(e.setData.priceLeftText), 5)) : i("", true), l("div", { class: "text-price text-df text-bold", style: s({ color: `${e.setData.priceColor}`, fontSize: `${e.setData.priceSize}px`, textAlign: e.setData.priceLeftText ? "left" : "center" }) }, g(t.priceDown), 5)], 4)) : i("", true)])], 4)) : i("", true)], 4))), 128))], 4)) : i("", true)], 4)], 4)]), _: 1 }, 8, ["styles"]);
}
const N = v(I, [["render", j], ["__scopeId", "data-v-7702efd6"]]), H = Object.freeze(Object.defineProperty({ __proto__: null, default: N }, Symbol.toStringTag, { value: "Module" }));
export {
  H as _
};
