<template>
  <div class="detail">
    <div>会员名： {{this.$store.state.detail.detail.name}}</div>
    <div>类型：{{this.$store.state.detail.detail.type}}</div>
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