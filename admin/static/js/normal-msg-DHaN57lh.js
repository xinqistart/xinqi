import x from "./index-BujTjAOK.js";
import h from "./index-BUC3Zvjb.js";
import { _ as b, c as s, o as i, b as d, e as o, r, B as n, z as m, h as p, f as _, g as a } from "./index-DAdfXJ2i.js";
import "./index-sB6MalEe.js";
import "./order-store-info-DarXLMJX.js";
import "./shopstore-oR_kr_Ba.js";
import "./clientType-BhCLU4J5.js";
import "./order-goods-info-CxpE49Zn.js";
import "./orderinfo-BW26vGJU.js";
import "./supplier-CbDQWRL9.js";
import "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
import "./order-user-info-YRvKWCyA.js";
import "./order-logistics-DWwBY9ly.js";
import "./order-refunds-COLRKxYr.js";
import "./orderrefunds-9t-28G2V.js";
import "./configlogistics-CtSivpVp.js";
import "./shopinfo-DR8w8ULX.js";
import "./orderinfo-DpyYs_v8.js";
import "./orderbill-CJo17PNX.js";
import "./goods-select-DrMu2Gwf.js";
import "./goodsspu-Dmc9OYVL.js";
import "./goodsspu-DKL_9wDU.js";
import "./goods-supplier-sync-B6V0ptyp.js";
import "./suppliergoodsspuspec-DZt0HeAC.js";
import "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./goodsspecvalue-CIlXCfn0.js";
import "./goodsspec-B5ivNhww.js";
import "./suppliergoodsspu-B_JJ2gkc.js";
import "./goodsspuspec-aVm7uABh.js";
import "./pointsconfig-Df6yTocn.js";
import "./distributionconfig-DFgn2QpM.js";
import "./freighttemplat-H0ep6JZX.js";
import "./BaseEditor-CKHWT0N2.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./goods-supplier-select-Bn7KARNC.js";
import "./goods-supplier-import-Ct9VZjok.js";
import "./goods-excel-import-D-YnK_6M.js";
const k = { components: { OrderInfoDialog: x, GoodsSpuDialog: h }, props: { msgBody: { type: Object, default: () => {
} } }, data() {
  return { infoDialog: { visible: false } };
} }, w = { key: 0 }, D = ["title"], V = { class: "flex justify-between items-center" }, U = { class: "cu-tag radius bg-red margin-top-sm" }, I = { key: 0, class: "text-red text-xl text-bold margin-top-sm padding-bottom-sm" }, N = { key: 1, class: "padding-xs bg-white" }, C = { class: "flex items-center" }, O = { class: "text-center margin-right-sm" }, S = { key: 1, class: "cuIcon-link", style: { "font-size": "30px" } }, z = { style: { width: "300px" } }, G = { class: "text-gray text-sm flex aligh-center text-cut" }, j = { key: 0 };
function E(y, e, t, M, l, T) {
  const c = r("el-image"), u = r("el-button"), v = r("OrderInfoDialog"), f = r("GoodsSpuDialog"), B = r("el-dialog");
  return i(), s("div", null, [t.msgBody.type ? (i(), s("div", w, [d(c, { src: t.msgBody.imgUrl, "preview-src-list": [t.msgBody.imgUrl], class: "image-bg" }, null, 8, ["src", "preview-src-list"]), o("div", null, [o("div", { class: "margin-top-sm truncate", style: { width: "194px" }, title: t.msgBody.name }, m(t.msgBody.name), 9, D), o("div", V, [o("div", U, m(t.msgBody.type), 1), d(u, { link: "", type: "primary", size: "small", onClick: e[0] || (e[0] = (g) => l.infoDialog.visible = true) }, { default: p(() => [_(m(y.$t("mall.orderbill.view")), 1)]), _: 1 })]), t.msgBody.desc ? (i(), s("div", I, m(t.msgBody.desc), 1)) : n("", true)])])) : (i(), s("div", N, [o("div", C, [o("div", O, [t.msgBody.imgUrl ? (i(), a(c, { key: 0, src: t.msgBody.imgUrl, "preview-src-list": [t.msgBody.imgUrl], style: { width: "50px", height: "50px" } }, null, 8, ["src", "preview-src-list"])) : (i(), s("div", S))]), o("div", z, [o("div", null, m(t.msgBody.name || "\u9875\u9762"), 1), o("div", G, [e[2] || (e[2] = o("span", { class: "cuIcon-link margin-right-xs" }, null, -1)), _(m(t.msgBody.url), 1)])])])])), d(B, { modelValue: l.infoDialog.visible, "onUpdate:modelValue": e[1] || (e[1] = (g) => l.infoDialog.visible = g), width: "90%" }, { default: p(() => [l.infoDialog.visible ? (i(), s("div", j, [t.msgBody.type == "\u8BA2\u5355" ? (i(), a(v, { key: 0, "order-id": t.msgBody.id }, null, 8, ["order-id"])) : t.msgBody.type == "\u5546\u54C1" ? (i(), a(f, { key: 1, "goods-id": t.msgBody.id }, null, 8, ["goods-id"])) : n("", true)])) : n("", true)]), _: 1 }, 8, ["modelValue"])]);
}
const Ut = b(k, [["render", E]]);
export {
  Ut as default
};
