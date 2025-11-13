import { d as R, p as m, a3 as T, u as r, A as I, E as L, t as V, r as l, j as C, c as p, o as v, e as h, w as E, b as s, h as u, f as S, H as N, _ as P } from "./index-DAdfXJ2i.js";
const $ = { style: { position: "relative" } }, D = { style: { position: "absolute", "z-index": "999", right: "8px", top: "-2px" } }, j = ["element-loading-text"], z = ["src"], A = R({ name: "FrameView", __name: "frameView", props: { frameInfo: {} }, setup(g) {
  var _a, _b, _c;
  const c = g, i = m(true), a = T(), e = m(""), d = m(null);
  ((_a = r(a.meta)) == null ? void 0 : _a.frameSrc) && (e.value = (_b = r(a.meta)) == null ? void 0 : _b.frameSrc), ((_c = r(a.meta)) == null ? void 0 : _c.frameLoading) === false && n();
  function n() {
    i.value = false;
  }
  function k() {
    N(() => {
      x();
      const t = r(d);
      if (!t) return;
      const o = t;
      o.attachEvent ? o.attachEvent("onload", () => {
        try {
          n();
        } catch {
          n();
        }
      }) : t.onload = () => {
        try {
          n();
        } catch {
          n();
        }
      };
    });
  }
  const { proxy: _ } = I();
  function x() {
    e.value.indexOf("target=_blank") != -1 ? (e.value = e.value.replace("?target=_blank", ""), window.open(e.value, "_blank")) : _.$confirm("\u5F53\u524D\u4E3A\u5916\u94FE(" + e.value + "),\u5982\u679C\u9875\u9762\u52A0\u8F7D\u5931\u8D25,\u53EF\u80FD\u662F\u5916\u94FE\u672C\u8EAB\u9519\u8BEF\uFF01", _.$t("commons.tip"), { confirmButtonText: "\u6253\u5F00\u5916\u94FE", cancelButtonText: "\u5173\u95ED", type: "warning" }).then(() => {
      window.open(e.value, "_blank");
    }).catch(() => {
    });
  }
  return L(() => a.fullPath, (t) => {
    var _a2, _b2, _c2;
    a.name === "Redirect" && t.includes((_a2 = c.frameInfo) == null ? void 0 : _a2.fullPath) && (e.value = t, i.value = true), ((_b2 = c.frameInfo) == null ? void 0 : _b2.fullPath) === t && (e.value = (_c2 = c.frameInfo) == null ? void 0 : _c2.frameSrc);
  }), V(() => {
    k();
  }), (t, o) => {
    const f = l("TopRight"), w = l("el-icon"), y = l("el-link"), b = l("el-tooltip"), B = C("loading");
    return v(), p("div", $, [h("div", D, [s(b, { effect: "dark", content: "\u63D0\u793A:\u5982\u679C\u9875\u9762\u52A0\u8F7D\u5931\u8D25,\u53EF\u80FD\u662F\u5916\u94FE\u672C\u8EAB\u9519\u8BEF,\u53EF\u4EE5\u7528\u6D4F\u89C8\u5668\u65B0\u7A97\u53E3\u6253\u5F00\u94FE\u63A5\u8BD5\u8BD5.", placement: "top" }, { default: u(() => [s(y, { type: "primary", href: e.value, target: "_blank" }, { default: u(() => [o[0] || (o[0] = S("\u6253\u5F00\u5916\u94FE", -1)), s(w, null, { default: u(() => [s(f)]), _: 1 })]), _: 1 }, 8, ["href"])]), _: 1 })]), E((v(), p("div", { class: "frame", "element-loading-text": t.$t("commons.hsLoad") }, [h("iframe", { ref_key: "frameRef", ref: d, src: e.value, class: "frame-iframe" }, null, 8, z)], 8, j)), [[B, i.value]])]);
  };
} }), H = P(A, [["__scopeId", "data-v-cb35df6f"]]);
export {
  H as default
};
