import axios from 'axios' 



// 创建axios实例
const service = axios.create({
    // baseURL: process.env.BASE_API, // api 的 base_url
    baseURL: 'api/oayjx/oah/', // api 的 base_url
    timeout: 5000, // 请求超时时间
  })
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//   service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


  // 判断obj的类型
const toType = (obj) => {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }
  // 参数过滤函数
  const filterNull = (params) => {
    for (var key in params) {
      if (toType(params[key]) === 'string') {
        params[key] = params[key].trim()
      } else if (toType(params[key]) === 'object') {
        params[key] = filterNull(params[key])
      }
    }
    return params
  }


  //  请求拦截器

  service.interceptors.request.use(
    config => {
      // config.params && filterNull(config.params)
      // // if (store.getters.token) {
      // //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
      // // }
      // if (config.method === 'post' || config.method === 'put') {
      //   // config.data = qs.parse(qs.stringify(config.params)) || null
      //   config.data = config.params || null
      //   config.params = null
      // }
      return config
    },
    error => {
      this.$notify({
        title: '错误',
        message: '网络繁忙，请稍后再试',
        type: 'error'
      });
      // Toast("网络繁忙，请稍后再试");
      Promise.reject(error)
    }
  )

  // 响应拦截器

  service.interceptors.response.use(
    response => {
      const res = response;
      // console.log(res)
      // if (res.status_code === 2001){
      //   Toast("当前登录用户出错");
      // }else if(res.status_code === 1001){
      //   Toast("管理员");
      // }else if(res.status_code === 1002){
      //   Toast("普通用户");
      // }
      return response
    },
    error => {
      // return Promise.reject(error.response.data)
    }
  )
  export default service



