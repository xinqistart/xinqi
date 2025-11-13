import { aO as e } from "./index-DAdfXJ2i.js";
function r(t) {
  return e.request("get", "/weixin/wxusertags/list", { params: t });
}
function a(t) {
  return e.request("post", "/weixin/wxusertags", { data: t });
}
function u(t) {
  return e.request("put", "/weixin/wxusertags", { data: t });
}
function n(t) {
  return e.request("delete", "/weixin/wxusertags", { params: t });
}
export {
  a,
  n as d,
  r as g,
  u as p
};
