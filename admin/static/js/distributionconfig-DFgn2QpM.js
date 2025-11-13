import { aO as e } from "./index-DAdfXJ2i.js";
function n(t) {
  return e.request("get", "/mall/distributionconfig/page", { params: t });
}
function r(t) {
  return e.request("post", "/mall/distributionconfig", { data: t });
}
function a(t) {
  return e.request("delete", "/mall/distributionconfig/" + t);
}
function u(t) {
  return e.request("put", "/mall/distributionconfig", { data: t });
}
function o() {
  return e.request("get", "/mall/distributionconfig");
}
export {
  r as a,
  n as b,
  a as d,
  o as g,
  u as p
};
