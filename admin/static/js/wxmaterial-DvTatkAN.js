import { aO as t } from "./index-DAdfXJ2i.js";
function r(e) {
  return t.request("get", "/weixin/wxmaterial/page", { params: e });
}
function i(e) {
  return t.request("delete", "/weixin/wxmaterial", { params: e });
}
function n(e) {
  return t.request("get", "/weixin/wxmaterial/materialOther", { params: e, responseType: "blob" });
}
function s(e) {
  return t.request("get", "/weixin/wxmaterial/materialVideo", { params: e });
}
function m(e) {
  return t.request("get", "/weixin/wxmaterial/tempMaterialOther", { params: e, responseType: "blob" });
}
export {
  m as a,
  r as b,
  s as c,
  i as d,
  n as g
};
