import { aO as t } from "./index-DAdfXJ2i.js";
function i(e) {
  return t.request("get", "/weixin/wxapp/page", { params: e });
}
function r(e) {
  return t.request("post", "/weixin/wxapp", { data: e });
}
function u(e) {
  return t.request("get", "/weixin/wxapp/" + e);
}
function p(e) {
  return t.request("delete", "/weixin/wxapp/" + e);
}
function s(e) {
  return t.request("put", "/weixin/wxapp", { data: e });
}
function x(e) {
  return t.request("get", "/weixin/wxapp/list", { params: e });
}
function o(e) {
  return t.request("post", "/weixin/wxapp/qrCode", { data: e });
}
function w(e) {
  return t.request("put", "/weixin/wxapp/quota", { data: e });
}
function c(e) {
  return t.request("get", "/weixin/wxapp/access-token", { params: e });
}
function f(e) {
  return t.request("get", "/weixin/wxapp/jsapi-ticket", { params: e });
}
function g(e) {
  return t.request("get", "/weixin/open/api/authorizer-info/" + e);
}
function q(e) {
  return t.request("get", "/weixin/wxapp/qrCode", { params: e });
}
function d(e) {
  return t.request("get", "/weixin/wxapp/wxamplink/" + e);
}
function k(e, n) {
  return t.request("post", "/weixin/wxapp/wxampunlink/" + e, { data: n });
}
function l(e, n) {
  return t.request("post", "/weixin/wxapp/wxamplink/" + e, { data: n });
}
export {
  u as a,
  x as b,
  k as c,
  d,
  f as e,
  c as f,
  i as g,
  r as h,
  p as i,
  o as j,
  q as k,
  w as l,
  g as m,
  s as p,
  l as w
};
