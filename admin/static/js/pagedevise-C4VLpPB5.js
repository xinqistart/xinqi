import { aO as t } from "./index-DAdfXJ2i.js";
function r(e) {
  return t.request("get", "/mall/pagedevise/page", { params: e });
}
function s(e) {
  return t.request("post", "/mall/pagedevise", { data: e });
}
function u(e) {
  return t.request("get", "/mall/pagedevise/" + e);
}
function n(e) {
  return t.request("delete", "/mall/pagedevise/" + e);
}
function p(e) {
  return t.request("put", "/mall/pagedevise", { data: e });
}
export {
  s as a,
  u as b,
  n as d,
  r as g,
  p
};
