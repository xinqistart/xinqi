import { aO as e } from "./index-DAdfXJ2i.js";
function s(t) {
  return e.request("get", "/mall/shopdeposit/page", { params: t });
}
function p(t) {
  return e.request("post", "/mall/shopdeposit", { data: t });
}
function u(t) {
  return e.request("delete", "/mall/shopdeposit/" + t);
}
function o(t) {
  return e.request("put", "/mall/shopdeposit", { data: t });
}
function n(t) {
  return e.request("post", "/mall/shopdeposit/unified", { data: t });
}
function r(t) {
  return e.request("put", "/mall/shopdeposit/status/apply", { data: t });
}
function i(t) {
  return e.request("put", "/mall/shopdeposit/status/examine", { data: t });
}
export {
  p as a,
  n as b,
  r as c,
  u as d,
  s as g,
  o as p,
  i as u
};
