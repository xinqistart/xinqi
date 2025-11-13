import { as as gt, _ as bt, E as vt, p as _t, ad as Ot, t as Et, ap as kt, c as At, o as wt } from "./index-DAdfXJ2i.js";
var dt = { exports: {} };
/*!
* Quill Editor v1.3.7
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
var Nt = dt.exports, yt;
function Tt() {
  return yt || (yt = 1, (function(ut, ht) {
    (function(_, v) {
      ut.exports = v();
    })(typeof self < "u" ? self : Nt, function() {
      return (function(I) {
        var _ = {};
        function v(P) {
          if (_[P]) return _[P].exports;
          var w = _[P] = { i: P, l: false, exports: {} };
          return I[P].call(w.exports, w, w.exports, v), w.l = true, w.exports;
        }
        return v.m = I, v.c = _, v.d = function(P, w, O) {
          v.o(P, w) || Object.defineProperty(P, w, { configurable: false, enumerable: true, get: O });
        }, v.n = function(P) {
          var w = P && P.__esModule ? function() {
            return P.default;
          } : function() {
            return P;
          };
          return v.d(w, "a", w), w;
        }, v.o = function(P, w) {
          return Object.prototype.hasOwnProperty.call(P, w);
        }, v.p = "", v(v.s = 109);
      })([(function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(17), w = v(18), O = v(19), y = v(45), d = v(46), c = v(47), o = v(48), t = v(49), e = v(12), u = v(32), l = v(33), a = v(31), r = v(1), i = { Scope: r.Scope, create: r.create, find: r.find, query: r.query, register: r.register, Container: P.default, Format: w.default, Leaf: O.default, Embed: o.default, Scroll: y.default, Block: c.default, Inline: d.default, Text: t.default, Attributor: { Attribute: e.default, Class: u.default, Style: l.default, Store: a.default } };
        _.default = i;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
            r.__proto__ = i;
          } || function(r, i) {
            for (var f in i) i.hasOwnProperty(f) && (r[f] = i[f]);
          };
          return function(r, i) {
            a(r, i);
            function f() {
              this.constructor = r;
            }
            r.prototype = i === null ? Object.create(i) : (f.prototype = i.prototype, new f());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = (function(a) {
          P(r, a);
          function r(i) {
            var f = this;
            return i = "[Parchment] " + i, f = a.call(this, i) || this, f.message = i, f.name = f.constructor.name, f;
          }
          return r;
        })(Error);
        _.ParchmentError = w;
        var O = {}, y = {}, d = {}, c = {};
        _.DATA_KEY = "__blot";
        var o;
        (function(a) {
          a[a.TYPE = 3] = "TYPE", a[a.LEVEL = 12] = "LEVEL", a[a.ATTRIBUTE = 13] = "ATTRIBUTE", a[a.BLOT = 14] = "BLOT", a[a.INLINE = 7] = "INLINE", a[a.BLOCK = 11] = "BLOCK", a[a.BLOCK_BLOT = 10] = "BLOCK_BLOT", a[a.INLINE_BLOT = 6] = "INLINE_BLOT", a[a.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", a[a.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", a[a.ANY = 15] = "ANY";
        })(o = _.Scope || (_.Scope = {}));
        function t(a, r) {
          var i = u(a);
          if (i == null) throw new w("Unable to create " + a + " blot");
          var f = i, n = a instanceof Node || a.nodeType === Node.TEXT_NODE ? a : f.create(r);
          return new f(n, r);
        }
        _.create = t;
        function e(a, r) {
          return r === void 0 && (r = false), a == null ? null : a[_.DATA_KEY] != null ? a[_.DATA_KEY].blot : r ? e(a.parentNode, r) : null;
        }
        _.find = e;
        function u(a, r) {
          r === void 0 && (r = o.ANY);
          var i;
          if (typeof a == "string") i = c[a] || O[a];
          else if (a instanceof Text || a.nodeType === Node.TEXT_NODE) i = c.text;
          else if (typeof a == "number") a & o.LEVEL & o.BLOCK ? i = c.block : a & o.LEVEL & o.INLINE && (i = c.inline);
          else if (a instanceof HTMLElement) {
            var f = (a.getAttribute("class") || "").split(/\s+/);
            for (var n in f) if (i = y[f[n]], i) break;
            i = i || d[a.tagName];
          }
          return i == null ? null : r & o.LEVEL & i.scope && r & o.TYPE & i.scope ? i : null;
        }
        _.query = u;
        function l() {
          for (var a = [], r = 0; r < arguments.length; r++) a[r] = arguments[r];
          if (a.length > 1) return a.map(function(n) {
            return l(n);
          });
          var i = a[0];
          if (typeof i.blotName != "string" && typeof i.attrName != "string") throw new w("Invalid definition");
          if (i.blotName === "abstract") throw new w("Cannot register abstract class");
          if (c[i.blotName || i.attrName] = i, typeof i.keyName == "string") O[i.keyName] = i;
          else if (i.className != null && (y[i.className] = i), i.tagName != null) {
            Array.isArray(i.tagName) ? i.tagName = i.tagName.map(function(n) {
              return n.toUpperCase();
            }) : i.tagName = i.tagName.toUpperCase();
            var f = Array.isArray(i.tagName) ? i.tagName : [i.tagName];
            f.forEach(function(n) {
              (d[n] == null || i.className == null) && (d[n] = i);
            });
          }
          return i;
        }
        _.register = l;
      }), (function(I, _, v) {
        var P = v(51), w = v(11), O = v(3), y = v(20), d = "\0", c = function(o) {
          Array.isArray(o) ? this.ops = o : o != null && Array.isArray(o.ops) ? this.ops = o.ops : this.ops = [];
        };
        c.prototype.insert = function(o, t) {
          var e = {};
          return o.length === 0 ? this : (e.insert = o, t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e));
        }, c.prototype.delete = function(o) {
          return o <= 0 ? this : this.push({ delete: o });
        }, c.prototype.retain = function(o, t) {
          if (o <= 0) return this;
          var e = { retain: o };
          return t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e);
        }, c.prototype.push = function(o) {
          var t = this.ops.length, e = this.ops[t - 1];
          if (o = O(true, {}, o), typeof e == "object") {
            if (typeof o.delete == "number" && typeof e.delete == "number") return this.ops[t - 1] = { delete: e.delete + o.delete }, this;
            if (typeof e.delete == "number" && o.insert != null && (t -= 1, e = this.ops[t - 1], typeof e != "object")) return this.ops.unshift(o), this;
            if (w(o.attributes, e.attributes)) {
              if (typeof o.insert == "string" && typeof e.insert == "string") return this.ops[t - 1] = { insert: e.insert + o.insert }, typeof o.attributes == "object" && (this.ops[t - 1].attributes = o.attributes), this;
              if (typeof o.retain == "number" && typeof e.retain == "number") return this.ops[t - 1] = { retain: e.retain + o.retain }, typeof o.attributes == "object" && (this.ops[t - 1].attributes = o.attributes), this;
            }
          }
          return t === this.ops.length ? this.ops.push(o) : this.ops.splice(t, 0, o), this;
        }, c.prototype.chop = function() {
          var o = this.ops[this.ops.length - 1];
          return o && o.retain && !o.attributes && this.ops.pop(), this;
        }, c.prototype.filter = function(o) {
          return this.ops.filter(o);
        }, c.prototype.forEach = function(o) {
          this.ops.forEach(o);
        }, c.prototype.map = function(o) {
          return this.ops.map(o);
        }, c.prototype.partition = function(o) {
          var t = [], e = [];
          return this.forEach(function(u) {
            var l = o(u) ? t : e;
            l.push(u);
          }), [t, e];
        }, c.prototype.reduce = function(o, t) {
          return this.ops.reduce(o, t);
        }, c.prototype.changeLength = function() {
          return this.reduce(function(o, t) {
            return t.insert ? o + y.length(t) : t.delete ? o - t.delete : o;
          }, 0);
        }, c.prototype.length = function() {
          return this.reduce(function(o, t) {
            return o + y.length(t);
          }, 0);
        }, c.prototype.slice = function(o, t) {
          o = o || 0, typeof t != "number" && (t = 1 / 0);
          for (var e = [], u = y.iterator(this.ops), l = 0; l < t && u.hasNext(); ) {
            var a;
            l < o ? a = u.next(o - l) : (a = u.next(t - l), e.push(a)), l += y.length(a);
          }
          return new c(e);
        }, c.prototype.compose = function(o) {
          var t = y.iterator(this.ops), e = y.iterator(o.ops), u = [], l = e.peek();
          if (l != null && typeof l.retain == "number" && l.attributes == null) {
            for (var a = l.retain; t.peekType() === "insert" && t.peekLength() <= a; ) a -= t.peekLength(), u.push(t.next());
            l.retain - a > 0 && e.next(l.retain - a);
          }
          for (var r = new c(u); t.hasNext() || e.hasNext(); ) if (e.peekType() === "insert") r.push(e.next());
          else if (t.peekType() === "delete") r.push(t.next());
          else {
            var i = Math.min(t.peekLength(), e.peekLength()), f = t.next(i), n = e.next(i);
            if (typeof n.retain == "number") {
              var s = {};
              typeof f.retain == "number" ? s.retain = i : s.insert = f.insert;
              var A = y.attributes.compose(f.attributes, n.attributes, typeof f.retain == "number");
              if (A && (s.attributes = A), r.push(s), !e.hasNext() && w(r.ops[r.ops.length - 1], s)) {
                var g = new c(t.rest());
                return r.concat(g).chop();
              }
            } else typeof n.delete == "number" && typeof f.retain == "number" && r.push(n);
          }
          return r.chop();
        }, c.prototype.concat = function(o) {
          var t = new c(this.ops.slice());
          return o.ops.length > 0 && (t.push(o.ops[0]), t.ops = t.ops.concat(o.ops.slice(1))), t;
        }, c.prototype.diff = function(o, t) {
          if (this.ops === o.ops) return new c();
          var e = [this, o].map(function(i) {
            return i.map(function(f) {
              if (f.insert != null) return typeof f.insert == "string" ? f.insert : d;
              var n = i === o ? "on" : "with";
              throw new Error("diff() called " + n + " non-document");
            }).join("");
          }), u = new c(), l = P(e[0], e[1], t), a = y.iterator(this.ops), r = y.iterator(o.ops);
          return l.forEach(function(i) {
            for (var f = i[1].length; f > 0; ) {
              var n = 0;
              switch (i[0]) {
                case P.INSERT:
                  n = Math.min(r.peekLength(), f), u.push(r.next(n));
                  break;
                case P.DELETE:
                  n = Math.min(f, a.peekLength()), a.next(n), u.delete(n);
                  break;
                case P.EQUAL:
                  n = Math.min(a.peekLength(), r.peekLength(), f);
                  var s = a.next(n), A = r.next(n);
                  w(s.insert, A.insert) ? u.retain(n, y.attributes.diff(s.attributes, A.attributes)) : u.push(A).delete(n);
                  break;
              }
              f -= n;
            }
          }), u.chop();
        }, c.prototype.eachLine = function(o, t) {
          t = t || `
`;
          for (var e = y.iterator(this.ops), u = new c(), l = 0; e.hasNext(); ) {
            if (e.peekType() !== "insert") return;
            var a = e.peek(), r = y.length(a) - e.peekLength(), i = typeof a.insert == "string" ? a.insert.indexOf(t, r) - r : -1;
            if (i < 0) u.push(e.next());
            else if (i > 0) u.push(e.next(i));
            else {
              if (o(u, e.next(1).attributes || {}, l) === false) return;
              l += 1, u = new c();
            }
          }
          u.length() > 0 && o(u, {}, l);
        }, c.prototype.transform = function(o, t) {
          if (t = !!t, typeof o == "number") return this.transformPosition(o, t);
          for (var e = y.iterator(this.ops), u = y.iterator(o.ops), l = new c(); e.hasNext() || u.hasNext(); ) if (e.peekType() === "insert" && (t || u.peekType() !== "insert")) l.retain(y.length(e.next()));
          else if (u.peekType() === "insert") l.push(u.next());
          else {
            var a = Math.min(e.peekLength(), u.peekLength()), r = e.next(a), i = u.next(a);
            if (r.delete) continue;
            i.delete ? l.push(i) : l.retain(a, y.attributes.transform(r.attributes, i.attributes, t));
          }
          return l.chop();
        }, c.prototype.transformPosition = function(o, t) {
          t = !!t;
          for (var e = y.iterator(this.ops), u = 0; e.hasNext() && u <= o; ) {
            var l = e.peekLength(), a = e.peekType();
            if (e.next(), a === "delete") {
              o -= Math.min(l, o - u);
              continue;
            } else a === "insert" && (u < o || !t) && (o += l);
            u += l;
          }
          return o;
        }, I.exports = c;
      }), (function(I, _) {
        var v = Object.prototype.hasOwnProperty, P = Object.prototype.toString, w = Object.defineProperty, O = Object.getOwnPropertyDescriptor, y = function(e) {
          return typeof Array.isArray == "function" ? Array.isArray(e) : P.call(e) === "[object Array]";
        }, d = function(e) {
          if (!e || P.call(e) !== "[object Object]") return false;
          var u = v.call(e, "constructor"), l = e.constructor && e.constructor.prototype && v.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !u && !l) return false;
          var a;
          for (a in e) ;
          return typeof a > "u" || v.call(e, a);
        }, c = function(e, u) {
          w && u.name === "__proto__" ? w(e, u.name, { enumerable: true, configurable: true, value: u.newValue, writable: true }) : e[u.name] = u.newValue;
        }, o = function(e, u) {
          if (u === "__proto__") if (v.call(e, u)) {
            if (O) return O(e, u).value;
          } else return;
          return e[u];
        };
        I.exports = function t() {
          var e, u, l, a, r, i, f = arguments[0], n = 1, s = arguments.length, A = false;
          for (typeof f == "boolean" && (A = f, f = arguments[1] || {}, n = 2), (f == null || typeof f != "object" && typeof f != "function") && (f = {}); n < s; ++n) if (e = arguments[n], e != null) for (u in e) l = o(f, u), a = o(e, u), f !== a && (A && a && (d(a) || (r = y(a))) ? (r ? (r = false, i = l && y(l) ? l : []) : i = l && d(l) ? l : {}, c(f, { name: u, newValue: t(A, i, a) })) : typeof a < "u" && c(f, { name: u, newValue: a }));
          return f;
        };
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.BlockEmbed = _.bubbleFormats = void 0;
        var P = /* @__PURE__ */ (function() {
          function h(p, k) {
            for (var T = 0; T < k.length; T++) {
              var L = k[T];
              L.enumerable = L.enumerable || false, L.configurable = true, "value" in L && (L.writable = true), Object.defineProperty(p, L.key, L);
            }
          }
          return function(p, k, T) {
            return k && h(p.prototype, k), T && h(p, T), p;
          };
        })(), w = function h(p, k, T) {
          p === null && (p = Function.prototype);
          var L = Object.getOwnPropertyDescriptor(p, k);
          if (L === void 0) {
            var B = Object.getPrototypeOf(p);
            return B === null ? void 0 : h(B, k, T);
          } else {
            if ("value" in L) return L.value;
            var C = L.get;
            return C === void 0 ? void 0 : C.call(T);
          }
        }, O = v(3), y = f(O), d = v(2), c = f(d), o = v(0), t = f(o), e = v(16), u = f(e), l = v(6), a = f(l), r = v(7), i = f(r);
        function f(h) {
          return h && h.__esModule ? h : { default: h };
        }
        function n(h, p) {
          if (!(h instanceof p)) throw new TypeError("Cannot call a class as a function");
        }
        function s(h, p) {
          if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return p && (typeof p == "object" || typeof p == "function") ? p : h;
        }
        function A(h, p) {
          if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof p);
          h.prototype = Object.create(p && p.prototype, { constructor: { value: h, enumerable: false, writable: true, configurable: true } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(h, p) : h.__proto__ = p);
        }
        var g = 1, b = (function(h) {
          A(p, h);
          function p() {
            return n(this, p), s(this, (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments));
          }
          return P(p, [{ key: "attach", value: function() {
            w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "attach", this).call(this), this.attributes = new t.default.Attributor.Store(this.domNode);
          } }, { key: "delta", value: function() {
            return new c.default().insert(this.value(), (0, y.default)(this.formats(), this.attributes.values()));
          } }, { key: "format", value: function(T, L) {
            var B = t.default.query(T, t.default.Scope.BLOCK_ATTRIBUTE);
            B != null && this.attributes.attribute(B, L);
          } }, { key: "formatAt", value: function(T, L, B, C) {
            this.format(B, C);
          } }, { key: "insertAt", value: function(T, L, B) {
            if (typeof L == "string" && L.endsWith(`
`)) {
              var C = t.default.create(N.blotName);
              this.parent.insertBefore(C, T === 0 ? this : this.next), C.insertAt(0, L.slice(0, -1));
            } else w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "insertAt", this).call(this, T, L, B);
          } }]), p;
        })(t.default.Embed);
        b.scope = t.default.Scope.BLOCK_BLOT;
        var N = (function(h) {
          A(p, h);
          function p(k) {
            n(this, p);
            var T = s(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, k));
            return T.cache = {}, T;
          }
          return P(p, [{ key: "delta", value: function() {
            return this.cache.delta == null && (this.cache.delta = this.descendants(t.default.Leaf).reduce(function(T, L) {
              return L.length() === 0 ? T : T.insert(L.value(), m(L));
            }, new c.default()).insert(`
`, m(this))), this.cache.delta;
          } }, { key: "deleteAt", value: function(T, L) {
            w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "deleteAt", this).call(this, T, L), this.cache = {};
          } }, { key: "formatAt", value: function(T, L, B, C) {
            L <= 0 || (t.default.query(B, t.default.Scope.BLOCK) ? T + L === this.length() && this.format(B, C) : w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "formatAt", this).call(this, T, Math.min(L, this.length() - T - 1), B, C), this.cache = {});
          } }, { key: "insertAt", value: function(T, L, B) {
            if (B != null) return w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "insertAt", this).call(this, T, L, B);
            if (L.length !== 0) {
              var C = L.split(`
`), Z = C.shift();
              Z.length > 0 && (T < this.length() - 1 || this.children.tail == null ? w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "insertAt", this).call(this, Math.min(T, this.length() - 1), Z) : this.children.tail.insertAt(this.children.tail.length(), Z), this.cache = {});
              var M = this;
              C.reduce(function(R, E) {
                return M = M.split(R, true), M.insertAt(0, E), E.length;
              }, T + Z.length);
            }
          } }, { key: "insertBefore", value: function(T, L) {
            var B = this.children.head;
            w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "insertBefore", this).call(this, T, L), B instanceof u.default && B.remove(), this.cache = {};
          } }, { key: "length", value: function() {
            return this.cache.length == null && (this.cache.length = w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "length", this).call(this) + g), this.cache.length;
          } }, { key: "moveChildren", value: function(T, L) {
            w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "moveChildren", this).call(this, T, L), this.cache = {};
          } }, { key: "optimize", value: function(T) {
            w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "optimize", this).call(this, T), this.cache = {};
          } }, { key: "path", value: function(T) {
            return w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "path", this).call(this, T, true);
          } }, { key: "removeChild", value: function(T) {
            w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "removeChild", this).call(this, T), this.cache = {};
          } }, { key: "split", value: function(T) {
            var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            if (L && (T === 0 || T >= this.length() - g)) {
              var B = this.clone();
              return T === 0 ? (this.parent.insertBefore(B, this), this) : (this.parent.insertBefore(B, this.next), B);
            } else {
              var C = w(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "split", this).call(this, T, L);
              return this.cache = {}, C;
            }
          } }]), p;
        })(t.default.Block);
        N.blotName = "block", N.tagName = "P", N.defaultChild = "break", N.allowedChildren = [a.default, t.default.Embed, i.default];
        function m(h) {
          var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return h == null || (typeof h.formats == "function" && (p = (0, y.default)(p, h.formats())), h.parent == null || h.parent.blotName == "scroll" || h.parent.statics.scope !== h.statics.scope) ? p : m(h.parent, p);
        }
        _.bubbleFormats = m, _.BlockEmbed = b, _.default = N;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.overload = _.expandConfig = void 0;
        var P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
          return typeof M;
        } : function(M) {
          return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
        }, w = /* @__PURE__ */ (function() {
          function M(R, E) {
            var S = [], q = true, F = false, D = void 0;
            try {
              for (var x = R[Symbol.iterator](), j; !(q = (j = x.next()).done) && (S.push(j.value), !(E && S.length === E)); q = true) ;
            } catch (U) {
              F = true, D = U;
            } finally {
              try {
                !q && x.return && x.return();
              } finally {
                if (F) throw D;
              }
            }
            return S;
          }
          return function(R, E) {
            if (Array.isArray(R)) return R;
            if (Symbol.iterator in Object(R)) return M(R, E);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), O = /* @__PURE__ */ (function() {
          function M(R, E) {
            for (var S = 0; S < E.length; S++) {
              var q = E[S];
              q.enumerable = q.enumerable || false, q.configurable = true, "value" in q && (q.writable = true), Object.defineProperty(R, q.key, q);
            }
          }
          return function(R, E, S) {
            return E && M(R.prototype, E), S && M(R, S), R;
          };
        })();
        v(50);
        var y = v(2), d = m(y), c = v(14), o = m(c), t = v(8), e = m(t), u = v(9), l = m(u), a = v(0), r = m(a), i = v(15), f = m(i), n = v(3), s = m(n), A = v(10), g = m(A), b = v(34), N = m(b);
        function m(M) {
          return M && M.__esModule ? M : { default: M };
        }
        function h(M, R, E) {
          return R in M ? Object.defineProperty(M, R, { value: E, enumerable: true, configurable: true, writable: true }) : M[R] = E, M;
        }
        function p(M, R) {
          if (!(M instanceof R)) throw new TypeError("Cannot call a class as a function");
        }
        var k = (0, g.default)("quill"), T = (function() {
          O(M, null, [{ key: "debug", value: function(E) {
            E === true && (E = "log"), g.default.level(E);
          } }, { key: "find", value: function(E) {
            return E.__quill || r.default.find(E);
          } }, { key: "import", value: function(E) {
            return this.imports[E] == null && k.error("Cannot import " + E + ". Are you sure it was registered?"), this.imports[E];
          } }, { key: "register", value: function(E, S) {
            var q = this, F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            if (typeof E != "string") {
              var D = E.attrName || E.blotName;
              typeof D == "string" ? this.register("formats/" + D, E, S) : Object.keys(E).forEach(function(x) {
                q.register(x, E[x], S);
              });
            } else this.imports[E] != null && !F && k.warn("Overwriting " + E + " with", S), this.imports[E] = S, (E.startsWith("blots/") || E.startsWith("formats/")) && S.blotName !== "abstract" ? r.default.register(S) : E.startsWith("modules") && typeof S.register == "function" && S.register();
          } }]);
          function M(R) {
            var E = this, S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (p(this, M), this.options = L(R, S), this.container = this.options.container, this.container == null) return k.error("Invalid Quill container", R);
            this.options.debug && M.debug(this.options.debug);
            var q = this.container.innerHTML.trim();
            this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", false), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new e.default(), this.scroll = r.default.create(this.root, { emitter: this.emitter, whitelist: this.options.formats }), this.editor = new o.default(this.scroll), this.selection = new f.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(e.default.events.EDITOR_CHANGE, function(D) {
              D === e.default.events.TEXT_CHANGE && E.root.classList.toggle("ql-blank", E.editor.isBlank());
            }), this.emitter.on(e.default.events.SCROLL_UPDATE, function(D, x) {
              var j = E.selection.lastRange, U = j && j.length === 0 ? j.index : void 0;
              B.call(E, function() {
                return E.editor.update(null, x, U);
              }, D);
            });
            var F = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + q + "<p><br></p></div>");
            this.setContents(F), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
          }
          return O(M, [{ key: "addContainer", value: function(E) {
            var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            if (typeof E == "string") {
              var q = E;
              E = document.createElement("div"), E.classList.add(q);
            }
            return this.container.insertBefore(E, S), E;
          } }, { key: "blur", value: function() {
            this.selection.setRange(null);
          } }, { key: "deleteText", value: function(E, S, q) {
            var F = this, D = C(E, S, q), x = w(D, 4);
            return E = x[0], S = x[1], q = x[3], B.call(this, function() {
              return F.editor.deleteText(E, S);
            }, q, E, -1 * S);
          } }, { key: "disable", value: function() {
            this.enable(false);
          } }, { key: "enable", value: function() {
            var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            this.scroll.enable(E), this.container.classList.toggle("ql-disabled", !E);
          } }, { key: "focus", value: function() {
            var E = this.scrollingContainer.scrollTop;
            this.selection.focus(), this.scrollingContainer.scrollTop = E, this.scrollIntoView();
          } }, { key: "format", value: function(E, S) {
            var q = this, F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.default.sources.API;
            return B.call(this, function() {
              var D = q.getSelection(true), x = new d.default();
              if (D == null) return x;
              if (r.default.query(E, r.default.Scope.BLOCK)) x = q.editor.formatLine(D.index, D.length, h({}, E, S));
              else {
                if (D.length === 0) return q.selection.format(E, S), x;
                x = q.editor.formatText(D.index, D.length, h({}, E, S));
              }
              return q.setSelection(D, e.default.sources.SILENT), x;
            }, F);
          } }, { key: "formatLine", value: function(E, S, q, F, D) {
            var x = this, j = void 0, U = C(E, S, q, F, D), H = w(U, 4);
            return E = H[0], S = H[1], j = H[2], D = H[3], B.call(this, function() {
              return x.editor.formatLine(E, S, j);
            }, D, E, 0);
          } }, { key: "formatText", value: function(E, S, q, F, D) {
            var x = this, j = void 0, U = C(E, S, q, F, D), H = w(U, 4);
            return E = H[0], S = H[1], j = H[2], D = H[3], B.call(this, function() {
              return x.editor.formatText(E, S, j);
            }, D, E, 0);
          } }, { key: "getBounds", value: function(E) {
            var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, q = void 0;
            typeof E == "number" ? q = this.selection.getBounds(E, S) : q = this.selection.getBounds(E.index, E.length);
            var F = this.container.getBoundingClientRect();
            return { bottom: q.bottom - F.top, height: q.height, left: q.left - F.left, right: q.right - F.left, top: q.top - F.top, width: q.width };
          } }, { key: "getContents", value: function() {
            var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - E, q = C(E, S), F = w(q, 2);
            return E = F[0], S = F[1], this.editor.getContents(E, S);
          } }, { key: "getFormat", value: function() {
            var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(true), S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return typeof E == "number" ? this.editor.getFormat(E, S) : this.editor.getFormat(E.index, E.length);
          } }, { key: "getIndex", value: function(E) {
            return E.offset(this.scroll);
          } }, { key: "getLength", value: function() {
            return this.scroll.length();
          } }, { key: "getLeaf", value: function(E) {
            return this.scroll.leaf(E);
          } }, { key: "getLine", value: function(E) {
            return this.scroll.line(E);
          } }, { key: "getLines", value: function() {
            var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
            return typeof E != "number" ? this.scroll.lines(E.index, E.length) : this.scroll.lines(E, S);
          } }, { key: "getModule", value: function(E) {
            return this.theme.modules[E];
          } }, { key: "getSelection", value: function() {
            var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return E && this.focus(), this.update(), this.selection.getRange()[0];
          } }, { key: "getText", value: function() {
            var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - E, q = C(E, S), F = w(q, 2);
            return E = F[0], S = F[1], this.editor.getText(E, S);
          } }, { key: "hasFocus", value: function() {
            return this.selection.hasFocus();
          } }, { key: "insertEmbed", value: function(E, S, q) {
            var F = this, D = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : M.sources.API;
            return B.call(this, function() {
              return F.editor.insertEmbed(E, S, q);
            }, D, E);
          } }, { key: "insertText", value: function(E, S, q, F, D) {
            var x = this, j = void 0, U = C(E, 0, q, F, D), H = w(U, 4);
            return E = H[0], j = H[2], D = H[3], B.call(this, function() {
              return x.editor.insertText(E, S, j);
            }, D, E, S.length);
          } }, { key: "isEnabled", value: function() {
            return !this.container.classList.contains("ql-disabled");
          } }, { key: "off", value: function() {
            return this.emitter.off.apply(this.emitter, arguments);
          } }, { key: "on", value: function() {
            return this.emitter.on.apply(this.emitter, arguments);
          } }, { key: "once", value: function() {
            return this.emitter.once.apply(this.emitter, arguments);
          } }, { key: "pasteHTML", value: function(E, S, q) {
            this.clipboard.dangerouslyPasteHTML(E, S, q);
          } }, { key: "removeFormat", value: function(E, S, q) {
            var F = this, D = C(E, S, q), x = w(D, 4);
            return E = x[0], S = x[1], q = x[3], B.call(this, function() {
              return F.editor.removeFormat(E, S);
            }, q, E);
          } }, { key: "scrollIntoView", value: function() {
            this.selection.scrollIntoView(this.scrollingContainer);
          } }, { key: "setContents", value: function(E) {
            var S = this, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
            return B.call(this, function() {
              E = new d.default(E);
              var F = S.getLength(), D = S.editor.deleteText(0, F), x = S.editor.applyDelta(E), j = x.ops[x.ops.length - 1];
              j != null && typeof j.insert == "string" && j.insert[j.insert.length - 1] === `
` && (S.editor.deleteText(S.getLength() - 1, 1), x.delete(1));
              var U = D.compose(x);
              return U;
            }, q);
          } }, { key: "setSelection", value: function(E, S, q) {
            if (E == null) this.selection.setRange(null, S || M.sources.API);
            else {
              var F = C(E, S, q), D = w(F, 4);
              E = D[0], S = D[1], q = D[3], this.selection.setRange(new i.Range(E, S), q), q !== e.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
            }
          } }, { key: "setText", value: function(E) {
            var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API, q = new d.default().insert(E);
            return this.setContents(q, S);
          } }, { key: "update", value: function() {
            var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.default.sources.USER, S = this.scroll.update(E);
            return this.selection.update(E), S;
          } }, { key: "updateContents", value: function(E) {
            var S = this, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
            return B.call(this, function() {
              return E = new d.default(E), S.editor.applyDelta(E, q);
            }, q, true);
          } }]), M;
        })();
        T.DEFAULTS = { bounds: null, formats: null, modules: {}, placeholder: "", readOnly: false, scrollingContainer: null, strict: true, theme: "default" }, T.events = e.default.events, T.sources = e.default.sources, T.version = "1.3.7", T.imports = { delta: d.default, parchment: r.default, "core/module": l.default, "core/theme": N.default };
        function L(M, R) {
          if (R = (0, s.default)(true, { container: M, modules: { clipboard: true, keyboard: true, history: true } }, R), !R.theme || R.theme === T.DEFAULTS.theme) R.theme = N.default;
          else if (R.theme = T.import("themes/" + R.theme), R.theme == null) throw new Error("Invalid theme " + R.theme + ". Did you register it?");
          var E = (0, s.default)(true, {}, R.theme.DEFAULTS);
          [E, R].forEach(function(F) {
            F.modules = F.modules || {}, Object.keys(F.modules).forEach(function(D) {
              F.modules[D] === true && (F.modules[D] = {});
            });
          });
          var S = Object.keys(E.modules).concat(Object.keys(R.modules)), q = S.reduce(function(F, D) {
            var x = T.import("modules/" + D);
            return x == null ? k.error("Cannot load " + D + " module. Are you sure you registered it?") : F[D] = x.DEFAULTS || {}, F;
          }, {});
          return R.modules != null && R.modules.toolbar && R.modules.toolbar.constructor !== Object && (R.modules.toolbar = { container: R.modules.toolbar }), R = (0, s.default)(true, {}, T.DEFAULTS, { modules: q }, E, R), ["bounds", "container", "scrollingContainer"].forEach(function(F) {
            typeof R[F] == "string" && (R[F] = document.querySelector(R[F]));
          }), R.modules = Object.keys(R.modules).reduce(function(F, D) {
            return R.modules[D] && (F[D] = R.modules[D]), F;
          }, {}), R;
        }
        function B(M, R, E, S) {
          if (this.options.strict && !this.isEnabled() && R === e.default.sources.USER) return new d.default();
          var q = E == null ? null : this.getSelection(), F = this.editor.delta, D = M();
          if (q != null && (E === true && (E = q.index), S == null ? q = Z(q, D, R) : S !== 0 && (q = Z(q, E, S, R)), this.setSelection(q, e.default.sources.SILENT)), D.length() > 0) {
            var x, j = [e.default.events.TEXT_CHANGE, D, F, R];
            if ((x = this.emitter).emit.apply(x, [e.default.events.EDITOR_CHANGE].concat(j)), R !== e.default.sources.SILENT) {
              var U;
              (U = this.emitter).emit.apply(U, j);
            }
          }
          return D;
        }
        function C(M, R, E, S, q) {
          var F = {};
          return typeof M.index == "number" && typeof M.length == "number" ? typeof R != "number" ? (q = S, S = E, E = R, R = M.length, M = M.index) : (R = M.length, M = M.index) : typeof R != "number" && (q = S, S = E, E = R, R = 0), (typeof E > "u" ? "undefined" : P(E)) === "object" ? (F = E, q = S) : typeof E == "string" && (S != null ? F[E] = S : q = E), q = q || e.default.sources.API, [M, R, F, q];
        }
        function Z(M, R, E, S) {
          if (M == null) return null;
          var q = void 0, F = void 0;
          if (R instanceof d.default) {
            var D = [M.index, M.index + M.length].map(function(H) {
              return R.transformPosition(H, S !== e.default.sources.USER);
            }), x = w(D, 2);
            q = x[0], F = x[1];
          } else {
            var j = [M.index, M.index + M.length].map(function(H) {
              return H < R || H === R && S === e.default.sources.USER ? H : E >= 0 ? H + E : Math.max(R, H + E);
            }), U = w(j, 2);
            q = U[0], F = U[1];
          }
          return new i.Range(q, F - q);
        }
        _.expandConfig = L, _.overload = C, _.default = T;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        })(), w = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var s = Object.getPrototypeOf(r);
            return s === null ? void 0 : a(s, i, f);
          } else {
            if ("value" in n) return n.value;
            var A = n.get;
            return A === void 0 ? void 0 : A.call(f);
          }
        }, O = v(7), y = o(O), d = v(0), c = o(d);
        function o(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function t(a, r) {
          if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
        }
        function e(a, r) {
          if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function u(a, r) {
          if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          a.prototype = Object.create(r && r.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }
        var l = (function(a) {
          u(r, a);
          function r() {
            return t(this, r), e(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return P(r, [{ key: "formatAt", value: function(f, n, s, A) {
            if (r.compare(this.statics.blotName, s) < 0 && c.default.query(s, c.default.Scope.BLOT)) {
              var g = this.isolate(f, n);
              A && g.wrap(s, A);
            } else w(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "formatAt", this).call(this, f, n, s, A);
          } }, { key: "optimize", value: function(f) {
            if (w(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "optimize", this).call(this, f), this.parent instanceof r && r.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
              var n = this.parent.isolate(this.offset(), this.length());
              this.moveChildren(n), n.wrap(this);
            }
          } }], [{ key: "compare", value: function(f, n) {
            var s = r.order.indexOf(f), A = r.order.indexOf(n);
            return s >= 0 || A >= 0 ? s - A : f === n ? 0 : f < n ? -1 : 1;
          } }]), r;
        })(c.default.Inline);
        l.allowedChildren = [l, c.default.Embed, y.default], l.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], _.default = l;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(0), w = O(P);
        function O(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function y(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function d(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var o = (function(t) {
          c(e, t);
          function e() {
            return y(this, e), d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        })(w.default.Text);
        _.default = o;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function i(f, n) {
            for (var s = 0; s < n.length; s++) {
              var A = n[s];
              A.enumerable = A.enumerable || false, A.configurable = true, "value" in A && (A.writable = true), Object.defineProperty(f, A.key, A);
            }
          }
          return function(f, n, s) {
            return n && i(f.prototype, n), s && i(f, s), f;
          };
        })(), w = function i(f, n, s) {
          f === null && (f = Function.prototype);
          var A = Object.getOwnPropertyDescriptor(f, n);
          if (A === void 0) {
            var g = Object.getPrototypeOf(f);
            return g === null ? void 0 : i(g, n, s);
          } else {
            if ("value" in A) return A.value;
            var b = A.get;
            return b === void 0 ? void 0 : b.call(s);
          }
        }, O = v(54), y = o(O), d = v(10), c = o(d);
        function o(i) {
          return i && i.__esModule ? i : { default: i };
        }
        function t(i, f) {
          if (!(i instanceof f)) throw new TypeError("Cannot call a class as a function");
        }
        function e(i, f) {
          if (!i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return f && (typeof f == "object" || typeof f == "function") ? f : i;
        }
        function u(i, f) {
          if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof f);
          i.prototype = Object.create(f && f.prototype, { constructor: { value: i, enumerable: false, writable: true, configurable: true } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(i, f) : i.__proto__ = f);
        }
        var l = (0, c.default)("quill:events"), a = ["selectionchange", "mousedown", "mouseup", "click"];
        a.forEach(function(i) {
          document.addEventListener(i, function() {
            for (var f = arguments.length, n = Array(f), s = 0; s < f; s++) n[s] = arguments[s];
            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(A) {
              if (A.__quill && A.__quill.emitter) {
                var g;
                (g = A.__quill.emitter).handleDOM.apply(g, n);
              }
            });
          });
        });
        var r = (function(i) {
          u(f, i);
          function f() {
            t(this, f);
            var n = e(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
            return n.listeners = {}, n.on("error", l.error), n;
          }
          return P(f, [{ key: "emit", value: function() {
            l.log.apply(l, arguments), w(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "emit", this).apply(this, arguments);
          } }, { key: "handleDOM", value: function(s) {
            for (var A = arguments.length, g = Array(A > 1 ? A - 1 : 0), b = 1; b < A; b++) g[b - 1] = arguments[b];
            (this.listeners[s.type] || []).forEach(function(N) {
              var m = N.node, h = N.handler;
              (s.target === m || m.contains(s.target)) && h.apply(void 0, [s].concat(g));
            });
          } }, { key: "listenDOM", value: function(s, A, g) {
            this.listeners[s] || (this.listeners[s] = []), this.listeners[s].push({ node: A, handler: g });
          } }]), f;
        })(y.default);
        r.events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change" }, r.sources = { API: "api", SILENT: "silent", USER: "user" }, _.default = r;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        function P(O, y) {
          if (!(O instanceof y)) throw new TypeError("Cannot call a class as a function");
        }
        var w = function O(y) {
          var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          P(this, O), this.quill = y, this.options = d;
        };
        w.DEFAULTS = {}, _.default = w;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = ["error", "warn", "log", "info"], w = "warn";
        function O(d) {
          if (P.indexOf(d) <= P.indexOf(w)) {
            for (var c, o = arguments.length, t = Array(o > 1 ? o - 1 : 0), e = 1; e < o; e++) t[e - 1] = arguments[e];
            (c = console)[d].apply(c, t);
          }
        }
        function y(d) {
          return P.reduce(function(c, o) {
            return c[o] = O.bind(console, o, d), c;
          }, {});
        }
        O.level = y.level = function(d) {
          w = d;
        }, _.default = y;
      }), (function(I, _, v) {
        var P = Array.prototype.slice, w = v(52), O = v(53), y = I.exports = function(t, e, u) {
          return u || (u = {}), t === e ? true : t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || typeof t != "object" && typeof e != "object" ? u.strict ? t === e : t == e : o(t, e, u);
        };
        function d(t) {
          return t == null;
        }
        function c(t) {
          return !(!t || typeof t != "object" || typeof t.length != "number" || typeof t.copy != "function" || typeof t.slice != "function" || t.length > 0 && typeof t[0] != "number");
        }
        function o(t, e, u) {
          var l, a;
          if (d(t) || d(e) || t.prototype !== e.prototype) return false;
          if (O(t)) return O(e) ? (t = P.call(t), e = P.call(e), y(t, e, u)) : false;
          if (c(t)) {
            if (!c(e) || t.length !== e.length) return false;
            for (l = 0; l < t.length; l++) if (t[l] !== e[l]) return false;
            return true;
          }
          try {
            var r = w(t), i = w(e);
          } catch {
            return false;
          }
          if (r.length != i.length) return false;
          for (r.sort(), i.sort(), l = r.length - 1; l >= 0; l--) if (r[l] != i[l]) return false;
          for (l = r.length - 1; l >= 0; l--) if (a = r[l], !y(t[a], e[a], u)) return false;
          return typeof t == typeof e;
        }
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(1), w = (function() {
          function O(y, d, c) {
            c === void 0 && (c = {}), this.attrName = y, this.keyName = d;
            var o = P.Scope.TYPE & P.Scope.ATTRIBUTE;
            c.scope != null ? this.scope = c.scope & P.Scope.LEVEL | o : this.scope = P.Scope.ATTRIBUTE, c.whitelist != null && (this.whitelist = c.whitelist);
          }
          return O.keys = function(y) {
            return [].map.call(y.attributes, function(d) {
              return d.name;
            });
          }, O.prototype.add = function(y, d) {
            return this.canAdd(y, d) ? (y.setAttribute(this.keyName, d), true) : false;
          }, O.prototype.canAdd = function(y, d) {
            var c = P.query(y, P.Scope.BLOT & (this.scope | P.Scope.TYPE));
            return c == null ? false : this.whitelist == null ? true : typeof d == "string" ? this.whitelist.indexOf(d.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(d) > -1;
          }, O.prototype.remove = function(y) {
            y.removeAttribute(this.keyName);
          }, O.prototype.value = function(y) {
            var d = y.getAttribute(this.keyName);
            return this.canAdd(y, d) && d ? d : "";
          }, O;
        })();
        _.default = w;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.Code = void 0;
        var P = /* @__PURE__ */ (function() {
          function b(N, m) {
            var h = [], p = true, k = false, T = void 0;
            try {
              for (var L = N[Symbol.iterator](), B; !(p = (B = L.next()).done) && (h.push(B.value), !(m && h.length === m)); p = true) ;
            } catch (C) {
              k = true, T = C;
            } finally {
              try {
                !p && L.return && L.return();
              } finally {
                if (k) throw T;
              }
            }
            return h;
          }
          return function(N, m) {
            if (Array.isArray(N)) return N;
            if (Symbol.iterator in Object(N)) return b(N, m);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), w = /* @__PURE__ */ (function() {
          function b(N, m) {
            for (var h = 0; h < m.length; h++) {
              var p = m[h];
              p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(N, p.key, p);
            }
          }
          return function(N, m, h) {
            return m && b(N.prototype, m), h && b(N, h), N;
          };
        })(), O = function b(N, m, h) {
          N === null && (N = Function.prototype);
          var p = Object.getOwnPropertyDescriptor(N, m);
          if (p === void 0) {
            var k = Object.getPrototypeOf(N);
            return k === null ? void 0 : b(k, m, h);
          } else {
            if ("value" in p) return p.value;
            var T = p.get;
            return T === void 0 ? void 0 : T.call(h);
          }
        }, y = v(2), d = i(y), c = v(0), o = i(c), t = v(4), e = i(t), u = v(6), l = i(u), a = v(7), r = i(a);
        function i(b) {
          return b && b.__esModule ? b : { default: b };
        }
        function f(b, N) {
          if (!(b instanceof N)) throw new TypeError("Cannot call a class as a function");
        }
        function n(b, N) {
          if (!b) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return N && (typeof N == "object" || typeof N == "function") ? N : b;
        }
        function s(b, N) {
          if (typeof N != "function" && N !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof N);
          b.prototype = Object.create(N && N.prototype, { constructor: { value: b, enumerable: false, writable: true, configurable: true } }), N && (Object.setPrototypeOf ? Object.setPrototypeOf(b, N) : b.__proto__ = N);
        }
        var A = (function(b) {
          s(N, b);
          function N() {
            return f(this, N), n(this, (N.__proto__ || Object.getPrototypeOf(N)).apply(this, arguments));
          }
          return N;
        })(l.default);
        A.blotName = "code", A.tagName = "CODE";
        var g = (function(b) {
          s(N, b);
          function N() {
            return f(this, N), n(this, (N.__proto__ || Object.getPrototypeOf(N)).apply(this, arguments));
          }
          return w(N, [{ key: "delta", value: function() {
            var h = this, p = this.domNode.textContent;
            return p.endsWith(`
`) && (p = p.slice(0, -1)), p.split(`
`).reduce(function(k, T) {
              return k.insert(T).insert(`
`, h.formats());
            }, new d.default());
          } }, { key: "format", value: function(h, p) {
            if (!(h === this.statics.blotName && p)) {
              var k = this.descendant(r.default, this.length() - 1), T = P(k, 1), L = T[0];
              L == null ? void 0 : L.deleteAt(L.length() - 1, 1), O(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "format", this).call(this, h, p);
            }
          } }, { key: "formatAt", value: function(h, p, k, T) {
            if (p !== 0 && !(o.default.query(k, o.default.Scope.BLOCK) == null || k === this.statics.blotName && T === this.statics.formats(this.domNode))) {
              var L = this.newlineIndex(h);
              if (!(L < 0 || L >= h + p)) {
                var B = this.newlineIndex(h, true) + 1, C = L - B + 1, Z = this.isolate(B, C), M = Z.next;
                Z.format(k, T), M instanceof N && M.formatAt(0, h - B + p - C, k, T);
              }
            }
          } }, { key: "insertAt", value: function(h, p, k) {
            if (k == null) {
              var T = this.descendant(r.default, h), L = P(T, 2), B = L[0], C = L[1];
              B.insertAt(C, p);
            }
          } }, { key: "length", value: function() {
            var h = this.domNode.textContent.length;
            return this.domNode.textContent.endsWith(`
`) ? h : h + 1;
          } }, { key: "newlineIndex", value: function(h) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            if (p) return this.domNode.textContent.slice(0, h).lastIndexOf(`
`);
            var k = this.domNode.textContent.slice(h).indexOf(`
`);
            return k > -1 ? h + k : -1;
          } }, { key: "optimize", value: function(h) {
            this.domNode.textContent.endsWith(`
`) || this.appendChild(o.default.create("text", `
`)), O(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "optimize", this).call(this, h);
            var p = this.next;
            p != null && p.prev === this && p.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === p.statics.formats(p.domNode) && (p.optimize(h), p.moveChildren(this), p.remove());
          } }, { key: "replace", value: function(h) {
            O(N.prototype.__proto__ || Object.getPrototypeOf(N.prototype), "replace", this).call(this, h), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(p) {
              var k = o.default.find(p);
              k == null ? p.parentNode.removeChild(p) : k instanceof o.default.Embed ? k.remove() : k.unwrap();
            });
          } }], [{ key: "create", value: function(h) {
            var p = O(N.__proto__ || Object.getPrototypeOf(N), "create", this).call(this, h);
            return p.setAttribute("spellcheck", false), p;
          } }, { key: "formats", value: function() {
            return true;
          } }]), N;
        })(e.default);
        g.blotName = "code-block", g.tagName = "PRE", g.TAB = "  ", _.Code = A, _.default = g;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
          return typeof M;
        } : function(M) {
          return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
        }, w = /* @__PURE__ */ (function() {
          function M(R, E) {
            var S = [], q = true, F = false, D = void 0;
            try {
              for (var x = R[Symbol.iterator](), j; !(q = (j = x.next()).done) && (S.push(j.value), !(E && S.length === E)); q = true) ;
            } catch (U) {
              F = true, D = U;
            } finally {
              try {
                !q && x.return && x.return();
              } finally {
                if (F) throw D;
              }
            }
            return S;
          }
          return function(R, E) {
            if (Array.isArray(R)) return R;
            if (Symbol.iterator in Object(R)) return M(R, E);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), O = /* @__PURE__ */ (function() {
          function M(R, E) {
            for (var S = 0; S < E.length; S++) {
              var q = E[S];
              q.enumerable = q.enumerable || false, q.configurable = true, "value" in q && (q.writable = true), Object.defineProperty(R, q.key, q);
            }
          }
          return function(R, E, S) {
            return E && M(R.prototype, E), S && M(R, S), R;
          };
        })(), y = v(2), d = p(y), c = v(20), o = p(c), t = v(0), e = p(t), u = v(13), l = p(u), a = v(24), r = p(a), i = v(4), f = p(i), n = v(16), s = p(n), A = v(21), g = p(A), b = v(11), N = p(b), m = v(3), h = p(m);
        function p(M) {
          return M && M.__esModule ? M : { default: M };
        }
        function k(M, R, E) {
          return R in M ? Object.defineProperty(M, R, { value: E, enumerable: true, configurable: true, writable: true }) : M[R] = E, M;
        }
        function T(M, R) {
          if (!(M instanceof R)) throw new TypeError("Cannot call a class as a function");
        }
        var L = /^[ -~]*$/, B = (function() {
          function M(R) {
            T(this, M), this.scroll = R, this.delta = this.getDelta();
          }
          return O(M, [{ key: "applyDelta", value: function(E) {
            var S = this, q = false;
            this.scroll.update();
            var F = this.scroll.length();
            return this.scroll.batchStart(), E = Z(E), E.reduce(function(D, x) {
              var j = x.retain || x.delete || x.insert.length || 1, U = x.attributes || {};
              if (x.insert != null) {
                if (typeof x.insert == "string") {
                  var H = x.insert;
                  H.endsWith(`
`) && q && (q = false, H = H.slice(0, -1)), D >= F && !H.endsWith(`
`) && (q = true), S.scroll.insertAt(D, H);
                  var V = S.scroll.line(D), Y = w(V, 2), X = Y[0], Q = Y[1], nt = (0, h.default)({}, (0, i.bubbleFormats)(X));
                  if (X instanceof f.default) {
                    var rt = X.descendant(e.default.Leaf, Q), at = w(rt, 1), lt = at[0];
                    nt = (0, h.default)(nt, (0, i.bubbleFormats)(lt));
                  }
                  U = o.default.attributes.diff(nt, U) || {};
                } else if (P(x.insert) === "object") {
                  var z = Object.keys(x.insert)[0];
                  if (z == null) return D;
                  S.scroll.insertAt(D, z, x.insert[z]);
                }
                F += j;
              }
              return Object.keys(U).forEach(function(K) {
                S.scroll.formatAt(D, j, K, U[K]);
              }), D + j;
            }, 0), E.reduce(function(D, x) {
              return typeof x.delete == "number" ? (S.scroll.deleteAt(D, x.delete), D) : D + (x.retain || x.insert.length || 1);
            }, 0), this.scroll.batchEnd(), this.update(E);
          } }, { key: "deleteText", value: function(E, S) {
            return this.scroll.deleteAt(E, S), this.update(new d.default().retain(E).delete(S));
          } }, { key: "formatLine", value: function(E, S) {
            var q = this, F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return this.scroll.update(), Object.keys(F).forEach(function(D) {
              if (!(q.scroll.whitelist != null && !q.scroll.whitelist[D])) {
                var x = q.scroll.lines(E, Math.max(S, 1)), j = S;
                x.forEach(function(U) {
                  var H = U.length();
                  if (!(U instanceof l.default)) U.format(D, F[D]);
                  else {
                    var V = E - U.offset(q.scroll), Y = U.newlineIndex(V + j) - V + 1;
                    U.formatAt(V, Y, D, F[D]);
                  }
                  j -= H;
                });
              }
            }), this.scroll.optimize(), this.update(new d.default().retain(E).retain(S, (0, g.default)(F)));
          } }, { key: "formatText", value: function(E, S) {
            var q = this, F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return Object.keys(F).forEach(function(D) {
              q.scroll.formatAt(E, S, D, F[D]);
            }), this.update(new d.default().retain(E).retain(S, (0, g.default)(F)));
          } }, { key: "getContents", value: function(E, S) {
            return this.delta.slice(E, E + S);
          } }, { key: "getDelta", value: function() {
            return this.scroll.lines().reduce(function(E, S) {
              return E.concat(S.delta());
            }, new d.default());
          } }, { key: "getFormat", value: function(E) {
            var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, q = [], F = [];
            S === 0 ? this.scroll.path(E).forEach(function(x) {
              var j = w(x, 1), U = j[0];
              U instanceof f.default ? q.push(U) : U instanceof e.default.Leaf && F.push(U);
            }) : (q = this.scroll.lines(E, S), F = this.scroll.descendants(e.default.Leaf, E, S));
            var D = [q, F].map(function(x) {
              if (x.length === 0) return {};
              for (var j = (0, i.bubbleFormats)(x.shift()); Object.keys(j).length > 0; ) {
                var U = x.shift();
                if (U == null) return j;
                j = C((0, i.bubbleFormats)(U), j);
              }
              return j;
            });
            return h.default.apply(h.default, D);
          } }, { key: "getText", value: function(E, S) {
            return this.getContents(E, S).filter(function(q) {
              return typeof q.insert == "string";
            }).map(function(q) {
              return q.insert;
            }).join("");
          } }, { key: "insertEmbed", value: function(E, S, q) {
            return this.scroll.insertAt(E, S, q), this.update(new d.default().retain(E).insert(k({}, S, q)));
          } }, { key: "insertText", value: function(E, S) {
            var q = this, F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return S = S.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(E, S), Object.keys(F).forEach(function(D) {
              q.scroll.formatAt(E, S.length, D, F[D]);
            }), this.update(new d.default().retain(E).insert(S, (0, g.default)(F)));
          } }, { key: "isBlank", value: function() {
            if (this.scroll.children.length == 0) return true;
            if (this.scroll.children.length > 1) return false;
            var E = this.scroll.children.head;
            return E.statics.blotName !== f.default.blotName || E.children.length > 1 ? false : E.children.head instanceof s.default;
          } }, { key: "removeFormat", value: function(E, S) {
            var q = this.getText(E, S), F = this.scroll.line(E + S), D = w(F, 2), x = D[0], j = D[1], U = 0, H = new d.default();
            x != null && (x instanceof l.default ? U = x.newlineIndex(j) - j + 1 : U = x.length() - j, H = x.delta().slice(j, j + U - 1).insert(`
`));
            var V = this.getContents(E, S + U), Y = V.diff(new d.default().insert(q).concat(H)), X = new d.default().retain(E).concat(Y);
            return this.applyDelta(X);
          } }, { key: "update", value: function(E) {
            var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, F = this.delta;
            if (S.length === 1 && S[0].type === "characterData" && S[0].target.data.match(L) && e.default.find(S[0].target)) {
              var D = e.default.find(S[0].target), x = (0, i.bubbleFormats)(D), j = D.offset(this.scroll), U = S[0].oldValue.replace(r.default.CONTENTS, ""), H = new d.default().insert(U), V = new d.default().insert(D.value()), Y = new d.default().retain(j).concat(H.diff(V, q));
              E = Y.reduce(function(X, Q) {
                return Q.insert ? X.insert(Q.insert, x) : X.push(Q);
              }, new d.default()), this.delta = F.compose(E);
            } else this.delta = this.getDelta(), (!E || !(0, N.default)(F.compose(E), this.delta)) && (E = F.diff(this.delta, q));
            return E;
          } }]), M;
        })();
        function C(M, R) {
          return Object.keys(R).reduce(function(E, S) {
            return M[S] == null || (R[S] === M[S] ? E[S] = R[S] : Array.isArray(R[S]) ? R[S].indexOf(M[S]) < 0 && (E[S] = R[S].concat([M[S]])) : E[S] = [R[S], M[S]]), E;
          }, {});
        }
        function Z(M) {
          return M.reduce(function(R, E) {
            if (E.insert === 1) {
              var S = (0, g.default)(E.attributes);
              return delete S.image, R.insert({ image: E.attributes.image }, S);
            }
            if (E.attributes != null && (E.attributes.list === true || E.attributes.bullet === true) && (E = (0, g.default)(E), E.attributes.list ? E.attributes.list = "ordered" : (E.attributes.list = "bullet", delete E.attributes.bullet)), typeof E.insert == "string") {
              var q = E.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
              return R.insert(q, E.attributes);
            }
            return R.push(E);
          }, new d.default());
        }
        _.default = B;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.Range = void 0;
        var P = /* @__PURE__ */ (function() {
          function b(N, m) {
            var h = [], p = true, k = false, T = void 0;
            try {
              for (var L = N[Symbol.iterator](), B; !(p = (B = L.next()).done) && (h.push(B.value), !(m && h.length === m)); p = true) ;
            } catch (C) {
              k = true, T = C;
            } finally {
              try {
                !p && L.return && L.return();
              } finally {
                if (k) throw T;
              }
            }
            return h;
          }
          return function(N, m) {
            if (Array.isArray(N)) return N;
            if (Symbol.iterator in Object(N)) return b(N, m);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), w = /* @__PURE__ */ (function() {
          function b(N, m) {
            for (var h = 0; h < m.length; h++) {
              var p = m[h];
              p.enumerable = p.enumerable || false, p.configurable = true, "value" in p && (p.writable = true), Object.defineProperty(N, p.key, p);
            }
          }
          return function(N, m, h) {
            return m && b(N.prototype, m), h && b(N, h), N;
          };
        })(), O = v(0), y = r(O), d = v(21), c = r(d), o = v(11), t = r(o), e = v(8), u = r(e), l = v(10), a = r(l);
        function r(b) {
          return b && b.__esModule ? b : { default: b };
        }
        function i(b) {
          if (Array.isArray(b)) {
            for (var N = 0, m = Array(b.length); N < b.length; N++) m[N] = b[N];
            return m;
          } else return Array.from(b);
        }
        function f(b, N) {
          if (!(b instanceof N)) throw new TypeError("Cannot call a class as a function");
        }
        var n = (0, a.default)("quill:selection"), s = function b(N) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          f(this, b), this.index = N, this.length = m;
        }, A = (function() {
          function b(N, m) {
            var h = this;
            f(this, b), this.emitter = m, this.scroll = N, this.composing = false, this.mouseDown = false, this.root = this.scroll.domNode, this.cursor = y.default.create("cursor", this), this.lastRange = this.savedRange = new s(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
              h.mouseDown || setTimeout(h.update.bind(h, u.default.sources.USER), 1);
            }), this.emitter.on(u.default.events.EDITOR_CHANGE, function(p, k) {
              p === u.default.events.TEXT_CHANGE && k.length() > 0 && h.update(u.default.sources.SILENT);
            }), this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE, function() {
              if (h.hasFocus()) {
                var p = h.getNativeRange();
                p != null && p.start.node !== h.cursor.textNode && h.emitter.once(u.default.events.SCROLL_UPDATE, function() {
                  try {
                    h.setNativeRange(p.start.node, p.start.offset, p.end.node, p.end.offset);
                  } catch {
                  }
                });
              }
            }), this.emitter.on(u.default.events.SCROLL_OPTIMIZE, function(p, k) {
              if (k.range) {
                var T = k.range, L = T.startNode, B = T.startOffset, C = T.endNode, Z = T.endOffset;
                h.setNativeRange(L, B, C, Z);
              }
            }), this.update(u.default.sources.SILENT);
          }
          return w(b, [{ key: "handleComposition", value: function() {
            var m = this;
            this.root.addEventListener("compositionstart", function() {
              m.composing = true;
            }), this.root.addEventListener("compositionend", function() {
              if (m.composing = false, m.cursor.parent) {
                var h = m.cursor.restore();
                if (!h) return;
                setTimeout(function() {
                  m.setNativeRange(h.startNode, h.startOffset, h.endNode, h.endOffset);
                }, 1);
              }
            });
          } }, { key: "handleDragging", value: function() {
            var m = this;
            this.emitter.listenDOM("mousedown", document.body, function() {
              m.mouseDown = true;
            }), this.emitter.listenDOM("mouseup", document.body, function() {
              m.mouseDown = false, m.update(u.default.sources.USER);
            });
          } }, { key: "focus", value: function() {
            this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
          } }, { key: "format", value: function(m, h) {
            if (!(this.scroll.whitelist != null && !this.scroll.whitelist[m])) {
              this.scroll.update();
              var p = this.getNativeRange();
              if (!(p == null || !p.native.collapsed || y.default.query(m, y.default.Scope.BLOCK))) {
                if (p.start.node !== this.cursor.textNode) {
                  var k = y.default.find(p.start.node, false);
                  if (k == null) return;
                  if (k instanceof y.default.Leaf) {
                    var T = k.split(p.start.offset);
                    k.parent.insertBefore(this.cursor, T);
                  } else k.insertBefore(this.cursor, p.start.node);
                  this.cursor.attach();
                }
                this.cursor.format(m, h), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
              }
            }
          } }, { key: "getBounds", value: function(m) {
            var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, p = this.scroll.length();
            m = Math.min(m, p - 1), h = Math.min(m + h, p - 1) - m;
            var k = void 0, T = this.scroll.leaf(m), L = P(T, 2), B = L[0], C = L[1];
            if (B == null) return null;
            var Z = B.position(C, true), M = P(Z, 2);
            k = M[0], C = M[1];
            var R = document.createRange();
            if (h > 0) {
              R.setStart(k, C);
              var E = this.scroll.leaf(m + h), S = P(E, 2);
              if (B = S[0], C = S[1], B == null) return null;
              var q = B.position(C, true), F = P(q, 2);
              return k = F[0], C = F[1], R.setEnd(k, C), R.getBoundingClientRect();
            } else {
              var D = "left", x = void 0;
              return k instanceof Text ? (C < k.data.length ? (R.setStart(k, C), R.setEnd(k, C + 1)) : (R.setStart(k, C - 1), R.setEnd(k, C), D = "right"), x = R.getBoundingClientRect()) : (x = B.domNode.getBoundingClientRect(), C > 0 && (D = "right")), { bottom: x.top + x.height, height: x.height, left: x[D], right: x[D], top: x.top, width: 0 };
            }
          } }, { key: "getNativeRange", value: function() {
            var m = document.getSelection();
            if (m == null || m.rangeCount <= 0) return null;
            var h = m.getRangeAt(0);
            if (h == null) return null;
            var p = this.normalizeNative(h);
            return n.info("getNativeRange", p), p;
          } }, { key: "getRange", value: function() {
            var m = this.getNativeRange();
            if (m == null) return [null, null];
            var h = this.normalizedToRange(m);
            return [h, m];
          } }, { key: "hasFocus", value: function() {
            return document.activeElement === this.root;
          } }, { key: "normalizedToRange", value: function(m) {
            var h = this, p = [[m.start.node, m.start.offset]];
            m.native.collapsed || p.push([m.end.node, m.end.offset]);
            var k = p.map(function(B) {
              var C = P(B, 2), Z = C[0], M = C[1], R = y.default.find(Z, true), E = R.offset(h.scroll);
              return M === 0 ? E : R instanceof y.default.Container ? E + R.length() : E + R.index(Z, M);
            }), T = Math.min(Math.max.apply(Math, i(k)), this.scroll.length() - 1), L = Math.min.apply(Math, [T].concat(i(k)));
            return new s(L, T - L);
          } }, { key: "normalizeNative", value: function(m) {
            if (!g(this.root, m.startContainer) || !m.collapsed && !g(this.root, m.endContainer)) return null;
            var h = { start: { node: m.startContainer, offset: m.startOffset }, end: { node: m.endContainer, offset: m.endOffset }, native: m };
            return [h.start, h.end].forEach(function(p) {
              for (var k = p.node, T = p.offset; !(k instanceof Text) && k.childNodes.length > 0; ) if (k.childNodes.length > T) k = k.childNodes[T], T = 0;
              else if (k.childNodes.length === T) k = k.lastChild, T = k instanceof Text ? k.data.length : k.childNodes.length + 1;
              else break;
              p.node = k, p.offset = T;
            }), h;
          } }, { key: "rangeToNative", value: function(m) {
            var h = this, p = m.collapsed ? [m.index] : [m.index, m.index + m.length], k = [], T = this.scroll.length();
            return p.forEach(function(L, B) {
              L = Math.min(T - 1, L);
              var C = void 0, Z = h.scroll.leaf(L), M = P(Z, 2), R = M[0], E = M[1], S = R.position(E, B !== 0), q = P(S, 2);
              C = q[0], E = q[1], k.push(C, E);
            }), k.length < 2 && (k = k.concat(k)), k;
          } }, { key: "scrollIntoView", value: function(m) {
            var h = this.lastRange;
            if (h != null) {
              var p = this.getBounds(h.index, h.length);
              if (p != null) {
                var k = this.scroll.length() - 1, T = this.scroll.line(Math.min(h.index, k)), L = P(T, 1), B = L[0], C = B;
                if (h.length > 0) {
                  var Z = this.scroll.line(Math.min(h.index + h.length, k)), M = P(Z, 1);
                  C = M[0];
                }
                if (!(B == null || C == null)) {
                  var R = m.getBoundingClientRect();
                  p.top < R.top ? m.scrollTop -= R.top - p.top : p.bottom > R.bottom && (m.scrollTop += p.bottom - R.bottom);
                }
              }
            }
          } }, { key: "setNativeRange", value: function(m, h) {
            var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : m, k = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : h, T = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
            if (n.info("setNativeRange", m, h, p, k), !(m != null && (this.root.parentNode == null || m.parentNode == null || p.parentNode == null))) {
              var L = document.getSelection();
              if (L != null) if (m != null) {
                this.hasFocus() || this.root.focus();
                var B = (this.getNativeRange() || {}).native;
                if (B == null || T || m !== B.startContainer || h !== B.startOffset || p !== B.endContainer || k !== B.endOffset) {
                  m.tagName == "BR" && (h = [].indexOf.call(m.parentNode.childNodes, m), m = m.parentNode), p.tagName == "BR" && (k = [].indexOf.call(p.parentNode.childNodes, p), p = p.parentNode);
                  var C = document.createRange();
                  C.setStart(m, h), C.setEnd(p, k), L.removeAllRanges(), L.addRange(C);
                }
              } else L.removeAllRanges(), this.root.blur(), document.body.focus();
            }
          } }, { key: "setRange", value: function(m) {
            var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.default.sources.API;
            if (typeof h == "string" && (p = h, h = false), n.info("setRange", m), m != null) {
              var k = this.rangeToNative(m);
              this.setNativeRange.apply(this, i(k).concat([h]));
            } else this.setNativeRange(null);
            this.update(p);
          } }, { key: "update", value: function() {
            var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.default.sources.USER, h = this.lastRange, p = this.getRange(), k = P(p, 2), T = k[0], L = k[1];
            if (this.lastRange = T, this.lastRange != null && (this.savedRange = this.lastRange), !(0, t.default)(h, this.lastRange)) {
              var B;
              !this.composing && L != null && L.native.collapsed && L.start.node !== this.cursor.textNode && this.cursor.restore();
              var C = [u.default.events.SELECTION_CHANGE, (0, c.default)(this.lastRange), (0, c.default)(h), m];
              if ((B = this.emitter).emit.apply(B, [u.default.events.EDITOR_CHANGE].concat(C)), m !== u.default.sources.SILENT) {
                var Z;
                (Z = this.emitter).emit.apply(Z, C);
              }
            }
          } }]), b;
        })();
        function g(b, N) {
          try {
            N.parentNode;
          } catch {
            return false;
          }
          return N instanceof Text && (N = N.parentNode), b.contains(N);
        }
        _.Range = s, _.default = A;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function u(l, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(l, i.key, i);
            }
          }
          return function(l, a, r) {
            return a && u(l.prototype, a), r && u(l, r), l;
          };
        })(), w = function u(l, a, r) {
          l === null && (l = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(l, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(l);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i) return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, O = v(0), y = d(O);
        function d(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l)) throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
          u.prototype = Object.create(l && l.prototype, { constructor: { value: u, enumerable: false, writable: true, configurable: true } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : u.__proto__ = l);
        }
        var e = (function(u) {
          t(l, u);
          function l() {
            return c(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
          }
          return P(l, [{ key: "insertInto", value: function(r, i) {
            r.children.length === 0 ? w(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "insertInto", this).call(this, r, i) : this.remove();
          } }, { key: "length", value: function() {
            return 0;
          } }, { key: "value", value: function() {
            return "";
          } }], [{ key: "value", value: function() {
          } }]), l;
        })(y.default.Embed);
        e.blotName = "break", e.tagName = "BR", _.default = e;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            o(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(44), O = v(30), y = v(1), d = (function(o) {
          P(t, o);
          function t(e) {
            var u = o.call(this, e) || this;
            return u.build(), u;
          }
          return t.prototype.appendChild = function(e) {
            this.insertBefore(e);
          }, t.prototype.attach = function() {
            o.prototype.attach.call(this), this.children.forEach(function(e) {
              e.attach();
            });
          }, t.prototype.build = function() {
            var e = this;
            this.children = new w.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(u) {
              try {
                var l = c(u);
                e.insertBefore(l, e.children.head || void 0);
              } catch (a) {
                if (a instanceof y.ParchmentError) return;
                throw a;
              }
            });
          }, t.prototype.deleteAt = function(e, u) {
            if (e === 0 && u === this.length()) return this.remove();
            this.children.forEachAt(e, u, function(l, a, r) {
              l.deleteAt(a, r);
            });
          }, t.prototype.descendant = function(e, u) {
            var l = this.children.find(u), a = l[0], r = l[1];
            return e.blotName == null && e(a) || e.blotName != null && a instanceof e ? [a, r] : a instanceof t ? a.descendant(e, r) : [null, -1];
          }, t.prototype.descendants = function(e, u, l) {
            u === void 0 && (u = 0), l === void 0 && (l = Number.MAX_VALUE);
            var a = [], r = l;
            return this.children.forEachAt(u, l, function(i, f, n) {
              (e.blotName == null && e(i) || e.blotName != null && i instanceof e) && a.push(i), i instanceof t && (a = a.concat(i.descendants(e, f, r))), r -= n;
            }), a;
          }, t.prototype.detach = function() {
            this.children.forEach(function(e) {
              e.detach();
            }), o.prototype.detach.call(this);
          }, t.prototype.formatAt = function(e, u, l, a) {
            this.children.forEachAt(e, u, function(r, i, f) {
              r.formatAt(i, f, l, a);
            });
          }, t.prototype.insertAt = function(e, u, l) {
            var a = this.children.find(e), r = a[0], i = a[1];
            if (r) r.insertAt(i, u, l);
            else {
              var f = l == null ? y.create("text", u) : y.create(u, l);
              this.appendChild(f);
            }
          }, t.prototype.insertBefore = function(e, u) {
            if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(l) {
              return e instanceof l;
            })) throw new y.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
            e.insertInto(this, u);
          }, t.prototype.length = function() {
            return this.children.reduce(function(e, u) {
              return e + u.length();
            }, 0);
          }, t.prototype.moveChildren = function(e, u) {
            this.children.forEach(function(l) {
              e.insertBefore(l, u);
            });
          }, t.prototype.optimize = function(e) {
            if (o.prototype.optimize.call(this, e), this.children.length === 0) if (this.statics.defaultChild != null) {
              var u = y.create(this.statics.defaultChild);
              this.appendChild(u), u.optimize(e);
            } else this.remove();
          }, t.prototype.path = function(e, u) {
            u === void 0 && (u = false);
            var l = this.children.find(e, u), a = l[0], r = l[1], i = [[this, e]];
            return a instanceof t ? i.concat(a.path(r, u)) : (a != null && i.push([a, r]), i);
          }, t.prototype.removeChild = function(e) {
            this.children.remove(e);
          }, t.prototype.replace = function(e) {
            e instanceof t && e.moveChildren(this), o.prototype.replace.call(this, e);
          }, t.prototype.split = function(e, u) {
            if (u === void 0 && (u = false), !u) {
              if (e === 0) return this;
              if (e === this.length()) return this.next;
            }
            var l = this.clone();
            return this.parent.insertBefore(l, this.next), this.children.forEachAt(e, this.length(), function(a, r, i) {
              a = a.split(r, u), l.appendChild(a);
            }), l;
          }, t.prototype.unwrap = function() {
            this.moveChildren(this.parent, this.next), this.remove();
          }, t.prototype.update = function(e, u) {
            var l = this, a = [], r = [];
            e.forEach(function(i) {
              i.target === l.domNode && i.type === "childList" && (a.push.apply(a, i.addedNodes), r.push.apply(r, i.removedNodes));
            }), r.forEach(function(i) {
              if (!(i.parentNode != null && i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                var f = y.find(i);
                f != null && (f.domNode.parentNode == null || f.domNode.parentNode === l.domNode) && f.detach();
              }
            }), a.filter(function(i) {
              return i.parentNode == l.domNode;
            }).sort(function(i, f) {
              return i === f ? 0 : i.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
            }).forEach(function(i) {
              var f = null;
              i.nextSibling != null && (f = y.find(i.nextSibling));
              var n = c(i);
              (n.next != f || n.next == null) && (n.parent != null && n.parent.removeChild(l), l.insertBefore(n, f || void 0));
            });
          }, t;
        })(O.default);
        function c(o) {
          var t = y.find(o);
          if (t == null) try {
            t = y.create(o);
          } catch {
            t = y.create(y.Scope.INLINE), [].slice.call(o.childNodes).forEach(function(u) {
              t.domNode.appendChild(u);
            }), o.parentNode && o.parentNode.replaceChild(t.domNode, o), t.attach();
          }
          return t;
        }
        _.default = d;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            o(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(12), O = v(31), y = v(17), d = v(1), c = (function(o) {
          P(t, o);
          function t(e) {
            var u = o.call(this, e) || this;
            return u.attributes = new O.default(u.domNode), u;
          }
          return t.formats = function(e) {
            if (typeof this.tagName == "string") return true;
            if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
          }, t.prototype.format = function(e, u) {
            var l = d.query(e);
            l instanceof w.default ? this.attributes.attribute(l, u) : u && l != null && (e !== this.statics.blotName || this.formats()[e] !== u) && this.replaceWith(e, u);
          }, t.prototype.formats = function() {
            var e = this.attributes.values(), u = this.statics.formats(this.domNode);
            return u != null && (e[this.statics.blotName] = u), e;
          }, t.prototype.replaceWith = function(e, u) {
            var l = o.prototype.replaceWith.call(this, e, u);
            return this.attributes.copy(l), l;
          }, t.prototype.update = function(e, u) {
            var l = this;
            o.prototype.update.call(this, e, u), e.some(function(a) {
              return a.target === l.domNode && a.type === "attributes";
            }) && this.attributes.build();
          }, t.prototype.wrap = function(e, u) {
            var l = o.prototype.wrap.call(this, e, u);
            return l instanceof t && l.statics.scope === this.statics.scope && this.attributes.move(l), l;
          }, t;
        })(y.default);
        _.default = c;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
            c.__proto__ = o;
          } || function(c, o) {
            for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
          };
          return function(c, o) {
            d(c, o);
            function t() {
              this.constructor = c;
            }
            c.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(30), O = v(1), y = (function(d) {
          P(c, d);
          function c() {
            return d !== null && d.apply(this, arguments) || this;
          }
          return c.value = function(o) {
            return true;
          }, c.prototype.index = function(o, t) {
            return this.domNode === o || this.domNode.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
          }, c.prototype.position = function(o, t) {
            var e = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
            return o > 0 && (e += 1), [this.parent.domNode, e];
          }, c.prototype.value = function() {
            var o;
            return o = {}, o[this.statics.blotName] = this.statics.value(this.domNode) || true, o;
          }, c.scope = O.Scope.INLINE_BLOT, c;
        })(w.default);
        _.default = y;
      }), (function(I, _, v) {
        var P = v(11), w = v(3), O = { attributes: { compose: function(d, c, o) {
          typeof d != "object" && (d = {}), typeof c != "object" && (c = {});
          var t = w(true, {}, c);
          o || (t = Object.keys(t).reduce(function(u, l) {
            return t[l] != null && (u[l] = t[l]), u;
          }, {}));
          for (var e in d) d[e] !== void 0 && c[e] === void 0 && (t[e] = d[e]);
          return Object.keys(t).length > 0 ? t : void 0;
        }, diff: function(d, c) {
          typeof d != "object" && (d = {}), typeof c != "object" && (c = {});
          var o = Object.keys(d).concat(Object.keys(c)).reduce(function(t, e) {
            return P(d[e], c[e]) || (t[e] = c[e] === void 0 ? null : c[e]), t;
          }, {});
          return Object.keys(o).length > 0 ? o : void 0;
        }, transform: function(d, c, o) {
          if (typeof d != "object") return c;
          if (typeof c == "object") {
            if (!o) return c;
            var t = Object.keys(c).reduce(function(e, u) {
              return d[u] === void 0 && (e[u] = c[u]), e;
            }, {});
            return Object.keys(t).length > 0 ? t : void 0;
          }
        } }, iterator: function(d) {
          return new y(d);
        }, length: function(d) {
          return typeof d.delete == "number" ? d.delete : typeof d.retain == "number" ? d.retain : typeof d.insert == "string" ? d.insert.length : 1;
        } };
        function y(d) {
          this.ops = d, this.index = 0, this.offset = 0;
        }
        y.prototype.hasNext = function() {
          return this.peekLength() < 1 / 0;
        }, y.prototype.next = function(d) {
          d || (d = 1 / 0);
          var c = this.ops[this.index];
          if (c) {
            var o = this.offset, t = O.length(c);
            if (d >= t - o ? (d = t - o, this.index += 1, this.offset = 0) : this.offset += d, typeof c.delete == "number") return { delete: d };
            var e = {};
            return c.attributes && (e.attributes = c.attributes), typeof c.retain == "number" ? e.retain = d : typeof c.insert == "string" ? e.insert = c.insert.substr(o, d) : e.insert = c.insert, e;
          } else return { retain: 1 / 0 };
        }, y.prototype.peek = function() {
          return this.ops[this.index];
        }, y.prototype.peekLength = function() {
          return this.ops[this.index] ? O.length(this.ops[this.index]) - this.offset : 1 / 0;
        }, y.prototype.peekType = function() {
          return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
        }, y.prototype.rest = function() {
          if (this.hasNext()) {
            if (this.offset === 0) return this.ops.slice(this.index);
            var d = this.offset, c = this.index, o = this.next(), t = this.ops.slice(this.index);
            return this.offset = d, this.index = c, [o].concat(t);
          } else return [];
        }, I.exports = O;
      }), (function(I, _) {
        var v = (function() {
          function P(l, a) {
            return a != null && l instanceof a;
          }
          var w;
          try {
            w = Map;
          } catch {
            w = function() {
            };
          }
          var O;
          try {
            O = Set;
          } catch {
            O = function() {
            };
          }
          var y;
          try {
            y = Promise;
          } catch {
            y = function() {
            };
          }
          function d(l, a, r, i, f) {
            typeof a == "object" && (r = a.depth, i = a.prototype, f = a.includeNonEnumerable, a = a.circular);
            var n = [], s = [], A = typeof Buffer < "u";
            typeof a > "u" && (a = true), typeof r > "u" && (r = 1 / 0);
            function g(b, N) {
              if (b === null) return null;
              if (N === 0) return b;
              var m, h;
              if (typeof b != "object") return b;
              if (P(b, w)) m = new w();
              else if (P(b, O)) m = new O();
              else if (P(b, y)) m = new y(function(R, E) {
                b.then(function(S) {
                  R(g(S, N - 1));
                }, function(S) {
                  E(g(S, N - 1));
                });
              });
              else if (d.__isArray(b)) m = [];
              else if (d.__isRegExp(b)) m = new RegExp(b.source, u(b)), b.lastIndex && (m.lastIndex = b.lastIndex);
              else if (d.__isDate(b)) m = new Date(b.getTime());
              else {
                if (A && Buffer.isBuffer(b)) return Buffer.allocUnsafe ? m = Buffer.allocUnsafe(b.length) : m = new Buffer(b.length), b.copy(m), m;
                P(b, Error) ? m = Object.create(b) : typeof i > "u" ? (h = Object.getPrototypeOf(b), m = Object.create(h)) : (m = Object.create(i), h = i);
              }
              if (a) {
                var p = n.indexOf(b);
                if (p != -1) return s[p];
                n.push(b), s.push(m);
              }
              P(b, w) && b.forEach(function(R, E) {
                var S = g(E, N - 1), q = g(R, N - 1);
                m.set(S, q);
              }), P(b, O) && b.forEach(function(R) {
                var E = g(R, N - 1);
                m.add(E);
              });
              for (var k in b) {
                var T;
                h && (T = Object.getOwnPropertyDescriptor(h, k)), !(T && T.set == null) && (m[k] = g(b[k], N - 1));
              }
              if (Object.getOwnPropertySymbols) for (var L = Object.getOwnPropertySymbols(b), k = 0; k < L.length; k++) {
                var B = L[k], C = Object.getOwnPropertyDescriptor(b, B);
                C && !C.enumerable && !f || (m[B] = g(b[B], N - 1), C.enumerable || Object.defineProperty(m, B, { enumerable: false }));
              }
              if (f) for (var Z = Object.getOwnPropertyNames(b), k = 0; k < Z.length; k++) {
                var M = Z[k], C = Object.getOwnPropertyDescriptor(b, M);
                C && C.enumerable || (m[M] = g(b[M], N - 1), Object.defineProperty(m, M, { enumerable: false }));
              }
              return m;
            }
            return g(l, r);
          }
          d.clonePrototype = function(a) {
            if (a === null) return null;
            var r = function() {
            };
            return r.prototype = a, new r();
          };
          function c(l) {
            return Object.prototype.toString.call(l);
          }
          d.__objToStr = c;
          function o(l) {
            return typeof l == "object" && c(l) === "[object Date]";
          }
          d.__isDate = o;
          function t(l) {
            return typeof l == "object" && c(l) === "[object Array]";
          }
          d.__isArray = t;
          function e(l) {
            return typeof l == "object" && c(l) === "[object RegExp]";
          }
          d.__isRegExp = e;
          function u(l) {
            var a = "";
            return l.global && (a += "g"), l.ignoreCase && (a += "i"), l.multiline && (a += "m"), a;
          }
          return d.__getRegExpFlags = u, d;
        })();
        typeof I == "object" && I.exports && (I.exports = v);
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function m(h, p) {
            var k = [], T = true, L = false, B = void 0;
            try {
              for (var C = h[Symbol.iterator](), Z; !(T = (Z = C.next()).done) && (k.push(Z.value), !(p && k.length === p)); T = true) ;
            } catch (M) {
              L = true, B = M;
            } finally {
              try {
                !T && C.return && C.return();
              } finally {
                if (L) throw B;
              }
            }
            return k;
          }
          return function(h, p) {
            if (Array.isArray(h)) return h;
            if (Symbol.iterator in Object(h)) return m(h, p);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), w = /* @__PURE__ */ (function() {
          function m(h, p) {
            for (var k = 0; k < p.length; k++) {
              var T = p[k];
              T.enumerable = T.enumerable || false, T.configurable = true, "value" in T && (T.writable = true), Object.defineProperty(h, T.key, T);
            }
          }
          return function(h, p, k) {
            return p && m(h.prototype, p), k && m(h, k), h;
          };
        })(), O = function m(h, p, k) {
          h === null && (h = Function.prototype);
          var T = Object.getOwnPropertyDescriptor(h, p);
          if (T === void 0) {
            var L = Object.getPrototypeOf(h);
            return L === null ? void 0 : m(L, p, k);
          } else {
            if ("value" in T) return T.value;
            var B = T.get;
            return B === void 0 ? void 0 : B.call(k);
          }
        }, y = v(0), d = n(y), c = v(8), o = n(c), t = v(4), e = n(t), u = v(16), l = n(u), a = v(13), r = n(a), i = v(25), f = n(i);
        function n(m) {
          return m && m.__esModule ? m : { default: m };
        }
        function s(m, h) {
          if (!(m instanceof h)) throw new TypeError("Cannot call a class as a function");
        }
        function A(m, h) {
          if (!m) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return h && (typeof h == "object" || typeof h == "function") ? h : m;
        }
        function g(m, h) {
          if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
          m.prototype = Object.create(h && h.prototype, { constructor: { value: m, enumerable: false, writable: true, configurable: true } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(m, h) : m.__proto__ = h);
        }
        function b(m) {
          return m instanceof e.default || m instanceof t.BlockEmbed;
        }
        var N = (function(m) {
          g(h, m);
          function h(p, k) {
            s(this, h);
            var T = A(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, p));
            return T.emitter = k.emitter, Array.isArray(k.whitelist) && (T.whitelist = k.whitelist.reduce(function(L, B) {
              return L[B] = true, L;
            }, {})), T.domNode.addEventListener("DOMNodeInserted", function() {
            }), T.optimize(), T.enable(), T;
          }
          return w(h, [{ key: "batchStart", value: function() {
            this.batch = true;
          } }, { key: "batchEnd", value: function() {
            this.batch = false, this.optimize();
          } }, { key: "deleteAt", value: function(k, T) {
            var L = this.line(k), B = P(L, 2), C = B[0], Z = B[1], M = this.line(k + T), R = P(M, 1), E = R[0];
            if (O(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "deleteAt", this).call(this, k, T), E != null && C !== E && Z > 0) {
              if (C instanceof t.BlockEmbed || E instanceof t.BlockEmbed) {
                this.optimize();
                return;
              }
              if (C instanceof r.default) {
                var S = C.newlineIndex(C.length(), true);
                if (S > -1 && (C = C.split(S + 1), C === E)) {
                  this.optimize();
                  return;
                }
              } else if (E instanceof r.default) {
                var q = E.newlineIndex(0);
                q > -1 && E.split(q + 1);
              }
              var F = E.children.head instanceof l.default ? null : E.children.head;
              C.moveChildren(E, F), C.remove();
            }
            this.optimize();
          } }, { key: "enable", value: function() {
            var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            this.domNode.setAttribute("contenteditable", k);
          } }, { key: "formatAt", value: function(k, T, L, B) {
            this.whitelist != null && !this.whitelist[L] || (O(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "formatAt", this).call(this, k, T, L, B), this.optimize());
          } }, { key: "insertAt", value: function(k, T, L) {
            if (!(L != null && this.whitelist != null && !this.whitelist[T])) {
              if (k >= this.length()) if (L == null || d.default.query(T, d.default.Scope.BLOCK) == null) {
                var B = d.default.create(this.statics.defaultChild);
                this.appendChild(B), L == null && T.endsWith(`
`) && (T = T.slice(0, -1)), B.insertAt(0, T, L);
              } else {
                var C = d.default.create(T, L);
                this.appendChild(C);
              }
              else O(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "insertAt", this).call(this, k, T, L);
              this.optimize();
            }
          } }, { key: "insertBefore", value: function(k, T) {
            if (k.statics.scope === d.default.Scope.INLINE_BLOT) {
              var L = d.default.create(this.statics.defaultChild);
              L.appendChild(k), k = L;
            }
            O(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "insertBefore", this).call(this, k, T);
          } }, { key: "leaf", value: function(k) {
            return this.path(k).pop() || [null, -1];
          } }, { key: "line", value: function(k) {
            return k === this.length() ? this.line(k - 1) : this.descendant(b, k);
          } }, { key: "lines", value: function() {
            var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, L = function B(C, Z, M) {
              var R = [], E = M;
              return C.children.forEachAt(Z, M, function(S, q, F) {
                b(S) ? R.push(S) : S instanceof d.default.Container && (R = R.concat(B(S, q, E))), E -= F;
              }), R;
            };
            return L(this, k, T);
          } }, { key: "optimize", value: function() {
            var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.batch !== true && (O(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "optimize", this).call(this, k, T), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_OPTIMIZE, k, T));
          } }, { key: "path", value: function(k) {
            return O(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "path", this).call(this, k).slice(1);
          } }, { key: "update", value: function(k) {
            if (this.batch !== true) {
              var T = o.default.sources.USER;
              typeof k == "string" && (T = k), Array.isArray(k) || (k = this.observer.takeRecords()), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_BEFORE_UPDATE, T, k), O(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "update", this).call(this, k.concat([])), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_UPDATE, T, k);
            }
          } }]), h;
        })(d.default.Scroll);
        N.blotName = "scroll", N.className = "ql-editor", N.tagName = "DIV", N.defaultChild = "block", N.allowedChildren = [e.default, t.BlockEmbed, f.default], _.default = N;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.SHORTKEY = _.default = void 0;
        var P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
          return typeof x;
        } : function(x) {
          return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
        }, w = /* @__PURE__ */ (function() {
          function x(j, U) {
            var H = [], V = true, Y = false, X = void 0;
            try {
              for (var Q = j[Symbol.iterator](), nt; !(V = (nt = Q.next()).done) && (H.push(nt.value), !(U && H.length === U)); V = true) ;
            } catch (rt) {
              Y = true, X = rt;
            } finally {
              try {
                !V && Q.return && Q.return();
              } finally {
                if (Y) throw X;
              }
            }
            return H;
          }
          return function(j, U) {
            if (Array.isArray(j)) return j;
            if (Symbol.iterator in Object(j)) return x(j, U);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), O = /* @__PURE__ */ (function() {
          function x(j, U) {
            for (var H = 0; H < U.length; H++) {
              var V = U[H];
              V.enumerable = V.enumerable || false, V.configurable = true, "value" in V && (V.writable = true), Object.defineProperty(j, V.key, V);
            }
          }
          return function(j, U, H) {
            return U && x(j.prototype, U), H && x(j, H), j;
          };
        })(), y = v(21), d = m(y), c = v(11), o = m(c), t = v(3), e = m(t), u = v(2), l = m(u), a = v(20), r = m(a), i = v(0), f = m(i), n = v(5), s = m(n), A = v(10), g = m(A), b = v(9), N = m(b);
        function m(x) {
          return x && x.__esModule ? x : { default: x };
        }
        function h(x, j, U) {
          return j in x ? Object.defineProperty(x, j, { value: U, enumerable: true, configurable: true, writable: true }) : x[j] = U, x;
        }
        function p(x, j) {
          if (!(x instanceof j)) throw new TypeError("Cannot call a class as a function");
        }
        function k(x, j) {
          if (!x) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return j && (typeof j == "object" || typeof j == "function") ? j : x;
        }
        function T(x, j) {
          if (typeof j != "function" && j !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof j);
          x.prototype = Object.create(j && j.prototype, { constructor: { value: x, enumerable: false, writable: true, configurable: true } }), j && (Object.setPrototypeOf ? Object.setPrototypeOf(x, j) : x.__proto__ = j);
        }
        var L = (0, g.default)("quill:keyboard"), B = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", C = (function(x) {
          T(j, x), O(j, null, [{ key: "match", value: function(H, V) {
            return V = D(V), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(Y) {
              return !!V[Y] !== H[Y] && V[Y] !== null;
            }) ? false : V.key === (H.which || H.keyCode);
          } }]);
          function j(U, H) {
            p(this, j);
            var V = k(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this, U, H));
            return V.bindings = {}, Object.keys(V.options.bindings).forEach(function(Y) {
              Y === "list autofill" && U.scroll.whitelist != null && !U.scroll.whitelist.list || V.options.bindings[Y] && V.addBinding(V.options.bindings[Y]);
            }), V.addBinding({ key: j.keys.ENTER, shiftKey: null }, S), V.addBinding({ key: j.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
            }), /Firefox/i.test(navigator.userAgent) ? (V.addBinding({ key: j.keys.BACKSPACE }, { collapsed: true }, M), V.addBinding({ key: j.keys.DELETE }, { collapsed: true }, R)) : (V.addBinding({ key: j.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, M), V.addBinding({ key: j.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, R)), V.addBinding({ key: j.keys.BACKSPACE }, { collapsed: false }, E), V.addBinding({ key: j.keys.DELETE }, { collapsed: false }, E), V.addBinding({ key: j.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, M), V.listen(), V;
          }
          return O(j, [{ key: "addBinding", value: function(H) {
            var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, X = D(H);
            if (X == null || X.key == null) return L.warn("Attempted to add invalid keyboard binding", X);
            typeof V == "function" && (V = { handler: V }), typeof Y == "function" && (Y = { handler: Y }), X = (0, e.default)(X, V, Y), this.bindings[X.key] = this.bindings[X.key] || [], this.bindings[X.key].push(X);
          } }, { key: "listen", value: function() {
            var H = this;
            this.quill.root.addEventListener("keydown", function(V) {
              if (!V.defaultPrevented) {
                var Y = V.which || V.keyCode, X = (H.bindings[Y] || []).filter(function(ot) {
                  return j.match(V, ot);
                });
                if (X.length !== 0) {
                  var Q = H.quill.getSelection();
                  if (!(Q == null || !H.quill.hasFocus())) {
                    var nt = H.quill.getLine(Q.index), rt = w(nt, 2), at = rt[0], lt = rt[1], z = H.quill.getLeaf(Q.index), K = w(z, 2), W = K[0], G = K[1], $ = Q.length === 0 ? [W, G] : H.quill.getLeaf(Q.index + Q.length), J = w($, 2), tt = J[0], et = J[1], ft = W instanceof f.default.Text ? W.value().slice(0, G) : "", st = tt instanceof f.default.Text ? tt.value().slice(et) : "", it = { collapsed: Q.length === 0, empty: Q.length === 0 && at.length() <= 1, format: H.quill.getFormat(Q), offset: lt, prefix: ft, suffix: st }, mt = X.some(function(ot) {
                      if (ot.collapsed != null && ot.collapsed !== it.collapsed || ot.empty != null && ot.empty !== it.empty || ot.offset != null && ot.offset !== it.offset) return false;
                      if (Array.isArray(ot.format)) {
                        if (ot.format.every(function(ct) {
                          return it.format[ct] == null;
                        })) return false;
                      } else if (P(ot.format) === "object" && !Object.keys(ot.format).every(function(ct) {
                        return ot.format[ct] === true ? it.format[ct] != null : ot.format[ct] === false ? it.format[ct] == null : (0, o.default)(ot.format[ct], it.format[ct]);
                      })) return false;
                      return ot.prefix != null && !ot.prefix.test(it.prefix) || ot.suffix != null && !ot.suffix.test(it.suffix) ? false : ot.handler.call(H, Q, it) !== true;
                    });
                    mt && V.preventDefault();
                  }
                }
              }
            });
          } }]), j;
        })(N.default);
        C.keys = { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }, C.DEFAULTS = { bindings: { bold: F("bold"), italic: F("italic"), underline: F("underline"), indent: { key: C.keys.TAB, format: ["blockquote", "indent", "list"], handler: function(j, U) {
          if (U.collapsed && U.offset !== 0) return true;
          this.quill.format("indent", "+1", s.default.sources.USER);
        } }, outdent: { key: C.keys.TAB, shiftKey: true, format: ["blockquote", "indent", "list"], handler: function(j, U) {
          if (U.collapsed && U.offset !== 0) return true;
          this.quill.format("indent", "-1", s.default.sources.USER);
        } }, "outdent backspace": { key: C.keys.BACKSPACE, collapsed: true, shiftKey: null, metaKey: null, ctrlKey: null, altKey: null, format: ["indent", "list"], offset: 0, handler: function(j, U) {
          U.format.indent != null ? this.quill.format("indent", "-1", s.default.sources.USER) : U.format.list != null && this.quill.format("list", false, s.default.sources.USER);
        } }, "indent code-block": q(true), "outdent code-block": q(false), "remove tab": { key: C.keys.TAB, shiftKey: true, collapsed: true, prefix: /\t$/, handler: function(j) {
          this.quill.deleteText(j.index - 1, 1, s.default.sources.USER);
        } }, tab: { key: C.keys.TAB, handler: function(j) {
          this.quill.history.cutoff();
          var U = new l.default().retain(j.index).delete(j.length).insert("	");
          this.quill.updateContents(U, s.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(j.index + 1, s.default.sources.SILENT);
        } }, "list empty enter": { key: C.keys.ENTER, collapsed: true, format: ["list"], empty: true, handler: function(j, U) {
          this.quill.format("list", false, s.default.sources.USER), U.format.indent && this.quill.format("indent", false, s.default.sources.USER);
        } }, "checklist enter": { key: C.keys.ENTER, collapsed: true, format: { list: "checked" }, handler: function(j) {
          var U = this.quill.getLine(j.index), H = w(U, 2), V = H[0], Y = H[1], X = (0, e.default)({}, V.formats(), { list: "checked" }), Q = new l.default().retain(j.index).insert(`
`, X).retain(V.length() - Y - 1).retain(1, { list: "unchecked" });
          this.quill.updateContents(Q, s.default.sources.USER), this.quill.setSelection(j.index + 1, s.default.sources.SILENT), this.quill.scrollIntoView();
        } }, "header enter": { key: C.keys.ENTER, collapsed: true, format: ["header"], suffix: /^$/, handler: function(j, U) {
          var H = this.quill.getLine(j.index), V = w(H, 2), Y = V[0], X = V[1], Q = new l.default().retain(j.index).insert(`
`, U.format).retain(Y.length() - X - 1).retain(1, { header: null });
          this.quill.updateContents(Q, s.default.sources.USER), this.quill.setSelection(j.index + 1, s.default.sources.SILENT), this.quill.scrollIntoView();
        } }, "list autofill": { key: " ", collapsed: true, format: { list: false }, prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/, handler: function(j, U) {
          var H = U.prefix.length, V = this.quill.getLine(j.index), Y = w(V, 2), X = Y[0], Q = Y[1];
          if (Q > H) return true;
          var nt = void 0;
          switch (U.prefix.trim()) {
            case "[]":
            case "[ ]":
              nt = "unchecked";
              break;
            case "[x]":
              nt = "checked";
              break;
            case "-":
            case "*":
              nt = "bullet";
              break;
            default:
              nt = "ordered";
          }
          this.quill.insertText(j.index, " ", s.default.sources.USER), this.quill.history.cutoff();
          var rt = new l.default().retain(j.index - Q).delete(H + 1).retain(X.length() - 2 - Q).retain(1, { list: nt });
          this.quill.updateContents(rt, s.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(j.index - H, s.default.sources.SILENT);
        } }, "code exit": { key: C.keys.ENTER, collapsed: true, format: ["code-block"], prefix: /\n\n$/, suffix: /^\s+$/, handler: function(j) {
          var U = this.quill.getLine(j.index), H = w(U, 2), V = H[0], Y = H[1], X = new l.default().retain(j.index + V.length() - Y - 2).retain(1, { "code-block": null }).delete(1);
          this.quill.updateContents(X, s.default.sources.USER);
        } }, "embed left": Z(C.keys.LEFT, false), "embed left shift": Z(C.keys.LEFT, true), "embed right": Z(C.keys.RIGHT, false), "embed right shift": Z(C.keys.RIGHT, true) } };
        function Z(x, j) {
          var U, H = x === C.keys.LEFT ? "prefix" : "suffix";
          return U = { key: x, shiftKey: j, altKey: null }, h(U, H, /^$/), h(U, "handler", function(Y) {
            var X = Y.index;
            x === C.keys.RIGHT && (X += Y.length + 1);
            var Q = this.quill.getLeaf(X), nt = w(Q, 1), rt = nt[0];
            return rt instanceof f.default.Embed ? (x === C.keys.LEFT ? j ? this.quill.setSelection(Y.index - 1, Y.length + 1, s.default.sources.USER) : this.quill.setSelection(Y.index - 1, s.default.sources.USER) : j ? this.quill.setSelection(Y.index, Y.length + 1, s.default.sources.USER) : this.quill.setSelection(Y.index + Y.length + 1, s.default.sources.USER), false) : true;
          }), U;
        }
        function M(x, j) {
          if (!(x.index === 0 || this.quill.getLength() <= 1)) {
            var U = this.quill.getLine(x.index), H = w(U, 1), V = H[0], Y = {};
            if (j.offset === 0) {
              var X = this.quill.getLine(x.index - 1), Q = w(X, 1), nt = Q[0];
              if (nt != null && nt.length() > 1) {
                var rt = V.formats(), at = this.quill.getFormat(x.index - 1, 1);
                Y = r.default.attributes.diff(rt, at) || {};
              }
            }
            var lt = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(j.prefix) ? 2 : 1;
            this.quill.deleteText(x.index - lt, lt, s.default.sources.USER), Object.keys(Y).length > 0 && this.quill.formatLine(x.index - lt, lt, Y, s.default.sources.USER), this.quill.focus();
          }
        }
        function R(x, j) {
          var U = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(j.suffix) ? 2 : 1;
          if (!(x.index >= this.quill.getLength() - U)) {
            var H = {}, V = 0, Y = this.quill.getLine(x.index), X = w(Y, 1), Q = X[0];
            if (j.offset >= Q.length() - 1) {
              var nt = this.quill.getLine(x.index + 1), rt = w(nt, 1), at = rt[0];
              if (at) {
                var lt = Q.formats(), z = this.quill.getFormat(x.index, 1);
                H = r.default.attributes.diff(lt, z) || {}, V = at.length();
              }
            }
            this.quill.deleteText(x.index, U, s.default.sources.USER), Object.keys(H).length > 0 && this.quill.formatLine(x.index + V - 1, U, H, s.default.sources.USER);
          }
        }
        function E(x) {
          var j = this.quill.getLines(x), U = {};
          if (j.length > 1) {
            var H = j[0].formats(), V = j[j.length - 1].formats();
            U = r.default.attributes.diff(V, H) || {};
          }
          this.quill.deleteText(x, s.default.sources.USER), Object.keys(U).length > 0 && this.quill.formatLine(x.index, 1, U, s.default.sources.USER), this.quill.setSelection(x.index, s.default.sources.SILENT), this.quill.focus();
        }
        function S(x, j) {
          var U = this;
          x.length > 0 && this.quill.scroll.deleteAt(x.index, x.length);
          var H = Object.keys(j.format).reduce(function(V, Y) {
            return f.default.query(Y, f.default.Scope.BLOCK) && !Array.isArray(j.format[Y]) && (V[Y] = j.format[Y]), V;
          }, {});
          this.quill.insertText(x.index, `
`, H, s.default.sources.USER), this.quill.setSelection(x.index + 1, s.default.sources.SILENT), this.quill.focus(), Object.keys(j.format).forEach(function(V) {
            H[V] == null && (Array.isArray(j.format[V]) || V !== "link" && U.quill.format(V, j.format[V], s.default.sources.USER));
          });
        }
        function q(x) {
          return { key: C.keys.TAB, shiftKey: !x, format: { "code-block": true }, handler: function(U) {
            var H = f.default.query("code-block"), V = U.index, Y = U.length, X = this.quill.scroll.descendant(H, V), Q = w(X, 2), nt = Q[0], rt = Q[1];
            if (nt != null) {
              var at = this.quill.getIndex(nt), lt = nt.newlineIndex(rt, true) + 1, z = nt.newlineIndex(at + rt + Y), K = nt.domNode.textContent.slice(lt, z).split(`
`);
              rt = 0, K.forEach(function(W, G) {
                x ? (nt.insertAt(lt + rt, H.TAB), rt += H.TAB.length, G === 0 ? V += H.TAB.length : Y += H.TAB.length) : W.startsWith(H.TAB) && (nt.deleteAt(lt + rt, H.TAB.length), rt -= H.TAB.length, G === 0 ? V -= H.TAB.length : Y -= H.TAB.length), rt += W.length + 1;
              }), this.quill.update(s.default.sources.USER), this.quill.setSelection(V, Y, s.default.sources.SILENT);
            }
          } };
        }
        function F(x) {
          return { key: x[0].toUpperCase(), shortKey: true, handler: function(U, H) {
            this.quill.format(x, !H.format[x], s.default.sources.USER);
          } };
        }
        function D(x) {
          if (typeof x == "string" || typeof x == "number") return D({ key: x });
          if ((typeof x > "u" ? "undefined" : P(x)) === "object" && (x = (0, d.default)(x, false)), typeof x.key == "string") if (C.keys[x.key.toUpperCase()] != null) x.key = C.keys[x.key.toUpperCase()];
          else if (x.key.length === 1) x.key = x.key.toUpperCase().charCodeAt(0);
          else return null;
          return x.shortKey && (x[B] = x.shortKey, delete x.shortKey), x;
        }
        _.default = C, _.SHORTKEY = B;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function r(i, f) {
            var n = [], s = true, A = false, g = void 0;
            try {
              for (var b = i[Symbol.iterator](), N; !(s = (N = b.next()).done) && (n.push(N.value), !(f && n.length === f)); s = true) ;
            } catch (m) {
              A = true, g = m;
            } finally {
              try {
                !s && b.return && b.return();
              } finally {
                if (A) throw g;
              }
            }
            return n;
          }
          return function(i, f) {
            if (Array.isArray(i)) return i;
            if (Symbol.iterator in Object(i)) return r(i, f);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), w = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(i, f);
          if (s === void 0) {
            var A = Object.getPrototypeOf(i);
            return A === null ? void 0 : r(A, f, n);
          } else {
            if ("value" in s) return s.value;
            var g = s.get;
            return g === void 0 ? void 0 : g.call(n);
          }
        }, O = /* @__PURE__ */ (function() {
          function r(i, f) {
            for (var n = 0; n < f.length; n++) {
              var s = f[n];
              s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(i, s.key, s);
            }
          }
          return function(i, f, n) {
            return f && r(i.prototype, f), n && r(i, n), i;
          };
        })(), y = v(0), d = t(y), c = v(7), o = t(c);
        function t(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function e(r, i) {
          if (!(r instanceof i)) throw new TypeError("Cannot call a class as a function");
        }
        function u(r, i) {
          if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function l(r, i) {
          if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof i);
          r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: false, writable: true, configurable: true } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
        }
        var a = (function(r) {
          l(i, r), O(i, null, [{ key: "value", value: function() {
          } }]);
          function i(f, n) {
            e(this, i);
            var s = u(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
            return s.selection = n, s.textNode = document.createTextNode(i.CONTENTS), s.domNode.appendChild(s.textNode), s._length = 0, s;
          }
          return O(i, [{ key: "detach", value: function() {
            this.parent != null && this.parent.removeChild(this);
          } }, { key: "format", value: function(n, s) {
            if (this._length !== 0) return w(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "format", this).call(this, n, s);
            for (var A = this, g = 0; A != null && A.statics.scope !== d.default.Scope.BLOCK_BLOT; ) g += A.offset(A.parent), A = A.parent;
            A != null && (this._length = i.CONTENTS.length, A.optimize(), A.formatAt(g, i.CONTENTS.length, n, s), this._length = 0);
          } }, { key: "index", value: function(n, s) {
            return n === this.textNode ? 0 : w(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, s);
          } }, { key: "length", value: function() {
            return this._length;
          } }, { key: "position", value: function() {
            return [this.textNode, this.textNode.data.length];
          } }, { key: "remove", value: function() {
            w(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "remove", this).call(this), this.parent = null;
          } }, { key: "restore", value: function() {
            if (!(this.selection.composing || this.parent == null)) {
              var n = this.textNode, s = this.selection.getNativeRange(), A = void 0, g = void 0, b = void 0;
              if (s != null && s.start.node === n && s.end.node === n) {
                var N = [n, s.start.offset, s.end.offset];
                A = N[0], g = N[1], b = N[2];
              }
              for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; ) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
              if (this.textNode.data !== i.CONTENTS) {
                var m = this.textNode.data.split(i.CONTENTS).join("");
                this.next instanceof o.default ? (A = this.next.domNode, this.next.insertAt(0, m), this.textNode.data = i.CONTENTS) : (this.textNode.data = m, this.parent.insertBefore(d.default.create(this.textNode), this), this.textNode = document.createTextNode(i.CONTENTS), this.domNode.appendChild(this.textNode));
              }
              if (this.remove(), g != null) {
                var h = [g, b].map(function(k) {
                  return Math.max(0, Math.min(A.data.length, k - 1));
                }), p = P(h, 2);
                return g = p[0], b = p[1], { startNode: A, startOffset: g, endNode: A, endOffset: b };
              }
            }
          } }, { key: "update", value: function(n, s) {
            var A = this;
            if (n.some(function(b) {
              return b.type === "characterData" && b.target === A.textNode;
            })) {
              var g = this.restore();
              g && (s.range = g);
            }
          } }, { key: "value", value: function() {
            return "";
          } }]), i;
        })(d.default.Embed);
        a.blotName = "cursor", a.className = "ql-cursor", a.tagName = "span", a.CONTENTS = "\uFEFF", _.default = a;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(0), w = d(P), O = v(4), y = d(O);
        function d(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l)) throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
          u.prototype = Object.create(l && l.prototype, { constructor: { value: u, enumerable: false, writable: true, configurable: true } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : u.__proto__ = l);
        }
        var e = (function(u) {
          t(l, u);
          function l() {
            return c(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
          }
          return l;
        })(w.default.Container);
        e.allowedChildren = [y.default, O.BlockEmbed, e], _.default = e;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.ColorStyle = _.ColorClass = _.ColorAttributor = void 0;
        var P = /* @__PURE__ */ (function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        })(), w = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var s = Object.getPrototypeOf(r);
            return s === null ? void 0 : a(s, i, f);
          } else {
            if ("value" in n) return n.value;
            var A = n.get;
            return A === void 0 ? void 0 : A.call(f);
          }
        }, O = v(0), y = d(O);
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function c(a, r) {
          if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
        }
        function o(a, r) {
          if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function t(a, r) {
          if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          a.prototype = Object.create(r && r.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }
        var e = (function(a) {
          t(r, a);
          function r() {
            return c(this, r), o(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return P(r, [{ key: "value", value: function(f) {
            var n = w(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "value", this).call(this, f);
            return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(s) {
              return ("00" + parseInt(s).toString(16)).slice(-2);
            }).join("")) : n;
          } }]), r;
        })(y.default.Attributor.Style), u = new y.default.Attributor.Class("color", "ql-color", { scope: y.default.Scope.INLINE }), l = new e("color", "color", { scope: y.default.Scope.INLINE });
        _.ColorAttributor = e, _.ColorClass = u, _.ColorStyle = l;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.sanitize = _.default = void 0;
        var P = /* @__PURE__ */ (function() {
          function l(a, r) {
            for (var i = 0; i < r.length; i++) {
              var f = r[i];
              f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(a, f.key, f);
            }
          }
          return function(a, r, i) {
            return r && l(a.prototype, r), i && l(a, i), a;
          };
        })(), w = function l(a, r, i) {
          a === null && (a = Function.prototype);
          var f = Object.getOwnPropertyDescriptor(a, r);
          if (f === void 0) {
            var n = Object.getPrototypeOf(a);
            return n === null ? void 0 : l(n, r, i);
          } else {
            if ("value" in f) return f.value;
            var s = f.get;
            return s === void 0 ? void 0 : s.call(i);
          }
        }, O = v(6), y = d(O);
        function d(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function c(l, a) {
          if (!(l instanceof a)) throw new TypeError("Cannot call a class as a function");
        }
        function o(l, a) {
          if (!l) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return a && (typeof a == "object" || typeof a == "function") ? a : l;
        }
        function t(l, a) {
          if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
          l.prototype = Object.create(a && a.prototype, { constructor: { value: l, enumerable: false, writable: true, configurable: true } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(l, a) : l.__proto__ = a);
        }
        var e = (function(l) {
          t(a, l);
          function a() {
            return c(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
          }
          return P(a, [{ key: "format", value: function(i, f) {
            if (i !== this.statics.blotName || !f) return w(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "format", this).call(this, i, f);
            f = this.constructor.sanitize(f), this.domNode.setAttribute("href", f);
          } }], [{ key: "create", value: function(i) {
            var f = w(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this, i);
            return i = this.sanitize(i), f.setAttribute("href", i), f.setAttribute("rel", "noopener noreferrer"), f.setAttribute("target", "_blank"), f;
          } }, { key: "formats", value: function(i) {
            return i.getAttribute("href");
          } }, { key: "sanitize", value: function(i) {
            return u(i, this.PROTOCOL_WHITELIST) ? i : this.SANITIZED_URL;
          } }]), a;
        })(y.default);
        e.blotName = "link", e.tagName = "A", e.SANITIZED_URL = "about:blank", e.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
        function u(l, a) {
          var r = document.createElement("a");
          r.href = l;
          var i = r.href.slice(0, r.href.indexOf(":"));
          return a.indexOf(i) > -1;
        }
        _.default = e, _.sanitize = u;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
          return typeof a;
        } : function(a) {
          return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
        }, w = /* @__PURE__ */ (function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        })(), O = v(23), y = o(O), d = v(107), c = o(d);
        function o(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function t(a, r) {
          if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
        }
        var e = 0;
        function u(a, r) {
          a.setAttribute(r, a.getAttribute(r) !== "true");
        }
        var l = (function() {
          function a(r) {
            var i = this;
            t(this, a), this.select = r, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
              i.togglePicker();
            }), this.label.addEventListener("keydown", function(f) {
              switch (f.keyCode) {
                case y.default.keys.ENTER:
                  i.togglePicker();
                  break;
                case y.default.keys.ESCAPE:
                  i.escape(), f.preventDefault();
                  break;
              }
            }), this.select.addEventListener("change", this.update.bind(this));
          }
          return w(a, [{ key: "togglePicker", value: function() {
            this.container.classList.toggle("ql-expanded"), u(this.label, "aria-expanded"), u(this.options, "aria-hidden");
          } }, { key: "buildItem", value: function(i) {
            var f = this, n = document.createElement("span");
            return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), i.hasAttribute("value") && n.setAttribute("data-value", i.getAttribute("value")), i.textContent && n.setAttribute("data-label", i.textContent), n.addEventListener("click", function() {
              f.selectItem(n, true);
            }), n.addEventListener("keydown", function(s) {
              switch (s.keyCode) {
                case y.default.keys.ENTER:
                  f.selectItem(n, true), s.preventDefault();
                  break;
                case y.default.keys.ESCAPE:
                  f.escape(), s.preventDefault();
                  break;
              }
            }), n;
          } }, { key: "buildLabel", value: function() {
            var i = document.createElement("span");
            return i.classList.add("ql-picker-label"), i.innerHTML = c.default, i.tabIndex = "0", i.setAttribute("role", "button"), i.setAttribute("aria-expanded", "false"), this.container.appendChild(i), i;
          } }, { key: "buildOptions", value: function() {
            var i = this, f = document.createElement("span");
            f.classList.add("ql-picker-options"), f.setAttribute("aria-hidden", "true"), f.tabIndex = "-1", f.id = "ql-picker-options-" + e, e += 1, this.label.setAttribute("aria-controls", f.id), this.options = f, [].slice.call(this.select.options).forEach(function(n) {
              var s = i.buildItem(n);
              f.appendChild(s), n.selected === true && i.selectItem(s);
            }), this.container.appendChild(f);
          } }, { key: "buildPicker", value: function() {
            var i = this;
            [].slice.call(this.select.attributes).forEach(function(f) {
              i.container.setAttribute(f.name, f.value);
            }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
          } }, { key: "escape", value: function() {
            var i = this;
            this.close(), setTimeout(function() {
              return i.label.focus();
            }, 1);
          } }, { key: "close", value: function() {
            this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
          } }, { key: "selectItem", value: function(i) {
            var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = this.container.querySelector(".ql-selected");
            if (i !== n && (n == null ? void 0 : n.classList.remove("ql-selected"), i != null && (i.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(i.parentNode.children, i), i.hasAttribute("data-value") ? this.label.setAttribute("data-value", i.getAttribute("data-value")) : this.label.removeAttribute("data-value"), i.hasAttribute("data-label") ? this.label.setAttribute("data-label", i.getAttribute("data-label")) : this.label.removeAttribute("data-label"), f))) {
              if (typeof Event == "function") this.select.dispatchEvent(new Event("change"));
              else if ((typeof Event > "u" ? "undefined" : P(Event)) === "object") {
                var s = document.createEvent("Event");
                s.initEvent("change", true, true), this.select.dispatchEvent(s);
              }
              this.close();
            }
          } }, { key: "update", value: function() {
            var i = void 0;
            if (this.select.selectedIndex > -1) {
              var f = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
              i = this.select.options[this.select.selectedIndex], this.selectItem(f);
            } else this.selectItem(null);
            var n = i != null && i !== this.select.querySelector("option[selected]");
            this.label.classList.toggle("ql-active", n);
          } }]), a;
        })();
        _.default = l;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(0), w = L(P), O = v(5), y = L(O), d = v(4), c = L(d), o = v(16), t = L(o), e = v(25), u = L(e), l = v(24), a = L(l), r = v(35), i = L(r), f = v(6), n = L(f), s = v(22), A = L(s), g = v(7), b = L(g), N = v(55), m = L(N), h = v(42), p = L(h), k = v(23), T = L(k);
        function L(B) {
          return B && B.__esModule ? B : { default: B };
        }
        y.default.register({ "blots/block": c.default, "blots/block/embed": d.BlockEmbed, "blots/break": t.default, "blots/container": u.default, "blots/cursor": a.default, "blots/embed": i.default, "blots/inline": n.default, "blots/scroll": A.default, "blots/text": b.default, "modules/clipboard": m.default, "modules/history": p.default, "modules/keyboard": T.default }), w.default.register(c.default, t.default, a.default, n.default, A.default, b.default), _.default = y.default;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(1), w = (function() {
          function O(y) {
            this.domNode = y, this.domNode[P.DATA_KEY] = { blot: this };
          }
          return Object.defineProperty(O.prototype, "statics", { get: function() {
            return this.constructor;
          }, enumerable: true, configurable: true }), O.create = function(y) {
            if (this.tagName == null) throw new P.ParchmentError("Blot definition missing tagName");
            var d;
            return Array.isArray(this.tagName) ? (typeof y == "string" && (y = y.toUpperCase(), parseInt(y).toString() === y && (y = parseInt(y))), typeof y == "number" ? d = document.createElement(this.tagName[y - 1]) : this.tagName.indexOf(y) > -1 ? d = document.createElement(y) : d = document.createElement(this.tagName[0])) : d = document.createElement(this.tagName), this.className && d.classList.add(this.className), d;
          }, O.prototype.attach = function() {
            this.parent != null && (this.scroll = this.parent.scroll);
          }, O.prototype.clone = function() {
            var y = this.domNode.cloneNode(false);
            return P.create(y);
          }, O.prototype.detach = function() {
            this.parent != null && this.parent.removeChild(this), delete this.domNode[P.DATA_KEY];
          }, O.prototype.deleteAt = function(y, d) {
            var c = this.isolate(y, d);
            c.remove();
          }, O.prototype.formatAt = function(y, d, c, o) {
            var t = this.isolate(y, d);
            if (P.query(c, P.Scope.BLOT) != null && o) t.wrap(c, o);
            else if (P.query(c, P.Scope.ATTRIBUTE) != null) {
              var e = P.create(this.statics.scope);
              t.wrap(e), e.format(c, o);
            }
          }, O.prototype.insertAt = function(y, d, c) {
            var o = c == null ? P.create("text", d) : P.create(d, c), t = this.split(y);
            this.parent.insertBefore(o, t);
          }, O.prototype.insertInto = function(y, d) {
            d === void 0 && (d = null), this.parent != null && this.parent.children.remove(this);
            var c = null;
            y.children.insertBefore(this, d), d != null && (c = d.domNode), (this.domNode.parentNode != y.domNode || this.domNode.nextSibling != c) && y.domNode.insertBefore(this.domNode, c), this.parent = y, this.attach();
          }, O.prototype.isolate = function(y, d) {
            var c = this.split(y);
            return c.split(d), c;
          }, O.prototype.length = function() {
            return 1;
          }, O.prototype.offset = function(y) {
            return y === void 0 && (y = this.parent), this.parent == null || this == y ? 0 : this.parent.children.offset(this) + this.parent.offset(y);
          }, O.prototype.optimize = function(y) {
            this.domNode[P.DATA_KEY] != null && delete this.domNode[P.DATA_KEY].mutations;
          }, O.prototype.remove = function() {
            this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
          }, O.prototype.replace = function(y) {
            y.parent != null && (y.parent.insertBefore(this, y.next), y.remove());
          }, O.prototype.replaceWith = function(y, d) {
            var c = typeof y == "string" ? P.create(y, d) : y;
            return c.replace(this), c;
          }, O.prototype.split = function(y, d) {
            return y === 0 ? this : this.next;
          }, O.prototype.update = function(y, d) {
          }, O.prototype.wrap = function(y, d) {
            var c = typeof y == "string" ? P.create(y, d) : y;
            return this.parent != null && this.parent.insertBefore(c, this.next), c.appendChild(this), c;
          }, O.blotName = "abstract", O;
        })();
        _.default = w;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(12), w = v(32), O = v(33), y = v(1), d = (function() {
          function c(o) {
            this.attributes = {}, this.domNode = o, this.build();
          }
          return c.prototype.attribute = function(o, t) {
            t ? o.add(this.domNode, t) && (o.value(this.domNode) != null ? this.attributes[o.attrName] = o : delete this.attributes[o.attrName]) : (o.remove(this.domNode), delete this.attributes[o.attrName]);
          }, c.prototype.build = function() {
            var o = this;
            this.attributes = {};
            var t = P.default.keys(this.domNode), e = w.default.keys(this.domNode), u = O.default.keys(this.domNode);
            t.concat(e).concat(u).forEach(function(l) {
              var a = y.query(l, y.Scope.ATTRIBUTE);
              a instanceof P.default && (o.attributes[a.attrName] = a);
            });
          }, c.prototype.copy = function(o) {
            var t = this;
            Object.keys(this.attributes).forEach(function(e) {
              var u = t.attributes[e].value(t.domNode);
              o.format(e, u);
            });
          }, c.prototype.move = function(o) {
            var t = this;
            this.copy(o), Object.keys(this.attributes).forEach(function(e) {
              t.attributes[e].remove(t.domNode);
            }), this.attributes = {};
          }, c.prototype.values = function() {
            var o = this;
            return Object.keys(this.attributes).reduce(function(t, e) {
              return t[e] = o.attributes[e].value(o.domNode), t;
            }, {});
          }, c;
        })();
        _.default = d;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
            c.__proto__ = o;
          } || function(c, o) {
            for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
          };
          return function(c, o) {
            d(c, o);
            function t() {
              this.constructor = c;
            }
            c.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(12);
        function O(d, c) {
          var o = d.getAttribute("class") || "";
          return o.split(/\s+/).filter(function(t) {
            return t.indexOf(c + "-") === 0;
          });
        }
        var y = (function(d) {
          P(c, d);
          function c() {
            return d !== null && d.apply(this, arguments) || this;
          }
          return c.keys = function(o) {
            return (o.getAttribute("class") || "").split(/\s+/).map(function(t) {
              return t.split("-").slice(0, -1).join("-");
            });
          }, c.prototype.add = function(o, t) {
            return this.canAdd(o, t) ? (this.remove(o), o.classList.add(this.keyName + "-" + t), true) : false;
          }, c.prototype.remove = function(o) {
            var t = O(o, this.keyName);
            t.forEach(function(e) {
              o.classList.remove(e);
            }), o.classList.length === 0 && o.removeAttribute("class");
          }, c.prototype.value = function(o) {
            var t = O(o, this.keyName)[0] || "", e = t.slice(this.keyName.length + 1);
            return this.canAdd(o, e) ? e : "";
          }, c;
        })(w.default);
        _.default = y;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
            c.__proto__ = o;
          } || function(c, o) {
            for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
          };
          return function(c, o) {
            d(c, o);
            function t() {
              this.constructor = c;
            }
            c.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(12);
        function O(d) {
          var c = d.split("-"), o = c.slice(1).map(function(t) {
            return t[0].toUpperCase() + t.slice(1);
          }).join("");
          return c[0] + o;
        }
        var y = (function(d) {
          P(c, d);
          function c() {
            return d !== null && d.apply(this, arguments) || this;
          }
          return c.keys = function(o) {
            return (o.getAttribute("style") || "").split(";").map(function(t) {
              var e = t.split(":");
              return e[0].trim();
            });
          }, c.prototype.add = function(o, t) {
            return this.canAdd(o, t) ? (o.style[O(this.keyName)] = t, true) : false;
          }, c.prototype.remove = function(o) {
            o.style[O(this.keyName)] = "", o.getAttribute("style") || o.removeAttribute("style");
          }, c.prototype.value = function(o) {
            var t = o.style[O(this.keyName)];
            return this.canAdd(o, t) ? t : "";
          }, c;
        })(w.default);
        _.default = y;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function y(d, c) {
            for (var o = 0; o < c.length; o++) {
              var t = c[o];
              t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(d, t.key, t);
            }
          }
          return function(d, c, o) {
            return c && y(d.prototype, c), o && y(d, o), d;
          };
        })();
        function w(y, d) {
          if (!(y instanceof d)) throw new TypeError("Cannot call a class as a function");
        }
        var O = (function() {
          function y(d, c) {
            w(this, y), this.quill = d, this.options = c, this.modules = {};
          }
          return P(y, [{ key: "init", value: function() {
            var c = this;
            Object.keys(this.options.modules).forEach(function(o) {
              c.modules[o] == null && c.addModule(o);
            });
          } }, { key: "addModule", value: function(c) {
            var o = this.quill.constructor.import("modules/" + c);
            return this.modules[c] = new o(this.quill, this.options.modules[c] || {}), this.modules[c];
          } }]), y;
        })();
        O.DEFAULTS = { modules: {} }, O.themes = { default: O }, _.default = O;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function r(i, f) {
            for (var n = 0; n < f.length; n++) {
              var s = f[n];
              s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(i, s.key, s);
            }
          }
          return function(i, f, n) {
            return f && r(i.prototype, f), n && r(i, n), i;
          };
        })(), w = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(i, f);
          if (s === void 0) {
            var A = Object.getPrototypeOf(i);
            return A === null ? void 0 : r(A, f, n);
          } else {
            if ("value" in s) return s.value;
            var g = s.get;
            return g === void 0 ? void 0 : g.call(n);
          }
        }, O = v(0), y = o(O), d = v(7), c = o(d);
        function o(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function t(r, i) {
          if (!(r instanceof i)) throw new TypeError("Cannot call a class as a function");
        }
        function e(r, i) {
          if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function u(r, i) {
          if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof i);
          r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: false, writable: true, configurable: true } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
        }
        var l = "\uFEFF", a = (function(r) {
          u(i, r);
          function i(f) {
            t(this, i);
            var n = e(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
            return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", false), [].slice.call(n.domNode.childNodes).forEach(function(s) {
              n.contentNode.appendChild(s);
            }), n.leftGuard = document.createTextNode(l), n.rightGuard = document.createTextNode(l), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n;
          }
          return P(i, [{ key: "index", value: function(n, s) {
            return n === this.leftGuard ? 0 : n === this.rightGuard ? 1 : w(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, s);
          } }, { key: "restore", value: function(n) {
            var s = void 0, A = void 0, g = n.data.split(l).join("");
            if (n === this.leftGuard) if (this.prev instanceof c.default) {
              var b = this.prev.length();
              this.prev.insertAt(b, g), s = { startNode: this.prev.domNode, startOffset: b + g.length };
            } else A = document.createTextNode(g), this.parent.insertBefore(y.default.create(A), this), s = { startNode: A, startOffset: g.length };
            else n === this.rightGuard && (this.next instanceof c.default ? (this.next.insertAt(0, g), s = { startNode: this.next.domNode, startOffset: g.length }) : (A = document.createTextNode(g), this.parent.insertBefore(y.default.create(A), this.next), s = { startNode: A, startOffset: g.length }));
            return n.data = l, s;
          } }, { key: "update", value: function(n, s) {
            var A = this;
            n.forEach(function(g) {
              if (g.type === "characterData" && (g.target === A.leftGuard || g.target === A.rightGuard)) {
                var b = A.restore(g.target);
                b && (s.range = b);
              }
            });
          } }]), i;
        })(y.default.Embed);
        _.default = a;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.AlignStyle = _.AlignClass = _.AlignAttribute = void 0;
        var P = v(0), w = O(P);
        function O(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var y = { scope: w.default.Scope.BLOCK, whitelist: ["right", "center", "justify"] }, d = new w.default.Attributor.Attribute("align", "align", y), c = new w.default.Attributor.Class("align", "ql-align", y), o = new w.default.Attributor.Style("align", "text-align", y);
        _.AlignAttribute = d, _.AlignClass = c, _.AlignStyle = o;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.BackgroundStyle = _.BackgroundClass = void 0;
        var P = v(0), w = y(P), O = v(26);
        function y(o) {
          return o && o.__esModule ? o : { default: o };
        }
        var d = new w.default.Attributor.Class("background", "ql-bg", { scope: w.default.Scope.INLINE }), c = new O.ColorAttributor("background", "background-color", { scope: w.default.Scope.INLINE });
        _.BackgroundClass = d, _.BackgroundStyle = c;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.DirectionStyle = _.DirectionClass = _.DirectionAttribute = void 0;
        var P = v(0), w = O(P);
        function O(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var y = { scope: w.default.Scope.BLOCK, whitelist: ["rtl"] }, d = new w.default.Attributor.Attribute("direction", "dir", y), c = new w.default.Attributor.Class("direction", "ql-direction", y), o = new w.default.Attributor.Style("direction", "direction", y);
        _.DirectionAttribute = d, _.DirectionClass = c, _.DirectionStyle = o;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.FontClass = _.FontStyle = void 0;
        var P = /* @__PURE__ */ (function() {
          function r(i, f) {
            for (var n = 0; n < f.length; n++) {
              var s = f[n];
              s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(i, s.key, s);
            }
          }
          return function(i, f, n) {
            return f && r(i.prototype, f), n && r(i, n), i;
          };
        })(), w = function r(i, f, n) {
          i === null && (i = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(i, f);
          if (s === void 0) {
            var A = Object.getPrototypeOf(i);
            return A === null ? void 0 : r(A, f, n);
          } else {
            if ("value" in s) return s.value;
            var g = s.get;
            return g === void 0 ? void 0 : g.call(n);
          }
        }, O = v(0), y = d(O);
        function d(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function c(r, i) {
          if (!(r instanceof i)) throw new TypeError("Cannot call a class as a function");
        }
        function o(r, i) {
          if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return i && (typeof i == "object" || typeof i == "function") ? i : r;
        }
        function t(r, i) {
          if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof i);
          r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: false, writable: true, configurable: true } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
        }
        var e = { scope: y.default.Scope.INLINE, whitelist: ["serif", "monospace"] }, u = new y.default.Attributor.Class("font", "ql-font", e), l = (function(r) {
          t(i, r);
          function i() {
            return c(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
          }
          return P(i, [{ key: "value", value: function(n) {
            return w(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "value", this).call(this, n).replace(/["']/g, "");
          } }]), i;
        })(y.default.Attributor.Style), a = new l("font", "font-family", e);
        _.FontStyle = a, _.FontClass = u;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.SizeStyle = _.SizeClass = void 0;
        var P = v(0), w = O(P);
        function O(c) {
          return c && c.__esModule ? c : { default: c };
        }
        var y = new w.default.Attributor.Class("size", "ql-size", { scope: w.default.Scope.INLINE, whitelist: ["small", "large", "huge"] }), d = new w.default.Attributor.Style("size", "font-size", { scope: w.default.Scope.INLINE, whitelist: ["10px", "18px", "32px"] });
        _.SizeClass = y, _.SizeStyle = d;
      }), (function(I, _, v) {
        I.exports = { align: { "": v(76), center: v(77), right: v(78), justify: v(79) }, background: v(80), blockquote: v(81), bold: v(82), clean: v(83), code: v(58), "code-block": v(58), color: v(84), direction: { "": v(85), rtl: v(86) }, float: { center: v(87), full: v(88), left: v(89), right: v(90) }, formula: v(91), header: { 1: v(92), 2: v(93) }, italic: v(94), image: v(95), indent: { "+1": v(96), "-1": v(97) }, link: v(98), list: { ordered: v(99), bullet: v(100), check: v(101) }, script: { sub: v(102), super: v(103) }, strike: v(104), underline: v(105), video: v(106) };
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.getLastChangeIndex = _.default = void 0;
        var P = /* @__PURE__ */ (function() {
          function f(n, s) {
            for (var A = 0; A < s.length; A++) {
              var g = s[A];
              g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(n, g.key, g);
            }
          }
          return function(n, s, A) {
            return s && f(n.prototype, s), A && f(n, A), n;
          };
        })(), w = v(0), O = t(w), y = v(5), d = t(y), c = v(9), o = t(c);
        function t(f) {
          return f && f.__esModule ? f : { default: f };
        }
        function e(f, n) {
          if (!(f instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function u(f, n) {
          if (!f) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return n && (typeof n == "object" || typeof n == "function") ? n : f;
        }
        function l(f, n) {
          if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
          f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: false, writable: true, configurable: true } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
        }
        var a = (function(f) {
          l(n, f);
          function n(s, A) {
            e(this, n);
            var g = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, s, A));
            return g.lastRecorded = 0, g.ignoreChange = false, g.clear(), g.quill.on(d.default.events.EDITOR_CHANGE, function(b, N, m, h) {
              b !== d.default.events.TEXT_CHANGE || g.ignoreChange || (!g.options.userOnly || h === d.default.sources.USER ? g.record(N, m) : g.transform(N));
            }), g.quill.keyboard.addBinding({ key: "Z", shortKey: true }, g.undo.bind(g)), g.quill.keyboard.addBinding({ key: "Z", shortKey: true, shiftKey: true }, g.redo.bind(g)), /Win/i.test(navigator.platform) && g.quill.keyboard.addBinding({ key: "Y", shortKey: true }, g.redo.bind(g)), g;
          }
          return P(n, [{ key: "change", value: function(A, g) {
            if (this.stack[A].length !== 0) {
              var b = this.stack[A].pop();
              this.stack[g].push(b), this.lastRecorded = 0, this.ignoreChange = true, this.quill.updateContents(b[A], d.default.sources.USER), this.ignoreChange = false;
              var N = i(b[A]);
              this.quill.setSelection(N);
            }
          } }, { key: "clear", value: function() {
            this.stack = { undo: [], redo: [] };
          } }, { key: "cutoff", value: function() {
            this.lastRecorded = 0;
          } }, { key: "record", value: function(A, g) {
            if (A.ops.length !== 0) {
              this.stack.redo = [];
              var b = this.quill.getContents().diff(g), N = Date.now();
              if (this.lastRecorded + this.options.delay > N && this.stack.undo.length > 0) {
                var m = this.stack.undo.pop();
                b = b.compose(m.undo), A = m.redo.compose(A);
              } else this.lastRecorded = N;
              this.stack.undo.push({ redo: A, undo: b }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
            }
          } }, { key: "redo", value: function() {
            this.change("redo", "undo");
          } }, { key: "transform", value: function(A) {
            this.stack.undo.forEach(function(g) {
              g.undo = A.transform(g.undo, true), g.redo = A.transform(g.redo, true);
            }), this.stack.redo.forEach(function(g) {
              g.undo = A.transform(g.undo, true), g.redo = A.transform(g.redo, true);
            });
          } }, { key: "undo", value: function() {
            this.change("undo", "redo");
          } }]), n;
        })(o.default);
        a.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: false };
        function r(f) {
          var n = f.ops[f.ops.length - 1];
          return n == null ? false : n.insert != null ? typeof n.insert == "string" && n.insert.endsWith(`
`) : n.attributes != null ? Object.keys(n.attributes).some(function(s) {
            return O.default.query(s, O.default.Scope.BLOCK) != null;
          }) : false;
        }
        function i(f) {
          var n = f.reduce(function(A, g) {
            return A += g.delete || 0, A;
          }, 0), s = f.length() - n;
          return r(f) && (s -= 1), s;
        }
        _.default = a, _.getLastChangeIndex = i;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.BaseTooltip = void 0;
        var P = /* @__PURE__ */ (function() {
          function S(q, F) {
            for (var D = 0; D < F.length; D++) {
              var x = F[D];
              x.enumerable = x.enumerable || false, x.configurable = true, "value" in x && (x.writable = true), Object.defineProperty(q, x.key, x);
            }
          }
          return function(q, F, D) {
            return F && S(q.prototype, F), D && S(q, D), q;
          };
        })(), w = function S(q, F, D) {
          q === null && (q = Function.prototype);
          var x = Object.getOwnPropertyDescriptor(q, F);
          if (x === void 0) {
            var j = Object.getPrototypeOf(q);
            return j === null ? void 0 : S(j, F, D);
          } else {
            if ("value" in x) return x.value;
            var U = x.get;
            return U === void 0 ? void 0 : U.call(D);
          }
        }, O = v(3), y = N(O), d = v(2), c = N(d), o = v(8), t = N(o), e = v(23), u = N(e), l = v(34), a = N(l), r = v(59), i = N(r), f = v(60), n = N(f), s = v(28), A = N(s), g = v(61), b = N(g);
        function N(S) {
          return S && S.__esModule ? S : { default: S };
        }
        function m(S, q) {
          if (!(S instanceof q)) throw new TypeError("Cannot call a class as a function");
        }
        function h(S, q) {
          if (!S) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return q && (typeof q == "object" || typeof q == "function") ? q : S;
        }
        function p(S, q) {
          if (typeof q != "function" && q !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof q);
          S.prototype = Object.create(q && q.prototype, { constructor: { value: S, enumerable: false, writable: true, configurable: true } }), q && (Object.setPrototypeOf ? Object.setPrototypeOf(S, q) : S.__proto__ = q);
        }
        var k = [false, "center", "right", "justify"], T = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], L = [false, "serif", "monospace"], B = ["1", "2", "3", false], C = ["small", false, "large", "huge"], Z = (function(S) {
          p(q, S);
          function q(F, D) {
            m(this, q);
            var x = h(this, (q.__proto__ || Object.getPrototypeOf(q)).call(this, F, D)), j = function U(H) {
              if (!document.body.contains(F.root)) return document.body.removeEventListener("click", U);
              x.tooltip != null && !x.tooltip.root.contains(H.target) && document.activeElement !== x.tooltip.textbox && !x.quill.hasFocus() && x.tooltip.hide(), x.pickers != null && x.pickers.forEach(function(V) {
                V.container.contains(H.target) || V.close();
              });
            };
            return F.emitter.listenDOM("click", document.body, j), x;
          }
          return P(q, [{ key: "addModule", value: function(D) {
            var x = w(q.prototype.__proto__ || Object.getPrototypeOf(q.prototype), "addModule", this).call(this, D);
            return D === "toolbar" && this.extendToolbar(x), x;
          } }, { key: "buildButtons", value: function(D, x) {
            D.forEach(function(j) {
              var U = j.getAttribute("class") || "";
              U.split(/\s+/).forEach(function(H) {
                if (H.startsWith("ql-") && (H = H.slice(3), x[H] != null)) if (H === "direction") j.innerHTML = x[H][""] + x[H].rtl;
                else if (typeof x[H] == "string") j.innerHTML = x[H];
                else {
                  var V = j.value || "";
                  V != null && x[H][V] && (j.innerHTML = x[H][V]);
                }
              });
            });
          } }, { key: "buildPickers", value: function(D, x) {
            var j = this;
            this.pickers = D.map(function(H) {
              if (H.classList.contains("ql-align")) return H.querySelector("option") == null && E(H, k), new n.default(H, x.align);
              if (H.classList.contains("ql-background") || H.classList.contains("ql-color")) {
                var V = H.classList.contains("ql-background") ? "background" : "color";
                return H.querySelector("option") == null && E(H, T, V === "background" ? "#ffffff" : "#000000"), new i.default(H, x[V]);
              } else return H.querySelector("option") == null && (H.classList.contains("ql-font") ? E(H, L) : H.classList.contains("ql-header") ? E(H, B) : H.classList.contains("ql-size") && E(H, C)), new A.default(H);
            });
            var U = function() {
              j.pickers.forEach(function(V) {
                V.update();
              });
            };
            this.quill.on(t.default.events.EDITOR_CHANGE, U);
          } }]), q;
        })(a.default);
        Z.DEFAULTS = (0, y.default)(true, {}, a.default.DEFAULTS, { modules: { toolbar: { handlers: { formula: function() {
          this.quill.theme.tooltip.edit("formula");
        }, image: function() {
          var q = this, F = this.container.querySelector("input.ql-image[type=file]");
          F == null && (F = document.createElement("input"), F.setAttribute("type", "file"), F.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), F.classList.add("ql-image"), F.addEventListener("change", function() {
            if (F.files != null && F.files[0] != null) {
              var D = new FileReader();
              D.onload = function(x) {
                var j = q.quill.getSelection(true);
                q.quill.updateContents(new c.default().retain(j.index).delete(j.length).insert({ image: x.target.result }), t.default.sources.USER), q.quill.setSelection(j.index + 1, t.default.sources.SILENT), F.value = "";
              }, D.readAsDataURL(F.files[0]);
            }
          }), this.container.appendChild(F)), F.click();
        }, video: function() {
          this.quill.theme.tooltip.edit("video");
        } } } } });
        var M = (function(S) {
          p(q, S);
          function q(F, D) {
            m(this, q);
            var x = h(this, (q.__proto__ || Object.getPrototypeOf(q)).call(this, F, D));
            return x.textbox = x.root.querySelector('input[type="text"]'), x.listen(), x;
          }
          return P(q, [{ key: "listen", value: function() {
            var D = this;
            this.textbox.addEventListener("keydown", function(x) {
              u.default.match(x, "enter") ? (D.save(), x.preventDefault()) : u.default.match(x, "escape") && (D.cancel(), x.preventDefault());
            });
          } }, { key: "cancel", value: function() {
            this.hide();
          } }, { key: "edit", value: function() {
            var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), x != null ? this.textbox.value = x : D !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + D) || ""), this.root.setAttribute("data-mode", D);
          } }, { key: "restoreFocus", value: function() {
            var D = this.quill.scrollingContainer.scrollTop;
            this.quill.focus(), this.quill.scrollingContainer.scrollTop = D;
          } }, { key: "save", value: function() {
            var D = this.textbox.value;
            switch (this.root.getAttribute("data-mode")) {
              case "link": {
                var x = this.quill.root.scrollTop;
                this.linkRange ? (this.quill.formatText(this.linkRange, "link", D, t.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", D, t.default.sources.USER)), this.quill.root.scrollTop = x;
                break;
              }
              case "video":
                D = R(D);
              case "formula": {
                if (!D) break;
                var j = this.quill.getSelection(true);
                if (j != null) {
                  var U = j.index + j.length;
                  this.quill.insertEmbed(U, this.root.getAttribute("data-mode"), D, t.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(U + 1, " ", t.default.sources.USER), this.quill.setSelection(U + 2, t.default.sources.USER);
                }
                break;
              }
            }
            this.textbox.value = "", this.hide();
          } }]), q;
        })(b.default);
        function R(S) {
          var q = S.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || S.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
          return q ? (q[1] || "https") + "://www.youtube.com/embed/" + q[2] + "?showinfo=0" : (q = S.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (q[1] || "https") + "://player.vimeo.com/video/" + q[2] + "/" : S;
        }
        function E(S, q) {
          var F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          q.forEach(function(D) {
            var x = document.createElement("option");
            D === F ? x.setAttribute("selected", "selected") : x.setAttribute("value", D), S.appendChild(x);
          });
        }
        _.BaseTooltip = M, _.default = Z;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = (function() {
          function w() {
            this.head = this.tail = null, this.length = 0;
          }
          return w.prototype.append = function() {
            for (var O = [], y = 0; y < arguments.length; y++) O[y] = arguments[y];
            this.insertBefore(O[0], null), O.length > 1 && this.append.apply(this, O.slice(1));
          }, w.prototype.contains = function(O) {
            for (var y, d = this.iterator(); y = d(); ) if (y === O) return true;
            return false;
          }, w.prototype.insertBefore = function(O, y) {
            O && (O.next = y, y != null ? (O.prev = y.prev, y.prev != null && (y.prev.next = O), y.prev = O, y === this.head && (this.head = O)) : this.tail != null ? (this.tail.next = O, O.prev = this.tail, this.tail = O) : (O.prev = null, this.head = this.tail = O), this.length += 1);
          }, w.prototype.offset = function(O) {
            for (var y = 0, d = this.head; d != null; ) {
              if (d === O) return y;
              y += d.length(), d = d.next;
            }
            return -1;
          }, w.prototype.remove = function(O) {
            this.contains(O) && (O.prev != null && (O.prev.next = O.next), O.next != null && (O.next.prev = O.prev), O === this.head && (this.head = O.next), O === this.tail && (this.tail = O.prev), this.length -= 1);
          }, w.prototype.iterator = function(O) {
            return O === void 0 && (O = this.head), function() {
              var y = O;
              return O != null && (O = O.next), y;
            };
          }, w.prototype.find = function(O, y) {
            y === void 0 && (y = false);
            for (var d, c = this.iterator(); d = c(); ) {
              var o = d.length();
              if (O < o || y && O === o && (d.next == null || d.next.length() !== 0)) return [d, O];
              O -= o;
            }
            return [null, 0];
          }, w.prototype.forEach = function(O) {
            for (var y, d = this.iterator(); y = d(); ) O(y);
          }, w.prototype.forEachAt = function(O, y, d) {
            if (!(y <= 0)) for (var c = this.find(O), o = c[0], t = c[1], e, u = O - t, l = this.iterator(o); (e = l()) && u < O + y; ) {
              var a = e.length();
              O > u ? d(e, O - u, Math.min(y, u + a - O)) : d(e, 0, Math.min(a, O + y - u)), u += a;
            }
          }, w.prototype.map = function(O) {
            return this.reduce(function(y, d) {
              return y.push(O(d)), y;
            }, []);
          }, w.prototype.reduce = function(O, y) {
            for (var d, c = this.iterator(); d = c(); ) y = O(y, d);
            return y;
          }, w;
        })();
        _.default = P;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
          };
          return function(t, e) {
            o(t, e);
            function u() {
              this.constructor = t;
            }
            t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(17), O = v(1), y = { attributes: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true }, d = 100, c = (function(o) {
          P(t, o);
          function t(e) {
            var u = o.call(this, e) || this;
            return u.scroll = u, u.observer = new MutationObserver(function(l) {
              u.update(l);
            }), u.observer.observe(u.domNode, y), u.attach(), u;
          }
          return t.prototype.detach = function() {
            o.prototype.detach.call(this), this.observer.disconnect();
          }, t.prototype.deleteAt = function(e, u) {
            this.update(), e === 0 && u === this.length() ? this.children.forEach(function(l) {
              l.remove();
            }) : o.prototype.deleteAt.call(this, e, u);
          }, t.prototype.formatAt = function(e, u, l, a) {
            this.update(), o.prototype.formatAt.call(this, e, u, l, a);
          }, t.prototype.insertAt = function(e, u, l) {
            this.update(), o.prototype.insertAt.call(this, e, u, l);
          }, t.prototype.optimize = function(e, u) {
            var l = this;
            e === void 0 && (e = []), u === void 0 && (u = {}), o.prototype.optimize.call(this, u);
            for (var a = [].slice.call(this.observer.takeRecords()); a.length > 0; ) e.push(a.pop());
            for (var r = function(s, A) {
              A === void 0 && (A = true), !(s == null || s === l) && s.domNode.parentNode != null && (s.domNode[O.DATA_KEY].mutations == null && (s.domNode[O.DATA_KEY].mutations = []), A && r(s.parent));
            }, i = function(s) {
              s.domNode[O.DATA_KEY] == null || s.domNode[O.DATA_KEY].mutations == null || (s instanceof w.default && s.children.forEach(i), s.optimize(u));
            }, f = e, n = 0; f.length > 0; n += 1) {
              if (n >= d) throw new Error("[Parchment] Maximum optimize iterations reached");
              for (f.forEach(function(s) {
                var A = O.find(s.target, true);
                A != null && (A.domNode === s.target && (s.type === "childList" ? (r(O.find(s.previousSibling, false)), [].forEach.call(s.addedNodes, function(g) {
                  var b = O.find(g, false);
                  r(b, false), b instanceof w.default && b.children.forEach(function(N) {
                    r(N, false);
                  });
                })) : s.type === "attributes" && r(A.prev)), r(A));
              }), this.children.forEach(i), f = [].slice.call(this.observer.takeRecords()), a = f.slice(); a.length > 0; ) e.push(a.pop());
            }
          }, t.prototype.update = function(e, u) {
            var l = this;
            u === void 0 && (u = {}), e = e || this.observer.takeRecords(), e.map(function(a) {
              var r = O.find(a.target, true);
              return r == null ? null : r.domNode[O.DATA_KEY].mutations == null ? (r.domNode[O.DATA_KEY].mutations = [a], r) : (r.domNode[O.DATA_KEY].mutations.push(a), null);
            }).forEach(function(a) {
              a == null || a === l || a.domNode[O.DATA_KEY] == null || a.update(a.domNode[O.DATA_KEY].mutations || [], u);
            }), this.domNode[O.DATA_KEY].mutations != null && o.prototype.update.call(this, this.domNode[O.DATA_KEY].mutations, u), this.optimize(e, u);
          }, t.blotName = "scroll", t.defaultChild = "block", t.scope = O.Scope.BLOCK_BLOT, t.tagName = "DIV", t;
        })(w.default);
        _.default = c;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, t) {
            o.__proto__ = t;
          } || function(o, t) {
            for (var e in t) t.hasOwnProperty(e) && (o[e] = t[e]);
          };
          return function(o, t) {
            c(o, t);
            function e() {
              this.constructor = o;
            }
            o.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(18), O = v(1);
        function y(c, o) {
          if (Object.keys(c).length !== Object.keys(o).length) return false;
          for (var t in c) if (c[t] !== o[t]) return false;
          return true;
        }
        var d = (function(c) {
          P(o, c);
          function o() {
            return c !== null && c.apply(this, arguments) || this;
          }
          return o.formats = function(t) {
            if (t.tagName !== o.tagName) return c.formats.call(this, t);
          }, o.prototype.format = function(t, e) {
            var u = this;
            t === this.statics.blotName && !e ? (this.children.forEach(function(l) {
              l instanceof w.default || (l = l.wrap(o.blotName, true)), u.attributes.copy(l);
            }), this.unwrap()) : c.prototype.format.call(this, t, e);
          }, o.prototype.formatAt = function(t, e, u, l) {
            if (this.formats()[u] != null || O.query(u, O.Scope.ATTRIBUTE)) {
              var a = this.isolate(t, e);
              a.format(u, l);
            } else c.prototype.formatAt.call(this, t, e, u, l);
          }, o.prototype.optimize = function(t) {
            c.prototype.optimize.call(this, t);
            var e = this.formats();
            if (Object.keys(e).length === 0) return this.unwrap();
            var u = this.next;
            u instanceof o && u.prev === this && y(e, u.formats()) && (u.moveChildren(this), u.remove());
          }, o.blotName = "inline", o.scope = O.Scope.INLINE_BLOT, o.tagName = "SPAN", o;
        })(w.default);
        _.default = d;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
            c.__proto__ = o;
          } || function(c, o) {
            for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
          };
          return function(c, o) {
            d(c, o);
            function t() {
              this.constructor = c;
            }
            c.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(18), O = v(1), y = (function(d) {
          P(c, d);
          function c() {
            return d !== null && d.apply(this, arguments) || this;
          }
          return c.formats = function(o) {
            var t = O.query(c.blotName).tagName;
            if (o.tagName !== t) return d.formats.call(this, o);
          }, c.prototype.format = function(o, t) {
            O.query(o, O.Scope.BLOCK) != null && (o === this.statics.blotName && !t ? this.replaceWith(c.blotName) : d.prototype.format.call(this, o, t));
          }, c.prototype.formatAt = function(o, t, e, u) {
            O.query(e, O.Scope.BLOCK) != null ? this.format(e, u) : d.prototype.formatAt.call(this, o, t, e, u);
          }, c.prototype.insertAt = function(o, t, e) {
            if (e == null || O.query(t, O.Scope.INLINE) != null) d.prototype.insertAt.call(this, o, t, e);
            else {
              var u = this.split(o), l = O.create(t, e);
              u.parent.insertBefore(l, u);
            }
          }, c.prototype.update = function(o, t) {
            navigator.userAgent.match(/Trident/) ? this.build() : d.prototype.update.call(this, o, t);
          }, c.blotName = "block", c.scope = O.Scope.BLOCK_BLOT, c.tagName = "P", c;
        })(w.default);
        _.default = y;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, c) {
            d.__proto__ = c;
          } || function(d, c) {
            for (var o in c) c.hasOwnProperty(o) && (d[o] = c[o]);
          };
          return function(d, c) {
            y(d, c);
            function o() {
              this.constructor = d;
            }
            d.prototype = c === null ? Object.create(c) : (o.prototype = c.prototype, new o());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(19), O = (function(y) {
          P(d, y);
          function d() {
            return y !== null && y.apply(this, arguments) || this;
          }
          return d.formats = function(c) {
          }, d.prototype.format = function(c, o) {
            y.prototype.formatAt.call(this, 0, this.length(), c, o);
          }, d.prototype.formatAt = function(c, o, t, e) {
            c === 0 && o === this.length() ? this.format(t, e) : y.prototype.formatAt.call(this, c, o, t, e);
          }, d.prototype.formats = function() {
            return this.statics.formats(this.domNode);
          }, d;
        })(w.default);
        _.default = O;
      }), (function(I, _, v) {
        var P = this && this.__extends || (function() {
          var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
            c.__proto__ = o;
          } || function(c, o) {
            for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
          };
          return function(c, o) {
            d(c, o);
            function t() {
              this.constructor = c;
            }
            c.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
          };
        })();
        Object.defineProperty(_, "__esModule", { value: true });
        var w = v(19), O = v(1), y = (function(d) {
          P(c, d);
          function c(o) {
            var t = d.call(this, o) || this;
            return t.text = t.statics.value(t.domNode), t;
          }
          return c.create = function(o) {
            return document.createTextNode(o);
          }, c.value = function(o) {
            var t = o.data;
            return t.normalize && (t = t.normalize()), t;
          }, c.prototype.deleteAt = function(o, t) {
            this.domNode.data = this.text = this.text.slice(0, o) + this.text.slice(o + t);
          }, c.prototype.index = function(o, t) {
            return this.domNode === o ? t : -1;
          }, c.prototype.insertAt = function(o, t, e) {
            e == null ? (this.text = this.text.slice(0, o) + t + this.text.slice(o), this.domNode.data = this.text) : d.prototype.insertAt.call(this, o, t, e);
          }, c.prototype.length = function() {
            return this.text.length;
          }, c.prototype.optimize = function(o) {
            d.prototype.optimize.call(this, o), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof c && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
          }, c.prototype.position = function(o, t) {
            return [this.domNode, o];
          }, c.prototype.split = function(o, t) {
            if (t === void 0 && (t = false), !t) {
              if (o === 0) return this;
              if (o === this.length()) return this.next;
            }
            var e = O.create(this.domNode.splitText(o));
            return this.parent.insertBefore(e, this.next), this.text = this.statics.value(this.domNode), e;
          }, c.prototype.update = function(o, t) {
            var e = this;
            o.some(function(u) {
              return u.type === "characterData" && u.target === e.domNode;
            }) && (this.text = this.statics.value(this.domNode));
          }, c.prototype.value = function() {
            return this.text;
          }, c.blotName = "text", c.scope = O.Scope.INLINE_BLOT, c;
        })(w.default);
        _.default = y;
      }), (function(I, _, v) {
        var P = document.createElement("div");
        if (P.classList.toggle("test-class", false), P.classList.contains("test-class")) {
          var w = DOMTokenList.prototype.toggle;
          DOMTokenList.prototype.toggle = function(O, y) {
            return arguments.length > 1 && !this.contains(O) == !y ? y : w.call(this, O);
          };
        }
        String.prototype.startsWith || (String.prototype.startsWith = function(O, y) {
          return y = y || 0, this.substr(y, O.length) === O;
        }), String.prototype.endsWith || (String.prototype.endsWith = function(O, y) {
          var d = this.toString();
          (typeof y != "number" || !isFinite(y) || Math.floor(y) !== y || y > d.length) && (y = d.length), y -= O.length;
          var c = d.indexOf(O, y);
          return c !== -1 && c === y;
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(y) {
          if (this === null) throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof y != "function") throw new TypeError("predicate must be a function");
          for (var d = Object(this), c = d.length >>> 0, o = arguments[1], t, e = 0; e < c; e++) if (t = d[e], y.call(o, t, e, d)) return t;
        } }), document.addEventListener("DOMContentLoaded", function() {
          document.execCommand("enableObjectResizing", false, false), document.execCommand("autoUrlDetect", false, false);
        });
      }), (function(I, _) {
        var v = -1, P = 1, w = 0;
        function O(n, s, A) {
          if (n == s) return n ? [[w, n]] : [];
          (A < 0 || n.length < A) && (A = null);
          var g = o(n, s), b = n.substring(0, g);
          n = n.substring(g), s = s.substring(g), g = t(n, s);
          var N = n.substring(n.length - g);
          n = n.substring(0, n.length - g), s = s.substring(0, s.length - g);
          var m = y(n, s);
          return b && m.unshift([w, b]), N && m.push([w, N]), u(m), A != null && (m = r(m, A)), m = i(m), m;
        }
        function y(n, s) {
          var A;
          if (!n) return [[P, s]];
          if (!s) return [[v, n]];
          var g = n.length > s.length ? n : s, b = n.length > s.length ? s : n, N = g.indexOf(b);
          if (N != -1) return A = [[P, g.substring(0, N)], [w, b], [P, g.substring(N + b.length)]], n.length > s.length && (A[0][0] = A[2][0] = v), A;
          if (b.length == 1) return [[v, n], [P, s]];
          var m = e(n, s);
          if (m) {
            var h = m[0], p = m[1], k = m[2], T = m[3], L = m[4], B = O(h, k), C = O(p, T);
            return B.concat([[w, L]], C);
          }
          return d(n, s);
        }
        function d(n, s) {
          for (var A = n.length, g = s.length, b = Math.ceil((A + g) / 2), N = b, m = 2 * b, h = new Array(m), p = new Array(m), k = 0; k < m; k++) h[k] = -1, p[k] = -1;
          h[N + 1] = 0, p[N + 1] = 0;
          for (var T = A - g, L = T % 2 != 0, B = 0, C = 0, Z = 0, M = 0, R = 0; R < b; R++) {
            for (var E = -R + B; E <= R - C; E += 2) {
              var S = N + E, q;
              E == -R || E != R && h[S - 1] < h[S + 1] ? q = h[S + 1] : q = h[S - 1] + 1;
              for (var F = q - E; q < A && F < g && n.charAt(q) == s.charAt(F); ) q++, F++;
              if (h[S] = q, q > A) C += 2;
              else if (F > g) B += 2;
              else if (L) {
                var D = N + T - E;
                if (D >= 0 && D < m && p[D] != -1) {
                  var x = A - p[D];
                  if (q >= x) return c(n, s, q, F);
                }
              }
            }
            for (var j = -R + Z; j <= R - M; j += 2) {
              var D = N + j, x;
              j == -R || j != R && p[D - 1] < p[D + 1] ? x = p[D + 1] : x = p[D - 1] + 1;
              for (var U = x - j; x < A && U < g && n.charAt(A - x - 1) == s.charAt(g - U - 1); ) x++, U++;
              if (p[D] = x, x > A) M += 2;
              else if (U > g) Z += 2;
              else if (!L) {
                var S = N + T - j;
                if (S >= 0 && S < m && h[S] != -1) {
                  var q = h[S], F = N + q - S;
                  if (x = A - x, q >= x) return c(n, s, q, F);
                }
              }
            }
          }
          return [[v, n], [P, s]];
        }
        function c(n, s, A, g) {
          var b = n.substring(0, A), N = s.substring(0, g), m = n.substring(A), h = s.substring(g), p = O(b, N), k = O(m, h);
          return p.concat(k);
        }
        function o(n, s) {
          if (!n || !s || n.charAt(0) != s.charAt(0)) return 0;
          for (var A = 0, g = Math.min(n.length, s.length), b = g, N = 0; A < b; ) n.substring(N, b) == s.substring(N, b) ? (A = b, N = A) : g = b, b = Math.floor((g - A) / 2 + A);
          return b;
        }
        function t(n, s) {
          if (!n || !s || n.charAt(n.length - 1) != s.charAt(s.length - 1)) return 0;
          for (var A = 0, g = Math.min(n.length, s.length), b = g, N = 0; A < b; ) n.substring(n.length - b, n.length - N) == s.substring(s.length - b, s.length - N) ? (A = b, N = A) : g = b, b = Math.floor((g - A) / 2 + A);
          return b;
        }
        function e(n, s) {
          var A = n.length > s.length ? n : s, g = n.length > s.length ? s : n;
          if (A.length < 4 || g.length * 2 < A.length) return null;
          function b(C, Z, M) {
            for (var R = C.substring(M, M + Math.floor(C.length / 4)), E = -1, S = "", q, F, D, x; (E = Z.indexOf(R, E + 1)) != -1; ) {
              var j = o(C.substring(M), Z.substring(E)), U = t(C.substring(0, M), Z.substring(0, E));
              S.length < U + j && (S = Z.substring(E - U, E) + Z.substring(E, E + j), q = C.substring(0, M - U), F = C.substring(M + j), D = Z.substring(0, E - U), x = Z.substring(E + j));
            }
            return S.length * 2 >= C.length ? [q, F, D, x, S] : null;
          }
          var N = b(A, g, Math.ceil(A.length / 4)), m = b(A, g, Math.ceil(A.length / 2)), h;
          if (!N && !m) return null;
          m ? N ? h = N[4].length > m[4].length ? N : m : h = m : h = N;
          var p, k, T, L;
          n.length > s.length ? (p = h[0], k = h[1], T = h[2], L = h[3]) : (T = h[0], L = h[1], p = h[2], k = h[3]);
          var B = h[4];
          return [p, k, T, L, B];
        }
        function u(n) {
          n.push([w, ""]);
          for (var s = 0, A = 0, g = 0, b = "", N = "", m; s < n.length; ) switch (n[s][0]) {
            case P:
              g++, N += n[s][1], s++;
              break;
            case v:
              A++, b += n[s][1], s++;
              break;
            case w:
              A + g > 1 ? (A !== 0 && g !== 0 && (m = o(N, b), m !== 0 && (s - A - g > 0 && n[s - A - g - 1][0] == w ? n[s - A - g - 1][1] += N.substring(0, m) : (n.splice(0, 0, [w, N.substring(0, m)]), s++), N = N.substring(m), b = b.substring(m)), m = t(N, b), m !== 0 && (n[s][1] = N.substring(N.length - m) + n[s][1], N = N.substring(0, N.length - m), b = b.substring(0, b.length - m))), A === 0 ? n.splice(s - g, A + g, [P, N]) : g === 0 ? n.splice(s - A, A + g, [v, b]) : n.splice(s - A - g, A + g, [v, b], [P, N]), s = s - A - g + (A ? 1 : 0) + (g ? 1 : 0) + 1) : s !== 0 && n[s - 1][0] == w ? (n[s - 1][1] += n[s][1], n.splice(s, 1)) : s++, g = 0, A = 0, b = "", N = "";
              break;
          }
          n[n.length - 1][1] === "" && n.pop();
          var h = false;
          for (s = 1; s < n.length - 1; ) n[s - 1][0] == w && n[s + 1][0] == w && (n[s][1].substring(n[s][1].length - n[s - 1][1].length) == n[s - 1][1] ? (n[s][1] = n[s - 1][1] + n[s][1].substring(0, n[s][1].length - n[s - 1][1].length), n[s + 1][1] = n[s - 1][1] + n[s + 1][1], n.splice(s - 1, 1), h = true) : n[s][1].substring(0, n[s + 1][1].length) == n[s + 1][1] && (n[s - 1][1] += n[s + 1][1], n[s][1] = n[s][1].substring(n[s + 1][1].length) + n[s + 1][1], n.splice(s + 1, 1), h = true)), s++;
          h && u(n);
        }
        var l = O;
        l.INSERT = P, l.DELETE = v, l.EQUAL = w, I.exports = l;
        function a(n, s) {
          if (s === 0) return [w, n];
          for (var A = 0, g = 0; g < n.length; g++) {
            var b = n[g];
            if (b[0] === v || b[0] === w) {
              var N = A + b[1].length;
              if (s === N) return [g + 1, n];
              if (s < N) {
                n = n.slice();
                var m = s - A, h = [b[0], b[1].slice(0, m)], p = [b[0], b[1].slice(m)];
                return n.splice(g, 1, h, p), [g + 1, n];
              } else A = N;
            }
          }
          throw new Error("cursor_pos is out of bounds!");
        }
        function r(n, s) {
          var A = a(n, s), g = A[1], b = A[0], N = g[b], m = g[b + 1];
          if (N == null) return n;
          if (N[0] !== w) return n;
          if (m != null && N[1] + m[1] === m[1] + N[1]) return g.splice(b, 2, m, N), f(g, b, 2);
          if (m != null && m[1].indexOf(N[1]) === 0) {
            g.splice(b, 2, [m[0], N[1]], [0, N[1]]);
            var h = m[1].slice(N[1].length);
            return h.length > 0 && g.splice(b + 2, 0, [m[0], h]), f(g, b, 3);
          } else return n;
        }
        function i(n) {
          for (var s = false, A = function(m) {
            return m.charCodeAt(0) >= 56320 && m.charCodeAt(0) <= 57343;
          }, g = function(m) {
            return m.charCodeAt(m.length - 1) >= 55296 && m.charCodeAt(m.length - 1) <= 56319;
          }, b = 2; b < n.length; b += 1) n[b - 2][0] === w && g(n[b - 2][1]) && n[b - 1][0] === v && A(n[b - 1][1]) && n[b][0] === P && A(n[b][1]) && (s = true, n[b - 1][1] = n[b - 2][1].slice(-1) + n[b - 1][1], n[b][1] = n[b - 2][1].slice(-1) + n[b][1], n[b - 2][1] = n[b - 2][1].slice(0, -1));
          if (!s) return n;
          for (var N = [], b = 0; b < n.length; b += 1) n[b][1].length > 0 && N.push(n[b]);
          return N;
        }
        function f(n, s, A) {
          for (var g = s + A - 1; g >= 0 && g >= s - 1; g--) if (g + 1 < n.length) {
            var b = n[g], N = n[g + 1];
            b[0] === N[1] && n.splice(g, 2, [b[0], b[1] + N[1]]);
          }
          return n;
        }
      }), (function(I, _) {
        _ = I.exports = typeof Object.keys == "function" ? Object.keys : v, _.shim = v;
        function v(P) {
          var w = [];
          for (var O in P) w.push(O);
          return w;
        }
      }), (function(I, _) {
        var v = (function() {
          return Object.prototype.toString.call(arguments);
        })() == "[object Arguments]";
        _ = I.exports = v ? P : w, _.supported = P;
        function P(O) {
          return Object.prototype.toString.call(O) == "[object Arguments]";
        }
        _.unsupported = w;
        function w(O) {
          return O && typeof O == "object" && typeof O.length == "number" && Object.prototype.hasOwnProperty.call(O, "callee") && !Object.prototype.propertyIsEnumerable.call(O, "callee") || false;
        }
      }), (function(I, _) {
        var v = Object.prototype.hasOwnProperty, P = "~";
        function w() {
        }
        Object.create && (w.prototype = /* @__PURE__ */ Object.create(null), new w().__proto__ || (P = false));
        function O(d, c, o) {
          this.fn = d, this.context = c, this.once = o || false;
        }
        function y() {
          this._events = new w(), this._eventsCount = 0;
        }
        y.prototype.eventNames = function() {
          var c = [], o, t;
          if (this._eventsCount === 0) return c;
          for (t in o = this._events) v.call(o, t) && c.push(P ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(o)) : c;
        }, y.prototype.listeners = function(c, o) {
          var t = P ? P + c : c, e = this._events[t];
          if (o) return !!e;
          if (!e) return [];
          if (e.fn) return [e.fn];
          for (var u = 0, l = e.length, a = new Array(l); u < l; u++) a[u] = e[u].fn;
          return a;
        }, y.prototype.emit = function(c, o, t, e, u, l) {
          var a = P ? P + c : c;
          if (!this._events[a]) return false;
          var r = this._events[a], i = arguments.length, f, n;
          if (r.fn) {
            switch (r.once && this.removeListener(c, r.fn, void 0, true), i) {
              case 1:
                return r.fn.call(r.context), true;
              case 2:
                return r.fn.call(r.context, o), true;
              case 3:
                return r.fn.call(r.context, o, t), true;
              case 4:
                return r.fn.call(r.context, o, t, e), true;
              case 5:
                return r.fn.call(r.context, o, t, e, u), true;
              case 6:
                return r.fn.call(r.context, o, t, e, u, l), true;
            }
            for (n = 1, f = new Array(i - 1); n < i; n++) f[n - 1] = arguments[n];
            r.fn.apply(r.context, f);
          } else {
            var s = r.length, A;
            for (n = 0; n < s; n++) switch (r[n].once && this.removeListener(c, r[n].fn, void 0, true), i) {
              case 1:
                r[n].fn.call(r[n].context);
                break;
              case 2:
                r[n].fn.call(r[n].context, o);
                break;
              case 3:
                r[n].fn.call(r[n].context, o, t);
                break;
              case 4:
                r[n].fn.call(r[n].context, o, t, e);
                break;
              default:
                if (!f) for (A = 1, f = new Array(i - 1); A < i; A++) f[A - 1] = arguments[A];
                r[n].fn.apply(r[n].context, f);
            }
          }
          return true;
        }, y.prototype.on = function(c, o, t) {
          var e = new O(o, t || this), u = P ? P + c : c;
          return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
        }, y.prototype.once = function(c, o, t) {
          var e = new O(o, t || this, true), u = P ? P + c : c;
          return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
        }, y.prototype.removeListener = function(c, o, t, e) {
          var u = P ? P + c : c;
          if (!this._events[u]) return this;
          if (!o) return --this._eventsCount === 0 ? this._events = new w() : delete this._events[u], this;
          var l = this._events[u];
          if (l.fn) l.fn === o && (!e || l.once) && (!t || l.context === t) && (--this._eventsCount === 0 ? this._events = new w() : delete this._events[u]);
          else {
            for (var a = 0, r = [], i = l.length; a < i; a++) (l[a].fn !== o || e && !l[a].once || t && l[a].context !== t) && r.push(l[a]);
            r.length ? this._events[u] = r.length === 1 ? r[0] : r : --this._eventsCount === 0 ? this._events = new w() : delete this._events[u];
          }
          return this;
        }, y.prototype.removeAllListeners = function(c) {
          var o;
          return c ? (o = P ? P + c : c, this._events[o] && (--this._eventsCount === 0 ? this._events = new w() : delete this._events[o])) : (this._events = new w(), this._eventsCount = 0), this;
        }, y.prototype.off = y.prototype.removeListener, y.prototype.addListener = y.prototype.on, y.prototype.setMaxListeners = function() {
          return this;
        }, y.prefixed = P, y.EventEmitter = y, typeof I < "u" && (I.exports = y);
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.matchText = _.matchSpacing = _.matchNewline = _.matchBlot = _.matchAttributor = _.default = void 0;
        var P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(z) {
          return typeof z;
        } : function(z) {
          return z && typeof Symbol == "function" && z.constructor === Symbol && z !== Symbol.prototype ? "symbol" : typeof z;
        }, w = /* @__PURE__ */ (function() {
          function z(K, W) {
            var G = [], $ = true, J = false, tt = void 0;
            try {
              for (var et = K[Symbol.iterator](), ft; !($ = (ft = et.next()).done) && (G.push(ft.value), !(W && G.length === W)); $ = true) ;
            } catch (st) {
              J = true, tt = st;
            } finally {
              try {
                !$ && et.return && et.return();
              } finally {
                if (J) throw tt;
              }
            }
            return G;
          }
          return function(K, W) {
            if (Array.isArray(K)) return K;
            if (Symbol.iterator in Object(K)) return z(K, W);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), O = /* @__PURE__ */ (function() {
          function z(K, W) {
            for (var G = 0; G < W.length; G++) {
              var $ = W[G];
              $.enumerable = $.enumerable || false, $.configurable = true, "value" in $ && ($.writable = true), Object.defineProperty(K, $.key, $);
            }
          }
          return function(K, W, G) {
            return W && z(K.prototype, W), G && z(K, G), K;
          };
        })(), y = v(3), d = p(y), c = v(2), o = p(c), t = v(0), e = p(t), u = v(5), l = p(u), a = v(10), r = p(a), i = v(9), f = p(i), n = v(36), s = v(37), A = v(13), g = p(A), b = v(26), N = v(38), m = v(39), h = v(40);
        function p(z) {
          return z && z.__esModule ? z : { default: z };
        }
        function k(z, K, W) {
          return K in z ? Object.defineProperty(z, K, { value: W, enumerable: true, configurable: true, writable: true }) : z[K] = W, z;
        }
        function T(z, K) {
          if (!(z instanceof K)) throw new TypeError("Cannot call a class as a function");
        }
        function L(z, K) {
          if (!z) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return K && (typeof K == "object" || typeof K == "function") ? K : z;
        }
        function B(z, K) {
          if (typeof K != "function" && K !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof K);
          z.prototype = Object.create(K && K.prototype, { constructor: { value: z, enumerable: false, writable: true, configurable: true } }), K && (Object.setPrototypeOf ? Object.setPrototypeOf(z, K) : z.__proto__ = K);
        }
        var C = (0, r.default)("quill:clipboard"), Z = "__ql-matcher", M = [[Node.TEXT_NODE, lt], [Node.TEXT_NODE, nt], ["br", Y], [Node.ELEMENT_NODE, nt], [Node.ELEMENT_NODE, V], [Node.ELEMENT_NODE, rt], [Node.ELEMENT_NODE, H], [Node.ELEMENT_NODE, at], ["li", Q], ["b", U.bind(U, "bold")], ["i", U.bind(U, "italic")], ["style", X]], R = [n.AlignAttribute, N.DirectionAttribute].reduce(function(z, K) {
          return z[K.keyName] = K, z;
        }, {}), E = [n.AlignStyle, s.BackgroundStyle, b.ColorStyle, N.DirectionStyle, m.FontStyle, h.SizeStyle].reduce(function(z, K) {
          return z[K.keyName] = K, z;
        }, {}), S = (function(z) {
          B(K, z);
          function K(W, G) {
            T(this, K);
            var $ = L(this, (K.__proto__ || Object.getPrototypeOf(K)).call(this, W, G));
            return $.quill.root.addEventListener("paste", $.onPaste.bind($)), $.container = $.quill.addContainer("ql-clipboard"), $.container.setAttribute("contenteditable", true), $.container.setAttribute("tabindex", -1), $.matchers = [], M.concat($.options.matchers).forEach(function(J) {
              var tt = w(J, 2), et = tt[0], ft = tt[1];
              !G.matchVisual && ft === rt || $.addMatcher(et, ft);
            }), $;
          }
          return O(K, [{ key: "addMatcher", value: function(G, $) {
            this.matchers.push([G, $]);
          } }, { key: "convert", value: function(G) {
            if (typeof G == "string") return this.container.innerHTML = G.replace(/\>\r?\n +\</g, "><"), this.convert();
            var $ = this.quill.getFormat(this.quill.selection.savedRange.index);
            if ($[g.default.blotName]) {
              var J = this.container.innerText;
              return this.container.innerHTML = "", new o.default().insert(J, k({}, g.default.blotName, $[g.default.blotName]));
            }
            var tt = this.prepareMatching(), et = w(tt, 2), ft = et[0], st = et[1], it = j(this.container, ft, st);
            return D(it, `
`) && it.ops[it.ops.length - 1].attributes == null && (it = it.compose(new o.default().retain(it.length() - 1).delete(1))), C.log("convert", this.container.innerHTML, it), this.container.innerHTML = "", it;
          } }, { key: "dangerouslyPasteHTML", value: function(G, $) {
            var J = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : l.default.sources.API;
            if (typeof G == "string") this.quill.setContents(this.convert(G), $), this.quill.setSelection(0, l.default.sources.SILENT);
            else {
              var tt = this.convert($);
              this.quill.updateContents(new o.default().retain(G).concat(tt), J), this.quill.setSelection(G + tt.length(), l.default.sources.SILENT);
            }
          } }, { key: "onPaste", value: function(G) {
            var $ = this;
            if (!(G.defaultPrevented || !this.quill.isEnabled())) {
              var J = this.quill.getSelection(), tt = new o.default().retain(J.index), et = this.quill.scrollingContainer.scrollTop;
              this.container.focus(), this.quill.selection.update(l.default.sources.SILENT), setTimeout(function() {
                tt = tt.concat($.convert()).delete(J.length), $.quill.updateContents(tt, l.default.sources.USER), $.quill.setSelection(tt.length() - J.length, l.default.sources.SILENT), $.quill.scrollingContainer.scrollTop = et, $.quill.focus();
              }, 1);
            }
          } }, { key: "prepareMatching", value: function() {
            var G = this, $ = [], J = [];
            return this.matchers.forEach(function(tt) {
              var et = w(tt, 2), ft = et[0], st = et[1];
              switch (ft) {
                case Node.TEXT_NODE:
                  J.push(st);
                  break;
                case Node.ELEMENT_NODE:
                  $.push(st);
                  break;
                default:
                  [].forEach.call(G.container.querySelectorAll(ft), function(it) {
                    it[Z] = it[Z] || [], it[Z].push(st);
                  });
                  break;
              }
            }), [$, J];
          } }]), K;
        })(f.default);
        S.DEFAULTS = { matchers: [], matchVisual: true };
        function q(z, K, W) {
          return (typeof K > "u" ? "undefined" : P(K)) === "object" ? Object.keys(K).reduce(function(G, $) {
            return q(G, $, K[$]);
          }, z) : z.reduce(function(G, $) {
            return $.attributes && $.attributes[K] ? G.push($) : G.insert($.insert, (0, d.default)({}, k({}, K, W), $.attributes));
          }, new o.default());
        }
        function F(z) {
          if (z.nodeType !== Node.ELEMENT_NODE) return {};
          var K = "__ql-computed-style";
          return z[K] || (z[K] = window.getComputedStyle(z));
        }
        function D(z, K) {
          for (var W = "", G = z.ops.length - 1; G >= 0 && W.length < K.length; --G) {
            var $ = z.ops[G];
            if (typeof $.insert != "string") break;
            W = $.insert + W;
          }
          return W.slice(-1 * K.length) === K;
        }
        function x(z) {
          if (z.childNodes.length === 0) return false;
          var K = F(z);
          return ["block", "list-item"].indexOf(K.display) > -1;
        }
        function j(z, K, W) {
          return z.nodeType === z.TEXT_NODE ? W.reduce(function(G, $) {
            return $(z, G);
          }, new o.default()) : z.nodeType === z.ELEMENT_NODE ? [].reduce.call(z.childNodes || [], function(G, $) {
            var J = j($, K, W);
            return $.nodeType === z.ELEMENT_NODE && (J = K.reduce(function(tt, et) {
              return et($, tt);
            }, J), J = ($[Z] || []).reduce(function(tt, et) {
              return et($, tt);
            }, J)), G.concat(J);
          }, new o.default()) : new o.default();
        }
        function U(z, K, W) {
          return q(W, z, true);
        }
        function H(z, K) {
          var W = e.default.Attributor.Attribute.keys(z), G = e.default.Attributor.Class.keys(z), $ = e.default.Attributor.Style.keys(z), J = {};
          return W.concat(G).concat($).forEach(function(tt) {
            var et = e.default.query(tt, e.default.Scope.ATTRIBUTE);
            et != null && (J[et.attrName] = et.value(z), J[et.attrName]) || (et = R[tt], et != null && (et.attrName === tt || et.keyName === tt) && (J[et.attrName] = et.value(z) || void 0), et = E[tt], et != null && (et.attrName === tt || et.keyName === tt) && (et = E[tt], J[et.attrName] = et.value(z) || void 0));
          }), Object.keys(J).length > 0 && (K = q(K, J)), K;
        }
        function V(z, K) {
          var W = e.default.query(z);
          if (W == null) return K;
          if (W.prototype instanceof e.default.Embed) {
            var G = {}, $ = W.value(z);
            $ != null && (G[W.blotName] = $, K = new o.default().insert(G, W.formats(z)));
          } else typeof W.formats == "function" && (K = q(K, W.blotName, W.formats(z)));
          return K;
        }
        function Y(z, K) {
          return D(K, `
`) || K.insert(`
`), K;
        }
        function X() {
          return new o.default();
        }
        function Q(z, K) {
          var W = e.default.query(z);
          if (W == null || W.blotName !== "list-item" || !D(K, `
`)) return K;
          for (var G = -1, $ = z.parentNode; !$.classList.contains("ql-clipboard"); ) (e.default.query($) || {}).blotName === "list" && (G += 1), $ = $.parentNode;
          return G <= 0 ? K : K.compose(new o.default().retain(K.length() - 1).retain(1, { indent: G }));
        }
        function nt(z, K) {
          return D(K, `
`) || (x(z) || K.length() > 0 && z.nextSibling && x(z.nextSibling)) && K.insert(`
`), K;
        }
        function rt(z, K) {
          if (x(z) && z.nextElementSibling != null && !D(K, `

`)) {
            var W = z.offsetHeight + parseFloat(F(z).marginTop) + parseFloat(F(z).marginBottom);
            z.nextElementSibling.offsetTop > z.offsetTop + W * 1.5 && K.insert(`
`);
          }
          return K;
        }
        function at(z, K) {
          var W = {}, G = z.style || {};
          return G.fontStyle && F(z).fontStyle === "italic" && (W.italic = true), G.fontWeight && (F(z).fontWeight.startsWith("bold") || parseInt(F(z).fontWeight) >= 700) && (W.bold = true), Object.keys(W).length > 0 && (K = q(K, W)), parseFloat(G.textIndent || 0) > 0 && (K = new o.default().insert("	").concat(K)), K;
        }
        function lt(z, K) {
          var W = z.data;
          if (z.parentNode.tagName === "O:P") return K.insert(W.trim());
          if (W.trim().length === 0 && z.parentNode.classList.contains("ql-clipboard")) return K;
          if (!F(z.parentNode).whiteSpace.startsWith("pre")) {
            var G = function(J, tt) {
              return tt = tt.replace(/[^\u00a0]/g, ""), tt.length < 1 && J ? " " : tt;
            };
            W = W.replace(/\r\n/g, " ").replace(/\n/g, " "), W = W.replace(/\s\s+/g, G.bind(G, true)), (z.previousSibling == null && x(z.parentNode) || z.previousSibling != null && x(z.previousSibling)) && (W = W.replace(/^\s+/, G.bind(G, false))), (z.nextSibling == null && x(z.parentNode) || z.nextSibling != null && x(z.nextSibling)) && (W = W.replace(/\s+$/, G.bind(G, false)));
          }
          return K.insert(W);
        }
        _.default = S, _.matchAttributor = H, _.matchBlot = V, _.matchNewline = nt, _.matchSpacing = rt, _.matchText = lt;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function u(l, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(l, i.key, i);
            }
          }
          return function(l, a, r) {
            return a && u(l.prototype, a), r && u(l, r), l;
          };
        })(), w = function u(l, a, r) {
          l === null && (l = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(l, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(l);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i) return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, O = v(6), y = d(O);
        function d(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l)) throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
          u.prototype = Object.create(l && l.prototype, { constructor: { value: u, enumerable: false, writable: true, configurable: true } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : u.__proto__ = l);
        }
        var e = (function(u) {
          t(l, u);
          function l() {
            return c(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
          }
          return P(l, [{ key: "optimize", value: function(r) {
            w(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "optimize", this).call(this, r), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
          } }], [{ key: "create", value: function() {
            return w(l.__proto__ || Object.getPrototypeOf(l), "create", this).call(this);
          } }, { key: "formats", value: function() {
            return true;
          } }]), l;
        })(y.default);
        e.blotName = "bold", e.tagName = ["STRONG", "B"], _.default = e;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.addControls = _.default = void 0;
        var P = /* @__PURE__ */ (function() {
          function h(p, k) {
            var T = [], L = true, B = false, C = void 0;
            try {
              for (var Z = p[Symbol.iterator](), M; !(L = (M = Z.next()).done) && (T.push(M.value), !(k && T.length === k)); L = true) ;
            } catch (R) {
              B = true, C = R;
            } finally {
              try {
                !L && Z.return && Z.return();
              } finally {
                if (B) throw C;
              }
            }
            return T;
          }
          return function(p, k) {
            if (Array.isArray(p)) return p;
            if (Symbol.iterator in Object(p)) return h(p, k);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), w = /* @__PURE__ */ (function() {
          function h(p, k) {
            for (var T = 0; T < k.length; T++) {
              var L = k[T];
              L.enumerable = L.enumerable || false, L.configurable = true, "value" in L && (L.writable = true), Object.defineProperty(p, L.key, L);
            }
          }
          return function(p, k, T) {
            return k && h(p.prototype, k), T && h(p, T), p;
          };
        })(), O = v(2), y = r(O), d = v(0), c = r(d), o = v(5), t = r(o), e = v(10), u = r(e), l = v(9), a = r(l);
        function r(h) {
          return h && h.__esModule ? h : { default: h };
        }
        function i(h, p, k) {
          return p in h ? Object.defineProperty(h, p, { value: k, enumerable: true, configurable: true, writable: true }) : h[p] = k, h;
        }
        function f(h, p) {
          if (!(h instanceof p)) throw new TypeError("Cannot call a class as a function");
        }
        function n(h, p) {
          if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return p && (typeof p == "object" || typeof p == "function") ? p : h;
        }
        function s(h, p) {
          if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof p);
          h.prototype = Object.create(p && p.prototype, { constructor: { value: h, enumerable: false, writable: true, configurable: true } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(h, p) : h.__proto__ = p);
        }
        var A = (0, u.default)("quill:toolbar"), g = (function(h) {
          s(p, h);
          function p(k, T) {
            f(this, p);
            var L = n(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, k, T));
            if (Array.isArray(L.options.container)) {
              var B = document.createElement("div");
              N(B, L.options.container), k.container.parentNode.insertBefore(B, k.container), L.container = B;
            } else typeof L.options.container == "string" ? L.container = document.querySelector(L.options.container) : L.container = L.options.container;
            if (!(L.container instanceof HTMLElement)) {
              var C;
              return C = A.error("Container required for toolbar", L.options), n(L, C);
            }
            return L.container.classList.add("ql-toolbar"), L.controls = [], L.handlers = {}, Object.keys(L.options.handlers).forEach(function(Z) {
              L.addHandler(Z, L.options.handlers[Z]);
            }), [].forEach.call(L.container.querySelectorAll("button, select"), function(Z) {
              L.attach(Z);
            }), L.quill.on(t.default.events.EDITOR_CHANGE, function(Z, M) {
              Z === t.default.events.SELECTION_CHANGE && L.update(M);
            }), L.quill.on(t.default.events.SCROLL_OPTIMIZE, function() {
              var Z = L.quill.selection.getRange(), M = P(Z, 1), R = M[0];
              L.update(R);
            }), L;
          }
          return w(p, [{ key: "addHandler", value: function(T, L) {
            this.handlers[T] = L;
          } }, { key: "attach", value: function(T) {
            var L = this, B = [].find.call(T.classList, function(Z) {
              return Z.indexOf("ql-") === 0;
            });
            if (B) {
              if (B = B.slice(3), T.tagName === "BUTTON" && T.setAttribute("type", "button"), this.handlers[B] == null) {
                if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[B] == null) {
                  A.warn("ignoring attaching to disabled format", B, T);
                  return;
                }
                if (c.default.query(B) == null) {
                  A.warn("ignoring attaching to nonexistent format", B, T);
                  return;
                }
              }
              var C = T.tagName === "SELECT" ? "change" : "click";
              T.addEventListener(C, function(Z) {
                var M = void 0;
                if (T.tagName === "SELECT") {
                  if (T.selectedIndex < 0) return;
                  var R = T.options[T.selectedIndex];
                  R.hasAttribute("selected") ? M = false : M = R.value || false;
                } else T.classList.contains("ql-active") ? M = false : M = T.value || !T.hasAttribute("value"), Z.preventDefault();
                L.quill.focus();
                var E = L.quill.selection.getRange(), S = P(E, 1), q = S[0];
                if (L.handlers[B] != null) L.handlers[B].call(L, M);
                else if (c.default.query(B).prototype instanceof c.default.Embed) {
                  if (M = prompt("Enter " + B), !M) return;
                  L.quill.updateContents(new y.default().retain(q.index).delete(q.length).insert(i({}, B, M)), t.default.sources.USER);
                } else L.quill.format(B, M, t.default.sources.USER);
                L.update(q);
              }), this.controls.push([B, T]);
            }
          } }, { key: "update", value: function(T) {
            var L = T == null ? {} : this.quill.getFormat(T);
            this.controls.forEach(function(B) {
              var C = P(B, 2), Z = C[0], M = C[1];
              if (M.tagName === "SELECT") {
                var R = void 0;
                if (T == null) R = null;
                else if (L[Z] == null) R = M.querySelector("option[selected]");
                else if (!Array.isArray(L[Z])) {
                  var E = L[Z];
                  typeof E == "string" && (E = E.replace(/\"/g, '\\"')), R = M.querySelector('option[value="' + E + '"]');
                }
                R == null ? (M.value = "", M.selectedIndex = -1) : R.selected = true;
              } else if (T == null) M.classList.remove("ql-active");
              else if (M.hasAttribute("value")) {
                var S = L[Z] === M.getAttribute("value") || L[Z] != null && L[Z].toString() === M.getAttribute("value") || L[Z] == null && !M.getAttribute("value");
                M.classList.toggle("ql-active", S);
              } else M.classList.toggle("ql-active", L[Z] != null);
            });
          } }]), p;
        })(a.default);
        g.DEFAULTS = {};
        function b(h, p, k) {
          var T = document.createElement("button");
          T.setAttribute("type", "button"), T.classList.add("ql-" + p), k != null && (T.value = k), h.appendChild(T);
        }
        function N(h, p) {
          Array.isArray(p[0]) || (p = [p]), p.forEach(function(k) {
            var T = document.createElement("span");
            T.classList.add("ql-formats"), k.forEach(function(L) {
              if (typeof L == "string") b(T, L);
              else {
                var B = Object.keys(L)[0], C = L[B];
                Array.isArray(C) ? m(T, B, C) : b(T, B, C);
              }
            }), h.appendChild(T);
          });
        }
        function m(h, p, k) {
          var T = document.createElement("select");
          T.classList.add("ql-" + p), k.forEach(function(L) {
            var B = document.createElement("option");
            L !== false ? B.setAttribute("value", L) : B.setAttribute("selected", "selected"), T.appendChild(B);
          }), h.appendChild(T);
        }
        g.DEFAULTS = { container: null, handlers: { clean: function() {
          var p = this, k = this.quill.getSelection();
          if (k != null) if (k.length == 0) {
            var T = this.quill.getFormat();
            Object.keys(T).forEach(function(L) {
              c.default.query(L, c.default.Scope.INLINE) != null && p.quill.format(L, false);
            });
          } else this.quill.removeFormat(k, t.default.sources.USER);
        }, direction: function(p) {
          var k = this.quill.getFormat().align;
          p === "rtl" && k == null ? this.quill.format("align", "right", t.default.sources.USER) : !p && k === "right" && this.quill.format("align", false, t.default.sources.USER), this.quill.format("direction", p, t.default.sources.USER);
        }, indent: function(p) {
          var k = this.quill.getSelection(), T = this.quill.getFormat(k), L = parseInt(T.indent || 0);
          if (p === "+1" || p === "-1") {
            var B = p === "+1" ? 1 : -1;
            T.direction === "rtl" && (B *= -1), this.quill.format("indent", L + B, t.default.sources.USER);
          }
        }, link: function(p) {
          p === true && (p = prompt("Enter link URL:")), this.quill.format("link", p, t.default.sources.USER);
        }, list: function(p) {
          var k = this.quill.getSelection(), T = this.quill.getFormat(k);
          p === "check" ? T.list === "checked" || T.list === "unchecked" ? this.quill.format("list", false, t.default.sources.USER) : this.quill.format("list", "unchecked", t.default.sources.USER) : this.quill.format("list", p, t.default.sources.USER);
        } } }, _.default = g, _.addControls = N;
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function u(l, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(l, i.key, i);
            }
          }
          return function(l, a, r) {
            return a && u(l.prototype, a), r && u(l, r), l;
          };
        })(), w = function u(l, a, r) {
          l === null && (l = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(l, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(l);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i) return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, O = v(28), y = d(O);
        function d(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l)) throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
          u.prototype = Object.create(l && l.prototype, { constructor: { value: u, enumerable: false, writable: true, configurable: true } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : u.__proto__ = l);
        }
        var e = (function(u) {
          t(l, u);
          function l(a, r) {
            c(this, l);
            var i = o(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, a));
            return i.label.innerHTML = r, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(f) {
              f.classList.add("ql-primary");
            }), i;
          }
          return P(l, [{ key: "buildItem", value: function(r) {
            var i = w(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "buildItem", this).call(this, r);
            return i.style.backgroundColor = r.getAttribute("value") || "", i;
          } }, { key: "selectItem", value: function(r, i) {
            w(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "selectItem", this).call(this, r, i);
            var f = this.label.querySelector(".ql-color-label"), n = r && r.getAttribute("data-value") || "";
            f && (f.tagName === "line" ? f.style.stroke = n : f.style.fill = n);
          } }]), l;
        })(y.default);
        _.default = e;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function u(l, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(l, i.key, i);
            }
          }
          return function(l, a, r) {
            return a && u(l.prototype, a), r && u(l, r), l;
          };
        })(), w = function u(l, a, r) {
          l === null && (l = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(l, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(l);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i) return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, O = v(28), y = d(O);
        function d(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l)) throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
          u.prototype = Object.create(l && l.prototype, { constructor: { value: u, enumerable: false, writable: true, configurable: true } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : u.__proto__ = l);
        }
        var e = (function(u) {
          t(l, u);
          function l(a, r) {
            c(this, l);
            var i = o(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, a));
            return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function(f) {
              f.innerHTML = r[f.getAttribute("data-value") || ""];
            }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i;
          }
          return P(l, [{ key: "selectItem", value: function(r, i) {
            w(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "selectItem", this).call(this, r, i), r = r || this.defaultItem, this.label.innerHTML = r.innerHTML;
          } }]), l;
        })(y.default);
        _.default = e;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function y(d, c) {
            for (var o = 0; o < c.length; o++) {
              var t = c[o];
              t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(d, t.key, t);
            }
          }
          return function(d, c, o) {
            return c && y(d.prototype, c), o && y(d, o), d;
          };
        })();
        function w(y, d) {
          if (!(y instanceof d)) throw new TypeError("Cannot call a class as a function");
        }
        var O = (function() {
          function y(d, c) {
            var o = this;
            w(this, y), this.quill = d, this.boundsContainer = c || document.body, this.root = d.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
              o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px";
            }), this.hide();
          }
          return P(y, [{ key: "hide", value: function() {
            this.root.classList.add("ql-hidden");
          } }, { key: "position", value: function(c) {
            var o = c.left + c.width / 2 - this.root.offsetWidth / 2, t = c.bottom + this.quill.root.scrollTop;
            this.root.style.left = o + "px", this.root.style.top = t + "px", this.root.classList.remove("ql-flip");
            var e = this.boundsContainer.getBoundingClientRect(), u = this.root.getBoundingClientRect(), l = 0;
            if (u.right > e.right && (l = e.right - u.right, this.root.style.left = o + l + "px"), u.left < e.left && (l = e.left - u.left, this.root.style.left = o + l + "px"), u.bottom > e.bottom) {
              var a = u.bottom - u.top, r = c.bottom - c.top + a;
              this.root.style.top = t - r + "px", this.root.classList.add("ql-flip");
            }
            return l;
          } }, { key: "show", value: function() {
            this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
          } }]), y;
        })();
        _.default = O;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function m(h, p) {
            var k = [], T = true, L = false, B = void 0;
            try {
              for (var C = h[Symbol.iterator](), Z; !(T = (Z = C.next()).done) && (k.push(Z.value), !(p && k.length === p)); T = true) ;
            } catch (M) {
              L = true, B = M;
            } finally {
              try {
                !T && C.return && C.return();
              } finally {
                if (L) throw B;
              }
            }
            return k;
          }
          return function(h, p) {
            if (Array.isArray(h)) return h;
            if (Symbol.iterator in Object(h)) return m(h, p);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(), w = function m(h, p, k) {
          h === null && (h = Function.prototype);
          var T = Object.getOwnPropertyDescriptor(h, p);
          if (T === void 0) {
            var L = Object.getPrototypeOf(h);
            return L === null ? void 0 : m(L, p, k);
          } else {
            if ("value" in T) return T.value;
            var B = T.get;
            return B === void 0 ? void 0 : B.call(k);
          }
        }, O = /* @__PURE__ */ (function() {
          function m(h, p) {
            for (var k = 0; k < p.length; k++) {
              var T = p[k];
              T.enumerable = T.enumerable || false, T.configurable = true, "value" in T && (T.writable = true), Object.defineProperty(h, T.key, T);
            }
          }
          return function(h, p, k) {
            return p && m(h.prototype, p), k && m(h, k), h;
          };
        })(), y = v(3), d = f(y), c = v(8), o = f(c), t = v(43), e = f(t), u = v(27), l = f(u), a = v(15), r = v(41), i = f(r);
        function f(m) {
          return m && m.__esModule ? m : { default: m };
        }
        function n(m, h) {
          if (!(m instanceof h)) throw new TypeError("Cannot call a class as a function");
        }
        function s(m, h) {
          if (!m) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return h && (typeof h == "object" || typeof h == "function") ? h : m;
        }
        function A(m, h) {
          if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
          m.prototype = Object.create(h && h.prototype, { constructor: { value: m, enumerable: false, writable: true, configurable: true } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(m, h) : m.__proto__ = h);
        }
        var g = [[{ header: ["1", "2", "3", false] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], b = (function(m) {
          A(h, m);
          function h(p, k) {
            n(this, h), k.modules.toolbar != null && k.modules.toolbar.container == null && (k.modules.toolbar.container = g);
            var T = s(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, p, k));
            return T.quill.container.classList.add("ql-snow"), T;
          }
          return O(h, [{ key: "extendToolbar", value: function(k) {
            k.container.classList.add("ql-snow"), this.buildButtons([].slice.call(k.container.querySelectorAll("button")), i.default), this.buildPickers([].slice.call(k.container.querySelectorAll("select")), i.default), this.tooltip = new N(this.quill, this.options.bounds), k.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: true }, function(T, L) {
              k.handlers.link.call(k, !L.format.link);
            });
          } }]), h;
        })(e.default);
        b.DEFAULTS = (0, d.default)(true, {}, e.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function(h) {
          if (h) {
            var p = this.quill.getSelection();
            if (p == null || p.length == 0) return;
            var k = this.quill.getText(p);
            /^\S+@\S+\.\S+$/.test(k) && k.indexOf("mailto:") !== 0 && (k = "mailto:" + k);
            var T = this.quill.theme.tooltip;
            T.edit("link", k);
          } else this.quill.format("link", false);
        } } } } });
        var N = (function(m) {
          A(h, m);
          function h(p, k) {
            n(this, h);
            var T = s(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, p, k));
            return T.preview = T.root.querySelector("a.ql-preview"), T;
          }
          return O(h, [{ key: "listen", value: function() {
            var k = this;
            w(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(T) {
              k.root.classList.contains("ql-editing") ? k.save() : k.edit("link", k.preview.textContent), T.preventDefault();
            }), this.root.querySelector("a.ql-remove").addEventListener("click", function(T) {
              if (k.linkRange != null) {
                var L = k.linkRange;
                k.restoreFocus(), k.quill.formatText(L, "link", false, o.default.sources.USER), delete k.linkRange;
              }
              T.preventDefault(), k.hide();
            }), this.quill.on(o.default.events.SELECTION_CHANGE, function(T, L, B) {
              if (T != null) {
                if (T.length === 0 && B === o.default.sources.USER) {
                  var C = k.quill.scroll.descendant(l.default, T.index), Z = P(C, 2), M = Z[0], R = Z[1];
                  if (M != null) {
                    k.linkRange = new a.Range(T.index - R, M.length());
                    var E = l.default.formats(M.domNode);
                    k.preview.textContent = E, k.preview.setAttribute("href", E), k.show(), k.position(k.quill.getBounds(k.linkRange));
                    return;
                  }
                } else delete k.linkRange;
                k.hide();
              }
            });
          } }, { key: "show", value: function() {
            w(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
          } }]), h;
        })(t.BaseTooltip);
        N.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), _.default = b;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(29), w = $(P), O = v(36), y = v(38), d = v(64), c = v(65), o = $(c), t = v(66), e = $(t), u = v(67), l = $(u), a = v(37), r = v(26), i = v(39), f = v(40), n = v(56), s = $(n), A = v(68), g = $(A), b = v(27), N = $(b), m = v(69), h = $(m), p = v(70), k = $(p), T = v(71), L = $(T), B = v(72), C = $(B), Z = v(73), M = $(Z), R = v(13), E = $(R), S = v(74), q = $(S), F = v(75), D = $(F), x = v(57), j = $(x), U = v(41), H = $(U), V = v(28), Y = $(V), X = v(59), Q = $(X), nt = v(60), rt = $(nt), at = v(61), lt = $(at), z = v(108), K = $(z), W = v(62), G = $(W);
        function $(J) {
          return J && J.__esModule ? J : { default: J };
        }
        w.default.register({ "attributors/attribute/direction": y.DirectionAttribute, "attributors/class/align": O.AlignClass, "attributors/class/background": a.BackgroundClass, "attributors/class/color": r.ColorClass, "attributors/class/direction": y.DirectionClass, "attributors/class/font": i.FontClass, "attributors/class/size": f.SizeClass, "attributors/style/align": O.AlignStyle, "attributors/style/background": a.BackgroundStyle, "attributors/style/color": r.ColorStyle, "attributors/style/direction": y.DirectionStyle, "attributors/style/font": i.FontStyle, "attributors/style/size": f.SizeStyle }, true), w.default.register({ "formats/align": O.AlignClass, "formats/direction": y.DirectionClass, "formats/indent": d.IndentClass, "formats/background": a.BackgroundStyle, "formats/color": r.ColorStyle, "formats/font": i.FontClass, "formats/size": f.SizeClass, "formats/blockquote": o.default, "formats/code-block": E.default, "formats/header": e.default, "formats/list": l.default, "formats/bold": s.default, "formats/code": R.Code, "formats/italic": g.default, "formats/link": N.default, "formats/script": h.default, "formats/strike": k.default, "formats/underline": L.default, "formats/image": C.default, "formats/video": M.default, "formats/list/item": u.ListItem, "modules/formula": q.default, "modules/syntax": D.default, "modules/toolbar": j.default, "themes/bubble": K.default, "themes/snow": G.default, "ui/icons": H.default, "ui/picker": Y.default, "ui/icon-picker": rt.default, "ui/color-picker": Q.default, "ui/tooltip": lt.default }, true), _.default = w.default;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.IndentClass = void 0;
        var P = /* @__PURE__ */ (function() {
          function l(a, r) {
            for (var i = 0; i < r.length; i++) {
              var f = r[i];
              f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(a, f.key, f);
            }
          }
          return function(a, r, i) {
            return r && l(a.prototype, r), i && l(a, i), a;
          };
        })(), w = function l(a, r, i) {
          a === null && (a = Function.prototype);
          var f = Object.getOwnPropertyDescriptor(a, r);
          if (f === void 0) {
            var n = Object.getPrototypeOf(a);
            return n === null ? void 0 : l(n, r, i);
          } else {
            if ("value" in f) return f.value;
            var s = f.get;
            return s === void 0 ? void 0 : s.call(i);
          }
        }, O = v(0), y = d(O);
        function d(l) {
          return l && l.__esModule ? l : { default: l };
        }
        function c(l, a) {
          if (!(l instanceof a)) throw new TypeError("Cannot call a class as a function");
        }
        function o(l, a) {
          if (!l) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return a && (typeof a == "object" || typeof a == "function") ? a : l;
        }
        function t(l, a) {
          if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
          l.prototype = Object.create(a && a.prototype, { constructor: { value: l, enumerable: false, writable: true, configurable: true } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(l, a) : l.__proto__ = a);
        }
        var e = (function(l) {
          t(a, l);
          function a() {
            return c(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
          }
          return P(a, [{ key: "add", value: function(i, f) {
            if (f === "+1" || f === "-1") {
              var n = this.value(i) || 0;
              f = f === "+1" ? n + 1 : n - 1;
            }
            return f === 0 ? (this.remove(i), true) : w(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "add", this).call(this, i, f);
          } }, { key: "canAdd", value: function(i, f) {
            return w(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "canAdd", this).call(this, i, f) || w(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "canAdd", this).call(this, i, parseInt(f));
          } }, { key: "value", value: function(i) {
            return parseInt(w(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "value", this).call(this, i)) || void 0;
          } }]), a;
        })(y.default.Attributor.Class), u = new e("indent", "ql-indent", { scope: y.default.Scope.BLOCK, whitelist: [1, 2, 3, 4, 5, 6, 7, 8] });
        _.IndentClass = u;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(4), w = O(P);
        function O(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function y(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function d(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var o = (function(t) {
          c(e, t);
          function e() {
            return y(this, e), d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        })(w.default);
        o.blotName = "blockquote", o.tagName = "blockquote", _.default = o;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function e(u, l) {
            for (var a = 0; a < l.length; a++) {
              var r = l[a];
              r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(u, r.key, r);
            }
          }
          return function(u, l, a) {
            return l && e(u.prototype, l), a && e(u, a), u;
          };
        })(), w = v(4), O = y(w);
        function y(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function d(e, u) {
          if (!(e instanceof u)) throw new TypeError("Cannot call a class as a function");
        }
        function c(e, u) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return u && (typeof u == "object" || typeof u == "function") ? u : e;
        }
        function o(e, u) {
          if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof u);
          e.prototype = Object.create(u && u.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : e.__proto__ = u);
        }
        var t = (function(e) {
          o(u, e);
          function u() {
            return d(this, u), c(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
          }
          return P(u, null, [{ key: "formats", value: function(a) {
            return this.tagName.indexOf(a.tagName) + 1;
          } }]), u;
        })(O.default);
        t.blotName = "header", t.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], _.default = t;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.ListItem = void 0;
        var P = /* @__PURE__ */ (function() {
          function n(s, A) {
            for (var g = 0; g < A.length; g++) {
              var b = A[g];
              b.enumerable = b.enumerable || false, b.configurable = true, "value" in b && (b.writable = true), Object.defineProperty(s, b.key, b);
            }
          }
          return function(s, A, g) {
            return A && n(s.prototype, A), g && n(s, g), s;
          };
        })(), w = function n(s, A, g) {
          s === null && (s = Function.prototype);
          var b = Object.getOwnPropertyDescriptor(s, A);
          if (b === void 0) {
            var N = Object.getPrototypeOf(s);
            return N === null ? void 0 : n(N, A, g);
          } else {
            if ("value" in b) return b.value;
            var m = b.get;
            return m === void 0 ? void 0 : m.call(g);
          }
        }, O = v(0), y = e(O), d = v(4), c = e(d), o = v(25), t = e(o);
        function e(n) {
          return n && n.__esModule ? n : { default: n };
        }
        function u(n, s, A) {
          return s in n ? Object.defineProperty(n, s, { value: A, enumerable: true, configurable: true, writable: true }) : n[s] = A, n;
        }
        function l(n, s) {
          if (!(n instanceof s)) throw new TypeError("Cannot call a class as a function");
        }
        function a(n, s) {
          if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return s && (typeof s == "object" || typeof s == "function") ? s : n;
        }
        function r(n, s) {
          if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof s);
          n.prototype = Object.create(s && s.prototype, { constructor: { value: n, enumerable: false, writable: true, configurable: true } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(n, s) : n.__proto__ = s);
        }
        var i = (function(n) {
          r(s, n);
          function s() {
            return l(this, s), a(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
          }
          return P(s, [{ key: "format", value: function(g, b) {
            g === f.blotName && !b ? this.replaceWith(y.default.create(this.statics.scope)) : w(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "format", this).call(this, g, b);
          } }, { key: "remove", value: function() {
            this.prev == null && this.next == null ? this.parent.remove() : w(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "remove", this).call(this);
          } }, { key: "replaceWith", value: function(g, b) {
            return this.parent.isolate(this.offset(this.parent), this.length()), g === this.parent.statics.blotName ? (this.parent.replaceWith(g, b), this) : (this.parent.unwrap(), w(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "replaceWith", this).call(this, g, b));
          } }], [{ key: "formats", value: function(g) {
            return g.tagName === this.tagName ? void 0 : w(s.__proto__ || Object.getPrototypeOf(s), "formats", this).call(this, g);
          } }]), s;
        })(c.default);
        i.blotName = "list-item", i.tagName = "LI";
        var f = (function(n) {
          r(s, n), P(s, null, [{ key: "create", value: function(g) {
            var b = g === "ordered" ? "OL" : "UL", N = w(s.__proto__ || Object.getPrototypeOf(s), "create", this).call(this, b);
            return (g === "checked" || g === "unchecked") && N.setAttribute("data-checked", g === "checked"), N;
          } }, { key: "formats", value: function(g) {
            if (g.tagName === "OL") return "ordered";
            if (g.tagName === "UL") return g.hasAttribute("data-checked") ? g.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
          } }]);
          function s(A) {
            l(this, s);
            var g = a(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, A)), b = function(m) {
              if (m.target.parentNode === A) {
                var h = g.statics.formats(A), p = y.default.find(m.target);
                h === "checked" ? p.format("list", "unchecked") : h === "unchecked" && p.format("list", "checked");
              }
            };
            return A.addEventListener("touchstart", b), A.addEventListener("mousedown", b), g;
          }
          return P(s, [{ key: "format", value: function(g, b) {
            this.children.length > 0 && this.children.tail.format(g, b);
          } }, { key: "formats", value: function() {
            return u({}, this.statics.blotName, this.statics.formats(this.domNode));
          } }, { key: "insertBefore", value: function(g, b) {
            if (g instanceof i) w(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "insertBefore", this).call(this, g, b);
            else {
              var N = b == null ? this.length() : b.offset(this), m = this.split(N);
              m.parent.insertBefore(g, m);
            }
          } }, { key: "optimize", value: function(g) {
            w(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "optimize", this).call(this, g);
            var b = this.next;
            b != null && b.prev === this && b.statics.blotName === this.statics.blotName && b.domNode.tagName === this.domNode.tagName && b.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (b.moveChildren(this), b.remove());
          } }, { key: "replace", value: function(g) {
            if (g.statics.blotName !== this.statics.blotName) {
              var b = y.default.create(this.statics.defaultChild);
              g.moveChildren(b), this.appendChild(b);
            }
            w(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "replace", this).call(this, g);
          } }]), s;
        })(t.default);
        f.blotName = "list", f.scope = y.default.Scope.BLOCK_BLOT, f.tagName = ["OL", "UL"], f.defaultChild = "list-item", f.allowedChildren = [i], _.ListItem = i, _.default = f;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(56), w = O(P);
        function O(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function y(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function d(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var o = (function(t) {
          c(e, t);
          function e() {
            return y(this, e), d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        })(w.default);
        o.blotName = "italic", o.tagName = ["EM", "I"], _.default = o;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function u(l, a) {
            for (var r = 0; r < a.length; r++) {
              var i = a[r];
              i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(l, i.key, i);
            }
          }
          return function(l, a, r) {
            return a && u(l.prototype, a), r && u(l, r), l;
          };
        })(), w = function u(l, a, r) {
          l === null && (l = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(l, a);
          if (i === void 0) {
            var f = Object.getPrototypeOf(l);
            return f === null ? void 0 : u(f, a, r);
          } else {
            if ("value" in i) return i.value;
            var n = i.get;
            return n === void 0 ? void 0 : n.call(r);
          }
        }, O = v(6), y = d(O);
        function d(u) {
          return u && u.__esModule ? u : { default: u };
        }
        function c(u, l) {
          if (!(u instanceof l)) throw new TypeError("Cannot call a class as a function");
        }
        function o(u, l) {
          if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return l && (typeof l == "object" || typeof l == "function") ? l : u;
        }
        function t(u, l) {
          if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
          u.prototype = Object.create(l && l.prototype, { constructor: { value: u, enumerable: false, writable: true, configurable: true } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : u.__proto__ = l);
        }
        var e = (function(u) {
          t(l, u);
          function l() {
            return c(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
          }
          return P(l, null, [{ key: "create", value: function(r) {
            return r === "super" ? document.createElement("sup") : r === "sub" ? document.createElement("sub") : w(l.__proto__ || Object.getPrototypeOf(l), "create", this).call(this, r);
          } }, { key: "formats", value: function(r) {
            if (r.tagName === "SUB") return "sub";
            if (r.tagName === "SUP") return "super";
          } }]), l;
        })(y.default);
        e.blotName = "script", e.tagName = ["SUB", "SUP"], _.default = e;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(6), w = O(P);
        function O(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function y(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function d(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var o = (function(t) {
          c(e, t);
          function e() {
            return y(this, e), d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        })(w.default);
        o.blotName = "strike", o.tagName = "S", _.default = o;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = v(6), w = O(P);
        function O(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function y(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function d(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e && (typeof e == "object" || typeof e == "function") ? e : t;
        }
        function c(t, e) {
          if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var o = (function(t) {
          c(e, t);
          function e() {
            return y(this, e), d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }
          return e;
        })(w.default);
        o.blotName = "underline", o.tagName = "U", _.default = o;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        })(), w = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var s = Object.getPrototypeOf(r);
            return s === null ? void 0 : a(s, i, f);
          } else {
            if ("value" in n) return n.value;
            var A = n.get;
            return A === void 0 ? void 0 : A.call(f);
          }
        }, O = v(0), y = c(O), d = v(27);
        function c(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function o(a, r) {
          if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
        }
        function t(a, r) {
          if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function e(a, r) {
          if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          a.prototype = Object.create(r && r.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }
        var u = ["alt", "height", "width"], l = (function(a) {
          e(r, a);
          function r() {
            return o(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return P(r, [{ key: "format", value: function(f, n) {
            u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : w(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
          } }], [{ key: "create", value: function(f) {
            var n = w(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
            return typeof f == "string" && n.setAttribute("src", this.sanitize(f)), n;
          } }, { key: "formats", value: function(f) {
            return u.reduce(function(n, s) {
              return f.hasAttribute(s) && (n[s] = f.getAttribute(s)), n;
            }, {});
          } }, { key: "match", value: function(f) {
            return /\.(jpe?g|gif|png)$/.test(f) || /^data:image\/.+;base64/.test(f);
          } }, { key: "sanitize", value: function(f) {
            return (0, d.sanitize)(f, ["http", "https", "data"]) ? f : "//:0";
          } }, { key: "value", value: function(f) {
            return f.getAttribute("src");
          } }]), r;
        })(y.default.Embed);
        l.blotName = "image", l.tagName = "IMG", _.default = l;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true });
        var P = /* @__PURE__ */ (function() {
          function a(r, i) {
            for (var f = 0; f < i.length; f++) {
              var n = i[f];
              n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(r, n.key, n);
            }
          }
          return function(r, i, f) {
            return i && a(r.prototype, i), f && a(r, f), r;
          };
        })(), w = function a(r, i, f) {
          r === null && (r = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(r, i);
          if (n === void 0) {
            var s = Object.getPrototypeOf(r);
            return s === null ? void 0 : a(s, i, f);
          } else {
            if ("value" in n) return n.value;
            var A = n.get;
            return A === void 0 ? void 0 : A.call(f);
          }
        }, O = v(4), y = v(27), d = c(y);
        function c(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function o(a, r) {
          if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
        }
        function t(a, r) {
          if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return r && (typeof r == "object" || typeof r == "function") ? r : a;
        }
        function e(a, r) {
          if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
          a.prototype = Object.create(r && r.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }
        var u = ["height", "width"], l = (function(a) {
          e(r, a);
          function r() {
            return o(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return P(r, [{ key: "format", value: function(f, n) {
            u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : w(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
          } }], [{ key: "create", value: function(f) {
            var n = w(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
            return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", true), n.setAttribute("src", this.sanitize(f)), n;
          } }, { key: "formats", value: function(f) {
            return u.reduce(function(n, s) {
              return f.hasAttribute(s) && (n[s] = f.getAttribute(s)), n;
            }, {});
          } }, { key: "sanitize", value: function(f) {
            return d.default.sanitize(f);
          } }, { key: "value", value: function(f) {
            return f.getAttribute("src");
          } }]), r;
        })(O.BlockEmbed);
        l.blotName = "video", l.className = "ql-video", l.tagName = "IFRAME", _.default = l;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.FormulaBlot = void 0;
        var P = /* @__PURE__ */ (function() {
          function f(n, s) {
            for (var A = 0; A < s.length; A++) {
              var g = s[A];
              g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(n, g.key, g);
            }
          }
          return function(n, s, A) {
            return s && f(n.prototype, s), A && f(n, A), n;
          };
        })(), w = function f(n, s, A) {
          n === null && (n = Function.prototype);
          var g = Object.getOwnPropertyDescriptor(n, s);
          if (g === void 0) {
            var b = Object.getPrototypeOf(n);
            return b === null ? void 0 : f(b, s, A);
          } else {
            if ("value" in g) return g.value;
            var N = g.get;
            return N === void 0 ? void 0 : N.call(A);
          }
        }, O = v(35), y = e(O), d = v(5), c = e(d), o = v(9), t = e(o);
        function e(f) {
          return f && f.__esModule ? f : { default: f };
        }
        function u(f, n) {
          if (!(f instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function l(f, n) {
          if (!f) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return n && (typeof n == "object" || typeof n == "function") ? n : f;
        }
        function a(f, n) {
          if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
          f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: false, writable: true, configurable: true } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
        }
        var r = (function(f) {
          a(n, f);
          function n() {
            return u(this, n), l(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
          }
          return P(n, null, [{ key: "create", value: function(A) {
            var g = w(n.__proto__ || Object.getPrototypeOf(n), "create", this).call(this, A);
            return typeof A == "string" && (window.katex.render(A, g, { throwOnError: false, errorColor: "#f00" }), g.setAttribute("data-value", A)), g;
          } }, { key: "value", value: function(A) {
            return A.getAttribute("data-value");
          } }]), n;
        })(y.default);
        r.blotName = "formula", r.className = "ql-formula", r.tagName = "SPAN";
        var i = (function(f) {
          a(n, f), P(n, null, [{ key: "register", value: function() {
            c.default.register(r, true);
          } }]);
          function n() {
            u(this, n);
            var s = l(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            if (window.katex == null) throw new Error("Formula module requires KaTeX.");
            return s;
          }
          return n;
        })(t.default);
        _.FormulaBlot = r, _.default = i;
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.CodeToken = _.CodeBlock = void 0;
        var P = /* @__PURE__ */ (function() {
          function A(g, b) {
            for (var N = 0; N < b.length; N++) {
              var m = b[N];
              m.enumerable = m.enumerable || false, m.configurable = true, "value" in m && (m.writable = true), Object.defineProperty(g, m.key, m);
            }
          }
          return function(g, b, N) {
            return b && A(g.prototype, b), N && A(g, N), g;
          };
        })(), w = function A(g, b, N) {
          g === null && (g = Function.prototype);
          var m = Object.getOwnPropertyDescriptor(g, b);
          if (m === void 0) {
            var h = Object.getPrototypeOf(g);
            return h === null ? void 0 : A(h, b, N);
          } else {
            if ("value" in m) return m.value;
            var p = m.get;
            return p === void 0 ? void 0 : p.call(N);
          }
        }, O = v(0), y = l(O), d = v(5), c = l(d), o = v(9), t = l(o), e = v(13), u = l(e);
        function l(A) {
          return A && A.__esModule ? A : { default: A };
        }
        function a(A, g) {
          if (!(A instanceof g)) throw new TypeError("Cannot call a class as a function");
        }
        function r(A, g) {
          if (!A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return g && (typeof g == "object" || typeof g == "function") ? g : A;
        }
        function i(A, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof g);
          A.prototype = Object.create(g && g.prototype, { constructor: { value: A, enumerable: false, writable: true, configurable: true } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(A, g) : A.__proto__ = g);
        }
        var f = (function(A) {
          i(g, A);
          function g() {
            return a(this, g), r(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
          }
          return P(g, [{ key: "replaceWith", value: function(N) {
            this.domNode.textContent = this.domNode.textContent, this.attach(), w(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "replaceWith", this).call(this, N);
          } }, { key: "highlight", value: function(N) {
            var m = this.domNode.textContent;
            this.cachedText !== m && ((m.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = N(m), this.domNode.normalize(), this.attach()), this.cachedText = m);
          } }]), g;
        })(u.default);
        f.className = "ql-syntax";
        var n = new y.default.Attributor.Class("token", "hljs", { scope: y.default.Scope.INLINE }), s = (function(A) {
          i(g, A), P(g, null, [{ key: "register", value: function() {
            c.default.register(n, true), c.default.register(f, true);
          } }]);
          function g(b, N) {
            a(this, g);
            var m = r(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, b, N));
            if (typeof m.options.highlight != "function") throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
            var h = null;
            return m.quill.on(c.default.events.SCROLL_OPTIMIZE, function() {
              clearTimeout(h), h = setTimeout(function() {
                m.highlight(), h = null;
              }, m.options.interval);
            }), m.highlight(), m;
          }
          return P(g, [{ key: "highlight", value: function() {
            var N = this;
            if (!this.quill.selection.composing) {
              this.quill.update(c.default.sources.USER);
              var m = this.quill.getSelection();
              this.quill.scroll.descendants(f).forEach(function(h) {
                h.highlight(N.options.highlight);
              }), this.quill.update(c.default.sources.SILENT), m != null && this.quill.setSelection(m, c.default.sources.SILENT);
            }
          } }]), g;
        })(t.default);
        s.DEFAULTS = { highlight: (function() {
          return window.hljs == null ? null : function(A) {
            var g = window.hljs.highlightAuto(A);
            return g.value;
          };
        })(), interval: 1e3 }, _.CodeBlock = f, _.CodeToken = n, _.default = s;
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
      }), (function(I, _) {
        I.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
      }), (function(I, _) {
        I.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
      }), (function(I, _) {
        I.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
      }), (function(I, _, v) {
        Object.defineProperty(_, "__esModule", { value: true }), _.default = _.BubbleTooltip = void 0;
        var P = function g(b, N, m) {
          b === null && (b = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(b, N);
          if (h === void 0) {
            var p = Object.getPrototypeOf(b);
            return p === null ? void 0 : g(p, N, m);
          } else {
            if ("value" in h) return h.value;
            var k = h.get;
            return k === void 0 ? void 0 : k.call(m);
          }
        }, w = /* @__PURE__ */ (function() {
          function g(b, N) {
            for (var m = 0; m < N.length; m++) {
              var h = N[m];
              h.enumerable = h.enumerable || false, h.configurable = true, "value" in h && (h.writable = true), Object.defineProperty(b, h.key, h);
            }
          }
          return function(b, N, m) {
            return N && g(b.prototype, N), m && g(b, m), b;
          };
        })(), O = v(3), y = a(O), d = v(8), c = a(d), o = v(43), t = a(o), e = v(15), u = v(41), l = a(u);
        function a(g) {
          return g && g.__esModule ? g : { default: g };
        }
        function r(g, b) {
          if (!(g instanceof b)) throw new TypeError("Cannot call a class as a function");
        }
        function i(g, b) {
          if (!g) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return b && (typeof b == "object" || typeof b == "function") ? b : g;
        }
        function f(g, b) {
          if (typeof b != "function" && b !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
          g.prototype = Object.create(b && b.prototype, { constructor: { value: g, enumerable: false, writable: true, configurable: true } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(g, b) : g.__proto__ = b);
        }
        var n = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], s = (function(g) {
          f(b, g);
          function b(N, m) {
            r(this, b), m.modules.toolbar != null && m.modules.toolbar.container == null && (m.modules.toolbar.container = n);
            var h = i(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, N, m));
            return h.quill.container.classList.add("ql-bubble"), h;
          }
          return w(b, [{ key: "extendToolbar", value: function(m) {
            this.tooltip = new A(this.quill, this.options.bounds), this.tooltip.root.appendChild(m.container), this.buildButtons([].slice.call(m.container.querySelectorAll("button")), l.default), this.buildPickers([].slice.call(m.container.querySelectorAll("select")), l.default);
          } }]), b;
        })(t.default);
        s.DEFAULTS = (0, y.default)(true, {}, t.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function(b) {
          b ? this.quill.theme.tooltip.edit() : this.quill.format("link", false);
        } } } } });
        var A = (function(g) {
          f(b, g);
          function b(N, m) {
            r(this, b);
            var h = i(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, N, m));
            return h.quill.on(c.default.events.EDITOR_CHANGE, function(p, k, T, L) {
              if (p === c.default.events.SELECTION_CHANGE) if (k != null && k.length > 0 && L === c.default.sources.USER) {
                h.show(), h.root.style.left = "0px", h.root.style.width = "", h.root.style.width = h.root.offsetWidth + "px";
                var B = h.quill.getLines(k.index, k.length);
                if (B.length === 1) h.position(h.quill.getBounds(k));
                else {
                  var C = B[B.length - 1], Z = h.quill.getIndex(C), M = Math.min(C.length() - 1, k.index + k.length - Z), R = h.quill.getBounds(new e.Range(Z, M));
                  h.position(R);
                }
              } else document.activeElement !== h.textbox && h.quill.hasFocus() && h.hide();
            }), h;
          }
          return w(b, [{ key: "listen", value: function() {
            var m = this;
            P(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
              m.root.classList.remove("ql-editing");
            }), this.quill.on(c.default.events.SCROLL_OPTIMIZE, function() {
              setTimeout(function() {
                if (!m.root.classList.contains("ql-hidden")) {
                  var h = m.quill.getSelection();
                  h != null && m.position(m.quill.getBounds(h));
                }
              }, 1);
            });
          } }, { key: "cancel", value: function() {
            this.show();
          } }, { key: "position", value: function(m) {
            var h = P(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "position", this).call(this, m), p = this.root.querySelector(".ql-tooltip-arrow");
            if (p.style.marginLeft = "", h === 0) return h;
            p.style.marginLeft = -1 * h - p.offsetWidth / 2 + "px";
          } }]), b;
        })(o.BaseTooltip);
        A.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), _.BubbleTooltip = A, _.default = s;
      }), (function(I, _, v) {
        I.exports = v(63);
      })]).default;
    });
  })(dt)), dt.exports;
}
var xt = Tt();
const St = gt(xt), Pt = { theme: "snow", boundary: document.body, modules: { toolbar: [["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{ header: 1 }, { header: 2 }], [{ list: "ordered" }, { list: "bullet" }], [{ script: "sub" }, { script: "super" }], [{ indent: "-1" }, { indent: "+1" }], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }], ["clean"], ["link", "image", "video"]] }, placeholder: "Insert content here ...", readOnly: false }, qt = { name: "quill-editor", props: { content: String, value: String, disabled: { type: Boolean, default: false }, options: { type: Object, required: false, default: () => ({}) } }, emits: ["ready", "change", "input", "blur", "focus", "update:value"], setup(ut, ht) {
  const I = { editorOption: {}, quill: null };
  let _ = "";
  vt(() => ut.value, (O) => {
    I.quill && (O && O !== _ ? (_ = O, I.quill.pasteHTML(O)) : O || I.quill.setText(""));
  }), vt(() => ut.content, (O) => {
    I.quill && (O && O !== _ ? (_ = O, I.quill.pasteHTML(O)) : O || I.quill.setText(""));
  }), vt(() => ut.disabled, (O) => {
    I.quill && I.quill.enable(!O);
  });
  const v = _t(null), P = (O, y) => {
    for (const d in y) !O[d] || d !== "modules" ? O[d] = y[d] : P(O[d], y[d]);
    return O;
  }, w = () => {
    v.value && (I.editorOption = P(Pt, ut.options), I.editorOption.readOnly = !!ut.disabled, I.quill = new St(v.value, I.editorOption), ut.value && I.quill.pasteHTML(ut.value), I.quill.on("selection-change", (O) => {
      O ? ht.emit("focus", I.quill) : ht.emit("blur", I.quill);
    }), I.quill.on("text-change", () => {
      ut.disabled && I.quill.enable(false);
      let O = v.value.children[0].innerHTML;
      const y = I.quill, d = I.quill.getText();
      O === "<p><br></p>" && (O = ""), _ = O, ht.emit("update:value", _), ht.emit("change", { html: O, text: d, quill: y });
    }), ht.emit("ready", I.quill));
  };
  return Ot(() => {
    const O = v.value.previousSibling;
    O && O.nodeType === 1 && O.className.indexOf("ql-toolbar") > -1 && O.parentNode.removeChild(O);
  }), Et(() => {
    w();
  }), kt(() => {
    I.quill = null;
  }), { editor: v };
} }, Lt = { ref: "editor" };
function Rt(ut, ht, I, _, v, P) {
  return wt(), At("section", Lt, null, 512);
}
const pt = bt(qt, [["render", Rt]]);
pt.install = function(ut) {
  ut.component(pt.name, pt);
};
export {
  St as Q,
  pt as q
};
