<template>
  <view class="main">
    <view class="bg"></view>
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="content">
      <view class="navigatebar">
        <image class="close" src="/static/pic/login/exit.png" v-show="toInputShow != 0" @click="cancel"></image>
      </view>
      <view class="logo-text">
        <image class="mid-logo" src="/static/logo.png"></image>
        <view class="mid-text">
          <view class="mtext" style="font-size: 1.5rem; font-family: '幼圆';"><text>酷狗音乐</text></view>
          <view class="mtext" style="font-size: 0.6rem; font-family: '华文细黑';"><text>音乐总有新玩法</text></view>
        </view>
      </view>
      <view class="input" >
        <view v-show="toInputShow != 0">
          <input type="text" v-model="acc" placeholder="帐号"/>
          <input type="text" v-model="pass" placeholder="密码"/>
        </view>
      </view>
      <view class="event">
        <button class="login-btn" style="background-color: #0c96e6;" @click="toLogin" v-show="toInputShow != 2"><text>登录</text></button>
        <button class="login-btn" style="background-color: #0ce6c5;" @click="toSignin" v-show="toInputShow != 1"><text>注册</text></button>
      </view>
      <view class="login-way-text"><text>其他登录方式</text></view>
      <view class="login-way-select">
        <view>
          <image src="/static/pic/login/weibo.png">
          <view><text>微博</text></view>
        </view>
        <view>
          <image src="/static/pic/login/qq.png">
          <view><text>QQ</text></view>
        </view>
        <view>
          <image src="/static/pic/login/wechat.png">
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
        toInputShow: 0,
        acc: "test",
        pass: "123"
      }
    },
    methods: {
      async _login() {
        let acc = this.acc;
        let pass = this.pass;
        console.log(acc, pass);
        this.$database.get(
          'users',
          {
            username: acc,
            password: pass
          },
          function(data){
            if(data.length == 0){
              uni.showToast({
                icon: 'none',
                title: '帐号或密码错误'
              })
            }
            else{
              const rm = data[0];
              getApp().globalData.uid = rm._id;
              getApp().globalData.uname = rm.username;
              uni.navigateTo({
                url: 'index'
              });
            }
          }
         )
      },
      toLogin() {
        if(this.toInputShow==0)
          this.toInputShow=1;
        else {
          this._login();
        }
      },
      toSignin() {
        if(this.toInputShow==0)
          this.toInputShow=2;
        else {
          
        }        
      },
      cancel() {
        this.toInputShow=0;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/tool.scss';
  $bgi: '/static/pic/login/bgi.jpg';
  .bg {
    @include i-background-app($bgi);
  }
  .content {
    @extend .i-fill-container;    
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
  .input {
    height: 183px; 
    @extend .i-col-horizontal-center,.i-col-vertical-center;
    
    input {
      width: 248px; height: 35px;
      text-indent:10px;
      border-bottom: 2px #FFFFFF solid;
      margin-top: 10px;
    }
  }
  .event {
    height: 49px;
    
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
