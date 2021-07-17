<template>
  <view class="main">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="content">
      <view class="navigatebar">
        <image class="close" src="../../static/pic/close.png"></image>
      </view>
      <view class="logo-text">
        <image class="mid-logo" src="../../static/logo.png"></image>
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
          <image src="../../static/pic/weibo.png">
          <view><text>微博</text></view>
        </view>
        <view>
          <image src="../../static/pic/qq.png">
          <view><text>QQ</text></view>
        </view>
        <view>
          <image src="../../static/pic/wechat.png">
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

<style scoped>
/* #ifdef APP-PLUS */
  .main {
    background-image: url('~@/static/pic/bg1.jpg');
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
    background-image: url('~@/static/pic/bg1.jpg');
    background-size: 100% 100%;
    width: 100%;  height: 100%;
  }
/* #endif */
  .content {
    width: 100%; height: 100%;
  }
  .navigatebar {
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items:center;/*指定垂直居中*/
    height: 33px;
  }
  .close {
    width: 14px; height: 14px;
    margin-left: 19px;
  }
  .logo-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 101px;
  }
  .mid-logo {
    width: 59px; height: 59px;
  }
  .mid-text {
    /* 1 */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 26px;
  }
  .mtext {
    width: 160px;
    display: inline-block;
    text-align: justify;
    text-align-last: justify;
  }
  .event {
    margin-top: 183px;
  }
  .login-btn {
    font-family: "华文楷体";
    font-size: 1rem;
    width: 248px; height: 35px;
    line-height: 35px;
    border-radius: 25px;
    margin-bottom: 14px;
  }
  .login-way-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: pre;
    font-family: "华文楷体";
    font-size: 0.72rem;
    margin-top: 38px;
  }
  .login-way-text::after,.login-way-text::before{
    content: "";
    background: #FFFFFF;
    height: 1px;
    width: 35%;
  }
  .login-way-select {
    width: 235px; height: 41px;
    font-family: "华文楷体";
    font-size: 0.6rem;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 28px;
  }
  .login-way-select image {
    width: 22px; height: 22px;
  }
  .login-way-select text {
    display: flex;
    justify-content: center;
  }
  .agreement {
    text-align: center;
    font-family: "华文楷体";
    font-size: 0.6rem;
    margin-top: 31px;
  }
  text {
    color: #FFFFFF;
  }
  span {
    color: #037cc2;
  }
</style>
