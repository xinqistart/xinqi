import { A as R, p as F, R as z, q as U, K as E, S as j, cC as N, ah as H, cD as K, cE as A, cF as q, cG as G, cH as J, cI as Q, cJ as W, b1 as X, cK as Z, U as ee, cr as ae, cL as ne, bp as te, _ as oe, r as u, c as g, o as r, b as p, h as m, e as $, z as f, g as b, F as ie, v as se, B as I, f as P, a_ as le } from "./index-DAdfXJ2i.js";
import { _ as ce } from "./single-img-upload-BdzFfNk9.js";
import { b as re } from "./tenant-DZmYgWqm.js";
import { M as me } from "./list-CpVj7t9v.js";
import "./user-CcdA_mZX.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const de = { components: { MaterialList: me }, setup() {
  const { proxy: e } = R(), l = F(), n = z({ form: { expireTime: "", logo: null }, tableOption: re, tableData: [], checkedKeys: [], tableLoading: false, page: { total: 0, currentPage: 1, pageSize: 20, ascs: "", descs: "create_time" }, paramsSearch: {}, defaultProps: { label: "name", value: "id" }, treeData: [], dialogLoading: false, id: void 0, roleCode: void 0, propsPackage: { label: "name", value: "id" }, dicPackage: U(() => {
    var _a;
    return l.value && l.value.DIC.packageId ? (_a = l.value) == null ? void 0 : _a.DIC.packageId.map((a) => ({ label: a.name, value: a.id })) : [];
  }) }), o = E().permissions, V = U(() => ({ addBtn: !!o["sys:tenant:add"], delBtn: !!o["sys:tenant:del"], editBtn: !!o["sys:tenant:edit"], viewBtn: !!o["sys:tenant:get"] }));
  function s(a, c) {
    n.tableLoading = true, te(Object.assign({ current: a.currentPage, size: a.pageSize, descs: n.page.descs, ascs: n.page.ascs }, c, n.paramsSearch)).then((d) => {
      n.tableData = d.data.records, n.page.total = d.data.total, n.page.currentPage = a.currentPage, n.page.pageSize = a.pageSize, n.tableLoading = false;
    }).catch(() => {
      n.tableLoading = false;
    });
  }
  function h(a) {
    e.$confirm(e.$t("upms.tenant.confirmDeleteTenant"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      return ne(a.id);
    }).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.delSuccess"), type: "success" }), s(n.page);
    });
  }
  function C(a, c, d, v) {
    a.logo = a.logo.length > 0 ? a.logo[0] : "", ae(a).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.updateSuccess"), type: "success" }), d(), s(n.page);
    }).catch(() => {
      v();
    });
  }
  function w(a, c, d) {
    a.logo = a.logo.length > 0 ? a.logo[0] : "", Z(a).then(() => {
      e.$message({ showClose: true, message: e.$t("commons.addSuccess"), type: "success" }), c(), s(n.page), e.$confirm(e.$t("upms.tenant.addTenantTip"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
        setTimeout(() => {
          ee().logOut();
        }, 10);
      });
    }).catch(() => {
      d();
    });
  }
  function _(a, c) {
    a = X(a), n.paramsSearch = a, n.page.currentPage = 1, s(n.page, a), c();
  }
  function k() {
    s(n.page);
  }
  function y(a, c, d) {
    for (let v = 0; v < a.length; v++) {
      const T = a[v];
      T.children && T.children.length !== 0 ? y(T.children, c, d) : d.push(c.filter((M) => M === T.id));
    }
    return d;
  }
  function D(a, c) {
    return a ? c.label.indexOf(a) !== -1 : true;
  }
  function L(a, c) {
    window.openType = c, c == "add" ? n.form.logo = [] : n.form.logo = [n.form.logo], a();
  }
  function S(a) {
    window.open("#/mall/shop/shopapply/form?tenant_id=" + a.id, "_blank");
  }
  function B(a) {
    e.$confirm(e.$t("upms.tenant.confirmChangeTenantPackage"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      a && a.id && J({ id: a.id, packageId: a.packageId }).then(() => {
        s(n.page);
      }).catch(() => {
        s(n.page);
      });
    }).catch(() => {
      s(n.page);
    });
  }
  function t(a) {
    a && a.id && W({ id: a.id, status: a.status }).then(() => {
      s(n.page);
    }).catch(() => {
      s(n.page);
    });
  }
  function i(a) {
    e.$confirm(e.$t("upms.tenant.confirmChangeTenantExpiration"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      a && a.id && Q({ id: a.id, expireTime: a.expireTime }).then(() => {
        s(n.page);
      }).catch(() => {
        s(n.page);
      });
    }).catch(() => {
      s(n.page);
    });
  }
  function Y(a) {
    e.$confirm(e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), message: H(K, { type: "danger" }, { default: () => e.$t("upms.tenant.confirmInitializeTenantData", { name: a.name }) }), type: "warning" }).then(() => {
      e.$confirm(e.$t("upms.tenant.confirmInitTenantData2"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "error", icon: A(q) }).then(() => {
        n.tableLoading = true, G({ id: a.id }).then(() => {
          e.$message({ message: e.$t("commons.actionSuccess"), type: "success", duration: 60 * 1e3, showClose: true });
        }).catch(() => {
          n.tableLoading = false, n.dialogLoading = false;
        }), setTimeout(() => {
          e.$confirm(e.$t("upms.tenant.confirmInitTenantDataFinish", { name: a.name }), e.$t("commons.tip"), { showCancelButton: false, type: "success", confirmButtonText: e.$t("commons.confirm") }).then(() => {
            n.tableLoading = false, n.dialogLoading = false, s(n.page);
          });
        }, 5 * 1e3);
      }).catch(() => {
        n.tableLoading = false;
      });
    }).catch(() => {
      n.tableLoading = false;
    });
  }
  function O(a) {
    e.$confirm(e.$t("upms.tenant.syncPackageRoleNotice"), e.$t("commons.tip"), { confirmButtonText: e.$t("commons.confirm"), cancelButtonText: e.$t("commons.cancel"), type: "warning" }).then(function() {
      n.tableLoading = true, N({ id: a.id }).then(() => {
        n.tableLoading = false, e.$notify({ title: e.$t("commons.success"), message: e.$t("upms.tenant.syncSuccessful"), type: "success", duration: 2e3 });
      }).catch(() => {
        n.dialogLoading = false;
      });
    });
  }
  function x(a) {
    return a.getTime() < Date.now();
  }
  return { ...j(n), permissions: o, permissionList: V, crud: l, getPage: s, handleDel: h, handleUpdate: C, handleSave: w, searchChange: _, refreshChange: k, resolveAllEunuchNodeId: y, filterNode: D, beforeOpen: L, handleShopapply: S, changeStatus: t, changeExpireTime: i, changePackage: B, disabledDate: x, initTenantDataBaseF: Y, syncTenantPackageF: O };
} }, pe = { class: "app-container calendar-list-container" }, ue = { class: "jl-text-tips ml-2" }, ge = { key: 0, class: "ml-[8px]" }, fe = { key: 0 }, he = { key: 1 }, ye = { key: 1 }, ve = { class: "jl-text-tips" }, be = { key: 0 }, ke = { key: 1 };
function Te(e, l, n, o, V, s) {
  const h = u("el-button"), C = u("el-switch"), w = u("el-option"), _ = u("el-select"), k = u("el-date-picker"), y = u("el-image"), D = u("MaterialList"), L = ce, S = u("avue-crud"), B = le;
  return r(), g("div", pe, [p(B, null, { default: m(() => [$("div", ue, f(e.$t("upms.tenant.syncTenantPackageTips")), 1), p(S, { ref: "crud", modelValue: e.form, "onUpdate:modelValue": l[3] || (l[3] = (t) => e.form = t), page: e.page, "onUpdate:page": l[4] || (l[4] = (t) => e.page = t), option: e.tableOption, data: e.tableData, permission: o.permissionList, "table-loading": e.tableLoading, "before-open": o.beforeOpen, onOnLoad: o.getPage, onSearchChange: o.searchChange, onRefreshChange: o.refreshChange, onRowUpdate: o.handleUpdate, onRowSave: o.handleSave, onRowDel: o.handleDel }, { menu: m((t) => [p(h, { type: "primary", link: "", onClick: (i) => o.handleShopapply(t.row) }, { default: m(() => [P(f(e.$t("upms.tenant.shopEntryApplication")), 1)]), _: 1 }, 8, ["onClick"]), o.permissions["sys:tenant:package:sync"] && t.row.packageId ? (r(), b(h, { key: 0, type: "primary", link: "", onClick: (i) => o.syncTenantPackageF(t.row) }, { default: m(() => [P(f(e.$t("upms.tenant.syncTenantPackage")), 1)]), _: 1 }, 8, ["onClick"])) : I("", true), o.permissions["sys:tenant:database:init"] ? (r(), b(h, { key: 1, type: "primary", link: "", onClick: (i) => o.initTenantDataBaseF(t.row) }, { default: m(() => [P(f(e.$t("upms.tenant.initializeTenantDatabase")), 1)]), _: 1 }, 8, ["onClick"])) : I("", true)]), status: m((t) => [p(C, { modelValue: t.row.status, "onUpdate:modelValue": (i) => t.row.status = i, "active-value": "0", "inactive-value": "9", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close", disabled: !o.permissions["sys:tenant:status"], onChange: (i) => o.changeStatus(t.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])]), packageId: m((t) => [$("div", null, [p(_, { modelValue: t.row.packageId, "onUpdate:modelValue": (i) => t.row.packageId = i, filterable: "", placeholder: e.$t("upms.tenant.selectPackage"), disabled: !o.permissions["sys:tenant:package"], onChange: (i) => o.changePackage(t.row) }, { default: m(() => [(r(true), g(ie, null, se(e.dicPackage, (i) => (r(), b(w, { key: i.value, label: i.label, value: i.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled", "onChange"])])]), expireTime: m((t) => [$("div", null, [p(k, { modelValue: t.row.expireTime, "onUpdate:modelValue": (i) => t.row.expireTime = i, type: "date", "disabled-date": o.disabledDate, placeholder: e.$t("upms.tenant.selectDate"), format: "YYYY-MM-DD 00:00:00", valueFormat: "YYYY-MM-DD 00:00:00", readonly: !o.permissions["sys:tenant:expiretime"], onChange: (i) => o.changeExpireTime(t.row) }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled-date", "placeholder", "readonly", "onChange"])])]), "expireTime-form": m((t) => [t.type == "view" ? (r(), g("span", ge, f(e.form.expireTime), 1)) : (r(), b(k, { key: 1, modelValue: e.form.expireTime, "onUpdate:modelValue": l[0] || (l[0] = (i) => e.form.expireTime = i), type: "date", "disabled-date": o.disabledDate, placeholder: e.$t("upms.tenant.selectDate"), format: "YYYY-MM-DD 00:00:00", valueFormat: "YYYY-MM-DD 00:00:00" }, null, 8, ["modelValue", "disabled-date", "placeholder"]))]), "logo-form": m((t) => [t.type == "view" ? (r(), g("div", fe, [e.form.logo && e.form.logo.length > 0 ? (r(), b(y, { key: 0, src: e.form.logo, "preview-src-list": [e.form.logo], "preview-teleported": true }, null, 8, ["src", "preview-src-list"])) : (r(), g("div", he, "-"))])) : (r(), g("div", ye, [p(D, { value: e.form.logo, "onUpdate:value": l[1] || (l[1] = (i) => e.form.logo = i), type: "image", num: 1, width: 100, height: 100 }, null, 8, ["value"]), $("p", ve, f(e.$t("commons.imageSizeTip", { size: "100*100" })), 1)]))]), "companyLicense-form": m((t) => [t.type == "view" ? (r(), g("div", be, [p(y, { src: e.form.companyLicense, "preview-src-list": [e.form.companyLicense], "preview-teleported": true }, null, 8, ["src", "preview-src-list"])])) : (r(), g("div", ke, [p(L, { value: e.form.companyLicense, "onUpdate:value": l[2] || (l[2] = (i) => e.form.companyLicense = i), needToken: false, actionUrl: "/upms/file/upload/out?fileType=image&dir=tenantapply/" }, null, 8, ["value"])]))]), _: 1 }, 8, ["modelValue", "page", "option", "data", "permission", "table-loading", "before-open", "onOnLoad", "onSearchChange", "onRefreshChange", "onRowUpdate", "onRowSave", "onRowDel"])]), _: 1 })]);
}
const Ue = oe(de, [["render", Te]]);
export {
  Ue as default
};
