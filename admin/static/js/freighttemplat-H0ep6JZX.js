import { aO as e } from "./index-DAdfXJ2i.js";
function r(t) {
  return e.request("get", "/mall/freighttemplat/list", { params: t });
}
function l(t) {
  return e.request("get", "/mall/freighttemplat/page", { params: t });
}
function u(t) {
  return e.request("post", "/mall/freighttemplat", { data: t });
}
function n(t) {
  return e.request("get", "/mall/freighttemplat/" + t);
}
function s(t) {
  return e.request("delete", "/mall/freighttemplat/" + t);
}
function m(t) {
  return e.request("put", "/mall/freighttemplat", { data: t });
}
export {
  n as a,
  u as b,
  l as c,
  s as d,
  r as g,
  m as p
};
