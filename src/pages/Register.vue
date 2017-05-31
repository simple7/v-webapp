<template>
  <div class="login">
    <!-- BEGIN LOGO -->
    <div class="logo">
      <a href="/">
        <h3 class="login-logo font-white">帐融<span class="font-red-flamingo">通</span></h3>
      </a>
    </div>
    <!-- END LOGO -->
    <div class="content">
      <!-- BEGIN REGISTRATION FORM -->
      <form class="register-form" method="post">
        <h3>注册</h3>
        <Alert :msg="errorMsg" ref="alert"></Alert>

        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">用户名</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名"
                   name="username" v-model="newUsername"/>
          </div>
        </div>
        <div class="form-group">
          <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
          <label class="control-label visible-ie8 visible-ie9">邮箱</label>
          <div class="input-icon">
            <i class="fa fa-envelope"></i>
            <input class="form-control placeholder-no-fix" type="text" placeholder="邮箱" name="email" v-model="email"/>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">密码</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="register_password"
                   placeholder="密码" name="password" v-model="newPassword"/>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">重复密码</label>
          <div class="controls">
            <div class="input-icon">
              <i class="fa fa-check"></i>
              <input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="重复密码"
                     name="passwordRes" v-model="rnewPassword"/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="mt-checkbox mt-checkbox-outline">
            <input type="checkbox" name="tnc" v-model="checked"/>我同意
            <a href="javascript:;" class="font-green">《注册协议》</a>
            <span></span>
          </label>
          <div id="register_tnc_error"></div>
        </div>
        <div class="form-actions">
          <a id="register-back-btn" class="btn font-white" href="/login"> 已有帐号，去<span class="font-green">登录</span> </a>
          <button type="submit" id="register-submit-btn" class="btn green pull-right" @click.prevent="register"> 注册
          </button>
        </div>
      </form>
      <!-- END REGISTRATION FORM -->
    </div>
  </div>
</template>

<script>
  import {setCookie, getCookie} from '../assets/js/cookie.js'
  import Alert from '@/components/alert/Alert.vue'
  import {register} from '../api/account'

  export default{
    components: {Alert},
    data (){
      return {
        newUsername: '',
        newPassword: '',
        rnewPassword: '',
        email: '',
        checked: '',
        errorMsg: ''
      }
    },
    methods: {
      register(){
        if (_.isEmpty(this.newUsername) || _.isEmpty(this.newPassword) || _.isEmpty(this.email) || _.isEmpty(this.rnewPassword)) {
          this.showAlert('每个选项不能为空')
        } else if (!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.email)) {
          this.showAlert("请输入正确的邮箱格式")
        } else if (!_.isEqual(this.newPassword, this.rnewPassword)) {
          this.showAlert("两次密码输入不正确")
        } else if (this.checked !== true) {
          this.showAlert("《注册协议》没有同意！")
        } else {
          let param = {"username": this.newUsername, 'password': this.newPassword, 'email': this.email};
          //调用接口
          register(param).then((res) => {
            const data = res.data;
            if(data.code === 0){
                alert(data.message)
            }else {
              this.showAlert(data.message)
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      },
      showAlert(msg){
        this.errorMsg = msg;
        this.$refs.alert.open();
      }
    }
  }
</script>

