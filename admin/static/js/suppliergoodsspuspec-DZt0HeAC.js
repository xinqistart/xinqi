import { R as T, q as F, S as B, bk as M, _ as $, g as j, o as b, h as a, e as _, c as S, B as w, b as s, f as R, z as V, r as u, v as U, F as I, a_ as q, aO as K } from "./index-DAdfXJ2i.js";
import { M as H } from "./list-CpVj7t9v.js";
import { a as J, g as Q } from "./goodsspecvalue-CIlXCfn0.js";
import { a as W } from "./goodsspec-B5ivNhww.js";
function X(e) {
  const o = [];
  for (let l = e.length - 1; l >= 0; l--) e[l + 1] && e[l + 1].leaf ? o[l] = e[l + 1].leaf.length * o[l + 1] || 1 : o[l] = 1;
  return o;
}
function Y(e, o = [], l) {
  const { optionValue: k = "id", optionText: t = "value" } = {}, c = [];
  let i = 0;
  const n = {}, f = X(e);
  if (e.length === 0) return c;
  e.forEach((r) => {
    const { leaf: g } = r;
    if (!g || g.length === 0) return true;
    i = (i || 1) * g.length;
  }), o.forEach((r) => {
    const { specs: g, ...y } = r;
    n[g.map((h) => `${h.specId}_${h.specValueId}`).join("|")] = y;
  });
  for (let r = 0; r < i; r++) {
    const g = [], y = [];
    e.forEach((O, C) => {
      const { leaf: A } = O;
      let P = {};
      if (!A || A.length === 0) return true;
      if (A.length > 1) {
        const d = parseInt(r / f[C], 10) % A.length;
        P = e[C].leaf[d];
      } else P = e[C].leaf[0];
      !O[k] || !P[k] || (y.push(`${O[k]}_${P[k]}`), g.push({ specId: O[k], specName: O[t], specValueId: P[k], specValueName: P[t] }));
    });
    const { ...h } = n[y.join("|")] || {};
    c.push({ ...h, specs: g });
  }
  return c;
}
const Z = { components: { MaterialList: H }, props: { form: { type: Object }, specData: { type: Array, default() {
  return [];
} }, goodsSku: { type: Array }, disabled: { type: Boolean, defalut: false } }, setup(e) {
  const o = T({ batchAddObj: { firstRebate: e.form.firstRebate, secondRebate: e.form.secondRebate, skuCode: "", salesPrice: 0, stock: 0, marketPrice: void 0, costPrice: void 0, weight: void 0, volume: void 0 }, skuData: [], coefficient: { purchase_coefficient: 0, guide_coefficient: 0 } }), l = F(() => {
    const t = Y(e.specData).map((i) => ({ specs: i.specs, specIds: i.specs.reduce((n, f, r) => `${n}${f.specId}-${f.specValueId}${r === i.specs.length - 1 ? "" : "_"}`, "") })), c = e.goodsSku.map((i) => ({ ...i, specIds: i.specs.reduce((n, f, r) => `${n}${f.specId}-${f.specValueId}${r === i.specs.length - 1 ? "" : "_"}`, "") }));
    return t.forEach((i) => {
      c.forEach(function(n) {
        const f = i.specIds.split("_"), r = n.specIds.split("_");
        let g = true;
        f.forEach(function(y) {
          r.find((h) => h == y) || (g = false);
        }), i = i, g && (i.id = n.id ? n.id : void 0, i.picUrl = n.picUrl ? n.picUrl : "", i.skuCode = n.skuCode ? n.skuCode : void 0, i.salesPrice = n.salesPrice, i.marketPrice = n.marketPrice, i.costPrice = n.costPrice, i.stock = n.stock, i.weight = n.weight, i.volume = n.volume, i.firstRebate = n.firstRebate, i.secondRebate = n.secondRebate, i.enable = n.enable);
      });
    }), t;
  });
  function k() {
    o.skuData.forEach(function(t) {
      t.enable == "1" && (o.batchAddObj.skuCode && (t.skuCode = o.batchAddObj.skuCode), o.batchAddObj.salesPrice >= 0 && (t.salesPrice = o.batchAddObj.salesPrice), o.batchAddObj.marketPrice >= 0 && (t.marketPrice = o.batchAddObj.marketPrice), o.batchAddObj.costPrice >= 0 && (t.costPrice = o.batchAddObj.costPrice), o.batchAddObj.stock >= 0 && (t.stock = o.batchAddObj.stock), o.batchAddObj.weight >= 0 && (t.weight = o.batchAddObj.weight), o.batchAddObj.volume >= 0 && (t.volume = o.batchAddObj.volume), o.batchAddObj.firstRebate >= 0 && (t.firstRebate = o.batchAddObj.firstRebate), o.batchAddObj.secondRebate >= 0 && (t.secondRebate = o.batchAddObj.secondRebate));
    });
  }
  return { ...B(o), skusList: l, batchAdd: k };
}, watch: { form(e) {
  e && (e.firstRebate || e.secondRebate) && (e.firstRebate && e.firstRebate !== 0 && (this.batchAddObj.firstRebate = e.firstRebate), e.secondRebate && e.secondRebate !== 0 && (this.batchAddObj.secondRebate = e.secondRebate));
}, skuData: { immediate: true, handler(e) {
  this.$emit("getGoodsSku", e);
} }, skusList: { deep: true, immediate: true, handler(e, o) {
  if (!e || !e.length) return this.skuData = [];
  if (!o || !o.length) return this.skuData = e.map((t) => ({ ...t, id: t.id ? t.id : void 0, picUrl: t.picUrl ? t.picUrl : "", skuCode: t.skuCode ? t.skuCode : void 0, salesPrice: t.salesPrice ? t.salesPrice : 0, marketPrice: t.marketPrice ? t.marketPrice : void 0, costPrice: t.costPrice ? t.costPrice : null, stock: t.stock ? t.stock : 0, weight: t.weight ? t.weight : void 0, volume: t.volume ? t.volume : void 0, firstRebate: t.firstRebate || t.firstRebate == 0 ? t.firstRebate : this.form.firstRebate, secondRebate: t.secondRebate || t.secondRebate == 0 ? t.secondRebate : this.form.secondRebate, enable: t.enable ? t.enable : "1" }));
  if (e[0].specs.length !== o[0].specs.length) return this.skuData = e.map((t) => ({ ...t, id: void 0, picUrl: "", skuCode: void 0, salesPrice: 0, marketPrice: void 0, costPrice: void 0, stock: 0, weight: void 0, volume: void 0, firstRebate: this.form.firstRebate, secondRebate: this.form.secondRebate, enable: "1" }));
  if (e.length === o.length) return this.skuData = e.map((t, c) => ({ ...this.skuData[c], ...t }));
  function l(t, c) {
    return t = t.map((i) => i.specIds), c = c.map((i) => i.specIds), M(t, c);
  }
  const k = l(e, o);
  if (e.length > o.length) {
    const t = [];
    e.forEach((c) => {
      const i = this.skuData.find((n) => n.specIds === c.specIds);
      i ? t.push(i) : t.push({ ...c, id: void 0, picUrl: "", skuCode: void 0, salesPrice: 0, marketPrice: void 0, costPrice: void 0, stock: 0, weight: void 0, volume: void 0, firstRebate: this.form.firstRebate, secondRebate: this.form.secondRebate, enable: "1" });
    }), this.skuData = t;
  } else this.skuData = this.skuData.filter((t) => !k.includes(t.specIds));
} } } }, x = { class: "sku-table" }, ee = { key: 0 }, oe = { key: 0, class: "flex-c" };
function te(e, o, l, k, t, c) {
  const i = u("el-button"), n = u("el-input-number"), f = u("el-tooltip"), r = u("el-col"), g = u("el-input"), y = u("el-row"), h = u("el-table-column"), O = u("MaterialList"), C = u("el-switch"), A = u("el-table"), P = q;
  return b(), j(P, null, { default: a(() => [_("div", x, [e.skuData.length > 0 && !l.disabled ? (b(), S("div", ee, [s(i, { icon: "el-icon-expand", link: "" }, { default: a(() => [R(V(e.$t("components.sku.batchSetting")), 1)]), _: 1 })])) : w("", true), e.skuData.length > 0 && !l.disabled ? (b(), j(y, { key: 1, gutter: 10 }, { default: a(() => [s(r, { span: 3 }, { default: a(() => [s(f, { effect: "dark", content: e.$t("components.sku.sellingPrice"), placement: "top" }, { default: a(() => [s(n, { modelValue: e.batchAddObj.salesPrice, "onUpdate:modelValue": o[0] || (o[0] = (d) => e.batchAddObj.salesPrice = d), size: "small", style: { width: "100%" }, "controls-position": "right", placeholder: e.$t("components.sku.sellingPrice"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), s(r, { span: 3 }, { default: a(() => [s(f, { effect: "dark", content: e.$t("components.sku.marketPrice"), placement: "top" }, { default: a(() => [s(n, { modelValue: e.batchAddObj.marketPrice, "onUpdate:modelValue": o[1] || (o[1] = (d) => e.batchAddObj.marketPrice = d), style: { width: "100%" }, size: "small", "controls-position": "right", placeholder: e.$t("components.sku.marketPrice"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), s(r, { span: 3 }, { default: a(() => [s(f, { effect: "dark", content: e.$t("components.sku.costPrice"), placement: "top" }, { default: a(() => [s(n, { modelValue: e.batchAddObj.costPrice, "onUpdate:modelValue": o[2] || (o[2] = (d) => e.batchAddObj.costPrice = d), size: "small", style: { width: "100%" }, "controls-position": "right", placeholder: e.$t("components.sku.costPrice"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), s(r, { span: 3 }, { default: a(() => [s(f, { effect: "dark", content: e.$t("components.sku.weight"), placement: "top" }, { default: a(() => [s(n, { modelValue: e.batchAddObj.weight, "onUpdate:modelValue": o[3] || (o[3] = (d) => e.batchAddObj.weight = d), size: "small", style: { width: "100%" }, "controls-position": "right", placeholder: e.$t("components.sku.weight"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), s(r, { span: 3 }, { default: a(() => [s(f, { effect: "dark", content: e.$t("components.sku.volume"), placement: "top" }, { default: a(() => [s(n, { modelValue: e.batchAddObj.volume, "onUpdate:modelValue": o[4] || (o[4] = (d) => e.batchAddObj.volume = d), style: { width: "100%" }, size: "small", "controls-position": "right", placeholder: e.$t("components.sku.volume"), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), s(r, { span: 3 }, { default: a(() => [s(f, { effect: "dark", content: e.$t("components.sku.stock"), placement: "top" }, { default: a(() => [s(n, { modelValue: e.batchAddObj.stock, "onUpdate:modelValue": o[5] || (o[5] = (d) => e.batchAddObj.stock = d), size: "small", style: { width: "100%" }, "controls-position": "right", placeholder: e.$t("components.sku.stock"), precision: 0, step: 1, min: 0, max: 99999999 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), s(r, { span: 3 }, { default: a(() => [s(f, { effect: "dark", content: e.$t("components.sku.skuCode"), placement: "top" }, { default: a(() => [s(g, { modelValue: e.batchAddObj.skuCode, "onUpdate:modelValue": o[6] || (o[6] = (d) => e.batchAddObj.skuCode = d), size: "small", placeholder: e.$t("components.sku.skuCode"), style: { width: "100%" }, clearable: "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["content"])]), _: 1 }), s(r, { span: 3 }, { default: a(() => [s(i, { type: "primary", size: "small", onClick: k.batchAdd }, { default: a(() => [R(V(e.$t("components.sku.confirm")), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 })]), _: 1 })) : w("", true), o[9] || (o[9] = _("br", null, null, -1)), s(A, { ref: "skuTableRef", data: e.skuData, size: "small", border: "" }, { default: a(() => [(b(true), S(I, null, U(l.specData, (d, p) => (b(), j(h, { key: d.id, prop: d.id, label: d.value, align: "center" }, { default: a((D) => [R(V(D.row.specs[p].specValueName), 1)]), _: 2 }, 1032, ["prop", "label"]))), 128)), s(h, { prop: "picUrl", label: e.$t("commons.image"), align: "center" }, { default: a((d) => [_("div", null, [l.form.supplierId ? (b(), S("div", oe, [s(O, { singleValue: d.row.picUrl, "onUpdate:singleValue": (p) => d.row.picUrl = p, shopId: l.form.supplierId, disabled: l.disabled, num: 1, "is-single": true, width: 60, height: 60, type: "image" }, null, 8, ["singleValue", "onUpdate:singleValue", "shopId", "disabled"])])) : w("", true)])]), _: 1 }, 8, ["label"]), s(h, { prop: "salesPrice", align: "center" }, { header: a(() => [R(V(e.$t("components.sku.sellingPrice")), 1), o[7] || (o[7] = _("span", { style: { "margin-left": "5px", "font-size": "large", color: "red" } }, "*", -1))]), default: a((d) => [s(n, { modelValue: d.row.salesPrice, "onUpdate:modelValue": (p) => d.row.salesPrice = p, size: "small", "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable || l.disabled }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }), s(h, { prop: "marketPrice", label: e.$t("components.sku.marketPrice"), align: "center" }, { default: a((d) => [s(n, { modelValue: d.row.marketPrice, "onUpdate:modelValue": (p) => d.row.marketPrice = p, size: "small", "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable || l.disabled }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"]), s(h, { prop: "costPrice", label: e.$t("components.sku.costPrice"), align: "center" }, { default: a((d) => [s(n, { modelValue: d.row.costPrice, "onUpdate:modelValue": (p) => d.row.costPrice = p, size: "small", "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable || l.disabled }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"]), s(h, { prop: "weight", label: e.$t("components.sku.weight"), align: "center" }, { default: a((d) => [s(n, { modelValue: d.row.weight, "onUpdate:modelValue": (p) => d.row.weight = p, size: "small", "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable || l.disabled }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"]), s(h, { prop: "volume", label: e.$t("components.sku.volume"), align: "center" }, { default: a((d) => [s(n, { modelValue: d.row.volume, "onUpdate:modelValue": (p) => d.row.volume = p, size: "small", "controls-position": "right", precision: 2, step: 0.1, min: 0, disabled: !d.row.enable || l.disabled }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"]), s(h, { prop: "stock", label: e.$t("components.sku.stock"), align: "center" }, { header: a(() => [R(V(e.$t("components.sku.stock")), 1), o[8] || (o[8] = _("span", { style: { "margin-left": "5px", "font-size": "large", color: "red" } }, "*", -1))]), default: a(({ row: d }) => [s(n, { modelValue: d.stock, "onUpdate:modelValue": (p) => d.stock = p, name: "stock", size: "small", "controls-position": "right", precision: 0, step: 1, min: 0, disabled: !d.enable || l.disabled }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"]), s(h, { prop: "skuCode", label: e.$t("components.sku.skuCode"), align: "center" }, { default: a((d) => [s(g, { modelValue: d.row.skuCode, "onUpdate:modelValue": (p) => d.row.skuCode = p, size: "small", clearable: "", disabled: !d.row.enable || l.disabled }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"]), s(h, { label: e.$t("components.sku.enable"), align: "center", width: "70" }, { default: a((d) => [s(C, { modelValue: d.row.enable, "onUpdate:modelValue": (p) => d.row.enable = p, "active-value": "1", "inactive-value": "0", style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }, disabled: l.disabled || l.form.id, "inline-prompt": "", "active-icon": "Check", "inactive-icon": "Close" }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data"]), R(" " + V(e.skuData.length) + V(e.$t("components.sku.pieces")), 1)])]), _: 1 });
}
const G = $(Z, [["render", te]]), le = { components: { SkuTableSupplier: G }, props: { form: { type: Object }, goodsSpec: { type: Array }, goodsSpuSpec: { type: Array }, goodsSku: { type: Array }, specType: { type: String }, disabled: { type: Boolean, defalut: false } }, data() {
  return { goodsSpecAdd: null, goodsSpecValueAdd: null, goodsSpecValue: null, goodsSpuSpecIndex: null, goodsSkuOne: null, rules: { firstRebate: [{ required: true, message: this.$t("components.sku.enterFirstCommission"), trigger: "blur" }], secondRebate: [{ required: true, message: this.$t("components.sku.enterSecondCommission"), trigger: "blur" }] } };
}, computed: { goodsSpuSpecFilter() {
  return this.goodsSpuSpec.filter((e) => e.value && e.leaf != null && e.leaf.length);
} }, watch: { form(e) {
  e && (!this.goodsSkuOne.firstRebate && this.goodsSkuOne.firstRebate !== 0 && (this.goodsSkuOne.firstRebate = e.firstRebate), !this.goodsSkuOne.secondRebate && this.goodsSkuOne.secondRebate !== 0 && (this.goodsSkuOne.secondRebate = e.secondRebate));
}, goodsSkuOne: { deep: true, immediate: true, handler(e) {
  this.$emit("getGoodsSku", [e]);
} } }, created() {
  this.goodsSku.length > 0 ? (this.goodsSkuOne = this.goodsSku[0], this.goodsSkuOne.enable = this.goodsSkuOne.enable || this.goodsSkuOne.enable == "0" ? this.goodsSkuOne.enable : "1") : this.goodsSkuOne = { salesPrice: 0, marketPrice: void 0, costPrice: void 0, stock: 0, weight: void 0, volume: void 0, firstRebate: this.form.firstRebate, secondRebate: this.form.secondRebate, enable: "1" };
}, methods: { getGoodsSku(e) {
  this.$emit("getGoodsSku", e, this.goodsSpuSpec);
}, delGoodsSpuSpecValue(e, o) {
  this.goodsSpuSpec[e].leaf.splice(o, 1);
}, delGoodsSpuSpec(e) {
  const o = this.goodsSpuSpec[e].id;
  this.goodsSpuSpec.splice(e, 1), this.goodsSpec.forEach(function(l) {
    l.id == o && (l.disabled = false);
  });
}, addSpecValue(e) {
  Q({ specId: e }).then((o) => {
    this.goodsSpecValue = o.data, this.goodsSpuSpec.forEach((l, k) => {
      l.id == e && (this.goodsSpuSpecIndex = k, this.goodsSpecValue.forEach(function(t) {
        l.leaf.forEach(function(c) {
          t.id == c.id && (t.disabled = true);
        });
      }));
    });
  });
}, goodsSpecValueChange(e) {
  this.goodsSpecValueAdd = null;
  let o = true;
  this.goodsSpecValue.forEach((l) => {
    l.id == e && (o = false, l.disabled = true, this.goodsSpuSpec[this.goodsSpuSpecIndex].leaf.push({ id: l.id, value: l.name }));
  }), o && J({ specId: this.goodsSpuSpec[this.goodsSpuSpecIndex].id, name: e }).then((l) => {
    this.goodsSpecValue.push({ id: l.data.id, name: l.data.name, disabled: true }), this.goodsSpuSpec[this.goodsSpuSpecIndex].leaf.push({ id: l.data.id, value: l.data.name });
  });
}, goodsSpecChange(e) {
  this.goodsSpecAdd = null;
  let o = true;
  this.goodsSpec.forEach((l) => {
    l.id == e && (o = false, l.disabled = true, this.goodsSpuSpec.push({ id: l.id, value: l.name, leaf: [] }));
  }), o && W({ name: e }).then((l) => {
    this.goodsSpec.push({ id: l.data.id, name: l.data.name, disabled: true }), this.goodsSpuSpec.push({ id: l.data.id, value: l.data.name, leaf: [] });
  });
}, addSpec() {
  this.goodsSpec.forEach((e) => {
    this.goodsSpuSpec.forEach(function(o) {
      e.id == o.id && (e.disabled = true);
    });
  });
} } }, se = { class: "sku-form" }, ae = { key: 0, class: "jl-text-tips mb-1" }, de = { key: 1, class: "mt-[40px]" }, ne = { key: 2, style: { "border-right": "#dedfe5 1px solid", "border-bottom": "#dedfe5 1px solid", "border-left": "#dedfe5 1px solid" } }, ie = { key: 0, class: "el-table__empty-block" }, ce = { class: "el-table__empty-text" }, ue = { class: "el-card__header", style: { padding: "5px 20px" } }, re = { class: "el-card__body", style: { padding: "5px 20px" } }, pe = { class: "flex justify-center items-center" }, me = { style: { "text-align": "center" } }, be = { class: "flex justify-center items-center" };
function fe(e, o, l, k, t, c) {
  const i = u("el-input-number"), n = u("el-form-item"), f = u("el-form"), r = u("el-col"), g = u("el-row"), y = u("el-button"), h = u("el-tag"), O = u("InfoFilled"), C = u("el-icon"), A = u("el-tooltip"), P = u("el-option"), d = u("el-select"), p = u("el-popover"), D = u("el-tab-pane"), E = u("el-tabs"), L = G;
  return b(), S("div", se, [l.form.id ? (b(), S("div", ae, " \u63D0\u793A:\u4F9B\u5E94\u5546\u5546\u54C1\u89C4\u683C\u4E0D\u80FD\u65B0\u589E/\u5220\u9664. ")) : w("", true), l.specType == "0" ? (b(), S("div", de, [s(g, null, { default: a(() => [s(r, { span: 15 }, { default: a(() => [s(f, { ref: "form", model: t.goodsSkuOne, rules: t.rules, disabled: l.disabled, "label-width": "160px" }, { default: a(() => [s(n, { label: e.$t("components.sku.sellingPrice"), class: "mt-1" }, { default: a(() => [s(i, { modelValue: t.goodsSkuOne.salesPrice, "onUpdate:modelValue": o[0] || (o[0] = (m) => t.goodsSkuOne.salesPrice = m), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s(n, { label: e.$t("components.sku.marketPrice"), class: "mt-1" }, { default: a(() => [s(i, { modelValue: t.goodsSkuOne.marketPrice, "onUpdate:modelValue": o[1] || (o[1] = (m) => t.goodsSkuOne.marketPrice = m), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s(n, { label: e.$t("components.sku.costPrice"), class: "mt-1" }, { default: a(() => [s(i, { modelValue: t.goodsSkuOne.costPrice, "onUpdate:modelValue": o[2] || (o[2] = (m) => t.goodsSkuOne.costPrice = m), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s(n, { label: e.$t("components.sku.stock"), class: "mt-1" }, { default: a(() => [s(i, { modelValue: t.goodsSkuOne.stock, "onUpdate:modelValue": o[3] || (o[3] = (m) => t.goodsSkuOne.stock = m), precision: 0, step: 1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s(n, { label: e.$t("components.sku.weight"), class: "mt-1" }, { default: a(() => [s(i, { modelValue: t.goodsSkuOne.weight, "onUpdate:modelValue": o[4] || (o[4] = (m) => t.goodsSkuOne.weight = m), precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s(n, { label: e.$t("components.sku.volume"), class: "mt-1" }, { default: a(() => [s(i, { modelValue: t.goodsSkuOne.volume, "onUpdate:modelValue": o[5] || (o[5] = (m) => t.goodsSkuOne.volume = m), modelModifiers: { number: true }, precision: 2, step: 0.1, min: 0, max: 99999999 }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model", "rules", "disabled"])]), _: 1 })]), _: 1 })])) : w("", true), l.specType == "1" ? (b(), S("div", ne, [s(E, { type: "border-card" }, { default: a(() => [s(D, { label: e.$t("components.sku.itemSpec"), style: { padding: "15px" } }, { default: a(() => [l.goodsSpuSpec == null || l.goodsSpuSpec.length <= 0 ? (b(), S("div", ie, [_("span", ce, V(e.$t("commons.notData")), 1)])) : w("", true), (b(true), S(I, null, U(l.goodsSpuSpec, (m, z) => (b(), S("div", { key: z, class: "box-card el-card", style: { "margin-bottom": "5px", "border-radius": "0" } }, [_("div", ue, [s(g, { justify: "space-between" }, { default: a(() => [_("div", null, V(m.value), 1), !l.disabled && !l.form.id ? (b(), j(y, { key: 0, type: "danger", size: "small", link: "", icon: "el-icon-delete", onClick: (v) => c.delGoodsSpuSpec(z) }, { default: a(() => [R(V(e.$t("commons.removeLabel")), 1)]), _: 1 }, 8, ["onClick"])) : w("", true)]), _: 2 }, 1024)]), _("div", re, [(b(true), S(I, null, U(m.leaf, (v, N) => (b(), j(h, { key: v.id, type: "info", size: "small", closable: !l.disabled && !l.form.id, onClose: (he) => c.delGoodsSpuSpecValue(z, N) }, { default: a(() => [R(V(v.value), 1)]), _: 2 }, 1032, ["closable", "onClose"]))), 128)), o[8] || (o[8] = _("br", null, null, -1)), s(p, { placement: "bottom", width: "260", trigger: "click" }, { reference: a(() => [!l.disabled && !l.form.id ? (b(), j(y, { key: 0, link: "", type: "primary", onClick: (v) => c.addSpecValue(m.id), style: { "margin-left": "5px" } }, { default: a(() => [R(V(e.$t("components.sku.addSpecValue")), 1)]), _: 1 }, 8, ["onClick"])) : w("", true)]), default: a(() => [_("div", pe, [s(A, { effect: "dark", content: "\u63D0\u793A: \u53EF\u76F4\u63A5\u8F93\u5165\u89C4\u683C\u540D\u540E\u56DE\u8F66\u521B\u5EFA.", placement: "top" }, { default: a(() => [s(C, { class: "mr-[10px]" }, { default: a(() => [s(O)]), _: 1 })]), _: 1 }), s(d, { modelValue: t.goodsSpecValueAdd, "onUpdate:modelValue": o[6] || (o[6] = (v) => t.goodsSpecValueAdd = v), filterable: "", "allow-create": "", "default-first-option": "", placeholder: e.$t("components.sku.enterSpecValue"), onChange: c.goodsSpecValueChange }, { default: a(() => [(b(true), S(I, null, U(t.goodsSpecValue, (v) => (b(), j(P, { key: v.id, label: v.name, value: v.id, disabled: v.disabled }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 2 }, 1032, ["modelValue", "placeholder", "onChange"])])]), _: 2 }, 1024)])]))), 128)), _("div", me, [s(p, { placement: "bottom", width: "260", trigger: "click" }, { reference: a(() => [!l.disabled && !l.form.id ? (b(), j(y, { key: 0, type: "primary", class: "margin-top-xl", onClick: c.addSpec }, { default: a(() => [R(V(e.$t("components.sku.addSpec")), 1)]), _: 1 }, 8, ["onClick"])) : w("", true)]), default: a(() => [_("div", be, [s(A, { effect: "dark", content: "\u63D0\u793A: \u53EF\u76F4\u63A5\u8F93\u5165\u89C4\u683C\u540D\u540E\u56DE\u8F66\u521B\u5EFA.", placement: "top" }, { default: a(() => [s(C, { class: "mr-[10px]" }, { default: a(() => [s(O)]), _: 1 })]), _: 1 }), s(d, { modelValue: t.goodsSpecAdd, "onUpdate:modelValue": o[7] || (o[7] = (m) => t.goodsSpecAdd = m), filterable: "", "allow-create": "", "default-first-option": "", placeholder: e.$t("components.sku.enterSpec"), onChange: c.goodsSpecChange }, { default: a(() => [(b(true), S(I, null, U(l.goodsSpec, (m) => (b(), j(P, { key: m.id, label: m.name, value: m.id, disabled: m.disabled }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder", "onChange"])])]), _: 1 })])]), _: 1 }, 8, ["label"])]), _: 1 }), s(E, { type: "border-card", style: { "margin-top": "5px" } }, { default: a(() => [s(D, { label: e.$t("components.sku.itemSKU"), style: { padding: "10px" } }, { default: a(() => [s(L, { specData: c.goodsSpuSpecFilter, goodsSku: l.goodsSku, form: l.form, disabled: l.disabled, onGetGoodsSku: c.getGoodsSku }, null, 8, ["specData", "goodsSku", "form", "disabled", "onGetGoodsSku"])]), _: 1 }, 8, ["label"])]), _: 1 })])) : w("", true)]);
}
const Ve = $(le, [["render", fe], ["__scopeId", "data-v-19930ba1"]]);
function ye(e) {
  return K.request("get", "/mall/suppliergoodsspuspec/tree", { params: e });
}
export {
  Ve as _,
  ye as f
};
