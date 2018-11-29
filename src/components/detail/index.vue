<template>
  <div class="detail">
    <div>会员名： {{this.$store.state.detail.detail.realname}}</div>
    <div>类型：{{this.$store.state.detail.detail.bindtype}}</div>
    <div>数量：{{this.$store.state.detail.detail.carpaybindid}}</div>
    <div>状态：{{this.$store.state.detail.detail.status}}</div>
    <div>日期：{{this.$store.state.detail.detail.createdate}}</div>
  </div>
</template>
<style lang='less'>
@import url("./index.less");
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const { carpaybindid } = this.$route.query;
    this.$store.dispatch({
      type: "detail",
      payload: {
        carpaybindid
      }
    });
  }
};
</script>