import { aO as e } from "./index-DAdfXJ2i.js";
function n(t) {
  return e.request("get", "/upms/tenantpackage/page", { params: t });
}
function u(t) {
  return e.request("post", "/upms/tenantpackage", { data: t });
}
function p(t) {
  return e.request("delete", "/upms/tenantpackage/" + t);
}
function r(t) {
  return e.request("put", "/upms/tenantpackage", { data: t });
}
function s() {
  return e.request("get", "/upms/tenantpackage/tenant/");
}
export {
  s as a,
  u as b,
  p as d,
  n as g,
  r as p
};
