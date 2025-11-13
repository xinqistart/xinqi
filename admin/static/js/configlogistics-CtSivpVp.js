import { aO as t } from "./index-DAdfXJ2i.js";
function o() {
  return t.request("get", "/mall/configlogistics/logisticscompany");
}
function e(i) {
  return t.request("put", "/mall/configlogistics", { data: i });
}
function n() {
  return t.request("get", "/mall/configlogistics");
}
export {
  n as a,
  o as g,
  e as p
};
