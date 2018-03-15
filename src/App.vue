<template>
  <div id="app">
    <div class="header-container">
      <div class="logo">
        <img src="http://p1vl2wosm.bkt.clouddn.com/urzz/rose.jpg" alt="">
        <!--<img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png" alt="">-->
      </div>
      <div class="login-register">
        <ul>
          <li v-show="!isLogin">
            <router-link to="/login">
              <a>登录</a>
            </router-link>
          </li>
          <li class="about manage" v-show="isLogin">
            管理控制台
            <ul>
              <li>
                <router-link to="/albumManguage">相册管理</router-link>
              </li>
              <li>
                <a ng-href="/center">个人中心</a>
              </li>
              <li>
                <a ng-href="/manguage">管理中心</a>
              </li>
              <li>
                <a href="">消息中心</a>
              </li>
              <li>
                <a ng-click="loginOut()">退出</a>
              </li>
            </ul>
          </li>
          <li class="about news" v-show="isLogin">
            <a href="">消息</a>
            <span>10</span>
          </li>
          <li class="about">
            <a href="">关于我们</a>
            <ul>
              <li>
                <a href="">关于我们</a>
              </li>
              <li>
                <a href="">联系我们</a>
              </li>
              <li>
                <a href="">上传须知</a>
              </li>
              <li>
                <a href="">服务条款</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="list">
        <ul>
          <li>
            <router-link to="/uploadPic">上传本地图片</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    showLoginPop () {

    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  .el-message-box{
    width: auto;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .header-container{
    background: rgb(240,240,240);
    height: 50px;
  }
  .header-container>div{
    float: left;
  }
  .header-container>div.list{
    margin-left: 30px;
  }
  .header-container>div.logo{
    width: 100px;
    height: 50px;
    margin-left: 20px;
    overflow: hidden;
  }
  .header-container>div.logo img{
    width: 100%;
    /*height: 50px;*/
    /*margin-top: 10px;*/
  }
  .header-container>div.login-register{
    float: right;
    margin-right: 30px;
  }
  .header-container>div.login-register>ul>li{
    float: left;
    margin-left: 20px;
    line-height: 50px;
    /*height: 30px;*/
    color: rgb(51,51,51);
    font: bold 16px/50px '微软雅黑';
    position: relative;
  }
  .header-container>div.login-register>ul li:hover>a{
    color: rgb(0, 153, 0);
  }
  .header-container>div.login-register>ul>li.about:hover ul{
    display: block;
  }
  .header-container>div.login-register>ul>li.news>span{
    float: right;
    margin-top: 10px;
    font: normal 12px/16px '微软雅黑';
    width: 18px;
    height: 18px;
    text-align: center;
    background: rgb(209,74,16);
    color: white;
    border-radius: 50%;
  }
  .header-container>div.login-register>ul>li a{
    float: left;
    font: bold 16px/50px '微软雅黑';
    color: rgb(51,51,51);
  }
  .header-container>div.login-register>ul>li>ul{
    display: none;
    width: 100px;
    height: 120px;
    position: absolute;
    top: 50px;
    left: -20px;
    border: 1px solid #cfcfcf;
    background: #fefefe;
    z-index: 999;
  }
  .header-container>div.login-register>ul>li.manage>ul{
    height: 150px;
  }
  .header-container>div.login-register>ul>li>ul>li{
    line-height: 30px;
    float: left;
    text-align: center;
    width: 100%;
  }
  .header-container>div.login-register>ul>li>ul>li>a{
    display: block;
    width: 100%;
    font: bold 16px/30px '微软雅黑';
  }
  /**/
  .list li{
    height: 50px;
    line-height: 50px;
    float: left;
  }
  .list li a{
    font-size: 12px;
    color: rgb(153,153,153  )
  }
</style>
