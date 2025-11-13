import { j as p } from "./goodsspu-DKL_9wDU.js";
import { R as u, aA as g, S as m, _ as v, r as i, c as h, o as b, e as t, b as n, f as _, z as o, h as y } from "./index-DAdfXJ2i.js";
const C = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAq5JREFUWEftmEuIjWEYx3//pFzKJbmsXDYsZCcxCZMZ1xoyUyRprLBhZ2MxIsXWLUWiiWwME2XcGYQFC0oSSjZGLiOKiL/34TvTMcwxi2/OzMK7Ot933vM8v/f/Ps/7vM8RRcP2YGA7sAIYXfxdjp/bgGPAZkmfCnbVCeQUsCRHp6VMNUmq/QPE9kzgepkgCm4qJV2Nhw5FbJ8HqssMclNSCPALJEFUJIibZYYouFsk6WwBpAWY30sg94Cpsj0jU+O3wC0zVF2AnASWltlxZ3c3AiTOjTg/enN87c3t+G3hfQfEdlVv7knHyWrbfR3kYypMX0tA9gOG5LWIyJquFKmV1NSVI9tTgPv/QQoKlFORt8DnEtL3B0aWY2vy8tEtO6WCtVsG/jEprhYHUmW/BbwBRgDTgXqgsvi3PQUSqb9O0tESWVcDHMrg6AmQuBBXS/p50bI9L6X5MmA88AFoBRoltduenJS5FjA9AbJB0m7bw4HjQIB0HrFN9ZLO2A5lmvMGeZZahYkhBHAFmJURHASeAAPS85bs3Zc0Z7ak27Yv5w2yVVKD7ZVAcXxUSbpkeyjQXiTPHUnTY37eIAuT4RbbzUBIHn1S1KttqYd5YHtQipXDGchiIJ4nAN/yBpkq6a7tR8AkYJik93/LHNvPU9aMzS7tF/MGmSPpmu0ohlEUuwMyV1LuMbJR0i7bjSk4V2VZE0G5U9JD2wOB/ZlC0W5G8I6R9DpvRW5JqkhZENkSrWThKtpVsJ6QVBdgeYOEzRpJp23vA9Znq98LPE7KhCI7sncvgWmSXhRA3sVe5lFYMhuvgOhnn6bzpAHYlG1BsYto9tdIijk/RygSe7Y2R5AwFTCrJZ1LyowCFgDjgKhBrZFZnf0FSOTyHmB58b8DOYFdSOfEkaz6tkn63pXdHy26LAjM8t/5AAAAAElFTkSuQmCC", S = { setup() {
  const s = u({ statistics: { todayDate: "", today: 0, yesterday: 0, allCount: 0 } });
  e();
  async function e(d = g().format("YYYY-MM-DD")) {
    s.statistics.todayDate = d;
    const a = await p();
    s.statistics.today = a.data.countToday, s.statistics.allCount = a.data.countTotal;
  }
  return { ...m(s), getStatistics: e, jl_shopping: C };
} }, Y = { class: "bigcard-bg" }, w = { class: "card-bg" }, R = { class: "flex justify-between items-center" }, f = { class: "time-select", type: "warning" }, V = { class: "card-content" }, k = { class: "pl-1" }, B = { class: "card-tittle" }, M = { class: "turnover" }, E = { class: "chain" }, F = { class: "subheading-1" }, Z = { class: "subheading-one" }, U = { class: "subheading-two" };
function j(s, e, d, a, J, W) {
  const l = i("el-date-picker"), A = i("ArrowRight"), r = i("el-icon");
  return b(), h("div", null, [t("div", Y, [t("div", w, [t("div", R, [t("div", f, [n(l, { modelValue: s.statistics.todayDate, "onUpdate:modelValue": e[0] || (e[0] = (c) => s.statistics.todayDate = c), clearable: false, editable: false, disabled: "", type: "date" }, null, 8, ["modelValue"])]), t("div", null, [t("div", { class: "details-btn", onClick: e[1] || (e[1] = (c) => s.$router.push("/mall/goods/goodsspu")) }, [_(o(s.$t("welcome.welcome.goodsManage")) + " ", 1), n(r, null, { default: y(() => [n(A)]), _: 1 })])])]), t("div", V, [t("div", k, [t("div", B, o(s.$t("welcome.welcome.goodsAdd")), 1), t("div", M, o(s.statistics.today || 0), 1)])])]), t("div", E, [t("div", F, [t("div", Z, o(s.$t("welcome.welcome.goodsCount")), 1), t("div", U, o(s.statistics.allCount || 0), 1)]), e[2] || (e[2] = t("div", { class: "subheading-1" }, null, -1))])])]);
}
const O = v(S, [["render", j], ["__scopeId", "data-v-dcd42624"]]);
export {
  O as default
};
