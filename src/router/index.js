import Vue from "vue";
import Router from "vue-router";
import Home from "components/home/index.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          //活动概括
          path: "/",
          component: resolve =>
            require(["../components/list/index.vue"], resolve)
        },
        {
          //活动概括
          path: "/activity",
          component: resolve =>
            require(["../components/setting/index.vue"], resolve)
        }
      ]
    }
  ]
});
