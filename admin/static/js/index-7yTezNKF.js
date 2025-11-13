import { A as K, R as H, be as G, p as W, q as R, U as J, K as Q, t as X, $ as Y, S as Z, _ as ee, r as d, j as ae, c as S, o as m, b as l, h as o, e as u, z as p, g as f, B as h, w as T, f as c, F as te, v as oe, a_ as le } from "./index-DAdfXJ2i.js";
import { b as ie, d as ne, g as re, c as de } from "./wxmaterial-DvTatkAN.js";
import { b as pe } from "./wxapp-BACewdCT.js";
const se = { setup() {
  const { proxy: e } = K(), a = H({ treeOption: { nodeKey: "id", addBtn: false, menu: false, defaultExpandAll: true, props: { label: "name", value: "id" } }, treeWxAppProps: { label: "name", value: "id" }, treeWxAppData: [], appId: "", materialType: "image", tableData: [], page: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "" }, page1: { total: 0, currentPage: 1, pageSize: 10, ascs: "", descs: "" }, tableLoading: false, actionUrl: "/weixin/wxmaterial/materialFileUpload", headers: { Authorization: "Bearer " + G().access_token }, fileList: [], dialogVideoVisible: false, addMaterialLoading: false, uploadData: { appId: "", mediaType: "image", title: "", introduction: "" }, uploadRules: { title: [{ required: true, message: e.$t("wxmp.wxmaterial.enterTitle"), trigger: "blur" }], introduction: [{ required: true, message: e.$t("wxmp.wxmaterial.enterDescription"), trigger: "blur" }] }, dialogImageVisible: false, imageListData: [], tableLoading1: false, operateMaterial: "add", hackResetEditor: false }), L = W(null), i = R(() => {
    var _a;
    return (_a = J()) == null ? void 0 : _a.userInfo;
  }), j = R(() => {
    var _a;
    return (_a = Q()) == null ? void 0 : _a.permissions;
  });
  X(() => {
    if (i.value.type == "-1") {
      const t = Y();
      t && (a.headers["switch-tenant-id"] = t);
    }
    V();
  });
  function B(t, r) {
    return t ? r.name.indexOf(t) !== -1 : true;
  }
  function V() {
    pe({ appType: "2" }).then((t) => {
      a.treeWxAppData = t.data, a.treeWxAppData && a.treeWxAppData.length > 0 && x({ id: a.treeWxAppData[0].id });
    });
  }
  function x(t) {
    a.appId != t.id && (e.$nextTick(() => {
      L.value && L.value.setCurrentKey(t.id);
    }), a.tableData = [], a.page.total = 0, a.page.currentPage = 1, a.appId = t.id, a.uploadData.appId = a.appId, w(a.page));
  }
  function z(t) {
    a.tableLoading = true, de({ mediaId: t.mediaId, appId: a.appId }).then((r) => {
      if (a.tableLoading = false, r.code == "0") {
        const s = r.data.downUrl;
        window.open(s, "_blank");
      } else e.$message.error(e.$t("wxmp.wxmaterial.getWechatVideoMaterialError") + r.msg);
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function P(t) {
    a.tableLoading = true, re({ mediaId: t.mediaId, fileName: t.name, appId: a.appId }).then((r) => {
      a.tableLoading = false;
      const s = window.URL.createObjectURL(new Blob([r.data])), _ = document.createElement("a");
      _.style.display = "none", _.href = s, _.setAttribute("download", t.name), document.body.appendChild(_), _.click();
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  const y = W(null);
  function g() {
    e.$refs.uploadForm.validate((t) => {
      if (t) y.value.submit();
      else return false;
    });
  }
  function v() {
    a.dialogVideoVisible = true;
  }
  function E(t) {
    a.tableLoading = true;
    const r = t.type === "image/jpeg" || t.type === "image/png" || t.type === "image/gif" || t.type === "image/bmp" || t.type === "image/jpg", s = t.size / 1024 / 1024 < 2;
    return r || e.$message.error(e.$t("wxmp.wxmaterial.wrongImageFormat")), s || e.$message.error(e.$t("wxmp.wxmaterial.imageSizeExceedsLimit")), a.tableLoading = false, r && s;
  }
  function A(t) {
    a.tableLoading = true;
    const r = t.type === "audio/mp3" || t.type === "audio/wma" || t.type === "audio/wav" || t.type === "audio/amr" || t.type === "audio/mpeg", s = t.size / 1024 / 1024 < 2;
    return r || e.$message.error(e.$t("wxmp.wxmaterial.voiceUploadFormatError")), s || e.$message.error(e.$t("wxmp.wxmaterial.voiceUploadSizeError")), a.tableLoading = false, r && s;
  }
  function M(t) {
    a.addMaterialLoading = true;
    const r = t.type === "video/mp4", s = t.size / 1024 / 1024 < 10;
    return r || e.$message.error(e.$t("wxmp.wxmaterial.videoUploadFormatError")), s || e.$message.error(e.$t("wxmp.wxmaterial.videoUploadSizeError")), a.addMaterialLoading = false, r && s;
  }
  function U(t) {
    e.$confirm(e.$t("wxmp.wxmaterial.confirmDeleteFile"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(() => {
      a.tableLoading = true, ne({ id: t.mediaId, appId: a.appId }).then((r) => {
        a.tableLoading = false, r.code == "0" ? w(a.page) : (a.tableLoading = false, e.$message.error(e.$t("wxmp.wxmaterial.deleteError") + r.msg));
      }).catch(() => {
        a.tableLoading = false;
      });
    });
  }
  function N(t) {
    a.tableLoading = false, a.addMaterialLoading = false, t.code == "0" ? (a.dialogVideoVisible = false, a.fileList = [], a.uploadData.title = "", a.uploadData.introduction = "", a.page.currentPage = 1, w(a.page)) : e.$message.error(e.$t("wxmp.wxmaterial.uploadError") + t.msg);
  }
  function C(t) {
    e.$message.error(e.$t("components.wxreply.uploadError") + t);
  }
  function k(t) {
    const r = t.paneName;
    a.page.currentPage = 1, a.materialType = r, a.uploadData.mediaType = r, w(a.page);
  }
  function w(t, r) {
    a.tableData = [], a.tableLoading = true, ie(Object.assign({ current: t.currentPage, size: t.pageSize, appId: a.appId, type: a.materialType }, r)).then((s) => {
      a.tableData = s.data.items, a.page.total = s.data.totalCount, a.page.currentPage = t.currentPage, a.page.pageSize = t.pageSize, a.tableLoading = false;
    }).catch(() => {
      a.tableLoading = false;
    });
  }
  function b(t) {
    a.page.currentPage = 1, a.page.pageSize = t, w(a.page);
  }
  function D(t) {
    a.page.currentPage = t, w(a.page);
  }
  function F() {
    w(a.page);
  }
  return { ...Z(a), uploadVideoRef: y, permissions: j, filterNode: B, getWxAppListF: V, nodeClick: x, handleInfo: z, handleDown: P, subVideo: g, handleAddVideo: v, beforeImageUpload: E, beforeVoiceUpload: A, beforeVideoUpload: M, delMaterial: U, handleUploadSuccess: N, handleUploadError: C, handleClick: k, getPageF: w, sizeChange: b, currentChange: D, refreshChange: F, tree: L };
} }, me = { class: "execution", style: { "border-top": "solid 1px #eceef6" } }, ue = { style: { display: "flex", "justify-content": "center" } }, ce = { class: "flex-c" }, ge = { class: "add_but" }, fe = { class: "el-upload__tip" }, we = { class: "p-[5px]" }, be = { class: "truncate" }, he = { class: "flex-c" }, _e = { key: 0, class: "el-table__empty-block" }, ye = { class: "flex-c" }, xe = { class: "add_but" }, ve = { class: "el-upload__tip" }, Ce = { class: "flex-c" }, ke = { class: "add_but" }, Le = { class: "el-upload__tip" }, Ve = { class: "dialog-footer" };
function ze(e, a, L, i, j, B) {
  const V = d("avue-tree"), x = d("el-card"), z = d("el-col"), P = d("el-icon-picture"), y = d("el-icon"), g = d("el-button"), v = d("el-upload"), E = d("el-image"), A = d("el-divider"), M = d("el-tooltip"), U = d("el-row"), N = d("el-empty"), C = d("el-pagination"), k = d("el-tab-pane"), w = d("el-icon-microphone"), b = d("el-table-column"), D = d("el-table"), F = d("el-icon-video-play"), t = d("el-input"), r = d("el-form-item"), s = d("el-form"), _ = d("el-dialog"), O = d("el-tabs"), q = le, $ = ae("loading");
  return m(), S("div", me, [l(q, null, { default: o(() => [l(U, { span: 24, gutter: 10 }, { default: o(() => [l(z, { xs: 24, sm: 24, md: 3 }, { default: o(() => [l(x, { shadow: "never" }, { header: o(() => [u("div", ue, [u("span", null, p(e.$t("wxmp.wxmaterial.officialAccountName")), 1)])]), default: o(() => [l(V, { ref: "tree", option: e.treeOption, style: { "margin-top": "-1px" }, data: e.treeWxAppData, props: e.treeWxAppProps, "filter-node-method": i.filterNode, "node-key": "id", "default-expand-all": "", onNodeClick: i.nodeClick }, null, 8, ["option", "data", "props", "filter-node-method", "onNodeClick"])]), _: 1 })]), _: 1 }), l(z, { xs: 24, sm: 24, md: 20, class: "user__main", style: { "min-height": "76vh", padding: "10px", "border-left": "solid 1px #eceef6" } }, { default: o(() => [e.appId ? (m(), f(O, { key: 0, modelValue: e.materialType, "onUpdate:modelValue": a[7] || (a[7] = (n) => e.materialType = n), onTabClick: i.handleClick }, { default: o(() => [l(k, { name: "image" }, { label: o(() => [u("div", ce, [l(y, null, { default: o(() => [l(P)]), _: 1 }), c(p(e.$t("wxmp.wxmaterial.image")), 1)])]), default: o(() => [u("div", ge, [l(v, { action: e.actionUrl, headers: e.headers, multiple: "", limit: 1, "on-success": i.handleUploadSuccess, "on-error": i.handleUploadError, "file-list": e.fileList, "before-upload": i.beforeImageUpload, data: e.uploadData }, { tip: o(() => [u("div", fe, p(e.$t("wxmp.wxmaterial.formatSupport")), 1)]), default: o(() => [i.permissions["wxmp:wxmaterial:add"] ? (m(), f(g, { key: 0, icon: "Upload", type: "primary" }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.clickToUpload")), 1)]), _: 1 })) : h("", true)]), _: 1 }, 8, ["action", "headers", "on-success", "on-error", "file-list", "before-upload", "data"])]), T((m(), f(U, null, { default: o(() => [(m(true), S(te, null, oe(e.tableData, (n) => (m(), S("div", { key: n.id, class: "m-[5px]" }, [l(x, { "body-style": { padding: "5px" }, style: { width: "210px" } }, { default: o(() => [l(E, { src: n.url, fit: "contain", "preview-src-list": [n.url], style: { width: "210px", height: "200px" } }, null, 8, ["src", "preview-src-list"]), l(A), u("div", we, [l(M, { effect: "dark", content: n.name, placement: "top-start" }, { content: o(() => [c(p(n.name), 1), a[8] || (a[8] = u("br", null, null, -1)), c(p(n.url), 1)]), default: o(() => [u("div", be, p(n.name), 1)]), _: 2 }, 1032, ["content"]), u("div", he, [l(g, { class: "mt-[10px]", type: "danger", icon: "delete", circle: "", onClick: (I) => i.delMaterial(n) }, null, 8, ["onClick"])])])]), _: 2 }, 1024)]))), 128))]), _: 1 })), [[$, e.tableLoading]]), e.tableData.length <= 0 && !e.tableLoading ? (m(), S("div", _e, [l(N)])) : h("", true), l(C, { "current-page": e.page.currentPage, "onUpdate:currentPage": a[0] || (a[0] = (n) => e.page.currentPage = n), "page-sizes": [10, 20], "page-size": e.page.pageSize, layout: "total, sizes, prev, pager, next, jumper", total: e.page.total, class: "pagination", onSizeChange: i.sizeChange, onCurrentChange: i.currentChange }, null, 8, ["current-page", "page-size", "total", "onSizeChange", "onCurrentChange"])]), _: 1 }), l(k, { name: "voice" }, { label: o(() => [u("div", ye, [l(y, null, { default: o(() => [l(w)]), _: 1 }), c(p(e.$t("wxmp.wxmaterial.voice")), 1)])]), default: o(() => [u("div", xe, [l(v, { action: e.actionUrl, headers: e.headers, multiple: "", limit: 1, "on-success": i.handleUploadSuccess, "on-error": i.handleUploadError, "file-list": e.fileList, "before-upload": i.beforeVoiceUpload, data: e.uploadData }, { tip: o(() => [u("div", ve, p(e.$t("wxmp.wxmaterial.formatSupportVoice")), 1)]), default: o(() => [i.permissions["wxmp:wxmaterial:add"] ? (m(), f(g, { key: 0, type: "primary", icon: "Upload" }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.clickToUpload")), 1)]), _: 1 })) : h("", true)]), _: 1 }, 8, ["action", "headers", "on-success", "on-error", "file-list", "before-upload", "data"])]), T((m(), f(D, { data: e.tableData, stripe: "", border: "" }, { default: o(() => [l(b, { prop: "mediaId", label: "media_id" }), l(b, { prop: "name", label: e.$t("wxmp.wxmaterial.name") }, null, 8, ["label"]), l(b, { prop: "updateTime", label: e.$t("wxmp.wxmaterial.updateTime") }, null, 8, ["label"]), l(b, { fixed: "right", label: e.$t("wxmp.wxmaterial.operation") }, { default: o((n) => [i.permissions["wxmp:wxmaterial:get"] ? (m(), f(g, { key: 0, link: "", icon: "el-icon-download", type: "primary", onClick: (I) => i.handleDown(n.row) }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.download")), 1)]), _: 1 }, 8, ["onClick"])) : h("", true), i.permissions["wxmp:wxmaterial:del"] ? (m(), f(g, { key: 1, link: "", icon: "el-icon-delete", type: "danger", onClick: (I) => i.delMaterial(n.row) }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.delete")), 1)]), _: 1 }, 8, ["onClick"])) : h("", true)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"])), [[$, e.tableLoading]]), l(C, { "current-page": e.page.currentPage, "onUpdate:currentPage": a[1] || (a[1] = (n) => e.page.currentPage = n), layout: "total, sizes, prev, pager, next, jumper", "page-sizes": [10, 20], "page-size": e.page.pageSize, total: e.page.total, class: "pagination", onSizeChange: i.sizeChange, onCurrentChange: i.currentChange }, null, 8, ["current-page", "page-size", "total", "onSizeChange", "onCurrentChange"])]), _: 1 }), l(k, { name: "video" }, { label: o(() => [u("div", Ce, [l(y, null, { default: o(() => [l(F)]), _: 1 }), c(p(e.$t("wxmp.wxmaterial.video")), 1)])]), default: o(() => [u("div", ke, [i.permissions["wxmp:wxmaterial:add"] ? (m(), f(g, { key: 0, icon: "Plus", type: "primary", onClick: i.handleAddVideo }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.createNew")), 1)]), _: 1 }, 8, ["onClick"])) : h("", true)]), T((m(), f(_, { modelValue: e.dialogVideoVisible, "onUpdate:modelValue": a[5] || (a[5] = (n) => e.dialogVideoVisible = n), title: e.$t("wxmp.wxmaterial.createNewVideo") }, { footer: o(() => [u("div", Ve, [l(g, { onClick: a[4] || (a[4] = (n) => e.dialogVideoVisible = false) }, { default: o(() => [c(p(e.$t("commons.cancel")), 1)]), _: 1 }), l(g, { type: "primary", onClick: i.subVideo }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.submit")), 1)]), _: 1 }, 8, ["onClick"])])]), default: o(() => [l(v, { ref: "uploadVideoRef", action: e.actionUrl, headers: e.headers, multiple: "", limit: 1, "on-success": i.handleUploadSuccess, "on-error": i.handleUploadError, "file-list": e.fileList, "before-upload": i.beforeVideoUpload, "auto-upload": false, data: e.uploadData }, { trigger: o(() => [i.permissions["wxmp:wxmaterial:add"] ? (m(), f(g, { key: 0, icon: "Plus", type: "primary" }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.selectVideo")), 1)]), _: 1 })) : h("", true)]), default: o(() => [u("div", Le, p(e.$t("wxmp.wxmaterial.formatSupportVideo")), 1)]), _: 1 }, 8, ["action", "headers", "on-success", "on-error", "file-list", "before-upload", "data"]), l(s, { ref: "uploadForm", model: e.uploadData, rules: e.uploadRules }, { default: o(() => [l(r, { label: e.$t("wxmp.wxmaterial.title"), prop: "title" }, { default: o(() => [l(t, { modelValue: e.uploadData.title, "onUpdate:modelValue": a[2] || (a[2] = (n) => e.uploadData.title = n), placeholder: e.$t("wxmp.wxmaterial.titleDescription") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), l(r, { label: e.$t("wxmp.wxmaterial.description"), prop: "introduction" }, { default: o(() => [l(t, { modelValue: e.uploadData.introduction, "onUpdate:modelValue": a[3] || (a[3] = (n) => e.uploadData.introduction = n), rows: 3, type: "textarea", placeholder: e.$t("wxmp.wxmaterial.descriptionTip") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model", "rules"])]), _: 1 }, 8, ["modelValue", "title"])), [[$, e.addMaterialLoading]]), T((m(), f(D, { data: e.tableData, stripe: "", border: "" }, { default: o(() => [l(b, { prop: "mediaId", label: "media_id" }), l(b, { prop: "name", label: e.$t("wxmp.wxmaterial.name") }, null, 8, ["label"]), l(b, { prop: "updateTime", label: e.$t("wxmp.wxmaterial.updateTime") }, null, 8, ["label"]), l(b, { fixed: "right", label: e.$t("wxmp.wxmaterial.operation") }, { default: o((n) => [i.permissions["wxmp:wxmaterial:get"] ? (m(), f(g, { key: 0, link: "", type: "primary", icon: "View", onClick: (I) => i.handleInfo(n.row) }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.view")), 1)]), _: 1 }, 8, ["onClick"])) : h("", true), i.permissions["wxmp:wxmaterial:del"] ? (m(), f(g, { key: 1, link: "", type: "danger", icon: "Delete", onClick: (I) => i.delMaterial(n.row) }, { default: o(() => [c(p(e.$t("wxmp.wxmaterial.delete")), 1)]), _: 1 }, 8, ["onClick"])) : h("", true)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"])), [[$, e.tableLoading]]), l(C, { "current-page": e.page.currentPage, "onUpdate:currentPage": a[6] || (a[6] = (n) => e.page.currentPage = n), "page-sizes": [10, 20], "page-size": e.page.pageSize, layout: "total, sizes, prev, pager, next, jumper", total: e.page.total, class: "pagination", onCurrentChange: i.currentChange, onSizeChange: i.sizeChange }, null, 8, ["current-page", "page-size", "total", "onCurrentChange", "onSizeChange"])]), _: 1 })]), _: 1 }, 8, ["modelValue", "onTabClick"])) : h("", true)]), _: 1 })]), _: 1 })]), _: 1 })]);
}
const Ie = ee(se, [["render", ze], ["__scopeId", "data-v-ffc9f529"]]);
export {
  Ie as default
};
