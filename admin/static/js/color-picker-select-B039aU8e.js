import { d as ye, p as Z, R as Se, E as $e, q as Q, c6 as xt, c7 as le, A as io, c8 as di, M as Be, c9 as ln, ca as lo, b as Te, t as pi, r as z, c as L, o as E, g as J, B as N, h as Pt, y as qn, ay as Yn, ai as Gr, x as re, F as Je, e as _, V as se, w as nr, D as qr, cb as hi, cc as gi, aw as vi, ac as yi, v as Dt, H as mi, cd as yr, bf as bi, f as so, z as Vt, ce as wt, cf as St, S as Ci, _ as xi } from "./index-DAdfXJ2i.js";
import { u as wi } from "./pageDevise-DcQ8796K.js";
import "./clientType-BhCLU4J5.js";
function ar(e) {
  "@babel/helpers - typeof";
  return ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ar(e);
}
var Si = /^\s+/, _i = /\s+$/;
function C(e, t) {
  if (e = e || "", t = t || {}, e instanceof C) return e;
  if (!(this instanceof C)) return new C(e, t);
  var r = ki(e);
  this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || r.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = r.ok;
}
C.prototype = { isDark: function() {
  return this.getBrightness() < 128;
}, isLight: function() {
  return !this.isDark();
}, isValid: function() {
  return this._ok;
}, getOriginalInput: function() {
  return this._originalInput;
}, getFormat: function() {
  return this._format;
}, getAlpha: function() {
  return this._a;
}, getBrightness: function() {
  var t = this.toRgb();
  return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
}, getLuminance: function() {
  var t = this.toRgb(), r, n, a, o, s, i;
  return r = t.r / 255, n = t.g / 255, a = t.b / 255, r <= 0.03928 ? o = r / 12.92 : o = Math.pow((r + 0.055) / 1.055, 2.4), n <= 0.03928 ? s = n / 12.92 : s = Math.pow((n + 0.055) / 1.055, 2.4), a <= 0.03928 ? i = a / 12.92 : i = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * o + 0.7152 * s + 0.0722 * i;
}, setAlpha: function(t) {
  return this._a = uo(t), this._roundA = Math.round(100 * this._a) / 100, this;
}, toHsv: function() {
  var t = Jn(this._r, this._g, this._b);
  return { h: t.h * 360, s: t.s, v: t.v, a: this._a };
}, toHsvString: function() {
  var t = Jn(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
  return this._a == 1 ? "hsv(" + r + ", " + n + "%, " + a + "%)" : "hsva(" + r + ", " + n + "%, " + a + "%, " + this._roundA + ")";
}, toHsl: function() {
  var t = Xn(this._r, this._g, this._b);
  return { h: t.h * 360, s: t.s, l: t.l, a: this._a };
}, toHslString: function() {
  var t = Xn(this._r, this._g, this._b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
  return this._a == 1 ? "hsl(" + r + ", " + n + "%, " + a + "%)" : "hsla(" + r + ", " + n + "%, " + a + "%, " + this._roundA + ")";
}, toHex: function(t) {
  return Zn(this._r, this._g, this._b, t);
}, toHexString: function(t) {
  return "#" + this.toHex(t);
}, toHex8: function(t) {
  return Ri(this._r, this._g, this._b, this._a, t);
}, toHex8String: function(t) {
  return "#" + this.toHex8(t);
}, toRgb: function() {
  return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
}, toRgbString: function() {
  return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
}, toPercentageRgb: function() {
  return { r: Math.round(W(this._r, 255) * 100) + "%", g: Math.round(W(this._g, 255) * 100) + "%", b: Math.round(W(this._b, 255) * 100) + "%", a: this._a };
}, toPercentageRgbString: function() {
  return this._a == 1 ? "rgb(" + Math.round(W(this._r, 255) * 100) + "%, " + Math.round(W(this._g, 255) * 100) + "%, " + Math.round(W(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(W(this._r, 255) * 100) + "%, " + Math.round(W(this._g, 255) * 100) + "%, " + Math.round(W(this._b, 255) * 100) + "%, " + this._roundA + ")";
}, toName: function() {
  return this._a === 0 ? "transparent" : this._a < 1 ? false : Ni[Zn(this._r, this._g, this._b, true)] || false;
}, toFilter: function(t) {
  var r = "#" + Qn(this._r, this._g, this._b, this._a), n = r, a = this._gradientType ? "GradientType = 1, " : "";
  if (t) {
    var o = C(t);
    n = "#" + Qn(o._r, o._g, o._b, o._a);
  }
  return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + n + ")";
}, toString: function(t) {
  var r = !!t;
  t = t || this._format;
  var n = false, a = this._a < 1 && this._a >= 0, o = !r && a && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
  return o ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(true)), t === "hex4" && (n = this.toHex8String(true)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
}, clone: function() {
  return C(this.toString());
}, _applyModification: function(t, r) {
  var n = t.apply(null, [this].concat([].slice.call(r)));
  return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
}, lighten: function() {
  return this._applyModification(Pi, arguments);
}, brighten: function() {
  return this._applyModification(Hi, arguments);
}, darken: function() {
  return this._applyModification(ji, arguments);
}, desaturate: function() {
  return this._applyModification($i, arguments);
}, saturate: function() {
  return this._applyModification(Ti, arguments);
}, greyscale: function() {
  return this._applyModification(Mi, arguments);
}, spin: function() {
  return this._applyModification(Li, arguments);
}, _applyCombination: function(t, r) {
  return t.apply(null, [this].concat([].slice.call(r)));
}, analogous: function() {
  return this._applyCombination(Di, arguments);
}, complement: function() {
  return this._applyCombination(Bi, arguments);
}, monochromatic: function() {
  return this._applyCombination(Vi, arguments);
}, splitcomplement: function() {
  return this._applyCombination(Ii, arguments);
}, triad: function() {
  return this._applyCombination(ea, [3]);
}, tetrad: function() {
  return this._applyCombination(ea, [4]);
} };
C.fromRatio = function(e, t) {
  if (ar(e) == "object") {
    var r = {};
    for (var n in e) e.hasOwnProperty(n) && (n === "a" ? r[n] = e[n] : r[n] = Tt(e[n]));
    e = r;
  }
  return C(e, t);
};
function ki(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, s = false, i = false;
  return typeof e == "string" && (e = Ui(e)), ar(e) == "object" && (je(e.r) && je(e.g) && je(e.b) ? (t = Ai(e.r, e.g, e.b), s = true, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : je(e.h) && je(e.s) && je(e.v) ? (n = Tt(e.s), a = Tt(e.v), t = Ei(e.h, n, a), s = true, i = "hsv") : je(e.h) && je(e.s) && je(e.l) && (n = Tt(e.s), o = Tt(e.l), t = Oi(e.h, n, o), s = true, i = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = uo(r), { ok: s, format: e.format || i, r: Math.min(255, Math.max(t.r, 0)), g: Math.min(255, Math.max(t.g, 0)), b: Math.min(255, Math.max(t.b, 0)), a: r };
}
function Ai(e, t, r) {
  return { r: W(e, 255) * 255, g: W(t, 255) * 255, b: W(r, 255) * 255 };
}
function Xn(e, t, r) {
  e = W(e, 255), t = W(t, 255), r = W(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o, s, i = (n + a) / 2;
  if (n == a) o = s = 0;
  else {
    var l = n - a;
    switch (s = i > 0.5 ? l / (2 - n - a) : l / (n + a), n) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, l: i };
}
function Oi(e, t, r) {
  var n, a, o;
  e = W(e, 360), t = W(t, 100), r = W(r, 100);
  function s(c, u, f) {
    return f < 0 && (f += 1), f > 1 && (f -= 1), f < 1 / 6 ? c + (u - c) * 6 * f : f < 1 / 2 ? u : f < 2 / 3 ? c + (u - c) * (2 / 3 - f) * 6 : c;
  }
  if (t === 0) n = a = o = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - i;
    n = s(l, i, e + 1 / 3), a = s(l, i, e), o = s(l, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function Jn(e, t, r) {
  e = W(e, 255), t = W(t, 255), r = W(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o, s, i = n, l = n - a;
  if (s = n === 0 ? 0 : l / n, n == a) o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: i };
}
function Ei(e, t, r) {
  e = W(e, 360) * 6, t = W(t, 100), r = W(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), s = r * (1 - a * t), i = r * (1 - (1 - a) * t), l = n % 6, c = [r, s, o, o, i, r][l], u = [i, r, r, s, o, o][l], f = [o, o, i, r, r, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function Zn(e, t, r, n) {
  var a = [Re(Math.round(e).toString(16)), Re(Math.round(t).toString(16)), Re(Math.round(r).toString(16))];
  return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Ri(e, t, r, n, a) {
  var o = [Re(Math.round(e).toString(16)), Re(Math.round(t).toString(16)), Re(Math.round(r).toString(16)), Re(co(n))];
  return a && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Qn(e, t, r, n) {
  var a = [Re(co(n)), Re(Math.round(e).toString(16)), Re(Math.round(t).toString(16)), Re(Math.round(r).toString(16))];
  return a.join("");
}
C.equals = function(e, t) {
  return !e || !t ? false : C(e).toRgbString() == C(t).toRgbString();
};
C.random = function() {
  return C.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
};
function $i(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toHsl();
  return r.s -= t / 100, r.s = mr(r.s), C(r);
}
function Ti(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toHsl();
  return r.s += t / 100, r.s = mr(r.s), C(r);
}
function Mi(e) {
  return C(e).desaturate(100);
}
function Pi(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toHsl();
  return r.l += t / 100, r.l = mr(r.l), C(r);
}
function Hi(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toRgb();
  return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), C(r);
}
function ji(e, t) {
  t = t === 0 ? 0 : t || 10;
  var r = C(e).toHsl();
  return r.l -= t / 100, r.l = mr(r.l), C(r);
}
function Li(e, t) {
  var r = C(e).toHsl(), n = (r.h + t) % 360;
  return r.h = n < 0 ? 360 + n : n, C(r);
}
function Bi(e) {
  var t = C(e).toHsl();
  return t.h = (t.h + 180) % 360, C(t);
}
function ea(e, t) {
  if (isNaN(t) || t <= 0) throw new Error("Argument to polyad must be a positive number");
  for (var r = C(e).toHsl(), n = [C(e)], a = 360 / t, o = 1; o < t; o++) n.push(C({ h: (r.h + o * a) % 360, s: r.s, l: r.l }));
  return n;
}
function Ii(e) {
  var t = C(e).toHsl(), r = t.h;
  return [C(e), C({ h: (r + 72) % 360, s: t.s, l: t.l }), C({ h: (r + 216) % 360, s: t.s, l: t.l })];
}
function Di(e, t, r) {
  t = t || 6, r = r || 30;
  var n = C(e).toHsl(), a = 360 / r, o = [C(e)];
  for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; ) n.h = (n.h + a) % 360, o.push(C(n));
  return o;
}
function Vi(e, t) {
  t = t || 6;
  for (var r = C(e).toHsv(), n = r.h, a = r.s, o = r.v, s = [], i = 1 / t; t--; ) s.push(C({ h: n, s: a, v: o })), o = (o + i) % 1;
  return s;
}
C.mix = function(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  var n = C(e).toRgb(), a = C(t).toRgb(), o = r / 100, s = { r: (a.r - n.r) * o + n.r, g: (a.g - n.g) * o + n.g, b: (a.b - n.b) * o + n.b, a: (a.a - n.a) * o + n.a };
  return C(s);
};
C.readability = function(e, t) {
  var r = C(e), n = C(t);
  return (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), n.getLuminance()) + 0.05);
};
C.isReadable = function(e, t, r) {
  var n = C.readability(e, t), a, o;
  switch (o = false, a = Ki(r), a.level + a.size) {
    case "AAsmall":
    case "AAAlarge":
      o = n >= 4.5;
      break;
    case "AAlarge":
      o = n >= 3;
      break;
    case "AAAsmall":
      o = n >= 7;
      break;
  }
  return o;
};
C.mostReadable = function(e, t, r) {
  var n = null, a = 0, o, s, i, l;
  r = r || {}, s = r.includeFallbackColors, i = r.level, l = r.size;
  for (var c = 0; c < t.length; c++) o = C.readability(e, t[c]), o > a && (a = o, n = C(t[c]));
  return C.isReadable(e, n, { level: i, size: l }) || !s ? n : (r.includeFallbackColors = false, C.mostReadable(e, ["#fff", "#000"], r));
};
var Yr = C.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, Ni = C.hexNames = Fi(Yr);
function Fi(e) {
  var t = {};
  for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
  return t;
}
function uo(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function W(e, t) {
  Wi(e) && (e = "100%");
  var r = zi(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function mr(e) {
  return Math.min(1, Math.max(0, e));
}
function he(e) {
  return parseInt(e, 16);
}
function Wi(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function zi(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function Re(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Tt(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function co(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ta(e) {
  return he(e) / 255;
}
var Ee = (function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", r = "(?:" + t + ")|(?:" + e + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", a = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return { CSS_UNIT: new RegExp(r), rgb: new RegExp("rgb" + n), rgba: new RegExp("rgba" + a), hsl: new RegExp("hsl" + n), hsla: new RegExp("hsla" + a), hsv: new RegExp("hsv" + n), hsva: new RegExp("hsva" + a), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ };
})();
function je(e) {
  return !!Ee.CSS_UNIT.exec(e);
}
function Ui(e) {
  e = e.replace(Si, "").replace(_i, "").toLowerCase();
  var t = false;
  if (Yr[e]) e = Yr[e], t = true;
  else if (e == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r;
  return (r = Ee.rgb.exec(e)) ? { r: r[1], g: r[2], b: r[3] } : (r = Ee.rgba.exec(e)) ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Ee.hsl.exec(e)) ? { h: r[1], s: r[2], l: r[3] } : (r = Ee.hsla.exec(e)) ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Ee.hsv.exec(e)) ? { h: r[1], s: r[2], v: r[3] } : (r = Ee.hsva.exec(e)) ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Ee.hex8.exec(e)) ? { r: he(r[1]), g: he(r[2]), b: he(r[3]), a: ta(r[4]), format: t ? "name" : "hex8" } : (r = Ee.hex6.exec(e)) ? { r: he(r[1]), g: he(r[2]), b: he(r[3]), format: t ? "name" : "hex" } : (r = Ee.hex4.exec(e)) ? { r: he(r[1] + "" + r[1]), g: he(r[2] + "" + r[2]), b: he(r[3] + "" + r[3]), a: ta(r[4] + "" + r[4]), format: t ? "name" : "hex8" } : (r = Ee.hex3.exec(e)) ? { r: he(r[1] + "" + r[1]), g: he(r[2] + "" + r[2]), b: he(r[3] + "" + r[3]), format: t ? "name" : "hex" } : false;
}
function Ki(e) {
  var t, r;
  return e = e || { level: "AA", size: "small" }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), { level: t, size: r };
}
var Xt = {}, ra;
function Gi() {
  if (ra) return Xt;
  ra = 1;
  var e = e || {};
  e.stringify = /* @__PURE__ */ (function() {
    var t = { "visit_linear-gradient": function(r) {
      return t.visit_gradient(r);
    }, "visit_repeating-linear-gradient": function(r) {
      return t.visit_gradient(r);
    }, "visit_radial-gradient": function(r) {
      return t.visit_gradient(r);
    }, "visit_repeating-radial-gradient": function(r) {
      return t.visit_gradient(r);
    }, visit_gradient: function(r) {
      var n = t.visit(r.orientation);
      return n && (n += ", "), r.type + "(" + n + t.visit(r.colorStops) + ")";
    }, visit_shape: function(r) {
      var n = r.value, a = t.visit(r.at), o = t.visit(r.style);
      return o && (n += " " + o), a && (n += " at " + a), n;
    }, "visit_default-radial": function(r) {
      var n = "", a = t.visit(r.at);
      return a && (n += a), n;
    }, "visit_extent-keyword": function(r) {
      var n = r.value, a = t.visit(r.at);
      return a && (n += " at " + a), n;
    }, "visit_position-keyword": function(r) {
      return r.value;
    }, visit_position: function(r) {
      return t.visit(r.value.x) + " " + t.visit(r.value.y);
    }, "visit_%": function(r) {
      return r.value + "%";
    }, visit_em: function(r) {
      return r.value + "em";
    }, visit_px: function(r) {
      return r.value + "px";
    }, visit_calc: function(r) {
      return "calc(" + r.value + ")";
    }, visit_literal: function(r) {
      return t.visit_color(r.value, r);
    }, visit_hex: function(r) {
      return t.visit_color("#" + r.value, r);
    }, visit_rgb: function(r) {
      return t.visit_color("rgb(" + r.value.join(", ") + ")", r);
    }, visit_rgba: function(r) {
      return t.visit_color("rgba(" + r.value.join(", ") + ")", r);
    }, visit_hsl: function(r) {
      return t.visit_color("hsl(" + r.value[0] + ", " + r.value[1] + "%, " + r.value[2] + "%)", r);
    }, visit_hsla: function(r) {
      return t.visit_color("hsla(" + r.value[0] + ", " + r.value[1] + "%, " + r.value[2] + "%, " + r.value[3] + ")", r);
    }, visit_var: function(r) {
      return t.visit_color("var(" + r.value + ")", r);
    }, visit_color: function(r, n) {
      var a = r, o = t.visit(n.length);
      return o && (a += " " + o), a;
    }, visit_angular: function(r) {
      return r.value + "deg";
    }, visit_directional: function(r) {
      return "to " + r.value;
    }, visit_array: function(r) {
      var n = "", a = r.length;
      return r.forEach(function(o, s) {
        n += t.visit(o), s < a - 1 && (n += ", ");
      }), n;
    }, visit_object: function(r) {
      return r.width && r.height ? t.visit(r.width) + " " + t.visit(r.height) : "";
    }, visit: function(r) {
      if (!r) return "";
      if (r instanceof Array) return t.visit_array(r);
      if (typeof r == "object" && !r.type) return t.visit_object(r);
      if (r.type) {
        var n = t["visit_" + r.type];
        if (n) return n(r);
        throw Error("Missing visitor visit_" + r.type);
      } else throw Error("Invalid node.");
    } };
    return function(r) {
      return t.visit(r);
    };
  })();
  var e = e || {};
  return e.parse = /* @__PURE__ */ (function() {
    var t = { linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i, repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i, radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i, repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i, sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i, extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/, positionKeywords: /^(left|center|right|top|bottom)/i, pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/, percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/, emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/, angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/, radianValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))rad/, startCall: /^\(/, endCall: /^\)/, comma: /^,/, hexColor: /^\#([0-9a-fA-F]+)/, literalColor: /^([a-zA-Z]+)/, rgbColor: /^rgb/i, rgbaColor: /^rgba/i, varColor: /^var/i, calcValue: /^calc/i, variableName: /^(--[a-zA-Z0-9-,\s\#]+)/, number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/, hslColor: /^hsl/i, hslaColor: /^hsla/i }, r = "";
    function n(S) {
      var O = new Error(r + ": " + S);
      throw O.source = r, O;
    }
    function a() {
      var S = o();
      return r.length > 0 && n("Invalid input not EOF"), S;
    }
    function o() {
      return w(s);
    }
    function s() {
      return i("linear-gradient", t.linearGradient, c) || i("repeating-linear-gradient", t.repeatingLinearGradient, c) || i("radial-gradient", t.radialGradient, d) || i("repeating-radial-gradient", t.repeatingRadialGradient, d);
    }
    function i(S, O, M) {
      return l(O, function(U) {
        var ce = M();
        return ce && (V(t.comma) || n("Missing comma before color stops")), { type: S, orientation: ce, colorStops: w(A) };
      });
    }
    function l(S, O) {
      var M = V(S);
      if (M) {
        V(t.startCall) || n("Missing (");
        var U = O(M);
        return V(t.endCall) || n("Missing )"), U;
      }
    }
    function c() {
      var S = u();
      if (S) return S;
      var O = Y("position-keyword", t.positionKeywords, 1);
      return O ? { type: "directional", value: O.value } : f();
    }
    function u() {
      return Y("directional", t.sideOrCorner, 1);
    }
    function f() {
      return Y("angular", t.angleValue, 1) || Y("angular", t.radianValue, 1);
    }
    function d() {
      var S, O = p(), M;
      return O && (S = [], S.push(O), M = r, V(t.comma) && (O = p(), O ? S.push(O) : r = M)), S;
    }
    function p() {
      var S = y() || v();
      if (S) S.at = h();
      else {
        var O = g();
        if (O) {
          S = O;
          var M = h();
          M && (S.at = M);
        } else {
          var U = h();
          if (U) S = { type: "default-radial", at: U };
          else {
            var ce = b();
            ce && (S = { type: "default-radial", at: ce });
          }
        }
      }
      return S;
    }
    function y() {
      var S = Y("shape", /^(circle)/i, 0);
      return S && (S.style = be() || g()), S;
    }
    function v() {
      var S = Y("shape", /^(ellipse)/i, 0);
      return S && (S.style = b() || q() || g()), S;
    }
    function g() {
      return Y("extent-keyword", t.extentKeywords, 1);
    }
    function h() {
      if (Y("position", /^at/, 0)) {
        var S = b();
        return S || n("Missing positioning value"), S;
      }
    }
    function b() {
      var S = x();
      if (S.x || S.y) return { type: "position", value: S };
    }
    function x() {
      return { x: q(), y: q() };
    }
    function w(S) {
      var O = S(), M = [];
      if (O) for (M.push(O); V(t.comma); ) O = S(), O ? M.push(O) : n("One extra comma");
      return M;
    }
    function A() {
      var S = k();
      return S || n("Expected color definition"), S.length = q(), S;
    }
    function k() {
      return j() || P() || R() || I() || H() || m() || T();
    }
    function T() {
      return Y("literal", t.literalColor, 0);
    }
    function j() {
      return Y("hex", t.hexColor, 1);
    }
    function H() {
      return l(t.rgbColor, function() {
        return { type: "rgb", value: w(B) };
      });
    }
    function I() {
      return l(t.rgbaColor, function() {
        return { type: "rgba", value: w(B) };
      });
    }
    function m() {
      return l(t.varColor, function() {
        return { type: "var", value: D() };
      });
    }
    function R() {
      return l(t.hslColor, function() {
        var S = V(t.percentageValue);
        S && n("HSL hue value must be a number in degrees (0-360) or normalized (-360 to 360), not a percentage");
        var O = B();
        V(t.comma);
        var M = V(t.percentageValue), U = M ? M[1] : null;
        V(t.comma), M = V(t.percentageValue);
        var ce = M ? M[1] : null;
        return (!U || !ce) && n("Expected percentage value for saturation and lightness in HSL"), { type: "hsl", value: [O, U, ce] };
      });
    }
    function P() {
      return l(t.hslaColor, function() {
        var S = B();
        V(t.comma);
        var O = V(t.percentageValue), M = O ? O[1] : null;
        V(t.comma), O = V(t.percentageValue);
        var U = O ? O[1] : null;
        V(t.comma);
        var ce = B();
        return (!M || !U) && n("Expected percentage value for saturation and lightness in HSLA"), { type: "hsla", value: [S, M, U, ce] };
      });
    }
    function D() {
      return V(t.variableName)[1];
    }
    function B() {
      return V(t.number)[1];
    }
    function q() {
      return Y("%", t.percentageValue, 1) || oe() || Fe() || be();
    }
    function oe() {
      return Y("position-keyword", t.positionKeywords, 1);
    }
    function Fe() {
      return l(t.calcValue, function() {
        for (var S = 1, O = 0; S > 0 && O < r.length; ) {
          var M = r.charAt(O);
          M === "(" ? S++ : M === ")" && S--, O++;
        }
        S > 0 && n("Missing closing parenthesis in calc() expression");
        var U = r.substring(0, O - 1);
        return Oe(O - 1), { type: "calc", value: U };
      });
    }
    function be() {
      return Y("px", t.pixelValue, 1) || Y("em", t.emValue, 1);
    }
    function Y(S, O, M) {
      var U = V(O);
      if (U) return { type: S, value: U[M] };
    }
    function V(S) {
      var O, M;
      return M = /^[\n\r\t\s]+/.exec(r), M && Oe(M[0].length), O = S.exec(r), O && Oe(O[0].length), O;
    }
    function Oe(S) {
      r = r.substr(S);
    }
    return function(S) {
      return r = S.toString().trim(), r.endsWith(";") && (r = r.slice(0, -1)), a();
    };
  })(), Xt.parse = e.parse, Xt.stringify = e.stringify, Xt;
}
var na = Gi(), de = "top", _e = "bottom", ke = "right", pe = "left", sn = "auto", Ut = [de, _e, ke, pe], ft = "start", Nt = "end", qi = "clippingParents", fo = "viewport", Ot = "popper", Yi = "reference", aa = Ut.reduce(function(e, t) {
  return e.concat([t + "-" + ft, t + "-" + Nt]);
}, []), po = [].concat(Ut, [sn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ft, t + "-" + Nt]);
}, []), Xi = "beforeRead", Ji = "read", Zi = "afterRead", Qi = "beforeMain", el = "main", tl = "afterMain", rl = "beforeWrite", nl = "write", al = "afterWrite", ol = [Xi, Ji, Zi, Qi, el, tl, rl, nl, al];
function He(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ve(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ze(e) {
  var t = ve(e).Element;
  return e instanceof t || e instanceof Element;
}
function xe(e) {
  var t = ve(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function un(e) {
  if (typeof ShadowRoot > "u") return false;
  var t = ve(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function il(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, o = t.elements[r];
    !xe(o) || !He(o) || (Object.assign(o.style, n), Object.keys(a).forEach(function(s) {
      var i = a[s];
      i === false ? o.removeAttribute(s) : o.setAttribute(s, i === true ? "" : i);
    }));
  });
}
function ll(e) {
  var t = e.state, r = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], o = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !xe(a) || !He(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const sl = { name: "applyStyles", enabled: true, phase: "write", fn: il, effect: ll, requires: ["computeStyles"] };
function Me(e) {
  return e.split("-")[0];
}
var Xe = Math.max, or = Math.min, dt = Math.round;
function Xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ho() {
  return !/^((?!chrome|android).)*safari/i.test(Xr());
}
function pt(e, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e.getBoundingClientRect(), a = 1, o = 1;
  t && xe(e) && (a = e.offsetWidth > 0 && dt(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && dt(n.height) / e.offsetHeight || 1);
  var s = Ze(e) ? ve(e) : window, i = s.visualViewport, l = !ho() && r, c = (n.left + (l && i ? i.offsetLeft : 0)) / a, u = (n.top + (l && i ? i.offsetTop : 0)) / o, f = n.width / a, d = n.height / o;
  return { width: f, height: d, top: u, right: c + f, bottom: u + d, left: c, x: c, y: u };
}
function cn(e) {
  var t = pt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: n };
}
function go(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return true;
  if (r && un(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function De(e) {
  return ve(e).getComputedStyle(e);
}
function ul(e) {
  return ["table", "td", "th"].indexOf(He(e)) >= 0;
}
function Ke(e) {
  return ((Ze(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function br(e) {
  return He(e) === "html" ? e : e.assignedSlot || e.parentNode || (un(e) ? e.host : null) || Ke(e);
}
function oa(e) {
  return !xe(e) || De(e).position === "fixed" ? null : e.offsetParent;
}
function cl(e) {
  var t = /firefox/i.test(Xr()), r = /Trident/i.test(Xr());
  if (r && xe(e)) {
    var n = De(e);
    if (n.position === "fixed") return null;
  }
  var a = br(e);
  for (un(a) && (a = a.host); xe(a) && ["html", "body"].indexOf(He(a)) < 0; ) {
    var o = De(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return a;
    a = a.parentNode;
  }
  return null;
}
function Kt(e) {
  for (var t = ve(e), r = oa(e); r && ul(r) && De(r).position === "static"; ) r = oa(r);
  return r && (He(r) === "html" || He(r) === "body" && De(r).position === "static") ? t : r || cl(e) || t;
}
function fn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ht(e, t, r) {
  return Xe(e, or(t, r));
}
function fl(e, t, r) {
  var n = Ht(e, t, r);
  return n > r ? r : n;
}
function vo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function yo(e) {
  return Object.assign({}, vo(), e);
}
function mo(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var dl = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t, yo(typeof t != "number" ? t : mo(t, Ut));
};
function pl(e) {
  var t, r = e.state, n = e.name, a = e.options, o = r.elements.arrow, s = r.modifiersData.popperOffsets, i = Me(r.placement), l = fn(i), c = [pe, ke].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!o || !s)) {
    var f = dl(a.padding, r), d = cn(o), p = l === "y" ? de : pe, y = l === "y" ? _e : ke, v = r.rects.reference[u] + r.rects.reference[l] - s[l] - r.rects.popper[u], g = s[l] - r.rects.reference[l], h = Kt(o), b = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, x = v / 2 - g / 2, w = f[p], A = b - d[u] - f[y], k = b / 2 - d[u] / 2 + x, T = Ht(w, k, A), j = l;
    r.modifiersData[n] = (t = {}, t[j] = T, t.centerOffset = T - k, t);
  }
}
function hl(e) {
  var t = e.state, r = e.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || go(t.elements.popper, a) && (t.elements.arrow = a));
}
const gl = { name: "arrow", enabled: true, phase: "main", fn: pl, effect: hl, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ht(e) {
  return e.split("-")[1];
}
var vl = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function yl(e, t) {
  var r = e.x, n = e.y, a = t.devicePixelRatio || 1;
  return { x: dt(r * a) / a || 0, y: dt(n * a) / a || 0 };
}
function ia(e) {
  var t, r = e.popper, n = e.popperRect, a = e.placement, o = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, d = s.x, p = d === void 0 ? 0 : d, y = s.y, v = y === void 0 ? 0 : y, g = typeof u == "function" ? u({ x: p, y: v }) : { x: p, y: v };
  p = g.x, v = g.y;
  var h = s.hasOwnProperty("x"), b = s.hasOwnProperty("y"), x = pe, w = de, A = window;
  if (c) {
    var k = Kt(r), T = "clientHeight", j = "clientWidth";
    if (k === ve(r) && (k = Ke(r), De(k).position !== "static" && i === "absolute" && (T = "scrollHeight", j = "scrollWidth")), k = k, a === de || (a === pe || a === ke) && o === Nt) {
      w = _e;
      var H = f && k === A && A.visualViewport ? A.visualViewport.height : k[T];
      v -= H - n.height, v *= l ? 1 : -1;
    }
    if (a === pe || (a === de || a === _e) && o === Nt) {
      x = ke;
      var I = f && k === A && A.visualViewport ? A.visualViewport.width : k[j];
      p -= I - n.width, p *= l ? 1 : -1;
    }
  }
  var m = Object.assign({ position: i }, c && vl), R = u === true ? yl({ x: p, y: v }, ve(r)) : { x: p, y: v };
  if (p = R.x, v = R.y, l) {
    var P;
    return Object.assign({}, m, (P = {}, P[w] = b ? "0" : "", P[x] = h ? "0" : "", P.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", P));
  }
  return Object.assign({}, m, (t = {}, t[w] = b ? v + "px" : "", t[x] = h ? p + "px" : "", t.transform = "", t));
}
function ml(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, a = n === void 0 ? true : n, o = r.adaptive, s = o === void 0 ? true : o, i = r.roundOffsets, l = i === void 0 ? true : i, c = { placement: Me(t.placement), variation: ht(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ia(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ia(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
const bl = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: ml, data: {} };
var Jt = { passive: true };
function Cl(e) {
  var t = e.state, r = e.instance, n = e.options, a = n.scroll, o = a === void 0 ? true : a, s = n.resize, i = s === void 0 ? true : s, l = ve(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Jt);
  }), i && l.addEventListener("resize", r.update, Jt), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Jt);
    }), i && l.removeEventListener("resize", r.update, Jt);
  };
}
const xl = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: Cl, data: {} };
var wl = { left: "right", right: "left", bottom: "top", top: "bottom" };
function tr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wl[t];
  });
}
var Sl = { start: "end", end: "start" };
function la(e) {
  return e.replace(/start|end/g, function(t) {
    return Sl[t];
  });
}
function dn(e) {
  var t = ve(e), r = t.pageXOffset, n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function pn(e) {
  return pt(Ke(e)).left + dn(e).scrollLeft;
}
function _l(e, t) {
  var r = ve(e), n = Ke(e), a = r.visualViewport, o = n.clientWidth, s = n.clientHeight, i = 0, l = 0;
  if (a) {
    o = a.width, s = a.height;
    var c = ho();
    (c || !c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return { width: o, height: s, x: i + pn(e), y: l };
}
function kl(e) {
  var t, r = Ke(e), n = dn(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = Xe(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = Xe(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -n.scrollLeft + pn(e), l = -n.scrollTop;
  return De(a || r).direction === "rtl" && (i += Xe(r.clientWidth, a ? a.clientWidth : 0) - o), { width: o, height: s, x: i, y: l };
}
function hn(e) {
  var t = De(e), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function bo(e) {
  return ["html", "body", "#document"].indexOf(He(e)) >= 0 ? e.ownerDocument.body : xe(e) && hn(e) ? e : bo(br(e));
}
function jt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = bo(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = ve(n), s = a ? [o].concat(o.visualViewport || [], hn(n) ? n : []) : n, i = t.concat(s);
  return a ? i : i.concat(jt(br(s)));
}
function Jr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Al(e, t) {
  var r = pt(e, false, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function sa(e, t, r) {
  return t === fo ? Jr(_l(e, r)) : Ze(t) ? Al(t, r) : Jr(kl(Ke(e)));
}
function Ol(e) {
  var t = jt(br(e)), r = ["absolute", "fixed"].indexOf(De(e).position) >= 0, n = r && xe(e) ? Kt(e) : e;
  return Ze(n) ? t.filter(function(a) {
    return Ze(a) && go(a, n) && He(a) !== "body";
  }) : [];
}
function El(e, t, r, n) {
  var a = t === "clippingParents" ? Ol(e) : [].concat(t), o = [].concat(a, [r]), s = o[0], i = o.reduce(function(l, c) {
    var u = sa(e, c, n);
    return l.top = Xe(u.top, l.top), l.right = or(u.right, l.right), l.bottom = or(u.bottom, l.bottom), l.left = Xe(u.left, l.left), l;
  }, sa(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Co(e) {
  var t = e.reference, r = e.element, n = e.placement, a = n ? Me(n) : null, o = n ? ht(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
  switch (a) {
    case de:
      l = { x: s, y: t.y - r.height };
      break;
    case _e:
      l = { x: s, y: t.y + t.height };
      break;
    case ke:
      l = { x: t.x + t.width, y: i };
      break;
    case pe:
      l = { x: t.x - r.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = a ? fn(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case ft:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Nt:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Ft(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e.placement : n, o = r.strategy, s = o === void 0 ? e.strategy : o, i = r.boundary, l = i === void 0 ? qi : i, c = r.rootBoundary, u = c === void 0 ? fo : c, f = r.elementContext, d = f === void 0 ? Ot : f, p = r.altBoundary, y = p === void 0 ? false : p, v = r.padding, g = v === void 0 ? 0 : v, h = yo(typeof g != "number" ? g : mo(g, Ut)), b = d === Ot ? Yi : Ot, x = e.rects.popper, w = e.elements[y ? b : d], A = El(Ze(w) ? w : w.contextElement || Ke(e.elements.popper), l, u, s), k = pt(e.elements.reference), T = Co({ reference: k, element: x, placement: a }), j = Jr(Object.assign({}, x, T)), H = d === Ot ? j : k, I = { top: A.top - H.top + h.top, bottom: H.bottom - A.bottom + h.bottom, left: A.left - H.left + h.left, right: H.right - A.right + h.right }, m = e.modifiersData.offset;
  if (d === Ot && m) {
    var R = m[a];
    Object.keys(I).forEach(function(P) {
      var D = [ke, _e].indexOf(P) >= 0 ? 1 : -1, B = [de, _e].indexOf(P) >= 0 ? "y" : "x";
      I[P] += R[B] * D;
    });
  }
  return I;
}
function Rl(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, o = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? po : l, u = ht(n), f = u ? i ? aa : aa.filter(function(y) {
    return ht(y) === u;
  }) : Ut, d = f.filter(function(y) {
    return c.indexOf(y) >= 0;
  });
  d.length === 0 && (d = f);
  var p = d.reduce(function(y, v) {
    return y[v] = Ft(e, { placement: v, boundary: a, rootBoundary: o, padding: s })[Me(v)], y;
  }, {});
  return Object.keys(p).sort(function(y, v) {
    return p[y] - p[v];
  });
}
function $l(e) {
  if (Me(e) === sn) return [];
  var t = tr(e);
  return [la(e), t, la(t)];
}
function Tl(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? true : a, s = r.altAxis, i = s === void 0 ? true : s, l = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, d = r.altBoundary, p = r.flipVariations, y = p === void 0 ? true : p, v = r.allowedAutoPlacements, g = t.options.placement, h = Me(g), b = h === g, x = l || (b || !y ? [tr(g)] : $l(g)), w = [g].concat(x).reduce(function(O, M) {
      return O.concat(Me(M) === sn ? Rl(t, { placement: M, boundary: u, rootBoundary: f, padding: c, flipVariations: y, allowedAutoPlacements: v }) : M);
    }, []), A = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), j = true, H = w[0], I = 0; I < w.length; I++) {
      var m = w[I], R = Me(m), P = ht(m) === ft, D = [de, _e].indexOf(R) >= 0, B = D ? "width" : "height", q = Ft(t, { placement: m, boundary: u, rootBoundary: f, altBoundary: d, padding: c }), oe = D ? P ? ke : pe : P ? _e : de;
      A[B] > k[B] && (oe = tr(oe));
      var Fe = tr(oe), be = [];
      if (o && be.push(q[R] <= 0), i && be.push(q[oe] <= 0, q[Fe] <= 0), be.every(function(O) {
        return O;
      })) {
        H = m, j = false;
        break;
      }
      T.set(m, be);
    }
    if (j) for (var Y = y ? 3 : 1, V = function(M) {
      var U = w.find(function(ce) {
        var Ge = T.get(ce);
        if (Ge) return Ge.slice(0, M).every(function(Ar) {
          return Ar;
        });
      });
      if (U) return H = U, "break";
    }, Oe = Y; Oe > 0; Oe--) {
      var S = V(Oe);
      if (S === "break") break;
    }
    t.placement !== H && (t.modifiersData[n]._skip = true, t.placement = H, t.reset = true);
  }
}
const Ml = { name: "flip", enabled: true, phase: "main", fn: Tl, requiresIfExists: ["offset"], data: { _skip: false } };
function ua(e, t, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - t.height - r.y, right: e.right - t.width + r.x, bottom: e.bottom - t.height + r.y, left: e.left - t.width - r.x };
}
function ca(e) {
  return [de, ke, _e, pe].some(function(t) {
    return e[t] >= 0;
  });
}
function Pl(e) {
  var t = e.state, r = e.name, n = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, s = Ft(t, { elementContext: "reference" }), i = Ft(t, { altBoundary: true }), l = ua(s, n), c = ua(i, a, o), u = ca(l), f = ca(c);
  t.modifiersData[r] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": f });
}
const Hl = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Pl };
function jl(e, t, r) {
  var n = Me(e), a = [pe, de].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r, s = o[0], i = o[1];
  return s = s || 0, i = (i || 0) * a, [pe, ke].indexOf(n) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Ll(e) {
  var t = e.state, r = e.options, n = e.name, a = r.offset, o = a === void 0 ? [0, 0] : a, s = po.reduce(function(u, f) {
    return u[f] = jl(f, t.rects, o), u;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = s;
}
const Bl = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Ll };
function Il(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Co({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
const Dl = { name: "popperOffsets", enabled: true, phase: "read", fn: Il, data: {} };
function Vl(e) {
  return e === "x" ? "y" : "x";
}
function Nl(e) {
  var t = e.state, r = e.options, n = e.name, a = r.mainAxis, o = a === void 0 ? true : a, s = r.altAxis, i = s === void 0 ? false : s, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, f = r.padding, d = r.tether, p = d === void 0 ? true : d, y = r.tetherOffset, v = y === void 0 ? 0 : y, g = Ft(t, { boundary: l, rootBoundary: c, padding: f, altBoundary: u }), h = Me(t.placement), b = ht(t.placement), x = !b, w = fn(h), A = Vl(w), k = t.modifiersData.popperOffsets, T = t.rects.reference, j = t.rects.popper, H = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, I = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), m = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, R = { x: 0, y: 0 };
  if (k) {
    if (o) {
      var P, D = w === "y" ? de : pe, B = w === "y" ? _e : ke, q = w === "y" ? "height" : "width", oe = k[w], Fe = oe + g[D], be = oe - g[B], Y = p ? -j[q] / 2 : 0, V = b === ft ? T[q] : j[q], Oe = b === ft ? -j[q] : -T[q], S = t.elements.arrow, O = p && S ? cn(S) : { width: 0, height: 0 }, M = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vo(), U = M[D], ce = M[B], Ge = Ht(0, T[q], O[q]), Ar = x ? T[q] / 2 - Y - Ge - U - I.mainAxis : V - Ge - U - I.mainAxis, ii = x ? -T[q] / 2 + Y + Ge + ce + I.mainAxis : Oe + Ge + ce + I.mainAxis, Or = t.elements.arrow && Kt(t.elements.arrow), li = Or ? w === "y" ? Or.clientTop || 0 : Or.clientLeft || 0 : 0, Dn = (P = m == null ? void 0 : m[w]) != null ? P : 0, si = oe + Ar - Dn - li, ui = oe + ii - Dn, Vn = Ht(p ? or(Fe, si) : Fe, oe, p ? Xe(be, ui) : be);
      k[w] = Vn, R[w] = Vn - oe;
    }
    if (i) {
      var Nn, ci = w === "x" ? de : pe, fi = w === "x" ? _e : ke, qe = k[A], Yt = A === "y" ? "height" : "width", Fn = qe + g[ci], Wn = qe - g[fi], Er = [de, pe].indexOf(h) !== -1, zn = (Nn = m == null ? void 0 : m[A]) != null ? Nn : 0, Un = Er ? Fn : qe - T[Yt] - j[Yt] - zn + I.altAxis, Kn = Er ? qe + T[Yt] + j[Yt] - zn - I.altAxis : Wn, Gn = p && Er ? fl(Un, qe, Kn) : Ht(p ? Un : Fn, qe, p ? Kn : Wn);
      k[A] = Gn, R[A] = Gn - qe;
    }
    t.modifiersData[n] = R;
  }
}
const Fl = { name: "preventOverflow", enabled: true, phase: "main", fn: Nl, requiresIfExists: ["offset"] };
function Wl(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function zl(e) {
  return e === ve(e) || !xe(e) ? dn(e) : Wl(e);
}
function Ul(e) {
  var t = e.getBoundingClientRect(), r = dt(t.width) / e.offsetWidth || 1, n = dt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Kl(e, t, r) {
  r === void 0 && (r = false);
  var n = xe(t), a = xe(t) && Ul(t), o = Ke(t), s = pt(e, a, r), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (n || !n && !r) && ((He(t) !== "body" || hn(o)) && (i = zl(t)), xe(t) ? (l = pt(t, true), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = pn(o))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function Gl(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(i) {
      if (!r.has(i)) {
        var l = t.get(i);
        l && a(l);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || a(o);
  }), n;
}
function ql(e) {
  var t = Gl(e);
  return ol.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function Yl(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Xl(e) {
  var t = e.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var fa = { placement: "bottom", modifiers: [], strategy: "absolute" };
function da() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Jl(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, o = a === void 0 ? fa : a;
  return function(i, l, c) {
    c === void 0 && (c = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, fa, o), modifiersData: {}, elements: { reference: i, popper: l }, attributes: {}, styles: {} }, f = [], d = false, p = { state: u, setOptions: function(h) {
      var b = typeof h == "function" ? h(u.options) : h;
      v(), u.options = Object.assign({}, o, u.options, b), u.scrollParents = { reference: Ze(i) ? jt(i) : i.contextElement ? jt(i.contextElement) : [], popper: jt(l) };
      var x = ql(Xl([].concat(n, u.options.modifiers)));
      return u.orderedModifiers = x.filter(function(w) {
        return w.enabled;
      }), y(), p.update();
    }, forceUpdate: function() {
      if (!d) {
        var h = u.elements, b = h.reference, x = h.popper;
        if (da(b, x)) {
          u.rects = { reference: Kl(b, Kt(x), u.options.strategy === "fixed"), popper: cn(x) }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(I) {
            return u.modifiersData[I.name] = Object.assign({}, I.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === true) {
              u.reset = false, w = -1;
              continue;
            }
            var A = u.orderedModifiers[w], k = A.fn, T = A.options, j = T === void 0 ? {} : T, H = A.name;
            typeof k == "function" && (u = k({ state: u, options: j, name: H, instance: p }) || u);
          }
        }
      }
    }, update: Yl(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      v(), d = true;
    } };
    if (!da(i, l)) return p;
    p.setOptions(c).then(function(g) {
      !d && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function y() {
      u.orderedModifiers.forEach(function(g) {
        var h = g.name, b = g.options, x = b === void 0 ? {} : b, w = g.effect;
        if (typeof w == "function") {
          var A = w({ state: u, name: h, instance: p, options: x }), k = function() {
          };
          f.push(A || k);
        }
      });
    }
    function v() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return p;
  };
}
var Zl = [xl, Dl, bl, sl, Bl, Ml, Fl, gl, Hl], Ql = Jl({ defaultModifiers: Zl });
/*!
* is-plain-object <https://github.com/jonschlinkert/is-plain-object>
*
* Copyright (c) 2014-2017, Jon Schlinkert.
* Released under the MIT License.
*/
function pa(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function es(e) {
  var t, r;
  return pa(e) === false ? false : (t = e.constructor, t === void 0 ? true : (r = t.prototype, !(pa(r) === false || r.hasOwnProperty("isPrototypeOf") === false)));
}
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
function xo(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e[n];
  }
  return r;
}
const ts = { silent: false, logLevel: "warn" }, rs = ["validator"], wo = Object.prototype, So = wo.toString, ns = wo.hasOwnProperty, _o = /^\s*function (\w+)/;
function ha(e) {
  var t;
  const r = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (r) {
    const n = r.toString().match(_o);
    return n ? n[1] : "";
  }
  return "";
}
const Qe = es;
function as() {
}
let ee = as;
const gt = (e, t) => ns.call(e, t), os = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, vt = Array.isArray || function(e) {
  return So.call(e) === "[object Array]";
}, yt = (e) => So.call(e) === "[object Function]", ir = (e, t) => Qe(e) && gt(e, "_vueTypes_name") && (!t || e._vueTypes_name === t), ko = (e) => Qe(e) && (gt(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t) => gt(e, t)));
function gn(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function tt(e, t, r = false) {
  let n, a = true, o = "";
  n = Qe(e) ? e : { type: e };
  const s = ir(n) ? n._vueTypes_name + " - " : "";
  if (ko(n) && n.type !== null) {
    if (n.type === void 0 || n.type === true || !n.required && t == null) return a;
    vt(n.type) ? (a = n.type.some((i) => tt(i, t, true) === true), o = n.type.map((i) => ha(i)).join(" or ")) : (o = ha(n), a = o === "Array" ? vt(t) : o === "Object" ? Qe(t) : o === "String" || o === "Number" || o === "Boolean" || o === "Function" ? (function(i) {
      if (i == null) return "";
      const l = i.constructor.toString().match(_o);
      return l ? l[1].replace(/^Async/, "") : "";
    })(t) === o : t instanceof n.type);
  }
  if (!a) {
    const i = `${s}value "${t}" should be of type "${o}"`;
    return r === false ? (ee(i), false) : i;
  }
  if (gt(n, "validator") && yt(n.validator)) {
    const i = ee, l = [];
    if (ee = (c) => {
      l.push(c);
    }, a = n.validator(t), ee = i, !a) {
      const c = (l.length > 1 ? "* " : "") + l.join(`
* `);
      return l.length = 0, r === false ? (ee(c), a) : c;
    }
  }
  return a;
}
function ge(e, t) {
  const r = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: true }, isRequired: { get() {
    return this.required = true, this;
  } }, def: { value(a) {
    return a === void 0 ? this.type === Boolean || Array.isArray(this.type) && this.type.includes(Boolean) ? void (this.default = void 0) : (gt(this, "default") && delete this.default, this) : yt(a) || tt(this, a, true) === true ? (this.default = vt(a) ? () => [...a] : Qe(a) ? () => Object.assign({}, a) : a, this) : (ee(`${this._vueTypes_name} - invalid default value: "${a}"`), this);
  } } }), { validator: n } = r;
  return yt(n) && (r.validator = gn(n, r)), r;
}
function Pe(e, t) {
  const r = ge(e, t);
  return Object.defineProperty(r, "validate", { value(n) {
    return yt(this.validator) && ee(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = gn(n, this), this;
  } });
}
function ga(e, t, r) {
  const n = (function(l) {
    const c = {};
    return Object.getOwnPropertyNames(l).forEach((u) => {
      c[u] = Object.getOwnPropertyDescriptor(l, u);
    }), Object.defineProperties({}, c);
  })(t);
  if (n._vueTypes_name = e, !Qe(r)) return n;
  const { validator: a } = r, o = xo(r, rs);
  if (yt(a)) {
    let { validator: l } = n;
    l && (l = (i = (s = l).__original) !== null && i !== void 0 ? i : s), n.validator = gn(l ? function(c) {
      return l.call(this, c) && a.call(this, c);
    } : a, n);
  }
  var s, i;
  return Object.assign(n, o);
}
function Cr(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
const is = () => Pe("any", {}), ls = () => Pe("function", { type: Function }), va = () => Pe("boolean", { type: Boolean }), ss = () => Pe("string", { type: String }), us = () => Pe("number", { type: Number }), cs = () => Pe("array", { type: Array }), fs = () => Pe("object", { type: Object }), ds = () => ge("integer", { type: Number, validator(e) {
  const t = os(e);
  return t === false && ee(`integer - "${e}" is not an integer`), t;
} }), ps = () => ge("symbol", { validator(e) {
  const t = typeof e == "symbol";
  return t === false && ee(`symbol - invalid value "${e}"`), t;
} }), hs = () => Object.defineProperty({ type: null, validator(e) {
  const t = e === null;
  return t === false && ee("nullable - value should be null"), t;
} }, "_vueTypes_name", { value: "nullable" });
function gs(e, t = "custom validation failed") {
  if (typeof e != "function") throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return ge(e.name || "<<anonymous function>>", { type: null, validator(r) {
    const n = e(r);
    return n || ee(`${this._vueTypes_name} - ${t}`), n;
  } });
}
function vs(e) {
  if (!vt(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  const t = `oneOf - value should be one of "${e.map((n) => typeof n == "symbol" ? n.toString() : n).join('", "')}".`, r = { validator(n) {
    const a = e.indexOf(n) !== -1;
    return a || ee(t), a;
  } };
  if (e.indexOf(null) === -1) {
    const n = e.reduce((a, o) => {
      if (o != null) {
        const s = o.constructor;
        a.indexOf(s) === -1 && a.push(s);
      }
      return a;
    }, []);
    n.length > 0 && (r.type = n);
  }
  return ge("oneOf", r);
}
function ys(e) {
  if (!vt(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let t = false, r = false, n = [];
  for (let o = 0; o < e.length; o += 1) {
    const s = e[o];
    if (ko(s)) {
      if (yt(s.validator) && (t = true), ir(s, "oneOf") && s.type) {
        n = n.concat(s.type);
        continue;
      }
      if (ir(s, "nullable")) {
        r = true;
        continue;
      }
      if (s.type === true || !s.type) {
        ee('oneOfType - invalid usage of "true" and "null" as types.');
        continue;
      }
      n = n.concat(s.type);
    } else n.push(s);
  }
  n = n.filter((o, s) => n.indexOf(o) === s);
  const a = r === false && n.length > 0 ? n : null;
  return ge("oneOfType", t ? { type: a, validator(o) {
    const s = [], i = e.some((l) => {
      const c = tt(l, o, true);
      return typeof c == "string" && s.push(c), c === true;
    });
    return i || ee(`oneOfType - provided value does not match any of the ${s.length} passed-in validators:
${Cr(s.join(`
`))}`), i;
  } } : { type: a });
}
function ms(e) {
  return ge("arrayOf", { type: Array, validator(t) {
    let r = "";
    const n = t.every((a) => (r = tt(e, a, true), r === true));
    return n || ee(`arrayOf - value validation error:
${Cr(r)}`), n;
  } });
}
function bs(e) {
  return ge("instanceOf", { type: e });
}
function Cs(e) {
  return ge("objectOf", { type: Object, validator(t) {
    let r = "";
    const n = Object.keys(t).every((a) => (r = tt(e, t[a], true), r === true));
    return n || ee(`objectOf - value validation error:
${Cr(r)}`), n;
  } });
}
function xs(e) {
  const t = Object.keys(e), r = t.filter((a) => {
    var o;
    return !((o = e[a]) === null || o === void 0 || !o.required);
  }), n = ge("shape", { type: Object, validator(a) {
    if (!Qe(a)) return false;
    const o = Object.keys(a);
    if (r.length > 0 && r.some((s) => o.indexOf(s) === -1)) {
      const s = r.filter((i) => o.indexOf(i) === -1);
      return ee(s.length === 1 ? `shape - required property "${s[0]}" is not defined.` : `shape - required properties "${s.join('", "')}" are not defined.`), false;
    }
    return o.every((s) => {
      if (t.indexOf(s) === -1) return this._vueTypes_isLoose === true || (ee(`shape - shape definition does not include a "${s}" property. Allowed keys: "${t.join('", "')}".`), false);
      const i = tt(e[s], a[s], true);
      return typeof i == "string" && ee(`shape - "${s}" property validation error:
 ${Cr(i)}`), i === true;
    });
  } });
  return Object.defineProperty(n, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(n, "loose", { get() {
    return this._vueTypes_isLoose = true, this;
  } }), n;
}
const ws = ["name", "validate", "getter"], Ss = ((e) => ((e = class {
  static get any() {
    return is();
  }
  static get func() {
    return ls().def(this.defaults.func);
  }
  static get bool() {
    return this.defaults.bool === void 0 ? va() : va().def(this.defaults.bool);
  }
  static get string() {
    return ss().def(this.defaults.string);
  }
  static get number() {
    return us().def(this.defaults.number);
  }
  static get array() {
    return cs().def(this.defaults.array);
  }
  static get object() {
    return fs().def(this.defaults.object);
  }
  static get integer() {
    return ds().def(this.defaults.integer);
  }
  static get symbol() {
    return ps();
  }
  static get nullable() {
    return hs();
  }
  static extend(t) {
    if (ee("VueTypes.extend is deprecated. Use the ES6+ method instead. See https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#extending-namespaced-validators-in-es6 for details."), vt(t)) return t.forEach((l) => this.extend(l)), this;
    const { name: r, validate: n = false, getter: a = false } = t, o = xo(t, ws);
    if (gt(this, r)) throw new TypeError(`[VueTypes error]: Type "${r}" already defined`);
    const { type: s } = o;
    if (ir(s)) return delete o.type, Object.defineProperty(this, r, a ? { get: () => ga(r, s, o) } : { value(...l) {
      const c = ga(r, s, o);
      return c.validator && (c.validator = c.validator.bind(c, ...l)), c;
    } });
    let i;
    return i = a ? { get() {
      const l = Object.assign({}, o);
      return n ? Pe(r, l) : ge(r, l);
    }, enumerable: true } : { value(...l) {
      const c = Object.assign({}, o);
      let u;
      return u = n ? Pe(r, c) : ge(r, c), c.validator && (u.validator = c.validator.bind(u, ...l)), u;
    }, enumerable: true }, Object.defineProperty(this, r, i);
  }
}).defaults = {}, e.sensibleDefaults = void 0, e.config = ts, e.custom = gs, e.oneOf = vs, e.instanceOf = bs, e.oneOfType = ys, e.arrayOf = ms, e.objectOf = Cs, e.shape = xs, e.utils = { validate: (t, r) => tt(r, t, true) === true, toType: (t, r, n = false) => n ? Pe(t, r) : ge(t, r) }, e))();
function _s(e = { func: () => {
}, bool: true, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var t;
  return (t = class extends Ss {
    static get sensibleDefaults() {
      return Lt({}, this.defaults);
    }
    static set sensibleDefaults(r) {
      this.defaults = r !== false ? Lt({}, r !== true ? r : e) : {};
    }
  }).defaults = Lt({}, e), t;
}
let $ = class extends _s() {
};
var ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vn(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var Zt = function(e) {
  return e && e.Math == Math && e;
}, ne = Zt(typeof globalThis == "object" && globalThis) || Zt(typeof window == "object" && window) || Zt(typeof self == "object" && self) || Zt(typeof ya == "object" && ya) || /* @__PURE__ */ (function() {
  return this;
})() || Function("return this")(), F = function(e) {
  try {
    return !!e();
  } catch {
    return true;
  }
}, Ce = !F((function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
})), ma = {}.propertyIsEnumerable, ba = Object.getOwnPropertyDescriptor, ks = { f: ba && !ma.call({ 1: 2 }, 1) ? function(e) {
  var t = ba(this, e);
  return !!t && t.enumerable;
} : ma }, xr = function(e, t) {
  return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
}, As = {}.toString, Ie = function(e) {
  return As.call(e).slice(8, -1);
}, Os = "".split, wr = F((function() {
  return !Object("z").propertyIsEnumerable(0);
})) ? function(e) {
  return Ie(e) == "String" ? Os.call(e, "") : Object(e);
} : Object, We = function(e) {
  if (e == null) throw TypeError("Can't call method on " + e);
  return e;
}, _t = function(e) {
  return wr(We(e));
}, ae = function(e) {
  return typeof e == "object" ? e !== null : typeof e == "function";
}, yn = function(e, t) {
  if (!ae(e)) return e;
  var r, n;
  if (t && typeof (r = e.toString) == "function" && !ae(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !ae(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !ae(n = r.call(e))) return n;
  throw TypeError("Can't convert object to primitive value");
}, Es = {}.hasOwnProperty, te = function(e, t) {
  return Es.call(e, t);
}, Zr = ne.document, Rs = ae(Zr) && ae(Zr.createElement), Ao = function(e) {
  return Rs ? Zr.createElement(e) : {};
}, Oo = !Ce && !F((function() {
  return Object.defineProperty(Ao("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
})), Ca = Object.getOwnPropertyDescriptor, mn = { f: Ce ? Ca : function(e, t) {
  if (e = _t(e), t = yn(t, true), Oo) try {
    return Ca(e, t);
  } catch {
  }
  if (te(e, t)) return xr(!ks.f.call(e, t), e[t]);
} }, fe = function(e) {
  if (!ae(e)) throw TypeError(String(e) + " is not an object");
  return e;
}, xa = Object.defineProperty, Ve = { f: Ce ? xa : function(e, t, r) {
  if (fe(e), t = yn(t, true), fe(r), Oo) try {
    return xa(e, t, r);
  } catch {
  }
  if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
  return "value" in r && (e[t] = r.value), e;
} }, we = Ce ? function(e, t, r) {
  return Ve.f(e, t, xr(1, r));
} : function(e, t, r) {
  return e[t] = r, e;
}, bn = function(e, t) {
  try {
    we(ne, e, t);
  } catch {
    ne[e] = t;
  }
  return t;
}, et = ne["__core-js_shared__"] || bn("__core-js_shared__", {}), $s = Function.toString;
typeof et.inspectSource != "function" && (et.inspectSource = function(e) {
  return $s.call(e);
});
var lr, Bt, sr, Eo = et.inspectSource, wa = ne.WeakMap, Ts = typeof wa == "function" && /native code/.test(Eo(wa)), Ro = vn((function(e) {
  (e.exports = function(t, r) {
    return et[t] || (et[t] = r !== void 0 ? r : {});
  })("versions", []).push({ version: "3.8.3", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
})), Ms = 0, Ps = Math.random(), Cn = function(e) {
  return "Symbol(" + String(e === void 0 ? "" : e) + ")_" + (++Ms + Ps).toString(36);
}, Sa = Ro("keys"), xn = function(e) {
  return Sa[e] || (Sa[e] = Cn(e));
}, Sr = {}, Hs = ne.WeakMap;
if (Ts) {
  var at = et.state || (et.state = new Hs()), js = at.get, Ls = at.has, Bs = at.set;
  lr = function(e, t) {
    return t.facade = e, Bs.call(at, e, t), t;
  }, Bt = function(e) {
    return js.call(at, e) || {};
  }, sr = function(e) {
    return Ls.call(at, e);
  };
} else {
  var Et = xn("state");
  Sr[Et] = true, lr = function(e, t) {
    return t.facade = e, we(e, Et, t), t;
  }, Bt = function(e) {
    return te(e, Et) ? e[Et] : {};
  }, sr = function(e) {
    return te(e, Et);
  };
}
var ze = { set: lr, get: Bt, has: sr, enforce: function(e) {
  return sr(e) ? Bt(e) : lr(e, {});
}, getterFor: function(e) {
  return function(t) {
    var r;
    if (!ae(t) || (r = Bt(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
    return r;
  };
} }, Ue = vn((function(e) {
  var t = ze.get, r = ze.enforce, n = String(String).split("String");
  (e.exports = function(a, o, s, i) {
    var l, c = !!i && !!i.unsafe, u = !!i && !!i.enumerable, f = !!i && !!i.noTargetGet;
    typeof s == "function" && (typeof o != "string" || te(s, "name") || we(s, "name", o), (l = r(s)).source || (l.source = n.join(typeof o == "string" ? o : ""))), a !== ne ? (c ? !f && a[o] && (u = true) : delete a[o], u ? a[o] = s : we(a, o, s)) : u ? a[o] = s : bn(o, s);
  })(Function.prototype, "toString", (function() {
    return typeof this == "function" && t(this).source || Eo(this);
  }));
})), Rr = ne, _a = function(e) {
  return typeof e == "function" ? e : void 0;
}, _r = function(e, t) {
  return arguments.length < 2 ? _a(Rr[e]) || _a(ne[e]) : Rr[e] && Rr[e][t] || ne[e] && ne[e][t];
}, Is = Math.ceil, Ds = Math.floor, kt = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? Ds : Is)(e);
}, Vs = Math.min, me = function(e) {
  return e > 0 ? Vs(kt(e), 9007199254740991) : 0;
}, Ns = Math.max, Fs = Math.min, ur = function(e, t) {
  var r = kt(e);
  return r < 0 ? Ns(r + t, 0) : Fs(r, t);
}, Ws = function(e) {
  return function(t, r, n) {
    var a, o = _t(t), s = me(o.length), i = ur(n, s);
    if (e && r != r) {
      for (; s > i; ) if ((a = o[i++]) != a) return true;
    } else for (; s > i; i++) if ((e || i in o) && o[i] === r) return e || i || 0;
    return !e && -1;
  };
}, $o = { indexOf: Ws(false) }, zs = $o.indexOf, To = function(e, t) {
  var r, n = _t(e), a = 0, o = [];
  for (r in n) !te(Sr, r) && te(n, r) && o.push(r);
  for (; t.length > a; ) te(n, r = t[a++]) && (~zs(o, r) || o.push(r));
  return o;
}, cr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Us = cr.concat("length", "prototype"), Ks = { f: Object.getOwnPropertyNames || function(e) {
  return To(e, Us);
} }, Gs = { f: Object.getOwnPropertySymbols }, qs = _r("Reflect", "ownKeys") || function(e) {
  var t = Ks.f(fe(e)), r = Gs.f;
  return r ? t.concat(r(e)) : t;
}, Ys = function(e, t) {
  for (var r = qs(t), n = Ve.f, a = mn.f, o = 0; o < r.length; o++) {
    var s = r[o];
    te(e, s) || n(e, s, a(t, s));
  }
}, Xs = /#|\.prototype\./, Gt = function(e, t) {
  var r = Zs[Js(e)];
  return r == eu || r != Qs && (typeof t == "function" ? F(t) : !!t);
}, Js = Gt.normalize = function(e) {
  return String(e).replace(Xs, ".").toLowerCase();
}, Zs = Gt.data = {}, Qs = Gt.NATIVE = "N", eu = Gt.POLYFILL = "P", Qr = Gt, tu = mn.f, ue = function(e, t) {
  var r, n, a, o, s, i = e.target, l = e.global, c = e.stat;
  if (r = l ? ne : c ? ne[i] || bn(i, {}) : (ne[i] || {}).prototype) for (n in t) {
    if (o = t[n], a = e.noTargetGet ? (s = tu(r, n)) && s.value : r[n], !Qr(l ? n : i + (c ? "." : "#") + n, e.forced) && a !== void 0) {
      if (typeof o == typeof a) continue;
      Ys(o, a);
    }
    (e.sham || a && a.sham) && we(o, "sham", true), Ue(r, n, o, e);
  }
}, wn = function(e, t) {
  var r = [][e];
  return !!r && F((function() {
    r.call(null, t || function() {
      throw 1;
    }, 1);
  }));
}, ru = Object.defineProperty, $r = {}, ka = function(e) {
  throw e;
}, At = function(e, t) {
  if (te($r, e)) return $r[e];
  t || (t = {});
  var r = [][e], n = !!te(t, "ACCESSORS") && t.ACCESSORS, a = te(t, 0) ? t[0] : ka, o = te(t, 1) ? t[1] : void 0;
  return $r[e] = !!r && !F((function() {
    if (n && !Ce) return true;
    var s = { length: -1 };
    n ? ru(s, 1, { enumerable: true, get: ka }) : s[1] = 1, r.call(s, a, o);
  }));
}, nu = $o.indexOf, Mo = [].indexOf, Aa = !!Mo && 1 / [1].indexOf(1, -0) < 0, au = wn("indexOf"), ou = At("indexOf", { ACCESSORS: true, 1: 0 });
function rt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function iu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n);
  }
}
function nt(e, t, r) {
  return r && iu(e, r), e;
}
ue({ target: "Array", proto: true, forced: Aa || !au || !ou }, { indexOf: function(e) {
  return Aa ? Mo.apply(this, arguments) || 0 : nu(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
(function() {
  function e() {
    rt(this, e);
  }
  return nt(e, null, [{ key: "isInBrowser", value: function() {
    return typeof window < "u";
  } }, { key: "isServer", value: function() {
    return typeof window > "u";
  } }, { key: "getUA", value: function() {
    return e.isInBrowser() ? window.navigator.userAgent.toLowerCase() : "";
  } }, { key: "isMobile", value: function() {
    return /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
  } }, { key: "isOpera", value: function() {
    return navigator.userAgent.indexOf("Opera") !== -1;
  } }, { key: "isIE", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("msie") > 0;
  } }, { key: "isIE9", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("msie 9.0") > 0;
  } }, { key: "isEdge", value: function() {
    var t = e.getUA();
    return t !== "" && t.indexOf("edge/") > 0;
  } }, { key: "isChrome", value: function() {
    var t = e.getUA();
    return t !== "" && /chrome\/\d+/.test(t) && !e.isEdge();
  } }, { key: "isPhantomJS", value: function() {
    var t = e.getUA();
    return t !== "" && /phantomjs/.test(t);
  } }, { key: "isFirefox", value: function() {
    var t = e.getUA();
    return t !== "" && /firefox/.test(t);
  } }]), e;
})();
var lu = [].join, su = wr != Object, uu = wn("join", ",");
ue({ target: "Array", proto: true, forced: su || !uu }, { join: function(e) {
  return lu.call(_t(this), e === void 0 ? "," : e);
} });
var ot, fr, Ne = function(e) {
  return Object(We(e));
}, mt = Array.isArray || function(e) {
  return Ie(e) == "Array";
}, Po = !!Object.getOwnPropertySymbols && !F((function() {
  return !String(Symbol());
})), cu = Po && !Symbol.sham && typeof Symbol.iterator == "symbol", Qt = Ro("wks"), It = ne.Symbol, fu = cu ? It : It && It.withoutSetter || Cn, G = function(e) {
  return te(Qt, e) || (Po && te(It, e) ? Qt[e] = It[e] : Qt[e] = fu("Symbol." + e)), Qt[e];
}, du = G("species"), kr = function(e, t) {
  var r;
  return mt(e) && (typeof (r = e.constructor) != "function" || r !== Array && !mt(r.prototype) ? ae(r) && (r = r[du]) === null && (r = void 0) : r = void 0), new (r === void 0 ? Array : r)(t === 0 ? 0 : t);
}, bt = function(e, t, r) {
  var n = yn(t);
  n in e ? Ve.f(e, n, xr(0, r)) : e[n] = r;
}, Tr = _r("navigator", "userAgent") || "", Oa = ne.process, Ea = Oa && Oa.versions, Ra = Ea && Ea.v8;
Ra ? fr = (ot = Ra.split("."))[0] + ot[1] : Tr && (!(ot = Tr.match(/Edge\/(\d+)/)) || ot[1] >= 74) && (ot = Tr.match(/Chrome\/(\d+)/)) && (fr = ot[1]);
var dr = fr && +fr, pu = G("species"), Sn = function(e) {
  return dr >= 51 || !F((function() {
    var t = [];
    return (t.constructor = {})[pu] = function() {
      return { foo: 1 };
    }, t[e](Boolean).foo !== 1;
  }));
}, hu = Sn("splice"), gu = At("splice", { ACCESSORS: true, 0: 0, 1: 2 }), vu = Math.max, yu = Math.min;
ue({ target: "Array", proto: true, forced: !hu || !gu }, { splice: function(e, t) {
  var r, n, a, o, s, i, l = Ne(this), c = me(l.length), u = ur(e, c), f = arguments.length;
  if (f === 0 ? r = n = 0 : f === 1 ? (r = 0, n = c - u) : (r = f - 2, n = yu(vu(kt(t), 0), c - u)), c + r - n > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
  for (a = kr(l, n), o = 0; o < n; o++) (s = u + o) in l && bt(a, o, l[s]);
  if (a.length = n, r < n) {
    for (o = u; o < c - n; o++) i = o + r, (s = o + n) in l ? l[i] = l[s] : delete l[i];
    for (o = c; o > c - n + r; o--) delete l[o - 1];
  } else if (r > n) for (o = c - n; o > u; o--) i = o + r - 1, (s = o + n - 1) in l ? l[i] = l[s] : delete l[i];
  for (o = 0; o < r; o++) l[o + u] = arguments[o + 2];
  return l.length = c - n + r, a;
} });
var Ho = {};
Ho[G("toStringTag")] = "z";
var _n = String(Ho) === "[object z]", mu = G("toStringTag"), bu = Ie(/* @__PURE__ */ (function() {
  return arguments;
})()) == "Arguments", jo = _n ? Ie : function(e) {
  var t, r, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = (function(a, o) {
    try {
      return a[o];
    } catch {
    }
  })(t = Object(e), mu)) == "string" ? r : bu ? Ie(t) : (n = Ie(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
}, Cu = _n ? {}.toString : function() {
  return "[object " + jo(this) + "]";
};
_n || Ue(Object.prototype, "toString", Cu, { unsafe: true });
var Lo = function() {
  var e = fe(this), t = "";
  return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
};
function $a(e, t) {
  return RegExp(e, t);
}
var Mr, Pr, Ta = { UNSUPPORTED_Y: F((function() {
  var e = $a("a", "y");
  return e.lastIndex = 2, e.exec("abcd") != null;
})), BROKEN_CARET: F((function() {
  var e = $a("^r", "gy");
  return e.lastIndex = 2, e.exec("str") != null;
})) }, pr = RegExp.prototype.exec, xu = String.prototype.replace, Bo = pr, Hr = (Mr = /a/, Pr = /b*/g, pr.call(Mr, "a"), pr.call(Pr, "a"), Mr.lastIndex !== 0 || Pr.lastIndex !== 0), Ma = Ta.UNSUPPORTED_Y || Ta.BROKEN_CARET, jr = /()??/.exec("")[1] !== void 0;
(Hr || jr || Ma) && (Bo = function(e) {
  var t, r, n, a, o = this, s = Ma && o.sticky, i = Lo.call(o), l = o.source, c = 0, u = e;
  return s && ((i = i.replace("y", "")).indexOf("g") === -1 && (i += "g"), u = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && e[o.lastIndex - 1] !== `
`) && (l = "(?: " + l + ")", u = " " + u, c++), r = new RegExp("^(?:" + l + ")", i)), jr && (r = new RegExp("^" + l + "$(?!\\s)", i)), Hr && (t = o.lastIndex), n = pr.call(s ? r : o, u), s ? n ? (n.input = n.input.slice(c), n[0] = n[0].slice(c), n.index = o.lastIndex, o.lastIndex += n[0].length) : o.lastIndex = 0 : Hr && n && (o.lastIndex = o.global ? n.index + n[0].length : t), jr && n && n.length > 1 && xu.call(n[0], r, (function() {
    for (a = 1; a < arguments.length - 2; a++) arguments[a] === void 0 && (n[a] = void 0);
  })), n;
});
var Wt = Bo;
ue({ target: "RegExp", proto: true, forced: /./.exec !== Wt }, { exec: Wt });
var Io = RegExp.prototype, Do = Io.toString, wu = F((function() {
  return Do.call({ source: "a", flags: "b" }) != "/a/b";
})), Su = Do.name != "toString";
(wu || Su) && Ue(RegExp.prototype, "toString", (function() {
  var e = fe(this), t = String(e.source), r = e.flags;
  return "/" + t + "/" + String(r === void 0 && e instanceof RegExp && !("flags" in Io) ? Lo.call(e) : r);
}), { unsafe: true });
var _u = G("species"), ku = !F((function() {
  var e = /./;
  return e.exec = function() {
    var t = [];
    return t.groups = { a: "7" }, t;
  }, "".replace(e, "$<a>") !== "7";
})), Pa = "a".replace(/./, "$0") === "$0", Ha = G("replace"), ja = !!/./[Ha] && /./[Ha]("a", "$0") === "", Au = !F((function() {
  var e = /(?:)/, t = e.exec;
  e.exec = function() {
    return t.apply(this, arguments);
  };
  var r = "ab".split(e);
  return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
})), Vo = function(e, t, r, n) {
  var a = G(e), o = !F((function() {
    var f = {};
    return f[a] = function() {
      return 7;
    }, ""[e](f) != 7;
  })), s = o && !F((function() {
    var f = false, d = /a/;
    return e === "split" && ((d = {}).constructor = {}, d.constructor[_u] = function() {
      return d;
    }, d.flags = "", d[a] = /./[a]), d.exec = function() {
      return f = true, null;
    }, d[a](""), !f;
  }));
  if (!o || !s || e === "replace" && (!ku || !Pa || ja) || e === "split" && !Au) {
    var i = /./[a], l = r(a, ""[e], (function(f, d, p, y, v) {
      return d.exec === Wt ? o && !v ? { done: true, value: i.call(d, p, y) } : { done: true, value: f.call(p, d, y) } : { done: false };
    }), { REPLACE_KEEPS_$0: Pa, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: ja }), c = l[0], u = l[1];
    Ue(String.prototype, e, c), Ue(RegExp.prototype, a, function(f, d) {
      return u.call(f, this, d);
    });
  }
  n && we(RegExp.prototype[a], "sham", true);
}, Ou = G("match"), No = function(e) {
  var t;
  return ae(e) && ((t = e[Ou]) !== void 0 ? !!t : Ie(e) == "RegExp");
}, kn = function(e) {
  if (typeof e != "function") throw TypeError(String(e) + " is not a function");
  return e;
}, Eu = G("species"), Ru = function(e) {
  return function(t, r) {
    var n, a, o = String(We(t)), s = kt(r), i = o.length;
    return s < 0 || s >= i ? e ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === i || (a = o.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? o.charAt(s) : n : e ? o.slice(s, s + 2) : a - 56320 + (n - 55296 << 10) + 65536;
  };
}, Fo = { charAt: Ru(true) }, $u = Fo.charAt, Wo = function(e, t, r) {
  return t + (r ? $u(e, t).length : 1);
}, en = function(e, t) {
  var r = e.exec;
  if (typeof r == "function") {
    var n = r.call(e, t);
    if (typeof n != "object") throw TypeError("RegExp exec method returned something other than an Object or null");
    return n;
  }
  if (Ie(e) !== "RegExp") throw TypeError("RegExp#exec called on incompatible receiver");
  return Wt.call(e, t);
}, Tu = [].push, Mu = Math.min, it = !F((function() {
  return !RegExp(4294967295, "y");
}));
Vo("split", 2, (function(e, t, r) {
  var n;
  return n = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(a, o) {
    var s = String(We(this)), i = o === void 0 ? 4294967295 : o >>> 0;
    if (i === 0) return [];
    if (a === void 0) return [s];
    if (!No(a)) return t.call(s, a, i);
    for (var l, c, u, f = [], d = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (a.sticky ? "y" : ""), p = 0, y = new RegExp(a.source, d + "g"); (l = Wt.call(y, s)) && !((c = y.lastIndex) > p && (f.push(s.slice(p, l.index)), l.length > 1 && l.index < s.length && Tu.apply(f, l.slice(1)), u = l[0].length, p = c, f.length >= i)); ) y.lastIndex === l.index && y.lastIndex++;
    return p === s.length ? !u && y.test("") || f.push("") : f.push(s.slice(p)), f.length > i ? f.slice(0, i) : f;
  } : "0".split(void 0, 0).length ? function(a, o) {
    return a === void 0 && o === 0 ? [] : t.call(this, a, o);
  } : t, [function(a, o) {
    var s = We(this), i = a == null ? void 0 : a[e];
    return i !== void 0 ? i.call(a, s, o) : n.call(String(s), a, o);
  }, function(a, o) {
    var s = r(n, a, this, o, n !== t);
    if (s.done) return s.value;
    var i = fe(a), l = String(this), c = (function(w, A) {
      var k, T = fe(w).constructor;
      return T === void 0 || (k = fe(T)[Eu]) == null ? A : kn(k);
    })(i, RegExp), u = i.unicode, f = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (it ? "y" : "g"), d = new c(it ? i : "^(?:" + i.source + ")", f), p = o === void 0 ? 4294967295 : o >>> 0;
    if (p === 0) return [];
    if (l.length === 0) return en(d, l) === null ? [l] : [];
    for (var y = 0, v = 0, g = []; v < l.length; ) {
      d.lastIndex = it ? v : 0;
      var h, b = en(d, it ? l : l.slice(v));
      if (b === null || (h = Mu(me(d.lastIndex + (it ? 0 : v)), l.length)) === y) v = Wo(l, v, u);
      else {
        if (g.push(l.slice(y, v)), g.length === p) return g;
        for (var x = 1; x <= b.length - 1; x++) if (g.push(b[x]), g.length === p) return g;
        v = y = h;
      }
    }
    return g.push(l.slice(y)), g;
  }];
}), !it);
var tn = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`, hr = "[" + tn + "]", Pu = RegExp("^" + hr + hr + "*"), Hu = RegExp(hr + hr + "*$"), ju = function(e) {
  return function(t) {
    var r = String(We(t));
    return 1 & e && (r = r.replace(Pu, "")), 2 & e && (r = r.replace(Hu, "")), r;
  };
}, Lu = { trim: ju(3) }, Bu = Lu.trim;
ue({ target: "String", proto: true, forced: (function(e) {
  return F((function() {
    return !!tn[e]() || "\u200B\x85\u180E"[e]() != "\u200B\x85\u180E" || tn[e].name !== e;
  }));
})("trim") }, { trim: function() {
  return Bu(this);
} });
var Iu = Sn("slice"), Du = At("slice", { ACCESSORS: true, 0: 0, 1: 2 }), Vu = G("species"), Nu = [].slice, Fu = Math.max;
ue({ target: "Array", proto: true, forced: !Iu || !Du }, { slice: function(e, t) {
  var r, n, a, o = _t(this), s = me(o.length), i = ur(e, s), l = ur(t === void 0 ? s : t, s);
  if (mt(o) && (typeof (r = o.constructor) != "function" || r !== Array && !mt(r.prototype) ? ae(r) && (r = r[Vu]) === null && (r = void 0) : r = void 0, r === Array || r === void 0)) return Nu.call(o, i, l);
  for (n = new (r === void 0 ? Array : r)(Fu(l - i, 0)), a = 0; i < l; i++, a++) i in o && bt(n, a, o[i]);
  return n.length = a, n;
} });
var An = Object.keys || function(e) {
  return To(e, cr);
}, Wu = F((function() {
  An(1);
}));
ue({ target: "Object", stat: true, forced: Wu }, { keys: function(e) {
  return An(Ne(e));
} });
var Lr, zu = function(e) {
  if (No(e)) throw TypeError("The method doesn't accept regular expressions");
  return e;
}, Uu = G("match"), Ku = mn.f, La = "".startsWith, Gu = Math.min, zo = (function(e) {
  var t = /./;
  try {
    "/./"[e](t);
  } catch {
    try {
      return t[Uu] = false, "/./"[e](t);
    } catch {
    }
  }
  return false;
})("startsWith"), qu = !(zo || (Lr = Ku(String.prototype, "startsWith"), !Lr || Lr.writable));
function Uo(e) {
  return (Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(e);
}
ue({ target: "String", proto: true, forced: !qu && !zo }, { startsWith: function(e) {
  var t = String(We(this));
  zu(e);
  var r = me(Gu(arguments.length > 1 ? arguments[1] : void 0, t.length)), n = String(e);
  return La ? La.call(t, n, r) : t.slice(r, r + n.length) === n;
} });
var lt = function(e) {
  return typeof e == "string";
}, st = function(e) {
  return e !== null && Uo(e) === "object";
}, zt = (function() {
  function e() {
    rt(this, e);
  }
  return nt(e, null, [{ key: "isWindow", value: function(t) {
    return t === window;
  } }, { key: "addEventListener", value: function(t, r, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.addEventListener(r, n, a);
  } }, { key: "removeEventListener", value: function(t, r, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    t && r && n && t.removeEventListener(r, n, a);
  } }, { key: "triggerDragEvent", value: function(t, r) {
    var n = false, a = function(s) {
      var i;
      (i = r.drag) === null || i === void 0 || i.call(r, s);
    }, o = function s(i) {
      var l;
      e.removeEventListener(document, "mousemove", a), e.removeEventListener(document, "mouseup", s), document.onselectstart = null, document.ondragstart = null, n = false, (l = r.end) === null || l === void 0 || l.call(r, i);
    };
    e.addEventListener(t, "mousedown", (function(s) {
      var i;
      n || (document.onselectstart = function() {
        return false;
      }, document.ondragstart = function() {
        return false;
      }, e.addEventListener(document, "mousemove", a), e.addEventListener(document, "mouseup", o), n = true, (i = r.start) === null || i === void 0 || i.call(r, s));
    }));
  } }, { key: "getBoundingClientRect", value: function(t) {
    return t && st(t) && t.nodeType === 1 ? t.getBoundingClientRect() : null;
  } }, { key: "hasClass", value: function(t, r) {
    return !!(t && st(t) && lt(r) && t.nodeType === 1) && t.classList.contains(r.trim());
  } }, { key: "addClass", value: function(t, r) {
    if (t && st(t) && lt(r) && t.nodeType === 1 && (r = r.trim(), !e.hasClass(t, r))) {
      var n = t.className;
      t.className = n ? n + " " + r : r;
    }
  } }, { key: "removeClass", value: function(t, r) {
    if (t && st(t) && lt(r) && t.nodeType === 1 && typeof t.className == "string") {
      r = r.trim();
      for (var n = t.className.trim().split(" "), a = n.length - 1; a >= 0; a--) n[a] = n[a].trim(), n[a] && n[a] !== r || n.splice(a, 1);
      t.className = n.join(" ");
    }
  } }, { key: "toggleClass", value: function(t, r, n) {
    t && st(t) && lt(r) && t.nodeType === 1 && t.classList.toggle(r, n);
  } }, { key: "replaceClass", value: function(t, r, n) {
    t && st(t) && lt(r) && lt(n) && t.nodeType === 1 && (r = r.trim(), n = n.trim(), e.removeClass(t, r), e.addClass(t, n));
  } }, { key: "getScrollTop", value: function(t) {
    var r = "scrollTop" in t ? t.scrollTop : t.pageYOffset;
    return Math.max(r, 0);
  } }, { key: "setScrollTop", value: function(t, r) {
    "scrollTop" in t ? t.scrollTop = r : t.scrollTo(t.scrollX, r);
  } }, { key: "getRootScrollTop", value: function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  } }, { key: "setRootScrollTop", value: function(t) {
    e.setScrollTop(window, t), e.setScrollTop(document.body, t);
  } }, { key: "getElementTop", value: function(t, r) {
    if (e.isWindow(t)) return 0;
    var n = r ? e.getScrollTop(r) : e.getRootScrollTop();
    return t.getBoundingClientRect().top + n;
  } }, { key: "getVisibleHeight", value: function(t) {
    return e.isWindow(t) ? t.innerHeight : t.getBoundingClientRect().height;
  } }, { key: "isHidden", value: function(t) {
    if (!t) return false;
    var r = window.getComputedStyle(t), n = r.display === "none", a = t.offsetParent === null && r.position !== "fixed";
    return n || a;
  } }, { key: "triggerEvent", value: function(t, r) {
    if ("createEvent" in document) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(r, false, true), t.dispatchEvent(n);
    }
  } }, { key: "calcAngle", value: function(t, r) {
    var n = t.getBoundingClientRect(), a = n.left + n.width / 2, o = n.top + n.height / 2, s = Math.abs(a - r.clientX), i = Math.abs(o - r.clientY), l = i / Math.sqrt(Math.pow(s, 2) + Math.pow(i, 2)), c = Math.acos(l), u = Math.floor(180 / (Math.PI / c));
    return r.clientX > a && r.clientY > o && (u = 180 - u), r.clientX == a && r.clientY > o && (u = 180), r.clientX > a && r.clientY == o && (u = 90), r.clientX < a && r.clientY > o && (u = 180 + u), r.clientX < a && r.clientY == o && (u = 270), r.clientX < a && r.clientY < o && (u = 360 - u), u;
  } }, { key: "querySelector", value: function(t, r) {
    return r ? r.querySelector(t) : document.querySelector(t);
  } }, { key: "createElement", value: function(t) {
    for (var r = document.createElement(t), n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
    for (var s = 0; s < a.length; s++) a[s] && r.classList.add(a[s]);
    return r;
  } }, { key: "appendChild", value: function(t) {
    for (var r = 0; r < (arguments.length <= 1 ? 0 : arguments.length - 1); r++) t.appendChild(r + 1 < 1 || arguments.length <= r + 1 ? void 0 : arguments[r + 1]);
  } }, { key: "getWindow", value: function(t) {
    if (t.toString() !== "[object Window]") {
      var r = t.ownerDocument;
      return r && r.defaultView || window;
    }
    return t;
  } }, { key: "isElement", value: function(t) {
    return t instanceof this.getWindow(t).Element || t instanceof Element;
  } }, { key: "isHTMLElement", value: function(t) {
    return t instanceof this.getWindow(t).HTMLElement || t instanceof HTMLElement;
  } }, { key: "isShadowRoot", value: function(t) {
    return typeof ShadowRoot < "u" && (t instanceof this.getWindow(t).ShadowRoot || t instanceof ShadowRoot);
  } }, { key: "getWindowScroll", value: function(t) {
    var r = this.getWindow(t);
    return { scrollLeft: r.pageXOffset || 0, scrollTop: r.pageYOffset || 0 };
  } }]), e;
})(), Yu = Math.floor, Xu = "".replace, Ju = /\$([$&'`]|\d\d?|<[^>]*>)/g, Zu = /\$([$&'`]|\d\d?)/g, Qu = function(e, t, r, n, a, o) {
  var s = r + e.length, i = n.length, l = Zu;
  return a !== void 0 && (a = Ne(a), l = Ju), Xu.call(o, l, (function(c, u) {
    var f;
    switch (u.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return t.slice(0, r);
      case "'":
        return t.slice(s);
      case "<":
        f = a[u.slice(1, -1)];
        break;
      default:
        var d = +u;
        if (d === 0) return c;
        if (d > i) {
          var p = Yu(d / 10);
          return p === 0 ? c : p <= i ? n[p - 1] === void 0 ? u.charAt(1) : n[p - 1] + u.charAt(1) : c;
        }
        f = n[d - 1];
    }
    return f === void 0 ? "" : f;
  }));
}, ec = Math.max, tc = Math.min;
Vo("replace", 2, (function(e, t, r, n) {
  var a = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, o = n.REPLACE_KEEPS_$0, s = a ? "$" : "$0";
  return [function(i, l) {
    var c = We(this), u = i == null ? void 0 : i[e];
    return u !== void 0 ? u.call(i, c, l) : t.call(String(c), i, l);
  }, function(i, l) {
    if (!a && o || typeof l == "string" && l.indexOf(s) === -1) {
      var c = r(t, i, this, l);
      if (c.done) return c.value;
    }
    var u = fe(i), f = String(this), d = typeof l == "function";
    d || (l = String(l));
    var p = u.global;
    if (p) {
      var y = u.unicode;
      u.lastIndex = 0;
    }
    for (var v = []; ; ) {
      var g = en(u, f);
      if (g === null || (v.push(g), !p)) break;
      String(g[0]) === "" && (u.lastIndex = Wo(f, me(u.lastIndex), y));
    }
    for (var h, b = "", x = 0, w = 0; w < v.length; w++) {
      g = v[w];
      for (var A = String(g[0]), k = ec(tc(kt(g.index), f.length), 0), T = [], j = 1; j < g.length; j++) T.push((h = g[j]) === void 0 ? h : String(h));
      var H = g.groups;
      if (d) {
        var I = [A].concat(T, k, f);
        H !== void 0 && I.push(H);
        var m = String(l.apply(void 0, I));
      } else m = Qu(A, f, k, T, H, l);
      k >= x && (b += f.slice(x, k) + m, x = k + A.length);
    }
    return b + f.slice(x);
  }];
}));
(function() {
  function e() {
    rt(this, e);
  }
  return nt(e, null, [{ key: "camelize", value: function(t) {
    return t.replace(/-(\w)/g, (function(r, n) {
      return n ? n.toUpperCase() : "";
    }));
  } }, { key: "capitalize", value: function(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  } }]), e;
})();
(function() {
  function e() {
    rt(this, e);
  }
  return nt(e, null, [{ key: "_clone", value: function() {
  } }]), e;
})();
var Ko = G("isConcatSpreadable"), rc = dr >= 51 || !F((function() {
  var e = [];
  return e[Ko] = false, e.concat()[0] !== e;
})), nc = Sn("concat"), ac = function(e) {
  if (!ae(e)) return false;
  var t = e[Ko];
  return t !== void 0 ? !!t : mt(e);
};
ue({ target: "Array", proto: true, forced: !rc || !nc }, { concat: function(e) {
  var t, r, n, a, o, s = Ne(this), i = kr(s, 0), l = 0;
  for (t = -1, n = arguments.length; t < n; t++) if (ac(o = t === -1 ? s : arguments[t])) {
    if (l + (a = me(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    for (r = 0; r < a; r++, l++) r in o && bt(i, l, o[r]);
  } else {
    if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    bt(i, l++, o);
  }
  return i.length = l, i;
} });
var Br, qt = function(e, t, r) {
  if (kn(e), t === void 0) return e;
  switch (r) {
    case 0:
      return function() {
        return e.call(t);
      };
    case 1:
      return function(n) {
        return e.call(t, n);
      };
    case 2:
      return function(n, a) {
        return e.call(t, n, a);
      };
    case 3:
      return function(n, a, o) {
        return e.call(t, n, a, o);
      };
  }
  return function() {
    return e.apply(t, arguments);
  };
}, Ba = [].push, Ia = function(e) {
  var t = e == 1, r = e == 2, n = e == 3, a = e == 4, o = e == 6, s = e == 7, i = e == 5 || o;
  return function(l, c, u, f) {
    for (var d, p, y = Ne(l), v = wr(y), g = qt(c, u, 3), h = me(v.length), b = 0, x = f || kr, w = t ? x(l, h) : r || s ? x(l, 0) : void 0; h > b; b++) if ((i || b in v) && (p = g(d = v[b], b, y), e)) if (t) w[b] = p;
    else if (p) switch (e) {
      case 3:
        return true;
      case 5:
        return d;
      case 6:
        return b;
      case 2:
        Ba.call(w, d);
    }
    else switch (e) {
      case 4:
        return false;
      case 7:
        Ba.call(w, d);
    }
    return o ? -1 : n || a ? a : w;
  };
}, Go = { find: Ia(5), findIndex: Ia(6) }, oc = Ce ? Object.defineProperties : function(e, t) {
  fe(e);
  for (var r, n = An(t), a = n.length, o = 0; a > o; ) Ve.f(e, r = n[o++], t[r]);
  return e;
}, ic = _r("document", "documentElement"), qo = xn("IE_PROTO"), Ir = function() {
}, Da = function(e) {
  return "<script>" + e + "<\/script>";
}, rr = function() {
  try {
    Br = document.domain && new ActiveXObject("htmlfile");
  } catch {
  }
  var e, t;
  rr = Br ? (function(n) {
    n.write(Da("")), n.close();
    var a = n.parentWindow.Object;
    return n = null, a;
  })(Br) : ((t = Ao("iframe")).style.display = "none", ic.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write(Da("document.F=Object")), e.close(), e.F);
  for (var r = cr.length; r--; ) delete rr.prototype[cr[r]];
  return rr();
};
Sr[qo] = true;
var On = Object.create || function(e, t) {
  var r;
  return e !== null ? (Ir.prototype = fe(e), r = new Ir(), Ir.prototype = null, r[qo] = e) : r = rr(), t === void 0 ? r : oc(r, t);
}, rn = G("unscopables"), nn = Array.prototype;
nn[rn] == null && Ve.f(nn, rn, { configurable: true, value: On(null) });
var ct = function(e) {
  nn[rn][e] = true;
}, lc = Go.find, Va = true, sc = At("find");
"find" in [] && Array(1).find((function() {
  Va = false;
})), ue({ target: "Array", proto: true, forced: Va || !sc }, { find: function(e) {
  return lc(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), ct("find");
var uc = Go.findIndex, Na = true, cc = At("findIndex");
"findIndex" in [] && Array(1).findIndex((function() {
  Na = false;
})), ue({ target: "Array", proto: true, forced: Na || !cc }, { findIndex: function(e) {
  return uc(this, e, arguments.length > 1 ? arguments[1] : void 0);
} }), ct("findIndex");
var Yo = function(e, t, r, n, a, o, s, i) {
  for (var l, c = a, u = 0, f = !!s && qt(s, i, 3); u < n; ) {
    if (u in r) {
      if (l = f ? f(r[u], u, t) : r[u], o > 0 && mt(l)) c = Yo(e, t, l, me(l.length), c, o - 1) - 1;
      else {
        if (c >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
        e[c] = l;
      }
      c++;
    }
    u++;
  }
  return c;
}, fc = Yo;
ue({ target: "Array", proto: true }, { flat: function() {
  var e = arguments.length ? arguments[0] : void 0, t = Ne(this), r = me(t.length), n = kr(t, 0);
  return n.length = fc(n, t, t, r, 0, e === void 0 ? 1 : kt(e)), n;
} });
var an = function(e) {
  var t = e.return;
  if (t !== void 0) return fe(t.call(e)).value;
}, dc = function(e, t, r, n) {
  try {
    return n ? t(fe(r)[0], r[1]) : t(r);
  } catch (a) {
    throw an(e), a;
  }
}, Ct = {}, pc = G("iterator"), hc = Array.prototype, Xo = function(e) {
  return e !== void 0 && (Ct.Array === e || hc[pc] === e);
}, gc = G("iterator"), Jo = function(e) {
  if (e != null) return e[gc] || e["@@iterator"] || Ct[jo(e)];
}, Zo = G("iterator"), Qo = false;
try {
  var vc = 0, Fa = { next: function() {
    return { done: !!vc++ };
  }, return: function() {
    Qo = true;
  } };
  Fa[Zo] = function() {
    return this;
  }, Array.from(Fa, (function() {
    throw 2;
  }));
} catch {
}
var ei = function(e, t) {
  if (!Qo) return false;
  var r = false;
  try {
    var n = {};
    n[Zo] = function() {
      return { next: function() {
        return { done: r = true };
      } };
    }, e(n);
  } catch {
  }
  return r;
}, yc = !ei((function(e) {
  Array.from(e);
}));
ue({ target: "Array", stat: true, forced: yc }, { from: function(e) {
  var t, r, n, a, o, s, i = Ne(e), l = typeof this == "function" ? this : Array, c = arguments.length, u = c > 1 ? arguments[1] : void 0, f = u !== void 0, d = Jo(i), p = 0;
  if (f && (u = qt(u, c > 2 ? arguments[2] : void 0, 2)), d == null || l == Array && Xo(d)) for (r = new l(t = me(i.length)); t > p; p++) s = f ? u(i[p], p) : i[p], bt(r, p, s);
  else for (o = (a = d.call(i)).next, r = new l(); !(n = o.call(a)).done; p++) s = f ? dc(a, u, [n.value, p], true) : n.value, bt(r, p, s);
  return r.length = p, r;
} });
var mc = function(e) {
  return function(t, r, n, a) {
    kn(r);
    var o = Ne(t), s = wr(o), i = me(o.length), l = e ? i - 1 : 0, c = e ? -1 : 1;
    if (n < 2) for (; ; ) {
      if (l in s) {
        a = s[l], l += c;
        break;
      }
      if (l += c, e ? l < 0 : i <= l) throw TypeError("Reduce of empty array with no initial value");
    }
    for (; e ? l >= 0 : i > l; l += c) l in s && (a = r(a, s[l], l, o));
    return a;
  };
}, bc = { left: mc(false) }, Cc = Ie(ne.process) == "process", xc = bc.left, wc = wn("reduce"), Sc = At("reduce", { 1: 0 });
ue({ target: "Array", proto: true, forced: !wc || !Sc || !Cc && dr > 79 && dr < 83 }, { reduce: function(e) {
  return xc(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
} }), ct("flat");
var Ye, Wa, za, _c = !F((function() {
  return Object.isExtensible(Object.preventExtensions({}));
})), ti = vn((function(e) {
  var t = Ve.f, r = Cn("meta"), n = 0, a = Object.isExtensible || function() {
    return true;
  }, o = function(i) {
    t(i, r, { value: { objectID: "O" + ++n, weakData: {} } });
  }, s = e.exports = { REQUIRED: false, fastKey: function(i, l) {
    if (!ae(i)) return typeof i == "symbol" ? i : (typeof i == "string" ? "S" : "P") + i;
    if (!te(i, r)) {
      if (!a(i)) return "F";
      if (!l) return "E";
      o(i);
    }
    return i[r].objectID;
  }, getWeakData: function(i, l) {
    if (!te(i, r)) {
      if (!a(i)) return true;
      if (!l) return false;
      o(i);
    }
    return i[r].weakData;
  }, onFreeze: function(i) {
    return _c && s.REQUIRED && a(i) && !te(i, r) && o(i), i;
  } };
  Sr[r] = true;
})), Rt = function(e, t) {
  this.stopped = e, this.result = t;
}, Ua = function(e, t, r) {
  var n, a, o, s, i, l, c, u = r && r.that, f = !(!r || !r.AS_ENTRIES), d = !(!r || !r.IS_ITERATOR), p = !(!r || !r.INTERRUPTED), y = qt(t, u, 1 + f + p), v = function(h) {
    return n && an(n), new Rt(true, h);
  }, g = function(h) {
    return f ? (fe(h), p ? y(h[0], h[1], v) : y(h[0], h[1])) : p ? y(h, v) : y(h);
  };
  if (d) n = e;
  else {
    if (typeof (a = Jo(e)) != "function") throw TypeError("Target is not iterable");
    if (Xo(a)) {
      for (o = 0, s = me(e.length); s > o; o++) if ((i = g(e[o])) && i instanceof Rt) return i;
      return new Rt(false);
    }
    n = a.call(e);
  }
  for (l = n.next; !(c = l.call(n)).done; ) {
    try {
      i = g(c.value);
    } catch (h) {
      throw an(n), h;
    }
    if (typeof i == "object" && i && i instanceof Rt) return i;
  }
  return new Rt(false);
}, Ka = function(e, t, r) {
  if (!(e instanceof t)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
  return e;
}, kc = Ve.f, Ga = G("toStringTag"), on = function(e, t, r) {
  e && !te(e = r ? e : e.prototype, Ga) && kc(e, Ga, { configurable: true, value: t });
}, gr = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
  var e, t = false, r = {};
  try {
    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), t = r instanceof Array;
  } catch {
  }
  return function(n, a) {
    return fe(n), (function(o) {
      if (!ae(o) && o !== null) throw TypeError("Can't set " + String(o) + " as a prototype");
    })(a), t ? e.call(n, a) : n.__proto__ = a, n;
  };
})() : void 0), qa = function(e, t, r) {
  for (var n in t) Ue(e, n, t[n], r);
  return e;
}, Ac = !F((function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
})), Ya = xn("IE_PROTO"), Oc = Object.prototype, vr = Ac ? Object.getPrototypeOf : function(e) {
  return e = Ne(e), te(e, Ya) ? e[Ya] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Oc : null;
}, Dr = G("iterator"), ri = false;
[].keys && ("next" in (za = [].keys()) ? (Wa = vr(vr(za))) !== Object.prototype && (Ye = Wa) : ri = true), (Ye == null || F((function() {
  var e = {};
  return Ye[Dr].call(e) !== e;
}))) && (Ye = {}), te(Ye, Dr) || we(Ye, Dr, (function() {
  return this;
}));
var En = { IteratorPrototype: Ye, BUGGY_SAFARI_ITERATORS: ri }, Ec = En.IteratorPrototype, Rc = function() {
  return this;
}, Vr = En.IteratorPrototype, er = En.BUGGY_SAFARI_ITERATORS, $t = G("iterator"), $c = function() {
  return this;
}, Rn = function(e, t, r, n, a, o, s) {
  (function(h, b, x) {
    var w = b + " Iterator";
    h.prototype = On(Ec, { next: xr(1, x) }), on(h, w, false), Ct[w] = Rc;
  })(r, t, n);
  var i, l, c, u = function(h) {
    if (h === a && v) return v;
    if (!er && h in p) return p[h];
    switch (h) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new r(this, h);
        };
    }
    return function() {
      return new r(this);
    };
  }, f = t + " Iterator", d = false, p = e.prototype, y = p[$t] || p["@@iterator"] || a && p[a], v = !er && y || u(a), g = t == "Array" && p.entries || y;
  if (g && (i = vr(g.call(new e())), Vr !== Object.prototype && i.next && (vr(i) !== Vr && (gr ? gr(i, Vr) : typeof i[$t] != "function" && we(i, $t, $c)), on(i, f, true))), a == "values" && y && y.name !== "values" && (d = true, v = function() {
    return y.call(this);
  }), p[$t] !== v && we(p, $t, v), Ct[t] = v, a) if (l = { values: u("values"), keys: o ? v : u("keys"), entries: u("entries") }, s) for (c in l) (er || d || !(c in p)) && Ue(p, c, l[c]);
  else ue({ target: t, proto: true, forced: er || d }, l);
  return l;
}, Xa = G("species"), Tc = Ve.f, Ja = ti.fastKey, Za = ze.set, Nr = ze.getterFor;
(function(e, t, r) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, o = n ? "set" : "add", s = ne[e], i = s && s.prototype, l = s, c = {}, u = function(g) {
    var h = i[g];
    Ue(i, g, g == "add" ? function(b) {
      return h.call(this, b === 0 ? 0 : b), this;
    } : g == "delete" ? function(b) {
      return !(a && !ae(b)) && h.call(this, b === 0 ? 0 : b);
    } : g == "get" ? function(b) {
      return a && !ae(b) ? void 0 : h.call(this, b === 0 ? 0 : b);
    } : g == "has" ? function(b) {
      return !(a && !ae(b)) && h.call(this, b === 0 ? 0 : b);
    } : function(b, x) {
      return h.call(this, b === 0 ? 0 : b, x), this;
    });
  };
  if (Qr(e, typeof s != "function" || !(a || i.forEach && !F((function() {
    new s().entries().next();
  }))))) l = r.getConstructor(t, e, n, o), ti.REQUIRED = true;
  else if (Qr(e, true)) {
    var f = new l(), d = f[o](a ? {} : -0, 1) != f, p = F((function() {
      f.has(1);
    })), y = ei((function(g) {
      new s(g);
    })), v = !a && F((function() {
      for (var g = new s(), h = 5; h--; ) g[o](h, h);
      return !g.has(-0);
    }));
    y || ((l = t((function(g, h) {
      Ka(g, l, e);
      var b = (function(x, w, A) {
        var k, T;
        return gr && typeof (k = w.constructor) == "function" && k !== A && ae(T = k.prototype) && T !== A.prototype && gr(x, T), x;
      })(new s(), g, l);
      return h != null && Ua(h, b[o], { that: b, AS_ENTRIES: n }), b;
    }))).prototype = i, i.constructor = l), (p || v) && (u("delete"), u("has"), n && u("get")), (v || d) && u(o), a && i.clear && delete i.clear;
  }
  c[e] = l, ue({ global: true, forced: l != s }, c), on(l, e), a || r.setStrong(l, e, n);
})("Set", (function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}), { getConstructor: function(e, t, r, n) {
  var a = e((function(l, c) {
    Ka(l, a, t), Za(l, { type: t, index: On(null), first: void 0, last: void 0, size: 0 }), Ce || (l.size = 0), c != null && Ua(c, l[n], { that: l, AS_ENTRIES: r });
  })), o = Nr(t), s = function(l, c, u) {
    var f, d, p = o(l), y = i(l, c);
    return y ? y.value = u : (p.last = y = { index: d = Ja(c, true), key: c, value: u, previous: f = p.last, next: void 0, removed: false }, p.first || (p.first = y), f && (f.next = y), Ce ? p.size++ : l.size++, d !== "F" && (p.index[d] = y)), l;
  }, i = function(l, c) {
    var u, f = o(l), d = Ja(c);
    if (d !== "F") return f.index[d];
    for (u = f.first; u; u = u.next) if (u.key == c) return u;
  };
  return qa(a.prototype, { clear: function() {
    for (var l = o(this), c = l.index, u = l.first; u; ) u.removed = true, u.previous && (u.previous = u.previous.next = void 0), delete c[u.index], u = u.next;
    l.first = l.last = void 0, Ce ? l.size = 0 : this.size = 0;
  }, delete: function(l) {
    var c = this, u = o(c), f = i(c, l);
    if (f) {
      var d = f.next, p = f.previous;
      delete u.index[f.index], f.removed = true, p && (p.next = d), d && (d.previous = p), u.first == f && (u.first = d), u.last == f && (u.last = p), Ce ? u.size-- : c.size--;
    }
    return !!f;
  }, forEach: function(l) {
    for (var c, u = o(this), f = qt(l, arguments.length > 1 ? arguments[1] : void 0, 3); c = c ? c.next : u.first; ) for (f(c.value, c.key, this); c && c.removed; ) c = c.previous;
  }, has: function(l) {
    return !!i(this, l);
  } }), qa(a.prototype, r ? { get: function(l) {
    var c = i(this, l);
    return c && c.value;
  }, set: function(l, c) {
    return s(this, l === 0 ? 0 : l, c);
  } } : { add: function(l) {
    return s(this, l = l === 0 ? 0 : l, l);
  } }), Ce && Tc(a.prototype, "size", { get: function() {
    return o(this).size;
  } }), a;
}, setStrong: function(e, t, r) {
  var n = t + " Iterator", a = Nr(t), o = Nr(n);
  Rn(e, t, (function(s, i) {
    Za(this, { type: n, target: s, state: a(s), kind: i, last: void 0 });
  }), (function() {
    for (var s = o(this), i = s.kind, l = s.last; l && l.removed; ) l = l.previous;
    return s.target && (s.last = l = l ? l.next : s.state.first) ? i == "keys" ? { value: l.key, done: false } : i == "values" ? { value: l.value, done: false } : { value: [l.key, l.value], done: false } : (s.target = void 0, { value: void 0, done: true });
  }), r ? "entries" : "values", !r, true), (function(s) {
    var i = _r(s), l = Ve.f;
    Ce && i && !i[Xa] && l(i, Xa, { configurable: true, get: function() {
      return this;
    } });
  })(t);
} });
var Mc = Fo.charAt, Pc = ze.set, Hc = ze.getterFor("String Iterator");
Rn(String, "String", (function(e) {
  Pc(this, { type: "String Iterator", string: String(e), index: 0 });
}), (function() {
  var e, t = Hc(this), r = t.string, n = t.index;
  return n >= r.length ? { value: void 0, done: true } : (e = Mc(r, n), t.index += e.length, { value: e, done: false });
}));
var Qa = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, jc = ze.set, Lc = ze.getterFor("Array Iterator"), Mt = Rn(Array, "Array", (function(e, t) {
  jc(this, { type: "Array Iterator", target: _t(e), index: 0, kind: t });
}), (function() {
  var e = Lc(this), t = e.target, r = e.kind, n = e.index++;
  return !t || n >= t.length ? (e.target = void 0, { value: void 0, done: true }) : r == "keys" ? { value: n, done: false } : r == "values" ? { value: t[n], done: false } : { value: [n, t[n]], done: false };
}), "values");
Ct.Arguments = Ct.Array, ct("keys"), ct("values"), ct("entries");
var Fr = G("iterator"), eo = G("toStringTag"), Wr = Mt.values;
for (var zr in Qa) {
  var to = ne[zr], Le = to && to.prototype;
  if (Le) {
    if (Le[Fr] !== Wr) try {
      we(Le, Fr, Wr);
    } catch {
      Le[Fr] = Wr;
    }
    if (Le[eo] || we(Le, eo, zr), Qa[zr]) {
      for (var ut in Mt) if (Le[ut] !== Mt[ut]) try {
        we(Le, ut, Mt[ut]);
      } catch {
        Le[ut] = Mt[ut];
      }
    }
  }
}
(function() {
  function e() {
    rt(this, e);
  }
  return nt(e, null, [{ key: "deduplicate", value: function(t) {
    return Array.from(new Set(t));
  } }, { key: "flat", value: function(t) {
    return t.reduce((function(r, n) {
      var a = Array.isArray(n) ? e.flat(n) : n;
      return r.concat(a);
    }), []);
  } }, { key: "find", value: function(t, r) {
    return t.find(r);
  } }, { key: "findIndex", value: function(t, r) {
    return t.findIndex(r);
  } }]), e;
})();
(function() {
  function e() {
    rt(this, e);
  }
  return nt(e, null, [{ key: "today", value: function() {
    return /* @__PURE__ */ new Date();
  } }]), e;
})();
(function() {
  function e() {
    rt(this, e);
  }
  return nt(e, null, [{ key: "range", value: function(t, r, n) {
    return Math.min(Math.max(t, r), n);
  } }, { key: "clamp", value: function(t, r, n) {
    return r < n ? t < r ? r : t > n ? n : t : t < n ? n : t > r ? r : t;
  } }]), e;
})();
var Bc = Object.defineProperty, Ic = (e, t, r) => t in e ? Bc(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r, ie = (e, t, r) => (Ic(e, typeof t != "symbol" ? t + "" : t, r), r);
const X = (e) => Math.round(e * 100) / 100;
class K {
  constructor(t) {
    ie(this, "instance"), ie(this, "alphaValue", 0), ie(this, "redValue", 0), ie(this, "greenValue", 0), ie(this, "blueValue", 0), ie(this, "hueValue", 0), ie(this, "saturationValue", 0), ie(this, "brightnessValue", 0), ie(this, "hslSaturationValue", 0), ie(this, "lightnessValue", 0), ie(this, "initAlpha", () => {
      const r = this.instance.getAlpha();
      this.alphaValue = Math.min(1, r) * 100;
    }), ie(this, "initLightness", () => {
      const { s: r, l: n } = this.instance.toHsl();
      this.hslSaturationValue = X(r), this.lightnessValue = X(n);
    }), ie(this, "initRgb", () => {
      const { r, g: n, b: a } = this.instance.toRgb();
      this.redValue = X(r), this.greenValue = X(n), this.blueValue = X(a);
    }), ie(this, "initHsb", () => {
      const { h: r, s: n, v: a } = this.instance.toHsv();
      this.hueValue = Math.min(360, Math.ceil(r)), this.saturationValue = X(n), this.brightnessValue = X(a);
    }), ie(this, "toHexString", () => this.instance.toHexString()), ie(this, "toRgbString", () => this.instance.toRgbString()), this.instance = C(t), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
  }
  toString(t) {
    return this.instance.toString(t);
  }
  get hex() {
    return this.instance.toHex();
  }
  set hex(t) {
    this.instance = C(t), this.initHsb(), this.initRgb(), this.initAlpha(), this.initLightness();
  }
  set hue(t) {
    this.saturation === 0 && this.brightness === 0 && (this.saturationValue = 1, this.brightnessValue = 1), this.instance = C({ h: X(t), s: this.saturation, v: this.brightness, a: this.alphaValue / 100 }), this.initRgb(), this.initLightness(), this.hueValue = X(t);
  }
  get hue() {
    return this.hueValue;
  }
  set saturation(t) {
    this.instance = C({ h: this.hue, s: X(t), v: this.brightness, a: this.alphaValue / 100 }), this.initRgb(), this.initLightness(), this.saturationValue = X(t);
  }
  get saturation() {
    return this.saturationValue;
  }
  set brightness(t) {
    this.instance = C({ h: this.hue, s: this.saturation, v: X(t), a: this.alphaValue / 100 }), this.initRgb(), this.initLightness(), this.brightnessValue = X(t);
  }
  get brightness() {
    return this.brightnessValue;
  }
  set lightness(t) {
    this.instance = C({ h: this.hue, s: this.hslSaturationValue, l: X(t), a: this.alphaValue / 100 }), this.initRgb(), this.initHsb(), this.lightnessValue = X(t);
  }
  get lightness() {
    return this.lightnessValue;
  }
  set red(t) {
    const r = this.instance.toRgb();
    this.instance = C({ ...r, r: X(t), a: this.alphaValue / 100 }), this.initHsb(), this.initLightness(), this.redValue = X(t);
  }
  get red() {
    return this.redValue;
  }
  set green(t) {
    const r = this.instance.toRgb();
    this.instance = C({ ...r, g: X(t), a: this.alphaValue / 100 }), this.initHsb(), this.initLightness(), this.greenValue = X(t);
  }
  get green() {
    return this.greenValue;
  }
  set blue(t) {
    const r = this.instance.toRgb();
    this.instance = C({ ...r, b: X(t), a: this.alphaValue / 100 }), this.initHsb(), this.initLightness(), this.blueValue = X(t);
  }
  get blue() {
    return this.blueValue;
  }
  set alpha(t) {
    this.instance.setAlpha(t / 100), this.alphaValue = t;
  }
  get alpha() {
    return this.alphaValue;
  }
  get RGB() {
    return [this.red, this.green, this.blue, parseFloat((this.alpha / 100).toFixed(2))];
  }
  get HSB() {
    return [this.hue, this.saturation, this.brightness, parseFloat((this.alpha / 100).toFixed(2))];
  }
  get HSL() {
    return [this.hue, this.hslSaturationValue, this.lightness, parseFloat((this.alpha / 100).toFixed(2))];
  }
}
function ro(e, t, r, n) {
  return `rgba(${[e, t, r, n / 100].join(",")})`;
}
const Ur = (e, t, r) => t < r ? e < t ? t : e > r ? r : e : e < r ? r : e > t ? t : e, $n = "color-history", Tn = 8, Ae = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t) r[n] = a;
  return r;
}, Dc = ye({ name: "Alpha", props: { color: $.instanceOf(K), size: $.oneOf(["small", "default"]).def("default") }, emits: ["change"], setup(e, { emit: t }) {
  const r = Z(null), n = Z(null);
  let a = e.color || new K();
  const o = Se({ red: a.red, green: a.green, blue: a.blue, alpha: a.alpha });
  $e(() => e.color, (f) => {
    f && (a = f, yr(o, { red: f.red, green: f.green, blue: f.blue, alpha: f.alpha }));
  }, { deep: true });
  const s = Q(() => {
    const f = ro(o.red, o.green, o.blue, 0), d = ro(o.red, o.green, o.blue, 100);
    return { background: `linear-gradient(to right, ${f} , ${d})` };
  }), i = () => {
    if (r.value && n.value) {
      const f = o.alpha / 100, d = r.value.getBoundingClientRect(), p = n.value.offsetWidth;
      return Math.round(f * (d.width - p) + p / 2);
    }
    return 0;
  }, l = Q(() => ({ left: i() + "px", top: 0 })), c = (f) => {
    f.target !== r.value && u(f);
  }, u = (f) => {
    if (f.stopPropagation(), r.value && n.value) {
      const d = r.value.getBoundingClientRect(), p = n.value.offsetWidth;
      let y = f.clientX - d.left;
      y = Math.max(p / 2, y), y = Math.min(y, d.width - p / 2);
      const v = Math.round((y - p / 2) / (d.width - p) * 100);
      a.alpha = v, o.alpha = v, t("change", v);
    }
  };
  return xt(() => {
    const f = { drag: (d) => {
      u(d);
    }, end: (d) => {
      u(d);
    } };
    r.value && n.value && zt.triggerDragEvent(r.value, f);
  }), { barElement: r, cursorElement: n, getCursorStyle: l, getBackgroundStyle: s, onClickSider: c };
} }), Vc = (e) => (wt("data-v-18925ba6"), e = e(), St(), e), Nc = Vc(() => _("div", { class: "vc-alpha-slider__bar-handle" }, null, -1)), Fc = [Nc];
function Wc(e, t, r, n, a, o) {
  return E(), L("div", { class: se(["vc-alpha-slider", "transparent", { "small-slider": e.size === "small" }]) }, [_("div", { ref: "barElement", class: "vc-alpha-slider__bar", style: re(e.getBackgroundStyle), onClick: t[0] || (t[0] = (...s) => e.onClickSider && e.onClickSider(...s)) }, [_("div", { class: se(["vc-alpha-slider__bar-pointer", { "small-bar": e.size === "small" }]), ref: "cursorElement", style: re(e.getCursorStyle) }, Fc, 6)], 4)], 2);
}
const Mn = Ae(Dc, [["render", Wc], ["__scopeId", "data-v-18925ba6"]]), zc = [["#fcc02e", "#f67c01", "#e64a19", "#d81b43", "#8e24aa", "#512da7", "#1f87e8", "#008781", "#05a045"], ["#fed835", "#fb8c00", "#f5511e", "#eb1d4e", "#9c28b1", "#5d35b0", "#2097f3", "#029688", "#4cb050"], ["#ffeb3c", "#ffa727", "#fe5722", "#eb4165", "#aa47bc", "#673bb7", "#42a5f6", "#26a59a", "#83c683"], ["#fff176", "#ffb74e", "#ff8a66", "#f1627e", "#b968c7", "#7986cc", "#64b5f6", "#80cbc4", "#a5d6a7"], ["#fff59c", "#ffcc80", "#ffab91", "#fb879e", "#cf93d9", "#9ea8db", "#90caf8", "#b2dfdc", "#c8e6ca"], ["transparent", "#ffffff", "#dedede", "#a9a9a9", "#4b4b4b", "#353535", "#212121", "#000000", "advance"]], Uc = ye({ name: "Palette", emits: ["change"], setup(e, { emit: t }) {
  return { palettes: zc, computedBgStyle: (r) => r === "transparent" ? r : r === "advance" ? {} : { background: C(r).toRgbString() }, onColorChange: (r) => {
    t("change", r);
  } };
} }), Kc = { class: "vc-compact" }, Gc = ["onClick"];
function qc(e, t, r, n, a, o) {
  return E(), L("div", Kc, [(E(true), L(Je, null, Dt(e.palettes, (s, i) => (E(), L("div", { key: i, class: "vc-compact__row" }, [(E(true), L(Je, null, Dt(s, (l, c) => (E(), L("div", { key: c, class: "vc-compact__color-cube--wrap", onClick: (u) => e.onColorChange(l) }, [_("div", { class: se(["vc-compact__color_cube", { advance: l === "advance", transparent: l === "transparent" }]), style: re(e.computedBgStyle(l)) }, null, 6)], 8, Gc))), 128))]))), 128))]);
}
const ni = Ae(Uc, [["render", qc], ["__scopeId", "data-v-b969fd48"]]), Yc = ye({ name: "Board", props: { color: $.instanceOf(K), round: $.bool.def(false), hide: $.bool.def(true) }, emits: ["change"], setup(e, { emit: t }) {
  var r, n, a;
  const o = io(), s = { h: ((r = e.color) == null ? void 0 : r.hue) || 0, s: 1, v: 1 }, i = new K(s).toHexString(), l = Se({ hueColor: i, saturation: ((n = e.color) == null ? void 0 : n.saturation) || 0, brightness: ((a = e.color) == null ? void 0 : a.brightness) || 0 }), c = Z(0), u = Z(0), f = Z(), d = Q(() => ({ top: c.value + "px", left: u.value + "px" })), p = () => {
    if (o) {
      const x = o.vnode.el;
      u.value = l.saturation * (x == null ? void 0 : x.clientWidth), c.value = (1 - l.brightness) * (x == null ? void 0 : x.clientHeight);
    }
  };
  let y = false;
  const v = (x) => {
    y = true, b(x);
  }, g = (x) => {
    y && b(x);
  }, h = () => {
    y = false;
  }, b = (x) => {
    if (o) {
      const w = o.vnode.el, A = w == null ? void 0 : w.getBoundingClientRect();
      let k = x.clientX - A.left, T = x.clientY - A.top;
      k = Ur(k, 0, A.width), T = Ur(T, 0, A.height);
      const j = k / A.width, H = Ur(-(T / A.height) + 1, 0, 1);
      u.value = k, c.value = T, l.saturation = j, l.brightness = H, t("change", j, H);
    }
  };
  return xt(() => {
    o && o.vnode.el && f.value && mi(() => {
      p();
    });
  }), le(() => e.color, (x) => {
    yr(l, { hueColor: new K({ h: x.hue, s: 1, v: 1 }).toHexString(), saturation: x.saturation, brightness: x.brightness }), p();
  }, { deep: true }), { state: l, cursorElement: f, getCursorStyle: d, onClickBoard: v, onDrag: g, onDragEnd: h };
} }), Pn = (e) => (wt("data-v-7f0cdcdf"), e = e(), St(), e), Xc = Pn(() => _("div", { class: "vc-saturation__white" }, null, -1)), Jc = Pn(() => _("div", { class: "vc-saturation__black" }, null, -1)), Zc = Pn(() => _("div", null, null, -1)), Qc = [Zc];
function ef(e, t, r, n, a, o) {
  return E(), L("div", { ref: "boardElement", class: se(["vc-saturation", { "vc-saturation__chrome": e.round, "vc-saturation__hidden": e.hide }]), style: re({ backgroundColor: e.state.hueColor }), onMousedown: t[0] || (t[0] = (...s) => e.onClickBoard && e.onClickBoard(...s)), onMousemove: t[1] || (t[1] = (...s) => e.onDrag && e.onDrag(...s)), onMouseup: t[2] || (t[2] = (...s) => e.onDragEnd && e.onDragEnd(...s)) }, [Xc, Jc, _("div", { class: "vc-saturation__cursor", ref: "cursorElement", style: re(e.getCursorStyle) }, Qc, 4)], 38);
}
const Hn = Ae(Yc, [["render", ef], ["__scopeId", "data-v-7f0cdcdf"]]), tf = ye({ name: "Hue", props: { color: $.instanceOf(K), size: $.oneOf(["small", "default"]).def("default") }, emits: ["change"], setup(e, { emit: t }) {
  const r = Z(null), n = Z(null);
  let a = e.color || new K();
  const o = Se({ hue: a.hue || 0 });
  $e(() => e.color, (u) => {
    u && (a = u, yr(o, { hue: a.hue }));
  }, { deep: true });
  const s = () => {
    if (r.value && n.value) {
      const u = r.value.getBoundingClientRect(), f = n.value.offsetWidth;
      return o.hue === 360 ? u.width - f / 2 : o.hue % 360 * (u.width - f) / 360 + f / 2;
    }
    return 0;
  }, i = Q(() => ({ left: s() + "px", top: 0 })), l = (u) => {
    u.target !== r.value && c(u);
  }, c = (u) => {
    if (u.stopPropagation(), r.value && n.value) {
      const f = r.value.getBoundingClientRect(), d = n.value.offsetWidth;
      let p = u.clientX - f.left;
      p = Math.min(p, f.width - d / 2), p = Math.max(d / 2, p);
      const y = Math.round((p - d / 2) / (f.width - d) * 360);
      a.hue = y, o.hue = y, t("change", y);
    }
  };
  return xt(() => {
    const u = { drag: (f) => {
      c(f);
    }, end: (f) => {
      c(f);
    } };
    r.value && n.value && zt.triggerDragEvent(r.value, u);
  }), { barElement: r, cursorElement: n, getCursorStyle: i, onClickSider: l };
} }), rf = (e) => (wt("data-v-e1a08576"), e = e(), St(), e), nf = rf(() => _("div", { class: "vc-hue-slider__bar-handle" }, null, -1)), af = [nf];
function of(e, t, r, n, a, o) {
  return E(), L("div", { class: se(["vc-hue-slider", { "small-slider": e.size === "small" }]) }, [_("div", { ref: "barElement", class: "vc-hue-slider__bar", onClick: t[0] || (t[0] = (...s) => e.onClickSider && e.onClickSider(...s)) }, [_("div", { class: se(["vc-hue-slider__bar-pointer", { "small-bar": e.size === "small" }]), ref: "cursorElement", style: re(e.getCursorStyle) }, af, 6)], 512)], 2);
}
const jn = Ae(tf, [["render", of], ["__scopeId", "data-v-e1a08576"]]), lf = ye({ name: "Lightness", props: { color: $.instanceOf(K), size: $.oneOf(["small", "default"]).def("default") }, emits: ["change"], setup(e, { emit: t }) {
  const r = Z(null), n = Z(null);
  let a = e.color || new K();
  const [o, s, i] = a.HSL, l = Se({ hue: o, saturation: s, lightness: i });
  $e(() => e.color, (y) => {
    if (y) {
      a = y;
      const [v, g, h] = a.HSL;
      yr(l, { hue: v, saturation: g, lightness: h });
    }
  }, { deep: true });
  const c = Q(() => {
    const y = C({ h: l.hue, s: l.saturation, l: 0.8 }).toPercentageRgbString(), v = C({ h: l.hue, s: l.saturation, l: 0.6 }).toPercentageRgbString(), g = C({ h: l.hue, s: l.saturation, l: 0.4 }).toPercentageRgbString(), h = C({ h: l.hue, s: l.saturation, l: 0.2 }).toPercentageRgbString();
    return { background: [`linear-gradient(to right, rgb(255, 255, 255), ${y}, ${v}, ${g}, ${h}, rgb(0, 0, 0))`, `-webkit-linear-gradient(left, rgb(255, 255, 255), ${y}, ${v}, ${g}, ${h}, rgb(0, 0, 0))`, `-moz-linear-gradient(left, rgb(255, 255, 255), ${y}, ${v}, ${g}, ${h}, rgb(0, 0, 0))`, `-ms-linear-gradient(left, rgb(255, 255, 255), ${y}, ${v}, ${g}, ${h}, rgb(0, 0, 0))`] };
  }), u = () => {
    if (r.value && n.value) {
      const y = l.lightness, v = r.value.getBoundingClientRect(), g = n.value.offsetWidth;
      return (1 - y) * (v.width - g) + g / 2;
    }
    return 0;
  }, f = Q(() => ({ left: u() + "px", top: 0 })), d = (y) => {
    y.target !== r.value && p(y);
  }, p = (y) => {
    if (y.stopPropagation(), r.value && n.value) {
      const v = r.value.getBoundingClientRect(), g = n.value.offsetWidth;
      let h = y.clientX - v.left;
      h = Math.max(g / 2, h), h = Math.min(h, v.width - g / 2);
      const b = 1 - (h - g / 2) / (v.width - g);
      a.lightness = b, t("change", b);
    }
  };
  return xt(() => {
    const y = { drag: (v) => {
      p(v);
    }, end: (v) => {
      p(v);
    } };
    r.value && n.value && zt.triggerDragEvent(r.value, y);
  }), { barElement: r, cursorElement: n, getCursorStyle: f, getBackgroundStyle: c, onClickSider: d };
} }), sf = (e) => (wt("data-v-94a50a9e"), e = e(), St(), e), uf = sf(() => _("div", { class: "vc-lightness-slider__bar-handle" }, null, -1)), cf = [uf];
function ff(e, t, r, n, a, o) {
  return E(), L("div", { class: se(["vc-lightness-slider", { "small-slider": e.size === "small" }]) }, [_("div", { ref: "barElement", class: "vc-lightness-slider__bar", style: re(e.getBackgroundStyle), onClick: t[0] || (t[0] = (...s) => e.onClickSider && e.onClickSider(...s)) }, [_("div", { class: se(["vc-lightness-slider__bar-pointer", { "small-bar": e.size === "small" }]), ref: "cursorElement", style: re(e.getCursorStyle) }, cf, 6)], 4)], 2);
}
const ai = Ae(lf, [["render", ff], ["__scopeId", "data-v-94a50a9e"]]), df = ye({ name: "History", props: { colors: $.arrayOf(String).def(() => []), round: $.bool.def(false) }, emits: ["change"], setup(e, { emit: t }) {
  return { onColorSelect: (r) => {
    t("change", r);
  } };
} }), pf = { key: 0, class: "vc-colorPicker__record" }, hf = { class: "color-list" }, gf = ["onClick"];
function vf(e, t, r, n, a, o) {
  return e.colors && e.colors.length > 0 ? (E(), L("div", pf, [_("div", hf, [(E(true), L(Je, null, Dt(e.colors, (s, i) => (E(), L("div", { key: i, class: se(["color-item", "transparent", { "color-item__round": e.round }]), onClick: (l) => e.onColorSelect(s) }, [_("div", { class: "color-item__display", style: re({ backgroundColor: s }) }, null, 4)], 10, gf))), 128))])])) : N("", true);
}
const Ln = Ae(df, [["render", vf], ["__scopeId", "data-v-0f657238"]]), yf = ye({ name: "Display", props: { color: $.instanceOf(K), disableAlpha: $.bool.def(false) }, emits: ["update:color", "change"], setup(e, { emit: t }) {
  var r, n, a, o;
  const { copy: s, copied: i, isSupported: l } = di(), c = Z("hex"), u = Se({ color: e.color, hex: (r = e.color) == null ? void 0 : r.hex, alpha: Math.round(((n = e.color) == null ? void 0 : n.alpha) || 100), rgba: (a = e.color) == null ? void 0 : a.RGB, previewBgColor: (o = e.color) == null ? void 0 : o.toRgbString() }), f = Q(() => ({ background: u.previewBgColor })), d = () => {
    c.value = c.value === "rgba" ? "hex" : "rgba";
  }, p = Be((h) => {
    if (!h.target.value) return;
    let b = parseInt(h.target.value.replace("%", ""));
    b > 100 && (h.target.value = "100", b = 100), b < 0 && (h.target.value = "0", b = 0), isNaN(b) && (h.target.value = "100", b = 100), !isNaN(b) && u.color && (u.color.alpha = b), t("change", u.color);
  }, 300), y = Be((h, b) => {
    if (u.color) {
      if (c.value === "hex") {
        const x = h.target.value.replace("#", "");
        C(x).isValid() ? [3, 4].includes(x.length) && (u.color.hex = x) : u.color.hex = "000000", t("change", u.color);
      } else if (c.value === "rgba" && b === 3 && h.target.value.toString() === "0." && u.rgba) {
        u.rgba[b] = h.target.value;
        const [x, w, A, k] = u.rgba;
        u.color.hex = C({ r: x, g: w, b: A }).toHex(), u.color.alpha = Math.round(k * 100), t("change", u.color);
      }
    }
  }, 100), v = Be((h, b) => {
    if (h.target.value) {
      if (c.value === "hex") {
        const x = h.target.value.replace("#", "");
        C(x).isValid() && u.color && [6, 8].includes(x.length) && (u.color.hex = x);
      } else if (b !== void 0 && u.rgba && u.color) {
        if (h.target.value < 0 && (h.target.value = 0), b === 3 && ((h.target.value > 1 || isNaN(h.target.value)) && (h.target.value = 1), h.target.value.toString() === "0.")) return;
        b < 3 && h.target.value > 255 && (h.target.value = 255), u.rgba[b] = h.target.value;
        const [x, w, A, k] = u.rgba;
        u.color.hex = C({ r: x, g: w, b: A }).toHex(), u.color.alpha = Math.round(k * 100);
      }
      t("change", u.color);
    }
  }, 300), g = () => {
    if (l && u.color) {
      const h = c.value === "hex" ? u.color.toString(u.color.alpha === 100 ? "hex6" : "hex8") : u.color.toRgbString();
      s(h || "");
    }
  };
  return le(() => e.color, (h) => {
    h && (u.color = h, u.alpha = Math.round(u.color.alpha), u.hex = u.color.hex, u.rgba = u.color.RGB);
  }, { deep: true }), le(() => u.color, () => {
    u.color && (u.previewBgColor = u.color.toRgbString());
  }, { deep: true }), { state: u, getBgColorStyle: f, inputType: c, copied: i, onInputTypeChange: d, onAlphaBlur: p, onInputChange: v, onBlurChange: y, onCopyColorStr: g };
} }), mf = { class: "vc-display" }, bf = { class: "vc-current-color vc-transparent" }, Cf = { key: 0, class: "copy-text" }, xf = { key: 0, style: { display: "flex", flex: "1", gap: "4px", height: "100%" } }, wf = { class: "vc-color-input" }, Sf = { key: 0, class: "vc-alpha-input" }, _f = ["value"], kf = { key: 1, style: { display: "flex", flex: "1", gap: "4px", height: "100%" } }, Af = ["value", "onInput", "onBlur"];
function Of(e, t, r, n, a, o) {
  return E(), L("div", mf, [_("div", bf, [_("div", { class: "color-cube", style: re(e.getBgColorStyle), onClick: t[0] || (t[0] = (...s) => e.onCopyColorStr && e.onCopyColorStr(...s)) }, [e.copied ? (E(), L("span", Cf, "Copied!")) : N("", true)], 4)]), e.inputType === "hex" ? (E(), L("div", xf, [_("div", wf, [nr(_("input", { "onUpdate:modelValue": t[1] || (t[1] = (s) => e.state.hex = s), maxlength: "8", onInput: t[2] || (t[2] = (...s) => e.onInputChange && e.onInputChange(...s)), onBlur: t[3] || (t[3] = (...s) => e.onBlurChange && e.onBlurChange(...s)) }, null, 544), [[bi, e.state.hex]])]), e.disableAlpha ? N("", true) : (E(), L("div", Sf, [_("input", { class: "vc-alpha-input__inner", value: e.state.alpha, onInput: t[4] || (t[4] = (...s) => e.onAlphaBlur && e.onAlphaBlur(...s)) }, null, 40, _f), so("% ")]))])) : e.state.rgba ? (E(), L("div", kf, [(E(true), L(Je, null, Dt(e.state.rgba, (s, i) => (E(), L("div", { class: "vc-color-input", key: i }, [_("input", { value: s, onInput: (l) => e.onInputChange(l, i), onBlur: (l) => e.onBlurChange(l, i) }, null, 40, Af)]))), 128))])) : N("", true), _("div", { class: "vc-input-toggle", onClick: t[5] || (t[5] = (...s) => e.onInputTypeChange && e.onInputTypeChange(...s)) }, Vt(e.inputType), 1)]);
}
const Bn = Ae(yf, [["render", Of], ["__scopeId", "data-v-7334ac20"]]), Ef = ye({ name: "FkColorPicker", components: { Display: Bn, Alpha: Mn, Palette: ni, Board: Hn, Hue: jn, Lightness: ai, History: Ln }, props: { color: $.instanceOf(K), disableHistory: $.bool.def(false), roundHistory: $.bool.def(false), disableAlpha: $.bool.def(false) }, emits: ["update:color", "change", "advanceChange"], setup(e, { emit: t }) {
  const r = e.color || new K(), n = Se({ color: r, hex: r.toHexString(), rgb: r.toRgbString() }), a = Z(false), o = Q(() => ({ background: n.rgb })), s = () => {
    a.value = false, t("advanceChange", false);
  }, i = ln($n, [], {}), l = Be(() => {
    if (e.disableHistory) return;
    const v = n.color.toRgbString();
    if (i.value = i.value.filter((g) => !C.equals(g, v)), !i.value.includes(v)) {
      for (; i.value.length > Tn; ) i.value.pop();
      i.value.unshift(v);
    }
  }, 500), c = (v) => {
    v === "advance" ? (a.value = true, t("advanceChange", true)) : (n.color.hex = v, t("advanceChange", false));
  }, u = (v) => {
    n.color.alpha = v;
  }, f = (v) => {
    n.color.hue = v;
  }, d = (v, g) => {
    n.color.saturation = v, n.color.brightness = g;
  }, p = (v) => {
    n.color.lightness = v;
  }, y = (v) => {
    const g = v.target.value.replace("#", "");
    C(g).isValid() && (n.color.hex = g);
  };
  return le(() => e.color, (v) => {
    v && (n.color = v);
  }, { deep: true }), le(() => n.color, () => {
    n.hex = n.color.hex, n.rgb = n.color.toRgbString(), l(), t("update:color", n.color), t("change", n.color);
  }, { deep: true }), { state: n, advancePanelShow: a, onBack: s, onCompactChange: c, onAlphaChange: u, onHueChange: f, onBoardChange: d, onLightChange: p, onInputChange: y, previewStyle: o, historyColors: i };
} }), Rf = (e) => (wt("data-v-48e3c224"), e = e(), St(), e), $f = { class: "vc-fk-colorPicker" }, Tf = { class: "vc-fk-colorPicker__inner" }, Mf = { class: "vc-fk-colorPicker__header" }, Pf = Rf(() => _("div", { class: "back" }, null, -1)), Hf = [Pf];
function jf(e, t, r, n, a, o) {
  const s = z("Palette"), i = z("Board"), l = z("Hue"), c = z("Lightness"), u = z("Alpha"), f = z("Display"), d = z("History");
  return E(), L("div", $f, [_("div", Tf, [_("div", Mf, [e.advancePanelShow ? (E(), L("span", { key: 0, style: { cursor: "pointer" }, onClick: t[0] || (t[0] = (...p) => e.onBack && e.onBack(...p)) }, Hf)) : N("", true)]), e.advancePanelShow ? N("", true) : (E(), J(s, { key: 0, onChange: e.onCompactChange }, null, 8, ["onChange"])), e.advancePanelShow ? (E(), J(i, { key: 1, color: e.state.color, onChange: e.onBoardChange }, null, 8, ["color", "onChange"])) : N("", true), e.advancePanelShow ? (E(), J(l, { key: 2, color: e.state.color, onChange: e.onHueChange }, null, 8, ["color", "onChange"])) : N("", true), e.advancePanelShow ? N("", true) : (E(), J(c, { key: 3, color: e.state.color, onChange: e.onLightChange }, null, 8, ["color", "onChange"])), e.disableAlpha ? N("", true) : (E(), J(u, { key: 4, color: e.state.color, onChange: e.onAlphaChange }, null, 8, ["color", "onChange"])), Te(f, { color: e.state.color, "disable-alpha": e.disableAlpha }, null, 8, ["color", "disable-alpha"]), e.disableHistory ? N("", true) : (E(), J(d, { key: 5, round: e.roundHistory, colors: e.historyColors, onChange: e.onCompactChange }, null, 8, ["round", "colors", "onChange"]))])]);
}
const no = Ae(Ef, [["render", jf], ["__scopeId", "data-v-48e3c224"]]), Lf = ye({ name: "ChromeColorPicker", components: { Display: Bn, Alpha: Mn, Board: Hn, Hue: jn, History: Ln }, props: { color: $.instanceOf(K), disableHistory: $.bool.def(false), roundHistory: $.bool.def(false), disableAlpha: $.bool.def(false) }, emits: ["update:color", "change"], setup(e, { emit: t }) {
  const r = e.color || new K(), n = Se({ color: r, hex: r.toHexString(), rgb: r.toRgbString() }), a = Q(() => ({ background: n.rgb })), o = ln($n, [], {}), s = Be(() => {
    if (e.disableHistory) return;
    const d = n.color.toRgbString();
    if (o.value = o.value.filter((p) => !C.equals(p, d)), !o.value.includes(d)) {
      for (; o.value.length > Tn; ) o.value.pop();
      o.value.unshift(d);
    }
  }, 500), i = (d) => {
    n.color.alpha = d;
  }, l = (d) => {
    n.color.hue = d;
  }, c = (d) => {
    d.hex !== void 0 && (n.color.hex = d.hex), d.alpha !== void 0 && (n.color.alpha = d.alpha);
  }, u = (d, p) => {
    n.color.saturation = d, n.color.brightness = p;
  }, f = (d) => {
    d !== "advance" && (n.color.hex = d);
  };
  return le(() => e.color, (d) => {
    d && (n.color = d);
  }, { deep: true }), le(() => n.color, () => {
    n.hex = n.color.hex, n.rgb = n.color.toRgbString(), s(), t("update:color", n.color), t("change", n.color);
  }, { deep: true }), { state: n, previewStyle: a, historyColors: o, onAlphaChange: i, onHueChange: l, onBoardChange: u, onInputChange: c, onCompactChange: f };
} }), Bf = { class: "vc-chrome-colorPicker" }, If = { class: "vc-chrome-colorPicker-body" }, Df = { class: "chrome-controls" }, Vf = { class: "chrome-sliders" };
function Nf(e, t, r, n, a, o) {
  const s = z("Board"), i = z("Hue"), l = z("Alpha"), c = z("Display"), u = z("History");
  return E(), L("div", Bf, [Te(s, { round: true, hide: false, color: e.state.color, onChange: e.onBoardChange }, null, 8, ["color", "onChange"]), _("div", If, [_("div", Df, [_("div", Vf, [Te(i, { size: "small", color: e.state.color, onChange: e.onHueChange }, null, 8, ["color", "onChange"]), e.disableAlpha ? N("", true) : (E(), J(l, { key: 0, size: "small", color: e.state.color, onChange: e.onAlphaChange }, null, 8, ["color", "onChange"]))])]), Te(c, { color: e.state.color, "disable-alpha": e.disableAlpha }, null, 8, ["color", "disable-alpha"]), e.disableHistory ? N("", true) : (E(), J(u, { key: 0, round: e.roundHistory, colors: e.historyColors, onChange: e.onCompactChange }, null, 8, ["round", "colors", "onChange"]))])]);
}
const ao = Ae(Lf, [["render", Nf], ["__scopeId", "data-v-2611d66c"]]), In = "Vue3ColorPickerProvider", Ff = (e, t) => {
  const r = e.getBoundingClientRect(), n = r.left + r.width / 2, a = r.top + r.height / 2, o = Math.abs(n - t.clientX), s = Math.abs(a - t.clientY), i = Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2)), l = s / i, c = Math.acos(l);
  let u = Math.floor(180 / (Math.PI / c));
  return t.clientX > n && t.clientY > a && (u = 180 - u), t.clientX == n && t.clientY > a && (u = 180), t.clientX > n && t.clientY == a && (u = 90), t.clientX < n && t.clientY > a && (u = 180 + u), t.clientX < n && t.clientY == a && (u = 270), t.clientX < n && t.clientY < a && (u = 360 - u), u;
};
let Kr = false;
const Wf = (e, t) => {
  const r = function(a) {
    var o;
    (o = t.drag) == null || o.call(t, a);
  }, n = function(a) {
    var o;
    document.removeEventListener("mousemove", r, false), document.removeEventListener("mouseup", n, false), document.onselectstart = null, document.ondragstart = null, Kr = false, (o = t.end) == null || o.call(t, a);
  };
  e && e.addEventListener("mousedown", (a) => {
    var o;
    Kr || (document.onselectstart = () => false, document.ondragstart = () => false, document.addEventListener("mousemove", r, false), document.addEventListener("mouseup", n, false), Kr = true, (o = t.start) == null || o.call(t, a));
  });
}, zf = { angle: { type: Number, default: 0 }, size: { type: Number, default: 16, validator: (e) => e >= 16 }, borderWidth: { type: Number, default: 1, validator: (e) => e >= 1 }, borderColor: { type: String, default: "#666" } }, Uf = ye({ name: "Angle", props: zf, emits: ["update:angle", "change"], setup(e, { emit: t }) {
  const r = Z(null), n = Z(0);
  $e(() => e.angle, (i) => {
    n.value = i;
  });
  const a = () => {
    let i = Number(n.value);
    isNaN(i) || (i = i > 360 || i < 0 ? e.angle : i, n.value = i === 360 ? 0 : i, t("update:angle", n.value), t("change", n.value));
  }, o = Q(() => ({ width: e.size + "px", height: e.size + "px", borderWidth: e.borderWidth + "px", borderColor: e.borderColor, transform: `rotate(${n.value}deg)` })), s = (i) => {
    r.value && (n.value = Ff(r.value, i) % 360, a());
  };
  return pi(() => {
    const i = { drag: (l) => {
      s(l);
    }, end: (l) => {
      s(l);
    } };
    r.value && Wf(r.value, i);
  }), () => Te("div", { class: "bee-angle" }, [Te("div", { class: "bee-angle__round", ref: r, style: o.value }, null)]);
} }), Kf = ye({ name: "GradientColorPicker", components: { Angle: Uf, Display: Bn, Alpha: Mn, Palette: ni, Board: Hn, Hue: jn, Lightness: ai, History: Ln }, props: { startColor: $.instanceOf(K).isRequired, endColor: $.instanceOf(K).isRequired, startColorStop: $.number.def(0), endColorStop: $.number.def(100), angle: $.number.def(0), type: $.oneOf(["linear", "radial"]).def("linear"), disableHistory: $.bool.def(false), roundHistory: $.bool.def(false), disableAlpha: $.bool.def(false), pickerType: $.oneOf(["fk", "chrome"]).def("fk") }, emits: ["update:startColor", "update:endColor", "update:angle", "update:startColorStop", "update:endColorStop", "startColorChange", "endColorChange", "advanceChange", "angleChange", "startColorStopChange", "endColorStopChange", "typeChange"], setup(e, { emit: t }) {
  const r = Se({ startActive: true, startColor: e.startColor, endColor: e.endColor, startColorStop: e.startColorStop, endColorStop: e.endColorStop, angle: e.angle, type: e.type, startColorRgba: e.startColor.toRgbString(), endColorRgba: e.endColor.toRgbString() }), n = lo(In), a = Z(e.pickerType === "chrome"), o = Z(), s = Z(), i = Z();
  $e(() => [e.startColor, e.endColor, e.angle], (m) => {
    r.startColor = m[0], r.endColor = m[1], r.angle = m[2];
  }), $e(() => e.type, (m) => {
    r.type = m;
  });
  const l = Q({ get: () => r.startActive ? r.startColor : r.endColor, set: (m) => {
    if (r.startActive) {
      r.startColor = m;
      return;
    }
    r.endColor = m;
  } }), c = Q(() => {
    if (i.value && o.value) {
      const m = r.startColorStop / 100, R = i.value.getBoundingClientRect(), P = o.value.offsetWidth;
      return Math.round(m * (R.width - P) + P / 2);
    }
    return 0;
  }), u = Q(() => {
    if (i.value && s.value) {
      const m = r.endColorStop / 100, R = i.value.getBoundingClientRect(), P = s.value.offsetWidth;
      return Math.round(m * (R.width - P) + P / 2);
    }
    return 0;
  }), f = Q(() => {
    let m = `background: linear-gradient(${r.angle}deg, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`;
    return r.type === "radial" && (m = `background: radial-gradient(circle, ${r.startColorRgba} ${r.startColorStop}%, ${r.endColorRgba} ${r.endColorStop}%)`), m;
  }), d = (m) => {
    var R;
    if (r.startActive = true, i.value && o.value) {
      const P = (R = i.value) == null ? void 0 : R.getBoundingClientRect();
      let D = m.clientX - P.left;
      D = Math.max(o.value.offsetWidth / 2, D), D = Math.min(D, P.width - o.value.offsetWidth / 2), r.startColorStop = Math.round((D - o.value.offsetWidth / 2) / (P.width - o.value.offsetWidth) * 100), t("update:startColorStop", r.startColorStop), t("startColorStopChange", r.startColorStop);
    }
  }, p = (m) => {
    var R;
    if (r.startActive = false, i.value && s.value) {
      const P = (R = i.value) == null ? void 0 : R.getBoundingClientRect();
      let D = m.clientX - P.left;
      D = Math.max(s.value.offsetWidth / 2, D), D = Math.min(D, P.width - s.value.offsetWidth / 2), r.endColorStop = Math.round((D - s.value.offsetWidth / 2) / (P.width - s.value.offsetWidth) * 100), t("update:endColorStop", r.endColorStop), t("endColorStopChange", r.endColorStop);
    }
  }, y = (m) => {
    const R = m.target, P = parseInt(R.value.replace("\xB0", ""));
    isNaN(P) || (r.angle = P % 360), t("update:angle", r.angle), t("angleChange", r.angle);
  }, v = (m) => {
    r.angle = m, t("update:angle", r.angle), t("angleChange", r.angle);
  }, g = (m) => {
    m === "advance" ? (a.value = true, t("advanceChange", true)) : (l.value.hex = m, t("advanceChange", false)), k();
  }, h = (m) => {
    l.value.alpha = m, k();
  }, b = (m) => {
    l.value.hue = m, k();
  }, x = (m, R) => {
    l.value.saturation = m, l.value.brightness = R, k();
  }, w = (m) => {
    l.value.lightness = m, k();
  }, A = () => {
    k();
  }, k = () => {
    r.startActive ? (t("update:startColor", r.startColor), t("startColorChange", r.startColor)) : (t("update:endColor", r.endColor), t("endColorChange", r.endColor));
  }, T = () => {
    a.value = false, t("advanceChange", false);
  }, j = () => {
    r.type = r.type === "linear" ? "radial" : "linear", t("typeChange", r.type);
  }, H = ln($n, [], {}), I = Be(() => {
    if (e.disableHistory) return;
    const m = l.value.toRgbString();
    if (H.value = H.value.filter((R) => !C.equals(R, m)), !H.value.includes(m)) {
      for (; H.value.length > Tn; ) H.value.pop();
      H.value.unshift(m);
    }
  }, 500);
  return xt(() => {
    s.value && o.value && (zt.triggerDragEvent(s.value, { drag: (m) => {
      p(m);
    }, end: (m) => {
      p(m);
    } }), zt.triggerDragEvent(o.value, { drag: (m) => {
      d(m);
    }, end: (m) => {
      d(m);
    } }));
  }), le(() => r.startColor, (m) => {
    r.startColorRgba = m.toRgbString();
  }, { deep: true }), le(() => r.endColor, (m) => {
    r.endColorRgba = m.toRgbString();
  }, { deep: true }), le(() => l.value, () => {
    I();
  }, { deep: true }), { startGradientRef: o, stopGradientRef: s, colorRangeRef: i, state: r, currentColor: l, getStartColorLeft: c, getEndColorLeft: u, gradientBg: f, advancePanelShow: a, onDegreeBlur: y, onCompactChange: g, onAlphaChange: h, onHueChange: b, onBoardChange: x, onLightChange: w, historyColors: H, onBack: T, onDegreeChange: v, onDisplayChange: A, onTypeChange: j, lang: n == null ? void 0 : n.lang };
} }), oi = (e) => (wt("data-v-c4d6d6ea"), e = e(), St(), e), Gf = { class: "vc-gradient-picker" }, qf = { class: "vc-gradient-picker__header" }, Yf = { class: "vc-gradient__types" }, Xf = { class: "vc-gradient-wrap__types" }, Jf = { class: "vc-picker-degree-input vc-degree-input" }, Zf = { class: "vc-degree-input__control" }, Qf = ["value"], ed = { class: "vc-degree-input__panel" }, td = { class: "vc-degree-input__disk" }, rd = { class: "vc-gradient-picker__body" }, nd = { class: "vc-color-range", ref: "colorRangeRef" }, ad = { class: "vc-color-range__container" }, od = { class: "vc-gradient__stop__container" }, id = ["title"], ld = oi(() => _("span", { class: "vc-gradient__stop--inner" }, null, -1)), sd = [ld], ud = ["title"], cd = oi(() => _("span", { class: "vc-gradient__stop--inner" }, null, -1)), fd = [cd];
function dd(e, t, r, n, a, o) {
  var s, i;
  const l = z("Angle"), c = z("Board"), u = z("Hue"), f = z("Palette"), d = z("Lightness"), p = z("Alpha"), y = z("Display"), v = z("History");
  return E(), L("div", Gf, [_("div", qf, [_("div", null, [nr(_("div", { class: "back", style: { cursor: "pointer" }, onClick: t[0] || (t[0] = (...g) => e.onBack && e.onBack(...g)) }, null, 512), [[qr, e.pickerType === "fk" && e.advancePanelShow]])]), _("div", Yf, [_("div", Xf, [(E(), L(Je, null, Dt(["linear", "radial"], (g) => _("div", { class: se(["vc-gradient__type", { active: e.state.type === g }]), key: g, onClick: t[1] || (t[1] = (...h) => e.onTypeChange && e.onTypeChange(...h)) }, Vt(e.lang ? e.lang[g] : g), 3)), 64))]), nr(_("div", Jf, [_("div", Zf, [_("input", { value: e.state.angle, onBlur: t[2] || (t[2] = (...g) => e.onDegreeBlur && e.onDegreeBlur(...g)) }, null, 40, Qf), so("deg ")]), _("div", ed, [_("div", td, [Te(l, { angle: e.state.angle, "onUpdate:angle": t[3] || (t[3] = (g) => e.state.angle = g), size: 40, onChange: e.onDegreeChange }, null, 8, ["angle", "onChange"])])])], 512), [[qr, e.state.type === "linear"]])])]), _("div", rd, [_("div", nd, [_("div", ad, [_("div", { class: "vc-background", style: re(e.gradientBg) }, null, 4), _("div", od, [_("div", { class: se(["vc-gradient__stop", { "vc-gradient__stop--current": e.state.startActive }]), ref: "startGradientRef", title: (s = e.lang) == null ? void 0 : s.start, style: re({ left: e.getStartColorLeft + "px", backgroundColor: e.state.startColorRgba }) }, sd, 14, id), _("div", { class: se(["vc-gradient__stop", { "vc-gradient__stop--current": !e.state.startActive }]), ref: "stopGradientRef", title: (i = e.lang) == null ? void 0 : i.end, style: re({ left: e.getEndColorLeft + "px", backgroundColor: e.state.endColorRgba }) }, fd, 14, ud)])])], 512)]), e.advancePanelShow ? (E(), J(c, { key: 0, color: e.currentColor, onChange: e.onBoardChange }, null, 8, ["color", "onChange"])) : N("", true), e.advancePanelShow ? (E(), J(u, { key: 1, color: e.currentColor, onChange: e.onHueChange }, null, 8, ["color", "onChange"])) : N("", true), e.advancePanelShow ? N("", true) : (E(), J(f, { key: 2, onChange: e.onCompactChange }, null, 8, ["onChange"])), e.advancePanelShow ? N("", true) : (E(), J(d, { key: 3, color: e.currentColor, onChange: e.onLightChange }, null, 8, ["color", "onChange"])), e.disableAlpha ? N("", true) : (E(), J(p, { key: 4, color: e.currentColor, onChange: e.onAlphaChange }, null, 8, ["color", "onChange"])), Te(y, { color: e.currentColor, "disable-alpha": e.disableAlpha, onChange: e.onDisplayChange }, null, 8, ["color", "disable-alpha", "onChange"]), e.disableHistory ? N("", true) : (E(), J(v, { key: 5, round: e.roundHistory, colors: e.historyColors, onChange: e.onCompactChange }, null, 8, ["round", "colors", "onChange"]))]);
}
const oo = Ae(Kf, [["render", dd], ["__scopeId", "data-v-c4d6d6ea"]]), pd = ye({ name: "WrapContainer", props: { theme: $.oneOf(["white", "black"]).def("white"), showTab: $.bool.def(false), activeKey: $.oneOf(["pure", "gradient"]).def("pure") }, emits: ["update:activeKey", "change"], setup(e, { emit: t }) {
  const r = Se({ activeKey: e.activeKey }), n = lo(In), a = (o) => {
    r.activeKey = o, t("update:activeKey", o), t("change", o);
  };
  return le(() => e.activeKey, (o) => {
    r.activeKey = o;
  }), { state: r, onActiveKeyChange: a, lang: n == null ? void 0 : n.lang };
} }), hd = { class: "vc-colorpicker--container" }, gd = { key: 0, class: "vc-colorpicker--tabs" }, vd = { class: "vc-colorpicker--tabs__inner" }, yd = { class: "vc-btn__content" }, md = { class: "vc-btn__content" };
function bd(e, t, r, n, a, o) {
  var s, i;
  return E(), L("div", { class: se(["vc-colorpicker", e.theme]) }, [_("div", hd, [e.showTab ? (E(), L("div", gd, [_("div", vd, [_("div", { class: se(["vc-colorpicker--tabs__btn", { "vc-btn-active": e.state.activeKey === "pure" }]), onClick: t[0] || (t[0] = (l) => e.onActiveKeyChange("pure")) }, [_("button", null, [_("div", yd, Vt((s = e.lang) == null ? void 0 : s.pure), 1)])], 2), _("div", { class: se(["vc-colorpicker--tabs__btn", { "vc-btn-active": e.state.activeKey === "gradient" }]), onClick: t[1] || (t[1] = (l) => e.onActiveKeyChange("gradient")) }, [_("button", null, [_("div", md, Vt((i = e.lang) == null ? void 0 : i.gradient), 1)])], 2), _("div", { class: "vc-colorpicker--tabs__bg", style: re({ width: "50%", left: `calc(${e.state.activeKey === "gradient" ? 50 : 0}%)` }) }, null, 4)])])) : N("", true), Gr(e.$slots, "default", {}, void 0, true)])], 2);
}
const Cd = Ae(pd, [["render", bd], ["__scopeId", "data-v-0492277d"]]), xd = { start: "Start", end: "End", pure: "Pure", gradient: "Gradient", linear: "linear", radial: "radial" }, wd = { start: "\u5F00\u59CB", end: "\u7ED3\u675F", pure: "\u7EAF\u8272", gradient: "\u6E10\u53D8", linear: "\u7EBF\u6027", radial: "\u5F84\u5411" }, Sd = { En: xd, "ZH-cn": wd }, _d = { isWidget: $.bool.def(false), pickerType: $.oneOf(["fk", "chrome"]).def("fk"), shape: $.oneOf(["circle", "square"]).def("square"), pureColor: { type: [String, Object], default: "#000000" }, gradientColor: $.string.def("linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"), format: { type: String, default: "rgb" }, disableAlpha: $.bool.def(false), disableHistory: $.bool.def(false), roundHistory: $.bool.def(false), useType: $.oneOf(["pure", "gradient", "both"]).def("pure"), activeKey: $.oneOf(["pure", "gradient"]).def("pure"), lang: { type: String, default: "ZH-cn" }, zIndex: $.number.def(9999), pickerContainer: { type: [String, HTMLElement], default: "body" }, debounce: $.number.def(100), theme: $.oneOf(["white", "black"]).def("white"), blurClose: $.bool.def(false), defaultPopup: $.bool.def(false) }, kd = ye({ name: "ColorPicker", components: { FkColorPicker: no, ChromeColorPicker: ao, GradientColorPicker: oo, WrapContainer: Cd }, inheritAttrs: false, props: _d, emits: ["update:pureColor", "pureColorChange", "update:gradientColor", "gradientColorChange", "update:activeKey", "activeKeyChange"], setup(e, { emit: t }) {
  gi(In, { lang: Q(() => Sd[e.lang || "ZH-cn"]) });
  const r = !!vi().extra, n = Se({ pureColor: e.pureColor || "", activeKey: e.useType === "gradient" ? "gradient" : e.activeKey, isAdvanceMode: false }), a = new K("#000"), o = new K("#000"), s = new K(n.pureColor), i = Se({ startColor: a, endColor: o, startColorStop: 0, endColorStop: 100, angle: 0, type: "linear", gradientColor: e.gradientColor }), l = Z(s), c = Z(e.defaultPopup), u = Z(null), f = Z(null);
  let d = null;
  const p = Q(() => ({ background: n.activeKey !== "gradient" ? C(n.pureColor).toRgbString() : i.gradientColor })), y = Q(() => n.activeKey === "gradient" ? oo.name : e.pickerType === "fk" ? no.name : ao.name), v = (m) => {
    n.isAdvanceMode = m;
  }, g = Q(() => {
    const m = { disableAlpha: e.disableAlpha, disableHistory: e.disableHistory, roundHistory: e.roundHistory, pickerType: e.pickerType };
    return n.activeKey === "gradient" ? { ...m, startColor: i.startColor, endColor: i.endColor, angle: i.angle, type: i.type, startColorStop: i.startColorStop, endColorStop: i.endColorStop, onStartColorChange: (R) => {
      i.startColor = R, A();
    }, onEndColorChange: (R) => {
      i.endColor = R, A();
    }, onStartColorStopChange: (R) => {
      i.startColorStop = R, A();
    }, onEndColorStopChange: (R) => {
      i.endColorStop = R, A();
    }, onAngleChange: (R) => {
      i.angle = R, A();
    }, onTypeChange: (R) => {
      i.type = R, A();
    }, onAdvanceChange: v } : { ...m, disableAlpha: e.disableAlpha, disableHistory: e.disableHistory, roundHistory: e.roundHistory, color: l.value, onChange: j, onAdvanceChange: v };
  }), h = () => {
    c.value = true, d ? d.update() : T();
  }, b = () => {
    c.value = false;
  }, x = Be(() => {
    !e.isWidget && e.blurClose && b();
  }, 100);
  yi(f, () => {
    b();
  });
  const w = () => {
    var m, R, P, D;
    try {
      const [B] = na.parse(i.gradientColor);
      if (B && B.type.includes("gradient") && B.colorStops.length >= 2) {
        const q = B.colorStops[0], oe = B.colorStops[1];
        i.startColorStop = Number((m = q.length) == null ? void 0 : m.value) || 0, i.endColorStop = Number((R = oe.length) == null ? void 0 : R.value) || 0, B.type === "linear-gradient" && ((P = B.orientation) == null ? void 0 : P.type) === "angular" && (i.angle = Number((D = B.orientation) == null ? void 0 : D.value) || 0), i.type = B.type.split("-")[0];
        const [Fe, be, Y, V] = q.value, [Oe, S, O, M] = oe.value;
        i.startColor = new K({ r: Number(Fe), g: Number(be), b: Number(Y), a: Number(V) }), i.endColor = new K({ r: Number(Oe), g: Number(S), b: Number(O), a: Number(M) });
      }
    } catch (B) {
      console.log(`[Parse Color]: ${B}`);
    }
  }, A = Be(() => {
    const m = k();
    try {
      i.gradientColor = na.stringify(m), t("update:gradientColor", i.gradientColor), t("gradientColorChange", i.gradientColor);
    } catch (R) {
      console.log(R);
    }
  }, e.debounce), k = () => {
    const m = [], R = i.startColor.RGB.map((B) => B.toString()), P = i.endColor.RGB.map((B) => B.toString()), D = [{ type: "rgba", value: [R[0], R[1], R[2], R[3]], length: { value: i.startColorStop + "", type: "%" } }, { type: "rgba", value: [P[0], P[1], P[2], P[3]], length: { value: i.endColorStop + "", type: "%" } }];
    return i.type === "linear" ? m.push({ type: "linear-gradient", orientation: { type: "angular", value: i.angle + "" }, colorStops: D }) : i.type === "radial" && m.push({ type: "radial-gradient", orientation: [{ type: "shape", value: "circle" }], colorStops: D }), m;
  }, T = () => {
    u.value && f.value && (d = Ql(u.value, f.value, { placement: "auto", modifiers: [{ name: "offset", options: { offset: [0, 8] } }, { name: "flip", options: { allowedAutoPlacements: ["top", "bottom", "left", "right"], rootBoundary: "viewport" } }] }));
  }, j = (m) => {
    l.value = m, n.pureColor = m.toString(e.format), H();
  }, H = Be(() => {
    t("update:pureColor", n.pureColor), t("pureColorChange", n.pureColor);
  }, e.debounce), I = (m) => {
    n.activeKey = m, t("update:activeKey", m), t("activeKeyChange", m);
  };
  return xt(() => {
    w(), d || T();
  }), le(() => e.gradientColor, (m) => {
    m != i.gradientColor && (i.gradientColor = m);
  }), le(() => i.gradientColor, () => {
    w();
  }), le(() => e.activeKey, (m) => {
    n.activeKey = m;
  }), le(() => e.useType, (m) => {
    n.activeKey !== "gradient" && m === "gradient" ? n.activeKey = "gradient" : n.activeKey = "pure";
  }), le(() => e.pureColor, (m) => {
    C.equals(m, n.pureColor) || (n.pureColor = m, l.value = new K(m));
  }, { deep: true }), { colorCubeRef: u, pickerRef: f, showPicker: c, colorInstance: l, getBgColorStyle: p, getComponentName: y, getBindArgs: g, state: n, hasExtra: r, onColorChange: j, onShowPicker: h, onActiveKeyChange: I, onAutoClose: x };
} }), Ad = { key: 0, class: "vc-color-extra" }, Od = { key: 0, class: "vc-color-extra" };
function Ed(e, t, r, n, a, o) {
  const s = z("WrapContainer");
  return E(), L(Je, null, [e.isWidget ? (E(), J(s, { key: 0, "active-key": e.state.activeKey, "onUpdate:activeKey": t[0] || (t[0] = (i) => e.state.activeKey = i), "show-tab": e.useType === "both", style: re({ zIndex: e.zIndex }), theme: e.theme, onChange: e.onActiveKeyChange }, { default: Pt(() => [(E(), J(qn(e.getComponentName), Yn({ key: e.getComponentName }, e.getBindArgs), null, 16)), e.hasExtra ? (E(), L("div", Ad, [Gr(e.$slots, "extra", {}, void 0, true)])) : N("", true)]), _: 3 }, 8, ["active-key", "show-tab", "style", "theme", "onChange"])) : N("", true), e.isWidget ? N("", true) : (E(), L(Je, { key: 1 }, [_("div", { class: se(["vc-color-wrap transparent", { round: e.shape === "circle" }]), ref: "colorCubeRef" }, [_("div", { class: "current-color", style: re(e.getBgColorStyle), onClick: t[1] || (t[1] = (...i) => e.onShowPicker && e.onShowPicker(...i)) }, null, 4)], 2), (E(), J(hi, { to: e.pickerContainer }, [nr(_("div", { ref: "pickerRef", style: re({ zIndex: e.zIndex }), onMouseleave: t[3] || (t[3] = (...i) => e.onAutoClose && e.onAutoClose(...i)) }, [e.showPicker ? (E(), J(s, { key: 0, "show-tab": e.useType === "both" && !e.state.isAdvanceMode, theme: e.theme, "active-key": e.state.activeKey, "onUpdate:activeKey": t[2] || (t[2] = (i) => e.state.activeKey = i), onChange: e.onActiveKeyChange }, { default: Pt(() => [(E(), J(qn(e.getComponentName), Yn({ key: e.getComponentName }, e.getBindArgs), null, 16)), e.hasExtra ? (E(), L("div", Od, [Gr(e.$slots, "extra", {}, void 0, true)])) : N("", true)]), _: 3 }, 8, ["show-tab", "theme", "active-key", "onChange"])) : N("", true)], 36), [[qr, e.showPicker]])], 8, ["to"]))], 64))], 64);
}
const Rd = Ae(kd, [["render", Ed], ["__scopeId", "data-v-354ca836"]]), $d = { components: { ColorPicker: Rd }, props: { bgValue: { type: String }, useType: { type: String, default: "both" }, format: { type: String, default: "rgb" } }, setup(e, t) {
  const r = wi(), n = Q(() => r.themeData), { proxy: a } = io(), o = Se({ background: e.bgValue, isWidget: false, showBgDialog: false, pureColor: "", gradientColor: "" });
  $e(() => o.pureColor, (c) => {
    a.$emit("onChange", c);
  }), $e(() => o.gradientColor, (c) => {
    a.$emit("onChange", c);
  }), $e(() => o.background, (c) => {
    c && c.includes("gradient") ? o.gradientColor = c : o.pureColor = c;
  }), $e(() => e.bgValue, (c) => {
    o.background = c;
  });
  const s = Q(() => {
    const c = o.background;
    return c && c.indexOf("gradient") > -1 ? { backgroundImage: c } : { backgroundColor: c };
  }), i = Q(() => {
    const c = n.value.themeColor;
    return c && c.indexOf("gradient") > -1 ? { backgroundImage: c } : { backgroundColor: c };
  });
  function l() {
    if (e.useType === "pure" && n.value.themeColor && n.value.themeColor.indexOf("gradient") > -1) {
      a.$message.error(a.$t("mall.pagedevise.noGradientSupport"));
      return;
    }
    o.background = n.value.themeColor, t.emit("onChange", o.background);
  }
  return { ...Ci(o), bgStyle: s, themeStyle: i, onThemeBg: l };
} }, Td = { class: "w-full" }, Md = { class: "flex text-sm" }, Pd = { class: "color-picker-select" };
function Hd(e, t, r, n, a, o) {
  const s = z("color-picker"), i = z("el-popover"), l = z("el-input");
  return E(), L("div", Td, [Te(l, { modelValue: e.background, "onUpdate:modelValue": t[4] || (t[4] = (c) => e.background = c), size: "small", class: "w-full", style: { "margin-top": "3px" } }, { append: Pt(() => [_("div", Md, [Te(i, { width: 300, trigger: "click" }, { reference: Pt(() => [_("div", { style: re(n.bgStyle), class: "w-[32px] h-[22px] cursor-pointer ml-[-5px] mr-[-4px]" }, null, 4)]), default: Pt(() => [_("div", Pd, [r.useType == "pure" ? (E(), J(s, { key: 0, pureColor: e.pureColor, "onUpdate:pureColor": t[0] || (t[0] = (c) => e.pureColor = c), useType: r.useType, isWidget: true, format: r.format }, null, 8, ["pureColor", "useType", "format"])) : (E(), J(s, { key: 1, pureColor: e.pureColor, "onUpdate:pureColor": t[1] || (t[1] = (c) => e.pureColor = c), useType: r.useType, gradientColor: e.gradientColor, "onUpdate:gradientColor": t[2] || (t[2] = (c) => e.gradientColor = c), isWidget: true, format: r.format }, null, 8, ["pureColor", "useType", "gradientColor", "format"]))]), _("div", { style: re(n.themeStyle), class: "mx-[15px] cursor-pointer text-white text-center p-2", onClick: t[3] || (t[3] = (...c) => n.onThemeBg && n.onThemeBg(...c)) }, Vt(e.$t("mall.pagedevise.useThemeColor")), 5)]), _: 1 })])]), _: 1 }, 8, ["modelValue"])]);
}
const Dd = xi($d, [["render", Hd], ["__scopeId", "data-v-a9eae8e8"]]);
export {
  Dd as default
};
