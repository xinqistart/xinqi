import { aO as t } from "./index-DAdfXJ2i.js";
function s(e) {
  return t.request("get", "/mall/goodsspecvalue/page", { params: e });
}
function u(e) {
  return t.request("get", "/mall/goodsspecvalue/list", { params: e });
}
function r(e) {
  return t.request("post", "/mall/goodsspecvalue", { data: e });
}
function o(e) {
  return t.request("delete", "/mall/goodsspecvalue/" + e);
}
function l(e) {
  return t.request("put", "/mall/goodsspecvalue", { data: e });
}
export {
  r as a,
  s as b,
  o as d,
  u as g,
  l as p
};
