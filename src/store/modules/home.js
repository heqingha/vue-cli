import home from "services/home";
import { HOME_LIST } from "../mutation-type";
import { Loading } from "element-ui";
import { Notification } from "element-ui";
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
        } else {
          context.commit("HOME_LIST", null);
        }
      });
    },
    home_add(state, { payload }) {
      console.log(payload);
      home.home_add(payload).then(res => {
        if (res.result === "success") {
          Notification.success({
            title: "成功",
            message: "新增成功"
          });
        } else {
          Notification.error({
            title: "错误",
            message: res.msg || "网络错误"
          });
        }
      });
    },
    home_delete(state, { payload }) {
      home.home_delete(payload).then(res => {
        if (res.result === "success") {
          Notification.success({
            title: "成功",
            message: "删除成功"
          });
        } else {
          Notification.error({
            title: "错误",
            message: res.msg || "网络错误"
          });
        }
      });
    },
    home_edit(state, { payload }) {
      home.home_edit(payload).then(res => {
        if (res.result === "success") {
          Notification.success({
            title: "成功",
            message: "修改成功"
          });
        } else {
          Notification.error({
            title: "错误",
            message: res.msg || "网络错误"
          });
        }
      });
    }
  },
  mutations: {
    loading(state, payload) {
      state.loading = true;
    },
    [HOME_LIST](state, payload) {
      state.loading = false;
      if (!payload) return;
      const { data, count, pageSize, skipCount, page } = payload;
      state.tableData = data;
      state.count = Number(count);
      state.pageSize = pageSize;
      state.skipCount = skipCount / pageSize + 1;
    },
    home_add(state, payload) {}
  },
  getters: {
    jian(state) {
      //这里的state对应着上面这个state
      // state.count--;
      return -state.count;
    }
  }
};
