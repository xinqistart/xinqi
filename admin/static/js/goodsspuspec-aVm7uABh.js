import { aO as t } from "./index-DAdfXJ2i.js";
function a(e) {
  return t.request("get", "/mall/goodsspuspec/page", { params: e });
}
function r(e) {
  return t.request("get", "/mall/goodsspuspec/tree", { params: e });
}
function u(e) {
  return t.request("post", "/mall/goodsspuspec", { data: e });
}
function p(e) {
  return t.request("delete", "/mall/goodsspuspec/" + e);
}
function o(e) {
  return t.request("put", "/mall/goodsspuspec", { data: e });
}
export {
  u as a,
  p as d,
  r as f,
  a as g,
  o as p
};
