<template>
  <view class="main">
    <view class="bg">
      <!-- 这里是背景图 -->
    </view>
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
  $bgi: '';
  .bg {
    @include i-background-app($bgi);
  }
  .content {
    /* 存放整体页面信息 */
  }
</style>
