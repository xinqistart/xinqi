import { R as C, S as $, _ as b, r as o, c as i, o as p, b as e, h as n, e as d, z as s, f as r, B as c, a_ as B } from "./index-DAdfXJ2i.js";
import N from "./setting-BJtEEskD.js";
import V from "./codeaudit-BlbhtHAj.js";
import L from "./serveraddress-DLdZ5ZRL.js";
import P from "./liveinfo-BP8Miqr_.js";
import U from "./userprivacysetting-CmR3ueaN.js";
import D from "./summary-CRtAAVvZ.js";
import "./index-0HWMArnC.js";
import "./wxapp-DzjQ_kFh.js";
import "./index-D9J23VQK.js";
import "./index-Bshxa3s9.js";
import "./index-CVy61yge.js";
import "./vue-qr-Ee6k57BN.js";
import "./index-BMoo9HBP.js";
const R = { props: { wxApp: { type: Object } }, components: { SettingMa: N, CodeAudit: V, ServerAddress: L, LiveInfo: P, UserPrivacySetting: U, SummaryMa: D }, setup() {
  const t = C({ selectIndex: "1" });
  function u(a) {
    t.selectIndex = a;
  }
  return { ...$(t), selectMenu: u };
} }, j = { class: "menu-title" }, z = { class: "menu-title" }, E = { class: "el-icon-school menu-title" }, G = { key: 0 }, O = { key: 1 }, T = { key: 2 }, q = { key: 3 }, F = { key: 4 }, H = { key: 5 };
function J(t, u, a, x, K, Q) {
  const l = o("el-menu-item"), m = o("el-divider"), _ = o("el-sub-menu"), w = o("el-menu"), f = o("el-aside"), v = o("SettingMa"), A = o("SummaryMa"), S = o("CodeAudit"), y = o("ServerAddress"), h = o("UserPrivacySetting"), I = o("LiveInfo"), g = o("el-main"), k = o("el-container"), M = B;
  return p(), i("div", null, [e(M, null, { default: n(() => [e(k, null, { default: n(() => [e(f, { width: "200px" }, { default: n(() => [e(w, { "default-active": "1", "default-openeds": ["2", "4", "5"], onSelect: x.selectMenu }, { default: n(() => [e(l, { index: "1", class: "menu-title" }, { title: n(() => [d("span", null, s(t.$t("wxma.wxapp.settings")), 1)]), _: 1 }), e(m), e(_, { index: "2" }, { title: n(() => [d("span", j, s(t.$t("wxma.wxapp.management")), 1)]), default: n(() => [e(l, { index: "2-1" }, { default: n(() => [r(s(t.$t("wxma.wxapp.versionControl")), 1)]), _: 1 })]), _: 1 }), e(m), e(l, { index: "3", class: "menu-title" }, { title: n(() => [d("span", null, s(t.$t("wxma.wxapp.statistics")), 1)]), _: 1 }), e(m), e(_, { index: "4" }, { title: n(() => [d("span", z, s(t.$t("wxma.wxapp.development")), 1)]), default: n(() => [e(l, { index: "4-1" }, { default: n(() => [r(s(t.$t("wxma.wxapp.serverDomain")), 1)]), _: 1 }), e(l, { index: "4-2" }, { default: n(() => [r(s(t.$t("wxma.wxapp.privacyGuidelinesSettings")), 1)]), _: 1 })]), _: 1 }), e(m), e(_, { index: "5" }, { title: n(() => [d("span", E, s(t.$t("wxma.wxapp.features")), 1)]), default: n(() => [e(l, { index: "5-1" }, { default: n(() => [r(s(t.$t("wxma.wxapp.liveBroadcast")), 1)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["onSelect"])]), _: 1 }), e(g, null, { default: n(() => [d("div", null, [t.selectIndex == "1" ? (p(), i("div", G, [e(v, { wxApp: a.wxApp }, null, 8, ["wxApp"])])) : c("", true), t.selectIndex == "3" ? (p(), i("div", O, [e(A, { wxApp: a.wxApp }, null, 8, ["wxApp"])])) : c("", true), t.selectIndex == "2-1" ? (p(), i("div", T, [e(S, { wxApp: a.wxApp }, null, 8, ["wxApp"])])) : c("", true), t.selectIndex == "4-1" ? (p(), i("div", q, [e(y, { wxApp: a.wxApp }, null, 8, ["wxApp"])])) : c("", true), t.selectIndex == "4-2" ? (p(), i("div", F, [e(h, { wxApp: a.wxApp }, null, 8, ["wxApp"])])) : c("", true), t.selectIndex == "5-1" ? (p(), i("div", H, [e(I, { wxApp: a.wxApp }, null, 8, ["wxApp"])])) : c("", true)])]), _: 1 })]), _: 1 })]), _: 1 })]);
}
const ce = b(R, [["render", J], ["__scopeId", "data-v-5229616c"]]);
export {
  ce as default
};
