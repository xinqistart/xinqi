import { s as g } from "./largescreen-Cv8DzdZU.js";
import { R as f, aA as d, S as h, _ as Y, r as m, c as v, o as w, e as s, b as A, f as _, z as o, h as p } from "./index-DAdfXJ2i.js";
const b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAAAXNSR0IArs4c6QAAAlBJREFUWEftl8+LTmEUxz9fP8bwB1AWfmQpayshUlKkrBCJhZIfkQ3DWLxRFqMGK6kpRclG7CgspETKzkI0sbAgG8Ywr+M99dCd2zuc5/U+hnI2t+5zzvl+7nPPfc65IpmZzQJuACuAKd/vF7wa8AhYK+mt66gCswq4XVB8otRbJF2uw8wErqWd+QFZGO4xsEHSu3EwhUVD6f/UDsRhzGw6MDUUUcapKemLzOw4cAyYVkYnlHWspd9wmE/AjFBIWadRh/Hv/a+wfx6mCdwDFgNz2mypn6ZPgOWAfxhh62Rnjkg6ZWazgac1oPfAEkmvzGwPcC5M4u2gg5rZLOmKi5jZXmCwInhU0sm0tg64WRrmrqSVSbAHeAYsAN4AiyR9SGvXgfWlYTz/Gkm3kuj2FswQsE/S2XRvKfCg2ogjUJ28Js/7UJIL+qvyccNHj42SPqd73v19CsiyHJgRYAAYTgpXJXnBOlBPBcTnoq3JZx5wEPCJ4JeWA9OQ5G0jy1pn6okWb38kKAdmSNKOSNKqj5ldAHZF4nJgPN994Hkt8U5JY2bmjfZibW0hsCwC4j65MO3y9koaNTNvtt50O7YcGG8Dl4CXNTWvpaaZ+TzUV1vzAt4WHU9yYAYkHcp97NZfx2ngcCQuB2ZQ0v5I0loBnwEOROJyYL6mv4cXtcR9lQJutCngTdH/sByYiR5uUgr4P0yk1qo+8yUNm9lc4HVucNW/GzVzBzgP7AZWTzbM7+iPi+3GznQV5mN03uiaavtEI74zfsT7YdVbWOxn6X1w6/8GVT8VqACU/YoAAAAASUVORK5CYII=", C = { setup() {
  const t = f({ statistics: { todayDate: "", today: 0, yesterday: 0, qoq: 0 } });
  l();
  function i(e, a) {
    return !a || a === 0 ? e : Number(((e - a) / a).toFixed(2)) * 1;
  }
  async function l(e = d().format("YYYY-MM-DD")) {
    t.statistics.todayDate = e;
    const a = { beginTime: d(e).startOf("day").format("YYYY-MM-DD 00:00:00"), endTime: d(e).startOf("day").format("YYYY-MM-DD 23:59:59") }, r = { beginTime: d(e).add(-1, "day").startOf("day").format("YYYY-MM-DD 00:00:00"), endTime: d(e).add(-1, "day").startOf("day").format("YYYY-MM-DD 23:59:59") }, n = await g(a);
    t.statistics.today = n.data.sum;
    const c = await g(r);
    t.statistics.yesterday = c.data.sum, t.statistics.qoq = i(n.data.sum, c.data.sum);
  }
  return { ...h(t), getStatistics: l, jl_money: b };
} }, D = { class: "bigcard-bg" }, U = { class: "card-bg" }, z = { class: "flex justify-between items-center" }, R = { class: "time-select" }, k = { class: "card-content" }, q = { class: "card-tittle" }, N = { class: "turnover" }, V = { class: "chain" }, O = { class: "subheading-1" }, T = { class: "subheading-one" }, W = { class: "subheading-two" }, M = { class: "subheading-1" }, B = { class: "subheading-one" }, J = { class: "subheading-three" };
function S(t, i, l, e, a, r) {
  const n = m("el-date-picker"), c = m("ArrowRight"), y = m("el-icon");
  return w(), v("div", null, [s("div", D, [s("div", U, [s("div", z, [s("div", R, [A(n, { modelValue: t.statistics.todayDate, "onUpdate:modelValue": i[0] || (i[0] = (u) => t.statistics.todayDate = u), clearable: false, editable: false, type: "date", onChange: e.getStatistics }, null, 8, ["modelValue", "onChange"])]), s("div", null, [s("div", { class: "details-btn", onClick: i[1] || (i[1] = (u) => t.$router.push("/sys/finance/userwithdrawrecord")) }, [_(o(t.$t("welcome.welcome.financeManage")) + " ", 1), A(y, null, { default: p(() => [A(c)]), _: 1 })])])]), s("div", k, [s("div", null, [s("div", q, o(t.$t("welcome.welcome.salesToday")), 1), s("div", N, [s("text", null, o(t.statistics.today || 0), 1)])])])]), s("div", V, [s("div", O, [s("div", T, o(t.$t("welcome.welcome.salesYesterday")), 1), s("div", W, "\xA5" + o(t.statistics.yesterday || 0), 1)]), s("div", M, [s("div", B, o(t.$t("welcome.welcome.qoq")), 1), s("div", J, o(t.statistics.qoq || 0) + "%", 1)])])])]);
}
const Z = Y(C, [["render", S], ["__scopeId", "data-v-8a58a212"]]);
export {
  Z as default
};
