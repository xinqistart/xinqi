import { aO as u, A as p, R as i, S as c, _ as d, r as b, c as f, o as g, b as r, h as _, a_ as $ } from "./index-DAdfXJ2i.js";
function h(e) {
  return u.request("post", "/upms/sms/send", { data: e });
}
const S = { setup() {
  const { proxy: e } = p(), t = i({ form: {}, option: { labelPosition: "left", column: [{ label: e.$t("upms.sms.signatureName"), prop: "signName", type: "select", labelWidth: "140", row: "true", rules: [{ required: true, message: e.$t("upms.sms.selectSignatureName"), trigger: "blur" }], dicData: [{ label: e.$t("upms.sms.mallName"), value: "JooLun\u5546\u57CE" }] }, { label: e.$t("upms.sms.template"), labelWidth: "140", prop: "templateCode", type: "select", row: "true", rules: [{ required: true, message: e.$t("upms.sms.selectTemplateID"), trigger: "blur" }], dicData: [{ label: e.$t("upms.sms.registrationVerificationCode"), value: "SMS_183247308" }] }, { label: e.$t("upms.sms.mobilePhoneNumber"), labelWidth: "140", prop: "phoneNumbers", row: "true", rules: [{ required: true, message: e.$t("upms.sms.enterMobilePhoneNumber"), trigger: "blur" }] }, { label: e.$t("upms.sms.templateActualValue"), prop: "templateParam", type: "textarea", labelWidth: "180", labelTip: e.$t("upms.sms.actualValueJsonFormat"), value: '{"code":"66987"}' }] } });
  function o(s, a) {
    h(s).then(() => {
      e.$message({ showClose: true, message: e.$t("upms.emailconfig.sendSuccess"), type: "success" }), a();
    }).catch(() => {
      a();
    });
  }
  return { ...c(t), handleSubmit: o };
} }, v = { class: "app-container calendar-list-container" };
function N(e, t, o, s, a, V) {
  const l = b("avue-form"), m = $;
  return g(), f("div", v, [r(m, null, { default: _(() => [r(l, { style: { "padding-left": "30px", "margin-top": "20px" }, option: e.option, modelValue: e.form, "onUpdate:modelValue": t[0] || (t[0] = (n) => e.form = n), onSubmit: s.handleSubmit }, null, 8, ["option", "modelValue", "onSubmit"])]), _: 1 })]);
}
const C = d(S, [["render", N]]);
export {
  C as default
};
