import { A as P, R as D, p as _, q as N, K as G, S as L, _ as U, r as i, c as k, o as v, g as R, B as z, b as s, h as r, f as p, z as e, e as n, w as h, D as y, F as E } from "./index-DAdfXJ2i.js";
import { f as O, h as q } from "./suppliergoodsspu-B_JJ2gkc.js";
const H = { setup(o) {
  const { proxy: t } = P(), l = D({ tableOptionImport: O, goodsImport: { show: false, active: 1, listForm: [], form: {} } });
  _(null);
  const g = N(() => {
    var _a;
    return (_a = G()) == null ? void 0 : _a.permissions;
  }), b = _();
  async function F(u) {
    try {
      let m = (await t.$Export.xlsx(u.raw)).results;
      if (m.length > 0) {
        l.goodsImport.form.categoryFirst = l.goodsImport.form.categoryId[0], l.goodsImport.form.categorySecond = l.goodsImport.form.categoryId[1], l.goodsImport.form.categoryThird = l.goodsImport.form.categoryId[2];
        let I = 0, C = 0;
        l.goodsImport.listForm = m.map((a) => ({ ...l.goodsImport.form, name: a.\u5546\u54C1\u540D\u79F0, picUrls: a.\u5546\u54C1\u56FE\u7247\u5730\u5740 ? a.\u5546\u54C1\u56FE\u7247\u5730\u5740.split("|") : "", spuCode: a.\u5546\u54C1\u7F16\u7801, sellPoint: a.\u5356\u70B9, saleNum: a.\u865A\u62DF\u9500\u91CF, description: a.\u5546\u54C1\u8BE6\u60C5 || "", videoUrl: a.\u5546\u54C1\u89C6\u9891\u5730\u5740, specType: "0", skus: [{ costPrice: a.\u6210\u672C\u4EF7, enable: "1", marketPrice: a.\u5E02\u573A\u4EF7, salesPrice: a.\u9500\u552E\u4EF7 || 0, firstRebate: a.\u4E00\u7EA7\u8FD4\u4F63 || I, secondRebate: a.\u4E8C\u7EA7\u8FD4\u4F63 || C, stock: a.\u5E93\u5B58 || 0, weight: a.\u91CD\u91CF, volume: a.\u4F53\u79EF }] }));
      }
    } catch {
      t.$message.error("\u5BFC\u5165\u5931\u8D25");
    }
  }
  function d() {
    b.value && b.value.validate((u, f, m) => {
      if (u) l.goodsImport.active++, l.goodsImport.listForm.length > 0 && (l.goodsImport.listForm = l.goodsImport.listForm.map((I) => ({ ...I, ...l.goodsImport.form }))), f();
      else return false;
    });
  }
  function $() {
    if (l.goodsImport.listForm.length <= 0) {
      t.$message.error(t.$t("commons.selectGoods"));
      return;
    }
    t.$confirm("\u786E\u5B9A\u8981\u5BFC\u5165\u6570\u636E\u5417?", t.$t("commons.tip"), { confirmButtonText: t.$t("commons.confirm"), cancelButtonText: t.$t("commons.cancel"), type: "warning" }).then(function() {
      t.$loading({ lock: true, text: "\u6DFB\u52A0\u4E2D,\u8BF7\u7A0D\u540E", background: "rgba(0, 0, 0, 0.3)" }), q(l.goodsImport.listForm).then((u) => {
        u.code == 0 && (t.$message.success("\u6DFB\u52A0\u6210\u529F"), l.goodsImport.active = 3, l.goodsImport.listForm = [], t.$emit("refresh")), t.$loading().close();
      }).catch((u) => {
        t.$loading().close();
      });
    }).catch(() => {
    });
  }
  function w() {
    l.goodsImport.active = 1, l.goodsImport.show = false;
  }
  return { ...L(l), permissions: g, formImportRef: b, onImportNext: d, handleImportChange: F, handleImportSuccess: w, submitBatchAddGoods: $ };
} }, K = { class: "w-full mt-[-20px]" }, j = { class: "p-10 text-center" }, J = { class: "mt-[-20px]" }, M = { class: "py-5" }, Q = { key: 0 }, W = { class: "mb-[10px]" }, X = { class: "el-upload__text" }, Y = { key: 1 }, Z = { key: 1 }, x = { class: "relative text-gray-500 text-left" }, oo = { class: "pl-5" }, to = { class: "text-red-400" };
function so(o, t, l, g, b, F) {
  const d = i("el-button"), $ = i("el-step"), w = i("el-steps"), u = i("avue-form"), f = i("Download"), m = i("el-icon"), I = i("el-link"), C = i("upload-filled"), a = i("el-upload"), T = i("el-result"), B = i("ArrowLeft"), V = i("ArrowRight"), S = i("Check"), A = i("el-drawer");
  return v(), k(E, null, [g.permissions["mall:suppliergoodsspu:add"] ? (v(), R(d, { key: 0, onClick: t[0] || (t[0] = (c) => o.goodsImport.show = true) }, { default: r(() => [p(e(o.$t("mall.goodsspu.goodsImport")), 1)]), _: 1 })) : z("", true), s(A, { modelValue: o.goodsImport.show, "onUpdate:modelValue": t[5] || (t[5] = (c) => o.goodsImport.show = c), title: o.$t("mall.goodsspu.commodityIntroduction2"), size: "88%" }, { default: r(() => [n("div", K, [s(w, { active: o.goodsImport.active, "align-center": "" }, { default: r(() => [s($, { title: o.$t("mall.goodsspu.Process1") }, null, 8, ["title"]), s($, { title: o.$t("mall.goodsspu.Process5") }, null, 8, ["title"]), s($, { title: o.$t("mall.goodsspu.Process3") }, null, 8, ["title"])]), _: 1 }, 8, ["active"])]), n("div", j, [h(n("div", J, [s(u, { ref: "formImportRef", modelValue: o.goodsImport.form, "onUpdate:modelValue": t[1] || (t[1] = (c) => o.goodsImport.form = c), option: o.tableOptionImport }, null, 8, ["modelValue", "option"])], 512), [[y, o.goodsImport.active == 1]]), h(n("div", M, [!o.goodsImport.listForm || o.goodsImport.listForm.length == 0 ? (v(), k("div", Q, [n("div", W, [s(I, { href: "/template-batch-goods.xlsx", type: "primary" }, { default: r(() => [p(e(o.$t("mall.goodsspu.templateFile")), 1), s(m, null, { default: r(() => [s(f)]), _: 1 })]), _: 1 }), p(e(o.$t("mall.goodsspu.templateFile2")), 1)]), s(a, { drag: "", "auto-upload": false, "show-file-list": false, accept: ".xlsx,.xls", action: "action", onChange: g.handleImportChange }, { default: r(() => [s(m, { class: "el-icon--upload" }, { default: r(() => [s(C)]), _: 1 }), n("div", X, [p(e(o.$t("mall.goodsspu.templateFile3")) + " ", 1), n("em", null, e(o.$t("mall.goodsspu.templateFile4")), 1)])]), _: 1 }, 8, ["onChange"])])) : (v(), k("div", Y, [s(T, { icon: "warning", title: o.$t("mall.goodsspu.templateFile8", { size: o.goodsImport.listForm.length }) }, { extra: r(() => [n("div", null, [s(d, { link: "", icon: "RefreshLeft", type: "primary", onClick: t[2] || (t[2] = (c) => o.goodsImport.listForm = []) }, { default: r(() => [p(e(o.$t("mall.goodsspu.templateFile5")), 1)]), _: 1 })])]), _: 1 }, 8, ["title"])]))], 512), [[y, o.goodsImport.active == 2]]), o.goodsImport.active == 3 ? (v(), R(T, { key: 0, icon: "success", title: o.$t("mall.goodsspu.importSuccess"), "sub-title": o.$t("mall.goodsspu.templateFile7") }, { extra: r(() => [s(d, { type: "primary", plain: "", icon: "Close", onClick: g.handleImportSuccess }, { default: r(() => [p(e(o.$t("buttons.pureClose")), 1)]), _: 1 }, 8, ["onClick"]), t[6] || (t[6] = n("br", null, null, -1)), t[7] || (t[7] = n("br", null, null, -1)), s(d, { type: "primary", link: "", icon: "Refresh", onClick: t[3] || (t[3] = (c) => o.goodsImport.active = 1) }, { default: r(() => [p(e(o.$t("mall.goodsspu.continue")), 1)]), _: 1 })]), _: 1 }, 8, ["title", "sub-title"])) : (v(), k("div", Z, [h(s(d, { type: "primary", onClick: t[4] || (t[4] = (c) => o.goodsImport.active--) }, { default: r(() => [s(m, null, { default: r(() => [s(B)]), _: 1 }), p(e(o.$t("mall.goodsspu.batchImportTip8")), 1)]), _: 1 }, 512), [[y, o.goodsImport.active > 1]]), h(s(d, { type: "primary", onClick: g.onImportNext }, { default: r(() => [p(e(o.$t("mall.goodsspu.batchImportTip9")), 1), s(m, null, { default: r(() => [s(V)]), _: 1 })]), _: 1 }, 8, ["onClick"]), [[y, o.goodsImport.active == 1]]), h(s(d, { disabled: !(o.goodsImport.active == 2 && o.goodsImport.listForm.length > 0), type: "success", onClick: g.submitBatchAddGoods }, { default: r(() => [s(m, { class: "mr-[5px]" }, { default: r(() => [s(S)]), _: 1 }), p(e(o.$t("mall.goodsspu.batchImportTip7")), 1)]), _: 1 }, 8, ["disabled", "onClick"]), [[y, o.goodsImport.active == 2]])])), n("div", x, [n("div", null, e(o.$t("mall.goodsspu.supplierTip1")) + " :", 1), n("div", oo, [t[8] || (t[8] = p(" 1.", -1)), s(I, { href: "/template-batch-goods.xlsx", type: "primary" }, { default: r(() => [p(e(o.$t("mall.goodsspu.importTip")), 1), s(m, null, { default: r(() => [s(f)]), _: 1 })]), _: 1 }), p(e(o.$t("mall.goodsspu.importTip1")), 1), t[9] || (t[9] = n("br", null, null, -1)), p(" " + e(o.$t("mall.goodsspu.importTip2")), 1), n("span", to, e(o.$t("mall.goodsspu.importTip3")), 1), t[10] || (t[10] = n("br", null, null, -1)), p(" " + e(o.$t("mall.goodsspu.importTip4")), 1), n("b", null, e(o.$t("mall.goodsspu.importTip5")), 1), p(e(o.$t("mall.goodsspu.importTip6")) + e(o.$t("mall.goodsspu.importTip7")), 1), t[11] || (t[11] = n("br", null, null, -1)), p(" " + e(o.$t("mall.goodsspu.importTip8")), 1), t[12] || (t[12] = n("br", null, null, -1)), p(" " + e(o.$t("mall.goodsspu.importTip9")), 1)])])])]), _: 1 }, 8, ["modelValue", "title"])], 64);
}
const ro = U(H, [["render", so]]);
export {
  ro as default
};
