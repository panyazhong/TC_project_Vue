<template>
  <div class="login-container">
  <div class="login">
    <div>
      <label for="mail">邮箱:</label>
      <input type="text" name="mail" id="mail" v-model="user.username">
      <div class="tip mail-tip red" v-show="mailIsNull">邮箱不能为空</div>
    </div>
    <div>
      <label for="pwd">密码:</label>
      <input type="password" name="username" id="pwd" v-model="user.password">
      <div class="tip pwd-tip red" v-show="pwdIsNull">密码不能为空</div>
    </div>
    <div class="rem-box">
      <input type="checkbox" name="" id="rem" v-model="isRem" ng-change="remPwd(user)">
      <label for="rem" class="rem-tip">保持我的登录状态</label>
    </div>
    <button @click="login(user)">登录</button>
    <a href="">忘记密码</a>
  </div>
  <div class="right">
    <div>
      <p>还没有账号？</p>
      <button>
        <a ng-href="/register">
          立即注册
        </a>
      </button>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Qs from 'qs'
import axios from 'axios'
export default {
  data () {
    return {
      user: {},
      mailIsNull: false,
      pwdIsNull: false,
      isRem: true,
      num: 100
    }
  },
  methods: {
    login (user) {
      var that = this
      axios.post('http://mc.urzz.me:8080/user/login', Qs.stringify({
        username: 'urzz',
        password: 'liujida'
      }))
        .then(function (response) {
          console.log(response)
          if (response.data.status) {
            alert(response.data.message)
            that.$parent._data.isLogin = true
            that.$router.push({path: '/main'})
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .login-container{
    width: 900px;
    margin: 50px auto   ;
  }
  .login,.right{
    float: left;
    width: 450px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    height: 300px;
  }
  .login>div{
    position: relative;
    width: 300px;
    height: 60px;
    margin: 10px auto;
  }
  .login>div label{
    display: block;
    width: 120px;
    font: normal 13px/30px '微软雅黑';
  }
  .login>div label.rem-tip{
    display: inline;
    line-height: 30px;
  }
  .login>div.rem-box{
    height: 30px;
  }
  .login>div input{
    width: 300px;
    height: 25px;
  }
  .login>div input[type=checkbox]{
    width: 15px;
    height: 12px;
    margin-top: 8px;
  }
  .login button{
    width: 150px;
    margin-left: 75px;
    height: 35px;
    font-size: 15px;
    letter-spacing: 15px;
    padding-left: 15px;
  }
  .login a{
    font: normal 13px/35px '微软雅黑';
    margin-left: 20px;
  }
  .login>div>div.tip{
    width: 100px;
    position: absolute;
    right: 0;
    top: 0;
    font: normal 12px/20px '微软雅黑';
    border: 1px solid red;
    text-align: center;
  }
  .right>div{
    width: 300px;
    margin: 10px auto;
  }
  .right>div p{
    margin-top: 30px;
    font: bold 15px/30px '微软雅黑';
  }
  .right>div button{
    width: 150px;
    display: block;
    margin: 30px auto;
    height: 45px;
    font-size: 15px;
    letter-spacing: 15px;
    padding-left: 15px;
  }
  .right>div button>a{
    display: block;
    height: 45px;
    line-height: 40px;
  }
</style>
