import { d as p, q as c, c as o, g as l, b as t, h as r, r as s, o as e, f as _, z as d, K as u } from "./index-DAdfXJ2i.js";
import f from "./bigdatamonitoring-B6eeRFbG.js";
import "./topItem-Cw5sWAyc.js";
import "./largescreen-Cv8DzdZU.js";
import "./orderCountChart-CLUUljqK.js";
import "./index-BMoo9HBP.js";
import "./saleamountChart-v2uiuqLf.js";
import "./spusaleChart-DJDiFN68.js";
import "./orderCountBottom-MKdLR-3x.js";
import "./saleamountBottom-Bw0kcxhL.js";
import "./spusaleBottom-mrLKrTLI.js";
import "./dataAnalysis-CLHE9AQY.js";
import "./orderCountCard-CK-ZinJZ.js";
import "./salesAnalysisCard-BmsUWoeV.js";
import "./goodsHot-BdOCqbu9.js";
const k = { id: "jl-bigscreen" }, h = { key: 1 }, E = p({ __name: "fullscreen", setup(g) {
  const i = c(() => u().permissions["mall:largescreen:statistics"]);
  return (m, y) => {
    const n = s("el-link"), a = s("el-empty");
    return e(), o("div", k, [i.value ? (e(), l(f, { key: 0, isSpa: true })) : (e(), o("div", h, [t(a, { description: "403" }, { default: r(() => [t(n, { href: "/" }, { default: r(() => [_(d(m.$t("commons.backHome")), 1)]), _: 1 })]), _: 1 })]))]);
  };
} });
export {
  E as default
};
