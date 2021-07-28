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
        <image src="../../static/pic/playlist/more.png"></image>
      </view>
      <view class="rank-way">
        <text>单曲</text>
        <text>专辑</text>
        <text>详情</text>
        <text>歌词</text>
        <text>歌词本</text>
      </view>
      <view class="music-list">
        <view class="music-item" v-for="item,index in musicList">
          <view class="isplay">
            <image v-if="isplay != index" src="/static/pic/playlist/pause.png"></image>
            <image v-else src="/static/pic/playlist/play.png"></image>
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
        musicList: [
          {
            title: '樱花樱花想见你',
            singer: '满汉全席音乐团队',
            length: 403
          },
          {
            title: 'aLIEz',
            singer: 'mizuki',
            length: 213
          },
          {
            title: '惊鸿一面',
            singer: '许嵩、黄龄',
            length: 316
          }, 
          {
            title: '大鱼',
            singer: '周深',
            length: 404
          },
          {
            title: '焚情',
            singer: '张信哲',
            length: 200
          }
        ],
        isplay: -1
      }
    },
    methods:{
      toBack() {
        uni.navigateBack();
      }
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
