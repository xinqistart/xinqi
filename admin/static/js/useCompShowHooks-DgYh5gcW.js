import { q as o, R as D, t as h, S as v, bu as f } from "./index-DAdfXJ2i.js";
import { _ as I, g as y, i as b, s as C } from "./base-show-pnQX27ct.js";
import { u as L } from "./pageDevise-DcQ8796K.js";
import _ from "./default-image-COzMKpJv.js";
const k = (s) => ({ components: { BaseShow: I, DefaultImage: _, ...s == null ? void 0 : s.components }, props: { pageDeviseData: { type: Object }, setData: { type: Object }, preview: { type: Boolean }, ...s == null ? void 0 : s.props }, directives: { ...s == null ? void 0 : s.directives }, setup(e, i) {
  const a = L(), t = o(() => a.themeData), u = o(() => a.pageDeviseData.shopId), g = o(() => a.pageDeviseData.clientType), c = o(() => a.pageDeviseData.pageType === "/pages/home/index"), n = D({ noImage: new URL("/static/png/img_pic@2x-B_tNuEWW.png", import.meta.url), isHomePage: c, themeData: t, clientType: g, shopId: u, goodsList: [] });
  let r = () => {
  };
  (s == null ? void 0 : s.setup) && (r = s.setup(e, i, n)), m();
  function m() {
    h(() => {
      e.setData && e.setData.goodsIds && d();
    });
  }
  function d() {
    e.setData.goodsIds.length ? y(e.setData.goodsIds).then((p) => {
      e.setData.goodsList = p;
    }) : e.setData.goodsList = [];
  }
  const l = o(() => t.value.themeColor.indexOf("gradient") !== -1 ? { backgroundImage: t.value.themeColor, color: t.value.themeTextColor, backgroundColor: "transparent" } : { backgroundColor: t.value.themeColor, color: t.value.themeTextColor, backgroundImage: "none" });
  return { isEmpty: f, setBgStyle: C, isURLIcon: b, themeStyle: l, ...v(n), ...r };
} });
export {
  k as s
};
