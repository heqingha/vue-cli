<template>
  <div class="home">
    <el-form :model="searchForm" :inline="true" ref='searchForm' class="demo-form-inline">
      <el-form-item label="车牌">
        <el-input v-model="searchForm.carplatenumber" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="客户等级">
        <el-select v-model="searchForm.customerlevel" placeholder="等级">
          <el-option label="全部" value="全部"></el-option>
          <el-option label="一般" value="一般"></el-option>
          <el-option label="重要" value="重要"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker v-model="searchForm.date" type="daterange" range-separator="至" value-format='yyyy-MM-dd' start-placeholder="开始" end-placeholder="结束">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="submitForm('searchForm')">搜索</el-button>
        <el-button @click="resetForm('searchForm')">清除</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="this.$store.state.home.loading" :data="this.$store.state.home.tableData" border style="width: 100%">
      <template v-for="item in this.$store.state.home.tableDataLabel">
                  <el-table-column
                    :prop="item.prop"
                    :label="item.label"
                    width="180">
                  </el-table-column>
</template>

      <el-table-column fixed="right" label="操作" width="200" scope.row.carpaybindid>
<template slot-scope="scope">
  <el-button type="text" size="small" @click="handleView(scope.$index, scope.row)">
    查看</el-button>
  <el-button type="text" size="small" @click="handleAdd">
    新增
  </el-button>
  <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
  <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
</template>
      </el-table-column>
    </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.$store.state.home.skipCount"
          :page-sizes="[6,10, 20, 50]"
          :page-size="this.$store.state.home.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.$store.state.home.count">
        </el-pagination>
      <el-dialog title="添加/修改车辆" :visible.sync="dialogFormVisible" :before-close="handleClose">
      <!-- 子组件 -->
        <addForm :values='addFormParent' :callback='callback' @change='handleChange'></addForm>
        <!-- 子组件 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleOk()">确 定</el-button>
      </div>
      </el-dialog>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapMutations,
    mapActions,
    mapState,
  } from "vuex";
  // 子组件
  import addForm from './addForm.vue'
  // 公共util tools
  import {
    PAGESIZE
  } from 'util'
  export default {
    components: {
      addForm
    },
    data() {
      return {
        searchForm: {
          carplatenumber: "",
          date: "",
          customerlevel: ""
        },
        dialogFormVisible: false,
        addFormParent: {
          carplatenumber: "",
          carmodel: "",
          carpaybindid: '',
        },
      };
    },
    beforeMount() {
      this.getList(PAGESIZE, 0);
    },
    methods: {
      ...mapMutations([
        // 将 `this.increment()` 映射为 `this.$store.commit('increment')`,适用于同步操作，不涉及接口
        "HOME_LIST"
      ]),
      ...mapActions([
        'HOME_LIST', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      ]),
      callback(e) {
        console.log('子组件穿过来的值', e)
      },
      handleChange(e) {
        console.log('接收从子组件传过来的当前对象', e)
      },
      getList(pageSize, skipCount) {
        // 用了别名简化之后
        this.HOME_LIST({
          type: "HOME_LIST",
          payload: {
            pageSize,
            skipCount
          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            const oldObj = this.searchForm;
            const newObj = {};
            for (const key in oldObj) {
              if (typeof oldObj[key] === "string") {
                newObj[key] = oldObj[key];
              } else {
                newObj.startdate = oldObj.date[0];
                newObj.enddate = oldObj.date[1];
              }
            }
            this.$store.dispatch({
              type: "HOME_LIST",
              payload: {
                ...newObj,
                pageSize: PAGESIZE,
                skipCount: 0
              }
            });
          } else {
            alert("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.searchForm = {}
        this.$refs[formName].resetFields();
        this.getList(PAGESIZE, 0);
      },
      handleAdd() {
        this.dialogFormVisible = true;
        this.addFormParent = {}
      },
      handleOk() {
        const _this = this;
        const {
          carpaybindid,
          carplatenumber,
          carmodel
        } = this.addFormParent
        // this.$refs['addForms'].validate(valid => {
        if (carplatenumber && carmodel) {
          // if (valid) {
          if (carpaybindid) {
            _this.$store.dispatch({
              type: "home_edit",
              payload: {
                carpaybindid,
                carmodel,
                carplatenumber
              }
            }).then((res) => {
              _this.dialogFormVisible = false;
              _this.getList(PAGESIZE, 0)
            })
          } else {
            _this.$store.dispatch({
              type: "home_add",
              payload: {
                carplatenumber,
                carmodel
              }
            }).then((res) => {
              _this.dialogFormVisible = false;
              _this.getList(PAGESIZE, 0)
            })
          }
          // }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请按表单规则填写'
          });
          return false;
        }
        // });
      },
      handleClose(done) {
        this.addFormParent = {}
        done()
      },
      handleView(index, {
        carpaybindid
      }) {
        this.$router.push({
          name: 'detail',
          query: {
            carpaybindid
          }
        })
      },
      handleSizeChange(pageSize) {
        this.getList(pageSize, 0)
      },
      handleCurrentChange(page) {
        this.getList(this.$store.state.home.pageSize, (page - 1) * this.$store.state.home.pageSize)
      },
      handleDelete(index, {
        carpaybindid
      }) {
        this.$confirm('确认删除？')
          .then(_ => {
            this.$store.dispatch({
              type: "home_delete",
              payload: {
                carpaybindid
              }
            }).then((res) => {
              this.getList(PAGESIZE, 0)
            })
            done();
          })
          .catch(_ => {});
      },
      handleEdit(index, {
        carplatenumber,
        carmodel,
        carpaybindid
      }) {
        this.dialogFormVisible = true;
        this.addFormParent = {
          carpaybindid,
          carmodel,
          carplatenumber
        }
      }
    }
  };
</script>

<style lang='less'>
  @import "./index.less";
</style>
