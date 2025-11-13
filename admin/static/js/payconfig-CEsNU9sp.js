import { aO as e } from "./index-DAdfXJ2i.js";
function p(t) {
  return e.request("get", "/pay/payconfig/page", { params: t });
}
function n(t) {
  return e.request("post", "/pay/payconfig", { data: t });
}
function r(t) {
  return e.request("delete", "/pay/payconfig/" + t);
}
function u(t) {
  return e.request("put", "/pay/payconfig", { data: t });
}
function o(t) {
  return e.request("get", "/pay/payconfig/bytype/" + t);
}
export {
  n as a,
  p as b,
  r as d,
  o as g,
  u as p
};
