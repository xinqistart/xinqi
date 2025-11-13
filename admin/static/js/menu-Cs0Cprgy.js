import { aO as t } from "./index-DAdfXJ2i.js";
function r(e) {
  return t.request("get", "/upms/menu/all/tree", { params: e });
}
function n(e) {
  return t.request("get", "/upms/menu/tree", { params: e });
}
function s(e) {
  return t.request("post", "/upms/menu", { data: e });
}
function a(e) {
  return t.request("delete", "/upms/menu/" + e);
}
function m(e) {
  return t.request("put", "/upms/menu", { data: e });
}
export {
  s as a,
  r as b,
  a as d,
  n as f,
  m as p
};
