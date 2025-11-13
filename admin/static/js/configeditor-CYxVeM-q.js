import { aO as e } from "./index-DAdfXJ2i.js";
function u(t) {
  return e.request("get", "/upms/configeditor/page", { params: t });
}
function a(t) {
  return e.request("put", "/upms/configeditor", { data: t });
}
function n() {
  return e.request("get", "/upms/configeditor");
}
export {
  u as a,
  n as g,
  a as p
};
