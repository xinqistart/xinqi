import { R as n, q as r, S as c, _ as m, c as e, o as s, z as p } from "./index-DAdfXJ2i.js";
const g = { props: { imgType: { type: String, default: "singleImg" } }, setup(t) {
  const a = n({}), o = r(() => {
    switch (t.imgType) {
      case "singleImg":
        return new URL("/static/png/img_pic@2x-B_tNuEWW.png", import.meta.url);
      default:
        return "";
    }
  });
  return { ...c(a), imgUrl: o };
} }, l = { class: "default-image", style: { height: "150px" } }, _ = ["src"], d = { key: 1 };
function u(t, a, o, i, f, h) {
  return s(), e("div", l, [i.imgUrl ? (s(), e("img", { key: 0, src: i.imgUrl, width: "100" }, null, 8, _)) : (s(), e("span", d, p(t.$t("commons.image")), 1))]);
}
const k = m(g, [["render", u], ["__scopeId", "data-v-d3f3995f"]]);
export {
  k as default
};
