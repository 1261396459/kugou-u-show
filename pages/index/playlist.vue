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
        <image src="../../static/pic/playlist/search.png"></image>
        <text>最近</text>
        <image src="../../static/pic/playlist/selector.png"></image>
      </view>
      <view class="rank-way">
        <text>单曲</text>
        <text>专辑</text>
        <text>详情</text>
        <text>歌词</text>
        <text>歌词本</text>
      </view>
      <view class="music-list">
        <view class="music-item" v-for="item,index in list">
          <view class="isplay">
            <image v-show="nowMusic==index?!ispause:false" src="/static/pic/playlist/pause.png" @click="pauset(index)"></image>
            <image v-show="nowMusic==index?ispause:true" src="/static/pic/playlist/play.png" @click="playt(index)"></image>
          </view>
          <view class="infor">
            <text class="title">{{ item.title }}</text>
            <text class="singer">{{ item.singer }}</text>
          </view>
          <view class="length">
            <text>{{ item.length }}</text>
          </view>
        </view>
      </view>
      <view class="tabbar-seat"></view>
      <view class="tabbar">
        <view @click="toBack">
          <image src="../../static/pic/playlist/music.png"></image>
          <text>音乐</text>
        </view>
        <view>
          <image src="../../static/pic/playlist/listen.png"></image>
          <text>音乐馆</text>
        </view>
        <view>
          <image src="../../static/pic/playlist/more.png"></image>
          <text>音乐分类</text>
        </view>
        <view>
          <image src="../../static/pic/playlist/mv.png"></image>
          <text>我的mv</text>
        </view>
        <view>
          <image src="../../static/pic/playlist/personal.png"></image>
          <text>个人中心</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        ispause: this.$audio.Audio.paused,
        nowMusic: this.$audio.index,
      }
    },
    methods:{
      toBack() {
        uni.navigateBack();
      },
      // 同步播放器信息
      pullPlayer(){
        this.list = this.$audio.musiclist;
        this.ispause = this.$audio.getPaused();
        this.nowMusic = this.$audio.index;
      },
      playt(id){
        console.log(id);
        this.$audio.initMusic(id);
        this.$audio.play();
        this.ispause = this.$audio.getPaused();
        this.nowMusic = this.$audio.index;
      },
      pauset(id){
        console.log(id);
        this.$audio.pause();
        this.ispause = this.$audio.getPaused();
        this.nowMusic = this.$audio.index;
      }
    },
    mounted() {},
    onShow() {
      this.pullPlayer();
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/tool.scss';
  $bgi: '/static/pic/playlist/bgi.jpg';
  .bg {
    @include i-background-app($bgi);
  }
  .content {
    /* 存放整体页面信息 */
    font-family: '华文楷体';
    font-size: 1rem;
    color: #FFFFFF;
  }
  .navigatebar {
    height: 91px;
    @extend .i-row-horizontal-between, .i-row-vertical-center;
    margin: 0px 19px 16px;
    
    image {
      width: 15px; height: 15px;
    }
    text {
      font-size: 0.84rem;
    }
  }
  .rank-way {
    height: 42px;
    font-size: 0.84rem;
    @extend .i-row-horizontal-around;
  }
  .music-item {
    height: 90px;
    padding-top: 8px;
    border-top: 1px solid #727a90;
    @extend .i-row;
    
    .isplay {
      width: 91px;
      @extend .i-row-horizontal-center, .i-row-vertical-center;
      
      image {
        width: 40px; height: 40px;
      }
    }
    .infor {
      width: 100%;
      @extend .i-col-vertical-center;
      
      .title {
        font-size: 0.84rem;
      }
      .singer {
        font-size: 0.54rem;
      }
    }
    .length {
      width: 92px;
      font-size: 0.5rem;
      @extend .i-row-vertical-center;
    }
  }
  .tabbar-seat {
    width: 100%; height: 58px;
  }
  .tabbar {
    width: 100%; height: 58px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #151f28;
    z-index: 0;
    @extend .i-row-horizontal-around;
    
    view {
      @extend .i-col-horizontal-center;
      justify-content: space-around;
      
      image {
        width: 24px; height: 24px;
      }
      text {
        color: #8a8f94;
        font-size: 0.4rem;
      }
    }

  }
</style>
