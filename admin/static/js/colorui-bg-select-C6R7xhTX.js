import { c as w } from "./colorui-IwrgNBfi.js";
import { E as B, R as V, S as D, _ as y, r as s, c as u, o as g, b as r, h as d, e as i, V as m, B as z, z as c, C as S, F as U, v as L, g as N } from "./index-DAdfXJ2i.js";
const T = { components: {}, props: { themeData: { type: Object }, bgValue: { type: String } }, setup(e, o) {
  B(() => e.bgValue, (n) => {
    l.background = n;
  });
  const l = V({ background: e.bgValue, showBgDialog: false, colorList: w });
  function t() {
    l.background = "bg-" + e.themeData.backgroundColor, o.emit("onChange", l.background);
  }
  function p(n) {
    l.background = "bg-" + n.name, o.emit("onChange", l.background), l.showBgDialog = false;
  }
  function f(n) {
    l.background = n, o.emit("onChange", l.background);
  }
  return { ...D(l), onThemeBg: t, onBgColor: p, changeColor: f };
} }, $ = { class: "w-full" }, x = ["onClick"], E = { style: { "margin-top": "5px" } };
function F(e, o, l, t, p, f) {
  const n = s("el-color-picker"), b = s("el-input"), k = s("el-tooltip"), h = s("el-col"), C = s("el-row"), _ = s("el-dialog");
  return g(), u("div", $, [r(k, { effect: "dark", content: "\u8272\u503C\u4EE3\u7801\uFF0C\u5982#ffffff;\u4E5F\u53EF\u4EE5\u4F7F\u7528ColorUI\u7684\u80CC\u666F\u989C\u8272class\u540D", placement: "top" }, { default: d(() => [r(b, { modelValue: e.background, "onUpdate:modelValue": o[3] || (o[3] = (a) => e.background = a), size: "small", class: "w-full", style: { "margin-top": "3px" } }, { append: d(() => [i("div", { class: m([e.background, "flex w-[70px] cursor-pointer mr-[25px]"]) }, [l.themeData ? (g(), u("div", { key: 0, class: m(["bg-" + l.themeData.backgroundColor, "ml-[-5px] px-[5px]"]), onClick: o[0] || (o[0] = (...a) => t.onThemeBg && t.onThemeBg(...a)) }, c(e.$t("mall.pagedevise.theme")), 3)) : z("", true), i("div", { onClick: o[1] || (o[1] = S((a) => e.showBgDialog = true, ["stop"])), class: "mx-[10px]" }, c(e.$t("mall.pagedevise.preset")), 1), r(n, { size: "small", "show-alpha": "", onChange: t.changeColor, modelValue: e.background, "onUpdate:modelValue": o[2] || (o[2] = (a) => e.background = a) }, null, 8, ["onChange", "modelValue"])], 2)]), _: 1 }, 8, ["modelValue"])]), _: 1 }), r(_, { title: e.$t("mall.pagedevise.backgroundColor"), modelValue: e.showBgDialog, "onUpdate:modelValue": o[4] || (o[4] = (a) => e.showBgDialog = a), width: "40%", "append-to-body": "" }, { default: d(() => [r(C, { gutter: 20 }, { default: d(() => [(g(true), u(U, null, L(e.colorList, (a, v) => (g(), N(h, { span: 6, key: v, class: "tm-select-bg" }, { default: d(() => [i("div", { onClick: (I) => t.onBgColor(a) }, [i("div", { class: m("bg-" + a.name), style: { width: "30px", height: "30px", margin: "0 auto" } }, null, 2), i("div", E, c(a.title) + "\xA0" + c(a.name), 1)], 8, x)]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 }, 8, ["title", "modelValue"])]);
}
const M = y(T, [["render", F], ["__scopeId", "data-v-c55b6044"]]);
export {
  M as default
};
