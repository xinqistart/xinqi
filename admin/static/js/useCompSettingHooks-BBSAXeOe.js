import { A as h, q as n, R as C, S, n as y, P } from "./index-DAdfXJ2i.js";
import { u as i } from "./pageDevise-DcQ8796K.js";
import { D as T } from "./vuedraggable.umd-Bwsu9eAJ.js";
import { _ as x } from "./app-page-select-i6M56i7e.js";
import B from "./base-setting-BI1Sz0yX.js";
import b from "./default-image-COzMKpJv.js";
import R from "./colorui-bg-select-C6R7xhTX.js";
import $ from "./colorui-icon-select-D6J9K_ax.js";
import w from "./color-picker-select-B039aU8e.js";
import { M as A } from "./list-CpVj7t9v.js";
import { i as M } from "./base-show-pnQX27ct.js";
const { $t: s } = y(), J = (t) => ({ props: { ...t == null ? void 0 : t.props }, components: { Draggable: T, ColoruiIconSelect: $, ColoruiBgSelect: R, ColorPickerSelect: w, MaterialList: A, AppPageSelect: x, DefaultImage: b, BaseSetting: B, ...t == null ? void 0 : t.components }, setup(u, l) {
  const { proxy: f } = h(), r = i(), o = n(() => i().currentCompData), g = n(() => r.themeData), d = n(() => r.pageDeviseData.shopId), _ = n(() => r.pageDeviseData.clientType), a = C({ themeData: g, clientType: _, shopId: d, formData: o, loadingCompData: true });
  setTimeout(() => {
    a.loadingCompData = false;
  }, 1e3);
  let c = () => {
  };
  (t == null ? void 0 : t.setup) && (c = t.setup(u, l, a));
  function D(e, p) {
    f.$confirm(s("mall.pagedevise.deleteConfirm"), s("commons.tip"), { confirmButtonText: s("commons.confirm"), cancelButtonText: s("commons.cancel"), type: "warning" }).then(() => {
      e.splice(p, 1), m();
    });
  }
  function I(e, p) {
    e || (e = []), e.push(P(p)), m();
  }
  function v() {
    m();
  }
  function m() {
    (Object.prototype.hasOwnProperty.call(o.value, "goodsIds") || o.value.goodsIds) && (o.value.goodsIds = o.value.goodsList.map((e) => e.id));
  }
  return { ...S(a), ...c, isURLIcon: M, draggableChangeItem: v, addItem: I, delItem: D };
} });
export {
  J as s
};
