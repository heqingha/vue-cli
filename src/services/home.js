import { xhr } from "./request";

const home = {
  home_list(data) {
    return xhr({
      url: "/tfPassParkApi/carpaybindcs/selectByIndex",
      data
    });
  },
  home_add() {
    // 添加
  }
};

// 实例化再导出
export default home;
