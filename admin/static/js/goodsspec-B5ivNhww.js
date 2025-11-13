import { aO as t } from "./index-DAdfXJ2i.js";
function a(e) {
  return t.request("get", "/mall/goodsspec/page", { params: e });
}
function r(e) {
  return t.request("get", "/mall/goodsspec/list", { params: e });
}
function o(e) {
  return t.request("post", "/mall/goodsspec", { data: e });
}
function u(e) {
  return t.request("delete", "/mall/goodsspec/" + e);
}
function n(e) {
  return t.request("put", "/mall/goodsspec", { data: e });
}
export {
  o as a,
  a as b,
  u as d,
  r as g,
  n as p
};
