import { aO as e } from "./index-DAdfXJ2i.js";
function o(t) {
  return e.request("get", "/mall/couponinfo/page", { params: t });
}
function a(t) {
  return e.request("post", "/mall/couponinfo", { data: t });
}
function u(t) {
  return e.request("get", "/mall/couponinfo/" + t);
}
function r(t) {
  return e.request("delete", "/mall/couponinfo/" + t);
}
function p(t) {
  return e.request("put", "/mall/couponinfo", { data: t });
}
export {
  a,
  u as b,
  r as d,
  o as g,
  p
};
