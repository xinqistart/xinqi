import { aO as t } from "./index-DAdfXJ2i.js";
function n(e) {
  return t.request("get", "/upms/tenantpackagemenu/page", { params: e });
}
function u(e) {
  return t.request("post", "/upms/tenantpackagemenu", { data: e });
}
function p(e) {
  return t.request("get", "/upms/tenantpackagemenu/" + e);
}
function r(e) {
  return t.request("delete", "/upms/tenantpackagemenu/" + e);
}
function s(e) {
  return t.request("put", "/upms/tenantpackagemenu", { data: e });
}
export {
  u as a,
  n as b,
  r as d,
  p as g,
  s as p
};
