<template>
  <view style="background-image: url(../../static/pic/bg1.jpg);">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="content">
      <view class="navigatebar">
        <image src="../../static/pic/close.png"></image>
      </view>
      <view class="logo-text">
        <image src="../../static/logo.png"></image>
        <view>
          <view>酷狗音乐</view>
          <view>音乐总有新玩法</view>
        </view>
      </view>
      <view class="event">
        <button>登录</button>
        <button>注册</button>
      </view>
      <view class="login-way-text">其他登录方式</view>
      <view class="login-way-select">
        <view>微博</view>
        <view>QQ</view>
        <view>微信</view>
      </view>
      <view class="agreement">登录代表你同意酷狗服务和隐私条款</view>
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
      
    }
  }
</script>

<style>
  .logo-text {
    display: flex;
    flex-direction: row;
  }
  .login-way-select {
    display: flex;
    flex-direction: row;
  }
</style>
