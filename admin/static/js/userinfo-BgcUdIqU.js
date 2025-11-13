import { aO as e } from "./index-DAdfXJ2i.js";
function s(t) {
  return e.request("get", "/mall/userinfo/page", { params: t });
}
function u(t) {
  return e.request("post", "/mall/userinfo", { data: t });
}
function n(t) {
  return e.request("get", "/mall/userinfo/" + t);
}
function i(t) {
  return e.request("delete", "/mall/userinfo/" + t);
}
function o(t) {
  return e.request("put", "/mall/userinfo", { data: t });
}
function l(t) {
  return e.request("put", "/mall/userinfo/parentId", { data: t });
}
function f(t) {
  return e.request("get", "/mall/userinfo/statistics", { params: t });
}
function m(t, a) {
  return e.request("get", "/mall/userinfo/statistics/" + t, { params: a });
}
export {
  u as a,
  n as b,
  f as c,
  i as d,
  l as e,
  m as f,
  s as g,
  o as p
};
