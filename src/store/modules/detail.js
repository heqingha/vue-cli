import detail from "services/detail";
import { Notification } from "element-ui";
export default {
  state: {
    detail: {}
  },
  actions: {
    detail(context, { payload }) {
    //   context.commit("loading", true);
      // detail.detail(payload).then(res => {
      //   if (res.result === "success") {
      //     context.commit("detail", res.data);
      //   } else {
      //     Notification.error({
      //       title: "错误",
      //       message: res.msg || "网络错误"
      //     });
      //     context.commit("detail", null);
      //   }
      // });
      context.commit("detail", {name: 'me', type: '在线'});
    }
  },
  mutations: {
    loading(state, payload) {
    //   state.loading = true;
    },
    detail(state, payload) {
      state.detail = payload;
    }
  }
};
