import { aO as t } from "./index-DAdfXJ2i.js";
function u() {
  return t.request("get", "/mall/supplier/list", {});
}
function a(e) {
  return t.request("get", "/mall/supplier/page", { params: e });
}
function s(e) {
  return t.request("post", "/mall/supplier", { data: e });
}
function l(e) {
  return t.request("get", "/mall/supplier/" + e);
}
function p(e) {
  return t.request("delete", "/mall/supplier/" + e);
}
function n(e) {
  return t.request("put", "/mall/supplier", { data: e });
}
function i(e) {
  return t.request("get", "/mall/supplier/count", { params: e });
}
export {
  u as a,
  i as b,
  s as c,
  p as d,
  a as e,
  l as g,
  n as p
};
