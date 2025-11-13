import { i as v } from "./colorui-IwrgNBfi.js";
import { R as y, S as b, _ as k, r as n, c as d, o as i, b as c, h as l, f as C, z as u, F as V, v as h, g as x, e as r, V as D } from "./index-DAdfXJ2i.js";
const $ = { props: { imgType: { type: String, default: "icons" } }, components: {}, setup(e, t) {
  const a = y({ iconList: v, titleIconDialog: false });
  function s(p) {
    t.emit("onChangeIcon", "cuIcon-" + p.name), a.titleIconDialog = false;
  }
  return { ...b(a), onTitleIcon: s };
} }, w = ["onClick"], z = { style: { "margin-top": "5px", "font-size": "14px", "text-align": "center" } };
function T(e, t, a, s, p, B) {
  const m = n("el-button"), _ = n("el-col"), g = n("el-row"), f = n("el-dialog");
  return i(), d("div", null, [c(m, { type: "primary", plain: "", size: "small", onClick: t[0] || (t[0] = (o) => e.titleIconDialog = true) }, { default: l(() => [C(u(e.$t("mall.pagedevise.selectTitleIcon")), 1)]), _: 1 }), c(f, { title: "\u6807\u9898\u56FE\u6807", modelValue: e.titleIconDialog, "onUpdate:modelValue": t[1] || (t[1] = (o) => e.titleIconDialog = o), width: "70%", "append-to-body": "" }, { default: l(() => [c(g, { gutter: 20 }, { default: l(() => [(i(true), d(V, null, h(e.iconList, (o, I) => (i(), x(_, { span: 4, key: I, class: "tm-select-bg" }, { default: l(() => [r("div", { onClick: (L) => s.onTitleIcon(o) }, [r("div", { class: D("cuIcon-" + o.name), style: { width: "30px", height: "30px", margin: "0 auto", "font-size": "20px" } }, null, 2), r("div", z, u(o.name), 1)], 8, w)]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 }, 8, ["modelValue"])]);
}
const F = k($, [["render", T], ["__scopeId", "data-v-b3ceb3f4"]]);
export {
  F as default
};
