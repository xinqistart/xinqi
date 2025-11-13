import { aO as $, E as T, R as H, S as B, _ as q, c as w, o as u, b as a, h as i, g as _, B as D, r as y, e as k, F as P, v as E, f as g, z as p } from "./index-DAdfXJ2i.js";
import U from "./order-goods-info-CxpE49Zn.js";
import "./orderinfo-BW26vGJU.js";
import "./supplier-CbDQWRL9.js";
import "./details-dialog-CE2jsaHe.js";
import "./supplier-BS6wXSgi.js";
function F(e) {
  return $.request("get", "/mall/orderlogistics/page", { params: e });
}
function M(e) {
  return $.request("get", "/mall/orderlogistics/" + e);
}
const L = function(e, o) {
  if (o = o || {}, !(this instanceof L)) return new L(e, o);
  this.conf = { styleStr: "", setDomHeightArr: [], printBeforeFn: null, printDoneCallBack: null };
  for (const l in this.conf) l && o.hasOwnProperty(l) && (this.conf[l] = o[l]);
  typeof e == "string" ? this.dom = document.querySelector(e) : this.dom = this.isDOM(e) ? e : e.$el, this.conf.setDomHeightArr && this.conf.setDomHeightArr.length && this.setDomHeight(this.conf.setDomHeightArr), this.init();
};
L.prototype = { init: function() {
  const e = this.getStyle() + this.getHtml();
  this.writeIframe(e);
}, extendOptions: function(e, o) {
  for (const l in o) e[l] = o[l];
  return e;
}, getStyle: function() {
  let e = "";
  const o = document.querySelectorAll("style,link");
  for (let l = 0; l < o.length; l++) e += o[l].outerHTML;
  return e += `<style>.no-print{display:none;}${this.conf.styleStr}</style>`, e;
}, getHtml: function() {
  const e = document.querySelectorAll("input"), o = document.querySelectorAll("select"), l = document.querySelectorAll("textarea"), n = document.querySelectorAll("canvas");
  for (let t = 0; t < e.length; t++) e[t].type == "checkbox" || e[t].type == "radio" ? e[t].checked == true ? e[t].setAttribute("checked", "checked") : e[t].removeAttribute("checked") : (e[t].type == "text", e[t].setAttribute("value", e[t].value));
  for (let t = 0; t < l.length; t++) l[t].type == "textarea" && (l[t].innerHTML = l[t].value);
  for (let t = 0; t < o.length; t++) if (o[t].type == "select-one") {
    const d = o[t].children;
    for (const s in d) d[s].tagName == "OPTION" && (d[s].selected == true ? d[s].setAttribute("selected", "selected") : d[s].removeAttribute("selected"));
  }
  for (let t = 0; t < n.length; t++) {
    const d = n[t].toDataURL("image/png"), s = document.createElement("img");
    s.src = d, s.setAttribute("style", "max-width: 100%;"), s.className = "isNeedRemove", n[t].parentNode.insertBefore(s, n[t].nextElementSibling);
  }
  return this.dom.outerHTML;
}, writeIframe: function(e) {
  let o, l;
  const n = document.createElement("iframe"), t = document.body.appendChild(n);
  n.id = "myIframe", n.setAttribute("style", "position:absolute;width:0;height:0;top:-10px;left:-10px;"), o = t.contentWindow || t.contentDocument, l = t.contentDocument || t.contentWindow.document, l.open(), l.write(e), l.close();
  const d = document.querySelectorAll(".isNeedRemove");
  for (let m = 0; m < d.length; m++) d[m].parentNode.removeChild(d[m]);
  const s = this;
  n.onload = function() {
    s.conf.printBeforeFn && s.conf.printBeforeFn({ doc: l }), s.toPrint(o), setTimeout(function() {
      document.body.removeChild(n), s.conf.printDoneCallBack && s.conf.printDoneCallBack();
    }, 100);
  };
}, toPrint: function(e) {
  try {
    setTimeout(function() {
      e.focus();
      try {
        e.document.execCommand("print", false, null) || e.print();
      } catch {
        e.print();
      }
      e.close();
    }, 10);
  } catch (o) {
    console.error(o);
  }
}, isDOM: typeof HTMLElement == "object" ? function(e) {
  return e instanceof HTMLElement;
} : function(e) {
  return e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}, setDomHeight(e) {
  e && e.length && e.forEach((o) => {
    document.querySelectorAll(o).forEach((n) => {
      n.style.height = n.offsetHeight + "px";
    });
  });
} };
const V = { components: { OrderGoodsInfo: U }, props: { form: { type: Object, default: () => {
} }, disabled: { type: Boolean, default: false } }, emits: ["updateOrderLogistics"], setup(e, o) {
  T(() => e.form, () => {
    d();
  }, { deep: true, immediate: true });
  const l = H({ listOrderLogistics: [], labelDialog: false, labelDoc: "", labelUrl: "" }), n = (f) => {
    o.emit("updateOrderLogistics", f);
  };
  function t() {
    const f = e.form.listOrderItem.filter((h) => h.deliveryType && h.deliveryType != "1");
    f.length > 0 && l.listOrderLogistics.push({ $deliveryType: "other", listOrderItem: f });
    const c = e.form.listOrderItem.filter((h) => !h.deliveryType || h.deliveryType == 1 && !h.logisticsId);
    c.length > 0 && l.listOrderLogistics.push({ listOrderItem: c });
  }
  function d() {
    F(Object.assign({ orderId: e.form.id })).then((f) => {
      l.listOrderLogistics = f.data.records, l.listOrderLogistics.map((c) => {
        c.listOrderItem = e.form.listOrderItem.filter((h) => h.logisticsId == c.id && h.deliveryType == 1);
      }), l.listOrderLogistics = l.listOrderLogistics.filter((c) => c.listOrderItem.length > 0), t();
    });
  }
  function s(f) {
    let c = f.labelUrl;
    window.location.protocol == "https:" && (c = c.replace("http:", "https:")), l.labelUrl = c, l.labelDialog = true;
  }
  function m() {
    L(".label-url-doc").toPrint;
  }
  function v(f) {
    M(f.id).then((c) => {
      var _a;
      f.listOrderLogisticsDetail = (_a = c.data) == null ? void 0 : _a.listOrderLogisticsDetail;
    });
  }
  return { ...B(l), updateOrderLogistics: n, labelDialogShow: s, onPrint: m, onShowLogisticsDetail: v };
} }, R = { class: "text-left" }, x = { class: "leading-[1.5] pb-[10px]" }, z = { key: 1 }, G = { key: 2 }, J = ["src"];
function K(e, o, l, n, t, d) {
  const s = y("order-goods-info"), m = y("el-button"), v = y("el-timeline-item"), f = y("el-timeline"), c = y("el-collapse-item"), h = y("el-collapse"), A = y("el-card"), b = y("el-table-column"), I = y("el-tag"), C = y("el-table"), S = y("el-dialog");
  return u(), w("div", null, [a(C, { data: e.listOrderLogistics, border: "", style: { width: "100%" }, "default-expand-all": "" }, { default: i(() => [a(b, { type: "expand" }, { default: i((r) => [k("div", null, [k("div", null, [a(s, { listOrderItem: r.row.listOrderItem }, null, 8, ["listOrderItem"])]), r.row.id ? (u(), _(A, { key: 0, shadow: "never" }, { default: i(() => [a(h, { onChange: (O) => n.onShowLogisticsDetail(r.row) }, { default: i(() => [a(c, { name: "1" }, { title: i(() => [k("div", R, [k("div", x, [a(m, { type: "primary", link: "" }, { default: i(() => [g("\u3010" + p(e.$t("mall.orderlogisticsdetail.logisticsInformation")) + "\u3011", 1)]), _: 1 }), g(" " + p(r.row.message || e.$t("mall.orderinfo.noLogisticsInfo")), 1)])])]), default: i(() => [r.row.listOrderLogisticsDetail && r.row.listOrderLogisticsDetail.length > 0 ? (u(), _(f, { key: 0, reverse: false, class: "pt-[10px]" }, { default: i(() => [(u(true), w(P, null, E(r.row.listOrderLogisticsDetail, (O, N) => (u(), _(v, { key: N, timestamp: O.logisticsTime }, { default: i(() => [g(p(O.logisticsInformation), 1)]), _: 2 }, 1032, ["timestamp"]))), 128))]), _: 2 }, 1024)) : (u(), _(f, { key: 1, reverse: false, class: "pt-[10px]" }, { default: i(() => [a(v, null, { default: i(() => [g(p(r.row.message || e.$t("mall.orderinfo.noLogisticsInfo")), 1)]), _: 2 }, 1024)]), _: 2 }, 1024))]), _: 2 }, 1024)]), _: 2 }, 1032, ["onChange"])]), _: 2 }, 1024)) : D("", true)])]), _: 1 }), a(b, { align: "center", prop: "logisticsName", label: e.$t("mall.orderinfo.logisticsCode") }, { default: i((r) => [r.row.logisticsName ? (u(), _(I, { key: 0 }, { default: i(() => [g(p(r.row.logisticsName), 1)]), _: 2 }, 1024)) : r.row.$deliveryType == "other" ? (u(), w("div", z, [a(I, { type: "success" }, { default: i(() => [g(p(e.$t("mall.orderinfo.shipped")), 1)]), _: 1 })])) : (u(), w("div", G, [a(I, { type: "danger" }, { default: i(() => [g(p(e.$t("mall.orderinfo.notShipped")), 1)]), _: 1 })]))]), _: 1 }, 8, ["label"]), a(b, { align: "center", prop: "logisticsNo", label: e.$t("mall.orderinfo.trackingNumber") }, { default: i((r) => [k("div", null, [g(p(r.row.logisticsNo), 1), r.row.labelUrl ? (u(), _(m, { key: 0, link: "", type: "primary", size: "small", onClick: (O) => n.labelDialogShow(r.row) }, { default: i(() => [g(p(e.$t("mall.orderinfo.electronicWaybill")), 1)]), _: 1 }, 8, ["onClick"])) : D("", true)])]), _: 1 }, 8, ["label"]), a(b, { align: "center", prop: "weight", label: e.$t("mall.orderinfo.weight") }, null, 8, ["label"]), a(b, { align: "center", prop: "recName", label: e.$t("mall.orderinfo.nickname") }, null, 8, ["label"]), a(b, { align: "center", prop: "recTel", label: e.$t("mall.orderinfo.phone") }, null, 8, ["label"]), a(b, { align: "center", prop: "recAddress", label: e.$t("mall.orderinfo.address") }, null, 8, ["label"]), l.disabled ? D("", true) : (u(), _(b, { key: 0, align: "center", prop: "action", width: "80", label: e.$t("mall.orderinfo.action") }, { default: i((r) => [l.disabled ? D("", true) : (u(), _(m, { key: 0, type: "primary", link: "", size: "small", onClick: (O) => n.updateOrderLogistics(r.row) }, { default: i(() => [g(p(e.$t("mall.orderinfo.edit")), 1)]), _: 1 }, 8, ["onClick"]))]), _: 1 }, 8, ["label"]))]), _: 1 }, 8, ["data"]), a(S, { modelValue: e.labelDialog, "onUpdate:modelValue": o[1] || (o[1] = (r) => e.labelDialog = r), title: e.$t("mall.orderinfo.waybill"), width: "435px" }, { footer: i(() => [a(m, { type: "primary", onClick: n.onPrint }, { default: i(() => [g(p(e.$t("mall.orderinfo.print")), 1)]), _: 1 }, 8, ["onClick"]), a(m, { onClick: o[0] || (o[0] = (r) => e.labelDialog = false) }, { default: i(() => [g(p(e.$t("commons.cancel")), 1)]), _: 1 })]), default: i(() => [k("iframe", { ref: "labelIframe", src: e.labelUrl, class: "label-url-doc", width: "390px", height: "550px" }, null, 8, J)]), _: 1 }, 8, ["modelValue", "title"])]);
}
const ee = q(V, [["render", K]]);
export {
  ee as default
};
