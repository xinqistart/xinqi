import { aO as v, n as M, A as W, R as F, be as V, p as H, U as Y, $ as E, t as j, q as K, K as Q, S as _, aA as d, b1 as Z, _ as J, r as x, c as X, o as ee, b as r, h as n, e as N, z as g, f as w, a_ as ae } from "./index-DAdfXJ2i.js";
import { _ as B } from "./index-D9J23VQK.js";
import { b as te } from "./wxapp-BACewdCT.js";
import { t as oe, g as le } from "./wxlivegoods-CRT_mP6r.js";
import "./wxapp-DzjQ_kFh.js";
function ne(a) {
  return v.request("get", "/weixin/wxmalive/page", { params: a });
}
function re(a) {
  return v.request("post", "/weixin/wxmalive", { data: a });
}
function se(a, e) {
  return v.request("delete", "/weixin/wxmalive/" + a + "/" + e);
}
function ie(a) {
  return v.request("put", "/weixin/wxmalive", { data: a });
}
function de(a, e) {
  return v.request("get", "/weixin/wxmalive/sharedcode/" + a + "/" + e);
}
function me(a, e) {
  return v.request("get", "/weixin/wxmalive/pushurl/" + a + "/" + e);
}
function pe(a) {
  return v.request("post", "/weixin/wxmalive/" + a.appId + "/" + a.roomId, { data: a.goodsIds });
}
function ce(a) {
  return v.request("delete", "/weixin/wxmalive/" + a.appId + "/" + a.roomId + "/" + a.goodsId, { data: a });
}
const { $t: t } = M(), ue = { dialogDrag: true, index: false, indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", excelBtn: true, printBtn: false, viewBtn: true, searchShow: false, menuWidth: 150, labelWidth: 125, menuType: "text", searchMenuSpan: 6, labelPosition: "left", column: [{ label: t("wxma.wxlive.roomId"), prop: "roomId", display: false }, { label: t("wxma.wxlive.name"), prop: "name", span: 11, rules: [{ required: true, message: t("wxma.wxlive.name") + t("commons.notNull"), trigger: "blur" }, { min: 3, message: t("wxma.wxlive.name") + t("commons.notNull") }, { max: 17, message: t("commons.lengthTips", { length: 17 }) }] }, { label: t("wxma.wxlive.anchorName"), offset: 1, span: 12, prop: "anchorName", rules: [{ required: true, message: t("wxma.wxlive.anchorName") + t("commons.notNull"), trigger: "blur" }, { min: 2, message: t("wxma.wxlive.anchorName") + t("commons.notNull") }, { max: 15, message: t("commons.lengthTips", { length: 15 }) }] }, { label: t("wxma.wxlive.coverImg"), prop: "coverImg", rules: [{ required: true, message: t("wxma.wxlive.coverImg") + t("commons.notNull"), trigger: "blur" }], slot: true, formslot: true }, { label: t("wxma.wxlive.shareImg"), prop: "shareImg", rules: [{ required: true, message: t("wxma.wxlive.shareImg") + t("commons.notNull"), trigger: "blur" }], slot: true, formslot: true }, { label: t("wxma.wxlive.feedsImg"), prop: "feedsImg", rules: [{ required: true, message: t("wxma.wxlive.feedsImg") + t("commons.notNull"), trigger: "blur" }], slot: true, formslot: true }, { label: t("wxma.wxlive.liveStatus"), prop: "liveStatus", width: 60, type: "select", display: false, dicData: [{ label: t("wxma.wxlive.liveBroadcasting"), value: 101 }, { label: t("wxma.wxlive.notStarted"), value: 102 }, { label: t("wxma.wxlive.ended"), value: 103 }, { label: t("wxma.wxlive.banned"), value: 104 }, { label: t("wxma.wxlive.paused"), value: 105 }, { label: t("wxma.wxlive.abnormal"), value: 106 }, { label: t("wxma.wxlive.expired"), value: 107 }] }, { label: t("wxma.wxlive.type"), prop: "type", width: 60, type: "radio", editDisabled: true, span: 24, dicData: [{ label: t("wxma.wxlive.pushStream"), value: 1 }, { label: t("wxma.wxlive.mobileLive"), value: 0 }], rules: [{ required: true, message: t("wxma.wxlive.type") + t("commons.notNull"), trigger: "blur" }] }, { label: t("wxma.wxlive.startTime"), prop: "startTime", type: "datetime", span: 11, format: "YYYY-MM-DD HH:mm:ss", rules: [{ required: true, message: t("wxma.wxlive.startTime") + t("commons.notNull"), trigger: "blur" }], labelTip: t("wxma.wxlive.f9z2xx") }, { label: t("wxma.wxlive.endTime"), prop: "endTime", offset: 1, span: 12, type: "datetime", format: "YYYY-MM-DD HH:mm:ss", rules: [{ required: true, message: t("wxma.wxlive.endTime") + t("commons.notNull"), trigger: "blur" }], labelTip: t("wxma.wxlive.liveTimeGapReminder") }, { label: t("wxma.wxlive.closeLike"), prop: "closeLike", type: "radio", width: 60, dicData: [{ label: t("commons.close"), value: 1 }, { label: t("commons.open"), value: 0 }], rules: [{ required: true, message: t("wxma.wxlive.closeLike") + t("commons.notNull"), trigger: "blur" }] }, { label: t("wxma.wxlive.closeGoods"), prop: "closeGoods", type: "radio", width: 60, dicData: [{ label: t("commons.close"), value: 1 }, { label: t("commons.open"), value: 0 }], rules: [{ required: true, message: t("wxma.wxlive.closeGoods") + t("commons.notNull"), trigger: "blur" }] }, { label: t("wxma.wxlive.closeComment"), prop: "closeComment", type: "radio", width: 60, dicData: [{ label: t("commons.close"), value: 1 }, { label: t("commons.open"), value: 0 }], rules: [{ required: true, message: t("wxma.wxlive.closeComment") + t("commons.notNull"), trigger: "blur" }] }, { label: t("wxma.wxlive.anchorWechat"), prop: "anchorWechat", hide: true, rules: [{ required: true, message: t("wxma.wxlive.anchorWechat") + t("commons.notNull"), trigger: "blur" }], labelTip: t("wxma.wxlive.eachLiveRoomVerification") }] }, ge = { dialogDrag: true, index: false, indexLabel: t("commons.indexLabel"), menuAlign: "center", align: "center", menuWidth: 150, labelWidth: 120, menuType: "text", addBtn: false, editBtn: false, delBtn: false, refreshBtn: false, column: [{ label: t("wxma.wxlive.productId"), prop: "goodsId" }, { label: t("wxma.wxlive.productDetailPage"), prop: "url" }, { label: t("wxma.wxlive.productImage"), prop: "coverImg", slot: true }, { label: t("wxma.wxlive.productName"), prop: "name" }, { label: t("wxma.wxlive.priceType"), prop: "priceType", width: 60, type: "select", rules: [{ required: true, message: t("wxma.wxlive.requiredField"), trigger: "blur" }], dicData: [{ label: t("wxma.wxlive.fixedPrice"), value: 1 }, { label: t("wxma.wxlive.priceRange"), value: 2 }, { label: t("wxma.wxlive.discountPrice"), value: 3 }] }, { label: t("wxma.wxlive.price"), prop: "price", display: false, type: "number", slot: true, minRows: 0, precision: 2 }, { label: t("wxma.wxlive.price2"), prop: "price2", display: false, type: "number", hide: true, minRows: 0, precision: 2 }] }, fe = { components: { wxMaMedia: B }, setup() {
  const { proxy: a } = W(), e = F({ headers: { Authorization: "Bearer " + V().access_token }, treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: null, tableData: [], page: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, form: { shareImg: "", feedsImg: "", coverImg: "" }, paramsSearch: {}, tableLoading: false, tableOption: ue, dialogGoods: false, form2: {}, page2: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, tableLoading2: false, tableData2: [], tableOptionGoods: ge, roomId: null, dialogGoodsSelect: false, form3: {}, page3: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "create_time" }, tableLoading3: false, tableData3: [], tableOption3: oe, selectionData: [] }), S = H(null);
  (() => {
    var _a;
    if (((_a = Y()) == null ? void 0 : _a.userInfo.type) == "-1") {
      const o = E();
      o && (e.headers["switch-tenant-id"] = o);
    }
  })(), j(() => {
    $();
  });
  const i = K(() => {
    var _a;
    const o = (_a = Q()) == null ? void 0 : _a.permissions;
    return { addBtn: !!o["wxma:wxmalive:add"], delBtn: !!o["wxma:wxmalive:del"], editBtn: !!o["wxma:wxmalive:edit"], viewBtn: !!o["wxma:wxmalive:get"] };
  });
  function R(o, s) {
    return o ? s.name.indexOf(o) !== -1 : true;
  }
  function $() {
    te({ appType: "1" }).then((o) => {
      e.treeWxAppData = o.data, e.treeWxAppData && e.treeWxAppData.length > 0 && T({ id: e.treeWxAppData[0].id });
    });
  }
  function T(o) {
    e.appId != o.id && (a.$nextTick(() => {
      S.value.setCurrentKey(o.id);
    }), e.tableData = [], e.page.total = 0, e.page.currentPage = 1, e.appId = o.id, e.paramsSearch = {}, p(e.page));
  }
  function L(o) {
    e.tableLoading = true, de(e.appId, o.roomId).then((s) => {
      const m = s.data;
      a.$alert('<el-card class="box-card">  <div slot="header" class="clearfix">' + a.$t("wxma.wxlive.liveRoomQRCode") + '  </div>  <div class="text item">    <img src="' + m.cdnUrl + '" style="width: 200px;height: 200px">  </div></el-card><el-card class="box-card">  <div slot="header" class="clearfix">' + a.$t("wxma.wxlive.liveRoomPoster") + '  </div>  <div class="text item">    <img src="' + m.posterUrl + '" style="width: 200px;height: 260px">  </div></el-card>', a.$t("wxma.wxlive.shareQRCode"), { dangerouslyUseHTMLString: true }), m.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function y(o) {
    e.tableLoading = true, me(e.appId, o.roomId).then((s) => {
      const m = s.data;
      a.$alert('<textarea rows="6" style="width: 100%">' + m + "</textarea>", a.$t("wxma.wxlive.pushURL"), { dangerouslyUseHTMLString: true }), m.tableLoading = false;
    }).catch(() => {
      e.tableLoading = false;
    });
  }
  function f(o, s) {
    o = Z(o), e.paramsSearch = o, e.page.currentPage = 1, p(e.page, o), s();
  }
  function b(o) {
    const s = o.prop ? o.prop.replace(/([A-Z])/g, "_$1").toLowerCase() : "";
    o.order == "ascending" ? (e.page.descs = "", e.page.ascs = s) : o.order == "descending" ? (e.page.ascs = "", e.page.descs = s) : (e.page.ascs = "", e.page.descs = ""), p(e.page);
  }
  function p(o, s) {
    e.appId && (e.tableLoading = true, ne(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page.descs, ascs: e.page.ascs, appType: "1", appId: e.appId }, s, e.paramsSearch)).then((m) => {
      const c = m.data.roomInfos;
      c.forEach((u) => {
        u.startTime = u.startTime * 1e3, u.endTime = u.endTime * 1e3;
      }), e.tableData = c, e.page.total = m.data.total, e.page.currentPage = o.currentPage, e.page.pageSize = o.pageSize, e.tableLoading = false, e.roomId && c.forEach((u) => {
        u.roomId === e.roomId && (e.tableData2 = u.goods);
      });
    }).catch(() => {
      e.tableLoading = false;
    }));
  }
  function h(o) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return se(e.appId, o.roomId);
    }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), p(e.page);
    });
  }
  function C(o, s, m, c) {
    const u = d().add(10, "m"), P = d().add(6, "M");
    if (d(u).isAfter(o.startTime) || d(o.startTime).isAfter(P)) {
      a.$confirm(a.$t("wxma.wxlive.startEndTimeRules"), { confirmButtonText: a.$t("commons.confirm"), type: "warning" }), c();
      return;
    }
    const G = d(d(o.startTime)).add(30, "m"), z = d(d(o.startTime)).add(12, "h");
    if (d(G).isAfter(o.endTime) || d(o.endTime).isAfter(z)) {
      a.$confirm(a.$t("wxma.wxlive.timeIntervalRules"), { confirmButtonText: a.$t("commons.confirm"), type: "warning" }), c();
      return;
    }
    o.startTime = o.startTime / 1e3, o.endTime = o.endTime / 1e3, ie(Object.assign(o, { appId: e.appId })).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.updateSuccess"), type: "success" }), m(), p(e.page);
    }).catch(() => {
      c();
    });
  }
  function D(o, s, m) {
    const c = d().add(10, "m"), u = d().add(6, "M");
    if (d(c).isAfter(o.startTime) || d(o.startTime).isAfter(u)) {
      a.$confirm(a.$t("wxma.wxlive.startEndTimeRules"), { confirmButtonText: a.$t("commons.confirm"), type: "warning" }), m();
      return;
    }
    const P = d(d(o.startTime)).add(30, "m"), G = d(d(o.startTime)).add(12, "h");
    if (d(P).isAfter(o.endTime) || d(o.endTime).isAfter(G)) {
      a.$confirm(a.$t("wxma.wxlive.timeIntervalRules"), { confirmButtonText: a.$t("commons.confirm"), type: "warning" }), m();
      return;
    }
    o.startTime = o.startTime / 1e3, o.endTime = o.endTime / 1e3, re(Object.assign(o, { appId: e.appId })).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), s(), p(e.page);
    }).catch(() => {
      m();
    });
  }
  function k() {
    p(e.page);
  }
  function l(o) {
    e.dialogGoods = true, e.roomId = o.roomId, e.tableData2 = o.goods;
  }
  function I(o, s) {
    a.$confirm(a.$t("commons.confirmDelete"), a.$t("commons.tip"), { confirmButtonText: a.$t("commons.confirm"), cancelButtonText: a.$t("commons.cancel"), type: "warning" }).then(function() {
      return e.tableLoading2 = true, ce({ appId: e.appId, roomId: e.roomId, goodsId: o.goodsId });
    }).then(() => {
      e.tableLoading2 = false, a.$message({ showClose: true, message: a.$t("commons.delSuccess"), type: "success" }), e.tableData2.splice(s, 1);
    }).catch(function() {
      e.tableLoading2 = false;
    });
  }
  function U() {
    e.dialogGoodsSelect = true;
  }
  function A(o, s) {
    e.appId && (e.tableLoading3 = true, le(Object.assign({ current: e.page.currentPage, size: e.page.pageSize, descs: e.page3.descs, ascs: e.page3.ascs, appId: e.appId, status: "2" }, s)).then((m) => {
      const c = m.data.goods;
      e.tableData3 = c, e.page3.total = m.data.total, e.page3.currentPage = o.currentPage, e.page3.pageSize = o.pageSize, e.tableLoading3 = false;
    }).catch(() => {
      e.tableLoading3 = false;
    }));
  }
  function q(o) {
    e.selectionData = o;
  }
  function O() {
    if (e.selectionData.length <= 0) {
      a.$message.error(a.$t("commons.selectGoods"));
      return;
    }
    const o = [];
    e.selectionData.forEach((s) => {
      o.push(s.goodsId);
    }), e.tableLoading3 = true, pe({ appId: e.appId, roomId: e.roomId, goodsIds: o }).then(() => {
      a.$message({ showClose: true, message: a.$t("commons.addSuccess"), type: "success" }), e.tableLoading3 = false, e.dialogGoodsSelect = false, p(e.page);
    }).catch(() => {
      e.tableLoading3 = false;
    });
  }
  return { ..._(e), permissionList: i, filterNode: R, getWxAppListF: $, nodeClick: T, getSharedCodeF: L, getPushUrlF: y, searchChange: f, sortChange: b, getPageF: p, handleDel: h, handleUpdate: C, handleSave: D, refreshChange: k, viewGoods: l, deleteGoodsF: I, goodsSelect: U, getPage3F: A, selectionChange: q, addGoodsF: O, tree: S };
} }, we = { style: { "border-top": "solid 1px #eceef6" } }, xe = { style: { display: "flex", "justify-content": "center" } }, ve = { class: "dialog-footer" };
function be(a, e, S, i, R, $) {
  const T = x("avue-tree"), L = x("el-card"), y = x("el-col"), f = x("el-button"), b = B, p = x("el-image"), h = x("avue-crud"), C = x("el-dialog"), D = x("el-row"), k = ae;
  return ee(), X("div", we, [r(k, null, { default: n(() => [r(D, { span: 24, gutter: 10 }, { default: n(() => [r(y, { xs: 24, sm: 24, md: 3 }, { default: n(() => [r(L, { shadow: "never" }, { header: n(() => [N("div", xe, [N("span", null, g(a.$t("wxma.wxlive.miniprogramName")), 1)])]), default: n(() => [r(T, { option: a.treeOption, style: { "margin-top": "-1px" }, data: a.treeWxAppData, props: a.treeWxAppProps, "filter-node-method": i.filterNode, "node-key": "id", "default-expand-all": "", ref: "tree", onNodeClick: i.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 }), r(y, { xs: 24, sm: 24, md: 21 }, { default: n(() => [r(h, { style: { "padding-left": "10px", "border-left": "solid 1px #eceef6" }, ref: "crud", modelValue: a.form, "onUpdate:modelValue": e[3] || (e[3] = (l) => a.form = l), page: a.page, "onUpdate:page": e[4] || (e[4] = (l) => a.page = l), data: a.tableData, "table-loading": a.tableLoading, option: a.tableOption, permission: i.permissionList, onOnLoad: i.getPageF, onRefreshChange: i.refreshChange, onRowUpdate: i.handleUpdate, onRowSave: i.handleSave, onRowDel: i.handleDel, onSortChange: i.sortChange, onSearchChange: i.searchChange }, { menu: n((l) => [r(f, { size: "small", link: "", onClick: (I) => i.getSharedCodeF(l.row) }, { default: n(() => [w(g(a.$t("wxma.wxlive.shareQRCode")), 1)]), _: 1 }, 8, ["onClick"]), r(f, { size: "small", link: "", onClick: (I) => i.getPushUrlF(l.row) }, { default: n(() => [w(g(a.$t("wxma.wxlive.pushURL")), 1)]), _: 1 }, 8, ["onClick"]), r(f, { size: "small", link: "", onClick: (I) => i.viewGoods(l.row) }, { default: n(() => [w(g(a.$t("wxma.wxlive.goodsManagement")), 1)]), _: 1 }, 8, ["onClick"])]), "coverImg-form": n(() => [r(b, { appId: a.appId, onChange: e[0] || (e[0] = (l) => a.form.coverImg = l) }, null, 8, ["appId"])]), "shareImg-form": n(() => [r(b, { appId: a.appId, onChange: e[1] || (e[1] = (l) => a.form.shareImg = l) }, null, 8, ["appId"])]), "feedsImg-form": n(() => [r(b, { appId: a.appId, onChange: e[2] || (e[2] = (l) => a.form.feedsImg = l) }, null, 8, ["appId"])]), coverImg: n((l) => [r(p, { src: l.row.coverImg }, null, 8, ["src"])]), shareImg: n((l) => [r(p, { src: l.row.shareImg }, null, 8, ["src"])]), feedsImg: n((l) => [r(p, { src: l.row.feedsImg }, null, 8, ["src"])]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option", "permission", "onOnLoad", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel", "onSortChange", "onSearchChange"]), r(C, { title: a.$t("wxma.wxlive.goodsManagement"), modelValue: a.dialogGoods, "onUpdate:modelValue": e[8] || (e[8] = (l) => a.dialogGoods = l), width: "80%" }, { default: n(() => [r(h, { ref: "crud2", modelValue: a.form2, "onUpdate:modelValue": e[6] || (e[6] = (l) => a.form2 = l), page: a.page2, "onUpdate:page": e[7] || (e[7] = (l) => a.page2 = l), data: a.tableData2, "table-loading": a.tableLoading2, option: a.tableOptionGoods }, { "menu-left": n(() => [r(f, { type: "primary", size: "small", onClick: e[5] || (e[5] = (l) => i.goodsSelect()) }, { default: n(() => [w(g(a.$t("wxma.wxlive.importGoods")), 1)]), _: 1 })]), menu: n((l) => [r(f, { size: "small", link: "", onClick: (I) => i.deleteGoodsF(l.row, l.index) }, { default: n(() => [w(g(a.$t("wxma.wxlive.delete")), 1)]), _: 1 }, 8, ["onClick"])]), coverImg: n((l) => [r(p, { src: l.row.coverImg }, null, 8, ["src"])]), price: n((l) => [w(g(l.row.priceType == 1 ? l.row.price / 100 : l.row.priceType == 2 ? l.row.price / 100 + "~" + l.row.price2 / 100 : l.row.priceType == 3 ? l.row.price2 / 100 : ""), 1)]), _: 1 }, 8, ["modelValue", "page", "data", "table-loading", "option"])]), _: 1 }, 8, ["title", "modelValue"]), r(C, { title: a.$t("commons.selectGoods"), modelValue: a.dialogGoodsSelect, "onUpdate:modelValue": e[12] || (e[12] = (l) => a.dialogGoodsSelect = l), width: "60%" }, { footer: n(() => [N("span", ve, [r(f, { onClick: e[11] || (e[11] = (l) => a.dialogGoodsSelect = false) }, { default: n(() => [w(g(a.$t("commons.cancel")), 1)]), _: 1 }), r(f, { type: "primary", onClick: i.addGoodsF }, { default: n(() => [w(g(a.$t("wxma.wxlive.confirmImport")), 1)]), _: 1 }, 8, ["onClick"])])]), default: n(() => [r(h, { ref: "crud3", value: a.form3, "onUpdate:value": e[9] || (e[9] = (l) => a.form3 = l), page: a.page3, "onUpdate:page": e[10] || (e[10] = (l) => a.page3 = l), data: a.tableData3, "table-loading": a.tableLoading3, option: a.tableOption3, onSelectionChange: i.selectionChange, onOnLoad: i.getPage3F }, { coverImgUrl: n((l) => [r(p, { src: l.row.coverImgUrl }, null, 8, ["src"])]), price: n((l) => [w(g(l.row.priceType == 1 ? l.row.price : l.row.priceType == 2 ? l.row.price + "~" + l.row.price2 : l.row.priceType == 3 ? l.row.price2 : ""), 1)]), _: 1 }, 8, ["value", "page", "data", "table-loading", "option", "onSelectionChange", "onOnLoad"])]), _: 1 }, 8, ["title", "modelValue"])]), _: 1 })]), _: 1 })]), _: 1 })]);
}
const Se = J(fe, [["render", be]]);
export {
  Se as default
};
