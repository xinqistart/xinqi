import { aO as e } from "./index-DAdfXJ2i.js";
function r(t) {
  return e.request("get", "/upms/dict/page", { params: t });
}
function s(t) {
  return e.request("post", "/upms/dict/", { data: t });
}
function a(t) {
  return e.request("delete", "/upms/dict/" + t.id);
}
function n(t) {
  return e.request("put", "/upms/dict/", { data: t });
}
function i(t) {
  return e.request("get", "/upms/dict/item/page", { params: t });
}
function p(t) {
  return e.request("post", "/upms/dict/item", { data: t });
}
function d(t) {
  return e.request("delete", "/upms/dict/item/" + t);
}
function c(t) {
  return e.request("put", "/upms/dict/item", { data: t });
}
function m(t) {
  return e.request("get", "/upms/dict/type/" + t);
}
export {
  p as a,
  a as b,
  s as c,
  d,
  n as e,
  r as f,
  i as g,
  c as p,
  m as r
};
