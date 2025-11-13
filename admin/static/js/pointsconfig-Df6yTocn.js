import { aO as e } from "./index-DAdfXJ2i.js";
function a(t) {
  return e.request("get", "/mall/pointsconfig/page", { params: t });
}
function o(t) {
  return e.request("post", "/mall/pointsconfig", { data: t });
}
function r(t) {
  return e.request("delete", "/mall/pointsconfig/" + t);
}
function s(t) {
  return e.request("put", "/mall/pointsconfig", { data: t });
}
function u() {
  return e.request("get", "/mall/pointsconfig");
}
export {
  o as a,
  a as b,
  r as d,
  u as g,
  s as p
};
