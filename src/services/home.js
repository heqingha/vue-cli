import { xhr } from "./request";

const home = {
  home_list(data) {
    return xhr({
      url: "/tfPassParkApi/carpaybindcs/selectByIndex",
      data
    });
  },
  home_add(data) {
    // 添加
    return xhr({
      url: "/tfPassParkApi/carpaybindcs/insertCarPayBind",
      data
    });
  },
  home_edit(data) {
    // 添加
    return xhr({
      url: "tfPassParkApi/carpaybindcs/updateCarPayBindById",
      data
    });
  },
  home_delete(data) {
    // 添加
    return xhr({
      url: "/tfPassParkApi/carpaybindcs/updateCarPayBindDeleted",
      data
    });
  }
};

// 实例化再导出
export default home;
