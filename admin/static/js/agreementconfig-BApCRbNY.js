import { aO as t } from "./index-DAdfXJ2i.js";
function n(e) {
  return t.request("get", "/upms/agreementconfig/page", { params: e });
}
function a(e) {
  return t.request("post", "/upms/agreementconfig", { data: e });
}
function u(e) {
  return t.request("delete", "/upms/agreementconfig/" + e);
}
function s(e) {
  return t.request("put", "/upms/agreementconfig", { data: e });
}
function g(e) {
  return t.request("get", "/upms/agreementconfig/type/" + e, {}, { isPlatform: true });
}
export {
  a,
  n as b,
  u as d,
  g,
  s as p
};
