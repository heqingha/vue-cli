<template lang="html">
    <div class="wapper">
        <mHeader></mHeader>
        <mSidebar></mSidebar>
        <div class="content">
          <router-view></router-view>
        </div>
    </div>
</template>


<style scoped>
.content {
  height: 900px;
  background: #ccc;
}
</style>
<script src='./index.js'>
// import js from './index.js'
import mHeader from "../Header"
import mSidebar from "../Sidebar"
export default {
  components: {
    mHeader,mSidebar
  }
}
</script>
