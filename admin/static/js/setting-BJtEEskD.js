import { aO as z, A as Z, R as H, be as J, p as U, t as K, S as X, _ as ee, r as w, j as ae, c as g, o as p, w as B, g as h, h as n, B as u, b as t, e as l, z as o, f, F as R, v as j, a_ as te } from "./index-DAdfXJ2i.js";
import { _ as G } from "./index-0HWMArnC.js";
import { _ as Y } from "./index-D9J23VQK.js";
import { a as ne, b as oe, c as ie, d as se, e as le, f as de, s as re, h as pe, i as ue, j as me } from "./wxapp-DzjQ_kFh.js";
import fe from "./index-Bshxa3s9.js";
import "./index-CVy61yge.js";
import "./vue-qr-Ee6k57BN.js";
function ce(e) {
  return z.request("get", "/weixin/wxmanicknameaudit/page", { params: e });
}
function ge(e) {
  return z.request("get", "/weixin/wxmanicknameaudit/nicknameaudit/" + e);
}
function we(e) {
  return z.request("get", "/weixin/wxmaicpfiling/" + e);
}
const ye = [{ value: 2, label: "\u5E73\u53F0\u5BA1\u6838\u4E2D" }, { value: 3, label: "\u5E73\u53F0\u5BA1\u6838\u9A73\u56DE" }, { value: 4, label: "\u7BA1\u5C40\u5BA1\u6838\u4E2D" }, { value: 5, label: "\u7BA1\u5C40\u5BA1\u6838\u9A73\u56DE" }, { value: 6, label: "\u5DF2\u5907\u6848" }, { value: 1024, label: "\u672A\u5907\u6848" }, { value: 1025, label: "\u672A\u5907\u6848 \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u4FE1\u606F\u672A\u586B" }, { value: 1026, label: "\u672A\u5907\u6848 \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u7C7B\u76EE\u672A\u586B" }, { value: 1027, label: "\u672A\u5907\u6848 \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u4FE1\u606F\u672A\u586B \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u7C7B\u76EE\u672A\u586B" }, { value: 1028, label: "\u672A\u5907\u6848 \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u672A\u8BA4\u8BC1" }, { value: 1029, label: "\u672A\u5907\u6848 \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u4FE1\u606F\u672A\u586B \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u672A\u8BA4\u8BC1" }, { value: 1030, label: "\u672A\u5907\u6848 \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u7C7B\u76EE\u672A\u586B \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u672A\u8BA4\u8BC1" }, { value: 1031, label: "\u672A\u5907\u6848 \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u4FE1\u606F\u672A\u586B \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u7C7B\u76EE\u672A\u586B \u5E76\u4E14 \u5C0F\u7A0B\u5E8F\u672A\u8BA4\u8BC1" }], he = { props: { wxApp: { type: Object } }, components: { wxMaMedia: Y, WxMaAuthAudit: fe, WxMaQrcodeDown: G }, setup(e) {
  const { proxy: a } = Z(), i = H({ headers: { Authorization: "Bearer " + J().access_token }, dialogWxMaAuth: false, basicInfo: null, loading: false, searchStatus: null, icpStatus: null, wxmaIcpStatusNote: null, dialogNickName: false, formNickName: { nickname: void 0, appId: void 0, idCard: void 0, license: void 0, namingOtherStuff1: void 0, namingOtherStuff2: void 0 }, rulesNickName: { nickname: [{ required: true, message: a.$t("wxma.wxapp.enterName"), trigger: "blur" }, { min: 2, max: 15, message: a.$t("wxma.wxapp.lengthNote"), trigger: "blur" }] }, loadingNickName: false, nickNameAudit: null, category: { categories: [], limit: void 0, quota: void 0, categoryLimit: void 0 }, dialogCategory: false, allCategorys: [], loadingCategory: false, propsCategory: { label: "name", value: "id" }, exterList: [], formCategory: { category: [], certicates: [] }, rulesCategory: { category: [{ required: true, message: a.$t("wxma.wxapp.enterName"), trigger: "blur" }] }, certicates: [], dialogWxMaQrCodeDown: false }), y = U(null);
  K(() => {
    $(), x(), I(), V();
  });
  function $() {
    i.loading = true, ne(e.wxApp.id).then((r) => {
      const m = r.data;
      i.basicInfo = m, i.loading = false;
    }).catch(() => {
      i.loading = false;
    });
  }
  function E() {
    i.nickNameAudit && i.nickNameAudit.length > 0 && i.nickNameAudit[0].ret == "1" ? a.$message({ showClose: true, message: a.$t("wxma.wxapp.nicknameUnderReview"), type: "error" }) : i.dialogNickName = true;
  }
  const d = U(null);
  function v() {
    d.value.validate((r) => {
      if (r) i.loadingNickName = true, i.formNickName.appId = e.wxApp.id, me(i.formNickName).then(() => {
        i.dialogNickName = false, $(), A(), a.$message({ showClose: true, message: a.$t("wxma.wxapp.successfulSubmission"), type: "success" });
      }).catch(() => {
        i.loadingNickName = false;
      });
      else return false;
    });
  }
  function N(r) {
    a.$prompt(a.$t("wxma.wxapp.introLengthNote"), a.$t("wxma.wxapp.modifyIntro"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), inputPattern: /[\S]/, inputErrorMessage: a.$t("wxma.wxapp.introNotEmpty") }).then(({ value: m }) => {
      r.signature = m, i.loading = true, ue(r).then(() => {
        $(), a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" });
      }).catch(() => {
        i.loading = false;
      });
    });
  }
  function C(r) {
    pe({ id: e.wxApp.id, logo: r }).then(() => {
      $(), a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      i.loading = false;
    });
  }
  function I() {
    i.loading = true, oe(e.wxApp.id).then((r) => {
      i.searchStatus = r.data.status, i.loading = false;
    }).catch(() => {
      i.loading = false;
    });
  }
  function V() {
    we(e.wxApp.id).then((r) => {
      var _a2;
      i.icpStatus = r.data.info, i.wxmaIcpStatusNote = (_a2 = ye.find((m) => m.value == i.icpStatus.status)) == null ? void 0 : _a2.label;
    });
  }
  function M(r) {
    a.$confirm(a.$t("wxma.wxapp.setupMiniProgram") + (r == 1 ? a.$t("wxma.wxapp.no") : "") + a.$t("wxma.wxapp.allowSearchNote1") + (r == 1 ? a.$t("wxma.wxapp.no") : "") + a.$t("wxma.wxapp.allowSearchNote2"), a.$t("commons.confirm") + (r == 1 ? a.$t("commons.close") : a.$t("commons.open")) + a.$t("wxma.wxapp.allowSearchPrompt"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(() => {
      i.loading = true, re({ id: e.wxApp.id, status: r }).then(() => {
        I();
      }).catch(() => {
        i.loading = false;
      });
    });
  }
  function A() {
    e.wxApp.isFastregist == "1" && ce({ currentPage: 1, pageSize: 1, descs: "create_time", appId: e.wxApp.id }).then((r) => {
      i.nickNameAudit = r.data.records, i.loading = false;
    }).catch(() => {
      i.loading = false;
    });
  }
  function F(r) {
    i.loading = true, ge(r).then(() => {
      A();
    }).catch(() => {
      i.loading = false;
    });
  }
  function x() {
    i.loading = true, ie(e.wxApp.id).then((r) => {
      const m = r.data;
      i.category = m, i.loading = false;
    }).catch(() => {
      i.loading = false;
    });
  }
  function W(r, m) {
    a.$confirm(a.$t("wxma.wxapp.deleteCategoryConfirm"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      i.loading = true, de(e.wxApp.id, r, m).then(() => {
        x(), a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), i.loading = false;
      }).catch(() => {
        i.loading = false;
      });
    });
  }
  function q() {
    i.dialogCategory = true, L();
  }
  function L() {
    i.loadingCategory = true, le(e.wxApp.id).then((r) => {
      const m = r.data.categories, s = [], k = /* @__PURE__ */ new Map();
      m.forEach(function(c) {
        c.level == 1 && s.push(c), c.level == 2 && (delete c.children, k.set(c.id, c));
      }), s.forEach(function(c) {
        const S = [];
        c.children.forEach(function(O) {
          k.has(O) && S.push(k.get(O));
        }), c.children = S;
      }), i.allCategorys = s, i.loadingCategory = false;
    }).catch(() => {
      i.loadingCategory = false;
    });
  }
  function _(r) {
    const m = r[0], s = r[1];
    let k = [];
    i.allCategorys.forEach(function(c) {
      c.id == m && (c.qualify.exter_list.length > 0 && k.push(c.qualify.exter_list), c.children.forEach(function(S) {
        S.id == s && S.qualify.exter_list.length > 0 && (k = [...k, ...S.qualify.exter_list]);
      }));
    }), i.exterList = k;
  }
  function Q(r, m) {
    const s = { key: r, value: m };
    i.certicates.forEach(function(k, c) {
      k.key == r && i.certicates.splice(c, 1);
    }), i.certicates.push(s);
  }
  const b = U(null);
  function D() {
    b.value.validate((r) => {
      if (r) {
        i.loadingCategory = true;
        const m = [{ first: i.formCategory.category[0], second: i.formCategory.category[1], certicates: i.certicates }];
        se(e.wxApp.id, m).then(() => {
          i.dialogCategory = false, i.loadingCategory = false, x(), a.$message({ showClose: true, message: a.$t("wxma.wxapp.successfulSubmission"), type: "success" });
        }).catch(() => {
          i.loadingCategory = false;
        });
      } else return false;
    });
  }
  function P() {
    i.dialogWxMaQrCodeDown = true;
  }
  function T() {
    i.dialogWxMaAuth = true;
  }
  return { ...X(i), formNickNameRef: d, formCategoryRef: b, getBasicInfoF: $, setNickNameView: E, setNickNameF: v, setSignatureF: N, uploadLogoSuccess: C, searchStatusGet: I, setSearchStatusF: M, getNicknameAuditF: A, updateNickNameAuditF: F, getCategoryF: x, delCategoryF: W, categoryView: q, getAllCategorysF: L, handleChangeCategory: _, wxMaMediaCategoryChange: Q, addCategoryF: D, getMaCode: P, dialogWxMaAuthShow: T, formName: y };
} }, ke = { key: 0 }, ve = { class: "clearfix" }, Ce = { class: "meta_name" }, xe = { class: "meta_content" }, _e = { class: "meta_name" }, Ne = { class: "meta_content" }, Ie = { class: "meta_tips" }, be = { class: "meta_opr" }, $e = { key: 0 }, Ae = { key: 1, style: { "font-size": "8px" } }, Se = { key: 0 }, Me = { key: 1 }, Ve = { key: 1 }, Fe = { class: "meta_name" }, qe = { class: "meta_content" }, Le = { class: "meta_tips" }, Qe = { key: 0, class: "meta_opr" }, We = { class: "meta_name" }, De = { class: "meta_content" }, Pe = { class: "meta_tips" }, Te = { class: "meta_opr" }, Ue = { class: "meta_name" }, Be = { class: "meta_content" }, Re = { class: "meta_tips" }, ze = { class: "meta_opr" }, Ee = { class: "meta_name" }, Oe = { class: "meta_content" }, je = { key: 1, style: { "font-size": "8px", color: "#8c939d" } }, Ge = { key: 2, style: { "font-size": "8px", color: "red" } }, Ye = { key: 0 }, Ze = { class: "meta_tips" }, He = { class: "meta_opr" }, Je = { class: "meta_name" }, Ke = { class: "meta_content" }, Xe = { class: "meta_tips" }, ea = { class: "meta_name" }, aa = { class: "meta_content" }, ta = { class: "meta_tips" }, na = { class: "meta_opr" }, oa = { class: "meta_content" }, ia = { class: "meta_opr" }, sa = { class: "clearfix" }, la = { class: "meta_name" }, da = { class: "meta_content" }, ra = { class: "meta_tips" }, pa = { class: "meta_opr" }, ua = { class: "meta_name" }, ma = { key: 1 }, fa = { key: 0 }, ca = { key: 0 };
function ga(e, a, i, y, $, E) {
  const d = w("el-col"), v = w("el-row"), N = w("el-divider"), C = w("el-button"), I = w("el-link"), V = w("InfoFilled"), M = w("el-icon"), A = w("el-tooltip"), F = w("el-avatar"), x = Y, W = w("Delete"), q = w("el-card"), L = w("el-input"), _ = w("el-form-item"), Q = w("el-form"), b = w("el-dialog"), D = w("el-cascader"), P = G, T = w("WxMaAuthAudit"), r = te, m = ae("loading");
  return p(), g("div", null, [B((p(), h(r, null, { default: n(() => [e.basicInfo ? (p(), g("div", ke, [t(q, { class: "box-card", shadow: "never" }, { header: n(() => [l("div", ve, [l("span", null, o(e.$t("wxma.wxapp.basicInfo")), 1)])]), default: n(() => [a[26] || (a[26] = l("br", null, null, -1)), t(v, { gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", Ce, o(e.$t("wxma.wxapp.appid")), 1)]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", xe, o(e.basicInfo.appId), 1)]), _: 1 }), t(d, { span: 10 }, { default: n(() => [...a[18] || (a[18] = [l("div", { class: "meta_tips" }, null, -1)])]), _: 1 }), t(d, { span: 4 }, { default: n(() => [...a[19] || (a[19] = [l("div", { class: "meta_opr" }, null, -1)])]), _: 1 })]), _: 1 }), t(N), t(v, { gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", _e, o(e.$t("wxma.wxapp.miniProgramName")), 1)]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", Ne, o(e.basicInfo.nicknameInfo.nickname ? e.basicInfo.nicknameInfo.nickname : e.$t("wxma.wxapp.none")), 1)]), _: 1 }), t(d, { span: 10 }, { default: n(() => [l("div", Ie, o(e.$t("wxma.wxapp.annualChanges")) + o(e.basicInfo.nicknameInfo.modifyQuota) + o(e.$t("wxma.wxapp.nameChangesLeft")) + o(e.basicInfo.nicknameInfo.modifyQuota - e.basicInfo.nicknameInfo.modifyUsedCount) + o(e.$t("wxma.wxapp.times")), 1)]), _: 1 }), t(d, { span: 4 }, { default: n(() => [l("div", be, [i.wxApp.isFastregist == "1" ? (p(), g("div", $e, [e.basicInfo.nicknameInfo.modifyQuota - e.basicInfo.nicknameInfo.modifyUsedCount > 0 ? (p(), h(C, { key: 0, link: "", onClick: a[0] || (a[0] = (s) => y.setNickNameView()) }, { default: n(() => [f(o(e.$t("wxma.wxapp.modify")), 1)]), _: 1 })) : u("", true), e.nickNameAudit && e.nickNameAudit.length > 0 ? (p(), g("div", Ae, [e.nickNameAudit[0].ret == "1" ? (p(), g("span", Se, [f(o(e.$t("wxma.wxapp.namePrefix")) + o(e.nickNameAudit[0].nickname) + o(e.$t("wxma.wxapp.underReview")), 1), l("span", { style: { color: "blue" }, onClick: a[1] || (a[1] = (s) => y.updateNickNameAuditF(e.nickNameAudit[0].id)) }, o(e.$t("wxma.wxapp.checkNameStatus")), 1)])) : u("", true), e.nickNameAudit[0].ret == "2" ? (p(), g("span", Me, o(e.$t("wxma.wxapp.namePrefix")) + o(e.nickNameAudit[0].nickname) + o(e.$t("wxma.wxapp.rejectionReason1")) + o(e.nickNameAudit[0].reason), 1)) : u("", true)])) : u("", true)])) : u("", true), i.wxApp.isFastregist != "1" ? (p(), g("div", Ve, [e.basicInfo.nicknameInfo.modifyQuota - e.basicInfo.nicknameInfo.modifyUsedCount > 0 ? (p(), h(I, { key: 0, type: "primary", href: "https://mp.weixin.qq.com/", target: "_blank" }, { default: n(() => [f(o(e.$t("wxma.wxapp.modify")), 1)]), _: 1 })) : u("", true)])) : u("", true)])]), _: 1 })]), _: 1 }), t(N), t(v, { gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", Fe, [f(o(e.$t("wxma.wxapp.appAvatar")), 1), t(A, { class: "item", effect: "dark", placement: "top-end" }, { content: n(() => [l("div", null, [f(o(e.$t("wxma.wxapp.annualLimitNote")), 1), a[20] || (a[20] = l("br", null, null, -1)), f(o(e.$t("wxma.wxapp.imageFormatNote")), 1), a[21] || (a[21] = l("br", null, null, -1)), f(o(e.$t("wxma.wxapp.avatarSquare")), 1)])]), default: n(() => [t(M, null, { default: n(() => [t(V)]), _: 1 })]), _: 1 })])]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", qe, [t(F, { size: 50, src: e.basicInfo.headImageInfo.headImageUrl }, null, 8, ["src"])])]), _: 1 }), t(d, { span: 10 }, { default: n(() => [l("div", Le, o(e.$t("wxma.wxapp.applyChangeAnnually")) + o(e.basicInfo.headImageInfo.modifyQuota) + o(e.$t("wxma.wxapp.changesLeftYear")) + o(e.basicInfo.headImageInfo.modifyQuota - e.basicInfo.headImageInfo.modifyUsedCount) + o(e.$t("wxma.wxapp.times")), 1)]), _: 1 }), t(d, { span: 4 }, { default: n(() => [e.basicInfo.headImageInfo.modifyQuota - e.basicInfo.headImageInfo.modifyUsedCount > 0 ? (p(), g("div", Qe, [t(x, { appId: i.wxApp.id, showImg: false, onChange: y.uploadLogoSuccess }, null, 8, ["appId", "onChange"])])) : u("", true)]), _: 1 })]), _: 1 }), t(N), t(v, { gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", We, o(e.$t("wxma.wxapp.miniProgramCode")), 1)]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", De, [t(F, { size: 50, src: i.wxApp.qrCode }, null, 8, ["src"])])]), _: 1 }), t(d, { span: 10 }, { default: n(() => [l("div", Pe, o(e.$t("wxma.wxapp.promoDownload")), 1)]), _: 1 }), t(d, { span: 4 }, { default: n(() => [l("div", Te, [t(C, { link: "", onClick: y.getMaCode }, { default: n(() => [f(o(e.$t("wxma.wxapp.download")), 1)]), _: 1 }, 8, ["onClick"])])]), _: 1 })]), _: 1 }), t(N), t(v, { gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", Ue, o(e.$t("wxma.wxapp.introduction")), 1)]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", Be, o(e.basicInfo.signatureInfo.signature), 1)]), _: 1 }), t(d, { span: 10 }, { default: n(() => [l("div", Re, o(e.$t("wxma.wxapp.monthlyApply")) + o(e.basicInfo.signatureInfo.modifyQuota) + o(e.$t("wxma.wxapp.changesLeftMonth")) + o(e.basicInfo.signatureInfo.modifyQuota - e.basicInfo.signatureInfo.modifyUsedCount) + o(e.$t("wxma.wxapp.times")), 1)]), _: 1 }), t(d, { span: 4 }, { default: n(() => [l("div", ze, [e.basicInfo.signatureInfo.modifyQuota - e.basicInfo.signatureInfo.modifyUsedCount > 0 ? (p(), h(C, { key: 0, link: "", onClick: a[2] || (a[2] = (s) => y.setSignatureF(i.wxApp)) }, { default: n(() => [f(o(e.$t("wxma.wxapp.modify")), 1)]), _: 1 })) : u("", true)])]), _: 1 })]), _: 1 }), t(N), e.category ? (p(), h(v, { key: 0, gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", Ee, o(e.$t("wxma.wxapp.serviceCategory")), 1)]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", Oe, [(p(true), g(R, null, j(e.category.categories, (s, k) => (p(), g(R, null, [e.category.categories.length > 0 ? (p(), g("div", { key: k }, [f(o(s.firstName + " > " + s.secondName) + " ", 1), s.auditStatus == 3 || s.auditStatus == 2 ? (p(), h(M, { key: 0, onClick: (c) => y.delCategoryF(s.first, s.second) }, { default: n(() => [t(W, { color: "red" })]), _: 1 }, 8, ["onClick"])) : u("", true), s.auditStatus == 1 ? (p(), g("span", je, o(e.$t("wxma.wxapp.reviewing")), 1)) : u("", true), s.auditStatus == 2 ? (p(), g("span", Ge, [f(o(e.$t("wxma.wxapp.auditFailed")), 1), t(A, { effect: "dark", content: s.auditReason, placement: "top-start" }, { default: n(() => [t(M, null, { default: n(() => [t(V)]), _: 1 })]), _: 1 }, 8, ["content"])])) : u("", true)])) : u("", true)], 64))), 256)), e.category.categories.length == 0 ? (p(), g("div", Ye, o(e.$t("wxma.wxapp.none")), 1)) : u("", true)])]), _: 1 }), t(d, { span: 10 }, { default: n(() => [l("div", Ze, o(e.$t("wxma.wxapp.max")) + o(e.category.categoryLimit) + o(e.$t("wxma.wxapp.categoryLimit")) + o(e.category.limit) + o(e.$t("wxma.wxapp.categoryLimit2")) + o(e.category.quota) + o(e.$t("wxma.wxapp.times")), 1)]), _: 1 }), t(d, { span: 4 }, { default: n(() => [l("div", He, [e.category.quota > 0 ? (p(), h(C, { key: 0, link: "", onClick: a[3] || (a[3] = (s) => y.categoryView()) }, { default: n(() => [f(o(e.$t("wxma.wxapp.addNew")), 1)]), _: 1 })) : u("", true)])]), _: 1 })]), _: 1 })) : u("", true), t(N), t(v, { gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", Je, o(e.$t("wxma.wxapp.entityInfo")), 1)]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", Ke, o(e.basicInfo.principalName), 1)]), _: 1 }), t(d, { span: 10 }, { default: n(() => [l("div", Xe, o(e.basicInfo.principalType == "0" ? e.$t("wxma.wxapp.personal") : e.basicInfo.principalType == "1" ? e.$t("wxma.wxapp.corporate") : e.basicInfo.principalType == "2" ? e.$t("wxma.wxapp.media") : e.basicInfo.principalType == "3" ? e.$t("wxma.wxapp.government") : e.basicInfo.principalType == "4" ? e.$t("wxma.wxapp.otherOrg") : ""), 1)]), _: 1 }), t(d, { span: 4 }, { default: n(() => [...a[22] || (a[22] = [l("div", { class: "meta_opr" }, null, -1)])]), _: 1 })]), _: 1 }), t(N), t(v, { gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", ea, o(e.$t("wxma.wxapp.wechatAuth")), 1)]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", aa, o(e.basicInfo.wxVerifyInfo.qualificationVerify ? e.$t("wxma.wxapp.authenticated") : e.$t("wxma.wxapp.notAuthenticated")), 1)]), _: 1 }), t(d, { span: 10 }, { default: n(() => [l("div", ta, o(e.basicInfo.wxVerifyInfo.qualificationVerify ? e.basicInfo.wxVerifyInfo.annualReview ? e.$t("wxma.wxapp.annualReviewNeeded") : e.$t("wxma.wxapp.noAnnualReview") : ""), 1)]), _: 1 }), t(d, { span: 4 }, { default: n(() => [l("div", na, [t(C, { link: "", onClick: y.dialogWxMaAuthShow }, { default: n(() => [f(o(e.basicInfo.wxVerifyInfo.qualificationVerify ? "\u8BA4\u8BC1\u8BB0\u5F55" : e.$t("wxma.wxapp.authenticated")), 1)]), _: 1 }, 8, ["onClick"])])]), _: 1 })]), _: 1 }), t(N), t(v, { gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [...a[23] || (a[23] = [l("div", { class: "meta_name" }, "\u5FAE\u5C0F\u7A0B\u5E8F\u5907\u6848", -1)])]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", oa, o(e.wxmaIcpStatusNote || "-"), 1)]), _: 1 }), t(d, { span: 10 }, { default: n(() => [...a[24] || (a[24] = [l("div", { class: "meta_tips" }, "\u5C0F\u7A0B\u5E8F\u5FC5\u987B\u8981\u5907\u6848\u624D\u80FD\u53D1\u5E03", -1)])]), _: 1 }), t(d, { span: 4 }, { default: n(() => [l("div", ia, [t(I, { href: "https://mp.weixin.qq.com/", target: "_blank", type: "primary" }, { default: n(() => [...a[25] || (a[25] = [f("\u67E5\u770B\u5907\u6848", -1)])]), _: 1 })])]), _: 1 })]), _: 1 })]), _: 1 }), a[28] || (a[28] = l("br", null, null, -1)), t(q, { class: "box-card", shadow: "never" }, { header: n(() => [l("div", sa, [l("span", null, o(e.$t("wxma.wxapp.featureSetting")), 1)])]), default: n(() => [a[27] || (a[27] = l("br", null, null, -1)), e.searchStatus != null ? (p(), h(v, { key: 0, gutter: 20 }, { default: n(() => [t(d, { span: 4 }, { default: n(() => [l("div", la, o(e.$t("wxma.wxapp.privacySetting")), 1)]), _: 1 }), t(d, { span: 6 }, { default: n(() => [l("div", da, o(e.searchStatus == 0 ? e.$t("wxma.wxapp.searchAllowed") : e.searchStatus == 1 ? e.$t("wxma.wxapp.searchNotAllowed") : e.$t("wxma.wxapp.none")), 1)]), _: 1 }), t(d, { span: 10 }, { default: n(() => [l("div", ra, o(e.$t("wxma.wxapp.allowSearch")), 1)]), _: 1 }), t(d, { span: 4 }, { default: n(() => [l("div", pa, [e.searchStatus == 1 ? (p(), h(C, { key: 0, link: "", onClick: a[4] || (a[4] = (s) => y.setSearchStatusF(0)) }, { default: n(() => [f(o(e.$t("commons.open")), 1)]), _: 1 })) : u("", true), e.searchStatus == 0 ? (p(), h(C, { key: 1, link: "", onClick: a[5] || (a[5] = (s) => y.setSearchStatusF(1)) }, { default: n(() => [f(o(e.$t("commons.close")), 1)]), _: 1 })) : u("", true)])]), _: 1 })]), _: 1 })) : u("", true)]), _: 1 })])) : u("", true), t(b, { title: e.$t("wxma.wxapp.changeAppName"), modelValue: e.dialogNickName, "onUpdate:modelValue": a[12] || (a[12] = (s) => e.dialogNickName = s), "append-to-body": "", width: "40%" }, { default: n(() => [e.basicInfo ? B((p(), h(Q, { key: 0, model: e.formNickName, rules: e.rulesNickName, ref: "formNickNameRef", "label-width": "100px" }, { default: n(() => [t(_, { label: e.$t("wxma.wxapp.miniProgramName"), prop: "nickname" }, { default: n(() => [t(L, { modelValue: e.formNickName.nickname, "onUpdate:modelValue": a[6] || (a[6] = (s) => e.formNickName.nickname = s) }, null, 8, ["modelValue"]), l("span", ua, [f(o(e.$t("wxma.wxapp.nameLengthNote")), 1), t(I, { type: "primary", href: "https://kf.qq.com/faq/170109umMvm6170109MZNnYV.html", target: "_blank" }, { default: n(() => [f(o(e.$t("wxma.wxapp.nameRules")), 1)]), _: 1 })])]), _: 1 }, 8, ["label"]), e.basicInfo.principalType == 0 ? (p(), h(_, { key: 0, label: e.$t("wxma.wxapp.idPhoto"), prop: "idCard" }, { default: n(() => [t(x, { appId: i.wxApp.id, onChange: a[7] || (a[7] = (s) => e.formNickName.idCard = s) }, null, 8, ["appId"])]), _: 1 }, 8, ["label"])) : u("", true), e.basicInfo.principalType != 0 ? (p(), h(_, { key: 1, label: e.$t("wxma.wxapp.businessLicense"), prop: "license" }, { default: n(() => [t(x, { appId: i.wxApp.id, onChange: a[8] || (a[8] = (s) => e.formNickName.license = s) }, null, 8, ["appId"])]), _: 1 }, 8, ["label"])) : u("", true), t(_, { label: e.$t("wxma.wxapp.otherProofs"), prop: "namingOtherStuff1" }, { default: n(() => [t(x, { appId: i.wxApp.id, onChange: a[9] || (a[9] = (s) => e.formNickName.namingOtherStuff1 = s) }, null, 8, ["appId"])]), _: 1 }, 8, ["label"]), t(_, { label: e.$t("wxma.wxapp.otherProofs"), prop: "namingOtherStuff2" }, { default: n(() => [t(x, { appId: i.wxApp.id, onChange: a[10] || (a[10] = (s) => e.formNickName.namingOtherStuff2 = s) }, null, 8, ["appId"])]), _: 1 }, 8, ["label"]), t(_, { size: "large" }, { default: n(() => [t(C, { type: "primary", onClick: a[11] || (a[11] = (s) => y.setNickNameF()) }, { default: n(() => [f(o(e.$t("commons.submit")), 1)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model", "rules"])), [[m, e.loadingNickName]]) : u("", true)]), _: 1 }, 8, ["title", "modelValue"]), t(b, { title: e.$t("wxma.wxapp.addCategory"), modelValue: e.dialogCategory, "onUpdate:modelValue": a[15] || (a[15] = (s) => e.dialogCategory = s), "append-to-body": "", width: "40%" }, { default: n(() => [B((p(), h(Q, { ref: "formCategoryRef", model: e.formCategory, rules: e.rulesCategory, "label-width": "180px" }, { default: n(() => [t(_, { label: e.$t("wxma.wxapp.category") }, { default: n(() => [t(D, { modelValue: e.formCategory.category, "onUpdate:modelValue": a[13] || (a[13] = (s) => e.formCategory.category = s), options: e.allCategorys, props: e.propsCategory, onChange: y.handleChangeCategory }, null, 8, ["modelValue", "options", "props", "onChange"])]), _: 1 }, 8, ["label"]), (p(true), g(R, null, j(e.exterList, (s, k) => (p(), h(_, { key: k }, { label: n(() => [l("div", null, [s.inner_list[0].url ? (p(), h(I, { key: 0, href: s.inner_list[0].url, target: "_blank" }, { default: n(() => [f(o(s.inner_list[0].name) + o(e.$t("wxma.wxapp.identityPhoto")), 1)]), _: 2 }, 1032, ["href"])) : u("", true), s.inner_list[0].url ? u("", true) : (p(), g("span", ma, o(s.inner_list[0].name) + o(e.$t("wxma.wxapp.identityPhoto")), 1))])]), default: n(() => [e.dialogCategory ? (p(), g("div", fa, [t(x, { appId: i.wxApp.id, onChange: (c) => y.wxMaMediaCategoryChange(s.inner_list[0].name, c) }, null, 8, ["appId", "onChange"])])) : u("", true)]), _: 2 }, 1024))), 128)), t(_, { size: "large" }, { default: n(() => [t(C, { type: "primary", onClick: a[14] || (a[14] = (s) => y.addCategoryF()) }, { default: n(() => [f(o(e.$t("commons.submit")), 1)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model", "rules"])), [[m, e.loadingCategory]])]), _: 1 }, 8, ["title", "modelValue"]), t(b, { "append-to-body": "", title: e.$t("wxma.wxapp.mpCodeDownload"), modelValue: e.dialogWxMaQrCodeDown, "onUpdate:modelValue": a[16] || (a[16] = (s) => e.dialogWxMaQrCodeDown = s), width: "30%" }, { default: n(() => [e.dialogWxMaQrCodeDown ? (p(), g("div", ca, [t(P, { appId: i.wxApp.id, scene: i.wxApp.id }, null, 8, ["appId", "scene"])])) : u("", true)]), _: 1 }, 8, ["title", "modelValue"]), t(b, { "append-to-body": "", title: i.wxApp.name + " \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8BA4\u8BC1", modelValue: e.dialogWxMaAuth, "onUpdate:modelValue": a[17] || (a[17] = (s) => e.dialogWxMaAuth = s), width: "80%" }, { default: n(() => [t(T, { wxApp: i.wxApp }, null, 8, ["wxApp"])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 })), [[m, e.loading]])]);
}
const _a = ee(he, [["render", ga], ["__scopeId", "data-v-f93e8816"]]);
export {
  _a as default
};
