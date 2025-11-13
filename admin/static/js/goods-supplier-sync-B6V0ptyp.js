import { f as $e, _ as Oe } from "./suppliergoodsspuspec-DZt0HeAC.js";
import { R as ge, q as Ue, S as be, bk as Pe, _ as le, g as $, o as b, h as l, e as w, c as I, B as T, b as t, f as y, z as g, r as D, v as K, F as H, V as q, ba as he, a_ as Ae, d as Te, A as je, P as Y, p as ue, E as Fe, Q as ce, u as p, w as oe, j as Ee, D as ze, H as te } from "./index-DAdfXJ2i.js";
import { b as Ge, p as Le } from "./goodsspu-DKL_9wDU.js";
import { g as Ne, t as Be } from "./suppliergoodsspu-B_JJ2gkc.js";
import { a as Me, g as me } from "./goodsspec-B5ivNhww.js";
import { f as Je } from "./goodsspuspec-aVm7uABh.js";
import { g as qe } from "./pointsconfig-Df6yTocn.js";
import { g as He } from "./distributionconfig-DFgn2QpM.js";
import { g as Ke } from "./freighttemplat-H0ep6JZX.js";
import { a as Qe } from "./goodsspu-Dmc9OYVL.js";
import { _ as fe } from "./BaseEditor-CKHWT0N2.js";
import { M as W } from "./list-CpVj7t9v.js";
import { a as We, g as Xe } from "./goodsspecvalue-CIlXCfn0.js";
import { _ as Ye } from "./goods-select-DrMu2Gwf.js";
function Ze(o) {
  const a = [];
  for (let i = o.length - 1; i >= 0; i--) o[i + 1] && o[i + 1].leaf ? a[i] = o[i + 1].leaf.length * a[i + 1] || 1 : a[i] = 1;
  return a;
}
function xe(o, a = [], i) {
  const { optionValue: C = "id", optionText: n = "value" } = {}, S = [];
  let h = 0;
  const v = {}, e = Ze(o);
  if (o.length === 0) return S;
  o.forEach((u) => {
    const { leaf: V } = u;
    if (!V || V.length === 0) return true;
    h = (h || 1) * V.length;
  }), a.forEach((u) => {
    const { specs: V, ...k } = u;
    v[V.map((r) => `${r.specId}_${r.specValueId}`).join("|")] = k;
  });
  for (let u = 0; u < h; u++) {
    const V = [], k = [];
    o.forEach((U, P) => {
      const { leaf: E } = U;
      let A = {};
      if (!E || E.length === 0) return true;
      if (E.length > 1) {
        const N = parseInt(u / e[P], 10) % E.length;
        A = o[P].leaf[N];
      } else A = o[P].leaf[0];
      !U[C] || !A[C] || (k.push(`${U[C]}_${A[C]}`), V.push({ specId: U[C], specName: U[n], specValueId: A[C], specValueName: A[n] }));
    });
    const { ...r } = v[k.join("|")] || {};
    S.push({ ...r, specs: V });
  }
  return S;
}
const eo = { components: { MaterialList: W }, props: { form: { type: Object }, specData: { type: Array, default() {
  return [];
} }, goodsSku: { type: Array }, formSupplierSpu: { type: Object }, goodsSkuSupplier: { type: Array, default() {
  return [];
} } }, setup(o) {
  const a = ge({ batchAddObj: { firstRebate: o.form.firstRebate, secondRebate: o.form.secondRebate, skuCode: "", salesPrice: 0, stock: 0, marketPrice: void 0, costPrice: void 0, weight: void 0, volume: void 0 }, skuData: [], coefficient: { purchase_coefficient: 0, guide_coefficient: 0 } }), i = Ue(() => {
    const h = xe(o.specData).map((e) => ({ specs: e.specs, specIds: e.specs.reduce((u, V, k) => `${u}${V.specId}-${V.specValueId}${k === e.specs.length - 1 ? "" : "_"}`, "") })), v = o.goodsSku.map((e) => ({ ...e, specIds: e.specs.reduce((u, V, k) => `${u}${V.specId}-${V.specValueId}${k === e.specs.length - 1 ? "" : "_"}`, "") }));
    return h.forEach((e) => {
      v.forEach(function(u) {
        const V = e.specIds.split("_"), k = u.specIds.split("_");
        let r = true;
        V.forEach(function(U) {
          k.find((P) => P == U) || (r = false);
        }), e = e, r && (e.id = u.id ? u.id : void 0, e.picUrl = u.picUrl ? u.picUrl : "", e.skuCode = u.skuCode ? u.skuCode : void 0, e.salesPrice = u.salesPrice, e.marketPrice = u.marketPrice, e.costPrice = u.costPrice, e.stock = u.stock, e.weight = u.weight, e.volume = u.volume, e.firstRebate = u.firstRebate, e.secondRebate = u.secondRebate, e.enable = u.enable);
      });
    }), h;
  });
  function C() {
    a.skuData.forEach(function(h) {
      h.enable == "1" && (a.batchAddObj.skuCode && (h.skuCode = a.batchAddObj.skuCode), a.batchAddObj.salesPrice >= 0 && (h.salesPrice = a.batchAddObj.salesPrice), a.batchAddObj.marketPrice >= 0 && (h.marketPrice = a.batchAddObj.marketPrice), a.batchAddObj.costPrice >= 0 && (h.costPrice = a.batchAddObj.costPrice), a.batchAddObj.stock >= 0 && (h.stock = a.batchAddObj.stock), a.batchAddObj.weight >= 0 && (h.weight = a.batchAddObj.weight), a.batchAddObj.volume >= 0 && (h.volume = a.batchAddObj.volume), a.batchAddObj.firstRebate >= 0 && (h.firstRebate = a.batchAddObj.firstRebate), a.batchAddObj.secondRebate >= 0 && (h.secondRebate = a.batchAddObj.secondRebate));
    });
  }
  function n(h) {
    let v = h.row, e = h.$index, u = h.column.property;
    if (!o.formSupplierSpu || !o.formSupplierSpu.skus) return true;
    let V = o.formSupplierSpu.skus[e];
    return JSON.stringify(v[u]) == JSON.stringify(V[u]);
  }
  function S(h) {
    h.row;
    let v = h.$index;
    return h.column.property, !o.formSupplierSpu || !o.formSupplierSpu.skus ? false : o.formSupplierSpu.skus[v].enable == "0";
  }
  return { ...be(a), skusList: i, batchAdd: C, compareField: n, enableDisabled: S };
}, watch: { formSupplierSpu(o) {
}, form(o) {
  o && (o.firstRebate || o.secondRebate) && (o.firstRebate && o.firstRebate !== 0 && (this.batchAddObj.firstRebate = o.firstRebate), o.secondRebate && o.secondRebate !== 0 && (this.batchAddObj.secondRebate = o.secondRebate));
}, skuData: { deep: true, immediate: true, handler(o) {
  this.$emit("getGoodsSku", o);
} }, skusList: { deep: true, immediate: true, handler(o, a) {
  if (!o || !o.length) return this.skuData = [];
  if (!a || !a.length) return this.skuData = o.map((n) => ({ ...n, id: n.id ? n.id : void 0, picUrl: n.picUrl ? n.picUrl : "", skuCode: n.skuCode ? n.skuCode : void 0, salesPrice: n.salesPrice ? n.salesPrice : 0, marketPrice: n.marketPrice ? n.marketPrice : void 0, costPrice: n.costPrice ? n.costPrice : null, stock: n.stock ? n.stock : 0, weight: n.weight ? n.weight : void 0, volume: n.volume ? n.volume : void 0, firstRebate: n.firstRebate || n.firstRebate == 0 ? n.firstRebate : this.form.firstRebate, secondRebate: n.secondRebate || n.secondRebate == 0 ? n.secondRebate : this.form.secondRebate, enable: n.enable ? n.enable : "1" }));
  if (o[0].specs.length !== a[0].specs.length) return this.skuData = o.map((n) => ({ ...n, id: void 0, picUrl: "", skuCode: void 0, salesPrice: 0, marketPrice: void 0, costPrice: void 0, stock: 0, weight: void 0, volume: void 0, firstRebate: this.form.firstRebate, secondRebate: this.form.secondRebate, enable: "1" }));
  if (o.length === a.length) return this.skuData = o.map((n, S) => ({ ...this.skuData[S], ...n }));
  function i(n, S) {
    return n = n.map((h) => h.specIds), S = S.map((h) => h.specIds), Pe(n, S);
  }
  const C = i(o, a);
  if (o.length > a.length) {
    const n = [];
    o.forEach((S) => {
      const h = this.skuData.find((v) => v.specIds === S.specIds);
      h ? n.push(h) : n.push({ ...S, id: void 0, picUrl: "", skuCode: void 0, salesPrice: 0, marketPrice: void 0, costPrice: void 0, stock: 0, weight: void 0, volume: void 0, firstRebate: this.form.firstRebate, secondRebate: this.form.secondRebate, enable: "1" });
    }), this.skuData = n;
  } else this.skuData = this.skuData.filter((n) => !C.includes(n.specIds));
} } } }, oo = { class: "sku-table" }, to = { key: 0 };
function lo(o, a, i, C, n, S) {
  const h = D("el-button"), v = D("el-input-number"), e = D("el-tooltip"), u = D("el-col"), V = D("el-input"), k = D("el-row"), r = D("el-table-column"), U = D("MaterialList"), P = D("el-switch"), E = D("el-table"), A = he, N = Ae;
  return b(), $(N, null, { default: l(() => [w("div", oo, [o.skuData.length > 0 ? (b(), I("div", to, [t(h, { icon: "el-icon-expand", link: "" }, { default: l(() => [y(g(o.$t("components.sku.batchSetting")), 1)]), _: 1 })])) : T("", true), o.skuData.length > 0 ? (b(), $(k, { key: 1, gutter: 10 }, { default: l(() => [t(u, { span: 2.5 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.sellingPrice"), placement: "top" }, { default: l(() => [t(v, { modelValue: o.batchAddObj.salesPrice, "onUpdate:modelValue": a[0] || (a[0] = (d) => o.batchAddObj.salesPrice = d), size: "small", style: { width: "100%" }, "controls-position": "right", placeholder: o.$t("components.sku.sellingPrice"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), t(u, { span: 2.5 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.marketPrice"), placement: "top" }, { default: l(() => [t(v, { modelValue: o.batchAddObj.marketPrice, "onUpdate:modelValue": a[1] || (a[1] = (d) => o.batchAddObj.marketPrice = d), style: { width: "100%" }, size: "small", "controls-position": "right", placeholder: o.$t("components.sku.marketPrice"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), i.form.supplierId ? T("", true) : (b(), $(u, { key: 0, span: 2.5 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.costPrice"), placement: "top" }, { default: l(() => [t(v, { modelValue: o.batchAddObj.costPrice, "onUpdate:modelValue": a[2] || (a[2] = (d) => o.batchAddObj.costPrice = d), size: "small", style: { width: "100%" }, "controls-position": "right", placeholder: o.$t("components.sku.costPrice"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 })), t(u, { span: 2.5 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.weight"), placement: "top" }, { default: l(() => [t(v, { modelValue: o.batchAddObj.weight, "onUpdate:modelValue": a[3] || (a[3] = (d) => o.batchAddObj.weight = d), size: "small", style: { width: "100%" }, "controls-position": "right", placeholder: o.$t("components.sku.weight"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), t(u, { span: 2.5 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.volume"), placement: "top" }, { default: l(() => [t(v, { modelValue: o.batchAddObj.volume, "onUpdate:modelValue": a[4] || (a[4] = (d) => o.batchAddObj.volume = d), style: { width: "100%" }, size: "small", "controls-position": "right", placeholder: o.$t("components.sku.volume"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), t(u, { span: 2.5 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.stock"), placement: "top" }, { default: l(() => [t(v, { modelValue: o.batchAddObj.stock, "onUpdate:modelValue": a[5] || (a[5] = (d) => o.batchAddObj.stock = d), size: "small", style: { width: "100%" }, "controls-position": "right", placeholder: o.$t("components.sku.stock"), precision: 0, step: 1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), t(u, { span: 2 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.skuCode"), placement: "top" }, { default: l(() => [t(V, { modelValue: o.batchAddObj.skuCode, "onUpdate:modelValue": a[6] || (a[6] = (d) => o.batchAddObj.skuCode = d), size: "small", placeholder: o.$t("components.sku.skuCode"), style: { width: "100%" }, clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), t(u, { span: 2.5 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.firstCommission") + "%", placement: "top" }, { default: l(() => [t(v, { modelValue: o.batchAddObj.firstRebate, "onUpdate:modelValue": a[7] || (a[7] = (d) => o.batchAddObj.firstRebate = d), size: "small", "controls-position": "right", placeholder: o.$t("components.sku.firstCommission"), precision: 0, step: 1, min: 0, max: 100 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), t(u, { span: 2.5 }, { default: l(() => [t(e, { effect: "dark", content: o.$t("components.sku.secondCommission") + "%", placement: "top" }, { default: l(() => [t(v, { modelValue: o.batchAddObj.secondRebate, "onUpdate:modelValue": a[8] || (a[8] = (d) => o.batchAddObj.secondRebate = d), size: "small", "controls-position": "right", placeholder: o.$t("components.sku.secondCommission"), precision: 0, step: 1, min: 0, max: 100 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), t(u, { span: 2.5 }, { default: l(() => [t(h, { type: "primary", size: "small", link: "", onClick: C.batchAdd, icon: "Finished" }, { default: l(() => [y(g(o.$t("components.sku.batchSetting")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 })]), _: 1 })) : T("", true), a[15] || (a[15] = w("br", null, null, -1)), t(E, { ref: "skuTableRef", data: o.skuData, size: "small", border: "", "default-expand-all": "" }, { default: l(() => [i.goodsSkuSupplier && i.goodsSkuSupplier.length > 0 ? (b(), $(r, { key: 0, type: "expand", width: "70" }, { default: l((d) => [t(E, { data: [i.goodsSkuSupplier[d.$index]], "show-header": false, "row-class-name": "warning-row", border: "" }, { default: l(() => [t(r, { type: "index", width: "70", align: "center" }, { default: l(() => [...a[9] || (a[9] = [w("span", { class: "text-[#536dfe]" }, "\u4F9B\u5E94\u5546\u539F\u6570\u636E", -1)])]), _: 1 }), (b(true), I(H, null, K(i.specData, (_, F) => (b(), $(r, { key: _.id, prop: _.id, label: _.value, align: "center" }, { default: l((B) => [y(g(B.row.specs[F].specValueName), 1)]), _: 2 }, 1032, ["prop", "label"]))), 128)), t(r, { prop: "picUrl", label: o.$t("commons.image"), width: "75", align: "center" }, { default: l((_) => [w("div", null, [w("div", null, [t(U, { singleValue: _.row.picUrl, "onUpdate:singleValue": (F) => _.row.picUrl = F, shopId: i.form.shopId, disabled: true, num: 1, "is-single": true, width: 60, height: 60, type: "image" }, null, 8, ["singleValue", "onUpdate:singleValue", "shopId"])])])]), _: 1 }, 8, ["label"]), t(r, { prop: "salesPrice", align: "center", "min-width": "110" }, { header: l(() => [y(g(o.$t("components.sku.sellingPrice")), 1), a[10] || (a[10] = w("span", { style: { "margin-left": "5px", "font-size": "large", color: "red" } }, "*", -1))]), _: 1 }), t(r, { prop: "marketPrice", align: "center", "min-width": "110", label: o.$t("components.sku.marketPrice") }, null, 8, ["label"]), t(r, { label: o.$t("components.sku.costPrice"), prop: "costPrice", align: "center", "min-width": "100" }, null, 8, ["label"]), t(r, { prop: "weight", align: "center", "min-width": "100", label: o.$t("components.sku.weight") }, null, 8, ["label"]), t(r, { prop: "volume", align: "center", "min-width": "100", label: o.$t("components.sku.volume") }, null, 8, ["label"]), t(r, { prop: "stock", align: "center", "min-width": "100", label: o.$t("components.sku.stock") }, null, 8, ["label"]), t(r, { prop: "skuCode", align: "center", width: "80", label: o.$t("components.sku.skuCode") }, null, 8, ["label"]), t(r, { prop: "firstRebate", align: "center", width: "60", label: o.$t("components.sku.firstCommission") }, null, 8, ["label"]), t(r, { prop: "secondRebate", align: "center", width: "60", label: o.$t("components.sku.secondCommission") }, null, 8, ["label"]), t(r, { align: "center", width: "50", label: o.$t("components.sku.enable") }, { default: l((_) => [t(P, { modelValue: _.row.enable, "onUpdate:modelValue": (F) => _.row.enable = F, disabled: true, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"])]), _: 1 })) : T("", true), (b(true), I(H, null, K(i.specData, (d, _) => (b(), $(r, { key: d.id, prop: d.id, label: d.value, align: "center" }, { default: l((F) => [y(g(F.row.specs[_].specValueName), 1)]), _: 2 }, 1032, ["prop", "label"]))), 128)), t(r, { prop: "picUrl", label: o.$t("commons.image"), width: "75", align: "center" }, { default: l((d) => [w("div", null, [w("div", null, [t(U, { singleValue: d.row.picUrl, "onUpdate:singleValue": (_) => d.row.picUrl = _, shopId: i.form.shopId, disabled: d.type == "view", num: 1, "is-single": true, width: 60, height: 60, type: "image" }, null, 8, ["singleValue", "onUpdate:singleValue", "shopId", "disabled"])])])]), _: 1 }, 8, ["label"]), t(r, { prop: "salesPrice", align: "center", "min-width": "110" }, { header: l(() => [y(g(o.$t("components.sku.sellingPrice")), 1), a[11] || (a[11] = w("span", { style: { "margin-left": "5px", "font-size": "large", color: "red" } }, "*", -1))]), default: l((d) => [t(v, { modelValue: d.row.salesPrice, "onUpdate:modelValue": (_) => d.row.salesPrice = _, size: "small", style: { width: "100%" }, "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable, class: q(C.compareField(d) ? "" : "el-input-diff") }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"])]), _: 1 }), t(r, { prop: "marketPrice", align: "center", "min-width": "110", label: o.$t("components.sku.marketPrice") }, { default: l((d) => [t(v, { modelValue: d.row.marketPrice, "onUpdate:modelValue": (_) => d.row.marketPrice = _, size: "small", style: { width: "100%" }, "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable, class: q(C.compareField(d) ? "" : "el-input-diff") }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"])]), _: 1 }, 8, ["label"]), t(r, { label: o.$t("components.sku.costPrice"), prop: "costPrice", align: "center", "min-width": "100" }, { default: l((d) => [i.form.supplierId ? (b(), $(e, { key: 0, effect: "dark", content: "\u4F9B\u5E94\u5546\u5546\u54C1\u6210\u672C\u4EF7\u4E0D\u80FD\u4FEE\u6539", placement: "top" }, { default: l(() => [t(A, { amount: d.row.costPrice, color: "#555555" }, null, 8, ["amount"])]), _: 2 }, 1024)) : (b(), $(v, { key: 1, modelValue: d.row.costPrice, "onUpdate:modelValue": (_) => d.row.costPrice = _, size: "small", style: { width: "100%" }, "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable, class: q(C.compareField(d) ? "" : "el-input-diff") }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"]))]), _: 1 }, 8, ["label"]), t(r, { prop: "weight", align: "center", "min-width": "100", label: o.$t("components.sku.weight") }, { default: l((d) => [t(v, { modelValue: d.row.weight, "onUpdate:modelValue": (_) => d.row.weight = _, size: "small", style: { width: "100%" }, "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable, class: q(C.compareField(d) ? "" : "el-input-diff") }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"])]), _: 1 }, 8, ["label"]), t(r, { prop: "volume", align: "center", "min-width": "100", label: o.$t("components.sku.volume") }, { default: l((d) => [t(v, { modelValue: d.row.volume, "onUpdate:modelValue": (_) => d.row.volume = _, size: "small", style: { width: "100%" }, "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable, class: q(C.compareField(d) ? "" : "el-input-diff") }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"])]), _: 1 }, 8, ["label"]), t(r, { prop: "stock", align: "center", "min-width": "100", label: o.$t("components.sku.stock") }, { header: l(() => [y(g(o.$t("components.sku.stock")), 1), a[12] || (a[12] = w("span", { style: { "margin-left": "5px", "font-size": "large", color: "red" } }, "*", -1))]), default: l((d) => [t(v, { modelValue: d.row.stock, "onUpdate:modelValue": (_) => d.row.stock = _, name: "stock", size: "small", style: { width: "100%" }, "controls-position": "right", precision: 0, step: 1, min: 0, disabled: !d.row.enable, class: q(C.compareField(d) ? "" : "el-input-diff") }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"])]), _: 1 }, 8, ["label"]), t(r, { prop: "skuCode", align: "center", width: "80", label: o.$t("components.sku.skuCode") }, { default: l((d) => [t(V, { modelValue: d.row.skuCode, "onUpdate:modelValue": (_) => d.row.skuCode = _, style: { width: "100%" }, size: "small", clearable: "", disabled: !d.row.enable, class: q(C.compareField(d) ? "" : "el-input-diff") }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"])]), _: 1 }, 8, ["label"]), t(r, { prop: "firstRebate", align: "center", width: "60", label: o.$t("components.sku.firstCommission") }, { header: l(() => [y(g(o.$t("components.sku.firstCommission") + "%"), 1), a[13] || (a[13] = w("span", { style: { "margin-left": "5px", "font-size": "large", color: "red" } }, "*", -1))]), default: l((d) => [t(v, { modelValue: d.row.firstRebate, "onUpdate:modelValue": (_) => d.row.firstRebate = _, size: "small", style: { width: "100%" }, controls: false, precision: 0, step: 1, min: 0, max: 100, disabled: !d.row.enable }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"]), t(r, { prop: "secondRebate", align: "center", width: "60", label: o.$t("components.sku.secondCommission") }, { header: l(() => [y(g(o.$t("components.sku.secondCommission") + "%"), 1), a[14] || (a[14] = w("span", { style: { "margin-left": "5px", "font-size": "large", color: "red" } }, "*", -1))]), default: l((d) => [t(v, { modelValue: d.row.secondRebate, "onUpdate:modelValue": (_) => d.row.secondRebate = _, size: "small", style: { width: "100%" }, controls: false, precision: 0, step: 1, min: 0, max: 100, disabled: !d.row.enable }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"]), t(r, { align: "center", width: "50", label: o.$t("components.sku.enable") }, { default: l((d) => [t(P, { modelValue: d.row.enable, "onUpdate:modelValue": (_) => d.row.enable = _, disabled: C.enableDisabled(d), "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"]), y(" " + g(o.skuData.length) + g(o.$t("components.sku.pieces")), 1)])]), _: 1 });
}
const ke = le(eo, [["render", lo], ["__scopeId", "data-v-1dc07729"]]), so = { components: { SkuTable: ke }, props: { form: { type: Object }, goodsSpec: { type: Array }, goodsSpuSpec: { type: Array }, goodsSku: { type: Array }, specType: { type: String }, formSupplierSpu: { type: Object }, goodsSkuSupplier: { type: Array } }, data() {
  return { goodsSpecAdd: null, goodsSpecValueAdd: null, goodsSpecValue: null, goodsSpuSpecIndex: null, goodsSkuOne: null, rules: { firstRebate: [{ required: true, message: this.$t("components.sku.enterFirstCommission"), trigger: "blur" }], secondRebate: [{ required: true, message: this.$t("components.sku.enterSecondCommission"), trigger: "blur" }] } };
}, computed: { goodsSpuSpecFilter() {
  return this.goodsSpuSpec.filter((o) => o.value && o.leaf != null && o.leaf.length);
} }, watch: { form: { immediate: true, handler(o) {
  o && (this.goodsSku.length > 0 ? (this.goodsSkuOne = this.goodsSku[0], this.goodsSkuOne.enable = this.goodsSkuOne.enable || this.goodsSkuOne.enable == "0" ? this.goodsSkuOne.enable : "1") : this.goodsSkuOne = { salesPrice: 0, marketPrice: void 0, costPrice: void 0, stock: 0, weight: void 0, volume: void 0, firstRebate: this.form.firstRebate, secondRebate: this.form.secondRebate, enable: "1" }, !this.goodsSkuOne.firstRebate && this.goodsSkuOne.firstRebate !== 0 && (this.goodsSkuOne.firstRebate = o.firstRebate), !this.goodsSkuOne.secondRebate && this.goodsSkuOne.secondRebate !== 0 && (this.goodsSkuOne.secondRebate = o.secondRebate));
} }, goodsSkuOne: { deep: true, immediate: true, handler(o) {
  this.$emit("getGoodsSku", [o]);
} } }, created() {
}, methods: { getGoodsSku(o) {
  this.$emit("getGoodsSku", o, this.goodsSpuSpec);
}, delGoodsSpuSpecValue(o, a) {
  this.goodsSpuSpec[o].leaf.splice(a, 1);
}, delGoodsSpuSpec(o) {
  const a = this.goodsSpuSpec[o].id;
  this.goodsSpuSpec.splice(o, 1), this.goodsSpec.forEach(function(i) {
    i.id == a && (i.disabled = false);
  });
}, addSpecValue(o) {
  Xe({ specId: o }).then((a) => {
    this.goodsSpecValue = a.data, this.goodsSpuSpec.forEach((i, C) => {
      i.id == o && (this.goodsSpuSpecIndex = C, this.goodsSpecValue.forEach(function(n) {
        i.leaf.forEach(function(S) {
          n.id == S.id && (n.disabled = true);
        });
      }));
    });
  });
}, goodsSpecValueChange(o) {
  this.goodsSpecValueAdd = null;
  let a = true;
  this.goodsSpecValue.forEach((i) => {
    i.id == o && (a = false, i.disabled = true, this.goodsSpuSpec[this.goodsSpuSpecIndex].leaf.push({ id: i.id, value: i.name }));
  }), a && We({ specId: this.goodsSpuSpec[this.goodsSpuSpecIndex].id, name: o }).then((i) => {
    this.goodsSpecValue.push({ id: i.data.id, name: i.data.name, disabled: true }), this.goodsSpuSpec[this.goodsSpuSpecIndex].leaf.push({ id: i.data.id, value: i.data.name });
  });
}, goodsSpecChange(o) {
  this.goodsSpecAdd = null;
  let a = true;
  this.goodsSpec.forEach((i) => {
    i.id == o && (a = false, i.disabled = true, this.goodsSpuSpec.push({ id: i.id, value: i.name, leaf: [] }));
  }), a && Me({ name: o }).then((i) => {
    this.goodsSpec.push({ id: i.data.id, name: i.data.name, disabled: true }), this.goodsSpuSpec.push({ id: i.data.id, value: i.data.name, leaf: [] });
  });
}, addSpec() {
  this.goodsSpec.forEach((o) => {
    this.goodsSpuSpec.forEach(function(a) {
      o.id == a.id && (o.disabled = true);
    });
  });
}, compareField(o) {
  if (!this.formSupplierSpu || !this.formSupplierSpu.skus) return true;
  let a = this.formSupplierSpu.skus[0];
  return JSON.stringify(this.goodsSkuOne[o]) == JSON.stringify(a[o]);
} } }, ao = { class: "sku-form" }, no = { key: 0 }, io = { key: 0, class: "flex-c" }, ro = { key: 1, style: { "border-right": "#dedfe5 1px solid", "border-bottom": "#dedfe5 1px solid", "border-left": "#dedfe5 1px solid" } }, po = { key: 0, class: "el-table__empty-block" }, uo = { class: "el-table__empty-text" }, co = { class: "el-card__header", style: { padding: "5px 20px" } }, mo = { class: "el-card__body", style: { padding: "5px 20px" } }, fo = { class: "flex justify-center items-center" }, go = { style: { "text-align": "center" } }, bo = { class: "flex justify-center items-center" };
function ho(o, a, i, C, n, S) {
  const h = D("el-text"), v = D("el-input-number"), e = D("el-form-item"), u = he, V = D("el-tooltip"), k = D("el-form"), r = D("el-col"), U = D("el-row"), P = D("el-button"), E = D("el-tag"), A = D("InfoFilled"), N = D("el-icon"), d = D("el-option"), _ = D("el-select"), F = D("el-popover"), B = D("el-tab-pane"), X = D("el-tabs"), Z = ke;
  return b(), I("div", ao, [i.specType == "0" ? (b(), I("div", no, [t(U, null, { default: l(() => [t(r, { span: 15 }, { default: l(() => [t(k, { ref: "form", model: n.goodsSkuOne, rules: n.rules, "label-width": "160px" }, { default: l(() => [t(e, { label: o.$t("components.sku.sellingPrice") }, { label: l(() => [t(h, { type: S.compareField("salesPrice") ? "" : "danger" }, { default: l(() => [y(g(o.$t("components.sku.sellingPrice")), 1)]), _: 1 }, 8, ["type"])]), default: l(() => [t(v, { modelValue: n.goodsSkuOne.salesPrice, "onUpdate:modelValue": a[0] || (a[0] = (R) => n.goodsSkuOne.salesPrice = R), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(e, { label: o.$t("components.sku.marketPrice"), class: "mt-1" }, { label: l(() => [t(h, { type: S.compareField("marketPrice") ? "" : "danger" }, { default: l(() => [y(g(o.$t("components.sku.marketPrice")), 1)]), _: 1 }, 8, ["type"])]), default: l(() => [t(v, { modelValue: n.goodsSkuOne.marketPrice, "onUpdate:modelValue": a[1] || (a[1] = (R) => n.goodsSkuOne.marketPrice = R), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(e, { label: o.$t("components.sku.costPrice"), class: "mt-1" }, { label: l(() => [t(h, { type: S.compareField("costPrice") ? "" : "danger" }, { default: l(() => [y(g(o.$t("components.sku.costPrice")), 1)]), _: 1 }, 8, ["type"])]), default: l(() => [i.form.supplierId ? (b(), I("div", io, [t(V, { effect: "dark", content: "\u4F9B\u5E94\u5546\u5546\u54C1\u6210\u672C\u4EF7\u4E0D\u80FD\u4FEE\u6539", placement: "top" }, { default: l(() => [t(u, { amount: n.goodsSkuOne.costPrice, color: "#555555" }, null, 8, ["amount"])]), _: 1 })])) : (b(), $(v, { key: 1, modelValue: n.goodsSkuOne.costPrice, "onUpdate:modelValue": a[2] || (a[2] = (R) => n.goodsSkuOne.costPrice = R), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"]))]), _: 1 }, 8, ["label"]), t(e, { label: o.$t("components.sku.stock"), class: "mt-1" }, { label: l(() => [t(h, { type: S.compareField("stock") ? "" : "danger" }, { default: l(() => [y(g(o.$t("components.sku.stock")), 1)]), _: 1 }, 8, ["type"])]), default: l(() => [t(v, { modelValue: n.goodsSkuOne.stock, "onUpdate:modelValue": a[3] || (a[3] = (R) => n.goodsSkuOne.stock = R), precision: 0, step: 1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(e, { label: o.$t("components.sku.weight"), class: "mt-1" }, { label: l(() => [t(h, { type: S.compareField("weight") ? "" : "danger" }, { default: l(() => [y(g(o.$t("components.sku.weight")), 1)]), _: 1 }, 8, ["type"])]), default: l(() => [t(v, { modelValue: n.goodsSkuOne.weight, "onUpdate:modelValue": a[4] || (a[4] = (R) => n.goodsSkuOne.weight = R), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(e, { label: o.$t("components.sku.volume"), class: "mt-1" }, { label: l(() => [t(h, { type: S.compareField("volume") ? "" : "danger" }, { default: l(() => [y(g(o.$t("components.sku.volume")), 1)]), _: 1 }, 8, ["type"])]), default: l(() => [t(v, { modelValue: n.goodsSkuOne.volume, "onUpdate:modelValue": a[5] || (a[5] = (R) => n.goodsSkuOne.volume = R), modelModifiers: { number: true }, precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(e, { label: o.$t("components.sku.firstCommission") + "%", class: "mt-1", prop: "firstRebate" }, { default: l(() => [t(v, { modelValue: n.goodsSkuOne.firstRebate, "onUpdate:modelValue": a[6] || (a[6] = (R) => n.goodsSkuOne.firstRebate = R), modelModifiers: { number: true }, precision: 0, step: 1, min: 0, max: 100 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(e, { label: o.$t("components.sku.secondCommission") + "%", class: "mt-1", prop: "secondRebate" }, { default: l(() => [t(v, { modelValue: n.goodsSkuOne.secondRebate, "onUpdate:modelValue": a[7] || (a[7] = (R) => n.goodsSkuOne.secondRebate = R), modelModifiers: { number: true }, precision: 0, step: 1, min: 0, max: 100 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model", "rules"])]), _: 1 })]), _: 1 })])) : T("", true), i.specType == "1" ? (b(), I("div", ro, [t(X, { type: "border-card" }, { default: l(() => [t(B, { label: o.$t("components.sku.itemSpec"), style: { padding: "15px" } }, { default: l(() => [i.goodsSpuSpec == null || i.goodsSpuSpec.length <= 0 ? (b(), I("div", po, [w("span", uo, g(o.$t("commons.notData")), 1)])) : T("", true), (b(true), I(H, null, K(i.goodsSpuSpec, (R, Q) => (b(), I("div", { key: Q, class: "box-card el-card", style: { "margin-bottom": "5px", "border-radius": "0" } }, [w("div", co, [t(U, { justify: "space-between" }, { default: l(() => [w("div", null, g(R.value), 1), i.form.supplierId ? T("", true) : (b(), $(P, { key: 0, type: "danger", size: "small", link: "", icon: "el-icon-delete", onClick: (j) => S.delGoodsSpuSpec(Q) }, { default: l(() => [y(g(o.$t("commons.removeLabel")), 1)]), _: 1 }, 8, ["onClick"]))]), _: 2 }, 1024)]), w("div", mo, [(b(true), I(H, null, K(R.leaf, (j, x) => (b(), $(E, { key: j.id, type: "info", size: "small", closable: !i.form.supplierId, onClose: (se) => S.delGoodsSpuSpecValue(Q, x) }, { default: l(() => [y(g(j.value), 1)]), _: 2 }, 1032, ["closable", "onClose"]))), 128)), a[10] || (a[10] = w("br", null, null, -1)), t(F, { placement: "bottom", width: "260", trigger: "click" }, { reference: l(() => [i.form.supplierId ? T("", true) : (b(), $(P, { key: 0, link: "", type: "primary", onClick: (j) => S.addSpecValue(R.id), style: { "margin-left": "5px" } }, { default: l(() => [y(g(o.$t("components.sku.addSpecValue")), 1)]), _: 1 }, 8, ["onClick"]))]), default: l(() => [w("div", fo, [t(V, { effect: "dark", content: "\u63D0\u793A: \u53EF\u76F4\u63A5\u8F93\u5165\u89C4\u683C\u540D\u540E\u56DE\u8F66\u521B\u5EFA.", placement: "top" }, { default: l(() => [t(N, { class: "mr-[10px]" }, { default: l(() => [t(A)]), _: 1 })]), _: 1 }), t(_, { modelValue: n.goodsSpecValueAdd, "onUpdate:modelValue": a[8] || (a[8] = (j) => n.goodsSpecValueAdd = j), filterable: "", "allow-create": "", "default-first-option": "", placeholder: o.$t("components.sku.enterSpecValue"), onChange: S.goodsSpecValueChange }, { default: l(() => [(b(true), I(H, null, K(n.goodsSpecValue, (j) => (b(), $(d, { key: j.id, label: j.name, value: j.id, disabled: j.disabled }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 2 }, 1032, ["modelValue", "placeholder", "onChange"])])]), _: 2 }, 1024)])]))), 128)), w("div", go, [t(F, { placement: "bottom", width: "260", trigger: "click" }, { reference: l(() => [i.form.supplierId ? T("", true) : (b(), $(P, { key: 0, type: "primary", class: "margin-top-xl", onClick: S.addSpec }, { default: l(() => [y(g(o.$t("components.sku.addSpec")), 1)]), _: 1 }, 8, ["onClick"]))]), default: l(() => [w("div", bo, [t(V, { effect: "dark", content: "\u63D0\u793A: \u53EF\u76F4\u63A5\u8F93\u5165\u89C4\u683C\u540D\u540E\u56DE\u8F66\u521B\u5EFA.", placement: "top" }, { default: l(() => [t(N, { class: "mr-[10px]" }, { default: l(() => [t(A)]), _: 1 })]), _: 1 }), t(_, { modelValue: n.goodsSpecAdd, "onUpdate:modelValue": a[9] || (a[9] = (R) => n.goodsSpecAdd = R), filterable: "", "allow-create": "", "default-first-option": "", placeholder: o.$t("components.sku.enterSpec"), onChange: S.goodsSpecChange }, { default: l(() => [(b(true), I(H, null, K(i.goodsSpec, (R) => (b(), $(d, { key: R.id, label: R.name, value: R.id, disabled: R.disabled }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])])]), _: 1 })])]), _: 1 }, 8, ["label"])]), _: 1 }), t(X, { type: "border-card", style: { "margin-top": "5px" } }, { default: l(() => [t(B, { label: o.$t("components.sku.itemSKU"), style: { padding: "10px" } }, { default: l(() => [t(Z, { specData: S.goodsSpuSpecFilter, goodsSku: i.goodsSku, goodsSkuSupplier: i.goodsSkuSupplier, form: i.form, formSupplierSpu: i.formSupplierSpu, onGetGoodsSku: S.getGoodsSku }, null, 8, ["specData", "goodsSku", "goodsSkuSupplier", "form", "formSupplierSpu", "onGetGoodsSku"])]), _: 1 }, 8, ["label"])]), _: 1 })])) : T("", true)]);
}
const ko = le(so, [["render", ho], ["__scopeId", "data-v-fe2188c9"]]), So = { class: "bg-white mt-[-30px] py-[10px] w-[100%]" }, yo = { class: "flex justify-between w-full" }, vo = { class: "my-3 mt-[80px] mb-[15px]" }, _o = { class: "text-red-400" }, Do = { class: "text-center pb-[20px]" }, wo = { key: 0, class: "jl-text-tips mt-[-15px] mb-[10px] ml-[10px] pb-[20px] pt-[20px]" }, Vo = { style: { height: "100%" } }, Ro = { key: 0 }, Io = { key: 1, class: "jl-text-tips" }, Co = { key: 0 }, $o = { class: "jl-text-tips" }, Oo = { key: 1, class: "jl-text-tips" }, Uo = { key: 0 }, Po = { class: "jl-text-tips" }, Ao = { key: 1, class: "jl-text-tips" }, To = { class: "text-center pb-[20px]" }, jo = { style: { height: "100%", "padding-top": "120px" } }, Fo = { key: 0 }, Eo = { key: 1, class: "jl-text-tips" }, zo = { key: 0 }, Go = { key: 0 }, Lo = { key: 1, class: "jl-text-tips" }, No = { key: 1, class: "jl-text-tips" }, Bo = { style: { flex: "auto" } }, Mo = Te({ __name: "goods-supplier-sync", props: { goods: { type: Object, default: () => {
} } }, emits: ["refresh"], setup(o, { emit: a }) {
  const i = o, C = a, { proxy: n } = je();
  let S = Y(Qe), h = Y(Be);
  v();
  function v() {
    S.group[0].column.find((s) => s.prop == "shopId").disabled = true, S.group[0].column.find((s) => s.prop == "freightType").disabled = true, S.group[0].column.find((s) => s.prop == "freightAmount").disabled = true, S.group[0].column.find((s) => s.prop == "freightTemplatId").disabled = true, S.group[0].column.find((s) => s.prop == "shelf").disabled = true, S.group[1].column.find((s) => s.prop == "specType").display = false, h.group[1].column.find((s) => s.prop == "specType").display = false;
  }
  const e = ge({ activeName: "1", drawer: false, pointsConfig: { defaultDeductScale: 0, defaultDeductAmount: 0 }, distributionConfig: null, goodsData: { loading: true, option: { ...S, tabs: true, tabsActive: 1, submitBtn: false, emptyBtn: false, printBtn: false }, form: {}, goodsSpec: null, goodsSpuSpec: [], goodsSku: [], goodsSkuData: [], goodsSpuSpecData: [], goodsRecommendList: [] }, goodsSupplierData: { loading: true, option: { ...h, detail: true, tabs: true, tabsActive: 1, submitBtn: false, emptyBtn: false, printBtn: false }, form: {}, goodsSpec: null, goodsSpuSpec: [], goodsSku: [] }, freightTemplatDic: [] }), { activeName: u, drawer: V, goodsData: k, goodsSupplierData: r } = be(e), U = ue(null), P = ue(null);
  Fe(() => e.goodsData.form.supplierId, (s, f) => {
    B();
  });
  function E() {
    V.value = true, d();
  }
  function A(s = true) {
    V.value = false, e.goodsData.form = {}, e.goodsData.option.tabsActive = 0, e.goodsSupplierData.form = {}, e.goodsSupplierData.option.tabsActive = 1, u.value = "1", s && C("refresh", "goodsSupplierSync");
  }
  function N(s) {
    A(false), s();
  }
  function d() {
    e.goodsData.form = {}, e.goodsData.option.tabsActive = 1, e.goodsSupplierData.form = {}, e.goodsSupplierData.option.tabsActive = 1, i.goods && (X(i.goods.id), x(i.goods.supplierSpuId));
  }
  function _() {
    e.goodsData.form.skus = e.goodsData.goodsSkuData, e.goodsData.form.spuSpec = e.goodsData.goodsSpuSpecData, e.goodsData.form.categoryFirst = e.goodsData.form.categoryId[0], e.goodsData.form.categorySecond = e.goodsData.form.categoryId[1] ?? "", e.goodsData.form.categoryThird = e.goodsData.form.categoryId[2] ?? "";
    let s = true;
    e.goodsData.form.skus.forEach((f) => {
      if (!f.firstRebate && f.firstRebate != 0) {
        s = false, n.$message({ showClose: true, message: n.$t("commons.inputTips", { name: n.$t("mall.goodsspu.firstRebate") }), type: "error" });
        return;
      }
      if (!f.secondRebate && f.secondRebate != 0) {
        s = false, n.$message({ showClose: true, message: n.$t("commons.inputTips", { name: n.$t("mall.goodsspu.secondRebate") }), type: "error" });
        return;
      }
    }), s && (e.goodsData.form.goodsRecommend || (e.goodsData.form.goodsRecommend = null), e.goodsData.form.supplierId || (e.goodsData.form.supplierId = ""), Le(e.goodsData.form).then(() => {
      e.goodsData.goodsRecommendList = [], e.goodsData.form.shopId = "", n.$message({ showClose: true, message: n.$t("commons.updateSuccess"), type: "success" }), A();
    }).catch(() => {
    }));
  }
  function F() {
    u.value == "1" ? (e.goodsData.form.freightTemplatId && (e.goodsData.option.group[0].column.find((s) => s.prop == "freightTemplatId").display = true, e.goodsSupplierData.option.group[0].column.find((s) => s.prop == "freightTemplatId").display = true), (e.goodsData.form.freightAmount || e.goodsData.form.freightAmount == 0) && (e.goodsData.option.group[0].column.find((s) => s.prop == "freightAmount").display = true, e.goodsSupplierData.option.group[0].column.find((s) => s.prop == "freightAmount").display = true)) : u.value == "4" ? e.goodsData.form.pointsGiveSwitch == "1" ? e.goodsData.option.group[3].column.find((s) => s.prop == "pointsGiveNum").display = true : e.goodsData.option.group[3].column.find((s) => s.prop == "pointsGiveNum").display = false : u.value == "5" && (e.goodsData.form.pointsDeductSwitch == "1" ? (e.goodsData.option.group[4].column.find((s) => s.prop == "pointsDeductScale").display = true, e.goodsData.option.group[4].column.find((s) => s.prop == "pointsDeductAmount").display = true) : (e.goodsData.option.group[4].column.find((s) => s.prop == "pointsDeductScale").display = false, e.goodsData.option.group[4].column.find((s) => s.prop == "pointsDeductAmount").display = false));
  }
  function B() {
    e.goodsData.form.supplierId && (e.freightTemplatDic && e.freightTemplatDic.length > 0 ? te(() => {
      U.value && U.value.updateDic("freightTemplatId", e.freightTemplatDic), P.value && P.value.updateDic("freightTemplatId", e.freightTemplatDic);
    }) : Ke({ shopId: e.goodsData.form.supplierId, ofType: "2" }).then((s) => {
      let f = s.data || [];
      e.freightTemplatDic = f, te(() => {
        U.value && U.value.updateDic("freightTemplatId", f), P.value && P.value.updateDic("freightTemplatId", f);
      });
    }));
  }
  function X(s) {
    e.goodsData.loading = true, Ge(s).then(async (f) => {
      let c = f.data || {};
      const O = [];
      c.categoryFirst && O.push(c.categoryFirst), c.categorySecond && O.push(c.categorySecond), c.categoryThird && O.push(c.categoryThird), c.categoryId = O;
      const z = [];
      c.categoryShopFirst && z.push(c.categoryShopFirst), c.categoryShopSecond && z.push(c.categoryShopSecond), c.categoryShopThird && z.push(c.categoryShopThird), c.categoryShopId = z, await Z({ spuId: c.id }), await R(), e.goodsData.goodsSku = c.skus, e.goodsData.form = c, c.goodsRecommend ? (e.goodsData.goodsRecommendList = [], e.goodsData.form.goodsRecommend = c.goodsRecommend) : (e.goodsData.goodsRecommendList = [], e.goodsData.form.goodsRecommend = { spuIds: [], spuId: e.goodsData.form.id }), e.goodsData.loading = false;
    });
  }
  function Z(s) {
    Je(s).then((f) => {
      try {
        e.goodsData.goodsSpuSpec = f.data;
      } catch {
      }
    });
  }
  function R() {
    me().then((s) => {
      e.goodsData.goodsSpec = s.data;
    }), e.pointsConfig ? e.goodsData.form.pointsDeductScale || (e.goodsData.form.pointsDeductScale = e.pointsConfig.defaultDeductScale, e.goodsData.form.pointsDeductAmount = e.pointsConfig.defaultDeductAmount) : qe().then((s) => {
      e.pointsConfig = s.data ? s.data : null, e.goodsData.form.pointsDeductScale || (e.goodsData.form.pointsDeductScale = e.pointsConfig.defaultDeductScale, e.goodsData.form.pointsDeductAmount = e.pointsConfig.defaultDeductAmount);
    }), e.distributionConfig ? e.goodsData.form.firstRebate || (e.goodsData.form.firstRebate = e.distributionConfig.firstRebate, e.goodsData.form.secondRebate = e.distributionConfig.secondRebate) : Q();
  }
  function Q() {
    e.distributionConfig || He().then((s) => {
      e.distributionConfig = s.data ? s.data : null;
      try {
        !e.goodsData.form.firstRebate && e.distributionConfig && (e.goodsData.form.firstRebate = e.distributionConfig.firstRebate, e.goodsData.form.secondRebate = e.distributionConfig.secondRebate);
      } catch {
      }
    });
  }
  function j(s, f) {
    e.goodsData.goodsSkuData = s, e.goodsData.goodsSpuSpecData = f;
  }
  function x(s) {
    e.goodsSupplierData.loading = true, Ne(s).then(async (f) => {
      let c = f.data || {};
      const O = [];
      c.categoryFirst && O.push(c.categoryFirst), c.categorySecond && O.push(c.categorySecond), c.categoryThird && O.push(c.categoryThird), c.categoryId = O, await se({ spuId: c.id }), await Se(), e.goodsSupplierData.goodsSku = c.skus || [], e.goodsSupplierData.form = c, e.goodsSupplierData.loading = false;
    });
  }
  function se(s) {
    $e(s).then((f) => {
      e.goodsSupplierData.goodsSpuSpec = f.data;
    });
  }
  function Se() {
    me().then((s) => {
      e.goodsSupplierData.goodsSpec = s.data;
    });
  }
  function ye(s, f) {
    if (s.index) {
      let c = Number(s.index);
      u.value = String(c + 1), e.goodsSupplierData.option.tabsActive = u.value, e.goodsData.option.tabsActive = u.value, F(), B();
    }
  }
  function M(s) {
    return JSON.stringify(e.goodsData.form[s]) == JSON.stringify(e.goodsSupplierData.form[s]);
  }
  function ve() {
    L("name"), L("brandId"), L("sellPoint"), ae(), _e(), ne(), De();
  }
  function L(s) {
    e.goodsData.form[s] = e.goodsSupplierData.form[s];
  }
  function ae() {
    e.goodsData.form.categoryId = e.goodsSupplierData.form.categoryId, e.goodsData.form.categoryFirst = e.goodsSupplierData.form.categoryId[0], e.goodsData.form.categorySecond = e.goodsSupplierData.form.categoryId[1], e.goodsData.form.categoryThird = e.goodsSupplierData.form.categoryId[2];
  }
  function _e() {
    e.goodsData.form.freightType = e.goodsSupplierData.form.freightType, e.goodsData.form.freightTemplatId = e.goodsSupplierData.form.freightTemplatId, e.goodsData.form.freightAmount = e.goodsSupplierData.form.freightAmount, B();
  }
  function De() {
    e.goodsData.form.picUrls = Y(e.goodsSupplierData.form.picUrls), e.goodsData.form.videoUrl = e.goodsSupplierData.form.videoUrl, e.goodsData.form.description = Y(e.goodsSupplierData.form.description);
  }
  function ne() {
    e.goodsSupplierData.goodsSku.map((s, f) => {
      let c = e.goodsData.goodsSku[f];
      c.costPrice = s.costPrice, c.marketPrice = s.marketPrice, c.salesPrice = s.salesPrice, c.stock = s.stock, c.volume = s.volume, c.weight = s.weight, c.enable = s.enable, c.picUrl = s.picUrl, c.picUrls = s.picUrls, c.skuCode = s.skuCode;
    }), te(() => {
      e.goodsData.form.skus = e.goodsData.goodsSku;
    });
  }
  return (s, f) => {
    const c = D("el-button"), O = D("el-text"), z = D("el-tab-pane"), we = D("el-tabs"), Ve = D("el-affix"), J = D("el-tooltip"), de = D("avue-form"), ie = D("el-card"), re = D("el-col"), ee = D("el-empty"), Re = Oe, Ie = D("el-row"), Ce = D("el-drawer"), pe = Ee("loading");
    return b(), I(H, null, [t(c, { onClick: f[0] || (f[0] = (m) => E()), text: "", type: "primary", icon: "el-icon-edit" }, { default: l(() => [y(g(s.$t("commons.edit")), 1)]), _: 1 }), t(Ce, { modelValue: p(V), "onUpdate:modelValue": f[15] || (f[15] = (m) => ce(V) ? V.value = m : null), "with-header": false, size: "88%", "append-to-body": "", "before-close": N }, { footer: l(() => [w("div", Bo, [t(c, { type: "primary", icon: "CircleCheck", onClick: _ }, { default: l(() => [y(g(s.$t("commons.updateAndSave")), 1)]), _: 1 }), t(c, { icon: "CircleClose", onClick: f[14] || (f[14] = (m) => A(false)) }, { default: l(() => [y(g(s.$t("commons.cancel")), 1)]), _: 1 })])]), default: l(() => [t(Ve, { offset: 30, style: { width: "100%" } }, { default: l(() => [w("div", So, [w("div", yo, [t(O, { size: "large", tag: "b" }, { default: l(() => [y(g(s.$t("mall.goodsspu.commodityEditor")), 1)]), _: 1 }), t(c, { link: "", icon: "Close", onClick: f[1] || (f[1] = (m) => A(false)) })]), t(we, { modelValue: p(u), "onUpdate:modelValue": f[2] || (f[2] = (m) => ce(u) ? u.value = m : null), onTabClick: ye }, { default: l(() => [t(z, { label: s.$t("mall.goodsspu.commodityTitle"), name: "1" }, null, 8, ["label"]), t(z, { label: s.$t("mall.goodsspu.commodityTitle2"), name: "2" }, null, 8, ["label"]), t(z, { label: s.$t("mall.goodsspu.commodityTitle3"), name: "3" }, null, 8, ["label"]), t(z, { label: s.$t("mall.goodsspu.commodityTitle4"), name: "4" }, null, 8, ["label"]), t(z, { label: s.$t("mall.goodsspu.commodityTitle5"), name: "5" }, null, 8, ["label"]), t(z, { label: s.$t("mall.goodsspu.commodityTitle6"), name: "6" }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue"])])]), _: 1 }), w("div", vo, [y(g(s.$t("mall.goodsspu.commodityEditorTip")) + " ", 1), w("span", _o, g(s.$t("mall.goodsspu.commodityEditorTip2")), 1), y(g(s.$t("mall.goodsspu.commodityEditorTip3")) + " ", 1), t(J, { ffect: "dark", content: s.$t("mall.goodsspu.commodityEditorTip4"), placement: "top" }, { default: l(() => [t(c, { class: "ml-[20px]", type: "primary", icon: "Refresh", onClick: ve }, { default: l(() => [y(g(s.$t("mall.goodsspu.commodityEditorBtn")), 1)]), _: 1 })]), _: 1 }, 8, ["content"])]), t(Ie, { gutter: 15 }, { default: l(() => [t(re, { span: p(u) == "2" && p(r).form.specType == "1" ? 24 : 12 }, { default: l(() => [p(k).form.id ? (b(), $(ie, { key: 0, shadow: "never", class: "goods-spu-box", style: { height: "720px", "overflow-y": "scroll" } }, { default: l(() => [w("div", Do, [t(O, { size: "large", tag: "b" }, { default: l(() => [y(g(s.$t("mall.goodsspu.commodityEditor2")), 1)]), _: 1 })]), p(u) == "2" ? (b(), I("div", wo, [y(g(s.$t("mall.goodsspu.commodityEditor3")) + " ", 1), t(c, { icon: "refresh", type: "primary", class: "ml-[20px]", onClick: ne }, { default: l(() => [y(g(s.$t("mall.goodsspu.commodityEditor4")), 1)]), _: 1 })])) : T("", true), oe((b(), $(de, { ref_key: "formRef", ref: U, option: p(k).option, modelValue: p(k).form, "onUpdate:modelValue": f[9] || (f[9] = (m) => p(k).form = m) }, { "name-label": l((m) => [t(O, { type: M(m.column.prop) ? "" : "danger" }, { default: l(() => [y(g(m.column.label), 1)]), _: 2 }, 1032, ["type"]), t(J, { ffect: "dark", content: s.$t("mall.goodsspu.commodityEditor6"), placement: "top" }, { default: l(() => [t(c, { link: "", icon: "Refresh", onClick: (G) => L(m.column.prop) }, null, 8, ["onClick"])]), _: 2 }, 1032, ["content"])]), "freightType-label": l((m) => [t(O, { type: M(m.column.prop) ? "" : "danger" }, { default: l(() => [y(g(m.column.label), 1)]), _: 2 }, 1032, ["type"])]), "categoryId-label": l((m) => [t(O, { type: M(m.column.prop) ? "" : "danger" }, { default: l(() => [y(g(m.column.label), 1)]), _: 2 }, 1032, ["type"]), t(J, { ffect: "dark", content: s.$t("mall.goodsspu.commodityEditor6"), placement: "top" }, { default: l(() => [t(c, { link: "", icon: "Refresh", onClick: f[3] || (f[3] = (G) => ae()) })]), _: 1 }, 8, ["content"])]), "brandId-label": l((m) => [t(O, { type: M(m.column.prop) ? "" : "danger" }, { default: l(() => [y(g(m.column.label), 1)]), _: 2 }, 1032, ["type"]), t(J, { ffect: "dark", content: s.$t("mall.goodsspu.commodityEditor6"), placement: "top" }, { default: l(() => [t(c, { link: "", icon: "Refresh", onClick: (G) => L(m.column.prop) }, null, 8, ["onClick"])]), _: 2 }, 1032, ["content"])]), "sellPoint-label": l((m) => [t(O, { type: M(m.column.prop) ? "" : "danger" }, { default: l(() => [y(g(m.column.label), 1)]), _: 2 }, 1032, ["type"]), t(J, { ffect: "dark", content: s.$t("mall.goodsspu.commodityEditor6"), placement: "top" }, { default: l(() => [t(c, { link: "", icon: "Refresh", onClick: (G) => L(m.column.prop) }, null, 8, ["onClick"])]), _: 2 }, 1032, ["content"])]), "picUrls-label": l((m) => [t(O, { type: M(m.column.prop) ? "" : "danger" }, { default: l(() => [y(g(m.column.label), 1)]), _: 2 }, 1032, ["type"]), t(J, { ffect: "dark", content: s.$t("mall.goodsspu.commodityEditor6"), placement: "top" }, { default: l(() => [t(c, { link: "", icon: "Refresh", onClick: (G) => L(m.column.prop) }, null, 8, ["onClick"])]), _: 2 }, 1032, ["content"])]), "videoUrl-label": l((m) => [t(O, { type: M(m.column.prop) ? "" : "danger" }, { default: l(() => [y(g(m.column.label), 1)]), _: 2 }, 1032, ["type"]), t(J, { ffect: "dark", content: s.$t("mall.goodsspu.commodityEditor6"), placement: "top" }, { default: l(() => [t(c, { link: "", icon: "Refresh", onClick: (G) => L(m.column.prop) }, null, 8, ["onClick"])]), _: 2 }, 1032, ["content"])]), "description-label": l((m) => [t(O, { type: M(m.column.prop) ? "" : "danger" }, { default: l(() => [y(g(m.column.label), 1)]), _: 2 }, 1032, ["type"]), t(J, { ffect: "dark", content: s.$t("mall.goodsspu.commodityEditor6"), placement: "top" }, { default: l(() => [t(c, { link: "", icon: "Refresh", onClick: (G) => L(m.column.prop) }, null, 8, ["onClick"])]), _: 2 }, 1032, ["content"])]), description: l(() => [w("div", Vo, [t(fe, { value: p(k).form.description, "onUpdate:value": f[4] || (f[4] = (m) => p(k).form.description = m), shopId: p(k).form.shopId }, null, 8, ["value", "shopId"])])]), skus: l(() => [w("div", null, [p(k).form.id ? (b(), $(ko, { key: 0, specType: p(k).form.specType, goodsSpec: p(k).goodsSpec, goodsSpuSpec: p(k).goodsSpuSpec, goodsSku: p(k).goodsSku, form: p(k).form, formSupplierSpu: p(r).form, goodsSkuSupplier: p(r).form.skus, onGetGoodsSku: j }, null, 8, ["specType", "goodsSpec", "goodsSpuSpec", "goodsSku", "form", "formSupplierSpu", "goodsSkuSupplier"])) : T("", true)])]), picUrls: l((m) => [p(k).form.shopId ? (b(), I("div", Ro, [t(W, { value: p(k).form.picUrls, "onUpdate:value": f[5] || (f[5] = (G) => p(k).form.picUrls = G), disabled: m.type == "view", type: "image", width: 110, height: 110, num: 5, shopId: p(k).form.shopId }, null, 8, ["value", "disabled", "shopId"])])) : (b(), I("div", Io, g(s.$t("commons.selectShopFirst")), 1))]), videoUrl: l((m) => [p(k).form.shopId ? (b(), I("div", Co, [t(W, { disabled: m.type == "view", value: p(k).form.videoUrl ? [p(k).form.videoUrl] : [], type: "video", width: 110, height: 110, num: 1, shopId: p(k).form.shopId, onSureSuccess: f[6] || (f[6] = (G) => p(k).form.videoUrl = G ? G[0] : "") }, null, 8, ["disabled", "value", "shopId"]), w("p", $o, g(s.$t("mall.goodsspu.videoUrlTip")), 1)])) : (b(), I("div", Oo, g(s.$t("commons.selectShopFirst")), 1))]), goodsRecommend: l(() => [p(k).form.shopId ? (b(), I("div", Uo, [t(Ye, { value: p(k).goodsRecommendList, "onUpdate:value": f[7] || (f[7] = (m) => p(k).goodsRecommendList = m), goodsIds: p(k).form.goodsRecommend.spuIds, "onUpdate:goodsIds": f[8] || (f[8] = (m) => p(k).form.goodsRecommend.spuIds = m), shopId: p(k).form.shopId, showGoodsList: true, span: 6 }, null, 8, ["value", "goodsIds", "shopId"]), w("p", Po, g(s.$t("mall.goodsspu.goodsRecommendTip")), 1)])) : (b(), I("div", Ao, g(s.$t("commons.selectShopFirst")), 1))]), _: 1 }, 8, ["option", "modelValue"])), [[pe, p(k).loading]])]), _: 1 })) : T("", true)]), _: 1 }, 8, ["span"]), oe(t(re, { span: 12 }, { default: l(() => [p(r).form.id ? T("", true) : (b(), $(ee, { key: 0, description: "\u6CA1\u6709\u627E\u5230\u4F9B\u5E94\u5546\u5546\u54C1\u6570\u636E" })), p(r).form.id ? (b(), $(ie, { key: 1, shadow: "never", class: "supplier-spu-box", style: { height: "720px", "overflow-y": "scroll" } }, { default: l(() => [w("div", To, [t(O, { size: "large", tag: "b" }, { default: l(() => [y(g(s.$t("mall.goodsspu.commodityEditor5")), 1)]), _: 1 })]), p(u) != "1" && p(u) != "2" && p(u) != "3" ? (b(), $(ee, { key: 0 })) : T("", true), oe((b(), $(de, { ref_key: "formSupplierRef", ref: P, option: p(r).option, modelValue: p(r).form, "onUpdate:modelValue": f[13] || (f[13] = (m) => p(r).form = m) }, { description: l(() => [w("div", jo, [t(fe, { value: p(r).form.description, "onUpdate:value": f[10] || (f[10] = (m) => p(r).form.description = m), shopId: p(r).form.supplierId, disabled: true }, null, 8, ["value", "shopId"])])]), skus: l(() => [w("div", null, [t(Re, { specType: p(r).form.specType, goodsSpec: p(r).goodsSpec, goodsSpuSpec: p(r).goodsSpuSpec, goodsSku: p(r).goodsSku, form: p(r).form, disabled: true }, null, 8, ["specType", "goodsSpec", "goodsSpuSpec", "goodsSku", "form"])])]), picUrls: l(() => [p(r).form.supplierId ? (b(), I("div", Fo, [t(W, { value: p(r).form.picUrls, "onUpdate:value": f[11] || (f[11] = (m) => p(r).form.picUrls = m), disabled: true, type: "image", num: 5, width: 110, height: 110, shopId: p(r).form.supplierId }, null, 8, ["value", "shopId"])])) : (b(), I("div", Eo, g(s.$t("commons.selectSupplierFirst")), 1))]), videoUrl: l(() => [p(r).form.supplierId ? (b(), I("div", zo, [t(W, { type: "video", disabled: true, width: 110, height: 110, value: p(r).form.videoUrl ? [p(r).form.videoUrl] : [], num: 1, shopId: p(r).form.supplierId, onSureSuccess: f[12] || (f[12] = (m) => p(r).form.videoUrl = m ? m[0] : "") }, null, 8, ["value", "shopId"]), p(r).form.videoUrl ? (b(), I("p", Lo, g(s.$t("mall.suppliergoodsspu.videoUrlTip")), 1)) : (b(), I("div", Go, [t(ee, { "image-size": 40, style: { padding: "12px" } })]))])) : (b(), I("div", No, g(s.$t("commons.selectSupplierFirst")), 1))]), _: 1 }, 8, ["option", "modelValue"])), [[pe, p(r).loading]])]), _: 1 })) : T("", true)]), _: 1 }, 512), [[ze, p(u) != "2" || p(r).form.specType == "0"]])]), _: 1 })]), _: 1 }, 8, ["modelValue"])], 64);
  };
} }), Jo = le(Mo, [["__scopeId", "data-v-5401ff8b"]]), at = Object.freeze(Object.defineProperty({ __proto__: null, default: Jo }, Symbol.toStringTag, { value: "Module" }));
export {
  Jo as G,
  ko as _,
  at as g
};
