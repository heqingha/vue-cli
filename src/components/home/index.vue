<template>
<div>
<el-form :model="searchForm" :inline="true" ref='searchForm' class="demo-form-inline">
  <el-form-item label="关键字">
    <el-input v-model="searchForm.keyword" placeholder="关键字"></el-input>
  </el-form-item>
  <el-form-item label="客户等级">
    <el-select v-model="searchForm.customerlevel" placeholder="客户等级">
      <el-option label="全部" value="全部"></el-option>
      <el-option label="一般" value="一般"></el-option>
      <el-option label="普通" value="普通"></el-option>
      <el-option label="重要" value="重要"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="客户等级">
    <el-date-picker
      v-model="searchForm.date"
      type="daterange"
      range-separator="至"
      value-format='yyyy-MM-dd'
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('searchForm')">提交</el-button>
    <el-button @click="resetForm('searchForm')">重置</el-button>
  </el-form-item>
</el-form>
<el-table
    v-loading="this.$store.state.home.loading"
    :data="this.$store.state.home.tableData"
    border
    style="width: 100%">
      <template v-for="item in tableDataLabel">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>
    </template>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="text" size="small">新增</el-button>
        <el-button type="text" size="small">修改</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.$store.state.home.skipCount"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="this.$store.state.home.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.$store.state.home.total">
    </el-pagination>
</div>
</template>


<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Qs from "qs";
import moment from "moment";
import home from "services/home";
export default {
  data() {
    return {
      searchForm: {
        keyword: "",
        date: "",
        customerlevel: ""
      },
      tableDataLabel: this.$store.state.home.tableDataLabel,
      loading: this.$store.state.home.loading,
      tableData: this.$store.state.home.tableData,
      total: this.$store.state.home.total,
      pageSize: this.$store.state.home.pageSize,
      total: this.$store.state.home.total,
      skipCount: this.$store.state.home.skipCount
    };
  },
  created() {
    // this.getList();
  },
  beforeMount() {
    this.getList();
  },
  mounted() {},
  methods: {
    ...mapMutations([
      "home_ist" // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      // `mapMutations` 也支持载荷：
    ]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const oldObj = Qs.parse(this.searchForm);
          const newObj = {};
          for (const key in oldObj) {
            if (typeof oldObj[key] === "string") {
              newObj[key] = oldObj[key];
            } else {
              newObj.startdate = oldObj.date[0];
              newObj.enddate = oldObj.date[1];
            }
          }
          console.log(newObj);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getList() {
      this.$store.dispatch({
        type: "HOME_LIST",
        payload: { pageSize: 20, skipCount: 0 }
      });
    },
    handleSizeChange(pageSize) {
      console.log(222, pageSize);
    },
    handleCurrentChange(page) {
      this.$store.dispatch({
        type: "HOME_LIST",
        payload: { pageSize: 20, skipCount: this.$store.state.home.skipCount }
      });
    }
  }
};
</script>

<style scoped>
@import "./index.less";
</style>
