import b from "./index-sB6MalEe.js";
import y from "./order-user-info-YRvKWCyA.js";
import V from "./order-logistics-DWwBY9ly.js";
import { a as I } from "./orderinfo-BW26vGJU.js";
import { d as C, A as k, p as i, r as m, c as u, o as p, e as a, b as o, h as f, f as x, z as h, B } from "./index-DAdfXJ2i.js";
const D = { class: "px-1" }, N = { key: 0, style: { position: "relative" } }, j = C({ __name: "order-info", props: { orderId: { type: String } }, setup(n) {
  const { proxy: s } = k(), d = n, t = i(false), e = i({});
  function c() {
    t.value = true, d.orderId && I(d.orderId).then((r) => {
      r.data ? e.value = r.data : (e.value = {}, s.$message.error(s.$t("commons.notFoundData")));
    });
  }
  return (r, l) => {
    const v = m("el-button"), _ = m("el-dialog");
    return p(), u("div", null, [a("div", D, [o(v, { onClick: c, link: "", type: "primary" }, { default: f(() => [x(h(n.orderId), 1)]), _: 1 })]), o(_, { modelValue: t.value, "onUpdate:modelValue": l[0] || (l[0] = (g) => t.value = g), title: r.$t("commons.userDetails"), "append-to-body": true, width: "90%" }, { default: f(() => [t.value ? (p(), u("div", N, [o(b, { form: e.value }, null, 8, ["form"]), a("div", null, [o(V, { form: e.value, disabled: true }, null, 8, ["form"])]), l[1] || (l[1] = a("br", null, null, -1)), o(y, { form: e.value }, null, 8, ["form"])])) : B("", true)]), _: 1 }, 8, ["modelValue", "title"])]);
  };
} });
export {
  j as _
};
