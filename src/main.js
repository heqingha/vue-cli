// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import {mapState} from 'vuex';
// 使用ui组件ElementUI
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
import store from 'store'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  // 这边证明render 函数的优先级高于 template
  // render: function(createElement) {
  //   return createElement('h1', '9999999999999')
  // }
});
