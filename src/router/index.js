import Vue from "vue";
import Router from "vue-router";
import Home from "components/layout/index.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          //首页
          path: "/",
          component: resolve =>
            require(["../components/home/index.vue"], resolve)
        },
        {
          //设置
          path: "/setting",
          component: resolve =>
            require(["../components/setting/index.vue"], resolve)
        }
      ]
    }
  ]
});
