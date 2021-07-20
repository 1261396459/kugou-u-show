<template>
  <view class="main">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="content">
      <view class="navigatebar">
        <image class="close" src="/static/pic/close.png"></image>
      </view>
      <view class="logo-text">
        <image class="mid-logo" src="/static/logo.png"></image>
        <view class="mid-text">
          <view class="mtext" style="font-size: 1.5rem; font-family: '幼圆';"><text>酷狗音乐</text></view>
          <view class="mtext" style="font-size: 0.6rem; font-family: '华文细黑';"><text>音乐总有新玩法</text></view>
        </view>
      </view>
      <view class="event">
        <button class="login-btn" style="background-color: #0c96e6;" @click="login"><text>登录</text></button>
        <button class="login-btn" style="background-color: #0ce6c5;"><text>注册</text></button>
      </view>
      <view class="login-way-text"><text>其他登录方式</text></view>
      <view class="login-way-select">
        <view>
          <image src="/static/pic/weibo.png">
          <view><text>微博</text></view>
        </view>
        <view>
          <image src="/static/pic/qq.png">
          <view><text>QQ</text></view>
        </view>
        <view>
          <image src="/static/pic/wechat.png">
          <view><text>微信</text></view>
        </view>
      </view>
      <view class="agreement"><text>登录代表你同意<span>酷狗服务</span>和<span>隐私条款</span></text></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      login() {
        uni.navigateTo({
          url: 'index'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/tool.scss';
/* #ifdef APP-PLUS */
  .main {
    @include i-background-app('/static/pic/bg1.jpg');
  }
/* #endif */
/* #ifdef H5 */
  page {
    @include i-background-h5('/static/pic/bg1.jpg');
  }
/* #endif */
  .content {
    @extend .i-fill-container;
    /* 页面默认使用白色华文楷体 */
    font-family: "华文楷体";
    color: #FFFFFF;
  }
  .navigatebar {
    @extend .i-row-vertical-center;
    height: 33px;
    
    .close {
      width: 14px; height: 14px;
      margin-left: 19px;
    }
  }
  .logo-text {
    @extend .i-row-horizontal-center;
    margin-top: 101px;
    
    .mid-logo {
      width: 59px; height: 59px;
    }
    .mid-text {
      @extend .i-col-vertical-between;
      margin-left: 26px;
      
      .mtext {
        width: 160px;
        @extend .i-text-between;
      }
    }
  }
  .event {
    margin-top: 183px;
    
    .login-btn {
      color: #FFFFFF;
      font-size: 1rem;
      width: 248px; height: 35px;
      line-height: 35px;
      border-radius: 25px;
      margin-bottom: 14px;
    }
  }
  .login-way-text {
    @extend .i-row-horizontal-center, .i-row-vertical-center;
    white-space: pre;
    font-size: 0.72rem;
    margin-top: 38px;
    
    &::after, &::before{
      content: "";
      background: #FFFFFF;
      height: 1px;
      width: 35%;
    }
  }
  .login-way-select {
    width: 235px; height: 41px;
    font-size: 0.6rem;
    margin:0 auto;
    @extend .i-row-horizontal-between;
    margin-top: 28px;
    
    image {
      width: 22px; height: 22px;
    }
    
    text {
      display: flex;
      @extend .i-row-horizontal-center;
    }
  }
  .agreement {
    text-align: center;
    font-size: 0.6rem;
    margin-top: 31px;
    
    span {
      color: #037cc2;
    }
  }
</style>
