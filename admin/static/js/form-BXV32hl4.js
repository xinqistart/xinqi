import { aO as V, A as C, R as k, S as x, _ as E, r as a, c as g, o as _, b as n, h as l, e as u, B as S, z as B, f, a_ as N } from "./index-DAdfXJ2i.js";
import { _ as v } from "./BaseEditor-CKHWT0N2.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
function q(e) {
  return V.request("post", "/upms/email/send", { data: e });
}
const j = { components: { BaseEditor: v }, setup() {
  const { proxy: e } = C(), o = k({ form: { to: void 0, content: "" }, option: { column: [{ label: e.$t("upms.emailconfig.sendTo"), prop: "to", span: 24, rules: [{ required: true, message: e.$t("upms.emailconfig.enterTargetEmail"), trigger: "blur" }] }, { label: e.$t("upms.emailconfig.subject"), prop: "title", span: 24, rules: [{ required: true, message: e.$t("upms.emailconfig.subject") + e.$t("commons.notNull"), trigger: "blur" }] }, { label: e.$t("upms.emailconfig.content"), prop: "content", formslot: true, span: 24, rules: [{ required: true, message: e.$t("upms.emailconfig.content") + e.$t("commons.notNull"), trigger: "blur" }] }] } });
  function d(i, t) {
    q(i).then(() => {
      e.$message({ showClose: true, message: e.$t("upms.emailconfig.sendSuccess"), type: "success" }), t();
    }).catch(() => {
      t();
    });
  }
  async function r(i) {
    var _a;
    try {
      const t = await e.$Export.xlsx(i.raw);
      if (t.header) {
        o.form.to = [];
        let m = t.header[0], p = (_a = t.results) == null ? void 0 : _a.map((c) => c[m]);
        o.form.to.push(m), o.form.to = [...o.form.to, ...p];
      } else e.$message.warning("\u6CA1\u6709\u627E\u5230\u6570\u636E");
    } catch (t) {
      e.$message.warning("\u4E0A\u4F20\u6587\u4EF6\u5931\u8D25:" + t);
    }
  }
  return { ...x(o), handleSubmit: d, handleImportChange: r };
} }, I = { class: "flex-c" }, T = { class: "mr-[10px] w-full" }, U = { key: 0, class: "flex justify-between" };
function D(e, o, d, r, i, t) {
  const m = a("el-select"), p = a("el-button"), c = a("el-upload"), b = a("el-image"), $ = a("el-popover"), h = v, y = a("avue-form"), w = N;
  return _(), g("div", null, [n(w, null, { default: l(() => [n(y, { modelValue: e.form, "onUpdate:modelValue": o[3] || (o[3] = (s) => e.form = s), option: e.option, onSubmit: r.handleSubmit }, { to: l(() => [u("div", I, [u("div", T, [n(m, { modelValue: e.form.to, "onUpdate:modelValue": o[0] || (o[0] = (s) => e.form.to = s), multiple: "", filterable: "", "allow-create": "", "default-first-option": "", "reserve-keyword": false, "collapse-tags": "", "collapse-tags-tooltip": "", "max-collapse-tags": 10, placeholder: "\u8BF7\u5165\u90AE\u4EF6\u5730\u5740,\u6309\u56DE\u8F66\u6216\u70B9\u51FB\u9009\u9879\u9009\u62E9,\u53EF\u8F93\u5165\u591A\u4E2A\u90AE\u4EF6\u5730\u5740" }, null, 8, ["modelValue"]), e.form.to && e.form.to.length > 0 ? (_(), g("div", U, [u("div", null, "\u603B\u5171" + B(e.form.to.length) + "\u4E2A\u90AE\u7BB1", 1), n(p, { type: "primary", link: "", onClick: o[1] || (o[1] = (s) => e.form.to = void 0) }, { default: l(() => [...o[4] || (o[4] = [f("\u6E05\u7A7A", -1)])]), _: 1 })])) : S("", true)]), n($, { width: 500, trigger: "hover" }, { reference: l(() => [n(c, { "auto-upload": false, "show-file-list": false, accept: ".xlsx,.xls,.csv", action: "action", onChange: r.handleImportChange }, { default: l(() => [n(p, { type: "primary", icon: "upload" }, { default: l(() => [...o[5] || (o[5] = [f("\u4E0A\u4F20\u7FA4\u53D1\u90AE\u4EF6\u5730\u5740", -1)])]), _: 1 })]), _: 1 }, 8, ["onChange"])]), default: l(() => [u("div", null, [o[6] || (o[6] = f(" \u63D0\u793A: \u5BFC\u5165\u683C\u5F0F\u4E3AExcel\u6587\u4EF6,\u6570\u636E\u683C\u5F0F\u5982\u4E0B:", -1)), n(b, { style: { height: "400px" }, src: "/img/tip/email-tip.png" })])]), _: 1 })])]), content: l(() => [n(h, { value: e.form.content, "onUpdate:value": o[2] || (o[2] = (s) => e.form.content = s) }, null, 8, ["value"])]), _: 1 }, 8, ["modelValue", "option", "onSubmit"])]), _: 1 })]);
}
const O = E(j, [["render", D]]);
export {
  O as default
};
