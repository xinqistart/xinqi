import { aO as e } from "./index-DAdfXJ2i.js";
function s(t) {
  return e.request("get", "/mall/shopdepositconfig/page", { params: t });
}
function a(t) {
  return e.request("post", "/mall/shopdepositconfig", { data: t });
}
function n(t) {
  return e.request("delete", "/mall/shopdepositconfig/" + t);
}
function p(t) {
  return e.request("put", "/mall/shopdepositconfig", { data: t });
}
function r() {
  return e.request("get", "/mall/shopdepositconfig");
}
export {
  a,
  s as b,
  n as d,
  r as g,
  p
};
