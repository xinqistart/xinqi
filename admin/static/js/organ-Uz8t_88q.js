import { aO as e } from "./index-DAdfXJ2i.js";
function a(t) {
  return e.request("get", "/upms/organ/tree", { params: t });
}
function u(t) {
  return e.request("get", "/upms/organ/list", { params: t });
}
function s(t) {
  return e.request("post", "/upms/organ", { data: t });
}
function n(t) {
  return e.request("delete", "/upms/organ/" + t);
}
function o(t) {
  return e.request("put", "/upms/organ", { data: t });
}
export {
  s as a,
  n as d,
  a as f,
  u as g,
  o as p
};
