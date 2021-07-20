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

<style scoped lang="scss">
    @import '~@/tool.scss';
/* #ifdef APP-PLUS */
  .main {
    @include i-background-app('');
  }
/* #endif */
/* #ifdef H5 */
  page {
    @include i-background-h5('');
  }
/* #endif */
</style>
