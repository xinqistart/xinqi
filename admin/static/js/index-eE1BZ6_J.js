import { d as R, A as O, p as L, r as u, c as S, o as p, F as j, b as n, e as b, g as $, B as w, z as c, h as a, f as h, ai as F, u as P, aO as U, n as A, R as G, K as E, q as K, S as Z, aA as f, b1 as W, _ as J, a_ as Q } from "./index-DAdfXJ2i.js";
import { _ as X } from "./goods-select-DrMu2Gwf.js";
import { a as ee } from "./user-CcdA_mZX.js";
import { t as te } from "./user-HkervIX0.js";
import { M as oe } from "./list-CpVj7t9v.js";
import "./goodsspu-Dmc9OYVL.js";
import "./goodsspu-DKL_9wDU.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const le = { key: 0 }, se = { class: "flex-c" }, ae = { key: 0, class: "flex items-center" }, ne = { key: 1, class: "flex-c justify-start" }, ie = { key: 0, style: { position: "relative" } }, re = R({ __name: "index", props: { userId: { type: [String, Number] }, nickName: { type: String }, headimgUrl: { type: String }, setSlot: { type: Boolean, default: false }, userInfo: { default: () => ({}), type: Object } }, setup(e) {
  const { proxy: t } = O(), y = e, r = L(false), g = L(y.userInfo);
  function C() {
    r.value = true, y.userId && ee(y.userId).then((v) => {
      v.data ? g.value = v.data : (g.value = {}, t.$message.error(t.$t("commons.notFoundUser")));
    });
  }
  return (v, I) => {
    const N = u("el-avatar"), _ = u("el-button"), x = u("el-text"), Y = u("UserFilled"), B = u("el-icon"), k = u("avue-form"), V = u("el-dialog");
    return p(), S(j, null, [e.setSlot ? (p(), S("div", { key: 1, style: { display: "inline-block" }, onClick: C }, [F(v.$slots, "default")])) : (p(), S("div", le, [b("div", se, [e.headimgUrl || e.userInfo && e.userInfo.headimgUrl ? (p(), $(N, { key: 0, src: e.headimgUrl || e.userInfo.headimgUrl, size: 45, class: "mr-1" }, null, 8, ["src"])) : w("", true), b("div", null, [e.userInfo && e.userInfo.nickName ? (p(), S("div", ae, [b("span", null, c(v.$t("mall.userinfo.nickName")) + ":", 1), n(_, { link: "", type: "primary", onClick: C }, { default: a(() => [h(c(e.userInfo ? e.userInfo.nickName : e.nickName || e.userId), 1)]), _: 1 })])) : w("", true), e.userInfo && e.userInfo.userCode ? (p(), S("div", ne, [n(x, null, { default: a(() => [h(c(v.$t("mall.shopuser.username")) + ": " + c(e.userInfo.userCode), 1)]), _: 1 })])) : (p(), S("div", { key: 2, class: "flex-c justify-start", onClick: C }, [n(_, { link: "" }, { default: a(() => [n(B, null, { default: a(() => [n(Y)]), _: 1 }), h(c(e.userId), 1)]), _: 1 })]))])])])), n(V, { modelValue: r.value, "onUpdate:modelValue": I[1] || (I[1] = (T) => r.value = T), title: v.$t("commons.userDetails"), "append-to-body": true, width: "66%" }, { default: a(() => [r.value ? (p(), S("div", ie, [n(k, { modelValue: g.value, "onUpdate:modelValue": I[0] || (I[0] = (T) => g.value = T), option: P(te) }, null, 8, ["modelValue", "option"])])) : w("", true)]), _: 1 }, 8, ["modelValue", "title"])], 64);
  };
} });
function me(e) {
  return U.request("get", "/live/liveroom/page", { params: e });
}
function de(e) {
  return U.request("post", "/live/liveroom", { data: e });
}
function q(e) {
  return U.request("get", "/live/liveroom/" + e);
}
function ue(e) {
  return U.request("delete", "/live/liveroom/" + e);
}
function H(e) {
  return U.request("put", "/live/liveroom", { data: e });
}
function pe(e) {
  return U.request("put", "/live/liveroom/offline", { data: e });
}
const { $t: l } = A(), ce = { dialogDrag: true, menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: true, viewBtn: true, delBtn: false, searchMenuSpan: 6, menuWidth: 150, labelWidth: 110, labelPosition: "left", searchLabelWidth: 90, column: [{ label: l("wxma.wxlive.roomId"), prop: "id", display: false }, { label: l("mall.goodsspu.shopId"), prop: "shopId", type: "select", search: true, filterable: true, editDisabled: true, minWidth: 140, labelWidth: 130, span: 11, props: { label: "name", value: "id" }, dicUrl: "/mall/shopinfo/list", cascader: ["userId"], rules: [{ required: true, message: l("commons.notNull"), trigger: "blur" }] }, { label: l("mall.liveroom.userId"), prop: "userId", sortable: true, type: "select", filterable: true, search: true, hide: true, minWidth: 140, labelWidth: 130, offset: 2, span: 10, props: { label: "nickName", value: "id" }, dicUrl: "/upms/shopuser/page?size=9999&shopId={{key}}", dicFormatter: (e) => e.records, labelTip: "\u5E97\u94FA\u5E97\u5458\u8D26\u53F7\uFF0C\u5982\u6CA1\u6709\u8BF7\u5148\u65B0\u589E\u5E97\u5458\u8D26\u53F7", rules: [{ required: true, message: l("commons.notNull"), trigger: "blur" }] }, { label: l("mall.liveroom.userId"), prop: "userName", display: false }, { label: l("mall.liveroom.name"), prop: "name", labelWidth: 130, span: 11, rules: [{ required: true, message: l("commons.notNull"), trigger: "blur" }, { max: 50, message: l("commons.lengthTips", { length: 50 }) }] }, { label: l("mall.liveroom.roomTop"), prop: "roomTop", sortable: true, type: "radio", labelWidth: 130, offset: 2, span: 10, value: "0", rules: [{ required: true, message: l("mall.liveroom.roomTop") + l("commons.notNull"), trigger: "blur" }], dicData: [{ label: l("commons.open"), value: "1" }, { label: l("commons.close"), value: "0" }] }, { label: l("wxma.wxlive.startTime"), sortable: true, span: 11, labelWidth: 130, prop: "startTime", type: "datetime", format: "YYYY-MM-DD HH:mm:ss", rules: [{ required: true, message: l("wxma.wxlive.startTime") + l("commons.notNull"), trigger: "blur" }], labelTip: "\u5F00\u64AD\u65F6\u95F4\u5FC5\u987B\u5927\u4E8E\u5F53\u524D\u65F6\u95F4", editDisabled: true, disabledDate(e) {
  return e.getTime() < Date.now() - 864e5;
}, shortcuts: [{ text: "10\u5206\u949F\u540E", value: () => {
  const e = /* @__PURE__ */ new Date();
  return e.setTime(e.getTime() + 600 * 1e3), e;
} }, { text: "30\u5206\u949F\u540E", value: () => {
  const e = /* @__PURE__ */ new Date();
  return e.setTime(e.getTime() + 1800 * 1e3), e;
} }, { text: "1\u5C0F\u65F6\u540E", value: () => {
  const e = /* @__PURE__ */ new Date();
  return e.setTime(e.getTime() + 3600 * 1e3), e;
} }] }, { label: l("wxma.wxlive.endTime"), sortable: true, prop: "endTime", labelWidth: 130, offset: 2, span: 10, type: "datetime", format: "YYYY-MM-DD HH:mm:ss", rules: [{ required: true, message: l("wxma.wxlive.endTime") + l("commons.notNull"), trigger: "blur" }], labelTip: "\u5F00\u64AD\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u95F4\u9694\u4E0D\u5F97\u77ED\u4E8E30\u5206\u949F\uFF0C\u4E0D\u5F97\u8D85\u8FC724\u5C0F\u65F6!", editDisabled: true, disabledDate(e) {
  return e.getTime() < Date.now() - 864e5;
} }, { label: l("mall.liveroom.feedsImg"), prop: "feedsImg", span: 8, labelWidth: 130, rules: [{ required: true, message: l("commons.notNull"), trigger: "blur" }, { max: 255, message: l("commons.lengthTips", { length: 255 }) }] }, { label: l("mall.liveroom.shareImg"), prop: "shareImg", sortable: true, hide: true, span: 8, labelWidth: 130, rules: [{ required: true, message: l("commons.notNull"), trigger: "blur" }, { max: 255, message: l("commons.lengthTips", { length: 255 }) }] }, { label: l("mall.liveroom.coverImg"), prop: "coverImg", sortable: true, hide: true, span: 8, labelWidth: 130, rules: [{ max: 255, message: l("commons.lengthTips", { length: 255 }) }] }, { label: l("wxma.wxlive.liveStatus"), prop: "liveStatus", width: 80, type: "select", display: false, search: true, value: "0", dicData: [{ label: l("wxma.wxlive.notStarted"), value: "0" }, { label: l("wxma.wxlive.liveBroadcasting"), value: "1" }, { label: l("wxma.wxlive.ended"), value: "2" }, { label: l("wxma.wxlive.paused"), value: "3" }, { label: "\u8FDD\u89C4\u4E0B\u7EBF", value: "-1" }] }, { label: l("mall.liveroom.remark"), prop: "remark", addDisplay: false, editDisplay: false, span: 24, rules: [{ max: 500, message: l("commons.lengthTips", { length: 500 }) }] }, { label: l("mall.liveroom.goodsSpuIds"), prop: "goodsSpuIds", formslot: true, hide: true, span: 24, labelWidth: 130, rules: [{ required: true, message: l("mall.liveroom.goodsSpuIds") + l("commons.notNull"), trigger: "blur" }] }, { label: l("mall.liveroom.createTime"), prop: "createTime", sortable: true, display: false }] }, ge = { components: { MaterialList: oe }, setup() {
  const { proxy: e } = O(), t = G({ form: { goodsSpuIds: [] }, tableData: [], page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, tableLoading: false, tableOption: ce, selectionGoodsSpu: [] }), y = E().permissions, r = K(() => ({ addBtn: !!y["live:liveroom:add"], delBtn: !!y["live:liveroom:del"], editBtn: !!y["live:liveroom:edit"], viewBtn: !!y["live:liveroom:get"] }));
  function g(o, d) {
    t.tableLoading = true, me(W({ current: o.currentPage, size: o.pageSize, descs: t.page.descs, ascs: t.page.ascs, ...d, ...t.paramsSearch })).then((i) => {
      t.tableData = i.data.records, t.page.total = i.data.total, t.page.currentPage = o.currentPage, t.page.pageSize = o.pageSize, t.tableLoading = false;
    }).catch(() => {
      t.tableLoading = false;
    });
  }
  function C(o) {
    e.$confirm(e.$t("commons.confirmDelete"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return ue(o.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), g(t.page);
    });
  }
  function v(o, d, i, D) {
    o.userName = t.form.$userId || o.userName, o.shopName = t.form.$shopId || o.shopName, o.startTime = null, o.endTime = null, H(o).then(() => {
      t.selectionGoodsSpu = [], t.form.shopId = "", e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), i(), g(t.page);
    }).catch(() => {
      D();
    });
  }
  function I(o, d, i) {
    o.userName = t.form.$userId, o.shopName = t.form.$shopId;
    const D = f().add(0, "m");
    if (f().add(6, "M"), f(D).isAfter(o.startTime)) {
      e.$confirm("\u5F00\u64AD\u65F6\u95F4\u4E0D\u80FD\u5C0F\u4E8E\u5F53\u524D\u65F6\u95F4!", { confirmButtonText: e.$t("commons.confirm"), type: "warning" }), i();
      return;
    }
    const M = f(f(o.startTime)).add(30, "m"), s = f(f(o.startTime)).add(24, "h");
    if (f(M).isAfter(o.endTime) || f(o.endTime).isAfter(s)) {
      e.$confirm("\u5F00\u64AD\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u95F4\u9694\u4E0D\u5F97\u77ED\u4E8E30\u5206\u949F\uFF0C\u4E0D\u5F97\u8D85\u8FC724\u5C0F\u65F6!", { confirmButtonText: e.$t("commons.confirm"), type: "warning" }), i();
      return;
    }
    o.startTime = f(o.startTime).format("YYYY-MM-DD HH:mm:ss"), o.endTime = f(o.endTime).format("YYYY-MM-DD HH:mm:ss"), de(o).then(() => {
      t.selectionGoodsSpu = [], t.form.shopId = "", e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), d(), g(t.page);
    }).catch((m) => {
      var _a;
      ((_a = m.data) == null ? void 0 : _a.code) == 1 && e.$message({ showClose: true, message: "\u5982\u679C\u65F6\u95F4\u51B2\u7A81,\u8BF7\u5148\u5220\u9664\u51B2\u7A81\u7684\u76F4\u64AD\u95F4!", type: "error" }), i();
    });
  }
  function N(o, d) {
    o = W(o), t.paramsSearch = o, t.page.currentPage = 1, g(t.page, o), d();
  }
  function _(o) {
    const d = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (t.page.descs = "", t.page.ascs = d) : o.order == "descending" ? (t.page.ascs = "", t.page.descs = d) : (t.page.ascs = "", t.page.descs = ""), g(t.page);
  }
  function x() {
    g(t.page);
  }
  function Y(o, d) {
    t.form.copyData || (t.selectionGoodsSpu = [], t.form.goodsSpuIds = []), d == "edit" || d == "view" ? q(t.form.id).then((i) => {
      const D = i.data;
      t.form.goodsSpuIds = D.goodsSpuIds, o();
    }) : (t.form.startTime = f().add(1, "m").format("YYYY-MM-DD HH:mm:ss"), t.form.endTime = f().add(1, "d").format("YYYY-MM-DD HH:mm:ss"), o());
  }
  function B(o) {
    o && o.id && H({ id: o.id, roomTop: o.roomTop }).then(() => {
    }).catch(() => {
      x();
    });
  }
  function k(o) {
    e.$prompt("\u8F93\u5165\u8FDD\u89C4\u539F\u56E0", e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), inputValue: o.remark, inputPattern: /[\S]/, inputErrorMessage: e.$t("commons.notNull") }).then(({ value: d }) => {
      o.remark = d, o.liveStatus = "-1", o.startTime = null, o.endTime = null, pe(o).then(() => {
        e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), g(t.page);
      });
    });
  }
  function V(o) {
    q(o.id).then((d) => {
      let i = d.data;
      i.copyData = true, i.id = null, i.createTime = null, i.updateTime = null, i.remark = null, i.liveStatus = "0", i.startTime = f().format("YYYY-MM-DD HH:mm:ss"), t.form = i, e.$refs.crud.rowAdd();
    }).catch(() => {
      e.$refs.crud.rowAdd();
    });
  }
  function T(o) {
    const d = (/* @__PURE__ */ new Date()).getTime();
    return new Date(o.endTime).getTime() - d < 0;
  }
  return { ...Z(t), permissions: y, permissionList: r, getPageF: g, handleDel: C, handleUpdate: v, handleSave: I, searchChange: N, sortChange: _, refreshChange: x, beforeOpen: Y, changeRoomTop: B, handleOffline: k, onCopyLiveRoom: V, handleEndTime: T };
} }, fe = { class: "inline-block ml-5 jl-text-tips" }, he = { class: "flex items-center" }, ve = { class: "flex-c" }, be = { class: "jl-text-tips" }, ye = { class: "jl-text-tips" }, Ie = { class: "jl-text-tips" }, Te = { key: 0 }, Se = { key: 1, class: "jl-text-tips" };
function ke(e, t, y, r, g, C) {
  const v = u("Warning"), I = u("el-icon"), N = u("TopRight"), _ = u("el-link"), x = u("el-popover"), Y = u("InfoFilled"), B = u("el-tooltip"), k = u("el-button"), V = re, T = u("MaterialList"), o = X, d = u("el-switch"), i = u("el-text"), D = u("avue-crud"), M = Q;
  return p(), S("div", null, [n(M, null, { default: a(() => [n(D, { ref: "crud", modelValue: e.form, "onUpdate:modelValue": t[5] || (t[5] = (s) => e.form = s), page: e.page, "onUpdate:page": t[6] || (t[6] = (s) => e.page = s), data: e.tableData, permission: r.permissionList, "table-loading": e.tableLoading, option: e.tableOption, "before-open": r.beforeOpen, onOnLoad: r.getPageF, onRefreshChange: r.refreshChange, onRowUpdate: r.handleUpdate, onRowSave: r.handleSave, onRowDel: r.handleDel, onSortChange: r.sortChange, onSearchChange: r.searchChange }, { "menu-left": a(({ size: s }) => [b("div", fe, [t[8] || (t[8] = h(" \u8BF4\u660E: \u65B0\u589E\u540E\u4F7F\u7528\u4E3B\u64AD\u8D26\u53F7\u767B\u5F55\u5546\u6237\u7AEFApp\u8FDB\u884C\u76F4\u64AD\uFF0C\u4F7F\u7528\u963F\u91CC\u89C6\u9891\u76F4\u64AD\u5F00\u53D1\u3002 ", -1)), n(x, { title: e.$t("commons.tip"), width: 300, trigger: "hover" }, { reference: a(() => [n(I, null, { default: a(() => [n(v)]), _: 1 })]), default: a(() => [b("div", he, [t[7] || (t[7] = h(" \u963F\u91CC\u89C6\u9891\u76F4\u64AD ", -1)), n(_, { target: "_blank", type: "primary", href: "https://help.aliyun.com/zh/live/?spm=a2c4g.11186623.0.0.2b0a145dAyHKzS" }, { default: a(() => [h(c(e.$t("pay.payconfig.officialDocs")), 1), n(I, null, { default: a(() => [n(N)]), _: 1 })]), _: 1 })])]), _: 1 }, 8, ["title"])])]), "userId-label": a((s) => [b("div", ve, [n(B, { effect: "dark", content: "\u5E97\u94FA\u7528\u6237\u8D26\u53F7", placement: "top" }, { default: a(() => [n(I, null, { default: a(() => [n(Y)]), _: 1 })]), _: 1 }), h(" " + c(e.$t("mall.liveroom.userId")) + " ", 1), s.type == "view" && e.form.userId ? (p(), $(V, { key: 0, setSlot: true, userId: e.form.userId }, { default: a(() => [n(k, { link: "", icon: "User" })]), _: 1 }, 8, ["userId"])) : w("", true)])]), userId: a(({ row: s }) => [n(V, { userId: s.userId }, null, 8, ["userId"])]), "coverImg-form": a((s) => [n(T, { disabled: s.type == "view", singleValue: e.form.coverImg, "onUpdate:singleValue": t[0] || (t[0] = (m) => e.form.coverImg = m), num: 1, "is-single": true, type: "image", width: 100, height: 100 }, null, 8, ["disabled", "singleValue"]), b("p", be, c(e.$t("commons.imageSizeTip", { size: "750px*1575px" })), 1)]), "shareImg-form": a((s) => [n(T, { disabled: s.type == "view", singleValue: e.form.shareImg, "onUpdate:singleValue": t[1] || (t[1] = (m) => e.form.shareImg = m), num: 1, "is-single": true, type: "image", width: 100, height: 100 }, null, 8, ["disabled", "singleValue"]), b("p", ye, c(e.$t("commons.imageSizeTip", { size: "360px*360px" })), 1)]), "feedsImg-form": a((s) => [n(T, { disabled: s.type == "view", singleValue: e.form.feedsImg, "onUpdate:singleValue": t[2] || (t[2] = (m) => e.form.feedsImg = m), num: 1, "is-single": true, type: "image", width: 100, height: 100 }, null, 8, ["disabled", "singleValue"]), b("p", Ie, c(e.$t("commons.imageSizeTip", { size: "360px*360px" })), 1)]), feedsImg: a((s) => [n(T, { disabled: true, singleValue: s.row.feedsImg, "onUpdate:singleValue": (m) => s.row.feedsImg = m, num: 1, "is-single": true, type: "image", width: 60, height: 60 }, null, 8, ["singleValue", "onUpdate:singleValue"])]), "goodsSpuIds-form": a((s) => [e.form.shopId ? (p(), S("div", Te, [n(o, { value: e.selectionGoodsSpu, "onUpdate:value": t[3] || (t[3] = (m) => e.selectionGoodsSpu = m), goodsIds: e.form.goodsSpuIds, "onUpdate:goodsIds": t[4] || (t[4] = (m) => e.form.goodsSpuIds = m), disabled: s.type == "view", shopId: e.form.shopId, showGoodsList: true }, null, 8, ["value", "goodsIds", "disabled", "shopId"])])) : (p(), S("div", Se, c(e.$t("commons.selectShopFirst")), 1))]), roomTop: a((s) => [n(d, { modelValue: s.row.roomTop, "onUpdate:modelValue": (m) => s.row.roomTop = m, disabled: "", "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", onChange: (m) => r.changeRoomTop(s.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), liveStatus: a((s) => [b("div", null, [b("div", null, [s.row.liveStatus == "1" ? (p(), $(i, { key: 0, type: "success" }, { default: a(() => [h(c(s.row.$liveStatus), 1)]), _: 2 }, 1024)) : (p(), $(i, { key: 1, type: "danger" }, { default: a(() => [h(c(s.row.$liveStatus), 1)]), _: 2 }, 1024))]), r.handleEndTime(s.row) ? (p(), $(i, { key: 0, type: "danger" }, { default: a(() => [...t[9] || (t[9] = [h("\u5DF2\u8FC7\u671F", -1)])]), _: 1 })) : w("", true)])]), menu: a(({ size: s, row: m, index: De }) => [r.permissions["live:liveroom:edit"] && m.liveStatus == "1" ? (p(), $(k, { key: 0, text: "", type: "primary", icon: "el-icon-edit", size: s, onClick: (z) => r.handleOffline(m) }, { default: a(() => [h(c(e.$t("commons.livePulled")), 1)]), _: 1 }, 8, ["size", "onClick"])) : w("", true), r.permissions["live:liveroom:del"] && m.liveStatus != "1" ? (p(), $(k, { key: 1, text: "", type: "primary", icon: "Delete", size: s, onClick: (z) => e.$refs.crud.rowDel(m) }, { default: a(() => [h(c(e.$t("commons.delete")), 1)]), _: 1 }, 8, ["size", "onClick"])) : w("", true), r.permissions["live:liveroom:add"] ? (p(), $(k, { key: 2, text: "", type: "primary", icon: "CopyDocument", size: s, onClick: (z) => r.onCopyLiveRoom(m) }, { default: a(() => [h(c(e.$t("commons.liveCopy")), 1)]), _: 1 }, 8, ["size", "onClick"])) : w("", true)]), _: 1 }, 8, ["modelValue", "page", "data", "permission", "table-loading", "option", "before-open", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"])]), _: 1 })]);
}
const Le = J(ge, [["render", ke]]);
export {
  Le as default
};
