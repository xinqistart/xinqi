import { A as V, R as A, p as F, q as G, S as P, P as _, K as N, _ as D, c as T, o as h, g as R, B as O, b as l, h as d, f as m, z as u, r as a, e as i, w as $, D as v, F as z } from "./index-DAdfXJ2i.js";
import { c as M } from "./goodsspu-Dmc9OYVL.js";
import { i as U } from "./goodsspu-DKL_9wDU.js";
import { g as j } from "./suppliergoodsspu-B_JJ2gkc.js";
import { f as q } from "./suppliergoodsspuspec-DZt0HeAC.js";
import E from "./goods-supplier-select-Bn7KARNC.js";
import "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
import "./goodsspecvalue-CIlXCfn0.js";
import "./goodsspec-B5ivNhww.js";
import "./BaseEditor-CKHWT0N2.js";
import "./index-Qlhkq_mt.js";
import "./configeditor-CYxVeM-q.js";
import "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
const H = { components: { GoodsSupplierSelect: E }, setup(e) {
  const { proxy: o } = V(), s = A({ tableOptionImportSupplier: M, goodsImportSupplier: { show: false, active: 1, listForm: [], importForm: {}, form: {} } });
  F(null);
  const c = G(() => {
    var _a;
    return (_a = N()) == null ? void 0 : _a.permissions;
  }), k = F();
  function y() {
    k.value && k.value.validate((r, t, p) => {
      if (r) s.goodsImportSupplier.active++, s.goodsImportSupplier.listForm.length > 0 && (s.goodsImportSupplier.listForm = s.goodsImportSupplier.listForm.map((n) => ({ ...n, ...s.goodsImportSupplier.form }))), t();
      else return false;
    });
  }
  function g() {
    s.goodsImportSupplier.active = 1, s.goodsImportSupplier.show = false;
  }
  function I(r) {
    r && (r = _(r), s.goodsImportSupplier.listForm = r);
  }
  function b() {
    if (s.goodsImportSupplier.listForm.length <= 0) {
      o.$message.error(o.$t("commons.selectGoods"));
      return;
    }
    o.$confirm(o.$t("mall.suppliergoodsspu.definiteImport"), o.$t("commons.tip"), { confirmButtonText: o.$t("commons.confirm"), cancelButtonText: o.$t("commons.cancel"), type: "warning" }).then(async () => {
      o.$loading({ lock: true, text: o.$t("mall.suppliergoodsspu.adding"), background: "rgba(0, 0, 0, 0.3)" });
      try {
        let r = [];
        for (let t = 0; t < s.goodsImportSupplier.listForm.length; t++) {
          const p = s.goodsImportSupplier.listForm[t], n = await j(p.id), f = await q({ spuId: p.id });
          n.data.spuSpec = f.data, r.push(n.data);
        }
        r && r.length > 0 && (r = r.map((t) => (t.supplierSpuId = t.id, t.spuCode = t.spuCode + C(), t.id = "", t.createTime = "", t.updateTime = "", t.skus && (t.skus = t.skus.map((p) => (p.firstRebate = s.goodsImportSupplier.form.firstRebate || 0, p.secondRebate = s.goodsImportSupplier.form.secondRebate || 0, p.supplierSkuId = p.id, p.spuId = "", p.specs && (p.specIds = p.specs.reduce((n, f, w) => `${n}${f.specId}-${f.specValueId}${w === p.specs.length - 1 ? "" : "_"}`, ""), p.specs = p.specs.map((n) => (n.id = "", n.spuId = "", n.skuId = "", n))), { ...p, id: "" }))), { ...t, ...s.goodsImportSupplier.form }))), o.$loading().close(), U(r).then((t) => {
          t.code == 0 && (o.$message.success(o.$t("mall.suppliergoodsspu.addSuccessfully")), s.goodsImportSupplier.active = 3, s.goodsImportSupplier.listForm = [], o.$emit("refresh")), o.$loading().close();
        }).catch((t) => {
          o.$message.error(o.$t("mall.suppliergoodsspu.importFailure")), o.$loading().close();
        });
      } catch {
        o.$message.error(o.$t("mall.suppliergoodsspu.importFailure")), o.$loading().close();
        return;
      }
    });
  }
  function C() {
    return `-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
  }
  return { ...P(s), permissions: c, formImportSupplierRef: k, handleSelectionChangeSupplier: I, onImportNextSupplier: y, handleImportSuccess: g, submitBatchAddGoodsSupplier: b };
} }, K = { class: "w-full mt-[-20px]" }, J = { class: "p-10 text-center" }, Q = { class: "mt-[-20px]" }, W = { class: "mt-[-30px]" }, X = { key: 1 }, Y = { class: "relative text-gray-500 text-left" }, Z = { class: "pl-5" }, L = { class: "text-red-400" }, x = { class: "text-red-400" };
function oo(e, o, s, c, k, y) {
  const g = a("el-button"), I = a("el-step"), b = a("el-steps"), C = a("avue-form"), r = a("GoodsSupplierSelect"), t = a("el-result"), p = a("ArrowLeft"), n = a("el-icon"), f = a("ArrowRight"), w = a("Check"), B = a("el-drawer");
  return h(), T(z, null, [c.permissions["mall:goodsspu:add"] ? (h(), R(g, { key: 0, onClick: o[0] || (o[0] = (S) => e.goodsImportSupplier.show = true) }, { default: d(() => [m(u(e.$t("mall.goodsspu.suppliersGoods")), 1)]), _: 1 })) : O("", true), l(B, { modelValue: e.goodsImportSupplier.show, "onUpdate:modelValue": o[4] || (o[4] = (S) => e.goodsImportSupplier.show = S), title: e.$t("mall.goodsspu.goodsImport"), size: "88%" }, { default: d(() => [i("div", K, [l(b, { active: e.goodsImportSupplier.active, "align-center": "" }, { default: d(() => [l(I, { title: e.$t("mall.goodsspu.Process1") }, null, 8, ["title"]), l(I, { title: e.$t("mall.goodsspu.Process2") }, null, 8, ["title"]), l(I, { title: e.$t("mall.goodsspu.Process3") }, null, 8, ["title"])]), _: 1 }, 8, ["active"])]), i("div", J, [$(i("div", Q, [l(C, { ref: "formImportSupplierRef", modelValue: e.goodsImportSupplier.form, "onUpdate:modelValue": o[1] || (o[1] = (S) => e.goodsImportSupplier.form = S), option: e.tableOptionImportSupplier }, null, 8, ["modelValue", "option"])], 512), [[v, e.goodsImportSupplier.active == 1]]), $(i("div", W, [i("div", null, [l(r, { onSelectionChange: c.handleSelectionChangeSupplier }, null, 8, ["onSelectionChange"])])], 512), [[v, e.goodsImportSupplier.active == 2]]), e.goodsImportSupplier.active == 3 ? (h(), R(t, { key: 0, icon: "success", title: e.$t("mall.goodsspu.importSuccess"), "sub-title": e.$t("mall.goodsspu.templateFile7") }, { extra: d(() => [l(g, { type: "primary", plain: "", icon: "Close", onClick: c.handleImportSuccess }, { default: d(() => [m(u(e.$t("mall.goodsspu.off")), 1)]), _: 1 }, 8, ["onClick"]), o[5] || (o[5] = i("br", null, null, -1)), o[6] || (o[6] = i("br", null, null, -1)), l(g, { type: "primary", link: "", icon: "Refresh", onClick: o[2] || (o[2] = (S) => e.goodsImportSupplier.active = 1) }, { default: d(() => [m(u(e.$t("mall.goodsspu.continue")), 1)]), _: 1 })]), _: 1 }, 8, ["title", "sub-title"])) : (h(), T("div", X, [$(l(g, { type: "primary", onClick: o[3] || (o[3] = (S) => e.goodsImportSupplier.active--) }, { default: d(() => [l(n, null, { default: d(() => [l(p)]), _: 1 }), m(u(e.$t("mall.goodsspu.step2")), 1)]), _: 1 }, 512), [[v, e.goodsImportSupplier.active > 1]]), $(l(g, { type: "primary", onClick: c.onImportNextSupplier }, { default: d(() => [m(u(e.$t("mall.goodsspu.step1")), 1), l(n, null, { default: d(() => [l(f)]), _: 1 })]), _: 1 }, 8, ["onClick"]), [[v, e.goodsImportSupplier.active == 1]]), $(l(g, { disabled: !(e.goodsImportSupplier.active == 2 && e.goodsImportSupplier.listForm.length > 0), type: "success", onClick: c.submitBatchAddGoodsSupplier }, { default: d(() => [l(n, { class: "mr-[5px]" }, { default: d(() => [l(w)]), _: 1 }), m(u(e.$t("mall.goodsspu.menuBatchImport")), 1)]), _: 1 }, 8, ["disabled", "onClick"]), [[v, e.goodsImportSupplier.active == 2]])])), i("div", Y, [i("div", null, u(e.$t("mall.goodsspu.supplierTip1")) + " :", 1), i("div", Z, [m(u(e.$t("mall.goodsspu.supplierTip2")), 1), i("span", L, u(e.$t("mall.goodsspu.supplierTip3")), 1), o[7] || (o[7] = m(";", -1)), o[8] || (o[8] = i("br", null, null, -1)), m(" " + u(e.$t("mall.goodsspu.supplierTip4")), 1), i("span", x, u(e.$t("mall.goodsspu.supplierTip5")), 1), o[9] || (o[9] = m(";", -1)), o[10] || (o[10] = i("br", null, null, -1)), m(" " + u(e.$t("mall.goodsspu.supplierTip6")), 1), o[11] || (o[11] = i("br", null, null, -1)), m(" " + u(e.$t("mall.goodsspu.supplierTip7")), 1), o[12] || (o[12] = i("br", null, null, -1))])])])]), _: 1 }, 8, ["modelValue", "title"])], 64);
}
const ho = D(H, [["render", oo]]);
export {
  ho as default
};
