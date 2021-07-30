<template>
  <view class="main">
    <page-meta></page-meta>
    <image class="bg1" :src="list[nowMusic].mid[0].curl"></image>
    <view class="bg2"></view>
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="content">
      <view class="navigatebar">
        <image class="back" src="/static/pic/play/back.png" @click="toBack"></image>
        <text class="m-name">{{ list[nowMusic].mid[0].title }}</text>
      </view>
      <view class="m-singer"><text>{{ list[nowMusic].mid[0].singer }}</text></view>
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
        <image class="anplay" :src="list[nowMusic].mid[0].curl" :class="{anpause: ispause}"></image>
      </view>
      <view class="m-lyric">
        <view>
          <image></image>
          <text>{{ first }}</text>
          <image src="/static/pic/play/micro.png"></image>
        </view>
        <view>
          <image></image>
          <text>{{ second }}</text>
          <image src="/static/pic/play/note.png"></image>
        </view>
      </view>
      <view class="is-sing">
        <view class="sing" :style="'background-color:'+otherSelect[other]"></view>
        <view class="other"  :style="'background-color:'+otherSelect[1-other]"></view>
      </view>
      <view class="interactive">
        <image src="../../static/pic/play/like.png"></image>
        <image src="../../static/pic/play/download.png"></image>
        <image src="../../static/pic/play/comments.png"></image>
        <image src="../../static/pic/play/share.png"></image>
        <image src="../../static/pic/play/more.png"></image>
      </view>
      <view class="loading">
        <text class="now">{{ curL }}</text>
        <view class="loading-bar">
          <view class="pass" :style="{width: loading+'%'}"></view>
          <view class="in"></view>
        </view>
        <text class="all">{{ durL }}</text>
      </view>
      <view class="operation">
        <image src="/static/pic/play/playway.png" class="a"></image>
        <view>
          <view class="b" @click="lastMusic()">
            <image src="/static/pic/play/last.png"></image>
          </view>
          <view class="c" @click="pop">
            <image v-show="ispause" src="/static/pic/play/play.png"></image>
            <image v-show="!ispause" src="/static/pic/play/pause.png"></image>
          </view>
          <view class="b" @click="nextMusic()">
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
        list:[],
        lysic: [],
        nowMusic: 0,
        ispause: true,
        itvid: 0,
        loading: 0,
        curL: '00:00',
        durL: '04:00',
        other: 0,
        otherSelect: ['#ffffff','#abb5bb'],
        first: '',
        second: '',
        nowLine: 1,
      }
    },
    methods:{
      toBack() {
        uni.navigateBack();
      },
      initList() {
        this.$database.get(
          'listen, musicList',
          {
            uid: getApp().globalData.uid
          },
          (data)=>{
            this.list = data;
            console.log(data);
            this.initLysic();
          }
        );
      },
      initMusic(){
        this.ispause = this.$audio.paused;
        this.loading = this.$audio.currentTime/this.$audio.duration*100;
        this.durL = this.getTime(this.$audio.duration);       
      },
      initLysic(){
        this.nowLine = 1;
        this.first='';
        this.second='';
        this.lysic=[];
        uni.request({
          url: this.list[this.nowMusic].mid[0].lurl,
          success:(res)=>{
            if(res.statusCode == 200){
              const rm = res.data;// 获取的是字符串类型的歌词
              const temp = rm.replace(/(\n\[|\r\n\[|\]|\[)/g,'$-$').split('$-$');
              let flag = true;
              for(let i=0;i<temp.length;i++){
                if(flag){
                  if(temp[i] == 'offset:0'){
                    flag=false;
                    i+=1;
                  }
                }
                else{
                  const tt = temp[i].split(':');
                  let ttt = parseInt(tt[0]*60) + parseFloat(tt[1]); 
                  this.lysic.push({
                    time: ttt,
                    text: temp[i+1]
                  });
                  i+=1;
                }
     
              }
              this.first = this.lysic[0].text;
              this.second = this.lysic[1].text;
              console.log(this.lysic);
              return;
            }
            console.log('err',res);
          },
          fail(err) {
            console.log(err);
          }
        })
      },
      playMusic(){        
        this.ispause = false;
        this.itvid = setInterval(()=>{
          this.loading = this.$audio.currentTime/this.$audio.duration*100;
          this.curL = this.getTime(this.$audio.currentTime);
          if(parseFloat(this.lysic[this.nowLine].time) <= this.$audio.currentTime){
            this.nowLine+=1;
            this.first = this.second;
            this.second = this.lysic[this.nowLine].text;
            // console.log(this.lysic[this.nowLine].text);
          }
        },100);
      },
      pauseMusic(){  
        this.ispause = true;
        clearInterval(this.itvid);
      },
      pop(){
        if(this.$audio.paused){         
          this.playMusic();
          this.$audio.play();
          this.durL = this.getTime(this.$audio.duration);
        }
        else{
          this.pauseMusic();
          this.$audio.pause();
        }
      },
      nextMusic(){
        this.pauseMusic();
        this.$audio.pause();
        this.nowMusic = (this.nowMusic+1)%this.list.length;
        getApp().globalData.nowMusic = this.nowMusic;
        this.$audio.src = this.list[this.nowMusic].mid[0].surl;
        this.initLysic();
        this.loading = 0;     
        this.curL = '00:00';
        
      },
      lastMusic(){
        this.pauseMusic();
        this.$audio.pause();
        this.nowMusic = (this.nowMusic+this.list.length-1)%this.list.length;
        getApp().globalData.nowMusic = this.nowMusic;
        this.$audio.src = this.list[this.nowMusic].mid[0].surl;
        this.initLysic();       
        this.loading = 0;      
        this.curL = '00:00';
        
      },
      getTime(t){
        const nt = t;
        const sec = parseInt(nt%60)+'';
        const min = parseInt(nt/60)+'';  
        return Array(3-min.length).join('0')+min+':'+Array(3-sec.length).join('0')+sec;
      }
    },
    mounted() {
      this.initList();
      this.nowMusic = getApp().globalData.nowMusic;   
      this.initMusic();
      
      if(this.ispause){
        this.pauseMusic();
      }
      else{
        this.playMusic();
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~@/tool.scss';
  .bg1 {
    // 第一层背景，封面模糊
    @extend .i-fill-container;
    position: fixed;
    top: auto;
    left: auto;
    z-index: -2;
    filter: blur(8px);
  }
  .bg2 {
    // 第二层背景，中间向上下渐变
    @extend .i-fill-container;
    position: fixed;
    top: auto;
    left: auto;
    z-index: -1;
    background: linear-gradient(to top, #294266 0%, #2a3a3a33 50%, #2f3f3f 100%);
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
      text {
        width: 60%;
        white-space: nowrap;
        overflow:hidden;
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
