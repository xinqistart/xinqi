import { aO as t, n, b6 as m, br as o } from "./index-DAdfXJ2i.js";
import { c } from "./clientType-BhCLU4J5.js";
function r(e) {
  return t.request("get", "/upms/pagedevisetemplate/page", { params: e });
}
function l(e) {
  return t.request("post", "/upms/pagedevisetemplate", { data: e });
}
function b(e) {
  return t.request("delete", "/upms/pagedevisetemplate/" + e);
}
function d(e) {
  return t.request("put", "/upms/pagedevisetemplate", { data: e });
}
const { $t: a } = n();
var u = ((e) => (e.mobile = "mobile", e.pc = "pc", e))(u || {});
const f = [{ label: a("commons.mallPort1"), value: "mobile" }, { label: a("commons.mallPort2"), value: "pc" }];
function T(e) {
  m.confirm("\u786E\u5B9A\u8981\u4E0A\u4F20\u5230\u6A21\u677F\u5E93\u5417?", a("commons.tip"), { confirmButtonText: a("commons.confirm"), cancelButtonText: a("commons.cancel"), type: "warning" }).then(() => {
    let s = e.clientType != c.H5PC ? "mobile" : "pc", p = { pageType: e.pageType, pageName: e.pageName, pageComponent: e.pageComponent, clientType: s, pageImg: e.pageImg, pageDesc: e.pageDesc };
    l(p).then(() => {
      o({ type: "success", message: a("commons.uploadSuccess") });
    });
  }).catch(() => {
  });
}
export {
  u as T,
  f as a,
  l as b,
  b as d,
  r as g,
  d as p,
  T as u
};
