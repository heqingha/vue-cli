import xhr from "../services/xhr";

// 基地配置
class Home {
  // 查询
  query(data) {
    return xhr({
      url: "/tfPassParkAdmin/sitepactconfigcs/selectBySite",
      body: data
    });
  }
}

// 实例化再导出
export default new Home();
