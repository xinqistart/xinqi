import { aO as r } from "./index-DAdfXJ2i.js";
function u(e) {
  return r.request("get", "/mall/orderitem/" + e);
}
function a(e) {
  return r.request("get", "/mall/orderrefunds/page", { params: e });
}
function d(e) {
  return r.request("post", "/mall/orderrefunds", { data: e });
}
function n(e) {
  return r.request("delete", "/mall/orderrefunds/" + e);
}
function s(e) {
  return r.request("put", "/mall/orderrefunds", { data: e });
}
function o(e) {
  return r.request("put", "/mall/orderrefunds/doOrderRefunds", { data: e });
}
export {
  d as a,
  n as b,
  a as c,
  o as d,
  u as g,
  s as p
};
