import { aO as s, n as m, bo as u } from "./index-DAdfXJ2i.js";
import { g as l } from "./user-CcdA_mZX.js";
function c(t) {
  return s.request("get", "/upms/tenantapply/page", { params: t });
}
function b(t) {
  return s.request("post", "/upms/tenantapply", { data: t });
}
function h(t) {
  return s.request("delete", "/upms/tenantapply/" + t);
}
function x(t) {
  return s.request("put", "/upms/tenantapply/addedit", { data: t });
}
function w(t) {
  return s.request("get", "/upms/tenantapply/one", { params: t });
}
function f(t) {
  return s.request("put", "/upms/tenantapply/verify", { data: t });
}
const { $t: e } = m(), o = (t, n, a) => {
  window.openType === "edit" ? a() : u({ tenantId: window.tenantId, name: n }).then((r) => {
    r.data > 0 ? a(new Error(e("upms.tenantapply.mallNameExists"))) : a();
  });
}, i = (t, n, a) => {
  window.openType === "edit" ? a() : l({ username: n }).then((r) => {
    r.data > 0 ? a(new Error(e("upms.tenant.accountExists"))) : a();
  });
}, g = (t, n, a) => {
  window.openType === "edit" ? a() : l({ phone: n }).then((r) => {
    r.data > 0 ? a(new Error(e("upms.tenant.phoneNumberExists"))) : a();
  });
}, P = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, editBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 130, searchGutter: 30, searchLabelPosition: "left", column: [{ label: e("upms.tenantapply.id"), prop: "id", sortable: true, search: true, editDisplay: false, viewDisplay: false, rules: [{ max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("upms.tenantapply.name"), prop: "name", search: true, sortable: true, rules: [{ required: true, message: e("upms.tenantapply.name") + e("commons.notNull"), trigger: "blur" }, { max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("upms.tenantapply.companyName"), prop: "companyName", search: true, searchLabelWidth: 150, labelTip: "\u8BF7\u5982\u5B9E\u586B\u5199\u4F01\u4E1A\u4FE1\u606F\uFF0C\u5426\u5219\u5BA1\u6838\u4E0D\u901A\u8FC7", rules: [{ required: true, message: e("upms.tenantapply.companyName") + e("commons.notNull"), trigger: "blur" }, { max: 100, message: e("commons.lengthTips", { length: 100 }) }] }, { label: e("upms.tenantapply.userUsername"), prop: "userUsername", search: true, sortable: true, searchLabelWidth: 130, placeholder: e("commons.recommendPhone"), rules: [{ required: true, message: e("upms.tenantapply.userUsername") + e("commons.notNull"), trigger: "blur" }, { max: 64, message: e("commons.lengthTips", { length: 64 }) }] }, { label: e("upms.tenantapply.userPassword"), prop: "userPassword", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.userPassword") + e("commons.notNull"), trigger: "blur" }, { max: 255, message: e("commons.lengthTips", { length: 255 }) }] }, { label: e("upms.tenantapply.userPhone"), prop: "userPhone", search: true, sortable: true, rules: [{ required: true, message: e("upms.tenantapply.userPhone") + e("commons.notNull"), trigger: "blur" }, { max: 15, message: e("commons.lengthTips", { length: 15 }) }] }, { label: e("upms.tenantapply.companyCode"), prop: "companyCode", rules: [{ required: true, message: e("upms.tenantapply.companyCode") + e("commons.notNull"), trigger: "blur" }, { max: 100, message: e("commons.lengthTips", { length: 100 }) }] }, { label: e("upms.tenantapply.companyLicense"), prop: "companyLicense", width: 120, rules: [{ required: true, message: e("upms.tenantapply.companyLicense") + e("commons.notNull"), trigger: "blur" }, { max: 500, message: e("commons.lengthTips", { length: 500 }) }] }, { label: e("commons.createTime"), prop: "createTime", width: 110, editDisplay: false, sortable: true }, { label: e("upms.tenantapply.status"), prop: "status", type: "select", sortable: true, search: true, dicData: [{ label: e("upms.tenantapply.underReview"), value: "0" }, { label: e("upms.tenantapply.reviewPassed"), value: "1" }, { label: e("upms.tenantapply.reviewFailed"), value: "2" }] }, { label: e("upms.tenantapply.applyDetail"), prop: "applyDetail", rules: [{ max: 500, message: e("commons.lengthTips", { length: 500 }) }] }] }, L = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 120, group: [{ label: e("commons.baseInfo"), prop: "baseInfo", icon: "el-icon-s-order", column: [{ label: e("upms.tenantapply.mallName"), prop: "name", sortable: true, row: true, rules: [{ required: true, message: e("upms.tenantapply.enterMallName"), trigger: "blur" }, { max: 64, message: e("pay.payconfig.maxLength64") }, { validator: o, trigger: "blur" }] }, { label: e("upms.tenant.adminAccount"), prop: "userUsername", sortable: true, placeholder: e("commons.recommendPhone"), rules: [{ required: true, message: e("upms.tenantapply.enterAdminUsername"), trigger: "blur" }, { max: 64, message: e("pay.payconfig.maxLength64") }, { validator: i, trigger: "blur" }] }, { label: e("upms.tenant.adminPassword"), prop: "userPassword", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterAdminPassword"), trigger: "blur" }, { max: 255, message: e("upms.tenantapply.maxLength255") }, { validator: (t, n, a) => {
  n === "" ? a(new Error(e("login.passwordReg"))) : /^[\w!@#$%^&*()_+~`|{}[\]:";'<>?,./\\-]{6,}$/.test(n) ? a() : a(new Error(e("login.passwordRuleReg6")));
}, trigger: "blur" }] }, { label: e("upms.tenant.adminPhoneNumber"), prop: "userPhone", sortable: true, rules: [{ required: true, message: e("upms.tenant.adminPhoneNumberInput"), trigger: "blur" }, { min: 11, max: 11, message: e("upms.tenant.phoneLength"), trigger: "blur" }, { validator: g, trigger: "blur" }] }, { label: e("upms.tenantapply.captcha"), prop: "smsCode", rules: [{ required: true, message: e("upms.tenantapply.enterCaptcha"), trigger: "blur" }] }] }, { label: e("upms.tenantapply.companyInfo"), prop: "baseInfo2", icon: "el-icon-s-order", column: [{ label: e("upms.tenantapply.companyName"), prop: "companyName", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterCompanyName"), trigger: "blur" }, { max: 100, message: e("upms.tenantapply.maxLength100") }] }, { label: e("upms.tenantapply.companyCreditCode"), prop: "companyCode", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterCompanyCreditCode"), trigger: "blur" }, { max: 100, message: e("upms.tenantapply.maxLength100") }, { validator: (t, n, a) => {
  n === "" ? a(new Error(e("upms.tenantapply.enterCompanyCreditCode"))) : /^[\w!@#$%^&*()_+~`|{}[\]:";'<>?,./\\-]{18,18}$/.test(n) ? a() : a(new Error(e("upms.tenantapply.maxLength18")));
}, trigger: "blur" }] }, { label: e("upms.tenantapply.companyLicence"), prop: "companyLicense", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.uploadCompanyLicence"), trigger: "blur" }, { max: 500, message: e("upms.tenantapply.maxLength500") }] }] }] }, v = { detail: true, submitBtn: false, emptyBtn: false, dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 120, group: [{ label: e("commons.baseInfo"), prop: "baseInfo", icon: "el-icon-s-order", column: [{ label: e("upms.tenantapply.applicationId"), prop: "id" }, { label: e("upms.tenantapply.mallName"), prop: "name", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterMallName"), trigger: "blur" }, { max: 64, message: e("pay.payconfig.maxLength64") }] }, { label: e("upms.tenantapply.adminUsername"), prop: "userUsername", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterTenantAdminUsername"), trigger: "blur" }, { max: 64, message: e("pay.payconfig.maxLength64") }] }, { label: e("upms.tenant.adminPassword"), prop: "userPassword", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterTenantAdminPassword"), trigger: "blur" }, { max: 255, message: e("upms.tenantapply.maxLength255") }, { validator: (t, n, a) => {
  n === "" ? a(new Error(e("login.passwordReg"))) : /^[\w!@#$%^&*()_+~`|{}[\]:";'<>?,./\\-]{6,}$/.test(n) ? a() : a(new Error(e("login.passwordRuleReg6")));
}, trigger: "blur" }] }, { label: e("upms.tenant.adminPhoneNumber"), prop: "userPhone", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterTenantAdminPhone"), trigger: "blur" }, { max: 15, message: e("upms.tenantapply.maxLength15") }] }] }, { label: e("upms.tenantapply.companyInfo"), prop: "baseInfo2", icon: "el-icon-s-order", column: [{ label: e("upms.tenantapply.companyName"), prop: "companyName", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterCompanyName"), trigger: "blur" }, { max: 100, message: e("upms.tenantapply.maxLength100") }] }, { label: e("upms.tenantapply.companyCreditCode"), prop: "companyCode", sortable: true, rules: [{ required: true, message: e("upms.tenantapply.enterCompanyCreditCode"), trigger: "blur" }, { max: 100, message: e("upms.tenantapply.maxLength100") }] }, { label: e("upms.tenantapply.companyLicence"), prop: "companyLicense", sortable: true, rules: [{ max: 500, message: e("upms.tenantapply.maxLength500") }] }] }, { label: e("upms.tenantapply.reviewInformation"), prop: "baseInfo", icon: "el-icon-s-order", column: [{ label: e("upms.tenantapply.reviewStatus"), prop: "status", type: "select", dicData: [{ label: e("upms.tenantapply.underReview"), value: "0" }, { label: e("upms.tenantapply.reviewPassed"), value: "1" }, { label: e("upms.tenantapply.reviewFailed"), value: "2" }] }, { label: e("upms.tenantapply.reviewDetailsExplanation"), prop: "applyDetail", sortable: true, rules: [{ max: 500, message: e("upms.tenantapply.maxLength500") }] }] }] };
export {
  L as a,
  b,
  c,
  h as d,
  v as f,
  w as g,
  x as p,
  P as t,
  f as v
};
