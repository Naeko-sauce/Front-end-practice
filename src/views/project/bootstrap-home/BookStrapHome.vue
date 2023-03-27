<template>
  <div>
    <nav class="navbar navbar-default ys dd">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Link <span class="sr-only">(current)</span></a>
            </li>
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <div class="contaliner-fluid de"></div>
    <div class="contaliner qp">
      <div class="contaliner text-center mx">
        <h2>Bootstrap相关优质项目推荐</h2>
        <p>这些项目或者是对Bootstrap进行了有益的补充，或者是基于Bootstrap开发的</p>
      </div>
      <div class="row xm">
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3 col-xs-12 xa">
          <div>
            <img src="./expo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="contaliner zh"></div> -->
  </div>
</template>

<script lang="ts" setup>
import 'bootstrap/dist/js/bootstrap.js';
</script>

<style lang="scss" scoped>
@import './css/bootstrap.css';
.dd {
  margin-bottom: 0px;
}
.de {
  background: linear-gradient(45deg, #020031, #6d3353);
  height: 497px;
}
.zh {
  height: 250px;
  border-top: 1px solid darkgray;
}
.mx {
  margin-bottom: 20px;
}
.xm > .col-lg-3 > div {
  height: 340px;
  text-align: center;
  margin-bottom: 20px;
  margin-left: 20px;
  background-color: darkgray;
}
.dd {
  height: 43px;
  background-color: #222;
}
.xm > .col-lg-3 > div > img {
  width: 100%;
}
.qb > .row {
  padding-right: 0;
}
/* 手机端 */
@media screen and (max-width: 768px) {
  .de {
    height: 400px;
    background: linear-gradient(45deg, #020031, #6d3353);
  }
}
</style>
