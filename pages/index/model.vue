<template>
  <view class="main">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="content">
      <view class="navigatebar">
        <image src=""></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods:{}
  }
</script>

<style scoped>
/* #ifdef APP-PLUS */
  .main {
    background-image: url('~@/static');
    background-size: 100% 100%;
    width: 100%;  height: 100%;
    position: absolute;
    top: auto;
    left: auto;
    z-index: -2;
  }
/* #endif */
/* #ifdef H5 */
  page {
    background-image: url('~@/static');
    background-size: 100% 100%;
    width: 100%;  height: 100%;
  }
/* #endif */
</style>
