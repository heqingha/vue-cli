<template lang="html">
    <div class="header">
      <img class="logo-img" src='https://cn.vuejs.org/images/logo.png' alt="logo">
      <div class="head-name">vue</div>
      <div class="user-info" >
        <el-dropdown trigger="click" @command="handleCommand">
              <span class="user-item el-dropdown-link">
                  <img class="user-img" src="http://iag-resource-test.weijuju.com/sf-reward-v8/static/images/img.jpg">
                  {{username}}
              </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="loginout">退出登陆</el-dropdown-item>
              </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          name: "青",
          imgUrl: "http://static.resource.iag.weijuju.com/df-sp/static/images/logo-2.png"
      }
  },
  computed: {
      username(){
          let username = sessionStorage.getItem('nick')
          return username ? username : this.name
      }
  },
  methods: {
      handleCommand(command) {
        if(command = "loginout"){
          localStorage.removeItem('user')
          this.$router.push('/');
        }
      }
  }
}
</script>

<style lang="css" scoped>
  .header{
    height: 70px;
    width: 100%;
    position: relative;
    top:0;
    left:0;
    background: #242f42;
  }
  .logo-img{
    width: 90px;
    height: 33.5px;
    float: left;
    margin: 20px 33px 0 22px;
  }
  .head-name{
    color: #fff;
    font-size: 22px;
    height: 70px;
    line-height: 72px;
    float: left;
    width: 250px;
  }
  .user-info{
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
  }
  .user-img{
    position: absolute;
    left: 0;
    top: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .user-item{
      position: relative;
      display: inline-block;
      padding-left: 50px;
      color: #fff;
      cursor: pointer;
      vertical-align: middle;
      line-height: 70px;
  }
</style>
