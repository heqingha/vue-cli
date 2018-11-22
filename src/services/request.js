// import * as xhrModule from "./request"; //as 集合成对象导出

// export default  xhrModule
import Qs from "qs";
import axios from "axios";

const xhr = ({ url, data, method = "POST" }) => {
  return axios({
    method,
    url,
    data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    transformRequest: [
      function(data) {
        data = Qs.stringify(data);
        return data;
      }
    ]
  })
    .then(res => res.data)
    .catch(error => {
      //   this.$message("请求失败");
      alert("请求失败");
    });
};

export { apiList, xhr };
