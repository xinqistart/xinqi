import { aO as t } from "./index-DAdfXJ2i.js";
function r(e) {
  return t.request("get", "/mall/goodscategory/page", { params: e });
}
function o(e) {
  return t.request("get", "/mall/goodscategory/tree", { params: e });
}
function s(e) {
  return t.request("post", "/mall/goodscategory", { data: e });
}
function u(e) {
  return t.request("delete", "/mall/goodscategory/" + e);
}
function g(e) {
  return t.request("put", "/mall/goodscategory", { data: e });
}
export {
  s as a,
  u as d,
  o as f,
  r as g,
  g as p
};
