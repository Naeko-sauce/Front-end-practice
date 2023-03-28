<template>
  <div class="dy">
    <div class="video">
      <video autoplay muted loop>
        <source src="./img/Background.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="head">
      <header>
        <div class="head_left">
          <a href="#">
            <img src="./img/download.png" alt="LOGO" style="height: 45px" />
          </a>
        </div>
        <div class="head_right">
          <ul>
            <li>
              <a href="#">创作服务平台</a>
            </li>
            <li>
              <a href="#">开放平台</a>
            </li>
            <li>
              <a href="#" class="xlcp">系列产品<span class="sanjiao">▼</span></a>
              <div class="xialakuang" style="position: relative; left: -10px; top: -10px">
                <a href="#">抖音</a>
                <a href="#">剪映</a>
                <a href="#">多闪</a>
              </div>
            </li>
            <li>
              <a href="#" class="dyzb">抖音直播<span class="sanjiao">▼</span></a>
              <div class="xialakuang" style="position: relative; left: -10px; top: -10px">
                <a href="#">直播机构入驻</a>
                <a href="#">直播伴侣下载</a>
                <a href="#">购买抖币</a>
              </div>
            </li>
            <li>
              <a href="#" class="hzrz">合作入驻<span class="sanjiao">▼</span></a>
              <div class="xialakuang" style="position: relative; left: -10px; top: -10px">
                <a href="#">MCN入驻</a>
                <a href="#">抖音特效师</a>
                <a href="#">抖音音乐人</a>
                <a href="#">社会机构入驻</a>
              </div>
            </li>
            <li>
              <a href="#" class="qyhz">企业合作<span class="sanjiao">▼</span></a>
              <div class="xialakuang" style="position: relative; left: -10px; top: -10px">
                <a href="#">企业服务平台</a>
                <a href="#">企业认证</a>
                <a href="#">广告投放</a>
              </div>
            </li>
            <li>
              <a href="#">联系我们</a>
            </li>
            <li>
              <div class="jingyin"></div>
            </li>
          </ul>
        </div>
      </header>
      <div class="text">
        <div class="meihao">
          <img src="./img/jilumeihaoshenghuo.png" alt="【抖音】记录美好生活-Douyin" />
        </div>
        <div class="text_text">
          <a href="#" class="text_text_a">
            <img src="./img/erweima888.jpg" alt="可扫二维码" />
          </a>
          <div class="text_top">
            <a href="#"></a>
          </div>
          <div class="text_bottom">
            <a href="#"></a>
          </div>
        </div>
      </div>
      <footer class="foot">
        <div class="foot_one">
          <span>|</span>
          <a href="#">用户服务协议</a>
          <span>|</span>
          <a href="#">隐私政策</a>
          <span>|</span>
          <a href="#">账号找回</a>
          <span>|</span>
          <a href="#">广告投放</a>
          <span>|</span>
          <a href="#">营业执照</a>
          <span>|</span>
        </div>
        <div class="foot_two">
          <p><span>2020</span> © 抖音 | 京ICP备16016397号-3 | 北京微播视界科技有限公司 | 京B2-20170846</p>
          <p>
            网络文化许可证-京网文-（2016）2282-264号 | 客户服务热线：95152 | 违法和不良信息举报电话：400-140-2108 |
            未成年人守护热线：010-8963-3210 | 举报邮箱：jubao@douyin.com
          </p>
          <div class="foot_three">
            <img src="./img/jinghui.png" />
            <a href="#">京公网安备 88888888888888888号</a>
            <span> | 地址 : 北京市海淀区中关村南大街36号12号楼16层1611号 </span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
function submitForm() {
  // 获取用户名和密码的对象
  const userEle = document.getElementById('username');
  const pwdEle = document.getElementById('pwd');
  // 获取消息提示框的对象
  const divEle = document.getElementById('div1');

  // 获取用户名和密码的值
  const userVal = userEle.value;
  const pwdVal = pwdEle.value;

  // 判断
  if (userVal === '') {
    // 消息提示框显示
    divEle.style.visibility = 'visible';
    divEle.innerHTML = "<span style='color:red'>用户名不能为空！</span>";
    //    focus()  获取焦点
    userEle.focus();
    // 阻止表单提交
    return false;
  }

  if (pwdVal === '') {
    // 消息提示框显示
    divEle.style.visibility = 'visible';
    divEle.innerHTML = "<span style='color:red'>密码不能为空！</span>";
    //    focus()  获取焦点
    pwdEle.focus();
    // 阻止表单提交
    return false;
  }

  //    用户名和密码都填写了，表单提交
  return true;
}
</script>

<style lang="scss">
@import './work.css';
</style>
