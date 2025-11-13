import { _ as he } from "./wxfreepublish-LUjjosG7.js";
import { aO as Z, bb as Q, ar as N, as as me, bc as be, A as ge, R as ye, bd as we, p as _e, t as xe, ad as Se, ap as Ee, be as ke, aA as Te, S as Oe, _ as Ce, r as $, j as je, w as te, c as D, o as P, e as U, B as F, z as M, F as Ie, v as Ne, V as Le, b as q, h as V, x as Ae, f as J, g as Re } from "./index-DAdfXJ2i.js";
import { W as Ue, a as Pe } from "./index-DnwcmTGn.js";
import { W as De } from "./index-BHfBwpZw.js";
function We(O) {
  return Z.request("get", "/weixin/wxmsg/page", { params: O });
}
function qe(O) {
  return Z.request("post", "/weixin/wxmsg", { data: O });
}
function zt(O) {
  return Z.request("delete", "/weixin/wxmsg/" + O);
}
function Me(O) {
  return Z.request("put", "/weixin/wxmsg", { data: O });
}
var ne = { exports: {} }, ae;
function Be() {
  return ae || (ae = 1, (function(O, L) {
    (function(n) {
      O.exports = n();
    })(function() {
      return (function n(u, b, s) {
        function o(e, t) {
          if (!b[e]) {
            if (!u[e]) {
              var a = typeof Q == "function" && Q;
              if (!t && a) return a(e, true);
              if (r) return r(e, true);
              var l = new Error("Cannot find module '" + e + "'");
              throw l.code = "MODULE_NOT_FOUND", l;
            }
            var c = b[e] = { exports: {} };
            u[e][0].call(c.exports, function(d) {
              return o(u[e][1][d] || d);
            }, c, c.exports, n, u, b, s);
          }
          return b[e].exports;
        }
        for (var r = typeof Q == "function" && Q, i = 0; i < s.length; i++) o(s[i]);
        return o;
      })({ 1: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("./transport-list");
            u.exports = n("./main")(o), "_sockjs_onload" in s && setTimeout(s._sockjs_onload, 1);
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "./main": 14, "./transport-list": 16 }], 2: [function(n, u, b) {
        var s = n("inherits"), o = n("./event");
        function r() {
          o.call(this), this.initEvent("close", false, false), this.wasClean = false, this.code = 0, this.reason = "";
        }
        s(r, o), u.exports = r;
      }, { "./event": 4, inherits: 54 }], 3: [function(n, u, b) {
        var s = n("inherits"), o = n("./eventtarget");
        function r() {
          o.call(this);
        }
        s(r, o), r.prototype.removeAllListeners = function(i) {
          i ? delete this._listeners[i] : this._listeners = {};
        }, r.prototype.once = function(i, e) {
          var t = this, a = false;
          this.on(i, function l() {
            t.removeListener(i, l), a || (a = true, e.apply(this, arguments));
          });
        }, r.prototype.emit = function() {
          var i = arguments[0], e = this._listeners[i];
          if (e) {
            for (var t = arguments.length, a = new Array(t - 1), l = 1; l < t; l++) a[l - 1] = arguments[l];
            for (var c = 0; c < e.length; c++) e[c].apply(this, a);
          }
        }, r.prototype.on = r.prototype.addListener = o.prototype.addEventListener, r.prototype.removeListener = o.prototype.removeEventListener, u.exports.EventEmitter = r;
      }, { "./eventtarget": 5, inherits: 54 }], 4: [function(n, u, b) {
        function s(o) {
          this.type = o;
        }
        s.prototype.initEvent = function(o, r, i) {
          return this.type = o, this.bubbles = r, this.cancelable = i, this.timeStamp = +/* @__PURE__ */ new Date(), this;
        }, s.prototype.stopPropagation = function() {
        }, s.prototype.preventDefault = function() {
        }, s.CAPTURING_PHASE = 1, s.AT_TARGET = 2, s.BUBBLING_PHASE = 3, u.exports = s;
      }, {}], 5: [function(n, u, b) {
        function s() {
          this._listeners = {};
        }
        s.prototype.addEventListener = function(o, r) {
          o in this._listeners || (this._listeners[o] = []);
          var i = this._listeners[o];
          i.indexOf(r) === -1 && (i = i.concat([r])), this._listeners[o] = i;
        }, s.prototype.removeEventListener = function(o, r) {
          var i = this._listeners[o];
          if (i) {
            var e = i.indexOf(r);
            e === -1 || (1 < i.length ? this._listeners[o] = i.slice(0, e).concat(i.slice(e + 1)) : delete this._listeners[o]);
          }
        }, s.prototype.dispatchEvent = function() {
          var o = arguments[0], r = o.type, i = arguments.length === 1 ? [o] : Array.apply(null, arguments);
          if (this["on" + r] && this["on" + r].apply(this, i), r in this._listeners) for (var e = this._listeners[r], t = 0; t < e.length; t++) e[t].apply(this, i);
        }, u.exports = s;
      }, {}], 6: [function(n, u, b) {
        var s = n("inherits"), o = n("./event");
        function r(i) {
          o.call(this), this.initEvent("message", false, false), this.data = i;
        }
        s(r, o), u.exports = r;
      }, { "./event": 4, inherits: 54 }], 7: [function(n, u, b) {
        var s = n("./utils/iframe");
        function o(r) {
          (this._transport = r).on("message", this._transportMessage.bind(this)), r.on("close", this._transportClose.bind(this));
        }
        o.prototype._transportClose = function(r, i) {
          s.postMessage("c", JSON.stringify([r, i]));
        }, o.prototype._transportMessage = function(r) {
          s.postMessage("t", r);
        }, o.prototype._send = function(r) {
          this._transport.send(r);
        }, o.prototype._close = function() {
          this._transport.close(), this._transport.removeAllListeners();
        }, u.exports = o;
      }, { "./utils/iframe": 47 }], 8: [function(n, u, b) {
        var s = n("./utils/url"), o = n("./utils/event"), r = n("./facade"), i = n("./info-iframe-receiver"), e = n("./utils/iframe"), t = n("./location"), a = function() {
        };
        u.exports = function(l, c) {
          var d, v = {};
          c.forEach(function(f) {
            f.facadeTransport && (v[f.facadeTransport.transportName] = f.facadeTransport);
          }), v[i.transportName] = i, l.bootstrap_iframe = function() {
            var f;
            e.currentWindowId = t.hash.slice(1), o.attachEvent("message", function(m) {
              if (m.source === parent && (d === void 0 && (d = m.origin), m.origin === d)) {
                var g;
                try {
                  g = JSON.parse(m.data);
                } catch {
                  return void a("bad json", m.data);
                }
                if (g.windowId === e.currentWindowId) switch (g.type) {
                  case "s":
                    var p;
                    try {
                      p = JSON.parse(g.data);
                    } catch {
                      a("bad json", g.data);
                      break;
                    }
                    var j = p[0], x = p[1], y = p[2], E = p[3];
                    if (j !== l.version) throw new Error('Incompatible SockJS! Main site uses: "' + j + '", the iframe: "' + l.version + '".');
                    if (!s.isOriginEqual(y, t.href) || !s.isOriginEqual(E, t.href)) throw new Error("Can't connect to different domain from within an iframe. (" + t.href + ", " + y + ", " + E + ")");
                    f = new r(new v[x](y, E));
                    break;
                  case "m":
                    f._send(g.data);
                    break;
                  case "c":
                    f && f._close(), f = null;
                }
              }
            }), e.postMessage("s");
          };
        };
      }, { "./facade": 7, "./info-iframe-receiver": 10, "./location": 13, "./utils/event": 46, "./utils/iframe": 47, "./utils/url": 52, debug: void 0 }], 9: [function(n, u, b) {
        var s = n("events").EventEmitter, o = n("inherits"), r = n("./utils/object");
        function i(e, t) {
          s.call(this);
          var a = this, l = +/* @__PURE__ */ new Date();
          this.xo = new t("GET", e), this.xo.once("finish", function(c, d) {
            var v, f;
            if (c === 200) {
              if (f = +/* @__PURE__ */ new Date() - l, d) try {
                v = JSON.parse(d);
              } catch {
              }
              r.isObject(v) || (v = {});
            }
            a.emit("finish", v, f), a.removeAllListeners();
          });
        }
        o(i, s), i.prototype.close = function() {
          this.removeAllListeners(), this.xo.close();
        }, u.exports = i;
      }, { "./utils/object": 49, debug: void 0, events: 3, inherits: 54 }], 10: [function(n, u, b) {
        var s = n("inherits"), o = n("events").EventEmitter, r = n("./transport/sender/xhr-local"), i = n("./info-ajax");
        function e(t) {
          var a = this;
          o.call(this), this.ir = new i(t, r), this.ir.once("finish", function(l, c) {
            a.ir = null, a.emit("message", JSON.stringify([l, c]));
          });
        }
        s(e, o), e.transportName = "iframe-info-receiver", e.prototype.close = function() {
          this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners();
        }, u.exports = e;
      }, { "./info-ajax": 9, "./transport/sender/xhr-local": 37, events: 3, inherits: 54 }], 11: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("events").EventEmitter, r = n("inherits"), i = n("./utils/event"), e = n("./transport/iframe"), t = n("./info-iframe-receiver");
            function a(l, c) {
              var d = this;
              o.call(this);
              function v() {
                var f = d.ifr = new e(t.transportName, c, l);
                f.once("message", function(m) {
                  if (m) {
                    var g;
                    try {
                      g = JSON.parse(m);
                    } catch {
                      return d.emit("finish"), void d.close();
                    }
                    var p = g[0], j = g[1];
                    d.emit("finish", p, j);
                  }
                  d.close();
                }), f.once("close", function() {
                  d.emit("finish"), d.close();
                });
              }
              s.document.body ? v() : i.attachEvent("load", v);
            }
            r(a, o), a.enabled = function() {
              return e.enabled();
            }, a.prototype.close = function() {
              this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null;
            }, u.exports = a;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "./info-iframe-receiver": 10, "./transport/iframe": 22, "./utils/event": 46, debug: void 0, events: 3, inherits: 54 }], 12: [function(n, u, b) {
        var s = n("events").EventEmitter, o = n("inherits"), r = n("./utils/url"), i = n("./transport/sender/xdr"), e = n("./transport/sender/xhr-cors"), t = n("./transport/sender/xhr-local"), a = n("./transport/sender/xhr-fake"), l = n("./info-iframe"), c = n("./info-ajax");
        function d(v, f) {
          var m = this;
          s.call(this), setTimeout(function() {
            m.doXhr(v, f);
          }, 0);
        }
        o(d, s), d._getReceiver = function(v, f, m) {
          return m.sameOrigin ? new c(f, t) : e.enabled ? new c(f, e) : i.enabled && m.sameScheme ? new c(f, i) : l.enabled() ? new l(v, f) : new c(f, a);
        }, d.prototype.doXhr = function(v, f) {
          var m = this, g = r.addPath(v, "/info");
          this.xo = d._getReceiver(v, g, f), this.timeoutRef = setTimeout(function() {
            m._cleanup(false), m.emit("finish");
          }, d.timeout), this.xo.once("finish", function(p, j) {
            m._cleanup(true), m.emit("finish", p, j);
          });
        }, d.prototype._cleanup = function(v) {
          clearTimeout(this.timeoutRef), this.timeoutRef = null, !v && this.xo && this.xo.close(), this.xo = null;
        }, d.prototype.close = function() {
          this.removeAllListeners(), this._cleanup(false);
        }, d.timeout = 8e3, u.exports = d;
      }, { "./info-ajax": 9, "./info-iframe": 11, "./transport/sender/xdr": 34, "./transport/sender/xhr-cors": 35, "./transport/sender/xhr-fake": 36, "./transport/sender/xhr-local": 37, "./utils/url": 52, debug: void 0, events: 3, inherits: 54 }], 13: [function(n, u, b) {
        (function(s) {
          (function() {
            u.exports = s.location || { origin: "http://localhost:80", protocol: "http:", host: "localhost", port: 80, href: "http://localhost/", hash: "" };
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 14: [function(n, u, b) {
        (function(s) {
          (function() {
            n("./shims");
            var o, r = n("url-parse"), i = n("inherits"), e = n("./utils/random"), t = n("./utils/escape"), a = n("./utils/url"), l = n("./utils/event"), c = n("./utils/transport"), d = n("./utils/object"), v = n("./utils/browser"), f = n("./utils/log"), m = n("./event/event"), g = n("./event/eventtarget"), p = n("./location"), j = n("./event/close"), x = n("./event/trans-message"), y = n("./info-receiver"), E = function() {
            };
            function h(w, T, _) {
              if (!(this instanceof h)) return new h(w, T, _);
              if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
              g.call(this), this.readyState = h.CONNECTING, this.extensions = "", this.protocol = "", (_ = _ || {}).protocols_whitelist && f.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = _.transports, this._transportOptions = _.transportOptions || {}, this._timeout = _.timeout || 0;
              var k = _.sessionId || 8;
              if (typeof k == "function") this._generateSessionId = k;
              else {
                if (typeof k != "number") throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
                this._generateSessionId = function() {
                  return e.string(k);
                };
              }
              this._server = _.server || e.numberString(1e3);
              var C = new r(w);
              if (!C.host || !C.protocol) throw new SyntaxError("The URL '" + w + "' is invalid");
              if (C.hash) throw new SyntaxError("The URL must not contain a fragment");
              if (C.protocol !== "http:" && C.protocol !== "https:") throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + C.protocol + "' is not allowed.");
              var A = C.protocol === "https:";
              if (p.protocol === "https:" && !A && !a.isLoopbackAddr(C.hostname)) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
              T ? Array.isArray(T) || (T = [T]) : T = [];
              var S = T.sort();
              S.forEach(function(R, B) {
                if (!R) throw new SyntaxError("The protocols entry '" + R + "' is invalid.");
                if (B < S.length - 1 && R === S[B + 1]) throw new SyntaxError("The protocols entry '" + R + "' is duplicated.");
              });
              var W = a.getOrigin(p.href);
              this._origin = W ? W.toLowerCase() : null, C.set("pathname", C.pathname.replace(/\/+$/, "")), this.url = C.href, E("using url", this.url), this._urlInfo = { nullOrigin: !v.hasDomain(), sameOrigin: a.isOriginEqual(this.url, p.href), sameScheme: a.isSchemeEqual(this.url, p.href) }, this._ir = new y(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this));
            }
            function I(w) {
              return w === 1e3 || 3e3 <= w && w <= 4999;
            }
            i(h, g), h.prototype.close = function(w, T) {
              if (w && !I(w)) throw new Error("InvalidAccessError: Invalid code");
              if (T && 123 < T.length) throw new SyntaxError("reason argument has an invalid length");
              this.readyState !== h.CLOSING && this.readyState !== h.CLOSED && this._close(w || 1e3, T || "Normal closure", true);
            }, h.prototype.send = function(w) {
              if (typeof w != "string" && (w = "" + w), this.readyState === h.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
              this.readyState === h.OPEN && this._transport.send(t.quote(w));
            }, h.version = n("./version"), h.CONNECTING = 0, h.OPEN = 1, h.CLOSING = 2, h.CLOSED = 3, h.prototype._receiveInfo = function(w, T) {
              if (this._ir = null, w) {
                this._rto = this.countRTO(T), this._transUrl = w.base_url ? w.base_url : this.url, w = d.extend(w, this._urlInfo);
                var _ = o.filterToEnabled(this._transportsWhitelist, w);
                this._transports = _.main, E(this._transports.length + " enabled transports"), this._connect();
              } else this._close(1002, "Cannot connect to server");
            }, h.prototype._connect = function() {
              for (var w = this._transports.shift(); w; w = this._transports.shift()) {
                if (E("attempt", w.transportName), w.needBody && (!s.document.body || s.document.readyState !== void 0 && s.document.readyState !== "complete" && s.document.readyState !== "interactive")) return this._transports.unshift(w), void l.attachEvent("load", this._connect.bind(this));
                var T = Math.max(this._timeout, this._rto * w.roundTrips || 5e3);
                this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), T);
                var _ = a.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()), k = this._transportOptions[w.transportName], C = new w(_, this._transUrl, k);
                return C.on("message", this._transportMessage.bind(this)), C.once("close", this._transportClose.bind(this)), C.transportName = w.transportName, void (this._transport = C);
              }
              this._close(2e3, "All transports failed", false);
            }, h.prototype._transportTimeout = function() {
              this.readyState === h.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"));
            }, h.prototype._transportMessage = function(w) {
              var T, _ = this, k = w.slice(0, 1), C = w.slice(1);
              switch (k) {
                case "o":
                  return void this._open();
                case "h":
                  return this.dispatchEvent(new m("heartbeat")), void E("heartbeat", this.transport);
              }
              if (C) try {
                T = JSON.parse(C);
              } catch {
              }
              if (T !== void 0) switch (k) {
                case "a":
                  Array.isArray(T) && T.forEach(function(A) {
                    E("message", _.transport), _.dispatchEvent(new x(A));
                  });
                  break;
                case "m":
                  E("message", this.transport), this.dispatchEvent(new x(T));
                  break;
                case "c":
                  Array.isArray(T) && T.length === 2 && this._close(T[0], T[1], true);
              }
            }, h.prototype._transportClose = function(w, T) {
              E("_transportClose", this.transport), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), I(w) || w === 2e3 || this.readyState !== h.CONNECTING ? this._close(w, T) : this._connect();
            }, h.prototype._open = function() {
              E("_open", this._transport && this._transport.transportName, this.readyState), this.readyState === h.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = h.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new m("open")), E("connected", this.transport)) : this._close(1006, "Server lost session");
            }, h.prototype._close = function(w, T, _) {
              E("_close", this.transport, w, T, _, this.readyState);
              var k = false;
              if (this._ir && (k = true, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === h.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
              this.readyState = h.CLOSING, setTimeout((function() {
                this.readyState = h.CLOSED, k && this.dispatchEvent(new m("error"));
                var C = new j("close");
                C.wasClean = _ || false, C.code = w || 1e3, C.reason = T, this.dispatchEvent(C), this.onmessage = this.onclose = this.onerror = null;
              }).bind(this), 0);
            }, h.prototype.countRTO = function(w) {
              return 100 < w ? 4 * w : 300 + w;
            }, u.exports = function(w) {
              return o = c(w), n("./iframe-bootstrap")(h, w), h;
            };
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "./event/close": 2, "./event/event": 4, "./event/eventtarget": 5, "./event/trans-message": 6, "./iframe-bootstrap": 8, "./info-receiver": 12, "./location": 13, "./shims": 15, "./utils/browser": 44, "./utils/escape": 45, "./utils/event": 46, "./utils/log": 48, "./utils/object": 49, "./utils/random": 50, "./utils/transport": 51, "./utils/url": 52, "./version": 53, debug: void 0, inherits: 54, "url-parse": 57 }], 15: [function(n, u, b) {
        function s(_) {
          return e.toString.call(_) === "[object Function]";
        }
        function o(_) {
          return c.call(_) === "[object String]";
        }
        var r, i = Array.prototype, e = Object.prototype, t = Function.prototype, a = String.prototype, l = i.slice, c = e.toString, d = Object.defineProperty && (function() {
          try {
            return Object.defineProperty({}, "x", {}), true;
          } catch {
            return false;
          }
        })();
        r = d ? function(_, k, C, A) {
          !A && k in _ || Object.defineProperty(_, k, { configurable: true, enumerable: false, writable: true, value: C });
        } : function(_, k, C, A) {
          !A && k in _ || (_[k] = C);
        };
        function v(_, k, C) {
          for (var A in k) e.hasOwnProperty.call(k, A) && r(_, A, k[A], C);
        }
        function f(_) {
          if (_ == null) throw new TypeError("can't convert " + _ + " to object");
          return Object(_);
        }
        function m() {
        }
        v(t, { bind: function(_) {
          var k = this;
          if (!s(k)) throw new TypeError("Function.prototype.bind called on incompatible " + k);
          for (var C = l.call(arguments, 1), A = Math.max(0, k.length - C.length), S = [], W = 0; W < A; W++) S.push("$" + W);
          var R = Function("binder", "return function (" + S.join(",") + "){ return binder.apply(this, arguments); }")(function() {
            if (this instanceof R) {
              var B = k.apply(this, C.concat(l.call(arguments)));
              return Object(B) === B ? B : this;
            }
            return k.apply(_, C.concat(l.call(arguments)));
          });
          return k.prototype && (m.prototype = k.prototype, R.prototype = new m(), m.prototype = null), R;
        } }), v(Array, { isArray: function(_) {
          return c.call(_) === "[object Array]";
        } });
        var g, p, j, x = Object("a"), y = x[0] !== "a" || !(0 in x);
        v(i, { forEach: function(_, k) {
          var C = f(this), A = y && o(this) ? this.split("") : C, S = k, W = -1, R = A.length >>> 0;
          if (!s(_)) throw new TypeError();
          for (; ++W < R; ) W in A && _.call(S, A[W], W, C);
        } }, (g = i.forEach, j = p = true, g && (g.call("foo", function(_, k, C) {
          typeof C != "object" && (p = false);
        }), g.call([1], function() {
          j = typeof this == "string";
        }, "x")), !(g && p && j)));
        var E = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
        v(i, { indexOf: function(_, k) {
          var C = y && o(this) ? this.split("") : f(this), A = C.length >>> 0;
          if (!A) return -1;
          var S = 0;
          for (1 < arguments.length && (S = (function(W) {
            var R = +W;
            return R != R ? R = 0 : R !== 0 && R !== 1 / 0 && R !== -1 / 0 && (R = (0 < R || -1) * Math.floor(Math.abs(R))), R;
          })(k)), S = 0 <= S ? S : Math.max(0, A + S); S < A; S++) if (S in C && C[S] === _) return S;
          return -1;
        } }, E);
        var h, I = a.split;
        "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || 1 < ".".split(/()()/).length ? (h = /()??/.exec("")[1] === void 0, a.split = function(_, k) {
          var C = this;
          if (_ === void 0 && k === 0) return [];
          if (c.call(_) !== "[object RegExp]") return I.call(this, _, k);
          var A, S, W, R, B = [], G = (_.ignoreCase ? "i" : "") + (_.multiline ? "m" : "") + (_.extended ? "x" : "") + (_.sticky ? "y" : ""), z = 0;
          for (_ = new RegExp(_.source, G + "g"), C += "", h || (A = new RegExp("^" + _.source + "$(?!\\s)", G)), k = k === void 0 ? -1 >>> 0 : (function(H) {
            return H >>> 0;
          })(k); (S = _.exec(C)) && !(z < (W = S.index + S[0].length) && (B.push(C.slice(z, S.index)), !h && 1 < S.length && S[0].replace(A, function() {
            for (var H = 1; H < arguments.length - 2; H++) arguments[H] === void 0 && (S[H] = void 0);
          }), 1 < S.length && S.index < C.length && i.push.apply(B, S.slice(1)), R = S[0].length, z = W, B.length >= k)); ) _.lastIndex === S.index && _.lastIndex++;
          return z === C.length ? !R && _.test("") || B.push("") : B.push(C.slice(z)), B.length > k ? B.slice(0, k) : B;
        }) : "0".split(void 0, 0).length && (a.split = function(_, k) {
          return _ === void 0 && k === 0 ? [] : I.call(this, _, k);
        });
        var w = a.substr, T = "".substr && "0b".substr(-1) !== "b";
        v(a, { substr: function(_, k) {
          return w.call(this, _ < 0 && (_ = this.length + _) < 0 ? 0 : _, k);
        } }, T);
      }, {}], 16: [function(n, u, b) {
        u.exports = [n("./transport/websocket"), n("./transport/xhr-streaming"), n("./transport/xdr-streaming"), n("./transport/eventsource"), n("./transport/lib/iframe-wrap")(n("./transport/eventsource")), n("./transport/htmlfile"), n("./transport/lib/iframe-wrap")(n("./transport/htmlfile")), n("./transport/xhr-polling"), n("./transport/xdr-polling"), n("./transport/lib/iframe-wrap")(n("./transport/xhr-polling")), n("./transport/jsonp-polling")];
      }, { "./transport/eventsource": 20, "./transport/htmlfile": 21, "./transport/jsonp-polling": 23, "./transport/lib/iframe-wrap": 26, "./transport/websocket": 38, "./transport/xdr-polling": 39, "./transport/xdr-streaming": 40, "./transport/xhr-polling": 41, "./transport/xhr-streaming": 42 }], 17: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("events").EventEmitter, r = n("inherits"), i = n("../../utils/event"), e = n("../../utils/url"), t = s.XMLHttpRequest, a = function() {
            };
            function l(v, f, m, g) {
              var p = this;
              o.call(this), setTimeout(function() {
                p._start(v, f, m, g);
              }, 0);
            }
            r(l, o), l.prototype._start = function(v, f, m, g) {
              var p = this;
              try {
                this.xhr = new t();
              } catch {
              }
              if (!this.xhr) return this.emit("finish", 0, "no xhr support"), void this._cleanup();
              f = e.addQuery(f, "t=" + +/* @__PURE__ */ new Date()), this.unloadRef = i.unloadAdd(function() {
                p._cleanup(true);
              });
              try {
                this.xhr.open(v, f, true), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
                  a("xhr timeout"), p.emit("finish", 0, ""), p._cleanup(false);
                });
              } catch {
                return this.emit("finish", 0, ""), void this._cleanup(false);
              }
              if (g && g.noCredentials || !l.supportsCORS || (this.xhr.withCredentials = true), g && g.headers) for (var j in g.headers) this.xhr.setRequestHeader(j, g.headers[j]);
              this.xhr.onreadystatechange = function() {
                if (p.xhr) {
                  var x, y, E = p.xhr;
                  switch (a("readyState", E.readyState), E.readyState) {
                    case 3:
                      try {
                        y = E.status, x = E.responseText;
                      } catch {
                      }
                      y === 1223 && (y = 204), y === 200 && x && 0 < x.length && p.emit("chunk", y, x);
                      break;
                    case 4:
                      y = E.status, y === 1223 && (y = 204), y !== 12005 && y !== 12029 || (y = 0), a("finish", y, E.responseText), p.emit("finish", y, E.responseText), p._cleanup(false);
                  }
                }
              };
              try {
                p.xhr.send(m);
              } catch {
                p.emit("finish", 0, ""), p._cleanup(false);
              }
            }, l.prototype._cleanup = function(v) {
              if (this.xhr) {
                if (this.removeAllListeners(), i.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {
                }, this.xhr.ontimeout && (this.xhr.ontimeout = null), v) try {
                  this.xhr.abort();
                } catch {
                }
                this.unloadRef = this.xhr = null;
              }
            }, l.prototype.close = function() {
              this._cleanup(true);
            }, l.enabled = !!t;
            var c = ["Active"].concat("Object").join("X");
            !l.enabled && c in s && (l.enabled = !!new (t = function() {
              try {
                return new s[c]("Microsoft.XMLHTTP");
              } catch {
                return null;
              }
            })());
            var d = false;
            try {
              d = "withCredentials" in new t();
            } catch {
            }
            l.supportsCORS = d, u.exports = l;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "../../utils/event": 46, "../../utils/url": 52, debug: void 0, events: 3, inherits: 54 }], 18: [function(n, u, b) {
        (function(s) {
          (function() {
            u.exports = s.EventSource;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 19: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = s.WebSocket || s.MozWebSocket;
            u.exports = o ? function(r) {
              return new o(r);
            } : void 0;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 20: [function(n, u, b) {
        var s = n("inherits"), o = n("./lib/ajax-based"), r = n("./receiver/eventsource"), i = n("./sender/xhr-cors"), e = n("eventsource");
        function t(a) {
          if (!t.enabled()) throw new Error("Transport created when disabled");
          o.call(this, a, "/eventsource", r, i);
        }
        s(t, o), t.enabled = function() {
          return !!e;
        }, t.transportName = "eventsource", t.roundTrips = 2, u.exports = t;
      }, { "./lib/ajax-based": 24, "./receiver/eventsource": 29, "./sender/xhr-cors": 35, eventsource: 18, inherits: 54 }], 21: [function(n, u, b) {
        var s = n("inherits"), o = n("./receiver/htmlfile"), r = n("./sender/xhr-local"), i = n("./lib/ajax-based");
        function e(t) {
          if (!o.enabled) throw new Error("Transport created when disabled");
          i.call(this, t, "/htmlfile", o, r);
        }
        s(e, i), e.enabled = function(t) {
          return o.enabled && t.sameOrigin;
        }, e.transportName = "htmlfile", e.roundTrips = 2, u.exports = e;
      }, { "./lib/ajax-based": 24, "./receiver/htmlfile": 30, "./sender/xhr-local": 37, inherits: 54 }], 22: [function(n, u, b) {
        var s = n("inherits"), o = n("events").EventEmitter, r = n("../version"), i = n("../utils/url"), e = n("../utils/iframe"), t = n("../utils/event"), a = n("../utils/random"), l = function() {
        };
        function c(d, v, f) {
          if (!c.enabled()) throw new Error("Transport created when disabled");
          o.call(this);
          var m = this;
          this.origin = i.getOrigin(f), this.baseUrl = f, this.transUrl = v, this.transport = d, this.windowId = a.string(8);
          var g = i.addPath(f, "/iframe.html") + "#" + this.windowId;
          this.iframeObj = e.createIframe(g, function(p) {
            m.emit("close", 1006, "Unable to load an iframe (" + p + ")"), m.close();
          }), this.onmessageCallback = this._message.bind(this), t.attachEvent("message", this.onmessageCallback);
        }
        s(c, o), c.prototype.close = function() {
          if (this.removeAllListeners(), this.iframeObj) {
            t.detachEvent("message", this.onmessageCallback);
            try {
              this.postMessage("c");
            } catch {
            }
            this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null;
          }
        }, c.prototype._message = function(d) {
          if (l("message", d.data), i.isOriginEqual(d.origin, this.origin)) {
            var v;
            try {
              v = JSON.parse(d.data);
            } catch {
              return void l("bad json", d.data);
            }
            if (v.windowId === this.windowId) switch (v.type) {
              case "s":
                this.iframeObj.loaded(), this.postMessage("s", JSON.stringify([r, this.transport, this.transUrl, this.baseUrl]));
                break;
              case "t":
                this.emit("message", v.data);
                break;
              case "c":
                var f;
                try {
                  f = JSON.parse(v.data);
                } catch {
                  return void l("bad json", v.data);
                }
                this.emit("close", f[0], f[1]), this.close();
            }
            else l("mismatched window id", v.windowId, this.windowId);
          } else l("not same origin", d.origin, this.origin);
        }, c.prototype.postMessage = function(d, v) {
          this.iframeObj.post(JSON.stringify({ windowId: this.windowId, type: d, data: v || "" }), this.origin);
        }, c.prototype.send = function(d) {
          this.postMessage("m", d);
        }, c.enabled = function() {
          return e.iframeEnabled;
        }, c.transportName = "iframe", c.roundTrips = 2, u.exports = c;
      }, { "../utils/event": 46, "../utils/iframe": 47, "../utils/random": 50, "../utils/url": 52, "../version": 53, debug: void 0, events: 3, inherits: 54 }], 23: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("inherits"), r = n("./lib/sender-receiver"), i = n("./receiver/jsonp"), e = n("./sender/jsonp");
            function t(a) {
              if (!t.enabled()) throw new Error("Transport created when disabled");
              r.call(this, a, "/jsonp", e, i);
            }
            o(t, r), t.enabled = function() {
              return !!s.document;
            }, t.transportName = "jsonp-polling", t.roundTrips = 1, t.needBody = true, u.exports = t;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "./lib/sender-receiver": 28, "./receiver/jsonp": 31, "./sender/jsonp": 33, inherits: 54 }], 24: [function(n, u, b) {
        var s = n("inherits"), o = n("../../utils/url"), r = n("./sender-receiver");
        function i(e, t, a, l) {
          r.call(this, e, t, /* @__PURE__ */ (function(c) {
            return function(d, v, f) {
              var m = {};
              typeof v == "string" && (m.headers = { "Content-type": "text/plain" });
              var g = o.addPath(d, "/xhr_send"), p = new c("POST", g, v, m);
              return p.once("finish", function(j) {
                if (p = null, j !== 200 && j !== 204) return f(new Error("http status " + j));
                f();
              }), function() {
                p.close(), p = null;
                var j = new Error("Aborted");
                j.code = 1e3, f(j);
              };
            };
          })(l), a, l);
        }
        s(i, r), u.exports = i;
      }, { "../../utils/url": 52, "./sender-receiver": 28, debug: void 0, inherits: 54 }], 25: [function(n, u, b) {
        var s = n("inherits"), o = n("events").EventEmitter, r = function() {
        };
        function i(e, t) {
          o.call(this), this.sendBuffer = [], this.sender = t, this.url = e;
        }
        s(i, o), i.prototype.send = function(e) {
          this.sendBuffer.push(e), this.sendStop || this.sendSchedule();
        }, i.prototype.sendScheduleWait = function() {
          var e, t = this;
          this.sendStop = function() {
            t.sendStop = null, clearTimeout(e);
          }, e = setTimeout(function() {
            t.sendStop = null, t.sendSchedule();
          }, 25);
        }, i.prototype.sendSchedule = function() {
          r("sendSchedule", this.sendBuffer.length);
          var e = this;
          if (0 < this.sendBuffer.length) {
            var t = "[" + this.sendBuffer.join(",") + "]";
            this.sendStop = this.sender(this.url, t, function(a) {
              e.sendStop = null, a ? (e.emit("close", a.code || 1006, "Sending error: " + a), e.close()) : e.sendScheduleWait();
            }), this.sendBuffer = [];
          }
        }, i.prototype._cleanup = function() {
          this.removeAllListeners();
        }, i.prototype.close = function() {
          this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null);
        }, u.exports = i;
      }, { debug: void 0, events: 3, inherits: 54 }], 26: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("inherits"), r = n("../iframe"), i = n("../../utils/object");
            u.exports = function(e) {
              function t(a, l) {
                r.call(this, e.transportName, a, l);
              }
              return o(t, r), t.enabled = function(a, l) {
                if (!s.document) return false;
                var c = i.extend({}, l);
                return c.sameOrigin = true, e.enabled(c) && r.enabled();
              }, t.transportName = "iframe-" + e.transportName, t.needBody = true, t.roundTrips = r.roundTrips + e.roundTrips - 1, t.facadeTransport = e, t;
            };
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "../../utils/object": 49, "../iframe": 22, inherits: 54 }], 27: [function(n, u, b) {
        var s = n("inherits"), o = n("events").EventEmitter, r = function() {
        };
        function i(e, t, a) {
          o.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = a, this._scheduleReceiver();
        }
        s(i, o), i.prototype._scheduleReceiver = function() {
          var e = this, t = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
          t.on("message", function(a) {
            e.emit("message", a);
          }), t.once("close", function(a, l) {
            r("close", a, l, e.pollIsClosing), e.poll = t = null, e.pollIsClosing || (l === "network" ? e._scheduleReceiver() : (e.emit("close", a || 1006, l), e.removeAllListeners()));
          });
        }, i.prototype.abort = function() {
          this.removeAllListeners(), this.pollIsClosing = true, this.poll && this.poll.abort();
        }, u.exports = i;
      }, { debug: void 0, events: 3, inherits: 54 }], 28: [function(n, u, b) {
        var s = n("inherits"), o = n("../../utils/url"), r = n("./buffered-sender"), i = n("./polling");
        function e(t, a, l, c, d) {
          var v = o.addPath(t, a), f = this;
          r.call(this, t, l), this.poll = new i(c, v, d), this.poll.on("message", function(m) {
            f.emit("message", m);
          }), this.poll.once("close", function(m, g) {
            f.poll = null, f.emit("close", m, g), f.close();
          });
        }
        s(e, r), e.prototype.close = function() {
          r.prototype.close.call(this), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null);
        }, u.exports = e;
      }, { "../../utils/url": 52, "./buffered-sender": 25, "./polling": 27, debug: void 0, inherits: 54 }], 29: [function(n, u, b) {
        var s = n("inherits"), o = n("events").EventEmitter, r = n("eventsource"), i = function() {
        };
        function e(t) {
          o.call(this);
          var a = this, l = this.es = new r(t);
          l.onmessage = function(c) {
            i("message", c.data), a.emit("message", decodeURI(c.data));
          }, l.onerror = function(c) {
            i("error", l.readyState);
            var d = l.readyState !== 2 ? "network" : "permanent";
            a._cleanup(), a._close(d);
          };
        }
        s(e, o), e.prototype.abort = function() {
          this._cleanup(), this._close("user");
        }, e.prototype._cleanup = function() {
          var t = this.es;
          t && (t.onmessage = t.onerror = null, t.close(), this.es = null);
        }, e.prototype._close = function(t) {
          var a = this;
          setTimeout(function() {
            a.emit("close", null, t), a.removeAllListeners();
          }, 200);
        }, u.exports = e;
      }, { debug: void 0, events: 3, eventsource: 18, inherits: 54 }], 30: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("inherits"), r = n("../../utils/iframe"), i = n("../../utils/url"), e = n("events").EventEmitter, t = n("../../utils/random"), a = function() {
            };
            function l(d) {
              e.call(this);
              var v = this;
              r.polluteGlobalNamespace(), this.id = "a" + t.string(6), d = i.addQuery(d, "c=" + decodeURIComponent(r.WPrefix + "." + this.id)), a("using htmlfile", l.htmlfileEnabled);
              var f = l.htmlfileEnabled ? r.createHtmlfile : r.createIframe;
              s[r.WPrefix][this.id] = { start: function() {
                v.iframeObj.loaded();
              }, message: function(m) {
                v.emit("message", m);
              }, stop: function() {
                v._cleanup(), v._close("network");
              } }, this.iframeObj = f(d, function() {
                v._cleanup(), v._close("permanent");
              });
            }
            o(l, e), l.prototype.abort = function() {
              this._cleanup(), this._close("user");
            }, l.prototype._cleanup = function() {
              this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete s[r.WPrefix][this.id];
            }, l.prototype._close = function(d) {
              this.emit("close", null, d), this.removeAllListeners();
            }, l.htmlfileEnabled = false;
            var c = ["Active"].concat("Object").join("X");
            if (c in s) try {
              l.htmlfileEnabled = !!new s[c]("htmlfile");
            } catch {
            }
            l.enabled = l.htmlfileEnabled || r.iframeEnabled, u.exports = l;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "../../utils/iframe": 47, "../../utils/random": 50, "../../utils/url": 52, debug: void 0, events: 3, inherits: 54 }], 31: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("../../utils/iframe"), r = n("../../utils/random"), i = n("../../utils/browser"), e = n("../../utils/url"), t = n("inherits"), a = n("events").EventEmitter, l = function() {
            };
            function c(d) {
              var v = this;
              a.call(this), o.polluteGlobalNamespace(), this.id = "a" + r.string(6);
              var f = e.addQuery(d, "c=" + encodeURIComponent(o.WPrefix + "." + this.id));
              s[o.WPrefix][this.id] = this._callback.bind(this), this._createScript(f), this.timeoutId = setTimeout(function() {
                v._abort(new Error("JSONP script loaded abnormally (timeout)"));
              }, c.timeout);
            }
            t(c, a), c.prototype.abort = function() {
              if (s[o.WPrefix][this.id]) {
                var d = new Error("JSONP user aborted read");
                d.code = 1e3, this._abort(d);
              }
            }, c.timeout = 35e3, c.scriptErrorTimeout = 1e3, c.prototype._callback = function(d) {
              this._cleanup(), this.aborting || (d && this.emit("message", d), this.emit("close", null, "network"), this.removeAllListeners());
            }, c.prototype._abort = function(d) {
              this._cleanup(), this.aborting = true, this.emit("close", d.code, d.message), this.removeAllListeners();
            }, c.prototype._cleanup = function() {
              if (clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
                var d = this.script;
                d.parentNode.removeChild(d), d.onreadystatechange = d.onerror = d.onload = d.onclick = null, this.script = null;
              }
              delete s[o.WPrefix][this.id];
            }, c.prototype._scriptError = function() {
              var d = this;
              this.errorTimer || (this.errorTimer = setTimeout(function() {
                d.loadedOkay || d._abort(new Error("JSONP script loaded abnormally (onerror)"));
              }, c.scriptErrorTimeout));
            }, c.prototype._createScript = function(d) {
              var v, f = this, m = this.script = s.document.createElement("script");
              if (m.id = "a" + r.string(8), m.src = d, m.type = "text/javascript", m.charset = "UTF-8", m.onerror = this._scriptError.bind(this), m.onload = function() {
                f._abort(new Error("JSONP script loaded abnormally (onload)"));
              }, m.onreadystatechange = function() {
                if (l("onreadystatechange", m.readyState), /loaded|closed/.test(m.readyState)) {
                  if (m && m.htmlFor && m.onclick) {
                    f.loadedOkay = true;
                    try {
                      m.onclick();
                    } catch {
                    }
                  }
                  m && f._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"));
                }
              }, m.async === void 0 && s.document.attachEvent) if (i.isOpera()) (v = this.script2 = s.document.createElement("script")).text = "try{var a = document.getElementById('" + m.id + "'); if(a)a.onerror();}catch(x){};", m.async = v.async = false;
              else {
                try {
                  m.htmlFor = m.id, m.event = "onclick";
                } catch {
                }
                m.async = true;
              }
              m.async !== void 0 && (m.async = true);
              var g = s.document.getElementsByTagName("head")[0];
              g.insertBefore(m, g.firstChild), v && g.insertBefore(v, g.firstChild);
            }, u.exports = c;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "../../utils/browser": 44, "../../utils/iframe": 47, "../../utils/random": 50, "../../utils/url": 52, debug: void 0, events: 3, inherits: 54 }], 32: [function(n, u, b) {
        var s = n("inherits"), o = n("events").EventEmitter;
        function r(i, e) {
          o.call(this);
          var t = this;
          this.bufferPosition = 0, this.xo = new e("POST", i, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function(a, l) {
            t._chunkHandler(a, l), t.xo = null;
            var c = a === 200 ? "network" : "permanent";
            t.emit("close", null, c), t._cleanup();
          });
        }
        s(r, o), r.prototype._chunkHandler = function(i, e) {
          if (i === 200 && e) for (var t = -1; ; this.bufferPosition += t + 1) {
            var a = e.slice(this.bufferPosition);
            if ((t = a.indexOf(`
`)) === -1) break;
            var l = a.slice(0, t);
            l && this.emit("message", l);
          }
        }, r.prototype._cleanup = function() {
          this.removeAllListeners();
        }, r.prototype.abort = function() {
          this.xo && (this.xo.close(), this.emit("close", null, "user"), this.xo = null), this._cleanup();
        }, u.exports = r;
      }, { debug: void 0, events: 3, inherits: 54 }], 33: [function(n, u, b) {
        (function(s) {
          (function() {
            var o, r, i = n("../../utils/random"), e = n("../../utils/url"), t = function() {
            };
            u.exports = function(a, l, c) {
              o || ((o = s.document.createElement("form")).style.display = "none", o.style.position = "absolute", o.method = "POST", o.enctype = "application/x-www-form-urlencoded", o.acceptCharset = "UTF-8", (r = s.document.createElement("textarea")).name = "d", o.appendChild(r), s.document.body.appendChild(o));
              var d = "a" + i.string(8);
              o.target = d, o.action = e.addQuery(e.addPath(a, "/jsonp_send"), "i=" + d);
              var v = (function(m) {
                try {
                  return s.document.createElement('<iframe name="' + m + '">');
                } catch {
                  var g = s.document.createElement("iframe");
                  return g.name = m, g;
                }
              })(d);
              v.id = d, v.style.display = "none", o.appendChild(v);
              try {
                r.value = l;
              } catch {
              }
              o.submit();
              function f(m) {
                v.onerror && (v.onreadystatechange = v.onerror = v.onload = null, setTimeout(function() {
                  v.parentNode.removeChild(v), v = null;
                }, 500), r.value = "", c(m));
              }
              return v.onerror = function() {
                f();
              }, v.onload = function() {
                f();
              }, v.onreadystatechange = function(m) {
                t("onreadystatechange", d, v.readyState), v.readyState === "complete" && f();
              }, function() {
                f(new Error("Aborted"));
              };
            };
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "../../utils/random": 50, "../../utils/url": 52, debug: void 0 }], 34: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("events").EventEmitter, r = n("inherits"), i = n("../../utils/event"), e = n("../../utils/browser"), t = n("../../utils/url"), a = function() {
            };
            function l(c, d, v) {
              var f = this;
              o.call(this), setTimeout(function() {
                f._start(c, d, v);
              }, 0);
            }
            r(l, o), l.prototype._start = function(c, d, v) {
              var f = this, m = new s.XDomainRequest();
              d = t.addQuery(d, "t=" + +/* @__PURE__ */ new Date()), m.onerror = function() {
                f._error();
              }, m.ontimeout = function() {
                f._error();
              }, m.onprogress = function() {
                a("progress", m.responseText), f.emit("chunk", 200, m.responseText);
              }, m.onload = function() {
                f.emit("finish", 200, m.responseText), f._cleanup(false);
              }, this.xdr = m, this.unloadRef = i.unloadAdd(function() {
                f._cleanup(true);
              });
              try {
                this.xdr.open(c, d), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(v);
              } catch {
                this._error();
              }
            }, l.prototype._error = function() {
              this.emit("finish", 0, ""), this._cleanup(false);
            }, l.prototype._cleanup = function(c) {
              if (this.xdr) {
                if (this.removeAllListeners(), i.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, c) try {
                  this.xdr.abort();
                } catch {
                }
                this.unloadRef = this.xdr = null;
              }
            }, l.prototype.close = function() {
              this._cleanup(true);
            }, l.enabled = !(!s.XDomainRequest || !e.hasDomain()), u.exports = l;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "../../utils/browser": 44, "../../utils/event": 46, "../../utils/url": 52, debug: void 0, events: 3, inherits: 54 }], 35: [function(n, u, b) {
        var s = n("inherits"), o = n("../driver/xhr");
        function r(i, e, t, a) {
          o.call(this, i, e, t, a);
        }
        s(r, o), r.enabled = o.enabled && o.supportsCORS, u.exports = r;
      }, { "../driver/xhr": 17, inherits: 54 }], 36: [function(n, u, b) {
        var s = n("events").EventEmitter;
        function o() {
          var r = this;
          s.call(this), this.to = setTimeout(function() {
            r.emit("finish", 200, "{}");
          }, o.timeout);
        }
        n("inherits")(o, s), o.prototype.close = function() {
          clearTimeout(this.to);
        }, o.timeout = 2e3, u.exports = o;
      }, { events: 3, inherits: 54 }], 37: [function(n, u, b) {
        var s = n("inherits"), o = n("../driver/xhr");
        function r(i, e, t) {
          o.call(this, i, e, t, { noCredentials: true });
        }
        s(r, o), r.enabled = o.enabled, u.exports = r;
      }, { "../driver/xhr": 17, inherits: 54 }], 38: [function(n, u, b) {
        var s = n("../utils/event"), o = n("../utils/url"), r = n("inherits"), i = n("events").EventEmitter, e = n("./driver/websocket"), t = function() {
        };
        function a(l, c, d) {
          if (!a.enabled()) throw new Error("Transport created when disabled");
          i.call(this);
          var v = this, f = o.addPath(l, "/websocket");
          f = f.slice(0, 5) === "https" ? "wss" + f.slice(5) : "ws" + f.slice(4), this.url = f, this.ws = new e(this.url, [], d), this.ws.onmessage = function(m) {
            t("message event", m.data), v.emit("message", m.data);
          }, this.unloadRef = s.unloadAdd(function() {
            v.ws.close();
          }), this.ws.onclose = function(m) {
            t("close event", m.code, m.reason), v.emit("close", m.code, m.reason), v._cleanup();
          }, this.ws.onerror = function(m) {
            v.emit("close", 1006, "WebSocket connection broken"), v._cleanup();
          };
        }
        r(a, i), a.prototype.send = function(l) {
          var c = "[" + l + "]";
          this.ws.send(c);
        }, a.prototype.close = function() {
          var l = this.ws;
          this._cleanup(), l && l.close();
        }, a.prototype._cleanup = function() {
          var l = this.ws;
          l && (l.onmessage = l.onclose = l.onerror = null), s.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners();
        }, a.enabled = function() {
          return !!e;
        }, a.transportName = "websocket", a.roundTrips = 2, u.exports = a;
      }, { "../utils/event": 46, "../utils/url": 52, "./driver/websocket": 19, debug: void 0, events: 3, inherits: 54 }], 39: [function(n, u, b) {
        var s = n("inherits"), o = n("./lib/ajax-based"), r = n("./xdr-streaming"), i = n("./receiver/xhr"), e = n("./sender/xdr");
        function t(a) {
          if (!e.enabled) throw new Error("Transport created when disabled");
          o.call(this, a, "/xhr", i, e);
        }
        s(t, o), t.enabled = r.enabled, t.transportName = "xdr-polling", t.roundTrips = 2, u.exports = t;
      }, { "./lib/ajax-based": 24, "./receiver/xhr": 32, "./sender/xdr": 34, "./xdr-streaming": 40, inherits: 54 }], 40: [function(n, u, b) {
        var s = n("inherits"), o = n("./lib/ajax-based"), r = n("./receiver/xhr"), i = n("./sender/xdr");
        function e(t) {
          if (!i.enabled) throw new Error("Transport created when disabled");
          o.call(this, t, "/xhr_streaming", r, i);
        }
        s(e, o), e.enabled = function(t) {
          return !t.cookie_needed && !t.nullOrigin && i.enabled && t.sameScheme;
        }, e.transportName = "xdr-streaming", e.roundTrips = 2, u.exports = e;
      }, { "./lib/ajax-based": 24, "./receiver/xhr": 32, "./sender/xdr": 34, inherits: 54 }], 41: [function(n, u, b) {
        var s = n("inherits"), o = n("./lib/ajax-based"), r = n("./receiver/xhr"), i = n("./sender/xhr-cors"), e = n("./sender/xhr-local");
        function t(a) {
          if (!e.enabled && !i.enabled) throw new Error("Transport created when disabled");
          o.call(this, a, "/xhr", r, i);
        }
        s(t, o), t.enabled = function(a) {
          return !a.nullOrigin && (!(!e.enabled || !a.sameOrigin) || i.enabled);
        }, t.transportName = "xhr-polling", t.roundTrips = 2, u.exports = t;
      }, { "./lib/ajax-based": 24, "./receiver/xhr": 32, "./sender/xhr-cors": 35, "./sender/xhr-local": 37, inherits: 54 }], 42: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("inherits"), r = n("./lib/ajax-based"), i = n("./receiver/xhr"), e = n("./sender/xhr-cors"), t = n("./sender/xhr-local"), a = n("../utils/browser");
            function l(c) {
              if (!t.enabled && !e.enabled) throw new Error("Transport created when disabled");
              r.call(this, c, "/xhr_streaming", i, e);
            }
            o(l, r), l.enabled = function(c) {
              return !c.nullOrigin && !a.isOpera() && e.enabled;
            }, l.transportName = "xhr-streaming", l.roundTrips = 2, l.needBody = !!s.document, u.exports = l;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "../utils/browser": 44, "./lib/ajax-based": 24, "./receiver/xhr": 32, "./sender/xhr-cors": 35, "./sender/xhr-local": 37, inherits: 54 }], 43: [function(n, u, b) {
        (function(s) {
          (function() {
            s.crypto && s.crypto.getRandomValues ? u.exports.randomBytes = function(o) {
              var r = new Uint8Array(o);
              return s.crypto.getRandomValues(r), r;
            } : u.exports.randomBytes = function(o) {
              for (var r = new Array(o), i = 0; i < o; i++) r[i] = Math.floor(256 * Math.random());
              return r;
            };
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 44: [function(n, u, b) {
        (function(s) {
          (function() {
            u.exports = { isOpera: function() {
              return s.navigator && /opera/i.test(s.navigator.userAgent);
            }, isKonqueror: function() {
              return s.navigator && /konqueror/i.test(s.navigator.userAgent);
            }, hasDomain: function() {
              if (!s.document) return true;
              try {
                return !!s.document.domain;
              } catch {
                return false;
              }
            } };
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 45: [function(n, u, b) {
        var s, o = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
        u.exports = { quote: function(r) {
          var i = JSON.stringify(r);
          return o.lastIndex = 0, o.test(i) ? (s = s || (function(e) {
            var t, a = {}, l = [];
            for (t = 0; t < 65536; t++) l.push(String.fromCharCode(t));
            return e.lastIndex = 0, l.join("").replace(e, function(c) {
              return a[c] = "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4), "";
            }), e.lastIndex = 0, a;
          })(o), i.replace(o, function(e) {
            return s[e];
          })) : i;
        } };
      }, {}], 46: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("./random"), r = {}, i = false, e = s.chrome && s.chrome.app && s.chrome.app.runtime;
            u.exports = { attachEvent: function(t, a) {
              s.addEventListener !== void 0 ? s.addEventListener(t, a, false) : s.document && s.attachEvent && (s.document.attachEvent("on" + t, a), s.attachEvent("on" + t, a));
            }, detachEvent: function(t, a) {
              s.addEventListener !== void 0 ? s.removeEventListener(t, a, false) : s.document && s.detachEvent && (s.document.detachEvent("on" + t, a), s.detachEvent("on" + t, a));
            }, unloadAdd: function(t) {
              if (e) return null;
              var a = o.string(8);
              return r[a] = t, i && setTimeout(this.triggerUnloadCallbacks, 0), a;
            }, unloadDel: function(t) {
              t in r && delete r[t];
            }, triggerUnloadCallbacks: function() {
              for (var t in r) r[t](), delete r[t];
            } }, e || u.exports.attachEvent("unload", function() {
              i || (i = true, u.exports.triggerUnloadCallbacks());
            });
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "./random": 50 }], 47: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("./event"), r = n("./browser"), i = function() {
            };
            u.exports = { WPrefix: "_jp", currentWindowId: null, polluteGlobalNamespace: function() {
              u.exports.WPrefix in s || (s[u.exports.WPrefix] = {});
            }, postMessage: function(e, t) {
              s.parent !== s ? s.parent.postMessage(JSON.stringify({ windowId: u.exports.currentWindowId, type: e, data: t || "" }), "*") : i();
            }, createIframe: function(e, t) {
              function a() {
                clearTimeout(d);
                try {
                  f.onload = null;
                } catch {
                }
                f.onerror = null;
              }
              function l() {
                f && (a(), setTimeout(function() {
                  f && f.parentNode.removeChild(f), f = null;
                }, 0), o.unloadDel(v));
              }
              function c(m) {
                f && (l(), t(m));
              }
              var d, v, f = s.document.createElement("iframe");
              return f.src = e, f.style.display = "none", f.style.position = "absolute", f.onerror = function() {
                c("onerror");
              }, f.onload = function() {
                clearTimeout(d), d = setTimeout(function() {
                  c("onload timeout");
                }, 2e3);
              }, s.document.body.appendChild(f), d = setTimeout(function() {
                c("timeout");
              }, 15e3), v = o.unloadAdd(l), { post: function(m, g) {
                setTimeout(function() {
                  try {
                    f && f.contentWindow && f.contentWindow.postMessage(m, g);
                  } catch {
                  }
                }, 0);
              }, cleanup: l, loaded: a };
            }, createHtmlfile: function(e, t) {
              function a() {
                clearTimeout(d), f.onerror = null;
              }
              function l() {
                g && (a(), o.unloadDel(v), f.parentNode.removeChild(f), f = g = null, CollectGarbage());
              }
              function c(j) {
                g && (l(), t(j));
              }
              var d, v, f, m = ["Active"].concat("Object").join("X"), g = new s[m]("htmlfile");
              g.open(), g.write('<html><script>document.domain="' + s.document.domain + '";<\/script></html>'), g.close(), g.parentWindow[u.exports.WPrefix] = s[u.exports.WPrefix];
              var p = g.createElement("div");
              return g.body.appendChild(p), f = g.createElement("iframe"), p.appendChild(f), f.src = e, f.onerror = function() {
                c("onerror");
              }, d = setTimeout(function() {
                c("timeout");
              }, 15e3), v = o.unloadAdd(l), { post: function(j, x) {
                try {
                  setTimeout(function() {
                    f && f.contentWindow && f.contentWindow.postMessage(j, x);
                  }, 0);
                } catch {
                }
              }, cleanup: l, loaded: a };
            } }, u.exports.iframeEnabled = false, s.document && (u.exports.iframeEnabled = (typeof s.postMessage == "function" || typeof s.postMessage == "object") && !r.isKonqueror());
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { "./browser": 44, "./event": 46, debug: void 0 }], 48: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = {};
            ["log", "debug", "warn"].forEach(function(r) {
              var i;
              try {
                i = s.console && s.console[r] && s.console[r].apply;
              } catch {
              }
              o[r] = i ? function() {
                return s.console[r].apply(s.console, arguments);
              } : r === "log" ? function() {
              } : o.log;
            }), u.exports = o;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 49: [function(n, u, b) {
        u.exports = { isObject: function(s) {
          var o = typeof s;
          return o == "function" || o == "object" && !!s;
        }, extend: function(s) {
          if (!this.isObject(s)) return s;
          for (var o, r, i = 1, e = arguments.length; i < e; i++) for (r in o = arguments[i]) Object.prototype.hasOwnProperty.call(o, r) && (s[r] = o[r]);
          return s;
        } };
      }, {}], 50: [function(n, u, b) {
        var s = n("crypto"), o = "abcdefghijklmnopqrstuvwxyz012345";
        u.exports = { string: function(r) {
          for (var i = o.length, e = s.randomBytes(r), t = [], a = 0; a < r; a++) t.push(o.substr(e[a] % i, 1));
          return t.join("");
        }, number: function(r) {
          return Math.floor(Math.random() * r);
        }, numberString: function(r) {
          var i = ("" + (r - 1)).length;
          return (new Array(i + 1).join("0") + this.number(r)).slice(-i);
        } };
      }, { crypto: 43 }], 51: [function(n, u, b) {
        var s = function() {
        };
        u.exports = function(o) {
          return { filterToEnabled: function(r, i) {
            var e = { main: [], facade: [] };
            return r ? typeof r == "string" && (r = [r]) : r = [], o.forEach(function(t) {
              t && (t.transportName !== "websocket" || i.websocket !== false ? r.length && r.indexOf(t.transportName) === -1 ? s("not in whitelist", t.transportName) : t.enabled(i) ? (s("enabled", t.transportName), e.main.push(t), t.facadeTransport && e.facade.push(t.facadeTransport)) : s("disabled", t.transportName) : s());
            }), e;
          } };
        };
      }, { debug: void 0 }], 52: [function(n, u, b) {
        var s = n("url-parse");
        u.exports = { getOrigin: function(o) {
          if (!o) return null;
          var r = new s(o);
          if (r.protocol === "file:") return null;
          var i = r.port;
          return i = i || (r.protocol === "https:" ? "443" : "80"), r.protocol + "//" + r.hostname + ":" + i;
        }, isOriginEqual: function(o, r) {
          var i = this.getOrigin(o) === this.getOrigin(r);
          return i;
        }, isSchemeEqual: function(o, r) {
          return o.split(":")[0] === r.split(":")[0];
        }, addPath: function(o, r) {
          var i = o.split("?");
          return i[0] + r + (i[1] ? "?" + i[1] : "");
        }, addQuery: function(o, r) {
          return o + (o.indexOf("?") === -1 ? "?" + r : "&" + r);
        }, isLoopbackAddr: function(o) {
          return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(o) || /^\[::1\]$/.test(o);
        } };
      }, { debug: void 0, "url-parse": 57 }], 53: [function(n, u, b) {
        u.exports = "1.6.1";
      }, {}], 54: [function(n, u, b) {
        typeof Object.create == "function" ? u.exports = function(s, o) {
          o && (s.super_ = o, s.prototype = Object.create(o.prototype, { constructor: { value: s, enumerable: false, writable: true, configurable: true } }));
        } : u.exports = function(s, o) {
          if (o) {
            let r = function() {
            };
            s.super_ = o, r.prototype = o.prototype, s.prototype = new r(), s.prototype.constructor = s;
          }
        };
      }, {}], 55: [function(n, u, b) {
        var s = Object.prototype.hasOwnProperty;
        function o(r) {
          try {
            return decodeURIComponent(r.replace(/\+/g, " "));
          } catch {
            return null;
          }
        }
        b.stringify = function(r, i) {
          i = i || "";
          var e, t, a = [];
          for (t in typeof i != "string" && (i = "?"), r) if (s.call(r, t)) {
            if ((e = r[t]) || e != null && !isNaN(e) || (e = ""), t = encodeURIComponent(t), e = encodeURIComponent(e), t === null || e === null) continue;
            a.push(t + "=" + e);
          }
          return a.length ? i + a.join("&") : "";
        }, b.parse = function(r) {
          for (var i, e = /([^=?&]+)=?([^&]*)/g, t = {}; i = e.exec(r); ) {
            var a = o(i[1]), l = o(i[2]);
            a === null || l === null || a in t || (t[a] = l);
          }
          return t;
        };
      }, {}], 56: [function(n, u, b) {
        u.exports = function(s, o) {
          if (o = o.split(":")[0], !(s = +s)) return false;
          switch (o) {
            case "http":
            case "ws":
              return s !== 80;
            case "https":
            case "wss":
              return s !== 443;
            case "ftp":
              return s !== 21;
            case "gopher":
              return s !== 70;
            case "file":
              return false;
          }
          return s !== 0;
        };
      }, {}], 57: [function(n, u, b) {
        (function(s) {
          (function() {
            var o = n("requires-port"), r = n("querystringify"), i = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, e = /[\n\r\t]/g, t = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, a = /:\d+$/, l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, c = /^[a-zA-Z]:/;
            function d(x) {
              return (x || "").toString().replace(i, "");
            }
            var v = [["#", "hash"], ["?", "query"], function(x, y) {
              return g(y.protocol) ? x.replace(/\\/g, "/") : x;
            }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], f = { hash: 1, query: 1 };
            function m(x) {
              var y, E = (typeof window < "u" ? window : s !== void 0 ? s : typeof self < "u" ? self : {}).location || {}, h = {}, I = typeof (x = x || E);
              if (x.protocol === "blob:") h = new j(unescape(x.pathname), {});
              else if (I == "string") for (y in h = new j(x, {}), f) delete h[y];
              else if (I == "object") {
                for (y in x) y in f || (h[y] = x[y]);
                h.slashes === void 0 && (h.slashes = t.test(x.href));
              }
              return h;
            }
            function g(x) {
              return x === "file:" || x === "ftp:" || x === "http:" || x === "https:" || x === "ws:" || x === "wss:";
            }
            function p(x, y) {
              x = (x = d(x)).replace(e, ""), y = y || {};
              var E, h = l.exec(x), I = h[1] ? h[1].toLowerCase() : "", w = !!h[2], T = !!h[3], _ = 0;
              return w ? _ = T ? (E = h[2] + h[3] + h[4], h[2].length + h[3].length) : (E = h[2] + h[4], h[2].length) : T ? (E = h[3] + h[4], _ = h[3].length) : E = h[4], I === "file:" ? 2 <= _ && (E = E.slice(2)) : g(I) ? E = h[4] : I ? w && (E = E.slice(2)) : 2 <= _ && g(y.protocol) && (E = h[4]), { protocol: I, slashes: w || g(I), slashesCount: _, rest: E };
            }
            function j(x, y, E) {
              if (x = (x = d(x)).replace(e, ""), !(this instanceof j)) return new j(x, y, E);
              var h, I, w, T, _, k, C = v.slice(), A = typeof y, S = this, W = 0;
              for (A != "object" && A != "string" && (E = y, y = null), E && typeof E != "function" && (E = r.parse), h = !(I = p(x || "", y = m(y))).protocol && !I.slashes, S.slashes = I.slashes || h && y.slashes, S.protocol = I.protocol || y.protocol || "", x = I.rest, (I.protocol === "file:" && (I.slashesCount !== 2 || c.test(x)) || !I.slashes && (I.protocol || I.slashesCount < 2 || !g(S.protocol))) && (C[3] = [/(.*)/, "pathname"]); W < C.length; W++) typeof (T = C[W]) != "function" ? (w = T[0], k = T[1], w != w ? S[k] = x : typeof w == "string" ? ~(_ = w === "@" ? x.lastIndexOf(w) : x.indexOf(w)) && (x = typeof T[2] == "number" ? (S[k] = x.slice(0, _), x.slice(_ + T[2])) : (S[k] = x.slice(_), x.slice(0, _))) : (_ = w.exec(x)) && (S[k] = _[1], x = x.slice(0, _.index)), S[k] = S[k] || h && T[3] && y[k] || "", T[4] && (S[k] = S[k].toLowerCase())) : x = T(x, S);
              E && (S.query = E(S.query)), h && y.slashes && S.pathname.charAt(0) !== "/" && (S.pathname !== "" || y.pathname !== "") && (S.pathname = (function(R, B) {
                if (R === "") return B;
                for (var G = (B || "/").split("/").slice(0, -1).concat(R.split("/")), z = G.length, H = G[z - 1], se = false, ee = 0; z--; ) G[z] === "." ? G.splice(z, 1) : G[z] === ".." ? (G.splice(z, 1), ee++) : ee && (z === 0 && (se = true), G.splice(z, 1), ee--);
                return se && G.unshift(""), H !== "." && H !== ".." || G.push(""), G.join("/");
              })(S.pathname, y.pathname)), S.pathname.charAt(0) !== "/" && g(S.protocol) && (S.pathname = "/" + S.pathname), o(S.port, S.protocol) || (S.host = S.hostname, S.port = ""), S.username = S.password = "", S.auth && (~(_ = S.auth.indexOf(":")) ? (S.username = S.auth.slice(0, _), S.username = encodeURIComponent(decodeURIComponent(S.username)), S.password = S.auth.slice(_ + 1), S.password = encodeURIComponent(decodeURIComponent(S.password))) : S.username = encodeURIComponent(decodeURIComponent(S.auth)), S.auth = S.password ? S.username + ":" + S.password : S.username), S.origin = S.protocol !== "file:" && g(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString();
            }
            j.prototype = { set: function(x, y, E) {
              var h = this;
              switch (x) {
                case "query":
                  typeof y == "string" && y.length && (y = (E || r.parse)(y)), h[x] = y;
                  break;
                case "port":
                  h[x] = y, o(y, h.protocol) ? y && (h.host = h.hostname + ":" + y) : (h.host = h.hostname, h[x] = "");
                  break;
                case "hostname":
                  h[x] = y, h.port && (y += ":" + h.port), h.host = y;
                  break;
                case "host":
                  h[x] = y, a.test(y) ? (y = y.split(":"), h.port = y.pop(), h.hostname = y.join(":")) : (h.hostname = y, h.port = "");
                  break;
                case "protocol":
                  h.protocol = y.toLowerCase(), h.slashes = !E;
                  break;
                case "pathname":
                case "hash":
                  if (y) {
                    var I = x === "pathname" ? "/" : "#";
                    h[x] = y.charAt(0) !== I ? I + y : y;
                  } else h[x] = y;
                  break;
                case "username":
                case "password":
                  h[x] = encodeURIComponent(y);
                  break;
                case "auth":
                  var w = y.indexOf(":");
                  ~w ? (h.username = y.slice(0, w), h.username = encodeURIComponent(decodeURIComponent(h.username)), h.password = y.slice(w + 1), h.password = encodeURIComponent(decodeURIComponent(h.password))) : h.username = encodeURIComponent(decodeURIComponent(y));
              }
              for (var T = 0; T < v.length; T++) {
                var _ = v[T];
                _[4] && (h[_[1]] = h[_[1]].toLowerCase());
              }
              return h.auth = h.password ? h.username + ":" + h.password : h.username, h.origin = h.protocol !== "file:" && g(h.protocol) && h.host ? h.protocol + "//" + h.host : "null", h.href = h.toString(), h;
            }, toString: function(x) {
              x && typeof x == "function" || (x = r.stringify);
              var y, E = this, h = E.host, I = E.protocol;
              I && I.charAt(I.length - 1) !== ":" && (I += ":");
              var w = I + (E.protocol && E.slashes || g(E.protocol) ? "//" : "");
              return E.username ? (w += E.username, E.password && (w += ":" + E.password), w += "@") : E.password ? (w += ":" + E.password, w += "@") : E.protocol !== "file:" && g(E.protocol) && !h && E.pathname !== "/" && (w += "@"), (h[h.length - 1] === ":" || a.test(E.hostname) && !E.port) && (h += ":"), w += h + E.pathname, (y = typeof E.query == "object" ? x(E.query) : E.query) && (w += y.charAt(0) !== "?" ? "?" + y : y), E.hash && (w += E.hash), w;
            } }, j.extractProtocol = p, j.location = m, j.trimLeft = d, j.qs = r, u.exports = j;
          }).call(this);
        }).call(this, typeof N < "u" ? N : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, { querystringify: 55, "requires-port": 56 }] }, {}, [1])(1);
    });
  })(ne)), ne.exports;
}
var Fe = Be();
const ze = me(Fe);
var X = { exports: {} }, Y = {}, le;
function ve() {
  return le || (le = 1, (function(O) {
    (function() {
      var L, n, u, b, s = {}.hasOwnProperty, o = [].slice;
      L = { LF: `
`, NULL: "\0" }, u = (function() {
        var r;
        function i(e, t, a) {
          this.command = e, this.headers = t ?? {}, this.body = a ?? "";
        }
        return i.prototype.toString = function() {
          var e, t, a, l, c;
          e = [this.command], a = this.headers["content-length"] === false, a && delete this.headers["content-length"], c = this.headers;
          for (t in c) s.call(c, t) && (l = c[t], e.push("" + t + ":" + l));
          return this.body && !a && e.push("content-length:" + i.sizeOfUTF8(this.body)), e.push(L.LF + this.body), e.join(L.LF);
        }, i.sizeOfUTF8 = function(e) {
          return e ? encodeURI(e).match(/%..|./g).length : 0;
        }, r = function(e) {
          var t, a, l, c, d, v, f, m, g, p, j, x, y, E, h, I, w;
          for (c = e.search(RegExp("" + L.LF + L.LF)), d = e.substring(0, c).split(L.LF), l = d.shift(), v = {}, x = function(T) {
            return T.replace(/^\s+|\s+$/g, "");
          }, I = d.reverse(), y = 0, h = I.length; y < h; y++) p = I[y], m = p.indexOf(":"), v[x(p.substring(0, m))] = x(p.substring(m + 1));
          if (t = "", j = c + 2, v["content-length"]) g = parseInt(v["content-length"]), t = ("" + e).substring(j, j + g);
          else for (a = null, f = E = j, w = e.length; (j <= w ? E < w : E > w) && (a = e.charAt(f), a !== L.NULL); f = j <= w ? ++E : --E) t += a;
          return new i(l, v, t);
        }, i.unmarshall = function(e) {
          var t;
          return (function() {
            var a, l, c, d;
            for (c = e.split(RegExp("" + L.NULL + L.LF + "*")), d = [], a = 0, l = c.length; a < l; a++) t = c[a], (t == null ? void 0 : t.length) > 0 && d.push(r(t));
            return d;
          })();
        }, i.marshall = function(e, t, a) {
          var l;
          return l = new i(e, t, a), l.toString() + L.NULL;
        }, i;
      })(), n = (function() {
        var r;
        function i(e) {
          this.ws = e, this.ws.binaryType = "arraybuffer", this.counter = 0, this.connected = false, this.heartbeat = { outgoing: 1e4, incoming: 1e4 }, this.maxWebSocketFrameSize = 16 * 1024, this.subscriptions = {};
        }
        return i.prototype.debug = function(e) {
          var t;
          return typeof window < "u" && window !== null && (t = window.console) != null ? t.log(e) : void 0;
        }, r = function() {
          return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).valueOf;
        }, i.prototype._transmit = function(e, t, a) {
          var l;
          for (l = u.marshall(e, t, a), typeof this.debug == "function" && this.debug(">>> " + l); ; ) if (l.length > this.maxWebSocketFrameSize) this.ws.send(l.substring(0, this.maxWebSocketFrameSize)), l = l.substring(this.maxWebSocketFrameSize), typeof this.debug == "function" && this.debug("remaining = " + l.length);
          else return this.ws.send(l);
        }, i.prototype._setupHeartbeat = function(e) {
          var t, a, l, c, d, v;
          if (!((d = e.version) !== b.VERSIONS.V1_1 && d !== b.VERSIONS.V1_2) && (v = (function() {
            var f, m, g, p;
            for (g = e["heart-beat"].split(","), p = [], f = 0, m = g.length; f < m; f++) c = g[f], p.push(parseInt(c));
            return p;
          })(), a = v[0], t = v[1], this.heartbeat.outgoing === 0 || t === 0 || (l = Math.max(this.heartbeat.outgoing, t), typeof this.debug == "function" && this.debug("send PING every " + l + "ms"), this.pinger = b.setInterval(l, /* @__PURE__ */ (function(f) {
            return function() {
              return f.ws.send(L.LF), typeof f.debug == "function" ? f.debug(">>> PING") : void 0;
            };
          })(this))), !(this.heartbeat.incoming === 0 || a === 0))) return l = Math.max(this.heartbeat.incoming, a), typeof this.debug == "function" && this.debug("check PONG every " + l + "ms"), this.ponger = b.setInterval(l, /* @__PURE__ */ (function(f) {
            return function() {
              var m;
              if (m = r() - f.serverActivity, m > l * 2) return typeof f.debug == "function" && f.debug("did not receive server activity for the last " + m + "ms"), f.ws.close();
            };
          })(this));
        }, i.prototype._parseConnect = function() {
          var e, t, a, l;
          switch (e = 1 <= arguments.length ? o.call(arguments, 0) : [], l = {}, e.length) {
            case 2:
              l = e[0], t = e[1];
              break;
            case 3:
              e[1] instanceof Function ? (l = e[0], t = e[1], a = e[2]) : (l.login = e[0], l.passcode = e[1], t = e[2]);
              break;
            case 4:
              l.login = e[0], l.passcode = e[1], t = e[2], a = e[3];
              break;
            default:
              l.login = e[0], l.passcode = e[1], t = e[2], a = e[3], l.host = e[4];
          }
          return [l, t, a];
        }, i.prototype.connect = function() {
          var e, t, a, l;
          return e = 1 <= arguments.length ? o.call(arguments, 0) : [], l = this._parseConnect.apply(this, e), a = l[0], this.connectCallback = l[1], t = l[2], typeof this.debug == "function" && this.debug("Opening Web Socket..."), this.ws.onmessage = /* @__PURE__ */ (function(c) {
            return function(d) {
              var v, f, m, g, p, j, x, y, E, h, I, w;
              if (g = typeof ArrayBuffer < "u" && d.data instanceof ArrayBuffer ? (v = new Uint8Array(d.data), typeof c.debug == "function" && c.debug("--- got data length: " + v.length), (function() {
                var T, _, k;
                for (k = [], T = 0, _ = v.length; T < _; T++) f = v[T], k.push(String.fromCharCode(f));
                return k;
              })().join("")) : d.data, c.serverActivity = r(), g === L.LF) {
                typeof c.debug == "function" && c.debug("<<< PONG");
                return;
              }
              for (typeof c.debug == "function" && c.debug("<<< " + g), I = u.unmarshall(g), w = [], E = 0, h = I.length; E < h; E++) switch (p = I[E], p.command) {
                case "CONNECTED":
                  typeof c.debug == "function" && c.debug("connected to server " + p.headers.server), c.connected = true, c._setupHeartbeat(p.headers), w.push(typeof c.connectCallback == "function" ? c.connectCallback(p) : void 0);
                  break;
                case "MESSAGE":
                  y = p.headers.subscription, x = c.subscriptions[y] || c.onreceive, x ? (m = c, j = p.headers["message-id"], p.ack = function(T) {
                    return T == null && (T = {}), m.ack(j, y, T);
                  }, p.nack = function(T) {
                    return T == null && (T = {}), m.nack(j, y, T);
                  }, w.push(x(p))) : w.push(typeof c.debug == "function" ? c.debug("Unhandled received MESSAGE: " + p) : void 0);
                  break;
                case "RECEIPT":
                  w.push(typeof c.onreceipt == "function" ? c.onreceipt(p) : void 0);
                  break;
                case "ERROR":
                  w.push(typeof t == "function" ? t(p) : void 0);
                  break;
                default:
                  w.push(typeof c.debug == "function" ? c.debug("Unhandled frame: " + p) : void 0);
              }
              return w;
            };
          })(this), this.ws.onclose = /* @__PURE__ */ (function(c) {
            return function() {
              var d;
              return d = "Whoops! Lost connection to " + c.ws.url, typeof c.debug == "function" && c.debug(d), c._cleanUp(), typeof t == "function" ? t(d) : void 0;
            };
          })(this), this.ws.onopen = /* @__PURE__ */ (function(c) {
            return function() {
              return typeof c.debug == "function" && c.debug("Web Socket Opened..."), a["accept-version"] = b.VERSIONS.supportedVersions(), a["heart-beat"] = [c.heartbeat.outgoing, c.heartbeat.incoming].join(","), c._transmit("CONNECT", a);
            };
          })(this);
        }, i.prototype.disconnect = function(e, t) {
          return t == null && (t = {}), this._transmit("DISCONNECT", t), this.ws.onclose = null, this.ws.close(), this._cleanUp(), typeof e == "function" ? e() : void 0;
        }, i.prototype._cleanUp = function() {
          if (this.connected = false, this.pinger && b.clearInterval(this.pinger), this.ponger) return b.clearInterval(this.ponger);
        }, i.prototype.send = function(e, t, a) {
          return t == null && (t = {}), a == null && (a = ""), t.destination = e, this._transmit("SEND", t, a);
        }, i.prototype.subscribe = function(e, t, a) {
          var l;
          return a == null && (a = {}), a.id || (a.id = "sub-" + this.counter++), a.destination = e, this.subscriptions[a.id] = t, this._transmit("SUBSCRIBE", a), l = this, { id: a.id, unsubscribe: function() {
            return l.unsubscribe(a.id);
          } };
        }, i.prototype.unsubscribe = function(e) {
          return delete this.subscriptions[e], this._transmit("UNSUBSCRIBE", { id: e });
        }, i.prototype.begin = function(e) {
          var t, a;
          return a = e || "tx-" + this.counter++, this._transmit("BEGIN", { transaction: a }), t = this, { id: a, commit: function() {
            return t.commit(a);
          }, abort: function() {
            return t.abort(a);
          } };
        }, i.prototype.commit = function(e) {
          return this._transmit("COMMIT", { transaction: e });
        }, i.prototype.abort = function(e) {
          return this._transmit("ABORT", { transaction: e });
        }, i.prototype.ack = function(e, t, a) {
          return a == null && (a = {}), a["message-id"] = e, a.subscription = t, this._transmit("ACK", a);
        }, i.prototype.nack = function(e, t, a) {
          return a == null && (a = {}), a["message-id"] = e, a.subscription = t, this._transmit("NACK", a);
        }, i;
      })(), b = { VERSIONS: { V1_0: "1.0", V1_1: "1.1", V1_2: "1.2", supportedVersions: function() {
        return "1.1,1.0";
      } }, client: function(r, i) {
        var e, t;
        return i == null && (i = ["v10.stomp", "v11.stomp"]), e = b.WebSocketClass || WebSocket, t = new e(r, i), new n(t);
      }, over: function(r) {
        return new n(r);
      }, Frame: u }, O !== null && (O.Stomp = b), typeof window < "u" && window !== null ? (b.setInterval = function(r, i) {
        return window.setInterval(i, r);
      }, b.clearInterval = function(r) {
        return window.clearInterval(r);
      }, window.Stomp = b) : O || (self.Stomp = b);
    }).call(Y);
  })(Y)), Y;
}
var K = {}, re, ue;
function Ge() {
  if (ue) return re;
  ue = 1;
  var O = function() {
    if (typeof self == "object" && self) return self;
    if (typeof window == "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
  };
  return re = (function() {
    if (this) return this;
    if (typeof globalThis == "object" && globalThis) return globalThis;
    try {
      Object.defineProperty(Object.prototype, "__global__", { get: function() {
        return this;
      }, configurable: true });
    } catch {
      return O();
    }
    try {
      return __global__ || O();
    } finally {
      delete Object.prototype.__global__;
    }
  })(), re;
}
const Ve = "1.0.35", Je = { version: Ve };
var oe, ce;
function $e() {
  return ce || (ce = 1, oe = Je.version), oe;
}
var ie, fe;
function He() {
  if (fe) return ie;
  fe = 1;
  var O;
  if (typeof globalThis == "object") O = globalThis;
  else try {
    O = Ge();
  } catch {
  } finally {
    if (!O && typeof window < "u" && (O = window), !O) throw new Error("Could not determine global this");
  }
  var L = O.WebSocket || O.MozWebSocket, n = $e();
  function u(b, s) {
    var o;
    return s ? o = new L(b, s) : o = new L(b), o;
  }
  return L && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function(b) {
    Object.defineProperty(u, b, { get: function() {
      return L[b];
    } });
  }), ie = { w3cwebsocket: L ? u : null, version: n }, ie;
}
var de;
function Xe() {
  return de || (de = 1, (function() {
    var O, L, n, u, b, s;
    O = ve(), L = be, O.Stomp.setInterval = function(o, r) {
      return setInterval(r, o);
    }, O.Stomp.clearInterval = function(o) {
      return clearInterval(o);
    }, b = function(o, r) {
      var i, e;
      return i = null, e = { url: "tcp:// " + r + ":" + o, send: function(t) {
        return i.write(t);
      }, close: function() {
        return i.end();
      } }, i = L.connect(o, r, function(t) {
        return e.onopen();
      }), i.on("error", function(t) {
        return typeof e.onclose == "function" ? e.onclose(t) : void 0;
      }), i.on("close", function(t) {
        return typeof e.onclose == "function" ? e.onclose(t) : void 0;
      }), i.on("data", function(t) {
        var a;
        return a = { data: t.toString() }, e.onmessage(a);
      }), e;
    }, s = function(o) {
      var r, i, e, t;
      return r = He().client, i = null, t = { url: o, send: function(a) {
        return i.sendUTF(a);
      }, close: function() {
        return i.close();
      } }, e = new r(), e.on("connect", function(a) {
        return i = a, t.onopen(), i.on("error", function(l) {
          return typeof t.onclose == "function" ? t.onclose(l) : void 0;
        }), i.on("close", function() {
          return typeof t.onclose == "function" ? t.onclose() : void 0;
        }), i.on("message", function(l) {
          var c;
          if (l.type === "utf8") return c = { data: l.utf8Data }, t.onmessage(c);
        });
      }), e.connect(o), t;
    }, n = function(o, r) {
      var i;
      return i = b(r, o), O.Stomp.over(i);
    }, u = function(o) {
      var r;
      return r = s(o), O.Stomp.over(r);
    }, K.overTCP = n, K.overWS = u;
  }).call(K)), K;
}
var pe;
function Ke() {
  if (pe) return X.exports;
  pe = 1;
  var O = ve(), L = Xe();
  return X.exports = O.Stomp, X.exports.overTCP = L.overTCP, X.exports.overWS = L.overWS, X.exports;
}
var Qe = Ke();
const Ye = me(Qe), Ze = { components: { WxReplySelect: Pe, WxNews: he, WxVideoPlayer: De, WxVoicePlayer: Ue }, props: { wxUserId: { type: String }, appId: { type: String } }, setup(O, L) {
  const { proxy: n } = ge(), u = ye({ nowStr: (/* @__PURE__ */ new Date()).getTime(), objData: { repType: "text", content: { articles: [] } }, mainLoading: false, sendLoading: false, tableLoading: false, loadMore: true, tableData: [], qqMapKey: we, page: { total: 0, currentPage: 1, pageSize: 14, ascs: "", descs: "create_time" }, option: { props: { avatar: "avatar", author: "author", body: "body" } }, timer: void 0 }), b = _e(null);
  l(), xe(() => {
    s();
  }), Se(() => {
    clearInterval(u.timer);
  }), Ee(() => {
    clearInterval(u.timer), r();
  });
  function s() {
    o(), u.timer = setInterval(() => {
      try {
        b.value.send("test");
      } catch {
        o();
      }
    }, 5e3);
  }
  function o() {
    const d = { Authorization: "Bearer " + ke().access_token }, v = new ze("/weixin/ws");
    b.value = Ye.over(v), b.value.connect(d, (f) => {
      b.value.subscribe("/weixin/wx_msg" + O.wxUserId, (m) => {
        const g = JSON.parse(m.body);
        g.createTime = Te(g.createTime).format("YYYY-MM-DD HH:mm:ss"), u.tableData = [...u.tableData, g], e(), g.type == "1" && Me({ id: g.id, readFlag: "0" }).then(() => {
        });
      });
    }, (f) => {
    });
  }
  function r() {
    try {
      b.value != null && b.value.disconnect();
    } catch {
    }
  }
  function i() {
    u.objData && (u.objData.repType == "news" && (u.objData.content.articles = [u.objData.content.articles[0]], n.$message({ showClose: true, message: n.$t("components.wxmsg.articleLimitMessage"), type: "success" })), u.sendLoading = true, qe(Object.assign({ appId: O.appId, wxUserId: O.wxUserId }, u.objData)).then((c) => {
      u.sendLoading = false, u.tableData = [...u.tableData, c.data], e(), u.objData = { repType: "text", content: { articles: [] } };
    }).catch(() => {
      u.sendLoading = false;
    }));
  }
  function e() {
    n.$nextTick(() => {
      const c = document.getElementById("msg-div" + u.nowStr);
      c.scrollTop = c.scrollHeight;
    });
  }
  function t() {
    u.page.currentPage++, a(u.page);
  }
  function a(c, d) {
    u.tableLoading = true, We(Object.assign({ current: c.currentPage, size: c.pageSize, descs: c.descs, ascs: c.ascs, appId: O.appId, wxUserId: O.wxUserId }, d)).then((v) => {
      const f = document.getElementById("msg-div" + u.nowStr);
      let m = 0;
      f && (m = f.scrollHeight);
      const g = v.data.records.reverse();
      u.tableData = [...g, ...u.tableData], u.page.total = v.data.total, u.tableLoading = false, (g.length < u.page.pageSize || g.length == 0) && (u.loadMore = false), u.page.currentPage == 1 ? e() : g.length != 0 && n.$nextTick(() => {
        m != 0 && (f.scrollTop = document.getElementById("msg-div" + u.nowStr).scrollHeight - m - 100);
      }), u.page.currentPage = c.currentPage, u.page.pageSize = c.pageSize;
    }).catch(() => {
      u.tableLoading = false;
    });
  }
  function l() {
    a(u.page);
  }
  return { ...Oe(u), initWebSocket: s, connection: o, disconnect: r, sendMsg: i, scrollToBottom: e, loadingMore: t, getPageF: a, refreshChange: l };
} }, et = { class: "msg-main" }, tt = ["id"], nt = { key: 0 }, rt = { class: "el-table__empty-text" }, ot = { key: 1, class: "el-table__empty-block" }, it = { class: "el-table__empty-text" }, st = { class: "avatar-div" }, at = { class: "avue-comment__author" }, lt = { class: "avue-comment__main" }, ut = { class: "avue-comment__header" }, ct = { class: "avue-comment__create_time" }, ft = { key: 0 }, dt = { key: 1 }, pt = { key: 2 }, ht = { key: 3 }, mt = { style: { color: "#888", "font-size": "14px", padding: "5px", "word-wrap": "break-word", "word-break": "break-all" } }, vt = { key: 4 }, bt = { key: 5 }, gt = { key: 6 }, yt = ["href"], wt = ["src"], _t = { key: 7 }, xt = { key: 8, style: { "text-align": "center" } }, St = { key: 9, style: { "text-align": "center" } }, Et = { key: 10 }, kt = ["src"], Tt = { key: 11, class: "avue-card__detail" }, Ot = { class: "avue-card__title" }, Ct = { class: "avue-card__info", style: { height: "unset" } }, jt = { key: 12, style: { width: "300px" } }, It = { key: 13 }, Nt = { class: "avue-card__body", style: { "background-color": "#fff", "border-radius": "5px" } }, Lt = { class: "avue-card__avatar" }, At = ["src"], Rt = { class: "avue-card__detail" }, Ut = { class: "avue-card__title", style: { "margin-bottom": "unset" } }, Pt = { class: "avue-card__info", style: { height: "unset" } }, Dt = { class: "msg-send" };
function Wt(O, L, n, u, b, s) {
  const o = $("UserFilled"), r = $("el-icon"), i = $("el-avatar"), e = $("el-tag"), t = $("WxVoicePlayer"), a = $("WxVideoPlayer"), l = $("el-icon-map-location"), c = $("el-link"), d = $("el-icon-link"), v = he, f = $("WxReplySelect"), m = $("el-button"), g = je("loading");
  return te((P(), D("div", et, [U("div", { id: "msg-div" + O.nowStr, class: "msg-div" }, [te(U("div", null, null, 512), [[g, O.tableLoading]]), O.tableLoading ? F("", true) : (P(), D("div", nt, [O.loadMore ? (P(), D("div", { key: 0, class: "el-table__empty-block", onClick: L[0] || (L[0] = (...p) => u.loadingMore && u.loadingMore(...p)) }, [U("span", rt, M(O.$t("components.wxmsg.clickLoadMore")), 1)])) : F("", true), O.loadMore ? F("", true) : (P(), D("div", ot, [U("span", it, M(O.$t("components.wxmsg.noMore")), 1)]))])), (P(true), D(Ie, null, Ne(O.tableData, (p) => (P(), D("div", { key: p.id, class: "execution" }, [U("div", { class: Le(["avue-comment", p.type == "2" ? "avue-comment--reverse" : ""]) }, [U("div", st, [q(i, { src: p.type == "1" ? p.headimgUrl : p.appLogo, class: "avue-comment__avatar" }, { default: V(() => [q(r, null, { default: V(() => [q(o)]), _: 1 })]), _: 1 }, 8, ["src"]), U("div", at, M(p.type == "1" ? p.nickName : p.appName), 1)]), U("div", lt, [U("div", ut, [U("div", ct, M(p.createTime), 1)]), U("div", { class: "avue-comment__body", style: Ae(p.type == "2" ? "background: #6BED72;" : "") }, [p.repType == "event" && p.repEvent == "subscribe" ? (P(), D("div", ft, [q(e, { type: "success", size: "small" }, { default: V(() => [J(M(O.$t("components.wxmsg.follow")), 1)]), _: 1 })])) : F("", true), p.repType == "event" && p.repEvent == "unsubscribe" ? (P(), D("div", dt, [q(e, { type: "danger", size: "small" }, { default: V(() => [J(M(O.$t("components.wxmsg.unfollow")), 1)]), _: 1 })])) : F("", true), p.repType == "event" && p.repEvent == "CLICK" ? (P(), D("div", pt, [q(e, { size: "small" }, { default: V(() => [J(M(O.$t("components.wxmsg.clickMenu")), 1)]), _: 1 }), J("\uFF1A\u3010" + M(p.repName) + "\u3011 ", 1)])) : F("", true), p.repType == "event" && p.repEvent == "VIEW" ? (P(), D("div", ht, [q(e, { size: "small" }, { default: V(() => [J(M(O.$t("components.wxmsg.clickMenuLink")), 1)]), _: 1 }), L[2] || (L[2] = J("\uFF1A\u3010", -1)), U("span", mt, M(p.repUrl), 1), L[3] || (L[3] = J("\u3011 ", -1))])) : F("", true), p.repType == "event" && p.repEvent == "scancode_waitmsg" ? (P(), D("div", vt, [q(e, { size: "small" }, { default: V(() => [J(M(O.$t("components.wxmsg.scanResult")), 1)]), _: 1 }), J("\uFF1A\u3010" + M(p.repContent) + "\u3011 ", 1)])) : F("", true), p.repType == "text" ? (P(), D("div", bt, M(p.repContent), 1)) : F("", true), p.repType == "image" ? (P(), D("div", gt, [U("a", { target: "_blank", href: p.repUrl, class: "flex-c" }, [U("img", { src: p.repUrl, style: { width: "100px" } }, null, 8, wt)], 8, yt)])) : F("", true), p.repType == "voice" ? (P(), D("div", _t, [q(t, { appId: n.appId, objData: p }, null, 8, ["appId", "objData"])])) : F("", true), p.repType == "video" ? (P(), D("div", xt, [q(a, { appId: n.appId, objData: p }, null, 8, ["appId", "objData"])])) : F("", true), p.repType == "shortvideo" ? (P(), D("div", St, [q(a, { appId: n.appId, objData: p }, null, 8, ["appId", "objData"])])) : F("", true), p.repType == "location" ? (P(), D("div", Et, [q(c, { type: "primary", target: "_blank", href: "https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&pointx=" + p.repLocationY + "&pointy=" + p.repLocationX + "&name=" + p.repContent + "&ref=joolun" }, { default: V(() => [U("img", { src: "https://apis.map.qq.com/ws/staticmap/v2/?zoom=10&markers=color:blue|label:A|" + p.repLocationX + "," + p.repLocationY + "&key=" + O.qqMapKey + "&size=250*180" }, null, 8, kt), L[4] || (L[4] = U("p", null, null, -1)), q(r, null, { default: V(() => [q(l)]), _: 1 }), J(M(p.repContent), 1)]), _: 2 }, 1032, ["href"])])) : F("", true), p.repType == "link" ? (P(), D("div", Tt, [q(c, { type: "success", underline: false, target: "_blank", href: p.repUrl }, { default: V(() => [U("div", Ot, [q(r, null, { default: V(() => [q(d)]), _: 1 }), J(M(p.repName), 1)])]), _: 2 }, 1032, ["href"]), U("div", Ct, M(p.repDesc), 1)])) : F("", true), p.repType == "news" ? (P(), D("div", jt, [q(v, { objData: p.content.articles }, null, 8, ["objData"])])) : F("", true), p.repType == "music" ? (P(), D("div", It, [q(c, { type: "success", underline: false, target: "_blank", href: p.repUrl }, { default: V(() => [U("div", Nt, [U("div", Lt, [U("img", { src: p.repThumbUrl, alt: "" }, null, 8, At)]), U("div", Rt, [U("div", Ut, M(p.repName), 1), U("div", Pt, M(p.repDesc), 1)])])]), _: 2 }, 1032, ["href"])])) : F("", true)], 4)])], 2)]))), 128))], 8, tt), te((P(), D("div", Dt, [O.sendLoading ? F("", true) : (P(), Re(f, { key: 0, objData: O.objData, "onUpdate:objData": L[1] || (L[1] = (p) => O.objData = p), appId: n.appId }, null, 8, ["objData", "appId"])), q(m, { type: "success", size: "small", class: "send-but", onClick: u.sendMsg }, { default: V(() => [J(M(O.$t("components.wxmsg.send")), 1)]), _: 1 }, 8, ["onClick"])])), [[g, O.sendLoading]])])), [[g, O.mainLoading]]);
}
const Gt = Ce(Ze, [["render", Wt], ["__scopeId", "data-v-4bd43943"]]);
export {
  Gt as _,
  qe as a,
  zt as d,
  We as g,
  Me as p
};
