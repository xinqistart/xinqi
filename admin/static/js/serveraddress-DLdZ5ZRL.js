import { A as b, R as $, be as V, t as h, S as x, _ as q, r, j as y, c as L, o as D, w as S, g as k, h as s, b as a, e as R, f as u, z as m, a_ as B } from "./index-DAdfXJ2i.js";
import { x as C, y as U } from "./wxapp-DzjQ_kFh.js";
const N = { props: { wxApp: { type: Object } }, components: {}, setup(e) {
  const { proxy: o } = b(), t = $({ headers: { Authorization: "Bearer " + V().access_token }, tableLoading: false, serverAddress: { requestDomain: [], wsRequestDomain: [], uploadDomain: [], downloadDomain: [] } });
  h(() => {
    p();
  });
  function p() {
    t.tableLoading = true, C({ appId: e.wxApp.id }).then((v) => {
      t.tableLoading = false;
      const n = v.data;
      n.downloadDomain.length <= 0 && (n.downloadDomain = [""]), n.requestDomain.length <= 0 && (n.requestDomain = [""]), n.uploadDomain.length <= 0 && (n.uploadDomain = [""]), n.wsRequestDomain.length <= 0 && (n.wsRequestDomain = [""]), t.serverAddress = n;
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function f() {
    t.tableLoading = true, U(Object.assign(t.serverAddress, { appId: e.wxApp.id })).then(() => {
      t.tableLoading = false, o.$message({ showClose: true, message: o.$t("wxma.wxapp.setupSuccess"), type: "success" }), p();
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  return { ...x(t), serverAddressGetF: p, serverAddressSetF: f };
} }, j = { style: { "text-align": "center" } };
function F(e, o, t, p, f, v) {
  const n = r("el-alert"), i = r("el-divider"), l = r("el-col"), w = r("avue-array"), c = r("el-row"), g = r("el-button"), A = B, _ = y("loading");
  return D(), L("div", null, [S((D(), k(A, null, { default: s(() => [a(n, { title: e.$t("wxma.wxapp.maintenanceNote"), type: "warning", center: "", closable: false }, null, 8, ["title"]), a(i), a(c, { span: 24 }, { default: s(() => [a(l, { span: 6 }, { default: s(() => [u(m(e.$t("wxma.wxapp.requestDomain")), 1)]), _: 1 }), a(l, { span: 18 }, { default: s(() => [a(w, { modelValue: e.serverAddress.requestDomain, "onUpdate:modelValue": o[0] || (o[0] = (d) => e.serverAddress.requestDomain = d), placeholder: e.$t("wxma.wxapp.enterRequest") }, null, 8, ["modelValue", "placeholder"])]), _: 1 })]), _: 1 }), a(i), a(c, { span: 24 }, { default: s(() => [a(l, { span: 6 }, { default: s(() => [u(m(e.$t("wxma.wxapp.socketDomain")), 1)]), _: 1 }), a(l, { span: 18 }, { default: s(() => [a(w, { modelValue: e.serverAddress.wsRequestDomain, "onUpdate:modelValue": o[1] || (o[1] = (d) => e.serverAddress.wsRequestDomain = d), placeholder: e.$t("wxma.wxapp.enterSocket") }, null, 8, ["modelValue", "placeholder"])]), _: 1 })]), _: 1 }), a(i), a(c, { span: 24 }, { default: s(() => [a(l, { span: 6 }, { default: s(() => [u(m(e.$t("wxma.wxapp.uploadDomain")), 1)]), _: 1 }), a(l, { span: 18 }, { default: s(() => [a(w, { modelValue: e.serverAddress.uploadDomain, "onUpdate:modelValue": o[2] || (o[2] = (d) => e.serverAddress.uploadDomain = d), placeholder: e.$t("wxma.wxapp.enterUpload") }, null, 8, ["modelValue", "placeholder"])]), _: 1 })]), _: 1 }), a(i), a(c, { span: 24 }, { default: s(() => [a(l, { span: 6 }, { default: s(() => [u(m(e.$t("wxma.wxapp.downloadDomain")), 1)]), _: 1 }), a(l, { span: 18 }, { default: s(() => [a(w, { modelValue: e.serverAddress.downloadDomain, "onUpdate:modelValue": o[3] || (o[3] = (d) => e.serverAddress.downloadDomain = d), placeholder: e.$t("wxma.wxapp.enterDownload") }, null, 8, ["modelValue", "placeholder"])]), _: 1 })]), _: 1 }), a(i), R("div", j, [a(g, { onClick: o[4] || (o[4] = (d) => p.serverAddressSetF()), type: "success", loading: e.tableLoading }, { default: s(() => [u(m(e.$t("wxma.wxapp.confirmSubmit")), 1)]), _: 1 }, 8, ["loading"])])]), _: 1 })), [[_, e.tableLoading]])]);
}
const G = q(N, [["render", F]]);
export {
  G as default
};
