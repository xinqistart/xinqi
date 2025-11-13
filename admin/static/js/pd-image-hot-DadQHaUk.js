import { _ as L } from "./base-show-pnQX27ct.js";
import z from "./default-image-COzMKpJv.js";
import { s as $ } from "./useCompShowHooks-DgYh5gcW.js";
import { R as k, p as _, E as D, S as T, _ as X, r as w, j as x, g as b, o as h, h as P, e as v, x as y, c, B as Y, b as B, f as R, z as I, F as H, v as C, w as S } from "./index-DAdfXJ2i.js";
const F = { mounted(t, o, g, f) {
  t.onmousedown = function(i) {
    i.stopPropagation();
    const e = t.offsetWidth, l = t.offsetHeight, s = i.pageX - t.offsetLeft, d = i.pageY - t.offsetTop;
    document.onmousemove = function(a) {
      a.preventDefault(), a.pageY - d >= 0 && a.pageY - d <= o.value.outBoxSize.h - l && (t.style.top = a.pageY - d + "px"), a.pageX - s >= 0 && a.pageX - s <= o.value.outBoxSize.w - e && (t.style.left = a.pageX - s + "px"), o.value.setPosition({ left: parseFloat(t.style.left), top: parseFloat(t.style.top), index: o.value.outBoxSize.index });
    }, document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };
  };
} }, N = { mounted(t, o, g, f) {
  t.onmousedown = function(i) {
    i.stopPropagation();
    const e = t.parentNode, l = e.offsetWidth, s = e.offsetHeight, d = e.offsetLeft, a = e.offsetTop, p = i.clientX, r = i.clientY;
    document.onmousemove = function(n) {
      n.preventDefault();
      const u = Math.abs(n.clientX - p), m = Math.abs(n.clientY - r);
      n.clientX >= p && n.clientY >= r && l + u + d <= o.value.outBoxSize.w && s + m + a <= o.value.outBoxSize.h ? (e.style.width = l + u + "px", e.style.height = s + m + "px") : n.clientX < p && n.clientY < r && (e.style.width = l - u + "px", e.style.height = s - m + "px"), parseInt(e.style.width) >= 500 && (e.style.width = "500px"), parseInt(e.style.width) <= 50 && (e.style.width = "50px"), parseInt(e.style.height) >= 500 && (e.style.height = "500px"), parseInt(e.style.height) <= 50 && (e.style.height = "50px"), o.value.setPosition({ left: parseFloat(e.style.left), top: parseFloat(e.style.top), index: o.value.outBoxSize.index });
    }, document.onmouseup = function() {
      document.onmousemove = null;
    };
  };
} }, V = $({ directives: { dragSet: N, dragMove: F }, setup(t) {
  const o = k({ loading: false, hotspotsPosition: t.setData.hotspotsPosition, imageInfo: { width: 393, height: 0 } }), g = _(null), f = _(null);
  D(() => t.setData.hotspotsPosition, () => {
    o.loading = true, i();
  }), D(() => t.setData.height, () => {
    o.loading = true, i();
  });
  function i() {
    setTimeout(() => {
      const s = f.value.getBoundingClientRect();
      o.imageInfo.width = s.width, o.imageInfo.height = s.height, o.hotspotsPosition = t.setData.hotspotsPosition, o.loading = false;
    }, 200);
  }
  function e({ left: s = 0, top: d = 0, index: a = null } = {}) {
    const p = g.value[a].getBoundingClientRect(), r = t.setData.hotspotsPosition[a];
    r.boxHeight = p.height, r.boxWidth = p.width, r.boxTLPoint = { x: s, y: d };
  }
  function l(s) {
    t.setData.hotspotsPosition.splice(s, 1);
  }
  return { ...T(o), imageRef: f, dragBoxRef: g, loadImage: i, delHotspots: l, setPosition: e };
} }), W = { key: 0, ref: "imageRef" }, j = { key: 2 }, M = { id: "image-hot-set" }, E = ["title"];
function O(t, o, g, f, i, e) {
  const l = w("el-image"), s = z, d = w("el-button"), a = L, p = x("drag-set"), r = x("drag-move");
  return h(), b(a, { styles: t.setData.styles }, { default: P(() => [v("div", { class: "cp-image-hot", style: y({ ...t.setBgStyle(t.setData.background) }) }, [t.setData.imageUrl ? (h(), c("div", W, [B(l, { src: t.setData.imageUrl, style: y([{ width: "100%" }, { height: `${t.setData.height}px`, borderTopLeftRadius: `${t.setData.topLeftRadius}px`, borderTopRightRadius: `${t.setData.topRightRadius}px`, borderBottomLeftRadius: `${t.setData.bottomLeftRadius}px`, borderBottomRightRadius: `${t.setData.bottomRightRadius}px` }]), onLoad: t.loadImage }, { placeholder: P(() => [R(I(t.$t("mall.pagedevise.imageHotLoading")), 1), o[0] || (o[0] = v("span", { class: "dot" }, "...", -1))]), _: 1 }, 8, ["src", "style", "onLoad"])], 512)) : (h(), b(s, { key: 1 })), !t.loading && !t.preview ? (h(), c("div", j, [(h(true), c(H, null, C(t.hotspotsPosition, (n, u) => S((h(), c("div", { key: u, ref_for: true, ref: "dragBoxRef", class: "image-hot-container", style: y({ left: n.boxTLPoint.x + "px", top: n.boxTLPoint.y + "px", height: n.boxHeight + "px", width: n.boxWidth + "px" }) }, [R(I(u) + " ", 1), S((h(), c("div", M, [v("div", { id: "move-set", title: t.$t("mall.pagedevise.imageHotAdjustSize") }, null, 8, E)])), [[p, { setPosition: t.setPosition, outBoxSize: { w: t.imageInfo.width, h: t.setData.height, index: u } }]]), B(d, { link: "", type: "danger", icon: "Delete", class: "absolute right-0 top-0 z-10", onClick: (m) => t.delHotspots(u) }, null, 8, ["onClick"])], 4)), [[r, { setPosition: t.setPosition, outBoxSize: { w: t.imageInfo.width, h: t.setData.height, index: u } }]])), 128))])) : Y("", true)], 4)]), _: 1 }, 8, ["styles"]);
}
const U = X(V, [["render", O], ["__scopeId", "data-v-53d358f6"]]), K = Object.freeze(Object.defineProperty({ __proto__: null, default: U }, Symbol.toStringTag, { value: "Module" }));
export {
  K as _,
  U as a
};
