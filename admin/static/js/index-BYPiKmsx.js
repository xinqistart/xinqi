import { n as Z, A as G, R as H, p as N, t as Q, K as X, q as Y, S as ee, b1 as q, cm as ae, _ as te, r as u, c as y, o as b, b as i, h as o, e as p, z as m, w as se, F as W, v as j, x as le, D as ne, g as P, f as v, B as F, C as oe, a_ as re } from "./index-DAdfXJ2i.js";
import { b as pe, g as ie, s as me, a as de, p as ge, d as ue } from "./wxtemplatemsg-CoX4ZmA5.js";
import { b as ce } from "./wxapp-BACewdCT.js";
import { t as be, g as fe } from "./wxuser-CjU5rPob.js";
const { $t: s } = Z(), we = { dialogDrag: true, indexLabel: s("commons.indexLabel"), menuAlign: "center", align: "center", dialogWidth: "80%", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, addBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 110, searchGutter: 50, searchLabelPosition: "right", column: [{ label: s("commons.enabled"), prop: "enable", type: "radio", search: true, sortable: true, span: 8, rules: [{ required: true, message: s("commons.notNull"), trigger: "blur" }], dicData: [{ label: s("commons.close"), value: "0" }, { label: s("commons.open"), value: "1" }] }, { label: s("wxmp.wxtemplatemsg.useType"), prop: "useType", type: "select", search: true, editDisabled: true, span: 12, rules: [{ required: true, message: s("wxmp.wxtemplatemsg.useType") + s("commons.notNull"), trigger: "blur" }], dicData: [{ label: s("wxmp.wxtemplatemsg.orderSubmittedSuccessfully"), value: "1" }, { label: s("wxmp.wxtemplatemsg.orderPaymentSuccess"), value: "2" }, { label: s("wxmp.wxtemplatemsg.orderShippingReminder"), value: "3" }] }, { label: s("wxmp.wxtemplatemsg.priTmplId"), prop: "priTmplId", span: 8, rules: [{ required: true, message: s("wxmp.wxtemplatemsg.priTmplId") + s("commons.notNull"), trigger: "blur" }] }, { label: s("wxmp.wxtemplatemsg.title"), prop: "title", span: 8, rules: [{ required: true, message: s("wxmp.wxtemplatemsg.title") + s("commons.notNull"), trigger: "blur" }] }, { label: s("wxmp.wxtemplatemsg.preview"), hide: true, prop: "preview", span: 8 }, { label: s("wxmp.wxtemplatemsg.content"), prop: "content", type: "dynamic", hide: true, span: 16, rules: [{ required: true, message: s("wxmp.wxtemplatemsg.content") + s("commons.notNull"), trigger: "blur" }], children: { align: "center", headerAlign: "center", height: "340px", column: [{ label: s("wxmp.wxtemplatemsg.title"), prop: "name", rules: [{ required: true, message: s("wxmp.wxtemplatemsg.enterTemplateTitle"), trigger: "blur" }] }, { label: s("wxmp.wxtemplatemsg.correspondingAttribute"), prop: "attribute", type: "select", filterable: true, allowCreate: true, rules: [{ required: true, message: s("wxmp.wxtemplatemsg.selectCorrespondingAttribute"), trigger: "blur" }], dicData: pe }] } }, { label: s("wxmp.wxtemplatemsg.maAppId"), prop: "maAppId", type: "select", hide: true, props: { label: "name", value: "id" }, filterable: true, dicUrl: "/weixin/wxapp/list?appType=1", labelTip: s("wxmp.wxtemplatemsg.templateJumpDescription") }] }, he = { dialogDrag: true, indexLabel: s("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, addBtn: false, viewBtn: true, column: [{ label: s("wxmp.wxtemplatemsg.templateId"), prop: "templateId", rules: [{ required: true, message: s("wxmp.wxtemplatemsg.enterTemplateId"), trigger: "blur" }] }, { label: s("wxmp.wxtemplatemsg.jumpLink"), prop: "url", labelTip: s("wxmp.wxtemplatemsg.templateJumpLink") }, { label: s("wxmp.wxtemplatemsg.templateContent"), prop: "data", type: "dynamic", hide: true, span: 24, rules: [{ required: true, message: s("wxmp.wxtemplatemsg.enterTemplateContent"), trigger: "blur" }], children: { align: "center", headerAlign: "center", column: [{ label: s("wxmp.wxtemplatemsg.title"), prop: "name", rules: [{ required: true, message: s("commons.notNull"), trigger: "blur" }] }, { label: s("wxmp.wxtemplatemsg.colorValue"), prop: "value", rules: [{ required: true, message: s("commons.notNull"), trigger: "blur" }] }] } }, { label: s("wxmp.wxtemplatemsg.miniProgram"), prop: "appid", bind: "miniProgram.appid", type: "select", props: { label: "name", value: "id" }, dicUrl: "/weixin/wxapp/list?appType=1", labelTip: s("wxmp.wxtemplatemsg.templateJumpDescription") }, { label: s("wxmp.wxtemplatemsg.templatePage"), prop: "pagePath", labelWidth: 120, bind: "miniProgram.pagePath", labelTip: s("wxmp.wxtemplatemsg.specificPagePathForMiniProgram") }, { label: s("wxmp.wxtemplatemsg.user"), prop: "toUser", span: 24, slot: true }] }, xe = { setup() {
  var _a;
  const { proxy: a } = G(), e = H({ filterText: "", treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, form: { useType: "", content: void 0, $maAppId: "", title: "" }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "" }, paramsSearch: {}, tableLoading: false, tableOption: we, dicDataUseType: [], dialogVisible: false, wxUserList: [], selectionData: [], dialogVisibleUser: false, tableOption2: be, tableData2: [], page2: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "subscribe_time" }, tableLoading2: false, paramsSearch2: {}, tableOption3: he, sendObj: {} }), D = N(null), n = N(null), I = N(null);
  Q(() => {
    var _a2;
    S(), e.dicDataUseType = (_a2 = n.value) == null ? void 0 : _a2.DIC.useType;
  });
  const C = (_a = X()) == null ? void 0 : _a.permissions, _ = Y(() => ({ addBtn: !!C["wxmp:wxtemplatemsg:add"], delBtn: !!C["wxmp:wxtemplatemsg:del"], editBtn: !!C["wxmp:wxtemplatemsg:edit"], viewBtn: !!C["wxmp:wxtemplatemsg:get"] }));
  function k(t, r) {
    return t ? r.name.indexOf(t) !== -1 : true;
  }
  function S() {
    ce({ appType: "2" }).then((t) => {
      e.treeWxAppData = t.data, e.treeWxAppData && e.treeWxAppData.length > 0 && w({ id: e.treeWxAppData[0].id });
    });
  }
  function w(t) {
    e.appId != t.id && (a.$nextTick(() => {
      I.value.setCurrentKey(t.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = t.id, e.paramsSearch = {}, n.value.searchReset(), c(e.page));
  }
  function A(t, r) {
    t = q(t), e.paramsSearch = t, e.page.currentPage = 1, c(e.page, t), r();
  }
  function O(t) {
    const r = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page.descs = "", e.page.ascs = r) : t.order == "descending" ? (e.page.ascs = "", e.page.descs = r) : (e.page.ascs = "", e.page.descs = ""), c(e.page);
  }
  function c(t, r) {
    e.appId && (e.tableLoading = true, ie(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page.descs, ascs: e.page.ascs, appId: e.appId }, r, e.paramsSearch)).then((g) => {
      e.tableData = g.data.records, e.page.total = g.data.total, e.page.currentPage = t.currentPage, e.page.pageSize = t.pageSize, e.tableLoading = false;
      const f = e.dicDataUseType;
      for (let h = 0; h < f.length; h++) {
        f[h].disabled = false;
        for (let x = 0; x < e.tableData.length; x++) f[h].value == e.tableData[x].useType && (f[h].disabled = true);
      }
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function V(t) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return ue(t.id);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), c(e.page);
    });
  }
  function $(t, r, g, f) {
    ge(Object.assign({ appId: e.appId }, t)).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), g(), c(e.page);
    }).catch(() => {
      f();
    });
  }
  function T(t, r, g) {
    de(Object.assign({ appId: e.appId }, t)).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), r(), c(e.page);
    }).catch(() => {
      g();
    });
  }
  function B() {
    c(e.page);
  }
  function L(t) {
    e.wxUserList.splice(t, 1);
  }
  function z() {
    let t = e.wxUserList;
    t = [...t, ...e.selectionData], e.wxUserList = ae(t), e.dialogVisibleUser = false;
  }
  function l() {
    e.tableData2 = [], e.dialogVisibleUser = true, D.value && D.value.searchReset(), U(e.page2);
  }
  function d(t, r) {
    const g = e.wxUserList;
    if (g.length > 0) {
      const f = [];
      g.forEach(function(x) {
        f.push(x.openId);
      });
      const h = f.join(",");
      t = Object.assign(t, { appId: e.appId, toUser: h }), me(t).then((x) => {
        a.$alert(x.data, a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm") }), r();
      }).catch(() => {
        r();
      });
    } else a.$message({ showClose: true, message: a.$t("wxmp.wxmassmsg.selectUsers"), type: "error" }), r();
  }
  function R() {
    U(e.page2);
  }
  function M(t) {
    const r = t.prop ? t.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    t.order == "ascending" ? (e.page2.descs = "", e.page2.ascs = r) : t.order == "descending" ? (e.page2.ascs = "", e.page2.descs = r) : (e.page2.ascs = "", e.page2.descs = ""), U(e.page2);
  }
  function E(t) {
    e.selectionData = t;
  }
  function J(t, r) {
    t = q(t), e.paramsSearch2 = t, e.page2.currentPage = 1, U(e.page2, t), r();
  }
  function U(t, r) {
    e.tableLoading2 = true, fe(Object.assign({ current: t.currentPage, size: t.pageSize, descs: e.page2.descs, ascs: e.page2.ascs, appId: e.appId, subscribe: "1" }, r, e.paramsSearch)).then((g) => {
      e.tableData2 = g.data.records, e.page2.total = g.data.total, e.page2.currentPage = t.currentPage, e.page2.pageSize = t.pageSize, e.tableLoading2 = false;
    }).catch(() => {
      e.tableLoading2 = false;
    });
  }
  function K() {
    e.dialogVisible = true;
  }
  return { ...ee(e), permissions: C, permissionList: _, filterNode: k, getWxAppListF: S, nodeClick: w, searchChange: A, sortChange: O, getPageF: c, handleDel: V, handleUpdate: $, handleSave: T, refreshChange: B, removeWxUser: L, subUser: z, showWxUserList: l, handleSubmit: d, refreshChange2: R, sortChange2: M, selectionChange2: E, searchChange2: J, getPage2F: U, openSend: K, tree: I, crud: n, crud2: D };
} }, ye = { class: "execution", style: { "border-top": "solid 1px #eceef6" } }, ve = { style: { display: "flex", "justify-content": "center" } }, Ce = { class: "preview" }, Se = { class: "screen" }, Ue = { class: "status-bar" }, De = { class: "message" }, Te = { class: "message-tittle" }, Le = { class: "message-tittle-1" }, Pe = { key: 0 }, Ie = { key: 1, class: "message-tittle-2" }, _e = { class: "message-tittle-3" }, ke = { class: "title" }, Ae = { class: "dialog-footer" };
function Oe(a, e, D, n, I, C) {
  const _ = u("avue-tree"), k = u("el-card"), S = u("el-col"), w = u("el-button"), A = u("el-radio"), O = u("el-radio-group"), c = u("avue-crud"), V = u("el-row"), $ = u("el-avatar"), T = u("el-tag"), B = u("avue-form"), L = u("el-dialog"), z = re;
  return b(), y("div", ye, [i(z, null, { default: o(() => [i(V, { span: 24, gutter: 10 }, { default: o(() => [i(S, { xs: 24, sm: 24, md: 3 }, { default: o(() => [i(k, { shadow: "never" }, { header: o(() => [p("div", ve, [p("span", null, m(a.$t("wxmp.wxtemplatemsg.appName")), 1)])]), default: o(() => [i(_, { option: a.treeOption, style: { "margin-top": "-1px" }, data: a.treeWxAppData, props: a.treeWxAppProps, ref: "tree", "filter-node-method": n.filterNode, "node-key": "id", "default-expand-all": "", onNodeClick: n.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 }), i(S, { xs: 24, sm: 24, md: 21 }, { default: o(() => [i(c, { ref: "crud", page: a.page, "onUpdate:page": e[2] || (e[2] = (l) => a.page = l), style: { "padding-left": "10px", "border-left": "solid 1px #eceef6" }, data: a.tableData, modelValue: a.form, "onUpdate:modelValue": e[3] || (e[3] = (l) => a.form = l), permission: n.permissionList, "table-loading": a.tableLoading, option: a.tableOption, onOnLoad: n.getPageF, onRefreshChange: n.refreshChange, onRowUpdate: n.handleUpdate, onRowSave: n.handleSave, onRowDel: n.handleDel, onSortChange: n.sortChange, onSearchChange: n.searchChange }, { "menu-left": o(() => [n.permissions["wxmp:wxtemplatemsg:add"] && a.tableData.length < 3 ? (b(), P(w, { key: 0, type: "primary", size: "small", icon: "Plus", onClick: e[0] || (e[0] = oe((l) => a.$refs.crud.rowAdd(), ["stop"])) }, { default: o(() => [v(m(a.$t("wxmp.wxtemplatemsg.new")), 1)]), _: 1 })) : F("", true), n.permissions["wxmp:wxtemplatemsg:send"] ? (b(), P(w, { key: 1, type: "primary", size: "small", icon: "Promotion", onClick: n.openSend }, { default: o(() => [v(m(a.$t("wxmp.wxtemplatemsg.sendTemplateMessage")), 1)]), _: 1 }, 8, ["onClick"])) : F("", true)]), "useType-form": o(({ type: l }) => [i(O, { modelValue: a.form.useType, "onUpdate:modelValue": e[1] || (e[1] = (d) => a.form.useType = d), size: "small", disabled: l != "add" }, { default: o(() => [(b(true), y(W, null, j(a.dicDataUseType, (d) => (b(), P(A, { key: d.value, border: "", label: d.value, disabled: d.disabled }, { default: o(() => [v(m(d.label), 1)]), _: 2 }, 1032, ["label", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), "preview-form": o(() => [p("div", null, [p("div", Ce, [p("div", Se, [e[10] || (e[10] = p("div", { class: "notch" }, null, -1)), p("div", Ue, m(a.form.$maAppId), 1), e[11] || (e[11] = p("div", { class: "message-time" }, "12:56", -1)), p("div", De, [p("div", Te, [p("span", null, m(a.form.title), 1), e[9] || (e[9] = p("span", { style: { "line-height": "20px" } }, "...", -1))]), p("div", Le, [(b(true), y(W, null, j(a.form.content, (l, d) => (b(), y("div", { key: d }, [l.name == "first" ? (b(), y("div", Pe, m(l.attribute), 1)) : (b(), y("div", Ie, [p("span", null, m(l.name) + "\uFF1A", 1), p("span", { style: le({ color: l.color || "#333333" }) }, m(l.name), 5)]))]))), 128)), se(p("div", _e, [p("span", null, m(a.form.$maAppId), 1), p("span", null, m(a.$t("wxmp.wxtemplatemsg.miniProgram")), 1)], 512), [[ne, a.form.$maAppId]])])]), e[12] || (e[12] = p("div", { class: "screen-bottom" }, null, -1))])])])]), _: 1 }, 8, ["page", "data", "modelValue", "permission", "table-loading", "option", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]), _: 1 }), i(L, { modelValue: a.dialogVisible, "onUpdate:modelValue": e[5] || (e[5] = (l) => a.dialogVisible = l), title: a.$t("wxmp.wxtemplatemsg.sendTemplateMessage"), width: "900px" }, { default: o(() => [i(B, { value: a.sendObj, "onUpdate:value": e[4] || (e[4] = (l) => a.sendObj = l), option: a.tableOption3, onSubmit: n.handleSubmit }, { toUser: o(() => [i(w, { type: "primary", size: "small", onClick: n.showWxUserList }, { default: o(() => [v(m(a.$t("wxmp.wxtemplatemsg.selectUsers")), 1)]), _: 1 }, 8, ["onClick"]), e[13] || (e[13] = p("p", null, null, -1)), (b(true), y(W, null, j(a.wxUserList, (l, d) => (b(), P(T, { key: l.id, effect: "plain", style: { height: "unset", "padding-top": "5px", margin: "5px" }, closable: "", onClose: (R) => n.removeWxUser(d) }, { default: o(() => [i($, { src: l.headimgUrl }, null, 8, ["src"]), p("div", ke, m(l.nickName), 1)]), _: 2 }, 1032, ["onClose"]))), 128))]), _: 1 }, 8, ["value", "option", "onSubmit"])]), _: 1 }, 8, ["modelValue", "title"]), i(L, { modelValue: a.dialogVisibleUser, "onUpdate:modelValue": e[8] || (e[8] = (l) => a.dialogVisibleUser = l), title: a.$t("wxmp.wxtemplatemsg.selectUsers"), width: "80%" }, { footer: o(() => [p("span", Ae, [i(w, { onClick: e[7] || (e[7] = (l) => a.dialogVisibleUser = false) }, { default: o(() => [v(m(a.$t("commons.cancel")), 1)]), _: 1 }), i(w, { type: "primary", onClick: n.subUser }, { default: o(() => [v(m(a.$t("commons.confirm")), 1)]), _: 1 }, 8, ["onClick"])])]), default: o(() => [i(c, { ref: "crud2", page: a.page2, "onUpdate:page": e[6] || (e[6] = (l) => a.page2 = l), data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOption2, onOnLoad: n.getPage2F, onRefreshChange: n.refreshChange2, onSortChange: n.sortChange2, onSearchChange: n.searchChange2, onSelectionChange: n.selectionChange2 }, { sex: o((l) => [i(T, { size: "small", effect: "light", type: l.row.sex == "1" ? "primary" : l.row.sex == "2" ? "danger" : "warning" }, { default: o(() => [v(m(l.row.$sex), 1)]), _: 2 }, 1032, ["type"])]), _: 1 }, 8, ["page", "data", "table-loading", "option", "onOnLoad", "onRefreshChange", "onSortChange", "onSearchChange", "onSelectionChange"])]), _: 1 }, 8, ["modelValue", "title"])]), _: 1 })]);
}
const Ne = te(xe, [["render", Oe], ["__scopeId", "data-v-fb95c97a"]]);
export {
  Ne as default
};
