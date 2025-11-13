import { aO as t } from "./index-DAdfXJ2i.js";
function a(s) {
  return t.request("get", "/mall/largescreen/statistics", { params: s });
}
function r(s) {
  return t.request("get", "/mall/largescreen/statistics/ordercount", { params: s });
}
function n(s) {
  return t.request("get", "/mall/largescreen/statistics/saleamount", { params: s });
}
function u(s) {
  return t.request("get", "/mall/largescreen/statistics/spusale", { params: s });
}
export {
  n as a,
  u as b,
  r as o,
  a as s
};
