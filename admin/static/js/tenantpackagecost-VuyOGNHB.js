import { aO as e } from "./index-DAdfXJ2i.js";
function n(t) {
  return e.request("get", "/upms/tenantpackagecost/page", { params: t });
}
function s(t) {
  return e.request("post", "/upms/tenantpackagecost", { data: t });
}
function u(t) {
  return e.request("delete", "/upms/tenantpackagecost/" + t);
}
function p(t) {
  return e.request("put", "/upms/tenantpackagecost", { data: t });
}
export {
  s as a,
  u as d,
  n as g,
  p
};
