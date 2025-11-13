import { aO as t } from "./index-DAdfXJ2i.js";
function s(e) {
  return t.request("get", "/upms/user/page", { params: e });
}
function r(e) {
  return t.request("get", "/upms/user/count", { params: e });
}
function n(e) {
  return t.request("post", "/upms/user", { data: e });
}
function a(e) {
  return t.request("get", "/upms/user/" + e);
}
function p(e) {
  return t.request("delete", "/upms/user/" + e);
}
function o(e) {
  return t.request("put", "/upms/user", { data: e });
}
function d(e) {
  return t.request("put", "/upms/user/password", { data: e });
}
function i(e) {
  return t.request("put", "/upms/user/edit", { data: e });
}
function m(e) {
  return t.request("put", "/upms/user/phone", { data: e });
}
export {
  a,
  m as b,
  n as c,
  p as d,
  i as e,
  s as f,
  r as g,
  d as h,
  o as p
};
