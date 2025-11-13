import { A as j, R as q, n as E, t as A, S as F, _ as z, r as m, c as h, o as b, b as n, h as o, g as S, e as g, f as y, z as u, B as G, F as H, v as K, a_ as L } from "./index-DAdfXJ2i.js";
import { a as M, p as N } from "./configlogistics-CtSivpVp.js";
import { d as W, t as x } from "./configlogistics-fC4Iyj6M.js";
const { $t: s } = E(), J = { setup() {
  const { proxy: t } = j(), r = (e, a, i) => {
    const c = l.tableData2.map((p) => p.code);
    c && c.includes(l.form2.code) ? i(new Error(s("mall.configlogistics.codeNotRepeat"))) : i();
  }, l = q({ form: {}, tableOption: x, templates: {}, form2: { $name: "", code: "" }, tableDataIds2: [], tableData2: [], tableOption2: { menuBtn: false, printBtn: false, filterBtn: false, refreshBtn: false, labelWidth: 190, expand: true, rowKey: "code", column: [{ label: s("mall.configlogistics.company"), prop: "name", type: "select", filterable: true, editDisabled: true, props: { label: "name", value: "code" }, rules: [], dicData: [...W], change: (e) => {
    e.column.boxType == "add" && (l.form2.code = e.value);
  } }, { label: s("mall.configlogistics.companyCode"), addDisabled: true, editDisabled: true, prop: "code" }, { label: s("mall.configlogistics.labelTemplates"), prop: "labelTemplates", type: "dynamic", hide: true, span: 24, labelTip: s("mall.configlogistics.labelTemplatesTip") + "https://api.kuaidi100.com/manager/v2/shipping-label/template-shipping-label", children: { align: "center", headerAlign: "center", column: [{ label: s("mall.configlogistics.templateId"), prop: "templateId", rules: [{ required: true, message: s("mall.configlogistics.templateId") + s("commons.isRequired"), trigger: "blur" }] }, { label: s("mall.configlogistics.templateName"), prop: "templateName", rules: [{ required: true, message: s("mall.configlogistics.templateName") + s("commons.isRequired"), trigger: "blur" }] }] } }, { label: s("commons.note"), prop: "labelTemplatesTip", hide: true, span: 24 }] } });
  A(() => {
    d();
  });
  function d() {
    M().then((e) => {
      l.form = e.data ? e.data : {}, l.tableData2 = e.data.logisticsCompany ? e.data.logisticsCompany : [];
    });
  }
  function _(e, a) {
    if (e || (e = l.form), l.tableData2) {
      const i = [];
      l.tableData2.map((c) => {
        i.push({ code: c.code, name: c.$name, labelTemplates: c.labelTemplates });
      }), e.logisticsCompany = i;
    } else e.logisticsCompany = "";
    e.id ? N(e).then(() => {
      a && a(), d(), t.$message({ showClose: true, message: t.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      a && a();
    }) : N(e).then(() => {
      a && a(), d(), t.$message({ showClose: true, message: t.$t("commons.addSuccess"), type: "success" });
    }).catch(() => {
      a && a();
    });
  }
  function $(e, a, i) {
    const c = [];
    e.labelTemplates && e.labelTemplates.forEach((p) => {
      c.push({ templateId: p.templateId, templateName: p.templateName });
    }), l.tableData2.forEach((p) => {
      p.code === e.code && (p.labelTemplates = c);
    }), i(), setTimeout(() => {
      _(l.form);
    }, 100);
  }
  function T(e, a) {
    const i = [];
    e.labelTemplates && e.labelTemplates.forEach((p) => {
      i.push({ templateId: p.templateId, templateName: p.templateName });
    });
    const c = { code: e.code, name: l.form2.$name, labelTemplates: i };
    l.tableData2.push(c), a(), setTimeout(() => {
      _(l.form);
    }, 100);
  }
  function v(e) {
    t.$confirm(t.$t("commons.confirmDelete"), t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      l.tableData2.forEach((a, i) => {
        a.code === e.code && l.tableData2.splice(i, 1);
      }), setTimeout(() => {
        _(l.form);
      }, 100);
    });
  }
  function C(e, a) {
    a === "add" ? l.tableOption2.column[0].rules = [{ required: true, message: s("commons.selectTips", { name: s("mall.configlogistics.company") }), trigger: "blur" }, { validator: r, trigger: "change" }] : l.tableOption2.column[0].rules = [{ required: true, message: s("commons.selectTips", { name: s("mall.configlogistics.company") }), trigger: "blur" }], e();
  }
  return { ...F(l), beforeOpenCrud: C, handleGet: d, handleUpdate: _, handleDelCrud: v, handleUpdateCrud: $, handleSaveCrud: T };
} }, P = { class: "clearfix" }, Q = { class: "jl-text-tips" }, X = { key: 0 }, Y = { key: 1 };
function Z(t, r, l, d, _, $) {
  const T = m("TopRight"), v = m("el-icon"), C = m("el-link"), e = m("el-radio"), a = m("el-radio-group"), i = m("el-form-item"), c = m("el-form"), p = m("el-col"), D = m("el-row"), I = m("el-image"), R = m("avue-crud"), V = m("avue-form"), w = m("el-button"), B = m("el-card"), O = L;
  return b(), h("div", null, [n(O, null, { default: o(() => [n(B, { class: "box-card" }, { header: o(() => [g("div", P, [g("span", null, u(t.$t("mall.configlogistics.kdConfig")), 1), n(C, { type: "primary", class: "ml-2", target: "_blank", href: "https://api.kuaidi100.com/login/" }, { default: o(() => [y(u(t.$t("mall.configlogistics.kd100")), 1), n(v, null, { default: o(() => [n(T)]), _: 1 })]), _: 1 })])]), default: o(() => [n(c, { "label-position": "left", class: "pl-[30px]" }, { default: o(() => [n(i, { label: t.$t("mall.configlogistics.isSelf"), "label-width": "200", class: "mt-2" }, { default: o(() => [g("div", null, [n(a, { modelValue: t.form.isSelf, "onUpdate:modelValue": r[0] || (r[0] = (f) => t.form.isSelf = f) }, { default: o(() => [n(e, { value: "1" }, { default: o(() => [y(u(t.$t("commons.yes")), 1)]), _: 1 }), n(e, { value: "0" }, { default: o(() => [y(u(t.$t("commons.no")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue"]), r[4] || (r[4] = g("br", null, null, -1)), g("div", Q, u(t.$t("mall.configlogistics.isSelfTip")), 1)])]), _: 1 }, 8, ["label"])]), _: 1 }), t.form.isSelf == "1" ? (b(), S(V, { key: 0, modelValue: t.form, "onUpdate:modelValue": r[2] || (r[2] = (f) => t.form = f), style: { "padding-left": "30px", "margin-top": "-20px" }, option: t.tableOption, onSubmit: d.handleUpdate }, { logisticsCompany: o(() => [n(R, { ref: "crud", modelValue: t.form2, "onUpdate:modelValue": r[1] || (r[1] = (f) => t.form2 = f), maxHeight: 220, onRowUpdate: d.handleUpdateCrud, onRowSave: d.handleSaveCrud, "before-open": d.beforeOpenCrud, onRowDel: d.handleDelCrud, data: t.tableData2, option: t.tableOption2 }, { expand: o(({ row: f }) => [f.labelTemplates ? (b(), h("div", X, [(b(true), h(H, null, K(f.labelTemplates, (k, U) => (b(), S(D, { type: "flex", justify: "center", key: U }, { default: o(() => [n(p, { span: 10, offset: 2 }, { default: o(() => [g("div", null, u(t.$t("mall.configlogistics.templateId")) + "\uFF1A" + u(k.templateId), 1)]), _: 2 }, 1024), n(p, { span: 10, offset: 2 }, { default: o(() => [g("div", null, u(t.$t("mall.configlogistics.templateName")) + "\uFF1A" + u(k.templateName), 1)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128))])) : G("", true)]), "labelTemplatesTip-form": o(() => [n(I, { src: "/img/tip/kuaidi100-tip.jpg" })]), _: 1 }, 8, ["modelValue", "onRowUpdate", "onRowSave", "before-open", "onRowDel", "data", "option"])]), _: 1 }, 8, ["modelValue", "option", "onSubmit"])) : (b(), h("div", Y, [n(D, { justify: "center", style: { width: "100%" } }, { default: o(() => [n(w, { type: "primary", icon: "Check", onClick: r[3] || (r[3] = (f) => d.handleUpdate(t.form)) }, { default: o(() => [y(u(t.$t("commons.submit")), 1)]), _: 1 })]), _: 1 })]))]), _: 1 })]), _: 1 })]);
}
const ae = z(J, [["render", Z]]);
export {
  ae as default
};
