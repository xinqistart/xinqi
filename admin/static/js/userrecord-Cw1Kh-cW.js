import { aO as r } from "./index-DAdfXJ2i.js";
function a(e) {
  return r.request("get", "/mall/userrecord/page", { params: e });
}
function u(e) {
  return r.request("post", "/mall/userrecord", { data: e });
}
function s(e) {
  return r.request("get", "/mall/userrecord/" + e);
}
function n(e) {
  return r.request("delete", "/mall/userrecord/" + e);
}
function o(e) {
  return r.request("put", "/mall/userrecord", { data: e });
}
export {
  u as a,
  a as b,
  n as d,
  s as g,
  o as p
};
