import { _ as p, c as s, o as i, B as v, b as e, h as a, r, e as u, z as f } from "./index-DAdfXJ2i.js";
const g = { props: { form: { type: Object, default: () => {
} } } }, h = { key: 0 };
function w(l, N, o, $, k, y) {
  const t = r("el-input"), d = r("el-form-item"), c = r("el-form"), _ = r("el-avatar"), m = r("el-table-column"), b = r("el-table");
  return i(), s("div", null, [o.form.deliveryWay != "2" ? (i(), s("div", h, [e(c, { model: o.form, "label-width": "100px" }, { default: a(() => [e(d, { label: l.$t("mall.orderinfo.receiverName") }, { default: a(() => [e(t, { value: o.form.recName, disabled: "" }, null, 8, ["value"])]), _: 1 }, 8, ["label"]), e(d, { label: l.$t("mall.orderinfo.contactNumber") }, { default: a(() => [e(t, { value: o.form.recAddress, disabled: "" }, null, 8, ["value"])]), _: 1 }, 8, ["label"]), e(d, { label: l.$t("mall.orderinfo.shippingAddress") }, { default: a(() => [e(t, { value: o.form.recTel, disabled: "" }, null, 8, ["value"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])])) : v("", true), e(b, { data: [o.form.userInfo], border: "", style: { width: "100%" } }, { default: a(() => [e(m, { align: "center", prop: "nickName", label: l.$t("mall.orderinfo.username") }, { default: a((n) => [e(_, { src: n.row.headimgUrl }, null, 8, ["src"]), u("div", null, f(n.row.nickName), 1)]), _: 1 }, 8, ["label"]), e(m, { align: "center", prop: "sex", label: l.$t("mall.orderinfo.gender") }, { default: a((n) => [u("div", null, f(n.row.sex == "1" ? l.$t("mall.orderinfo.male") : n.row.sex == "2" ? l.$t("mall.orderinfo.female") : l.$t("mall.orderinfo.unknown")), 1)]), _: 1 }, 8, ["label"]), e(m, { align: "center", prop: "userCode", label: l.$t("mall.goodsappraises.userId") }, null, 8, ["label"])]), _: 1 }, 8, ["data"])]);
}
const C = p(g, [["render", w]]);
export {
  C as default
};
