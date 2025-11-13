import { aO as a } from "./index-DAdfXJ2i.js";
function r(e) {
  return a.request("get", "/mall/userbalance/page", { params: e });
}
function u(e) {
  return a.request("post", "/mall/userbalance", { data: e });
}
function n(e) {
  return a.request("delete", "/mall/userbalance/" + e);
}
function s(e) {
  return a.request("put", "/mall/userbalance", { data: e });
}
function l(e) {
  return a.request("get", "/mall/userbalance/" + e);
}
export {
  u as a,
  r as b,
  n as d,
  l as g,
  s as p
};
