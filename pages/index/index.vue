<template>
  <view class="main">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="content">
      <view class="navigatebar">
        <image class="menu" src="../../static/pic/hamburger.png"></image>
        <view><text>听</text></view>
        <view><text>看</text></view>
        <view><text>唱</text></view>
        <image class="search" src="../../static/pic/search.png"></image>
      </view>
      <view class="personal">
        <image class="avatar" :src="me.avatarUrl"></image>
        <view class="infor">
          <view class="up">
            <text class="nickname">{{ me.nickname }}</text>
            <image class="vip" src="../../static/pic/vip.png"></image>
          </view>
          <view class="down">
            <view class="level">LV.{{ me.level }}</view>
            <text class="duration">听歌{{ me.duration }}分钟</text>
          </view>
        </view>
        <image class="messege" src="../../static/pic/email.png"></image>
      </view>
      <view class="my-music">
        <view class="my-music-item" v-for="item in myMusic">
          <image class="icon" :src="item.iconUrl"></image>
          <text class="alt">{{ item.title }}</text>
          <text class="num">{{ item.num }}</text>
        </view>
      </view>
      <view class="all-music">
        <view class="all-music-item" v-for="item in allMusic">
          <view class="icon-bg" :style="'background-color:'+item.bgc">
            <image class="icon" :src="item.iconUrl"></image>
          </view>
          <text class="alt">{{ item.title }}</text>
        </view>
      </view>
      <view class="advitisement">
        <view class="left">
          <image class="icon" src="../../static/pic/sound.png"></image>
          <text class="alt">推广</text>
        </view>
        <text class="report">装了这个app不用再去ktv</text>
      </view>
      <view class="tabbar">
        <view class="left">
          <view>
            <image class="cover" src="../../static/pic/disc.jpg"></image>
          </view>
        </view>
        <view class="right">
          <view class="up">
            <view class="loading">
              <view class="pass"></view>
              <view class="in"></view>
            </view>
          </view>
          <view class="down">
            <view class="information">
              <text class="m-name">{{ playing.m_name }}</text>
              <text class="m-singer">{{ playing.m_singer }}</text>
            </view>
            <view class="operation">
              <view>
                <image class="icon" src="../../static/pic/play.png"></image>
              </view>
              <view>
                <image class="icon" src="../../static/pic/next.png"></image>
              </view>
              <view>
                <image class="icon" src="../../static/pic/menu.png"></image>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        me: {
          avatarUrl: '../../static/pic/avatar.png',
          nickname: '胡萝北',
          level: 5,
          duration: 15302
        },
        playing: {
          id: 1,
          cover: '../../static/pic/disc.jpg',
          m_name: '日落大道歌手2017第阿双方均按法律奇偶发哈',
          m_singer: '梁博'
        },
        myMusic: [
          {
            iconUrl: '../../static/pic/pc.png',
            title: '本地音乐',
            num: 148
          },
          {
            iconUrl: '../../static/pic/heart.png',
            title: '喜欢·歌单',
            num: 3
          },          {
            iconUrl: '../../static/pic/dwonload.png',
            title: '下载',
            num: 2
          },          {
            iconUrl: '../../static/pic/clock.png',
            title: '最近',
            num: 100
          }
        ],
        allMusic: [
          {
            iconUrl: '../../static/pic/lib.png',
            bgc: '#06b062',
            title: '乐库'
          },
          {
            iconUrl: '../../static/pic/list.png',
            bgc: '#067ab0',
            title: '歌单'
          },
          {
            iconUrl: '../../static/pic/chart.png',
            bgc: '#e62134',
            title: '电台·酷群'
          },
          {
            iconUrl: '../../static/pic/radio.png',
            bgc: '#c25bd1',
            title: '猜你喜欢'
          },
          {
            iconUrl: '../../static/pic/chart.png',
            bgc: '#edb231',
            title: '每日推荐'
          },
          {
            iconUrl: '../../static/pic/speech.png',
            bgc: '#4be22d',
            title: '听歌识曲'
          },
        ]
      }
    },
    methods:{}
  }
</script>

<style scoped>
  /* #ifdef APP-PLUS */
    .main {
      background-image: url('~@/static/pic/bg2.jpg');
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
      background-image: url('~@/static/pic/bg2.jpg');
      background-size: 100% 100%;
      width: 100%;  height: 100%;
    }
  /* #endif */
  page {
    font-family: '华文楷体';
  }
  text {
    font-size: 1.2rem;
    color: #FFFFFF;
  }
  .navigatebar {
    height: 51px;
    padding: 0px 18px;
    font-family: '幼圆';
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .menu {
    width: 18px;  height: 15px;
  }
  .search {
    width: 18px;  height: 18px;
  }
  
  .personal {
    height: 60px;
    padding: 0px 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .avatar {
    width: 43px;  height: 43px;
  }
  .infor{
    margin-left: 14.66px;
  }
  .nickname {
    font-size: 0.6em;
    margin-right: 6px;
  }
  .vip {
    width: 8px;  height: 5px;
  }
  .down {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .level {
    font-size: 0.34em;
    font-family: '华文中宋';
    color: #f9a80b;
    border: 1px solid #f9a80b ;
    border-radius: 2px;
    margin-right: 6px;
  }
  .duration {
    font-size: 0.36em;
    white-space: nowrap;
    color: #b5b4b1;
  }
  .messege {
    width: 14px; height: 11px;
    margin-left: 169px;
  }
  
  .my-music {
    height: 96px;
    margin: 0px 15.66px ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
  }
  .my-music-item {
    display: flex;
    flex-direction: column; 
    align-items: center;
  }
  .my-music-item .icon {
    width: 26px;  height: 26px;    
  }
  .my-music-item .alt {
    font-size: 0.72rem;
    margin-top: 15px;
  }
  .my-music-item .num {
    font-size: 0.6rem;
    color: #b5b4b1;
    margin-top: 9px;
  }
  .all-music {
    height: 206px;  width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .all-music-item {
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 32px;
  }
  .all-music-item .icon-bg {
    width: 55px;  height: 55px;
    border-radius: 27.5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .all-music-item .icon {
    width: 18px;  height: 21px;   
  }
  .all-music-item .alt {
    font-size: 0.6rem;
    color: #87cbcc;
    margin: 11px 0px;
  }
  
  .advitisement {
    height: 38px;
    margin: 0px 20px;
    border-top:1px solid #0a8ec5;
    border-bottom:1px solid #0a8ec5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .advitisement .left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .advitisement .icon {
    width: 19px;  height: 19px;
    margin-right: 12px;
  }
  .advitisement .alt {
    font-size: 0.72rem;
    color: #87cbcc;
  }
  .advitisement .report {
    font-size: 0.6rem;
    color: #87cbcc;
  }
  .tabbar {
    width: 100%; height: 66px;
    padding-bottom: 10px;
    position: fixed;
    bottom: 0px;
    background-color: #151f28;
    display: flex;
    flex-direction: row;
  }
  .tabbar .cover{
    width: 59px; height: 59px;
    margin: 0px 12px;
    border-radius: 30px;
    border: solid #080c10 3px;
    position: relative;
    bottom: 5px;
  }
  .tabbar .right{
    width: 100%; height: 100%;
  }
  .tabbar .up{
    width: 100%; height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tabbar .up .loading{
    width: 100%; height: 1px;
    background-color: #01182d;
    display: flex;
    align-items: center;
  }
  .tabbar .up .loading .pass{
    width: 50%; height: 1px;
    background-color: #2190f3;
  }
  .tabbar .up .loading .in{
    width: 6px; height: 6px;
    border-radius: 3px;
    background-color: #2190f3;
  }
  .tabbar .down{
    width: 100%; height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0px;
  }
  .tabbar .information{
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .tabbar .operation{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .tabbar .m-name{
    height: 50%;
    font-size: 0.6rem;
    overflow: hidden;   
    white-space: nowrap;     
    text-overflow: ellipsis; 
  }
  .tabbar .m-singer{
    height: 50%;
    font-size: 0.48rem;
  }
  .tabbar .icon{
    width: 11px; height: 11px;
  }
</style>
