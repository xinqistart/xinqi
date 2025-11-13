import { aO as t } from "./index-DAdfXJ2i.js";
function n(e) {
  return t.request("get", "/mall/shopinfo/list", { params: e });
}
function u(e) {
  return t.request("get", "/mall/shopinfo/page", { params: e });
}
function r(e) {
  return t.request("post", "/mall/shopinfo", { data: e });
}
function s(e) {
  return t.request("get", "/mall/shopinfo/" + e);
}
function o(e) {
  return t.request("delete", "/mall/shopinfo/" + e);
}
function p(e) {
  return t.request("put", "/mall/shopinfo", { data: e });
}
function i(e) {
  return t.request("get", "/mall/shopinfo/count", { params: e });
}
function l(e) {
  return t.request("put", "/mall/shopinfo/servicefee", { data: e });
}
function f(e) {
  return t.request("put", "/mall/shopinfo/enable", { data: e });
}
export {
  n as a,
  i as b,
  u as c,
  r as d,
  o as e,
  f,
  s as g,
  p,
  l as u
};
