import d from "./base-setting-BI1Sz0yX.js";
import g from "./color-picker-select-B039aU8e.js";
import { s as b } from "./useCompSettingHooks-BBSAXeOe.js";
import { B as v } from "./pageDevise-DcQ8796K.js";
import { p as C, _ as D, r as i, c as V, o as $, b as o, h as n, f as h, z as y } from "./index-DAdfXJ2i.js";
const S = b({ setup(e, t, r) {
  const s = C(true);
  setTimeout(() => {
    s.value = false;
  }, 1e3);
  function p(_) {
    _ === true ? r.formData.menus.forEach((l) => {
      l.imageUrl = "";
    }) : r.formData.menus.forEach((l, a) => {
      l.imageUrl = v.menus[a].imageUrl;
    });
  }
  return { loading: s, diyIconChange: p };
} });
function U(e, t, r, s, p, _) {
  const l = i("el-input"), a = i("el-form-item"), f = g, u = i("el-form"), c = d;
  return $(), V("div", null, [o(c, null, { title: n(() => [h(y(e.$t("mall.pagedevise.myServices")), 1)]), content: n(() => [o(u, { ref: "form", "label-position": "left", model: e.formData }, { default: n(() => [o(a, { "label-width": "90px", label: e.$t("mall.pagedevise.title") }, { default: n(() => [o(l, { modelValue: e.formData.title, "onUpdate:modelValue": t[0] || (t[0] = (m) => e.formData.title = m), size: "small" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(a, { "label-width": "90px", label: e.$t("mall.pagedevise.textColor") }, { default: n(() => [o(f, { bgValue: e.formData.textColor, onOnChange: t[1] || (t[1] = (m) => e.formData.textColor = m) }, null, 8, ["bgValue"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 })]);
}
const k = D(S, [["render", U]]), O = Object.freeze(Object.defineProperty({ __proto__: null, default: k }, Symbol.toStringTag, { value: "Module" }));
export {
  O as _
};
