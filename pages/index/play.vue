<template>
  <view class="main">
    <view class="bg"></view>
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="content">
      <view class="navigatebar">
        <image class="back" src="/static/pic/play/back.png" @click="toBack"></image>
        <text class="m-name">{{ playingMusic.title }}</text>
      </view>
      <view class="m-singer"><text>{{ playingMusic.singer }}</text></view>
      <view class="m-effect">
        <view>
          <text>标准</text>
          <image src="/static/pic/play/down.png"></image>
        </view>
        <view>
          <text>音效</text>
        </view>
        <view>
          <text>封面</text>
          <image src="/static/pic/play/down.png"></image>
        </view>
      </view>
      <view class="m-cover">
        <image :src="playingMusic.coverUrl"></image>
      </view>
      <view class="m-lyric">
        <view>
          <image></image>
          <text>{{ playingMusic.lysic[0] }}</text>
          <image src="/static/pic/play/micro.png"></image>
        </view>
        <view>
          <image></image>
          <text>{{ playingMusic.lysic[1] }}</text>
          <image src="/static/pic/play/note.png"></image>
        </view>
      </view>
      <view class="is-sing">
        <view class="sing" :style="'background-color:'+otherSelect[other]"></view>
        <view class="other"  :style="'background-color:'+otherSelect[1-other]"></view>
      </view>
      <view class="interactive">
        <image :src="playingMusic.islike?'../../static/pic/play/like.png':'../../static/pic/play/dislike.png'"></image>
        <image src="../../static/pic/play/download.png"></image>
        <image src="../../static/pic/play/comments.png"></image>
        <image src="../../static/pic/play/share.png"></image>
        <image src="../../static/pic/play/more.png"></image>
      </view>
      <view class="loading">
        <text class="now">{{ playNow*playingMusic.length }}</text>
        <view class="loading-bar">
          <view class="pass"></view>
          <view class="in"></view>
        </view>
        <text class="all">{{ playingMusic.length }}</text>
      </view>
      <view class="operation">
        <image src="/static/pic/play/playway.png" class="a"></image>
        <view>
          <view class="b">
            <image src="/static/pic/play/last.png"></image>
          </view>
          <view class="c">
            <image src="/static/pic/play/play.png"></image>
          </view>
          <view class="b">
            <image src="/static/pic/play/next.png"></image>
          </view>          
        </view>
        <image src="/static/pic/play/detail.png" class="a"></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        playingMusic: {
          title: '日落大道-歌手2017第一季第十期上分卡华丽丽',
          singer: '梁博',
          coverUrl: '/static/pic/play/disc.png',
          lysic: ['我们寻找着在这条路的中间','我们迷失着在这条路的两端'],
          length: 276,
          islike: false,
          commentsNum: 1001
        },
        playNow: 0.4,
        other: 0,
        otherSelect: ['#ffffff','#abb5bb']
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
  $bgi: '/static/pic/play/disc.png';
  .bg {
    @include i-background-app($bgi);
    filter: blur(8px);
  }
  .content {
    font-family: '华文楷体';
    color: #FFFFFF;
  }
  .navigatebar {
    height: 53.33px;
    @extend .i-row-vertical-center;
    
    .back {
      width: 10.33px; height: 19.66px;
      margin: 0px 12.33px;
    }
    .m-name {
      width: 80%;
      font-size: 1.2rem;
      @extend .i-text-omit-line;
    }
  }
  .m-singer {
    height: 20.33px;
    @extend .i-row-horizontal-center, .i-row-vertical-center;
    font-size: 0.96rem;
    margin-bottom: 11.33px;

    &::after, &::before{
      content: "";
      background: #b3b5b4;
      height: 1px;
      width: 5%;
    }
  }
  .m-effect {
    width: 40%; height: 29px;
    margin: 0 auto;
    @extend .i-row-horizontal-between, .i-row-vertical-center;
    
    view {
      border: 1px solid #FFFFFF;
      border-radius: 5px;
    }
    text {
      font-size: 0.96rem;
    }
    image {
      width: 6px; height: 6px;
    }
  }
  .m-cover {
    height: 282.66px;
    @extend .i-row-horizontal-center, .i-row-vertical-center;
    
    image {
      width: 262px; height: 262px;
      border-radius: 50%;
      /* 这里需要根据背景变化 */
      border: 4px solid #484837;
    }
  }
  .m-lyric {
    height: 68.66px;
    font-size: 1.2rem;
    @extend .i-col-horizontal-center;
    
    view {
      width: 100%;
      @extend .i-row-horizontal-around;
      
      image {
        width: 18px; height: 18px;
      }
    }
  }
  .is-sing {
    height: 20px;
    @extend .i-row-horizontal-center;
    
    view {
      width: 6px; height:6px;
      border-radius: 50%;
      margin: 0px 2px;
    }
  }
  .interactive {
    height: 31.33px;
    @extend .i-row-horizontal-around;
    
    image {
      width: 18.66px; height: 18.66px;
    }
  }
  .loading {
    height: 29px;
    @extend .i-row-horizontal-around, .i-row-vertical-center;
    
    text {
      font-size: 0.6rem;
    }
    .loading-bar {
      width: 60%; height: 1px;
      background-color: #b6b2cb;
      @extend .i-row-vertical-center;
      
      .pass{
        width: 50%; height: 1px;
        background-color: #2190f3;
      }     
      .in{
        width: 6px; height: 6px;
        border-radius: 3px;
        background-color: #ffffff;
      }           
    }
  }
  .operation {
    @extend .i-row-horizontal-around, .i-row-vertical-center;
    
    > view {
      width: 60%;
      @extend .i-row-horizontal-around, .i-row-vertical-center;
    }
    .a {
      width: 20px; height: 20px;
    }
    .b {
      width: 48px; height: 48px;
      background-color: #007AFF;
      border-radius: 50%;
      @extend .i-row-horizontal-around, .i-row-vertical-center;
      
      image {
        width: 16px; height: 16px;
      }
      
    }
    .c {
      width: 72px; height: 72px;
      background-color: #007AFF;
      border-radius: 50%;
      @extend .i-row-horizontal-around, .i-row-vertical-center;
      
      image {
        width: 24px; height: 24px;
      }
    }
  }
</style>
