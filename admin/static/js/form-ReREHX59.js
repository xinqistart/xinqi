import { A as T, R as $, t as x, K as k, q as U, S as H, _ as S, r as p, c as B, o as g, b as e, h as l, g as C, B as w, e as a, f as n, z as f, a_ as D } from "./index-DAdfXJ2i.js";
import { t as L, g as q, p as F } from "./liveconfig-DzqXjveo.js";
import { M as I } from "./list-CpVj7t9v.js";
import "./videojs-player.esm-CCSu0y3h.js";
import "./index-vwxEoGGg.js";
import "./shopinfo-DR8w8ULX.js";
import "./supplier-CbDQWRL9.js";
const K = { components: { MaterialList: I }, setup() {
  const { proxy: o } = T(), t = $({ form: void 0, tableOption: L });
  x(() => {
    var _a;
    const i = (_a = k()) == null ? void 0 : _a.permissions;
    t.tableOption.disabled = !(i["live:liveconfig:add"] || i["live:liveconfig:edit"]), t.tableOption.submitBtn = !!(i["live:liveconfig:add"] || i["live:liveconfig:edit"]), t.tableOption.emptyBtn = !!(i["live:liveconfig:add"] || i["live:liveconfig:edit"]), d();
  });
  const h = U(() => {
    var _a;
    const i = (_a = k()) == null ? void 0 : _a.permissions;
    return { addBtn: !!i["live:liveconfig:add"], delBtn: !!i["live:liveconfig:del"], editBtn: !!i["live:liveconfig:edit"], viewBtn: !!i["live:liveconfig:get"] };
  });
  function d() {
    q().then((i) => {
      t.form = i.data ? i.data : { picUrls: void 0 };
    });
  }
  function y(i, u) {
    F(t.form).then((r) => {
      u(), t.form = r.data, o.$message({ showClose: true, message: o.$t("commons.updateSuccess"), type: "success" });
    }).catch(() => {
      u();
    });
  }
  return { ...H(t), permissionList: h, handleGet: d, handleUpdate: y };
} }, N = { key: 0 }, M = { class: "px-10" };
function j(o, t, h, d, y, i) {
  const u = p("el-text"), r = p("TopRight"), s = p("el-icon"), m = p("el-link"), R = p("material-list"), c = p("InfoFilled"), v = p("el-popover"), b = p("el-image"), O = p("avue-form"), V = p("el-card"), z = D;
  return g(), B("div", null, [e(z, null, { default: l(() => [e(V, { class: "box-card" }, { header: l(() => [e(u, { size: "large", tag: "b" }, { default: l(() => [n(f(o.$t("mall.liveconfig.liveconfig")), 1)]), _: 1 }), e(m, { type: "primary", class: "ml-2", target: "_blank", href: "https://help.aliyun.com/zh/live/activate-apsaravideo-live-and-purchase-resource-plans?spm=a2c4g.11186623.help-menu-29949.d_1_0.441d2ee6L1KYFg&scm=20140722.H_195292._.OR_help-T_cn~zh-V_1" }, { default: l(() => [t[2] || (t[2] = n("\u963F\u91CC\u76F4\u64AD\u6587\u6863", -1)), e(s, null, { default: l(() => [e(r)]), _: 1 })]), _: 1 })]), default: l(() => [o.form ? (g(), C(O, { key: 0, ref: "crud", modelValue: o.form, "onUpdate:modelValue": t[1] || (t[1] = (_) => o.form = _), style: { padding: "30px" }, option: o.tableOption, permission: d.permissionList, onSubmit: d.handleUpdate }, { picUrls: l(() => [o.form ? (g(), B("div", N, [e(R, { value: o.form.picUrls, "onUpdate:value": t[0] || (t[0] = (_) => o.form.picUrls = _), type: "image", num: 3 }, null, 8, ["value"])])) : w("", true)]), "isHttps-label": l(({}) => [e(v, { "append-to-body": "", trigger: "hover", width: "430px" }, { default: l(() => [a("div", null, [t[4] || (t[4] = n(" \u5982\u679C\u5F00\u542F\u9700\u8981\u5728\u963F\u91CC\u4E91\u89C6\u9891\u76F4\u64AD\u63A7\u5236\u53F0\u4E0A\u4F20\u64AD\u6D41\u57DF\u540D\u7684https\u8BC1\u4E66\u3002 ", -1)), e(m, { type: "primary", class: "m-2", target: "_blank", href: "https://help.aliyun.com/zh/live/user-guide/configure-http-headers-1?spm=a2c4g.11186623.help-menu-29949.d_2_3_3_1_0.4dcc97a2X3xyKW" }, { default: l(() => [t[3] || (t[3] = n("\u6587\u6863\u8BF4\u660E", -1)), e(s, null, { default: l(() => [e(r)]), _: 1 })]), _: 1 })])]), reference: l(() => [e(s, null, { default: l(() => [e(c)]), _: 1 })]), _: 1 }), a("span", null, f(o.$t("mall.liveconfig.isHttps")), 1)]), "pushDomain-label": l(({}) => [e(v, { "append-to-body": "", trigger: "hover", width: "630px" }, { default: l(() => [a("div", null, [e(m, { type: "primary", class: "m-2", target: "_blank", href: "https://live.console.aliyun.com/?spm=a2c4g.11186623.0.0.18eb1172oRrTBq#/domain/list" }, { default: l(() => [t[5] || (t[5] = n("\u767B\u5F55\u963F\u91CC\u76F4\u64AD\u63A7\u5236\u53F0", -1)), e(s, null, { default: l(() => [e(r)]), _: 1 })]), _: 1 })]), e(b, { src: "/img/tip/livepush-tip.png", style: { width: "600px", height: "300px" }, "preview-src-list": ["/img/tip/livepush-tip.png"] })]), reference: l(() => [e(s, null, { default: l(() => [e(c)]), _: 1 })]), _: 1 }), a("span", null, f(o.$t("mall.liveconfig.pushDomain")), 1)]), "pullDomain-label": l(({}) => [e(v, { "append-to-body": "", trigger: "hover", width: "630px" }, { default: l(() => [a("div", null, [e(m, { type: "primary", class: "m-2", target: "_blank", href: "https://live.console.aliyun.com/?spm=a2c4g.11186623.0.0.18eb1172oRrTBq#/domain/list" }, { default: l(() => [t[6] || (t[6] = n("\u767B\u5F55\u963F\u91CC\u76F4\u64AD\u63A7\u5236\u53F0", -1)), e(s, null, { default: l(() => [e(r)]), _: 1 })]), _: 1 })]), e(b, { src: "/img/tip/liveplay-tip.png", style: { width: "600px", height: "300px" }, "preview-src-list": ["/img/tip/liveplay-tip.png"] })]), reference: l(() => [e(s, null, { default: l(() => [e(c)]), _: 1 })]), _: 1 }), a("span", null, f(o.$t("mall.liveconfig.pullDomain")), 1)]), _: 1 }, 8, ["modelValue", "option", "permission", "onSubmit"])) : w("", true), a("div", M, [a("ul", null, [a("li", null, [t[8] || (t[8] = n(" 1.\u9996\u5148\u5F00\u901A\u8D2D\u4E70\u963F\u91CC\u76F4\u64AD ", -1)), e(m, { type: "primary", class: "ml-2", target: "_blank", href: "https://help.aliyun.com/zh/live/activate-apsaravideo-live-and-purchase-resource-plans?spm=a2c4g.11186623.help-menu-29949.d_1_0.441d2ee6L1KYFg&scm=20140722.H_195292._.OR_help-T_cn~zh-V_1" }, { default: l(() => [t[7] || (t[7] = n("\u8D2D\u4E70\u6559\u7A0B", -1)), e(s, null, { default: l(() => [e(r)]), _: 1 })]), _: 1 })]), a("li", null, [t[10] || (t[10] = n(" 2.\u83B7\u53D6\u89C6\u9891\u76F4\u64AD\u57DF\u540D ", -1)), e(m, { type: "primary", class: "ml-2", target: "_blank", href: "https://help.aliyun.com/zh/live/get-started-with-apsaravideo-live?spm=a2c4g.11186623.help-menu-29949.d_1_1.3c865109rgedRH&scm=20140722.H_198676._.OR_help-T_cn~zh-V_1" }, { default: l(() => [t[9] || (t[9] = n("\u83B7\u53D6\u57DF\u540D\u6559\u7A0B", -1)), e(s, null, { default: l(() => [e(r)]), _: 1 })]), _: 1 })]), a("li", null, [t[12] || (t[12] = n(" 3.\u767B\u5F55\u963F\u91CC\u76F4\u64AD\u63A7\u5236\u53F0\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F ", -1)), e(m, { type: "primary", class: "ml-2", target: "_blank", href: "https://live.console.aliyun.com/?spm=a2c4g.11186623.0.0.18eb1172oRrTBq#/overview" }, { default: l(() => [t[11] || (t[11] = n("\u767B\u5F55\u963F\u91CC\u76F4\u64AD\u63A7\u5236\u53F0", -1)), e(s, null, { default: l(() => [e(r)]), _: 1 })]), _: 1 })])])])]), _: 1 })]), _: 1 })]);
}
const Q = S(K, [["render", j], ["__scopeId", "data-v-6f8cc626"]]);
export {
  Q as default
};
