import { l as w, s as C, W as a, m as c, a6 as u, aC as N, d as f, ah as m, aS as y, aT as S, aU as U, aV as K, I as _, aW as X, aX as q, K as Y, q as r, af as J, U as l, N as T, n as Q, aK as ee, aa as te, aY as ne } from "./index-DAdfXJ2i.js";
const oe = w({ id: "pure-app", state: () => {
  var _a, _b;
  return { sidebar: { opened: ((_a = a().getItem(`${u()}layout`)) == null ? void 0 : _a.sidebarStatus) ?? c().SidebarStatus, withoutAnimation: false, isClickCollapse: false }, layout: ((_b = a().getItem(`${u()}layout`)) == null ? void 0 : _b.layout) ?? c().Layout, device: N() ? "mobile" : "desktop", viewportSize: { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight } };
}, getters: { getSidebarStatus(e) {
  return e.sidebar.opened;
}, getDevice(e) {
  return e.device;
}, getViewportWidth(e) {
  return e.viewportSize.width;
}, getViewportHeight(e) {
  return e.viewportSize.height;
} }, actions: { TOGGLE_SIDEBAR(e, n) {
  const s = a().getItem(`${u()}layout`);
  e && n ? (this.sidebar.withoutAnimation = true, this.sidebar.opened = true, s.sidebarStatus = true) : !e && n ? (this.sidebar.withoutAnimation = true, this.sidebar.opened = false, s.sidebarStatus = false) : !e && !n && (this.sidebar.withoutAnimation = false, this.sidebar.opened = !this.sidebar.opened, this.sidebar.isClickCollapse = !this.sidebar.opened, s.sidebarStatus = this.sidebar.opened), a().setItem(`${u()}layout`, s);
}, async toggleSideBar(e, n) {
  await this.TOGGLE_SIDEBAR(e, n);
}, toggleDevice(e) {
  this.device = e;
}, setLayout(e) {
  this.layout = e;
}, setViewportSize(e) {
  this.viewportSize = e;
}, setSortSwap(e) {
  this.sortSwap = e;
} } });
function re() {
  return oe(C);
}
const se = w({ id: "pure-epTheme", state: () => {
  var _a, _b;
  return { epThemeColor: ((_a = a().getItem(`${u()}layout`)) == null ? void 0 : _a.epThemeColor) ?? c().EpThemeColor, epTheme: ((_b = a().getItem(`${u()}layout`)) == null ? void 0 : _b.theme) ?? c().Theme };
}, getters: { getEpThemeColor(e) {
  return e.epThemeColor;
}, fill(e) {
  return e.epTheme === "light" ? "#000000" : "#fff";
} }, actions: { setEpThemeColor(e) {
  const n = a().getItem(`${u()}layout`);
  this.epTheme = n == null ? void 0 : n.theme, this.epThemeColor = e, n && (n.epThemeColor = e, a().setItem(`${u()}layout`, n));
} } });
function ie() {
  return se(C);
}
function de(e, n) {
  const s = /^IF-/;
  if (s.test(e)) {
    const o = e.split(s)[1], h = o.slice(0, o.indexOf(" ") == -1 ? o.length : o.indexOf(" ")), d = o.slice(o.indexOf(" ") + 1, o.length);
    return f({ name: "FontIcon", render() {
      return m(y, { icon: h, iconType: d, ...n });
    } });
  } else return typeof e == "function" || typeof (e == null ? void 0 : e.render) == "function" ? e : typeof e == "object" ? f({ name: "OfflineIcon", render() {
    return m(S, { icon: e, ...n });
  } }) : f({ name: "Icon", render() {
    const o = e.includes("_") ? y : e && e.includes(":") ? U : S;
    return m(o, { icon: e, ...n });
  } });
}
const I = K(), ae = "/static/jpg/user-DXMup4yd.jpg", ue = { width: 24, height: 24, body: '<path fill="currentColor" d="M18 7h4v2h-6V3h2v4ZM8 9H2V7h4V3h2v6Zm10 8v4h-2v-6h6v2h-4ZM8 15v6H6v-4H2v-2h6Z"/>' }, le = { width: 24, height: 24, body: '<path fill="currentColor" d="M16 3h6v6h-2V5h-4V3ZM2 3h6v2H4v4H2V3Zm18 16v-4h2v6h-6v-2h4ZM4 19h4v2H2v-6h2v4Z"/>' }, { $t: b } = Q(), ce = "The current routing configuration is incorrect, please check the configuration";
function pe() {
  var _a;
  const e = re(), n = _().options.routes, { isFullscreen: s, toggle: o } = X(), { wholeMenus: h } = q(Y()), d = ((_a = c()) == null ? void 0 : _a.TooltipEffect) ?? "light", E = r(() => ({ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", overflow: "hidden" })), $ = r(() => {
    var _a2, _b;
    return T((_a2 = l()) == null ? void 0 : _a2.avatar) ? ae : (_b = l()) == null ? void 0 : _b.avatar;
  }), g = r(() => {
    var _a2, _b, _c;
    return T((_a2 = l()) == null ? void 0 : _a2.nickname) ? (_b = l()) == null ? void 0 : _b.username : (_c = l()) == null ? void 0 : _c.nickname;
  }), k = r(() => (t, i) => ({ background: t === i ? ie().epThemeColor : "", color: t === i ? "#f4f4f5" : "#000" })), R = r(() => (t, i) => t === i ? "" : "dark:hover:!text-primary"), H = r(() => g.value ? { marginRight: "10px" } : ""), A = r(() => !e.getSidebarStatus), M = r(() => e.getDevice), { $storage: v, $config: V } = J(), D = r(() => {
    var _a2;
    return (_a2 = v == null ? void 0 : v.layout) == null ? void 0 : _a2.layout;
  }), O = r(() => V.Title);
  function Z(t) {
    const i = c().Title;
    i ? document.title = `${b(t.title)} | ${i}` : document.title = b(t.title);
  }
  function x() {
    l().logOut();
  }
  function F() {
    var _a2;
    ee.push((_a2 = te()) == null ? void 0 : _a2.path);
  }
  function L() {
    I.emit("openPanel");
  }
  function z() {
    e.toggleSideBar();
  }
  function B(t) {
    t == null ? void 0 : t.handleResize();
  }
  function P(t) {
    var _a2;
    if (!t.children) return console.error(ce);
    const i = /^http(s?):\/\//, p = (_a2 = t.children[0]) == null ? void 0 : _a2.path;
    return i.test(p) ? t.path + "/" + p : p;
  }
  function W(t) {
    h.value.length === 0 || j(t) || I.emit("changLayoutRoute", t);
  }
  function j(t) {
    return ne.includes(t);
  }
  function G() {
    return new URL("/logo.png", import.meta.url).href;
  }
  return { title: O, device: M, layout: D, logout: x, routers: n, $storage: v, isFullscreen: s, Fullscreen: le, ExitFullscreen: ue, toggle: o, backTopMenu: F, onPanel: L, getDivStyle: E, changeTitle: Z, toggleSideBar: z, menuSelect: W, handleResize: B, resolvePath: P, getLogo: G, isCollapse: A, pureApp: e, username: g, userAvatar: $, avatarsStyle: H, tooltipEffect: d, getDropdownItemStyle: k, getDropdownItemClass: R };
}
export {
  de as a,
  pe as b,
  ue as c,
  le as d,
  I as e,
  re as f,
  ie as u
};
