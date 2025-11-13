import { A as D, R as P, p as T, q as N, t as G, S as L, K as U, _ as z, c as C, o as v, g as _, B as E, b as e, h as n, f as a, z as l, r as i, e as p, w as y, D as h, F as O } from "./index-DAdfXJ2i.js";
import { d as q } from "./goodsspu-Dmc9OYVL.js";
import { i as H } from "./goodsspu-DKL_9wDU.js";
const K = { setup(o) {
  const { proxy: t } = D(), s = P({ distributionConfig: null, tableOptionImport: q, goodsImport: { show: false, active: 1, listForm: [], form: {} } });
  T(null);
  const g = N(() => {
    var _a;
    return (_a = U()) == null ? void 0 : _a.permissions;
  });
  G(() => {
  });
  const b = T();
  async function F(u) {
    try {
      let d = (await t.$Export.xlsx(u.raw)).results;
      if (d.length > 0) {
        s.goodsImport.form.categoryFirst = s.goodsImport.form.categoryId[0], s.goodsImport.form.categorySecond = s.goodsImport.form.categoryId[1], s.goodsImport.form.categoryThird = s.goodsImport.form.categoryId[2], s.goodsImport.form.categoryShopFirst = s.goodsImport.form.categoryShopId[0], s.goodsImport.form.categoryShopId[1] ? s.goodsImport.form.categoryShopSecond = s.goodsImport.form.categoryShopId[1] : s.goodsImport.form.categoryShopSecond = "", s.goodsImport.form.categoryShopId[2] ? s.goodsImport.form.categoryShopThird = s.goodsImport.form.categoryShopId[2] : s.goodsImport.form.categoryShopSecond = "";
        let f = 0, k = 0;
        s.distributionConfig && (f = s.distributionConfig.firstRebate, k = s.distributionConfig.secondRebate), s.goodsImport.listForm = d.map((r) => (r.\u5546\u54C1\u56FE\u7247\u5730\u5740.indexOf(",") > -1 && (r.\u5546\u54C1\u56FE\u7247\u5730\u5740 = r.\u5546\u54C1\u56FE\u7247\u5730\u5740.replace(/,/g, "|")), { ...s.goodsImport.form, name: r.\u5546\u54C1\u540D\u79F0, picUrls: r.\u5546\u54C1\u56FE\u7247\u5730\u5740 ? r.\u5546\u54C1\u56FE\u7247\u5730\u5740.split("|") : "", spuCode: r.\u5546\u54C1\u7F16\u7801, sellPoint: r.\u5356\u70B9, saleNum: r.\u865A\u62DF\u9500\u91CF, description: r.\u5546\u54C1\u8BE6\u60C5 || "", videoUrl: r.\u5546\u54C1\u89C6\u9891\u5730\u5740, specType: "0", skus: [{ costPrice: r.\u6210\u672C\u4EF7, enable: "1", marketPrice: r.\u5E02\u573A\u4EF7, salesPrice: r.\u9500\u552E\u4EF7 || 0, firstRebate: r.\u4E00\u7EA7\u8FD4\u4F63 || f, secondRebate: r.\u4E8C\u7EA7\u8FD4\u4F63 || k, stock: r.\u5E93\u5B58 || 0, weight: r.\u91CD\u91CF, volume: r.\u4F53\u79EF }] }));
      }
    } catch {
      t.$message.error("\u5BFC\u5165\u5931\u8D25");
    }
  }
  function m() {
    b.value && b.value.validate((u, I, d) => {
      if (u) s.goodsImport.active++, s.goodsImport.listForm.length > 0 && (s.goodsImport.listForm = s.goodsImport.listForm.map((f) => ({ ...f, ...s.goodsImport.form }))), I();
      else return false;
    });
  }
  function $() {
    if (s.goodsImport.listForm.length <= 0) {
      t.$message.error(t.$t("commons.selectGoods"));
      return;
    }
    t.$confirm("\u786E\u5B9A\u8981\u5BFC\u5165\u6570\u636E\u5417?", t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      t.$loading({ lock: true, text: "\u6DFB\u52A0\u4E2D,\u8BF7\u7A0D\u540E", background: "rgba(0, 0, 0, 0.3)" }), H(s.goodsImport.listForm).then((u) => {
        u.code == 0 && (t.$message.success("\u6DFB\u52A0\u6210\u529F"), s.goodsImport.active = 3, s.goodsImport.listForm = [], t.$emit("refresh")), t.$loading().close();
      }).catch((u) => {
        t.$loading().close();
      });
    }).catch(() => {
    });
  }
  function w() {
    s.goodsImport.active = 1, s.goodsImport.show = false;
  }
  return { ...L(s), permissions: g, formImportRef: b, onImportNext: m, handleImportChange: F, handleImportSuccess: w, submitBatchAddGoods: $ };
} }, M = { class: "w-full mt-[-20px]" }, j = { class: "p-10 text-center" }, J = { class: "mt-[-20px]" }, Q = { class: "py-5" }, W = { key: 0 }, X = { class: "mb-[10px]" }, Y = { class: "el-upload__text" }, Z = { key: 1 }, x = { key: 1 }, oo = { class: "relative text-gray-500 text-left" }, to = { class: "pl-5" }, so = { class: "text-red-400" };
function eo(o, t, s, g, b, F) {
  const m = i("el-button"), $ = i("el-step"), w = i("el-steps"), u = i("avue-form"), I = i("Download"), d = i("el-icon"), f = i("el-link"), k = i("upload-filled"), r = i("el-upload"), S = i("el-result"), R = i("ArrowLeft"), B = i("ArrowRight"), V = i("Check"), A = i("el-drawer");
  return v(), C(O, null, [g.permissions["mall:goodsspu:add"] ? (v(), _(m, { key: 0, onClick: t[0] || (t[0] = (c) => o.goodsImport.show = true) }, { default: n(() => [a(l(o.$t("mall.goodsspu.goodsImport")), 1)]), _: 1 })) : E("", true), e(A, { modelValue: o.goodsImport.show, "onUpdate:modelValue": t[5] || (t[5] = (c) => o.goodsImport.show = c), title: o.$t("mall.goodsspu.goodsImport"), size: "88%" }, { default: n(() => [p("div", M, [e(w, { active: o.goodsImport.active, "align-center": "" }, { default: n(() => [e($, { title: o.$t("mall.goodsspu.Process4") }, null, 8, ["title"]), e($, { title: o.$t("mall.goodsspu.Process5") }, null, 8, ["title"]), e($, { title: o.$t("mall.goodsspu.Process6") }, null, 8, ["title"])]), _: 1 }, 8, ["active"])]), p("div", j, [y(p("div", J, [e(u, { ref: "formImportRef", modelValue: o.goodsImport.form, "onUpdate:modelValue": t[1] || (t[1] = (c) => o.goodsImport.form = c), option: o.tableOptionImport }, null, 8, ["modelValue", "option"])], 512), [[h, o.goodsImport.active == 1]]), y(p("div", Q, [!o.goodsImport.listForm || o.goodsImport.listForm.length == 0 ? (v(), C("div", W, [p("div", X, [e(f, { href: "/template-batch-goods.xlsx", type: "primary" }, { default: n(() => [a(l(o.$t("mall.goodsspu.importTip")), 1), e(d, null, { default: n(() => [e(I)]), _: 1 })]), _: 1 }), a(l(o.$t("mall.goodsspu.templateFile2")), 1)]), e(r, { drag: "", "auto-upload": false, "show-file-list": false, accept: ".xlsx,.xls", action: "action", onChange: g.handleImportChange }, { default: n(() => [e(d, { class: "el-icon--upload" }, { default: n(() => [e(k)]), _: 1 }), p("div", Y, [a(l(o.$t("mall.goodsspu.templateFile3")) + " ", 1), p("em", null, l(o.$t("mall.goodsspu.templateFile4")), 1)])]), _: 1 }, 8, ["onChange"])])) : (v(), C("div", Z, [e(S, { icon: "warning", title: o.$t("mall.goodsspu.templateFile8", { size: o.goodsImport.listForm.length }) }, { extra: n(() => [p("div", null, [e(m, { link: "", icon: "RefreshLeft", type: "primary", onClick: t[2] || (t[2] = (c) => o.goodsImport.listForm = []) }, { default: n(() => [a(l(o.$t("mall.goodsspu.templateFile5")), 1)]), _: 1 })])]), _: 1 }, 8, ["title"])]))], 512), [[h, o.goodsImport.active == 2]]), o.goodsImport.active == 3 ? (v(), _(S, { key: 0, icon: "success", title: o.$t("mall.goodsspu.importSuccess"), "sub-title": o.$t("mall.goodsspu.templateFile7") }, { extra: n(() => [e(m, { type: "primary", plain: "", icon: "Close", onClick: g.handleImportSuccess }, { default: n(() => [a(l(o.$t("mall.goodsspu.off")), 1)]), _: 1 }, 8, ["onClick"]), t[6] || (t[6] = p("br", null, null, -1)), t[7] || (t[7] = p("br", null, null, -1)), e(m, { type: "primary", link: "", icon: "Refresh", onClick: t[3] || (t[3] = (c) => o.goodsImport.active = 1) }, { default: n(() => [a(l(o.$t("mall.goodsspu.continue")), 1)]), _: 1 })]), _: 1 }, 8, ["title", "sub-title"])) : (v(), C("div", x, [y(e(m, { type: "primary", onClick: t[4] || (t[4] = (c) => o.goodsImport.active--) }, { default: n(() => [e(d, null, { default: n(() => [e(R)]), _: 1 }), a(l(o.$t("mall.goodsspu.step2")), 1)]), _: 1 }, 512), [[h, o.goodsImport.active > 1]]), y(e(m, { type: "primary", onClick: g.onImportNext }, { default: n(() => [a(l(o.$t("mall.goodsspu.step1")), 1), e(d, null, { default: n(() => [e(B)]), _: 1 })]), _: 1 }, 8, ["onClick"]), [[h, o.goodsImport.active == 1]]), y(e(m, { disabled: !(o.goodsImport.active == 2 && o.goodsImport.listForm.length > 0), type: "success", onClick: g.submitBatchAddGoods }, { default: n(() => [e(d, { class: "mr-[5px]" }, { default: n(() => [e(V)]), _: 1 }), a(l(o.$t("mall.goodsspu.importData")), 1)]), _: 1 }, 8, ["disabled", "onClick"]), [[h, o.goodsImport.active == 2]])])), p("div", oo, [p("div", null, l(o.$t("mall.goodsspu.supplierTip1")) + " :", 1), p("div", to, [t[8] || (t[8] = a(" 1.", -1)), e(f, { href: "/template-batch-goods.xlsx", type: "primary" }, { default: n(() => [a(l(o.$t("mall.goodsspu.importTip")), 1), e(d, null, { default: n(() => [e(I)]), _: 1 })]), _: 1 }), a(l(o.$t("mall.goodsspu.importTip1")), 1), t[9] || (t[9] = p("br", null, null, -1)), a(" " + l(o.$t("mall.goodsspu.importTip2")), 1), p("span", so, l(o.$t("mall.goodsspu.importTip3")), 1), t[10] || (t[10] = p("br", null, null, -1)), a(" " + l(o.$t("mall.goodsspu.importTip4")), 1), p("b", null, l(o.$t("mall.goodsspu.importTip5")), 1), a(l(o.$t("mall.goodsspu.importTip6")) + l(o.$t("mall.goodsspu.importTip7")), 1), t[11] || (t[11] = p("br", null, null, -1)), a(" " + l(o.$t("mall.goodsspu.importTip8")), 1), t[12] || (t[12] = p("br", null, null, -1)), a(" " + l(o.$t("mall.goodsspu.importTip9")), 1)])])])]), _: 1 }, 8, ["modelValue", "title"])], 64);
}
const po = z(K, [["render", eo]]);
export {
  po as default
};
