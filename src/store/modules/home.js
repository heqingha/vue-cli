import home from "services/home";
import { HOME_LIST } from "../mutation-type";
import { Notification } from "element-ui";
export default {
  state: {
    tableDataLabel: [
      { label: "编号", prop: "carplatenumber" },
      { label: "名称", prop: "carmodel" },
      { label: "手机号", prop: "sjh" },
      { label: "地址", prop: "dz" },
      { label: "类型", prop: "lx" },
      { label: "来源", prop: "ly" },
      { label: "等级", prop: "dj" },
      { label: "会员", prop: "hy" },
      { label: "编号", prop: "carplatenumbera" }
    ],
    tableData: [],
    skipCount: 0,
    count: 0,
    pageSize: 6,
    loading: true
  },

  // 相当于 redux的 action 调用 store.commit('home_list') 相当于 dispatch({a: 1}) 同步的情况，reducer
  // 相当于 redux action, 只是接受类型 和参数 改变数据的操作是mutations，相当于 redux 的 reducer
  actions: {
    [HOME_LIST](context, { payload }) {
      context.commit("loading", true);
      // home.home_list(payload).then(res => {
      //   if (res.result === "success") {
      //     const newRes = Object.assign(res, payload);
      //     context.commit("HOME_LIST", newRes);
      //   } else {
      //     context.commit("HOME_LIST", [{ carplatenumber: "编号" }]);
      //   }
      // });
      // 有真实接口可以调用  这边模拟
      setTimeout(() => {
        const newRes = Object.assign(
          {
            data: [
              {
                carplatenumber: "编号",
                carmodel: "名称",
                sjh: "12345",
                dz: 122,
                dj: "一等",
                carpaybindid: 1
              },
              {
                carplatenumber: "编号",
                carmodel: "名称",
                sjh: "12345",
                dz: 122,
                dj: "一等",
                carpaybindid: 2
              },
              {
                carplatenumber: "编号",
                carmodel: "名称",
                sjh: "12345",
                dz: 122,
                dj: "一等",
                carpaybindid: 3,
                lx: "客户"
              },
              {
                carplatenumber: "编号",
                carmodel: "名称",
                sjh: "12345",
                dz: 122,
                dj: "一等",
                carpaybindid: 4
              },
              {
                carplatenumber: "编号",
                carmodel: "名称",
                sjh: "12345",
                dz: 122,
                dj: "一等",
                carpaybindid: 5
              }
            ],
            count: 88
          },
          payload
        );
        context.commit("HOME_LIST", newRes);
      }, 1000);
    },
    home_add(state, { payload }) {
      // home.home_add(payload).then(res => {
      //   if (res.result === "success") {
      //     Notification.success({
      //       title: "成功",
      //       message: "新增成功"
      //     });
      //   } else {
      //     Notification.error({
      //       title: "错误",
      //       message: res.msg || "网络错误"
      //     });
      //   }
      // });
      // return new Promise((resolve, reject) => {
      //   Notification.success({
      //     title: "错误",
      //     message: "新增成功"
      //   });
      //   resolve("成功");
      // });
      Notification.success({
        title: "成功",
        message: "新增成功"
      });
    },
    home_delete(state, { payload }) {
      // home.home_delete(payload).then(res => {
      //   if (res.result === "success") {
      //     Notification.success({
      //       title: "成功",
      //       message: "删除成功"
      //     });
      //   } else {
      //     Notification.error({
      //       title: "错误",
      //       message: res.msg || "网络错误"
      //     });
      //   }
      // });
      Notification.success({
        title: "成功",
        message: "删除成功"
      });
    },
    home_edit(state, { payload }) {
      // home.home_edit(payload).then(res => {
      //   if (res.result === "success") {
      //     Notification.success({
      //       title: "成功",
      //       message: "修改成功"
      //     });
      //   } else {
      //     Notification.error({
      //       title: "错误",
      //       message: res.msg || "网络错误"
      //     });
      //   }
      // });
      Notification.success({
        title: "成功",
        message: "修改成功"
      });
    }
  },
  mutations: {
    loading(state, payload) {
      state.loading = true;
    },
    [HOME_LIST](state, payload) {
      state.loading = false;
      // if (!payload) return;
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
