import { aO as r } from "./index-DAdfXJ2i.js";
function n(e) {
  return r.request("get", "/mall/orderinfo/page", { params: e });
}
function o(e) {
  return r.request("post", "/mall/orderinfo", { data: e });
}
function u(e) {
  return r.request("get", "/mall/orderinfo/" + e);
}
function i(e) {
  return r.request("delete", "/mall/orderinfo/" + e);
}
function l(e) {
  return r.request("put", "/mall/orderinfo", { data: e });
}
function s(e) {
  return r.request("put", "/mall/orderinfo/editPrice", { data: e });
}
function d(e) {
  return r.request("put", "/mall/orderinfo/cancel/" + e);
}
function f(e) {
  return r.request("put", "/mall/orderinfo/takegoods/" + e);
}
function c(e, t) {
  return r.request("get", "/mall/orderinfo/statistics/" + e, { params: t });
}
function m(e) {
  return r.request("put", "/mall/orderinfo/delivery", { data: e });
}
function p(e) {
  return r.request("put", "/mall/orderbill", { data: e });
}
export {
  u as a,
  o as b,
  m as c,
  i as d,
  d as e,
  s as f,
  n as g,
  c as h,
  p as o,
  l as p,
  f as t
};
