import { aO as w, p as g, b5 as h, b6 as $, ah as m, H as x, aF as C, n as I } from "./index-DAdfXJ2i.js";
function y(f) {
  return w.request("put", "/upms/phone/code", { params: f });
}
const { $t: S } = I(), l = g(false), t = g(null), o = g(""), D = () => {
  const f = async (r, v, i, e, s, a) => {
    if (s = s || 1, e = e || 60, a = a !== false, !r) return;
    const n = h(e, true);
    a ? await r.validateField(v, async (c) => {
      c && d(i, s).then(() => {
        clearInterval(t.value), t.value = setInterval(() => {
          e > 0 ? (o.value = `${e}`, l.value = true, e -= 1) : (o.value = "", l.value = false, clearInterval(t.value), e = n);
        }, 1e3);
      }).catch((p) => {
      });
    }) : d(i, s).then(() => {
      clearInterval(t.value), t.value = setInterval(() => {
        e > 0 ? (o.value = `${e}`, l.value = true, e -= 1) : (o.value = "", l.value = false, clearInterval(t.value), e = n);
      }, 1e3);
    }).catch((c) => {
    });
  }, d = async (r, v = 1) => new Promise(async (i, e) => {
    let s = `${window.location.origin}/code?randomStr=${r}&s=${(/* @__PURE__ */ new Date()).getTime()}`;
    $.prompt(() => m("img", { src: s, style: { width: "395px", height: "100px", cursor: "pointer" }, onClick: (a) => {
      a.target.src = `${window.location.origin}/code?randomStr=${r}&s=${(/* @__PURE__ */ new Date()).getTime()}`;
    } }), "\u56FE\u5F62\u9A8C\u8BC1\u7801", { confirmButtonText: "\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801", showCancelButton: false, center: true, confirmButtonClass: "w-full !h-[45px]", inputType: "string", inputPattern: /\S/, inputPlaceholder: "\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801", inputErrorMessage: "\u8BF7\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801", beforeClose: async (a, n, c) => {
      if (a == "confirm") {
        n.confirmButtonLoading = true;
        const p = await y({ phone: r, type: v, graphCode: n.inputValue }).catch(() => {
          u(), e();
        });
        x(() => {
          s = `${window.location.origin}/code?randomStr=${r}&s=${(/* @__PURE__ */ new Date()).getTime()}`;
        }), n.confirmButtonLoading = false, p ? (await C(S("login.sendSuccess"), { type: "success" }), c(), i()) : (u(), e());
      } else c();
    } }).catch((a) => {
      u(), e();
    });
  }), u = () => {
    o.value = "", l.value = false, clearInterval(t.value);
  };
  return { isDisabled: l, timer: t, text: o, start: f, end: u };
};
export {
  D as u
};
