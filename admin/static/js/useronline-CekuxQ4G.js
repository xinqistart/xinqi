import { aO as t } from "./index-DAdfXJ2i.js";
function o(e) {
  return t.request("get", "/mall/useronline/count/" + e);
}
function u(e, n) {
  return t.request("get", `/mall/useronline/score/${e}/` + n);
}
export {
  o as a,
  u as g
};
