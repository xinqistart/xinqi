import { aO as s, n as t } from "./index-DAdfXJ2i.js";
function o(r) {
  return s.request("get", "/upms/configstorage/page", { params: r });
}
function n(r) {
  return s.request("put", "/upms/configstorage", { data: r });
}
function u() {
  return s.request("get", "/upms/configstorage");
}
const { $t: e } = t(), p = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 150, labelPosition: "left", group: [{ icon: "el-icon-s-order", label: e("commons.baseInfo"), prop: "group1", column: [{ label: e("upms.configstorage.storageType"), prop: "storageType", type: "select", span: 13, dicUrl: "/upms/dict/type/storage_type", rules: [{ required: true, message: e("upms.configstorage.selectStorageType"), trigger: "blur" }] }, { label: "endpoint", prop: "endpoint", span: 13, rules: [{ required: true, message: e("upms.configstorage.endpointRequired"), trigger: "blur" }] }, { label: "accessKeyId", prop: "accessKeyId", span: 13, rules: [{ required: true, message: e("upms.configstorage.accessKeyIdRequired"), trigger: "blur" }] }, { label: "accessKeySecret", prop: "accessKeySecret", span: 13, type: "password", rules: [{ required: true, message: e("upms.configstorage.accessKeySecretRequired"), trigger: "blur" }] }, { label: "bucket", prop: "bucket", span: 13, rules: [{ required: true, message: e("upms.configstorage.bucketRequired"), trigger: "blur" }] }] }, { icon: "el-icon-picture", label: e("upms.configstorage.imageConfiguration"), prop: "group2", column: [{ label: e("upms.configstorage.imageWatermark"), span: 13, prop: "waterMarkContent" }] }] }, g = { dialogDrag: true, indexLabel: e("commons.indexLabel"), menuAlign: "center", align: "center", menuType: "text", searchShow: false, excelBtn: true, printBtn: false, viewBtn: true, searchMenuSpan: 6, labelWidth: 150, labelPosition: "left", group: [{ icon: "el-icon-s-order", label: e("commons.baseInfo"), prop: "group1", column: [{ label: e("upms.configstorage.storageType"), prop: "storageType", type: "select", span: 13, dicUrl: "/upms/dict/type/storage_type", rules: [{ required: true, message: e("upms.configstorage.selectStorageType"), trigger: "blur" }] }, { label: "endpoint", prop: "endpoint", span: 13, rules: [{ required: true, message: e("upms.configstorage.endpointRequired"), trigger: "blur" }] }, { label: "accessKeyId", prop: "accessKeyId", span: 13, rules: [{ required: true, message: e("upms.configstorage.accessKeyIdRequired"), trigger: "blur" }] }, { label: "accessKeySecret", prop: "accessKeySecret", span: 13, type: "password", rules: [{ required: true, message: e("upms.configstorage.accessKeySecretRequired"), trigger: "blur" }] }, { label: "bucket", prop: "bucket", span: 13, rules: [{ required: true, message: e("upms.configstorage.bucketRequired"), trigger: "blur" }] }] }, { icon: "el-icon-picture", label: e("upms.configstorage.imageConfiguration"), prop: "group2", column: [{ label: e("upms.configstorage.imageWatermark"), span: 13, prop: "waterMarkContent" }] }] };
export {
  g as a,
  o as b,
  u as g,
  n as p,
  p as t
};
