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

</style>
<script>
import mHeader from "./Header"
import mSidebar from "./Sidebar"
export default {
  components: {
    mHeader,mSidebar
  }
}
</script>
