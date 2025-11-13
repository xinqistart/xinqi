import { A as R, R as B, n as S, t as O, S as V, _ as w, r, c as y, o as g, b as p, h as c, B as U, F as q, v as x, g as E, e as b, z as d, f as j, a_ as A } from "./index-DAdfXJ2i.js";
import { a as F, p as $ } from "./configlogistics-CtSivpVp.js";
import { d as z, t as G } from "./configlogistics-fC4Iyj6M.js";
const { $t: l } = S(), H = { setup() {
  const { proxy: a } = R(), u = (e, o, n) => {
    const s = t.tableData2.map((i) => i.code);
    s && s.includes(t.form2.code) ? n(new Error(l("mall.configlogistics.codeNotRepeat"))) : n();
  }, t = B({ form: {}, tableOption: G, templates: {}, form2: { $name: "", code: "" }, tableDataIds2: [], tableData2: [], tableOption2: { menuBtn: false, printBtn: false, filterBtn: false, refreshBtn: false, labelWidth: 190, expand: true, rowKey: "code", column: [{ label: l("mall.configlogistics.company"), prop: "name", type: "select", filterable: true, editDisabled: true, props: { label: "name", value: "code" }, rules: [], dicData: [...z], change: (e) => {
    e.column.boxType == "add" && (t.form2.code = e.value);
  } }, { label: l("mall.configlogistics.companyCode"), addDisabled: true, editDisabled: true, prop: "code" }, { label: l("mall.configlogistics.labelTemplates"), prop: "labelTemplates", type: "dynamic", hide: true, span: 24, labelTip: l("mall.configlogistics.labelTemplatesTip") + "https://api.kuaidi100.com/manager/v2/shipping-label/template-shipping-label", children: { align: "center", headerAlign: "center", column: [{ label: l("mall.configlogistics.templateId"), prop: "templateId", rules: [{ required: true, message: l("mall.configlogistics.templateId") + l("commons.isRequired"), trigger: "blur" }] }, { label: l("mall.configlogistics.templateName"), prop: "templateName", rules: [{ required: true, message: l("mall.configlogistics.templateName") + l("commons.isRequired"), trigger: "blur" }] }] } }, { label: l("commons.note"), prop: "labelTemplatesTip", hide: true, span: 24 }] } });
  O(() => {
    m();
  });
  function m() {
    F().then((e) => {
      t.form = e.data ? e.data : {}, t.tableData2 = e.data.logisticsCompany ? e.data.logisticsCompany : [];
    });
  }
  function C(e, o) {
    if (t.tableData2) {
      const n = [];
      t.tableData2.map((s) => {
        n.push({ code: s.code, name: s.$name, labelTemplates: s.labelTemplates });
      }), e.logisticsCompany = n;
    } else e.logisticsCompany = "";
    e.id ? $(e).then(() => {
      o(), m(), a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      o();
    }) : $(e).then(() => {
      o(), m(), a.$message({ showClose: true, message: a.$t("commons.submitSuccess"), type: "success" });
    }).catch(() => {
      o();
    });
  }
  function D(e, o, n) {
    const s = [];
    e.labelTemplates && e.labelTemplates.forEach((i) => {
      s.push({ templateId: i.templateId, templateName: i.templateName });
    }), t.tableData2.forEach((i) => {
      i.code === e.code && (i.labelTemplates = s);
    }), n();
  }
  function h(e, o) {
    const n = [];
    e.labelTemplates && e.labelTemplates.forEach((i) => {
      n.push({ templateId: i.templateId, templateName: i.templateName });
    });
    const s = { code: e.code, name: t.form2.$name, labelTemplates: n };
    t.tableData2.push(s), o();
  }
  function _(e) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      t.tableData2.forEach((o, n) => {
        o.code === e.code && t.tableData2.splice(n, 1);
      });
    });
  }
  function T(e, o) {
    o === "add" ? t.tableOption2.column[0].rules = [{ required: true, message: l("commons.selectTips", { name: l("mall.configlogistics.company") }), trigger: "blur" }, { validator: u, trigger: "change" }] : t.tableOption2.column[0].rules = [{ required: true, message: l("commons.selectTips", { name: l("mall.configlogistics.company") }), trigger: "blur" }], e();
  }
  return { ...V(t), beforeOpenCrud: T, handleGet: m, handleUpdate: C, handleDelCrud: _, handleUpdateCrud: D, handleSaveCrud: h };
} }, K = { class: "clearfix" }, L = { key: 0 };
function M(a, u, t, m, C, D) {
  const h = r("TopRight"), _ = r("el-icon"), T = r("el-link"), e = r("el-col"), o = r("el-row"), n = r("el-image"), s = r("avue-crud"), i = r("avue-form"), N = r("el-card"), k = A;
  return g(), y("div", null, [p(k, null, { default: c(() => [p(N, { class: "box-card" }, { header: c(() => [b("div", K, [b("span", null, d(a.$t("commons.platform")) + d(a.$t("mall.configlogistics.kdConfig")), 1), p(T, { type: "primary", class: "ml-2", target: "_blank", href: "https://api.kuaidi100.com/login/" }, { default: c(() => [j(d(a.$t("mall.configlogistics.kd100")), 1), p(_, null, { default: c(() => [p(h)]), _: 1 })]), _: 1 })])]), default: c(() => [p(i, { style: { "padding-left": "30px", "margin-top": "20px" }, modelValue: a.form, "onUpdate:modelValue": u[1] || (u[1] = (f) => a.form = f), option: a.tableOption, onSubmit: m.handleUpdate }, { logisticsCompany: c(() => [p(s, { ref: "crud", maxHeight: 220, modelValue: a.form2, "onUpdate:modelValue": u[0] || (u[0] = (f) => a.form2 = f), onRowUpdate: m.handleUpdateCrud, onRowSave: m.handleSaveCrud, onRowDel: m.handleDelCrud, "before-open": m.beforeOpenCrud, data: a.tableData2, option: a.tableOption2 }, { expand: c(({ row: f }) => [f.labelTemplates ? (g(), y("div", L, [(g(true), y(q, null, x(f.labelTemplates, (v, I) => (g(), E(o, { type: "flex", justify: "center", key: I }, { default: c(() => [p(e, { span: 10, offset: 2 }, { default: c(() => [b("div", null, d(a.$t("mall.configlogistics.templateId")) + "\uFF1A" + d(v.templateId), 1)]), _: 2 }, 1024), p(e, { span: 10, offset: 2 }, { default: c(() => [b("div", null, d(a.$t("mall.configlogistics.templateName")) + "\uFF1A" + d(v.templateName), 1)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128))])) : U("", true)]), "labelTemplatesTip-form": c(() => [p(n, { src: "/img/tip/kuaidi100-tip.jpg" })]), _: 1 }, 8, ["modelValue", "onRowUpdate", "onRowSave", "onRowDel", "before-open", "data", "option"])]), _: 1 }, 8, ["modelValue", "option", "onSubmit"])]), _: 1 })]), _: 1 })]);
}
const Q = w(H, [["render", M]]);
export {
  Q as default
};
