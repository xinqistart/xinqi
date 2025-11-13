import { g as d, t as f } from "./shopstore-oR_kr_Ba.js";
import { _, c as r, o as m, b as l, h as n, f as V, z as D, r as o, B as b, F as y } from "./index-DAdfXJ2i.js";
const w = { props: { id: { type: String, default: "" }, name: { type: String, default: "" } }, data() {
  return { tableOption: f, dialogVisibleDetail: false, detail: { name: "", imgUrl: "" } };
}, watch: { id: { handler() {
  this.getDetail();
}, immediate: true } }, methods: { getDetail() {
  this.id && d(this.id).then((e) => {
    this.detail = e.data ? e.data : {};
  });
}, showDetail() {
  if (this.detail.id) {
    this.dialogVisibleDetail = true;
    return;
  }
  if (!this.id) {
    this.$message.warning(this.$t("commons.notFoundData"));
    return;
  }
  d(this.id).then((e) => {
    this.detail = e.data ? e.data : {}, e.data ? this.dialogVisibleDetail = true : this.$message.warning(this.$t("commons.notFoundData"));
  });
} } }, x = { key: 0, style: { position: "relative" } };
function k(e, i, s, v, t, p) {
  const u = o("el-text"), g = o("el-image"), c = o("avue-form"), h = o("el-dialog");
  return m(), r(y, null, [l(u, { class: "cursor-pointer", size: "small", type: "primary", onClick: p.showDetail }, { default: n(() => [V(D(s.name || t.detail.name || s.id), 1)]), _: 1 }, 8, ["onClick"]), l(h, { title: e.$t("mall.orderinfo.storeId"), modelValue: t.dialogVisibleDetail, "onUpdate:modelValue": i[1] || (i[1] = (a) => t.dialogVisibleDetail = a), "append-to-body": true, width: "66%" }, { default: n(() => [t.dialogVisibleDetail ? (m(), r("div", x, [l(c, { ref: "formRef", option: t.tableOption, modelValue: t.detail, "onUpdate:modelValue": i[0] || (i[0] = (a) => t.detail = a) }, { imgUrl: n(() => [l(g, { src: t.detail.imgUrl, style: { width: "100px", height: "100px" } }, null, 8, ["src"])]), _: 1 }, 8, ["option", "modelValue"])])) : b("", true)]), _: 1 }, 8, ["title", "modelValue"])], 64);
}
const F = _(w, [["render", k]]);
export {
  F as default
};
