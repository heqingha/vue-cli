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
          name:'/',
          component: resolve =>
            require(["../components/home/index.vue"], resolve)
        },
        {
          //设置
          name: 'detail',
          path: "/detail",
          component: resolve =>
            require(["../components/detail/index.vue"], resolve)
        },
        {
          path: "*",
          component: resolve =>
            require(["../components/layout/notFound.vue"], resolve)
        }
      ]
    }
  ]
});
