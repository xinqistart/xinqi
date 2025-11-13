import { d as yt, j as oe, w as ae, ah as ue, n as dt, R as st, aD as Wt, p as tt, r as O, g as K, o as C, u as d, h as m, b as v, e as x, f as W, z as H, U as q, aE as Mt, i as Xt, aF as _t, _ as kt, a3 as Yt, E as he, q as fe, t as le, ad as ce, aB as de, c as mt, B as at, aG as Z, I as pe, aa as ge, F as ve, v as ye } from "./index-DAdfXJ2i.js";
import { u as lt } from "./verifyCode-tnwrOe84.js";
import { a as J, b as me } from "./useNav-CaFDUZom.js";
import { F as be } from "./index-N3Ti2Rv6.js";
import { a as we, b as Se, u as Te, d as Bt } from "./check-Nn_i1fYI.js";
var Ee = "0123456789abcdefghijklmnopqrstuvwxyz";
function Q(r) {
  return Ee.charAt(r);
}
function De(r, t) {
  return r & t;
}
function bt(r, t) {
  return r | t;
}
function Ut(r, t) {
  return r ^ t;
}
function Ht(r, t) {
  return r & ~t;
}
function xe(r) {
  if (r == 0) return -1;
  var t = 0;
  return (r & 65535) == 0 && (r >>= 16, t += 16), (r & 255) == 0 && (r >>= 8, t += 8), (r & 15) == 0 && (r >>= 4, t += 4), (r & 3) == 0 && (r >>= 2, t += 2), (r & 1) == 0 && ++t, t;
}
function Re(r) {
  for (var t = 0; r != 0; ) r &= r - 1, ++t;
  return t;
}
var ft = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", te = "=";
function vt(r) {
  var t, e, i = "";
  for (t = 0; t + 3 <= r.length; t += 3) e = parseInt(r.substring(t, t + 3), 16), i += ft.charAt(e >> 6) + ft.charAt(e & 63);
  for (t + 1 == r.length ? (e = parseInt(r.substring(t, t + 1), 16), i += ft.charAt(e << 2)) : t + 2 == r.length && (e = parseInt(r.substring(t, t + 2), 16), i += ft.charAt(e >> 2) + ft.charAt((e & 3) << 4)); (i.length & 3) > 0; ) i += te;
  return i;
}
function qt(r) {
  var t = "", e, i = 0, n = 0;
  for (e = 0; e < r.length && r.charAt(e) != te; ++e) {
    var s = ft.indexOf(r.charAt(e));
    s < 0 || (i == 0 ? (t += Q(s >> 2), n = s & 3, i = 1) : i == 1 ? (t += Q(n << 2 | s >> 4), n = s & 15, i = 2) : i == 2 ? (t += Q(n), t += Q(s >> 2), n = s & 3, i = 3) : (t += Q(n << 2 | s >> 4), t += Q(s & 15), i = 0));
  }
  return i == 1 && (t += Q(n << 2)), t;
}
var ut, _e = { decode: function(r) {
  var t;
  if (ut === void 0) {
    var e = "0123456789ABCDEF", i = ` \f
\r	\xA0\u2028\u2029`;
    for (ut = {}, t = 0; t < 16; ++t) ut[e.charAt(t)] = t;
    for (e = e.toLowerCase(), t = 10; t < 16; ++t) ut[e.charAt(t)] = t;
    for (t = 0; t < i.length; ++t) ut[i.charAt(t)] = -1;
  }
  var n = [], s = 0, a = 0;
  for (t = 0; t < r.length; ++t) {
    var o = r.charAt(t);
    if (o == "=") break;
    if (o = ut[o], o != -1) {
      if (o === void 0) throw new Error("Illegal character at offset " + t);
      s |= o, ++a >= 2 ? (n[n.length] = s, s = 0, a = 0) : s <<= 4;
    }
  }
  if (a) throw new Error("Hex encoding incomplete: 4 bits missing");
  return n;
} }, nt, Ct = { decode: function(r) {
  var t;
  if (nt === void 0) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = `= \f
\r	\xA0\u2028\u2029`;
    for (nt = /* @__PURE__ */ Object.create(null), t = 0; t < 64; ++t) nt[e.charAt(t)] = t;
    for (nt["-"] = 62, nt._ = 63, t = 0; t < i.length; ++t) nt[i.charAt(t)] = -1;
  }
  var n = [], s = 0, a = 0;
  for (t = 0; t < r.length; ++t) {
    var o = r.charAt(t);
    if (o == "=") break;
    if (o = nt[o], o != -1) {
      if (o === void 0) throw new Error("Illegal character at offset " + t);
      s |= o, ++a >= 4 ? (n[n.length] = s >> 16, n[n.length] = s >> 8 & 255, n[n.length] = s & 255, s = 0, a = 0) : s <<= 6;
    }
  }
  switch (a) {
    case 1:
      throw new Error("Base64 encoding incomplete: at least 2 bits missing");
    case 2:
      n[n.length] = s >> 10;
      break;
    case 3:
      n[n.length] = s >> 16, n[n.length] = s >> 8 & 255;
      break;
  }
  return n;
}, re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/, unarmor: function(r) {
  var t = Ct.re.exec(r);
  if (t) if (t[1]) r = t[1];
  else if (t[2]) r = t[2];
  else throw new Error("RegExp out of sync");
  return Ct.decode(r);
} }, ht = 1e13, gt = (function() {
  function r(t) {
    this.buf = [+t || 0];
  }
  return r.prototype.mulAdd = function(t, e) {
    var i = this.buf, n = i.length, s, a;
    for (s = 0; s < n; ++s) a = i[s] * t + e, a < ht ? e = 0 : (e = 0 | a / ht, a -= e * ht), i[s] = a;
    e > 0 && (i[s] = e);
  }, r.prototype.sub = function(t) {
    var e = this.buf, i = e.length, n, s;
    for (n = 0; n < i; ++n) s = e[n] - t, s < 0 ? (s += ht, t = 1) : t = 0, e[n] = s;
    for (; e[e.length - 1] === 0; ) e.pop();
  }, r.prototype.toString = function(t) {
    if ((t || 10) != 10) throw new Error("only base 10 is supported");
    for (var e = this.buf, i = e[e.length - 1].toString(), n = e.length - 2; n >= 0; --n) i += (ht + e[n]).toString().substring(1);
    return i;
  }, r.prototype.valueOf = function() {
    for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i) e = e * ht + t[i];
    return e;
  }, r.prototype.simplify = function() {
    var t = this.buf;
    return t.length == 1 ? t[0] : this;
  }, r;
})(), ee = "\u2026", Ae = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, Be = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
function ct(r, t) {
  return r.length > t && (r = r.substring(0, t) + ee), r;
}
var Vt = (function() {
  function r(t, e) {
    this.hexDigits = "0123456789ABCDEF", t instanceof r ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = e);
  }
  return r.prototype.get = function(t) {
    if (t === void 0 && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset ".concat(t, " on a stream of length ").concat(this.enc.length));
    return typeof this.enc == "string" ? this.enc.charCodeAt(t) : this.enc[t];
  }, r.prototype.hexByte = function(t) {
    return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(t & 15);
  }, r.prototype.hexDump = function(t, e, i) {
    for (var n = "", s = t; s < e; ++s) if (n += this.hexByte(this.get(s)), i !== true) switch (s & 15) {
      case 7:
        n += "  ";
        break;
      case 15:
        n += `
`;
        break;
      default:
        n += " ";
    }
    return n;
  }, r.prototype.isASCII = function(t, e) {
    for (var i = t; i < e; ++i) {
      var n = this.get(i);
      if (n < 32 || n > 176) return false;
    }
    return true;
  }, r.prototype.parseStringISO = function(t, e) {
    for (var i = "", n = t; n < e; ++n) i += String.fromCharCode(this.get(n));
    return i;
  }, r.prototype.parseStringUTF = function(t, e) {
    for (var i = "", n = t; n < e; ) {
      var s = this.get(n++);
      s < 128 ? i += String.fromCharCode(s) : s > 191 && s < 224 ? i += String.fromCharCode((s & 31) << 6 | this.get(n++) & 63) : i += String.fromCharCode((s & 15) << 12 | (this.get(n++) & 63) << 6 | this.get(n++) & 63);
    }
    return i;
  }, r.prototype.parseStringBMP = function(t, e) {
    for (var i = "", n, s, a = t; a < e; ) n = this.get(a++), s = this.get(a++), i += String.fromCharCode(n << 8 | s);
    return i;
  }, r.prototype.parseTime = function(t, e, i) {
    var n = this.parseStringISO(t, e), s = (i ? Ae : Be).exec(n);
    return s ? (i && (s[1] = +s[1], s[1] += +s[1] < 70 ? 2e3 : 1900), n = s[1] + "-" + s[2] + "-" + s[3] + " " + s[4], s[5] && (n += ":" + s[5], s[6] && (n += ":" + s[6], s[7] && (n += "." + s[7]))), s[8] && (n += " UTC", s[8] != "Z" && (n += s[8], s[9] && (n += ":" + s[9]))), n) : "Unrecognized time: " + n;
  }, r.prototype.parseInteger = function(t, e) {
    for (var i = this.get(t), n = i > 127, s = n ? 255 : 0, a, o = ""; i == s && ++t < e; ) i = this.get(t);
    if (a = e - t, a === 0) return n ? -1 : 0;
    if (a > 4) {
      for (o = i, a <<= 3; ((+o ^ s) & 128) == 0; ) o = +o << 1, --a;
      o = "(" + a + ` bit)
`;
    }
    n && (i = i - 256);
    for (var u = new gt(i), l = t + 1; l < e; ++l) u.mulAdd(256, this.get(l));
    return o + u.toString();
  }, r.prototype.parseBitString = function(t, e, i) {
    for (var n = this.get(t), s = (e - t - 1 << 3) - n, a = "(" + s + ` bit)
`, o = "", u = t + 1; u < e; ++u) {
      for (var l = this.get(u), c = u == e - 1 ? n : 0, f = 7; f >= c; --f) o += l >> f & 1 ? "1" : "0";
      if (o.length > i) return a + ct(o, i);
    }
    return a + o;
  }, r.prototype.parseOctetString = function(t, e, i) {
    if (this.isASCII(t, e)) return ct(this.parseStringISO(t, e), i);
    var n = e - t, s = "(" + n + ` byte)
`;
    i /= 2, n > i && (e = t + i);
    for (var a = t; a < e; ++a) s += this.hexByte(this.get(a));
    return n > i && (s += ee), s;
  }, r.prototype.parseOID = function(t, e, i) {
    for (var n = "", s = new gt(), a = 0, o = t; o < e; ++o) {
      var u = this.get(o);
      if (s.mulAdd(128, u & 127), a += 7, !(u & 128)) {
        if (n === "") if (s = s.simplify(), s instanceof gt) s.sub(80), n = "2." + s.toString();
        else {
          var l = s < 80 ? s < 40 ? 0 : 1 : 2;
          n = l + "." + (s - l * 40);
        }
        else n += "." + s.toString();
        if (n.length > i) return ct(n, i);
        s = new gt(), a = 0;
      }
    }
    return a > 0 && (n += ".incomplete"), n;
  }, r;
})(), Ve = (function() {
  function r(t, e, i, n, s) {
    if (!(n instanceof Lt)) throw new Error("Invalid tag value.");
    this.stream = t, this.header = e, this.length = i, this.tag = n, this.sub = s;
  }
  return r.prototype.typeName = function() {
    switch (this.tag.tagClass) {
      case 0:
        switch (this.tag.tagNumber) {
          case 0:
            return "EOC";
          case 1:
            return "BOOLEAN";
          case 2:
            return "INTEGER";
          case 3:
            return "BIT_STRING";
          case 4:
            return "OCTET_STRING";
          case 5:
            return "NULL";
          case 6:
            return "OBJECT_IDENTIFIER";
          case 7:
            return "ObjectDescriptor";
          case 8:
            return "EXTERNAL";
          case 9:
            return "REAL";
          case 10:
            return "ENUMERATED";
          case 11:
            return "EMBEDDED_PDV";
          case 12:
            return "UTF8String";
          case 16:
            return "SEQUENCE";
          case 17:
            return "SET";
          case 18:
            return "NumericString";
          case 19:
            return "PrintableString";
          case 20:
            return "TeletexString";
          case 21:
            return "VideotexString";
          case 22:
            return "IA5String";
          case 23:
            return "UTCTime";
          case 24:
            return "GeneralizedTime";
          case 25:
            return "GraphicString";
          case 26:
            return "VisibleString";
          case 27:
            return "GeneralString";
          case 28:
            return "UniversalString";
          case 30:
            return "BMPString";
        }
        return "Universal_" + this.tag.tagNumber.toString();
      case 1:
        return "Application_" + this.tag.tagNumber.toString();
      case 2:
        return "[" + this.tag.tagNumber.toString() + "]";
      case 3:
        return "Private_" + this.tag.tagNumber.toString();
    }
  }, r.prototype.content = function(t) {
    if (this.tag === void 0) return null;
    t === void 0 && (t = 1 / 0);
    var e = this.posContent(), i = Math.abs(this.length);
    if (!this.tag.isUniversal()) return this.sub !== null ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
    switch (this.tag.tagNumber) {
      case 1:
        return this.stream.get(e) === 0 ? "false" : "true";
      case 2:
        return this.stream.parseInteger(e, e + i);
      case 3:
        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);
      case 4:
        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
      case 6:
        return this.stream.parseOID(e, e + i, t);
      case 16:
      case 17:
        return this.sub !== null ? "(" + this.sub.length + " elem)" : "(no elem)";
      case 12:
        return ct(this.stream.parseStringUTF(e, e + i), t);
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 26:
        return ct(this.stream.parseStringISO(e, e + i), t);
      case 30:
        return ct(this.stream.parseStringBMP(e, e + i), t);
      case 23:
      case 24:
        return this.stream.parseTime(e, e + i, this.tag.tagNumber == 23);
    }
    return null;
  }, r.prototype.toString = function() {
    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]";
  }, r.prototype.toPrettyString = function(t) {
    t === void 0 && (t = "");
    var e = t + this.typeName() + " @" + this.stream.pos;
    if (this.length >= 0 && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : this.tag.isUniversal() && (this.tag.tagNumber == 3 || this.tag.tagNumber == 4) && this.sub !== null && (e += " (encapsulates)"), e += `
`, this.sub !== null) {
      t += "  ";
      for (var i = 0, n = this.sub.length; i < n; ++i) e += this.sub[i].toPrettyString(t);
    }
    return e;
  }, r.prototype.posStart = function() {
    return this.stream.pos;
  }, r.prototype.posContent = function() {
    return this.stream.pos + this.header;
  }, r.prototype.posEnd = function() {
    return this.stream.pos + this.header + Math.abs(this.length);
  }, r.prototype.toHexString = function() {
    return this.stream.hexDump(this.posStart(), this.posEnd(), true);
  }, r.decodeLength = function(t) {
    var e = t.get(), i = e & 127;
    if (i == e) return i;
    if (i > 6) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
    if (i === 0) return null;
    e = 0;
    for (var n = 0; n < i; ++n) e = e * 256 + t.get();
    return e;
  }, r.prototype.getHexStringValue = function() {
    var t = this.toHexString(), e = this.header * 2, i = this.length * 2;
    return t.substring(e, e + i);
  }, r.decode = function(t) {
    var e;
    t instanceof Vt ? e = t : e = new Vt(t, 0);
    var i = new Vt(e), n = new Lt(e), s = r.decodeLength(e), a = e.pos, o = a - i.pos, u = null, l = function() {
      var f = [];
      if (s !== null) {
        for (var g = a + s; e.pos < g; ) f[f.length] = r.decode(e);
        if (e.pos != g) throw new Error("Content size is not correct for container starting at offset " + a);
      } else try {
        for (; ; ) {
          var p = r.decode(e);
          if (p.tag.isEOC()) break;
          f[f.length] = p;
        }
        s = a - e.pos;
      } catch (E) {
        throw new Error("Exception while decoding undefined length content: " + E);
      }
      return f;
    };
    if (n.tagConstructed) u = l();
    else if (n.isUniversal() && (n.tagNumber == 3 || n.tagNumber == 4)) try {
      if (n.tagNumber == 3 && e.get() != 0) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
      u = l();
      for (var c = 0; c < u.length; ++c) if (u[c].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
    } catch {
      u = null;
    }
    if (u === null) {
      if (s === null) throw new Error("We can't skip over an invalid tag with undefined length at offset " + a);
      e.pos = a + Math.abs(s);
    }
    return new r(i, o, s, n, u);
  }, r;
})(), Lt = (function() {
  function r(t) {
    var e = t.get();
    if (this.tagClass = e >> 6, this.tagConstructed = (e & 32) !== 0, this.tagNumber = e & 31, this.tagNumber == 31) {
      var i = new gt();
      do
        e = t.get(), i.mulAdd(128, e & 127);
      while (e & 128);
      this.tagNumber = i.simplify();
    }
  }
  return r.prototype.isUniversal = function() {
    return this.tagClass === 0;
  }, r.prototype.isEOC = function() {
    return this.tagClass === 0 && this.tagNumber === 0;
  }, r;
})(), it, Ie = 244837814094590, jt = (Ie & 16777215) == 15715070, I = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], Oe = (1 << 26) / I[I.length - 1], w = (function() {
  function r(t, e, i) {
    t != null && (typeof t == "number" ? this.fromNumber(t, e, i) : e == null && typeof t != "string" ? this.fromString(t, 256) : this.fromString(t, e));
  }
  return r.prototype.toString = function(t) {
    if (this.s < 0) return "-" + this.negate().toString(t);
    var e;
    if (t == 16) e = 4;
    else if (t == 8) e = 3;
    else if (t == 2) e = 1;
    else if (t == 32) e = 5;
    else if (t == 4) e = 2;
    else return this.toRadix(t);
    var i = (1 << e) - 1, n, s = false, a = "", o = this.t, u = this.DB - o * this.DB % e;
    if (o-- > 0) for (u < this.DB && (n = this[o] >> u) > 0 && (s = true, a = Q(n)); o >= 0; ) u < e ? (n = (this[o] & (1 << u) - 1) << e - u, n |= this[--o] >> (u += this.DB - e)) : (n = this[o] >> (u -= e) & i, u <= 0 && (u += this.DB, --o)), n > 0 && (s = true), s && (a += Q(n));
    return s ? a : "0";
  }, r.prototype.negate = function() {
    var t = S();
    return r.ZERO.subTo(this, t), t;
  }, r.prototype.abs = function() {
    return this.s < 0 ? this.negate() : this;
  }, r.prototype.compareTo = function(t) {
    var e = this.s - t.s;
    if (e != 0) return e;
    var i = this.t;
    if (e = i - t.t, e != 0) return this.s < 0 ? -e : e;
    for (; --i >= 0; ) if ((e = this[i] - t[i]) != 0) return e;
    return 0;
  }, r.prototype.bitLength = function() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + wt(this[this.t - 1] ^ this.s & this.DM);
  }, r.prototype.mod = function(t) {
    var e = S();
    return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(r.ZERO) > 0 && t.subTo(e, e), e;
  }, r.prototype.modPowInt = function(t, e) {
    var i;
    return t < 256 || e.isEven() ? i = new Kt(e) : i = new zt(e), this.exp(t, i);
  }, r.prototype.clone = function() {
    var t = S();
    return this.copyTo(t), t;
  }, r.prototype.intValue = function() {
    if (this.s < 0) {
      if (this.t == 1) return this[0] - this.DV;
      if (this.t == 0) return -1;
    } else {
      if (this.t == 1) return this[0];
      if (this.t == 0) return 0;
    }
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
  }, r.prototype.byteValue = function() {
    return this.t == 0 ? this.s : this[0] << 24 >> 24;
  }, r.prototype.shortValue = function() {
    return this.t == 0 ? this.s : this[0] << 16 >> 16;
  }, r.prototype.signum = function() {
    return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
  }, r.prototype.toByteArray = function() {
    var t = this.t, e = [];
    e[0] = this.s;
    var i = this.DB - t * this.DB % 8, n, s = 0;
    if (t-- > 0) for (i < this.DB && (n = this[t] >> i) != (this.s & this.DM) >> i && (e[s++] = n | this.s << this.DB - i); t >= 0; ) i < 8 ? (n = (this[t] & (1 << i) - 1) << 8 - i, n |= this[--t] >> (i += this.DB - 8)) : (n = this[t] >> (i -= 8) & 255, i <= 0 && (i += this.DB, --t)), (n & 128) != 0 && (n |= -256), s == 0 && (this.s & 128) != (n & 128) && ++s, (s > 0 || n != this.s) && (e[s++] = n);
    return e;
  }, r.prototype.equals = function(t) {
    return this.compareTo(t) == 0;
  }, r.prototype.min = function(t) {
    return this.compareTo(t) < 0 ? this : t;
  }, r.prototype.max = function(t) {
    return this.compareTo(t) > 0 ? this : t;
  }, r.prototype.and = function(t) {
    var e = S();
    return this.bitwiseTo(t, De, e), e;
  }, r.prototype.or = function(t) {
    var e = S();
    return this.bitwiseTo(t, bt, e), e;
  }, r.prototype.xor = function(t) {
    var e = S();
    return this.bitwiseTo(t, Ut, e), e;
  }, r.prototype.andNot = function(t) {
    var e = S();
    return this.bitwiseTo(t, Ht, e), e;
  }, r.prototype.not = function() {
    for (var t = S(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
    return t.t = this.t, t.s = ~this.s, t;
  }, r.prototype.shiftLeft = function(t) {
    var e = S();
    return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
  }, r.prototype.shiftRight = function(t) {
    var e = S();
    return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
  }, r.prototype.getLowestSetBit = function() {
    for (var t = 0; t < this.t; ++t) if (this[t] != 0) return t * this.DB + xe(this[t]);
    return this.s < 0 ? this.t * this.DB : -1;
  }, r.prototype.bitCount = function() {
    for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += Re(this[i] ^ e);
    return t;
  }, r.prototype.testBit = function(t) {
    var e = Math.floor(t / this.DB);
    return e >= this.t ? this.s != 0 : (this[e] & 1 << t % this.DB) != 0;
  }, r.prototype.setBit = function(t) {
    return this.changeBit(t, bt);
  }, r.prototype.clearBit = function(t) {
    return this.changeBit(t, Ht);
  }, r.prototype.flipBit = function(t) {
    return this.changeBit(t, Ut);
  }, r.prototype.add = function(t) {
    var e = S();
    return this.addTo(t, e), e;
  }, r.prototype.subtract = function(t) {
    var e = S();
    return this.subTo(t, e), e;
  }, r.prototype.multiply = function(t) {
    var e = S();
    return this.multiplyTo(t, e), e;
  }, r.prototype.divide = function(t) {
    var e = S();
    return this.divRemTo(t, e, null), e;
  }, r.prototype.remainder = function(t) {
    var e = S();
    return this.divRemTo(t, null, e), e;
  }, r.prototype.divideAndRemainder = function(t) {
    var e = S(), i = S();
    return this.divRemTo(t, e, i), [e, i];
  }, r.prototype.modPow = function(t, e) {
    var i = t.bitLength(), n, s = Y(1), a;
    if (i <= 0) return s;
    i < 18 ? n = 1 : i < 48 ? n = 3 : i < 144 ? n = 4 : i < 768 ? n = 5 : n = 6, i < 8 ? a = new Kt(e) : e.isEven() ? a = new Ne(e) : a = new zt(e);
    var o = [], u = 3, l = n - 1, c = (1 << n) - 1;
    if (o[1] = a.convert(this), n > 1) {
      var f = S();
      for (a.sqrTo(o[1], f); u <= c; ) o[u] = S(), a.mulTo(f, o[u - 2], o[u]), u += 2;
    }
    var g = t.t - 1, p, E = true, D = S(), T;
    for (i = wt(t[g]) - 1; g >= 0; ) {
      for (i >= l ? p = t[g] >> i - l & c : (p = (t[g] & (1 << i + 1) - 1) << l - i, g > 0 && (p |= t[g - 1] >> this.DB + i - l)), u = n; (p & 1) == 0; ) p >>= 1, --u;
      if ((i -= u) < 0 && (i += this.DB, --g), E) o[p].copyTo(s), E = false;
      else {
        for (; u > 1; ) a.sqrTo(s, D), a.sqrTo(D, s), u -= 2;
        u > 0 ? a.sqrTo(s, D) : (T = s, s = D, D = T), a.mulTo(D, o[p], s);
      }
      for (; g >= 0 && (t[g] & 1 << i) == 0; ) a.sqrTo(s, D), T = s, s = D, D = T, --i < 0 && (i = this.DB - 1, --g);
    }
    return a.revert(s);
  }, r.prototype.modInverse = function(t) {
    var e = t.isEven();
    if (this.isEven() && e || t.signum() == 0) return r.ZERO;
    for (var i = t.clone(), n = this.clone(), s = Y(1), a = Y(0), o = Y(0), u = Y(1); i.signum() != 0; ) {
      for (; i.isEven(); ) i.rShiftTo(1, i), e ? ((!s.isEven() || !a.isEven()) && (s.addTo(this, s), a.subTo(t, a)), s.rShiftTo(1, s)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
      for (; n.isEven(); ) n.rShiftTo(1, n), e ? ((!o.isEven() || !u.isEven()) && (o.addTo(this, o), u.subTo(t, u)), o.rShiftTo(1, o)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
      i.compareTo(n) >= 0 ? (i.subTo(n, i), e && s.subTo(o, s), a.subTo(u, a)) : (n.subTo(i, n), e && o.subTo(s, o), u.subTo(a, u));
    }
    if (n.compareTo(r.ONE) != 0) return r.ZERO;
    if (u.compareTo(t) >= 0) return u.subtract(t);
    if (u.signum() < 0) u.addTo(t, u);
    else return u;
    return u.signum() < 0 ? u.add(t) : u;
  }, r.prototype.pow = function(t) {
    return this.exp(t, new Ce());
  }, r.prototype.gcd = function(t) {
    var e = this.s < 0 ? this.negate() : this.clone(), i = t.s < 0 ? t.negate() : t.clone();
    if (e.compareTo(i) < 0) {
      var n = e;
      e = i, i = n;
    }
    var s = e.getLowestSetBit(), a = i.getLowestSetBit();
    if (a < 0) return e;
    for (s < a && (a = s), a > 0 && (e.rShiftTo(a, e), i.rShiftTo(a, i)); e.signum() > 0; ) (s = e.getLowestSetBit()) > 0 && e.rShiftTo(s, e), (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
    return a > 0 && i.lShiftTo(a, i), i;
  }, r.prototype.isProbablePrime = function(t) {
    var e, i = this.abs();
    if (i.t == 1 && i[0] <= I[I.length - 1]) {
      for (e = 0; e < I.length; ++e) if (i[0] == I[e]) return true;
      return false;
    }
    if (i.isEven()) return false;
    for (e = 1; e < I.length; ) {
      for (var n = I[e], s = e + 1; s < I.length && n < Oe; ) n *= I[s++];
      for (n = i.modInt(n); e < s; ) if (n % I[e++] == 0) return false;
    }
    return i.millerRabin(t);
  }, r.prototype.copyTo = function(t) {
    for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
    t.t = this.t, t.s = this.s;
  }, r.prototype.fromInt = function(t) {
    this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
  }, r.prototype.fromString = function(t, e) {
    var i;
    if (e == 16) i = 4;
    else if (e == 8) i = 3;
    else if (e == 256) i = 8;
    else if (e == 2) i = 1;
    else if (e == 32) i = 5;
    else if (e == 4) i = 2;
    else {
      this.fromRadix(t, e);
      return;
    }
    this.t = 0, this.s = 0;
    for (var n = t.length, s = false, a = 0; --n >= 0; ) {
      var o = i == 8 ? +t[n] & 255 : $t(t, n);
      if (o < 0) {
        t.charAt(n) == "-" && (s = true);
        continue;
      }
      s = false, a == 0 ? this[this.t++] = o : a + i > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - a) - 1) << a, this[this.t++] = o >> this.DB - a) : this[this.t - 1] |= o << a, a += i, a >= this.DB && (a -= this.DB);
    }
    i == 8 && (+t[0] & 128) != 0 && (this.s = -1, a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)), this.clamp(), s && r.ZERO.subTo(this, this);
  }, r.prototype.clamp = function() {
    for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
  }, r.prototype.dlShiftTo = function(t, e) {
    var i;
    for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
    for (i = t - 1; i >= 0; --i) e[i] = 0;
    e.t = this.t + t, e.s = this.s;
  }, r.prototype.drShiftTo = function(t, e) {
    for (var i = t; i < this.t; ++i) e[i - t] = this[i];
    e.t = Math.max(this.t - t, 0), e.s = this.s;
  }, r.prototype.lShiftTo = function(t, e) {
    for (var i = t % this.DB, n = this.DB - i, s = (1 << n) - 1, a = Math.floor(t / this.DB), o = this.s << i & this.DM, u = this.t - 1; u >= 0; --u) e[u + a + 1] = this[u] >> n | o, o = (this[u] & s) << i;
    for (var u = a - 1; u >= 0; --u) e[u] = 0;
    e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp();
  }, r.prototype.rShiftTo = function(t, e) {
    e.s = this.s;
    var i = Math.floor(t / this.DB);
    if (i >= this.t) {
      e.t = 0;
      return;
    }
    var n = t % this.DB, s = this.DB - n, a = (1 << n) - 1;
    e[0] = this[i] >> n;
    for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & a) << s, e[o - i] = this[o] >> n;
    n > 0 && (e[this.t - i - 1] |= (this.s & a) << s), e.t = this.t - i, e.clamp();
  }, r.prototype.subTo = function(t, e) {
    for (var i = 0, n = 0, s = Math.min(t.t, this.t); i < s; ) n += this[i] - t[i], e[i++] = n & this.DM, n >>= this.DB;
    if (t.t < this.t) {
      for (n -= t.s; i < this.t; ) n += this[i], e[i++] = n & this.DM, n >>= this.DB;
      n += this.s;
    } else {
      for (n += this.s; i < t.t; ) n -= t[i], e[i++] = n & this.DM, n >>= this.DB;
      n -= t.s;
    }
    e.s = n < 0 ? -1 : 0, n < -1 ? e[i++] = this.DV + n : n > 0 && (e[i++] = n), e.t = i, e.clamp();
  }, r.prototype.multiplyTo = function(t, e) {
    var i = this.abs(), n = t.abs(), s = i.t;
    for (e.t = s + n.t; --s >= 0; ) e[s] = 0;
    for (s = 0; s < n.t; ++s) e[s + i.t] = i.am(0, n[s], e, s, 0, i.t);
    e.s = 0, e.clamp(), this.s != t.s && r.ZERO.subTo(e, e);
  }, r.prototype.squareTo = function(t) {
    for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0; ) t[i] = 0;
    for (i = 0; i < e.t - 1; ++i) {
      var n = e.am(i, e[i], t, 2 * i, 0, 1);
      (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1);
    }
    t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp();
  }, r.prototype.divRemTo = function(t, e, i) {
    var n = t.abs();
    if (!(n.t <= 0)) {
      var s = this.abs();
      if (s.t < n.t) {
        e == null ? void 0 : e.fromInt(0), i != null && this.copyTo(i);
        return;
      }
      i == null && (i = S());
      var a = S(), o = this.s, u = t.s, l = this.DB - wt(n[n.t - 1]);
      l > 0 ? (n.lShiftTo(l, a), s.lShiftTo(l, i)) : (n.copyTo(a), s.copyTo(i));
      var c = a.t, f = a[c - 1];
      if (f != 0) {
        var g = f * (1 << this.F1) + (c > 1 ? a[c - 2] >> this.F2 : 0), p = this.FV / g, E = (1 << this.F1) / g, D = 1 << this.F2, T = i.t, G = T - c, M = e ?? S();
        for (a.dlShiftTo(G, M), i.compareTo(M) >= 0 && (i[i.t++] = 1, i.subTo(M, i)), r.ONE.dlShiftTo(c, M), M.subTo(a, a); a.t < c; ) a[a.t++] = 0;
        for (; --G >= 0; ) {
          var X = i[--T] == f ? this.DM : Math.floor(i[T] * p + (i[T - 1] + D) * E);
          if ((i[T] += a.am(0, X, i, G, 0, c)) < X) for (a.dlShiftTo(G, M), i.subTo(M, i); i[T] < --X; ) i.subTo(M, i);
        }
        e != null && (i.drShiftTo(c, e), o != u && r.ZERO.subTo(e, e)), i.t = c, i.clamp(), l > 0 && i.rShiftTo(l, i), o < 0 && r.ZERO.subTo(i, i);
      }
    }
  }, r.prototype.invDigit = function() {
    if (this.t < 1) return 0;
    var t = this[0];
    if ((t & 1) == 0) return 0;
    var e = t & 3;
    return e = e * (2 - (t & 15) * e) & 15, e = e * (2 - (t & 255) * e) & 255, e = e * (2 - ((t & 65535) * e & 65535)) & 65535, e = e * (2 - t * e % this.DV) % this.DV, e > 0 ? this.DV - e : -e;
  }, r.prototype.isEven = function() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
  }, r.prototype.exp = function(t, e) {
    if (t > 4294967295 || t < 1) return r.ONE;
    var i = S(), n = S(), s = e.convert(this), a = wt(t) - 1;
    for (s.copyTo(i); --a >= 0; ) if (e.sqrTo(i, n), (t & 1 << a) > 0) e.mulTo(n, s, i);
    else {
      var o = i;
      i = n, n = o;
    }
    return e.revert(i);
  }, r.prototype.chunkSize = function(t) {
    return Math.floor(Math.LN2 * this.DB / Math.log(t));
  }, r.prototype.toRadix = function(t) {
    if (t == null && (t = 10), this.signum() == 0 || t < 2 || t > 36) return "0";
    var e = this.chunkSize(t), i = Math.pow(t, e), n = Y(i), s = S(), a = S(), o = "";
    for (this.divRemTo(n, s, a); s.signum() > 0; ) o = (i + a.intValue()).toString(t).substring(1) + o, s.divRemTo(n, s, a);
    return a.intValue().toString(t) + o;
  }, r.prototype.fromRadix = function(t, e) {
    this.fromInt(0), e == null && (e = 10);
    for (var i = this.chunkSize(e), n = Math.pow(e, i), s = false, a = 0, o = 0, u = 0; u < t.length; ++u) {
      var l = $t(t, u);
      if (l < 0) {
        t.charAt(u) == "-" && this.signum() == 0 && (s = true);
        continue;
      }
      o = e * o + l, ++a >= i && (this.dMultiply(n), this.dAddOffset(o, 0), a = 0, o = 0);
    }
    a > 0 && (this.dMultiply(Math.pow(e, a)), this.dAddOffset(o, 0)), s && r.ZERO.subTo(this, this);
  }, r.prototype.fromNumber = function(t, e, i) {
    if (typeof e == "number") if (t < 2) this.fromInt(1);
    else for (this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(r.ONE.shiftLeft(t - 1), bt, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); ) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(r.ONE.shiftLeft(t - 1), this);
    else {
      var n = [], s = t & 7;
      n.length = (t >> 3) + 1, e.nextBytes(n), s > 0 ? n[0] &= (1 << s) - 1 : n[0] = 0, this.fromString(n, 256);
    }
  }, r.prototype.bitwiseTo = function(t, e, i) {
    var n, s, a = Math.min(t.t, this.t);
    for (n = 0; n < a; ++n) i[n] = e(this[n], t[n]);
    if (t.t < this.t) {
      for (s = t.s & this.DM, n = a; n < this.t; ++n) i[n] = e(this[n], s);
      i.t = this.t;
    } else {
      for (s = this.s & this.DM, n = a; n < t.t; ++n) i[n] = e(s, t[n]);
      i.t = t.t;
    }
    i.s = e(this.s, t.s), i.clamp();
  }, r.prototype.changeBit = function(t, e) {
    var i = r.ONE.shiftLeft(t);
    return this.bitwiseTo(i, e, i), i;
  }, r.prototype.addTo = function(t, e) {
    for (var i = 0, n = 0, s = Math.min(t.t, this.t); i < s; ) n += this[i] + t[i], e[i++] = n & this.DM, n >>= this.DB;
    if (t.t < this.t) {
      for (n += t.s; i < this.t; ) n += this[i], e[i++] = n & this.DM, n >>= this.DB;
      n += this.s;
    } else {
      for (n += this.s; i < t.t; ) n += t[i], e[i++] = n & this.DM, n >>= this.DB;
      n += t.s;
    }
    e.s = n < 0 ? -1 : 0, n > 0 ? e[i++] = n : n < -1 && (e[i++] = this.DV + n), e.t = i, e.clamp();
  }, r.prototype.dMultiply = function(t) {
    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
  }, r.prototype.dAddOffset = function(t, e) {
    if (t != 0) {
      for (; this.t <= e; ) this[this.t++] = 0;
      for (this[e] += t; this[e] >= this.DV; ) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e];
    }
  }, r.prototype.multiplyLowerTo = function(t, e, i) {
    var n = Math.min(this.t + t.t, e);
    for (i.s = 0, i.t = n; n > 0; ) i[--n] = 0;
    for (var s = i.t - this.t; n < s; ++n) i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
    for (var s = Math.min(t.t, e); n < s; ++n) this.am(0, t[n], i, n, 0, e - n);
    i.clamp();
  }, r.prototype.multiplyUpperTo = function(t, e, i) {
    --e;
    var n = i.t = this.t + t.t - e;
    for (i.s = 0; --n >= 0; ) i[n] = 0;
    for (n = Math.max(e - this.t, 0); n < t.t; ++n) i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
    i.clamp(), i.drShiftTo(1, i);
  }, r.prototype.modInt = function(t) {
    if (t <= 0) return 0;
    var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
    if (this.t > 0) if (e == 0) i = this[0] % t;
    else for (var n = this.t - 1; n >= 0; --n) i = (e * i + this[n]) % t;
    return i;
  }, r.prototype.millerRabin = function(t) {
    var e = this.subtract(r.ONE), i = e.getLowestSetBit();
    if (i <= 0) return false;
    var n = e.shiftRight(i);
    t = t + 1 >> 1, t > I.length && (t = I.length);
    for (var s = S(), a = 0; a < t; ++a) {
      s.fromInt(I[Math.floor(Math.random() * I.length)]);
      var o = s.modPow(n, this);
      if (o.compareTo(r.ONE) != 0 && o.compareTo(e) != 0) {
        for (var u = 1; u++ < i && o.compareTo(e) != 0; ) if (o = o.modPowInt(2, this), o.compareTo(r.ONE) == 0) return false;
        if (o.compareTo(e) != 0) return false;
      }
    }
    return true;
  }, r.prototype.square = function() {
    var t = S();
    return this.squareTo(t), t;
  }, r.prototype.gcda = function(t, e) {
    var i = this.s < 0 ? this.negate() : this.clone(), n = t.s < 0 ? t.negate() : t.clone();
    if (i.compareTo(n) < 0) {
      var s = i;
      i = n, n = s;
    }
    var a = i.getLowestSetBit(), o = n.getLowestSetBit();
    if (o < 0) {
      e(i);
      return;
    }
    a < o && (o = a), o > 0 && (i.rShiftTo(o, i), n.rShiftTo(o, n));
    var u = function() {
      (a = i.getLowestSetBit()) > 0 && i.rShiftTo(a, i), (a = n.getLowestSetBit()) > 0 && n.rShiftTo(a, n), i.compareTo(n) >= 0 ? (i.subTo(n, i), i.rShiftTo(1, i)) : (n.subTo(i, n), n.rShiftTo(1, n)), i.signum() > 0 ? setTimeout(u, 0) : (o > 0 && n.lShiftTo(o, n), setTimeout(function() {
        e(n);
      }, 0));
    };
    setTimeout(u, 10);
  }, r.prototype.fromNumberAsync = function(t, e, i, n) {
    if (typeof e == "number") if (t < 2) this.fromInt(1);
    else {
      this.fromNumber(t, i), this.testBit(t - 1) || this.bitwiseTo(r.ONE.shiftLeft(t - 1), bt, this), this.isEven() && this.dAddOffset(1, 0);
      var s = this, a = function() {
        s.dAddOffset(2, 0), s.bitLength() > t && s.subTo(r.ONE.shiftLeft(t - 1), s), s.isProbablePrime(e) ? setTimeout(function() {
          n();
        }, 0) : setTimeout(a, 0);
      };
      setTimeout(a, 0);
    }
    else {
      var o = [], u = t & 7;
      o.length = (t >> 3) + 1, e.nextBytes(o), u > 0 ? o[0] &= (1 << u) - 1 : o[0] = 0, this.fromString(o, 256);
    }
  }, r;
})(), Ce = (function() {
  function r() {
  }
  return r.prototype.convert = function(t) {
    return t;
  }, r.prototype.revert = function(t) {
    return t;
  }, r.prototype.mulTo = function(t, e, i) {
    t.multiplyTo(e, i);
  }, r.prototype.sqrTo = function(t, e) {
    t.squareTo(e);
  }, r;
})(), Kt = (function() {
  function r(t) {
    this.m = t;
  }
  return r.prototype.convert = function(t) {
    return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
  }, r.prototype.revert = function(t) {
    return t;
  }, r.prototype.reduce = function(t) {
    t.divRemTo(this.m, null, t);
  }, r.prototype.mulTo = function(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
  }, r.prototype.sqrTo = function(t, e) {
    t.squareTo(e), this.reduce(e);
  }, r;
})(), zt = (function() {
  function r(t) {
    this.m = t, this.mp = t.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
  }
  return r.prototype.convert = function(t) {
    var e = S();
    return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(w.ZERO) > 0 && this.m.subTo(e, e), e;
  }, r.prototype.revert = function(t) {
    var e = S();
    return t.copyTo(e), this.reduce(e), e;
  }, r.prototype.reduce = function(t) {
    for (; t.t <= this.mt2; ) t[t.t++] = 0;
    for (var e = 0; e < this.m.t; ++e) {
      var i = t[e] & 32767, n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
      for (i = e + this.m.t, t[i] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV; ) t[i] -= t.DV, t[++i]++;
    }
    t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
  }, r.prototype.mulTo = function(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
  }, r.prototype.sqrTo = function(t, e) {
    t.squareTo(e), this.reduce(e);
  }, r;
})(), Ne = (function() {
  function r(t) {
    this.m = t, this.r2 = S(), this.q3 = S(), w.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t);
  }
  return r.prototype.convert = function(t) {
    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
    if (t.compareTo(this.m) < 0) return t;
    var e = S();
    return t.copyTo(e), this.reduce(e), e;
  }, r.prototype.revert = function(t) {
    return t;
  }, r.prototype.reduce = function(t) {
    for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
    for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
  }, r.prototype.mulTo = function(t, e, i) {
    t.multiplyTo(e, i), this.reduce(i);
  }, r.prototype.sqrTo = function(t, e) {
    t.squareTo(e), this.reduce(e);
  }, r;
})();
function S() {
  return new w(null);
}
function _(r, t) {
  return new w(r, t);
}
var Gt = typeof navigator < "u";
Gt && jt && navigator.appName == "Microsoft Internet Explorer" ? (w.prototype.am = function(t, e, i, n, s, a) {
  for (var o = e & 32767, u = e >> 15; --a >= 0; ) {
    var l = this[t] & 32767, c = this[t++] >> 15, f = u * l + c * o;
    l = o * l + ((f & 32767) << 15) + i[n] + (s & 1073741823), s = (l >>> 30) + (f >>> 15) + u * c + (s >>> 30), i[n++] = l & 1073741823;
  }
  return s;
}, it = 30) : Gt && jt && navigator.appName != "Netscape" ? (w.prototype.am = function(t, e, i, n, s, a) {
  for (; --a >= 0; ) {
    var o = e * this[t++] + i[n] + s;
    s = Math.floor(o / 67108864), i[n++] = o & 67108863;
  }
  return s;
}, it = 26) : (w.prototype.am = function(t, e, i, n, s, a) {
  for (var o = e & 16383, u = e >> 14; --a >= 0; ) {
    var l = this[t] & 16383, c = this[t++] >> 14, f = u * l + c * o;
    l = o * l + ((f & 16383) << 14) + i[n] + s, s = (l >> 28) + (f >> 14) + u * c, i[n++] = l & 268435455;
  }
  return s;
}, it = 28);
w.prototype.DB = it;
w.prototype.DM = (1 << it) - 1;
w.prototype.DV = 1 << it;
var Ft = 52;
w.prototype.FV = Math.pow(2, Ft);
w.prototype.F1 = Ft - it;
w.prototype.F2 = 2 * it - Ft;
var At = [], pt, k;
pt = 48;
for (k = 0; k <= 9; ++k) At[pt++] = k;
pt = 97;
for (k = 10; k < 36; ++k) At[pt++] = k;
pt = 65;
for (k = 10; k < 36; ++k) At[pt++] = k;
function $t(r, t) {
  var e = At[r.charCodeAt(t)];
  return e ?? -1;
}
function Y(r) {
  var t = S();
  return t.fromInt(r), t;
}
function wt(r) {
  var t = 1, e;
  return (e = r >>> 16) != 0 && (r = e, t += 16), (e = r >> 8) != 0 && (r = e, t += 8), (e = r >> 4) != 0 && (r = e, t += 4), (e = r >> 2) != 0 && (r = e, t += 2), (e = r >> 1) != 0 && (r = e, t += 1), t;
}
w.ZERO = Y(0);
w.ONE = Y(1);
var Pe = (function() {
  function r() {
    this.i = 0, this.j = 0, this.S = [];
  }
  return r.prototype.init = function(t) {
    var e, i, n;
    for (e = 0; e < 256; ++e) this.S[e] = e;
    for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, n = this.S[e], this.S[e] = this.S[i], this.S[i] = n;
    this.i = 0, this.j = 0;
  }, r.prototype.next = function() {
    var t;
    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
  }, r;
})();
function Me() {
  return new Pe();
}
var ie = 256, St, et = null, U;
if (et == null) {
  et = [], U = 0;
  var Tt = void 0;
  if (typeof window < "u" && self.crypto && self.crypto.getRandomValues) {
    var It = new Uint32Array(256);
    for (self.crypto.getRandomValues(It), Tt = 0; Tt < It.length; ++Tt) et[U++] = It[Tt] & 255;
  }
  var Et = 0, Dt = function(r) {
    if (Et = Et || 0, Et >= 256 || U >= ie) {
      self.removeEventListener ? self.removeEventListener("mousemove", Dt, false) : self.detachEvent && self.detachEvent("onmousemove", Dt);
      return;
    }
    try {
      var t = r.x + r.y;
      et[U++] = t & 255, Et += 1;
    } catch {
    }
  };
  typeof window < "u" && (self.addEventListener ? self.addEventListener("mousemove", Dt, false) : self.attachEvent && self.attachEvent("onmousemove", Dt));
}
function ke() {
  if (St == null) {
    for (St = Me(); U < ie; ) {
      var r = Math.floor(65536 * Math.random());
      et[U++] = r & 255;
    }
    for (St.init(et), U = 0; U < et.length; ++U) et[U] = 0;
    U = 0;
  }
  return St.next();
}
var Rt = (function() {
  function r() {
  }
  return r.prototype.nextBytes = function(t) {
    for (var e = 0; e < t.length; ++e) t[e] = ke();
  }, r;
})();
function Nt(r) {
  return Ue($e(Fe(r), r.length * 8));
}
function Zt(r) {
  for (var t = "0123456789abcdef", e = "", i = 0; i < r.length; i++) {
    var n = r.charCodeAt(i);
    e += t.charAt(n >>> 4 & 15) + t.charAt(n & 15);
  }
  return e;
}
function Fe(r) {
  for (var t = Array(r.length >> 2), e = 0; e < t.length; e++) t[e] = 0;
  for (var e = 0; e < r.length * 8; e += 8) t[e >> 5] |= (r.charCodeAt(e / 8) & 255) << 24 - e % 32;
  return t;
}
function Ue(r) {
  for (var t = "", e = 0; e < r.length * 32; e += 8) t += String.fromCharCode(r[e >> 5] >>> 24 - e % 32 & 255);
  return t;
}
function z(r, t) {
  return r >>> t | r << 32 - t;
}
function re(r, t) {
  return r >>> t;
}
function He(r, t, e) {
  return r & t ^ ~r & e;
}
function qe(r, t, e) {
  return r & t ^ r & e ^ t & e;
}
function Le(r) {
  return z(r, 2) ^ z(r, 13) ^ z(r, 22);
}
function je(r) {
  return z(r, 6) ^ z(r, 11) ^ z(r, 25);
}
function Ke(r) {
  return z(r, 7) ^ z(r, 18) ^ re(r, 3);
}
function ze(r) {
  return z(r, 17) ^ z(r, 19) ^ re(r, 10);
}
var Ge = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998);
function $e(r, t) {
  var e = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), i = new Array(64), n, s, a, o, u, l, c, f, g, p, E, D;
  for (r[t >> 5] |= 128 << 24 - t % 32, r[(t + 64 >> 9 << 4) + 15] = t, g = 0; g < r.length; g += 16) {
    for (n = e[0], s = e[1], a = e[2], o = e[3], u = e[4], l = e[5], c = e[6], f = e[7], p = 0; p < 64; p++) p < 16 ? i[p] = r[p + g] : i[p] = B(B(B(ze(i[p - 2]), i[p - 7]), Ke(i[p - 15])), i[p - 16]), E = B(B(B(B(f, je(u)), He(u, l, c)), Ge[p]), i[p]), D = B(Le(n), qe(n, s, a)), f = c, c = l, l = u, u = B(o, E), o = a, a = s, s = n, n = B(E, D);
    e[0] = B(n, e[0]), e[1] = B(s, e[1]), e[2] = B(a, e[2]), e[3] = B(o, e[3]), e[4] = B(u, e[4]), e[5] = B(l, e[5]), e[6] = B(c, e[6]), e[7] = B(f, e[7]);
  }
  return e;
}
function B(r, t) {
  var e = (r & 65535) + (t & 65535), i = (r >> 16) + (t >> 16) + (e >> 16);
  return i << 16 | e & 65535;
}
function Ze(r, t) {
  if (t < r.length + 22) return console.error("Message too long for RSA"), null;
  for (var e = t - r.length - 6, i = "", n = 0; n < e; n += 2) i += "ff";
  var s = "0001" + i + "00" + r;
  return _(s, 16);
}
function Qe(r, t) {
  if (t < r.length + 11) return console.error("Message too long for RSA"), null;
  for (var e = [], i = r.length - 1; i >= 0 && t > 0; ) {
    var n = r.charCodeAt(i--);
    n < 128 ? e[--t] = n : n > 127 && n < 2048 ? (e[--t] = n & 63 | 128, e[--t] = n >> 6 | 192) : (e[--t] = n & 63 | 128, e[--t] = n >> 6 & 63 | 128, e[--t] = n >> 12 | 224);
  }
  e[--t] = 0;
  for (var s = new Rt(), a = []; t > 2; ) {
    for (a[0] = 0; a[0] == 0; ) s.nextBytes(a);
    e[--t] = a[0];
  }
  return e[--t] = 2, e[--t] = 0, new w(e);
}
function Qt(r, t, e) {
  for (var i = "", n = 0; i.length < t; ) i += e(String.fromCharCode.apply(String, r.concat([(n & 4278190080) >> 24, (n & 16711680) >> 16, (n & 65280) >> 8, n & 255]))), n += 1;
  return i;
}
var Je = 32;
function We(r, t) {
  var e = Je, i = Nt;
  if (r.length + 2 * e + 2 > t) throw "Message too long for RSA";
  var n = "", s;
  for (s = 0; s < t - r.length - 2 * e - 2; s += 1) n += "\0";
  var a = i("") + n + "" + r, o = new Array(e);
  new Rt().nextBytes(o);
  var u = Qt(o, a.length, i), l = [];
  for (s = 0; s < a.length; s += 1) l[s] = a.charCodeAt(s) ^ u.charCodeAt(s);
  var c = Qt(l, o.length, i), f = [0];
  for (s = 0; s < o.length; s += 1) f[s + 1] = o[s] ^ c.charCodeAt(s);
  return new w(f.concat(l));
}
var Xe = (function() {
  function r() {
    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
  }
  return r.prototype.doPublic = function(t) {
    return t.modPowInt(this.e, this.n);
  }, r.prototype.doPrivate = function(t) {
    if (this.p == null || this.q == null) return t.modPow(this.d, this.n);
    for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0; ) e = e.add(this.p);
    return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
  }, r.prototype.setPublic = function(t, e) {
    t != null && e != null && t.length > 0 && e.length > 0 ? (this.n = _(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key");
  }, r.prototype.encrypt = function(t, e) {
    typeof e > "u" && (e = Qe);
    var i = this.n.bitLength() + 7 >> 3, n = e(t, i);
    if (n == null) return null;
    var s = this.doPublic(n);
    if (s == null) return null;
    for (var a = s.toString(16), o = a.length, u = 0; u < i * 2 - o; u++) a = "0" + a;
    return a;
  }, r.prototype.setPrivate = function(t, e, i) {
    t != null && e != null && t.length > 0 && e.length > 0 ? (this.n = _(t, 16), this.e = parseInt(e, 16), this.d = _(i, 16)) : console.error("Invalid RSA private key");
  }, r.prototype.setPrivateEx = function(t, e, i, n, s, a, o, u) {
    t != null && e != null && t.length > 0 && e.length > 0 ? (this.n = _(t, 16), this.e = parseInt(e, 16), this.d = _(i, 16), this.p = _(n, 16), this.q = _(s, 16), this.dmp1 = _(a, 16), this.dmq1 = _(o, 16), this.coeff = _(u, 16)) : console.error("Invalid RSA private key");
  }, r.prototype.generate = function(t, e) {
    var i = new Rt(), n = t >> 1;
    this.e = parseInt(e, 16);
    for (var s = new w(e, 16); ; ) {
      for (; this.p = new w(t - n, 1, i), !(this.p.subtract(w.ONE).gcd(s).compareTo(w.ONE) == 0 && this.p.isProbablePrime(10)); ) ;
      for (; this.q = new w(n, 1, i), !(this.q.subtract(w.ONE).gcd(s).compareTo(w.ONE) == 0 && this.q.isProbablePrime(10)); ) ;
      if (this.p.compareTo(this.q) <= 0) {
        var a = this.p;
        this.p = this.q, this.q = a;
      }
      var o = this.p.subtract(w.ONE), u = this.q.subtract(w.ONE), l = o.multiply(u);
      if (l.gcd(s).compareTo(w.ONE) == 0) {
        this.n = this.p.multiply(this.q), this.d = s.modInverse(l), this.dmp1 = this.d.mod(o), this.dmq1 = this.d.mod(u), this.coeff = this.q.modInverse(this.p);
        break;
      }
    }
  }, r.prototype.decrypt = function(t) {
    var e = _(t, 16), i = this.doPrivate(e);
    return i == null ? null : Ye(i, this.n.bitLength() + 7 >> 3);
  }, r.prototype.generateAsync = function(t, e, i) {
    var n = new Rt(), s = t >> 1;
    this.e = parseInt(e, 16);
    var a = new w(e, 16), o = this, u = function() {
      var l = function() {
        if (o.p.compareTo(o.q) <= 0) {
          var g = o.p;
          o.p = o.q, o.q = g;
        }
        var p = o.p.subtract(w.ONE), E = o.q.subtract(w.ONE), D = p.multiply(E);
        D.gcd(a).compareTo(w.ONE) == 0 ? (o.n = o.p.multiply(o.q), o.d = a.modInverse(D), o.dmp1 = o.d.mod(p), o.dmq1 = o.d.mod(E), o.coeff = o.q.modInverse(o.p), setTimeout(function() {
          i();
        }, 0)) : setTimeout(u, 0);
      }, c = function() {
        o.q = S(), o.q.fromNumberAsync(s, 1, n, function() {
          o.q.subtract(w.ONE).gcda(a, function(g) {
            g.compareTo(w.ONE) == 0 && o.q.isProbablePrime(10) ? setTimeout(l, 0) : setTimeout(c, 0);
          });
        });
      }, f = function() {
        o.p = S(), o.p.fromNumberAsync(t - s, 1, n, function() {
          o.p.subtract(w.ONE).gcda(a, function(g) {
            g.compareTo(w.ONE) == 0 && o.p.isProbablePrime(10) ? setTimeout(c, 0) : setTimeout(f, 0);
          });
        });
      };
      setTimeout(f, 0);
    };
    setTimeout(u, 0);
  }, r.prototype.sign = function(t, e, i) {
    var n = ti(i), s = n + e(t).toString(), a = this.n.bitLength() / 4, o = Ze(s, a);
    if (o == null) return null;
    var u = this.doPrivate(o);
    if (u == null) return null;
    for (var l = u.toString(16), c = l.length, f = 0; f < a - c; f++) l = "0" + l;
    return l;
  }, r.prototype.verify = function(t, e, i) {
    var n = _(e, 16), s = this.doPublic(n);
    if (s == null) return null;
    var a = s.toString(16).replace(/^1f+00/, ""), o = ei(a);
    return o == i(t).toString();
  }, r;
})();
function Ye(r, t) {
  for (var e = r.toByteArray(), i = 0; i < e.length && e[i] == 0; ) ++i;
  if (e.length - i != t - 1 || e[i] != 2) return null;
  for (++i; e[i] != 0; ) if (++i >= e.length) return null;
  for (var n = ""; ++i < e.length; ) {
    var s = e[i] & 255;
    s < 128 ? n += String.fromCharCode(s) : s > 191 && s < 224 ? (n += String.fromCharCode((s & 31) << 6 | e[i + 1] & 63), ++i) : (n += String.fromCharCode((s & 15) << 12 | (e[i + 1] & 63) << 6 | e[i + 2] & 63), i += 2);
  }
  return n;
}
var xt = { md2: "3020300c06082a864886f70d020205000410", md5: "3020300c06082a864886f70d020505000410", sha1: "3021300906052b0e03021a05000414", sha224: "302d300d06096086480165030402040500041c", sha256: "3031300d060960864801650304020105000420", sha384: "3041300d060960864801650304020205000430", sha512: "3051300d060960864801650304020305000440", ripemd160: "3021300906052b2403020105000414" };
function ti(r) {
  return xt[r] || "";
}
function ei(r) {
  for (var t in xt) if (xt.hasOwnProperty(t)) {
    var e = xt[t], i = e.length;
    if (r.substring(0, i) == e) return r.substring(i);
  }
  return r;
}
function A(r, t, e) {
  if (!t || !r) throw new Error("extend failed, please check that all dependencies are included.");
  var i = function() {
  };
  i.prototype = t.prototype, r.prototype = new i(), r.prototype.constructor = r, r.superclass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t);
}
/**
* @fileOverview
* @name asn1-1.0.js
* @author Kenji Urushima kenji.urushima@gmail.com
* @version asn1 1.0.13 (2017-Jun-02)
* @since jsrsasign 2.1
* @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
*/
var h = {};
(typeof h.asn1 > "u" || !h.asn1) && (h.asn1 = {});
h.asn1.ASN1Util = new function() {
  this.integerToByteHex = function(r) {
    var t = r.toString(16);
    return t.length % 2 == 1 && (t = "0" + t), t;
  }, this.bigIntToMinTwosComplementsHex = function(r) {
    var t = r.toString(16);
    if (t.substring(0, 1) != "-") t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t);
    else {
      var e = t.substring(1), i = e.length;
      i % 2 == 1 ? i += 1 : t.match(/^[0-7]/) || (i += 2);
      for (var n = "", s = 0; s < i; s++) n += "f";
      var a = new w(n, 16), o = a.xor(r).add(w.ONE);
      t = o.toString(16).replace(/^-/, "");
    }
    return t;
  }, this.getPEMStringFromHex = function(r, t) {
    return hextopem(r, t);
  }, this.newObject = function(r) {
    var t = h, e = t.asn1, i = e.DERBoolean, n = e.DERInteger, s = e.DERBitString, a = e.DEROctetString, o = e.DERNull, u = e.DERObjectIdentifier, l = e.DEREnumerated, c = e.DERUTF8String, f = e.DERNumericString, g = e.DERPrintableString, p = e.DERTeletexString, E = e.DERIA5String, D = e.DERUTCTime, T = e.DERGeneralizedTime, G = e.DERSequence, M = e.DERSet, X = e.DERTaggedObject, R = e.ASN1Util.newObject, b = Object.keys(r);
    if (b.length != 1) throw "key of param shall be only one.";
    var y = b[0];
    if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + y + ":") == -1) throw "undefined key: " + y;
    if (y == "bool") return new i(r[y]);
    if (y == "int") return new n(r[y]);
    if (y == "bitstr") return new s(r[y]);
    if (y == "octstr") return new a(r[y]);
    if (y == "null") return new o(r[y]);
    if (y == "oid") return new u(r[y]);
    if (y == "enum") return new l(r[y]);
    if (y == "utf8str") return new c(r[y]);
    if (y == "numstr") return new f(r[y]);
    if (y == "prnstr") return new g(r[y]);
    if (y == "telstr") return new p(r[y]);
    if (y == "ia5str") return new E(r[y]);
    if (y == "utctime") return new D(r[y]);
    if (y == "gentime") return new T(r[y]);
    if (y == "seq") {
      for (var F = r[y], j = [], $ = 0; $ < F.length; $++) {
        var ot = R(F[$]);
        j.push(ot);
      }
      return new G({ array: j });
    }
    if (y == "set") {
      for (var F = r[y], j = [], $ = 0; $ < F.length; $++) {
        var ot = R(F[$]);
        j.push(ot);
      }
      return new M({ array: j });
    }
    if (y == "tag") {
      var N = r[y];
      if (Object.prototype.toString.call(N) === "[object Array]" && N.length == 3) {
        var P = R(N[2]);
        return new X({ tag: N[0], explicit: N[1], obj: P });
      } else {
        var rt = {};
        if (N.explicit !== void 0 && (rt.explicit = N.explicit), N.tag !== void 0 && (rt.tag = N.tag), N.obj === void 0) throw "obj shall be specified for 'tag'.";
        return rt.obj = R(N.obj), new X(rt);
      }
    }
  }, this.jsonToASN1HEX = function(r) {
    var t = this.newObject(r);
    return t.getEncodedHex();
  };
}();
h.asn1.ASN1Util.oidHexToInt = function(r) {
  for (var n = "", t = parseInt(r.substring(0, 2), 16), e = Math.floor(t / 40), i = t % 40, n = e + "." + i, s = "", a = 2; a < r.length; a += 2) {
    var o = parseInt(r.substring(a, a + 2), 16), u = ("00000000" + o.toString(2)).slice(-8);
    if (s = s + u.substring(1, 8), u.substring(0, 1) == "0") {
      var l = new w(s, 2);
      n = n + "." + l.toString(10), s = "";
    }
  }
  return n;
};
h.asn1.ASN1Util.oidIntToHex = function(r) {
  var t = function(o) {
    var u = o.toString(16);
    return u.length == 1 && (u = "0" + u), u;
  }, e = function(o) {
    var u = "", l = new w(o, 10), c = l.toString(2), f = 7 - c.length % 7;
    f == 7 && (f = 0);
    for (var g = "", p = 0; p < f; p++) g += "0";
    c = g + c;
    for (var p = 0; p < c.length - 1; p += 7) {
      var E = c.substring(p, p + 7);
      p != c.length - 7 && (E = "1" + E), u += t(parseInt(E, 2));
    }
    return u;
  };
  if (!r.match(/^[0-9.]+$/)) throw "malformed oid string: " + r;
  var i = "", n = r.split("."), s = parseInt(n[0]) * 40 + parseInt(n[1]);
  i += t(s), n.splice(0, 2);
  for (var a = 0; a < n.length; a++) i += e(n[a]);
  return i;
};
h.asn1.ASN1Object = function() {
  var r = "";
  this.getLengthHexFromValue = function() {
    if (typeof this.hV > "u" || this.hV == null) throw "this.hV is null or undefined.";
    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + r.length + ",v=" + this.hV;
    var t = this.hV.length / 2, e = t.toString(16);
    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
    var i = e.length / 2;
    if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
    var n = 128 + i;
    return n.toString(16) + e;
  }, this.getEncodedHex = function() {
    return (this.hTLV == null || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = false), this.hTLV;
  }, this.getValueHex = function() {
    return this.getEncodedHex(), this.hV;
  }, this.getFreshValueHex = function() {
    return "";
  };
};
h.asn1.DERAbstractString = function(r) {
  h.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
    return this.s;
  }, this.setString = function(t) {
    this.hTLV = null, this.isModified = true, this.s = t, this.hV = stohex(this.s);
  }, this.setStringHex = function(t) {
    this.hTLV = null, this.isModified = true, this.s = null, this.hV = t;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof r < "u" && (typeof r == "string" ? this.setString(r) : typeof r.str < "u" ? this.setString(r.str) : typeof r.hex < "u" && this.setStringHex(r.hex));
};
A(h.asn1.DERAbstractString, h.asn1.ASN1Object);
h.asn1.DERAbstractTime = function(r) {
  h.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
    utc = t.getTime() + t.getTimezoneOffset() * 6e4;
    var e = new Date(utc);
    return e;
  }, this.formatDate = function(t, e, i) {
    var n = this.zeroPadding, s = this.localDateToUTC(t), a = String(s.getFullYear());
    e == "utc" && (a = a.substring(2, 4));
    var o = n(String(s.getMonth() + 1), 2), u = n(String(s.getDate()), 2), l = n(String(s.getHours()), 2), c = n(String(s.getMinutes()), 2), f = n(String(s.getSeconds()), 2), g = a + o + u + l + c + f;
    if (i === true) {
      var p = s.getMilliseconds();
      if (p != 0) {
        var E = n(String(p), 3);
        E = E.replace(/[0]+$/, ""), g = g + "." + E;
      }
    }
    return g + "Z";
  }, this.zeroPadding = function(t, e) {
    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
  }, this.getString = function() {
    return this.s;
  }, this.setString = function(t) {
    this.hTLV = null, this.isModified = true, this.s = t, this.hV = stohex(t);
  }, this.setByDateValue = function(t, e, i, n, s, a) {
    var o = new Date(Date.UTC(t, e - 1, i, n, s, a, 0));
    this.setByDate(o);
  }, this.getFreshValueHex = function() {
    return this.hV;
  };
};
A(h.asn1.DERAbstractTime, h.asn1.ASN1Object);
h.asn1.DERAbstractStructured = function(r) {
  h.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
    this.hTLV = null, this.isModified = true, this.asn1Array = t;
  }, this.appendASN1Object = function(t) {
    this.hTLV = null, this.isModified = true, this.asn1Array.push(t);
  }, this.asn1Array = new Array(), typeof r < "u" && typeof r.array < "u" && (this.asn1Array = r.array);
};
A(h.asn1.DERAbstractStructured, h.asn1.ASN1Object);
h.asn1.DERBoolean = function() {
  h.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
};
A(h.asn1.DERBoolean, h.asn1.ASN1Object);
h.asn1.DERInteger = function(r) {
  h.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
    this.hTLV = null, this.isModified = true, this.hV = h.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
  }, this.setByInteger = function(t) {
    var e = new w(String(t), 10);
    this.setByBigInteger(e);
  }, this.setValueHex = function(t) {
    this.hV = t;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof r < "u" && (typeof r.bigint < "u" ? this.setByBigInteger(r.bigint) : typeof r.int < "u" ? this.setByInteger(r.int) : typeof r == "number" ? this.setByInteger(r) : typeof r.hex < "u" && this.setValueHex(r.hex));
};
A(h.asn1.DERInteger, h.asn1.ASN1Object);
h.asn1.DERBitString = function(r) {
  if (r !== void 0 && typeof r.obj < "u") {
    var t = h.asn1.ASN1Util.newObject(r.obj);
    r.hex = "00" + t.getEncodedHex();
  }
  h.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(e) {
    this.hTLV = null, this.isModified = true, this.hV = e;
  }, this.setUnusedBitsAndHexValue = function(e, i) {
    if (e < 0 || 7 < e) throw "unused bits shall be from 0 to 7: u = " + e;
    var n = "0" + e;
    this.hTLV = null, this.isModified = true, this.hV = n + i;
  }, this.setByBinaryString = function(e) {
    e = e.replace(/0+$/, "");
    var i = 8 - e.length % 8;
    i == 8 && (i = 0);
    for (var n = 0; n <= i; n++) e += "0";
    for (var s = "", n = 0; n < e.length - 1; n += 8) {
      var a = e.substring(n, n + 8), o = parseInt(a, 2).toString(16);
      o.length == 1 && (o = "0" + o), s += o;
    }
    this.hTLV = null, this.isModified = true, this.hV = "0" + i + s;
  }, this.setByBooleanArray = function(e) {
    for (var i = "", n = 0; n < e.length; n++) e[n] == true ? i += "1" : i += "0";
    this.setByBinaryString(i);
  }, this.newFalseArray = function(e) {
    for (var i = new Array(e), n = 0; n < e; n++) i[n] = false;
    return i;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof r < "u" && (typeof r == "string" && r.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(r) : typeof r.hex < "u" ? this.setHexValueIncludingUnusedBits(r.hex) : typeof r.bin < "u" ? this.setByBinaryString(r.bin) : typeof r.array < "u" && this.setByBooleanArray(r.array));
};
A(h.asn1.DERBitString, h.asn1.ASN1Object);
h.asn1.DEROctetString = function(r) {
  if (r !== void 0 && typeof r.obj < "u") {
    var t = h.asn1.ASN1Util.newObject(r.obj);
    r.hex = t.getEncodedHex();
  }
  h.asn1.DEROctetString.superclass.constructor.call(this, r), this.hT = "04";
};
A(h.asn1.DEROctetString, h.asn1.DERAbstractString);
h.asn1.DERNull = function() {
  h.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
};
A(h.asn1.DERNull, h.asn1.ASN1Object);
h.asn1.DERObjectIdentifier = function(r) {
  var t = function(i) {
    var n = i.toString(16);
    return n.length == 1 && (n = "0" + n), n;
  }, e = function(i) {
    var n = "", s = new w(i, 10), a = s.toString(2), o = 7 - a.length % 7;
    o == 7 && (o = 0);
    for (var u = "", l = 0; l < o; l++) u += "0";
    a = u + a;
    for (var l = 0; l < a.length - 1; l += 7) {
      var c = a.substring(l, l + 7);
      l != a.length - 7 && (c = "1" + c), n += t(parseInt(c, 2));
    }
    return n;
  };
  h.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(i) {
    this.hTLV = null, this.isModified = true, this.s = null, this.hV = i;
  }, this.setValueOidString = function(i) {
    if (!i.match(/^[0-9.]+$/)) throw "malformed oid string: " + i;
    var n = "", s = i.split("."), a = parseInt(s[0]) * 40 + parseInt(s[1]);
    n += t(a), s.splice(0, 2);
    for (var o = 0; o < s.length; o++) n += e(s[o]);
    this.hTLV = null, this.isModified = true, this.s = null, this.hV = n;
  }, this.setValueName = function(i) {
    var n = h.asn1.x509.OID.name2oid(i);
    if (n !== "") this.setValueOidString(n);
    else throw "DERObjectIdentifier oidName undefined: " + i;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, r !== void 0 && (typeof r == "string" ? r.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(r) : this.setValueName(r) : r.oid !== void 0 ? this.setValueOidString(r.oid) : r.hex !== void 0 ? this.setValueHex(r.hex) : r.name !== void 0 && this.setValueName(r.name));
};
A(h.asn1.DERObjectIdentifier, h.asn1.ASN1Object);
h.asn1.DEREnumerated = function(r) {
  h.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
    this.hTLV = null, this.isModified = true, this.hV = h.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
  }, this.setByInteger = function(t) {
    var e = new w(String(t), 10);
    this.setByBigInteger(e);
  }, this.setValueHex = function(t) {
    this.hV = t;
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof r < "u" && (typeof r.int < "u" ? this.setByInteger(r.int) : typeof r == "number" ? this.setByInteger(r) : typeof r.hex < "u" && this.setValueHex(r.hex));
};
A(h.asn1.DEREnumerated, h.asn1.ASN1Object);
h.asn1.DERUTF8String = function(r) {
  h.asn1.DERUTF8String.superclass.constructor.call(this, r), this.hT = "0c";
};
A(h.asn1.DERUTF8String, h.asn1.DERAbstractString);
h.asn1.DERNumericString = function(r) {
  h.asn1.DERNumericString.superclass.constructor.call(this, r), this.hT = "12";
};
A(h.asn1.DERNumericString, h.asn1.DERAbstractString);
h.asn1.DERPrintableString = function(r) {
  h.asn1.DERPrintableString.superclass.constructor.call(this, r), this.hT = "13";
};
A(h.asn1.DERPrintableString, h.asn1.DERAbstractString);
h.asn1.DERTeletexString = function(r) {
  h.asn1.DERTeletexString.superclass.constructor.call(this, r), this.hT = "14";
};
A(h.asn1.DERTeletexString, h.asn1.DERAbstractString);
h.asn1.DERIA5String = function(r) {
  h.asn1.DERIA5String.superclass.constructor.call(this, r), this.hT = "16";
};
A(h.asn1.DERIA5String, h.asn1.DERAbstractString);
h.asn1.DERUTCTime = function(r) {
  h.asn1.DERUTCTime.superclass.constructor.call(this, r), this.hT = "17", this.setByDate = function(t) {
    this.hTLV = null, this.isModified = true, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s);
  }, this.getFreshValueHex = function() {
    return typeof this.date > "u" && typeof this.s > "u" && (this.date = /* @__PURE__ */ new Date(), this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV;
  }, r !== void 0 && (r.str !== void 0 ? this.setString(r.str) : typeof r == "string" && r.match(/^[0-9]{12}Z$/) ? this.setString(r) : r.hex !== void 0 ? this.setStringHex(r.hex) : r.date !== void 0 && this.setByDate(r.date));
};
A(h.asn1.DERUTCTime, h.asn1.DERAbstractTime);
h.asn1.DERGeneralizedTime = function(r) {
  h.asn1.DERGeneralizedTime.superclass.constructor.call(this, r), this.hT = "18", this.withMillis = false, this.setByDate = function(t) {
    this.hTLV = null, this.isModified = true, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s);
  }, this.getFreshValueHex = function() {
    return this.date === void 0 && this.s === void 0 && (this.date = /* @__PURE__ */ new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV;
  }, r !== void 0 && (r.str !== void 0 ? this.setString(r.str) : typeof r == "string" && r.match(/^[0-9]{14}Z$/) ? this.setString(r) : r.hex !== void 0 ? this.setStringHex(r.hex) : r.date !== void 0 && this.setByDate(r.date), r.millis === true && (this.withMillis = true));
};
A(h.asn1.DERGeneralizedTime, h.asn1.DERAbstractTime);
h.asn1.DERSequence = function(r) {
  h.asn1.DERSequence.superclass.constructor.call(this, r), this.hT = "30", this.getFreshValueHex = function() {
    for (var t = "", e = 0; e < this.asn1Array.length; e++) {
      var i = this.asn1Array[e];
      t += i.getEncodedHex();
    }
    return this.hV = t, this.hV;
  };
};
A(h.asn1.DERSequence, h.asn1.DERAbstractStructured);
h.asn1.DERSet = function(r) {
  h.asn1.DERSet.superclass.constructor.call(this, r), this.hT = "31", this.sortFlag = true, this.getFreshValueHex = function() {
    for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
      var i = this.asn1Array[e];
      t.push(i.getEncodedHex());
    }
    return this.sortFlag == true && t.sort(), this.hV = t.join(""), this.hV;
  }, typeof r < "u" && typeof r.sortflag < "u" && r.sortflag == false && (this.sortFlag = false);
};
A(h.asn1.DERSet, h.asn1.DERAbstractStructured);
h.asn1.DERTaggedObject = function(r) {
  h.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = true, this.asn1Object = null, this.setASN1Object = function(t, e, i) {
    this.hT = e, this.isExplicit = t, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = true) : (this.hV = null, this.hTLV = i.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = false);
  }, this.getFreshValueHex = function() {
    return this.hV;
  }, typeof r < "u" && (typeof r.tag < "u" && (this.hT = r.tag), typeof r.explicit < "u" && (this.isExplicit = r.explicit), typeof r.obj < "u" && (this.asn1Object = r.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
};
A(h.asn1.DERTaggedObject, h.asn1.ASN1Object);
var ii = /* @__PURE__ */ (function() {
  var r = function(t, e) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
      i.__proto__ = n;
    } || function(i, n) {
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (i[s] = n[s]);
    }, r(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
  };
})(), Jt = (function(r) {
  ii(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return e && (typeof e == "string" ? i.parseKey(e) : (t.hasPrivateKeyProperty(e) || t.hasPublicKeyProperty(e)) && i.parsePropertiesFrom(e)), i;
  }
  return t.prototype.parseKey = function(e) {
    try {
      var i = 0, n = 0, s = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/, a = s.test(e) ? _e.decode(e) : Ct.unarmor(e), o = Ve.decode(a);
      if (o.sub.length === 3 && (o = o.sub[2].sub[0]), o.sub.length === 9) {
        i = o.sub[1].getHexStringValue(), this.n = _(i, 16), n = o.sub[2].getHexStringValue(), this.e = parseInt(n, 16);
        var u = o.sub[3].getHexStringValue();
        this.d = _(u, 16);
        var l = o.sub[4].getHexStringValue();
        this.p = _(l, 16);
        var c = o.sub[5].getHexStringValue();
        this.q = _(c, 16);
        var f = o.sub[6].getHexStringValue();
        this.dmp1 = _(f, 16);
        var g = o.sub[7].getHexStringValue();
        this.dmq1 = _(g, 16);
        var p = o.sub[8].getHexStringValue();
        this.coeff = _(p, 16);
      } else if (o.sub.length === 2) if (o.sub[0].sub) {
        var E = o.sub[1], D = E.sub[0];
        i = D.sub[0].getHexStringValue(), this.n = _(i, 16), n = D.sub[1].getHexStringValue(), this.e = parseInt(n, 16);
      } else i = o.sub[0].getHexStringValue(), this.n = _(i, 16), n = o.sub[1].getHexStringValue(), this.e = parseInt(n, 16);
      else return false;
      return true;
    } catch {
      return false;
    }
  }, t.prototype.getPrivateBaseKey = function() {
    var e = { array: [new h.asn1.DERInteger({ int: 0 }), new h.asn1.DERInteger({ bigint: this.n }), new h.asn1.DERInteger({ int: this.e }), new h.asn1.DERInteger({ bigint: this.d }), new h.asn1.DERInteger({ bigint: this.p }), new h.asn1.DERInteger({ bigint: this.q }), new h.asn1.DERInteger({ bigint: this.dmp1 }), new h.asn1.DERInteger({ bigint: this.dmq1 }), new h.asn1.DERInteger({ bigint: this.coeff })] }, i = new h.asn1.DERSequence(e);
    return i.getEncodedHex();
  }, t.prototype.getPrivateBaseKeyB64 = function() {
    return vt(this.getPrivateBaseKey());
  }, t.prototype.getPublicBaseKey = function() {
    var e = new h.asn1.DERSequence({ array: [new h.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }), new h.asn1.DERNull()] }), i = new h.asn1.DERSequence({ array: [new h.asn1.DERInteger({ bigint: this.n }), new h.asn1.DERInteger({ int: this.e })] }), n = new h.asn1.DERBitString({ hex: "00" + i.getEncodedHex() }), s = new h.asn1.DERSequence({ array: [e, n] });
    return s.getEncodedHex();
  }, t.prototype.getPublicBaseKeyB64 = function() {
    return vt(this.getPublicBaseKey());
  }, t.wordwrap = function(e, i) {
    if (i = i || 64, !e) return e;
    var n = "(.{1," + i + `})( +|$
?)|(.{1,` + i + "})";
    return e.match(RegExp(n, "g")).join(`
`);
  }, t.prototype.getPrivateKey = function() {
    var e = `-----BEGIN RSA PRIVATE KEY-----
`;
    return e += t.wordwrap(this.getPrivateBaseKeyB64()) + `
`, e += "-----END RSA PRIVATE KEY-----", e;
  }, t.prototype.getPublicKey = function() {
    var e = `-----BEGIN PUBLIC KEY-----
`;
    return e += t.wordwrap(this.getPublicBaseKeyB64()) + `
`, e += "-----END PUBLIC KEY-----", e;
  }, t.hasPublicKeyProperty = function(e) {
    return e = e || {}, e.hasOwnProperty("n") && e.hasOwnProperty("e");
  }, t.hasPrivateKeyProperty = function(e) {
    return e = e || {}, e.hasOwnProperty("n") && e.hasOwnProperty("e") && e.hasOwnProperty("d") && e.hasOwnProperty("p") && e.hasOwnProperty("q") && e.hasOwnProperty("dmp1") && e.hasOwnProperty("dmq1") && e.hasOwnProperty("coeff");
  }, t.prototype.parsePropertiesFrom = function(e) {
    this.n = e.n, this.e = e.e, e.hasOwnProperty("d") && (this.d = e.d, this.p = e.p, this.q = e.q, this.dmp1 = e.dmp1, this.dmq1 = e.dmq1, this.coeff = e.coeff);
  }, t;
})(Xe), ri = {}, Ot, ni = typeof process < "u" ? (Ot = ri) === null || Ot === void 0 ? void 0 : Ot.npm_package_version : void 0, ne = (function() {
  function r(t) {
    t === void 0 && (t = {}), this.default_key_size = t.default_key_size ? parseInt(t.default_key_size, 10) : 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || false, this.key = t.key || null;
  }
  return r.prototype.setKey = function(t) {
    t ? (this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new Jt(t)) : !this.key && this.log && console.error("A key was not set.");
  }, r.prototype.setPrivateKey = function(t) {
    this.setKey(t);
  }, r.prototype.setPublicKey = function(t) {
    this.setKey(t);
  }, r.prototype.decrypt = function(t) {
    try {
      return this.getKey().decrypt(qt(t));
    } catch {
      return false;
    }
  }, r.prototype.encrypt = function(t) {
    try {
      return vt(this.getKey().encrypt(t));
    } catch {
      return false;
    }
  }, r.prototype.encryptOAEP = function(t) {
    try {
      return vt(this.getKey().encrypt(t, We));
    } catch {
      return false;
    }
  }, r.prototype.sign = function(t, e, i) {
    e === void 0 && (e = function(n) {
      return n;
    }), i === void 0 && (i = "");
    try {
      return vt(this.getKey().sign(t, e, i));
    } catch {
      return false;
    }
  }, r.prototype.signSha256 = function(t) {
    return this.sign(t, function(e) {
      return Zt(Nt(e));
    }, "sha256");
  }, r.prototype.verify = function(t, e, i) {
    i === void 0 && (i = function(n) {
      return n;
    });
    try {
      return this.getKey().verify(t, qt(e), i);
    } catch {
      return false;
    }
  }, r.prototype.verifySha256 = function(t, e) {
    return this.verify(t, e, function(i) {
      return Zt(Nt(i));
    });
  }, r.prototype.getKey = function(t) {
    if (!this.key) {
      if (this.key = new Jt(), t && {}.toString.call(t) === "[object Function]") {
        this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
        return;
      }
      this.key.generate(this.default_key_size, this.default_public_exponent);
    }
    return this.key;
  }, r.prototype.getPrivateKey = function() {
    return this.getKey().getPrivateKey();
  }, r.prototype.getPrivateKeyB64 = function() {
    return this.getKey().getPrivateBaseKeyB64();
  }, r.prototype.getPublicKey = function() {
    return this.getKey().getPublicKey();
  }, r.prototype.getPublicKeyB64 = function() {
    return this.getKey().getPublicBaseKeyB64();
  }, r.version = ni, r;
})();
const si = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDcMTbFitfOemx/8tcasryDRQk3
Y7Zp8szBM03xbH3s+umdI5blcUdPLs4NEH9qojFoiCb7nPg92MXEfaXy9gNZ7Qft
OsU5XQRhySp6e/NdbRHut1ksvJXnlUc+OLFW6RIZgHwqmsZrlWRo71MXOBoPcpss
VEFfqFmzDY0Nw7zUKQIDAQAB`, oi = `MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANwxNsWK1856bH/y
1xqyvINFCTdjtmnyzMEzTfFsfez66Z0jluVxR08uzg0Qf2qiMWiIJvuc+D3YxcR9
pfL2A1ntB+06xTldBGHJKnp7811tEe63WSy8leeVRz44sVbpEhmAfCqaxmuVZGjv
Uxc4Gg9ymyxUQV+oWbMNjQ3DvNQpAgMBAAECgYEAhU+Od58N9UaNdhGSRem81ETx
xYUrJY4IhVgIcoha3SU0Vxz6+MLSh5Aw1BwO6IJ2I3F7GI76hIc/hS0FUcm8UI9r
9QrDp9LC5lQjD8kjnLCRpKwF9fSv76asWHhKsvTDVZvsxJhuVKd6SSmFYSC5EgNx
uVn5PeTLCYzpNtJ6IlkCQQD9FsGOilFltYiXZWNvfdsCCBmzOQUzmoU3G/WOQHyy
3ue/cOYOmygDNjxm2aqBx6TAD7fs0ErnD6xnwgM6jgWnAkEA3rmXMjTgT7Ux5uE1
RKwUvzVPZgyNt3mvabfTU6ROFD99Rbgf7nb6Fa1+DFKXu6mxoHE6mL5c/Z8mjyru
fB4xrwJAFFAbQOGBHvSu/de5X11ukn8r8OKGtFmWj5HC56PtXj3dw9O/4zQ4xek4
d9jIgpoPcwrP7EXbfSgY4ksED1MOyQJATMjrCVIVayVquNA3jx9MX8c/Qk1dpj17
bhUD9DgW+wAQbjLWP14hRcv0QsdOrFIKfOfMbdBjOsTdhEomwf+e3QJBAI3y7+Z/
+KWOirIjXsWmGZAJSBuF4v3s5mK9lMcBBkTUggz+MwAP9gbvWkSc0jpuMGGpigKE
pUm/fr5oXLkGSAA=`;
function ai(r) {
  const t = new ne();
  return t.setPublicKey(si), t.encrypt(r);
}
function ui(r) {
  const t = new ne();
  return t.setPrivateKey(oi), t.decrypt(r);
}
const V = yt({ name: "Motion", props: { delay: { type: Number, default: 50 } }, render() {
  const { delay: r } = this, t = oe("motion");
  return ae(ue("div", {}, { default: () => [this.$slots.default()] }), [[t, { initial: { opacity: 0, y: 100 }, enter: { opacity: 1, y: 0, transition: { delay: r } } }]]);
} }), { $t: L } = dt(), hi = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){6,18}$/, fi = st({ password: [{ validator: (r, t, e) => {
  t === "" ? e(new Error(L("login.passwordReg"))) : t.length < 6 ? e(new Error(L("login.passwordRuleReg6"))) : e();
}, trigger: "blur" }], code: [{ validator: (r, t, e) => {
  t === "" ? e(new Error(L("login.verifyCodeReg"))) : e();
}, trigger: "blur" }] }), li = st({ phone: [{ validator: (r, t, e) => {
  t === "" ? e(new Error(L("login.phoneReg"))) : Wt(t) ? e() : e(new Error(L("login.phoneCorrectReg")));
}, trigger: "blur" }], verifyCode: [{ validator: (r, t, e) => {
  t === "" ? e(new Error(L("login.verifyCodeReg"))) : e();
}, trigger: "blur" }] }), ci = st({ phone: [{ validator: (r, t, e) => {
  t === "" ? e(new Error(L("login.phoneReg"))) : Wt(t) ? e() : e(new Error(L("login.phoneCorrectReg")));
}, trigger: "blur" }], verifyCode: [{ validator: (r, t, e) => {
  t === "" ? e(new Error(L("login.verifyCodeReg"))) : e();
}, trigger: "blur" }], password: [{ validator: (r, t, e) => {
  t === "" ? e(new Error(L("login.passwordReg"))) : hi.test(t) ? e() : e(new Error(L("login.passwordRuleReg")));
}, trigger: "blur" }] }), se = { width: 1024, height: 1024, body: '<path fill="currentColor" d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0a48 48 0 0 1 96 0z"/>' }, di = { class: "w-full flex justify-between" }, pi = yt({ __name: "phone", setup(r) {
  const { $t: t } = dt(), e = tt(false), i = st({ phone: "", verifyCode: "" }), n = tt(), { isDisabled: s, text: a } = lt(), o = async (c) => {
    e.value = true, c && await c.validate((f, g) => {
      if (f) q().loginByPhone({ phone: i.phone, code: i.verifyCode }).then((p) => {
        p && Mt().then(() => {
          Xt(true), _t(t("layout.loginSuccess"), { type: "success" }), setTimeout(() => {
            e.value = false, q().SET_CURRENTPAGE(0);
          }, 3e3);
        });
      }).catch(() => {
        e.value = false;
      });
      else return e.value = false, g;
    });
  };
  function u() {
    lt().end(), q().SET_CURRENTPAGE(0);
  }
  function l() {
    lt().start(n.value, "phone", i.phone);
  }
  return (c, f) => {
    const g = O("el-input"), p = O("el-form-item"), E = O("el-button"), D = O("el-form");
    return C(), K(D, { ref_key: "ruleFormRef", ref: n, model: i, rules: d(li), size: "large" }, { default: m(() => [v(d(V), null, { default: m(() => [v(p, { prop: "phone" }, { default: m(() => [v(g, { clearable: "", modelValue: i.phone, "onUpdate:modelValue": f[0] || (f[0] = (T) => i.phone = T), placeholder: d(t)("login.phone"), "prefix-icon": d(J)(d(se)) }, null, 8, ["modelValue", "placeholder", "prefix-icon"])]), _: 1 })]), _: 1 }), v(d(V), { delay: 100 }, { default: m(() => [v(p, { prop: "verifyCode" }, { default: m(() => [x("div", di, [v(g, { clearable: "", modelValue: i.verifyCode, "onUpdate:modelValue": f[1] || (f[1] = (T) => i.verifyCode = T), placeholder: d(t)("login.smsVerifyCode"), "prefix-icon": d(J)("ri:shield-keyhole-line") }, null, 8, ["modelValue", "placeholder", "prefix-icon"]), v(E, { disabled: d(s), class: "ml-2 button-code", onClick: f[2] || (f[2] = (T) => l()) }, { default: m(() => [W(H(d(a).length > 0 ? d(a) + d(t)("login.info") : d(t)("login.getVerifyCode")), 1)]), _: 1 }, 8, ["disabled"])])]), _: 1 })]), _: 1 }), v(d(V), { delay: 150 }, { default: m(() => [v(p, null, { default: m(() => [v(E, { class: "w-full", style: { "min-height": "50px", "font-size": "16px", "background-color": "#165bd3", border: "none", "border-radius": "50px" }, size: "default", type: "primary", loading: e.value, onClick: f[3] || (f[3] = (T) => o(n.value)) }, { default: m(() => [W(H(d(t)("login.login")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 })]), _: 1 }), v(d(V), { delay: 200 }, { default: m(() => [v(p, null, { default: m(() => [v(E, { class: "w-full", style: { "min-height": "50px", "font-size": "16px", "border-radius": "50px" }, size: "default", onClick: u }, { default: m(() => [W(H(d(t)("login.back")), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model", "rules"]);
  };
} }), gi = kt(pi, [["__scopeId", "data-v-53c359bf"]]), vi = yt({ __name: "thirdPart", setup(r) {
  const { $t: t } = dt(), e = Yt();
  return he(() => e.path, () => {
    const i = e.query;
    i.type && i.code && q().loginByThirdParty({ type: i.type, code: i.code, redirectUri: i.redirectUri }).then((n) => {
      n && (q().SET_CURRENTPAGE(0), Mt().then(() => {
        Xt(true), _t(t("layout.loginSuccess"), { type: "success" });
      }));
    });
  }, { immediate: true, deep: true }), (i, n) => {
    const s = O("el-form-item");
    return C(), K(s);
  };
} }), Pt = { width: 24, height: 24, body: '<path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"/>' }, yi = { class: "w-full flex justify-between" }, mi = yt({ __name: "update", setup(r) {
  const { $t: t } = dt(), e = tt(false), i = st({ phone: "", verifyCode: "", password: "", repeatPassword: "" }), n = tt(), { isDisabled: s, text: a } = lt(), o = [{ validator: (c, f, g) => {
    f === "" ? g(new Error(t("login.passwordSureReg"))) : i.password !== f ? g(new Error(t("login.passwordDifferentReg"))) : g();
  }, trigger: "blur" }], u = async (c) => {
    e.value = true, c && await c.validate((f, g) => {
      if (f) setTimeout(() => {
        _t(t("login.passwordUpdateReg"), { type: "success" }), e.value = false;
      }, 2e3);
      else return e.value = false, g;
    });
  };
  function l() {
    lt().end(), q().SET_CURRENTPAGE(0);
  }
  return (c, f) => {
    const g = O("el-input"), p = O("el-form-item"), E = O("el-button"), D = O("el-form");
    return C(), K(D, { ref_key: "ruleFormRef", ref: n, model: i, rules: d(ci), size: "large" }, { default: m(() => [v(d(V), null, { default: m(() => [v(p, { prop: "phone" }, { default: m(() => [v(g, { clearable: "", modelValue: i.phone, "onUpdate:modelValue": f[0] || (f[0] = (T) => i.phone = T), placeholder: d(t)("login.phone"), "prefix-icon": d(J)(d(se)) }, null, 8, ["modelValue", "placeholder", "prefix-icon"])]), _: 1 })]), _: 1 }), v(d(V), { delay: 100 }, { default: m(() => [v(p, { prop: "verifyCode" }, { default: m(() => [x("div", yi, [v(g, { clearable: "", modelValue: i.verifyCode, "onUpdate:modelValue": f[1] || (f[1] = (T) => i.verifyCode = T), placeholder: d(t)("login.smsVerifyCode"), "prefix-icon": d(J)("ri:shield-keyhole-line") }, null, 8, ["modelValue", "placeholder", "prefix-icon"]), v(E, { disabled: d(s), class: "ml-2 button-code", onClick: f[2] || (f[2] = (T) => d(lt)().start(n.value, "phone", i.phone)) }, { default: m(() => [W(H(d(a).length > 0 ? d(a) + d(t)("login.info") : d(t)("login.getVerifyCode")), 1)]), _: 1 }, 8, ["disabled"])])]), _: 1 })]), _: 1 }), v(d(V), { delay: 150 }, { default: m(() => [v(p, { prop: "password" }, { default: m(() => [v(g, { clearable: "", "show-password": "", modelValue: i.password, "onUpdate:modelValue": f[3] || (f[3] = (T) => i.password = T), placeholder: d(t)("login.password"), "prefix-icon": d(J)(d(Pt)) }, null, 8, ["modelValue", "placeholder", "prefix-icon"])]), _: 1 })]), _: 1 }), v(d(V), { delay: 200 }, { default: m(() => [v(p, { rules: o, prop: "repeatPassword" }, { default: m(() => [v(g, { clearable: "", "show-password": "", modelValue: i.repeatPassword, "onUpdate:modelValue": f[4] || (f[4] = (T) => i.repeatPassword = T), placeholder: d(t)("login.sure"), "prefix-icon": d(J)(d(Pt)) }, null, 8, ["modelValue", "placeholder", "prefix-icon"])]), _: 1 })]), _: 1 }), v(d(V), { delay: 250 }, { default: m(() => [v(p, null, { default: m(() => [v(E, { class: "w-full", size: "default", type: "primary", loading: e.value, onClick: f[5] || (f[5] = (T) => u(n.value)) }, { default: m(() => [W(H(d(t)("login.definite")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 })]), _: 1 }), v(d(V), { delay: 300 }, { default: m(() => [v(p, null, { default: m(() => [v(E, { class: "w-full", size: "default", onClick: l }, { default: m(() => [W(H(d(t)("login.back")), 1)]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model", "rules"]);
  };
} }), bi = kt(mi, [["__scopeId", "data-v-af1341b5"]]), { $t: zi } = dt(), wi = [{ title: "login.phoneLogin" }, { title: "login.applyShop" }, { title: "login.applyMall" }], Si = { width: 24, height: 24, body: '<path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"/>' }, Ti = { class: "login-page" }, Ei = { class: "login-container-modern" }, Di = { class: "login-decoration" }, xi = { class: "decoration-content" }, Ri = { class: "features-list" }, _i = { class: "feature-item" }, Ai = { class: "feature-item" }, Bi = { class: "feature-item" }, Vi = { class: "login-form-container" }, Ii = { class: "login-form-wrapper" }, Oi = { class: "form-header" }, Ci = { class: "flex" }, Ni = { class: "login-code-modern" }, Pi = ["src"], Mi = { class: "remember-forgot" }, ki = { class: "alternative-login" }, Fi = yt({ name: "Login", __name: "index", setup(r) {
  const { $t: t } = dt(), e = pe(), i = Yt(), n = tt(false), s = tt(false), a = tt();
  if (i.query && Object.keys(i.query).length > 0) {
    const { defaultUserLoginAccount: R = "", defaultUserLoginPassword: b = "" } = i.query;
    localStorage.setItem("defaultUserLoginAccount", R), localStorage.setItem("defaultUserLoginPassword", b);
  }
  const o = fe(() => q().currentPage), { initStorage: u } = we();
  u();
  const { dataThemeChange: l } = Se();
  l(), me(), Te();
  const c = st({ src: "/code", value: "", len: 5, type: "image" }), f = st({ username: localStorage.getItem("defaultUserLoginAccount") || "", password: localStorage.getItem("defaultUserLoginPassword") || "", code: "", randomStr: "" });
  tt();
  const g = async (R) => {
    n.value = true, R && await R.validate((b, y) => {
      if (b) q().loginByUsername(f).then((F) => {
        F ? (E(), Mt().then(() => {
          e.push(ge(true).path), _t(t("login.loginSuccess"), { type: "success" }), n.value = false;
        }).catch(() => {
          n.value = false, T();
        })) : n.value = false;
      }).catch(() => {
        n.value = false, T();
      });
      else return n.value = false, y;
    });
  }, p = () => {
    const R = Z.get("username"), b = Z.get("password"), y = Z.get("rememberChecked");
    R && (f.username = R), b && (f.password = ui(b)), y && (s.value = true);
  }, E = () => {
    s.value ? (Z.set("username", f.username, { expires: 30 }), Z.set("password", ai(f.password), { expires: 30 }), Z.set("rememberChecked", String(s.value), { expires: 30 })) : (Z.remove("username"), Z.remove("password"), Z.remove("rememberChecked"));
  };
  function D(R, b) {
    let y = "";
    return y = Math.ceil(Math.random() * 1e14).toString().substr(0, R || 4), b && (y = y + Date.now()), y;
  }
  function T() {
    f.code = "", f.randomStr = D(c.len, true), c.type === "text" ? c.value = D(c.len) : c.src = `${window.location.origin}/code?randomStr=${f.randomStr}`;
  }
  function G({ code: R }) {
    R === "Enter" && g(a.value);
  }
  function M(R, b) {
    b == 1 && (q().SET_CURRENTPAGE(0), window.open("#/upms/tenant/index-outside", "_blank")), b == 2 ? (q().SET_CURRENTPAGE(0), window.open("#/upms/tenantapply/form", "_blank")) : q().SET_CURRENTPAGE(b + 1);
  }
  le(() => {
    window.document.addEventListener("keypress", G), p(), T();
  }), ce(() => {
    window.document.removeEventListener("keypress", G);
  }), X();
  function X() {
    const R = navigator.userAgent.toLowerCase();
    (R.indexOf("msie") > -1 || R.indexOf("trident") > -1 || R.indexOf("edge") > -1) && setTimeout(() => {
      de({ title: "\u6D4F\u89C8\u5668\u517C\u5BB9\u63D0\u793A", dangerouslyUseHTMLString: true, message: "\u8BF7\u4F7F\u7528Google\u3001Safari\u3001360\u6781\u901F\u7B49\u4E3B\u6D41\u6D4F\u89C8\u5668\u5E76\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5426\u5219\u9875\u9762\u53EF\u80FD\u51FA\u73B0\u672A\u77E5\u9519\u8BEF\uFF01<a href='https://pc.qq.com/detail/18/detail_21258.html' target='_blank' style='color: #2233ff'>\u7ACB\u5373\u4E0B\u8F7D</a>", duration: 0, type: "warning" });
    }, 500);
  }
  return (R, b) => {
    const y = O("el-icon"), F = O("el-input"), j = O("el-form-item"), $ = O("el-checkbox"), ot = O("el-button"), N = O("el-form");
    return C(), mt("div", Ti, [x("div", Ei, [x("div", Di, [x("div", xi, [b[8] || (b[8] = x("div", { class: "logo-wrapper" }, null, -1)), b[9] || (b[9] = x("h1", { class: "welcome-title" }, "\u6B22\u8FCE\u4F7F\u7528", -1)), b[10] || (b[10] = x("p", { class: "welcome-subtitle" }, "\u7535\u5546\u7BA1\u7406\u7CFB\u7EDF", -1)), x("div", Ri, [x("div", _i, [v(y, { color: "#409eff", size: "20" }, { default: m(() => [v(d(Bt))]), _: 1 }), b[5] || (b[5] = x("span", null, "\u5B89\u5168\u53EF\u9760\u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF", -1))]), x("div", Ai, [v(y, { color: "#409eff", size: "20" }, { default: m(() => [v(d(Bt))]), _: 1 }), b[6] || (b[6] = x("span", null, "\u4E00\u7AD9\u5F0F\u7535\u5546\u89E3\u51B3\u65B9\u6848", -1))]), x("div", Bi, [v(y, { color: "#409eff", size: "20" }, { default: m(() => [v(d(Bt))]), _: 1 }), b[7] || (b[7] = x("span", null, "\u591A\u7AEF\u534F\u540C\uFF0C\u9AD8\u6548\u7BA1\u7406", -1))])]), b[11] || (b[11] = x("div", { class: "decoration-image" }, null, -1))])]), x("div", Vi, [x("div", Ii, [x("div", Oi, [x("h2", null, H(d(t)("login.login")), 1), b[12] || (b[12] = x("div", { class: "language-theme-switchers" }, null, -1))]), v(N, { ref_key: "ruleFormRef", ref: a, model: f, rules: d(fi), size: "large", class: "login-form-modern" }, { default: m(() => [o.value == 0 || o.value == 2 || o.value == 3 ? (C(), K(d(V), { key: 0, delay: 100 }, { default: m(() => [v(j, { rules: [{ required: true, message: d(t)("login.usernameReg"), trigger: "blur" }], prop: "username" }, { default: m(() => [v(F, { modelValue: f.username, "onUpdate:modelValue": b[0] || (b[0] = (P) => f.username = P), clearable: "", placeholder: d(t)("login.username"), "prefix-icon": d(J)(d(Si)), class: "modern-input" }, null, 8, ["modelValue", "placeholder", "prefix-icon"])]), _: 1 }, 8, ["rules"])]), _: 1 })) : at("", true), o.value == 0 || o.value == 2 || o.value == 3 ? (C(), K(d(V), { key: 1, delay: 150 }, { default: m(() => [v(j, { prop: "password" }, { default: m(() => [v(F, { modelValue: f.password, "onUpdate:modelValue": b[1] || (b[1] = (P) => f.password = P), clearable: "", "show-password": "", placeholder: d(t)("login.password"), "prefix-icon": d(J)(d(Pt)), class: "modern-input" }, null, 8, ["modelValue", "placeholder", "prefix-icon"])]), _: 1 })]), _: 1 })) : at("", true), o.value == 0 || o.value == 2 || o.value == 3 ? (C(), K(d(V), { key: 2, delay: 200 }, { default: m(() => [v(j, { prop: "code" }, { default: m(() => [x("div", Ci, [v(F, { modelValue: f.code, "onUpdate:modelValue": b[2] || (b[2] = (P) => f.code = P), clearable: "", placeholder: d(t)("login.verifyCode"), "prefix-icon": d(J)("ri:shield-keyhole-line"), class: "modern-input" }, null, 8, ["modelValue", "placeholder", "prefix-icon"]), x("div", Ni, [c.type == "text" ? (C(), mt("span", { key: 0, class: "login-code-img-modern", onClick: T }, H(c.value), 1)) : (C(), mt("img", { key: 1, src: c.src, class: "login-code-img-modern", onClick: T }, null, 8, Pi))])])]), _: 1 })]), _: 1 })) : at("", true), o.value == 0 || o.value == 2 || o.value == 3 ? (C(), K(d(V), { key: 3, delay: 250 }, { default: m(() => [v(j, null, { default: m(() => [x("div", Mi, [v($, { modelValue: s.value, "onUpdate:modelValue": b[3] || (b[3] = (P) => s.value = P) }, { default: m(() => [W(H(d(t)("login.remember")), 1)]), _: 1 }, 8, ["modelValue"])]), v(ot, { class: "login-button", size: "large", type: "primary", loading: n.value, onClick: b[4] || (b[4] = (P) => g(a.value)), round: "" }, { default: m(() => [W(H(d(t)("login.login")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 })]), _: 1 })) : at("", true)]), _: 1 }, 8, ["model", "rules"]), o.value === 1 ? (C(), K(gi, { key: 0 })) : at("", true), v(d(V), { delay: 300 }, { default: m(() => [x("div", ki, [(C(true), mt(ve, null, ye(d(wi), (P, rt) => (C(), K(ot, { key: rt, class: "alternative-button", size: "default", onClick: (Ui) => M(P, rt), link: "" }, { default: m(() => [W(H(d(t)(P.title)), 1)]), _: 2 }, 1032, ["onClick"]))), 128))])]), _: 1 }), v(d(V), { delay: 350 }, { default: m(() => [v(vi)]), _: 1 }), o.value === 4 ? (C(), K(bi, { key: 1 })) : at("", true)])]), v(be, { class: "login-footer absolute bottom-4", style: { bottom: "-48px" } })])]);
  };
} }), Gi = kt(Fi, [["__scopeId", "data-v-da17e551"]]);
export {
  Gi as default
};
