import { A as L, R as b, be as m, t as v, cM as w, S as y, _ as h, r as p, j as x, c as d, o, b as k, h as u, w as f, g, f as $, z as I, a_ as A } from "./index-DAdfXJ2i.js";
import { p as C, z as B } from "./wxapp-DzjQ_kFh.js";
const P = { props: { wxApp: { type: Object } }, components: {}, setup(t) {
  const { proxy: s } = L(), e = b({ headers: { Authorization: "Bearer " + m().access_token }, liveInfo: null, tableLoading: false, enbleLive: false });
  v(() => {
    a();
  });
  function a() {
    e.tableLoading = true, C(t.wxApp.id, { action: "list" }).then((n) => {
      n.data.plugin_list.forEach(function(l) {
        if (l.appid == w) {
          e.enbleLive = true;
          return;
        }
      }), e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function c() {
    e.tableLoading = true, B(t.wxApp.id, { action: "apply" }).then((n) => {
      n.data.errcode == 0 && (s.$message({ message: s.$t("wxma.wxapp.appInitSuccess"), type: "success" }), a()), e.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  return { ...y(e), getPluginListF: a, applyLiveInfoF: c };
} };
function z(t, s, e, a, c, n) {
  const i = p("el-alert"), l = p("el-button"), _ = A, r = x("loading");
  return o(), d("div", null, [k(_, null, { default: u(() => [f((o(), d("div", null, [t.enbleLive == true ? (o(), g(i, { key: 0, title: t.$t("wxma.wxapp.opened"), type: "success", closable: false }, null, 8, ["title"])) : f((o(), g(l, { key: 1, type: "warning", onClick: a.applyLiveInfoF }, { default: u(() => [$(I(t.$t("wxma.wxapp.apply")), 1)]), _: 1 }, 8, ["onClick"])), [[r, t.tableLoading]])])), [[r, t.tableLoading]])]), _: 1 })]);
}
const S = h(P, [["render", z]]);
export {
  S as default
};
