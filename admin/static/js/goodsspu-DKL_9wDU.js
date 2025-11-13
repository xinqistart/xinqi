import { aO as s } from "./index-DAdfXJ2i.js";
function a(t) {
  return s.request("get", "/mall/goodsspu/page", { params: t });
}
function o(t) {
  return s.request("post", "/mall/goodsspu", { data: t });
}
function r(t) {
  return s.request("get", "/mall/goodsspu/" + t);
}
function n(t) {
  return s.request("delete", "/mall/goodsspu/" + t);
}
function p(t) {
  return s.request("put", "/mall/goodsspu", { data: t });
}
function l(t) {
  return s.request("put", "/mall/goodsspu/shelf", { params: t });
}
function d(t) {
  return s.request("put", "/mall/goodsspu/verify", { params: t });
}
function i(t) {
  return s.request("get", "/mall/goodsspu/statistics", { params: t });
}
function g() {
  return s.request("post", "/mall/goodsspu/esinit");
}
function m(t) {
  return 0 < t.length ? s.request("post", "/mall/goodsspu/listbyids", { data: t }) : new Promise((e) => {
    e({ data: { data: [] } });
  });
}
function f(t) {
  return s.request("post", "/mall/goodsspu/batch", { data: t });
}
export {
  o as a,
  r as b,
  l as c,
  n as d,
  g as e,
  d as f,
  a as g,
  m as h,
  f as i,
  i as j,
  p
};
