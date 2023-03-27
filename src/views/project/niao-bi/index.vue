<template>
  <div class="d">
    <div class="h">
      <div class="box">
        <div class="box1"></div>
      </div>
      <ul id="bq">
        <li id="fu" onclick="d">
          <a href="" style="font-weight: 600">播放BGM</a>
          <audio id="yy" src="./src/views/project/niao-bi/y/SAKURA.mp3" loop controls autoplay></audio>
        </li>
        <li id="gywd">
          <a href="">关于我们slider-container</a>
        </li>
        <li><a href="">新闻动态</a></li>
        <li><a href="">创作服务平台</a></li>
        <li><a href="">开放平台</a></li>
        <li><a href="">相关业务</a></li>
        <li><a href="">认证与合作</a></li>
      </ul>
    </div>

    <div id="y1">
      <video v-for="(video, index) in videos" ref="slider" :key="index" autoplay muted loop>
        <source :src="video" type="video/mp4" />
      </video>
      <ul id="yd">
        <li v-for="(video, index) in videos" ref="indicators" :key="index"></li>
      </ul>
      <div class="hx"></div>
      <ul id="zi" ref="captions">
        <li style="display: block">
          那天，彗星划过天际的那一天，那就像，就像梦幻的景色一般，那真是无与伦比，美到极致的风景。——《你的名字》
        </li>
        <li>或许压根就没有一个生物生来就是人类的伙伴，但就算来历不明，也都是值得尊重的同居者。——《寄生兽》</li>
        <li>
          那些给人们带来巨大冲击的事情，在结束之后回想起来，竟也如此缥缈无踪，杳无痕迹，仿佛一切都事不关己。——《起风了》
        </li>
        <li>
          陌生人的雨伞打湿校服的衣角，谁的西装传来樟脑球的气味，旁人的体温紧贴在背后，浑浊的空调风扑面而来。——《言叶之庭》
        </li>
      </ul>
    </div>
  </div>

  <div class="d1">
    <div class="he2">
      <div class="hang">
        <p>我们不是「二次元」</p>
        <p>我们只是二次元的搬运工</p>
      </div>
      <div id="si1">
        <img src="./t-1/1624232292627.jpg" alt="" />
        <img src="./t-1/1624232292387.jpg" alt="" />
        <img src="./t-1/1624232292234.jpg" alt="" />
        <img src="./t-1/1624232292044.jpg" alt="" />
        <img src="./t-1/1624232291884.jpg" alt="" />
        <img src="./t-1/1624232291779.jpg" alt="" />
        <img src="./t-1/1624232289541.jpg" alt="" />
        <img src="./t-2/1624232289824.jpg" alt="" />
        <img src="./t-2/1624232289793.jpg" alt="" />
        <img src="./t-2/1624232289765.jpg" alt="" />
        <img src="./t-2/1624232289732.jpg" alt="" />
        <img src="./t-2/1624232289707.jpg" alt="" />
        <img src="./t-2/1624232289677.jpg" alt="" />
      </div>
      <div id="si2">
        <video autoplay loop muted src="./video/shu.mp4"></video>
      </div>
      <div class="si3">
        <div class="si3-1">
          <video autoplay loop muted src="./video/he.mp4"></video>
        </div>
        <div class="si3-2">
          <video autoplay loop muted src="./video/he1.mp4"></video>
        </div>
      </div>
    </div>
  </div>
  <div class="d2">
    <div class="log">
      <img src="./y/QQ图片20220415161818.jpg" alt="" />
    </div>
    <div class="b" align="center">
      <ul v-for="(item, index) in bottomTitles" ref="captions" :key="index" class="c">
        <li>{{ item }}</li>
      </ul>
      <br />
      <div id="d">
        <div><font size="5">联系方式：15760685730</font></div>
        <br />
        <div><font size="5">制作人：剑侠客</font></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import $ from 'jquery';

$(function () {
  $('#gywd').mouseover(function () {
    $('#gywd>ul').slideDown();
  });
});

const slider = ref();
const indicators = ref();
const captions = ref();

const videos = [
  './src/views/project/niao-bi/video/385ca9d7-8941-4267-9c57-47aa80b4f25.mp4',
  './src/views/project/niao-bi/video/6d79432e-e78a-40f2-995b-733bab143f5d.mp4',
  './src/views/project/niao-bi/video/e17f4ac0-fafc-44b6-b5d6-b69bcd93a263.mp4',
  './src/views/project/niao-bi/video/1cee35a4-a599-4130-bea8-a11073a4b685.mp4',
];
const bottomTitles = [
  '我的手里拿着刀，就无法抱着你。我把刀放下，就无法保护你',
  '我不是天生的王者，但我骨子里流动着不让我低头的血液',
  '这个世界里没有什么规则，就算有，那也是由我创造的',
  '正因为生命有限，所以才显得更重要，正因为生命有限、所以才更应该努力不懈',
];

// 定义当前元素的索引
let currentIndex = 0;

// 更新轮播图状态的函数;
function updateSlider() {
  // 将当前索引加 1，并进行调整（如果达到上限则从头开始）
  currentIndex += 1;
  currentIndex = currentIndex === 4 ? 0 : currentIndex;

  // 隐藏所有视频元素，然后显示当前视频元素
  for (let i = 0; i < videos.length; i += 1) {
    slider.value[i].style.display = 'none';
  }
  slider.value[currentIndex].style.display = 'block';

  // 设置所有指示器元素的背景色为透明，然后设置当前指示器元素的背景色为白色
  for (let i = 0; i < indicators.value.length; i += 1) {
    indicators.value[i].style.backgroundColor = 'rgba(255, 250, 250, 0)';
  }
  indicators.value[currentIndex].style.backgroundColor = 'snow';

  // 隐藏所有说明文字元素，然后显示当前说明文字元素
  for (let i = 0; i < captions.value.length; i += 1) {
    captions.value[i].style.display = 'none';
  }
  captions.value[currentIndex].style.display = 'block';
}

// 每隔 3 秒钟调用一次更新函数
const sliderInterval = setInterval(updateSlider, 3000);
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
/* html {
    perspective: 800px;
} */
.d {
  width: 100%;
  height: 745px;
  /* background-color: brown; */
}
.h {
  width: 100%;
  height: 102px;
  background-color: rgb(214, 213, 213);
  position: absolute;
}
.box1 {
  position: absolute;
  width: 200px;
  height: 100px;
  background-image: url(./video/bear.png);
  animation: al 1s steps(8) infinite, ll 3s forwards;
}
@keyframes al {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -1600px 0;
  }
}
@keyframes ll {
  0% {
    left: 0;
  }
  100% {
    left: 400px;
  }
}
#bq {
  width: 69%;
  height: 100%;
  /* background-color: gold; */
  float: right;
  padding: 0;
}
#fu {
  position: relative;
  width: 77.11px;
  height: 23px;
}
#gywd {
  position: relative;
}
#w {
  float: left;
  top: 10px;
}
#ejcd {
  width: 100%;
  height: 420px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  margin-left: -789px;
  margin-top: 40px;
  display: none;
  /* padding-left: 40px; */
}
#gywd > #ejcd > #heng {
  width: 32px;
  height: 32px;
  margin-left: 800px;
  margin-top: 75px;
}
#gywd > #ejcd > #heng > div {
  width: 32px;
  height: 32px;
  background-color: rosybrown;
  float: left;
}
#gywd > #ejcd > div {
  margin-left: 760px;
  margin-top: 45px;
  font-size: 25px;
  color: rgb(158, 158, 158);
  /* z-index: 99; */
}
/* #gywd:hover>#ejcd{
    display: block;
    transition: .3s;
} */
#yy {
  position: absolute;
  margin-top: 30px;
  height: 10px;
  width: 100px;
  background-color: rgba(230, 230, 230, 0.849);
  margin-top: 0;
  display: none;
  margin-left: -10px;
}
#fu:hover #yy {
  display: block;
}
#bq li {
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 100px;
  float: left;
  /* margin: 43px; */
  padding: 0;
  margin: 41px -2px 0px 50px;
}
#bq li > a {
  color: rgb(255, 255, 255);
  font-size: 17px;
  font-weight: 400;
}
.z1111 {
  color: rgb(255, 255, 255);
  font-size: 17px;
  font-weight: 700;
}

#y1 {
  width: 100%;
  height: 100vh;
  /* background-color: bisque; */
  margin-top: 100px;
  float: left;
  /* margin-left: 110px; */
  position: relative;
  overflow: hidden;
}
#y1 video {
  position: absolute;
  width: 100vw;
  height: 116vh;
  margin-top: -20px;
  z-index: -1;
  /* display: none; */
}
#yd {
  width: 808px;
  height: 18px;
}
#yd li {
  width: 8px;
  height: 8px;
  border: 1px solid snow;
  /* z-index: 100; */
  border-radius: 50%;
  margin-right: -120px;
  float: left;
  margin-top: 340px;
  margin-left: 130px;
}
#yd li:nth-child(1) {
  background-color: rgb(255, 255, 255);
}
.hx {
}
#zi {
  width: 640px;
  height: 51px;
  margin-left: 100px;
  position: relative;
}
#zi li {
  color: rgb(255, 253, 253);
  opacity: 0.7;
  width: 41.67vw;
  font-size: 2.11vw;
  text-align: justify;
  margin-top: 128px;
  margin-left: 30px;
  letter-spacing: 0.1vw;
  position: absolute;
  display: none;
}
.d1 {
  width: 100%;
  height: 745px;
  background-color: rgb(255, 255, 255);
  /* display: none; */
}
.he2 {
  position: absolute;
  margin-top: 4px;
  margin-left: 16.3%;
}
.hang {
  width: 1274px;
  height: 128px;
  margin-bottom: 12px;
  /* background-color: darkseagreen; */
}
.hang p {
  ont-style: normal;
  font-weight: bold;
  font-size: 2.64vw;
  letter-spacing: 0.02em;
  margin-bottom: 0.7vw;
}
.hang p:nth-child(2) {
  font-size: 1.67vw;
  letter-spacing: 0.02em;
  letter-spacing: 0.02em;
  color: #777e87;
  font-style: normal;
  font-weight: normal;
}
/* .si{
    width: 1275px;
    height: 492px;
    margin-top: 39px;
    /* background-color: rgb(38, 0, 255); */

#si1 {
  height: 492px;
  width: 489px;
  /* background-color: deeppink; */
  float: left;
  position: relative;
}
#si1 img {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 20px;
  transition: all 0.2s;
}
#si1:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 10px rgb(0, 0, 0.3);
  border-radius: 20px;
}
/* #zuo{
    font-size: 50px;
    z-index: 1000;
    width: 100px;
    height: 100px;
} */
#si2 {
  height: 492px;
  width: 276px;
  /* background-color: rgb(255, 153, 0); */
  float: left;
  margin-left: 30px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
#si2 video {
  width: auto;
  height: auto;
  position: absolute;
  overflow: hidden;
  /* border-radius: 20px; */
  transition: all 0.2s;
}
#si2:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgb(0, 0, 0, 0.3);
}
#si2-1 {
  width: 301px;
  height: 300px;
  /* background-color: aquamarine; */
}
#si2-1 img {
  width: 100%;
  height: 100%;
}
.si3 {
  width: 451px;
  height: 492px;
  /* background-color: rgb(82, 32, 32); */
  margin-left: 824px;
}
.si3-1 {
  width: 451px;
  height: 226px;
  /* background-color: bisque; */
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 40px;
  transition: all 0.2s;
}
.si3-1:hover {
  transform: translateY(7px);
  box-shadow: 0 0 15px rgb(0, 0, 0, 0.3);
}
.si3-1 video {
  width: auto;
  height: auto;
}
.si3-2 {
  width: 451px;
  height: 226px;
  /* background-color: bisque; */
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.2s;
}
.si3-2:hover {
  transform: translateY(7px);
  box-shadow: 0 0 15px rgb(0, 0, 0, 0.3);
}
.si3-2 video {
  width: auto;
  height: auto;
}
.d2 {
  width: 100%;
  height: 745px;
  background-color: rgb(0, 0, 0);
}
.d2 {
  width: 100%;
  height: 745px;
  background-color: rgb(0, 0, 0);
  /* margin-top: 10px; */
  float: left;
}
.log {
  width: 100%;
  height: 100px;
  /* background-color: bisque; */
  float: left;
}
@keyframes dh {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.log img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-top: 170px;
  margin-left: 46.5%;
  animation: dh 7s infinite linear;
}
#a {
  background-color: rgb(0, 0, 0);
  // height: 588px;
  width: 100%;
  /* margin-top: -68px; */
}
.b {
  height: auto;
  width: 100%;
  color: white;
  margin-top: 280px;
  float: left;
}
.c {
  list-style-type: none;
}
</style>
