import { _ as H6 } from "./wxfreepublish-LUjjosG7.js";
import { _ as W6 } from "./index-C6Tt6Vi-.js";
import { g as si, a as li, b as ui, c as ai } from "./wxmaterial-DvTatkAN.js";
import { ar as x6, as as fi, R as G6, S as Y6, _ as X6, r as p0, j as ci, w as wi, c as c2, o as T0, g as J2, B as Q0, b as p1, h as E1, f as M0, z as u0, A as mi, p as pi, be as vi, q as V6, K as hi, U as di, $ as bi, e as w0, C as _i } from "./index-DAdfXJ2i.js";
var z5 = { exports: {} }, Ei = z5.exports, g6;
function yi() {
  return g6 || (g6 = 1, (function(w1, C1) {
    (function(A1, r1) {
      w1.exports = r1();
    })(Ei, (function() {
      function A1(X1, m1) {
        if (!(X1 instanceof m1)) throw new TypeError("Cannot call a class as a function");
      }
      function r1(X1, m1) {
        for (var u1 = 0; u1 < m1.length; u1++) {
          var t1 = m1[u1];
          t1.enumerable = t1.enumerable || false, t1.configurable = true, "value" in t1 && (t1.writable = true), Object.defineProperty(X1, t1.key, t1);
        }
      }
      function V1(X1, m1, u1) {
        return m1 && r1(X1.prototype, m1), u1 && r1(X1, u1), X1;
      }
      var C2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof x6 < "u" ? x6 : typeof self < "u" ? self : {}, w2 = { exports: {} };
      (function(X1, m1) {
        (function(u1, t1) {
          X1.exports = t1();
        })(C2, (function() {
          var u1 = function() {
            var c1 = 0, D1 = [], g1 = [], B0;
            self.onmessage = function(H1) {
              switch (H1.data.command) {
                case "init":
                  h0(H1.data.config);
                  break;
                case "record":
                  K1(H1.data.buffer);
                  break;
                case "exportWAV":
                  y1(H1.data.type);
                  break;
                case "getBuffer":
                  P0();
                  break;
                case "clear":
                  l0();
                  break;
              }
            };
            function h0(H1) {
              B0 = H1.sampleRate;
            }
            function K1(H1) {
              D1.push(H1[0]), g1.push(H1[1]), c1 += H1[0].length;
            }
            function y1(H1) {
              var O0 = I0(D1, c1), q1 = I0(g1, c1), Z1 = n2(O0, q1), L0 = Q2(Z1), o2 = new Blob([L0], { type: H1 });
              self.postMessage({ type: "blob", data: o2 });
            }
            function P0() {
              var H1 = [];
              H1.push(I0(D1, c1)), H1.push(I0(g1, c1)), self.postMessage({ type: "buffer", data: H1 });
            }
            function l0() {
              c1 = 0, D1 = [], g1 = [];
            }
            function I0(H1, O0) {
              for (var q1 = new Float32Array(O0), Z1 = 0, L0 = 0; L0 < H1.length; L0++) q1.set(H1[L0], Z1), Z1 += H1[L0].length;
              return q1;
            }
            function n2(H1, O0) {
              for (var q1 = H1.length + O0.length, Z1 = new Float32Array(q1), L0 = 0, o2 = 0; L0 < q1; ) Z1[L0++] = H1[o2], Z1[L0++] = O0[o2], o2++;
              return Z1;
            }
            function J1(H1, O0, q1) {
              for (var Z1 = 0; Z1 < q1.length; Z1++, O0 += 2) {
                var L0 = Math.max(-1, Math.min(1, q1[Z1]));
                H1.setInt16(O0, L0 < 0 ? L0 * 32768 : L0 * 32767, true);
              }
            }
            function A2(H1, O0, q1) {
              for (var Z1 = 0; Z1 < q1.length; Z1++) H1.setUint8(O0 + Z1, q1.charCodeAt(Z1));
            }
            function Q2(H1) {
              var O0 = new ArrayBuffer(44 + H1.length * 2), q1 = new DataView(O0);
              return A2(q1, 0, "RIFF"), q1.setUint32(4, 36 + H1.length * 2, true), A2(q1, 8, "WAVE"), A2(q1, 12, "fmt "), q1.setUint32(16, 16, true), q1.setUint16(20, 1, true), q1.setUint16(22, 2, true), q1.setUint32(24, B0, true), q1.setUint32(28, B0 * 4, true), q1.setUint16(32, 4, true), q1.setUint16(34, 16, true), A2(q1, 36, "data"), q1.setUint32(40, H1.length * 2, true), J1(q1, 44, H1), q1;
            }
          }, t1 = u1.toString().replace(/^\s*function.*?\(\)\s*{/, "").replace(/}\s*$/, ""), N = function(c1, D1) {
            var g1 = D1 || {}, B0 = g1.bufferLen || 4096;
            this.context = c1.context, this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, B0, 2, 2);
            var h0 = new Worker((window.URL || window.webkitURL).createObjectURL(new Blob([t1], { type: "text/javascript" })));
            h0.onmessage = function(l0) {
              l0.data.type === "blob" ? P0(l0.data.data) : y1(l0.data.data);
            }, h0.postMessage({ command: "init", config: { sampleRate: this.context.sampleRate } });
            var K1 = false, y1, P0;
            this.node.onaudioprocess = function(l0) {
              K1 && h0.postMessage({ command: "record", buffer: [l0.inputBuffer.getChannelData(0), l0.inputBuffer.getChannelData(1)] });
            }, this.configure = function(l0) {
              for (var I0 in l0) l0.hasOwnProperty(I0) && (g1[I0] = l0[I0]);
            }, this.record = function() {
              K1 = true;
            }, this.stop = function() {
              K1 = false;
            }, this.clear = function() {
              h0.postMessage({ command: "clear" });
            }, this.getBuffer = function(l0) {
              y1 = l0 || g1.callback, h0.postMessage({ command: "getBuffer" });
            }, this.exportWAV = function(l0, I0) {
              if (P0 = l0 || g1.callback, I0 = I0 || g1.type || "audio/wav", !P0) throw new Error("Callback not set");
              h0.postMessage({ command: "exportWAV", type: I0 });
            }, this.release = function() {
              this.stop(), this.clear(), this.configure = this.record = this.stop = this.clear = this.getBuffer = this.exportWAV = function() {
              }, c1.disconnect(this.node), this.node.onaudioprocess = null, this.node.disconnect(), h0.terminate();
            }, c1.connect(this.node), this.node.connect(this.context.destination);
          };
          N.forceDownload = function(c1, D1) {
            var g1 = (window.URL || window.webkitURL).createObjectURL(c1), B0 = window.document.createElement("a");
            B0.href = g1, B0.download = D1 || "output.wav";
            var h0 = document.createEvent("Event");
            h0.initEvent("click", true, true), B0.dispatchEvent(h0);
          };
          var $ = N;
          return $;
        }));
      })(w2);
      var v0 = w2.exports, F1 = window.AudioContext || window.webkitAudioContext || window.mozAudioContext, O1 = null, C0 = true;
      F1 || (C0 = false, console.warn("Web Audio API is Unsupported."));
      var Y1 = (function() {
        function X1() {
          A1(this, X1), this._recorderStream = null, this._recorderStreamSourceNode = null, this._recorder = null, this._isRecording = false, this._curSourceNode = null;
        }
        return V1(X1, [{ key: "playPcm", value: function(u1, t1, N, $) {
          (!O1 || O1.state === "closed") && (O1 = new F1()), (O1.state === "interrupted" || O1.state === "suspended") && O1.resume(), t1 = t1 || 8e3, this.stopPcm();
          var c1 = $ && $ > 1e-3 ? u1.slice(t1 * $) : u1;
          if (!c1.length) return N();
          var D1, g1;
          this._curSourceNode = O1.createBufferSource();
          try {
            D1 = O1.createBuffer(1, c1.length, t1);
          } catch {
            t1 < 11025 ? (D1 = O1.createBuffer(1, c1.length, t1 * 4), this._curSourceNode.playbackRate.value = 0.25) : (D1 = O1.createBuffer(1, c1.length, t1 * 2), this._curSourceNode.playbackRate.value = 0.5);
          }
          D1.copyToChannel ? D1.copyToChannel(c1, 0, 0) : (g1 = D1.getChannelData(0), g1.set(c1)), this._curSourceNode.buffer = D1, this._curSourceNode.loop = false, this._curSourceNode.connect(O1.destination), this._curSourceNode.onended = N, this._curSourceNode.start();
        } }, { key: "stopPcm", value: function() {
          this._curSourceNode && (this._curSourceNode.stop(), this._curSourceNode = null);
        } }, { key: "stopPcmSilently", value: function() {
          this._curSourceNode.onended = null, this.stopPcm();
        } }, { key: "initRecorder", value: function() {
          var u1 = this;
          return new Promise(function(t1, N) {
            var $ = function(g1) {
              u1._recorderStream = g1, u1._recorderStreamSourceNode = O1.createMediaStreamSource(g1), u1._recorder = new v0(u1._recorderStreamSourceNode), u1._isRecording = false, t1();
            }, c1 = function(g1) {
              N(g1);
            };
            u1._recorder ? t1() : window.navigator.mediaDevices && window.navigator.mediaDevices.getUserMedia ? window.navigator.mediaDevices.getUserMedia({ audio: true }).then($).catch(c1) : window.navigator.getUserMedia ? window.navigator.getUserMedia({ audio: true }, $, c1) : c1();
          });
        } }, { key: "isRecording", value: function() {
          return this._recorder && this._isRecording;
        } }, { key: "startRecord", value: function() {
          this._recorder && (this._recorder.clear(), this._recorder.record(), this._isRecording = true);
        } }, { key: "stopRecord", value: function() {
          this._recorder && (this._recorder.stop(), this._isRecording = false);
        } }, { key: "generateRecordSamples", value: function() {
          var u1 = this;
          return new Promise(function(t1) {
            u1._recorder && u1._recorder.getBuffer(function(N) {
              t1(N[0]);
            });
          });
        } }, { key: "releaseRecord", value: function() {
          this._recorderStream && this._recorderStream.getTracks && (this._recorderStream.getTracks().forEach(function(u1) {
            u1.stop();
          }), this._recorderStream = null), this._recorder && (this._recorder.release(), this._recorder = null);
        } }], [{ key: "isPlaySupported", value: function() {
          return C0;
        } }, { key: "isRecordSupported", value: function() {
          return !!(window.navigator.mediaDevices && window.navigator.mediaDevices.getUserMedia || window.navigator.getUserMedia);
        } }, { key: "getCtxSampleRate", value: function() {
          return O1 && O1.sampleRate || 0;
        } }, { key: "getCtxTime", value: function() {
          return O1 && O1.currentTime || 0;
        } }, { key: "decodeAudioArrayBufferByContext", value: function(u1) {
          return new Promise(function(t1, N) {
            O1.decodeAudioData(u1, function($) {
              var c1 = $.numberOfChannels, D1 = new Float32Array($.length);
              switch (c1) {
                default:
                case 1: {
                  D1 = $.getChannelData(0);
                  break;
                }
                case 2: {
                  for (var g1 = $.getChannelData(0), B0 = $.getChannelData(1), h0 = 0, K1 = D1.length; h0 < K1; h0++) D1[h0] = 0.5 * (g1[h0] + B0[h0]);
                  break;
                }
                case 4: {
                  for (var y1 = $.getChannelData(0), P0 = $.getChannelData(1), l0 = $.getChannelData(2), I0 = $.getChannelData(3), n2 = 0, J1 = D1.length; n2 < J1; n2++) D1[n2] = 0.25 * (y1[n2] + P0[n2] + l0[n2] + I0[n2]);
                  break;
                }
                case 6: {
                  for (var A2 = $.getChannelData(0), Q2 = $.getChannelData(1), H1 = $.getChannelData(2), O0 = $.getChannelData(4), q1 = $.getChannelData(5), Z1 = 0, L0 = D1.length; Z1 < L0; Z1++) D1[Z1] = 0.7071 * (A2[Z1] + Q2[Z1]) + H1[Z1] + 0.5 * (O0[Z1] + q1[Z1]);
                  break;
                }
              }
              t1(D1);
            }, N);
          });
        } }]), X1;
      })(), Y0 = function() {
        var X1 = (function() {
          var t1 = { toWAV: (function(h) {
            var _ = this._decode(h);
            if (!_) return null;
            var y = new Uint8Array(_.buffer, _.byteOffset, _.byteLength), A = new Uint8Array(y.length + this.WAV_HEADER_SIZE), e = 0, l = (function(l1) {
              var v1 = new Uint8Array(2);
              new Int16Array(v1.buffer)[0] = l1, A.set(v1, e), e += 2;
            }), z = (function(l1) {
              var v1 = new Uint8Array(4);
              new Int32Array(v1.buffer)[0] = l1, A.set(v1, e), e += 4;
            }), R = (function(l1) {
              var v1 = new TextEncoder("utf-8").encode(l1);
              A.set(v1, e), e += v1.length;
            });
            R("RIFF"), z(36 + y.length), R("WAVEfmt "), z(16);
            var q = 16, J = 8e3, o1 = 1, C = q / 8 * o1, n1 = C * J;
            return l(1), l(1), z(J), z(n1), l(C), l(q), R("data"), z(y.length), A.set(y, e), A;
          }), decode: (function(h) {
            var _ = this._decode(h);
            if (!_) return null;
            for (var y = new Float32Array(_.length), A = 0; A < y.length; A++) y[A] = _[A] / 32768;
            return y;
          }), _decode: (function(h) {
            if (String.fromCharCode.apply(null, h.subarray(0, this.AMR_HEADER.length)) !== this.AMR_HEADER) return null;
            var _ = this.Decoder_Interface_init();
            if (!_) return null;
            var y = new Int16Array(Math.floor(h.length / 6 * this.PCM_BUFFER_COUNT)), A = N._malloc(this.AMR_BUFFER_COUNT), e = new Uint8Array(N.HEAPU8.buffer, A, this.AMR_BUFFER_COUNT);
            A = N._malloc(this.PCM_BUFFER_COUNT * 2);
            for (var l = new Int16Array(N.HEAPU8.buffer, A, this.PCM_BUFFER_COUNT), z = 6, R = 0; z + 1 < h.length && R + 1 < y.length; ) {
              var q = this.SIZES[h[z] >> 3 & 15];
              if (z + q + 1 > h.length) break;
              if (e.set(h.subarray(z, z + q + 1)), this.Decoder_Interface_Decode(_, e.byteOffset, l.byteOffset, 0), R + this.PCM_BUFFER_COUNT > y.length) {
                var J = new Int16Array(y.length * 2);
                J.set(y.subarray(0, R)), y = J;
              }
              y.set(l, R), R += this.PCM_BUFFER_COUNT, z += q + 1;
            }
            return N._free(e.byteOffset), N._free(l.byteOffset), this.Decoder_Interface_exit(_), y.subarray(0, R);
          }), encode: (function(h, _, y) {
            if (_ < 8e3) return console.error("pcmSampleRate should not be less than 8000."), null;
            typeof y > "u" && (y = this.Mode.MR795);
            var A = this.Encoder_Interface_init();
            if (!A) return null;
            var e = N._malloc(this.PCM_BUFFER_COUNT * 2), l = new Int16Array(N.HEAPU8.buffer, e, this.PCM_BUFFER_COUNT);
            e = N._malloc(this.AMR_BUFFER_COUNT);
            for (var z = new Uint8Array(N.HEAPU8.buffer, e, this.AMR_BUFFER_COUNT), R = _ / 8e3, q = Math.floor(h.length / R), J = new Int16Array(q), o1 = 0; o1 < q; o1++) J[o1] = h[Math.floor(o1 * R)] * 32767;
            var C = this.SIZES[y] + 1, n1 = new Uint8Array(Math.ceil(q / this.PCM_BUFFER_COUNT * C) + this.AMR_HEADER.length);
            n1.set(new TextEncoder("utf-8").encode(this.AMR_HEADER));
            for (var l1 = 0, v1 = this.AMR_HEADER.length; l1 + this.PCM_BUFFER_COUNT < J.length && v1 + C < n1.length; ) {
              l.set(J.subarray(l1, l1 + this.PCM_BUFFER_COUNT));
              var I1 = this.Encoder_Interface_Encode(A, y, l.byteOffset, z.byteOffset, 0);
              if (I1 != C) {
                console.error([I1, C]);
                break;
              }
              n1.set(z.subarray(0, I1), v1), l1 += this.PCM_BUFFER_COUNT, v1 += I1;
            }
            return N._free(l.byteOffset), N._free(z.byteOffset), this.Encoder_Interface_exit(A), n1.subarray(0, v1);
          }), Decoder_Interface_init: (function() {
            return console.warn("Decoder_Interface_init not initialized."), 0;
          }), Decoder_Interface_exit: (function(h) {
            console.warn("Decoder_Interface_exit not initialized.");
          }), Decoder_Interface_Decode: (function(h, _, y, A) {
            console.warn("Decoder_Interface_Decode not initialized.");
          }), Encoder_Interface_init: (function(h) {
            return console.warn("Encoder_Interface_init not initialized."), 0;
          }), Encoder_Interface_exit: (function(h) {
            console.warn("Encoder_Interface_exit not initialized.");
          }), Encoder_Interface_Encode: (function(h, _, y, A, e) {
            console.warn("Encoder_Interface_Encode not initialized.");
          }), Mode: { MR475: 0, MR515: 1, MR59: 2, MR67: 3, MR74: 4, MR795: 5, MR102: 6, MR122: 7, MRDTX: 8 }, SIZES: [12, 13, 15, 17, 19, 20, 26, 31, 5, 6, 5, 5, 0, 0, 0, 0], AMR_BUFFER_COUNT: 32, PCM_BUFFER_COUNT: 160, AMR_HEADER: `#!AMR
`, WAV_HEADER_SIZE: 44 }, N = { canvas: {}, print: (function(h) {
            console.log(h);
          }), _main: (function() {
            return t1.Decoder_Interface_init = N._Decoder_Interface_init, t1.Decoder_Interface_exit = N._Decoder_Interface_exit, t1.Decoder_Interface_Decode = N._Decoder_Interface_Decode, t1.Encoder_Interface_init = N._Encoder_Interface_init, t1.Encoder_Interface_exit = N._Encoder_Interface_exit, t1.Encoder_Interface_Encode = N._Encoder_Interface_Encode, 0;
          }) }, N;
          N || (N = (typeof N < "u" ? N : null) || {});
          var $ = {};
          for (var c1 in N) N.hasOwnProperty(c1) && ($[c1] = N[c1]);
          var D1 = typeof window == "object", g1 = typeof importScripts == "function", B0 = !D1 && true && !g1;
          if (B0) N.print || (N.print = print), typeof printErr < "u" && (N.printErr = printErr), typeof read < "u" ? N.read = read : N.read = function() {
            throw "no read() available (jsc?)";
          }, N.readBinary = function(_) {
            if (typeof readbuffer == "function") return new Uint8Array(readbuffer(_));
            var y = read(_, "binary");
            return J1(typeof y == "object"), y;
          }, typeof scriptArgs < "u" ? N.arguments = scriptArgs : typeof arguments < "u" && (N.arguments = arguments);
          else if (D1 || g1) {
            if (N.read = function(_) {
              var y = new XMLHttpRequest();
              return y.open("GET", _, false), y.send(null), y.responseText;
            }, typeof arguments < "u" && (N.arguments = arguments), typeof console < "u") N.print || (N.print = function(_) {
              console.log(_);
            }), N.printErr || (N.printErr = function(_) {
              console.log(_);
            });
            else {
              var h0 = false;
              N.print || (N.print = h0 && typeof dump < "u" ? (function(h) {
                dump(h);
              }) : (function(h) {
              }));
            }
            g1 && (N.load = importScripts), typeof N.setWindowTitle > "u" && (N.setWindowTitle = (function(h) {
              document.title = h;
            }));
          } else throw "Unknown runtime environment. Where are we?";
          function K1(h) {
            eval.call(null, h);
          }
          !N.load && N.read && (N.load = function(_) {
            K1(N.read(_));
          }), N.print || (N.print = (function() {
          })), N.printErr || (N.printErr = N.print), N.arguments || (N.arguments = []), N.thisProgram || (N.thisProgram = "./this.program"), N.print = N.print, N.printErr = N.printErr, N.preRun = [], N.postRun = [];
          for (var c1 in $) $.hasOwnProperty(c1) && (N[c1] = $[c1]);
          var y1 = { setTempRet0: (function(h) {
            n2 = h;
          }), getTempRet0: (function() {
            return n2;
          }), stackSave: (function() {
            return d2;
          }), stackRestore: (function(h) {
            d2 = h;
          }), getNativeTypeSize: (function(h) {
            switch (h) {
              case "i1":
              case "i8":
                return 1;
              case "i16":
                return 2;
              case "i32":
                return 4;
              case "i64":
                return 8;
              case "float":
                return 4;
              case "double":
                return 8;
              default: {
                if (h[h.length - 1] === "*") return y1.QUANTUM_SIZE;
                if (h[0] === "i") {
                  var _ = parseInt(h.substr(1));
                  return J1(_ % 8 === 0), _ / 8;
                } else return 0;
              }
            }
          }), getNativeFieldSize: (function(h) {
            return Math.max(y1.getNativeTypeSize(h), y1.QUANTUM_SIZE);
          }), STACK_ALIGN: 16, prepVararg: (function(h, _) {
            return _ === "double" || _ === "i64" ? h & 7 && (J1((h & 7) === 4), h += 4) : J1((h & 3) === 0), h;
          }), getAlignSize: (function(h, _, y) {
            return !y && (h == "i64" || h == "double") ? 8 : h ? Math.min(_ || (h ? y1.getNativeFieldSize(h) : 0), y1.QUANTUM_SIZE) : Math.min(_, 8);
          }), dynCall: (function(h, _, y) {
            return y && y.length ? (y.splice || (y = Array.prototype.slice.call(y)), y.splice(0, 0, _), N["dynCall_" + h].apply(null, y)) : N["dynCall_" + h].call(null, _);
          }), functionPointers: [], addFunction: (function(h) {
            for (var _ = 0; _ < y1.functionPointers.length; _++) if (!y1.functionPointers[_]) return y1.functionPointers[_] = h, 2 * (1 + _);
            throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
          }), removeFunction: (function(h) {
            y1.functionPointers[(h - 2) / 2] = null;
          }), warnOnce: (function(h) {
            y1.warnOnce.shown || (y1.warnOnce.shown = {}), y1.warnOnce.shown[h] || (y1.warnOnce.shown[h] = 1, N.printErr(h));
          }), funcWrappers: {}, getFuncWrapper: (function(h, _) {
            J1(_), y1.funcWrappers[_] || (y1.funcWrappers[_] = {});
            var y = y1.funcWrappers[_];
            return y[h] || (y[h] = function() {
              return y1.dynCall(_, h, arguments);
            }), y[h];
          }), getCompilerSetting: (function(h) {
            throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
          }), stackAlloc: (function(h) {
            var _ = d2;
            return d2 = d2 + h | 0, d2 = d2 + 15 & -16, _;
          }), staticAlloc: (function(h) {
            var _ = z2;
            return z2 = z2 + h | 0, z2 = z2 + 15 & -16, _;
          }), dynamicAlloc: (function(h) {
            var _ = m2;
            if (m2 = m2 + h | 0, m2 = m2 + 15 & -16, m2 >= x2) {
              var y = f4();
              if (!y) return m2 = _, 0;
            }
            return _;
          }), alignMemory: (function(h, _) {
            var y = h = Math.ceil(h / (_ || 16)) * (_ || 16);
            return y;
          }), makeBigInt: (function(h, _, y) {
            var A = y ? +(h >>> 0) + +(_ >>> 0) * 4294967296 : +(h >>> 0) + +(_ | 0) * 4294967296;
            return A;
          }), GLOBAL_BASE: 8, QUANTUM_SIZE: 4, __dummy__: 0 };
          N.Runtime = y1;
          var P0 = false, l0, I0, n2;
          function J1(h, _) {
            h || H2("Assertion failed: " + _);
          }
          function A2(h) {
            var _ = N["_" + h];
            if (!_) try {
              _ = [eval][0]("_" + h);
            } catch {
            }
            return J1(_, "Cannot call unknown function " + h + " (perhaps LLVM optimizations or closure removed it?)"), _;
          }
          var Q2, H1;
          (function() {
            var h = { stackSave: (function() {
              y1.stackSave();
            }), stackRestore: (function() {
              y1.stackRestore();
            }), arrayToC: (function(z) {
              var R = y1.stackAlloc(z.length);
              return Fe(z, R), R;
            }), stringToC: (function(z) {
              var R = 0;
              return z != null && z !== 0 && (R = y1.stackAlloc((z.length << 2) + 1), X5(z, R)), R;
            }) }, _ = { string: h.stringToC, array: h.arrayToC };
            H1 = function(R, q, J, o1, C) {
              var n1 = A2(R), l1 = [], v1 = 0;
              if (o1) for (var I1 = 0; I1 < o1.length; I1++) {
                var W1 = _[J[I1]];
                W1 ? (v1 === 0 && (v1 = y1.stackSave()), l1[I1] = W1(o1[I1])) : l1[I1] = o1[I1];
              }
              var b0 = n1.apply(null, l1);
              if (q === "string" && (b0 = l5(b0)), v1 !== 0) {
                if (C && C.async) {
                  EmterpreterAsync.asyncFinalizers.push((function() {
                    y1.stackRestore(v1);
                  }));
                  return;
                }
                y1.stackRestore(v1);
              }
              return b0;
            };
            var y = /^function\s\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
            function A(z) {
              var R = z.toString().match(y);
              return R ? (R = R.slice(1), { arguments: R[0], body: R[1], returnValue: R[2] }) : {};
            }
            var e = {};
            for (var l in h) h.hasOwnProperty(l) && (e[l] = A(h[l]));
            Q2 = function(R, q, J) {
              J = J || [];
              var o1 = A2(R), C = J.every((function(v2) {
                return v2 === "number";
              })), n1 = q !== "string";
              if (n1 && C) return o1;
              var l1 = J.map((function(v2, Z0) {
                return "$" + Z0;
              })), v1 = "(function(" + l1.join(",") + ") {", I1 = J.length;
              if (!C) {
                v1 += "var stack = " + e.stackSave.body + ";";
                for (var W1 = 0; W1 < I1; W1++) {
                  var b0 = l1[W1], a0 = J[W1];
                  if (a0 !== "number") {
                    var z1 = e[a0 + "ToC"];
                    v1 += "var " + z1.arguments + " = " + b0 + ";", v1 += z1.body + ";", v1 += b0 + "=" + z1.returnValue + ";";
                  }
                }
              }
              var g0 = A((function() {
                return o1;
              })).returnValue;
              if (v1 += "var ret = " + g0 + "(" + l1.join(",") + ");", !n1) {
                var i0 = A((function() {
                  return l5;
                })).returnValue;
                v1 += "ret = " + i0 + "(ret);";
              }
              return C || (v1 += e.stackRestore.body.replace("()", "(stack)") + ";"), v1 += "return ret})", [eval][0](v1);
            };
          })(), N.ccall = H1, N.cwrap = Q2;
          function O0(h, _, y, A) {
            switch (y = y || "i8", y.charAt(y.length - 1) === "*" && (y = "i32"), y) {
              case "i1":
                l2[h >> 0] = _;
                break;
              case "i8":
                l2[h >> 0] = _;
                break;
              case "i16":
                U2[h >> 1] = _;
                break;
              case "i32":
                V0[h >> 2] = _;
                break;
              case "i64":
                I0 = [_ >>> 0, (l0 = _, +_4(l0) >= 1 ? l0 > 0 ? (k4(+y4(l0 / 4294967296), 4294967295) | 0) >>> 0 : ~~+E4((l0 - +(~~l0 >>> 0)) / 4294967296) >>> 0 : 0)], V0[h >> 2] = I0[0], V0[h + 4 >> 2] = I0[1];
                break;
              case "float":
                k5[h >> 2] = _;
                break;
              case "double":
                A5[h >> 3] = _;
                break;
              default:
                H2("invalid type for setValue: " + y);
            }
          }
          N.setValue = O0;
          function q1(h, _, y) {
            switch (_ = _ || "i8", _.charAt(_.length - 1) === "*" && (_ = "i32"), _) {
              case "i1":
                return l2[h >> 0];
              case "i8":
                return l2[h >> 0];
              case "i16":
                return U2[h >> 1];
              case "i32":
                return V0[h >> 2];
              case "i64":
                return V0[h >> 2];
              case "float":
                return k5[h >> 2];
              case "double":
                return A5[h >> 3];
              default:
                H2("invalid type for setValue: " + _);
            }
            return null;
          }
          N.getValue = q1;
          var Z1 = 0, L0 = 1, o2 = 2, K6 = 3, Z2 = 4;
          N.ALLOC_NORMAL = Z1, N.ALLOC_STACK = L0, N.ALLOC_STATIC = o2, N.ALLOC_DYNAMIC = K6, N.ALLOC_NONE = Z2;
          function s2(h, _, y, A) {
            var e, l;
            typeof h == "number" ? (e = true, l = h) : (e = false, l = h.length);
            var z = typeof _ == "string" ? _ : null, R;
            if (y == Z2 ? R = A : R = [w5, y1.stackAlloc, y1.staticAlloc, y1.dynamicAlloc][y === void 0 ? o2 : y](Math.max(l, z ? 1 : _.length)), e) {
              var A = R, q;
              for (J1((R & 3) == 0), q = R + (l & -4); A < q; A += 4) V0[A >> 2] = 0;
              for (q = R + l; A < q; ) l2[A++ >> 0] = 0;
              return R;
            }
            if (z === "i8") return h.subarray || h.slice ? u2.set(h, R) : u2.set(new Uint8Array(h), R), R;
            for (var J = 0, o1, C, n1; J < l; ) {
              var l1 = h[J];
              if (typeof l1 == "function" && (l1 = y1.getFunctionIndex(l1)), o1 = z || _[J], o1 === 0) {
                J++;
                continue;
              }
              o1 == "i64" && (o1 = "i32"), O0(R + J, l1, o1), n1 !== o1 && (C = y1.getNativeTypeSize(o1), n1 = o1), J += C;
            }
            return R;
          }
          N.allocate = s2;
          function q6(h) {
            return Te ? typeof D5 < "u" && !D5.called || !Y5 ? y1.dynamicAlloc(h) : w5(h) : y1.staticAlloc(h);
          }
          N.getMemory = q6;
          function l5(h, _) {
            if (_ === 0 || !h) return "";
            for (var y = 0, A, e = 0; A = u2[h + e >> 0], y |= A, !(A == 0 && !_ || (e++, _ && e == _)); ) ;
            _ || (_ = e);
            var l = "";
            if (y < 128) {
              for (var z = 1024, R; _ > 0; ) R = String.fromCharCode.apply(String, u2.subarray(h, h + Math.min(_, z))), l = l ? l + R : R, h += z, _ -= z;
              return l;
            }
            return N.UTF8ToString(h);
          }
          N.Pointer_stringify = l5;
          function J6(h) {
            for (var _ = ""; ; ) {
              var y = l2[h++ >> 0];
              if (!y) return _;
              _ += String.fromCharCode(y);
            }
          }
          N.AsciiToString = J6;
          function Q6(h, _) {
            return Be(h, _, false);
          }
          N.stringToAscii = Q6;
          function B2(h, _) {
            for (var y, A, e, l, z, R, q = ""; ; ) {
              if (y = h[_++], !y) return q;
              if (!(y & 128)) {
                q += String.fromCharCode(y);
                continue;
              }
              if (A = h[_++] & 63, (y & 224) == 192) {
                q += String.fromCharCode((y & 31) << 6 | A);
                continue;
              }
              if (e = h[_++] & 63, (y & 240) == 224 ? y = (y & 15) << 12 | A << 6 | e : (l = h[_++] & 63, (y & 248) == 240 ? y = (y & 7) << 18 | A << 12 | e << 6 | l : (z = h[_++] & 63, (y & 252) == 248 ? y = (y & 3) << 24 | A << 18 | e << 12 | l << 6 | z : (R = h[_++] & 63, y = (y & 1) << 30 | A << 24 | e << 18 | l << 12 | z << 6 | R))), y < 65536) q += String.fromCharCode(y);
              else {
                var J = y - 65536;
                q += String.fromCharCode(55296 | J >> 10, 56320 | J & 1023);
              }
            }
          }
          N.UTF8ArrayToString = B2;
          function Z6(h) {
            return B2(u2, h);
          }
          N.UTF8ToString = Z6;
          function E5(h, _, y, A) {
            if (!(A > 0)) return 0;
            for (var e = y, l = y + A - 1, z = 0; z < h.length; ++z) {
              var R = h.charCodeAt(z);
              if (R >= 55296 && R <= 57343 && (R = 65536 + ((R & 1023) << 10) | h.charCodeAt(++z) & 1023), R <= 127) {
                if (y >= l) break;
                _[y++] = R;
              } else if (R <= 2047) {
                if (y + 1 >= l) break;
                _[y++] = 192 | R >> 6, _[y++] = 128 | R & 63;
              } else if (R <= 65535) {
                if (y + 2 >= l) break;
                _[y++] = 224 | R >> 12, _[y++] = 128 | R >> 6 & 63, _[y++] = 128 | R & 63;
              } else if (R <= 2097151) {
                if (y + 3 >= l) break;
                _[y++] = 240 | R >> 18, _[y++] = 128 | R >> 12 & 63, _[y++] = 128 | R >> 6 & 63, _[y++] = 128 | R & 63;
              } else if (R <= 67108863) {
                if (y + 4 >= l) break;
                _[y++] = 248 | R >> 24, _[y++] = 128 | R >> 18 & 63, _[y++] = 128 | R >> 12 & 63, _[y++] = 128 | R >> 6 & 63, _[y++] = 128 | R & 63;
              } else {
                if (y + 5 >= l) break;
                _[y++] = 252 | R >> 30, _[y++] = 128 | R >> 24 & 63, _[y++] = 128 | R >> 18 & 63, _[y++] = 128 | R >> 12 & 63, _[y++] = 128 | R >> 6 & 63, _[y++] = 128 | R & 63;
              }
            }
            return _[y] = 0, y - e;
          }
          N.stringToUTF8Array = E5;
          function $6(h, _, y) {
            return E5(h, u2, _, y);
          }
          N.stringToUTF8 = $6;
          function x5(h) {
            for (var _ = 0, y = 0; y < h.length; ++y) {
              var A = h.charCodeAt(y);
              A >= 55296 && A <= 57343 && (A = 65536 + ((A & 1023) << 10) | h.charCodeAt(++y) & 1023), A <= 127 ? ++_ : A <= 2047 ? _ += 2 : A <= 65535 ? _ += 3 : A <= 2097151 ? _ += 4 : A <= 67108863 ? _ += 5 : _ += 6;
            }
            return _;
          }
          N.lengthBytesUTF8 = x5;
          function j6(h) {
            for (var _ = 0, y = ""; ; ) {
              var A = U2[h + _ * 2 >> 1];
              if (A == 0) return y;
              ++_, y += String.fromCharCode(A);
            }
          }
          N.UTF16ToString = j6;
          function e4(h, _, y) {
            if (y === void 0 && (y = 2147483647), y < 2) return 0;
            y -= 2;
            for (var A = _, e = y < h.length * 2 ? y / 2 : h.length, l = 0; l < e; ++l) {
              var z = h.charCodeAt(l);
              U2[_ >> 1] = z, _ += 2;
            }
            return U2[_ >> 1] = 0, _ - A;
          }
          N.stringToUTF16 = e4;
          function r4(h) {
            return h.length * 2;
          }
          N.lengthBytesUTF16 = r4;
          function i4(h) {
            for (var _ = 0, y = ""; ; ) {
              var A = V0[h + _ * 4 >> 2];
              if (A == 0) return y;
              if (++_, A >= 65536) {
                var e = A - 65536;
                y += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023);
              } else y += String.fromCharCode(A);
            }
          }
          N.UTF32ToString = i4;
          function t4(h, _, y) {
            if (y === void 0 && (y = 2147483647), y < 4) return 0;
            for (var A = _, e = A + y - 4, l = 0; l < h.length; ++l) {
              var z = h.charCodeAt(l);
              if (z >= 55296 && z <= 57343) {
                var R = h.charCodeAt(++l);
                z = 65536 + ((z & 1023) << 10) | R & 1023;
              }
              if (V0[_ >> 2] = z, _ += 4, _ + 4 > e) break;
            }
            return V0[_ >> 2] = 0, _ - A;
          }
          N.stringToUTF32 = t4;
          function n4(h) {
            for (var _ = 0, y = 0; y < h.length; ++y) {
              var A = h.charCodeAt(y);
              A >= 55296 && A <= 57343 && ++y, _ += 4;
            }
            return _;
          }
          N.lengthBytesUTF32 = n4;
          function o4(h) {
            var _ = !!N.___cxa_demangle;
            if (_) try {
              var y = w5(h.length);
              X5(h.substr(1), y);
              var A = w5(4), e = N.___cxa_demangle(y, 0, 0, A);
              if (q1(A, "i32") === 0 && e) return l5(e);
            } catch {
            } finally {
              y && q5(y), A && q5(A), e && q5(e);
            }
            var l = 3, z = { v: "void", b: "bool", c: "char", s: "short", i: "int", l: "long", f: "float", d: "double", w: "wchar_t", a: "signed char", h: "unsigned char", t: "unsigned short", j: "unsigned int", m: "unsigned long", x: "long long", y: "unsigned long long", z: "..." }, R = [], q = true;
            function J() {
              l++, h[l] === "K" && l++;
              for (var n1 = []; h[l] !== "E"; ) {
                if (h[l] === "S") {
                  l++;
                  var l1 = h.indexOf("_", l), v1 = h.substring(l, l1) || 0;
                  n1.push(R[v1] || "?"), l = l1 + 1;
                  continue;
                }
                if (h[l] === "C") {
                  n1.push(n1[n1.length - 1]), l += 2;
                  continue;
                }
                var I1 = parseInt(h.substr(l)), W1 = I1.toString().length;
                if (!I1 || !W1) {
                  l--;
                  break;
                }
                var b0 = h.substr(l + W1, I1);
                n1.push(b0), R.push(b0), l += W1 + I1;
              }
              return l++, n1;
            }
            function o1(n1, l1, v1) {
              l1 = l1 || 1 / 0;
              var I1 = "", W1 = [];
              function b0() {
                return "(" + W1.join(", ") + ")";
              }
              var a0;
              if (h[l] === "N") {
                if (a0 = J().join("::"), l1--, l1 === 0) return n1 ? [a0] : a0;
              } else {
                (h[l] === "K" || q && h[l] === "L") && l++;
                var z1 = parseInt(h.substr(l));
                if (z1) {
                  var g0 = z1.toString().length;
                  a0 = h.substr(l + g0, z1), l += g0 + z1;
                }
              }
              if (q = false, h[l] === "I") {
                l++;
                var i0 = o1(true), v2 = o1(true, 1, true);
                I1 += v2[0] + " " + a0 + "<" + i0.join(", ") + ">";
              } else I1 = a0;
              e: for (; l < h.length && l1-- > 0; ) {
                var Z0 = h[l++];
                if (Z0 in z) W1.push(z[Z0]);
                else switch (Z0) {
                  case "P":
                    W1.push(o1(true, 1, true)[0] + "*");
                    break;
                  case "R":
                    W1.push(o1(true, 1, true)[0] + "&");
                    break;
                  case "L": {
                    l++;
                    var j2 = h.indexOf("E", l), z1 = j2 - l;
                    W1.push(h.substr(l, z1)), l += z1 + 2;
                    break;
                  }
                  case "A": {
                    var z1 = parseInt(h.substr(l));
                    if (l += z1.toString().length, h[l] !== "_") throw "?";
                    l++, W1.push(o1(true, 1, true)[0] + " [" + z1 + "]");
                    break;
                  }
                  case "E":
                    break e;
                  default:
                    I1 += "?" + Z0;
                    break e;
                }
              }
              return !v1 && W1.length === 1 && W1[0] === "void" && (W1 = []), n1 ? (I1 && W1.push(I1 + "?"), W1) : I1 + b0();
            }
            var C = h;
            try {
              if (h == "Object._main" || h == "_main") return "main()";
              if (typeof h == "number" && (h = l5(h)), h[0] !== "_" || h[1] !== "_" || h[2] !== "Z") return h;
              switch (h[3]) {
                case "n":
                  return "operator new()";
                case "d":
                  return "operator delete()";
              }
              C = o1();
            } catch {
              C += "?";
            }
            return C.indexOf("?") >= 0 && !_ && y1.warnOnce("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"), C;
          }
          function s4(h) {
            return h.replace(/__Z[\w\d_]+/g, (function(_) {
              var y = o4(_);
              return _ === y ? _ : _ + " [" + y + "]";
            }));
          }
          function l4() {
            var h = new Error();
            if (!h.stack) {
              try {
                throw new Error(0);
              } catch (_) {
                h = _;
              }
              if (!h.stack) return "(no stack trace available)";
            }
            return h.stack.toString();
          }
          function V5() {
            return s4(l4());
          }
          N.stackTrace = V5;
          var Se = 4096;
          function u4(h) {
            return h % 4096 > 0 && (h += 4096 - h % 4096), h;
          }
          var a4, l2, u2, U2, De, V0, y5, k5, A5, Me = 0, z2 = 0, Te = false, Ce = 0, d2 = 0, g5 = 0, Pe = 0, m2 = 0;
          function f4() {
            H2("Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value " + x2 + ", (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.");
          }
          for (var H5 = N.TOTAL_STACK || 65536, x2 = N.TOTAL_MEMORY || 524288, R2 = 64 * 1024; R2 < x2 || R2 < 2 * H5; ) R2 < 16777216 ? R2 *= 2 : R2 += 16777216;
          R2 !== x2 && (N.printErr("increasing TOTAL_MEMORY to " + R2 + " to be compliant with the asm.js spec (and given that TOTAL_STACK=" + H5 + ")"), x2 = R2), J1(typeof Int32Array < "u" && typeof Float64Array < "u" && !!new Int32Array(1).subarray && !!new Int32Array(1).set, "JS engine does not provide full typed array support");
          var p2;
          p2 = new ArrayBuffer(x2), l2 = new Int8Array(p2), U2 = new Int16Array(p2), V0 = new Int32Array(p2), u2 = new Uint8Array(p2), De = new Uint16Array(p2), y5 = new Uint32Array(p2), k5 = new Float32Array(p2), A5 = new Float64Array(p2), V0[0] = 255, J1(u2[0] === 255 && u2[3] === 0, "Typed arrays 2 must be run on a little-endian system"), N.HEAP = a4, N.buffer = p2, N.HEAP8 = l2, N.HEAP16 = U2, N.HEAP32 = V0, N.HEAPU8 = u2, N.HEAPU16 = De, N.HEAPU32 = y5, N.HEAPF32 = k5, N.HEAPF64 = A5;
          function u5(h) {
            for (; h.length > 0; ) {
              var _ = h.shift();
              if (typeof _ == "function") {
                _();
                continue;
              }
              var y = _.func;
              typeof y == "number" ? _.arg === void 0 ? y1.dynCall("v", y) : y1.dynCall("vi", y, [_.arg]) : y(_.arg === void 0 ? null : _.arg);
            }
          }
          var W5 = [], a5 = [], G5 = [], R5 = [], Ie = [], Y5 = false;
          function c4() {
            if (N.preRun) for (typeof N.preRun == "function" && (N.preRun = [N.preRun]); N.preRun.length; ) Le(N.preRun.shift());
            u5(W5);
          }
          function Oe() {
            Y5 || (Y5 = true, u5(a5));
          }
          function w4() {
            u5(G5);
          }
          function m4() {
            u5(R5);
          }
          function p4() {
            if (N.postRun) for (typeof N.postRun == "function" && (N.postRun = [N.postRun]); N.postRun.length; ) Ne(N.postRun.shift());
            u5(Ie);
          }
          function Le(h) {
            W5.unshift(h);
          }
          N.addOnPreRun = Le;
          function v4(h) {
            a5.unshift(h);
          }
          N.addOnInit = v4;
          function h4(h) {
            G5.unshift(h);
          }
          N.addOnPreMain = h4;
          function d4(h) {
            R5.unshift(h);
          }
          N.addOnExit = d4;
          function Ne(h) {
            Ie.unshift(h);
          }
          N.addOnPostRun = Ne;
          function V2(h, _, y) {
            var A = y > 0 ? y : x5(h) + 1, e = new Array(A), l = E5(h, e, 0, e.length);
            return _ && (e.length = l), e;
          }
          N.intArrayFromString = V2;
          function b4(h) {
            for (var _ = [], y = 0; y < h.length; y++) {
              var A = h[y];
              A > 255 && (A &= 255), _.push(String.fromCharCode(A));
            }
            return _.join("");
          }
          N.intArrayToString = b4;
          function X5(h, _, y) {
            for (var A = V2(h, y), e = 0; e < A.length; ) {
              var l = A[e];
              l2[_ + e >> 0] = l, e = e + 1;
            }
          }
          N.writeStringToMemory = X5;
          function Fe(h, _) {
            for (var y = 0; y < h.length; y++) l2[_++ >> 0] = h[y];
          }
          N.writeArrayToMemory = Fe;
          function Be(h, _, y) {
            for (var A = 0; A < h.length; ++A) l2[_++ >> 0] = h.charCodeAt(A);
            y || (l2[_ >> 0] = 0);
          }
          N.writeAsciiToMemory = Be, (!Math.imul || Math.imul(4294967295, 5) !== -5) && (Math.imul = function(_, y) {
            var A = _ >>> 16, e = _ & 65535, l = y >>> 16, z = y & 65535;
            return e * z + (A * z + e * l << 16) | 0;
          }), Math.imul = Math.imul, Math.clz32 || (Math.clz32 = (function(h) {
            h = h >>> 0;
            for (var _ = 0; _ < 32; _++) if (h & 1 << 31 - _) return _;
            return 32;
          })), Math.clz32 = Math.clz32;
          var _4 = Math.abs, E4 = Math.ceil, y4 = Math.floor, k4 = Math.min, I2 = 0, f5 = null;
          function K5(h) {
            I2++, N.monitorRunDependencies && N.monitorRunDependencies(I2);
          }
          N.addRunDependency = K5;
          function S5(h) {
            if (I2--, N.monitorRunDependencies && N.monitorRunDependencies(I2), I2 == 0 && f5) {
              var _ = f5;
              f5 = null, _();
            }
          }
          N.removeRunDependency = S5, N.preloadedImages = {}, N.preloadedAudios = {}, Me = 8, z2 = Me + 31776, a5.push(), s2([154, 14, 0, 0, 188, 14, 0, 0, 226, 14, 0, 0, 8, 15, 0, 0, 46, 15, 0, 0, 84, 15, 0, 0, 130, 15, 0, 0, 208, 15, 0, 0, 66, 16, 0, 0, 108, 16, 0, 0, 42, 17, 0, 0, 248, 17, 0, 0, 228, 18, 0, 0, 240, 19, 0, 0, 24, 21, 0, 0, 86, 22, 0, 0, 238, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 13, 0, 15, 0, 17, 0, 19, 0, 20, 0, 26, 0, 31, 0, 5, 0, 6, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 252, 146, 252, 36, 253, 182, 253, 72, 254, 218, 254, 108, 255, 0, 0, 0, 0, 32, 78, 32, 78, 32, 78, 32, 78, 32, 78, 80, 70, 0, 64, 0, 32, 0, 0, 0, 0, 255, 127, 112, 125, 112, 125, 112, 125, 112, 125, 112, 125, 153, 89, 255, 127, 112, 125, 112, 125, 102, 102, 102, 38, 153, 25, 153, 25, 154, 89, 185, 62, 232, 43, 188, 30, 132, 21, 16, 15, 139, 10, 97, 7, 42, 5, 157, 3, 0, 96, 0, 72, 0, 54, 128, 40, 96, 30, 200, 22, 22, 17, 209, 12, 157, 9, 54, 7, 102, 70, 184, 38, 75, 21, 182, 11, 113, 6, 139, 3, 243, 1, 18, 1, 151, 0, 83, 0, 154, 89, 185, 62, 232, 43, 188, 30, 132, 21, 16, 15, 139, 10, 97, 7, 42, 5, 157, 3, 44, 3, 128, 0, 30, 2, 140, 0, 57, 11, 111, 4, 218, 8, 74, 13, 19, 8, 51, 2, 133, 49, 135, 2, 36, 16, 6, 7, 225, 21, 165, 20, 9, 30, 118, 1, 151, 14, 185, 1, 160, 42, 78, 10, 31, 46, 190, 9, 10, 80, 29, 3, 98, 20, 163, 2, 68, 26, 162, 32, 162, 20, 160, 6, 208, 5, 172, 1, 250, 22, 196, 1, 212, 20, 232, 15, 255, 13, 244, 4, 165, 9, 133, 3, 22, 62, 237, 3, 134, 58, 199, 12, 91, 40, 250, 18, 51, 14, 229, 7, 36, 10, 67, 3, 72, 48, 28, 19, 174, 47, 168, 6, 120, 52, 68, 6, 158, 35, 37, 9, 128, 15, 2, 6, 103, 21, 208, 38, 211, 14, 161, 1, 79, 5, 158, 1, 56, 14, 33, 6, 59, 31, 213, 13, 141, 44, 133, 2, 104, 33, 123, 2, 216, 15, 97, 5, 224, 64, 236, 23, 156, 44, 188, 2, 215, 7, 95, 2, 127, 48, 42, 6, 111, 43, 46, 18, 112, 53, 172, 6, 214, 46, 205, 4, 60, 31, 129, 28, 175, 51, 83, 22, 124, 9, 135, 4, 25, 8, 149, 7, 74, 24, 233, 23, 218, 13, 12, 7, 221, 34, 10, 7, 231, 33, 44, 6, 111, 54, 248, 13, 1, 52, 93, 24, 254, 23, 106, 4, 106, 23, 198, 6, 61, 55, 54, 18, 7, 44, 249, 12, 194, 47, 15, 6, 107, 54, 199, 11, 217, 19, 224, 40, 228, 36, 50, 26, 153, 6, 171, 2, 156, 5, 26, 5, 44, 28, 93, 15, 242, 15, 153, 10, 113, 30, 192, 2, 222, 58, 34, 3, 155, 24, 92, 20, 241, 16, 237, 20, 20, 26, 29, 2, 174, 23, 114, 2, 83, 53, 116, 14, 234, 44, 104, 9, 28, 63, 204, 2, 145, 47, 239, 2, 129, 31, 225, 44, 170, 24, 208, 8, 114, 17, 240, 1, 125, 28, 11, 2, 229, 39, 249, 14, 202, 32, 221, 11, 211, 32, 198, 3, 148, 55, 88, 7, 255, 33, 33, 21, 11, 64, 255, 18, 252, 28, 187, 7, 201, 23, 206, 4, 155, 36, 46, 17, 222, 56, 35, 13, 247, 52, 57, 11, 107, 51, 185, 5, 158, 21, 142, 6, 82, 51, 179, 57, 170, 28, 88, 2, 38, 5, 36, 2, 156, 16, 211, 13, 60, 39, 60, 9, 91, 41, 110, 2, 32, 51, 157, 2, 46, 55, 198, 13, 175, 19, 56, 38, 234, 59, 107, 2, 43, 12, 78, 2, 58, 64, 197, 11, 182, 60, 72, 16, 177, 60, 75, 6, 45, 60, 204, 4, 151, 62, 83, 36, 110, 29, 112, 19, 198, 7, 189, 4, 183, 44, 133, 4, 224, 48, 143, 21, 3, 37, 84, 10, 36, 30, 242, 7, 224, 51, 191, 8, 139, 62, 229, 19, 130, 31, 105, 26, 99, 39, 133, 5, 138, 19, 43, 9, 235, 48, 87, 23, 22, 59, 83, 11, 88, 71, 241, 8, 211, 61, 223, 9, 137, 63, 14, 40, 59, 57, 55, 44, 5, 7, 81, 1, 43, 12, 141, 1, 182, 13, 112, 11, 240, 17, 110, 10, 95, 29, 116, 2, 151, 44, 144, 2, 58, 23, 131, 9, 144, 25, 199, 28, 46, 32, 61, 3, 160, 15, 95, 3, 48, 39, 188, 9, 185, 62, 223, 13, 28, 71, 30, 4, 215, 23, 174, 5, 252, 22, 220, 30, 64, 73, 140, 13, 72, 7, 32, 2, 238, 35, 171, 2, 103, 45, 64, 16, 242, 17, 108, 6, 86, 12, 133, 4, 81, 62, 0, 10, 61, 48, 149, 14, 12, 68, 140, 20, 218, 23, 212, 7, 101, 11, 206, 6, 83, 64, 137, 20, 147, 65, 144, 6, 53, 67, 223, 6, 165, 18, 159, 12, 218, 28, 147, 23, 6, 56, 28, 39, 195, 15, 186, 1, 98, 16, 202, 1, 254, 35, 194, 8, 3, 29, 121, 16, 60, 50, 33, 3, 178, 43, 57, 3, 104, 49, 36, 8, 156, 50, 154, 25, 33, 37, 228, 3, 229, 25, 217, 3, 41, 41, 198, 9, 185, 59, 142, 19, 58, 49, 7, 8, 124, 60, 117, 6, 66, 63, 9, 27, 151, 55, 158, 22, 66, 10, 60, 3, 239, 21, 150, 6, 95, 53, 146, 22, 84, 14, 18, 6, 49, 44, 73, 10, 42, 38, 179, 5, 179, 54, 125, 18, 25, 62, 147, 24, 134, 24, 78, 7, 230, 30, 237, 8, 82, 66, 219, 17, 192, 64, 9, 15, 144, 59, 7, 9, 151, 62, 172, 12, 123, 56, 144, 69, 71, 46, 203, 10, 189, 7, 127, 5, 120, 5, 108, 3, 239, 16, 219, 13, 39, 17, 114, 16, 29, 21, 168, 2, 53, 68, 13, 3, 101, 25, 254, 19, 155, 31, 253, 29, 187, 28, 26, 3, 141, 32, 158, 4, 193, 58, 88, 12, 80, 58, 223, 11, 197, 79, 112, 3, 209, 56, 84, 3, 49, 48, 116, 57, 248, 26, 128, 7, 129, 16, 165, 3, 26, 32, 63, 4, 163, 41, 244, 15, 98, 39, 181, 17, 175, 10, 72, 3, 177, 80, 57, 4, 71, 65, 78, 23, 1, 62, 226, 17, 119, 42, 14, 10, 189, 14, 142, 4, 183, 56, 204, 15, 219, 80, 67, 10, 115, 59, 174, 10, 170, 59, 138, 8, 113, 24, 154, 12, 69, 51, 24, 76, 28, 28, 162, 3, 158, 9, 82, 6, 163, 17, 20, 12, 28, 54, 181, 16, 220, 40, 65, 3, 187, 67, 42, 3, 251, 65, 241, 8, 186, 60, 25, 32, 35, 53, 148, 6, 125, 12, 42, 7, 76, 62, 4, 11, 196, 61, 207, 20, 110, 66, 134, 9, 148, 65, 46, 5, 55, 61, 220, 31, 206, 45, 108, 33, 178, 14, 5, 8, 91, 37, 37, 5, 249, 52, 134, 26, 195, 47, 144, 7, 244, 31, 222, 13, 231, 51, 242, 6, 171, 63, 199, 25, 163, 63, 78, 30, 73, 33, 247, 9, 57, 28, 85, 10, 93, 71, 65, 29, 245, 65, 200, 8, 218, 69, 68, 11, 113, 67, 0, 13, 201, 36, 194, 78, 34, 43, 128, 32, 6, 5, 108, 2, 151, 5, 71, 2, 105, 23, 241, 8, 138, 15, 42, 14, 24, 20, 240, 2, 97, 52, 62, 3, 177, 21, 44, 11, 244, 45, 20, 23, 241, 41, 48, 2, 70, 21, 52, 2, 9, 52, 192, 11, 170, 46, 99, 14, 175, 77, 30, 3, 97, 38, 216, 2, 95, 53, 44, 34, 223, 28, 237, 11, 211, 9, 10, 3, 162, 23, 65, 3, 69, 25, 210, 19, 113, 32, 159, 9, 253, 23, 73, 7, 204, 59, 238, 4, 72, 56, 195, 17, 95, 53, 163, 17, 65, 12, 167, 11, 175, 9, 235, 4, 240, 58, 39, 18, 22, 60, 47, 10, 156, 56, 88, 9, 174, 48, 233, 9, 115, 29, 133, 11, 109, 50, 28, 47, 92, 21, 172, 2, 69, 12, 210, 2, 217, 19, 250, 4, 188, 49, 104, 16, 198, 59, 169, 2, 139, 30, 80, 2, 134, 25, 229, 7, 94, 64, 33, 34, 52, 52, 114, 3, 21, 21, 131, 3, 64, 57, 130, 8, 149, 57, 131, 16, 190, 55, 18, 5, 105, 54, 237, 7, 117, 60, 58, 29, 199, 61, 220, 17, 217, 9, 221, 7, 198, 19, 12, 7, 39, 20, 182, 25, 218, 27, 13, 14, 168, 42, 75, 6, 209, 45, 172, 6, 7, 66, 127, 13, 140, 63, 240, 25, 90, 36, 239, 3, 153, 36, 58, 8, 238, 74, 173, 19, 153, 48, 173, 16, 47, 62, 52, 5, 253, 59, 184, 13, 122, 46, 61, 55, 229, 62, 198, 26, 218, 7, 225, 2, 195, 14, 93, 3, 190, 44, 64, 11, 236, 13, 212, 13, 97, 35, 217, 4, 103, 48, 128, 3, 98, 33, 21, 18, 41, 45, 144, 22, 193, 31, 77, 2, 26, 32, 76, 2, 40, 73, 171, 14, 173, 50, 77, 12, 113, 61, 246, 2, 250, 64, 242, 2, 118, 59, 130, 43, 255, 61, 160, 8, 65, 18, 98, 2, 234, 39, 166, 2, 153, 59, 50, 16, 97, 22, 255, 12, 185, 32, 134, 6, 150, 77, 17, 9, 90, 60, 135, 21, 230, 54, 105, 21, 96, 22, 72, 11, 156, 29, 66, 5, 48, 56, 205, 20, 108, 63, 110, 15, 14, 59, 160, 14, 202, 59, 155, 5, 5, 57, 230, 15, 13, 48, 80, 61, 193, 29, 163, 6, 122, 8, 116, 3, 107, 17, 215, 17, 174, 70, 234, 12, 198, 49, 47, 3, 78, 58, 139, 3, 168, 58, 185, 16, 158, 60, 176, 32, 74, 70, 63, 4, 54, 9, 97, 3, 153, 63, 203, 14, 63, 61, 244, 17, 228, 63, 254, 5, 200, 64, 162, 8, 193, 65, 225, 37, 57, 62, 161, 17, 205, 12, 61, 4, 171, 37, 139, 8, 197, 46, 180, 23, 239, 35, 110, 17, 251, 34, 93, 6, 49, 40, 246, 11, 97, 64, 35, 20, 106, 60, 154, 27, 110, 53, 239, 9, 153, 20, 229, 8, 106, 65, 69, 24, 15, 65, 80, 13, 80, 79, 35, 13, 0, 73, 193, 7, 92, 55, 67, 50, 50, 59, 87, 61, 121, 17, 252, 3, 145, 6, 118, 3, 215, 16, 205, 16, 248, 34, 73, 14, 5, 23, 123, 4, 127, 45, 172, 5, 14, 62, 179, 8, 230, 17, 244, 25, 17, 27, 181, 4, 76, 24, 31, 3, 127, 48, 81, 13, 96, 62, 37, 15, 147, 77, 61, 8, 217, 37, 93, 8, 150, 57, 126, 34, 144, 56, 39, 10, 25, 7, 214, 4, 91, 30, 45, 3, 135, 74, 58, 17, 178, 21, 16, 8, 103, 14, 28, 11, 27, 68, 208, 8, 57, 65, 134, 17, 71, 63, 12, 21, 92, 31, 203, 10, 77, 13, 71, 8, 18, 68, 101, 21, 130, 53, 226, 10, 167, 77, 160, 10, 138, 35, 40, 15, 252, 70, 225, 18, 184, 67, 175, 47, 252, 19, 228, 3, 71, 19, 220, 3, 160, 38, 9, 12, 126, 23, 251, 20, 9, 62, 131, 6, 213, 32, 159, 4, 239, 58, 62, 9, 65, 77, 90, 27, 187, 46, 26, 6, 111, 28, 104, 4, 219, 65, 252, 5, 146, 61, 5, 21, 116, 57, 17, 8, 137, 78, 107, 8, 6, 67, 53, 32, 247, 69, 174, 24, 91, 21, 224, 5, 4, 16, 14, 10, 13, 68, 154, 26, 41, 22, 72, 11, 252, 64, 54, 13, 15, 35, 39, 7, 191, 78, 129, 18, 94, 76, 126, 28, 2, 26, 221, 10, 208, 44, 249, 12, 197, 75, 190, 19, 190, 73, 114, 18, 55, 64, 69, 9, 206, 79, 34, 17, 89, 44, 158, 103, 73, 45, 252, 11, 50, 11, 30, 6, 244, 19, 46, 4, 142, 37, 51, 19, 75, 19, 208, 13, 117, 29, 110, 3, 237, 80, 83, 3, 26, 27, 43, 17, 159, 65, 53, 30, 153, 39, 251, 3, 117, 38, 196, 3, 134, 60, 115, 15, 99, 60, 102, 13, 175, 73, 214, 3, 152, 78, 195, 3, 236, 65, 87, 50, 254, 55, 104, 16, 199, 25, 196, 4, 6, 36, 46, 3, 46, 66, 14, 20, 29, 22, 34, 19, 112, 21, 6, 7, 34, 79, 122, 15, 109, 66, 34, 24, 9, 70, 41, 23, 149, 36, 92, 13, 50, 29, 179, 7, 81, 76, 57, 20, 59, 74, 190, 11, 70, 64, 204, 14, 198, 62, 63, 9, 216, 33, 183, 10, 229, 36, 246, 102, 104, 42, 7, 5, 227, 13, 241, 3, 230, 21, 38, 14, 253, 75, 136, 21, 165, 48, 29, 3, 154, 80, 143, 3, 67, 60, 250, 11, 141, 66, 35, 40, 195, 73, 73, 10, 73, 15, 244, 4, 63, 76, 43, 13, 132, 70, 110, 20, 91, 75, 142, 6, 52, 76, 100, 12, 152, 70, 2, 42, 241, 64, 189, 26, 62, 12, 250, 8, 117, 42, 133, 9, 220, 60, 1, 27, 53, 49, 53, 13, 108, 43, 225, 12, 122, 65, 120, 9, 165, 73, 59, 26, 19, 67, 159, 38, 199, 49, 45, 10, 233, 34, 68, 12, 89, 74, 84, 30, 171, 71, 40, 15, 251, 79, 98, 14, 146, 76, 52, 13, 244, 50, 173, 75, 30, 41, 84, 90, 1, 0, 3, 0, 0, 0, 1, 0, 2, 0, 4, 0, 82, 120, 26, 113, 81, 106, 240, 99, 241, 93, 78, 88, 2, 83, 7, 78, 89, 73, 242, 68, 51, 115, 174, 103, 80, 93, 251, 83, 149, 75, 6, 68, 56, 61, 25, 55, 150, 49, 161, 44, 205, 76, 21, 46, 166, 27, 151, 16, 244, 9, 249, 5, 149, 3, 38, 2, 74, 1, 198, 0, 249, 79, 26, 80, 59, 80, 92, 80, 125, 80, 164, 80, 197, 80, 236, 80, 13, 81, 52, 81, 85, 81, 124, 81, 157, 81, 196, 81, 236, 81, 19, 82, 58, 82, 97, 82, 137, 82, 176, 82, 215, 82, 255, 82, 38, 83, 84, 83, 123, 83, 169, 83, 208, 83, 254, 83, 38, 84, 84, 84, 129, 84, 175, 84, 221, 84, 11, 85, 57, 85, 103, 85, 149, 85, 201, 85, 247, 85, 43, 86, 89, 86, 142, 86, 194, 86, 247, 86, 43, 87, 95, 87, 148, 87, 200, 87, 3, 88, 56, 88, 115, 88, 174, 88, 233, 88, 36, 89, 95, 89, 154, 89, 219, 89, 22, 90, 88, 90, 153, 90, 212, 90, 28, 91, 94, 91, 159, 91, 231, 91, 48, 92, 113, 92, 192, 92, 8, 93, 80, 93, 159, 93, 237, 93, 60, 94, 138, 94, 224, 94, 46, 95, 131, 95, 217, 95, 52, 96, 138, 96, 229, 96, 72, 97, 163, 97, 6, 98, 104, 98, 209, 98, 51, 99, 156, 99, 11, 100, 123, 100, 234, 100, 96, 101, 214, 101, 76, 102, 201, 102, 76, 103, 207, 103, 82, 104, 220, 104, 108, 105, 252, 105, 147, 106, 48, 107, 205, 107, 113, 108, 27, 109, 204, 109, 125, 110, 59, 111, 249, 111, 197, 112, 150, 113, 111, 114, 84, 115, 64, 116, 50, 117, 50, 118, 63, 119, 88, 120, 225, 122, 255, 127, 255, 127, 255, 127, 255, 127, 255, 127, 255, 127, 255, 127, 225, 122, 88, 120, 63, 119, 50, 118, 50, 117, 64, 116, 84, 115, 111, 114, 150, 113, 197, 112, 249, 111, 59, 111, 125, 110, 204, 109, 27, 109, 113, 108, 205, 107, 48, 107, 147, 106, 252, 105, 108, 105, 220, 104, 82, 104, 207, 103, 76, 103, 201, 102, 76, 102, 214, 101, 96, 101, 234, 100, 123, 100, 11, 100, 156, 99, 51, 99, 209, 98, 104, 98, 6, 98, 163, 97, 72, 97, 229, 96, 138, 96, 52, 96, 217, 95, 131, 95, 46, 95, 224, 94, 138, 94, 60, 94, 237, 93, 159, 93, 80, 93, 8, 93, 192, 92, 113, 92, 48, 92, 231, 91, 159, 91, 94, 91, 28, 91, 212, 90, 153, 90, 88, 90, 22, 90, 219, 89, 154, 89, 95, 89, 36, 89, 233, 88, 174, 88, 115, 88, 56, 88, 3, 88, 200, 87, 148, 87, 95, 87, 43, 87, 247, 86, 194, 86, 142, 86, 89, 86, 43, 86, 247, 85, 201, 85, 149, 85, 103, 85, 57, 85, 11, 85, 221, 84, 175, 84, 129, 84, 84, 84, 38, 84, 254, 83, 208, 83, 169, 83, 123, 83, 84, 83, 38, 83, 255, 82, 215, 82, 176, 82, 137, 82, 97, 82, 58, 82, 19, 82, 236, 81, 196, 81, 157, 81, 124, 81, 85, 81, 52, 81, 13, 81, 236, 80, 197, 80, 164, 80, 125, 80, 92, 80, 59, 80, 26, 80, 249, 79, 210, 79, 177, 79, 145, 79, 112, 79, 13, 0, 14, 0, 16, 0, 18, 0, 20, 0, 21, 0, 27, 0, 32, 0, 6, 0, 7, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 1, 0, 13, 0, 14, 0, 16, 0, 18, 0, 19, 0, 21, 0, 26, 0, 31, 0, 6, 0, 6, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 1, 0, 79, 115, 156, 110, 74, 97, 126, 77, 72, 54, 9, 31, 195, 10, 153, 251, 125, 242, 48, 239, 127, 240, 173, 244, 231, 249, 176, 254, 22, 2, 202, 3, 255, 3, 55, 3, 4, 2, 220, 0, 0, 0, 125, 255, 62, 255, 41, 255, 0, 0, 216, 127, 107, 127, 182, 126, 187, 125, 123, 124, 248, 122, 53, 121, 53, 119, 250, 116, 137, 114, 128, 46, 128, 67, 0, 120, 0, 101, 128, 94, 64, 113, 64, 95, 192, 28, 64, 76, 192, 57, 84, 0, 1, 0, 254, 255, 2, 0, 5, 0, 10, 0, 5, 0, 9, 0, 20, 0, 84, 0, 1, 0, 254, 255, 2, 0, 5, 0, 10, 0, 5, 0, 9, 0, 20, 0, 84, 0, 1, 0, 254, 255, 2, 0, 3, 0, 6, 0, 5, 0, 9, 0, 20, 0, 84, 0, 1, 0, 254, 255, 2, 0, 3, 0, 6, 0, 5, 0, 9, 0, 20, 0, 84, 0, 1, 0, 254, 255, 2, 0, 3, 0, 6, 0, 5, 0, 9, 0, 20, 0, 84, 0, 1, 0, 254, 255, 2, 0, 3, 0, 6, 0, 10, 0, 19, 0, 20, 0, 84, 0, 1, 0, 254, 255, 2, 0, 3, 0, 6, 0, 5, 0, 9, 0, 20, 0, 94, 0, 0, 0, 253, 255, 3, 0, 3, 0, 6, 0, 5, 0, 9, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 19, 0, 19, 0, 19, 0, 19, 0, 23, 0, 39, 0, 57, 0, 5, 0, 8, 0, 8, 0, 7, 0, 8, 0, 7, 0, 2, 0, 8, 0, 4, 0, 7, 0, 2, 0, 4, 0, 7, 0, 2, 0, 8, 0, 4, 0, 7, 0, 2, 0, 8, 0, 8, 0, 7, 0, 8, 0, 7, 0, 2, 0, 6, 0, 4, 0, 7, 0, 2, 0, 6, 0, 4, 0, 7, 0, 2, 0, 6, 0, 4, 0, 7, 0, 2, 0, 6, 0, 8, 0, 9, 0, 9, 0, 8, 0, 9, 0, 2, 0, 6, 0, 4, 0, 9, 0, 2, 0, 6, 0, 8, 0, 9, 0, 2, 0, 6, 0, 4, 0, 9, 0, 2, 0, 6, 0, 8, 0, 9, 0, 9, 0, 8, 0, 11, 0, 3, 0, 7, 0, 4, 0, 11, 0, 3, 0, 7, 0, 8, 0, 11, 0, 3, 0, 7, 0, 4, 0, 11, 0, 3, 0, 7, 0, 8, 0, 9, 0, 9, 0, 8, 0, 13, 0, 4, 0, 7, 0, 5, 0, 13, 0, 4, 0, 7, 0, 8, 0, 13, 0, 4, 0, 7, 0, 5, 0, 13, 0, 4, 0, 7, 0, 9, 0, 9, 0, 9, 0, 8, 0, 13, 0, 4, 0, 4, 0, 5, 0, 6, 0, 13, 0, 4, 0, 4, 0, 5, 0, 8, 0, 13, 0, 4, 0, 4, 0, 5, 0, 6, 0, 13, 0, 4, 0, 4, 0, 5, 0, 8, 0, 9, 0, 9, 0, 8, 0, 1, 0, 1, 0, 1, 0, 1, 0, 10, 0, 10, 0, 7, 0, 7, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0, 10, 0, 10, 0, 7, 0, 7, 0, 8, 0, 1, 0, 1, 0, 1, 0, 1, 0, 10, 0, 10, 0, 7, 0, 7, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0, 10, 0, 10, 0, 7, 0, 7, 0, 7, 0, 8, 0, 9, 0, 8, 0, 6, 0, 9, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 5, 0, 6, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 5, 0, 9, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 5, 0, 6, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 5, 0, 3, 0, 8, 0, 9, 0, 9, 0, 6, 0, 95, 0, 103, 0, 118, 0, 134, 0, 148, 0, 159, 0, 204, 0, 244, 0, 39, 0, 43, 0, 38, 0, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 23, 0, 24, 0, 25, 0, 26, 0, 27, 0, 28, 0, 48, 0, 49, 0, 61, 0, 62, 0, 82, 0, 83, 0, 47, 0, 46, 0, 45, 0, 44, 0, 81, 0, 80, 0, 79, 0, 78, 0, 17, 0, 18, 0, 20, 0, 22, 0, 77, 0, 76, 0, 75, 0, 74, 0, 29, 0, 30, 0, 43, 0, 42, 0, 41, 0, 40, 0, 38, 0, 39, 0, 16, 0, 19, 0, 21, 0, 50, 0, 51, 0, 59, 0, 60, 0, 63, 0, 64, 0, 72, 0, 73, 0, 84, 0, 85, 0, 93, 0, 94, 0, 32, 0, 33, 0, 35, 0, 36, 0, 53, 0, 54, 0, 56, 0, 57, 0, 66, 0, 67, 0, 69, 0, 70, 0, 87, 0, 88, 0, 90, 0, 91, 0, 34, 0, 55, 0, 68, 0, 89, 0, 37, 0, 58, 0, 71, 0, 92, 0, 31, 0, 52, 0, 65, 0, 86, 0, 7, 0, 6, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1, 0, 0, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 23, 0, 24, 0, 25, 0, 26, 0, 27, 0, 46, 0, 65, 0, 84, 0, 45, 0, 44, 0, 43, 0, 64, 0, 63, 0, 62, 0, 83, 0, 82, 0, 81, 0, 102, 0, 101, 0, 100, 0, 42, 0, 61, 0, 80, 0, 99, 0, 28, 0, 47, 0, 66, 0, 85, 0, 18, 0, 41, 0, 60, 0, 79, 0, 98, 0, 29, 0, 48, 0, 67, 0, 17, 0, 20, 0, 22, 0, 40, 0, 59, 0, 78, 0, 97, 0, 21, 0, 30, 0, 49, 0, 68, 0, 86, 0, 19, 0, 16, 0, 87, 0, 39, 0, 38, 0, 58, 0, 57, 0, 77, 0, 35, 0, 54, 0, 73, 0, 92, 0, 76, 0, 96, 0, 95, 0, 36, 0, 55, 0, 74, 0, 93, 0, 32, 0, 51, 0, 33, 0, 52, 0, 70, 0, 71, 0, 89, 0, 90, 0, 31, 0, 50, 0, 69, 0, 88, 0, 37, 0, 56, 0, 75, 0, 94, 0, 34, 0, 53, 0, 72, 0, 91, 0, 0, 0, 1, 0, 4, 0, 5, 0, 3, 0, 6, 0, 7, 0, 2, 0, 13, 0, 15, 0, 8, 0, 9, 0, 11, 0, 12, 0, 14, 0, 10, 0, 16, 0, 28, 0, 74, 0, 29, 0, 75, 0, 27, 0, 73, 0, 26, 0, 72, 0, 30, 0, 76, 0, 51, 0, 97, 0, 50, 0, 71, 0, 96, 0, 117, 0, 31, 0, 77, 0, 52, 0, 98, 0, 49, 0, 70, 0, 95, 0, 116, 0, 53, 0, 99, 0, 32, 0, 78, 0, 33, 0, 79, 0, 48, 0, 69, 0, 94, 0, 115, 0, 47, 0, 68, 0, 93, 0, 114, 0, 46, 0, 67, 0, 92, 0, 113, 0, 19, 0, 21, 0, 23, 0, 22, 0, 18, 0, 17, 0, 20, 0, 24, 0, 111, 0, 43, 0, 89, 0, 110, 0, 64, 0, 65, 0, 44, 0, 90, 0, 25, 0, 45, 0, 66, 0, 91, 0, 112, 0, 54, 0, 100, 0, 40, 0, 61, 0, 86, 0, 107, 0, 39, 0, 60, 0, 85, 0, 106, 0, 36, 0, 57, 0, 82, 0, 103, 0, 35, 0, 56, 0, 81, 0, 102, 0, 34, 0, 55, 0, 80, 0, 101, 0, 42, 0, 63, 0, 88, 0, 109, 0, 41, 0, 62, 0, 87, 0, 108, 0, 38, 0, 59, 0, 84, 0, 105, 0, 37, 0, 58, 0, 83, 0, 104, 0, 0, 0, 1, 0, 4, 0, 3, 0, 5, 0, 6, 0, 13, 0, 7, 0, 2, 0, 8, 0, 9, 0, 11, 0, 15, 0, 12, 0, 14, 0, 10, 0, 28, 0, 82, 0, 29, 0, 83, 0, 27, 0, 81, 0, 26, 0, 80, 0, 30, 0, 84, 0, 16, 0, 55, 0, 109, 0, 56, 0, 110, 0, 31, 0, 85, 0, 57, 0, 111, 0, 48, 0, 73, 0, 102, 0, 127, 0, 32, 0, 86, 0, 51, 0, 76, 0, 105, 0, 130, 0, 52, 0, 77, 0, 106, 0, 131, 0, 58, 0, 112, 0, 33, 0, 87, 0, 19, 0, 23, 0, 53, 0, 78, 0, 107, 0, 132, 0, 21, 0, 22, 0, 18, 0, 17, 0, 20, 0, 24, 0, 25, 0, 50, 0, 75, 0, 104, 0, 129, 0, 47, 0, 72, 0, 101, 0, 126, 0, 54, 0, 79, 0, 108, 0, 133, 0, 46, 0, 71, 0, 100, 0, 125, 0, 128, 0, 103, 0, 74, 0, 49, 0, 45, 0, 70, 0, 99, 0, 124, 0, 42, 0, 67, 0, 96, 0, 121, 0, 39, 0, 64, 0, 93, 0, 118, 0, 38, 0, 63, 0, 92, 0, 117, 0, 35, 0, 60, 0, 89, 0, 114, 0, 34, 0, 59, 0, 88, 0, 113, 0, 44, 0, 69, 0, 98, 0, 123, 0, 43, 0, 68, 0, 97, 0, 122, 0, 41, 0, 66, 0, 95, 0, 120, 0, 40, 0, 65, 0, 94, 0, 119, 0, 37, 0, 62, 0, 91, 0, 116, 0, 36, 0, 61, 0, 90, 0, 115, 0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 16, 0, 26, 0, 87, 0, 27, 0, 88, 0, 28, 0, 89, 0, 29, 0, 90, 0, 30, 0, 91, 0, 51, 0, 80, 0, 112, 0, 141, 0, 52, 0, 81, 0, 113, 0, 142, 0, 54, 0, 83, 0, 115, 0, 144, 0, 55, 0, 84, 0, 116, 0, 145, 0, 58, 0, 119, 0, 59, 0, 120, 0, 21, 0, 22, 0, 23, 0, 17, 0, 18, 0, 19, 0, 31, 0, 60, 0, 92, 0, 121, 0, 56, 0, 85, 0, 117, 0, 146, 0, 20, 0, 24, 0, 25, 0, 50, 0, 79, 0, 111, 0, 140, 0, 57, 0, 86, 0, 118, 0, 147, 0, 49, 0, 78, 0, 110, 0, 139, 0, 48, 0, 77, 0, 53, 0, 82, 0, 114, 0, 143, 0, 109, 0, 138, 0, 47, 0, 76, 0, 108, 0, 137, 0, 32, 0, 33, 0, 61, 0, 62, 0, 93, 0, 94, 0, 122, 0, 123, 0, 41, 0, 42, 0, 43, 0, 44, 0, 45, 0, 46, 0, 70, 0, 71, 0, 72, 0, 73, 0, 74, 0, 75, 0, 102, 0, 103, 0, 104, 0, 105, 0, 106, 0, 107, 0, 131, 0, 132, 0, 133, 0, 134, 0, 135, 0, 136, 0, 34, 0, 63, 0, 95, 0, 124, 0, 35, 0, 64, 0, 96, 0, 125, 0, 36, 0, 65, 0, 97, 0, 126, 0, 37, 0, 66, 0, 98, 0, 127, 0, 38, 0, 67, 0, 99, 0, 128, 0, 39, 0, 68, 0, 100, 0, 129, 0, 40, 0, 69, 0, 101, 0, 130, 0, 8, 0, 7, 0, 6, 0, 5, 0, 4, 0, 3, 0, 2, 0, 14, 0, 16, 0, 9, 0, 10, 0, 12, 0, 13, 0, 15, 0, 11, 0, 17, 0, 20, 0, 22, 0, 24, 0, 23, 0, 19, 0, 18, 0, 21, 0, 56, 0, 88, 0, 122, 0, 154, 0, 57, 0, 89, 0, 123, 0, 155, 0, 58, 0, 90, 0, 124, 0, 156, 0, 52, 0, 84, 0, 118, 0, 150, 0, 53, 0, 85, 0, 119, 0, 151, 0, 27, 0, 93, 0, 28, 0, 94, 0, 29, 0, 95, 0, 30, 0, 96, 0, 31, 0, 97, 0, 61, 0, 127, 0, 62, 0, 128, 0, 63, 0, 129, 0, 59, 0, 91, 0, 125, 0, 157, 0, 32, 0, 98, 0, 64, 0, 130, 0, 1, 0, 0, 0, 25, 0, 26, 0, 33, 0, 99, 0, 34, 0, 100, 0, 65, 0, 131, 0, 66, 0, 132, 0, 54, 0, 86, 0, 120, 0, 152, 0, 60, 0, 92, 0, 126, 0, 158, 0, 55, 0, 87, 0, 121, 0, 153, 0, 117, 0, 116, 0, 115, 0, 46, 0, 78, 0, 112, 0, 144, 0, 43, 0, 75, 0, 109, 0, 141, 0, 40, 0, 72, 0, 106, 0, 138, 0, 36, 0, 68, 0, 102, 0, 134, 0, 114, 0, 149, 0, 148, 0, 147, 0, 146, 0, 83, 0, 82, 0, 81, 0, 80, 0, 51, 0, 50, 0, 49, 0, 48, 0, 47, 0, 45, 0, 44, 0, 42, 0, 39, 0, 35, 0, 79, 0, 77, 0, 76, 0, 74, 0, 71, 0, 67, 0, 113, 0, 111, 0, 110, 0, 108, 0, 105, 0, 101, 0, 145, 0, 143, 0, 142, 0, 140, 0, 137, 0, 133, 0, 41, 0, 73, 0, 107, 0, 139, 0, 37, 0, 69, 0, 103, 0, 135, 0, 38, 0, 70, 0, 104, 0, 136, 0, 7, 0, 6, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1, 0, 0, 0, 16, 0, 15, 0, 14, 0, 13, 0, 12, 0, 11, 0, 10, 0, 9, 0, 8, 0, 26, 0, 27, 0, 28, 0, 29, 0, 30, 0, 31, 0, 115, 0, 116, 0, 117, 0, 118, 0, 119, 0, 120, 0, 72, 0, 73, 0, 161, 0, 162, 0, 65, 0, 68, 0, 69, 0, 108, 0, 111, 0, 112, 0, 154, 0, 157, 0, 158, 0, 197, 0, 200, 0, 201, 0, 32, 0, 33, 0, 121, 0, 122, 0, 74, 0, 75, 0, 163, 0, 164, 0, 66, 0, 109, 0, 155, 0, 198, 0, 19, 0, 23, 0, 21, 0, 22, 0, 18, 0, 17, 0, 20, 0, 24, 0, 25, 0, 37, 0, 36, 0, 35, 0, 34, 0, 80, 0, 79, 0, 78, 0, 77, 0, 126, 0, 125, 0, 124, 0, 123, 0, 169, 0, 168, 0, 167, 0, 166, 0, 70, 0, 67, 0, 71, 0, 113, 0, 110, 0, 114, 0, 159, 0, 156, 0, 160, 0, 202, 0, 199, 0, 203, 0, 76, 0, 165, 0, 81, 0, 82, 0, 92, 0, 91, 0, 93, 0, 83, 0, 95, 0, 85, 0, 84, 0, 94, 0, 101, 0, 102, 0, 96, 0, 104, 0, 86, 0, 103, 0, 87, 0, 97, 0, 127, 0, 128, 0, 138, 0, 137, 0, 139, 0, 129, 0, 141, 0, 131, 0, 130, 0, 140, 0, 147, 0, 148, 0, 142, 0, 150, 0, 132, 0, 149, 0, 133, 0, 143, 0, 170, 0, 171, 0, 181, 0, 180, 0, 182, 0, 172, 0, 184, 0, 174, 0, 173, 0, 183, 0, 190, 0, 191, 0, 185, 0, 193, 0, 175, 0, 192, 0, 176, 0, 186, 0, 38, 0, 39, 0, 49, 0, 48, 0, 50, 0, 40, 0, 52, 0, 42, 0, 41, 0, 51, 0, 58, 0, 59, 0, 53, 0, 61, 0, 43, 0, 60, 0, 44, 0, 54, 0, 194, 0, 179, 0, 189, 0, 196, 0, 177, 0, 195, 0, 178, 0, 187, 0, 188, 0, 151, 0, 136, 0, 146, 0, 153, 0, 134, 0, 152, 0, 135, 0, 144, 0, 145, 0, 105, 0, 90, 0, 100, 0, 107, 0, 88, 0, 106, 0, 89, 0, 98, 0, 99, 0, 62, 0, 47, 0, 57, 0, 64, 0, 45, 0, 63, 0, 46, 0, 55, 0, 56, 0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 23, 0, 15, 0, 16, 0, 17, 0, 18, 0, 19, 0, 20, 0, 21, 0, 22, 0, 24, 0, 25, 0, 26, 0, 27, 0, 28, 0, 38, 0, 141, 0, 39, 0, 142, 0, 40, 0, 143, 0, 41, 0, 144, 0, 42, 0, 145, 0, 43, 0, 146, 0, 44, 0, 147, 0, 45, 0, 148, 0, 46, 0, 149, 0, 47, 0, 97, 0, 150, 0, 200, 0, 48, 0, 98, 0, 151, 0, 201, 0, 49, 0, 99, 0, 152, 0, 202, 0, 86, 0, 136, 0, 189, 0, 239, 0, 87, 0, 137, 0, 190, 0, 240, 0, 88, 0, 138, 0, 191, 0, 241, 0, 91, 0, 194, 0, 92, 0, 195, 0, 93, 0, 196, 0, 94, 0, 197, 0, 95, 0, 198, 0, 29, 0, 30, 0, 31, 0, 32, 0, 33, 0, 34, 0, 35, 0, 50, 0, 100, 0, 153, 0, 203, 0, 89, 0, 139, 0, 192, 0, 242, 0, 51, 0, 101, 0, 154, 0, 204, 0, 55, 0, 105, 0, 158, 0, 208, 0, 90, 0, 140, 0, 193, 0, 243, 0, 59, 0, 109, 0, 162, 0, 212, 0, 63, 0, 113, 0, 166, 0, 216, 0, 67, 0, 117, 0, 170, 0, 220, 0, 36, 0, 37, 0, 54, 0, 53, 0, 52, 0, 58, 0, 57, 0, 56, 0, 62, 0, 61, 0, 60, 0, 66, 0, 65, 0, 64, 0, 70, 0, 69, 0, 68, 0, 104, 0, 103, 0, 102, 0, 108, 0, 107, 0, 106, 0, 112, 0, 111, 0, 110, 0, 116, 0, 115, 0, 114, 0, 120, 0, 119, 0, 118, 0, 157, 0, 156, 0, 155, 0, 161, 0, 160, 0, 159, 0, 165, 0, 164, 0, 163, 0, 169, 0, 168, 0, 167, 0, 173, 0, 172, 0, 171, 0, 207, 0, 206, 0, 205, 0, 211, 0, 210, 0, 209, 0, 215, 0, 214, 0, 213, 0, 219, 0, 218, 0, 217, 0, 223, 0, 222, 0, 221, 0, 73, 0, 72, 0, 71, 0, 76, 0, 75, 0, 74, 0, 79, 0, 78, 0, 77, 0, 82, 0, 81, 0, 80, 0, 85, 0, 84, 0, 83, 0, 123, 0, 122, 0, 121, 0, 126, 0, 125, 0, 124, 0, 129, 0, 128, 0, 127, 0, 132, 0, 131, 0, 130, 0, 135, 0, 134, 0, 133, 0, 176, 0, 175, 0, 174, 0, 179, 0, 178, 0, 177, 0, 182, 0, 181, 0, 180, 0, 185, 0, 184, 0, 183, 0, 188, 0, 187, 0, 186, 0, 226, 0, 225, 0, 224, 0, 229, 0, 228, 0, 227, 0, 232, 0, 231, 0, 230, 0, 235, 0, 234, 0, 233, 0, 238, 0, 237, 0, 236, 0, 96, 0, 199, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 0, 3, 0, 2, 0, 4, 0, 1, 0, 4, 0, 1, 0, 4, 0, 0, 0, 205, 12, 156, 25, 0, 32, 102, 38, 205, 44, 0, 48, 51, 51, 102, 54, 154, 57, 205, 60, 0, 64, 51, 67, 102, 70, 154, 73, 205, 76, 159, 0, 64, 241, 53, 167, 206, 0, 190, 242, 52, 176, 12, 1, 67, 244, 88, 185, 93, 1, 201, 245, 133, 194, 163, 1, 215, 246, 223, 200, 226, 1, 166, 247, 189, 205, 42, 2, 116, 248, 147, 210, 125, 2, 66, 249, 109, 215, 221, 2, 18, 250, 77, 220, 74, 3, 222, 250, 30, 225, 201, 3, 174, 251, 0, 230, 90, 4, 124, 252, 216, 234, 1, 5, 74, 253, 179, 239, 193, 5, 25, 254, 141, 244, 158, 6, 231, 254, 104, 249, 156, 7, 181, 255, 67, 254, 193, 8, 133, 0, 33, 3, 17, 10, 83, 1, 252, 7, 147, 11, 33, 2, 213, 12, 80, 13, 240, 2, 178, 17, 79, 15, 190, 3, 140, 22, 155, 17, 141, 4, 104, 27, 63, 20, 91, 5, 67, 32, 72, 23, 41, 6, 29, 37, 199, 26, 248, 6, 249, 41, 203, 30, 199, 7, 212, 46, 105, 35, 149, 8, 175, 51, 185, 40, 100, 9, 138, 56, 222, 48, 113, 10, 224, 62, 135, 63, 244, 11, 253, 71, 150, 82, 120, 13, 27, 81, 93, 107, 252, 14, 57, 90, 93, 107, 252, 14, 57, 90, 0, 0, 1, 0, 3, 0, 2, 0, 6, 0, 4, 0, 5, 0, 7, 0, 0, 0, 1, 0, 3, 0, 2, 0, 5, 0, 6, 0, 4, 0, 7, 0, 248, 127, 211, 127, 76, 127, 108, 126, 51, 125, 163, 123, 188, 121, 127, 119, 239, 116, 12, 114, 217, 110, 89, 107, 141, 103, 121, 99, 31, 95, 130, 90, 166, 85, 141, 80, 60, 75, 182, 69, 0, 64, 28, 58, 15, 52, 223, 45, 141, 39, 32, 33, 156, 26, 6, 20, 97, 13, 178, 6, 0, 0, 78, 249, 159, 242, 250, 235, 100, 229, 224, 222, 115, 216, 33, 210, 241, 203, 228, 197, 0, 192, 74, 186, 196, 180, 115, 175, 90, 170, 126, 165, 225, 160, 135, 156, 115, 152, 167, 148, 39, 145, 244, 141, 17, 139, 129, 136, 68, 134, 93, 132, 205, 130, 148, 129, 180, 128, 45, 128, 8, 128, 255, 127, 46, 124, 174, 120, 118, 117, 125, 114, 186, 111, 41, 109, 194, 106, 131, 104, 102, 102, 105, 100, 137, 98, 194, 96, 19, 95, 122, 93, 245, 91, 130, 90, 33, 89, 207, 87, 139, 86, 85, 85, 44, 84, 15, 83, 252, 81, 244, 80, 246, 79, 1, 79, 20, 78, 48, 77, 83, 76, 126, 75, 175, 74, 231, 73, 37, 73, 104, 72, 178, 71, 0, 71, 84, 70, 173, 69, 10, 69, 107, 68, 209, 67, 59, 67, 168, 66, 25, 66, 142, 65, 6, 65, 130, 64, 0, 64, 0, 0, 175, 5, 50, 11, 140, 16, 192, 21, 207, 26, 188, 31, 136, 36, 53, 41, 196, 45, 55, 50, 143, 54, 206, 58, 245, 62, 4, 67, 252, 70, 223, 74, 174, 78, 105, 82, 17, 86, 167, 89, 44, 93, 159, 96, 3, 100, 87, 103, 155, 106, 209, 109, 250, 112, 20, 116, 33, 119, 34, 122, 23, 125, 255, 127, 255, 127, 217, 127, 98, 127, 157, 126, 138, 125, 42, 124, 125, 122, 133, 120, 66, 118, 182, 115, 227, 112, 202, 109, 110, 106, 208, 102, 242, 98, 215, 94, 130, 90, 246, 85, 52, 81, 64, 76, 29, 71, 206, 65, 87, 60, 186, 54, 252, 48, 31, 43, 40, 37, 26, 31, 249, 24, 200, 18, 140, 12, 72, 6, 0, 0, 184, 249, 116, 243, 56, 237, 7, 231, 230, 224, 216, 218, 225, 212, 4, 207, 70, 201, 169, 195, 50, 190, 227, 184, 192, 179, 204, 174, 10, 170, 126, 165, 41, 161, 14, 157, 48, 153, 146, 149, 54, 146, 29, 143, 74, 140, 190, 137, 123, 135, 131, 133, 214, 131, 118, 130, 99, 129, 158, 128, 39, 128, 0, 128, 249, 150, 148, 221, 53, 235, 27, 241, 93, 244, 116, 246, 223, 247, 237, 248, 184, 249, 86, 250, 214, 250, 61, 251, 148, 251, 221, 251, 26, 252, 78, 252, 123, 252, 163, 252, 197, 252, 227, 252, 252, 252, 18, 253, 38, 253, 55, 253, 69, 253, 81, 253, 91, 253, 100, 253, 106, 253, 111, 253, 114, 253, 116, 253, 116, 253, 114, 253, 111, 253, 106, 253, 100, 253, 91, 253, 81, 253, 69, 253, 55, 253, 38, 253, 18, 253, 252, 252, 227, 252, 197, 252, 163, 252, 123, 252, 78, 252, 26, 252, 221, 251, 148, 251, 61, 251, 214, 250, 86, 250, 184, 249, 237, 248, 223, 247, 116, 246, 93, 244, 27, 241, 53, 235, 148, 221, 249, 150, 48, 117, 144, 101, 8, 82, 152, 58, 64, 31, 0, 0, 192, 224, 104, 197, 248, 173, 112, 154, 153, 104, 33, 3, 201, 9, 85, 253, 154, 250, 70, 2, 92, 2, 6, 251, 183, 13, 250, 232, 182, 17, 13, 254, 108, 248, 195, 11, 62, 236, 238, 21, 58, 248, 219, 251, 77, 250, 90, 17, 68, 253, 41, 235, 1, 18, 196, 1, 179, 253, 232, 242, 137, 11, 243, 4, 68, 251, 226, 245, 195, 6, 86, 14, 133, 238, 49, 252, 39, 17, 23, 246, 181, 3, 173, 250, 45, 252, 102, 22, 66, 118, 247, 14, 60, 240, 156, 11, 232, 251, 22, 252, 173, 9, 29, 244, 255, 10, 73, 247, 217, 6, 181, 249, 178, 6, 17, 249, 7, 6, 16, 252, 173, 1, 87, 255, 216, 1, 16, 251, 128, 8, 110, 245, 219, 9, 171, 249, 88, 1, 58, 3, 7, 250, 188, 6, 135, 249, 165, 6, 241, 247, 84, 10, 12, 244, 81, 11, 70, 248, 45, 2, 12, 3, 167, 250, 74, 3, 143, 2, 98, 57, 254, 44, 244, 4, 55, 245, 217, 233, 90, 29, 221, 255, 9, 245, 32, 244, 215, 18, 136, 11, 24, 223, 201, 14, 175, 5, 131, 8, 67, 222, 115, 31, 201, 247, 82, 250, 9, 3, 84, 4, 175, 246, 206, 8, 149, 254, 94, 253, 201, 247, 158, 23, 207, 233, 48, 4, 51, 12, 62, 236, 192, 20, 231, 246, 112, 241, 12, 27, 207, 240, 163, 2, 17, 249, 29, 0, 161, 39, 66, 118, 247, 14, 60, 240, 156, 11, 232, 251, 22, 252, 173, 9, 29, 244, 255, 10, 73, 247, 217, 6, 181, 249, 178, 6, 17, 249, 7, 6, 16, 252, 173, 1, 87, 255, 216, 1, 16, 251, 128, 8, 110, 245, 219, 9, 171, 249, 88, 1, 58, 3, 7, 250, 188, 6, 135, 249, 165, 6, 241, 247, 84, 10, 12, 244, 81, 11, 70, 248, 45, 2, 12, 3, 167, 250, 74, 3, 143, 2, 0, 64, 103, 65, 213, 66, 76, 68, 203, 69, 82, 71, 226, 72, 122, 74, 28, 76, 199, 77, 123, 79, 56, 81, 255, 82, 209, 84, 172, 86, 146, 88, 130, 90, 126, 92, 132, 94, 150, 96, 180, 98, 221, 100, 18, 103, 84, 105, 162, 107, 254, 109, 102, 112, 221, 114, 96, 117, 242, 119, 147, 122, 66, 125, 255, 127, 3, 115, 186, 110, 119, 98, 225, 79, 109, 57, 245, 33, 71, 12, 184, 250, 206, 238, 23, 233, 38, 233, 191, 237, 33, 245, 96, 253, 187, 4, 232, 9, 58, 12, 175, 11, 211, 8, 146, 4, 0, 0, 23, 252, 140, 249, 180, 248, 126, 249, 133, 251, 48, 254, 218, 0, 244, 2, 36, 4, 75, 4, 136, 3, 38, 2, 135, 0, 11, 255, 254, 253, 134, 253, 166, 253, 61, 254, 25, 255, 0, 0, 191, 0, 52, 1, 84, 1, 40, 1, 198, 0, 78, 0, 220, 255, 136, 255, 93, 255, 91, 255, 124, 255, 177, 255, 237, 255, 34, 0, 73, 0, 91, 0, 89, 0, 70, 0, 38, 0, 0, 0, 254, 254, 194, 254, 73, 254, 134, 253, 112, 253, 251, 252, 57, 253, 10, 254, 244, 254, 63, 255, 254, 255, 125, 0, 122, 0, 217, 255, 247, 255, 105, 0, 129, 0, 27, 1, 116, 1, 63, 2, 235, 254, 188, 254, 59, 255, 25, 254, 67, 254, 150, 254, 220, 254, 229, 255, 177, 0, 31, 2, 86, 1, 5, 2, 4, 2, 130, 0, 27, 0, 152, 255, 136, 255, 116, 255, 182, 255, 200, 255, 204, 253, 81, 252, 16, 250, 59, 252, 210, 252, 242, 253, 190, 254, 254, 255, 159, 0, 145, 2, 200, 254, 228, 254, 126, 254, 171, 253, 19, 254, 242, 253, 94, 254, 27, 255, 105, 0, 193, 1, 211, 253, 154, 252, 205, 251, 105, 252, 74, 252, 16, 253, 59, 253, 196, 254, 62, 0, 230, 1, 198, 254, 65, 255, 53, 255, 182, 254, 96, 255, 153, 255, 205, 255, 131, 0, 82, 1, 3, 2, 10, 6, 224, 8, 194, 14, 112, 21, 60, 27, 190, 32, 63, 39, 221, 43, 222, 49, 146, 53, 84, 37, 17, 42, 27, 49, 236, 51, 45, 56, 131, 45, 92, 41, 39, 38, 145, 33, 84, 25, 6, 0, 82, 0, 125, 255, 154, 0, 200, 255, 33, 253, 183, 0, 191, 255, 247, 254, 9, 0, 46, 255, 151, 254, 113, 0, 206, 2, 25, 7, 242, 3, 190, 4, 37, 6, 89, 3, 53, 5, 228, 8, 59, 3, 32, 6, 141, 7, 205, 2, 197, 7, 158, 8, 70, 3, 148, 4, 31, 7, 209, 2, 232, 3, 106, 8, 30, 1, 220, 1, 229, 5, 9, 255, 237, 253, 230, 0, 147, 0, 174, 255, 57, 2, 26, 0, 79, 255, 80, 252, 229, 255, 239, 254, 180, 2, 92, 255, 248, 254, 73, 255, 224, 0, 22, 3, 15, 4, 131, 3, 178, 3, 89, 2, 229, 1, 3, 3, 126, 4, 12, 2, 165, 2, 135, 3, 116, 255, 119, 1, 10, 3, 154, 1, 164, 2, 173, 1, 45, 1, 18, 2, 241, 3, 207, 2, 134, 2, 38, 0, 226, 0, 111, 1, 40, 0, 145, 0, 211, 255, 7, 254, 34, 1, 121, 0, 135, 255, 46, 1, 127, 0, 166, 0, 132, 255, 129, 254, 68, 252, 154, 254, 57, 254, 47, 252, 203, 2, 110, 3, 126, 3, 210, 3, 155, 3, 211, 0, 221, 1, 16, 1, 64, 0, 188, 0, 178, 255, 17, 0, 113, 255, 191, 255, 38, 0, 131, 2, 74, 2, 109, 2, 122, 255, 86, 254, 117, 253, 91, 1, 33, 2, 4, 11, 164, 4, 166, 10, 138, 9, 142, 0, 176, 255, 199, 6, 27, 1, 130, 0, 205, 1, 250, 254, 113, 254, 135, 251, 101, 254, 155, 0, 174, 1, 73, 1, 119, 1, 11, 3, 53, 0, 30, 255, 117, 255, 127, 255, 20, 255, 146, 6, 29, 1, 232, 2, 47, 5, 226, 2, 185, 2, 128, 6, 56, 1, 153, 1, 10, 1, 69, 1, 208, 2, 135, 0, 1, 0, 221, 0, 197, 1, 8, 0, 203, 0, 145, 0, 43, 1, 128, 2, 248, 2, 29, 0, 212, 1, 126, 2, 103, 0, 173, 1, 123, 1, 164, 1, 186, 3, 164, 3, 46, 5, 186, 4, 234, 4, 192, 2, 244, 3, 128, 4, 90, 255, 68, 254, 246, 254, 196, 254, 126, 255, 136, 254, 191, 0, 127, 4, 112, 7, 16, 255, 225, 253, 20, 251, 144, 255, 12, 1, 183, 4, 70, 0, 38, 4, 47, 6, 22, 1, 80, 5, 38, 6, 254, 254, 240, 254, 0, 253, 19, 0, 51, 2, 192, 8, 253, 255, 247, 254, 135, 0, 217, 254, 177, 253, 124, 254, 140, 0, 98, 1, 50, 255, 252, 254, 8, 254, 229, 252, 79, 254, 50, 253, 217, 250, 109, 0, 75, 1, 194, 3, 83, 254, 169, 255, 140, 2, 216, 254, 170, 1, 251, 3, 17, 255, 7, 3, 83, 3, 233, 1, 54, 5, 49, 4, 178, 254, 180, 254, 25, 0, 31, 2, 182, 4, 15, 7, 70, 1, 61, 0, 215, 2, 66, 2, 81, 3, 125, 5, 48, 255, 235, 254, 73, 1, 104, 255, 64, 0, 157, 2, 78, 254, 90, 253, 41, 253, 58, 254, 185, 255, 251, 0, 93, 2, 224, 1, 254, 0, 30, 254, 11, 0, 228, 3, 223, 254, 139, 1, 230, 1, 210, 2, 25, 4, 160, 5, 226, 255, 196, 254, 238, 252, 150, 255, 141, 255, 149, 253, 93, 3, 194, 5, 132, 5, 31, 4, 86, 5, 160, 4, 44, 3, 213, 4, 157, 3, 42, 0, 5, 255, 192, 253, 86, 1, 141, 0, 58, 254, 88, 255, 176, 255, 79, 5, 170, 254, 112, 253, 29, 249, 100, 0, 53, 3, 213, 2, 222, 3, 235, 2, 32, 3, 76, 1, 184, 1, 56, 2, 151, 2, 123, 1, 84, 3, 112, 0, 165, 0, 143, 254, 85, 2, 142, 3, 26, 1, 248, 255, 66, 3, 1, 5, 160, 254, 60, 2, 183, 2, 206, 1, 198, 8, 14, 7, 89, 1, 190, 0, 94, 5, 160, 1, 147, 3, 118, 8, 168, 0, 174, 255, 24, 1, 252, 253, 66, 254, 72, 3, 47, 0, 21, 2, 44, 0, 150, 254, 57, 253, 137, 251, 22, 0, 193, 0, 192, 5, 171, 255, 233, 0, 21, 7, 194, 255, 67, 2, 224, 5, 38, 2, 176, 3, 213, 6, 211, 2, 138, 2, 124, 4, 204, 3, 116, 3, 115, 5, 87, 254, 131, 2, 0, 0, 232, 3, 184, 3, 74, 4, 249, 0, 166, 5, 160, 2, 178, 254, 169, 255, 124, 8, 214, 253, 90, 7, 112, 10, 140, 0, 34, 7, 61, 7, 152, 3, 213, 6, 30, 10, 52, 4, 141, 7, 246, 7, 119, 255, 69, 254, 237, 249, 245, 4, 150, 4, 212, 1, 19, 254, 134, 255, 241, 5, 61, 254, 9, 4, 190, 4, 226, 1, 159, 6, 94, 4, 47, 3, 137, 2, 128, 1, 66, 254, 76, 253, 107, 0, 193, 254, 163, 253, 138, 255, 49, 255, 7, 254, 13, 2, 44, 254, 244, 255, 176, 10, 75, 0, 142, 7, 25, 5, 112, 3, 54, 9, 219, 8, 5, 5, 39, 6, 212, 7, 208, 255, 208, 254, 94, 251, 77, 254, 51, 254, 5, 255, 146, 254, 108, 254, 221, 253, 223, 254, 163, 253, 171, 253, 230, 253, 214, 252, 91, 255, 136, 255, 3, 0, 100, 1, 127, 2, 217, 4, 222, 5, 96, 0, 177, 0, 238, 2, 77, 254, 183, 253, 106, 251, 156, 254, 109, 0, 177, 255, 27, 254, 32, 1, 213, 7, 9, 0, 92, 4, 219, 2, 112, 3, 86, 8, 178, 3, 247, 254, 49, 6, 41, 4, 133, 4, 186, 4, 75, 3, 14, 254, 100, 253, 175, 1, 118, 1, 65, 1, 27, 255, 160, 5, 53, 8, 101, 5, 193, 1, 205, 1, 131, 4, 151, 255, 39, 0, 128, 254, 249, 254, 111, 1, 182, 0, 141, 254, 108, 253, 5, 3, 68, 255, 127, 4, 203, 3, 53, 5, 96, 6, 155, 5, 6, 3, 243, 4, 197, 4, 30, 254, 192, 252, 47, 250, 19, 255, 46, 255, 92, 3, 122, 3, 79, 6, 40, 4, 216, 1, 38, 4, 168, 4, 185, 0, 53, 4, 221, 3, 200, 253, 32, 252, 88, 249, 63, 254, 122, 252, 5, 248, 114, 255, 135, 254, 54, 254, 46, 255, 214, 253, 251, 251, 245, 255, 109, 4, 217, 8, 183, 254, 93, 253, 131, 252, 6, 255, 145, 2, 163, 4, 7, 2, 230, 5, 243, 6, 8, 2, 27, 2, 123, 5, 15, 2, 141, 5, 22, 5, 205, 253, 153, 252, 32, 251, 109, 255, 49, 254, 111, 3, 180, 255, 30, 9, 24, 11, 51, 2, 13, 10, 81, 9, 120, 2, 134, 7, 104, 11, 207, 2, 231, 7, 48, 7, 223, 253, 45, 253, 84, 4, 129, 0, 131, 255, 116, 3, 137, 5, 96, 6, 157, 3, 162, 255, 30, 6, 215, 6, 171, 254, 253, 5, 15, 6, 79, 2, 139, 1, 238, 254, 180, 255, 213, 3, 15, 11, 153, 0, 169, 11, 52, 7, 8, 4, 5, 10, 189, 10, 228, 5, 16, 11, 87, 7, 23, 3, 175, 4, 26, 2, 66, 255, 59, 254, 209, 5, 234, 254, 220, 253, 134, 4, 11, 255, 149, 7, 252, 7, 0, 4, 24, 6, 114, 6, 0, 2, 253, 0, 210, 1, 194, 255, 189, 254, 127, 4, 39, 254, 136, 254, 251, 1, 79, 254, 100, 5, 114, 8, 131, 3, 151, 7, 165, 5, 134, 0, 192, 2, 184, 1, 204, 1, 13, 2, 228, 255, 62, 254, 23, 1, 58, 5, 0, 0, 203, 3, 252, 0, 67, 254, 141, 253, 33, 252, 164, 254, 166, 253, 112, 250, 142, 1, 200, 2, 120, 6, 149, 255, 58, 1, 78, 255, 93, 0, 178, 8, 190, 8, 6, 2, 81, 3, 144, 2, 50, 254, 57, 253, 65, 254, 174, 0, 222, 255, 167, 4, 137, 255, 42, 0, 237, 3, 140, 254, 18, 1, 246, 2, 12, 4, 48, 9, 46, 7, 163, 2, 188, 6, 218, 5, 174, 1, 6, 5, 85, 8, 127, 255, 73, 254, 0, 0, 139, 254, 32, 3, 96, 8, 6, 0, 51, 6, 174, 9, 222, 1, 84, 2, 80, 8, 84, 254, 32, 253, 225, 5, 129, 1, 178, 0, 212, 3, 139, 0, 193, 1, 201, 4, 242, 253, 182, 252, 42, 252, 145, 0, 18, 6, 218, 4, 111, 2, 168, 5, 144, 2, 93, 1, 248, 3, 202, 5, 31, 0, 232, 254, 159, 1, 196, 254, 212, 2, 105, 6, 104, 1, 34, 4, 44, 2, 76, 254, 154, 254, 177, 4, 157, 254, 99, 4, 147, 7, 145, 1, 48, 6, 200, 8, 241, 253, 12, 252, 99, 1, 233, 0, 238, 0, 185, 8, 218, 253, 127, 252, 129, 253, 147, 254, 11, 254, 165, 7, 133, 1, 68, 7, 85, 6, 162, 0, 108, 4, 240, 4, 19, 255, 150, 4, 110, 5, 128, 253, 101, 254, 116, 0, 28, 255, 158, 6, 250, 8, 103, 6, 138, 8, 219, 8, 50, 2, 249, 4, 98, 10, 67, 1, 82, 1, 238, 6, 66, 2, 83, 4, 84, 3, 22, 0, 82, 2, 166, 3, 113, 255, 206, 2, 190, 1, 50, 0, 71, 0, 247, 255, 174, 254, 70, 253, 129, 250, 102, 0, 118, 255, 204, 252, 202, 254, 43, 254, 133, 251, 158, 1, 67, 0, 245, 254, 36, 4, 46, 3, 161, 5, 12, 6, 80, 5, 248, 4, 218, 6, 103, 7, 125, 6, 227, 7, 85, 8, 28, 7, 16, 7, 14, 9, 53, 7, 132, 2, 163, 255, 198, 1, 90, 3, 73, 1, 120, 255, 233, 1, 254, 254, 128, 255, 58, 255, 23, 253, 215, 255, 204, 255, 247, 254, 39, 252, 90, 1, 137, 0, 223, 1, 51, 249, 20, 253, 84, 253, 117, 251, 67, 249, 145, 254, 129, 252, 135, 251, 240, 252, 24, 254, 78, 252, 56, 252, 171, 255, 122, 254, 43, 253, 215, 0, 172, 254, 85, 255, 252, 3, 148, 3, 177, 7, 52, 2, 179, 0, 234, 2, 150, 2, 209, 3, 198, 6, 119, 3, 110, 2, 146, 3, 171, 3, 88, 3, 141, 4, 53, 1, 176, 2, 35, 3, 149, 3, 161, 0, 58, 2, 118, 0, 236, 255, 229, 254, 208, 252, 214, 255, 204, 0, 52, 251, 187, 254, 50, 254, 61, 252, 54, 255, 113, 255, 36, 252, 28, 254, 151, 254, 66, 253, 46, 252, 35, 254, 210, 254, 234, 252, 92, 251, 156, 255, 238, 252, 192, 251, 226, 251, 77, 252, 108, 249, 54, 255, 181, 252, 242, 252, 241, 251, 158, 250, 123, 252, 144, 253, 146, 255, 171, 255, 100, 1, 213, 0, 246, 255, 19, 254, 108, 1, 6, 3, 169, 1, 54, 3, 223, 1, 173, 255, 45, 2, 8, 2, 32, 252, 232, 249, 196, 253, 165, 253, 27, 253, 230, 255, 10, 254, 130, 253, 121, 252, 209, 0, 50, 1, 147, 0, 196, 254, 175, 253, 172, 253, 171, 255, 45, 255, 31, 255, 106, 252, 239, 253, 117, 0, 233, 0, 73, 254, 30, 253, 77, 4, 239, 2, 121, 2, 177, 5, 180, 6, 231, 5, 229, 6, 177, 5, 142, 3, 98, 4, 132, 4, 81, 3, 74, 5, 100, 3, 214, 1, 153, 252, 130, 251, 252, 248, 153, 252, 163, 252, 32, 252, 138, 255, 155, 0, 212, 0, 229, 251, 175, 252, 162, 253, 163, 251, 199, 248, 66, 245, 5, 252, 109, 250, 179, 248, 114, 1, 72, 255, 98, 254, 191, 3, 237, 1, 104, 0, 190, 3, 15, 4, 31, 2, 154, 0, 141, 2, 201, 0, 225, 4, 251, 1, 150, 0, 151, 2, 247, 1, 230, 0, 111, 2, 9, 3, 163, 2, 147, 2, 88, 0, 146, 255, 75, 3, 244, 0, 224, 0, 126, 1, 29, 2, 46, 1, 212, 2, 177, 1, 154, 2, 142, 4, 222, 2, 85, 1, 118, 255, 20, 0, 115, 254, 97, 251, 88, 254, 210, 255, 191, 254, 160, 254, 132, 255, 53, 5, 253, 3, 56, 4, 6, 1, 110, 1, 211, 2, 154, 3, 27, 1, 217, 253, 31, 0, 132, 253, 157, 253, 79, 253, 71, 253, 97, 254, 72, 252, 245, 252, 55, 255, 207, 250, 170, 253, 153, 254, 71, 252, 251, 250, 166, 0, 237, 1, 49, 1, 221, 0, 78, 3, 191, 2], "i8", Z2, y1.GLOBAL_BASE), s2([98, 2, 72, 3, 168, 3, 6, 3, 45, 253, 212, 250, 19, 251, 155, 254, 255, 251, 148, 250, 184, 251, 160, 250, 147, 254, 120, 250, 167, 248, 160, 253, 250, 248, 65, 249, 94, 253, 223, 253, 107, 251, 65, 253, 166, 2, 18, 3, 148, 0, 133, 255, 184, 2, 8, 5, 132, 2, 94, 1, 246, 255, 158, 1, 102, 2, 15, 0, 137, 0, 88, 1, 45, 255, 210, 252, 24, 250, 205, 252, 121, 254, 94, 252, 180, 253, 47, 0, 177, 253, 126, 252, 115, 252, 183, 251, 93, 255, 8, 251, 113, 251, 99, 255, 72, 250, 11, 250, 123, 254, 6, 251, 92, 251, 144, 253, 159, 2, 213, 0, 198, 1, 124, 0, 238, 254, 243, 253, 39, 253, 16, 254, 104, 255, 192, 250, 122, 0, 135, 0, 167, 244, 179, 253, 118, 254, 64, 249, 185, 1, 206, 255, 196, 5, 136, 3, 19, 3, 60, 1, 236, 0, 72, 254, 165, 254, 217, 0, 157, 1, 113, 252, 107, 252, 121, 0, 57, 254, 92, 252, 202, 0, 164, 255, 47, 254, 137, 254, 232, 1, 134, 1, 218, 1, 108, 3, 217, 2, 60, 1, 233, 248, 224, 250, 99, 253, 87, 0, 194, 3, 176, 1, 51, 2, 7, 255, 222, 251, 250, 0, 29, 1, 81, 4, 117, 4, 171, 1, 184, 2, 242, 251, 128, 249, 210, 249, 76, 252, 90, 1, 160, 0, 203, 254, 240, 254, 166, 252, 158, 2, 112, 2, 226, 4, 80, 252, 104, 254, 102, 253, 162, 253, 192, 254, 128, 254, 20, 254, 230, 0, 65, 0, 78, 1, 206, 255, 240, 255, 240, 255, 78, 253, 139, 250, 255, 6, 180, 6, 119, 5, 174, 9, 15, 8, 124, 5, 221, 4, 191, 5, 146, 5, 130, 254, 243, 251, 254, 255, 173, 0, 114, 254, 121, 4, 211, 5, 232, 7, 9, 7, 4, 3, 250, 4, 226, 5, 149, 5, 199, 6, 209, 7, 55, 4, 194, 4, 249, 4, 126, 251, 197, 248, 207, 250, 216, 252, 147, 251, 184, 251, 61, 254, 247, 251, 70, 249, 65, 0, 66, 2, 172, 255, 60, 250, 126, 246, 14, 249, 3, 253, 170, 250, 18, 254, 38, 255, 174, 253, 93, 252, 81, 1, 20, 255, 50, 2, 53, 9, 102, 10, 146, 7, 209, 5, 252, 4, 106, 3, 189, 0, 102, 1, 118, 1, 17, 250, 23, 247, 214, 246, 57, 252, 9, 251, 209, 247, 140, 253, 92, 251, 250, 249, 125, 6, 19, 4, 34, 2, 53, 2, 37, 4, 220, 2, 192, 255, 188, 252, 78, 254, 76, 254, 160, 255, 203, 0, 54, 4, 192, 4, 100, 6, 139, 3, 254, 5, 218, 3, 70, 1, 197, 3, 77, 3, 142, 0, 172, 255, 197, 0, 214, 1, 75, 9, 34, 6, 109, 4, 214, 1, 190, 4, 139, 1, 96, 5, 176, 4, 101, 4, 18, 4, 92, 1, 225, 253, 46, 251, 136, 254, 41, 255, 75, 255, 225, 1, 101, 248, 171, 249, 46, 255, 18, 253, 95, 251, 134, 1, 29, 0, 113, 254, 27, 0, 52, 3, 212, 4, 243, 2, 183, 2, 211, 3, 153, 1, 82, 255, 173, 4, 11, 4, 144, 3, 76, 5, 54, 7, 32, 252, 99, 250, 228, 1, 51, 250, 92, 249, 208, 0, 100, 254, 180, 4, 152, 5, 241, 254, 128, 3, 120, 4, 96, 254, 241, 6, 154, 5, 96, 249, 172, 245, 52, 255, 3, 249, 241, 249, 9, 4, 136, 249, 233, 249, 23, 5, 27, 251, 203, 249, 57, 4, 99, 253, 185, 251, 190, 255, 86, 253, 64, 1, 167, 254, 147, 2, 49, 1, 45, 4, 244, 250, 220, 252, 237, 255, 157, 249, 245, 250, 29, 0, 109, 249, 15, 254, 71, 0, 225, 254, 249, 255, 156, 255, 18, 254, 62, 252, 19, 255, 84, 3, 89, 7, 204, 6, 63, 251, 149, 250, 227, 0, 108, 253, 46, 1, 117, 1, 96, 0, 63, 4, 233, 4, 206, 251, 123, 249, 160, 0, 229, 1, 28, 8, 6, 7, 90, 252, 36, 255, 40, 2, 172, 253, 156, 253, 237, 0, 80, 1, 184, 6, 111, 3, 131, 2, 117, 2, 178, 1, 243, 4, 10, 2, 97, 6, 15, 0, 244, 0, 71, 254, 195, 5, 205, 2, 184, 0, 27, 7, 54, 6, 173, 6, 220, 3, 5, 1, 169, 3, 45, 8, 41, 9, 240, 5, 91, 8, 66, 7, 70, 6, 191, 253, 189, 253, 77, 251, 68, 252, 135, 0, 24, 254, 48, 254, 51, 0, 174, 254, 139, 253, 164, 254, 45, 253, 122, 4, 25, 8, 162, 5, 144, 8, 186, 5, 143, 3, 92, 250, 220, 249, 26, 247, 120, 5, 198, 2, 17, 5, 55, 5, 121, 2, 160, 3, 154, 5, 146, 8, 34, 10, 118, 9, 156, 8, 89, 7, 214, 3, 194, 8, 62, 7, 124, 1, 24, 3, 121, 4, 193, 255, 229, 253, 158, 1, 4, 255, 60, 252, 198, 254, 19, 251, 85, 253, 244, 252, 193, 252, 242, 253, 19, 252, 126, 249, 145, 251, 88, 254, 181, 249, 60, 254, 213, 254, 244, 4, 24, 4, 130, 2, 123, 4, 85, 3, 88, 3, 93, 253, 176, 254, 139, 0, 220, 8, 63, 5, 138, 5, 29, 0, 0, 3, 29, 3, 56, 251, 167, 1, 52, 2, 218, 250, 198, 251, 245, 0, 234, 250, 212, 252, 61, 2, 238, 250, 175, 249, 134, 2, 56, 252, 66, 3, 211, 2, 225, 3, 116, 6, 235, 7, 65, 255, 207, 252, 176, 1, 150, 2, 60, 0, 198, 0, 114, 2, 229, 3, 50, 5, 112, 6, 171, 7, 9, 5, 195, 249, 163, 255, 211, 255, 192, 251, 37, 0, 172, 255, 117, 6, 47, 10, 33, 9, 41, 4, 248, 7, 73, 9, 115, 4, 22, 9, 70, 8, 91, 3, 101, 1, 230, 5, 152, 2, 203, 4, 75, 4, 223, 1, 80, 5, 144, 3, 105, 7, 218, 6, 227, 7, 144, 4, 117, 7, 248, 6, 143, 1, 34, 0, 0, 1, 175, 253, 208, 254, 227, 251, 35, 2, 158, 6, 127, 5, 135, 2, 157, 255, 171, 254, 212, 5, 111, 6, 166, 4, 38, 0, 124, 253, 44, 255, 139, 1, 78, 3, 222, 0, 64, 253, 3, 253, 52, 253, 44, 253, 84, 248, 12, 245, 106, 255, 35, 1, 174, 255, 209, 4, 179, 5, 239, 3, 116, 255, 101, 255, 153, 0, 183, 1, 41, 1, 32, 6, 7, 250, 102, 254, 132, 253, 0, 6, 199, 1, 19, 255, 208, 250, 117, 255, 252, 254, 19, 2, 42, 2, 100, 3, 13, 1, 240, 4, 94, 2, 23, 255, 115, 3, 207, 1, 230, 2, 88, 2, 136, 255, 183, 255, 165, 1, 212, 0, 73, 254, 198, 255, 36, 3, 250, 250, 39, 251, 216, 2, 38, 1, 22, 254, 50, 0, 177, 253, 119, 252, 26, 251, 42, 0, 81, 253, 147, 0, 231, 255, 17, 1, 84, 2, 201, 254, 189, 4, 89, 2, 14, 253, 81, 3, 72, 2, 173, 1, 95, 2, 75, 2, 166, 253, 90, 255, 205, 1, 228, 252, 201, 252, 9, 3, 100, 5, 142, 3, 219, 6, 119, 0, 137, 5, 204, 3, 37, 255, 144, 252, 196, 249, 231, 251, 14, 252, 182, 1, 55, 253, 157, 250, 78, 0, 0, 0, 65, 254, 101, 251, 144, 251, 217, 250, 219, 249, 200, 8, 231, 6, 29, 5, 178, 3, 47, 6, 152, 5, 126, 4, 226, 1, 180, 1, 43, 254, 172, 251, 106, 2, 65, 254, 58, 252, 64, 4, 28, 251, 21, 250, 142, 255, 176, 251, 40, 248, 189, 253, 210, 0, 101, 2, 241, 1, 73, 248, 99, 250, 130, 2, 11, 251, 168, 252, 243, 3, 146, 249, 95, 251, 39, 4, 237, 249, 96, 253, 180, 4, 100, 249, 166, 251, 111, 2, 45, 252, 210, 250, 3, 251, 27, 2, 109, 255, 126, 3, 182, 250, 127, 252, 78, 254, 120, 3, 219, 1, 172, 1, 153, 0, 128, 254, 82, 1, 44, 250, 1, 254, 103, 1, 50, 252, 165, 251, 42, 254, 105, 0, 218, 253, 165, 2, 87, 252, 135, 251, 109, 3, 124, 1, 252, 254, 210, 0, 149, 6, 156, 3, 232, 4, 239, 6, 166, 4, 71, 4, 139, 5, 119, 2, 21, 2, 115, 2, 43, 1, 165, 254, 101, 254, 234, 253, 135, 2, 118, 253, 29, 0, 173, 253, 134, 254, 169, 250, 27, 6, 122, 5, 97, 4, 185, 5, 65, 4, 130, 5, 136, 2, 208, 247, 190, 251, 250, 255, 55, 1, 62, 255, 155, 252, 129, 253, 193, 252, 160, 1, 118, 251, 56, 251, 69, 5, 33, 251, 83, 252, 21, 7, 111, 247, 61, 248, 197, 1, 149, 253, 169, 250, 68, 252, 186, 249, 76, 248, 29, 250, 105, 251, 223, 251, 176, 251, 135, 254, 89, 2, 201, 0, 84, 7, 57, 3, 118, 1, 82, 254, 213, 250, 29, 0, 139, 250, 31, 251, 205, 250, 17, 252, 32, 250, 192, 3, 135, 250, 39, 248, 197, 0, 157, 250, 99, 248, 20, 255, 203, 251, 123, 0, 166, 1, 103, 2, 245, 4, 34, 2, 206, 254, 246, 5, 136, 3, 170, 4, 252, 6, 153, 4, 142, 253, 140, 252, 10, 250, 199, 0, 254, 2, 224, 5, 215, 251, 94, 3, 197, 0, 246, 251, 19, 249, 137, 252, 224, 252, 145, 0, 87, 2, 146, 251, 249, 253, 114, 2, 75, 251, 122, 248, 244, 1, 114, 252, 239, 251, 141, 250, 60, 250, 225, 249, 55, 252, 245, 253, 74, 3, 34, 0, 2, 7, 134, 2, 94, 3, 73, 251, 160, 248, 22, 252, 178, 255, 247, 255, 96, 253, 20, 4, 247, 2, 80, 0, 168, 253, 115, 4, 251, 3, 57, 0, 208, 7, 142, 5, 191, 252, 134, 5, 97, 4, 78, 251, 94, 6, 236, 4, 51, 254, 140, 5, 220, 4, 1, 6, 207, 3, 253, 0, 229, 254, 68, 1, 153, 254, 87, 2, 61, 255, 106, 0, 76, 2, 62, 0, 181, 253, 11, 253, 133, 2, 205, 0, 51, 0, 177, 4, 246, 2, 71, 251, 161, 2, 122, 254, 144, 253, 45, 6, 173, 3, 105, 255, 255, 3, 223, 2, 4, 11, 21, 5, 178, 2, 210, 254, 12, 2, 157, 255, 124, 252, 204, 249, 91, 251, 60, 4, 251, 0, 238, 0, 222, 7, 0, 7, 242, 3, 221, 4, 97, 6, 205, 6, 53, 251, 252, 249, 72, 251, 147, 253, 200, 1, 147, 255, 40, 0, 191, 255, 20, 3, 219, 252, 69, 253, 186, 250, 185, 253, 136, 3, 64, 3, 223, 252, 20, 2, 82, 2, 180, 7, 128, 5, 71, 5, 103, 251, 168, 248, 190, 247, 251, 252, 56, 2, 180, 3, 9, 252, 55, 4, 236, 4, 169, 251, 226, 1, 126, 255, 242, 6, 20, 4, 12, 3, 45, 250, 245, 0, 144, 3, 196, 254, 139, 251, 107, 252, 232, 253, 94, 250, 214, 246, 239, 252, 246, 249, 60, 248, 45, 248, 1, 1, 141, 3, 199, 248, 135, 253, 71, 251, 254, 249, 130, 248, 226, 251, 70, 6, 191, 8, 40, 6, 201, 253, 36, 250, 248, 249, 1, 251, 195, 0, 89, 5, 207, 252, 37, 1, 195, 4, 243, 253, 118, 2, 173, 4, 94, 249, 135, 246, 208, 248, 209, 254, 219, 2, 235, 2, 111, 251, 5, 255, 13, 1, 74, 252, 181, 255, 148, 6, 98, 251, 59, 254, 237, 3, 193, 249, 73, 2, 122, 1, 229, 247, 197, 253, 85, 254, 239, 253, 121, 251, 109, 251, 229, 254, 51, 255, 204, 253, 228, 252, 222, 4, 205, 2, 229, 8, 159, 3, 27, 2, 58, 254, 47, 2, 184, 1, 51, 253, 180, 5, 79, 6, 250, 251, 28, 4, 74, 6, 111, 251, 118, 255, 79, 3, 226, 0, 39, 0, 156, 253, 29, 251, 150, 255, 39, 253, 117, 253, 200, 3, 22, 5, 54, 253, 132, 253, 191, 6, 97, 1, 45, 4, 154, 1, 226, 252, 100, 255, 75, 4, 194, 253, 150, 3, 190, 1, 226, 250, 244, 3, 210, 1, 128, 5, 55, 6, 253, 2, 149, 5, 100, 5, 221, 6, 157, 7, 164, 7, 74, 9, 42, 6, 255, 7, 100, 8, 148, 3, 98, 0, 249, 255, 101, 7, 138, 5, 93, 8, 92, 1, 125, 5, 43, 6, 152, 0, 110, 4, 9, 7, 245, 254, 154, 0, 115, 5, 114, 251, 213, 1, 30, 4, 138, 251, 107, 254, 207, 251, 195, 250, 40, 247, 211, 249, 148, 254, 101, 3, 170, 6, 118, 251, 37, 2, 14, 6, 55, 251, 116, 248, 126, 249, 51, 250, 71, 248, 249, 247, 65, 249, 118, 252, 158, 255, 151, 248, 233, 0, 212, 5, 124, 3, 108, 0, 181, 254, 64, 249, 110, 251, 92, 249, 220, 251, 188, 7, 254, 6, 210, 251, 51, 249, 139, 248, 245, 255, 3, 6, 37, 5, 192, 249, 94, 0, 241, 1, 165, 1, 187, 1, 59, 255, 214, 249, 163, 254, 30, 252, 169, 253, 229, 253, 116, 4, 59, 252, 117, 250, 127, 255, 195, 250, 175, 0, 65, 254, 137, 254, 31, 5, 7, 8, 141, 254, 118, 253, 205, 254, 207, 251, 93, 2, 109, 1, 247, 247, 143, 255, 174, 1, 140, 2, 146, 3, 199, 3, 12, 252, 206, 249, 237, 246, 225, 5, 224, 4, 47, 2, 6, 1, 26, 254, 111, 254, 65, 249, 62, 5, 10, 6, 50, 0, 56, 0, 176, 1, 182, 254, 119, 0, 164, 253, 19, 250, 200, 251, 214, 252, 178, 3, 103, 4, 31, 4, 136, 250, 89, 249, 80, 249, 10, 251, 64, 253, 219, 250, 39, 3, 29, 7, 119, 4, 200, 10, 70, 6, 123, 8, 96, 4, 153, 1, 106, 255, 109, 255, 148, 1, 191, 3, 135, 9, 119, 7, 141, 8, 118, 252, 115, 255, 158, 252, 120, 252, 114, 255, 54, 254, 211, 253, 60, 253, 113, 249, 194, 252, 105, 250, 209, 249, 206, 248, 190, 250, 194, 251, 188, 249, 240, 254, 147, 3, 84, 251, 4, 3, 32, 4, 130, 253, 46, 251, 151, 248, 12, 254, 175, 255, 202, 252, 247, 250, 179, 249, 33, 253, 139, 255, 17, 3, 168, 0, 190, 251, 109, 4, 154, 3, 184, 251, 22, 253, 104, 5, 31, 1, 221, 253, 217, 251, 160, 250, 103, 247, 76, 251, 128, 247, 222, 249, 35, 249, 25, 250, 63, 247, 253, 252, 55, 249, 75, 4, 62, 3, 204, 249, 212, 2, 219, 4, 250, 249, 181, 2, 37, 3, 102, 249, 16, 255, 129, 6, 92, 249, 252, 255, 100, 253, 101, 8, 48, 3, 18, 4, 206, 252, 207, 248, 22, 0, 4, 253, 5, 254, 193, 1, 129, 251, 151, 253, 33, 1, 181, 252, 196, 249, 16, 255, 242, 1, 22, 255, 111, 253, 16, 253, 224, 1, 142, 6, 193, 254, 31, 254, 193, 0, 213, 252, 171, 0, 137, 255, 176, 247, 54, 255, 176, 252, 181, 6, 116, 4, 164, 6, 67, 0, 239, 255, 66, 0, 244, 255, 102, 249, 187, 253, 152, 255, 240, 254, 204, 251, 94, 251, 203, 248, 136, 254, 140, 251, 98, 252, 92, 254, 198, 255, 253, 254, 112, 253, 146, 251, 215, 253, 252, 6, 203, 4, 199, 1, 129, 0, 206, 1, 185, 1, 16, 255, 240, 253, 72, 3, 2, 2, 130, 0, 181, 255, 90, 4, 111, 2, 153, 0, 216, 0, 44, 4, 52, 2, 250, 255, 236, 254, 95, 4, 215, 2, 190, 0, 188, 255, 192, 2, 50, 1, 119, 0, 248, 254, 73, 1, 61, 0, 156, 255, 156, 0, 108, 1, 123, 0, 183, 0, 48, 255, 85, 255, 133, 255, 220, 0, 191, 255, 206, 254, 194, 255, 146, 1, 17, 0, 108, 253, 86, 252, 246, 254, 0, 0, 129, 1, 235, 0, 20, 1, 29, 1, 64, 1, 12, 1, 176, 254, 56, 255, 44, 253, 17, 0, 172, 255, 125, 1, 224, 253, 173, 1, 238, 1, 7, 2, 139, 255, 32, 1, 48, 1, 73, 1, 131, 2, 157, 0, 189, 2, 252, 1, 176, 4, 113, 2, 28, 3, 96, 2, 230, 3, 165, 1, 236, 1, 120, 2, 180, 4, 12, 3, 190, 1, 132, 0, 233, 4, 76, 3, 35, 2, 193, 1, 61, 3, 146, 2, 29, 2, 214, 1, 108, 4, 234, 4, 150, 3, 127, 2, 35, 2, 51, 0, 167, 1, 23, 1, 9, 0, 136, 1, 83, 0, 94, 0, 30, 2, 31, 2, 229, 0, 109, 255, 58, 255, 129, 0, 194, 0, 71, 255, 161, 252, 215, 250, 210, 254, 30, 0, 171, 253, 139, 253, 237, 255, 114, 0, 124, 252, 199, 251, 210, 1, 97, 1, 53, 250, 219, 249, 15, 0, 113, 255, 84, 249, 245, 247, 17, 253, 196, 0, 172, 248, 237, 247, 126, 253, 254, 254, 225, 246, 66, 250, 62, 254, 204, 253, 184, 253, 70, 255, 152, 252, 98, 254, 243, 248, 36, 252, 155, 251, 226, 250, 42, 253, 151, 251, 28, 0, 169, 0, 241, 251, 160, 252, 50, 253, 10, 255, 228, 1, 36, 0, 23, 255, 207, 255, 9, 1, 67, 0, 33, 1, 211, 1, 178, 0, 31, 2, 42, 3, 28, 2, 84, 0, 26, 1, 160, 2, 191, 2, 49, 252, 247, 252, 129, 0, 31, 1, 86, 252, 29, 255, 187, 3, 83, 2, 175, 249, 223, 254, 68, 3, 137, 2, 201, 248, 41, 255, 82, 4, 206, 2, 14, 248, 195, 251, 138, 2, 184, 1, 203, 247, 239, 253, 139, 3, 63, 2, 37, 248, 176, 254, 158, 2, 204, 0, 171, 246, 76, 253, 104, 1, 137, 0, 148, 247, 100, 247, 247, 255, 24, 1, 246, 254, 119, 0, 39, 0, 193, 0, 78, 0, 197, 255, 136, 255, 226, 0, 49, 252, 166, 252, 243, 252, 185, 251, 149, 253, 99, 254, 61, 254, 182, 252, 64, 251, 215, 250, 211, 252, 141, 252, 160, 250, 177, 249, 118, 254, 84, 254, 31, 253, 167, 251, 219, 253, 234, 252, 144, 252, 49, 252, 57, 252, 126, 253, 39, 252, 138, 252, 7, 251, 175, 250, 39, 254, 220, 252, 135, 250, 129, 250, 160, 0, 247, 254, 105, 252, 237, 254, 8, 255, 6, 255, 50, 253, 132, 254, 97, 0, 153, 255, 137, 254, 27, 255, 97, 254, 63, 255, 121, 255, 213, 253, 116, 2, 105, 1, 119, 0, 216, 0, 67, 2, 108, 1, 135, 1, 209, 0, 122, 2, 10, 2, 102, 255, 108, 255, 14, 2, 133, 1, 170, 0, 33, 0, 105, 0, 11, 1, 64, 0, 124, 1, 33, 250, 24, 252, 226, 255, 143, 254, 210, 251, 58, 0, 135, 2, 223, 0, 16, 250, 221, 254, 109, 2, 51, 1, 5, 250, 156, 0, 250, 2, 148, 1, 19, 248, 141, 0, 222, 2, 243, 1, 199, 248, 118, 253, 50, 1, 0, 2, 69, 255, 152, 255, 197, 255, 182, 1, 134, 0, 26, 255, 156, 0, 70, 255, 195, 255, 252, 254, 240, 255, 10, 0, 199, 253, 253, 255, 91, 254, 215, 254, 67, 249, 247, 253, 166, 254, 178, 0, 174, 250, 197, 255, 212, 255, 157, 0, 158, 247, 51, 254, 42, 254, 163, 254, 134, 247, 255, 255, 143, 254, 135, 255, 213, 249, 139, 254, 124, 252, 9, 252, 163, 251, 177, 253, 155, 253, 240, 252, 207, 253, 122, 0, 181, 255, 63, 254, 252, 255, 85, 255, 133, 255, 140, 254, 192, 0, 168, 0, 180, 255, 124, 255, 252, 0, 149, 255, 84, 1, 210, 0, 136, 1, 253, 1, 16, 1, 181, 0, 147, 255, 145, 0, 218, 0, 119, 0, 96, 254, 249, 254, 229, 1, 9, 1, 75, 255, 248, 255, 226, 254, 226, 0, 12, 255, 38, 255, 69, 0, 222, 254, 98, 255, 191, 0, 255, 255, 192, 255, 176, 253, 166, 255, 213, 0, 160, 255, 255, 0, 179, 1, 178, 0, 176, 255, 143, 254, 238, 255, 223, 255, 176, 255, 214, 255, 159, 1, 140, 0, 34, 255, 119, 4, 139, 2, 137, 2, 73, 1, 255, 2, 44, 2, 249, 0, 235, 0, 180, 3, 157, 1, 186, 1, 23, 1, 141, 0, 83, 1, 100, 1, 45, 2, 42, 254, 86, 255, 99, 0, 237, 0, 199, 253, 224, 252, 96, 1, 53, 2, 26, 1, 217, 1, 214, 1, 76, 1, 57, 255, 78, 253, 252, 250, 107, 252, 63, 255, 86, 254, 224, 252, 158, 251, 230, 255, 141, 254, 22, 254, 63, 255, 125, 2, 83, 2, 7, 2, 74, 1, 152, 1, 141, 255, 79, 0, 12, 0, 221, 1, 87, 0, 153, 255, 136, 254, 102, 253, 165, 254, 235, 254, 221, 254, 2, 254, 31, 254, 169, 0, 41, 1, 195, 252, 30, 253, 51, 255, 85, 255, 192, 254, 228, 253, 72, 1, 27, 1, 165, 252, 66, 252, 186, 1, 254, 255, 44, 2, 174, 2, 130, 0, 56, 0, 103, 5, 244, 3, 243, 2, 171, 1, 100, 2, 229, 2, 116, 2, 41, 2, 173, 254, 228, 252, 134, 0, 21, 1, 135, 253, 195, 251, 254, 255, 10, 255, 144, 252, 245, 251, 185, 249, 216, 251, 30, 252, 38, 254, 142, 251, 24, 254, 98, 254, 229, 252, 73, 0, 50, 255, 248, 255, 117, 255, 183, 1, 204, 0, 80, 255, 190, 253, 23, 0, 131, 0, 243, 254, 11, 253, 65, 255, 245, 0, 147, 255, 174, 254, 112, 0, 60, 1, 120, 0, 106, 254, 138, 255, 99, 2, 76, 255, 70, 255, 123, 253, 115, 0, 83, 255, 34, 0, 250, 253, 23, 254, 105, 255, 61, 0, 185, 253, 180, 252, 220, 0, 118, 255, 87, 253, 4, 252, 135, 1, 239, 255, 170, 253, 191, 254, 157, 0, 217, 254, 129, 0, 155, 0, 98, 252, 149, 252, 37, 252, 29, 1, 241, 0, 173, 255, 131, 255, 131, 255, 108, 2, 85, 2, 176, 1, 92, 0, 137, 1, 78, 0, 153, 1, 61, 0, 119, 254, 29, 253, 99, 254, 20, 253, 83, 0, 54, 0, 105, 1, 27, 0, 196, 251, 130, 0, 175, 254, 74, 253, 227, 249, 41, 1, 62, 1, 237, 255, 175, 248, 36, 0, 51, 0, 195, 254, 237, 246, 10, 255, 231, 0, 172, 255, 254, 246, 241, 252, 40, 0, 77, 255, 71, 247, 94, 252, 38, 254, 50, 254, 14, 253, 170, 255, 224, 254, 142, 253, 149, 246, 57, 254, 193, 255, 171, 0, 181, 251, 186, 251, 230, 255, 113, 255, 87, 251, 57, 254, 106, 254, 131, 254, 163, 253, 46, 255, 160, 255, 205, 255, 188, 253, 36, 254, 236, 254, 241, 255, 85, 251, 134, 253, 77, 251, 143, 252, 134, 254, 35, 255, 99, 253, 72, 252, 82, 2, 178, 0, 109, 254, 92, 253, 251, 2, 71, 1, 89, 2, 34, 1, 172, 0, 44, 1, 203, 0, 157, 0, 200, 255, 176, 254, 100, 1, 24, 0, 28, 255, 216, 254, 253, 254, 227, 255, 70, 255, 7, 1, 160, 1, 14, 0, 159, 254, 117, 1, 244, 255, 40, 255, 1, 1, 96, 0, 174, 0, 57, 0, 10, 250, 152, 253, 70, 252, 13, 254, 15, 254, 104, 255, 179, 254, 125, 0, 105, 0, 200, 0, 179, 0, 159, 255, 181, 254, 32, 255, 253, 2, 185, 2, 248, 2, 0, 1, 45, 1, 59, 0, 199, 1, 171, 255, 204, 0, 32, 1, 254, 253, 240, 0, 251, 0, 147, 255, 0, 1, 161, 1, 222, 255, 99, 254, 101, 0, 174, 1, 128, 1, 156, 0, 225, 255, 246, 255, 206, 0, 170, 1, 77, 2, 145, 0, 143, 0, 71, 0, 40, 3, 138, 3, 77, 1, 93, 1, 218, 3, 170, 3, 77, 2, 75, 1, 20, 5, 56, 3, 187, 0, 253, 1, 38, 4, 141, 2, 123, 1, 210, 1, 182, 5, 169, 3, 145, 1, 18, 1, 19, 3, 93, 3, 9, 1, 2, 0, 97, 2, 41, 2, 28, 0, 49, 1, 158, 3, 84, 1, 106, 0, 130, 1, 241, 0, 245, 254, 109, 255, 225, 0, 78, 255, 234, 253, 91, 1, 246, 1, 125, 253, 131, 254, 141, 1, 30, 0, 117, 253, 35, 253, 77, 254, 142, 1, 105, 254, 42, 253, 28, 254, 8, 255, 235, 252, 110, 252, 74, 254, 36, 254, 14, 254, 122, 254, 75, 0, 217, 254, 60, 252, 178, 253, 162, 253, 150, 0, 135, 255, 207, 255, 101, 255, 178, 255, 167, 3, 38, 2, 133, 1, 38, 0, 191, 254, 127, 0, 168, 1, 59, 1, 227, 254, 143, 255, 27, 1, 3, 1, 146, 2, 203, 0, 66, 1, 230, 1, 135, 3, 249, 1, 236, 2, 161, 1, 99, 2, 167, 1, 43, 2, 0, 2, 239, 0, 173, 255, 190, 253, 237, 255, 173, 254, 37, 253, 93, 1, 13, 0, 90, 252, 137, 250, 142, 255, 152, 254, 107, 0, 180, 2, 182, 0, 90, 0, 37, 251, 254, 249, 241, 249, 43, 253, 200, 253, 121, 252, 173, 250, 243, 253, 251, 253, 171, 252, 163, 252, 20, 252, 88, 255, 78, 253, 189, 252, 63, 0, 119, 255, 212, 253, 221, 253, 144, 0, 226, 254, 207, 252, 229, 1, 63, 1, 109, 255, 104, 254, 14, 2, 246, 0, 165, 254, 78, 254, 41, 1, 228, 255, 222, 254, 41, 254, 170, 251, 251, 250, 52, 254, 153, 254, 36, 252, 230, 252, 67, 5, 19, 5, 178, 2, 11, 2, 192, 4, 44, 4, 70, 4, 245, 2, 57, 3, 116, 4, 240, 2, 238, 1, 228, 4, 85, 5, 171, 4, 130, 3, 9, 2, 29, 4, 20, 2, 176, 1, 178, 254, 40, 255, 199, 254, 249, 254, 96, 255, 52, 0, 40, 254, 101, 255, 127, 0, 136, 0, 132, 254, 44, 0, 83, 3, 154, 1, 94, 255, 23, 254, 123, 0, 1, 255, 228, 252, 101, 253, 66, 4, 149, 3, 21, 3, 237, 1, 117, 5, 173, 4, 46, 2, 202, 0, 205, 255, 138, 255, 170, 254, 67, 253, 83, 0, 108, 0, 214, 255, 71, 254, 61, 0, 95, 0, 31, 1, 0, 1, 229, 255, 89, 0, 12, 2, 19, 2, 95, 1, 227, 0, 80, 2, 33, 2, 185, 2, 155, 0, 92, 255, 51, 1, 126, 2, 18, 1, 23, 254, 206, 255, 242, 2, 240, 0, 90, 255, 132, 255, 140, 255, 189, 253, 68, 251, 193, 255, 190, 0, 217, 254, 240, 251, 240, 250, 147, 0, 136, 254, 79, 255, 143, 255, 73, 3, 217, 4, 27, 4, 156, 2, 2, 0, 37, 1, 39, 2, 48, 1, 184, 251, 71, 252, 8, 255, 120, 1, 18, 253, 59, 252, 87, 0, 4, 2, 237, 254, 252, 253, 177, 2, 135, 1, 133, 254, 125, 253, 108, 3, 82, 2, 122, 254, 11, 252, 123, 253, 61, 2, 149, 255, 200, 253, 79, 253, 198, 252, 255, 251, 229, 255, 184, 254, 53, 255, 93, 3, 237, 2, 36, 2, 233, 0, 132, 249, 237, 251, 195, 1, 108, 0, 108, 253, 148, 253, 174, 1, 236, 0, 21, 0, 116, 254, 122, 251, 137, 253, 92, 5, 18, 5, 199, 3, 65, 2, 101, 4, 101, 4, 77, 2, 198, 1, 189, 254, 159, 252, 45, 254, 153, 0, 44, 254, 69, 253, 220, 252, 3, 254, 120, 254, 50, 253, 52, 255, 221, 255, 165, 253, 187, 251, 201, 253, 94, 255, 7, 254, 20, 252, 154, 255, 94, 1, 219, 0, 224, 0, 167, 1, 252, 0, 139, 1, 79, 2, 96, 2, 107, 1, 22, 253, 160, 255, 117, 1, 172, 0, 171, 0, 39, 1, 202, 2, 83, 1, 233, 0, 77, 0, 107, 0, 21, 1, 157, 0, 153, 0, 13, 254, 156, 254, 11, 6, 49, 4, 64, 2, 238, 1, 220, 254, 173, 254, 8, 254, 176, 253, 121, 252, 184, 255, 149, 253, 31, 254, 198, 249, 163, 251, 201, 253, 2, 255, 231, 252, 5, 254, 204, 253, 221, 254, 20, 254, 236, 253, 246, 1, 48, 2, 130, 254, 171, 1, 88, 2, 230, 0, 29, 255, 221, 1, 251, 0, 75, 0, 29, 1, 74, 3, 45, 3, 220, 1, 226, 250, 203, 250, 186, 0, 121, 1, 181, 253, 107, 252, 131, 2, 125, 1, 94, 251, 215, 253, 155, 1, 82, 0, 153, 251, 204, 252, 82, 255, 228, 253, 164, 253, 119, 0, 31, 2, 205, 0, 132, 254, 145, 2, 141, 3, 55, 2, 112, 0, 214, 254, 138, 254, 114, 0, 167, 252, 5, 255, 56, 0, 159, 0, 145, 1, 89, 1, 222, 255, 116, 255, 145, 255, 161, 253, 41, 0, 102, 2, 99, 1, 142, 255, 179, 255, 218, 1, 66, 2, 56, 0, 170, 5, 156, 3, 74, 4, 140, 5, 229, 2, 144, 1, 246, 0, 22, 0, 76, 2, 57, 1, 135, 255, 71, 1, 63, 3, 216, 1, 142, 251, 160, 253, 88, 3, 40, 2, 39, 251, 208, 251, 126, 2, 88, 2, 154, 254, 254, 0, 179, 254, 209, 254, 122, 253, 227, 2, 102, 1, 74, 0, 202, 4, 135, 6, 197, 4, 81, 3, 193, 8, 88, 6, 215, 3, 124, 2, 49, 7, 197, 5, 237, 2, 128, 1, 94, 1, 7, 1, 87, 0, 128, 0, 146, 248, 83, 252, 112, 255, 192, 255, 58, 249, 1, 255, 32, 1, 225, 255, 172, 245, 42, 251, 110, 1, 235, 0, 149, 249, 188, 251, 192, 250, 208, 254, 227, 253, 205, 251, 164, 251, 123, 0, 102, 251, 4, 255, 208, 252, 76, 255, 8, 252, 21, 2, 53, 2, 233, 0, 25, 254, 82, 254, 68, 255, 78, 1, 99, 3, 212, 4, 22, 2, 171, 0, 202, 249, 185, 249, 123, 2, 118, 2, 108, 247, 54, 1, 156, 3, 156, 1, 202, 246, 184, 254, 188, 3, 17, 2, 177, 245, 135, 254, 118, 2, 22, 1, 214, 245, 61, 1, 31, 3, 43, 1, 154, 246, 133, 0, 84, 1, 31, 0, 148, 247, 68, 250, 131, 0, 125, 0, 96, 251, 22, 254, 117, 255, 46, 0, 24, 253, 191, 1, 123, 3, 52, 2, 67, 0, 61, 254, 134, 2, 92, 2, 215, 253, 83, 254, 148, 252, 140, 1, 162, 0, 190, 255, 25, 5, 147, 3, 223, 1, 67, 2, 64, 4, 26, 3, 194, 1, 22, 1, 54, 2, 68, 1, 223, 251, 102, 255, 148, 0, 79, 255, 15, 246, 168, 0, 46, 4, 80, 2, 209, 246, 214, 255, 51, 3, 89, 1, 216, 246, 61, 253, 209, 2, 250, 0, 129, 247, 39, 250, 203, 254, 122, 0, 178, 255, 183, 255, 120, 0, 173, 0, 252, 255, 6, 1, 249, 254, 251, 254, 81, 254, 192, 255, 107, 254, 36, 253, 207, 245, 116, 0, 173, 255, 63, 255, 11, 250, 80, 252, 35, 254, 43, 253, 4, 254, 51, 1, 170, 0, 172, 0, 64, 3, 161, 1, 64, 3, 174, 2, 31, 255, 177, 0, 126, 3, 50, 3, 30, 254, 123, 254, 255, 4, 15, 4, 129, 254, 201, 0, 162, 254, 40, 0, 218, 2, 123, 2, 226, 0, 14, 2, 247, 1, 206, 1, 82, 1, 142, 1, 23, 2, 202, 2, 40, 0, 230, 254, 202, 5, 191, 5, 61, 4, 219, 2, 25, 6, 48, 4, 141, 3, 181, 2, 139, 5, 2, 5, 121, 3, 111, 3, 129, 4, 216, 2, 162, 4, 72, 3, 30, 255, 106, 4, 181, 3, 177, 2, 18, 254, 38, 252, 236, 249, 128, 255, 200, 253, 47, 253, 55, 253, 230, 255, 61, 1, 12, 2, 70, 0, 135, 0, 107, 254, 159, 252, 26, 249, 116, 253, 82, 255, 223, 252, 117, 3, 5, 3, 103, 255, 165, 255, 75, 4, 239, 2, 6, 254, 131, 251, 85, 3, 134, 2, 241, 0, 14, 3, 7, 2, 27, 2, 61, 7, 164, 6, 77, 4, 172, 2, 31, 251, 50, 250, 48, 254, 188, 0, 131, 252, 127, 250, 224, 250, 171, 254, 121, 255, 182, 1, 81, 255, 18, 0, 87, 4, 208, 3, 63, 1, 208, 0, 106, 250, 24, 249, 83, 0, 202, 1, 238, 253, 24, 252, 51, 1, 129, 0, 184, 252, 241, 255, 227, 255, 156, 254, 113, 252, 100, 252, 133, 251, 14, 255, 137, 255, 240, 253, 127, 0, 123, 255, 7, 253, 3, 253, 190, 0, 173, 255, 197, 254, 127, 3, 10, 2, 231, 0, 34, 255, 102, 0, 193, 255, 84, 254, 60, 1, 187, 2, 123, 1, 70, 0, 25, 0, 204, 2, 58, 1, 148, 255, 251, 1, 106, 3, 54, 2, 238, 0, 108, 0, 173, 3, 7, 2, 195, 0, 169, 1, 196, 255, 85, 254, 1, 1, 139, 0, 153, 255, 138, 253, 190, 1, 78, 1, 114, 1, 156, 1, 48, 0, 84, 255, 78, 253, 229, 254, 45, 2, 187, 0, 226, 254, 158, 0, 227, 1, 140, 0, 14, 1, 168, 254, 137, 253, 156, 3, 67, 2, 140, 255, 132, 0, 142, 0, 210, 1, 188, 255, 192, 255, 230, 0, 111, 255, 210, 254, 226, 253, 221, 252, 112, 252, 250, 3, 225, 2, 251, 252, 247, 3, 118, 2, 41, 1, 220, 245, 95, 0, 189, 1, 80, 1, 182, 247, 235, 1, 254, 1, 191, 0, 27, 251, 161, 0, 254, 255, 188, 254, 86, 250, 135, 253, 56, 253, 151, 255, 182, 252, 2, 255, 101, 254, 100, 0, 128, 253, 222, 254, 242, 3, 251, 2, 118, 253, 57, 1, 145, 4, 218, 2, 140, 0, 249, 1, 6, 4, 254, 2, 4, 3, 31, 1, 43, 4, 55, 3, 239, 1, 237, 2, 49, 1, 67, 1, 92, 255, 206, 1, 78, 0, 143, 1, 170, 254, 150, 252, 69, 0, 85, 2, 240, 255, 108, 2, 109, 2, 81, 1, 118, 255, 68, 254, 247, 254, 218, 0, 84, 0, 62, 254, 185, 3, 154, 2, 34, 255, 221, 252, 29, 2, 92, 2, 103, 252, 160, 250, 244, 0, 116, 0, 183, 252, 45, 253, 118, 2, 76, 2, 140, 0, 151, 2, 38, 1, 112, 1, 167, 3, 22, 4, 113, 3, 247, 2, 210, 6, 184, 5, 148, 3, 116, 2, 180, 1, 195, 3, 25, 1, 1, 0, 137, 255, 74, 0, 30, 2, 213, 0, 1, 0, 201, 253, 45, 1, 241, 0, 4, 1, 179, 1, 222, 0, 140, 1, 168, 3, 189, 3, 84, 4, 191, 2, 254, 1, 250, 1, 40, 3, 222, 1, 89, 2, 182, 2, 192, 3, 108, 2, 204, 3, 229, 2, 212, 3, 88, 2, 66, 3, 205, 2, 255, 2, 172, 2, 131, 2, 204, 3, 167, 3, 126, 2, 245, 1, 149, 2, 208, 2, 83, 3, 151, 255, 136, 253, 209, 254, 139, 255, 83, 254, 130, 0, 21, 3, 186, 1, 246, 253, 68, 255, 192, 2, 117, 1, 9, 253, 42, 0, 46, 3, 11, 2, 237, 253, 143, 251, 117, 1, 66, 2, 86, 253, 77, 251, 57, 254, 29, 1, 117, 251, 215, 249, 182, 251, 44, 0, 81, 0, 174, 255, 200, 2, 107, 1, 221, 1, 246, 0, 186, 3, 110, 2, 68, 6, 86, 6, 253, 4, 123, 3, 129, 5, 91, 3, 156, 3, 124, 3, 6, 3, 17, 4, 179, 3, 118, 4, 40, 0, 222, 253, 181, 255, 32, 1, 152, 253, 150, 255, 71, 253, 230, 255, 87, 255, 96, 255, 133, 252, 29, 253, 233, 254, 128, 254, 251, 251, 162, 254, 245, 6, 28, 5, 22, 4, 48, 3, 44, 6, 253, 5, 192, 5, 154, 4, 225, 5, 52, 4, 192, 4, 131, 3, 122, 3, 136, 3, 52, 2, 142, 2, 152, 3, 180, 2, 253, 3, 88, 3, 19, 254, 132, 0, 177, 0, 249, 1, 71, 0, 195, 0, 228, 255, 97, 0, 200, 1, 95, 1, 92, 255, 88, 0, 183, 1, 22, 1, 216, 255, 94, 1, 115, 5, 181, 3, 234, 0, 161, 255, 219, 252, 40, 254, 38, 0, 93, 255, 111, 1, 158, 255, 233, 1, 11, 2, 1, 4, 154, 4, 188, 4, 138, 3, 63, 1, 34, 5, 46, 3, 205, 1, 133, 255, 225, 253, 220, 252, 191, 1, 20, 253, 188, 254, 127, 252, 153, 251, 31, 253, 11, 254, 235, 252, 55, 253, 203, 2, 9, 3, 215, 4, 154, 3, 157, 7, 147, 7, 88, 5, 97, 3, 218, 2, 112, 3, 246, 2, 132, 1, 153, 252, 198, 1, 17, 0, 5, 255, 131, 254, 214, 252, 209, 249, 239, 0, 247, 253, 58, 252, 232, 252, 3, 1, 134, 252, 178, 250, 254, 252, 183, 255, 166, 0, 93, 1, 44, 255, 67, 1, 184, 252, 211, 254, 217, 1, 179, 1, 89, 253, 48, 254, 216, 2, 95, 1, 100, 255, 57, 255, 155, 2, 176, 1, 29, 0, 4, 255, 159, 1, 224, 1, 37, 253, 133, 254, 145, 0, 47, 2, 240, 253, 137, 253, 122, 251, 97, 255, 189, 1, 17, 1, 123, 0, 127, 2, 117, 1, 130, 255, 32, 3, 56, 2, 84, 0, 94, 255, 208, 2, 200, 2, 194, 252, 232, 253, 71, 255, 222, 0, 152, 1, 196, 1, 245, 1, 3, 3, 127, 252, 181, 250, 189, 255, 186, 1, 232, 252, 130, 250, 54, 2, 90, 2, 167, 0, 186, 254, 253, 1, 74, 1, 161, 255, 142, 253, 38, 253, 168, 254, 132, 6, 193, 4, 11, 3, 199, 1, 36, 5, 60, 3, 72, 2, 207, 2, 148, 1, 225, 255, 245, 3, 21, 3, 89, 0, 107, 0, 123, 3, 37, 2, 103, 3, 45, 6, 149, 3, 159, 2, 98, 3, 199, 5, 9, 5, 86, 3, 135, 1, 44, 4, 98, 4, 44, 3, 78, 0, 206, 253, 89, 1, 51, 2, 173, 1, 153, 255, 161, 1, 19, 3, 134, 255, 75, 254, 155, 1, 20, 3, 111, 252, 95, 254, 90, 2, 242, 2, 30, 255, 240, 255, 151, 0, 248, 2, 68, 253, 118, 0, 152, 255, 242, 255, 152, 251, 48, 0, 28, 1, 137, 1, 122, 254, 93, 254, 129, 253, 140, 255, 114, 252, 50, 1, 60, 1, 243, 255, 183, 4, 216, 3, 53, 3, 157, 2, 85, 251, 75, 253, 140, 0, 43, 255, 140, 252, 96, 254, 57, 255, 210, 253, 152, 253, 245, 0, 108, 254, 104, 253, 6, 1, 56, 0, 151, 253, 44, 253, 171, 255, 21, 254, 192, 254, 112, 253, 198, 253, 193, 252, 127, 255, 240, 253, 30, 250, 193, 255, 145, 254, 127, 254, 154, 254, 191, 254, 4, 0, 51, 0, 146, 254, 42, 255, 63, 1, 255, 1, 146, 0, 159, 2, 239, 255, 221, 254, 146, 255, 208, 1, 117, 255, 16, 254, 54, 255, 220, 0, 200, 254, 137, 253, 108, 253, 183, 255, 113, 253, 204, 252, 106, 253, 115, 253, 248, 250, 167, 252, 82, 254, 71, 252, 65, 252, 248, 254, 207, 255, 44, 254, 184, 255, 131, 254, 162, 254, 205, 253, 63, 255, 105, 254, 55, 0, 104, 254, 221, 252, 11, 0, 203, 254, 137, 2, 188, 0, 58, 255, 0, 254, 205, 1, 177, 255, 54, 254, 218, 250, 249, 254, 122, 255, 245, 253, 135, 249, 77, 254, 17, 254, 3, 253, 57, 0, 165, 254, 98, 254, 178, 1, 139, 251, 14, 255, 104, 253, 167, 252, 34, 0, 188, 255, 61, 253, 174, 254, 163, 1, 163, 0, 226, 255, 250, 254, 57, 254, 235, 252, 106, 250, 47, 253, 238, 3, 152, 2, 13, 1, 25, 0, 107, 2, 4, 1, 183, 0, 96, 0, 56, 252, 178, 250, 124, 254, 135, 0, 75, 253, 67, 3, 200, 1, 154, 0, 81, 4, 191, 2, 57, 2, 107, 1, 89, 6, 46, 5, 217, 3, 236, 2, 36, 255, 219, 0, 76, 0, 48, 255, 81, 250, 130, 249, 49, 0, 149, 0, 60, 252, 84, 255, 16, 253, 176, 254, 113, 2, 209, 0, 6, 255, 190, 255, 7, 252, 186, 252, 254, 255, 61, 1, 136, 247, 51, 250, 118, 255, 123, 0, 172, 248, 205, 247, 247, 253, 85, 0, 57, 252, 146, 254, 73, 253, 143, 252, 103, 252, 13, 252, 5, 253, 75, 252, 132, 255, 0, 255, 160, 254, 108, 253, 178, 0, 207, 1, 98, 1, 48, 1, 48, 249, 177, 253, 230, 254, 79, 0, 55, 247, 175, 0, 99, 3, 243, 1, 118, 255, 76, 255, 75, 255, 235, 255, 13, 247, 39, 251, 52, 254, 248, 253, 253, 252, 195, 1, 246, 255, 204, 254, 15, 1, 191, 255, 4, 0, 214, 0, 233, 254, 77, 254, 213, 255, 164, 254, 98, 253, 35, 0, 191, 255, 45, 255, 38, 3, 23, 2, 85, 0, 41, 1, 57, 0, 239, 0, 210, 2, 237, 1, 225, 0, 149, 2, 72, 3, 35, 2, 228, 253, 136, 254, 14, 0, 93, 1, 213, 1, 209, 2, 75, 1, 162, 0, 224, 253, 16, 253, 194, 255, 246, 255, 142, 1, 168, 255, 212, 2, 189, 2, 237, 255, 235, 253, 162, 255, 89, 2, 136, 0, 185, 255, 87, 253, 21, 253, 90, 255, 168, 254, 5, 1, 206, 255, 161, 0, 204, 255, 229, 1, 81, 1, 117, 249, 50, 0, 190, 0, 163, 255, 22, 247, 25, 255, 62, 255, 174, 255, 161, 255, 173, 253, 102, 255, 128, 0, 126, 3, 245, 1, 76, 2, 201, 1, 167, 254, 206, 0, 122, 0, 110, 0, 137, 253, 29, 255, 199, 253, 3, 0, 152, 1, 239, 0, 141, 1, 226, 0, 59, 255, 254, 255, 128, 0, 235, 1, 1, 5, 136, 3, 36, 1, 215, 0, 26, 2, 50, 1, 3, 1, 253, 1, 91, 253, 233, 251, 13, 0, 65, 1, 89, 253, 180, 253, 154, 254, 44, 255, 210, 253, 243, 0, 134, 2, 223, 1, 230, 1, 86, 1, 122, 2, 20, 2, 107, 0, 34, 3, 75, 1, 136, 0, 144, 255, 114, 254, 249, 251, 226, 254, 186, 254, 63, 253, 32, 1, 16, 1, 19, 5, 120, 4, 154, 4, 92, 3, 89, 254, 121, 0, 127, 254, 108, 255, 217, 254, 210, 254, 190, 252, 205, 252, 16, 0, 232, 255, 55, 255, 36, 254, 43, 2, 91, 0, 11, 255, 38, 1, 218, 255, 133, 254, 62, 252, 59, 251, 89, 251, 18, 250, 239, 254, 117, 254, 122, 254, 11, 252, 123, 253, 61, 2, 205, 248, 250, 251, 249, 1, 212, 1, 232, 2, 179, 3, 97, 2, 237, 1, 79, 253, 108, 251, 140, 253, 121, 255, 254, 251, 195, 0, 155, 1, 196, 0, 46, 6, 123, 4, 63, 2, 81, 1, 41, 251, 247, 252, 120, 253, 114, 255, 83, 2, 57, 3, 199, 3, 223, 2, 74, 251, 54, 252, 175, 255, 170, 254, 23, 253, 13, 0, 184, 255, 119, 1, 198, 1, 19, 0, 127, 5, 153, 3, 145, 249, 84, 255, 93, 3, 50, 2, 160, 3, 1, 6, 39, 4, 228, 2, 88, 246, 72, 252, 8, 1, 82, 0, 10, 254, 59, 252, 202, 250, 123, 0, 99, 3, 212, 4, 22, 2, 171, 0, 240, 246, 52, 254, 12, 3, 107, 1, 90, 251, 151, 253, 252, 0, 195, 255, 82, 255, 34, 0, 243, 3, 20, 3, 227, 246, 247, 0, 167, 1, 153, 0, 240, 255, 157, 254, 6, 1, 193, 1, 216, 249, 207, 251, 224, 253, 141, 254, 153, 253, 207, 254, 27, 4, 37, 3, 175, 2, 16, 2, 6, 0, 74, 255, 167, 3, 107, 3, 234, 3, 41, 3, 199, 0, 1, 1, 126, 0, 76, 0, 184, 253, 142, 251, 87, 2, 44, 2, 175, 251, 145, 250, 201, 249, 249, 253, 47, 252, 211, 250, 108, 0, 91, 1, 46, 253, 49, 252, 109, 1, 101, 0, 111, 255, 169, 2, 249, 0, 103, 255, 0, 0, 178, 254, 198, 253, 159, 0, 156, 1, 29, 1, 176, 254, 151, 253, 71, 252, 58, 252, 119, 3, 177, 2, 29, 251, 84, 0, 71, 255, 114, 254, 176, 253, 177, 1, 20, 4, 141, 2, 85, 0, 73, 1, 216, 255, 105, 1, 79, 254, 63, 253, 210, 1, 62, 2, 102, 255, 142, 2, 80, 2, 34, 1, 89, 255, 72, 0, 93, 1, 175, 0, 162, 2, 41, 1, 209, 3, 208, 2, 211, 4, 180, 4, 245, 2, 232, 1, 112, 254, 243, 254, 26, 2, 116, 1, 186, 250, 149, 250, 86, 251, 165, 255, 238, 4, 108, 3, 7, 3, 188, 2, 169, 253, 218, 255, 82, 254, 46, 253, 184, 7, 94, 6, 223, 3, 96, 2, 111, 0, 20, 1, 30, 255, 160, 255, 77, 252, 124, 254, 245, 255, 249, 255, 209, 254, 237, 253, 185, 252, 82, 1, 198, 6, 174, 6, 125, 5, 245, 3, 252, 253, 169, 252, 123, 253, 210, 0, 80, 253, 96, 254, 1, 2, 230, 0, 202, 252, 131, 253, 134, 251, 192, 254, 72, 252, 110, 253, 74, 253, 183, 0, 142, 255, 145, 253, 50, 3, 162, 2, 65, 255, 52, 255, 219, 2, 123, 2, 51, 0, 197, 4, 115, 3, 64, 2, 70, 252, 81, 254, 58, 3, 86, 2, 170, 254, 13, 253, 124, 252, 105, 254, 154, 251, 158, 254, 50, 255, 0, 254, 221, 253, 214, 252, 155, 254, 148, 253, 66, 0, 3, 2, 183, 255, 102, 254, 152, 252, 79, 252, 92, 250, 53, 251, 191, 0, 239, 255, 224, 253, 25, 255, 252, 249, 224, 253, 123, 252, 138, 252, 134, 252, 242, 249, 19, 246, 205, 252, 54, 252, 175, 0, 198, 252, 46, 251, 6, 253, 169, 253, 234, 255, 122, 2, 213, 252, 37, 252, 122, 252, 189, 254, 203, 0, 26, 0, 129, 254, 21, 255, 243, 252, 113, 254, 238, 4, 138, 3, 92, 252, 137, 250, 156, 250, 144, 253, 93, 0, 87, 0, 98, 254, 229, 253, 77, 253, 37, 0, 121, 2, 254, 1, 125, 254, 36, 254, 206, 250, 143, 1, 66, 0, 7, 1, 105, 254, 207, 255, 177, 254, 95, 254, 17, 4, 73, 7, 245, 252, 191, 251, 96, 250, 22, 253, 166, 252, 64, 3, 187, 253, 9, 253, 141, 254, 95, 253, 6, 254, 40, 8, 208, 253, 134, 253, 101, 251, 15, 1, 241, 0, 14, 0, 74, 254, 12, 255, 115, 254, 207, 1, 178, 4, 23, 4, 162, 253, 227, 252, 98, 250, 205, 255, 189, 254, 225, 1, 32, 255, 184, 253, 241, 253, 238, 1, 113, 3, 170, 2, 79, 254, 206, 254, 22, 252, 42, 2, 147, 2, 222, 0, 171, 0, 96, 255, 159, 254, 169, 2, 6, 7, 29, 6, 172, 252, 99, 251, 97, 249, 176, 254, 102, 253, 114, 0, 187, 253, 12, 253, 24, 253, 61, 255, 119, 1, 241, 1, 47, 254, 220, 252, 182, 251, 154, 0, 26, 1, 125, 255, 206, 255, 65, 255, 49, 253, 67, 1, 220, 2, 6, 6, 46, 253, 205, 252, 132, 250, 105, 0, 6, 255, 185, 0, 78, 255, 10, 254, 26, 253, 65, 1, 254, 1, 87, 4, 189, 254, 201, 253, 58, 252, 127, 0, 228, 1, 82, 1, 96, 255, 52, 0, 174, 254, 220, 2, 87, 5, 18, 6, 142, 253, 222, 252, 96, 249, 226, 254, 182, 253, 164, 2, 73, 253, 169, 254, 142, 254, 22, 254, 39, 1, 101, 7, 138, 253, 194, 253, 10, 252, 176, 255, 133, 2, 187, 255, 250, 255, 194, 254, 148, 254, 14, 3, 170, 5, 14, 4, 199, 254, 35, 253, 141, 250, 120, 0, 60, 0, 221, 1, 248, 254, 183, 253, 133, 255, 199, 2, 221, 4, 121, 2, 165, 255, 157, 254, 8, 252, 3, 3, 246, 2, 5, 1, 253, 0, 81, 0, 38, 254, 162, 3, 167, 8, 184, 6, 216, 252, 181, 251, 123, 248, 208, 253, 242, 252, 169, 0, 220, 252, 206, 251, 68, 255, 142, 253, 201, 255, 125, 5, 74, 253, 52, 253, 86, 251, 108, 253, 98, 1, 73, 1, 254, 253, 201, 255, 225, 253, 110, 1, 9, 4, 158, 4, 110, 253, 65, 252, 179, 250, 201, 255, 72, 255, 93, 0, 163, 253, 226, 254, 106, 253, 148, 1, 193, 1, 59, 3, 226, 254, 162, 254, 17, 251, 116, 2, 50, 1, 227, 0, 240, 255, 147, 0, 145, 253, 186, 0, 155, 3, 98, 8, 94, 253, 134, 252, 186, 249, 69, 254, 28, 255, 83, 1, 143, 254, 234, 252, 103, 254, 231, 0, 86, 0, 189, 5, 64, 254, 187, 253, 219, 251, 82, 2, 194, 1, 79, 255, 132, 255, 86, 255, 65, 254, 159, 2, 135, 4, 124, 5, 36, 254, 101, 253, 25, 250, 179, 255, 118, 255, 204, 2, 79, 255, 140, 254, 131, 254, 195, 1, 166, 3, 147, 3, 6, 255, 80, 254, 202, 252, 16, 1, 60, 3, 190, 1, 26, 0, 19, 0, 225, 255, 186, 2, 156, 6, 120, 8, 122, 253, 47, 252, 124, 248, 77, 255, 39, 254, 12, 1, 133, 254, 23, 253, 77, 253, 11, 0, 127, 0, 9, 4, 24, 254, 107, 252, 199, 252, 61, 0, 67, 1, 135, 0, 147, 0, 111, 255, 82, 253, 173, 2, 18, 3, 146, 6, 6, 254, 176, 252, 239, 250, 35, 0, 90, 0, 222, 0, 233, 255, 166, 254, 98, 253, 199, 1, 79, 2, 7, 5, 53, 255, 175, 253, 194, 251, 140, 2, 96, 1, 181, 1, 39, 0, 63, 0, 55, 254, 73, 3, 241, 4, 57, 8, 248, 253, 142, 252, 208, 249, 184, 254, 57, 253, 141, 5, 172, 253, 170, 254, 186, 255, 209, 0, 173, 0, 136, 7, 89, 254, 170, 253, 103, 252, 165, 1, 93, 2, 218, 255, 254, 255, 11, 255, 129, 255, 128, 3, 177, 7, 111, 4, 133, 254, 250, 253, 213, 249, 173, 0, 118, 0, 241, 2, 201, 255, 131, 254, 204, 255, 217, 3, 253, 3, 241, 2, 254, 255, 221, 254, 133, 252, 241, 2, 224, 3, 167, 1, 8, 1, 131, 0, 60, 255, 127, 3, 226, 8, 239, 9, 133, 253, 192, 251, 61, 246, 239, 253, 42, 252, 14, 2, 4, 253, 194, 252, 220, 253, 76, 254, 60, 1, 87, 2, 93, 253, 84, 252, 22, 253, 199, 255, 236, 0, 245, 255, 55, 255, 175, 255, 226, 252, 16, 0, 77, 3, 22, 6, 31, 253, 39, 252, 68, 251, 44, 254, 17, 0, 34, 1, 233, 254, 184, 253, 68, 253, 183, 0, 54, 3, 193, 2, 247, 254, 20, 254, 93, 251, 165, 1, 152, 0, 212, 1, 122, 254, 166, 0, 244, 254, 39, 0, 14, 6, 76, 7, 133, 253, 58, 252, 221, 249, 59, 254, 20, 254, 142, 3, 228, 254, 253, 251, 181, 255, 75, 255, 123, 255, 60, 7, 67, 254, 144, 253, 106, 251, 164, 1, 111, 1, 207, 255, 123, 254, 44, 255, 87, 255, 195, 2, 49, 4, 184, 4, 229, 253, 58, 253, 87, 250, 83, 0, 93, 255, 228, 1, 20, 255, 225, 253, 157, 254, 82, 1, 151, 4, 46, 3, 10, 255, 203, 254, 66, 252, 94, 2, 248, 2, 60, 0, 166, 0, 248, 255, 93, 255, 206, 254, 57, 7, 3, 10, 21, 253, 255, 251, 9, 249, 93, 254, 66, 254, 209, 0, 50, 253, 202, 253, 234, 253, 6, 254, 181, 2, 89, 3, 49, 254, 71, 253, 198, 251, 69, 1, 175, 1, 50, 255, 241, 255, 248, 255, 5, 253, 33, 2, 151, 3, 238, 5, 157, 253, 241, 252, 223, 250, 0, 1, 201, 255, 208, 0, 91, 255, 164, 254, 106, 253, 65, 1, 168, 2, 162, 3, 186, 254, 83, 254, 73, 252, 228, 1, 190, 1, 58, 2, 59, 255, 72, 0, 183, 255, 141, 3, 175, 5, 205, 6, 205, 253, 31, 253, 74, 248, 132, 255, 96, 254, 206, 2, 34, 254, 108, 254, 198, 254, 240, 255, 190, 1, 100, 6, 217, 253, 231, 253, 18, 253, 198, 255, 126, 2, 214, 0, 55, 0, 71, 255, 241, 254, 124, 4, 21, 5, 188, 4, 29, 254, 97, 253, 16, 251, 117, 0, 29, 1, 31, 2, 52, 255, 121, 254, 145, 255, 1, 2, 2, 6, 86, 3, 142, 255, 66, 255, 46, 252, 109, 3, 83, 2, 208, 1, 4, 1, 4, 1, 201, 254, 236, 2, 235, 8, 168, 8, 251, 253, 79, 252, 133, 247, 186, 254, 60, 253, 122, 1, 212, 252, 77, 253, 24, 255, 208, 253, 175, 2, 129, 5, 36, 253, 78, 253, 188, 252, 153, 254, 133, 2, 130, 1, 247, 254, 62, 0, 90, 253, 145, 0, 108, 6, 184, 4, 213, 253, 36, 252, 47, 251, 178, 255, 14, 0, 114, 0, 185, 254, 154, 254, 23, 254, 136, 1, 165, 2, 185, 2, 55, 255, 20, 255, 140, 251, 181, 2, 193, 1, 178, 0, 13, 255, 0, 1, 79, 254, 99, 2, 105, 5, 152, 9, 156, 253, 123, 252, 72, 250, 205, 254, 239, 255, 243, 1, 197, 254, 101, 253, 2, 255, 0, 1, 172, 1, 183, 5, 26, 254, 90, 254, 224, 251, 143, 2, 114, 1, 18, 0, 154, 255, 71, 255, 236, 254, 243, 2, 42, 6, 55, 5, 24, 254, 165, 253, 118, 250, 182, 0, 163, 255, 102, 3, 183, 255, 54, 254, 164, 254, 67, 3, 94, 3, 189, 3, 230, 254, 179, 254, 22, 253, 35, 2, 71, 3, 172, 1, 17, 1, 167, 255, 13, 0, 172, 3, 172, 6, 16, 10, 94, 254, 196, 251, 34, 249, 212, 255, 154, 254, 3, 1, 15, 254, 125, 253, 208, 253, 99, 0, 45, 2, 193, 3, 91, 254, 2, 253, 107, 252, 39, 1, 70, 1, 184, 0, 175, 0, 15, 0, 142, 253, 20, 2, 110, 3, 189, 7, 69, 254, 0, 253, 5, 251, 221, 0, 156, 0, 12, 1, 39, 0, 149, 254, 7, 254, 183, 2, 4, 3, 116, 4, 94, 255, 53, 254, 112, 252, 197, 2, 188, 1, 146, 2, 25, 0, 47, 1, 200, 254, 244, 4, 130, 5, 179, 6, 215, 254, 2, 253, 212, 248, 249, 254, 148, 255, 46, 4, 106, 254, 243, 255, 127, 255, 57, 0, 182, 1, 174, 10, 138, 254, 25, 254, 189, 252, 48, 1, 184, 2, 164, 0, 104, 0, 21, 255, 5, 0, 75, 6, 108, 7, 119, 5, 27, 255, 186, 253, 211, 250, 149, 1, 192, 0, 49, 3, 169, 255, 74, 254, 111, 0, 4, 4, 175, 4, 225, 3, 68, 0, 81, 255, 90, 252, 9, 4, 93, 4, 195, 1, 222, 1, 200, 0, 8, 255, 79, 8, 136, 10, 250, 7, 189, 252, 213, 250, 173, 247, 225, 252, 76, 253, 210, 1, 212, 252, 248, 251, 43, 254, 146, 253, 32, 1, 152, 3, 67, 253, 183, 252, 210, 251, 101, 254, 0, 2, 8, 0, 122, 254, 165, 255, 24, 253, 226, 255, 19, 4, 137, 4, 202, 252, 132, 251, 124, 251, 218, 254, 210, 255, 110, 0, 101, 254, 138, 254, 90, 253, 214, 0, 19, 2, 156, 2, 106, 254, 92, 254, 86, 251, 231, 1, 232, 0, 47, 1, 194, 254, 91, 0, 40, 254, 123, 0, 208, 4, 141, 9, 46, 253, 72, 252, 41, 250, 30, 253, 93, 253, 52, 5, 225, 253, 162, 253, 45, 255, 161, 255, 158, 255, 228, 5, 219, 253, 254, 253, 87, 251, 217, 1, 211, 0, 73, 0, 224, 254, 144, 255, 123, 254, 25, 2, 52, 5, 234, 4, 201, 253, 13, 253, 247, 249, 71, 0, 229, 254, 120, 2, 86, 255, 31, 254, 19, 254, 169, 2, 234, 3, 49, 3, 156, 254, 181, 254, 147, 252, 163, 1, 194, 2, 90, 1, 241, 0, 222, 255, 186, 254, 121, 1, 158, 7, 91, 7, 41, 253, 205, 251, 167, 249, 23, 255, 225, 253, 116, 0, 244, 253, 218, 252, 183, 253, 183, 255, 222, 1, 217, 2, 224, 254, 99, 252, 137, 251, 173, 0, 191, 1, 204, 255, 68, 0, 27, 255, 162, 253, 193, 1, 17, 2, 5, 7, 177, 253, 149, 252, 173, 250, 183, 0, 112, 255, 68, 1, 153, 255, 60, 254, 102, 253, 111, 2, 232, 1, 152, 4, 18, 255, 1, 254, 20, 252, 70, 1, 40, 2, 202, 1, 136, 0, 108, 0, 193, 254, 114, 2, 63, 5, 91, 7, 22, 254, 122, 253, 62, 249, 70, 255, 63, 254, 216, 3, 30, 253, 180, 255, 86, 255, 218, 253, 243, 2, 0, 10, 16, 254, 2, 254, 77, 252, 210, 0, 182, 2, 204, 255, 84, 0, 190, 254, 57, 255, 66, 4, 89, 6, 200, 4, 136, 254, 165, 253, 140, 250, 87, 1, 74, 0, 120, 2, 81, 255, 10, 254, 224, 255, 204, 3, 52, 5, 222, 2, 52, 0, 217, 254, 167, 251, 41, 4, 150, 3, 160, 0, 137, 1, 107, 0, 115, 254, 190, 4, 89, 10, 205, 6, 136, 253, 79, 251, 157, 248, 49, 253, 235, 254, 97, 1, 117, 253, 144, 252, 134, 255, 45, 255, 209, 0, 58, 5, 206, 253, 54, 253, 221, 251, 48, 255, 132, 1, 159, 0, 192, 254, 195, 255, 217, 253, 37, 1, 68, 4, 163, 5, 120, 253, 159, 252, 27, 251, 207, 255, 113, 255, 49, 1, 111, 254, 29, 255, 183, 253, 49, 2, 20, 2, 159, 3, 139, 255, 69, 254, 92, 251, 251, 1, 180, 1, 36, 1, 177, 255, 233, 0, 54, 254, 159, 2, 1, 4, 92, 9, 135, 253, 182, 252, 11, 250, 204, 254, 226, 254, 128, 2, 139, 254, 147, 253, 105, 254, 162, 1, 253, 0, 25, 5, 197, 254, 187, 253, 143, 251, 60, 2, 173, 2, 231, 254, 61, 0, 188, 255, 141, 254, 223, 3, 77, 4, 218, 5, 19, 254, 85, 253, 174, 250, 209, 255, 164, 0, 192, 2, 0, 255, 198, 254, 244, 254, 119, 2, 181, 3, 28, 4, 138, 255, 164, 254, 191, 252, 68, 0, 156, 4, 56, 2, 152, 0, 117, 0, 34, 0, 89, 4, 110, 7, 191, 8, 167, 253, 65, 252, 86, 249, 113, 255, 23, 254, 224, 1, 180, 254, 113, 253, 194, 253, 54, 0, 97, 1, 168, 4, 50, 254, 116, 253, 228, 252, 150, 0, 37, 2, 112, 0, 195, 0, 145, 255, 253, 253, 167, 2, 84, 4, 111, 6, 210, 253, 19, 253, 63, 251, 247, 255, 16, 1, 85, 1, 203, 255, 247, 254, 233, 253, 233, 1, 75, 3, 18, 5, 136, 255, 30, 254, 248, 251, 120, 2, 31, 2, 152, 1, 179, 0, 50, 1, 242, 253, 100, 4, 184, 5, 196, 8, 95, 254, 238, 252, 230, 249, 32, 255, 128, 254, 84, 5, 135, 254, 53, 254, 231, 255, 129, 1, 233, 1, 126, 8, 180, 254, 117, 253, 195, 252, 32, 2, 41, 2, 61, 0, 22, 0, 143, 255, 167, 255, 104, 4, 189, 6, 244, 5, 40, 255, 139, 254, 139, 249, 161, 0, 60, 1, 140, 3, 91, 255, 34, 255, 189, 255, 82, 5, 151, 4, 21, 3, 73, 0, 4, 255, 1, 253, 226, 2, 164, 3, 104, 2, 106, 1, 246, 0, 130, 255, 19, 3, 94, 10, 211, 11, 77, 253, 174, 251, 114, 247, 203, 253, 180, 253, 12, 2, 178, 253, 45, 252, 22, 254, 249, 254, 141, 1, 214, 3, 191, 253, 187, 252, 79, 252, 234, 255, 179, 1, 207, 255, 66, 255, 138, 255, 139, 253, 168, 255, 216, 4, 233, 5, 132, 253, 229, 251, 5, 252, 221, 254, 189, 0, 3, 1, 255, 254, 42, 254, 139, 253, 145, 0, 177, 3, 126, 3, 186, 254, 148, 254, 186, 251, 31, 2, 4, 1, 118, 2, 54, 255, 189, 0, 47, 255, 101, 1, 99, 5, 43, 8, 199, 253, 205, 251, 87, 250, 54, 253, 17, 255, 151, 3, 92, 254, 63, 253, 172, 255, 147, 255, 142, 255, 103, 9, 99, 254, 239, 253, 103, 251, 226, 1, 112, 1, 131, 0, 70, 255, 184, 255, 125, 255, 93, 3, 231, 4, 196, 4, 157, 253, 110, 253, 195, 250, 227, 0, 135, 255, 119, 2, 80, 255, 23, 254, 38, 255, 233, 2, 151, 4, 189, 3, 191, 254, 108, 255, 88, 252, 159, 2, 198, 3, 216, 0, 84, 1, 253, 255, 113, 255, 213, 1, 56, 7, 133, 9, 39, 253, 63, 252, 109, 249, 43, 255, 2, 255, 65, 1, 1, 254, 74, 254, 247, 253, 130, 255, 213, 2, 135, 3, 172, 254, 83, 253, 248, 251, 60, 1, 224, 1, 20, 0, 23, 0, 167, 255, 217, 253, 97, 1, 27, 4, 253, 6, 224, 253, 11, 253, 172, 250, 42, 1, 231, 255, 180, 1, 156, 255, 120, 254, 249, 253, 211, 1, 242, 2, 54, 4, 46, 255, 114, 254, 202, 251, 108, 2, 146, 2, 118, 2], "i8", Z2, y1.GLOBAL_BASE + 10240), s2([33, 0, 147, 0, 78, 255, 153, 3, 151, 6, 129, 7, 187, 254, 240, 253, 70, 248, 2, 0, 227, 254, 142, 3, 141, 254, 22, 254, 26, 255, 0, 0, 85, 2, 218, 7, 16, 254, 117, 254, 190, 252, 37, 0, 177, 3, 245, 0, 181, 0, 96, 255, 112, 255, 201, 5, 93, 5, 77, 5, 157, 254, 167, 253, 10, 251, 42, 1, 66, 1, 160, 2, 63, 255, 176, 254, 77, 0, 65, 4, 253, 5, 154, 3, 177, 0, 217, 255, 155, 251, 228, 3, 13, 3, 24, 2, 200, 1, 110, 1, 80, 254, 135, 5, 136, 9, 231, 8, 46, 254, 10, 253, 235, 246, 209, 254, 3, 254, 131, 1, 41, 253, 211, 253, 66, 0, 111, 255, 131, 2, 224, 4, 224, 253, 92, 253, 108, 252, 31, 255, 94, 3, 76, 2, 104, 255, 40, 0, 235, 253, 167, 1, 143, 5, 22, 6, 196, 253, 181, 252, 135, 251, 128, 255, 85, 0, 205, 1, 18, 255, 255, 254, 184, 253, 93, 2, 236, 2, 93, 3, 24, 0, 54, 255, 127, 250, 29, 3, 231, 1, 47, 1, 75, 255, 108, 1, 74, 255, 104, 2, 98, 5, 126, 11, 18, 254, 172, 252, 95, 250, 220, 254, 61, 0, 44, 3, 172, 255, 45, 253, 74, 255, 43, 2, 20, 2, 226, 5, 147, 254, 19, 254, 223, 251, 54, 3, 76, 2, 11, 0, 242, 255, 238, 255, 26, 255, 233, 3, 121, 5, 171, 5, 38, 254, 199, 253, 244, 250, 46, 1, 62, 0, 38, 4, 186, 255, 136, 254, 34, 255, 214, 3, 206, 3, 125, 4, 60, 255, 22, 255, 229, 252, 223, 1, 74, 4, 243, 1, 106, 1, 58, 0, 70, 0, 123, 4, 21, 8, 41, 11, 25, 254, 146, 252, 224, 248, 73, 0, 224, 254, 92, 1, 154, 254, 12, 254, 4, 254, 199, 0, 209, 2, 218, 4, 178, 255, 71, 253, 229, 252, 105, 1, 24, 2, 196, 0, 118, 1, 110, 0, 33, 253, 79, 3, 27, 4, 104, 7, 146, 254, 55, 253, 98, 251, 59, 1, 64, 1, 173, 1, 72, 0, 41, 255, 62, 254, 247, 2, 118, 3, 83, 5, 226, 255, 84, 254, 190, 252, 93, 3, 115, 2, 28, 3, 118, 0, 212, 1, 233, 254, 75, 5, 91, 7, 101, 7, 68, 255, 126, 253, 180, 249, 63, 0, 81, 255, 174, 4, 94, 254, 45, 255, 51, 0, 158, 1, 75, 2, 41, 10, 22, 255, 211, 253, 166, 252, 168, 1, 121, 3, 222, 0, 136, 0, 155, 255, 83, 0, 133, 5, 230, 8, 103, 5, 172, 255, 67, 254, 147, 250, 158, 1, 57, 1, 21, 4, 29, 0, 169, 254, 65, 0, 16, 6, 111, 6, 212, 3, 183, 0, 165, 255, 195, 252, 249, 4, 133, 5, 104, 1, 41, 2, 16, 1, 149, 255, 51, 6, 77, 12, 43, 10, 104, 5, 29, 8, 92, 13, 244, 19, 86, 26, 186, 31, 135, 38, 84, 43, 170, 49, 133, 53, 61, 254, 215, 251, 239, 253, 231, 250, 62, 254, 12, 253, 15, 254, 161, 252, 128, 254, 149, 253, 99, 254, 99, 253, 195, 254, 230, 253, 181, 254, 212, 253, 98, 254, 4, 254, 88, 254, 134, 254, 238, 254, 188, 254, 78, 254, 154, 253, 30, 255, 12, 254, 24, 255, 254, 253, 249, 254, 135, 254, 214, 254, 102, 254, 105, 255, 58, 253, 82, 255, 206, 252, 107, 255, 100, 254, 100, 255, 83, 254, 224, 254, 50, 254, 70, 255, 53, 255, 86, 255, 210, 254, 65, 255, 191, 254, 125, 255, 109, 255, 215, 254, 117, 254, 28, 255, 42, 255, 11, 255, 64, 255, 189, 255, 196, 254, 185, 255, 185, 254, 152, 255, 51, 255, 162, 255, 73, 255, 113, 255, 218, 255, 63, 255, 161, 255, 16, 0, 180, 255, 132, 255, 8, 255, 23, 0, 19, 255, 24, 0, 12, 255, 18, 0, 120, 255, 44, 0, 145, 255, 223, 255, 232, 255, 231, 255, 0, 0, 149, 0, 19, 0, 23, 0, 113, 255, 158, 0, 87, 255, 174, 0, 75, 255, 133, 0, 201, 255, 165, 0, 230, 255, 111, 0, 84, 0, 98, 0, 75, 0, 87, 0, 183, 0, 141, 255, 245, 255, 248, 255, 130, 0, 11, 0, 170, 0, 254, 0, 77, 0, 205, 0, 17, 0, 183, 0, 112, 0, 6, 1, 194, 0, 202, 0, 31, 1, 95, 0, 189, 0, 214, 255, 151, 255, 234, 0, 179, 0, 39, 0, 186, 0, 163, 0, 89, 1, 76, 1, 199, 0, 43, 1, 161, 0, 202, 255, 29, 1, 178, 255, 25, 1, 123, 255, 141, 0, 74, 255, 111, 0, 249, 0, 85, 1, 15, 1, 108, 1, 93, 0, 147, 1, 75, 0, 135, 1, 92, 0, 254, 1, 118, 255, 220, 0, 71, 255, 227, 255, 222, 255, 105, 1, 141, 255, 64, 1, 3, 0, 42, 2, 99, 0, 30, 1, 218, 0, 79, 2, 11, 255, 150, 1, 244, 254, 197, 1, 0, 0, 68, 2, 25, 0, 94, 2, 19, 1, 20, 2, 148, 0, 194, 1, 183, 255, 227, 2, 227, 254, 6, 2, 224, 254, 94, 0, 53, 255, 162, 2, 116, 255, 182, 255, 205, 0, 202, 2, 142, 255, 43, 1, 176, 0, 155, 3, 182, 0, 45, 2, 240, 0, 193, 2, 240, 255, 1, 2, 229, 1, 81, 2, 37, 1, 128, 1, 195, 1, 105, 2, 218, 255, 50, 0, 51, 2, 17, 2, 47, 1, 209, 0, 203, 1, 107, 1, 177, 1, 196, 1, 194, 1, 198, 1, 111, 1, 94, 2, 221, 1, 229, 2, 176, 1, 97, 1, 112, 1, 11, 1, 105, 1, 204, 2, 17, 1, 71, 2, 197, 1, 166, 0, 254, 1, 172, 0, 201, 0, 117, 2, 18, 1, 191, 0, 56, 2, 127, 2, 46, 1, 42, 1, 122, 2, 131, 1, 131, 2, 94, 1, 75, 2, 48, 2, 100, 2, 53, 2, 88, 2, 20, 3, 231, 1, 160, 2, 0, 2, 247, 3, 65, 1, 77, 1, 101, 1, 86, 3, 131, 255, 157, 1, 218, 1, 200, 2, 17, 0, 105, 255, 52, 2, 29, 1, 14, 1, 15, 255, 203, 3, 121, 3, 233, 1, 220, 0, 254, 1, 128, 3, 37, 2, 156, 3, 71, 1, 57, 3, 34, 1, 143, 3, 28, 2, 84, 4, 158, 0, 37, 3, 199, 0, 189, 3, 255, 1, 218, 2, 100, 0, 106, 3, 13, 0, 23, 3, 179, 1, 120, 2, 164, 2, 204, 3, 249, 0, 132, 3, 211, 1, 194, 4, 13, 3, 50, 4, 73, 2, 17, 3, 233, 255, 157, 2, 11, 1, 19, 4, 107, 2, 60, 4, 103, 2, 121, 4, 110, 2, 137, 3, 148, 3, 25, 4, 80, 0, 75, 1, 72, 2, 51, 4, 89, 0, 127, 2, 220, 3, 193, 3, 2, 3, 208, 2, 30, 3, 187, 2, 236, 1, 191, 1, 131, 3, 115, 2, 15, 1, 164, 4, 213, 2, 53, 5, 87, 0, 91, 2, 64, 3, 67, 6, 104, 2, 103, 4, 122, 3, 225, 5, 232, 3, 132, 4, 98, 3, 241, 3, 227, 3, 59, 3, 125, 4, 90, 3, 49, 3, 170, 5, 5, 3, 40, 5, 244, 1, 109, 5, 56, 1, 129, 4, 236, 255, 60, 4, 64, 0, 3, 5, 2, 0, 148, 4, 143, 1, 77, 7, 2, 2, 170, 6, 246, 1, 100, 6, 118, 3, 242, 5, 160, 1, 88, 2, 107, 4, 70, 5, 251, 4, 110, 5, 121, 3, 3, 7, 146, 3, 230, 6, 227, 0, 159, 4, 226, 4, 34, 7, 249, 1, 62, 7, 151, 3, 49, 9, 57, 255, 175, 1, 152, 0, 199, 6, 43, 255, 228, 255, 136, 1, 54, 5, 103, 255, 204, 255, 210, 3, 127, 4, 189, 254, 112, 254, 45, 3, 167, 6, 120, 255, 84, 0, 169, 5, 223, 7, 181, 254, 113, 255, 119, 255, 168, 4, 0, 255, 22, 2, 99, 255, 7, 4, 205, 254, 73, 254, 30, 2, 219, 2, 183, 254, 92, 254, 159, 255, 104, 2, 150, 254, 88, 255, 190, 254, 110, 1, 9, 255, 146, 255, 45, 255, 89, 0, 60, 255, 203, 254, 20, 0, 59, 0, 148, 254, 49, 254, 226, 254, 89, 0, 176, 254, 175, 0, 80, 254, 141, 0, 133, 254, 66, 255, 78, 254, 60, 255, 177, 255, 150, 0, 234, 254, 29, 255, 232, 254, 166, 0, 213, 253, 90, 254, 101, 255, 29, 2, 146, 254, 54, 0, 227, 255, 173, 255, 211, 254, 250, 252, 186, 0, 116, 2, 115, 254, 248, 254, 242, 0, 37, 1, 59, 255, 183, 253, 124, 0, 154, 1, 53, 0, 123, 255, 10, 0, 84, 1, 198, 253, 215, 251, 65, 0, 66, 254, 68, 0, 19, 254, 127, 1, 169, 3, 155, 254, 57, 253, 153, 254, 6, 255, 91, 253, 212, 251, 36, 1, 230, 255, 107, 1, 6, 0, 95, 2, 33, 5, 129, 255, 246, 255, 233, 5, 94, 7, 201, 2, 204, 3, 189, 5, 133, 8, 163, 5, 224, 7, 161, 249, 192, 249, 252, 248, 14, 247, 253, 251, 22, 249, 180, 251, 23, 248, 3, 251, 148, 250, 169, 250, 2, 250, 77, 252, 75, 250, 52, 252, 12, 250, 25, 252, 58, 251, 4, 252, 108, 251, 209, 252, 37, 252, 32, 252, 165, 250, 64, 251, 18, 252, 247, 250, 186, 251, 24, 253, 12, 251, 13, 253, 243, 250, 162, 252, 101, 252, 119, 252, 40, 252, 90, 253, 229, 251, 83, 253, 230, 251, 193, 251, 39, 252, 218, 251, 89, 253, 35, 252, 127, 253, 153, 251, 48, 252, 6, 253, 114, 253, 134, 252, 218, 252, 191, 252, 189, 251, 62, 253, 139, 253, 147, 253, 218, 252, 128, 253, 212, 252, 249, 252, 134, 253, 245, 252, 225, 253, 28, 252, 203, 253, 205, 251, 188, 253, 222, 253, 157, 253, 196, 253, 149, 253, 8, 253, 222, 254, 145, 252, 242, 253, 201, 252, 50, 254, 229, 252, 3, 255, 215, 253, 97, 254, 179, 253, 73, 254, 235, 253, 172, 254, 76, 253, 89, 252, 7, 254, 252, 252, 66, 253, 149, 251, 249, 254, 206, 254, 53, 252, 29, 254, 67, 254, 182, 255, 213, 253, 220, 253, 154, 253, 127, 255, 75, 253, 22, 255, 116, 254, 10, 255, 37, 254, 6, 255, 247, 254, 108, 254, 136, 254, 254, 253, 95, 254, 2, 254, 212, 254, 199, 254, 178, 254, 104, 253, 49, 254, 210, 252, 126, 254, 64, 253, 175, 254, 153, 253, 22, 255, 55, 255, 23, 255, 17, 255, 89, 255, 201, 253, 53, 255, 149, 253, 109, 255, 97, 254, 141, 255, 160, 254, 90, 255, 18, 253, 85, 255, 7, 253, 242, 254, 145, 252, 248, 254, 121, 252, 145, 254, 24, 253, 43, 0, 37, 254, 14, 0, 115, 253, 43, 0, 98, 253, 11, 0, 64, 254, 197, 255, 247, 253, 130, 255, 137, 255, 101, 255, 155, 253, 214, 255, 161, 252, 229, 255, 93, 252, 136, 0, 29, 254, 183, 0, 44, 254, 55, 0, 214, 254, 55, 0, 208, 254, 57, 1, 159, 253, 57, 1, 48, 253, 66, 1, 89, 255, 100, 0, 227, 253, 253, 255, 137, 255, 145, 255, 69, 255, 233, 0, 20, 255, 4, 1, 22, 255, 26, 0, 91, 255, 134, 0, 211, 255, 216, 255, 219, 253, 104, 1, 53, 255, 122, 1, 124, 254, 194, 1, 129, 254, 19, 1, 20, 0, 182, 0, 153, 255, 246, 0, 145, 255, 175, 1, 37, 0, 206, 1, 110, 255, 231, 1, 99, 255, 228, 254, 197, 255, 247, 1, 72, 255, 24, 0, 53, 0, 253, 255, 54, 0, 122, 0, 3, 1, 77, 1, 66, 0, 228, 1, 104, 0, 180, 1, 68, 0, 195, 0, 116, 0, 190, 0, 206, 0, 13, 1, 247, 255, 226, 1, 96, 1, 126, 1, 29, 1, 143, 1, 21, 1, 196, 1, 0, 1, 69, 0, 186, 0, 13, 0, 41, 1, 243, 255, 3, 1, 161, 255, 30, 0, 56, 0, 138, 1, 196, 0, 169, 1, 205, 0, 200, 1, 25, 1, 65, 2, 15, 0, 191, 0, 119, 1, 34, 1, 151, 1, 64, 2, 200, 255, 227, 0, 32, 2, 149, 1, 0, 0, 37, 2, 164, 255, 16, 2, 27, 255, 95, 1, 11, 255, 82, 1, 150, 254, 179, 1, 167, 0, 15, 2, 181, 255, 46, 1, 91, 0, 56, 3, 129, 0, 87, 2, 240, 1, 167, 2, 186, 0, 237, 2, 153, 0, 225, 2, 231, 254, 88, 2, 164, 254, 103, 2, 20, 255, 1, 3, 41, 0, 113, 3, 38, 0, 122, 3, 36, 255, 73, 3, 155, 254, 115, 3, 119, 254, 135, 3, 134, 253, 218, 1, 68, 254, 82, 3, 81, 255, 166, 2, 19, 254, 242, 0, 249, 253, 17, 3, 54, 253, 70, 2, 227, 253, 110, 1, 225, 253, 178, 1, 171, 253, 244, 1, 3, 253, 222, 0, 66, 253, 149, 3, 25, 253, 194, 3, 155, 252, 245, 1, 125, 252, 36, 2, 133, 254, 200, 0, 77, 254, 157, 0, 205, 252, 214, 0, 163, 252, 157, 0, 154, 253, 40, 0, 136, 253, 94, 0, 141, 252, 202, 255, 27, 253, 4, 2, 11, 254, 42, 1, 154, 253, 85, 255, 154, 252, 95, 255, 159, 252, 233, 255, 206, 252, 93, 0, 9, 252, 245, 254, 106, 253, 153, 254, 219, 253, 2, 0, 70, 254, 135, 255, 135, 254, 0, 0, 29, 255, 33, 0, 98, 254, 130, 255, 127, 255, 212, 0, 90, 252, 34, 0, 198, 251, 230, 254, 161, 251, 244, 254, 58, 253, 199, 252, 92, 254, 65, 255, 204, 251, 96, 252, 107, 252, 163, 255, 140, 253, 154, 254, 97, 0, 7, 0, 50, 255, 119, 254, 155, 255, 24, 0, 53, 255, 38, 0, 88, 255, 83, 0, 169, 253, 89, 254, 233, 254, 170, 1, 68, 253, 118, 0, 181, 255, 206, 0, 43, 252, 95, 253, 88, 253, 161, 1, 145, 254, 37, 0, 233, 254, 218, 1, 127, 255, 194, 254, 63, 1, 40, 1, 142, 253, 217, 255, 87, 1, 90, 2, 72, 253, 217, 255, 209, 254, 172, 3, 104, 0, 233, 0, 132, 254, 137, 0, 220, 255, 13, 1, 181, 255, 42, 255, 120, 0, 43, 0, 239, 253, 35, 254, 203, 1, 164, 0, 54, 255, 27, 255, 207, 255, 89, 255, 97, 2, 24, 3, 98, 0, 36, 255, 147, 3, 148, 0, 37, 1, 27, 1, 101, 3, 91, 0, 63, 2, 138, 1, 70, 1, 178, 255, 205, 2, 67, 0, 109, 1, 189, 254, 104, 2, 220, 255, 219, 2, 27, 0, 107, 2, 238, 0, 120, 2, 17, 1, 192, 1, 99, 0, 33, 3, 220, 1, 101, 3, 17, 1, 173, 2, 64, 0, 21, 3, 72, 0, 253, 3, 217, 0, 25, 3, 203, 1, 222, 2, 104, 1, 134, 2, 224, 1, 104, 1, 66, 1, 173, 1, 208, 1, 126, 2, 174, 1, 244, 2, 107, 1, 232, 3, 148, 1, 171, 2, 16, 2, 90, 2, 103, 2, 143, 2, 157, 1, 178, 3, 175, 2, 169, 3, 90, 2, 136, 3, 92, 2, 43, 2, 225, 2, 18, 3, 150, 2, 211, 1, 142, 2, 106, 1, 77, 2, 161, 3, 198, 2, 242, 1, 222, 1, 159, 1, 164, 1, 181, 2, 115, 3, 45, 3, 171, 2, 13, 3, 157, 3, 145, 3, 171, 3, 214, 2, 220, 2, 235, 1, 85, 3, 19, 2, 180, 3, 222, 2, 195, 3, 59, 1, 40, 3, 249, 2, 243, 2, 120, 4, 248, 2, 143, 2, 52, 4, 58, 3, 33, 4, 67, 4, 70, 3, 235, 3, 40, 3, 23, 4, 109, 4, 147, 2, 77, 4, 224, 3, 26, 4, 50, 4, 51, 4, 203, 3, 182, 2, 202, 4, 30, 4, 59, 2, 73, 3, 116, 3, 124, 5, 99, 5, 72, 4, 56, 4, 93, 3, 207, 4, 223, 2, 4, 5, 248, 2, 248, 4, 223, 3, 87, 5, 29, 4, 233, 4, 188, 2, 26, 4, 22, 2, 220, 3, 197, 1, 240, 4, 87, 2, 116, 4, 167, 2, 85, 6, 47, 3, 104, 5, 9, 2, 37, 5, 137, 1, 28, 6, 37, 3, 168, 5, 174, 2, 44, 4, 136, 2, 107, 3, 51, 1, 59, 4, 105, 1, 23, 4, 61, 1, 137, 5, 196, 3, 163, 2, 59, 2, 128, 4, 79, 0, 90, 4, 209, 255, 250, 5, 55, 1, 185, 6, 58, 1, 142, 4, 177, 2, 2, 2, 162, 255, 93, 1, 26, 1, 132, 5, 72, 1, 1, 4, 231, 1, 191, 255, 57, 0, 37, 3, 202, 3, 36, 0, 62, 0, 1, 3, 249, 254, 23, 3, 166, 254, 125, 2, 187, 2, 119, 255, 108, 2, 22, 2, 29, 2, 33, 253, 194, 0, 199, 2, 44, 1, 244, 254, 161, 252, 158, 3, 1, 3, 60, 253, 84, 254, 250, 1, 174, 0, 132, 252, 138, 253, 179, 1, 35, 2, 101, 250, 254, 254, 109, 2, 215, 1, 6, 252, 168, 250, 119, 254, 9, 2, 104, 252, 82, 253, 231, 255, 20, 0, 42, 252, 124, 251, 84, 1, 9, 0, 234, 249, 145, 251, 160, 254, 48, 0, 213, 249, 110, 254, 137, 252, 6, 0, 124, 251, 136, 252, 220, 253, 160, 254, 149, 249, 112, 251, 97, 255, 98, 2, 24, 248, 61, 252, 31, 255, 193, 0, 136, 249, 88, 248, 11, 255, 19, 254, 60, 252, 112, 249, 88, 252, 133, 253, 237, 250, 48, 249, 148, 250, 164, 253, 252, 249, 189, 252, 139, 250, 121, 255, 204, 249, 222, 254, 122, 249, 56, 253, 37, 248, 160, 249, 129, 249, 229, 255, 46, 247, 213, 252, 123, 251, 184, 0, 15, 251, 189, 0, 169, 250, 74, 2, 37, 248, 201, 0, 234, 252, 200, 2, 70, 251, 3, 0, 247, 251, 40, 3, 29, 251, 62, 3, 145, 255, 123, 2, 156, 249, 191, 1, 49, 254, 75, 252, 67, 254, 96, 252, 8, 254, 118, 251, 11, 254, 69, 251, 144, 0, 161, 254, 140, 254, 228, 251, 229, 254, 221, 251, 233, 254, 157, 251, 193, 253, 98, 250, 181, 253, 178, 249, 89, 252, 40, 252, 229, 0, 178, 2, 103, 252, 49, 253, 109, 254, 82, 5, 83, 253, 47, 254, 106, 3, 141, 1, 3, 254, 210, 255, 61, 1, 54, 5, 27, 254, 200, 1, 45, 3, 183, 1, 101, 254, 83, 1, 130, 3, 43, 4, 87, 254, 46, 0, 161, 5, 241, 1, 115, 252, 224, 252, 185, 5, 22, 4, 2, 255, 191, 254, 150, 5, 141, 4, 68, 0, 94, 1, 10, 4, 154, 2, 114, 1, 11, 0, 31, 5, 22, 3, 143, 0, 232, 0, 17, 4, 26, 6, 142, 255, 151, 2, 80, 6, 54, 4, 198, 1, 67, 2, 251, 4, 16, 4, 180, 255, 141, 3, 240, 2, 43, 4, 153, 0, 0, 2, 92, 1, 190, 4, 102, 2, 129, 1, 51, 7, 40, 3, 13, 1, 10, 4, 203, 0, 62, 4, 140, 2, 249, 3, 247, 6, 106, 4, 173, 1, 47, 5, 131, 1, 104, 5, 207, 255, 159, 4, 184, 255, 191, 4, 96, 254, 233, 3, 32, 2, 213, 6, 160, 254, 199, 4, 10, 254, 175, 4, 179, 253, 57, 2, 29, 255, 94, 6, 114, 255, 42, 6, 26, 255, 179, 6, 54, 253, 8, 5, 186, 252, 118, 5, 107, 4, 77, 5, 48, 255, 208, 4, 181, 1, 197, 3, 95, 252, 50, 3, 43, 3, 130, 5, 91, 3, 227, 5, 164, 0, 188, 4, 107, 5, 1, 7, 228, 1, 82, 7, 200, 1, 15, 8, 228, 3, 146, 4, 46, 5, 122, 5, 36, 5, 80, 5, 111, 4, 238, 4, 210, 4, 82, 6, 81, 5, 232, 6, 141, 5, 203, 4, 48, 6, 67, 5, 86, 3, 160, 2, 149, 6, 30, 6, 115, 4, 246, 4, 224, 7, 33, 7, 237, 6, 45, 6, 252, 5, 180, 5, 207, 5, 178, 3, 123, 6, 253, 3, 208, 6, 188, 4, 112, 5, 209, 3, 236, 6, 137, 4, 34, 7, 140, 4, 182, 6, 149, 5, 181, 7, 55, 6, 161, 4, 96, 3, 84, 8, 37, 4, 7, 7, 46, 3, 46, 7, 245, 2, 56, 8, 35, 5, 6, 8, 234, 4, 65, 8, 147, 3, 27, 9, 162, 3, 187, 5, 123, 4, 30, 10, 159, 5, 197, 8, 208, 6, 42, 8, 84, 6, 54, 9, 174, 5, 106, 10, 226, 5, 84, 7, 45, 7, 22, 8, 183, 7, 203, 6, 41, 6, 170, 2, 9, 5, 48, 6, 253, 7, 174, 5, 50, 8, 194, 9, 212, 7, 151, 10, 18, 8, 214, 2, 52, 6, 196, 10, 32, 9, 228, 0, 79, 3, 152, 9, 123, 6, 36, 0, 45, 1, 150, 7, 165, 7, 66, 254, 160, 255, 106, 8, 116, 5, 253, 5, 77, 4, 14, 0, 96, 2, 101, 252, 36, 253, 103, 5, 190, 7, 65, 5, 184, 3, 88, 253, 65, 1, 1, 5, 244, 4, 198, 249, 109, 1, 173, 3, 178, 3, 55, 249, 202, 252, 70, 9, 227, 10, 29, 7, 228, 10, 236, 248, 29, 247, 169, 248, 23, 246, 152, 249, 200, 248, 97, 249, 44, 248, 60, 251, 136, 248, 59, 251, 198, 247, 233, 249, 204, 249, 219, 249, 236, 249, 85, 251, 177, 249, 56, 251, 65, 249, 177, 250, 129, 251, 176, 249, 100, 248, 6, 251, 145, 250, 231, 250, 133, 250, 185, 249, 101, 251, 116, 249, 225, 250, 93, 250, 58, 250, 169, 250, 126, 252, 24, 251, 221, 251, 205, 250, 146, 251, 42, 252, 147, 251, 131, 251, 32, 250, 200, 251, 228, 250, 4, 252, 97, 251, 44, 252, 50, 250, 57, 252, 41, 250, 36, 252, 102, 252, 233, 251, 203, 251, 186, 252, 101, 251, 166, 252, 58, 251, 149, 251, 239, 251, 216, 251, 1, 253, 152, 252, 123, 251, 67, 253, 144, 252, 62, 253, 118, 252, 250, 252, 8, 252, 190, 253, 200, 251, 223, 252, 58, 250, 177, 253, 169, 251, 176, 253, 134, 251, 55, 253, 148, 250, 128, 253, 160, 250, 171, 253, 221, 251, 96, 254, 121, 252, 82, 253, 192, 252, 107, 253, 60, 253, 68, 254, 156, 252, 22, 254, 103, 252, 138, 254, 248, 252, 149, 253, 110, 251, 183, 253, 219, 253, 255, 252, 229, 252, 77, 254, 109, 253, 238, 253, 27, 253, 14, 254, 187, 252, 155, 254, 171, 253, 233, 254, 153, 252, 13, 255, 137, 252, 230, 254, 103, 253, 232, 254, 101, 253, 91, 255, 208, 253, 118, 254, 121, 252, 150, 254, 102, 254, 64, 254, 185, 253, 103, 254, 194, 253, 199, 254, 155, 254, 131, 253, 220, 253, 198, 253, 76, 254, 128, 252, 8, 254, 130, 254, 11, 253, 198, 255, 31, 254, 91, 255, 150, 253, 65, 255, 138, 254, 22, 255, 130, 254, 34, 255, 85, 253, 231, 255, 32, 254, 94, 254, 153, 254, 38, 253, 159, 254, 188, 254, 99, 255, 80, 254, 190, 254, 118, 254, 209, 254, 228, 254, 152, 255, 167, 253, 223, 254, 212, 253, 60, 255, 180, 253, 106, 255, 109, 253, 160, 253, 39, 254, 232, 255, 188, 255, 64, 254, 38, 254, 248, 255, 6, 254, 211, 255, 20, 253, 72, 255, 180, 252, 4, 255, 123, 252, 165, 255, 184, 253, 159, 255, 116, 253, 138, 0, 4, 253, 125, 255, 90, 253, 244, 255, 98, 253, 165, 0, 253, 254, 253, 255, 184, 252, 149, 255, 115, 252, 37, 0, 32, 252, 44, 0, 170, 252, 97, 254, 185, 252, 13, 0, 23, 252, 241, 254, 254, 251, 203, 254, 226, 252, 34, 254, 192, 252, 24, 254, 81, 252, 168, 0, 168, 251, 125, 254, 95, 251, 155, 255, 97, 251, 216, 255, 83, 252, 196, 254, 250, 251, 254, 252, 236, 251, 143, 253, 199, 251, 230, 253, 56, 251, 213, 254, 224, 250, 76, 254, 83, 251, 105, 253, 113, 251, 95, 255, 64, 251, 78, 253, 43, 251, 193, 252, 104, 250, 48, 253, 133, 250, 19, 254, 126, 252, 28, 253, 102, 252, 223, 252, 178, 251, 110, 254, 213, 249, 60, 252, 219, 251, 130, 253, 11, 251, 98, 250, 37, 250, 90, 252, 34, 250, 129, 252, 194, 249, 204, 253, 69, 249, 51, 253, 162, 253, 171, 253, 114, 251, 195, 251, 167, 250, 44, 254, 102, 248, 43, 250, 210, 248, 71, 252, 116, 248, 93, 252, 37, 250, 68, 255, 157, 249, 91, 254, 79, 250, 174, 254, 88, 250, 234, 255, 106, 248, 90, 254, 42, 248, 7, 255, 16, 254, 142, 255, 138, 248, 13, 253, 247, 250, 174, 0, 85, 250, 147, 255, 30, 254, 255, 254, 59, 251, 4, 254, 175, 249, 151, 0, 98, 249, 208, 0, 114, 253, 107, 0, 141, 249, 29, 0, 139, 251, 23, 1, 65, 251, 50, 1, 52, 251, 6, 254, 38, 253, 81, 255, 44, 251, 155, 255, 55, 252, 39, 2, 154, 252, 22, 1, 201, 252, 59, 1, 205, 253, 120, 1, 229, 251, 228, 0, 5, 254, 24, 1, 169, 253, 25, 1, 10, 253, 253, 0, 207, 254, 123, 1, 13, 253, 122, 255, 157, 253, 148, 2, 200, 252, 24, 2, 207, 252, 134, 2, 99, 254, 49, 0, 171, 254, 177, 0, 59, 254, 14, 2, 30, 254, 77, 2, 185, 255, 83, 1, 111, 253, 8, 1, 12, 255, 39, 1, 19, 255, 59, 1, 125, 254, 57, 2, 6, 254, 247, 255, 135, 254, 14, 0, 96, 255, 149, 2, 40, 255, 40, 0, 204, 254, 210, 255, 95, 0, 214, 0, 14, 255, 167, 0, 170, 255, 192, 0, 200, 255, 27, 0, 180, 255, 31, 0, 36, 0, 53, 1, 150, 255, 74, 255, 143, 255, 74, 0, 71, 254, 234, 255, 23, 0, 139, 0, 81, 0, 245, 255, 44, 0, 15, 0, 169, 255, 119, 255, 138, 255, 49, 255, 98, 255, 198, 255, 16, 1, 164, 255, 100, 255, 71, 254, 8, 0, 120, 255, 128, 0, 35, 255, 101, 0, 38, 255, 40, 0, 59, 255, 180, 255, 56, 254, 9, 0, 67, 254, 33, 0, 89, 254, 226, 0, 60, 0, 73, 0, 34, 255, 156, 0, 113, 254, 24, 1, 194, 254, 245, 0, 171, 254, 166, 0, 13, 254, 83, 1, 66, 255, 71, 1, 37, 255, 69, 1, 119, 255, 167, 255, 172, 253, 100, 0, 141, 253, 144, 0, 91, 253, 231, 1, 28, 0, 252, 0, 121, 254, 214, 0, 215, 255, 26, 1, 228, 255, 99, 0, 226, 254, 75, 1, 49, 0, 203, 1, 124, 254, 53, 2, 143, 254, 180, 1, 28, 0, 80, 1, 247, 255, 141, 1, 89, 255, 106, 2, 34, 0, 84, 2, 239, 255, 49, 2, 116, 255, 43, 1, 79, 0, 10, 2, 125, 0, 203, 0, 2, 0, 244, 0, 32, 1, 255, 0, 211, 0, 175, 0, 82, 0, 84, 2, 187, 0, 5, 2, 108, 0, 125, 1, 255, 0, 109, 1, 41, 1, 241, 1, 96, 1, 71, 1, 174, 255, 25, 0, 210, 0, 115, 1, 245, 0, 5, 1, 3, 0, 33, 2, 193, 1, 140, 0, 38, 1, 44, 0, 39, 1, 212, 0, 91, 1, 244, 0, 238, 1, 75, 1, 16, 2, 201, 0, 51, 1, 93, 1, 155, 1, 101, 2, 28, 1, 102, 2, 157, 1, 208, 1, 66, 1, 112, 2, 141, 1, 97, 0, 200, 0, 96, 255, 128, 1, 149, 0, 106, 1, 239, 1, 13, 2, 13, 1, 73, 2, 33, 0, 235, 1, 135, 255, 177, 1, 171, 1, 99, 2, 242, 1, 4, 2, 171, 0, 187, 1, 241, 1, 154, 2, 184, 1, 19, 1, 54, 2, 63, 2, 146, 0, 127, 2, 155, 0, 158, 2, 223, 255, 173, 0, 212, 0, 184, 2, 90, 255, 89, 2, 65, 255, 183, 2, 23, 254, 247, 1, 175, 0, 230, 2, 214, 0, 220, 1, 116, 1, 59, 4, 66, 2, 18, 2, 74, 2, 9, 3, 169, 1, 106, 3, 59, 1, 73, 3, 118, 1, 80, 3, 91, 255, 53, 2, 35, 0, 223, 3, 217, 255, 38, 4, 73, 1, 200, 2, 18, 3, 72, 3, 133, 2, 27, 3, 149, 2, 164, 2, 59, 2, 150, 3, 120, 2, 55, 4, 161, 2, 49, 3, 62, 1, 132, 1, 106, 3, 244, 3, 52, 2, 80, 3, 112, 3, 108, 2, 45, 2, 223, 1, 159, 2, 197, 1, 180, 2, 212, 1, 72, 3, 130, 2, 76, 3, 133, 2, 250, 1, 172, 1, 129, 3, 55, 2, 69, 3, 131, 1, 194, 3, 243, 1, 179, 2, 49, 2, 171, 3, 158, 3, 15, 3, 40, 1, 22, 3, 12, 1, 4, 4, 18, 2, 106, 3, 73, 1, 36, 2, 143, 0, 163, 2, 35, 1, 247, 1, 66, 0, 17, 4, 103, 1, 18, 3, 97, 0, 37, 3, 33, 0, 69, 3, 214, 1, 255, 1, 49, 0, 68, 4, 71, 1, 150, 4, 67, 1, 3, 0, 242, 0, 104, 3, 218, 1, 177, 2, 173, 1, 49, 5, 166, 2, 18, 4, 108, 2, 85, 4, 152, 2, 65, 1, 193, 0, 121, 3, 182, 3, 129, 4, 106, 3, 125, 3, 123, 2, 109, 3, 94, 3, 180, 3, 145, 3, 13, 5, 153, 2, 40, 5, 127, 2, 229, 3, 25, 3, 122, 5, 6, 4, 152, 4, 244, 3, 86, 4, 191, 3, 130, 5, 157, 3, 123, 5, 147, 3, 31, 2, 94, 3, 92, 4, 198, 4, 67, 3, 166, 4, 67, 3, 166, 4, 191, 3, 124, 4, 123, 4, 96, 5, 20, 5, 169, 4, 135, 5, 207, 4, 55, 5, 61, 5, 234, 2, 68, 4, 175, 6, 3, 5, 109, 5, 49, 4, 54, 5, 30, 6, 129, 4, 195, 5, 109, 6, 113, 4, 33, 7, 196, 4, 32, 4, 102, 5, 241, 5, 194, 6, 96, 6, 9, 6, 84, 6, 6, 6, 87, 3, 60, 6, 97, 3, 131, 6, 181, 2, 117, 3, 180, 6, 239, 5, 143, 4, 16, 5, 161, 8, 224, 6, 160, 7, 213, 5, 228, 7, 202, 5, 254, 5, 74, 7, 158, 6, 216, 7, 30, 6, 236, 2, 225, 6, 57, 3, 38, 1, 112, 5, 60, 4, 10, 8, 109, 2, 35, 5, 109, 1, 7, 5, 198, 0, 4, 4, 232, 1, 128, 5, 249, 0, 147, 1, 246, 3, 25, 6, 68, 1, 107, 1, 109, 6, 20, 4, 193, 0, 111, 1, 242, 7, 67, 7, 5, 255, 67, 2, 238, 2, 226, 3, 13, 255, 30, 0, 45, 5, 111, 3, 228, 255, 87, 255, 112, 2, 149, 3, 59, 254, 159, 0, 186, 0, 90, 5, 154, 253, 6, 0, 25, 2, 136, 1, 162, 255, 221, 254, 13, 3, 229, 0, 128, 255, 214, 254, 245, 0, 235, 1, 67, 253, 120, 253, 204, 3, 21, 3, 11, 254, 128, 253, 178, 0, 255, 0, 147, 254, 122, 254, 1, 255, 61, 1, 66, 252, 218, 254, 65, 255, 228, 0, 249, 252, 65, 254, 157, 0, 19, 255, 111, 253, 48, 253, 105, 254, 92, 0, 139, 255, 157, 253, 78, 1, 26, 255, 89, 253, 196, 251, 112, 255, 195, 254, 123, 252, 163, 252, 30, 253, 152, 254, 171, 255, 41, 253, 166, 255, 237, 252, 100, 0, 234, 255, 121, 254, 249, 254, 200, 255, 183, 255, 175, 254, 14, 253, 5, 0, 67, 255, 62, 253, 144, 253, 89, 0, 168, 254, 121, 255, 167, 251, 159, 254, 19, 255, 84, 253, 145, 251, 237, 254, 178, 251, 243, 254, 77, 251, 152, 0, 145, 0, 46, 253, 48, 251, 49, 0, 80, 0, 32, 251, 248, 252, 8, 255, 135, 1, 36, 253, 221, 253, 213, 1, 218, 0, 1, 255, 160, 252, 69, 0, 110, 1, 90, 255, 27, 254, 80, 253, 191, 0, 68, 251, 84, 251, 86, 255, 87, 255, 228, 250, 161, 249, 65, 1, 214, 1, 117, 250, 37, 251, 192, 255, 16, 1, 175, 250, 8, 255, 236, 1, 53, 2, 47, 253, 159, 253, 195, 0, 229, 1, 195, 253, 123, 255, 171, 1, 202, 0, 85, 255, 138, 255, 199, 0, 63, 2, 2, 0, 225, 255, 182, 2, 243, 2, 170, 250, 217, 255, 40, 2, 45, 2, 23, 254, 15, 1, 168, 2, 25, 2, 13, 0, 59, 254, 87, 3, 186, 3, 123, 255, 204, 255, 175, 255, 226, 2, 111, 251, 125, 2, 31, 4, 35, 4, 161, 255, 164, 2, 235, 4, 57, 4, 233, 1, 49, 1, 63, 254, 186, 3, 234, 253, 228, 3, 55, 252, 98, 3, 222, 251, 35, 4, 242, 250, 106, 2, 120, 250, 105, 2, 54, 254, 86, 5, 97, 255, 29, 7, 250, 252, 240, 253, 242, 255, 86, 4, 78, 251, 123, 252, 252, 252, 177, 1, 24, 251, 25, 251, 13, 252, 210, 254, 166, 253, 183, 253, 9, 253, 174, 249, 8, 253, 243, 249, 184, 252, 127, 248, 208, 252, 229, 253, 23, 249, 69, 247, 29, 255, 220, 255, 14, 248, 217, 248, 197, 247, 154, 251, 89, 246, 232, 248, 66, 250, 252, 0, 115, 245, 97, 254, 197, 253, 45, 254, 229, 5, 18, 6, 132, 8, 183, 7, 22, 9, 228, 7, 191, 248, 111, 249, 191, 248, 37, 249, 248, 247, 130, 251, 170, 247, 138, 249, 173, 249, 181, 251, 88, 249, 149, 251, 191, 250, 184, 249, 177, 250, 154, 249, 198, 250, 243, 250, 211, 250, 15, 251, 128, 249, 143, 249, 49, 250, 173, 252, 190, 250, 216, 248, 123, 250, 116, 247, 254, 250, 87, 253, 7, 249, 143, 249, 58, 252, 198, 251, 97, 251, 116, 249, 226, 251, 207, 251, 138, 251, 122, 251, 73, 251, 24, 253, 6, 251, 27, 252, 90, 252, 153, 250, 97, 252, 120, 250, 14, 252, 231, 250, 241, 252, 69, 252, 231, 251, 124, 252, 31, 252, 207, 252, 31, 253, 201, 252, 52, 252, 91, 251, 30, 253, 186, 251, 30, 253, 126, 251, 240, 252, 223, 252, 214, 252, 238, 252, 132, 252, 248, 253, 24, 252, 206, 252, 124, 253, 59, 252, 191, 253, 142, 252, 227, 253, 74, 253, 97, 253, 107, 252, 173, 253, 126, 253, 122, 253, 153, 253, 68, 252, 147, 253, 99, 252, 253, 253, 41, 253, 29, 254, 209, 252, 27, 254, 184, 252, 190, 253, 72, 254, 55, 253, 190, 253, 187, 254, 111, 253, 98, 253, 126, 254, 198, 253, 71, 254, 102, 253, 254, 253, 237, 252, 120, 254, 239, 253, 246, 253, 59, 254, 25, 254, 89, 254, 152, 253, 183, 253, 151, 253, 99, 255, 106, 253, 244, 254, 88, 253, 164, 254, 190, 254, 189, 254, 136, 253, 68, 254, 208, 254, 82, 254, 180, 254, 54, 254, 235, 254, 44, 254, 109, 253, 231, 252, 193, 254, 132, 253, 29, 255, 214, 253, 139, 254, 165, 254, 178, 254, 46, 255, 56, 254, 64, 255, 238, 253, 14, 255, 40, 255, 58, 255, 146, 254, 142, 254, 174, 254, 95, 255, 103, 254, 20, 253, 149, 255, 132, 254, 218, 254, 125, 253, 33, 255, 103, 253, 22, 255, 27, 253, 115, 255, 16, 254, 126, 255, 2, 254, 117, 255, 185, 254, 84, 255, 207, 254, 206, 254, 188, 253, 92, 255, 249, 254, 250, 254, 84, 255, 189, 255, 110, 254, 31, 0, 146, 254, 246, 255, 76, 254, 170, 255, 241, 253, 71, 0, 135, 254, 234, 255, 159, 253, 244, 255, 90, 253, 189, 255, 193, 254, 63, 0, 65, 255, 35, 0, 75, 255, 217, 255, 14, 255, 126, 0, 89, 255, 116, 255, 224, 253, 155, 0, 215, 254, 174, 0, 215, 254, 38, 0, 248, 255, 117, 0, 132, 254, 197, 0, 60, 254, 240, 0, 246, 253, 223, 0, 153, 255, 110, 0, 69, 255, 87, 0, 101, 255, 169, 0, 209, 255, 157, 0, 26, 0, 173, 255, 156, 255, 128, 0, 80, 0, 209, 0, 194, 255, 6, 0, 7, 0, 22, 0, 5, 0, 62, 1, 236, 255, 248, 0, 211, 255, 56, 255, 193, 255, 156, 0, 187, 255, 250, 0, 73, 255, 113, 1, 130, 255, 143, 255, 180, 255, 114, 255, 134, 255, 192, 255, 2, 255, 225, 255, 35, 0, 79, 255, 185, 255, 249, 255, 171, 0, 93, 0, 27, 0, 108, 0, 212, 0, 182, 254, 47, 255, 133, 255, 186, 255, 233, 254, 95, 0, 160, 255, 20, 0, 68, 255, 195, 255, 198, 254, 87, 0, 212, 254, 178, 255, 158, 254, 122, 255, 11, 0, 122, 0, 116, 255, 122, 0, 237, 254, 152, 0, 219, 254, 140, 0, 174, 255, 138, 0, 191, 254, 145, 255, 32, 254, 100, 255, 153, 254, 76, 0, 2, 255, 216, 255, 133, 253, 160, 255, 246, 253, 79, 0, 5, 254, 8, 0, 244, 254, 47, 1, 229, 253, 68, 0, 66, 254, 61, 0, 246, 253, 50, 1, 111, 0, 189, 0, 77, 254, 122, 0, 133, 254, 166, 0, 197, 253, 114, 254, 136, 253, 182, 255, 21, 253, 161, 255, 57, 254, 194, 0, 72, 252, 83, 0, 226, 252, 192, 0, 13, 253, 192, 0, 243, 252, 94, 255, 149, 253, 234, 0, 105, 253, 215, 254, 24, 254, 147, 255, 60, 252, 124, 255, 186, 252, 188, 255, 181, 252, 58, 0, 168, 251, 170, 255, 219, 252, 213, 254, 80, 252, 3, 255, 246, 252, 206, 255, 59, 252, 219, 253, 160, 254, 158, 255, 32, 252, 169, 254, 163, 251, 197, 254, 163, 251, 205, 254, 125, 251, 138, 254, 131, 253, 26, 255, 114, 251, 213, 255, 237, 250, 156, 255, 99, 252, 119, 254, 6, 251, 168, 253, 79, 253, 126, 255, 57, 250, 200, 254, 215, 250, 2, 255, 72, 250, 70, 254, 244, 250, 155, 253, 19, 251, 9, 254, 35, 250, 144, 254, 214, 250, 26, 0, 104, 250, 190, 255, 49, 249, 95, 255, 148, 249, 45, 254, 32, 249, 220, 253, 143, 250, 200, 253, 236, 249, 153, 252, 41, 250, 246, 251, 149, 250, 197, 253, 131, 248, 240, 253, 9, 249, 133, 255, 151, 248, 25, 255, 250, 247, 189, 254, 252, 247, 118, 252, 72, 248, 201, 253, 131, 248, 148, 253, 1, 248, 35, 252, 203, 251, 142, 254, 17, 248, 64, 253, 205, 246, 19, 253, 76, 245, 191, 251, 139, 248, 159, 0, 36, 248, 248, 0, 142, 253, 133, 255, 221, 246, 62, 252, 99, 253, 104, 254, 157, 250, 106, 251, 60, 254, 148, 254, 236, 251, 33, 253, 124, 255, 183, 0, 172, 249, 16, 253, 221, 253, 205, 254, 247, 252, 19, 251, 158, 255, 41, 0, 144, 252, 189, 251, 255, 254, 97, 0, 190, 249, 215, 248, 31, 0, 230, 255, 124, 253, 207, 253, 76, 255, 222, 253, 127, 254, 185, 251, 102, 254, 222, 252, 98, 254, 197, 252, 55, 254, 54, 252, 22, 254, 171, 251, 41, 255, 108, 252, 112, 255, 87, 252, 19, 254, 11, 251, 251, 253, 29, 250, 181, 0, 101, 0, 180, 254, 135, 252, 188, 252, 87, 252, 209, 253, 83, 254, 139, 253, 221, 253, 73, 255, 175, 254, 223, 253, 174, 255, 6, 255, 226, 254, 5, 0, 124, 255, 164, 254, 4, 255, 219, 254, 40, 254, 98, 255, 100, 0, 227, 255, 197, 0, 20, 255, 88, 254, 163, 252, 43, 255, 116, 255, 249, 255, 85, 254, 69, 254, 187, 0, 159, 255, 84, 253, 32, 253, 219, 254, 2, 1, 144, 254, 104, 255, 106, 255, 136, 1, 159, 253, 175, 0, 114, 255, 43, 1, 118, 255, 152, 0, 137, 255, 73, 1, 26, 254, 204, 255, 37, 1, 198, 0, 73, 255, 117, 0, 175, 0, 75, 1, 198, 255, 238, 254, 231, 0, 44, 1, 224, 254, 74, 1, 207, 254, 116, 1, 145, 255, 153, 1, 247, 255, 167, 1, 83, 0, 0, 1, 67, 0, 111, 1, 237, 255, 248, 0, 91, 0, 113, 0, 221, 255, 150, 1, 65, 255, 154, 0, 238, 0, 40, 1, 5, 0, 197, 0, 141, 0, 221, 0, 57, 1, 198, 0, 211, 0, 165, 1, 244, 0, 78, 1, 88, 0, 170, 1, 13, 255, 198, 1, 202, 0, 40, 2, 251, 255, 147, 1, 35, 1, 185, 0, 219, 0, 45, 1, 251, 0, 138, 0, 128, 0, 69, 0, 197, 0, 32, 1, 116, 255, 195, 255, 188, 0, 105, 1, 197, 0, 86, 2, 186, 1, 17, 1, 34, 1, 143, 0, 216, 1, 226, 1, 157, 0, 114, 1, 159, 1, 65, 1, 116, 1, 129, 1, 146, 1, 40, 2, 155, 0, 24, 0, 38, 2, 7, 1, 245, 255, 21, 0, 104, 1, 227, 0, 147, 0, 2, 255, 168, 1, 97, 0, 110, 1, 243, 255, 119, 1, 141, 0, 193, 1, 232, 0, 140, 1, 251, 1, 218, 1, 16, 1, 189, 2, 68, 1, 106, 1, 209, 255, 75, 2, 148, 0, 31, 2, 69, 0, 144, 1, 205, 255, 49, 2, 59, 0, 220, 0, 246, 255, 96, 1, 147, 0, 206, 0, 211, 0, 141, 2, 185, 0, 51, 2, 41, 1, 53, 2, 28, 1, 82, 2, 121, 0, 254, 2, 192, 0, 142, 1, 118, 0, 130, 2, 178, 1, 233, 0, 8, 1, 225, 1, 211, 1, 129, 0, 91, 255, 187, 2, 239, 0, 90, 0, 26, 0, 86, 1, 218, 1, 201, 255, 27, 0, 132, 1, 94, 0, 84, 255, 0, 0, 213, 2, 123, 1, 196, 255, 81, 1, 114, 1, 209, 1, 95, 0, 63, 1, 38, 3, 83, 2, 78, 0, 4, 1, 241, 1, 83, 3, 210, 0, 48, 2, 202, 1, 62, 2, 48, 254, 202, 0, 241, 1, 113, 2, 54, 255, 152, 0, 48, 0, 200, 2, 236, 255, 54, 2, 100, 0, 203, 2, 199, 1, 212, 1, 155, 1, 93, 2, 63, 1, 134, 2, 195, 0, 103, 2, 145, 1, 26, 2, 168, 2, 227, 2, 201, 0, 155, 2, 178, 1, 186, 3, 198, 1, 169, 1, 134, 2, 235, 1, 94, 2, 169, 2, 160, 1, 252, 1, 241, 1, 54, 3, 170, 1, 47, 3, 148, 2, 135, 2, 116, 2, 204, 2, 185, 2, 210, 1, 106, 2, 201, 1, 173, 2, 204, 1, 109, 1, 53, 1, 209, 2, 55, 2, 68, 3, 89, 2, 97, 2, 44, 1, 57, 3, 203, 1, 175, 3, 175, 2, 169, 2, 21, 2, 147, 3, 86, 2, 79, 2, 243, 0, 108, 3, 195, 1, 106, 3, 164, 1, 18, 3, 61, 1, 220, 2, 220, 0, 154, 3, 61, 1, 84, 4, 111, 1, 19, 2, 210, 1, 4, 4, 137, 2, 29, 4, 103, 2, 10, 4, 41, 2, 61, 3, 90, 2, 253, 3, 31, 3, 159, 3, 35, 3, 110, 3, 251, 2, 31, 3, 240, 1, 93, 5, 5, 3, 73, 2, 2, 3, 35, 3, 162, 3, 75, 4, 25, 3, 198, 4, 94, 3, 185, 4, 127, 3, 1, 4, 215, 2, 4, 3, 77, 3, 148, 4, 91, 4, 99, 3, 253, 3, 62, 3, 245, 3, 73, 3, 142, 3, 250, 1, 191, 2, 215, 4, 53, 4, 108, 2, 51, 3, 172, 4, 59, 4, 131, 4, 57, 4, 118, 4, 139, 3, 11, 6, 97, 4, 29, 5, 136, 2, 63, 5, 100, 2, 204, 5, 220, 3, 199, 5, 169, 3, 217, 3, 48, 5, 187, 3, 61, 5, 173, 1, 142, 3, 73, 3, 58, 5, 52, 2, 155, 4, 156, 1, 132, 4, 147, 5, 40, 5, 154, 5, 50, 5, 128, 2, 248, 2, 190, 6, 130, 5, 190, 0, 43, 2, 49, 4, 237, 3, 170, 1, 1, 1, 71, 3, 212, 3, 235, 0, 231, 0, 240, 5, 143, 4, 109, 0, 37, 1, 246, 3, 33, 6, 49, 1, 142, 0, 124, 4, 27, 2, 221, 254, 148, 255, 189, 4, 204, 3, 22, 0, 40, 255, 155, 2, 60, 3, 30, 254, 182, 1, 197, 1, 151, 5, 187, 253, 90, 254, 21, 3, 131, 1, 154, 254, 58, 254, 174, 0, 12, 3, 220, 255, 140, 254, 134, 1, 122, 255, 139, 253, 160, 0, 206, 254, 239, 2, 22, 251, 181, 254, 177, 0, 10, 2, 8, 255, 62, 2, 5, 255, 127, 2, 237, 253, 151, 1, 172, 253, 138, 1, 93, 254, 21, 3, 151, 253, 33, 3, 38, 252, 143, 1, 167, 252, 215, 2, 249, 255, 6, 2, 65, 253, 54, 1, 137, 251, 232, 255, 22, 252, 31, 1, 64, 252, 107, 1, 237, 250, 56, 1, 2, 250, 245, 0, 235, 249, 49, 1, 28, 0, 153, 0, 165, 252, 81, 255, 223, 255, 76, 1, 138, 250, 102, 255, 212, 0, 154, 1, 175, 253, 59, 255, 188, 251, 64, 253, 120, 252, 191, 255, 26, 1, 111, 1, 106, 252, 82, 253, 89, 1, 93, 0, 254, 254, 155, 254, 184, 2, 132, 2, 75, 253, 228, 255, 192, 1, 237, 1, 239, 254, 193, 0, 15, 2, 34, 2, 13, 255, 255, 253, 128, 1, 120, 255, 17, 1, 159, 254, 0, 2, 114, 255, 25, 2, 58, 255, 173, 3, 238, 2, 83, 0, 248, 0, 66, 2, 93, 3, 200, 255, 80, 2, 74, 3, 44, 0, 124, 3, 24, 0, 33, 0, 122, 3, 240, 255, 214, 3, 63, 3, 118, 5, 255, 5, 106, 7, 180, 6, 96, 5, 156, 7, 185, 5, 22, 252, 95, 252, 184, 251, 77, 251, 127, 253, 93, 252, 164, 253, 63, 252, 245, 252, 95, 253, 189, 252, 236, 252, 96, 254, 104, 253, 54, 254, 2, 253, 116, 253, 247, 253, 106, 253, 17, 254, 1, 252, 3, 254, 1, 252, 84, 254, 68, 254, 216, 253, 144, 254, 63, 254, 33, 254, 45, 255, 226, 251, 121, 252, 196, 254, 7, 255, 199, 253, 177, 253, 199, 253, 237, 254, 227, 253, 65, 255, 52, 253, 68, 255, 182, 252, 248, 254, 179, 254, 8, 255, 194, 254, 28, 255, 237, 254, 1, 0, 201, 253, 28, 255, 141, 255, 35, 255, 18, 255, 138, 254, 59, 255, 5, 254, 34, 255, 189, 253, 254, 254, 80, 254, 195, 255, 12, 255, 167, 254, 2, 0, 174, 254, 39, 0, 41, 255, 87, 255, 198, 255, 0, 0, 200, 255, 250, 255, 53, 255, 125, 255, 1, 0, 70, 255, 251, 255, 45, 255, 6, 0, 132, 254, 11, 0, 94, 254, 140, 255, 131, 0, 122, 255, 113, 0, 89, 0, 252, 255, 71, 0, 254, 255, 237, 255, 64, 255, 6, 1, 24, 0, 189, 0, 151, 0, 123, 255, 147, 255, 186, 0, 103, 255, 166, 0, 37, 255, 37, 0, 139, 0, 193, 0, 171, 0, 81, 1, 124, 0, 158, 0, 195, 255, 141, 0, 226, 0, 243, 255, 190, 0, 231, 0, 34, 0, 98, 1, 109, 0, 60, 1, 201, 0, 244, 0, 164, 0, 74, 1, 171, 255, 134, 1, 172, 255, 254, 0, 71, 1, 1, 1, 79, 1, 235, 1, 147, 0, 220, 1, 105, 0, 54, 0, 77, 0, 181, 1, 114, 1, 165, 1, 58, 1, 193, 1, 86, 1, 73, 1, 126, 0, 161, 2, 36, 1, 59, 2, 132, 1, 243, 0, 193, 0, 141, 2, 64, 1, 109, 2, 24, 1, 194, 0, 124, 1, 5, 2, 69, 2, 45, 0, 67, 1, 111, 0, 166, 1, 233, 1, 139, 1, 222, 2, 22, 2, 110, 2, 34, 2, 230, 1, 246, 1, 62, 1, 60, 2, 189, 0, 38, 2, 129, 1, 166, 1, 99, 255, 153, 0, 131, 255, 126, 1, 59, 255, 130, 1, 249, 254, 78, 1, 228, 0, 185, 2, 68, 255, 1, 0, 51, 0, 41, 1, 5, 254, 213, 0, 136, 254, 141, 1, 232, 255, 255, 0, 221, 253, 89, 0, 10, 254, 162, 255, 131, 1, 179, 0, 148, 253, 68, 0, 84, 253, 112, 0, 126, 253, 162, 254, 252, 254, 172, 0, 74, 254, 188, 254, 8, 1, 136, 2, 60, 252, 252, 255, 159, 251, 7, 0, 122, 255, 134, 0, 147, 251, 206, 254, 143, 0, 96, 0, 92, 254, 15, 254, 59, 251, 162, 254, 9, 250, 83, 253, 95, 255, 72, 0, 105, 3, 179, 2, 220, 2, 27, 1, 153, 3, 97, 1, 78, 1, 219, 1, 71, 4, 53, 3, 96, 3, 12, 2, 75, 3, 241, 1, 202, 2, 199, 2, 20, 3, 238, 2, 52, 4, 202, 2, 180, 4, 241, 2, 65, 2, 150, 2, 124, 245, 170, 192, 38, 3, 44, 7, 95, 251, 33, 228, 37, 12, 28, 4, 40, 248, 202, 208, 85, 16, 107, 5, 192, 249, 99, 218, 69, 9, 145, 5, 232, 249, 78, 219, 176, 12, 193, 7, 210, 251, 214, 230, 35, 7, 16, 9, 184, 252, 64, 236, 173, 3, 242, 12, 199, 254, 163, 248, 47, 9, 161, 11, 41, 254, 234, 244, 32, 14, 116, 9, 247, 252, 183, 237, 123, 13, 24, 12, 98, 254, 70, 246, 139, 11, 205, 16, 72, 0, 178, 1, 56, 7, 148, 17, 139, 0, 68, 3, 44, 15, 40, 21, 157, 1, 180, 9, 163, 4, 42, 28, 67, 3, 166, 19, 11, 12, 40, 35, 139, 4, 90, 27, 216, 28, 115, 3, 37, 247, 177, 202, 74, 23, 226, 5, 58, 250, 60, 221, 35, 20, 86, 8, 61, 252, 88, 233, 8, 31, 217, 7, 228, 251, 65, 231, 107, 25, 202, 8, 139, 252, 49, 235, 246, 29, 192, 10, 180, 253, 47, 242, 64, 23, 200, 11, 60, 254, 92, 245, 34, 19, 180, 14, 131, 255, 17, 253, 77, 27, 4, 14, 60, 255, 103, 251, 238, 31, 138, 15, 213, 255, 252, 254, 176, 23, 52, 17, 107, 0, 133, 2, 29, 30, 223, 19, 64, 1, 136, 7, 147, 21, 133, 23, 57, 2, 98, 13, 89, 30, 214, 27, 50, 3, 62, 19, 172, 23, 2, 31, 209, 3, 253, 22, 218, 21, 223, 44, 243, 5, 212, 35, 85, 41, 76, 5, 159, 249, 153, 217, 89, 35, 61, 6, 145, 250, 68, 223, 66, 38, 243, 7, 247, 251, 180, 231, 242, 34, 111, 9, 244, 252, 164, 237, 56, 40, 24, 10, 87, 253, 253, 239, 191, 36, 174, 10, 171, 253, 245, 241, 252, 33, 146, 12, 156, 254, 160, 247, 29, 38, 67, 13, 235, 254, 123, 249, 193, 39, 52, 15, 181, 255, 58, 254, 210, 35, 176, 17, 148, 0, 123, 3, 168, 39, 140, 19, 40, 1, 245, 6, 154, 35, 103, 22, 241, 1, 177, 11, 4, 41, 122, 24, 116, 2, 198, 14, 126, 39, 207, 29, 151, 3, 158, 21, 140, 34, 23, 34, 93, 4, 72, 26, 252, 34, 208, 48, 112, 6, 193, 38, 124, 50, 208, 3, 185, 247, 47, 206, 171, 44, 219, 6, 28, 251, 141, 226, 106, 47, 24, 9, 189, 252, 96, 236, 124, 44, 64, 9, 214, 252, 248, 236, 204, 41, 248, 11, 83, 254, 236, 245, 44, 48, 45, 11, 238, 253, 136, 243, 202, 45, 255, 12, 205, 254, 200, 248, 6, 44, 116, 14, 106, 255, 120, 252, 109, 42, 61, 17, 110, 0, 151, 2, 50, 47, 181, 17, 150, 0, 134, 3, 19, 44, 85, 20, 98, 1, 84, 8, 184, 46, 161, 24, 125, 2, 253, 14, 159, 43, 110, 29, 132, 3, 44, 21, 96, 47, 137, 32, 25, 4, 168, 24, 217, 42, 25, 42, 149, 5, 156, 33, 60, 40, 224, 67, 87, 8, 53, 50, 75, 54, 145, 6, 220, 250, 15, 225, 36, 49, 253, 7, 254, 251, 221, 231, 209, 51, 135, 9, 2, 253, 254, 237, 209, 54, 173, 11, 47, 254, 14, 245, 140, 52, 26, 12, 99, 254, 78, 246, 108, 48, 74, 14, 89, 255, 18, 252, 198, 52, 196, 14, 137, 255, 55, 253, 80, 50, 176, 16, 62, 0, 118, 1, 221, 52, 253, 18, 253, 0, 243, 5, 123, 49, 81, 21, 168, 1, 248, 9, 30, 54, 218, 23, 78, 2, 223, 13, 231, 50, 83, 25, 166, 2, 244, 15, 245, 52, 41, 30, 169, 3, 7, 22, 157, 50, 95, 36, 189, 4, 136, 28, 146, 53, 31, 45, 252, 5, 5, 36, 47, 49, 102, 59, 146, 7, 147, 45, 9, 59, 4, 6, 91, 250, 4, 222, 224, 58, 29, 9, 192, 252, 113, 236, 191, 56, 207, 9, 45, 253, 0, 239, 100, 57, 127, 12, 147, 254, 107, 247, 22, 60, 232, 13, 49, 255, 33, 251, 53, 55, 120, 15, 206, 255, 212, 254, 254, 58, 140, 16, 50, 0, 42, 1, 252, 55, 216, 18, 242, 0, 174, 5, 254, 57, 75, 21, 166, 1, 238, 9, 202, 59, 195, 23, 72, 2, 190, 13, 249, 55, 232, 26, 0, 3, 15, 18, 212, 58, 9, 30, 162, 3, 226, 21, 70, 56, 210, 36, 207, 4, 245, 28, 27, 60, 13, 38, 0, 5, 26, 30, 232, 57, 191, 55, 52, 7, 94, 43, 32, 53, 107, 97, 109, 10, 195, 62, 12, 64, 177, 7, 198, 251, 139, 230, 177, 65, 16, 11, 223, 253, 45, 243, 97, 61, 27, 11, 229, 253, 80, 243, 232, 62, 8, 13, 209, 254, 223, 248, 0, 64, 123, 15, 207, 255, 218, 254, 44, 66, 227, 17, 165, 0, 224, 3, 95, 61, 247, 17, 171, 0, 6, 4, 94, 63, 72, 21, 165, 1, 233, 9, 192, 65, 238, 24, 143, 2, 105, 15, 129, 61, 229, 27, 53, 3, 80, 19, 198, 63, 45, 29, 120, 3, 223, 20, 227, 64, 176, 33, 76, 4, 222, 25, 132, 66, 178, 40, 99, 5, 111, 32, 33, 62, 41, 46, 29, 6, 207, 36, 238, 65, 98, 57, 95, 7, 96, 44, 131, 64, 134, 81, 102, 9, 147, 56, 222, 70, 35, 8, 25, 252, 131, 232, 201, 75, 106, 12, 137, 254, 47, 247, 100, 68, 98, 13, 248, 254, 203, 249, 86, 78, 187, 15, 231, 255, 105, 255, 149, 70, 153, 16, 54, 0, 70, 1, 8, 74, 202, 19, 58, 1, 98, 7, 47, 69, 26, 21, 153, 1, 157, 9, 123, 77, 48, 24, 98, 2, 92, 14, 30, 70, 102, 27, 27, 3, 176, 18, 70, 83, 197, 30, 198, 3, 184, 22, 246, 69, 73, 36, 186, 4, 115, 28, 200, 74, 74, 36, 186, 4, 116, 28, 37, 80, 117, 44, 230, 5, 129, 35, 155, 70, 149, 56, 74, 7, 226, 43, 31, 78, 218, 69, 129, 8, 52, 51, 154, 73, 252, 127, 0, 12, 62, 72, 61, 42, 81, 112, 63, 11, 181, 67, 0, 80, 225, 10, 198, 253, 153, 242, 153, 73, 194, 25, 191, 2, 139, 16, 81, 24, 245, 28, 108, 3, 156, 20, 51, 67, 204, 40, 103, 5, 133, 32, 122, 84, 245, 4, 61, 249, 74, 215, 143, 82, 71, 17, 113, 0, 171, 2, 40, 44, 20, 6, 106, 250, 95, 222, 61, 74, 20, 50, 150, 6, 164, 39, 215, 67, 194, 9, 37, 253, 210, 238, 194, 69, 225, 18, 244, 0, 192, 5, 10, 39, 194, 9, 37, 253, 210, 238, 122, 68, 184, 30, 196, 3, 170, 22, 174, 55, 92, 7, 133, 251, 5, 229, 20, 62, 81, 12, 125, 254, 233, 246, 61, 26, 10, 7, 67, 251, 121, 227, 10, 71, 225, 78, 53, 9, 109, 55, 102, 70, 215, 11, 67, 254, 138, 245, 71, 65, 225, 22, 16, 2, 109, 12, 143, 34, 174, 15, 226, 255, 76, 255, 20, 62, 10, 35, 134, 4, 60, 27, 102, 70, 112, 5, 198, 249, 129, 218, 71, 65, 0, 16, 0, 0, 0, 0, 0, 32, 143, 2, 108, 245, 79, 192, 133, 59, 102, 54, 16, 7, 132, 42, 174, 55, 40, 12, 106, 254, 116, 246, 10, 55, 61, 18, 193, 0, 141, 4, 30, 21, 143, 10, 154, 253, 143, 241, 122, 52, 153, 25, 182, 2, 84, 16, 163, 48, 133, 3, 67, 247, 100, 203, 163, 48, 102, 10, 131, 253, 7, 241, 184, 14, 143, 2, 108, 245, 79, 192, 153, 57, 215, 91, 22, 10, 183, 60, 225, 74, 153, 9, 13, 253, 62, 238, 184, 78, 215, 19, 62, 1, 121, 7, 225, 26, 0, 16, 0, 0, 0, 0, 0, 80, 112, 33, 65, 4, 156, 25, 204, 76, 225, 2, 26, 246, 105, 196, 61, 74, 163, 16, 58, 0, 91, 1, 184, 30, 40, 8, 29, 252, 151, 232, 204, 44, 0, 48, 87, 6, 43, 38, 20, 62, 194, 5, 26, 250, 126, 220, 112, 61, 20, 18, 180, 0, 62, 4, 215, 35, 153, 5, 240, 249, 131, 219, 184, 62, 92, 27, 25, 3, 164, 18, 235, 57, 225, 2, 26, 246, 105, 196, 225, 58, 204, 8, 140, 252, 55, 235, 215, 19, 204, 4, 12, 249, 38, 214, 215, 51, 174, 67, 83, 8, 27, 50, 163, 64, 30, 9, 193, 252, 118, 236, 225, 58, 184, 22, 6, 2, 46, 12, 92, 15, 102, 14, 100, 255, 86, 252, 174, 55, 153, 33, 72, 4, 198, 25, 235, 65, 10, 3, 106, 246, 74, 198, 225, 58, 225, 14, 149, 255, 122, 253, 174, 23, 102, 2, 12, 245, 17, 190, 122, 36, 40, 36, 180, 4, 83, 28, 215, 51, 225, 6, 33, 251, 172, 226, 215, 51, 194, 13, 33, 255, 193, 250, 153, 9, 174, 7, 196, 251, 127, 230, 204, 44, 153, 21, 187, 1, 108, 10, 245, 40, 225, 2, 26, 246, 105, 196, 112, 45, 122, 12, 145, 254, 92, 247, 194, 5, 10, 3, 106, 246, 74, 198, 0, 64, 248, 65, 226, 67, 190, 69, 142, 71, 82, 73, 12, 75, 188, 76, 98, 78, 0, 80, 150, 81, 35, 83, 170, 84, 42, 86, 163, 87, 22, 89, 130, 90, 234, 91, 76, 93, 168, 94, 0, 96, 83, 97, 161, 98, 236, 99, 49, 101, 115, 102, 177, 103, 235, 104, 34, 106, 85, 107, 132, 108, 177, 109, 218, 110, 0, 112, 35, 113, 67, 114, 97, 115, 123, 116, 147, 117, 169, 118, 188, 119, 204, 120, 218, 121, 230, 122, 239, 123, 247, 124, 252, 125, 255, 126, 255, 127, 255, 127, 61, 10, 63, 10, 69, 10, 78, 10, 91, 10, 108, 10, 129, 10, 153, 10, 181, 10, 212, 10, 248, 10, 31, 11, 74, 11, 120, 11, 170, 11, 224, 11, 25, 12, 86, 12, 151, 12, 219, 12, 35, 13, 110, 13, 189, 13, 15, 14, 101, 14, 190, 14, 27, 15, 123, 15, 223, 15, 70, 16, 176, 16, 30, 17, 143, 17, 3, 18, 123, 18, 245, 18, 115, 19, 244, 19, 120, 20, 0, 21, 138, 21, 23, 22, 168, 22, 59, 23, 209, 23, 106, 24, 6, 25, 165, 25, 70, 26, 234, 26, 145, 27, 59, 28, 231, 28, 149, 29, 70, 30, 250, 30, 176, 31, 104, 32, 35, 33, 224, 33, 159, 34, 97, 35, 36, 36, 234, 36, 178, 37, 124, 38, 71, 39, 21, 40, 228, 40, 181, 41, 136, 42, 93, 43, 51, 44, 11, 45, 228, 45, 191, 46, 155, 47, 121, 48, 88, 49, 56, 50, 26, 51, 252, 51, 224, 52, 196, 53, 170, 54, 145, 55, 120, 56, 96, 57, 73, 58, 51, 59, 29, 60, 8, 61, 243, 61, 223, 62, 203, 63, 184, 64, 165, 65, 146, 66, 127, 67, 108, 68, 90, 69, 71, 70, 52, 71, 33, 72, 14, 73, 251, 73, 231, 74, 211, 75, 191, 76, 170, 77, 149, 78, 126, 79, 104, 80, 80, 81, 56, 82, 31, 83, 5, 84, 234, 84, 207, 85, 178, 86, 148, 87, 116, 88, 84, 89, 50, 90, 15, 91, 235, 91, 197, 92, 157, 93, 117, 94, 74, 95, 30, 96, 240, 96, 192, 97, 143, 98, 91, 99, 38, 100, 239, 100, 181, 101, 122, 102, 60, 103, 253, 103, 187, 104, 119, 105, 48, 106, 232, 106, 156, 107, 79, 108, 255, 108, 172, 109, 87, 110, 255, 110, 165, 111, 71, 112, 231, 112, 133, 113, 31, 114, 183, 114, 75, 115, 221, 115, 108, 116, 248, 116, 129, 117, 6, 118, 137, 118, 8, 119, 133, 119, 254, 119, 116, 120, 230, 120, 86, 121, 194, 121, 42, 122, 144, 122, 242, 122, 80, 123, 171, 123, 3, 124, 87, 124, 167, 124, 244, 124, 62, 125, 132, 125, 198, 125, 5, 126, 64, 126, 120, 126, 172, 126, 220, 126, 9, 127, 49, 127, 87, 127, 120, 127, 150, 127, 176, 127, 199, 127, 217, 127, 232, 127, 243, 127, 251, 127, 255, 127, 255, 127, 229, 127, 153, 127, 25, 127, 103, 126, 129, 125], "i8", Z2, y1.GLOBAL_BASE + 20480), s2([106, 124, 33, 123, 167, 121, 252, 119, 34, 118, 24, 116, 223, 113, 122, 111, 231, 108, 41, 106, 65, 103, 47, 100, 245, 96, 149, 93, 15, 90, 101, 86, 153, 82, 171, 78, 158, 74, 116, 70, 45, 66, 204, 61, 82, 57, 193, 52, 27, 48, 98, 43, 151, 38, 189, 33, 213, 28, 226, 23, 230, 18, 226, 13, 216, 8, 203, 3, 61, 10, 64, 10, 73, 10, 88, 10, 108, 10, 135, 10, 167, 10, 205, 10, 249, 10, 43, 11, 99, 11, 160, 11, 227, 11, 44, 12, 122, 12, 207, 12, 40, 13, 136, 13, 237, 13, 87, 14, 199, 14, 60, 15, 183, 15, 55, 16, 189, 16, 71, 17, 215, 17, 108, 18, 6, 19, 165, 19, 73, 20, 242, 20, 159, 21, 82, 22, 9, 23, 196, 23, 133, 24, 73, 25, 18, 26, 224, 26, 177, 27, 135, 28, 97, 29, 62, 30, 32, 31, 5, 32, 238, 32, 219, 33, 203, 34, 191, 35, 182, 36, 176, 37, 174, 38, 174, 39, 177, 40, 184, 41, 193, 42, 204, 43, 218, 44, 235, 45, 254, 46, 19, 48, 42, 49, 67, 50, 94, 51, 123, 52, 154, 53, 186, 54, 219, 55, 254, 56, 34, 58, 71, 59, 109, 60, 148, 61, 188, 62, 228, 63, 13, 65, 54, 66, 96, 67, 138, 68, 180, 69, 221, 70, 7, 72, 48, 73, 89, 74, 130, 75, 169, 76, 208, 77, 246, 78, 27, 80, 63, 81, 98, 82, 132, 83, 164, 84, 194, 85, 223, 86, 250, 87, 19, 89, 43, 90, 64, 91, 83, 92, 99, 93, 113, 94, 125, 95, 134, 96, 140, 97, 143, 98, 144, 99, 141, 100, 135, 101, 126, 102, 114, 103, 98, 104, 79, 105, 56, 106, 30, 107, 255, 107, 221, 108, 183, 109, 140, 110, 94, 111, 43, 112, 244, 112, 185, 113, 121, 114, 53, 115, 236, 115, 158, 116, 76, 117, 245, 117, 153, 118, 55, 119, 209, 119, 102, 120, 246, 120, 129, 121, 6, 122, 134, 122, 1, 123, 118, 123, 230, 123, 81, 124, 182, 124, 21, 125, 111, 125, 195, 125, 17, 126, 90, 126, 157, 126, 219, 126, 18, 127, 68, 127, 112, 127, 150, 127, 183, 127, 209, 127, 230, 127, 244, 127, 253, 127, 255, 127, 255, 127, 244, 127, 208, 127, 149, 127, 66, 127, 215, 126, 85, 126, 188, 125, 12, 125, 69, 124, 104, 123, 117, 122, 108, 121, 78, 120, 28, 119, 213, 117, 122, 116, 13, 115, 140, 113, 250, 111, 87, 110, 162, 108, 222, 106, 11, 105, 40, 103, 57, 101, 60, 99, 51, 97, 30, 95, 255, 92, 215, 90, 165, 88, 108, 86, 44, 84, 229, 81, 154, 79, 74, 77, 247, 74, 161, 72, 74, 70, 243, 67, 156, 65, 71, 63, 244, 60, 164, 58, 88, 56, 18, 54, 209, 51, 152, 49, 103, 47, 62, 45, 31, 43, 11, 41, 2, 39, 5, 37, 21, 35, 51, 33, 95, 31, 155, 29, 231, 27, 67, 26, 177, 24, 49, 23, 195, 21, 105, 20, 34, 19, 239, 17, 209, 16, 201, 15, 214, 14, 249, 13, 50, 13, 130, 12, 232, 11, 102, 11, 252, 10, 169, 10, 109, 10, 73, 10, 61, 10, 61, 10, 63, 10, 67, 10, 74, 10, 84, 10, 96, 10, 111, 10, 129, 10, 150, 10, 174, 10, 200, 10, 229, 10, 5, 11, 39, 11, 77, 11, 117, 11, 159, 11, 205, 11, 253, 11, 48, 12, 101, 12, 157, 12, 216, 12, 22, 13, 86, 13, 153, 13, 222, 13, 38, 14, 113, 14, 190, 14, 13, 15, 96, 15, 181, 15, 12, 16, 102, 16, 194, 16, 33, 17, 130, 17, 230, 17, 76, 18, 180, 18, 31, 19, 140, 19, 252, 19, 110, 20, 226, 20, 88, 21, 209, 21, 76, 22, 201, 22, 72, 23, 202, 23, 77, 24, 211, 24, 91, 25, 229, 25, 113, 26, 254, 26, 142, 27, 32, 28, 180, 28, 74, 29, 225, 29, 123, 30, 22, 31, 179, 31, 82, 32, 242, 32, 149, 33, 57, 34, 222, 34, 133, 35, 46, 36, 216, 36, 132, 37, 50, 38, 224, 38, 145, 39, 66, 40, 245, 40, 169, 41, 95, 42, 22, 43, 206, 43, 135, 44, 66, 45, 253, 45, 186, 46, 120, 47, 54, 48, 246, 48, 183, 49, 120, 50, 59, 51, 254, 51, 194, 52, 135, 53, 77, 54, 19, 55, 218, 55, 161, 56, 106, 57, 50, 58, 252, 58, 197, 59, 144, 60, 90, 61, 37, 62, 240, 62, 188, 63, 136, 64, 84, 65, 32, 66, 236, 66, 185, 67, 133, 68, 82, 69, 30, 70, 235, 70, 183, 71, 132, 72, 80, 73, 28, 74, 231, 74, 179, 75, 126, 76, 73, 77, 19, 78, 221, 78, 166, 79, 111, 80, 56, 81, 0, 82, 199, 82, 142, 83, 84, 84, 25, 85, 221, 85, 161, 86, 100, 87, 38, 88, 231, 88, 167, 89, 103, 90, 37, 91, 226, 91, 158, 92, 89, 93, 19, 94, 204, 94, 131, 95, 57, 96, 238, 96, 162, 97, 84, 98, 5, 99, 181, 99, 99, 100, 15, 101, 186, 101, 100, 102, 12, 103, 178, 103, 87, 104, 250, 104, 155, 105, 59, 106, 217, 106, 117, 107, 16, 108, 168, 108, 63, 109, 211, 109, 102, 110, 247, 110, 134, 111, 19, 112, 158, 112, 39, 113, 174, 113, 50, 114, 181, 114, 53, 115, 179, 115, 47, 116, 169, 116, 33, 117, 150, 117, 9, 118, 122, 118, 232, 118, 84, 119, 190, 119, 37, 120, 138, 120, 236, 120, 76, 121, 170, 121, 5, 122, 94, 122, 180, 122, 7, 123, 88, 123, 167, 123, 242, 123, 60, 124, 130, 124, 198, 124, 8, 125, 71, 125, 131, 125, 188, 125, 243, 125, 39, 126, 89, 126, 136, 126, 180, 126, 221, 126, 4, 127, 40, 127, 73, 127, 103, 127, 131, 127, 156, 127, 178, 127, 197, 127, 214, 127, 228, 127, 239, 127, 247, 127, 253, 127, 255, 127, 255, 127, 97, 125, 160, 117, 15, 105, 48, 88, 181, 67, 116, 44, 98, 19, 68, 101, 99, 111, 100, 101, 114, 0, 101, 110, 99, 111, 100, 101, 114, 0], "i8", Z2, y1.GLOBAL_BASE + 30720);
          var Ue = y1.alignMemory(s2(12, "i8", o2), 8);
          J1(Ue % 8 == 0);
          function D5(h) {
            var _ = D5;
            _.called || (m2 = u4(m2), _.called = true, J1(y1.dynamicAlloc), _.alloc = y1.dynamicAlloc, y1.dynamicAlloc = (function() {
              H2("cannot dynamically allocate, sbrk now has control");
            }));
            var y = m2;
            if (h != 0) {
              var A = _.alloc(h);
              if (!A) return 4294967295;
            }
            return y;
          }
          function c5(h) {
            return N.___errno_location && (V0[N.___errno_location() >> 2] = h), h;
          }
          var j = { EPERM: 1, ENOENT: 2, ESRCH: 3, EINTR: 4, EIO: 5, ENXIO: 6, E2BIG: 7, ENOEXEC: 8, EBADF: 9, ECHILD: 10, EAGAIN: 11, EWOULDBLOCK: 11, ENOMEM: 12, EACCES: 13, EFAULT: 14, ENOTBLK: 15, EBUSY: 16, EEXIST: 17, EXDEV: 18, ENODEV: 19, ENOTDIR: 20, EISDIR: 21, EINVAL: 22, ENFILE: 23, EMFILE: 24, ENOTTY: 25, ETXTBSY: 26, EFBIG: 27, ENOSPC: 28, ESPIPE: 29, EROFS: 30, EMLINK: 31, EPIPE: 32, EDOM: 33, ERANGE: 34, ENOMSG: 42, EIDRM: 43, ECHRNG: 44, EL2NSYNC: 45, EL3HLT: 46, EL3RST: 47, ELNRNG: 48, EUNATCH: 49, ENOCSI: 50, EL2HLT: 51, EDEADLK: 35, ENOLCK: 37, EBADE: 52, EBADR: 53, EXFULL: 54, ENOANO: 55, EBADRQC: 56, EBADSLT: 57, EDEADLOCK: 35, EBFONT: 59, ENOSTR: 60, ENODATA: 61, ETIME: 62, ENOSR: 63, ENONET: 64, ENOPKG: 65, EREMOTE: 66, ENOLINK: 67, EADV: 68, ESRMNT: 69, ECOMM: 70, EPROTO: 71, EMULTIHOP: 72, EDOTDOT: 73, EBADMSG: 74, ENOTUNIQ: 76, EBADFD: 77, EREMCHG: 78, ELIBACC: 79, ELIBBAD: 80, ELIBSCN: 81, ELIBMAX: 82, ELIBEXEC: 83, ENOSYS: 38, ENOTEMPTY: 39, ENAMETOOLONG: 36, ELOOP: 40, EOPNOTSUPP: 95, EPFNOSUPPORT: 96, ECONNRESET: 104, ENOBUFS: 105, EAFNOSUPPORT: 97, EPROTOTYPE: 91, ENOTSOCK: 88, ENOPROTOOPT: 92, ESHUTDOWN: 108, ECONNREFUSED: 111, EADDRINUSE: 98, ECONNABORTED: 103, ENETUNREACH: 101, ENETDOWN: 100, ETIMEDOUT: 110, EHOSTDOWN: 112, EHOSTUNREACH: 113, EINPROGRESS: 115, EALREADY: 114, EDESTADDRREQ: 89, EMSGSIZE: 90, EPROTONOSUPPORT: 93, ESOCKTNOSUPPORT: 94, EADDRNOTAVAIL: 99, ENETRESET: 102, EISCONN: 106, ENOTCONN: 107, ETOOMANYREFS: 109, EUSERS: 87, EDQUOT: 122, ESTALE: 116, ENOTSUP: 95, ENOMEDIUM: 123, EILSEQ: 84, EOVERFLOW: 75, ECANCELED: 125, ENOTRECOVERABLE: 131, EOWNERDEAD: 130, ESTRPIPE: 86 };
          function A4(h) {
            switch (h) {
              case 30:
                return Se;
              case 85:
                return R2 / Se;
              case 132:
              case 133:
              case 12:
              case 137:
              case 138:
              case 15:
              case 235:
              case 16:
              case 17:
              case 18:
              case 19:
              case 20:
              case 149:
              case 13:
              case 10:
              case 236:
              case 153:
              case 9:
              case 21:
              case 22:
              case 159:
              case 154:
              case 14:
              case 77:
              case 78:
              case 139:
              case 80:
              case 81:
              case 82:
              case 68:
              case 67:
              case 164:
              case 11:
              case 29:
              case 47:
              case 48:
              case 95:
              case 52:
              case 51:
              case 46:
                return 200809;
              case 79:
                return 0;
              case 27:
              case 246:
              case 127:
              case 128:
              case 23:
              case 24:
              case 160:
              case 161:
              case 181:
              case 182:
              case 242:
              case 183:
              case 184:
              case 243:
              case 244:
              case 245:
              case 165:
              case 178:
              case 179:
              case 49:
              case 50:
              case 168:
              case 169:
              case 175:
              case 170:
              case 171:
              case 172:
              case 97:
              case 76:
              case 32:
              case 173:
              case 35:
                return -1;
              case 176:
              case 177:
              case 7:
              case 155:
              case 8:
              case 157:
              case 125:
              case 126:
              case 92:
              case 93:
              case 129:
              case 130:
              case 131:
              case 94:
              case 91:
                return 1;
              case 74:
              case 60:
              case 69:
              case 70:
              case 4:
                return 1024;
              case 31:
              case 42:
              case 72:
                return 32;
              case 87:
              case 26:
              case 33:
                return 2147483647;
              case 34:
              case 1:
                return 47839;
              case 38:
              case 36:
                return 99;
              case 43:
              case 37:
                return 2048;
              case 0:
                return 2097152;
              case 3:
                return 65536;
              case 28:
                return 32768;
              case 44:
                return 32767;
              case 75:
                return 16384;
              case 39:
                return 1e3;
              case 89:
                return 700;
              case 71:
                return 256;
              case 40:
                return 255;
              case 2:
                return 100;
              case 180:
                return 64;
              case 25:
                return 20;
              case 5:
                return 16;
              case 6:
                return 6;
              case 73:
                return 4;
              case 84:
                return typeof navigator == "object" && navigator.hardwareConcurrency || 1;
            }
            return c5(j.EINVAL), -1;
          }
          function R4(h, _, y) {
            return u2.set(u2.subarray(_, _ + y), h), h;
          }
          N._memcpy = I4, N._memmove = C4, N._memset = P4;
          function S4() {
            N.abort();
          }
          var D4 = { 0: "Success", 1: "Not super-user", 2: "No such file or directory", 3: "No such process", 4: "Interrupted system call", 5: "I/O error", 6: "No such device or address", 7: "Arg list too long", 8: "Exec format error", 9: "Bad file number", 10: "No children", 11: "No more processes", 12: "Not enough core", 13: "Permission denied", 14: "Bad address", 15: "Block device required", 16: "Mount device busy", 17: "File exists", 18: "Cross-device link", 19: "No such device", 20: "Not a directory", 21: "Is a directory", 22: "Invalid argument", 23: "Too many open files in system", 24: "Too many open files", 25: "Not a typewriter", 26: "Text file busy", 27: "File too large", 28: "No space left on device", 29: "Illegal seek", 30: "Read only file system", 31: "Too many links", 32: "Broken pipe", 33: "Math arg out of domain of func", 34: "Math result not representable", 35: "File locking deadlock error", 36: "File or path name too long", 37: "No record locks available", 38: "Function not implemented", 39: "Directory not empty", 40: "Too many symbolic links", 42: "No message of desired type", 43: "Identifier removed", 44: "Channel number out of range", 45: "Level 2 not synchronized", 46: "Level 3 halted", 47: "Level 3 reset", 48: "Link number out of range", 49: "Protocol driver not attached", 50: "No CSI structure available", 51: "Level 2 halted", 52: "Invalid exchange", 53: "Invalid request descriptor", 54: "Exchange full", 55: "No anode", 56: "Invalid request code", 57: "Invalid slot", 59: "Bad font file fmt", 60: "Device not a stream", 61: "No data (for no delay io)", 62: "Timer expired", 63: "Out of streams resources", 64: "Machine is not on the network", 65: "Package not installed", 66: "The object is remote", 67: "The link has been severed", 68: "Advertise error", 69: "Srmount error", 70: "Communication error on send", 71: "Protocol error", 72: "Multihop attempted", 73: "Cross mount point (not really error)", 74: "Trying to read unreadable message", 75: "Value too large for defined data type", 76: "Given log. name not unique", 77: "f.d. invalid for this operation", 78: "Remote address changed", 79: "Can   access a needed shared lib", 80: "Accessing a corrupted shared lib", 81: ".lib section in a.out corrupted", 82: "Attempting to link in too many libs", 83: "Attempting to exec a shared library", 84: "Illegal byte sequence", 86: "Streams pipe error", 87: "Too many users", 88: "Socket operation on non-socket", 89: "Destination address required", 90: "Message too long", 91: "Protocol wrong type for socket", 92: "Protocol not available", 93: "Unknown protocol", 94: "Socket type not supported", 95: "Not supported", 96: "Protocol family not supported", 97: "Address family not supported by protocol family", 98: "Address already in use", 99: "Address not available", 100: "Network interface is not configured", 101: "Network is unreachable", 102: "Connection reset by network", 103: "Connection aborted", 104: "Connection reset by peer", 105: "No buffer space available", 106: "Socket is already connected", 107: "Socket is not connected", 108: "Can't send after socket shutdown", 109: "Too many references", 110: "Connection timed out", 111: "Connection refused", 112: "Host is down", 113: "Host is unreachable", 114: "Socket already connected", 115: "Connection already in progress", 116: "Stale file handle", 122: "Quota exceeded", 123: "No medium (in tape drive)", 125: "Operation canceled", 130: "Previous owner died", 131: "State not recoverable" }, g2 = { ttys: [], init: (function() {
          }), shutdown: (function() {
          }), register: (function(h, _) {
            g2.ttys[h] = { input: [], output: [], ops: _ }, P.registerDevice(h, g2.stream_ops);
          }), stream_ops: { open: (function(h) {
            var _ = g2.ttys[h.node.rdev];
            if (!_) throw new P.ErrnoError(j.ENODEV);
            h.tty = _, h.seekable = false;
          }), close: (function(h) {
            h.tty.ops.flush(h.tty);
          }), flush: (function(h) {
            h.tty.ops.flush(h.tty);
          }), read: (function(h, _, y, A, e) {
            if (!h.tty || !h.tty.ops.get_char) throw new P.ErrnoError(j.ENXIO);
            for (var l = 0, z = 0; z < A; z++) {
              var R;
              try {
                R = h.tty.ops.get_char(h.tty);
              } catch {
                throw new P.ErrnoError(j.EIO);
              }
              if (R === void 0 && l === 0) throw new P.ErrnoError(j.EAGAIN);
              if (R == null) break;
              l++, _[y + z] = R;
            }
            return l && (h.node.timestamp = Date.now()), l;
          }), write: (function(h, _, y, A, e) {
            if (!h.tty || !h.tty.ops.put_char) throw new P.ErrnoError(j.ENXIO);
            for (var l = 0; l < A; l++) try {
              h.tty.ops.put_char(h.tty, _[y + l]);
            } catch {
              throw new P.ErrnoError(j.EIO);
            }
            return A && (h.node.timestamp = Date.now()), l;
          }) }, default_tty_ops: { get_char: (function(h) {
            if (!h.input.length) {
              var _ = null;
              if (typeof window < "u" && typeof window.prompt == "function" ? (_ = window.prompt("Input: "), _ !== null && (_ += `
`)) : typeof readline == "function" && (_ = readline(), _ !== null && (_ += `
`)), !_) return null;
              h.input = V2(_, true);
            }
            return h.input.shift();
          }), put_char: (function(h, _) {
            _ === null || _ === 10 ? (N.print(B2(h.output, 0)), h.output = []) : _ != 0 && h.output.push(_);
          }), flush: (function(h) {
            h.output && h.output.length > 0 && (N.print(B2(h.output, 0)), h.output = []);
          }) }, default_tty1_ops: { put_char: (function(h, _) {
            _ === null || _ === 10 ? (N.printErr(B2(h.output, 0)), h.output = []) : _ != 0 && h.output.push(_);
          }), flush: (function(h) {
            h.output && h.output.length > 0 && (N.printErr(B2(h.output, 0)), h.output = []);
          }) } }, L1 = { ops_table: null, mount: (function(h) {
            return L1.createNode(null, "/", 16895, 0);
          }), createNode: (function(h, _, y, A) {
            if (P.isBlkdev(y) || P.isFIFO(y)) throw new P.ErrnoError(j.EPERM);
            L1.ops_table || (L1.ops_table = { dir: { node: { getattr: L1.node_ops.getattr, setattr: L1.node_ops.setattr, lookup: L1.node_ops.lookup, mknod: L1.node_ops.mknod, rename: L1.node_ops.rename, unlink: L1.node_ops.unlink, rmdir: L1.node_ops.rmdir, readdir: L1.node_ops.readdir, symlink: L1.node_ops.symlink }, stream: { llseek: L1.stream_ops.llseek } }, file: { node: { getattr: L1.node_ops.getattr, setattr: L1.node_ops.setattr }, stream: { llseek: L1.stream_ops.llseek, read: L1.stream_ops.read, write: L1.stream_ops.write, allocate: L1.stream_ops.allocate, mmap: L1.stream_ops.mmap, msync: L1.stream_ops.msync } }, link: { node: { getattr: L1.node_ops.getattr, setattr: L1.node_ops.setattr, readlink: L1.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: L1.node_ops.getattr, setattr: L1.node_ops.setattr }, stream: P.chrdev_stream_ops } });
            var e = P.createNode(h, _, y, A);
            return P.isDir(e.mode) ? (e.node_ops = L1.ops_table.dir.node, e.stream_ops = L1.ops_table.dir.stream, e.contents = {}) : P.isFile(e.mode) ? (e.node_ops = L1.ops_table.file.node, e.stream_ops = L1.ops_table.file.stream, e.usedBytes = 0, e.contents = null) : P.isLink(e.mode) ? (e.node_ops = L1.ops_table.link.node, e.stream_ops = L1.ops_table.link.stream) : P.isChrdev(e.mode) && (e.node_ops = L1.ops_table.chrdev.node, e.stream_ops = L1.ops_table.chrdev.stream), e.timestamp = Date.now(), h && (h.contents[_] = e), e;
          }), getFileDataAsRegularArray: (function(h) {
            if (h.contents && h.contents.subarray) {
              for (var _ = [], y = 0; y < h.usedBytes; ++y) _.push(h.contents[y]);
              return _;
            }
            return h.contents;
          }), getFileDataAsTypedArray: (function(h) {
            return h.contents ? h.contents.subarray ? h.contents.subarray(0, h.usedBytes) : new Uint8Array(h.contents) : new Uint8Array();
          }), expandFileStorage: (function(h, _) {
            if (h.contents && h.contents.subarray && _ > h.contents.length && (h.contents = L1.getFileDataAsRegularArray(h), h.usedBytes = h.contents.length), !h.contents || h.contents.subarray) {
              var y = h.contents ? h.contents.buffer.byteLength : 0;
              if (y >= _) return;
              var A = 1024 * 1024;
              _ = Math.max(_, y * (y < A ? 2 : 1.125) | 0), y != 0 && (_ = Math.max(_, 256));
              var e = h.contents;
              h.contents = new Uint8Array(_), h.usedBytes > 0 && h.contents.set(e.subarray(0, h.usedBytes), 0);
              return;
            }
            for (!h.contents && _ > 0 && (h.contents = []); h.contents.length < _; ) h.contents.push(0);
          }), resizeFileStorage: (function(h, _) {
            if (h.usedBytes != _) {
              if (_ == 0) {
                h.contents = null, h.usedBytes = 0;
                return;
              }
              if (!h.contents || h.contents.subarray) {
                var y = h.contents;
                h.contents = new Uint8Array(new ArrayBuffer(_)), y && h.contents.set(y.subarray(0, Math.min(_, h.usedBytes))), h.usedBytes = _;
                return;
              }
              if (h.contents || (h.contents = []), h.contents.length > _) h.contents.length = _;
              else for (; h.contents.length < _; ) h.contents.push(0);
              h.usedBytes = _;
            }
          }), node_ops: { getattr: (function(h) {
            var _ = {};
            return _.dev = P.isChrdev(h.mode) ? h.id : 1, _.ino = h.id, _.mode = h.mode, _.nlink = 1, _.uid = 0, _.gid = 0, _.rdev = h.rdev, P.isDir(h.mode) ? _.size = 4096 : P.isFile(h.mode) ? _.size = h.usedBytes : P.isLink(h.mode) ? _.size = h.link.length : _.size = 0, _.atime = new Date(h.timestamp), _.mtime = new Date(h.timestamp), _.ctime = new Date(h.timestamp), _.blksize = 4096, _.blocks = Math.ceil(_.size / _.blksize), _;
          }), setattr: (function(h, _) {
            _.mode !== void 0 && (h.mode = _.mode), _.timestamp !== void 0 && (h.timestamp = _.timestamp), _.size !== void 0 && L1.resizeFileStorage(h, _.size);
          }), lookup: (function(h, _) {
            throw P.genericErrors[j.ENOENT];
          }), mknod: (function(h, _, y, A) {
            return L1.createNode(h, _, y, A);
          }), rename: (function(h, _, y) {
            if (P.isDir(h.mode)) {
              var A;
              try {
                A = P.lookupNode(_, y);
              } catch {
              }
              if (A) for (var e in A.contents) throw new P.ErrnoError(j.ENOTEMPTY);
            }
            delete h.parent.contents[h.name], h.name = y, _.contents[y] = h, h.parent = _;
          }), unlink: (function(h, _) {
            delete h.contents[_];
          }), rmdir: (function(h, _) {
            var y = P.lookupNode(h, _);
            for (var A in y.contents) throw new P.ErrnoError(j.ENOTEMPTY);
            delete h.contents[_];
          }), readdir: (function(h) {
            var _ = [".", ".."];
            for (var y in h.contents) h.contents.hasOwnProperty(y) && _.push(y);
            return _;
          }), symlink: (function(h, _, y) {
            var A = L1.createNode(h, _, 41471, 0);
            return A.link = y, A;
          }), readlink: (function(h) {
            if (!P.isLink(h.mode)) throw new P.ErrnoError(j.EINVAL);
            return h.link;
          }) }, stream_ops: { read: (function(h, _, y, A, e) {
            var l = h.node.contents;
            if (e >= h.node.usedBytes) return 0;
            var z = Math.min(h.node.usedBytes - e, A);
            if (J1(z >= 0), z > 8 && l.subarray) _.set(l.subarray(e, e + z), y);
            else for (var R = 0; R < z; R++) _[y + R] = l[e + R];
            return z;
          }), write: (function(h, _, y, A, e, l) {
            if (!A) return 0;
            var z = h.node;
            if (z.timestamp = Date.now(), _.subarray && (!z.contents || z.contents.subarray)) {
              if (l) return z.contents = _.subarray(y, y + A), z.usedBytes = A, A;
              if (z.usedBytes === 0 && e === 0) return z.contents = new Uint8Array(_.subarray(y, y + A)), z.usedBytes = A, A;
              if (e + A <= z.usedBytes) return z.contents.set(_.subarray(y, y + A), e), A;
            }
            if (L1.expandFileStorage(z, e + A), z.contents.subarray && _.subarray) z.contents.set(_.subarray(y, y + A), e);
            else for (var R = 0; R < A; R++) z.contents[e + R] = _[y + R];
            return z.usedBytes = Math.max(z.usedBytes, e + A), A;
          }), llseek: (function(h, _, y) {
            var A = _;
            if (y === 1 ? A += h.position : y === 2 && P.isFile(h.node.mode) && (A += h.node.usedBytes), A < 0) throw new P.ErrnoError(j.EINVAL);
            return A;
          }), allocate: (function(h, _, y) {
            L1.expandFileStorage(h.node, _ + y), h.node.usedBytes = Math.max(h.node.usedBytes, _ + y);
          }), mmap: (function(h, _, y, A, e, l, z) {
            if (!P.isFile(h.node.mode)) throw new P.ErrnoError(j.ENODEV);
            var R, q, J = h.node.contents;
            if (!(z & 2) && (J.buffer === _ || J.buffer === _.buffer)) q = false, R = J.byteOffset;
            else {
              if ((e > 0 || e + A < h.node.usedBytes) && (J.subarray ? J = J.subarray(e, e + A) : J = Array.prototype.slice.call(J, e, e + A)), q = true, R = w5(A), !R) throw new P.ErrnoError(j.ENOMEM);
              _.set(J, R);
            }
            return { ptr: R, allocated: q };
          }), msync: (function(h, _, y, A, e) {
            if (!P.isFile(h.node.mode)) throw new P.ErrnoError(j.ENODEV);
            return e & 2 || L1.stream_ops.write(h, _, 0, A, y, false), 0;
          }) } }, d0 = { dbs: {}, indexedDB: (function() {
            if (typeof indexedDB < "u") return indexedDB;
            var h = null;
            return typeof window == "object" && (h = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), J1(h, "IDBFS used, but indexedDB not supported"), h;
          }), DB_VERSION: 21, DB_STORE_NAME: "FILE_DATA", mount: (function(h) {
            return L1.mount.apply(null, arguments);
          }), syncfs: (function(h, _, y) {
            d0.getLocalSet(h, (function(A, e) {
              if (A) return y(A);
              d0.getRemoteSet(h, (function(l, z) {
                if (l) return y(l);
                var R = _ ? z : e, q = _ ? e : z;
                d0.reconcile(R, q, y);
              }));
            }));
          }), getDB: (function(h, _) {
            var y = d0.dbs[h];
            if (y) return _(null, y);
            var A;
            try {
              A = d0.indexedDB().open(h, d0.DB_VERSION);
            } catch (e) {
              return _(e);
            }
            A.onupgradeneeded = (function(e) {
              var l = e.target.result, z = e.target.transaction, R;
              l.objectStoreNames.contains(d0.DB_STORE_NAME) ? R = z.objectStore(d0.DB_STORE_NAME) : R = l.createObjectStore(d0.DB_STORE_NAME), R.indexNames.contains("timestamp") || R.createIndex("timestamp", "timestamp", { unique: false });
            }), A.onsuccess = (function() {
              y = A.result, d0.dbs[h] = y, _(null, y);
            }), A.onerror = (function(e) {
              _(this.error), e.preventDefault();
            });
          }), getLocalSet: (function(h, _) {
            var y = {};
            function A(q) {
              return q !== "." && q !== "..";
            }
            function e(q) {
              return (function(J) {
                return U1.join2(q, J);
              });
            }
            for (var l = P.readdir(h.mountpoint).filter(A).map(e(h.mountpoint)); l.length; ) {
              var z = l.pop(), R;
              try {
                R = P.stat(z);
              } catch (q) {
                return _(q);
              }
              P.isDir(R.mode) && l.push.apply(l, P.readdir(z).filter(A).map(e(z))), y[z] = { timestamp: R.mtime };
            }
            return _(null, { type: "local", entries: y });
          }), getRemoteSet: (function(h, _) {
            var y = {};
            d0.getDB(h.mountpoint, (function(A, e) {
              if (A) return _(A);
              var l = e.transaction([d0.DB_STORE_NAME], "readonly");
              l.onerror = (function(q) {
                _(this.error), q.preventDefault();
              });
              var z = l.objectStore(d0.DB_STORE_NAME), R = z.index("timestamp");
              R.openKeyCursor().onsuccess = (function(q) {
                var J = q.target.result;
                if (!J) return _(null, { type: "remote", db: e, entries: y });
                y[J.primaryKey] = { timestamp: J.key }, J.continue();
              });
            }));
          }), loadLocalEntry: (function(h, _) {
            var y, A;
            try {
              var e = P.lookupPath(h);
              A = e.node, y = P.stat(h);
            } catch (l) {
              return _(l);
            }
            return P.isDir(y.mode) ? _(null, { timestamp: y.mtime, mode: y.mode }) : P.isFile(y.mode) ? (A.contents = L1.getFileDataAsTypedArray(A), _(null, { timestamp: y.mtime, mode: y.mode, contents: A.contents })) : _(new Error("node type not supported"));
          }), storeLocalEntry: (function(h, _, y) {
            try {
              if (P.isDir(_.mode)) P.mkdir(h, _.mode);
              else if (P.isFile(_.mode)) P.writeFile(h, _.contents, { encoding: "binary", canOwn: true });
              else return y(new Error("node type not supported"));
              P.chmod(h, _.mode), P.utime(h, _.timestamp, _.timestamp);
            } catch (A) {
              return y(A);
            }
            y(null);
          }), removeLocalEntry: (function(h, _) {
            try {
              var y = P.lookupPath(h), A = P.stat(h);
              P.isDir(A.mode) ? P.rmdir(h) : P.isFile(A.mode) && P.unlink(h);
            } catch (e) {
              return _(e);
            }
            _(null);
          }), loadRemoteEntry: (function(h, _, y) {
            var A = h.get(_);
            A.onsuccess = (function(e) {
              y(null, e.target.result);
            }), A.onerror = (function(e) {
              y(this.error), e.preventDefault();
            });
          }), storeRemoteEntry: (function(h, _, y, A) {
            var e = h.put(y, _);
            e.onsuccess = (function() {
              A(null);
            }), e.onerror = (function(l) {
              A(this.error), l.preventDefault();
            });
          }), removeRemoteEntry: (function(h, _, y) {
            var A = h.delete(_);
            A.onsuccess = (function() {
              y(null);
            }), A.onerror = (function(e) {
              y(this.error), e.preventDefault();
            });
          }), reconcile: (function(h, _, y) {
            var A = 0, e = [];
            Object.keys(h.entries).forEach((function(C) {
              var n1 = h.entries[C], l1 = _.entries[C];
              (!l1 || n1.timestamp > l1.timestamp) && (e.push(C), A++);
            }));
            var l = [];
            if (Object.keys(_.entries).forEach((function(C) {
              _.entries[C];
              var n1 = h.entries[C];
              n1 || (l.push(C), A++);
            })), !A) return y(null);
            var z = 0, R = h.type === "remote" ? h.db : _.db, q = R.transaction([d0.DB_STORE_NAME], "readwrite"), J = q.objectStore(d0.DB_STORE_NAME);
            function o1(C) {
              if (C) return o1.errored ? void 0 : (o1.errored = true, y(C));
              if (++z >= A) return y(null);
            }
            q.onerror = (function(C) {
              o1(this.error), C.preventDefault();
            }), e.sort().forEach((function(C) {
              _.type === "local" ? d0.loadRemoteEntry(J, C, (function(n1, l1) {
                if (n1) return o1(n1);
                d0.storeLocalEntry(C, l1, o1);
              })) : d0.loadLocalEntry(C, (function(n1, l1) {
                if (n1) return o1(n1);
                d0.storeRemoteEntry(J, C, l1, o1);
              }));
            })), l.sort().reverse().forEach((function(C) {
              _.type === "local" ? d0.removeLocalEntry(C, o1) : d0.removeRemoteEntry(J, C, o1);
            }));
          }) }, E0 = { DIR_MODE: 16895, FILE_MODE: 33279, reader: null, mount: (function(h) {
            J1(g1), E0.reader || (E0.reader = new FileReaderSync());
            var _ = E0.createNode(null, "/", E0.DIR_MODE, 0), y = {};
            function A(l) {
              for (var z = l.split("/"), R = _, q = 0; q < z.length - 1; q++) {
                var J = z.slice(0, q + 1).join("/");
                y[J] || (y[J] = E0.createNode(R, J, E0.DIR_MODE, 0)), R = y[J];
              }
              return R;
            }
            function e(l) {
              var z = l.split("/");
              return z[z.length - 1];
            }
            return Array.prototype.forEach.call(h.opts.files || [], (function(l) {
              E0.createNode(A(l.name), e(l.name), E0.FILE_MODE, 0, l, l.lastModifiedDate);
            })), (h.opts.blobs || []).forEach((function(l) {
              E0.createNode(A(l.name), e(l.name), E0.FILE_MODE, 0, l.data);
            })), (h.opts.packages || []).forEach((function(l) {
              l.metadata.files.forEach((function(z) {
                var R = z.filename.substr(1);
                E0.createNode(A(R), e(R), E0.FILE_MODE, 0, l.blob.slice(z.start, z.end));
              }));
            })), _;
          }), createNode: (function(h, _, y, A, e, l) {
            var z = P.createNode(h, _, y);
            return z.mode = y, z.node_ops = E0.node_ops, z.stream_ops = E0.stream_ops, z.timestamp = (l || /* @__PURE__ */ new Date()).getTime(), J1(E0.FILE_MODE !== E0.DIR_MODE), y === E0.FILE_MODE ? (z.size = e.size, z.contents = e) : (z.size = 4096, z.contents = {}), h && (h.contents[_] = z), z;
          }), node_ops: { getattr: (function(h) {
            return { dev: 1, ino: void 0, mode: h.mode, nlink: 1, uid: 0, gid: 0, rdev: void 0, size: h.size, atime: new Date(h.timestamp), mtime: new Date(h.timestamp), ctime: new Date(h.timestamp), blksize: 4096, blocks: Math.ceil(h.size / 4096) };
          }), setattr: (function(h, _) {
            _.mode !== void 0 && (h.mode = _.mode), _.timestamp !== void 0 && (h.timestamp = _.timestamp);
          }), lookup: (function(h, _) {
            throw new P.ErrnoError(j.ENOENT);
          }), mknod: (function(h, _, y, A) {
            throw new P.ErrnoError(j.EPERM);
          }), rename: (function(h, _, y) {
            throw new P.ErrnoError(j.EPERM);
          }), unlink: (function(h, _) {
            throw new P.ErrnoError(j.EPERM);
          }), rmdir: (function(h, _) {
            throw new P.ErrnoError(j.EPERM);
          }), readdir: (function(h) {
            throw new P.ErrnoError(j.EPERM);
          }), symlink: (function(h, _, y) {
            throw new P.ErrnoError(j.EPERM);
          }), readlink: (function(h) {
            throw new P.ErrnoError(j.EPERM);
          }) }, stream_ops: { read: (function(h, _, y, A, e) {
            if (e >= h.node.size) return 0;
            var l = h.node.contents.slice(e, e + A), z = E0.reader.readAsArrayBuffer(l);
            return _.set(new Uint8Array(z), y), l.size;
          }), write: (function(h, _, y, A, e) {
            throw new P.ErrnoError(j.EIO);
          }), llseek: (function(h, _, y) {
            var A = _;
            if (y === 1 ? A += h.position : y === 2 && P.isFile(h.node.mode) && (A += h.node.size), A < 0) throw new P.ErrnoError(j.EINVAL);
            return A;
          }) } };
          s2(1, "i32*", o2), s2(1, "i32*", o2), s2(1, "i32*", o2);
          var P = { root: null, mounts: [], devices: [null], streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, trackingDelegate: {}, tracking: { openFlags: { READ: 1, WRITE: 2 } }, ErrnoError: null, genericErrors: {}, filesystems: null, handleFSError: (function(h) {
            if (!(h instanceof P.ErrnoError)) throw h + " : " + V5();
            return c5(h.errno);
          }), lookupPath: (function(h, _) {
            if (h = U1.resolve(P.cwd(), h), _ = _ || {}, !h) return { path: "", node: null };
            var y = { follow_mount: true, recurse_count: 0 };
            for (var A in y) _[A] === void 0 && (_[A] = y[A]);
            if (_.recurse_count > 8) throw new P.ErrnoError(j.ELOOP);
            for (var e = U1.normalizeArray(h.split("/").filter((function(n1) {
              return !!n1;
            })), false), l = P.root, z = "/", R = 0; R < e.length; R++) {
              var q = R === e.length - 1;
              if (q && _.parent) break;
              if (l = P.lookupNode(l, e[R]), z = U1.join2(z, e[R]), P.isMountpoint(l) && (!q || q && _.follow_mount) && (l = l.mounted.root), !q || _.follow) for (var J = 0; P.isLink(l.mode); ) {
                var o1 = P.readlink(z);
                z = U1.resolve(U1.dirname(z), o1);
                var C = P.lookupPath(z, { recurse_count: _.recurse_count });
                if (l = C.node, J++ > 40) throw new P.ErrnoError(j.ELOOP);
              }
            }
            return { path: z, node: l };
          }), getPath: (function(h) {
            for (var _; ; ) {
              if (P.isRoot(h)) {
                var y = h.mount.mountpoint;
                return _ ? y[y.length - 1] !== "/" ? y + "/" + _ : y + _ : y;
              }
              _ = _ ? h.name + "/" + _ : h.name, h = h.parent;
            }
          }), hashName: (function(h, _) {
            for (var y = 0, A = 0; A < _.length; A++) y = (y << 5) - y + _.charCodeAt(A) | 0;
            return (h + y >>> 0) % P.nameTable.length;
          }), hashAddNode: (function(h) {
            var _ = P.hashName(h.parent.id, h.name);
            h.name_next = P.nameTable[_], P.nameTable[_] = h;
          }), hashRemoveNode: (function(h) {
            var _ = P.hashName(h.parent.id, h.name);
            if (P.nameTable[_] === h) P.nameTable[_] = h.name_next;
            else for (var y = P.nameTable[_]; y; ) {
              if (y.name_next === h) {
                y.name_next = h.name_next;
                break;
              }
              y = y.name_next;
            }
          }), lookupNode: (function(h, _) {
            var y = P.mayLookup(h);
            if (y) throw new P.ErrnoError(y, h);
            for (var A = P.hashName(h.id, _), e = P.nameTable[A]; e; e = e.name_next) {
              var l = e.name;
              if (e.parent.id === h.id && l === _) return e;
            }
            return P.lookup(h, _);
          }), createNode: (function(h, _, y, A) {
            if (!P.FSNode) {
              P.FSNode = (function(R, q, J, o1) {
                R || (R = this), this.parent = R, this.mount = R.mount, this.mounted = null, this.id = P.nextInode++, this.name = q, this.mode = J, this.node_ops = {}, this.stream_ops = {}, this.rdev = o1;
              }), P.FSNode.prototype = {};
              var e = 365, l = 146;
              Object.defineProperties(P.FSNode.prototype, { read: { get: (function() {
                return (this.mode & e) === e;
              }), set: (function(R) {
                R ? this.mode |= e : this.mode &= ~e;
              }) }, write: { get: (function() {
                return (this.mode & l) === l;
              }), set: (function(R) {
                R ? this.mode |= l : this.mode &= ~l;
              }) }, isFolder: { get: (function() {
                return P.isDir(this.mode);
              }) }, isDevice: { get: (function() {
                return P.isChrdev(this.mode);
              }) } });
            }
            var z = new P.FSNode(h, _, y, A);
            return P.hashAddNode(z), z;
          }), destroyNode: (function(h) {
            P.hashRemoveNode(h);
          }), isRoot: (function(h) {
            return h === h.parent;
          }), isMountpoint: (function(h) {
            return !!h.mounted;
          }), isFile: (function(h) {
            return (h & 61440) === 32768;
          }), isDir: (function(h) {
            return (h & 61440) === 16384;
          }), isLink: (function(h) {
            return (h & 61440) === 40960;
          }), isChrdev: (function(h) {
            return (h & 61440) === 8192;
          }), isBlkdev: (function(h) {
            return (h & 61440) === 24576;
          }), isFIFO: (function(h) {
            return (h & 61440) === 4096;
          }), isSocket: (function(h) {
            return (h & 49152) === 49152;
          }), flagModes: { r: 0, rs: 1052672, "r+": 2, w: 577, wx: 705, xw: 705, "w+": 578, "wx+": 706, "xw+": 706, a: 1089, ax: 1217, xa: 1217, "a+": 1090, "ax+": 1218, "xa+": 1218 }, modeStringToFlags: (function(h) {
            var _ = P.flagModes[h];
            if (typeof _ > "u") throw new Error("Unknown file open mode: " + h);
            return _;
          }), flagsToPermissionString: (function(h) {
            var _ = ["r", "w", "rw"][h & 3];
            return h & 512 && (_ += "w"), _;
          }), nodePermissions: (function(h, _) {
            return P.ignorePermissions ? 0 : _.indexOf("r") !== -1 && !(h.mode & 292) || _.indexOf("w") !== -1 && !(h.mode & 146) || _.indexOf("x") !== -1 && !(h.mode & 73) ? j.EACCES : 0;
          }), mayLookup: (function(h) {
            var _ = P.nodePermissions(h, "x");
            return _ || (h.node_ops.lookup ? 0 : j.EACCES);
          }), mayCreate: (function(h, _) {
            try {
              var y = P.lookupNode(h, _);
              return j.EEXIST;
            } catch {
            }
            return P.nodePermissions(h, "wx");
          }), mayDelete: (function(h, _, y) {
            var A;
            try {
              A = P.lookupNode(h, _);
            } catch (l) {
              return l.errno;
            }
            var e = P.nodePermissions(h, "wx");
            if (e) return e;
            if (y) {
              if (!P.isDir(A.mode)) return j.ENOTDIR;
              if (P.isRoot(A) || P.getPath(A) === P.cwd()) return j.EBUSY;
            } else if (P.isDir(A.mode)) return j.EISDIR;
            return 0;
          }), mayOpen: (function(h, _) {
            return h ? P.isLink(h.mode) ? j.ELOOP : P.isDir(h.mode) && ((_ & 2097155) !== 0 || _ & 512) ? j.EISDIR : P.nodePermissions(h, P.flagsToPermissionString(_)) : j.ENOENT;
          }), MAX_OPEN_FDS: 4096, nextfd: (function(h, _) {
            h = h || 0, _ = _ || P.MAX_OPEN_FDS;
            for (var y = h; y <= _; y++) if (!P.streams[y]) return y;
            throw new P.ErrnoError(j.EMFILE);
          }), getStream: (function(h) {
            return P.streams[h];
          }), createStream: (function(h, _, y) {
            P.FSStream || (P.FSStream = (function() {
            }), P.FSStream.prototype = {}, Object.defineProperties(P.FSStream.prototype, { object: { get: (function() {
              return this.node;
            }), set: (function(z) {
              this.node = z;
            }) }, isRead: { get: (function() {
              return (this.flags & 2097155) !== 1;
            }) }, isWrite: { get: (function() {
              return (this.flags & 2097155) !== 0;
            }) }, isAppend: { get: (function() {
              return this.flags & 1024;
            }) } }));
            var A = new P.FSStream();
            for (var e in h) A[e] = h[e];
            h = A;
            var l = P.nextfd(_, y);
            return h.fd = l, P.streams[l] = h, h;
          }), closeStream: (function(h) {
            P.streams[h] = null;
          }), chrdev_stream_ops: { open: (function(h) {
            var _ = P.getDevice(h.node.rdev);
            h.stream_ops = _.stream_ops, h.stream_ops.open && h.stream_ops.open(h);
          }), llseek: (function() {
            throw new P.ErrnoError(j.ESPIPE);
          }) }, major: (function(h) {
            return h >> 8;
          }), minor: (function(h) {
            return h & 255;
          }), makedev: (function(h, _) {
            return h << 8 | _;
          }), registerDevice: (function(h, _) {
            P.devices[h] = { stream_ops: _ };
          }), getDevice: (function(h) {
            return P.devices[h];
          }), getMounts: (function(h) {
            for (var _ = [], y = [h]; y.length; ) {
              var A = y.pop();
              _.push(A), y.push.apply(y, A.mounts);
            }
            return _;
          }), syncfs: (function(h, _) {
            typeof h == "function" && (_ = h, h = false);
            var y = P.getMounts(P.root.mount), A = 0;
            function e(l) {
              if (l) return e.errored ? void 0 : (e.errored = true, _(l));
              ++A >= y.length && _(null);
            }
            y.forEach((function(l) {
              if (!l.type.syncfs) return e(null);
              l.type.syncfs(l, h, e);
            }));
          }), mount: (function(h, _, y) {
            var A = y === "/", e = !y, l;
            if (A && P.root) throw new P.ErrnoError(j.EBUSY);
            if (!A && !e) {
              var z = P.lookupPath(y, { follow_mount: false });
              if (y = z.path, l = z.node, P.isMountpoint(l)) throw new P.ErrnoError(j.EBUSY);
              if (!P.isDir(l.mode)) throw new P.ErrnoError(j.ENOTDIR);
            }
            var R = { type: h, opts: _, mountpoint: y, mounts: [] }, q = h.mount(R);
            return q.mount = R, R.root = q, A ? P.root = q : l && (l.mounted = R, l.mount && l.mount.mounts.push(R)), q;
          }), unmount: (function(h) {
            var _ = P.lookupPath(h, { follow_mount: false });
            if (!P.isMountpoint(_.node)) throw new P.ErrnoError(j.EINVAL);
            var y = _.node, A = y.mounted, e = P.getMounts(A);
            Object.keys(P.nameTable).forEach((function(z) {
              for (var R = P.nameTable[z]; R; ) {
                var q = R.name_next;
                e.indexOf(R.mount) !== -1 && P.destroyNode(R), R = q;
              }
            })), y.mounted = null;
            var l = y.mount.mounts.indexOf(A);
            J1(l !== -1), y.mount.mounts.splice(l, 1);
          }), lookup: (function(h, _) {
            return h.node_ops.lookup(h, _);
          }), mknod: (function(h, _, y) {
            var A = P.lookupPath(h, { parent: true }), e = A.node, l = U1.basename(h);
            if (!l || l === "." || l === "..") throw new P.ErrnoError(j.EINVAL);
            var z = P.mayCreate(e, l);
            if (z) throw new P.ErrnoError(z);
            if (!e.node_ops.mknod) throw new P.ErrnoError(j.EPERM);
            return e.node_ops.mknod(e, l, _, y);
          }), create: (function(h, _) {
            return _ = _ !== void 0 ? _ : 438, _ &= 4095, _ |= 32768, P.mknod(h, _, 0);
          }), mkdir: (function(h, _) {
            return _ = _ !== void 0 ? _ : 511, _ &= 1023, _ |= 16384, P.mknod(h, _, 0);
          }), mkdev: (function(h, _, y) {
            return typeof y > "u" && (y = _, _ = 438), _ |= 8192, P.mknod(h, _, y);
          }), symlink: (function(h, _) {
            if (!U1.resolve(h)) throw new P.ErrnoError(j.ENOENT);
            var y = P.lookupPath(_, { parent: true }), A = y.node;
            if (!A) throw new P.ErrnoError(j.ENOENT);
            var e = U1.basename(_), l = P.mayCreate(A, e);
            if (l) throw new P.ErrnoError(l);
            if (!A.node_ops.symlink) throw new P.ErrnoError(j.EPERM);
            return A.node_ops.symlink(A, e, h);
          }), rename: (function(h, _) {
            var y = U1.dirname(h), A = U1.dirname(_), e = U1.basename(h), l = U1.basename(_), z, R, q;
            try {
              z = P.lookupPath(h, { parent: true }), R = z.node, z = P.lookupPath(_, { parent: true }), q = z.node;
            } catch {
              throw new P.ErrnoError(j.EBUSY);
            }
            if (!R || !q) throw new P.ErrnoError(j.ENOENT);
            if (R.mount !== q.mount) throw new P.ErrnoError(j.EXDEV);
            var J = P.lookupNode(R, e), o1 = U1.relative(h, A);
            if (o1.charAt(0) !== ".") throw new P.ErrnoError(j.EINVAL);
            if (o1 = U1.relative(_, y), o1.charAt(0) !== ".") throw new P.ErrnoError(j.ENOTEMPTY);
            var C;
            try {
              C = P.lookupNode(q, l);
            } catch {
            }
            if (J !== C) {
              var n1 = P.isDir(J.mode), l1 = P.mayDelete(R, e, n1);
              if (l1) throw new P.ErrnoError(l1);
              if (l1 = C ? P.mayDelete(q, l, n1) : P.mayCreate(q, l), l1) throw new P.ErrnoError(l1);
              if (!R.node_ops.rename) throw new P.ErrnoError(j.EPERM);
              if (P.isMountpoint(J) || C && P.isMountpoint(C)) throw new P.ErrnoError(j.EBUSY);
              if (q !== R && (l1 = P.nodePermissions(R, "w"), l1)) throw new P.ErrnoError(l1);
              try {
                P.trackingDelegate.willMovePath && P.trackingDelegate.willMovePath(h, _);
              } catch (v1) {
                console.log("FS.trackingDelegate['willMovePath']('" + h + "', '" + _ + "') threw an exception: " + v1.message);
              }
              P.hashRemoveNode(J);
              try {
                R.node_ops.rename(J, q, l);
              } catch (v1) {
                throw v1;
              } finally {
                P.hashAddNode(J);
              }
              try {
                P.trackingDelegate.onMovePath && P.trackingDelegate.onMovePath(h, _);
              } catch (v1) {
                console.log("FS.trackingDelegate['onMovePath']('" + h + "', '" + _ + "') threw an exception: " + v1.message);
              }
            }
          }), rmdir: (function(h) {
            var _ = P.lookupPath(h, { parent: true }), y = _.node, A = U1.basename(h), e = P.lookupNode(y, A), l = P.mayDelete(y, A, true);
            if (l) throw new P.ErrnoError(l);
            if (!y.node_ops.rmdir) throw new P.ErrnoError(j.EPERM);
            if (P.isMountpoint(e)) throw new P.ErrnoError(j.EBUSY);
            try {
              P.trackingDelegate.willDeletePath && P.trackingDelegate.willDeletePath(h);
            } catch (z) {
              console.log("FS.trackingDelegate['willDeletePath']('" + h + "') threw an exception: " + z.message);
            }
            y.node_ops.rmdir(y, A), P.destroyNode(e);
            try {
              P.trackingDelegate.onDeletePath && P.trackingDelegate.onDeletePath(h);
            } catch (z) {
              console.log("FS.trackingDelegate['onDeletePath']('" + h + "') threw an exception: " + z.message);
            }
          }), readdir: (function(h) {
            var _ = P.lookupPath(h, { follow: true }), y = _.node;
            if (!y.node_ops.readdir) throw new P.ErrnoError(j.ENOTDIR);
            return y.node_ops.readdir(y);
          }), unlink: (function(h) {
            var _ = P.lookupPath(h, { parent: true }), y = _.node, A = U1.basename(h), e = P.lookupNode(y, A), l = P.mayDelete(y, A, false);
            if (l) throw l === j.EISDIR && (l = j.EPERM), new P.ErrnoError(l);
            if (!y.node_ops.unlink) throw new P.ErrnoError(j.EPERM);
            if (P.isMountpoint(e)) throw new P.ErrnoError(j.EBUSY);
            try {
              P.trackingDelegate.willDeletePath && P.trackingDelegate.willDeletePath(h);
            } catch (z) {
              console.log("FS.trackingDelegate['willDeletePath']('" + h + "') threw an exception: " + z.message);
            }
            y.node_ops.unlink(y, A), P.destroyNode(e);
            try {
              P.trackingDelegate.onDeletePath && P.trackingDelegate.onDeletePath(h);
            } catch (z) {
              console.log("FS.trackingDelegate['onDeletePath']('" + h + "') threw an exception: " + z.message);
            }
          }), readlink: (function(h) {
            var _ = P.lookupPath(h), y = _.node;
            if (!y) throw new P.ErrnoError(j.ENOENT);
            if (!y.node_ops.readlink) throw new P.ErrnoError(j.EINVAL);
            return U1.resolve(P.getPath(y.parent), y.node_ops.readlink(y));
          }), stat: (function(h, _) {
            var y = P.lookupPath(h, { follow: !_ }), A = y.node;
            if (!A) throw new P.ErrnoError(j.ENOENT);
            if (!A.node_ops.getattr) throw new P.ErrnoError(j.EPERM);
            return A.node_ops.getattr(A);
          }), lstat: (function(h) {
            return P.stat(h, true);
          }), chmod: (function(h, _, y) {
            var A;
            if (typeof h == "string") {
              var e = P.lookupPath(h, { follow: !y });
              A = e.node;
            } else A = h;
            if (!A.node_ops.setattr) throw new P.ErrnoError(j.EPERM);
            A.node_ops.setattr(A, { mode: _ & 4095 | A.mode & -4096, timestamp: Date.now() });
          }), lchmod: (function(h, _) {
            P.chmod(h, _, true);
          }), fchmod: (function(h, _) {
            var y = P.getStream(h);
            if (!y) throw new P.ErrnoError(j.EBADF);
            P.chmod(y.node, _);
          }), chown: (function(h, _, y, A) {
            var e;
            if (typeof h == "string") {
              var l = P.lookupPath(h, { follow: !A });
              e = l.node;
            } else e = h;
            if (!e.node_ops.setattr) throw new P.ErrnoError(j.EPERM);
            e.node_ops.setattr(e, { timestamp: Date.now() });
          }), lchown: (function(h, _, y) {
            P.chown(h, _, y, true);
          }), fchown: (function(h, _, y) {
            var A = P.getStream(h);
            if (!A) throw new P.ErrnoError(j.EBADF);
            P.chown(A.node, _, y);
          }), truncate: (function(h, _) {
            if (_ < 0) throw new P.ErrnoError(j.EINVAL);
            var y;
            if (typeof h == "string") {
              var A = P.lookupPath(h, { follow: true });
              y = A.node;
            } else y = h;
            if (!y.node_ops.setattr) throw new P.ErrnoError(j.EPERM);
            if (P.isDir(y.mode)) throw new P.ErrnoError(j.EISDIR);
            if (!P.isFile(y.mode)) throw new P.ErrnoError(j.EINVAL);
            var e = P.nodePermissions(y, "w");
            if (e) throw new P.ErrnoError(e);
            y.node_ops.setattr(y, { size: _, timestamp: Date.now() });
          }), ftruncate: (function(h, _) {
            var y = P.getStream(h);
            if (!y) throw new P.ErrnoError(j.EBADF);
            if ((y.flags & 2097155) === 0) throw new P.ErrnoError(j.EINVAL);
            P.truncate(y.node, _);
          }), utime: (function(h, _, y) {
            var A = P.lookupPath(h, { follow: true }), e = A.node;
            e.node_ops.setattr(e, { timestamp: Math.max(_, y) });
          }), open: (function(h, _, y, A, e) {
            if (h === "") throw new P.ErrnoError(j.ENOENT);
            _ = typeof _ == "string" ? P.modeStringToFlags(_) : _, y = typeof y > "u" ? 438 : y, _ & 64 ? y = y & 4095 | 32768 : y = 0;
            var l;
            if (typeof h == "object") l = h;
            else {
              h = U1.normalize(h);
              try {
                var z = P.lookupPath(h, { follow: !(_ & 131072) });
                l = z.node;
              } catch {
              }
            }
            var R = false;
            if (_ & 64) if (l) {
              if (_ & 128) throw new P.ErrnoError(j.EEXIST);
            } else l = P.mknod(h, y, 0), R = true;
            if (!l) throw new P.ErrnoError(j.ENOENT);
            if (P.isChrdev(l.mode) && (_ &= -513), _ & 65536 && !P.isDir(l.mode)) throw new P.ErrnoError(j.ENOTDIR);
            if (!R) {
              var q = P.mayOpen(l, _);
              if (q) throw new P.ErrnoError(q);
            }
            _ & 512 && P.truncate(l, 0), _ &= -641;
            var J = P.createStream({ node: l, path: P.getPath(l), flags: _, seekable: true, position: 0, stream_ops: l.stream_ops, ungotten: [], error: false }, A, e);
            J.stream_ops.open && J.stream_ops.open(J), N.logReadFiles && !(_ & 1) && (P.readFiles || (P.readFiles = {}), h in P.readFiles || (P.readFiles[h] = 1, N.printErr("read file: " + h)));
            try {
              if (P.trackingDelegate.onOpenFile) {
                var o1 = 0;
                (_ & 2097155) !== 1 && (o1 |= P.tracking.openFlags.READ), (_ & 2097155) !== 0 && (o1 |= P.tracking.openFlags.WRITE), P.trackingDelegate.onOpenFile(h, o1);
              }
            } catch (C) {
              console.log("FS.trackingDelegate['onOpenFile']('" + h + "', flags) threw an exception: " + C.message);
            }
            return J;
          }), close: (function(h) {
            h.getdents && (h.getdents = null);
            try {
              h.stream_ops.close && h.stream_ops.close(h);
            } catch (_) {
              throw _;
            } finally {
              P.closeStream(h.fd);
            }
          }), llseek: (function(h, _, y) {
            if (!h.seekable || !h.stream_ops.llseek) throw new P.ErrnoError(j.ESPIPE);
            return h.position = h.stream_ops.llseek(h, _, y), h.ungotten = [], h.position;
          }), read: (function(h, _, y, A, e) {
            if (A < 0 || e < 0) throw new P.ErrnoError(j.EINVAL);
            if ((h.flags & 2097155) === 1) throw new P.ErrnoError(j.EBADF);
            if (P.isDir(h.node.mode)) throw new P.ErrnoError(j.EISDIR);
            if (!h.stream_ops.read) throw new P.ErrnoError(j.EINVAL);
            var l = true;
            if (typeof e > "u") e = h.position, l = false;
            else if (!h.seekable) throw new P.ErrnoError(j.ESPIPE);
            var z = h.stream_ops.read(h, _, y, A, e);
            return l || (h.position += z), z;
          }), write: (function(h, _, y, A, e, l) {
            if (A < 0 || e < 0) throw new P.ErrnoError(j.EINVAL);
            if ((h.flags & 2097155) === 0) throw new P.ErrnoError(j.EBADF);
            if (P.isDir(h.node.mode)) throw new P.ErrnoError(j.EISDIR);
            if (!h.stream_ops.write) throw new P.ErrnoError(j.EINVAL);
            h.flags & 1024 && P.llseek(h, 0, 2);
            var z = true;
            if (typeof e > "u") e = h.position, z = false;
            else if (!h.seekable) throw new P.ErrnoError(j.ESPIPE);
            var R = h.stream_ops.write(h, _, y, A, e, l);
            z || (h.position += R);
            try {
              h.path && P.trackingDelegate.onWriteToFile && P.trackingDelegate.onWriteToFile(h.path);
            } catch (q) {
              console.log("FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + q.message);
            }
            return R;
          }), allocate: (function(h, _, y) {
            if (_ < 0 || y <= 0) throw new P.ErrnoError(j.EINVAL);
            if ((h.flags & 2097155) === 0) throw new P.ErrnoError(j.EBADF);
            if (!P.isFile(h.node.mode) && !P.isDir(node.mode)) throw new P.ErrnoError(j.ENODEV);
            if (!h.stream_ops.allocate) throw new P.ErrnoError(j.EOPNOTSUPP);
            h.stream_ops.allocate(h, _, y);
          }), mmap: (function(h, _, y, A, e, l, z) {
            if ((h.flags & 2097155) === 1) throw new P.ErrnoError(j.EACCES);
            if (!h.stream_ops.mmap) throw new P.ErrnoError(j.ENODEV);
            return h.stream_ops.mmap(h, _, y, A, e, l, z);
          }), msync: (function(h, _, y, A, e) {
            return !h || !h.stream_ops.msync ? 0 : h.stream_ops.msync(h, _, y, A, e);
          }), munmap: (function(h) {
            return 0;
          }), ioctl: (function(h, _, y) {
            if (!h.stream_ops.ioctl) throw new P.ErrnoError(j.ENOTTY);
            return h.stream_ops.ioctl(h, _, y);
          }), readFile: (function(h, _) {
            if (_ = _ || {}, _.flags = _.flags || "r", _.encoding = _.encoding || "binary", _.encoding !== "utf8" && _.encoding !== "binary") throw new Error('Invalid encoding type "' + _.encoding + '"');
            var y, A = P.open(h, _.flags), e = P.stat(h), l = e.size, z = new Uint8Array(l);
            return P.read(A, z, 0, l, 0), _.encoding === "utf8" ? y = B2(z, 0) : _.encoding === "binary" && (y = z), P.close(A), y;
          }), writeFile: (function(h, _, y) {
            if (y = y || {}, y.flags = y.flags || "w", y.encoding = y.encoding || "utf8", y.encoding !== "utf8" && y.encoding !== "binary") throw new Error('Invalid encoding type "' + y.encoding + '"');
            var A = P.open(h, y.flags, y.mode);
            if (y.encoding === "utf8") {
              var e = new Uint8Array(x5(_) + 1), l = E5(_, e, 0, e.length);
              P.write(A, e, 0, l, 0, y.canOwn);
            } else y.encoding === "binary" && P.write(A, _, 0, _.length, 0, y.canOwn);
            P.close(A);
          }), cwd: (function() {
            return P.currentPath;
          }), chdir: (function(h) {
            var _ = P.lookupPath(h, { follow: true });
            if (!P.isDir(_.node.mode)) throw new P.ErrnoError(j.ENOTDIR);
            var y = P.nodePermissions(_.node, "x");
            if (y) throw new P.ErrnoError(y);
            P.currentPath = _.path;
          }), createDefaultDirectories: (function() {
            P.mkdir("/tmp"), P.mkdir("/home"), P.mkdir("/home/web_user");
          }), createDefaultDevices: (function() {
            P.mkdir("/dev"), P.registerDevice(P.makedev(1, 3), { read: (function() {
              return 0;
            }), write: (function(y, A, e, l, z) {
              return l;
            }) }), P.mkdev("/dev/null", P.makedev(1, 3)), g2.register(P.makedev(5, 0), g2.default_tty_ops), g2.register(P.makedev(6, 0), g2.default_tty1_ops), P.mkdev("/dev/tty", P.makedev(5, 0)), P.mkdev("/dev/tty1", P.makedev(6, 0));
            var h;
            if (typeof crypto < "u") {
              var _ = new Uint8Array(1);
              h = (function() {
                return crypto.getRandomValues(_), _[0];
              });
            } else h = (function() {
              return Math.random() * 256 | 0;
            });
            P.createDevice("/dev", "random", h), P.createDevice("/dev", "urandom", h), P.mkdir("/dev/shm"), P.mkdir("/dev/shm/tmp");
          }), createSpecialDirectories: (function() {
            P.mkdir("/proc"), P.mkdir("/proc/self"), P.mkdir("/proc/self/fd"), P.mount({ mount: (function() {
              var h = P.createNode("/proc/self", "fd", 16895, 73);
              return h.node_ops = { lookup: (function(_, y) {
                var A = +y, e = P.getStream(A);
                if (!e) throw new P.ErrnoError(j.EBADF);
                var l = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: (function() {
                  return e.path;
                }) } };
                return l.parent = l, l;
              }) }, h;
            }) }, {}, "/proc/self/fd");
          }), createStandardStreams: (function() {
            N.stdin ? P.createDevice("/dev", "stdin", N.stdin) : P.symlink("/dev/tty", "/dev/stdin"), N.stdout ? P.createDevice("/dev", "stdout", null, N.stdout) : P.symlink("/dev/tty", "/dev/stdout"), N.stderr ? P.createDevice("/dev", "stderr", null, N.stderr) : P.symlink("/dev/tty1", "/dev/stderr");
            var h = P.open("/dev/stdin", "r");
            J1(h.fd === 0, "invalid handle for stdin (" + h.fd + ")");
            var _ = P.open("/dev/stdout", "w");
            J1(_.fd === 1, "invalid handle for stdout (" + _.fd + ")");
            var y = P.open("/dev/stderr", "w");
            J1(y.fd === 2, "invalid handle for stderr (" + y.fd + ")");
          }), ensureErrnoError: (function() {
            P.ErrnoError || (P.ErrnoError = function(_, y) {
              this.node = y, this.setErrno = (function(A) {
                this.errno = A;
                for (var e in j) if (j[e] === A) {
                  this.code = e;
                  break;
                }
              }), this.setErrno(_), this.message = D4[_];
            }, P.ErrnoError.prototype = new Error(), P.ErrnoError.prototype.constructor = P.ErrnoError, [j.ENOENT].forEach((function(h) {
              P.genericErrors[h] = new P.ErrnoError(h), P.genericErrors[h].stack = "<generic error, no stack>";
            })));
          }), staticInit: (function() {
            P.ensureErrnoError(), P.nameTable = new Array(4096), P.mount(L1, {}, "/"), P.createDefaultDirectories(), P.createDefaultDevices(), P.createSpecialDirectories(), P.filesystems = { MEMFS: L1, IDBFS: d0, NODEFS: {}, WORKERFS: E0 };
          }), init: (function(h, _, y) {
            J1(!P.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), P.init.initialized = true, P.ensureErrnoError(), N.stdin = h || N.stdin, N.stdout = _ || N.stdout, N.stderr = y || N.stderr, P.createStandardStreams();
          }), quit: (function() {
            P.init.initialized = false;
            var h = N._fflush;
            h && h(0);
            for (var _ = 0; _ < P.streams.length; _++) {
              var y = P.streams[_];
              y && P.close(y);
            }
          }), getMode: (function(h, _) {
            var y = 0;
            return h && (y |= 365), _ && (y |= 146), y;
          }), joinPath: (function(h, _) {
            var y = U1.join.apply(null, h);
            return _ && y[0] == "/" && (y = y.substr(1)), y;
          }), absolutePath: (function(h, _) {
            return U1.resolve(_, h);
          }), standardizePath: (function(h) {
            return U1.normalize(h);
          }), findObject: (function(h, _) {
            var y = P.analyzePath(h, _);
            return y.exists ? y.object : (c5(y.error), null);
          }), analyzePath: (function(h, _) {
            try {
              var y = P.lookupPath(h, { follow: !_ });
              h = y.path;
            } catch {
            }
            var A = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
            try {
              var y = P.lookupPath(h, { parent: true });
              A.parentExists = true, A.parentPath = y.path, A.parentObject = y.node, A.name = U1.basename(h), y = P.lookupPath(h, { follow: !_ }), A.exists = true, A.path = y.path, A.object = y.node, A.name = y.node.name, A.isRoot = y.path === "/";
            } catch (e) {
              A.error = e.errno;
            }
            return A;
          }), createFolder: (function(h, _, y, A) {
            var e = U1.join2(typeof h == "string" ? h : P.getPath(h), _), l = P.getMode(y, A);
            return P.mkdir(e, l);
          }), createPath: (function(h, _, y, A) {
            h = typeof h == "string" ? h : P.getPath(h);
            for (var e = _.split("/").reverse(); e.length; ) {
              var l = e.pop();
              if (l) {
                var z = U1.join2(h, l);
                try {
                  P.mkdir(z);
                } catch {
                }
                h = z;
              }
            }
            return z;
          }), createFile: (function(h, _, y, A, e) {
            var l = U1.join2(typeof h == "string" ? h : P.getPath(h), _), z = P.getMode(A, e);
            return P.create(l, z);
          }), createDataFile: (function(h, _, y, A, e, l) {
            var z = _ ? U1.join2(typeof h == "string" ? h : P.getPath(h), _) : h, R = P.getMode(A, e), q = P.create(z, R);
            if (y) {
              if (typeof y == "string") {
                for (var J = new Array(y.length), o1 = 0, C = y.length; o1 < C; ++o1) J[o1] = y.charCodeAt(o1);
                y = J;
              }
              P.chmod(q, R | 146);
              var n1 = P.open(q, "w");
              P.write(n1, y, 0, y.length, 0, l), P.close(n1), P.chmod(q, R);
            }
            return q;
          }), createDevice: (function(h, _, y, A) {
            var e = U1.join2(typeof h == "string" ? h : P.getPath(h), _), l = P.getMode(!!y, !!A);
            P.createDevice.major || (P.createDevice.major = 64);
            var z = P.makedev(P.createDevice.major++, 0);
            return P.registerDevice(z, { open: (function(R) {
              R.seekable = false;
            }), close: (function(R) {
              A && A.buffer && A.buffer.length && A(10);
            }), read: (function(R, q, J, o1, C) {
              for (var n1 = 0, l1 = 0; l1 < o1; l1++) {
                var v1;
                try {
                  v1 = y();
                } catch {
                  throw new P.ErrnoError(j.EIO);
                }
                if (v1 === void 0 && n1 === 0) throw new P.ErrnoError(j.EAGAIN);
                if (v1 == null) break;
                n1++, q[J + l1] = v1;
              }
              return n1 && (R.node.timestamp = Date.now()), n1;
            }), write: (function(R, q, J, o1, C) {
              for (var n1 = 0; n1 < o1; n1++) try {
                A(q[J + n1]);
              } catch {
                throw new P.ErrnoError(j.EIO);
              }
              return o1 && (R.node.timestamp = Date.now()), n1;
            }) }), P.mkdev(e, l, z);
          }), createLink: (function(h, _, y, A, e) {
            var l = U1.join2(typeof h == "string" ? h : P.getPath(h), _);
            return P.symlink(y, l);
          }), forceLoadFile: (function(h) {
            if (h.isDevice || h.isFolder || h.link || h.contents) return true;
            var _ = true;
            if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
            if (N.read) try {
              h.contents = V2(N.read(h.url), true), h.usedBytes = h.contents.length;
            } catch {
              _ = false;
            }
            else throw new Error("Cannot load without read() or XMLHttpRequest.");
            return _ || c5(j.EIO), _;
          }), createLazyFile: (function(h, _, y, A, e) {
            function l() {
              this.lengthKnown = false, this.chunks = [];
            }
            if (l.prototype.get = function(n1) {
              if (!(n1 > this.length - 1 || n1 < 0)) {
                var l1 = n1 % this.chunkSize, v1 = n1 / this.chunkSize | 0;
                return this.getter(v1)[l1];
              }
            }, l.prototype.setDataGetter = function(n1) {
              this.getter = n1;
            }, l.prototype.cacheLength = function() {
              var n1 = new XMLHttpRequest();
              if (n1.open("HEAD", y, false), n1.send(null), !(n1.status >= 200 && n1.status < 300 || n1.status === 304)) throw new Error("Couldn't load " + y + ". Status: " + n1.status);
              var l1 = Number(n1.getResponseHeader("Content-length")), v1, I1 = (v1 = n1.getResponseHeader("Accept-Ranges")) && v1 === "bytes", W1 = 1024 * 1024;
              I1 || (W1 = l1);
              var b0 = (function(z1, g0) {
                if (z1 > g0) throw new Error("invalid range (" + z1 + ", " + g0 + ") or no bytes requested!");
                if (g0 > l1 - 1) throw new Error("only " + l1 + " bytes available! programmer error!");
                var i0 = new XMLHttpRequest();
                if (i0.open("GET", y, false), l1 !== W1 && i0.setRequestHeader("Range", "bytes=" + z1 + "-" + g0), typeof Uint8Array < "u" && (i0.responseType = "arraybuffer"), i0.overrideMimeType && i0.overrideMimeType("text/plain; charset=x-user-defined"), i0.send(null), !(i0.status >= 200 && i0.status < 300 || i0.status === 304)) throw new Error("Couldn't load " + y + ". Status: " + i0.status);
                return i0.response !== void 0 ? new Uint8Array(i0.response || []) : V2(i0.responseText || "", true);
              }), a0 = this;
              a0.setDataGetter((function(z1) {
                var g0 = z1 * W1, i0 = (z1 + 1) * W1 - 1;
                if (i0 = Math.min(i0, l1 - 1), typeof a0.chunks[z1] > "u" && (a0.chunks[z1] = b0(g0, i0)), typeof a0.chunks[z1] > "u") throw new Error("doXHR failed!");
                return a0.chunks[z1];
              })), this._length = l1, this._chunkSize = W1, this.lengthKnown = true;
            }, typeof XMLHttpRequest < "u") {
              if (!g1) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
              var z = new l();
              Object.defineProperty(z, "length", { get: (function() {
                return this.lengthKnown || this.cacheLength(), this._length;
              }) }), Object.defineProperty(z, "chunkSize", { get: (function() {
                return this.lengthKnown || this.cacheLength(), this._chunkSize;
              }) });
              var R = { isDevice: false, contents: z };
            } else var R = { isDevice: false, url: y };
            var q = P.createFile(h, _, R, A, e);
            R.contents ? q.contents = R.contents : R.url && (q.contents = null, q.url = R.url), Object.defineProperty(q, "usedBytes", { get: (function() {
              return this.contents.length;
            }) });
            var J = {}, o1 = Object.keys(q.stream_ops);
            return o1.forEach((function(C) {
              var n1 = q.stream_ops[C];
              J[C] = function() {
                if (!P.forceLoadFile(q)) throw new P.ErrnoError(j.EIO);
                return n1.apply(null, arguments);
              };
            })), J.read = function(n1, l1, v1, I1, W1) {
              if (!P.forceLoadFile(q)) throw new P.ErrnoError(j.EIO);
              var b0 = n1.node.contents;
              if (W1 >= b0.length) return 0;
              var a0 = Math.min(b0.length - W1, I1);
              if (J1(a0 >= 0), b0.slice) for (var z1 = 0; z1 < a0; z1++) l1[v1 + z1] = b0[W1 + z1];
              else for (var z1 = 0; z1 < a0; z1++) l1[v1 + z1] = b0.get(W1 + z1);
              return a0;
            }, q.stream_ops = J, q;
          }), createPreloadedFile: (function(h, _, y, A, e, l, z, R, q, J) {
            X.init();
            var o1 = _ ? U1.resolve(U1.join2(h, _)) : h;
            function C(n1) {
              function l1(I1) {
                J && J(), R || P.createDataFile(h, _, I1, A, e, q), l && l(), S5();
              }
              var v1 = false;
              N.preloadPlugins.forEach((function(I1) {
                v1 || I1.canHandle(o1) && (I1.handle(n1, o1, l1, (function() {
                  z && z(), S5();
                })), v1 = true);
              })), v1 || l1(n1);
            }
            K5(), typeof y == "string" ? X.asyncLoad(y, (function(n1) {
              C(n1);
            }), z) : C(y);
          }), indexedDB: (function() {
            return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
          }), DB_NAME: (function() {
            return "EM_FS_" + window.location.pathname;
          }), DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: (function(h, _, y) {
            _ = _ || (function() {
            }), y = y || (function() {
            });
            var A = P.indexedDB();
            try {
              var e = A.open(P.DB_NAME(), P.DB_VERSION);
            } catch (l) {
              return y(l);
            }
            e.onupgradeneeded = function() {
              console.log("creating db");
              var z = e.result;
              z.createObjectStore(P.DB_STORE_NAME);
            }, e.onsuccess = function() {
              var z = e.result, R = z.transaction([P.DB_STORE_NAME], "readwrite"), q = R.objectStore(P.DB_STORE_NAME), J = 0, o1 = 0, C = h.length;
              function n1() {
                o1 == 0 ? _() : y();
              }
              h.forEach((function(l1) {
                var v1 = q.put(P.analyzePath(l1).object.contents, l1);
                v1.onsuccess = function() {
                  J++, J + o1 == C && n1();
                }, v1.onerror = function() {
                  o1++, J + o1 == C && n1();
                };
              })), R.onerror = y;
            }, e.onerror = y;
          }), loadFilesFromDB: (function(h, _, y) {
            _ = _ || (function() {
            }), y = y || (function() {
            });
            var A = P.indexedDB();
            try {
              var e = A.open(P.DB_NAME(), P.DB_VERSION);
            } catch (l) {
              return y(l);
            }
            e.onupgradeneeded = y, e.onsuccess = function() {
              var z = e.result;
              try {
                var R = z.transaction([P.DB_STORE_NAME], "readonly");
              } catch (l1) {
                y(l1);
                return;
              }
              var q = R.objectStore(P.DB_STORE_NAME), J = 0, o1 = 0, C = h.length;
              function n1() {
                o1 == 0 ? _() : y();
              }
              h.forEach((function(l1) {
                var v1 = q.get(l1);
                v1.onsuccess = function() {
                  P.analyzePath(l1).exists && P.unlink(l1), P.createDataFile(U1.dirname(l1), U1.basename(l1), v1.result, true, true, true), J++, J + o1 == C && n1();
                }, v1.onerror = function() {
                  o1++, J + o1 == C && n1();
                };
              })), R.onerror = y;
            }, e.onerror = y;
          }) }, U1 = { splitPath: (function(h) {
            var _ = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            return _.exec(h).slice(1);
          }), normalizeArray: (function(h, _) {
            for (var y = 0, A = h.length - 1; A >= 0; A--) {
              var e = h[A];
              e === "." ? h.splice(A, 1) : e === ".." ? (h.splice(A, 1), y++) : y && (h.splice(A, 1), y--);
            }
            if (_) for (; y--; y) h.unshift("..");
            return h;
          }), normalize: (function(h) {
            var _ = h.charAt(0) === "/", y = h.substr(-1) === "/";
            return h = U1.normalizeArray(h.split("/").filter((function(A) {
              return !!A;
            })), !_).join("/"), !h && !_ && (h = "."), h && y && (h += "/"), (_ ? "/" : "") + h;
          }), dirname: (function(h) {
            var _ = U1.splitPath(h), y = _[0], A = _[1];
            return !y && !A ? "." : (A && (A = A.substr(0, A.length - 1)), y + A);
          }), basename: (function(h) {
            if (h === "/") return "/";
            var _ = h.lastIndexOf("/");
            return _ === -1 ? h : h.substr(_ + 1);
          }), extname: (function(h) {
            return U1.splitPath(h)[3];
          }), join: (function() {
            var h = Array.prototype.slice.call(arguments, 0);
            return U1.normalize(h.join("/"));
          }), join2: (function(h, _) {
            return U1.normalize(h + "/" + _);
          }), resolve: (function() {
            for (var h = "", _ = false, y = arguments.length - 1; y >= -1 && !_; y--) {
              var A = y >= 0 ? arguments[y] : P.cwd();
              if (typeof A != "string") throw new TypeError("Arguments to path.resolve must be strings");
              if (!A) return "";
              h = A + "/" + h, _ = A.charAt(0) === "/";
            }
            return h = U1.normalizeArray(h.split("/").filter((function(e) {
              return !!e;
            })), !_).join("/"), (_ ? "/" : "") + h || ".";
          }), relative: (function(h, _) {
            h = U1.resolve(h).substr(1), _ = U1.resolve(_).substr(1);
            function y(J) {
              for (var o1 = 0; o1 < J.length && J[o1] === ""; o1++) ;
              for (var C = J.length - 1; C >= 0 && J[C] === ""; C--) ;
              return o1 > C ? [] : J.slice(o1, C - o1 + 1);
            }
            for (var A = y(h.split("/")), e = y(_.split("/")), l = Math.min(A.length, e.length), z = l, R = 0; R < l; R++) if (A[R] !== e[R]) {
              z = R;
              break;
            }
            for (var q = [], R = z; R < A.length; R++) q.push("..");
            return q = q.concat(e.slice(z)), q.join("/");
          }) };
          function M5(h, _) {
            if (X.mainLoop.timingMode = h, X.mainLoop.timingValue = _, !X.mainLoop.func) return 1;
            if (h == 0) X.mainLoop.scheduler = function() {
              setTimeout(X.mainLoop.runner, _);
            }, X.mainLoop.method = "timeout";
            else if (h == 1) X.mainLoop.scheduler = function() {
              X.requestAnimationFrame(X.mainLoop.runner);
            }, X.mainLoop.method = "rAF";
            else if (h == 2) {
              if (!window.setImmediate) {
                let e = function(l) {
                  l.source === window && l.data === A && (l.stopPropagation(), y.shift()());
                };
                var y = [], A = "__emcc";
                window.addEventListener("message", e, true), window.setImmediate = function(z) {
                  y.push(z), window.postMessage(A, "*");
                };
              }
              X.mainLoop.scheduler = function() {
                window.setImmediate(X.mainLoop.runner);
              }, X.mainLoop.method = "immediate";
            }
            return 0;
          }
          function ze(h, _, y, A, e) {
            N.noExitRuntime = true, J1(!X.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), X.mainLoop.func = h, X.mainLoop.arg = A;
            var l = X.mainLoop.currentlyRunningMainloop;
            if (X.mainLoop.runner = function() {
              if (!P0) {
                if (X.mainLoop.queue.length > 0) {
                  var R = Date.now(), q = X.mainLoop.queue.shift();
                  if (q.func(q.arg), X.mainLoop.remainingBlockers) {
                    var J = X.mainLoop.remainingBlockers, o1 = J % 1 == 0 ? J - 1 : Math.floor(J);
                    q.counted ? X.mainLoop.remainingBlockers = o1 : (o1 = o1 + 0.5, X.mainLoop.remainingBlockers = (8 * J + o1) / 9);
                  }
                  console.log('main loop blocker "' + q.name + '" took ' + (Date.now() - R) + " ms"), X.mainLoop.updateStatus(), setTimeout(X.mainLoop.runner, 0);
                  return;
                }
                if (!(l < X.mainLoop.currentlyRunningMainloop)) {
                  if (X.mainLoop.currentFrameNumber = X.mainLoop.currentFrameNumber + 1 | 0, X.mainLoop.timingMode == 1 && X.mainLoop.timingValue > 1 && X.mainLoop.currentFrameNumber % X.mainLoop.timingValue != 0) {
                    X.mainLoop.scheduler();
                    return;
                  }
                  X.mainLoop.method === "timeout" && N.ctx && (N.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), X.mainLoop.method = ""), X.mainLoop.runIter((function() {
                    typeof A < "u" ? y1.dynCall("vi", h, [A]) : y1.dynCall("v", h);
                  })), !(l < X.mainLoop.currentlyRunningMainloop) && (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), X.mainLoop.scheduler());
                }
              }
            }, e || (_ && _ > 0 ? M5(0, 1e3 / _) : M5(1, 1), X.mainLoop.scheduler()), y) throw "SimulateInfiniteLoop";
          }
          var X = { mainLoop: { scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: (function() {
            X.mainLoop.scheduler = null, X.mainLoop.currentlyRunningMainloop++;
          }), resume: (function() {
            X.mainLoop.currentlyRunningMainloop++;
            var h = X.mainLoop.timingMode, _ = X.mainLoop.timingValue, y = X.mainLoop.func;
            X.mainLoop.func = null, ze(y, 0, false, X.mainLoop.arg, true), M5(h, _), X.mainLoop.scheduler();
          }), updateStatus: (function() {
            if (N.setStatus) {
              var h = N.statusMessage || "Please wait...", _ = X.mainLoop.remainingBlockers, y = X.mainLoop.expectedBlockers;
              _ ? _ < y ? N.setStatus(h + " (" + (y - _) + "/" + y + ")") : N.setStatus(h) : N.setStatus("");
            }
          }), runIter: (function(h) {
            if (!P0) {
              if (N.preMainLoop) {
                var _ = N.preMainLoop();
                if (_ === false) return;
              }
              try {
                h();
              } catch (y) {
                if (y instanceof $2) return;
                throw y && typeof y == "object" && y.stack && N.printErr("exception thrown: " + [y, y.stack]), y;
              }
              N.postMainLoop && N.postMainLoop();
            }
          }) }, isFullScreen: false, pointerLock: false, moduleContextCreatedCallbacks: [], workers: [], init: (function() {
            if (N.preloadPlugins || (N.preloadPlugins = []), X.initted) return;
            X.initted = true;
            try {
              new Blob(), X.hasBlobConstructor = true;
            } catch {
              X.hasBlobConstructor = false, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
            }
            X.BlobBuilder = typeof MozBlobBuilder < "u" ? MozBlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : X.hasBlobConstructor ? null : console.log("warning: no BlobBuilder"), X.URLObject = typeof window < "u" ? window.URL ? window.URL : window.webkitURL : void 0, !N.noImageDecoding && typeof X.URLObject > "u" && (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), N.noImageDecoding = true);
            var h = {};
            h.canHandle = function(l) {
              return !N.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(l);
            }, h.handle = function(l, z, R, q) {
              var J = null;
              if (X.hasBlobConstructor) try {
                J = new Blob([l], { type: X.getMimetype(z) }), J.size !== l.length && (J = new Blob([new Uint8Array(l).buffer], { type: X.getMimetype(z) }));
              } catch (l1) {
                y1.warnOnce("Blob constructor present but fails: " + l1 + "; falling back to blob builder");
              }
              if (!J) {
                var o1 = new X.BlobBuilder();
                o1.append(new Uint8Array(l).buffer), J = o1.getBlob();
              }
              var C = X.URLObject.createObjectURL(J), n1 = new Image();
              n1.onload = function() {
                J1(n1.complete, "Image " + z + " could not be decoded");
                var v1 = document.createElement("canvas");
                v1.width = n1.width, v1.height = n1.height;
                var I1 = v1.getContext("2d");
                I1.drawImage(n1, 0, 0), N.preloadedImages[z] = v1, X.URLObject.revokeObjectURL(C), R && R(l);
              }, n1.onerror = function(v1) {
                console.log("Image " + C + " could not be decoded"), q && q();
              }, n1.src = C;
            }, N.preloadPlugins.push(h);
            var _ = {};
            _.canHandle = function(l) {
              return !N.noAudioDecoding && l.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
            }, _.handle = function(l, z, R, q) {
              var J = false;
              function o1(I1) {
                J || (J = true, N.preloadedAudios[z] = I1, R && R(l));
              }
              function C() {
                J || (J = true, N.preloadedAudios[z] = new Audio(), q && q());
              }
              if (X.hasBlobConstructor) {
                try {
                  var n1 = new Blob([l], { type: X.getMimetype(z) });
                } catch {
                  return C();
                }
                var l1 = X.URLObject.createObjectURL(n1), v1 = new Audio();
                v1.addEventListener("canplaythrough", (function() {
                  o1(v1);
                }), false), v1.onerror = function(W1) {
                  if (J) return;
                  console.log("warning: browser could not fully decode audio " + z + ", trying slower base64 approach");
                  function b0(a0) {
                    for (var z1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", g0 = "=", i0 = "", v2 = 0, Z0 = 0, j2 = 0; j2 < a0.length; j2++) for (v2 = v2 << 8 | a0[j2], Z0 += 8; Z0 >= 6; ) {
                      var He = v2 >> Z0 - 6 & 63;
                      Z0 -= 6, i0 += z1[He];
                    }
                    return Z0 == 2 ? (i0 += z1[(v2 & 3) << 4], i0 += g0 + g0) : Z0 == 4 && (i0 += z1[(v2 & 15) << 2], i0 += g0), i0;
                  }
                  v1.src = "data:audio/x-" + z.substr(-3) + ";base64," + b0(l), o1(v1);
                }, v1.src = l1, X.safeSetTimeout((function() {
                  o1(v1);
                }), 1e4);
              } else return C();
            }, N.preloadPlugins.push(_);
            var y = N.canvas;
            function A() {
              X.pointerLock = document.pointerLockElement === y || document.mozPointerLockElement === y || document.webkitPointerLockElement === y || document.msPointerLockElement === y;
            }
            y && (y.requestPointerLock = y.requestPointerLock || y.mozRequestPointerLock || y.webkitRequestPointerLock || y.msRequestPointerLock || (function() {
            }), y.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (function() {
            }), y.exitPointerLock = y.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", A, false), document.addEventListener("mozpointerlockchange", A, false), document.addEventListener("webkitpointerlockchange", A, false), document.addEventListener("mspointerlockchange", A, false), N.elementPointerLock && y.addEventListener("click", (function(e) {
              !X.pointerLock && y.requestPointerLock && (y.requestPointerLock(), e.preventDefault());
            }), false));
          }), createContext: (function(h, _, y, A) {
            if (_ && N.ctx && h == N.canvas) return N.ctx;
            var e, l;
            if (_) {
              var z = { antialias: false, alpha: false };
              if (A) for (var R in A) z[R] = A[R];
              l = GL.createContext(h, z), l && (e = GL.getContext(l).GLctx), h.style.backgroundColor = "black";
            } else e = h.getContext("2d");
            return e ? (y && (_ || J1(typeof GLctx > "u", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), N.ctx = e, _ && GL.makeContextCurrent(l), N.useWebGL = _, X.moduleContextCreatedCallbacks.forEach((function(q) {
              q();
            })), X.init()), e) : null;
          }), destroyContext: (function(h, _, y) {
          }), fullScreenHandlersInstalled: false, lockPointer: void 0, resizeCanvas: void 0, requestFullScreen: (function(h, _, y) {
            X.lockPointer = h, X.resizeCanvas = _, X.vrDevice = y, typeof X.lockPointer > "u" && (X.lockPointer = true), typeof X.resizeCanvas > "u" && (X.resizeCanvas = false), typeof X.vrDevice > "u" && (X.vrDevice = null);
            var A = N.canvas;
            function e() {
              X.isFullScreen = false;
              var z = A.parentNode;
              (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === z ? (A.cancelFullScreen = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen || document.exitFullscreen || (function() {
              }), A.cancelFullScreen = A.cancelFullScreen.bind(document), X.lockPointer && A.requestPointerLock(), X.isFullScreen = true, X.resizeCanvas && X.setFullScreenCanvasSize()) : (z.parentNode.insertBefore(A, z), z.parentNode.removeChild(z), X.resizeCanvas && X.setWindowedCanvasSize()), N.onFullScreen && N.onFullScreen(X.isFullScreen), X.updateCanvasDimensions(A);
            }
            X.fullScreenHandlersInstalled || (X.fullScreenHandlersInstalled = true, document.addEventListener("fullscreenchange", e, false), document.addEventListener("mozfullscreenchange", e, false), document.addEventListener("webkitfullscreenchange", e, false), document.addEventListener("MSFullscreenChange", e, false));
            var l = document.createElement("div");
            A.parentNode.insertBefore(l, A), l.appendChild(A), l.requestFullScreen = l.requestFullScreen || l.mozRequestFullScreen || l.msRequestFullscreen || (l.webkitRequestFullScreen ? (function() {
              l.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }) : null), y ? l.requestFullScreen({ vrDisplay: y }) : l.requestFullScreen();
          }), nextRAF: 0, fakeRequestAnimationFrame: (function(h) {
            var _ = Date.now();
            if (X.nextRAF === 0) X.nextRAF = _ + 1e3 / 60;
            else for (; _ + 2 >= X.nextRAF; ) X.nextRAF += 1e3 / 60;
            var y = Math.max(X.nextRAF - _, 0);
            setTimeout(h, y);
          }), requestAnimationFrame: function(_) {
            typeof window > "u" ? X.fakeRequestAnimationFrame(_) : (window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || X.fakeRequestAnimationFrame), window.requestAnimationFrame(_));
          }, safeCallback: (function(h) {
            return (function() {
              if (!P0) return h.apply(null, arguments);
            });
          }), allowAsyncCallbacks: true, queuedAsyncCallbacks: [], pauseAsyncCallbacks: (function() {
            X.allowAsyncCallbacks = false;
          }), resumeAsyncCallbacks: (function() {
            if (X.allowAsyncCallbacks = true, X.queuedAsyncCallbacks.length > 0) {
              var h = X.queuedAsyncCallbacks;
              X.queuedAsyncCallbacks = [], h.forEach((function(_) {
                _();
              }));
            }
          }), safeRequestAnimationFrame: (function(h) {
            return X.requestAnimationFrame((function() {
              P0 || (X.allowAsyncCallbacks ? h() : X.queuedAsyncCallbacks.push(h));
            }));
          }), safeSetTimeout: (function(h, _) {
            return N.noExitRuntime = true, setTimeout((function() {
              P0 || (X.allowAsyncCallbacks ? h() : X.queuedAsyncCallbacks.push(h));
            }), _);
          }), safeSetInterval: (function(h, _) {
            return N.noExitRuntime = true, setInterval((function() {
              P0 || X.allowAsyncCallbacks && h();
            }), _);
          }), getMimetype: (function(h) {
            return { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg" }[h.substr(h.lastIndexOf(".") + 1)];
          }), getUserMedia: (function(h) {
            window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(h);
          }), getMovementX: (function(h) {
            return h.movementX || h.mozMovementX || h.webkitMovementX || 0;
          }), getMovementY: (function(h) {
            return h.movementY || h.mozMovementY || h.webkitMovementY || 0;
          }), getMouseWheelDelta: (function(h) {
            var _ = 0;
            switch (h.type) {
              case "DOMMouseScroll":
                _ = h.detail;
                break;
              case "mousewheel":
                _ = h.wheelDelta;
                break;
              case "wheel":
                _ = h.deltaY;
                break;
              default:
                throw "unrecognized mouse wheel event: " + h.type;
            }
            return _;
          }), mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: (function(h) {
            if (X.pointerLock) h.type != "mousemove" && "mozMovementX" in h ? X.mouseMovementX = X.mouseMovementY = 0 : (X.mouseMovementX = X.getMovementX(h), X.mouseMovementY = X.getMovementY(h)), typeof SDL < "u" ? (X.mouseX = SDL.mouseX + X.mouseMovementX, X.mouseY = SDL.mouseY + X.mouseMovementY) : (X.mouseX += X.mouseMovementX, X.mouseY += X.mouseMovementY);
            else {
              var _ = N.canvas.getBoundingClientRect(), y = N.canvas.width, A = N.canvas.height, e = typeof window.scrollX < "u" ? window.scrollX : window.pageXOffset, l = typeof window.scrollY < "u" ? window.scrollY : window.pageYOffset;
              if (h.type === "touchstart" || h.type === "touchend" || h.type === "touchmove") {
                var z = h.touch;
                if (z === void 0) return;
                var R = z.pageX - (e + _.left), q = z.pageY - (l + _.top);
                R = R * (y / _.width), q = q * (A / _.height);
                var J = { x: R, y: q };
                if (h.type === "touchstart") X.lastTouches[z.identifier] = J, X.touches[z.identifier] = J;
                else if (h.type === "touchend" || h.type === "touchmove") {
                  var o1 = X.touches[z.identifier];
                  o1 || (o1 = J), X.lastTouches[z.identifier] = o1, X.touches[z.identifier] = J;
                }
                return;
              }
              var C = h.pageX - (e + _.left), n1 = h.pageY - (l + _.top);
              C = C * (y / _.width), n1 = n1 * (A / _.height), X.mouseMovementX = C - X.mouseX, X.mouseMovementY = n1 - X.mouseY, X.mouseX = C, X.mouseY = n1;
            }
          }), xhrLoad: (function(h, _, y) {
            var A = new XMLHttpRequest();
            A.open("GET", h, true), A.responseType = "arraybuffer", A.onload = function() {
              A.status == 200 || A.status == 0 && A.response ? _(A.response) : y();
            }, A.onerror = y, A.send(null);
          }), asyncLoad: (function(h, _, y, A) {
            X.xhrLoad(h, (function(e) {
              J1(e, 'Loading data file "' + h + '" failed (no arrayBuffer).'), _(new Uint8Array(e)), A || S5();
            }), (function(e) {
              if (y) y();
              else throw 'Loading data file "' + h + '" failed.';
            })), A || K5();
          }), resizeListeners: [], updateResizeListeners: (function() {
            var h = N.canvas;
            X.resizeListeners.forEach((function(_) {
              _(h.width, h.height);
            }));
          }), setCanvasSize: (function(h, _, y) {
            var A = N.canvas;
            X.updateCanvasDimensions(A, h, _), y || X.updateResizeListeners();
          }), windowedWidth: 0, windowedHeight: 0, setFullScreenCanvasSize: (function() {
            if (typeof SDL < "u") {
              var h = y5[SDL.screen + y1.QUANTUM_SIZE * 0 >> 2];
              h = h | 8388608, V0[SDL.screen + y1.QUANTUM_SIZE * 0 >> 2] = h;
            }
            X.updateResizeListeners();
          }), setWindowedCanvasSize: (function() {
            if (typeof SDL < "u") {
              var h = y5[SDL.screen + y1.QUANTUM_SIZE * 0 >> 2];
              h = h & -8388609, V0[SDL.screen + y1.QUANTUM_SIZE * 0 >> 2] = h;
            }
            X.updateResizeListeners();
          }), updateCanvasDimensions: (function(h, _, y) {
            _ && y ? (h.widthNative = _, h.heightNative = y) : (_ = h.widthNative, y = h.heightNative);
            var A = _, e = y;
            if (N.forcedAspectRatio && N.forcedAspectRatio > 0 && (A / e < N.forcedAspectRatio ? A = Math.round(e * N.forcedAspectRatio) : e = Math.round(A / N.forcedAspectRatio)), (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === h.parentNode && typeof screen < "u") {
              var l = Math.min(screen.width / A, screen.height / e);
              A = Math.round(A * l), e = Math.round(e * l);
            }
            X.resizeCanvas ? (h.width != A && (h.width = A), h.height != e && (h.height = e), typeof h.style < "u" && (h.style.removeProperty("width"), h.style.removeProperty("height"))) : (h.width != _ && (h.width = _), h.height != y && (h.height = y), typeof h.style < "u" && (A != _ || e != y ? (h.style.setProperty("width", A + "px", "important"), h.style.setProperty("height", e + "px", "important")) : (h.style.removeProperty("width"), h.style.removeProperty("height"))));
          }), wgetRequests: {}, nextWgetRequestHandle: 0, getNextWgetRequestHandle: (function() {
            var h = X.nextWgetRequestHandle;
            return X.nextWgetRequestHandle++, h;
          }) };
          function M4(h) {
            var _ = Date.now() / 1e3 | 0;
            return h && (V0[h >> 2] = _), _;
          }
          function T4() {
            return 0;
          }
          N.requestFullScreen = function(_, y, A) {
            X.requestFullScreen(_, y, A);
          }, N.requestAnimationFrame = function(_) {
            X.requestAnimationFrame(_);
          }, N.setCanvasSize = function(_, y, A) {
            X.setCanvasSize(_, y, A);
          }, N.pauseMainLoop = function() {
            X.mainLoop.pause();
          }, N.resumeMainLoop = function() {
            X.mainLoop.resume();
          }, N.getUserMedia = function() {
            X.getUserMedia();
          }, N.createContext = function(_, y, A, e) {
            return X.createContext(_, y, A, e);
          }, P.staticInit(), a5.unshift((function() {
            !N.noFSInit && !P.init.initialized && P.init();
          })), G5.push((function() {
            P.ignorePermissions = false;
          })), R5.push((function() {
            P.quit();
          })), N.FS_createFolder = P.createFolder, N.FS_createPath = P.createPath, N.FS_createDataFile = P.createDataFile, N.FS_createPreloadedFile = P.createPreloadedFile, N.FS_createLazyFile = P.createLazyFile, N.FS_createLink = P.createLink, N.FS_createDevice = P.createDevice, N.FS_unlink = P.unlink, a5.unshift((function() {
          })), R5.push((function() {
          })), Ce = d2 = y1.alignMemory(z2), Te = true, g5 = Ce + H5, Pe = m2 = y1.alignMemory(g5), J1(Pe < x2, "TOTAL_MEMORY not big enough for stack"), N.asmGlobalArg = { Math, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Float32Array, Float64Array, NaN: NaN, Infinity: 1 / 0 }, N.asmLibraryArg = { abort: H2, assert: J1, _sysconf: A4, _pthread_self: T4, _abort: S4, ___setErrNo: c5, _sbrk: D5, _time: M4, _emscripten_set_main_loop_timing: M5, _emscripten_memcpy_big: R4, _emscripten_set_main_loop: ze, STACKTOP: d2, STACK_MAX: g5, tempDoublePtr: Ue, ABORT: P0 };
          var y0 = (function(h, _, y) {
            var A = new h.Int8Array(y), e = new h.Int16Array(y), l = new h.Int32Array(y), z = new h.Uint8Array(y), R = new h.Uint16Array(y), q = new h.Uint32Array(y), J = new h.Float32Array(y), o1 = new h.Float64Array(y), C = _.STACKTOP | 0, n1 = _.STACK_MAX | 0, l1 = _.tempDoublePtr | 0, v1 = _.ABORT | 0, I1 = 0, W1 = 0, b0 = 0, a0 = 0, z1 = h.NaN, g0 = h.Infinity, i0 = 0, v2 = 0, Z0 = 0, j2 = 0, He = 0, st = 0, lt = 0, ut = 0, at = 0, We = 0, ft = 0, ct = 0, wt = 0, mt = 0, pt = 0, vt = 0, ht = 0, dt = 0, bt = 0, _t = h.Math.floor, Et = h.Math.abs, yt = h.Math.sqrt, kt = h.Math.pow, At = h.Math.cos, Rt = h.Math.sin, St = h.Math.tan, Dt = h.Math.acos, Mt = h.Math.asin, Tt = h.Math.atan, Ct = h.Math.atan2, Pt = h.Math.exp, It = h.Math.log, Ot = h.Math.ceil, k = h.Math.imul, Lt = h.Math.min, Nt = h.Math.clz32, Ft = _.abort, Bt = _.assert, O4 = _._sysconf, Ut = _._pthread_self, M1 = _._abort, zt = _.___setErrNo, W2 = _._sbrk, L4 = _._time, xt = _._emscripten_set_main_loop_timing, N4 = _._emscripten_memcpy_big, Vt = _._emscripten_set_main_loop, gt = 0;
            function F4(r) {
              r = r | 0;
              var t = 0;
              return t = C, C = C + r | 0, C = C + 15 & -16, t | 0;
            }
            function B4() {
              return C | 0;
            }
            function U4(r) {
              r = r | 0, C = r;
            }
            function z4(r, t) {
              r = r | 0, t = t | 0, C = r, n1 = t;
            }
            function x4(r, t) {
              r = r | 0, t = t | 0, I1 || (I1 = r, W1 = t);
            }
            function Ht(r) {
              r = r | 0, A[l1 >> 0] = A[r >> 0], A[l1 + 1 >> 0] = A[r + 1 >> 0], A[l1 + 2 >> 0] = A[r + 2 >> 0], A[l1 + 3 >> 0] = A[r + 3 >> 0];
            }
            function Wt(r) {
              r = r | 0, A[l1 >> 0] = A[r >> 0], A[l1 + 1 >> 0] = A[r + 1 >> 0], A[l1 + 2 >> 0] = A[r + 2 >> 0], A[l1 + 3 >> 0] = A[r + 3 >> 0], A[l1 + 4 >> 0] = A[r + 4 >> 0], A[l1 + 5 >> 0] = A[r + 5 >> 0], A[l1 + 6 >> 0] = A[r + 6 >> 0], A[l1 + 7 >> 0] = A[r + 7 >> 0];
            }
            function V4(r) {
              r = r | 0, We = r;
            }
            function g4() {
              return We | 0;
            }
            function H4() {
              var r = 0, t = 0;
              return t = C, C = C + 16 | 0, r = t, l[r >> 2] = 0, M3(r, 31756) | 0, C = t, l[r >> 2] | 0;
            }
            function W4(r) {
              r = r | 0;
              var t = 0, i = 0;
              t = C, C = C + 16 | 0, i = t, l[i >> 2] = r, T3(i), C = t;
            }
            function G4(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, Q4(r, (n | 0) == 0 ? (z[t >> 0] | 0) >>> 3 & 15 : 15, t + 1 | 0, i, 2) | 0;
            }
            function Y4(r) {
              r = r | 0;
              var t = 0;
              return t = A0(8) | 0, I3(t, t + 4 | 0, r) | 0, t | 0;
            }
            function X4(r) {
              r = r | 0, O3(r, r + 4 | 0), f0(r);
            }
            function K4(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0;
              return o = C, C = C + 16 | 0, s = o, l[s >> 2] = t, i = (L3(l[r >> 2] | 0, l[r + 4 >> 2] | 0, t, i, n, s, 3) | 0) << 16 >> 16, A[n >> 0] = z[n >> 0] | 0 | 4, C = o, i | 0;
            }
            function q4(r) {
              return r = r | 0, r ? (e[r >> 1] = 4096, r = 0) : r = -1, r | 0;
            }
            function Ge(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0;
              if (w = l[s >> 2] | 0, d = o << 16 >> 16 > 0, d) {
                u = 0, a = 0;
                do
                  c = e[i + (u << 1) >> 1] | 0, c = k(c, c) | 0, (c | 0) != 1073741824 ? (f = (c << 1) + a | 0, (c ^ a | 0) > 0 & (f ^ a | 0) < 0 ? (l[s >> 2] = 1, a = (a >>> 31) + 2147483647 | 0) : a = f) : (l[s >> 2] = 1, a = 2147483647), u = u + 1 | 0;
                while ((u & 65535) << 16 >> 16 != o << 16 >> 16);
                if ((a | 0) == 2147483647) {
                  l[s >> 2] = w, c = 0, f = 0;
                  do
                    a = e[i + (c << 1) >> 1] >> 2, a = k(a, a) | 0, (a | 0) != 1073741824 ? (u = (a << 1) + f | 0, (a ^ f | 0) > 0 & (u ^ f | 0) < 0 ? (l[s >> 2] = 1, f = (f >>> 31) + 2147483647 | 0) : f = u) : (l[s >> 2] = 1, f = 2147483647), c = c + 1 | 0;
                  while ((c & 65535) << 16 >> 16 != o << 16 >> 16);
                } else m = 8;
              } else a = 0, m = 8;
              if ((m | 0) == 8 && (f = a >> 4), !f) {
                e[r >> 1] = 0;
                return;
              }
              if (p = (($1(f) | 0) & 65535) + 65535 | 0, a = p << 16 >> 16, (p & 65535) << 16 >> 16 > 0 ? (u = f << a, (u >> a | 0) == (f | 0) ? f = u : f = f >> 31 ^ 2147483647) : (a = 0 - a << 16, (a | 0) < 2031616 ? f = f >> (a >> 16) : f = 0), v = N1(f, s) | 0, u = l[s >> 2] | 0, d) {
                a = 0, f = 0;
                do
                  w = e[t + (a << 1) >> 1] | 0, w = k(w, w) | 0, (w | 0) != 1073741824 ? (c = (w << 1) + f | 0, (w ^ f | 0) > 0 & (c ^ f | 0) < 0 ? (l[s >> 2] = 1, f = (f >>> 31) + 2147483647 | 0) : f = c) : (l[s >> 2] = 1, f = 2147483647), a = a + 1 | 0;
                while ((a & 65535) << 16 >> 16 != o << 16 >> 16);
                if ((f | 0) == 2147483647) {
                  l[s >> 2] = u, w = 0, f = 0;
                  do
                    c = e[t + (w << 1) >> 1] >> 2, c = k(c, c) | 0, (c | 0) != 1073741824 ? (a = (c << 1) + f | 0, (c ^ f | 0) > 0 & (a ^ f | 0) < 0 ? (l[s >> 2] = 1, f = (f >>> 31) + 2147483647 | 0) : f = a) : (l[s >> 2] = 1, f = 2147483647), w = w + 1 | 0;
                  while ((w & 65535) << 16 >> 16 != o << 16 >> 16);
                } else m = 29;
              } else f = 0, m = 29;
              if ((m | 0) == 29 && (f = f >> 4), f ? (a = ($1(f) | 0) << 16 >> 16, u = p - a | 0, c = u & 65535, f = (k0(v, N1(f << a, s) | 0) | 0) << 16 >> 16, a = f << 7, u = u << 16 >> 16, c << 16 >> 16 > 0 ? u = c << 16 >> 16 < 31 ? a >> u : 0 : (m = 0 - u << 16 >> 16, u = a << m, u = (u >> m | 0) == (a | 0) ? u : f >> 24 ^ 2147483647), c = (k(((D2(u, s) | 0) << 9) + 32768 >> 16, 32767 - (n & 65535) << 16 >> 16) | 0) >>> 15 << 16 >> 16) : c = 0, u = e[r >> 1] | 0, d) for (f = n << 16 >> 16, a = 0; n = ((k(u << 16 >> 16, f) | 0) >>> 15 & 65535) + c | 0, u = n & 65535, e[i >> 1] = (k(e[i >> 1] | 0, n << 16 >> 16) | 0) >>> 12, a = a + 1 << 16 >> 16, !(a << 16 >> 16 >= o << 16 >> 16); ) i = i + 2 | 0;
              e[r >> 1] = u;
            }
            function J4(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0;
              if (u = l[n >> 2] | 0, o = i << 16 >> 16 > 0, o) {
                a = 0, s = 0;
                do
                  c = e[t + (a << 1) >> 1] | 0, c = k(c, c) | 0, (c | 0) != 1073741824 ? (f = (c << 1) + s | 0, (c ^ s | 0) > 0 & (f ^ s | 0) < 0 ? (l[n >> 2] = 1, s = (s >>> 31) + 2147483647 | 0) : s = f) : (l[n >> 2] = 1, s = 2147483647), a = a + 1 | 0;
                while ((a & 65535) << 16 >> 16 != i << 16 >> 16);
                if ((s | 0) == 2147483647) {
                  l[n >> 2] = u, c = 0, u = 0;
                  do
                    f = e[t + (c << 1) >> 1] >> 2, f = k(f, f) | 0, (f | 0) != 1073741824 ? (a = (f << 1) + u | 0, (f ^ u | 0) > 0 & (a ^ u | 0) < 0 ? (l[n >> 2] = 1, u = (u >>> 31) + 2147483647 | 0) : u = a) : (l[n >> 2] = 1, u = 2147483647), c = c + 1 | 0;
                  while ((c & 65535) << 16 >> 16 != i << 16 >> 16);
                } else p = 8;
              } else s = 0, p = 8;
              if ((p | 0) == 8 && (u = s >> 4), !!u) {
                if (v = (($1(u) | 0) & 65535) + 65535 | 0, f = v << 16 >> 16, (v & 65535) << 16 >> 16 > 0 ? (a = u << f, (a >> f | 0) == (u | 0) ? u = a : u = u >> 31 ^ 2147483647) : (f = 0 - f << 16, (f | 0) < 2031616 ? u = u >> (f >> 16) : u = 0), w = N1(u, n) | 0, u = l[n >> 2] | 0, o) {
                  a = 0, s = 0;
                  do
                    c = e[r + (a << 1) >> 1] | 0, c = k(c, c) | 0, (c | 0) != 1073741824 ? (f = (c << 1) + s | 0, (c ^ s | 0) > 0 & (f ^ s | 0) < 0 ? (l[n >> 2] = 1, s = (s >>> 31) + 2147483647 | 0) : s = f) : (l[n >> 2] = 1, s = 2147483647), a = a + 1 | 0;
                  while ((a & 65535) << 16 >> 16 != i << 16 >> 16);
                  if ((s | 0) == 2147483647) {
                    l[n >> 2] = u, u = 0, a = 0;
                    do
                      c = e[r + (u << 1) >> 1] >> 2, c = k(c, c) | 0, (c | 0) != 1073741824 ? (f = (c << 1) + a | 0, (c ^ a | 0) > 0 & (f ^ a | 0) < 0 ? (l[n >> 2] = 1, a = (a >>> 31) + 2147483647 | 0) : a = f) : (l[n >> 2] = 1, a = 2147483647), u = u + 1 | 0;
                    while ((u & 65535) << 16 >> 16 != i << 16 >> 16);
                  } else p = 28;
                } else s = 0, p = 28;
                if ((p | 0) == 28 && (a = s >> 4), a ? (c = $1(a) | 0, f = c << 16 >> 16, c << 16 >> 16 > 0 ? (u = a << f, (u >> f | 0) == (a | 0) ? a = u : a = a >> 31 ^ 2147483647) : (f = 0 - f << 16, (f | 0) < 2031616 ? a = a >> (f >> 16) : a = 0), u = v - (c & 65535) | 0, f = u & 65535, s = (k0(w, N1(a, n) | 0) | 0) << 16 >> 16, o = s << 7, u = u << 16 >> 16, f << 16 >> 16 > 0 ? o = f << 16 >> 16 < 31 ? o >> u : 0 : (v = 0 - u << 16 >> 16, r = o << v, o = (r >> v | 0) == (o | 0) ? r : s >> 24 ^ 2147483647), o = D2(o, n) | 0, (o | 0) > 4194303 ? o = 2147483647 : o = (o | 0) < -4194304 ? -2147483648 : o << 9, o = N1(o, n) | 0) : o = 0, s = (i & 65535) + 65535 & 65535, !(s << 16 >> 16 <= -1)) for (c = o << 16 >> 16, f = i + -1 << 16 >> 16 << 16 >> 16; ; ) {
                  u = t + (f << 1) | 0, o = k(e[u >> 1] | 0, c) | 0;
                  do
                    if ((o | 0) != 1073741824) if (a = o << 1, (a | 0) <= 268435455) if ((a | 0) < -268435456) {
                      e[u >> 1] = -32768;
                      break;
                    } else {
                      e[u >> 1] = o >>> 12;
                      break;
                    }
                    else p = 52;
                    else l[n >> 2] = 1, p = 52;
                  while (false);
                  if ((p | 0) == 52 && (p = 0, e[u >> 1] = 32767), s = s + -1 << 16 >> 16, s << 16 >> 16 <= -1) break;
                  f = f + -1 | 0;
                }
              }
            }
            function Q4(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0;
              f = C, C = C + 496 | 0, a = f, u = (o | 0) == 2;
              do
                if (u & 1 | (o | 0) == 4) {
                  s = r + 1168 | 0, u ? (P3(t, i, a, s), s = 604) : (b3(t, i, a, s), s = 3436), o = e[s + (t << 1) >> 1] | 0;
                  do
                    if (t >>> 0 >= 8) {
                      if ((t | 0) == 8) {
                        t = e[a + 76 >> 1] << 2 | (e[a + 74 >> 1] << 1 | e[a + 72 >> 1]), s = (e[a + 70 >> 1] | 0) == 0 ? 4 : 5;
                        break;
                      }
                      if (t >>> 0 < 15) return r = -1, C = f, r | 0;
                      t = l[r + 1760 >> 2] | 0, s = 7;
                      break;
                    } else s = 0;
                  while (false);
                  if (o << 16 >> 16 == -1) return r = -1, C = f, r | 0;
                } else {
                  if (o) return r = -1, C = f, r | 0;
                  for (u = e[i >> 1] | 0, t = i + 490 | 0, o = i + 2 | 0, s = 0; e[a + (s << 1) >> 1] = e[o >> 1] | 0, s = s + 1 | 0, (s | 0) != 244; ) o = o + 2 | 0;
                  if (s = u << 16 >> 16, u << 16 >> 16 == 7) {
                    o = 492, t = l[r + 1760 >> 2] | 0;
                    break;
                  } else {
                    o = 492, t = e[t >> 1] | 0;
                    break;
                  }
                }
              while (false);
              return C3(r, t, a, s, n), l[r + 1760 >> 2] = t, r = o, C = f, r | 0;
            }
            function Z4(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0;
              b = C, C = C + 48 | 0, m = b + 20 | 0, d = b, o = m, n = o + 20 | 0;
              do
                e[o >> 1] = e[r >> 1] | 0, o = o + 2 | 0, r = r + 2 | 0;
              while ((o | 0) < (n | 0));
              r = e[m + 18 >> 1] | 0, p = (r & 65535) - ((r & 65535) >>> 15 & 65535) | 0;
              e: do
                if (((p << 16 >> 31 ^ p) & 65535) << 16 >> 16 <= 4095) {
                  for (n = 9, p = 9; ; ) {
                    r = r << 16 >> 16, r = (r << 19 >> 19 | 0) == (r | 0) ? r << 3 : r >>> 15 ^ 32767, v = t + (n << 1) | 0, e[v >> 1] = r, r = r << 16 >> 16, r = k(r, r) | 0, (r | 0) == 1073741824 ? (l[i >> 2] = 1, o = 2147483647) : o = r << 1, r = 2147483647 - o | 0, (r & o | 0) < 0 && (l[i >> 2] = 1, r = 2147483647), c = $1(r) | 0, w = 15 - (c & 65535) & 65535, s = c << 16 >> 16, c << 16 >> 16 > 0 ? (o = r << s, (o >> s | 0) != (r | 0) && (o = r >> 31 ^ 2147483647)) : (o = 0 - s << 16, (o | 0) < 2031616 ? o = r >> (o >> 16) : o = 0), o = k0(16384, N1(o, i) | 0) | 0;
                    do
                      if (p << 16 >> 16 > 0) {
                        for (c = n + -1 | 0, u = o << 16 >> 16, a = p << 16 >> 16, f = 0; ; ) {
                          if (n = R[m + (f << 1) >> 1] | 0, r = n << 16, s = k(e[m + (c - f << 1) >> 1] | 0, e[v >> 1] | 0) | 0, (s | 0) == 1073741824 ? (l[i >> 2] = 1, o = 2147483647) : o = s << 1, s = r - o | 0, ((s ^ r) & (o ^ r) | 0) < 0 && (l[i >> 2] = 1, s = (n >>> 15) + 2147483647 | 0), s = k((N1(s, i) | 0) << 16 >> 16, u) | 0, (s | 0) == 1073741824 ? (l[i >> 2] = 1, s = 2147483647) : s = s << 1, s = ve(s, w, i) | 0, o = s - (s >>> 31) | 0, (o >> 31 ^ o | 0) > 32767) {
                            s = 24;
                            break;
                          }
                          if (e[d + (f << 1) >> 1] = s, f = f + 1 | 0, (a | 0) <= (f | 0)) {
                            s = 26;
                            break;
                          }
                        }
                        if ((s | 0) == 24) {
                          s = 0, o = t, n = o + 20 | 0;
                          do
                            e[o >> 1] = 0, o = o + 2 | 0;
                          while ((o | 0) < (n | 0));
                          r = 10;
                        } else if ((s | 0) == 26) if (s = 0, p << 16 >> 16 > 0) r = p;
                        else {
                          s = 28;
                          break;
                        }
                        o = r + -1 << 16 >> 16, K0(m | 0, d | 0, ((o & 65535) << 1) + 2 | 0) | 0, n = o << 16 >> 16;
                      } else s = 28;
                    while (false);
                    if ((s | 0) == 28) if (r = p + -1 << 16 >> 16, r << 16 >> 16 > -1) n = r << 16 >> 16, o = 32767;
                    else break;
                    if (r = e[m + (n << 1) >> 1] | 0, p = (r & 65535) - ((r & 65535) >>> 15 & 65535) | 0, ((p << 16 >> 31 ^ p) & 65535) << 16 >> 16 > 4095) break e;
                    p = o;
                  }
                  C = b;
                  return;
                }
              while (false);
              o = t, n = o + 20 | 0;
              do
                e[o >> 1] = 0, o = o + 2 | 0;
              while ((o | 0) < (n | 0));
              C = b;
            }
            function $4(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0, o = 0, s = 0, u = 0;
              if (t << 16 >> 16 <= 0) return r = 0, r | 0;
              n = l[r >> 2] | 0, o = 0, i = 0;
              do
                u = n & 1, i = u | i << 1 & 131070, s = n >> 1, n = (u | 0) == (n >>> 28 & 1 | 0) ? s : s | 1073741824, o = o + 1 << 16 >> 16;
              while (o << 16 >> 16 < t << 16 >> 16);
              return l[r >> 2] = n, u = i & 65535, u | 0;
            }
            function T5(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0, a = 0, f = 0;
              o = t, n = o + 80 | 0;
              do
                e[o >> 1] = 0, o = o + 2 | 0;
              while ((o | 0) < (n | 0));
              n = 0, o = l[r >> 2] | 0;
              do
                f = o & 1, a = o >> 1, a = (f | 0) == (o >>> 28 & 1 | 0) ? a : a | 1073741824, s = a & 1, u = a >> 1, l[r >> 2] = (s | 0) == (a >>> 28 & 1 | 0) ? u : u | 1073741824, s = a1((k(f << 1 | s, 1310720) | 0) >>> 17 & 65535, n, i) | 0, f = l[r >> 2] | 0, u = f & 1, a = f >> 1, o = (u | 0) == (f >>> 28 & 1 | 0) ? a : a | 1073741824, l[r >> 2] = o, e[t + (s << 16 >> 16 << 1) >> 1] = ((u & 65535) << 13 & 65535) + -4096 << 16 >> 16, n = n + 1 << 16 >> 16;
              while (n << 16 >> 16 < 10);
            }
            function j4(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0;
              if (u = e[r >> 1] | 0, (u * 31821 | 0) == 1073741824 ? (l[s >> 2] = 1, a = 1073741823) : a = u * 63642 >> 1, u = a + 13849 | 0, (a | 0) > -1 & (u ^ a | 0) < 0 && (l[s >> 2] = 1, u = (a >>> 31) + 2147483647 | 0), e[r >> 1] = u, !(t << 16 >> 16 <= 0)) for (a = 0, u = o + ((u & 127) << 1) | 0; e[n + (a << 1) >> 1] = (-65536 << e[i + (a << 1) >> 1] >>> 16 ^ 65535) & R[u >> 1], a = a + 1 | 0, (a & 65535) << 16 >> 16 != t << 16 >> 16; ) u = u + 2 | 0;
            }
            function Ye(r) {
              r = r | 0;
              var t = 0;
              if (!r) return t = -1, t | 0;
              t = r + 122 | 0;
              do
                e[r >> 1] = 0, r = r + 2 | 0;
              while ((r | 0) < (t | 0));
              return t = 0, t | 0;
            }
            function e3(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0;
              for (a = 159, u = 0; ; ) if (c = e[i + (a << 1) >> 1] | 0, c = k(c, c) | 0, c = (c | 0) == 1073741824 ? 2147483647 : c << 1, s = c + u | 0, (c ^ u | 0) > -1 & (s ^ u | 0) < 0 ? (l[o >> 2] = 1, u = (u >>> 31) + 2147483647 | 0) : u = s, (a | 0) > 0) a = a + -1 | 0;
              else {
                a = u;
                break;
              }
              for (o = a >>> 14 & 65535, u = 32767, s = 59; c = e[r + (s << 1) >> 1] | 0, u = c << 16 >> 16 < u << 16 >> 16 ? c : u, (s | 0) > 0; ) s = s + -1 | 0;
              for (c = (a | 0) > 536870911 ? 32767 : o, o = u << 16 >> 16, s = o << 20 >> 16, a = u << 16 >> 16 > 0 ? 32767 : -32768, i = 55, u = e[r >> 1] | 0; f = e[r + (i << 1) >> 1] | 0, u = u << 16 >> 16 < f << 16 >> 16 ? f : u, (i | 0) > 1; ) i = i + -1 | 0;
              i = e[r + 80 >> 1] | 0, f = e[r + 82 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 84 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 86 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 88 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 90 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 92 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 94 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 96 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 98 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 100 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 102 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 104 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 106 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 108 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 110 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 112 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 114 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = e[r + 116 >> 1] | 0, i = i << 16 >> 16 < f << 16 >> 16 ? f : i, f = r + 118 | 0, v = e[f >> 1] | 0;
              do
                if ((c + -21 & 65535) < 17557 & u << 16 >> 16 > 20 && ((c << 16 >> 16 | 0) < (((o << 4 | 0) == (s | 0) ? s : a) | 0) || (i << 16 >> 16 < v << 16 >> 16 ? v : i) << 16 >> 16 < 1953)) if (u = r + 120 | 0, s = e[u >> 1] | 0, s << 16 >> 16 > 29) {
                  e[u >> 1] = 30, i = u, a = 1;
                  break;
                } else {
                  a = (s & 65535) + 1 & 65535, e[u >> 1] = a, i = u, a = a << 16 >> 16 > 1 & 1;
                  break;
                }
                else w = 14;
              while (false);
              (w | 0) == 14 && (i = r + 120 | 0, e[i >> 1] = 0, a = 0), u = 0;
              do
                v = u, u = u + 1 | 0, e[r + (v << 1) >> 1] = e[r + (u << 1) >> 1] | 0;
              while ((u | 0) != 59);
              return e[f >> 1] = c, u = e[i >> 1] | 0, u = u << 16 >> 16 > 15 ? 16383 : u << 16 >> 16 > 8 ? 15565 : 13926, s = Y2(t + 8 | 0, 5) | 0, (e[i >> 1] | 0) > 20 ? ((Y2(t, 9) | 0) << 16 >> 16 | 0) > (u | 0) && (w = 20) : (s << 16 >> 16 | 0) > (u | 0) && (w = 20), (w | 0) == 20 ? (e[n >> 1] = 0, a | 0) : (s = (R[n >> 1] | 0) + 1 & 65535, s << 16 >> 16 > 10 ? (e[n >> 1] = 10, a | 0) : (e[n >> 1] = s, a | 0));
            }
            function Z5(r) {
              r = r | 0;
              var t = 0;
              if (!r) return t = -1, t | 0;
              t = r + 18 | 0;
              do
                e[r >> 1] = 0, r = r + 2 | 0;
              while ((r | 0) < (t | 0));
              return t = 0, t | 0;
            }
            function r3(r, t, i, n, o, s, u, a, f, c, w, v) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0;
              var p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0;
              M = r + 2 | 0, e[r >> 1] = e[M >> 1] | 0, F = r + 4 | 0, e[M >> 1] = e[F >> 1] | 0, B = r + 6 | 0, e[F >> 1] = e[B >> 1] | 0, U = r + 8 | 0, e[B >> 1] = e[U >> 1] | 0, T = r + 10 | 0, e[U >> 1] = e[T >> 1] | 0, L = r + 12 | 0, e[T >> 1] = e[L >> 1] | 0, e[L >> 1] = i, E = 0, I = 0;
              do {
                p = o + (I << 1) | 0, d = P1(e[p >> 1] | 0, e[n + (I << 1) >> 1] | 0, v) | 0, d = (d & 65535) - ((d & 65535) >>> 15 & 65535) | 0, d = d << 16 >> 31 ^ d, O = ((i5(d & 65535) | 0) & 65535) + 65535 | 0, m = O << 16 >> 16, (O & 65535) << 16 >> 16 < 0 ? (b = 0 - m << 16, (b | 0) < 983040 ? S = d << 16 >> 16 >> (b >> 16) & 65535 : S = 0) : (b = d << 16 >> 16, d = b << m, (d << 16 >> 16 >> m | 0) == (b | 0) ? S = d & 65535 : S = (b >>> 15 ^ 32767) & 65535), D = i5(e[p >> 1] | 0) | 0, d = e[p >> 1] | 0, m = D << 16 >> 16, D << 16 >> 16 < 0 ? (b = 0 - m << 16, (b | 0) < 983040 ? b = d << 16 >> 16 >> (b >> 16) & 65535 : b = 0) : (b = d << 16 >> 16, d = b << m, (d << 16 >> 16 >> m | 0) == (b | 0) ? b = d & 65535 : b = (b >>> 15 ^ 32767) & 65535), m = k0(S, b) | 0, b = (O & 65535) + 2 - (D & 65535) | 0, d = b & 65535;
                do
                  if (b & 32768) {
                    if (d << 16 >> 16 != -32768) {
                      if (O = 0 - b | 0, b = O << 16 >> 16, (O & 65535) << 16 >> 16 < 0) {
                        if (b = 0 - b << 16, (b | 0) >= 983040) {
                          b = 0;
                          break;
                        }
                        b = m << 16 >> 16 >> (b >> 16) & 65535;
                        break;
                      }
                    } else b = 32767;
                    d = m << 16 >> 16, m = d << b, (m << 16 >> 16 >> b | 0) == (d | 0) ? b = m & 65535 : b = (d >>> 15 ^ 32767) & 65535;
                  } else b = o0(m, d, v) | 0;
                while (false);
                E = a1(E, b, v) | 0, I = I + 1 | 0;
              } while ((I | 0) != 10);
              switch (b = E & 65535, d = E << 16 >> 16 > 5325, E = r + 14 | 0, d ? (o = (R[E >> 1] | 0) + 1 & 65535, e[E >> 1] = o, o << 16 >> 16 > 10 && (e[r + 16 >> 1] = 0)) : e[E >> 1] = 0, t | 0) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 6:
                  break;
                default:
                  return L = r + 16 | 0, v = i, i = e[L >> 1] | 0, i = i & 65535, i = i + 1 | 0, i = i & 65535, e[L >> 1] = i, v | 0;
              }
              return S = (u | s) << 16 >> 16 == 0, D = c << 16 >> 16 == 0, O = t >>> 0 < 3, E = b + (O & ((D | (S & (a << 16 >> 16 == 0 | f << 16 >> 16 == 0) | w << 16 >> 16 < 2)) ^ 1) ? 61030 : 62259) & 65535, E = E << 16 >> 16 > 0 ? E : 0, E << 16 >> 16 <= 2048 ? (E = E << 16 >> 16, (E << 18 >> 18 | 0) == (E | 0) ? f = E << 2 : f = E >>> 15 ^ 32767) : f = 8192, a = r + 16 | 0, w = d | (e[a >> 1] | 0) < 40, E = e[F >> 1] | 0, (E * 6554 | 0) == 1073741824 ? (l[v >> 2] = 1, d = 2147483647) : d = E * 13108 | 0, E = e[B >> 1] | 0, b = E * 6554 | 0, (b | 0) != 1073741824 ? (E = (E * 13108 | 0) + d | 0, (b ^ d | 0) > 0 & (E ^ d | 0) < 0 && (l[v >> 2] = 1, E = (d >>> 31) + 2147483647 | 0)) : (l[v >> 2] = 1, E = 2147483647), b = e[U >> 1] | 0, d = b * 6554 | 0, (d | 0) != 1073741824 ? (b = (b * 13108 | 0) + E | 0, (d ^ E | 0) > 0 & (b ^ E | 0) < 0 && (l[v >> 2] = 1, b = (E >>> 31) + 2147483647 | 0)) : (l[v >> 2] = 1, b = 2147483647), E = e[T >> 1] | 0, d = E * 6554 | 0, (d | 0) != 1073741824 ? (E = (E * 13108 | 0) + b | 0, (d ^ b | 0) > 0 & (E ^ b | 0) < 0 ? (l[v >> 2] = 1, d = (b >>> 31) + 2147483647 | 0) : d = E) : (l[v >> 2] = 1, d = 2147483647), E = e[L >> 1] | 0, b = E * 6554 | 0, (b | 0) != 1073741824 ? (E = (E * 13108 | 0) + d | 0, (b ^ d | 0) > 0 & (E ^ d | 0) < 0 && (l[v >> 2] = 1, E = (d >>> 31) + 2147483647 | 0)) : (l[v >> 2] = 1, E = 2147483647), d = N1(E, v) | 0, O & ((S | D) ^ 1) && (E = e[r >> 1] | 0, (E * 4681 | 0) == 1073741824 ? (l[v >> 2] = 1, d = 2147483647) : d = E * 9362 | 0, E = e[M >> 1] | 0, b = E * 4681 | 0, (b | 0) != 1073741824 ? (E = (E * 9362 | 0) + d | 0, (b ^ d | 0) > 0 & (E ^ d | 0) < 0 ? (l[v >> 2] = 1, d = (d >>> 31) + 2147483647 | 0) : d = E) : (l[v >> 2] = 1, d = 2147483647), E = e[F >> 1] | 0, b = E * 4681 | 0, (b | 0) != 1073741824 ? (E = (E * 9362 | 0) + d | 0, (b ^ d | 0) > 0 & (E ^ d | 0) < 0 ? (l[v >> 2] = 1, d = (d >>> 31) + 2147483647 | 0) : d = E) : (l[v >> 2] = 1, d = 2147483647), E = e[B >> 1] | 0, b = E * 4681 | 0, (b | 0) != 1073741824 ? (E = (E * 9362 | 0) + d | 0, (b ^ d | 0) > 0 & (E ^ d | 0) < 0 && (l[v >> 2] = 1, E = (d >>> 31) + 2147483647 | 0)) : (l[v >> 2] = 1, E = 2147483647), b = e[U >> 1] | 0, d = b * 4681 | 0, (d | 0) != 1073741824 ? (b = (b * 9362 | 0) + E | 0, (d ^ E | 0) > 0 & (b ^ E | 0) < 0 ? (l[v >> 2] = 1, E = (E >>> 31) + 2147483647 | 0) : E = b) : (l[v >> 2] = 1, E = 2147483647), b = e[T >> 1] | 0, d = b * 4681 | 0, (d | 0) != 1073741824 ? (b = (b * 9362 | 0) + E | 0, (d ^ E | 0) > 0 & (b ^ E | 0) < 0 && (l[v >> 2] = 1, b = (E >>> 31) + 2147483647 | 0)) : (l[v >> 2] = 1, b = 2147483647), d = e[L >> 1] | 0, p = d * 4681 | 0, (p | 0) != 1073741824 ? (m = (d * 9362 | 0) + b | 0, (p ^ b | 0) > 0 & (m ^ b | 0) < 0 && (l[v >> 2] = 1, m = (b >>> 31) + 2147483647 | 0)) : (l[v >> 2] = 1, m = 2147483647), d = N1(m, v) | 0), E = w ? 8192 : f << 16 >> 16, p = k(E, i << 16 >> 16) | 0, (p | 0) == 1073741824 ? (l[v >> 2] = 1, b = 2147483647) : b = p << 1, d = d << 16 >> 16, m = d << 13, (m | 0) != 1073741824 ? (p = b + (d << 14) | 0, (b ^ m | 0) > 0 & (p ^ b | 0) < 0 ? (l[v >> 2] = 1, b = (b >>> 31) + 2147483647 | 0) : b = p) : (l[v >> 2] = 1, b = 2147483647), p = k(d, E) | 0, (p | 0) == 1073741824 ? (l[v >> 2] = 1, m = 2147483647) : m = p << 1, p = b - m | 0, ((p ^ b) & (m ^ b) | 0) < 0 && (l[v >> 2] = 1, p = (b >>> 31) + 2147483647 | 0), L = p << 2, i = a, v = N1((L >> 2 | 0) == (p | 0) ? L : p >> 31 ^ 2147483647, v) | 0, L = e[i >> 1] | 0, L = L & 65535, L = L + 1 | 0, L = L & 65535, e[i >> 1] = L, v | 0;
            }
            function i3(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0;
              n = t, o = n + 80 | 0;
              do
                e[n >> 1] = 0, n = n + 2 | 0;
              while ((n | 0) < (o | 0));
              n = 0;
              do
                u = e[r + (n << 1) >> 1] | 0, o = ((u & 8) << 10 & 65535 ^ 8192) + -4096 << 16 >> 16, s = n << 16, u = ((e[i + ((u & 7) << 1) >> 1] | 0) * 327680 | 0) + s >> 16, e[t + (u << 1) >> 1] = o, s = ((e[i + ((R[r + (n + 5 << 1) >> 1] & 7) << 1) >> 1] | 0) * 327680 | 0) + s >> 16, (s | 0) < (u | 0) && (o = 0 - (o & 65535) & 65535), u = t + (s << 1) | 0, e[u >> 1] = (R[u >> 1] | 0) + (o & 65535), n = n + 1 | 0;
              while ((n | 0) != 5);
            }
            function t3(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0;
              o = t << 16 >> 16, n = (o << 1 & 2 | 1) + ((o >>> 1 & 7) * 5 | 0) | 0, t = o >>> 4 & 3, t = ((o >>> 6 & 7) * 5 | 0) + ((t | 0) == 3 ? 4 : t) | 0, o = i, s = o + 80 | 0;
              do
                e[o >> 1] = 0, o = o + 2 | 0;
              while ((o | 0) < (s | 0));
              r = r << 16 >> 16, e[i + (n << 1) >> 1] = (0 - (r & 1) & 16383) + 57344, e[i + (t << 1) >> 1] = (0 - (r >>> 1 & 1) & 16383) + 57344;
            }
            function n3(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0;
              s = i << 16 >> 16, a = s >>> 3, r = r << 16 >> 16, r = ((r << 17 >> 17 | 0) == (r | 0) ? r << 1 : r >>> 15 ^ 32767) + (a & 8) << 16, a = (R[n + (r + 65536 >> 16 << 1) >> 1] | 0) + ((a & 7) * 5 | 0) | 0, i = t << 16 >> 16, u = (0 - (i & 1) & 16383) + 57344 & 65535, r = o + ((R[n + (r >> 16 << 1) >> 1] | 0) + ((s & 7) * 5 | 0) << 16 >> 16 << 1) | 0, t = o, s = t + 80 | 0;
              do
                e[t >> 1] = 0, t = t + 2 | 0;
              while ((t | 0) < (s | 0));
              e[r >> 1] = u, e[o + (a << 16 >> 16 << 1) >> 1] = (0 - (i >>> 1 & 1) & 16383) + 57344;
            }
            function o3(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0;
              t = t << 16 >> 16, n = (t & 7) * 5 | 0, o = (t >>> 2 & 2 | 1) + ((t >>> 4 & 7) * 5 | 0) | 0, t = (t >>> 6 & 2) + 2 + ((t >>> 8 & 7) * 5 | 0) | 0, s = i, u = s + 80 | 0;
              do
                e[s >> 1] = 0, s = s + 2 | 0;
              while ((s | 0) < (u | 0));
              r = r << 16 >> 16, e[i + (n << 1) >> 1] = (0 - (r & 1) & 16383) + 57344, e[i + (o << 1) >> 1] = (0 - (r >>> 1 & 1) & 16383) + 57344, e[i + (t << 1) >> 1] = (0 - (r >>> 2 & 1) & 16383) + 57344;
            }
            function s3(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0;
              t = t << 16 >> 16, u = e[i + ((t & 7) << 1) >> 1] | 0, a = e[i + ((t >>> 3 & 7) << 1) >> 1] | 0, s = e[i + ((t >>> 6 & 7) << 1) >> 1] | 0, i = (t >>> 9 & 1) + 3 + ((e[i + ((t >>> 10 & 7) << 1) >> 1] | 0) * 5 | 0) | 0, t = n, o = t + 80 | 0;
              do
                e[t >> 1] = 0, t = t + 2 | 0;
              while ((t | 0) < (o | 0));
              r = r << 16 >> 16, e[n + (u * 327680 >> 16 << 1) >> 1] = (0 - (r & 1) & 16383) + 57344, e[n + ((a * 327680 | 0) + 65536 >> 16 << 1) >> 1] = (0 - (r >>> 1 & 1) & 16383) + 57344, e[n + ((s * 327680 | 0) + 131072 >> 16 << 1) >> 1] = (0 - (r >>> 2 & 1) & 16383) + 57344, e[n + (i << 16 >> 16 << 1) >> 1] = (0 - (r >>> 3 & 1) & 16383) + 57344;
            }
            function l3(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0;
              p = C, C = C + 32 | 0, v = p + 16 | 0, w = p, s = t, o = s + 80 | 0;
              do
                e[s >> 1] = 0, s = s + 2 | 0;
              while ((s | 0) < (o | 0));
              o = e[r >> 1] | 0, e[v >> 1] = o, e[v + 2 >> 1] = e[r + 2 >> 1] | 0, e[v + 4 >> 1] = e[r + 4 >> 1] | 0, e[v + 6 >> 1] = e[r + 6 >> 1] | 0, f = e[r + 8 >> 1] | 0, Xe(f >>> 3 & 65535, f & 7, 0, 4, 1, w, i), f = e[r + 10 >> 1] | 0, Xe(f >>> 3 & 65535, f & 7, 2, 6, 5, w, i), f = e[r + 12 >> 1] | 0, n = f >> 2;
              do
                if ((n * 25 | 0) != 1073741824) {
                  if (s = (k(n, 1638400) | 0) + 786432 >> 21, n = s * 6554 >> 15, (n | 0) > 32767) {
                    l[i >> 2] = 1, u = 1, a = 1, r = 163835, c = 6;
                    break;
                  }
                  r = (n << 16 >> 16) * 5 | 0, u = n & 1, (r | 0) == 1073741824 ? (l[i >> 2] = 1, a = 0, r = 65535) : (a = 0, c = 6);
                } else l[i >> 2] = 1, u = 0, n = 0, a = 0, s = 0, r = 0, c = 6;
              while (false);
              for ((c | 0) == 6 && (r = r & 65535), c = s - r | 0, u = u << 16 >> 16 == 0 ? c : 4 - c | 0, c = u << 16 >> 16, e[w + 6 >> 1] = a1(((u << 17 >> 17 | 0) == (c | 0) ? u << 1 : c >>> 15 ^ 32767) & 65535, f & 1, i) | 0, a && (l[i >> 2] = 1, n = 32767), c = n << 16 >> 16, e[w + 14 >> 1] = ((n << 17 >> 17 | 0) == (c | 0) ? n << 1 : c >>> 15 ^ 32767) + (f >>> 1 & 1), n = 0; o = o << 16 >> 16 == 0 ? 8191 : -8191, c = (e[w + (n << 1) >> 1] << 2) + n << 16, s = c >> 16, (c | 0) < 2621440 && (e[t + (s << 1) >> 1] = o), u = (e[w + (n + 4 << 1) >> 1] << 2) + n << 16, r = u >> 16, (r | 0) < (s | 0) && (o = 0 - (o & 65535) & 65535), (u | 0) < 2621440 && (c = t + (r << 1) | 0, e[c >> 1] = (R[c >> 1] | 0) + (o & 65535)), n = n + 1 | 0, (n | 0) != 4; ) o = e[v + (n << 1) >> 1] | 0;
              C = p;
            }
            function Xe(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0;
              f = r << 16 >> 16 > 124 ? 124 : r, r = (f << 16 >> 16) * 1311 >> 15, m = (r | 0) > 32767, m ? (l[u >> 2] = 1, a = 32767, p = 4) : (a = r << 16 >> 16, (a * 25 | 0) == 1073741824 ? (l[u >> 2] = 1, a = 1073741823) : p = 4), (p | 0) == 4 && (a = (a * 50 | 0) >>> 1), w = (f & 65535) - a | 0, a = (w << 16 >> 16) * 6554 >> 15, v = (a | 0) > 32767, v ? (l[u >> 2] = 1, f = 32767, p = 9) : (f = a << 16 >> 16, (f * 5 | 0) == 1073741824 ? (l[u >> 2] = 1, c = 1073741823) : p = 9), (p | 0) == 9 && (c = (f * 10 | 0) >>> 1), w = w - c | 0, p = w << 16 >> 16, f = t << 16 >> 16, c = f >> 2, f = f - (c << 2) | 0, e[s + (i << 16 >> 16 << 1) >> 1] = ((w << 17 >> 17 | 0) == (p | 0) ? w << 1 : p >>> 15 ^ 32767) + (f & 1), v && (l[u >> 2] = 1, a = 32767), i = a << 16 >> 16, e[s + (n << 16 >> 16 << 1) >> 1] = ((a << 17 >> 17 | 0) == (i | 0) ? a << 1 : i >>> 15 ^ 32767) + (f << 16 >> 17), m && (l[u >> 2] = 1, r = 32767), n = r << 16 >> 16, e[s + (o << 16 >> 16 << 1) >> 1] = a1(c & 65535, ((r << 17 >> 17 | 0) == (n | 0) ? r << 1 : n >>> 15 ^ 32767) & 65535, u) | 0;
            }
            function u3(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0, o = 0;
              if (!r) return o = -1, o | 0;
              T6(r + 1168 | 0), e[r + 460 >> 1] = 40, l[r + 1164 >> 2] = 0, t = r + 646 | 0, i = r + 1216 | 0, n = r + 462 | 0, o = n + 22 | 0;
              do
                e[n >> 1] = 0, n = n + 2 | 0;
              while ((n | 0) < (o | 0));
              return j5(t, l[i >> 2] | 0) | 0, re(r + 686 | 0) | 0, ee(r + 700 | 0) | 0, Z5(r + 608 | 0) | 0, $e(r + 626 | 0, l[i >> 2] | 0) | 0, Ye(r + 484 | 0) | 0, e6(r + 730 | 0) | 0, Ze(r + 748 | 0) | 0, L2(r + 714 | 0) | 0, $5(r, 0) | 0, o = 0, o | 0;
            }
            function $5(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0;
              if (!r) return r = -1, r | 0;
              if (l[r + 388 >> 2] = r + 308, T2(r | 0, 0, 308) | 0, t = (t | 0) != 8, t) {
                i = r + 412 | 0, n = i + 20 | 0;
                do
                  e[i >> 1] = 0, i = i + 2 | 0;
                while ((i | 0) < (n | 0));
                e[r + 392 >> 1] = 3e4, e[r + 394 >> 1] = 26e3, e[r + 396 >> 1] = 21e3, e[r + 398 >> 1] = 15e3, e[r + 400 >> 1] = 8e3, e[r + 402 >> 1] = 0, e[r + 404 >> 1] = -8e3, e[r + 406 >> 1] = -15e3, e[r + 408 >> 1] = -21e3, e[r + 410 >> 1] = -26e3;
              }
              if (e[r + 432 >> 1] = 0, e[r + 434 >> 1] = 40, l[r + 1164 >> 2] = 0, e[r + 436 >> 1] = 0, e[r + 438 >> 1] = 0, e[r + 440 >> 1] = 0, e[r + 460 >> 1] = 40, e[r + 462 >> 1] = 0, e[r + 464 >> 1] = 0, t) {
                i = r + 442 | 0, n = i + 18 | 0;
                do
                  e[i >> 1] = 0, i = i + 2 | 0;
                while ((i | 0) < (n | 0));
                i = r + 466 | 0, n = i + 18 | 0;
                do
                  e[i >> 1] = 0, i = i + 2 | 0;
                while ((i | 0) < (n | 0));
                Z5(r + 608 | 0) | 0, n = r + 1216 | 0, $e(r + 626 | 0, l[n >> 2] | 0) | 0, j5(r + 646 | 0, l[n >> 2] | 0) | 0, re(r + 686 | 0) | 0, ee(r + 700 | 0) | 0, L2(r + 714 | 0) | 0;
              } else {
                i = r + 466 | 0, n = i + 18 | 0;
                do
                  e[i >> 1] = 0, i = i + 2 | 0;
                while ((i | 0) < (n | 0));
                Z5(r + 608 | 0) | 0, j5(r + 646 | 0, l[r + 1216 >> 2] | 0) | 0, re(r + 686 | 0) | 0, ee(r + 700 | 0) | 0;
              }
              return Ye(r + 484 | 0) | 0, e[r + 606 >> 1] = 21845, e6(r + 730 | 0) | 0, t ? (Ze(r + 748 | 0) | 0, r = 0, r | 0) : (r = 0, r | 0);
            }
            function a3(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0, R1 = 0, Z = 0, G = 0, T1 = 0, Q1 = 0, B1 = 0, t0 = 0, j1 = 0, G1 = 0, c0 = 0, e0 = 0, R0 = 0, r0 = 0, m0 = 0, S0 = 0, _0 = 0, n0 = 0, U0 = 0, h2 = 0, E2 = 0, W0 = 0, F0 = 0, D0 = 0, x1 = 0, z0 = 0, X2 = 0, K2 = 0, r2 = 0, F2 = 0, B6 = 0, U6 = 0, n5 = 0, z6 = 0, _e = 0, b5 = 0, Ee = 0, o5 = 0, j0 = 0, x0 = 0, S1 = 0, U5 = 0, _5 = 0, ye = 0, ke = 0, f2 = 0, q2 = 0, q0 = 0, y2 = 0, s5 = 0, G0 = 0, s0 = 0, Ae = 0, Re = 0, i2 = 0, J0 = 0;
              if (J0 = C, C = C + 336 | 0, p = J0 + 236 | 0, v = J0 + 216 | 0, Re = J0 + 112 | 0, Ae = J0 + 12 | 0, q0 = J0 + 256 | 0, s5 = J0 + 136 | 0, y2 = J0 + 32 | 0, f2 = J0 + 8 | 0, q2 = J0 + 6 | 0, s0 = J0 + 4 | 0, G0 = J0 + 2 | 0, i2 = J0, S1 = r + 1164 | 0, U5 = r + 748 | 0, _5 = h3(U5, n, S1) | 0, _5) {
                $5(r, 8) | 0, p3(U5, r + 412 | 0, r + 646 | 0, r + 714 | 0, r + 608 | 0, _5, t, i, r + 1168 | 0, o, s, S1), i2 = r + 666 | 0, H0(i2, r + 392 | 0, 10, S1), je(r + 626 | 0, i2, S1), i2 = r + 1156 | 0, l[i2 >> 2] = _5, C = J0;
                return;
              }
              switch (n | 0) {
                case 1: {
                  u = 1, D = 6;
                  break;
                }
                case 2:
                case 7: {
                  j4(r + 606 | 0, e[(l[r + 1256 >> 2] | 0) + (t << 1) >> 1] | 0, l[(l[r + 1260 >> 2] | 0) + (t << 2) >> 2] | 0, i, l[r + 1276 >> 2] | 0, S1), D = 9;
                  break;
                }
                case 3: {
                  D = 9;
                  break;
                }
                default:
                  u = 0, D = 6;
              }
              do
                if ((D | 0) == 6) if (n = r + 440 | 0, (e[n >> 1] | 0) == 6) {
                  e[n >> 1] = 5, j0 = 0, x0 = 0;
                  break;
                } else {
                  e[n >> 1] = 0, j0 = 0, x0 = 0;
                  break;
                }
                else (D | 0) == 9 && (n = r + 440 | 0, j0 = (R[n >> 1] | 0) + 1 & 65535, e[n >> 1] = j0 << 16 >> 16 > 6 ? 6 : j0, j0 = 1, x0 = 1, u = 0);
              while (false);
              switch (_e = r + 1156 | 0, l[_e >> 2] | 0) {
                case 1: {
                  e[n >> 1] = 5, e[r + 436 >> 1] = 0;
                  break;
                }
                case 2: {
                  e[n >> 1] = 5, e[r + 436 >> 1] = 1;
                  break;
                }
                default:
              }
              f = r + 646 | 0, b5 = r + 666 | 0, a = Re, c = b5, w = a + 20 | 0;
              do
                A[a >> 0] = A[c >> 0] | 0, a = a + 1 | 0, c = c + 1 | 0;
              while ((a | 0) < (w | 0));
              Ee = (t | 0) != 7, o5 = r + 1168 | 0, Ee ? (Qe(f, t, x0, i, o5, p, S1), a = r + 392 | 0, P6(a, p, s, S1), i = i + 6 | 0) : (m3(f, x0, i, o5, v, p, S1), a = r + 392 | 0, C6(a, v, p, s, S1), i = i + 10 | 0), c = p, w = a + 20 | 0;
              do
                e[a >> 1] = e[c >> 1] | 0, a = a + 2 | 0, c = c + 2 | 0;
              while ((a | 0) < (w | 0));
              for (z6 = t >>> 0 > 1, F = t >>> 0 < 4 & 1, n5 = (t | 0) == 5, U6 = n5 ? 10 : 5, n5 = n5 ? 19 : 9, T = r + 434 | 0, L = 143 - n5 & 65535, V = r + 460 | 0, g = r + 462 | 0, K = r + 464 | 0, B = t >>> 0 > 2, Q = r + 388 | 0, W = (t | 0) == 0, x = t >>> 0 < 2, H = r + 1244 | 0, e1 = r + 432 | 0, Y = t >>> 0 < 6, s1 = r + 1168 | 0, f1 = (t | 0) == 6, d1 = x0 << 16 >> 16 == 0, _1 = r + 714 | 0, b1 = r + 686 | 0, i1 = r + 436 | 0, h1 = r + 700 | 0, k1 = (t | 0) == 7, R1 = r + 482 | 0, Z = t >>> 0 < 3, G = r + 608 | 0, T1 = r + 626 | 0, Q1 = r + 438 | 0, B1 = t >>> 0 < 7, t0 = r + 730 | 0, U = j0 ^ 1, j1 = u << 16 >> 16 != 0, B6 = j1 ? x0 ^ 1 : 0, G1 = r + 442 | 0, c0 = r + 458 | 0, e0 = r + 412 | 0, R0 = r + 80 | 0, r0 = r + 1236 | 0, m0 = r + 1240 | 0, S0 = r + 468 | 0, _0 = r + 466 | 0, n0 = r + 470 | 0, U0 = r + 472 | 0, h2 = r + 474 | 0, E2 = r + 476 | 0, W0 = r + 478 | 0, F0 = r + 480 | 0, D0 = r + 444 | 0, x1 = r + 446 | 0, z0 = r + 448 | 0, X2 = r + 450 | 0, K2 = r + 452 | 0, r2 = r + 454 | 0, F2 = r + 456 | 0, O = 0, I = 0, m = 0, d = 0, M = -1; ; ) {
                M = (M << 16 >> 16) + 1 | 0, w = M & 65535, I = 1 - (I << 16 >> 16) | 0, E = I & 65535, v = z6 & m << 16 >> 16 == 80 ? 0 : m, b = i + 2 | 0, p = e[i >> 1] | 0;
                e: do
                  if (Ee) {
                    if (S = e[T >> 1] | 0, a = (S & 65535) - U6 & 65535, a = a << 16 >> 16 < 20 ? 20 : a, c = (a & 65535) + n5 & 65535, f = c << 16 >> 16 > 143, f3(p, f ? L : a, f ? 143 : c, v, S, f2, q2, F, S1), v = e[f2 >> 1] | 0, e[V >> 1] = v, j0 ? (p = e[T >> 1] | 0, p << 16 >> 16 < 143 && (p = (p & 65535) + 1 & 65535, e[T >> 1] = p), e[f2 >> 1] = p, e[q2 >> 1] = 0, (e[g >> 1] | 0) != 0 && !(B | (e[K >> 1] | 0) < 5) && (e[f2 >> 1] = v, p = v), v = 0) : (p = v, v = e[q2 >> 1] | 0), h5(l[Q >> 2] | 0, p, v, 40, 1, S1), x) {
                      if (v = i + 6 | 0, n3(w, e[i + 4 >> 1] | 0, e[b >> 1] | 0, l[H >> 2] | 0, q0, S1), i = e[e1 >> 1] | 0, S = i << 16 >> 16, p = S << 1, (p | 0) == (S << 17 >> 16 | 0)) {
                        c = W;
                        break;
                      }
                      c = W, p = i << 16 >> 16 > 0 ? 32767 : -32768;
                      break;
                    }
                    switch (t | 0) {
                      case 2: {
                        if (v = i + 6 | 0, t3(e[i + 4 >> 1] | 0, e[b >> 1] | 0, q0), i = e[e1 >> 1] | 0, S = i << 16 >> 16, p = S << 1, (p | 0) == (S << 17 >> 16 | 0)) {
                          c = W;
                          break e;
                        }
                        c = W, p = i << 16 >> 16 > 0 ? 32767 : -32768;
                        break e;
                      }
                      case 3: {
                        if (v = i + 6 | 0, o3(e[i + 4 >> 1] | 0, e[b >> 1] | 0, q0), i = e[e1 >> 1] | 0, S = i << 16 >> 16, p = S << 1, (p | 0) == (S << 17 >> 16 | 0)) {
                          c = W;
                          break e;
                        }
                        c = W, p = i << 16 >> 16 > 0 ? 32767 : -32768;
                        break e;
                      }
                      default: {
                        if (Y) {
                          if (v = i + 6 | 0, s3(e[i + 4 >> 1] | 0, e[b >> 1] | 0, l[s1 >> 2] | 0, q0), i = e[e1 >> 1] | 0, S = i << 16 >> 16, p = S << 1, (p | 0) == (S << 17 >> 16 | 0)) {
                            c = W;
                            break e;
                          }
                          c = W, p = i << 16 >> 16 > 0 ? 32767 : -32768;
                          break e;
                        }
                        if (!f1) {
                          c = W, D = 44;
                          break e;
                        }
                        if (l3(b, q0, S1), p = i + 16 | 0, i = e[e1 >> 1] | 0, S = i << 16 >> 16, w = S << 1, (w | 0) == (S << 17 >> 16 | 0)) {
                          v = p, c = W, p = w;
                          break e;
                        }
                        v = p, c = W, p = i << 16 >> 16 > 0 ? 32767 : -32768;
                        break e;
                      }
                    }
                  } else c3(p, 18, 143, v, f2, q2, S1), d1 && v << 16 >> 16 == 0 | p << 16 >> 16 < 61 ? (p = e[f2 >> 1] | 0, v = e[q2 >> 1] | 0) : (e[V >> 1] = e[f2 >> 1] | 0, p = e[T >> 1] | 0, e[f2 >> 1] = p, e[q2 >> 1] = 0, v = 0), h5(l[Q >> 2] | 0, p, v, 40, 0, S1), c = 0, D = 44;
                while (false);
                (D | 0) == 44 && (D = 0, j0 ? I5(b1, e[n >> 1] | 0, s0, S1) : e[s0 >> 1] = Je(t, e[b >> 1] | 0, l[m0 >> 2] | 0) | 0, O5(b1, x0, e[i1 >> 1] | 0, s0, S1), i3(i + 4 | 0, q0, l[s1 >> 2] | 0), p = i + 24 | 0, i = e[s0 >> 1] | 0, S = i << 16 >> 16, w = S << 1, (w | 0) == (S << 17 >> 16 | 0) ? (v = p, p = w) : (v = p, p = i << 16 >> 16 > 0 ? 32767 : -32768)), i = e[f2 >> 1] | 0;
                e: do
                  if (i << 16 >> 16 < 40) for (a = p << 16 >> 16, f = i, p = i << 16 >> 16; ; ) {
                    if (w = q0 + (p << 1) | 0, i = (k(e[q0 + (p - (f << 16 >> 16) << 1) >> 1] | 0, a) | 0) >> 15, (i | 0) > 32767 && (l[S1 >> 2] = 1, i = 32767), S = i & 65535, e[i2 >> 1] = S, e[w >> 1] = a1(e[w >> 1] | 0, S, S1) | 0, p = p + 1 | 0, (p & 65535) << 16 >> 16 == 40) break e;
                    f = e[f2 >> 1] | 0;
                  }
                while (false);
                e: do
                  if (c) c = (I & 65535 | 0) == 0, c ? (i = v, w = d) : (i = v + 2 | 0, w = e[v >> 1] | 0), d1 ? Ke(_1, t, w, q0, E, s0, G0, o5, S1) : (I5(b1, e[n >> 1] | 0, s0, S1), C5(h1, _1, e[n >> 1] | 0, G0, S1)), O5(b1, x0, e[i1 >> 1] | 0, s0, S1), P5(h1, x0, e[i1 >> 1] | 0, G0, S1), v = e[s0 >> 1] | 0, p = v << 16 >> 16 > 13017 ? 13017 : v, c ? D = 80 : S = w;
                  else switch (i = v + 2 | 0, p = e[v >> 1] | 0, t | 0) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 6: {
                      if (d1 ? Ke(_1, t, p, q0, E, s0, G0, o5, S1) : (I5(b1, e[n >> 1] | 0, s0, S1), C5(h1, _1, e[n >> 1] | 0, G0, S1)), O5(b1, x0, e[i1 >> 1] | 0, s0, S1), P5(h1, x0, e[i1 >> 1] | 0, G0, S1), v = e[s0 >> 1] | 0, p = v << 16 >> 16 > 13017 ? 13017 : v, !f1) {
                        w = d, D = 80;
                        break e;
                      }
                      if ((e[T >> 1] | 0) <= 45) {
                        w = d, D = 80;
                        break e;
                      }
                      w = d, p = p << 16 >> 16 >>> 2 & 65535, D = 80;
                      break e;
                    }
                    case 5: {
                      j0 ? I5(b1, e[n >> 1] | 0, s0, S1) : e[s0 >> 1] = Je(5, p, l[m0 >> 2] | 0) | 0, O5(b1, x0, e[i1 >> 1] | 0, s0, S1), d1 ? qe(_1, 5, e[i >> 1] | 0, q0, l[r0 >> 2] | 0, G0, S1) : C5(h1, _1, e[n >> 1] | 0, G0, S1), P5(h1, x0, e[i1 >> 1] | 0, G0, S1), p = e[s0 >> 1] | 0, i = v + 4 | 0, v = p, w = d, p = p << 16 >> 16 > 13017 ? 13017 : p, D = 80;
                      break e;
                    }
                    default: {
                      d1 ? qe(_1, t, p, q0, l[r0 >> 2] | 0, G0, S1) : C5(h1, _1, e[n >> 1] | 0, G0, S1), P5(h1, x0, e[i1 >> 1] | 0, G0, S1), p = e[s0 >> 1] | 0, v = p, w = d, D = 80;
                      break e;
                    }
                  }
                while (false);
                (D | 0) == 80 && (D = 0, e[e1 >> 1] = v << 16 >> 16 > 13017 ? 13017 : v, S = w), p = p << 16 >> 16, p = (p << 17 >> 17 | 0) == (p | 0) ? p << 1 : p >>> 15 ^ 32767, E = (p & 65535) << 16 >> 16 > 16384;
                e: do
                  if (E) {
                    if (b = p << 16 >> 16, k1) v = 0;
                    else for (v = 0; ; ) if (p = (k(e[(l[Q >> 2] | 0) + (v << 1) >> 1] | 0, b) | 0) >> 15, (p | 0) > 32767 && (l[S1 >> 2] = 1, p = 32767), e[i2 >> 1] = p, p = k(e[s0 >> 1] | 0, p << 16 >> 16) | 0, (p | 0) == 1073741824 ? (l[S1 >> 2] = 1, p = 2147483647) : p = p << 1, e[s5 + (v << 1) >> 1] = N1(p, S1) | 0, v = v + 1 | 0, (v | 0) == 40) break e;
                    do
                      p = (k(e[(l[Q >> 2] | 0) + (v << 1) >> 1] | 0, b) | 0) >> 15, (p | 0) > 32767 && (l[S1 >> 2] = 1, p = 32767), e[i2 >> 1] = p, p = k(e[s0 >> 1] | 0, p << 16 >> 16) | 0, (p | 0) != 1073741824 ? (p = p << 1, (p | 0) < 0 ? p = ~((p ^ -2) >> 1) : D = 88) : (l[S1 >> 2] = 1, p = 2147483647, D = 88), (D | 0) == 88 && (D = 0, p = p >> 1), e[s5 + (v << 1) >> 1] = N1(p, S1) | 0, v = v + 1 | 0;
                    while ((v | 0) != 40);
                  }
                while (false);
                switch (d1 && (e[_0 >> 1] = e[S0 >> 1] | 0, e[S0 >> 1] = e[n0 >> 1] | 0, e[n0 >> 1] = e[U0 >> 1] | 0, e[U0 >> 1] = e[h2 >> 1] | 0, e[h2 >> 1] = e[E2 >> 1] | 0, e[E2 >> 1] = e[W0 >> 1] | 0, e[W0 >> 1] = e[F0 >> 1] | 0, e[F0 >> 1] = e[R1 >> 1] | 0, e[R1 >> 1] = e[s0 >> 1] | 0), j0 | (e[i1 >> 1] | 0) != 0 && Z & (e[g >> 1] | 0) != 0 && (ye = e[s0 >> 1] | 0, ye << 16 >> 16 > 12288) && (D = (((ye << 16 >> 16) + 118784 | 0) >>> 1) + 12288 & 65535, e[s0 >> 1] = D << 16 >> 16 > 14745 ? 14745 : D), _3(Re, b5, m, Ae, S1), p = r3(G, t, e[G0 >> 1] | 0, Ae, T1, x0, e[i1 >> 1] | 0, u, e[Q1 >> 1] | 0, e[g >> 1] | 0, e[K >> 1] | 0, S1) | 0, t | 0) {
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 6: {
                    w = e[s0 >> 1] | 0, b = 1;
                    break;
                  }
                  default:
                    p = e[G0 >> 1] | 0, w = e[s0 >> 1] | 0, B1 ? b = 1 : (v = w << 16 >> 16, w << 16 >> 16 < 0 ? v = ~((v ^ -2) >> 1) : v = v >>> 1, w = v & 65535, b = 2);
                }
                a = w << 16 >> 16, m = b & 65535, v = l[Q >> 2] | 0, d = 0;
                do
                  v = v + (d << 1) | 0, e[y2 + (d << 1) >> 1] = e[v >> 1] | 0, v = k(e[v >> 1] | 0, a) | 0, (v | 0) == 1073741824 ? (l[S1 >> 2] = 1, f = 2147483647) : f = v << 1, c = k(e[G0 >> 1] | 0, e[q0 + (d << 1) >> 1] | 0) | 0, (c | 0) != 1073741824 ? (v = (c << 1) + f | 0, (c ^ f | 0) > 0 & (v ^ f | 0) < 0 && (l[S1 >> 2] = 1, v = (f >>> 31) + 2147483647 | 0)) : (l[S1 >> 2] = 1, v = 2147483647), D = v << m, D = N1((D >> m | 0) == (v | 0) ? D : v >> 31 ^ 2147483647, S1) | 0, v = l[Q >> 2] | 0, e[v + (d << 1) >> 1] = D, d = d + 1 | 0;
                while ((d | 0) != 40);
                y3(t0), Z && (e[K >> 1] | 0) > 3 && !((e[g >> 1] | 0) == 0 | U) && E3(t0), k3(t0, t, y2, p, e[s0 >> 1] | 0, q0, w, b, o5, S1), p = 0, c = 0;
                do
                  v = e[y2 + (c << 1) >> 1] | 0, v = k(v, v) | 0, (v | 0) != 1073741824 ? (w = (v << 1) + p | 0, (v ^ p | 0) > 0 & (w ^ p | 0) < 0 ? (l[S1 >> 2] = 1, p = (p >>> 31) + 2147483647 | 0) : p = w) : (l[S1 >> 2] = 1, p = 2147483647), c = c + 1 | 0;
                while ((c | 0) != 40);
                (p | 0) < 0 ? p = ~((p ^ -2) >> 1) : p = p >> 1, p = be(p, i2, S1) | 0, w = ((e[i2 >> 1] | 0) >>> 1) + 15 | 0, v = w & 65535, w = w << 16 >> 16, v << 16 >> 16 > 0 ? v << 16 >> 16 < 31 ? (p = p >> w, D = 135) : (p = 0, D = 137) : (b = 0 - w << 16 >> 16, D = p << b, p = (D >> b | 0) == (p | 0) ? D : p >> 31 ^ 2147483647, D = 135), (D | 0) == 135 && (D = 0, (p | 0) < 0 ? p = ~((p ^ -4) >> 2) : D = 137), (D | 0) == 137 && (D = 0, p = p >>> 2), p = p & 65535;
                do
                  if (Z && (ke = e[K >> 1] | 0, ke << 16 >> 16 > 5)) if (e[g >> 1] | 0) if ((e[n >> 1] | 0) < 4) {
                    if (j1 ? j0 | (e[Q1 >> 1] | 0) != 0 || (D = 145) : j0 || (D = 145), (D | 0) == 145 && (e[i1 >> 1] | 0) == 0) {
                      D = 147;
                      break;
                    }
                    d3(y2, p, G1, ke, e[i1 >> 1] | 0, B6, S1) | 0, D = 147;
                  } else D = 147;
                  else D = 151;
                  else D = 147;
                while (false);
                do
                  if ((D | 0) == 147) if (D = 0, e[g >> 1] | 0) {
                    if (!j0 && (e[i1 >> 1] | 0) == 0) {
                      D = 151;
                      break;
                    }
                    (e[n >> 1] | 0) >= 4 && (D = 151);
                  } else D = 151;
                while (false);
                if ((D | 0) == 151 && (D = 0, e[G1 >> 1] = e[D0 >> 1] | 0, e[D0 >> 1] = e[x1 >> 1] | 0, e[x1 >> 1] = e[z0 >> 1] | 0, e[z0 >> 1] = e[X2 >> 1] | 0, e[X2 >> 1] = e[K2 >> 1] | 0, e[K2 >> 1] = e[r2 >> 1] | 0, e[r2 >> 1] = e[F2 >> 1] | 0, e[F2 >> 1] = e[c0 >> 1] | 0, e[c0 >> 1] = p), E) {
                  p = 0;
                  do
                    E = s5 + (p << 1) | 0, e[E >> 1] = a1(e[E >> 1] | 0, e[y2 + (p << 1) >> 1] | 0, S1) | 0, p = p + 1 | 0;
                  while ((p | 0) != 40);
                  J4(y2, s5, 40, S1), l[S1 >> 2] = 0, N0(s, s5, o + (O << 1) | 0, 40, e0, 0);
                } else l[S1 >> 2] = 0, N0(s, y2, o + (O << 1) | 0, 40, e0, 0);
                if (!(l[S1 >> 2] | 0)) M2(e0 | 0, o + (O + 30 << 1) | 0, 20) | 0;
                else {
                  for (w = 193; ; ) if (v = r + (w << 1) | 0, E = e[v >> 1] | 0, p = E << 16 >> 16, E << 16 >> 16 < 0 ? p = ~((p ^ -4) >> 2) : p = p >>> 2, e[v >> 1] = p, (w | 0) > 0) w = w + -1 | 0;
                  else {
                    w = 39;
                    break;
                  }
                  for (; v = y2 + (w << 1) | 0, E = e[v >> 1] | 0, p = E << 16 >> 16, E << 16 >> 16 < 0 ? p = ~((p ^ -4) >> 2) : p = p >>> 2, e[v >> 1] = p, (w | 0) > 0; ) w = w + -1 | 0;
                  N0(s, y2, o + (O << 1) | 0, 40, e0, 1);
                }
                if (M2(r | 0, R0 | 0, 308) | 0, e[T >> 1] = e[f2 >> 1] | 0, p = O + 40 | 0, m = p & 65535, m << 16 >> 16 >= 160) break;
                O = p << 16 >> 16, s = s + 22 | 0, d = S;
              }
              e[g >> 1] = e3(r + 484 | 0, r + 466 | 0, o, K, S1) | 0, v3(U5, b5, o, S1), e[i1 >> 1] = x0, e[Q1 >> 1] = u, je(r + 626 | 0, b5, S1), i2 = _e, l[i2 >> 2] = _5, C = J0;
            }
            function Ke(r, t, i, n, o, s, u, a, f) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0;
              var c = 0, w = 0, v = 0, p = 0, m = 0;
              switch (m = C, C = C + 16 | 0, v = m + 2 | 0, p = m, i = i << 16 >> 16, i = (i << 18 >> 18 | 0) == (i | 0) ? i << 2 : i >>> 15 ^ 32767, t | 0) {
                case 3:
                case 4:
                case 6: {
                  w = i << 16 >> 16, i = l[a + 84 >> 2] | 0, e[s >> 1] = e[i + (w << 1) >> 1] | 0, a = e[i + (w + 1 << 1) >> 1] | 0, c = e[i + (w + 3 << 1) >> 1] | 0, s = e[i + (w + 2 << 1) >> 1] | 0;
                  break;
                }
                case 0: {
                  a = (i & 65535) + (o << 16 >> 16 << 1 ^ 2) | 0, a = (a & 65535) << 16 >> 16 > 1022 ? 1022 : a << 16 >> 16, e[s >> 1] = e[782 + (a << 1) >> 1] | 0, s = e[782 + (a + 1 << 1) >> 1] | 0, N2(s << 16 >> 16, p, v, f), e[p >> 1] = (R[p >> 1] | 0) + 65524, a = d5(e[v >> 1] | 0, 5, f) | 0, w = e[p >> 1] | 0, w = a1(a, ((w << 26 >> 26 | 0) == (w | 0) ? w << 10 : w >>> 15 ^ 32767) & 65535, f) | 0, a = e[v >> 1] | 0, i = e[p >> 1] | 0, (i * 24660 | 0) == 1073741824 ? (l[f >> 2] = 1, o = 2147483647) : o = i * 49320 | 0, c = (a << 16 >> 16) * 24660 >> 15, i = o + (c << 1) | 0, (o ^ c | 0) > 0 & (i ^ o | 0) < 0 && (l[f >> 2] = 1, i = (o >>> 31) + 2147483647 | 0), c = i << 13, a = s, c = N1((c >> 13 | 0) == (i | 0) ? c : i >> 31 ^ 2147483647, f) | 0, s = w;
                  break;
                }
                default:
                  w = i << 16 >> 16, i = l[a + 80 >> 2] | 0, e[s >> 1] = e[i + (w << 1) >> 1] | 0, a = e[i + (w + 1 << 1) >> 1] | 0, c = e[i + (w + 3 << 1) >> 1] | 0, s = e[i + (w + 2 << 1) >> 1] | 0;
              }
              if (r5(r, t, n, p, v, 0, 0, f), o = k((a2(14, e[v >> 1] | 0, f) | 0) << 16 >> 16, a << 16 >> 16) | 0, (o | 0) == 1073741824 ? (l[f >> 2] = 1, i = 2147483647) : i = o << 1, a = 10 - (R[p >> 1] | 0) | 0, o = a & 65535, a = a << 16 >> 16, o << 16 >> 16 > 0) {
                p = o << 16 >> 16 < 31 ? i >> a : 0, p = p >>> 16, p = p & 65535, e[u >> 1] = p, b2(r, s, c), C = m;
                return;
              } else {
                f = 0 - a << 16 >> 16, p = i << f, p = (p >> f | 0) == (i | 0) ? p : i >> 31 ^ 2147483647, p = p >>> 16, p = p & 65535, e[u >> 1] = p, b2(r, s, c), C = m;
                return;
              }
            }
            function f3(r, t, i, n, o, s, u, a, f) {
              if (r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, !(n << 16 >> 16)) {
                if (a = r << 16 >> 16, r << 16 >> 16 >= 197) {
                  e[s >> 1] = a + 65424, e[u >> 1] = 0;
                  return;
                }
                o = ((a << 16) + 131072 >> 16) * 10923 >> 15, (o | 0) > 32767 && (l[f >> 2] = 1, o = 32767), r = (o & 65535) + 19 | 0, e[s >> 1] = r, e[u >> 1] = a + 58 - ((r * 196608 | 0) >>> 16);
                return;
              }
              if (!(a << 16 >> 16)) {
                f = r << 16 >> 16 << 16, r = ((f + 131072 >> 16) * 21846 | 0) + -65536 >> 16, e[s >> 1] = r + (t & 65535), e[u >> 1] = ((f + -131072 | 0) >>> 16) - ((r * 196608 | 0) >>> 16);
                return;
              }
              if ((P1(o, t, f) | 0) << 16 >> 16 > 5 && (o = (t & 65535) + 5 & 65535), a = i << 16 >> 16, a = (a - (o & 65535) & 65535) << 16 >> 16 > 4 ? a + 65532 & 65535 : o, o = r << 16 >> 16, r << 16 >> 16 < 4) {
                e[s >> 1] = ((((a & 65535) << 16) + -327680 | 0) >>> 16) + o, e[u >> 1] = 0;
                return;
              }
              if (o = o << 16, r << 16 >> 16 < 12) {
                f = (((o + -327680 >> 16) * 10923 | 0) >>> 15 << 16) + -65536 | 0, r = f >> 16, e[s >> 1] = (a & 65535) + r, e[u >> 1] = ((o + -589824 | 0) >>> 16) - (f >>> 15) - r;
                return;
              } else {
                e[s >> 1] = ((o + -786432 + ((a & 65535) << 16) | 0) >>> 16) + 1, e[u >> 1] = 0;
                return;
              }
            }
            function c3(r, t, i, n, o, s, u) {
              if (r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, n << 16 >> 16) {
                u = (R[o >> 1] | 0) + 65531 | 0, u = (u << 16 >> 16 | 0) < (t << 16 >> 16 | 0) ? t : u & 65535, i = i << 16 >> 16, t = r << 16 >> 16 << 16, r = ((t + 327680 >> 16) * 10924 | 0) + -65536 >> 16, e[o >> 1] = (((((u & 65535) << 16) + 589824 >> 16 | 0) > (i | 0) ? i + 65527 & 65535 : u) & 65535) + r, e[s >> 1] = ((t + -196608 | 0) >>> 16) - ((r * 393216 | 0) >>> 16);
                return;
              }
              if (n = r << 16 >> 16, r << 16 >> 16 < 463) {
                r = ((((n << 16) + 327680 >> 16) * 10924 | 0) >>> 16) + 17 | 0, e[o >> 1] = r, e[s >> 1] = n + 105 - ((r * 393216 | 0) >>> 16);
                return;
              } else {
                e[o >> 1] = n + 65168, e[s >> 1] = 0;
                return;
              }
            }
            function qe(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0;
              w = C, C = C + 16 | 0, f = w + 6 | 0, a = w + 4 | 0, r5(r, t, n, f, a, w + 2 | 0, w, u), c = (i & 31) * 3 | 0, n = o + (c << 1) | 0, (P1(t & 65535, 7, u) | 0) << 16 >> 16 ? (i = a2(14, e[a >> 1] | 0, u) | 0, i = k(i << 16 >> 16, e[n >> 1] | 0) | 0, (i | 0) == 1073741824 ? (l[u >> 2] = 1, n = 2147483647) : n = i << 1, i = P1(9, e[f >> 1] | 0, u) | 0, a = i << 16 >> 16, i << 16 >> 16 > 0 ? a = i << 16 >> 16 < 31 ? n >> a : 0 : (u = 0 - a << 16 >> 16, a = n << u, a = (a >> u | 0) == (n | 0) ? a : n >> 31 ^ 2147483647), a = a >>> 16) : (f = a2(e[f >> 1] | 0, e[a >> 1] | 0, u) | 0, a = f << 16 >> 16, a = (k(((f << 20 >> 20 | 0) == (a | 0) ? f << 4 : a >>> 15 ^ 32767) << 16 >> 16, e[n >> 1] | 0) | 0) >> 15, (a | 0) > 32767 && (l[u >> 2] = 1, a = 32767), n = a << 16, i = n >> 16, (a << 17 >> 17 | 0) == (i | 0) ? a = n >> 15 : a = i >>> 15 ^ 32767), e[s >> 1] = a, b2(r, e[o + (c + 1 << 1) >> 1] | 0, e[o + (c + 2 << 1) >> 1] | 0), C = w;
            }
            function Je(r, t, i) {
              return r = r | 0, t = t | 0, i = i | 0, t = e[i + (t << 16 >> 16 << 1) >> 1] | 0, (r | 0) != 7 ? (r = t, r | 0) : (r = t & 65532, r | 0);
            }
            function Qe(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0;
              if (S = C, C = C + 48 | 0, m = S + 20 | 0, E = S, b = l[o + 44 >> 2] | 0, d = l[o + 64 >> 2] | 0, a = l[o + 4 >> 2] | 0, p = l[o + 12 >> 2] | 0, c = l[o + 20 >> 2] | 0, f = l[o + 56 >> 2] | 0, i << 16 >> 16) {
                a = 0;
                do
                  i = (e[r + 20 + (a << 1) >> 1] | 0) * 29491 >> 15, (i | 0) > 32767 && (l[u >> 2] = 1, i = 32767), f = (e[b + (a << 1) >> 1] | 0) * 3277 >> 15, (f | 0) > 32767 && (l[u >> 2] = 1, f = 32767), e[E + (a << 1) >> 1] = a1(f & 65535, i & 65535, u) | 0, a = a + 1 | 0;
                while ((a | 0) != 10);
                if ((t | 0) == 8) {
                  a = 0;
                  do
                    d = r + (a << 1) | 0, m = a1(e[b + (a << 1) >> 1] | 0, e[d >> 1] | 0, u) | 0, e[d >> 1] = P1(e[E + (a << 1) >> 1] | 0, m, u) | 0, a = a + 1 | 0;
                  while ((a | 0) != 10);
                  $0(E, 205, 10, u), a = r + 20 | 0, f = E, i = a + 20 | 0;
                  do
                    A[a >> 0] = A[f >> 0] | 0, a = a + 1 | 0, f = f + 1 | 0;
                  while ((a | 0) < (i | 0));
                  H0(E, s, 10, u), C = S;
                  return;
                } else a = 0;
                do
                  f = r + (a << 1) | 0, i = (k(e[d + (a << 1) >> 1] | 0, e[f >> 1] | 0) | 0) >> 15, (i | 0) > 32767 && (l[u >> 2] = 1, i = 32767), m = a1(e[b + (a << 1) >> 1] | 0, i & 65535, u) | 0, e[f >> 1] = P1(e[E + (a << 1) >> 1] | 0, m, u) | 0, a = a + 1 | 0;
                while ((a | 0) != 10);
                $0(E, 205, 10, u), a = r + 20 | 0, f = E, i = a + 20 | 0;
                do
                  A[a >> 0] = A[f >> 0] | 0, a = a + 1 | 0, f = f + 1 | 0;
                while ((a | 0) < (i | 0));
                H0(E, s, 10, u), C = S;
                return;
              } else {
                if (w = t >>> 0 < 2, w ? (i = 765, v = 508, c = l[o + 52 >> 2] | 0) : (o = (t | 0) == 5, i = o ? 1533 : 765, v = 2044, a = o ? f : a), f = e[n >> 1] | 0, i = ((f * 196608 >> 16 | 0) > (i & 65535 | 0) ? i : f * 3 & 65535) << 16 >> 16, f = e[a + (i << 1) >> 1] | 0, e[m >> 1] = f, e[m + 2 >> 1] = e[a + (i + 1 << 1) >> 1] | 0, e[m + 4 >> 1] = e[a + (i + 2 << 1) >> 1] | 0, i = e[n + 2 >> 1] | 0, w && (i = i << 16 >> 16 << 1 & 65535), w = (i << 16 >> 16) * 196608 | 0, w = (w | 0) > 100466688 ? 1533 : w >> 16, e[m + 6 >> 1] = e[p + (w << 1) >> 1] | 0, e[m + 8 >> 1] = e[p + (w + 1 << 1) >> 1] | 0, e[m + 10 >> 1] = e[p + (w + 2 << 1) >> 1] | 0, n = e[n + 4 >> 1] | 0, n = ((n << 18 >> 16 | 0) > (v & 65535 | 0) ? v : n << 2 & 65535) << 16 >> 16, e[m + 12 >> 1] = e[c + (n << 1) >> 1] | 0, e[m + 14 >> 1] = e[c + ((n | 1) << 1) >> 1] | 0, e[m + 16 >> 1] = e[c + ((n | 2) << 1) >> 1] | 0, e[m + 18 >> 1] = e[c + ((n | 3) << 1) >> 1] | 0, (t | 0) == 8) {
                  for (i = 0; d = r + (i << 1) | 0, e[E + (i << 1) >> 1] = a1(f, a1(e[b + (i << 1) >> 1] | 0, e[d >> 1] | 0, u) | 0, u) | 0, e[d >> 1] = f, i = i + 1 | 0, (i | 0) != 10; ) f = e[m + (i << 1) >> 1] | 0;
                  $0(E, 205, 10, u), a = r + 20 | 0, f = E, i = a + 20 | 0;
                  do
                    A[a >> 0] = A[f >> 0] | 0, a = a + 1 | 0, f = f + 1 | 0;
                  while ((a | 0) < (i | 0));
                  H0(E, s, 10, u), C = S;
                  return;
                } else a = 0;
                do
                  f = r + (a << 1) | 0, i = (k(e[d + (a << 1) >> 1] | 0, e[f >> 1] | 0) | 0) >> 15, (i | 0) > 32767 && (l[u >> 2] = 1, i = 32767), n = a1(e[b + (a << 1) >> 1] | 0, i & 65535, u) | 0, t = e[m + (a << 1) >> 1] | 0, e[E + (a << 1) >> 1] = a1(t, n, u) | 0, e[f >> 1] = t, a = a + 1 | 0;
                while ((a | 0) != 10);
                $0(E, 205, 10, u), a = r + 20 | 0, f = E, i = a + 20 | 0;
                do
                  A[a >> 0] = A[f >> 0] | 0, a = a + 1 | 0, f = f + 1 | 0;
                while ((a | 0) < (i | 0));
                H0(E, s, 10, u), C = S;
                return;
              }
            }
            function w3(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0, M2(r | 0, i + ((t << 16 >> 16) * 10 << 1) | 0, 20) | 0;
            }
            function m3(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0;
              if (S = C, C = C + 80 | 0, p = S + 60 | 0, m = S + 40 | 0, b = S + 20 | 0, E = S, d = l[n + 48 >> 2] | 0, c = l[n + 24 >> 2] | 0, w = l[n + 28 >> 2] | 0, v = l[n + 32 >> 2] | 0, t << 16 >> 16) {
                a = 0;
                do
                  p = d + (a << 1) | 0, i = a1(((e[p >> 1] | 0) * 1639 | 0) >>> 15 & 65535, ((e[r + 20 + (a << 1) >> 1] | 0) * 31128 | 0) >>> 15 & 65535, u) | 0, e[b + (a << 1) >> 1] = i, e[E + (a << 1) >> 1] = i, m = r + (a << 1) | 0, e[m >> 1] = P1(i, a1(e[p >> 1] | 0, ((e[m >> 1] | 0) * 21299 | 0) >>> 15 & 65535, u) | 0, u) | 0, a = a + 1 | 0;
                while ((a | 0) != 10);
                $0(b, 205, 10, u), $0(E, 205, 10, u), a = r + 20 | 0, n = E, t = a + 20 | 0;
                do
                  A[a >> 0] = A[n >> 0] | 0, a = a + 1 | 0, n = n + 1 | 0;
                while ((a | 0) < (t | 0));
                H0(b, o, 10, u), H0(E, s, 10, u), C = S;
                return;
              }
              t = l[n + 16 >> 2] | 0, n = l[n + 8 >> 2] | 0, f = e[i >> 1] | 0, f = ((f << 18 >> 18 | 0) == (f | 0) ? f << 2 : f >>> 15 ^ 32767) << 16 >> 16, e[p >> 1] = e[n + (f << 1) >> 1] | 0, e[p + 2 >> 1] = e[n + (f + 1 << 1) >> 1] | 0, e[m >> 1] = e[n + (f + 2 << 1) >> 1] | 0, e[m + 2 >> 1] = e[n + (f + 3 << 1) >> 1] | 0, f = e[i + 2 >> 1] | 0, f = ((f << 18 >> 18 | 0) == (f | 0) ? f << 2 : f >>> 15 ^ 32767) << 16 >> 16, e[p + 4 >> 1] = e[t + (f << 1) >> 1] | 0, e[p + 6 >> 1] = e[t + (f + 1 << 1) >> 1] | 0, e[m + 4 >> 1] = e[t + (f + 2 << 1) >> 1] | 0, e[m + 6 >> 1] = e[t + (f + 3 << 1) >> 1] | 0, f = e[i + 4 >> 1] | 0, n = f << 16 >> 16, f << 16 >> 16 < 0 ? t = ~((n ^ -2) >> 1) : t = n >>> 1, f = t << 16 >> 16, f = ((t << 18 >> 18 | 0) == (f | 0) ? t << 2 : f >>> 15 ^ 32767) << 16 >> 16, a = c + (f + 1 << 1) | 0, t = e[c + (f << 1) >> 1] | 0, n & 1 ? (t << 16 >> 16 == -32768 ? t = 32767 : t = 0 - (t & 65535) & 65535, e[p + 8 >> 1] = t, t = e[a >> 1] | 0, t << 16 >> 16 == -32768 ? t = 32767 : t = 0 - (t & 65535) & 65535, e[p + 10 >> 1] = t, t = e[c + (f + 2 << 1) >> 1] | 0, t << 16 >> 16 == -32768 ? t = 32767 : t = 0 - (t & 65535) & 65535, e[m + 8 >> 1] = t, t = e[c + (f + 3 << 1) >> 1] | 0, t << 16 >> 16 == -32768 ? t = 32767 : t = 0 - (t & 65535) & 65535, e[m + 10 >> 1] = t) : (e[p + 8 >> 1] = t, e[p + 10 >> 1] = e[a >> 1] | 0, e[m + 8 >> 1] = e[c + (f + 2 << 1) >> 1] | 0, e[m + 10 >> 1] = e[c + (f + 3 << 1) >> 1] | 0), a = e[i + 6 >> 1] | 0, a = ((a << 18 >> 18 | 0) == (a | 0) ? a << 2 : a >>> 15 ^ 32767) << 16 >> 16, e[p + 12 >> 1] = e[w + (a << 1) >> 1] | 0, e[p + 14 >> 1] = e[w + (a + 1 << 1) >> 1] | 0, e[m + 12 >> 1] = e[w + (a + 2 << 1) >> 1] | 0, e[m + 14 >> 1] = e[w + (a + 3 << 1) >> 1] | 0, a = e[i + 8 >> 1] | 0, a = ((a << 18 >> 18 | 0) == (a | 0) ? a << 2 : a >>> 15 ^ 32767) << 16 >> 16, e[p + 16 >> 1] = e[v + (a << 1) >> 1] | 0, e[p + 18 >> 1] = e[v + (a + 1 << 1) >> 1] | 0, e[m + 16 >> 1] = e[v + (a + 2 << 1) >> 1] | 0, e[m + 18 >> 1] = e[v + (a + 3 << 1) >> 1] | 0, a = 0;
              do
                n = r + (a << 1) | 0, t = (e[n >> 1] | 0) * 21299 >> 15, (t | 0) > 32767 && (l[u >> 2] = 1, t = 32767), v = a1(e[d + (a << 1) >> 1] | 0, t & 65535, u) | 0, e[b + (a << 1) >> 1] = a1(e[p + (a << 1) >> 1] | 0, v, u) | 0, i = e[m + (a << 1) >> 1] | 0, e[E + (a << 1) >> 1] = a1(i, v, u) | 0, e[n >> 1] = i, a = a + 1 | 0;
              while ((a | 0) != 10);
              $0(b, 205, 10, u), $0(E, 205, 10, u), a = r + 20 | 0, n = E, t = a + 20 | 0;
              do
                A[a >> 0] = A[n >> 0] | 0, a = a + 1 | 0, n = n + 1 | 0;
              while ((a | 0) < (t | 0));
              H0(b, o, 10, u), H0(E, s, 10, u), C = S;
            }
            function j5(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0;
              if (!r) return n = -1, n | 0;
              i = r, n = i + 20 | 0;
              do
                e[i >> 1] = 0, i = i + 2 | 0;
              while ((i | 0) < (n | 0));
              return M2(r + 20 | 0, t | 0, 20) | 0, n = 0, n | 0;
            }
            function Ze(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0, o = 0, s = 0;
              if (!r) return s = -1, s | 0;
              e[r >> 1] = 0, e[r + 2 >> 1] = 8192, t = r + 4 | 0, e[t >> 1] = 3500, e[r + 6 >> 1] = 3500, l[r + 8 >> 2] = 1887529304, e[r + 12 >> 1] = 3e4, e[r + 14 >> 1] = 26e3, e[r + 16 >> 1] = 21e3, e[r + 18 >> 1] = 15e3, e[r + 20 >> 1] = 8e3, e[r + 22 >> 1] = 0, e[r + 24 >> 1] = -8e3, e[r + 26 >> 1] = -15e3, e[r + 28 >> 1] = -21e3, e[r + 30 >> 1] = -26e3, e[r + 32 >> 1] = 3e4, e[r + 34 >> 1] = 26e3, e[r + 36 >> 1] = 21e3, e[r + 38 >> 1] = 15e3, e[r + 40 >> 1] = 8e3, e[r + 42 >> 1] = 0, e[r + 44 >> 1] = -8e3, e[r + 46 >> 1] = -15e3, e[r + 48 >> 1] = -21e3, e[r + 50 >> 1] = -26e3, e[r + 212 >> 1] = 0, e[r + 374 >> 1] = 0, e[r + 392 >> 1] = 0, i = r + 52 | 0, e[i >> 1] = 1384, e[r + 54 >> 1] = 2077, e[r + 56 >> 1] = 3420, e[r + 58 >> 1] = 5108, e[r + 60 >> 1] = 6742, e[r + 62 >> 1] = 8122, e[r + 64 >> 1] = 9863, e[r + 66 >> 1] = 11092, e[r + 68 >> 1] = 12714, e[r + 70 >> 1] = 13701, n = r + 72 | 0, o = i, s = n + 20 | 0;
              do
                A[n >> 0] = A[o >> 0] | 0, n = n + 1 | 0, o = o + 1 | 0;
              while ((n | 0) < (s | 0));
              n = r + 92 | 0, o = i, s = n + 20 | 0;
              do
                A[n >> 0] = A[o >> 0] | 0, n = n + 1 | 0, o = o + 1 | 0;
              while ((n | 0) < (s | 0));
              n = r + 112 | 0, o = i, s = n + 20 | 0;
              do
                A[n >> 0] = A[o >> 0] | 0, n = n + 1 | 0, o = o + 1 | 0;
              while ((n | 0) < (s | 0));
              n = r + 132 | 0, o = i, s = n + 20 | 0;
              do
                A[n >> 0] = A[o >> 0] | 0, n = n + 1 | 0, o = o + 1 | 0;
              while ((n | 0) < (s | 0));
              n = r + 152 | 0, o = i, s = n + 20 | 0;
              do
                A[n >> 0] = A[o >> 0] | 0, n = n + 1 | 0, o = o + 1 | 0;
              while ((n | 0) < (s | 0));
              n = r + 172 | 0, o = i, s = n + 20 | 0;
              do
                A[n >> 0] = A[o >> 0] | 0, n = n + 1 | 0, o = o + 1 | 0;
              while ((n | 0) < (s | 0));
              n = r + 192 | 0, o = i, s = n + 20 | 0;
              do
                A[n >> 0] = A[o >> 0] | 0, n = n + 1 | 0, o = o + 1 | 0;
              while ((n | 0) < (s | 0));
              return T2(r + 214 | 0, 0, 160) | 0, e[r + 376 >> 1] = 3500, e[r + 378 >> 1] = 3500, s = e[t >> 1] | 0, e[r + 380 >> 1] = s, e[r + 382 >> 1] = s, e[r + 384 >> 1] = s, e[r + 386 >> 1] = s, e[r + 388 >> 1] = s, e[r + 390 >> 1] = s, e[r + 394 >> 1] = 0, e[r + 396 >> 1] = 7, e[r + 398 >> 1] = 32767, e[r + 400 >> 1] = 0, e[r + 402 >> 1] = 0, e[r + 404 >> 1] = 0, l[r + 408 >> 2] = 1, e[r + 412 >> 1] = 0, s = 0, s | 0;
            }
            function p3(r, t, i, n, o, s, u, a, f, c, w, v) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0;
              var p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0, R1 = 0, Z = 0, G = 0;
              if (G = C, C = C + 304 | 0, f1 = G + 192 | 0, e1 = G + 168 | 0, _1 = G + 148 | 0, k1 = G + 216 | 0, b1 = G + 146 | 0, i1 = G + 144 | 0, Y = G + 124 | 0, s1 = G + 104 | 0, d1 = G + 84 | 0, h1 = G + 60 | 0, x = G + 40 | 0, W = G, Z = r + 404 | 0, R1 = r + 400 | 0, (e[Z >> 1] | 0) != 0 && (e[R1 >> 1] | 0) != 0) {
                Q = r + 394 | 0, e[Q >> 1] = e[636 + (u << 1) >> 1] | 0, I = e[r + 212 >> 1] | 0, O = I + 10 | 0, M2(r + 52 + (((O & 65535 | 0) == 80 ? 0 : O << 16 >> 16) << 1) | 0, r + 52 + (I << 1) | 0, 20) | 0, I = e[r + 392 >> 1] | 0, O = I + 1 | 0, e[r + 376 + (((O & 65535 | 0) == 8 ? 0 : O << 16 >> 16) << 1) >> 1] = e[r + 376 + (I << 1) >> 1] | 0, O = r + 4 | 0, e[O >> 1] = 0, I = W + 36 | 0, M = W + 32 | 0, F = W + 28 | 0, B = W + 24 | 0, U = W + 20 | 0, T = W + 16 | 0, L = W + 12 | 0, V = W + 8 | 0, g = W + 4 | 0, K = r + 52 | 0, d = W, H = d + 40 | 0;
                do
                  l[d >> 2] = 0, d = d + 4 | 0;
                while ((d | 0) < (H | 0));
                for (m = 0, p = 7; ; ) {
                  for (H = e[r + 376 + (p << 1) >> 1] | 0, D = H << 16 >> 16, H << 16 >> 16 < 0 ? D = ~((D ^ -8) >> 3) : D = D >>> 3, m = a1(m, D & 65535, v) | 0, e[O >> 1] = m, E = p * 10 | 0, d = 9; b = W + (d << 2) | 0, S = l[b >> 2] | 0, H = e[r + 52 + (d + E << 1) >> 1] | 0, D = H + S | 0, (H ^ S | 0) > -1 & (D ^ S | 0) < 0 && (l[v >> 2] = 1, D = (S >>> 31) + 2147483647 | 0), l[b >> 2] = D, (d | 0) > 0; ) d = d + -1 | 0;
                  if ((p | 0) <= 0) break;
                  p = p + -1 | 0;
                }
                for (e[x + 18 >> 1] = (l[I >> 2] | 0) >>> 3, e[x + 16 >> 1] = (l[M >> 2] | 0) >>> 3, e[x + 14 >> 1] = (l[F >> 2] | 0) >>> 3, e[x + 12 >> 1] = (l[B >> 2] | 0) >>> 3, e[x + 10 >> 1] = (l[U >> 2] | 0) >>> 3, e[x + 8 >> 1] = (l[T >> 2] | 0) >>> 3, e[x + 6 >> 1] = (l[L >> 2] | 0) >>> 3, e[x + 4 >> 1] = (l[V >> 2] | 0) >>> 3, e[x + 2 >> 1] = (l[g >> 2] | 0) >>> 3, e[x >> 1] = (l[W >> 2] | 0) >>> 3, H0(x, r + 12 | 0, 10, v), e[O >> 1] = P1(e[O >> 1] | 0, e[Q >> 1] | 0, v) | 0, K0(r + 214 | 0, K | 0, 160) | 0, x = 9; ; ) {
                  for (H = e[r + 214 + (x + 70 << 1) >> 1] | 0, b = H << 16 >> 16, W = e[r + 214 + (x + 60 << 1) >> 1] | 0, d = (W << 16 >> 16) + b | 0, (W ^ H) << 16 >> 16 > -1 & (d ^ b | 0) < 0 && (l[v >> 2] = 1, d = (b >>> 31) + 2147483647 | 0), H = e[r + 214 + (x + 50 << 1) >> 1] | 0, b = H + d | 0, (H ^ d | 0) > -1 & (b ^ d | 0) < 0 && (l[v >> 2] = 1, b = (d >>> 31) + 2147483647 | 0), H = e[r + 214 + (x + 40 << 1) >> 1] | 0, d = H + b | 0, (H ^ b | 0) > -1 & (d ^ b | 0) < 0 && (l[v >> 2] = 1, d = (b >>> 31) + 2147483647 | 0), H = e[r + 214 + (x + 30 << 1) >> 1] | 0, b = H + d | 0, (H ^ d | 0) > -1 & (b ^ d | 0) < 0 && (l[v >> 2] = 1, b = (d >>> 31) + 2147483647 | 0), H = e[r + 214 + (x + 20 << 1) >> 1] | 0, d = H + b | 0, (H ^ b | 0) > -1 & (d ^ b | 0) < 0 && (l[v >> 2] = 1, d = (b >>> 31) + 2147483647 | 0), H = e[r + 214 + (x + 10 << 1) >> 1] | 0, b = H + d | 0, (H ^ d | 0) > -1 & (b ^ d | 0) < 0 ? (l[v >> 2] = 1, d = (d >>> 31) + 2147483647 | 0) : d = b, H = e[r + 214 + (x << 1) >> 1] | 0, b = H + d | 0, (H ^ d | 0) > -1 & (b ^ d | 0) < 0 && (l[v >> 2] = 1, b = (d >>> 31) + 2147483647 | 0), (b | 0) < 0 ? b = ~((b ^ -8) >> 3) : b = b >>> 3, D = b & 65535, E = e[654 + (x << 1) >> 1] | 0, S = 7; p = r + 214 + ((S * 10 | 0) + x << 1) | 0, b = P1(e[p >> 1] | 0, D, v) | 0, e[p >> 1] = b, b = (k(E, b << 16 >> 16) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[p >> 1] = b, m = (b & 65535) - (b >>> 15 & 1) | 0, m = m << 16 >> 31 ^ m, d = m & 65535, d << 16 >> 16 > 655 && (d = (((m << 16 >> 16) + 261489 | 0) >>> 2) + 655 & 65535), d = d << 16 >> 16 > 1310 ? 1310 : d, b & 32768 ? b = 0 - (d & 65535) & 65535 : b = d, e[p >> 1] = b, (S | 0) > 0; ) S = S + -1 | 0;
                  if ((x | 0) > 0) x = x + -1 | 0;
                  else break;
                }
              }
              if (e[R1 >> 1] | 0) {
                D = r + 32 | 0, S = r + 12 | 0, d = D, E = S, H = d + 20 | 0;
                do
                  A[d >> 0] = A[E >> 0] | 0, d = d + 1 | 0, E = E + 1 | 0;
                while ((d | 0) < (H | 0));
                E = r + 4 | 0, m = e[E >> 1] | 0, p = r + 6 | 0, e[p >> 1] = m;
                do
                  if (e[r + 402 >> 1] | 0) {
                    d = e[r >> 1] | 0, e[r >> 1] = 0, d = d << 16 >> 16 < 32 ? d : 32, H = d << 16 >> 16, b = H << 10, (b | 0) != (H << 26 >> 16 | 0) && (l[v >> 2] = 1, b = d << 16 >> 16 > 0 ? 32767 : -32768), d << 16 >> 16 > 1 ? b = k0(1024, b & 65535) | 0 : b = 16384, e[r + 2 >> 1] = b, w3(i, e[a >> 1] | 0, l[f + 60 >> 2] | 0), Qe(i, 8, 0, a + 2 | 0, f, S, v), d = i, H = d + 20 | 0;
                    do
                      A[d >> 0] = 0, d = d + 1 | 0;
                    while ((d | 0) < (H | 0));
                    if (m = e[a + 8 >> 1] | 0, m = m << 16 >> 16 == 0 ? -32768 : ((m + 64 & 65535) > 127 ? m << 16 >> 16 > 0 ? 32767 : 32768 : m << 16 >> 16 << 9) + 60416 & 65535, e[E >> 1] = m, (e[r + 412 >> 1] | 0) != 0 && (l[r + 408 >> 2] | 0) != 0) break;
                    d = D, E = S, H = d + 20 | 0;
                    do
                      A[d >> 0] = A[E >> 0] | 0, d = d + 1 | 0, E = E + 1 | 0;
                    while ((d | 0) < (H | 0));
                    e[p >> 1] = m;
                  }
                while (false);
                d = m << 16 >> 16, m << 16 >> 16 < 0 ? d = ~((d ^ -2) >> 1) : d = d >>> 1, d = d + 56536 | 0, b = d << 16, (b | 0) > 0 ? d = 0 : d = (b | 0) < -946077696 ? -14436 : d & 65535, e[n >> 1] = d, e[n + 2 >> 1] = d, e[n + 4 >> 1] = d, e[n + 6 >> 1] = d, a = ((d << 16 >> 16) * 5443 | 0) >>> 15 & 65535, e[n + 8 >> 1] = a, e[n + 10 >> 1] = a, e[n + 12 >> 1] = a, e[n + 14 >> 1] = a;
              }
              for (d = ((e[636 + (u << 1) >> 1] | 0) * 104864 | 0) >>> 15 << 16, (d | 0) < 0 ? d = ~((d >> 16 ^ -32) >> 5) : d = d >> 21, u = r + 394 | 0, e[u >> 1] = a1(((e[u >> 1] | 0) * 29491 | 0) >>> 15 & 65535, d & 65535, v) | 0, n = (R[r >> 1] << 16) + 65536 | 0, d = n >> 16, f = r + 2 | 0, d = (k(((n << 10 >> 26 | 0) == (d | 0) ? n >>> 6 : d >>> 15 ^ 32767) << 16 >> 16, e[f >> 1] | 0) | 0) >> 15, (d | 0) > 32767 && (l[v >> 2] = 1, d = 32767), m = d & 65535, m << 16 >> 16 <= 1024 ? m << 16 >> 16 < -2048 ? S = -32768 : S = d << 4 & 65535 : S = 16384, a = r + 4 | 0, D = S << 16 >> 16, b = k(e[a >> 1] | 0, D) | 0, (b | 0) == 1073741824 ? (l[v >> 2] = 1, x = 2147483647) : x = b << 1, b = (k(e[r + 30 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), O = b & 65535, e[f1 + 18 >> 1] = O, b = (k(e[r + 28 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 + 16 >> 1] = b, b = (k(e[r + 26 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 + 14 >> 1] = b, b = (k(e[r + 24 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 + 12 >> 1] = b, b = (k(e[r + 22 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 + 10 >> 1] = b, b = (k(e[r + 20 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 + 8 >> 1] = b, b = (k(e[r + 18 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 + 6 >> 1] = b, b = (k(e[r + 16 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 + 4 >> 1] = b, b = (k(e[r + 14 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 + 2 >> 1] = b, b = (k(e[r + 12 >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[f1 >> 1] = b, n = r + 6 | 0, D = 16384 - (S & 65535) << 16 >> 16, b = k(e[n >> 1] | 0, D) | 0, (b | 0) != 1073741824 ? (d = (b << 1) + x | 0, (b ^ x | 0) > 0 & (d ^ x | 0) < 0 ? (l[v >> 2] = 1, W = (x >>> 31) + 2147483647 | 0) : W = d) : (l[v >> 2] = 1, W = 2147483647), d = O, E = 9; m = f1 + (E << 1) | 0, b = (k(e[r + 32 + (E << 1) >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), d = a1(d, b & 65535, v) | 0, e[m >> 1] = d, H = d << 16 >> 16, b = H << 1, (b | 0) != (H << 17 >> 16 | 0) && (l[v >> 2] = 1, b = d << 16 >> 16 > 0 ? 32767 : -32768), e[m >> 1] = b, b = E + -1 | 0, !((E | 0) <= 0); ) d = e[f1 + (b << 1) >> 1] | 0, E = b;
              x = r + 374 | 0, b = ((R[x >> 1] << 16) + -161021952 >> 16) * 9830 >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), b = 4096 - (b & 65535) | 0, d = b << 16, (d | 0) > 268369920 ? D = 32767 : D = (d | 0) < 0 ? 0 : b << 19 >> 16, Q = r + 8 | 0, b = $4(Q, 3) | 0, v5(f1, Y, 10, v), d = s1, E = Y, H = d + 20 | 0;
              do
                e[d >> 1] = e[E >> 1] | 0, d = d + 2 | 0, E = E + 2 | 0;
              while ((d | 0) < (H | 0));
              for (d = (b << 16 >> 16) * 10 | 0, E = 9; m = s1 + (E << 1) | 0, p = e[m >> 1] | 0, b = (k(e[r + 214 + (E + d << 1) >> 1] | 0, D) | 0) >> 15, (b | 0) > 32767 && (l[v >> 2] = 1, b = 32767), e[m >> 1] = a1(p, b & 65535, v) | 0, (E | 0) > 0; ) E = E + -1 | 0;
              $0(Y, 205, 10, v), $0(s1, 205, 10, v), d = i + 20 | 0, E = Y, H = d + 20 | 0;
              do
                A[d >> 0] = A[E >> 0] | 0, d = d + 1 | 0, E = E + 1 | 0;
              while ((d | 0) < (H | 0));
              H0(Y, f1, 10, v), H0(s1, d1, 10, v), X0(f1, e1, v), X0(d1, h1, v), d = w, E = e1, H = d + 22 | 0;
              do
                A[d >> 0] = A[E >> 0] | 0, d = d + 1 | 0, E = E + 1 | 0;
              while ((d | 0) < (H | 0));
              d = w + 22 | 0, E = e1, H = d + 22 | 0;
              do
                A[d >> 0] = A[E >> 0] | 0, d = d + 1 | 0, E = E + 1 | 0;
              while ((d | 0) < (H | 0));
              d = w + 44 | 0, E = e1, H = d + 22 | 0;
              do
                A[d >> 0] = A[E >> 0] | 0, d = d + 1 | 0, E = E + 1 | 0;
              while ((d | 0) < (H | 0));
              d = w + 66 | 0, E = e1, H = d + 22 | 0;
              do
                A[d >> 0] = A[E >> 0] | 0, d = d + 1 | 0, E = E + 1 | 0;
              while ((d | 0) < (H | 0));
              Z4(e1 + 2 | 0, _1, v), b = 0, d = 32767;
              do
                m = e[_1 + (b << 1) >> 1] | 0, m = k(m, m) | 0, m >>> 0 < 1073741824 ? m = 32767 - (m >>> 15) | 0 : (l[v >> 2] = 1, m = 0), d = (k(m << 16 >> 16, d << 16 >> 16) | 0) >> 15, (d | 0) > 32767 && (l[v >> 2] = 1, d = 32767), b = b + 1 | 0;
              while ((b | 0) != 10);
              for (N2(d << 16 >> 16, b1, i1, v), d = (R[b1 >> 1] << 16) + -983040 | 0, m = d >> 16, m = o0(P1(0, a1(((d << 12 >> 28 | 0) == (m | 0) ? d >>> 4 : m >>> 15 ^ 32767) & 65535, o0(e[i1 >> 1] | 0, 3, v) | 0, v) | 0, v) | 0, 1, v) | 0, d = (e[x >> 1] | 0) * 29491 >> 15, (d | 0) > 32767 && (l[v >> 2] = 1, d = 32767), b = m << 16 >> 16, m = b * 3277 >> 15, (m | 0) > 32767 && (l[v >> 2] = 1, m = 32767), e[x >> 1] = a1(d & 65535, m & 65535, v) | 0, m = W >> 10, p = m + 262144 | 0, (m | 0) > -1 & (p ^ m | 0) < 0 && (l[v >> 2] = 1, p = (m >>> 31) + 2147483647 | 0), i1 = b << 4, m = p - i1 | 0, ((m ^ p) & (p ^ i1) | 0) < 0 ? (l[v >> 2] = 1, p = (p >>> 31) + 2147483647 | 0) : p = m, i1 = e[u >> 1] << 5, m = i1 + p | 0, (i1 ^ p | 0) > -1 & (m ^ p | 0) < 0 && (l[v >> 2] = 1, m = (p >>> 31) + 2147483647 | 0), b = (a2(m >>> 16 & 65535, m >>> 1 & 32767, v) | 0) << 16 >> 16, T5(Q, k1, v), p = 39; d = k1 + (p << 1) | 0, m = (k(e[d >> 1] | 0, b) | 0) >> 15, (m | 0) > 32767 && (l[v >> 2] = 1, m = 32767), e[d >> 1] = m, (p | 0) > 0; ) p = p + -1 | 0;
              for (N0(h1, k1, c, 40, t, 1), T5(Q, k1, v), p = 39; d = k1 + (p << 1) | 0, m = (k(e[d >> 1] | 0, b) | 0) >> 15, (m | 0) > 32767 && (l[v >> 2] = 1, m = 32767), e[d >> 1] = m, (p | 0) > 0; ) p = p + -1 | 0;
              for (N0(h1, k1, c + 80 | 0, 40, t, 1), T5(Q, k1, v), p = 39; d = k1 + (p << 1) | 0, m = (k(e[d >> 1] | 0, b) | 0) >> 15, (m | 0) > 32767 && (l[v >> 2] = 1, m = 32767), e[d >> 1] = m, (p | 0) > 0; ) p = p + -1 | 0;
              for (N0(h1, k1, c + 160 | 0, 40, t, 1), T5(Q, k1, v), d = 39; p = k1 + (d << 1) | 0, m = (k(e[p >> 1] | 0, b) | 0) >> 15, (m | 0) > 32767 && (l[v >> 2] = 1, m = 32767), e[p >> 1] = m, (d | 0) > 0; ) d = d + -1 | 0;
              if (N0(h1, k1, c + 240 | 0, 40, t, 1), e[o + 14 >> 1] = 20, e[o + 16 >> 1] = 0, (s | 0) == 2) {
                m = e[r >> 1] | 0, m = m << 16 >> 16 > 32 ? 32 : m << 16 >> 16 < 1 ? 8 : m, c = m << 16 >> 16, p = c << 10, (p | 0) != (c << 26 >> 16 | 0) && (l[v >> 2] = 1, p = m << 16 >> 16 > 0 ? 32767 : -32768), e[f >> 1] = k0(1024, p & 65535) | 0, e[r >> 1] = 0, d = r + 32 | 0, E = r + 12 | 0, H = d + 20 | 0;
                do
                  A[d >> 0] = A[E >> 0] | 0, d = d + 1 | 0, E = E + 1 | 0;
                while ((d | 0) < (H | 0));
                v = e[a >> 1] | 0, e[n >> 1] = v, e[a >> 1] = (v & 65535) + 65280;
              }
              if (!(e[R1 >> 1] | 0)) {
                C = G;
                return;
              }
              do
                if (!(e[r + 402 >> 1] | 0)) {
                  if (e[Z >> 1] | 0) break;
                  C = G;
                  return;
                }
              while (false);
              e[r >> 1] = 0, e[r + 412 >> 1] = 1, C = G;
            }
            function v3(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0;
              for (f = C, C = C + 16 | 0, u = f + 2 | 0, a = f, e[a >> 1] = 0, s = r + 212 | 0, o = (R[s >> 1] | 0) + 10 | 0, o = (o & 65535 | 0) == 80 ? 0 : o & 65535, e[s >> 1] = o, M2(r + 52 + (o << 16 >> 16 << 1) | 0, t | 0, 20) | 0, o = 0, s = 159; c = e[i + (s << 1) >> 1] | 0, c = k(c, c) | 0, c = (c | 0) == 1073741824 ? 2147483647 : c << 1, t = c + o | 0, (c ^ o | 0) > -1 & (t ^ o | 0) < 0 ? (l[n >> 2] = 1, o = (o >>> 31) + 2147483647 | 0) : o = t, (s | 0) > 0; ) s = s + -1 | 0;
              N2(o, u, a, n), o = e[u >> 1] | 0, c = o << 16 >> 16, t = c << 10, (t | 0) != (c << 26 >> 16 | 0) && (l[n >> 2] = 1, t = o << 16 >> 16 > 0 ? 32767 : -32768), e[u >> 1] = t, c = e[a >> 1] | 0, o = c << 16 >> 16, c << 16 >> 16 < 0 ? o = ~((o ^ -32) >> 5) : o = o >>> 5, a = r + 392 | 0, c = (R[a >> 1] | 0) + 1 | 0, c = (c & 65535 | 0) == 8 ? 0 : c & 65535, e[a >> 1] = c, e[r + 376 + (c << 16 >> 16 << 1) >> 1] = o + 57015 + t, C = f;
            }
            function h3(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0;
              f = (t | 0) == 4, c = (t | 0) == 5, w = (t | 0) == 6, n = l[r + 408 >> 2] | 0;
              e: do
                if ((t + -4 | 0) >>> 0 < 3) a = 4;
                else {
                  if ((n + -1 | 0) >>> 0 < 2) switch (t | 0) {
                    case 2:
                    case 3:
                    case 7: {
                      a = 4;
                      break e;
                    }
                    default:
                  }
                  e[r >> 1] = 0, u = 0;
                }
              while (false);
              if ((a | 0) == 4) {
                e: do
                  if ((n | 0) == 2) {
                    switch (t | 0) {
                      case 2:
                      case 4:
                      case 6:
                      case 7:
                        break;
                      default: {
                        o = 1;
                        break e;
                      }
                    }
                    o = 2;
                  } else o = 1;
                while (false);
                u = (R[r >> 1] | 0) + 1 & 65535, e[r >> 1] = u, u = (t | 0) != 5 & u << 16 >> 16 > 50 ? 2 : o;
              }
              s = r + 398 | 0, c & (e[r + 412 >> 1] | 0) == 0 ? (e[s >> 1] = 0, o = 0) : o = e[s >> 1] | 0, o = a1(o, 1, i) | 0, e[s >> 1] = o, i = r + 404 | 0, e[i >> 1] = 0;
              e: do
                switch (t | 0) {
                  case 2:
                  case 4:
                  case 5:
                  case 6:
                  case 7: {
                    if ((t | 0) == 7 & (u | 0) == 0) a = 14;
                    else {
                      if (o << 16 >> 16 > 30) {
                        e[i >> 1] = 1, e[s >> 1] = 0, e[r + 396 >> 1] = 0;
                        break e;
                      }
                      if (o = r + 396 | 0, n = e[o >> 1] | 0, n << 16 >> 16) {
                        e[o >> 1] = (n & 65535) + 65535;
                        break e;
                      } else {
                        e[s >> 1] = 0;
                        break e;
                      }
                    }
                    break;
                  }
                  default:
                    a = 14;
                }
              while (false);
              return (a | 0) == 14 && (e[r + 396 >> 1] = 7), u ? (o = r + 400 | 0, e[o >> 1] = 0, n = r + 402 | 0, e[n >> 1] = 0, f ? (e[o >> 1] = 1, u | 0) : c ? (e[o >> 1] = 1, e[n >> 1] = 1, u | 0) : (w && (e[o >> 1] = 1, e[i >> 1] = 0), u | 0)) : u | 0;
            }
            function ee(r) {
              return r = r | 0, r ? (e[r >> 1] = 1, e[r + 2 >> 1] = 1, e[r + 4 >> 1] = 1, e[r + 6 >> 1] = 1, e[r + 8 >> 1] = 1, e[r + 10 >> 1] = 0, e[r + 12 >> 1] = 1, r = 0, r | 0) : (r = -1, r | 0);
            }
            function C5(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0;
              f = C, C = C + 16 | 0, a = f + 2 | 0, u = f, s = Y2(r, 5) | 0, r = r + 10 | 0, (P1(s, e[r >> 1] | 0, o) | 0) << 16 >> 16 > 0 && (s = e[r >> 1] | 0), s = (k(e[674 + (i << 16 >> 16 << 1) >> 1] | 0, s << 16 >> 16) | 0) >> 15, (s | 0) > 32767 && (l[o >> 2] = 1, s = 32767), e[n >> 1] = s, Jr(t, a, u, o), b2(t, e[a >> 1] | 0, e[u >> 1] | 0), C = f;
            }
            function P5(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, t << 16 >> 16 || (i << 16 >> 16 ? (t = r + 12 | 0, (P1(e[n >> 1] | 0, e[t >> 1] | 0, o) | 0) << 16 >> 16 > 0 && (e[n >> 1] = e[t >> 1] | 0)) : t = r + 12 | 0, e[t >> 1] = e[n >> 1] | 0), e[r + 10 >> 1] = e[n >> 1] | 0, o = r + 2 | 0, e[r >> 1] = e[o >> 1] | 0, i = r + 4 | 0, e[o >> 1] = e[i >> 1] | 0, o = r + 6 | 0, e[i >> 1] = e[o >> 1] | 0, r = r + 8 | 0, e[o >> 1] = e[r >> 1] | 0, e[r >> 1] = e[n >> 1] | 0;
            }
            function I5(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0;
              if (o = Y2(r, 5) | 0, r = r + 10 | 0, (P1(o, e[r >> 1] | 0, n) | 0) << 16 >> 16 > 0 && (o = e[r >> 1] | 0), o = (k(e[688 + (t << 16 >> 16 << 1) >> 1] | 0, o << 16 >> 16) | 0) >> 15, (o | 0) <= 32767) {
                n = o, n = n & 65535, e[i >> 1] = n;
                return;
              }
              l[n >> 2] = 1, n = 32767, n = n & 65535, e[i >> 1] = n;
            }
            function re(r) {
              return r = r | 0, r ? (e[r >> 1] = 1640, e[r + 2 >> 1] = 1640, e[r + 4 >> 1] = 1640, e[r + 6 >> 1] = 1640, e[r + 8 >> 1] = 1640, e[r + 10 >> 1] = 0, e[r + 12 >> 1] = 16384, r = 0, r | 0) : (r = -1, r | 0);
            }
            function O5(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, t << 16 >> 16 || (i << 16 >> 16 ? (t = r + 12 | 0, (P1(e[n >> 1] | 0, e[t >> 1] | 0, o) | 0) << 16 >> 16 > 0 && (e[n >> 1] = e[t >> 1] | 0)) : t = r + 12 | 0, e[t >> 1] = e[n >> 1] | 0), n = e[n >> 1] | 0, t = r + 10 | 0, e[t >> 1] = n, (P1(n, 16384, o) | 0) << 16 >> 16 > 0 ? (e[t >> 1] = 16384, t = 16384) : t = e[t >> 1] | 0, o = r + 2 | 0, e[r >> 1] = e[o >> 1] | 0, n = r + 4 | 0, e[o >> 1] = e[n >> 1] | 0, o = r + 6 | 0, e[n >> 1] = e[o >> 1] | 0, r = r + 8 | 0, e[o >> 1] = e[r >> 1] | 0, e[r >> 1] = t;
            }
            function d3(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0;
              if (f = Y2(i, 9) | 0, c = e[i + 16 >> 1] | 0, a = c << 16 >> 16, i = (a + (e[i + 14 >> 1] | 0) | 0) >>> 1, i = (a | 0) < (i << 16 >> 16 | 0) ? c : i & 65535, !(t << 16 >> 16 > 5 && f << 16 >> 16 > t << 16 >> 16)) return 0;
              a = i << 16 >> 16, a = ((a << 18 >> 18 | 0) == (a | 0) ? a << 2 : a >>> 15 ^ 32767) & 65535, n << 16 >> 16 > 6 & o << 16 >> 16 == 0 || (a = P1(a, i, u) | 0), f = f << 16 >> 16 > a << 16 >> 16 ? a : f, c = i5(t) | 0, a = c << 16 >> 16, c << 16 >> 16 < 0 ? (i = 0 - a << 16, (i | 0) < 983040 ? a = t << 16 >> 16 >> (i >> 16) & 65535 : a = 0) : (i = t << 16 >> 16, o = i << a, (o << 16 >> 16 >> a | 0) == (i | 0) ? a = o & 65535 : a = (i >>> 15 ^ 32767) & 65535), n = k((k0(16383, a) | 0) << 16 >> 16, f << 16 >> 16) | 0, (n | 0) == 1073741824 ? (l[u >> 2] = 1, o = 2147483647) : o = n << 1, n = P1(20, c, u) | 0, a = n << 16 >> 16, n << 16 >> 16 > 0 ? n = n << 16 >> 16 < 31 ? o >> a : 0 : (t = 0 - a << 16 >> 16, n = o << t, n = (n >> t | 0) == (o | 0) ? n : o >> 31 ^ 2147483647), n = (n | 0) > 32767 ? 32767 : n & 65535, n = s << 16 >> 16 != 0 & n << 16 >> 16 > 3072 ? 3072 : n << 16 >> 16, i = 0;
              do
                o = r + (i << 1) | 0, a = k(e[o >> 1] | 0, n) | 0, (a | 0) == 1073741824 ? (l[u >> 2] = 1, a = 2147483647) : a = a << 1, e[o >> 1] = a >>> 11, i = i + 1 | 0;
              while ((i | 0) != 40);
              return 0;
            }
            function b3(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0;
              if (o = l[n + 104 >> 2] | 0, s = l[n + 96 >> 2] | 0, r >>> 0 >= 8) {
                if (e[i >> 1] = (z[t >> 0] | 0) >>> 4 & 1, e[i + 2 >> 1] = (z[t >> 0] | 0) >>> 5 & 1, e[i + 4 >> 1] = (z[t >> 0] | 0) >>> 6 & 1, e[i + 6 >> 1] = (z[t >> 0] | 0) >>> 7 & 255, o = o + (r << 1) | 0, (e[o >> 1] | 0) > 1) r = 1, n = 1, s = 4;
                else return;
                for (; u = t + r | 0, r = s | 1, e[i + (s << 16 >> 16 << 1) >> 1] = z[u >> 0] & 1, e[i + (r << 16 >> 16 << 1) >> 1] = (z[u >> 0] | 0) >>> 1 & 1, a = s | 3, e[i + (r + 1 << 16 >> 16 << 16 >> 16 << 1) >> 1] = (z[u >> 0] | 0) >>> 2 & 1, e[i + (a << 16 >> 16 << 1) >> 1] = (z[u >> 0] | 0) >>> 3 & 1, e[i + (a + 1 << 16 >> 16 << 16 >> 16 << 1) >> 1] = (z[u >> 0] | 0) >>> 4 & 1, e[i + (a + 2 << 16 >> 16 << 16 >> 16 << 1) >> 1] = (z[u >> 0] | 0) >>> 5 & 1, e[i + (a + 3 << 16 >> 16 << 16 >> 16 << 1) >> 1] = (z[u >> 0] | 0) >>> 6 & 1, e[i + (a + 4 << 16 >> 16 << 16 >> 16 << 1) >> 1] = (z[u >> 0] | 0) >>> 7 & 255, n = n + 1 << 16 >> 16, n << 16 >> 16 < (e[o >> 1] | 0); ) r = n << 16 >> 16, s = s + 8 << 16 >> 16;
                return;
              }
              if (a = l[(l[n + 100 >> 2] | 0) + (r << 2) >> 2] | 0, e[i + (e[a >> 1] << 1) >> 1] = (z[t >> 0] | 0) >>> 4 & 1, e[i + (e[a + 2 >> 1] << 1) >> 1] = (z[t >> 0] | 0) >>> 5 & 1, e[i + (e[a + 4 >> 1] << 1) >> 1] = (z[t >> 0] | 0) >>> 6 & 1, e[i + (e[a + 6 >> 1] << 1) >> 1] = (z[t >> 0] | 0) >>> 7 & 255, u = o + (r << 1) | 0, !((e[u >> 1] | 0) <= 1)) for (n = s + (r << 1) | 0, o = 1, r = 1, s = 4; o = t + o | 0, s = s << 16 >> 16, (s | 0) < (e[n >> 1] | 0) && (e[i + (e[a + (s << 1) >> 1] << 1) >> 1] = z[o >> 0] & 1, s = s + 1 | 0, (s | 0) < (e[n >> 1] | 0) && (e[i + (e[a + (s << 1) >> 1] << 1) >> 1] = (z[o >> 0] | 0) >>> 1 & 1, s = s + 1 | 0, (s | 0) < (e[n >> 1] | 0) && (e[i + (e[a + (s << 1) >> 1] << 1) >> 1] = (z[o >> 0] | 0) >>> 2 & 1, s = s + 1 | 0, (s | 0) < (e[n >> 1] | 0) && (e[i + (e[a + (s << 1) >> 1] << 1) >> 1] = (z[o >> 0] | 0) >>> 3 & 1, s = s + 1 | 0, (s | 0) < (e[n >> 1] | 0) && (e[i + (e[a + (s << 1) >> 1] << 1) >> 1] = (z[o >> 0] | 0) >>> 4 & 1, s = s + 1 | 0, (s | 0) < (e[n >> 1] | 0) && (e[i + (e[a + (s << 1) >> 1] << 1) >> 1] = (z[o >> 0] | 0) >>> 5 & 1, s = s + 1 | 0, (s | 0) < (e[n >> 1] | 0) && (e[i + (e[a + (s << 1) >> 1] << 1) >> 1] = (z[o >> 0] | 0) >>> 6 & 1, s = s + 1 | 0, (s | 0) < (e[n >> 1] | 0) && (e[i + (e[a + (s << 1) >> 1] << 1) >> 1] = (z[o >> 0] | 0) >>> 7 & 1, s = s + 1 | 0)))))))), r = r + 1 << 16 >> 16, r << 16 >> 16 < (e[u >> 1] | 0); ) o = r << 16 >> 16;
            }
            function _3(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0;
              switch (i << 16 >> 16) {
                case 0: {
                  for (f = 9; a = e[r + (f << 1) >> 1] | 0, i = a << 16 >> 16, a << 16 >> 16 < 0 ? i = ~((i ^ -4) >> 2) : i = i >>> 2, u = e[t + (f << 1) >> 1] | 0, s = u << 16 >> 16, u << 16 >> 16 < 0 ? u = ~((s ^ -4) >> 2) : u = s >>> 2, e[n + (f << 1) >> 1] = a1((a & 65535) - i & 65535, u & 65535, o) | 0, (f | 0) > 0; ) f = f + -1 | 0;
                  return;
                }
                case 40: {
                  for (u = 9; o = e[r + (u << 1) >> 1] | 0, i = o << 16 >> 16, o << 16 >> 16 < 0 ? s = ~((i ^ -2) >> 1) : s = i >>> 1, o = e[t + (u << 1) >> 1] | 0, i = o << 16 >> 16, o << 16 >> 16 < 0 ? i = ~((i ^ -2) >> 1) : i = i >>> 1, e[n + (u << 1) >> 1] = i + s, (u | 0) > 0; ) u = u + -1 | 0;
                  return;
                }
                case 80: {
                  for (f = 9; a = e[r + (f << 1) >> 1] | 0, i = a << 16 >> 16, a << 16 >> 16 < 0 ? a = ~((i ^ -4) >> 2) : a = i >>> 2, i = e[t + (f << 1) >> 1] | 0, s = i << 16 >> 16, i << 16 >> 16 < 0 ? u = ~((s ^ -4) >> 2) : u = s >>> 2, e[n + (f << 1) >> 1] = a1(a & 65535, (i & 65535) - u & 65535, o) | 0, (f | 0) > 0; ) f = f + -1 | 0;
                  return;
                }
                case 120: {
                  e[n + 18 >> 1] = e[t + 18 >> 1] | 0, e[n + 16 >> 1] = e[t + 16 >> 1] | 0, e[n + 14 >> 1] = e[t + 14 >> 1] | 0, e[n + 12 >> 1] = e[t + 12 >> 1] | 0, e[n + 10 >> 1] = e[t + 10 >> 1] | 0, e[n + 8 >> 1] = e[t + 8 >> 1] | 0, e[n + 6 >> 1] = e[t + 6 >> 1] | 0, e[n + 4 >> 1] = e[t + 4 >> 1] | 0, e[n + 2 >> 1] = e[t + 2 >> 1] | 0, e[n >> 1] = e[t >> 1] | 0;
                  return;
                }
                default:
                  return;
              }
            }
            function $e(r, t) {
              return r = r | 0, t = t | 0, r ? (M2(r | 0, t | 0, 20) | 0, r = 0, r | 0) : (r = -1, r | 0);
            }
            function je(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0;
              c = 0;
              do
                f = r + (c << 1) | 0, n = e[f >> 1] | 0, u = n & 65535, a = u << 16, n = n << 16 >> 16, (n * 5243 | 0) == 1073741824 ? (l[i >> 2] = 1, s = 2147483647) : s = n * 10486 | 0, o = a - s | 0, ((o ^ a) & (s ^ a) | 0) < 0 ? (l[i >> 2] = 1, s = (u >>> 15) + 2147483647 | 0) : s = o, n = e[t + (c << 1) >> 1] | 0, o = n * 5243 | 0, (o | 0) != 1073741824 ? (n = (n * 10486 | 0) + s | 0, (o ^ s | 0) > 0 & (n ^ s | 0) < 0 && (l[i >> 2] = 1, n = (s >>> 31) + 2147483647 | 0)) : (l[i >> 2] = 1, n = 2147483647), e[f >> 1] = N1(n, i) | 0, c = c + 1 | 0;
              while ((c | 0) != 10);
            }
            function e6(r) {
              r = r | 0;
              var t = 0;
              if (!r) return t = -1, t | 0;
              t = r + 18 | 0;
              do
                e[r >> 1] = 0, r = r + 2 | 0;
              while ((r | 0) < (t | 0));
              return t = 0, t | 0;
            }
            function E3(r) {
              r = r | 0, e[r + 14 >> 1] = 1;
            }
            function y3(r) {
              r = r | 0, e[r + 14 >> 1] = 0;
            }
            function k3(r, t, i, n, o, s, u, a, f, c) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0;
              var w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0;
              T = C, C = C + 160 | 0, F = T + 80 | 0, B = T, D = l[f + 120 >> 2] | 0, O = l[f + 124 >> 2] | 0, I = l[f + 128 >> 2] | 0, S = l[f + 132 >> 2] | 0, v = r + 6 | 0, E = r + 8 | 0, e[E >> 1] = e[v >> 1] | 0, d = r + 4 | 0, e[v >> 1] = e[d >> 1] | 0, b = r + 2 | 0, e[d >> 1] = e[b >> 1] | 0, e[b >> 1] = e[r >> 1] | 0, e[r >> 1] = o, f = o << 16 >> 16 < 14746 ? o << 16 >> 16 > 9830 & 1 : 2, w = r + 12 | 0, o = e[w >> 1] | 0, p = o << 15;
              do
                if ((p | 0) <= 536870911) if ((p | 0) < -536870912) {
                  l[c >> 2] = 1, o = -2147483648;
                  break;
                } else {
                  o = o << 17;
                  break;
                }
                else l[c >> 2] = 1, o = 2147483647;
              while (false);
              switch (M = n << 16 >> 16, m = r + 16 | 0, (N1(o, c) | 0) << 16 >> 16 >= n << 16 >> 16 ? (p = e[m >> 1] | 0, p << 16 >> 16 > 0 && (p = (p & 65535) + 65535 & 65535, e[m >> 1] = p), p << 16 >> 16 || (o = (e[r >> 1] | 0) < 9830, o = (e[b >> 1] | 0) < 9830 ? o ? 2 : 1 : o & 1, (e[d >> 1] | 0) < 9830 && (o = (o & 65535) + 1 & 65535), (e[v >> 1] | 0) < 9830 && (o = (o & 65535) + 1 & 65535), (e[E >> 1] | 0) < 9830 && (o = (o & 65535) + 1 & 65535), p = 0, f = o << 16 >> 16 > 2 ? 0 : f)) : (e[m >> 1] = 2, p = 2), b = f << 16 >> 16, E = r + 10 | 0, b = p << 16 >> 16 == 0 && (b | 0) > ((e[E >> 1] | 0) + 1 | 0) ? b + 65535 & 65535 : f, r = (e[r + 14 >> 1] | 0) == 1 ? 0 : n << 16 >> 16 < 10 ? 2 : b << 16 >> 16 < 2 & p << 16 >> 16 > 0 ? (b & 65535) + 1 & 65535 : b, e[E >> 1] = r, e[w >> 1] = n, t | 0) {
                case 4:
                case 6:
                case 7:
                  break;
                default:
                  if (r << 16 >> 16 < 2) {
                    for (p = 0, f = 0, v = s, w = F; ; ) if (e[v >> 1] | 0 ? (f = f << 16 >> 16, e[B + (f << 1) >> 1] = p, o = e[v >> 1] | 0, f = f + 1 & 65535) : o = 0, e[w >> 1] = o, e[v >> 1] = 0, p = p + 1 << 16 >> 16, p << 16 >> 16 >= 40) {
                      E = f;
                      break;
                    } else v = v + 2 | 0, w = w + 2 | 0;
                    if (b = r << 16 >> 16 == 0, b = (t | 0) == 5 ? b ? D : O : b ? I : S, E << 16 >> 16 > 0) {
                      d = 0;
                      do {
                        if (m = e[B + (d << 1) >> 1] | 0, f = m << 16 >> 16, r = e[F + (f << 1) >> 1] | 0, m << 16 >> 16 < 40) {
                          for (p = r << 16 >> 16, v = 39 - m & 65535, w = m, f = s + (f << 1) | 0, o = b; t = (k(e[o >> 1] | 0, p) | 0) >>> 15 & 65535, e[f >> 1] = a1(e[f >> 1] | 0, t, c) | 0, w = w + 1 << 16 >> 16, !(w << 16 >> 16 >= 40); ) f = f + 2 | 0, o = o + 2 | 0;
                          m << 16 >> 16 > 0 && (f = b + (v + 1 << 1) | 0, U = 36);
                        } else f = b, U = 36;
                        if ((U | 0) == 36) for (U = 0, o = r << 16 >> 16, p = 0, v = s; t = (k(e[f >> 1] | 0, o) | 0) >>> 15 & 65535, e[v >> 1] = a1(e[v >> 1] | 0, t, c) | 0, p = p + 1 << 16 >> 16, !(p << 16 >> 16 >= m << 16 >> 16); ) v = v + 2 | 0, f = f + 2 | 0;
                        d = d + 1 | 0;
                      } while ((d & 65535) << 16 >> 16 != E << 16 >> 16);
                    }
                  }
              }
              if (d = u << 16 >> 16, b = M << 1, o = a << 16 >> 16, w = 0 - o << 16, f = w >> 16, a << 16 >> 16 > 0) {
                for (p = 0, v = i; r = k(e[i + (p << 1) >> 1] | 0, d) | 0, (r | 0) == 1073741824 ? (l[c >> 2] = 1, w = 2147483647) : w = r << 1, a = k(b, e[s >> 1] | 0) | 0, r = a + w | 0, (a ^ w | 0) > -1 & (r ^ w | 0) < 0 && (l[c >> 2] = 1, r = (w >>> 31) + 2147483647 | 0), a = r << o, e[v >> 1] = N1((a >> o | 0) == (r | 0) ? a : r >> 31 ^ 2147483647, c) | 0, p = p + 1 | 0, (p | 0) != 40; ) s = s + 2 | 0, v = v + 2 | 0;
                C = T;
                return;
              }
              if ((w | 0) < 2031616) {
                for (p = 0, v = i; r = k(e[i + (p << 1) >> 1] | 0, d) | 0, (r | 0) == 1073741824 ? (l[c >> 2] = 1, w = 2147483647) : w = r << 1, a = k(b, e[s >> 1] | 0) | 0, r = a + w | 0, (a ^ w | 0) > -1 & (r ^ w | 0) < 0 && (l[c >> 2] = 1, r = (w >>> 31) + 2147483647 | 0), e[v >> 1] = N1(r >> f, c) | 0, p = p + 1 | 0, (p | 0) != 40; ) s = s + 2 | 0, v = v + 2 | 0;
                C = T;
                return;
              } else {
                for (v = 0, w = i; r = k(e[i + (v << 1) >> 1] | 0, d) | 0, (r | 0) == 1073741824 ? (l[c >> 2] = 1, r = 2147483647) : r = r << 1, a = k(b, e[s >> 1] | 0) | 0, (a ^ r | 0) > -1 & (a + r ^ r | 0) < 0 && (l[c >> 2] = 1), e[w >> 1] = N1(0, c) | 0, v = v + 1 | 0, (v | 0) != 40; ) s = s + 2 | 0, w = w + 2 | 0;
                C = T;
                return;
              }
            }
            function r6(r) {
              return r = r | 0, r ? (e[r >> 1] = 0, e[r + 2 >> 1] = 0, e[r + 4 >> 1] = 0, e[r + 6 >> 1] = 0, e[r + 8 >> 1] = 0, e[r + 10 >> 1] = 0, r = 0, r | 0) : (r = -1, r | 0);
            }
            function A3(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0;
              if (!(i << 16 >> 16 <= 0)) for (o = r + 10 | 0, f = r + 8 | 0, w = r + 4 | 0, v = r + 6 | 0, p = r + 2 | 0, s = e[w >> 1] | 0, u = e[v >> 1] | 0, a = e[r >> 1] | 0, c = e[p >> 1] | 0, m = 0; d = e[o >> 1] | 0, b = e[f >> 1] | 0, e[o >> 1] = b, E = e[t >> 1] | 0, e[f >> 1] = E, d = ((E << 16 >> 16) * 7699 | 0) + ((k(a << 16 >> 16, -7667) | 0) + (((s << 16 >> 16) * 15836 | 0) + ((u << 16 >> 16) * 15836 >> 15)) + ((k(c << 16 >> 16, -7667) | 0) >> 15)) + (k(b << 16 >> 16, -15398) | 0) + ((d << 16 >> 16) * 7699 | 0) | 0, b = d << 3, d = (b >> 3 | 0) == (d | 0) ? b : d >> 31 ^ 2147483647, b = d << 1, e[t >> 1] = N1((b >> 1 | 0) == (d | 0) ? b : d >> 31 ^ 2147483647, n) | 0, a = e[w >> 1] | 0, e[r >> 1] = a, c = e[v >> 1] | 0, e[p >> 1] = c, s = d >>> 16 & 65535, e[w >> 1] = s, u = (d >>> 1) - (d >> 16 << 15) & 65535, e[v >> 1] = u, m = m + 1 << 16 >> 16, !(m << 16 >> 16 >= i << 16 >> 16); ) t = t + 2 | 0;
            }
            function R3(r) {
              return r = r | 0, r ? (e[r >> 1] = 0, r = 0) : r = -1, r | 0;
            }
            function i6(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0;
              if (a = n << 16 >> 16, s = t + (a + -1 << 1) | 0, a = a + -2 | 0, f = e[s >> 1] | 0, n << 16 >> 16 < 2) n = i << 16 >> 16;
              else for (n = i << 16 >> 16, u = 0, t = t + (a << 1) | 0; i = (k(e[t >> 1] | 0, n) | 0) >> 15, (i | 0) > 32767 && (l[o >> 2] = 1, i = 32767), e[s >> 1] = P1(e[s >> 1] | 0, i & 65535, o) | 0, s = s + -2 | 0, u = u + 1 << 16 >> 16, !((u << 16 >> 16 | 0) > (a | 0)); ) t = t + -2 | 0;
              if (n = (k(e[r >> 1] | 0, n) | 0) >> 15, (n | 0) <= 32767) {
                a = n, a = a & 65535, u = e[s >> 1] | 0, o = P1(u, a, o) | 0, e[s >> 1] = o, e[r >> 1] = f;
                return;
              }
              l[o >> 2] = 1, a = 32767, a = a & 65535, u = e[s >> 1] | 0, o = P1(u, a, o) | 0, e[s >> 1] = o, e[r >> 1] = f;
            }
            function S3(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0;
              if (!r) return n = -1, n | 0;
              T2(r + 104 | 0, 0, 340) | 0, t = r + 102 | 0, i = r, n = i + 100 | 0;
              do
                e[i >> 1] = 0, i = i + 2 | 0;
              while ((i | 0) < (n | 0));
              return q4(t) | 0, R3(r + 100 | 0) | 0, n = 0, n | 0;
            }
            function D3(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0;
              if (D = C, C = C + 96 | 0, d = D + 22 | 0, b = D, E = D + 44 | 0, M2(r + 124 | 0, i | 0, 320) | 0, w = E + 22 | 0, v = r + 100 | 0, p = r + 80 | 0, m = r + 102 | 0, (t & -2 | 0) == 6) {
                for (c = 0; ; ) {
                  _2(n, 702, d), _2(n, 722, b), f = r + 104 + (c + 10 << 1) | 0, t5(d, f, r, 40), u = E, s = d, t = u + 22 | 0;
                  do
                    e[u >> 1] = e[s >> 1] | 0, u = u + 2 | 0, s = s + 2 | 0;
                  while ((u | 0) < (t | 0));
                  u = w, t = u + 22 | 0;
                  do
                    e[u >> 1] = 0, u = u + 2 | 0;
                  while ((u | 0) < (t | 0));
                  N0(b, E, E, 22, w, 0), t = 0, u = 21;
                  do {
                    if (s = e[E + (u << 16 >> 16 << 1) >> 1] | 0, s = k(s, s) | 0, (s | 0) == 1073741824) {
                      S = 7;
                      break;
                    }
                    a = s << 1, s = a + t | 0, (a ^ t | 0) > -1 & (s ^ t | 0) < 0 ? (l[o >> 2] = 1, t = (t >>> 31) + 2147483647 | 0) : t = s, u = u + -1 << 16 >> 16;
                  } while (u << 16 >> 16 > -1);
                  for ((S | 0) == 7 && (S = 0, l[o >> 2] = 1), a = t >>> 16 & 65535, s = 20, t = 0, u = 20; ; ) {
                    if (s = k(e[E + (s + 1 << 1) >> 1] | 0, e[E + (s << 1) >> 1] | 0) | 0, (s | 0) == 1073741824) {
                      S = 13;
                      break;
                    }
                    if (O = s << 1, s = O + t | 0, (O ^ t | 0) > -1 & (s ^ t | 0) < 0 ? (l[o >> 2] = 1, t = (t >>> 31) + 2147483647 | 0) : t = s, s = (u & 65535) + -1 << 16 >> 16, s << 16 >> 16 > -1) s = s << 16 >> 16, u = u + -1 | 0;
                    else break;
                  }
                  if ((S | 0) == 13 && (S = 0, l[o >> 2] = 1), t = t >> 16, (t | 0) < 1 ? t = 0 : t = k0((t * 26214 | 0) >>> 15 & 65535, a) | 0, i6(v, r, t, 40, o), t = i + (c << 1) | 0, N0(b, r, t, 40, p, 1), Ge(m, f, t, 29491, 40, o), t = (c << 16) + 2621440 | 0, (t | 0) < 10485760) c = t >> 16, n = n + 22 | 0;
                  else break;
                }
                u = r + 104 | 0, s = r + 424 | 0, t = u + 20 | 0;
                do
                  A[u >> 0] = A[s >> 0] | 0, u = u + 1 | 0, s = s + 1 | 0;
                while ((u | 0) < (t | 0));
                C = D;
                return;
              } else {
                for (c = 0; ; ) {
                  _2(n, 742, d), _2(n, 762, b), f = r + 104 + (c + 10 << 1) | 0, t5(d, f, r, 40), u = E, s = d, t = u + 22 | 0;
                  do
                    e[u >> 1] = e[s >> 1] | 0, u = u + 2 | 0, s = s + 2 | 0;
                  while ((u | 0) < (t | 0));
                  u = w, t = u + 22 | 0;
                  do
                    e[u >> 1] = 0, u = u + 2 | 0;
                  while ((u | 0) < (t | 0));
                  N0(b, E, E, 22, w, 0), t = 0, u = 21;
                  do {
                    if (s = e[E + (u << 16 >> 16 << 1) >> 1] | 0, s = k(s, s) | 0, (s | 0) == 1073741824) {
                      S = 22;
                      break;
                    }
                    O = s << 1, s = O + t | 0, (O ^ t | 0) > -1 & (s ^ t | 0) < 0 ? (l[o >> 2] = 1, t = (t >>> 31) + 2147483647 | 0) : t = s, u = u + -1 << 16 >> 16;
                  } while (u << 16 >> 16 > -1);
                  for ((S | 0) == 22 && (S = 0, l[o >> 2] = 1), a = t >>> 16 & 65535, s = 20, t = 0, u = 20; ; ) {
                    if (s = k(e[E + (s + 1 << 1) >> 1] | 0, e[E + (s << 1) >> 1] | 0) | 0, (s | 0) == 1073741824) {
                      S = 28;
                      break;
                    }
                    if (O = s << 1, s = O + t | 0, (O ^ t | 0) > -1 & (s ^ t | 0) < 0 ? (l[o >> 2] = 1, t = (t >>> 31) + 2147483647 | 0) : t = s, s = (u & 65535) + -1 << 16 >> 16, s << 16 >> 16 > -1) s = s << 16 >> 16, u = u + -1 | 0;
                    else break;
                  }
                  if ((S | 0) == 28 && (S = 0, l[o >> 2] = 1), t = t >> 16, (t | 0) < 1 ? t = 0 : t = k0((t * 26214 | 0) >>> 15 & 65535, a) | 0, i6(v, r, t, 40, o), t = i + (c << 1) | 0, N0(b, r, t, 40, p, 1), Ge(m, f, t, 29491, 40, o), t = (c << 16) + 2621440 | 0, (t | 0) < 10485760) c = t >> 16, n = n + 22 | 0;
                  else break;
                }
                u = r + 104 | 0, s = r + 424 | 0, t = u + 20 | 0;
                do
                  A[u >> 0] = A[s >> 0] | 0, u = u + 1 | 0, s = s + 1 | 0;
                while ((u | 0) < (t | 0));
                C = D;
                return;
              }
            }
            function M3(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0;
              return !r || (l[r >> 2] = 0, i = A0(1764) | 0, !i) ? (r = -1, r | 0) : (u3(i) | 0) << 16 >> 16 == 0 && (n = i + 1748 | 0, (r6(n) | 0) << 16 >> 16 == 0) ? ($5(i, 0) | 0, S3(i + 1304 | 0) | 0, r6(n) | 0, l[i + 1760 >> 2] = 0, l[r >> 2] = i, r = 0, r | 0) : (t = l[i >> 2] | 0, t ? (f0(t), l[i >> 2] = 0, r = -1, r | 0) : (r = -1, r | 0));
            }
            function T3(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function C3(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0;
              if (S = C, C = C + 208 | 0, E = S + 88 | 0, b = S, d = r + 1164 | 0, s = l[r + 1256 >> 2] | 0, (n + -5 | 0) >>> 0 < 2) {
                if (m = s + 16 | 0, (e[m >> 1] | 0) > 0) for (p = l[(l[r + 1260 >> 2] | 0) + 32 >> 2] | 0, v = 0, s = 0; ; ) {
                  if (w = p + (v << 1) | 0, f = e[w >> 1] | 0, f << 16 >> 16 > 0) {
                    for (a = i, c = 0, u = 0; u = R[a >> 1] | u << 1 & 131070, c = c + 1 << 16 >> 16, !(c << 16 >> 16 >= f << 16 >> 16); ) a = a + 2 | 0;
                    u = u & 65535;
                  } else u = 0;
                  if (e[E + (v << 1) >> 1] = u, s = s + 1 << 16 >> 16, s << 16 >> 16 < (e[m >> 1] | 0)) i = i + (e[w >> 1] << 1) | 0, v = s << 16 >> 16;
                  else break;
                }
              } else if (p = s + (t << 1) | 0, (e[p >> 1] | 0) > 0) for (m = l[(l[r + 1260 >> 2] | 0) + (t << 2) >> 2] | 0, w = 0, s = 0; ; ) {
                if (v = m + (w << 1) | 0, f = e[v >> 1] | 0, f << 16 >> 16 > 0) {
                  for (a = i, c = 0, u = 0; u = R[a >> 1] | u << 1 & 131070, c = c + 1 << 16 >> 16, !(c << 16 >> 16 >= f << 16 >> 16); ) a = a + 2 | 0;
                  u = u & 65535;
                } else u = 0;
                if (e[E + (w << 1) >> 1] = u, s = s + 1 << 16 >> 16, s << 16 >> 16 < (e[p >> 1] | 0)) i = i + (e[v >> 1] << 1) | 0, w = s << 16 >> 16;
                else break;
              }
              a3(r, t, E, n, o, b), D3(r + 1304 | 0, t, o, b, d), A3(r + 1748 | 0, o, 160, d), s = 0;
              do
                r = o + (s << 1) | 0, e[r >> 1] = R[r >> 1] & 65528, s = s + 1 | 0;
              while ((s | 0) != 160);
              C = S;
            }
            function P3(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0;
              if (s = l[n + 100 >> 2] | 0, u = (R[(l[n + 96 >> 2] | 0) + (r << 1) >> 1] | 0) + 65535 | 0, n = u & 65535, o = n << 16 >> 16 > -1, r >>> 0 < 8) {
                if (!o) return;
                for (s = l[s + (r << 2) >> 2] | 0, o = u << 16 >> 16; e[i + (e[s + (o << 1) >> 1] << 1) >> 1] = (z[t + (o >> 3) >> 0] | 0) >>> (o & 7 ^ 7) & 1, n = n + -1 << 16 >> 16, n << 16 >> 16 > -1; ) o = n << 16 >> 16;
                return;
              } else {
                if (!o) return;
                for (o = u << 16 >> 16; e[i + (o << 1) >> 1] = (z[t + (o >> 3) >> 0] | 0) >>> (o & 7 ^ 7) & 1, n = n + -1 << 16 >> 16, n << 16 >> 16 > -1; ) o = n << 16 >> 16;
                return;
              }
            }
            function I3(r, t, i) {
              return r = r | 0, t = t | 0, i = i | 0, r = Br(r, i, 31764) | 0, ((Nr(t) | 0 | r) << 16 >> 16 != 0) << 31 >> 31 | 0;
            }
            function O3(r, t) {
              r = r | 0, t = t | 0, Ur(r), Fr(t);
            }
            function L3(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0;
              if (v = C, C = C + 512 | 0, a = v + 8 | 0, f = v + 4 | 0, c = v, l[c >> 2] = 0, w = u << 16 >> 16 == 3, !((u & 65535) < 2 | w & 1)) {
                if (u << 16 >> 16 != 2) return o = -1, C = v, o | 0;
                R6(r, i, n, a + 2 | 0, c), r = l[c >> 2] | 0, l[s >> 2] = r, A6(t, r, f), t = l[f >> 2] | 0, e[a >> 1] = t, e[a + 490 >> 1] = (t | 0) == 3 ? -1 : i & 65535, A[o >> 0] = t, t = 1;
                do
                  a = a + 1 | 0, A[o + t >> 0] = A[a >> 0] | 0, t = t + 1 | 0;
                while ((t | 0) != 492);
                return a = 492, C = v, a | 0;
              }
              if (R6(r, i, n, a, c), A6(t, l[c >> 2] | 0, f), n = l[f >> 2] | 0, (n | 0) != 3) {
                if (t = l[c >> 2] | 0, l[s >> 2] = t, (t | 0) == 8) {
                  switch (n | 0) {
                    case 1: {
                      e[a + 70 >> 1] = 0;
                      break;
                    }
                    case 2: {
                      c = a + 70 | 0, e[c >> 1] = R[c >> 1] | 0 | 1;
                      break;
                    }
                    default:
                  }
                  e[a + 72 >> 1] = i & 1, e[a + 74 >> 1] = i >>> 1 & 1, e[a + 76 >> 1] = i >>> 2 & 1, t = 8;
                }
              } else l[s >> 2] = 15, t = 15;
              if (w) return nr(t, a, o, (l[r + 4 >> 2] | 0) + 2392 | 0), o = e[3404 + (l[s >> 2] << 16 >> 16 << 1) >> 1] | 0, C = v, o | 0;
              switch (u << 16 >> 16) {
                case 0:
                  return tr(t, a, o, (l[r + 4 >> 2] | 0) + 2392 | 0), o = e[3404 + (l[s >> 2] << 16 >> 16 << 1) >> 1] | 0, C = v, o | 0;
                case 1:
                  return ir(t, a, o, (l[r + 4 >> 2] | 0) + 2392 | 0), o = e[3436 + (l[s >> 2] << 16 >> 16 << 1) >> 1] | 0, C = v, o | 0;
                default:
                  return o = -1, C = v, o | 0;
              }
              return 0;
            }
            function ie(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0;
              for (F = C, C = C + 480 | 0, M = F, s = 240, c = o, f = r, a = M, u = 0; ; ) {
                if (I = ((k(e[c >> 1] | 0, e[f >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[a >> 1] = I, I = I << 16, u = (k(I >> 15, I >> 16) | 0) + u | 0, (u | 0) < 0) {
                  w = 4;
                  break;
                }
                if (s = s + -1 | 0, (s & 65535) << 16 >> 16) c = c + 2 | 0, f = f + 2 | 0, a = a + 2 | 0;
                else {
                  s = 0;
                  break;
                }
              }
              if ((w | 0) == 4) {
                if (u = s & 65535, a = 240 - s | 0, !(u << 16 >> 16)) s = 0;
                else for (c = u, f = o + (a << 1) | 0, s = r + (a << 1) | 0, u = M + (a << 1) | 0; ; ) if (e[u >> 1] = ((k(e[f >> 1] | 0, e[s >> 1] | 0) | 0) + 16384 | 0) >>> 15, c = c + -1 << 16 >> 16, c << 16 >> 16) f = f + 2 | 0, s = s + 2 | 0, u = u + 2 | 0;
                else {
                  s = 0;
                  break;
                }
                do {
                  for (f = s & 65535, s = 120, a = M, u = 0; I = (e[a >> 1] | 0) >>> 2, D = a + 2 | 0, e[a >> 1] = I, I = I << 16 >> 16, I = k(I, I) | 0, O = (e[D >> 1] | 0) >>> 2, e[D >> 1] = O, O = O << 16 >> 16, u = ((k(O, O) | 0) + I << 1) + u | 0, s = s + -1 << 16 >> 16, s << 16 >> 16; ) a = a + 4 | 0;
                  s = f + 4 | 0;
                } while ((u | 0) < 1);
              }
              if (I = u + 1 | 0, O = ($1(I) | 0) << 16 >> 16, I = I << O, e[i >> 1] = I >>> 16, e[n >> 1] = (I >>> 1) - (I >> 16 << 15), I = M + 478 | 0, c = t << 16 >> 16, t << 16 >> 16 <= 0) return M = O - s | 0, M = M & 65535, C = F, M | 0;
              for (b = M + 476 | 0, E = O + 1 | 0, S = 239 - c | 0, D = M + (236 - c << 1) | 0, t = c, i = i + (c << 1) | 0, n = n + (c << 1) | 0; ; ) {
                if (w = k((S >>> 1) + 65535 & 65535, -2) | 0, f = M + (w + 236 << 1) | 0, w = D + (w << 1) | 0, o = 240 - t | 0, d = o + -1 | 0, a = M + (d << 1) | 0, r = d >>> 1 & 65535, o = M + (o + -2 << 1) | 0, c = k(e[I >> 1] | 0, e[a >> 1] | 0) | 0, !(r << 16 >> 16)) w = o, f = b;
                else for (m = b, p = I; u = a + -4 | 0, v = p + -4 | 0, c = (k(e[m >> 1] | 0, e[o >> 1] | 0) | 0) + c | 0, r = r + -1 << 16 >> 16, c = (k(e[v >> 1] | 0, e[u >> 1] | 0) | 0) + c | 0, r << 16 >> 16; ) o = a + -6 | 0, m = p + -6 | 0, a = u, p = v;
                if (d & 1 && (c = (k(e[f >> 1] | 0, e[w >> 1] | 0) | 0) + c | 0), d = c << E, e[i >> 1] = d >>> 16, e[n >> 1] = (d >>> 1) - (d >> 16 << 15), (t & 65535) + -1 << 16 >> 16 << 16 >> 16 > 0) S = S + 1 | 0, D = D + 2 | 0, t = t + -1 | 0, i = i + -2 | 0, n = n + -2 | 0;
                else break;
              }
              return M = O - s | 0, M = M & 65535, C = F, M | 0;
            }
            function t6(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0;
              V = C, C = C + 3440 | 0, L = V + 3420 | 0, F = V + 3400 | 0, B = V + 3224 | 0, T = V, I = V + 3320 | 0, U = V + 3240 | 0, M = V + 24 | 0, m5(i, r, I, 2, a), k6(I, t, U, B, 5, F, 5, a), e5(i, U, M, a), y6(10, 5, 5, I, M, F, B, T, a), t = n, a = t + 80 | 0;
              do
                e[t >> 1] = 0, t = t + 2 | 0;
              while ((t | 0) < (a | 0));
              e[s >> 1] = 65535, e[s + 2 >> 1] = 65535, e[s + 4 >> 1] = 65535, e[s + 6 >> 1] = 65535, e[s + 8 >> 1] = 65535, p = 0, m = T, d = L;
              do {
                r = e[m >> 1] | 0, m = m + 2 | 0, f = (r * 6554 | 0) >>> 15, c = f << 16 >> 16, t = n + (r << 1) | 0, a = e[t >> 1] | 0, (e[U + (r << 1) >> 1] | 0) > 0 ? (e[t >> 1] = a + 4096, e[d >> 1] = 8192, w = f) : (e[t >> 1] = a + 61440, e[d >> 1] = -8192, w = c + 8 | 0), d = d + 2 | 0, v = w & 65535, t = r - (f << 2) - c << 16 >> 16, f = s + (t << 1) | 0, a = e[f >> 1] | 0, r = a << 16 >> 16;
                do
                  if (a << 16 >> 16 >= 0) if (c = w << 16 >> 16, (c ^ r) & 8) if (t = s + (t + 5 << 1) | 0, (r & 7) >>> 0 > (c & 7) >>> 0) {
                    e[t >> 1] = v;
                    break;
                  } else {
                    e[t >> 1] = a, e[f >> 1] = v;
                    break;
                  }
                  else if (t = s + (t + 5 << 1) | 0, (r | 0) > (c | 0)) {
                    e[t >> 1] = a, e[f >> 1] = v;
                    break;
                  } else {
                    e[t >> 1] = v;
                    break;
                  }
                  else e[f >> 1] = v;
                while (false);
                p = p + 1 << 16 >> 16;
              } while (p << 16 >> 16 < 10);
              for (d = L + 2 | 0, p = L + 4 | 0, w = L + 6 | 0, c = L + 8 | 0, f = L + 10 | 0, t = L + 12 | 0, a = L + 14 | 0, r = L + 16 | 0, b = L + 18 | 0, E = 40, S = i + (0 - (e[T >> 1] | 0) << 1) | 0, D = i + (0 - (e[T + 2 >> 1] | 0) << 1) | 0, O = i + (0 - (e[T + 4 >> 1] | 0) << 1) | 0, I = i + (0 - (e[T + 6 >> 1] | 0) << 1) | 0, M = i + (0 - (e[T + 8 >> 1] | 0) << 1) | 0, F = i + (0 - (e[T + 10 >> 1] | 0) << 1) | 0, B = i + (0 - (e[T + 12 >> 1] | 0) << 1) | 0, U = i + (0 - (e[T + 14 >> 1] | 0) << 1) | 0, n = i + (0 - (e[T + 16 >> 1] | 0) << 1) | 0, m = i + (0 - (e[T + 18 >> 1] | 0) << 1) | 0, v = o; H = (k(e[L >> 1] | 0, e[S >> 1] | 0) | 0) >> 7, x = (k(e[d >> 1] | 0, e[D >> 1] | 0) | 0) >> 7, W = (k(e[p >> 1] | 0, e[O >> 1] | 0) | 0) >> 7, Q = (k(e[w >> 1] | 0, e[I >> 1] | 0) | 0) >> 7, K = (k(e[c >> 1] | 0, e[M >> 1] | 0) | 0) >> 7, g = (k(e[f >> 1] | 0, e[F >> 1] | 0) | 0) >> 7, T = (k(e[t >> 1] | 0, e[B >> 1] | 0) | 0) >> 7, i = (k(e[a >> 1] | 0, e[U >> 1] | 0) | 0) >>> 7, o = (k(e[r >> 1] | 0, e[n >> 1] | 0) | 0) >>> 7, e[v >> 1] = (H + 128 + x + W + Q + K + g + T + i + o + ((k(e[b >> 1] | 0, e[m >> 1] | 0) | 0) >>> 7) | 0) >>> 8, E = E + -1 << 16 >> 16, E << 16 >> 16; ) S = S + 2 | 0, D = D + 2 | 0, O = O + 2 | 0, I = I + 2 | 0, M = M + 2 | 0, F = F + 2 | 0, B = B + 2 | 0, U = U + 2 | 0, n = n + 2 | 0, m = m + 2 | 0, v = v + 2 | 0;
              t = 0;
              do
                a = s + (t << 1) | 0, r = e[a >> 1] | 0, (t | 0) < 5 ? r = (R[u + ((r & 7) << 1) >> 1] | r & 8) & 65535 : r = e[u + ((r & 7) << 1) >> 1] | 0, e[a >> 1] = r, t = t + 1 | 0;
              while ((t | 0) != 10);
              C = V;
            }
            function N3(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0;
              if (s1 = C, C = C + 3456 | 0, W = s1 + 3448 | 0, K = s1 + 3360 | 0, V = s1 + 3368 | 0, p = s1 + 3280 | 0, Q = s1 + 3200 | 0, g = s1, H = (n & 65535) << 17, Y = i << 16 >> 16, x = i << 16 >> 16 < 40, x) {
                n = H >> 16, i = Y;
                do
                  c = (k(e[t + (i - Y << 1) >> 1] | 0, n) | 0) >> 15, (c | 0) > 32767 && (l[a >> 2] = 1, c = 32767), L = t + (i << 1) | 0, e[L >> 1] = a1(e[L >> 1] | 0, c & 65535, a) | 0, i = i + 1 | 0;
                while ((i & 65535) << 16 >> 16 != 40);
              }
              m5(t, r, V, 1, a), N5(V, Q, p, 8), e5(t, Q, g, a), L = K + 2 | 0, e[K >> 1] = 0, e[L >> 1] = 1, r = 1, c = 0, v = 1, p = 0, w = -1;
              do {
                U = e[2830 + (p << 1) >> 1] | 0, T = U << 16 >> 16, B = 0;
                do {
                  for (M = e[2834 + (B << 1) >> 1] | 0, F = M << 16 >> 16, I = r, D = T, S = v, O = U, E = w; ; ) {
                    for (f = e[V + (D << 1) >> 1] | 0, d = e[g + (D * 80 | 0) + (D << 1) >> 1] | 0, i = F, v = 1, b = M, r = M, w = -1; n = a1(f, e[V + (i << 1) >> 1] | 0, a) | 0, n = n << 16 >> 16, n = (k(n, n) | 0) >>> 15, m = (e[g + (D * 80 | 0) + (i << 1) >> 1] << 15) + 32768 + ((e[g + (i * 80 | 0) + (i << 1) >> 1] | 0) + d << 14) | 0, ((k(n << 16 >> 16, v << 16 >> 16) | 0) - (k(m >> 16, w << 16 >> 16) | 0) << 1 | 0) > 0 && (v = m >>> 16 & 65535, r = b, w = n & 65535), m = i + 5 | 0, b = m & 65535, !(b << 16 >> 16 >= 40); ) i = m << 16 >> 16;
                    if (((k(w << 16 >> 16, S << 16 >> 16) | 0) - (k(v << 16 >> 16, E << 16 >> 16) | 0) << 1 | 0) > 0 ? (e[K >> 1] = O, e[L >> 1] = r, c = O) : (r = I, v = S, w = E), m = D + 5 | 0, O = m & 65535, O << 16 >> 16 >= 40) break;
                    I = r, D = m << 16 >> 16, S = v, E = w;
                  }
                  B = B + 1 | 0;
                } while ((B | 0) != 4);
                p = p + 1 | 0;
              } while ((p | 0) != 2);
              d = r, b = c, n = o, i = n + 80 | 0;
              do
                e[n >> 1] = 0, n = n + 2 | 0;
              while ((n | 0) < (i | 0));
              for (v = b, i = 0, m = 0, n = 0; ; ) {
                switch (c = v << 16 >> 16, f = e[Q + (c << 1) >> 1] | 0, r = (c * 6554 | 0) >>> 15, v = r << 16, p = v >> 15, w = c - (p + (r << 3) << 16 >> 17) | 0, w << 16 >> 16 | 0) {
                  case 0: {
                    p = v >> 10, r = 1;
                    break;
                  }
                  case 1: {
                    (i & 65535) << 16 >> 16 ? (p = r << 22 >> 16 | 16, r = 1) : r = 0;
                    break;
                  }
                  case 2: {
                    p = r << 22 >> 16 | 32, r = 1;
                    break;
                  }
                  case 3: {
                    p = r << 17 >> 16 | 1, r = 0;
                    break;
                  }
                  case 4: {
                    p = r << 22 >> 16 | 48, r = 1;
                    break;
                  }
                  default:
                    p = r, r = w & 65535;
                }
                if (p = p & 65535, w = o + (c << 1) | 0, f << 16 >> 16 > 0 ? (e[w >> 1] = 8191, e[W + (i << 1) >> 1] = 32767, c = r << 16 >> 16, r << 16 >> 16 < 0 ? (c = 0 - c << 16, (c | 0) < 983040 ? c = 1 >>> (c >> 16) & 65535 : c = 0) : (g = 1 << c, c = (g << 16 >> 16 >> c | 0) == 1 ? g & 65535 : 32767), n = a1(n, c, a) | 0) : (e[w >> 1] = -8192, e[W + (i << 1) >> 1] = -32768), c = a1(m, p, a) | 0, i = i + 1 | 0, (i | 0) == 2) {
                  m = c;
                  break;
                }
                v = e[K + (i << 1) >> 1] | 0, m = c;
              }
              e[u >> 1] = n, p = W + 2 | 0, v = e[W >> 1] | 0, r = 0, w = t + (0 - (b << 16 >> 16) << 1) | 0, c = t + (0 - (d << 16 >> 16) << 1) | 0;
              do
                n = k(e[w >> 1] | 0, v) | 0, w = w + 2 | 0, (n | 0) != 1073741824 && (e1 = n << 1, !((n | 0) > 0 & (e1 | 0) < 0)) ? f = e1 : (l[a >> 2] = 1, f = 2147483647), i = k(e[p >> 1] | 0, e[c >> 1] | 0) | 0, c = c + 2 | 0, (i | 0) != 1073741824 ? (n = (i << 1) + f | 0, (i ^ f | 0) > 0 & (n ^ f | 0) < 0 && (l[a >> 2] = 1, n = (f >>> 31) + 2147483647 | 0)) : (l[a >> 2] = 1, n = 2147483647), e[s + (r << 1) >> 1] = N1(n, a) | 0, r = r + 1 | 0;
              while ((r | 0) != 40);
              if (!x) return C = s1, m | 0;
              i = H >> 16, n = Y;
              do
                f = (k(e[o + (n - Y << 1) >> 1] | 0, i) | 0) >> 15, (f | 0) > 32767 && (l[a >> 2] = 1, f = 32767), s = o + (n << 1) | 0, e[s >> 1] = a1(e[s >> 1] | 0, f & 65535, a) | 0, n = n + 1 | 0;
              while ((n & 65535) << 16 >> 16 != 40);
              return C = s1, m | 0;
            }
            function F3(r, t, i, n, o, s, u, a, f, c) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0;
              var w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0;
              if (I = C, C = C + 3456 | 0, d = I + 3360 | 0, b = I + 3368 | 0, E = I + 3280 | 0, S = I + 3200 | 0, D = I, O = o << 16 >> 16, p = O << 1, (p | 0) == (O << 17 >> 16 | 0) ? m = p : (l[c >> 2] = 1, m = o << 16 >> 16 > 0 ? 32767 : -32768), O = n << 16 >> 16, w = n << 16 >> 16 < 40, w) {
                o = m << 16 >> 16, v = O;
                do
                  n = i + (v << 1) | 0, p = (k(e[i + (v - O << 1) >> 1] | 0, o) | 0) >> 15, (p | 0) > 32767 && (l[c >> 2] = 1, p = 32767), e[n >> 1] = a1(e[n >> 1] | 0, p & 65535, c) | 0, v = v + 1 | 0;
                while ((v & 65535) << 16 >> 16 != 40);
              }
              if (m5(i, t, b, 1, c), N5(b, S, E, 8), e5(i, S, D, c), B3(r, b, D, f, d), p = U3(r, d, S, s, i, u, a, c) | 0, !w) return C = I, p | 0;
              v = m << 16 >> 16, o = O;
              do
                n = s + (o << 1) | 0, w = (k(e[s + (o - O << 1) >> 1] | 0, v) | 0) >> 15, (w | 0) > 32767 && (l[c >> 2] = 1, w = 32767), e[n >> 1] = a1(e[n >> 1] | 0, w & 65535, c) | 0, o = o + 1 | 0;
              while ((o & 65535) << 16 >> 16 != 40);
              return C = I, p | 0;
            }
            function B3(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0;
              M = o + 2 | 0, e[o >> 1] = 0, e[M >> 1] = 1, O = r << 16 >> 16 << 1, s = 1, I = 0, r = -1;
              do {
                D = (I << 3) + O << 16 >> 16, f = e[n + (D << 1) >> 1] | 0, D = e[n + ((D | 1) << 1) >> 1] | 0, u = f << 16 >> 16;
                e: do
                  if (f << 16 >> 16 < 40) {
                    if (S = D << 16 >> 16, D << 16 >> 16 < 40) E = s;
                    else for (; ; ) if ((r << 16 >> 16 | 0) < (0 - (s << 16 >> 16) | 0) ? (e[o >> 1] = f, e[M >> 1] = D, a = 1, r = -1) : a = s, s = u + 5 | 0, f = s & 65535, f << 16 >> 16 >= 40) {
                      s = a;
                      break e;
                    } else u = s << 16 >> 16, s = a;
                    for (; ; ) {
                      for (d = e[i + (u * 80 | 0) + (u << 1) >> 1] | 0, m = R[t + (u << 1) >> 1] | 0, p = S, s = 1, b = D, a = D, c = -1; v = (R[t + (p << 1) >> 1] | 0) + m << 16 >> 16, v = (k(v, v) | 0) >>> 15, w = (e[i + (u * 80 | 0) + (p << 1) >> 1] << 15) + 32768 + ((e[i + (p * 80 | 0) + (p << 1) >> 1] | 0) + d << 14) | 0, ((k(v << 16 >> 16, s << 16 >> 16) | 0) - (k(w >> 16, c << 16 >> 16) | 0) << 1 | 0) > 0 && (s = w >>> 16 & 65535, a = b, c = v & 65535), w = p + 5 | 0, b = w & 65535, !(b << 16 >> 16 >= 40); ) p = w << 16 >> 16;
                      if (((k(c << 16 >> 16, E << 16 >> 16) | 0) - (k(s << 16 >> 16, r << 16 >> 16) | 0) << 1 | 0) > 0 ? (e[o >> 1] = f, e[M >> 1] = a, r = c) : s = E, u = u + 5 | 0, f = u & 65535, f << 16 >> 16 >= 40) break;
                      u = u << 16 >> 16, E = s;
                    }
                  }
                while (false);
                I = I + 1 | 0;
              } while ((I | 0) != 2);
            }
            function U3(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0, m = 0;
              f = n, c = f + 80 | 0;
              do
                e[f >> 1] = 0, f = f + 2 | 0;
              while ((f | 0) < (c | 0));
              f = e[t >> 1] | 0, p = (f * 6554 | 0) >>> 15, c = p << 16 >> 16, v = (748250 >>> ((f + (k(c, -5) | 0) << 16 >> 16) + ((r << 16 >> 16) * 5 | 0) | 0) & 1 | 0) == 0, w = (e[i + (f << 1) >> 1] | 0) > 0, m = w ? 32767 : -32768, e[n + (f << 1) >> 1] = w ? 8191 : -8192, f = t + 2 | 0, r = e[f >> 1] | 0, n = n + (r << 1) | 0, (e[i + (r << 1) >> 1] | 0) > 0 ? (e[n >> 1] = 8191, i = 32767, n = (w & 1 | 2) & 65535) : (e[n >> 1] = -8192, i = -32768, n = w & 1), p = ((r * 6554 | 0) >>> 15 << 3) + (v ? p : c + 64 | 0) & 65535, e[u >> 1] = n, v = 0, w = o + (0 - (e[t >> 1] | 0) << 1) | 0, n = o + (0 - (e[f >> 1] | 0) << 1) | 0;
              do
                f = k(m, e[w >> 1] | 0) | 0, w = w + 2 | 0, (f | 0) == 1073741824 ? (l[a >> 2] = 1, r = 2147483647) : r = f << 1, c = k(i, e[n >> 1] | 0) | 0, n = n + 2 | 0, (c | 0) != 1073741824 ? (f = (c << 1) + r | 0, (c ^ r | 0) > 0 & (f ^ r | 0) < 0 && (l[a >> 2] = 1, f = (r >>> 31) + 2147483647 | 0)) : (l[a >> 2] = 1, f = 2147483647), e[s + (v << 1) >> 1] = N1(f, a) | 0, v = v + 1 | 0;
              while ((v | 0) != 40);
              return p | 0;
            }
            function z3(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0;
              if (h1 = C, C = C + 3440 | 0, e1 = h1 + 3360 | 0, Y = h1 + 3280 | 0, f1 = h1 + 3200 | 0, s1 = h1, _1 = (n & 65535) << 17, i1 = i << 16 >> 16, d1 = i << 16 >> 16 < 40, d1) {
                i = _1 >> 16, f = i1;
                do
                  n = (k(e[t + (f - i1 << 1) >> 1] | 0, i) | 0) >> 15, (n | 0) > 32767 && (l[a >> 2] = 1, n = 32767), H = t + (f << 1) | 0, e[H >> 1] = a1(e[H >> 1] | 0, n & 65535, a) | 0, f = f + 1 | 0;
                while ((f & 65535) << 16 >> 16 != 40);
              }
              for (m5(t, r, e1, 1, a), N5(e1, f1, Y, 6), e5(t, f1, s1, a), H = 1, c = 2, w = 1, n = 0, f = 1, r = -1, v = 1; ; ) {
                for (x = 2, d = 2; ; ) {
                  for (K = 0, Q = 0, W = v, g = d; ; ) {
                    if (Q << 16 >> 16 < 40) for (U = W << 16 >> 16, T = W << 16 >> 16 < 40, L = g << 16 >> 16, V = g << 16 >> 16 < 40, F = Q << 16 >> 16, B = Q; ; ) {
                      if ((e[Y + (F << 1) >> 1] | 0) > -1) {
                        if (O = e[s1 + (F * 80 | 0) + (F << 1) >> 1] | 0, T) for (I = R[e1 + (F << 1) >> 1] | 0, D = U, m = 1, M = W, i = W, d = 0, p = -1; E = (R[e1 + (D << 1) >> 1] | 0) + I | 0, S = E << 16 >> 16, S = (k(S, S) | 0) >>> 15, b = (e[s1 + (F * 80 | 0) + (D << 1) >> 1] << 15) + 32768 + ((e[s1 + (D * 80 | 0) + (D << 1) >> 1] | 0) + O << 14) | 0, ((k(S << 16 >> 16, m << 16 >> 16) | 0) - (k(b >> 16, p << 16 >> 16) | 0) << 1 | 0) > 0 && (m = b >>> 16 & 65535, i = M, d = E & 65535, p = S & 65535), b = D + 5 | 0, M = b & 65535, !(M << 16 >> 16 >= 40); ) D = b << 16 >> 16;
                        else m = 1, i = W, d = 0;
                        if (V) for (I = d & 65535, M = i << 16 >> 16, D = (m << 16 >> 16 << 14) + 32768 | 0, S = L, d = 1, O = g, p = g, m = -1; ; ) if (E = (R[e1 + (S << 1) >> 1] | 0) + I << 16 >> 16, E = (k(E, E) | 0) >>> 15, b = D + (e[s1 + (S * 80 | 0) + (S << 1) >> 1] << 12) + ((e[s1 + (F * 80 | 0) + (S << 1) >> 1] | 0) + (e[s1 + (M * 80 | 0) + (S << 1) >> 1] | 0) << 13) | 0, ((k(E << 16 >> 16, d << 16 >> 16) | 0) - (k(b >> 16, m << 16 >> 16) | 0) << 1 | 0) > 0 && (d = b >>> 16 & 65535, p = O, m = E & 65535), b = S + 5 | 0, O = b & 65535, O << 16 >> 16 >= 40) {
                          D = d, S = m;
                          break;
                        } else S = b << 16 >> 16;
                        else D = 1, p = g, S = -1;
                        d = k(S << 16 >> 16, f << 16 >> 16) | 0, (d | 0) == 1073741824 ? (l[a >> 2] = 1, b = 2147483647) : b = d << 1, d = k(D << 16 >> 16, r << 16 >> 16) | 0, (d | 0) == 1073741824 ? (l[a >> 2] = 1, m = 2147483647) : m = d << 1, d = b - m | 0, ((d ^ b) & (m ^ b) | 0) < 0 && (l[a >> 2] = 1, d = (b >>> 31) + 2147483647 | 0), M = (d | 0) > 0, c = M ? p : c, w = M ? i : w, n = M ? B : n, f = M ? D : f, r = M ? S : r;
                      }
                      if (d = F + 5 | 0, B = d & 65535, B << 16 >> 16 >= 40) break;
                      F = d << 16 >> 16;
                    }
                    if (K = K + 1 << 16 >> 16, K << 16 >> 16 >= 3) break;
                    V = g, g = W, W = Q, Q = V;
                  }
                  if (i = x + 2 | 0, d = i & 65535, d << 16 >> 16 >= 5) break;
                  x = i & 65535;
                }
                if (i = H + 2 | 0, v = i & 65535, v << 16 >> 16 < 4) H = i & 65535;
                else {
                  d = c, c = w;
                  break;
                }
              }
              i = o, f = i + 80 | 0;
              do
                e[i >> 1] = 0, i = i + 2 | 0;
              while ((i | 0) < (f | 0));
              switch (S = n << 16 >> 16, r = e[f1 + (S << 1) >> 1] | 0, n = (S * 6554 | 0) >>> 15, i = n << 16, f = S - (((i >> 16) * 327680 | 0) >>> 16) | 0, f << 16 >> 16 | 0) {
                case 1: {
                  n = i >> 12;
                  break;
                }
                case 2: {
                  n = i >> 8, f = 2;
                  break;
                }
                case 3: {
                  n = n << 20 >> 16 | 8, f = 1;
                  break;
                }
                case 4: {
                  n = n << 24 >> 16 | 128, f = 2;
                  break;
                }
                default:
              }
              switch (i = o + (S << 1) | 0, r << 16 >> 16 > 0 ? (e[i >> 1] = 8191, M = 32767, w = 65536 << (f << 16 >> 16) >>> 16 & 65535) : (e[i >> 1] = -8192, M = -32768, w = 0), b = c << 16 >> 16, c = e[f1 + (b << 1) >> 1] | 0, i = (b * 6554 | 0) >>> 15, f = i << 16, r = b - (((f >> 16) * 327680 | 0) >>> 16) | 0, r << 16 >> 16 | 0) {
                case 1: {
                  i = f >> 12;
                  break;
                }
                case 2: {
                  i = f >> 8, r = 2;
                  break;
                }
                case 3: {
                  i = i << 20 >> 16 | 8, r = 1;
                  break;
                }
                case 4: {
                  i = i << 24 >> 16 | 128, r = 2;
                  break;
                }
                default:
              }
              switch (f = o + (b << 1) | 0, c << 16 >> 16 > 0 ? (e[f >> 1] = 8191, E = 32767, w = (65536 << (r << 16 >> 16) >>> 16) + (w & 65535) & 65535) : (e[f >> 1] = -8192, E = -32768), v = i + n | 0, m = d << 16 >> 16, c = e[f1 + (m << 1) >> 1] | 0, n = (m * 6554 | 0) >>> 15, i = n << 16, f = m - (((i >> 16) * 327680 | 0) >>> 16) | 0, f << 16 >> 16 | 0) {
                case 1: {
                  i = i >> 12;
                  break;
                }
                case 2: {
                  i = i >> 8, f = 2;
                  break;
                }
                case 3: {
                  i = n << 20 >> 16 | 8, f = 1;
                  break;
                }
                case 4: {
                  i = n << 24 >> 16 | 128, f = 2;
                  break;
                }
                default:
                  i = n;
              }
              n = o + (m << 1) | 0, c << 16 >> 16 > 0 ? (e[n >> 1] = 8191, d = 32767, n = (65536 << (f << 16 >> 16) >>> 16) + (w & 65535) & 65535) : (e[n >> 1] = -8192, d = -32768, n = w), p = v + i | 0, e[u >> 1] = n, w = 0, v = t + (0 - S << 1) | 0, r = t + (0 - b << 1) | 0, c = t + (0 - m << 1) | 0;
              do
                n = k(e[v >> 1] | 0, M) | 0, v = v + 2 | 0, (n | 0) != 1073741824 && (b1 = n << 1, !((n | 0) > 0 & (b1 | 0) < 0)) ? f = b1 : (l[a >> 2] = 1, f = 2147483647), n = k(e[r >> 1] | 0, E) | 0, r = r + 2 | 0, (n | 0) != 1073741824 ? (i = (n << 1) + f | 0, (n ^ f | 0) > 0 & (i ^ f | 0) < 0 && (l[a >> 2] = 1, i = (f >>> 31) + 2147483647 | 0)) : (l[a >> 2] = 1, i = 2147483647), f = k(e[c >> 1] | 0, d) | 0, c = c + 2 | 0, (f | 0) != 1073741824 ? (n = (f << 1) + i | 0, (f ^ i | 0) > 0 & (n ^ i | 0) < 0 && (l[a >> 2] = 1, n = (i >>> 31) + 2147483647 | 0)) : (l[a >> 2] = 1, n = 2147483647), e[s + (w << 1) >> 1] = N1(n, a) | 0, w = w + 1 | 0;
              while ((w | 0) != 40);
              if (n = p & 65535, !d1) return C = h1, n | 0;
              f = _1 >> 16, i = i1;
              do
                r = (k(e[o + (i - i1 << 1) >> 1] | 0, f) | 0) >> 15, (r | 0) > 32767 && (l[a >> 2] = 1, r = 32767), s = o + (i << 1) | 0, e[s >> 1] = a1(e[s >> 1] | 0, r & 65535, a) | 0, i = i + 1 | 0;
              while ((i & 65535) << 16 >> 16 != 40);
              return C = h1, n | 0;
            }
            function x3(r, t, i, n, o, s, u, a, f) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0;
              var c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0, R1 = 0, Z = 0, G = 0, T1 = 0, Q1 = 0, B1 = 0, t0 = 0, j1 = 0, G1 = 0;
              if (G1 = C, C = C + 3456 | 0, T1 = G1 + 3448 | 0, Z = G1 + 3360 | 0, h1 = G1 + 3368 | 0, k1 = G1 + 3280 | 0, G = G1 + 3200 | 0, R1 = G1, B1 = (n & 65535) << 17, j1 = i << 16 >> 16, Q1 = i << 16 >> 16 < 40, Q1) {
                i = B1 >> 16, c = j1;
                do
                  n = (k(e[t + (c - j1 << 1) >> 1] | 0, i) | 0) >> 15, (n | 0) > 32767 && (l[f >> 2] = 1, n = 32767), i1 = t + (c << 1) | 0, e[i1 >> 1] = a1(e[i1 >> 1] | 0, n & 65535, f) | 0, c = c + 1 | 0;
                while ((c & 65535) << 16 >> 16 != 40);
              }
              m5(t, r, h1, 1, f), N5(h1, G, k1, 4), e5(t, G, R1, f), _1 = Z + 2 | 0, e[Z >> 1] = 0, b1 = Z + 4 | 0, e[_1 >> 1] = 1, i1 = Z + 6 | 0, e[b1 >> 1] = 2, e[i1 >> 1] = 3, m = 3, v = 2, w = 1, n = 0, i = 1, c = -1, p = 3;
              do {
                for (e1 = 0, Y = 0, s1 = p, f1 = 1, d1 = 2; ; ) {
                  if (Y << 16 >> 16 < 40) for (g = f1 << 16 >> 16, K = f1 << 16 >> 16 < 40, Q = d1 << 16 >> 16, W = d1 << 16 >> 16 < 40, x = s1 << 16 >> 16, H = s1 << 16 >> 16 < 40, V = Y << 16 >> 16, L = v, U = w, B = i, T = Y; ; ) {
                    if ((e[k1 + (V << 1) >> 1] | 0) > -1) {
                      if (b = e[R1 + (V * 80 | 0) + (V << 1) >> 1] | 0, K) for (d = R[h1 + (V << 1) >> 1] | 0, E = g, M = 1, v = f1, w = f1, O = 0, I = -1; D = (R[h1 + (E << 1) >> 1] | 0) + d | 0, S = D << 16 >> 16, S = (k(S, S) | 0) >>> 15, F = (e[R1 + (V * 80 | 0) + (E << 1) >> 1] << 15) + 32768 + ((e[R1 + (E * 80 | 0) + (E << 1) >> 1] | 0) + b << 14) | 0, ((k(S << 16 >> 16, M << 16 >> 16) | 0) - (k(F >> 16, I << 16 >> 16) | 0) << 1 | 0) > 0 && (M = F >>> 16 & 65535, w = v, O = D & 65535, I = S & 65535), F = E + 5 | 0, v = F & 65535, !(v << 16 >> 16 >= 40); ) E = F << 16 >> 16;
                      else M = 1, w = f1, O = 0;
                      if (W) for (i = O & 65535, r = w << 16 >> 16, b = (M << 16 >> 16 << 14) + 32768 | 0, E = Q, F = 1, d = d1, v = d1, I = 0, O = -1; D = (R[h1 + (E << 1) >> 1] | 0) + i | 0, S = D << 16 >> 16, S = (k(S, S) | 0) >>> 15, M = b + (e[R1 + (E * 80 | 0) + (E << 1) >> 1] << 12) + ((e[R1 + (V * 80 | 0) + (E << 1) >> 1] | 0) + (e[R1 + (r * 80 | 0) + (E << 1) >> 1] | 0) << 13) | 0, ((k(S << 16 >> 16, F << 16 >> 16) | 0) - (k(M >> 16, O << 16 >> 16) | 0) << 1 | 0) > 0 && (F = M >>> 16 & 65535, v = d, I = D & 65535, O = S & 65535), M = E + 5 | 0, d = M & 65535, !(d << 16 >> 16 >= 40); ) E = M << 16 >> 16;
                      else F = 1, v = d1, I = 0;
                      if (H) for (b = I & 65535, d = v << 16 >> 16, r = w << 16 >> 16, S = (F & 65535) << 16 | 32768, D = x, i = 1, E = s1, M = s1, F = -1; O = (R[h1 + (D << 1) >> 1] | 0) + b << 16 >> 16, O = (k(O, O) | 0) >>> 15, I = (e[R1 + (D * 80 | 0) + (D << 1) >> 1] << 12) + S + ((e[R1 + (r * 80 | 0) + (D << 1) >> 1] | 0) + (e[R1 + (d * 80 | 0) + (D << 1) >> 1] | 0) + (e[R1 + (V * 80 | 0) + (D << 1) >> 1] | 0) << 13) | 0, ((k(O << 16 >> 16, i << 16 >> 16) | 0) - (k(I >> 16, F << 16 >> 16) | 0) << 1 | 0) > 0 && (i = I >>> 16 & 65535, M = E, F = O & 65535), I = D + 5 | 0, E = I & 65535, !(E << 16 >> 16 >= 40); ) D = I << 16 >> 16;
                      else i = 1, M = s1, F = -1;
                      ((k(F << 16 >> 16, B << 16 >> 16) | 0) - (k(i << 16 >> 16, c << 16 >> 16) | 0) << 1 | 0) > 0 ? (e[Z >> 1] = T, e[_1 >> 1] = w, e[b1 >> 1] = v, e[i1 >> 1] = M, m = M, n = T, c = F) : (v = L, w = U, i = B);
                    } else v = L, w = U, i = B;
                    if (D = V + 5 | 0, T = D & 65535, T << 16 >> 16 >= 40) break;
                    V = D << 16 >> 16, L = v, U = w, B = i;
                  }
                  if (e1 = e1 + 1 << 16 >> 16, e1 << 16 >> 16 >= 4) break;
                  x = d1, H = s1, d1 = f1, f1 = Y, s1 = x, Y = H;
                }
                p = p + 1 << 16 >> 16;
              } while (p << 16 >> 16 < 5);
              F = m, M = v, I = w, O = n, n = o, i = n + 80 | 0;
              do
                e[n >> 1] = 0, n = n + 2 | 0;
              while ((n | 0) < (i | 0));
              for (r = O, i = 0, c = 0, n = 0; ; ) {
                switch (v = r << 16 >> 16, p = e[G + (v << 1) >> 1] | 0, r = v * 13108 >> 16, w = v - ((r * 327680 | 0) >>> 16) | 0, r = e[a + (r << 1) >> 1] | 0, w << 16 >> 16 | 0) {
                  case 1: {
                    m = r << 16 >> 16 << 3 & 65535;
                    break;
                  }
                  case 2: {
                    m = r << 16 >> 16 << 6 & 65535;
                    break;
                  }
                  case 3: {
                    m = r << 16 >> 16 << 10 & 65535;
                    break;
                  }
                  case 4: {
                    m = ((r & 65535) << 10 | 512) & 65535, w = 3;
                    break;
                  }
                  default:
                    m = r;
                }
                if (r = o + (v << 1) | 0, p << 16 >> 16 > 0 ? (e[r >> 1] = 8191, r = 32767, n = (65536 << (w << 16 >> 16) >>> 16) + (n & 65535) & 65535) : (e[r >> 1] = -8192, r = -32768), e[T1 + (i << 1) >> 1] = r, c = (m & 65535) + (c & 65535) | 0, i = i + 1 | 0, (i | 0) == 4) {
                  D = c;
                  break;
                }
                r = e[Z + (i << 1) >> 1] | 0;
              }
              e[u >> 1] = n, b = T1 + 2 | 0, E = T1 + 4 | 0, S = T1 + 6 | 0, r = e[T1 >> 1] | 0, d = 0, w = t + (0 - (O << 16 >> 16) << 1) | 0, v = t + (0 - (I << 16 >> 16) << 1) | 0, p = t + (0 - (M << 16 >> 16) << 1) | 0, m = t + (0 - (F << 16 >> 16) << 1) | 0;
              do
                n = k(e[w >> 1] | 0, r) | 0, w = w + 2 | 0, (n | 0) != 1073741824 && (t0 = n << 1, !((n | 0) > 0 & (t0 | 0) < 0)) ? c = t0 : (l[f >> 2] = 1, c = 2147483647), n = k(e[b >> 1] | 0, e[v >> 1] | 0) | 0, v = v + 2 | 0, (n | 0) != 1073741824 ? (i = (n << 1) + c | 0, (n ^ c | 0) > 0 & (i ^ c | 0) < 0 && (l[f >> 2] = 1, i = (c >>> 31) + 2147483647 | 0)) : (l[f >> 2] = 1, i = 2147483647), n = k(e[E >> 1] | 0, e[p >> 1] | 0) | 0, p = p + 2 | 0, (n | 0) != 1073741824 ? (c = (n << 1) + i | 0, (n ^ i | 0) > 0 & (c ^ i | 0) < 0 && (l[f >> 2] = 1, c = (i >>> 31) + 2147483647 | 0)) : (l[f >> 2] = 1, c = 2147483647), i = k(e[S >> 1] | 0, e[m >> 1] | 0) | 0, m = m + 2 | 0, (i | 0) != 1073741824 ? (n = (i << 1) + c | 0, (i ^ c | 0) > 0 & (n ^ c | 0) < 0 && (l[f >> 2] = 1, n = (c >>> 31) + 2147483647 | 0)) : (l[f >> 2] = 1, n = 2147483647), e[s + (d << 1) >> 1] = N1(n, f) | 0, d = d + 1 | 0;
              while ((d | 0) != 40);
              if (n = D & 65535, ((j1 << 16) + -2621440 | 0) > -1 | Q1 ^ 1) return C = G1, n | 0;
              c = B1 >> 16, i = j1;
              do
                r = (k(e[o + (i - j1 << 1) >> 1] | 0, c) | 0) >> 15, (r | 0) > 32767 && (l[f >> 2] = 1, r = 32767), s = o + (i << 1) | 0, e[s >> 1] = a1(e[s >> 1] | 0, r & 65535, f) | 0, i = i + 1 | 0;
              while ((i & 65535) << 16 >> 16 != 40);
              return C = G1, n | 0;
            }
            function n6(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0;
              H = C, C = C + 3440 | 0, b = H + 3424 | 0, g = H + 3408 | 0, K = H + 3240 | 0, E = H + 3224 | 0, L = H + 3328 | 0, d = H + 3248 | 0, V = H + 24 | 0, x = H + 16 | 0, W = H, K3(i, r, L, 2, 4, 4, u), k6(L, t, d, K, 4, g, 4, u), e5(i, d, V, u), y6(8, 4, 4, L, V, g, K, E, u), t = n, r = t + 80 | 0;
              do
                e[t >> 1] = 0, t = t + 2 | 0;
              while ((t | 0) < (r | 0));
              e[W >> 1] = -1, e[x >> 1] = -1, U = W + 2 | 0, e[U >> 1] = -1, T = x + 2 | 0, e[T >> 1] = -1, L = W + 4 | 0, e[L >> 1] = -1, V = x + 4 | 0, e[V >> 1] = -1, K = W + 6 | 0, e[K >> 1] = -1, g = x + 6 | 0, e[g >> 1] = -1, p = 0;
              do {
                w = e[E + (p << 1) >> 1] | 0, t = w >>> 2, f = t & 65535, r = w & 3, c = (e[d + (w << 1) >> 1] | 0) > 0, w = n + (w << 1) | 0, m = c & 1 ^ 1, e[w >> 1] = (R[w >> 1] | 0) + (c ? 8191 : 57345), e[b + (p << 1) >> 1] = c ? 32767 : -32768, c = W + (r << 1) | 0, w = e[c >> 1] | 0;
                do
                  if (w << 16 >> 16 >= 0) if (v = x + (r << 1) | 0, a = (w << 16 >> 16 | 0) <= (t << 16 >> 16 | 0), t = W + ((r | 4) << 1) | 0, (m & 65535 | 0) == (R[v >> 1] & 1 | 0)) if (a) {
                    e[t >> 1] = f;
                    break;
                  } else {
                    e[t >> 1] = w, e[c >> 1] = f, e[v >> 1] = m;
                    break;
                  }
                  else if (a) {
                    e[t >> 1] = w, e[c >> 1] = f, e[v >> 1] = m;
                    break;
                  } else {
                    e[t >> 1] = f;
                    break;
                  }
                  else e[c >> 1] = f, e[x + (r << 1) >> 1] = m;
                while (false);
                p = p + 1 | 0;
              } while ((p | 0) != 8);
              S = b + 2 | 0, D = b + 4 | 0, O = b + 6 | 0, I = b + 8 | 0, M = b + 10 | 0, F = b + 12 | 0, B = b + 14 | 0, b = e[b >> 1] | 0, p = 0, v = i + (0 - (e[E >> 1] | 0) << 1) | 0, w = i + (0 - (e[E + 2 >> 1] | 0) << 1) | 0, c = i + (0 - (e[E + 4 >> 1] | 0) << 1) | 0, f = i + (0 - (e[E + 6 >> 1] | 0) << 1) | 0, t = i + (0 - (e[E + 8 >> 1] | 0) << 1) | 0, r = i + (0 - (e[E + 10 >> 1] | 0) << 1) | 0, a = i + (0 - (e[E + 12 >> 1] | 0) << 1) | 0, i = i + (0 - (e[E + 14 >> 1] | 0) << 1) | 0;
              do
                m = k(e[v >> 1] | 0, b) | 0, v = v + 2 | 0, (m | 0) != 1073741824 && (Q = m << 1, !((m | 0) > 0 & (Q | 0) < 0)) ? m = Q : (l[u >> 2] = 1, m = 2147483647), d = k(e[S >> 1] | 0, e[w >> 1] | 0) | 0, w = w + 2 | 0, (d | 0) != 1073741824 ? (n = (d << 1) + m | 0, (d ^ m | 0) > 0 & (n ^ m | 0) < 0 ? (l[u >> 2] = 1, m = (m >>> 31) + 2147483647 | 0) : m = n) : (l[u >> 2] = 1, m = 2147483647), d = k(e[D >> 1] | 0, e[c >> 1] | 0) | 0, c = c + 2 | 0, (d | 0) != 1073741824 ? (n = (d << 1) + m | 0, (d ^ m | 0) > 0 & (n ^ m | 0) < 0 && (l[u >> 2] = 1, n = (m >>> 31) + 2147483647 | 0)) : (l[u >> 2] = 1, n = 2147483647), d = k(e[O >> 1] | 0, e[f >> 1] | 0) | 0, f = f + 2 | 0, (d | 0) != 1073741824 ? (m = (d << 1) + n | 0, (d ^ n | 0) > 0 & (m ^ n | 0) < 0 && (l[u >> 2] = 1, m = (n >>> 31) + 2147483647 | 0)) : (l[u >> 2] = 1, m = 2147483647), d = k(e[I >> 1] | 0, e[t >> 1] | 0) | 0, t = t + 2 | 0, (d | 0) != 1073741824 ? (n = (d << 1) + m | 0, (d ^ m | 0) > 0 & (n ^ m | 0) < 0 && (l[u >> 2] = 1, n = (m >>> 31) + 2147483647 | 0)) : (l[u >> 2] = 1, n = 2147483647), d = k(e[M >> 1] | 0, e[r >> 1] | 0) | 0, r = r + 2 | 0, (d | 0) != 1073741824 ? (m = (d << 1) + n | 0, (d ^ n | 0) > 0 & (m ^ n | 0) < 0 && (l[u >> 2] = 1, m = (n >>> 31) + 2147483647 | 0)) : (l[u >> 2] = 1, m = 2147483647), d = k(e[F >> 1] | 0, e[a >> 1] | 0) | 0, a = a + 2 | 0, (d | 0) != 1073741824 ? (n = (d << 1) + m | 0, (d ^ m | 0) > 0 & (n ^ m | 0) < 0 && (l[u >> 2] = 1, n = (m >>> 31) + 2147483647 | 0)) : (l[u >> 2] = 1, n = 2147483647), d = k(e[B >> 1] | 0, e[i >> 1] | 0) | 0, i = i + 2 | 0, (d | 0) != 1073741824 ? (m = (d << 1) + n | 0, (d ^ n | 0) > 0 & (m ^ n | 0) < 0 && (l[u >> 2] = 1, m = (n >>> 31) + 2147483647 | 0)) : (l[u >> 2] = 1, m = 2147483647), e[o + (p << 1) >> 1] = N1(m, u) | 0, p = p + 1 | 0;
              while ((p | 0) != 40);
              if (e[s >> 1] = e[x >> 1] | 0, e[s + 2 >> 1] = e[T >> 1] | 0, e[s + 4 >> 1] = e[V >> 1] | 0, e[s + 6 >> 1] = e[g >> 1] | 0, r = e[W >> 1] | 0, t = e[W + 8 >> 1] | 0, a = e[U >> 1] | 0, e[s + 8 >> 1] = t << 1 & 2 | r & 1 | a << 2 & 4 | (((t >> 1) * 327680 | 0) + (r >>> 1 << 16) + (k(a >> 1, 1638400) | 0) | 0) >>> 13 & 65528, a = e[L >> 1] | 0, r = e[W + 12 >> 1] | 0, t = e[W + 10 >> 1] | 0, e[s + 10 >> 1] = r << 1 & 2 | a & 1 | t << 2 & 4 | (((r >> 1) * 327680 | 0) + (a >>> 1 << 16) + (k(t >> 1, 1638400) | 0) | 0) >>> 13 & 65528, t = e[W + 14 >> 1] | 0, a = e[K >> 1] | 0, r = a << 16 >> 16 >>> 1, !(t & 2)) {
                o = r, u = t << 16 >> 16, x = u >> 1, x = x * 327680 | 0, o = o << 16, x = o + x | 0, x = x << 5, x = x >> 16, x = x | 12, x = x * 2622 | 0, x = x >>> 16, o = a & 65535, o = o & 1, u = u << 17, u = u & 131072, x = x << 18, u = x | u, u = u >>> 16, o = u | o, o = o & 65535, s = s + 12 | 0, e[s >> 1] = o, C = H;
                return;
              }
              o = 4 - (r << 16 >> 16) | 0, u = t << 16 >> 16, x = u >> 1, x = x * 327680 | 0, o = o << 16, x = o + x | 0, x = x << 5, x = x >> 16, x = x | 12, x = x * 2622 | 0, x = x >>> 16, o = a & 65535, o = o & 1, u = u << 17, u = u & 131072, x = x << 18, u = x | u, u = u >>> 16, o = u | o, o = o & 65535, s = s + 12 | 0, e[s >> 1] = o, C = H;
            }
            function o6(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0;
              if (b = i << 16 >> 16, s = 0 - b | 0, i = o + (s << 2) | 0, o = ((b - (n << 16 >> 16) | 0) >>> 2) + 1 & 65535, !(o << 16 >> 16 <= 0)) {
                if (b = t << 16 >> 16 >>> 1 & 65535, !(b << 16 >> 16)) {
                  for (; l[i >> 2] = 0, l[i + 4 >> 2] = 0, l[i + 8 >> 2] = 0, l[i + 12 >> 2] = 0, o << 16 >> 16 > 1; ) i = i + 16 | 0, o = o + -1 << 16 >> 16;
                  return;
                }
                for (d = r + (s << 1) | 0; ; ) {
                  for (c = d + 4 | 0, v = e[c >> 1] | 0, a = e[d >> 1] | 0, w = v, f = b, p = r, m = d, d = d + 8 | 0, u = 0, s = 0, n = 0, t = 0; S = e[p >> 1] | 0, E = (k(a << 16 >> 16, S) | 0) + u | 0, u = e[m + 2 >> 1] | 0, s = (k(u, S) | 0) + s | 0, a = (k(w << 16 >> 16, S) | 0) + n | 0, n = e[m + 6 >> 1] | 0, w = (k(n, S) | 0) + t | 0, t = e[p + 2 >> 1] | 0, u = E + (k(t, u) | 0) | 0, s = s + (k(v << 16 >> 16, t) | 0) | 0, c = c + 4 | 0, n = a + (k(t, n) | 0) | 0, a = e[c >> 1] | 0, t = w + (k(a << 16 >> 16, t) | 0) | 0, f = f + -1 << 16 >> 16, !!(f << 16 >> 16); ) S = v, w = a, v = e[m + 8 >> 1] | 0, p = p + 4 | 0, m = m + 4 | 0, a = S;
                  if (l[i >> 2] = u << 1, l[i + 4 >> 2] = s << 1, l[i + 8 >> 2] = n << 1, l[i + 12 >> 2] = t << 1, o << 16 >> 16 <= 1) break;
                  i = i + 16 | 0, o = o + -1 << 16 >> 16;
                }
              }
            }
            function V3(r, t, i, n, o, s, u, a, f) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0;
              var c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0;
              I = C, C = C + 16 | 0, D = I + 2 | 0, O = I;
              do
                if (o << 16 >> 16 > 0) {
                  for (d = n << 16 >> 16, E = 0, v = 0, n = 0, w = 0, b = 0; ; ) if (c = e[r + (E << 1) >> 1] | 0, p = c << 16 >> 16, v = (k(p, p) | 0) + v | 0, p = e[t + (E << 1) >> 1] | 0, n = (k(p, p) | 0) + n | 0, w = (k(e[i + (E << 1) >> 1] | 0, p) | 0) + w | 0, p = k(p, d) | 0, (p | 0) == 1073741824 ? (l[f >> 2] = 1, m = 2147483647) : m = p << 1, p = m << 1, p = (P1(c, N1((p >> 1 | 0) == (m | 0) ? p : m >> 31 ^ 2147483647, f) | 0, f) | 0) << 16 >> 16, p = k(p, p) | 0, (p | 0) != 1073741824 ? (c = (p << 1) + b | 0, (p ^ b | 0) > 0 & (c ^ b | 0) < 0 && (l[f >> 2] = 1, c = (b >>> 31) + 2147483647 | 0)) : (l[f >> 2] = 1, c = 2147483647), E = E + 1 | 0, (E & 65535) << 16 >> 16 == o << 16 >> 16) {
                    b = c;
                    break;
                  } else b = c;
                  if (v = v << 1, n = n << 1, w = w << 1, (v | 0) >= 0) {
                    if ((v | 0) < 400) {
                      c = b, S = 14;
                      break;
                    }
                  } else l[f >> 2] = 1, v = 2147483647;
                  m = $1(v) | 0, p = m << 16 >> 16, m << 16 >> 16 > 0 ? (c = v << p, (c >> p | 0) != (v | 0) && (c = v >> 31 ^ 2147483647)) : (c = 0 - p << 16, (c | 0) < 2031616 ? c = v >> (c >> 16) : c = 0), e[s >> 1] = c >>> 16, v = n, d = w, c = b, n = 15 - (m & 65535) & 65535;
                } else n = 0, w = 0, c = 0, S = 14;
              while (false);
              if ((S | 0) == 14 && (e[s >> 1] = 0, v = n, d = w, n = -15), e[u >> 1] = n, (v | 0) < 0 && (l[f >> 2] = 1, v = 2147483647), p = $1(v) | 0, w = p << 16 >> 16, p << 16 >> 16 > 0 ? (n = v << w, (n >> w | 0) != (v | 0) && (n = v >> 31 ^ 2147483647)) : (n = 0 - w << 16, (n | 0) < 2031616 ? n = v >> (n >> 16) : n = 0), e[s + 2 >> 1] = n >>> 16, e[u + 2 >> 1] = 15 - (p & 65535), v = $1(d) | 0, w = v << 16 >> 16, v << 16 >> 16 > 0 ? (n = d << w, (n >> w | 0) != (d | 0) && (n = d >> 31 ^ 2147483647)) : (n = 0 - w << 16, (n | 0) < 2031616 ? n = d >> (n >> 16) : n = 0), e[s + 4 >> 1] = n >>> 16, e[u + 4 >> 1] = 2 - (v & 65535), v = $1(c) | 0, n = v << 16 >> 16, v << 16 >> 16 > 0 ? (w = c << n, (w >> n | 0) != (c | 0) && (w = c >> 31 ^ 2147483647)) : (n = 0 - n << 16, (n | 0) < 2031616 ? w = c >> (n >> 16) : w = 0), n = w >>> 16 & 65535, c = 15 - (v & 65535) & 65535, e[s + 6 >> 1] = n, e[u + 6 >> 1] = c, (w >> 16 | 0) <= 0) {
                f = 0, e[a >> 1] = f, C = I;
                return;
              }
              if (w = e[s >> 1] | 0, !(w << 16 >> 16)) {
                f = 0, e[a >> 1] = f, C = I;
                return;
              }
              n = k0(o0(w, 1, f) | 0, n) | 0, n = (n & 65535) << 16, w = ((P1(c, e[u >> 1] | 0, f) | 0) & 65535) + 3 | 0, c = w & 65535, w = w << 16 >> 16, c << 16 >> 16 > 0 ? c = c << 16 >> 16 < 31 ? n >> w : 0 : (u = 0 - w << 16 >> 16, c = n << u, c = (c >> u | 0) == (n | 0) ? c : n >> 31 ^ 2147483647), N2(c, D, O, f), O = mr((R[D >> 1] | 0) + 65509 & 65535, e[O >> 1] | 0, f) | 0, D = O << 13, f = N1((D >> 13 | 0) == (O | 0) ? D : O >> 31 ^ 2147483647, f) | 0, e[a >> 1] = f, C = I;
            }
            function te(r, t, i, n, o, s, u, a, f, c, w) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0;
              var v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0;
              switch (I = C, C = C + 80 | 0, S = I, e[u >> 1] = e[s >> 1] | 0, e[a >> 1] = e[s + 2 >> 1] | 0, m = e[s + 4 >> 1] | 0, m << 16 >> 16 == -32768 ? m = 32767 : m = 0 - (m & 65535) & 65535, e[u + 2 >> 1] = m, e[a + 2 >> 1] = (R[s + 6 >> 1] | 0) + 1, r | 0) {
                case 0:
                case 5: {
                  E = 0, p = 0, v = 0, b = 0;
                  break;
                }
                default:
                  E = 0, p = 1, v = 1, b = 1;
              }
              for (; ; ) if (d = (e[o + (E << 1) >> 1] | 0) >>> 3, e[S + (E << 1) >> 1] = d, d = d << 16 >> 16, m = k(d, d) | 0, (m | 0) != 1073741824 ? (s = (m << 1) + p | 0, (m ^ p | 0) > 0 & (s ^ p | 0) < 0 ? (l[w >> 2] = 1, p = (p >>> 31) + 2147483647 | 0) : p = s) : (l[w >> 2] = 1, p = 2147483647), m = k(e[t + (E << 1) >> 1] | 0, d) | 0, (m | 0) != 1073741824 ? (s = (m << 1) + v | 0, (m ^ v | 0) > 0 & (s ^ v | 0) < 0 ? (l[w >> 2] = 1, v = (v >>> 31) + 2147483647 | 0) : v = s) : (l[w >> 2] = 1, v = 2147483647), m = k(e[n + (E << 1) >> 1] | 0, d) | 0, (m | 0) != 1073741824 ? (s = (m << 1) + b | 0, (m ^ b | 0) > 0 & (s ^ b | 0) < 0 && (l[w >> 2] = 1, s = (b >>> 31) + 2147483647 | 0)) : (l[w >> 2] = 1, s = 2147483647), E = E + 1 | 0, (E | 0) == 40) {
                n = s, d = v;
                break;
              } else b = s;
              switch (v = $1(p) | 0, s = v << 16 >> 16, v << 16 >> 16 > 0 ? (m = p << s, (m >> s | 0) != (p | 0) && (m = p >> 31 ^ 2147483647)) : (m = 0 - s << 16, (m | 0) < 2031616 ? m = p >> (m >> 16) : m = 0), o = u + 4 | 0, e[o >> 1] = m >>> 16, t = a + 4 | 0, e[t >> 1] = -3 - (v & 65535), p = $1(d) | 0, s = p << 16 >> 16, p << 16 >> 16 > 0 ? (m = d << s, (m >> s | 0) != (d | 0) && (m = d >> 31 ^ 2147483647)) : (m = 0 - s << 16, (m | 0) < 2031616 ? m = d >> (m >> 16) : m = 0), s = m >>> 16, e[u + 6 >> 1] = (s | 0) == 32768 ? 32767 : 0 - s & 65535, e[a + 6 >> 1] = 7 - (p & 65535), p = $1(n) | 0, s = p << 16 >> 16, p << 16 >> 16 > 0 ? (m = n << s, (m >> s | 0) != (n | 0) && (m = n >> 31 ^ 2147483647)) : (m = 0 - s << 16, (m | 0) < 2031616 ? m = n >> (m >> 16) : m = 0), e[u + 8 >> 1] = m >>> 16, e[a + 8 >> 1] = 7 - (p & 65535), r | 0) {
                case 0:
                case 5: {
                  m = 0, v = 0;
                  break;
                }
                default: {
                  C = I;
                  return;
                }
              }
              do
                v = (k(e[S + (m << 1) >> 1] | 0, e[i + (m << 1) >> 1] | 0) | 0) + v | 0, m = m + 1 | 0;
              while ((m | 0) != 40);
              if (s = v << 1, m = $1(s) | 0, p = m << 16 >> 16, m << 16 >> 16 > 0 ? (v = s << p, (v >> p | 0) == (s | 0) ? (D = v, O = 40) : (D = s >> 31 ^ 2147483647, O = 40)) : (v = 0 - p << 16, (v | 0) < 2031616 && (D = s >> (v >> 16), O = 40)), (O | 0) == 40 && (D >> 16 | 0) >= 1) {
                w = o0(D >>> 16 & 65535, 1, w) | 0, e[f >> 1] = k0(w, e[o >> 1] | 0) | 0, e[c >> 1] = 65528 - (m & 65535) - (R[t >> 1] | 0), C = I;
                return;
              }
              e[f >> 1] = 0, e[c >> 1] = 0, C = I;
            }
            function s6(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0;
              s = 0, o = 0;
              do
                u = e[r + (s << 1) >> 1] | 0, o = (k(u, u) | 0) + o | 0, s = s + 1 | 0;
              while ((s | 0) != 40);
              (o | 0) < 0 && (l[n >> 2] = 1, o = 2147483647), n = $1(o) | 0, r = n << 16 >> 16, n << 16 >> 16 > 0 ? (s = o << r, (s >> r | 0) == (o | 0) ? o = s : o = o >> 31 ^ 2147483647) : (r = 0 - r << 16, (r | 0) < 2031616 ? o = o >> (r >> 16) : o = 0), e[i >> 1] = o >>> 16, e[t >> 1] = 16 - (n & 65535);
            }
            function g3(r, t, i, n, o, s, u, a, f, c, w, v, p) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0, p = p | 0;
              var m = 0, d = 0, b = 0, E = 0;
              if (d = C, C = C + 16 | 0, m = d, c >>> 0 < 2) {
                u = F3(w, r, t, i, n, u, a, m, l[v + 76 >> 2] | 0, p) | 0, p = l[f >> 2] | 0, e[p >> 1] = u, u = e[m >> 1] | 0, l[f >> 2] = p + 4, e[p + 2 >> 1] = u, C = d;
                return;
              }
              switch (c | 0) {
                case 2: {
                  u = N3(r, t, i, n, u, a, m, p) | 0, p = l[f >> 2] | 0, e[p >> 1] = u, u = e[m >> 1] | 0, l[f >> 2] = p + 4, e[p + 2 >> 1] = u, C = d;
                  return;
                }
                case 3: {
                  u = z3(r, t, i, n, u, a, m, p) | 0, p = l[f >> 2] | 0, e[p >> 1] = u, u = e[m >> 1] | 0, l[f >> 2] = p + 4, e[p + 2 >> 1] = u, C = d;
                  return;
                }
                default: {
                  if ((c & -2 | 0) == 4) {
                    u = x3(r, t, i, n, u, a, m, l[v + 36 >> 2] | 0, p) | 0, p = l[f >> 2] | 0, e[p >> 1] = u, u = e[m >> 1] | 0, l[f >> 2] = p + 4, e[p + 2 >> 1] = u, C = d;
                    return;
                  }
                  if ((c | 0) != 6) {
                    if (w = o << 16 >> 16, w = (w << 17 >> 17 | 0) == (w | 0) ? w << 1 : w >>> 15 ^ 32767, o = i << 16 >> 16 < 40, !o) {
                      t6(r, s, t, u, a, l[f >> 2] | 0, l[v + 36 >> 2] | 0, p), l[f >> 2] = (l[f >> 2] | 0) + 20, C = d;
                      return;
                    }
                    m = i << 16 >> 16, c = w << 16 >> 16, n = m;
                    do
                      E = (k(e[t + (n - m << 1) >> 1] | 0, c) | 0) >>> 15 & 65535, b = t + (n << 1) | 0, e[b >> 1] = a1(e[b >> 1] | 0, E, p) | 0, n = n + 1 | 0;
                    while ((n & 65535) << 16 >> 16 != 40);
                    if (t6(r, s, t, u, a, l[f >> 2] | 0, l[v + 36 >> 2] | 0, p), l[f >> 2] = (l[f >> 2] | 0) + 20, !o) {
                      C = d;
                      return;
                    }
                    o = i << 16 >> 16, c = w << 16 >> 16, m = o;
                    do
                      n = (k(e[u + (m - o << 1) >> 1] | 0, c) | 0) >> 15, (n | 0) > 32767 && (l[p >> 2] = 1, n = 32767), E = u + (m << 1) | 0, e[E >> 1] = a1(e[E >> 1] | 0, n & 65535, p) | 0, m = m + 1 | 0;
                    while ((m & 65535) << 16 >> 16 != 40);
                    C = d;
                    return;
                  }
                  if (v = n << 16 >> 16, v = (v << 17 >> 17 | 0) == (v | 0) ? v << 1 : v >>> 15 ^ 32767, w = i << 16 >> 16 < 40, !w) {
                    n6(r, s, t, u, a, l[f >> 2] | 0, p), l[f >> 2] = (l[f >> 2] | 0) + 14, C = d;
                    return;
                  }
                  m = i << 16 >> 16, c = v << 16 >> 16, n = m;
                  do
                    o = (k(e[t + (n - m << 1) >> 1] | 0, c) | 0) >> 15, (o | 0) > 32767 && (l[p >> 2] = 1, o = 32767), E = t + (n << 1) | 0, e[E >> 1] = a1(e[E >> 1] | 0, o & 65535, p) | 0, n = n + 1 | 0;
                  while ((n & 65535) << 16 >> 16 != 40);
                  if (n6(r, s, t, u, a, l[f >> 2] | 0, p), l[f >> 2] = (l[f >> 2] | 0) + 14, !w) {
                    C = d;
                    return;
                  }
                  o = i << 16 >> 16, c = v << 16 >> 16, m = o;
                  do
                    n = (k(e[u + (m - o << 1) >> 1] | 0, c) | 0) >> 15, (n | 0) > 32767 && (l[p >> 2] = 1, n = 32767), E = u + (m << 1) | 0, e[E >> 1] = a1(e[E >> 1] | 0, n & 65535, p) | 0, m = m + 1 | 0;
                  while ((m & 65535) << 16 >> 16 != 40);
                  C = d;
                  return;
                }
              }
            }
            function H3(r) {
              r = r | 0;
              var t = 0;
              return !r || (l[r >> 2] = 0, t = A0(4) | 0, !t) ? (r = -1, r | 0) : (_r(t) | 0) << 16 >> 16 ? (d6(t), f0(t), r = -1, r | 0) : (h6(l[t >> 2] | 0) | 0, l[r >> 2] = t, r = 0, r | 0);
            }
            function W3(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (d6(t), f0(l[r >> 2] | 0), l[r >> 2] = 0));
            }
            function l6(r) {
              return r = r | 0, r ? (h6(l[r >> 2] | 0) | 0, r = 0, r | 0) : (r = -1, r | 0);
            }
            function G3(r, t, i, n, o, s, u, a, f, c, w, v, p, m, d, b, E, S, D, O) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0, p = p | 0, m = m | 0, d = d | 0, b = b | 0, E = E | 0, S = S | 0, D = D | 0, O = O | 0;
              var I = 0, M = 0, F = 0, B = 0;
              for (M = C, C = C + 16 | 0, B = M + 2 | 0, F = M, e[p >> 1] = Er(l[r >> 2] | 0, i, o, u, f, s, 40, n, m, F, B, O) | 0, r = e[B >> 1] | 0, n = l[E >> 2] | 0, l[E >> 2] = n + 2, e[n >> 1] = r, h5(u, e[p >> 1] | 0, e[m >> 1] | 0, 40, e[F >> 1] | 0, O), L5(u, s, v, 40), e[d >> 1] = wr(i, f, v, b, 40, O) | 0, e[S >> 1] = 32767, c << 16 >> 16 != 0 && (I = e[d >> 1] | 0, I << 16 >> 16 > 15565) ? I = Hr(t, I, O) | 0 : I = 0, i >>> 0 < 2 ? (B = e[d >> 1] | 0, e[d >> 1] = B << 16 >> 16 > 13926 ? 13926 : B, I << 16 >> 16 && (e[S >> 1] = 15565)) : (I << 16 >> 16 && (e[S >> 1] = 15565, e[d >> 1] = 15565), (i | 0) == 7 && (F = E6(7, e[S >> 1] | 0, d, 0, 0, D, O) | 0, B = l[E >> 2] | 0, l[E >> 2] = B + 2, e[B >> 1] = F)), p = e[d >> 1] | 0, I = 0; F = k(e[v >> 1] | 0, p) | 0, e[w >> 1] = (R[f >> 1] | 0) - (F >>> 14), F = (k(e[u >> 1] | 0, p) | 0) >>> 14, B = a + (I << 1) | 0, e[B >> 1] = (R[B >> 1] | 0) - F, I = I + 1 | 0, (I | 0) != 40; ) u = u + 2 | 0, f = f + 2 | 0, w = w + 2 | 0, v = v + 2 | 0;
              C = M;
            }
            function Y3(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0, o = 0, s = 0;
              return s = C, C = C + 16 | 0, o = s, !r || (l[r >> 2] = 0, i = A0(2532) | 0, l[o >> 2] = i, !i) ? (r = -1, C = s, r | 0) : (T6(i + 2392 | 0), l[i + 2188 >> 2] = 0, l[(l[o >> 2] | 0) + 2192 >> 2] = 0, l[(l[o >> 2] | 0) + 2196 >> 2] = 0, l[(l[o >> 2] | 0) + 2200 >> 2] = 0, l[(l[o >> 2] | 0) + 2204 >> 2] = 0, l[(l[o >> 2] | 0) + 2208 >> 2] = 0, l[(l[o >> 2] | 0) + 2212 >> 2] = 0, l[(l[o >> 2] | 0) + 2220 >> 2] = 0, n = l[o >> 2] | 0, l[n + 2216 >> 2] = t, l[n + 2528 >> 2] = 0, i = n, (H3(n + 2196 | 0) | 0) << 16 >> 16 == 0 && ($r(n + 2192 | 0) | 0) << 16 >> 16 == 0 && (lr(n + 2200 | 0) | 0) << 16 >> 16 == 0 && (yr(n + 2204 | 0) | 0) << 16 >> 16 == 0 && (zr(n + 2208 | 0) | 0) << 16 >> 16 == 0 && (Gr(n + 2212 | 0) | 0) << 16 >> 16 == 0 && (q3(n + 2220 | 0, l[n + 2432 >> 2] | 0) | 0) << 16 >> 16 == 0 && (vr(n + 2188 | 0) | 0) << 16 >> 16 == 0 ? (u6(n) | 0, l[r >> 2] = i, r = 0, C = s, r | 0) : (ne(o), r = -1, C = s, r | 0));
            }
            function ne(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (hr(t + 2188 | 0), jr((l[r >> 2] | 0) + 2192 | 0), ur((l[r >> 2] | 0) + 2200 | 0), W3((l[r >> 2] | 0) + 2196 | 0), Ar((l[r >> 2] | 0) + 2204 | 0), Vr((l[r >> 2] | 0) + 2208 | 0), Xr((l[r >> 2] | 0) + 2212 | 0), Q3((l[r >> 2] | 0) + 2220 | 0), f0(l[r >> 2] | 0), l[r >> 2] = 0));
            }
            function u6(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0, o = 0;
              if (!r) return o = -1, o | 0;
              l[r + 652 >> 2] = r + 320, l[r + 640 >> 2] = r + 240, l[r + 644 >> 2] = r + 160, l[r + 648 >> 2] = r + 80, l[r + 1264 >> 2] = r + 942, l[r + 1912 >> 2] = r + 1590, n = r + 1938 | 0, l[r + 2020 >> 2] = n, l[r + 2384 >> 2] = r + 2304, t = r + 2028 | 0, l[r + 2024 >> 2] = r + 2108, l[r + 2528 >> 2] = 0, T2(r | 0, 0, 640) | 0, T2(r + 1282 | 0, 0, 308) | 0, T2(r + 656 | 0, 0, 286) | 0, i = r + 2224 | 0, o = n + 80 | 0;
              do
                e[n >> 1] = 0, n = n + 2 | 0;
              while ((n | 0) < (o | 0));
              n = t, o = n + 80 | 0;
              do
                e[n >> 1] = 0, n = n + 2 | 0;
              while ((n | 0) < (o | 0));
              t = r + 1268 | 0, n = i, o = n + 80 | 0;
              do
                e[n >> 1] = 0, n = n + 2 | 0;
              while ((n | 0) < (o | 0));
              return e[t >> 1] = 40, e[r + 1270 >> 1] = 40, e[r + 1272 >> 1] = 40, e[r + 1274 >> 1] = 40, e[r + 1276 >> 1] = 40, dr(l[r + 2188 >> 2] | 0) | 0, O6(l[r + 2192 >> 2] | 0) | 0, l6(l[r + 2196 >> 2] | 0) | 0, ar(l[r + 2200 >> 2] | 0) | 0, kr(l[r + 2204 >> 2] | 0) | 0, xr(l[r + 2208 >> 2] | 0) | 0, Yr(l[r + 2212 >> 2] | 0) | 0, J3(l[r + 2220 >> 2] | 0, l[r + 2432 >> 2] | 0) | 0, e[r + 2388 >> 1] = 0, o = 0, o | 0;
            }
            function X3(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0, R1 = 0, Z = 0, G = 0, T1 = 0, Q1 = 0, B1 = 0, t0 = 0, j1 = 0, G1 = 0, c0 = 0, e0 = 0, R0 = 0, r0 = 0, m0 = 0, S0 = 0, _0 = 0, n0 = 0, U0 = 0, h2 = 0, E2 = 0, W0 = 0, F0 = 0, D0 = 0, x1 = 0;
              if (x1 = C, C = C + 1184 | 0, h1 = x1, w = x1 + 1096 | 0, v = x1 + 1008 | 0, f = x1 + 904 | 0, U0 = x1 + 928 | 0, h2 = x1 + 824 | 0, G = x1 + 744 | 0, W0 = x1 + 664 | 0, F0 = x1 + 584 | 0, Q1 = x1 + 328 | 0, S0 = x1 + 504 | 0, _0 = x1 + 424 | 0, E2 = x1 + 344 | 0, D0 = x1 + 248 | 0, T1 = x1 + 168 | 0, e0 = x1 + 88 | 0, r0 = x1 + 68 | 0, m0 = x1 + 48 | 0, R0 = x1 + 28 | 0, n0 = x1 + 24 | 0, G1 = x1 + 22 | 0, t0 = x1 + 20 | 0, Z = x1 + 16 | 0, k1 = x1 + 12 | 0, R1 = x1 + 10 | 0, j1 = x1 + 8 | 0, B1 = x1 + 6 | 0, c0 = x1 + 4 | 0, l[h1 >> 2] = n, i1 = r + 2528 | 0, u = r + 652 | 0, K0(l[u >> 2] | 0, i | 0, 320) | 0, l[o >> 2] = t, c = r + 2216 | 0, l[c >> 2] | 0 ? (n = qr(l[r + 2212 >> 2] | 0, l[u >> 2] | 0, i1) | 0, b1 = r + 2220 | 0, i = b1, n = j3(l[b1 >> 2] | 0, n, o, i1) | 0) : (i = r + 2220 | 0, n = 0), b1 = r + 2392 | 0, br(l[r + 2188 >> 2] | 0, t, l[r + 644 >> 2] | 0, l[r + 648 >> 2] | 0, w, b1, i1), a = r + 2192 | 0, ei(l[a >> 2] | 0, t, l[o >> 2] | 0, w, v, f, h1, i1), $3(l[i >> 2] | 0, f, l[u >> 2] | 0, i1), (l[o >> 2] | 0) == 8) {
                Z3(l[i >> 2] | 0, n, l[(l[a >> 2] | 0) + 40 >> 2] | 0, (l[r + 2200 >> 2] | 0) + 32 | 0, h1, i1), T2(r + 1282 | 0, 0, 308) | 0, u = r + 2244 | 0, m = u + 20 | 0;
                do
                  e[u >> 1] = 0, u = u + 2 | 0;
                while ((u | 0) < (m | 0));
                u = r + 2284 | 0, m = u + 20 | 0;
                do
                  e[u >> 1] = 0, u = u + 2 | 0;
                while ((u | 0) < (m | 0));
                u = l[r + 2020 >> 2] | 0, m = u + 80 | 0;
                do
                  e[u >> 1] = 0, u = u + 2 | 0;
                while ((u | 0) < (m | 0));
                u = r + 2028 | 0, m = u + 80 | 0;
                do
                  e[u >> 1] = 0, u = u + 2 | 0;
                while ((u | 0) < (m | 0));
                O6(l[a >> 2] | 0) | 0, u = l[a >> 2] | 0, i = f, m = u + 20 | 0;
                do
                  e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                while ((u | 0) < (m | 0));
                u = (l[a >> 2] | 0) + 20 | 0, i = f, m = u + 20 | 0;
                do
                  e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                while ((u | 0) < (m | 0));
                l6(l[r + 2196 >> 2] | 0) | 0, e[r + 2388 >> 1] = 0, _1 = 0;
              } else _1 = gr(l[r + 2208 >> 2] | 0, l[a >> 2] | 0, i1) | 0;
              if (s1 = r + 640 | 0, a = r + 2264 | 0, u = r + 1264 | 0, i = r + 2204 | 0, n = r + 2212 | 0, f1 = r + 1268 | 0, d1 = r + 1278 | 0, fe(t, 2842, 2862, 2882, w, 0, l[s1 >> 2] | 0, a, l[u >> 2] | 0, i1), t >>> 0 > 1 ? (le(l[i >> 2] | 0, l[n >> 2] | 0, t, l[u >> 2] | 0, Z, f1, d1, 0, l[c >> 2] | 0, i1), fe(t, 2842, 2862, 2882, w, 80, l[s1 >> 2] | 0, a, l[u >> 2] | 0, i1), le(l[i >> 2] | 0, l[n >> 2] | 0, t, (l[u >> 2] | 0) + 160 | 0, Z + 2 | 0, f1, d1, 1, l[c >> 2] | 0, i1)) : (fe(t, 2842, 2862, 2882, w, 80, l[s1 >> 2] | 0, a, l[u >> 2] | 0, i1), le(l[i >> 2] | 0, l[n >> 2] | 0, t, l[u >> 2] | 0, Z, f1, d1, 1, l[c >> 2] | 0, i1), e[Z + 2 >> 1] = e[Z >> 1] | 0), l[c >> 2] | 0 && Kr(l[n >> 2] | 0, Z, i1), (l[o >> 2] | 0) == 8) return F0 = r + 656 | 0, D0 = r + 976 | 0, K0(F0 | 0, D0 | 0, 286) | 0, D0 = r + 320 | 0, K0(r | 0, D0 | 0, 320) | 0, C = x1, 0;
              for (F = r + 2224 | 0, B = r + 2244 | 0, U = r + 2284 | 0, T = r + 2388 | 0, L = r + 2020 | 0, V = r + 1916 | 0, g = r + 1912 | 0, K = r + 2024 | 0, Q = r + 2384 | 0, W = r + 2196 | 0, x = r + 2208 | 0, H = r + 2464 | 0, e1 = r + 2200 | 0, Y = r + 2224 | 0, O = r + 2244 | 0, I = r + 1270 | 0, M = r + 1280 | 0, D = 0, c = 0, f = 0, b = 0, E = 0, a = 0, S = -1; ; ) {
                p = S, S = S + 1 << 16 >> 16, b = 1 - (b << 16 >> 16) | 0, n = b & 65535, d = (b & 65535 | 0) != 0, i = l[o >> 2] | 0, u = (i | 0) == 0;
                do
                  if (d) if (u) {
                    u = r0, i = F, m = u + 20 | 0;
                    do
                      e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                    while ((u | 0) < (m | 0));
                    u = m0, i = B, m = u + 20 | 0;
                    do
                      e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                    while ((u | 0) < (m | 0));
                    u = R0, i = U, m = u + 20 | 0;
                    do
                      e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                    while ((u | 0) < (m | 0));
                    e[n0 >> 1] = e[T >> 1] | 0, t = (l[s1 >> 2] | 0) + (D << 1) | 0, u = 20;
                    break;
                  } else {
                    t = (l[s1 >> 2] | 0) + (D << 1) | 0, u = 19;
                    break;
                  }
                  else t = (l[s1 >> 2] | 0) + (D << 1) | 0, u ? u = 20 : u = 19;
                while (false);
                if ((u | 0) == 19) ce(i, 2842, 2862, 2882, w, v, t, U, O, l[L >> 2] | 0, V, (l[g >> 2] | 0) + (D << 1) | 0, l[K >> 2] | 0, U0, S0, l[Q >> 2] | 0);
                else if ((u | 0) == 20 && (ce(0, 2842, 2862, 2882, w, v, t, U, m0, l[L >> 2] | 0, V, (l[g >> 2] | 0) + (D << 1) | 0, l[K >> 2] | 0, U0, S0, l[Q >> 2] | 0), d)) {
                  u = e0, i = l[K >> 2] | 0, m = u + 80 | 0;
                  do
                    e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                  while ((u | 0) < (m | 0));
                }
                u = _0, i = S0, m = u + 80 | 0;
                do
                  e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                while ((u | 0) < (m | 0));
                switch (G3(l[W >> 2] | 0, l[x >> 2] | 0, l[o >> 2] | 0, E, Z, l[K >> 2] | 0, (l[g >> 2] | 0) + (D << 1) | 0, _0, U0, _1, h2, W0, k1, R1, j1, Q1, h1, c0, l[H >> 2] | 0, i1), p << 16 >> 16) {
                  case -1: {
                    (e[d1 >> 1] | 0) > 0 && (e[I >> 1] = e[k1 >> 1] | 0);
                    break;
                  }
                  case 2: {
                    (e[M >> 1] | 0) > 0 && (e[f1 >> 1] = e[k1 >> 1] | 0);
                    break;
                  }
                  default:
                }
                g3(h2, l[K >> 2] | 0, e[k1 >> 1] | 0, e[T >> 1] | 0, e[j1 >> 1] | 0, _0, G, F0, h1, l[o >> 2] | 0, S, b1, i1), fr(l[e1 >> 2] | 0, l[o >> 2] | 0, S0, (l[g >> 2] | 0) + (D << 1) | 0, G, U0, h2, W0, F0, Q1, n, e[c0 >> 1] | 0, G1, t0, j1, B1, h1, b1, i1), Wr(l[x >> 2] | 0, e[j1 >> 1] | 0, i1), t = l[o >> 2] | 0;
                do
                  if (t) F5(l[s1 >> 2] | 0, t, E, e[j1 >> 1] | 0, e[B1 >> 1] | 0, v, s, U0, G, W0, F0, Y, U, O, l[g >> 2] | 0, T, i1);
                  else if (d) {
                    u = E2, i = U0, m = u + 80 | 0;
                    do
                      e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                    while ((u | 0) < (m | 0));
                    u = D0, i = F0, m = u + 80 | 0;
                    do
                      e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                    while ((u | 0) < (m | 0));
                    u = T1, i = G, m = u + 80 | 0;
                    do
                      e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                    while ((u | 0) < (m | 0));
                    f = e[k1 >> 1] | 0, c = e[R1 >> 1] | 0, F5(l[s1 >> 2] | 0, 0, E, e[j1 >> 1] | 0, e[B1 >> 1] | 0, v, s, U0, G, W0, F0, r0, U, m0, l[g >> 2] | 0, T, i1), e[T >> 1] = e[n0 >> 1] | 0, a = E;
                    break;
                  } else {
                    u = U, i = R0, m = u + 20 | 0;
                    do
                      e[u >> 1] = e[i >> 1] | 0, u = u + 2 | 0, i = i + 2 | 0;
                    while ((u | 0) < (m | 0));
                    d = a << 16 >> 16, h5((l[g >> 2] | 0) + (d << 1) | 0, f, c, 40, 1, i1), L5((l[g >> 2] | 0) + (d << 1) | 0, e0, W0, 40), F5(l[s1 >> 2] | 0, l[o >> 2] | 0, a, e[G1 >> 1] | 0, e[t0 >> 1] | 0, v + -22 | 0, s, E2, T1, W0, D0, Y, U, O, l[g >> 2] | 0, n0, i1), ce(l[o >> 2] | 0, 2842, 2862, 2882, w, v, (l[s1 >> 2] | 0) + (D << 1) | 0, U, O, l[L >> 2] | 0, V, (l[g >> 2] | 0) + (D << 1) | 0, l[K >> 2] | 0, U0, S0, l[Q >> 2] | 0), h5((l[g >> 2] | 0) + (D << 1) | 0, e[k1 >> 1] | 0, e[R1 >> 1] | 0, 40, 1, i1), L5((l[g >> 2] | 0) + (D << 1) | 0, l[K >> 2] | 0, W0, 40), F5(l[s1 >> 2] | 0, l[o >> 2] | 0, E, e[j1 >> 1] | 0, e[B1 >> 1] | 0, v, s, U0, G, W0, F0, Y, U, O, l[g >> 2] | 0, T, i1);
                    break;
                  }
                while (false);
                if (t = D + 40 | 0, E = t & 65535, E << 16 >> 16 >= 160) break;
                D = t << 16 >> 16, w = w + 22 | 0, v = v + 22 | 0;
              }
              return K0(r + 1282 | 0, r + 1602 | 0, 308) | 0, F0 = r + 656 | 0, D0 = r + 976 | 0, K0(F0 | 0, D0 | 0, 286) | 0, D0 = r + 320 | 0, K0(r | 0, D0 | 0, 320) | 0, C = x1, 0;
            }
            function L5(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0;
              if (m = n << 16 >> 16, n << 16 >> 16 > 1) p = 1;
              else return;
              for (; ; ) {
                if (o = e[r >> 1] | 0, a = t + (p + -1 << 1) | 0, n = k(e[t + (p << 1) >> 1] | 0, o) | 0, c = e[a >> 1] | 0, o = k(c << 16 >> 16, o) | 0, u = (p + 131071 | 0) >>> 1, f = u & 65535, s = e[r + 2 >> 1] | 0, !(f << 16 >> 16)) t = a, u = c;
                else {
                  w = (u << 1) + 131070 & 131070, v = p - w | 0, u = r;
                  do
                    b = (k(c << 16 >> 16, s) | 0) + n | 0, d = u, u = u + 4 | 0, n = e[a + -2 >> 1] | 0, s = (k(n, s) | 0) + o | 0, o = e[u >> 1] | 0, a = a + -4 | 0, n = b + (k(o, n) | 0) | 0, c = e[a >> 1] | 0, o = s + (k(c << 16 >> 16, o) | 0) | 0, f = f + -1 << 16 >> 16, s = e[d + 6 >> 1] | 0;
                  while (f << 16 >> 16 != 0);
                  u = t + (v + -3 << 1) | 0, r = r + (w + 2 << 1) | 0, t = u, u = e[u >> 1] | 0;
                }
                if (n = (k(u << 16 >> 16, s) | 0) + n | 0, e[i >> 1] = o >>> 12, e[i + 2 >> 1] = n >>> 12, n = (p << 16) + 131072 >> 16, (n | 0) < (m | 0)) i = i + 4 | 0, r = r + (1 - p << 1) | 0, p = n;
                else break;
              }
            }
            function e5(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0;
              for (B = C, C = C + 80 | 0, F = B, u = 20, s = r, o = 1; M = e[s >> 1] | 0, M = (k(M, M) | 0) + o | 0, o = e[s + 2 >> 1] | 0, o = M + (k(o, o) | 0) | 0, u = u + -1 << 16 >> 16, u << 16 >> 16; ) s = s + 4 | 0;
              if (o = o << 1, (o | 0) < 0) for (s = 20, o = r, n = F; ; ) if (e[n >> 1] = (e[o >> 1] | 0) >>> 1, e[n + 2 >> 1] = (e[o + 2 >> 1] | 0) >>> 1, s = s + -1 << 16 >> 16, s << 16 >> 16) o = o + 4 | 0, n = n + 4 | 0;
              else {
                M = F;
                break;
              }
              else for (o = D2(o >> 1, n) | 0, (o | 0) < 16777215 ? o = ((o >> 9) * 32440 | 0) >>> 15 << 16 >> 16 : o = 32440, u = 20, s = r, n = F; ; ) if (e[n >> 1] = ((k(e[s >> 1] | 0, o) | 0) + 32 | 0) >>> 6, e[n + 2 >> 1] = ((k(e[s + 2 >> 1] | 0, o) | 0) + 32 | 0) >>> 6, u = u + -1 << 16 >> 16, u << 16 >> 16) s = s + 4 | 0, n = n + 4 | 0;
              else {
                M = F;
                break;
              }
              for (u = 20, s = M, n = i + 3198 | 0, o = 0; I = e[s >> 1] | 0, I = (k(I, I) | 0) + o | 0, e[n >> 1] = (I + 16384 | 0) >>> 15, O = e[s + 2 >> 1] | 0, o = (k(O, O) | 0) + I | 0, e[n + -82 >> 1] = (o + 16384 | 0) >>> 15, u = u + -1 << 16 >> 16, u << 16 >> 16; ) s = s + 4 | 0, n = n + -164 | 0;
              for (I = t + 78 | 0, O = 1; ; ) {
                if (o = 39 - O | 0, r = i + 3120 + (o << 1) | 0, n = i + (o * 80 | 0) + 78 | 0, o = t + (o << 1) | 0, f = F + (O << 1) | 0, s = 65575 - O | 0, a = s & 65535, u = e[M >> 1] | 0, !(a << 16 >> 16)) a = I, s = 0;
                else {
                  for (b = s + 65535 & 65535, S = b * 41 | 0, D = (k(O, -40) | 0) - S | 0, E = 0 - O | 0, S = E - S | 0, E = E - b | 0, d = O + b | 0, m = e[f >> 1] | 0, v = M, p = I, c = i + ((38 - O | 0) * 80 | 0) + 78 | 0, s = 0, w = 0; f = f + 2 | 0, s = (k(m << 16 >> 16, u) | 0) + s | 0, v = v + 2 | 0, m = e[f >> 1] | 0, w = (k(m << 16 >> 16, u) | 0) + w | 0, T = o, o = o + -2 | 0, u = e[o >> 1] | 0, U = e[p >> 1] << 1, T = (k((k(U, e[T >> 1] | 0) | 0) >> 16, (s << 1) + 32768 >> 16) | 0) >>> 15 & 65535, e[n >> 1] = T, e[r >> 1] = T, u = (k((k(U, u) | 0) >> 16, (w << 1) + 32768 >> 16) | 0) >>> 15 & 65535, e[r + -2 >> 1] = u, e[c >> 1] = u, a = a + -1 << 16 >> 16, u = e[v >> 1] | 0, a << 16 >> 16; ) p = p + -2 | 0, r = r + -82 | 0, n = n + -82 | 0, c = c + -82 | 0;
                  f = F + (d + 1 << 1) | 0, a = t + (38 - b << 1) | 0, o = t + (E + 38 << 1) | 0, r = i + 3040 + (S + 38 << 1) | 0, n = i + 3040 + (D + 38 << 1) | 0;
                }
                if (T = (k(e[f >> 1] | 0, u) | 0) + s | 0, T = (k((T << 1) + 32768 >> 16, (k(e[a >> 1] << 1, e[o >> 1] | 0) | 0) >> 16) | 0) >>> 15 & 65535, e[r >> 1] = T, e[n >> 1] = T, n = (O << 16) + 131072 | 0, (n | 0) < 2621440) O = n >> 16;
                else break;
              }
              C = B;
            }
            function K3(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0;
              if (d = C, C = C + 160 | 0, m = d, o << 16 >> 16 > 0) {
                v = s & 65535, p = 0, a = 5;
                do {
                  if ((p | 0) < 40) for (w = p, c = p & 65535, s = 0; ; ) {
                    if (c << 16 >> 16 < 40) {
                      c = c << 16 >> 16, f = 0;
                      do
                        f = (k(e[r + (c - w << 1) >> 1] | 0, e[t + (c << 1) >> 1] | 0) | 0) + f | 0, c = c + 1 | 0;
                      while ((c & 65535) << 16 >> 16 != 40);
                    } else f = 0;
                    if (f = f << 1, l[m + (w << 2) >> 2] = f, f = G2(f) | 0, s = (f | 0) > (s | 0) ? f : s, f = w + v | 0, c = f & 65535, c << 16 >> 16 >= 40) break;
                    w = f << 16 >> 16;
                  }
                  else s = 0;
                  a = (s >> 1) + a | 0, p = p + 1 | 0;
                } while ((p & 65535) << 16 >> 16 != o << 16 >> 16);
              } else a = 5;
              if (n = (($1(a) | 0) & 65535) - (n & 65535) | 0, s = n << 16 >> 16, f = 0 - s << 16, a = (f | 0) < 2031616, f = f >> 16, (n & 65535) << 16 >> 16 > 0) if (a) {
                a = 0;
                do
                  n = l[m + (a << 2) >> 2] | 0, t = n << s, e[i + (a << 1) >> 1] = N1((t >> s | 0) == (n | 0) ? t : n >> 31 ^ 2147483647, u) | 0, a = a + 1 | 0;
                while ((a | 0) != 40);
                C = d;
                return;
              } else {
                a = 0;
                do
                  n = l[m + (a << 2) >> 2] | 0, t = n << s, e[i + (a << 1) >> 1] = N1((t >> s | 0) == (n | 0) ? t : n >> 31 ^ 2147483647, u) | 0, a = a + 1 | 0;
                while ((a | 0) != 40);
                C = d;
                return;
              }
              else if (a) {
                a = 0;
                do
                  e[i + (a << 1) >> 1] = N1(l[m + (a << 2) >> 2] >> f, u) | 0, a = a + 1 | 0;
                while ((a | 0) != 40);
                C = d;
                return;
              } else {
                a = 0;
                do
                  e[i + (a << 1) >> 1] = N1(0, u) | 0, a = a + 1 | 0;
                while ((a | 0) != 40);
                C = d;
                return;
              }
            }
            function m5(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0;
              F = C, C = C + 160 | 0, M = F, D = r + 2 | 0, O = e[r >> 1] | 0, I = 0, o = 5;
              do {
                for (S = I, a = 0; ; ) {
                  if (w = t + (S << 1) | 0, E = 40 - S | 0, s = (E + 131071 | 0) >>> 1 & 65535, f = t + (S + 1 << 1) | 0, u = k(e[w >> 1] << 1, O) | 0, !(s << 16 >> 16)) s = D;
                  else {
                    for (b = 131111 - S + 131070 & 131070, d = S + b | 0, m = D, p = r, v = w; c = v + 4 | 0, w = p + 4 | 0, u = (k(e[f >> 1] << 1, e[m >> 1] | 0) | 0) + u | 0, s = s + -1 << 16 >> 16, u = (k(e[c >> 1] << 1, e[w >> 1] | 0) | 0) + u | 0, s << 16 >> 16; ) f = v + 6 | 0, m = p + 6 | 0, p = w, v = c;
                    f = t + (d + 3 << 1) | 0, s = r + (b + 3 << 1) | 0;
                  }
                  if (E & 1 || (u = (k(e[f >> 1] << 1, e[s >> 1] | 0) | 0) + u | 0), l[M + (S << 2) >> 2] = u, u = (u | 0) < 0 ? 0 - u | 0 : u, a = (u | 0) > (a | 0) ? u : a, u = S + 5 | 0, (u & 65535) << 16 >> 16 < 40) S = u << 16 >> 16;
                  else break;
                }
                o = (a >> 1) + o | 0, I = I + 1 | 0;
              } while ((I | 0) != 5);
              if (n = (($1(o) | 0) & 65535) - (n & 65535) | 0, u = n << 16 >> 16, o = 0 - u << 16, a = o >> 16, (n & 65535) << 16 >> 16 > 0) {
                for (s = 20, o = M; M = l[o >> 2] | 0, n = M << u, e[i >> 1] = (((n >> u | 0) == (M | 0) ? n : M >> 31 ^ 2147483647) + 32768 | 0) >>> 16, M = l[o + 4 >> 2] | 0, n = M << u, e[i + 2 >> 1] = (((n >> u | 0) == (M | 0) ? n : M >> 31 ^ 2147483647) + 32768 | 0) >>> 16, s = s + -1 << 16 >> 16, s << 16 >> 16; ) i = i + 4 | 0, o = o + 8 | 0;
                C = F;
                return;
              }
              if ((o | 0) < 2031616) {
                for (s = 20, o = M; e[i >> 1] = ((l[o >> 2] >> a) + 32768 | 0) >>> 16, e[i + 2 >> 1] = ((l[o + 4 >> 2] >> a) + 32768 | 0) >>> 16, s = s + -1 << 16 >> 16, s << 16 >> 16; ) i = i + 4 | 0, o = o + 8 | 0;
                C = F;
                return;
              } else {
                e[i >> 1] = 0, M = i + 4 | 0, e[i + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, n = M + 4 | 0, e[M + 2 >> 1] = 0, e[n >> 1] = 0, M = n + 4 | 0, e[n + 2 >> 1] = 0, e[M >> 1] = 0, e[M + 2 >> 1] = 0, C = F;
                return;
              }
            }
            function a6(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0;
              return u = (k0(16383, t) | 0) << 16 >> 16, t = k(u, t << 16 >> 16) | 0, (t | 0) == 1073741824 ? (l[n >> 2] = 1, o = 2147483647) : o = t << 1, s = (k(u, i << 16 >> 16) | 0) >> 15, t = o + (s << 1) | 0, (o ^ s | 0) > 0 & (t ^ o | 0) < 0 && (l[n >> 2] = 1, t = (o >>> 31) + 2147483647 | 0), o = 2147483647 - t | 0, i = o >> 16, t = k(i, u) | 0, (t | 0) == 1073741824 ? (l[n >> 2] = 1, s = 2147483647) : s = t << 1, u = (k((o >>> 1) - (i << 15) << 16 >> 16, u) | 0) >> 15, t = s + (u << 1) | 0, (s ^ u | 0) > 0 & (t ^ s | 0) < 0 && (l[n >> 2] = 1, t = (s >>> 31) + 2147483647 | 0), s = t >> 16, u = r >> 16, i = k(s, u) | 0, i = (i | 0) == 1073741824 ? 2147483647 : i << 1, o = (k((t >>> 1) - (s << 15) << 16 >> 16, u) | 0) >> 15, n = (o << 1) + i | 0, n = (o ^ i | 0) > 0 & (n ^ i | 0) < 0 ? (i >>> 31) + 2147483647 | 0 : n, u = (k(s, (r >>> 1) - (u << 15) << 16 >> 16) | 0) >> 15, r = n + (u << 1) | 0, r = (n ^ u | 0) > 0 & (r ^ n | 0) < 0 ? (n >>> 31) + 2147483647 | 0 : r, n = r << 2, ((n >> 2 | 0) == (r | 0) ? n : r >> 31 ^ 2147483647) | 0;
            }
            function q3(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0, o = 0, s = 0;
              if (!r || (l[r >> 2] = 0, i = A0(192) | 0, !i)) return s = -1, s | 0;
              n = i + 176 | 0, e[n >> 1] = 0, e[n + 2 >> 1] = 0, e[n + 4 >> 1] = 0, e[n + 6 >> 1] = 0, e[n + 8 >> 1] = 0, e[n + 10 >> 1] = 0, n = i, o = t, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = i + 20 | 0, o = t, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = i + 40 | 0, o = t, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = i + 60 | 0, o = t, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = i + 80 | 0, o = t, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = i + 100 | 0, o = t, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = i + 120 | 0, o = t, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = i + 140 | 0, o = t, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = i + 160 | 0, s = n + 20 | 0;
              do
                e[n >> 1] = 0, n = n + 2 | 0;
              while ((n | 0) < (s | 0));
              return e[i + 188 >> 1] = 7, e[i + 190 >> 1] = 32767, l[r >> 2] = i, s = 0, s | 0;
            }
            function J3(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0, o = 0;
              if (!r) return o = -1, o | 0;
              i = r + 176 | 0, e[i >> 1] = 0, e[i + 2 >> 1] = 0, e[i + 4 >> 1] = 0, e[i + 6 >> 1] = 0, e[i + 8 >> 1] = 0, e[i + 10 >> 1] = 0, i = r, n = t, o = i + 20 | 0;
              do
                e[i >> 1] = e[n >> 1] | 0, i = i + 2 | 0, n = n + 2 | 0;
              while ((i | 0) < (o | 0));
              i = r + 20 | 0, n = t, o = i + 20 | 0;
              do
                e[i >> 1] = e[n >> 1] | 0, i = i + 2 | 0, n = n + 2 | 0;
              while ((i | 0) < (o | 0));
              i = r + 40 | 0, n = t, o = i + 20 | 0;
              do
                e[i >> 1] = e[n >> 1] | 0, i = i + 2 | 0, n = n + 2 | 0;
              while ((i | 0) < (o | 0));
              i = r + 60 | 0, n = t, o = i + 20 | 0;
              do
                e[i >> 1] = e[n >> 1] | 0, i = i + 2 | 0, n = n + 2 | 0;
              while ((i | 0) < (o | 0));
              i = r + 80 | 0, n = t, o = i + 20 | 0;
              do
                e[i >> 1] = e[n >> 1] | 0, i = i + 2 | 0, n = n + 2 | 0;
              while ((i | 0) < (o | 0));
              i = r + 100 | 0, n = t, o = i + 20 | 0;
              do
                e[i >> 1] = e[n >> 1] | 0, i = i + 2 | 0, n = n + 2 | 0;
              while ((i | 0) < (o | 0));
              i = r + 120 | 0, n = t, o = i + 20 | 0;
              do
                e[i >> 1] = e[n >> 1] | 0, i = i + 2 | 0, n = n + 2 | 0;
              while ((i | 0) < (o | 0));
              i = r + 140 | 0, n = t, o = i + 20 | 0;
              do
                e[i >> 1] = e[n >> 1] | 0, i = i + 2 | 0, n = n + 2 | 0;
              while ((i | 0) < (o | 0));
              i = r + 160 | 0, o = i + 20 | 0;
              do
                e[i >> 1] = 0, i = i + 2 | 0;
              while ((i | 0) < (o | 0));
              return e[r + 188 >> 1] = 7, e[r + 190 >> 1] = 32767, o = 1, o | 0;
            }
            function Q3(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function Z3(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0;
              if (T = C, C = C + 112 | 0, F = T + 80 | 0, B = T + 60 | 0, U = T + 40 | 0, M = T, t << 16 >> 16 == 0 && (u = r + 178 | 0, (e[u >> 1] | 0) != 0)) {
                U = r + 180 | 0, s = r + 182 | 0, i = u, U = e[U >> 1] | 0, n = l[o >> 2] | 0, B = n + 2 | 0, e[n >> 1] = U, s = e[s >> 1] | 0, U = n + 4 | 0, e[B >> 1] = s, B = r + 184 | 0, B = e[B >> 1] | 0, s = n + 6 | 0, e[U >> 1] = B, U = r + 186 | 0, U = e[U >> 1] | 0, r = n + 8 | 0, e[s >> 1] = U, i = e[i >> 1] | 0, n = n + 10 | 0, l[o >> 2] = n, e[r >> 1] = i, C = T;
                return;
              }
              b = M + 36 | 0, E = M + 32 | 0, S = M + 28 | 0, D = M + 24 | 0, O = M + 20 | 0, I = M + 16 | 0, p = M + 12 | 0, m = M + 8 | 0, d = M + 4 | 0, t = M, u = t + 40 | 0;
              do
                l[t >> 2] = 0, t = t + 4 | 0;
              while ((t | 0) < (u | 0));
              for (v = 7, t = 0; ; ) {
                for (w = e[r + 160 + (v << 1) >> 1] | 0, u = w << 16 >> 16, w << 16 >> 16 < 0 ? u = ~((u ^ -4) >> 2) : u = u >>> 2, t = a1(t, u & 65535, s) | 0, f = v * 10 | 0, w = 9; c = M + (w << 2) | 0, a = l[c >> 2] | 0, L = e[r + (w + f << 1) >> 1] | 0, u = L + a | 0, (L ^ a | 0) > -1 & (u ^ a | 0) < 0 && (l[s >> 2] = 1, u = (a >>> 31) + 2147483647 | 0), l[c >> 2] = u, (w | 0) > 0; ) w = w + -1 | 0;
                if ((v | 0) > 0) v = v + -1 | 0;
                else break;
              }
              u = t << 16 >> 16, t << 16 >> 16 < 0 ? u = ~((u ^ -2) >> 1) : u = u >>> 1, e[B + 18 >> 1] = (l[b >> 2] | 0) >>> 3, e[B + 16 >> 1] = (l[E >> 2] | 0) >>> 3, e[B + 14 >> 1] = (l[S >> 2] | 0) >>> 3, e[B + 12 >> 1] = (l[D >> 2] | 0) >>> 3, e[B + 10 >> 1] = (l[O >> 2] | 0) >>> 3, e[B + 8 >> 1] = (l[I >> 2] | 0) >>> 3, e[B + 6 >> 1] = (l[p >> 2] | 0) >>> 3, e[B + 4 >> 1] = (l[m >> 2] | 0) >>> 3, e[B + 2 >> 1] = (l[d >> 2] | 0) >>> 3, e[B >> 1] = (l[M >> 2] | 0) >>> 3, t = r + 178 | 0, u = (((u << 16) + 167772160 | 0) >>> 16) + 128 | 0, e[t >> 1] = u, u = u << 16, (u | 0) < 0 ? u = ~((u >> 16 ^ -256) >> 8) : u = u >> 24, e[t >> 1] = u, (u | 0) <= 63 ? (u | 0) < 0 && (e[t >> 1] = 0, u = 0) : (e[t >> 1] = 63, u = 63), L = P1(u << 8 & 65535, 11560, s) | 0, L = L << 16 >> 16 > 0 ? 0 : L << 16 >> 16 < -14436 ? -14436 : L, e[n >> 1] = L, e[n + 2 >> 1] = L, e[n + 4 >> 1] = L, e[n + 6 >> 1] = L, L = ((L << 16 >> 16) * 5443 | 0) >>> 15 & 65535, e[n + 8 >> 1] = L, e[n + 10 >> 1] = L, e[n + 12 >> 1] = L, e[n + 14 >> 1] = L, v5(B, F, 10, s), $0(F, 205, 10, s), H0(F, B, 10, s), n = r + 182 | 0, L = r + 180 | 0, L6(i, 8, B, U, n, L, s), s = n, n = t, L = e[L >> 1] | 0, i = l[o >> 2] | 0, U = i + 2 | 0, e[i >> 1] = L, s = e[s >> 1] | 0, L = i + 4 | 0, e[U >> 1] = s, U = r + 184 | 0, U = e[U >> 1] | 0, s = i + 6 | 0, e[L >> 1] = U, r = r + 186 | 0, r = e[r >> 1] | 0, L = i + 8 | 0, e[s >> 1] = r, r = e[n >> 1] | 0, i = i + 10 | 0, l[o >> 2] = i, e[L >> 1] = r, C = T;
            }
            function $3(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0;
              c = C, C = C + 16 | 0, u = c + 2 | 0, f = c, a = r + 176 | 0, s = (R[a >> 1] | 0) + 1 | 0, s = (s & 65535 | 0) == 8 ? 0 : s & 65535, e[a >> 1] = s, s = r + ((s << 16 >> 16) * 10 << 1) | 0, o = s + 20 | 0;
              do
                e[s >> 1] = e[t >> 1] | 0, s = s + 2 | 0, t = t + 2 | 0;
              while ((s | 0) < (o | 0));
              for (t = 0, o = 160; ; ) {
                if (s = e[i >> 1] | 0, t = (k(s << 1, s) | 0) + t | 0, (t | 0) < 0) {
                  t = 2147483647;
                  break;
                }
                if (o = o + -1 << 16 >> 16, o << 16 >> 16) i = i + 2 | 0;
                else break;
              }
              N2(t, u, f, n), t = e[u >> 1] | 0, u = t << 16 >> 16, i = u << 10, (i | 0) != (u << 26 >> 16 | 0) && (l[n >> 2] = 1, i = t << 16 >> 16 > 0 ? 32767 : -32768), e[r + 160 + (e[a >> 1] << 1) >> 1] = (((e[f >> 1] | 0) >>> 5) + i << 16) + -558432256 >> 17, C = c;
            }
            function j3(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0;
              s = r + 190 | 0, u = a1(e[s >> 1] | 0, 1, n) | 0, e[s >> 1] = u, o = r + 188 | 0;
              do
                if (t << 16 >> 16) e[o >> 1] = 7, r = 0;
                else {
                  if (r = e[o >> 1] | 0, !(r << 16 >> 16)) {
                    e[s >> 1] = 0, l[i >> 2] = 8, r = 1;
                    break;
                  }
                  s = (r & 65535) + 65535 & 65535, e[o >> 1] = s, (a1(u, s, n) | 0) << 16 >> 16 < 30 && (l[i >> 2] = 8), r = 0;
                }
              while (false);
              return r | 0;
            }
            function er(r, t, i, n, o, s, u, a) {
              return r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, s << 16 >> 16 ? u << 16 >> 16 ? (n = n << 16 >> 16, n = (((i & 65535) - n << 16) + -327680 | 0) > 0 ? n + 5 & 65535 : i, o = o << 16 >> 16, i = r << 16 >> 16, n = (((o - (n & 65535) << 16) + -262144 | 0) > 0 ? o + 65532 & 65535 : n) << 16 >> 16, o = n * 196608 | 0, r = o + -393216 >> 16, s = ((t & 65535) << 16) + (i * 196608 | 0) >> 16, r - s & 32768 ? (o + 196608 >> 16 | 0) > (s | 0) ? (t = s + 3 - r | 0, t = t & 65535, t | 0) : (t = i + 11 - n | 0, t = t & 65535, t | 0) : (t = i + 5 - n | 0, t = t & 65535, t | 0)) : (a = (r & 65535) - (n & 65535) << 16, t = (t << 16 >> 16) + 2 + (a >> 15) + (a >> 16) | 0, t = t & 65535, t | 0) : (s = r << 16 >> 16, ((s << 16) + -5570560 | 0) < 65536 ? (t = (s * 3 | 0) + -58 + (t << 16 >> 16) | 0, t = t & 65535, t | 0) : (t = s + 112 | 0, t = t & 65535, t | 0));
            }
            function rr(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, o = r << 16 >> 16;
              do
                if (n << 16 >> 16) o = ((((o - (i & 65535) | 0) * 393216 | 0) + 196608 | 0) >>> 16) + (t & 65535) | 0;
                else if (r << 16 >> 16 < 95) {
                  o = ((o * 393216 | 0) + -6881280 >> 16) + (t << 16 >> 16) | 0;
                  break;
                } else {
                  o = o + 368 | 0;
                  break;
                }
              while (false);
              return o & 65535 | 0;
            }
            function ir(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0;
              if (o = l[n + 96 >> 2] | 0, r >>> 0 < 8) {
                if (f = (l[n + 100 >> 2] | 0) + (r << 2) | 0, a = l[f >> 2] | 0, A[i >> 0] = e[t + (e[a >> 1] << 1) >> 1] << 4 | r | e[t + (e[a + 2 >> 1] << 1) >> 1] << 5 | e[t + (e[a + 4 >> 1] << 1) >> 1] << 6 | e[t + (e[a + 6 >> 1] << 1) >> 1] << 7, a = o + (r << 1) | 0, n = e[a >> 1] | 0, (n + -7 | 0) > 4) for (o = 4, u = 4, r = 1; c = e[t + (e[(l[f >> 2] | 0) + (o << 1) >> 1] << 1) >> 1] | 0, n = i + (r << 16 >> 16) | 0, A[n >> 0] = c, c = R[t + (e[(l[f >> 2] | 0) + ((u | 1) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 1 | c & 65535, A[n >> 0] = c, c = R[t + (e[(l[f >> 2] | 0) + ((u | 2) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 2 | c, A[n >> 0] = c, c = R[t + (e[(l[f >> 2] | 0) + ((u | 3) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 3 | c, A[n >> 0] = c, c = R[t + (e[(l[f >> 2] | 0) + (u + 4 << 16 >> 16 << 16 >> 16 << 1) >> 1] << 1) >> 1] << 4 | c, A[n >> 0] = c, c = R[t + (e[(l[f >> 2] | 0) + (u + 5 << 16 >> 16 << 16 >> 16 << 1) >> 1] << 1) >> 1] << 5 | c, A[n >> 0] = c, c = R[t + (e[(l[f >> 2] | 0) + (u + 6 << 16 >> 16 << 16 >> 16 << 1) >> 1] << 1) >> 1] << 6 | c, A[n >> 0] = c, s = u + 8 << 16 >> 16, r = r + 1 << 16 >> 16, A[n >> 0] = R[t + (e[(l[f >> 2] | 0) + (u + 7 << 16 >> 16 << 16 >> 16 << 1) >> 1] << 1) >> 1] << 7 | c, o = s << 16 >> 16, n = e[a >> 1] | 0, !((o | 0) >= (n + -7 | 0)); ) u = s;
                else s = 4, r = 1;
                if (a = n + 4 & 7, !a) return;
                for (o = i + (r << 16 >> 16) | 0, A[o >> 0] = 0, n = 0, u = 0, r = 0; u = (R[t + (e[(l[f >> 2] | 0) + (s << 16 >> 16 << 1) >> 1] << 1) >> 1] & 255) << n | u & 255, A[o >> 0] = u, r = r + 1 << 16 >> 16, n = r << 16 >> 16, !((n | 0) >= (a | 0)); ) s = s + 1 << 16 >> 16;
                return;
              }
              if ((r | 0) == 15) {
                A[i >> 0] = 15;
                return;
              }
              if (A[i >> 0] = e[t >> 1] << 4 | r | e[t + 2 >> 1] << 5 | e[t + 4 >> 1] << 6 | e[t + 6 >> 1] << 7, n = o + (r << 1) | 0, r = e[n >> 1] | 0, o = ((r & 65535) << 16) + 262144 >> 16, f = o & -8, u = (f + 524281 | 0) >>> 3 & 65535, u << 16 >> 16 > 0) {
                for (o = ((o & -8) + 524281 | 0) >>> 3, a = ((o << 3) + 524280 & 524280) + 12 | 0, s = 1, r = t + 8 | 0; A[i + (s << 16 >> 16) >> 0] = R[r + 2 >> 1] << 1 | R[r >> 1] | R[r + 4 >> 1] << 2 | R[r + 6 >> 1] << 3 | R[r + 8 >> 1] << 4 | R[r + 10 >> 1] << 5 | R[r + 12 >> 1] << 6 | R[r + 14 >> 1] << 7, u << 16 >> 16 > 1; ) u = u + -1 << 16 >> 16, s = s + 1 << 16 >> 16, r = r + 16 | 0;
                r = e[n >> 1] | 0, s = (o << 16) + 65536 >> 16;
              } else a = 4, s = 1;
              if (r = (0 - f | 4) + (r & 65535) << 16, u = r >> 16, !!u) {
                if (s = i + s | 0, A[s >> 0] = 0, (r | 0) > 0) r = 0, o = 0, n = 0;
                else return;
                do
                  o = o & 255 | e[t + (a + r << 1) >> 1] << r, A[s >> 0] = o, n = n + 1 << 16 >> 16, r = n << 16 >> 16;
                while ((r | 0) < (u | 0));
              }
            }
            function tr(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0;
              if (w = l[n + 100 >> 2] | 0, c = l[n + 96 >> 2] | 0, A[i >> 0] = r & 15, c = c + (r << 1) | 0, o = e[c >> 1] | 0, r >>> 0 >= 8) {
                if (a = ((o & 65535) << 16) + -458752 | 0, (a | 0) > 0) {
                  for (f = 1, u = t; t = u + 16 | 0, n = f + 1 << 16 >> 16, A[i + (f << 16 >> 16) >> 0] = R[u + 14 >> 1] | R[u + 12 >> 1] << 1 | ((R[u + 2 >> 1] << 6 | R[u >> 1] << 7 | R[u + 4 >> 1] << 5 | R[u + 6 >> 1] << 4) & 240 | R[u + 8 >> 1] << 3 | R[u + 10 >> 1] << 2) & 252, a = a + -524288 & -65536, !((a | 0) <= 0); ) f = n, u = t;
                  o = e[c >> 1] | 0;
                } else n = 1;
                if (f = o & 7, o = i + (n << 16 >> 16) | 0, A[o >> 0] = 0, f) s = 0, u = 0, a = 0, n = t;
                else return;
                for (; u = u & 255 | e[n >> 1] << 7 - s, A[o >> 0] = u, a = a + 1 << 16 >> 16, s = a << 16 >> 16, !((s | 0) >= (f | 0)); ) n = n + 2 | 0;
                return;
              }
              if (u = o << 16 >> 16, o << 16 >> 16 > 7) for (o = w + (r << 2) | 0, n = 0, f = 0, s = 1; v = R[t + (e[(l[o >> 2] | 0) + (n << 1) >> 1] << 1) >> 1] << 7, u = i + (s << 16 >> 16) | 0, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 1) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 6 | v, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 2) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 5 | v, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 3) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 4 | v, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 4) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 3 | v & 240, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 5) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 2 | v, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 6) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 1 | v, A[u >> 0] = v, a = f + 8 << 16 >> 16, s = s + 1 << 16 >> 16, A[u >> 0] = v & 254 | R[t + (e[(l[o >> 2] | 0) + ((f | 7) << 16 >> 16 << 1) >> 1] << 1) >> 1], n = a << 16 >> 16, u = e[c >> 1] | 0, !((n | 0) >= (u + -7 | 0)); ) f = a;
              else a = 0, s = 1;
              if (c = u & 7, f = i + (s << 16 >> 16) | 0, A[f >> 0] = 0, !!c) for (s = w + (r << 2) | 0, o = 0, n = 0, u = 0; n = (R[t + (e[(l[s >> 2] | 0) + (a << 16 >> 16 << 1) >> 1] << 1) >> 1] & 255) << 7 - o | n & 255, A[f >> 0] = n, u = u + 1 << 16 >> 16, o = u << 16 >> 16, !((o | 0) >= (c | 0)); ) a = a + 1 << 16 >> 16;
            }
            function nr(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0;
              if (w = l[n + 100 >> 2] | 0, c = l[n + 96 >> 2] | 0, A[i >> 0] = r << 3, c = c + (r << 1) | 0, o = e[c >> 1] | 0, r >>> 0 >= 8) {
                if (a = ((o & 65535) << 16) + -458752 | 0, (a | 0) > 0) {
                  for (f = 1, u = t; t = u + 16 | 0, n = f + 1 << 16 >> 16, A[i + (f << 16 >> 16) >> 0] = R[u + 14 >> 1] | R[u + 12 >> 1] << 1 | ((R[u + 2 >> 1] << 6 | R[u >> 1] << 7 | R[u + 4 >> 1] << 5 | R[u + 6 >> 1] << 4) & 240 | R[u + 8 >> 1] << 3 | R[u + 10 >> 1] << 2) & 252, a = a + -524288 & -65536, !((a | 0) <= 0); ) f = n, u = t;
                  o = e[c >> 1] | 0;
                } else n = 1;
                if (f = o & 7, o = i + (n << 16 >> 16) | 0, A[o >> 0] = 0, f) s = 0, u = 0, a = 0, n = t;
                else return;
                for (; u = u & 255 | e[n >> 1] << 7 - s, A[o >> 0] = u, a = a + 1 << 16 >> 16, s = a << 16 >> 16, !((s | 0) >= (f | 0)); ) n = n + 2 | 0;
                return;
              }
              if (u = o << 16 >> 16, o << 16 >> 16 > 7) for (o = w + (r << 2) | 0, n = 0, f = 0, s = 1; v = R[t + (e[(l[o >> 2] | 0) + (n << 1) >> 1] << 1) >> 1] << 7, u = i + (s << 16 >> 16) | 0, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 1) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 6 | v, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 2) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 5 | v, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 3) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 4 | v, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 4) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 3 | v & 240, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 5) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 2 | v, A[u >> 0] = v, v = R[t + (e[(l[o >> 2] | 0) + ((f | 6) << 16 >> 16 << 1) >> 1] << 1) >> 1] << 1 | v, A[u >> 0] = v, a = f + 8 << 16 >> 16, s = s + 1 << 16 >> 16, A[u >> 0] = v & 254 | R[t + (e[(l[o >> 2] | 0) + ((f | 7) << 16 >> 16 << 1) >> 1] << 1) >> 1], n = a << 16 >> 16, u = e[c >> 1] | 0, !((n | 0) >= (u + -7 | 0)); ) f = a;
              else a = 0, s = 1;
              if (c = u & 7, f = i + (s << 16 >> 16) | 0, A[f >> 0] = 0, !!c) for (s = w + (r << 2) | 0, o = 0, n = 0, u = 0; n = (R[t + (e[(l[s >> 2] | 0) + (a << 16 >> 16 << 1) >> 1] << 1) >> 1] & 255) << 7 - o | n & 255, A[f >> 0] = n, u = u + 1 << 16 >> 16, o = u << 16 >> 16, !((o | 0) >= (c | 0)); ) a = a + 1 << 16 >> 16;
            }
            function or(r) {
              r = r | 0;
              var t = 0;
              return !r || (l[r >> 2] = 0, t = A0(16) | 0, !t) ? (r = -1, r | 0) : (e[t >> 1] = 0, e[t + 2 >> 1] = 0, e[t + 4 >> 1] = 0, e[t + 6 >> 1] = 0, e[t + 8 >> 1] = 0, e[t + 10 >> 1] = 0, e[t + 12 >> 1] = 0, e[t + 14 >> 1] = 0, l[r >> 2] = t, r = 0, r | 0);
            }
            function f6(r) {
              return r = r | 0, r ? (e[r >> 1] = 0, e[r + 2 >> 1] = 0, e[r + 4 >> 1] = 0, e[r + 6 >> 1] = 0, e[r + 8 >> 1] = 0, e[r + 10 >> 1] = 0, e[r + 12 >> 1] = 0, e[r + 14 >> 1] = 0, r = 0, r | 0) : (r = -1, r | 0);
            }
            function c6(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function sr(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0;
              a = t << 16 >> 16 < 2722 ? 0 : t << 16 >> 16 < 5444 ? 1 : 2, u = d5(i, 1, o) | 0, c = r + 4 | 0, i << 16 >> 16 > 200 && u << 16 >> 16 > (e[c >> 1] | 0) ? (e[r >> 1] = 8, s = 1, f = 5) : (u = e[r >> 1] | 0, u << 16 >> 16 && (s = u + -1 << 16 >> 16, e[r >> 1] = s, s = s << 16 >> 16 != 0, f = 5)), (f | 0) == 5 && (a & 65535) < 2 & s && (a = (a & 65535) + 1 & 65535), f = r + 6 | 0, e[f >> 1] = t, s = Y2(f, 5) | 0, a << 16 >> 16 != 0 | s << 16 >> 16 > 5443 ? s = 0 : s << 16 >> 16 < 0 ? s = 16384 : (s = s << 16 >> 16, s = (((s << 18 >> 18 | 0) == (s | 0) ? s << 2 : s >>> 15 ^ 32767) << 16 >> 16) * 24660 >> 15, (s | 0) > 32767 && (l[o >> 2] = 1, s = 32767), s = 16384 - s & 65535), u = r + 2 | 0, e[u >> 1] | 0 || (s = o0(s, 1, o) | 0), e[n >> 1] = s, e[u >> 1] = s, e[c >> 1] = i, n = r + 12 | 0, e[r + 14 >> 1] = e[n >> 1] | 0, i = r + 10 | 0, e[n >> 1] = e[i >> 1] | 0, r = r + 8 | 0, e[i >> 1] = e[r >> 1] | 0, e[r >> 1] = e[f >> 1] | 0;
            }
            function lr(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0, o = 0, s = 0, u = 0;
              if (!r || (l[r >> 2] = 0, t = A0(68) | 0, n = t, !t)) return r = -1, r | 0;
              if (l[t + 28 >> 2] = 0, o = t + 64 | 0, l[o >> 2] = 0, s = t + 32 | 0, (L2(s) | 0) << 16 >> 16 == 0 && (u = t + 48 | 0, (L2(u) | 0) << 16 >> 16 == 0) && (or(o) | 0) << 16 >> 16 == 0) {
                i = t + 32 | 0;
                do
                  e[t >> 1] = 0, t = t + 2 | 0;
                while ((t | 0) < (i | 0));
                return L2(s) | 0, L2(u) | 0, f6(l[o >> 2] | 0) | 0, l[r >> 2] = n, r = 0, r | 0;
              }
              return c6(o), f0(t), r = -1, r | 0;
            }
            function ur(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (c6(t + 64 | 0), f0(l[r >> 2] | 0), l[r >> 2] = 0));
            }
            function ar(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0;
              if (!r) return n = -1, n | 0;
              t = r + 32 | 0, i = r, n = i + 32 | 0;
              do
                e[i >> 1] = 0, i = i + 2 | 0;
              while ((i | 0) < (n | 0));
              return L2(t) | 0, L2(r + 48 | 0) | 0, f6(l[r + 64 >> 2] | 0) | 0, n = 0, n | 0;
            }
            function fr(r, t, i, n, o, s, u, a, f, c, w, v, p, m, d, b, E, S, D) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0, p = p | 0, m = m | 0, d = d | 0, b = b | 0, E = E | 0, S = S | 0, D = D | 0;
              var O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0;
              if (K = C, C = C + 48 | 0, I = K + 34 | 0, F = K + 32 | 0, U = K + 30 | 0, B = K + 28 | 0, M = K + 18 | 0, O = K + 8 | 0, T = K + 6 | 0, L = K + 4 | 0, V = K + 2 | 0, g = K, t) {
                w = r + 32 | 0, r5(w, t, o, I, F, T, L, D);
                do
                  if ((t | 0) != 7) if (te(t, s, u, a, f, c, M, O, g, V, D), (t | 0) == 5) {
                    Ir(l[r + 64 >> 2] | 0, i, n, o, M, O, e[T >> 1] | 0, e[L >> 1] | 0, e[I >> 1] | 0, e[F >> 1] | 0, 40, e[g >> 1] | 0, e[V >> 1] | 0, v, d, b, U, B, E, S, D);
                    break;
                  } else {
                    r = Lr(t, e[I >> 1] | 0, e[F >> 1] | 0, M, O, v, d, b, U, B, S, D) | 0, s = l[E >> 2] | 0, l[E >> 2] = s + 2, e[s >> 1] = r;
                    break;
                  }
                  else e[b >> 1] = cr(u, f, D) | 0, r = Or(7, e[I >> 1] | 0, e[F >> 1] | 0, b, U, B, l[S + 68 >> 2] | 0, D) | 0, s = l[E >> 2] | 0, l[E >> 2] = s + 2, e[s >> 1] = r;
                while (false);
                b2(w, e[U >> 1] | 0, e[B >> 1] | 0), C = K;
                return;
              }
              if (!(w << 16 >> 16)) {
                r5(r + 48 | 0, 0, o, I, F, T, L, D), te(0, s, u, a, f, c, M, O, g, V, D), s6(s, T, L, D), s = Pr(r + 32 | 0, e[r >> 1] | 0, e[r + 2 >> 1] | 0, r + 8 | 0, r + 18 | 0, e[r + 4 >> 1] | 0, e[r + 6 >> 1] | 0, o, e[I >> 1] | 0, e[F >> 1] | 0, O, M, e[T >> 1] | 0, e[L >> 1] | 0, v, p, m, d, b, D) | 0, e[l[r + 28 >> 2] >> 1] = s, C = K;
                return;
              }
              w = l[E >> 2] | 0, l[E >> 2] = w + 2, l[r + 28 >> 2] = w, w = r + 48 | 0, i = r + 32 | 0, p = i, p = R[p >> 1] | R[p + 2 >> 1] << 16, i = i + 4 | 0, i = R[i >> 1] | R[i + 2 >> 1] << 16, E = w, m = E, e[m >> 1] = p, e[m + 2 >> 1] = p >>> 16, E = E + 4 | 0, e[E >> 1] = i, e[E + 2 >> 1] = i >>> 16, E = r + 40 | 0, i = E, i = R[i >> 1] | R[i + 2 >> 1] << 16, E = E + 4 | 0, E = R[E >> 1] | R[E + 2 >> 1] << 16, m = r + 56 | 0, p = m, e[p >> 1] = i, e[p + 2 >> 1] = i >>> 16, m = m + 4 | 0, e[m >> 1] = E, e[m + 2 >> 1] = E >>> 16, m = r + 2 | 0, r5(w, 0, o, r, m, T, L, D), te(0, s, u, a, f, c, r + 18 | 0, r + 8 | 0, g, V, D), a = (R[V >> 1] | 0) + 1 | 0, E = e[g >> 1] | 0, p = a << 16 >> 16, (a & 65535) << 16 >> 16 < 0 ? (S = 0 - p << 16, (S | 0) < 983040 ? S = E << 16 >> 16 >> (S >> 16) & 65535 : S = 0) : (E = E << 16 >> 16, S = E << p, (S << 16 >> 16 >> p | 0) == (E | 0) ? S = S & 65535 : S = (E >>> 15 ^ 32767) & 65535), e[b >> 1] = S, s6(s, r + 4 | 0, r + 6 | 0, D), Cr(w, e[r >> 1] | 0, e[m >> 1] | 0, e[V >> 1] | 0, e[g >> 1] | 0, D), C = K;
            }
            function cr(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0;
              for (o = 10, i = r, n = t, r = 0; r = (k(e[n >> 1] >> 1, e[i >> 1] | 0) | 0) + r | 0, r = r + (k(e[n + 2 >> 1] >> 1, e[i + 2 >> 1] | 0) | 0) | 0, r = r + (k(e[n + 4 >> 1] >> 1, e[i + 4 >> 1] | 0) | 0) | 0, r = r + (k(e[n + 6 >> 1] >> 1, e[i + 6 >> 1] | 0) | 0) | 0, o = o + -1 << 16 >> 16, o << 16 >> 16; ) i = i + 8 | 0, n = n + 8 | 0;
              if (i = r << 1, o = $1(i | 1) | 0, s = o << 16 >> 16, i = (o << 16 >> 16 < 17 ? i >> 17 - s : i << s + -17) & 65535, i << 16 >> 16 < 1) return t = 0, t | 0;
              for (o = 20, n = t, r = 0; t = e[n >> 1] >> 1, t = ((k(t, t) | 0) >>> 2) + r | 0, r = e[n + 2 >> 1] >> 1, r = t + ((k(r, r) | 0) >>> 2) | 0, o = o + -1 << 16 >> 16, o << 16 >> 16; ) n = n + 4 | 0;
              return r = r << 3, o = $1(r) | 0, t = o << 16 >> 16, i = k0(i, (o << 16 >> 16 < 16 ? r >> 16 - t : r << t + -16) & 65535) | 0, t = (s << 16) + 327680 - (t << 16) | 0, r = t >> 16, (t | 0) > 65536 ? r = i << 16 >> 16 >> r + -1 : r = i << 16 >> 16 << 1 - r, t = r & 65535, t | 0;
            }
            function wr(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0;
              if (l[s >> 2] = 0, w = o << 16 >> 16, f = w >>> 2 & 65535, p = f << 16 >> 16 == 0, p) a = 0;
              else for (c = f, u = i, a = 0; m = e[u >> 1] | 0, m = (k(m, m) | 0) + a | 0, a = e[u + 2 >> 1] | 0, a = m + (k(a, a) | 0) | 0, m = e[u + 4 >> 1] | 0, m = a + (k(m, m) | 0) | 0, a = e[u + 6 >> 1] | 0, a = m + (k(a, a) | 0) | 0, c = c + -1 << 16 >> 16, c << 16 >> 16; ) u = u + 8 | 0;
              if ((a >>> 31 ^ 1) & (a | 0) < 1073741824) w = a << 1 | 1, m = $1(w) | 0, v = m, m = N1(w << (m << 16 >> 16), s) | 0;
              else {
                if (a = w >>> 1 & 65535, !(a << 16 >> 16)) a = 1;
                else {
                  for (u = a, c = i, a = 0; m = e[c >> 1] >> 2, m = (k(m, m) | 0) + a | 0, a = e[c + 2 >> 1] >> 2, a = m + (k(a, a) | 0) | 0, u = u + -1 << 16 >> 16, u << 16 >> 16; ) c = c + 4 | 0;
                  a = a << 1 | 1;
                }
                m = ($1(a) | 0) << 16 >> 16, v = m + 65532 & 65535, m = N1(a << m, s) | 0;
              }
              l[s >> 2] = 0;
              do
                if (!(o << 16 >> 16)) a = 1, d = 14;
                else {
                  for (w = o, c = t, a = i, o = 0; b = k(e[a >> 1] | 0, e[c >> 1] | 0) | 0, u = b + o | 0, !((b ^ o | 0) > 0 & (u ^ o | 0) < 0); ) if (w = w + -1 << 16 >> 16, w << 16 >> 16) c = c + 2 | 0, a = a + 2 | 0, o = u;
                  else {
                    d = 13;
                    break;
                  }
                  if ((d | 0) == 13) {
                    a = u << 1 | 1, d = 14;
                    break;
                  }
                  if (l[s >> 2] = 1, p) a = 1;
                  else {
                    for (a = t, u = 0; u = (k(e[i >> 1] >> 2, e[a >> 1] | 0) | 0) + u | 0, u = u + (k(e[i + 2 >> 1] >> 2, e[a + 2 >> 1] | 0) | 0) | 0, u = u + (k(e[i + 4 >> 1] >> 2, e[a + 4 >> 1] | 0) | 0) | 0, u = u + (k(e[i + 6 >> 1] >> 2, e[a + 6 >> 1] | 0) | 0) | 0, f = f + -1 << 16 >> 16, f << 16 >> 16; ) a = a + 8 | 0, i = i + 8 | 0;
                    a = u << 1 | 1;
                  }
                  i = ($1(a) | 0) << 16 >> 16, u = i + 65532 & 65535, i = N1(a << i, s) | 0;
                }
              while (false);
              return (d | 0) == 14 && (i = $1(a) | 0, u = i, i = N1(a << (i << 16 >> 16), s) | 0), e[n >> 1] = m, a = v << 16 >> 16, e[n + 2 >> 1] = 15 - a, e[n + 4 >> 1] = i, u = u << 16 >> 16, e[n + 6 >> 1] = 15 - u, i << 16 >> 16 < 4 ? (b = 0, b | 0) : (u = o0(k0(i << 16 >> 16 >>> 1 & 65535, m) | 0, u - a & 65535, s) | 0, u = u << 16 >> 16 > 19661 ? 19661 : u, (r | 0) != 7 ? (b = u, b | 0) : (b = u & 65532, b | 0));
            }
            function w6(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0;
              if (f = (n & 65535) + 65535 & 65535, f << 16 >> 16 > o << 16 >> 16) for (v = n + -1 << 16 >> 16 << 16 >> 16, n = -2147483648; ; ) if (c = l[r + (0 - v << 2) >> 2] | 0, a = c << 1, c = (a >> 1 | 0) == (c | 0) ? a : c >> 31 ^ 2147483647, a = l[r + (~v << 2) >> 2] | 0, w = c - a | 0, ((w ^ c) & (c ^ a) | 0) < 0 && (l[u >> 2] = 1, w = (c >>> 31) + 2147483647 | 0), c = l[r + (1 - v << 2) >> 2] | 0, a = w - c | 0, ((a ^ w) & (c ^ w) | 0) < 0 && (l[u >> 2] = 1, a = (w >>> 31) + 2147483647 | 0), w = G2(a) | 0, n = (w | 0) < (n | 0) ? n : w, f = f + -1 << 16 >> 16, f << 16 >> 16 <= o << 16 >> 16) {
                o = n;
                break;
              } else v = v + -1 | 0;
              else o = -2147483648;
              if (r = i << 16 >> 16 > 0, r) {
                for (n = 0, a = t, f = 0; w = e[a >> 1] | 0, w = k(w, w) | 0, (w | 0) != 1073741824 ? (c = (w << 1) + f | 0, (w ^ f | 0) > 0 & (c ^ f | 0) < 0 ? (l[u >> 2] = 1, f = (f >>> 31) + 2147483647 | 0) : f = c) : (l[u >> 2] = 1, f = 2147483647), n = n + 1 << 16 >> 16, !(n << 16 >> 16 >= i << 16 >> 16); ) a = a + 2 | 0;
                if (r) for (r = 0, v = t, n = t + -2 | 0, a = 0; w = k(e[n >> 1] | 0, e[v >> 1] | 0) | 0, (w | 0) != 1073741824 ? (c = (w << 1) + a | 0, (w ^ a | 0) > 0 & (c ^ a | 0) < 0 ? (l[u >> 2] = 1, a = (a >>> 31) + 2147483647 | 0) : a = c) : (l[u >> 2] = 1, a = 2147483647), r = r + 1 << 16 >> 16, !(r << 16 >> 16 >= i << 16 >> 16); ) v = v + 2 | 0, n = n + 2 | 0;
                else a = 0;
              } else f = 0, a = 0;
              if (n = f << 1, n = (n >> 1 | 0) == (f | 0) ? n : f >> 31 ^ 2147483647, i = a << 1, i = (i >> 1 | 0) == (a | 0) ? i : a >> 31 ^ 2147483647, f = n - i | 0, ((f ^ n) & (i ^ n) | 0) < 0 && (l[u >> 2] = 1, f = (n >>> 31) + 2147483647 | 0), r = G2(f) | 0, v = (($1(o) | 0) & 65535) + 65535 | 0, f = v << 16 >> 16, (v & 65535) << 16 >> 16 > 0 ? (n = o << f, (n >> f | 0) != (o | 0) && (n = o >> 31 ^ 2147483647)) : (f = 0 - f << 16, (f | 0) < 2031616 ? n = o >> (f >> 16) : n = 0), w = $1(r) | 0, a = w << 16 >> 16, w << 16 >> 16 > 0 ? (f = r << a, (f >> a | 0) == (r | 0) || (f = r >> 31 ^ 2147483647), p = 33) : (f = 0 - a << 16, (f | 0) < 2031616 ? (f = r >> (f >> 16), p = 33) : c = 0), (p | 0) == 33 && (f >>> 0 > 65535 ? c = k0(n >>> 16 & 65535, f >>> 16 & 65535) | 0 : c = 0), f = w & 65535, p = (v & 65535) - f | 0, n = p & 65535, !(p & 32768)) return u = o0(c, n, u) | 0, e[s >> 1] = u, 0;
              if (n << 16 >> 16 != -32768) {
                if (u = f - v | 0, a = u << 16 >> 16, (u & 65535) << 16 >> 16 < 0) return a = 0 - a << 16, (a | 0) >= 983040 ? (u = 0, e[s >> 1] = u, 0) : (u = c << 16 >> 16 >> (a >> 16) & 65535, e[s >> 1] = u, 0);
              } else a = 32767;
              return n = c << 16 >> 16, f = n << a, (f << 16 >> 16 >> a | 0) == (n | 0) ? (u = f & 65535, e[s >> 1] = u, 0) : (u = (n >>> 15 ^ 32767) & 65535, e[s >> 1] = u, 0);
            }
            function O2(r, t, i, n) {
              return r = r | 0, t = t | 0, i = i | 0, n = n | 0, i << 16 >> 16 && (t = t << 16 >> 16 << 1 & 65535), t << 16 >> 16 < 0 && (r = r + -2 | 0, t = (t & 65535) + 6 & 65535), i = t << 16 >> 16, n = 6 - i << 16 >> 16, t = (k(e[3468 + (i << 1) >> 1] | 0, e[r >> 1] | 0) | 0) + 16384 | 0, t = t + (k(e[3468 + (n << 1) >> 1] | 0, e[r + 2 >> 1] | 0) | 0) | 0, t = t + (k(e[3468 + (i + 6 << 1) >> 1] | 0, e[r + -2 >> 1] | 0) | 0) | 0, t = t + (k(e[3468 + (n + 6 << 1) >> 1] | 0, e[r + 4 >> 1] | 0) | 0) | 0, t = (k(e[3468 + (i + 12 << 1) >> 1] | 0, e[r + -4 >> 1] | 0) | 0) + t | 0, t = t + (k(e[3468 + (n + 12 << 1) >> 1] | 0, e[r + 6 >> 1] | 0) | 0) | 0, i = t + (k(e[3468 + (i + 18 << 1) >> 1] | 0, e[r + -6 >> 1] | 0) | 0) | 0, (i + (k(e[3468 + (n + 18 << 1) >> 1] | 0, e[r + 8 >> 1] | 0) | 0) | 0) >>> 15 & 65535 | 0;
            }
            function G2(r) {
              return r = r | 0, r = r - (r >>> 31) | 0, r >> 31 ^ r | 0;
            }
            function oe(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0;
              if (r << 16 >> 16) o = 3518, s = 3538, n = i;
              else return;
              for (; n = n + 2 | 0, t = t + 2 | 0, f = e[t >> 1] | 0, a = e[o >> 1] | 0, i = k(a, f) | 0, i = (i | 0) == 1073741824 ? 2147483647 : i << 1, f = (k(e[s >> 1] | 0, f) | 0) >> 15, u = (f << 1) + i | 0, u = (i ^ f | 0) > 0 & (u ^ i | 0) < 0 ? (i >>> 31) + 2147483647 | 0 : u, a = (k(a, e[n >> 1] | 0) | 0) >> 15, i = u + (a << 1) | 0, i = (u ^ a | 0) > 0 & (i ^ u | 0) < 0 ? (u >>> 31) + 2147483647 | 0 : i, e[t >> 1] = i >>> 16, e[n >> 1] = (i >>> 1) - (i >> 16 << 15), r = r + -1 << 16 >> 16, r << 16 >> 16; ) o = o + 2 | 0, s = s + 2 | 0;
            }
            function mr(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0;
              return n = r & 65535, o = n << 16, t = t << 16 >> 16, r = (t << 1) + o | 0, (t ^ o | 0) > 0 & (r ^ o | 0) < 0 ? (l[i >> 2] = 1, o = (n >>> 15) + 2147483647 | 0, o | 0) : (o = r, o | 0);
            }
            function pr(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0;
              if (!r || (l[r >> 2] = 0, t = A0(22) | 0, !t)) return n = -1, n | 0;
              e[t >> 1] = 4096, i = t + 2 | 0, n = i + 20 | 0;
              do
                e[i >> 1] = 0, i = i + 2 | 0;
              while ((i | 0) < (n | 0));
              return l[r >> 2] = t, n = 0, n | 0;
            }
            function m6(r) {
              r = r | 0;
              var t = 0;
              if (!r) return t = -1, t | 0;
              e[r >> 1] = 4096, r = r + 2 | 0, t = r + 20 | 0;
              do
                e[r >> 1] = 0, r = r + 2 | 0;
              while ((r | 0) < (t | 0));
              return t = 0, t | 0;
            }
            function p6(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function se(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0;
              for (H = C, C = C + 96 | 0, W = H + 66 | 0, x = H + 44 | 0, Q = H + 22 | 0, a = H, L = t + 2 | 0, K = i + 2 | 0, g = (e[K >> 1] << 1) + (R[L >> 1] << 16) | 0, u = G2(g) | 0, u = a6(u, e[t >> 1] | 0, e[i >> 1] | 0, s) | 0, (g | 0) > 0 && (u = v6(u) | 0), U = u >> 16, e[o >> 1] = N1(u, s) | 0, D = u >> 20, V = W + 2 | 0, e[V >> 1] = D, g = x + 2 | 0, e[g >> 1] = (u >>> 5) - (D << 15), D = k(U, U) | 0, D = (D | 0) == 1073741824 ? 2147483647 : D << 1, U = (k((u >>> 1) - (U << 15) << 16 >> 16, U) | 0) >> 15, T = U << 1, B = T + D | 0, B = (U ^ D | 0) > 0 & (B ^ D | 0) < 0 ? (D >>> 31) + 2147483647 | 0 : B, T = B + T | 0, T = 2147483647 - (G2((B ^ U | 0) > 0 & (T ^ B | 0) < 0 ? (B >>> 31) + 2147483647 | 0 : T) | 0) | 0, B = T >> 16, U = e[t >> 1] | 0, D = k(B, U) | 0, D = (D | 0) == 1073741824 ? 2147483647 : D << 1, U = (k((T >>> 1) - (B << 15) << 16 >> 16, U) | 0) >> 15, T = (U << 1) + D | 0, T = (U ^ D | 0) > 0 & (T ^ D | 0) < 0 ? (D >>> 31) + 2147483647 | 0 : T, B = (k(e[i >> 1] | 0, B) | 0) >> 15, D = T + (B << 1) | 0, D = (T ^ B | 0) > 0 & (D ^ T | 0) < 0 ? (T >>> 31) + 2147483647 | 0 : D, T = $1(D) | 0, D = D << (T << 16 >> 16), B = Q + 2 | 0, U = a + 2 | 0, f = D, D = (D >>> 1) - (D >> 16 << 15) | 0, O = a + 4 | 0, I = Q + 4 | 0, M = 2, F = 2; ; ) {
                for (S = f >>> 16, u = S & 65535, d = D & 65535, b = F + -1 | 0, w = W + (b << 1) | 0, E = x + (b << 1) | 0, m = 1, p = w, v = E, c = L, a = K, f = 0; e1 = e[c >> 1] | 0, Y = ((k(e[v >> 1] | 0, e1) | 0) >> 15) + f | 0, f = e[p >> 1] | 0, f = Y + (k(f, e1) | 0) + ((k(f, e[a >> 1] | 0) | 0) >> 15) | 0, m = m + 1 << 16 >> 16, !((m << 16 >> 16 | 0) >= (F | 0)); ) p = p + -2 | 0, v = v + -2 | 0, c = c + 2 | 0, a = a + 2 | 0;
                if (Y = (R[t + (F << 1) >> 1] << 16) + (f << 5) + (e[i + (F << 1) >> 1] << 1) | 0, f = a6(G2(Y) | 0, u, d, s) | 0, (Y | 0) > 0 && (f = v6(f) | 0), a = T << 16 >> 16, T << 16 >> 16 > 0 ? (u = f << a, (u >> a | 0) != (f | 0) && (u = f >> 31 ^ 2147483647)) : (a = 0 - a << 16, (a | 0) < 2031616 ? u = f >> (a >> 16) : u = 0), m = u >> 16, (F | 0) < 5 && (e[o + (b << 1) >> 1] = (u + 32768 | 0) >>> 16), Y = (u >>> 16) - (u >>> 31) | 0, ((Y << 16 >> 31 ^ Y) & 65535) << 16 >> 16 > 32750) {
                  u = 16;
                  break;
                }
                for (v = (u >>> 1) - (m << 15) << 16 >> 16, p = 1, f = E, a = B, c = U; e1 = (k(e[f >> 1] | 0, m) | 0) >> 15, E = e[w >> 1] | 0, Y = (k(E, v) | 0) >> 15, E = k(E, m) | 0, Y = E + e1 + (e[x + (p << 1) >> 1] | 0) + (e[W + (p << 1) >> 1] << 15) + Y | 0, e[a >> 1] = Y >>> 15, e[c >> 1] = Y & 32767, p = p + 1 | 0, (p & 65535) << 16 >> 16 != M << 16 >> 16; ) w = w + -2 | 0, f = f + -2 | 0, a = a + 2 | 0, c = c + 2 | 0;
                if (e[I >> 1] = u >> 20, e[O >> 1] = (u >>> 5) - (e[Q + (F << 1) >> 1] << 15), e1 = k(m, m) | 0, e1 = (e1 | 0) == 1073741824 ? 2147483647 : e1 << 1, u = (k(v, m) | 0) >> 15, Y = u << 1, a = Y + e1 | 0, a = (u ^ e1 | 0) > 0 & (a ^ e1 | 0) < 0 ? (e1 >>> 31) + 2147483647 | 0 : a, Y = a + Y | 0, Y = 2147483647 - (G2((a ^ u | 0) > 0 & (Y ^ a | 0) < 0 ? (a >>> 31) + 2147483647 | 0 : Y) | 0) | 0, a = Y >> 16, u = S << 16 >> 16, u = ((k(a, D << 16 >> 16) | 0) >> 15) + (k(a, u) | 0) + ((k((Y >>> 1) - (a << 15) << 16 >> 16, u) | 0) >> 15) << 1, a = ($1(u) | 0) << 16 >> 16, u = u << a, Y = F << 1, K0(V | 0, B | 0, Y | 0) | 0, K0(g | 0, U | 0, Y | 0) | 0, F = F + 1 | 0, (F | 0) >= 11) {
                  u = 20;
                  break;
                } else T = a + (T & 65535) & 65535, f = u, D = (u >> 1) - (u >> 16 << 15) | 0, O = O + 2 | 0, I = I + 2 | 0, M = M + 1 << 16 >> 16;
              }
              if ((u | 0) == 16) {
                u = n + 22 | 0;
                do
                  e[n >> 1] = e[r >> 1] | 0, n = n + 2 | 0, r = r + 2 | 0;
                while ((n | 0) < (u | 0));
                return Y = o, e1 = Y, e[e1 >> 1] = 0, e[e1 + 2 >> 1] = 0, Y = Y + 4 | 0, e[Y >> 1] = 0, e[Y + 2 >> 1] = 0, C = H, 0;
              } else if ((u | 0) == 20) return e[n >> 1] = 4096, Y = ((e[g >> 1] | 0) + 8192 + (e[V >> 1] << 15) | 0) >>> 14 & 65535, e[n + 2 >> 1] = Y, e[r + 2 >> 1] = Y, Y = ((e[x + 4 >> 1] | 0) + 8192 + (e[W + 4 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 4 >> 1] = Y, e[r + 4 >> 1] = Y, Y = ((e[x + 6 >> 1] | 0) + 8192 + (e[W + 6 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 6 >> 1] = Y, e[r + 6 >> 1] = Y, Y = ((e[x + 8 >> 1] | 0) + 8192 + (e[W + 8 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 8 >> 1] = Y, e[r + 8 >> 1] = Y, Y = ((e[x + 10 >> 1] | 0) + 8192 + (e[W + 10 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 10 >> 1] = Y, e[r + 10 >> 1] = Y, Y = ((e[x + 12 >> 1] | 0) + 8192 + (e[W + 12 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 12 >> 1] = Y, e[r + 12 >> 1] = Y, Y = ((e[x + 14 >> 1] | 0) + 8192 + (e[W + 14 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 14 >> 1] = Y, e[r + 14 >> 1] = Y, Y = ((e[x + 16 >> 1] | 0) + 8192 + (e[W + 16 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 16 >> 1] = Y, e[r + 16 >> 1] = Y, Y = ((e[x + 18 >> 1] | 0) + 8192 + (e[W + 18 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 18 >> 1] = Y, e[r + 18 >> 1] = Y, Y = ((e[x + 20 >> 1] | 0) + 8192 + (e[W + 20 >> 1] << 15) | 0) >>> 14 & 65535, e[n + 20 >> 1] = Y, e[r + 20 >> 1] = Y, C = H, 0;
              return 0;
            }
            function e2(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, n = r >> 16, e[t >> 1] = n, e[i >> 1] = (r >>> 1) - (n << 15);
            }
            function v6(r) {
              return r = r | 0, ((r | 0) == -2147483648 ? 2147483647 : 0 - r | 0) | 0;
            }
            function vr(r) {
              r = r | 0;
              var t = 0;
              return !r || (l[r >> 2] = 0, t = A0(4) | 0, !t) ? (r = -1, r | 0) : (l[t >> 2] = 0, (pr(t) | 0) << 16 >> 16 ? (p6(t), f0(t), r = -1, r | 0) : (m6(l[t >> 2] | 0) | 0, l[r >> 2] = t, r = 0, r | 0));
            }
            function hr(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (p6(t), f0(l[r >> 2] | 0), l[r >> 2] = 0));
            }
            function dr(r) {
              return r = r | 0, r ? (m6(l[r >> 2] | 0) | 0, r = 0, r | 0) : (r = -1, r | 0);
            }
            function br(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0;
              if (w = C, C = C + 64 | 0, c = w + 48 | 0, f = w + 22 | 0, a = w, (t | 0) == 7) {
                i = l[s + 116 >> 2] | 0, ie(n, 10, a, f, l[s + 112 >> 2] | 0, u) | 0, oe(10, a, f, u), se(l[r >> 2] | 0, a, f, o + 22 | 0, c, u) | 0, ie(n, 10, a, f, i, u) | 0, oe(10, a, f, u), se(l[r >> 2] | 0, a, f, o + 66 | 0, c, u) | 0, C = w;
                return;
              } else {
                ie(i, 10, a, f, l[s + 108 >> 2] | 0, u) | 0, oe(10, a, f, u), se(l[r >> 2] | 0, a, f, o + 66 | 0, c, u) | 0, C = w;
                return;
              }
            }
            function le(r, t, i, n, o, s, u, a, f, c) {
              if (r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, (i | 0) == 6) {
                e[o >> 1] = Rr(r, t, n, 20, 143, 80, s, u, a, f, c) | 0;
                return;
              }
              if (e[u >> 1] = 0, e[u + 2 >> 1] = 0, i >>> 0 < 2) {
                e[o >> 1] = ue(t, i, n, 20, 143, 160, a, f, c) | 0;
                return;
              }
              if (i >>> 0 < 6) {
                e[o >> 1] = ue(t, i, n, 20, 143, 80, a, f, c) | 0;
                return;
              } else {
                e[o >> 1] = ue(t, i, n, 18, 143, 80, a, f, c) | 0;
                return;
              }
            }
            function _r(r) {
              r = r | 0;
              var t = 0;
              return (r | 0) != 0 && (l[r >> 2] = 0, t = A0(2) | 0, (t | 0) != 0) ? (e[t >> 1] = 0, l[r >> 2] = t, t = 0) : t = -1, t | 0;
            }
            function h6(r) {
              return r = r | 0, r ? (e[r >> 1] = 0, r = 0) : r = -1, r | 0;
            }
            function d6(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function Er(r, t, i, n, o, s, u, a, f, c, w, v) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0;
              var p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0;
              k1 = C, C = C + 240 | 0, S = k1 + 160 | 0, D = k1 + 80 | 0, f1 = k1, s1 = e[3558 + (t * 18 | 0) >> 1] | 0, h1 = e[3558 + (t * 18 | 0) + 2 >> 1] | 0, p = e[3558 + (t * 18 | 0) + 4 >> 1] | 0, d1 = e[3558 + (t * 18 | 0) + 6 >> 1] | 0, b = e[3558 + (t * 18 | 0) + 12 >> 1] | 0, d = e[3558 + (t * 18 | 0) + 14 >> 1] | 0, m = e[3558 + (t * 18 | 0) + 16 >> 1] | 0;
              e: do
                switch (a << 16 >> 16) {
                  case 0:
                  case 80:
                    if (t >>> 0 < 2 & a << 16 >> 16 == 80) {
                      _1 = (R[r >> 1] | 0) - (b & 65535) | 0, _1 = (_1 << 16 >> 16 | 0) < (m << 16 >> 16 | 0) ? m : _1 & 65535, Y = d << 16 >> 16, b1 = (_1 & 65535) + Y & 65535, i1 = b1 << 16 >> 16 > 143, _1 = i1 ? 143 - Y & 65535 : _1, b1 = i1 ? 143 : b1, i1 = 1;
                      break e;
                    } else {
                      _1 = (R[i + ((a << 16 >> 16 != 0 & 1) << 1) >> 1] | 0) - (R[3558 + (t * 18 | 0) + 8 >> 1] | 0) | 0, _1 = (_1 << 16 >> 16 | 0) < (m << 16 >> 16 | 0) ? m : _1 & 65535, Y = e[3558 + (t * 18 | 0) + 10 >> 1] | 0, b1 = (_1 & 65535) + Y & 65535, i1 = b1 << 16 >> 16 > 143, _1 = i1 ? 143 - Y & 65535 : _1, b1 = i1 ? 143 : b1, i1 = 0;
                      break e;
                    }
                  default:
                    _1 = (R[r >> 1] | 0) - (b & 65535) | 0, _1 = (_1 << 16 >> 16 | 0) < (m << 16 >> 16 | 0) ? m : _1 & 65535, Y = d << 16 >> 16, b1 = (_1 & 65535) + Y & 65535, i1 = b1 << 16 >> 16 > 143, _1 = i1 ? 143 - Y & 65535 : _1, b1 = i1 ? 143 : b1, i1 = 1;
                }
              while (false);
              if (e1 = _1 & 65535, a = e1 + 65532 | 0, E = a & 65535, H = (b1 & 65535) + 4 & 65535, Y = a << 16 >> 16, a = 0 - (a & 65535) | 0, b = a & 65535, L5(n + (a << 16 >> 16 << 1) | 0, s, S, u), a = u << 16 >> 16, U = a >>> 1 & 65535, O = U << 16 >> 16 == 0, O) u = 1;
              else {
                for (u = U, m = S, i = D, d = 0; x = e[m >> 1] | 0, e[i >> 1] = x >>> 2, x = (k(x, x) | 0) + d | 0, d = e[m + 2 >> 1] | 0, e[i + 2 >> 1] = d >>> 2, d = x + (k(d, d) | 0) | 0, u = u + -1 << 16 >> 16, u << 16 >> 16; ) m = m + 4 | 0, i = i + 4 | 0;
                u = (d | 0) < 33554433;
              }
              x = u ? 0 : 2, B = u ? S : D, I = u ? S : D;
              e: do
                if (E << 16 >> 16 <= H << 16 >> 16) {
                  if (M = a + -1 | 0, K = B + (M << 1) | 0, Q = s + (M << 1) | 0, W = B + (a + -2 << 1) | 0, L = M >>> 1, V = L & 65535, F = V << 16 >> 16 == 0, g = u ? 12 : 14, L = (L << 1) + 131070 & 131070, i = a + -3 - L | 0, T = B + (i << 1) | 0, L = B + (a + -4 - L << 1) | 0, s = s + (i << 1) | 0, !O) for (O = Y; ; ) {
                    for (D = U, S = I, m = o, d = 0, u = 0; D = D + -1 << 16 >> 16, a = e[S >> 1] | 0, d = (k(a, e[m >> 1] | 0) | 0) + d | 0, a = (k(a, a) | 0) + u | 0, u = e[S + 2 >> 1] | 0, d = d + (k(u, e[m + 2 >> 1] | 0) | 0) | 0, u = a + (k(u, u) | 0) | 0, D << 16 >> 16; ) S = S + 4 | 0, m = m + 4 | 0;
                    if (S = D2(u << 1, v) | 0, u = S >> 16, m = d << 1 >> 16, D = k(u, m) | 0, D = (D | 0) == 1073741824 ? 2147483647 : D << 1, m = (k((S >>> 1) - (u << 15) << 16 >> 16, m) | 0) >> 15, S = (m << 1) + D | 0, S = (m ^ D | 0) > 0 & (S ^ D | 0) < 0 ? (D >>> 31) + 2147483647 | 0 : S, u = (k(u, d & 32767) | 0) >> 15, D = S + (u << 1) | 0, e[f1 + (O - Y << 1) >> 1] = (S ^ u | 0) > 0 & (D ^ S | 0) < 0 ? (S >>> 31) + 65535 | 0 : D, E << 16 >> 16 != H << 16 >> 16) {
                      if (b = b + -1 << 16 >> 16, D = e[n + (b << 16 >> 16 << 1) >> 1] | 0, F) S = M, u = W, d = Q, m = K;
                      else for (S = V, u = W, d = Q, m = K; ; ) if (O = (k(e[d >> 1] | 0, D) | 0) >> g, e[m >> 1] = O + (R[u >> 1] | 0), O = (k(e[d + -2 >> 1] | 0, D) | 0) >> g, e[m + -2 >> 1] = O + (R[u + -2 >> 1] | 0), S = S + -1 << 16 >> 16, S << 16 >> 16) u = u + -4 | 0, d = d + -4 | 0, m = m + -4 | 0;
                      else {
                        S = i, u = L, d = s, m = T;
                        break;
                      }
                      O = (k(e[d >> 1] | 0, D) | 0) >> g, e[m >> 1] = O + (R[u >> 1] | 0), e[B + (S + -1 << 1) >> 1] = D >> x;
                    }
                    if (E = E + 1 << 16 >> 16, E << 16 >> 16 > H << 16 >> 16) break e;
                    O = E << 16 >> 16;
                  }
                  if (F) for (u = B + (a + -2 << 1) | 0, d = Y; ; ) {
                    if (D2(0, v) | 0, e[f1 + (d - Y << 1) >> 1] = 0, E << 16 >> 16 != H << 16 >> 16 && (b = b + -1 << 16 >> 16, o = e[n + (b << 16 >> 16 << 1) >> 1] | 0, V = (k(e[Q >> 1] | 0, o) | 0) >> g, e[K >> 1] = V + (R[W >> 1] | 0), e[u >> 1] = o >> x), E = E + 1 << 16 >> 16, E << 16 >> 16 > H << 16 >> 16) break e;
                    d = E << 16 >> 16;
                  }
                  for (S = B + (i + -1 << 1) | 0, u = Y; ; ) {
                    if (D2(0, v) | 0, e[f1 + (u - Y << 1) >> 1] = 0, E << 16 >> 16 != H << 16 >> 16) {
                      for (b = b + -1 << 16 >> 16, u = e[n + (b << 16 >> 16 << 1) >> 1] | 0, d = V, m = W, i = Q, a = K; o = (k(e[i >> 1] | 0, u) | 0) >> g, e[a >> 1] = o + (R[m >> 1] | 0), o = (k(e[i + -2 >> 1] | 0, u) | 0) >> g, e[a + -2 >> 1] = o + (R[m + -2 >> 1] | 0), d = d + -1 << 16 >> 16, d << 16 >> 16; ) m = m + -4 | 0, i = i + -4 | 0, a = a + -4 | 0;
                      o = (k(e[s >> 1] | 0, u) | 0) >> g, e[T >> 1] = o + (R[L >> 1] | 0), e[S >> 1] = u >> x;
                    }
                    if (E = E + 1 << 16 >> 16, E << 16 >> 16 > H << 16 >> 16) break;
                    u = E << 16 >> 16;
                  }
                }
              while (false);
              if (E = _1 << 16 >> 16, i = e1 + 1 & 65535, i << 16 >> 16 > b1 << 16 >> 16) s = _1;
              else for (b = _1, a = e[f1 + (E - Y << 1) >> 1] | 0; ; ) if (d = e[f1 + ((i << 16 >> 16) - Y << 1) >> 1] | 0, m = d << 16 >> 16 < a << 16 >> 16, b = m ? b : i, i = i + 1 << 16 >> 16, i << 16 >> 16 > b1 << 16 >> 16) {
                s = b;
                break;
              } else a = m ? a : d;
              e: do
                if (i1 << 16 >> 16 == 0 && s << 16 >> 16 > s1 << 16 >> 16) i = s, p = 0;
                else {
                  if (!(t >>> 0 < 4 & i1 << 16 >> 16 != 0)) {
                    if (b = f1 + ((s << 16 >> 16) - Y << 1) | 0, d = O2(b, p, h1, v) | 0, i = (p & 65535) + 1 & 65535, i << 16 >> 16 <= d1 << 16 >> 16) for (; m = O2(b, i, h1, v) | 0, a = m << 16 >> 16 > d << 16 >> 16, p = a ? i : p, i = i + 1 << 16 >> 16, !(i << 16 >> 16 > d1 << 16 >> 16); ) d = a ? m : d;
                    if ((t + -7 | 0) >>> 0 < 2) {
                      d1 = p << 16 >> 16 == -3, i = (d1 << 31 >> 31) + s << 16 >> 16, p = d1 ? 3 : p;
                      break;
                    }
                    switch (p << 16 >> 16) {
                      case -2: {
                        i = s + -1 << 16 >> 16, p = 1;
                        break e;
                      }
                      case 2: {
                        i = s + 1 << 16 >> 16, p = -1;
                        break e;
                      }
                      default: {
                        i = s;
                        break e;
                      }
                    }
                  }
                  if (s1 = e[r >> 1] | 0, s1 = ((s1 << 16 >> 16) - E | 0) > 5 ? E + 5 & 65535 : s1, a = b1 << 16 >> 16, s1 = (a - (s1 << 16 >> 16) | 0) > 4 ? a + 65532 & 65535 : s1, a = s << 16 >> 16, i = s1 << 16 >> 16, (a | 0) == (i + -1 | 0) || s << 16 >> 16 == s1 << 16 >> 16) {
                    if (b = f1 + (a - Y << 1) | 0, a = O2(b, p, h1, v) | 0, i = (p & 65535) + 1 & 65535, i << 16 >> 16 <= d1 << 16 >> 16) for (; d = O2(b, i, h1, v) | 0, m = d << 16 >> 16 > a << 16 >> 16, p = m ? i : p, i = i + 1 << 16 >> 16, !(i << 16 >> 16 > d1 << 16 >> 16); ) a = m ? d : a;
                    if ((t + -7 | 0) >>> 0 < 2) {
                      d1 = p << 16 >> 16 == -3, i = (d1 << 31 >> 31) + s << 16 >> 16, p = d1 ? 3 : p;
                      break;
                    }
                    switch (p << 16 >> 16) {
                      case -2: {
                        i = s + -1 << 16 >> 16, p = 1;
                        break e;
                      }
                      case 2: {
                        i = s + 1 << 16 >> 16, p = -1;
                        break e;
                      }
                      default: {
                        i = s;
                        break e;
                      }
                    }
                  }
                  if ((a | 0) == (i + -2 | 0)) {
                    if (i = f1 + (a - Y << 1) | 0, a = O2(i, 0, h1, v) | 0, (t | 0) != 8) {
                      for (p = 0, b = 1; d = O2(i, b, h1, v) | 0, m = d << 16 >> 16 > a << 16 >> 16, p = m ? b : p, b = b + 1 << 16 >> 16, !(b << 16 >> 16 > d1 << 16 >> 16); ) a = m ? d : a;
                      if ((t + -7 | 0) >>> 0 >= 2) switch (p << 16 >> 16) {
                        case -2: {
                          i = s + -1 << 16 >> 16, p = 1;
                          break e;
                        }
                        case 2: {
                          i = s + 1 << 16 >> 16, p = -1;
                          break e;
                        }
                        default: {
                          i = s;
                          break e;
                        }
                      }
                    } else p = 0;
                    d1 = p << 16 >> 16 == -3, i = (d1 << 31 >> 31) + s << 16 >> 16, p = d1 ? 3 : p;
                    break;
                  }
                  if ((a | 0) == (i + 1 | 0)) {
                    if (b = f1 + (a - Y << 1) | 0, i = O2(b, p, h1, v) | 0, a = (p & 65535) + 1 & 65535, a << 16 >> 16 <= 0) for (; m = O2(b, a, h1, v) | 0, d = m << 16 >> 16 > i << 16 >> 16, p = d ? a : p, a = a + 1 << 16 >> 16, !(a << 16 >> 16 > 0); ) i = d ? m : i;
                    if ((t + -7 | 0) >>> 0 < 2) {
                      d1 = p << 16 >> 16 == -3, i = (d1 << 31 >> 31) + s << 16 >> 16, p = d1 ? 3 : p;
                      break;
                    }
                    switch (p << 16 >> 16) {
                      case -2: {
                        i = s + -1 << 16 >> 16, p = 1;
                        break e;
                      }
                      case 2: {
                        i = s + 1 << 16 >> 16, p = -1;
                        break e;
                      }
                      default: {
                        i = s;
                        break e;
                      }
                    }
                  } else i = s, p = 0;
                }
              while (false);
              return (t + -7 | 0) >>> 0 > 1 ? (d1 = r, r = er(i, p, e[r >> 1] | 0, _1, b1, i1, t >>> 0 < 4 & 1, v) | 0, e[w >> 1] = r, e[d1 >> 1] = i, e[c >> 1] = h1, e[f >> 1] = p, C = k1, i | 0) : (v = rr(i, p, _1, i1, v) | 0, e[w >> 1] = v, e[r >> 1] = i, e[c >> 1] = h1, e[f >> 1] = p, C = k1, i | 0);
            }
            function ue(r, t, i, n, o, s, u, a, f) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0;
              var c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0;
              L = C, C = C + 1200 | 0, U = L + 1188 | 0, B = L + 580 | 0, T = L + 578 | 0, F = L + 576 | 0, D = L, I = L + 582 | 0, M = (a | 0) != 0;
              do
                if (M) if (t >>> 0 < 2) {
                  we(r, 1, f);
                  break;
                } else {
                  we(r, 0, f);
                  break;
                }
              while (false);
              O = o << 16 >> 16, v = 0 - O | 0, w = i + (v << 1) | 0, v = v & 65535, b = s << 16 >> 16;
              do
                if (v << 16 >> 16 < s << 16 >> 16) {
                  for (d = v, m = w, v = 0; E = e[m >> 1] | 0, v = (k(E << 1, E) | 0) + v | 0, !((v | 0) < 0); ) if (d = d + 1 << 16 >> 16, d << 16 >> 16 >= s << 16 >> 16) {
                    S = 14;
                    break;
                  } else m = m + 2 | 0;
                  if ((S | 0) == 14) {
                    if ((v | 0) < 1048576) {
                      S = 15;
                      break;
                    }
                    K0(I | 0, w | 0, b + O << 1 | 0) | 0, E = 0;
                    break;
                  }
                  if (c = b + O | 0, p = c >>> 1, d = p & 65535, !(d << 16 >> 16)) v = I;
                  else {
                    for (E = ((p << 1) + 131070 & 131070) + 2 | 0, b = E - O | 0, m = I; e[m >> 1] = (e[w >> 1] | 0) >>> 3, e[m + 2 >> 1] = (e[w + 2 >> 1] | 0) >>> 3, d = d + -1 << 16 >> 16, d << 16 >> 16; ) w = w + 4 | 0, m = m + 4 | 0;
                    w = i + (b << 1) | 0, v = I + (E << 1) | 0;
                  }
                  c & 1 && (e[v >> 1] = (e[w >> 1] | 0) >>> 3), E = 3;
                } else S = 15;
              while (false);
              if ((S | 0) == 15) {
                if (E = b + O | 0, v = E >>> 1, p = v & 65535, !(p << 16 >> 16)) v = I;
                else {
                  for (b = ((v << 1) + 131070 & 131070) + 2 | 0, m = b - O | 0, d = I; e[d >> 1] = e[w >> 1] << 3, e[d + 2 >> 1] = e[w + 2 >> 1] << 3, p = p + -1 << 16 >> 16, p << 16 >> 16; ) w = w + 4 | 0, d = d + 4 | 0;
                  w = i + (m << 1) | 0, v = I + (b << 1) | 0;
                }
                E & 1 && (e[v >> 1] = e[w >> 1] << 3), E = -3;
              }
              return b = D + (O << 2) | 0, m = I + (O << 1) | 0, o6(m, s, o, n, b), c = (t | 0) == 7 & 1, v = n << 16 >> 16, w = v << 2, (w | 0) != (v << 18 >> 16 | 0) && (l[f >> 2] = 1, w = n << 16 >> 16 > 0 ? 32767 : -32768), d = ae(r, b, m, E, c, s, o, w & 65535, U, a, f) | 0, v = v << 1, p = ae(r, b, m, E, c, s, w + 65535 & 65535, v & 65535, B, a, f) | 0, v = ae(r, b, m, E, c, s, v + 65535 & 65535, n, T, a, f) | 0, u << 16 >> 16 == 1 & M && (w6(b, m, s, o, n, F, f) | 0, S6(r, e[F >> 1] | 0)), w = e[U >> 1] | 0, c = e[B >> 1] | 0, ((w << 16 >> 16) * 55706 >> 16 | 0) >= (c << 16 >> 16 | 0) ? (B = w, U = d, B = B << 16 >> 16, B = B * 55706 | 0, B = B >> 16, T = e[T >> 1] | 0, T = T << 16 >> 16, T = (B | 0) < (T | 0), T = T ? v : U, C = L, T | 0) : (e[U >> 1] = c, B = c, U = p, B = B << 16 >> 16, B = B * 55706 | 0, B = B >> 16, T = e[T >> 1] | 0, T = T << 16 >> 16, T = (B | 0) < (T | 0), T = T ? v : U, C = L, T | 0);
            }
            function ae(r, t, i, n, o, s, u, a, f, c, w) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0;
              var v = 0, p = 0, m = 0, d = 0, b = 0;
              if (u << 16 >> 16 < a << 16 >> 16) a = -2147483648, m = u;
              else for (m = u, v = -2147483648, p = t + (0 - (u << 16 >> 16) << 2) | 0, t = u; ; ) if (u = l[p >> 2] | 0, b = (u | 0) < (v | 0), t = b ? t : m, v = b ? v : u, m = m + -1 << 16 >> 16, m << 16 >> 16 < a << 16 >> 16) {
                a = v, m = t;
                break;
              } else p = p + 4 | 0;
              if (t = s << 16 >> 16 >>> 2 & 65535, !(t << 16 >> 16)) t = 0;
              else {
                for (v = t, u = i + (0 - (m << 16 >> 16) << 1) | 0, t = 0; b = e[u >> 1] | 0, b = (k(b, b) | 0) + t | 0, t = e[u + 2 >> 1] | 0, t = b + (k(t, t) | 0) | 0, b = e[u + 4 >> 1] | 0, b = t + (k(b, b) | 0) | 0, t = e[u + 6 >> 1] | 0, t = b + (k(t, t) | 0) | 0, v = v + -1 << 16 >> 16, v << 16 >> 16; ) u = u + 8 | 0;
                t = t << 1;
              }
              if (c && D6(r, a, t, w), t = D2(t, w) | 0, u = o << 16 >> 16 != 0, u && (t = (t | 0) > 1073741823 ? 2147483647 : t << 1), o = a >> 16, r = t >> 16, w = k(r, o) | 0, w = (w | 0) == 1073741824 ? 2147483647 : w << 1, t = (k((t >>> 1) - (r << 15) << 16 >> 16, o) | 0) >> 15, b = (t << 1) + w | 0, b = (t ^ w | 0) > 0 & (b ^ w | 0) < 0 ? (w >>> 31) + 2147483647 | 0 : b, o = (k(r, (a >>> 1) - (o << 15) << 16 >> 16) | 0) >> 15, t = b + (o << 1) | 0, t = (b ^ o | 0) > 0 & (t ^ b | 0) < 0 ? (b >>> 31) + 2147483647 | 0 : t, !u) return e[f >> 1] = t, m | 0;
              if (u = n << 16 >> 16, n << 16 >> 16 > 0 ? n << 16 >> 16 < 31 ? (u = t >> u, d = 16) : u = 0 : (d = 0 - u << 16 >> 16, u = t << d, u = (u >> d | 0) == (t | 0) ? u : t >> 31 ^ 2147483647, d = 16), (d | 0) == 16) {
                if ((u | 0) > 65535) return e[f >> 1] = 32767, m | 0;
                if ((u | 0) < -65536) return e[f >> 1] = -32768, m | 0;
              }
              return e[f >> 1] = u >>> 1, m | 0;
            }
            function yr(r) {
              r = r | 0;
              var t = 0;
              return !r || (l[r >> 2] = 0, t = A0(6) | 0, !t) ? (r = -1, r | 0) : (e[t >> 1] = 40, e[t + 2 >> 1] = 0, e[t + 4 >> 1] = 0, l[r >> 2] = t, r = 0, r | 0);
            }
            function kr(r) {
              return r = r | 0, r ? (e[r >> 1] = 40, e[r + 2 >> 1] = 0, e[r + 4 >> 1] = 0, r = 0, r | 0) : (r = -1, r | 0);
            }
            function Ar(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function Rr(r, t, i, n, o, s, u, a, f, c, w) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0;
              var v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0;
              if (g = C, C = C + 1200 | 0, O = g + 1186 | 0, I = g + 1184 | 0, V = g + 1182 | 0, D = g, F = g + 576 | 0, M = o << 16 >> 16, L = F + (M << 1) | 0, v = (0 - M & 65535) << 16 >> 16 < s << 16 >> 16, v) {
                b = 0 - o << 16 >> 16 << 16 >> 16, p = 0;
                do
                  d = e[i + (b << 1) >> 1] | 0, d = k(d, d) | 0, (d | 0) != 1073741824 ? (m = (d << 1) + p | 0, (d ^ p | 0) > 0 & (m ^ p | 0) < 0 ? (l[w >> 2] = 1, p = (p >>> 31) + 2147483647 | 0) : p = m) : (l[w >> 2] = 1, p = 2147483647), b = b + 1 | 0;
                while ((b & 65535) << 16 >> 16 != s << 16 >> 16);
              } else p = 0;
              if ((2147483646 - p & p | 0) >= 0) if ((p | 0) == 2147483647) {
                if (v) {
                  p = 0 - o << 16 >> 16 << 16 >> 16;
                  do
                    e[F + (p + M << 1) >> 1] = o0(e[i + (p << 1) >> 1] | 0, 3, w) | 0, p = p + 1 | 0;
                  while ((p & 65535) << 16 >> 16 != s << 16 >> 16);
                }
              } else E = 14;
              else l[w >> 2] = 1, E = 14;
              do
                if ((E | 0) == 14) {
                  if ((1048575 - p & p | 0) < 0 ? (l[w >> 2] = 1, p = (p >>> 31) + 2147483647 | 0) : p = p + -1048576 | 0, (p | 0) >= 0) {
                    if (!v) break;
                    T = 0 - o << 16 >> 16 << 16 >> 16, K0(F + (M + T << 1) | 0, i + (T << 1) | 0, (((s + o << 16 >> 16) + -1 & 65535) << 1) + 2 | 0) | 0;
                    break;
                  }
                  if (v) {
                    p = 0 - o << 16 >> 16 << 16 >> 16;
                    do
                      T = e[i + (p << 1) >> 1] | 0, e[F + (p + M << 1) >> 1] = (T << 19 >> 19 | 0) == (T | 0) ? T << 3 : T >>> 15 ^ 32767, p = p + 1 | 0;
                    while ((p & 65535) << 16 >> 16 != s << 16 >> 16);
                  }
                }
              while (false);
              U = D + (M << 2) | 0, o6(L, s, o, n, U), b = e[r >> 1] | 0, T = r + 4 | 0, B = a + (f << 16 >> 16 << 1) | 0;
              e: do
                if (o << 16 >> 16 < n << 16 >> 16) S = o;
                else {
                  if ((e[T >> 1] | 0) <= 0) for (i = o, a = -2147483648, d = o, E = 3402; ; ) if (e2(l[D + (M - (i << 16 >> 16) << 2) >> 2] | 0, O, I, w), m = e[I >> 1] | 0, p = e[E >> 1] | 0, b = k(p, e[O >> 1] | 0) | 0, (b | 0) == 1073741824 ? (l[w >> 2] = 1, v = 2147483647) : v = b << 1, S = (k(p, m << 16 >> 16) | 0) >> 15, b = v + (S << 1) | 0, (v ^ S | 0) > 0 & (b ^ v | 0) < 0 && (l[w >> 2] = 1, b = (v >>> 31) + 2147483647 | 0), m = (b | 0) < (a | 0), d = m ? d : i, i = i + -1 << 16 >> 16, i << 16 >> 16 < n << 16 >> 16) {
                    S = d;
                    break e;
                  } else a = m ? a : b, E = E + -2 | 0;
                  for (a = o, v = -2147483648, d = o, S = 2902 + (M + 123 - (b << 16 >> 16) << 1) | 0, i = 3402; ; ) if (e2(l[D + (M - (a << 16 >> 16) << 2) >> 2] | 0, O, I, w), E = e[I >> 1] | 0, m = e[i >> 1] | 0, b = k(m, e[O >> 1] | 0) | 0, (b | 0) == 1073741824 ? (l[w >> 2] = 1, p = 2147483647) : p = b << 1, E = (k(m, E << 16 >> 16) | 0) >> 15, b = p + (E << 1) | 0, (p ^ E | 0) > 0 & (b ^ p | 0) < 0 && (l[w >> 2] = 1, b = (p >>> 31) + 2147483647 | 0), e2(b, O, I, w), E = e[I >> 1] | 0, m = e[S >> 1] | 0, b = k(m, e[O >> 1] | 0) | 0, (b | 0) == 1073741824 ? (l[w >> 2] = 1, p = 2147483647) : p = b << 1, E = (k(m, E << 16 >> 16) | 0) >> 15, b = p + (E << 1) | 0, (p ^ E | 0) > 0 & (b ^ p | 0) < 0 && (l[w >> 2] = 1, b = (p >>> 31) + 2147483647 | 0), m = (b | 0) < (v | 0), d = m ? d : a, a = a + -1 << 16 >> 16, a << 16 >> 16 < n << 16 >> 16) {
                    S = d;
                    break;
                  } else v = m ? v : b, S = S + -2 | 0, i = i + -2 | 0;
                }
              while (false);
              if (s << 16 >> 16 > 0) for (a = 0, i = L, E = F + (M - (S << 16 >> 16) << 1) | 0, d = 0, p = 0; b = e[E >> 1] | 0, m = k(b, e[i >> 1] | 0) | 0, (m | 0) != 1073741824 ? (v = (m << 1) + d | 0, (m ^ d | 0) > 0 & (v ^ d | 0) < 0 ? (l[w >> 2] = 1, d = (d >>> 31) + 2147483647 | 0) : d = v) : (l[w >> 2] = 1, d = 2147483647), v = k(b, b) | 0, (v | 0) != 1073741824 ? (m = (v << 1) + p | 0, (v ^ p | 0) > 0 & (m ^ p | 0) < 0 ? (l[w >> 2] = 1, p = (p >>> 31) + 2147483647 | 0) : p = m) : (l[w >> 2] = 1, p = 2147483647), a = a + 1 << 16 >> 16, !(a << 16 >> 16 >= s << 16 >> 16); ) i = i + 2 | 0, E = E + 2 | 0;
              else d = 0, p = 0;
              return m = (c | 0) == 0, m || (we(t, 0, w), D6(t, d, p, w)), v = (N1(p, w) | 0) << 16 >> 16, (v * 13107 | 0) == 1073741824 ? (l[w >> 2] = 1, p = 2147483647) : p = v * 26214 | 0, v = d - p | 0, ((v ^ d) & (p ^ d) | 0) < 0 && (l[w >> 2] = 1, v = (d >>> 31) + 2147483647 | 0), c = N1(v, w) | 0, e[B >> 1] = c, c << 16 >> 16 > 0 ? (v = u + 6 | 0, e[u + 8 >> 1] = e[v >> 1] | 0, c = u + 4 | 0, e[v >> 1] = e[c >> 1] | 0, v = u + 2 | 0, e[c >> 1] = e[v >> 1] | 0, e[v >> 1] = e[u >> 1] | 0, e[u >> 1] = S, e[r >> 1] = Y2(u, 5) | 0, e[r + 2 >> 1] = 32767, v = 32767) : (e[r >> 1] = S, r = r + 2 | 0, v = ((e[r >> 1] | 0) * 29491 | 0) >>> 15 & 65535, e[r >> 1] = v), e[T >> 1] = ((P1(v, 9830, w) | 0) & 65535) >>> 15 ^ 1, m || (P1(f, 1, w) | 0) << 16 >> 16 ? (C = g, S | 0) : (w6(U, L, s, o, n, V, w) | 0, S6(t, e[V >> 1] | 0), C = g, S | 0);
            }
            function fe(r, t, i, n, o, s, u, a, f, c) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0;
              var w = 0, v = 0;
              c = C, C = C + 48 | 0, v = c + 22 | 0, w = c, t = r >>> 0 < 6 ? t : i, i = s << 16 >> 16 > 0 ? 22 : 0, r = o + (i << 1) | 0, _2(r, t, v), _2(r, n, w), r = s << 16 >> 16, s = f + (r << 1) | 0, t5(v, u + (r << 1) | 0, s, 40), N0(w, s, s, 40, a, 1), i = o + (((i << 16) + 720896 | 0) >>> 16 << 1) | 0, _2(i, t, v), _2(i, n, w), r = (r << 16) + 2621440 >> 16, f = f + (r << 1) | 0, t5(v, u + (r << 1) | 0, f, 40), N0(w, f, f, 40, a, 1), C = c;
            }
            function Sr(r) {
              r = r | 0;
              var t = 0;
              return !r || (l[r >> 2] = 0, t = A0(12) | 0, !t) ? (r = -1, r | 0) : (e[t >> 1] = 0, e[t + 2 >> 1] = 0, e[t + 4 >> 1] = 0, e[t + 6 >> 1] = 0, e[t + 8 >> 1] = 0, e[t + 10 >> 1] = 0, l[r >> 2] = t, r = 0, r | 0);
            }
            function Dr(r) {
              return r = r | 0, r ? (e[r >> 1] = 0, e[r + 2 >> 1] = 0, e[r + 4 >> 1] = 0, e[r + 6 >> 1] = 0, e[r + 8 >> 1] = 0, e[r + 10 >> 1] = 0, r = 0, r | 0) : (r = -1, r | 0);
            }
            function b6(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function Mr(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0;
              if (v = r + 10 | 0, o = e[v >> 1] | 0, p = r + 8 | 0, n = e[p >> 1] | 0, !(i << 16 >> 16)) {
                r = n, w = o, e[v >> 1] = w, e[p >> 1] = r;
                return;
              }
              for (a = r + 4 | 0, f = r + 6 | 0, c = r + 2 | 0, u = e[f >> 1] | 0, w = e[a >> 1] | 0, s = i, i = o; m = (k(e[r >> 1] | 0, -3733) | 0) + (((w << 16 >> 16) * 7807 | 0) + ((u << 16 >> 16) * 7807 >> 15)) | 0, e[r >> 1] = w, m = m + ((k(e[c >> 1] | 0, -3733) | 0) >> 15) | 0, e[c >> 1] = u, m = ((i << 16 >> 16) * 1899 | 0) + m + (k(n << 16 >> 16, -3798) | 0) | 0, i = e[t >> 1] | 0, m = m + ((i << 16 >> 16) * 1899 | 0) | 0, e[t >> 1] = (m + 2048 | 0) >>> 12, o = m >>> 12, w = o & 65535, e[a >> 1] = w, u = (m << 3) - (o << 15) & 65535, e[f >> 1] = u, s = s + -1 << 16 >> 16, s << 16 >> 16; ) m = n, t = t + 2 | 0, n = i, i = m;
              e[v >> 1] = n, e[p >> 1] = i;
            }
            function Tr(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0;
              if (o = e[(l[n + 88 >> 2] | 0) + (r << 1) >> 1] | 0, !!(o << 16 >> 16)) for (a = i, u = l[(l[n + 92 >> 2] | 0) + (r << 2) >> 2] | 0; ; ) {
                if (i = e[u >> 1] | 0, !(i << 16 >> 16)) i = 0;
                else {
                  for (r = e[t >> 1] | 0, s = i, n = a + ((i << 16 >> 16) + -1 << 1) | 0; i = r << 16 >> 16, e[n >> 1] = i & 1, s = s + -1 << 16 >> 16, s << 16 >> 16; ) r = i >>> 1 & 65535, n = n + -2 | 0;
                  i = e[u >> 1] | 0;
                }
                if (t = t + 2 | 0, o = o + -1 << 16 >> 16, o << 16 >> 16) a = a + (i << 16 >> 16 << 1) | 0, u = u + 2 | 0;
                else break;
              }
            }
            function Cr(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0;
              if (w = C, C = C + 16 | 0, f = w + 2 | 0, c = w, u = o << 16 >> 16, o << 16 >> 16 < 1) {
                s = -5443, c = -32768, b2(r, c, s), C = w;
                return;
              }
              if (a = a2(14, i, s) | 0, (u | 0) < (a << 16 >> 16 | 0) ? i = n : (i = (n & 65535) + 1 & 65535, o = u >>> 1 & 65535), n = k0(o, a & 65535) | 0, e[c >> 1] = n, N2(n << 16 >> 16, f, c, s), e[f >> 1] = ((((i & 65535) - (t & 65535) << 16) + -65536 | 0) >>> 16) + (R[f >> 1] | 0), n = d5(e[c >> 1] | 0, 5, s) | 0, u = e[f >> 1] | 0, n = ((u & 65535) << 10) + (n & 65535) & 65535, n << 16 >> 16 > 18284) {
                s = 3037, c = 18284, b2(r, c, s), C = w;
                return;
              }
              o = e[c >> 1] | 0, u = u << 16 >> 16, (u * 24660 | 0) == 1073741824 ? (l[s >> 2] = 1, i = 2147483647) : i = u * 49320 | 0, c = (o << 16 >> 16) * 24660 >> 15, u = i + (c << 1) | 0, (i ^ c | 0) > 0 & (u ^ i | 0) < 0 && (l[s >> 2] = 1, u = (i >>> 31) + 2147483647 | 0), c = u << 13, s = N1((c >> 13 | 0) == (u | 0) ? c : u >> 31 ^ 2147483647, s) | 0, c = n, b2(r, c, s), C = w;
            }
            function Pr(r, t, i, n, o, s, u, a, f, c, w, v, p, m, d, b, E, S, D, O) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0, p = p | 0, m = m | 0, d = d | 0, b = b | 0, E = E | 0, S = S | 0, D = D | 0, O = O | 0;
              var I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0, R1 = 0, Z = 0, G = 0, T1 = 0, Q1 = 0, B1 = 0, t0 = 0, j1 = 0, G1 = 0, c0 = 0, e0 = 0, R0 = 0, r0 = 0;
              for (r0 = C, C = C + 80 | 0, G1 = r0 + 66 | 0, c0 = r0 + 64 | 0, e0 = r0 + 62 | 0, R0 = r0 + 60 | 0, s1 = r0 + 40 | 0, f1 = r0 + 20 | 0, e1 = r0, e[G1 >> 1] = t, e[c0 >> 1] = f, e[e0 >> 1] = c, H = a2(14, i, O) | 0, j1 = H & 65535, e[R0 >> 1] = j1, Y = a2(14, c, O) | 0, x = (R[n >> 1] | 0) + 65523 | 0, e[e1 >> 1] = x, L = (R[n + 2 >> 1] | 0) + 65522 | 0, V = e1 + 2 | 0, e[V >> 1] = L, g = ((t & 65535) << 16) + -720896 | 0, B = g >> 16, g = (g >>> 15) + 15 + (R[n + 4 >> 1] | 0) | 0, K = e1 + 4 | 0, e[K >> 1] = g, Q = (R[n + 6 >> 1] | 0) + B | 0, W = e1 + 6 | 0, e[W >> 1] = Q, B = B + 1 + (R[n + 8 >> 1] | 0) | 0, U = e1 + 8 | 0, e[U >> 1] = B, I = (R[w >> 1] | 0) + 65523 & 65535, e[e1 + 10 >> 1] = I, T = (R[w + 2 >> 1] | 0) + 65522 & 65535, e[e1 + 12 >> 1] = T, M = ((f & 65535) << 16) + -720896 | 0, n = M >> 16, M = (M >>> 15) + 15 + (R[w + 4 >> 1] | 0) & 65535, e[e1 + 14 >> 1] = M, F = (R[w + 6 >> 1] | 0) + n & 65535, e[e1 + 16 >> 1] = F, n = n + 1 + (R[w + 8 >> 1] | 0) & 65535, e[e1 + 18 >> 1] = n, B1 = (s & 65535) - (p & 65535) << 16, f = B1 >> 16, (B1 | 0) > 0 ? (c = u, i = m << 16 >> 16 >> f & 65535) : (c = u << 16 >> 16 >> 0 - f & 65535, i = m), (d5(i, 1, O) | 0) << 16 >> 16 > c << 16 >> 16 ? i = 1 : i = (((c << 16 >> 16) + 3 >> 2 | 0) > (i << 16 >> 16 | 0)) << 31 >> 31, w = x + i & 65535, e[e1 >> 1] = w, B1 = L + i & 65535, e[V >> 1] = B1, Q1 = g + i & 65535, e[K >> 1] = Q1, T1 = Q + i & 65535, e[W >> 1] = T1, G = B + i & 65535, e[U >> 1] = G, f = n << 16 >> 16 > w << 16 >> 16 ? n : w, f = F << 16 >> 16 > f << 16 >> 16 ? F : f, f = M << 16 >> 16 > f << 16 >> 16 ? M : f, f = T << 16 >> 16 > f << 16 >> 16 ? T : f, f = I << 16 >> 16 > f << 16 >> 16 ? I : f, f = G << 16 >> 16 > f << 16 >> 16 ? G : f, f = T1 << 16 >> 16 > f << 16 >> 16 ? T1 : f, f = Q1 << 16 >> 16 > f << 16 >> 16 ? Q1 : f, f = (B1 << 16 >> 16 > f << 16 >> 16 ? B1 : f) + 1 & 65535, n = 0; ; ) {
                if (i = f - (w & 65535) | 0, w = i & 65535, c = R[o >> 1] << 16, i = i << 16 >> 16, w << 16 >> 16 > 0 ? w = w << 16 >> 16 < 31 ? c >> i : 0 : (B1 = 0 - i << 16 >> 16, w = c << B1, w = (w >> B1 | 0) == (c | 0) ? w : c >> 31 ^ 2147483647), B1 = w >> 16, e[s1 + (n << 1) >> 1] = B1, e[f1 + (n << 1) >> 1] = (w >>> 1) - (B1 << 15), n = n + 1 | 0, (n | 0) == 5) {
                  i = 5, c = v;
                  break;
                }
                w = e[e1 + (n << 1) >> 1] | 0, o = o + 2 | 0;
              }
              for (; n = f - (I & 65535) | 0, I = n & 65535, w = R[c >> 1] << 16, n = n << 16 >> 16, I << 16 >> 16 > 0 ? w = I << 16 >> 16 < 31 ? w >> n : 0 : (Q1 = 0 - n << 16 >> 16, B1 = w << Q1, w = (B1 >> Q1 | 0) == (w | 0) ? B1 : w >> 31 ^ 2147483647), B1 = w >> 16, e[s1 + (i << 1) >> 1] = B1, e[f1 + (i << 1) >> 1] = (w >>> 1) - (B1 << 15), w = i + 1 | 0, (w & 65535) << 16 >> 16 != 10; ) I = e[e1 + (w << 1) >> 1] | 0, i = w, c = c + 2 | 0;
              d1 = H << 16 >> 16, _1 = e[s1 >> 1] | 0, b1 = e[f1 >> 1] | 0, i1 = e[s1 + 2 >> 1] | 0, h1 = e[f1 + 2 >> 1] | 0, k1 = e[s1 + 4 >> 1] | 0, R1 = e[f1 + 4 >> 1] | 0, Z = e[s1 + 6 >> 1] | 0, G = e[f1 + 6 >> 1] | 0, T1 = e[s1 + 8 >> 1] | 0, Q1 = e[f1 + 8 >> 1] | 0, B1 = d & 65535, p = Y << 16 >> 16, s = e[s1 + 10 >> 1] | 0, F = e[f1 + 10 >> 1] | 0, M = e[s1 + 12 >> 1] | 0, o = e[f1 + 12 >> 1] | 0, i = e[s1 + 14 >> 1] | 0, c = e[f1 + 14 >> 1] | 0, n = e[s1 + 16 >> 1] | 0, I = e[f1 + 16 >> 1] | 0, B = e[s1 + 18 >> 1] | 0, f1 = e[f1 + 18 >> 1] | 0, f = 2147483647, s1 = 0, w = 0, U = 782;
              do
                e1 = e[U >> 1] | 0, Q = (k(d1, e[U + 2 >> 1] | 0) | 0) >>> 15 << 16, v = Q >> 16, g = e1 << 1, x = (k(g, e1) | 0) >> 16, m = k(x, _1) | 0, (m | 0) == 1073741824 ? (l[O >> 2] = 1, W = 2147483647) : W = m << 1, Y = (k(b1, x) | 0) >> 15, m = W + (Y << 1) | 0, (W ^ Y | 0) > 0 & (m ^ W | 0) < 0 && (l[O >> 2] = 1, m = (W >>> 31) + 2147483647 | 0), x = k(i1, e1) | 0, (x | 0) == 1073741824 ? (l[O >> 2] = 1, W = 2147483647) : W = x << 1, Y = (k(h1, e1) | 0) >> 15, x = W + (Y << 1) | 0, (W ^ Y | 0) > 0 & (x ^ W | 0) < 0 && (l[O >> 2] = 1, x = (W >>> 31) + 2147483647 | 0), Q = (k(Q >> 15, v) | 0) >> 16, W = k(k1, Q) | 0, (W | 0) == 1073741824 ? (l[O >> 2] = 1, K = 2147483647) : K = W << 1, Y = (k(R1, Q) | 0) >> 15, W = K + (Y << 1) | 0, (K ^ Y | 0) > 0 & (W ^ K | 0) < 0 && (l[O >> 2] = 1, W = (K >>> 31) + 2147483647 | 0), Q = k(Z, v) | 0, (Q | 0) == 1073741824 ? (l[O >> 2] = 1, K = 2147483647) : K = Q << 1, Y = (k(G, v) | 0) >> 15, Q = K + (Y << 1) | 0, (K ^ Y | 0) > 0 & (Q ^ K | 0) < 0 ? (l[O >> 2] = 1, Y = (K >>> 31) + 2147483647 | 0) : Y = Q, K = (k(g, v) | 0) >> 16, Q = k(T1, K) | 0, (Q | 0) == 1073741824 ? (l[O >> 2] = 1, g = 2147483647) : g = Q << 1, H = (k(Q1, K) | 0) >> 15, Q = g + (H << 1) | 0, (g ^ H | 0) > 0 & (Q ^ g | 0) < 0 && (l[O >> 2] = 1, Q = (g >>> 31) + 2147483647 | 0), K = e[U + 4 >> 1] | 0, g = e[U + 6 >> 1] | 0, U = U + 8 | 0, (e1 - B1 & 65535) << 16 >> 16 < 1 && (t0 = K << 16 >> 16, K << 16 >> 16 <= d << 16 >> 16) && (L = (k(g << 16 >> 16, p) | 0) >>> 15 << 16, e1 = L >> 16, T = t0 << 1, g = (k(T, t0) | 0) >> 16, K = k(s, g) | 0, (K | 0) == 1073741824 ? (l[O >> 2] = 1, V = 2147483647) : V = K << 1, H = (k(F, g) | 0) >> 15, K = V + (H << 1) | 0, (V ^ H | 0) > 0 & (K ^ V | 0) < 0 && (l[O >> 2] = 1, K = (V >>> 31) + 2147483647 | 0), g = k(M, t0) | 0, (g | 0) == 1073741824 ? (l[O >> 2] = 1, V = 2147483647) : V = g << 1, H = (k(o, t0) | 0) >> 15, g = V + (H << 1) | 0, (V ^ H | 0) > 0 & (g ^ V | 0) < 0 ? (l[O >> 2] = 1, H = (V >>> 31) + 2147483647 | 0) : H = g, V = (k(L >> 15, e1) | 0) >> 16, g = k(i, V) | 0, (g | 0) == 1073741824 ? (l[O >> 2] = 1, L = 2147483647) : L = g << 1, v = (k(c, V) | 0) >> 15, g = L + (v << 1) | 0, (L ^ v | 0) > 0 & (g ^ L | 0) < 0 ? (l[O >> 2] = 1, v = (L >>> 31) + 2147483647 | 0) : v = g, g = k(n, e1) | 0, (g | 0) == 1073741824 ? (l[O >> 2] = 1, V = 2147483647) : V = g << 1, L = (k(I, e1) | 0) >> 15, g = V + (L << 1) | 0, (V ^ L | 0) > 0 & (g ^ V | 0) < 0 ? (l[O >> 2] = 1, u = (V >>> 31) + 2147483647 | 0) : u = g, V = (k(T, e1) | 0) >> 16, g = k(B, V) | 0, (g | 0) == 1073741824 ? (l[O >> 2] = 1, L = 2147483647) : L = g << 1, e1 = (k(f1, V) | 0) >> 15, g = L + (e1 << 1) | 0, (L ^ e1 | 0) > 0 & (g ^ L | 0) < 0 && (l[O >> 2] = 1, g = (L >>> 31) + 2147483647 | 0), e1 = x + m + W + Y + Q + K + H + v + u + g | 0, Y = (e1 | 0) < (f | 0), f = Y ? e1 : f, w = Y ? s1 : w), s1 = s1 + 1 << 16 >> 16;
              while (s1 << 16 >> 16 < 256);
              return d = (w & 65535) << 18 >> 16, _6(r, 782 + (d << 1) | 0, j1, t, b, E, O), r5(r, 0, a, c0, e0, G1, R0, O), a = (a2(14, e[e0 >> 1] | 0, O) | 0) & 65535, _6(r, 782 + ((d | 2) << 1) | 0, a, e[c0 >> 1] | 0, S, D, O), C = r0, w | 0;
            }
            function _6(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0;
              if (w = C, C = C + 16 | 0, f = w + 2 | 0, c = w, e[o >> 1] = e[t >> 1] | 0, a = e[t + 2 >> 1] | 0, i = k(i << 16 >> 16 << 1, a) | 0, o = 10 - (n & 65535) | 0, t = o & 65535, o = o << 16 >> 16, t << 16 >> 16 > 0 ? t = t << 16 >> 16 < 31 ? i >> o : 0 : (o = 0 - o << 16 >> 16, t = i << o, t = (t >> o | 0) == (i | 0) ? t : i >> 31 ^ 2147483647), e[s >> 1] = t >>> 16, N2(a, f, c, u), e[f >> 1] = (R[f >> 1] | 0) + 65524, o = d5(e[c >> 1] | 0, 5, u) | 0, n = e[f >> 1] | 0, o = ((n & 65535) << 10) + (o & 65535) & 65535, i = e[c >> 1] | 0, n = n << 16 >> 16, (n * 24660 | 0) == 1073741824 ? (l[u >> 2] = 1, t = 2147483647) : t = n * 49320 | 0, c = (i << 16 >> 16) * 24660 >> 15, n = t + (c << 1) | 0, !((t ^ c | 0) > 0 & (n ^ t | 0) < 0)) {
                u = n, u = u << 13, u = u + 32768 | 0, u = u >>> 16, u = u & 65535, b2(r, o, u), C = w;
                return;
              }
              l[u >> 2] = 1, u = (t >>> 31) + 2147483647 | 0, u = u << 13, u = u + 32768 | 0, u = u >>> 16, u = u & 65535, b2(r, o, u), C = w;
            }
            function Ir(r, t, i, n, o, s, u, a, f, c, w, v, p, m, d, b, E, S, D, O, I) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0, p = p | 0, m = m | 0, d = d | 0, b = b | 0, E = E | 0, S = S | 0, D = D | 0, O = O | 0, I = I | 0;
              var M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0, R1 = 0, Z = 0, G = 0, T1 = 0, Q1 = 0, B1 = 0, t0 = 0, j1 = 0, G1 = 0, c0 = 0, e0 = 0, R0 = 0, r0 = 0, m0 = 0, S0 = 0, _0 = 0, n0 = 0;
              for (n0 = C, C = C + 80 | 0, m0 = n0 + 72 | 0, S0 = n0 + 70 | 0, _0 = n0 + 68 | 0, R0 = n0 + 66 | 0, r0 = n0 + 56 | 0, T1 = n0 + 24 | 0, G = n0 + 12 | 0, R1 = n0 + 48 | 0, Z = n0 + 40 | 0, _1 = n0 + 34 | 0, i1 = n0 + 22 | 0, f1 = n0 + 6 | 0, d1 = n0, E6(5, m, d, f1, d1, l[O + 72 >> 2] | 0, I) | 0, B = a2(14, c, I) | 0, b1 = O + 68 | 0, s1 = l[b1 >> 2] | 0, k1 = f << 16 >> 16, h1 = k1 + 65526 | 0, m = (R[s >> 1] | 0) + 65523 & 65535, e[r0 >> 1] = m, O = (R[s + 2 >> 1] | 0) + 65522 & 65535, e[r0 + 2 >> 1] = O, G1 = h1 << 16 >> 16, c0 = ((h1 << 17 >> 17 | 0) == (G1 | 0) ? h1 << 1 : G1 >>> 15 ^ 32767) + 15 + (R[s + 4 >> 1] | 0) & 65535, e[r0 + 4 >> 1] = c0, e0 = (R[s + 6 >> 1] | 0) + G1 & 65535, e[r0 + 6 >> 1] = e0, s = G1 + 1 + (R[s + 8 >> 1] | 0) & 65535, e[r0 + 8 >> 1] = s, O = O << 16 >> 16 > m << 16 >> 16 ? O : m, O = c0 << 16 >> 16 > O << 16 >> 16 ? c0 : O, O = e0 << 16 >> 16 > O << 16 >> 16 ? e0 : O, O = (a1(s << 16 >> 16 > O << 16 >> 16 ? s : O, 1, I) | 0) & 65535, s = m, m = 0; c = O - (s & 65535) | 0, s = c & 65535, F = R[o + (m << 1) >> 1] << 16, c = c << 16 >> 16, s << 16 >> 16 > 0 ? c = s << 16 >> 16 < 31 ? F >> c : 0 : (e0 = 0 - c << 16 >> 16, c = F << e0, c = (c >> e0 | 0) == (F | 0) ? c : F >> 31 ^ 2147483647), e2(c, T1 + (m << 1) | 0, G + (m << 1) | 0, I), c = m + 1 | 0, (c | 0) != 5; ) s = e[r0 + (c << 1) >> 1] | 0, m = c;
              for (e1 = T1 + 2 | 0, Y = G + 2 | 0, e0 = B << 16 >> 16, Q1 = T1 + 4 | 0, B1 = G + 4 | 0, t0 = T1 + 6 | 0, j1 = G + 6 | 0, G1 = T1 + 8 | 0, c0 = G + 8 | 0, L = 0, s = 2147483647, o = 0, c = 0; ; ) {
                H = e[f1 + (o << 1) >> 1] | 0, B = k(H, H) | 0, B >>> 0 > 1073741823 ? (l[I >> 2] = 1, B = 32767) : B = B >>> 15, O = e[G >> 1] | 0, F = B << 16 >> 16, B = k(F, e[T1 >> 1] | 0) | 0, (B | 0) == 1073741824 ? (l[I >> 2] = 1, m = 2147483647) : m = B << 1, x = (k(O << 16 >> 16, F) | 0) >> 15, B = m + (x << 1) | 0, (m ^ x | 0) > 0 & (B ^ m | 0) < 0 && (l[I >> 2] = 1, B = (m >>> 31) + 2147483647 | 0), O = e[Y >> 1] | 0, F = k(e[e1 >> 1] | 0, H) | 0, (F | 0) != 1073741824 ? (m = (F << 1) + B | 0, (F ^ B | 0) > 0 & (m ^ B | 0) < 0 && (l[I >> 2] = 1, m = (B >>> 31) + 2147483647 | 0)) : (l[I >> 2] = 1, m = 2147483647), B = (k(O << 16 >> 16, H) | 0) >> 15, (B | 0) > 32767 && (l[I >> 2] = 1, B = 32767), x = B << 16, B = (x >> 15) + m | 0, (x >> 16 ^ m | 0) > 0 & (B ^ m | 0) < 0 ? (l[I >> 2] = 1, x = (m >>> 31) + 2147483647 | 0) : x = B, Q = (x >>> 31) + 2147483647 | 0, W = o & 65535, B = L, g = 0, K = s1;
                do {
                  F = (k(e[K >> 1] | 0, e0) | 0) >> 15, K = K + 6 | 0, (F | 0) > 32767 && (l[I >> 2] = 1, F = 32767), V = F << 16 >> 16, F = k(V, V) | 0, (F | 0) == 1073741824 ? (l[I >> 2] = 1, T = 2147483647) : T = F << 1, e2(T, m0, S0, I), F = k(V, H) | 0, (F | 0) == 1073741824 ? (l[I >> 2] = 1, T = 2147483647) : T = F << 1, e2(T, _0, R0, I), m = e[B1 >> 1] | 0, U = e[S0 >> 1] | 0, F = e[Q1 >> 1] | 0, O = e[m0 >> 1] | 0, L = k(O, F) | 0, (L | 0) != 1073741824 ? (T = (L << 1) + x | 0, (L ^ x | 0) > 0 & (T ^ x | 0) < 0 && (l[I >> 2] = 1, T = Q)) : (l[I >> 2] = 1, T = 2147483647), L = (k(U << 16 >> 16, F) | 0) >> 15, (L | 0) > 32767 && (l[I >> 2] = 1, L = 32767), U = L << 16, L = (U >> 15) + T | 0, (U >> 16 ^ T | 0) > 0 & (L ^ T | 0) < 0 && (l[I >> 2] = 1, L = (T >>> 31) + 2147483647 | 0), T = (k(O, m << 16 >> 16) | 0) >> 15, (T | 0) > 32767 && (l[I >> 2] = 1, T = 32767), U = T << 16, T = (U >> 15) + L | 0, (U >> 16 ^ L | 0) > 0 & (T ^ L | 0) < 0 && (l[I >> 2] = 1, T = (L >>> 31) + 2147483647 | 0), F = e[j1 >> 1] | 0, L = k(e[t0 >> 1] | 0, V) | 0, (L | 0) != 1073741824 ? (U = (L << 1) + T | 0, (L ^ T | 0) > 0 & (U ^ T | 0) < 0 && (l[I >> 2] = 1, U = (T >>> 31) + 2147483647 | 0)) : (l[I >> 2] = 1, U = 2147483647), F = (k(F << 16 >> 16, V) | 0) >> 15, (F | 0) > 32767 && (l[I >> 2] = 1, F = 32767), V = F << 16, F = (V >> 15) + U | 0, (V >> 16 ^ U | 0) > 0 & (F ^ U | 0) < 0 && (l[I >> 2] = 1, F = (U >>> 31) + 2147483647 | 0), O = e[c0 >> 1] | 0, U = e[R0 >> 1] | 0, m = e[G1 >> 1] | 0, M = e[_0 >> 1] | 0, L = k(M, m) | 0;
                  do
                    if ((L | 0) == 1073741824) l[I >> 2] = 1, L = 2147483647;
                    else {
                      if (T = (L << 1) + F | 0, !((L ^ F | 0) > 0 & (T ^ F | 0) < 0)) {
                        L = T;
                        break;
                      }
                      l[I >> 2] = 1, L = (F >>> 31) + 2147483647 | 0;
                    }
                  while (false);
                  T = (k(U << 16 >> 16, m) | 0) >> 15, (T | 0) > 32767 && (l[I >> 2] = 1, T = 32767), V = T << 16, T = (V >> 15) + L | 0, (V >> 16 ^ L | 0) > 0 & (T ^ L | 0) < 0 && (l[I >> 2] = 1, T = (L >>> 31) + 2147483647 | 0), F = (k(M, O << 16 >> 16) | 0) >> 15, (F | 0) > 32767 && (l[I >> 2] = 1, F = 32767), V = F << 16, F = (V >> 15) + T | 0, (V >> 16 ^ T | 0) > 0 & (F ^ T | 0) < 0 && (l[I >> 2] = 1, F = (T >>> 31) + 2147483647 | 0), V = (F | 0) < (s | 0), B = V ? g : B, c = V ? W : c, s = V ? F : s, g = g + 1 << 16 >> 16;
                } while (g << 16 >> 16 < 32);
                if (o = o + 1 | 0, (o | 0) == 3) {
                  F = B, o = c;
                  break;
                } else L = B;
              }
              if (Y = (F << 16 >> 16) * 3 | 0, s = e[s1 + (Y << 1) >> 1] | 0, e[E >> 1] = e[s1 + (Y + 1 << 1) >> 1] | 0, e[S >> 1] = e[s1 + (Y + 2 << 1) >> 1] | 0, s = k(s << 16 >> 16, e0) | 0, (s | 0) == 1073741824 ? (l[I >> 2] = 1, B = 2147483647) : B = s << 1, Y = 9 - k1 | 0, s1 = Y & 65535, Y = Y << 16 >> 16, e1 = s1 << 16 >> 16 > 0, e1 ? B = s1 << 16 >> 16 < 31 ? B >> Y : 0 : (x = 0 - Y << 16 >> 16, H = B << x, B = (H >> x | 0) == (B | 0) ? H : B >> 31 ^ 2147483647), e[b >> 1] = B >>> 16, H = o << 16 >> 16, f1 = e[f1 + (H << 1) >> 1] | 0, e[d >> 1] = f1, d1 = e[d1 + (H << 1) >> 1] | 0, V3(t, i, n, f1, w, R1, Z, _1, I), sr(r, e[_1 >> 1] | 0, e[b >> 1] | 0, i1, I), !((e[R1 >> 1] | 0) != 0 & (e[i1 >> 1] | 0) > 0)) {
                I = F, E = l[D >> 2] | 0, b = E + 2 | 0, e[E >> 1] = d1, E = E + 4 | 0, l[D >> 2] = E, e[b >> 1] = I, C = n0;
                return;
              }
              V = R1 + 6 | 0, e[V >> 1] = a, T = Z + 6 | 0, e[T >> 1] = u, f = ((P1(p, f, I) | 0) & 65535) + 10 | 0, O = f << 16 >> 16, (f & 65535) << 16 >> 16 < 0 ? (c = 0 - O << 16, (c | 0) < 983040 ? v = v << 16 >> 16 >> (c >> 16) & 65535 : v = 0) : (c = v << 16 >> 16, m = c << O, (m << 16 >> 16 >> O | 0) == (c | 0) ? v = m & 65535 : v = (c >>> 15 ^ 32767) & 65535), s = e[d >> 1] | 0, B = e[i1 >> 1] | 0, b1 = l[b1 >> 2] | 0, m = e[b >> 1] | 0, i1 = 10 - k1 | 0, O = i1 << 16 >> 16, (i1 & 65535) << 16 >> 16 < 0 ? (c = 0 - O << 16, (c | 0) < 983040 ? a = m << 16 >> 16 >> (c >> 16) & 65535 : a = 0) : (c = m << 16 >> 16, m = c << O, (m << 16 >> 16 >> O | 0) == (c | 0) ? a = m & 65535 : a = (c >>> 15 ^ 32767) & 65535), o = s << 16 >> 16, c = k(o, o) | 0, c >>> 0 > 1073741823 ? (l[I >> 2] = 1, s = 32767) : s = c >>> 15, F = a1(32767 - (B & 65535) & 65535, 1, I) | 0, B = B << 16 >> 16, c = k(e[R1 + 2 >> 1] | 0, B) | 0, (c | 0) == 1073741824 ? (l[I >> 2] = 1, c = 2147483647) : c = c << 1, i1 = c << 1, c = k(((i1 >> 1 | 0) == (c | 0) ? i1 : c >> 31 ^ 2147418112) >> 16, s << 16 >> 16) | 0, (c | 0) == 1073741824 ? (l[I >> 2] = 1, L = 2147483647) : L = c << 1, U = (R[Z + 2 >> 1] | 0) + 65521 | 0, O = U & 65535, c = k(e[R1 + 4 >> 1] | 0, B) | 0, (c | 0) == 1073741824 ? (l[I >> 2] = 1, s = 2147483647) : s = c << 1, c = s << 1, c = (k(((c >> 1 | 0) == (s | 0) ? c : s >> 31 ^ 2147418112) >> 16, o) | 0) >> 15, (c | 0) > 32767 && (l[I >> 2] = 1, c = 32767), e[Q1 >> 1] = c, s = h1 & 65535, e[m0 >> 1] = s, s = a1(e[Z + 4 >> 1] | 0, s, I) | 0, c = k(e[V >> 1] | 0, B) | 0, (c | 0) == 1073741824 ? (l[I >> 2] = 1, c = 2147483647) : c = c << 1, M = c << 1, e[t0 >> 1] = ((M >> 1 | 0) == (c | 0) ? M : c >> 31 ^ 2147418112) >>> 16, M = ((k1 << 17 >> 17 | 0) == (k1 | 0) ? k1 << 1 : k1 >>> 15 ^ 32767) + 65529 & 65535, e[m0 >> 1] = M, M = a1(e[T >> 1] | 0, M, I) | 0, c = (k(e[V >> 1] | 0, F << 16 >> 16) | 0) >> 15, (c | 0) > 32767 && (l[I >> 2] = 1, c = 32767), e[G1 >> 1] = c, F = a1(M, 1, I) | 0, m = k(e[R1 >> 1] | 0, B) | 0, (m | 0) == 1073741824 ? (l[I >> 2] = 1, c = 2147483647) : c = m << 1, T = be(c, m0, I) | 0, o = (R[m0 >> 1] | 0) + 47 | 0, e[m0 >> 1] = o, o = (R[Z >> 1] | 0) - (o & 65535) | 0, B = o + 31 & 65535, B = O << 16 >> 16 > B << 16 >> 16 ? O : B, B = s << 16 >> 16 > B << 16 >> 16 ? s : B, B = M << 16 >> 16 > B << 16 >> 16 ? M : B, B = (F << 16 >> 16 > B << 16 >> 16 ? F : B) << 16 >> 16, m = B - (U & 65535) | 0, c = m & 65535, m = m << 16 >> 16, c << 16 >> 16 > 0 ? x = c << 16 >> 16 < 31 ? L >> m : 0 : (Z = 0 - m << 16 >> 16, x = L << Z, x = (x >> Z | 0) == (L | 0) ? x : L >> 31 ^ 2147483647), O = B - (s & 65535) | 0, c = O & 65535, m = R[Q1 >> 1] << 16, O = O << 16 >> 16, c << 16 >> 16 > 0 ? m = c << 16 >> 16 < 31 ? m >> O : 0 : (R1 = 0 - O << 16 >> 16, Z = m << R1, m = (Z >> R1 | 0) == (m | 0) ? Z : m >> 31 ^ 2147483647), e2(m, Q1, B1, I), M = B - (M & 65535) | 0, m = M & 65535, O = R[t0 >> 1] << 16, M = M << 16 >> 16, m << 16 >> 16 > 0 ? m = m << 16 >> 16 < 31 ? O >> M : 0 : (Z = 0 - M << 16 >> 16, m = O << Z, m = (m >> Z | 0) == (O | 0) ? m : O >> 31 ^ 2147483647), e2(m, t0, j1, I), M = B - (F & 65535) | 0, m = M & 65535, O = R[G1 >> 1] << 16, M = M << 16 >> 16, m << 16 >> 16 > 0 ? m = m << 16 >> 16 < 31 ? O >> M : 0 : (Z = 0 - M << 16 >> 16, m = O << Z, m = (m >> Z | 0) == (O | 0) ? m : O >> 31 ^ 2147483647), e2(m, G1, c0, I), M = B + 65505 | 0, e[m0 >> 1] = M, M = M - (o & 65535) | 0, m = o0(M & 65535, 1, I) | 0, O = m << 16 >> 16, m << 16 >> 16 > 0 ? O = m << 16 >> 16 < 31 ? T >> O : 0 : (Z = 0 - O << 16 >> 16, O = T << Z, O = (O >> Z | 0) == (T | 0) ? O : T >> 31 ^ 2147483647);
              do
                if (!(M & 1)) L = O;
                else {
                  if (e2(O, T1, G, I), m = e[G >> 1] | 0, O = e[T1 >> 1] | 0, (O * 23170 | 0) == 1073741824 ? (l[I >> 2] = 1, M = 2147483647) : M = O * 46340 | 0, T1 = (m << 16 >> 16) * 23170 >> 15, O = M + (T1 << 1) | 0, !((M ^ T1 | 0) > 0 & (O ^ M | 0) < 0)) {
                    L = O;
                    break;
                  }
                  l[I >> 2] = 1, L = (M >>> 31) + 2147483647 | 0;
                }
              while (false);
              for (V = (x >>> 31) + 2147483647 | 0, T = 2147483647, U = 0, O = 0, g = b1; m = (k(e[g >> 1] | 0, e0) | 0) >> 15, g = g + 6 | 0, (m | 0) > 32767 && (l[I >> 2] = 1, m = 32767), M = m & 65535, !(M << 16 >> 16 >= a << 16 >> 16); ) {
                s = m << 16 >> 16, m = k(s, s) | 0, (m | 0) == 1073741824 ? (l[I >> 2] = 1, c = 2147483647) : c = m << 1, e2(c, S0, _0, I), m = (P1(M, v, I) | 0) << 16 >> 16, m = k(m, m) | 0, (m | 0) == 1073741824 ? (l[I >> 2] = 1, m = 2147483647) : m = m << 1, e2(m, R0, r0, I), M = e[B1 >> 1] | 0, c = k(e[Q1 >> 1] | 0, s) | 0;
                do
                  if ((c | 0) == 1073741824) l[I >> 2] = 1, c = 2147483647;
                  else {
                    if (m = (c << 1) + x | 0, !((c ^ x | 0) > 0 & (m ^ x | 0) < 0)) {
                      c = m;
                      break;
                    }
                    l[I >> 2] = 1, c = V;
                  }
                while (false);
                m = (k(M << 16 >> 16, s) | 0) >> 15, (m | 0) > 32767 && (l[I >> 2] = 1, m = 32767), T1 = m << 16, m = (T1 >> 15) + c | 0, (T1 >> 16 ^ c | 0) > 0 & (m ^ c | 0) < 0 && (l[I >> 2] = 1, m = (c >>> 31) + 2147483647 | 0), o = e[j1 >> 1] | 0, F = e[_0 >> 1] | 0, s = e[t0 >> 1] | 0, B = e[S0 >> 1] | 0, c = k(B, s) | 0;
                do
                  if ((c | 0) == 1073741824) l[I >> 2] = 1, M = 2147483647;
                  else {
                    if (M = (c << 1) + m | 0, !((c ^ m | 0) > 0 & (M ^ m | 0) < 0)) break;
                    l[I >> 2] = 1, M = (m >>> 31) + 2147483647 | 0;
                  }
                while (false);
                c = (k(F << 16 >> 16, s) | 0) >> 15, (c | 0) > 32767 && (l[I >> 2] = 1, c = 32767), T1 = c << 16, c = (T1 >> 15) + M | 0, (T1 >> 16 ^ M | 0) > 0 & (c ^ M | 0) < 0 && (l[I >> 2] = 1, c = (M >>> 31) + 2147483647 | 0), m = (k(B, o << 16 >> 16) | 0) >> 15, (m | 0) > 32767 && (l[I >> 2] = 1, m = 32767), T1 = m << 16, m = (T1 >> 15) + c | 0, (T1 >> 16 ^ c | 0) > 0 & (m ^ c | 0) < 0 && (l[I >> 2] = 1, m = (c >>> 31) + 2147483647 | 0), m = be(m, m0, I) | 0, M = o0(e[m0 >> 1] | 0, 1, I) | 0, c = M << 16 >> 16, M << 16 >> 16 > 0 ? M = M << 16 >> 16 < 31 ? m >> c : 0 : (T1 = 0 - c << 16 >> 16, M = m << T1, M = (M >> T1 | 0) == (m | 0) ? M : m >> 31 ^ 2147483647), m = M - L | 0, ((m ^ M) & (M ^ L) | 0) < 0 && (l[I >> 2] = 1, m = (M >>> 31) + 2147483647 | 0), m = (N1(m, I) | 0) << 16 >> 16, m = k(m, m) | 0, (m | 0) == 1073741824 ? (l[I >> 2] = 1, M = 2147483647) : M = m << 1, B = e[c0 >> 1] | 0, s = e[r0 >> 1] | 0, F = e[G1 >> 1] | 0, o = e[R0 >> 1] | 0, c = k(o, F) | 0;
                do
                  if ((c | 0) == 1073741824) l[I >> 2] = 1, m = 2147483647;
                  else {
                    if (m = (c << 1) + M | 0, !((c ^ M | 0) > 0 & (m ^ M | 0) < 0)) break;
                    l[I >> 2] = 1, m = (M >>> 31) + 2147483647 | 0;
                  }
                while (false);
                if (c = (k(s << 16 >> 16, F) | 0) >> 15, (c | 0) > 32767 && (l[I >> 2] = 1, c = 32767), T1 = c << 16, c = (T1 >> 15) + m | 0, (T1 >> 16 ^ m | 0) > 0 & (c ^ m | 0) < 0 && (l[I >> 2] = 1, c = (m >>> 31) + 2147483647 | 0), m = (k(o, B << 16 >> 16) | 0) >> 15, (m | 0) > 32767 && (l[I >> 2] = 1, m = 32767), T1 = m << 16, m = (T1 >> 15) + c | 0, (T1 >> 16 ^ c | 0) > 0 & (m ^ c | 0) < 0 && (l[I >> 2] = 1, m = (c >>> 31) + 2147483647 | 0), c = (m | 0) < (T | 0), O = c ? U : O, U = U + 1 << 16 >> 16, U << 16 >> 16 >= 32) break;
                T = c ? m : T;
              }
              _0 = (O << 16 >> 16) * 3 | 0, M = e[b1 + (_0 << 1) >> 1] | 0, e[E >> 1] = e[b1 + (_0 + 1 << 1) >> 1] | 0, e[S >> 1] = e[b1 + (_0 + 2 << 1) >> 1] | 0, M = k(M << 16 >> 16, e0) | 0, (M | 0) == 1073741824 ? (l[I >> 2] = 1, M = 2147483647) : M = M << 1, e1 ? M = s1 << 16 >> 16 < 31 ? M >> Y : 0 : (E = 0 - Y << 16 >> 16, I = M << E, M = (I >> E | 0) == (M | 0) ? I : M >> 31 ^ 2147483647), e[b >> 1] = M >>> 16, I = O, E = l[D >> 2] | 0, b = E + 2 | 0, e[E >> 1] = d1, E = E + 4 | 0, l[D >> 2] = E, e[b >> 1] = I, C = n0;
            }
            function Or(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0;
              for (p = (r | 0) == 7, f = e[n >> 1] | 0, p ? (f = f << 16 >> 16 >>> 1 & 65535, v = a2(t, i, a) | 0, t = v << 16, r = t >> 16, (v << 20 >> 20 | 0) == (r | 0) ? r = t >> 12 : r = r >>> 15 ^ 32767) : (v = a2(t, i, a) | 0, t = v << 16, r = t >> 16, (v << 21 >> 21 | 0) == (r | 0) ? r = t >> 11 : r = r >>> 15 ^ 32767), v = r << 16 >> 16, a = f << 16 >> 16, t = a - ((k(v, e[u >> 1] | 0) | 0) >>> 15 & 65535) | 0, t = ((t & 32768 | 0) != 0 ? 0 - t | 0 : t) & 65535, c = 1, r = 0, w = u; w = w + 6 | 0, f = a - ((k(e[w >> 1] | 0, v) | 0) >>> 15 & 65535) | 0, i = f << 16, f = (i | 0) < 0 ? 0 - (i >> 16) | 0 : f, i = (f << 16 >> 16 | 0) < (t << 16 >> 16 | 0), r = i ? c : r, c = c + 1 << 16 >> 16, !(c << 16 >> 16 >= 32); ) t = i ? f & 65535 : t;
              return w = (r << 16 >> 16) * 196608 >> 16, e[n >> 1] = (k(e[u + (w << 1) >> 1] | 0, v) | 0) >>> 15 << (p & 1), e[o >> 1] = e[u + (w + 1 << 1) >> 1] | 0, e[s >> 1] = e[u + (w + 2 << 1) >> 1] | 0, r | 0;
            }
            function E6(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0;
              for (a = P1(e[i >> 1] | 0, e[s >> 1] | 0, u) | 0, a = (a & 65535) - ((a & 65535) >>> 15 & 65535) | 0, a = (a << 16 >> 31 ^ a) & 65535, c = 0, w = 1; f = e[s + (w << 1) >> 1] | 0, f << 16 >> 16 > t << 16 >> 16 ? f = a : (f = P1(e[i >> 1] | 0, f, u) | 0, f = (f & 65535) - ((f & 65535) >>> 15 & 65535) | 0, f = (f << 16 >> 31 ^ f) & 65535, p = f << 16 >> 16 < a << 16 >> 16, f = p ? f : a, c = p ? w & 65535 : c), w = w + 1 | 0, (w | 0) != 16; ) a = f;
              if ((r | 0) != 5) return a = e[s + (c << 16 >> 16 << 1) >> 1] | 0, (r | 0) == 7 ? (e[i >> 1] = a & 65532, c | 0) : (e[i >> 1] = a, c | 0);
              switch (f = c << 16 >> 16, c << 16 >> 16) {
                case 0: {
                  a = 0;
                  break;
                }
                case 15: {
                  v = 8;
                  break;
                }
                default:
                  (e[s + (f + 1 << 1) >> 1] | 0) > t << 16 >> 16 ? v = 8 : a = f + 65535 & 65535;
              }
              return (v | 0) == 8 && (a = f + 65534 & 65535), e[o >> 1] = a, p = a << 16 >> 16, e[n >> 1] = e[s + (p << 1) >> 1] | 0, p = p + 1 | 0, e[o + 2 >> 1] = p, p = p << 16 >> 16, e[n + 2 >> 1] = e[s + (p << 1) >> 1] | 0, p = p + 1 | 0, e[o + 4 >> 1] = p, e[n + 4 >> 1] = e[s + (p << 16 >> 16 << 1) >> 1] | 0, e[i >> 1] = e[s + (f << 1) >> 1] | 0, c | 0;
            }
            function Lr(r, t, i, n, o, s, u, a, f, c, w, v) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0;
              var p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0;
              switch (x = C, C = C + 32 | 0, d = x + 20 | 0, b = x + 10 | 0, m = x, r | 0) {
                case 3:
                case 4:
                case 6: {
                  w = w + 84 | 0, W = 128;
                  break;
                }
                default:
                  w = w + 80 | 0, W = 64;
              }
              for (Q = l[w >> 2] | 0, p = a2(14, i, v) | 0, K = t << 16 >> 16, g = K + 65525 | 0, r = (R[o >> 1] | 0) + 65523 & 65535, e[m >> 1] = r, t = (R[o + 2 >> 1] | 0) + 65522 & 65535, e[m + 2 >> 1] = t, V = g << 16 >> 16, V = a1(e[o + 4 >> 1] | 0, ((g << 17 >> 17 | 0) == (V | 0) ? g << 1 : V >>> 15 ^ 32767) + 15 & 65535, v) | 0, e[m + 4 >> 1] = V, g = a1(e[o + 6 >> 1] | 0, g & 65535, v) | 0, e[m + 6 >> 1] = g, o = a1(e[o + 8 >> 1] | 0, K + 65526 & 65535, v) | 0, e[m + 8 >> 1] = o, t = t << 16 >> 16 > r << 16 >> 16 ? t : r, t = V << 16 >> 16 > t << 16 >> 16 ? V : t, t = g << 16 >> 16 > t << 16 >> 16 ? g : t, t = (o << 16 >> 16 > t << 16 >> 16 ? o : t) + 1 & 65535, o = 0; i = t - (r & 65535) | 0, w = i & 65535, r = R[n + (o << 1) >> 1] << 16, i = i << 16 >> 16, w << 16 >> 16 > 0 ? w = w << 16 >> 16 < 31 ? r >> i : 0 : (g = 0 - i << 16 >> 16, w = r << g, w = (w >> g | 0) == (r | 0) ? w : r >> 31 ^ 2147483647), e2(w, d + (o << 1) | 0, b + (o << 1) | 0, v), w = o + 1 | 0, (w | 0) != 5; ) r = e[m + (w << 1) >> 1] | 0, o = w;
              for (g = p << 16 >> 16, I = e[d >> 1] | 0, M = e[b >> 1] | 0, F = e[d + 2 >> 1] | 0, B = e[b + 2 >> 1] | 0, U = e[d + 4 >> 1] | 0, T = e[b + 4 >> 1] | 0, L = e[d + 6 >> 1] | 0, V = e[b + 6 >> 1] | 0, O = e[d + 8 >> 1] | 0, E = e[b + 8 >> 1] | 0, t = 2147483647, S = 0, w = 0, D = Q; o = e[D >> 1] | 0, o << 16 >> 16 > s << 16 >> 16 ? p = t : (p = (k(e[D + 2 >> 1] | 0, g) | 0) >> 15, (p | 0) > 32767 && (l[v >> 2] = 1, p = 32767), b = o << 16 >> 16, o = k(b, b) | 0, o >>> 0 > 1073741823 ? (l[v >> 2] = 1, m = 32767) : m = o >>> 15, i = p << 16 >> 16, p = k(i, i) | 0, p >>> 0 > 1073741823 ? (l[v >> 2] = 1, d = 32767) : d = p >>> 15, n = (k(i, b) | 0) >> 15, (n | 0) > 32767 && (l[v >> 2] = 1, n = 32767), p = m << 16 >> 16, m = k(I, p) | 0, (m | 0) == 1073741824 ? (l[v >> 2] = 1, o = 2147483647) : o = m << 1, p = (k(M, p) | 0) >> 15, m = o + (p << 1) | 0, (o ^ p | 0) > 0 & (m ^ o | 0) < 0 && (l[v >> 2] = 1, m = (o >>> 31) + 2147483647 | 0), p = k(F, b) | 0, (p | 0) == 1073741824 ? (l[v >> 2] = 1, o = 2147483647) : o = p << 1, b = (k(B, b) | 0) >> 15, p = o + (b << 1) | 0, (o ^ b | 0) > 0 & (p ^ o | 0) < 0 && (l[v >> 2] = 1, p = (o >>> 31) + 2147483647 | 0), o = p + m | 0, (p ^ m | 0) > -1 & (o ^ m | 0) < 0 && (l[v >> 2] = 1, o = (m >>> 31) + 2147483647 | 0), p = d << 16 >> 16, m = k(U, p) | 0, (m | 0) == 1073741824 ? (l[v >> 2] = 1, r = 2147483647) : r = m << 1, b = (k(T, p) | 0) >> 15, m = r + (b << 1) | 0, (r ^ b | 0) > 0 & (m ^ r | 0) < 0 && (l[v >> 2] = 1, m = (r >>> 31) + 2147483647 | 0), p = m + o | 0, (m ^ o | 0) > -1 & (p ^ o | 0) < 0 ? (l[v >> 2] = 1, r = (o >>> 31) + 2147483647 | 0) : r = p, p = k(L, i) | 0, (p | 0) == 1073741824 ? (l[v >> 2] = 1, m = 2147483647) : m = p << 1, b = (k(V, i) | 0) >> 15, p = m + (b << 1) | 0, (m ^ b | 0) > 0 & (p ^ m | 0) < 0 && (l[v >> 2] = 1, p = (m >>> 31) + 2147483647 | 0), o = p + r | 0, (p ^ r | 0) > -1 & (o ^ r | 0) < 0 ? (l[v >> 2] = 1, m = (r >>> 31) + 2147483647 | 0) : m = o, o = n << 16 >> 16, p = k(O, o) | 0, (p | 0) == 1073741824 ? (l[v >> 2] = 1, r = 2147483647) : r = p << 1, b = (k(E, o) | 0) >> 15, p = r + (b << 1) | 0, (r ^ b | 0) > 0 & (p ^ r | 0) < 0 ? (l[v >> 2] = 1, o = (r >>> 31) + 2147483647 | 0) : o = p, p = o + m | 0, (o ^ m | 0) > -1 & (p ^ m | 0) < 0 && (l[v >> 2] = 1, p = (m >>> 31) + 2147483647 | 0), b = (p | 0) < (t | 0), p = b ? p : t, w = b ? S : w), D = D + 8 | 0, S = S + 1 << 16 >> 16, !((S << 16 >> 16 | 0) >= (W | 0)); ) t = p;
              return s = w << 16 >> 16, s = ((s << 18 >> 18 | 0) == (s | 0) ? s << 2 : s >>> 15 ^ 32767) << 16 >> 16, e[u >> 1] = e[Q + (s << 1) >> 1] | 0, t = e[Q + (s + 1 << 1) >> 1] | 0, e[f >> 1] = e[Q + (s + 2 << 1) >> 1] | 0, e[c >> 1] = e[Q + (s + 3 << 1) >> 1] | 0, t = k(t << 16 >> 16, g) | 0, (t | 0) == 1073741824 ? (l[v >> 2] = 1, r = 2147483647) : r = t << 1, i = 10 - K | 0, t = i & 65535, i = i << 16 >> 16, t << 16 >> 16 > 0 ? (v = t << 16 >> 16 < 31 ? r >> i : 0, v = v >>> 16, v = v & 65535, e[a >> 1] = v, C = x, w | 0) : (f = 0 - i << 16 >> 16, v = r << f, v = (v >> f | 0) == (r | 0) ? v : r >> 31 ^ 2147483647, v = v >>> 16, v = v & 65535, e[a >> 1] = v, C = x, w | 0);
            }
            function y6(r, t, i, n, o, s, u, a, f) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0;
              var c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0, R1 = 0, Z = 0, G = 0, T1 = 0, Q1 = 0, B1 = 0, t0 = 0, j1 = 0, G1 = 0, c0 = 0, e0 = 0, R0 = 0, r0 = 0, m0 = 0, S0 = 0, _0 = 0, n0 = 0, U0 = 0, h2 = 0, E2 = 0, W0 = 0, F0 = 0, D0 = 0, x1 = 0, z0 = 0, X2 = 0, K2 = 0, r2 = 0, F2 = 0;
              if (F2 = C, C = C + 160 | 0, r2 = F2, w = r << 16 >> 16, X2 = r << 16 >> 16 == 10, K2 = e[u + (e[s >> 1] << 1) >> 1] | 0, r << 16 >> 16 > 0) for (f = 0, c = a; e[c >> 1] = f, f = f + 1 << 16 >> 16, !(f << 16 >> 16 >= r << 16 >> 16); ) c = c + 2 | 0;
              if (i << 16 >> 16 <= 1) {
                C = F2;
                return;
              }
              for (x1 = s + 2 | 0, z0 = K2 << 16 >> 16, W0 = n + (z0 << 1) | 0, F0 = o + (z0 * 80 | 0) + (z0 << 1) | 0, D0 = s + 6 | 0, G = t & 65535, T1 = s + 4 | 0, Q1 = s + 10 | 0, B1 = s + 8 | 0, t0 = s + 14 | 0, j1 = s + 12 | 0, G1 = s + 18 | 0, c0 = s + 16 | 0, e0 = a + 2 | 0, R0 = a + 4 | 0, r0 = a + 6 | 0, m0 = a + 8 | 0, S0 = a + 10 | 0, _0 = a + 12 | 0, n0 = a + 14 | 0, U0 = a + 16 | 0, h2 = a + 18 | 0, E2 = r << 16 >> 16 > 2, R1 = s + (w + -1 << 1) | 0, h1 = 1, Z = 1, s1 = 0, f1 = 0, k1 = -1; ; ) {
                if (i1 = e[u + (e[x1 >> 1] << 1) >> 1] | 0, b1 = i1 << 16 >> 16, t = (R[n + (b1 << 1) >> 1] | 0) + (R[W0 >> 1] | 0) | 0, c = (e[o + (z0 * 80 | 0) + (b1 << 1) >> 1] << 13) + 32768 + ((e[o + (b1 * 80 | 0) + (b1 << 1) >> 1] | 0) + (e[F0 >> 1] | 0) << 12) | 0, w = e[D0 >> 1] | 0, w << 16 >> 16 < 40) {
                  for (w = w << 16 >> 16, v = r2; d1 = (e[o + (w * 80 | 0) + (w << 1) >> 1] | 0) >>> 1, Y = e[o + (w * 80 | 0) + (z0 << 1) >> 1] | 0, _1 = e[o + (w * 80 | 0) + (b1 << 1) >> 1] | 0, e[v >> 1] = t + (R[n + (w << 1) >> 1] | 0), e[v + 2 >> 1] = (Y + 2 + d1 + _1 | 0) >>> 2, w = w + G | 0, (w & 65535) << 16 >> 16 < 40; ) w = w << 16 >> 16, v = v + 4 | 0;
                  U = e[D0 >> 1] | 0;
                } else U = w;
                t = e[T1 >> 1] | 0, B = c >> 12, w = t << 16 >> 16;
                e: do
                  if (t << 16 >> 16 < 40) {
                    if (F = U << 16 >> 16, U << 16 >> 16 < 40) v = 1, m = t, b = U, d = 0, p = -1;
                    else for (; ; ) if (w = w + G | 0, (w & 65535) << 16 >> 16 < 40) w = w << 16 >> 16;
                    else {
                      v = 1, _1 = t, d1 = U, w = 0;
                      break e;
                    }
                    for (; ; ) {
                      for (M = ((e[o + (w * 80 | 0) + (w << 1) >> 1] | 0) + B >> 1) + (e[o + (w * 80 | 0) + (z0 << 1) >> 1] | 0) + (e[o + (w * 80 | 0) + (b1 << 1) >> 1] | 0) | 0, I = R[n + (w << 1) >> 1] | 0, D = F, O = U, S = r2, E = d; c = (R[S >> 1] | 0) + I | 0, f = c << 16 >> 16, f = (k(f, f) | 0) >>> 15, d = (M + (e[o + (w * 80 | 0) + (D << 1) >> 1] | 0) >> 2) + (e[S + 2 >> 1] | 0) >> 1, (k(f << 16 >> 16, v << 16 >> 16) | 0) > (k(d, p << 16 >> 16) | 0) ? (v = d & 65535, m = t, b = O, d = c & 65535, p = f & 65535) : d = E, c = D + G | 0, O = c & 65535, !(O << 16 >> 16 >= 40); ) D = c << 16 >> 16, S = S + 4 | 0, E = d;
                      if (w = w + G | 0, t = w & 65535, t << 16 >> 16 < 40) w = w << 16 >> 16;
                      else {
                        _1 = m, d1 = b, w = d;
                        break;
                      }
                    }
                  } else v = 1, _1 = t, d1 = U, w = 0;
                while (false);
                if (m = v << 16 >> 16 << 15, v = e[Q1 >> 1] | 0, v << 16 >> 16 < 40) {
                  for (c = _1 << 16 >> 16, f = d1 << 16 >> 16, t = w & 65535, v = v << 16 >> 16, w = r2; x = e[o + (v * 80 | 0) + (v << 1) >> 1] >> 1, W = e[o + (v * 80 | 0) + (z0 << 1) >> 1] | 0, H = e[o + (v * 80 | 0) + (b1 << 1) >> 1] | 0, e1 = e[o + (v * 80 | 0) + (c << 1) >> 1] | 0, Y = e[o + (v * 80 | 0) + (f << 1) >> 1] | 0, e[w >> 1] = (R[n + (v << 1) >> 1] | 0) + t, e[w + 2 >> 1] = (W + 2 + x + H + e1 + Y | 0) >>> 2, v = v + G | 0, (v & 65535) << 16 >> 16 < 40; ) v = v << 16 >> 16, w = w + 4 | 0;
                  x = e[Q1 >> 1] | 0;
                } else x = v;
                p = e[B1 >> 1] | 0, v = p << 16 >> 16;
                e: do
                  if (p << 16 >> 16 < 40) {
                    if (T = _1 << 16 >> 16, L = d1 << 16 >> 16, V = x << 16 >> 16, U = m + 32768 | 0, x << 16 >> 16 < 40) d = 1, m = p, t = x, b = p, w = 0, p = -1;
                    else for (; ; ) if (v = v + G | 0, (v & 65535) << 16 >> 16 < 40) v = v << 16 >> 16;
                    else {
                      v = 1, Y = p, e1 = x, w = 0;
                      break e;
                    }
                    for (; ; ) {
                      for (f = R[n + (v << 1) >> 1] | 0, B = (e[o + (v * 80 | 0) + (b1 << 1) >> 1] | 0) + (e[o + (v * 80 | 0) + (z0 << 1) >> 1] | 0) + (e[o + (v * 80 | 0) + (T << 1) >> 1] | 0) + (e[o + (v * 80 | 0) + (L << 1) >> 1] | 0) | 0, F = U + (e[o + (v * 80 | 0) + (v << 1) >> 1] << 11) | 0, I = V, D = x, M = r2; ; ) if (E = (R[M >> 1] | 0) + f | 0, c = F + (e[M + 2 >> 1] << 14) + (B + (e[o + (v * 80 | 0) + (I << 1) >> 1] | 0) << 12) | 0, S = E << 16 >> 16, S = (k(S, S) | 0) >>> 15, (k(S << 16 >> 16, d << 16 >> 16) | 0) > (k(c >> 16, p << 16 >> 16) | 0) ? (d = c >>> 16 & 65535, O = b, t = D, w = E & 65535, p = S & 65535) : O = m, m = I + G | 0, D = m & 65535, D << 16 >> 16 >= 40) {
                        m = O;
                        break;
                      } else I = m << 16 >> 16, m = O, M = M + 4 | 0;
                      if (v = v + G | 0, b = v & 65535, b << 16 >> 16 < 40) v = v << 16 >> 16;
                      else {
                        v = d, Y = m, e1 = t;
                        break;
                      }
                    }
                  } else v = 1, Y = p, e1 = x, w = 0;
                while (false);
                if (d = v << 16 >> 16 << 15, v = e[t0 >> 1] | 0, v << 16 >> 16 < 40) {
                  for (c = _1 << 16 >> 16, f = d1 << 16 >> 16, p = Y << 16 >> 16, m = e1 << 16 >> 16, t = w & 65535, v = v << 16 >> 16, w = r2; g = e[o + (v * 80 | 0) + (v << 1) >> 1] >> 1, V = e[o + (z0 * 80 | 0) + (v << 1) >> 1] | 0, K = e[o + (b1 * 80 | 0) + (v << 1) >> 1] | 0, Q = e[o + (c * 80 | 0) + (v << 1) >> 1] | 0, W = e[o + (f * 80 | 0) + (v << 1) >> 1] | 0, x = e[o + (p * 80 | 0) + (v << 1) >> 1] | 0, H = e[o + (m * 80 | 0) + (v << 1) >> 1] | 0, e[w >> 1] = (R[n + (v << 1) >> 1] | 0) + t, e[w + 2 >> 1] = (V + 4 + g + K + Q + W + x + H | 0) >>> 3, v = v + G | 0, (v & 65535) << 16 >> 16 < 40; ) v = v << 16 >> 16, w = w + 4 | 0;
                  t = e[t0 >> 1] | 0;
                } else t = v;
                if (b = e[j1 >> 1] | 0, b << 16 >> 16 < 40) for (x = _1 << 16 >> 16, g = d1 << 16 >> 16, V = Y << 16 >> 16, L = e1 << 16 >> 16, T = t << 16 >> 16, U = t << 16 >> 16 < 40, K = d + 32768 | 0, W = b << 16 >> 16, f = 1, O = b, D = t, Q = b, m = 0, v = -1; ; ) {
                  if (U) for (d = R[n + (W << 1) >> 1] | 0, w = (e[o + (W * 80 | 0) + (b1 << 1) >> 1] | 0) + (e[o + (W * 80 | 0) + (z0 << 1) >> 1] | 0) + (e[o + (W * 80 | 0) + (x << 1) >> 1] | 0) + (e[o + (W * 80 | 0) + (g << 1) >> 1] | 0) + (e[o + (W * 80 | 0) + (V << 1) >> 1] | 0) + (e[o + (W * 80 | 0) + (L << 1) >> 1] | 0) | 0, p = K + (e[o + (W * 80 | 0) + (W << 1) >> 1] << 10) | 0, S = T, b = t, F = D, B = r2; M = (R[B >> 1] | 0) + d | 0, D = p + (e[B + 2 >> 1] << 14) + (w + (e[o + (W * 80 | 0) + (S << 1) >> 1] | 0) << 11) | 0, I = M << 16 >> 16, I = (k(I, I) | 0) >>> 15, (k(I << 16 >> 16, f << 16 >> 16) | 0) > (k(D >> 16, v << 16 >> 16) | 0) ? (f = D >>> 16 & 65535, O = Q, D = b, m = M & 65535, v = I & 65535) : D = F, E = S + G | 0, b = E & 65535, !(b << 16 >> 16 >= 40); ) S = E << 16 >> 16, F = D, B = B + 4 | 0;
                  if (b = W + G | 0, Q = b & 65535, Q << 16 >> 16 >= 40) {
                    H = D;
                    break;
                  } else W = b << 16 >> 16;
                }
                else f = 1, O = b, H = t, m = 0, v = -1;
                if (X2) {
                  if (S = f << 16 >> 16 << 15, v = e[G1 >> 1] | 0, v << 16 >> 16 < 40) {
                    for (w = _1 << 16 >> 16, t = d1 << 16 >> 16, c = Y << 16 >> 16, f = e1 << 16 >> 16, d = O << 16 >> 16, b = H << 16 >> 16, p = m & 65535, v = v << 16 >> 16, m = r2; V = e[o + (v * 80 | 0) + (v << 1) >> 1] >> 1, L = e[o + (z0 * 80 | 0) + (v << 1) >> 1] | 0, g = e[o + (b1 * 80 | 0) + (v << 1) >> 1] | 0, K = e[o + (w * 80 | 0) + (v << 1) >> 1] | 0, Q = e[o + (t * 80 | 0) + (v << 1) >> 1] | 0, W = e[o + (c * 80 | 0) + (v << 1) >> 1] | 0, x = e[o + (f * 80 | 0) + (v << 1) >> 1] | 0, s1 = e[o + (d * 80 | 0) + (v << 1) >> 1] | 0, f1 = e[o + (b * 80 | 0) + (v << 1) >> 1] | 0, e[m >> 1] = (R[n + (v << 1) >> 1] | 0) + p, e[m + 2 >> 1] = (L + 4 + V + g + K + Q + W + x + s1 + f1 | 0) >>> 3, v = v + G | 0, (v & 65535) << 16 >> 16 < 40; ) v = v << 16 >> 16, m = m + 4 | 0;
                    x = e[G1 >> 1] | 0;
                  } else x = v;
                  if (d = e[c0 >> 1] | 0, d << 16 >> 16 < 40) for (V = _1 << 16 >> 16, L = d1 << 16 >> 16, T = Y << 16 >> 16, c = e1 << 16 >> 16, g = O << 16 >> 16, K = H << 16 >> 16, Q = x << 16 >> 16, W = x << 16 >> 16 < 40, U = S + 32768 | 0, w = d << 16 >> 16, f = 1, b = d, m = x, t = d, v = -1; ; ) {
                    if (W) for (S = R[n + (w << 1) >> 1] | 0, p = (e[o + (b1 * 80 | 0) + (w << 1) >> 1] | 0) + (e[o + (z0 * 80 | 0) + (w << 1) >> 1] | 0) + (e[o + (V * 80 | 0) + (w << 1) >> 1] | 0) + (e[o + (L * 80 | 0) + (w << 1) >> 1] | 0) + (e[o + (T * 80 | 0) + (w << 1) >> 1] | 0) + (e[o + (c * 80 | 0) + (w << 1) >> 1] | 0) + (e[o + (g * 80 | 0) + (w << 1) >> 1] | 0) + (e[o + (K * 80 | 0) + (w << 1) >> 1] | 0) | 0, d = U + (e[o + (w * 80 | 0) + (w << 1) >> 1] << 9) | 0, B = Q, I = x, F = r2; M = (R[F >> 1] | 0) + S << 16 >> 16, M = (k(M, M) | 0) >>> 15, D = d + (e[F + 2 >> 1] << 13) + (p + (e[o + (w * 80 | 0) + (B << 1) >> 1] | 0) << 10) | 0, (k(M << 16 >> 16, f << 16 >> 16) | 0) > (k(D >> 16, v << 16 >> 16) | 0) && (f = D >>> 16 & 65535, b = t, m = I, v = M & 65535), E = B + G | 0, I = E & 65535, !(I << 16 >> 16 >= 40); ) B = E << 16 >> 16, F = F + 4 | 0;
                    if (d = w + G | 0, t = d & 65535, t << 16 >> 16 >= 40) break;
                    w = d << 16 >> 16;
                  }
                  else f = 1, b = d, m = x, v = -1;
                } else b = s1, m = f1;
                if ((k(v << 16 >> 16, h1 << 16 >> 16) | 0) > (k(f << 16 >> 16, k1 << 16 >> 16) | 0) ? (e[a >> 1] = K2, e[e0 >> 1] = i1, e[R0 >> 1] = _1, e[r0 >> 1] = d1, e[m0 >> 1] = Y, e[S0 >> 1] = e1, e[_0 >> 1] = O, e[n0 >> 1] = H, X2 && (e[U0 >> 1] = b, e[h2 >> 1] = m)) : (f = h1, v = k1), w = e[x1 >> 1] | 0, E2) for (t = 1, c = 2; e[s + (t << 1) >> 1] = e[s + (c << 1) >> 1] | 0, c = c + 1 | 0, (c & 65535) << 16 >> 16 != r << 16 >> 16; ) t = t + 1 | 0;
                if (e[R1 >> 1] = w, Z = Z + 1 << 16 >> 16, Z << 16 >> 16 >= i << 16 >> 16) break;
                h1 = f, s1 = b, f1 = m, k1 = v;
              }
              C = F2;
            }
            function N5(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0;
              for (a = 39; u = r + (a << 1) | 0, s = e[u >> 1] | 0, o = t + (a << 1) | 0, s << 16 >> 16 > -1 ? e[o >> 1] = 32767 : (e[o >> 1] = -32767, s << 16 >> 16 == -32768 ? s = 32767 : s = 0 - (s & 65535) & 65535, e[u >> 1] = s), e[i + (a << 1) >> 1] = s, (a | 0) > 0; ) a = a + -1 | 0;
              if (c = 8 - (n << 16 >> 16) | 0, (c | 0) > 0) f = 0, o = 0;
              else return;
              do {
                for (n = 0, r = 0, u = 32767; t = e[i + (n << 1) >> 1] | 0, a = t << 16 >> 16 > -1 ? t << 16 >> 16 < u << 16 >> 16 : 0, o = a ? r : o, s = n + 5 | 0, r = s & 65535, !(r << 16 >> 16 >= 40); ) n = s << 16 >> 16, u = a ? t : u;
                e[i + (o << 16 >> 16 << 1) >> 1] = -1, f = f + 1 << 16 >> 16;
              } while ((f << 16 >> 16 | 0) < (c | 0));
              f = 0;
              do {
                for (t = 1, r = 1, s = 32767; n = e[i + (t << 1) >> 1] | 0, a = n << 16 >> 16 > -1 ? n << 16 >> 16 < s << 16 >> 16 : 0, o = a ? r : o, u = t + 5 | 0, r = u & 65535, !(r << 16 >> 16 >= 40); ) t = u << 16 >> 16, s = a ? n : s;
                e[i + (o << 16 >> 16 << 1) >> 1] = -1, f = f + 1 << 16 >> 16;
              } while ((f << 16 >> 16 | 0) < (c | 0));
              f = 0;
              do {
                for (t = 2, r = 2, s = 32767; n = e[i + (t << 1) >> 1] | 0, a = n << 16 >> 16 > -1 ? n << 16 >> 16 < s << 16 >> 16 : 0, o = a ? r : o, u = t + 5 | 0, r = u & 65535, !(r << 16 >> 16 >= 40); ) t = u << 16 >> 16, s = a ? n : s;
                e[i + (o << 16 >> 16 << 1) >> 1] = -1, f = f + 1 << 16 >> 16;
              } while ((f << 16 >> 16 | 0) < (c | 0));
              for (f = 0; ; ) {
                for (t = 3, r = 3, s = 32767; ; ) if (n = e[i + (t << 1) >> 1] | 0, a = n << 16 >> 16 > -1 ? n << 16 >> 16 < s << 16 >> 16 : 0, o = a ? r : o, u = t + 5 | 0, r = u & 65535, r << 16 >> 16 >= 40) {
                  s = o;
                  break;
                } else t = u << 16 >> 16, s = a ? n : s;
                if (e[i + (s << 16 >> 16 << 1) >> 1] = -1, f = f + 1 << 16 >> 16, (f << 16 >> 16 | 0) >= (c | 0)) {
                  o = 0;
                  break;
                } else o = s;
              }
              do {
                for (t = 4, r = 4, f = 32767; n = e[i + (t << 1) >> 1] | 0, a = n << 16 >> 16 > -1 ? n << 16 >> 16 < f << 16 >> 16 : 0, s = a ? r : s, u = t + 5 | 0, r = u & 65535, !(r << 16 >> 16 >= 40); ) t = u << 16 >> 16, f = a ? n : f;
                e[i + (s << 16 >> 16 << 1) >> 1] = -1, o = o + 1 << 16 >> 16;
              } while ((o << 16 >> 16 | 0) < (c | 0));
            }
            function k6(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0;
              for (M = C, C = C + 80 | 0, I = M, p = 40, m = t, d = r, c = 256, w = 256; f = e[m >> 1] | 0, m = m + 2 | 0, f = k(f, f) | 0, (f | 0) != 1073741824 ? (v = (f << 1) + c | 0, (f ^ c | 0) > 0 & (v ^ c | 0) < 0 ? (l[a >> 2] = 1, c = (c >>> 31) + 2147483647 | 0) : c = v) : (l[a >> 2] = 1, c = 2147483647), O = e[d >> 1] | 0, w = (k(O << 1, O) | 0) + w | 0, p = p + -1 << 16 >> 16, p << 16 >> 16; ) d = d + 2 | 0;
              for (O = D2(c, a) | 0, S = O << 5, O = ((S >> 5 | 0) == (O | 0) ? S : O >> 31 ^ 2147418112) >> 16, S = (D2(w, a) | 0) << 5 >> 16, D = 39, b = t + 78 | 0, E = I + 78 | 0, f = i + 78 | 0; d = k(e[b >> 1] | 0, O) | 0, b = b + -2 | 0, m = d << 1, t = r + (D << 1) | 0, c = e[t >> 1] | 0, p = k(c << 16 >> 16, S) | 0, (p | 0) != 1073741824 ? (v = (p << 1) + m | 0, (p ^ m | 0) > 0 & (v ^ m | 0) < 0 && (l[a >> 2] = 1, v = (d >>> 30 & 1) + 2147483647 | 0)) : (l[a >> 2] = 1, v = 2147483647), w = v << 10, w = N1((w >> 10 | 0) == (v | 0) ? w : v >> 31 ^ 2147483647, a) | 0, w << 16 >> 16 > -1 ? e[f >> 1] = 32767 : (e[f >> 1] = -32767, w << 16 >> 16 == -32768 ? w = 32767 : w = 0 - (w & 65535) & 65535, c << 16 >> 16 == -32768 ? v = 32767 : v = 0 - (c & 65535) & 65535, e[t >> 1] = v), f = f + -2 | 0, e[E >> 1] = w, !((D | 0) <= 0); ) D = D + -1 | 0, E = E + -2 | 0;
              if (t = o << 16 >> 16, o << 16 >> 16 <= 0) {
                e[s + (t << 1) >> 1] = e[s >> 1] | 0, C = M;
                return;
              }
              for (d = u & 65535, m = 0, p = -1, f = 0; ; ) {
                if ((m | 0) < 40) for (w = m, v = m & 65535, c = -1; a = e[I + (w << 1) >> 1] | 0, u = a << 16 >> 16 > c << 16 >> 16, c = u ? a : c, f = u ? v : f, w = w + d | 0, v = w & 65535, !(v << 16 >> 16 >= 40); ) w = w << 16 >> 16;
                else c = -1;
                if (e[n + (m << 1) >> 1] = f, c << 16 >> 16 > p << 16 >> 16 ? e[s >> 1] = m : c = p, m = m + 1 | 0, (m & 65535) << 16 >> 16 == o << 16 >> 16) break;
                p = c;
              }
              if (f = e[s >> 1] | 0, e[s + (t << 1) >> 1] = f, o << 16 >> 16 > 1) c = 1;
              else {
                C = M;
                return;
              }
              do
                n = f + 1 << 16 >> 16, f = n << 16 >> 16 >= o << 16 >> 16 ? 0 : n, e[s + (c << 1) >> 1] = f, e[s + (c + t << 1) >> 1] = f, c = c + 1 | 0;
              while ((c & 65535) << 16 >> 16 != o << 16 >> 16);
              C = M;
            }
            function Nr(r) {
              r = r | 0;
              var t = 0;
              return !r || (l[r >> 2] = 0, t = A0(12) | 0, !t) ? (r = -1, r | 0) : (e[t >> 1] = 8, l[r >> 2] = t, e[t + 2 >> 1] = 3, e[t + 4 >> 1] = 0, l[t + 8 >> 2] = 0, r = 0, r | 0);
            }
            function Fr(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function A6(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0;
              do
                if ((t | 0) == 8) {
                  if (n = r + 2 | 0, o = (e[n >> 1] | 0) + -1 << 16 >> 16, e[n >> 1] = o, t = r + 8 | 0, !(l[t >> 2] | 0)) {
                    l[i >> 2] = 1, e[n >> 1] = 3;
                    break;
                  }
                  if (s = r + 4 | 0, o << 16 >> 16 > 2 & (e[s >> 1] | 0) > 0) {
                    l[i >> 2] = 2, e[s >> 1] = (e[s >> 1] | 0) + -1 << 16 >> 16;
                    break;
                  }
                  if (o << 16 >> 16) {
                    l[i >> 2] = 3;
                    break;
                  } else {
                    l[i >> 2] = 2, e[n >> 1] = e[r >> 1] | 0;
                    break;
                  }
                } else e[r + 2 >> 1] = e[r >> 1] | 0, l[i >> 2] = 0, t = r + 8 | 0;
              while (false);
              l[t >> 2] = l[i >> 2];
            }
            function Br(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0;
              return !r || (l[r >> 2] = 0, i = A0(12) | 0, n = i, !i) ? (r = -1, r | 0) : (l[i >> 2] = 0, o = i + 4 | 0, l[o >> 2] = 0, s = i + 8 | 0, l[s >> 2] = t, (Sr(i) | 0) << 16 >> 16 == 0 && (Y3(o, l[s >> 2] | 0) | 0) << 16 >> 16 == 0 ? (Dr(l[i >> 2] | 0) | 0, u6(l[o >> 2] | 0) | 0, l[r >> 2] = n, r = 0, r | 0) : (b6(i), ne(o), f0(i), r = -1, r | 0));
            }
            function Ur(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (b6(t), ne((l[r >> 2] | 0) + 4 | 0), f0(l[r >> 2] | 0), l[r >> 2] = 0));
            }
            function R6(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0;
              f = C, C = C + 448 | 0, u = f + 320 | 0, a = f, T2(n | 0, 0, 488) | 0, s = 0;
              do
                c = i + (s << 1) | 0, e[c >> 1] = (R[c >> 1] | 0) & 65528, s = s + 1 | 0;
              while ((s | 0) != 160);
              Mr(l[r >> 2] | 0, i, 160), c = r + 4 | 0, X3(l[c >> 2] | 0, t, i, u, o, a) | 0, Tr(l[o >> 2] | 0, u, n, (l[c >> 2] | 0) + 2392 | 0), C = f;
            }
            function ce(r, t, i, n, o, s, u, a, f, c, w, v, p, m, d, b) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0, p = p | 0, m = m | 0, d = d | 0, b = b | 0;
              var E = 0, S = 0, D = 0;
              D = C, C = C + 48 | 0, E = D + 22 | 0, S = D, _2(o, (r & -2 | 0) == 6 ? i : t, E), _2(o, n, S), i = w, t = E, o = i + 22 | 0;
              do
                e[i >> 1] = e[t >> 1] | 0, i = i + 2 | 0, t = t + 2 | 0;
              while ((i | 0) < (o | 0));
              N0(s, w, p, 40, c, 0), N0(S, p, p, 40, c, 0), t5(s, u, d, 40), i = v, t = d, o = i + 80 | 0;
              do
                e[i >> 1] = e[t >> 1] | 0, i = i + 2 | 0, t = t + 2 | 0;
              while ((i | 0) < (o | 0));
              N0(s, v, b, 40, a, 0), t5(E, b, m, 40), N0(S, m, m, 40, f, 0), C = D;
            }
            function F5(r, t, i, n, o, s, u, a, f, c, w, v, p, m, d, b, E) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0, f = f | 0, c = c | 0, w = w | 0, v = v | 0, p = p | 0, m = m | 0, d = d | 0, b = b | 0, E = E | 0;
              var S = 0, D = 0, O = 0, I = 0, M = 0;
              for ((t | 0) == 7 ? (O = 11, t = n << 16 >> 16 >>> 1 & 65535, S = 2) : (O = 13, t = n, S = 1), e[b >> 1] = n << 16 >> 16 < 13017 ? n : 13017, D = i << 16 >> 16, d = d + (D << 1) | 0, b = t << 16 >> 16, o = o << 16 >> 16, i = 20, t = f, E = d; f = E + 2 | 0, M = k(e[E >> 1] | 0, b) | 0, I = k(e[f >> 1] | 0, b) | 0, M = (k(e[t >> 1] | 0, o) | 0) + M << 1, I = (k(e[t + 2 >> 1] | 0, o) | 0) + I << 1 << S, e[E >> 1] = ((M << S) + 32768 | 0) >>> 16, e[f >> 1] = (I + 32768 | 0) >>> 16, i = i + -1 << 16 >> 16, i << 16 >> 16; ) t = t + 4 | 0, E = E + 4 | 0;
              for (t = n << 16 >> 16, N0(s, d, u + (D << 1) | 0, 40, v, 1), i = 30, E = 0; I = i + D | 0, e[p + (E << 1) >> 1] = (R[r + (I << 1) >> 1] | 0) - (R[u + (I << 1) >> 1] | 0), I = k(e[c + (i << 1) >> 1] | 0, t) | 0, M = (k(e[w + (i << 1) >> 1] | 0, o) | 0) >> O, e[m + (E << 1) >> 1] = (R[a + (i << 1) >> 1] | 0) - (I >>> 14) - M, E = E + 1 | 0, (E | 0) != 10; ) i = i + 1 | 0;
            }
            function zr(r) {
              r = r | 0;
              var t = 0;
              return !r || (l[r >> 2] = 0, t = A0(16) | 0, !t) ? (r = -1, r | 0) : (e[t >> 1] = 0, e[t + 2 >> 1] = 0, e[t + 4 >> 1] = 0, e[t + 6 >> 1] = 0, e[t + 8 >> 1] = 0, e[t + 10 >> 1] = 0, e[t + 12 >> 1] = 0, e[t + 14 >> 1] = 0, l[r >> 2] = t, r = 0, r | 0);
            }
            function xr(r) {
              return r = r | 0, r ? (e[r >> 1] = 0, e[r + 2 >> 1] = 0, e[r + 4 >> 1] = 0, e[r + 6 >> 1] = 0, e[r + 8 >> 1] = 0, e[r + 10 >> 1] = 0, e[r + 12 >> 1] = 0, e[r + 14 >> 1] = 0, r = 0, r | 0) : (r = -1, r | 0);
            }
            function Vr(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function gr(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0;
              return n = R[t + 6 >> 1] | 0, i = R[t + 8 >> 1] | 0, o = n - i | 0, o = (o & 65535 | 0) != 32767 ? o & 65535 : 32767, s = R[t + 10 >> 1] | 0, i = i - s | 0, o = (i << 16 >> 16 | 0) < (o << 16 >> 16 | 0) ? i & 65535 : o, i = R[t + 12 >> 1] | 0, s = s - i | 0, o = (s << 16 >> 16 | 0) < (o << 16 >> 16 | 0) ? s & 65535 : o, s = R[t + 14 >> 1] | 0, i = i - s | 0, o = (i << 16 >> 16 | 0) < (o << 16 >> 16 | 0) ? i & 65535 : o, s = s - (R[t + 16 >> 1] | 0) | 0, i = e[t + 2 >> 1] | 0, u = R[t + 4 >> 1] | 0, t = (i & 65535) - u | 0, t = (t & 65535 | 0) != 32767 ? t & 65535 : 32767, n = u - n | 0, ((s << 16 >> 16 | 0) < (o << 16 >> 16 | 0) ? s & 65535 : o) << 16 >> 16 < 1500 || (((n << 16 >> 16 | 0) < (t << 16 >> 16 | 0) ? n & 65535 : t) << 16 >> 16 | 0) < ((i << 16 >> 16 > 32e3 ? 600 : i << 16 >> 16 > 30500 ? 800 : 1100) | 0) ? (s = (e[r >> 1] | 0) + 1 << 16 >> 16, u = s << 16 >> 16 > 11, e[r >> 1] = u ? 12 : s, u & 1 | 0) : (e[r >> 1] = 0, 0);
            }
            function Hr(r, t, i) {
              return r = r | 0, t = t | 0, i = i | 0, t = o0(t, 3, i) | 0, t = a1(t, e[r + 2 >> 1] | 0, i) | 0, t = a1(t, e[r + 4 >> 1] | 0, i) | 0, t = a1(t, e[r + 6 >> 1] | 0, i) | 0, t = a1(t, e[r + 8 >> 1] | 0, i) | 0, t = a1(t, e[r + 10 >> 1] | 0, i) | 0, t = a1(t, e[r + 12 >> 1] | 0, i) | 0, (a1(t, e[r + 14 >> 1] | 0, i) | 0) << 16 >> 16 > 15565 | 0;
            }
            function Wr(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0;
              i = r + 4 | 0, e[r + 2 >> 1] = e[i >> 1] | 0, n = r + 6 | 0, e[i >> 1] = e[n >> 1] | 0, i = r + 8 | 0, e[n >> 1] = e[i >> 1] | 0, n = r + 10 | 0, e[i >> 1] = e[n >> 1] | 0, i = r + 12 | 0, e[n >> 1] = e[i >> 1] | 0, r = r + 14 | 0, e[i >> 1] = e[r >> 1] | 0, e[r >> 1] = t << 16 >> 16 >>> 3;
            }
            function Gr(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0;
              if (!r || (l[r >> 2] = 0, t = A0(128) | 0, !t)) return n = -1, n | 0;
              i = t + 72 | 0, n = i + 46 | 0;
              do
                e[i >> 1] = 0, i = i + 2 | 0;
              while ((i | 0) < (n | 0));
              return e[t >> 1] = 150, e[t + 36 >> 1] = 150, e[t + 18 >> 1] = 150, e[t + 54 >> 1] = 0, e[t + 2 >> 1] = 150, e[t + 38 >> 1] = 150, e[t + 20 >> 1] = 150, e[t + 56 >> 1] = 0, e[t + 4 >> 1] = 150, e[t + 40 >> 1] = 150, e[t + 22 >> 1] = 150, e[t + 58 >> 1] = 0, e[t + 6 >> 1] = 150, e[t + 42 >> 1] = 150, e[t + 24 >> 1] = 150, e[t + 60 >> 1] = 0, e[t + 8 >> 1] = 150, e[t + 44 >> 1] = 150, e[t + 26 >> 1] = 150, e[t + 62 >> 1] = 0, e[t + 10 >> 1] = 150, e[t + 46 >> 1] = 150, e[t + 28 >> 1] = 150, e[t + 64 >> 1] = 0, e[t + 12 >> 1] = 150, e[t + 48 >> 1] = 150, e[t + 30 >> 1] = 150, e[t + 66 >> 1] = 0, e[t + 14 >> 1] = 150, e[t + 50 >> 1] = 150, e[t + 32 >> 1] = 150, e[t + 68 >> 1] = 0, e[t + 16 >> 1] = 150, e[t + 52 >> 1] = 150, e[t + 34 >> 1] = 150, e[t + 70 >> 1] = 0, e[t + 118 >> 1] = 13106, e[t + 120 >> 1] = 0, e[t + 122 >> 1] = 0, e[t + 124 >> 1] = 0, e[t + 126 >> 1] = 13106, l[r >> 2] = t, n = 0, n | 0;
            }
            function Yr(r) {
              r = r | 0;
              var t = 0, i = 0;
              if (!r) return i = -1, i | 0;
              t = r + 72 | 0, i = t + 46 | 0;
              do
                e[t >> 1] = 0, t = t + 2 | 0;
              while ((t | 0) < (i | 0));
              return e[r >> 1] = 150, e[r + 36 >> 1] = 150, e[r + 18 >> 1] = 150, e[r + 54 >> 1] = 0, e[r + 2 >> 1] = 150, e[r + 38 >> 1] = 150, e[r + 20 >> 1] = 150, e[r + 56 >> 1] = 0, e[r + 4 >> 1] = 150, e[r + 40 >> 1] = 150, e[r + 22 >> 1] = 150, e[r + 58 >> 1] = 0, e[r + 6 >> 1] = 150, e[r + 42 >> 1] = 150, e[r + 24 >> 1] = 150, e[r + 60 >> 1] = 0, e[r + 8 >> 1] = 150, e[r + 44 >> 1] = 150, e[r + 26 >> 1] = 150, e[r + 62 >> 1] = 0, e[r + 10 >> 1] = 150, e[r + 46 >> 1] = 150, e[r + 28 >> 1] = 150, e[r + 64 >> 1] = 0, e[r + 12 >> 1] = 150, e[r + 48 >> 1] = 150, e[r + 30 >> 1] = 150, e[r + 66 >> 1] = 0, e[r + 14 >> 1] = 150, e[r + 50 >> 1] = 150, e[r + 32 >> 1] = 150, e[r + 68 >> 1] = 0, e[r + 16 >> 1] = 150, e[r + 52 >> 1] = 150, e[r + 34 >> 1] = 150, e[r + 70 >> 1] = 0, e[r + 118 >> 1] = 13106, e[r + 120 >> 1] = 0, e[r + 122 >> 1] = 0, e[r + 124 >> 1] = 0, e[r + 126 >> 1] = 13106, i = 0, i | 0;
            }
            function Xr(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function S6(r, t) {
              r = r | 0, t = t | 0, e[r + 118 >> 1] = t;
            }
            function D6(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0;
              i = N1(i, n) | 0, !(i << 16 >> 16 <= 0) && (i = i << 16 >> 16, (i * 21298 | 0) == 1073741824 ? (l[n >> 2] = 1, o = 2147483647) : o = i * 42596 | 0, i = t - o | 0, ((i ^ t) & (o ^ t) | 0) < 0 && (l[n >> 2] = 1, i = (t >>> 31) + 2147483647 | 0), !((i | 0) <= 0) && (r = r + 104 | 0, e[r >> 1] = R[r >> 1] | 0 | 16384));
            }
            function we(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0;
              r = r + 104 | 0, n = o0(e[r >> 1] | 0, 1, i) | 0, e[r >> 1] = n, t << 16 >> 16 && (e[r >> 1] = (o0(n, 1, i) | 0) & 65535 | 8192);
            }
            function Kr(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0;
              if (o = r + 112 | 0, n = P1(e[o >> 1] | 0, e[t >> 1] | 0, i) | 0, n = (n & 65535) - ((n & 65535) >>> 15 & 65535) | 0, n = ((n << 16 >> 31 ^ n) & 65535) << 16 >> 16 < 4, s = e[t >> 1] | 0, e[o >> 1] = s, t = t + 2 | 0, s = P1(s, e[t >> 1] | 0, i) | 0, s = (s & 65535) - ((s & 65535) >>> 15 & 65535) | 0, n = ((s << 16 >> 31 ^ s) & 65535) << 16 >> 16 < 4 ? n ? 2 : 1 : n & 1, e[o >> 1] = e[t >> 1] | 0, o = r + 102 | 0, e[o >> 1] = o0(e[o >> 1] | 0, 1, i) | 0, t = r + 110 | 0, (a1(e[t >> 1] | 0, n, i) | 0) << 16 >> 16 <= 3) {
                e[t >> 1] = n;
                return;
              }
              e[o >> 1] = R[o >> 1] | 0 | 16384, e[t >> 1] = n;
            }
            function qr(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0;
              T = C, C = C + 352 | 0, c = T + 24 | 0, B = T, u = 0, o = 0;
              do
                n = e[t + (u + -40 << 1) >> 1] | 0, n = k(n, n) | 0, (n | 0) != 1073741824 ? (s = (n << 1) + o | 0, (n ^ o | 0) > 0 & (s ^ o | 0) < 0 ? (l[i >> 2] = 1, o = (o >>> 31) + 2147483647 | 0) : o = s) : (l[i >> 2] = 1, o = 2147483647), u = u + 1 | 0;
              while ((u | 0) != 160);
              w = o, (343039 - w & w | 0) < 0 ? (l[i >> 2] = 1, o = (w >>> 31) + 2147483647 | 0) : o = w + -343040 | 0, (o | 0) < 0 && (F = r + 102 | 0, e[F >> 1] = R[F >> 1] & 16383), f = w + -15e3 | 0, v = (14999 - w & w | 0) < 0, v ? (l[i >> 2] = 1, s = (w >>> 31) + 2147483647 | 0) : s = f, (s | 0) < 0 && (F = r + 108 | 0, e[F >> 1] = R[F >> 1] & 16383), n = r + 72 | 0, a = r + 74 | 0, s = e[n >> 1] | 0, u = e[a >> 1] | 0, o = 0;
              do
                F = o << 2, I = P1((e[t + (F << 1) >> 1] | 0) >>> 2 & 65535, ((s << 16 >> 16) * 21955 | 0) >>> 15 & 65535, i) | 0, S = ((I << 16 >> 16) * 21955 | 0) >>> 15 & 65535, E = a1(s, S, i) | 0, O = F | 1, M = P1((e[t + (O << 1) >> 1] | 0) >>> 2 & 65535, ((u << 16 >> 16) * 6390 | 0) >>> 15 & 65535, i) | 0, D = ((M << 16 >> 16) * 6390 | 0) >>> 15 & 65535, s = a1(u, D, i) | 0, e[c + (F << 1) >> 1] = a1(E, s, i) | 0, e[c + (O << 1) >> 1] = P1(E, s, i) | 0, O = F | 2, s = P1((e[t + (O << 1) >> 1] | 0) >>> 2 & 65535, S, i) | 0, I = a1(I, ((s << 16 >> 16) * 21955 | 0) >>> 15 & 65535, i) | 0, F = F | 3, u = P1((e[t + (F << 1) >> 1] | 0) >>> 2 & 65535, D, i) | 0, M = a1(M, ((u << 16 >> 16) * 6390 | 0) >>> 15 & 65535, i) | 0, e[c + (O << 1) >> 1] = a1(I, M, i) | 0, e[c + (F << 1) >> 1] = P1(I, M, i) | 0, o = o + 1 | 0;
              while ((o | 0) != 40);
              e[n >> 1] = s, e[a >> 1] = u, u = r + 76 | 0, s = r + 80 | 0, o = 0;
              do
                F = o << 2, M6(c + (F << 1) | 0, c + ((F | 2) << 1) | 0, u, i), M6(c + ((F | 1) << 1) | 0, c + ((F | 3) << 1) | 0, s, i), o = o + 1 | 0;
              while ((o | 0) != 40);
              u = r + 84 | 0, s = r + 86 | 0, o = r + 92 | 0, n = 0;
              do
                F = n << 3, p5(c + (F << 1) | 0, c + ((F | 4) << 1) | 0, u, i), p5(c + ((F | 2) << 1) | 0, c + ((F | 6) << 1) | 0, s, i), p5(c + ((F | 3) << 1) | 0, c + ((F | 7) << 1) | 0, o, i), n = n + 1 | 0;
              while ((n | 0) != 20);
              u = r + 88 | 0, s = r + 90 | 0, o = 0;
              do
                F = o << 4, p5(c + (F << 1) | 0, c + ((F | 8) << 1) | 0, u, i), p5(c + ((F | 4) << 1) | 0, c + ((F | 12) << 1) | 0, s, i), o = o + 1 | 0;
              while ((o | 0) != 10);
              b = S2(c, r + 70 | 0, 32, 40, 4, 1, 15, i) | 0, e[B + 16 >> 1] = b, E = S2(c, r + 68 | 0, 16, 20, 8, 7, 16, i) | 0, e[B + 14 >> 1] = E, S = S2(c, r + 66 | 0, 16, 20, 8, 3, 16, i) | 0, e[B + 12 >> 1] = S, D = S2(c, r + 64 | 0, 16, 20, 8, 2, 16, i) | 0, e[B + 10 >> 1] = D, O = S2(c, r + 62 | 0, 16, 20, 8, 6, 16, i) | 0, e[B + 8 >> 1] = O, I = S2(c, r + 60 | 0, 8, 10, 16, 4, 16, i) | 0, e[B + 6 >> 1] = I, M = S2(c, r + 58 | 0, 8, 10, 16, 12, 16, i) | 0, e[B + 4 >> 1] = M, F = S2(c, r + 56 | 0, 8, 10, 16, 8, 16, i) | 0, e[B + 2 >> 1] = F, d = S2(c, r + 54 | 0, 8, 10, 16, 0, 16, i) | 0, e[B >> 1] = d, u = 0, n = 0;
              do
                s = r + (n << 1) | 0, t = i5(e[s >> 1] | 0) | 0, s = e[s >> 1] | 0, o = t << 16 >> 16, t << 16 >> 16 < 0 ? (a = 0 - o << 16, (a | 0) < 983040 ? a = s << 16 >> 16 >> (a >> 16) & 65535 : a = 0) : (a = s << 16 >> 16, s = a << o, (s << 16 >> 16 >> o | 0) == (a | 0) ? a = s & 65535 : a = (a >>> 15 ^ 32767) & 65535), s = k0(o0(e[B + (n << 1) >> 1] | 0, 1, i) | 0, a) | 0, m = P1(t, 5, i) | 0, o = m << 16 >> 16, m << 16 >> 16 < 0 ? (a = 0 - o << 16, (a | 0) < 983040 ? a = s << 16 >> 16 >> (a >> 16) : a = 0) : (s = s << 16 >> 16, a = s << o, (a << 16 >> 16 >> o | 0) != (s | 0) && (a = s >>> 15 ^ 32767)), a = a << 16 >> 16, a = k(a, a) | 0, (a | 0) != 1073741824 ? (s = (a << 1) + u | 0, (a ^ u | 0) > 0 & (s ^ u | 0) < 0 ? (l[i >> 2] = 1, u = (u >>> 31) + 2147483647 | 0) : u = s) : (l[i >> 2] = 1, u = 2147483647), n = n + 1 | 0;
              while ((n | 0) != 9);
              m = u << 6, u = (((m >> 6 | 0) == (u | 0) ? m : u >> 31 ^ 2147418112) >> 16) * 3641 >> 15, (u | 0) > 32767 && (l[i >> 2] = 1, u = 32767), m = e[r >> 1] | 0, a = m << 16 >> 16, p = e[r + 2 >> 1] | 0, s = (p << 16 >> 16) + a | 0, (p ^ m) << 16 >> 16 > -1 & (s ^ a | 0) < 0 && (l[i >> 2] = 1, s = (a >>> 31) + 2147483647 | 0), m = e[r + 4 >> 1] | 0, a = m + s | 0, (m ^ s | 0) > -1 & (a ^ s | 0) < 0 && (l[i >> 2] = 1, a = (s >>> 31) + 2147483647 | 0), m = e[r + 6 >> 1] | 0, s = m + a | 0, (m ^ a | 0) > -1 & (s ^ a | 0) < 0 && (l[i >> 2] = 1, s = (a >>> 31) + 2147483647 | 0), m = e[r + 8 >> 1] | 0, a = m + s | 0, (m ^ s | 0) > -1 & (a ^ s | 0) < 0 && (l[i >> 2] = 1, a = (s >>> 31) + 2147483647 | 0), m = e[r + 10 >> 1] | 0, s = m + a | 0, (m ^ a | 0) > -1 & (s ^ a | 0) < 0 && (l[i >> 2] = 1, s = (a >>> 31) + 2147483647 | 0), m = e[r + 12 >> 1] | 0, a = m + s | 0, (m ^ s | 0) > -1 & (a ^ s | 0) < 0 && (l[i >> 2] = 1, a = (s >>> 31) + 2147483647 | 0), m = e[r + 14 >> 1] | 0, s = m + a | 0, (m ^ a | 0) > -1 & (s ^ a | 0) < 0 && (l[i >> 2] = 1, s = (a >>> 31) + 2147483647 | 0), m = e[r + 16 >> 1] | 0, a = m + s | 0, (m ^ s | 0) > -1 & (a ^ s | 0) < 0 && (l[i >> 2] = 1, a = (s >>> 31) + 2147483647 | 0), p = a << 13, p = ((p >> 13 | 0) == (a | 0) ? p : a >> 31 ^ 2147418112) >>> 16 & 65535, a = (k((P1(p, 0, i) | 0) << 16 >> 16, -2808) | 0) >> 15, (a | 0) > 32767 && (l[i >> 2] = 1, a = 32767), c = a1(a & 65535, 1260, i) | 0, m = r + 100 | 0, a = o0(e[m >> 1] | 0, 1, i) | 0, (u << 16 >> 16 | 0) > ((c << 16 >> 16 < 720 ? 720 : c << 16 >> 16) | 0) && (a = (a & 65535 | 16384) & 65535), e[m >> 1] = a, v && (l[i >> 2] = 1, f = (w >>> 31) + 2147483647 | 0), o = e[r + 118 >> 1] | 0, v = r + 126 | 0, a = e[v >> 1] | 0, n = a << 16 >> 16 < 19660, n = o << 16 >> 16 < a << 16 >> 16 ? n ? 2621 : 6553 : n ? 2621 : 655, t = a & 65535, u = t << 16, a = k(n, a << 16 >> 16) | 0, (a | 0) == 1073741824 ? (l[i >> 2] = 1, a = 2147483647) : a = a << 1, s = u - a | 0, ((s ^ u) & (a ^ u) | 0) < 0 && (l[i >> 2] = 1, s = (t >>> 15) + 2147483647 | 0), u = k(n, o << 16 >> 16) | 0;
              do
                if ((u | 0) == 1073741824) l[i >> 2] = 1, a = 2147483647;
                else {
                  if (a = s + (u << 1) | 0, !((s ^ u | 0) > 0 & (a ^ s | 0) < 0)) break;
                  l[i >> 2] = 1, a = (s >>> 31) + 2147483647 | 0;
                }
              while (false);
              t = N1(a, i) | 0, w = (f | 0) > -1, e[v >> 1] = w ? t << 16 >> 16 < 13106 ? 13106 : t : 13106, t = r + 106 | 0, e[t >> 1] = o0(e[t >> 1] | 0, 1, i) | 0, s = r + 108 | 0, a = o0(e[s >> 1] | 0, 1, i) | 0, e[s >> 1] = a, u = e[v >> 1] | 0;
              e: do
                if (w) {
                  do
                    if (u << 16 >> 16 > 19660) e[t >> 1] = R[t >> 1] | 16384;
                    else {
                      if (u << 16 >> 16 > 16383) break;
                      u = r + 116 | 0, a = 0;
                      break e;
                    }
                  while (false);
                  e[s >> 1] = a & 65535 | 16384, U = 62;
                } else U = 62;
              while (false);
              do
                if ((U | 0) == 62) {
                  if (a = r + 116 | 0, u << 16 >> 16 <= 22936) {
                    u = a, a = 0;
                    break;
                  }
                  u = a, a = a1(e[a >> 1] | 0, 1, i) | 0;
                }
              while (false);
              e[u >> 1] = a, (e[t >> 1] & 32640) != 32640 ? (c = (e[s >> 1] & 32767) == 32767, e[r + 122 >> 1] = c & 1, c && (U = 67)) : (e[r + 122 >> 1] = 1, U = 67);
              do
                if ((U | 0) == 67) {
                  if (u = r + 98 | 0, (e[u >> 1] | 0) >= 5) break;
                  e[u >> 1] = 5;
                }
              while (false);
              c = r + 102 | 0;
              do
                if ((e[c >> 1] & 24576) == 24576) U = 71;
                else {
                  if ((e[r + 104 >> 1] & 31744) == 31744) {
                    U = 71;
                    break;
                  }
                  if (e[m >> 1] & 32640) s = d, u = 0, a = 0;
                  else {
                    e[r + 98 >> 1] = 20, s = 32767;
                    break;
                  }
                  for (; ; ) {
                    n = e[r + 18 + (u << 1) >> 1] | 0, o = s << 16 >> 16 > n << 16 >> 16, f = o ? s : n, s = o ? n : s, f = f << 16 >> 16 < 184 ? 184 : f, s = s << 16 >> 16 < 184 ? 184 : s, n = i5(s) | 0, o = n << 16 >> 16;
                    do
                      if (n << 16 >> 16 < 0) {
                        if (t = 0 - o << 16, (t | 0) >= 983040) {
                          t = 0;
                          break;
                        }
                        t = s << 16 >> 16 >> (t >> 16) & 65535;
                      } else {
                        if (t = s << 16 >> 16, s = t << o, (s << 16 >> 16 >> o | 0) == (t | 0)) {
                          t = s & 65535;
                          break;
                        }
                        t = (t >>> 15 ^ 32767) & 65535;
                      }
                    while (false);
                    if (f = k0(o0(f, 1, i) | 0, t) | 0, a = a1(a, o0(f, P1(8, n, i) | 0, i) | 0, i) | 0, u = u + 1 | 0, (u | 0) == 9) break;
                    s = e[B + (u << 1) >> 1] | 0;
                  }
                  if (a << 16 >> 16 > 1e3) {
                    e[r + 98 >> 1] = 20, s = 32767;
                    break;
                  }
                  s = e[m >> 1] | 0, u = r + 98 | 0, a = e[u >> 1] | 0;
                  do
                    if (!(s & 16384)) U = 86;
                    else {
                      if (!(a << 16 >> 16)) {
                        a = s;
                        break;
                      }
                      a = P1(a, 1, i) | 0, e[u >> 1] = a, U = 86;
                    }
                  while (false);
                  if ((U | 0) == 86) {
                    if (a << 16 >> 16 == 20) {
                      s = 32767;
                      break;
                    }
                    a = e[m >> 1] | 0;
                  }
                  s = (a & 16384) == 0 ? 16383 : 3276;
                }
              while (false);
              for ((U | 0) == 71 && (e[r + 98 >> 1] = 20, s = 32767), u = d, a = 0; f = r + 18 + (a << 1) | 0, t = he(s, P1(u, e[f >> 1] | 0, i) | 0, i) | 0, e[f >> 1] = a1(e[f >> 1] | 0, t, i) | 0, a = a + 1 | 0, (a | 0) != 9; ) u = e[B + (a << 1) >> 1] | 0;
              do
                if (e[m >> 1] & 30720) U = 95;
                else {
                  if (e[c >> 1] & 30720) {
                    U = 95;
                    break;
                  }
                  e[r + 114 >> 1] | 0 ? U = 95 : (o = 2097, n = 1638, t = 2);
                }
              while (false);
              do
                if ((U | 0) == 95) {
                  if ((e[r + 98 >> 1] | 0) == 0 && (e[r + 114 >> 1] | 0) == 0) {
                    o = 1867, n = 491, t = 2;
                    break;
                  }
                  o = 1638, n = 0, t = 0;
                }
              while (false);
              s = 0;
              do
                u = r + (s << 1) | 0, a = P1(e[r + 36 + (s << 1) >> 1] | 0, e[u >> 1] | 0, i) | 0, a << 16 >> 16 < 0 ? (a = he(o, a, i) | 0, a = a1(-2, a1(e[u >> 1] | 0, a, i) | 0, i) | 0, a = a << 16 >> 16 < 40 ? 40 : a) : (a = he(n, a, i) | 0, a = a1(t, a1(e[u >> 1] | 0, a, i) | 0, i) | 0, a = a << 16 >> 16 > 16e3 ? 16e3 : a), e[u >> 1] = a, s = s + 1 | 0;
              while ((s | 0) != 9);
              if (e[r + 36 >> 1] = d, e[r + 38 >> 1] = F, e[r + 40 >> 1] = M, e[r + 42 >> 1] = I, e[r + 44 >> 1] = O, e[r + 46 >> 1] = D, e[r + 48 >> 1] = S, e[r + 50 >> 1] = E, e[r + 52 >> 1] = b, u = p << 16 >> 16 > 100, s = u ? 7 : 4, u = u ? 4 : 5, !w) return e[r + 94 >> 1] = 0, e[r + 96 >> 1] = 0, e[r + 114 >> 1] = 0, e[r + 116 >> 1] = 0, i = 0, r = r + 120 | 0, e[r >> 1] = i, C = T, i | 0;
              o = r + 114 | 0, n = e[o >> 1] | 0;
              do
                if ((e[r + 116 >> 1] | 0) <= 100) {
                  if (n << 16 >> 16) break;
                  n = e[m >> 1] | 0;
                  do
                    if (!(n & 16368)) {
                      if ((e[v >> 1] | 0) > 21298) n = 1;
                      else break;
                      return r = r + 120 | 0, e[r >> 1] = n, C = T, n | 0;
                    }
                  while (false);
                  return o = r + 94 | 0, n & 16384 ? (i = a1(e[o >> 1] | 0, 1, i) | 0, e[o >> 1] = i, (i << 16 >> 16 | 0) < (u | 0) ? (i = 1, r = r + 120 | 0, e[r >> 1] = i, C = T, i | 0) : (e[r + 96 >> 1] = s, i = 1, r = r + 120 | 0, e[r >> 1] = i, C = T, i | 0)) : (e[o >> 1] = 0, n = r + 96 | 0, o = e[n >> 1] | 0, o << 16 >> 16 <= 0 ? (i = 0, r = r + 120 | 0, e[r >> 1] = i, C = T, i | 0) : (e[n >> 1] = P1(o, 1, i) | 0, i = 1, r = r + 120 | 0, e[r >> 1] = i, C = T, i | 0));
                } else {
                  if (n << 16 >> 16 >= 250) break;
                  e[o >> 1] = 250, n = 250;
                }
              while (false);
              return e[r + 94 >> 1] = 4, e[o >> 1] = P1(n, 1, i) | 0, i = 1, r = r + 120 | 0, e[r >> 1] = i, C = T, i | 0;
            }
            function M6(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0;
              o = (e[i >> 1] | 0) * 21955 >> 15, (o | 0) > 32767 && (l[n >> 2] = 1, o = 32767), s = P1(e[r >> 1] | 0, o & 65535, n) | 0, o = (s << 16 >> 16) * 21955 >> 15, (o | 0) > 32767 && (l[n >> 2] = 1, o = 32767), u = a1(e[i >> 1] | 0, o & 65535, n) | 0, e[i >> 1] = s, i = i + 2 | 0, o = (e[i >> 1] | 0) * 6390 >> 15, (o | 0) > 32767 && (l[n >> 2] = 1, o = 32767), s = P1(e[t >> 1] | 0, o & 65535, n) | 0, o = (s << 16 >> 16) * 6390 >> 15, (o | 0) > 32767 && (l[n >> 2] = 1, o = 32767), o = a1(e[i >> 1] | 0, o & 65535, n) | 0, e[i >> 1] = s, e[r >> 1] = o0(a1(u, o, n) | 0, 1, n) | 0, e[t >> 1] = o0(P1(u, o, n) | 0, 1, n) | 0;
            }
            function p5(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0;
              o = (e[i >> 1] | 0) * 13363 >> 15, (o | 0) > 32767 && (l[n >> 2] = 1, o = 32767), s = P1(e[t >> 1] | 0, o & 65535, n) | 0, o = (s << 16 >> 16) * 13363 >> 15, (o | 0) > 32767 && (l[n >> 2] = 1, o = 32767), o = a1(e[i >> 1] | 0, o & 65535, n) | 0, e[i >> 1] = s, e[t >> 1] = o0(P1(e[r >> 1] | 0, o, n) | 0, 1, n) | 0, e[r >> 1] = o0(a1(e[r >> 1] | 0, o, n) | 0, 1, n) | 0;
            }
            function S2(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0, m = 0;
              if (i << 16 >> 16 < n << 16 >> 16) {
                v = o << 16 >> 16, f = s << 16 >> 16, p = i << 16 >> 16, c = 0;
                do
                  m = e[r + ((k(p, v) | 0) + f << 1) >> 1] | 0, m = (m & 65535) - ((m & 65535) >>> 15 & 65535) | 0, m = (m << 16 >> 31 ^ m) << 16, w = (m >> 15) + c | 0, (m >> 16 ^ c | 0) > 0 & (w ^ c | 0) < 0 ? (l[a >> 2] = 1, c = (c >>> 31) + 2147483647 | 0) : c = w, p = p + 1 | 0;
                while ((p & 65535) << 16 >> 16 != n << 16 >> 16);
                p = c;
              } else p = 0;
              if (c = e[t >> 1] | 0, m = P1(16, u, a) | 0, f = m << 16 >> 16, m << 16 >> 16 > 0 ? (n = c << f, (n >> f | 0) != (c | 0) && (n = c >> 31 ^ 2147483647)) : (f = 0 - f << 16, (f | 0) < 2031616 ? n = c >> (f >> 16) : n = 0), f = n + p | 0, (n ^ p | 0) > -1 & (f ^ p | 0) < 0 && (l[a >> 2] = 1, f = (p >>> 31) + 2147483647 | 0), m = u << 16 >> 16, u = u << 16 >> 16 > 0, u ? (n = p << m, (n >> m | 0) != (p | 0) && (n = p >> 31 ^ 2147483647)) : (n = 0 - m << 16, (n | 0) < 2031616 ? n = p >> (n >> 16) : n = 0), e[t >> 1] = n >>> 16, i << 16 >> 16 > 0) {
                v = o << 16 >> 16, c = s << 16 >> 16, w = 0;
                do
                  s = e[r + ((k(w, v) | 0) + c << 1) >> 1] | 0, s = (s & 65535) - ((s & 65535) >>> 15 & 65535) | 0, s = (s << 16 >> 31 ^ s) << 16, n = (s >> 15) + f | 0, (s >> 16 ^ f | 0) > 0 & (n ^ f | 0) < 0 ? (l[a >> 2] = 1, f = (f >>> 31) + 2147483647 | 0) : f = n, w = w + 1 | 0;
                while ((w & 65535) << 16 >> 16 != i << 16 >> 16);
              }
              return u ? (n = f << m, (n >> m | 0) == (f | 0) ? (a = n, a = a >>> 16, a = a & 65535, a | 0) : (a = f >> 31 ^ 2147483647, a = a >>> 16, a = a & 65535, a | 0)) : (n = 0 - m << 16, (n | 0) >= 2031616 ? (a = 0, a = a >>> 16, a = a & 65535, a | 0) : (a = f >> (n >> 16), a = a >>> 16, a = a & 65535, a | 0));
            }
            function a1(r, t, i) {
              return r = r | 0, t = t | 0, i = i | 0, r = (t << 16 >> 16) + (r << 16 >> 16) | 0, (r | 0) <= 32767 ? (r | 0) < -32768 && (l[i >> 2] = 1, r = -32768) : (l[i >> 2] = 1, r = 32767), r & 65535 | 0;
            }
            function me(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0;
              F = C, C = C + 32 | 0, I = F + 12 | 0, M = F, e[I >> 1] = 1024, e[M >> 1] = 1024, f = e[r + 2 >> 1] | 0, u = e[r + 20 >> 1] | 0, n = ((u + f | 0) >>> 2) + 64512 | 0, e[I + 2 >> 1] = n, u = ((f - u | 0) >>> 2) + 1024 | 0, e[M + 2 >> 1] = u, f = e[r + 4 >> 1] | 0, o = e[r + 18 >> 1] | 0, n = ((o + f | 0) >>> 2) - n | 0, e[I + 4 >> 1] = n, u = ((f - o | 0) >>> 2) + u | 0, e[M + 4 >> 1] = u, o = e[r + 6 >> 1] | 0, f = e[r + 16 >> 1] | 0, n = ((f + o | 0) >>> 2) - n | 0, e[I + 6 >> 1] = n, u = ((o - f | 0) >>> 2) + u | 0, e[M + 6 >> 1] = u, f = e[r + 8 >> 1] | 0, o = e[r + 14 >> 1] | 0, n = ((o + f | 0) >>> 2) - n | 0, e[I + 8 >> 1] = n, u = ((f - o | 0) >>> 2) + u | 0, e[M + 8 >> 1] = u, o = e[r + 10 >> 1] | 0, f = e[r + 12 >> 1] | 0, n = ((f + o | 0) >>> 2) - n | 0, e[I + 10 >> 1] = n, e[M + 10 >> 1] = ((o - f | 0) >>> 2) + u, u = e[3454] | 0, f = u << 16 >> 16, r = e[I + 2 >> 1] | 0, o = (r << 16 >> 16 << 14) + (f << 10) | 0, E = o & -65536, o = (o >>> 1) - (o >> 16 << 15) << 16, O = (((k(o >> 16, f) | 0) >> 15) + (k(E >> 16, f) | 0) << 2) + -16777216 | 0, O = (e[I + 4 >> 1] << 14) + O | 0, a = O >> 16, O = (O >>> 1) - (a << 15) << 16, E = (((k(O >> 16, f) | 0) >> 15) + (k(a, f) | 0) << 2) - ((o >> 15) + E) | 0, E = (e[I + 6 >> 1] << 14) + E | 0, o = E >> 16, E = (E >>> 1) - (o << 15) << 16, a = (((k(E >> 16, f) | 0) >> 15) + (k(o, f) | 0) << 2) - ((O >> 15) + (a << 16)) | 0, a = (e[I + 8 >> 1] << 14) + a | 0, O = a >> 16, o = (n << 16 >> 3) + ((((k((a >>> 1) - (O << 15) << 16 >> 16, f) | 0) >> 15) + (k(O, f) | 0) << 1) - ((E >> 15) + (o << 16))) | 0, E = I + 4 | 0, f = I, O = 0, a = 0, n = 0, b = I + 10 | 0, o = (o + 33554432 | 0) >>> 0 < 67108863 ? o >>> 10 & 65535 : (o | 0) > 33554431 ? 32767 : -32768;
              e: for (; ; ) {
                for (S = r << 16 >> 16 << 14, d = f + 6 | 0, m = f + 8 | 0, p = a << 16 >> 16; ; ) {
                  if ((p | 0) >= 60) break e;
                  if (f = (p & 65535) + 1 << 16 >> 16, c = e[6908 + (f << 16 >> 16 << 1) >> 1] | 0, D = c << 16 >> 16, a = S + (D << 10) | 0, s = a & -65536, a = (a >>> 1) - (a >> 16 << 15) << 16, w = (((k(a >> 16, D) | 0) >> 15) + (k(s >> 16, D) | 0) << 2) + -16777216 | 0, v = e[E >> 1] | 0, w = (v << 16 >> 16 << 14) + w | 0, T = w >> 16, w = (w >>> 1) - (T << 15) << 16, s = (((k(w >> 16, D) | 0) >> 15) + (k(T, D) | 0) << 2) - ((a >> 15) + s) | 0, a = e[d >> 1] | 0, s = (a << 16 >> 16 << 14) + s | 0, r = s >> 16, s = (s >>> 1) - (r << 15) << 16, T = (((k(s >> 16, D) | 0) >> 15) + (k(r, D) | 0) << 2) - ((w >> 15) + (T << 16)) | 0, w = e[m >> 1] | 0, T = (w << 16 >> 16 << 14) + T | 0, U = T >> 16, r = (((k((T >>> 1) - (U << 15) << 16 >> 16, D) | 0) >> 15) + (k(U, D) | 0) << 1) - ((s >> 15) + (r << 16)) | 0, s = e[b >> 1] | 0, r = (s << 16 >> 16 << 13) + r | 0, r = (r + 33554432 | 0) >>> 0 < 67108863 ? r >>> 10 & 65535 : (r | 0) > 33554431 ? 32767 : -32768, (k(r << 16 >> 16, o << 16 >> 16) | 0) < 1) {
                    D = f, f = v;
                    break;
                  } else p = p + 1 | 0, u = c, o = r;
                }
                for (E = s << 16 >> 16 << 13, b = f << 16 >> 16 << 14, v = a << 16 >> 16 << 14, m = w << 16 >> 16 << 14, s = c << 16 >> 16, p = 4; ; ) if (U = (u << 16 >> 16 >>> 1) + (s >>> 1) | 0, s = U << 16, d = s >> 16, s = S + (s >> 6) | 0, T = s & -65536, s = (s >>> 1) - (s >> 16 << 15) << 16, w = b + ((((k(s >> 16, d) | 0) >> 15) + (k(T >> 16, d) | 0) << 2) + -16777216) | 0, f = w >> 16, w = (w >>> 1) - (f << 15) << 16, T = v + ((((k(w >> 16, d) | 0) >> 15) + (k(f, d) | 0) << 2) - ((s >> 15) + T)) | 0, s = T >> 16, T = (T >>> 1) - (s << 15) << 16, f = m + ((((k(T >> 16, d) | 0) >> 15) + (k(s, d) | 0) << 2) - ((w >> 15) + (f << 16))) | 0, w = f >> 16, U = U & 65535, s = E + ((((k((f >>> 1) - (w << 15) << 16 >> 16, d) | 0) >> 15) + (k(w, d) | 0) << 1) - ((T >> 15) + (s << 16))) | 0, s = (s + 33554432 | 0) >>> 0 < 67108863 ? s >>> 10 & 65535 : (s | 0) > 33554431 ? 32767 : -32768, T = (k(s << 16 >> 16, r << 16 >> 16) | 0) < 1, d = T ? c : U, r = T ? r : s, u = T ? U : u, o = T ? s : o, p = p + -1 << 16 >> 16, s = d << 16 >> 16, p << 16 >> 16) c = d;
                else {
                  c = s, a = u, u = d;
                  break;
                }
                if (f = n << 16 >> 16, s = r << 16 >> 16, r = (o & 65535) - s | 0, o = r << 16, o && (T = (r & 65535) - (r >>> 15 & 1) | 0, T = T << 16 >> 31 ^ T, r = (i5(T & 65535) | 0) << 16 >> 16, r = (k((k0(16383, T << 16 >> 16 << r & 65535) | 0) << 16 >> 16, (a & 65535) - c << 16 >> 16) | 0) >> 19 - r, (o | 0) < 0 && (r = 0 - (r << 16 >> 16) | 0), u = c - ((k(r << 16 >> 16, s) | 0) >>> 10) & 65535), e[t + (f << 1) >> 1] = u, o = O << 16 >> 16 == 0 ? M : I, U = u << 16 >> 16, r = e[o + 2 >> 1] | 0, s = (r << 16 >> 16 << 14) + (U << 10) | 0, T = s & -65536, s = (s >>> 1) - (s >> 16 << 15) << 16, S = (((k(s >> 16, U) | 0) >> 15) + (k(T >> 16, U) | 0) << 2) + -16777216 | 0, S = (e[o + 4 >> 1] << 14) + S | 0, E = S >> 16, S = (S >>> 1) - (E << 15) << 16, T = (((k(S >> 16, U) | 0) >> 15) + (k(E, U) | 0) << 2) - ((s >> 15) + T) | 0, T = (e[o + 6 >> 1] << 14) + T | 0, s = T >> 16, T = (T >>> 1) - (s << 15) << 16, E = (((k(T >> 16, U) | 0) >> 15) + (k(s, U) | 0) << 2) - ((S >> 15) + (E << 16)) | 0, E = (e[o + 8 >> 1] << 14) + E | 0, S = E >> 16, n = n + 1 << 16 >> 16, s = (((k((E >>> 1) - (S << 15) << 16 >> 16, U) | 0) >> 15) + (k(S, U) | 0) << 1) - ((T >> 15) + (s << 16)) | 0, s = (e[o + 10 >> 1] << 13) + s | 0, n << 16 >> 16 < 10) E = o + 4 | 0, f = o, O = O ^ 1, a = D, b = o + 10 | 0, o = (s + 33554432 | 0) >>> 0 < 67108863 ? s >>> 10 & 65535 : (s | 0) > 33554431 ? 32767 : -32768;
                else {
                  B = 13;
                  break;
                }
              }
              if ((B | 0) == 13) {
                C = F;
                return;
              }
              e[t >> 1] = e[i >> 1] | 0, e[t + 2 >> 1] = e[i + 2 >> 1] | 0, e[t + 4 >> 1] = e[i + 4 >> 1] | 0, e[t + 6 >> 1] = e[i + 6 >> 1] | 0, e[t + 8 >> 1] = e[i + 8 >> 1] | 0, e[t + 10 >> 1] = e[i + 10 >> 1] | 0, e[t + 12 >> 1] = e[i + 12 >> 1] | 0, e[t + 14 >> 1] = e[i + 14 >> 1] | 0, e[t + 16 >> 1] = e[i + 16 >> 1] | 0, e[t + 18 >> 1] = e[i + 18 >> 1] | 0, C = F;
            }
            function k0(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0, o = 0, s = 0, u = 0, a = 0;
              return o = t << 16 >> 16, r << 16 >> 16 < 1 || r << 16 >> 16 > t << 16 >> 16 ? (o = 0, o | 0) : r << 16 >> 16 == t << 16 >> 16 ? (o = 32767, o | 0) : (n = o << 1, i = o << 2, s = r << 16 >> 16 << 3, r = (s | 0) < (i | 0), s = s - (r ? 0 : i) | 0, r = r ? 0 : 4, u = (s | 0) < (n | 0), s = s - (u ? 0 : n) | 0, t = (s | 0) < (o | 0), r = (t & 1 | (u ? r : r | 2)) << 3 ^ 8, t = s - (t ? 0 : o) << 3, (t | 0) >= (i | 0) && (t = t - i | 0, r = r & 65528 | 4), s = (t | 0) < (n | 0), u = t - (s ? 0 : n) | 0, t = (u | 0) < (o | 0), r = (t & 1 ^ 1 | (s ? r : r | 2)) << 16 >> 13, t = u - (t ? 0 : o) << 3, (t | 0) >= (i | 0) && (t = t - i | 0, r = r & 65528 | 4), s = (t | 0) < (n | 0), u = t - (s ? 0 : n) | 0, t = (u | 0) < (o | 0), r = (t & 1 ^ 1 | (s ? r : r | 2)) << 16 >> 13, t = u - (t ? 0 : o) << 3, (t | 0) >= (i | 0) && (t = t - i | 0, r = r & 65528 | 4), a = (t | 0) < (n | 0), s = t - (a ? 0 : n) | 0, u = (s | 0) < (o | 0), t = (u & 1 ^ 1 | (a ? r : r | 2)) << 16 >> 13, r = s - (u ? 0 : o) << 3, (r | 0) >= (i | 0) && (r = r - i | 0, t = t & 65528 | 4), a = (r | 0) < (n | 0), a = ((r - (a ? 0 : n) | 0) >= (o | 0) | (a ? t : t | 2)) & 65535, a | 0);
            }
            function L2(r) {
              return r = r | 0, r ? (e[r >> 1] = -14336, e[r + 8 >> 1] = -2381, e[r + 2 >> 1] = -14336, e[r + 10 >> 1] = -2381, e[r + 4 >> 1] = -14336, e[r + 12 >> 1] = -2381, e[r + 6 >> 1] = -14336, e[r + 14 >> 1] = -2381, r = 0, r | 0) : (r = -1, r | 0);
            }
            function r5(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0, m = 0;
              for (m = C, C = C + 16 | 0, v = m + 2 | 0, p = m, f = 0, c = 10; w = e[i >> 1] | 0, w = ((k(w, w) | 0) >>> 3) + f | 0, f = e[i + 2 >> 1] | 0, f = w + ((k(f, f) | 0) >>> 3) | 0, w = e[i + 4 >> 1] | 0, w = f + ((k(w, w) | 0) >>> 3) | 0, f = e[i + 6 >> 1] | 0, f = w + ((k(f, f) | 0) >>> 3) | 0, c = c + -1 << 16 >> 16, c << 16 >> 16; ) i = i + 8 | 0;
              if (c = f << 4, c = (c | 0) < 0 ? 2147483647 : c, (t | 0) == 7) {
                N2(((N1(c, a) | 0) << 16 >> 16) * 52428 | 0, v, p, a), w = R[v >> 1] << 16, c = e[p >> 1] << 1, t = e[r + 8 >> 1] | 0, f = (t << 16 >> 16) * 88 | 0, t << 16 >> 16 > -1 & (f | 0) < -783741 ? (l[a >> 2] = 1, i = 2147483647) : i = f + 783741 | 0, t = (e[r + 10 >> 1] | 0) * 74 | 0, f = t + i | 0, (t ^ i | 0) > -1 & (f ^ i | 0) < 0 ? (l[a >> 2] = 1, i = (i >>> 31) + 2147483647 | 0) : i = f, t = (e[r + 12 >> 1] | 0) * 44 | 0, f = t + i | 0, (t ^ i | 0) > -1 & (f ^ i | 0) < 0 ? (l[a >> 2] = 1, i = (i >>> 31) + 2147483647 | 0) : i = f, r = (e[r + 14 >> 1] | 0) * 24 | 0, f = r + i | 0, (r ^ i | 0) > -1 & (f ^ i | 0) < 0 && (l[a >> 2] = 1, f = (i >>> 31) + 2147483647 | 0), r = w + -1966080 + c | 0, i = f - r | 0, ((i ^ f) & (f ^ r) | 0) < 0 && (l[a >> 2] = 1, i = (f >>> 31) + 2147483647 | 0), a = i >> 17, e[n >> 1] = a, a = (i >> 2) - (a << 15) | 0, a = a & 65535, e[o >> 1] = a, C = m;
                return;
              }
              switch (w = $1(c) | 0, f = w << 16 >> 16, w << 16 >> 16 > 0 ? (i = c << f, (i >> f | 0) == (c | 0) ? c = i : c = c >> 31 ^ 2147483647) : (f = 0 - f << 16, (f | 0) < 2031616 ? c = c >> (f >> 16) : c = 0), I6(c, w, v, p), v = k(e[v >> 1] | 0, -49320) | 0, f = (k(e[p >> 1] | 0, -24660) | 0) >> 15, f = (f & 65536 | 0) == 0 ? f : f | -65536, p = f << 1, i = p + v | 0, (p ^ v | 0) > -1 & (i ^ p | 0) < 0 && (l[a >> 2] = 1, i = (f >>> 30 & 1) + 2147483647 | 0), t | 0) {
                case 6: {
                  f = i + 2134784 | 0, (i | 0) > -1 & (f ^ i | 0) < 0 && (l[a >> 2] = 1, f = (i >>> 31) + 2147483647 | 0);
                  break;
                }
                case 5: {
                  e[u >> 1] = c >>> 16, e[s >> 1] = -11 - (w & 65535), f = i + 2183936 | 0, (i | 0) > -1 & (f ^ i | 0) < 0 && (l[a >> 2] = 1, f = (i >>> 31) + 2147483647 | 0);
                  break;
                }
                case 4: {
                  f = i + 2085632 | 0, (i | 0) > -1 & (f ^ i | 0) < 0 && (l[a >> 2] = 1, f = (i >>> 31) + 2147483647 | 0);
                  break;
                }
                case 3: {
                  f = i + 2065152 | 0, (i | 0) > -1 & (f ^ i | 0) < 0 && (l[a >> 2] = 1, f = (i >>> 31) + 2147483647 | 0);
                  break;
                }
                default:
                  f = i + 2134784 | 0, (i | 0) > -1 & (f ^ i | 0) < 0 && (l[a >> 2] = 1, f = (i >>> 31) + 2147483647 | 0);
              }
              do
                if ((f | 0) <= 2097151) if ((f | 0) < -2097152) {
                  l[a >> 2] = 1, i = -2147483648;
                  break;
                } else {
                  i = f << 10;
                  break;
                }
                else l[a >> 2] = 1, i = 2147483647;
              while (false);
              if (u = (e[r >> 1] | 0) * 11142 | 0, f = u + i | 0, (u ^ i | 0) > -1 & (f ^ i | 0) < 0 && (l[a >> 2] = 1, f = (i >>> 31) + 2147483647 | 0), u = (e[r + 2 >> 1] | 0) * 9502 | 0, i = u + f | 0, (u ^ f | 0) > -1 & (i ^ f | 0) < 0 && (l[a >> 2] = 1, i = (f >>> 31) + 2147483647 | 0), u = (e[r + 4 >> 1] | 0) * 5570 | 0, f = u + i | 0, (u ^ i | 0) > -1 & (f ^ i | 0) < 0 && (l[a >> 2] = 1, f = (i >>> 31) + 2147483647 | 0), r = (e[r + 6 >> 1] | 0) * 3112 | 0, i = r + f | 0, (r ^ f | 0) > -1 & (i ^ f | 0) < 0 && (l[a >> 2] = 1, i = (f >>> 31) + 2147483647 | 0), i = k(i >> 16, (t | 0) == 4 ? 10878 : 10886) | 0, (i | 0) < 0 ? i = ~((i ^ -256) >> 8) : i = i >> 8, e[n >> 1] = i >>> 16, (i | 0) < 0 ? f = ~((i ^ -2) >> 1) : f = i >> 1, n = i >> 16 << 15, i = f - n | 0, ((i ^ f) & (n ^ f) | 0) >= 0) {
                a = i, a = a & 65535, e[o >> 1] = a, C = m;
                return;
              }
              l[a >> 2] = 1, a = (f >>> 31) + 2147483647 | 0, a = a & 65535, e[o >> 1] = a, C = m;
            }
            function b2(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0;
              o = r + 4 | 0, e[r + 6 >> 1] = e[o >> 1] | 0, s = r + 12 | 0, e[r + 14 >> 1] = e[s >> 1] | 0, n = r + 2 | 0, e[o >> 1] = e[n >> 1] | 0, o = r + 10 | 0, e[s >> 1] = e[o >> 1] | 0, e[n >> 1] = e[r >> 1] | 0, n = r + 8 | 0, e[o >> 1] = e[n >> 1] | 0, e[n >> 1] = t, e[r >> 1] = i;
            }
            function Jr(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0;
              s = a1(0, e[r + 8 >> 1] | 0, n) | 0, s = a1(s, e[r + 10 >> 1] | 0, n) | 0, s = a1(s, e[r + 12 >> 1] | 0, n) | 0, s = a1(s, e[r + 14 >> 1] | 0, n) | 0, o = s << 16 >> 16 >> 2, o = (s << 16 >> 16 < 0 ? o | 49152 : o) & 65535, e[t >> 1] = o << 16 >> 16 < -2381 ? -2381 : o, t = a1(0, e[r >> 1] | 0, n) | 0, t = a1(t, e[r + 2 >> 1] | 0, n) | 0, t = a1(t, e[r + 4 >> 1] | 0, n) | 0, n = a1(t, e[r + 6 >> 1] | 0, n) | 0, r = n << 16 >> 16 >> 2, r = (n << 16 >> 16 < 0 ? r | 49152 : r) & 65535, e[i >> 1] = r << 16 >> 16 < -14336 ? -14336 : r;
            }
            function T6(r) {
              r = r | 0, l[r >> 2] = 6892, l[r + 4 >> 2] = 8180, l[r + 8 >> 2] = 21e3, l[r + 12 >> 2] = 9716, l[r + 16 >> 2] = 22024, l[r + 20 >> 2] = 12788, l[r + 24 >> 2] = 24072, l[r + 28 >> 2] = 26120, l[r + 32 >> 2] = 28168, l[r + 36 >> 2] = 6876, l[r + 40 >> 2] = 7452, l[r + 44 >> 2] = 8140, l[r + 48 >> 2] = 20980, l[r + 52 >> 2] = 16884, l[r + 56 >> 2] = 17908, l[r + 60 >> 2] = 7980, l[r + 64 >> 2] = 8160, l[r + 68 >> 2] = 6678, l[r + 72 >> 2] = 6646, l[r + 76 >> 2] = 6614, l[r + 80 >> 2] = 29704, l[r + 84 >> 2] = 28680, l[r + 88 >> 2] = 3720, l[r + 92 >> 2] = 8, l[r + 96 >> 2] = 4172, l[r + 100 >> 2] = 44, l[r + 104 >> 2] = 3436, l[r + 108 >> 2] = 30316, l[r + 112 >> 2] = 30796, l[r + 116 >> 2] = 31276, l[r + 120 >> 2] = 7472, l[r + 124 >> 2] = 7552, l[r + 128 >> 2] = 7632, l[r + 132 >> 2] = 7712;
            }
            function Y2(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0;
              if (v = C, C = C + 48 | 0, c = v + 18 | 0, w = v, f = t << 16 >> 16, K0(w | 0, r | 0, f << 1 | 0) | 0, t << 16 >> 16 > 0) i = 0, n = 0;
              else return w = f >> 1, w = c + (w << 1) | 0, w = e[w >> 1] | 0, w = w << 16 >> 16, w = r + (w << 1) | 0, w = e[w >> 1] | 0, C = v, w | 0;
              do {
                for (a = 0, u = -32767; o = e[w + (a << 1) >> 1] | 0, s = o << 16 >> 16 < u << 16 >> 16, n = s ? n : a & 65535, a = a + 1 | 0, (a & 65535) << 16 >> 16 != t << 16 >> 16; ) u = s ? u : o;
                e[w + (n << 16 >> 16 << 1) >> 1] = -32768, e[c + (i << 1) >> 1] = n, i = i + 1 | 0;
              } while ((i & 65535) << 16 >> 16 != t << 16 >> 16);
              return w = f >> 1, w = c + (w << 1) | 0, w = e[w >> 1] | 0, w = w << 16 >> 16, w = r + (w << 1) | 0, w = e[w >> 1] | 0, C = v, w | 0;
            }
            function C6(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0;
              s = C, C = C + 32 | 0, u = s, U = t + 2 | 0, B = u + 2 | 0, e[u >> 1] = ((e[t >> 1] | 0) >>> 1) + ((e[r >> 1] | 0) >>> 1), F = t + 4 | 0, M = u + 4 | 0, e[B >> 1] = ((e[U >> 1] | 0) >>> 1) + ((e[r + 2 >> 1] | 0) >>> 1), I = t + 6 | 0, O = u + 6 | 0, e[M >> 1] = ((e[F >> 1] | 0) >>> 1) + ((e[r + 4 >> 1] | 0) >>> 1), D = t + 8 | 0, S = u + 8 | 0, e[O >> 1] = ((e[I >> 1] | 0) >>> 1) + ((e[r + 6 >> 1] | 0) >>> 1), E = t + 10 | 0, b = u + 10 | 0, e[S >> 1] = ((e[D >> 1] | 0) >>> 1) + ((e[r + 8 >> 1] | 0) >>> 1), d = t + 12 | 0, m = u + 12 | 0, e[b >> 1] = ((e[E >> 1] | 0) >>> 1) + ((e[r + 10 >> 1] | 0) >>> 1), p = t + 14 | 0, v = u + 14 | 0, e[m >> 1] = ((e[d >> 1] | 0) >>> 1) + ((e[r + 12 >> 1] | 0) >>> 1), w = t + 16 | 0, c = u + 16 | 0, e[v >> 1] = ((e[p >> 1] | 0) >>> 1) + ((e[r + 14 >> 1] | 0) >>> 1), f = t + 18 | 0, a = u + 18 | 0, e[c >> 1] = ((e[w >> 1] | 0) >>> 1) + ((e[r + 16 >> 1] | 0) >>> 1), e[a >> 1] = ((e[f >> 1] | 0) >>> 1) + ((e[r + 18 >> 1] | 0) >>> 1), X0(u, n, o), X0(t, n + 22 | 0, o), e[u >> 1] = ((e[i >> 1] | 0) >>> 1) + ((e[t >> 1] | 0) >>> 1), e[B >> 1] = ((e[i + 2 >> 1] | 0) >>> 1) + ((e[U >> 1] | 0) >>> 1), e[M >> 1] = ((e[i + 4 >> 1] | 0) >>> 1) + ((e[F >> 1] | 0) >>> 1), e[O >> 1] = ((e[i + 6 >> 1] | 0) >>> 1) + ((e[I >> 1] | 0) >>> 1), e[S >> 1] = ((e[i + 8 >> 1] | 0) >>> 1) + ((e[D >> 1] | 0) >>> 1), e[b >> 1] = ((e[i + 10 >> 1] | 0) >>> 1) + ((e[E >> 1] | 0) >>> 1), e[m >> 1] = ((e[i + 12 >> 1] | 0) >>> 1) + ((e[d >> 1] | 0) >>> 1), e[v >> 1] = ((e[i + 14 >> 1] | 0) >>> 1) + ((e[p >> 1] | 0) >>> 1), e[c >> 1] = ((e[i + 16 >> 1] | 0) >>> 1) + ((e[w >> 1] | 0) >>> 1), e[a >> 1] = ((e[i + 18 >> 1] | 0) >>> 1) + ((e[f >> 1] | 0) >>> 1), X0(u, n + 44 | 0, o), X0(i, n + 66 | 0, o), C = s;
            }
            function Qr(r, t, i, n, o) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0;
              var s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0;
              s = C, C = C + 32 | 0, u = s, U = t + 2 | 0, B = u + 2 | 0, e[u >> 1] = ((e[t >> 1] | 0) >>> 1) + ((e[r >> 1] | 0) >>> 1), F = t + 4 | 0, M = u + 4 | 0, e[B >> 1] = ((e[U >> 1] | 0) >>> 1) + ((e[r + 2 >> 1] | 0) >>> 1), I = t + 6 | 0, O = u + 6 | 0, e[M >> 1] = ((e[F >> 1] | 0) >>> 1) + ((e[r + 4 >> 1] | 0) >>> 1), D = t + 8 | 0, S = u + 8 | 0, e[O >> 1] = ((e[I >> 1] | 0) >>> 1) + ((e[r + 6 >> 1] | 0) >>> 1), E = t + 10 | 0, b = u + 10 | 0, e[S >> 1] = ((e[D >> 1] | 0) >>> 1) + ((e[r + 8 >> 1] | 0) >>> 1), d = t + 12 | 0, m = u + 12 | 0, e[b >> 1] = ((e[E >> 1] | 0) >>> 1) + ((e[r + 10 >> 1] | 0) >>> 1), p = t + 14 | 0, v = u + 14 | 0, e[m >> 1] = ((e[d >> 1] | 0) >>> 1) + ((e[r + 12 >> 1] | 0) >>> 1), w = t + 16 | 0, c = u + 16 | 0, e[v >> 1] = ((e[p >> 1] | 0) >>> 1) + ((e[r + 14 >> 1] | 0) >>> 1), f = t + 18 | 0, a = u + 18 | 0, e[c >> 1] = ((e[w >> 1] | 0) >>> 1) + ((e[r + 16 >> 1] | 0) >>> 1), e[a >> 1] = ((e[f >> 1] | 0) >>> 1) + ((e[r + 18 >> 1] | 0) >>> 1), X0(u, n, o), e[u >> 1] = ((e[i >> 1] | 0) >>> 1) + ((e[t >> 1] | 0) >>> 1), e[B >> 1] = ((e[i + 2 >> 1] | 0) >>> 1) + ((e[U >> 1] | 0) >>> 1), e[M >> 1] = ((e[i + 4 >> 1] | 0) >>> 1) + ((e[F >> 1] | 0) >>> 1), e[O >> 1] = ((e[i + 6 >> 1] | 0) >>> 1) + ((e[I >> 1] | 0) >>> 1), e[S >> 1] = ((e[i + 8 >> 1] | 0) >>> 1) + ((e[D >> 1] | 0) >>> 1), e[b >> 1] = ((e[i + 10 >> 1] | 0) >>> 1) + ((e[E >> 1] | 0) >>> 1), e[m >> 1] = ((e[i + 12 >> 1] | 0) >>> 1) + ((e[d >> 1] | 0) >>> 1), e[v >> 1] = ((e[i + 14 >> 1] | 0) >>> 1) + ((e[p >> 1] | 0) >>> 1), e[c >> 1] = ((e[i + 16 >> 1] | 0) >>> 1) + ((e[w >> 1] | 0) >>> 1), e[a >> 1] = ((e[i + 18 >> 1] | 0) >>> 1) + ((e[f >> 1] | 0) >>> 1), X0(u, n + 44 | 0, o), C = s;
            }
            function P6(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0;
              o = C, C = C + 32 | 0, s = o, W = e[r >> 1] | 0, e[s >> 1] = W - (W >>> 2) + ((e[t >> 1] | 0) >>> 2), W = r + 2 | 0, g = e[W >> 1] | 0, x = t + 2 | 0, Q = s + 2 | 0, e[Q >> 1] = g - (g >>> 2) + ((e[x >> 1] | 0) >>> 2), g = r + 4 | 0, T = e[g >> 1] | 0, K = t + 4 | 0, V = s + 4 | 0, e[V >> 1] = T - (T >>> 2) + ((e[K >> 1] | 0) >>> 2), T = r + 6 | 0, F = e[T >> 1] | 0, L = t + 6 | 0, U = s + 6 | 0, e[U >> 1] = F - (F >>> 2) + ((e[L >> 1] | 0) >>> 2), F = r + 8 | 0, O = e[F >> 1] | 0, B = t + 8 | 0, M = s + 8 | 0, e[M >> 1] = O - (O >>> 2) + ((e[B >> 1] | 0) >>> 2), O = r + 10 | 0, E = e[O >> 1] | 0, I = t + 10 | 0, D = s + 10 | 0, e[D >> 1] = E - (E >>> 2) + ((e[I >> 1] | 0) >>> 2), E = r + 12 | 0, m = e[E >> 1] | 0, S = t + 12 | 0, b = s + 12 | 0, e[b >> 1] = m - (m >>> 2) + ((e[S >> 1] | 0) >>> 2), m = r + 14 | 0, w = e[m >> 1] | 0, d = t + 14 | 0, p = s + 14 | 0, e[p >> 1] = w - (w >>> 2) + ((e[d >> 1] | 0) >>> 2), w = r + 16 | 0, a = e[w >> 1] | 0, v = t + 16 | 0, c = s + 16 | 0, e[c >> 1] = a - (a >>> 2) + ((e[v >> 1] | 0) >>> 2), a = r + 18 | 0, H = e[a >> 1] | 0, f = t + 18 | 0, u = s + 18 | 0, e[u >> 1] = H - (H >>> 2) + ((e[f >> 1] | 0) >>> 2), X0(s, i, n), e[s >> 1] = ((e[r >> 1] | 0) >>> 1) + ((e[t >> 1] | 0) >>> 1), e[Q >> 1] = ((e[W >> 1] | 0) >>> 1) + ((e[x >> 1] | 0) >>> 1), e[V >> 1] = ((e[g >> 1] | 0) >>> 1) + ((e[K >> 1] | 0) >>> 1), e[U >> 1] = ((e[T >> 1] | 0) >>> 1) + ((e[L >> 1] | 0) >>> 1), e[M >> 1] = ((e[F >> 1] | 0) >>> 1) + ((e[B >> 1] | 0) >>> 1), e[D >> 1] = ((e[O >> 1] | 0) >>> 1) + ((e[I >> 1] | 0) >>> 1), e[b >> 1] = ((e[E >> 1] | 0) >>> 1) + ((e[S >> 1] | 0) >>> 1), e[p >> 1] = ((e[m >> 1] | 0) >>> 1) + ((e[d >> 1] | 0) >>> 1), e[c >> 1] = ((e[w >> 1] | 0) >>> 1) + ((e[v >> 1] | 0) >>> 1), e[u >> 1] = ((e[a >> 1] | 0) >>> 1) + ((e[f >> 1] | 0) >>> 1), X0(s, i + 22 | 0, n), H = e[t >> 1] | 0, e[s >> 1] = H - (H >>> 2) + ((e[r >> 1] | 0) >>> 2), r = e[x >> 1] | 0, e[Q >> 1] = r - (r >>> 2) + ((e[W >> 1] | 0) >>> 2), r = e[K >> 1] | 0, e[V >> 1] = r - (r >>> 2) + ((e[g >> 1] | 0) >>> 2), r = e[L >> 1] | 0, e[U >> 1] = r - (r >>> 2) + ((e[T >> 1] | 0) >>> 2), r = e[B >> 1] | 0, e[M >> 1] = r - (r >>> 2) + ((e[F >> 1] | 0) >>> 2), r = e[I >> 1] | 0, e[D >> 1] = r - (r >>> 2) + ((e[O >> 1] | 0) >>> 2), r = e[S >> 1] | 0, e[b >> 1] = r - (r >>> 2) + ((e[E >> 1] | 0) >>> 2), r = e[d >> 1] | 0, e[p >> 1] = r - (r >>> 2) + ((e[m >> 1] | 0) >>> 2), r = e[v >> 1] | 0, e[c >> 1] = r - (r >>> 2) + ((e[w >> 1] | 0) >>> 2), r = e[f >> 1] | 0, e[u >> 1] = r - (r >>> 2) + ((e[a >> 1] | 0) >>> 2), X0(s, i + 44 | 0, n), X0(t, i + 66 | 0, n), C = o;
            }
            function Zr(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0;
              o = C, C = C + 32 | 0, s = o, W = e[r >> 1] | 0, e[s >> 1] = W - (W >>> 2) + ((e[t >> 1] | 0) >>> 2), W = r + 2 | 0, g = e[W >> 1] | 0, x = t + 2 | 0, Q = s + 2 | 0, e[Q >> 1] = g - (g >>> 2) + ((e[x >> 1] | 0) >>> 2), g = r + 4 | 0, T = e[g >> 1] | 0, K = t + 4 | 0, V = s + 4 | 0, e[V >> 1] = T - (T >>> 2) + ((e[K >> 1] | 0) >>> 2), T = r + 6 | 0, F = e[T >> 1] | 0, L = t + 6 | 0, U = s + 6 | 0, e[U >> 1] = F - (F >>> 2) + ((e[L >> 1] | 0) >>> 2), F = r + 8 | 0, O = e[F >> 1] | 0, B = t + 8 | 0, M = s + 8 | 0, e[M >> 1] = O - (O >>> 2) + ((e[B >> 1] | 0) >>> 2), O = r + 10 | 0, E = e[O >> 1] | 0, I = t + 10 | 0, D = s + 10 | 0, e[D >> 1] = E - (E >>> 2) + ((e[I >> 1] | 0) >>> 2), E = r + 12 | 0, m = e[E >> 1] | 0, S = t + 12 | 0, b = s + 12 | 0, e[b >> 1] = m - (m >>> 2) + ((e[S >> 1] | 0) >>> 2), m = r + 14 | 0, w = e[m >> 1] | 0, d = t + 14 | 0, p = s + 14 | 0, e[p >> 1] = w - (w >>> 2) + ((e[d >> 1] | 0) >>> 2), w = r + 16 | 0, a = e[w >> 1] | 0, v = t + 16 | 0, c = s + 16 | 0, e[c >> 1] = a - (a >>> 2) + ((e[v >> 1] | 0) >>> 2), a = r + 18 | 0, H = e[a >> 1] | 0, f = t + 18 | 0, u = s + 18 | 0, e[u >> 1] = H - (H >>> 2) + ((e[f >> 1] | 0) >>> 2), X0(s, i, n), e[s >> 1] = ((e[r >> 1] | 0) >>> 1) + ((e[t >> 1] | 0) >>> 1), e[Q >> 1] = ((e[W >> 1] | 0) >>> 1) + ((e[x >> 1] | 0) >>> 1), e[V >> 1] = ((e[g >> 1] | 0) >>> 1) + ((e[K >> 1] | 0) >>> 1), e[U >> 1] = ((e[T >> 1] | 0) >>> 1) + ((e[L >> 1] | 0) >>> 1), e[M >> 1] = ((e[F >> 1] | 0) >>> 1) + ((e[B >> 1] | 0) >>> 1), e[D >> 1] = ((e[O >> 1] | 0) >>> 1) + ((e[I >> 1] | 0) >>> 1), e[b >> 1] = ((e[E >> 1] | 0) >>> 1) + ((e[S >> 1] | 0) >>> 1), e[p >> 1] = ((e[m >> 1] | 0) >>> 1) + ((e[d >> 1] | 0) >>> 1), e[c >> 1] = ((e[w >> 1] | 0) >>> 1) + ((e[v >> 1] | 0) >>> 1), e[u >> 1] = ((e[a >> 1] | 0) >>> 1) + ((e[f >> 1] | 0) >>> 1), X0(s, i + 22 | 0, n), t = e[t >> 1] | 0, e[s >> 1] = t - (t >>> 2) + ((e[r >> 1] | 0) >>> 2), r = e[x >> 1] | 0, e[Q >> 1] = r - (r >>> 2) + ((e[W >> 1] | 0) >>> 2), r = e[K >> 1] | 0, e[V >> 1] = r - (r >>> 2) + ((e[g >> 1] | 0) >>> 2), r = e[L >> 1] | 0, e[U >> 1] = r - (r >>> 2) + ((e[T >> 1] | 0) >>> 2), r = e[B >> 1] | 0, e[M >> 1] = r - (r >>> 2) + ((e[F >> 1] | 0) >>> 2), r = e[I >> 1] | 0, e[D >> 1] = r - (r >>> 2) + ((e[O >> 1] | 0) >>> 2), r = e[S >> 1] | 0, e[b >> 1] = r - (r >>> 2) + ((e[E >> 1] | 0) >>> 2), r = e[d >> 1] | 0, e[p >> 1] = r - (r >>> 2) + ((e[m >> 1] | 0) >>> 2), r = e[v >> 1] | 0, e[c >> 1] = r - (r >>> 2) + ((e[w >> 1] | 0) >>> 2), r = e[f >> 1] | 0, e[u >> 1] = r - (r >>> 2) + ((e[a >> 1] | 0) >>> 2), X0(s, i + 44 | 0, n), C = o;
            }
            function D2(r, t) {
              r = r | 0, t = t | 0;
              var i = 0, n = 0;
              return (r | 0) < 1 ? (t = 1073741823, t | 0) : (i = ($1(r) | 0) << 16 >> 16, t = 30 - i | 0, r = r << i >> (t & 1 ^ 1), i = (r >> 25 << 16) + -1048576 >> 16, n = e[7030 + (i << 1) >> 1] | 0, t = (n << 16) - (k(n - (R[7030 + (i + 1 << 1) >> 1] | 0) << 16 >> 15, r >>> 10 & 32767) | 0) >> (t << 16 >> 17) + 1, t | 0);
            }
            function N2(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, n = $1(r) | 0, I6(r << (n << 16 >> 16), n, t, i);
            }
            function I6(r, t, i, n) {
              if (r = r | 0, t = t | 0, i = i | 0, n = n | 0, (r | 0) < 1) {
                e[i >> 1] = 0, i = 0, e[n >> 1] = i;
                return;
              } else {
                e[i >> 1] = 30 - (t & 65535), i = (r >> 25 << 16) + -2097152 >> 16, t = e[7128 + (i << 1) >> 1] | 0, i = ((t << 16) - (k(r >>> 9 & 65534, t - (R[7128 + (i + 1 << 1) >> 1] | 0) << 16 >> 16) | 0) | 0) >>> 16 & 65535, e[n >> 1] = i;
                return;
              }
            }
            function pe(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0;
              for (n = r + 2 | 0, i = e[n >> 1] | 0, e[t >> 1] = i, o = r + 4 | 0, e[t + 2 >> 1] = (R[o >> 1] | 0) - (R[r >> 1] | 0), e[t + 4 >> 1] = (R[r + 6 >> 1] | 0) - (R[n >> 1] | 0), n = r + 8 | 0, e[t + 6 >> 1] = (R[n >> 1] | 0) - (R[o >> 1] | 0), e[t + 8 >> 1] = (R[r + 10 >> 1] | 0) - (R[r + 6 >> 1] | 0), o = r + 12 | 0, e[t + 10 >> 1] = (R[o >> 1] | 0) - (R[n >> 1] | 0), e[t + 12 >> 1] = (R[r + 14 >> 1] | 0) - (R[r + 10 >> 1] | 0), e[t + 14 >> 1] = (R[r + 16 >> 1] | 0) - (R[o >> 1] | 0), e[t + 16 >> 1] = (R[r + 18 >> 1] | 0) - (R[r + 14 >> 1] | 0), e[t + 18 >> 1] = 16384 - (R[r + 16 >> 1] | 0), r = 10, o = t; i = i << 16 >> 16, t = (i << 16) + -120782848 | 0, (t | 0) > 0 ? t = 1843 - ((t >> 16) * 12484 >> 16) | 0 : t = 3427 - ((i * 56320 | 0) >>> 16) | 0, n = o + 2 | 0, e[o >> 1] = t << 3, r = r + -1 << 16 >> 16, !!(r << 16 >> 16); ) i = e[n >> 1] | 0, o = n;
            }
            function ve(r, t, i) {
              return r = r | 0, t = t | 0, i = i | 0, i = t << 16 >> 16, t << 16 >> 16 > 31 ? (t = 0, t | 0) : t << 16 >> 16 > 0 ? ((1 << i + -1 & r | 0) != 0 & 1) + (t << 16 >> 16 < 31 ? r >> i : 0) | 0 : (i = 0 - i << 16 >> 16, t = r << i, t = (t >> i | 0) == (r | 0) ? t : r >> 31 ^ 2147483647, t | 0);
            }
            function X0(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0;
              for (b = C, C = C + 48 | 0, m = b + 24 | 0, d = b, v = m + 4 | 0, l[m >> 2] = 16777216, n = 0 - (e[r >> 1] | 0) | 0, p = m + 8 | 0, l[v >> 2] = n << 10, o = e[r + 4 >> 1] | 0, f = n >> 6, l[p >> 2] = 33554432 - (((k((n << 9) - (f << 15) << 16 >> 16, o) | 0) >> 15) + (k(f, o) | 0) << 2), f = m + 4 | 0, o = (l[f >> 2] | 0) - (o << 10) | 0, l[f >> 2] = o, f = m + 12 | 0, n = m + 4 | 0, l[f >> 2] = o, i = e[r + 8 >> 1] | 0, s = o, c = 1; a = f + -4 | 0, u = l[a >> 2] | 0, w = u >> 16, l[f >> 2] = s + o - (((k((u >>> 1) - (w << 15) << 16 >> 16, i) | 0) >> 15) + (k(w, i) | 0) << 2), (c | 0) != 2; ) s = l[f + -12 >> 2] | 0, f = a, o = u, c = c + 1 | 0;
              for (l[n >> 2] = (l[n >> 2] | 0) - (i << 10), i = m + 16 | 0, n = l[m + 8 >> 2] | 0, l[i >> 2] = n, a = e[r + 12 >> 1] | 0, o = n, f = 1; u = i + -4 | 0, s = l[u >> 2] | 0, w = s >> 16, l[i >> 2] = o + n - (((k((s >>> 1) - (w << 15) << 16 >> 16, a) | 0) >> 15) + (k(w, a) | 0) << 2), (f | 0) != 3; ) o = l[i + -12 >> 2] | 0, i = u, n = s, f = f + 1 | 0;
              for (i = m + 4 | 0, l[i >> 2] = (l[i >> 2] | 0) - (a << 10), i = m + 20 | 0, o = l[m + 12 >> 2] | 0, l[i >> 2] = o, n = e[r + 16 >> 1] | 0, s = o, f = 1; a = i + -4 | 0, u = l[a >> 2] | 0, w = u >> 16, l[i >> 2] = s + o - (((k((u >>> 1) - (w << 15) << 16 >> 16, n) | 0) >> 15) + (k(w, n) | 0) << 2), (f | 0) != 4; ) s = l[i + -12 >> 2] | 0, i = a, o = u, f = f + 1 | 0;
              for (f = m + 4 | 0, l[f >> 2] = (l[f >> 2] | 0) - (n << 10), l[d >> 2] = 16777216, f = 0 - (e[r + 2 >> 1] | 0) | 0, w = d + 8 | 0, l[d + 4 >> 2] = f << 10, n = e[r + 6 >> 1] | 0, c = f >> 6, l[w >> 2] = 33554432 - (((k((f << 9) - (c << 15) << 16 >> 16, n) | 0) >> 15) + (k(c, n) | 0) << 2), c = d + 4 | 0, n = (l[c >> 2] | 0) - (n << 10) | 0, l[c >> 2] = n, c = d + 12 | 0, f = d + 4 | 0, l[c >> 2] = n, a = e[r + 10 >> 1] | 0, o = n, i = 1; u = c + -4 | 0, s = l[u >> 2] | 0, E = s >> 16, l[c >> 2] = o + n - (((k((s >>> 1) - (E << 15) << 16 >> 16, a) | 0) >> 15) + (k(E, a) | 0) << 2), (i | 0) != 2; ) o = l[c + -12 >> 2] | 0, c = u, n = s, i = i + 1 | 0;
              for (l[f >> 2] = (l[f >> 2] | 0) - (a << 10), f = d + 16 | 0, n = l[d + 8 >> 2] | 0, l[f >> 2] = n, a = e[r + 14 >> 1] | 0, o = n, i = 1; u = f + -4 | 0, s = l[u >> 2] | 0, E = s >> 16, l[f >> 2] = o + n - (((k((s >>> 1) - (E << 15) << 16 >> 16, a) | 0) >> 15) + (k(E, a) | 0) << 2), (i | 0) != 3; ) o = l[f + -12 >> 2] | 0, f = u, n = s, i = i + 1 | 0;
              for (i = d + 4 | 0, l[i >> 2] = (l[i >> 2] | 0) - (a << 10), i = d + 20 | 0, a = l[d + 12 >> 2] | 0, l[i >> 2] = a, n = e[r + 18 >> 1] | 0, u = a, f = 1; o = i + -4 | 0, s = l[o >> 2] | 0, E = s >> 16, l[i >> 2] = u + a - (((k((s >>> 1) - (E << 15) << 16 >> 16, n) | 0) >> 15) + (k(E, n) | 0) << 2), (f | 0) != 4; ) u = l[i + -12 >> 2] | 0, i = o, a = s, f = f + 1 | 0;
              u = (l[d + 4 >> 2] | 0) - (n << 10) | 0, c = m + 20 | 0, a = d + 20 | 0, f = l[m + 16 >> 2] | 0, r = (l[c >> 2] | 0) + f | 0, l[c >> 2] = r, c = l[d + 16 >> 2] | 0, E = (l[a >> 2] | 0) - c | 0, l[a >> 2] = E, a = l[m + 12 >> 2] | 0, f = f + a | 0, l[m + 16 >> 2] = f, s = l[d + 12 >> 2] | 0, c = c - s | 0, l[d + 16 >> 2] = c, n = l[p >> 2] | 0, a = a + n | 0, l[m + 12 >> 2] = a, o = l[w >> 2] | 0, p = s - o | 0, l[d + 12 >> 2] = p, s = l[v >> 2] | 0, w = n + s | 0, l[m + 8 >> 2] = w, v = o - u | 0, l[d + 8 >> 2] = v, m = s + (l[m >> 2] | 0) | 0, d = u - (l[d >> 2] | 0) | 0, e[t >> 1] = 4096, m = m + 4096 | 0, e[t + 2 >> 1] = (m + d | 0) >>> 13, e[t + 20 >> 1] = (m - d | 0) >>> 13, d = w + 4096 | 0, e[t + 4 >> 1] = (d + v | 0) >>> 13, e[t + 18 >> 1] = (d - v | 0) >>> 13, d = a + 4096 | 0, e[t + 6 >> 1] = (d + p | 0) >>> 13, e[t + 16 >> 1] = (d - p | 0) >>> 13, d = f + 4096 | 0, e[t + 8 >> 1] = (d + c | 0) >>> 13, e[t + 14 >> 1] = (d - c | 0) >>> 13, d = r + 4096 | 0, e[t + 10 >> 1] = (d + E | 0) >>> 13, e[t + 12 >> 1] = (d - E | 0) >>> 13, C = b;
            }
            function $r(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0, o = 0, s = 0;
              if (!r || (l[r >> 2] = 0, t = A0(44) | 0, !t) || (i = t + 40 | 0, (ii(i) | 0) << 16 >> 16)) return s = -1, s | 0;
              n = t, o = 7452, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              n = t + 20 | 0, o = 7452, s = n + 20 | 0;
              do
                e[n >> 1] = e[o >> 1] | 0, n = n + 2 | 0, o = o + 2 | 0;
              while ((n | 0) < (s | 0));
              return N6(l[i >> 2] | 0) | 0, l[r >> 2] = t, s = 0, s | 0;
            }
            function O6(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0;
              if (!r) return n = -1, n | 0;
              t = r, i = 7452, n = t + 20 | 0;
              do
                e[t >> 1] = e[i >> 1] | 0, t = t + 2 | 0, i = i + 2 | 0;
              while ((t | 0) < (n | 0));
              t = r + 20 | 0, i = 7452, n = t + 20 | 0;
              do
                e[t >> 1] = e[i >> 1] | 0, t = t + 2 | 0, i = i + 2 | 0;
              while ((t | 0) < (n | 0));
              return N6(l[r + 40 >> 2] | 0) | 0, n = 0, n | 0;
            }
            function jr(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (ti(t + 40 | 0), f0(l[r >> 2] | 0), l[r >> 2] = 0));
            }
            function ei(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0;
              if (p = C, C = C + 64 | 0, v = p + 44 | 0, f = p + 24 | 0, c = p + 4 | 0, w = p, (t | 0) == 7 ? (me(n + 22 | 0, f, r, a), me(n + 66 | 0, s, f, a), Qr(r, f, s, n, a), (i | 0) == 8 ? n = 6 : (ri(l[r + 40 >> 2] | 0, f, s, c, v, l[u >> 2] | 0, a), C6(r + 20 | 0, c, v, o, a), o = (l[u >> 2] | 0) + 10 | 0, n = 7)) : (me(n + 66 | 0, s, r, a), Zr(r, s, n, a), (i | 0) == 8 ? n = 6 : (L6(l[r + 40 >> 2] | 0, t, s, v, l[u >> 2] | 0, w, a), P6(r + 20 | 0, v, o, a), o = (l[u >> 2] | 0) + 6 | 0, n = 7)), (n | 0) == 6) {
                n = r, o = n + 20 | 0;
                do
                  e[n >> 1] = e[s >> 1] | 0, n = n + 2 | 0, s = s + 2 | 0;
                while ((n | 0) < (o | 0));
                C = p;
                return;
              } else if ((n | 0) == 7) {
                l[u >> 2] = o, n = r, o = n + 20 | 0;
                do
                  e[n >> 1] = e[s >> 1] | 0, n = n + 2 | 0, s = s + 2 | 0;
                while ((n | 0) < (o | 0));
                n = r + 20 | 0, s = v, o = n + 20 | 0;
                do
                  e[n >> 1] = e[s >> 1] | 0, n = n + 2 | 0, s = s + 2 | 0;
                while ((n | 0) < (o | 0));
                C = p;
                return;
              }
            }
            function H0(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0;
              if (i << 16 >> 16 > 0) n = 0;
              else return;
              do
                s = e[r + (n << 1) >> 1] | 0, u = s >> 8, o = e[7194 + (u << 1) >> 1] | 0, e[t + (n << 1) >> 1] = ((k((e[7194 + (u + 1 << 1) >> 1] | 0) - o | 0, s & 255) | 0) >>> 8) + o, n = n + 1 | 0;
              while ((n & 65535) << 16 >> 16 != i << 16 >> 16);
            }
            function v5(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0;
              if (n = (i << 16 >> 16) + -1 | 0, i = n & 65535, !(i << 16 >> 16 <= -1)) for (o = 63, u = t + (n << 1) | 0, s = r + (n << 1) | 0; ; ) {
                for (r = e[s >> 1] | 0, t = o; n = t << 16 >> 16, o = e[7194 + (n << 1) >> 1] | 0, r << 16 >> 16 > o << 16 >> 16; ) t = t + -1 << 16 >> 16;
                if (e[u >> 1] = (((k(e[7324 + (n << 1) >> 1] | 0, (r << 16 >> 16) - (o << 16 >> 16) | 0) | 0) + 2048 | 0) >>> 12) + (n << 8), i = i + -1 << 16 >> 16, i << 16 >> 16 > -1) o = t, u = u + -2 | 0, s = s + -2 | 0;
                else break;
              }
            }
            function he(r, t, i) {
              return r = r | 0, t = t | 0, i = i | 0, r = (k(t << 16 >> 16, r << 16 >> 16) | 0) + 16384 >> 15, r = r | 0 - (r & 65536), (r | 0) <= 32767 ? (r | 0) < -32768 && (l[i >> 2] = 1, r = -32768) : (l[i >> 2] = 1, r = 32767), r & 65535 | 0;
            }
            function $1(r) {
              r = r | 0;
              var t = 0;
              e: do
                if ((r | 0) != 0 && (t = r - (r >>> 31) | 0, t = t >> 31 ^ t, (t & 1073741824 | 0) == 0)) {
                  for (r = t, t = 0; ; ) {
                    if (r & 536870912) {
                      r = 7;
                      break;
                    }
                    if (r & 268435456) {
                      r = 8;
                      break;
                    }
                    if (r & 134217728) {
                      r = 9;
                      break;
                    }
                    if (t = t + 4 << 16 >> 16, r = r << 4, r & 1073741824) break e;
                  }
                  if ((r | 0) == 7) {
                    t = t | 1;
                    break;
                  } else if ((r | 0) == 8) {
                    t = t | 2;
                    break;
                  } else if ((r | 0) == 9) {
                    t = t | 3;
                    break;
                  }
                } else t = 0;
              while (false);
              return t | 0;
            }
            function i5(r) {
              r = r | 0;
              var t = 0, i = 0;
              if (!(r << 16 >> 16)) return i = 0, i | 0;
              if (t = (r & 65535) - ((r & 65535) >>> 15 & 65535) | 0, t = (t << 16 >> 31 ^ t) << 16, r = t >> 16, !(r & 16384)) i = t, t = 0;
              else return i = 0, i | 0;
              for (; ; ) {
                if (r & 8192) {
                  r = t, i = 7;
                  break;
                }
                if (r & 4096) {
                  r = t, i = 8;
                  break;
                }
                if (r & 2048) {
                  r = t, i = 9;
                  break;
                }
                if (t = t + 4 << 16 >> 16, i = i << 4, r = i >> 16, r & 16384) {
                  r = t, i = 10;
                  break;
                }
              }
              return (i | 0) == 7 ? (i = r | 1, i | 0) : (i | 0) == 8 ? (i = r | 2, i | 0) : (i | 0) == 9 ? (i = r | 3, i | 0) : (i | 0) == 10 ? r | 0 : 0;
            }
            function a2(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0;
              return t = t << 16 >> 16, (t & 134217727 | 0) == 33554432 ? (l[i >> 2] = 1, t = 2147483647) : t = t << 6, n = t >>> 16 & 31, s = e[7792 + (n << 1) >> 1] | 0, o = s << 16, t = k(s - (R[7792 + (n + 1 << 1) >> 1] | 0) << 16 >> 16, t >>> 1 & 32767) | 0, (t | 0) == 1073741824 ? (l[i >> 2] = 1, n = 2147483647) : n = t << 1, t = o - n | 0, ((t ^ o) & (n ^ o) | 0) >= 0 ? (s = t, r = r & 65535, r = 30 - r | 0, r = r & 65535, i = ve(s, r, i) | 0, i | 0) : (l[i >> 2] = 1, s = (s >>> 15 & 1) + 2147483647 | 0, r = r & 65535, r = 30 - r | 0, r = r & 65535, i = ve(s, r, i) | 0, i | 0);
            }
            function h5(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0;
              if (p = C, C = C + 48 | 0, v = p, w = 0 - (i & 65535) | 0, w = o << 16 >> 16 == 0 ? w : w << 1 & 131070, i = w & 65535, w = (i << 16 >> 16 < 0 ? w + 6 | 0 : w) << 16 >> 16, s = 6 - w | 0, e[v >> 1] = e[7858 + (w << 1) >> 1] | 0, e[v + 2 >> 1] = e[7858 + (s << 1) >> 1] | 0, e[v + 4 >> 1] = e[7858 + (w + 6 << 1) >> 1] | 0, e[v + 6 >> 1] = e[7858 + (s + 6 << 1) >> 1] | 0, e[v + 8 >> 1] = e[7858 + (w + 12 << 1) >> 1] | 0, e[v + 10 >> 1] = e[7858 + (s + 12 << 1) >> 1] | 0, e[v + 12 >> 1] = e[7858 + (w + 18 << 1) >> 1] | 0, e[v + 14 >> 1] = e[7858 + (s + 18 << 1) >> 1] | 0, e[v + 16 >> 1] = e[7858 + (w + 24 << 1) >> 1] | 0, e[v + 18 >> 1] = e[7858 + (s + 24 << 1) >> 1] | 0, e[v + 20 >> 1] = e[7858 + (w + 30 << 1) >> 1] | 0, e[v + 22 >> 1] = e[7858 + (s + 30 << 1) >> 1] | 0, e[v + 24 >> 1] = e[7858 + (w + 36 << 1) >> 1] | 0, e[v + 26 >> 1] = e[7858 + (s + 36 << 1) >> 1] | 0, e[v + 28 >> 1] = e[7858 + (w + 42 << 1) >> 1] | 0, e[v + 30 >> 1] = e[7858 + (s + 42 << 1) >> 1] | 0, e[v + 32 >> 1] = e[7858 + (w + 48 << 1) >> 1] | 0, e[v + 34 >> 1] = e[7858 + (s + 48 << 1) >> 1] | 0, e[v + 36 >> 1] = e[7858 + (w + 54 << 1) >> 1] | 0, e[v + 38 >> 1] = e[7858 + (s + 54 << 1) >> 1] | 0, s = n << 16 >> 16 >>> 1 & 65535, !(s << 16 >> 16)) {
                C = p;
                return;
              }
              for (w = r + ((i << 16 >> 16 >> 15 << 16 >> 16) - (t << 16 >> 16) << 1) | 0; ; ) {
                for (c = w + 2 | 0, u = e[c >> 1] | 0, t = u, n = w, a = 5, f = v, o = 16384, i = 16384; d = e[f >> 1] | 0, b = (k(d, t << 16 >> 16) | 0) + i | 0, m = e[c + -2 >> 1] | 0, i = (k(m, d) | 0) + o | 0, d = n, n = n + 4 | 0, E = e[f + 2 >> 1] | 0, i = i + (k(E, u << 16 >> 16) | 0) | 0, o = e[n >> 1] | 0, E = b + (k(o, E) | 0) | 0, c = c + -4 | 0, b = e[f + 4 >> 1] | 0, m = E + (k(b, m) | 0) | 0, t = e[c >> 1] | 0, b = i + (k(t << 16 >> 16, b) | 0) | 0, i = e[f + 6 >> 1] | 0, o = b + (k(i, o) | 0) | 0, u = e[d + 6 >> 1] | 0, i = m + (k(u << 16 >> 16, i) | 0) | 0, !(a << 16 >> 16 <= 1); ) a = a + -1 << 16 >> 16, f = f + 8 | 0;
                if (e[r >> 1] = o >>> 15, e[r + 2 >> 1] = i >>> 15, s = s + -1 << 16 >> 16, s << 16 >> 16) w = w + 4 | 0, r = r + 4 | 0;
                else break;
              }
              C = p;
            }
            function L6(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0;
              if (T = C, C = C + 144 | 0, E = T + 120 | 0, M = T + 100 | 0, B = T + 80 | 0, U = T + 60 | 0, F = T + 40 | 0, m = T + 20 | 0, d = T, v5(i, E, 10, u), pe(E, M, u), (t | 0) == 8) for (e[s >> 1] = 0, f = 2147483647, b = 0; ; ) {
                w = b * 10 | 0, i = 0, c = 0;
                do
                  I = (R[7980 + (c + w << 1) >> 1] | 0) + (R[8140 + (c << 1) >> 1] | 0) | 0, e[d + (c << 1) >> 1] = I, I = (R[E + (c << 1) >> 1] | 0) - (I & 65535) | 0, e[m + (c << 1) >> 1] = I, I = I << 16, i = (k(I >> 15, I >> 16) | 0) + i | 0, c = c + 1 | 0;
                while ((c | 0) != 10);
                if ((i | 0) < (f | 0)) {
                  S = U, p = m, v = S + 20 | 0;
                  do
                    e[S >> 1] = e[p >> 1] | 0, S = S + 2 | 0, p = p + 2 | 0;
                  while ((S | 0) < (v | 0));
                  S = B, p = d, v = S + 20 | 0;
                  do
                    e[S >> 1] = e[p >> 1] | 0, S = S + 2 | 0, p = p + 2 | 0;
                  while ((S | 0) < (v | 0));
                  S = r, p = 7980 + (w << 1) | 0, v = S + 20 | 0;
                  do
                    e[S >> 1] = e[p >> 1] | 0, S = S + 2 | 0, p = p + 2 | 0;
                  while ((S | 0) < (v | 0));
                  e[s >> 1] = b;
                } else i = f;
                if (b = b + 1 | 0, (b | 0) == 8) break;
                f = i;
              }
              else {
                i = 0;
                do
                  I = k(e[8160 + (i << 1) >> 1] | 0, e[r + (i << 1) >> 1] | 0) | 0, I = (I >>> 15) + (R[8140 + (i << 1) >> 1] | 0) | 0, e[B + (i << 1) >> 1] = I, e[U + (i << 1) >> 1] = (R[E + (i << 1) >> 1] | 0) - I, i = i + 1 | 0;
                while ((i | 0) != 10);
              }
              do
                if (t >>> 0 >= 2) if (I = U + 2 | 0, O = U + 4 | 0, D = R[U >> 1] | 0, S = e[M >> 1] << 1, E = R[I >> 1] | 0, m = e[M + 2 >> 1] << 1, p = R[O >> 1] | 0, v = e[M + 4 >> 1] << 1, (t | 0) == 5) {
                  for (d = 2147483647, s = 0, i = 0, b = 17908; c = (k(D - (R[b >> 1] | 0) << 16 >> 16, S) | 0) >> 16, c = k(c, c) | 0, w = (k(E - (R[b + 2 >> 1] | 0) << 16 >> 16, m) | 0) >> 16, c = (k(w, w) | 0) + c | 0, w = (k(p - (R[b + 4 >> 1] | 0) << 16 >> 16, v) | 0) >> 16, w = c + (k(w, w) | 0) | 0, c = (w | 0) < (d | 0), i = c ? s : i, s = s + 1 << 16 >> 16, !(s << 16 >> 16 >= 512); ) d = c ? w : d, b = b + 6 | 0;
                  for (w = (i << 16 >> 16) * 3 | 0, e[U >> 1] = e[17908 + (w << 1) >> 1] | 0, e[I >> 1] = e[17908 + (w + 1 << 1) >> 1] | 0, e[O >> 1] = e[17908 + (w + 2 << 1) >> 1] | 0, e[o >> 1] = i, w = U + 6 | 0, c = U + 8 | 0, D = U + 10 | 0, b = R[w >> 1] | 0, s = e[M + 6 >> 1] << 1, d = R[c >> 1] | 0, m = e[M + 8 >> 1] << 1, p = R[D >> 1] | 0, v = e[M + 10 >> 1] << 1, a = 2147483647, E = 0, i = 0, S = 9716; f = (k(s, b - (R[S >> 1] | 0) << 16 >> 16) | 0) >> 16, f = k(f, f) | 0, t = (k(m, d - (R[S + 2 >> 1] | 0) << 16 >> 16) | 0) >> 16, f = (k(t, t) | 0) + f | 0, t = (k(v, p - (R[S + 4 >> 1] | 0) << 16 >> 16) | 0) >> 16, t = f + (k(t, t) | 0) | 0, f = (t | 0) < (a | 0), i = f ? E : i, E = E + 1 << 16 >> 16, !(E << 16 >> 16 >= 512); ) a = f ? t : a, S = S + 6 | 0;
                  a = (i << 16 >> 16) * 3 | 0, e[w >> 1] = e[9716 + (a << 1) >> 1] | 0, e[c >> 1] = e[9716 + (a + 1 << 1) >> 1] | 0, e[D >> 1] = e[9716 + (a + 2 << 1) >> 1] | 0, e[o + 2 >> 1] = i, a = U + 12 | 0, e[o + 4 >> 1] = de(a, 12788, M + 12 | 0, 512) | 0, E = I, b = O, i = D, f = U;
                  break;
                } else {
                  for (d = 2147483647, s = 0, i = 0, b = 8180; c = (k(D - (R[b >> 1] | 0) << 16 >> 16, S) | 0) >> 16, c = k(c, c) | 0, w = (k(E - (R[b + 2 >> 1] | 0) << 16 >> 16, m) | 0) >> 16, c = (k(w, w) | 0) + c | 0, w = (k(p - (R[b + 4 >> 1] | 0) << 16 >> 16, v) | 0) >> 16, w = c + (k(w, w) | 0) | 0, c = (w | 0) < (d | 0), i = c ? s : i, s = s + 1 << 16 >> 16, !(s << 16 >> 16 >= 256); ) d = c ? w : d, b = b + 6 | 0;
                  for (w = (i << 16 >> 16) * 3 | 0, e[U >> 1] = e[8180 + (w << 1) >> 1] | 0, e[I >> 1] = e[8180 + (w + 1 << 1) >> 1] | 0, e[O >> 1] = e[8180 + (w + 2 << 1) >> 1] | 0, e[o >> 1] = i, w = U + 6 | 0, c = U + 8 | 0, D = U + 10 | 0, b = R[w >> 1] | 0, s = e[M + 6 >> 1] << 1, d = R[c >> 1] | 0, m = e[M + 8 >> 1] << 1, p = R[D >> 1] | 0, v = e[M + 10 >> 1] << 1, a = 2147483647, E = 0, i = 0, S = 9716; f = (k(s, b - (R[S >> 1] | 0) << 16 >> 16) | 0) >> 16, f = k(f, f) | 0, t = (k(m, d - (R[S + 2 >> 1] | 0) << 16 >> 16) | 0) >> 16, f = (k(t, t) | 0) + f | 0, t = (k(v, p - (R[S + 4 >> 1] | 0) << 16 >> 16) | 0) >> 16, t = f + (k(t, t) | 0) | 0, f = (t | 0) < (a | 0), i = f ? E : i, E = E + 1 << 16 >> 16, !(E << 16 >> 16 >= 512); ) a = f ? t : a, S = S + 6 | 0;
                  a = (i << 16 >> 16) * 3 | 0, e[w >> 1] = e[9716 + (a << 1) >> 1] | 0, e[c >> 1] = e[9716 + (a + 1 << 1) >> 1] | 0, e[D >> 1] = e[9716 + (a + 2 << 1) >> 1] | 0, e[o + 2 >> 1] = i, a = U + 12 | 0, e[o + 4 >> 1] = de(a, 12788, M + 12 | 0, 512) | 0, E = I, b = O, i = D, f = U;
                  break;
                }
                else {
                  for (O = U + 2 | 0, I = U + 4 | 0, w = R[U >> 1] | 0, c = e[M >> 1] << 1, f = R[O >> 1] | 0, a = e[M + 2 >> 1] << 1, t = R[I >> 1] | 0, v = e[M + 4 >> 1] << 1, d = 2147483647, s = 0, i = 0, b = 8180; m = (k(c, w - (R[b >> 1] | 0) << 16 >> 16) | 0) >> 16, m = k(m, m) | 0, p = (k(a, f - (R[b + 2 >> 1] | 0) << 16 >> 16) | 0) >> 16, m = (k(p, p) | 0) + m | 0, p = (k(v, t - (R[b + 4 >> 1] | 0) << 16 >> 16) | 0) >> 16, p = m + (k(p, p) | 0) | 0, m = (p | 0) < (d | 0), i = m ? s : i, s = s + 1 << 16 >> 16, !(s << 16 >> 16 >= 256); ) d = m ? p : d, b = b + 6 | 0;
                  for (w = (i << 16 >> 16) * 3 | 0, e[U >> 1] = e[8180 + (w << 1) >> 1] | 0, e[O >> 1] = e[8180 + (w + 1 << 1) >> 1] | 0, e[I >> 1] = e[8180 + (w + 2 << 1) >> 1] | 0, e[o >> 1] = i, w = U + 6 | 0, c = U + 8 | 0, D = U + 10 | 0, b = R[w >> 1] | 0, s = e[M + 6 >> 1] << 1, d = R[c >> 1] | 0, m = e[M + 8 >> 1] << 1, p = R[D >> 1] | 0, v = e[M + 10 >> 1] << 1, a = 2147483647, E = 0, i = 0, S = 9716; f = (k(s, b - (R[S >> 1] | 0) << 16 >> 16) | 0) >> 16, f = k(f, f) | 0, t = (k(m, d - (R[S + 2 >> 1] | 0) << 16 >> 16) | 0) >> 16, f = (k(t, t) | 0) + f | 0, t = (k(v, p - (R[S + 4 >> 1] | 0) << 16 >> 16) | 0) >> 16, t = f + (k(t, t) | 0) | 0, f = (t | 0) < (a | 0), i = f ? E : i, E = E + 1 << 16 >> 16, !(E << 16 >> 16 >= 256); ) a = f ? t : a, S = S + 12 | 0;
                  a = (i << 16 >> 16) * 6 | 0, e[w >> 1] = e[9716 + (a << 1) >> 1] | 0, e[c >> 1] = e[9716 + ((a | 1) << 1) >> 1] | 0, e[D >> 1] = e[9716 + (a + 2 << 1) >> 1] | 0, e[o + 2 >> 1] = i, a = U + 12 | 0, e[o + 4 >> 1] = de(a, 16884, M + 12 | 0, 128) | 0, E = O, b = I, i = D, f = U;
                }
              while (false);
              S = r, p = U, v = S + 20 | 0;
              do
                e[S >> 1] = e[p >> 1] | 0, S = S + 2 | 0, p = p + 2 | 0;
              while ((S | 0) < (v | 0));
              e[F >> 1] = (R[B >> 1] | 0) + (R[f >> 1] | 0), e[F + 2 >> 1] = (R[B + 2 >> 1] | 0) + (R[E >> 1] | 0), e[F + 4 >> 1] = (R[B + 4 >> 1] | 0) + (R[b >> 1] | 0), e[F + 6 >> 1] = (R[B + 6 >> 1] | 0) + (R[w >> 1] | 0), e[F + 8 >> 1] = (R[B + 8 >> 1] | 0) + (R[c >> 1] | 0), e[F + 10 >> 1] = (R[B + 10 >> 1] | 0) + (R[i >> 1] | 0), e[F + 12 >> 1] = (R[B + 12 >> 1] | 0) + (R[a >> 1] | 0), e[F + 14 >> 1] = (R[B + 14 >> 1] | 0) + (R[U + 14 >> 1] | 0), e[F + 16 >> 1] = (R[B + 16 >> 1] | 0) + (R[U + 16 >> 1] | 0), e[F + 18 >> 1] = (R[B + 18 >> 1] | 0) + (R[U + 18 >> 1] | 0), $0(F, 205, 10, u), H0(F, n, 10, u), C = T;
            }
            function de(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0;
              if (S = r + 2 | 0, D = r + 4 | 0, O = r + 6 | 0, n << 16 >> 16 > 0) for (w = R[r >> 1] | 0, v = e[i >> 1] << 1, p = R[S >> 1] | 0, m = e[i + 2 >> 1] << 1, d = R[D >> 1] | 0, b = e[i + 4 >> 1] << 1, E = R[O >> 1] | 0, o = e[i + 6 >> 1] << 1, a = 2147483647, f = 0, i = 0, c = t; s = (k(v, w - (R[c >> 1] | 0) << 16 >> 16) | 0) >> 16, s = k(s, s) | 0, u = (k(m, p - (R[c + 2 >> 1] | 0) << 16 >> 16) | 0) >> 16, s = (k(u, u) | 0) + s | 0, u = (k(b, d - (R[c + 4 >> 1] | 0) << 16 >> 16) | 0) >> 16, u = s + (k(u, u) | 0) | 0, s = (k(o, E - (R[c + 6 >> 1] | 0) << 16 >> 16) | 0) >> 16, s = u + (k(s, s) | 0) | 0, u = (s | 0) < (a | 0), i = u ? f : i, f = f + 1 << 16 >> 16, !(f << 16 >> 16 >= n << 16 >> 16); ) a = u ? s : a, c = c + 8 | 0;
              else i = 0;
              return n = i << 16 >> 16 << 2, E = n | 1, e[r >> 1] = e[t + (n << 1) >> 1] | 0, e[S >> 1] = e[t + (E << 1) >> 1] | 0, e[D >> 1] = e[t + (E + 1 << 1) >> 1] | 0, e[O >> 1] = e[t + ((n | 3) << 1) >> 1] | 0, i | 0;
            }
            function ri(r, t, i, n, o, s, u) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0;
              var a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0;
              for (W = C, C = C + 192 | 0, c = W + 160 | 0, f = W + 140 | 0, T = W + 120 | 0, L = W + 100 | 0, V = W + 80 | 0, g = W + 60 | 0, a = W + 40 | 0, K = W + 20 | 0, Q = W, v5(t, c, 10, u), v5(i, f, 10, u), pe(c, T, u), pe(f, L, u), w = 0, i = V, t = g, v = a; U = (((e[r + (w << 1) >> 1] | 0) * 21299 | 0) >>> 15) + (R[20980 + (w << 1) >> 1] | 0) | 0, e[i >> 1] = U, e[t >> 1] = (R[c >> 1] | 0) - U, e[v >> 1] = (R[f >> 1] | 0) - U, w = w + 1 | 0, (w | 0) != 10; ) c = c + 2 | 0, f = f + 2 | 0, i = i + 2 | 0, t = t + 2 | 0, v = v + 2 | 0;
              for (e[s >> 1] = B5(g, a, 21e3, e[T >> 1] | 0, e[T + 2 >> 1] | 0, e[L >> 1] | 0, e[L + 2 >> 1] | 0, 128) | 0, e[s + 2 >> 1] = B5(g + 4 | 0, a + 4 | 0, 22024, e[T + 4 >> 1] | 0, e[T + 6 >> 1] | 0, e[L + 4 >> 1] | 0, e[L + 6 >> 1] | 0, 256) | 0, M = g + 8 | 0, F = a + 8 | 0, B = g + 10 | 0, U = a + 10 | 0, i = e[M >> 1] | 0, p = e[T + 8 >> 1] << 1, m = e[B >> 1] | 0, d = e[T + 10 >> 1] << 1, b = e[F >> 1] | 0, E = e[L + 8 >> 1] << 1, S = e[U >> 1] | 0, D = e[L + 10 >> 1] << 1, f = 2147483647, O = 0, v = 0, I = 24072, t = 0; c = e[I >> 1] | 0, w = (k(i - c << 16 >> 16, p) | 0) >> 16, w = k(w, w) | 0, c = (k(c + i << 16 >> 16, p) | 0) >> 16, c = k(c, c) | 0, x = e[I + 2 >> 1] | 0, H = (k(m - x << 16 >> 16, d) | 0) >> 16, w = (k(H, H) | 0) + w | 0, x = (k(x + m << 16 >> 16, d) | 0) >> 16, c = (k(x, x) | 0) + c | 0, (w | 0) < (f | 0) | (c | 0) < (f | 0) ? (H = e[I + 4 >> 1] | 0, x = (k(b - H << 16 >> 16, E) | 0) >> 16, x = (k(x, x) | 0) + w | 0, H = (k(H + b << 16 >> 16, E) | 0) >> 16, H = (k(H, H) | 0) + c | 0, c = e[I + 6 >> 1] | 0, w = (k(S - c << 16 >> 16, D) | 0) >> 16, w = x + (k(w, w) | 0) | 0, c = (k(c + S << 16 >> 16, D) | 0) >> 16, c = H + (k(c, c) | 0) | 0, H = (w | 0) < (f | 0), w = H ? w : f, x = (c | 0) < (w | 0), w = x ? c : w, v = H | x ? O : v, t = x ? 1 : H ? 0 : t) : w = f, O = O + 1 << 16 >> 16, !(O << 16 >> 16 >= 256); ) f = w, I = I + 8 | 0;
              for (w = v << 16 >> 16, c = w << 2, v = c | 1, f = 24072 + (v << 1) | 0, i = e[24072 + (c << 1) >> 1] | 0, t << 16 >> 16 ? (e[M >> 1] = 0 - (i & 65535), e[B >> 1] = 0 - (R[f >> 1] | 0), e[F >> 1] = 0 - (R[24072 + (v + 1 << 1) >> 1] | 0), e[U >> 1] = 0 - (R[24072 + ((c | 3) << 1) >> 1] | 0), t = w << 1 & 65534 | 1) : (e[M >> 1] = i, e[B >> 1] = e[f >> 1] | 0, e[F >> 1] = e[24072 + (v + 1 << 1) >> 1] | 0, e[U >> 1] = e[24072 + ((c | 3) << 1) >> 1] | 0, t = w << 1), e[s + 4 >> 1] = t, e[s + 6 >> 1] = B5(g + 12 | 0, a + 12 | 0, 26120, e[T + 12 >> 1] | 0, e[T + 14 >> 1] | 0, e[L + 12 >> 1] | 0, e[L + 14 >> 1] | 0, 256) | 0, e[s + 8 >> 1] = B5(g + 16 | 0, a + 16 | 0, 28168, e[T + 16 >> 1] | 0, e[T + 18 >> 1] | 0, e[L + 16 >> 1] | 0, e[L + 18 >> 1] | 0, 64) | 0, f = 0, c = K, w = Q, i = V, t = g; x = R[i >> 1] | 0, e[c >> 1] = x + (R[t >> 1] | 0), H = e[a >> 1] | 0, e[w >> 1] = x + (H & 65535), e[r + (f << 1) >> 1] = H, f = f + 1 | 0, (f | 0) != 10; ) c = c + 2 | 0, w = w + 2 | 0, i = i + 2 | 0, t = t + 2 | 0, a = a + 2 | 0;
              $0(K, 205, 10, u), $0(Q, 205, 10, u), H0(K, n, 10, u), H0(Q, o, 10, u), C = W;
            }
            function B5(r, t, i, n, o, s, u, a) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0, u = u | 0, a = a | 0;
              var f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0;
              if (m = e[r >> 1] | 0, O = r + 2 | 0, b = e[O >> 1] | 0, S = e[t >> 1] | 0, I = t + 2 | 0, D = e[I >> 1] | 0, a << 16 >> 16 > 0) for (p = n << 16 >> 16 << 1, v = o << 16 >> 16 << 1, w = s << 16 >> 16 << 1, o = u << 16 >> 16 << 1, s = 2147483647, f = 0, n = 0, c = i; u = (k(p, m - (e[c >> 1] | 0) | 0) | 0) >> 16, u = k(u, u) | 0, (u | 0) < (s | 0) && (d = (k(v, b - (e[c + 2 >> 1] | 0) | 0) | 0) >> 16, d = (k(d, d) | 0) + u | 0, (d | 0) < (s | 0)) && (E = (k(w, S - (e[c + 4 >> 1] | 0) | 0) | 0) >> 16, E = (k(E, E) | 0) + d | 0, (E | 0) < (s | 0)) ? (u = (k(o, D - (e[c + 6 >> 1] | 0) | 0) | 0) >> 16, u = (k(u, u) | 0) + E | 0, M = (u | 0) < (s | 0), u = M ? u : s, n = M ? f : n) : u = s, f = f + 1 << 16 >> 16, !(f << 16 >> 16 >= a << 16 >> 16); ) s = u, c = c + 8 | 0;
              else n = 0;
              return M = n << 16 >> 16 << 2, a = M | 1, e[r >> 1] = e[i + (M << 1) >> 1] | 0, e[O >> 1] = e[i + (a << 1) >> 1] | 0, e[t >> 1] = e[i + (a + 1 << 1) >> 1] | 0, e[I >> 1] = e[i + ((M | 3) << 1) >> 1] | 0, n | 0;
            }
            function ii(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0;
              if (!r || (l[r >> 2] = 0, t = A0(20) | 0, !t)) return n = -1, n | 0;
              i = t, n = i + 20 | 0;
              do
                e[i >> 1] = 0, i = i + 2 | 0;
              while ((i | 0) < (n | 0));
              return l[r >> 2] = t, n = 0, n | 0;
            }
            function N6(r) {
              r = r | 0;
              var t = 0;
              if (!r) return t = -1, t | 0;
              t = r + 20 | 0;
              do
                e[r >> 1] = 0, r = r + 2 | 0;
              while ((r | 0) < (t | 0));
              return t = 0, t | 0;
            }
            function ti(r) {
              r = r | 0;
              var t = 0;
              r && (t = l[r >> 2] | 0, t && (f0(t), l[r >> 2] = 0));
            }
            function $0(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0;
              if (!(i << 16 >> 16 <= 0)) for (o = t << 16 >> 16, s = t & 65535, u = 0; n = e[r >> 1] | 0, n << 16 >> 16 < t << 16 >> 16 ? (e[r >> 1] = t, n = (t << 16 >> 16) + o | 0) : n = (n & 65535) + s | 0, u = u + 1 << 16 >> 16, !(u << 16 >> 16 >= i << 16 >> 16); ) t = n & 65535, r = r + 2 | 0;
            }
            function t5(r, t, i, n) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0;
              var o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0;
              if (o = n << 16 >> 16, n = o >>> 2 & 65535, !!(n << 16 >> 16)) for (p = o + -1 | 0, D = r + 20 | 0, d = t + (o + -4 << 1) | 0, b = t + (o + -3 << 1) | 0, E = t + (o + -2 << 1) | 0, S = t + (p << 1) | 0, m = t + (o + -11 << 1) | 0, p = i + (p << 1) | 0; ; ) {
                for (t = e[D >> 1] | 0, u = 5, a = D, f = m, c = m + -2 | 0, w = m + -4 | 0, v = m + -6 | 0, s = 2048, r = 2048, o = 2048, i = 2048; s = (k(e[f >> 1] | 0, t) | 0) + s | 0, r = (k(e[c >> 1] | 0, t) | 0) + r | 0, o = (k(e[w >> 1] | 0, t) | 0) + o | 0, t = (k(e[v >> 1] | 0, t) | 0) + i | 0, i = e[a + -2 >> 1] | 0, s = s + (k(e[f + 2 >> 1] | 0, i) | 0) | 0, r = r + (k(e[c + 2 >> 1] | 0, i) | 0) | 0, o = o + (k(e[w + 2 >> 1] | 0, i) | 0) | 0, a = a + -4 | 0, i = t + (k(e[v + 2 >> 1] | 0, i) | 0) | 0, u = u + -1 << 16 >> 16, t = e[a >> 1] | 0, u << 16 >> 16; ) f = f + 4 | 0, c = c + 4 | 0, w = w + 4 | 0, v = v + 4 | 0;
                if (f = (k(e[S >> 1] | 0, t) | 0) + s | 0, c = (k(e[E >> 1] | 0, t) | 0) + r | 0, w = (k(e[b >> 1] | 0, t) | 0) + o | 0, v = (k(e[d >> 1] | 0, t) | 0) + i | 0, e[p >> 1] = f >>> 12, e[p + -2 >> 1] = c >>> 12, e[p + -4 >> 1] = w >>> 12, e[p + -6 >> 1] = v >>> 12, n = n + -1 << 16 >> 16, n << 16 >> 16) d = d + -8 | 0, b = b + -8 | 0, E = E + -8 | 0, S = S + -8 | 0, m = m + -8 | 0, p = p + -8 | 0;
                else break;
              }
            }
            function N1(r, t) {
              r = r | 0, t = t | 0;
              var i = 0;
              return i = r + 32768 | 0, (r | 0) > -1 & (i ^ r | 0) < 0 && (l[t >> 2] = 1, i = (r >>> 31) + 2147483647 | 0), i >>> 16 & 65535 | 0;
            }
            function o0(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0;
              return n = t << 16 >> 16, t << 16 >> 16 ? t << 16 >> 16 > 0 ? (r = r << 16 >> 16 >> (t << 16 >> 16 > 15 ? 15 : n) & 65535, r | 0) : (o = 0 - n | 0, t = r << 16 >> 16, o = (o & 65535) << 16 >> 16 > 15 ? 15 : o << 16 >> 16, n = t << o, (n << 16 >> 16 >> o | 0) == (t | 0) ? (o = n & 65535, o | 0) : (l[i >> 2] = 1, o = r << 16 >> 16 > 0 ? 32767 : -32768, o | 0)) : r | 0;
            }
            function d5(r, t, i) {
              return r = r | 0, t = t | 0, i = i | 0, t << 16 >> 16 > 15 ? (t = 0, t | 0) : (i = o0(r, t, i) | 0, t << 16 >> 16 > 0 ? i + ((1 << (t << 16 >> 16) + -1 & r << 16 >> 16 | 0) != 0 & 1) << 16 >> 16 | 0 : (t = i, t | 0));
            }
            function be(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0;
              return (r | 0) < 1 ? (e[t >> 1] = 0, i = 0, i | 0) : (o = ($1(r) | 0) & 65534, s = o & 65535, o = o << 16 >> 16, s << 16 >> 16 > 0 ? (n = r << o, (n >> o | 0) != (r | 0) && (n = r >> 31 ^ 2147483647)) : (o = 0 - o << 16, (o | 0) < 2031616 ? n = r >> (o >> 16) : n = 0), e[t >> 1] = s, t = n >>> 25 & 63, t = t >>> 0 > 15 ? t + -16 | 0 : t, s = e[30216 + (t << 1) >> 1] | 0, r = s << 16, n = k(s - (R[30216 + (t + 1 << 1) >> 1] | 0) << 16 >> 16, n >>> 10 & 32767) | 0, (n | 0) == 1073741824 ? (l[i >> 2] = 1, o = 2147483647) : o = n << 1, n = r - o | 0, ((n ^ r) & (o ^ r) | 0) >= 0 ? (i = n, i | 0) : (l[i >> 2] = 1, i = (s >>> 15 & 1) + 2147483647 | 0, i | 0));
            }
            function P1(r, t, i) {
              return r = r | 0, t = t | 0, i = i | 0, r = (r << 16 >> 16) - (t << 16 >> 16) | 0, (r + 32768 | 0) >>> 0 <= 65535 ? (i = r, i = i & 65535, i | 0) : (l[i >> 2] = 1, i = (r | 0) > 32767 ? 32767 : -32768, i = i & 65535, i | 0);
            }
            function N0(r, t, i, n, o, s) {
              r = r | 0, t = t | 0, i = i | 0, n = n | 0, o = o | 0, s = s | 0;
              var u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0;
              U = C, C = C + 48 | 0, p = U, f = p, u = o, a = f + 20 | 0;
              do
                e[f >> 1] = e[u >> 1] | 0, f = f + 2 | 0, u = u + 2 | 0;
              while ((f | 0) < (a | 0));
              for (v = p + 18 | 0, E = r + 2 | 0, S = r + 4 | 0, m = t + 20 | 0, D = r + 6 | 0, O = r + 8 | 0, I = r + 10 | 0, M = r + 12 | 0, F = r + 14 | 0, B = r + 16 | 0, d = r + 18 | 0, b = r + 20 | 0, a = e[v >> 1] | 0, u = 5, c = t, w = i, f = p + 20 | 0; V = e[r >> 1] | 0, L = (k(V, e[c >> 1] | 0) | 0) + 2048 | 0, V = (k(e[c + 2 >> 1] | 0, V) | 0) + 2048 | 0, p = a << 16 >> 16, L = L - (k(p, e[E >> 1] | 0) | 0) | 0, T = e[S >> 1] | 0, p = V - (k(p, T) | 0) | 0, V = e[v + -2 >> 1] | 0, T = L - (k(V, T) | 0) | 0, L = e[D >> 1] | 0, V = p - (k(L, V) | 0) | 0, p = e[v + -4 >> 1] | 0, L = T - (k(p, L) | 0) | 0, T = e[O >> 1] | 0, p = V - (k(T, p) | 0) | 0, V = e[v + -6 >> 1] | 0, T = L - (k(V, T) | 0) | 0, L = e[I >> 1] | 0, V = p - (k(V, L) | 0) | 0, p = e[v + -8 >> 1] | 0, L = T - (k(p, L) | 0) | 0, T = e[M >> 1] | 0, p = V - (k(T, p) | 0) | 0, V = e[v + -10 >> 1] | 0, T = L - (k(V, T) | 0) | 0, L = e[F >> 1] | 0, V = p - (k(L, V) | 0) | 0, p = e[v + -12 >> 1] | 0, L = T - (k(p, L) | 0) | 0, T = e[B >> 1] | 0, p = V - (k(p, T) | 0) | 0, V = e[v + -14 >> 1] | 0, T = L - (k(V, T) | 0) | 0, L = e[d >> 1] | 0, V = p - (k(L, V) | 0) | 0, p = e[v + -16 >> 1] | 0, L = T - (k(p, L) | 0) | 0, T = e[b >> 1] | 0, p = V - (k(T, p) | 0) | 0, T = L - (k(e[v + -18 >> 1] | 0, T) | 0) | 0, T = (T + 134217728 | 0) >>> 0 < 268435455 ? T >>> 12 & 65535 : (T | 0) > 134217727 ? 32767 : -32768, p = p - (k(e[E >> 1] | 0, T << 16 >> 16) | 0) | 0, v = f + 2 | 0, e[f >> 1] = T, e[w >> 1] = T, a = (p + 134217728 | 0) >>> 0 < 268435455 ? p >>> 12 & 65535 : (p | 0) > 134217727 ? 32767 : -32768, e[v >> 1] = a, e[w + 2 >> 1] = a, u = u + -1 << 16 >> 16, u << 16 >> 16; ) c = c + 4 | 0, w = w + 4 | 0, f = f + 4 | 0;
              if (n = (n << 16 >> 16) + -10 | 0, f = n >>> 1 & 65535, f << 16 >> 16) for (p = i + 18 | 0, a = t + 16 | 0, v = e[p >> 1] | 0, c = m, u = i + 20 | 0; ; ) {
                T = e[r >> 1] | 0, w = (k(T, e[c >> 1] | 0) | 0) + 2048 | 0, T = (k(e[a + 6 >> 1] | 0, T) | 0) + 2048 | 0, a = e[E >> 1] | 0, L = v << 16 >> 16, w = w - (k(L, a) | 0) | 0, V = e[S >> 1] | 0, L = T - (k(L, V) | 0) | 0, T = e[p + -2 >> 1] | 0, V = w - (k(T, V) | 0) | 0, w = e[D >> 1] | 0, T = L - (k(w, T) | 0) | 0, L = e[p + -4 >> 1] | 0, w = V - (k(L, w) | 0) | 0, V = e[O >> 1] | 0, L = T - (k(V, L) | 0) | 0, T = e[p + -6 >> 1] | 0, V = w - (k(T, V) | 0) | 0, w = e[I >> 1] | 0, T = L - (k(T, w) | 0) | 0, L = e[p + -8 >> 1] | 0, w = V - (k(L, w) | 0) | 0, V = e[M >> 1] | 0, L = T - (k(V, L) | 0) | 0, T = e[p + -10 >> 1] | 0, V = w - (k(T, V) | 0) | 0, w = e[F >> 1] | 0, T = L - (k(w, T) | 0) | 0, L = e[p + -12 >> 1] | 0, w = V - (k(L, w) | 0) | 0, V = e[B >> 1] | 0, L = T - (k(L, V) | 0) | 0, T = e[p + -14 >> 1] | 0, V = w - (k(T, V) | 0) | 0, w = e[d >> 1] | 0, T = L - (k(w, T) | 0) | 0, L = e[p + -16 >> 1] | 0, w = V - (k(L, w) | 0) | 0, V = e[b >> 1] | 0, L = T - (k(V, L) | 0) | 0, V = w - (k(e[p + -18 >> 1] | 0, V) | 0) | 0, w = c + 4 | 0, V = (V + 134217728 | 0) >>> 0 < 268435455 ? V >>> 12 & 65535 : (V | 0) > 134217727 ? 32767 : -32768, a = L - (k(a, V << 16 >> 16) | 0) | 0, p = u + 2 | 0, e[u >> 1] = V;
                do
                  if ((a + 134217728 | 0) >>> 0 >= 268435455) if (u = u + 4 | 0, (a | 0) > 134217727) {
                    e[p >> 1] = 32767, a = 32767;
                    break;
                  } else {
                    e[p >> 1] = -32768, a = -32768;
                    break;
                  }
                  else a = a >>> 12 & 65535, e[p >> 1] = a, u = u + 4 | 0;
                while (false);
                if (f = f + -1 << 16 >> 16, f << 16 >> 16) V = c, v = a, c = w, a = V;
                else break;
              }
              if (!(s << 16 >> 16)) {
                C = U;
                return;
              }
              f = o, u = i + (n << 1) | 0, a = f + 20 | 0;
              do
                e[f >> 1] = e[u >> 1] | 0, f = f + 2 | 0, u = u + 2 | 0;
              while ((f | 0) < (a | 0));
              C = U;
            }
            function _2(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0, e[i >> 1] = e[r >> 1] | 0, e[i + 2 >> 1] = ((k(e[t >> 1] | 0, e[r + 2 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 4 >> 1] = ((k(e[t + 2 >> 1] | 0, e[r + 4 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 6 >> 1] = ((k(e[t + 4 >> 1] | 0, e[r + 6 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 8 >> 1] = ((k(e[t + 6 >> 1] | 0, e[r + 8 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 10 >> 1] = ((k(e[t + 8 >> 1] | 0, e[r + 10 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 12 >> 1] = ((k(e[t + 10 >> 1] | 0, e[r + 12 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 14 >> 1] = ((k(e[t + 12 >> 1] | 0, e[r + 14 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 16 >> 1] = ((k(e[t + 14 >> 1] | 0, e[r + 16 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 18 >> 1] = ((k(e[t + 16 >> 1] | 0, e[r + 18 >> 1] | 0) | 0) + 16384 | 0) >>> 15, e[i + 20 >> 1] = ((k(e[t + 18 >> 1] | 0, e[r + 20 >> 1] | 0) | 0) + 16384 | 0) >>> 15;
            }
            function A0(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0, V = 0, g = 0, K = 0, Q = 0, W = 0, x = 0, H = 0, e1 = 0, Y = 0, s1 = 0, f1 = 0, d1 = 0, _1 = 0, b1 = 0, i1 = 0, h1 = 0, k1 = 0, R1 = 0, Z = 0, G = 0;
              do
                if (r >>> 0 < 245) {
                  if (S = r >>> 0 < 11 ? 16 : r + 11 & -8, r = S >>> 3, v = l[26] | 0, f = v >>> r, f & 3) {
                    n = (f & 1 ^ 1) + r | 0, t = n << 1, i = 144 + (t << 2) | 0, t = 144 + (t + 2 << 2) | 0, o = l[t >> 2] | 0, s = o + 8 | 0, u = l[s >> 2] | 0;
                    do
                      if ((i | 0) == (u | 0)) l[26] = v & ~(1 << n);
                      else {
                        if (u >>> 0 >= (l[30] | 0) >>> 0 && (w = u + 12 | 0, (l[w >> 2] | 0) == (o | 0))) {
                          l[w >> 2] = i, l[t >> 2] = u;
                          break;
                        }
                        M1();
                      }
                    while (false);
                    Z = n << 3, l[o + 4 >> 2] = Z | 3, Z = o + (Z | 4) | 0, l[Z >> 2] = l[Z >> 2] | 1;
                    break;
                  }
                  if (t = l[28] | 0, S >>> 0 > t >>> 0) {
                    if (f) {
                      o = 2 << r, o = f << r & (o | 0 - o), o = (o & 0 - o) + -1 | 0, s = o >>> 12 & 16, o = o >>> s, n = o >>> 5 & 8, o = o >>> n, i = o >>> 2 & 4, o = o >>> i, u = o >>> 1 & 2, o = o >>> u, a = o >>> 1 & 1, a = (n | s | i | u | a) + (o >>> a) | 0, o = a << 1, u = 144 + (o << 2) | 0, o = 144 + (o + 2 << 2) | 0, i = l[o >> 2] | 0, s = i + 8 | 0, n = l[s >> 2] | 0;
                      do
                        if ((u | 0) == (n | 0)) l[26] = v & ~(1 << a), p = t;
                        else {
                          if (n >>> 0 >= (l[30] | 0) >>> 0 && (c = n + 12 | 0, (l[c >> 2] | 0) == (i | 0))) {
                            l[c >> 2] = u, l[o >> 2] = n, p = l[28] | 0;
                            break;
                          }
                          M1();
                        }
                      while (false);
                      Z = a << 3, t = Z - S | 0, l[i + 4 >> 2] = S | 3, f = i + S | 0, l[i + (S | 4) >> 2] = t | 1, l[i + Z >> 2] = t, p && (i = l[31] | 0, n = p >>> 3, u = n << 1, a = 144 + (u << 2) | 0, o = l[26] | 0, n = 1 << n, o & n ? (o = 144 + (u + 2 << 2) | 0, u = l[o >> 2] | 0, u >>> 0 < (l[30] | 0) >>> 0 ? M1() : (d = o, b = u)) : (l[26] = o | n, d = 144 + (u + 2 << 2) | 0, b = a), l[d >> 2] = i, l[b + 12 >> 2] = i, l[i + 8 >> 2] = b, l[i + 12 >> 2] = a), l[28] = t, l[31] = f;
                      break;
                    }
                    if (r = l[27] | 0, r) {
                      for (o = (r & 0 - r) + -1 | 0, R1 = o >>> 12 & 16, o = o >>> R1, k1 = o >>> 5 & 8, o = o >>> k1, Z = o >>> 2 & 4, o = o >>> Z, u = o >>> 1 & 2, o = o >>> u, f = o >>> 1 & 1, f = l[408 + ((k1 | R1 | Z | u | f) + (o >>> f) << 2) >> 2] | 0, o = (l[f + 4 >> 2] & -8) - S | 0, u = f; ; ) {
                        if (a = l[u + 16 >> 2] | 0, !a && (a = l[u + 20 >> 2] | 0, !a)) {
                          t = o;
                          break;
                        }
                        u = (l[a + 4 >> 2] & -8) - S | 0, Z = u >>> 0 < o >>> 0, o = Z ? u : o, u = a, f = Z ? a : f;
                      }
                      if (r = l[30] | 0, f >>> 0 >= r >>> 0 && (I = f + S | 0, f >>> 0 < I >>> 0)) {
                        n = l[f + 24 >> 2] | 0, a = l[f + 12 >> 2] | 0;
                        do
                          if ((a | 0) == (f | 0)) {
                            if (u = f + 20 | 0, a = l[u >> 2] | 0, !a && (u = f + 16 | 0, a = l[u >> 2] | 0, !a)) {
                              D = 0;
                              break;
                            }
                            for (; ; ) {
                              if (s = a + 20 | 0, o = l[s >> 2] | 0, o) {
                                a = o, u = s;
                                continue;
                              }
                              if (s = a + 16 | 0, o = l[s >> 2] | 0, o) a = o, u = s;
                              else break;
                            }
                            if (u >>> 0 < r >>> 0) M1();
                            else {
                              l[u >> 2] = 0, D = a;
                              break;
                            }
                          } else {
                            if (u = l[f + 8 >> 2] | 0, u >>> 0 >= r >>> 0 && (i = u + 12 | 0, (l[i >> 2] | 0) == (f | 0)) && (m = a + 8 | 0, (l[m >> 2] | 0) == (f | 0))) {
                              l[i >> 2] = a, l[m >> 2] = u, D = a;
                              break;
                            }
                            M1();
                          }
                        while (false);
                        do
                          if (n) {
                            if (u = l[f + 28 >> 2] | 0, s = 408 + (u << 2) | 0, (f | 0) == (l[s >> 2] | 0)) {
                              if (l[s >> 2] = D, !D) {
                                l[27] = l[27] & ~(1 << u);
                                break;
                              }
                            } else if (n >>> 0 < (l[30] | 0) >>> 0 && M1(), u = n + 16 | 0, (l[u >> 2] | 0) == (f | 0) ? l[u >> 2] = D : l[n + 20 >> 2] = D, !D) break;
                            s = l[30] | 0, D >>> 0 < s >>> 0 && M1(), l[D + 24 >> 2] = n, u = l[f + 16 >> 2] | 0;
                            do
                              if (u) if (u >>> 0 < s >>> 0) M1();
                              else {
                                l[D + 16 >> 2] = u, l[u + 24 >> 2] = D;
                                break;
                              }
                            while (false);
                            if (u = l[f + 20 >> 2] | 0, u) if (u >>> 0 < (l[30] | 0) >>> 0) M1();
                            else {
                              l[D + 20 >> 2] = u, l[u + 24 >> 2] = D;
                              break;
                            }
                          }
                        while (false);
                        t >>> 0 < 16 ? (Z = t + S | 0, l[f + 4 >> 2] = Z | 3, Z = f + (Z + 4) | 0, l[Z >> 2] = l[Z >> 2] | 1) : (l[f + 4 >> 2] = S | 3, l[f + (S | 4) >> 2] = t | 1, l[f + (t + S) >> 2] = t, n = l[28] | 0, n && (i = l[31] | 0, o = n >>> 3, u = o << 1, a = 144 + (u << 2) | 0, s = l[26] | 0, o = 1 << o, s & o ? (u = 144 + (u + 2 << 2) | 0, s = l[u >> 2] | 0, s >>> 0 < (l[30] | 0) >>> 0 ? M1() : (O = u, M = s)) : (l[26] = s | o, O = 144 + (u + 2 << 2) | 0, M = a), l[O >> 2] = i, l[M + 12 >> 2] = i, l[i + 8 >> 2] = M, l[i + 12 >> 2] = a), l[28] = t, l[31] = I), s = f + 8 | 0;
                        break;
                      }
                      M1();
                    } else G = 154;
                  } else G = 154;
                } else if (r >>> 0 <= 4294967231) if (r = r + 11 | 0, M = r & -8, v = l[27] | 0, v) {
                  f = 0 - M | 0, r = r >>> 8, r ? M >>> 0 > 16777215 ? w = 31 : (I = (r + 1048320 | 0) >>> 16 & 8, G = r << I, O = (G + 520192 | 0) >>> 16 & 4, G = G << O, w = (G + 245760 | 0) >>> 16 & 2, w = 14 - (O | I | w) + (G << w >>> 15) | 0, w = M >>> (w + 7 | 0) & 1 | w << 1) : w = 0, r = l[408 + (w << 2) >> 2] | 0;
                  e: do
                    if (!r) a = 0, r = 0, G = 86;
                    else for (i = f, a = 0, t = M << ((w | 0) == 31 ? 0 : 25 - (w >>> 1) | 0), c = r, r = 0; ; ) {
                      if (n = l[c + 4 >> 2] & -8, f = n - M | 0, f >>> 0 < i >>> 0) if ((n | 0) == (M | 0)) {
                        n = c, r = c, G = 90;
                        break e;
                      } else r = c;
                      else f = i;
                      if (G = l[c + 20 >> 2] | 0, c = l[c + 16 + (t >>> 31 << 2) >> 2] | 0, a = (G | 0) == 0 | (G | 0) == (c | 0) ? a : G, c) i = f, t = t << 1;
                      else {
                        G = 86;
                        break;
                      }
                    }
                  while (false);
                  if ((G | 0) == 86) {
                    if ((a | 0) == 0 & (r | 0) == 0) {
                      if (r = 2 << w, r = v & (r | 0 - r), !r) {
                        S = M, G = 154;
                        break;
                      }
                      r = (r & 0 - r) + -1 | 0, D = r >>> 12 & 16, r = r >>> D, b = r >>> 5 & 8, r = r >>> b, O = r >>> 2 & 4, r = r >>> O, I = r >>> 1 & 2, r = r >>> I, a = r >>> 1 & 1, a = l[408 + ((b | D | O | I | a) + (r >>> a) << 2) >> 2] | 0, r = 0;
                    }
                    a ? (n = a, G = 90) : (b = f, d = r);
                  }
                  if ((G | 0) == 90) for (; ; ) {
                    if (G = 0, I = (l[n + 4 >> 2] & -8) - M | 0, a = I >>> 0 < f >>> 0, f = a ? I : f, r = a ? n : r, a = l[n + 16 >> 2] | 0, a) {
                      n = a, G = 90;
                      continue;
                    }
                    if (n = l[n + 20 >> 2] | 0, n) G = 90;
                    else {
                      b = f, d = r;
                      break;
                    }
                  }
                  if ((d | 0) != 0 && b >>> 0 < ((l[28] | 0) - M | 0) >>> 0) {
                    if (r = l[30] | 0, d >>> 0 >= r >>> 0 && (x = d + M | 0, d >>> 0 < x >>> 0)) {
                      f = l[d + 24 >> 2] | 0, a = l[d + 12 >> 2] | 0;
                      do
                        if ((a | 0) == (d | 0)) {
                          if (u = d + 20 | 0, a = l[u >> 2] | 0, !a && (u = d + 16 | 0, a = l[u >> 2] | 0, !a)) {
                            B = 0;
                            break;
                          }
                          for (; ; ) {
                            if (s = a + 20 | 0, o = l[s >> 2] | 0, o) {
                              a = o, u = s;
                              continue;
                            }
                            if (s = a + 16 | 0, o = l[s >> 2] | 0, o) a = o, u = s;
                            else break;
                          }
                          if (u >>> 0 < r >>> 0) M1();
                          else {
                            l[u >> 2] = 0, B = a;
                            break;
                          }
                        } else {
                          if (u = l[d + 8 >> 2] | 0, u >>> 0 >= r >>> 0 && (E = u + 12 | 0, (l[E >> 2] | 0) == (d | 0)) && (S = a + 8 | 0, (l[S >> 2] | 0) == (d | 0))) {
                            l[E >> 2] = a, l[S >> 2] = u, B = a;
                            break;
                          }
                          M1();
                        }
                      while (false);
                      do
                        if (f) {
                          if (a = l[d + 28 >> 2] | 0, u = 408 + (a << 2) | 0, (d | 0) == (l[u >> 2] | 0)) {
                            if (l[u >> 2] = B, !B) {
                              l[27] = l[27] & ~(1 << a);
                              break;
                            }
                          } else if (f >>> 0 < (l[30] | 0) >>> 0 && M1(), u = f + 16 | 0, (l[u >> 2] | 0) == (d | 0) ? l[u >> 2] = B : l[f + 20 >> 2] = B, !B) break;
                          a = l[30] | 0, B >>> 0 < a >>> 0 && M1(), l[B + 24 >> 2] = f, u = l[d + 16 >> 2] | 0;
                          do
                            if (u) if (u >>> 0 < a >>> 0) M1();
                            else {
                              l[B + 16 >> 2] = u, l[u + 24 >> 2] = B;
                              break;
                            }
                          while (false);
                          if (u = l[d + 20 >> 2] | 0, u) if (u >>> 0 < (l[30] | 0) >>> 0) M1();
                          else {
                            l[B + 20 >> 2] = u, l[u + 24 >> 2] = B;
                            break;
                          }
                        }
                      while (false);
                      e: do
                        if (b >>> 0 >= 16) {
                          if (l[d + 4 >> 2] = M | 3, l[d + (M | 4) >> 2] = b | 1, l[d + (b + M) >> 2] = b, a = b >>> 3, b >>> 0 < 256) {
                            s = a << 1, n = 144 + (s << 2) | 0, o = l[26] | 0, u = 1 << a, o & u ? (u = 144 + (s + 2 << 2) | 0, s = l[u >> 2] | 0, s >>> 0 < (l[30] | 0) >>> 0 ? M1() : (U = u, T = s)) : (l[26] = o | u, U = 144 + (s + 2 << 2) | 0, T = n), l[U >> 2] = x, l[T + 12 >> 2] = x, l[d + (M + 8) >> 2] = T, l[d + (M + 12) >> 2] = n;
                            break;
                          }
                          if (i = b >>> 8, i ? b >>> 0 > 16777215 ? a = 31 : (R1 = (i + 1048320 | 0) >>> 16 & 8, Z = i << R1, k1 = (Z + 520192 | 0) >>> 16 & 4, Z = Z << k1, a = (Z + 245760 | 0) >>> 16 & 2, a = 14 - (k1 | R1 | a) + (Z << a >>> 15) | 0, a = b >>> (a + 7 | 0) & 1 | a << 1) : a = 0, u = 408 + (a << 2) | 0, l[d + (M + 28) >> 2] = a, l[d + (M + 20) >> 2] = 0, l[d + (M + 16) >> 2] = 0, s = l[27] | 0, o = 1 << a, !(s & o)) {
                            l[27] = s | o, l[u >> 2] = x, l[d + (M + 24) >> 2] = u, l[d + (M + 12) >> 2] = x, l[d + (M + 8) >> 2] = x;
                            break;
                          }
                          i = l[u >> 2] | 0;
                          r: do
                            if ((l[i + 4 >> 2] & -8 | 0) != (b | 0)) {
                              for (a = b << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0); t = i + 16 + (a >>> 31 << 2) | 0, u = l[t >> 2] | 0, !!u; ) if ((l[u + 4 >> 2] & -8 | 0) == (b | 0)) {
                                V = u;
                                break r;
                              } else a = a << 1, i = u;
                              if (t >>> 0 < (l[30] | 0) >>> 0) M1();
                              else {
                                l[t >> 2] = x, l[d + (M + 24) >> 2] = i, l[d + (M + 12) >> 2] = x, l[d + (M + 8) >> 2] = x;
                                break e;
                              }
                            } else V = i;
                          while (false);
                          if (i = V + 8 | 0, t = l[i >> 2] | 0, Z = l[30] | 0, t >>> 0 >= Z >>> 0 & V >>> 0 >= Z >>> 0) {
                            l[t + 12 >> 2] = x, l[i >> 2] = x, l[d + (M + 8) >> 2] = t, l[d + (M + 12) >> 2] = V, l[d + (M + 24) >> 2] = 0;
                            break;
                          } else M1();
                        } else Z = b + M | 0, l[d + 4 >> 2] = Z | 3, Z = d + (Z + 4) | 0, l[Z >> 2] = l[Z >> 2] | 1;
                      while (false);
                      s = d + 8 | 0;
                      break;
                    }
                    M1();
                  } else S = M, G = 154;
                } else S = M, G = 154;
                else S = -1, G = 154;
              while (false);
              e: do
                if ((G | 0) == 154) {
                  if (r = l[28] | 0, r >>> 0 >= S >>> 0) {
                    t = r - S | 0, i = l[31] | 0, t >>> 0 > 15 ? (l[31] = i + S, l[28] = t, l[i + (S + 4) >> 2] = t | 1, l[i + r >> 2] = t, l[i + 4 >> 2] = S | 3) : (l[28] = 0, l[31] = 0, l[i + 4 >> 2] = r | 3, G = i + (r + 4) | 0, l[G >> 2] = l[G >> 2] | 1), s = i + 8 | 0;
                    break;
                  }
                  if (r = l[29] | 0, r >>> 0 > S >>> 0) {
                    G = r - S | 0, l[29] = G, s = l[32] | 0, l[32] = s + S, l[s + (S + 4) >> 2] = G | 1, l[s + 4 >> 2] = S | 3, s = s + 8 | 0;
                    break;
                  }
                  if (l[144] | 0 || ni(), v = S + 48 | 0, i = l[146] | 0, w = S + 47 | 0, n = i + w | 0, i = 0 - i | 0, c = n & i, c >>> 0 > S >>> 0) {
                    if (r = l[136] | 0, (r | 0) != 0 && (V = l[134] | 0, x = V + c | 0, x >>> 0 <= V >>> 0 | x >>> 0 > r >>> 0)) {
                      s = 0;
                      break;
                    }
                    r: do
                      if (l[137] & 4) r = 0, G = 189;
                      else {
                        r = l[32] | 0;
                        i: do
                          if (r) {
                            for (a = 552; ; ) {
                              if (f = l[a >> 2] | 0, f >>> 0 <= r >>> 0 && (F = a + 4 | 0, (f + (l[F >> 2] | 0) | 0) >>> 0 > r >>> 0)) {
                                s = a, r = F;
                                break;
                              }
                              if (a = l[a + 8 >> 2] | 0, !a) {
                                G = 172;
                                break i;
                              }
                            }
                            if (f = n - (l[29] | 0) & i, f >>> 0 < 2147483647) if (a = W2(f | 0) | 0, x = (a | 0) == ((l[s >> 2] | 0) + (l[r >> 2] | 0) | 0), r = x ? f : 0, x) {
                              if ((a | 0) != -1) {
                                T = a, D = r, G = 192;
                                break r;
                              }
                            } else G = 182;
                            else r = 0;
                          } else G = 172;
                        while (false);
                        do
                          if ((G | 0) == 172) if (s = W2(0) | 0, (s | 0) != -1) if (r = s, f = l[145] | 0, a = f + -1 | 0, a & r ? f = c - r + (a + r & 0 - f) | 0 : f = c, r = l[134] | 0, a = r + f | 0, f >>> 0 > S >>> 0 & f >>> 0 < 2147483647) {
                            if (x = l[136] | 0, (x | 0) != 0 && a >>> 0 <= r >>> 0 | a >>> 0 > x >>> 0) {
                              r = 0;
                              break;
                            }
                            if (a = W2(f | 0) | 0, G = (a | 0) == (s | 0), r = G ? f : 0, G) {
                              T = s, D = r, G = 192;
                              break r;
                            } else G = 182;
                          } else r = 0;
                          else r = 0;
                        while (false);
                        i: do
                          if ((G | 0) == 182) {
                            s = 0 - f | 0;
                            do
                              if (v >>> 0 > f >>> 0 & (f >>> 0 < 2147483647 & (a | 0) != -1) && (L = l[146] | 0, L = w - f + L & 0 - L, L >>> 0 < 2147483647)) if ((W2(L | 0) | 0) == -1) {
                                W2(s | 0) | 0;
                                break i;
                              } else {
                                f = L + f | 0;
                                break;
                              }
                            while (false);
                            if ((a | 0) != -1) {
                              T = a, D = f, G = 192;
                              break r;
                            }
                          }
                        while (false);
                        l[137] = l[137] | 4, G = 189;
                      }
                    while (false);
                    if ((G | 0) == 189 && c >>> 0 < 2147483647 && (g = W2(c | 0) | 0, K = W2(0) | 0, g >>> 0 < K >>> 0 & ((g | 0) != -1 & (K | 0) != -1)) && (Q = K - g | 0, W = Q >>> 0 > (S + 40 | 0) >>> 0, W) && (T = g, D = W ? Q : r, G = 192), (G | 0) == 192) {
                      f = (l[134] | 0) + D | 0, l[134] = f, f >>> 0 > (l[135] | 0) >>> 0 && (l[135] = f), b = l[32] | 0;
                      r: do
                        if (b) {
                          s = 552;
                          do {
                            if (r = l[s >> 2] | 0, f = s + 4 | 0, a = l[f >> 2] | 0, (T | 0) == (r + a | 0)) {
                              H = r, e1 = f, Y = a, s1 = s, G = 202;
                              break;
                            }
                            s = l[s + 8 >> 2] | 0;
                          } while ((s | 0) != 0);
                          if ((G | 0) == 202 && (l[s1 + 12 >> 2] & 8 | 0) == 0 && b >>> 0 < T >>> 0 & b >>> 0 >= H >>> 0) {
                            l[e1 >> 2] = Y + D, G = (l[29] | 0) + D | 0, Z = b + 8 | 0, Z = (Z & 7 | 0) == 0 ? 0 : 0 - Z & 7, R1 = G - Z | 0, l[32] = b + Z, l[29] = R1, l[b + (Z + 4) >> 2] = R1 | 1, l[b + (G + 4) >> 2] = 40, l[33] = l[148];
                            break;
                          }
                          for (f = l[30] | 0, T >>> 0 < f >>> 0 && (l[30] = T, f = T), a = T + D | 0, r = 552; ; ) {
                            if ((l[r >> 2] | 0) == (a | 0)) {
                              s = r, a = r, G = 210;
                              break;
                            }
                            if (r = l[r + 8 >> 2] | 0, !r) {
                              a = 552;
                              break;
                            }
                          }
                          if ((G | 0) == 210) if (l[a + 12 >> 2] & 8) a = 552;
                          else {
                            l[s >> 2] = T, m = a + 4 | 0, l[m >> 2] = (l[m >> 2] | 0) + D, m = T + 8 | 0, m = (m & 7 | 0) == 0 ? 0 : 0 - m & 7, w = T + (D + 8) | 0, w = (w & 7 | 0) == 0 ? 0 : 0 - w & 7, a = T + (w + D) | 0, d = m + S | 0, p = T + d | 0, r = a - (T + m) - S | 0, l[T + (m + 4) >> 2] = S | 3;
                            i: do
                              if ((a | 0) != (b | 0)) {
                                if ((a | 0) == (l[31] | 0)) {
                                  G = (l[28] | 0) + r | 0, l[28] = G, l[31] = p, l[T + (d + 4) >> 2] = G | 1, l[T + (G + d) >> 2] = G;
                                  break;
                                }
                                if (t = D + 4 | 0, u = l[T + (t + w) >> 2] | 0, (u & 3 | 0) == 1) {
                                  c = u & -8, n = u >>> 3;
                                  t: do
                                    if (u >>> 0 >= 256) {
                                      i = l[T + ((w | 24) + D) >> 2] | 0, s = l[T + (D + 12 + w) >> 2] | 0;
                                      n: do
                                        if ((s | 0) == (a | 0)) {
                                          if (o = w | 16, s = T + (t + o) | 0, u = l[s >> 2] | 0, !u && (s = T + (o + D) | 0, u = l[s >> 2] | 0, !u)) {
                                            h1 = 0;
                                            break;
                                          }
                                          for (; ; ) {
                                            if (o = u + 20 | 0, n = l[o >> 2] | 0, n) {
                                              u = n, s = o;
                                              continue;
                                            }
                                            if (o = u + 16 | 0, n = l[o >> 2] | 0, n) u = n, s = o;
                                            else break;
                                          }
                                          if (s >>> 0 < f >>> 0) M1();
                                          else {
                                            l[s >> 2] = 0, h1 = u;
                                            break;
                                          }
                                        } else {
                                          o = l[T + ((w | 8) + D) >> 2] | 0;
                                          do
                                            if (o >>> 0 >= f >>> 0) {
                                              if (f = o + 12 | 0, (l[f >> 2] | 0) != (a | 0) || (u = s + 8 | 0, (l[u >> 2] | 0) != (a | 0))) break;
                                              l[f >> 2] = s, l[u >> 2] = o, h1 = s;
                                              break n;
                                            }
                                          while (false);
                                          M1();
                                        }
                                      while (false);
                                      if (!i) break;
                                      f = l[T + (D + 28 + w) >> 2] | 0, u = 408 + (f << 2) | 0;
                                      do
                                        if ((a | 0) != (l[u >> 2] | 0)) {
                                          if (i >>> 0 < (l[30] | 0) >>> 0 && M1(), u = i + 16 | 0, (l[u >> 2] | 0) == (a | 0) ? l[u >> 2] = h1 : l[i + 20 >> 2] = h1, !h1) break t;
                                        } else {
                                          if (l[u >> 2] = h1, h1) break;
                                          l[27] = l[27] & ~(1 << f);
                                          break t;
                                        }
                                      while (false);
                                      f = l[30] | 0, h1 >>> 0 < f >>> 0 && M1(), l[h1 + 24 >> 2] = i, a = w | 16, u = l[T + (a + D) >> 2] | 0;
                                      do
                                        if (u) if (u >>> 0 < f >>> 0) M1();
                                        else {
                                          l[h1 + 16 >> 2] = u, l[u + 24 >> 2] = h1;
                                          break;
                                        }
                                      while (false);
                                      if (a = l[T + (t + a) >> 2] | 0, !a) break;
                                      if (a >>> 0 < (l[30] | 0) >>> 0) M1();
                                      else {
                                        l[h1 + 20 >> 2] = a, l[a + 24 >> 2] = h1;
                                        break;
                                      }
                                    } else {
                                      u = l[T + ((w | 8) + D) >> 2] | 0, s = l[T + (D + 12 + w) >> 2] | 0, o = 144 + (n << 1 << 2) | 0;
                                      do
                                        if ((u | 0) != (o | 0)) {
                                          if (u >>> 0 >= f >>> 0 && (l[u + 12 >> 2] | 0) == (a | 0)) break;
                                          M1();
                                        }
                                      while (false);
                                      if ((s | 0) == (u | 0)) {
                                        l[26] = l[26] & ~(1 << n);
                                        break;
                                      }
                                      do
                                        if ((s | 0) == (o | 0)) f1 = s + 8 | 0;
                                        else {
                                          if (s >>> 0 >= f >>> 0 && (d1 = s + 8 | 0, (l[d1 >> 2] | 0) == (a | 0))) {
                                            f1 = d1;
                                            break;
                                          }
                                          M1();
                                        }
                                      while (false);
                                      l[u + 12 >> 2] = s, l[f1 >> 2] = u;
                                    }
                                  while (false);
                                  a = T + ((c | w) + D) | 0, r = c + r | 0;
                                }
                                if (a = a + 4 | 0, l[a >> 2] = l[a >> 2] & -2, l[T + (d + 4) >> 2] = r | 1, l[T + (r + d) >> 2] = r, a = r >>> 3, r >>> 0 < 256) {
                                  s = a << 1, n = 144 + (s << 2) | 0, o = l[26] | 0, u = 1 << a;
                                  do
                                    if (!(o & u)) l[26] = o | u, k1 = 144 + (s + 2 << 2) | 0, R1 = n;
                                    else {
                                      if (u = 144 + (s + 2 << 2) | 0, s = l[u >> 2] | 0, s >>> 0 >= (l[30] | 0) >>> 0) {
                                        k1 = u, R1 = s;
                                        break;
                                      }
                                      M1();
                                    }
                                  while (false);
                                  l[k1 >> 2] = p, l[R1 + 12 >> 2] = p, l[T + (d + 8) >> 2] = R1, l[T + (d + 12) >> 2] = n;
                                  break;
                                }
                                i = r >>> 8;
                                do
                                  if (!i) a = 0;
                                  else {
                                    if (r >>> 0 > 16777215) {
                                      a = 31;
                                      break;
                                    }
                                    R1 = (i + 1048320 | 0) >>> 16 & 8, G = i << R1, k1 = (G + 520192 | 0) >>> 16 & 4, G = G << k1, a = (G + 245760 | 0) >>> 16 & 2, a = 14 - (k1 | R1 | a) + (G << a >>> 15) | 0, a = r >>> (a + 7 | 0) & 1 | a << 1;
                                  }
                                while (false);
                                if (u = 408 + (a << 2) | 0, l[T + (d + 28) >> 2] = a, l[T + (d + 20) >> 2] = 0, l[T + (d + 16) >> 2] = 0, s = l[27] | 0, o = 1 << a, !(s & o)) {
                                  l[27] = s | o, l[u >> 2] = p, l[T + (d + 24) >> 2] = u, l[T + (d + 12) >> 2] = p, l[T + (d + 8) >> 2] = p;
                                  break;
                                }
                                i = l[u >> 2] | 0;
                                t: do
                                  if ((l[i + 4 >> 2] & -8 | 0) != (r | 0)) {
                                    for (a = r << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0); t = i + 16 + (a >>> 31 << 2) | 0, u = l[t >> 2] | 0, !!u; ) if ((l[u + 4 >> 2] & -8 | 0) == (r | 0)) {
                                      Z = u;
                                      break t;
                                    } else a = a << 1, i = u;
                                    if (t >>> 0 < (l[30] | 0) >>> 0) M1();
                                    else {
                                      l[t >> 2] = p, l[T + (d + 24) >> 2] = i, l[T + (d + 12) >> 2] = p, l[T + (d + 8) >> 2] = p;
                                      break i;
                                    }
                                  } else Z = i;
                                while (false);
                                if (i = Z + 8 | 0, t = l[i >> 2] | 0, G = l[30] | 0, t >>> 0 >= G >>> 0 & Z >>> 0 >= G >>> 0) {
                                  l[t + 12 >> 2] = p, l[i >> 2] = p, l[T + (d + 8) >> 2] = t, l[T + (d + 12) >> 2] = Z, l[T + (d + 24) >> 2] = 0;
                                  break;
                                } else M1();
                              } else G = (l[29] | 0) + r | 0, l[29] = G, l[32] = p, l[T + (d + 4) >> 2] = G | 1;
                            while (false);
                            s = T + (m | 8) | 0;
                            break e;
                          }
                          for (; s = l[a >> 2] | 0, !(s >>> 0 <= b >>> 0 && (u = l[a + 4 >> 2] | 0, o = s + u | 0, o >>> 0 > b >>> 0)); ) a = l[a + 8 >> 2] | 0;
                          if (a = s + (u + -39) | 0, a = s + (u + -47 + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7)) | 0, f = b + 16 | 0, a = a >>> 0 < f >>> 0 ? b : a, u = a + 8 | 0, s = T + 8 | 0, s = (s & 7 | 0) == 0 ? 0 : 0 - s & 7, G = D + -40 - s | 0, l[32] = T + s, l[29] = G, l[T + (s + 4) >> 2] = G | 1, l[T + (D + -36) >> 2] = 40, l[33] = l[148], s = a + 4 | 0, l[s >> 2] = 27, l[u >> 2] = l[138], l[u + 4 >> 2] = l[139], l[u + 8 >> 2] = l[140], l[u + 12 >> 2] = l[141], l[138] = T, l[139] = D, l[141] = 0, l[140] = u, u = a + 28 | 0, l[u >> 2] = 7, (a + 32 | 0) >>> 0 < o >>> 0) do
                            G = u, u = u + 4 | 0, l[u >> 2] = 7;
                          while ((G + 8 | 0) >>> 0 < o >>> 0);
                          if ((a | 0) != (b | 0)) {
                            if (r = a - b | 0, l[s >> 2] = l[s >> 2] & -2, l[b + 4 >> 2] = r | 1, l[a >> 2] = r, o = r >>> 3, r >>> 0 < 256) {
                              u = o << 1, a = 144 + (u << 2) | 0, s = l[26] | 0, n = 1 << o, s & n ? (i = 144 + (u + 2 << 2) | 0, t = l[i >> 2] | 0, t >>> 0 < (l[30] | 0) >>> 0 ? M1() : (_1 = i, b1 = t)) : (l[26] = s | n, _1 = 144 + (u + 2 << 2) | 0, b1 = a), l[_1 >> 2] = b, l[b1 + 12 >> 2] = b, l[b + 8 >> 2] = b1, l[b + 12 >> 2] = a;
                              break;
                            }
                            if (i = r >>> 8, i ? r >>> 0 > 16777215 ? u = 31 : (Z = (i + 1048320 | 0) >>> 16 & 8, G = i << Z, R1 = (G + 520192 | 0) >>> 16 & 4, G = G << R1, u = (G + 245760 | 0) >>> 16 & 2, u = 14 - (R1 | Z | u) + (G << u >>> 15) | 0, u = r >>> (u + 7 | 0) & 1 | u << 1) : u = 0, n = 408 + (u << 2) | 0, l[b + 28 >> 2] = u, l[b + 20 >> 2] = 0, l[f >> 2] = 0, i = l[27] | 0, t = 1 << u, !(i & t)) {
                              l[27] = i | t, l[n >> 2] = b, l[b + 24 >> 2] = n, l[b + 12 >> 2] = b, l[b + 8 >> 2] = b;
                              break;
                            }
                            i = l[n >> 2] | 0;
                            i: do
                              if ((l[i + 4 >> 2] & -8 | 0) != (r | 0)) {
                                for (u = r << ((u | 0) == 31 ? 0 : 25 - (u >>> 1) | 0); t = i + 16 + (u >>> 31 << 2) | 0, n = l[t >> 2] | 0, !!n; ) if ((l[n + 4 >> 2] & -8 | 0) == (r | 0)) {
                                  i1 = n;
                                  break i;
                                } else u = u << 1, i = n;
                                if (t >>> 0 < (l[30] | 0) >>> 0) M1();
                                else {
                                  l[t >> 2] = b, l[b + 24 >> 2] = i, l[b + 12 >> 2] = b, l[b + 8 >> 2] = b;
                                  break r;
                                }
                              } else i1 = i;
                            while (false);
                            if (i = i1 + 8 | 0, t = l[i >> 2] | 0, G = l[30] | 0, t >>> 0 >= G >>> 0 & i1 >>> 0 >= G >>> 0) {
                              l[t + 12 >> 2] = b, l[i >> 2] = b, l[b + 8 >> 2] = t, l[b + 12 >> 2] = i1, l[b + 24 >> 2] = 0;
                              break;
                            } else M1();
                          }
                        } else {
                          G = l[30] | 0, (G | 0) == 0 | T >>> 0 < G >>> 0 && (l[30] = T), l[138] = T, l[139] = D, l[141] = 0, l[35] = l[144], l[34] = -1, i = 0;
                          do
                            G = i << 1, Z = 144 + (G << 2) | 0, l[144 + (G + 3 << 2) >> 2] = Z, l[144 + (G + 2 << 2) >> 2] = Z, i = i + 1 | 0;
                          while ((i | 0) != 32);
                          G = T + 8 | 0, G = (G & 7 | 0) == 0 ? 0 : 0 - G & 7, Z = D + -40 - G | 0, l[32] = T + G, l[29] = Z, l[T + (G + 4) >> 2] = Z | 1, l[T + (D + -36) >> 2] = 40, l[33] = l[148];
                        }
                      while (false);
                      if (t = l[29] | 0, t >>> 0 > S >>> 0) {
                        G = t - S | 0, l[29] = G, s = l[32] | 0, l[32] = s + S, l[s + (S + 4) >> 2] = G | 1, l[s + 4 >> 2] = S | 3, s = s + 8 | 0;
                        break;
                      }
                    }
                    l[(F6() | 0) >> 2] = 12, s = 0;
                  } else s = 0;
                }
              while (false);
              return s | 0;
            }
            function f0(r) {
              r = r | 0;
              var t = 0, i = 0, n = 0, o = 0, s = 0, u = 0, a = 0, f = 0, c = 0, w = 0, v = 0, p = 0, m = 0, d = 0, b = 0, E = 0, S = 0, D = 0, O = 0, I = 0, M = 0, F = 0, B = 0, U = 0, T = 0, L = 0;
              e: do
                if (r) {
                  o = r + -8 | 0, c = l[30] | 0;
                  r: do
                    if (o >>> 0 >= c >>> 0 && (n = l[r + -4 >> 2] | 0, i = n & 3, (i | 0) != 1)) {
                      I = n & -8, M = r + (I + -8) | 0;
                      do
                        if (n & 1) L = o, s = I;
                        else {
                          if (o = l[o >> 2] | 0, !i) break e;
                          if (w = -8 - o | 0, p = r + w | 0, m = o + I | 0, p >>> 0 < c >>> 0) break r;
                          if ((p | 0) == (l[31] | 0)) {
                            if (s = r + (I + -4) | 0, o = l[s >> 2] | 0, (o & 3 | 0) != 3) {
                              L = p, s = m;
                              break;
                            }
                            l[28] = m, l[s >> 2] = o & -2, l[r + (w + 4) >> 2] = m | 1, l[M >> 2] = m;
                            break e;
                          }
                          if (i = o >>> 3, o >>> 0 < 256) {
                            n = l[r + (w + 8) >> 2] | 0, s = l[r + (w + 12) >> 2] | 0, o = 144 + (i << 1 << 2) | 0;
                            do
                              if ((n | 0) != (o | 0)) {
                                if (n >>> 0 >= c >>> 0 && (l[n + 12 >> 2] | 0) == (p | 0)) break;
                                M1();
                              }
                            while (false);
                            if ((s | 0) == (n | 0)) {
                              l[26] = l[26] & ~(1 << i), L = p, s = m;
                              break;
                            }
                            do
                              if ((s | 0) == (o | 0)) t = s + 8 | 0;
                              else {
                                if (s >>> 0 >= c >>> 0 && (u = s + 8 | 0, (l[u >> 2] | 0) == (p | 0))) {
                                  t = u;
                                  break;
                                }
                                M1();
                              }
                            while (false);
                            l[n + 12 >> 2] = s, l[t >> 2] = n, L = p, s = m;
                            break;
                          }
                          u = l[r + (w + 24) >> 2] | 0, o = l[r + (w + 12) >> 2] | 0;
                          do
                            if ((o | 0) == (p | 0)) {
                              if (n = r + (w + 20) | 0, o = l[n >> 2] | 0, !o && (n = r + (w + 16) | 0, o = l[n >> 2] | 0, !o)) {
                                v = 0;
                                break;
                              }
                              for (; ; ) {
                                if (i = o + 20 | 0, t = l[i >> 2] | 0, t) {
                                  o = t, n = i;
                                  continue;
                                }
                                if (i = o + 16 | 0, t = l[i >> 2] | 0, t) o = t, n = i;
                                else break;
                              }
                              if (n >>> 0 < c >>> 0) M1();
                              else {
                                l[n >> 2] = 0, v = o;
                                break;
                              }
                            } else {
                              if (n = l[r + (w + 8) >> 2] | 0, n >>> 0 >= c >>> 0 && (a = n + 12 | 0, (l[a >> 2] | 0) == (p | 0)) && (f = o + 8 | 0, (l[f >> 2] | 0) == (p | 0))) {
                                l[a >> 2] = o, l[f >> 2] = n, v = o;
                                break;
                              }
                              M1();
                            }
                          while (false);
                          if (u) {
                            if (o = l[r + (w + 28) >> 2] | 0, n = 408 + (o << 2) | 0, (p | 0) == (l[n >> 2] | 0)) {
                              if (l[n >> 2] = v, !v) {
                                l[27] = l[27] & ~(1 << o), L = p, s = m;
                                break;
                              }
                            } else if (u >>> 0 < (l[30] | 0) >>> 0 && M1(), o = u + 16 | 0, (l[o >> 2] | 0) == (p | 0) ? l[o >> 2] = v : l[u + 20 >> 2] = v, !v) {
                              L = p, s = m;
                              break;
                            }
                            n = l[30] | 0, v >>> 0 < n >>> 0 && M1(), l[v + 24 >> 2] = u, o = l[r + (w + 16) >> 2] | 0;
                            do
                              if (o) if (o >>> 0 < n >>> 0) M1();
                              else {
                                l[v + 16 >> 2] = o, l[o + 24 >> 2] = v;
                                break;
                              }
                            while (false);
                            if (o = l[r + (w + 20) >> 2] | 0, o) if (o >>> 0 < (l[30] | 0) >>> 0) M1();
                            else {
                              l[v + 20 >> 2] = o, l[o + 24 >> 2] = v, L = p, s = m;
                              break;
                            }
                            else L = p, s = m;
                          } else L = p, s = m;
                        }
                      while (false);
                      if (L >>> 0 < M >>> 0 && (d = r + (I + -4) | 0, b = l[d >> 2] | 0, (b & 1 | 0) != 0)) {
                        if (b & 2) l[d >> 2] = b & -2, l[L + 4 >> 2] = s | 1, l[L + s >> 2] = s;
                        else {
                          if ((M | 0) == (l[32] | 0)) {
                            if (T = (l[29] | 0) + s | 0, l[29] = T, l[32] = L, l[L + 4 >> 2] = T | 1, (L | 0) != (l[31] | 0)) break e;
                            l[31] = 0, l[28] = 0;
                            break e;
                          }
                          if ((M | 0) == (l[31] | 0)) {
                            T = (l[28] | 0) + s | 0, l[28] = T, l[31] = L, l[L + 4 >> 2] = T | 1, l[L + T >> 2] = T;
                            break e;
                          }
                          f = (b & -8) + s | 0, i = b >>> 3;
                          do
                            if (b >>> 0 >= 256) {
                              t = l[r + (I + 16) >> 2] | 0, s = l[r + (I | 4) >> 2] | 0;
                              do
                                if ((s | 0) == (M | 0)) {
                                  if (o = r + (I + 12) | 0, s = l[o >> 2] | 0, !s && (o = r + (I + 8) | 0, s = l[o >> 2] | 0, !s)) {
                                    F = 0;
                                    break;
                                  }
                                  for (; ; ) {
                                    if (n = s + 20 | 0, i = l[n >> 2] | 0, i) {
                                      s = i, o = n;
                                      continue;
                                    }
                                    if (n = s + 16 | 0, i = l[n >> 2] | 0, i) s = i, o = n;
                                    else break;
                                  }
                                  if (o >>> 0 < (l[30] | 0) >>> 0) M1();
                                  else {
                                    l[o >> 2] = 0, F = s;
                                    break;
                                  }
                                } else {
                                  if (o = l[r + I >> 2] | 0, o >>> 0 >= (l[30] | 0) >>> 0 && (D = o + 12 | 0, (l[D >> 2] | 0) == (M | 0)) && (O = s + 8 | 0, (l[O >> 2] | 0) == (M | 0))) {
                                    l[D >> 2] = s, l[O >> 2] = o, F = s;
                                    break;
                                  }
                                  M1();
                                }
                              while (false);
                              if (t) {
                                if (s = l[r + (I + 20) >> 2] | 0, o = 408 + (s << 2) | 0, (M | 0) == (l[o >> 2] | 0)) {
                                  if (l[o >> 2] = F, !F) {
                                    l[27] = l[27] & ~(1 << s);
                                    break;
                                  }
                                } else if (t >>> 0 < (l[30] | 0) >>> 0 && M1(), s = t + 16 | 0, (l[s >> 2] | 0) == (M | 0) ? l[s >> 2] = F : l[t + 20 >> 2] = F, !F) break;
                                s = l[30] | 0, F >>> 0 < s >>> 0 && M1(), l[F + 24 >> 2] = t, o = l[r + (I + 8) >> 2] | 0;
                                do
                                  if (o) if (o >>> 0 < s >>> 0) M1();
                                  else {
                                    l[F + 16 >> 2] = o, l[o + 24 >> 2] = F;
                                    break;
                                  }
                                while (false);
                                if (i = l[r + (I + 12) >> 2] | 0, i) if (i >>> 0 < (l[30] | 0) >>> 0) M1();
                                else {
                                  l[F + 20 >> 2] = i, l[i + 24 >> 2] = F;
                                  break;
                                }
                              }
                            } else {
                              n = l[r + I >> 2] | 0, s = l[r + (I | 4) >> 2] | 0, o = 144 + (i << 1 << 2) | 0;
                              do
                                if ((n | 0) != (o | 0)) {
                                  if (n >>> 0 >= (l[30] | 0) >>> 0 && (l[n + 12 >> 2] | 0) == (M | 0)) break;
                                  M1();
                                }
                              while (false);
                              if ((s | 0) == (n | 0)) {
                                l[26] = l[26] & ~(1 << i);
                                break;
                              }
                              do
                                if ((s | 0) == (o | 0)) E = s + 8 | 0;
                                else {
                                  if (s >>> 0 >= (l[30] | 0) >>> 0 && (S = s + 8 | 0, (l[S >> 2] | 0) == (M | 0))) {
                                    E = S;
                                    break;
                                  }
                                  M1();
                                }
                              while (false);
                              l[n + 12 >> 2] = s, l[E >> 2] = n;
                            }
                          while (false);
                          if (l[L + 4 >> 2] = f | 1, l[L + f >> 2] = f, (L | 0) == (l[31] | 0)) {
                            l[28] = f;
                            break e;
                          } else s = f;
                        }
                        if (o = s >>> 3, s >>> 0 < 256) {
                          n = o << 1, s = 144 + (n << 2) | 0, t = l[26] | 0, i = 1 << o, t & i ? (i = 144 + (n + 2 << 2) | 0, t = l[i >> 2] | 0, t >>> 0 < (l[30] | 0) >>> 0 ? M1() : (B = i, U = t)) : (l[26] = t | i, B = 144 + (n + 2 << 2) | 0, U = s), l[B >> 2] = L, l[U + 12 >> 2] = L, l[L + 8 >> 2] = U, l[L + 12 >> 2] = s;
                          break e;
                        }
                        t = s >>> 8, t ? s >>> 0 > 16777215 ? o = 31 : (B = (t + 1048320 | 0) >>> 16 & 8, U = t << B, r = (U + 520192 | 0) >>> 16 & 4, U = U << r, o = (U + 245760 | 0) >>> 16 & 2, o = 14 - (r | B | o) + (U << o >>> 15) | 0, o = s >>> (o + 7 | 0) & 1 | o << 1) : o = 0, i = 408 + (o << 2) | 0, l[L + 28 >> 2] = o, l[L + 20 >> 2] = 0, l[L + 16 >> 2] = 0, t = l[27] | 0, n = 1 << o;
                        i: do
                          if (t & n) {
                            i = l[i >> 2] | 0;
                            t: do
                              if ((l[i + 4 >> 2] & -8 | 0) != (s | 0)) {
                                for (o = s << ((o | 0) == 31 ? 0 : 25 - (o >>> 1) | 0); t = i + 16 + (o >>> 31 << 2) | 0, n = l[t >> 2] | 0, !!n; ) if ((l[n + 4 >> 2] & -8 | 0) == (s | 0)) {
                                  T = n;
                                  break t;
                                } else o = o << 1, i = n;
                                if (t >>> 0 < (l[30] | 0) >>> 0) M1();
                                else {
                                  l[t >> 2] = L, l[L + 24 >> 2] = i, l[L + 12 >> 2] = L, l[L + 8 >> 2] = L;
                                  break i;
                                }
                              } else T = i;
                            while (false);
                            if (t = T + 8 | 0, i = l[t >> 2] | 0, U = l[30] | 0, i >>> 0 >= U >>> 0 & T >>> 0 >= U >>> 0) {
                              l[i + 12 >> 2] = L, l[t >> 2] = L, l[L + 8 >> 2] = i, l[L + 12 >> 2] = T, l[L + 24 >> 2] = 0;
                              break;
                            } else M1();
                          } else l[27] = t | n, l[i >> 2] = L, l[L + 24 >> 2] = i, l[L + 12 >> 2] = L, l[L + 8 >> 2] = L;
                        while (false);
                        if (L = (l[34] | 0) + -1 | 0, l[34] = L, !L) t = 560;
                        else break e;
                        for (; t = l[t >> 2] | 0, t; ) t = t + 8 | 0;
                        l[34] = -1;
                        break e;
                      }
                    }
                  while (false);
                  M1();
                }
              while (false);
            }
            function F6() {
              var r = 0;
              return r = 600, r | 0;
            }
            function ni() {
              var r = 0;
              do
                if (!(l[144] | 0)) if (r = O4(30) | 0, r + -1 & r) M1();
                else {
                  l[146] = r, l[145] = r, l[147] = -1, l[148] = -1, l[149] = 0, l[137] = 0, l[144] = (L4(0) | 0) & -16 ^ 1431655768;
                  break;
                }
              while (false);
            }
            function oi() {
            }
            function K0(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0;
              if ((i | 0) >= 4096) return N4(r | 0, t | 0, i | 0) | 0;
              if (n = r | 0, (r & 3) == (t & 3)) {
                for (; r & 3; ) {
                  if (!i) return n | 0;
                  A[r >> 0] = A[t >> 0] | 0, r = r + 1 | 0, t = t + 1 | 0, i = i - 1 | 0;
                }
                for (; (i | 0) >= 4; ) l[r >> 2] = l[t >> 2], r = r + 4 | 0, t = t + 4 | 0, i = i - 4 | 0;
              }
              for (; (i | 0) > 0; ) A[r >> 0] = A[t >> 0] | 0, r = r + 1 | 0, t = t + 1 | 0, i = i - 1 | 0;
              return n | 0;
            }
            function M2(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0;
              if ((t | 0) < (r | 0) & (r | 0) < (t + i | 0)) {
                for (n = r, t = t + i | 0, r = r + i | 0; (i | 0) > 0; ) r = r - 1 | 0, t = t - 1 | 0, i = i - 1 | 0, A[r >> 0] = A[t >> 0] | 0;
                r = n;
              } else K0(r, t, i) | 0;
              return r | 0;
            }
            function T2(r, t, i) {
              r = r | 0, t = t | 0, i = i | 0;
              var n = 0, o = 0, s = 0, u = 0;
              if (n = r + i | 0, (i | 0) >= 20) {
                if (t = t & 255, s = r & 3, u = t | t << 8 | t << 16 | t << 24, o = n & -4, s) for (s = r + 4 - s | 0; (r | 0) < (s | 0); ) A[r >> 0] = t, r = r + 1 | 0;
                for (; (r | 0) < (o | 0); ) l[r >> 2] = u, r = r + 4 | 0;
              }
              for (; (r | 0) < (n | 0); ) A[r >> 0] = t, r = r + 1 | 0;
              return r - i | 0;
            }
            return { _free: f0, ___errno_location: F6, _memmove: M2, _Decoder_Interface_Decode: G4, _Decoder_Interface_exit: W4, _Encoder_Interface_init: Y4, _memset: T2, _malloc: A0, _memcpy: K0, _Encoder_Interface_exit: X4, _Decoder_Interface_init: H4, _Encoder_Interface_Encode: K4, runPostSets: oi, stackAlloc: F4, stackSave: B4, stackRestore: U4, establishStackSpace: z4, setThrew: x4, setTempRet0: V4, getTempRet0: g4 };
          })(N.asmGlobalArg, N.asmLibraryArg, p2);
          N._Encoder_Interface_Encode = y0._Encoder_Interface_Encode;
          var q5 = N._free = y0._free;
          N.runPostSets = y0.runPostSets;
          var C4 = N._memmove = y0._memmove;
          N._Decoder_Interface_exit = y0._Decoder_Interface_exit, N._Encoder_Interface_init = y0._Encoder_Interface_init;
          var P4 = N._memset = y0._memset, w5 = N._malloc = y0._malloc, I4 = N._memcpy = y0._memcpy;
          N._Decoder_Interface_Decode = y0._Decoder_Interface_Decode, N._Decoder_Interface_init = y0._Decoder_Interface_init, N._Encoder_Interface_exit = y0._Encoder_Interface_exit, N.___errno_location = y0.___errno_location, y1.stackAlloc = y0.stackAlloc, y1.stackSave = y0.stackSave, y1.stackRestore = y0.stackRestore, y1.establishStackSpace = y0.establishStackSpace, y1.setTempRet0 = y0.setTempRet0, y1.getTempRet0 = y0.getTempRet0;
          function $2(h) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + h + ")", this.status = h;
          }
          $2.prototype = new Error(), $2.prototype.constructor = $2;
          var J5;
          f5 = function h() {
            N.calledRun || Q5(), N.calledRun || (f5 = h);
          }, N.callMain = N.callMain = function(_) {
            J1(I2 == 0, "cannot call main when async dependencies remain! (listen on __ATMAIN__)"), J1(W5.length == 0, "cannot call main when preRun functions remain to be called"), _ = _ || [], Oe();
            var y = _.length + 1;
            function A() {
              for (var R = 0; R < 3; R++) e.push(0);
            }
            var e = [s2(V2(N.thisProgram), "i8", Z1)];
            A();
            for (var l = 0; l < y - 1; l = l + 1) e.push(s2(V2(_[l]), "i8", Z1)), A();
            e.push(0), e = s2(e, "i32", Z1), J5 = y1.stackSave();
            try {
              var z = N._main(y, e, 0);
              xe(z, true);
            } catch (R) {
              if (R instanceof $2) return;
              if (R == "SimulateInfiniteLoop") {
                N.noExitRuntime = true, y1.stackRestore(J5);
                return;
              } else throw R && typeof R == "object" && R.stack && N.printErr("exception thrown: " + [R, R.stack]), R;
            } finally {
            }
          };
          function Q5(h) {
            if (h = h || N.arguments, I2 > 0 || (c4(), I2 > 0) || N.calledRun) return;
            function _() {
              N.calledRun || (N.calledRun = true, !P0 && (Oe(), w4(), N.onRuntimeInitialized && N.onRuntimeInitialized(), N._main && ge && N.callMain(h), p4()));
            }
            N.setStatus ? (N.setStatus("Running..."), setTimeout((function() {
              setTimeout((function() {
                N.setStatus("");
              }), 1), _();
            }), 1)) : _();
          }
          N.run = N.run = Q5;
          function xe(h, _) {
            if (!(_ && N.noExitRuntime)) throw N.noExitRuntime || (P0 = true, d2 = J5, m4(), N.onExit && N.onExit(h)), B0 && typeof quit == "function" && quit(h), new $2(h);
          }
          N.exit = N.exit = xe;
          var Ve = [];
          function H2(h) {
            h !== void 0 ? (N.print(h), N.printErr(h), h = JSON.stringify(h)) : h = "", P0 = true;
            var _ = `
If this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.`, y = "abort(" + h + ") at " + V5() + _;
            throw Ve && Ve.forEach((function(A) {
              y = A(y, h);
            })), y;
          }
          if (N.abort = N.abort = H2, N.preInit) for (typeof N.preInit == "function" && (N.preInit = [N.preInit]); N.preInit.length > 0; ) N.preInit.pop()();
          var ge = true;
          return N.noInitialRun && (ge = false), N.noExitRuntime = true, Q5(), t1;
        })();
        self.onmessage = function(t1) {
          switch (t1.data.command) {
            case "encode":
              m1(t1.data.samples, t1.data.sampleRate);
              break;
            case "decode":
              u1(t1.data.buffer);
              break;
          }
        };
        function m1(t1, N) {
          N = N || 8e3, self.postMessage({ command: "encode", amr: X1.encode(t1, N, 7) });
        }
        function u1(t1) {
          self.postMessage({ command: "decode", amr: X1.decode(t1) });
        }
      }, P2 = Y0.toString().replace(/^\s*function.*?\(\)\s*{/, "").replace(/}\s*$/, ""), t2 = (window.URL || window.webkitURL).createObjectURL(new Blob([P2], { type: "text/javascript" })), k2 = (function() {
        function X1() {
          var m1 = this;
          A1(this, X1), this._isInit = false, this._isInitRecorder = false, this._recorderControl = new Y1(), this._samples = new Float32Array(0), this._rawData = new Uint8Array(0), this._blob = null, this._onEnded = null, this._onAutoEnded = null, this._onPlay = null, this._onPause = null, this._onResume = null, this._onStop = null, this._onStartRecord = null, this._onCancelRecord = null, this._onFinishRecord = null, this._isPlaying = false, this._isPaused = false, this._startCtxTime = 0, this._pauseTime = 0, this._playEmpty = function() {
            m1._recorderControl.playPcm(new Float32Array(10), 24e3);
          }, this._onEndCallback = function() {
            m1._isPlaying && (m1._isPlaying = false, m1._onStop && m1._onStop(), m1._onAutoEnded && m1._onAutoEnded()), m1._isPaused || m1._onEnded && m1._onEnded();
          }, this._runAMRWorker = function(u1, t1) {
            var N = new Worker(t2);
            N.postMessage(u1), N.onmessage = function($) {
              t1($.data.amr), N.terminate();
            };
          };
        }
        return V1(X1, [{ key: "isInit", value: function() {
          return this._isInit;
        } }, { key: "initWithArrayBuffer", value: function(u1) {
          var t1 = this;
          return (this._isInit || this._isInitRecorder) && X1.throwAlreadyInitialized(), this._playEmpty(), new Promise(function(N, $) {
            var c1 = new Uint8Array(u1);
            t1.decodeAMRAsync(c1).then(function(D1) {
              t1._samples = D1, t1._isInit = true, t1._samples ? (t1._rawData = c1, N()) : Y1.decodeAudioArrayBufferByContext(u1).then(function(g1) {
                return t1._isInit = true, t1.encodeAMRAsync(g1, Y1.getCtxSampleRate());
              }).then(function(g1) {
                return t1._rawData = g1, t1._blob = X1.rawAMRData2Blob(g1), t1.decodeAMRAsync(g1);
              }).then(function(g1) {
                t1._samples = g1, N();
              }).catch(function() {
                $(new Error("Failed to decode."));
              });
            });
          });
        } }, { key: "initWithBlob", value: function(u1) {
          var t1 = this;
          (this._isInit || this._isInitRecorder) && X1.throwAlreadyInitialized(), this._playEmpty(), this._blob = u1;
          var N = new Promise(function($) {
            var c1 = new FileReader();
            c1.onload = function(D1) {
              $(D1.target.result);
            }, c1.readAsArrayBuffer(u1);
          });
          return N.then(function($) {
            return t1.initWithArrayBuffer($);
          });
        } }, { key: "initWithUrl", value: function(u1) {
          var t1 = this;
          (this._isInit || this._isInitRecorder) && X1.throwAlreadyInitialized(), this._playEmpty();
          var N = new Promise(function($, c1) {
            var D1 = new XMLHttpRequest();
            D1.open("GET", u1, true), D1.responseType = "arraybuffer", D1.onload = function() {
              $(this.response);
            }, D1.onerror = function() {
              c1(new Error("Failed to fetch " + u1));
            }, D1.send();
          });
          return N.then(function($) {
            return t1.initWithArrayBuffer($);
          });
        } }, { key: "initWithRecord", value: function() {
          var u1 = this;
          return (this._isInit || this._isInitRecorder) && X1.throwAlreadyInitialized(), this._playEmpty(), new Promise(function(t1, N) {
            u1._recorderControl.initRecorder().then(function() {
              u1._isInitRecorder = true, t1();
            }).catch(function($) {
              N($);
            });
          });
        } }, { key: "on", value: function(u1, t1) {
          if (typeof t1 == "function" || t1 === null) switch (u1) {
            case "play":
              this._onPlay = t1;
              break;
            case "stop":
              this._onStop = t1;
              break;
            case "pause":
              this._onPause = t1;
              break;
            case "resume":
              this._onResume = t1;
              break;
            case "ended":
              this._onEnded = t1;
              break;
            case "autoEnded":
              this._onAutoEnded = t1;
              break;
            case "startRecord":
              this._onStartRecord = t1;
              break;
            case "cancelRecord":
              this._onCancelRecord = t1;
              break;
            case "finishRecord":
              this._onFinishRecord = t1;
              break;
            case "*":
            case "all":
              this._onEnded = t1, this._onAutoEnded = t1, this._onPlay = t1, this._onPause = t1, this._onResume = t1, this._onStop = t1, this._onStartRecord = t1, this._onCancelRecord = t1, this._onFinishRecord = t1;
              break;
          }
        } }, { key: "off", value: function(u1) {
          this.on(u1, null);
        } }, { key: "onPlay", value: function(u1) {
          this.on("play", u1);
        } }, { key: "onStop", value: function(u1) {
          this.on("stop", u1);
        } }, { key: "onPause", value: function(u1) {
          this.on("pause", u1);
        } }, { key: "onResume", value: function(u1) {
          this.on("resume", u1);
        } }, { key: "onEnded", value: function(u1) {
          this.on("ended", u1);
        } }, { key: "onAutoEnded", value: function(u1) {
          this.on("autoEnded", u1);
        } }, { key: "onStartRecord", value: function(u1) {
          this.on("startRecord", u1);
        } }, { key: "onFinishRecord", value: function(u1) {
          this.on("finishRecord", u1);
        } }, { key: "onCancelRecord", value: function(u1) {
          this.on("cancelRecord", u1);
        } }, { key: "play", value: function(u1) {
          var t1 = u1 && u1 < this.getDuration() ? parseFloat(u1) : 0;
          if (!this._isInit) throw new Error("Please init AMR first.");
          this._onPlay && this._onPlay(), this._isPlaying = true, this._isPaused = false, this._startCtxTime = Y1.getCtxTime() - t1, this._recorderControl.playPcm(this._samples, this._isInitRecorder ? Y1.getCtxSampleRate() : 8e3, this._onEndCallback.bind(this), t1);
        } }, { key: "stop", value: function() {
          this._recorderControl.stopPcm(), this._isPlaying = false, this._isPaused = false, this._onStop && this._onStop();
        } }, { key: "pause", value: function() {
          this._isPlaying && (this._isPlaying = false, this._isPaused = true, this._pauseTime = Y1.getCtxTime() - this._startCtxTime, this._recorderControl.stopPcm(), this._onPause && this._onPause());
        } }, { key: "resume", value: function() {
          this._isPaused && (this._isPlaying = true, this._isPaused = false, this._startCtxTime = Y1.getCtxTime() - this._pauseTime, this._recorderControl.playPcm(this._samples, this._isInitRecorder ? Y1.getCtxSampleRate() : 8e3, this._onEndCallback.bind(this), this._pauseTime), this._onResume && this._onResume());
        } }, { key: "playOrResume", value: function() {
          this._isPaused ? this.resume() : this.play();
        } }, { key: "pauseOrResume", value: function() {
          this._isPaused ? this.resume() : this.pause();
        } }, { key: "playOrPauseOrResume", value: function() {
          this._isPaused ? this.resume() : this._isPlaying ? this.pause() : this.play();
        } }, { key: "setPosition", value: function(u1) {
          var t1 = parseFloat(u1);
          t1 > this.getDuration() ? this.stop() : this._isPaused ? this._pauseTime = t1 : this._isPlaying ? (this._recorderControl.stopPcmSilently(), this._startCtxTime = Y1.getCtxTime() - t1, this._recorderControl.playPcm(this._samples, this._isInitRecorder ? Y1.getCtxSampleRate() : 8e3, this._onEndCallback.bind(this), t1)) : this.play(t1);
        } }, { key: "getCurrentPosition", value: function() {
          return this._isPaused ? this._pauseTime : this._isPlaying ? Y1.getCtxTime() - this._startCtxTime : 0;
        } }, { key: "isPlaying", value: function() {
          return this._isPlaying;
        } }, { key: "isPaused", value: function() {
          return this._isPaused;
        } }, { key: "startRecord", value: function() {
          this._recorderControl.startRecord(), this._onStartRecord && this._onStartRecord();
        } }, { key: "finishRecord", value: function() {
          var u1 = this;
          return new Promise(function(t1) {
            u1._recorderControl.stopRecord(), u1._recorderControl.generateRecordSamples().then(function(N) {
              return u1._samples = N, u1.encodeAMRAsync(N, Y1.getCtxSampleRate());
            }).then(function(N) {
              u1._rawData = N, u1._blob = X1.rawAMRData2Blob(u1._rawData), u1._isInit = true, u1._onFinishRecord && u1._onFinishRecord(), u1._recorderControl.releaseRecord(), t1();
            });
          });
        } }, { key: "cancelRecord", value: function() {
          this._recorderControl.stopRecord(), this._recorderControl.releaseRecord(), this._onCancelRecord && this._onCancelRecord();
        } }, { key: "isRecording", value: function() {
          return this._recorderControl.isRecording();
        } }, { key: "getDuration", value: function() {
          var u1 = this._isInitRecorder ? Y1.getCtxSampleRate() : 8e3;
          return this._samples.length / u1;
        } }, { key: "getBlob", value: function() {
          return this._blob;
        } }, { key: "destroy", value: function() {
          this._recorderControl.stopPcmSilently(), this._recorderControl.stopRecord(), this._recorderControl.releaseRecord(), this.off("*"), this._recorderControl = null, this._samples = null, this._rawData = null, this._blob = null;
        } }, { key: "encodeAMRAsync", value: function(u1, t1) {
          var N = this;
          return new Promise(function($) {
            N._runAMRWorker({ command: "encode", samples: u1, sampleRate: t1 }, $);
          });
        } }, { key: "decodeAMRAsync", value: function(u1) {
          var t1 = this;
          return new Promise(function(N) {
            t1._runAMRWorker({ command: "decode", buffer: u1 }, N);
          });
        } }], [{ key: "rawAMRData2Blob", value: function(u1) {
          return new Blob([u1.buffer], { type: "audio/amr" });
        } }, { key: "throwAlreadyInitialized", value: function() {
          throw new Error("AMR has been initialized. For a new AMR, please generate a new BenzAMRRecorder().");
        } }, { key: "isPlaySupported", value: function() {
          return Y1.isPlaySupported();
        } }, { key: "isRecordSupported", value: function() {
          return Y1.isRecordSupported();
        } }]), X1;
      })();
      return k2;
    }));
  })(z5)), z5.exports;
}
var ki = yi();
const Ai = fi(ki), Ri = { props: { objData: { type: Object }, appId: { type: String } }, setup(w1) {
  const C1 = G6({ outTime: false, mainLoading: false });
  C1.outTime = w1.objData.type === "1" && parseInt((/* @__PURE__ */ new Date()).getTime() - new Date(w1.objData.createTime).getTime()) >= 2592e5;
  function A1(F1, O1) {
    O1.amrPlaying = true, F1.play();
  }
  function r1(F1, O1) {
    O1.amrPlaying = false, F1.stop();
  }
  function V1(F1) {
    const O1 = F1.amr;
    O1 == null ? F1.type == "2" ? w2(F1.repMediaId, F1.repName).then((C0) => {
      F1.repUrl = C0, v0(F1);
    }) : F1.type == "1" && C2(F1.repMediaId, F1.repName).then((C0) => {
      F1.repUrl = C0, v0(F1);
    }) : O1.isPlaying() ? r1(O1, F1) : A1(O1, F1);
  }
  async function C2(F1, O1) {
    let C0;
    return C1.mainLoading = true, await li({ mediaId: F1, fileName: O1, appId: w1.appId }).then((Y1) => {
      C1.mainLoading = false, C0 = window.URL.createObjectURL(new Blob([Y1.data]));
    }).catch(() => {
      C1.mainLoading = false;
    }), C0;
  }
  async function w2(F1, O1) {
    let C0;
    return C1.mainLoading = true, await si({ mediaId: F1, fileName: O1, appId: w1.appId }).then((Y1) => {
      C1.mainLoading = false, C0 = window.URL.createObjectURL(new Blob([Y1.data]));
    }).catch(() => {
      C1.mainLoading = false;
    }), C0;
  }
  function v0(F1) {
    F1.amr = new Ai();
    const O1 = F1.amr;
    O1.initWithUrl(F1.repUrl).then(function() {
      A1(O1, F1), F1.amrDuration = O1.getDuration();
    }), O1.onEnded(function() {
      F1.amrPlaying = false;
    });
  }
  return { ...Y6(C1), amrPlay: A1, amrStop: r1, playVoice: V1, getTempMaterialOtherF: C2, getMaterialOtherF: w2, handleAudio: v0 };
} }, Si = { key: 0, class: "amr-duration" }, Di = { key: 1 };
function Mi(w1, C1, A1, r1, V1, C2) {
  const w2 = p0("el-button"), v0 = p0("Timer"), F1 = p0("el-icon"), O1 = p0("el-tag"), C0 = ci("loading");
  return wi((T0(), c2("div", { class: "wx-voice-div flex-c", onClick: C1[0] || (C1[0] = (Y1) => w1.outTime ? "" : r1.playVoice(A1.objData)) }, [w1.outTime ? Q0("", true) : (T0(), J2(w2, { key: 0, link: "", icon: A1.objData.amrPlaying != true ? "Microphone" : "Headset" }, { default: E1(() => [A1.objData.amrDuration ? (T0(), c2("span", Si, u0(A1.objData.amrDuration) + '"', 1)) : Q0("", true), M0(u0(w1.$t("layout.voice")), 1)]), _: 1 }, 8, ["icon"])), p1(F1, null, { default: E1(() => [p1(v0)]), _: 1 }), A1.objData.repContent ? (T0(), c2("div", Di, [p1(O1, { type: "success", size: "small" }, { default: E1(() => [M0(u0(w1.$t("components.wxvideoplay.voiceRecognition")), 1)]), _: 1 }), M0(u0(A1.objData.repContent), 1)])) : Q0("", true)])), [[C0, w1.mainLoading]]);
}
const Ti = X6(Ri, [["render", Mi], ["__scopeId", "data-v-69267cec"]]), Ci = { components: { WxNews: H6, WxMaterialSelect: W6, WxVoicePlayer: Ti }, props: { appId: { type: String }, objData: { type: Object }, oneNews: { type: Boolean, default: false }, newsType: { type: String, default: "1" } }, setup(w1, C1) {
  const { proxy: A1 } = mi(), r1 = pi(w1.objData);
  r1.value.repType || (r1.value.repType = "text");
  const V1 = G6({ tempPlayerObj: { type: "2" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, tableLoading: false, dialogNewsVisible: false, dialogImageVisible: false, dialogVoiceVisible: false, dialogVideoVisible: false, dialogThumbVisible: false, tempObj: (/* @__PURE__ */ new Map()).set(r1.value.repType, Object.assign({}, r1.value)), fileList: [], uploadData: { appId: w1.appId, mediaType: r1.value.repType, title: "", introduction: "" }, actionUrl: "/weixin/wxmaterial/materialFileUpload", headers: { Authorization: "Bearer " + vi().access_token } }), C2 = V6(() => {
    var _a;
    return (_a = hi()) == null ? void 0 : _a.permissions;
  }), w2 = V6(() => {
    var _a;
    return (_a = di()) == null ? void 0 : _a.userInfo;
  });
  (() => {
    if (w2.value.type == "-1") {
      const $ = bi();
      $ && (V1.headers["switch-tenant-id"] = $);
    }
  })();
  function v0($) {
    const c1 = $.type === "image/jpeg" || $.type === "image/png" || $.type === "image/gif" || $.type === "image/bmp" || $.type === "image/jpg", D1 = $.size / 1024 / 1024 < 2;
    return c1 || A1.$message.error(A1.$t("components.wxreply.imageFormatError")), D1 || A1.$message.error(A1.$t("components.wxreply.imageSizeExceed")), c1 && D1;
  }
  function F1() {
    r1.value.repUrl = "", r1.value.repName = "", r1.value.content = "", V1.tempObj.set(r1.value.repType, r1.value), C1.emit("update:objData", r1.value);
  }
  function O1($) {
    V1.tableLoading = true;
    const c1 = $.type === "audio/mp3" || $.type === "audio/wma" || $.type === "audio/wav" || $.type === "audio/mpeg" || $.type === "audio/amr", D1 = $.size / 1024 / 1024 < 2;
    return c1 || A1.$message.error(A1.$t("components.wxreply.voiceFormatError")), D1 || A1.$message.error(A1.$t("components.wxreply.voiceSizeExceed")), c1 && D1;
  }
  function C0($) {
    const c1 = $.type === "image/jpeg" || $.type === "image/png" || $.type === "image/gif" || $.type === "image/bmp" || $.type === "image/jpg", D1 = $.size / 1024 / 1024 < 2;
    return c1 || A1.$message.error(A1.$t("components.wxreply.imageFormatError")), D1 || A1.$message.error(A1.$t("components.wxreply.imageSizeExceed")), c1 && D1;
  }
  function Y1($) {
    if ($.code == "0") {
      V1.fileList = [], V1.uploadData.title = "", V1.uploadData.introduction = "";
      const c1 = $.data;
      t2(c1);
    } else A1.$message.error(A1.$t("components.wxreply.uploadError") + $.msg);
  }
  function Y0($) {
    A1.$message.error(A1.$t("components.wxreply.uploadError") + $);
  }
  function P2($) {
    r1.value.repType = $.paneName, V1.uploadData.mediaType = r1.value.repType;
    const c1 = V1.tempObj.get(r1.value.repType);
    c1 ? (r1.value.repName = c1.repName ? c1.repName : null, r1.value.repMediaId = c1.repMediaId ? c1.repMediaId : null, r1.value.media_id = c1.media_id ? c1.media_id : null, r1.value.repUrl = c1.repUrl ? c1.repUrl : null, r1.value.content = c1.content ? c1.content : null, r1.value.repDesc = c1.repDesc ? c1.repDesc : null, C1.emit("update:objData", r1.value)) : (r1.value.repUrl = "", r1.value.repName = "", r1.value.repMediaId = "", r1.value.media_id = "", r1.value.content = "", r1.value.repDesc = "", C1.emit("update:objData", r1.value));
  }
  function t2($) {
    const c1 = {};
    c1.repType = w1.objData.repType, c1.repMediaId = $.mediaId, c1.media_id = $.mediaId, c1.content = $.content, V1.dialogNewsVisible = false, V1.dialogImageVisible = false, V1.dialogVoiceVisible = false, V1.dialogVideoVisible = false, r1.value.repMediaId = $.mediaId, r1.value.media_id = $.mediaId, r1.value.content = $.content, w1.objData.repType == "music" ? (c1.repThumbMediaId = $.mediaId, c1.repThumbUrl = $.url, r1.value.repThumbMediaId = $.mediaId, r1.value.repThumbUrl = $.url, V1.dialogThumbVisible = false) : (c1.repName = $.name, c1.repUrl = $.url, r1.value.repName = $.name, r1.value.repUrl = $.url), r1.value.repType == "video" && ai({ appId: w1.appId, mediaId: $.mediaId }).then((D1) => {
      D1.code == 0 && (r1.value.repName = D1.data.title, r1.value.repDesc = D1.data.description, r1.value.repUrl = D1.data.downUrl, c1.repDesc = D1.data.description, c1.repUrl = D1.data.downUrl, V1.tempObj.set(r1.value.repType, c1));
    }), w1.oneNews && w1.objData.repType == "news" && $.content.articles.length > 1 && (A1.$alert(A1.$t("components.wxreply.multipleArticleLimitMessage"), A1.$t("commons.tip"), { confirmButtonText: A1.$t("commons.confirm") }), $.content.articles = $.content.articles.slice(0, 1)), V1.tempObj.set(r1.value.repType, c1);
  }
  function k2() {
    w1.objData.repType == "news" ? V1.dialogNewsVisible = true : w1.objData.repType == "image" ? V1.dialogImageVisible = true : w1.objData.repType == "voice" ? V1.dialogVoiceVisible = true : w1.objData.repType == "video" ? V1.dialogVideoVisible = true : w1.objData.repType == "music" && (V1.dialogThumbVisible = true);
  }
  function X1($, c1) {
    V1.tableLoading = true, ui(Object.assign({ current: $.currentPage, size: $.pageSize, appId: w1.appId, type: w1.objData.repType }, c1)).then((D1) => {
      V1.tableData = D1.data.items, V1.page.total = D1.data.totalCount, V1.page.currentPage = $.currentPage, V1.page.pageSize = $.pageSize, V1.tableLoading = false;
    }).catch(() => {
      V1.tableLoading = false;
    });
  }
  function m1($) {
    V1.page.currentPage = 1, V1.page.pageSize = $, X1(V1.page);
  }
  function u1($) {
    try {
      let c1 = $.message ? JSON.parse($.message).msg : $.message;
      A1.$message.error(c1);
    } catch {
    }
  }
  function t1($) {
    r1.value.repUrl = $.link;
  }
  function N($) {
    r1.value.repHqUrl = $.link;
  }
  return { ...Y6(V1), permissions: C2, beforeThumbImageUpload: v0, objDataCopy: r1, deleteObj: F1, beforeVoiceUpload: O1, beforeImageUpload: C0, handleUploadSuccess: Y1, handleUploadError: Y0, handleClick: P2, selectMaterial: t2, openMaterial: k2, getPageF: X1, sizeChange: m1, handleError: u1, handleSuccess: t1, handleSuccess2: N };
} }, Pi = { class: "flex items-center mx-[5px]" }, Ii = { class: "flex items-center" }, Oi = { key: 0, class: "select-item" }, Li = ["src"], Ni = { key: 0, class: "item-name" }, Fi = { key: 1, class: "w-full" }, Bi = { class: "el-upload__tip" }, Ui = { class: "flex items-center" }, zi = { key: 0, class: "select-item2" }, xi = { class: "item-name" }, Vi = { class: "item-infos" }, gi = { key: 1, class: "w-full" }, Hi = { class: "el-upload__tip" }, Wi = { class: "flex items-center" }, Gi = { class: "w-full" }, Yi = { class: "w-full" }, Xi = { key: 0, style: { color: "#888", "font-size": "12px", background: "#ececec", padding: "5px", "word-wrap": "break-word", "word-break": "break-all" } }, Ki = ["href"], qi = { style: { "margin-left": "5px" } }, Ji = { style: { "text-align": "center" }, class: "mt-1 flex-c w-full" }, Qi = { class: "flex items-center" }, Zi = { key: 0, class: "select-item" }, $i = { key: 1, class: "w-full" }, ji = { class: "flex items-center" }, et = { class: "thumb-div" }, rt = ["src"], it = { class: "flex items-center justify-center p-2" }, tt = { class: "px-2" }, nt = { class: "px-2" };
function ot(w1, C1, A1, r1, V1, C2) {
  const w2 = p0("el-icon-document"), v0 = p0("el-icon"), F1 = p0("el-input"), O1 = p0("el-tab-pane"), C0 = p0("el-icon-picture"), Y1 = p0("el-button"), Y0 = p0("el-row"), P2 = p0("el-icon-circle-check"), t2 = p0("el-col"), k2 = p0("el-upload"), X1 = W6, m1 = p0("el-dialog"), u1 = p0("el-icon-phone"), t1 = p0("WxVoicePlayer"), N = p0("el-icon-share"), $ = p0("VideoPlay"), c1 = p0("Message"), D1 = H6, g1 = p0("el-icon-service"), B0 = p0("el-icon-plus"), h0 = p0("el-tabs");
  return T0(), J2(h0, { modelValue: r1.objDataCopy.repType, "onUpdate:modelValue": C1[12] || (C1[12] = (K1) => r1.objDataCopy.repType = K1), type: "border-card", onTabClick: r1.handleClick }, { default: E1(() => [p1(O1, { name: "text" }, { label: E1(() => [w0("span", Pi, [p1(v0, null, { default: E1(() => [p1(w2)]), _: 1 }), M0(u0(w1.$t("components.wxreply.text")), 1)])]), default: E1(() => [p1(F1, { modelValue: r1.objDataCopy.repContent, "onUpdate:modelValue": C1[0] || (C1[0] = (K1) => r1.objDataCopy.repContent = K1), type: "textarea", rows: 5, placeholder: w1.$t("components.wxreply.enterContent") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }), p1(O1, { name: "image" }, { label: E1(() => [w0("span", Ii, [p1(v0, null, { default: E1(() => [p1(C0)]), _: 1 }), M0(u0(w1.$t("components.wxreply.image")), 1)])]), default: E1(() => [p1(Y0, null, { default: E1(() => [A1.objData.repUrl ? (T0(), c2("div", Oi, [w0("img", { class: "material-img", src: A1.objData.repUrl }, null, 8, Li), A1.objData.repName ? (T0(), c2("p", Ni, u0(A1.objData.repName), 1)) : Q0("", true), p1(Y0, { class: "ope-row flex-c" }, { default: E1(() => [p1(Y1, { type: "danger", icon: "delete", circle: "", onClick: r1.deleteObj }, null, 8, ["onClick"])]), _: 1 })])) : Q0("", true), A1.objData.repUrl ? Q0("", true) : (T0(), c2("div", Fi, [p1(Y0, { style: { "text-align": "center" } }, { default: E1(() => [p1(t2, { span: 12, class: "col-select" }, { default: E1(() => [p1(Y1, { type: "success", onClick: r1.openMaterial }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.selectMaterialFromLibrary")), 1), p1(v0, { class: "el-icon--right" }, { default: E1(() => [p1(P2)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), _: 1 }), p1(t2, { span: 12, class: "col-add" }, { default: E1(() => [p1(k2, { action: w1.actionUrl, headers: w1.headers, multiple: "", limit: 1, "on-success": r1.handleUploadSuccess, "on-error": r1.handleUploadError, "file-list": w1.fileList, "before-upload": r1.beforeImageUpload, data: w1.uploadData }, { tip: E1(() => [w0("div", Bi, u0(w1.$t("components.wxreply.imageFormatSupport")), 1)]), default: E1(() => [r1.permissions["wxmp:wxmaterial:add"] ? (T0(), J2(Y1, { key: 0, type: "primary" }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.uploadImage")), 1)]), _: 1 })) : Q0("", true)]), _: 1 }, 8, ["action", "headers", "on-success", "on-error", "file-list", "before-upload", "data"])]), _: 1 })]), _: 1 })])), p1(m1, { modelValue: w1.dialogImageVisible, "onUpdate:modelValue": C1[1] || (C1[1] = (K1) => w1.dialogImageVisible = K1), title: w1.$t("components.wxreply.chooseImage"), width: "90%", "append-to-body": "" }, { default: E1(() => [p1(X1, { appId: A1.appId, objData: A1.objData, onSelectMaterial: r1.selectMaterial }, null, 8, ["appId", "objData", "onSelectMaterial"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]), _: 1 }), p1(O1, { name: "voice" }, { label: E1(() => [w0("span", Ui, [p1(v0, null, { default: E1(() => [p1(u1)]), _: 1 }), M0(u0(w1.$t("components.wxreply.voice")), 1)])]), default: E1(() => [p1(Y0, null, { default: E1(() => [A1.objData.repName ? (T0(), c2("div", zi, [w0("p", xi, u0(A1.objData.repName), 1), w0("div", Vi, [p1(t1, { objData: Object.assign(w1.tempPlayerObj, { repMediaId: A1.objData.media_id, repName: A1.objData.repName }), appId: A1.appId }, null, 8, ["objData", "appId"])]), p1(Y0, { class: "ope-row flex-c" }, { default: E1(() => [p1(Y1, { type: "danger", icon: "delete", circle: "", onClick: r1.deleteObj }, null, 8, ["onClick"])]), _: 1 })])) : Q0("", true), A1.objData.repName ? Q0("", true) : (T0(), c2("div", gi, [p1(Y0, { style: { "text-align": "center" } }, { default: E1(() => [p1(t2, { span: 12, class: "col-select" }, { default: E1(() => [p1(Y1, { type: "success", onClick: r1.openMaterial }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.selectMaterialFromLibrary")), 1), p1(v0, { class: "el-icon--right" }, { default: E1(() => [p1(P2)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), _: 1 }), p1(t2, { span: 12, class: "col-add" }, { default: E1(() => [p1(k2, { action: w1.actionUrl, headers: w1.headers, multiple: "", limit: 1, "on-success": r1.handleUploadSuccess, "on-error": r1.handleUploadError, "file-list": w1.fileList, "before-upload": r1.beforeVoiceUpload, data: w1.uploadData }, { tip: E1(() => [w0("div", Hi, u0(w1.$t("components.wxreply.voiceFormatSupport")), 1)]), default: E1(() => [r1.permissions["wxmp:wxmaterial:add"] ? (T0(), J2(Y1, { key: 0, type: "primary" }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.upload")), 1)]), _: 1 })) : Q0("", true)]), _: 1 }, 8, ["action", "headers", "on-success", "on-error", "file-list", "before-upload", "data"])]), _: 1 })]), _: 1 })])), p1(m1, { modelValue: w1.dialogVoiceVisible, "onUpdate:modelValue": C1[2] || (C1[2] = (K1) => w1.dialogVoiceVisible = K1), title: w1.$t("components.wxreply.chooseVoice"), width: "90%", "append-to-body": "" }, { default: E1(() => [p1(X1, { appId: A1.appId, objData: A1.objData, onSelectMaterial: r1.selectMaterial }, null, 8, ["appId", "objData", "onSelectMaterial"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]), _: 1 }), p1(O1, { name: "video" }, { label: E1(() => [w0("span", Wi, [p1(v0, null, { default: E1(() => [p1(N)]), _: 1 }), M0(u0(w1.$t("components.wxreply.video")), 1)])]), default: E1(() => [p1(Y0, { class: "p-[10px]" }, { default: E1(() => [w0("div", Gi, [p1(F1, { modelValue: r1.objDataCopy.repName, "onUpdate:modelValue": C1[3] || (C1[3] = (K1) => r1.objDataCopy.repName = K1), class: "w-full", placeholder: w1.$t("components.wxreply.enterTitle") }, { prepend: E1(() => [...C1[13] || (C1[13] = [w0("span", { class: "mx-3" }, "\u6807\u9898", -1)])]), _: 1 }, 8, ["modelValue", "placeholder"])]), w0("div", Yi, [p1(F1, { modelValue: r1.objDataCopy.repDesc, "onUpdate:modelValue": C1[4] || (C1[4] = (K1) => r1.objDataCopy.repDesc = K1), class: "mt-1 w-full", placeholder: w1.$t("components.wxreply.enterDescription") }, { prepend: E1(() => [...C1[14] || (C1[14] = [w0("span", { class: "mx-3" }, "\u63CF\u8FF0", -1)])]), _: 1 }, 8, ["modelValue", "placeholder"])]), r1.objDataCopy.repUrl ? (T0(), c2("div", Xi, [w0("a", { target: "_blank", class: "flex-c", href: r1.objDataCopy.repUrl }, [p1(v0, { size: "18" }, { default: E1(() => [p1($)]), _: 1 }), w0("span", qi, u0(r1.objDataCopy.repUrl), 1)], 8, Ki)])) : Q0("", true), w0("div", Ji, [p1(Y1, { type: "success", onClick: r1.openMaterial }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.selectMaterialFromLibrary")), 1), p1(v0, { class: "el-icon--right" }, { default: E1(() => [p1(P2)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), p1(m1, { modelValue: w1.dialogVideoVisible, "onUpdate:modelValue": C1[5] || (C1[5] = (K1) => w1.dialogVideoVisible = K1), title: w1.$t("components.wxreply.chooseVideo"), width: "90%", "append-to-body": "" }, { default: E1(() => [p1(X1, { appId: A1.appId, objData: A1.objData, onSelectMaterial: r1.selectMaterial }, null, 8, ["appId", "objData", "onSelectMaterial"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]), _: 1 }), p1(O1, { name: "news" }, { label: E1(() => [w0("span", Qi, [p1(v0, null, { default: E1(() => [p1(c1)]), _: 1 }), M0(u0(w1.$t("components.wxreply.article")), 1)])]), default: E1(() => [p1(Y0, null, { default: E1(() => [A1.objData.content ? (T0(), c2("div", Zi, [p1(D1, { objData: A1.objData.content.articles }, null, 8, ["objData"]), p1(Y0, { class: "ope-row flex-c" }, { default: E1(() => [p1(Y1, { type: "danger", icon: "delete", circle: "", onClick: r1.deleteObj }, null, 8, ["onClick"])]), _: 1 })])) : Q0("", true), A1.objData.content ? Q0("", true) : (T0(), c2("div", $i, [p1(Y0, { style: { "text-align": "center" } }, { default: E1(() => [p1(t2, { span: 24, class: "col-select2" }, { default: E1(() => [p1(Y1, { type: "success", onClick: r1.openMaterial }, { default: E1(() => [M0(u0(A1.newsType == "1" ? w1.$t("components.wxreply.selectPublishedArticle") : w1.$t("components.wxreply.selectDraftArticle")) + " ", 1), p1(v0, { class: "el-icon--right" }, { default: E1(() => [p1(P2)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), _: 1 })]), _: 1 })])), p1(m1, { modelValue: w1.dialogNewsVisible, "onUpdate:modelValue": C1[6] || (C1[6] = (K1) => w1.dialogNewsVisible = K1), title: w1.$t("components.wxreply.selectArticle"), width: "90%", "append-to-body": "" }, { default: E1(() => [p1(X1, { appId: A1.appId, objData: A1.objData, newsType: A1.newsType, onSelectMaterial: r1.selectMaterial }, null, 8, ["appId", "objData", "newsType", "onSelectMaterial"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]), _: 1 }), p1(O1, { name: "music" }, { label: E1(() => [w0("span", ji, [p1(v0, null, { default: E1(() => [p1(g1)]), _: 1 }), M0(u0(w1.$t("components.wxreply.music")), 1)])]), default: E1(() => [p1(Y0, { class: "w-full pt-5", offset: 10 }, { default: E1(() => [p1(t2, { span: 6 }, { default: E1(() => [w0("div", et, [C1[15] || (C1[15] = w0("div", null, "\u97F3\u4E50\u5C01\u9762\u56FE\u7247", -1)), A1.objData.repThumbUrl ? (T0(), c2("img", { key: 0, style: { width: "80px" }, src: A1.objData.repThumbUrl }, null, 8, rt)) : (T0(), J2(v0, { key: 1, class: "avatar-uploader-icon" }, { default: E1(() => [p1(B0)]), _: 1 })), w0("div", it, [p1(k2, { action: w1.actionUrl, headers: w1.headers, multiple: "", limit: 1, "on-success": r1.handleUploadSuccess, "on-error": r1.handleUploadError, "file-list": w1.fileList, "before-upload": r1.beforeThumbImageUpload, data: w1.uploadData }, { trigger: E1(() => [r1.permissions["wxmp:wxmaterial:add"] ? (T0(), J2(Y1, { key: 0, size: "small", link: "" }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.localUpload")), 1)]), _: 1 })) : Q0("", true)]), default: E1(() => [r1.permissions["wxmp:wxmaterial:add"] ? (T0(), J2(Y1, { key: 0, size: "small", link: "", type: "primary", onClick: _i(r1.openMaterial, ["stop"]) }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.selectMaterialFromLibrary")), 1)]), _: 1 }, 8, ["onClick"])) : Q0("", true)]), _: 1 }, 8, ["action", "headers", "on-success", "on-error", "file-list", "before-upload", "data"])])]), p1(m1, { modelValue: w1.dialogThumbVisible, "onUpdate:modelValue": C1[7] || (C1[7] = (K1) => w1.dialogThumbVisible = K1), title: w1.$t("components.wxreply.chooseImage"), width: "80%", "append-to-body": "" }, { default: E1(() => [p1(X1, { appId: A1.appId, objData: { repType: "image" }, onSelectMaterial: r1.selectMaterial }, null, 8, ["appId", "onSelectMaterial"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 }), p1(t2, { span: 17 }, { default: E1(() => [p1(F1, { modelValue: r1.objDataCopy.repName, "onUpdate:modelValue": C1[8] || (C1[8] = (K1) => r1.objDataCopy.repName = K1), placeholder: w1.$t("components.wxreply.enterTitle") }, null, 8, ["modelValue", "placeholder"]), C1[16] || (C1[16] = w0("div", { style: { margin: "20px 0" } }, null, -1)), p1(F1, { modelValue: r1.objDataCopy.repDesc, "onUpdate:modelValue": C1[9] || (C1[9] = (K1) => r1.objDataCopy.repDesc = K1), placeholder: w1.$t("components.wxreply.enterDescription") }, null, 8, ["modelValue", "placeholder"])]), _: 1 })]), _: 1 }), w0("div", tt, [p1(F1, { modelValue: r1.objDataCopy.repUrl, "onUpdate:modelValue": C1[10] || (C1[10] = (K1) => r1.objDataCopy.repUrl = K1), placeholder: w1.$t("components.wxreply.enterMusicLink") }, null, 8, ["modelValue", "placeholder"]), p1(k2, { action: "/upms/file/upload?fileType=music&dir=wx/music/", headers: w1.headers, multiple: true, "file-list": [], "on-success": r1.handleSuccess, "on-error": r1.handleError }, { default: E1(() => [p1(Y1, { size: "small", type: "primary", class: "mt-[10px]" }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.upload")), 1)]), _: 1 })]), _: 1 }, 8, ["headers", "on-success", "on-error"])]), w0("div", nt, [p1(F1, { modelValue: r1.objDataCopy.repHqUrl, "onUpdate:modelValue": C1[11] || (C1[11] = (K1) => r1.objDataCopy.repHqUrl = K1), placeholder: w1.$t("components.wxreply.enterHighQualityMusicLink") }, null, 8, ["modelValue", "placeholder"]), p1(k2, { action: "/upms/file/upload?fileType=music&dir=wx/music/", headers: w1.headers, multiple: true, "file-list": [], "on-success": r1.handleSuccess2, "on-error": r1.handleError }, { default: E1(() => [p1(Y1, { size: "small", type: "primary", class: "mt-[10px]" }, { default: E1(() => [M0(u0(w1.$t("components.wxreply.upload")), 1)]), _: 1 })]), _: 1 }, 8, ["headers", "on-success", "on-error"])])]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabClick"]);
}
const qt = X6(Ci, [["render", ot], ["__scopeId", "data-v-982468ee"]]);
export {
  Ti as W,
  qt as a
};
