import Vue from "vue";
import Router from "vue-router";
import Home from "components/layout/index.vue";
Vue.use(Router);

// 使用require.context读取当前目录下以route.js命名的路由模块
// let allRoutes = (req => {
//   let routes = req
//     .keys()
//     .map(key => req(key).default)
//   return routes
//   // eslint-disable-next-line
// })(require.context('./', true, /\-route\.js$/))

// allRoutes = allRoutes.reduce((pre, cur) => {
//   return pre.concat(cur)
// }, [])

// allRoutes = allRoutes.concat([{
//   path: '*',
//   component: () => import('../views/error/404.vue')
// }])

// export default allRoutes


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
