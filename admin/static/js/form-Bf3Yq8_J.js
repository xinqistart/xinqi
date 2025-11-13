import { q as g, U as _, A as k, R as E, p as I, t as O, E as U, bm as T, K as A, S as C, cr as R, b9 as h, _ as L, r as n, c as b, o as d, b as t, h as l, g as S, B, e as i, z as P } from "./index-DAdfXJ2i.js";
import { a as w } from "./tenant-DZmYgWqm.js";
import { M as $ } from "./list-CpVj7t9v.js";
import j from "./index-DSJDSg8G.js";
import "./user-CcdA_mZX.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
import "./BaseEditor-CKHWT0N2.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./index-CxUwxPH6.js";
import "./tenantpackage-D3Nb2FO1.js";
import "./tenantpackagecost-VuyOGNHB.js";
import "./agreementconfig-BApCRbNY.js";
import "./pay-qrcode-eTpYhBVf.js";
import "./vue-qr-Ee6k57BN.js";
const z = { components: { MaterialList: $, BuyTenantPackage: j }, setup() {
  const o = g(() => {
    var _a;
    return (_a = _()) == null ? void 0 : _a.initConfig;
  }), { proxy: a } = k(), c = E({ activeName: a.$route.query.buypackage == "true" ? "second" : "first", form: { logo: "", companyLicense: "", id: "", name: "", phone: "", email: "" }, tableOption: w }), s = I();
  O(() => {
    U(() => _().tenantInfo, () => {
      r();
    }, { immediate: true }), T() ? s.value.tableOption.column.forEach((e) => {
      (e.prop == "companyName" || e.prop == "companyCode" || e.prop == "companyLicense" || e.prop == "expireTime" || e.prop == "packageId" || e.prop == "copyrightInfo") && (e.display = false);
    }) : s.value.tableOption.column.forEach((e) => {
      (e.prop == "companyName" || e.prop == "companyCode" || e.prop == "companyLicense" || e.prop == "expireTime" || e.prop == "packageId") && (e.display = o.value.VERSION_01_TENANT_STATUS !== 1);
    });
  });
  const f = g(() => {
    var _a;
    return { editBtn: !!((_a = A()) == null ? void 0 : _a.permissions)["sys:organ:edit"] };
  });
  function r() {
    h({}).then((e) => {
      c.form = e.data;
    });
  }
  function u(e, m) {
    R(e).then(() => {
      m(), r(), a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      m();
    });
  }
  return { ...C(c), permissionList: f, crudRef: s, initConfig: o, judgePlatformPage: T, handleGet: r, handleUpdate: u };
} }, M = { class: "jl-text-tips" }, H = { key: 1 };
function q(o, a, c, s, f, r) {
  const u = n("material-list"), e = n("el-image"), m = n("el-empty"), N = n("avue-form"), y = n("el-tab-pane"), v = n("BuyTenantPackage"), V = n("el-tabs");
  return d(), b("div", null, [t(V, { modelValue: o.activeName, "onUpdate:modelValue": a[2] || (a[2] = (p) => o.activeName = p), type: "border-card" }, { default: l(() => [t(y, { label: o.$t("upms.tenant.baseInfo"), name: "first" }, { default: l(() => [a[3] || (a[3] = i("br", null, null, -1)), t(N, { ref: "crudRef", modelValue: o.form, "onUpdate:modelValue": a[1] || (a[1] = (p) => o.form = p), style: { "padding-left": "30px" }, option: o.tableOption, permission: s.permissionList, onSubmit: s.handleUpdate }, { logo: l(() => [i("div", null, [t(u, { singleValue: o.form.logo, "onUpdate:singleValue": a[0] || (a[0] = (p) => o.form.logo = p), type: "image", num: 1, "is-single": true, width: 100, height: 100 }, null, 8, ["singleValue"]), i("p", M, P(o.$t("commons.imageSizeTip", { size: "150*150" })), 1)])]), companyLicense: l(() => [i("div", null, [o.form.companyLicense ? (d(), S(e, { key: 0, src: o.form.companyLicense, "preview-src-list": [o.form.companyLicense], "preview-teleported": true }, null, 8, ["src", "preview-src-list"])) : (d(), b("div", H, [t(m, { "image-size": 20 })]))])]), _: 1 }, 8, ["modelValue", "option", "permission", "onSubmit"]), a[4] || (a[4] = i("br", null, null, -1))]), _: 1 }, 8, ["label"]), !s.judgePlatformPage() && s.initConfig.VERSION_01_COPYRIGHT_STATUS === 1 ? (d(), S(y, { key: 0, label: o.$t("upms.tenant.packageInfo"), name: "second" }, { default: l(() => [t(v)]), _: 1 }, 8, ["label"])) : B("", true)]), _: 1 }, 8, ["modelValue"])]);
}
const ie = L(z, [["render", q], ["__scopeId", "data-v-ba7435bd"]]);
export {
  ie as default
};
