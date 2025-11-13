import { ar as On, as as mr, bc as vh, d as yh, T as _h, J as xa, q as du, p as Th, t as bh, E as Sa, ad as xh, ah as cu, V as Ea, bj as Sh } from "./index-DAdfXJ2i.js";
var Ca, fu;
function Jn() {
  if (fu) return Ca;
  fu = 1;
  var s12;
  return typeof window < "u" ? s12 = window : typeof On < "u" ? s12 = On : typeof self < "u" ? s12 = self : s12 = {}, Ca = s12, Ca;
}
var Eh = Jn();
const P = mr(Eh);
var Aa, hu;
function jl() {
  if (hu) return Aa;
  hu = 1;
  var s12 = typeof On < "u" ? On : typeof window < "u" ? window : {}, r = vh, n;
  return typeof document < "u" ? n = document : (n = s12["__GLOBAL_DOCUMENT_CACHE@4"], n || (n = s12["__GLOBAL_DOCUMENT_CACHE@4"] = r)), Aa = n, Aa;
}
var Ch = jl();
const ae = mr(Ch);
function It() {
  return It = Object.assign ? Object.assign.bind() : function(s12) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n) ({}).hasOwnProperty.call(n, i) && (s12[i] = n[i]);
    }
    return s12;
  }, It.apply(null, arguments);
}
var mn = { exports: {} }, pu;
function Ah() {
  return pu || (pu = 1, (function(s12, r) {
    function n(u) {
      if (u && typeof u == "object") {
        var l = u.which || u.keyCode || u.charCode;
        l && (u = l);
      }
      if (typeof u == "number") return a[u];
      var c = String(u), m = i[c.toLowerCase()];
      if (m) return m;
      var m = e[c.toLowerCase()];
      if (m) return m;
      if (c.length === 1) return c.charCodeAt(0);
    }
    n.isEventKey = function(l, c) {
      if (l && typeof l == "object") {
        var m = l.which || l.keyCode || l.charCode;
        if (m == null) return false;
        if (typeof c == "string") {
          var g = i[c.toLowerCase()];
          if (g) return g === m;
          var g = e[c.toLowerCase()];
          if (g) return g === m;
        } else if (typeof c == "number") return c === m;
        return false;
      }
    }, r = s12.exports = n;
    var i = r.code = r.codes = { backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, "pause/break": 19, "caps lock": 20, esc: 27, space: 32, "page up": 33, "page down": 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, delete: 46, command: 91, "left command": 91, "right command": 93, "numpad *": 106, "numpad +": 107, "numpad -": 109, "numpad .": 110, "numpad /": 111, "num lock": 144, "scroll lock": 145, "my computer": 182, "my calculator": 183, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "`": 192, "[": 219, "\\": 220, "]": 221, "'": 222 }, e = r.aliases = { windows: 91, "\u21E7": 16, "\u2325": 18, "\u2303": 17, "\u2318": 91, ctl: 17, control: 17, option: 18, pause: 19, break: 19, caps: 20, return: 13, escape: 27, spc: 32, spacebar: 32, pgup: 33, pgdn: 34, ins: 45, del: 46, cmd: 91 };
    /*!
    * Programatically add the following
    */
    for (t = 97; t < 123; t++) i[String.fromCharCode(t)] = t - 32;
    for (var t = 48; t < 58; t++) i[t - 48] = t;
    for (t = 1; t < 13; t++) i["f" + t] = t + 111;
    for (t = 0; t < 10; t++) i["numpad " + t] = t + 96;
    var a = r.names = r.title = {};
    for (t in i) a[i[t]] = t;
    for (var o in e) i[o] = e[o];
  })(mn, mn.exports)), mn.exports;
}
var Dh = Ah();
const _e = mr(Dh);
function ye(s12) {
  if (s12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s12;
}
function Kr(s12, r) {
  return Kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Kr(s12, r);
}
function oe(s12, r) {
  s12.prototype = Object.create(r.prototype), s12.prototype.constructor = s12, Kr(s12, r);
}
var Da, mu;
function wh() {
  if (mu) return Da;
  mu = 1, Da = s12;
  function s12(r, n) {
    var i, e = null;
    try {
      i = JSON.parse(r, n);
    } catch (t) {
      e = t;
    }
    return [e, i];
  }
  return Da;
}
var kh = wh();
const Ph = mr(kh);
var gn = { exports: {} }, wa = { exports: {} }, gu;
function Ih() {
  return gu || (gu = 1, (function(s12) {
    function r() {
      return s12.exports = r = Object.assign ? Object.assign.bind() : function(n) {
        for (var i = 1; i < arguments.length; i++) {
          var e = arguments[i];
          for (var t in e) ({}).hasOwnProperty.call(e, t) && (n[t] = e[t]);
        }
        return n;
      }, s12.exports.__esModule = true, s12.exports.default = s12.exports, r.apply(null, arguments);
    }
    s12.exports = r, s12.exports.__esModule = true, s12.exports.default = s12.exports;
  })(wa)), wa.exports;
}
var ka, vu;
function Oh() {
  if (vu) return ka;
  vu = 1, ka = r;
  var s12 = Object.prototype.toString;
  function r(n) {
    if (!n) return false;
    var i = s12.call(n);
    return i === "[object Function]" || typeof n == "function" && i !== "[object RegExp]" || typeof window < "u" && (n === window.setTimeout || n === window.alert || n === window.confirm || n === window.prompt);
  }
  return ka;
}
var Pa, yu;
function Lh() {
  if (yu) return Pa;
  yu = 1;
  var s12 = Jn(), r = function(e, t) {
    return t === void 0 && (t = false), function(a, o, u) {
      if (a) {
        e(a);
        return;
      }
      if (o.statusCode >= 400 && o.statusCode <= 599) {
        var l = u;
        if (t) if (s12.TextDecoder) {
          var c = n(o.headers && o.headers["content-type"]);
          try {
            l = new TextDecoder(c).decode(u);
          } catch {
          }
        } else l = String.fromCharCode.apply(null, new Uint8Array(u));
        e({ cause: l });
        return;
      }
      e(null, u);
    };
  };
  function n(i) {
    return i === void 0 && (i = ""), i.toLowerCase().split(";").reduce(function(e, t) {
      var a = t.split("="), o = a[0], u = a[1];
      return o.trim() === "charset" ? u.trim() : e;
    }, "utf-8");
  }
  return Pa = r, Pa;
}
var _u;
function Fh() {
  if (_u) return gn.exports;
  _u = 1;
  var s12 = Jn(), r = Ih(), n = Oh();
  o.httpHandler = Lh();
  /**
  * @license
  * slighly modified parse-headers 2.0.2 <https://github.com/kesla/parse-headers/>
  * Copyright (c) 2014 David Björklund
  * Available under the MIT license
  * <https://github.com/kesla/parse-headers/blob/master/LICENCE>
  */
  var i = function(g) {
    var _ = {};
    return g && g.trim().split(`
`).forEach(function(C) {
      var w = C.indexOf(":"), S = C.slice(0, w).trim().toLowerCase(), F = C.slice(w + 1).trim();
      typeof _[S] > "u" ? _[S] = F : Array.isArray(_[S]) ? _[S].push(F) : _[S] = [_[S], F];
    }), _;
  };
  gn.exports = o, gn.exports.default = o, o.XMLHttpRequest = s12.XMLHttpRequest || c, o.XDomainRequest = "withCredentials" in new o.XMLHttpRequest() ? o.XMLHttpRequest : s12.XDomainRequest, e(["get", "put", "post", "patch", "head", "delete"], function(m) {
    o[m === "delete" ? "del" : m] = function(g, _, C) {
      return _ = a(g, _, C), _.method = m.toUpperCase(), u(_);
    };
  });
  function e(m, g) {
    for (var _ = 0; _ < m.length; _++) g(m[_]);
  }
  function t(m) {
    for (var g in m) if (m.hasOwnProperty(g)) return false;
    return true;
  }
  function a(m, g, _) {
    var C = m;
    return n(g) ? (_ = g, typeof m == "string" && (C = { uri: m })) : C = r({}, g, { uri: m }), C.callback = _, C;
  }
  function o(m, g, _) {
    return g = a(m, g, _), u(g);
  }
  function u(m) {
    if (typeof m.callback > "u") throw new Error("callback argument missing");
    var g = false, _ = function(K, Y, re) {
      g || (g = true, m.callback(K, Y, re));
    };
    function C() {
      N.readyState === 4 && setTimeout(F, 0);
    }
    function w() {
      var j = void 0;
      if (N.response ? j = N.response : j = N.responseText || l(N), E) try {
        j = JSON.parse(j);
      } catch {
      }
      return j;
    }
    function S(j) {
      return clearTimeout(M), j instanceof Error || (j = new Error("" + (j || "Unknown XMLHttpRequest Error"))), j.statusCode = 0, _(j, B);
    }
    function F() {
      if (!W) {
        var j;
        clearTimeout(M), m.useXDR && N.status === void 0 ? j = 200 : j = N.status === 1223 ? 204 : N.status;
        var K = B, Y = null;
        return j !== 0 ? (K = { body: w(), statusCode: j, method: $, headers: {}, url: H, rawRequest: N }, N.getAllResponseHeaders && (K.headers = i(N.getAllResponseHeaders()))) : Y = new Error("Internal XMLHttpRequest Error"), _(Y, K, K.body);
      }
    }
    var N = m.xhr || null;
    N || (m.cors || m.useXDR ? N = new o.XDomainRequest() : N = new o.XMLHttpRequest());
    var z, W, H = N.url = m.uri || m.url, $ = N.method = m.method || "GET", R = m.body || m.data, V = N.headers = m.headers || {}, T = !!m.sync, E = false, M, B = { body: void 0, headers: {}, statusCode: 0, method: $, url: H, rawRequest: N };
    if ("json" in m && m.json !== false && (E = true, V.accept || V.Accept || (V.Accept = "application/json"), $ !== "GET" && $ !== "HEAD" && (V["content-type"] || V["Content-Type"] || (V["Content-Type"] = "application/json"), R = JSON.stringify(m.json === true ? R : m.json))), N.onreadystatechange = C, N.onload = F, N.onerror = S, N.onprogress = function() {
    }, N.onabort = function() {
      W = true;
    }, N.ontimeout = S, N.open($, H, !T, m.username, m.password), T || (N.withCredentials = !!m.withCredentials), !T && m.timeout > 0 && (M = setTimeout(function() {
      if (!W) {
        W = true, N.abort("timeout");
        var j = new Error("XMLHttpRequest timeout");
        j.code = "ETIMEDOUT", S(j);
      }
    }, m.timeout)), N.setRequestHeader) for (z in V) V.hasOwnProperty(z) && N.setRequestHeader(z, V[z]);
    else if (m.headers && !t(m.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
    return "responseType" in m && (N.responseType = m.responseType), "beforeSend" in m && typeof m.beforeSend == "function" && m.beforeSend(N), N.send(R || null), N;
  }
  function l(m) {
    try {
      if (m.responseType === "document") return m.responseXML;
      var g = m.responseXML && m.responseXML.documentElement.nodeName === "parsererror";
      if (m.responseType === "" && !g) return m.responseXML;
    } catch {
    }
    return null;
  }
  function c() {
  }
  return gn.exports;
}
var Rh = Fh();
const Hl = mr(Rh);
var Ia = { exports: {} }, Oa, Tu;
function Mh() {
  if (Tu) return Oa;
  Tu = 1;
  var s12 = jl(), r = Object.create || /* @__PURE__ */ (function() {
    function T() {
    }
    return function(E) {
      if (arguments.length !== 1) throw new Error("Object.create shim only accepts one parameter.");
      return T.prototype = E, new T();
    };
  })();
  function n(T, E) {
    this.name = "ParsingError", this.code = T.code, this.message = E || T.message;
  }
  n.prototype = r(Error.prototype), n.prototype.constructor = n, n.Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } };
  function i(T) {
    function E(B, j, K, Y) {
      return (B | 0) * 3600 + (j | 0) * 60 + (K | 0) + (Y | 0) / 1e3;
    }
    var M = T.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
    return M ? M[3] ? E(M[1], M[2], M[3].replace(":", ""), M[4]) : M[1] > 59 ? E(M[1], M[2], 0, M[4]) : E(0, M[1], M[2], M[4]) : null;
  }
  function e() {
    this.values = r(null);
  }
  e.prototype = { set: function(T, E) {
    !this.get(T) && E !== "" && (this.values[T] = E);
  }, get: function(T, E, M) {
    return M ? this.has(T) ? this.values[T] : E[M] : this.has(T) ? this.values[T] : E;
  }, has: function(T) {
    return T in this.values;
  }, alt: function(T, E, M) {
    for (var B = 0; B < M.length; ++B) if (E === M[B]) {
      this.set(T, E);
      break;
    }
  }, integer: function(T, E) {
    /^-?\d+$/.test(E) && this.set(T, parseInt(E, 10));
  }, percent: function(T, E) {
    return E.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (E = parseFloat(E), E >= 0 && E <= 100) ? (this.set(T, E), true) : false;
  } };
  function t(T, E, M, B) {
    var j = B ? T.split(B) : [T];
    for (var K in j) if (typeof j[K] == "string") {
      var Y = j[K].split(M);
      if (Y.length === 2) {
        var re = Y[0].trim(), J = Y[1].trim();
        E(re, J);
      }
    }
  }
  function a(T, E, M) {
    var B = T;
    function j() {
      var re = i(T);
      if (re === null) throw new n(n.Errors.BadTimeStamp, "Malformed timestamp: " + B);
      return T = T.replace(/^[^\sa-zA-Z-]+/, ""), re;
    }
    function K(re, J) {
      var ee = new e();
      t(re, function(Z, Q) {
        switch (Z) {
          case "region":
            for (var ie = M.length - 1; ie >= 0; ie--) if (M[ie].id === Q) {
              ee.set(Z, M[ie].region);
              break;
            }
            break;
          case "vertical":
            ee.alt(Z, Q, ["rl", "lr"]);
            break;
          case "line":
            var he = Q.split(","), me = he[0];
            ee.integer(Z, me), ee.percent(Z, me) && ee.set("snapToLines", false), ee.alt(Z, me, ["auto"]), he.length === 2 && ee.alt("lineAlign", he[1], ["start", "center", "end"]);
            break;
          case "position":
            he = Q.split(","), ee.percent(Z, he[0]), he.length === 2 && ee.alt("positionAlign", he[1], ["start", "center", "end"]);
            break;
          case "size":
            ee.percent(Z, Q);
            break;
          case "align":
            ee.alt(Z, Q, ["start", "center", "end", "left", "right"]);
            break;
        }
      }, /:/, /\s/), J.region = ee.get("region", null), J.vertical = ee.get("vertical", "");
      try {
        J.line = ee.get("line", "auto");
      } catch {
      }
      J.lineAlign = ee.get("lineAlign", "start"), J.snapToLines = ee.get("snapToLines", true), J.size = ee.get("size", 100);
      try {
        J.align = ee.get("align", "center");
      } catch {
        J.align = ee.get("align", "middle");
      }
      try {
        J.position = ee.get("position", "auto");
      } catch {
        J.position = ee.get("position", { start: 0, left: 0, center: 50, middle: 50, end: 100, right: 100 }, J.align);
      }
      J.positionAlign = ee.get("positionAlign", { start: "start", left: "start", center: "center", middle: "center", end: "end", right: "end" }, J.align);
    }
    function Y() {
      T = T.replace(/^\s+/, "");
    }
    if (Y(), E.startTime = j(), Y(), T.substr(0, 3) !== "-->") throw new n(n.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + B);
    T = T.substr(3), Y(), E.endTime = j(), Y(), K(T, E);
  }
  var o = s12.createElement && s12.createElement("textarea"), u = { c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span" }, l = { white: "rgba(255,255,255,1)", lime: "rgba(0,255,0,1)", cyan: "rgba(0,255,255,1)", red: "rgba(255,0,0,1)", yellow: "rgba(255,255,0,1)", magenta: "rgba(255,0,255,1)", blue: "rgba(0,0,255,1)", black: "rgba(0,0,0,1)" }, c = { v: "title", lang: "lang" }, m = { rt: "ruby" };
  function g(T, E) {
    function M() {
      if (!E) return null;
      function me(ce) {
        return E = E.substr(ce.length), ce;
      }
      var ge = E.match(/^([^<]*)(<[^>]*>?)?/);
      return me(ge[1] ? ge[1] : ge[2]);
    }
    function B(me) {
      return o.innerHTML = me, me = o.textContent, o.textContent = "", me;
    }
    function j(me, ge) {
      return !m[ge.localName] || m[ge.localName] === me.localName;
    }
    function K(me, ge) {
      var ce = u[me];
      if (!ce) return null;
      var Pe = T.document.createElement(ce), qe = c[me];
      return qe && ge && (Pe[qe] = ge.trim()), Pe;
    }
    for (var Y = T.document.createElement("div"), re = Y, J, ee = []; (J = M()) !== null; ) {
      if (J[0] === "<") {
        if (J[1] === "/") {
          ee.length && ee[ee.length - 1] === J.substr(2).replace(">", "") && (ee.pop(), re = re.parentNode);
          continue;
        }
        var Z = i(J.substr(1, J.length - 2)), Q;
        if (Z) {
          Q = T.document.createProcessingInstruction("timestamp", Z), re.appendChild(Q);
          continue;
        }
        var ie = J.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
        if (!ie || (Q = K(ie[1], ie[3]), !Q) || !j(re, Q)) continue;
        if (ie[2]) {
          var he = ie[2].split(".");
          he.forEach(function(me) {
            var ge = /^bg_/.test(me), ce = ge ? me.slice(3) : me;
            if (l.hasOwnProperty(ce)) {
              var Pe = ge ? "background-color" : "color", qe = l[ce];
              Q.style[Pe] = qe;
            }
          }), Q.className = he.join(" ");
        }
        ee.push(ie[1]), re.appendChild(Q), re = Q;
        continue;
      }
      re.appendChild(T.document.createTextNode(B(J)));
    }
    return Y;
  }
  var _ = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
  function C(T) {
    for (var E = 0; E < _.length; E++) {
      var M = _[E];
      if (T >= M[0] && T <= M[1]) return true;
    }
    return false;
  }
  function w(T) {
    var E = [], M = "", B;
    if (!T || !T.childNodes) return "ltr";
    function j(re, J) {
      for (var ee = J.childNodes.length - 1; ee >= 0; ee--) re.push(J.childNodes[ee]);
    }
    function K(re) {
      if (!re || !re.length) return null;
      var J = re.pop(), ee = J.textContent || J.innerText;
      if (ee) {
        var Z = ee.match(/^.*(\n|\r)/);
        return Z ? (re.length = 0, Z[0]) : ee;
      }
      if (J.tagName === "ruby") return K(re);
      if (J.childNodes) return j(re, J), K(re);
    }
    for (j(E, T); M = K(E); ) for (var Y = 0; Y < M.length; Y++) if (B = M.charCodeAt(Y), C(B)) return "rtl";
    return "ltr";
  }
  function S(T) {
    if (typeof T.line == "number" && (T.snapToLines || T.line >= 0 && T.line <= 100)) return T.line;
    if (!T.track || !T.track.textTrackList || !T.track.textTrackList.mediaElement) return -1;
    for (var E = T.track, M = E.textTrackList, B = 0, j = 0; j < M.length && M[j] !== E; j++) M[j].mode === "showing" && B++;
    return ++B * -1;
  }
  function F() {
  }
  F.prototype.applyStyles = function(T, E) {
    E = E || this.div;
    for (var M in T) T.hasOwnProperty(M) && (E.style[M] = T[M]);
  }, F.prototype.formatStyle = function(T, E) {
    return T === 0 ? 0 : T + E;
  };
  function N(T, E, M) {
    F.call(this), this.cue = E, this.cueDiv = g(T, E.text);
    var B = { color: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(0, 0, 0, 0.8)", position: "relative", left: 0, right: 0, top: 0, bottom: 0, display: "inline", writingMode: E.vertical === "" ? "horizontal-tb" : E.vertical === "lr" ? "vertical-lr" : "vertical-rl", unicodeBidi: "plaintext" };
    this.applyStyles(B, this.cueDiv), this.div = T.document.createElement("div"), B = { direction: w(this.cueDiv), writingMode: E.vertical === "" ? "horizontal-tb" : E.vertical === "lr" ? "vertical-lr" : "vertical-rl", unicodeBidi: "plaintext", textAlign: E.align === "middle" ? "center" : E.align, font: M.font, whiteSpace: "pre-line", position: "absolute" }, this.applyStyles(B), this.div.appendChild(this.cueDiv);
    var j = 0;
    switch (E.positionAlign) {
      case "start":
      case "line-left":
        j = E.position;
        break;
      case "center":
        j = E.position - E.size / 2;
        break;
      case "end":
      case "line-right":
        j = E.position - E.size;
        break;
    }
    E.vertical === "" ? this.applyStyles({ left: this.formatStyle(j, "%"), width: this.formatStyle(E.size, "%") }) : this.applyStyles({ top: this.formatStyle(j, "%"), height: this.formatStyle(E.size, "%") }), this.move = function(K) {
      this.applyStyles({ top: this.formatStyle(K.top, "px"), bottom: this.formatStyle(K.bottom, "px"), left: this.formatStyle(K.left, "px"), right: this.formatStyle(K.right, "px"), height: this.formatStyle(K.height, "px"), width: this.formatStyle(K.width, "px") });
    };
  }
  N.prototype = r(F.prototype), N.prototype.constructor = N;
  function z(T) {
    var E, M, B, j;
    if (T.div) {
      M = T.div.offsetHeight, B = T.div.offsetWidth, j = T.div.offsetTop;
      var K = (K = T.div.childNodes) && (K = K[0]) && K.getClientRects && K.getClientRects();
      T = T.div.getBoundingClientRect(), E = K ? Math.max(K[0] && K[0].height || 0, T.height / K.length) : 0;
    }
    this.left = T.left, this.right = T.right, this.top = T.top || j, this.height = T.height || M, this.bottom = T.bottom || j + (T.height || M), this.width = T.width || B, this.lineHeight = E !== void 0 ? E : T.lineHeight;
  }
  z.prototype.move = function(T, E) {
    switch (E = E !== void 0 ? E : this.lineHeight, T) {
      case "+x":
        this.left += E, this.right += E;
        break;
      case "-x":
        this.left -= E, this.right -= E;
        break;
      case "+y":
        this.top += E, this.bottom += E;
        break;
      case "-y":
        this.top -= E, this.bottom -= E;
        break;
    }
  }, z.prototype.overlaps = function(T) {
    return this.left < T.right && this.right > T.left && this.top < T.bottom && this.bottom > T.top;
  }, z.prototype.overlapsAny = function(T) {
    for (var E = 0; E < T.length; E++) if (this.overlaps(T[E])) return true;
    return false;
  }, z.prototype.within = function(T) {
    return this.top >= T.top && this.bottom <= T.bottom && this.left >= T.left && this.right <= T.right;
  }, z.prototype.overlapsOppositeAxis = function(T, E) {
    switch (E) {
      case "+x":
        return this.left < T.left;
      case "-x":
        return this.right > T.right;
      case "+y":
        return this.top < T.top;
      case "-y":
        return this.bottom > T.bottom;
    }
  }, z.prototype.intersectPercentage = function(T) {
    var E = Math.max(0, Math.min(this.right, T.right) - Math.max(this.left, T.left)), M = Math.max(0, Math.min(this.bottom, T.bottom) - Math.max(this.top, T.top)), B = E * M;
    return B / (this.height * this.width);
  }, z.prototype.toCSSCompatValues = function(T) {
    return { top: this.top - T.top, bottom: T.bottom - this.bottom, left: this.left - T.left, right: T.right - this.right, height: this.height, width: this.width };
  }, z.getSimpleBoxPosition = function(T) {
    var E = T.div ? T.div.offsetHeight : T.tagName ? T.offsetHeight : 0, M = T.div ? T.div.offsetWidth : T.tagName ? T.offsetWidth : 0, B = T.div ? T.div.offsetTop : T.tagName ? T.offsetTop : 0;
    T = T.div ? T.div.getBoundingClientRect() : T.tagName ? T.getBoundingClientRect() : T;
    var j = { left: T.left, right: T.right, top: T.top || B, height: T.height || E, bottom: T.bottom || B + (T.height || E), width: T.width || M };
    return j;
  };
  function W(T, E, M, B) {
    function j(ce, Pe) {
      for (var qe, Ie = new z(ce), Ve = 1, xt = 0; xt < Pe.length; xt++) {
        for (; ce.overlapsOppositeAxis(M, Pe[xt]) || ce.within(M) && ce.overlapsAny(B); ) ce.move(Pe[xt]);
        if (ce.within(M)) return ce;
        var $e = ce.intersectPercentage(M);
        Ve > $e && (qe = new z(ce), Ve = $e), ce = new z(Ie);
      }
      return qe || Ie;
    }
    var K = new z(E), Y = E.cue, re = S(Y), J = [];
    if (Y.snapToLines) {
      var ee;
      switch (Y.vertical) {
        case "":
          J = ["+y", "-y"], ee = "height";
          break;
        case "rl":
          J = ["+x", "-x"], ee = "width";
          break;
        case "lr":
          J = ["-x", "+x"], ee = "width";
          break;
      }
      var Z = K.lineHeight, Q = Z * Math.round(re), ie = M[ee] + Z, he = J[0];
      Math.abs(Q) > ie && (Q = Q < 0 ? -1 : 1, Q *= Math.ceil(ie / Z) * Z), re < 0 && (Q += Y.vertical === "" ? M.height : M.width, J = J.reverse()), K.move(he, Q);
    } else {
      var me = K.lineHeight / M.height * 100;
      switch (Y.lineAlign) {
        case "center":
          re -= me / 2;
          break;
        case "end":
          re -= me;
          break;
      }
      switch (Y.vertical) {
        case "":
          E.applyStyles({ top: E.formatStyle(re, "%") });
          break;
        case "rl":
          E.applyStyles({ left: E.formatStyle(re, "%") });
          break;
        case "lr":
          E.applyStyles({ right: E.formatStyle(re, "%") });
          break;
      }
      J = ["+y", "-x", "+x", "-y"], K = new z(E);
    }
    var ge = j(K, J);
    E.move(ge.toCSSCompatValues(M));
  }
  function H() {
  }
  H.StringDecoder = function() {
    return { decode: function(T) {
      if (!T) return "";
      if (typeof T != "string") throw new Error("Error - expected string data.");
      return decodeURIComponent(encodeURIComponent(T));
    } };
  }, H.convertCueToDOMTree = function(T, E) {
    return !T || !E ? null : g(T, E);
  };
  var $ = 0.05, R = "sans-serif", V = "1.5%";
  return H.processCues = function(T, E, M) {
    if (!T || !E || !M) return null;
    for (; M.firstChild; ) M.removeChild(M.firstChild);
    var B = T.document.createElement("div");
    B.style.position = "absolute", B.style.left = "0", B.style.right = "0", B.style.top = "0", B.style.bottom = "0", B.style.margin = V, M.appendChild(B);
    function j(Z) {
      for (var Q = 0; Q < Z.length; Q++) if (Z[Q].hasBeenReset || !Z[Q].displayState) return true;
      return false;
    }
    if (!j(E)) {
      for (var K = 0; K < E.length; K++) B.appendChild(E[K].displayState);
      return;
    }
    var Y = [], re = z.getSimpleBoxPosition(B), J = Math.round(re.height * $ * 100) / 100, ee = { font: J + "px " + R };
    (function() {
      for (var Z, Q, ie = 0; ie < E.length; ie++) Q = E[ie], Z = new N(T, Q, ee), B.appendChild(Z.div), W(T, Z, re, Y), Q.displayState = Z.div, Y.push(z.getSimpleBoxPosition(Z));
    })();
  }, H.Parser = function(T, E, M) {
    M || (M = E, E = {}), E || (E = {}), this.window = T, this.vttjs = E, this.state = "INITIAL", this.buffer = "", this.decoder = M || new TextDecoder("utf8"), this.regionList = [];
  }, H.Parser.prototype = { reportOrThrowError: function(T) {
    if (T instanceof n) this.onparsingerror && this.onparsingerror(T);
    else throw T;
  }, parse: function(T) {
    var E = this;
    T && (E.buffer += E.decoder.decode(T, { stream: true }));
    function M() {
      for (var Z = E.buffer, Q = 0; Q < Z.length && Z[Q] !== "\r" && Z[Q] !== `
`; ) ++Q;
      var ie = Z.substr(0, Q);
      return Z[Q] === "\r" && ++Q, Z[Q] === `
` && ++Q, E.buffer = Z.substr(Q), ie;
    }
    function B(Z) {
      var Q = new e();
      if (t(Z, function(he, me) {
        switch (he) {
          case "id":
            Q.set(he, me);
            break;
          case "width":
            Q.percent(he, me);
            break;
          case "lines":
            Q.integer(he, me);
            break;
          case "regionanchor":
          case "viewportanchor":
            var ge = me.split(",");
            if (ge.length !== 2) break;
            var ce = new e();
            if (ce.percent("x", ge[0]), ce.percent("y", ge[1]), !ce.has("x") || !ce.has("y")) break;
            Q.set(he + "X", ce.get("x")), Q.set(he + "Y", ce.get("y"));
            break;
          case "scroll":
            Q.alt(he, me, ["up"]);
            break;
        }
      }, /=/, /\s/), Q.has("id")) {
        var ie = new (E.vttjs.VTTRegion || E.window.VTTRegion)();
        ie.width = Q.get("width", 100), ie.lines = Q.get("lines", 3), ie.regionAnchorX = Q.get("regionanchorX", 0), ie.regionAnchorY = Q.get("regionanchorY", 100), ie.viewportAnchorX = Q.get("viewportanchorX", 0), ie.viewportAnchorY = Q.get("viewportanchorY", 100), ie.scroll = Q.get("scroll", ""), E.onregion && E.onregion(ie), E.regionList.push({ id: Q.get("id"), region: ie });
      }
    }
    function j(Z) {
      var Q = new e();
      t(Z, function(ie, he) {
        switch (ie) {
          case "MPEGT":
            Q.integer(ie + "S", he);
            break;
          case "LOCA":
            Q.set(ie + "L", i(he));
            break;
        }
      }, /[^\d]:/, /,/), E.ontimestampmap && E.ontimestampmap({ MPEGTS: Q.get("MPEGTS"), LOCAL: Q.get("LOCAL") });
    }
    function K(Z) {
      Z.match(/X-TIMESTAMP-MAP/) ? t(Z, function(Q, ie) {
        switch (Q) {
          case "X-TIMESTAMP-MAP":
            j(ie);
            break;
        }
      }, /=/) : t(Z, function(Q, ie) {
        switch (Q) {
          case "Region":
            B(ie);
            break;
        }
      }, /:/);
    }
    try {
      var Y;
      if (E.state === "INITIAL") {
        if (!/\r\n|\n/.test(E.buffer)) return this;
        Y = M();
        var re = Y.match(/^WEBVTT([ \t].*)?$/);
        if (!re || !re[0]) throw new n(n.Errors.BadSignature);
        E.state = "HEADER";
      }
      for (var J = false; E.buffer; ) {
        if (!/\r\n|\n/.test(E.buffer)) return this;
        switch (J ? J = false : Y = M(), E.state) {
          case "HEADER":
            /:/.test(Y) ? K(Y) : Y || (E.state = "ID");
            continue;
          case "NOTE":
            Y || (E.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(Y)) {
              E.state = "NOTE";
              break;
            }
            if (!Y) continue;
            E.cue = new (E.vttjs.VTTCue || E.window.VTTCue)(0, 0, "");
            try {
              E.cue.align = "center";
            } catch {
              E.cue.align = "middle";
            }
            if (E.state = "CUE", Y.indexOf("-->") === -1) {
              E.cue.id = Y;
              continue;
            }
          case "CUE":
            try {
              a(Y, E.cue, E.regionList);
            } catch (Z) {
              E.reportOrThrowError(Z), E.cue = null, E.state = "BADCUE";
              continue;
            }
            E.state = "CUETEXT";
            continue;
          case "CUETEXT":
            var ee = Y.indexOf("-->") !== -1;
            if (!Y || ee && (J = true)) {
              E.oncue && E.oncue(E.cue), E.cue = null, E.state = "ID";
              continue;
            }
            E.cue.text && (E.cue.text += `
`), E.cue.text += Y.replace(/\u2028/g, `
`).replace(/u2029/g, `
`);
            continue;
          case "BADCUE":
            Y || (E.state = "ID");
            continue;
        }
      }
    } catch (Z) {
      E.reportOrThrowError(Z), E.state === "CUETEXT" && E.cue && E.oncue && E.oncue(E.cue), E.cue = null, E.state = E.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }, flush: function() {
    var T = this;
    try {
      if (T.buffer += T.decoder.decode(), (T.cue || T.state === "HEADER") && (T.buffer += `

`, T.parse()), T.state === "INITIAL") throw new n(n.Errors.BadSignature);
    } catch (E) {
      T.reportOrThrowError(E);
    }
    return T.onflush && T.onflush(), this;
  } }, Oa = H, Oa;
}
var La, bu;
function Nh() {
  if (bu) return La;
  bu = 1;
  var s12 = "auto", r = { "": 1, lr: 1, rl: 1 }, n = { start: 1, center: 1, end: 1, left: 1, right: 1, auto: 1, "line-left": 1, "line-right": 1 };
  function i(a) {
    if (typeof a != "string") return false;
    var o = r[a.toLowerCase()];
    return o ? a.toLowerCase() : false;
  }
  function e(a) {
    if (typeof a != "string") return false;
    var o = n[a.toLowerCase()];
    return o ? a.toLowerCase() : false;
  }
  function t(a, o, u) {
    this.hasBeenReset = false;
    var l = "", c = false, m = a, g = o, _ = u, C = null, w = "", S = true, F = "auto", N = "start", z = "auto", W = "auto", H = 100, $ = "center";
    Object.defineProperties(this, { id: { enumerable: true, get: function() {
      return l;
    }, set: function(R) {
      l = "" + R;
    } }, pauseOnExit: { enumerable: true, get: function() {
      return c;
    }, set: function(R) {
      c = !!R;
    } }, startTime: { enumerable: true, get: function() {
      return m;
    }, set: function(R) {
      if (typeof R != "number") throw new TypeError("Start time must be set to a number.");
      m = R, this.hasBeenReset = true;
    } }, endTime: { enumerable: true, get: function() {
      return g;
    }, set: function(R) {
      if (typeof R != "number") throw new TypeError("End time must be set to a number.");
      g = R, this.hasBeenReset = true;
    } }, text: { enumerable: true, get: function() {
      return _;
    }, set: function(R) {
      _ = "" + R, this.hasBeenReset = true;
    } }, region: { enumerable: true, get: function() {
      return C;
    }, set: function(R) {
      C = R, this.hasBeenReset = true;
    } }, vertical: { enumerable: true, get: function() {
      return w;
    }, set: function(R) {
      var V = i(R);
      if (V === false) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
      w = V, this.hasBeenReset = true;
    } }, snapToLines: { enumerable: true, get: function() {
      return S;
    }, set: function(R) {
      S = !!R, this.hasBeenReset = true;
    } }, line: { enumerable: true, get: function() {
      return F;
    }, set: function(R) {
      if (typeof R != "number" && R !== s12) throw new SyntaxError("Line: an invalid number or illegal string was specified.");
      F = R, this.hasBeenReset = true;
    } }, lineAlign: { enumerable: true, get: function() {
      return N;
    }, set: function(R) {
      var V = e(R);
      V ? (N = V, this.hasBeenReset = true) : console.warn("lineAlign: an invalid or illegal string was specified.");
    } }, position: { enumerable: true, get: function() {
      return z;
    }, set: function(R) {
      if (R < 0 || R > 100) throw new Error("Position must be between 0 and 100.");
      z = R, this.hasBeenReset = true;
    } }, positionAlign: { enumerable: true, get: function() {
      return W;
    }, set: function(R) {
      var V = e(R);
      V ? (W = V, this.hasBeenReset = true) : console.warn("positionAlign: an invalid or illegal string was specified.");
    } }, size: { enumerable: true, get: function() {
      return H;
    }, set: function(R) {
      if (R < 0 || R > 100) throw new Error("Size must be between 0 and 100.");
      H = R, this.hasBeenReset = true;
    } }, align: { enumerable: true, get: function() {
      return $;
    }, set: function(R) {
      var V = e(R);
      if (!V) throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
      $ = V, this.hasBeenReset = true;
    } } }), this.displayState = void 0;
  }
  return t.prototype.getCueAsHTML = function() {
    return WebVTT.convertCueToDOMTree(window, this.text);
  }, La = t, La;
}
var Fa, xu;
function Bh() {
  if (xu) return Fa;
  xu = 1;
  var s12 = { "": true, up: true };
  function r(e) {
    if (typeof e != "string") return false;
    var t = s12[e.toLowerCase()];
    return t ? e.toLowerCase() : false;
  }
  function n(e) {
    return typeof e == "number" && e >= 0 && e <= 100;
  }
  function i() {
    var e = 100, t = 3, a = 0, o = 100, u = 0, l = 100, c = "";
    Object.defineProperties(this, { width: { enumerable: true, get: function() {
      return e;
    }, set: function(m) {
      if (!n(m)) throw new Error("Width must be between 0 and 100.");
      e = m;
    } }, lines: { enumerable: true, get: function() {
      return t;
    }, set: function(m) {
      if (typeof m != "number") throw new TypeError("Lines must be set to a number.");
      t = m;
    } }, regionAnchorY: { enumerable: true, get: function() {
      return o;
    }, set: function(m) {
      if (!n(m)) throw new Error("RegionAnchorX must be between 0 and 100.");
      o = m;
    } }, regionAnchorX: { enumerable: true, get: function() {
      return a;
    }, set: function(m) {
      if (!n(m)) throw new Error("RegionAnchorY must be between 0 and 100.");
      a = m;
    } }, viewportAnchorY: { enumerable: true, get: function() {
      return l;
    }, set: function(m) {
      if (!n(m)) throw new Error("ViewportAnchorY must be between 0 and 100.");
      l = m;
    } }, viewportAnchorX: { enumerable: true, get: function() {
      return u;
    }, set: function(m) {
      if (!n(m)) throw new Error("ViewportAnchorX must be between 0 and 100.");
      u = m;
    } }, scroll: { enumerable: true, get: function() {
      return c;
    }, set: function(m) {
      var g = r(m);
      g === false ? console.warn("Scroll: an invalid or illegal string was specified.") : c = g;
    } } });
  }
  return Fa = i, Fa;
}
var Su;
function Uh() {
  if (Su) return Ia.exports;
  Su = 1;
  var s12 = Jn(), r = Ia.exports = { WebVTT: Mh(), VTTCue: Nh(), VTTRegion: Bh() };
  s12.vttjs = r, s12.WebVTT = r.WebVTT;
  var n = r.VTTCue, i = r.VTTRegion, e = s12.VTTCue, t = s12.VTTRegion;
  return r.shim = function() {
    s12.VTTCue = n, s12.VTTRegion = i;
  }, r.restore = function() {
    s12.VTTCue = e, s12.VTTRegion = t;
  }, s12.VTTCue || r.shim(), Ia.exports;
}
var qh = Uh();
const Eu = mr(qh);
function Wl() {
  try {
    var s12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wl = function() {
    return !!s12;
  })();
}
function Gl(s12, r, n) {
  if (Wl()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, r);
  var e = new (s12.bind.apply(s12, i))();
  return n && Kr(e, n.prototype), e;
}
function Vh(s12, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  s12.prototype = Object.create(r && r.prototype, { constructor: { value: s12, writable: true, configurable: true } }), Object.defineProperty(s12, "prototype", { writable: false }), r && Kr(s12, r);
}
var Ra = { exports: {} }, Cu;
function jh() {
  return Cu || (Cu = 1, (function(s12, r) {
    (function(n) {
      var i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, e = /^(?=([^\/?#]*))\1([^]*)$/, t = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = { buildAbsoluteURL: function(u, l, c) {
        if (c = c || {}, u = u.trim(), l = l.trim(), !l) {
          if (!c.alwaysNormalize) return u;
          var m = o.parseURL(u);
          if (!m) throw new Error("Error trying to parse base URL.");
          return m.path = o.normalizePath(m.path), o.buildURLFromParts(m);
        }
        var g = o.parseURL(l);
        if (!g) throw new Error("Error trying to parse relative URL.");
        if (g.scheme) return c.alwaysNormalize ? (g.path = o.normalizePath(g.path), o.buildURLFromParts(g)) : l;
        var _ = o.parseURL(u);
        if (!_) throw new Error("Error trying to parse base URL.");
        if (!_.netLoc && _.path && _.path[0] !== "/") {
          var C = e.exec(_.path);
          _.netLoc = C[1], _.path = C[2];
        }
        _.netLoc && !_.path && (_.path = "/");
        var w = { scheme: _.scheme, netLoc: g.netLoc, path: null, params: g.params, query: g.query, fragment: g.fragment };
        if (!g.netLoc && (w.netLoc = _.netLoc, g.path[0] !== "/")) if (!g.path) w.path = _.path, g.params || (w.params = _.params, g.query || (w.query = _.query));
        else {
          var S = _.path, F = S.substring(0, S.lastIndexOf("/") + 1) + g.path;
          w.path = o.normalizePath(F);
        }
        return w.path === null && (w.path = c.alwaysNormalize ? o.normalizePath(g.path) : g.path), o.buildURLFromParts(w);
      }, parseURL: function(u) {
        var l = i.exec(u);
        return l ? { scheme: l[1] || "", netLoc: l[2] || "", path: l[3] || "", params: l[4] || "", query: l[5] || "", fragment: l[6] || "" } : null;
      }, normalizePath: function(u) {
        for (u = u.split("").reverse().join("").replace(t, ""); u.length !== (u = u.replace(a, "")).length; ) ;
        return u.split("").reverse().join("");
      }, buildURLFromParts: function(u) {
        return u.scheme + u.netLoc + u.path + u.params + u.query + u.fragment;
      } };
      s12.exports = o;
    })();
  })(Ra)), Ra.exports;
}
var Hh = jh();
const Au = mr(Hh);
var Du = "http://example.com", Zn = function(r, n) {
  if (/^[a-z]+:/i.test(n)) return n;
  /^data:/.test(r) && (r = P.location && P.location.href || "");
  var i = typeof P.URL == "function", e = /^\/\//.test(r), t = !P.location && !/\/\//i.test(r);
  if (i ? r = new P.URL(r, P.location || Du) : /\/\//i.test(r) || (r = Au.buildAbsoluteURL(P.location && P.location.href || "", r)), i) {
    var a = new URL(n, r);
    return t ? a.href.slice(Du.length) : e ? a.href.slice(a.protocol.length) : a.href;
  }
  return Au.buildAbsoluteURL(r, n);
}, Rs = (function() {
  function s12() {
    this.listeners = {};
  }
  var r = s12.prototype;
  return r.on = function(i, e) {
    this.listeners[i] || (this.listeners[i] = []), this.listeners[i].push(e);
  }, r.off = function(i, e) {
    if (!this.listeners[i]) return false;
    var t = this.listeners[i].indexOf(e);
    return this.listeners[i] = this.listeners[i].slice(0), this.listeners[i].splice(t, 1), t > -1;
  }, r.trigger = function(i) {
    var e = this.listeners[i];
    if (e) if (arguments.length === 2) for (var t = e.length, a = 0; a < t; ++a) e[a].call(this, arguments[1]);
    else for (var o = Array.prototype.slice.call(arguments, 1), u = e.length, l = 0; l < u; ++l) e[l].apply(this, o);
  }, r.dispose = function() {
    this.listeners = {};
  }, r.pipe = function(i) {
    this.on("data", function(e) {
      i.push(e);
    });
  }, s12;
})(), Wh = function(r) {
  return P.atob ? P.atob(r) : Buffer.from(r, "base64").toString("binary");
};
function zl(s12) {
  for (var r = Wh(s12), n = new Uint8Array(r.length), i = 0; i < r.length; i++) n[i] = r.charCodeAt(i);
  return n;
}
/*! @name m3u8-parser @version 4.8.0 @license Apache-2.0 */
var Gh = (function(s12) {
  oe(r, s12);
  function r() {
    var i;
    return i = s12.call(this) || this, i.buffer = "", i;
  }
  var n = r.prototype;
  return n.push = function(e) {
    var t;
    for (this.buffer += e, t = this.buffer.indexOf(`
`); t > -1; t = this.buffer.indexOf(`
`)) this.trigger("data", this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1);
  }, r;
})(Rs), zh = "	", Ma = function(r) {
  var n = /([0-9.]*)?@?([0-9.]*)?/.exec(r || ""), i = {};
  return n[1] && (i.length = parseInt(n[1], 10)), n[2] && (i.offset = parseInt(n[2], 10)), i;
}, Kh = function() {
  var r = "[^=]*", n = '"[^"]*"|[^,]*', i = "(?:" + r + ")=(?:" + n + ")";
  return new RegExp("(?:^|,)(" + i + ")");
}, wt = function(r) {
  for (var n = r.split(Kh()), i = {}, e = n.length, t; e--; ) n[e] !== "" && (t = /([^=]*)=(.*)/.exec(n[e]).slice(1), t[0] = t[0].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"), i[t[0]] = t[1]);
  return i;
}, Xh = (function(s12) {
  oe(r, s12);
  function r() {
    var i;
    return i = s12.call(this) || this, i.customParsers = [], i.tagMappers = [], i;
  }
  var n = r.prototype;
  return n.push = function(e) {
    var t = this, a, o;
    if (e = e.trim(), e.length !== 0) {
      if (e[0] !== "#") {
        this.trigger("data", { type: "uri", uri: e });
        return;
      }
      var u = this.tagMappers.reduce(function(l, c) {
        var m = c(e);
        return m === e ? l : l.concat([m]);
      }, [e]);
      u.forEach(function(l) {
        for (var c = 0; c < t.customParsers.length; c++) if (t.customParsers[c].call(t, l)) return;
        if (l.indexOf("#EXT") !== 0) {
          t.trigger("data", { type: "comment", text: l.slice(1) });
          return;
        }
        if (l = l.replace("\r", ""), a = /^#EXTM3U/.exec(l), a) {
          t.trigger("data", { type: "tag", tagType: "m3u" });
          return;
        }
        if (a = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(l), a) {
          o = { type: "tag", tagType: "inf" }, a[1] && (o.duration = parseFloat(a[1])), a[2] && (o.title = a[2]), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(l), a) {
          o = { type: "tag", tagType: "targetduration" }, a[1] && (o.duration = parseInt(a[1], 10)), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(l), a) {
          o = { type: "tag", tagType: "version" }, a[1] && (o.version = parseInt(a[1], 10)), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(l), a) {
          o = { type: "tag", tagType: "media-sequence" }, a[1] && (o.number = parseInt(a[1], 10)), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(l), a) {
          o = { type: "tag", tagType: "discontinuity-sequence" }, a[1] && (o.number = parseInt(a[1], 10)), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(l), a) {
          o = { type: "tag", tagType: "playlist-type" }, a[1] && (o.playlistType = a[1]), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-BYTERANGE:?(.*)?$/.exec(l), a) {
          o = It(Ma(a[1]), { type: "tag", tagType: "byterange" }), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(l), a) {
          o = { type: "tag", tagType: "allow-cache" }, a[1] && (o.allowed = !/NO/.test(a[1])), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-MAP:?(.*)$/.exec(l), a) {
          if (o = { type: "tag", tagType: "map" }, a[1]) {
            var m = wt(a[1]);
            m.URI && (o.uri = m.URI), m.BYTERANGE && (o.byterange = Ma(m.BYTERANGE));
          }
          t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-STREAM-INF:?(.*)$/.exec(l), a) {
          if (o = { type: "tag", tagType: "stream-inf" }, a[1]) {
            if (o.attributes = wt(a[1]), o.attributes.RESOLUTION) {
              var g = o.attributes.RESOLUTION.split("x"), _ = {};
              g[0] && (_.width = parseInt(g[0], 10)), g[1] && (_.height = parseInt(g[1], 10)), o.attributes.RESOLUTION = _;
            }
            o.attributes.BANDWIDTH && (o.attributes.BANDWIDTH = parseInt(o.attributes.BANDWIDTH, 10)), o.attributes["FRAME-RATE"] && (o.attributes["FRAME-RATE"] = parseFloat(o.attributes["FRAME-RATE"])), o.attributes["PROGRAM-ID"] && (o.attributes["PROGRAM-ID"] = parseInt(o.attributes["PROGRAM-ID"], 10));
          }
          t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-MEDIA:?(.*)$/.exec(l), a) {
          o = { type: "tag", tagType: "media" }, a[1] && (o.attributes = wt(a[1])), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-ENDLIST/.exec(l), a) {
          t.trigger("data", { type: "tag", tagType: "endlist" });
          return;
        }
        if (a = /^#EXT-X-DISCONTINUITY/.exec(l), a) {
          t.trigger("data", { type: "tag", tagType: "discontinuity" });
          return;
        }
        if (a = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(l), a) {
          o = { type: "tag", tagType: "program-date-time" }, a[1] && (o.dateTimeString = a[1], o.dateTimeObject = new Date(a[1])), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-KEY:?(.*)$/.exec(l), a) {
          o = { type: "tag", tagType: "key" }, a[1] && (o.attributes = wt(a[1]), o.attributes.IV && (o.attributes.IV.substring(0, 2).toLowerCase() === "0x" && (o.attributes.IV = o.attributes.IV.substring(2)), o.attributes.IV = o.attributes.IV.match(/.{8}/g), o.attributes.IV[0] = parseInt(o.attributes.IV[0], 16), o.attributes.IV[1] = parseInt(o.attributes.IV[1], 16), o.attributes.IV[2] = parseInt(o.attributes.IV[2], 16), o.attributes.IV[3] = parseInt(o.attributes.IV[3], 16), o.attributes.IV = new Uint32Array(o.attributes.IV))), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-START:?(.*)$/.exec(l), a) {
          o = { type: "tag", tagType: "start" }, a[1] && (o.attributes = wt(a[1]), o.attributes["TIME-OFFSET"] = parseFloat(o.attributes["TIME-OFFSET"]), o.attributes.PRECISE = /YES/.test(o.attributes.PRECISE)), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(l), a) {
          o = { type: "tag", tagType: "cue-out-cont" }, a[1] ? o.data = a[1] : o.data = "", t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(l), a) {
          o = { type: "tag", tagType: "cue-out" }, a[1] ? o.data = a[1] : o.data = "", t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-CUE-IN:?(.*)?$/.exec(l), a) {
          o = { type: "tag", tagType: "cue-in" }, a[1] ? o.data = a[1] : o.data = "", t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-SKIP:(.*)$/.exec(l), a && a[1]) {
          o = { type: "tag", tagType: "skip" }, o.attributes = wt(a[1]), o.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (o.attributes["SKIPPED-SEGMENTS"] = parseInt(o.attributes["SKIPPED-SEGMENTS"], 10)), o.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (o.attributes["RECENTLY-REMOVED-DATERANGES"] = o.attributes["RECENTLY-REMOVED-DATERANGES"].split(zh)), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-PART:(.*)$/.exec(l), a && a[1]) {
          o = { type: "tag", tagType: "part" }, o.attributes = wt(a[1]), ["DURATION"].forEach(function(C) {
            o.attributes.hasOwnProperty(C) && (o.attributes[C] = parseFloat(o.attributes[C]));
          }), ["INDEPENDENT", "GAP"].forEach(function(C) {
            o.attributes.hasOwnProperty(C) && (o.attributes[C] = /YES/.test(o.attributes[C]));
          }), o.attributes.hasOwnProperty("BYTERANGE") && (o.attributes.byterange = Ma(o.attributes.BYTERANGE)), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(l), a && a[1]) {
          o = { type: "tag", tagType: "server-control" }, o.attributes = wt(a[1]), ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function(C) {
            o.attributes.hasOwnProperty(C) && (o.attributes[C] = parseFloat(o.attributes[C]));
          }), ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function(C) {
            o.attributes.hasOwnProperty(C) && (o.attributes[C] = /YES/.test(o.attributes[C]));
          }), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-PART-INF:(.*)$/.exec(l), a && a[1]) {
          o = { type: "tag", tagType: "part-inf" }, o.attributes = wt(a[1]), ["PART-TARGET"].forEach(function(C) {
            o.attributes.hasOwnProperty(C) && (o.attributes[C] = parseFloat(o.attributes[C]));
          }), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(l), a && a[1]) {
          o = { type: "tag", tagType: "preload-hint" }, o.attributes = wt(a[1]), ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function(C) {
            if (o.attributes.hasOwnProperty(C)) {
              o.attributes[C] = parseInt(o.attributes[C], 10);
              var w = C === "BYTERANGE-LENGTH" ? "length" : "offset";
              o.attributes.byterange = o.attributes.byterange || {}, o.attributes.byterange[w] = o.attributes[C], delete o.attributes[C];
            }
          }), t.trigger("data", o);
          return;
        }
        if (a = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(l), a && a[1]) {
          o = { type: "tag", tagType: "rendition-report" }, o.attributes = wt(a[1]), ["LAST-MSN", "LAST-PART"].forEach(function(C) {
            o.attributes.hasOwnProperty(C) && (o.attributes[C] = parseInt(o.attributes[C], 10));
          }), t.trigger("data", o);
          return;
        }
        t.trigger("data", { type: "tag", data: l.slice(4) });
      });
    }
  }, n.addParser = function(e) {
    var t = this, a = e.expression, o = e.customType, u = e.dataParser, l = e.segment;
    typeof u != "function" && (u = function(m) {
      return m;
    }), this.customParsers.push(function(c) {
      var m = a.exec(c);
      if (m) return t.trigger("data", { type: "custom", data: u(c), customType: o, segment: l }), true;
    });
  }, n.addTagMapper = function(e) {
    var t = e.expression, a = e.map, o = function(l) {
      return t.test(l) ? a(l) : l;
    };
    this.tagMappers.push(o);
  }, r;
})(Rs), $h = function(r) {
  return r.toLowerCase().replace(/-(\w)/g, function(n) {
    return n[1].toUpperCase();
  });
}, Nr = function(r) {
  var n = {};
  return Object.keys(r).forEach(function(i) {
    n[$h(i)] = r[i];
  }), n;
}, Na = function(r) {
  var n = r.serverControl, i = r.targetDuration, e = r.partTargetDuration;
  if (n) {
    var t = "#EXT-X-SERVER-CONTROL", a = "holdBack", o = "partHoldBack", u = i && i * 3, l = e && e * 2;
    i && !n.hasOwnProperty(a) && (n[a] = u, this.trigger("info", { message: t + " defaulting HOLD-BACK to targetDuration * 3 (" + u + ")." })), u && n[a] < u && (this.trigger("warn", { message: t + " clamping HOLD-BACK (" + n[a] + ") to targetDuration * 3 (" + u + ")" }), n[a] = u), e && !n.hasOwnProperty(o) && (n[o] = e * 3, this.trigger("info", { message: t + " defaulting PART-HOLD-BACK to partTargetDuration * 3 (" + n[o] + ")." })), e && n[o] < l && (this.trigger("warn", { message: t + " clamping PART-HOLD-BACK (" + n[o] + ") to partTargetDuration * 2 (" + l + ")." }), n[o] = l);
  }
}, Yh = (function(s12) {
  oe(r, s12);
  function r() {
    var i;
    i = s12.call(this) || this, i.lineStream = new Gh(), i.parseStream = new Xh(), i.lineStream.pipe(i.parseStream);
    var e = ye(i), t = [], a = {}, o, u, l = false, c = function() {
    }, m = { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, g = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", _ = 0;
    i.manifest = { allowCache: true, discontinuityStarts: [], segments: [] };
    var C = 0, w = 0;
    return i.on("end", function() {
      a.uri || !a.parts && !a.preloadHints || (!a.map && o && (a.map = o), !a.key && u && (a.key = u), !a.timeline && typeof _ == "number" && (a.timeline = _), i.manifest.preloadSegment = a);
    }), i.parseStream.on("data", function(S) {
      var F, N;
      ({ tag: function() {
        ({ version: function() {
          S.version && (this.manifest.version = S.version);
        }, "allow-cache": function() {
          this.manifest.allowCache = S.allowed, "allowed" in S || (this.trigger("info", { message: "defaulting allowCache to YES" }), this.manifest.allowCache = true);
        }, byterange: function() {
          var H = {};
          "length" in S && (a.byterange = H, H.length = S.length, "offset" in S || (S.offset = C)), "offset" in S && (a.byterange = H, H.offset = S.offset), C = H.offset + H.length;
        }, endlist: function() {
          this.manifest.endList = true;
        }, inf: function() {
          "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", { message: "defaulting media sequence to zero" })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", { message: "defaulting discontinuity sequence to zero" })), S.duration > 0 && (a.duration = S.duration), S.duration === 0 && (a.duration = 0.01, this.trigger("info", { message: "updating zero segment duration to a small value" })), this.manifest.segments = t;
        }, key: function() {
          if (!S.attributes) {
            this.trigger("warn", { message: "ignoring key declaration without attribute list" });
            return;
          }
          if (S.attributes.METHOD === "NONE") {
            u = null;
            return;
          }
          if (!S.attributes.URI) {
            this.trigger("warn", { message: "ignoring key declaration without URI" });
            return;
          }
          if (S.attributes.KEYFORMAT === "com.apple.streamingkeydelivery") {
            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.apple.fps.1_0"] = { attributes: S.attributes };
            return;
          }
          if (S.attributes.KEYFORMAT === "com.microsoft.playready") {
            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.microsoft.playready"] = { uri: S.attributes.URI };
            return;
          }
          if (S.attributes.KEYFORMAT === g) {
            var H = ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"];
            if (H.indexOf(S.attributes.METHOD) === -1) {
              this.trigger("warn", { message: "invalid key method provided for Widevine" });
              return;
            }
            if (S.attributes.METHOD === "SAMPLE-AES-CENC" && this.trigger("warn", { message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead" }), S.attributes.URI.substring(0, 23) !== "data:text/plain;base64,") {
              this.trigger("warn", { message: "invalid key URI provided for Widevine" });
              return;
            }
            if (!(S.attributes.KEYID && S.attributes.KEYID.substring(0, 2) === "0x")) {
              this.trigger("warn", { message: "invalid key ID provided for Widevine" });
              return;
            }
            this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.widevine.alpha"] = { attributes: { schemeIdUri: S.attributes.KEYFORMAT, keyId: S.attributes.KEYID.substring(2) }, pssh: zl(S.attributes.URI.split(",")[1]) };
            return;
          }
          S.attributes.METHOD || this.trigger("warn", { message: "defaulting key method to AES-128" }), u = { method: S.attributes.METHOD || "AES-128", uri: S.attributes.URI }, typeof S.attributes.IV < "u" && (u.iv = S.attributes.IV);
        }, "media-sequence": function() {
          if (!isFinite(S.number)) {
            this.trigger("warn", { message: "ignoring invalid media sequence: " + S.number });
            return;
          }
          this.manifest.mediaSequence = S.number;
        }, "discontinuity-sequence": function() {
          if (!isFinite(S.number)) {
            this.trigger("warn", { message: "ignoring invalid discontinuity sequence: " + S.number });
            return;
          }
          this.manifest.discontinuitySequence = S.number, _ = S.number;
        }, "playlist-type": function() {
          if (!/VOD|EVENT/.test(S.playlistType)) {
            this.trigger("warn", { message: "ignoring unknown playlist type: " + S.playlist });
            return;
          }
          this.manifest.playlistType = S.playlistType;
        }, map: function() {
          o = {}, S.uri && (o.uri = S.uri), S.byterange && (o.byterange = S.byterange), u && (o.key = u);
        }, "stream-inf": function() {
          if (this.manifest.playlists = t, this.manifest.mediaGroups = this.manifest.mediaGroups || m, !S.attributes) {
            this.trigger("warn", { message: "ignoring empty stream-inf attributes" });
            return;
          }
          a.attributes || (a.attributes = {}), It(a.attributes, S.attributes);
        }, media: function() {
          if (this.manifest.mediaGroups = this.manifest.mediaGroups || m, !(S.attributes && S.attributes.TYPE && S.attributes["GROUP-ID"] && S.attributes.NAME)) {
            this.trigger("warn", { message: "ignoring incomplete or missing media group" });
            return;
          }
          var H = this.manifest.mediaGroups[S.attributes.TYPE];
          H[S.attributes["GROUP-ID"]] = H[S.attributes["GROUP-ID"]] || {}, F = H[S.attributes["GROUP-ID"]], N = { default: /yes/i.test(S.attributes.DEFAULT) }, N.default ? N.autoselect = true : N.autoselect = /yes/i.test(S.attributes.AUTOSELECT), S.attributes.LANGUAGE && (N.language = S.attributes.LANGUAGE), S.attributes.URI && (N.uri = S.attributes.URI), S.attributes["INSTREAM-ID"] && (N.instreamId = S.attributes["INSTREAM-ID"]), S.attributes.CHARACTERISTICS && (N.characteristics = S.attributes.CHARACTERISTICS), S.attributes.FORCED && (N.forced = /yes/i.test(S.attributes.FORCED)), F[S.attributes.NAME] = N;
        }, discontinuity: function() {
          _ += 1, a.discontinuity = true, this.manifest.discontinuityStarts.push(t.length);
        }, "program-date-time": function() {
          typeof this.manifest.dateTimeString > "u" && (this.manifest.dateTimeString = S.dateTimeString, this.manifest.dateTimeObject = S.dateTimeObject), a.dateTimeString = S.dateTimeString, a.dateTimeObject = S.dateTimeObject;
        }, targetduration: function() {
          if (!isFinite(S.duration) || S.duration < 0) {
            this.trigger("warn", { message: "ignoring invalid target duration: " + S.duration });
            return;
          }
          this.manifest.targetDuration = S.duration, Na.call(this, this.manifest);
        }, start: function() {
          if (!S.attributes || isNaN(S.attributes["TIME-OFFSET"])) {
            this.trigger("warn", { message: "ignoring start declaration without appropriate attribute list" });
            return;
          }
          this.manifest.start = { timeOffset: S.attributes["TIME-OFFSET"], precise: S.attributes.PRECISE };
        }, "cue-out": function() {
          a.cueOut = S.data;
        }, "cue-out-cont": function() {
          a.cueOutCont = S.data;
        }, "cue-in": function() {
          a.cueIn = S.data;
        }, skip: function() {
          this.manifest.skip = Nr(S.attributes), this.warnOnMissingAttributes_("#EXT-X-SKIP", S.attributes, ["SKIPPED-SEGMENTS"]);
        }, part: function() {
          var H = this;
          l = true;
          var $ = this.manifest.segments.length, R = Nr(S.attributes);
          a.parts = a.parts || [], a.parts.push(R), R.byterange && (R.byterange.hasOwnProperty("offset") || (R.byterange.offset = w), w = R.byterange.offset + R.byterange.length);
          var V = a.parts.length - 1;
          this.warnOnMissingAttributes_("#EXT-X-PART #" + V + " for segment #" + $, S.attributes, ["URI", "DURATION"]), this.manifest.renditionReports && this.manifest.renditionReports.forEach(function(T, E) {
            T.hasOwnProperty("lastPart") || H.trigger("warn", { message: "#EXT-X-RENDITION-REPORT #" + E + " lacks required attribute(s): LAST-PART" });
          });
        }, "server-control": function() {
          var H = this.manifest.serverControl = Nr(S.attributes);
          H.hasOwnProperty("canBlockReload") || (H.canBlockReload = false, this.trigger("info", { message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false" })), Na.call(this, this.manifest), H.canSkipDateranges && !H.hasOwnProperty("canSkipUntil") && this.trigger("warn", { message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set" });
        }, "preload-hint": function() {
          var H = this.manifest.segments.length, $ = Nr(S.attributes), R = $.type && $.type === "PART";
          a.preloadHints = a.preloadHints || [], a.preloadHints.push($), $.byterange && ($.byterange.hasOwnProperty("offset") || ($.byterange.offset = R ? w : 0, R && (w = $.byterange.offset + $.byterange.length)));
          var V = a.preloadHints.length - 1;
          if (this.warnOnMissingAttributes_("#EXT-X-PRELOAD-HINT #" + V + " for segment #" + H, S.attributes, ["TYPE", "URI"]), !!$.type) for (var T = 0; T < a.preloadHints.length - 1; T++) {
            var E = a.preloadHints[T];
            E.type && E.type === $.type && this.trigger("warn", { message: "#EXT-X-PRELOAD-HINT #" + V + " for segment #" + H + " has the same TYPE " + $.type + " as preload hint #" + T });
          }
        }, "rendition-report": function() {
          var H = Nr(S.attributes);
          this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(H);
          var $ = this.manifest.renditionReports.length - 1, R = ["LAST-MSN", "URI"];
          l && R.push("LAST-PART"), this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #" + $, S.attributes, R);
        }, "part-inf": function() {
          this.manifest.partInf = Nr(S.attributes), this.warnOnMissingAttributes_("#EXT-X-PART-INF", S.attributes, ["PART-TARGET"]), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), Na.call(this, this.manifest);
        } }[S.tagType] || c).call(e);
      }, uri: function() {
        a.uri = S.uri, t.push(a), this.manifest.targetDuration && !("duration" in a) && (this.trigger("warn", { message: "defaulting segment duration to the target duration" }), a.duration = this.manifest.targetDuration), u && (a.key = u), a.timeline = _, o && (a.map = o), w = 0, a = {};
      }, comment: function() {
      }, custom: function() {
        S.segment ? (a.custom = a.custom || {}, a.custom[S.customType] = S.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[S.customType] = S.data);
      } })[S.type].call(e);
    }), i;
  }
  var n = r.prototype;
  return n.warnOnMissingAttributes_ = function(e, t, a) {
    var o = [];
    a.forEach(function(u) {
      t.hasOwnProperty(u) || o.push(u);
    }), o.length && this.trigger("warn", { message: e + " lacks required attribute(s): " + o.join(", ") });
  }, n.push = function(e) {
    this.lineStream.push(e);
  }, n.end = function() {
    this.lineStream.push(`
`), this.trigger("end");
  }, n.addParser = function(e) {
    this.parseStream.addParser(e);
  }, n.addTagMapper = function(e) {
    this.parseStream.addTagMapper(e);
  }, r;
})(Rs), kr = { mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/, webm: /^(vp0?[89]|av0?1|opus|vorbis)/, ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/, video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/, audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/, text: /^(stpp.ttml.im1t)/, muxerVideo: /^(avc0?1)/, muxerAudio: /^(mp4a)/, muxerText: /a^/ }, Qh = ["video", "audio", "text"], wu = ["Video", "Audio", "Text"], Kl = function(r) {
  return r && r.replace(/avc1\.(\d+)\.(\d+)/i, function(n, i, e) {
    var t = ("00" + Number(i).toString(16)).slice(-2), a = ("00" + Number(e).toString(16)).slice(-2);
    return "avc1." + t + "00" + a;
  });
}, Ut = function(r) {
  r === void 0 && (r = "");
  var n = r.split(","), i = [];
  return n.forEach(function(e) {
    e = e.trim();
    var t;
    Qh.forEach(function(a) {
      var o = kr[a].exec(e.toLowerCase());
      if (!(!o || o.length <= 1)) {
        t = a;
        var u = e.substring(0, o[1].length), l = e.replace(u, "");
        i.push({ type: u, details: l, mediaType: a });
      }
    }), t || i.push({ type: e, details: "", mediaType: "unknown" });
  }), i;
}, Jh = function(r, n) {
  if (!r.mediaGroups.AUDIO || !n) return null;
  var i = r.mediaGroups.AUDIO[n];
  if (!i) return null;
  for (var e in i) {
    var t = i[e];
    if (t.default && t.playlists) return Ut(t.playlists[0].attributes.CODECS);
  }
  return null;
}, Xl = function(r) {
  return r === void 0 && (r = ""), kr.audio.test(r.trim().toLowerCase());
}, Zh = function(r) {
  return r === void 0 && (r = ""), kr.text.test(r.trim().toLowerCase());
}, Pi = function(r) {
  if (!(!r || typeof r != "string")) {
    var n = r.toLowerCase().split(",").map(function(t) {
      return Kl(t.trim());
    }), i = "video";
    n.length === 1 && Xl(n[0]) ? i = "audio" : n.length === 1 && Zh(n[0]) && (i = "application");
    var e = "mp4";
    return n.every(function(t) {
      return kr.mp4.test(t);
    }) ? e = "mp4" : n.every(function(t) {
      return kr.webm.test(t);
    }) ? e = "webm" : n.every(function(t) {
      return kr.ogg.test(t);
    }) && (e = "ogg"), i + "/" + e + ';codecs="' + r + '"';
  }
}, Dn = function(r) {
  return r === void 0 && (r = ""), P.MediaSource && P.MediaSource.isTypeSupported && P.MediaSource.isTypeSupported(Pi(r)) || false;
}, Ba = function(r) {
  return r === void 0 && (r = ""), r.toLowerCase().split(",").every(function(n) {
    n = n.trim();
    for (var i = 0; i < wu.length; i++) {
      var e = wu[i];
      if (kr["muxer" + e].test(n)) return true;
    }
    return false;
  });
}, ku = "mp4a.40.2", ep = "avc1.4d400d", tp = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i, rp = /^application\/dash\+xml/i, $l = function(r) {
  return tp.test(r) ? "hls" : rp.test(r) ? "dash" : r === "application/vnd.videojs.vhs+json" ? "vhs-json" : null;
}, ip = function(r) {
  return r.toString(2).length;
}, np = function(r) {
  return Math.ceil(ip(r) / 8);
}, Yl = function(r) {
  return ArrayBuffer.isView === "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer;
}, ap = function(r) {
  return Yl(r);
}, fe = function(r) {
  return r instanceof Uint8Array ? r : (!Array.isArray(r) && !ap(r) && !(r instanceof ArrayBuffer) && (typeof r != "number" || typeof r == "number" && r !== r ? r = 0 : r = [r]), new Uint8Array(r && r.buffer || r, r && r.byteOffset || 0, r && r.byteLength || 0));
}, rt = P.BigInt || Number, ls = [rt("0x1"), rt("0x100"), rt("0x10000"), rt("0x1000000"), rt("0x100000000"), rt("0x10000000000"), rt("0x1000000000000"), rt("0x100000000000000"), rt("0x10000000000000000")];
(function() {
  var s12 = new Uint16Array([65484]), r = new Uint8Array(s12.buffer, s12.byteOffset, s12.byteLength);
  return r[0] === 255 ? "big" : r[0] === 204 ? "little" : "unknown";
})();
var sp = function(r, n) {
  var i = n === void 0 ? {} : n, e = i.signed, t = e === void 0 ? false : e, a = i.le, o = a === void 0 ? false : a;
  r = fe(r);
  var u = o ? "reduce" : "reduceRight", l = r[u] ? r[u] : Array.prototype[u], c = l.call(r, function(g, _, C) {
    var w = o ? C : Math.abs(C + 1 - r.length);
    return g + rt(_) * ls[w];
  }, rt(0));
  if (t) {
    var m = ls[r.length] / rt(2) - rt(1);
    c = rt(c), c > m && (c -= m, c -= m, c -= rt(2));
  }
  return Number(c);
}, op = function(r, n) {
  var i = {}, e = i.le, t = e === void 0 ? false : e;
  (typeof r != "bigint" && typeof r != "number" || typeof r == "number" && r !== r) && (r = 0), r = rt(r);
  for (var a = np(r), o = new Uint8Array(new ArrayBuffer(a)), u = 0; u < a; u++) {
    var l = t ? u : Math.abs(u + 1 - o.length);
    o[l] = Number(r / ls[u] & rt(255)), r < 0 && (o[l] = Math.abs(~o[l]), o[l] -= u === 0 ? 1 : 2);
  }
  return o;
}, Ql = function(r, n) {
  if (typeof r != "string" && r && typeof r.toString == "function" && (r = r.toString()), typeof r != "string") return new Uint8Array();
  n || (r = unescape(encodeURIComponent(r)));
  for (var i = new Uint8Array(r.length), e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
  return i;
}, up = function() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
  if (n = n.filter(function(o) {
    return o && (o.byteLength || o.length) && typeof o != "string";
  }), n.length <= 1) return fe(n[0]);
  var e = n.reduce(function(o, u, l) {
    return o + (u.byteLength || u.length);
  }, 0), t = new Uint8Array(e), a = 0;
  return n.forEach(function(o) {
    o = fe(o), t.set(o, a), a += o.byteLength;
  }), t;
}, Me = function(r, n, i) {
  var e = i === void 0 ? {} : i, t = e.offset, a = t === void 0 ? 0 : t, o = e.mask, u = o === void 0 ? [] : o;
  r = fe(r), n = fe(n);
  var l = n.every ? n.every : Array.prototype.every;
  return n.length && r.length - a >= n.length && l.call(n, function(c, m) {
    var g = u[m] ? u[m] & r[a + m] : r[a + m];
    return c === g;
  });
}, lp = function(r, n, i) {
  n.forEach(function(e) {
    for (var t in r.mediaGroups[e]) for (var a in r.mediaGroups[e][t]) {
      var o = r.mediaGroups[e][t][a];
      i(o, e, t, a);
    }
  });
}, _i = {}, Xt = {}, Er = {}, Pu;
function ea() {
  if (Pu) return Er;
  Pu = 1;
  function s12(t, a, o) {
    if (o === void 0 && (o = Array.prototype), t && typeof o.find == "function") return o.find.call(t, a);
    for (var u = 0; u < t.length; u++) if (Object.prototype.hasOwnProperty.call(t, u)) {
      var l = t[u];
      if (a.call(void 0, l, u, t)) return l;
    }
  }
  function r(t, a) {
    return a === void 0 && (a = Object), a && typeof a.freeze == "function" ? a.freeze(t) : t;
  }
  function n(t, a) {
    if (t === null || typeof t != "object") throw new TypeError("target is not an object");
    for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    return t;
  }
  var i = r({ HTML: "text/html", isHTML: function(t) {
    return t === i.HTML;
  }, XML_APPLICATION: "application/xml", XML_TEXT: "text/xml", XML_XHTML_APPLICATION: "application/xhtml+xml", XML_SVG_IMAGE: "image/svg+xml" }), e = r({ HTML: "http://www.w3.org/1999/xhtml", isHTML: function(t) {
    return t === e.HTML;
  }, SVG: "http://www.w3.org/2000/svg", XML: "http://www.w3.org/XML/1998/namespace", XMLNS: "http://www.w3.org/2000/xmlns/" });
  return Er.assign = n, Er.find = s12, Er.freeze = r, Er.MIME_TYPE = i, Er.NAMESPACE = e, Er;
}
var Iu;
function Jl() {
  if (Iu) return Xt;
  Iu = 1;
  var s12 = ea(), r = s12.find, n = s12.NAMESPACE;
  function i(x) {
    return x !== "";
  }
  function e(x) {
    return x ? x.split(/[\t\n\f\r ]+/).filter(i) : [];
  }
  function t(x, A) {
    return x.hasOwnProperty(A) || (x[A] = true), x;
  }
  function a(x) {
    if (!x) return [];
    var A = e(x);
    return Object.keys(A.reduce(t, {}));
  }
  function o(x) {
    return function(A) {
      return x && x.indexOf(A) !== -1;
    };
  }
  function u(x, A) {
    for (var I in x) Object.prototype.hasOwnProperty.call(x, I) && (A[I] = x[I]);
  }
  function l(x, A) {
    var I = x.prototype;
    if (!(I instanceof A)) {
      let G = function() {
      };
      G.prototype = A.prototype, G = new G(), u(I, G), x.prototype = I = G;
    }
    I.constructor != x && (typeof x != "function" && console.error("unknown Class:" + x), I.constructor = x);
  }
  var c = {}, m = c.ELEMENT_NODE = 1, g = c.ATTRIBUTE_NODE = 2, _ = c.TEXT_NODE = 3, C = c.CDATA_SECTION_NODE = 4, w = c.ENTITY_REFERENCE_NODE = 5, S = c.ENTITY_NODE = 6, F = c.PROCESSING_INSTRUCTION_NODE = 7, N = c.COMMENT_NODE = 8, z = c.DOCUMENT_NODE = 9, W = c.DOCUMENT_TYPE_NODE = 10, H = c.DOCUMENT_FRAGMENT_NODE = 11, $ = c.NOTATION_NODE = 12, R = {}, V = {};
  R.INDEX_SIZE_ERR = (V[1] = "Index size error", 1), R.DOMSTRING_SIZE_ERR = (V[2] = "DOMString size error", 2);
  var T = R.HIERARCHY_REQUEST_ERR = (V[3] = "Hierarchy request error", 3);
  R.WRONG_DOCUMENT_ERR = (V[4] = "Wrong document", 4), R.INVALID_CHARACTER_ERR = (V[5] = "Invalid character", 5), R.NO_DATA_ALLOWED_ERR = (V[6] = "No data allowed", 6), R.NO_MODIFICATION_ALLOWED_ERR = (V[7] = "No modification allowed", 7);
  var E = R.NOT_FOUND_ERR = (V[8] = "Not found", 8);
  R.NOT_SUPPORTED_ERR = (V[9] = "Not supported", 9);
  var M = R.INUSE_ATTRIBUTE_ERR = (V[10] = "Attribute in use", 10);
  R.INVALID_STATE_ERR = (V[11] = "Invalid state", 11), R.SYNTAX_ERR = (V[12] = "Syntax error", 12), R.INVALID_MODIFICATION_ERR = (V[13] = "Invalid modification", 13), R.NAMESPACE_ERR = (V[14] = "Invalid namespace", 14), R.INVALID_ACCESS_ERR = (V[15] = "Invalid access", 15);
  function B(x, A) {
    if (A instanceof Error) var I = A;
    else I = this, Error.call(this, V[x]), this.message = V[x], Error.captureStackTrace && Error.captureStackTrace(this, B);
    return I.code = x, A && (this.message = this.message + ": " + A), I;
  }
  B.prototype = Error.prototype, u(R, B);
  function j() {
  }
  j.prototype = { length: 0, item: function(x) {
    return x >= 0 && x < this.length ? this[x] : null;
  }, toString: function(x, A) {
    for (var I = [], G = 0; G < this.length; G++) cr(this[G], I, x, A);
    return I.join("");
  }, filter: function(x) {
    return Array.prototype.filter.call(this, x);
  }, indexOf: function(x) {
    return Array.prototype.indexOf.call(this, x);
  } };
  function K(x, A) {
    this._node = x, this._refresh = A, Y(this);
  }
  function Y(x) {
    var A = x._node._inc || x._node.ownerDocument._inc;
    if (x._inc !== A) {
      var I = x._refresh(x._node);
      if ($i(x, "length", I.length), !x.$$length || I.length < x.$$length) for (var G = I.length; G in x; G++) Object.prototype.hasOwnProperty.call(x, G) && delete x[G];
      u(I, x), x._inc = A;
    }
  }
  K.prototype.item = function(x) {
    return Y(this), this[x] || null;
  }, l(K, j);
  function re() {
  }
  function J(x, A) {
    for (var I = x.length; I--; ) if (x[I] === A) return I;
  }
  function ee(x, A, I, G) {
    if (G ? A[J(A, G)] = I : A[A.length++] = I, x) {
      I.ownerElement = x;
      var se = x.ownerDocument;
      se && (G && Pe(se, x, G), ce(se, x, I));
    }
  }
  function Z(x, A, I) {
    var G = J(A, I);
    if (G >= 0) {
      for (var se = A.length - 1; G < se; ) A[G] = A[++G];
      if (A.length = se, x) {
        var pe = x.ownerDocument;
        pe && (Pe(pe, x, I), I.ownerElement = null);
      }
    } else throw new B(E, new Error(x.tagName + "@" + I));
  }
  re.prototype = { length: 0, item: j.prototype.item, getNamedItem: function(x) {
    for (var A = this.length; A--; ) {
      var I = this[A];
      if (I.nodeName == x) return I;
    }
  }, setNamedItem: function(x) {
    var A = x.ownerElement;
    if (A && A != this._ownerElement) throw new B(M);
    var I = this.getNamedItem(x.nodeName);
    return ee(this._ownerElement, this, x, I), I;
  }, setNamedItemNS: function(x) {
    var A = x.ownerElement, I;
    if (A && A != this._ownerElement) throw new B(M);
    return I = this.getNamedItemNS(x.namespaceURI, x.localName), ee(this._ownerElement, this, x, I), I;
  }, removeNamedItem: function(x) {
    var A = this.getNamedItem(x);
    return Z(this._ownerElement, this, A), A;
  }, removeNamedItemNS: function(x, A) {
    var I = this.getNamedItemNS(x, A);
    return Z(this._ownerElement, this, I), I;
  }, getNamedItemNS: function(x, A) {
    for (var I = this.length; I--; ) {
      var G = this[I];
      if (G.localName == A && G.namespaceURI == x) return G;
    }
    return null;
  } };
  function Q() {
  }
  Q.prototype = { hasFeature: function(x, A) {
    return true;
  }, createDocument: function(x, A, I) {
    var G = new ge();
    if (G.implementation = this, G.childNodes = new j(), G.doctype = I || null, I && G.appendChild(I), A) {
      var se = G.createElementNS(x, A);
      G.appendChild(se);
    }
    return G;
  }, createDocumentType: function(x, A, I) {
    var G = new yr();
    return G.name = x, G.nodeName = x, G.publicId = A || "", G.systemId = I || "", G;
  } };
  function ie() {
  }
  ie.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function(x, A) {
    return be(this, x, A);
  }, replaceChild: function(x, A) {
    be(this, x, A, ur), A && this.removeChild(A);
  }, removeChild: function(x) {
    return Ie(this, x);
  }, appendChild: function(x) {
    return this.insertBefore(x, null);
  }, hasChildNodes: function() {
    return this.firstChild != null;
  }, cloneNode: function(x) {
    return hi(this.ownerDocument || this, this, x);
  }, normalize: function() {
    for (var x = this.firstChild; x; ) {
      var A = x.nextSibling;
      A && A.nodeType == _ && x.nodeType == _ ? (this.removeChild(A), x.appendData(A.data)) : (x.normalize(), x = A);
    }
  }, isSupported: function(x, A) {
    return this.ownerDocument.implementation.hasFeature(x, A);
  }, hasAttributes: function() {
    return this.attributes.length > 0;
  }, lookupPrefix: function(x) {
    for (var A = this; A; ) {
      var I = A._nsMap;
      if (I) {
        for (var G in I) if (Object.prototype.hasOwnProperty.call(I, G) && I[G] === x) return G;
      }
      A = A.nodeType == g ? A.ownerDocument : A.parentNode;
    }
    return null;
  }, lookupNamespaceURI: function(x) {
    for (var A = this; A; ) {
      var I = A._nsMap;
      if (I && Object.prototype.hasOwnProperty.call(I, x)) return I[x];
      A = A.nodeType == g ? A.ownerDocument : A.parentNode;
    }
    return null;
  }, isDefaultNamespace: function(x) {
    var A = this.lookupPrefix(x);
    return A == null;
  } };
  function he(x) {
    return x == "<" && "&lt;" || x == ">" && "&gt;" || x == "&" && "&amp;" || x == '"' && "&quot;" || "&#" + x.charCodeAt() + ";";
  }
  u(c, ie), u(c, ie.prototype);
  function me(x, A) {
    if (A(x)) return true;
    if (x = x.firstChild) do
      if (me(x, A)) return true;
    while (x = x.nextSibling);
  }
  function ge() {
    this.ownerDocument = this;
  }
  function ce(x, A, I) {
    x && x._inc++;
    var G = I.namespaceURI;
    G === n.XMLNS && (A._nsMap[I.prefix ? I.localName : ""] = I.value);
  }
  function Pe(x, A, I, G) {
    x && x._inc++;
    var se = I.namespaceURI;
    se === n.XMLNS && delete A._nsMap[I.prefix ? I.localName : ""];
  }
  function qe(x, A, I) {
    if (x && x._inc) {
      x._inc++;
      var G = A.childNodes;
      if (I) G[G.length++] = I;
      else {
        for (var se = A.firstChild, pe = 0; se; ) G[pe++] = se, se = se.nextSibling;
        G.length = pe, delete G[G.length];
      }
    }
  }
  function Ie(x, A) {
    var I = A.previousSibling, G = A.nextSibling;
    return I ? I.nextSibling = G : x.firstChild = G, G ? G.previousSibling = I : x.lastChild = I, A.parentNode = null, A.previousSibling = null, A.nextSibling = null, qe(x.ownerDocument, x), A;
  }
  function Ve(x) {
    return x && (x.nodeType === ie.DOCUMENT_NODE || x.nodeType === ie.DOCUMENT_FRAGMENT_NODE || x.nodeType === ie.ELEMENT_NODE);
  }
  function xt(x) {
    return x && (pt(x) || sr(x) || $e(x) || x.nodeType === ie.DOCUMENT_FRAGMENT_NODE || x.nodeType === ie.COMMENT_NODE || x.nodeType === ie.PROCESSING_INSTRUCTION_NODE);
  }
  function $e(x) {
    return x && x.nodeType === ie.DOCUMENT_TYPE_NODE;
  }
  function pt(x) {
    return x && x.nodeType === ie.ELEMENT_NODE;
  }
  function sr(x) {
    return x && x.nodeType === ie.TEXT_NODE;
  }
  function Ye(x, A) {
    var I = x.childNodes || [];
    if (r(I, pt) || $e(A)) return false;
    var G = r(I, $e);
    return !(A && G && I.indexOf(G) > I.indexOf(A));
  }
  function or(x, A) {
    var I = x.childNodes || [];
    function G(pe) {
      return pt(pe) && pe !== A;
    }
    if (r(I, G)) return false;
    var se = r(I, $e);
    return !(A && se && I.indexOf(se) > I.indexOf(A));
  }
  function Ne(x, A, I) {
    if (!Ve(x)) throw new B(T, "Unexpected parent node type " + x.nodeType);
    if (I && I.parentNode !== x) throw new B(E, "child not in parent");
    if (!xt(A) || $e(A) && x.nodeType !== ie.DOCUMENT_NODE) throw new B(T, "Unexpected node type " + A.nodeType + " for parent node type " + x.nodeType);
  }
  function yt(x, A, I) {
    var G = x.childNodes || [], se = A.childNodes || [];
    if (A.nodeType === ie.DOCUMENT_FRAGMENT_NODE) {
      var pe = se.filter(pt);
      if (pe.length > 1 || r(se, sr)) throw new B(T, "More than one element or text in fragment");
      if (pe.length === 1 && !Ye(x, I)) throw new B(T, "Element in fragment can not be inserted before doctype");
    }
    if (pt(A) && !Ye(x, I)) throw new B(T, "Only one element can be added and only after doctype");
    if ($e(A)) {
      if (r(G, $e)) throw new B(T, "Only one doctype is allowed");
      var De = r(G, pt);
      if (I && G.indexOf(De) < G.indexOf(I)) throw new B(T, "Doctype can only be inserted before an element");
      if (!I && De) throw new B(T, "Doctype can not be appended since element is present");
    }
  }
  function ur(x, A, I) {
    var G = x.childNodes || [], se = A.childNodes || [];
    if (A.nodeType === ie.DOCUMENT_FRAGMENT_NODE) {
      var pe = se.filter(pt);
      if (pe.length > 1 || r(se, sr)) throw new B(T, "More than one element or text in fragment");
      if (pe.length === 1 && !or(x, I)) throw new B(T, "Element in fragment can not be inserted before doctype");
    }
    if (pt(A) && !or(x, I)) throw new B(T, "Only one element can be added and only after doctype");
    if ($e(A)) {
      if (r(G, function(Oe) {
        return $e(Oe) && Oe !== I;
      })) throw new B(T, "Only one doctype is allowed");
      var De = r(G, pt);
      if (I && G.indexOf(De) < G.indexOf(I)) throw new B(T, "Doctype can only be inserted before an element");
    }
  }
  function be(x, A, I, G) {
    Ne(x, A, I), x.nodeType === ie.DOCUMENT_NODE && (G || yt)(x, A, I);
    var se = A.parentNode;
    if (se && se.removeChild(A), A.nodeType === H) {
      var pe = A.firstChild;
      if (pe == null) return A;
      var De = A.lastChild;
    } else pe = De = A;
    var ze = I ? I.previousSibling : x.lastChild;
    pe.previousSibling = ze, De.nextSibling = I, ze ? ze.nextSibling = pe : x.firstChild = pe, I == null ? x.lastChild = De : I.previousSibling = De;
    do {
      pe.parentNode = x;
      var Oe = x.ownerDocument || x;
      Ft(pe, Oe);
    } while (pe !== De && (pe = pe.nextSibling));
    return qe(x.ownerDocument || x, x), A.nodeType == H && (A.firstChild = A.lastChild = null), A;
  }
  function Ft(x, A) {
    if (x.ownerDocument !== A) {
      if (x.ownerDocument = A, x.nodeType === m && x.attributes) for (var I = 0; I < x.attributes.length; I++) {
        var G = x.attributes.item(I);
        G && (G.ownerDocument = A);
      }
      for (var se = x.firstChild; se; ) Ft(se, A), se = se.nextSibling;
    }
  }
  function Ae(x, A) {
    A.parentNode && A.parentNode.removeChild(A), A.parentNode = x, A.previousSibling = x.lastChild, A.nextSibling = null, A.previousSibling ? A.previousSibling.nextSibling = A : x.firstChild = A, x.lastChild = A, qe(x.ownerDocument, x, A);
    var I = x.ownerDocument || x;
    return Ft(A, I), A;
  }
  ge.prototype = { nodeName: "#document", nodeType: z, doctype: null, documentElement: null, _inc: 1, insertBefore: function(x, A) {
    if (x.nodeType == H) {
      for (var I = x.firstChild; I; ) {
        var G = I.nextSibling;
        this.insertBefore(I, A), I = G;
      }
      return x;
    }
    return be(this, x, A), Ft(x, this), this.documentElement === null && x.nodeType === m && (this.documentElement = x), x;
  }, removeChild: function(x) {
    return this.documentElement == x && (this.documentElement = null), Ie(this, x);
  }, replaceChild: function(x, A) {
    be(this, x, A, ur), Ft(x, this), A && this.removeChild(A), pt(x) && (this.documentElement = x);
  }, importNode: function(x, A) {
    return Xi(this, x, A);
  }, getElementById: function(x) {
    var A = null;
    return me(this.documentElement, function(I) {
      if (I.nodeType == m && I.getAttribute("id") == x) return A = I, true;
    }), A;
  }, getElementsByClassName: function(x) {
    var A = a(x);
    return new K(this, function(I) {
      var G = [];
      return A.length > 0 && me(I.documentElement, function(se) {
        if (se !== I && se.nodeType === m) {
          var pe = se.getAttribute("class");
          if (pe) {
            var De = x === pe;
            if (!De) {
              var ze = a(pe);
              De = A.every(o(ze));
            }
            De && G.push(se);
          }
        }
      }), G;
    });
  }, createElement: function(x) {
    var A = new Be();
    A.ownerDocument = this, A.nodeName = x, A.tagName = x, A.localName = x, A.childNodes = new j();
    var I = A.attributes = new re();
    return I._ownerElement = A, A;
  }, createDocumentFragment: function() {
    var x = new Fr();
    return x.ownerDocument = this, x.childNodes = new j(), x;
  }, createTextNode: function(x) {
    var A = new gr();
    return A.ownerDocument = this, A.appendData(x), A;
  }, createComment: function(x) {
    var A = new lr();
    return A.ownerDocument = this, A.appendData(x), A;
  }, createCDATASection: function(x) {
    var A = new vr();
    return A.ownerDocument = this, A.appendData(x), A;
  }, createProcessingInstruction: function(x, A) {
    var I = new fi();
    return I.ownerDocument = this, I.tagName = I.nodeName = I.target = x, I.nodeValue = I.data = A, I;
  }, createAttribute: function(x) {
    var A = new Rt();
    return A.ownerDocument = this, A.name = x, A.nodeName = x, A.localName = x, A.specified = true, A;
  }, createEntityReference: function(x) {
    var A = new Se();
    return A.ownerDocument = this, A.nodeName = x, A;
  }, createElementNS: function(x, A) {
    var I = new Be(), G = A.split(":"), se = I.attributes = new re();
    return I.childNodes = new j(), I.ownerDocument = this, I.nodeName = A, I.tagName = A, I.namespaceURI = x, G.length == 2 ? (I.prefix = G[0], I.localName = G[1]) : I.localName = A, se._ownerElement = I, I;
  }, createAttributeNS: function(x, A) {
    var I = new Rt(), G = A.split(":");
    return I.ownerDocument = this, I.nodeName = A, I.name = A, I.namespaceURI = x, I.specified = true, G.length == 2 ? (I.prefix = G[0], I.localName = G[1]) : I.localName = A, I;
  } }, l(ge, ie);
  function Be() {
    this._nsMap = {};
  }
  Be.prototype = { nodeType: m, hasAttribute: function(x) {
    return this.getAttributeNode(x) != null;
  }, getAttribute: function(x) {
    var A = this.getAttributeNode(x);
    return A && A.value || "";
  }, getAttributeNode: function(x) {
    return this.attributes.getNamedItem(x);
  }, setAttribute: function(x, A) {
    var I = this.ownerDocument.createAttribute(x);
    I.value = I.nodeValue = "" + A, this.setAttributeNode(I);
  }, removeAttribute: function(x) {
    var A = this.getAttributeNode(x);
    A && this.removeAttributeNode(A);
  }, appendChild: function(x) {
    return x.nodeType === H ? this.insertBefore(x, null) : Ae(this, x);
  }, setAttributeNode: function(x) {
    return this.attributes.setNamedItem(x);
  }, setAttributeNodeNS: function(x) {
    return this.attributes.setNamedItemNS(x);
  }, removeAttributeNode: function(x) {
    return this.attributes.removeNamedItem(x.nodeName);
  }, removeAttributeNS: function(x, A) {
    var I = this.getAttributeNodeNS(x, A);
    I && this.removeAttributeNode(I);
  }, hasAttributeNS: function(x, A) {
    return this.getAttributeNodeNS(x, A) != null;
  }, getAttributeNS: function(x, A) {
    var I = this.getAttributeNodeNS(x, A);
    return I && I.value || "";
  }, setAttributeNS: function(x, A, I) {
    var G = this.ownerDocument.createAttributeNS(x, A);
    G.value = G.nodeValue = "" + I, this.setAttributeNode(G);
  }, getAttributeNodeNS: function(x, A) {
    return this.attributes.getNamedItemNS(x, A);
  }, getElementsByTagName: function(x) {
    return new K(this, function(A) {
      var I = [];
      return me(A, function(G) {
        G !== A && G.nodeType == m && (x === "*" || G.tagName == x) && I.push(G);
      }), I;
    });
  }, getElementsByTagNameNS: function(x, A) {
    return new K(this, function(I) {
      var G = [];
      return me(I, function(se) {
        se !== I && se.nodeType === m && (x === "*" || se.namespaceURI === x) && (A === "*" || se.localName == A) && G.push(se);
      }), G;
    });
  } }, ge.prototype.getElementsByTagName = Be.prototype.getElementsByTagName, ge.prototype.getElementsByTagNameNS = Be.prototype.getElementsByTagNameNS, l(Be, ie);
  function Rt() {
  }
  Rt.prototype.nodeType = g, l(Rt, ie);
  function Gt() {
  }
  Gt.prototype = { data: "", substringData: function(x, A) {
    return this.data.substring(x, x + A);
  }, appendData: function(x) {
    x = this.data + x, this.nodeValue = this.data = x, this.length = x.length;
  }, insertData: function(x, A) {
    this.replaceData(x, 0, A);
  }, appendChild: function(x) {
    throw new Error(V[T]);
  }, deleteData: function(x, A) {
    this.replaceData(x, A, "");
  }, replaceData: function(x, A, I) {
    var G = this.data.substring(0, x), se = this.data.substring(x + A);
    I = G + I + se, this.nodeValue = this.data = I, this.length = I.length;
  } }, l(Gt, ie);
  function gr() {
  }
  gr.prototype = { nodeName: "#text", nodeType: _, splitText: function(x) {
    var A = this.data, I = A.substring(x);
    A = A.substring(0, x), this.data = this.nodeValue = A, this.length = A.length;
    var G = this.ownerDocument.createTextNode(I);
    return this.parentNode && this.parentNode.insertBefore(G, this.nextSibling), G;
  } }, l(gr, Gt);
  function lr() {
  }
  lr.prototype = { nodeName: "#comment", nodeType: N }, l(lr, Gt);
  function vr() {
  }
  vr.prototype = { nodeName: "#cdata-section", nodeType: C }, l(vr, Gt);
  function yr() {
  }
  yr.prototype.nodeType = W, l(yr, ie);
  function di() {
  }
  di.prototype.nodeType = $, l(di, ie);
  function ci() {
  }
  ci.prototype.nodeType = S, l(ci, ie);
  function Se() {
  }
  Se.prototype.nodeType = w, l(Se, ie);
  function Fr() {
  }
  Fr.prototype.nodeName = "#document-fragment", Fr.prototype.nodeType = H, l(Fr, ie);
  function fi() {
  }
  fi.prototype.nodeType = F, l(fi, ie);
  function Gi() {
  }
  Gi.prototype.serializeToString = function(x, A, I) {
    return zi.call(x, A, I);
  }, ie.prototype.toString = zi;
  function zi(x, A) {
    var I = [], G = this.nodeType == 9 && this.documentElement || this, se = G.prefix, pe = G.namespaceURI;
    if (pe && se == null) {
      var se = G.lookupPrefix(pe);
      if (se == null) var De = [{ namespace: pe, prefix: null }];
    }
    return cr(this, I, x, A, De), I.join("");
  }
  function Ki(x, A, I) {
    var G = x.prefix || "", se = x.namespaceURI;
    if (!se || G === "xml" && se === n.XML || se === n.XMLNS) return false;
    for (var pe = I.length; pe--; ) {
      var De = I[pe];
      if (De.prefix === G) return De.namespace !== se;
    }
    return true;
  }
  function dr(x, A, I) {
    x.push(" ", A, '="', I.replace(/[<>&"\t\n\r]/g, he), '"');
  }
  function cr(x, A, I, G, se) {
    if (se || (se = []), G) if (x = G(x), x) {
      if (typeof x == "string") {
        A.push(x);
        return;
      }
    } else return;
    switch (x.nodeType) {
      case m:
        var pe = x.attributes, De = pe.length, je = x.firstChild, ze = x.tagName;
        I = n.isHTML(x.namespaceURI) || I;
        var Oe = ze;
        if (!I && !x.prefix && x.namespaceURI) {
          for (var Mt, Dt = 0; Dt < pe.length; Dt++) if (pe.item(Dt).name === "xmlns") {
            Mt = pe.item(Dt).value;
            break;
          }
          if (!Mt) for (var St = se.length - 1; St >= 0; St--) {
            var et = se[St];
            if (et.prefix === "" && et.namespace === x.namespaceURI) {
              Mt = et.namespace;
              break;
            }
          }
          if (Mt !== x.namespaceURI) for (var St = se.length - 1; St >= 0; St--) {
            var et = se[St];
            if (et.namespace === x.namespaceURI) {
              et.prefix && (Oe = et.prefix + ":" + ze);
              break;
            }
          }
        }
        A.push("<", Oe);
        for (var Et = 0; Et < De; Et++) {
          var xe = pe.item(Et);
          xe.prefix == "xmlns" ? se.push({ prefix: xe.localName, namespace: xe.value }) : xe.nodeName == "xmlns" && se.push({ prefix: "", namespace: xe.value });
        }
        for (var Et = 0; Et < De; Et++) {
          var xe = pe.item(Et);
          if (Ki(xe, I, se)) {
            var zt = xe.prefix || "", Nt = xe.namespaceURI;
            dr(A, zt ? "xmlns:" + zt : "xmlns", Nt), se.push({ prefix: zt, namespace: Nt });
          }
          cr(xe, A, I, G, se);
        }
        if (ze === Oe && Ki(x, I, se)) {
          var zt = x.prefix || "", Nt = x.namespaceURI;
          dr(A, zt ? "xmlns:" + zt : "xmlns", Nt), se.push({ prefix: zt, namespace: Nt });
        }
        if (je || I && !/^(?:meta|link|img|br|hr|input)$/i.test(ze)) {
          if (A.push(">"), I && /^script$/i.test(ze)) for (; je; ) je.data ? A.push(je.data) : cr(je, A, I, G, se.slice()), je = je.nextSibling;
          else for (; je; ) cr(je, A, I, G, se.slice()), je = je.nextSibling;
          A.push("</", Oe, ">");
        } else A.push("/>");
        return;
      case z:
      case H:
        for (var je = x.firstChild; je; ) cr(je, A, I, G, se.slice()), je = je.nextSibling;
        return;
      case g:
        return dr(A, x.name, x.value);
      case _:
        return A.push(x.data.replace(/[<&>]/g, he));
      case C:
        return A.push("<![CDATA[", x.data, "]]>");
      case N:
        return A.push("<!--", x.data, "-->");
      case W:
        var Yi = x.publicId, mt = x.systemId;
        if (A.push("<!DOCTYPE ", x.name), Yi) A.push(" PUBLIC ", Yi), mt && mt != "." && A.push(" ", mt), A.push(">");
        else if (mt && mt != ".") A.push(" SYSTEM ", mt, ">");
        else {
          var ke = x.internalSubset;
          ke && A.push(" [", ke, "]"), A.push(">");
        }
        return;
      case F:
        return A.push("<?", x.target, " ", x.data, "?>");
      case w:
        return A.push("&", x.nodeName, ";");
      default:
        A.push("??", x.nodeName);
    }
  }
  function Xi(x, A, I) {
    var G;
    switch (A.nodeType) {
      case m:
        G = A.cloneNode(false), G.ownerDocument = x;
      case H:
        break;
      case g:
        I = true;
        break;
    }
    if (G || (G = A.cloneNode(false)), G.ownerDocument = x, G.parentNode = null, I) for (var se = A.firstChild; se; ) G.appendChild(Xi(x, se, I)), se = se.nextSibling;
    return G;
  }
  function hi(x, A, I) {
    var G = new A.constructor();
    for (var se in A) if (Object.prototype.hasOwnProperty.call(A, se)) {
      var pe = A[se];
      typeof pe != "object" && pe != G[se] && (G[se] = pe);
    }
    switch (A.childNodes && (G.childNodes = new j()), G.ownerDocument = x, G.nodeType) {
      case m:
        var De = A.attributes, ze = G.attributes = new re(), Oe = De.length;
        ze._ownerElement = G;
        for (var Mt = 0; Mt < Oe; Mt++) G.setAttributeNode(hi(x, De.item(Mt), true));
        break;
      case g:
        I = true;
    }
    if (I) for (var Dt = A.firstChild; Dt; ) G.appendChild(hi(x, Dt, I)), Dt = Dt.nextSibling;
    return G;
  }
  function $i(x, A, I) {
    x[A] = I;
  }
  try {
    if (Object.defineProperty) {
      let x = function(A) {
        switch (A.nodeType) {
          case m:
          case H:
            var I = [];
            for (A = A.firstChild; A; ) A.nodeType !== 7 && A.nodeType !== 8 && I.push(x(A)), A = A.nextSibling;
            return I.join("");
          default:
            return A.nodeValue;
        }
      };
      Object.defineProperty(K.prototype, "length", { get: function() {
        return Y(this), this.$$length;
      } }), Object.defineProperty(ie.prototype, "textContent", { get: function() {
        return x(this);
      }, set: function(A) {
        switch (this.nodeType) {
          case m:
          case H:
            for (; this.firstChild; ) this.removeChild(this.firstChild);
            (A || String(A)) && this.appendChild(this.ownerDocument.createTextNode(A));
            break;
          default:
            this.data = A, this.value = A, this.nodeValue = A;
        }
      } }), $i = function(A, I, G) {
        A["$$" + I] = G;
      };
    }
  } catch {
  }
  return Xt.DocumentType = yr, Xt.DOMException = B, Xt.DOMImplementation = Q, Xt.Element = Be, Xt.Node = ie, Xt.NodeList = j, Xt.XMLSerializer = Gi, Xt;
}
var Ti = {}, Ua = {}, Ou;
function dp() {
  return Ou || (Ou = 1, (function(s12) {
    var r = ea().freeze;
    s12.XML_ENTITIES = r({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }), s12.HTML_ENTITIES = r({ Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", AMP: "&", amp: "&", And: "\u2A53", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", ap: "\u2248", apacir: "\u2A6F", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", Barwed: "\u2306", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", Because: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxDL: "\u2557", boxDl: "\u2556", boxdL: "\u2555", boxdl: "\u2510", boxDR: "\u2554", boxDr: "\u2553", boxdR: "\u2552", boxdr: "\u250C", boxH: "\u2550", boxh: "\u2500", boxHD: "\u2566", boxHd: "\u2564", boxhD: "\u2565", boxhd: "\u252C", boxHU: "\u2569", boxHu: "\u2567", boxhU: "\u2568", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxUL: "\u255D", boxUl: "\u255C", boxuL: "\u255B", boxul: "\u2518", boxUR: "\u255A", boxUr: "\u2559", boxuR: "\u2558", boxur: "\u2514", boxV: "\u2551", boxv: "\u2502", boxVH: "\u256C", boxVh: "\u256B", boxvH: "\u256A", boxvh: "\u253C", boxVL: "\u2563", boxVl: "\u2562", boxvL: "\u2561", boxvl: "\u2524", boxVR: "\u2560", boxVr: "\u255F", boxvR: "\u255E", boxvr: "\u251C", bprime: "\u2035", Breve: "\u02D8", breve: "\u02D8", brvbar: "\xA6", Bscr: "\u212C", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", Cap: "\u22D2", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", CenterDot: "\xB7", centerdot: "\xB7", Cfr: "\u212D", cfr: "\u{1D520}", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", cir: "\u25CB", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", Colon: "\u2237", colon: ":", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", Conint: "\u222F", conint: "\u222E", ContourIntegral: "\u222E", Copf: "\u2102", copf: "\u{1D554}", coprod: "\u2210", Coproduct: "\u2210", COPY: "\xA9", copy: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", Cross: "\u2A2F", cross: "\u2717", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", Cup: "\u22D3", cup: "\u222A", cupbrcap: "\u2A48", CupCap: "\u224D", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", Dagger: "\u2021", dagger: "\u2020", daleth: "\u2138", Darr: "\u21A1", dArr: "\u21D3", darr: "\u2193", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", DD: "\u2145", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", Diamond: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", Downarrow: "\u21D3", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", ecir: "\u2256", Ecirc: "\xCA", ecirc: "\xEA", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", eDot: "\u2251", edot: "\u0117", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp: "\u2003", emsp13: "\u2004", emsp14: "\u2005", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", Escr: "\u2130", escr: "\u212F", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", ExponentialE: "\u2147", exponentiale: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", ForAll: "\u2200", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", Fscr: "\u2131", fscr: "\u{1D4BB}", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", gE: "\u2267", ge: "\u2265", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", Gg: "\u22D9", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gl: "\u2277", gla: "\u2AA5", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gnE: "\u2269", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", Gt: "\u226B", GT: ">", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", hArr: "\u21D4", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", Hfr: "\u210C", hfr: "\u{1D525}", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", Hopf: "\u210D", hopf: "\u{1D559}", horbar: "\u2015", HorizontalLine: "\u2500", Hscr: "\u210B", hscr: "\u{1D4BD}", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", Ifr: "\u2111", ifr: "\u{1D526}", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Im: "\u2111", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", Int: "\u222C", int: "\u222B", intcal: "\u22BA", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", Iscr: "\u2110", iscr: "\u{1D4BE}", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", Lang: "\u27EA", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", Larr: "\u219E", lArr: "\u21D0", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", lAtail: "\u291B", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lBarr: "\u290E", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", lE: "\u2266", le: "\u2264", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", Leftarrow: "\u21D0", leftarrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", Ll: "\u22D8", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lnE: "\u2268", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftarrow: "\u27F5", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", Lscr: "\u2112", lscr: "\u{1D4C1}", Lsh: "\u21B0", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", Lt: "\u226A", LT: "<", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", Mscr: "\u2133", mscr: "\u{1D4C2}", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", nearhk: "\u2924", neArr: "\u21D7", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlArr: "\u21CD", nlarr: "\u219A", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nLeftarrow: "\u21CD", nleftarrow: "\u219A", nLeftrightarrow: "\u21CE", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", nopf: "\u{1D55F}", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nRightarrow: "\u21CF", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nVDash: "\u22AF", nVdash: "\u22AE", nvDash: "\u22AD", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwArr: "\u21D6", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", Ocirc: "\xD4", ocirc: "\xF4", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", Or: "\u2A54", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", Otimes: "\u2A37", otimes: "\u2297", otimesas: "\u2A36", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", Popf: "\u2119", popf: "\u{1D561}", pound: "\xA3", Pr: "\u2ABB", pr: "\u227A", prap: "\u2AB7", prcue: "\u227C", prE: "\u2AB3", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", Prime: "\u2033", prime: "\u2032", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportion: "\u2237", Proportional: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", Qopf: "\u211A", qopf: "\u{1D562}", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", QUOT: '"', quot: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", Rang: "\u27EB", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", Rarr: "\u21A0", rArr: "\u21D2", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", rAtail: "\u291C", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", RBarr: "\u2910", rBarr: "\u290F", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", Re: "\u211C", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", REG: "\xAE", reg: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", Rfr: "\u211C", rfr: "\u{1D52F}", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", Rightarrow: "\u21D2", rightarrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", Ropf: "\u211D", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", Rscr: "\u211B", rscr: "\u{1D4C7}", Rsh: "\u21B1", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", Sc: "\u2ABC", sc: "\u227B", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", sccue: "\u227D", scE: "\u2AB4", sce: "\u2AB0", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", searhk: "\u2925", seArr: "\u21D8", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", Square: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", Sub: "\u22D0", sub: "\u2282", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", Subset: "\u22D0", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", Sum: "\u2211", sum: "\u2211", sung: "\u266A", Sup: "\u22D1", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", Supset: "\u22D1", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swArr: "\u21D9", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", Therefore: "\u2234", therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", thinsp: "\u2009", ThinSpace: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", Tilde: "\u223C", tilde: "\u02DC", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", TRADE: "\u2122", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", Uarr: "\u219F", uArr: "\u21D1", uarr: "\u2191", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrow: "\u2191", Uparrow: "\u21D1", uparrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", Updownarrow: "\u21D5", updownarrow: "\u2195", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", upsi: "\u03C5", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTee: "\u22A5", UpTeeArrow: "\u21A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", vArr: "\u21D5", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", Vbar: "\u2AEB", vBar: "\u2AE8", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", VDash: "\u22AB", Vdash: "\u22A9", vDash: "\u22A8", vdash: "\u22A2", Vdashl: "\u2AE6", Vee: "\u22C1", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", Verbar: "\u2016", verbar: "|", Vert: "\u2016", vert: "|", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", Wedge: "\u22C0", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", Xi: "\u039E", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", Yuml: "\u0178", yuml: "\xFF", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", Zfr: "\u2128", zfr: "\u{1D537}", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", Zopf: "\u2124", zopf: "\u{1D56B}", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }), s12.entityMap = s12.HTML_ENTITIES;
  })(Ua)), Ua;
}
var vn = {}, Lu;
function cp() {
  if (Lu) return vn;
  Lu = 1;
  var s12 = ea().NAMESPACE, r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, n = new RegExp("[\\-\\.0-9" + r.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), i = new RegExp("^" + r.source + n.source + "*(?::" + r.source + n.source + "*)?$"), e = 0, t = 1, a = 2, o = 3, u = 4, l = 5, c = 6, m = 7;
  function g(T, E) {
    this.message = T, this.locator = E, Error.captureStackTrace && Error.captureStackTrace(this, g);
  }
  g.prototype = new Error(), g.prototype.name = g.name;
  function _() {
  }
  _.prototype = { parse: function(T, E, M) {
    var B = this.domBuilder;
    B.startDocument(), W(E, E = {}), C(T, E, M, B, this.errorHandler), B.endDocument();
  } };
  function C(T, E, M, B, j) {
    function K(Ae) {
      if (Ae > 65535) {
        Ae -= 65536;
        var Be = 55296 + (Ae >> 10), Rt = 56320 + (Ae & 1023);
        return String.fromCharCode(Be, Rt);
      } else return String.fromCharCode(Ae);
    }
    function Y(Ae) {
      var Be = Ae.slice(1, -1);
      return Object.hasOwnProperty.call(M, Be) ? M[Be] : Be.charAt(0) === "#" ? K(parseInt(Be.substr(1).replace("x", "0x"))) : (j.error("entity not found:" + Ae), Ae);
    }
    function re(Ae) {
      if (Ae > ge) {
        var Be = T.substring(ge, Ae).replace(/&#?\w+;/g, Y);
        ie && J(ge), B.characters(Be, 0, Ae - ge), ge = Ae;
      }
    }
    function J(Ae, Be) {
      for (; Ae >= Z && (Be = Q.exec(T)); ) ee = Be.index, Z = ee + Be[0].length, ie.lineNumber++;
      ie.columnNumber = Ae - ee + 1;
    }
    for (var ee = 0, Z = 0, Q = /.*(?:\r\n?|\n)|.*$/g, ie = B.locator, he = [{ currentNSMap: E }], me = {}, ge = 0; ; ) {
      try {
        var ce = T.indexOf("<", ge);
        if (ce < 0) {
          if (!T.substr(ge).match(/^\s*$/)) {
            var Pe = B.doc, qe = Pe.createTextNode(T.substr(ge));
            Pe.appendChild(qe), B.currentElement = qe;
          }
          return;
        }
        switch (ce > ge && re(ce), T.charAt(ce + 1)) {
          case "/":
            var Ne = T.indexOf(">", ce + 3), Ie = T.substring(ce + 2, Ne).replace(/[ \t\n\r]+$/g, ""), Ve = he.pop();
            Ne < 0 ? (Ie = T.substring(ce + 2).replace(/[\s<].*/, ""), j.error("end tag name: " + Ie + " is not complete:" + Ve.tagName), Ne = ce + 1 + Ie.length) : Ie.match(/\s</) && (Ie = Ie.replace(/[\s<].*/, ""), j.error("end tag name: " + Ie + " maybe not complete"), Ne = ce + 1 + Ie.length);
            var xt = Ve.localNSMap, $e = Ve.tagName == Ie, pt = $e || Ve.tagName && Ve.tagName.toLowerCase() == Ie.toLowerCase();
            if (pt) {
              if (B.endElement(Ve.uri, Ve.localName, Ie), xt) for (var sr in xt) Object.prototype.hasOwnProperty.call(xt, sr) && B.endPrefixMapping(sr);
              $e || j.fatalError("end tag name: " + Ie + " is not match the current start tagName:" + Ve.tagName);
            } else he.push(Ve);
            Ne++;
            break;
          case "?":
            ie && J(ce), Ne = $(T, ce, B);
            break;
          case "!":
            ie && J(ce), Ne = H(T, ce, B, j);
            break;
          default:
            ie && J(ce);
            var Ye = new R(), or = he[he.length - 1].currentNSMap, Ne = S(T, ce, Ye, or, Y, j), yt = Ye.length;
            if (!Ye.closed && z(T, Ne, Ye.tagName, me) && (Ye.closed = true, M.nbsp || j.warning("unclosed xml attribute")), ie && yt) {
              for (var ur = w(ie, {}), be = 0; be < yt; be++) {
                var Ft = Ye[be];
                J(Ft.offset), Ft.locator = w(ie, {});
              }
              B.locator = ur, F(Ye, B, or) && he.push(Ye), B.locator = ie;
            } else F(Ye, B, or) && he.push(Ye);
            s12.isHTML(Ye.uri) && !Ye.closed ? Ne = N(T, Ne, Ye.tagName, Y, B) : Ne++;
        }
      } catch (Ae) {
        if (Ae instanceof g) throw Ae;
        j.error("element parse error: " + Ae), Ne = -1;
      }
      Ne > ge ? ge = Ne : re(Math.max(ce, ge) + 1);
    }
  }
  function w(T, E) {
    return E.lineNumber = T.lineNumber, E.columnNumber = T.columnNumber, E;
  }
  function S(T, E, M, B, j, K) {
    function Y(ie, he, me) {
      M.attributeNames.hasOwnProperty(ie) && K.fatalError("Attribute " + ie + " redefined"), M.addValue(ie, he.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, j), me);
    }
    for (var re, J, ee = ++E, Z = e; ; ) {
      var Q = T.charAt(ee);
      switch (Q) {
        case "=":
          if (Z === t) re = T.slice(E, ee), Z = o;
          else if (Z === a) Z = o;
          else throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (Z === o || Z === t) if (Z === t && (K.warning('attribute value must after "="'), re = T.slice(E, ee)), E = ee + 1, ee = T.indexOf(Q, E), ee > 0) J = T.slice(E, ee), Y(re, J, E - 1), Z = l;
          else throw new Error("attribute value no end '" + Q + "' match");
          else if (Z == u) J = T.slice(E, ee), Y(re, J, E), K.warning('attribute "' + re + '" missed start quot(' + Q + ")!!"), E = ee + 1, Z = l;
          else throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (Z) {
            case e:
              M.setTagName(T.slice(E, ee));
            case l:
            case c:
            case m:
              Z = m, M.closed = true;
            case u:
            case t:
              break;
            case a:
              M.closed = true;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return K.error("unexpected end of input"), Z == e && M.setTagName(T.slice(E, ee)), ee;
        case ">":
          switch (Z) {
            case e:
              M.setTagName(T.slice(E, ee));
            case l:
            case c:
            case m:
              break;
            case u:
            case t:
              J = T.slice(E, ee), J.slice(-1) === "/" && (M.closed = true, J = J.slice(0, -1));
            case a:
              Z === a && (J = re), Z == u ? (K.warning('attribute "' + J + '" missed quot(")!'), Y(re, J, E)) : ((!s12.isHTML(B[""]) || !J.match(/^(?:disabled|checked|selected)$/i)) && K.warning('attribute "' + J + '" missed value!! "' + J + '" instead!!'), Y(J, J, E));
              break;
            case o:
              throw new Error("attribute value missed!!");
          }
          return ee;
        case "\x80":
          Q = " ";
        default:
          if (Q <= " ") switch (Z) {
            case e:
              M.setTagName(T.slice(E, ee)), Z = c;
              break;
            case t:
              re = T.slice(E, ee), Z = a;
              break;
            case u:
              var J = T.slice(E, ee);
              K.warning('attribute "' + J + '" missed quot(")!!'), Y(re, J, E);
            case l:
              Z = c;
              break;
          }
          else switch (Z) {
            case a:
              M.tagName, (!s12.isHTML(B[""]) || !re.match(/^(?:disabled|checked|selected)$/i)) && K.warning('attribute "' + re + '" missed value!! "' + re + '" instead2!!'), Y(re, re, E), E = ee, Z = t;
              break;
            case l:
              K.warning('attribute space is required"' + re + '"!!');
            case c:
              Z = t, E = ee;
              break;
            case o:
              Z = u, E = ee;
              break;
            case m:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
      }
      ee++;
    }
  }
  function F(T, E, M) {
    for (var B = T.tagName, j = null, Q = T.length; Q--; ) {
      var K = T[Q], Y = K.qName, re = K.value, ie = Y.indexOf(":");
      if (ie > 0) var J = K.prefix = Y.slice(0, ie), ee = Y.slice(ie + 1), Z = J === "xmlns" && ee;
      else ee = Y, J = null, Z = Y === "xmlns" && "";
      K.localName = ee, Z !== false && (j == null && (j = {}, W(M, M = {})), M[Z] = j[Z] = re, K.uri = s12.XMLNS, E.startPrefixMapping(Z, re));
    }
    for (var Q = T.length; Q--; ) {
      K = T[Q];
      var J = K.prefix;
      J && (J === "xml" && (K.uri = s12.XML), J !== "xmlns" && (K.uri = M[J || ""]));
    }
    var ie = B.indexOf(":");
    ie > 0 ? (J = T.prefix = B.slice(0, ie), ee = T.localName = B.slice(ie + 1)) : (J = null, ee = T.localName = B);
    var he = T.uri = M[J || ""];
    if (E.startElement(he, ee, B, T), T.closed) {
      if (E.endElement(he, ee, B), j) for (J in j) Object.prototype.hasOwnProperty.call(j, J) && E.endPrefixMapping(J);
    } else return T.currentNSMap = M, T.localNSMap = j, true;
  }
  function N(T, E, M, B, j) {
    if (/^(?:script|textarea)$/i.test(M)) {
      var K = T.indexOf("</" + M + ">", E), Y = T.substring(E + 1, K);
      if (/[&<]/.test(Y)) return /^script$/i.test(M) ? (j.characters(Y, 0, Y.length), K) : (Y = Y.replace(/&#?\w+;/g, B), j.characters(Y, 0, Y.length), K);
    }
    return E + 1;
  }
  function z(T, E, M, B) {
    var j = B[M];
    return j == null && (j = T.lastIndexOf("</" + M + ">"), j < E && (j = T.lastIndexOf("</" + M)), B[M] = j), j < E;
  }
  function W(T, E) {
    for (var M in T) Object.prototype.hasOwnProperty.call(T, M) && (E[M] = T[M]);
  }
  function H(T, E, M, B) {
    var j = T.charAt(E + 2);
    switch (j) {
      case "-":
        if (T.charAt(E + 3) === "-") {
          var K = T.indexOf("-->", E + 4);
          return K > E ? (M.comment(T, E + 4, K - E - 4), K + 3) : (B.error("Unclosed comment"), -1);
        } else return -1;
      default:
        if (T.substr(E + 3, 6) == "CDATA[") {
          var K = T.indexOf("]]>", E + 9);
          return M.startCDATA(), M.characters(T, E + 9, K - E - 9), M.endCDATA(), K + 3;
        }
        var Y = V(T, E), re = Y.length;
        if (re > 1 && /!doctype/i.test(Y[0][0])) {
          var J = Y[1][0], ee = false, Z = false;
          re > 3 && (/^public$/i.test(Y[2][0]) ? (ee = Y[3][0], Z = re > 4 && Y[4][0]) : /^system$/i.test(Y[2][0]) && (Z = Y[3][0]));
          var Q = Y[re - 1];
          return M.startDTD(J, ee, Z), M.endDTD(), Q.index + Q[0].length;
        }
    }
    return -1;
  }
  function $(T, E, M) {
    var B = T.indexOf("?>", E);
    if (B) {
      var j = T.substring(E, B).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      return j ? (j[0].length, M.processingInstruction(j[1], j[2]), B + 2) : -1;
    }
    return -1;
  }
  function R() {
    this.attributeNames = {};
  }
  R.prototype = { setTagName: function(T) {
    if (!i.test(T)) throw new Error("invalid tagName:" + T);
    this.tagName = T;
  }, addValue: function(T, E, M) {
    if (!i.test(T)) throw new Error("invalid attribute:" + T);
    this.attributeNames[T] = this.length, this[this.length++] = { qName: T, value: E, offset: M };
  }, length: 0, getLocalName: function(T) {
    return this[T].localName;
  }, getLocator: function(T) {
    return this[T].locator;
  }, getQName: function(T) {
    return this[T].qName;
  }, getURI: function(T) {
    return this[T].uri;
  }, getValue: function(T) {
    return this[T].value;
  } };
  function V(T, E) {
    var M, B = [], j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (j.lastIndex = E, j.exec(T); M = j.exec(T); ) if (B.push(M), M[1]) return B;
  }
  return vn.XMLReader = _, vn.ParseError = g, vn;
}
var Fu;
function fp() {
  if (Fu) return Ti;
  Fu = 1;
  var s12 = ea(), r = Jl(), n = dp(), i = cp(), e = r.DOMImplementation, t = s12.NAMESPACE, a = i.ParseError, o = i.XMLReader;
  function u(S) {
    return S.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
  }
  function l(S) {
    this.options = S || { locator: {} };
  }
  l.prototype.parseFromString = function(S, F) {
    var N = this.options, z = new o(), W = N.domBuilder || new m(), H = N.errorHandler, $ = N.locator, R = N.xmlns || {}, V = /\/x?html?$/.test(F), T = V ? n.HTML_ENTITIES : n.XML_ENTITIES;
    $ && W.setDocumentLocator($), z.errorHandler = c(H, W, $), z.domBuilder = N.domBuilder || W, V && (R[""] = t.HTML), R.xml = R.xml || t.XML;
    var E = N.normalizeLineEndings || u;
    return S && typeof S == "string" ? z.parse(E(S), R, T) : z.errorHandler.error("invalid doc source"), W.doc;
  };
  function c(S, F, N) {
    if (!S) {
      if (F instanceof m) return F;
      S = F;
    }
    var z = {}, W = S instanceof Function;
    N = N || {};
    function H($) {
      var R = S[$];
      !R && W && (R = S.length == 2 ? function(V) {
        S($, V);
      } : S), z[$] = R && function(V) {
        R("[xmldom " + $ + "]	" + V + _(N));
      } || function() {
      };
    }
    return H("warning"), H("error"), H("fatalError"), z;
  }
  function m() {
    this.cdata = false;
  }
  function g(S, F) {
    F.lineNumber = S.lineNumber, F.columnNumber = S.columnNumber;
  }
  m.prototype = { startDocument: function() {
    this.doc = new e().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  }, startElement: function(S, F, N, z) {
    var W = this.doc, H = W.createElementNS(S, N || F), $ = z.length;
    w(this, H), this.currentElement = H, this.locator && g(this.locator, H);
    for (var R = 0; R < $; R++) {
      var S = z.getURI(R), V = z.getValue(R), N = z.getQName(R), T = W.createAttributeNS(S, N);
      this.locator && g(z.getLocator(R), T), T.value = T.nodeValue = V, H.setAttributeNode(T);
    }
  }, endElement: function(S, F, N) {
    var z = this.currentElement;
    z.tagName, this.currentElement = z.parentNode;
  }, startPrefixMapping: function(S, F) {
  }, endPrefixMapping: function(S) {
  }, processingInstruction: function(S, F) {
    var N = this.doc.createProcessingInstruction(S, F);
    this.locator && g(this.locator, N), w(this, N);
  }, ignorableWhitespace: function(S, F, N) {
  }, characters: function(S, F, N) {
    if (S = C.apply(this, arguments), S) {
      if (this.cdata) var z = this.doc.createCDATASection(S);
      else var z = this.doc.createTextNode(S);
      this.currentElement ? this.currentElement.appendChild(z) : /^\s*$/.test(S) && this.doc.appendChild(z), this.locator && g(this.locator, z);
    }
  }, skippedEntity: function(S) {
  }, endDocument: function() {
    this.doc.normalize();
  }, setDocumentLocator: function(S) {
    (this.locator = S) && (S.lineNumber = 0);
  }, comment: function(S, F, N) {
    S = C.apply(this, arguments);
    var z = this.doc.createComment(S);
    this.locator && g(this.locator, z), w(this, z);
  }, startCDATA: function() {
    this.cdata = true;
  }, endCDATA: function() {
    this.cdata = false;
  }, startDTD: function(S, F, N) {
    var z = this.doc.implementation;
    if (z && z.createDocumentType) {
      var W = z.createDocumentType(S, F, N);
      this.locator && g(this.locator, W), w(this, W), this.doc.doctype = W;
    }
  }, warning: function(S) {
    console.warn("[xmldom warning]	" + S, _(this.locator));
  }, error: function(S) {
    console.error("[xmldom error]	" + S, _(this.locator));
  }, fatalError: function(S) {
    throw new a(S, this.locator);
  } };
  function _(S) {
    if (S) return `
@` + (S.systemId || "") + "#[line:" + S.lineNumber + ",col:" + S.columnNumber + "]";
  }
  function C(S, F, N) {
    return typeof S == "string" ? S.substr(F, N) : S.length >= F + N || F ? new java.lang.String(S, F, N) + "" : S;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(S) {
    m.prototype[S] = function() {
      return null;
    };
  });
  function w(S, F) {
    S.currentElement ? S.currentElement.appendChild(F) : S.doc.appendChild(F);
  }
  return Ti.__DOMHandler = m, Ti.normalizeLineEndings = u, Ti.DOMParser = l, Ti;
}
var Ru;
function hp() {
  if (Ru) return _i;
  Ru = 1;
  var s12 = Jl();
  return _i.DOMImplementation = s12.DOMImplementation, _i.XMLSerializer = s12.XMLSerializer, _i.DOMParser = fp().DOMParser, _i;
}
var pp = hp();
/*! @name mpd-parser @version 0.22.1 @license Apache-2.0 */
var Mu = function(r) {
  return !!r && typeof r == "object";
}, dt = function s() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
  return n.reduce(function(e, t) {
    return typeof t != "object" || Object.keys(t).forEach(function(a) {
      Array.isArray(e[a]) && Array.isArray(t[a]) ? e[a] = e[a].concat(t[a]) : Mu(e[a]) && Mu(t[a]) ? e[a] = s(e[a], t[a]) : e[a] = t[a];
    }), e;
  }, {});
}, Zl = function(r) {
  return Object.keys(r).map(function(n) {
    return r[n];
  });
}, mp = function(r, n) {
  for (var i = [], e = r; e < n; e++) i.push(e);
  return i;
}, ta = function(r) {
  return r.reduce(function(n, i) {
    return n.concat(i);
  }, []);
}, ed = function(r) {
  if (!r.length) return [];
  for (var n = [], i = 0; i < r.length; i++) n.push(r[i]);
  return n;
}, gp = function(r, n) {
  return r.reduce(function(i, e, t) {
    return e[n] && i.push(t), i;
  }, []);
}, ds = function(r, n) {
  for (var i = 0; i < r.length; i++) if (n(r[i])) return i;
  return -1;
}, vp = function(r, n) {
  return Zl(r.reduce(function(i, e) {
    return e.forEach(function(t) {
      i[n(t)] = t;
    }), i;
  }, {}));
}, Xr = { INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD", DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST", DASH_INVALID_XML: "DASH_INVALID_XML", NO_BASE_URL: "NO_BASE_URL", SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED", UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME" }, Ii = function(r) {
  var n = r.baseUrl, i = n === void 0 ? "" : n, e = r.source, t = e === void 0 ? "" : e, a = r.range, o = a === void 0 ? "" : a, u = r.indexRange, l = u === void 0 ? "" : u, c = { uri: t, resolvedUri: Zn(i || "", t) };
  if (o || l) {
    var m = o || l, g = m.split("-"), _ = P.BigInt ? P.BigInt(g[0]) : parseInt(g[0], 10), C = P.BigInt ? P.BigInt(g[1]) : parseInt(g[1], 10);
    _ < Number.MAX_SAFE_INTEGER && typeof _ == "bigint" && (_ = Number(_)), C < Number.MAX_SAFE_INTEGER && typeof C == "bigint" && (C = Number(C));
    var w;
    typeof C == "bigint" || typeof _ == "bigint" ? w = P.BigInt(C) - P.BigInt(_) + P.BigInt(1) : w = C - _ + 1, typeof w == "bigint" && w < Number.MAX_SAFE_INTEGER && (w = Number(w)), c.byterange = { length: w, offset: _ };
  }
  return c;
}, yp = function(r) {
  var n;
  return typeof r.offset == "bigint" || typeof r.length == "bigint" ? n = P.BigInt(r.offset) + P.BigInt(r.length) - P.BigInt(1) : n = r.offset + r.length - 1, r.offset + "-" + n;
}, Nu = function(r) {
  return r && typeof r != "number" && (r = parseInt(r, 10)), isNaN(r) ? null : r;
}, _p = { static: function(r) {
  var n = r.duration, i = r.timescale, e = i === void 0 ? 1 : i, t = r.sourceDuration, a = r.periodDuration, o = Nu(r.endNumber), u = n / e;
  return typeof o == "number" ? { start: 0, end: o } : typeof a == "number" ? { start: 0, end: a / u } : { start: 0, end: t / u };
}, dynamic: function(r) {
  var n = r.NOW, i = r.clientOffset, e = r.availabilityStartTime, t = r.timescale, a = t === void 0 ? 1 : t, o = r.duration, u = r.periodStart, l = u === void 0 ? 0 : u, c = r.minimumUpdatePeriod, m = c === void 0 ? 0 : c, g = r.timeShiftBufferDepth, _ = g === void 0 ? 1 / 0 : g, C = Nu(r.endNumber), w = (n + i) / 1e3, S = e + l, F = w + m, N = F - S, z = Math.ceil(N * a / o), W = Math.floor((w - S - _) * a / o), H = Math.floor((w - S) * a / o);
  return { start: Math.max(0, W), end: typeof C == "number" ? C : Math.min(z, H) };
} }, Tp = function(r) {
  return function(n) {
    var i = r.duration, e = r.timescale, t = e === void 0 ? 1 : e, a = r.periodStart, o = r.startNumber, u = o === void 0 ? 1 : o;
    return { number: u + n, duration: i / t, timeline: a, time: n * i };
  };
}, Ms = function(r) {
  var n = r.type, i = r.duration, e = r.timescale, t = e === void 0 ? 1 : e, a = r.periodDuration, o = r.sourceDuration, u = _p[n](r), l = u.start, c = u.end, m = mp(l, c).map(Tp(r));
  if (n === "static") {
    var g = m.length - 1, _ = typeof a == "number" ? a : o;
    m[g].duration = _ - i / t * g;
  }
  return m;
}, td = function(r) {
  var n = r.baseUrl, i = r.initialization, e = i === void 0 ? {} : i, t = r.sourceDuration, a = r.indexRange, o = a === void 0 ? "" : a, u = r.periodStart, l = r.presentationTime, c = r.number, m = c === void 0 ? 0 : c, g = r.duration;
  if (!n) throw new Error(Xr.NO_BASE_URL);
  var _ = Ii({ baseUrl: n, source: e.sourceURL, range: e.range }), C = Ii({ baseUrl: n, source: n, indexRange: o });
  if (C.map = _, g) {
    var w = Ms(r);
    w.length && (C.duration = w[0].duration, C.timeline = w[0].timeline);
  } else t && (C.duration = t, C.timeline = u);
  return C.presentationTime = l || u, C.number = m, [C];
}, Ns = function(r, n, i) {
  var e = r.sidx.map ? r.sidx.map : null, t = r.sidx.duration, a = r.timeline || 0, o = r.sidx.byterange, u = o.offset + o.length, l = n.timescale, c = n.references.filter(function(T) {
    return T.referenceType !== 1;
  }), m = [], g = r.endList ? "static" : "dynamic", _ = r.sidx.timeline, C = _, w = r.mediaSequence || 0, S;
  typeof n.firstOffset == "bigint" ? S = P.BigInt(u) + n.firstOffset : S = u + n.firstOffset;
  for (var F = 0; F < c.length; F++) {
    var N = n.references[F], z = N.referencedSize, W = N.subsegmentDuration, H = void 0;
    typeof S == "bigint" ? H = S + P.BigInt(z) - P.BigInt(1) : H = S + z - 1;
    var $ = S + "-" + H, R = { baseUrl: i, timescale: l, timeline: a, periodStart: _, presentationTime: C, number: w, duration: W, sourceDuration: t, indexRange: $, type: g }, V = td(R)[0];
    e && (V.map = e), m.push(V), typeof S == "bigint" ? S += P.BigInt(z) : S += z, C += W / l, w++;
  }
  return r.segments = m, r;
}, bp = ["AUDIO", "SUBTITLES"], xp = 1 / 60, rd = function(r) {
  return vp(r, function(n) {
    var i = n.timeline;
    return i;
  }).sort(function(n, i) {
    return n.timeline > i.timeline ? 1 : -1;
  });
}, Sp = function(r, n) {
  for (var i = 0; i < r.length; i++) if (r[i].attributes.NAME === n) return r[i];
  return null;
}, Bu = function(r) {
  var n = [];
  return lp(r, bp, function(i, e, t, a) {
    n = n.concat(i.playlists || []);
  }), n;
}, Uu = function(r) {
  var n = r.playlist, i = r.mediaSequence;
  n.mediaSequence = i, n.segments.forEach(function(e, t) {
    e.number = n.mediaSequence + t;
  });
}, Ep = function(r) {
  var n = r.oldPlaylists, i = r.newPlaylists, e = r.timelineStarts;
  i.forEach(function(t) {
    t.discontinuitySequence = ds(e, function(c) {
      var m = c.timeline;
      return m === t.timeline;
    });
    var a = Sp(n, t.attributes.NAME);
    if (a && !t.sidx) {
      var o = t.segments[0], u = ds(a.segments, function(c) {
        return Math.abs(c.presentationTime - o.presentationTime) < xp;
      });
      if (u === -1) {
        Uu({ playlist: t, mediaSequence: a.mediaSequence + a.segments.length }), t.segments[0].discontinuity = true, t.discontinuityStarts.unshift(0), (!a.segments.length && t.timeline > a.timeline || a.segments.length && t.timeline > a.segments[a.segments.length - 1].timeline) && t.discontinuitySequence--;
        return;
      }
      var l = a.segments[u];
      l.discontinuity && !o.discontinuity && (o.discontinuity = true, t.discontinuityStarts.unshift(0), t.discontinuitySequence--), Uu({ playlist: t, mediaSequence: a.segments[u].number });
    }
  });
}, Cp = function(r) {
  var n = r.oldManifest, i = r.newManifest, e = n.playlists.concat(Bu(n)), t = i.playlists.concat(Bu(i));
  return i.timelineStarts = rd([n.timelineStarts, i.timelineStarts]), Ep({ oldPlaylists: e, newPlaylists: t, timelineStarts: i.timelineStarts }), i;
}, ra = function(r) {
  return r && r.uri + "-" + yp(r.byterange);
}, qa = function(r) {
  var n = Zl(r.reduce(function(i, e) {
    var t = e.attributes.id + (e.attributes.lang || "");
    if (!i[t]) i[t] = e, i[t].attributes.timelineStarts = [];
    else {
      if (e.segments) {
        var a;
        e.segments[0] && (e.segments[0].discontinuity = true), (a = i[t].segments).push.apply(a, e.segments);
      }
      e.attributes.contentProtection && (i[t].attributes.contentProtection = e.attributes.contentProtection);
    }
    return i[t].attributes.timelineStarts.push({ start: e.attributes.periodStart, timeline: e.attributes.periodStart }), i;
  }, {}));
  return n.map(function(i) {
    return i.discontinuityStarts = gp(i.segments || [], "discontinuity"), i;
  });
}, Bs = function(r, n) {
  var i = ra(r.sidx), e = i && n[i] && n[i].sidx;
  return e && Ns(r, e, r.sidx.resolvedUri), r;
}, Ap = function(r, n) {
  if (n === void 0 && (n = {}), !Object.keys(n).length) return r;
  for (var i in r) r[i] = Bs(r[i], n);
  return r;
}, Dp = function(r, n) {
  var i, e = r.attributes, t = r.segments, a = r.sidx, o = r.mediaSequence, u = r.discontinuitySequence, l = r.discontinuityStarts, c = { attributes: (i = { NAME: e.id, BANDWIDTH: e.bandwidth, CODECS: e.codecs }, i["PROGRAM-ID"] = 1, i), uri: "", endList: e.type === "static", timeline: e.periodStart, resolvedUri: "", targetDuration: e.duration, discontinuitySequence: u, discontinuityStarts: l, timelineStarts: e.timelineStarts, mediaSequence: o, segments: t };
  return e.contentProtection && (c.contentProtection = e.contentProtection), a && (c.sidx = a), n && (c.attributes.AUDIO = "audio", c.attributes.SUBTITLES = "subs"), c;
}, wp = function(r) {
  var n, i = r.attributes, e = r.segments, t = r.mediaSequence, a = r.discontinuityStarts, o = r.discontinuitySequence;
  typeof e > "u" && (e = [{ uri: i.baseUrl, timeline: i.periodStart, resolvedUri: i.baseUrl || "", duration: i.sourceDuration, number: 0 }], i.duration = i.sourceDuration);
  var u = (n = { NAME: i.id, BANDWIDTH: i.bandwidth }, n["PROGRAM-ID"] = 1, n);
  return i.codecs && (u.CODECS = i.codecs), { attributes: u, uri: "", endList: i.type === "static", timeline: i.periodStart, resolvedUri: i.baseUrl || "", targetDuration: i.duration, timelineStarts: i.timelineStarts, discontinuityStarts: a, discontinuitySequence: o, mediaSequence: t, segments: e };
}, kp = function(r, n, i) {
  n === void 0 && (n = {}), i === void 0 && (i = false);
  var e, t = r.reduce(function(o, u) {
    var l = u.attributes.role && u.attributes.role.value || "", c = u.attributes.lang || "", m = u.attributes.label || "main";
    if (c && !u.attributes.label) {
      var g = l ? " (" + l + ")" : "";
      m = "" + u.attributes.lang + g;
    }
    o[m] || (o[m] = { language: c, autoselect: true, default: l === "main", playlists: [], uri: "" });
    var _ = Bs(Dp(u, i), n);
    return o[m].playlists.push(_), typeof e > "u" && l === "main" && (e = u, e.default = true), o;
  }, {});
  if (!e) {
    var a = Object.keys(t)[0];
    t[a].default = true;
  }
  return t;
}, Pp = function(r, n) {
  return n === void 0 && (n = {}), r.reduce(function(i, e) {
    var t = e.attributes.lang || "text";
    return i[t] || (i[t] = { language: t, default: false, autoselect: false, playlists: [], uri: "" }), i[t].playlists.push(Bs(wp(e), n)), i;
  }, {});
}, Ip = function(r) {
  return r.reduce(function(n, i) {
    return i && i.forEach(function(e) {
      var t = e.channel, a = e.language;
      n[a] = { autoselect: false, default: false, instreamId: t, language: a }, e.hasOwnProperty("aspectRatio") && (n[a].aspectRatio = e.aspectRatio), e.hasOwnProperty("easyReader") && (n[a].easyReader = e.easyReader), e.hasOwnProperty("3D") && (n[a]["3D"] = e["3D"]);
    }), n;
  }, {});
}, Op = function(r) {
  var n, i = r.attributes, e = r.segments, t = r.sidx, a = r.discontinuityStarts, o = { attributes: (n = { NAME: i.id, AUDIO: "audio", SUBTITLES: "subs", RESOLUTION: { width: i.width, height: i.height }, CODECS: i.codecs, BANDWIDTH: i.bandwidth }, n["PROGRAM-ID"] = 1, n), uri: "", endList: i.type === "static", timeline: i.periodStart, resolvedUri: "", targetDuration: i.duration, discontinuityStarts: a, timelineStarts: i.timelineStarts, segments: e };
  return i.frameRate && (o.attributes["FRAME-RATE"] = i.frameRate), i.contentProtection && (o.contentProtection = i.contentProtection), t && (o.sidx = t), o;
}, Lp = function(r) {
  var n = r.attributes;
  return n.mimeType === "video/mp4" || n.mimeType === "video/webm" || n.contentType === "video";
}, Fp = function(r) {
  var n = r.attributes;
  return n.mimeType === "audio/mp4" || n.mimeType === "audio/webm" || n.contentType === "audio";
}, Rp = function(r) {
  var n = r.attributes;
  return n.mimeType === "text/vtt" || n.contentType === "text";
}, Mp = function(r, n) {
  r.forEach(function(i) {
    i.mediaSequence = 0, i.discontinuitySequence = ds(n, function(e) {
      var t = e.timeline;
      return t === i.timeline;
    }), i.segments && i.segments.forEach(function(e, t) {
      e.number = t;
    });
  });
}, qu = function(r) {
  return r ? Object.keys(r).reduce(function(n, i) {
    var e = r[i];
    return n.concat(e.playlists);
  }, []) : [];
}, Np = function(r) {
  var n, i = r.dashPlaylists, e = r.locations, t = r.sidxMapping, a = t === void 0 ? {} : t, o = r.previousManifest;
  if (!i.length) return {};
  var u = i[0].attributes, l = u.sourceDuration, c = u.type, m = u.suggestedPresentationDelay, g = u.minimumUpdatePeriod, _ = qa(i.filter(Lp)).map(Op), C = qa(i.filter(Fp)), w = qa(i.filter(Rp)), S = i.map(function(R) {
    return R.attributes.captionServices;
  }).filter(Boolean), F = { allowCache: true, discontinuityStarts: [], segments: [], endList: true, mediaGroups: (n = { AUDIO: {}, VIDEO: {} }, n["CLOSED-CAPTIONS"] = {}, n.SUBTITLES = {}, n), uri: "", duration: l, playlists: Ap(_, a) };
  g >= 0 && (F.minimumUpdatePeriod = g * 1e3), e && (F.locations = e), c === "dynamic" && (F.suggestedPresentationDelay = m);
  var N = F.playlists.length === 0, z = C.length ? kp(C, a, N) : null, W = w.length ? Pp(w, a) : null, H = _.concat(qu(z), qu(W)), $ = H.map(function(R) {
    var V = R.timelineStarts;
    return V;
  });
  return F.timelineStarts = rd($), Mp(H, F.timelineStarts), z && (F.mediaGroups.AUDIO.audio = z), W && (F.mediaGroups.SUBTITLES.subs = W), S.length && (F.mediaGroups["CLOSED-CAPTIONS"].cc = Ip(S)), o ? Cp({ oldManifest: o, newManifest: F }) : F;
}, Bp = function(r, n, i) {
  var e = r.NOW, t = r.clientOffset, a = r.availabilityStartTime, o = r.timescale, u = o === void 0 ? 1 : o, l = r.periodStart, c = l === void 0 ? 0 : l, m = r.minimumUpdatePeriod, g = m === void 0 ? 0 : m, _ = (e + t) / 1e3, C = a + c, w = _ + g, S = w - C;
  return Math.ceil((S * u - n) / i);
}, id = function(r, n) {
  for (var i = r.type, e = r.minimumUpdatePeriod, t = e === void 0 ? 0 : e, a = r.media, o = a === void 0 ? "" : a, u = r.sourceDuration, l = r.timescale, c = l === void 0 ? 1 : l, m = r.startNumber, g = m === void 0 ? 1 : m, _ = r.periodStart, C = [], w = -1, S = 0; S < n.length; S++) {
    var F = n[S], N = F.d, z = F.r || 0, W = F.t || 0;
    w < 0 && (w = W), W && W > w && (w = W);
    var H = void 0;
    if (z < 0) {
      var $ = S + 1;
      $ === n.length ? i === "dynamic" && t > 0 && o.indexOf("$Number$") > 0 ? H = Bp(r, w, N) : H = (u * c - w) / N : H = (n[$].t - w) / N;
    } else H = z + 1;
    for (var R = g + C.length + H, V = g + C.length; V < R; ) C.push({ number: V, duration: N / c, time: w, timeline: _ }), w += N, V++;
  }
  return C;
}, Up = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g, qp = function(r) {
  return function(n, i, e, t) {
    if (n === "$$") return "$";
    if (typeof r[i] > "u") return n;
    var a = "" + r[i];
    return i === "RepresentationID" || (e ? t = parseInt(t, 10) : t = 1, a.length >= t) ? a : "" + new Array(t - a.length + 1).join("0") + a;
  };
}, Vu = function(r, n) {
  return r.replace(Up, qp(n));
}, Vp = function(r, n) {
  return !r.duration && !n ? [{ number: r.startNumber || 1, duration: r.sourceDuration, time: 0, timeline: r.periodStart }] : r.duration ? Ms(r) : id(r, n);
}, jp = function(r, n) {
  var i = { RepresentationID: r.id, Bandwidth: r.bandwidth || 0 }, e = r.initialization, t = e === void 0 ? { sourceURL: "", range: "" } : e, a = Ii({ baseUrl: r.baseUrl, source: Vu(t.sourceURL, i), range: t.range }), o = Vp(r, n);
  return o.map(function(u) {
    i.Number = u.number, i.Time = u.time;
    var l = Vu(r.media || "", i), c = r.timescale || 1, m = r.presentationTimeOffset || 0, g = r.periodStart + (u.time - m) / c, _ = { uri: l, timeline: u.timeline, duration: u.duration, resolvedUri: Zn(r.baseUrl || "", l), map: a, number: u.number, presentationTime: g };
    return _;
  });
}, Hp = function(r, n) {
  var i = r.baseUrl, e = r.initialization, t = e === void 0 ? {} : e, a = Ii({ baseUrl: i, source: t.sourceURL, range: t.range }), o = Ii({ baseUrl: i, source: n.media, range: n.mediaRange });
  return o.map = a, o;
}, Wp = function(r, n) {
  var i = r.duration, e = r.segmentUrls, t = e === void 0 ? [] : e, a = r.periodStart;
  if (!i && !n || i && n) throw new Error(Xr.SEGMENT_TIME_UNSPECIFIED);
  var o = t.map(function(c) {
    return Hp(r, c);
  }), u;
  i && (u = Ms(r)), n && (u = id(r, n));
  var l = u.map(function(c, m) {
    if (o[m]) {
      var g = o[m], _ = r.timescale || 1, C = r.presentationTimeOffset || 0;
      return g.timeline = c.timeline, g.duration = c.duration, g.number = c.number, g.presentationTime = a + (c.time - C) / _, g;
    }
  }).filter(function(c) {
    return c;
  });
  return l;
}, Gp = function(r) {
  var n = r.attributes, i = r.segmentInfo, e, t;
  i.template ? (t = jp, e = dt(n, i.template)) : i.base ? (t = td, e = dt(n, i.base)) : i.list && (t = Wp, e = dt(n, i.list));
  var a = { attributes: n };
  if (!t) return a;
  var o = t(e, i.segmentTimeline);
  if (e.duration) {
    var u = e, l = u.duration, c = u.timescale, m = c === void 0 ? 1 : c;
    e.duration = l / m;
  } else o.length ? e.duration = o.reduce(function(g, _) {
    return Math.max(g, Math.ceil(_.duration));
  }, 0) : e.duration = 0;
  return a.attributes = e, a.segments = o, i.base && e.indexRange && (a.sidx = o[0], a.segments = []), a;
}, zp = function(r) {
  return r.map(Gp);
}, We = function(r, n) {
  return ed(r.childNodes).filter(function(i) {
    var e = i.tagName;
    return e === n;
  });
}, Us = function(r) {
  return r.textContent.trim();
}, Kp = function(r) {
  return parseFloat(r.split("/").reduce(function(n, i) {
    return n / i;
  }));
}, Br = function(r) {
  var n = 31536e3, i = 720 * 60 * 60, e = 1440 * 60, t = 3600, a = 60, o = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/, u = o.exec(r);
  if (!u) return 0;
  var l = u.slice(1), c = l[0], m = l[1], g = l[2], _ = l[3], C = l[4], w = l[5];
  return parseFloat(c || 0) * n + parseFloat(m || 0) * i + parseFloat(g || 0) * e + parseFloat(_ || 0) * t + parseFloat(C || 0) * a + parseFloat(w || 0);
}, Xp = function(r) {
  var n = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/;
  return n.test(r) && (r += "Z"), Date.parse(r);
}, ju = { mediaPresentationDuration: function(r) {
  return Br(r);
}, availabilityStartTime: function(r) {
  return Xp(r) / 1e3;
}, minimumUpdatePeriod: function(r) {
  return Br(r);
}, suggestedPresentationDelay: function(r) {
  return Br(r);
}, type: function(r) {
  return r;
}, timeShiftBufferDepth: function(r) {
  return Br(r);
}, start: function(r) {
  return Br(r);
}, width: function(r) {
  return parseInt(r, 10);
}, height: function(r) {
  return parseInt(r, 10);
}, bandwidth: function(r) {
  return parseInt(r, 10);
}, frameRate: function(r) {
  return Kp(r);
}, startNumber: function(r) {
  return parseInt(r, 10);
}, timescale: function(r) {
  return parseInt(r, 10);
}, presentationTimeOffset: function(r) {
  return parseInt(r, 10);
}, duration: function(r) {
  var n = parseInt(r, 10);
  return isNaN(n) ? Br(r) : n;
}, d: function(r) {
  return parseInt(r, 10);
}, t: function(r) {
  return parseInt(r, 10);
}, r: function(r) {
  return parseInt(r, 10);
}, DEFAULT: function(r) {
  return r;
} }, nt = function(r) {
  return r && r.attributes ? ed(r.attributes).reduce(function(n, i) {
    var e = ju[i.name] || ju.DEFAULT;
    return n[i.name] = e(i.value), n;
  }, {}) : {};
}, $p = { "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha", "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready", "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime" }, ia = function(r, n) {
  return n.length ? ta(r.map(function(i) {
    return n.map(function(e) {
      return Zn(i, Us(e));
    });
  })) : r;
}, qs = function(r) {
  var n = We(r, "SegmentTemplate")[0], i = We(r, "SegmentList")[0], e = i && We(i, "SegmentURL").map(function(g) {
    return dt({ tag: "SegmentURL" }, nt(g));
  }), t = We(r, "SegmentBase")[0], a = i || n, o = a && We(a, "SegmentTimeline")[0], u = i || t || n, l = u && We(u, "Initialization")[0], c = n && nt(n);
  c && l ? c.initialization = l && nt(l) : c && c.initialization && (c.initialization = { sourceURL: c.initialization });
  var m = { template: c, segmentTimeline: o && We(o, "S").map(function(g) {
    return nt(g);
  }), list: i && dt(nt(i), { segmentUrls: e, initialization: nt(l) }), base: t && dt(nt(t), { initialization: nt(l) }) };
  return Object.keys(m).forEach(function(g) {
    m[g] || delete m[g];
  }), m;
}, Yp = function(r, n, i) {
  return function(e) {
    var t = We(e, "BaseURL"), a = ia(n, t), o = dt(r, nt(e)), u = qs(e);
    return a.map(function(l) {
      return { segmentInfo: dt(i, u), attributes: dt(o, { baseUrl: l }) };
    });
  };
}, Qp = function(r) {
  return r.reduce(function(n, i) {
    var e = nt(i);
    e.schemeIdUri && (e.schemeIdUri = e.schemeIdUri.toLowerCase());
    var t = $p[e.schemeIdUri];
    if (t) {
      n[t] = { attributes: e };
      var a = We(i, "cenc:pssh")[0];
      if (a) {
        var o = Us(a);
        n[t].pssh = o && zl(o);
      }
    }
    return n;
  }, {});
}, Jp = function(r) {
  if (r.schemeIdUri === "urn:scte:dash:cc:cea-608:2015") {
    var n = typeof r.value != "string" ? [] : r.value.split(";");
    return n.map(function(e) {
      var t, a;
      if (a = e, /^CC\d=/.test(e)) {
        var o = e.split("=");
        t = o[0], a = o[1];
      } else /^CC\d$/.test(e) && (t = e);
      return { channel: t, language: a };
    });
  } else if (r.schemeIdUri === "urn:scte:dash:cc:cea-708:2015") {
    var i = typeof r.value != "string" ? [] : r.value.split(";");
    return i.map(function(e) {
      var t = { channel: void 0, language: void 0, aspectRatio: 1, easyReader: 0, "3D": 0 };
      if (/=/.test(e)) {
        var a = e.split("="), o = a[0], u = a[1], l = u === void 0 ? "" : u;
        t.channel = o, t.language = e, l.split(",").forEach(function(c) {
          var m = c.split(":"), g = m[0], _ = m[1];
          g === "lang" ? t.language = _ : g === "er" ? t.easyReader = Number(_) : g === "war" ? t.aspectRatio = Number(_) : g === "3D" && (t["3D"] = Number(_));
        });
      } else t.language = e;
      return t.channel && (t.channel = "SERVICE" + t.channel), t;
    });
  }
}, Zp = function(r, n, i) {
  return function(e) {
    var t = nt(e), a = ia(n, We(e, "BaseURL")), o = We(e, "Role")[0], u = { role: nt(o) }, l = dt(r, t, u), c = We(e, "Accessibility")[0], m = Jp(nt(c));
    m && (l = dt(l, { captionServices: m }));
    var g = We(e, "Label")[0];
    if (g && g.childNodes.length) {
      var _ = g.childNodes[0].nodeValue.trim();
      l = dt(l, { label: _ });
    }
    var C = Qp(We(e, "ContentProtection"));
    Object.keys(C).length && (l = dt(l, { contentProtection: C }));
    var w = qs(e), S = We(e, "Representation"), F = dt(i, w);
    return ta(S.map(Yp(l, a, F)));
  };
}, em = function(r, n) {
  return function(i, e) {
    var t = ia(n, We(i.node, "BaseURL")), a = dt(r, { periodStart: i.attributes.start });
    typeof i.attributes.duration == "number" && (a.periodDuration = i.attributes.duration);
    var o = We(i.node, "AdaptationSet"), u = qs(i.node);
    return ta(o.map(Zp(a, t, u)));
  };
}, tm = function(r) {
  var n = r.attributes, i = r.priorPeriodAttributes, e = r.mpdType;
  return typeof n.start == "number" ? n.start : i && typeof i.start == "number" && typeof i.duration == "number" ? i.start + i.duration : !i && e === "static" ? 0 : null;
}, rm = function(r, n) {
  n === void 0 && (n = {});
  var i = n, e = i.manifestUri, t = e === void 0 ? "" : e, a = i.NOW, o = a === void 0 ? Date.now() : a, u = i.clientOffset, l = u === void 0 ? 0 : u, c = We(r, "Period");
  if (!c.length) throw new Error(Xr.INVALID_NUMBER_OF_PERIOD);
  var m = We(r, "Location"), g = nt(r), _ = ia([t], We(r, "BaseURL"));
  g.type = g.type || "static", g.sourceDuration = g.mediaPresentationDuration || 0, g.NOW = o, g.clientOffset = l, m.length && (g.locations = m.map(Us));
  var C = [];
  return c.forEach(function(w, S) {
    var F = nt(w), N = C[S - 1];
    F.start = tm({ attributes: F, priorPeriodAttributes: N ? N.attributes : null, mpdType: g.type }), C.push({ node: w, attributes: F });
  }), { locations: g.locations, representationInfo: ta(C.map(em(g, _))) };
}, nd = function(r) {
  if (r === "") throw new Error(Xr.DASH_EMPTY_MANIFEST);
  var n = new pp.DOMParser(), i, e;
  try {
    i = n.parseFromString(r, "application/xml"), e = i && i.documentElement.tagName === "MPD" ? i.documentElement : null;
  } catch {
  }
  if (!e || e && e.getElementsByTagName("parsererror").length > 0) throw new Error(Xr.DASH_INVALID_XML);
  return e;
}, im = function(r) {
  var n = We(r, "UTCTiming")[0];
  if (!n) return null;
  var i = nt(n);
  switch (i.schemeIdUri) {
    case "urn:mpeg:dash:utc:http-head:2014":
    case "urn:mpeg:dash:utc:http-head:2012":
      i.method = "HEAD";
      break;
    case "urn:mpeg:dash:utc:http-xsdate:2014":
    case "urn:mpeg:dash:utc:http-iso:2014":
    case "urn:mpeg:dash:utc:http-xsdate:2012":
    case "urn:mpeg:dash:utc:http-iso:2012":
      i.method = "GET";
      break;
    case "urn:mpeg:dash:utc:direct:2014":
    case "urn:mpeg:dash:utc:direct:2012":
      i.method = "DIRECT", i.value = Date.parse(i.value);
      break;
    case "urn:mpeg:dash:utc:http-ntp:2014":
    case "urn:mpeg:dash:utc:ntp:2014":
    case "urn:mpeg:dash:utc:sntp:2014":
    default:
      throw new Error(Xr.UNSUPPORTED_UTC_TIMING_SCHEME);
  }
  return i;
}, nm = function(r, n) {
  n === void 0 && (n = {});
  var i = rm(nd(r), n), e = zp(i.representationInfo);
  return Np({ dashPlaylists: e, locations: i.locations, sidxMapping: n.sidxMapping, previousManifest: n.previousManifest });
}, am = function(r) {
  return im(nd(r));
}, Va, Hu;
function sm() {
  if (Hu) return Va;
  Hu = 1;
  var s12 = Math.pow(2, 32), r = function(n) {
    var i = new DataView(n.buffer, n.byteOffset, n.byteLength), e;
    return i.getBigUint64 ? (e = i.getBigUint64(0), e < Number.MAX_SAFE_INTEGER ? Number(e) : e) : i.getUint32(0) * s12 + i.getUint32(4);
  };
  return Va = { getUint64: r, MAX_UINT32: s12 }, Va;
}
var ja, Wu;
function om() {
  if (Wu) return ja;
  Wu = 1;
  var s12 = sm().getUint64, r = function(n) {
    var i = new DataView(n.buffer, n.byteOffset, n.byteLength), e = { version: n[0], flags: new Uint8Array(n.subarray(1, 4)), references: [], referenceId: i.getUint32(4), timescale: i.getUint32(8) }, t = 12;
    e.version === 0 ? (e.earliestPresentationTime = i.getUint32(t), e.firstOffset = i.getUint32(t + 4), t += 8) : (e.earliestPresentationTime = s12(n.subarray(t)), e.firstOffset = s12(n.subarray(t + 8)), t += 16), t += 2;
    var a = i.getUint16(t);
    for (t += 2; a > 0; t += 12, a--) e.references.push({ referenceType: (n[t] & 128) >>> 7, referencedSize: i.getUint32(t) & 2147483647, subsegmentDuration: i.getUint32(t + 4), startsWithSap: !!(n[t + 8] & 128), sapType: (n[t + 8] & 112) >>> 4, sapDeltaTime: i.getUint32(t + 8) & 268435455 });
    return e;
  };
  return ja = r, ja;
}
var um = om();
const lm = mr(um);
var dm = fe([73, 68, 51]), cm = function(r, n) {
  n === void 0 && (n = 0), r = fe(r);
  var i = r[n + 5], e = r[n + 6] << 21 | r[n + 7] << 14 | r[n + 8] << 7 | r[n + 9], t = (i & 16) >> 4;
  return t ? e + 20 : e + 10;
}, Ei = function s2(r, n) {
  return n === void 0 && (n = 0), r = fe(r), r.length - n < 10 || !Me(r, dm, { offset: n }) ? n : (n += cm(r, n), s2(r, n));
}, Gu = function(r) {
  return typeof r == "string" ? Ql(r) : r;
}, fm = function(r) {
  return Array.isArray(r) ? r.map(function(n) {
    return Gu(n);
  }) : [Gu(r)];
}, hm = function s3(r, n, i) {
  i === void 0 && (i = false), n = fm(n), r = fe(r);
  var e = [];
  if (!n.length) return e;
  for (var t = 0; t < r.length; ) {
    var a = (r[t] << 24 | r[t + 1] << 16 | r[t + 2] << 8 | r[t + 3]) >>> 0, o = r.subarray(t + 4, t + 8);
    if (a === 0) break;
    var u = t + a;
    if (u > r.length) {
      if (i) break;
      u = r.length;
    }
    var l = r.subarray(t + 8, u);
    Me(o, n[0]) && (n.length === 1 ? e.push(l) : e.push.apply(e, s3(l, n.slice(1), i))), t = u;
  }
  return e;
}, yn = { EBML: fe([26, 69, 223, 163]), DocType: fe([66, 130]), Segment: fe([24, 83, 128, 103]), SegmentInfo: fe([21, 73, 169, 102]), Tracks: fe([22, 84, 174, 107]), Track: fe([174]), TrackNumber: fe([215]), DefaultDuration: fe([35, 227, 131]), TrackEntry: fe([174]), TrackType: fe([131]), FlagDefault: fe([136]), CodecID: fe([134]), CodecPrivate: fe([99, 162]), VideoTrack: fe([224]), AudioTrack: fe([225]), Cluster: fe([31, 67, 182, 117]), Timestamp: fe([231]), TimestampScale: fe([42, 215, 177]), BlockGroup: fe([160]), BlockDuration: fe([155]), Block: fe([161]), SimpleBlock: fe([163]) }, cs = [128, 64, 32, 16, 8, 4, 2, 1], pm = function(r) {
  for (var n = 1, i = 0; i < cs.length && !(r & cs[i]); i++) n++;
  return n;
}, Ln = function(r, n, i, e) {
  i === void 0 && (i = true), e === void 0 && (e = false);
  var t = pm(r[n]), a = r.subarray(n, n + t);
  return i && (a = Array.prototype.slice.call(r, n, n + t), a[0] ^= cs[t - 1]), { length: t, value: sp(a, { signed: e }), bytes: a };
}, zu = function s4(r) {
  return typeof r == "string" ? r.match(/.{1,2}/g).map(function(n) {
    return s4(n);
  }) : typeof r == "number" ? op(r) : r;
}, mm = function(r) {
  return Array.isArray(r) ? r.map(function(n) {
    return zu(n);
  }) : [zu(r)];
}, gm = function s5(r, n, i) {
  if (i >= n.length) return n.length;
  var e = Ln(n, i, false);
  if (Me(r.bytes, e.bytes)) return i;
  var t = Ln(n, i + e.length);
  return s5(r, n, i + t.length + t.value + e.length);
}, Ku = function s6(r, n) {
  n = mm(n), r = fe(r);
  var i = [];
  if (!n.length) return i;
  for (var e = 0; e < r.length; ) {
    var t = Ln(r, e, false), a = Ln(r, e + t.length), o = e + t.length + a.length;
    a.value === 127 && (a.value = gm(t, r, o), a.value !== r.length && (a.value -= o));
    var u = o + a.value > r.length ? r.length : o + a.value, l = r.subarray(o, u);
    Me(n[0], t.bytes) && (n.length === 1 ? i.push(l) : i = i.concat(s6(l, n.slice(1))));
    var c = t.length + a.length + l.length;
    e += c;
  }
  return i;
}, vm = fe([0, 0, 0, 1]), ym = fe([0, 0, 1]), _m = fe([0, 0, 3]), Tm = function(r) {
  for (var n = [], i = 1; i < r.length - 2; ) Me(r.subarray(i, i + 3), _m) && (n.push(i + 2), i++), i++;
  if (n.length === 0) return r;
  var e = r.length - n.length, t = new Uint8Array(e), a = 0;
  for (i = 0; i < e; a++, i++) a === n[0] && (a++, n.shift()), t[i] = r[a];
  return t;
}, ad = function(r, n, i, e) {
  r = fe(r), i = [].concat(i);
  for (var t = 0, a, o = 0; t < r.length && (o < e || a); ) {
    var u = void 0;
    if (Me(r.subarray(t), vm) ? u = 4 : Me(r.subarray(t), ym) && (u = 3), !u) {
      t++;
      continue;
    }
    if (o++, a) return Tm(r.subarray(a, t));
    var l = void 0;
    n === "h264" ? l = r[t + u] & 31 : n === "h265" && (l = r[t + u] >> 1 & 63), i.indexOf(l) !== -1 && (a = t + u), t += u + (n === "h264" ? 1 : 2);
  }
  return r.subarray(0, 0);
}, bm = function(r, n, i) {
  return ad(r, "h264", n, i);
}, xm = function(r, n, i) {
  return ad(r, "h265", n, i);
}, ut = { webm: fe([119, 101, 98, 109]), matroska: fe([109, 97, 116, 114, 111, 115, 107, 97]), flac: fe([102, 76, 97, 67]), ogg: fe([79, 103, 103, 83]), ac3: fe([11, 119]), riff: fe([82, 73, 70, 70]), avi: fe([65, 86, 73]), wav: fe([87, 65, 86, 69]), "3gp": fe([102, 116, 121, 112, 51, 103]), mp4: fe([102, 116, 121, 112]), fmp4: fe([115, 116, 121, 112]), mov: fe([102, 116, 121, 112, 113, 116]), moov: fe([109, 111, 111, 118]), moof: fe([109, 111, 111, 102]) }, $r = { aac: function(r) {
  var n = Ei(r);
  return Me(r, [255, 16], { offset: n, mask: [255, 22] });
}, mp3: function(r) {
  var n = Ei(r);
  return Me(r, [255, 2], { offset: n, mask: [255, 6] });
}, webm: function(r) {
  var n = Ku(r, [yn.EBML, yn.DocType])[0];
  return Me(n, ut.webm);
}, mkv: function(r) {
  var n = Ku(r, [yn.EBML, yn.DocType])[0];
  return Me(n, ut.matroska);
}, mp4: function(r) {
  if ($r["3gp"](r) || $r.mov(r)) return false;
  if (Me(r, ut.mp4, { offset: 4 }) || Me(r, ut.fmp4, { offset: 4 }) || Me(r, ut.moof, { offset: 4 }) || Me(r, ut.moov, { offset: 4 })) return true;
}, mov: function(r) {
  return Me(r, ut.mov, { offset: 4 });
}, "3gp": function(r) {
  return Me(r, ut["3gp"], { offset: 4 });
}, ac3: function(r) {
  var n = Ei(r);
  return Me(r, ut.ac3, { offset: n });
}, ts: function(r) {
  if (r.length < 189 && r.length >= 1) return r[0] === 71;
  for (var n = 0; n + 188 < r.length && n < 188; ) {
    if (r[n] === 71 && r[n + 188] === 71) return true;
    n += 1;
  }
  return false;
}, flac: function(r) {
  var n = Ei(r);
  return Me(r, ut.flac, { offset: n });
}, ogg: function(r) {
  return Me(r, ut.ogg);
}, avi: function(r) {
  return Me(r, ut.riff) && Me(r, ut.avi, { offset: 8 });
}, wav: function(r) {
  return Me(r, ut.riff) && Me(r, ut.wav, { offset: 8 });
}, h264: function(r) {
  return bm(r, 7, 3).length;
}, h265: function(r) {
  return xm(r, [32, 33], 3).length;
} }, fs = Object.keys($r).filter(function(s12) {
  return s12 !== "ts" && s12 !== "h264" && s12 !== "h265";
}).concat(["ts", "h264", "h265"]);
fs.forEach(function(s12) {
  var r = $r[s12];
  $r[s12] = function(n) {
    return r(fe(n));
  };
});
var Sm = $r, Vs = function(r) {
  r = fe(r);
  for (var n = 0; n < fs.length; n++) {
    var i = fs[n];
    if (Sm[i](r)) return i;
  }
  return "";
}, Em = function(r) {
  return hm(r, ["moof"]).length > 0;
}, Ha, Xu;
function Cm() {
  if (Xu) return Ha;
  Xu = 1;
  var s12 = 9e4, r, n, i, e, t, a, o;
  return r = function(u) {
    return u * s12;
  }, n = function(u, l) {
    return u * l;
  }, i = function(u) {
    return u / s12;
  }, e = function(u, l) {
    return u / l;
  }, t = function(u, l) {
    return r(e(u, l));
  }, a = function(u, l) {
    return n(i(u), l);
  }, o = function(u, l, c) {
    return i(c ? u : u - l);
  }, Ha = { ONE_SECOND_IN_TS: s12, secondsToVideoTs: r, secondsToAudioTs: n, videoTsToSeconds: i, audioTsToSeconds: e, audioTsToVideoTs: t, videoTsToAudioTs: a, metadataTsToSeconds: o }, Ha;
}
var Fn = Cm();
function hs(s12) {
  return hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hs(s12);
}
function Am(s12) {
  try {
    return Function.toString.call(s12).indexOf("[native code]") !== -1;
  } catch {
    return typeof s12 == "function";
  }
}
function ps(s12) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ps = function(i) {
    if (i === null || !Am(i)) return i;
    if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(i)) return r.get(i);
      r.set(i, e);
    }
    function e() {
      return Gl(i, arguments, hs(this).constructor);
    }
    return e.prototype = Object.create(i.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }), Kr(e, i);
  }, ps(s12);
}
/**
* @license
* Video.js 7.21.7 <http://videojs.com/>
* Copyright Brightcove, Inc. <https://www.brightcove.com/>
* Available under Apache License Version 2.0
* <https://github.com/videojs/video.js/blob/main/LICENSE>
*
* Includes vtt.js <https://github.com/mozilla/vtt.js>
* Available under Apache License Version 2.0
* <https://github.com/mozilla/vtt.js/blob/main/LICENSE>
*/
var sd = "7.21.7", Qt = {}, fr = function(r, n) {
  return Qt[r] = Qt[r] || [], n && (Qt[r] = Qt[r].concat(n)), Qt[r];
}, Dm = function(r, n) {
  fr(r, n);
}, od = function(r, n) {
  var i = fr(r).indexOf(n);
  return i <= -1 ? false : (Qt[r] = Qt[r].slice(), Qt[r].splice(i, 1), true);
}, wm = function(r, n) {
  fr(r, [].concat(n).map(function(i) {
    var e = function t() {
      return od(r, t), i.apply(void 0, arguments);
    };
    return e;
  }));
}, Rn = { prefixed: true }, wn = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]], $u = wn[0], Ci;
for (var _n = 0; _n < wn.length; _n++) if (wn[_n][1] in ae) {
  Ci = wn[_n];
  break;
}
if (Ci) {
  for (var Tn = 0; Tn < Ci.length; Tn++) Rn[$u[Tn]] = Ci[Tn];
  Rn.prefixed = Ci[0] !== $u[0];
}
var gt = [], km = function(r, n) {
  return function(i, e, t) {
    var a = n.levels[e], o = new RegExp("^(" + a + ")$");
    if (i !== "log" && t.unshift(i.toUpperCase() + ":"), t.unshift(r + ":"), gt) {
      gt.push([].concat(t));
      var u = gt.length - 1e3;
      gt.splice(0, u > 0 ? u : 0);
    }
    if (P.console) {
      var l = P.console[i];
      !l && i === "debug" && (l = P.console.info || P.console.log), !(!l || !a || !o.test(i)) && l[Array.isArray(t) ? "apply" : "call"](P.console, t);
    }
  };
};
function ud(s12) {
  var r = "info", n, i = function() {
    for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++) a[o] = arguments[o];
    n("log", r, a);
  };
  return n = km(s12, i), i.createLogger = function(e) {
    return ud(s12 + ": " + e);
  }, i.levels = { all: "debug|log|warn|error", off: "", debug: "debug|log|warn|error", info: "log|warn|error", warn: "warn|error", error: "error", DEFAULT: r }, i.level = function(e) {
    if (typeof e == "string") {
      if (!i.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
      r = e;
    }
    return r;
  }, i.history = function() {
    return gt ? [].concat(gt) : [];
  }, i.history.filter = function(e) {
    return (gt || []).filter(function(t) {
      return new RegExp(".*" + e + ".*").test(t[0]);
    });
  }, i.history.clear = function() {
    gt && (gt.length = 0);
  }, i.history.disable = function() {
    gt !== null && (gt.length = 0, gt = null);
  }, i.history.enable = function() {
    gt === null && (gt = []);
  }, i.error = function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
    return n("error", r, t);
  }, i.warn = function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
    return n("warn", r, t);
  }, i.debug = function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
    return n("debug", r, t);
  }, i;
}
var Te = ud("VIDEOJS"), ld = Te.createLogger, Pm = Object.prototype.toString, dd = function(r) {
  return tr(r) ? Object.keys(r) : [];
};
function Wr(s12, r) {
  dd(s12).forEach(function(n) {
    return r(s12[n], n);
  });
}
function Im(s12, r, n) {
  return n === void 0 && (n = 0), dd(s12).reduce(function(i, e) {
    return r(i, s12[e], e);
  }, n);
}
function Ue(s12) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
  return Object.assign ? It.apply(void 0, [s12].concat(n)) : (n.forEach(function(e) {
    e && Wr(e, function(t, a) {
      s12[a] = t;
    });
  }), s12);
}
function tr(s12) {
  return !!s12 && typeof s12 == "object";
}
function Oi(s12) {
  return tr(s12) && Pm.call(s12) === "[object Object]" && s12.constructor === Object;
}
function Li(s12, r) {
  if (!s12 || !r) return "";
  if (typeof P.getComputedStyle == "function") {
    var n;
    try {
      n = P.getComputedStyle(s12);
    } catch {
      return "";
    }
    return n ? n.getPropertyValue(r) || n[r] : "";
  }
  return "";
}
var Je = P.navigator && P.navigator.userAgent || "", Yu = /AppleWebKit\/([\d.]+)/i.exec(Je), Om = Yu ? parseFloat(Yu.pop()) : null, cd = /iPod/i.test(Je), Lm = (function() {
  var s12 = Je.match(/OS (\d+)_/i);
  return s12 && s12[1] ? s12[1] : null;
})(), ir = /Android/i.test(Je), js = (function() {
  var s12 = Je.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
  if (!s12) return null;
  var r = s12[1] && parseFloat(s12[1]), n = s12[2] && parseFloat(s12[2]);
  return r && n ? parseFloat(s12[1] + "." + s12[2]) : r || null;
})(), fd = ir && js < 5 && Om < 537, hd = /Firefox/i.test(Je), Bi = /Edg/i.test(Je), nr = !Bi && (/Chrome/i.test(Je) || /CriOS/i.test(Je)), pd = (function() {
  var s12 = Je.match(/(Chrome|CriOS)\/(\d+)/);
  return s12 && s12[2] ? parseFloat(s12[2]) : null;
})(), Ui = (function() {
  var s12 = /MSIE\s(\d+)\.\d/.exec(Je), r = s12 && parseFloat(s12[1]);
  return !r && /Trident\/7.0/i.test(Je) && /rv:11.0/.test(Je) && (r = 11), r;
})(), Hs = /Safari/i.test(Je) && !nr && !ir && !Bi, md = /Windows/i.test(Je), Yr = !!(ri() && ("ontouchstart" in P || P.navigator.maxTouchPoints || P.DocumentTouch && P.document instanceof P.DocumentTouch)), Ws = /iPad/i.test(Je) || Hs && Yr && !/iPhone/i.test(Je), Gs = /iPhone/i.test(Je) && !Ws, ht = Gs || Ws || cd, na = (Hs || ht) && !nr, Fm = Object.freeze({ __proto__: null, IS_IPOD: cd, IOS_VERSION: Lm, IS_ANDROID: ir, ANDROID_VERSION: js, IS_NATIVE_ANDROID: fd, IS_FIREFOX: hd, IS_EDGE: Bi, IS_CHROME: nr, CHROME_VERSION: pd, IE_VERSION: Ui, IS_SAFARI: Hs, IS_WINDOWS: md, TOUCH_ENABLED: Yr, IS_IPAD: Ws, IS_IPHONE: Gs, IS_IOS: ht, IS_ANY_SAFARI: na });
function Qu(s12) {
  return typeof s12 == "string" && !!s12.trim();
}
function gd(s12) {
  if (s12.indexOf(" ") >= 0) throw new Error("class has illegal whitespace characters");
}
function Rm(s12) {
  return new RegExp("(^|\\s)" + s12 + "($|\\s)");
}
function ri() {
  return ae === P.document;
}
function ii(s12) {
  return tr(s12) && s12.nodeType === 1;
}
function vd() {
  try {
    return P.parent !== P.self;
  } catch {
    return true;
  }
}
function yd(s12) {
  return function(r, n) {
    if (!Qu(r)) return ae[s12](null);
    Qu(n) && (n = ae.querySelector(n));
    var i = ii(n) ? n : ae;
    return i[s12] && i[s12](r);
  };
}
function Ee(s12, r, n, i) {
  s12 === void 0 && (s12 = "div"), r === void 0 && (r = {}), n === void 0 && (n = {});
  var e = ae.createElement(s12);
  return Object.getOwnPropertyNames(r).forEach(function(t) {
    var a = r[t];
    t.indexOf("aria-") !== -1 || t === "role" || t === "type" ? (Te.warn(`Setting attributes in the second argument of createEl()
has been deprecated. Use the third argument instead.
` + ("createEl(type, properties, attributes). Attempting to set " + t + " to " + a + ".")), e.setAttribute(t, a)) : t === "textContent" ? Lr(e, a) : (e[t] !== a || t === "tabIndex") && (e[t] = a);
  }), Object.getOwnPropertyNames(n).forEach(function(t) {
    e.setAttribute(t, n[t]);
  }), i && Ks(e, i), e;
}
function Lr(s12, r) {
  return typeof s12.textContent > "u" ? s12.innerText = r : s12.textContent = r, s12;
}
function ms(s12, r) {
  r.firstChild ? r.insertBefore(s12, r.firstChild) : r.appendChild(s12);
}
function Pr(s12, r) {
  return gd(r), s12.classList ? s12.classList.contains(r) : Rm(r).test(s12.className);
}
function Zt(s12, r) {
  return s12.classList ? s12.classList.add(r) : Pr(s12, r) || (s12.className = (s12.className + " " + r).trim()), s12;
}
function qi(s12, r) {
  return s12 ? (s12.classList ? s12.classList.remove(r) : (gd(r), s12.className = s12.className.split(/\s+/).filter(function(n) {
    return n !== r;
  }).join(" ")), s12) : (Te.warn("removeClass was called with an element that doesn't exist"), null);
}
function _d(s12, r, n) {
  var i = Pr(s12, r);
  if (typeof n == "function" && (n = n(s12, r)), typeof n != "boolean" && (n = !i), n !== i) return n ? Zt(s12, r) : qi(s12, r), s12;
}
function Td(s12, r) {
  Object.getOwnPropertyNames(r).forEach(function(n) {
    var i = r[n];
    i === null || typeof i > "u" || i === false ? s12.removeAttribute(n) : s12.setAttribute(n, i === true ? "" : i);
  });
}
function Yt(s12) {
  var r = {}, n = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
  if (s12 && s12.attributes && s12.attributes.length > 0) for (var i = s12.attributes, e = i.length - 1; e >= 0; e--) {
    var t = i[e].name, a = i[e].value;
    (typeof s12[t] == "boolean" || n.indexOf("," + t + ",") !== -1) && (a = a !== null), r[t] = a;
  }
  return r;
}
function bd(s12, r) {
  return s12.getAttribute(r);
}
function Qr(s12, r, n) {
  s12.setAttribute(r, n);
}
function aa(s12, r) {
  s12.removeAttribute(r);
}
function xd() {
  ae.body.focus(), ae.onselectstart = function() {
    return false;
  };
}
function Sd() {
  ae.onselectstart = function() {
    return true;
  };
}
function Jr(s12) {
  if (s12 && s12.getBoundingClientRect && s12.parentNode) {
    var r = s12.getBoundingClientRect(), n = {};
    return ["bottom", "height", "left", "right", "top", "width"].forEach(function(i) {
      r[i] !== void 0 && (n[i] = r[i]);
    }), n.height || (n.height = parseFloat(Li(s12, "height"))), n.width || (n.width = parseFloat(Li(s12, "width"))), n;
  }
}
function Fi(s12) {
  if (!s12 || s12 && !s12.offsetParent) return { left: 0, top: 0, width: 0, height: 0 };
  for (var r = s12.offsetWidth, n = s12.offsetHeight, i = 0, e = 0; s12.offsetParent && s12 !== ae[Rn.fullscreenElement]; ) i += s12.offsetLeft, e += s12.offsetTop, s12 = s12.offsetParent;
  return { left: i, top: e, width: r, height: n };
}
function sa(s12, r) {
  var n = { x: 0, y: 0 };
  if (ht) for (var i = s12; i && i.nodeName.toLowerCase() !== "html"; ) {
    var e = Li(i, "transform");
    if (/^matrix/.test(e)) {
      var t = e.slice(7, -1).split(/,\s/).map(Number);
      n.x += t[4], n.y += t[5];
    } else if (/^matrix3d/.test(e)) {
      var a = e.slice(9, -1).split(/,\s/).map(Number);
      n.x += a[12], n.y += a[13];
    }
    i = i.parentNode;
  }
  var o = {}, u = Fi(r.target), l = Fi(s12), c = l.width, m = l.height, g = r.offsetY - (l.top - u.top), _ = r.offsetX - (l.left - u.left);
  return r.changedTouches && (_ = r.changedTouches[0].pageX - l.left, g = r.changedTouches[0].pageY + l.top, ht && (_ -= n.x, g -= n.y)), o.y = 1 - Math.max(0, Math.min(1, g / m)), o.x = Math.max(0, Math.min(1, _ / c)), o;
}
function Ed(s12) {
  return tr(s12) && s12.nodeType === 3;
}
function zs(s12) {
  for (; s12.firstChild; ) s12.removeChild(s12.firstChild);
  return s12;
}
function Cd(s12) {
  return typeof s12 == "function" && (s12 = s12()), (Array.isArray(s12) ? s12 : [s12]).map(function(r) {
    if (typeof r == "function" && (r = r()), ii(r) || Ed(r)) return r;
    if (typeof r == "string" && /\S/.test(r)) return ae.createTextNode(r);
  }).filter(function(r) {
    return r;
  });
}
function Ks(s12, r) {
  return Cd(r).forEach(function(n) {
    return s12.appendChild(n);
  }), s12;
}
function Ad(s12, r) {
  return Ks(zs(s12), r);
}
function Ri(s12) {
  return s12.button === void 0 && s12.buttons === void 0 || s12.button === 0 && s12.buttons === void 0 || s12.type === "mouseup" && s12.button === 0 && s12.buttons === 0 ? true : !(s12.button !== 0 || s12.buttons !== 1);
}
var hr = yd("querySelector"), Dd = yd("querySelectorAll"), wd = Object.freeze({ __proto__: null, isReal: ri, isEl: ii, isInFrame: vd, createEl: Ee, textContent: Lr, prependTo: ms, hasClass: Pr, addClass: Zt, removeClass: qi, toggleClass: _d, setAttributes: Td, getAttributes: Yt, getAttribute: bd, setAttribute: Qr, removeAttribute: aa, blockTextSelection: xd, unblockTextSelection: Sd, getBoundingClientRect: Jr, findPosition: Fi, getPointerPosition: sa, isTextNode: Ed, emptyEl: zs, normalizeContent: Cd, appendContent: Ks, insertContent: Ad, isSingleLeftClick: Ri, $: hr, $$: Dd }), kd = false, gs, Mm = function() {
  if (gs.options.autoSetup !== false) {
    var r = Array.prototype.slice.call(ae.getElementsByTagName("video")), n = Array.prototype.slice.call(ae.getElementsByTagName("audio")), i = Array.prototype.slice.call(ae.getElementsByTagName("video-js")), e = r.concat(n, i);
    if (e && e.length > 0) for (var t = 0, a = e.length; t < a; t++) {
      var o = e[t];
      if (o && o.getAttribute) {
        if (o.player === void 0) {
          var u = o.getAttribute("data-setup");
          u !== null && gs(o);
        }
      } else {
        vs(1);
        break;
      }
    }
    else kd || vs(1);
  }
};
function vs(s12, r) {
  ri() && (r && (gs = r), P.setTimeout(Mm, s12));
}
function ys() {
  kd = true, P.removeEventListener("load", ys);
}
ri() && (ae.readyState === "complete" ? ys() : P.addEventListener("load", ys));
var Pd = function(r) {
  var n = ae.createElement("style");
  return n.className = r, n;
}, Id = function(r, n) {
  r.styleSheet ? r.styleSheet.cssText = n : r.textContent = n;
}, Nm = 3, Bm = Nm;
function ar() {
  return Bm++;
}
var Od;
P.WeakMap || (Od = (function() {
  function s12() {
    this.vdata = "vdata" + Math.floor(P.performance && P.performance.now() || Date.now()), this.data = {};
  }
  var r = s12.prototype;
  return r.set = function(i, e) {
    var t = i[this.vdata] || ar();
    return i[this.vdata] || (i[this.vdata] = t), this.data[t] = e, this;
  }, r.get = function(i) {
    var e = i[this.vdata];
    if (e) return this.data[e];
    Te("We have no data for this element", i);
  }, r.has = function(i) {
    var e = i[this.vdata];
    return e in this.data;
  }, r.delete = function(i) {
    var e = i[this.vdata];
    e && (delete this.data[e], delete i[this.vdata]);
  }, s12;
})());
var ct = P.WeakMap ? /* @__PURE__ */ new WeakMap() : new Od();
function Ju(s12, r) {
  if (ct.has(s12)) {
    var n = ct.get(s12);
    n.handlers[r].length === 0 && (delete n.handlers[r], s12.removeEventListener ? s12.removeEventListener(r, n.dispatcher, false) : s12.detachEvent && s12.detachEvent("on" + r, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), Object.getOwnPropertyNames(n).length === 0 && ct.delete(s12);
  }
}
function Xs(s12, r, n, i) {
  n.forEach(function(e) {
    s12(r, e, i);
  });
}
function oa(s12) {
  if (s12.fixed_) return s12;
  function r() {
    return true;
  }
  function n() {
    return false;
  }
  if (!s12 || !s12.isPropagationStopped || !s12.isImmediatePropagationStopped) {
    var i = s12 || P.event;
    s12 = {};
    for (var e in i) e !== "layerX" && e !== "layerY" && e !== "keyLocation" && e !== "webkitMovementX" && e !== "webkitMovementY" && e !== "path" && (e === "returnValue" && i.preventDefault || (s12[e] = i[e]));
    if (s12.target || (s12.target = s12.srcElement || ae), s12.relatedTarget || (s12.relatedTarget = s12.fromElement === s12.target ? s12.toElement : s12.fromElement), s12.preventDefault = function() {
      i.preventDefault && i.preventDefault(), s12.returnValue = false, i.returnValue = false, s12.defaultPrevented = true;
    }, s12.defaultPrevented = false, s12.stopPropagation = function() {
      i.stopPropagation && i.stopPropagation(), s12.cancelBubble = true, i.cancelBubble = true, s12.isPropagationStopped = r;
    }, s12.isPropagationStopped = n, s12.stopImmediatePropagation = function() {
      i.stopImmediatePropagation && i.stopImmediatePropagation(), s12.isImmediatePropagationStopped = r, s12.stopPropagation();
    }, s12.isImmediatePropagationStopped = n, s12.clientX !== null && s12.clientX !== void 0) {
      var t = ae.documentElement, a = ae.body;
      s12.pageX = s12.clientX + (t && t.scrollLeft || a && a.scrollLeft || 0) - (t && t.clientLeft || a && a.clientLeft || 0), s12.pageY = s12.clientY + (t && t.scrollTop || a && a.scrollTop || 0) - (t && t.clientTop || a && a.clientTop || 0);
    }
    s12.which = s12.charCode || s12.keyCode, s12.button !== null && s12.button !== void 0 && (s12.button = s12.button & 1 ? 0 : s12.button & 4 ? 1 : s12.button & 2 ? 2 : 0);
  }
  return s12.fixed_ = true, s12;
}
var bn, Um = function() {
  if (typeof bn != "boolean") {
    bn = false;
    try {
      var r = Object.defineProperty({}, "passive", { get: function() {
        bn = true;
      } });
      P.addEventListener("test", null, r), P.removeEventListener("test", null, r);
    } catch {
    }
  }
  return bn;
}, qm = ["touchstart", "touchmove"];
function bt(s12, r, n) {
  if (Array.isArray(r)) return Xs(bt, s12, r, n);
  ct.has(s12) || ct.set(s12, {});
  var i = ct.get(s12);
  if (i.handlers || (i.handlers = {}), i.handlers[r] || (i.handlers[r] = []), n.guid || (n.guid = ar()), i.handlers[r].push(n), i.dispatcher || (i.disabled = false, i.dispatcher = function(t, a) {
    if (!i.disabled) {
      t = oa(t);
      var o = i.handlers[t.type];
      if (o) for (var u = o.slice(0), l = 0, c = u.length; l < c && !t.isImmediatePropagationStopped(); l++) try {
        u[l].call(s12, t, a);
      } catch (m) {
        Te.error(m);
      }
    }
  }), i.handlers[r].length === 1) if (s12.addEventListener) {
    var e = false;
    Um() && qm.indexOf(r) > -1 && (e = { passive: true }), s12.addEventListener(r, i.dispatcher, e);
  } else s12.attachEvent && s12.attachEvent("on" + r, i.dispatcher);
}
function at(s12, r, n) {
  if (ct.has(s12)) {
    var i = ct.get(s12);
    if (i.handlers) {
      if (Array.isArray(r)) return Xs(at, s12, r, n);
      var e = function(l, c) {
        i.handlers[c] = [], Ju(l, c);
      };
      if (r === void 0) {
        for (var t in i.handlers) Object.prototype.hasOwnProperty.call(i.handlers || {}, t) && e(s12, t);
        return;
      }
      var a = i.handlers[r];
      if (a) {
        if (!n) {
          e(s12, r);
          return;
        }
        if (n.guid) for (var o = 0; o < a.length; o++) a[o].guid === n.guid && a.splice(o--, 1);
        Ju(s12, r);
      }
    }
  }
}
function ni(s12, r, n) {
  var i = ct.has(s12) ? ct.get(s12) : {}, e = s12.parentNode || s12.ownerDocument;
  if (typeof r == "string" ? r = { type: r, target: s12 } : r.target || (r.target = s12), r = oa(r), i.dispatcher && i.dispatcher.call(s12, r, n), e && !r.isPropagationStopped() && r.bubbles === true) ni.call(null, e, r, n);
  else if (!e && !r.defaultPrevented && r.target && r.target[r.type]) {
    ct.has(r.target) || ct.set(r.target, {});
    var t = ct.get(r.target);
    r.target[r.type] && (t.disabled = true, typeof r.target[r.type] == "function" && r.target[r.type](), t.disabled = false);
  }
  return !r.defaultPrevented;
}
function ua(s12, r, n) {
  if (Array.isArray(r)) return Xs(ua, s12, r, n);
  var i = function e() {
    at(s12, r, e), n.apply(this, arguments);
  };
  i.guid = n.guid = n.guid || ar(), bt(s12, r, i);
}
function Ld(s12, r, n) {
  var i = function e() {
    at(s12, r, e), n.apply(this, arguments);
  };
  i.guid = n.guid = n.guid || ar(), bt(s12, r, i);
}
var Vm = Object.freeze({ __proto__: null, fixEvent: oa, on: bt, off: at, trigger: ni, one: ua, any: Ld }), Ot = 30, Re = function(r, n, i) {
  n.guid || (n.guid = ar());
  var e = n.bind(r);
  return e.guid = i ? i + "_" + n.guid : n.guid, e;
}, rr = function(r, n) {
  var i = P.performance.now(), e = function() {
    var a = P.performance.now();
    a - i >= n && (r.apply(void 0, arguments), i = a);
  };
  return e;
}, jm = function(r, n, i, e) {
  e === void 0 && (e = P);
  var t, a = function() {
    e.clearTimeout(t), t = null;
  }, o = function() {
    var l = this, c = arguments, m = function() {
      t = null, m = null, r.apply(l, c);
    };
    e.clearTimeout(t), t = e.setTimeout(m, n);
  };
  return o.cancel = a, o;
}, Ze = function() {
};
Ze.prototype.allowedEvents_ = {};
Ze.prototype.on = function(s12, r) {
  var n = this.addEventListener;
  this.addEventListener = function() {
  }, bt(this, s12, r), this.addEventListener = n;
};
Ze.prototype.addEventListener = Ze.prototype.on;
Ze.prototype.off = function(s12, r) {
  at(this, s12, r);
};
Ze.prototype.removeEventListener = Ze.prototype.off;
Ze.prototype.one = function(s12, r) {
  var n = this.addEventListener;
  this.addEventListener = function() {
  }, ua(this, s12, r), this.addEventListener = n;
};
Ze.prototype.any = function(s12, r) {
  var n = this.addEventListener;
  this.addEventListener = function() {
  }, Ld(this, s12, r), this.addEventListener = n;
};
Ze.prototype.trigger = function(s12) {
  var r = s12.type || s12;
  typeof s12 == "string" && (s12 = { type: r }), s12 = oa(s12), this.allowedEvents_[r] && this["on" + r] && this["on" + r](s12), ni(this, s12);
};
Ze.prototype.dispatchEvent = Ze.prototype.trigger;
var bi;
Ze.prototype.queueTrigger = function(s12) {
  var r = this;
  bi || (bi = /* @__PURE__ */ new Map());
  var n = s12.type || s12, i = bi.get(this);
  i || (i = /* @__PURE__ */ new Map(), bi.set(this, i));
  var e = i.get(n);
  i.delete(n), P.clearTimeout(e);
  var t = P.setTimeout(function() {
    i.delete(n), i.size === 0 && (i = null, bi.delete(r)), r.trigger(s12);
  }, 0);
  i.set(n, t);
};
var la = function(r) {
  return typeof r.name == "function" ? r.name() : typeof r.name == "string" ? r.name : r.name_ ? r.name_ : r.constructor && r.constructor.name ? r.constructor.name : typeof r;
}, er = function(r) {
  return r instanceof Ze || !!r.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(n) {
    return typeof r[n] == "function";
  });
}, Hm = function(r, n) {
  er(r) ? n() : (r.eventedCallbacks || (r.eventedCallbacks = []), r.eventedCallbacks.push(n));
}, _s = function(r) {
  return typeof r == "string" && /\S/.test(r) || Array.isArray(r) && !!r.length;
}, Mn = function(r, n, i) {
  if (!r || !r.nodeName && !er(r)) throw new Error("Invalid target for " + la(n) + "#" + i + "; must be a DOM node or evented object.");
}, Fd = function(r, n, i) {
  if (!_s(r)) throw new Error("Invalid event type for " + la(n) + "#" + i + "; must be a non-empty string or array.");
}, Rd = function(r, n, i) {
  if (typeof r != "function") throw new Error("Invalid listener for " + la(n) + "#" + i + "; must be a function.");
}, Wa = function(r, n, i) {
  var e = n.length < 3 || n[0] === r || n[0] === r.eventBusEl_, t, a, o;
  return e ? (t = r.eventBusEl_, n.length >= 3 && n.shift(), a = n[0], o = n[1]) : (t = n[0], a = n[1], o = n[2]), Mn(t, r, i), Fd(a, r, i), Rd(o, r, i), o = Re(r, o), { isTargetingSelf: e, target: t, type: a, listener: o };
}, Cr = function(r, n, i, e) {
  Mn(r, r, n), r.nodeName ? Vm[n](r, i, e) : r[n](i, e);
}, Wm = { on: function() {
  for (var r = this, n = arguments.length, i = new Array(n), e = 0; e < n; e++) i[e] = arguments[e];
  var t = Wa(this, i, "on"), a = t.isTargetingSelf, o = t.target, u = t.type, l = t.listener;
  if (Cr(o, "on", u, l), !a) {
    var c = function() {
      return r.off(o, u, l);
    };
    c.guid = l.guid;
    var m = function() {
      return r.off("dispose", c);
    };
    m.guid = l.guid, Cr(this, "on", "dispose", c), Cr(o, "on", "dispose", m);
  }
}, one: function() {
  for (var r = this, n = arguments.length, i = new Array(n), e = 0; e < n; e++) i[e] = arguments[e];
  var t = Wa(this, i, "one"), a = t.isTargetingSelf, o = t.target, u = t.type, l = t.listener;
  if (a) Cr(o, "one", u, l);
  else {
    var c = function m() {
      r.off(o, u, m);
      for (var g = arguments.length, _ = new Array(g), C = 0; C < g; C++) _[C] = arguments[C];
      l.apply(null, _);
    };
    c.guid = l.guid, Cr(o, "one", u, c);
  }
}, any: function() {
  for (var r = this, n = arguments.length, i = new Array(n), e = 0; e < n; e++) i[e] = arguments[e];
  var t = Wa(this, i, "any"), a = t.isTargetingSelf, o = t.target, u = t.type, l = t.listener;
  if (a) Cr(o, "any", u, l);
  else {
    var c = function m() {
      r.off(o, u, m);
      for (var g = arguments.length, _ = new Array(g), C = 0; C < g; C++) _[C] = arguments[C];
      l.apply(null, _);
    };
    c.guid = l.guid, Cr(o, "any", u, c);
  }
}, off: function(r, n, i) {
  if (!r || _s(r)) at(this.eventBusEl_, r, n);
  else {
    var e = r, t = n;
    Mn(e, this, "off"), Fd(t, this, "off"), Rd(i, this, "off"), i = Re(this, i), this.off("dispose", i), e.nodeName ? (at(e, t, i), at(e, "dispose", i)) : er(e) && (e.off(t, i), e.off("dispose", i));
  }
}, trigger: function(r, n) {
  Mn(this.eventBusEl_, this, "trigger");
  var i = r && typeof r != "string" ? r.type : r;
  if (!_s(i)) {
    var e = "Invalid event type for " + la(this) + "#trigger; must be a non-empty string or object with a type key that has a non-empty value.";
    if (r) (this.log || Te).error(e);
    else throw new Error(e);
  }
  return ni(this.eventBusEl_, r, n);
} };
function $s(s12, r) {
  r === void 0 && (r = {});
  var n = r, i = n.eventBusKey;
  if (i) {
    if (!s12[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
    s12.eventBusEl_ = s12[i];
  } else s12.eventBusEl_ = Ee("span", { className: "vjs-event-bus" });
  return Ue(s12, Wm), s12.eventedCallbacks && s12.eventedCallbacks.forEach(function(e) {
    e();
  }), s12.on("dispose", function() {
    s12.off(), [s12, s12.el_, s12.eventBusEl_].forEach(function(e) {
      e && ct.has(e) && ct.delete(e);
    }), P.setTimeout(function() {
      s12.eventBusEl_ = null;
    }, 0);
  }), s12;
}
var Gm = { state: {}, setState: function(r) {
  var n = this;
  typeof r == "function" && (r = r());
  var i;
  return Wr(r, function(e, t) {
    n.state[t] !== e && (i = i || {}, i[t] = { from: n.state[t], to: e }), n.state[t] = e;
  }), i && er(this) && this.trigger({ changes: i, type: "statechanged" }), i;
} };
function Md(s12, r) {
  return Ue(s12, Gm), s12.state = Ue({}, s12.state, r), typeof s12.handleStateChanged == "function" && er(s12) && s12.on("statechanged", s12.handleStateChanged), s12;
}
var kn = function(r) {
  return typeof r != "string" ? r : r.replace(/./, function(n) {
    return n.toLowerCase();
  });
}, Ge = function(r) {
  return typeof r != "string" ? r : r.replace(/./, function(n) {
    return n.toUpperCase();
  });
}, zm = function(r, n) {
  return Ge(r) === Ge(n);
};
function Fe() {
  for (var s12 = {}, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
  return n.forEach(function(e) {
    e && Wr(e, function(t, a) {
      if (!Oi(t)) {
        s12[a] = t;
        return;
      }
      Oi(s12[a]) || (s12[a] = {}), s12[a] = Fe(s12[a], t);
    });
  }), s12;
}
var Km = (function() {
  function s12() {
    this.map_ = {};
  }
  var r = s12.prototype;
  return r.has = function(i) {
    return i in this.map_;
  }, r.delete = function(i) {
    var e = this.has(i);
    return delete this.map_[i], e;
  }, r.set = function(i, e) {
    return this.map_[i] = e, this;
  }, r.forEach = function(i, e) {
    for (var t in this.map_) i.call(e, this.map_[t], t, this);
  }, s12;
})(), Xm = P.Map ? P.Map : Km, $m = (function() {
  function s12() {
    this.set_ = {};
  }
  var r = s12.prototype;
  return r.has = function(i) {
    return i in this.set_;
  }, r.delete = function(i) {
    var e = this.has(i);
    return delete this.set_[i], e;
  }, r.add = function(i) {
    return this.set_[i] = 1, this;
  }, r.forEach = function(i, e) {
    for (var t in this.set_) i.call(e, t, t, this);
  }, s12;
})(), Ga = P.Set ? P.Set : $m, te = (function() {
  function s12(n, i, e) {
    var t = this;
    if (!n && this.play ? this.player_ = n = this : this.player_ = n, this.isDisposed_ = false, this.parentComponent_ = null, this.options_ = Fe({}, this.options_), i = this.options_ = Fe(this.options_, i), this.id_ = i.id || i.el && i.el.id, !this.id_) {
      var a = n && n.id && n.id() || "no_player";
      this.id_ = a + "_component_" + ar();
    }
    this.name_ = i.name || null, i.el ? this.el_ = i.el : i.createEl !== false && (this.el_ = this.createEl()), i.className && this.el_ && i.className.split(" ").forEach(function(o) {
      return t.addClass(o);
    }), i.evented !== false && ($s(this, { eventBusKey: this.el_ ? "el_" : null }), this.handleLanguagechange = this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange)), Md(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.setTimeoutIds_ = new Ga(), this.setIntervalIds_ = new Ga(), this.rafIds_ = new Ga(), this.namedRafs_ = new Xm(), this.clearingTimersOnDispose_ = false, i.initChildren !== false && this.initChildren(), this.ready(e), i.reportTouchActivity !== false && this.enableTouchActivity();
  }
  var r = s12.prototype;
  return r.dispose = function(i) {
    if (i === void 0 && (i = {}), !this.isDisposed_) {
      if (this.readyQueue_ && (this.readyQueue_.length = 0), this.trigger({ type: "dispose", bubbles: false }), this.isDisposed_ = true, this.children_) for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
      this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && (i.restoreEl ? this.el_.parentNode.replaceChild(i.restoreEl, this.el_) : this.el_.parentNode.removeChild(this.el_)), this.el_ = null), this.player_ = null;
    }
  }, r.isDisposed = function() {
    return !!this.isDisposed_;
  }, r.player = function() {
    return this.player_;
  }, r.options = function(i) {
    return i ? (this.options_ = Fe(this.options_, i), this.options_) : this.options_;
  }, r.el = function() {
    return this.el_;
  }, r.createEl = function(i, e, t) {
    return Ee(i, e, t);
  }, r.localize = function(i, e, t) {
    t === void 0 && (t = i);
    var a = this.player_.language && this.player_.language(), o = this.player_.languages && this.player_.languages(), u = o && o[a], l = a && a.split("-")[0], c = o && o[l], m = t;
    return u && u[i] ? m = u[i] : c && c[i] && (m = c[i]), e && (m = m.replace(/\{(\d+)\}/g, function(g, _) {
      var C = e[_ - 1], w = C;
      return typeof C > "u" && (w = g), w;
    })), m;
  }, r.handleLanguagechange = function() {
  }, r.contentEl = function() {
    return this.contentEl_ || this.el_;
  }, r.id = function() {
    return this.id_;
  }, r.name = function() {
    return this.name_;
  }, r.children = function() {
    return this.children_;
  }, r.getChildById = function(i) {
    return this.childIndex_[i];
  }, r.getChild = function(i) {
    if (i) return this.childNameIndex_[i];
  }, r.getDescendant = function() {
    for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
    e = e.reduce(function(u, l) {
      return u.concat(l);
    }, []);
    for (var a = this, o = 0; o < e.length; o++) if (a = a.getChild(e[o]), !a || !a.getChild) return;
    return a;
  }, r.addChild = function(i, e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = this.children_.length);
    var a, o;
    if (typeof i == "string") {
      o = Ge(i);
      var u = e.componentClass || o;
      e.name = o;
      var l = s12.getComponent(u);
      if (!l) throw new Error("Component " + u + " does not exist");
      if (typeof l != "function") return null;
      a = new l(this.player_ || this, e);
    } else a = i;
    if (a.parentComponent_ && a.parentComponent_.removeChild(a), this.children_.splice(t, 0, a), a.parentComponent_ = this, typeof a.id == "function" && (this.childIndex_[a.id()] = a), o = o || a.name && Ge(a.name()), o && (this.childNameIndex_[o] = a, this.childNameIndex_[kn(o)] = a), typeof a.el == "function" && a.el()) {
      var c = null;
      this.children_[t + 1] && (this.children_[t + 1].el_ ? c = this.children_[t + 1].el_ : ii(this.children_[t + 1]) && (c = this.children_[t + 1])), this.contentEl().insertBefore(a.el(), c);
    }
    return a;
  }, r.removeChild = function(i) {
    if (typeof i == "string" && (i = this.getChild(i)), !(!i || !this.children_)) {
      for (var e = false, t = this.children_.length - 1; t >= 0; t--) if (this.children_[t] === i) {
        e = true, this.children_.splice(t, 1);
        break;
      }
      if (e) {
        i.parentComponent_ = null, this.childIndex_[i.id()] = null, this.childNameIndex_[Ge(i.name())] = null, this.childNameIndex_[kn(i.name())] = null;
        var a = i.el();
        a && a.parentNode === this.contentEl() && this.contentEl().removeChild(i.el());
      }
    }
  }, r.initChildren = function() {
    var i = this, e = this.options_.children;
    if (e) {
      var t = this.options_, a = function(c) {
        var m = c.name, g = c.opts;
        if (t[m] !== void 0 && (g = t[m]), g !== false) {
          g === true && (g = {}), g.playerOptions = i.options_.playerOptions;
          var _ = i.addChild(m, g);
          _ && (i[m] = _);
        }
      }, o, u = s12.getComponent("Tech");
      Array.isArray(e) ? o = e : o = Object.keys(e), o.concat(Object.keys(this.options_).filter(function(l) {
        return !o.some(function(c) {
          return typeof c == "string" ? l === c : l === c.name;
        });
      })).map(function(l) {
        var c, m;
        return typeof l == "string" ? (c = l, m = e[c] || i.options_[c] || {}) : (c = l.name, m = l), { name: c, opts: m };
      }).filter(function(l) {
        var c = s12.getComponent(l.opts.componentClass || Ge(l.name));
        return c && !u.isTech(c);
      }).forEach(a);
    }
  }, r.buildCSSClass = function() {
    return "";
  }, r.ready = function(i, e) {
    if (e === void 0 && (e = false), !!i) {
      if (!this.isReady_) {
        this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(i);
        return;
      }
      e ? i.call(this) : this.setTimeout(i, 1);
    }
  }, r.triggerReady = function() {
    this.isReady_ = true, this.setTimeout(function() {
      var i = this.readyQueue_;
      this.readyQueue_ = [], i && i.length > 0 && i.forEach(function(e) {
        e.call(this);
      }, this), this.trigger("ready");
    }, 1);
  }, r.$ = function(i, e) {
    return hr(i, e || this.contentEl());
  }, r.$$ = function(i, e) {
    return Dd(i, e || this.contentEl());
  }, r.hasClass = function(i) {
    return Pr(this.el_, i);
  }, r.addClass = function(i) {
    Zt(this.el_, i);
  }, r.removeClass = function(i) {
    qi(this.el_, i);
  }, r.toggleClass = function(i, e) {
    _d(this.el_, i, e);
  }, r.show = function() {
    this.removeClass("vjs-hidden");
  }, r.hide = function() {
    this.addClass("vjs-hidden");
  }, r.lockShowing = function() {
    this.addClass("vjs-lock-showing");
  }, r.unlockShowing = function() {
    this.removeClass("vjs-lock-showing");
  }, r.getAttribute = function(i) {
    return bd(this.el_, i);
  }, r.setAttribute = function(i, e) {
    Qr(this.el_, i, e);
  }, r.removeAttribute = function(i) {
    aa(this.el_, i);
  }, r.width = function(i, e) {
    return this.dimension("width", i, e);
  }, r.height = function(i, e) {
    return this.dimension("height", i, e);
  }, r.dimensions = function(i, e) {
    this.width(i, true), this.height(e);
  }, r.dimension = function(i, e, t) {
    if (e !== void 0) {
      (e === null || e !== e) && (e = 0), ("" + e).indexOf("%") !== -1 || ("" + e).indexOf("px") !== -1 ? this.el_.style[i] = e : e === "auto" ? this.el_.style[i] = "" : this.el_.style[i] = e + "px", t || this.trigger("componentresize");
      return;
    }
    if (!this.el_) return 0;
    var a = this.el_.style[i], o = a.indexOf("px");
    return parseInt(o !== -1 ? a.slice(0, o) : this.el_["offset" + Ge(i)], 10);
  }, r.currentDimension = function(i) {
    var e = 0;
    if (i !== "width" && i !== "height") throw new Error("currentDimension only accepts width or height value");
    if (e = Li(this.el_, i), e = parseFloat(e), e === 0 || isNaN(e)) {
      var t = "offset" + Ge(i);
      e = this.el_[t];
    }
    return e;
  }, r.currentDimensions = function() {
    return { width: this.currentDimension("width"), height: this.currentDimension("height") };
  }, r.currentWidth = function() {
    return this.currentDimension("width");
  }, r.currentHeight = function() {
    return this.currentDimension("height");
  }, r.focus = function() {
    this.el_.focus();
  }, r.blur = function() {
    this.el_.blur();
  }, r.handleKeyDown = function(i) {
    this.player_ && (_e.isEventKey(i, "Tab") || i.stopPropagation(), this.player_.handleKeyDown(i));
  }, r.handleKeyPress = function(i) {
    this.handleKeyDown(i);
  }, r.emitTapEvents = function() {
    var i = 0, e = null, t = 10, a = 200, o;
    this.on("touchstart", function(l) {
      l.touches.length === 1 && (e = { pageX: l.touches[0].pageX, pageY: l.touches[0].pageY }, i = P.performance.now(), o = true);
    }), this.on("touchmove", function(l) {
      if (l.touches.length > 1) o = false;
      else if (e) {
        var c = l.touches[0].pageX - e.pageX, m = l.touches[0].pageY - e.pageY, g = Math.sqrt(c * c + m * m);
        g > t && (o = false);
      }
    });
    var u = function() {
      o = false;
    };
    this.on("touchleave", u), this.on("touchcancel", u), this.on("touchend", function(l) {
      if (e = null, o === true) {
        var c = P.performance.now() - i;
        c < a && (l.preventDefault(), this.trigger("tap"));
      }
    });
  }, r.enableTouchActivity = function() {
    if (!(!this.player() || !this.player().reportUserActivity)) {
      var i = Re(this.player(), this.player().reportUserActivity), e;
      this.on("touchstart", function() {
        i(), this.clearInterval(e), e = this.setInterval(i, 250);
      });
      var t = function(o) {
        i(), this.clearInterval(e);
      };
      this.on("touchmove", i), this.on("touchend", t), this.on("touchcancel", t);
    }
  }, r.setTimeout = function(i, e) {
    var t = this, a;
    return i = Re(this, i), this.clearTimersOnDispose_(), a = P.setTimeout(function() {
      t.setTimeoutIds_.has(a) && t.setTimeoutIds_.delete(a), i();
    }, e), this.setTimeoutIds_.add(a), a;
  }, r.clearTimeout = function(i) {
    return this.setTimeoutIds_.has(i) && (this.setTimeoutIds_.delete(i), P.clearTimeout(i)), i;
  }, r.setInterval = function(i, e) {
    i = Re(this, i), this.clearTimersOnDispose_();
    var t = P.setInterval(i, e);
    return this.setIntervalIds_.add(t), t;
  }, r.clearInterval = function(i) {
    return this.setIntervalIds_.has(i) && (this.setIntervalIds_.delete(i), P.clearInterval(i)), i;
  }, r.requestAnimationFrame = function(i) {
    var e = this;
    if (!this.supportsRaf_) return this.setTimeout(i, 1e3 / 60);
    this.clearTimersOnDispose_();
    var t;
    return i = Re(this, i), t = P.requestAnimationFrame(function() {
      e.rafIds_.has(t) && e.rafIds_.delete(t), i();
    }), this.rafIds_.add(t), t;
  }, r.requestNamedAnimationFrame = function(i, e) {
    var t = this;
    if (!this.namedRafs_.has(i)) {
      this.clearTimersOnDispose_(), e = Re(this, e);
      var a = this.requestAnimationFrame(function() {
        e(), t.namedRafs_.has(i) && t.namedRafs_.delete(i);
      });
      return this.namedRafs_.set(i, a), i;
    }
  }, r.cancelNamedAnimationFrame = function(i) {
    this.namedRafs_.has(i) && (this.cancelAnimationFrame(this.namedRafs_.get(i)), this.namedRafs_.delete(i));
  }, r.cancelAnimationFrame = function(i) {
    return this.supportsRaf_ ? (this.rafIds_.has(i) && (this.rafIds_.delete(i), P.cancelAnimationFrame(i)), i) : this.clearTimeout(i);
  }, r.clearTimersOnDispose_ = function() {
    var i = this;
    this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = true, this.one("dispose", function() {
      [["namedRafs_", "cancelNamedAnimationFrame"], ["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach(function(e) {
        var t = e[0], a = e[1];
        i[t].forEach(function(o, u) {
          return i[a](u);
        });
      }), i.clearingTimersOnDispose_ = false;
    }));
  }, s12.registerComponent = function(i, e) {
    if (typeof i != "string" || !i) throw new Error('Illegal component name, "' + i + '"; must be a non-empty string.');
    var t = s12.getComponent("Tech"), a = t && t.isTech(e), o = s12 === e || s12.prototype.isPrototypeOf(e.prototype);
    if (a || !o) {
      var u;
      throw a ? u = "techs must be registered using Tech.registerTech()" : u = "must be a Component subclass", new Error('Illegal component, "' + i + '"; ' + u + ".");
    }
    i = Ge(i), s12.components_ || (s12.components_ = {});
    var l = s12.getComponent("Player");
    if (i === "Player" && l && l.players) {
      var c = l.players, m = Object.keys(c);
      if (c && m.length > 0 && m.map(function(g) {
        return c[g];
      }).every(Boolean)) throw new Error("Can not register Player component after player has been created.");
    }
    return s12.components_[i] = e, s12.components_[kn(i)] = e, e;
  }, s12.getComponent = function(i) {
    if (!(!i || !s12.components_)) return s12.components_[i];
  }, s12;
})();
te.prototype.supportsRaf_ = typeof P.requestAnimationFrame == "function" && typeof P.cancelAnimationFrame == "function";
te.registerComponent("Component", te);
function Ym(s12, r, n) {
  if (typeof r != "number" || r < 0 || r > n) throw new Error("Failed to execute '" + s12 + "' on 'TimeRanges': The index provided (" + r + ") is non-numeric or out of bounds (0-" + n + ").");
}
function Zu(s12, r, n, i) {
  return Ym(s12, i, n.length - 1), n[i][r];
}
function za(s12) {
  var r;
  return s12 === void 0 || s12.length === 0 ? r = { length: 0, start: function() {
    throw new Error("This TimeRanges object is empty");
  }, end: function() {
    throw new Error("This TimeRanges object is empty");
  } } : r = { length: s12.length, start: Zu.bind(null, "start", 0, s12), end: Zu.bind(null, "end", 1, s12) }, P.Symbol && P.Symbol.iterator && (r[P.Symbol.iterator] = function() {
    return (s12 || []).values();
  }), r;
}
function Ir(s12, r) {
  return Array.isArray(s12) ? za(s12) : s12 === void 0 || r === void 0 ? za() : za([[s12, r]]);
}
function Nd(s12, r) {
  var n = 0, i, e;
  if (!r) return 0;
  (!s12 || !s12.length) && (s12 = Ir(0, 0));
  for (var t = 0; t < s12.length; t++) i = s12.start(t), e = s12.end(t), e > r && (e = r), n += e - i;
  return n / r;
}
function ft(s12) {
  if (s12 instanceof ft) return s12;
  typeof s12 == "number" ? this.code = s12 : typeof s12 == "string" ? this.message = s12 : tr(s12) && (typeof s12.code == "number" && (this.code = s12.code), Ue(this, s12)), this.message || (this.message = ft.defaultMessages[this.code] || "");
}
ft.prototype.code = 0;
ft.prototype.message = "";
ft.prototype.status = null;
ft.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"];
ft.defaultMessages = { 1: "You aborted the media playback", 2: "A network error caused the media download to fail part-way.", 3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.", 4: "The media could not be loaded, either because the server or network failed or because the format is not supported.", 5: "The media is encrypted and we do not have the keys to decrypt it." };
for (var Ur = 0; Ur < ft.errorTypes.length; Ur++) ft[ft.errorTypes[Ur]] = Ur, ft.prototype[ft.errorTypes[Ur]] = Ur;
function Di(s12) {
  return s12 != null && typeof s12.then == "function";
}
function Vt(s12) {
  Di(s12) && s12.then(null, function(r) {
  });
}
var Ts = function(r) {
  var n = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(i, e, t) {
    return r[e] && (i[e] = r[e]), i;
  }, { cues: r.cues && Array.prototype.map.call(r.cues, function(i) {
    return { startTime: i.startTime, endTime: i.endTime, text: i.text, id: i.id };
  }) });
  return n;
}, Qm = function(r) {
  var n = r.$$("track"), i = Array.prototype.map.call(n, function(t) {
    return t.track;
  }), e = Array.prototype.map.call(n, function(t) {
    var a = Ts(t.track);
    return t.src && (a.src = t.src), a;
  });
  return e.concat(Array.prototype.filter.call(r.textTracks(), function(t) {
    return i.indexOf(t) === -1;
  }).map(Ts));
}, Jm = function(r, n) {
  return r.forEach(function(i) {
    var e = n.addRemoteTextTrack(i).track;
    !i.src && i.cues && i.cues.forEach(function(t) {
      return e.addCue(t);
    });
  }), n.textTracks();
}, el = { textTracksToJson: Qm, jsonToTextTracks: Jm, trackToJson_: Ts }, Ka = "vjs-modal-dialog", ai = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.handleKeyDown_ = function(a) {
      return t.handleKeyDown(a);
    }, t.close_ = function(a) {
      return t.close(a);
    }, t.opened_ = t.hasBeenOpened_ = t.hasBeenFilled_ = false, t.closeable(!t.options_.uncloseable), t.content(t.options_.content), t.contentEl_ = Ee("div", { className: Ka + "-content" }, { role: "document" }), t.descEl_ = Ee("p", { className: Ka + "-description vjs-control-text", id: t.el().getAttribute("aria-describedby") }), Lr(t.descEl_, t.description()), t.el_.appendChild(t.descEl_), t.el_.appendChild(t.contentEl_), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: this.buildCSSClass(), tabIndex: -1 }, { "aria-describedby": this.id() + "_description", "aria-hidden": "true", "aria-label": this.label(), role: "dialog" });
  }, n.dispose = function() {
    this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, s12.prototype.dispose.call(this);
  }, n.buildCSSClass = function() {
    return Ka + " vjs-hidden " + s12.prototype.buildCSSClass.call(this);
  }, n.label = function() {
    return this.localize(this.options_.label || "Modal Window");
  }, n.description = function() {
    var e = this.options_.description || this.localize("This is a modal window.");
    return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e;
  }, n.open = function() {
    if (!this.opened_) {
      var e = this.player();
      this.trigger("beforemodalopen"), this.opened_ = true, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.on("keydown", this.handleKeyDown_), this.hadControls_ = e.controls(), e.controls(false), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = true;
    }
  }, n.opened = function(e) {
    return typeof e == "boolean" && this[e ? "open" : "close"](), this.opened_;
  }, n.close = function() {
    if (this.opened_) {
      var e = this.player();
      this.trigger("beforemodalclose"), this.opened_ = false, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.off("keydown", this.handleKeyDown_), this.hadControls_ && e.controls(true), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose();
    }
  }, n.closeable = function(e) {
    if (typeof e == "boolean") {
      var t = this.closeable_ = !!e, a = this.getChild("closeButton");
      if (t && !a) {
        var o = this.contentEl_;
        this.contentEl_ = this.el_, a = this.addChild("closeButton", { controlText: "Close Modal Dialog" }), this.contentEl_ = o, this.on(a, "close", this.close_);
      }
      !t && a && (this.off(a, "close", this.close_), this.removeChild(a), a.dispose());
    }
    return this.closeable_;
  }, n.fill = function() {
    this.fillWith(this.content());
  }, n.fillWith = function(e) {
    var t = this.contentEl(), a = t.parentNode, o = t.nextSibling;
    this.trigger("beforemodalfill"), this.hasBeenFilled_ = true, a.removeChild(t), this.empty(), Ad(t, e), this.trigger("modalfill"), o ? a.insertBefore(t, o) : a.appendChild(t);
    var u = this.getChild("closeButton");
    u && a.appendChild(u.el_);
  }, n.empty = function() {
    this.trigger("beforemodalempty"), zs(this.contentEl()), this.trigger("modalempty");
  }, n.content = function(e) {
    return typeof e < "u" && (this.content_ = e), this.content_;
  }, n.conditionalFocus_ = function() {
    var e = ae.activeElement, t = this.player_.el_;
    this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus());
  }, n.conditionalBlur_ = function() {
    this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null);
  }, n.handleKeyDown = function(e) {
    if (e.stopPropagation(), _e.isEventKey(e, "Escape") && this.closeable()) {
      e.preventDefault(), this.close();
      return;
    }
    if (_e.isEventKey(e, "Tab")) {
      for (var t = this.focusableEls_(), a = this.el_.querySelector(":focus"), o, u = 0; u < t.length; u++) if (a === t[u]) {
        o = u;
        break;
      }
      ae.activeElement === this.el_ && (o = 0), e.shiftKey && o === 0 ? (t[t.length - 1].focus(), e.preventDefault()) : !e.shiftKey && o === t.length - 1 && (t[0].focus(), e.preventDefault());
    }
  }, n.focusableEls_ = function() {
    var e = this.el_.querySelectorAll("*");
    return Array.prototype.filter.call(e, function(t) {
      return (t instanceof P.HTMLAnchorElement || t instanceof P.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof P.HTMLInputElement || t instanceof P.HTMLSelectElement || t instanceof P.HTMLTextAreaElement || t instanceof P.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof P.HTMLIFrameElement || t instanceof P.HTMLObjectElement || t instanceof P.HTMLEmbedElement || t.hasAttribute("tabindex") && t.getAttribute("tabindex") !== -1 || t.hasAttribute("contenteditable");
    });
  }, r;
})(te);
ai.prototype.options_ = { pauseOnOpen: true, temporary: true };
te.registerComponent("ModalDialog", ai);
var Zr = (function(s12) {
  oe(r, s12);
  function r(i) {
    var e;
    i === void 0 && (i = []), e = s12.call(this) || this, e.tracks_ = [], Object.defineProperty(ye(e), "length", { get: function() {
      return this.tracks_.length;
    } });
    for (var t = 0; t < i.length; t++) e.addTrack(i[t]);
    return e;
  }
  var n = r.prototype;
  return n.addTrack = function(e) {
    var t = this, a = this.tracks_.length;
    "" + a in this || Object.defineProperty(this, a, { get: function() {
      return this.tracks_[a];
    } }), this.tracks_.indexOf(e) === -1 && (this.tracks_.push(e), this.trigger({ track: e, type: "addtrack", target: this })), e.labelchange_ = function() {
      t.trigger({ track: e, type: "labelchange", target: t });
    }, er(e) && e.addEventListener("labelchange", e.labelchange_);
  }, n.removeTrack = function(e) {
    for (var t, a = 0, o = this.length; a < o; a++) if (this[a] === e) {
      t = this[a], t.off && t.off(), this.tracks_.splice(a, 1);
      break;
    }
    t && this.trigger({ track: t, type: "removetrack", target: this });
  }, n.getTrackById = function(e) {
    for (var t = null, a = 0, o = this.length; a < o; a++) {
      var u = this[a];
      if (u.id === e) {
        t = u;
        break;
      }
    }
    return t;
  }, r;
})(Ze);
Zr.prototype.allowedEvents_ = { change: "change", addtrack: "addtrack", removetrack: "removetrack", labelchange: "labelchange" };
for (var Zm in Zr.prototype.allowedEvents_) Zr.prototype["on" + Zm] = null;
var Xa = function(r, n) {
  for (var i = 0; i < r.length; i++) !Object.keys(r[i]).length || n.id === r[i].id || (r[i].enabled = false);
}, eg = (function(s12) {
  oe(r, s12);
  function r(i) {
    var e;
    i === void 0 && (i = []);
    for (var t = i.length - 1; t >= 0; t--) if (i[t].enabled) {
      Xa(i, i[t]);
      break;
    }
    return e = s12.call(this, i) || this, e.changing_ = false, e;
  }
  var n = r.prototype;
  return n.addTrack = function(e) {
    var t = this;
    e.enabled && Xa(this, e), s12.prototype.addTrack.call(this, e), e.addEventListener && (e.enabledChange_ = function() {
      t.changing_ || (t.changing_ = true, Xa(t, e), t.changing_ = false, t.trigger("change"));
    }, e.addEventListener("enabledchange", e.enabledChange_));
  }, n.removeTrack = function(e) {
    s12.prototype.removeTrack.call(this, e), e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_), e.enabledChange_ = null);
  }, r;
})(Zr), $a = function(r, n) {
  for (var i = 0; i < r.length; i++) !Object.keys(r[i]).length || n.id === r[i].id || (r[i].selected = false);
}, tg = (function(s12) {
  oe(r, s12);
  function r(i) {
    var e;
    i === void 0 && (i = []);
    for (var t = i.length - 1; t >= 0; t--) if (i[t].selected) {
      $a(i, i[t]);
      break;
    }
    return e = s12.call(this, i) || this, e.changing_ = false, Object.defineProperty(ye(e), "selectedIndex", { get: function() {
      for (var o = 0; o < this.length; o++) if (this[o].selected) return o;
      return -1;
    }, set: function() {
    } }), e;
  }
  var n = r.prototype;
  return n.addTrack = function(e) {
    var t = this;
    e.selected && $a(this, e), s12.prototype.addTrack.call(this, e), e.addEventListener && (e.selectedChange_ = function() {
      t.changing_ || (t.changing_ = true, $a(t, e), t.changing_ = false, t.trigger("change"));
    }, e.addEventListener("selectedchange", e.selectedChange_));
  }, n.removeTrack = function(e) {
    s12.prototype.removeTrack.call(this, e), e.removeEventListener && e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_), e.selectedChange_ = null);
  }, r;
})(Zr), Bd = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.addTrack = function(e) {
    var t = this;
    s12.prototype.addTrack.call(this, e), this.queueChange_ || (this.queueChange_ = function() {
      return t.queueTrigger("change");
    }), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
      return t.trigger("selectedlanguagechange");
    }), e.addEventListener("modechange", this.queueChange_);
    var a = ["metadata", "chapters"];
    a.indexOf(e.kind) === -1 && e.addEventListener("modechange", this.triggerSelectedlanguagechange_);
  }, n.removeTrack = function(e) {
    s12.prototype.removeTrack.call(this, e), e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_));
  }, r;
})(Zr), rg = (function() {
  function s12(n) {
    n === void 0 && (n = []), this.trackElements_ = [], Object.defineProperty(this, "length", { get: function() {
      return this.trackElements_.length;
    } });
    for (var i = 0, e = n.length; i < e; i++) this.addTrackElement_(n[i]);
  }
  var r = s12.prototype;
  return r.addTrackElement_ = function(i) {
    var e = this.trackElements_.length;
    "" + e in this || Object.defineProperty(this, e, { get: function() {
      return this.trackElements_[e];
    } }), this.trackElements_.indexOf(i) === -1 && this.trackElements_.push(i);
  }, r.getTrackElementByTrack_ = function(i) {
    for (var e, t = 0, a = this.trackElements_.length; t < a; t++) if (i === this.trackElements_[t].track) {
      e = this.trackElements_[t];
      break;
    }
    return e;
  }, r.removeTrackElement_ = function(i) {
    for (var e = 0, t = this.trackElements_.length; e < t; e++) if (i === this.trackElements_[e]) {
      this.trackElements_[e].track && typeof this.trackElements_[e].track.off == "function" && this.trackElements_[e].track.off(), typeof this.trackElements_[e].off == "function" && this.trackElements_[e].off(), this.trackElements_.splice(e, 1);
      break;
    }
  }, s12;
})(), tl = (function() {
  function s12(n) {
    s12.prototype.setCues_.call(this, n), Object.defineProperty(this, "length", { get: function() {
      return this.length_;
    } });
  }
  var r = s12.prototype;
  return r.setCues_ = function(i) {
    var e = this.length || 0, t = 0, a = i.length;
    this.cues_ = i, this.length_ = i.length;
    var o = function(l) {
      "" + l in this || Object.defineProperty(this, "" + l, { get: function() {
        return this.cues_[l];
      } });
    };
    if (e < a) for (t = e; t < a; t++) o.call(this, t);
  }, r.getCueById = function(i) {
    for (var e = null, t = 0, a = this.length; t < a; t++) {
      var o = this[t];
      if (o.id === i) {
        e = o;
        break;
      }
    }
    return e;
  }, s12;
})(), ig = { alternative: "alternative", captions: "captions", main: "main", sign: "sign", subtitles: "subtitles", commentary: "commentary" }, ng = { alternative: "alternative", descriptions: "descriptions", main: "main", "main-desc": "main-desc", translation: "translation", commentary: "commentary" }, ag = { subtitles: "subtitles", captions: "captions", descriptions: "descriptions", chapters: "chapters", metadata: "metadata" }, rl = { disabled: "disabled", hidden: "hidden", showing: "showing" }, Ys = (function(s12) {
  oe(r, s12);
  function r(n) {
    var i;
    n === void 0 && (n = {}), i = s12.call(this) || this;
    var e = { id: n.id || "vjs_track_" + ar(), kind: n.kind || "", language: n.language || "" }, t = n.label || "", a = function(l) {
      Object.defineProperty(ye(i), l, { get: function() {
        return e[l];
      }, set: function() {
      } });
    };
    for (var o in e) a(o);
    return Object.defineProperty(ye(i), "label", { get: function() {
      return t;
    }, set: function(l) {
      l !== t && (t = l, this.trigger("labelchange"));
    } }), i;
  }
  return r;
})(Ze), Qs = function(r) {
  var n = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], i = ae.createElement("a");
  i.href = r;
  for (var e = {}, t = 0; t < n.length; t++) e[n[t]] = i[n[t]];
  return e.protocol === "http:" && (e.host = e.host.replace(/:80$/, "")), e.protocol === "https:" && (e.host = e.host.replace(/:443$/, "")), e.protocol || (e.protocol = P.location.protocol), e.host || (e.host = P.location.host), e;
}, Ud = function(r) {
  if (!r.match(/^https?:\/\//)) {
    var n = ae.createElement("a");
    n.href = r, r = n.href;
  }
  return r;
}, Js = function(r) {
  if (typeof r == "string") {
    var n = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/, i = n.exec(r);
    if (i) return i.pop().toLowerCase();
  }
  return "";
}, da = function(r, n) {
  n === void 0 && (n = P.location);
  var i = Qs(r), e = i.protocol === ":" ? n.protocol : i.protocol, t = e + i.host !== n.protocol + n.host;
  return t;
}, sg = Object.freeze({ __proto__: null, parseUrl: Qs, getAbsoluteURL: Ud, getFileExtension: Js, isCrossOrigin: da }), il = function(r, n) {
  var i = new P.WebVTT.Parser(P, P.vttjs, P.WebVTT.StringDecoder()), e = [];
  i.oncue = function(t) {
    n.addCue(t);
  }, i.onparsingerror = function(t) {
    e.push(t);
  }, i.onflush = function() {
    n.trigger({ type: "loadeddata", target: n });
  }, i.parse(r), e.length > 0 && (P.console && P.console.groupCollapsed && P.console.groupCollapsed("Text Track parsing errors for " + n.src), e.forEach(function(t) {
    return Te.error(t);
  }), P.console && P.console.groupEnd && P.console.groupEnd()), i.flush();
}, nl = function(r, n) {
  var i = { uri: r }, e = da(r);
  e && (i.cors = e);
  var t = n.tech_.crossOrigin() === "use-credentials";
  t && (i.withCredentials = t), Hl(i, Re(this, function(a, o, u) {
    if (a) return Te.error(a, o);
    n.loaded_ = true, typeof P.WebVTT != "function" ? n.tech_ && n.tech_.any(["vttjsloaded", "vttjserror"], function(l) {
      if (l.type === "vttjserror") {
        Te.error("vttjs failed to load, stopping trying to process " + n.src);
        return;
      }
      return il(u, n);
    }) : il(u, n);
  }));
}, Vi = (function(s12) {
  oe(r, s12);
  function r(i) {
    var e;
    if (i === void 0 && (i = {}), !i.tech) throw new Error("A tech was not provided.");
    var t = Fe(i, { kind: ag[i.kind] || "subtitles", language: i.language || i.srclang || "" }), a = rl[t.mode] || "disabled", o = t.default;
    (t.kind === "metadata" || t.kind === "chapters") && (a = "hidden"), e = s12.call(this, t) || this, e.tech_ = t.tech, e.cues_ = [], e.activeCues_ = [], e.preload_ = e.tech_.preloadTextTracks !== false;
    var u = new tl(e.cues_), l = new tl(e.activeCues_), c = false;
    e.timeupdateHandler = Re(ye(e), function(g) {
      if (g === void 0 && (g = {}), !this.tech_.isDisposed()) {
        if (!this.tech_.isReady_) {
          g.type !== "timeupdate" && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler));
          return;
        }
        this.activeCues = this.activeCues, c && (this.trigger("cuechange"), c = false), g.type !== "timeupdate" && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler));
      }
    });
    var m = function() {
      e.stopTracking();
    };
    return e.tech_.one("dispose", m), a !== "disabled" && e.startTracking(), Object.defineProperties(ye(e), { default: { get: function() {
      return o;
    }, set: function() {
    } }, mode: { get: function() {
      return a;
    }, set: function(_) {
      rl[_] && a !== _ && (a = _, !this.preload_ && a !== "disabled" && this.cues.length === 0 && nl(this.src, this), this.stopTracking(), a !== "disabled" && this.startTracking(), this.trigger("modechange"));
    } }, cues: { get: function() {
      return this.loaded_ ? u : null;
    }, set: function() {
    } }, activeCues: { get: function() {
      if (!this.loaded_) return null;
      if (this.cues.length === 0) return l;
      for (var _ = this.tech_.currentTime(), C = [], w = 0, S = this.cues.length; w < S; w++) {
        var F = this.cues[w];
        (F.startTime <= _ && F.endTime >= _ || F.startTime === F.endTime && F.startTime <= _ && F.startTime + 0.5 >= _) && C.push(F);
      }
      if (c = false, C.length !== this.activeCues_.length) c = true;
      else for (var N = 0; N < C.length; N++) this.activeCues_.indexOf(C[N]) === -1 && (c = true);
      return this.activeCues_ = C, l.setCues_(this.activeCues_), l;
    }, set: function() {
    } } }), t.src ? (e.src = t.src, e.preload_ || (e.loaded_ = true), (e.preload_ || t.kind !== "subtitles" && t.kind !== "captions") && nl(e.src, ye(e))) : e.loaded_ = true, e;
  }
  var n = r.prototype;
  return n.startTracking = function() {
    this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler), this.tech_.on("timeupdate", this.timeupdateHandler);
  }, n.stopTracking = function() {
    this.rvf_ && (this.tech_.cancelVideoFrameCallback(this.rvf_), this.rvf_ = void 0), this.tech_.off("timeupdate", this.timeupdateHandler);
  }, n.addCue = function(e) {
    var t = e;
    if (!("getCueAsHTML" in t)) {
      t = new P.vttjs.VTTCue(e.startTime, e.endTime, e.text);
      for (var a in e) a in t || (t[a] = e[a]);
      t.id = e.id, t.originalCue_ = e;
    }
    for (var o = this.tech_.textTracks(), u = 0; u < o.length; u++) o[u] !== this && o[u].removeCue(t);
    this.cues_.push(t), this.cues.setCues_(this.cues_);
  }, n.removeCue = function(e) {
    for (var t = this.cues_.length; t--; ) {
      var a = this.cues_[t];
      if (a === e || a.originalCue_ && a.originalCue_ === e) {
        this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
        break;
      }
    }
  }, r;
})(Ys);
Vi.prototype.allowedEvents_ = { cuechange: "cuechange" };
var qd = (function(s12) {
  oe(r, s12);
  function r(n) {
    var i;
    n === void 0 && (n = {});
    var e = Fe(n, { kind: ng[n.kind] || "" });
    i = s12.call(this, e) || this;
    var t = false;
    return Object.defineProperty(ye(i), "enabled", { get: function() {
      return t;
    }, set: function(o) {
      typeof o != "boolean" || o === t || (t = o, this.trigger("enabledchange"));
    } }), e.enabled && (i.enabled = e.enabled), i.loaded_ = true, i;
  }
  return r;
})(Ys), Vd = (function(s12) {
  oe(r, s12);
  function r(n) {
    var i;
    n === void 0 && (n = {});
    var e = Fe(n, { kind: ig[n.kind] || "" });
    i = s12.call(this, e) || this;
    var t = false;
    return Object.defineProperty(ye(i), "selected", { get: function() {
      return t;
    }, set: function(o) {
      typeof o != "boolean" || o === t || (t = o, this.trigger("selectedchange"));
    } }), e.selected && (i.selected = e.selected), i;
  }
  return r;
})(Ys), jd = 0, og = 1, Hd = 2, ug = 3, si = (function(s12) {
  oe(r, s12);
  function r(n) {
    var i;
    n === void 0 && (n = {}), i = s12.call(this) || this;
    var e, t = new Vi(n);
    return i.kind = t.kind, i.src = t.src, i.srclang = t.language, i.label = t.label, i.default = t.default, Object.defineProperties(ye(i), { readyState: { get: function() {
      return e;
    } }, track: { get: function() {
      return t;
    } } }), e = jd, t.addEventListener("loadeddata", function() {
      e = Hd, i.trigger({ type: "load", target: ye(i) });
    }), i;
  }
  return r;
})(Ze);
si.prototype.allowedEvents_ = { load: "load" };
si.NONE = jd;
si.LOADING = og;
si.LOADED = Hd;
si.ERROR = ug;
var At = { audio: { ListClass: eg, TrackClass: qd, capitalName: "Audio" }, video: { ListClass: tg, TrackClass: Vd, capitalName: "Video" }, text: { ListClass: Bd, TrackClass: Vi, capitalName: "Text" } };
Object.keys(At).forEach(function(s12) {
  At[s12].getterName = s12 + "Tracks", At[s12].privateName = s12 + "Tracks_";
});
var ei = { remoteText: { ListClass: Bd, TrackClass: Vi, capitalName: "RemoteText", getterName: "remoteTextTracks", privateName: "remoteTextTracks_" }, remoteTextEl: { ListClass: rg, TrackClass: si, capitalName: "RemoteTextTrackEls", getterName: "remoteTextTrackEls", privateName: "remoteTextTrackEls_" } }, lt = It({}, At, ei);
ei.names = Object.keys(ei);
At.names = Object.keys(At);
lt.names = [].concat(ei.names).concat(At.names);
function lg(s12, r, n, i, e) {
  e === void 0 && (e = {});
  var t = s12.textTracks();
  e.kind = r, n && (e.label = n), i && (e.language = i), e.tech = s12;
  var a = new lt.text.TrackClass(e);
  return t.addTrack(a), a;
}
var we = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return i === void 0 && (i = {}), e === void 0 && (e = function() {
    }), i.reportTouchActivity = false, t = s12.call(this, null, i, e) || this, t.onDurationChange_ = function(a) {
      return t.onDurationChange(a);
    }, t.trackProgress_ = function(a) {
      return t.trackProgress(a);
    }, t.trackCurrentTime_ = function(a) {
      return t.trackCurrentTime(a);
    }, t.stopTrackingCurrentTime_ = function(a) {
      return t.stopTrackingCurrentTime(a);
    }, t.disposeSourceHandler_ = function(a) {
      return t.disposeSourceHandler(a);
    }, t.queuedHanders_ = /* @__PURE__ */ new Set(), t.hasStarted_ = false, t.on("playing", function() {
      this.hasStarted_ = true;
    }), t.on("loadstart", function() {
      this.hasStarted_ = false;
    }), lt.names.forEach(function(a) {
      var o = lt[a];
      i && i[o.getterName] && (t[o.privateName] = i[o.getterName]);
    }), t.featuresProgressEvents || t.manualProgressOn(), t.featuresTimeupdateEvents || t.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function(a) {
      i["native" + a + "Tracks"] === false && (t["featuresNative" + a + "Tracks"] = false);
    }), i.nativeCaptions === false || i.nativeTextTracks === false ? t.featuresNativeTextTracks = false : (i.nativeCaptions === true || i.nativeTextTracks === true) && (t.featuresNativeTextTracks = true), t.featuresNativeTextTracks || t.emulateTextTracks(), t.preloadTextTracks = i.preloadTextTracks !== false, t.autoRemoteTextTracks_ = new lt.text.ListClass(), t.initTrackListeners(), i.nativeControlsForTouch || t.emitTapEvents(), t.constructor && (t.name_ = t.constructor.name || "Unknown Tech"), t;
  }
  var n = r.prototype;
  return n.triggerSourceset = function(e) {
    var t = this;
    this.isReady_ || this.one("ready", function() {
      return t.setTimeout(function() {
        return t.triggerSourceset(e);
      }, 1);
    }), this.trigger({ src: e, type: "sourceset" });
  }, n.manualProgressOn = function() {
    this.on("durationchange", this.onDurationChange_), this.manualProgress = true, this.one("ready", this.trackProgress_);
  }, n.manualProgressOff = function() {
    this.manualProgress = false, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange_);
  }, n.trackProgress = function(e) {
    this.stopTrackingProgress(), this.progressInterval = this.setInterval(Re(this, function() {
      var t = this.bufferedPercent();
      this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, t === 1 && this.stopTrackingProgress();
    }), 500);
  }, n.onDurationChange = function(e) {
    this.duration_ = this.duration();
  }, n.buffered = function() {
    return Ir(0, 0);
  }, n.bufferedPercent = function() {
    return Nd(this.buffered(), this.duration_);
  }, n.stopTrackingProgress = function() {
    this.clearInterval(this.progressInterval);
  }, n.manualTimeUpdatesOn = function() {
    this.manualTimeUpdates = true, this.on("play", this.trackCurrentTime_), this.on("pause", this.stopTrackingCurrentTime_);
  }, n.manualTimeUpdatesOff = function() {
    this.manualTimeUpdates = false, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime_), this.off("pause", this.stopTrackingCurrentTime_);
  }, n.trackCurrentTime = function() {
    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
      this.trigger({ type: "timeupdate", target: this, manuallyTriggered: true });
    }, 250);
  }, n.stopTrackingCurrentTime = function() {
    this.clearInterval(this.currentTimeInterval), this.trigger({ type: "timeupdate", target: this, manuallyTriggered: true });
  }, n.dispose = function() {
    this.clearTracks(At.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), s12.prototype.dispose.call(this);
  }, n.clearTracks = function(e) {
    var t = this;
    e = [].concat(e), e.forEach(function(a) {
      for (var o = t[a + "Tracks"]() || [], u = o.length; u--; ) {
        var l = o[u];
        a === "text" && t.removeRemoteTextTrack(l), o.removeTrack(l);
      }
    });
  }, n.cleanupAutoTextTracks = function() {
    for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--; ) {
      var a = e[t];
      this.removeRemoteTextTrack(a);
    }
  }, n.reset = function() {
  }, n.crossOrigin = function() {
  }, n.setCrossOrigin = function() {
  }, n.error = function(e) {
    return e !== void 0 && (this.error_ = new ft(e), this.trigger("error")), this.error_;
  }, n.played = function() {
    return this.hasStarted_ ? Ir(0, 0) : Ir();
  }, n.play = function() {
  }, n.setScrubbing = function() {
  }, n.scrubbing = function() {
  }, n.setCurrentTime = function() {
    this.manualTimeUpdates && this.trigger({ type: "timeupdate", target: this, manuallyTriggered: true });
  }, n.initTrackListeners = function() {
    var e = this;
    At.names.forEach(function(t) {
      var a = At[t], o = function() {
        e.trigger(t + "trackchange");
      }, u = e[a.getterName]();
      u.addEventListener("removetrack", o), u.addEventListener("addtrack", o), e.on("dispose", function() {
        u.removeEventListener("removetrack", o), u.removeEventListener("addtrack", o);
      });
    });
  }, n.addWebVttScript_ = function() {
    var e = this;
    if (!P.WebVTT) if (ae.body.contains(this.el())) {
      if (!this.options_["vtt.js"] && Oi(Eu) && Object.keys(Eu).length > 0) {
        this.trigger("vttjsloaded");
        return;
      }
      var t = ae.createElement("script");
      t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", t.onload = function() {
        e.trigger("vttjsloaded");
      }, t.onerror = function() {
        e.trigger("vttjserror");
      }, this.on("dispose", function() {
        t.onload = null, t.onerror = null;
      }), P.WebVTT = true, this.el().parentNode.appendChild(t);
    } else this.ready(this.addWebVttScript_);
  }, n.emulateTextTracks = function() {
    var e = this, t = this.textTracks(), a = this.remoteTextTracks(), o = function(g) {
      return t.addTrack(g.track);
    }, u = function(g) {
      return t.removeTrack(g.track);
    };
    a.on("addtrack", o), a.on("removetrack", u), this.addWebVttScript_();
    var l = function() {
      return e.trigger("texttrackchange");
    }, c = function() {
      l();
      for (var g = 0; g < t.length; g++) {
        var _ = t[g];
        _.removeEventListener("cuechange", l), _.mode === "showing" && _.addEventListener("cuechange", l);
      }
    };
    c(), t.addEventListener("change", c), t.addEventListener("addtrack", c), t.addEventListener("removetrack", c), this.on("dispose", function() {
      a.off("addtrack", o), a.off("removetrack", u), t.removeEventListener("change", c), t.removeEventListener("addtrack", c), t.removeEventListener("removetrack", c);
      for (var m = 0; m < t.length; m++) {
        var g = t[m];
        g.removeEventListener("cuechange", l);
      }
    });
  }, n.addTextTrack = function(e, t, a) {
    if (!e) throw new Error("TextTrack kind is required but was not provided");
    return lg(this, e, t, a);
  }, n.createRemoteTextTrack = function(e) {
    var t = Fe(e, { tech: this });
    return new ei.remoteTextEl.TrackClass(t);
  }, n.addRemoteTextTrack = function(e, t) {
    var a = this;
    e === void 0 && (e = {});
    var o = this.createRemoteTextTrack(e);
    return t !== true && t !== false && (Te.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), t = true), this.remoteTextTrackEls().addTrackElement_(o), this.remoteTextTracks().addTrack(o.track), t !== true && this.ready(function() {
      return a.autoRemoteTextTracks_.addTrack(o.track);
    }), o;
  }, n.removeRemoteTextTrack = function(e) {
    var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
    this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e);
  }, n.getVideoPlaybackQuality = function() {
    return {};
  }, n.requestPictureInPicture = function() {
    var e = this.options_.Promise || P.Promise;
    if (e) return e.reject();
  }, n.disablePictureInPicture = function() {
    return true;
  }, n.setDisablePictureInPicture = function() {
  }, n.requestVideoFrameCallback = function(e) {
    var t = this, a = ar();
    return !this.isReady_ || this.paused() ? (this.queuedHanders_.add(a), this.one("playing", function() {
      t.queuedHanders_.has(a) && (t.queuedHanders_.delete(a), e());
    })) : this.requestNamedAnimationFrame(a, e), a;
  }, n.cancelVideoFrameCallback = function(e) {
    this.queuedHanders_.has(e) ? this.queuedHanders_.delete(e) : this.cancelNamedAnimationFrame(e);
  }, n.setPoster = function() {
  }, n.playsinline = function() {
  }, n.setPlaysinline = function() {
  }, n.overrideNativeAudioTracks = function() {
  }, n.overrideNativeVideoTracks = function() {
  }, n.canPlayType = function() {
    return "";
  }, r.canPlayType = function() {
    return "";
  }, r.canPlaySource = function(e, t) {
    return r.canPlayType(e.type);
  }, r.isTech = function(e) {
    return e.prototype instanceof r || e instanceof r || e === r;
  }, r.registerTech = function(e, t) {
    if (r.techs_ || (r.techs_ = {}), !r.isTech(t)) throw new Error("Tech " + e + " must be a Tech");
    if (!r.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
    if (!r.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
    return e = Ge(e), r.techs_[e] = t, r.techs_[kn(e)] = t, e !== "Tech" && r.defaultTechOrder_.push(e), t;
  }, r.getTech = function(e) {
    if (e) {
      if (r.techs_ && r.techs_[e]) return r.techs_[e];
      if (e = Ge(e), P && P.videojs && P.videojs[e]) return Te.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), P.videojs[e];
    }
  }, r;
})(te);
lt.names.forEach(function(s12) {
  var r = lt[s12];
  we.prototype[r.getterName] = function() {
    return this[r.privateName] = this[r.privateName] || new r.ListClass(), this[r.privateName];
  };
});
we.prototype.featuresVolumeControl = true;
we.prototype.featuresMuteControl = true;
we.prototype.featuresFullscreenResize = false;
we.prototype.featuresPlaybackRate = false;
we.prototype.featuresProgressEvents = false;
we.prototype.featuresSourceset = false;
we.prototype.featuresTimeupdateEvents = false;
we.prototype.featuresNativeTextTracks = false;
we.prototype.featuresVideoFrameCallback = false;
we.withSourceHandlers = function(s12) {
  s12.registerSourceHandler = function(n, i) {
    var e = s12.sourceHandlers;
    e || (e = s12.sourceHandlers = []), i === void 0 && (i = e.length), e.splice(i, 0, n);
  }, s12.canPlayType = function(n) {
    for (var i = s12.sourceHandlers || [], e, t = 0; t < i.length; t++) if (e = i[t].canPlayType(n), e) return e;
    return "";
  }, s12.selectSourceHandler = function(n, i) {
    for (var e = s12.sourceHandlers || [], t, a = 0; a < e.length; a++) if (t = e[a].canHandleSource(n, i), t) return e[a];
    return null;
  }, s12.canPlaySource = function(n, i) {
    var e = s12.selectSourceHandler(n, i);
    return e ? e.canHandleSource(n, i) : "";
  };
  var r = ["seekable", "seeking", "duration"];
  r.forEach(function(n) {
    var i = this[n];
    typeof i == "function" && (this[n] = function() {
      return this.sourceHandler_ && this.sourceHandler_[n] ? this.sourceHandler_[n].apply(this.sourceHandler_, arguments) : i.apply(this, arguments);
    });
  }, s12.prototype), s12.prototype.setSource = function(n) {
    var i = s12.selectSourceHandler(n, this.options_);
    i || (s12.nativeSourceHandler ? i = s12.nativeSourceHandler : Te.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler_), i !== s12.nativeSourceHandler && (this.currentSource_ = n), this.sourceHandler_ = i.handleSource(n, this, this.options_), this.one("dispose", this.disposeSourceHandler_);
  }, s12.prototype.disposeSourceHandler = function() {
    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null);
  };
};
te.registerComponent("Tech", we);
we.registerTech("Tech", we);
we.defaultTechOrder_ = [];
var Or = {}, bs = {}, Nn = {};
function dg(s12, r) {
  Or[s12] = Or[s12] || [], Or[s12].push(r);
}
function cg(s12, r, n) {
  s12.setTimeout(function() {
    return Ar(r, Or[r.type], n, s12);
  }, 1);
}
function fg(s12, r) {
  s12.forEach(function(n) {
    return n.setTech && n.setTech(r);
  });
}
function hg(s12, r, n) {
  return s12.reduceRight(Zs(n), r[n]());
}
function pg(s12, r, n, i) {
  return r[n](s12.reduce(Zs(n), i));
}
function al(s12, r, n, i) {
  i === void 0 && (i = null);
  var e = "call" + Ge(n), t = s12.reduce(Zs(e), i), a = t === Nn, o = a ? null : r[n](t);
  return vg(s12, n, o, a), o;
}
var mg = { buffered: 1, currentTime: 1, duration: 1, muted: 1, played: 1, paused: 1, seekable: 1, volume: 1, ended: 1 }, gg = { setCurrentTime: 1, setMuted: 1, setVolume: 1 }, sl = { play: 1, pause: 1 };
function Zs(s12) {
  return function(r, n) {
    return r === Nn ? Nn : n[s12] ? n[s12](r) : r;
  };
}
function vg(s12, r, n, i) {
  for (var e = s12.length - 1; e >= 0; e--) {
    var t = s12[e];
    t[r] && t[r](i, n);
  }
}
function yg(s12) {
  bs[s12.id()] = null;
}
function _g(s12, r) {
  var n = bs[s12.id()], i = null;
  if (n == null) return i = r(s12), bs[s12.id()] = [[r, i]], i;
  for (var e = 0; e < n.length; e++) {
    var t = n[e], a = t[0], o = t[1];
    a === r && (i = o);
  }
  return i === null && (i = r(s12), n.push([r, i])), i;
}
function Ar(s12, r, n, i, e, t) {
  s12 === void 0 && (s12 = {}), r === void 0 && (r = []), e === void 0 && (e = []), t === void 0 && (t = false);
  var a = r, o = a[0], u = a.slice(1);
  if (typeof o == "string") Ar(s12, Or[o], n, i, e, t);
  else if (o) {
    var l = _g(i, o);
    if (!l.setSource) return e.push(l), Ar(s12, u, n, i, e, t);
    l.setSource(Ue({}, s12), function(c, m) {
      if (c) return Ar(s12, u, n, i, e, t);
      e.push(l), Ar(m, s12.type === m.type ? u : Or[m.type], n, i, e, t);
    });
  } else u.length ? Ar(s12, u, n, i, e, t) : t ? n(s12, e) : Ar(s12, Or["*"], n, i, e, true);
}
var Tg = { opus: "video/ogg", ogv: "video/ogg", mp4: "video/mp4", mov: "video/mp4", m4v: "video/mp4", mkv: "video/x-matroska", m4a: "audio/mp4", mp3: "audio/mpeg", aac: "audio/aac", caf: "audio/x-caf", flac: "audio/flac", oga: "audio/ogg", wav: "audio/wav", m3u8: "application/x-mpegURL", mpd: "application/dash+xml", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", png: "image/png", svg: "image/svg+xml", webp: "image/webp" }, Bn = function(r) {
  r === void 0 && (r = "");
  var n = Js(r), i = Tg[n.toLowerCase()];
  return i || "";
}, bg = function(r, n) {
  if (!n) return "";
  if (r.cache_.source.src === n && r.cache_.source.type) return r.cache_.source.type;
  var i = r.cache_.sources.filter(function(o) {
    return o.src === n;
  });
  if (i.length) return i[0].type;
  for (var e = r.$$("source"), t = 0; t < e.length; t++) {
    var a = e[t];
    if (a.type && a.src && a.src === n) return a.type;
  }
  return Bn(n);
}, xg = function s7(r) {
  if (Array.isArray(r)) {
    var n = [];
    r.forEach(function(i) {
      i = s7(i), Array.isArray(i) ? n = n.concat(i) : tr(i) && n.push(i);
    }), r = n;
  } else typeof r == "string" && r.trim() ? r = [ol({ src: r })] : tr(r) && typeof r.src == "string" && r.src && r.src.trim() ? r = [ol(r)] : r = [];
  return r;
};
function ol(s12) {
  if (!s12.type) {
    var r = Bn(s12.src);
    r && (s12.type = r);
  }
  return s12;
}
var Sg = (function(s12) {
  oe(r, s12);
  function r(n, i, e) {
    var t, a = Fe({ createEl: false }, i);
    if (t = s12.call(this, n, a, e) || this, !i.playerOptions.sources || i.playerOptions.sources.length === 0) for (var o = 0, u = i.playerOptions.techOrder; o < u.length; o++) {
      var l = Ge(u[o]), c = we.getTech(l);
      if (l || (c = te.getComponent(l)), c && c.isSupported()) {
        n.loadTech_(l);
        break;
      }
    }
    else n.src(i.playerOptions.sources);
    return t;
  }
  return r;
})(te);
te.registerComponent("MediaLoader", Sg);
var ca = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.options_.controlText && t.controlText(t.options_.controlText), t.handleMouseOver_ = function(a) {
      return t.handleMouseOver(a);
    }, t.handleMouseOut_ = function(a) {
      return t.handleMouseOut(a);
    }, t.handleClick_ = function(a) {
      return t.handleClick(a);
    }, t.handleKeyDown_ = function(a) {
      return t.handleKeyDown(a);
    }, t.emitTapEvents(), t.enable(), t;
  }
  var n = r.prototype;
  return n.createEl = function(e, t, a) {
    e === void 0 && (e = "div"), t === void 0 && (t = {}), a === void 0 && (a = {}), t = Ue({ className: this.buildCSSClass(), tabIndex: 0 }, t), e === "button" && Te.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), a = Ue({ role: "button" }, a), this.tabIndex_ = t.tabIndex;
    var o = Ee(e, t, a);
    return o.appendChild(Ee("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": true })), this.createControlTextEl(o), o;
  }, n.dispose = function() {
    this.controlTextEl_ = null, s12.prototype.dispose.call(this);
  }, n.createControlTextEl = function(e) {
    return this.controlTextEl_ = Ee("span", { className: "vjs-control-text" }, { "aria-live": "polite" }), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_;
  }, n.controlText = function(e, t) {
    if (t === void 0 && (t = this.el()), e === void 0) return this.controlText_ || "Need Text";
    var a = this.localize(e);
    this.controlText_ = e, Lr(this.controlTextEl_, a), !this.nonIconControl && !this.player_.options_.noUITitleAttributes && t.setAttribute("title", a);
  }, n.buildCSSClass = function() {
    return "vjs-control vjs-button " + s12.prototype.buildCSSClass.call(this);
  }, n.enable = function() {
    this.enabled_ || (this.enabled_ = true, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), typeof this.tabIndex_ < "u" && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick_), this.on("keydown", this.handleKeyDown_));
  }, n.disable = function() {
    this.enabled_ = false, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), typeof this.tabIndex_ < "u" && this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver_), this.off("mouseout", this.handleMouseOut_), this.off(["tap", "click"], this.handleClick_), this.off("keydown", this.handleKeyDown_);
  }, n.handleLanguagechange = function() {
    this.controlText(this.controlText_);
  }, n.handleClick = function(e) {
    this.options_.clickHandler && this.options_.clickHandler.call(this, arguments);
  }, n.handleKeyDown = function(e) {
    _e.isEventKey(e, "Space") || _e.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : s12.prototype.handleKeyDown.call(this, e);
  }, r;
})(te);
te.registerComponent("ClickableComponent", ca);
var Eg = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.update(), t.update_ = function(a) {
      return t.update(a);
    }, i.on("posterchange", t.update_), t;
  }
  var n = r.prototype;
  return n.dispose = function() {
    this.player().off("posterchange", this.update_), s12.prototype.dispose.call(this);
  }, n.createEl = function() {
    var e = Ee("div", { className: "vjs-poster", tabIndex: -1 });
    return e;
  }, n.update = function(e) {
    var t = this.player().poster();
    this.setSrc(t), t ? this.show() : this.hide();
  }, n.setSrc = function(e) {
    var t = "";
    e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t;
  }, n.handleClick = function(e) {
    if (this.player_.controls()) {
      var t = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
      this.player_.tech(true) && !((Ui || Bi) && t) && this.player_.tech(true).focus(), this.player_.paused() ? Vt(this.player_.play()) : this.player_.pause();
    }
  }, r;
})(ca);
te.registerComponent("PosterImage", Eg);
var Ct = "#222", ul = "#ccc", Cg = { monospace: "monospace", sansSerif: "sans-serif", serif: "serif", monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace', monospaceSerif: '"Courier New", monospace', proportionalSansSerif: "sans-serif", proportionalSerif: "serif", casual: '"Comic Sans MS", Impact, fantasy', script: '"Monotype Corsiva", cursive', smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif' };
function Ya(s12, r) {
  var n;
  if (s12.length === 4) n = s12[1] + s12[1] + s12[2] + s12[2] + s12[3] + s12[3];
  else if (s12.length === 7) n = s12.slice(1);
  else throw new Error("Invalid color code provided, " + s12 + "; must be formatted as e.g. #f0e or #f604e2.");
  return "rgba(" + parseInt(n.slice(0, 2), 16) + "," + parseInt(n.slice(2, 4), 16) + "," + parseInt(n.slice(4, 6), 16) + "," + r + ")";
}
function Qa(s12, r, n) {
  try {
    s12.style[r] = n;
  } catch {
    return;
  }
}
var Ag = (function(s12) {
  oe(r, s12);
  function r(i, e, t) {
    var a;
    a = s12.call(this, i, e, t) || this;
    var o = function(l) {
      return a.updateDisplay(l);
    };
    return i.on("loadstart", function(u) {
      return a.toggleDisplay(u);
    }), i.on("texttrackchange", o), i.on("loadedmetadata", function(u) {
      return a.preselectTrack(u);
    }), i.ready(Re(ye(a), function() {
      if (i.tech_ && i.tech_.featuresNativeTextTracks) {
        this.hide();
        return;
      }
      i.on("fullscreenchange", o), i.on("playerresize", o), P.addEventListener("orientationchange", o), i.on("dispose", function() {
        return P.removeEventListener("orientationchange", o);
      });
      for (var u = this.options_.playerOptions.tracks || [], l = 0; l < u.length; l++) this.player_.addRemoteTextTrack(u[l], true);
      this.preselectTrack();
    })), a;
  }
  var n = r.prototype;
  return n.preselectTrack = function() {
    for (var e = { captions: 1, subtitles: 1 }, t = this.player_.textTracks(), a = this.player_.cache_.selectedLanguage, o, u, l, c = 0; c < t.length; c++) {
      var m = t[c];
      a && a.enabled && a.language && a.language === m.language && m.kind in e ? m.kind === a.kind ? l = m : l || (l = m) : a && !a.enabled ? (l = null, o = null, u = null) : m.default && (m.kind === "descriptions" && !o ? o = m : m.kind in e && !u && (u = m));
    }
    l ? l.mode = "showing" : u ? u.mode = "showing" : o && (o.mode = "showing");
  }, n.toggleDisplay = function() {
    this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show();
  }, n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-text-track-display" }, { translate: "yes", "aria-live": "off", "aria-atomic": "true" });
  }, n.clearDisplay = function() {
    typeof P.WebVTT == "function" && P.WebVTT.processCues(P, [], this.el_);
  }, n.updateDisplay = function() {
    var e = this.player_.textTracks(), t = this.options_.allowMultipleShowingTracks;
    if (this.clearDisplay(), t) {
      for (var a = [], o = 0; o < e.length; ++o) {
        var u = e[o];
        u.mode === "showing" && a.push(u);
      }
      this.updateForTrack(a);
      return;
    }
    for (var l = null, c = null, m = e.length; m--; ) {
      var g = e[m];
      g.mode === "showing" && (g.kind === "descriptions" ? l = g : c = g);
    }
    c ? (this.getAttribute("aria-live") !== "off" && this.setAttribute("aria-live", "off"), this.updateForTrack(c)) : l && (this.getAttribute("aria-live") !== "assertive" && this.setAttribute("aria-live", "assertive"), this.updateForTrack(l));
  }, n.updateDisplayState = function(e) {
    for (var t = this.player_.textTrackSettings.getValues(), a = e.activeCues, o = a.length; o--; ) {
      var u = a[o];
      if (u) {
        var l = u.displayState;
        if (t.color && (l.firstChild.style.color = t.color), t.textOpacity && Qa(l.firstChild, "color", Ya(t.color || "#fff", t.textOpacity)), t.backgroundColor && (l.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && Qa(l.firstChild, "backgroundColor", Ya(t.backgroundColor || "#000", t.backgroundOpacity)), t.windowColor && (t.windowOpacity ? Qa(l, "backgroundColor", Ya(t.windowColor, t.windowOpacity)) : l.style.backgroundColor = t.windowColor), t.edgeStyle && (t.edgeStyle === "dropshadow" ? l.firstChild.style.textShadow = "2px 2px 3px " + Ct + ", 2px 2px 4px " + Ct + ", 2px 2px 5px " + Ct : t.edgeStyle === "raised" ? l.firstChild.style.textShadow = "1px 1px " + Ct + ", 2px 2px " + Ct + ", 3px 3px " + Ct : t.edgeStyle === "depressed" ? l.firstChild.style.textShadow = "1px 1px " + ul + ", 0 1px " + ul + ", -1px -1px " + Ct + ", 0 -1px " + Ct : t.edgeStyle === "uniform" && (l.firstChild.style.textShadow = "0 0 4px " + Ct + ", 0 0 4px " + Ct + ", 0 0 4px " + Ct + ", 0 0 4px " + Ct)), t.fontPercent && t.fontPercent !== 1) {
          var c = P.parseFloat(l.style.fontSize);
          l.style.fontSize = c * t.fontPercent + "px", l.style.height = "auto", l.style.top = "auto";
        }
        t.fontFamily && t.fontFamily !== "default" && (t.fontFamily === "small-caps" ? l.firstChild.style.fontVariant = "small-caps" : l.firstChild.style.fontFamily = Cg[t.fontFamily]);
      }
    }
  }, n.updateForTrack = function(e) {
    if (Array.isArray(e) || (e = [e]), !(typeof P.WebVTT != "function" || e.every(function(_) {
      return !_.activeCues;
    }))) {
      for (var t = [], a = 0; a < e.length; ++a) for (var o = e[a], u = 0; u < o.activeCues.length; ++u) t.push(o.activeCues[u]);
      P.WebVTT.processCues(P, t, this.el_);
      for (var l = 0; l < e.length; ++l) {
        for (var c = e[l], m = 0; m < c.activeCues.length; ++m) {
          var g = c.activeCues[m].displayState;
          Zt(g, "vjs-text-track-cue"), Zt(g, "vjs-text-track-cue-" + (c.language ? c.language : l)), c.language && Qr(g, "lang", c.language);
        }
        this.player_.textTrackSettings && this.updateDisplayState(c);
      }
    }
  }, r;
})(te);
te.registerComponent("TextTrackDisplay", Ag);
var Dg = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = this.player_.isAudio(), t = this.localize(e ? "Audio Player" : "Video Player"), a = Ee("span", { className: "vjs-control-text", textContent: this.localize("{1} is loading.", [t]) }), o = s12.prototype.createEl.call(this, "div", { className: "vjs-loading-spinner", dir: "ltr" });
    return o.appendChild(a), o;
  }, r;
})(te);
te.registerComponent("LoadingSpinner", Dg);
var Pt = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.createEl = function(e, t, a) {
    t === void 0 && (t = {}), a === void 0 && (a = {}), e = "button", t = Ue({ className: this.buildCSSClass() }, t), a = Ue({ type: "button" }, a);
    var o = Ee(e, t, a);
    return o.appendChild(Ee("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": true })), this.createControlTextEl(o), o;
  }, n.addChild = function(e, t) {
    t === void 0 && (t = {});
    var a = this.constructor.name;
    return Te.warn("Adding an actionable (user controllable) child to a Button (" + a + ") is not supported; use a ClickableComponent instead."), te.prototype.addChild.call(this, e, t);
  }, n.enable = function() {
    s12.prototype.enable.call(this), this.el_.removeAttribute("disabled");
  }, n.disable = function() {
    s12.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled");
  }, n.handleKeyDown = function(e) {
    if (_e.isEventKey(e, "Space") || _e.isEventKey(e, "Enter")) {
      e.stopPropagation();
      return;
    }
    s12.prototype.handleKeyDown.call(this, e);
  }, r;
})(ca);
te.registerComponent("Button", Pt);
var Wd = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.mouseused_ = false, t.on("mousedown", function(a) {
      return t.handleMouseDown(a);
    }), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-big-play-button";
  }, n.handleClick = function(e) {
    var t = this.player_.play();
    if (this.mouseused_ && e.clientX && e.clientY) {
      var a = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
      Vt(t), this.player_.tech(true) && !((Ui || Bi) && a) && this.player_.tech(true).focus();
      return;
    }
    var o = this.player_.getChild("controlBar"), u = o && o.getChild("playToggle");
    if (!u) {
      this.player_.tech(true).focus();
      return;
    }
    var l = function() {
      return u.focus();
    };
    Di(t) ? t.then(l, function() {
    }) : this.setTimeout(l, 1);
  }, n.handleKeyDown = function(e) {
    this.mouseused_ = false, s12.prototype.handleKeyDown.call(this, e);
  }, n.handleMouseDown = function(e) {
    this.mouseused_ = true;
  }, r;
})(Pt);
Wd.prototype.controlText_ = "Play Video";
te.registerComponent("BigPlayButton", Wd);
var wg = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.controlText(e && e.controlText || t.localize("Close")), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-close-button " + s12.prototype.buildCSSClass.call(this);
  }, n.handleClick = function(e) {
    this.trigger({ type: "close", bubbles: false });
  }, n.handleKeyDown = function(e) {
    _e.isEventKey(e, "Esc") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : s12.prototype.handleKeyDown.call(this, e);
  }, r;
})(Pt);
te.registerComponent("CloseButton", wg);
var Gd = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return e === void 0 && (e = {}), t = s12.call(this, i, e) || this, e.replay = e.replay === void 0 || e.replay, t.on(i, "play", function(a) {
      return t.handlePlay(a);
    }), t.on(i, "pause", function(a) {
      return t.handlePause(a);
    }), e.replay && t.on(i, "ended", function(a) {
      return t.handleEnded(a);
    }), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-play-control " + s12.prototype.buildCSSClass.call(this);
  }, n.handleClick = function(e) {
    this.player_.paused() ? Vt(this.player_.play()) : this.player_.pause();
  }, n.handleSeeked = function(e) {
    this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e);
  }, n.handlePlay = function(e) {
    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause");
  }, n.handlePause = function(e) {
    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play");
  }, n.handleEnded = function(e) {
    var t = this;
    this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", function(a) {
      return t.handleSeeked(a);
    });
  }, r;
})(Pt);
Gd.prototype.controlText_ = "Play";
te.registerComponent("PlayToggle", Gd);
var zd = function(r, n) {
  r = r < 0 ? 0 : r;
  var i = Math.floor(r % 60), e = Math.floor(r / 60 % 60), t = Math.floor(r / 3600), a = Math.floor(n / 60 % 60), o = Math.floor(n / 3600);
  return (isNaN(r) || r === 1 / 0) && (t = e = i = "-"), t = t > 0 || o > 0 ? t + ":" : "", e = ((t || a >= 10) && e < 10 ? "0" + e : e) + ":", i = i < 10 ? "0" + i : i, t + e + i;
}, eo = zd;
function kg(s12) {
  eo = s12;
}
function Pg() {
  eo = zd;
}
function ti(s12, r) {
  return r === void 0 && (r = s12), eo(s12, r);
}
var oi = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.on(i, ["timeupdate", "ended"], function(a) {
      return t.updateContent(a);
    }), t.updateTextNode_(), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = this.buildCSSClass(), t = s12.prototype.createEl.call(this, "div", { className: e + " vjs-time-control vjs-control" }), a = Ee("span", { className: "vjs-control-text", textContent: this.localize(this.labelText_) + "\xA0" }, { role: "presentation" });
    return t.appendChild(a), this.contentEl_ = Ee("span", { className: e + "-display" }, { "aria-live": "off", role: "presentation" }), t.appendChild(this.contentEl_), t;
  }, n.dispose = function() {
    this.contentEl_ = null, this.textNode_ = null, s12.prototype.dispose.call(this);
  }, n.updateTextNode_ = function(e) {
    var t = this;
    e === void 0 && (e = 0), e = ti(e), this.formattedTime_ !== e && (this.formattedTime_ = e, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", function() {
      if (t.contentEl_) {
        var a = t.textNode_;
        a && t.contentEl_.firstChild !== a && (a = null, Te.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")), t.textNode_ = ae.createTextNode(t.formattedTime_), t.textNode_ && (a ? t.contentEl_.replaceChild(t.textNode_, a) : t.contentEl_.appendChild(t.textNode_));
      }
    }));
  }, n.updateContent = function(e) {
  }, r;
})(te);
oi.prototype.labelText_ = "Time";
oi.prototype.controlText_ = "Time";
te.registerComponent("TimeDisplay", oi);
var to = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-current-time";
  }, n.updateContent = function(e) {
    var t;
    this.player_.ended() ? t = this.player_.duration() : t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), this.updateTextNode_(t);
  }, r;
})(oi);
to.prototype.labelText_ = "Current Time";
to.prototype.controlText_ = "Current Time";
te.registerComponent("CurrentTimeDisplay", to);
var ro = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    t = s12.call(this, i, e) || this;
    var a = function(u) {
      return t.updateContent(u);
    };
    return t.on(i, "durationchange", a), t.on(i, "loadstart", a), t.on(i, "loadedmetadata", a), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-duration";
  }, n.updateContent = function(e) {
    var t = this.player_.duration();
    this.updateTextNode_(t);
  }, r;
})(oi);
ro.prototype.labelText_ = "Duration";
ro.prototype.controlText_ = "Duration";
te.registerComponent("DurationDisplay", ro);
var Ig = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = s12.prototype.createEl.call(this, "div", { className: "vjs-time-control vjs-time-divider" }, { "aria-hidden": true }), t = s12.prototype.createEl.call(this, "div"), a = s12.prototype.createEl.call(this, "span", { textContent: "/" });
    return t.appendChild(a), e.appendChild(t), e;
  }, r;
})(te);
te.registerComponent("TimeDivider", Ig);
var io = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.on(i, "durationchange", function(a) {
      return t.updateContent(a);
    }), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-remaining-time";
  }, n.createEl = function() {
    var e = s12.prototype.createEl.call(this);
    return this.options_.displayNegative !== false && e.insertBefore(Ee("span", {}, { "aria-hidden": true }, "-"), this.contentEl_), e;
  }, n.updateContent = function(e) {
    if (typeof this.player_.duration() == "number") {
      var t;
      this.player_.ended() ? t = 0 : this.player_.remainingTimeDisplay ? t = this.player_.remainingTimeDisplay() : t = this.player_.remainingTime(), this.updateTextNode_(t);
    }
  }, r;
})(oi);
io.prototype.labelText_ = "Remaining Time";
io.prototype.controlText_ = "Remaining Time";
te.registerComponent("RemainingTimeDisplay", io);
var Og = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.updateShowing(), t.on(t.player(), "durationchange", function(a) {
      return t.updateShowing(a);
    }), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = s12.prototype.createEl.call(this, "div", { className: "vjs-live-control vjs-control" });
    return this.contentEl_ = Ee("div", { className: "vjs-live-display" }, { "aria-live": "off" }), this.contentEl_.appendChild(Ee("span", { className: "vjs-control-text", textContent: this.localize("Stream Type") + "\xA0" })), this.contentEl_.appendChild(ae.createTextNode(this.localize("LIVE"))), e.appendChild(this.contentEl_), e;
  }, n.dispose = function() {
    this.contentEl_ = null, s12.prototype.dispose.call(this);
  }, n.updateShowing = function(e) {
    this.player().duration() === 1 / 0 ? this.show() : this.hide();
  }, r;
})(te);
te.registerComponent("LiveDisplay", Og);
var Kd = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.updateLiveEdgeStatus(), t.player_.liveTracker && (t.updateLiveEdgeStatusHandler_ = function(a) {
      return t.updateLiveEdgeStatus(a);
    }, t.on(t.player_.liveTracker, "liveedgechange", t.updateLiveEdgeStatusHandler_)), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = s12.prototype.createEl.call(this, "button", { className: "vjs-seek-to-live-control vjs-control" });
    return this.textEl_ = Ee("span", { className: "vjs-seek-to-live-text", textContent: this.localize("LIVE") }, { "aria-hidden": "true" }), e.appendChild(this.textEl_), e;
  }, n.updateLiveEdgeStatus = function() {
    !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", true), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", false), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"));
  }, n.handleClick = function() {
    this.player_.liveTracker.seekToLiveEdge();
  }, n.dispose = function() {
    this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_), this.textEl_ = null, s12.prototype.dispose.call(this);
  }, r;
})(Pt);
Kd.prototype.controlText_ = "Seek to live, currently playing live";
te.registerComponent("SeekToLive", Kd);
var fa = function(r, n, i) {
  return r = Number(r), Math.min(i, Math.max(n, isNaN(r) ? n : r));
}, no = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.handleMouseDown_ = function(a) {
      return t.handleMouseDown(a);
    }, t.handleMouseUp_ = function(a) {
      return t.handleMouseUp(a);
    }, t.handleKeyDown_ = function(a) {
      return t.handleKeyDown(a);
    }, t.handleClick_ = function(a) {
      return t.handleClick(a);
    }, t.handleMouseMove_ = function(a) {
      return t.handleMouseMove(a);
    }, t.update_ = function(a) {
      return t.update(a);
    }, t.bar = t.getChild(t.options_.barName), t.vertical(!!t.options_.vertical), t.enable(), t;
  }
  var n = r.prototype;
  return n.enabled = function() {
    return this.enabled_;
  }, n.enable = function() {
    this.enabled() || (this.on("mousedown", this.handleMouseDown_), this.on("touchstart", this.handleMouseDown_), this.on("keydown", this.handleKeyDown_), this.on("click", this.handleClick_), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = true);
  }, n.disable = function() {
    if (this.enabled()) {
      var e = this.bar.el_.ownerDocument;
      this.off("mousedown", this.handleMouseDown_), this.off("touchstart", this.handleMouseDown_), this.off("keydown", this.handleKeyDown_), this.off("click", this.handleClick_), this.off(this.player_, "controlsvisible", this.update_), this.off(e, "mousemove", this.handleMouseMove_), this.off(e, "mouseup", this.handleMouseUp_), this.off(e, "touchmove", this.handleMouseMove_), this.off(e, "touchend", this.handleMouseUp_), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = false;
    }
  }, n.createEl = function(e, t, a) {
    return t === void 0 && (t = {}), a === void 0 && (a = {}), t.className = t.className + " vjs-slider", t = Ue({ tabIndex: 0 }, t), a = Ue({ role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0 }, a), s12.prototype.createEl.call(this, e, t, a);
  }, n.handleMouseDown = function(e) {
    var t = this.bar.el_.ownerDocument;
    e.type === "mousedown" && e.preventDefault(), e.type === "touchstart" && !nr && e.preventDefault(), xd(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove_), this.on(t, "mouseup", this.handleMouseUp_), this.on(t, "touchmove", this.handleMouseMove_), this.on(t, "touchend", this.handleMouseUp_), this.handleMouseMove(e, true);
  }, n.handleMouseMove = function(e) {
  }, n.handleMouseUp = function() {
    var e = this.bar.el_.ownerDocument;
    Sd(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove_), this.off(e, "mouseup", this.handleMouseUp_), this.off(e, "touchmove", this.handleMouseMove_), this.off(e, "touchend", this.handleMouseUp_), this.update();
  }, n.update = function() {
    var e = this;
    if (!(!this.el_ || !this.bar)) {
      var t = this.getProgress();
      return t === this.progress_ || (this.progress_ = t, this.requestNamedAnimationFrame("Slider#update", function() {
        var a = e.vertical() ? "height" : "width";
        e.bar.el().style[a] = (t * 100).toFixed(2) + "%";
      })), t;
    }
  }, n.getProgress = function() {
    return Number(fa(this.getPercent(), 0, 1).toFixed(4));
  }, n.calculateDistance = function(e) {
    var t = sa(this.el_, e);
    return this.vertical() ? t.y : t.x;
  }, n.handleKeyDown = function(e) {
    _e.isEventKey(e, "Left") || _e.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepBack()) : _e.isEventKey(e, "Right") || _e.isEventKey(e, "Up") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : s12.prototype.handleKeyDown.call(this, e);
  }, n.handleClick = function(e) {
    e.stopPropagation(), e.preventDefault();
  }, n.vertical = function(e) {
    if (e === void 0) return this.vertical_ || false;
    this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal");
  }, r;
})(te);
te.registerComponent("Slider", no);
var Ja = function(r, n) {
  return fa(r / n * 100, 0, 100).toFixed(2) + "%";
}, Lg = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.partEls_ = [], t.on(i, "progress", function(a) {
      return t.update(a);
    }), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = s12.prototype.createEl.call(this, "div", { className: "vjs-load-progress" }), t = Ee("span", { className: "vjs-control-text" }), a = Ee("span", { textContent: this.localize("Loaded") }), o = ae.createTextNode(": ");
    return this.percentageEl_ = Ee("span", { className: "vjs-control-text-loaded-percentage", textContent: "0%" }), e.appendChild(t), t.appendChild(a), t.appendChild(o), t.appendChild(this.percentageEl_), e;
  }, n.dispose = function() {
    this.partEls_ = null, this.percentageEl_ = null, s12.prototype.dispose.call(this);
  }, n.update = function(e) {
    var t = this;
    this.requestNamedAnimationFrame("LoadProgressBar#update", function() {
      var a = t.player_.liveTracker, o = t.player_.buffered(), u = a && a.isLive() ? a.seekableEnd() : t.player_.duration(), l = t.player_.bufferedEnd(), c = t.partEls_, m = Ja(l, u);
      t.percent_ !== m && (t.el_.style.width = m, Lr(t.percentageEl_, m), t.percent_ = m);
      for (var g = 0; g < o.length; g++) {
        var _ = o.start(g), C = o.end(g), w = c[g];
        w || (w = t.el_.appendChild(Ee()), c[g] = w), !(w.dataset.start === _ && w.dataset.end === C) && (w.dataset.start = _, w.dataset.end = C, w.style.left = Ja(_, l), w.style.width = Ja(C - _, l));
      }
      for (var S = c.length; S > o.length; S--) t.el_.removeChild(c[S - 1]);
      c.length = o.length;
    });
  }, r;
})(te);
te.registerComponent("LoadProgressBar", Lg);
var Fg = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.update = rr(Re(ye(t), t.update), Ot), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-time-tooltip" }, { "aria-hidden": "true" });
  }, n.update = function(e, t, a) {
    var o = Fi(this.el_), u = Jr(this.player_.el()), l = e.width * t;
    if (!(!u || !o)) {
      var c = e.left - u.left + l, m = e.width - l + (u.right - e.right), g = o.width / 2;
      c < g ? g += g - c : m < g && (g = m), g < 0 ? g = 0 : g > o.width && (g = o.width), g = Math.round(g), this.el_.style.right = "-" + g + "px", this.write(a);
    }
  }, n.write = function(e) {
    Lr(this.el_, e);
  }, n.updateTime = function(e, t, a, o) {
    var u = this;
    this.requestNamedAnimationFrame("TimeTooltip#updateTime", function() {
      var l, c = u.player_.duration();
      if (u.player_.liveTracker && u.player_.liveTracker.isLive()) {
        var m = u.player_.liveTracker.liveWindow(), g = m - t * m;
        l = (g < 1 ? "" : "-") + ti(g, m);
      } else l = ti(a, c);
      u.update(e, t, l), o && o();
    });
  }, r;
})(te);
te.registerComponent("TimeTooltip", Fg);
var ao = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.update = rr(Re(ye(t), t.update), Ot), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-play-progress vjs-slider-bar" }, { "aria-hidden": "true" });
  }, n.update = function(e, t) {
    var a = this.getChild("timeTooltip");
    if (a) {
      var o = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
      a.updateTime(e, t, o);
    }
  }, r;
})(te);
ao.prototype.options_ = { children: [] };
!ht && !ir && ao.prototype.options_.children.push("timeTooltip");
te.registerComponent("PlayProgressBar", ao);
var Xd = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.update = rr(Re(ye(t), t.update), Ot), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-mouse-display" });
  }, n.update = function(e, t) {
    var a = this, o = t * this.player_.duration();
    this.getChild("timeTooltip").updateTime(e, t, o, function() {
      a.el_.style.left = e.width * t + "px";
    });
  }, r;
})(te);
Xd.prototype.options_ = { children: ["timeTooltip"] };
te.registerComponent("MouseTimeDisplay", Xd);
var xn = 5, ll = 12, so = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.setEventHandlers_(), t;
  }
  var n = r.prototype;
  return n.setEventHandlers_ = function() {
    var e = this;
    this.update_ = Re(this, this.update), this.update = rr(this.update_, Ot), this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval = null, this.enableIntervalHandler_ = function(t) {
      return e.enableInterval_(t);
    }, this.disableIntervalHandler_ = function(t) {
      return e.disableInterval_(t);
    }, this.on(this.player_, ["playing"], this.enableIntervalHandler_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in ae && "visibilityState" in ae && this.on(ae, "visibilitychange", this.toggleVisibility_);
  }, n.toggleVisibility_ = function(e) {
    ae.visibilityState === "hidden" ? (this.cancelNamedAnimationFrame("SeekBar#update"), this.cancelNamedAnimationFrame("Slider#update"), this.disableInterval_(e)) : (!this.player_.ended() && !this.player_.paused() && this.enableInterval_(), this.update());
  }, n.enableInterval_ = function() {
    this.updateInterval || (this.updateInterval = this.setInterval(this.update, Ot));
  }, n.disableInterval_ = function(e) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && e && e.type !== "ended" || this.updateInterval && (this.clearInterval(this.updateInterval), this.updateInterval = null);
  }, n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-progress-holder" }, { "aria-label": this.localize("Progress Bar") });
  }, n.update = function(e) {
    var t = this;
    if (ae.visibilityState !== "hidden") {
      var a = s12.prototype.update.call(this);
      return this.requestNamedAnimationFrame("SeekBar#update", function() {
        var o = t.player_.ended() ? t.player_.duration() : t.getCurrentTime_(), u = t.player_.liveTracker, l = t.player_.duration();
        u && u.isLive() && (l = t.player_.liveTracker.liveCurrentTime()), t.percent_ !== a && (t.el_.setAttribute("aria-valuenow", (a * 100).toFixed(2)), t.percent_ = a), (t.currentTime_ !== o || t.duration_ !== l) && (t.el_.setAttribute("aria-valuetext", t.localize("progress bar timing: currentTime={1} duration={2}", [ti(o, l), ti(l, l)], "{1} of {2}")), t.currentTime_ = o, t.duration_ = l), t.bar && t.bar.update(Jr(t.el()), t.getProgress());
      }), a;
    }
  }, n.userSeek_ = function(e) {
    this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(e);
  }, n.getCurrentTime_ = function() {
    return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
  }, n.getPercent = function() {
    var e = this.getCurrentTime_(), t, a = this.player_.liveTracker;
    return a && a.isLive() ? (t = (e - a.seekableStart()) / a.liveWindow(), a.atLiveEdge() && (t = 1)) : t = e / this.player_.duration(), t;
  }, n.handleMouseDown = function(e) {
    Ri(e) && (e.stopPropagation(), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), s12.prototype.handleMouseDown.call(this, e));
  }, n.handleMouseMove = function(e, t) {
    if (t === void 0 && (t = false), !!Ri(e)) {
      !t && !this.player_.scrubbing() && this.player_.scrubbing(true);
      var a, o = this.calculateDistance(e), u = this.player_.liveTracker;
      if (!u || !u.isLive()) a = o * this.player_.duration(), a === this.player_.duration() && (a = a - 0.1);
      else {
        if (o >= 0.99) {
          u.seekToLiveEdge();
          return;
        }
        var l = u.seekableStart(), c = u.liveCurrentTime();
        if (a = l + o * u.liveWindow(), a >= c && (a = c), a <= l && (a = l + 0.1), a === 1 / 0) return;
      }
      this.userSeek_(a);
    }
  }, n.enable = function() {
    s12.prototype.enable.call(this);
    var e = this.getChild("mouseTimeDisplay");
    e && e.show();
  }, n.disable = function() {
    s12.prototype.disable.call(this);
    var e = this.getChild("mouseTimeDisplay");
    e && e.hide();
  }, n.handleMouseUp = function(e) {
    s12.prototype.handleMouseUp.call(this, e), e && e.stopPropagation(), this.player_.scrubbing(false), this.player_.trigger({ type: "timeupdate", target: this, manuallyTriggered: true }), this.videoWasPlaying ? Vt(this.player_.play()) : this.update_();
  }, n.stepForward = function() {
    this.userSeek_(this.player_.currentTime() + xn);
  }, n.stepBack = function() {
    this.userSeek_(this.player_.currentTime() - xn);
  }, n.handleAction = function(e) {
    this.player_.paused() ? this.player_.play() : this.player_.pause();
  }, n.handleKeyDown = function(e) {
    var t = this.player_.liveTracker;
    if (_e.isEventKey(e, "Space") || _e.isEventKey(e, "Enter")) e.preventDefault(), e.stopPropagation(), this.handleAction(e);
    else if (_e.isEventKey(e, "Home")) e.preventDefault(), e.stopPropagation(), this.userSeek_(0);
    else if (_e.isEventKey(e, "End")) e.preventDefault(), e.stopPropagation(), t && t.isLive() ? this.userSeek_(t.liveCurrentTime()) : this.userSeek_(this.player_.duration());
    else if (/^[0-9]$/.test(_e(e))) {
      e.preventDefault(), e.stopPropagation();
      var a = (_e.codes[_e(e)] - _e.codes[0]) * 10 / 100;
      t && t.isLive() ? this.userSeek_(t.seekableStart() + t.liveWindow() * a) : this.userSeek_(this.player_.duration() * a);
    } else _e.isEventKey(e, "PgDn") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(this.player_.currentTime() - xn * ll)) : _e.isEventKey(e, "PgUp") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(this.player_.currentTime() + xn * ll)) : s12.prototype.handleKeyDown.call(this, e);
  }, n.dispose = function() {
    this.disableInterval_(), this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.update), this.off(this.player_, ["playing"], this.enableIntervalHandler_), this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in ae && "visibilityState" in ae && this.off(ae, "visibilitychange", this.toggleVisibility_), s12.prototype.dispose.call(this);
  }, r;
})(no);
so.prototype.options_ = { children: ["loadProgressBar", "playProgressBar"], barName: "playProgressBar" };
!ht && !ir && so.prototype.options_.children.splice(1, 0, "mouseTimeDisplay");
te.registerComponent("SeekBar", so);
var $d = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.handleMouseMove = rr(Re(ye(t), t.handleMouseMove), Ot), t.throttledHandleMouseSeek = rr(Re(ye(t), t.handleMouseSeek), Ot), t.handleMouseUpHandler_ = function(a) {
      return t.handleMouseUp(a);
    }, t.handleMouseDownHandler_ = function(a) {
      return t.handleMouseDown(a);
    }, t.enable(), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-progress-control vjs-control" });
  }, n.handleMouseMove = function(e) {
    var t = this.getChild("seekBar");
    if (t) {
      var a = t.getChild("playProgressBar"), o = t.getChild("mouseTimeDisplay");
      if (!(!a && !o)) {
        var u = t.el(), l = Fi(u), c = sa(u, e).x;
        c = fa(c, 0, 1), o && o.update(l, c), a && a.update(l, t.getProgress());
      }
    }
  }, n.handleMouseSeek = function(e) {
    var t = this.getChild("seekBar");
    t && t.handleMouseMove(e);
  }, n.enabled = function() {
    return this.enabled_;
  }, n.disable = function() {
    if (this.children().forEach(function(t) {
      return t.disable && t.disable();
    }), !!this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.off(this.el_, "mousemove", this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass("disabled"), this.enabled_ = false, this.player_.scrubbing())) {
      var e = this.getChild("seekBar");
      this.player_.scrubbing(false), e.videoWasPlaying && Vt(this.player_.play());
    }
  }, n.enable = function() {
    this.children().forEach(function(e) {
      return e.enable && e.enable();
    }), !this.enabled() && (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = true);
  }, n.removeListenersAddedOnMousedownAndTouchstart = function() {
    var e = this.el_.ownerDocument;
    this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUpHandler_), this.off(e, "touchend", this.handleMouseUpHandler_);
  }, n.handleMouseDown = function(e) {
    var t = this.el_.ownerDocument, a = this.getChild("seekBar");
    a && a.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUpHandler_), this.on(t, "touchend", this.handleMouseUpHandler_);
  }, n.handleMouseUp = function(e) {
    var t = this.getChild("seekBar");
    t && t.handleMouseUp(e), this.removeListenersAddedOnMousedownAndTouchstart();
  }, r;
})(te);
$d.prototype.options_ = { children: ["seekBar"] };
te.registerComponent("ProgressControl", $d);
var Yd = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.on(i, ["enterpictureinpicture", "leavepictureinpicture"], function(a) {
      return t.handlePictureInPictureChange(a);
    }), t.on(i, ["disablepictureinpicturechanged", "loadedmetadata"], function(a) {
      return t.handlePictureInPictureEnabledChange(a);
    }), t.on(i, ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"], function() {
      var a = i.currentType().substring(0, 5) === "audio";
      a || i.audioPosterMode() || i.audioOnlyMode() ? (i.isInPictureInPicture() && i.exitPictureInPicture(), t.hide()) : t.show();
    }), t.disable(), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-picture-in-picture-control " + s12.prototype.buildCSSClass.call(this);
  }, n.handlePictureInPictureEnabledChange = function() {
    ae.pictureInPictureEnabled && this.player_.disablePictureInPicture() === false ? this.enable() : this.disable();
  }, n.handlePictureInPictureChange = function(e) {
    this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") : this.controlText("Picture-in-Picture"), this.handlePictureInPictureEnabledChange();
  }, n.handleClick = function(e) {
    this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture();
  }, r;
})(Pt);
Yd.prototype.controlText_ = "Picture-in-Picture";
te.registerComponent("PictureInPictureToggle", Yd);
var Qd = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.on(i, "fullscreenchange", function(a) {
      return t.handleFullscreenChange(a);
    }), ae[i.fsApi_.fullscreenEnabled] === false && t.disable(), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-fullscreen-control " + s12.prototype.buildCSSClass.call(this);
  }, n.handleFullscreenChange = function(e) {
    this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen");
  }, n.handleClick = function(e) {
    this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen();
  }, r;
})(Pt);
Qd.prototype.controlText_ = "Fullscreen";
te.registerComponent("FullscreenToggle", Qd);
var Rg = function(r, n) {
  n.tech_ && !n.tech_.featuresVolumeControl && r.addClass("vjs-hidden"), r.on(n, "loadstart", function() {
    n.tech_.featuresVolumeControl ? r.removeClass("vjs-hidden") : r.addClass("vjs-hidden");
  });
}, Mg = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = s12.prototype.createEl.call(this, "div", { className: "vjs-volume-level" });
    return e.appendChild(s12.prototype.createEl.call(this, "span", { className: "vjs-control-text" })), e;
  }, r;
})(te);
te.registerComponent("VolumeLevel", Mg);
var Ng = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.update = rr(Re(ye(t), t.update), Ot), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-volume-tooltip" }, { "aria-hidden": "true" });
  }, n.update = function(e, t, a, o) {
    if (!a) {
      var u = Jr(this.el_), l = Jr(this.player_.el()), c = e.width * t;
      if (!l || !u) return;
      var m = e.left - l.left + c, g = e.width - c + (l.right - e.right), _ = u.width / 2;
      m < _ ? _ += _ - m : g < _ && (_ = g), _ < 0 ? _ = 0 : _ > u.width && (_ = u.width), this.el_.style.right = "-" + _ + "px";
    }
    this.write(o + "%");
  }, n.write = function(e) {
    Lr(this.el_, e);
  }, n.updateVolume = function(e, t, a, o, u) {
    var l = this;
    this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", function() {
      l.update(e, t, a, o.toFixed(0)), u && u();
    });
  }, r;
})(te);
te.registerComponent("VolumeLevelTooltip", Ng);
var Jd = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.update = rr(Re(ye(t), t.update), Ot), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-mouse-display" });
  }, n.update = function(e, t, a) {
    var o = this, u = 100 * t;
    this.getChild("volumeLevelTooltip").updateVolume(e, t, a, u, function() {
      a ? o.el_.style.bottom = e.height * t + "px" : o.el_.style.left = e.width * t + "px";
    });
  }, r;
})(te);
Jd.prototype.options_ = { children: ["volumeLevelTooltip"] };
te.registerComponent("MouseVolumeLevelDisplay", Jd);
var ha = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.on("slideractive", function(a) {
      return t.updateLastVolume_(a);
    }), t.on(i, "volumechange", function(a) {
      return t.updateARIAAttributes(a);
    }), i.ready(function() {
      return t.updateARIAAttributes();
    }), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-volume-bar vjs-slider-bar" }, { "aria-label": this.localize("Volume Level"), "aria-live": "polite" });
  }, n.handleMouseDown = function(e) {
    Ri(e) && s12.prototype.handleMouseDown.call(this, e);
  }, n.handleMouseMove = function(e) {
    var t = this.getChild("mouseVolumeLevelDisplay");
    if (t) {
      var a = this.el(), o = Jr(a), u = this.vertical(), l = sa(a, e);
      l = u ? l.y : l.x, l = fa(l, 0, 1), t.update(o, l, u);
    }
    Ri(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)));
  }, n.checkMuted = function() {
    this.player_.muted() && this.player_.muted(false);
  }, n.getPercent = function() {
    return this.player_.muted() ? 0 : this.player_.volume();
  }, n.stepForward = function() {
    this.checkMuted(), this.player_.volume(this.player_.volume() + 0.1);
  }, n.stepBack = function() {
    this.checkMuted(), this.player_.volume(this.player_.volume() - 0.1);
  }, n.updateARIAAttributes = function(e) {
    var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
    this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%");
  }, n.volumeAsPercentage_ = function() {
    return Math.round(this.player_.volume() * 100);
  }, n.updateLastVolume_ = function() {
    var e = this, t = this.player_.volume();
    this.one("sliderinactive", function() {
      e.player_.volume() === 0 && e.player_.lastVolume_(t);
    });
  }, r;
})(no);
ha.prototype.options_ = { children: ["volumeLevel"], barName: "volumeLevel" };
!ht && !ir && ha.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay");
ha.prototype.playerEvent = "volumechange";
te.registerComponent("VolumeBar", ha);
var Zd = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return e === void 0 && (e = {}), e.vertical = e.vertical || false, (typeof e.volumeBar > "u" || Oi(e.volumeBar)) && (e.volumeBar = e.volumeBar || {}, e.volumeBar.vertical = e.vertical), t = s12.call(this, i, e) || this, Rg(ye(t), i), t.throttledHandleMouseMove = rr(Re(ye(t), t.handleMouseMove), Ot), t.handleMouseUpHandler_ = function(a) {
      return t.handleMouseUp(a);
    }, t.on("mousedown", function(a) {
      return t.handleMouseDown(a);
    }), t.on("touchstart", function(a) {
      return t.handleMouseDown(a);
    }), t.on("mousemove", function(a) {
      return t.handleMouseMove(a);
    }), t.on(t.volumeBar, ["focus", "slideractive"], function() {
      t.volumeBar.addClass("vjs-slider-active"), t.addClass("vjs-slider-active"), t.trigger("slideractive");
    }), t.on(t.volumeBar, ["blur", "sliderinactive"], function() {
      t.volumeBar.removeClass("vjs-slider-active"), t.removeClass("vjs-slider-active"), t.trigger("sliderinactive");
    }), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = "vjs-volume-horizontal";
    return this.options_.vertical && (e = "vjs-volume-vertical"), s12.prototype.createEl.call(this, "div", { className: "vjs-volume-control vjs-control " + e });
  }, n.handleMouseDown = function(e) {
    var t = this.el_.ownerDocument;
    this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUpHandler_), this.on(t, "touchend", this.handleMouseUpHandler_);
  }, n.handleMouseUp = function(e) {
    var t = this.el_.ownerDocument;
    this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUpHandler_), this.off(t, "touchend", this.handleMouseUpHandler_);
  }, n.handleMouseMove = function(e) {
    this.volumeBar.handleMouseMove(e);
  }, r;
})(te);
Zd.prototype.options_ = { children: ["volumeBar"] };
te.registerComponent("VolumeControl", Zd);
var Bg = function(r, n) {
  n.tech_ && !n.tech_.featuresMuteControl && r.addClass("vjs-hidden"), r.on(n, "loadstart", function() {
    n.tech_.featuresMuteControl ? r.removeClass("vjs-hidden") : r.addClass("vjs-hidden");
  });
}, ec = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, Bg(ye(t), i), t.on(i, ["loadstart", "volumechange"], function(a) {
      return t.update(a);
    }), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-mute-control " + s12.prototype.buildCSSClass.call(this);
  }, n.handleClick = function(e) {
    var t = this.player_.volume(), a = this.player_.lastVolume_();
    if (t === 0) {
      var o = a < 0.1 ? 0.1 : a;
      this.player_.volume(o), this.player_.muted(false);
    } else this.player_.muted(!this.player_.muted());
  }, n.update = function(e) {
    this.updateIcon_(), this.updateControlText_();
  }, n.updateIcon_ = function() {
    var e = this.player_.volume(), t = 3;
    ht && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), e === 0 || this.player_.muted() ? t = 0 : e < 0.33 ? t = 1 : e < 0.67 && (t = 2);
    for (var a = 0; a < 4; a++) qi(this.el_, "vjs-vol-" + a);
    Zt(this.el_, "vjs-vol-" + t);
  }, n.updateControlText_ = function() {
    var e = this.player_.muted() || this.player_.volume() === 0, t = e ? "Unmute" : "Mute";
    this.controlText() !== t && this.controlText(t);
  }, r;
})(Pt);
ec.prototype.controlText_ = "Mute";
te.registerComponent("MuteToggle", ec);
var tc = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return e === void 0 && (e = {}), typeof e.inline < "u" ? e.inline = e.inline : e.inline = true, (typeof e.volumeControl > "u" || Oi(e.volumeControl)) && (e.volumeControl = e.volumeControl || {}, e.volumeControl.vertical = !e.inline), t = s12.call(this, i, e) || this, t.handleKeyPressHandler_ = function(a) {
      return t.handleKeyPress(a);
    }, t.on(i, ["loadstart"], function(a) {
      return t.volumePanelState_(a);
    }), t.on(t.muteToggle, "keyup", function(a) {
      return t.handleKeyPress(a);
    }), t.on(t.volumeControl, "keyup", function(a) {
      return t.handleVolumeControlKeyUp(a);
    }), t.on("keydown", function(a) {
      return t.handleKeyPress(a);
    }), t.on("mouseover", function(a) {
      return t.handleMouseOver(a);
    }), t.on("mouseout", function(a) {
      return t.handleMouseOut(a);
    }), t.on(t.volumeControl, ["slideractive"], t.sliderActive_), t.on(t.volumeControl, ["sliderinactive"], t.sliderInactive_), t;
  }
  var n = r.prototype;
  return n.sliderActive_ = function() {
    this.addClass("vjs-slider-active");
  }, n.sliderInactive_ = function() {
    this.removeClass("vjs-slider-active");
  }, n.volumePanelState_ = function() {
    this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only");
  }, n.createEl = function() {
    var e = "vjs-volume-panel-horizontal";
    return this.options_.inline || (e = "vjs-volume-panel-vertical"), s12.prototype.createEl.call(this, "div", { className: "vjs-volume-panel vjs-control " + e });
  }, n.dispose = function() {
    this.handleMouseOut(), s12.prototype.dispose.call(this);
  }, n.handleVolumeControlKeyUp = function(e) {
    _e.isEventKey(e, "Esc") && this.muteToggle.focus();
  }, n.handleMouseOver = function(e) {
    this.addClass("vjs-hover"), bt(ae, "keyup", this.handleKeyPressHandler_);
  }, n.handleMouseOut = function(e) {
    this.removeClass("vjs-hover"), at(ae, "keyup", this.handleKeyPressHandler_);
  }, n.handleKeyPress = function(e) {
    _e.isEventKey(e, "Esc") && this.handleMouseOut();
  }, r;
})(te);
tc.prototype.options_ = { children: ["muteToggle", "volumeControl"] };
te.registerComponent("VolumePanel", tc);
var rc = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, e && (t.menuButton_ = e.menuButton), t.focusedChild_ = -1, t.on("keydown", function(a) {
      return t.handleKeyDown(a);
    }), t.boundHandleBlur_ = function(a) {
      return t.handleBlur(a);
    }, t.boundHandleTapClick_ = function(a) {
      return t.handleTapClick(a);
    }, t;
  }
  var n = r.prototype;
  return n.addEventListenerForItem = function(e) {
    e instanceof te && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_));
  }, n.removeEventListenerForItem = function(e) {
    e instanceof te && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_));
  }, n.removeChild = function(e) {
    typeof e == "string" && (e = this.getChild(e)), this.removeEventListenerForItem(e), s12.prototype.removeChild.call(this, e);
  }, n.addItem = function(e) {
    var t = this.addChild(e);
    t && this.addEventListenerForItem(t);
  }, n.createEl = function() {
    var e = this.options_.contentElType || "ul";
    this.contentEl_ = Ee(e, { className: "vjs-menu-content" }), this.contentEl_.setAttribute("role", "menu");
    var t = s12.prototype.createEl.call(this, "div", { append: this.contentEl_, className: "vjs-menu" });
    return t.appendChild(this.contentEl_), bt(t, "click", function(a) {
      a.preventDefault(), a.stopImmediatePropagation();
    }), t;
  }, n.dispose = function() {
    this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, s12.prototype.dispose.call(this);
  }, n.handleBlur = function(e) {
    var t = e.relatedTarget || ae.activeElement;
    if (!this.children().some(function(o) {
      return o.el() === t;
    })) {
      var a = this.menuButton_;
      a && a.buttonPressed_ && t !== a.el().firstChild && a.unpressButton();
    }
  }, n.handleTapClick = function(e) {
    if (this.menuButton_) {
      this.menuButton_.unpressButton();
      var t = this.children();
      if (!Array.isArray(t)) return;
      var a = t.filter(function(o) {
        return o.el() === e.target;
      })[0];
      if (!a) return;
      a.name() !== "CaptionSettingsMenuItem" && this.menuButton_.focus();
    }
  }, n.handleKeyDown = function(e) {
    _e.isEventKey(e, "Left") || _e.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (_e.isEventKey(e, "Right") || _e.isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack());
  }, n.stepForward = function() {
    var e = 0;
    this.focusedChild_ !== void 0 && (e = this.focusedChild_ + 1), this.focus(e);
  }, n.stepBack = function() {
    var e = 0;
    this.focusedChild_ !== void 0 && (e = this.focusedChild_ - 1), this.focus(e);
  }, n.focus = function(e) {
    e === void 0 && (e = 0);
    var t = this.children().slice(), a = t.length && t[0].hasClass("vjs-menu-title");
    a && t.shift(), t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus());
  }, r;
})(te);
te.registerComponent("Menu", rc);
var oo = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    e === void 0 && (e = {}), t = s12.call(this, i, e) || this, t.menuButton_ = new Pt(i, e), t.menuButton_.controlText(t.controlText_), t.menuButton_.el_.setAttribute("aria-haspopup", "true");
    var a = Pt.prototype.buildCSSClass();
    t.menuButton_.el_.className = t.buildCSSClass() + " " + a, t.menuButton_.removeClass("vjs-control"), t.addChild(t.menuButton_), t.update(), t.enabled_ = true;
    var o = function(l) {
      return t.handleClick(l);
    };
    return t.handleMenuKeyUp_ = function(u) {
      return t.handleMenuKeyUp(u);
    }, t.on(t.menuButton_, "tap", o), t.on(t.menuButton_, "click", o), t.on(t.menuButton_, "keydown", function(u) {
      return t.handleKeyDown(u);
    }), t.on(t.menuButton_, "mouseenter", function() {
      t.addClass("vjs-hover"), t.menu.show(), bt(ae, "keyup", t.handleMenuKeyUp_);
    }), t.on("mouseleave", function(u) {
      return t.handleMouseLeave(u);
    }), t.on("keydown", function(u) {
      return t.handleSubmenuKeyDown(u);
    }), t;
  }
  var n = r.prototype;
  return n.update = function() {
    var e = this.createMenu();
    this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = false, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? (this.hide(), this.menu.contentEl_.removeAttribute("role")) : (this.show(), this.menu.contentEl_.setAttribute("role", "menu"));
  }, n.createMenu = function() {
    var e = new rc(this.player_, { menuButton: this });
    if (this.hideThreshold_ = 0, this.options_.title) {
      var t = Ee("li", { className: "vjs-menu-title", textContent: Ge(this.options_.title), tabIndex: -1 }), a = new te(this.player_, { el: t });
      e.addItem(a);
    }
    if (this.items = this.createItems(), this.items) for (var o = 0; o < this.items.length; o++) e.addItem(this.items[o]);
    return e;
  }, n.createItems = function() {
  }, n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: this.buildWrapperCSSClass() }, {});
  }, n.buildWrapperCSSClass = function() {
    var e = "vjs-menu-button";
    this.options_.inline === true ? e += "-inline" : e += "-popup";
    var t = Pt.prototype.buildCSSClass();
    return "vjs-menu-button " + e + " " + t + " " + s12.prototype.buildCSSClass.call(this);
  }, n.buildCSSClass = function() {
    var e = "vjs-menu-button";
    return this.options_.inline === true ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + s12.prototype.buildCSSClass.call(this);
  }, n.controlText = function(e, t) {
    return t === void 0 && (t = this.menuButton_.el()), this.menuButton_.controlText(e, t);
  }, n.dispose = function() {
    this.handleMouseLeave(), s12.prototype.dispose.call(this);
  }, n.handleClick = function(e) {
    this.buttonPressed_ ? this.unpressButton() : this.pressButton();
  }, n.handleMouseLeave = function(e) {
    this.removeClass("vjs-hover"), at(ae, "keyup", this.handleMenuKeyUp_);
  }, n.focus = function() {
    this.menuButton_.focus();
  }, n.blur = function() {
    this.menuButton_.blur();
  }, n.handleKeyDown = function(e) {
    _e.isEventKey(e, "Esc") || _e.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), _e.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : (_e.isEventKey(e, "Up") || _e.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(), this.pressButton()));
  }, n.handleMenuKeyUp = function(e) {
    (_e.isEventKey(e, "Esc") || _e.isEventKey(e, "Tab")) && this.removeClass("vjs-hover");
  }, n.handleSubmenuKeyPress = function(e) {
    this.handleSubmenuKeyDown(e);
  }, n.handleSubmenuKeyDown = function(e) {
    (_e.isEventKey(e, "Esc") || _e.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), _e.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()));
  }, n.pressButton = function() {
    if (this.enabled_) {
      if (this.buttonPressed_ = true, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), ht && vd()) return;
      this.menu.focus();
    }
  }, n.unpressButton = function() {
    this.enabled_ && (this.buttonPressed_ = false, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"));
  }, n.disable = function() {
    this.unpressButton(), this.enabled_ = false, this.addClass("vjs-disabled"), this.menuButton_.disable();
  }, n.enable = function() {
    this.enabled_ = true, this.removeClass("vjs-disabled"), this.menuButton_.enable();
  }, r;
})(te);
te.registerComponent("MenuButton", oo);
var uo = (function(s12) {
  oe(r, s12);
  function r(n, i) {
    var e, t = i.tracks;
    if (e = s12.call(this, n, i) || this, e.items.length <= 1 && e.hide(), !t) return ye(e);
    var a = Re(ye(e), e.update);
    return t.addEventListener("removetrack", a), t.addEventListener("addtrack", a), t.addEventListener("labelchange", a), e.player_.on("ready", a), e.player_.on("dispose", function() {
      t.removeEventListener("removetrack", a), t.removeEventListener("addtrack", a), t.removeEventListener("labelchange", a);
    }), e;
  }
  return r;
})(oo);
te.registerComponent("TrackButton", uo);
var Ug = ["Tab", "Esc", "Up", "Down", "Right", "Left"], ji = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.selectable = e.selectable, t.isSelected_ = e.selected || false, t.multiSelectable = e.multiSelectable, t.selected(t.isSelected_), t.selectable ? t.multiSelectable ? t.el_.setAttribute("role", "menuitemcheckbox") : t.el_.setAttribute("role", "menuitemradio") : t.el_.setAttribute("role", "menuitem"), t;
  }
  var n = r.prototype;
  return n.createEl = function(e, t, a) {
    this.nonIconControl = true;
    var o = s12.prototype.createEl.call(this, "li", Ue({ className: "vjs-menu-item", tabIndex: -1 }, t), a);
    return o.replaceChild(Ee("span", { className: "vjs-menu-item-text", textContent: this.localize(this.options_.label) }), o.querySelector(".vjs-icon-placeholder")), o;
  }, n.handleKeyDown = function(e) {
    Ug.some(function(t) {
      return _e.isEventKey(e, t);
    }) || s12.prototype.handleKeyDown.call(this, e);
  }, n.handleClick = function(e) {
    this.selected(true);
  }, n.selected = function(e) {
    this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = true) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = false));
  }, r;
})(ca);
te.registerComponent("MenuItem", ji);
var Hi = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t, a = e.track, o = i.textTracks();
    e.label = a.label || a.language || "Unknown", e.selected = a.mode === "showing", t = s12.call(this, i, e) || this, t.track = a, t.kinds = (e.kinds || [e.kind || t.track.kind]).filter(Boolean);
    var u = function() {
      for (var g = arguments.length, _ = new Array(g), C = 0; C < g; C++) _[C] = arguments[C];
      t.handleTracksChange.apply(ye(t), _);
    }, l = function() {
      for (var g = arguments.length, _ = new Array(g), C = 0; C < g; C++) _[C] = arguments[C];
      t.handleSelectedLanguageChange.apply(ye(t), _);
    };
    if (i.on(["loadstart", "texttrackchange"], u), o.addEventListener("change", u), o.addEventListener("selectedlanguagechange", l), t.on("dispose", function() {
      i.off(["loadstart", "texttrackchange"], u), o.removeEventListener("change", u), o.removeEventListener("selectedlanguagechange", l);
    }), o.onchange === void 0) {
      var c;
      t.on(["tap", "click"], function() {
        if (typeof P.Event != "object") try {
          c = new P.Event("change");
        } catch {
        }
        c || (c = ae.createEvent("Event"), c.initEvent("change", true, true)), o.dispatchEvent(c);
      });
    }
    return t.handleTracksChange(), t;
  }
  var n = r.prototype;
  return n.handleClick = function(e) {
    var t = this.track, a = this.player_.textTracks();
    if (s12.prototype.handleClick.call(this, e), !!a) for (var o = 0; o < a.length; o++) {
      var u = a[o];
      this.kinds.indexOf(u.kind) !== -1 && (u === t ? u.mode !== "showing" && (u.mode = "showing") : u.mode !== "disabled" && (u.mode = "disabled"));
    }
  }, n.handleTracksChange = function(e) {
    var t = this.track.mode === "showing";
    t !== this.isSelected_ && this.selected(t);
  }, n.handleSelectedLanguageChange = function(e) {
    if (this.track.mode === "showing") {
      var t = this.player_.cache_.selectedLanguage;
      if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
      this.player_.cache_.selectedLanguage = { enabled: true, language: this.track.language, kind: this.track.kind };
    }
  }, n.dispose = function() {
    this.track = null, s12.prototype.dispose.call(this);
  }, r;
})(ji);
te.registerComponent("TextTrackMenuItem", Hi);
var ic = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    return e.track = { player: i, kind: e.kind, kinds: e.kinds, default: false, mode: "disabled" }, e.kinds || (e.kinds = [e.kind]), e.label ? e.track.label = e.label : e.track.label = e.kinds.join(" and ") + " off", e.selectable = true, e.multiSelectable = false, s12.call(this, i, e) || this;
  }
  var n = r.prototype;
  return n.handleTracksChange = function(e) {
    for (var t = this.player().textTracks(), a = true, o = 0, u = t.length; o < u; o++) {
      var l = t[o];
      if (this.options_.kinds.indexOf(l.kind) > -1 && l.mode === "showing") {
        a = false;
        break;
      }
    }
    a !== this.isSelected_ && this.selected(a);
  }, n.handleSelectedLanguageChange = function(e) {
    for (var t = this.player().textTracks(), a = true, o = 0, u = t.length; o < u; o++) {
      var l = t[o];
      if (["captions", "descriptions", "subtitles"].indexOf(l.kind) > -1 && l.mode === "showing") {
        a = false;
        break;
      }
    }
    a && (this.player_.cache_.selectedLanguage = { enabled: false });
  }, r;
})(Hi);
te.registerComponent("OffTextTrackMenuItem", ic);
var ui = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    return e === void 0 && (e = {}), e.tracks = i.textTracks(), s12.call(this, i, e) || this;
  }
  var n = r.prototype;
  return n.createItems = function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = Hi);
    var a;
    this.label_ && (a = this.label_ + " off"), e.push(new ic(this.player_, { kinds: this.kinds_, kind: this.kind_, label: a })), this.hideThreshold_ += 1;
    var o = this.player_.textTracks();
    Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
    for (var u = 0; u < o.length; u++) {
      var l = o[u];
      if (this.kinds_.indexOf(l.kind) > -1) {
        var c = new t(this.player_, { track: l, kinds: this.kinds_, kind: this.kind_, selectable: true, multiSelectable: false });
        c.addClass("vjs-" + l.kind + "-menu-item"), e.push(c);
      }
    }
    return e;
  }, r;
})(uo);
te.registerComponent("TextTrackButton", ui);
var nc = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t, a = e.track, o = e.cue, u = i.currentTime();
    return e.selectable = true, e.multiSelectable = false, e.label = o.text, e.selected = o.startTime <= u && u < o.endTime, t = s12.call(this, i, e) || this, t.track = a, t.cue = o, t;
  }
  var n = r.prototype;
  return n.handleClick = function(e) {
    s12.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime);
  }, r;
})(ji);
te.registerComponent("ChaptersTrackMenuItem", nc);
var lo = (function(s12) {
  oe(r, s12);
  function r(i, e, t) {
    var a;
    return a = s12.call(this, i, e, t) || this, a.selectCurrentItem_ = function() {
      a.items.forEach(function(o) {
        o.selected(a.track_.activeCues[0] === o.cue);
      });
    }, a;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-chapters-button " + s12.prototype.buildCSSClass.call(this);
  }, n.buildWrapperCSSClass = function() {
    return "vjs-chapters-button " + s12.prototype.buildWrapperCSSClass.call(this);
  }, n.update = function(e) {
    if (!(e && e.track && e.track.kind !== "chapters")) {
      var t = this.findChaptersTrack();
      t !== this.track_ ? (this.setTrack(t), s12.prototype.update.call(this)) : (!this.items || t && t.cues && t.cues.length !== this.items.length) && s12.prototype.update.call(this);
    }
  }, n.setTrack = function(e) {
    if (this.track_ !== e) {
      if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
        var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
        t && t.removeEventListener("load", this.updateHandler_), this.track_.removeEventListener("cuechange", this.selectCurrentItem_), this.track_ = null;
      }
      if (this.track_ = e, this.track_) {
        this.track_.mode = "hidden";
        var a = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
        a && a.addEventListener("load", this.updateHandler_), this.track_.addEventListener("cuechange", this.selectCurrentItem_);
      }
    }
  }, n.findChaptersTrack = function() {
    for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
      var a = e[t];
      if (a.kind === this.kind_) return a;
    }
  }, n.getMenuCaption = function() {
    return this.track_ && this.track_.label ? this.track_.label : this.localize(Ge(this.kind_));
  }, n.createMenu = function() {
    return this.options_.title = this.getMenuCaption(), s12.prototype.createMenu.call(this);
  }, n.createItems = function() {
    var e = [];
    if (!this.track_) return e;
    var t = this.track_.cues;
    if (!t) return e;
    for (var a = 0, o = t.length; a < o; a++) {
      var u = t[a], l = new nc(this.player_, { track: this.track_, cue: u });
      e.push(l);
    }
    return e;
  }, r;
})(ui);
lo.prototype.kind_ = "chapters";
lo.prototype.controlText_ = "Chapters";
te.registerComponent("ChaptersButton", lo);
var co = (function(s12) {
  oe(r, s12);
  function r(i, e, t) {
    var a;
    a = s12.call(this, i, e, t) || this;
    var o = i.textTracks(), u = Re(ye(a), a.handleTracksChange);
    return o.addEventListener("change", u), a.on("dispose", function() {
      o.removeEventListener("change", u);
    }), a;
  }
  var n = r.prototype;
  return n.handleTracksChange = function(e) {
    for (var t = this.player().textTracks(), a = false, o = 0, u = t.length; o < u; o++) {
      var l = t[o];
      if (l.kind !== this.kind_ && l.mode === "showing") {
        a = true;
        break;
      }
    }
    a ? this.disable() : this.enable();
  }, n.buildCSSClass = function() {
    return "vjs-descriptions-button " + s12.prototype.buildCSSClass.call(this);
  }, n.buildWrapperCSSClass = function() {
    return "vjs-descriptions-button " + s12.prototype.buildWrapperCSSClass.call(this);
  }, r;
})(ui);
co.prototype.kind_ = "descriptions";
co.prototype.controlText_ = "Descriptions";
te.registerComponent("DescriptionsButton", co);
var fo = (function(s12) {
  oe(r, s12);
  function r(i, e, t) {
    return s12.call(this, i, e, t) || this;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-subtitles-button " + s12.prototype.buildCSSClass.call(this);
  }, n.buildWrapperCSSClass = function() {
    return "vjs-subtitles-button " + s12.prototype.buildWrapperCSSClass.call(this);
  }, r;
})(ui);
fo.prototype.kind_ = "subtitles";
fo.prototype.controlText_ = "Subtitles";
te.registerComponent("SubtitlesButton", fo);
var ho = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return e.track = { player: i, kind: e.kind, label: e.kind + " settings", selectable: false, default: false, mode: "disabled" }, e.selectable = false, e.name = "CaptionSettingsMenuItem", t = s12.call(this, i, e) || this, t.addClass("vjs-texttrack-settings"), t.controlText(", opens " + e.kind + " settings dialog"), t;
  }
  var n = r.prototype;
  return n.handleClick = function(e) {
    this.player().getChild("textTrackSettings").open();
  }, r;
})(Hi);
te.registerComponent("CaptionSettingsMenuItem", ho);
var po = (function(s12) {
  oe(r, s12);
  function r(i, e, t) {
    return s12.call(this, i, e, t) || this;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-captions-button " + s12.prototype.buildCSSClass.call(this);
  }, n.buildWrapperCSSClass = function() {
    return "vjs-captions-button " + s12.prototype.buildWrapperCSSClass.call(this);
  }, n.createItems = function() {
    var e = [];
    return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild("textTrackSettings") && (e.push(new ho(this.player_, { kind: this.kind_ })), this.hideThreshold_ += 1), s12.prototype.createItems.call(this, e);
  }, r;
})(ui);
po.prototype.kind_ = "captions";
po.prototype.controlText_ = "Captions";
te.registerComponent("CaptionsButton", po);
var ac = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.createEl = function(e, t, a) {
    var o = s12.prototype.createEl.call(this, e, t, a), u = o.querySelector(".vjs-menu-item-text");
    return this.options_.track.kind === "captions" && (u.appendChild(Ee("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": true })), u.appendChild(Ee("span", { className: "vjs-control-text", textContent: " " + this.localize("Captions") }))), o;
  }, r;
})(Hi);
te.registerComponent("SubsCapsMenuItem", ac);
var mo = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return e === void 0 && (e = {}), t = s12.call(this, i, e) || this, t.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(t.player_.language_) > -1 && (t.label_ = "captions"), t.menuButton_.controlText(Ge(t.label_)), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-subs-caps-button " + s12.prototype.buildCSSClass.call(this);
  }, n.buildWrapperCSSClass = function() {
    return "vjs-subs-caps-button " + s12.prototype.buildWrapperCSSClass.call(this);
  }, n.createItems = function() {
    var e = [];
    return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild("textTrackSettings") && (e.push(new ho(this.player_, { kind: this.label_ })), this.hideThreshold_ += 1), e = s12.prototype.createItems.call(this, e, ac), e;
  }, r;
})(ui);
mo.prototype.kinds_ = ["captions", "subtitles"];
mo.prototype.controlText_ = "Subtitles";
te.registerComponent("SubsCapsButton", mo);
var sc = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t, a = e.track, o = i.audioTracks();
    e.label = a.label || a.language || "Unknown", e.selected = a.enabled, t = s12.call(this, i, e) || this, t.track = a, t.addClass("vjs-" + a.kind + "-menu-item");
    var u = function() {
      for (var c = arguments.length, m = new Array(c), g = 0; g < c; g++) m[g] = arguments[g];
      t.handleTracksChange.apply(ye(t), m);
    };
    return o.addEventListener("change", u), t.on("dispose", function() {
      o.removeEventListener("change", u);
    }), t;
  }
  var n = r.prototype;
  return n.createEl = function(e, t, a) {
    var o = s12.prototype.createEl.call(this, e, t, a), u = o.querySelector(".vjs-menu-item-text");
    return this.options_.track.kind === "main-desc" && (u.appendChild(Ee("span", { className: "vjs-icon-placeholder" }, { "aria-hidden": true })), u.appendChild(Ee("span", { className: "vjs-control-text", textContent: " " + this.localize("Descriptions") }))), o;
  }, n.handleClick = function(e) {
    if (s12.prototype.handleClick.call(this, e), this.track.enabled = true, this.player_.tech_.featuresNativeAudioTracks) for (var t = this.player_.audioTracks(), a = 0; a < t.length; a++) {
      var o = t[a];
      o !== this.track && (o.enabled = o === this.track);
    }
  }, n.handleTracksChange = function(e) {
    this.selected(this.track.enabled);
  }, r;
})(ji);
te.registerComponent("AudioTrackMenuItem", sc);
var oc = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    return e === void 0 && (e = {}), e.tracks = i.audioTracks(), s12.call(this, i, e) || this;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-audio-button " + s12.prototype.buildCSSClass.call(this);
  }, n.buildWrapperCSSClass = function() {
    return "vjs-audio-button " + s12.prototype.buildWrapperCSSClass.call(this);
  }, n.createItems = function(e) {
    e === void 0 && (e = []), this.hideThreshold_ = 1;
    for (var t = this.player_.audioTracks(), a = 0; a < t.length; a++) {
      var o = t[a];
      e.push(new sc(this.player_, { track: o, selectable: true, multiSelectable: false }));
    }
    return e;
  }, r;
})(uo);
oc.prototype.controlText_ = "Audio Track";
te.registerComponent("AudioTrackButton", oc);
var go = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t, a = e.rate, o = parseFloat(a, 10);
    return e.label = a, e.selected = o === i.playbackRate(), e.selectable = true, e.multiSelectable = false, t = s12.call(this, i, e) || this, t.label = a, t.rate = o, t.on(i, "ratechange", function(u) {
      return t.update(u);
    }), t;
  }
  var n = r.prototype;
  return n.handleClick = function(e) {
    s12.prototype.handleClick.call(this), this.player().playbackRate(this.rate);
  }, n.update = function(e) {
    this.selected(this.player().playbackRate() === this.rate);
  }, r;
})(ji);
go.prototype.contentElType = "button";
te.registerComponent("PlaybackRateMenuItem", go);
var uc = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.menuButton_.el_.setAttribute("aria-describedby", t.labelElId_), t.updateVisibility(), t.updateLabel(), t.on(i, "loadstart", function(a) {
      return t.updateVisibility(a);
    }), t.on(i, "ratechange", function(a) {
      return t.updateLabel(a);
    }), t.on(i, "playbackrateschange", function(a) {
      return t.handlePlaybackRateschange(a);
    }), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    var e = s12.prototype.createEl.call(this);
    return this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_, this.labelEl_ = Ee("div", { className: "vjs-playback-rate-value", id: this.labelElId_, textContent: "1x" }), e.appendChild(this.labelEl_), e;
  }, n.dispose = function() {
    this.labelEl_ = null, s12.prototype.dispose.call(this);
  }, n.buildCSSClass = function() {
    return "vjs-playback-rate " + s12.prototype.buildCSSClass.call(this);
  }, n.buildWrapperCSSClass = function() {
    return "vjs-playback-rate " + s12.prototype.buildWrapperCSSClass.call(this);
  }, n.createItems = function() {
    for (var e = this.playbackRates(), t = [], a = e.length - 1; a >= 0; a--) t.push(new go(this.player(), { rate: e[a] + "x" }));
    return t;
  }, n.updateARIAAttributes = function() {
    this.el().setAttribute("aria-valuenow", this.player().playbackRate());
  }, n.handleClick = function(e) {
    var t = this.player().playbackRate(), a = this.playbackRates(), o = a.indexOf(t), u = (o + 1) % a.length;
    this.player().playbackRate(a[u]);
  }, n.handlePlaybackRateschange = function(e) {
    this.update();
  }, n.playbackRates = function() {
    var e = this.player();
    return e.playbackRates && e.playbackRates() || [];
  }, n.playbackRateSupported = function() {
    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0;
  }, n.updateVisibility = function(e) {
    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden");
  }, n.updateLabel = function(e) {
    this.playbackRateSupported() && (this.labelEl_.textContent = this.player().playbackRate() + "x");
  }, r;
})(oo);
uc.prototype.controlText_ = "Playback Rate";
te.registerComponent("PlaybackRateMenuButton", uc);
var lc = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-spacer " + s12.prototype.buildCSSClass.call(this);
  }, n.createEl = function(e, t, a) {
    return e === void 0 && (e = "div"), t === void 0 && (t = {}), a === void 0 && (a = {}), t.className || (t.className = this.buildCSSClass()), s12.prototype.createEl.call(this, e, t, a);
  }, r;
})(te);
te.registerComponent("Spacer", lc);
var qg = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-custom-control-spacer " + s12.prototype.buildCSSClass.call(this);
  }, n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: this.buildCSSClass(), textContent: "\xA0" });
  }, r;
})(lc);
te.registerComponent("CustomControlSpacer", qg);
var Un = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.apply(this, arguments) || this;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "div", { className: "vjs-control-bar", dir: "ltr" });
  }, r;
})(te);
Un.prototype.options_ = { children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"] };
"exitPictureInPicture" in ae && Un.prototype.options_.children.splice(Un.prototype.options_.children.length - 1, 0, "pictureInPictureToggle");
te.registerComponent("ControlBar", Un);
var dc = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return t = s12.call(this, i, e) || this, t.on(i, "error", function(a) {
      return t.open(a);
    }), t;
  }
  var n = r.prototype;
  return n.buildCSSClass = function() {
    return "vjs-error-display " + s12.prototype.buildCSSClass.call(this);
  }, n.content = function() {
    var e = this.player().error();
    return e ? this.localize(e.message) : "";
  }, r;
})(ai);
dc.prototype.options_ = It({}, ai.prototype.options_, { pauseOnOpen: false, fillAlways: true, temporary: false, uncloseable: true });
te.registerComponent("ErrorDisplay", dc);
var Za = "vjs-text-track-settings", dl = ["#000", "Black"], cl = ["#00F", "Blue"], fl = ["#0FF", "Cyan"], hl = ["#0F0", "Green"], pl = ["#F0F", "Magenta"], ml = ["#F00", "Red"], gl = ["#FFF", "White"], vl = ["#FF0", "Yellow"], es = ["1", "Opaque"], ts = ["0.5", "Semi-Transparent"], yl = ["0", "Transparent"], Dr = { backgroundColor: { selector: ".vjs-bg-color > select", id: "captions-background-color-%s", label: "Color", options: [dl, gl, ml, hl, cl, vl, pl, fl] }, backgroundOpacity: { selector: ".vjs-bg-opacity > select", id: "captions-background-opacity-%s", label: "Transparency", options: [es, ts, yl] }, color: { selector: ".vjs-fg-color > select", id: "captions-foreground-color-%s", label: "Color", options: [gl, dl, ml, hl, cl, vl, pl, fl] }, edgeStyle: { selector: ".vjs-edge-style > select", id: "%s", label: "Text Edge Style", options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]] }, fontFamily: { selector: ".vjs-font-family > select", id: "captions-font-family-%s", label: "Font Family", options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]] }, fontPercent: { selector: ".vjs-font-percent > select", id: "captions-font-size-%s", label: "Font Size", options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]], default: 2, parser: function(r) {
  return r === "1.00" ? null : Number(r);
} }, textOpacity: { selector: ".vjs-text-opacity > select", id: "captions-foreground-opacity-%s", label: "Transparency", options: [es, ts] }, windowColor: { selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color" }, windowOpacity: { selector: ".vjs-window-opacity > select", id: "captions-window-opacity-%s", label: "Transparency", options: [yl, ts, es] } };
Dr.windowColor.options = Dr.backgroundColor.options;
function cc(s12, r) {
  if (r && (s12 = r(s12)), s12 && s12 !== "none") return s12;
}
function Vg(s12, r) {
  var n = s12.options[s12.options.selectedIndex].value;
  return cc(n, r);
}
function jg(s12, r, n) {
  if (r) {
    for (var i = 0; i < s12.options.length; i++) if (cc(s12.options[i].value, n) === r) {
      s12.selectedIndex = i;
      break;
    }
  }
}
var Hg = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return e.temporary = false, t = s12.call(this, i, e) || this, t.updateDisplay = t.updateDisplay.bind(ye(t)), t.fill(), t.hasBeenOpened_ = t.hasBeenFilled_ = true, t.endDialog = Ee("p", { className: "vjs-control-text", textContent: t.localize("End of dialog window.") }), t.el().appendChild(t.endDialog), t.setDefaults(), e.persistTextTrackSettings === void 0 && (t.options_.persistTextTrackSettings = t.options_.playerOptions.persistTextTrackSettings), t.on(t.$(".vjs-done-button"), "click", function() {
      t.saveSettings(), t.close();
    }), t.on(t.$(".vjs-default-button"), "click", function() {
      t.setDefaults(), t.updateDisplay();
    }), Wr(Dr, function(a) {
      t.on(t.$(a.selector), "change", t.updateDisplay);
    }), t.options_.persistTextTrackSettings && t.restoreSettings(), t;
  }
  var n = r.prototype;
  return n.dispose = function() {
    this.endDialog = null, s12.prototype.dispose.call(this);
  }, n.createElSelect_ = function(e, t, a) {
    var o = this;
    t === void 0 && (t = ""), a === void 0 && (a = "label");
    var u = Dr[e], l = u.id.replace("%s", this.id_), c = [t, l].join(" ").trim();
    return ["<" + a + ' id="' + l + '" class="' + (a === "label" ? "vjs-label" : "") + '">', this.localize(u.label), "</" + a + ">", '<select aria-labelledby="' + c + '">'].concat(u.options.map(function(m) {
      var g = l + "-" + m[1].replace(/\W+/g, "");
      return ['<option id="' + g + '" value="' + m[0] + '" ', 'aria-labelledby="' + c + " " + g + '">', o.localize(m[1]), "</option>"].join("");
    })).concat("</select>").join("");
  }, n.createElFgColor_ = function() {
    var e = "captions-text-legend-" + this.id_;
    return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("");
  }, n.createElBgColor_ = function() {
    var e = "captions-background-" + this.id_;
    return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("");
  }, n.createElWinColor_ = function() {
    var e = "captions-window-" + this.id_;
    return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("");
  }, n.createElColors_ = function() {
    return Ee("div", { className: "vjs-track-settings-colors", innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("") });
  }, n.createElFont_ = function() {
    return Ee("div", { className: "vjs-track-settings-font", innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("") });
  }, n.createElControls_ = function() {
    var e = this.localize("restore all settings to the default values");
    return Ee("div", { className: "vjs-track-settings-controls", innerHTML: ['<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("") });
  }, n.content = function() {
    return [this.createElColors_(), this.createElFont_(), this.createElControls_()];
  }, n.label = function() {
    return this.localize("Caption Settings Dialog");
  }, n.description = function() {
    return this.localize("Beginning of dialog window. Escape will cancel and close the window.");
  }, n.buildCSSClass = function() {
    return s12.prototype.buildCSSClass.call(this) + " vjs-text-track-settings";
  }, n.getValues = function() {
    var e = this;
    return Im(Dr, function(t, a, o) {
      var u = Vg(e.$(a.selector), a.parser);
      return u !== void 0 && (t[o] = u), t;
    }, {});
  }, n.setValues = function(e) {
    var t = this;
    Wr(Dr, function(a, o) {
      jg(t.$(a.selector), e[o], a.parser);
    });
  }, n.setDefaults = function() {
    var e = this;
    Wr(Dr, function(t) {
      var a = t.hasOwnProperty("default") ? t.default : 0;
      e.$(t.selector).selectedIndex = a;
    });
  }, n.restoreSettings = function() {
    var e;
    try {
      e = JSON.parse(P.localStorage.getItem(Za));
    } catch (t) {
      Te.warn(t);
    }
    e && this.setValues(e);
  }, n.saveSettings = function() {
    if (this.options_.persistTextTrackSettings) {
      var e = this.getValues();
      try {
        Object.keys(e).length ? P.localStorage.setItem(Za, JSON.stringify(e)) : P.localStorage.removeItem(Za);
      } catch (t) {
        Te.warn(t);
      }
    }
  }, n.updateDisplay = function() {
    var e = this.player_.getChild("textTrackDisplay");
    e && e.updateDisplay();
  }, n.conditionalBlur_ = function() {
    this.previouslyActiveEl_ = null;
    var e = this.player_.controlBar, t = e && e.subsCapsButton, a = e && e.captionsButton;
    t ? t.focus() : a && a.focus();
  }, r;
})(ai);
te.registerComponent("TextTrackSettings", Hg);
var Wg = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t, a = e.ResizeObserver || P.ResizeObserver;
    e.ResizeObserver === null && (a = false);
    var o = Fe({ createEl: !a, reportTouchActivity: false }, e);
    return t = s12.call(this, i, o) || this, t.ResizeObserver = e.ResizeObserver || P.ResizeObserver, t.loadListener_ = null, t.resizeObserver_ = null, t.debouncedHandler_ = jm(function() {
      t.resizeHandler();
    }, 100, false, ye(t)), a ? (t.resizeObserver_ = new t.ResizeObserver(t.debouncedHandler_), t.resizeObserver_.observe(i.el())) : (t.loadListener_ = function() {
      if (!(!t.el_ || !t.el_.contentWindow)) {
        var u = t.debouncedHandler_, l = t.unloadListener_ = function() {
          at(this, "resize", u), at(this, "unload", l), l = null;
        };
        bt(t.el_.contentWindow, "unload", l), bt(t.el_.contentWindow, "resize", u);
      }
    }, t.one("load", t.loadListener_)), t;
  }
  var n = r.prototype;
  return n.createEl = function() {
    return s12.prototype.createEl.call(this, "iframe", { className: "vjs-resize-manager", tabIndex: -1, title: this.localize("No content") }, { "aria-hidden": "true" });
  }, n.resizeHandler = function() {
    !this.player_ || !this.player_.trigger || this.player_.trigger("playerresize");
  }, n.dispose = function() {
    this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, s12.prototype.dispose.call(this);
  }, r;
})(te);
te.registerComponent("ResizeManager", Wg);
var Gg = { trackingThreshold: 20, liveTolerance: 15 }, zg = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t, a = Fe(Gg, e, { createEl: false });
    return t = s12.call(this, i, a) || this, t.handleVisibilityChange_ = function(o) {
      return t.handleVisibilityChange(o);
    }, t.trackLiveHandler_ = function() {
      return t.trackLive_();
    }, t.handlePlay_ = function(o) {
      return t.handlePlay(o);
    }, t.handleFirstTimeupdate_ = function(o) {
      return t.handleFirstTimeupdate(o);
    }, t.handleSeeked_ = function(o) {
      return t.handleSeeked(o);
    }, t.seekToLiveEdge_ = function(o) {
      return t.seekToLiveEdge(o);
    }, t.reset_(), t.on(t.player_, "durationchange", function(o) {
      return t.handleDurationchange(o);
    }), t.on(t.player_, "canplay", function() {
      return t.toggleTracking();
    }), Ui && "hidden" in ae && "visibilityState" in ae && t.on(ae, "visibilitychange", t.handleVisibilityChange_), t;
  }
  var n = r.prototype;
  return n.handleVisibilityChange = function() {
    this.player_.duration() === 1 / 0 && (ae.hidden ? this.stopTracking() : this.startTracking());
  }, n.trackLive_ = function() {
    var e = this.player_.seekable();
    if (!(!e || !e.length)) {
      var t = Number(P.performance.now().toFixed(4)), a = this.lastTime_ === -1 ? 0 : (t - this.lastTime_) / 1e3;
      this.lastTime_ = t, this.pastSeekEnd_ = this.pastSeekEnd() + a;
      var o = this.liveCurrentTime(), u = this.player_.currentTime(), l = this.player_.paused() || this.seekedBehindLive_ || Math.abs(o - u) > this.options_.liveTolerance;
      (!this.timeupdateSeen_ || o === 1 / 0) && (l = false), l !== this.behindLiveEdge_ && (this.behindLiveEdge_ = l, this.trigger("liveedgechange"));
    }
  }, n.handleDurationchange = function() {
    this.toggleTracking();
  }, n.toggleTracking = function() {
    this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking()) : (this.player_.removeClass("vjs-liveui"), this.stopTracking());
  }, n.startTracking = function() {
    this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, Ot), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLiveHandler_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked_) : (this.one(this.player_, "play", this.handlePlay_), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)));
  }, n.handleFirstTimeupdate = function() {
    this.timeupdateSeen_ = true, this.on(this.player_, "seeked", this.handleSeeked_);
  }, n.handleSeeked = function() {
    var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
    this.seekedBehindLive_ = this.nextSeekedFromUser_ && e > 2, this.nextSeekedFromUser_ = false, this.trackLive_();
  }, n.handlePlay = function() {
    this.one(this.player_, "timeupdate", this.seekToLiveEdge_);
  }, n.reset_ = function() {
    this.lastTime_ = -1, this.pastSeekEnd_ = 0, this.lastSeekEnd_ = -1, this.behindLiveEdge_ = true, this.timeupdateSeen_ = false, this.seekedBehindLive_ = false, this.nextSeekedFromUser_ = false, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.off(this.player_, ["play", "pause"], this.trackLiveHandler_), this.off(this.player_, "seeked", this.handleSeeked_), this.off(this.player_, "play", this.handlePlay_), this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_), this.off(this.player_, "timeupdate", this.seekToLiveEdge_);
  }, n.nextSeekedFromUser = function() {
    this.nextSeekedFromUser_ = true;
  }, n.stopTracking = function() {
    this.isTracking() && (this.reset_(), this.trigger("liveedgechange"));
  }, n.seekableEnd = function() {
    for (var e = this.player_.seekable(), t = [], a = e ? e.length : 0; a--; ) t.push(e.end(a));
    return t.length ? t.sort()[t.length - 1] : 1 / 0;
  }, n.seekableStart = function() {
    for (var e = this.player_.seekable(), t = [], a = e ? e.length : 0; a--; ) t.push(e.start(a));
    return t.length ? t.sort()[0] : 0;
  }, n.liveWindow = function() {
    var e = this.liveCurrentTime();
    return e === 1 / 0 ? 0 : e - this.seekableStart();
  }, n.isLive = function() {
    return this.isTracking();
  }, n.atLiveEdge = function() {
    return !this.behindLiveEdge();
  }, n.liveCurrentTime = function() {
    return this.pastSeekEnd() + this.seekableEnd();
  }, n.pastSeekEnd = function() {
    var e = this.seekableEnd();
    return this.lastSeekEnd_ !== -1 && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), this.lastSeekEnd_ = e, this.pastSeekEnd_;
  }, n.behindLiveEdge = function() {
    return this.behindLiveEdge_;
  }, n.isTracking = function() {
    return typeof this.trackingInterval_ == "number";
  }, n.seekToLiveEdge = function() {
    this.seekedBehindLive_ = false, !this.atLiveEdge() && (this.nextSeekedFromUser_ = false, this.player_.currentTime(this.liveCurrentTime()));
  }, n.dispose = function() {
    this.off(ae, "visibilitychange", this.handleVisibilityChange_), this.stopTracking(), s12.prototype.dispose.call(this);
  }, r;
})(te);
te.registerComponent("LiveTracker", zg);
var xs = function(r) {
  var n = r.el();
  if (n.hasAttribute("src")) return r.triggerSourceset(n.src), true;
  var i = r.$$("source"), e = [], t = "";
  if (!i.length) return false;
  for (var a = 0; a < i.length; a++) {
    var o = i[a].src;
    o && e.indexOf(o) === -1 && e.push(o);
  }
  return e.length ? (e.length === 1 && (t = e[0]), r.triggerSourceset(t), true) : false;
}, Kg = Object.defineProperty({}, "innerHTML", { get: function() {
  return this.cloneNode(true).innerHTML;
}, set: function(r) {
  var n = ae.createElement(this.nodeName.toLowerCase());
  n.innerHTML = r;
  for (var i = ae.createDocumentFragment(); n.childNodes.length; ) i.appendChild(n.childNodes[0]);
  return this.innerText = "", P.Element.prototype.appendChild.call(this, i), this.innerHTML;
} }), fc = function(r, n) {
  for (var i = {}, e = 0; e < r.length && (i = Object.getOwnPropertyDescriptor(r[e], n), !(i && i.set && i.get)); e++) ;
  return i.enumerable = true, i.configurable = true, i;
}, Xg = function(r) {
  return fc([r.el(), P.HTMLMediaElement.prototype, P.Element.prototype, Kg], "innerHTML");
}, _l = function(r) {
  var n = r.el();
  if (!n.resetSourceWatch_) {
    var i = {}, e = Xg(r), t = function(o) {
      return function() {
        for (var u = arguments.length, l = new Array(u), c = 0; c < u; c++) l[c] = arguments[c];
        var m = o.apply(n, l);
        return xs(r), m;
      };
    };
    ["append", "appendChild", "insertAdjacentHTML"].forEach(function(a) {
      n[a] && (i[a] = n[a], n[a] = t(i[a]));
    }), Object.defineProperty(n, "innerHTML", Fe(e, { set: t(e.set) })), n.resetSourceWatch_ = function() {
      n.resetSourceWatch_ = null, Object.keys(i).forEach(function(a) {
        n[a] = i[a];
      }), Object.defineProperty(n, "innerHTML", e);
    }, r.one("sourceset", n.resetSourceWatch_);
  }
}, $g = Object.defineProperty({}, "src", { get: function() {
  return this.hasAttribute("src") ? Ud(P.Element.prototype.getAttribute.call(this, "src")) : "";
}, set: function(r) {
  return P.Element.prototype.setAttribute.call(this, "src", r), r;
} }), Yg = function(r) {
  return fc([r.el(), P.HTMLMediaElement.prototype, $g], "src");
}, Qg = function(r) {
  if (r.featuresSourceset) {
    var n = r.el();
    if (!n.resetSourceset_) {
      var i = Yg(r), e = n.setAttribute, t = n.load;
      Object.defineProperty(n, "src", Fe(i, { set: function(o) {
        var u = i.set.call(n, o);
        return r.triggerSourceset(n.src), u;
      } })), n.setAttribute = function(a, o) {
        var u = e.call(n, a, o);
        return /src/i.test(a) && r.triggerSourceset(n.src), u;
      }, n.load = function() {
        var a = t.call(n);
        return xs(r) || (r.triggerSourceset(""), _l(r)), a;
      }, n.currentSrc ? r.triggerSourceset(n.currentSrc) : xs(r) || _l(r), n.resetSourceset_ = function() {
        n.resetSourceset_ = null, n.load = t, n.setAttribute = e, Object.defineProperty(n, "src", i), n.resetSourceWatch_ && n.resetSourceWatch_();
      };
    }
  }
}, vo = function(r, n, i, e) {
  e === void 0 && (e = true);
  var t = function(u) {
    return Object.defineProperty(r, n, { value: u, enumerable: true, writable: true });
  }, a = { configurable: true, enumerable: true, get: function() {
    var u = i();
    return t(u), u;
  } };
  return e && (a.set = t), Object.defineProperty(r, n, a);
}, le = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    t = s12.call(this, i, e) || this;
    var a = i.source, o = false;
    if (t.featuresVideoFrameCallback = t.featuresVideoFrameCallback && t.el_.tagName === "VIDEO", a && (t.el_.currentSrc !== a.src || i.tag && i.tag.initNetworkState_ === 3) ? t.setSource(a) : t.handleLateInit_(t.el_), i.enableSourceset && t.setupSourcesetHandling_(), t.isScrubbing_ = false, t.el_.hasChildNodes()) {
      for (var u = t.el_.childNodes, l = u.length, c = []; l--; ) {
        var m = u[l], g = m.nodeName.toLowerCase();
        g === "track" && (t.featuresNativeTextTracks ? (t.remoteTextTrackEls().addTrackElement_(m), t.remoteTextTracks().addTrack(m.track), t.textTracks().addTrack(m.track), !o && !t.el_.hasAttribute("crossorigin") && da(m.src) && (o = true)) : c.push(m));
      }
      for (var _ = 0; _ < c.length; _++) t.el_.removeChild(c[_]);
    }
    return t.proxyNativeTracks_(), t.featuresNativeTextTracks && o && Te.warn(`Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.
This may prevent text tracks from loading.`), t.restoreMetadataTracksInIOSNativePlayer_(), (Yr || Gs || fd) && i.nativeControlsForTouch === true && t.setControls(true), t.proxyWebkitFullscreen_(), t.triggerReady(), t;
  }
  var n = r.prototype;
  return n.dispose = function() {
    this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), r.disposeMediaElement(this.el_), this.options_ = null, s12.prototype.dispose.call(this);
  }, n.setupSourcesetHandling_ = function() {
    Qg(this);
  }, n.restoreMetadataTracksInIOSNativePlayer_ = function() {
    var e = this.textTracks(), t, a = function() {
      t = [];
      for (var l = 0; l < e.length; l++) {
        var c = e[l];
        c.kind === "metadata" && t.push({ track: c, storedMode: c.mode });
      }
    };
    a(), e.addEventListener("change", a), this.on("dispose", function() {
      return e.removeEventListener("change", a);
    });
    var o = function u() {
      for (var l = 0; l < t.length; l++) {
        var c = t[l];
        c.track.mode === "disabled" && c.track.mode !== c.storedMode && (c.track.mode = c.storedMode);
      }
      e.removeEventListener("change", u);
    };
    this.on("webkitbeginfullscreen", function() {
      e.removeEventListener("change", a), e.removeEventListener("change", o), e.addEventListener("change", o);
    }), this.on("webkitendfullscreen", function() {
      e.removeEventListener("change", a), e.addEventListener("change", a), e.removeEventListener("change", o);
    });
  }, n.overrideNative_ = function(e, t) {
    var a = this;
    if (t === this["featuresNative" + e + "Tracks"]) {
      var o = e.toLowerCase();
      this[o + "TracksListeners_"] && Object.keys(this[o + "TracksListeners_"]).forEach(function(u) {
        var l = a.el()[o + "Tracks"];
        l.removeEventListener(u, a[o + "TracksListeners_"][u]);
      }), this["featuresNative" + e + "Tracks"] = !t, this[o + "TracksListeners_"] = null, this.proxyNativeTracksForType_(o);
    }
  }, n.overrideNativeAudioTracks = function(e) {
    this.overrideNative_("Audio", e);
  }, n.overrideNativeVideoTracks = function(e) {
    this.overrideNative_("Video", e);
  }, n.proxyNativeTracksForType_ = function(e) {
    var t = this, a = At[e], o = this.el()[a.getterName], u = this[a.getterName]();
    if (!(!this["featuresNative" + a.capitalName + "Tracks"] || !o || !o.addEventListener)) {
      var l = { change: function(g) {
        var _ = { type: "change", target: u, currentTarget: u, srcElement: u };
        u.trigger(_), e === "text" && t[ei.remoteText.getterName]().trigger(_);
      }, addtrack: function(g) {
        u.addTrack(g.track);
      }, removetrack: function(g) {
        u.removeTrack(g.track);
      } }, c = function() {
        for (var g = [], _ = 0; _ < u.length; _++) {
          for (var C = false, w = 0; w < o.length; w++) if (o[w] === u[_]) {
            C = true;
            break;
          }
          C || g.push(u[_]);
        }
        for (; g.length; ) u.removeTrack(g.shift());
      };
      this[a.getterName + "Listeners_"] = l, Object.keys(l).forEach(function(m) {
        var g = l[m];
        o.addEventListener(m, g), t.on("dispose", function(_) {
          return o.removeEventListener(m, g);
        });
      }), this.on("loadstart", c), this.on("dispose", function(m) {
        return t.off("loadstart", c);
      });
    }
  }, n.proxyNativeTracks_ = function() {
    var e = this;
    At.names.forEach(function(t) {
      e.proxyNativeTracksForType_(t);
    });
  }, n.createEl = function() {
    var e = this.options_.tag;
    if (!e || !(this.options_.playerElIngest || this.movingMediaElementInDOM)) {
      if (e) {
        var t = e.cloneNode(true);
        e.parentNode && e.parentNode.insertBefore(t, e), r.disposeMediaElement(e), e = t;
      } else {
        e = ae.createElement("video");
        var a = this.options_.tag && Yt(this.options_.tag), o = Fe({}, a);
        (!Yr || this.options_.nativeControlsForTouch !== true) && delete o.controls, Td(e, Ue(o, { id: this.options_.techId, class: "vjs-tech" }));
      }
      e.playerId = this.options_.playerId;
    }
    typeof this.options_.preload < "u" && Qr(e, "preload", this.options_.preload), this.options_.disablePictureInPicture !== void 0 && (e.disablePictureInPicture = this.options_.disablePictureInPicture);
    for (var u = ["loop", "muted", "playsinline", "autoplay"], l = 0; l < u.length; l++) {
      var c = u[l], m = this.options_[c];
      typeof m < "u" && (m ? Qr(e, c, c) : aa(e, c), e[c] = m);
    }
    return e;
  }, n.handleLateInit_ = function(e) {
    if (!(e.networkState === 0 || e.networkState === 3)) {
      if (e.readyState === 0) {
        var t = false, a = function() {
          t = true;
        };
        this.on("loadstart", a);
        var o = function() {
          t || this.trigger("loadstart");
        };
        this.on("loadedmetadata", o), this.ready(function() {
          this.off("loadstart", a), this.off("loadedmetadata", o), t || this.trigger("loadstart");
        });
        return;
      }
      var u = ["loadstart"];
      u.push("loadedmetadata"), e.readyState >= 2 && u.push("loadeddata"), e.readyState >= 3 && u.push("canplay"), e.readyState >= 4 && u.push("canplaythrough"), this.ready(function() {
        u.forEach(function(l) {
          this.trigger(l);
        }, this);
      });
    }
  }, n.setScrubbing = function(e) {
    this.isScrubbing_ = e;
  }, n.scrubbing = function() {
    return this.isScrubbing_;
  }, n.setCurrentTime = function(e) {
    try {
      this.isScrubbing_ && this.el_.fastSeek && na ? this.el_.fastSeek(e) : this.el_.currentTime = e;
    } catch (t) {
      Te(t, "Video is not ready. (Video.js)");
    }
  }, n.duration = function() {
    var e = this;
    if (this.el_.duration === 1 / 0 && ir && nr && this.el_.currentTime === 0) {
      var t = function a() {
        e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"), e.off("timeupdate", a));
      };
      return this.on("timeupdate", t), NaN;
    }
    return this.el_.duration || NaN;
  }, n.width = function() {
    return this.el_.offsetWidth;
  }, n.height = function() {
    return this.el_.offsetHeight;
  }, n.proxyWebkitFullscreen_ = function() {
    var e = this;
    if ("webkitDisplayingFullscreen" in this.el_) {
      var t = function() {
        this.trigger("fullscreenchange", { isFullscreen: false }), this.el_.controls && !this.options_.nativeControlsForTouch && this.controls() && (this.el_.controls = false);
      }, a = function() {
        "webkitPresentationMode" in this.el_ && this.el_.webkitPresentationMode !== "picture-in-picture" && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", { isFullscreen: true, nativeIOSFullscreen: true }));
      };
      this.on("webkitbeginfullscreen", a), this.on("dispose", function() {
        e.off("webkitbeginfullscreen", a), e.off("webkitendfullscreen", t);
      });
    }
  }, n.supportsFullScreen = function() {
    if (typeof this.el_.webkitEnterFullScreen == "function") {
      var e = P.navigator && P.navigator.userAgent || "";
      if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return true;
    }
    return false;
  }, n.enterFullScreen = function() {
    var e = this.el_;
    if (e.paused && e.networkState <= e.HAVE_METADATA) Vt(this.el_.play()), this.setTimeout(function() {
      e.pause();
      try {
        e.webkitEnterFullScreen();
      } catch (t) {
        this.trigger("fullscreenerror", t);
      }
    }, 0);
    else try {
      e.webkitEnterFullScreen();
    } catch (t) {
      this.trigger("fullscreenerror", t);
    }
  }, n.exitFullScreen = function() {
    if (!this.el_.webkitDisplayingFullscreen) {
      this.trigger("fullscreenerror", new Error("The video is not fullscreen"));
      return;
    }
    this.el_.webkitExitFullScreen();
  }, n.requestPictureInPicture = function() {
    return this.el_.requestPictureInPicture();
  }, n.requestVideoFrameCallback = function(e) {
    return this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.requestVideoFrameCallback(e) : s12.prototype.requestVideoFrameCallback.call(this, e);
  }, n.cancelVideoFrameCallback = function(e) {
    this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.cancelVideoFrameCallback(e) : s12.prototype.cancelVideoFrameCallback.call(this, e);
  }, n.src = function(e) {
    if (e === void 0) return this.el_.src;
    this.setSrc(e);
  }, n.reset = function() {
    r.resetMediaElement(this.el_);
  }, n.currentSrc = function() {
    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc;
  }, n.setControls = function(e) {
    this.el_.controls = !!e;
  }, n.addTextTrack = function(e, t, a) {
    return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, a) : s12.prototype.addTextTrack.call(this, e, t, a);
  }, n.createRemoteTextTrack = function(e) {
    if (!this.featuresNativeTextTracks) return s12.prototype.createRemoteTextTrack.call(this, e);
    var t = ae.createElement("track");
    return e.kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), t;
  }, n.addRemoteTextTrack = function(e, t) {
    var a = s12.prototype.addRemoteTextTrack.call(this, e, t);
    return this.featuresNativeTextTracks && this.el().appendChild(a), a;
  }, n.removeRemoteTextTrack = function(e) {
    if (s12.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var t = this.$$("track"), a = t.length; a--; ) (e === t[a] || e === t[a].track) && this.el().removeChild(t[a]);
  }, n.getVideoPlaybackQuality = function() {
    if (typeof this.el().getVideoPlaybackQuality == "function") return this.el().getVideoPlaybackQuality();
    var e = {};
    return typeof this.el().webkitDroppedFrameCount < "u" && typeof this.el().webkitDecodedFrameCount < "u" && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), P.performance && typeof P.performance.now == "function" ? e.creationTime = P.performance.now() : P.performance && P.performance.timing && typeof P.performance.timing.navigationStart == "number" && (e.creationTime = P.Date.now() - P.performance.timing.navigationStart), e;
  }, r;
})(we);
vo(le, "TEST_VID", function() {
  if (ri()) {
    var s12 = ae.createElement("video"), r = ae.createElement("track");
    return r.kind = "captions", r.srclang = "en", r.label = "English", s12.appendChild(r), s12;
  }
});
le.isSupported = function() {
  try {
    le.TEST_VID.volume = 0.5;
  } catch {
    return false;
  }
  return !!(le.TEST_VID && le.TEST_VID.canPlayType);
};
le.canPlayType = function(s12) {
  return le.TEST_VID.canPlayType(s12);
};
le.canPlaySource = function(s12, r) {
  return le.canPlayType(s12.type);
};
le.canControlVolume = function() {
  try {
    var s12 = le.TEST_VID.volume;
    le.TEST_VID.volume = s12 / 2 + 0.1;
    var r = s12 !== le.TEST_VID.volume;
    return r && ht ? (P.setTimeout(function() {
      le && le.prototype && (le.prototype.featuresVolumeControl = s12 !== le.TEST_VID.volume);
    }), false) : r;
  } catch {
    return false;
  }
};
le.canMuteVolume = function() {
  try {
    var s12 = le.TEST_VID.muted;
    return le.TEST_VID.muted = !s12, le.TEST_VID.muted ? Qr(le.TEST_VID, "muted", "muted") : aa(le.TEST_VID, "muted", "muted"), s12 !== le.TEST_VID.muted;
  } catch {
    return false;
  }
};
le.canControlPlaybackRate = function() {
  if (ir && nr && pd < 58) return false;
  try {
    var s12 = le.TEST_VID.playbackRate;
    return le.TEST_VID.playbackRate = s12 / 2 + 0.1, s12 !== le.TEST_VID.playbackRate;
  } catch {
    return false;
  }
};
le.canOverrideAttributes = function() {
  try {
    var s12 = function() {
    };
    Object.defineProperty(ae.createElement("video"), "src", { get: s12, set: s12 }), Object.defineProperty(ae.createElement("audio"), "src", { get: s12, set: s12 }), Object.defineProperty(ae.createElement("video"), "innerHTML", { get: s12, set: s12 }), Object.defineProperty(ae.createElement("audio"), "innerHTML", { get: s12, set: s12 });
  } catch {
    return false;
  }
  return true;
};
le.supportsNativeTextTracks = function() {
  return na || ht && nr;
};
le.supportsNativeVideoTracks = function() {
  return !!(le.TEST_VID && le.TEST_VID.videoTracks);
};
le.supportsNativeAudioTracks = function() {
  return !!(le.TEST_VID && le.TEST_VID.audioTracks);
};
le.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"];
[["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach(function(s12) {
  var r = s12[0], n = s12[1];
  vo(le.prototype, r, function() {
    return le[n]();
  }, true);
});
le.prototype.featuresVolumeControl = le.canControlVolume();
le.prototype.movingMediaElementInDOM = !ht;
le.prototype.featuresFullscreenResize = true;
le.prototype.featuresProgressEvents = true;
le.prototype.featuresTimeupdateEvents = true;
le.prototype.featuresVideoFrameCallback = !!(le.TEST_VID && le.TEST_VID.requestVideoFrameCallback);
var qn;
le.patchCanPlayType = function() {
  js >= 4 && !hd && !nr && (qn = le.TEST_VID && le.TEST_VID.constructor.prototype.canPlayType, le.TEST_VID.constructor.prototype.canPlayType = function(s12) {
    var r = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
    return s12 && r.test(s12) ? "maybe" : qn.call(this, s12);
  });
};
le.unpatchCanPlayType = function() {
  var s12 = le.TEST_VID.constructor.prototype.canPlayType;
  return qn && (le.TEST_VID.constructor.prototype.canPlayType = qn), s12;
};
le.patchCanPlayType();
le.disposeMediaElement = function(s12) {
  if (s12) {
    for (s12.parentNode && s12.parentNode.removeChild(s12); s12.hasChildNodes(); ) s12.removeChild(s12.firstChild);
    s12.removeAttribute("src"), typeof s12.load == "function" && (function() {
      try {
        s12.load();
      } catch {
      }
    })();
  }
};
le.resetMediaElement = function(s12) {
  if (s12) {
    for (var r = s12.querySelectorAll("source"), n = r.length; n--; ) s12.removeChild(r[n]);
    s12.removeAttribute("src"), typeof s12.load == "function" && (function() {
      try {
        s12.load();
      } catch {
      }
    })();
  }
};
["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(s12) {
  le.prototype[s12] = function() {
    return this.el_[s12] || this.el_.hasAttribute(s12);
  };
});
["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(s12) {
  le.prototype["set" + Ge(s12)] = function(r) {
    this.el_[s12] = r, r ? this.el_.setAttribute(s12, s12) : this.el_.removeAttribute(s12);
  };
});
["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach(function(s12) {
  le.prototype[s12] = function() {
    return this.el_[s12];
  };
});
["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function(s12) {
  le.prototype["set" + Ge(s12)] = function(r) {
    this.el_[s12] = r;
  };
});
["pause", "load", "play"].forEach(function(s12) {
  le.prototype[s12] = function() {
    return this.el_[s12]();
  };
});
we.withSourceHandlers(le);
le.nativeSourceHandler = {};
le.nativeSourceHandler.canPlayType = function(s12) {
  try {
    return le.TEST_VID.canPlayType(s12);
  } catch {
    return "";
  }
};
le.nativeSourceHandler.canHandleSource = function(s12, r) {
  if (s12.type) return le.nativeSourceHandler.canPlayType(s12.type);
  if (s12.src) {
    var n = Js(s12.src);
    return le.nativeSourceHandler.canPlayType("video/" + n);
  }
  return "";
};
le.nativeSourceHandler.handleSource = function(s12, r, n) {
  r.setSrc(s12.src);
};
le.nativeSourceHandler.dispose = function() {
};
le.registerSourceHandler(le.nativeSourceHandler);
we.registerTech("Html5", le);
var hc = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"], rs = { canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked" }, Ss = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"], Pn = {};
Ss.forEach(function(s12) {
  var r = s12.charAt(0) === "x" ? "x-" + s12.substring(1) : s12;
  Pn[s12] = "vjs-layout-" + r;
});
var Jg = { tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0 }, Ke = (function(s12) {
  oe(r, s12);
  function r(i, e, t) {
    var a;
    if (i.id = i.id || e.id || "vjs_video_" + ar(), e = Ue(r.getTagSettings(i), e), e.initChildren = false, e.createEl = false, e.evented = false, e.reportTouchActivity = false, !e.language) if (typeof i.closest == "function") {
      var o = i.closest("[lang]");
      o && o.getAttribute && (e.language = o.getAttribute("lang"));
    } else for (var u = i; u && u.nodeType === 1; ) {
      if (Yt(u).hasOwnProperty("lang")) {
        e.language = u.getAttribute("lang");
        break;
      }
      u = u.parentNode;
    }
    if (a = s12.call(this, null, e, t) || this, a.boundDocumentFullscreenChange_ = function(g) {
      return a.documentFullscreenChange_(g);
    }, a.boundFullWindowOnEscKey_ = function(g) {
      return a.fullWindowOnEscKey(g);
    }, a.boundUpdateStyleEl_ = function(g) {
      return a.updateStyleEl_(g);
    }, a.boundApplyInitTime_ = function(g) {
      return a.applyInitTime_(g);
    }, a.boundUpdateCurrentBreakpoint_ = function(g) {
      return a.updateCurrentBreakpoint_(g);
    }, a.boundHandleTechClick_ = function(g) {
      return a.handleTechClick_(g);
    }, a.boundHandleTechDoubleClick_ = function(g) {
      return a.handleTechDoubleClick_(g);
    }, a.boundHandleTechTouchStart_ = function(g) {
      return a.handleTechTouchStart_(g);
    }, a.boundHandleTechTouchMove_ = function(g) {
      return a.handleTechTouchMove_(g);
    }, a.boundHandleTechTouchEnd_ = function(g) {
      return a.handleTechTouchEnd_(g);
    }, a.boundHandleTechTap_ = function(g) {
      return a.handleTechTap_(g);
    }, a.isFullscreen_ = false, a.log = ld(a.id_), a.fsApi_ = Rn, a.isPosterFromTech_ = false, a.queuedCallbacks_ = [], a.isReady_ = false, a.hasStarted_ = false, a.userActive_ = false, a.debugEnabled_ = false, a.audioOnlyMode_ = false, a.audioPosterMode_ = false, a.audioOnlyCache_ = { playerHeight: null, hiddenChildren: [] }, !a.options_ || !a.options_.techOrder || !a.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
    if (a.tag = i, a.tagAttributes = i && Yt(i), a.language(a.options_.language), e.languages) {
      var l = {};
      Object.getOwnPropertyNames(e.languages).forEach(function(g) {
        l[g.toLowerCase()] = e.languages[g];
      }), a.languages_ = l;
    } else a.languages_ = r.prototype.options_.languages;
    a.resetCache_(), a.poster_ = e.poster || "", a.controls_ = !!e.controls, i.controls = false, i.removeAttribute("controls"), a.changingSrc_ = false, a.playCallbacks_ = [], a.playTerminatedQueue_ = [], i.hasAttribute("autoplay") ? a.autoplay(true) : a.autoplay(a.options_.autoplay), e.plugins && Object.keys(e.plugins).forEach(function(g) {
      if (typeof a[g] != "function") throw new Error('plugin "' + g + '" does not exist');
    }), a.scrubbing_ = false, a.el_ = a.createEl(), $s(ye(a), { eventBusKey: "el_" }), a.fsApi_.requestFullscreen && (bt(ae, a.fsApi_.fullscreenchange, a.boundDocumentFullscreenChange_), a.on(a.fsApi_.fullscreenchange, a.boundDocumentFullscreenChange_)), a.fluid_ && a.on(["playerreset", "resize"], a.boundUpdateStyleEl_);
    var c = Fe(a.options_);
    e.plugins && Object.keys(e.plugins).forEach(function(g) {
      a[g](e.plugins[g]);
    }), e.debug && a.debug(true), a.options_.playerOptions = c, a.middleware_ = [], a.playbackRates(e.playbackRates), a.initChildren(), a.isAudio(i.nodeName.toLowerCase() === "audio"), a.controls() ? a.addClass("vjs-controls-enabled") : a.addClass("vjs-controls-disabled"), a.el_.setAttribute("role", "region"), a.isAudio() ? a.el_.setAttribute("aria-label", a.localize("Audio Player")) : a.el_.setAttribute("aria-label", a.localize("Video Player")), a.isAudio() && a.addClass("vjs-audio"), a.flexNotSupported_() && a.addClass("vjs-no-flex"), Yr && a.addClass("vjs-touch-enabled"), ht || a.addClass("vjs-workinghover"), r.players[a.id_] = ye(a);
    var m = sd.split(".")[0];
    return a.addClass("vjs-v" + m), a.userActive(true), a.reportUserActivity(), a.one("play", function(g) {
      return a.listenForUserActivity_(g);
    }), a.on("stageclick", function(g) {
      return a.handleStageClick_(g);
    }), a.on("keydown", function(g) {
      return a.handleKeyDown(g);
    }), a.on("languagechange", function(g) {
      return a.handleLanguagechange(g);
    }), a.breakpoints(a.options_.breakpoints), a.responsive(a.options_.responsive), a.on("ready", function() {
      a.audioPosterMode(a.options_.audioPosterMode), a.audioOnlyMode(a.options_.audioOnlyMode);
    }), a;
  }
  var n = r.prototype;
  return n.dispose = function() {
    var e = this;
    this.trigger("dispose"), this.off("dispose"), at(ae, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), at(ae, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), r.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = false, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), yg(this), lt.names.forEach(function(t) {
      var a = lt[t], o = e[a.getterName]();
      o && o.off && o.off();
    }), s12.prototype.dispose.call(this, { restoreEl: this.options_.restoreEl });
  }, n.createEl = function() {
    var e = this.tag, t, a = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player"), o = this.tag.tagName.toLowerCase() === "video-js";
    a ? t = this.el_ = e.parentNode : o || (t = this.el_ = s12.prototype.createEl.call(this, "div"));
    var u = Yt(e);
    if (o) {
      for (t = this.el_ = e, e = this.tag = ae.createElement("video"); t.children.length; ) e.appendChild(t.firstChild);
      Pr(t, "video-js") || Zt(t, "video-js"), t.appendChild(e), a = this.playerElIngest_ = t, Object.keys(t).forEach(function(C) {
        try {
          e[C] = t[C];
        } catch {
        }
      });
    }
    if (e.setAttribute("tabindex", "-1"), u.tabindex = "-1", (Ui || nr && md) && (e.setAttribute("role", "application"), u.role = "application"), e.removeAttribute("width"), e.removeAttribute("height"), "width" in u && delete u.width, "height" in u && delete u.height, Object.getOwnPropertyNames(u).forEach(function(C) {
      o && C === "class" || t.setAttribute(C, u[C]), o && e.setAttribute(C, u[C]);
    }), e.playerId = e.id, e.id += "_html5_api", e.className = "vjs-tech", e.player = t.player = this, this.addClass("vjs-paused"), P.VIDEOJS_NO_DYNAMIC_STYLE !== true) {
      this.styleEl_ = Pd("vjs-styles-dimensions");
      var l = hr(".vjs-styles-defaults"), c = hr("head");
      c.insertBefore(this.styleEl_, l ? l.nextSibling : c.firstChild);
    }
    this.fill_ = false, this.fluid_ = false, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
    for (var m = e.getElementsByTagName("a"), g = 0; g < m.length; g++) {
      var _ = m.item(g);
      Zt(_, "vjs-hidden"), _.setAttribute("hidden", "hidden");
    }
    return e.initNetworkState_ = e.networkState, e.parentNode && !a && e.parentNode.insertBefore(t, e), ms(e, t), this.children_.unshift(e), this.el_.setAttribute("lang", this.language_), this.el_.setAttribute("translate", "no"), this.el_ = t, t;
  }, n.crossOrigin = function(e) {
    if (!e) return this.techGet_("crossOrigin");
    if (e !== "anonymous" && e !== "use-credentials") {
      Te.warn('crossOrigin must be "anonymous" or "use-credentials", given "' + e + '"');
      return;
    }
    this.techCall_("setCrossOrigin", e);
  }, n.width = function(e) {
    return this.dimension("width", e);
  }, n.height = function(e) {
    return this.dimension("height", e);
  }, n.dimension = function(e, t) {
    var a = e + "_";
    if (t === void 0) return this[a] || 0;
    if (t === "" || t === "auto") {
      this[a] = void 0, this.updateStyleEl_();
      return;
    }
    var o = parseFloat(t);
    if (isNaN(o)) {
      Te.error('Improper value "' + t + '" supplied for for ' + e);
      return;
    }
    this[a] = o, this.updateStyleEl_();
  }, n.fluid = function(e) {
    var t = this;
    if (e === void 0) return !!this.fluid_;
    this.fluid_ = !!e, er(this) && this.off(["playerreset", "resize"], this.boundUpdateStyleEl_), e ? (this.addClass("vjs-fluid"), this.fill(false), Hm(this, function() {
      t.on(["playerreset", "resize"], t.boundUpdateStyleEl_);
    })) : this.removeClass("vjs-fluid"), this.updateStyleEl_();
  }, n.fill = function(e) {
    if (e === void 0) return !!this.fill_;
    this.fill_ = !!e, e ? (this.addClass("vjs-fill"), this.fluid(false)) : this.removeClass("vjs-fill");
  }, n.aspectRatio = function(e) {
    if (e === void 0) return this.aspectRatio_;
    if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
    this.aspectRatio_ = e, this.fluid(true), this.updateStyleEl_();
  }, n.updateStyleEl_ = function() {
    if (P.VIDEOJS_NO_DYNAMIC_STYLE === true) {
      var e = typeof this.width_ == "number" ? this.width_ : this.options_.width, t = typeof this.height_ == "number" ? this.height_ : this.options_.height, a = this.tech_ && this.tech_.el();
      a && (e >= 0 && (a.width = e), t >= 0 && (a.height = t));
      return;
    }
    var o, u, l, c;
    this.aspectRatio_ !== void 0 && this.aspectRatio_ !== "auto" ? l = this.aspectRatio_ : this.videoWidth() > 0 ? l = this.videoWidth() + ":" + this.videoHeight() : l = "16:9";
    var m = l.split(":"), g = m[1] / m[0];
    this.width_ !== void 0 ? o = this.width_ : this.height_ !== void 0 ? o = this.height_ / g : o = this.videoWidth() || 300, this.height_ !== void 0 ? u = this.height_ : u = o * g, /^[^a-zA-Z]/.test(this.id()) ? c = "dimensions-" + this.id() : c = this.id() + "-dimensions", this.addClass(c), Id(this.styleEl_, `
      .` + c + ` {
        width: ` + o + `px;
        height: ` + u + `px;
      }

      .` + c + `.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ` + g * 100 + `%;
      }
    `);
  }, n.loadTech_ = function(e, t) {
    var a = this;
    this.tech_ && this.unloadTech_();
    var o = Ge(e), u = e.charAt(0).toLowerCase() + e.slice(1);
    o !== "Html5" && this.tag && (we.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = o, this.isReady_ = false;
    var l = this.autoplay();
    (typeof this.autoplay() == "string" || this.autoplay() === true && this.options_.normalizeAutoplay) && (l = false);
    var c = { source: t, autoplay: l, nativeControlsForTouch: this.options_.nativeControlsForTouch, playerId: this.id(), techId: this.id() + "_" + u + "_api", playsinline: this.options_.playsinline, preload: this.options_.preload, loop: this.options_.loop, disablePictureInPicture: this.options_.disablePictureInPicture, muted: this.options_.muted, poster: this.poster(), language: this.language(), playerElIngest: this.playerElIngest_ || false, "vtt.js": this.options_["vtt.js"], canOverridePoster: !!this.options_.techCanOverridePoster, enableSourceset: this.options_.enableSourceset, Promise: this.options_.Promise };
    lt.names.forEach(function(g) {
      var _ = lt[g];
      c[_.getterName] = a[_.privateName];
    }), Ue(c, this.options_[o]), Ue(c, this.options_[u]), Ue(c, this.options_[e.toLowerCase()]), this.tag && (c.tag = this.tag), t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (c.startTime = this.cache_.currentTime);
    var m = we.getTech(e);
    if (!m) throw new Error("No Tech named '" + o + "' exists! '" + o + "' should be registered using videojs.registerTech()'");
    this.tech_ = new m(c), this.tech_.ready(Re(this, this.handleTechReady_), true), el.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), hc.forEach(function(g) {
      a.on(a.tech_, g, function(_) {
        return a["handleTech" + Ge(g) + "_"](_);
      });
    }), Object.keys(rs).forEach(function(g) {
      a.on(a.tech_, g, function(_) {
        if (a.tech_.playbackRate() === 0 && a.tech_.seeking()) {
          a.queuedCallbacks_.push({ callback: a["handleTech" + rs[g] + "_"].bind(a), event: _ });
          return;
        }
        a["handleTech" + rs[g] + "_"](_);
      });
    }), this.on(this.tech_, "loadstart", function(g) {
      return a.handleTechLoadStart_(g);
    }), this.on(this.tech_, "sourceset", function(g) {
      return a.handleTechSourceset_(g);
    }), this.on(this.tech_, "waiting", function(g) {
      return a.handleTechWaiting_(g);
    }), this.on(this.tech_, "ended", function(g) {
      return a.handleTechEnded_(g);
    }), this.on(this.tech_, "seeking", function(g) {
      return a.handleTechSeeking_(g);
    }), this.on(this.tech_, "play", function(g) {
      return a.handleTechPlay_(g);
    }), this.on(this.tech_, "firstplay", function(g) {
      return a.handleTechFirstPlay_(g);
    }), this.on(this.tech_, "pause", function(g) {
      return a.handleTechPause_(g);
    }), this.on(this.tech_, "durationchange", function(g) {
      return a.handleTechDurationChange_(g);
    }), this.on(this.tech_, "fullscreenchange", function(g, _) {
      return a.handleTechFullscreenChange_(g, _);
    }), this.on(this.tech_, "fullscreenerror", function(g, _) {
      return a.handleTechFullscreenError_(g, _);
    }), this.on(this.tech_, "enterpictureinpicture", function(g) {
      return a.handleTechEnterPictureInPicture_(g);
    }), this.on(this.tech_, "leavepictureinpicture", function(g) {
      return a.handleTechLeavePictureInPicture_(g);
    }), this.on(this.tech_, "error", function(g) {
      return a.handleTechError_(g);
    }), this.on(this.tech_, "posterchange", function(g) {
      return a.handleTechPosterChange_(g);
    }), this.on(this.tech_, "textdata", function(g) {
      return a.handleTechTextData_(g);
    }), this.on(this.tech_, "ratechange", function(g) {
      return a.handleTechRateChange_(g);
    }), this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode !== this.el() && (o !== "Html5" || !this.tag) && ms(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null);
  }, n.unloadTech_ = function() {
    var e = this;
    lt.names.forEach(function(t) {
      var a = lt[t];
      e[a.privateName] = e[a.getterName]();
    }), this.textTracksJson_ = el.textTracksToJson(this.tech_), this.isReady_ = false, this.tech_.dispose(), this.tech_ = false, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = false;
  }, n.tech = function(e) {
    return e === void 0 && Te.warn(`Using the tech directly can be dangerous. I hope you know what you're doing.
See https://github.com/videojs/video.js/issues/2617 for more info.
`), this.tech_;
  }, n.addTechControlsListeners_ = function() {
    this.removeTechControlsListeners_(), this.on(this.tech_, "click", this.boundHandleTechClick_), this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_), this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.on(this.tech_, "tap", this.boundHandleTechTap_);
  }, n.removeTechControlsListeners_ = function() {
    this.off(this.tech_, "tap", this.boundHandleTechTap_), this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.off(this.tech_, "click", this.boundHandleTechClick_), this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_);
  }, n.handleTechReady_ = function() {
    this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_();
  }, n.handleTechLoadStart_ = function() {
    this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() ? (this.hasStarted(false), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay() === true && this.options_.normalizeAutoplay ? "play" : this.autoplay());
  }, n.manualAutoplay_ = function(e) {
    var t = this;
    if (!(!this.tech_ || typeof e != "string")) {
      var a = function() {
        var l = t.muted();
        t.muted(true);
        var c = function() {
          t.muted(l);
        };
        t.playTerminatedQueue_.push(c);
        var m = t.play();
        if (Di(m)) return m.catch(function(g) {
          throw c(), new Error("Rejection at manualAutoplay. Restoring muted value. " + (g || ""));
        });
      }, o;
      if (e === "any" && !this.muted() ? (o = this.play(), Di(o) && (o = o.catch(a))) : e === "muted" && !this.muted() ? o = a() : o = this.play(), !!Di(o)) return o.then(function() {
        t.trigger({ type: "autoplay-success", autoplay: e });
      }).catch(function() {
        t.trigger({ type: "autoplay-failure", autoplay: e });
      });
    }
  }, n.updateSourceCaches_ = function(e) {
    e === void 0 && (e = "");
    var t = e, a = "";
    typeof t != "string" && (t = e.src, a = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !a && (a = bg(this, t)), this.cache_.source = Fe({}, e, { src: t, type: a });
    for (var o = this.cache_.sources.filter(function(_) {
      return _.src && _.src === t;
    }), u = [], l = this.$$("source"), c = [], m = 0; m < l.length; m++) {
      var g = Yt(l[m]);
      u.push(g), g.src && g.src === t && c.push(g.src);
    }
    c.length && !o.length ? this.cache_.sources = u : o.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t;
  }, n.handleTechSourceset_ = function(e) {
    var t = this;
    if (!this.changingSrc_) {
      var a = function(c) {
        return t.updateSourceCaches_(c);
      }, o = this.currentSource().src, u = e.src;
      o && !/^blob:/.test(o) && /^blob:/.test(u) && (!this.lastSource_ || this.lastSource_.tech !== u && this.lastSource_.player !== o) && (a = function() {
      }), a(u), e.src || this.tech_.any(["sourceset", "loadstart"], function(l) {
        if (l.type !== "sourceset") {
          var c = t.techGet("currentSrc");
          t.lastSource_.tech = c, t.updateSourceCaches_(c);
        }
      });
    }
    this.lastSource_ = { player: this.currentSource().src, tech: e.src }, this.trigger({ src: e.src, type: "sourceset" });
  }, n.hasStarted = function(e) {
    if (e === void 0) return this.hasStarted_;
    e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"));
  }, n.handleTechPlay_ = function() {
    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(true), this.trigger("play");
  }, n.handleTechRateChange_ = function() {
    this.tech_.playbackRate() > 0 && this.cache_.lastPlaybackRate === 0 && (this.queuedCallbacks_.forEach(function(e) {
      return e.callback(e.event);
    }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange");
  }, n.handleTechWaiting_ = function() {
    var e = this;
    this.addClass("vjs-waiting"), this.trigger("waiting");
    var t = this.currentTime(), a = function o() {
      t !== e.currentTime() && (e.removeClass("vjs-waiting"), e.off("timeupdate", o));
    };
    this.on("timeupdate", a);
  }, n.handleTechCanPlay_ = function() {
    this.removeClass("vjs-waiting"), this.trigger("canplay");
  }, n.handleTechCanPlayThrough_ = function() {
    this.removeClass("vjs-waiting"), this.trigger("canplaythrough");
  }, n.handleTechPlaying_ = function() {
    this.removeClass("vjs-waiting"), this.trigger("playing");
  }, n.handleTechSeeking_ = function() {
    this.addClass("vjs-seeking"), this.trigger("seeking");
  }, n.handleTechSeeked_ = function() {
    this.removeClass("vjs-seeking"), this.removeClass("vjs-ended"), this.trigger("seeked");
  }, n.handleTechFirstPlay_ = function() {
    this.options_.starttime && (Te.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay");
  }, n.handleTechPause_ = function() {
    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause");
  }, n.handleTechEnded_ = function() {
    this.addClass("vjs-ended"), this.removeClass("vjs-waiting"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended");
  }, n.handleTechDurationChange_ = function() {
    this.duration(this.techGet_("duration"));
  }, n.handleTechClick_ = function(e) {
    this.controls_ && (this.options_ === void 0 || this.options_.userActions === void 0 || this.options_.userActions.click === void 0 || this.options_.userActions.click !== false) && (this.options_ !== void 0 && this.options_.userActions !== void 0 && typeof this.options_.userActions.click == "function" ? this.options_.userActions.click.call(this, e) : this.paused() ? Vt(this.play()) : this.pause());
  }, n.handleTechDoubleClick_ = function(e) {
    if (this.controls_) {
      var t = Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), function(a) {
        return a.contains(e.target);
      });
      t || (this.options_ === void 0 || this.options_.userActions === void 0 || this.options_.userActions.doubleClick === void 0 || this.options_.userActions.doubleClick !== false) && (this.options_ !== void 0 && this.options_.userActions !== void 0 && typeof this.options_.userActions.doubleClick == "function" ? this.options_.userActions.doubleClick.call(this, e) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen());
    }
  }, n.handleTechTap_ = function() {
    this.userActive(!this.userActive());
  }, n.handleTechTouchStart_ = function() {
    this.userWasActive = this.userActive();
  }, n.handleTechTouchMove_ = function() {
    this.userWasActive && this.reportUserActivity();
  }, n.handleTechTouchEnd_ = function(e) {
    e.cancelable && e.preventDefault();
  }, n.handleStageClick_ = function() {
    this.reportUserActivity();
  }, n.toggleFullscreenClass_ = function() {
    this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen");
  }, n.documentFullscreenChange_ = function(e) {
    var t = e.target.player;
    if (!(t && t !== this)) {
      var a = this.el(), o = ae[this.fsApi_.fullscreenElement] === a;
      !o && a.matches ? o = a.matches(":" + this.fsApi_.fullscreen) : !o && a.msMatchesSelector && (o = a.msMatchesSelector(":" + this.fsApi_.fullscreen)), this.isFullscreen(o);
    }
  }, n.handleTechFullscreenChange_ = function(e, t) {
    var a = this;
    t && (t.nativeIOSFullscreen && (this.addClass("vjs-ios-native-fs"), this.tech_.one("webkitendfullscreen", function() {
      a.removeClass("vjs-ios-native-fs");
    })), this.isFullscreen(t.isFullscreen));
  }, n.handleTechFullscreenError_ = function(e, t) {
    this.trigger("fullscreenerror", t);
  }, n.togglePictureInPictureClass_ = function() {
    this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture");
  }, n.handleTechEnterPictureInPicture_ = function(e) {
    this.isInPictureInPicture(true);
  }, n.handleTechLeavePictureInPicture_ = function(e) {
    this.isInPictureInPicture(false);
  }, n.handleTechError_ = function() {
    var e = this.tech_.error();
    this.error(e);
  }, n.handleTechTextData_ = function() {
    var e = null;
    arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e);
  }, n.getCache = function() {
    return this.cache_;
  }, n.resetCache_ = function() {
    this.cache_ = { currentTime: 0, initTime: 0, inactivityTimeout: this.options_.inactivityTimeout, duration: NaN, lastVolume: 1, lastPlaybackRate: this.defaultPlaybackRate(), media: null, src: "", source: {}, sources: [], playbackRates: [], volume: 1 };
  }, n.techCall_ = function(e, t) {
    this.ready(function() {
      if (e in gg) return pg(this.middleware_, this.tech_, e, t);
      if (e in sl) return al(this.middleware_, this.tech_, e, t);
      try {
        this.tech_ && this.tech_[e](t);
      } catch (a) {
        throw Te(a), a;
      }
    }, true);
  }, n.techGet_ = function(e) {
    if (!(!this.tech_ || !this.tech_.isReady_)) {
      if (e in mg) return hg(this.middleware_, this.tech_, e);
      if (e in sl) return al(this.middleware_, this.tech_, e);
      try {
        return this.tech_[e]();
      } catch (t) {
        throw this.tech_[e] === void 0 ? (Te("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t), t) : t.name === "TypeError" ? (Te("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), this.tech_.isReady_ = false, t) : (Te(t), t);
      }
    }
  }, n.play = function() {
    var e = this, t = this.options_.Promise || P.Promise;
    return t ? new t(function(a) {
      e.play_(a);
    }) : this.play_();
  }, n.play_ = function(e) {
    var t = this;
    e === void 0 && (e = Vt), this.playCallbacks_.push(e);
    var a = !!(!this.changingSrc_ && (this.src() || this.currentSrc())), o = !!(na || ht);
    if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !a) {
      this.waitToPlay_ = function(c) {
        t.play_();
      }, this.one(["ready", "loadstart"], this.waitToPlay_), !a && o && this.load();
      return;
    }
    var u = this.techGet_("play"), l = o && this.hasClass("vjs-ended");
    l && this.resetProgressBar_(), u === null ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(u);
  }, n.runPlayTerminatedQueue_ = function() {
    var e = this.playTerminatedQueue_.slice(0);
    this.playTerminatedQueue_ = [], e.forEach(function(t) {
      t();
    });
  }, n.runPlayCallbacks_ = function(e) {
    var t = this.playCallbacks_.slice(0);
    this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t.forEach(function(a) {
      a(e);
    });
  }, n.pause = function() {
    this.techCall_("pause");
  }, n.paused = function() {
    return this.techGet_("paused") !== false;
  }, n.played = function() {
    return this.techGet_("played") || Ir(0, 0);
  }, n.scrubbing = function(e) {
    if (typeof e > "u") return this.scrubbing_;
    this.scrubbing_ = !!e, this.techCall_("setScrubbing", this.scrubbing_), e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing");
  }, n.currentTime = function(e) {
    if (typeof e < "u") {
      if (e < 0 && (e = 0), !this.isReady_ || this.changingSrc_ || !this.tech_ || !this.tech_.isReady_) {
        this.cache_.initTime = e, this.off("canplay", this.boundApplyInitTime_), this.one("canplay", this.boundApplyInitTime_);
        return;
      }
      this.techCall_("setCurrentTime", e), this.cache_.initTime = 0;
      return;
    }
    return this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime;
  }, n.applyInitTime_ = function() {
    this.currentTime(this.cache_.initTime);
  }, n.duration = function(e) {
    if (e === void 0) return this.cache_.duration !== void 0 ? this.cache_.duration : NaN;
    e = parseFloat(e), e < 0 && (e = 1 / 0), e !== this.cache_.duration && (this.cache_.duration = e, e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(e) || this.trigger("durationchange"));
  }, n.remainingTime = function() {
    return this.duration() - this.currentTime();
  }, n.remainingTimeDisplay = function() {
    return Math.floor(this.duration()) - Math.floor(this.currentTime());
  }, n.buffered = function() {
    var e = this.techGet_("buffered");
    return (!e || !e.length) && (e = Ir(0, 0)), e;
  }, n.bufferedPercent = function() {
    return Nd(this.buffered(), this.duration());
  }, n.bufferedEnd = function() {
    var e = this.buffered(), t = this.duration(), a = e.end(e.length - 1);
    return a > t && (a = t), a;
  }, n.volume = function(e) {
    var t;
    if (e !== void 0) {
      t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), t > 0 && this.lastVolume_(t);
      return;
    }
    return t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t;
  }, n.muted = function(e) {
    if (e !== void 0) {
      this.techCall_("setMuted", e);
      return;
    }
    return this.techGet_("muted") || false;
  }, n.defaultMuted = function(e) {
    return e !== void 0 ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || false;
  }, n.lastVolume_ = function(e) {
    if (e !== void 0 && e !== 0) {
      this.cache_.lastVolume = e;
      return;
    }
    return this.cache_.lastVolume;
  }, n.supportsFullScreen = function() {
    return this.techGet_("supportsFullScreen") || false;
  }, n.isFullscreen = function(e) {
    if (e !== void 0) {
      var t = this.isFullscreen_;
      this.isFullscreen_ = !!e, this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"), this.toggleFullscreenClass_();
      return;
    }
    return this.isFullscreen_;
  }, n.requestFullscreen = function(e) {
    var t = this.options_.Promise || P.Promise;
    if (t) {
      var a = this;
      return new t(function(o, u) {
        function l() {
          a.off("fullscreenerror", m), a.off("fullscreenchange", c);
        }
        function c() {
          l(), o();
        }
        function m(_, C) {
          l(), u(C);
        }
        a.one("fullscreenchange", c), a.one("fullscreenerror", m);
        var g = a.requestFullscreenHelper_(e);
        g && (g.then(l, l), g.then(o, u));
      });
    }
    return this.requestFullscreenHelper_();
  }, n.requestFullscreenHelper_ = function(e) {
    var t = this, a;
    if (this.fsApi_.prefixed || (a = this.options_.fullscreen && this.options_.fullscreen.options || {}, e !== void 0 && (a = e)), this.fsApi_.requestFullscreen) {
      var o = this.el_[this.fsApi_.requestFullscreen](a);
      return o && o.then(function() {
        return t.isFullscreen(true);
      }, function() {
        return t.isFullscreen(false);
      }), o;
    } else this.tech_.supportsFullScreen() && !this.options_.preferFullWindow ? this.techCall_("enterFullScreen") : this.enterFullWindow();
  }, n.exitFullscreen = function() {
    var e = this.options_.Promise || P.Promise;
    if (e) {
      var t = this;
      return new e(function(a, o) {
        function u() {
          t.off("fullscreenerror", c), t.off("fullscreenchange", l);
        }
        function l() {
          u(), a();
        }
        function c(g, _) {
          u(), o(_);
        }
        t.one("fullscreenchange", l), t.one("fullscreenerror", c);
        var m = t.exitFullscreenHelper_();
        m && (m.then(u, u), m.then(a, o));
      });
    }
    return this.exitFullscreenHelper_();
  }, n.exitFullscreenHelper_ = function() {
    var e = this;
    if (this.fsApi_.requestFullscreen) {
      var t = ae[this.fsApi_.exitFullscreen]();
      return t && Vt(t.then(function() {
        return e.isFullscreen(false);
      })), t;
    } else this.tech_.supportsFullScreen() && !this.options_.preferFullWindow ? this.techCall_("exitFullScreen") : this.exitFullWindow();
  }, n.enterFullWindow = function() {
    this.isFullscreen(true), this.isFullWindow = true, this.docOrigOverflow = ae.documentElement.style.overflow, bt(ae, "keydown", this.boundFullWindowOnEscKey_), ae.documentElement.style.overflow = "hidden", Zt(ae.body, "vjs-full-window"), this.trigger("enterFullWindow");
  }, n.fullWindowOnEscKey = function(e) {
    _e.isEventKey(e, "Esc") && this.isFullscreen() === true && (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen());
  }, n.exitFullWindow = function() {
    this.isFullscreen(false), this.isFullWindow = false, at(ae, "keydown", this.boundFullWindowOnEscKey_), ae.documentElement.style.overflow = this.docOrigOverflow, qi(ae.body, "vjs-full-window"), this.trigger("exitFullWindow");
  }, n.disablePictureInPicture = function(e) {
    if (e === void 0) return this.techGet_("disablePictureInPicture");
    this.techCall_("setDisablePictureInPicture", e), this.options_.disablePictureInPicture = e, this.trigger("disablepictureinpicturechanged");
  }, n.isInPictureInPicture = function(e) {
    if (e !== void 0) {
      this.isInPictureInPicture_ = !!e, this.togglePictureInPictureClass_();
      return;
    }
    return !!this.isInPictureInPicture_;
  }, n.requestPictureInPicture = function() {
    if ("pictureInPictureEnabled" in ae && this.disablePictureInPicture() === false) return this.techGet_("requestPictureInPicture");
  }, n.exitPictureInPicture = function() {
    if ("pictureInPictureEnabled" in ae) return ae.exitPictureInPicture();
  }, n.handleKeyDown = function(e) {
    var t = this.options_.userActions;
    if (!(!t || !t.hotkeys)) {
      var a = function(u) {
        var l = u.tagName.toLowerCase();
        if (u.isContentEditable) return true;
        var c = ["button", "checkbox", "hidden", "radio", "reset", "submit"];
        if (l === "input") return c.indexOf(u.type) === -1;
        var m = ["textarea"];
        return m.indexOf(l) !== -1;
      };
      a(this.el_.ownerDocument.activeElement) || (typeof t.hotkeys == "function" ? t.hotkeys.call(this, e) : this.handleHotkeys(e));
    }
  }, n.handleHotkeys = function(e) {
    var t = this.options_.userActions ? this.options_.userActions.hotkeys : {}, a = t.fullscreenKey, o = a === void 0 ? function(w) {
      return _e.isEventKey(w, "f");
    } : a, u = t.muteKey, l = u === void 0 ? function(w) {
      return _e.isEventKey(w, "m");
    } : u, c = t.playPauseKey, m = c === void 0 ? function(w) {
      return _e.isEventKey(w, "k") || _e.isEventKey(w, "Space");
    } : c;
    if (o.call(this, e)) {
      e.preventDefault(), e.stopPropagation();
      var g = te.getComponent("FullscreenToggle");
      ae[this.fsApi_.fullscreenEnabled] !== false && g.prototype.handleClick.call(this, e);
    } else if (l.call(this, e)) {
      e.preventDefault(), e.stopPropagation();
      var _ = te.getComponent("MuteToggle");
      _.prototype.handleClick.call(this, e);
    } else if (m.call(this, e)) {
      e.preventDefault(), e.stopPropagation();
      var C = te.getComponent("PlayToggle");
      C.prototype.handleClick.call(this, e);
    }
  }, n.canPlayType = function(e) {
    for (var t, a = 0, o = this.options_.techOrder; a < o.length; a++) {
      var u = o[a], l = we.getTech(u);
      if (l || (l = te.getComponent(u)), !l) {
        Te.error('The "' + u + '" tech is undefined. Skipped browser support check for that tech.');
        continue;
      }
      if (l.isSupported() && (t = l.canPlayType(e), t)) return t;
    }
    return "";
  }, n.selectSource = function(e) {
    var t = this, a = this.options_.techOrder.map(function(m) {
      return [m, we.getTech(m)];
    }).filter(function(m) {
      var g = m[0], _ = m[1];
      return _ ? _.isSupported() : (Te.error('The "' + g + '" tech is undefined. Skipped browser support check for that tech.'), false);
    }), o = function(g, _, C) {
      var w;
      return g.some(function(S) {
        return _.some(function(F) {
          if (w = C(S, F), w) return true;
        });
      }), w;
    }, u, l = function(g) {
      return function(_, C) {
        return g(C, _);
      };
    }, c = function(g, _) {
      var C = g[0], w = g[1];
      if (w.canPlaySource(_, t.options_[C.toLowerCase()])) return { source: _, tech: C };
    };
    return this.options_.sourceOrder ? u = o(e, a, l(c)) : u = o(a, e, c), u || false;
  }, n.handleSrc_ = function(e, t) {
    var a = this;
    if (typeof e > "u") return this.cache_.src || "";
    this.resetRetryOnError_ && this.resetRetryOnError_();
    var o = xg(e);
    if (!o.length) {
      this.setTimeout(function() {
        this.error({ code: 4, message: this.options_.notSupportedMessage });
      }, 0);
      return;
    }
    if (this.changingSrc_ = true, t || (this.cache_.sources = o), this.updateSourceCaches_(o[0]), cg(this, o[0], function(c, m) {
      a.middleware_ = m, t || (a.cache_.sources = o), a.updateSourceCaches_(c);
      var g = a.src_(c);
      if (g) {
        if (o.length > 1) return a.handleSrc_(o.slice(1));
        a.changingSrc_ = false, a.setTimeout(function() {
          this.error({ code: 4, message: this.options_.notSupportedMessage });
        }, 0), a.triggerReady();
        return;
      }
      fg(m, a.tech_);
    }), this.options_.retryOnError && o.length > 1) {
      var u = function() {
        a.error(null), a.handleSrc_(o.slice(1), true);
      }, l = function() {
        a.off("error", u);
      };
      this.one("error", u), this.one("playing", l), this.resetRetryOnError_ = function() {
        a.off("error", u), a.off("playing", l);
      };
    }
  }, n.src = function(e) {
    return this.handleSrc_(e, false);
  }, n.src_ = function(e) {
    var t = this, a = this.selectSource([e]);
    return a ? zm(a.tech, this.techName_) ? (this.ready(function() {
      this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = false;
    }, true), false) : (this.changingSrc_ = true, this.loadTech_(a.tech, a.source), this.tech_.ready(function() {
      t.changingSrc_ = false;
    }), false) : true;
  }, n.load = function() {
    this.techCall_("load");
  }, n.reset = function() {
    var e = this, t = this.options_.Promise || P.Promise;
    if (this.paused() || !t) this.doReset_();
    else {
      var a = this.play();
      Vt(a.then(function() {
        return e.doReset_();
      }));
    }
  }, n.doReset_ = function() {
    this.tech_ && this.tech_.clearTracks("text"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), er(this) && this.trigger("playerreset");
  }, n.resetControlBarUI_ = function() {
    this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_();
  }, n.resetProgressBar_ = function() {
    this.currentTime(0);
    var e = this.controlBar || {}, t = e.durationDisplay, a = e.remainingTimeDisplay;
    t && t.updateContent(), a && a.updateContent();
  }, n.resetPlaybackRate_ = function() {
    this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_();
  }, n.resetVolumeBar_ = function() {
    this.volume(1), this.trigger("volumechange");
  }, n.currentSources = function() {
    var e = this.currentSource(), t = [];
    return Object.keys(e).length !== 0 && t.push(e), this.cache_.sources || t;
  }, n.currentSource = function() {
    return this.cache_.source || {};
  }, n.currentSrc = function() {
    return this.currentSource() && this.currentSource().src || "";
  }, n.currentType = function() {
    return this.currentSource() && this.currentSource().type || "";
  }, n.preload = function(e) {
    if (e !== void 0) {
      this.techCall_("setPreload", e), this.options_.preload = e;
      return;
    }
    return this.techGet_("preload");
  }, n.autoplay = function(e) {
    if (e === void 0) return this.options_.autoplay || false;
    var t;
    typeof e == "string" && /(any|play|muted)/.test(e) || e === true && this.options_.normalizeAutoplay ? (this.options_.autoplay = e, this.manualAutoplay_(typeof e == "string" ? e : "play"), t = false) : e ? this.options_.autoplay = true : this.options_.autoplay = false, t = typeof t > "u" ? this.options_.autoplay : t, this.tech_ && this.techCall_("setAutoplay", t);
  }, n.playsinline = function(e) {
    return e !== void 0 ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline");
  }, n.loop = function(e) {
    if (e !== void 0) {
      this.techCall_("setLoop", e), this.options_.loop = e;
      return;
    }
    return this.techGet_("loop");
  }, n.poster = function(e) {
    if (e === void 0) return this.poster_;
    e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = false, this.trigger("posterchange"));
  }, n.handleTechPosterChange_ = function() {
    if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
      var e = this.tech_.poster() || "";
      e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = true, this.trigger("posterchange"));
    }
  }, n.controls = function(e) {
    if (e === void 0) return !!this.controls_;
    e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()));
  }, n.usingNativeControls = function(e) {
    if (e === void 0) return !!this.usingNativeControls_;
    e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")));
  }, n.error = function(e) {
    var t = this;
    if (e === void 0) return this.error_ || null;
    if (fr("beforeerror").forEach(function(o) {
      var u = o(t, e);
      if (!(tr(u) && !Array.isArray(u) || typeof u == "string" || typeof u == "number" || u === null)) {
        t.log.error("please return a value that MediaError expects in beforeerror hooks");
        return;
      }
      e = u;
    }), this.options_.suppressNotSupportedError && e && e.code === 4) {
      var a = function() {
        this.error(e);
      };
      this.options_.suppressNotSupportedError = false, this.any(["click", "touchstart"], a), this.one("loadstart", function() {
        this.off(["click", "touchstart"], a);
      });
      return;
    }
    if (e === null) {
      this.error_ = e, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close();
      return;
    }
    this.error_ = new ft(e), this.addClass("vjs-error"), Te.error("(CODE:" + this.error_.code + " " + ft.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), fr("error").forEach(function(o) {
      return o(t, t.error_);
    });
  }, n.reportUserActivity = function(e) {
    this.userActivity_ = true;
  }, n.userActive = function(e) {
    if (e === void 0) return this.userActive_;
    if (e = !!e, e !== this.userActive_) {
      if (this.userActive_ = e, this.userActive_) {
        this.userActivity_ = true, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive");
        return;
      }
      this.tech_ && this.tech_.one("mousemove", function(t) {
        t.stopPropagation(), t.preventDefault();
      }), this.userActivity_ = false, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive");
    }
  }, n.listenForUserActivity_ = function() {
    var e, t, a, o = Re(this, this.reportUserActivity), u = function(C) {
      (C.screenX !== t || C.screenY !== a) && (t = C.screenX, a = C.screenY, o());
    }, l = function() {
      o(), this.clearInterval(e), e = this.setInterval(o, 250);
    }, c = function(C) {
      o(), this.clearInterval(e);
    };
    this.on("mousedown", l), this.on("mousemove", u), this.on("mouseup", c), this.on("mouseleave", c);
    var m = this.getChild("controlBar");
    m && !ht && !ir && (m.on("mouseenter", function(_) {
      this.player().options_.inactivityTimeout !== 0 && (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout), this.player().options_.inactivityTimeout = 0;
    }), m.on("mouseleave", function(_) {
      this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout;
    })), this.on("keydown", o), this.on("keyup", o);
    var g;
    this.setInterval(function() {
      if (this.userActivity_) {
        this.userActivity_ = false, this.userActive(true), this.clearTimeout(g);
        var _ = this.options_.inactivityTimeout;
        _ <= 0 || (g = this.setTimeout(function() {
          this.userActivity_ || this.userActive(false);
        }, _));
      }
    }, 250);
  }, n.playbackRate = function(e) {
    if (e !== void 0) {
      this.techCall_("setPlaybackRate", e);
      return;
    }
    return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
  }, n.defaultPlaybackRate = function(e) {
    return e !== void 0 ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1;
  }, n.isAudio = function(e) {
    if (e !== void 0) {
      this.isAudio_ = !!e;
      return;
    }
    return !!this.isAudio_;
  }, n.enableAudioOnlyUI_ = function() {
    var e = this;
    this.addClass("vjs-audio-only-mode");
    var t = this.children(), a = this.getChild("ControlBar"), o = a && a.currentHeight();
    t.forEach(function(u) {
      u !== a && u.el_ && !u.hasClass("vjs-hidden") && (u.hide(), e.audioOnlyCache_.hiddenChildren.push(u));
    }), this.audioOnlyCache_.playerHeight = this.currentHeight(), this.height(o), this.trigger("audioonlymodechange");
  }, n.disableAudioOnlyUI_ = function() {
    this.removeClass("vjs-audio-only-mode"), this.audioOnlyCache_.hiddenChildren.forEach(function(e) {
      return e.show();
    }), this.height(this.audioOnlyCache_.playerHeight), this.trigger("audioonlymodechange");
  }, n.audioOnlyMode = function(e) {
    var t = this;
    if (typeof e != "boolean" || e === this.audioOnlyMode_) return this.audioOnlyMode_;
    this.audioOnlyMode_ = e;
    var a = this.options_.Promise || P.Promise;
    if (a) {
      if (e) {
        var o = [];
        return this.isInPictureInPicture() && o.push(this.exitPictureInPicture()), this.isFullscreen() && o.push(this.exitFullscreen()), this.audioPosterMode() && o.push(this.audioPosterMode(false)), a.all(o).then(function() {
          return t.enableAudioOnlyUI_();
        });
      }
      return a.resolve().then(function() {
        return t.disableAudioOnlyUI_();
      });
    }
    e ? (this.isInPictureInPicture() && this.exitPictureInPicture(), this.isFullscreen() && this.exitFullscreen(), this.enableAudioOnlyUI_()) : this.disableAudioOnlyUI_();
  }, n.enablePosterModeUI_ = function() {
    var e = this.tech_ && this.tech_;
    e.hide(), this.addClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange");
  }, n.disablePosterModeUI_ = function() {
    var e = this.tech_ && this.tech_;
    e.show(), this.removeClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange");
  }, n.audioPosterMode = function(e) {
    var t = this;
    if (typeof e != "boolean" || e === this.audioPosterMode_) return this.audioPosterMode_;
    this.audioPosterMode_ = e;
    var a = this.options_.Promise || P.Promise;
    if (a) {
      if (e) {
        if (this.audioOnlyMode()) {
          var o = this.audioOnlyMode(false);
          return o.then(function() {
            t.enablePosterModeUI_();
          });
        }
        return a.resolve().then(function() {
          t.enablePosterModeUI_();
        });
      }
      return a.resolve().then(function() {
        t.disablePosterModeUI_();
      });
    }
    if (e) {
      this.audioOnlyMode() && this.audioOnlyMode(false), this.enablePosterModeUI_();
      return;
    }
    this.disablePosterModeUI_();
  }, n.addTextTrack = function(e, t, a) {
    if (this.tech_) return this.tech_.addTextTrack(e, t, a);
  }, n.addRemoteTextTrack = function(e, t) {
    if (this.tech_) return this.tech_.addRemoteTextTrack(e, t);
  }, n.removeRemoteTextTrack = function(e) {
    e === void 0 && (e = {});
    var t = e, a = t.track;
    if (a || (a = e), this.tech_) return this.tech_.removeRemoteTextTrack(a);
  }, n.getVideoPlaybackQuality = function() {
    return this.techGet_("getVideoPlaybackQuality");
  }, n.videoWidth = function() {
    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
  }, n.videoHeight = function() {
    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
  }, n.language = function(e) {
    if (e === void 0) return this.language_;
    this.language_ !== String(e).toLowerCase() && (this.language_ = String(e).toLowerCase(), er(this) && this.trigger("languagechange"));
  }, n.languages = function() {
    return Fe(r.prototype.options_.languages, this.languages_);
  }, n.toJSON = function() {
    var e = Fe(this.options_), t = e.tracks;
    e.tracks = [];
    for (var a = 0; a < t.length; a++) {
      var o = t[a];
      o = Fe(o), o.player = void 0, e.tracks[a] = o;
    }
    return e;
  }, n.createModal = function(e, t) {
    var a = this;
    t = t || {}, t.content = e || "";
    var o = new ai(this, t);
    return this.addChild(o), o.on("dispose", function() {
      a.removeChild(o);
    }), o.open(), o;
  }, n.updateCurrentBreakpoint_ = function() {
    if (this.responsive()) for (var e = this.currentBreakpoint(), t = this.currentWidth(), a = 0; a < Ss.length; a++) {
      var o = Ss[a], u = this.breakpoints_[o];
      if (t <= u) {
        if (e === o) return;
        e && this.removeClass(Pn[e]), this.addClass(Pn[o]), this.breakpoint_ = o;
        break;
      }
    }
  }, n.removeCurrentBreakpoint_ = function() {
    var e = this.currentBreakpointClass();
    this.breakpoint_ = "", e && this.removeClass(e);
  }, n.breakpoints = function(e) {
    return e === void 0 ? Ue(this.breakpoints_) : (this.breakpoint_ = "", this.breakpoints_ = Ue({}, Jg, e), this.updateCurrentBreakpoint_(), Ue(this.breakpoints_));
  }, n.responsive = function(e) {
    if (e === void 0) return this.responsive_;
    e = !!e;
    var t = this.responsive_;
    if (e !== t) return this.responsive_ = e, e ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e;
  }, n.currentBreakpoint = function() {
    return this.breakpoint_;
  }, n.currentBreakpointClass = function() {
    return Pn[this.breakpoint_] || "";
  }, n.loadMedia = function(e, t) {
    var a = this;
    if (!(!e || typeof e != "object")) {
      this.reset(), this.cache_.media = Fe(e);
      var o = this.cache_.media, u = o.artwork, l = o.poster, c = o.src, m = o.textTracks;
      !u && l && (this.cache_.media.artwork = [{ src: l, type: Bn(l) }]), c && this.src(c), l && this.poster(l), Array.isArray(m) && m.forEach(function(g) {
        return a.addRemoteTextTrack(g, false);
      }), this.ready(t);
    }
  }, n.getMedia = function() {
    if (!this.cache_.media) {
      var e = this.poster(), t = this.currentSources(), a = Array.prototype.map.call(this.remoteTextTracks(), function(u) {
        return { kind: u.kind, label: u.label, language: u.language, src: u.src };
      }), o = { src: t, textTracks: a };
      return e && (o.poster = e, o.artwork = [{ src: o.poster, type: Bn(o.poster) }]), o;
    }
    return Fe(this.cache_.media);
  }, r.getTagSettings = function(e) {
    var t = { sources: [], tracks: [] }, a = Yt(e), o = a["data-setup"];
    if (Pr(e, "vjs-fill") && (a.fill = true), Pr(e, "vjs-fluid") && (a.fluid = true), o !== null) {
      var u = Ph(o || "{}"), l = u[0], c = u[1];
      l && Te.error(l), Ue(a, c);
    }
    if (Ue(t, a), e.hasChildNodes()) for (var m = e.childNodes, g = 0, _ = m.length; g < _; g++) {
      var C = m[g], w = C.nodeName.toLowerCase();
      w === "source" ? t.sources.push(Yt(C)) : w === "track" && t.tracks.push(Yt(C));
    }
    return t;
  }, n.flexNotSupported_ = function() {
    var e = ae.createElement("i");
    return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style);
  }, n.debug = function(e) {
    if (e === void 0) return this.debugEnabled_;
    e ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, this.log.level("debug"), this.debugEnabled_ = true) : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = false);
  }, n.playbackRates = function(e) {
    if (e === void 0) return this.cache_.playbackRates;
    Array.isArray(e) && e.every(function(t) {
      return typeof t == "number";
    }) && (this.cache_.playbackRates = e, this.trigger("playbackrateschange"));
  }, r;
})(te);
lt.names.forEach(function(s12) {
  var r = lt[s12];
  Ke.prototype[r.getterName] = function() {
    return this.tech_ ? this.tech_[r.getterName]() : (this[r.privateName] = this[r.privateName] || new r.ListClass(), this[r.privateName]);
  };
});
Ke.prototype.crossorigin = Ke.prototype.crossOrigin;
Ke.players = {};
var xi = P.navigator;
Ke.prototype.options_ = { techOrder: we.defaultTechOrder_, html5: {}, inactivityTimeout: 2e3, playbackRates: [], liveui: false, children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"], language: xi && (xi.languages && xi.languages[0] || xi.userLanguage || xi.language) || "en", languages: {}, notSupportedMessage: "No compatible source was found for this media.", normalizeAutoplay: false, fullscreen: { options: { navigationUI: "hide" } }, breakpoints: {}, responsive: false, audioOnlyMode: false, audioPosterMode: false };
["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(s12) {
  Ke.prototype[s12] = function() {
    return this.techGet_(s12);
  };
});
hc.forEach(function(s12) {
  Ke.prototype["handleTech" + Ge(s12) + "_"] = function() {
    return this.trigger(s12);
  };
});
te.registerComponent("Player", Ke);
var Vn = "plugin", Gr = "activePlugins_", Vr = {}, jn = function(r) {
  return Vr.hasOwnProperty(r);
}, In = function(r) {
  return jn(r) ? Vr[r] : void 0;
}, pc = function(r, n) {
  r[Gr] = r[Gr] || {}, r[Gr][n] = true;
}, Hn = function(r, n, i) {
  var e = (i ? "before" : "") + "pluginsetup";
  r.trigger(e, n), r.trigger(e + ":" + n.name, n);
}, Zg = function(r, n) {
  var i = function() {
    Hn(this, { name: r, plugin: n, instance: null }, true);
    var t = n.apply(this, arguments);
    return pc(this, r), Hn(this, { name: r, plugin: n, instance: t }), t;
  };
  return Object.keys(n).forEach(function(e) {
    i[e] = n[e];
  }), i;
}, Tl = function(r, n) {
  return n.prototype.name = r, function() {
    Hn(this, { name: r, plugin: n, instance: null }, true);
    for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
    var a = Gl(n, [this].concat(e));
    return this[r] = function() {
      return a;
    }, Hn(this, a.getEventHash()), a;
  };
}, Wt = (function() {
  function s12(n) {
    if (this.constructor === s12) throw new Error("Plugin must be sub-classed; not directly instantiated.");
    this.player = n, this.log || (this.log = this.player.log.createLogger(this.name)), $s(this), delete this.trigger, Md(this, this.constructor.defaultState), pc(n, this.name), this.dispose = this.dispose.bind(this), n.on("dispose", this.dispose);
  }
  var r = s12.prototype;
  return r.version = function() {
    return this.constructor.VERSION;
  }, r.getEventHash = function(i) {
    return i === void 0 && (i = {}), i.name = this.name, i.plugin = this.constructor, i.instance = this, i;
  }, r.trigger = function(i, e) {
    return e === void 0 && (e = {}), ni(this.eventBusEl_, i, this.getEventHash(e));
  }, r.handleStateChanged = function(i) {
  }, r.dispose = function() {
    var i = this.name, e = this.player;
    this.trigger("dispose"), this.off(), e.off("dispose", this.dispose), e[Gr][i] = false, this.player = this.state = null, e[i] = Tl(i, Vr[i]);
  }, s12.isBasic = function(i) {
    var e = typeof i == "string" ? In(i) : i;
    return typeof e == "function" && !s12.prototype.isPrototypeOf(e.prototype);
  }, s12.registerPlugin = function(i, e) {
    if (typeof i != "string") throw new Error('Illegal plugin name, "' + i + '", must be a string, was ' + typeof i + ".");
    if (jn(i)) Te.warn('A plugin named "' + i + '" already exists. You may want to avoid re-registering plugins!');
    else if (Ke.prototype.hasOwnProperty(i)) throw new Error('Illegal plugin name, "' + i + '", cannot share a name with an existing player method!');
    if (typeof e != "function") throw new Error('Illegal plugin for "' + i + '", must be a function, was ' + typeof e + ".");
    return Vr[i] = e, i !== Vn && (s12.isBasic(e) ? Ke.prototype[i] = Zg(i, e) : Ke.prototype[i] = Tl(i, e)), e;
  }, s12.deregisterPlugin = function(i) {
    if (i === Vn) throw new Error("Cannot de-register base plugin.");
    jn(i) && (delete Vr[i], delete Ke.prototype[i]);
  }, s12.getPlugins = function(i) {
    i === void 0 && (i = Object.keys(Vr));
    var e;
    return i.forEach(function(t) {
      var a = In(t);
      a && (e = e || {}, e[t] = a);
    }), e;
  }, s12.getPluginVersion = function(i) {
    var e = In(i);
    return e && e.VERSION || "";
  }, s12;
})();
Wt.getPlugin = In;
Wt.BASE_PLUGIN_NAME = Vn;
Wt.registerPlugin(Vn, Wt);
Ke.prototype.usingPlugin = function(s12) {
  return !!this[Gr] && this[Gr][s12] === true;
};
Ke.prototype.hasPlugin = function(s12) {
  return !!jn(s12);
};
var bl = false, ev = function(r, n) {
  n === void 0 && (n = {}), bl || (Te.warn("videojs.extend is deprecated as of Video.js 7.22.0 and will be removed in Video.js 8.0.0"), bl = true);
  var i = function() {
    r.apply(this, arguments);
  }, e = {};
  typeof n == "object" ? (n.constructor !== Object.prototype.constructor && (i = n.constructor), e = n) : typeof n == "function" && (i = n), Vh(i, r), r && (i.super_ = r);
  for (var t in e) e.hasOwnProperty(t) && (i.prototype[t] = e[t]);
  return i;
}, mc = function(r) {
  return r.indexOf("#") === 0 ? r.slice(1) : r;
};
function q(s12, r, n) {
  var i = q.getPlayer(s12);
  if (i) return r && Te.warn('Player "' + s12 + '" is already initialised. Options will not be applied.'), n && i.ready(n), i;
  var e = typeof s12 == "string" ? hr("#" + mc(s12)) : s12;
  if (!ii(e)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
  (!e.ownerDocument.defaultView || !e.ownerDocument.body.contains(e)) && Te.warn("The element supplied is not included in the DOM"), r = r || {}, r.restoreEl === true && (r.restoreEl = (e.parentNode && e.parentNode.hasAttribute("data-vjs-player") ? e.parentNode : e).cloneNode(true)), fr("beforesetup").forEach(function(a) {
    var o = a(e, Fe(r));
    if (!tr(o) || Array.isArray(o)) {
      Te.error("please return an object in beforesetup hooks");
      return;
    }
    r = Fe(r, o);
  });
  var t = te.getComponent("Player");
  return i = new t(e, r, n), fr("setup").forEach(function(a) {
    return a(i);
  }), i;
}
q.hooks_ = Qt;
q.hooks = fr;
q.hook = Dm;
q.hookOnce = wm;
q.removeHook = od;
if (P.VIDEOJS_NO_DYNAMIC_STYLE !== true && ri()) {
  var Sn = hr(".vjs-styles-defaults");
  if (!Sn) {
    Sn = Pd("vjs-styles-defaults");
    var is = hr("head");
    is && is.insertBefore(Sn, is.firstChild), Id(Sn, `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: 56.25%
      }
    `);
  }
}
vs(1, q);
q.VERSION = sd;
q.options = Ke.prototype.options_;
q.getPlayers = function() {
  return Ke.players;
};
q.getPlayer = function(s12) {
  var r = Ke.players, n;
  if (typeof s12 == "string") {
    var i = mc(s12), e = r[i];
    if (e) return e;
    n = hr("#" + i);
  } else n = s12;
  if (ii(n)) {
    var t = n, a = t.player, o = t.playerId;
    if (a || r[o]) return a || r[o];
  }
};
q.getAllPlayers = function() {
  return Object.keys(Ke.players).map(function(s12) {
    return Ke.players[s12];
  }).filter(Boolean);
};
q.players = Ke.players;
q.getComponent = te.getComponent;
q.registerComponent = function(s12, r) {
  we.isTech(r) && Te.warn("The " + s12 + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), te.registerComponent.call(te, s12, r);
};
q.getTech = we.getTech;
q.registerTech = we.registerTech;
q.use = dg;
Object.defineProperty(q, "middleware", { value: {}, writeable: false, enumerable: true });
Object.defineProperty(q.middleware, "TERMINATOR", { value: Nn, writeable: false, enumerable: true });
q.browser = Fm;
q.TOUCH_ENABLED = Yr;
q.extend = ev;
q.mergeOptions = Fe;
q.bind = Re;
q.registerPlugin = Wt.registerPlugin;
q.deregisterPlugin = Wt.deregisterPlugin;
q.plugin = function(s12, r) {
  return Te.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), Wt.registerPlugin(s12, r);
};
q.getPlugins = Wt.getPlugins;
q.getPlugin = Wt.getPlugin;
q.getPluginVersion = Wt.getPluginVersion;
q.addLanguage = function(s12, r) {
  var n;
  return s12 = ("" + s12).toLowerCase(), q.options.languages = Fe(q.options.languages, (n = {}, n[s12] = r, n)), q.options.languages[s12];
};
q.log = Te;
q.createLogger = ld;
q.createTimeRange = q.createTimeRanges = Ir;
q.formatTime = ti;
q.setFormatTime = kg;
q.resetFormatTime = Pg;
q.parseUrl = Qs;
q.isCrossOrigin = da;
q.EventTarget = Ze;
q.on = bt;
q.one = ua;
q.off = at;
q.trigger = ni;
q.xhr = Hl;
q.TextTrack = Vi;
q.AudioTrack = qd;
q.VideoTrack = Vd;
["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(s12) {
  q[s12] = function() {
    return Te.warn("videojs." + s12 + "() is deprecated; use videojs.dom." + s12 + "() instead"), wd[s12].apply(null, arguments);
  };
});
q.computedStyle = Li;
q.dom = wd;
q.url = sg;
q.defineLazyProperty = vo;
q.addLanguage("en", { "Non-Fullscreen": "Exit Fullscreen" });
/*! @name @videojs/http-streaming @version 2.16.3 @license Apache-2.0 */
var kt = Zn, Wn = function(r, n, i) {
  return r && i && i.responseURL && n !== i.responseURL ? i.responseURL : n;
}, Lt = function(r) {
  return q.log.debug ? q.log.debug.bind(q, "VHS:", r + " >") : function() {
  };
}, pr = 1 / 30, jt = pr * 3, gc = function(r, n) {
  var i = [], e;
  if (r && r.length) for (e = 0; e < r.length; e++) n(r.start(e), r.end(e)) && i.push([r.start(e), r.end(e)]);
  return q.createTimeRanges(i);
}, jr = function(r, n) {
  return gc(r, function(i, e) {
    return i - jt <= n && e + jt >= n;
  });
}, En = function(r, n) {
  return gc(r, function(i) {
    return i - pr >= n;
  });
}, tv = function(r) {
  if (r.length < 2) return q.createTimeRanges();
  for (var n = [], i = 1; i < r.length; i++) {
    var e = r.end(i - 1), t = r.start(i);
    n.push([e, t]);
  }
  return q.createTimeRanges(n);
}, rv = function(r, n) {
  var i = null, e = null, t = 0, a = [], o = [];
  if (!r || !r.length || !n || !n.length) return q.createTimeRange();
  for (var u = r.length; u--; ) a.push({ time: r.start(u), type: "start" }), a.push({ time: r.end(u), type: "end" });
  for (u = n.length; u--; ) a.push({ time: n.start(u), type: "start" }), a.push({ time: n.end(u), type: "end" });
  for (a.sort(function(l, c) {
    return l.time - c.time;
  }), u = 0; u < a.length; u++) a[u].type === "start" ? (t++, t === 2 && (i = a[u].time)) : a[u].type === "end" && (t--, t === 1 && (e = a[u].time)), i !== null && e !== null && (o.push([i, e]), i = null, e = null);
  return q.createTimeRanges(o);
}, vc = function(r) {
  var n = [];
  if (!r || !r.length) return "";
  for (var i = 0; i < r.length; i++) n.push(r.start(i) + " => " + r.end(i));
  return n.join(", ");
}, iv = function(r, n, i) {
  i === void 0 && (i = 1);
  var e = r.length ? r.end(r.length - 1) : 0;
  return (e - n) / i;
}, wr = function(r) {
  for (var n = [], i = 0; i < r.length; i++) n.push({ start: r.start(i), end: r.end(i) });
  return n;
}, nv = function(r, n) {
  if (r === n) return false;
  if (!r && n || !n && r || r.length !== n.length) return true;
  for (var i = 0; i < r.length; i++) if (r.start(i) !== n.start(i) || r.end(i) !== n.end(i)) return true;
  return false;
}, xl = function(r) {
  if (!(!r || !r.length || !r.end)) return r.end(r.length - 1);
}, yo = function(r, n) {
  var i = 0;
  if (!r || !r.length) return i;
  for (var e = 0; e < r.length; e++) {
    var t = r.start(e), a = r.end(e);
    if (!(n > a)) {
      if (n > t && n <= a) {
        i += a - n;
        continue;
      }
      i += a - t;
    }
  }
  return i;
}, Sl = q.createTimeRange, _o = function(r, n) {
  if (!n.preload) return n.duration;
  var i = 0;
  return (n.parts || []).forEach(function(e) {
    i += e.duration;
  }), (n.preloadHints || []).forEach(function(e) {
    e.type === "PART" && (i += r.partTargetDuration);
  }), i;
}, Es = function(r) {
  return (r.segments || []).reduce(function(n, i, e) {
    return i.parts ? i.parts.forEach(function(t, a) {
      n.push({ duration: t.duration, segmentIndex: e, partIndex: a, part: t, segment: i });
    }) : n.push({ duration: i.duration, segmentIndex: e, partIndex: null, segment: i, part: null }), n;
  }, []);
}, yc = function(r) {
  var n = r.segments && r.segments.length && r.segments[r.segments.length - 1];
  return n && n.parts || [];
}, _c = function(r) {
  var n = r.preloadSegment;
  if (n) {
    var i = n.parts, e = n.preloadHints, t = (e || []).reduce(function(a, o) {
      return a + (o.type === "PART" ? 1 : 0);
    }, 0);
    return t += i && i.length ? i.length : 0, t;
  }
}, Tc = function(r, n) {
  if (n.endList) return 0;
  if (r && r.suggestedPresentationDelay) return r.suggestedPresentationDelay;
  var i = yc(n).length > 0;
  return i && n.serverControl && n.serverControl.partHoldBack ? n.serverControl.partHoldBack : i && n.partTargetDuration ? n.partTargetDuration * 3 : n.serverControl && n.serverControl.holdBack ? n.serverControl.holdBack : n.targetDuration ? n.targetDuration * 3 : 0;
}, av = function(r, n) {
  var i = 0, e = n - r.mediaSequence, t = r.segments[e];
  if (t) {
    if (typeof t.start < "u") return { result: t.start, precise: true };
    if (typeof t.end < "u") return { result: t.end - t.duration, precise: true };
  }
  for (; e--; ) {
    if (t = r.segments[e], typeof t.end < "u") return { result: i + t.end, precise: true };
    if (i += _o(r, t), typeof t.start < "u") return { result: i + t.start, precise: true };
  }
  return { result: i, precise: false };
}, sv = function(r, n) {
  for (var i = 0, e, t = n - r.mediaSequence; t < r.segments.length; t++) {
    if (e = r.segments[t], typeof e.start < "u") return { result: e.start - i, precise: true };
    if (i += _o(r, e), typeof e.end < "u") return { result: e.end - i, precise: true };
  }
  return { result: -1, precise: false };
}, bc = function(r, n, i) {
  if (typeof n > "u" && (n = r.mediaSequence + r.segments.length), n < r.mediaSequence) return 0;
  var e = av(r, n);
  if (e.precise) return e.result;
  var t = sv(r, n);
  return t.precise ? t.result : e.result + i;
}, xc = function(r, n, i) {
  if (!r) return 0;
  if (typeof i != "number" && (i = 0), typeof n > "u") {
    if (r.totalDuration) return r.totalDuration;
    if (!r.endList) return P.Infinity;
  }
  return bc(r, n, i);
}, wi = function(r) {
  var n = r.defaultDuration, i = r.durationList, e = r.startIndex, t = r.endIndex, a = 0;
  if (e > t) {
    var o = [t, e];
    e = o[0], t = o[1];
  }
  if (e < 0) {
    for (var u = e; u < Math.min(0, t); u++) a += n;
    e = 0;
  }
  for (var l = e; l < t; l++) a += i[l].duration;
  return a;
}, Sc = function(r, n, i, e) {
  if (!r || !r.segments) return null;
  if (r.endList) return xc(r);
  if (n === null) return null;
  n = n || 0;
  var t = bc(r, r.mediaSequence + r.segments.length, n);
  return i && (e = typeof e == "number" ? e : Tc(null, r), t -= e), Math.max(0, t);
}, ov = function(r, n, i) {
  var e = true, t = n || 0, a = Sc(r, n, e, i);
  return a === null ? Sl() : Sl(t, a);
}, uv = function(r) {
  for (var n = r.playlist, i = r.currentTime, e = r.startingSegmentIndex, t = r.startingPartIndex, a = r.startTime, o = r.experimentalExactManifestTimings, u = i - a, l = Es(n), c = 0, m = 0; m < l.length; m++) {
    var g = l[m];
    if (e === g.segmentIndex && !(typeof t == "number" && typeof g.partIndex == "number" && t !== g.partIndex)) {
      c = m;
      break;
    }
  }
  if (u < 0) {
    if (c > 0) for (var _ = c - 1; _ >= 0; _--) {
      var C = l[_];
      if (u += C.duration, o) {
        if (u < 0) continue;
      } else if (u + pr <= 0) continue;
      return { partIndex: C.partIndex, segmentIndex: C.segmentIndex, startTime: a - wi({ defaultDuration: n.targetDuration, durationList: l, startIndex: c, endIndex: _ }) };
    }
    return { partIndex: l[0] && l[0].partIndex || null, segmentIndex: l[0] && l[0].segmentIndex || 0, startTime: i };
  }
  if (c < 0) {
    for (var w = c; w < 0; w++) if (u -= n.targetDuration, u < 0) return { partIndex: l[0] && l[0].partIndex || null, segmentIndex: l[0] && l[0].segmentIndex || 0, startTime: i };
    c = 0;
  }
  for (var S = c; S < l.length; S++) {
    var F = l[S];
    if (u -= F.duration, o) {
      if (u > 0) continue;
    } else if (u - pr >= 0) continue;
    return { partIndex: F.partIndex, segmentIndex: F.segmentIndex, startTime: a + wi({ defaultDuration: n.targetDuration, durationList: l, startIndex: c, endIndex: S }) };
  }
  return { segmentIndex: l[l.length - 1].segmentIndex, partIndex: l[l.length - 1].partIndex, startTime: i };
}, Ec = function(r) {
  return r.excludeUntil && r.excludeUntil > Date.now();
}, To = function(r) {
  return r.excludeUntil && r.excludeUntil === 1 / 0;
}, pa = function(r) {
  var n = Ec(r);
  return !r.disabled && !n;
}, lv = function(r) {
  return r.disabled;
}, dv = function(r) {
  for (var n = 0; n < r.segments.length; n++) if (r.segments[n].key) return true;
  return false;
}, Cc = function(r, n) {
  return n.attributes && n.attributes[r];
}, cv = function(r, n, i, e) {
  if (e === void 0 && (e = 0), !Cc("BANDWIDTH", i)) return NaN;
  var t = r * i.attributes.BANDWIDTH;
  return (t - e * 8) / n;
}, Cs = function(r, n) {
  if (r.playlists.length === 1) return true;
  var i = n.attributes.BANDWIDTH || Number.MAX_VALUE;
  return r.playlists.filter(function(e) {
    return pa(e) ? (e.attributes.BANDWIDTH || 0) < i : false;
  }).length === 0;
}, bo = function(r, n) {
  return !r && !n || !r && n || r && !n ? false : !!(r === n || r.id && n.id && r.id === n.id || r.resolvedUri && n.resolvedUri && r.resolvedUri === n.resolvedUri || r.uri && n.uri && r.uri === n.uri);
}, El = function(r, n) {
  var i = r && r.mediaGroups && r.mediaGroups.AUDIO || {}, e = false;
  for (var t in i) {
    for (var a in i[t]) if (e = n(i[t][a]), e) break;
    if (e) break;
  }
  return !!e;
}, Wi = function(r) {
  if (!r || !r.playlists || !r.playlists.length) {
    var n = El(r, function(a) {
      return a.playlists && a.playlists.length || a.uri;
    });
    return n;
  }
  for (var i = function(o) {
    var u = r.playlists[o], l = u.attributes && u.attributes.CODECS;
    if (l && l.split(",").every(function(m) {
      return Xl(m);
    })) return "continue";
    var c = El(r, function(m) {
      return bo(u, m);
    });
    return c ? "continue" : { v: false };
  }, e = 0; e < r.playlists.length; e++) {
    var t = i(e);
    if (t !== "continue" && typeof t == "object") return t.v;
  }
  return true;
}, vt = { liveEdgeDelay: Tc, duration: xc, seekable: ov, getMediaInfoForTime: uv, isEnabled: pa, isDisabled: lv, isBlacklisted: Ec, isIncompatible: To, playlistEnd: Sc, isAes: dv, hasAttribute: Cc, estimateSegmentRequestTime: cv, isLowestEnabledRendition: Cs, isAudioOnly: Wi, playlistMatch: bo, segmentDurationWithParts: _o }, Ac = q.log, xo = function(r, n) {
  return r + "-" + n;
}, fv = function(r, n, i) {
  return "placeholder-uri-" + r + "-" + n + "-" + i;
}, hv = function(r) {
  var n = r.onwarn, i = r.oninfo, e = r.manifestString, t = r.customTagParsers, a = t === void 0 ? [] : t, o = r.customTagMappers, u = o === void 0 ? [] : o, l = r.experimentalLLHLS, c = new Yh();
  n && c.on("warn", n), i && c.on("info", i), a.forEach(function(w) {
    return c.addParser(w);
  }), u.forEach(function(w) {
    return c.addTagMapper(w);
  }), c.push(e), c.end();
  var m = c.manifest;
  if (l || (["preloadSegment", "skip", "serverControl", "renditionReports", "partInf", "partTargetDuration"].forEach(function(w) {
    m.hasOwnProperty(w) && delete m[w];
  }), m.segments && m.segments.forEach(function(w) {
    ["parts", "preloadHints"].forEach(function(S) {
      w.hasOwnProperty(S) && delete w[S];
    });
  })), !m.targetDuration) {
    var g = 10;
    m.segments && m.segments.length && (g = m.segments.reduce(function(w, S) {
      return Math.max(w, S.duration);
    }, 0)), n && n("manifest has no targetDuration defaulting to " + g), m.targetDuration = g;
  }
  var _ = yc(m);
  if (_.length && !m.partTargetDuration) {
    var C = _.reduce(function(w, S) {
      return Math.max(w, S.duration);
    }, 0);
    n && (n("manifest has no partTargetDuration defaulting to " + C), Ac.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")), m.partTargetDuration = C;
  }
  return m;
}, li = function(r, n) {
  r.mediaGroups && ["AUDIO", "SUBTITLES"].forEach(function(i) {
    if (r.mediaGroups[i]) for (var e in r.mediaGroups[i]) for (var t in r.mediaGroups[i][e]) {
      var a = r.mediaGroups[i][e][t];
      n(a, i, e, t);
    }
  });
}, Dc = function(r) {
  var n = r.playlist, i = r.uri, e = r.id;
  n.id = e, n.playlistErrors_ = 0, i && (n.uri = i), n.attributes = n.attributes || {};
}, pv = function(r) {
  for (var n = r.playlists.length; n--; ) {
    var i = r.playlists[n];
    Dc({ playlist: i, id: xo(n, i.uri) }), i.resolvedUri = kt(r.uri, i.uri), r.playlists[i.id] = i, r.playlists[i.uri] = i, i.attributes.BANDWIDTH || Ac.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.");
  }
}, mv = function(r) {
  li(r, function(n) {
    n.uri && (n.resolvedUri = kt(r.uri, n.uri));
  });
}, gv = function(r, n) {
  var i = xo(0, n), e = { mediaGroups: { AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {} }, uri: P.location.href, resolvedUri: P.location.href, playlists: [{ uri: n, id: i, resolvedUri: n, attributes: {} }] };
  return e.playlists[i] = e.playlists[0], e.playlists[n] = e.playlists[0], e;
}, wc = function(r, n, i) {
  i === void 0 && (i = fv), r.uri = n;
  for (var e = 0; e < r.playlists.length; e++) if (!r.playlists[e].uri) {
    var t = "placeholder-uri-" + e;
    r.playlists[e].uri = t;
  }
  var a = Wi(r);
  li(r, function(o, u, l, c) {
    if (!o.playlists || !o.playlists.length) {
      if (a && u === "AUDIO" && !o.uri) for (var m = 0; m < r.playlists.length; m++) {
        var g = r.playlists[m];
        if (g.attributes && g.attributes.AUDIO && g.attributes.AUDIO === l) return;
      }
      o.playlists = [It({}, o)];
    }
    o.playlists.forEach(function(_, C) {
      var w = i(u, l, c, _), S = xo(C, w);
      _.uri ? _.resolvedUri = _.resolvedUri || kt(r.uri, _.uri) : (_.uri = C === 0 ? w : S, _.resolvedUri = _.uri), _.id = _.id || S, _.attributes = _.attributes || {}, r.playlists[_.id] = _, r.playlists[_.uri] = _;
    });
  }), pv(r), mv(r);
}, Gn = q.mergeOptions, vv = q.EventTarget, yv = function(r, n) {
  if (n.endList || !n.serverControl) return r;
  var i = {};
  if (n.serverControl.canBlockReload) {
    var e = n.preloadSegment, t = n.mediaSequence + n.segments.length;
    if (e) {
      var a = e.parts || [], o = _c(n) - 1;
      o > -1 && o !== a.length - 1 && (i._HLS_part = o), (o > -1 || a.length) && t--;
    }
    i._HLS_msn = t;
  }
  if (n.serverControl && n.serverControl.canSkipUntil && (i._HLS_skip = n.serverControl.canSkipDateranges ? "v2" : "YES"), Object.keys(i).length) {
    var u = new P.URL(r);
    ["_HLS_skip", "_HLS_msn", "_HLS_part"].forEach(function(l) {
      i.hasOwnProperty(l) && u.searchParams.set(l, i[l]);
    }), r = u.toString();
  }
  return r;
}, _v = function(r, n) {
  if (!r) return n;
  var i = Gn(r, n);
  if (r.preloadHints && !n.preloadHints && delete i.preloadHints, r.parts && !n.parts) delete i.parts;
  else if (r.parts && n.parts) for (var e = 0; e < n.parts.length; e++) r.parts && r.parts[e] && (i.parts[e] = Gn(r.parts[e], n.parts[e]));
  return !r.skipped && n.skipped && (i.skipped = false), r.preload && !n.preload && (i.preload = false), i;
}, Tv = function(r, n, i) {
  var e = r.slice(), t = n.slice();
  i = i || 0;
  for (var a = [], o, u = 0; u < t.length; u++) {
    var l = e[u + i], c = t[u];
    l ? (o = l.map || o, a.push(_v(l, c))) : (o && !c.map && (c.map = o), a.push(c));
  }
  return a;
}, kc = function(r, n) {
  !r.resolvedUri && r.uri && (r.resolvedUri = kt(n, r.uri)), r.key && !r.key.resolvedUri && (r.key.resolvedUri = kt(n, r.key.uri)), r.map && !r.map.resolvedUri && (r.map.resolvedUri = kt(n, r.map.uri)), r.map && r.map.key && !r.map.key.resolvedUri && (r.map.key.resolvedUri = kt(n, r.map.key.uri)), r.parts && r.parts.length && r.parts.forEach(function(i) {
    i.resolvedUri || (i.resolvedUri = kt(n, i.uri));
  }), r.preloadHints && r.preloadHints.length && r.preloadHints.forEach(function(i) {
    i.resolvedUri || (i.resolvedUri = kt(n, i.uri));
  });
}, Pc = function(r) {
  var n = r.segments || [], i = r.preloadSegment;
  if (i && i.parts && i.parts.length) {
    if (i.preloadHints) {
      for (var e = 0; e < i.preloadHints.length; e++) if (i.preloadHints[e].type === "MAP") return n;
    }
    i.duration = r.targetDuration, i.preload = true, n.push(i);
  }
  return n;
}, Ic = function(r, n) {
  return r === n || r.segments && n.segments && r.segments.length === n.segments.length && r.endList === n.endList && r.mediaSequence === n.mediaSequence && r.preloadSegment === n.preloadSegment;
}, As = function(r, n, i) {
  i === void 0 && (i = Ic);
  var e = Gn(r, {}), t = e.playlists[n.id];
  if (!t || i(t, n)) return null;
  n.segments = Pc(n);
  var a = Gn(t, n);
  if (a.preloadSegment && !n.preloadSegment && delete a.preloadSegment, t.segments) {
    if (n.skip) {
      n.segments = n.segments || [];
      for (var o = 0; o < n.skip.skippedSegments; o++) n.segments.unshift({ skipped: true });
    }
    a.segments = Tv(t.segments, n.segments, n.mediaSequence - t.mediaSequence);
  }
  a.segments.forEach(function(l) {
    kc(l, a.resolvedUri);
  });
  for (var u = 0; u < e.playlists.length; u++) e.playlists[u].id === n.id && (e.playlists[u] = a);
  return e.playlists[n.id] = a, e.playlists[n.uri] = a, li(r, function(l, c, m, g) {
    if (l.playlists) for (var _ = 0; _ < l.playlists.length; _++) n.id === l.playlists[_].id && (l.playlists[_] = a);
  }), e;
}, Ds = function(r, n) {
  var i = r.segments || [], e = i[i.length - 1], t = e && e.parts && e.parts[e.parts.length - 1], a = t && t.duration || e && e.duration;
  return n && a ? a * 1e3 : (r.partTargetDuration || r.targetDuration || 10) * 500;
}, Hr = (function(s12) {
  oe(r, s12);
  function r(i, e, t) {
    var a;
    if (t === void 0 && (t = {}), a = s12.call(this) || this, !i) throw new Error("A non-empty playlist URL or object is required");
    a.logger_ = Lt("PlaylistLoader");
    var o = t, u = o.withCredentials, l = u === void 0 ? false : u, c = o.handleManifestRedirects, m = c === void 0 ? false : c;
    a.src = i, a.vhs_ = e, a.withCredentials = l, a.handleManifestRedirects = m;
    var g = e.options_;
    return a.customTagParsers = g && g.customTagParsers || [], a.customTagMappers = g && g.customTagMappers || [], a.experimentalLLHLS = g && g.experimentalLLHLS || false, q.browser.IE_VERSION && (a.experimentalLLHLS = false), a.state = "HAVE_NOTHING", a.handleMediaupdatetimeout_ = a.handleMediaupdatetimeout_.bind(ye(a)), a.on("mediaupdatetimeout", a.handleMediaupdatetimeout_), a;
  }
  var n = r.prototype;
  return n.handleMediaupdatetimeout_ = function() {
    var e = this;
    if (this.state === "HAVE_METADATA") {
      var t = this.media(), a = kt(this.master.uri, t.uri);
      this.experimentalLLHLS && (a = yv(a, t)), this.state = "HAVE_CURRENT_METADATA", this.request = this.vhs_.xhr({ uri: a, withCredentials: this.withCredentials }, function(o, u) {
        if (e.request) {
          if (o) return e.playlistRequestError(e.request, e.media(), "HAVE_METADATA");
          e.haveMetadata({ playlistString: e.request.responseText, url: e.media().uri, id: e.media().id });
        }
      });
    }
  }, n.playlistRequestError = function(e, t, a) {
    var o = t.uri, u = t.id;
    this.request = null, a && (this.state = a), this.error = { playlist: this.master.playlists[u], status: e.status, message: "HLS playlist request error at URL: " + o + ".", responseText: e.responseText, code: e.status >= 500 ? 4 : 2 }, this.trigger("error");
  }, n.parseManifest_ = function(e) {
    var t = this, a = e.url, o = e.manifestString;
    return hv({ onwarn: function(l) {
      var c = l.message;
      return t.logger_("m3u8-parser warn for " + a + ": " + c);
    }, oninfo: function(l) {
      var c = l.message;
      return t.logger_("m3u8-parser info for " + a + ": " + c);
    }, manifestString: o, customTagParsers: this.customTagParsers, customTagMappers: this.customTagMappers, experimentalLLHLS: this.experimentalLLHLS });
  }, n.haveMetadata = function(e) {
    var t = e.playlistString, a = e.playlistObject, o = e.url, u = e.id;
    this.request = null, this.state = "HAVE_METADATA";
    var l = a || this.parseManifest_({ url: o, manifestString: t });
    l.lastRequest = Date.now(), Dc({ playlist: l, uri: o, id: u });
    var c = As(this.master, l);
    this.targetDuration = l.partTargetDuration || l.targetDuration, this.pendingMedia_ = null, c ? (this.master = c, this.media_ = this.master.playlists[u]) : this.trigger("playlistunchanged"), this.updateMediaUpdateTimeout_(Ds(this.media(), !!c)), this.trigger("loadedplaylist");
  }, n.dispose = function() {
    this.trigger("dispose"), this.stopRequest(), P.clearTimeout(this.mediaUpdateTimeout), P.clearTimeout(this.finalRenditionTimeout), this.off();
  }, n.stopRequest = function() {
    if (this.request) {
      var e = this.request;
      this.request = null, e.onreadystatechange = null, e.abort();
    }
  }, n.media = function(e, t) {
    var a = this;
    if (!e) return this.media_;
    if (this.state === "HAVE_NOTHING") throw new Error("Cannot switch media playlist from " + this.state);
    if (typeof e == "string") {
      if (!this.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
      e = this.master.playlists[e];
    }
    if (P.clearTimeout(this.finalRenditionTimeout), t) {
      var o = (e.partTargetDuration || e.targetDuration) / 2 * 1e3 || 5e3;
      this.finalRenditionTimeout = P.setTimeout(this.media.bind(this, e, false), o);
      return;
    }
    var u = this.state, l = !this.media_ || e.id !== this.media_.id, c = this.master.playlists[e.id];
    if (c && c.endList || e.endList && e.segments.length) {
      this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = e, l && (this.trigger("mediachanging"), u === "HAVE_MASTER" ? this.trigger("loadedmetadata") : this.trigger("mediachange"));
      return;
    }
    if (this.updateMediaUpdateTimeout_(Ds(e, true)), !!l) {
      if (this.state = "SWITCHING_MEDIA", this.request) {
        if (e.resolvedUri === this.request.url) return;
        this.request.onreadystatechange = null, this.request.abort(), this.request = null;
      }
      this.media_ && this.trigger("mediachanging"), this.pendingMedia_ = e, this.request = this.vhs_.xhr({ uri: e.resolvedUri, withCredentials: this.withCredentials }, function(m, g) {
        if (a.request) {
          if (e.lastRequest = Date.now(), e.resolvedUri = Wn(a.handleManifestRedirects, e.resolvedUri, g), m) return a.playlistRequestError(a.request, e, u);
          a.haveMetadata({ playlistString: g.responseText, url: e.uri, id: e.id }), u === "HAVE_MASTER" ? a.trigger("loadedmetadata") : a.trigger("mediachange");
        }
      });
    }
  }, n.pause = function() {
    this.mediaUpdateTimeout && (P.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.stopRequest(), this.state === "HAVE_NOTHING" && (this.started = false), this.state === "SWITCHING_MEDIA" ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : this.state === "HAVE_CURRENT_METADATA" && (this.state = "HAVE_METADATA");
  }, n.load = function(e) {
    var t = this;
    this.mediaUpdateTimeout && (P.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null);
    var a = this.media();
    if (e) {
      var o = a ? (a.partTargetDuration || a.targetDuration) / 2 * 1e3 : 5e3;
      this.mediaUpdateTimeout = P.setTimeout(function() {
        t.mediaUpdateTimeout = null, t.load();
      }, o);
      return;
    }
    if (!this.started) {
      this.start();
      return;
    }
    a && !a.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist");
  }, n.updateMediaUpdateTimeout_ = function(e) {
    var t = this;
    this.mediaUpdateTimeout && (P.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), !(!this.media() || this.media().endList) && (this.mediaUpdateTimeout = P.setTimeout(function() {
      t.mediaUpdateTimeout = null, t.trigger("mediaupdatetimeout"), t.updateMediaUpdateTimeout_(e);
    }, e));
  }, n.start = function() {
    var e = this;
    if (this.started = true, typeof this.src == "object") {
      this.src.uri || (this.src.uri = P.location.href), this.src.resolvedUri = this.src.uri, setTimeout(function() {
        e.setupInitialPlaylist(e.src);
      }, 0);
      return;
    }
    this.request = this.vhs_.xhr({ uri: this.src, withCredentials: this.withCredentials }, function(t, a) {
      if (e.request) {
        if (e.request = null, t) return e.error = { status: a.status, message: "HLS playlist request error at URL: " + e.src + ".", responseText: a.responseText, code: 2 }, e.state === "HAVE_NOTHING" && (e.started = false), e.trigger("error");
        e.src = Wn(e.handleManifestRedirects, e.src, a);
        var o = e.parseManifest_({ manifestString: a.responseText, url: e.src });
        e.setupInitialPlaylist(o);
      }
    });
  }, n.srcUri = function() {
    return typeof this.src == "string" ? this.src : this.src.uri;
  }, n.setupInitialPlaylist = function(e) {
    if (this.state = "HAVE_MASTER", e.playlists) {
      this.master = e, wc(this.master, this.srcUri()), e.playlists.forEach(function(a) {
        a.segments = Pc(a), a.segments.forEach(function(o) {
          kc(o, a.resolvedUri);
        });
      }), this.trigger("loadedplaylist"), this.request || this.media(this.master.playlists[0]);
      return;
    }
    var t = this.srcUri() || P.location.href;
    this.master = gv(e, t), this.haveMetadata({ playlistObject: e, url: t, id: this.master.playlists[0].id }), this.trigger("loadedmetadata");
  }, r;
})(vv), bv = q.xhr, xv = q.mergeOptions, ws = function(r, n, i, e) {
  var t = r.responseType === "arraybuffer" ? r.response : r.responseText;
  !n && t && (r.responseTime = Date.now(), r.roundTripTime = r.responseTime - r.requestTime, r.bytesReceived = t.byteLength || t.length, r.bandwidth || (r.bandwidth = Math.floor(r.bytesReceived / r.roundTripTime * 8 * 1e3))), i.headers && (r.responseHeaders = i.headers), n && n.code === "ETIMEDOUT" && (r.timedout = true), !n && !r.aborted && i.statusCode !== 200 && i.statusCode !== 206 && i.statusCode !== 0 && (n = new Error("XHR Failed with a response of: " + (r && (t || r.responseText)))), e(n, r);
}, Oc = function() {
  var r = function n(i, e) {
    i = xv({ timeout: 45e3 }, i);
    var t = n.beforeRequest || q.Vhs.xhr.beforeRequest;
    if (t && typeof t == "function") {
      var a = t(i);
      a && (i = a);
    }
    var o = q.Vhs.xhr.original === true ? bv : q.Vhs.xhr, u = o(i, function(c, m) {
      return ws(u, c, m, e);
    }), l = u.abort;
    return u.abort = function() {
      return u.aborted = true, l.apply(u, arguments);
    }, u.uri = i.uri, u.requestTime = Date.now(), u;
  };
  return r.original = true, r;
}, Sv = function(r) {
  var n, i = r.offset;
  return typeof r.offset == "bigint" || typeof r.length == "bigint" ? n = P.BigInt(r.offset) + P.BigInt(r.length) - P.BigInt(1) : n = r.offset + r.length - 1, "bytes=" + i + "-" + n;
}, ks = function(r) {
  var n = {};
  return r.byterange && (n.Range = Sv(r.byterange)), n;
}, Ev = function(r, n) {
  return r.start(n) + "-" + r.end(n);
}, Cv = function(r, n) {
  var i = r.toString(16);
  return "00".substring(0, 2 - i.length) + i + (n % 2 ? " " : "");
}, Av = function(r) {
  return r >= 32 && r < 126 ? String.fromCharCode(r) : ".";
}, Lc = function(r) {
  var n = {};
  return Object.keys(r).forEach(function(i) {
    var e = r[i];
    Yl(e) ? n[i] = { bytes: e.buffer, byteOffset: e.byteOffset, byteLength: e.byteLength } : n[i] = e;
  }), n;
}, zn = function(r) {
  var n = r.byterange || { length: 1 / 0, offset: 0 };
  return [n.length, n.offset, r.resolvedUri].join(",");
}, Fc = function(r) {
  return r.resolvedUri;
}, Rc = function(r) {
  for (var n = Array.prototype.slice.call(r), i = 16, e = "", t, a, o = 0; o < n.length / i; o++) t = n.slice(o * i, o * i + i).map(Cv).join(""), a = n.slice(o * i, o * i + i).map(Av).join(""), e += t + " " + a + `
`;
  return e;
}, Dv = function(r) {
  var n = r.bytes;
  return Rc(n);
}, wv = function(r) {
  var n = "", i;
  for (i = 0; i < r.length; i++) n += Ev(r, i) + " ";
  return n;
}, kv = Object.freeze({ __proto__: null, createTransferableMessage: Lc, initSegmentId: zn, segmentKeyId: Fc, hexDump: Rc, tagDump: Dv, textRanges: wv }), Mc = 0.25, Pv = function(r, n) {
  if (!n.dateTimeObject) return null;
  var i = n.videoTimingInfo.transmuxerPrependedSeconds, e = n.videoTimingInfo.transmuxedPresentationStart, t = e + i, a = r - t;
  return new Date(n.dateTimeObject.getTime() + a * 1e3);
}, Iv = function(r) {
  return r.transmuxedPresentationEnd - r.transmuxedPresentationStart - r.transmuxerPrependedSeconds;
}, Ov = function(r, n) {
  var i;
  try {
    i = new Date(r);
  } catch {
    return null;
  }
  if (!n || !n.segments || n.segments.length === 0) return null;
  var e = n.segments[0];
  if (i < e.dateTimeObject) return null;
  for (var t = 0; t < n.segments.length - 1; t++) {
    e = n.segments[t];
    var a = n.segments[t + 1].dateTimeObject;
    if (i < a) break;
  }
  var o = n.segments[n.segments.length - 1], u = o.dateTimeObject, l = o.videoTimingInfo ? Iv(o.videoTimingInfo) : o.duration + o.duration * Mc, c = new Date(u.getTime() + l * 1e3);
  return i > c ? null : (i > u && (e = o), { segment: e, estimatedStart: e.videoTimingInfo ? e.videoTimingInfo.transmuxedPresentationStart : vt.duration(n, n.mediaSequence + n.segments.indexOf(e)), type: e.videoTimingInfo ? "accurate" : "estimate" });
}, Lv = function(r, n) {
  if (!n || !n.segments || n.segments.length === 0) return null;
  for (var i = 0, e, t = 0; t < n.segments.length && (e = n.segments[t], i = e.videoTimingInfo ? e.videoTimingInfo.transmuxedPresentationEnd : i + e.duration, !(r <= i)); t++) ;
  var a = n.segments[n.segments.length - 1];
  if (a.videoTimingInfo && a.videoTimingInfo.transmuxedPresentationEnd < r) return null;
  if (r > i) {
    if (r > i + a.duration * Mc) return null;
    e = a;
  }
  return { segment: e, estimatedStart: e.videoTimingInfo ? e.videoTimingInfo.transmuxedPresentationStart : i - e.duration, type: e.videoTimingInfo ? "accurate" : "estimate" };
}, Fv = function(r, n) {
  var i, e;
  try {
    i = new Date(r), e = new Date(n);
  } catch {
  }
  var t = i.getTime(), a = e.getTime();
  return (a - t) / 1e3;
}, Rv = function(r) {
  if (!r.segments || r.segments.length === 0) return false;
  for (var n = 0; n < r.segments.length; n++) {
    var i = r.segments[n];
    if (!i.dateTimeObject) return false;
  }
  return true;
}, Mv = function(r) {
  var n = r.playlist, i = r.time, e = i === void 0 ? void 0 : i, t = r.callback;
  if (!t) throw new Error("getProgramTime: callback must be provided");
  if (!n || e === void 0) return t({ message: "getProgramTime: playlist and time must be provided" });
  var a = Lv(e, n);
  if (!a) return t({ message: "valid programTime was not found" });
  if (a.type === "estimate") return t({ message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again", seekTime: a.estimatedStart });
  var o = { mediaSeconds: e }, u = Pv(e, a.segment);
  return u && (o.programDateTime = u.toISOString()), t(null, o);
}, Nv = function s8(r) {
  var n = r.programTime, i = r.playlist, e = r.retryCount, t = e === void 0 ? 2 : e, a = r.seekTo, o = r.pauseAfterSeek, u = o === void 0 ? true : o, l = r.tech, c = r.callback;
  if (!c) throw new Error("seekToProgramTime: callback must be provided");
  if (typeof n > "u" || !i || !a) return c({ message: "seekToProgramTime: programTime, seekTo and playlist must be provided" });
  if (!i.endList && !l.hasStarted_) return c({ message: "player must be playing a live stream to start buffering" });
  if (!Rv(i)) return c({ message: "programDateTime tags must be provided in the manifest " + i.resolvedUri });
  var m = Ov(n, i);
  if (!m) return c({ message: n + " was not found in the stream" });
  var g = m.segment, _ = Fv(g.dateTimeObject, n);
  if (m.type === "estimate") {
    if (t === 0) return c({ message: n + " is not buffered yet. Try again" });
    a(m.estimatedStart + _), l.one("seeked", function() {
      s8({ programTime: n, playlist: i, retryCount: t - 1, seekTo: a, pauseAfterSeek: u, tech: l, callback: c });
    });
    return;
  }
  var C = g.start + _, w = function() {
    return c(null, l.currentTime());
  };
  l.one("seeked", w), u && l.pause(), a(C);
}, ns = function(r, n) {
  if (r.readyState === 4) return n();
}, Bv = function(r, n, i) {
  var e = [], t, a = false, o = function(g, _, C, w) {
    return _.abort(), a = true, i(g, _, C, w);
  }, u = function(g, _) {
    if (!a) {
      if (g) return o(g, _, "", e);
      var C = _.responseText.substring(e && e.byteLength || 0, _.responseText.length);
      if (e = up(e, Ql(C, true)), t = t || Ei(e), e.length < 10 || t && e.length < t + 2) return ns(_, function() {
        return o(g, _, "", e);
      });
      var w = Vs(e);
      return w === "ts" && e.length < 188 ? ns(_, function() {
        return o(g, _, "", e);
      }) : !w && e.length < 376 ? ns(_, function() {
        return o(g, _, "", e);
      }) : o(null, _, w, e);
    }
  }, l = { uri: r, beforeSend: function(g) {
    g.overrideMimeType("text/plain; charset=x-user-defined"), g.addEventListener("progress", function(_) {
      return _.total, _.loaded, ws(g, null, { statusCode: g.status }, u);
    });
  } }, c = n(l, function(m, g) {
    return ws(c, m, g, u);
  });
  return c;
}, Uv = q.EventTarget, Nc = q.mergeOptions, Cl = function(r, n) {
  if (!Ic(r, n) || r.sidx && n.sidx && (r.sidx.offset !== n.sidx.offset || r.sidx.length !== n.sidx.length)) return false;
  if (!r.sidx && n.sidx || r.sidx && !n.sidx || r.segments && !n.segments || !r.segments && n.segments) return false;
  if (!r.segments && !n.segments) return true;
  for (var i = 0; i < r.segments.length; i++) {
    var e = r.segments[i], t = n.segments[i];
    if (e.uri !== t.uri) return false;
    if (!(!e.byterange && !t.byterange)) {
      var a = e.byterange, o = t.byterange;
      if (a && !o || !a && o || a.offset !== o.offset || a.length !== o.length) return false;
    }
  }
  return true;
}, qv = function(r, n, i, e) {
  var t = e.attributes.NAME || i;
  return "placeholder-uri-" + r + "-" + n + "-" + t;
}, Vv = function(r) {
  var n = r.masterXml, i = r.srcUrl, e = r.clientOffset, t = r.sidxMapping, a = r.previousManifest, o = nm(n, { manifestUri: i, clientOffset: e, sidxMapping: t, previousManifest: a });
  return wc(o, i, qv), o;
}, jv = function(r, n) {
  li(r, function(i, e, t, a) {
    a in n.mediaGroups[e][t] || delete r.mediaGroups[e][t][a];
  });
}, Hv = function(r, n, i) {
  for (var e = true, t = Nc(r, { duration: n.duration, minimumUpdatePeriod: n.minimumUpdatePeriod, timelineStarts: n.timelineStarts }), a = 0; a < n.playlists.length; a++) {
    var o = n.playlists[a];
    if (o.sidx) {
      var u = ra(o.sidx);
      i && i[u] && i[u].sidx && Ns(o, i[u].sidx, o.sidx.resolvedUri);
    }
    var l = As(t, o, Cl);
    l && (t = l, e = false);
  }
  return li(n, function(c, m, g, _) {
    if (c.playlists && c.playlists.length) {
      var C = c.playlists[0].id, w = As(t, c.playlists[0], Cl);
      w && (t = w, _ in t.mediaGroups[m][g] || (t.mediaGroups[m][g][_] = c), t.mediaGroups[m][g][_].playlists[0] = t.playlists[C], e = false);
    }
  }), jv(t, n), n.minimumUpdatePeriod !== r.minimumUpdatePeriod && (e = false), e ? null : t;
}, Wv = function(r, n) {
  var i = !r.map && !n.map, e = i || !!(r.map && n.map && r.map.byterange.offset === n.map.byterange.offset && r.map.byterange.length === n.map.byterange.length);
  return e && r.uri === n.uri && r.byterange.offset === n.byterange.offset && r.byterange.length === n.byterange.length;
}, Al = function(r, n) {
  var i = {};
  for (var e in r) {
    var t = r[e], a = t.sidx;
    if (a) {
      var o = ra(a);
      if (!n[o]) break;
      var u = n[o].sidxInfo;
      Wv(u, a) && (i[o] = n[o]);
    }
  }
  return i;
}, Gv = function(r, n) {
  var i = Al(r.playlists, n), e = i;
  return li(r, function(t, a, o, u) {
    if (t.playlists && t.playlists.length) {
      var l = t.playlists;
      e = Nc(e, Al(l, n));
    }
  }), e;
}, Ps = (function(s12) {
  oe(r, s12);
  function r(i, e, t, a) {
    var o;
    t === void 0 && (t = {}), o = s12.call(this) || this, o.masterPlaylistLoader_ = a || ye(o), a || (o.isMaster_ = true);
    var u = t, l = u.withCredentials, c = l === void 0 ? false : l, m = u.handleManifestRedirects, g = m === void 0 ? false : m;
    if (o.vhs_ = e, o.withCredentials = c, o.handleManifestRedirects = g, !i) throw new Error("A non-empty playlist URL or object is required");
    return o.on("minimumUpdatePeriod", function() {
      o.refreshXml_();
    }), o.on("mediaupdatetimeout", function() {
      o.refreshMedia_(o.media().id);
    }), o.state = "HAVE_NOTHING", o.loadedPlaylists_ = {}, o.logger_ = Lt("DashPlaylistLoader"), o.isMaster_ ? (o.masterPlaylistLoader_.srcUrl = i, o.masterPlaylistLoader_.sidxMapping_ = {}) : o.childPlaylist_ = i, o;
  }
  var n = r.prototype;
  return n.requestErrored_ = function(e, t, a) {
    if (!this.request) return true;
    if (this.request = null, e) return this.error = typeof e == "object" && !(e instanceof Error) ? e : { status: t.status, message: "DASH request error at URL: " + t.uri, response: t.response, code: 2 }, a && (this.state = a), this.trigger("error"), true;
  }, n.addSidxSegments_ = function(e, t, a) {
    var o = this, u = e.sidx && ra(e.sidx);
    if (!e.sidx || !u || this.masterPlaylistLoader_.sidxMapping_[u]) {
      this.mediaRequest_ = P.setTimeout(function() {
        return a(false);
      }, 0);
      return;
    }
    var l = Wn(this.handleManifestRedirects, e.sidx.resolvedUri), c = function(g, _) {
      if (!o.requestErrored_(g, _, t)) {
        var C = o.masterPlaylistLoader_.sidxMapping_, w;
        try {
          w = lm(fe(_.response).subarray(8));
        } catch (S) {
          o.requestErrored_(S, _, t);
          return;
        }
        return C[u] = { sidxInfo: e.sidx, sidx: w }, Ns(e, w, e.sidx.resolvedUri), a(true);
      }
    };
    this.request = Bv(l, this.vhs_.xhr, function(m, g, _, C) {
      if (m) return c(m, g);
      if (!_ || _ !== "mp4") return c({ status: g.status, message: "Unsupported " + (_ || "unknown") + " container type for sidx segment at URL: " + l, response: "", playlist: e, internal: true, blacklistDuration: 1 / 0, code: 2 }, g);
      var w = e.sidx.byterange, S = w.offset, F = w.length;
      if (C.length >= F + S) return c(m, { response: C.subarray(S, S + F), status: g.status, uri: g.uri });
      o.request = o.vhs_.xhr({ uri: l, responseType: "arraybuffer", headers: ks({ byterange: e.sidx.byterange }) }, c);
    });
  }, n.dispose = function() {
    this.trigger("dispose"), this.stopRequest(), this.loadedPlaylists_ = {}, P.clearTimeout(this.minimumUpdatePeriodTimeout_), P.clearTimeout(this.mediaRequest_), P.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.mediaRequest_ = null, this.minimumUpdatePeriodTimeout_ = null, this.masterPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.masterPlaylistLoader_.createMupOnMedia_), this.masterPlaylistLoader_.createMupOnMedia_ = null), this.off();
  }, n.hasPendingRequest = function() {
    return this.request || this.mediaRequest_;
  }, n.stopRequest = function() {
    if (this.request) {
      var e = this.request;
      this.request = null, e.onreadystatechange = null, e.abort();
    }
  }, n.media = function(e) {
    var t = this;
    if (!e) return this.media_;
    if (this.state === "HAVE_NOTHING") throw new Error("Cannot switch media playlist from " + this.state);
    var a = this.state;
    if (typeof e == "string") {
      if (!this.masterPlaylistLoader_.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
      e = this.masterPlaylistLoader_.master.playlists[e];
    }
    var o = !this.media_ || e.id !== this.media_.id;
    if (o && this.loadedPlaylists_[e.id] && this.loadedPlaylists_[e.id].endList) {
      this.state = "HAVE_METADATA", this.media_ = e, o && (this.trigger("mediachanging"), this.trigger("mediachange"));
      return;
    }
    o && (this.media_ && this.trigger("mediachanging"), this.addSidxSegments_(e, a, function(u) {
      t.haveMetadata({ startingState: a, playlist: e });
    }));
  }, n.haveMetadata = function(e) {
    var t = e.startingState, a = e.playlist;
    this.state = "HAVE_METADATA", this.loadedPlaylists_[a.id] = a, this.mediaRequest_ = null, this.refreshMedia_(a.id), t === "HAVE_MASTER" ? this.trigger("loadedmetadata") : this.trigger("mediachange");
  }, n.pause = function() {
    this.masterPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.masterPlaylistLoader_.createMupOnMedia_), this.masterPlaylistLoader_.createMupOnMedia_ = null), this.stopRequest(), P.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.isMaster_ && (P.clearTimeout(this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_), this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_ = null), this.state === "HAVE_NOTHING" && (this.started = false);
  }, n.load = function(e) {
    var t = this;
    P.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null;
    var a = this.media();
    if (e) {
      var o = a ? a.targetDuration / 2 * 1e3 : 5e3;
      this.mediaUpdateTimeout = P.setTimeout(function() {
        return t.load();
      }, o);
      return;
    }
    if (!this.started) {
      this.start();
      return;
    }
    a && !a.endList ? (this.isMaster_ && !this.minimumUpdatePeriodTimeout_ && (this.trigger("minimumUpdatePeriod"), this.updateMinimumUpdatePeriodTimeout_()), this.trigger("mediaupdatetimeout")) : this.trigger("loadedplaylist");
  }, n.start = function() {
    var e = this;
    if (this.started = true, !this.isMaster_) {
      this.mediaRequest_ = P.setTimeout(function() {
        return e.haveMaster_();
      }, 0);
      return;
    }
    this.requestMaster_(function(t, a) {
      e.haveMaster_(), !e.hasPendingRequest() && !e.media_ && e.media(e.masterPlaylistLoader_.master.playlists[0]);
    });
  }, n.requestMaster_ = function(e) {
    var t = this;
    this.request = this.vhs_.xhr({ uri: this.masterPlaylistLoader_.srcUrl, withCredentials: this.withCredentials }, function(a, o) {
      if (t.requestErrored_(a, o)) {
        t.state === "HAVE_NOTHING" && (t.started = false);
        return;
      }
      var u = o.responseText !== t.masterPlaylistLoader_.masterXml_;
      if (t.masterPlaylistLoader_.masterXml_ = o.responseText, o.responseHeaders && o.responseHeaders.date ? t.masterLoaded_ = Date.parse(o.responseHeaders.date) : t.masterLoaded_ = Date.now(), t.masterPlaylistLoader_.srcUrl = Wn(t.handleManifestRedirects, t.masterPlaylistLoader_.srcUrl, o), u) {
        t.handleMaster_(), t.syncClientServerClock_(function() {
          return e(o, u);
        });
        return;
      }
      return e(o, u);
    });
  }, n.syncClientServerClock_ = function(e) {
    var t = this, a = am(this.masterPlaylistLoader_.masterXml_);
    if (a === null) return this.masterPlaylistLoader_.clientOffset_ = this.masterLoaded_ - Date.now(), e();
    if (a.method === "DIRECT") return this.masterPlaylistLoader_.clientOffset_ = a.value - Date.now(), e();
    this.request = this.vhs_.xhr({ uri: kt(this.masterPlaylistLoader_.srcUrl, a.value), method: a.method, withCredentials: this.withCredentials }, function(o, u) {
      if (t.request) {
        if (o) return t.masterPlaylistLoader_.clientOffset_ = t.masterLoaded_ - Date.now(), e();
        var l;
        a.method === "HEAD" ? !u.responseHeaders || !u.responseHeaders.date ? l = t.masterLoaded_ : l = Date.parse(u.responseHeaders.date) : l = Date.parse(u.responseText), t.masterPlaylistLoader_.clientOffset_ = l - Date.now(), e();
      }
    });
  }, n.haveMaster_ = function() {
    this.state = "HAVE_MASTER", this.isMaster_ ? this.trigger("loadedplaylist") : this.media_ || this.media(this.childPlaylist_);
  }, n.handleMaster_ = function() {
    this.mediaRequest_ = null;
    var e = this.masterPlaylistLoader_.master, t = Vv({ masterXml: this.masterPlaylistLoader_.masterXml_, srcUrl: this.masterPlaylistLoader_.srcUrl, clientOffset: this.masterPlaylistLoader_.clientOffset_, sidxMapping: this.masterPlaylistLoader_.sidxMapping_, previousManifest: e });
    e && (t = Hv(e, t, this.masterPlaylistLoader_.sidxMapping_)), this.masterPlaylistLoader_.master = t || e;
    var a = this.masterPlaylistLoader_.master.locations && this.masterPlaylistLoader_.master.locations[0];
    return a && a !== this.masterPlaylistLoader_.srcUrl && (this.masterPlaylistLoader_.srcUrl = a), (!e || t && t.minimumUpdatePeriod !== e.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_(), !!t;
  }, n.updateMinimumUpdatePeriodTimeout_ = function() {
    var e = this.masterPlaylistLoader_;
    e.createMupOnMedia_ && (e.off("loadedmetadata", e.createMupOnMedia_), e.createMupOnMedia_ = null), e.minimumUpdatePeriodTimeout_ && (P.clearTimeout(e.minimumUpdatePeriodTimeout_), e.minimumUpdatePeriodTimeout_ = null);
    var t = e.master && e.master.minimumUpdatePeriod;
    if (t === 0 && (e.media() ? t = e.media().targetDuration * 1e3 : (e.createMupOnMedia_ = e.updateMinimumUpdatePeriodTimeout_, e.one("loadedmetadata", e.createMupOnMedia_))), typeof t != "number" || t <= 0) {
      t < 0 && this.logger_("found invalid minimumUpdatePeriod of " + t + ", not setting a timeout");
      return;
    }
    this.createMUPTimeout_(t);
  }, n.createMUPTimeout_ = function(e) {
    var t = this.masterPlaylistLoader_;
    t.minimumUpdatePeriodTimeout_ = P.setTimeout(function() {
      t.minimumUpdatePeriodTimeout_ = null, t.trigger("minimumUpdatePeriod"), t.createMUPTimeout_(e);
    }, e);
  }, n.refreshXml_ = function() {
    var e = this;
    this.requestMaster_(function(t, a) {
      a && (e.media_ && (e.media_ = e.masterPlaylistLoader_.master.playlists[e.media_.id]), e.masterPlaylistLoader_.sidxMapping_ = Gv(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.sidxMapping_), e.addSidxSegments_(e.media(), e.state, function(o) {
        e.refreshMedia_(e.media().id);
      }));
    });
  }, n.refreshMedia_ = function(e) {
    var t = this;
    if (!e) throw new Error("refreshMedia_ must take a media id");
    this.media_ && this.isMaster_ && this.handleMaster_();
    var a = this.masterPlaylistLoader_.master.playlists, o = !this.media_ || this.media_ !== a[e];
    if (o ? this.media_ = a[e] : this.trigger("playlistunchanged"), !this.mediaUpdateTimeout) {
      var u = function l() {
        t.media().endList || (t.mediaUpdateTimeout = P.setTimeout(function() {
          t.trigger("mediaupdatetimeout"), l();
        }, Ds(t.media(), !!o)));
      };
      u();
    }
    this.trigger("loadedplaylist");
  }, r;
})(Uv), Qe = { GOAL_BUFFER_LENGTH: 30, MAX_GOAL_BUFFER_LENGTH: 60, BACK_BUFFER_LENGTH: 30, GOAL_BUFFER_LENGTH_RATE: 1, INITIAL_BANDWIDTH: 4194304, BANDWIDTH_VARIANCE: 1.2, BUFFER_LOW_WATER_LINE: 0, MAX_BUFFER_LOW_WATER_LINE: 30, EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16, BUFFER_LOW_WATER_LINE_RATE: 1, BUFFER_HIGH_WATER_LINE: 30 }, zv = function(r) {
  for (var n = new Uint8Array(new ArrayBuffer(r.length)), i = 0; i < r.length; i++) n[i] = r.charCodeAt(i);
  return n.buffer;
}, Bc = function(r) {
  return r.on = r.addEventListener, r.off = r.removeEventListener, r;
}, Kv = function(r) {
  try {
    return URL.createObjectURL(new Blob([r], { type: "application/javascript" }));
  } catch {
    var n = new BlobBuilder();
    return n.append(r), URL.createObjectURL(n.getBlob());
  }
}, Uc = function(r) {
  return function() {
    var n = Kv(r), i = Bc(new Worker(n));
    i.objURL = n;
    var e = i.terminate;
    return i.on = i.addEventListener, i.off = i.removeEventListener, i.terminate = function() {
      return URL.revokeObjectURL(n), e.call(this);
    }, i;
  };
}, qc = function(r) {
  return "var browserWorkerPolyFill = " + Bc.toString() + `;
browserWorkerPolyFill(self);
` + r;
}, Vc = function(r) {
  return r.toString().replace(/^function.+?{/, "").slice(0, -1);
}, Xv = qc(Vc(function() {
  var s12 = function() {
    this.init = function() {
      var d = {};
      this.on = function(h, f) {
        d[h] || (d[h] = []), d[h] = d[h].concat(f);
      }, this.off = function(h, f) {
        var p;
        return d[h] ? (p = d[h].indexOf(f), d[h] = d[h].slice(), d[h].splice(p, 1), p > -1) : false;
      }, this.trigger = function(h) {
        var f, p, v, y;
        if (f = d[h], !!f) if (arguments.length === 2) for (v = f.length, p = 0; p < v; ++p) f[p].call(this, arguments[1]);
        else {
          for (y = [], p = arguments.length, p = 1; p < arguments.length; ++p) y.push(arguments[p]);
          for (v = f.length, p = 0; p < v; ++p) f[p].apply(this, y);
        }
      }, this.dispose = function() {
        d = {};
      };
    };
  };
  s12.prototype.pipe = function(b) {
    return this.on("data", function(d) {
      b.push(d);
    }), this.on("done", function(d) {
      b.flush(d);
    }), this.on("partialdone", function(d) {
      b.partialFlush(d);
    }), this.on("endedtimeline", function(d) {
      b.endTimeline(d);
    }), this.on("reset", function(d) {
      b.reset(d);
    }), b;
  }, s12.prototype.push = function(b) {
    this.trigger("data", b);
  }, s12.prototype.flush = function(b) {
    this.trigger("done", b);
  }, s12.prototype.partialFlush = function(b) {
    this.trigger("partialdone", b);
  }, s12.prototype.endTimeline = function(b) {
    this.trigger("endedtimeline", b);
  }, s12.prototype.reset = function(b) {
    this.trigger("reset", b);
  };
  var r = s12, n = Math.pow(2, 32), i = function(d) {
    var h = new DataView(d.buffer, d.byteOffset, d.byteLength), f;
    return h.getBigUint64 ? (f = h.getBigUint64(0), f < Number.MAX_SAFE_INTEGER ? Number(f) : f) : h.getUint32(0) * n + h.getUint32(4);
  }, e = { getUint64: i, MAX_UINT32: n }, t = e.MAX_UINT32, a, o, u, l, c, m, g, _, C, w, S, F, N, z, W, H, $, R, V, T, E, M, B, j, K, Y, re, J, ee, Z, Q, ie, he, me, ge, ce;
  (function() {
    var b;
    if (B = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], pasp: [], sdtp: [], smhd: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], styp: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [] }, !(typeof Uint8Array > "u")) {
      for (b in B) B.hasOwnProperty(b) && (B[b] = [b.charCodeAt(0), b.charCodeAt(1), b.charCodeAt(2), b.charCodeAt(3)]);
      j = new Uint8Array([105, 115, 111, 109]), Y = new Uint8Array([97, 118, 99, 49]), K = new Uint8Array([0, 0, 0, 1]), re = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), J = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), ee = { video: re, audio: J }, ie = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), Q = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), he = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), me = he, ge = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), ce = he, Z = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  })(), a = function(d) {
    var h = [], f = 0, p, v, y;
    for (p = 1; p < arguments.length; p++) h.push(arguments[p]);
    for (p = h.length; p--; ) f += h[p].byteLength;
    for (v = new Uint8Array(f + 8), y = new DataView(v.buffer, v.byteOffset, v.byteLength), y.setUint32(0, v.byteLength), v.set(d, 4), p = 0, f = 8; p < h.length; p++) v.set(h[p], f), f += h[p].byteLength;
    return v;
  }, o = function() {
    return a(B.dinf, a(B.dref, ie));
  }, u = function(d) {
    return a(B.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, d.audioobjecttype << 3 | d.samplingfrequencyindex >>> 1, d.samplingfrequencyindex << 7 | d.channelcount << 3, 6, 1, 2]));
  }, l = function() {
    return a(B.ftyp, j, K, j, Y);
  }, H = function(d) {
    return a(B.hdlr, ee[d]);
  }, c = function(d) {
    return a(B.mdat, d);
  }, W = function(d) {
    var h = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, d.duration >>> 24 & 255, d.duration >>> 16 & 255, d.duration >>> 8 & 255, d.duration & 255, 85, 196, 0, 0]);
    return d.samplerate && (h[12] = d.samplerate >>> 24 & 255, h[13] = d.samplerate >>> 16 & 255, h[14] = d.samplerate >>> 8 & 255, h[15] = d.samplerate & 255), a(B.mdhd, h);
  }, z = function(d) {
    return a(B.mdia, W(d), H(d.type), g(d));
  }, m = function(d) {
    return a(B.mfhd, new Uint8Array([0, 0, 0, 0, (d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255]));
  }, g = function(d) {
    return a(B.minf, d.type === "video" ? a(B.vmhd, Z) : a(B.smhd, Q), o(), R(d));
  }, _ = function(d, h) {
    for (var f = [], p = h.length; p--; ) f[p] = T(h[p]);
    return a.apply(null, [B.moof, m(d)].concat(f));
  }, C = function(d) {
    for (var h = d.length, f = []; h--; ) f[h] = F(d[h]);
    return a.apply(null, [B.moov, S(4294967295)].concat(f).concat(w(d)));
  }, w = function(d) {
    for (var h = d.length, f = []; h--; ) f[h] = E(d[h]);
    return a.apply(null, [B.mvex].concat(f));
  }, S = function(d) {
    var h = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
    return a(B.mvhd, h);
  }, $ = function(d) {
    var h = d.samples || [], f = new Uint8Array(4 + h.length), p, v;
    for (v = 0; v < h.length; v++) p = h[v].flags, f[v + 4] = p.dependsOn << 4 | p.isDependedOn << 2 | p.hasRedundancy;
    return a(B.sdtp, f);
  }, R = function(d) {
    return a(B.stbl, V(d), a(B.stts, ce), a(B.stsc, me), a(B.stsz, ge), a(B.stco, he));
  }, (function() {
    var b, d;
    V = function(f) {
      return a(B.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), f.type === "video" ? b(f) : d(f));
    }, b = function(f) {
      var p = f.sps || [], v = f.pps || [], y = [], D = [], k, L;
      for (k = 0; k < p.length; k++) y.push((p[k].byteLength & 65280) >>> 8), y.push(p[k].byteLength & 255), y = y.concat(Array.prototype.slice.call(p[k]));
      for (k = 0; k < v.length; k++) D.push((v[k].byteLength & 65280) >>> 8), D.push(v[k].byteLength & 255), D = D.concat(Array.prototype.slice.call(v[k]));
      if (L = [B.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (f.width & 65280) >> 8, f.width & 255, (f.height & 65280) >> 8, f.height & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a(B.avcC, new Uint8Array([1, f.profileIdc, f.profileCompatibility, f.levelIdc, 255].concat([p.length], y, [v.length], D))), a(B.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], f.sarRatio) {
        var O = f.sarRatio[0], U = f.sarRatio[1];
        L.push(a(B.pasp, new Uint8Array([(O & 4278190080) >> 24, (O & 16711680) >> 16, (O & 65280) >> 8, O & 255, (U & 4278190080) >> 24, (U & 16711680) >> 16, (U & 65280) >> 8, U & 255])));
      }
      return a.apply(null, L);
    }, d = function(f) {
      return a(B.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (f.channelcount & 65280) >> 8, f.channelcount & 255, (f.samplesize & 65280) >> 8, f.samplesize & 255, 0, 0, 0, 0, (f.samplerate & 65280) >> 8, f.samplerate & 255, 0, 0]), u(f));
    };
  })(), N = function(d) {
    var h = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (d.id & 4278190080) >> 24, (d.id & 16711680) >> 16, (d.id & 65280) >> 8, d.id & 255, 0, 0, 0, 0, (d.duration & 4278190080) >> 24, (d.duration & 16711680) >> 16, (d.duration & 65280) >> 8, d.duration & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (d.width & 65280) >> 8, d.width & 255, 0, 0, (d.height & 65280) >> 8, d.height & 255, 0, 0]);
    return a(B.tkhd, h);
  }, T = function(d) {
    var h, f, p, v, y, D, k;
    return h = a(B.tfhd, new Uint8Array([0, 0, 0, 58, (d.id & 4278190080) >> 24, (d.id & 16711680) >> 16, (d.id & 65280) >> 8, d.id & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), D = Math.floor(d.baseMediaDecodeTime / t), k = Math.floor(d.baseMediaDecodeTime % t), f = a(B.tfdt, new Uint8Array([1, 0, 0, 0, D >>> 24 & 255, D >>> 16 & 255, D >>> 8 & 255, D & 255, k >>> 24 & 255, k >>> 16 & 255, k >>> 8 & 255, k & 255])), y = 92, d.type === "audio" ? (p = M(d, y), a(B.traf, h, f, p)) : (v = $(d), p = M(d, v.length + y), a(B.traf, h, f, p, v));
  }, F = function(d) {
    return d.duration = d.duration || 4294967295, a(B.trak, N(d), z(d));
  }, E = function(d) {
    var h = new Uint8Array([0, 0, 0, 0, (d.id & 4278190080) >> 24, (d.id & 16711680) >> 16, (d.id & 65280) >> 8, d.id & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
    return d.type !== "video" && (h[h.length - 1] = 0), a(B.trex, h);
  }, (function() {
    var b, d, h;
    h = function(p, v) {
      var y = 0, D = 0, k = 0, L = 0;
      return p.length && (p[0].duration !== void 0 && (y = 1), p[0].size !== void 0 && (D = 2), p[0].flags !== void 0 && (k = 4), p[0].compositionTimeOffset !== void 0 && (L = 8)), [0, 0, y | D | k | L, 1, (p.length & 4278190080) >>> 24, (p.length & 16711680) >>> 16, (p.length & 65280) >>> 8, p.length & 255, (v & 4278190080) >>> 24, (v & 16711680) >>> 16, (v & 65280) >>> 8, v & 255];
    }, d = function(p, v) {
      var y, D, k, L, O, U;
      for (L = p.samples || [], v += 20 + 16 * L.length, k = h(L, v), D = new Uint8Array(k.length + L.length * 16), D.set(k), y = k.length, U = 0; U < L.length; U++) O = L[U], D[y++] = (O.duration & 4278190080) >>> 24, D[y++] = (O.duration & 16711680) >>> 16, D[y++] = (O.duration & 65280) >>> 8, D[y++] = O.duration & 255, D[y++] = (O.size & 4278190080) >>> 24, D[y++] = (O.size & 16711680) >>> 16, D[y++] = (O.size & 65280) >>> 8, D[y++] = O.size & 255, D[y++] = O.flags.isLeading << 2 | O.flags.dependsOn, D[y++] = O.flags.isDependedOn << 6 | O.flags.hasRedundancy << 4 | O.flags.paddingValue << 1 | O.flags.isNonSyncSample, D[y++] = O.flags.degradationPriority & 61440, D[y++] = O.flags.degradationPriority & 15, D[y++] = (O.compositionTimeOffset & 4278190080) >>> 24, D[y++] = (O.compositionTimeOffset & 16711680) >>> 16, D[y++] = (O.compositionTimeOffset & 65280) >>> 8, D[y++] = O.compositionTimeOffset & 255;
      return a(B.trun, D);
    }, b = function(p, v) {
      var y, D, k, L, O, U;
      for (L = p.samples || [], v += 20 + 8 * L.length, k = h(L, v), y = new Uint8Array(k.length + L.length * 8), y.set(k), D = k.length, U = 0; U < L.length; U++) O = L[U], y[D++] = (O.duration & 4278190080) >>> 24, y[D++] = (O.duration & 16711680) >>> 16, y[D++] = (O.duration & 65280) >>> 8, y[D++] = O.duration & 255, y[D++] = (O.size & 4278190080) >>> 24, y[D++] = (O.size & 16711680) >>> 16, y[D++] = (O.size & 65280) >>> 8, y[D++] = O.size & 255;
      return a(B.trun, y);
    }, M = function(p, v) {
      return p.type === "audio" ? b(p, v) : d(p, v);
    };
  })();
  var Pe = { ftyp: l, mdat: c, moof: _, moov: C, initSegment: function(d) {
    var h = l(), f = C(d), p;
    return p = new Uint8Array(h.byteLength + f.byteLength), p.set(h), p.set(f, h.byteLength), p;
  } }, qe = function(d) {
    var h, f, p = [], v = [];
    for (v.byteLength = 0, v.nalCount = 0, v.duration = 0, p.byteLength = 0, h = 0; h < d.length; h++) f = d[h], f.nalUnitType === "access_unit_delimiter_rbsp" ? (p.length && (p.duration = f.dts - p.dts, v.byteLength += p.byteLength, v.nalCount += p.length, v.duration += p.duration, v.push(p)), p = [f], p.byteLength = f.data.byteLength, p.pts = f.pts, p.dts = f.dts) : (f.nalUnitType === "slice_layer_without_partitioning_rbsp_idr" && (p.keyFrame = true), p.duration = f.dts - p.dts, p.byteLength += f.data.byteLength, p.push(f));
    return v.length && (!p.duration || p.duration <= 0) && (p.duration = v[v.length - 1].duration), v.byteLength += p.byteLength, v.nalCount += p.length, v.duration += p.duration, v.push(p), v;
  }, Ie = function(d) {
    var h, f, p = [], v = [];
    for (p.byteLength = 0, p.nalCount = 0, p.duration = 0, p.pts = d[0].pts, p.dts = d[0].dts, v.byteLength = 0, v.nalCount = 0, v.duration = 0, v.pts = d[0].pts, v.dts = d[0].dts, h = 0; h < d.length; h++) f = d[h], f.keyFrame ? (p.length && (v.push(p), v.byteLength += p.byteLength, v.nalCount += p.nalCount, v.duration += p.duration), p = [f], p.nalCount = f.length, p.byteLength = f.byteLength, p.pts = f.pts, p.dts = f.dts, p.duration = f.duration) : (p.duration += f.duration, p.nalCount += f.length, p.byteLength += f.byteLength, p.push(f));
    return v.length && p.duration <= 0 && (p.duration = v[v.length - 1].duration), v.byteLength += p.byteLength, v.nalCount += p.nalCount, v.duration += p.duration, v.push(p), v;
  }, Ve = function(d) {
    var h;
    return !d[0][0].keyFrame && d.length > 1 && (h = d.shift(), d.byteLength -= h.byteLength, d.nalCount -= h.nalCount, d[0][0].dts = h.dts, d[0][0].pts = h.pts, d[0][0].duration += h.duration), d;
  }, xt = function() {
    return { size: 0, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0, degradationPriority: 0, isNonSyncSample: 1 } };
  }, $e = function(d, h) {
    var f = xt();
    return f.dataOffset = h, f.compositionTimeOffset = d.pts - d.dts, f.duration = d.duration, f.size = 4 * d.length, f.size += d.byteLength, d.keyFrame && (f.flags.dependsOn = 2, f.flags.isNonSyncSample = 0), f;
  }, pt = function(d, h) {
    var f, p, v, y, D, k = h || 0, L = [];
    for (f = 0; f < d.length; f++) for (y = d[f], p = 0; p < y.length; p++) D = y[p], v = $e(D, k), k += v.size, L.push(v);
    return L;
  }, sr = function(d) {
    var h, f, p, v, y, D, k = 0, L = d.byteLength, O = d.nalCount, U = L + 4 * O, X = new Uint8Array(U), ue = new DataView(X.buffer);
    for (h = 0; h < d.length; h++) for (v = d[h], f = 0; f < v.length; f++) for (y = v[f], p = 0; p < y.length; p++) D = y[p], ue.setUint32(k, D.data.byteLength), k += 4, X.set(D.data, k), k += D.data.byteLength;
    return X;
  }, Ye = function(d, h) {
    var f, p = h || 0, v = [];
    return f = $e(d, p), v.push(f), v;
  }, or = function(d) {
    var h, f, p = 0, v = d.byteLength, y = d.length, D = v + 4 * y, k = new Uint8Array(D), L = new DataView(k.buffer);
    for (h = 0; h < d.length; h++) f = d[h], L.setUint32(p, f.data.byteLength), p += 4, k.set(f.data, p), p += f.data.byteLength;
    return k;
  }, Ne = { groupNalsIntoFrames: qe, groupFramesIntoGops: Ie, extendFirstKeyFrame: Ve, generateSampleTable: pt, concatenateNalData: sr, generateSampleTableForFrame: Ye, concatenateNalDataForFrame: or }, yt = [33, 16, 5, 32, 164, 27], ur = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], be = function(d) {
    for (var h = []; d--; ) h.push(0);
    return h;
  }, Ft = function(d) {
    return Object.keys(d).reduce(function(h, f) {
      return h[f] = new Uint8Array(d[f].reduce(function(p, v) {
        return p.concat(v);
      }, [])), h;
    }, {});
  }, Ae, Be = function() {
    if (!Ae) {
      var d = { 96e3: [yt, [227, 64], be(154), [56]], 88200: [yt, [231], be(170), [56]], 64e3: [yt, [248, 192], be(240), [56]], 48e3: [yt, [255, 192], be(268), [55, 148, 128], be(54), [112]], 44100: [yt, [255, 192], be(268), [55, 163, 128], be(84), [112]], 32e3: [yt, [255, 192], be(268), [55, 234], be(226), [112]], 24e3: [yt, [255, 192], be(268), [55, 255, 128], be(268), [111, 112], be(126), [224]], 16e3: [yt, [255, 192], be(268), [55, 255, 128], be(268), [111, 255], be(269), [223, 108], be(195), [1, 192]], 12e3: [ur, be(268), [3, 127, 248], be(268), [6, 255, 240], be(268), [13, 255, 224], be(268), [27, 253, 128], be(259), [56]], 11025: [ur, be(268), [3, 127, 248], be(268), [6, 255, 240], be(268), [13, 255, 224], be(268), [27, 255, 192], be(268), [55, 175, 128], be(108), [112]], 8e3: [ur, be(268), [3, 121, 16], be(47), [7]] };
      Ae = Ft(d);
    }
    return Ae;
  }, Rt = 9e4, Gt, gr, lr, vr, yr, di, ci;
  Gt = function(d) {
    return d * Rt;
  }, gr = function(d, h) {
    return d * h;
  }, lr = function(d) {
    return d / Rt;
  }, vr = function(d, h) {
    return d / h;
  }, yr = function(d, h) {
    return Gt(vr(d, h));
  }, di = function(d, h) {
    return gr(lr(d), h);
  }, ci = function(d, h, f) {
    return lr(f ? d : d - h);
  };
  var Se = { ONE_SECOND_IN_TS: Rt, secondsToVideoTs: Gt, secondsToAudioTs: gr, videoTsToSeconds: lr, audioTsToSeconds: vr, audioTsToVideoTs: yr, videoTsToAudioTs: di, metadataTsToSeconds: ci }, Fr = function(d) {
    var h, f, p = 0;
    for (h = 0; h < d.length; h++) f = d[h], p += f.data.byteLength;
    return p;
  }, fi = function(d, h, f, p) {
    var v, y = 0, D = 0, k = 0, L = 0, O, U, X;
    if (h.length && (v = Se.audioTsToVideoTs(d.baseMediaDecodeTime, d.samplerate), y = Math.ceil(Se.ONE_SECOND_IN_TS / (d.samplerate / 1024)), f && p && (D = v - Math.max(f, p), k = Math.floor(D / y), L = k * y), !(k < 1 || L > Se.ONE_SECOND_IN_TS / 2))) {
      for (O = Be()[d.samplerate], O || (O = h[0].data), U = 0; U < k; U++) X = h[0], h.splice(0, 0, { data: O, dts: X.dts - y, pts: X.pts - y });
      return d.baseMediaDecodeTime -= Math.floor(Se.videoTsToAudioTs(L, d.samplerate)), L;
    }
  }, Gi = function(d, h, f) {
    return h.minSegmentDts >= f ? d : (h.minSegmentDts = 1 / 0, d.filter(function(p) {
      return p.dts >= f ? (h.minSegmentDts = Math.min(h.minSegmentDts, p.dts), h.minSegmentPts = h.minSegmentDts, true) : false;
    }));
  }, zi = function(d) {
    var h, f, p = [];
    for (h = 0; h < d.length; h++) f = d[h], p.push({ size: f.data.byteLength, duration: 1024 });
    return p;
  }, Ki = function(d) {
    var h, f, p = 0, v = new Uint8Array(Fr(d));
    for (h = 0; h < d.length; h++) f = d[h], v.set(f.data, p), p += f.data.byteLength;
    return v;
  }, dr = { prefixWithSilence: fi, trimAdtsFramesByEarliestDts: Gi, generateSampleTable: zi, concatenateFrameData: Ki }, cr = Se.ONE_SECOND_IN_TS, Xi = function(d, h) {
    typeof h.pts == "number" && (d.timelineStartInfo.pts === void 0 && (d.timelineStartInfo.pts = h.pts), d.minSegmentPts === void 0 ? d.minSegmentPts = h.pts : d.minSegmentPts = Math.min(d.minSegmentPts, h.pts), d.maxSegmentPts === void 0 ? d.maxSegmentPts = h.pts : d.maxSegmentPts = Math.max(d.maxSegmentPts, h.pts)), typeof h.dts == "number" && (d.timelineStartInfo.dts === void 0 && (d.timelineStartInfo.dts = h.dts), d.minSegmentDts === void 0 ? d.minSegmentDts = h.dts : d.minSegmentDts = Math.min(d.minSegmentDts, h.dts), d.maxSegmentDts === void 0 ? d.maxSegmentDts = h.dts : d.maxSegmentDts = Math.max(d.maxSegmentDts, h.dts));
  }, hi = function(d) {
    delete d.minSegmentDts, delete d.maxSegmentDts, delete d.minSegmentPts, delete d.maxSegmentPts;
  }, $i = function(d, h) {
    var f, p, v = d.minSegmentDts;
    return h || (v -= d.timelineStartInfo.dts), f = d.timelineStartInfo.baseMediaDecodeTime, f += v, f = Math.max(0, f), d.type === "audio" && (p = d.samplerate / cr, f *= p, f = Math.floor(f)), f;
  }, x = { clearDtsInfo: hi, calculateTrackBaseMediaDecodeTime: $i, collectDtsInfo: Xi }, A = 4, I = 128, G = function(d) {
    for (var h = 0, f = { payloadType: -1, payloadSize: 0 }, p = 0, v = 0; h < d.byteLength && d[h] !== I; ) {
      for (; d[h] === 255; ) p += 255, h++;
      for (p += d[h++]; d[h] === 255; ) v += 255, h++;
      if (v += d[h++], !f.payload && p === A) {
        var y = String.fromCharCode(d[h + 3], d[h + 4], d[h + 5], d[h + 6]);
        if (y === "GA94") {
          f.payloadType = p, f.payloadSize = v, f.payload = d.subarray(h, h + v);
          break;
        } else f.payload = void 0;
      }
      h += v, p = 0, v = 0;
    }
    return f;
  }, se = function(d) {
    return d.payload[0] !== 181 || (d.payload[1] << 8 | d.payload[2]) !== 49 || String.fromCharCode(d.payload[3], d.payload[4], d.payload[5], d.payload[6]) !== "GA94" || d.payload[7] !== 3 ? null : d.payload.subarray(8, d.payload.length - 1);
  }, pe = function(d, h) {
    var f = [], p, v, y, D;
    if (!(h[0] & 64)) return f;
    for (v = h[0] & 31, p = 0; p < v; p++) y = p * 3, D = { type: h[y + 2] & 3, pts: d }, h[y + 2] & 4 && (D.ccData = h[y + 3] << 8 | h[y + 4], f.push(D));
    return f;
  }, De = function(d) {
    for (var h = d.byteLength, f = [], p = 1, v, y; p < h - 2; ) d[p] === 0 && d[p + 1] === 0 && d[p + 2] === 3 ? (f.push(p + 2), p += 2) : p++;
    if (f.length === 0) return d;
    v = h - f.length, y = new Uint8Array(v);
    var D = 0;
    for (p = 0; p < v; D++, p++) D === f[0] && (D++, f.shift()), y[p] = d[D];
    return y;
  }, ze = { parseSei: G, parseUserData: se, parseCaptionPackets: pe, discardEmulationPreventionBytes: De, USER_DATA_REGISTERED_ITU_T_T35: A }, Oe = function b(d) {
    d = d || {}, b.prototype.init.call(this), this.parse708captions_ = typeof d.parse708captions == "boolean" ? d.parse708captions : true, this.captionPackets_ = [], this.ccStreams_ = [new ke(0, 0), new ke(0, 1), new ke(1, 0), new ke(1, 1)], this.parse708captions_ && (this.cc708Stream_ = new xe({ captionServices: d.captionServices })), this.reset(), this.ccStreams_.forEach(function(h) {
      h.on("data", this.trigger.bind(this, "data")), h.on("partialdone", this.trigger.bind(this, "partialdone")), h.on("done", this.trigger.bind(this, "done"));
    }, this), this.parse708captions_ && (this.cc708Stream_.on("data", this.trigger.bind(this, "data")), this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")), this.cc708Stream_.on("done", this.trigger.bind(this, "done")));
  };
  Oe.prototype = new r(), Oe.prototype.push = function(b) {
    var d, h, f;
    if (b.nalUnitType === "sei_rbsp" && (d = ze.parseSei(b.escapedRBSP), !!d.payload && d.payloadType === ze.USER_DATA_REGISTERED_ITU_T_T35 && (h = ze.parseUserData(d), !!h))) {
      if (b.dts < this.latestDts_) {
        this.ignoreNextEqualDts_ = true;
        return;
      } else if (b.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
        this.numSameDts_--, this.numSameDts_ || (this.ignoreNextEqualDts_ = false);
        return;
      }
      f = ze.parseCaptionPackets(b.pts, h), this.captionPackets_ = this.captionPackets_.concat(f), this.latestDts_ !== b.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = b.dts;
    }
  }, Oe.prototype.flushCCStreams = function(b) {
    this.ccStreams_.forEach(function(d) {
      return b === "flush" ? d.flush() : d.partialFlush();
    }, this);
  }, Oe.prototype.flushStream = function(b) {
    if (!this.captionPackets_.length) {
      this.flushCCStreams(b);
      return;
    }
    this.captionPackets_.forEach(function(d, h) {
      d.presortIndex = h;
    }), this.captionPackets_.sort(function(d, h) {
      return d.pts === h.pts ? d.presortIndex - h.presortIndex : d.pts - h.pts;
    }), this.captionPackets_.forEach(function(d) {
      d.type < 2 ? this.dispatchCea608Packet(d) : this.dispatchCea708Packet(d);
    }, this), this.captionPackets_.length = 0, this.flushCCStreams(b);
  }, Oe.prototype.flush = function() {
    return this.flushStream("flush");
  }, Oe.prototype.partialFlush = function() {
    return this.flushStream("partialFlush");
  }, Oe.prototype.reset = function() {
    this.latestDts_ = null, this.ignoreNextEqualDts_ = false, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function(b) {
      b.reset();
    });
  }, Oe.prototype.dispatchCea608Packet = function(b) {
    this.setsTextOrXDSActive(b) ? this.activeCea608Channel_[b.type] = null : this.setsChannel1Active(b) ? this.activeCea608Channel_[b.type] = 0 : this.setsChannel2Active(b) && (this.activeCea608Channel_[b.type] = 1), this.activeCea608Channel_[b.type] !== null && this.ccStreams_[(b.type << 1) + this.activeCea608Channel_[b.type]].push(b);
  }, Oe.prototype.setsChannel1Active = function(b) {
    return (b.ccData & 30720) === 4096;
  }, Oe.prototype.setsChannel2Active = function(b) {
    return (b.ccData & 30720) === 6144;
  }, Oe.prototype.setsTextOrXDSActive = function(b) {
    return (b.ccData & 28928) === 256 || (b.ccData & 30974) === 4138 || (b.ccData & 30974) === 6186;
  }, Oe.prototype.dispatchCea708Packet = function(b) {
    this.parse708captions_ && this.cc708Stream_.push(b);
  };
  var Mt = { 127: 9834, 4128: 32, 4129: 160, 4133: 8230, 4138: 352, 4140: 338, 4144: 9608, 4145: 8216, 4146: 8217, 4147: 8220, 4148: 8221, 4149: 8226, 4153: 8482, 4154: 353, 4156: 339, 4157: 8480, 4159: 376, 4214: 8539, 4215: 8540, 4216: 8541, 4217: 8542, 4218: 9168, 4219: 9124, 4220: 9123, 4221: 9135, 4222: 9126, 4223: 9121, 4256: 12600 }, Dt = function(d) {
    var h = Mt[d] || d;
    return d & 4096 && d === h ? "" : String.fromCharCode(h);
  }, St = function(d) {
    return 32 <= d && d <= 127 || 160 <= d && d <= 255;
  }, et = function(d) {
    this.windowNum = d, this.reset();
  };
  et.prototype.reset = function() {
    this.clearText(), this.pendingNewLine = false, this.winAttr = {}, this.penAttr = {}, this.penLoc = {}, this.penColor = {}, this.visible = 0, this.rowLock = 0, this.columnLock = 0, this.priority = 0, this.relativePositioning = 0, this.anchorVertical = 0, this.anchorHorizontal = 0, this.anchorPoint = 0, this.rowCount = 1, this.virtualRowCount = this.rowCount + 1, this.columnCount = 41, this.windowStyle = 0, this.penStyle = 0;
  }, et.prototype.getText = function() {
    return this.rows.join(`
`);
  }, et.prototype.clearText = function() {
    this.rows = [""], this.rowIdx = 0;
  }, et.prototype.newLine = function(b) {
    for (this.rows.length >= this.virtualRowCount && typeof this.beforeRowOverflow == "function" && this.beforeRowOverflow(b), this.rows.length > 0 && (this.rows.push(""), this.rowIdx++); this.rows.length > this.virtualRowCount; ) this.rows.shift(), this.rowIdx--;
  }, et.prototype.isEmpty = function() {
    return this.rows.length === 0 ? true : this.rows.length === 1 ? this.rows[0] === "" : false;
  }, et.prototype.addText = function(b) {
    this.rows[this.rowIdx] += b;
  }, et.prototype.backspace = function() {
    if (!this.isEmpty()) {
      var b = this.rows[this.rowIdx];
      this.rows[this.rowIdx] = b.substr(0, b.length - 1);
    }
  };
  var Et = function(d, h, f) {
    this.serviceNum = d, this.text = "", this.currentWindow = new et(-1), this.windows = [], this.stream = f, typeof h == "string" && this.createTextDecoder(h);
  };
  Et.prototype.init = function(b, d) {
    this.startPts = b;
    for (var h = 0; h < 8; h++) this.windows[h] = new et(h), typeof d == "function" && (this.windows[h].beforeRowOverflow = d);
  }, Et.prototype.setCurrentWindow = function(b) {
    this.currentWindow = this.windows[b];
  }, Et.prototype.createTextDecoder = function(b) {
    if (typeof TextDecoder > "u") this.stream.trigger("log", { level: "warn", message: "The `encoding` option is unsupported without TextDecoder support" });
    else try {
      this.textDecoder_ = new TextDecoder(b);
    } catch (d) {
      this.stream.trigger("log", { level: "warn", message: "TextDecoder could not be created with " + b + " encoding. " + d });
    }
  };
  var xe = function b(d) {
    d = d || {}, b.prototype.init.call(this);
    var h = this, f = d.captionServices || {}, p = {}, v;
    Object.keys(f).forEach(function(y) {
      v = f[y], /^SERVICE/.test(y) && (p[y] = v.encoding);
    }), this.serviceEncodings = p, this.current708Packet = null, this.services = {}, this.push = function(y) {
      y.type === 3 ? (h.new708Packet(), h.add708Bytes(y)) : (h.current708Packet === null && h.new708Packet(), h.add708Bytes(y));
    };
  };
  xe.prototype = new r(), xe.prototype.new708Packet = function() {
    this.current708Packet !== null && this.push708Packet(), this.current708Packet = { data: [], ptsVals: [] };
  }, xe.prototype.add708Bytes = function(b) {
    var d = b.ccData, h = d >>> 8, f = d & 255;
    this.current708Packet.ptsVals.push(b.pts), this.current708Packet.data.push(h), this.current708Packet.data.push(f);
  }, xe.prototype.push708Packet = function() {
    var b = this.current708Packet, d = b.data, h = null, f = null, p = 0, v = d[p++];
    for (b.seq = v >> 6, b.sizeCode = v & 63; p < d.length; p++) v = d[p++], h = v >> 5, f = v & 31, h === 7 && f > 0 && (v = d[p++], h = v), this.pushServiceBlock(h, p, f), f > 0 && (p += f - 1);
  }, xe.prototype.pushServiceBlock = function(b, d, h) {
    var f, p = d, v = this.current708Packet.data, y = this.services[b];
    for (y || (y = this.initService(b, p)); p < d + h && p < v.length; p++) f = v[p], St(f) ? p = this.handleText(p, y) : f === 24 ? p = this.multiByteCharacter(p, y) : f === 16 ? p = this.extendedCommands(p, y) : 128 <= f && f <= 135 ? p = this.setCurrentWindow(p, y) : 152 <= f && f <= 159 ? p = this.defineWindow(p, y) : f === 136 ? p = this.clearWindows(p, y) : f === 140 ? p = this.deleteWindows(p, y) : f === 137 ? p = this.displayWindows(p, y) : f === 138 ? p = this.hideWindows(p, y) : f === 139 ? p = this.toggleWindows(p, y) : f === 151 ? p = this.setWindowAttributes(p, y) : f === 144 ? p = this.setPenAttributes(p, y) : f === 145 ? p = this.setPenColor(p, y) : f === 146 ? p = this.setPenLocation(p, y) : f === 143 ? y = this.reset(p, y) : f === 8 ? y.currentWindow.backspace() : f === 12 ? y.currentWindow.clearText() : f === 13 ? y.currentWindow.pendingNewLine = true : f === 14 ? y.currentWindow.clearText() : f === 141 && p++;
  }, xe.prototype.extendedCommands = function(b, d) {
    var h = this.current708Packet.data, f = h[++b];
    return St(f) && (b = this.handleText(b, d, { isExtended: true })), b;
  }, xe.prototype.getPts = function(b) {
    return this.current708Packet.ptsVals[Math.floor(b / 2)];
  }, xe.prototype.initService = function(b, d) {
    var f = "SERVICE" + b, h = this, f, p;
    return f in this.serviceEncodings && (p = this.serviceEncodings[f]), this.services[b] = new Et(b, p, h), this.services[b].init(this.getPts(d), function(v) {
      h.flushDisplayed(v, h.services[b]);
    }), this.services[b];
  }, xe.prototype.handleText = function(b, d, h) {
    var f = h && h.isExtended, p = h && h.isMultiByte, v = this.current708Packet.data, y = f ? 4096 : 0, D = v[b], k = v[b + 1], L = d.currentWindow, O, U;
    return d.textDecoder_ && !f ? (p ? (U = [D, k], b++) : U = [D], O = d.textDecoder_.decode(new Uint8Array(U))) : O = Dt(y | D), L.pendingNewLine && !L.isEmpty() && L.newLine(this.getPts(b)), L.pendingNewLine = false, L.addText(O), b;
  }, xe.prototype.multiByteCharacter = function(b, d) {
    var h = this.current708Packet.data, f = h[b + 1], p = h[b + 2];
    return St(f) && St(p) && (b = this.handleText(++b, d, { isMultiByte: true })), b;
  }, xe.prototype.setCurrentWindow = function(b, d) {
    var h = this.current708Packet.data, f = h[b], p = f & 7;
    return d.setCurrentWindow(p), b;
  }, xe.prototype.defineWindow = function(b, d) {
    var h = this.current708Packet.data, f = h[b], p = f & 7;
    d.setCurrentWindow(p);
    var v = d.currentWindow;
    return f = h[++b], v.visible = (f & 32) >> 5, v.rowLock = (f & 16) >> 4, v.columnLock = (f & 8) >> 3, v.priority = f & 7, f = h[++b], v.relativePositioning = (f & 128) >> 7, v.anchorVertical = f & 127, f = h[++b], v.anchorHorizontal = f, f = h[++b], v.anchorPoint = (f & 240) >> 4, v.rowCount = f & 15, f = h[++b], v.columnCount = f & 63, f = h[++b], v.windowStyle = (f & 56) >> 3, v.penStyle = f & 7, v.virtualRowCount = v.rowCount + 1, b;
  }, xe.prototype.setWindowAttributes = function(b, d) {
    var h = this.current708Packet.data, f = h[b], p = d.currentWindow.winAttr;
    return f = h[++b], p.fillOpacity = (f & 192) >> 6, p.fillRed = (f & 48) >> 4, p.fillGreen = (f & 12) >> 2, p.fillBlue = f & 3, f = h[++b], p.borderType = (f & 192) >> 6, p.borderRed = (f & 48) >> 4, p.borderGreen = (f & 12) >> 2, p.borderBlue = f & 3, f = h[++b], p.borderType += (f & 128) >> 5, p.wordWrap = (f & 64) >> 6, p.printDirection = (f & 48) >> 4, p.scrollDirection = (f & 12) >> 2, p.justify = f & 3, f = h[++b], p.effectSpeed = (f & 240) >> 4, p.effectDirection = (f & 12) >> 2, p.displayEffect = f & 3, b;
  }, xe.prototype.flushDisplayed = function(b, d) {
    for (var h = [], f = 0; f < 8; f++) d.windows[f].visible && !d.windows[f].isEmpty() && h.push(d.windows[f].getText());
    d.endPts = b, d.text = h.join(`

`), this.pushCaption(d), d.startPts = b;
  }, xe.prototype.pushCaption = function(b) {
    b.text !== "" && (this.trigger("data", { startPts: b.startPts, endPts: b.endPts, text: b.text, stream: "cc708_" + b.serviceNum }), b.text = "", b.startPts = b.endPts);
  }, xe.prototype.displayWindows = function(b, d) {
    var h = this.current708Packet.data, f = h[++b], p = this.getPts(b);
    this.flushDisplayed(p, d);
    for (var v = 0; v < 8; v++) f & 1 << v && (d.windows[v].visible = 1);
    return b;
  }, xe.prototype.hideWindows = function(b, d) {
    var h = this.current708Packet.data, f = h[++b], p = this.getPts(b);
    this.flushDisplayed(p, d);
    for (var v = 0; v < 8; v++) f & 1 << v && (d.windows[v].visible = 0);
    return b;
  }, xe.prototype.toggleWindows = function(b, d) {
    var h = this.current708Packet.data, f = h[++b], p = this.getPts(b);
    this.flushDisplayed(p, d);
    for (var v = 0; v < 8; v++) f & 1 << v && (d.windows[v].visible ^= 1);
    return b;
  }, xe.prototype.clearWindows = function(b, d) {
    var h = this.current708Packet.data, f = h[++b], p = this.getPts(b);
    this.flushDisplayed(p, d);
    for (var v = 0; v < 8; v++) f & 1 << v && d.windows[v].clearText();
    return b;
  }, xe.prototype.deleteWindows = function(b, d) {
    var h = this.current708Packet.data, f = h[++b], p = this.getPts(b);
    this.flushDisplayed(p, d);
    for (var v = 0; v < 8; v++) f & 1 << v && d.windows[v].reset();
    return b;
  }, xe.prototype.setPenAttributes = function(b, d) {
    var h = this.current708Packet.data, f = h[b], p = d.currentWindow.penAttr;
    return f = h[++b], p.textTag = (f & 240) >> 4, p.offset = (f & 12) >> 2, p.penSize = f & 3, f = h[++b], p.italics = (f & 128) >> 7, p.underline = (f & 64) >> 6, p.edgeType = (f & 56) >> 3, p.fontStyle = f & 7, b;
  }, xe.prototype.setPenColor = function(b, d) {
    var h = this.current708Packet.data, f = h[b], p = d.currentWindow.penColor;
    return f = h[++b], p.fgOpacity = (f & 192) >> 6, p.fgRed = (f & 48) >> 4, p.fgGreen = (f & 12) >> 2, p.fgBlue = f & 3, f = h[++b], p.bgOpacity = (f & 192) >> 6, p.bgRed = (f & 48) >> 4, p.bgGreen = (f & 12) >> 2, p.bgBlue = f & 3, f = h[++b], p.edgeRed = (f & 48) >> 4, p.edgeGreen = (f & 12) >> 2, p.edgeBlue = f & 3, b;
  }, xe.prototype.setPenLocation = function(b, d) {
    var h = this.current708Packet.data, f = h[b], p = d.currentWindow.penLoc;
    return d.currentWindow.pendingNewLine = true, f = h[++b], p.row = f & 15, f = h[++b], p.column = f & 63, b;
  }, xe.prototype.reset = function(b, d) {
    var h = this.getPts(b);
    return this.flushDisplayed(h, d), this.initService(d.serviceNum, b);
  };
  var zt = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 304: 174, 305: 176, 306: 189, 307: 191, 308: 8482, 309: 162, 310: 163, 311: 9834, 312: 224, 313: 160, 314: 232, 315: 226, 316: 234, 317: 238, 318: 244, 319: 251, 544: 193, 545: 201, 546: 211, 547: 218, 548: 220, 549: 252, 550: 8216, 551: 161, 552: 42, 553: 39, 554: 8212, 555: 169, 556: 8480, 557: 8226, 558: 8220, 559: 8221, 560: 192, 561: 194, 562: 199, 563: 200, 564: 202, 565: 203, 566: 235, 567: 206, 568: 207, 569: 239, 570: 212, 571: 217, 572: 249, 573: 219, 574: 171, 575: 187, 800: 195, 801: 227, 802: 205, 803: 204, 804: 236, 805: 210, 806: 242, 807: 213, 808: 245, 809: 123, 810: 125, 811: 92, 812: 94, 813: 95, 814: 124, 815: 126, 816: 196, 817: 228, 818: 214, 819: 246, 820: 223, 821: 165, 822: 164, 823: 9474, 824: 197, 825: 229, 826: 216, 827: 248, 828: 9484, 829: 9488, 830: 9492, 831: 9496 }, Nt = function(d) {
    return d === null ? "" : (d = zt[d] || d, String.fromCharCode(d));
  }, je = 14, Yi = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152], mt = function() {
    for (var d = [], h = je + 1; h--; ) d.push("");
    return d;
  }, ke = function b(d, h) {
    b.prototype.init.call(this), this.field_ = d || 0, this.dataChannel_ = h || 0, this.name_ = "CC" + ((this.field_ << 1 | this.dataChannel_) + 1), this.setConstants(), this.reset(), this.push = function(f) {
      var p, v, y, D, k;
      if (p = f.ccData & 32639, p === this.lastControlCode_) {
        this.lastControlCode_ = null;
        return;
      }
      if ((p & 61440) === 4096 ? this.lastControlCode_ = p : p !== this.PADDING_ && (this.lastControlCode_ = null), y = p >>> 8, D = p & 255, p !== this.PADDING_) if (p === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
      else if (p === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(f.pts), this.flushDisplayed(f.pts), v = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = v, this.startPts_ = f.pts;
      else if (p === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(f.pts);
      else if (p === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(f.pts);
      else if (p === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(f.pts);
      else if (p === this.CARRIAGE_RETURN_) this.clearFormatting(f.pts), this.flushDisplayed(f.pts), this.shiftRowsUp_(), this.startPts_ = f.pts;
      else if (p === this.BACKSPACE_) this.mode_ === "popOn" ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
      else if (p === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(f.pts), this.displayed_ = mt();
      else if (p === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = mt();
      else if (p === this.RESUME_DIRECT_CAPTIONING_) this.mode_ !== "paintOn" && (this.flushDisplayed(f.pts), this.displayed_ = mt()), this.mode_ = "paintOn", this.startPts_ = f.pts;
      else if (this.isSpecialCharacter(y, D)) y = (y & 3) << 8, k = Nt(y | D), this[this.mode_](f.pts, k), this.column_++;
      else if (this.isExtCharacter(y, D)) this.mode_ === "popOn" ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), y = (y & 3) << 8, k = Nt(y | D), this[this.mode_](f.pts, k), this.column_++;
      else if (this.isMidRowCode(y, D)) this.clearFormatting(f.pts), this[this.mode_](f.pts, " "), this.column_++, (D & 14) === 14 && this.addFormatting(f.pts, ["i"]), (D & 1) === 1 && this.addFormatting(f.pts, ["u"]);
      else if (this.isOffsetControlCode(y, D)) this.column_ += D & 3;
      else if (this.isPAC(y, D)) {
        var L = Yi.indexOf(p & 7968);
        this.mode_ === "rollUp" && (L - this.rollUpRows_ + 1 < 0 && (L = this.rollUpRows_ - 1), this.setRollUp(f.pts, L)), L !== this.row_ && (this.clearFormatting(f.pts), this.row_ = L), D & 1 && this.formatting_.indexOf("u") === -1 && this.addFormatting(f.pts, ["u"]), (p & 16) === 16 && (this.column_ = ((p & 14) >> 1) * 4), this.isColorPAC(D) && (D & 14) === 14 && this.addFormatting(f.pts, ["i"]);
      } else this.isNormalChar(y) && (D === 0 && (D = null), k = Nt(y), k += Nt(D), this[this.mode_](f.pts, k), this.column_ += k.length);
    };
  };
  ke.prototype = new r(), ke.prototype.flushDisplayed = function(b) {
    var d = this.displayed_.map(function(h, f) {
      try {
        return h.trim();
      } catch {
        return this.trigger("log", { level: "warn", message: "Skipping a malformed 608 caption at index " + f + "." }), "";
      }
    }, this).join(`
`).replace(/^\n+|\n+$/g, "");
    d.length && this.trigger("data", { startPts: this.startPts_, endPts: b, text: d, stream: this.name_ });
  }, ke.prototype.reset = function() {
    this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = mt(), this.nonDisplayed_ = mt(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = je, this.rollUpRows_ = 2, this.formatting_ = [];
  }, ke.prototype.setConstants = function() {
    this.dataChannel_ === 0 ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : this.dataChannel_ === 1 && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = this.CONTROL_ | 32, this.END_OF_CAPTION_ = this.CONTROL_ | 47, this.ROLL_UP_2_ROWS_ = this.CONTROL_ | 37, this.ROLL_UP_3_ROWS_ = this.CONTROL_ | 38, this.ROLL_UP_4_ROWS_ = this.CONTROL_ | 39, this.CARRIAGE_RETURN_ = this.CONTROL_ | 45, this.RESUME_DIRECT_CAPTIONING_ = this.CONTROL_ | 41, this.BACKSPACE_ = this.CONTROL_ | 33, this.ERASE_DISPLAYED_MEMORY_ = this.CONTROL_ | 44, this.ERASE_NON_DISPLAYED_MEMORY_ = this.CONTROL_ | 46;
  }, ke.prototype.isSpecialCharacter = function(b, d) {
    return b === this.EXT_ && d >= 48 && d <= 63;
  }, ke.prototype.isExtCharacter = function(b, d) {
    return (b === this.EXT_ + 1 || b === this.EXT_ + 2) && d >= 32 && d <= 63;
  }, ke.prototype.isMidRowCode = function(b, d) {
    return b === this.EXT_ && d >= 32 && d <= 47;
  }, ke.prototype.isOffsetControlCode = function(b, d) {
    return b === this.OFFSET_ && d >= 33 && d <= 35;
  }, ke.prototype.isPAC = function(b, d) {
    return b >= this.BASE_ && b < this.BASE_ + 8 && d >= 64 && d <= 127;
  }, ke.prototype.isColorPAC = function(b) {
    return b >= 64 && b <= 79 || b >= 96 && b <= 127;
  }, ke.prototype.isNormalChar = function(b) {
    return b >= 32 && b <= 127;
  }, ke.prototype.setRollUp = function(b, d) {
    if (this.mode_ !== "rollUp" && (this.row_ = je, this.mode_ = "rollUp", this.flushDisplayed(b), this.nonDisplayed_ = mt(), this.displayed_ = mt()), d !== void 0 && d !== this.row_) for (var h = 0; h < this.rollUpRows_; h++) this.displayed_[d - h] = this.displayed_[this.row_ - h], this.displayed_[this.row_ - h] = "";
    d === void 0 && (d = this.row_), this.topRow_ = d - this.rollUpRows_ + 1;
  }, ke.prototype.addFormatting = function(b, d) {
    this.formatting_ = this.formatting_.concat(d);
    var h = d.reduce(function(f, p) {
      return f + "<" + p + ">";
    }, "");
    this[this.mode_](b, h);
  }, ke.prototype.clearFormatting = function(b) {
    if (this.formatting_.length) {
      var d = this.formatting_.reverse().reduce(function(h, f) {
        return h + "</" + f + ">";
      }, "");
      this.formatting_ = [], this[this.mode_](b, d);
    }
  }, ke.prototype.popOn = function(b, d) {
    var h = this.nonDisplayed_[this.row_];
    h += d, this.nonDisplayed_[this.row_] = h;
  }, ke.prototype.rollUp = function(b, d) {
    var h = this.displayed_[this.row_];
    h += d, this.displayed_[this.row_] = h;
  }, ke.prototype.shiftRowsUp_ = function() {
    var b;
    for (b = 0; b < this.topRow_; b++) this.displayed_[b] = "";
    for (b = this.row_ + 1; b < je + 1; b++) this.displayed_[b] = "";
    for (b = this.topRow_; b < this.row_; b++) this.displayed_[b] = this.displayed_[b + 1];
    this.displayed_[this.row_] = "";
  }, ke.prototype.paintOn = function(b, d) {
    var h = this.displayed_[this.row_];
    h += d, this.displayed_[this.row_] = h;
  };
  var Qi = { CaptionStream: Oe, Cea608Stream: ke, Cea708Stream: xe }, tt = { H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21 }, df = 8589934592, cf = 4294967296, wo = "shared", ma = function(d, h) {
    var f = 1;
    for (d > h && (f = -1); Math.abs(h - d) > cf; ) d += f * df;
    return d;
  }, ko = function b(d) {
    var h, f;
    b.prototype.init.call(this), this.type_ = d || wo, this.push = function(p) {
      this.type_ !== wo && p.type !== this.type_ || (f === void 0 && (f = p.dts), p.dts = ma(p.dts, f), p.pts = ma(p.pts, f), h = p.dts, this.trigger("data", p));
    }, this.flush = function() {
      f = h, this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    }, this.discontinuity = function() {
      f = void 0, h = void 0;
    }, this.reset = function() {
      this.discontinuity(), this.trigger("reset");
    };
  };
  ko.prototype = new r();
  var Po = { TimestampRolloverStream: ko, handleRollover: ma }, Io = function(d, h, f) {
    var p, v = "";
    for (p = h; p < f; p++) v += "%" + ("00" + d[p].toString(16)).slice(-2);
    return v;
  }, Ji = function(d, h, f) {
    return decodeURIComponent(Io(d, h, f));
  }, ff = function(d, h, f) {
    return unescape(Io(d, h, f));
  }, Zi = function(d) {
    return d[0] << 21 | d[1] << 14 | d[2] << 7 | d[3];
  }, Oo = { TXXX: function(d) {
    var h;
    if (d.data[0] === 3) {
      for (h = 1; h < d.data.length; h++) if (d.data[h] === 0) {
        d.description = Ji(d.data, 1, h), d.value = Ji(d.data, h + 1, d.data.length).replace(/\0*$/, "");
        break;
      }
      d.data = d.value;
    }
  }, WXXX: function(d) {
    var h;
    if (d.data[0] === 3) {
      for (h = 1; h < d.data.length; h++) if (d.data[h] === 0) {
        d.description = Ji(d.data, 1, h), d.url = Ji(d.data, h + 1, d.data.length);
        break;
      }
    }
  }, PRIV: function(d) {
    var h;
    for (h = 0; h < d.data.length; h++) if (d.data[h] === 0) {
      d.owner = ff(d.data, 0, h);
      break;
    }
    d.privateData = d.data.subarray(h + 1), d.data = d.privateData;
  } }, en;
  en = function(d) {
    var h = { descriptor: d && d.descriptor }, f = 0, p = [], v = 0, y;
    if (en.prototype.init.call(this), this.dispatchType = tt.METADATA_STREAM_TYPE.toString(16), h.descriptor) for (y = 0; y < h.descriptor.length; y++) this.dispatchType += ("00" + h.descriptor[y].toString(16)).slice(-2);
    this.push = function(D) {
      var k, L, O, U, X, ue;
      if (D.type === "timed-metadata") {
        if (D.dataAlignmentIndicator && (v = 0, p.length = 0), p.length === 0 && (D.data.length < 10 || D.data[0] !== 73 || D.data[1] !== 68 || D.data[2] !== 51)) {
          this.trigger("log", { level: "warn", message: "Skipping unrecognized metadata packet" });
          return;
        }
        if (p.push(D), v += D.data.byteLength, p.length === 1 && (f = Zi(D.data.subarray(6, 10)), f += 10), !(v < f)) {
          for (k = { data: new Uint8Array(f), frames: [], pts: p[0].pts, dts: p[0].dts }, X = 0; X < f; ) k.data.set(p[0].data.subarray(0, f - X), X), X += p[0].data.byteLength, v -= p[0].data.byteLength, p.shift();
          L = 10, k.data[5] & 64 && (L += 4, L += Zi(k.data.subarray(10, 14)), f -= Zi(k.data.subarray(16, 20)));
          do {
            if (O = Zi(k.data.subarray(L + 4, L + 8)), O < 1) {
              this.trigger("log", { level: "warn", message: "Malformed ID3 frame encountered. Skipping metadata parsing." });
              return;
            }
            if (ue = String.fromCharCode(k.data[L], k.data[L + 1], k.data[L + 2], k.data[L + 3]), U = { id: ue, data: k.data.subarray(L + 10, L + O + 10) }, U.key = U.id, Oo[U.id] && (Oo[U.id](U), U.owner === "com.apple.streaming.transportStreamTimestamp")) {
              var de = U.data, ne = (de[3] & 1) << 30 | de[4] << 22 | de[5] << 14 | de[6] << 6 | de[7] >>> 2;
              ne *= 4, ne += de[7] & 3, U.timeStamp = ne, k.pts === void 0 && k.dts === void 0 && (k.pts = U.timeStamp, k.dts = U.timeStamp), this.trigger("timestamp", U);
            }
            k.frames.push(U), L += 10, L += O;
          } while (L < f);
          this.trigger("data", k);
        }
      }
    };
  }, en.prototype = new r();
  var hf = en, pf = Po.TimestampRolloverStream, tn, pi, rn, Rr = 188, ga = 71;
  tn = function() {
    var d = new Uint8Array(Rr), h = 0;
    tn.prototype.init.call(this), this.push = function(f) {
      var p = 0, v = Rr, y;
      for (h ? (y = new Uint8Array(f.byteLength + h), y.set(d.subarray(0, h)), y.set(f, h), h = 0) : y = f; v < y.byteLength; ) {
        if (y[p] === ga && y[v] === ga) {
          this.trigger("data", y.subarray(p, v)), p += Rr, v += Rr;
          continue;
        }
        p++, v++;
      }
      p < y.byteLength && (d.set(y.subarray(p), 0), h = y.byteLength - p);
    }, this.flush = function() {
      h === Rr && d[0] === ga && (this.trigger("data", d), h = 0), this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    }, this.reset = function() {
      h = 0, this.trigger("reset");
    };
  }, tn.prototype = new r(), pi = function() {
    var d, h, f, p;
    pi.prototype.init.call(this), p = this, this.packetsWaitingForPmt = [], this.programMapTable = void 0, d = function(y, D) {
      var k = 0;
      D.payloadUnitStartIndicator && (k += y[k] + 1), D.type === "pat" ? h(y.subarray(k), D) : f(y.subarray(k), D);
    }, h = function(y, D) {
      D.section_number = y[7], D.last_section_number = y[8], p.pmtPid = (y[10] & 31) << 8 | y[11], D.pmtPid = p.pmtPid;
    }, f = function(y, D) {
      var k, L, O, U;
      if (y[5] & 1) {
        for (p.programMapTable = { video: null, audio: null, "timed-metadata": {} }, k = (y[1] & 15) << 8 | y[2], L = 3 + k - 4, O = (y[10] & 15) << 8 | y[11], U = 12 + O; U < L; ) {
          var X = y[U], ue = (y[U + 1] & 31) << 8 | y[U + 2];
          X === tt.H264_STREAM_TYPE && p.programMapTable.video === null ? p.programMapTable.video = ue : X === tt.ADTS_STREAM_TYPE && p.programMapTable.audio === null ? p.programMapTable.audio = ue : X === tt.METADATA_STREAM_TYPE && (p.programMapTable["timed-metadata"][ue] = X), U += ((y[U + 3] & 15) << 8 | y[U + 4]) + 5;
        }
        D.programMapTable = p.programMapTable;
      }
    }, this.push = function(v) {
      var y = {}, D = 4;
      if (y.payloadUnitStartIndicator = !!(v[1] & 64), y.pid = v[1] & 31, y.pid <<= 8, y.pid |= v[2], (v[3] & 48) >>> 4 > 1 && (D += v[D] + 1), y.pid === 0) y.type = "pat", d(v.subarray(D), y), this.trigger("data", y);
      else if (y.pid === this.pmtPid) for (y.type = "pmt", d(v.subarray(D), y), this.trigger("data", y); this.packetsWaitingForPmt.length; ) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
      else this.programMapTable === void 0 ? this.packetsWaitingForPmt.push([v, D, y]) : this.processPes_(v, D, y);
    }, this.processPes_ = function(v, y, D) {
      D.pid === this.programMapTable.video ? D.streamType = tt.H264_STREAM_TYPE : D.pid === this.programMapTable.audio ? D.streamType = tt.ADTS_STREAM_TYPE : D.streamType = this.programMapTable["timed-metadata"][D.pid], D.type = "pes", D.data = v.subarray(y), this.trigger("data", D);
    };
  }, pi.prototype = new r(), pi.STREAM_TYPES = { h264: 27, adts: 15 }, rn = function() {
    var d = this, h = false, f = { data: [], size: 0 }, p = { data: [], size: 0 }, v = { data: [], size: 0 }, y, D = function(O, U) {
      var X, ue = O[0] << 16 | O[1] << 8 | O[2];
      U.data = new Uint8Array(), ue === 1 && (U.packetLength = 6 + (O[4] << 8 | O[5]), U.dataAlignmentIndicator = (O[6] & 4) !== 0, X = O[7], X & 192 && (U.pts = (O[9] & 14) << 27 | (O[10] & 255) << 20 | (O[11] & 254) << 12 | (O[12] & 255) << 5 | (O[13] & 254) >>> 3, U.pts *= 4, U.pts += (O[13] & 6) >>> 1, U.dts = U.pts, X & 64 && (U.dts = (O[14] & 14) << 27 | (O[15] & 255) << 20 | (O[16] & 254) << 12 | (O[17] & 255) << 5 | (O[18] & 254) >>> 3, U.dts *= 4, U.dts += (O[18] & 6) >>> 1)), U.data = O.subarray(9 + O[8]));
    }, k = function(O, U, X) {
      var ue = new Uint8Array(O.size), de = { type: U }, ne = 0, ve = 0, Xe = false, ot;
      if (!(!O.data.length || O.size < 9)) {
        for (de.trackId = O.data[0].pid, ne = 0; ne < O.data.length; ne++) ot = O.data[ne], ue.set(ot.data, ve), ve += ot.data.byteLength;
        D(ue, de), Xe = U === "video" || de.packetLength <= O.size, (X || Xe) && (O.size = 0, O.data.length = 0), Xe && d.trigger("data", de);
      }
    };
    rn.prototype.init.call(this), this.push = function(L) {
      ({ pat: function() {
      }, pes: function() {
        var U, X;
        switch (L.streamType) {
          case tt.H264_STREAM_TYPE:
            U = f, X = "video";
            break;
          case tt.ADTS_STREAM_TYPE:
            U = p, X = "audio";
            break;
          case tt.METADATA_STREAM_TYPE:
            U = v, X = "timed-metadata";
            break;
          default:
            return;
        }
        L.payloadUnitStartIndicator && k(U, X, true), U.data.push(L), U.size += L.data.byteLength;
      }, pmt: function() {
        var U = { type: "metadata", tracks: [] };
        y = L.programMapTable, y.video !== null && U.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +y.video, codec: "avc", type: "video" }), y.audio !== null && U.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +y.audio, codec: "adts", type: "audio" }), h = true, d.trigger("data", U);
      } })[L.type]();
    }, this.reset = function() {
      f.size = 0, f.data.length = 0, p.size = 0, p.data.length = 0, this.trigger("reset");
    }, this.flushStreams_ = function() {
      k(f, "video"), k(p, "audio"), k(v, "timed-metadata");
    }, this.flush = function() {
      if (!h && y) {
        var L = { type: "metadata", tracks: [] };
        y.video !== null && L.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +y.video, codec: "avc", type: "video" }), y.audio !== null && L.tracks.push({ timelineStartInfo: { baseMediaDecodeTime: 0 }, id: +y.audio, codec: "adts", type: "audio" }), d.trigger("data", L);
      }
      h = false, this.flushStreams_(), this.trigger("done");
    };
  }, rn.prototype = new r();
  var Lo = { PAT_PID: 0, MP2T_PACKET_LENGTH: Rr, TransportPacketStream: tn, TransportParseStream: pi, ElementaryStream: rn, TimestampRolloverStream: pf, CaptionStream: Qi.CaptionStream, Cea608Stream: Qi.Cea608Stream, Cea708Stream: Qi.Cea708Stream, MetadataStream: hf };
  for (var va in tt) tt.hasOwnProperty(va) && (Lo[va] = tt[va]);
  var Kt = Lo, mf = Se.ONE_SECOND_IN_TS, nn, Fo = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  nn = function(d) {
    var h, f = 0;
    nn.prototype.init.call(this), this.skipWarn_ = function(p, v) {
      this.trigger("log", { level: "warn", message: "adts skiping bytes " + p + " to " + v + " in frame " + f + " outside syncword" });
    }, this.push = function(p) {
      var v = 0, y, D, k, L, O;
      if (d || (f = 0), p.type === "audio") {
        h && h.length ? (k = h, h = new Uint8Array(k.byteLength + p.data.byteLength), h.set(k), h.set(p.data, k.byteLength)) : h = p.data;
        for (var U; v + 7 < h.length; ) {
          if (h[v] !== 255 || (h[v + 1] & 246) !== 240) {
            typeof U != "number" && (U = v), v++;
            continue;
          }
          if (typeof U == "number" && (this.skipWarn_(U, v), U = null), D = (~h[v + 1] & 1) * 2, y = (h[v + 3] & 3) << 11 | h[v + 4] << 3 | (h[v + 5] & 224) >> 5, L = ((h[v + 6] & 3) + 1) * 1024, O = L * mf / Fo[(h[v + 2] & 60) >>> 2], h.byteLength - v < y) break;
          this.trigger("data", { pts: p.pts + f * O, dts: p.dts + f * O, sampleCount: L, audioobjecttype: (h[v + 2] >>> 6 & 3) + 1, channelcount: (h[v + 2] & 1) << 2 | (h[v + 3] & 192) >>> 6, samplerate: Fo[(h[v + 2] & 60) >>> 2], samplingfrequencyindex: (h[v + 2] & 60) >>> 2, samplesize: 16, data: h.subarray(v + 7 + D, v + y) }), f++, v += y;
        }
        typeof U == "number" && (this.skipWarn_(U, v), U = null), h = h.subarray(v);
      }
    }, this.flush = function() {
      f = 0, this.trigger("done");
    }, this.reset = function() {
      h = void 0, this.trigger("reset");
    }, this.endTimeline = function() {
      h = void 0, this.trigger("endedtimeline");
    };
  }, nn.prototype = new r();
  var Ro = nn, Mo;
  Mo = function(d) {
    var h = d.byteLength, f = 0, p = 0;
    this.length = function() {
      return 8 * h;
    }, this.bitsAvailable = function() {
      return 8 * h + p;
    }, this.loadWord = function() {
      var v = d.byteLength - h, y = new Uint8Array(4), D = Math.min(4, h);
      if (D === 0) throw new Error("no bytes available");
      y.set(d.subarray(v, v + D)), f = new DataView(y.buffer).getUint32(0), p = D * 8, h -= D;
    }, this.skipBits = function(v) {
      var y;
      p > v ? (f <<= v, p -= v) : (v -= p, y = Math.floor(v / 8), v -= y * 8, h -= y, this.loadWord(), f <<= v, p -= v);
    }, this.readBits = function(v) {
      var y = Math.min(p, v), D = f >>> 32 - y;
      return p -= y, p > 0 ? f <<= y : h > 0 && this.loadWord(), y = v - y, y > 0 ? D << y | this.readBits(y) : D;
    }, this.skipLeadingZeros = function() {
      var v;
      for (v = 0; v < p; ++v) if ((f & 2147483648 >>> v) !== 0) return f <<= v, p -= v, v;
      return this.loadWord(), v + this.skipLeadingZeros();
    }, this.skipUnsignedExpGolomb = function() {
      this.skipBits(1 + this.skipLeadingZeros());
    }, this.skipExpGolomb = function() {
      this.skipBits(1 + this.skipLeadingZeros());
    }, this.readUnsignedExpGolomb = function() {
      var v = this.skipLeadingZeros();
      return this.readBits(v + 1) - 1;
    }, this.readExpGolomb = function() {
      var v = this.readUnsignedExpGolomb();
      return 1 & v ? 1 + v >>> 1 : -1 * (v >>> 1);
    }, this.readBoolean = function() {
      return this.readBits(1) === 1;
    }, this.readUnsignedByte = function() {
      return this.readBits(8);
    }, this.loadWord();
  };
  var gf = Mo, an, sn, No;
  sn = function() {
    var d = 0, h, f;
    sn.prototype.init.call(this), this.push = function(p) {
      var v;
      f ? (v = new Uint8Array(f.byteLength + p.data.byteLength), v.set(f), v.set(p.data, f.byteLength), f = v) : f = p.data;
      for (var y = f.byteLength; d < y - 3; d++) if (f[d + 2] === 1) {
        h = d + 5;
        break;
      }
      for (; h < y; ) switch (f[h]) {
        case 0:
          if (f[h - 1] !== 0) {
            h += 2;
            break;
          } else if (f[h - 2] !== 0) {
            h++;
            break;
          }
          d + 3 !== h - 2 && this.trigger("data", f.subarray(d + 3, h - 2));
          do
            h++;
          while (f[h] !== 1 && h < y);
          d = h - 2, h += 3;
          break;
        case 1:
          if (f[h - 1] !== 0 || f[h - 2] !== 0) {
            h += 3;
            break;
          }
          this.trigger("data", f.subarray(d + 3, h - 2)), d = h - 2, h += 3;
          break;
        default:
          h += 3;
          break;
      }
      f = f.subarray(d), h -= d, d = 0;
    }, this.reset = function() {
      f = null, d = 0, this.trigger("reset");
    }, this.flush = function() {
      f && f.byteLength > 3 && this.trigger("data", f.subarray(d + 3)), f = null, d = 0, this.trigger("done");
    }, this.endTimeline = function() {
      this.flush(), this.trigger("endedtimeline");
    };
  }, sn.prototype = new r(), No = { 100: true, 110: true, 122: true, 244: true, 44: true, 83: true, 86: true, 118: true, 128: true, 138: true, 139: true, 134: true }, an = function() {
    var d = new sn(), h, f, p, v, y, D, k;
    an.prototype.init.call(this), h = this, this.push = function(L) {
      L.type === "video" && (f = L.trackId, p = L.pts, v = L.dts, d.push(L));
    }, d.on("data", function(L) {
      var O = { trackId: f, pts: p, dts: v, data: L, nalUnitTypeCode: L[0] & 31 };
      switch (O.nalUnitTypeCode) {
        case 5:
          O.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
          break;
        case 6:
          O.nalUnitType = "sei_rbsp", O.escapedRBSP = y(L.subarray(1));
          break;
        case 7:
          O.nalUnitType = "seq_parameter_set_rbsp", O.escapedRBSP = y(L.subarray(1)), O.config = D(O.escapedRBSP);
          break;
        case 8:
          O.nalUnitType = "pic_parameter_set_rbsp";
          break;
        case 9:
          O.nalUnitType = "access_unit_delimiter_rbsp";
          break;
      }
      h.trigger("data", O);
    }), d.on("done", function() {
      h.trigger("done");
    }), d.on("partialdone", function() {
      h.trigger("partialdone");
    }), d.on("reset", function() {
      h.trigger("reset");
    }), d.on("endedtimeline", function() {
      h.trigger("endedtimeline");
    }), this.flush = function() {
      d.flush();
    }, this.partialFlush = function() {
      d.partialFlush();
    }, this.reset = function() {
      d.reset();
    }, this.endTimeline = function() {
      d.endTimeline();
    }, k = function(O, U) {
      var X = 8, ue = 8, de, ne;
      for (de = 0; de < O; de++) ue !== 0 && (ne = U.readExpGolomb(), ue = (X + ne + 256) % 256), X = ue === 0 ? X : ue;
    }, y = function(O) {
      for (var U = O.byteLength, X = [], ue = 1, de, ne; ue < U - 2; ) O[ue] === 0 && O[ue + 1] === 0 && O[ue + 2] === 3 ? (X.push(ue + 2), ue += 2) : ue++;
      if (X.length === 0) return O;
      de = U - X.length, ne = new Uint8Array(de);
      var ve = 0;
      for (ue = 0; ue < de; ve++, ue++) ve === X[0] && (ve++, X.shift()), ne[ue] = O[ve];
      return ne;
    }, D = function(O) {
      var U = 0, X = 0, ue = 0, de = 0, ne, ve, Xe, ot, xr, Ta, au, su, ou, ba, uu, He = [1, 1], lu, Sr;
      if (ne = new gf(O), ve = ne.readUnsignedByte(), ot = ne.readUnsignedByte(), Xe = ne.readUnsignedByte(), ne.skipUnsignedExpGolomb(), No[ve] && (xr = ne.readUnsignedExpGolomb(), xr === 3 && ne.skipBits(1), ne.skipUnsignedExpGolomb(), ne.skipUnsignedExpGolomb(), ne.skipBits(1), ne.readBoolean())) for (uu = xr !== 3 ? 8 : 12, Sr = 0; Sr < uu; Sr++) ne.readBoolean() && (Sr < 6 ? k(16, ne) : k(64, ne));
      if (ne.skipUnsignedExpGolomb(), Ta = ne.readUnsignedExpGolomb(), Ta === 0) ne.readUnsignedExpGolomb();
      else if (Ta === 1) for (ne.skipBits(1), ne.skipExpGolomb(), ne.skipExpGolomb(), au = ne.readUnsignedExpGolomb(), Sr = 0; Sr < au; Sr++) ne.skipExpGolomb();
      if (ne.skipUnsignedExpGolomb(), ne.skipBits(1), su = ne.readUnsignedExpGolomb(), ou = ne.readUnsignedExpGolomb(), ba = ne.readBits(1), ba === 0 && ne.skipBits(1), ne.skipBits(1), ne.readBoolean() && (U = ne.readUnsignedExpGolomb(), X = ne.readUnsignedExpGolomb(), ue = ne.readUnsignedExpGolomb(), de = ne.readUnsignedExpGolomb()), ne.readBoolean() && ne.readBoolean()) {
        switch (lu = ne.readUnsignedByte(), lu) {
          case 1:
            He = [1, 1];
            break;
          case 2:
            He = [12, 11];
            break;
          case 3:
            He = [10, 11];
            break;
          case 4:
            He = [16, 11];
            break;
          case 5:
            He = [40, 33];
            break;
          case 6:
            He = [24, 11];
            break;
          case 7:
            He = [20, 11];
            break;
          case 8:
            He = [32, 11];
            break;
          case 9:
            He = [80, 33];
            break;
          case 10:
            He = [18, 11];
            break;
          case 11:
            He = [15, 11];
            break;
          case 12:
            He = [64, 33];
            break;
          case 13:
            He = [160, 99];
            break;
          case 14:
            He = [4, 3];
            break;
          case 15:
            He = [3, 2];
            break;
          case 16:
            He = [2, 1];
            break;
          case 255: {
            He = [ne.readUnsignedByte() << 8 | ne.readUnsignedByte(), ne.readUnsignedByte() << 8 | ne.readUnsignedByte()];
            break;
          }
        }
        He && He[0] / He[1];
      }
      return { profileIdc: ve, levelIdc: Xe, profileCompatibility: ot, width: (su + 1) * 16 - U * 2 - X * 2, height: (2 - ba) * (ou + 1) * 16 - ue * 2 - de * 2, sarRatio: He };
    };
  }, an.prototype = new r();
  var vf = { H264Stream: an }, yf = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], Bo = function(d, h) {
    var f = d[h + 6] << 21 | d[h + 7] << 14 | d[h + 8] << 7 | d[h + 9], p = d[h + 5], v = (p & 16) >> 4;
    return f = f >= 0 ? f : 0, v ? f + 20 : f + 10;
  }, _f = function b(d, h) {
    return d.length - h < 10 || d[h] !== 73 || d[h + 1] !== 68 || d[h + 2] !== 51 ? h : (h += Bo(d, h), b(d, h));
  }, Tf = function(d) {
    var h = _f(d, 0);
    return d.length >= h + 2 && (d[h] & 255) === 255 && (d[h + 1] & 240) === 240 && (d[h + 1] & 22) === 16;
  }, Uo = function(d) {
    return d[0] << 21 | d[1] << 14 | d[2] << 7 | d[3];
  }, bf = function(d, h, f) {
    var p, v = "";
    for (p = h; p < f; p++) v += "%" + ("00" + d[p].toString(16)).slice(-2);
    return v;
  }, xf = function(d, h, f) {
    return unescape(bf(d, h, f));
  }, Sf = function(d, h) {
    var f = (d[h + 5] & 224) >> 5, p = d[h + 4] << 3, v = d[h + 3] & 6144;
    return v | p | f;
  }, Ef = function(d, h) {
    return d[h] === 73 && d[h + 1] === 68 && d[h + 2] === 51 ? "timed-metadata" : d[h] & true && (d[h + 1] & 240) === 240 ? "audio" : null;
  }, Cf = function(d) {
    for (var h = 0; h + 5 < d.length; ) {
      if (d[h] !== 255 || (d[h + 1] & 246) !== 240) {
        h++;
        continue;
      }
      return yf[(d[h + 2] & 60) >>> 2];
    }
    return null;
  }, Af = function(d) {
    var h, f, p, v;
    h = 10, d[5] & 64 && (h += 4, h += Uo(d.subarray(10, 14)));
    do {
      if (f = Uo(d.subarray(h + 4, h + 8)), f < 1) return null;
      if (v = String.fromCharCode(d[h], d[h + 1], d[h + 2], d[h + 3]), v === "PRIV") {
        p = d.subarray(h + 10, h + f + 10);
        for (var y = 0; y < p.byteLength; y++) if (p[y] === 0) {
          var D = xf(p, 0, y);
          if (D === "com.apple.streaming.transportStreamTimestamp") {
            var k = p.subarray(y + 1), L = (k[3] & 1) << 30 | k[4] << 22 | k[5] << 14 | k[6] << 6 | k[7] >>> 2;
            return L *= 4, L += k[7] & 3, L;
          }
          break;
        }
      }
      h += 10, h += f;
    } while (h < d.byteLength);
    return null;
  }, on = { isLikelyAacData: Tf, parseId3TagSize: Bo, parseAdtsSize: Sf, parseType: Ef, parseSampleRate: Cf, parseAacTimestamp: Af }, un;
  un = function() {
    var d = new Uint8Array(), h = 0;
    un.prototype.init.call(this), this.setTimestamp = function(f) {
      h = f;
    }, this.push = function(f) {
      var p = 0, v = 0, y, D, k, L;
      for (d.length ? (L = d.length, d = new Uint8Array(f.byteLength + L), d.set(d.subarray(0, L)), d.set(f, L)) : d = f; d.length - v >= 3; ) {
        if (d[v] === 73 && d[v + 1] === 68 && d[v + 2] === 51) {
          if (d.length - v < 10 || (p = on.parseId3TagSize(d, v), v + p > d.length)) break;
          D = { type: "timed-metadata", data: d.subarray(v, v + p) }, this.trigger("data", D), v += p;
          continue;
        } else if ((d[v] & 255) === 255 && (d[v + 1] & 240) === 240) {
          if (d.length - v < 7 || (p = on.parseAdtsSize(d, v), v + p > d.length)) break;
          k = { type: "audio", data: d.subarray(v, v + p), pts: h, dts: h }, this.trigger("data", k), v += p;
          continue;
        }
        v++;
      }
      y = d.length - v, y > 0 ? d = d.subarray(v) : d = new Uint8Array();
    }, this.reset = function() {
      d = new Uint8Array(), this.trigger("reset");
    }, this.endTimeline = function() {
      d = new Uint8Array(), this.trigger("endedtimeline");
    };
  }, un.prototype = new r();
  var Df = un, wf = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], qo = wf, kf = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"], Vo = kf, Pf = vf.H264Stream, If = on.isLikelyAacData, Of = Se.ONE_SECOND_IN_TS, ln, mi, dn, _r, Lf = function(d, h) {
    h.stream = d, this.trigger("log", h);
  }, jo = function(d, h) {
    for (var f = Object.keys(h), p = 0; p < f.length; p++) {
      var v = f[p];
      v === "headOfPipeline" || !h[v].on || h[v].on("log", Lf.bind(d, v));
    }
  }, Ho = function(d, h) {
    var f;
    if (d.length !== h.length) return false;
    for (f = 0; f < d.length; f++) if (d[f] !== h[f]) return false;
    return true;
  }, Wo = function(d, h, f, p, v, y) {
    var D = f - h, k = p - h, L = v - f;
    return { start: { dts: d, pts: d + D }, end: { dts: d + k, pts: d + L }, prependedContentDuration: y, baseMediaDecodeTime: d };
  };
  mi = function(d, h) {
    var f = [], p, v = 0, y = 0, D = 1 / 0;
    h = h || {}, p = h.firstSequenceNumber || 0, mi.prototype.init.call(this), this.push = function(k) {
      x.collectDtsInfo(d, k), d && qo.forEach(function(L) {
        d[L] = k[L];
      }), f.push(k);
    }, this.setEarliestDts = function(k) {
      v = k;
    }, this.setVideoBaseMediaDecodeTime = function(k) {
      D = k;
    }, this.setAudioAppendStart = function(k) {
      y = k;
    }, this.flush = function() {
      var k, L, O, U, X, ue, de;
      if (f.length === 0) {
        this.trigger("done", "AudioSegmentStream");
        return;
      }
      k = dr.trimAdtsFramesByEarliestDts(f, d, v), d.baseMediaDecodeTime = x.calculateTrackBaseMediaDecodeTime(d, h.keepOriginalTimestamps), de = dr.prefixWithSilence(d, k, y, D), d.samples = dr.generateSampleTable(k), O = Pe.mdat(dr.concatenateFrameData(k)), f = [], L = Pe.moof(p, [d]), U = new Uint8Array(L.byteLength + O.byteLength), p++, U.set(L), U.set(O, L.byteLength), x.clearDtsInfo(d), X = Math.ceil(Of * 1024 / d.samplerate), k.length && (ue = k.length * X, this.trigger("segmentTimingInfo", Wo(Se.audioTsToVideoTs(d.baseMediaDecodeTime, d.samplerate), k[0].dts, k[0].pts, k[0].dts + ue, k[0].pts + ue, de || 0)), this.trigger("timingInfo", { start: k[0].pts, end: k[0].pts + ue })), this.trigger("data", { track: d, boxes: U }), this.trigger("done", "AudioSegmentStream");
    }, this.reset = function() {
      x.clearDtsInfo(d), f = [], this.trigger("reset");
    };
  }, mi.prototype = new r(), ln = function(d, h) {
    var f, p = [], v = [], y, D;
    h = h || {}, f = h.firstSequenceNumber || 0, ln.prototype.init.call(this), delete d.minPTS, this.gopCache_ = [], this.push = function(k) {
      x.collectDtsInfo(d, k), k.nalUnitType === "seq_parameter_set_rbsp" && !y && (y = k.config, d.sps = [k.data], Vo.forEach(function(L) {
        d[L] = y[L];
      }, this)), k.nalUnitType === "pic_parameter_set_rbsp" && !D && (D = k.data, d.pps = [k.data]), p.push(k);
    }, this.flush = function() {
      for (var k, L, O, U, X, ue, de = 0, ne, ve; p.length && p[0].nalUnitType !== "access_unit_delimiter_rbsp"; ) p.shift();
      if (p.length === 0) {
        this.resetStream_(), this.trigger("done", "VideoSegmentStream");
        return;
      }
      if (k = Ne.groupNalsIntoFrames(p), O = Ne.groupFramesIntoGops(k), O[0][0].keyFrame || (L = this.getGopForFusion_(p[0], d), L ? (de = L.duration, O.unshift(L), O.byteLength += L.byteLength, O.nalCount += L.nalCount, O.pts = L.pts, O.dts = L.dts, O.duration += L.duration) : O = Ne.extendFirstKeyFrame(O)), v.length) {
        var Xe;
        if (h.alignGopsAtEnd ? Xe = this.alignGopsAtEnd_(O) : Xe = this.alignGopsAtStart_(O), !Xe) {
          this.gopCache_.unshift({ gop: O.pop(), pps: d.pps, sps: d.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length), p = [], this.resetStream_(), this.trigger("done", "VideoSegmentStream");
          return;
        }
        x.clearDtsInfo(d), O = Xe;
      }
      x.collectDtsInfo(d, O), d.samples = Ne.generateSampleTable(O), X = Pe.mdat(Ne.concatenateNalData(O)), d.baseMediaDecodeTime = x.calculateTrackBaseMediaDecodeTime(d, h.keepOriginalTimestamps), this.trigger("processedGopsInfo", O.map(function(ot) {
        return { pts: ot.pts, dts: ot.dts, byteLength: ot.byteLength };
      })), ne = O[0], ve = O[O.length - 1], this.trigger("segmentTimingInfo", Wo(d.baseMediaDecodeTime, ne.dts, ne.pts, ve.dts + ve.duration, ve.pts + ve.duration, de)), this.trigger("timingInfo", { start: O[0].pts, end: O[O.length - 1].pts + O[O.length - 1].duration }), this.gopCache_.unshift({ gop: O.pop(), pps: d.pps, sps: d.sps }), this.gopCache_.length = Math.min(6, this.gopCache_.length), p = [], this.trigger("baseMediaDecodeTime", d.baseMediaDecodeTime), this.trigger("timelineStartInfo", d.timelineStartInfo), U = Pe.moof(f, [d]), ue = new Uint8Array(U.byteLength + X.byteLength), f++, ue.set(U), ue.set(X, U.byteLength), this.trigger("data", { track: d, boxes: ue }), this.resetStream_(), this.trigger("done", "VideoSegmentStream");
    }, this.reset = function() {
      this.resetStream_(), p = [], this.gopCache_.length = 0, v.length = 0, this.trigger("reset");
    }, this.resetStream_ = function() {
      x.clearDtsInfo(d), y = void 0, D = void 0;
    }, this.getGopForFusion_ = function(k) {
      var L = 45e3, O = 1 / 0, U, X, ue, de, ne;
      for (ne = 0; ne < this.gopCache_.length; ne++) de = this.gopCache_[ne], ue = de.gop, !(!(d.pps && Ho(d.pps[0], de.pps[0])) || !(d.sps && Ho(d.sps[0], de.sps[0]))) && (ue.dts < d.timelineStartInfo.dts || (U = k.dts - ue.dts - ue.duration, U >= -1e4 && U <= L && (!X || O > U) && (X = de, O = U)));
      return X ? X.gop : null;
    }, this.alignGopsAtStart_ = function(k) {
      var L, O, U, X, ue, de, ne, ve;
      for (ue = k.byteLength, de = k.nalCount, ne = k.duration, L = O = 0; L < v.length && O < k.length && (U = v[L], X = k[O], U.pts !== X.pts); ) {
        if (X.pts > U.pts) {
          L++;
          continue;
        }
        O++, ue -= X.byteLength, de -= X.nalCount, ne -= X.duration;
      }
      return O === 0 ? k : O === k.length ? null : (ve = k.slice(O), ve.byteLength = ue, ve.duration = ne, ve.nalCount = de, ve.pts = ve[0].pts, ve.dts = ve[0].dts, ve);
    }, this.alignGopsAtEnd_ = function(k) {
      var L, O, U, X, ue, de;
      for (L = v.length - 1, O = k.length - 1, ue = null, de = false; L >= 0 && O >= 0; ) {
        if (U = v[L], X = k[O], U.pts === X.pts) {
          de = true;
          break;
        }
        if (U.pts > X.pts) {
          L--;
          continue;
        }
        L === v.length - 1 && (ue = O), O--;
      }
      if (!de && ue === null) return null;
      var ne;
      if (de ? ne = O : ne = ue, ne === 0) return k;
      var ve = k.slice(ne), Xe = ve.reduce(function(ot, xr) {
        return ot.byteLength += xr.byteLength, ot.duration += xr.duration, ot.nalCount += xr.nalCount, ot;
      }, { byteLength: 0, duration: 0, nalCount: 0 });
      return ve.byteLength = Xe.byteLength, ve.duration = Xe.duration, ve.nalCount = Xe.nalCount, ve.pts = ve[0].pts, ve.dts = ve[0].dts, ve;
    }, this.alignGopsWith = function(k) {
      v = k;
    };
  }, ln.prototype = new r(), _r = function(d, h) {
    this.numberOfTracks = 0, this.metadataStream = h, d = d || {}, typeof d.remux < "u" ? this.remuxTracks = !!d.remux : this.remuxTracks = true, typeof d.keepOriginalTimestamps == "boolean" ? this.keepOriginalTimestamps = d.keepOriginalTimestamps : this.keepOriginalTimestamps = false, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, _r.prototype.init.call(this), this.push = function(f) {
      if (f.text) return this.pendingCaptions.push(f);
      if (f.frames) return this.pendingMetadata.push(f);
      this.pendingTracks.push(f.track), this.pendingBytes += f.boxes.byteLength, f.track.type === "video" && (this.videoTrack = f.track, this.pendingBoxes.push(f.boxes)), f.track.type === "audio" && (this.audioTrack = f.track, this.pendingBoxes.unshift(f.boxes));
    };
  }, _r.prototype = new r(), _r.prototype.flush = function(b) {
    var d = 0, h = { captions: [], captionStreams: {}, metadata: [], info: {} }, f, p, v, y = 0, D;
    if (this.pendingTracks.length < this.numberOfTracks) {
      if (b !== "VideoSegmentStream" && b !== "AudioSegmentStream") return;
      if (this.remuxTracks) return;
      if (this.pendingTracks.length === 0) {
        this.emittedTracks++, this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0);
        return;
      }
    }
    if (this.videoTrack ? (y = this.videoTrack.timelineStartInfo.pts, Vo.forEach(function(k) {
      h.info[k] = this.videoTrack[k];
    }, this)) : this.audioTrack && (y = this.audioTrack.timelineStartInfo.pts, qo.forEach(function(k) {
      h.info[k] = this.audioTrack[k];
    }, this)), this.videoTrack || this.audioTrack) {
      for (this.pendingTracks.length === 1 ? h.type = this.pendingTracks[0].type : h.type = "combined", this.emittedTracks += this.pendingTracks.length, v = Pe.initSegment(this.pendingTracks), h.initSegment = new Uint8Array(v.byteLength), h.initSegment.set(v), h.data = new Uint8Array(this.pendingBytes), D = 0; D < this.pendingBoxes.length; D++) h.data.set(this.pendingBoxes[D], d), d += this.pendingBoxes[D].byteLength;
      for (D = 0; D < this.pendingCaptions.length; D++) f = this.pendingCaptions[D], f.startTime = Se.metadataTsToSeconds(f.startPts, y, this.keepOriginalTimestamps), f.endTime = Se.metadataTsToSeconds(f.endPts, y, this.keepOriginalTimestamps), h.captionStreams[f.stream] = true, h.captions.push(f);
      for (D = 0; D < this.pendingMetadata.length; D++) p = this.pendingMetadata[D], p.cueTime = Se.metadataTsToSeconds(p.pts, y, this.keepOriginalTimestamps), h.metadata.push(p);
      for (h.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", h), D = 0; D < h.captions.length; D++) f = h.captions[D], this.trigger("caption", f);
      for (D = 0; D < h.metadata.length; D++) p = h.metadata[D], this.trigger("id3Frame", p);
    }
    this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0);
  }, _r.prototype.setRemux = function(b) {
    this.remuxTracks = b;
  }, dn = function(d) {
    var h = this, f = true, p, v;
    dn.prototype.init.call(this), d = d || {}, this.baseMediaDecodeTime = d.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function() {
      var y = {};
      this.transmuxPipeline_ = y, y.type = "aac", y.metadataStream = new Kt.MetadataStream(), y.aacStream = new Df(), y.audioTimestampRolloverStream = new Kt.TimestampRolloverStream("audio"), y.timedMetadataTimestampRolloverStream = new Kt.TimestampRolloverStream("timed-metadata"), y.adtsStream = new Ro(), y.coalesceStream = new _r(d, y.metadataStream), y.headOfPipeline = y.aacStream, y.aacStream.pipe(y.audioTimestampRolloverStream).pipe(y.adtsStream), y.aacStream.pipe(y.timedMetadataTimestampRolloverStream).pipe(y.metadataStream).pipe(y.coalesceStream), y.metadataStream.on("timestamp", function(D) {
        y.aacStream.setTimestamp(D.timeStamp);
      }), y.aacStream.on("data", function(D) {
        D.type !== "timed-metadata" && D.type !== "audio" || y.audioSegmentStream || (v = v || { timelineStartInfo: { baseMediaDecodeTime: h.baseMediaDecodeTime }, codec: "adts", type: "audio" }, y.coalesceStream.numberOfTracks++, y.audioSegmentStream = new mi(v, d), y.audioSegmentStream.on("log", h.getLogTrigger_("audioSegmentStream")), y.audioSegmentStream.on("timingInfo", h.trigger.bind(h, "audioTimingInfo")), y.adtsStream.pipe(y.audioSegmentStream).pipe(y.coalesceStream), h.trigger("trackinfo", { hasAudio: !!v, hasVideo: !!p }));
      }), y.coalesceStream.on("data", this.trigger.bind(this, "data")), y.coalesceStream.on("done", this.trigger.bind(this, "done")), jo(this, y);
    }, this.setupTsPipeline = function() {
      var y = {};
      this.transmuxPipeline_ = y, y.type = "ts", y.metadataStream = new Kt.MetadataStream(), y.packetStream = new Kt.TransportPacketStream(), y.parseStream = new Kt.TransportParseStream(), y.elementaryStream = new Kt.ElementaryStream(), y.timestampRolloverStream = new Kt.TimestampRolloverStream(), y.adtsStream = new Ro(), y.h264Stream = new Pf(), y.captionStream = new Kt.CaptionStream(d), y.coalesceStream = new _r(d, y.metadataStream), y.headOfPipeline = y.packetStream, y.packetStream.pipe(y.parseStream).pipe(y.elementaryStream).pipe(y.timestampRolloverStream), y.timestampRolloverStream.pipe(y.h264Stream), y.timestampRolloverStream.pipe(y.adtsStream), y.timestampRolloverStream.pipe(y.metadataStream).pipe(y.coalesceStream), y.h264Stream.pipe(y.captionStream).pipe(y.coalesceStream), y.elementaryStream.on("data", function(D) {
        var k;
        if (D.type === "metadata") {
          for (k = D.tracks.length; k--; ) !p && D.tracks[k].type === "video" ? (p = D.tracks[k], p.timelineStartInfo.baseMediaDecodeTime = h.baseMediaDecodeTime) : !v && D.tracks[k].type === "audio" && (v = D.tracks[k], v.timelineStartInfo.baseMediaDecodeTime = h.baseMediaDecodeTime);
          p && !y.videoSegmentStream && (y.coalesceStream.numberOfTracks++, y.videoSegmentStream = new ln(p, d), y.videoSegmentStream.on("log", h.getLogTrigger_("videoSegmentStream")), y.videoSegmentStream.on("timelineStartInfo", function(L) {
            v && !d.keepOriginalTimestamps && (v.timelineStartInfo = L, y.audioSegmentStream.setEarliestDts(L.dts - h.baseMediaDecodeTime));
          }), y.videoSegmentStream.on("processedGopsInfo", h.trigger.bind(h, "gopInfo")), y.videoSegmentStream.on("segmentTimingInfo", h.trigger.bind(h, "videoSegmentTimingInfo")), y.videoSegmentStream.on("baseMediaDecodeTime", function(L) {
            v && y.audioSegmentStream.setVideoBaseMediaDecodeTime(L);
          }), y.videoSegmentStream.on("timingInfo", h.trigger.bind(h, "videoTimingInfo")), y.h264Stream.pipe(y.videoSegmentStream).pipe(y.coalesceStream)), v && !y.audioSegmentStream && (y.coalesceStream.numberOfTracks++, y.audioSegmentStream = new mi(v, d), y.audioSegmentStream.on("log", h.getLogTrigger_("audioSegmentStream")), y.audioSegmentStream.on("timingInfo", h.trigger.bind(h, "audioTimingInfo")), y.audioSegmentStream.on("segmentTimingInfo", h.trigger.bind(h, "audioSegmentTimingInfo")), y.adtsStream.pipe(y.audioSegmentStream).pipe(y.coalesceStream)), h.trigger("trackinfo", { hasAudio: !!v, hasVideo: !!p });
        }
      }), y.coalesceStream.on("data", this.trigger.bind(this, "data")), y.coalesceStream.on("id3Frame", function(D) {
        D.dispatchType = y.metadataStream.dispatchType, h.trigger("id3Frame", D);
      }), y.coalesceStream.on("caption", this.trigger.bind(this, "caption")), y.coalesceStream.on("done", this.trigger.bind(this, "done")), jo(this, y);
    }, this.setBaseMediaDecodeTime = function(y) {
      var D = this.transmuxPipeline_;
      d.keepOriginalTimestamps || (this.baseMediaDecodeTime = y), v && (v.timelineStartInfo.dts = void 0, v.timelineStartInfo.pts = void 0, x.clearDtsInfo(v), D.audioTimestampRolloverStream && D.audioTimestampRolloverStream.discontinuity()), p && (D.videoSegmentStream && (D.videoSegmentStream.gopCache_ = []), p.timelineStartInfo.dts = void 0, p.timelineStartInfo.pts = void 0, x.clearDtsInfo(p), D.captionStream.reset()), D.timestampRolloverStream && D.timestampRolloverStream.discontinuity();
    }, this.setAudioAppendStart = function(y) {
      v && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(y);
    }, this.setRemux = function(y) {
      var D = this.transmuxPipeline_;
      d.remux = y, D && D.coalesceStream && D.coalesceStream.setRemux(y);
    }, this.alignGopsWith = function(y) {
      p && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(y);
    }, this.getLogTrigger_ = function(y) {
      var D = this;
      return function(k) {
        k.stream = y, D.trigger("log", k);
      };
    }, this.push = function(y) {
      if (f) {
        var D = If(y);
        D && this.transmuxPipeline_.type !== "aac" ? this.setupAacPipeline() : !D && this.transmuxPipeline_.type !== "ts" && this.setupTsPipeline(), f = false;
      }
      this.transmuxPipeline_.headOfPipeline.push(y);
    }, this.flush = function() {
      f = true, this.transmuxPipeline_.headOfPipeline.flush();
    }, this.endTimeline = function() {
      this.transmuxPipeline_.headOfPipeline.endTimeline();
    }, this.reset = function() {
      this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset();
    }, this.resetCaptions = function() {
      this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
    };
  }, dn.prototype = new r();
  var Ff = { Transmuxer: dn }, Rf = function(d) {
    return d >>> 0;
  }, Mf = function(d) {
    return ("00" + d.toString(16)).slice(-2);
  }, cn = { toUnsigned: Rf, toHexString: Mf }, Nf = function(d) {
    var h = "";
    return h += String.fromCharCode(d[0]), h += String.fromCharCode(d[1]), h += String.fromCharCode(d[2]), h += String.fromCharCode(d[3]), h;
  }, Tr = Nf, Bf = cn.toUnsigned, Uf = function b(d, h) {
    var f = [], p, v, y, D, k;
    if (!h.length) return null;
    for (p = 0; p < d.byteLength; ) v = Bf(d[p] << 24 | d[p + 1] << 16 | d[p + 2] << 8 | d[p + 3]), y = Tr(d.subarray(p + 4, p + 8)), D = v > 1 ? p + v : d.byteLength, y === h[0] && (h.length === 1 ? f.push(d.subarray(p + 8, D)) : (k = b(d.subarray(p + 8, D), h.slice(1)), k.length && (f = f.concat(k)))), p = D;
    return f;
  }, Le = Uf, qf = cn.toUnsigned, Vf = e.getUint64, jf = function(d) {
    var h = { version: d[0], flags: new Uint8Array(d.subarray(1, 4)) };
    return h.version === 1 ? h.baseMediaDecodeTime = Vf(d.subarray(4)) : h.baseMediaDecodeTime = qf(d[4] << 24 | d[5] << 16 | d[6] << 8 | d[7]), h;
  }, Go = jf, Hf = function(d) {
    return { isLeading: (d[0] & 12) >>> 2, dependsOn: d[0] & 3, isDependedOn: (d[1] & 192) >>> 6, hasRedundancy: (d[1] & 48) >>> 4, paddingValue: (d[1] & 14) >>> 1, isNonSyncSample: d[1] & 1, degradationPriority: d[2] << 8 | d[3] };
  }, zo = Hf, Wf = function(d) {
    var h = { version: d[0], flags: new Uint8Array(d.subarray(1, 4)), samples: [] }, f = new DataView(d.buffer, d.byteOffset, d.byteLength), p = h.flags[2] & 1, v = h.flags[2] & 4, y = h.flags[1] & 1, D = h.flags[1] & 2, k = h.flags[1] & 4, L = h.flags[1] & 8, O = f.getUint32(4), U = 8, X;
    for (p && (h.dataOffset = f.getInt32(U), U += 4), v && O && (X = { flags: zo(d.subarray(U, U + 4)) }, U += 4, y && (X.duration = f.getUint32(U), U += 4), D && (X.size = f.getUint32(U), U += 4), L && (h.version === 1 ? X.compositionTimeOffset = f.getInt32(U) : X.compositionTimeOffset = f.getUint32(U), U += 4), h.samples.push(X), O--); O--; ) X = {}, y && (X.duration = f.getUint32(U), U += 4), D && (X.size = f.getUint32(U), U += 4), k && (X.flags = zo(d.subarray(U, U + 4)), U += 4), L && (h.version === 1 ? X.compositionTimeOffset = f.getInt32(U) : X.compositionTimeOffset = f.getUint32(U), U += 4), h.samples.push(X);
    return h;
  }, Ko = Wf, Gf = function(d) {
    var h = new DataView(d.buffer, d.byteOffset, d.byteLength), f = { version: d[0], flags: new Uint8Array(d.subarray(1, 4)), trackId: h.getUint32(4) }, p = f.flags[2] & 1, v = f.flags[2] & 2, y = f.flags[2] & 8, D = f.flags[2] & 16, k = f.flags[2] & 32, L = f.flags[0] & 65536, O = f.flags[0] & 131072, U;
    return U = 8, p && (U += 4, f.baseDataOffset = h.getUint32(12), U += 4), v && (f.sampleDescriptionIndex = h.getUint32(U), U += 4), y && (f.defaultSampleDuration = h.getUint32(U), U += 4), D && (f.defaultSampleSize = h.getUint32(U), U += 4), k && (f.defaultSampleFlags = h.getUint32(U)), L && (f.durationIsEmpty = true), !p && O && (f.baseDataOffsetIsMoof = true), f;
  }, Xo = Gf, $o = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gi;
  typeof window < "u" ? gi = window : typeof $o < "u" ? gi = $o : typeof self < "u" ? gi = self : gi = {};
  var vi = gi, zf = ze.discardEmulationPreventionBytes, Kf = Qi.CaptionStream, Xf = function(d, h) {
    for (var f = d, p = 0; p < h.length; p++) {
      var v = h[p];
      if (f < v.size) return v;
      f -= v.size;
    }
    return null;
  }, $f = function(d, h, f) {
    var p = new DataView(d.buffer, d.byteOffset, d.byteLength), v = { logs: [], seiNals: [] }, y, D, k, L;
    for (D = 0; D + 4 < d.length; D += k) if (k = p.getUint32(D), D += 4, !(k <= 0)) switch (d[D] & 31) {
      case 6:
        var O = d.subarray(D + 1, D + 1 + k), U = Xf(D, h);
        if (y = { nalUnitType: "sei_rbsp", size: k, data: O, escapedRBSP: zf(O), trackId: f }, U) y.pts = U.pts, y.dts = U.dts, L = U;
        else if (L) y.pts = L.pts, y.dts = L.dts;
        else {
          v.logs.push({ level: "warn", message: "We've encountered a nal unit without data at " + D + " for trackId " + f + ". See mux.js#223." });
          break;
        }
        v.seiNals.push(y);
        break;
    }
    return v;
  }, Yf = function(d, h, f) {
    var p = h, v = f.defaultSampleDuration || 0, y = f.defaultSampleSize || 0, D = f.trackId, k = [];
    return d.forEach(function(L) {
      var O = Ko(L), U = O.samples;
      U.forEach(function(X) {
        X.duration === void 0 && (X.duration = v), X.size === void 0 && (X.size = y), X.trackId = D, X.dts = p, X.compositionTimeOffset === void 0 && (X.compositionTimeOffset = 0), typeof p == "bigint" ? (X.pts = p + vi.BigInt(X.compositionTimeOffset), p += vi.BigInt(X.duration)) : (X.pts = p + X.compositionTimeOffset, p += X.duration);
      }), k = k.concat(U);
    }), k;
  }, Qf = function(d, h) {
    var f = Le(d, ["moof", "traf"]), p = Le(d, ["mdat"]), v = {}, y = [];
    return p.forEach(function(D, k) {
      var L = f[k];
      y.push({ mdat: D, traf: L });
    }), y.forEach(function(D) {
      var k = D.mdat, L = D.traf, O = Le(L, ["tfhd"]), U = Xo(O[0]), X = U.trackId, ue = Le(L, ["tfdt"]), de = ue.length > 0 ? Go(ue[0]).baseMediaDecodeTime : 0, ne = Le(L, ["trun"]), ve, Xe;
      h === X && ne.length > 0 && (ve = Yf(ne, de, U), Xe = $f(k, ve, X), v[X] || (v[X] = { seiNals: [], logs: [] }), v[X].seiNals = v[X].seiNals.concat(Xe.seiNals), v[X].logs = v[X].logs.concat(Xe.logs));
    }), v;
  }, Jf = function(d, h, f) {
    var p;
    if (h === null) return null;
    p = Qf(d, h);
    var v = p[h] || {};
    return { seiNals: v.seiNals, logs: v.logs, timescale: f };
  }, Zf = function() {
    var d = false, h, f, p, v, y, D;
    this.isInitialized = function() {
      return d;
    }, this.init = function(k) {
      h = new Kf(), d = true, D = k ? k.isPartial : false, h.on("data", function(L) {
        L.startTime = L.startPts / v, L.endTime = L.endPts / v, y.captions.push(L), y.captionStreams[L.stream] = true;
      }), h.on("log", function(L) {
        y.logs.push(L);
      });
    }, this.isNewInit = function(k, L) {
      return k && k.length === 0 || L && typeof L == "object" && Object.keys(L).length === 0 ? false : p !== k[0] || v !== L[p];
    }, this.parse = function(k, L, O) {
      var U;
      if (this.isInitialized()) {
        if (!L || !O) return null;
        if (this.isNewInit(L, O)) p = L[0], v = O[p];
        else if (p === null || !v) return f.push(k), null;
      } else return null;
      for (; f.length > 0; ) {
        var X = f.shift();
        this.parse(X, L, O);
      }
      return U = Jf(k, p, v), U && U.logs && (y.logs = y.logs.concat(U.logs)), U === null || !U.seiNals ? y.logs.length ? { logs: y.logs, captions: [], captionStreams: [] } : null : (this.pushNals(U.seiNals), this.flushStream(), y);
    }, this.pushNals = function(k) {
      if (!this.isInitialized() || !k || k.length === 0) return null;
      k.forEach(function(L) {
        h.push(L);
      });
    }, this.flushStream = function() {
      if (!this.isInitialized()) return null;
      D ? h.partialFlush() : h.flush();
    }, this.clearParsedCaptions = function() {
      y.captions = [], y.captionStreams = {}, y.logs = [];
    }, this.resetCaptionStream = function() {
      if (!this.isInitialized()) return null;
      h.reset();
    }, this.clearAllCaptions = function() {
      this.clearParsedCaptions(), this.resetCaptionStream();
    }, this.reset = function() {
      f = [], p = null, v = null, y ? this.clearParsedCaptions() : y = { captions: [], captionStreams: {}, logs: [] }, this.resetCaptionStream();
    }, this.reset();
  }, eh = Zf, fn = cn.toUnsigned, yi = cn.toHexString, th = e.getUint64, Yo, Qo, Jo, Zo, eu, ya;
  Yo = function(d) {
    var h = {}, f = Le(d, ["moov", "trak"]);
    return f.reduce(function(p, v) {
      var y, D, k, L, O;
      return y = Le(v, ["tkhd"])[0], !y || (D = y[0], k = D === 0 ? 12 : 20, L = fn(y[k] << 24 | y[k + 1] << 16 | y[k + 2] << 8 | y[k + 3]), O = Le(v, ["mdia", "mdhd"])[0], !O) ? null : (D = O[0], k = D === 0 ? 12 : 20, p[L] = fn(O[k] << 24 | O[k + 1] << 16 | O[k + 2] << 8 | O[k + 3]), p);
    }, h);
  }, Qo = function(d, h) {
    var f;
    f = Le(h, ["moof", "traf"]);
    var p = f.reduce(function(v, y) {
      var D = Le(y, ["tfhd"])[0], k = fn(D[4] << 24 | D[5] << 16 | D[6] << 8 | D[7]), L = d[k] || 9e4, O = Le(y, ["tfdt"])[0], U = new DataView(O.buffer, O.byteOffset, O.byteLength), X;
      O[0] === 1 ? X = th(O.subarray(4, 12)) : X = U.getUint32(4);
      var ue;
      return typeof X == "bigint" ? ue = X / vi.BigInt(L) : typeof X == "number" && !isNaN(X) && (ue = X / L), ue < Number.MAX_SAFE_INTEGER && (ue = Number(ue)), ue < v && (v = ue), v;
    }, 1 / 0);
    return typeof p == "bigint" || isFinite(p) ? p : 0;
  }, Jo = function(d, h) {
    var f = Le(h, ["moof", "traf"]), p = 0, v = 0, y;
    if (f && f.length) {
      var D = Le(f[0], ["tfhd"])[0], k = Le(f[0], ["trun"])[0], L = Le(f[0], ["tfdt"])[0];
      if (D) {
        var O = Xo(D);
        y = O.trackId;
      }
      if (L) {
        var U = Go(L);
        p = U.baseMediaDecodeTime;
      }
      if (k) {
        var X = Ko(k);
        X.samples && X.samples.length && (v = X.samples[0].compositionTimeOffset || 0);
      }
    }
    var ue = d[y] || 9e4;
    typeof p == "bigint" && (v = vi.BigInt(v), ue = vi.BigInt(ue));
    var de = (p + v) / ue;
    return typeof de == "bigint" && de < Number.MAX_SAFE_INTEGER && (de = Number(de)), de;
  }, Zo = function(d) {
    var h = Le(d, ["moov", "trak"]), f = [];
    return h.forEach(function(p) {
      var v = Le(p, ["mdia", "hdlr"]), y = Le(p, ["tkhd"]);
      v.forEach(function(D, k) {
        var L = Tr(D.subarray(8, 12)), O = y[k], U, X, ue;
        L === "vide" && (U = new DataView(O.buffer, O.byteOffset, O.byteLength), X = U.getUint8(0), ue = X === 0 ? U.getUint32(12) : U.getUint32(20), f.push(ue));
      });
    }), f;
  }, ya = function(d) {
    var h = d[0], f = h === 0 ? 12 : 20;
    return fn(d[f] << 24 | d[f + 1] << 16 | d[f + 2] << 8 | d[f + 3]);
  }, eu = function(d) {
    var h = Le(d, ["moov", "trak"]), f = [];
    return h.forEach(function(p) {
      var v = {}, y = Le(p, ["tkhd"])[0], D, k;
      y && (D = new DataView(y.buffer, y.byteOffset, y.byteLength), k = D.getUint8(0), v.id = k === 0 ? D.getUint32(12) : D.getUint32(20));
      var L = Le(p, ["mdia", "hdlr"])[0];
      if (L) {
        var O = Tr(L.subarray(8, 12));
        O === "vide" ? v.type = "video" : O === "soun" ? v.type = "audio" : v.type = O;
      }
      var U = Le(p, ["mdia", "minf", "stbl", "stsd"])[0];
      if (U) {
        var X = U.subarray(8);
        v.codec = Tr(X.subarray(4, 8));
        var ue = Le(X, [v.codec])[0], de, ne;
        ue && (/^[asm]vc[1-9]$/i.test(v.codec) ? (de = ue.subarray(78), ne = Tr(de.subarray(4, 8)), ne === "avcC" && de.length > 11 ? (v.codec += ".", v.codec += yi(de[9]), v.codec += yi(de[10]), v.codec += yi(de[11])) : v.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(v.codec) ? (de = ue.subarray(28), ne = Tr(de.subarray(4, 8)), ne === "esds" && de.length > 20 && de[19] !== 0 ? (v.codec += "." + yi(de[19]), v.codec += "." + yi(de[20] >>> 2 & 63).replace(/^0/, "")) : v.codec = "mp4a.40.2") : v.codec = v.codec.toLowerCase());
      }
      var ve = Le(p, ["mdia", "mdhd"])[0];
      ve && (v.timescale = ya(ve)), f.push(v);
    }), f;
  };
  var tu = { findBox: Le, parseType: Tr, timescale: Yo, startTime: Qo, compositionStartTime: Jo, videoTrackIds: Zo, tracks: eu, getTimescaleFromMediaHeader: ya }, ru = function(d) {
    var h = d[1] & 31;
    return h <<= 8, h |= d[2], h;
  }, hn = function(d) {
    return !!(d[1] & 64);
  }, pn = function(d) {
    var h = 0;
    return (d[3] & 48) >>> 4 > 1 && (h += d[4] + 1), h;
  }, rh = function(d, h) {
    var f = ru(d);
    return f === 0 ? "pat" : f === h ? "pmt" : h ? "pes" : null;
  }, ih = function(d) {
    var h = hn(d), f = 4 + pn(d);
    return h && (f += d[f] + 1), (d[f + 10] & 31) << 8 | d[f + 11];
  }, nh = function(d) {
    var h = {}, f = hn(d), p = 4 + pn(d);
    if (f && (p += d[p] + 1), !!(d[p + 5] & 1)) {
      var v, y, D;
      v = (d[p + 1] & 15) << 8 | d[p + 2], y = 3 + v - 4, D = (d[p + 10] & 15) << 8 | d[p + 11];
      for (var k = 12 + D; k < y; ) {
        var L = p + k;
        h[(d[L + 1] & 31) << 8 | d[L + 2]] = d[L], k += ((d[L + 3] & 15) << 8 | d[L + 4]) + 5;
      }
      return h;
    }
  }, ah = function(d, h) {
    var f = ru(d), p = h[f];
    switch (p) {
      case tt.H264_STREAM_TYPE:
        return "video";
      case tt.ADTS_STREAM_TYPE:
        return "audio";
      case tt.METADATA_STREAM_TYPE:
        return "timed-metadata";
      default:
        return null;
    }
  }, sh = function(d) {
    var h = hn(d);
    if (!h) return null;
    var f = 4 + pn(d);
    if (f >= d.byteLength) return null;
    var p = null, v;
    return v = d[f + 7], v & 192 && (p = {}, p.pts = (d[f + 9] & 14) << 27 | (d[f + 10] & 255) << 20 | (d[f + 11] & 254) << 12 | (d[f + 12] & 255) << 5 | (d[f + 13] & 254) >>> 3, p.pts *= 4, p.pts += (d[f + 13] & 6) >>> 1, p.dts = p.pts, v & 64 && (p.dts = (d[f + 14] & 14) << 27 | (d[f + 15] & 255) << 20 | (d[f + 16] & 254) << 12 | (d[f + 17] & 255) << 5 | (d[f + 18] & 254) >>> 3, p.dts *= 4, p.dts += (d[f + 18] & 6) >>> 1)), p;
  }, _a = function(d) {
    switch (d) {
      case 5:
        return "slice_layer_without_partitioning_rbsp_idr";
      case 6:
        return "sei_rbsp";
      case 7:
        return "seq_parameter_set_rbsp";
      case 8:
        return "pic_parameter_set_rbsp";
      case 9:
        return "access_unit_delimiter_rbsp";
      default:
        return null;
    }
  }, oh = function(d) {
    for (var h = 4 + pn(d), f = d.subarray(h), p = 0, v = 0, y = false, D; v < f.byteLength - 3; v++) if (f[v + 2] === 1) {
      p = v + 5;
      break;
    }
    for (; p < f.byteLength; ) switch (f[p]) {
      case 0:
        if (f[p - 1] !== 0) {
          p += 2;
          break;
        } else if (f[p - 2] !== 0) {
          p++;
          break;
        }
        v + 3 !== p - 2 && (D = _a(f[v + 3] & 31), D === "slice_layer_without_partitioning_rbsp_idr" && (y = true));
        do
          p++;
        while (f[p] !== 1 && p < f.length);
        v = p - 2, p += 3;
        break;
      case 1:
        if (f[p - 1] !== 0 || f[p - 2] !== 0) {
          p += 3;
          break;
        }
        D = _a(f[v + 3] & 31), D === "slice_layer_without_partitioning_rbsp_idr" && (y = true), v = p - 2, p += 3;
        break;
      default:
        p += 3;
        break;
    }
    return f = f.subarray(v), p -= v, v = 0, f && f.byteLength > 3 && (D = _a(f[v + 3] & 31), D === "slice_layer_without_partitioning_rbsp_idr" && (y = true)), y;
  }, uh = { parseType: rh, parsePat: ih, parsePmt: nh, parsePayloadUnitStartIndicator: hn, parsePesType: ah, parsePesTime: sh, videoPacketContainsKeyFrame: oh }, Mr = Po.handleRollover, Ce = {};
  Ce.ts = uh, Ce.aac = on;
  var br = Se.ONE_SECOND_IN_TS, st = 188, Bt = 71, lh = function(d, h) {
    for (var f = 0, p = st, v, y; p < d.byteLength; ) {
      if (d[f] === Bt && d[p] === Bt) {
        switch (v = d.subarray(f, p), y = Ce.ts.parseType(v, h.pid), y) {
          case "pat":
            h.pid = Ce.ts.parsePat(v);
            break;
          case "pmt":
            var D = Ce.ts.parsePmt(v);
            h.table = h.table || {}, Object.keys(D).forEach(function(k) {
              h.table[k] = D[k];
            });
            break;
        }
        f += st, p += st;
        continue;
      }
      f++, p++;
    }
  }, iu = function(d, h, f) {
    for (var p = 0, v = st, y, D, k, L, O, U = false; v <= d.byteLength; ) {
      if (d[p] === Bt && (d[v] === Bt || v === d.byteLength)) {
        switch (y = d.subarray(p, v), D = Ce.ts.parseType(y, h.pid), D) {
          case "pes":
            k = Ce.ts.parsePesType(y, h.table), L = Ce.ts.parsePayloadUnitStartIndicator(y), k === "audio" && L && (O = Ce.ts.parsePesTime(y), O && (O.type = "audio", f.audio.push(O), U = true));
            break;
        }
        if (U) break;
        p += st, v += st;
        continue;
      }
      p++, v++;
    }
    for (v = d.byteLength, p = v - st, U = false; p >= 0; ) {
      if (d[p] === Bt && (d[v] === Bt || v === d.byteLength)) {
        switch (y = d.subarray(p, v), D = Ce.ts.parseType(y, h.pid), D) {
          case "pes":
            k = Ce.ts.parsePesType(y, h.table), L = Ce.ts.parsePayloadUnitStartIndicator(y), k === "audio" && L && (O = Ce.ts.parsePesTime(y), O && (O.type = "audio", f.audio.push(O), U = true));
            break;
        }
        if (U) break;
        p -= st, v -= st;
        continue;
      }
      p--, v--;
    }
  }, dh = function(d, h, f) {
    for (var p = 0, v = st, y, D, k, L, O, U, X, ue, de = false, ne = { data: [], size: 0 }; v < d.byteLength; ) {
      if (d[p] === Bt && d[v] === Bt) {
        switch (y = d.subarray(p, v), D = Ce.ts.parseType(y, h.pid), D) {
          case "pes":
            if (k = Ce.ts.parsePesType(y, h.table), L = Ce.ts.parsePayloadUnitStartIndicator(y), k === "video" && (L && !de && (O = Ce.ts.parsePesTime(y), O && (O.type = "video", f.video.push(O), de = true)), !f.firstKeyFrame)) {
              if (L && ne.size !== 0) {
                for (U = new Uint8Array(ne.size), X = 0; ne.data.length; ) ue = ne.data.shift(), U.set(ue, X), X += ue.byteLength;
                if (Ce.ts.videoPacketContainsKeyFrame(U)) {
                  var ve = Ce.ts.parsePesTime(U);
                  ve ? (f.firstKeyFrame = ve, f.firstKeyFrame.type = "video") : console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.");
                }
                ne.size = 0;
              }
              ne.data.push(y), ne.size += y.byteLength;
            }
            break;
        }
        if (de && f.firstKeyFrame) break;
        p += st, v += st;
        continue;
      }
      p++, v++;
    }
    for (v = d.byteLength, p = v - st, de = false; p >= 0; ) {
      if (d[p] === Bt && d[v] === Bt) {
        switch (y = d.subarray(p, v), D = Ce.ts.parseType(y, h.pid), D) {
          case "pes":
            k = Ce.ts.parsePesType(y, h.table), L = Ce.ts.parsePayloadUnitStartIndicator(y), k === "video" && L && (O = Ce.ts.parsePesTime(y), O && (O.type = "video", f.video.push(O), de = true));
            break;
        }
        if (de) break;
        p -= st, v -= st;
        continue;
      }
      p--, v--;
    }
  }, ch = function(d, h) {
    if (d.audio && d.audio.length) {
      var f = h;
      (typeof f > "u" || isNaN(f)) && (f = d.audio[0].dts), d.audio.forEach(function(y) {
        y.dts = Mr(y.dts, f), y.pts = Mr(y.pts, f), y.dtsTime = y.dts / br, y.ptsTime = y.pts / br;
      });
    }
    if (d.video && d.video.length) {
      var p = h;
      if ((typeof p > "u" || isNaN(p)) && (p = d.video[0].dts), d.video.forEach(function(y) {
        y.dts = Mr(y.dts, p), y.pts = Mr(y.pts, p), y.dtsTime = y.dts / br, y.ptsTime = y.pts / br;
      }), d.firstKeyFrame) {
        var v = d.firstKeyFrame;
        v.dts = Mr(v.dts, p), v.pts = Mr(v.pts, p), v.dtsTime = v.dts / br, v.ptsTime = v.pts / br;
      }
    }
  }, fh = function(d) {
    for (var h = false, f = 0, p = null, v = null, y = 0, D = 0, k; d.length - D >= 3; ) {
      var L = Ce.aac.parseType(d, D);
      switch (L) {
        case "timed-metadata":
          if (d.length - D < 10) {
            h = true;
            break;
          }
          if (y = Ce.aac.parseId3TagSize(d, D), y > d.length) {
            h = true;
            break;
          }
          v === null && (k = d.subarray(D, D + y), v = Ce.aac.parseAacTimestamp(k)), D += y;
          break;
        case "audio":
          if (d.length - D < 7) {
            h = true;
            break;
          }
          if (y = Ce.aac.parseAdtsSize(d, D), y > d.length) {
            h = true;
            break;
          }
          p === null && (k = d.subarray(D, D + y), p = Ce.aac.parseSampleRate(k)), f++, D += y;
          break;
        default:
          D++;
          break;
      }
      if (h) return null;
    }
    if (p === null || v === null) return null;
    var O = br / p, U = { audio: [{ type: "audio", dts: v, pts: v }, { type: "audio", dts: v + f * 1024 * O, pts: v + f * 1024 * O }] };
    return U;
  }, hh = function(d) {
    var h = { pid: null, table: null }, f = {};
    lh(d, h);
    for (var p in h.table) if (h.table.hasOwnProperty(p)) {
      var v = h.table[p];
      switch (v) {
        case tt.H264_STREAM_TYPE:
          f.video = [], dh(d, h, f), f.video.length === 0 && delete f.video;
          break;
        case tt.ADTS_STREAM_TYPE:
          f.audio = [], iu(d, h, f), f.audio.length === 0 && delete f.audio;
          break;
      }
    }
    return f;
  }, ph = function(d, h) {
    var f = Ce.aac.isLikelyAacData(d), p;
    return f ? p = fh(d) : p = hh(d), !p || !p.audio && !p.video ? null : (ch(p, h), p);
  }, mh = { inspect: ph, parseAudioPes_: iu }, gh = function(d, h) {
    h.on("data", function(f) {
      var p = f.initSegment;
      f.initSegment = { data: p.buffer, byteOffset: p.byteOffset, byteLength: p.byteLength };
      var v = f.data;
      f.data = v.buffer, d.postMessage({ action: "data", segment: f, byteOffset: v.byteOffset, byteLength: v.byteLength }, [f.data]);
    }), h.on("done", function(f) {
      d.postMessage({ action: "done" });
    }), h.on("gopInfo", function(f) {
      d.postMessage({ action: "gopInfo", gopInfo: f });
    }), h.on("videoSegmentTimingInfo", function(f) {
      var p = { start: { decode: Se.videoTsToSeconds(f.start.dts), presentation: Se.videoTsToSeconds(f.start.pts) }, end: { decode: Se.videoTsToSeconds(f.end.dts), presentation: Se.videoTsToSeconds(f.end.pts) }, baseMediaDecodeTime: Se.videoTsToSeconds(f.baseMediaDecodeTime) };
      f.prependedContentDuration && (p.prependedContentDuration = Se.videoTsToSeconds(f.prependedContentDuration)), d.postMessage({ action: "videoSegmentTimingInfo", videoSegmentTimingInfo: p });
    }), h.on("audioSegmentTimingInfo", function(f) {
      var p = { start: { decode: Se.videoTsToSeconds(f.start.dts), presentation: Se.videoTsToSeconds(f.start.pts) }, end: { decode: Se.videoTsToSeconds(f.end.dts), presentation: Se.videoTsToSeconds(f.end.pts) }, baseMediaDecodeTime: Se.videoTsToSeconds(f.baseMediaDecodeTime) };
      f.prependedContentDuration && (p.prependedContentDuration = Se.videoTsToSeconds(f.prependedContentDuration)), d.postMessage({ action: "audioSegmentTimingInfo", audioSegmentTimingInfo: p });
    }), h.on("id3Frame", function(f) {
      d.postMessage({ action: "id3Frame", id3Frame: f });
    }), h.on("caption", function(f) {
      d.postMessage({ action: "caption", caption: f });
    }), h.on("trackinfo", function(f) {
      d.postMessage({ action: "trackinfo", trackInfo: f });
    }), h.on("audioTimingInfo", function(f) {
      d.postMessage({ action: "audioTimingInfo", audioTimingInfo: { start: Se.videoTsToSeconds(f.start), end: Se.videoTsToSeconds(f.end) } });
    }), h.on("videoTimingInfo", function(f) {
      d.postMessage({ action: "videoTimingInfo", videoTimingInfo: { start: Se.videoTsToSeconds(f.start), end: Se.videoTsToSeconds(f.end) } });
    }), h.on("log", function(f) {
      d.postMessage({ action: "log", log: f });
    });
  }, nu = (function() {
    function b(h, f) {
      this.options = f || {}, this.self = h, this.init();
    }
    var d = b.prototype;
    return d.init = function() {
      this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new Ff.Transmuxer(this.options), gh(this.self, this.transmuxer);
    }, d.pushMp4Captions = function(f) {
      this.captionParser || (this.captionParser = new eh(), this.captionParser.init());
      var p = new Uint8Array(f.data, f.byteOffset, f.byteLength), v = this.captionParser.parse(p, f.trackIds, f.timescales);
      this.self.postMessage({ action: "mp4Captions", captions: v && v.captions || [], logs: v && v.logs || [], data: p.buffer }, [p.buffer]);
    }, d.probeMp4StartTime = function(f) {
      var p = f.timescales, v = f.data, y = tu.startTime(p, v);
      this.self.postMessage({ action: "probeMp4StartTime", startTime: y, data: v }, [v.buffer]);
    }, d.probeMp4Tracks = function(f) {
      var p = f.data, v = tu.tracks(p);
      this.self.postMessage({ action: "probeMp4Tracks", tracks: v, data: p }, [p.buffer]);
    }, d.probeTs = function(f) {
      var p = f.data, v = f.baseStartTime, y = typeof v == "number" && !isNaN(v) ? v * Se.ONE_SECOND_IN_TS : void 0, D = mh.inspect(p, y), k = null;
      D && (k = { hasVideo: D.video && D.video.length === 2 || false, hasAudio: D.audio && D.audio.length === 2 || false }, k.hasVideo && (k.videoStart = D.video[0].ptsTime), k.hasAudio && (k.audioStart = D.audio[0].ptsTime)), this.self.postMessage({ action: "probeTs", result: k, data: p }, [p.buffer]);
    }, d.clearAllMp4Captions = function() {
      this.captionParser && this.captionParser.clearAllCaptions();
    }, d.clearParsedMp4Captions = function() {
      this.captionParser && this.captionParser.clearParsedCaptions();
    }, d.push = function(f) {
      var p = new Uint8Array(f.data, f.byteOffset, f.byteLength);
      this.transmuxer.push(p);
    }, d.reset = function() {
      this.transmuxer.reset();
    }, d.setTimestampOffset = function(f) {
      var p = f.timestampOffset || 0;
      this.transmuxer.setBaseMediaDecodeTime(Math.round(Se.secondsToVideoTs(p)));
    }, d.setAudioAppendStart = function(f) {
      this.transmuxer.setAudioAppendStart(Math.ceil(Se.secondsToVideoTs(f.appendStart)));
    }, d.setRemux = function(f) {
      this.transmuxer.setRemux(f.remux);
    }, d.flush = function(f) {
      this.transmuxer.flush(), self.postMessage({ action: "done", type: "transmuxed" });
    }, d.endTimeline = function() {
      this.transmuxer.endTimeline(), self.postMessage({ action: "endedtimeline", type: "transmuxed" });
    }, d.alignGopsWith = function(f) {
      this.transmuxer.alignGopsWith(f.gopsToAlignWith.slice());
    }, b;
  })();
  self.onmessage = function(b) {
    if (b.data.action === "init" && b.data.options) {
      this.messageHandlers = new nu(self, b.data.options);
      return;
    }
    this.messageHandlers || (this.messageHandlers = new nu(self)), b.data && b.data.action && b.data.action !== "init" && this.messageHandlers[b.data.action] && this.messageHandlers[b.data.action](b.data);
  };
})), $v = Uc(Xv), Yv = function(r, n, i) {
  var e = r.data.segment, t = e.type, a = e.initSegment, o = e.captions, u = e.captionStreams, l = e.metadata, c = e.videoFrameDtsTime, m = e.videoFramePtsTime;
  n.buffer.push({ captions: o, captionStreams: u, metadata: l });
  var g = r.data.segment.boxes || { data: r.data.segment.data }, _ = { type: t, data: new Uint8Array(g.data, g.data.byteOffset, g.data.byteLength), initSegment: new Uint8Array(a.data, a.byteOffset, a.byteLength) };
  typeof c < "u" && (_.videoFrameDtsTime = c), typeof m < "u" && (_.videoFramePtsTime = m), i(_);
}, Qv = function(r) {
  var n = r.transmuxedData, i = r.callback;
  n.buffer = [], i(n);
}, Jv = function(r, n) {
  n.gopInfo = r.data.gopInfo;
}, jc = function(r) {
  var n = r.transmuxer, i = r.bytes, e = r.audioAppendStart, t = r.gopsToAlignWith, a = r.remux, o = r.onData, u = r.onTrackInfo, l = r.onAudioTimingInfo, c = r.onVideoTimingInfo, m = r.onVideoSegmentTimingInfo, g = r.onAudioSegmentTimingInfo, _ = r.onId3, C = r.onCaptions, w = r.onDone, S = r.onEndedTimeline, F = r.onTransmuxerLog, N = r.isEndOfTimeline, z = { buffer: [] }, W = N, H = function(T) {
    n.currentTransmux === r && (T.data.action === "data" && Yv(T, z, o), T.data.action === "trackinfo" && u(T.data.trackInfo), T.data.action === "gopInfo" && Jv(T, z), T.data.action === "audioTimingInfo" && l(T.data.audioTimingInfo), T.data.action === "videoTimingInfo" && c(T.data.videoTimingInfo), T.data.action === "videoSegmentTimingInfo" && m(T.data.videoSegmentTimingInfo), T.data.action === "audioSegmentTimingInfo" && g(T.data.audioSegmentTimingInfo), T.data.action === "id3Frame" && _([T.data.id3Frame], T.data.id3Frame.dispatchType), T.data.action === "caption" && C(T.data.caption), T.data.action === "endedtimeline" && (W = false, S()), T.data.action === "log" && F(T.data.log), T.data.type === "transmuxed" && (W || (n.onmessage = null, Qv({ transmuxedData: z, callback: w }), Hc(n))));
  };
  if (n.onmessage = H, e && n.postMessage({ action: "setAudioAppendStart", appendStart: e }), Array.isArray(t) && n.postMessage({ action: "alignGopsWith", gopsToAlignWith: t }), typeof a < "u" && n.postMessage({ action: "setRemux", remux: a }), i.byteLength) {
    var $ = i instanceof ArrayBuffer ? i : i.buffer, R = i instanceof ArrayBuffer ? 0 : i.byteOffset;
    n.postMessage({ action: "push", data: $, byteOffset: R, byteLength: i.byteLength }, [$]);
  }
  N && n.postMessage({ action: "endTimeline" }), n.postMessage({ action: "flush" });
}, Hc = function(r) {
  r.currentTransmux = null, r.transmuxQueue.length && (r.currentTransmux = r.transmuxQueue.shift(), typeof r.currentTransmux == "function" ? r.currentTransmux() : jc(r.currentTransmux));
}, Dl = function(r, n) {
  r.postMessage({ action: n }), Hc(r);
}, Wc = function(r, n) {
  if (!n.currentTransmux) {
    n.currentTransmux = r, Dl(n, r);
    return;
  }
  n.transmuxQueue.push(Dl.bind(null, n, r));
}, Zv = function(r) {
  Wc("reset", r);
}, e0 = function(r) {
  Wc("endTimeline", r);
}, Gc = function(r) {
  if (!r.transmuxer.currentTransmux) {
    r.transmuxer.currentTransmux = r, jc(r);
    return;
  }
  r.transmuxer.transmuxQueue.push(r);
}, t0 = function(r) {
  var n = new $v();
  n.currentTransmux = null, n.transmuxQueue = [];
  var i = n.terminate;
  return n.terminate = function() {
    return n.currentTransmux = null, n.transmuxQueue.length = 0, i.call(n);
  }, n.postMessage({ action: "init", options: r }), n;
}, as = { reset: Zv, endTimeline: e0, transmux: Gc, createTransmuxer: t0 }, Kn = function(r) {
  var n = r.transmuxer, i = r.endAction || r.action, e = r.callback, t = It({}, r, { endAction: null, transmuxer: null, callback: null }), a = function l(c) {
    c.data.action === i && (n.removeEventListener("message", l), c.data.data && (c.data.data = new Uint8Array(c.data.data, r.byteOffset || 0, r.byteLength || c.data.data.byteLength), r.data && (r.data = c.data.data)), e(c.data));
  };
  if (n.addEventListener("message", a), r.data) {
    var o = r.data instanceof ArrayBuffer;
    t.byteOffset = o ? 0 : r.data.byteOffset, t.byteLength = r.data.byteLength;
    var u = [o ? r.data : r.data.buffer];
    n.postMessage(t, u);
  } else n.postMessage(t);
}, Ht = { FAILURE: 2, TIMEOUT: -101, ABORTED: -102 }, Is = function(r) {
  r.forEach(function(n) {
    n.abort();
  });
}, r0 = function(r) {
  return { bandwidth: r.bandwidth, bytesReceived: r.bytesReceived || 0, roundTripTime: r.roundTripTime || 0 };
}, i0 = function(r) {
  var n = r.target, i = Date.now() - n.requestTime, e = { bandwidth: 1 / 0, bytesReceived: 0, roundTripTime: i || 0 };
  return e.bytesReceived = r.loaded, e.bandwidth = Math.floor(e.bytesReceived / e.roundTripTime * 8 * 1e3), e;
}, So = function(r, n) {
  return n.timedout ? { status: n.status, message: "HLS request timed-out at URL: " + n.uri, code: Ht.TIMEOUT, xhr: n } : n.aborted ? { status: n.status, message: "HLS request aborted at URL: " + n.uri, code: Ht.ABORTED, xhr: n } : r ? { status: n.status, message: "HLS request errored at URL: " + n.uri, code: Ht.FAILURE, xhr: n } : n.responseType === "arraybuffer" && n.response.byteLength === 0 ? { status: n.status, message: "Empty HLS response at URL: " + n.uri, code: Ht.FAILURE, xhr: n } : null;
}, wl = function(r, n, i) {
  return function(e, t) {
    var a = t.response, o = So(e, t);
    if (o) return i(o, r);
    if (a.byteLength !== 16) return i({ status: t.status, message: "Invalid HLS key at URL: " + t.uri, code: Ht.FAILURE, xhr: t }, r);
    for (var u = new DataView(a), l = new Uint32Array([u.getUint32(0), u.getUint32(4), u.getUint32(8), u.getUint32(12)]), c = 0; c < n.length; c++) n[c].bytes = l;
    return i(null, r);
  };
}, zc = function(r, n) {
  var i = Vs(r.map.bytes);
  if (i !== "mp4") {
    var e = r.map.resolvedUri || r.map.uri;
    return n({ internal: true, message: "Found unsupported " + (i || "unknown") + " container for initialization segment at URL: " + e, code: Ht.FAILURE });
  }
  Kn({ action: "probeMp4Tracks", data: r.map.bytes, transmuxer: r.transmuxer, callback: function(a) {
    var o = a.tracks, u = a.data;
    return r.map.bytes = u, o.forEach(function(l) {
      r.map.tracks = r.map.tracks || {}, !r.map.tracks[l.type] && (r.map.tracks[l.type] = l, typeof l.id == "number" && l.timescale && (r.map.timescales = r.map.timescales || {}, r.map.timescales[l.id] = l.timescale));
    }), n(null);
  } });
}, n0 = function(r) {
  var n = r.segment, i = r.finishProcessingFn;
  return function(e, t) {
    var a = So(e, t);
    if (a) return i(a, n);
    var o = new Uint8Array(t.response);
    if (n.map.key) return n.map.encryptedBytes = o, i(null, n);
    n.map.bytes = o, zc(n, function(u) {
      if (u) return u.xhr = t, u.status = t.status, i(u, n);
      i(null, n);
    });
  };
}, a0 = function(r) {
  var n = r.segment, i = r.finishProcessingFn, e = r.responseType;
  return function(t, a) {
    var o = So(t, a);
    if (o) return i(o, n);
    var u = e === "arraybuffer" || !a.responseText ? a.response : zv(a.responseText.substring(n.lastReachedChar || 0));
    return n.stats = r0(a), n.key ? n.encryptedBytes = new Uint8Array(u) : n.bytes = new Uint8Array(u), i(null, n);
  };
}, s0 = function(r) {
  var n = r.segment, i = r.bytes, e = r.trackInfoFn, t = r.timingInfoFn, a = r.videoSegmentTimingInfoFn, o = r.audioSegmentTimingInfoFn, u = r.id3Fn, l = r.captionsFn, c = r.isEndOfTimeline, m = r.endedTimelineFn, g = r.dataFn, _ = r.doneFn, C = r.onTransmuxerLog, w = n.map && n.map.tracks || {}, S = !!(w.audio && w.video), F = t.bind(null, n, "audio", "start"), N = t.bind(null, n, "audio", "end"), z = t.bind(null, n, "video", "start"), W = t.bind(null, n, "video", "end"), H = function() {
    return Gc({ bytes: i, transmuxer: n.transmuxer, audioAppendStart: n.audioAppendStart, gopsToAlignWith: n.gopsToAlignWith, remux: S, onData: function(V) {
      V.type = V.type === "combined" ? "video" : V.type, g(n, V);
    }, onTrackInfo: function(V) {
      e && (S && (V.isMuxed = true), e(n, V));
    }, onAudioTimingInfo: function(V) {
      F && typeof V.start < "u" && (F(V.start), F = null), N && typeof V.end < "u" && N(V.end);
    }, onVideoTimingInfo: function(V) {
      z && typeof V.start < "u" && (z(V.start), z = null), W && typeof V.end < "u" && W(V.end);
    }, onVideoSegmentTimingInfo: function(V) {
      a(V);
    }, onAudioSegmentTimingInfo: function(V) {
      o(V);
    }, onId3: function(V, T) {
      u(n, V, T);
    }, onCaptions: function(V) {
      l(n, [V]);
    }, isEndOfTimeline: c, onEndedTimeline: function() {
      m();
    }, onTransmuxerLog: C, onDone: function(V) {
      _ && (V.type = V.type === "combined" ? "video" : V.type, _(null, n, V));
    } });
  };
  Kn({ action: "probeTs", transmuxer: n.transmuxer, data: i, baseStartTime: n.baseStartTime, callback: function(R) {
    n.bytes = i = R.data;
    var V = R.result;
    V && (e(n, { hasAudio: V.hasAudio, hasVideo: V.hasVideo, isMuxed: S }), e = null, V.hasAudio && !S && F(V.audioStart), V.hasVideo && z(V.videoStart), F = null, z = null), H();
  } });
}, Kc = function(r) {
  var n = r.segment, i = r.bytes, e = r.trackInfoFn, t = r.timingInfoFn, a = r.videoSegmentTimingInfoFn, o = r.audioSegmentTimingInfoFn, u = r.id3Fn, l = r.captionsFn, c = r.isEndOfTimeline, m = r.endedTimelineFn, g = r.dataFn, _ = r.doneFn, C = r.onTransmuxerLog, w = new Uint8Array(i);
  if (Em(w)) {
    n.isFmp4 = true;
    var S = n.map.tracks, F = { isFmp4: true, hasVideo: !!S.video, hasAudio: !!S.audio };
    S.audio && S.audio.codec && S.audio.codec !== "enca" && (F.audioCodec = S.audio.codec), S.video && S.video.codec && S.video.codec !== "encv" && (F.videoCodec = S.video.codec), S.video && S.audio && (F.isMuxed = true), e(n, F);
    var N = function(W) {
      g(n, { data: w, type: F.hasAudio && !F.isMuxed ? "audio" : "video" }), W && W.length && l(n, W), _(null, n, {});
    };
    Kn({ action: "probeMp4StartTime", timescales: n.map.timescales, data: w, transmuxer: n.transmuxer, callback: function(W) {
      var H = W.data, $ = W.startTime;
      if (i = H.buffer, n.bytes = w = H, F.hasAudio && !F.isMuxed && t(n, "audio", "start", $), F.hasVideo && t(n, "video", "start", $), !S.video || !H.byteLength || !n.transmuxer) {
        N();
        return;
      }
      Kn({ action: "pushMp4Captions", endAction: "mp4Captions", transmuxer: n.transmuxer, data: w, timescales: n.map.timescales, trackIds: [S.video.id], callback: function(V) {
        i = V.data.buffer, n.bytes = w = V.data, V.logs.forEach(function(T) {
          C(q.mergeOptions(T, { stream: "mp4CaptionParser" }));
        }), N(V.captions);
      } });
    } });
    return;
  }
  if (!n.transmuxer) {
    _(null, n, {});
    return;
  }
  if (typeof n.container > "u" && (n.container = Vs(w)), n.container !== "ts" && n.container !== "aac") {
    e(n, { hasAudio: false, hasVideo: false }), _(null, n, {});
    return;
  }
  s0({ segment: n, bytes: i, trackInfoFn: e, timingInfoFn: t, videoSegmentTimingInfoFn: a, audioSegmentTimingInfoFn: o, id3Fn: u, captionsFn: l, isEndOfTimeline: c, endedTimelineFn: m, dataFn: g, doneFn: _, onTransmuxerLog: C });
}, Xc = function(r, n) {
  var i = r.id, e = r.key, t = r.encryptedBytes, a = r.decryptionWorker, o = function l(c) {
    if (c.data.source === i) {
      a.removeEventListener("message", l);
      var m = c.data.decrypted;
      n(new Uint8Array(m.bytes, m.byteOffset, m.byteLength));
    }
  };
  a.addEventListener("message", o);
  var u;
  e.bytes.slice ? u = e.bytes.slice() : u = new Uint32Array(Array.prototype.slice.call(e.bytes)), a.postMessage(Lc({ source: i, encrypted: t, key: u, iv: e.iv }), [t.buffer, u.buffer]);
}, o0 = function(r) {
  var n = r.decryptionWorker, i = r.segment, e = r.trackInfoFn, t = r.timingInfoFn, a = r.videoSegmentTimingInfoFn, o = r.audioSegmentTimingInfoFn, u = r.id3Fn, l = r.captionsFn, c = r.isEndOfTimeline, m = r.endedTimelineFn, g = r.dataFn, _ = r.doneFn, C = r.onTransmuxerLog;
  Xc({ id: i.requestId, key: i.key, encryptedBytes: i.encryptedBytes, decryptionWorker: n }, function(w) {
    i.bytes = w, Kc({ segment: i, bytes: i.bytes, trackInfoFn: e, timingInfoFn: t, videoSegmentTimingInfoFn: a, audioSegmentTimingInfoFn: o, id3Fn: u, captionsFn: l, isEndOfTimeline: c, endedTimelineFn: m, dataFn: g, doneFn: _, onTransmuxerLog: C });
  });
}, u0 = function(r) {
  var n = r.activeXhrs, i = r.decryptionWorker, e = r.trackInfoFn, t = r.timingInfoFn, a = r.videoSegmentTimingInfoFn, o = r.audioSegmentTimingInfoFn, u = r.id3Fn, l = r.captionsFn, c = r.isEndOfTimeline, m = r.endedTimelineFn, g = r.dataFn, _ = r.doneFn, C = r.onTransmuxerLog, w = 0, S = false;
  return function(F, N) {
    if (!S) {
      if (F) return S = true, Is(n), _(F, N);
      if (w += 1, w === n.length) {
        var z = function() {
          if (N.encryptedBytes) return o0({ decryptionWorker: i, segment: N, trackInfoFn: e, timingInfoFn: t, videoSegmentTimingInfoFn: a, audioSegmentTimingInfoFn: o, id3Fn: u, captionsFn: l, isEndOfTimeline: c, endedTimelineFn: m, dataFn: g, doneFn: _, onTransmuxerLog: C });
          Kc({ segment: N, bytes: N.bytes, trackInfoFn: e, timingInfoFn: t, videoSegmentTimingInfoFn: a, audioSegmentTimingInfoFn: o, id3Fn: u, captionsFn: l, isEndOfTimeline: c, endedTimelineFn: m, dataFn: g, doneFn: _, onTransmuxerLog: C });
        };
        if (N.endOfAllRequests = Date.now(), N.map && N.map.encryptedBytes && !N.map.bytes) return Xc({ decryptionWorker: i, id: N.requestId + "-init", encryptedBytes: N.map.encryptedBytes, key: N.map.key }, function(W) {
          N.map.bytes = W, zc(N, function(H) {
            if (H) return Is(n), _(H, N);
            z();
          });
        });
        z();
      }
    }
  };
}, l0 = function(r) {
  var n = r.loadendState, i = r.abortFn;
  return function(e) {
    var t = e.target;
    t.aborted && i && !n.calledAbortFn && (i(), n.calledAbortFn = true);
  };
}, d0 = function(r) {
  var n = r.segment, i = r.progressFn;
  return function(e) {
    var t = e.target;
    if (!t.aborted) return n.stats = q.mergeOptions(n.stats, i0(e)), !n.stats.firstBytesReceivedAt && n.stats.bytesReceived && (n.stats.firstBytesReceivedAt = Date.now()), i(e, n);
  };
}, c0 = function(r) {
  var n = r.xhr, i = r.xhrOptions, e = r.decryptionWorker, t = r.segment, a = r.abortFn, o = r.progressFn, u = r.trackInfoFn, l = r.timingInfoFn, c = r.videoSegmentTimingInfoFn, m = r.audioSegmentTimingInfoFn, g = r.id3Fn, _ = r.captionsFn, C = r.isEndOfTimeline, w = r.endedTimelineFn, S = r.dataFn, F = r.doneFn, N = r.onTransmuxerLog, z = [], W = u0({ activeXhrs: z, decryptionWorker: e, trackInfoFn: u, timingInfoFn: l, videoSegmentTimingInfoFn: c, audioSegmentTimingInfoFn: m, id3Fn: g, captionsFn: _, isEndOfTimeline: C, endedTimelineFn: w, dataFn: S, doneFn: F, onTransmuxerLog: N });
  if (t.key && !t.key.bytes) {
    var H = [t.key];
    t.map && !t.map.bytes && t.map.key && t.map.key.resolvedUri === t.key.resolvedUri && H.push(t.map.key);
    var $ = q.mergeOptions(i, { uri: t.key.resolvedUri, responseType: "arraybuffer" }), R = wl(t, H, W), V = n($, R);
    z.push(V);
  }
  if (t.map && !t.map.bytes) {
    var T = t.map.key && (!t.key || t.key.resolvedUri !== t.map.key.resolvedUri);
    if (T) {
      var E = q.mergeOptions(i, { uri: t.map.key.resolvedUri, responseType: "arraybuffer" }), M = wl(t, [t.map.key], W), B = n(E, M);
      z.push(B);
    }
    var j = q.mergeOptions(i, { uri: t.map.resolvedUri, responseType: "arraybuffer", headers: ks(t.map) }), K = n0({ segment: t, finishProcessingFn: W }), Y = n(j, K);
    z.push(Y);
  }
  var re = q.mergeOptions(i, { uri: t.part && t.part.resolvedUri || t.resolvedUri, responseType: "arraybuffer", headers: ks(t) }), J = a0({ segment: t, finishProcessingFn: W, responseType: re.responseType }), ee = n(re, J);
  ee.addEventListener("progress", d0({ segment: t, progressFn: o })), z.push(ee);
  var Z = {};
  return z.forEach(function(Q) {
    Q.addEventListener("loadend", l0({ loadendState: Z, abortFn: a }));
  }), function() {
    return Is(z);
  };
}, f0 = Lt("CodecUtils"), h0 = function(r) {
  var n = r.attributes || {};
  if (n.CODECS) return Ut(n.CODECS);
}, $c = function(r, n) {
  var i = n.attributes || {};
  return r && r.mediaGroups && r.mediaGroups.AUDIO && i.AUDIO && r.mediaGroups.AUDIO[i.AUDIO];
}, p0 = function(r, n) {
  if (!$c(r, n)) return true;
  var i = n.attributes || {}, e = r.mediaGroups.AUDIO[i.AUDIO];
  for (var t in e) if (!e[t].uri && !e[t].playlists) return true;
  return false;
}, Xn = function(r) {
  var n = {};
  return r.forEach(function(i) {
    var e = i.mediaType, t = i.type, a = i.details;
    n[e] = n[e] || [], n[e].push(Kl("" + t + a));
  }), Object.keys(n).forEach(function(i) {
    if (n[i].length > 1) {
      f0("multiple " + i + " codecs found as attributes: " + n[i].join(", ") + ". Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs."), n[i] = null;
      return;
    }
    n[i] = n[i][0];
  }), n;
}, kl = function(r) {
  var n = 0;
  return r.audio && n++, r.video && n++, n;
}, ki = function(r, n) {
  var i = n.attributes || {}, e = Xn(h0(n) || []);
  if ($c(r, n) && !e.audio && !p0(r, n)) {
    var t = Xn(Jh(r, i.AUDIO) || []);
    t.audio && (e.audio = t.audio);
  }
  return e;
}, Cn = Lt("PlaylistSelector"), Pl = function(r) {
  if (!(!r || !r.playlist)) {
    var n = r.playlist;
    return JSON.stringify({ id: n.id, bandwidth: r.bandwidth, width: r.width, height: r.height, codecs: n.attributes && n.attributes.CODECS || "" });
  }
}, $n = function(r, n) {
  if (!r) return "";
  var i = P.getComputedStyle(r);
  return i ? i[n] : "";
}, zr = function(r, n) {
  var i = r.slice();
  r.sort(function(e, t) {
    var a = n(e, t);
    return a === 0 ? i.indexOf(e) - i.indexOf(t) : a;
  });
}, Eo = function(r, n) {
  var i, e;
  return r.attributes.BANDWIDTH && (i = r.attributes.BANDWIDTH), i = i || P.Number.MAX_VALUE, n.attributes.BANDWIDTH && (e = n.attributes.BANDWIDTH), e = e || P.Number.MAX_VALUE, i - e;
}, m0 = function(r, n) {
  var i, e;
  return r.attributes.RESOLUTION && r.attributes.RESOLUTION.width && (i = r.attributes.RESOLUTION.width), i = i || P.Number.MAX_VALUE, n.attributes.RESOLUTION && n.attributes.RESOLUTION.width && (e = n.attributes.RESOLUTION.width), e = e || P.Number.MAX_VALUE, i === e && r.attributes.BANDWIDTH && n.attributes.BANDWIDTH ? r.attributes.BANDWIDTH - n.attributes.BANDWIDTH : i - e;
}, Yc = function(r, n, i, e, t, a) {
  if (r) {
    var o = { bandwidth: n, width: i, height: e, limitRenditionByPlayerDimensions: t }, u = r.playlists;
    vt.isAudioOnly(r) && (u = a.getAudioTrackPlaylists_(), o.audioOnly = true);
    var l = u.map(function(E) {
      var M, B = E.attributes && E.attributes.RESOLUTION && E.attributes.RESOLUTION.width, j = E.attributes && E.attributes.RESOLUTION && E.attributes.RESOLUTION.height;
      return M = E.attributes && E.attributes.BANDWIDTH, M = M || P.Number.MAX_VALUE, { bandwidth: M, width: B, height: j, playlist: E };
    });
    zr(l, function(E, M) {
      return E.bandwidth - M.bandwidth;
    }), l = l.filter(function(E) {
      return !vt.isIncompatible(E.playlist);
    });
    var c = l.filter(function(E) {
      return vt.isEnabled(E.playlist);
    });
    c.length || (c = l.filter(function(E) {
      return !vt.isDisabled(E.playlist);
    }));
    var m = c.filter(function(E) {
      return E.bandwidth * Qe.BANDWIDTH_VARIANCE < n;
    }), g = m[m.length - 1], _ = m.filter(function(E) {
      return E.bandwidth === g.bandwidth;
    })[0];
    if (t === false) {
      var C = _ || c[0] || l[0];
      if (C && C.playlist) {
        var w = "sortedPlaylistReps";
        return _ && (w = "bandwidthBestRep"), c[0] && (w = "enabledPlaylistReps"), Cn("choosing " + Pl(C) + " using " + w + " with options", o), C.playlist;
      }
      return Cn("could not choose a playlist with options", o), null;
    }
    var S = m.filter(function(E) {
      return E.width && E.height;
    });
    zr(S, function(E, M) {
      return E.width - M.width;
    });
    var F = S.filter(function(E) {
      return E.width === i && E.height === e;
    });
    g = F[F.length - 1];
    var N = F.filter(function(E) {
      return E.bandwidth === g.bandwidth;
    })[0], z, W, H;
    N || (z = S.filter(function(E) {
      return E.width > i || E.height > e;
    }), W = z.filter(function(E) {
      return E.width === z[0].width && E.height === z[0].height;
    }), g = W[W.length - 1], H = W.filter(function(E) {
      return E.bandwidth === g.bandwidth;
    })[0]);
    var $;
    if (a.experimentalLeastPixelDiffSelector) {
      var R = S.map(function(E) {
        return E.pixelDiff = Math.abs(E.width - i) + Math.abs(E.height - e), E;
      });
      zr(R, function(E, M) {
        return E.pixelDiff === M.pixelDiff ? M.bandwidth - E.bandwidth : E.pixelDiff - M.pixelDiff;
      }), $ = R[0];
    }
    var V = $ || H || N || _ || c[0] || l[0];
    if (V && V.playlist) {
      var T = "sortedPlaylistReps";
      return $ ? T = "leastPixelDiffRep" : H ? T = "resolutionPlusOneRep" : N ? T = "resolutionBestRep" : _ ? T = "bandwidthBestRep" : c[0] && (T = "enabledPlaylistReps"), Cn("choosing " + Pl(V) + " using " + T + " with options", o), V.playlist;
    }
    return Cn("could not choose a playlist with options", o), null;
  }
}, Il = function() {
  var r = this.useDevicePixelRatio && P.devicePixelRatio || 1;
  return Yc(this.playlists.master, this.systemBandwidth, parseInt($n(this.tech_.el(), "width"), 10) * r, parseInt($n(this.tech_.el(), "height"), 10) * r, this.limitRenditionByPlayerDimensions, this.masterPlaylistController_);
}, g0 = function(r) {
  var n = -1, i = -1;
  if (r < 0 || r > 1) throw new Error("Moving average bandwidth decay must be between 0 and 1.");
  return function() {
    var e = this.useDevicePixelRatio && P.devicePixelRatio || 1;
    return n < 0 && (n = this.systemBandwidth, i = this.systemBandwidth), this.systemBandwidth > 0 && this.systemBandwidth !== i && (n = r * this.systemBandwidth + (1 - r) * n, i = this.systemBandwidth), Yc(this.playlists.master, n, parseInt($n(this.tech_.el(), "width"), 10) * e, parseInt($n(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions, this.masterPlaylistController_);
  };
}, v0 = function(r) {
  var n = r.master, i = r.currentTime, e = r.bandwidth, t = r.duration, a = r.segmentDuration, o = r.timeUntilRebuffer, u = r.currentTimeline, l = r.syncController, c = n.playlists.filter(function(w) {
    return !vt.isIncompatible(w);
  }), m = c.filter(vt.isEnabled);
  m.length || (m = c.filter(function(w) {
    return !vt.isDisabled(w);
  }));
  var g = m.filter(vt.hasAttribute.bind(null, "BANDWIDTH")), _ = g.map(function(w) {
    var S = l.getSyncPoint(w, t, u, i), F = S ? 1 : 2, N = vt.estimateSegmentRequestTime(a, e, w), z = N * F - o;
    return { playlist: w, rebufferingImpact: z };
  }), C = _.filter(function(w) {
    return w.rebufferingImpact <= 0;
  });
  return zr(C, function(w, S) {
    return Eo(S.playlist, w.playlist);
  }), C.length ? C[0] : (zr(_, function(w, S) {
    return w.rebufferingImpact - S.rebufferingImpact;
  }), _[0] || null);
}, y0 = function() {
  var r = this, n = this.playlists.master.playlists.filter(vt.isEnabled);
  zr(n, function(e, t) {
    return Eo(e, t);
  });
  var i = n.filter(function(e) {
    return !!ki(r.playlists.master, e).video;
  });
  return i[0] || null;
}, _0 = function(r) {
  var n = 0, i;
  return r.bytes && (i = new Uint8Array(r.bytes), r.segments.forEach(function(e) {
    i.set(e, n), n += e.byteLength;
  })), i;
}, T0 = function(r, n, i) {
  if (!r[i]) {
    n.trigger({ type: "usage", name: "vhs-608" }), n.trigger({ type: "usage", name: "hls-608" });
    var e = i;
    /^cc708_/.test(i) && (e = "SERVICE" + i.split("_")[1]);
    var t = n.textTracks().getTrackById(e);
    if (t) r[i] = t;
    else {
      var a = n.options_.vhs && n.options_.vhs.captionServices || {}, o = i, u = i, l = false, c = a[e];
      c && (o = c.label, u = c.language, l = c.default), r[i] = n.addRemoteTextTrack({ kind: "captions", id: e, default: l, label: o, language: u }, false).track;
    }
  }
}, b0 = function(r) {
  var n = r.inbandTextTracks, i = r.captionArray, e = r.timestampOffset;
  if (i) {
    var t = P.WebKitDataCue || P.VTTCue;
    i.forEach(function(a) {
      var o = a.stream;
      n[o].addCue(new t(a.startTime + e, a.endTime + e, a.text));
    });
  }
}, x0 = function(r) {
  Object.defineProperties(r.frame, { id: { get: function() {
    return q.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), r.value.key;
  } }, value: { get: function() {
    return q.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), r.value.data;
  } }, privateData: { get: function() {
    return q.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), r.value.data;
  } } });
}, S0 = function(r) {
  var n = r.inbandTextTracks, i = r.metadataArray, e = r.timestampOffset, t = r.videoDuration;
  if (i) {
    var a = P.WebKitDataCue || P.VTTCue, o = n.metadataTrack_;
    if (o && (i.forEach(function(_) {
      var C = _.cueTime + e;
      typeof C != "number" || P.isNaN(C) || C < 0 || !(C < 1 / 0) || _.frames.forEach(function(w) {
        var S = new a(C, C, w.value || w.url || w.data || "");
        S.frame = w, S.value = w, x0(S), o.addCue(S);
      });
    }), !(!o.cues || !o.cues.length))) {
      for (var u = o.cues, l = [], c = 0; c < u.length; c++) u[c] && l.push(u[c]);
      var m = l.reduce(function(_, C) {
        var w = _[C.startTime] || [];
        return w.push(C), _[C.startTime] = w, _;
      }, {}), g = Object.keys(m).sort(function(_, C) {
        return Number(_) - Number(C);
      });
      g.forEach(function(_, C) {
        var w = m[_], S = Number(g[C + 1]) || t;
        w.forEach(function(F) {
          F.endTime = S;
        });
      });
    }
  }
}, E0 = function(r, n, i) {
  r.metadataTrack_ || (r.metadataTrack_ = i.addRemoteTextTrack({ kind: "metadata", label: "Timed Metadata" }, false).track, r.metadataTrack_.inBandMetadataTrackDispatchType = n);
}, Ai = function(r, n, i) {
  var e, t;
  if (i && i.cues) for (e = i.cues.length; e--; ) t = i.cues[e], t.startTime >= r && t.endTime <= n && i.removeCue(t);
}, C0 = function(r) {
  var n = r.cues;
  if (n) for (var i = 0; i < n.length; i++) {
    for (var e = [], t = 0, a = 0; a < n.length; a++) n[i].startTime === n[a].startTime && n[i].endTime === n[a].endTime && n[i].text === n[a].text && (t++, t > 1 && e.push(n[a]));
    e.length && e.forEach(function(o) {
      return r.removeCue(o);
    });
  }
}, A0 = function(r, n, i) {
  if (typeof n > "u" || n === null || !r.length) return [];
  var e = Math.ceil((n - i + 3) * Fn.ONE_SECOND_IN_TS), t;
  for (t = 0; t < r.length && !(r[t].pts > e); t++) ;
  return r.slice(t);
}, D0 = function(r, n, i) {
  if (!n.length) return r;
  if (i) return n.slice();
  var e = n[0].pts, t = 0;
  for (t; t < r.length && !(r[t].pts >= e); t++) ;
  return r.slice(0, t).concat(n);
}, w0 = function(r, n, i, e) {
  for (var t = Math.ceil((n - e) * Fn.ONE_SECOND_IN_TS), a = Math.ceil((i - e) * Fn.ONE_SECOND_IN_TS), o = r.slice(), u = r.length; u-- && !(r[u].pts <= a); ) ;
  if (u === -1) return o;
  for (var l = u + 1; l-- && !(r[l].pts <= t); ) ;
  return l = Math.max(l, 0), o.splice(l, u - l + 1), o;
}, k0 = function(r, n) {
  if (!r && !n || !r && n || r && !n) return false;
  if (r === n) return true;
  var i = Object.keys(r).sort(), e = Object.keys(n).sort();
  if (i.length !== e.length) return false;
  for (var t = 0; t < i.length; t++) {
    var a = i[t];
    if (a !== e[t] || r[a] !== n[a]) return false;
  }
  return true;
}, Qc = 22, P0 = function(r, n, i) {
  n = n || [];
  for (var e = [], t = 0, a = 0; a < n.length; a++) {
    var o = n[a];
    if (r === o.timeline && (e.push(a), t += o.duration, t > i)) return a;
  }
  return e.length === 0 ? 0 : e[e.length - 1];
}, Si = 1, I0 = 500, Ol = function(r) {
  return typeof r == "number" && isFinite(r);
}, An = 1 / 60, O0 = function(r, n, i) {
  return r !== "main" || !n || !i ? null : !i.hasAudio && !i.hasVideo ? "Neither audio nor video found in segment." : n.hasVideo && !i.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !n.hasVideo && i.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null;
}, L0 = function(r, n, i) {
  var e = n - Qe.BACK_BUFFER_LENGTH;
  r.length && (e = Math.max(e, r.start(0)));
  var t = n - i;
  return Math.min(t, e);
}, qr = function(r) {
  var n = r.startOfSegment, i = r.duration, e = r.segment, t = r.part, a = r.playlist, o = a.mediaSequence, u = a.id, l = a.segments, c = l === void 0 ? [] : l, m = r.mediaIndex, g = r.partIndex, _ = r.timeline, C = c.length - 1, w = "mediaIndex/partIndex increment";
  r.getMediaInfoForTime ? w = "getMediaInfoForTime (" + r.getMediaInfoForTime + ")" : r.isSyncRequest && (w = "getSyncSegmentCandidate (isSyncRequest)"), r.independent && (w += " with independent " + r.independent);
  var S = typeof g == "number", F = r.segment.uri ? "segment" : "pre-segment", N = S ? _c({ preloadSegment: e }) - 1 : 0;
  return F + " [" + (o + m) + "/" + (o + C) + "]" + (S ? " part [" + g + "/" + N + "]" : "") + (" segment start/end [" + e.start + " => " + e.end + "]") + (S ? " part start/end [" + t.start + " => " + t.end + "]" : "") + (" startOfSegment [" + n + "]") + (" duration [" + i + "]") + (" timeline [" + _ + "]") + (" selected by [" + w + "]") + (" playlist [" + u + "]");
}, Ll = function(r) {
  return r + "TimingInfo";
}, F0 = function(r) {
  var n = r.segmentTimeline, i = r.currentTimeline, e = r.startOfSegment, t = r.buffered, a = r.overrideCheck;
  return !a && n === i ? null : n < i ? e : t.length ? t.end(t.length - 1) : e;
}, Fl = function(r) {
  var n = r.timelineChangeController, i = r.currentTimeline, e = r.segmentTimeline, t = r.loaderType, a = r.audioDisabled;
  if (i === e) return false;
  if (t === "audio") {
    var o = n.lastTimelineChange({ type: "main" });
    return !o || o.to !== e;
  }
  if (t === "main" && a) {
    var u = n.pendingTimelineChange({ type: "audio" });
    return !(u && u.to === e);
  }
  return false;
}, R0 = function(r) {
  var n = 0;
  return ["video", "audio"].forEach(function(i) {
    var e = r[i + "TimingInfo"];
    if (e) {
      var t = e.start, a = e.end, o;
      typeof t == "bigint" || typeof a == "bigint" ? o = P.BigInt(a) - P.BigInt(t) : typeof t == "number" && typeof a == "number" && (o = a - t), typeof o < "u" && o > n && (n = o);
    }
  }), typeof n == "bigint" && n < Number.MAX_SAFE_INTEGER && (n = Number(n)), n;
}, Rl = function(r) {
  var n = r.segmentDuration, i = r.maxDuration;
  return n ? Math.round(n) > i + pr : false;
}, M0 = function(r, n) {
  if (n !== "hls") return null;
  var i = R0({ audioTimingInfo: r.audioTimingInfo, videoTimingInfo: r.videoTimingInfo });
  if (!i) return null;
  var e = r.playlist.targetDuration, t = Rl({ segmentDuration: i, maxDuration: e * 2 }), a = Rl({ segmentDuration: i, maxDuration: e }), o = "Segment with index " + r.mediaIndex + " " + ("from playlist " + r.playlist.id + " ") + ("has a duration of " + i + " ") + ("when the reported duration is " + r.duration + " ") + ("and the target duration is " + e + ". ") + "For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1";
  return t || a ? { severity: t ? "warn" : "info", message: o } : null;
}, Os = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    if (t = s12.call(this) || this, !i) throw new TypeError("Initialization settings are required");
    if (typeof i.currentTime != "function") throw new TypeError("No currentTime getter specified");
    if (!i.mediaSource) throw new TypeError("No MediaSource specified");
    return t.bandwidth = i.bandwidth, t.throughput = { rate: 0, count: 0 }, t.roundTrip = NaN, t.resetStats_(), t.mediaIndex = null, t.partIndex = null, t.hasPlayed_ = i.hasPlayed, t.currentTime_ = i.currentTime, t.seekable_ = i.seekable, t.seeking_ = i.seeking, t.duration_ = i.duration, t.mediaSource_ = i.mediaSource, t.vhs_ = i.vhs, t.loaderType_ = i.loaderType, t.currentMediaInfo_ = void 0, t.startingMediaInfo_ = void 0, t.segmentMetadataTrack_ = i.segmentMetadataTrack, t.goalBufferLength_ = i.goalBufferLength, t.sourceType_ = i.sourceType, t.sourceUpdater_ = i.sourceUpdater, t.inbandTextTracks_ = i.inbandTextTracks, t.state_ = "INIT", t.timelineChangeController_ = i.timelineChangeController, t.shouldSaveSegmentTimingInfo_ = true, t.parse708captions_ = i.parse708captions, t.useDtsForTimestampOffset_ = i.useDtsForTimestampOffset, t.captionServices_ = i.captionServices, t.experimentalExactManifestTimings = i.experimentalExactManifestTimings, t.checkBufferTimeout_ = null, t.error_ = void 0, t.currentTimeline_ = -1, t.pendingSegment_ = null, t.xhrOptions_ = null, t.pendingSegments_ = [], t.audioDisabled_ = false, t.isPendingTimestampOffset_ = false, t.gopBuffer_ = [], t.timeMapping_ = 0, t.safeAppend_ = q.browser.IE_VERSION >= 11, t.appendInitSegment_ = { audio: true, video: true }, t.playlistOfLastInitSegment_ = { audio: null, video: null }, t.callQueue_ = [], t.loadQueue_ = [], t.metadataQueue_ = { id3: [], caption: [] }, t.waitingOnRemove_ = false, t.quotaExceededErrorRetryTimeout_ = null, t.activeInitSegmentId_ = null, t.initSegments_ = {}, t.cacheEncryptionKeys_ = i.cacheEncryptionKeys, t.keyCache_ = {}, t.decrypter_ = i.decrypter, t.syncController_ = i.syncController, t.syncPoint_ = { segmentIndex: 0, time: 0 }, t.transmuxer_ = t.createTransmuxer_(), t.triggerSyncInfoUpdate_ = function() {
      return t.trigger("syncinfoupdate");
    }, t.syncController_.on("syncinfoupdate", t.triggerSyncInfoUpdate_), t.mediaSource_.addEventListener("sourceopen", function() {
      t.isEndOfStream_() || (t.ended_ = false);
    }), t.fetchAtBuffer_ = false, t.logger_ = Lt("SegmentLoader[" + t.loaderType_ + "]"), Object.defineProperty(ye(t), "state", { get: function() {
      return this.state_;
    }, set: function(o) {
      o !== this.state_ && (this.logger_(this.state_ + " -> " + o), this.state_ = o, this.trigger("statechange"));
    } }), t.sourceUpdater_.on("ready", function() {
      t.hasEnoughInfoToAppend_() && t.processCallQueue_();
    }), t.loaderType_ === "main" && t.timelineChangeController_.on("pendingtimelinechange", function() {
      t.hasEnoughInfoToAppend_() && t.processCallQueue_();
    }), t.loaderType_ === "audio" && t.timelineChangeController_.on("timelinechange", function() {
      t.hasEnoughInfoToLoad_() && t.processLoadQueue_(), t.hasEnoughInfoToAppend_() && t.processCallQueue_();
    }), t;
  }
  var n = r.prototype;
  return n.createTransmuxer_ = function() {
    return as.createTransmuxer({ remux: false, alignGopsAtEnd: this.safeAppend_, keepOriginalTimestamps: true, parse708captions: this.parse708captions_, captionServices: this.captionServices_ });
  }, n.resetStats_ = function() {
    this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0, this.mediaAppends = 0;
  }, n.dispose = function() {
    this.trigger("dispose"), this.state = "DISPOSED", this.pause(), this.abort_(), this.transmuxer_ && this.transmuxer_.terminate(), this.resetStats_(), this.checkBufferTimeout_ && P.clearTimeout(this.checkBufferTimeout_), this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_), this.off();
  }, n.setAudio = function(e) {
    this.audioDisabled_ = !e, e ? this.appendInitSegment_.audio = true : this.sourceUpdater_.removeAudio(0, this.duration_());
  }, n.abort = function() {
    if (this.state !== "WAITING") {
      this.pendingSegment_ && (this.pendingSegment_ = null);
      return;
    }
    this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_();
  }, n.abort_ = function() {
    this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_), this.waitingOnRemove_ = false, P.clearTimeout(this.quotaExceededErrorRetryTimeout_), this.quotaExceededErrorRetryTimeout_ = null;
  }, n.checkForAbort_ = function(e) {
    return this.state === "APPENDING" && !this.pendingSegment_ ? (this.state = "READY", true) : !this.pendingSegment_ || this.pendingSegment_.requestId !== e;
  }, n.error = function(e) {
    return typeof e < "u" && (this.logger_("error occurred:", e), this.error_ = e), this.pendingSegment_ = null, this.error_;
  }, n.endOfStream = function() {
    this.ended_ = true, this.transmuxer_ && as.reset(this.transmuxer_), this.gopBuffer_.length = 0, this.pause(), this.trigger("ended");
  }, n.buffered_ = function() {
    var e = this.getMediaInfo_();
    if (!this.sourceUpdater_ || !e) return q.createTimeRanges();
    if (this.loaderType_ === "main") {
      var t = e.hasAudio, a = e.hasVideo, o = e.isMuxed;
      if (a && t && !this.audioDisabled_ && !o) return this.sourceUpdater_.buffered();
      if (a) return this.sourceUpdater_.videoBuffered();
    }
    return this.sourceUpdater_.audioBuffered();
  }, n.initSegmentForMap = function(e, t) {
    if (t === void 0 && (t = false), !e) return null;
    var a = zn(e), o = this.initSegments_[a];
    return t && !o && e.bytes && (this.initSegments_[a] = o = { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: e.bytes, tracks: e.tracks, timescales: e.timescales }), o || e;
  }, n.segmentKey = function(e, t) {
    if (t === void 0 && (t = false), !e) return null;
    var a = Fc(e), o = this.keyCache_[a];
    this.cacheEncryptionKeys_ && t && !o && e.bytes && (this.keyCache_[a] = o = { resolvedUri: e.resolvedUri, bytes: e.bytes });
    var u = { resolvedUri: (o || e).resolvedUri };
    return o && (u.bytes = o.bytes), u;
  }, n.couldBeginLoading_ = function() {
    return this.playlist_ && !this.paused();
  }, n.load = function() {
    if (this.monitorBuffer_(), !!this.playlist_) {
      if (this.state === "INIT" && this.couldBeginLoading_()) return this.init_();
      !this.couldBeginLoading_() || this.state !== "READY" && this.state !== "INIT" || (this.state = "READY");
    }
  }, n.init_ = function() {
    return this.state = "READY", this.resetEverything(), this.monitorBuffer_();
  }, n.playlist = function(e, t) {
    if (t === void 0 && (t = {}), !!e) {
      var a = this.playlist_, o = this.pendingSegment_;
      this.playlist_ = e, this.xhrOptions_ = t, this.state === "INIT" && (e.syncInfo = { mediaSequence: e.mediaSequence, time: 0 }, this.loaderType_ === "main" && this.syncController_.setDateTimeMappingForStart(e));
      var u = null;
      if (a && (a.id ? u = a.id : a.uri && (u = a.uri)), this.logger_("playlist update [" + u + " => " + (e.id || e.uri) + "]"), this.trigger("syncinfoupdate"), this.state === "INIT" && this.couldBeginLoading_()) return this.init_();
      if (!a || a.uri !== e.uri) {
        this.mediaIndex !== null && (e.endList ? this.resyncLoader() : this.resetLoader()), this.currentMediaInfo_ = void 0, this.trigger("playlistupdate");
        return;
      }
      var l = e.mediaSequence - a.mediaSequence;
      if (this.logger_("live window shift [" + l + "]"), this.mediaIndex !== null) if (this.mediaIndex -= l, this.mediaIndex < 0) this.mediaIndex = null, this.partIndex = null;
      else {
        var c = this.playlist_.segments[this.mediaIndex];
        if (this.partIndex && (!c.parts || !c.parts.length || !c.parts[this.partIndex])) {
          var m = this.mediaIndex;
          this.logger_("currently processing part (index " + this.partIndex + ") no longer exists."), this.resetLoader(), this.mediaIndex = m;
        }
      }
      o && (o.mediaIndex -= l, o.mediaIndex < 0 ? (o.mediaIndex = null, o.partIndex = null) : (o.mediaIndex >= 0 && (o.segment = e.segments[o.mediaIndex]), o.partIndex >= 0 && o.segment.parts && (o.part = o.segment.parts[o.partIndex]))), this.syncController_.saveExpiredSegmentInfo(a, e);
    }
  }, n.pause = function() {
    this.checkBufferTimeout_ && (P.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null);
  }, n.paused = function() {
    return this.checkBufferTimeout_ === null;
  }, n.resetEverything = function(e) {
    this.ended_ = false, this.activeInitSegmentId_ = null, this.appendInitSegment_ = { audio: true, video: true }, this.resetLoader(), this.remove(0, 1 / 0, e), this.transmuxer_ && (this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }), this.transmuxer_.postMessage({ action: "reset" }));
  }, n.resetLoader = function() {
    this.fetchAtBuffer_ = false, this.resyncLoader();
  }, n.resyncLoader = function() {
    this.transmuxer_ && as.reset(this.transmuxer_), this.mediaIndex = null, this.partIndex = null, this.syncPoint_ = null, this.isPendingTimestampOffset_ = false, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.abort(), this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
  }, n.remove = function(e, t, a, o) {
    if (a === void 0 && (a = function() {
    }), o === void 0 && (o = false), t === 1 / 0 && (t = this.duration_()), t <= e) {
      this.logger_("skipping remove because end ${end} is <= start ${start}");
      return;
    }
    if (!this.sourceUpdater_ || !this.getMediaInfo_()) {
      this.logger_("skipping remove because no source updater or starting media info");
      return;
    }
    var u = 1, l = function() {
      u--, u === 0 && a();
    };
    (o || !this.audioDisabled_) && (u++, this.sourceUpdater_.removeAudio(e, t, l)), (o || this.loaderType_ === "main") && (this.gopBuffer_ = w0(this.gopBuffer_, e, t, this.timeMapping_), u++, this.sourceUpdater_.removeVideo(e, t, l));
    for (var c in this.inbandTextTracks_) Ai(e, t, this.inbandTextTracks_[c]);
    Ai(e, t, this.segmentMetadataTrack_), l();
  }, n.monitorBuffer_ = function() {
    this.checkBufferTimeout_ && P.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = P.setTimeout(this.monitorBufferTick_.bind(this), 1);
  }, n.monitorBufferTick_ = function() {
    this.state === "READY" && this.fillBuffer_(), this.checkBufferTimeout_ && P.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = P.setTimeout(this.monitorBufferTick_.bind(this), I0);
  }, n.fillBuffer_ = function() {
    if (!this.sourceUpdater_.updating()) {
      var e = this.chooseNextRequest_();
      e && (typeof e.timestampOffset == "number" && (this.isPendingTimestampOffset_ = false, this.timelineChangeController_.pendingTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: e.timeline })), this.loadSegment_(e));
    }
  }, n.isEndOfStream_ = function(e, t, a) {
    if (e === void 0 && (e = this.mediaIndex), t === void 0 && (t = this.playlist_), a === void 0 && (a = this.partIndex), !t || !this.mediaSource_) return false;
    var o = typeof e == "number" && t.segments[e], u = e + 1 === t.segments.length, l = !o || !o.parts || a + 1 === o.parts.length;
    return t.endList && this.mediaSource_.readyState === "open" && u && l;
  }, n.chooseNextRequest_ = function() {
    var e = this.buffered_(), t = xl(e) || 0, a = yo(e, this.currentTime_()), o = !this.hasPlayed_() && a >= 1, u = a >= this.goalBufferLength_(), l = this.playlist_.segments;
    if (!l.length || o || u) return null;
    this.syncPoint_ = this.syncPoint_ || this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_());
    var c = { partIndex: null, mediaIndex: null, startOfSegment: null, playlist: this.playlist_, isSyncRequest: !this.syncPoint_ };
    if (c.isSyncRequest) c.mediaIndex = P0(this.currentTimeline_, l, t);
    else if (this.mediaIndex !== null) {
      var m = l[this.mediaIndex], g = typeof this.partIndex == "number" ? this.partIndex : -1;
      c.startOfSegment = m.end ? m.end : t, m.parts && m.parts[g + 1] ? (c.mediaIndex = this.mediaIndex, c.partIndex = g + 1) : c.mediaIndex = this.mediaIndex + 1;
    } else {
      var _ = vt.getMediaInfoForTime({ experimentalExactManifestTimings: this.experimentalExactManifestTimings, playlist: this.playlist_, currentTime: this.fetchAtBuffer_ ? t : this.currentTime_(), startingPartIndex: this.syncPoint_.partIndex, startingSegmentIndex: this.syncPoint_.segmentIndex, startTime: this.syncPoint_.time }), C = _.segmentIndex, w = _.startTime, S = _.partIndex;
      c.getMediaInfoForTime = this.fetchAtBuffer_ ? "bufferedEnd " + t : "currentTime " + this.currentTime_(), c.mediaIndex = C, c.startOfSegment = w, c.partIndex = S;
    }
    var F = l[c.mediaIndex], N = F && typeof c.partIndex == "number" && F.parts && F.parts[c.partIndex];
    if (!F || typeof c.partIndex == "number" && !N) return null;
    if (typeof c.partIndex != "number" && F.parts && (c.partIndex = 0, N = F.parts[0]), !a && N && !N.independent) if (c.partIndex === 0) {
      var z = l[c.mediaIndex - 1], W = z.parts && z.parts.length && z.parts[z.parts.length - 1];
      W && W.independent && (c.mediaIndex -= 1, c.partIndex = z.parts.length - 1, c.independent = "previous segment");
    } else F.parts[c.partIndex - 1].independent && (c.partIndex -= 1, c.independent = "previous part");
    var H = this.mediaSource_ && this.mediaSource_.readyState === "ended";
    return c.mediaIndex >= l.length - 1 && H && !this.seeking_() ? null : this.generateSegmentInfo_(c);
  }, n.generateSegmentInfo_ = function(e) {
    var t = e.independent, a = e.playlist, o = e.mediaIndex, u = e.startOfSegment, l = e.isSyncRequest, c = e.partIndex, m = e.forceTimestampOffset, g = e.getMediaInfoForTime, _ = a.segments[o], C = typeof c == "number" && _.parts[c], w = { requestId: "segment-loader-" + Math.random(), uri: C && C.resolvedUri || _.resolvedUri, mediaIndex: o, partIndex: C ? c : null, isSyncRequest: l, startOfSegment: u, playlist: a, bytes: null, encryptedBytes: null, timestampOffset: null, timeline: _.timeline, duration: C && C.duration || _.duration, segment: _, part: C, byteLength: 0, transmuxer: this.transmuxer_, getMediaInfoForTime: g, independent: t }, S = typeof m < "u" ? m : this.isPendingTimestampOffset_;
    w.timestampOffset = this.timestampOffsetForSegment_({ segmentTimeline: _.timeline, currentTimeline: this.currentTimeline_, startOfSegment: u, buffered: this.buffered_(), overrideCheck: S });
    var F = xl(this.sourceUpdater_.audioBuffered());
    return typeof F == "number" && (w.audioAppendStart = F - this.sourceUpdater_.audioTimestampOffset()), this.sourceUpdater_.videoBuffered().length && (w.gopsToAlignWith = A0(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)), w;
  }, n.timestampOffsetForSegment_ = function(e) {
    return F0(e);
  }, n.earlyAbortWhenNeeded_ = function(e) {
    if (!(this.vhs_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) && !(Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3)) {
      var t = this.currentTime_(), a = e.bandwidth, o = this.pendingSegment_.duration, u = vt.estimateSegmentRequestTime(o, a, this.playlist_, e.bytesReceived), l = iv(this.buffered_(), t, this.vhs_.tech_.playbackRate()) - 1;
      if (!(u <= l)) {
        var c = v0({ master: this.vhs_.playlists.master, currentTime: t, bandwidth: a, duration: this.duration_(), segmentDuration: o, timeUntilRebuffer: l, currentTimeline: this.currentTimeline_, syncController: this.syncController_ });
        if (c) {
          var m = u - l, g = m - c.rebufferingImpact, _ = 0.5;
          l <= pr && (_ = 1), !(!c.playlist || c.playlist.uri === this.playlist_.uri || g < _) && (this.bandwidth = c.playlist.attributes.BANDWIDTH * Qe.BANDWIDTH_VARIANCE + 1, this.trigger("earlyabort"));
        }
      }
    }
  }, n.handleAbort_ = function(e) {
    this.logger_("Aborting " + qr(e)), this.mediaRequestsAborted += 1;
  }, n.handleProgress_ = function(e, t) {
    this.earlyAbortWhenNeeded_(t.stats), !this.checkForAbort_(t.requestId) && this.trigger("progress");
  }, n.handleTrackInfo_ = function(e, t) {
    this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId) && (this.checkForIllegalMediaSwitch(t) || (t = t || {}, k0(this.currentMediaInfo_, t) || (this.appendInitSegment_ = { audio: true, video: true }, this.startingMediaInfo_ = t, this.currentMediaInfo_ = t, this.logger_("trackinfo update", t), this.trigger("trackinfo")), !this.checkForAbort_(e.requestId) && (this.pendingSegment_.trackInfo = t, this.hasEnoughInfoToAppend_() && this.processCallQueue_())));
  }, n.handleTimingInfo_ = function(e, t, a, o) {
    if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
      var u = this.pendingSegment_, l = Ll(t);
      u[l] = u[l] || {}, u[l][a] = o, this.logger_("timinginfo: " + t + " - " + a + " - " + o), this.hasEnoughInfoToAppend_() && this.processCallQueue_();
    }
  }, n.handleCaptions_ = function(e, t) {
    var a = this;
    if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
      if (t.length === 0) {
        this.logger_("SegmentLoader received no captions from a caption event");
        return;
      }
      var o = this.pendingSegment_;
      if (!o.hasAppendedData_) {
        this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t));
        return;
      }
      var u = this.sourceUpdater_.videoTimestampOffset() === null ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset(), l = {};
      t.forEach(function(c) {
        l[c.stream] = l[c.stream] || { startTime: 1 / 0, captions: [], endTime: 0 };
        var m = l[c.stream];
        m.startTime = Math.min(m.startTime, c.startTime + u), m.endTime = Math.max(m.endTime, c.endTime + u), m.captions.push(c);
      }), Object.keys(l).forEach(function(c) {
        var m = l[c], g = m.startTime, _ = m.endTime, C = m.captions, w = a.inbandTextTracks_;
        a.logger_("adding cues from " + g + " -> " + _ + " for " + c), T0(w, a.vhs_.tech_, c), Ai(g, _, w[c]), b0({ captionArray: C, inbandTextTracks: w, timestampOffset: u });
      }), this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearParsedMp4Captions" });
    }
  }, n.handleId3_ = function(e, t, a) {
    if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
      var o = this.pendingSegment_;
      if (!o.hasAppendedData_) {
        this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, a));
        return;
      }
      var u = this.sourceUpdater_.videoTimestampOffset() === null ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset();
      E0(this.inbandTextTracks_, a, this.vhs_.tech_), S0({ inbandTextTracks: this.inbandTextTracks_, metadataArray: t, timestampOffset: u, videoDuration: this.duration_() });
    }
  }, n.processMetadataQueue_ = function() {
    this.metadataQueue_.id3.forEach(function(e) {
      return e();
    }), this.metadataQueue_.caption.forEach(function(e) {
      return e();
    }), this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [];
  }, n.processCallQueue_ = function() {
    var e = this.callQueue_;
    this.callQueue_ = [], e.forEach(function(t) {
      return t();
    });
  }, n.processLoadQueue_ = function() {
    var e = this.loadQueue_;
    this.loadQueue_ = [], e.forEach(function(t) {
      return t();
    });
  }, n.hasEnoughInfoToLoad_ = function() {
    if (this.loaderType_ !== "audio") return true;
    var e = this.pendingSegment_;
    return e ? this.getCurrentMediaInfo_() ? !Fl({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: e.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ }) : true : false;
  }, n.getCurrentMediaInfo_ = function(e) {
    return e === void 0 && (e = this.pendingSegment_), e && e.trackInfo || this.currentMediaInfo_;
  }, n.getMediaInfo_ = function(e) {
    return e === void 0 && (e = this.pendingSegment_), this.getCurrentMediaInfo_(e) || this.startingMediaInfo_;
  }, n.getPendingSegmentPlaylist = function() {
    return this.pendingSegment_ ? this.pendingSegment_.playlist : null;
  }, n.hasEnoughInfoToAppend_ = function() {
    if (!this.sourceUpdater_.ready() || this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_) return false;
    var e = this.pendingSegment_, t = this.getCurrentMediaInfo_();
    if (!e || !t) return false;
    var a = t.hasAudio, o = t.hasVideo, u = t.isMuxed;
    return !(o && !e.videoTimingInfo || a && !this.audioDisabled_ && !u && !e.audioTimingInfo || Fl({ timelineChangeController: this.timelineChangeController_, currentTimeline: this.currentTimeline_, segmentTimeline: e.timeline, loaderType: this.loaderType_, audioDisabled: this.audioDisabled_ }));
  }, n.handleData_ = function(e, t) {
    if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
      if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) {
        this.callQueue_.push(this.handleData_.bind(this, e, t));
        return;
      }
      var a = this.pendingSegment_;
      if (this.setTimeMapping_(a.timeline), this.updateMediaSecondsLoaded_(a.part || a.segment), this.mediaSource_.readyState !== "closed") {
        if (e.map && (e.map = this.initSegmentForMap(e.map, true), a.segment.map = e.map), e.key && this.segmentKey(e.key, true), a.isFmp4 = e.isFmp4, a.timingInfo = a.timingInfo || {}, a.isFmp4) this.trigger("fmp4"), a.timingInfo.start = a[Ll(t.type)].start;
        else {
          var o = this.getCurrentMediaInfo_(), u = this.loaderType_ === "main" && o && o.hasVideo, l;
          u && (l = a.videoTimingInfo.start), a.timingInfo.start = this.trueSegmentStart_({ currentStart: a.timingInfo.start, playlist: a.playlist, mediaIndex: a.mediaIndex, currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(), useVideoTimingInfo: u, firstVideoFrameTimeForData: l, videoTimingInfo: a.videoTimingInfo, audioTimingInfo: a.audioTimingInfo });
        }
        if (this.updateAppendInitSegmentStatus(a, t.type), this.updateSourceBufferTimestampOffset_(a), a.isSyncRequest) {
          this.updateTimingInfoEnd_(a), this.syncController_.saveSegmentTimingInfo({ segmentInfo: a, shouldSaveTimelineMapping: this.loaderType_ === "main" });
          var c = this.chooseNextRequest_();
          if (c.mediaIndex !== a.mediaIndex || c.partIndex !== a.partIndex) {
            this.logger_("sync segment was incorrect, not appending");
            return;
          }
          this.logger_("sync segment was correct, appending");
        }
        a.hasAppendedData_ = true, this.processMetadataQueue_(), this.appendData_(a, t);
      }
    }
  }, n.updateAppendInitSegmentStatus = function(e, t) {
    this.loaderType_ === "main" && typeof e.timestampOffset == "number" && !e.changedTimestampOffset && (this.appendInitSegment_ = { audio: true, video: true }), this.playlistOfLastInitSegment_[t] !== e.playlist && (this.appendInitSegment_[t] = true);
  }, n.getInitSegmentAndUpdateState_ = function(e) {
    var t = e.type, a = e.initSegment, o = e.map, u = e.playlist;
    if (o) {
      var l = zn(o);
      if (this.activeInitSegmentId_ === l) return null;
      a = this.initSegmentForMap(o, true).bytes, this.activeInitSegmentId_ = l;
    }
    return a && this.appendInitSegment_[t] ? (this.playlistOfLastInitSegment_[t] = u, this.appendInitSegment_[t] = false, this.activeInitSegmentId_ = null, a) : null;
  }, n.handleQuotaExceededError_ = function(e, t) {
    var a = this, o = e.segmentInfo, u = e.type, l = e.bytes, c = this.sourceUpdater_.audioBuffered(), m = this.sourceUpdater_.videoBuffered();
    c.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " + wr(c).join(", ")), m.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " + wr(m).join(", "));
    var g = c.length ? c.start(0) : 0, _ = c.length ? c.end(c.length - 1) : 0, C = m.length ? m.start(0) : 0, w = m.length ? m.end(m.length - 1) : 0;
    if (_ - g <= Si && w - C <= Si) {
      this.logger_("On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. " + ("Appended byte length: " + l.byteLength + ", ") + ("audio buffer: " + wr(c).join(", ") + ", ") + ("video buffer: " + wr(m).join(", ") + ", ")), this.error({ message: "Quota exceeded error with append of a single segment of content", excludeUntil: 1 / 0 }), this.trigger("error");
      return;
    }
    this.waitingOnRemove_ = true, this.callQueue_.push(this.appendToSourceBuffer_.bind(this, { segmentInfo: o, type: u, bytes: l }));
    var S = this.currentTime_(), F = S - Si;
    this.logger_("On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to " + F), this.remove(0, F, function() {
      a.logger_("On QUOTA_EXCEEDED_ERR, retrying append in " + Si + "s"), a.waitingOnRemove_ = false, a.quotaExceededErrorRetryTimeout_ = P.setTimeout(function() {
        a.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"), a.quotaExceededErrorRetryTimeout_ = null, a.processCallQueue_();
      }, Si * 1e3);
    }, true);
  }, n.handleAppendError_ = function(e, t) {
    var a = e.segmentInfo, o = e.type, u = e.bytes;
    if (t) {
      if (t.code === Qc) {
        this.handleQuotaExceededError_({ segmentInfo: a, type: o, bytes: u });
        return;
      }
      this.logger_("Received non QUOTA_EXCEEDED_ERR on append", t), this.error(o + " append of " + u.length + "b failed for segment " + ("#" + a.mediaIndex + " in playlist " + a.playlist.id)), this.trigger("appenderror");
    }
  }, n.appendToSourceBuffer_ = function(e) {
    var t = e.segmentInfo, a = e.type, o = e.initSegment, u = e.data, l = e.bytes;
    if (!l) {
      var c = [u], m = u.byteLength;
      o && (c.unshift(o), m += o.byteLength), l = _0({ bytes: m, segments: c });
    }
    this.sourceUpdater_.appendBuffer({ segmentInfo: t, type: a, bytes: l }, this.handleAppendError_.bind(this, { segmentInfo: t, type: a, bytes: l }));
  }, n.handleSegmentTimingInfo_ = function(e, t, a) {
    if (!(!this.pendingSegment_ || t !== this.pendingSegment_.requestId)) {
      var o = this.pendingSegment_.segment, u = e + "TimingInfo";
      o[u] || (o[u] = {}), o[u].transmuxerPrependedSeconds = a.prependedContentDuration || 0, o[u].transmuxedPresentationStart = a.start.presentation, o[u].transmuxedDecodeStart = a.start.decode, o[u].transmuxedPresentationEnd = a.end.presentation, o[u].transmuxedDecodeEnd = a.end.decode, o[u].baseMediaDecodeTime = a.baseMediaDecodeTime;
    }
  }, n.appendData_ = function(e, t) {
    var a = t.type, o = t.data;
    if (!(!o || !o.byteLength) && !(a === "audio" && this.audioDisabled_)) {
      var u = this.getInitSegmentAndUpdateState_({ type: a, initSegment: t.initSegment, playlist: e.playlist, map: e.isFmp4 ? e.segment.map : null });
      this.appendToSourceBuffer_({ segmentInfo: e, type: a, initSegment: u, data: o });
    }
  }, n.loadSegment_ = function(e) {
    var t = this;
    if (this.state = "WAITING", this.pendingSegment_ = e, this.trimBackBuffer_(e), typeof e.timestampOffset == "number" && this.transmuxer_ && this.transmuxer_.postMessage({ action: "clearAllMp4Captions" }), !this.hasEnoughInfoToLoad_()) {
      this.loadQueue_.push(function() {
        var a = It({}, e, { forceTimestampOffset: true });
        It(e, t.generateSegmentInfo_(a)), t.isPendingTimestampOffset_ = false, t.updateTransmuxerAndRequestSegment_(e);
      });
      return;
    }
    this.updateTransmuxerAndRequestSegment_(e);
  }, n.updateTransmuxerAndRequestSegment_ = function(e) {
    var t = this;
    this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) && (this.gopBuffer_.length = 0, e.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({ action: "reset" }), this.transmuxer_.postMessage({ action: "setTimestampOffset", timestampOffset: e.timestampOffset }));
    var a = this.createSimplifiedSegmentObj_(e), o = this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex), u = this.mediaIndex !== null, l = e.timeline !== this.currentTimeline_ && e.timeline > 0, c = o || u && l;
    this.logger_("Requesting " + qr(e)), a.map && !a.map.bytes && (this.logger_("going to request init segment."), this.appendInitSegment_ = { video: true, audio: true }), e.abortRequests = c0({ xhr: this.vhs_.xhr, xhrOptions: this.xhrOptions_, decryptionWorker: this.decrypter_, segment: a, abortFn: this.handleAbort_.bind(this, e), progressFn: this.handleProgress_.bind(this), trackInfoFn: this.handleTrackInfo_.bind(this), timingInfoFn: this.handleTimingInfo_.bind(this), videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "video", e.requestId), audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "audio", e.requestId), captionsFn: this.handleCaptions_.bind(this), isEndOfTimeline: c, endedTimelineFn: function() {
      t.logger_("received endedtimeline callback");
    }, id3Fn: this.handleId3_.bind(this), dataFn: this.handleData_.bind(this), doneFn: this.segmentRequestFinished_.bind(this), onTransmuxerLog: function(g) {
      var _ = g.message, C = g.level, w = g.stream;
      t.logger_(qr(e) + " logged from transmuxer stream " + w + " as a " + C + ": " + _);
    } });
  }, n.trimBackBuffer_ = function(e) {
    var t = L0(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
    t > 0 && this.remove(0, t);
  }, n.createSimplifiedSegmentObj_ = function(e) {
    var t = e.segment, a = e.part, o = { resolvedUri: a ? a.resolvedUri : t.resolvedUri, byterange: a ? a.byterange : t.byterange, requestId: e.requestId, transmuxer: e.transmuxer, audioAppendStart: e.audioAppendStart, gopsToAlignWith: e.gopsToAlignWith, part: e.part }, u = e.playlist.segments[e.mediaIndex - 1];
    if (u && u.timeline === t.timeline && (u.videoTimingInfo ? o.baseStartTime = u.videoTimingInfo.transmuxedDecodeEnd : u.audioTimingInfo && (o.baseStartTime = u.audioTimingInfo.transmuxedDecodeEnd)), t.key) {
      var l = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
      o.key = this.segmentKey(t.key), o.key.iv = l;
    }
    return t.map && (o.map = this.initSegmentForMap(t.map)), o;
  }, n.saveTransferStats_ = function(e) {
    this.mediaRequests += 1, e && (this.mediaBytesTransferred += e.bytesReceived, this.mediaTransferDuration += e.roundTripTime);
  }, n.saveBandwidthRelatedStats_ = function(e, t) {
    if (this.pendingSegment_.byteLength = t.bytesReceived, e < An) {
      this.logger_("Ignoring segment's bandwidth because its duration of " + e + (" is less than the min to record " + An));
      return;
    }
    this.bandwidth = t.bandwidth, this.roundTrip = t.roundTripTime;
  }, n.handleTimeout_ = function() {
    this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, this.trigger("bandwidthupdate"), this.trigger("timeout");
  }, n.segmentRequestFinished_ = function(e, t, a) {
    if (this.callQueue_.length) {
      this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, a));
      return;
    }
    if (this.saveTransferStats_(t.stats), !!this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId) {
      if (e) {
        if (this.pendingSegment_ = null, this.state = "READY", e.code === Ht.ABORTED) return;
        if (this.pause(), e.code === Ht.TIMEOUT) {
          this.handleTimeout_();
          return;
        }
        this.mediaRequestsErrored += 1, this.error(e), this.trigger("error");
        return;
      }
      var o = this.pendingSegment_;
      this.saveBandwidthRelatedStats_(o.duration, t.stats), o.endOfAllRequests = t.endOfAllRequests, a.gopInfo && (this.gopBuffer_ = D0(this.gopBuffer_, a.gopInfo, this.safeAppend_)), this.state = "APPENDING", this.trigger("appending"), this.waitForAppendsToComplete_(o);
    }
  }, n.setTimeMapping_ = function(e) {
    var t = this.syncController_.mappingForTimeline(e);
    t !== null && (this.timeMapping_ = t);
  }, n.updateMediaSecondsLoaded_ = function(e) {
    typeof e.start == "number" && typeof e.end == "number" ? this.mediaSecondsLoaded += e.end - e.start : this.mediaSecondsLoaded += e.duration;
  }, n.shouldUpdateTransmuxerTimestampOffset_ = function(e) {
    return e === null ? false : this.loaderType_ === "main" && e !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && e !== this.sourceUpdater_.audioTimestampOffset();
  }, n.trueSegmentStart_ = function(e) {
    var t = e.currentStart, a = e.playlist, o = e.mediaIndex, u = e.firstVideoFrameTimeForData, l = e.currentVideoTimestampOffset, c = e.useVideoTimingInfo, m = e.videoTimingInfo, g = e.audioTimingInfo;
    if (typeof t < "u") return t;
    if (!c) return g.start;
    var _ = a.segments[o - 1];
    return o === 0 || !_ || typeof _.start > "u" || _.end !== u + l ? u : m.start;
  }, n.waitForAppendsToComplete_ = function(e) {
    var t = this.getCurrentMediaInfo_(e);
    if (!t) {
      this.error({ message: "No starting media returned, likely due to an unsupported media format.", blacklistDuration: 1 / 0 }), this.trigger("error");
      return;
    }
    var a = t.hasAudio, o = t.hasVideo, u = t.isMuxed, l = this.loaderType_ === "main" && o, c = !this.audioDisabled_ && a && !u;
    if (e.waitingOnAppends = 0, !e.hasAppendedData_) {
      !e.timingInfo && typeof e.timestampOffset == "number" && (this.isPendingTimestampOffset_ = true), e.timingInfo = { start: 0 }, e.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e), this.processMetadataQueue_()), this.checkAppendsDone_(e);
      return;
    }
    l && e.waitingOnAppends++, c && e.waitingOnAppends++, l && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)), c && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e));
  }, n.checkAppendsDone_ = function(e) {
    this.checkForAbort_(e.requestId) || (e.waitingOnAppends--, e.waitingOnAppends === 0 && this.handleAppendsDone_());
  }, n.checkForIllegalMediaSwitch = function(e) {
    var t = O0(this.loaderType_, this.getCurrentMediaInfo_(), e);
    return t ? (this.error({ message: t, blacklistDuration: 1 / 0 }), this.trigger("error"), true) : false;
  }, n.updateSourceBufferTimestampOffset_ = function(e) {
    if (!(e.timestampOffset === null || typeof e.timingInfo.start != "number" || e.changedTimestampOffset || this.loaderType_ !== "main")) {
      var t = false;
      e.timestampOffset -= this.getSegmentStartTimeForTimestampOffsetCalculation_({ videoTimingInfo: e.segment.videoTimingInfo, audioTimingInfo: e.segment.audioTimingInfo, timingInfo: e.timingInfo }), e.changedTimestampOffset = true, e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), t = true), e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), t = true), t && this.trigger("timestampoffset");
    }
  }, n.getSegmentStartTimeForTimestampOffsetCalculation_ = function(e) {
    var t = e.videoTimingInfo, a = e.audioTimingInfo, o = e.timingInfo;
    return this.useDtsForTimestampOffset_ ? t && typeof t.transmuxedDecodeStart == "number" ? t.transmuxedDecodeStart : a && typeof a.transmuxedDecodeStart == "number" ? a.transmuxedDecodeStart : o.start : o.start;
  }, n.updateTimingInfoEnd_ = function(e) {
    e.timingInfo = e.timingInfo || {};
    var t = this.getMediaInfo_(), a = this.loaderType_ === "main" && t && t.hasVideo, o = a && e.videoTimingInfo ? e.videoTimingInfo : e.audioTimingInfo;
    o && (e.timingInfo.end = typeof o.end == "number" ? o.end : o.start + e.duration);
  }, n.handleAppendsDone_ = function() {
    if (this.pendingSegment_ && this.trigger("appendsdone"), !this.pendingSegment_) {
      this.state = "READY", this.paused() || this.monitorBuffer_();
      return;
    }
    var e = this.pendingSegment_;
    this.updateTimingInfoEnd_(e), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({ segmentInfo: e, shouldSaveTimelineMapping: this.loaderType_ === "main" });
    var t = M0(e, this.sourceType_);
    if (t && (t.severity === "warn" ? q.log.warn(t.message) : this.logger_(t.message)), this.recordThroughput_(e), this.pendingSegment_ = null, this.state = "READY", e.isSyncRequest && (this.trigger("syncinfoupdate"), !e.hasAppendedData_)) {
      this.logger_("Throwing away un-appended sync request " + qr(e));
      return;
    }
    this.logger_("Appended " + qr(e)), this.addSegmentMetadataCue_(e), this.fetchAtBuffer_ = true, this.currentTimeline_ !== e.timeline && (this.timelineChangeController_.lastTimelineChange({ type: this.loaderType_, from: this.currentTimeline_, to: e.timeline }), this.loaderType_ === "main" && !this.audioDisabled_ && this.timelineChangeController_.lastTimelineChange({ type: "audio", from: this.currentTimeline_, to: e.timeline })), this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate");
    var a = e.segment, o = e.part, u = a.end && this.currentTime_() - a.end > e.playlist.targetDuration * 3, l = o && o.end && this.currentTime_() - o.end > e.playlist.partTargetDuration * 3;
    if (u || l) {
      this.logger_("bad " + (u ? "segment" : "part") + " " + qr(e)), this.resetEverything();
      return;
    }
    var c = this.mediaIndex !== null;
    c && this.trigger("bandwidthupdate"), this.trigger("progress"), this.mediaIndex = e.mediaIndex, this.partIndex = e.partIndex, this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex) && this.endOfStream(), this.trigger("appended"), e.hasAppendedData_ && this.mediaAppends++, this.paused() || this.monitorBuffer_();
  }, n.recordThroughput_ = function(e) {
    if (e.duration < An) {
      this.logger_("Ignoring segment's throughput because its duration of " + e.duration + (" is less than the min to record " + An));
      return;
    }
    var t = this.throughput.rate, a = Date.now() - e.endOfAllRequests + 1, o = Math.floor(e.byteLength / a * 8 * 1e3);
    this.throughput.rate += (o - t) / ++this.throughput.count;
  }, n.addSegmentMetadataCue_ = function(e) {
    if (this.segmentMetadataTrack_) {
      var t = e.segment, a = t.start, o = t.end;
      if (!(!Ol(a) || !Ol(o))) {
        Ai(a, o, this.segmentMetadataTrack_);
        var u = P.WebKitDataCue || P.VTTCue, l = { custom: t.custom, dateTimeObject: t.dateTimeObject, dateTimeString: t.dateTimeString, bandwidth: e.playlist.attributes.BANDWIDTH, resolution: e.playlist.attributes.RESOLUTION, codecs: e.playlist.attributes.CODECS, byteLength: e.byteLength, uri: e.uri, timeline: e.timeline, playlist: e.playlist.id, start: a, end: o }, c = JSON.stringify(l), m = new u(a, o, c);
        m.value = l, this.segmentMetadataTrack_.addCue(m);
      }
    }
  }, r;
})(q.EventTarget);
function Jt() {
}
var Jc = function(r) {
  return typeof r != "string" ? r : r.replace(/./, function(n) {
    return n.toUpperCase();
  });
}, N0 = ["video", "audio"], Ls = function(r, n) {
  var i = n[r + "Buffer"];
  return i && i.updating || n.queuePending[r];
}, B0 = function(r, n) {
  for (var i = 0; i < n.length; i++) {
    var e = n[i];
    if (e.type === "mediaSource") return null;
    if (e.type === r) return i;
  }
  return null;
}, Co = function s9(r, n) {
  if (n.queue.length !== 0) {
    var i = 0, e = n.queue[i];
    if (e.type === "mediaSource") {
      !n.updating() && n.mediaSource.readyState !== "closed" && (n.queue.shift(), e.action(n), e.doneFn && e.doneFn(), s9("audio", n), s9("video", n));
      return;
    }
    if (r !== "mediaSource" && !(!n.ready() || n.mediaSource.readyState === "closed" || Ls(r, n))) {
      if (e.type !== r) {
        if (i = B0(r, n.queue), i === null) return;
        e = n.queue[i];
      }
      if (n.queue.splice(i, 1), n.queuePending[r] = e, e.action(r, n), !e.doneFn) {
        n.queuePending[r] = null, s9(r, n);
        return;
      }
    }
  }
}, Zc = function(r, n) {
  var i = n[r + "Buffer"], e = Jc(r);
  i && (i.removeEventListener("updateend", n["on" + e + "UpdateEnd_"]), i.removeEventListener("error", n["on" + e + "Error_"]), n.codecs[r] = null, n[r + "Buffer"] = null);
}, qt = function(r, n) {
  return r && n && Array.prototype.indexOf.call(r.sourceBuffers, n) !== -1;
}, _t = { appendBuffer: function(r, n, i) {
  return function(e, t) {
    var a = t[e + "Buffer"];
    if (qt(t.mediaSource, a)) {
      t.logger_("Appending segment " + n.mediaIndex + "'s " + r.length + " bytes to " + e + "Buffer");
      try {
        a.appendBuffer(r);
      } catch (o) {
        t.logger_("Error with code " + o.code + " " + (o.code === Qc ? "(QUOTA_EXCEEDED_ERR) " : "") + ("when appending segment " + n.mediaIndex + " to " + e + "Buffer")), t.queuePending[e] = null, i(o);
      }
    }
  };
}, remove: function(r, n) {
  return function(i, e) {
    var t = e[i + "Buffer"];
    if (qt(e.mediaSource, t)) {
      e.logger_("Removing " + r + " to " + n + " from " + i + "Buffer");
      try {
        t.remove(r, n);
      } catch {
        e.logger_("Remove " + r + " to " + n + " from " + i + "Buffer failed");
      }
    }
  };
}, timestampOffset: function(r) {
  return function(n, i) {
    var e = i[n + "Buffer"];
    qt(i.mediaSource, e) && (i.logger_("Setting " + n + "timestampOffset to " + r), e.timestampOffset = r);
  };
}, callback: function(r) {
  return function(n, i) {
    r();
  };
}, endOfStream: function(r) {
  return function(n) {
    if (n.mediaSource.readyState === "open") {
      n.logger_("Calling mediaSource endOfStream(" + (r || "") + ")");
      try {
        n.mediaSource.endOfStream(r);
      } catch (i) {
        q.log.warn("Failed to call media source endOfStream", i);
      }
    }
  };
}, duration: function(r) {
  return function(n) {
    n.logger_("Setting mediaSource duration to " + r);
    try {
      n.mediaSource.duration = r;
    } catch (i) {
      q.log.warn("Failed to set media source duration", i);
    }
  };
}, abort: function() {
  return function(r, n) {
    if (n.mediaSource.readyState === "open") {
      var i = n[r + "Buffer"];
      if (qt(n.mediaSource, i)) {
        n.logger_("calling abort on " + r + "Buffer");
        try {
          i.abort();
        } catch (e) {
          q.log.warn("Failed to abort on " + r + "Buffer", e);
        }
      }
    }
  };
}, addSourceBuffer: function(r, n) {
  return function(i) {
    var e = Jc(r), t = Pi(n);
    i.logger_("Adding " + r + "Buffer with codec " + n + " to mediaSource");
    var a = i.mediaSource.addSourceBuffer(t);
    a.addEventListener("updateend", i["on" + e + "UpdateEnd_"]), a.addEventListener("error", i["on" + e + "Error_"]), i.codecs[r] = n, i[r + "Buffer"] = a;
  };
}, removeSourceBuffer: function(r) {
  return function(n) {
    var i = n[r + "Buffer"];
    if (Zc(r, n), !!qt(n.mediaSource, i)) {
      n.logger_("Removing " + r + "Buffer with codec " + n.codecs[r] + " from mediaSource");
      try {
        n.mediaSource.removeSourceBuffer(i);
      } catch (e) {
        q.log.warn("Failed to removeSourceBuffer " + r + "Buffer", e);
      }
    }
  };
}, changeType: function(r) {
  return function(n, i) {
    var e = i[n + "Buffer"], t = Pi(r);
    if (qt(i.mediaSource, e) && i.codecs[n] !== r) {
      i.logger_("changing " + n + "Buffer codec from " + i.codecs[n] + " to " + r);
      try {
        e.changeType(t), i.codecs[n] = r;
      } catch (a) {
        q.log.warn("Failed to changeType on " + n + "Buffer", a);
      }
    }
  };
} }, Tt = function(r) {
  var n = r.type, i = r.sourceUpdater, e = r.action, t = r.doneFn, a = r.name;
  i.queue.push({ type: n, action: e, doneFn: t, name: a }), Co(n, i);
}, Ml = function(r, n) {
  return function(i) {
    if (n.queuePending[r]) {
      var e = n.queuePending[r].doneFn;
      n.queuePending[r] = null, e && e(n[r + "Error_"]);
    }
    Co(r, n);
  };
}, ef = (function(s12) {
  oe(r, s12);
  function r(i) {
    var e;
    return e = s12.call(this) || this, e.mediaSource = i, e.sourceopenListener_ = function() {
      return Co("mediaSource", ye(e));
    }, e.mediaSource.addEventListener("sourceopen", e.sourceopenListener_), e.logger_ = Lt("SourceUpdater"), e.audioTimestampOffset_ = 0, e.videoTimestampOffset_ = 0, e.queue = [], e.queuePending = { audio: null, video: null }, e.delayedAudioAppendQueue_ = [], e.videoAppendQueued_ = false, e.codecs = {}, e.onVideoUpdateEnd_ = Ml("video", ye(e)), e.onAudioUpdateEnd_ = Ml("audio", ye(e)), e.onVideoError_ = function(t) {
      e.videoError_ = t;
    }, e.onAudioError_ = function(t) {
      e.audioError_ = t;
    }, e.createdSourceBuffers_ = false, e.initializedEme_ = false, e.triggeredReady_ = false, e;
  }
  var n = r.prototype;
  return n.initializedEme = function() {
    this.initializedEme_ = true, this.triggerReady();
  }, n.hasCreatedSourceBuffers = function() {
    return this.createdSourceBuffers_;
  }, n.hasInitializedAnyEme = function() {
    return this.initializedEme_;
  }, n.ready = function() {
    return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme();
  }, n.createSourceBuffers = function(e) {
    this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(e), this.createdSourceBuffers_ = true, this.trigger("createdsourcebuffers"), this.triggerReady());
  }, n.triggerReady = function() {
    this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = true, this.trigger("ready"));
  }, n.addSourceBuffer = function(e, t) {
    Tt({ type: "mediaSource", sourceUpdater: this, action: _t.addSourceBuffer(e, t), name: "addSourceBuffer" });
  }, n.abort = function(e) {
    Tt({ type: e, sourceUpdater: this, action: _t.abort(e), name: "abort" });
  }, n.removeSourceBuffer = function(e) {
    if (!this.canRemoveSourceBuffer()) {
      q.log.error("removeSourceBuffer is not supported!");
      return;
    }
    Tt({ type: "mediaSource", sourceUpdater: this, action: _t.removeSourceBuffer(e), name: "removeSourceBuffer" });
  }, n.canRemoveSourceBuffer = function() {
    return !q.browser.IE_VERSION && !q.browser.IS_FIREFOX && P.MediaSource && P.MediaSource.prototype && typeof P.MediaSource.prototype.removeSourceBuffer == "function";
  }, r.canChangeType = function() {
    return P.SourceBuffer && P.SourceBuffer.prototype && typeof P.SourceBuffer.prototype.changeType == "function";
  }, n.canChangeType = function() {
    return this.constructor.canChangeType();
  }, n.changeType = function(e, t) {
    if (!this.canChangeType()) {
      q.log.error("changeType is not supported!");
      return;
    }
    Tt({ type: e, sourceUpdater: this, action: _t.changeType(t), name: "changeType" });
  }, n.addOrChangeSourceBuffers = function(e) {
    var t = this;
    if (!e || typeof e != "object" || Object.keys(e).length === 0) throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
    Object.keys(e).forEach(function(a) {
      var o = e[a];
      if (!t.hasCreatedSourceBuffers()) return t.addSourceBuffer(a, o);
      t.canChangeType() && t.changeType(a, o);
    });
  }, n.appendBuffer = function(e, t) {
    var a = this, o = e.segmentInfo, u = e.type, l = e.bytes;
    if (this.processedAppend_ = true, u === "audio" && this.videoBuffer && !this.videoAppendQueued_) {
      this.delayedAudioAppendQueue_.push([e, t]), this.logger_("delayed audio append of " + l.length + " until video append");
      return;
    }
    var c = t;
    if (Tt({ type: u, sourceUpdater: this, action: _t.appendBuffer(l, o || { mediaIndex: -1 }, c), doneFn: t, name: "appendBuffer" }), u === "video") {
      if (this.videoAppendQueued_ = true, !this.delayedAudioAppendQueue_.length) return;
      var m = this.delayedAudioAppendQueue_.slice();
      this.logger_("queuing delayed audio " + m.length + " appendBuffers"), this.delayedAudioAppendQueue_.length = 0, m.forEach(function(g) {
        a.appendBuffer.apply(a, g);
      });
    }
  }, n.audioBuffered = function() {
    return qt(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered : q.createTimeRange();
  }, n.videoBuffered = function() {
    return qt(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered : q.createTimeRange();
  }, n.buffered = function() {
    var e = qt(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null, t = qt(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
    return t && !e ? this.audioBuffered() : e && !t ? this.videoBuffered() : rv(this.audioBuffered(), this.videoBuffered());
  }, n.setDuration = function(e, t) {
    t === void 0 && (t = Jt), Tt({ type: "mediaSource", sourceUpdater: this, action: _t.duration(e), name: "duration", doneFn: t });
  }, n.endOfStream = function(e, t) {
    e === void 0 && (e = null), t === void 0 && (t = Jt), typeof e != "string" && (e = void 0), Tt({ type: "mediaSource", sourceUpdater: this, action: _t.endOfStream(e), name: "endOfStream", doneFn: t });
  }, n.removeAudio = function(e, t, a) {
    if (a === void 0 && (a = Jt), !this.audioBuffered().length || this.audioBuffered().end(0) === 0) {
      a();
      return;
    }
    Tt({ type: "audio", sourceUpdater: this, action: _t.remove(e, t), doneFn: a, name: "remove" });
  }, n.removeVideo = function(e, t, a) {
    if (a === void 0 && (a = Jt), !this.videoBuffered().length || this.videoBuffered().end(0) === 0) {
      a();
      return;
    }
    Tt({ type: "video", sourceUpdater: this, action: _t.remove(e, t), doneFn: a, name: "remove" });
  }, n.updating = function() {
    return !!(Ls("audio", this) || Ls("video", this));
  }, n.audioTimestampOffset = function(e) {
    return typeof e < "u" && this.audioBuffer && this.audioTimestampOffset_ !== e && (Tt({ type: "audio", sourceUpdater: this, action: _t.timestampOffset(e), name: "timestampOffset" }), this.audioTimestampOffset_ = e), this.audioTimestampOffset_;
  }, n.videoTimestampOffset = function(e) {
    return typeof e < "u" && this.videoBuffer && this.videoTimestampOffset !== e && (Tt({ type: "video", sourceUpdater: this, action: _t.timestampOffset(e), name: "timestampOffset" }), this.videoTimestampOffset_ = e), this.videoTimestampOffset_;
  }, n.audioQueueCallback = function(e) {
    this.audioBuffer && Tt({ type: "audio", sourceUpdater: this, action: _t.callback(e), name: "callback" });
  }, n.videoQueueCallback = function(e) {
    this.videoBuffer && Tt({ type: "video", sourceUpdater: this, action: _t.callback(e), name: "callback" });
  }, n.dispose = function() {
    var e = this;
    this.trigger("dispose"), N0.forEach(function(t) {
      e.abort(t), e.canRemoveSourceBuffer() ? e.removeSourceBuffer(t) : e[t + "QueueCallback"](function() {
        return Zc(t, e);
      });
    }), this.videoAppendQueued_ = false, this.delayedAudioAppendQueue_.length = 0, this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_), this.off();
  }, r;
})(q.EventTarget), Nl = function(r) {
  return decodeURIComponent(escape(String.fromCharCode.apply(null, r)));
}, Bl = new Uint8Array(`

`.split("").map(function(s12) {
  return s12.charCodeAt(0);
})), U0 = (function(s12) {
  oe(r, s12);
  function r() {
    return s12.call(this, "Trying to parse received VTT cues, but there is no WebVTT. Make sure vtt.js is loaded.") || this;
  }
  return r;
})(ps(Error)), q0 = (function(s12) {
  oe(r, s12);
  function r(i, e) {
    var t;
    return e === void 0 && (e = {}), t = s12.call(this, i, e) || this, t.mediaSource_ = null, t.subtitlesTrack_ = null, t.loaderType_ = "subtitle", t.featuresNativeTextTracks_ = i.featuresNativeTextTracks, t.loadVttJs = i.loadVttJs, t.shouldSaveSegmentTimingInfo_ = false, t;
  }
  var n = r.prototype;
  return n.createTransmuxer_ = function() {
    return null;
  }, n.buffered_ = function() {
    if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues || !this.subtitlesTrack_.cues.length) return q.createTimeRanges();
    var e = this.subtitlesTrack_.cues, t = e[0].startTime, a = e[e.length - 1].startTime;
    return q.createTimeRanges([[t, a]]);
  }, n.initSegmentForMap = function(e, t) {
    if (t === void 0 && (t = false), !e) return null;
    var a = zn(e), o = this.initSegments_[a];
    if (t && !o && e.bytes) {
      var u = Bl.byteLength + e.bytes.byteLength, l = new Uint8Array(u);
      l.set(e.bytes), l.set(Bl, e.bytes.byteLength), this.initSegments_[a] = o = { resolvedUri: e.resolvedUri, byterange: e.byterange, bytes: l };
    }
    return o || e;
  }, n.couldBeginLoading_ = function() {
    return this.playlist_ && this.subtitlesTrack_ && !this.paused();
  }, n.init_ = function() {
    return this.state = "READY", this.resetEverything(), this.monitorBuffer_();
  }, n.track = function(e) {
    return typeof e > "u" ? this.subtitlesTrack_ : (this.subtitlesTrack_ = e, this.state === "INIT" && this.couldBeginLoading_() && this.init_(), this.subtitlesTrack_);
  }, n.remove = function(e, t) {
    Ai(e, t, this.subtitlesTrack_);
  }, n.fillBuffer_ = function() {
    var e = this, t = this.chooseNextRequest_();
    if (t) {
      if (this.syncController_.timestampOffsetForTimeline(t.timeline) === null) {
        var a = function() {
          e.state = "READY", e.paused() || e.monitorBuffer_();
        };
        this.syncController_.one("timestampoffset", a), this.state = "WAITING_ON_TIMELINE";
        return;
      }
      this.loadSegment_(t);
    }
  }, n.timestampOffsetForSegment_ = function() {
    return null;
  }, n.chooseNextRequest_ = function() {
    return this.skipEmptySegments_(s12.prototype.chooseNextRequest_.call(this));
  }, n.skipEmptySegments_ = function(e) {
    for (; e && e.segment.empty; ) {
      if (e.mediaIndex + 1 >= e.playlist.segments.length) {
        e = null;
        break;
      }
      e = this.generateSegmentInfo_({ playlist: e.playlist, mediaIndex: e.mediaIndex + 1, startOfSegment: e.startOfSegment + e.duration, isSyncRequest: e.isSyncRequest });
    }
    return e;
  }, n.stopForError = function(e) {
    this.error(e), this.state = "READY", this.pause(), this.trigger("error");
  }, n.segmentRequestFinished_ = function(e, t, a) {
    var o = this;
    if (!this.subtitlesTrack_) {
      this.state = "READY";
      return;
    }
    if (this.saveTransferStats_(t.stats), !this.pendingSegment_) {
      this.state = "READY", this.mediaRequestsAborted += 1;
      return;
    }
    if (e) {
      e.code === Ht.TIMEOUT && this.handleTimeout_(), e.code === Ht.ABORTED ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1, this.stopForError(e);
      return;
    }
    var u = this.pendingSegment_;
    this.saveBandwidthRelatedStats_(u.duration, t.stats), t.key && this.segmentKey(t.key, true), this.state = "APPENDING", this.trigger("appending");
    var l = u.segment;
    if (l.map && (l.map.bytes = t.map.bytes), u.bytes = t.bytes, typeof P.WebVTT != "function" && typeof this.loadVttJs == "function") {
      this.state = "WAITING_ON_VTTJS", this.loadVttJs().then(function() {
        return o.segmentRequestFinished_(e, t, a);
      }, function() {
        return o.stopForError({ message: "Error loading vtt.js" });
      });
      return;
    }
    l.requested = true;
    try {
      this.parseVTTCues_(u);
    } catch (c) {
      this.stopForError({ message: c.message });
      return;
    }
    if (this.updateTimeMapping_(u, this.syncController_.timelines[u.timeline], this.playlist_), u.cues.length ? u.timingInfo = { start: u.cues[0].startTime, end: u.cues[u.cues.length - 1].endTime } : u.timingInfo = { start: u.startOfSegment, end: u.startOfSegment + u.duration }, u.isSyncRequest) {
      this.trigger("syncinfoupdate"), this.pendingSegment_ = null, this.state = "READY";
      return;
    }
    u.byteLength = u.bytes.byteLength, this.mediaSecondsLoaded += l.duration, u.cues.forEach(function(c) {
      o.subtitlesTrack_.addCue(o.featuresNativeTextTracks_ ? new P.VTTCue(c.startTime, c.endTime, c.text) : c);
    }), C0(this.subtitlesTrack_), this.handleAppendsDone_();
  }, n.handleData_ = function() {
  }, n.updateTimingInfoEnd_ = function() {
  }, n.parseVTTCues_ = function(e) {
    var t, a = false;
    if (typeof P.WebVTT != "function") throw new U0();
    typeof P.TextDecoder == "function" ? t = new P.TextDecoder("utf8") : (t = P.WebVTT.StringDecoder(), a = true);
    var o = new P.WebVTT.Parser(P, P.vttjs, t);
    if (e.cues = [], e.timestampmap = { MPEGTS: 0, LOCAL: 0 }, o.oncue = e.cues.push.bind(e.cues), o.ontimestampmap = function(c) {
      e.timestampmap = c;
    }, o.onparsingerror = function(c) {
      q.log.warn("Error encountered when parsing cues: " + c.message);
    }, e.segment.map) {
      var u = e.segment.map.bytes;
      a && (u = Nl(u)), o.parse(u);
    }
    var l = e.bytes;
    a && (l = Nl(l)), o.parse(l), o.flush();
  }, n.updateTimeMapping_ = function(e, t, a) {
    var o = e.segment;
    if (t) {
      if (!e.cues.length) {
        o.empty = true;
        return;
      }
      var u = e.timestampmap, l = u.MPEGTS / Fn.ONE_SECOND_IN_TS - u.LOCAL + t.mapping;
      if (e.cues.forEach(function(g) {
        g.startTime += l, g.endTime += l;
      }), !a.syncInfo) {
        var c = e.cues[0].startTime, m = e.cues[e.cues.length - 1].startTime;
        a.syncInfo = { mediaSequence: a.mediaSequence + e.mediaIndex, time: Math.min(c, m - o.duration) };
      }
    }
  }, r;
})(Os), V0 = function(r, n) {
  for (var i = r.cues, e = 0; e < i.length; e++) {
    var t = i[e];
    if (n >= t.adStartTime && n <= t.adEndTime) return t;
  }
  return null;
}, j0 = function(r, n, i) {
  if (i === void 0 && (i = 0), !!r.segments) for (var e = i, t, a = 0; a < r.segments.length; a++) {
    var o = r.segments[a];
    if (t || (t = V0(n, e + o.duration / 2)), t) {
      if ("cueIn" in o) {
        t.endTime = e, t.adEndTime = e, e += o.duration, t = null;
        continue;
      }
      if (e < t.endTime) {
        e += o.duration;
        continue;
      }
      t.endTime += o.duration;
    } else if ("cueOut" in o && (t = new P.VTTCue(e, e + o.duration, o.cueOut), t.adStartTime = e, t.adEndTime = e + parseFloat(o.cueOut), n.addCue(t)), "cueOutCont" in o) {
      var u = o.cueOutCont.split("/").map(parseFloat), l = u[0], c = u[1];
      t = new P.VTTCue(e, e + o.duration, ""), t.adStartTime = e - l, t.adEndTime = t.adStartTime + c, n.addCue(t);
    }
    e += o.duration;
  }
}, H0 = 86400, Ul = [{ name: "VOD", run: function(r, n, i, e, t) {
  if (i !== 1 / 0) {
    var a = { time: 0, segmentIndex: 0, partIndex: null };
    return a;
  }
  return null;
} }, { name: "ProgramDateTime", run: function(r, n, i, e, t) {
  if (!Object.keys(r.timelineToDatetimeMappings).length) return null;
  var a = null, o = null, u = Es(n);
  t = t || 0;
  for (var l = 0; l < u.length; l++) {
    var c = n.endList || t === 0 ? l : u.length - (l + 1), m = u[c], g = m.segment, _ = r.timelineToDatetimeMappings[g.timeline];
    if (!(!_ || !g.dateTimeObject)) {
      var C = g.dateTimeObject.getTime() / 1e3, w = C + _;
      if (g.parts && typeof m.partIndex == "number") for (var S = 0; S < m.partIndex; S++) w += g.parts[S].duration;
      var F = Math.abs(t - w);
      if (o !== null && (F === 0 || o < F)) break;
      o = F, a = { time: w, segmentIndex: m.segmentIndex, partIndex: m.partIndex };
    }
  }
  return a;
} }, { name: "Segment", run: function(r, n, i, e, t) {
  var a = null, o = null;
  t = t || 0;
  for (var u = Es(n), l = 0; l < u.length; l++) {
    var c = n.endList || t === 0 ? l : u.length - (l + 1), m = u[c], g = m.segment, _ = m.part && m.part.start || g && g.start;
    if (g.timeline === e && typeof _ < "u") {
      var C = Math.abs(t - _);
      if (o !== null && o < C) break;
      (!a || o === null || o >= C) && (o = C, a = { time: _, segmentIndex: m.segmentIndex, partIndex: m.partIndex });
    }
  }
  return a;
} }, { name: "Discontinuity", run: function(r, n, i, e, t) {
  var a = null;
  if (t = t || 0, n.discontinuityStarts && n.discontinuityStarts.length) for (var o = null, u = 0; u < n.discontinuityStarts.length; u++) {
    var l = n.discontinuityStarts[u], c = n.discontinuitySequence + u + 1, m = r.discontinuities[c];
    if (m) {
      var g = Math.abs(t - m.time);
      if (o !== null && o < g) break;
      (!a || o === null || o >= g) && (o = g, a = { time: m.time, segmentIndex: l, partIndex: null });
    }
  }
  return a;
} }, { name: "Playlist", run: function(r, n, i, e, t) {
  if (n.syncInfo) {
    var a = { time: n.syncInfo.time, segmentIndex: n.syncInfo.mediaSequence - n.mediaSequence, partIndex: null };
    return a;
  }
  return null;
} }], W0 = (function(s12) {
  oe(r, s12);
  function r(i) {
    var e;
    return e = s12.call(this) || this, e.timelines = [], e.discontinuities = [], e.timelineToDatetimeMappings = {}, e.logger_ = Lt("SyncController"), e;
  }
  var n = r.prototype;
  return n.getSyncPoint = function(e, t, a, o) {
    var u = this.runStrategies_(e, t, a, o);
    return u.length ? this.selectSyncPoint_(u, { key: "time", value: o }) : null;
  }, n.getExpiredTime = function(e, t) {
    if (!e || !e.segments) return null;
    var a = this.runStrategies_(e, t, e.discontinuitySequence, 0);
    if (!a.length) return null;
    var o = this.selectSyncPoint_(a, { key: "segmentIndex", value: 0 });
    return o.segmentIndex > 0 && (o.time *= -1), Math.abs(o.time + wi({ defaultDuration: e.targetDuration, durationList: e.segments, startIndex: o.segmentIndex, endIndex: 0 }));
  }, n.runStrategies_ = function(e, t, a, o) {
    for (var u = [], l = 0; l < Ul.length; l++) {
      var c = Ul[l], m = c.run(this, e, t, a, o);
      m && (m.strategy = c.name, u.push({ strategy: c.name, syncPoint: m }));
    }
    return u;
  }, n.selectSyncPoint_ = function(e, t) {
    for (var a = e[0].syncPoint, o = Math.abs(e[0].syncPoint[t.key] - t.value), u = e[0].strategy, l = 1; l < e.length; l++) {
      var c = Math.abs(e[l].syncPoint[t.key] - t.value);
      c < o && (o = c, a = e[l].syncPoint, u = e[l].strategy);
    }
    return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy" + (" [" + u + "]: [time:" + a.time + ",") + (" segmentIndex:" + a.segmentIndex) + (typeof a.partIndex == "number" ? ",partIndex:" + a.partIndex : "") + "]"), a;
  }, n.saveExpiredSegmentInfo = function(e, t) {
    var a = t.mediaSequence - e.mediaSequence;
    if (a > H0) {
      q.log.warn("Not saving expired segment info. Media sequence gap " + a + " is too large.");
      return;
    }
    for (var o = a - 1; o >= 0; o--) {
      var u = e.segments[o];
      if (u && typeof u.start < "u") {
        t.syncInfo = { mediaSequence: e.mediaSequence + o, time: u.start }, this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + "," + (" mediaSequence: " + t.syncInfo.mediaSequence + "]")), this.trigger("syncinfoupdate");
        break;
      }
    }
  }, n.setDateTimeMappingForStart = function(e) {
    if (this.timelineToDatetimeMappings = {}, e.segments && e.segments.length && e.segments[0].dateTimeObject) {
      var t = e.segments[0], a = t.dateTimeObject.getTime() / 1e3;
      this.timelineToDatetimeMappings[t.timeline] = -a;
    }
  }, n.saveSegmentTimingInfo = function(e) {
    var t = e.segmentInfo, a = e.shouldSaveTimelineMapping, o = this.calculateSegmentTimeMapping_(t, t.timingInfo, a), u = t.segment;
    o && (this.saveDiscontinuitySyncInfo_(t), t.playlist.syncInfo || (t.playlist.syncInfo = { mediaSequence: t.playlist.mediaSequence + t.mediaIndex, time: u.start }));
    var l = u.dateTimeObject;
    u.discontinuity && a && l && (this.timelineToDatetimeMappings[u.timeline] = -(l.getTime() / 1e3));
  }, n.timestampOffsetForTimeline = function(e) {
    return typeof this.timelines[e] > "u" ? null : this.timelines[e].time;
  }, n.mappingForTimeline = function(e) {
    return typeof this.timelines[e] > "u" ? null : this.timelines[e].mapping;
  }, n.calculateSegmentTimeMapping_ = function(e, t, a) {
    var o = e.segment, u = e.part, l = this.timelines[e.timeline], c, m;
    if (typeof e.timestampOffset == "number") l = { time: e.startOfSegment, mapping: e.startOfSegment - t.start }, a && (this.timelines[e.timeline] = l, this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + e.timeline + ": " + ("[time: " + l.time + "] [mapping: " + l.mapping + "]"))), c = e.startOfSegment, m = t.end + l.mapping;
    else if (l) c = t.start + l.mapping, m = t.end + l.mapping;
    else return false;
    return u && (u.start = c, u.end = m), (!o.start || c < o.start) && (o.start = c), o.end = m, true;
  }, n.saveDiscontinuitySyncInfo_ = function(e) {
    var t = e.playlist, a = e.segment;
    if (a.discontinuity) this.discontinuities[a.timeline] = { time: a.start, accuracy: 0 };
    else if (t.discontinuityStarts && t.discontinuityStarts.length) for (var o = 0; o < t.discontinuityStarts.length; o++) {
      var u = t.discontinuityStarts[o], l = t.discontinuitySequence + o + 1, c = u - e.mediaIndex, m = Math.abs(c);
      if (!this.discontinuities[l] || this.discontinuities[l].accuracy > m) {
        var g = void 0;
        c < 0 ? g = a.start - wi({ defaultDuration: t.targetDuration, durationList: t.segments, startIndex: e.mediaIndex, endIndex: u }) : g = a.end + wi({ defaultDuration: t.targetDuration, durationList: t.segments, startIndex: e.mediaIndex + 1, endIndex: u }), this.discontinuities[l] = { time: g, accuracy: m };
      }
    }
  }, n.dispose = function() {
    this.trigger("dispose"), this.off();
  }, r;
})(q.EventTarget), G0 = (function(s12) {
  oe(r, s12);
  function r() {
    var i;
    return i = s12.call(this) || this, i.pendingTimelineChanges_ = {}, i.lastTimelineChanges_ = {}, i;
  }
  var n = r.prototype;
  return n.clearPendingTimelineChange = function(e) {
    this.pendingTimelineChanges_[e] = null, this.trigger("pendingtimelinechange");
  }, n.pendingTimelineChange = function(e) {
    var t = e.type, a = e.from, o = e.to;
    return typeof a == "number" && typeof o == "number" && (this.pendingTimelineChanges_[t] = { type: t, from: a, to: o }, this.trigger("pendingtimelinechange")), this.pendingTimelineChanges_[t];
  }, n.lastTimelineChange = function(e) {
    var t = e.type, a = e.from, o = e.to;
    return typeof a == "number" && typeof o == "number" && (this.lastTimelineChanges_[t] = { type: t, from: a, to: o }, delete this.pendingTimelineChanges_[t], this.trigger("timelinechange")), this.lastTimelineChanges_[t];
  }, n.dispose = function() {
    this.trigger("dispose"), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}, this.off();
  }, r;
})(q.EventTarget), z0 = qc(Vc(function() {
  var s12 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function r(W, H, $) {
    return $ = { path: H, exports: {}, require: function(V, T) {
      return n(V, T ?? $.path);
    } }, W($, $.exports), $.exports;
  }
  function n() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var i = r(function(W) {
    function H(R, V) {
      for (var T = 0; T < V.length; T++) {
        var E = V[T];
        E.enumerable = E.enumerable || false, E.configurable = true, "value" in E && (E.writable = true), Object.defineProperty(R, E.key, E);
      }
    }
    function $(R, V, T) {
      return V && H(R.prototype, V), T && H(R, T), R;
    }
    W.exports = $, W.exports.default = W.exports, W.exports.__esModule = true;
  }), e = r(function(W) {
    function H($, R) {
      return W.exports = H = Object.setPrototypeOf || function(T, E) {
        return T.__proto__ = E, T;
      }, W.exports.default = W.exports, W.exports.__esModule = true, H($, R);
    }
    W.exports = H, W.exports.default = W.exports, W.exports.__esModule = true;
  }), t = r(function(W) {
    function H($, R) {
      $.prototype = Object.create(R.prototype), $.prototype.constructor = $, e($, R);
    }
    W.exports = H, W.exports.default = W.exports, W.exports.__esModule = true;
  }), a = (function() {
    function W() {
      this.listeners = {};
    }
    var H = W.prototype;
    return H.on = function(R, V) {
      this.listeners[R] || (this.listeners[R] = []), this.listeners[R].push(V);
    }, H.off = function(R, V) {
      if (!this.listeners[R]) return false;
      var T = this.listeners[R].indexOf(V);
      return this.listeners[R] = this.listeners[R].slice(0), this.listeners[R].splice(T, 1), T > -1;
    }, H.trigger = function(R) {
      var V = this.listeners[R];
      if (V) if (arguments.length === 2) for (var T = V.length, E = 0; E < T; ++E) V[E].call(this, arguments[1]);
      else for (var M = Array.prototype.slice.call(arguments, 1), B = V.length, j = 0; j < B; ++j) V[j].apply(this, M);
    }, H.dispose = function() {
      this.listeners = {};
    }, H.pipe = function(R) {
      this.on("data", function(V) {
        R.push(V);
      });
    }, W;
  })();
  /*! @name pkcs7 @version 1.0.4 @license Apache-2.0 */
  function o(W) {
    return W.subarray(0, W.byteLength - W[W.byteLength - 1]);
  }
  /*! @name aes-decrypter @version 3.1.3 @license Apache-2.0 */
  var u = function() {
    var H = [[[], [], [], [], []], [[], [], [], [], []]], $ = H[0], R = H[1], V = $[4], T = R[4], E, M, B, j = [], K = [], Y, re, J, ee, Z, Q;
    for (E = 0; E < 256; E++) K[(j[E] = E << 1 ^ (E >> 7) * 283) ^ E] = E;
    for (M = B = 0; !V[M]; M ^= Y || 1, B = K[B] || 1) for (ee = B ^ B << 1 ^ B << 2 ^ B << 3 ^ B << 4, ee = ee >> 8 ^ ee & 255 ^ 99, V[M] = ee, T[ee] = M, J = j[re = j[Y = j[M]]], Q = J * 16843009 ^ re * 65537 ^ Y * 257 ^ M * 16843008, Z = j[ee] * 257 ^ ee * 16843008, E = 0; E < 4; E++) $[E][M] = Z = Z << 24 ^ Z >>> 8, R[E][ee] = Q = Q << 24 ^ Q >>> 8;
    for (E = 0; E < 5; E++) $[E] = $[E].slice(0), R[E] = R[E].slice(0);
    return H;
  }, l = null, c = (function() {
    function W($) {
      l || (l = u()), this._tables = [[l[0][0].slice(), l[0][1].slice(), l[0][2].slice(), l[0][3].slice(), l[0][4].slice()], [l[1][0].slice(), l[1][1].slice(), l[1][2].slice(), l[1][3].slice(), l[1][4].slice()]];
      var R, V, T, E = this._tables[0][4], M = this._tables[1], B = $.length, j = 1;
      if (B !== 4 && B !== 6 && B !== 8) throw new Error("Invalid aes key size");
      var K = $.slice(0), Y = [];
      for (this._key = [K, Y], R = B; R < 4 * B + 28; R++) T = K[R - 1], (R % B === 0 || B === 8 && R % B === 4) && (T = E[T >>> 24] << 24 ^ E[T >> 16 & 255] << 16 ^ E[T >> 8 & 255] << 8 ^ E[T & 255], R % B === 0 && (T = T << 8 ^ T >>> 24 ^ j << 24, j = j << 1 ^ (j >> 7) * 283)), K[R] = K[R - B] ^ T;
      for (V = 0; R; V++, R--) T = K[V & 3 ? R : R - 4], R <= 4 || V < 4 ? Y[V] = T : Y[V] = M[0][E[T >>> 24]] ^ M[1][E[T >> 16 & 255]] ^ M[2][E[T >> 8 & 255]] ^ M[3][E[T & 255]];
    }
    var H = W.prototype;
    return H.decrypt = function(R, V, T, E, M, B) {
      var j = this._key[1], K = R ^ j[0], Y = E ^ j[1], re = T ^ j[2], J = V ^ j[3], ee, Z, Q, ie = j.length / 4 - 2, he, me = 4, ge = this._tables[1], ce = ge[0], Pe = ge[1], qe = ge[2], Ie = ge[3], Ve = ge[4];
      for (he = 0; he < ie; he++) ee = ce[K >>> 24] ^ Pe[Y >> 16 & 255] ^ qe[re >> 8 & 255] ^ Ie[J & 255] ^ j[me], Z = ce[Y >>> 24] ^ Pe[re >> 16 & 255] ^ qe[J >> 8 & 255] ^ Ie[K & 255] ^ j[me + 1], Q = ce[re >>> 24] ^ Pe[J >> 16 & 255] ^ qe[K >> 8 & 255] ^ Ie[Y & 255] ^ j[me + 2], J = ce[J >>> 24] ^ Pe[K >> 16 & 255] ^ qe[Y >> 8 & 255] ^ Ie[re & 255] ^ j[me + 3], me += 4, K = ee, Y = Z, re = Q;
      for (he = 0; he < 4; he++) M[(3 & -he) + B] = Ve[K >>> 24] << 24 ^ Ve[Y >> 16 & 255] << 16 ^ Ve[re >> 8 & 255] << 8 ^ Ve[J & 255] ^ j[me++], ee = K, K = Y, Y = re, re = J, J = ee;
    }, W;
  })(), m = (function(W) {
    t(H, W);
    function H() {
      var R;
      return R = W.call(this, a) || this, R.jobs = [], R.delay = 1, R.timeout_ = null, R;
    }
    var $ = H.prototype;
    return $.processJob_ = function() {
      this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null;
    }, $.push = function(V) {
      this.jobs.push(V), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay));
    }, H;
  })(a), g = function(H) {
    return H << 24 | (H & 65280) << 8 | (H & 16711680) >> 8 | H >>> 24;
  }, _ = function(H, $, R) {
    var V = new Int32Array(H.buffer, H.byteOffset, H.byteLength >> 2), T = new c(Array.prototype.slice.call($)), E = new Uint8Array(H.byteLength), M = new Int32Array(E.buffer), B, j, K, Y, re, J, ee, Z, Q;
    for (B = R[0], j = R[1], K = R[2], Y = R[3], Q = 0; Q < V.length; Q += 4) re = g(V[Q]), J = g(V[Q + 1]), ee = g(V[Q + 2]), Z = g(V[Q + 3]), T.decrypt(re, J, ee, Z, M, Q), M[Q] = g(M[Q] ^ B), M[Q + 1] = g(M[Q + 1] ^ j), M[Q + 2] = g(M[Q + 2] ^ K), M[Q + 3] = g(M[Q + 3] ^ Y), B = re, j = J, K = ee, Y = Z;
    return E;
  }, C = (function() {
    function W($, R, V, T) {
      var E = W.STEP, M = new Int32Array($.buffer), B = new Uint8Array($.byteLength), j = 0;
      for (this.asyncStream_ = new m(), this.asyncStream_.push(this.decryptChunk_(M.subarray(j, j + E), R, V, B)), j = E; j < M.length; j += E) V = new Uint32Array([g(M[j - 4]), g(M[j - 3]), g(M[j - 2]), g(M[j - 1])]), this.asyncStream_.push(this.decryptChunk_(M.subarray(j, j + E), R, V, B));
      this.asyncStream_.push(function() {
        T(null, o(B));
      });
    }
    var H = W.prototype;
    return H.decryptChunk_ = function(R, V, T, E) {
      return function() {
        var M = _(R, V, T);
        E.set(M, R.byteOffset);
      };
    }, i(W, null, [{ key: "STEP", get: function() {
      return 32e3;
    } }]), W;
  })(), w;
  typeof window < "u" ? w = window : typeof s12 < "u" ? w = s12 : typeof self < "u" ? w = self : w = {};
  var S = w, F = function(H) {
    return ArrayBuffer.isView === "function" ? ArrayBuffer.isView(H) : H && H.buffer instanceof ArrayBuffer;
  }, N = S.BigInt || Number;
  N("0x1"), N("0x100"), N("0x10000"), N("0x1000000"), N("0x100000000"), N("0x10000000000"), N("0x1000000000000"), N("0x100000000000000"), N("0x10000000000000000");
  var z = function(H) {
    var $ = {};
    return Object.keys(H).forEach(function(R) {
      var V = H[R];
      F(V) ? $[R] = { bytes: V.buffer, byteOffset: V.byteOffset, byteLength: V.byteLength } : $[R] = V;
    }), $;
  };
  self.onmessage = function(W) {
    var H = W.data, $ = new Uint8Array(H.encrypted.bytes, H.encrypted.byteOffset, H.encrypted.byteLength), R = new Uint32Array(H.key.bytes, H.key.byteOffset, H.key.byteLength / 4), V = new Uint32Array(H.iv.bytes, H.iv.byteOffset, H.iv.byteLength / 4);
    new C($, R, V, function(T, E) {
      self.postMessage(z({ source: H.source, decrypted: E }), [E.buffer]);
    });
  };
})), K0 = Uc(z0), X0 = function(r) {
  var n = r.default ? "main" : "alternative";
  return r.characteristics && r.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (n = "main-desc"), n;
}, Yn = function(r, n) {
  r.abort(), r.pause(), n && n.activePlaylistLoader && (n.activePlaylistLoader.pause(), n.activePlaylistLoader = null);
}, Fs = function(r, n) {
  n.activePlaylistLoader = r, r.load();
}, $0 = function(r, n) {
  return function() {
    var i = n.segmentLoaders, e = i[r], t = i.main, a = n.mediaTypes[r], o = a.activeTrack(), u = a.getActiveGroup(), l = a.activePlaylistLoader, c = a.lastGroup_;
    if (!(u && c && u.id === c.id) && (a.lastGroup_ = u, a.lastTrack_ = o, Yn(e, a), !(!u || u.isMasterPlaylist))) {
      if (!u.playlistLoader) {
        l && t.resetEverything();
        return;
      }
      e.resyncLoader(), Fs(u.playlistLoader, a);
    }
  };
}, Y0 = function(r, n) {
  return function() {
    var i = n.segmentLoaders[r], e = n.mediaTypes[r];
    e.lastGroup_ = null, i.abort(), i.pause();
  };
}, Q0 = function(r, n) {
  return function() {
    var i = n.masterPlaylistLoader, e = n.segmentLoaders, t = e[r], a = e.main, o = n.mediaTypes[r], u = o.activeTrack(), l = o.getActiveGroup(), c = o.activePlaylistLoader, m = o.lastTrack_;
    if (!(m && u && m.id === u.id) && (o.lastGroup_ = l, o.lastTrack_ = u, Yn(t, o), !!l)) {
      if (l.isMasterPlaylist) {
        if (!u || !m || u.id === m.id) return;
        var g = n.vhs.masterPlaylistController_, _ = g.selectPlaylist();
        if (g.media() === _) return;
        o.logger_("track change. Switching master audio from " + m.id + " to " + u.id), i.pause(), a.resetEverything(), g.fastQualityChange_(_);
        return;
      }
      if (r === "AUDIO") {
        if (!l.playlistLoader) {
          a.setAudio(true), a.resetEverything();
          return;
        }
        t.setAudio(true), a.setAudio(false);
      }
      if (c === l.playlistLoader) {
        Fs(l.playlistLoader, o);
        return;
      }
      t.track && t.track(u), t.resetEverything(), Fs(l.playlistLoader, o);
    }
  };
}, Qn = { AUDIO: function(r, n) {
  return function() {
    var i = n.segmentLoaders[r], e = n.mediaTypes[r], t = n.blacklistCurrentPlaylist;
    Yn(i, e);
    var a = e.activeTrack(), o = e.activeGroup(), u = (o.filter(function(m) {
      return m.default;
    })[0] || o[0]).id, l = e.tracks[u];
    if (a === l) {
      t({ message: "Problem encountered loading the default audio track." });
      return;
    }
    q.log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
    for (var c in e.tracks) e.tracks[c].enabled = e.tracks[c] === l;
    e.onTrackChanged();
  };
}, SUBTITLES: function(r, n) {
  return function() {
    var i = n.segmentLoaders[r], e = n.mediaTypes[r];
    q.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), Yn(i, e);
    var t = e.activeTrack();
    t && (t.mode = "disabled"), e.onTrackChanged();
  };
} }, ql = { AUDIO: function(r, n, i) {
  if (n) {
    var e = i.tech, t = i.requestOptions, a = i.segmentLoaders[r];
    n.on("loadedmetadata", function() {
      var o = n.media();
      a.playlist(o, t), (!e.paused() || o.endList && e.preload() !== "none") && a.load();
    }), n.on("loadedplaylist", function() {
      a.playlist(n.media(), t), e.paused() || a.load();
    }), n.on("error", Qn[r](r, i));
  }
}, SUBTITLES: function(r, n, i) {
  var e = i.tech, t = i.requestOptions, a = i.segmentLoaders[r], o = i.mediaTypes[r];
  n.on("loadedmetadata", function() {
    var u = n.media();
    a.playlist(u, t), a.track(o.activeTrack()), (!e.paused() || u.endList && e.preload() !== "none") && a.load();
  }), n.on("loadedplaylist", function() {
    a.playlist(n.media(), t), e.paused() || a.load();
  }), n.on("error", Qn[r](r, i));
} }, J0 = { AUDIO: function(r, n) {
  var i = n.vhs, e = n.sourceType, t = n.segmentLoaders[r], a = n.requestOptions, o = n.master.mediaGroups, u = n.mediaTypes[r], l = u.groups, c = u.tracks, m = u.logger_, g = n.masterPlaylistLoader, _ = Wi(g.master);
  (!o[r] || Object.keys(o[r]).length === 0) && (o[r] = { main: { default: { default: true } } }, _ && (o[r].main.default.playlists = g.master.playlists));
  for (var C in o[r]) {
    l[C] || (l[C] = []);
    for (var w in o[r][C]) {
      var S = o[r][C][w], F = void 0;
      if (_ ? (m("AUDIO group '" + C + "' label '" + w + "' is a master playlist"), S.isMasterPlaylist = true, F = null) : e === "vhs-json" && S.playlists ? F = new Hr(S.playlists[0], i, a) : S.resolvedUri ? F = new Hr(S.resolvedUri, i, a) : S.playlists && e === "dash" ? F = new Ps(S.playlists[0], i, a, g) : F = null, S = q.mergeOptions({ id: w, playlistLoader: F }, S), ql[r](r, S.playlistLoader, n), l[C].push(S), typeof c[w] > "u") {
        var N = new q.AudioTrack({ id: w, kind: X0(S), enabled: false, language: S.language, default: S.default, label: w });
        c[w] = N;
      }
    }
  }
  t.on("error", Qn[r](r, n));
}, SUBTITLES: function(r, n) {
  var i = n.tech, e = n.vhs, t = n.sourceType, a = n.segmentLoaders[r], o = n.requestOptions, u = n.master.mediaGroups, l = n.mediaTypes[r], c = l.groups, m = l.tracks, g = n.masterPlaylistLoader;
  for (var _ in u[r]) {
    c[_] || (c[_] = []);
    for (var C in u[r][_]) if (!u[r][_][C].forced) {
      var w = u[r][_][C], S = void 0;
      if (t === "hls") S = new Hr(w.resolvedUri, e, o);
      else if (t === "dash") {
        var F = w.playlists.filter(function(z) {
          return z.excludeUntil !== 1 / 0;
        });
        if (!F.length) return;
        S = new Ps(w.playlists[0], e, o, g);
      } else t === "vhs-json" && (S = new Hr(w.playlists ? w.playlists[0] : w.resolvedUri, e, o));
      if (w = q.mergeOptions({ id: C, playlistLoader: S }, w), ql[r](r, w.playlistLoader, n), c[_].push(w), typeof m[C] > "u") {
        var N = i.addRemoteTextTrack({ id: C, kind: "subtitles", default: w.default && w.autoselect, language: w.language, label: C }, false).track;
        m[C] = N;
      }
    }
  }
  a.on("error", Qn[r](r, n));
}, "CLOSED-CAPTIONS": function(r, n) {
  var i = n.tech, e = n.master.mediaGroups, t = n.mediaTypes[r], a = t.groups, o = t.tracks;
  for (var u in e[r]) {
    a[u] || (a[u] = []);
    for (var l in e[r][u]) {
      var c = e[r][u][l];
      if (/^(?:CC|SERVICE)/.test(c.instreamId)) {
        var m = i.options_.vhs && i.options_.vhs.captionServices || {}, g = { label: l, language: c.language, instreamId: c.instreamId, default: c.default && c.autoselect };
        if (m[g.instreamId] && (g = q.mergeOptions(g, m[g.instreamId])), g.default === void 0 && delete g.default, a[u].push(q.mergeOptions({ id: l }, c)), typeof o[l] > "u") {
          var _ = i.addRemoteTextTrack({ id: g.instreamId, kind: "captions", default: g.default, language: g.language, label: g.label }, false).track;
          o[l] = _;
        }
      }
    }
  }
} }, Z0 = function s10(r, n) {
  for (var i = 0; i < r.length; i++) if (bo(n, r[i]) || r[i].playlists && s10(r[i].playlists, n)) return true;
  return false;
}, ey = function(r, n) {
  return function(i) {
    var e = n.masterPlaylistLoader, t = n.mediaTypes[r].groups, a = e.media();
    if (!a) return null;
    var o = null;
    a.attributes[r] && (o = t[a.attributes[r]]);
    var u = Object.keys(t);
    if (!o) if (r === "AUDIO" && u.length > 1 && Wi(n.master)) for (var l = 0; l < u.length; l++) {
      var c = t[u[l]];
      if (Z0(c, a)) {
        o = c;
        break;
      }
    }
    else t.main ? o = t.main : u.length === 1 && (o = t[u[0]]);
    return typeof i > "u" ? o : i === null || !o ? null : o.filter(function(m) {
      return m.id === i.id;
    })[0] || null;
  };
}, ty = { AUDIO: function(r, n) {
  return function() {
    var i = n.mediaTypes[r].tracks;
    for (var e in i) if (i[e].enabled) return i[e];
    return null;
  };
}, SUBTITLES: function(r, n) {
  return function() {
    var i = n.mediaTypes[r].tracks;
    for (var e in i) if (i[e].mode === "showing" || i[e].mode === "hidden") return i[e];
    return null;
  };
} }, ry = function(r, n) {
  var i = n.mediaTypes;
  return function() {
    var e = i[r].activeTrack();
    return e ? i[r].activeGroup(e) : null;
  };
}, iy = function(r) {
  ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(C) {
    J0[C](C, r);
  });
  var n = r.mediaTypes, i = r.masterPlaylistLoader, e = r.tech, t = r.vhs, a = r.segmentLoaders, o = a.AUDIO, u = a.main;
  ["AUDIO", "SUBTITLES"].forEach(function(C) {
    n[C].activeGroup = ey(C, r), n[C].activeTrack = ty[C](C, r), n[C].onGroupChanged = $0(C, r), n[C].onGroupChanging = Y0(C, r), n[C].onTrackChanged = Q0(C, r), n[C].getActiveGroup = ry(C, r);
  });
  var l = n.AUDIO.activeGroup();
  if (l) {
    var c = (l.filter(function(C) {
      return C.default;
    })[0] || l[0]).id;
    n.AUDIO.tracks[c].enabled = true, n.AUDIO.onGroupChanged(), n.AUDIO.onTrackChanged();
    var m = n.AUDIO.getActiveGroup();
    m.playlistLoader ? (u.setAudio(false), o.setAudio(true)) : u.setAudio(true);
  }
  i.on("mediachange", function() {
    ["AUDIO", "SUBTITLES"].forEach(function(C) {
      return n[C].onGroupChanged();
    });
  }), i.on("mediachanging", function() {
    ["AUDIO", "SUBTITLES"].forEach(function(C) {
      return n[C].onGroupChanging();
    });
  });
  var g = function() {
    n.AUDIO.onTrackChanged(), e.trigger({ type: "usage", name: "vhs-audio-change" }), e.trigger({ type: "usage", name: "hls-audio-change" });
  };
  e.audioTracks().addEventListener("change", g), e.remoteTextTracks().addEventListener("change", n.SUBTITLES.onTrackChanged), t.on("dispose", function() {
    e.audioTracks().removeEventListener("change", g), e.remoteTextTracks().removeEventListener("change", n.SUBTITLES.onTrackChanged);
  }), e.clearTracks("audio");
  for (var _ in n.AUDIO.tracks) e.audioTracks().addTrack(n.AUDIO.tracks[_]);
}, ny = function() {
  var r = {};
  return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(n) {
    r[n] = { groups: {}, tracks: {}, activePlaylistLoader: null, activeGroup: Jt, activeTrack: Jt, getActiveGroup: Jt, onGroupChanged: Jt, onTrackChanged: Jt, lastTrack_: null, logger_: Lt("MediaGroups[" + n + "]") };
  }), r;
}, ay = 120, $t, sy = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred", "mediaAppends"], oy = function(r) {
  return this.audioSegmentLoader_[r] + this.mainSegmentLoader_[r];
}, uy = function(r) {
  var n = r.currentPlaylist, i = r.buffered, e = r.currentTime, t = r.nextPlaylist, a = r.bufferLowWaterLine, o = r.bufferHighWaterLine, u = r.duration, l = r.experimentalBufferBasedABR, c = r.log;
  if (!t) return q.log.warn("We received no playlist to switch to. Please check your stream."), false;
  var m = "allowing switch " + (n && n.id || "null") + " -> " + t.id;
  if (!n) return c(m + " as current playlist is not set"), true;
  if (t.id === n.id) return false;
  var g = !!jr(i, e).length;
  if (!n.endList) return !g && typeof n.partTargetDuration == "number" ? (c("not " + m + " as current playlist is live llhls, but currentTime isn't in buffered."), false) : (c(m + " as current playlist is live"), true);
  var _ = yo(i, e), C = l ? Qe.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : Qe.MAX_BUFFER_LOW_WATER_LINE;
  if (u < C) return c(m + " as duration < max low water line (" + u + " < " + C + ")"), true;
  var w = t.attributes.BANDWIDTH, S = n.attributes.BANDWIDTH;
  if (w < S && (!l || _ < o)) {
    var F = m + " as next bandwidth < current bandwidth (" + w + " < " + S + ")";
    return l && (F += " and forwardBuffer < bufferHighWaterLine (" + _ + " < " + o + ")"), c(F), true;
  }
  if ((!l || w > S) && _ >= a) {
    var N = m + " as forwardBuffer >= bufferLowWaterLine (" + _ + " >= " + a + ")";
    return l && (N += " and next bandwidth > current bandwidth (" + w + " > " + S + ")"), c(N), true;
  }
  return c("not " + m + " as no switching criteria met"), false;
}, ly = (function(s12) {
  oe(r, s12);
  function r(i) {
    var e;
    e = s12.call(this) || this;
    var t = i.src, a = i.handleManifestRedirects, o = i.withCredentials, u = i.tech, l = i.bandwidth, c = i.externVhs, m = i.useCueTags, g = i.blacklistDuration, _ = i.enableLowInitialPlaylist, C = i.sourceType, w = i.cacheEncryptionKeys, S = i.experimentalBufferBasedABR, F = i.experimentalLeastPixelDiffSelector, N = i.captionServices;
    if (!t) throw new Error("A non-empty playlist URL or JSON manifest string is required");
    var z = i.maxPlaylistRetries;
    (z === null || typeof z > "u") && (z = 1 / 0), $t = c, e.experimentalBufferBasedABR = !!S, e.experimentalLeastPixelDiffSelector = !!F, e.withCredentials = o, e.tech_ = u, e.vhs_ = u.vhs, e.sourceType_ = C, e.useCueTags_ = m, e.blacklistDuration = g, e.maxPlaylistRetries = z, e.enableLowInitialPlaylist = _, e.useCueTags_ && (e.cueTagsTrack_ = e.tech_.addTextTrack("metadata", "ad-cues"), e.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), e.requestOptions_ = { withCredentials: o, handleManifestRedirects: a, maxPlaylistRetries: z, timeout: null }, e.on("error", e.pauseLoading), e.mediaTypes_ = ny(), e.mediaSource = new P.MediaSource(), e.handleDurationChange_ = e.handleDurationChange_.bind(ye(e)), e.handleSourceOpen_ = e.handleSourceOpen_.bind(ye(e)), e.handleSourceEnded_ = e.handleSourceEnded_.bind(ye(e)), e.mediaSource.addEventListener("durationchange", e.handleDurationChange_), e.mediaSource.addEventListener("sourceopen", e.handleSourceOpen_), e.mediaSource.addEventListener("sourceended", e.handleSourceEnded_), e.seekable_ = q.createTimeRanges(), e.hasPlayed_ = false, e.syncController_ = new W0(i), e.segmentMetadataTrack_ = u.addRemoteTextTrack({ kind: "metadata", label: "segment-metadata" }, false).track, e.decrypter_ = new K0(), e.sourceUpdater_ = new ef(e.mediaSource), e.inbandTextTracks_ = {}, e.timelineChangeController_ = new G0();
    var W = { vhs: e.vhs_, parse708captions: i.parse708captions, useDtsForTimestampOffset: i.useDtsForTimestampOffset, captionServices: N, mediaSource: e.mediaSource, currentTime: e.tech_.currentTime.bind(e.tech_), seekable: function() {
      return e.seekable();
    }, seeking: function() {
      return e.tech_.seeking();
    }, duration: function() {
      return e.duration();
    }, hasPlayed: function() {
      return e.hasPlayed_;
    }, goalBufferLength: function() {
      return e.goalBufferLength();
    }, bandwidth: l, syncController: e.syncController_, decrypter: e.decrypter_, sourceType: e.sourceType_, inbandTextTracks: e.inbandTextTracks_, cacheEncryptionKeys: w, sourceUpdater: e.sourceUpdater_, timelineChangeController: e.timelineChangeController_, experimentalExactManifestTimings: i.experimentalExactManifestTimings };
    e.masterPlaylistLoader_ = e.sourceType_ === "dash" ? new Ps(t, e.vhs_, e.requestOptions_) : new Hr(t, e.vhs_, e.requestOptions_), e.setupMasterPlaylistLoaderListeners_(), e.mainSegmentLoader_ = new Os(q.mergeOptions(W, { segmentMetadataTrack: e.segmentMetadataTrack_, loaderType: "main" }), i), e.audioSegmentLoader_ = new Os(q.mergeOptions(W, { loaderType: "audio" }), i), e.subtitleSegmentLoader_ = new q0(q.mergeOptions(W, { loaderType: "vtt", featuresNativeTextTracks: e.tech_.featuresNativeTextTracks, loadVttJs: function() {
      return new Promise(function(R, V) {
        function T() {
          u.off("vttjserror", E), R();
        }
        function E() {
          u.off("vttjsloaded", T), V();
        }
        u.one("vttjsloaded", T), u.one("vttjserror", E), u.addWebVttScript_();
      });
    } }), i), e.setupSegmentLoaderListeners_(), e.experimentalBufferBasedABR && (e.masterPlaylistLoader_.one("loadedplaylist", function() {
      return e.startABRTimer_();
    }), e.tech_.on("pause", function() {
      return e.stopABRTimer_();
    }), e.tech_.on("play", function() {
      return e.startABRTimer_();
    })), sy.forEach(function($) {
      e[$ + "_"] = oy.bind(ye(e), $);
    }), e.logger_ = Lt("MPC"), e.triggeredFmp4Usage = false, e.tech_.preload() === "none" ? (e.loadOnPlay_ = function() {
      e.loadOnPlay_ = null, e.masterPlaylistLoader_.load();
    }, e.tech_.one("play", e.loadOnPlay_)) : e.masterPlaylistLoader_.load(), e.timeToLoadedData__ = -1, e.mainAppendsToLoadedData__ = -1, e.audioAppendsToLoadedData__ = -1;
    var H = e.tech_.preload() === "none" ? "play" : "loadstart";
    return e.tech_.one(H, function() {
      var $ = Date.now();
      e.tech_.one("loadeddata", function() {
        e.timeToLoadedData__ = Date.now() - $, e.mainAppendsToLoadedData__ = e.mainSegmentLoader_.mediaAppends, e.audioAppendsToLoadedData__ = e.audioSegmentLoader_.mediaAppends;
      });
    }), e;
  }
  var n = r.prototype;
  return n.mainAppendsToLoadedData_ = function() {
    return this.mainAppendsToLoadedData__;
  }, n.audioAppendsToLoadedData_ = function() {
    return this.audioAppendsToLoadedData__;
  }, n.appendsToLoadedData_ = function() {
    var e = this.mainAppendsToLoadedData_(), t = this.audioAppendsToLoadedData_();
    return e === -1 || t === -1 ? -1 : e + t;
  }, n.timeToLoadedData_ = function() {
    return this.timeToLoadedData__;
  }, n.checkABR_ = function(e) {
    e === void 0 && (e = "abr");
    var t = this.selectPlaylist();
    t && this.shouldSwitchToMedia_(t) && this.switchMedia_(t, e);
  }, n.switchMedia_ = function(e, t, a) {
    var o = this.media(), u = o && (o.id || o.uri), l = e.id || e.uri;
    u && u !== l && (this.logger_("switch media " + u + " -> " + l + " from " + t), this.tech_.trigger({ type: "usage", name: "vhs-rendition-change-" + t })), this.masterPlaylistLoader_.media(e, a);
  }, n.startABRTimer_ = function() {
    var e = this;
    this.stopABRTimer_(), this.abrTimer_ = P.setInterval(function() {
      return e.checkABR_();
    }, 250);
  }, n.stopABRTimer_ = function() {
    this.tech_.scrubbing && this.tech_.scrubbing() || (P.clearInterval(this.abrTimer_), this.abrTimer_ = null);
  }, n.getAudioTrackPlaylists_ = function() {
    var e = this.master(), t = e && e.playlists || [];
    if (!e || !e.mediaGroups || !e.mediaGroups.AUDIO) return t;
    var a = e.mediaGroups.AUDIO, o = Object.keys(a), u;
    if (Object.keys(this.mediaTypes_.AUDIO.groups).length) u = this.mediaTypes_.AUDIO.activeTrack();
    else {
      var l = a.main || o.length && a[o[0]];
      for (var c in l) if (l[c].default) {
        u = { label: c };
        break;
      }
    }
    if (!u) return t;
    var m = [];
    for (var g in a) if (a[g][u.label]) {
      var _ = a[g][u.label];
      if (_.playlists && _.playlists.length) m.push.apply(m, _.playlists);
      else if (_.uri) m.push(_);
      else if (e.playlists.length) for (var C = 0; C < e.playlists.length; C++) {
        var w = e.playlists[C];
        w.attributes && w.attributes.AUDIO && w.attributes.AUDIO === g && m.push(w);
      }
    }
    return m.length ? m : t;
  }, n.setupMasterPlaylistLoaderListeners_ = function() {
    var e = this;
    this.masterPlaylistLoader_.on("loadedmetadata", function() {
      var t = e.masterPlaylistLoader_.media(), a = t.targetDuration * 1.5 * 1e3;
      Cs(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = a, t.endList && e.tech_.preload() !== "none" && (e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load()), iy({ sourceType: e.sourceType_, segmentLoaders: { AUDIO: e.audioSegmentLoader_, SUBTITLES: e.subtitleSegmentLoader_, main: e.mainSegmentLoader_ }, tech: e.tech_, requestOptions: e.requestOptions_, masterPlaylistLoader: e.masterPlaylistLoader_, vhs: e.vhs_, master: e.master(), mediaTypes: e.mediaTypes_, blacklistCurrentPlaylist: e.blacklistCurrentPlaylist.bind(e) }), e.triggerPresenceUsage_(e.master(), t), e.setupFirstPlay(), !e.mediaTypes_.AUDIO.activePlaylistLoader || e.mediaTypes_.AUDIO.activePlaylistLoader.media() ? e.trigger("selectedinitialmedia") : e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", function() {
        e.trigger("selectedinitialmedia");
      });
    }), this.masterPlaylistLoader_.on("loadedplaylist", function() {
      e.loadOnPlay_ && e.tech_.off("play", e.loadOnPlay_);
      var t = e.masterPlaylistLoader_.media();
      if (!t) {
        e.excludeUnsupportedVariants_();
        var a;
        if (e.enableLowInitialPlaylist && (a = e.selectInitialPlaylist()), a || (a = e.selectPlaylist()), !a || !e.shouldSwitchToMedia_(a)) return;
        e.initialMedia_ = a, e.switchMedia_(e.initialMedia_, "initial");
        var o = e.sourceType_ === "vhs-json" && e.initialMedia_.segments;
        if (!o) return;
        t = e.initialMedia_;
      }
      e.handleUpdatedMediaPlaylist(t);
    }), this.masterPlaylistLoader_.on("error", function() {
      e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error);
    }), this.masterPlaylistLoader_.on("mediachanging", function() {
      e.mainSegmentLoader_.abort(), e.mainSegmentLoader_.pause();
    }), this.masterPlaylistLoader_.on("mediachange", function() {
      var t = e.masterPlaylistLoader_.media(), a = t.targetDuration * 1.5 * 1e3;
      Cs(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = a, e.masterPlaylistLoader_.load(), e.mainSegmentLoader_.playlist(t, e.requestOptions_), e.mainSegmentLoader_.load(), e.tech_.trigger({ type: "mediachange", bubbles: true });
    }), this.masterPlaylistLoader_.on("playlistunchanged", function() {
      var t = e.masterPlaylistLoader_.media();
      if (t.lastExcludeReason_ !== "playlist-unchanged") {
        var a = e.stuckAtPlaylistEnd_(t);
        a && (e.blacklistCurrentPlaylist({ message: "Playlist no longer updating.", reason: "playlist-unchanged" }), e.tech_.trigger("playliststuck"));
      }
    }), this.masterPlaylistLoader_.on("renditiondisabled", function() {
      e.tech_.trigger({ type: "usage", name: "vhs-rendition-disabled" }), e.tech_.trigger({ type: "usage", name: "hls-rendition-disabled" });
    }), this.masterPlaylistLoader_.on("renditionenabled", function() {
      e.tech_.trigger({ type: "usage", name: "vhs-rendition-enabled" }), e.tech_.trigger({ type: "usage", name: "hls-rendition-enabled" });
    });
  }, n.handleUpdatedMediaPlaylist = function(e) {
    this.useCueTags_ && this.updateAdCues_(e), this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.updateDuration(!e.endList), this.tech_.paused() || (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
  }, n.triggerPresenceUsage_ = function(e, t) {
    var a = e.mediaGroups || {}, o = true, u = Object.keys(a.AUDIO);
    for (var l in a.AUDIO) for (var c in a.AUDIO[l]) {
      var m = a.AUDIO[l][c];
      m.uri || (o = false);
    }
    o && (this.tech_.trigger({ type: "usage", name: "vhs-demuxed" }), this.tech_.trigger({ type: "usage", name: "hls-demuxed" })), Object.keys(a.SUBTITLES).length && (this.tech_.trigger({ type: "usage", name: "vhs-webvtt" }), this.tech_.trigger({ type: "usage", name: "hls-webvtt" })), $t.Playlist.isAes(t) && (this.tech_.trigger({ type: "usage", name: "vhs-aes" }), this.tech_.trigger({ type: "usage", name: "hls-aes" })), u.length && Object.keys(a.AUDIO[u[0]]).length > 1 && (this.tech_.trigger({ type: "usage", name: "vhs-alternate-audio" }), this.tech_.trigger({ type: "usage", name: "hls-alternate-audio" })), this.useCueTags_ && (this.tech_.trigger({ type: "usage", name: "vhs-playlist-cue-tags" }), this.tech_.trigger({ type: "usage", name: "hls-playlist-cue-tags" }));
  }, n.shouldSwitchToMedia_ = function(e) {
    var t = this.masterPlaylistLoader_.media() || this.masterPlaylistLoader_.pendingMedia_, a = this.tech_.currentTime(), o = this.bufferLowWaterLine(), u = this.bufferHighWaterLine(), l = this.tech_.buffered();
    return uy({ buffered: l, currentTime: a, currentPlaylist: t, nextPlaylist: e, bufferLowWaterLine: o, bufferHighWaterLine: u, duration: this.duration(), experimentalBufferBasedABR: this.experimentalBufferBasedABR, log: this.logger_ });
  }, n.setupSegmentLoaderListeners_ = function() {
    var e = this;
    this.mainSegmentLoader_.on("bandwidthupdate", function() {
      e.checkABR_("bandwidthupdate"), e.tech_.trigger("bandwidthupdate");
    }), this.mainSegmentLoader_.on("timeout", function() {
      e.experimentalBufferBasedABR && e.mainSegmentLoader_.load();
    }), this.experimentalBufferBasedABR || this.mainSegmentLoader_.on("progress", function() {
      e.trigger("progress");
    }), this.mainSegmentLoader_.on("error", function() {
      e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error());
    }), this.mainSegmentLoader_.on("appenderror", function() {
      e.error = e.mainSegmentLoader_.error_, e.trigger("error");
    }), this.mainSegmentLoader_.on("syncinfoupdate", function() {
      e.onSyncInfoUpdate_();
    }), this.mainSegmentLoader_.on("timestampoffset", function() {
      e.tech_.trigger({ type: "usage", name: "vhs-timestamp-offset" }), e.tech_.trigger({ type: "usage", name: "hls-timestamp-offset" });
    }), this.audioSegmentLoader_.on("syncinfoupdate", function() {
      e.onSyncInfoUpdate_();
    }), this.audioSegmentLoader_.on("appenderror", function() {
      e.error = e.audioSegmentLoader_.error_, e.trigger("error");
    }), this.mainSegmentLoader_.on("ended", function() {
      e.logger_("main segment loader ended"), e.onEndOfStream();
    }), this.mainSegmentLoader_.on("earlyabort", function(a) {
      e.experimentalBufferBasedABR || (e.delegateLoaders_("all", ["abort"]), e.blacklistCurrentPlaylist({ message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering." }, ay));
    });
    var t = function() {
      if (!e.sourceUpdater_.hasCreatedSourceBuffers()) return e.tryToCreateSourceBuffers_();
      var o = e.getCodecsOrExclude_();
      o && e.sourceUpdater_.addOrChangeSourceBuffers(o);
    };
    this.mainSegmentLoader_.on("trackinfo", t), this.audioSegmentLoader_.on("trackinfo", t), this.mainSegmentLoader_.on("fmp4", function() {
      e.triggeredFmp4Usage || (e.tech_.trigger({ type: "usage", name: "vhs-fmp4" }), e.tech_.trigger({ type: "usage", name: "hls-fmp4" }), e.triggeredFmp4Usage = true);
    }), this.audioSegmentLoader_.on("fmp4", function() {
      e.triggeredFmp4Usage || (e.tech_.trigger({ type: "usage", name: "vhs-fmp4" }), e.tech_.trigger({ type: "usage", name: "hls-fmp4" }), e.triggeredFmp4Usage = true);
    }), this.audioSegmentLoader_.on("ended", function() {
      e.logger_("audioSegmentLoader ended"), e.onEndOfStream();
    });
  }, n.mediaSecondsLoaded_ = function() {
    return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
  }, n.load = function() {
    this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load();
  }, n.smoothQualityChange_ = function(e) {
    e === void 0 && (e = this.selectPlaylist()), this.fastQualityChange_(e);
  }, n.fastQualityChange_ = function(e) {
    var t = this;
    if (e === void 0 && (e = this.selectPlaylist()), e === this.masterPlaylistLoader_.media()) {
      this.logger_("skipping fastQualityChange because new media is same as old");
      return;
    }
    this.switchMedia_(e, "fast-quality"), this.mainSegmentLoader_.resetEverything(function() {
      q.browser.IE_VERSION || q.browser.IS_EDGE ? t.tech_.setCurrentTime(t.tech_.currentTime() + 0.04) : t.tech_.setCurrentTime(t.tech_.currentTime());
    });
  }, n.play = function() {
    if (!this.setupFirstPlay()) {
      this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load();
      var e = this.tech_.seekable();
      if (this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0)) return this.tech_.setCurrentTime(e.end(e.length - 1));
    }
  }, n.setupFirstPlay = function() {
    var e = this, t = this.masterPlaylistLoader_.media();
    if (!t || this.tech_.paused() || this.hasPlayed_) return false;
    if (!t.endList) {
      var a = this.seekable();
      if (!a.length) return false;
      if (q.browser.IE_VERSION && this.tech_.readyState() === 0) return this.tech_.one("loadedmetadata", function() {
        e.trigger("firstplay"), e.tech_.setCurrentTime(a.end(0)), e.hasPlayed_ = true;
      }), false;
      this.trigger("firstplay"), this.tech_.setCurrentTime(a.end(0));
    }
    return this.hasPlayed_ = true, this.load(), true;
  }, n.handleSourceOpen_ = function() {
    if (this.tryToCreateSourceBuffers_(), this.tech_.autoplay()) {
      var e = this.tech_.play();
      typeof e < "u" && typeof e.then == "function" && e.then(null, function(t) {
      });
    }
    this.trigger("sourceopen");
  }, n.handleSourceEnded_ = function() {
    if (this.inbandTextTracks_.metadataTrack_) {
      var e = this.inbandTextTracks_.metadataTrack_.cues;
      if (!(!e || !e.length)) {
        var t = this.duration();
        e[e.length - 1].endTime = isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t;
      }
    }
  }, n.handleDurationChange_ = function() {
    this.tech_.trigger("durationchange");
  }, n.onEndOfStream = function() {
    var e = this.mainSegmentLoader_.ended_;
    if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
      var t = this.mainSegmentLoader_.getCurrentMediaInfo_();
      !t || t.hasVideo ? e = e && this.audioSegmentLoader_.ended_ : e = this.audioSegmentLoader_.ended_;
    }
    e && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream());
  }, n.stuckAtPlaylistEnd_ = function(e) {
    var t = this.seekable();
    if (!t.length) return false;
    var a = this.syncController_.getExpiredTime(e, this.duration());
    if (a === null) return false;
    var o = $t.Playlist.playlistEnd(e, a), u = this.tech_.currentTime(), l = this.tech_.buffered();
    if (!l.length) return o - u <= jt;
    var c = l.end(l.length - 1);
    return c - u <= jt && o - c <= jt;
  }, n.blacklistCurrentPlaylist = function(e, t) {
    e === void 0 && (e = {});
    var a = e.playlist || this.masterPlaylistLoader_.media();
    if (t = t || e.blacklistDuration || this.blacklistDuration, !a) {
      this.error = e, this.mediaSource.readyState !== "open" ? this.trigger("error") : this.sourceUpdater_.endOfStream("network");
      return;
    }
    a.playlistErrors_++;
    var o = this.masterPlaylistLoader_.master.playlists, u = o.filter(pa), l = u.length === 1 && u[0] === a;
    if (o.length === 1 && t !== 1 / 0) return q.log.warn("Problem encountered with playlist " + a.id + ". Trying again since it is the only playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(l);
    if (l) {
      var c = false;
      o.forEach(function(F) {
        if (F !== a) {
          var N = F.excludeUntil;
          typeof N < "u" && N !== 1 / 0 && (c = true, delete F.excludeUntil);
        }
      }), c && (q.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"));
    }
    var m;
    a.playlistErrors_ > this.maxPlaylistRetries ? m = 1 / 0 : m = Date.now() + t * 1e3, a.excludeUntil = m, e.reason && (a.lastExcludeReason_ = e.reason), this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({ type: "usage", name: "vhs-rendition-blacklisted" }), this.tech_.trigger({ type: "usage", name: "hls-rendition-blacklisted" });
    var g = this.selectPlaylist();
    if (!g) {
      this.error = "Playback cannot continue. No available working or supported playlists.", this.trigger("error");
      return;
    }
    var _ = e.internal ? this.logger_ : q.log.warn, C = e.message ? " " + e.message : "";
    _((e.internal ? "Internal problem" : "Problem") + " encountered with playlist " + a.id + "." + (C + " Switching to playlist " + g.id + ".")), g.attributes.AUDIO !== a.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]), g.attributes.SUBTITLES !== a.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]), this.delegateLoaders_("main", ["abort", "pause"]);
    var w = g.targetDuration / 2 * 1e3 || 5 * 1e3, S = typeof g.lastRequest == "number" && Date.now() - g.lastRequest <= w;
    return this.switchMedia_(g, "exclude", l || S);
  }, n.pauseLoading = function() {
    this.delegateLoaders_("all", ["abort", "pause"]), this.stopABRTimer_();
  }, n.delegateLoaders_ = function(e, t) {
    var a = this, o = [], u = e === "all";
    (u || e === "main") && o.push(this.masterPlaylistLoader_);
    var l = [];
    (u || e === "audio") && l.push("AUDIO"), (u || e === "subtitle") && (l.push("CLOSED-CAPTIONS"), l.push("SUBTITLES")), l.forEach(function(c) {
      var m = a.mediaTypes_[c] && a.mediaTypes_[c].activePlaylistLoader;
      m && o.push(m);
    }), ["main", "audio", "subtitle"].forEach(function(c) {
      var m = a[c + "SegmentLoader_"];
      m && (e === c || e === "all") && o.push(m);
    }), o.forEach(function(c) {
      return t.forEach(function(m) {
        typeof c[m] == "function" && c[m]();
      });
    });
  }, n.setCurrentTime = function(e) {
    var t = jr(this.tech_.buffered(), e);
    if (!(this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media()) || !this.masterPlaylistLoader_.media().segments) return 0;
    if (t && t.length) return e;
    this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), this.load();
  }, n.duration = function() {
    if (!this.masterPlaylistLoader_) return 0;
    var e = this.masterPlaylistLoader_.media();
    return e ? e.endList ? this.mediaSource ? this.mediaSource.duration : $t.Playlist.duration(e) : 1 / 0 : 0;
  }, n.seekable = function() {
    return this.seekable_;
  }, n.onSyncInfoUpdate_ = function() {
    var e;
    if (this.masterPlaylistLoader_) {
      var t = this.masterPlaylistLoader_.media();
      if (t) {
        var a = this.syncController_.getExpiredTime(t, this.duration());
        if (a !== null) {
          var o = this.masterPlaylistLoader_.master, u = $t.Playlist.seekable(t, a, $t.Playlist.liveEdgeDelay(o, t));
          if (u.length !== 0 && !(this.mediaTypes_.AUDIO.activePlaylistLoader && (t = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), a = this.syncController_.getExpiredTime(t, this.duration()), a === null || (e = $t.Playlist.seekable(t, a, $t.Playlist.liveEdgeDelay(o, t)), e.length === 0)))) {
            var l, c;
            this.seekable_ && this.seekable_.length && (l = this.seekable_.end(0), c = this.seekable_.start(0)), e ? e.start(0) > u.end(0) || u.start(0) > e.end(0) ? this.seekable_ = u : this.seekable_ = q.createTimeRanges([[e.start(0) > u.start(0) ? e.start(0) : u.start(0), e.end(0) < u.end(0) ? e.end(0) : u.end(0)]]) : this.seekable_ = u, !(this.seekable_ && this.seekable_.length && this.seekable_.end(0) === l && this.seekable_.start(0) === c) && (this.logger_("seekable updated [" + vc(this.seekable_) + "]"), this.tech_.trigger("seekablechanged"));
          }
        }
      }
    }
  }, n.updateDuration = function(e) {
    if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.updateDuration_ = null), this.mediaSource.readyState !== "open") {
      this.updateDuration_ = this.updateDuration.bind(this, e), this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
      return;
    }
    if (e) {
      var t = this.seekable();
      if (!t.length) return;
      (isNaN(this.mediaSource.duration) || this.mediaSource.duration < t.end(t.length - 1)) && this.sourceUpdater_.setDuration(t.end(t.length - 1));
      return;
    }
    var a = this.tech_.buffered(), o = $t.Playlist.duration(this.masterPlaylistLoader_.media());
    a.length > 0 && (o = Math.max(o, a.end(a.length - 1))), this.mediaSource.duration !== o && this.sourceUpdater_.setDuration(o);
  }, n.dispose = function() {
    var e = this;
    this.trigger("dispose"), this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_), ["AUDIO", "SUBTITLES"].forEach(function(t) {
      var a = e.mediaTypes_[t].groups;
      for (var o in a) a[o].forEach(function(u) {
        u.playlistLoader && u.playlistLoader.dispose();
      });
    }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose(), this.sourceUpdater_.dispose(), this.timelineChangeController_.dispose(), this.stopABRTimer_(), this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_), this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_), this.off();
  }, n.master = function() {
    return this.masterPlaylistLoader_.master;
  }, n.media = function() {
    return this.masterPlaylistLoader_.media() || this.initialMedia_;
  }, n.areMediaTypesKnown_ = function() {
    var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader, t = !!this.mainSegmentLoader_.getCurrentMediaInfo_(), a = e ? !!this.audioSegmentLoader_.getCurrentMediaInfo_() : true;
    return !(!t || !a);
  }, n.getCodecsOrExclude_ = function() {
    var e = this, t = { main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {}, audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {} }, a = this.mainSegmentLoader_.getPendingSegmentPlaylist() || this.media();
    t.video = t.main;
    var o = ki(this.master(), a), u = {}, l = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
    if (t.main.hasVideo && (u.video = o.video || t.main.videoCodec || ep), t.main.isMuxed && (u.video += "," + (o.audio || t.main.audioCodec || ku)), (t.main.hasAudio && !t.main.isMuxed || t.audio.hasAudio || l) && (u.audio = o.audio || t.main.audioCodec || t.audio.audioCodec || ku, t.audio.isFmp4 = t.main.hasAudio && !t.main.isMuxed ? t.main.isFmp4 : t.audio.isFmp4), !u.audio && !u.video) {
      this.blacklistCurrentPlaylist({ playlist: a, message: "Could not determine codecs for playlist.", blacklistDuration: 1 / 0 });
      return;
    }
    var c = function(F, N) {
      return F ? Dn(N) : Ba(N);
    }, m = {}, g;
    if (["video", "audio"].forEach(function(S) {
      if (u.hasOwnProperty(S) && !c(t[S].isFmp4, u[S])) {
        var F = t[S].isFmp4 ? "browser" : "muxer";
        m[F] = m[F] || [], m[F].push(u[S]), S === "audio" && (g = F);
      }
    }), l && g && a.attributes.AUDIO) {
      var _ = a.attributes.AUDIO;
      this.master().playlists.forEach(function(S) {
        var F = S.attributes && S.attributes.AUDIO;
        F === _ && S !== a && (S.excludeUntil = 1 / 0);
      }), this.logger_("excluding audio group " + _ + " as " + g + ' does not support codec(s): "' + u.audio + '"');
    }
    if (Object.keys(m).length) {
      var C = Object.keys(m).reduce(function(S, F) {
        return S && (S += ", "), S += F + ' does not support codec(s): "' + m[F].join(",") + '"', S;
      }, "") + ".";
      this.blacklistCurrentPlaylist({ playlist: a, internal: true, message: C, blacklistDuration: 1 / 0 });
      return;
    }
    if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
      var w = [];
      if (["video", "audio"].forEach(function(S) {
        var F = (Ut(e.sourceUpdater_.codecs[S] || "")[0] || {}).type, N = (Ut(u[S] || "")[0] || {}).type;
        F && N && F.toLowerCase() !== N.toLowerCase() && w.push('"' + e.sourceUpdater_.codecs[S] + '" -> "' + u[S] + '"');
      }), w.length) {
        this.blacklistCurrentPlaylist({ playlist: a, message: "Codec switching not supported: " + w.join(", ") + ".", blacklistDuration: 1 / 0, internal: true });
        return;
      }
    }
    return u;
  }, n.tryToCreateSourceBuffers_ = function() {
    if (!(this.mediaSource.readyState !== "open" || this.sourceUpdater_.hasCreatedSourceBuffers()) && this.areMediaTypesKnown_()) {
      var e = this.getCodecsOrExclude_();
      if (e) {
        this.sourceUpdater_.createSourceBuffers(e);
        var t = [e.video, e.audio].filter(Boolean).join(",");
        this.excludeIncompatibleVariants_(t);
      }
    }
  }, n.excludeUnsupportedVariants_ = function() {
    var e = this, t = this.master().playlists, a = [];
    Object.keys(t).forEach(function(o) {
      var u = t[o];
      if (a.indexOf(u.id) === -1) {
        a.push(u.id);
        var l = ki(e.master, u), c = [];
        l.audio && !Ba(l.audio) && !Dn(l.audio) && c.push("audio codec " + l.audio), l.video && !Ba(l.video) && !Dn(l.video) && c.push("video codec " + l.video), l.text && l.text === "stpp.ttml.im1t" && c.push("text codec " + l.text), c.length && (u.excludeUntil = 1 / 0, e.logger_("excluding " + u.id + " for unsupported: " + c.join(", ")));
      }
    });
  }, n.excludeIncompatibleVariants_ = function(e) {
    var t = this, a = [], o = this.master().playlists, u = Xn(Ut(e)), l = kl(u), c = u.video && Ut(u.video)[0] || null, m = u.audio && Ut(u.audio)[0] || null;
    Object.keys(o).forEach(function(g) {
      var _ = o[g];
      if (!(a.indexOf(_.id) !== -1 || _.excludeUntil === 1 / 0)) {
        a.push(_.id);
        var C = [], w = ki(t.masterPlaylistLoader_.master, _), S = kl(w);
        if (!(!w.audio && !w.video)) {
          if (S !== l && C.push('codec count "' + S + '" !== "' + l + '"'), !t.sourceUpdater_.canChangeType()) {
            var F = w.video && Ut(w.video)[0] || null, N = w.audio && Ut(w.audio)[0] || null;
            F && c && F.type.toLowerCase() !== c.type.toLowerCase() && C.push('video codec "' + F.type + '" !== "' + c.type + '"'), N && m && N.type.toLowerCase() !== m.type.toLowerCase() && C.push('audio codec "' + N.type + '" !== "' + m.type + '"');
          }
          C.length && (_.excludeUntil = 1 / 0, t.logger_("blacklisting " + _.id + ": " + C.join(" && ")));
        }
      }
    });
  }, n.updateAdCues_ = function(e) {
    var t = 0, a = this.seekable();
    a.length && (t = a.start(0)), j0(e, this.cueTagsTrack_, t);
  }, n.goalBufferLength = function() {
    var e = this.tech_.currentTime(), t = Qe.GOAL_BUFFER_LENGTH, a = Qe.GOAL_BUFFER_LENGTH_RATE, o = Math.max(t, Qe.MAX_GOAL_BUFFER_LENGTH);
    return Math.min(t + e * a, o);
  }, n.bufferLowWaterLine = function() {
    var e = this.tech_.currentTime(), t = Qe.BUFFER_LOW_WATER_LINE, a = Qe.BUFFER_LOW_WATER_LINE_RATE, o = Math.max(t, Qe.MAX_BUFFER_LOW_WATER_LINE), u = Math.max(t, Qe.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
    return Math.min(t + e * a, this.experimentalBufferBasedABR ? u : o);
  }, n.bufferHighWaterLine = function() {
    return Qe.BUFFER_HIGH_WATER_LINE;
  }, r;
})(q.EventTarget), dy = function(r, n, i) {
  return function(e) {
    var t = r.master.playlists[n], a = To(t), o = pa(t);
    return typeof e > "u" ? o : (e ? delete t.disabled : t.disabled = true, e !== o && !a && (i(), e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")), e);
  };
}, cy = function(r, n, i) {
  var e = r.masterPlaylistController_, t = r.options_.smoothQualityChange, a = t ? "smooth" : "fast", o = e[a + "QualityChange_"].bind(e);
  if (n.attributes) {
    var u = n.attributes.RESOLUTION;
    this.width = u && u.width, this.height = u && u.height, this.bandwidth = n.attributes.BANDWIDTH, this.frameRate = n.attributes["FRAME-RATE"];
  }
  this.codecs = ki(e.master(), n), this.playlist = n, this.id = i, this.enabled = dy(r.playlists, n.id, o);
}, fy = function(r) {
  r.representations = function() {
    var n = r.masterPlaylistController_.master(), i = Wi(n) ? r.masterPlaylistController_.getAudioTrackPlaylists_() : n.playlists;
    return i ? i.filter(function(e) {
      return !To(e);
    }).map(function(e, t) {
      return new cy(r, e, e.id);
    }) : [];
  };
}, Vl = ["seeking", "seeked", "pause", "playing", "error"], hy = (function() {
  function s12(n) {
    var i = this;
    this.masterPlaylistController_ = n.masterPlaylistController, this.tech_ = n.tech, this.seekable = n.seekable, this.allowSeeksWithinUnsafeLiveWindow = n.allowSeeksWithinUnsafeLiveWindow, this.liveRangeSafeTimeDelta = n.liveRangeSafeTimeDelta, this.media = n.media, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = Lt("PlaybackWatcher"), this.logger_("initialize");
    var e = function() {
      return i.monitorCurrentTime_();
    }, t = function() {
      return i.monitorCurrentTime_();
    }, a = function() {
      return i.techWaiting_();
    }, o = function() {
      return i.cancelTimer_();
    }, u = this.masterPlaylistController_, l = ["main", "subtitle", "audio"], c = {};
    l.forEach(function(g) {
      c[g] = { reset: function() {
        return i.resetSegmentDownloads_(g);
      }, updateend: function() {
        return i.checkSegmentDownloads_(g);
      } }, u[g + "SegmentLoader_"].on("appendsdone", c[g].updateend), u[g + "SegmentLoader_"].on("playlistupdate", c[g].reset), i.tech_.on(["seeked", "seeking"], c[g].reset);
    });
    var m = function(_) {
      ["main", "audio"].forEach(function(C) {
        u[C + "SegmentLoader_"][_]("appended", i.seekingAppendCheck_);
      });
    };
    this.seekingAppendCheck_ = function() {
      i.fixesBadSeeks_() && (i.consecutiveUpdates = 0, i.lastRecordedTime = i.tech_.currentTime(), m("off"));
    }, this.clearSeekingAppendCheck_ = function() {
      return m("off");
    }, this.watchForBadSeeking_ = function() {
      i.clearSeekingAppendCheck_(), m("on");
    }, this.tech_.on("seeked", this.clearSeekingAppendCheck_), this.tech_.on("seeking", this.watchForBadSeeking_), this.tech_.on("waiting", a), this.tech_.on(Vl, o), this.tech_.on("canplay", t), this.tech_.one("play", e), this.dispose = function() {
      i.clearSeekingAppendCheck_(), i.logger_("dispose"), i.tech_.off("waiting", a), i.tech_.off(Vl, o), i.tech_.off("canplay", t), i.tech_.off("play", e), i.tech_.off("seeking", i.watchForBadSeeking_), i.tech_.off("seeked", i.clearSeekingAppendCheck_), l.forEach(function(g) {
        u[g + "SegmentLoader_"].off("appendsdone", c[g].updateend), u[g + "SegmentLoader_"].off("playlistupdate", c[g].reset), i.tech_.off(["seeked", "seeking"], c[g].reset);
      }), i.checkCurrentTimeTimeout_ && P.clearTimeout(i.checkCurrentTimeTimeout_), i.cancelTimer_();
    };
  }
  var r = s12.prototype;
  return r.monitorCurrentTime_ = function() {
    this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && P.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = P.setTimeout(this.monitorCurrentTime_.bind(this), 250);
  }, r.resetSegmentDownloads_ = function(i) {
    var e = this.masterPlaylistController_[i + "SegmentLoader_"];
    this[i + "StalledDownloads_"] > 0 && this.logger_("resetting possible stalled download count for " + i + " loader"), this[i + "StalledDownloads_"] = 0, this[i + "Buffered_"] = e.buffered_();
  }, r.checkSegmentDownloads_ = function(i) {
    var e = this.masterPlaylistController_, t = e[i + "SegmentLoader_"], a = t.buffered_(), o = nv(this[i + "Buffered_"], a);
    if (this[i + "Buffered_"] = a, o) {
      this.resetSegmentDownloads_(i);
      return;
    }
    this[i + "StalledDownloads_"]++, this.logger_("found #" + this[i + "StalledDownloads_"] + " " + i + " appends that did not increase buffer (possible stalled download)", { playlistId: t.playlist_ && t.playlist_.id, buffered: wr(a) }), !(this[i + "StalledDownloads_"] < 10) && (this.logger_(i + " loader stalled download exclusion"), this.resetSegmentDownloads_(i), this.tech_.trigger({ type: "usage", name: "vhs-" + i + "-download-exclusion" }), i !== "subtitle" && e.blacklistCurrentPlaylist({ message: "Excessive " + i + " segment downloading detected." }, 1 / 0));
  }, r.checkCurrentTime_ = function() {
    if (!(this.tech_.paused() || this.tech_.seeking())) {
      var i = this.tech_.currentTime(), e = this.tech_.buffered();
      if (this.lastRecordedTime === i && (!e.length || i + jt >= e.end(e.length - 1))) return this.techWaiting_();
      this.consecutiveUpdates >= 5 && i === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : i === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = i);
    }
  }, r.cancelTimer_ = function() {
    this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null;
  }, r.fixesBadSeeks_ = function() {
    var i = this.tech_.seeking();
    if (!i) return false;
    var e = this.seekable(), t = this.tech_.currentTime(), a = this.afterSeekableWindow_(e, t, this.media(), this.allowSeeksWithinUnsafeLiveWindow), o;
    if (a) {
      var u = e.end(e.length - 1);
      o = u;
    }
    if (this.beforeSeekableWindow_(e, t)) {
      var l = e.start(0);
      o = l + (l === e.end(0) ? 0 : jt);
    }
    if (typeof o < "u") return this.logger_("Trying to seek outside of seekable at time " + t + " with " + ("seekable range " + vc(e) + ". Seeking to ") + (o + ".")), this.tech_.setCurrentTime(o), true;
    for (var c = this.masterPlaylistController_.sourceUpdater_, m = this.tech_.buffered(), g = c.audioBuffer ? c.audioBuffered() : null, _ = c.videoBuffer ? c.videoBuffered() : null, C = this.media(), w = C.partTargetDuration ? C.partTargetDuration : (C.targetDuration - pr) * 2, S = [g, _], F = 0; F < S.length; F++) if (S[F]) {
      var N = yo(S[F], t);
      if (N < w) return false;
    }
    var z = En(m, t);
    return z.length === 0 ? false : (o = z.start(0) + jt, this.logger_("Buffered region starts (" + z.start(0) + ") " + (" just beyond seek point (" + t + "). Seeking to " + o + ".")), this.tech_.setCurrentTime(o), true);
  }, r.waiting_ = function() {
    if (!this.techWaiting_()) {
      var i = this.tech_.currentTime(), e = this.tech_.buffered(), t = jr(e, i);
      if (t.length && i + 3 <= t.end(0)) {
        this.cancelTimer_(), this.tech_.setCurrentTime(i), this.logger_("Stopped at " + i + " while inside a buffered region " + ("[" + t.start(0) + " -> " + t.end(0) + "]. Attempting to resume ") + "playback by seeking to the current time."), this.tech_.trigger({ type: "usage", name: "vhs-unknown-waiting" }), this.tech_.trigger({ type: "usage", name: "hls-unknown-waiting" });
        return;
      }
    }
  }, r.techWaiting_ = function() {
    var i = this.seekable(), e = this.tech_.currentTime();
    if (this.tech_.seeking() || this.timer_ !== null) return true;
    if (this.beforeSeekableWindow_(i, e)) {
      var t = i.end(i.length - 1);
      return this.logger_("Fell out of live window at time " + e + ". Seeking to " + ("live point (seekable end) " + t)), this.cancelTimer_(), this.tech_.setCurrentTime(t), this.tech_.trigger({ type: "usage", name: "vhs-live-resync" }), this.tech_.trigger({ type: "usage", name: "hls-live-resync" }), true;
    }
    var a = this.tech_.vhs.masterPlaylistController_.sourceUpdater_, o = this.tech_.buffered(), u = this.videoUnderflow_({ audioBuffered: a.audioBuffered(), videoBuffered: a.videoBuffered(), currentTime: e });
    if (u) return this.cancelTimer_(), this.tech_.setCurrentTime(e), this.tech_.trigger({ type: "usage", name: "vhs-video-underflow" }), this.tech_.trigger({ type: "usage", name: "hls-video-underflow" }), true;
    var l = En(o, e);
    if (l.length > 0) {
      var c = l.start(0) - e;
      return this.logger_("Stopped at " + e + ", setting timer for " + c + ", seeking " + ("to " + l.start(0))), this.cancelTimer_(), this.timer_ = setTimeout(this.skipTheGap_.bind(this), c * 1e3, e), true;
    }
    return false;
  }, r.afterSeekableWindow_ = function(i, e, t, a) {
    if (a === void 0 && (a = false), !i.length) return false;
    var o = i.end(i.length - 1) + jt, u = !t.endList;
    return u && a && (o = i.end(i.length - 1) + t.targetDuration * 3), e > o;
  }, r.beforeSeekableWindow_ = function(i, e) {
    return !!(i.length && i.start(0) > 0 && e < i.start(0) - this.liveRangeSafeTimeDelta);
  }, r.videoUnderflow_ = function(i) {
    var e = i.videoBuffered, t = i.audioBuffered, a = i.currentTime;
    if (e) {
      var o;
      if (e.length && t.length) {
        var u = jr(e, a - 3), l = jr(e, a), c = jr(t, a);
        c.length && !l.length && u.length && (o = { start: u.end(0), end: c.end(0) });
      } else {
        var m = En(e, a);
        m.length || (o = this.gapFromVideoUnderflow_(e, a));
      }
      return o ? (this.logger_("Encountered a gap in video from " + o.start + " to " + o.end + ". " + ("Seeking to current time " + a)), true) : false;
    }
  }, r.skipTheGap_ = function(i) {
    var e = this.tech_.buffered(), t = this.tech_.currentTime(), a = En(e, t);
    this.cancelTimer_(), !(a.length === 0 || t !== i) && (this.logger_("skipTheGap_:", "currentTime:", t, "scheduled currentTime:", i, "nextRange start:", a.start(0)), this.tech_.setCurrentTime(a.start(0) + pr), this.tech_.trigger({ type: "usage", name: "vhs-gap-skip" }), this.tech_.trigger({ type: "usage", name: "hls-gap-skip" }));
  }, r.gapFromVideoUnderflow_ = function(i, e) {
    for (var t = tv(i), a = 0; a < t.length; a++) {
      var o = t.start(a), u = t.end(a);
      if (e - o < 4 && e - o > 2) return { start: o, end: u };
    }
    return null;
  }, s12;
})(), py = { errorInterval: 30, getSource: function(r) {
  var n = this.tech({ IWillNotUseThisInPlugins: true }), i = n.currentSource_ || this.currentSource();
  return r(i);
} }, my = function s11(r, n) {
  var i = 0, e = 0, t = q.mergeOptions(py, n);
  r.ready(function() {
    r.trigger({ type: "usage", name: "vhs-error-reload-initialized" }), r.trigger({ type: "usage", name: "hls-error-reload-initialized" });
  });
  var a = function() {
    e && r.currentTime(e);
  }, o = function(g) {
    g != null && (e = r.duration() !== 1 / 0 && r.currentTime() || 0, r.one("loadedmetadata", a), r.src(g), r.trigger({ type: "usage", name: "vhs-error-reload" }), r.trigger({ type: "usage", name: "hls-error-reload" }), r.play());
  }, u = function() {
    if (Date.now() - i < t.errorInterval * 1e3) {
      r.trigger({ type: "usage", name: "vhs-error-reload-canceled" }), r.trigger({ type: "usage", name: "hls-error-reload-canceled" });
      return;
    }
    if (!t.getSource || typeof t.getSource != "function") {
      q.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!");
      return;
    }
    return i = Date.now(), t.getSource.call(r, o);
  }, l = function m() {
    r.off("loadedmetadata", a), r.off("error", u), r.off("dispose", m);
  }, c = function(g) {
    l(), s11(r, g);
  };
  r.on("error", u), r.on("dispose", l), r.reloadSourceOnError = c;
}, gy = function(r) {
  my(this, r);
}, tf = "2.16.3", vy = "6.0.1", yy = "0.22.1", _y = "4.8.0", Ty = "3.1.3", it = { PlaylistLoader: Hr, Playlist: vt, utils: kv, STANDARD_PLAYLIST_SELECTOR: Il, INITIAL_PLAYLIST_SELECTOR: y0, lastBandwidthSelector: Il, movingAverageBandwidthSelector: g0, comparePlaylistBandwidth: Eo, comparePlaylistResolution: m0, xhr: Oc() };
Object.keys(Qe).forEach(function(s12) {
  Object.defineProperty(it, s12, { get: function() {
    return q.log.warn("using Vhs." + s12 + " is UNSAFE be sure you know what you are doing"), Qe[s12];
  }, set: function(n) {
    if (q.log.warn("using Vhs." + s12 + " is UNSAFE be sure you know what you are doing"), typeof n != "number" || n < 0) {
      q.log.warn("value of Vhs." + s12 + " must be greater than or equal to 0");
      return;
    }
    Qe[s12] = n;
  } });
});
var rf = "videojs-vhs", nf = function(r, n) {
  for (var i = n.media(), e = -1, t = 0; t < r.length; t++) if (r[t].id === i.id) {
    e = t;
    break;
  }
  r.selectedIndex_ = e, r.trigger({ selectedIndex: e, type: "change" });
}, by = function(r, n) {
  n.representations().forEach(function(i) {
    r.addQualityLevel(i);
  }), nf(r, n.playlists);
};
it.canPlaySource = function() {
  return q.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.");
};
var xy = function(r, n, i) {
  if (!r) return r;
  var e = {};
  n && n.attributes && n.attributes.CODECS && (e = Xn(Ut(n.attributes.CODECS))), i && i.attributes && i.attributes.CODECS && (e.audio = i.attributes.CODECS);
  var t = Pi(e.video), a = Pi(e.audio), o = {};
  for (var u in r) o[u] = {}, a && (o[u].audioContentType = a), t && (o[u].videoContentType = t), n.contentProtection && n.contentProtection[u] && n.contentProtection[u].pssh && (o[u].pssh = n.contentProtection[u].pssh), typeof r[u] == "string" && (o[u].url = r[u]);
  return q.mergeOptions(r, o);
}, Sy = function(r, n) {
  return r.reduce(function(i, e) {
    if (!e.contentProtection) return i;
    var t = n.reduce(function(a, o) {
      var u = e.contentProtection[o];
      return u && u.pssh && (a[o] = { pssh: u.pssh }), a;
    }, {});
    return Object.keys(t).length && i.push(t), i;
  }, []);
}, Ey = function(r) {
  var n = r.player, i = r.sourceKeySystems, e = r.audioMedia, t = r.mainPlaylists;
  if (!n.eme.initializeMediaKeys) return Promise.resolve();
  var a = e ? t.concat([e]) : t, o = Sy(a, Object.keys(i)), u = [], l = [];
  return o.forEach(function(c) {
    l.push(new Promise(function(m, g) {
      n.tech_.one("keysessioncreated", m);
    })), u.push(new Promise(function(m, g) {
      n.eme.initializeMediaKeys({ keySystems: c }, function(_) {
        if (_) {
          g(_);
          return;
        }
        m();
      });
    }));
  }), Promise.race([Promise.all(u), Promise.race(l)]);
}, Cy = function(r) {
  var n = r.player, i = r.sourceKeySystems, e = r.media, t = r.audioMedia, a = xy(i, e, t);
  return a ? (n.currentSource().keySystems = a, a && !n.eme ? (q.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"), false) : true) : false;
}, af = function() {
  if (!P.localStorage) return null;
  var r = P.localStorage.getItem(rf);
  if (!r) return null;
  try {
    return JSON.parse(r);
  } catch {
    return null;
  }
}, Ay = function(r) {
  if (!P.localStorage) return false;
  var n = af();
  n = n ? q.mergeOptions(n, r) : r;
  try {
    P.localStorage.setItem(rf, JSON.stringify(n));
  } catch {
    return false;
  }
  return n;
}, Dy = function(r) {
  return r.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") === 0 ? JSON.parse(r.substring(r.indexOf(",") + 1)) : r;
};
it.supportsNativeHls = (function() {
  if (!ae || !ae.createElement) return false;
  var s12 = ae.createElement("video");
  if (!q.getTech("Html5").isSupported()) return false;
  var r = ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"];
  return r.some(function(n) {
    return /maybe|probably/i.test(s12.canPlayType(n));
  });
})();
it.supportsNativeDash = (function() {
  return !ae || !ae.createElement || !q.getTech("Html5").isSupported() ? false : /maybe|probably/i.test(ae.createElement("video").canPlayType("application/dash+xml"));
})();
it.supportsTypeNatively = function(s12) {
  return s12 === "hls" ? it.supportsNativeHls : s12 === "dash" ? it.supportsNativeDash : false;
};
it.isSupported = function() {
  return q.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.");
};
var wy = q.getComponent("Component"), Ao = (function(s12) {
  oe(r, s12);
  function r(i, e, t) {
    var a;
    if (a = s12.call(this, e, q.mergeOptions(t.hls, t.vhs)) || this, t.hls && Object.keys(t.hls).length && q.log.warn("Using hls options is deprecated. Please rename `hls` to `vhs` in your options object."), typeof t.initialBandwidth == "number" && (a.options_.bandwidth = t.initialBandwidth), a.logger_ = Lt("VhsHandler"), e.options_ && e.options_.playerId) {
      var o = q(e.options_.playerId);
      o.hasOwnProperty("hls") || Object.defineProperty(o, "hls", { get: function() {
        return q.log.warn("player.hls is deprecated. Use player.tech().vhs instead."), e.trigger({ type: "usage", name: "hls-player-access" }), ye(a);
      }, configurable: true }), o.hasOwnProperty("vhs") || Object.defineProperty(o, "vhs", { get: function() {
        return q.log.warn("player.vhs is deprecated. Use player.tech().vhs instead."), e.trigger({ type: "usage", name: "vhs-player-access" }), ye(a);
      }, configurable: true }), o.hasOwnProperty("dash") || Object.defineProperty(o, "dash", { get: function() {
        return q.log.warn("player.dash is deprecated. Use player.tech().vhs instead."), ye(a);
      }, configurable: true }), a.player_ = o;
    }
    if (a.tech_ = e, a.source_ = i, a.stats = {}, a.ignoreNextSeekingEvent_ = false, a.setOptions_(), a.options_.overrideNative && e.overrideNativeAudioTracks && e.overrideNativeVideoTracks) e.overrideNativeAudioTracks(true), e.overrideNativeVideoTracks(true);
    else if (a.options_.overrideNative && (e.featuresNativeVideoTracks || e.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
    return a.on(ae, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function(u) {
      var l = ae.fullscreenElement || ae.webkitFullscreenElement || ae.mozFullScreenElement || ae.msFullscreenElement;
      l && l.contains(a.tech_.el()) ? a.masterPlaylistController_.fastQualityChange_() : a.masterPlaylistController_.checkABR_();
    }), a.on(a.tech_, "seeking", function() {
      if (this.ignoreNextSeekingEvent_) {
        this.ignoreNextSeekingEvent_ = false;
        return;
      }
      this.setCurrentTime(this.tech_.currentTime());
    }), a.on(a.tech_, "error", function() {
      this.tech_.error() && this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading();
    }), a.on(a.tech_, "play", a.play), a;
  }
  var n = r.prototype;
  return n.setOptions_ = function() {
    var e = this;
    if (this.options_.withCredentials = this.options_.withCredentials || false, this.options_.handleManifestRedirects = this.options_.handleManifestRedirects !== false, this.options_.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions !== false, this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || false, this.options_.smoothQualityChange = this.options_.smoothQualityChange || false, this.options_.useBandwidthFromLocalStorage = typeof this.source_.useBandwidthFromLocalStorage < "u" ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || false, this.options_.useNetworkInformationApi = this.options_.useNetworkInformationApi || false, this.options_.useDtsForTimestampOffset = this.options_.useDtsForTimestampOffset || false, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || false, typeof this.options_.blacklistDuration != "number" && (this.options_.blacklistDuration = 300), typeof this.options_.bandwidth != "number" && this.options_.useBandwidthFromLocalStorage) {
      var t = af();
      t && t.bandwidth && (this.options_.bandwidth = t.bandwidth, this.tech_.trigger({ type: "usage", name: "vhs-bandwidth-from-local-storage" }), this.tech_.trigger({ type: "usage", name: "hls-bandwidth-from-local-storage" })), t && t.throughput && (this.options_.throughput = t.throughput, this.tech_.trigger({ type: "usage", name: "vhs-throughput-from-local-storage" }), this.tech_.trigger({ type: "usage", name: "hls-throughput-from-local-storage" }));
    }
    typeof this.options_.bandwidth != "number" && (this.options_.bandwidth = Qe.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === Qe.INITIAL_BANDWIDTH, ["withCredentials", "useDevicePixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects", "cacheEncryptionKeys", "playlistSelector", "initialPlaylistSelector", "experimentalBufferBasedABR", "liveRangeSafeTimeDelta", "experimentalLLHLS", "useNetworkInformationApi", "useDtsForTimestampOffset", "experimentalExactManifestTimings", "experimentalLeastPixelDiffSelector"].forEach(function(a) {
      typeof e.source_[a] < "u" && (e.options_[a] = e.source_[a]);
    }), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions, this.useDevicePixelRatio = this.options_.useDevicePixelRatio;
  }, n.src = function(e, t) {
    var a = this;
    if (e) {
      this.setOptions_(), this.options_.src = Dy(this.source_.src), this.options_.tech = this.tech_, this.options_.externVhs = it, this.options_.sourceType = $l(t), this.options_.seekTo = function(l) {
        a.tech_.setCurrentTime(l);
      }, this.options_.smoothQualityChange && q.log.warn("smoothQualityChange is deprecated and will be removed in the next major version"), this.masterPlaylistController_ = new ly(this.options_);
      var o = q.mergeOptions({ liveRangeSafeTimeDelta: jt }, this.options_, { seekable: function() {
        return a.seekable();
      }, media: function() {
        return a.masterPlaylistController_.media();
      }, masterPlaylistController: this.masterPlaylistController_ });
      this.playbackWatcher_ = new hy(o), this.masterPlaylistController_.on("error", function() {
        var l = q.players[a.tech_.options_.playerId], c = a.masterPlaylistController_.error;
        typeof c == "object" && !c.code ? c.code = 3 : typeof c == "string" && (c = { message: c, code: 3 }), l.error(c);
      });
      var u = this.options_.experimentalBufferBasedABR ? it.movingAverageBandwidthSelector(0.55) : it.STANDARD_PLAYLIST_SELECTOR;
      this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : u.bind(this), this.masterPlaylistController_.selectInitialPlaylist = it.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, { selectPlaylist: { get: function() {
        return this.masterPlaylistController_.selectPlaylist;
      }, set: function(c) {
        this.masterPlaylistController_.selectPlaylist = c.bind(this);
      } }, throughput: { get: function() {
        return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate;
      }, set: function(c) {
        this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = c, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1;
      } }, bandwidth: { get: function() {
        var c = this.masterPlaylistController_.mainSegmentLoader_.bandwidth, m = P.navigator.connection || P.navigator.mozConnection || P.navigator.webkitConnection, g = 1e7;
        if (this.options_.useNetworkInformationApi && m) {
          var _ = m.downlink * 1e3 * 1e3;
          _ >= g && c >= g ? c = Math.max(c, _) : c = _;
        }
        return c;
      }, set: function(c) {
        this.masterPlaylistController_.mainSegmentLoader_.bandwidth = c, this.masterPlaylistController_.mainSegmentLoader_.throughput = { rate: 0, count: 0 };
      } }, systemBandwidth: { get: function() {
        var c = 1 / (this.bandwidth || 1), m;
        this.throughput > 0 ? m = 1 / this.throughput : m = 0;
        var g = Math.floor(1 / (c + m));
        return g;
      }, set: function() {
        q.log.error('The "systemBandwidth" property is read-only');
      } } }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, { bandwidth: { get: function() {
        return a.bandwidth || 0;
      }, enumerable: true }, mediaRequests: { get: function() {
        return a.masterPlaylistController_.mediaRequests_() || 0;
      }, enumerable: true }, mediaRequestsAborted: { get: function() {
        return a.masterPlaylistController_.mediaRequestsAborted_() || 0;
      }, enumerable: true }, mediaRequestsTimedout: { get: function() {
        return a.masterPlaylistController_.mediaRequestsTimedout_() || 0;
      }, enumerable: true }, mediaRequestsErrored: { get: function() {
        return a.masterPlaylistController_.mediaRequestsErrored_() || 0;
      }, enumerable: true }, mediaTransferDuration: { get: function() {
        return a.masterPlaylistController_.mediaTransferDuration_() || 0;
      }, enumerable: true }, mediaBytesTransferred: { get: function() {
        return a.masterPlaylistController_.mediaBytesTransferred_() || 0;
      }, enumerable: true }, mediaSecondsLoaded: { get: function() {
        return a.masterPlaylistController_.mediaSecondsLoaded_() || 0;
      }, enumerable: true }, mediaAppends: { get: function() {
        return a.masterPlaylistController_.mediaAppends_() || 0;
      }, enumerable: true }, mainAppendsToLoadedData: { get: function() {
        return a.masterPlaylistController_.mainAppendsToLoadedData_() || 0;
      }, enumerable: true }, audioAppendsToLoadedData: { get: function() {
        return a.masterPlaylistController_.audioAppendsToLoadedData_() || 0;
      }, enumerable: true }, appendsToLoadedData: { get: function() {
        return a.masterPlaylistController_.appendsToLoadedData_() || 0;
      }, enumerable: true }, timeToLoadedData: { get: function() {
        return a.masterPlaylistController_.timeToLoadedData_() || 0;
      }, enumerable: true }, buffered: { get: function() {
        return wr(a.tech_.buffered());
      }, enumerable: true }, currentTime: { get: function() {
        return a.tech_.currentTime();
      }, enumerable: true }, currentSource: { get: function() {
        return a.tech_.currentSource_;
      }, enumerable: true }, currentTech: { get: function() {
        return a.tech_.name_;
      }, enumerable: true }, duration: { get: function() {
        return a.tech_.duration();
      }, enumerable: true }, master: { get: function() {
        return a.playlists.master;
      }, enumerable: true }, playerDimensions: { get: function() {
        return a.tech_.currentDimensions();
      }, enumerable: true }, seekable: { get: function() {
        return wr(a.tech_.seekable());
      }, enumerable: true }, timestamp: { get: function() {
        return Date.now();
      }, enumerable: true }, videoPlaybackQuality: { get: function() {
        return a.tech_.getVideoPlaybackQuality();
      }, enumerable: true } }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.tech_.on("bandwidthupdate", function() {
        a.options_.useBandwidthFromLocalStorage && Ay({ bandwidth: a.bandwidth, throughput: Math.round(a.throughput) });
      }), this.masterPlaylistController_.on("selectedinitialmedia", function() {
        fy(a);
      }), this.masterPlaylistController_.sourceUpdater_.on("createdsourcebuffers", function() {
        a.setupEme_();
      }), this.on(this.masterPlaylistController_, "progress", function() {
        this.tech_.trigger("progress");
      }), this.on(this.masterPlaylistController_, "firstplay", function() {
        this.ignoreNextSeekingEvent_ = true;
      }), this.setupQualityLevels_(), this.tech_.el() && (this.mediaSourceUrl_ = P.URL.createObjectURL(this.masterPlaylistController_.mediaSource), this.tech_.src(this.mediaSourceUrl_));
    }
  }, n.createKeySessions_ = function() {
    var e = this, t = this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader;
    this.logger_("waiting for EME key session creation"), Ey({ player: this.player_, sourceKeySystems: this.source_.keySystems, audioMedia: t && t.media(), mainPlaylists: this.playlists.master.playlists }).then(function() {
      e.logger_("created EME key session"), e.masterPlaylistController_.sourceUpdater_.initializedEme();
    }).catch(function(a) {
      e.logger_("error while creating EME key session", a), e.player_.error({ message: "Failed to initialize media keys for EME", code: 3 });
    });
  }, n.handleWaitingForKey_ = function() {
    this.logger_("waitingforkey fired, attempting to create any new key sessions"), this.createKeySessions_();
  }, n.setupEme_ = function() {
    var e = this, t = this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader, a = Cy({ player: this.player_, sourceKeySystems: this.source_.keySystems, media: this.playlists.media(), audioMedia: t && t.media() });
    if (this.player_.tech_.on("keystatuschange", function(o) {
      if (o.status === "output-restricted") {
        var u = e.masterPlaylistController_.master();
        if (!(!u || !u.playlists)) {
          var l = [];
          if (u.playlists.forEach(function(m) {
            m && m.attributes && m.attributes.RESOLUTION && m.attributes.RESOLUTION.height >= 720 && (!m.excludeUntil || m.excludeUntil < 1 / 0) && (m.excludeUntil = 1 / 0, l.push(m));
          }), l.length) {
            var c;
            (c = q.log).warn.apply(c, ['DRM keystatus changed to "output-restricted." Removing the following HD playlists that will most likely fail to play and clearing the buffer. This may be due to HDCP restrictions on the stream and the capabilities of the current device.'].concat(l)), e.masterPlaylistController_.fastQualityChange_();
          }
        }
      }
    }), this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this), this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_), q.browser.IE_VERSION === 11 || !a) {
      this.masterPlaylistController_.sourceUpdater_.initializedEme();
      return;
    }
    this.createKeySessions_();
  }, n.setupQualityLevels_ = function() {
    var e = this, t = q.players[this.tech_.options_.playerId];
    !t || !t.qualityLevels || this.qualityLevels_ || (this.qualityLevels_ = t.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", function() {
      by(e.qualityLevels_, e);
    }), this.playlists.on("mediachange", function() {
      nf(e.qualityLevels_, e.playlists);
    }));
  }, r.version = function() {
    return { "@videojs/http-streaming": tf, "mux.js": vy, "mpd-parser": yy, "m3u8-parser": _y, "aes-decrypter": Ty };
  }, n.version = function() {
    return this.constructor.version();
  }, n.canChangeType = function() {
    return ef.canChangeType();
  }, n.play = function() {
    this.masterPlaylistController_.play();
  }, n.setCurrentTime = function(e) {
    this.masterPlaylistController_.setCurrentTime(e);
  }, n.duration = function() {
    return this.masterPlaylistController_.duration();
  }, n.seekable = function() {
    return this.masterPlaylistController_.seekable();
  }, n.dispose = function() {
    this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.player_ && (delete this.player_.vhs, delete this.player_.dash, delete this.player_.hls), this.tech_ && this.tech_.vhs && delete this.tech_.vhs, this.tech_ && delete this.tech_.hls, this.mediaSourceUrl_ && P.URL.revokeObjectURL && (P.URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_ = null), this.tech_ && this.tech_.off("waitingforkey", this.handleWaitingForKey_), s12.prototype.dispose.call(this);
  }, n.convertToProgramTime = function(e, t) {
    return Mv({ playlist: this.masterPlaylistController_.media(), time: e, callback: t });
  }, n.seekToProgramTime = function(e, t, a, o) {
    return a === void 0 && (a = true), o === void 0 && (o = 2), Nv({ programTime: e, playlist: this.masterPlaylistController_.media(), retryCount: o, pauseAfterSeek: a, seekTo: this.options_.seekTo, tech: this.options_.tech, callback: t });
  }, r;
})(wy), Mi = { name: "videojs-http-streaming", VERSION: tf, canHandleSource: function(r, n) {
  n === void 0 && (n = {});
  var i = q.mergeOptions(q.options, n);
  return Mi.canPlayType(r.type, i);
}, handleSource: function(r, n, i) {
  i === void 0 && (i = {});
  var e = q.mergeOptions(q.options, i);
  return n.vhs = new Ao(r, n, e), q.hasOwnProperty("hls") || Object.defineProperty(n, "hls", { get: function() {
    return q.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead."), n.vhs;
  }, configurable: true }), n.vhs.xhr = Oc(), n.vhs.src(r.src, r.type), n.vhs;
}, canPlayType: function(r, n) {
  var i = $l(r);
  if (!i) return "";
  var e = Mi.getOverrideNative(n), t = it.supportsTypeNatively(i), a = !t || e;
  return a ? "maybe" : "";
}, getOverrideNative: function(r) {
  r === void 0 && (r = {});
  var n = r, i = n.vhs, e = i === void 0 ? {} : i, t = n.hls, a = t === void 0 ? {} : t, o = !(q.browser.IS_ANY_SAFARI || q.browser.IS_IOS), u = e.overrideNative, l = u === void 0 ? o : u, c = a.overrideNative, m = c === void 0 ? false : c;
  return m || l;
} }, ky = function() {
  return Dn("avc1.4d400d,mp4a.40.2");
};
ky() && q.getTech("Html5").registerSourceHandler(Mi, 0);
q.VhsHandler = Ao;
Object.defineProperty(q, "HlsHandler", { get: function() {
  return q.log.warn("videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead."), Ao;
}, configurable: true });
q.VhsSourceHandler = Mi;
Object.defineProperty(q, "HlsSourceHandler", { get: function() {
  return q.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead."), Mi;
}, configurable: true });
q.Vhs = it;
Object.defineProperty(q, "Hls", { get: function() {
  return q.log.warn("videojs.Hls is deprecated. Use videojs.Vhs instead."), it;
}, configurable: true });
q.use || (q.registerComponent("Hls", it), q.registerComponent("Vhs", it));
q.options.vhs = q.options.vhs || {};
q.options.hls = q.options.hls || {};
if (!q.getPlugin || !q.getPlugin("reloadSourceOnError")) {
  var Py = q.registerPlugin || q.plugin;
  Py("reloadSourceOnError", gy);
}
function ss(s12, r) {
  var n = {};
  for (var i in s12) Object.prototype.hasOwnProperty.call(s12, i) && r.indexOf(i) < 0 && (n[i] = s12[i]);
  if (s12 != null && typeof Object.getOwnPropertySymbols == "function") {
    var e = 0;
    for (i = Object.getOwnPropertySymbols(s12); e < i.length; e++) r.indexOf(i[e]) < 0 && Object.prototype.propertyIsEnumerable.call(s12, i[e]) && (n[i[e]] = s12[i[e]]);
  }
  return n;
}
var Iy = { src: { type: String, onChange: function(s12, r) {
  return s12.src(r);
} }, width: { type: Number, onChange: function(s12, r) {
  return s12.width(r);
}, onEvent: function(s12, r) {
  s12.on(["playerresize", "resize"], (function() {
    return r(s12.width());
  }));
} }, height: { type: Number, onChange: function(s12, r) {
  return s12.height(r);
}, onEvent: function(s12, r) {
  s12.on(["playerresize", "resize"], (function() {
    return r(s12.height());
  }));
} }, preload: { type: String, onChange: function(s12, r) {
  return s12.preload(r);
} }, loop: { type: Boolean, onChange: function(s12, r) {
  return s12.loop(r);
} }, muted: { type: Boolean, onChange: function(s12, r) {
  return s12.muted(r);
}, onEvent: function(s12, r) {
  return s12.on("volumechange", (function() {
    return r(s12.muted());
  }));
} }, poster: { type: String, onChange: function(s12, r) {
  return s12.poster(r);
}, onEvent: function(s12, r) {
  return s12.on("posterchange", (function() {
    return r(s12.poster());
  }));
} }, controls: { type: Boolean, onChange: function(s12, r) {
  return s12.controls(r);
}, onEvent: function(s12, r) {
  s12.on("controlsenabled", (function() {
    return r(true);
  })), s12.on("controlsdisabled", (function() {
    return r(false);
  }));
} }, autoplay: { type: [Boolean, String], onChange: function(s12, r) {
  return s12.autoplay(r);
} }, crossorigin: { type: String, onChange: function(s12, r) {
  return s12.crossOrigin(r);
} }, crossOrigin: { type: String, onChange: function(s12, r) {
  return s12.crossOrigin(r);
} }, playsinline: { type: Boolean, onChange: function(s12, r) {
  return s12.playsinline(r);
} }, playsInline: { type: Boolean, onChange: function(s12, r) {
  return s12.playsinline(r);
} } }, Oy = { id: { type: String }, sources: { type: Array, onChange: function(s12, r) {
  return s12.src(r);
} }, tracks: { type: Array, onChange: function(s12, r) {
  for (var n = s12.remoteTextTracks(), i = (n == null ? void 0 : n.length) || 0; i--; ) s12.removeRemoteTextTrack(n[i]);
  s12.ready((function() {
    r.forEach((function(e) {
      return s12.addRemoteTextTrack(e, false);
    }));
  }));
} }, textTrackSettings: { type: Object, onChange: function(s12, r) {
  return s12.textTrackSettings.options(r);
} }, language: { type: String, onChange: function(s12, r) {
  return s12.language(r);
}, onEvent: function(s12, r) {
  return s12.on("languagechange", (function() {
    return r(s12.language());
  }));
} }, languages: { type: Object }, playbackRates: { type: Array, onChange: function(s12, r) {
  return s12.playbackRates(r ?? []);
}, onEvent: function(s12, r) {
  s12.on("playbackrateschange", (function() {
    return r(s12.playbackRates());
  }));
} }, audioOnlyMode: { type: Boolean, onChange: function(s12, r) {
  return s12.audioOnlyMode(r);
} }, audioPosterMode: { type: Boolean, onChange: function(s12, r) {
  return s12.audioPosterMode(r);
} }, responsive: { type: Boolean, onChange: function(s12, r) {
  return s12.responsive(r);
} }, breakpoints: { type: Object, onChange: function(s12, r) {
  return s12.breakpoints(r);
} }, fluid: { type: Boolean, onChange: function(s12, r) {
  return s12.fluid(r);
} }, fill: { type: Boolean, onChange: function(s12, r) {
  return s12.fill(r);
} }, aspectRatio: { type: String, onChange: function(s12, r) {
  return s12.aspectRatio(r);
} }, fullscreen: { type: Object }, liveui: { type: Boolean }, liveTracker: { type: Object }, disablePictureInPicture: { type: Boolean, onChange: function(s12, r) {
  return s12.disablePictureInPicture(r);
} }, notSupportedMessage: { type: String }, normalizeAutoplay: { type: Boolean }, noUITitleAttributes: { type: Boolean }, preferFullWindow: { type: Boolean }, suppressNotSupportedError: { type: Boolean }, techCanOverridePoster: { type: Boolean }, reportTouchActivity: { type: Boolean }, techOrder: { type: Array }, inactivityTimeout: { type: Number }, userActions: { type: Object }, plugins: { type: Object }, restoreEl: { type: [Boolean, Object] }, "vtt.js": { type: String } }, Ly = { children: { type: [Array, Object] }, controlBar: { type: Object, onChange: function(s12, r) {
  return s12.controlBar.options(r);
} } }, Fy = { html5: { type: Object } }, Ry = { volume: { type: Number, onChange: function(s12, r) {
  return s12.volume(r);
}, onEvent: function(s12, r) {
  return s12.on("volumechange", (function() {
    return r(s12.volume());
  }));
} }, playbackRate: { type: Number, onChange: function(s12, r) {
  s12.playbackRate(r), s12.defaultPlaybackRate(r);
}, onEvent: function(s12, r) {
  s12.on("ratechange", (function() {
    r(s12.playbackRate());
  }));
} }, options: { type: Object } }, Ni = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Iy), Oy), Ly), Fy), Ry), Do = Object.keys(Ni), sf = Object.assign(Object.assign(Object.assign(Object.assign({}, { loadstart: "onLoadStart", suspend: "onSuspend", abort: "onAbort", error: "onError", emptied: "onEmptied", stalled: "onStalled", loadedmetadata: "onLoadedMetadata", loadeddata: "onLoadedData", canplay: "onCanPlay", canplaythrough: "onCanPlayThrough", playing: "onPlaying", waiting: "onWaiting", seeking: "onSeeking", seeked: "onSeeked", ended: "onEnded", durationchange: "onDurationChange", timeupdate: "onTimeUpdate", progress: "onProgress", play: "onPlay", pause: "onpause", ratechange: "onRateChange", resize: "onResize", volumechange: "onVolumeChange" }), { posterchange: "onPosterChange", languagechange: "onLanguageChange", fullscreenchange: "onFullscreenChange", playbackrateschange: "onPlaybackRatesChange", controlsdisabled: "onControlsDisabled", controlsenabled: "onControlsEnabled", enterFullWindow: "onEnterFullWindow", exitFullWindow: "onExitFullWindow", enterpictureinpicture: "onEnterPictureInPicture", leavepictureinpicture: "onLeavePictureInPicture", sourceset: "onSourceSet", texttrackchange: "onTextTrackChange", textdata: "onTextData", useractive: "onUserActive", userinactive: "onUserInactive", usingcustomcontrols: "onUsingCustomControls", usingnativecontrols: "onUsingNativeControls", dispose: "onDispose" }), { beforepluginsetup: "onBeforePluginSetup", pluginsetup: "onPluginSetup" }), { componentresize: "onComponentResize", playerresize: "onPlayerResize", ready: "onReady", tap: "onTap" }), of = Object.keys(sf);
Object.values(sf);
var os = function(s12) {
  var r, n = s12 == null ? void 0 : s12.trim().replace(/\s+/g, " ");
  return n && (r = n.split(" ")) !== null && r !== void 0 ? r : [];
}, us = { src: { getter: function(s12) {
  return s12.src();
} }, currentSrc: { getter: function(s12) {
  return s12.currentSrc();
} }, currentSource: { getter: function(s12) {
  return s12.currentSource();
} }, width: { events: ["resize", "playerresize"], getter: function(s12) {
  return s12.width();
} }, height: { events: ["resize", "playerresize"], getter: function(s12) {
  return s12.height();
} }, currentWidth: { events: ["resize", "playerresize"], getter: function(s12) {
  return s12.currentWidth();
} }, currentHeight: { events: ["resize", "playerresize"], getter: function(s12) {
  return s12.currentHeight();
} }, videoWidth: { events: ["resize", "playerresize"], getter: function(s12) {
  return s12.videoWidth();
} }, videoHeight: { events: ["resize", "playerresize"], getter: function(s12) {
  return s12.videoHeight();
} }, controls: { events: ["controlsdisabled", "controlsenabled"], getter: function(s12) {
  return s12.controls();
} }, volume: { events: ["volumechange"], getter: function(s12) {
  return s12.volume();
} }, muted: { events: ["volumechange"], getter: function(s12) {
  return s12.muted();
} }, poster: { events: ["posterchange"], getter: function(s12) {
  return s12.poster();
} }, seeking: { events: ["seeking"], getter: function(s12) {
  return s12.seeking();
} }, paused: { events: ["pause", "play", "playing"], getter: function(s12) {
  return s12.paused();
} }, ended: { events: ["ended", "play"], getter: function(s12) {
  return s12.ended();
} }, currentTime: { events: ["timeupdate"], getter: function(s12) {
  return s12.currentTime();
} }, duration: { events: ["durationchange"], getter: function(s12) {
  return s12.duration();
} }, playbackRate: { events: ["ratechange"], getter: function(s12) {
  return s12.playbackRate();
} }, playbackRates: { events: ["playbackrateschange"], getter: function(s12) {
  return s12.playbackRates();
} }, isFullscreen: { events: ["fullscreenchange"], getter: function(s12) {
  return s12.isFullscreen();
} }, isInPictureInPicture: { events: ["enterpictureinpicture", "leavepictureinpicture"], getter: function(s12) {
  return s12.isInPictureInPicture();
} }, isLive: { getter: function(s12) {
  var r;
  return (r = s12.liveTracker) === null || r === void 0 ? void 0 : r.isLive();
} }, language: { events: ["languagechange"], getter: function(s12) {
  return s12.language();
} }, userActive: { events: ["useractive", "userinactive"], getter: function(s12) {
  return s12.userActive();
} }, readyState: { events: ["loadeddata"], getter: function(s12) {
  return s12.readyState();
} }, networkState: { events: ["loadeddata", "error"], getter: function(s12) {
  return s12.networkState();
} }, error: { events: ["loadeddata", "error"], getter: function(s12) {
  return s12.error();
} }, buffered: { events: ["progress"], getter: function(s12) {
  return s12.buffered();
} }, bufferedPercent: { events: ["progress"], getter: function(s12) {
  return s12.bufferedPercent();
} }, played: { events: ["timeupdate"], getter: function(s12) {
  return s12.played();
} }, seekable: { events: ["progress", "seeked"], getter: function(s12) {
  return s12.seekable();
} }, audioTracks: { getter: function(s12) {
  var r;
  return (r = s12.audioTracks) === null || r === void 0 ? void 0 : r.call(s12);
} }, videoTracks: { getter: function(s12) {
  var r;
  return (r = s12.videoTracks) === null || r === void 0 ? void 0 : r.call(s12);
} }, textTracks: { getter: function(s12) {
  var r;
  return (r = s12.textTracks) === null || r === void 0 ? void 0 : r.call(s12);
} } }, uf = Do.filter((function(s12) {
  return !!Ni[s12].onEvent;
})), lf = function(s12) {
  return "update:" + s12;
}, My = of.concat(uf.map(lf)), Ny = Do.reduce((function(s12, r) {
  var n, i = Ni[r], e = Array.isArray(i.type) ? i.type : [i.type], t = Object.assign({}, i);
  return e.includes(Boolean) && (t.default = void 0), Object.assign(Object.assign({}, s12), ((n = {})[r] = t, n));
}), {}), By = yh({ name: "VueVideoPlayer", props: Object.assign(Object.assign({}, Ny), { class: [String, Object, Array] }), emits: My.concat(["mounted"], ["unmounted"]), setup: function(s12, r) {
  var n = _h(s12), i = n.class, e = ss(n, ["class"]), t = xa(false), a = xa(null), o = xa(null), u = du((function() {
    return o.value ? o.value.player : null;
  })), l = Th(null), c = du((function() {
    return l.value ? Sh(l.value) : null;
  }));
  return bh((function() {
    var m, g = (function(_) {
      var C, w = _.props, S = _.element, F = _.className, N = _.onEvent, z = w.options;
      z === void 0 && (z = {});
      var W = ss(w, ["options"]), H = {};
      Object.keys(W).forEach((function(j) {
        var K = W[j];
        K !== void 0 && (H[j] = K);
      }));
      var $ = Object.assign(Object.assign({}, H), z), R = $.volume, V = $.playbackRate, T = ss($, ["volume", "playbackRate"]), E = Object.assign(Object.assign({}, T), { playsinline: (C = T.playsinline) !== null && C !== void 0 ? C : T.playsInline }), M = q(S, E, (function() {
        var j = this;
        of.forEach((function(K) {
          j.on(K, (function(Y) {
            N(K, Y);
          }));
        })), T.src && !T.sources && this.src(T.src), R && Number.isFinite(R) && this.volume(R), V && Number.isFinite(V) && (this.defaultPlaybackRate(V), setTimeout((function() {
          j.playbackRate(V);
        }), 0));
      }));
      F && os(F).map((function(j) {
        return M.addClass(j);
      }));
      var B = function(j) {
        var K;
        (K = M.options) === null || K === void 0 || K.call(M, j ?? {});
      };
      return { player: M, dispose: function() {
        return M.dispose();
      }, updateClassNames: function(j, K) {
        os(j).map((function(Y) {
          return M.removeClass(Y);
        })), os(K).map((function(Y) {
          return M.addClass(Y);
        }));
      }, updateOptions: B, updatePropOption: function(j, K) {
        var Y, re, J;
        B(((Y = {})[j] = K, Y)), (J = (re = Ni[j]) === null || re === void 0 ? void 0 : re.onChange) === null || J === void 0 || J.call(re, M, K);
      } };
    })({ element: a.value, props: e, onEvent: r.emit });
    m = { player: g.player, onEvent: r.emit }, uf.forEach((function(_) {
      var C, w;
      (w = (C = Ni[_]) === null || C === void 0 ? void 0 : C.onEvent) === null || w === void 0 || w.call(C, m.player, (function(S) {
        m.onEvent(lf(_), S);
      }));
    })), Sa((function() {
      return s12.class;
    }), (function(_, C) {
      var w = Ea(C), S = Ea(_);
      g.updateClassNames(w, S);
    }), { immediate: true }), Sa((function() {
      return s12.options;
    }), (function(_) {
      return g.updateOptions(_ ?? {});
    }), { deep: true }), Do.filter((function(_) {
      return _ !== "options";
    })).forEach((function(_) {
      Sa((function() {
        return s12[_];
      }), (function(C) {
        return g.updatePropOption(_, C);
      }), { deep: true });
    })), (function(_, C) {
      var w = Object.keys(us), S = w.reduce((function(N, z) {
        var W;
        return Object.assign(Object.assign({}, N), ((W = {})[z] = us[z].getter(_), W));
      }), { playing: false, waiting: false }), F = function(N, z) {
        S[N] = z, C.onUpdate(N, z, Object.assign({}, S));
      };
      _.on(["pause", "ended"], (function() {
        F("playing", false);
      })), _.on(["play", "playing"], (function() {
        F("playing", true);
      })), _.on("waiting", (function() {
        F("waiting", true);
        var N = _.currentTime(), z = function() {
          N !== _.currentTime() && (F("waiting", false), _.off("timeupdate", z));
        };
        _.on("timeupdate", z);
      })), w.forEach((function(N) {
        var z, W = us[N];
        _.on(["loadstart", "loadedmetadata"].concat((z = W.events) !== null && z !== void 0 ? z : []), (function() {
          F(N, W.getter(_));
        }));
      })), C.onInit(Object.assign({}, S));
    })(g.player, { onInit: function(_) {
      l.value = _;
    }, onUpdate: function(_, C) {
      l.value && (l.value[_] = C);
    } }), o.value = g, t.value = true, r.emit("mounted", { video: a.value, player: u.value, state: c.value });
  })), xh((function() {
    o.value && (o.value.dispose(), o.value = null, l.value = null, r.emit("unmounted"));
  })), function() {
    var m, g;
    return cu("div", { "data-vjs-player": "", class: Ea(i) }, [cu("video", { class: ["video-js", "v-video-player"], ref: a }), t.value && ((g = (m = r.slots).default) === null || g === void 0 ? void 0 : g.call(m, { video: a.value, player: u.value, state: c.value }))]);
  };
} }), qy = By;
export {
  qy as R
};
