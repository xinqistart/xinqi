import { A as E, R as O, be as F, t as J, aA as Q, S as U, cM as j, cN as q, cO as H, _ as Y, r as C, c as D, o as r, b as s, h as l, g as m, B as c, f as w, z as p, F as G, v as W, e as b, a_ as K } from "./index-DAdfXJ2i.js";
import { k as X, l as Z, m as ee, n as ae, o as te, p as ne, r as le, q as oe, u as se, t as ie, v as de, w as re, x as ue, y as pe } from "./wxapp-DzjQ_kFh.js";
const me = { props: { wxApp: { type: Object } }, setup(e) {
  const { proxy: a } = E(), t = O({ headers: { Authorization: "Bearer " + F().access_token }, listCodeTemplate: [], codeAudit: {}, maPages: null, tableLoading: false });
  J(() => {
    d();
  });
  function d() {
    t.codeAudit = {}, t.listCodeTemplate = [], t.tableLoading = true, f(), v(), M();
  }
  function R(n) {
    a.$confirm(a.$t("wxma.wxapp.confirmSubmitForReview"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      P(n);
    });
  }
  function P(n) {
    t.tableLoading = true, re().then((u) => {
      ue({ appId: e.wxApp.id }).then((x) => {
        const $ = u.data.published_wxa_server_domain, h = x.data, V = h.requestDomain, _ = h.downloadDomain, I = h.uploadDomain, N = $.split(";");
        let B = false;
        N.forEach((T) => {
          V.findIndex((z) => z === "https://" + T) === -1 && (B = true, V.push("https://" + T), _.push("https://" + T), I.push("https://" + T));
        }), B ? pe(Object.assign(h, { appId: e.wxApp.id })).then(() => {
          t.tableLoading = false, i(n);
        }).catch(() => {
          t.tableLoading = false;
        }) : i(n);
      }).catch(() => {
        t.tableLoading = false;
      });
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function i(n) {
    t.tableLoading = true, de(Object.assign({ appId: e.wxApp.id }, H)).then(() => {
      A(n);
    });
  }
  function A(n) {
    ie({ appId: e.wxApp.id, codeVersion: n }).then(() => {
      t.tableLoading = false, a.$message({ showClose: true, message: a.$t("wxma.wxapp.submitReviewSuccess"), type: "success" }), d();
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function g() {
    a.$confirm(a.$t("wxma.wxapp.dailyAuditWithdrawLimit"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      t.tableLoading = true, se(e.wxApp.id).then(() => {
        t.tableLoading = false, a.$message({ showClose: true, message: a.$t("wxma.wxapp.auditWithdrawSuccess"), type: "success" }), d();
      }).catch(() => {
        t.tableLoading = false;
      });
    });
  }
  function y(n) {
    oe(e.wxApp.id, n).then((u) => {
      const x = u.data;
      a.$alert('<img style="width: 100%" src="data:image/jpg;base64,' + x + '" />', a.$t("wxma.wxapp.screenshotExample"), { dangerouslyUseHTMLString: true });
    });
  }
  function k(n) {
    a.$confirm(a.$t("wxma.wxapp.confirmReleaseVersion"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      t.tableLoading = true, le(e.wxApp.id, n).then(() => {
        t.tableLoading = false, a.$message({ showClose: true, message: a.$t("wxma.wxapp.releaseSuccess"), type: "success" }), d();
      }).catch(() => {
        d(), t.tableLoading = false;
      });
    });
  }
  function L(n) {
    n.extJson = { extEnable: false }, ne(e.wxApp.id, { action: "list" }).then((u) => {
      const x = u.data.plugin_list;
      let $ = false;
      x.forEach(function(h) {
        if (h.appid == j) {
          $ = true;
          return;
        }
      }), $ && (n.extJson = { extEnable: true, plugins: { "live-player-plugin": { version: q, provider: j } } }), S(n);
    });
  }
  function S(n) {
    n.extJson = JSON.stringify(n.extJson), t.tableLoading = true, te(Object.assign(n, { appId: e.wxApp.id })).then(() => {
      t.tableLoading = false, a.$message({ showClose: true, message: a.$t("wxma.wxapp.codeUploadSuccess"), type: "success" }), d();
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function o() {
    t.tableLoading = true, ae(e.wxApp.id).then((n) => {
      t.tableLoading = false;
      const u = n.data;
      a.$alert('<img style="width: 100%" src="data:image/jpg;base64,' + u + '" />', a.$t("wxma.wxapp.betaQRCode"), { dangerouslyUseHTMLString: true, confirmButtonText: a.$t("commons.confirm") });
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function f() {
    X(e.wxApp.id).then((n) => {
      t.tableLoading = false, t.maPages = n.data;
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function v() {
    Z().then((n) => {
      t.tableLoading = false;
      let u = n.data || [];
      u.sort(function(x, $) {
        return $.createTime - x.createTime;
      }), t.listCodeTemplate = u;
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function M() {
    ee(e.wxApp.id).then((n) => {
      t.tableLoading = false;
      const u = n.data;
      t.codeAudit = Object.assign(u.wxMaCodeAuditStatus, u.wxMaCodeAudit);
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  return { ...U(t), dayjs: Q, getCodeView: d, submitCode: R, serverAddressDo: P, privacySettingDo: i, submitCodeDo: A, undoCodeAudit: g, getScreenShot: y, releaseCode: k, commitCode: L, commitCodePost: S, getQrCodeF: o, getMaPage: f, getCodeTemplateList: v, getLatestAuditstatus: M };
} }, ce = { key: 0 };
function we(e, a, t, d, R, P) {
  const i = C("el-table-column"), A = C("el-link"), g = C("el-button"), y = C("el-table"), k = C("el-alert"), L = C("el-card"), S = K;
  return r(), D("div", null, [s(S, null, { default: l(() => [s(L, { class: "box-card" }, { header: l(() => [b("div", null, [b("span", null, p(e.$t("wxma.wxapp.reviewVersion")), 1)])]), default: l(() => [e.codeAudit.status != null ? (r(), m(y, { key: 0, data: [e.codeAudit], border: "", style: { width: "100%" } }, { default: l(() => [s(i, { align: "center", prop: "codeVersion", label: e.$t("wxma.wxapp.versionNumber") }, null, 8, ["label"]), s(i, { align: "center", prop: "createTime", label: e.$t("wxma.wxapp.submissionTime") }, null, 8, ["label"]), s(i, { align: "center", prop: "auditId", label: e.$t("wxma.wxapp.reviewId") }, null, 8, ["label"]), s(i, { align: "center", prop: "status", label: e.$t("wxma.wxapp.reviewStatus") }, { default: l((o) => [w(p(o.row.status == 0 ? e.$t("wxma.wxapp.reviewSuccess") : o.row.status == 1 ? e.$t("wxma.wxapp.reviewRejected") : o.row.status == 2 ? e.$t("wxma.wxapp.reviewing") : o.row.status == 3 ? e.$t("wxma.wxapp.withdrawn") : ""), 1)]), _: 1 }, 8, ["label"]), e.codeAudit.status == "1" ? (r(), m(i, { key: 0, align: "center", prop: "reason", label: e.$t("wxma.wxapp.rejectionReason") }, null, 8, ["label"])) : c("", true), e.codeAudit.status == "1" ? (r(), m(i, { key: 1, align: "center", prop: "screenShot", label: e.$t("wxma.wxapp.screenshotExample") }, { default: l((o) => [o.row.screenShot ? (r(), D("div", ce, [(r(true), D(G, null, W(o.row.screenShot.split("|"), (f, v) => (r(), m(A, { type: "primary", class: "el-icon-picture", key: v, style: { "margin-right": "10px" }, onClick: (M) => d.getScreenShot(f) }, { default: l(() => [w(p(e.$t("wxma.wxapp.screenshot")) + p(v + 1), 1)]), _: 2 }, 1032, ["onClick"]))), 128))])) : c("", true)]), _: 1 }, 8, ["label"])) : c("", true), s(i, { align: "center", label: e.$t("wxma.wxapp.operation") }, { default: l((o) => [o.row.status == 2 ? (r(), m(g, { key: 0, type: "info", size: "small", onClick: a[0] || (a[0] = (f) => d.undoCodeAudit()), loading: e.tableLoading }, { default: l(() => [w(p(e.$t("wxma.wxapp.withdrawReview")), 1)]), _: 1 }, 8, ["loading"])) : c("", true), o.row.status == 0 && o.row.havRelease != "1" ? (r(), m(g, { key: 1, type: "success", size: "small", onClick: (f) => d.releaseCode(o.row.id), loading: e.tableLoading }, { default: l(() => [w(p(e.$t("wxma.wxapp.releaseVersion")), 1)]), _: 1 }, 8, ["onClick", "loading"])) : c("", true), o.row.status == 0 && o.row.havRelease == "1" ? (r(), m(g, { key: 2, type: "info", size: "small" }, { default: l(() => [w(p(e.$t("wxma.wxapp.published")), 1)]), _: 1 })) : c("", true)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"])) : c("", true), e.codeAudit.status == null ? (r(), m(k, { key: 1, title: e.$t("wxma.wxapp.noVersionToReview"), type: "info", closable: false }, null, 8, ["title"])) : c("", true)]), _: 1 }), e.maPages ? (r(), m(L, { key: 0, class: "box-card" }, { header: l(() => [b("div", null, [b("span", null, p(e.$t("wxma.wxapp.codeUploaded")), 1)])]), default: l(() => [e.maPages.wxMaCodeCommit ? (r(), m(y, { key: 0, data: [e.maPages.wxMaCodeCommit], border: "", style: { width: "100%" } }, { default: l(() => [s(i, { prop: "codeVersion", align: "center", label: e.$t("wxma.wxapp.versionNumber") }, null, 8, ["label"]), s(i, { prop: "createTime", align: "center", label: e.$t("wxma.wxapp.uploadTime") }, null, 8, ["label"]), s(i, { align: "center", label: e.$t("wxma.wxapp.operation") }, { default: l(() => [s(g, { size: "small", onClick: d.getQrCodeF, loading: e.tableLoading }, { default: l(() => [w(p(e.$t("wxma.wxapp.betaQRCode")), 1)]), _: 1 }, 8, ["onClick", "loading"]), a[2] || (a[2] = b("br", null, null, -1)), a[3] || (a[3] = b("br", null, null, -1)), s(g, { onClick: a[1] || (a[1] = (o) => d.submitCode(e.maPages.wxMaCodeCommit.codeVersion)), type: "success", size: "small", loading: e.tableLoading }, { default: l(() => [w(p(e.$t("wxma.wxapp.submitForReview")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"])) : c("", true), e.maPages.wxMaCodeCommit == null ? (r(), m(k, { key: 1, title: e.$t("wxma.wxapp.noCodeUploaded"), type: "info", closable: false }, null, 8, ["title"])) : c("", true)]), _: 1 })) : c("", true), s(L, { class: "box-card" }, { header: l(() => [b("div", null, [b("span", null, p(e.$t("wxma.wxapp.templateLibrary")), 1)])]), default: l(() => [s(y, { data: e.listCodeTemplate, border: "", style: { width: "100%" } }, { default: l(() => [s(i, { align: "center", prop: "userVersion", label: e.$t("wxma.wxapp.templateVersionNumber") }, null, 8, ["label"]), s(i, { align: "center", prop: "createTime", label: e.$t("wxma.wxapp.additionTime") }, { default: l((o) => [w(p(d.dayjs(o.row.createTime * 1e3).format("YYYY-MM-DD HH:mm:ss")), 1)]), _: 1 }, 8, ["label"]), s(i, { align: "center", prop: "userDesc", label: e.$t("wxma.wxapp.templateDescription") }, null, 8, ["label"]), s(i, { align: "center", label: e.$t("wxma.wxapp.operation") }, { default: l((o) => [s(g, { onClick: (f) => d.commitCode(o.row), type: "success", size: "small", loading: e.tableLoading }, { default: l(() => [w(p(e.$t("wxma.wxapp.uploadCode")), 1)]), _: 1 }, 8, ["onClick", "loading"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"])]), _: 1 })]), _: 1 })]);
}
const fe = Y(me, [["render", we]]);
export {
  fe as default
};
