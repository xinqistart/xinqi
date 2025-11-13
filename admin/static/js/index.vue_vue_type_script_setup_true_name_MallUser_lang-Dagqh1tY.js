import { b as N } from "./userinfo-BgcUdIqU.js";
import { a as p } from "./userinfo-Byg3Ujwc.js";
import { d as x, A as S, p as k, c as n, o, F as B, b as u, e as f, g as $, B as i, r as a, z as d, h as v, f as g, ai as D, u as j } from "./index-DAdfXJ2i.js";
const w = { key: 0 }, F = { class: "flex-c" }, O = { class: "flex items-center" }, z = { key: 0 }, A = { key: 0, class: "flex-c justify-start" }, E = { key: 0, style: { position: "relative" } }, H = x({ __name: "index", props: { userId: { type: String }, nickName: { type: String }, headimgUrl: { type: String }, setSlot: { type: Boolean, default: false }, userInfo: { default: () => ({}), type: Object } }, setup(e) {
  const { proxy: y } = S(), m = e, l = k(false), s = k(m.userInfo);
  function I() {
    l.value = true, m.userId && N(m.userId).then((t) => {
      t.data ? s.value = t.data : (s.value = {}, y.$message.error(y.$t("commons.notFoundUser")));
    });
  }
  return (t, r) => {
    const h = a("el-avatar"), V = a("el-button"), b = a("el-text"), C = a("avue-form"), U = a("el-dialog");
    return o(), n(B, null, [e.setSlot ? (o(), n("div", { key: 1, style: { display: "inline-block" }, onClick: I }, [D(t.$slots, "default")])) : (o(), n("div", w, [f("div", F, [e.headimgUrl || e.userInfo && e.userInfo.headimgUrl ? (o(), $(h, { key: 0, src: e.headimgUrl || e.userInfo.headimgUrl, size: 45, class: "mr-1" }, null, 8, ["src"])) : i("", true), f("div", null, [f("div", O, [e.userInfo && e.userInfo.nickName ? (o(), n("span", z, d(t.$t("mall.userinfo.nickName")) + ":", 1)) : i("", true), u(V, { link: "", type: "primary", onClick: I }, { default: v(() => [g(d(e.userInfo ? e.userInfo.nickName : e.nickName || e.userId), 1)]), _: 1 })]), e.userInfo && e.userInfo.userCode ? (o(), n("div", A, [u(b, null, { default: v(() => [g(d(t.$t("mall.userinfo.userCode")) + ": " + d(e.userInfo.userCode), 1)]), _: 1 })])) : i("", true)])])])), u(U, { modelValue: l.value, "onUpdate:modelValue": r[1] || (r[1] = (c) => l.value = c), title: t.$t("commons.userDetails"), "append-to-body": true, width: "66%" }, { default: v(() => [l.value ? (o(), n("div", E, [u(C, { modelValue: s.value, "onUpdate:modelValue": r[0] || (r[0] = (c) => s.value = c), option: j(p) }, null, 8, ["modelValue", "option"])])) : i("", true)]), _: 1 }, 8, ["modelValue", "title"])], 64);
  };
} });
export {
  H as _
};
