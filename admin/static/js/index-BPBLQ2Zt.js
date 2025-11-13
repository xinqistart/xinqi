import { aO as c, n as _, A as j, R as I, t as E, S as M, b1 as A, _ as H, r as u, c as O, o as C, b as s, h as d, e as b, F as P, v as R, g as z, f as y, z as h, a_ as K } from "./index-DAdfXJ2i.js";
function G(e) {
  return c.request("get", "/gen/generator/page", { params: e });
}
function Y(e) {
  return c.request("get", "/gen/dsconf/page", { params: e });
}
function x() {
  return c.request("get", "/gen/dsconf/list");
}
function J(e) {
  return c.request("post", "/gen/dsconf/", { data: e });
}
function Q(e) {
  return c.request("delete", "/gen/dsconf/" + e);
}
function Z(e) {
  return c.request("put", "/gen/dsconf/", { data: e });
}
function W(e) {
  return c.request("post", "/gen/generator/view", { data: e });
}
function X(e) {
  return c.request("post", "/gen/generator/code", { data: e, responseType: "arraybuffer" }).then((a) => {
    const v = new Blob([a.data], { type: "application/zip" });
    a = e.tableName + ".zip";
    const o = document.createElement("a");
    o.href = URL.createObjectURL(v), o.download = a, document.body.appendChild(o), o.click(), window.setTimeout(function() {
      URL.revokeObjectURL(v), document.body.removeChild(o);
    }, 0);
  });
}
const q = (e) => c.request("get", "/gen/gentable/" + e), ee = (e) => c.request("put", "/gen/gentable", { data: e }), { $t: l } = _(), ae = { dialogDrag: true, index: true, menuAlign: "center", align: "center", addBtn: false, editBtn: false, delBtn: false, excelBtn: true, printBtn: false, menuType: "text", searchMenuSpan: 6, column: [{ label: l("gen.gen.tableName"), prop: "tableName", sortable: true, align: "center" }, { label: l("gen.gen.tableComment"), prop: "tableComment", align: "center" }, { label: l("gen.gen.engine"), prop: "ENGINE", align: "center", hide: true }, { type: "datetime", valueFormat: "timestamp", format: "YYYY-MM-DD HH:mm:ss", label: l("gen.gen.createTime"), sortable: true, prop: "createTime", align: "center" }] }, te = { emptyBtn: false, column: [{ label: l("gen.gen.tableName"), prop: "tableName", disabled: true }, { label: l("gen.gen.serviceName"), prop: "genKey", type: "select", sortable: true, align: "center", rules: [{ required: true, message: l("gen.gen.enterServiceRouteKey"), trigger: "blur" }], dicUrl: "/gen/generator/genkey/list" }, { label: l("gen.gen.packageName"), prop: "packageName", placeholder: l("gen.gen.defaultPackageName") }, { label: l("gen.gen.module"), prop: "moduleName", placeholder: l("gen.gen.defaultModule") }, { label: l("gen.gen.author"), prop: "author", placeholder: l("gen.gen.defaultAuthor") }, { label: l("gen.gen.tablePrefix"), prop: "tablePrefix", placeholder: l("gen.gen.removePrefix") }, { label: l("gen.gen.comment"), prop: "tableComment", placeholder: l("gen.gen.loadTableComments") }] }, ne = { dialogDrag: true, index: true, indexLabel: l("commons.indexLabel"), menuAlign: "center", align: "center", column: [{ label: l("gen.gen.primaryKey"), prop: "id", hide: true, addDisplay: false, editDisplay: false }, { label: l("commons.createTime"), prop: "createTime", addDisplay: false, editDisplay: false, overHidden: true }, { label: l("gen.gen.updateTime"), prop: "updateTime", overHidden: true, addDisplay: false, editDisplay: false }, { label: l("gen.gen.username"), prop: "username", rules: [{ required: true, message: l("commons.notNull"), trigger: "blur" }] }, { label: l("gen.gen.password"), prop: "password" }, { label: l("gen.gen.name"), prop: "name", rules: [{ required: true, message: l("commons.notNull"), trigger: "blur" }] }, { label: "jdbcUrl", prop: "url", rules: [{ required: true, message: l("commons.notNull"), trigger: "blur" }], type: "textarea", overHidden: true, labelTip: "\u4F8B\u5982\uFF1Ajdbc:mysql://localhost:3306/\u4F60\u7684\u5E93\u540D?characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8&allowMultiQueries=true&allowPublicKeyRetrieval=true" }] }, oe = { setup() {
  const { proxy: e } = j(), a = I({ dsBox: false, q: { tableName: "", sysDatasourceId: "" }, dataSourceList: [], tableData: [], tableDsData: [], formData: {}, box: false, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, dsPage: { total: 0, currentPage: 1, pageSize: 20 }, dsForm: { password: "" }, tableLoading: false, tableOption: ae, tableDsOption: ne, formOption: te, previewData: [], preview: { open: false, title: e.$t("gen.gen.preview"), data: {}, activeName: "Entity.java" } });
  E(() => {
    n();
  });
  function v(t) {
    const r = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (a.page.descs = "", a.page.ascs = r) : t.order == "descending" ? (a.page.ascs = "", a.page.descs = r) : (a.page.ascs = "", a.page.descs = ""), o(a.page);
  }
  function o(t, r) {
    a.tableLoading = true, G(Object.assign({ current: t.currentPage, size: t.pageSize, descs: a.page.descs, ascs: a.page.ascs }, r, A(a.q))).then((g) => {
      a.tableData = g.data.records, a.page.total = g.data.total, a.page.currentPage = t.currentPage, a.page.pageSize = t.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function k() {
    a.tableData && a.tableData.forEach((t) => {
      w(t);
    });
  }
  function U(t) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return Q(t.id);
    }).then(() => {
      e.$message.success(e.$t("commons.delSuccess")), i(a.page), n();
    });
  }
  function N(t) {
    a.dsForm.password = void 0, t();
  }
  function L(t, r, g, F) {
    Z(t).then(() => {
      e.$message.success(e.$t("commons.updateSuccess")), g(), i(a.page), n();
    }).catch(() => {
      F();
    });
  }
  function m(t, r, g) {
    J(t).then(() => {
      e.$message.success(e.$t("commons.addSuccess")), r(), i(a.page), n();
    }).catch(() => {
      g();
    });
  }
  function i(t, r) {
    Y(Object.assign({ current: t.currentPage, size: t.pageSize }, r)).then((g) => {
      a.tableDsData = g.data.records, a.dsPage.total = g.data.total;
    });
  }
  function S(t) {
    q(t.tableName).then((r) => {
      r.data ? (r.data.sysDatasourceId = a.q.sysDatasourceId, W(r.data).then((g) => {
        a.preview.data = g.data, a.preview.open = true;
      })) : e.$confirm(e.$t("gen.gen.configTip"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
        f(t);
      });
    });
  }
  function w(t) {
    q(t.tableName).then((r) => {
      r.data ? (r.data.sysDatasourceId = a.q.sysDatasourceId, X(r.data).then(() => {
      })) : e.$confirm(e.$t("gen.gen.configTip"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
        f(t);
      });
    });
  }
  function f(t) {
    q(t.tableName).then((r) => {
      a.formData = r.data, a.formData == null && (a.formData = { id: "", genKey: "", tableName: t.tableName, tableComment: "", packageName: "", moduleName: "", author: "", tablePrefix: "" }), a.box = true;
    });
  }
  function B(t, r) {
    ee(a.formData).then(() => {
      a.box = false, r();
    }).catch(() => {
      r();
    });
  }
  function D() {
    o(a.page);
  }
  function T() {
    i(a.page);
  }
  function V() {
    a.dsBox = true;
  }
  function $() {
    o(a.page);
  }
  function n() {
    x().then((t) => {
      a.dataSourceList = t.data;
    });
  }
  function p(t) {
    return t.substring(t.lastIndexOf("/") + 1, t.indexOf(".vm"));
  }
  return { ...M(a), extractLabel: p, sortChange: v, getPageF: o, handleDel: U, handleOpenBefore: N, handleUpdate: L, handleSave: m, getDsList: i, handleCodeView: S, batchDownload: k, generatorCodeF: w, handleConfig: f, putGenTableF: B, refreshChange: D, refreshDsChange: T, setting: V, searchChange: $, getdataSourceList: n };
} }, le = { class: "grid-content", style: { "margin-bottom": "10px" } }, re = { class: "grid-content" }, se = { class: "grid-content" }, de = { class: "grid-content" }, ie = { class: "pull-auto" };
function ge(e, a, v, o, k, U) {
  const N = u("el-option"), L = u("el-select"), m = u("el-col"), i = u("el-button"), S = u("el-input"), w = u("el-row"), f = u("avue-crud"), B = u("avue-form"), D = u("el-dialog"), T = u("el-tab-pane"), V = u("el-tabs"), $ = K;
  return C(), O("div", null, [s($, null, { default: d(() => [s(w, { style: { padding: "20px" }, gutter: 18 }, { default: d(() => [s(m, { span: 4 }, { default: d(() => [b("div", le, [s(L, { modelValue: e.q.sysDatasourceId, "onUpdate:modelValue": a[0] || (a[0] = (n) => e.q.sysDatasourceId = n), placeholder: e.$t("gen.gen.selectDatasourceId"), onChange: o.searchChange }, { default: d(() => [(C(true), O(P, null, R(e.dataSourceList, (n) => (C(), z(N, { key: n.id, label: n.name, value: n.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])])]), _: 1 }), s(m, { span: 3 }, { default: d(() => [b("div", re, [s(i, { type: "primary", onClick: o.setting, onClose: a[1] || (a[1] = (n) => e.dsBox = false) }, { default: d(() => [y(h(e.$t("gen.gen.datasourceConfig")), 1)]), _: 1 }, 8, ["onClick"])])]), _: 1 }), s(m, { span: 6 }, { default: d(() => [b("div", se, [s(S, { modelValue: e.q.tableName, "onUpdate:modelValue": a[2] || (a[2] = (n) => e.q.tableName = n), placeholder: e.$t("gen.gen.tableName") }, null, 8, ["modelValue", "placeholder"])])]), _: 1 }), s(m, { span: 3 }, { default: d(() => [b("div", de, [s(i, { type: "primary", onClick: o.searchChange }, { default: d(() => [y(h(e.$t("commons.search")), 1)]), _: 1 }, 8, ["onClick"])])]), _: 1 })]), _: 1 }), s(f, { ref: "crud", page: e.page, "onUpdate:page": a[3] || (a[3] = (n) => e.page = n), data: e.tableData, "table-loading": e.tableLoading, option: e.tableOption, onOnLoad: o.getPageF, onSortChange: o.sortChange, onRefreshChange: o.refreshChange }, { menu: d((n) => [s(i, { type: "primary", link: "", onClick: (p) => o.handleCodeView(n.row) }, { default: d(() => [y(h(e.$t("gen.gen.preview")), 1)]), _: 1 }, 8, ["onClick"]), s(i, { type: "primary", link: "", onClick: (p) => o.handleConfig(n.row) }, { default: d(() => [y(h(e.$t("gen.gen.config")), 1)]), _: 1 }, 8, ["onClick"]), s(i, { type: "primary", link: "", onClick: (p) => o.generatorCodeF(n.row) }, { default: d(() => [y(h(e.$t("gen.gen.generatorCode")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onOnLoad", "onSortChange", "onRefreshChange"]), s(D, { title: e.$t("gen.gen.config"), modelValue: e.box, "onUpdate:modelValue": a[5] || (a[5] = (n) => e.box = n), width: "50%", "lock-scroll": "" }, { default: d(() => [b("div", ie, [s(B, { option: e.formOption, ref: "formRef", modelValue: e.formData, "onUpdate:modelValue": a[4] || (a[4] = (n) => e.formData = n), onSubmit: o.putGenTableF }, null, 8, ["option", "modelValue", "onSubmit"])])]), _: 1 }, 8, ["title", "modelValue"]), s(D, { title: e.$t("gen.gen.datasourceConfig"), modelValue: e.dsBox, "onUpdate:modelValue": a[8] || (a[8] = (n) => e.dsBox = n), width: "90%", "table-loading": e.tableLoading, onClose: a[9] || (a[9] = (n) => e.dsBox = false) }, { default: d(() => [s(f, { ref: "data-source-settings-crud", value: e.dsForm, "onUpdate:value": a[6] || (a[6] = (n) => e.dsForm = n), page: e.dsPage, "onUpdate:page": a[7] || (a[7] = (n) => e.dsPage = n), data: e.tableDsData, option: e.tableDsOption, "before-open": o.handleOpenBefore, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel, onRefreshChange: o.refreshDsChange, onOnLoad: o.getDsList }, null, 8, ["value", "page", "data", "option", "before-open", "onRowUpdate", "onRowSave", "onRowDel", "onRefreshChange", "onOnLoad"])]), _: 1 }, 8, ["title", "modelValue", "table-loading"]), s(D, { title: e.preview.title, modelValue: e.preview.open, "onUpdate:modelValue": a[11] || (a[11] = (n) => e.preview.open = n), width: "80%", top: "5vh" }, { default: d(() => [s(V, { modelValue: e.preview.activeName, "onUpdate:modelValue": a[10] || (a[10] = (n) => e.preview.activeName = n) }, { default: d(() => [(C(true), O(P, null, R(e.preview.data, (n, p) => (C(), z(T, { label: o.extractLabel(p), name: o.extractLabel(p), key: p }, { default: d(() => [b("pre", null, h(n), 1)]), _: 2 }, 1032, ["label", "name"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 })]);
}
const ce = H(oe, [["render", ge]]);
export {
  ce as default
};
