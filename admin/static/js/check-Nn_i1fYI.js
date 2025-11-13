import { af as S, q as p, aH as L, ab as k, aI as b, p as g, m as y, aJ as M, W as N, a4 as v, aK as $, aL as z, aM as H, aN as P, E as q, ao as R, a3 as W } from "./index-DAdfXJ2i.js";
import { u as C, f as A, b as F } from "./useNav-CaFDUZom.js";
function G() {
  const { $storage: t, $config: e } = S(), n = () => {
    L().multiTagsCache && (!t.tags || t.tags.length === 0) && (t.tags = k), t.locale || (t.locale = { locale: (e == null ? void 0 : e.Locale) ?? "zh-CN" }, b().locale.value = (e == null ? void 0 : e.Locale) ?? "zh-CN"), t.layout || (t.layout = { layout: "vertical", theme: (e == null ? void 0 : e.Theme) ?? "default", darkMode: (e == null ? void 0 : e.DarkMode) ?? false, sidebarStatus: (e == null ? void 0 : e.SidebarStatus) ?? true, epThemeColor: (e == null ? void 0 : e.EpThemeColor) ?? "#000000", themeColor: (e == null ? void 0 : e.Theme) ?? "default", overallStyle: (e == null ? void 0 : e.OverallStyle) ?? "light" }), t.configure || (t.configure = { grey: (e == null ? void 0 : e.Grey) ?? false, weak: (e == null ? void 0 : e.Weak) ?? false, hideTabs: (e == null ? void 0 : e.HideTabs) ?? false, hideFooter: e.HideFooter ?? true, showLogo: (e == null ? void 0 : e.ShowLogo) ?? true, showModel: (e == null ? void 0 : e.ShowModel) ?? "smart", multiTagsCache: (e == null ? void 0 : e.MultiTagsCache) ?? false, stretch: (e == null ? void 0 : e.Stretch) ?? false });
  }, r = p(() => t == null ? void 0 : t.layout.layout), l = p(() => t.layout);
  return { layout: r, layoutTheme: l, initStorage: n };
}
function K() {
  var _a, _b;
  const { layoutTheme: t, layout: e } = G(), n = g([{ color: "#000000", themeColor: "default" }, { color: "#165bd3", themeColor: "blue" }, { color: "#ffffff", themeColor: "light" }, { color: "#722ed1", themeColor: "saucePurple" }, { color: "#eb2f96", themeColor: "pink" }, { color: "#f5222d", themeColor: "dusk" }, { color: "#fa541c", themeColor: "volcano" }, { color: "#13c2c2", themeColor: "mingQing" }, { color: "#52c41a", themeColor: "auroraGreen" }]), { $storage: r } = S(), l = g((_a = r == null ? void 0 : r.layout) == null ? void 0 : _a.darkMode), h = g((_b = r == null ? void 0 : r.layout) == null ? void 0 : _b.overallStyle), d = document.documentElement;
  function i(o, a, s) {
    const m = s || document.body;
    let { className: u } = m;
    u = u.replace(a, "").trim(), m.className = o ? `${u} ${a}` : u;
  }
  function c(o = y().Theme ?? "default", a = true) {
    var _a2, _b2;
    t.value.theme = o, document.documentElement.setAttribute("data-theme", o);
    const s = r.layout.themeColor;
    if (r.layout = { layout: e.value, theme: o, darkMode: l.value, sidebarStatus: (_a2 = r.layout) == null ? void 0 : _a2.sidebarStatus, epThemeColor: (_b2 = r.layout) == null ? void 0 : _b2.epThemeColor, themeColor: a ? o : s, overallStyle: h.value }, o === "default" || o === "light") f(y().EpThemeColor);
    else {
      const m = n.value.find((u) => u.themeColor === o);
      f(m.color);
    }
  }
  function T(o, a, s) {
    document.documentElement.style.setProperty(`--el-color-primary-${o}-${a}`, l.value ? H(s, a / 10) : P(s, a / 10));
  }
  const f = (o) => {
    C().setEpThemeColor(o), document.documentElement.style.setProperty("--el-color-primary", o);
    for (let a = 1; a <= 2; a++) T("dark", a, o);
    for (let a = 1; a <= 9; a++) T("light", a, o);
  };
  function E(o) {
    h.value = o, C().epTheme === "light" && l.value ? c("default", false) : c(C().epTheme, false), l.value ? document.documentElement.classList.add("dark") : (r.layout.themeColor === "light" && c("light", false), document.documentElement.classList.remove("dark"));
  }
  function w() {
    M(), N().clear();
    const { Grey: o, Weak: a, MultiTagsCache: s, EpThemeColor: m, Layout: u } = y();
    A().setLayout(u), f(m), v().multiTagsCacheChange(s), i(o, "html-grey", document.querySelector("html")), i(a, "html-weakness", document.querySelector("html")), $.push("/login"), v().handleTags("equal", [...k]), z(), setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  return { body: d, dataTheme: l, overallStyle: h, layoutTheme: t, themeColors: n, onReset: w, toggleClass: i, dataThemeChange: E, setEpThemeColor: f, setLayoutThemeColor: c };
}
function j(t) {
  const { $storage: e, changeTitle: n, handleResize: r } = F(), { locale: l, t: h } = b(), d = W();
  function i() {
    e.locale = { locale: "zh-CN" }, l.value = "zh-CN", t && r(t.value), window.location.reload();
  }
  function c() {
    e.locale = { locale: "en" }, l.value = "en", t && r(t.value), window.location.reload();
  }
  return q(() => l.value, () => {
    n(d.meta);
  }), R(() => {
    var _a;
    l.value = ((_a = e.locale) == null ? void 0 : _a.locale) ?? "zh-CN";
  }), { t: h, route: d, locale: l, translationCh: i, translationEn: c };
}
const x = { width: 1024, height: 1024, body: '<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>' };
export {
  G as a,
  K as b,
  x as d,
  j as u
};
