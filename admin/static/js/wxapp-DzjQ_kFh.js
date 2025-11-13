import { aO as t } from "./index-DAdfXJ2i.js";
function i(e) {
  return t.request("get", "/weixin/wxapp/page", { params: e });
}
function s(e) {
  return t.request("post", "/weixin/wxapp", { data: e });
}
function u(e) {
  return t.request("delete", "/weixin/wxapp/" + e);
}
function o(e) {
  return t.request("put", "/weixin/wxapp", { data: e });
}
function p(e) {
  return t.request("get", "/weixin/wxapp/list", { params: e });
}
function c(e) {
  return t.request("post", "/weixin/wxapp/qrCode", { data: e });
}
function d(e) {
  return t.request("put", "/weixin/wxapp/quota", { data: e });
}
function x(e) {
  return t.request("get", "/weixin/wxapp/access-token", { params: e });
}
function w(e) {
  return t.request("get", "/weixin/open/api/authorizer-info/" + e);
}
function g() {
  return t.request("get", "/weixin/open/ma/code/template/list");
}
function f(e) {
  return t.request("post", "/weixin/open/ma/code/" + e.appId + "/commit", { data: e });
}
function q(e) {
  return t.request("get", "/weixin/open/ma/code/" + e + "/page");
}
function m(e) {
  return t.request("post", "/weixin/open/ma/code/" + e.appId + "/submit", { data: e });
}
function l(e) {
  return t.request("get", "/weixin/open/ma/code/" + e + "/auditstatus");
}
function y(e) {
  return t.request("get", "/weixin/open/ma/code/" + e + "/undocodeaudit");
}
function C(e) {
  return t.request("get", "/weixin/open/ma/code/" + e + "/qrcode");
}
function v(e, n) {
  return t.request("get", "/weixin/open/ma/code/" + e + "/screenshot/" + n);
}
function S(e, n) {
  return t.request("post", "/weixin/open/ma/code/" + e + "/" + n + "/release");
}
function h() {
  return t.request("get", "/weixin/serveraddress");
}
function I(e) {
  return t.request("get", "/weixin/serveraddress/" + e.appId);
}
function A(e) {
  return t.request("post", "/weixin/serveraddress/" + e.appId, { data: e });
}
function L(e) {
  return t.request("post", "/weixin/wxmaqrcode/unlimited", { data: e });
}
function k(e) {
  return t.request("get", "/weixin/wxmaprivacysetting/get/" + e.appId, { params: e });
}
function G(e) {
  return t.request("post", "/weixin/wxmaprivacysetting/set/" + e.appId, { data: e });
}
function M(e) {
  return t.request("post", "/weixin/wxapp/signature", { data: e });
}
function O(e) {
  return t.request("post", "/weixin/wxapp/logo", { data: e });
}
function P(e) {
  return t.request("get", "/weixin/wxapp/searchstatus/" + e);
}
function z(e) {
  const n = e.id;
  return delete e.id, t.request("post", "/weixin/wxapp/searchstatus/" + n, { data: e });
}
function Q(e) {
  return t.request("post", "/weixin/wxapp/nickname", { data: e });
}
function B(e) {
  return t.request("get", "/weixin/wxapp/basicinfo/" + e);
}
function N(e, n) {
  return t.request("get", "/weixin/wxmamedia/" + e + "/" + n);
}
function T(e) {
  return t.request("get", "/weixin/wxapp/category/" + e);
}
function b(e, n, a) {
  return t.request("delete", "/weixin/wxapp/category/" + e + "/" + n + "/" + a);
}
function D(e, n) {
  return t.request("post", "/weixin/wxapp/category/" + e, { data: n });
}
function E(e) {
  return t.request("get", "/weixin/wxapp/allcategorys/" + e);
}
function F(e, n) {
  return t.request("post", "/weixin/wxapp/applyliveinfo/" + e, { data: n });
}
function H(e, n) {
  return t.request("post", "/weixin/wxapp/pluginlist/" + e, { data: n });
}
export {
  k as A,
  N as B,
  p as C,
  x as D,
  s as E,
  o as F,
  u as G,
  i as H,
  c as I,
  d as J,
  w as K,
  B as a,
  P as b,
  T as c,
  D as d,
  E as e,
  b as f,
  L as g,
  O as h,
  M as i,
  Q as j,
  q as k,
  g as l,
  l as m,
  C as n,
  f as o,
  H as p,
  v as q,
  S as r,
  z as s,
  m as t,
  y as u,
  G as v,
  h as w,
  I as x,
  A as y,
  F as z
};
