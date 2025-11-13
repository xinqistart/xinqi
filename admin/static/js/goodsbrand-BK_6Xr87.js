import { aO as a } from "./index-DAdfXJ2i.js";
function r(t) {
  return a.request("get", "/mall/goodsbrand/page", { params: t });
}
function s(t) {
  return a.request("post", "/mall/goodsbrand", { data: t });
}
function n(t) {
  return a.request("delete", "/mall/goodsbrand/" + t);
}
function o(t) {
  return a.request("put", "/mall/goodsbrand", { data: t });
}
function d(t) {
  return a.request("get", "/mall/goodsbrand/list", { params: t });
}
export {
  s as a,
  r as b,
  n as d,
  d as g,
  o as p
};
