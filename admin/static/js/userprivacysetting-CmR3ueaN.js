import { n as $, A as V, R as C, be as q, t as A, S as P, _ as N, r as s, j as D, c as y, o as d, b as c, h as o, e as p, f as g, z as _, w as I, g as w, F as L, v as B, a_ as T } from "./index-DAdfXJ2i.js";
import { A as z, v as U } from "./wxapp-DzjQ_kFh.js";
const { $t: e } = $(), j = { column: [{ label: e("wxma.wxprivacysetting.notice_method"), labelWidth: 120, prop: "notice_method", labelTip: e("wxma.wxprivacysetting.informationCollectionNotification"), rules: [{ required: true, message: e("wxma.wxprivacysetting.notice_method") + e("commons.notNull"), trigger: "blur" }], filterable: true, hide: false, type: "select", dicData: [{ label: "\u5F39\u7A97", value: "\u5F39\u7A97" }, { label: "\u516C\u544A", value: "\u516C\u544A" }] }, { label: e("wxma.wxprivacysetting.contact_email"), labelWidth: 120, prop: "contact_email", labelTip: e("wxma.wxprivacysetting.informationCollectionEmail"), rules: [{ required: true, message: e("wxma.wxprivacysetting.contact_email") + e("commons.notNull"), trigger: "blur" }] }, { label: e("wxma.wxprivacysetting.setting_list"), prop: "setting_list", type: "dynamic", labelWidth: 120, span: 24, labelTip: e("wxma.wxprivacysetting.fillPurpose"), children: { align: "center", headerAlign: "center", column: [{ label: e("wxma.wxprivacysetting.information"), prop: "privacy_key", rules: [{ required: true, message: e("wxma.wxprivacysetting.selectInformation"), trigger: "blur" }], formslot: true }, { label: e("wxma.wxprivacysetting.informationPurpose"), prop: "privacy_text", rules: [{ required: true, message: e("wxma.wxprivacysetting.enterPurpose"), trigger: "blur" }], type: "select", filterable: true, hide: false, placeholder: e("commons.selectInput"), allowCreate: true, dicData: [{ label: "\u5C55\u793A\u7528\u6237\u4FE1\u606F", value: "\u5C55\u793A\u7528\u6237\u4FE1\u606F" }, { label: "\u7EDF\u8BA1\u7528\u6237\u533A\u57DF\u5206\u5E03", value: "\u7EDF\u8BA1\u7528\u6237\u533A\u57DF\u5206\u5E03" }, { label: "\u767B\u5F55\u7CFB\u7EDF", value: "\u767B\u5F55\u7CFB\u7EDF" }] }] } }] }, F = { props: { wxApp: { type: Object } }, components: {}, setup(t) {
  const { proxy: i } = V(), n = C({ headers: { Authorization: "Bearer " + q().access_token }, tableLoading: false, privacySetting: { notice_method: "", contact_email: "", owner_setting: {} }, optionPrivacySetting: j, privacy_desc_list: [] });
  A(() => {
    m();
  });
  function m() {
    n.tableLoading = true, z({ appId: t.wxApp.id }).then((l) => {
      var _a, _b;
      n.tableLoading = false;
      const a = l.data;
      a.errcode == 0 ? (n.privacySetting = a, n.privacySetting.notice_method = (_a = a.owner_setting) == null ? void 0 : _a.notice_method, n.privacySetting.contact_email = (_b = a.owner_setting) == null ? void 0 : _b.contact_email, n.privacy_desc_list = a.privacy_desc.privacy_desc_list) : i.$message({ showClose: true, message: a.errmsg, type: "error" });
    }).catch(() => {
      n.tableLoading = false;
    });
  }
  function v(l, a) {
    l.owner_setting.notice_method = l.notice_method, l.owner_setting.contact_email = l.contact_email, U(Object.assign({ appId: t.wxApp.id }, l)).then(() => {
      i.$message({ showClose: true, message: i.$t("commons.submitSuccess"), type: "success" }), a();
    }).catch(() => {
      a();
    });
  }
  return { ...P(n), privacySettingGetF: m, submitPrivacySetting: v };
} }, G = { class: "w-full" };
function M(t, i, n, m, v, l) {
  const a = s("el-link"), b = s("el-alert"), f = s("el-option"), x = s("el-select"), h = s("avue-form"), S = T, k = D("loading");
  return d(), y("div", null, [c(S, null, { default: o(() => [p("div", null, [c(b, { type: "warning", closable: false }, { title: o(() => [p("span", null, [g(_(t.$t("wxma.wxapp.autoMaintenance")), 1), c(a, { href: "https://mp.weixin.qq.com/wxamp/wadevelopcode/privacy_example?token=121746435&lang=zh_CN", target: "_blank" }, { default: o(() => [g(_(t.$t("wxma.wxapp.privacyGuidelines")), 1)]), _: 1 }), i[1] || (i[1] = p("br", null, null, -1)), g(_(t.$t("wxma.wxapp.customizeAccordingly")), 1), c(a, { href: "https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/", target: "_blank" }, { default: o(() => [g(_(t.$t("wxma.wxapp.learnMore")), 1)]), _: 1 })])]), _: 1 }), i[2] || (i[2] = p("br", null, null, -1)), p("div", G, [I((d(), w(h, { modelValue: t.privacySetting, "onUpdate:modelValue": i[0] || (i[0] = (u) => t.privacySetting = u), option: t.optionPrivacySetting, onSubmit: m.submitPrivacySetting }, { privacy_key: o((u) => [c(x, { modelValue: u.row.privacy_key, "onUpdate:modelValue": (r) => u.row.privacy_key = r, filterable: "", placeholder: t.$t("commons.select") }, { default: o(() => [(d(true), y(L, null, B(t.privacy_desc_list, (r) => (d(), w(f, { key: r.privacy_key, label: r.privacy_desc, value: r.privacy_key }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 1 }, 8, ["modelValue", "option", "onSubmit"])), [[k, t.tableLoading]])])])]), _: 1 })]);
}
const E = N(F, [["render", M]]);
export {
  E as default
};
