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
    tableData: [
      // {
      //   bindtype: "客户编号",
      //   caridcode: "王小虎",
      //   carlength: "上海",
      //   carmodel: "普陀区",
      //   carpaybindid: "上海市普陀区金沙江路 1518 弄",
      //   carplatecolor: 200333,
      //   carplatenumber: 200333,
      //   cartype: 200333,
      //   createdate: "200333",
      // }
    ],
    skipCount: 1,
    total: 0,
    pageSize: 20,
    loading: true
  },

  mutations: {
    [HOME_LIST](state, { payload }) {
      home.home_list(payload).then(res => {
        if (res.result === "success") {
          state.tableData = res.data;
          state.loading = false;
          state.total = Number(res.count);
          (pageSize = res.sub.pageSize),
            (skipCount =
              res.sub.skipCount <= 1
                ? 1
                : parseInt(res.sub.skipCount, 10) / res.sub.pageSize + 1);
          // return {
          //   ...state,
          //   tableData: res.data,
          //   total: Number(res.count),
          //   loading: false
          // };
        }
      });
    }
  },
  // 相当于 redux的 action 调用 store.commit('home_list') 相当于 dispatch({a: 1}) 同步的情况，reducer
  // 相当于 redux action, 只是接受类型 和参数 改变数据的操作是mutations，相当于 redux 的 reducer
  actions: {
    [HOME_LIST](context, payload) {
      const newRes = Object.assign({}, { sub: payload });
      context.commit("HOME_LIST", newRes);
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
