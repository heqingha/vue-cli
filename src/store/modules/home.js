import home from "services/home";
import { HOME_LIST } from "../mutation-type";
export default {
  state: {
    tableDataLabel: [
      { label: "客户编号", prop: "bindtype" },
      { label: "客户名称", prop: "caridcode" },
      { label: "联系手机号", prop: "carlength" },
      { label: "联系地址", prop: "carmodel" },
      { label: "客户类型", prop: "carpaybindid" },
      { label: "客户来源", prop: "carplatecolor" },
      { label: "客户等级", prop: "carplatenumber" },
      { label: "是否会员", prop: "cartype" },
      { label: "外部编号", prop: "createdate" }
    ],
    tableData: [],
    skipCount: 0,
    count: 0,
    pageSize: 10,
    loading: true
  },

  // 相当于 redux的 action 调用 store.commit('home_list') 相当于 dispatch({a: 1}) 同步的情况，reducer
  // 相当于 redux action, 只是接受类型 和参数 改变数据的操作是mutations，相当于 redux 的 reducer
  actions: {
    [HOME_LIST](context, { payload }) {
      context.commit("loading", true);
      home.home_list(payload).then(res => {
        if (res.result === "success") {
          const newRes = Object.assign(res, payload);
          context.commit("HOME_LIST", newRes);
        }
      });
    }
  },
  mutations: {
    [HOME_LIST](state, payload) {
      const { data, loading, count, pageSize, skipCount, page } = payload;
      state.tableData = data;
      state.loading = false;
      state.count = Number(count);
      state.pageSize = pageSize;
      state.skipCount = skipCount / pageSize + 1;
      // state.skipCount = (skipCount <= 1) ? 1 : (skipCount - 1) * pageSize
      // state.skipCount = skipCount <= 1 ? 1 : parseInt(skipCount, 10) / pageSize;
    },
    loading(state, payload) {
      state.loading = true;
    }
  },
  getters: {
    jian(state) {
      //这里的state对应着上面这个state
      // state.count--;
      return -state.count;
    }
  }
};
