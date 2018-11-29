import { xhr } from "./request";

const detail = {
  detail(data) {
    return xhr({
      url: "/tfPassParkApi/carpaybindcs/selectCarPayBindById",
      data
    });
  },
};

// 实例化再导出
export default detail;
