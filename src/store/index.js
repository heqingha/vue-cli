import vue from "vue";
import vuex from "vuex";
import state from "./state.js";
import * as getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import home from "./modules/home.js";
import detail from "./modules/detail.js";
import createLogger from "vuex/dist/logger"; // 修改日志

vue.use(vuex);

const debug = "productions"; // 开发环境中为true，否则为false
export default new vuex.Store({
  state, //跟级别的 state
  getters, //跟级别的 getter
  mutations, //根级别的mutations名称（官方推荐mutions方法名使用大写）
  actions, //根级别的 action
  modules: {
    home,
    detail
  },
  plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
});
