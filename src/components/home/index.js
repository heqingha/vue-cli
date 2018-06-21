export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .post("/workflowAdmin/flownodecs/queryMyTask", {
          pageSize: 10
        })
        .then(res => {
          console.log(11, res);
        });
    },
  }
};
