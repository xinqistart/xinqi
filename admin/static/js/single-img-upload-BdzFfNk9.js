import { b0 as k, A as y, R as S, t as V, be as m, S as z, _ as w, r as n, c as p, o as u, g as B, b as a, h as r, e as s, B as C } from "./index-DAdfXJ2i.js";
const U = { name: "MaterialSingle", props: { value: { type: String }, fileSize: { type: Number, default: k.limitUploadImageSize }, actionUrl: { type: String, required: true }, needToken: { type: Boolean, default: true, required: true } }, setup(t, l) {
  const { proxy: o } = y(), e = S({ dialogVisible: false, headers: { Authorization: "" } });
  V(() => {
    t.needToken && m() && m().access_token && (e.headers.Authorization = "Bearer " + m().access_token);
  });
  function f(d) {
    l.emit("update:value", d.link);
  }
  const v = (d) => d.size / 1024 / 1024 > t.fileSize ? (o.$message.error(`${o.$t("commons.notOut")}${t.fileSize}MB!`), false) : true, _ = () => {
    l.emit("update:value", "");
  }, i = () => {
    e.dialogVisible = true;
  };
  return { ...z(e), uploadSuccess: f, beforeUpload: v, handleRemove: _, handlePreview: i };
} }, P = { key: 1, class: "el-upload-list el-upload-list--picture-card" }, R = ["src"], N = { class: "el-upload-list__item-actions" }, x = { key: 0, style: { display: "flex", "justify-content": "center", "text-align": "center" } }, A = ["src"];
function I(t, l, o, e, f, v) {
  const _ = n("Plus"), i = n("el-icon"), d = n("el-upload"), g = n("zoom-in"), h = n("Delete"), b = n("el-dialog");
  return u(), p("div", null, [o.value ? (u(), p("div", P, [s("div", null, [s("img", { class: "el-upload-list__item-thumbnail", src: o.value, alt: "" }, null, 8, R), s("span", N, [s("span", { class: "el-upload-list__item-preview", onClick: l[0] || (l[0] = (...c) => e.handlePreview && e.handlePreview(...c)) }, [a(i, null, { default: r(() => [a(g)]), _: 1 })]), s("span", { class: "el-upload-list__item-delete", onClick: l[1] || (l[1] = (...c) => e.handleRemove && e.handleRemove(...c)) }, [a(i, null, { default: r(() => [a(h)]), _: 1 })])])])])) : (u(), B(d, { key: 0, class: "image-uploader", action: o.actionUrl, headers: t.headers, limit: 1, "on-success": e.uploadSuccess, "before-upload": e.beforeUpload }, { default: r(() => [a(i, { class: "image-uploader-icon" }, { default: r(() => [a(_)]), _: 1 })]), _: 1 }, 8, ["action", "headers", "on-success", "before-upload"])), a(b, { modelValue: t.dialogVisible, "onUpdate:modelValue": l[2] || (l[2] = (c) => t.dialogVisible = c), "append-to-body": "", width: "65%" }, { default: r(() => [o.value ? (u(), p("div", x, [s("img", { "w-full": "", src: o.value }, null, 8, A)])) : C("", true)]), _: 1 }, 8, ["modelValue"])]);
}
const T = w(U, [["render", I], ["__scopeId", "data-v-66a85953"]]);
export {
  T as _
};
