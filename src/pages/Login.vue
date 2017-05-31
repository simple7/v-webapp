<template>
  <div class="login">
    <!-- BEGIN LOGO -->
    <div class="logo">
      <a href="/">
        <h3 class="login-logo font-white">帐融<span class="font-red-flamingo">通</span></h3>
      </a>
    </div>
    <!-- END LOGO -->
    <!-- BEGIN LOGIN -->
    <div class="content">
      <!-- BEGIN LOGIN FORM -->
      <form class="login-form" method="post">
        <h3 class="form-title">{{ $t('login.login') }}</h3>
        <Alert :msg="errorMsg" ref="alert"></Alert>

        <div class="form-group">
          <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
          <label class="control-label visible-ie8 visible-ie9" prop="name">用户名</label>
          <div class="input-icon">
            <i class="fa fa-user"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" :placeholder="$t('login.username')"
                   name="userName" v-model="username"/>
          </div>

        </div>
        <div class="form-group">
          <label class="control-label visible-ie8 visible-ie9">密码</label>
          <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input class="form-control placeholder-no-fix" type="password" autocomplete="off" :placeholder="$t('login.password')"
                   name="passWord" v-model="password"/>
          </div>

        </div>
        <div class="form-actions">
          <label class="rememberme mt-checkbox mt-checkbox-outline">
            <input type="checkbox" name="remember" value="1" v-model="rememberme"
                    id="remember-password-checkbox"/> {{ $t('login.rememberme') }}
                        <span></span>
          </label>
          <button type="submit" class="btn green pull-right" @click.prevent="login"> {{ $t('login.login') }} </button>
        </div>

        <div class="create-account">
          <p> {{ $t('login.dontHaveAnAccount') }}
                        <a href="/register" id="register-btn" class="font-green"> {{ $t('login.register') }} </a>
          </p>
        </div>
        <select class="form-control input-sm" name="" v-model="lang" @change="$i18n.locale = lang">
          <option v-for="locale in locales" v-bind:value="locale.value">
            {{ locale.text }}

          </option>
        </select>
      </form>
      <!-- END LOGIN FORM -->
    </div>
    <!-- END LOGIN -->
  </div>
</template>

<script>
  import {setCookie, getCookie} from '../assets/js/cookie.js'
  import {login} from '../api/account'
  import Alert from '@/components/alert/Alert.vue'

  export default {
    components: {Alert},
    mounted (){
//          如果存在username的cookie 则跳转到主页，不需要登陆
      if (getCookie('username')) {
        this.$router.push('/authInfo')

      }
    },
    data(){
      return {
        username: '',
        password: '',
        rememberme: false,
        errorMsg: '',
        lang: 'zh-CN',
        locales: [{value: 'en-US', text: 'English'}, {value: 'zh-CN', text: '简体中文'}],
      }
    },
    methods: {
      login(){
        if (_.isEmpty(this.username) || _.isEmpty(this.password)) {
          this.showAlert('请输入用户名和密码')
        } else {
          let param = {'username': this.username, 'password': this.password};
          /*接口的请求*/
          login(param).then((res) => {
            console.log(res)
            const data = res.data;
            if (data.code === 0) {
              setCookie('username', this.username, 1000 * 60)
              this.$router.push('/enter')
            } else {
              this.showAlert(data.message)
            }
          }).catch((err) => {
            console.log(err)
            this.showAlert(err.toString())
          })
        }
      },
      showAlert(msg){
        this.errorMsg = msg;
        this.$refs.alert.open();
      }
    },


  }
</script>

<style lang="scss">
  @import '../style/global/_variables';
  // global variables.
  @import '../style/global/components/_mixins'; // global mixings.

  .login {
    /*background-color: #666 !important;*/
  }

  .login .logo {
    margin: 60px auto 20px auto;
    padding: 15px;
    text-align: center;
  }

  .login .content {
    background: url(../assets/img/bg-white-lock.png) repeat;
    width: 360px;
    margin: 0 auto;
    margin-bottom: 0px;
    padding: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
    @include border-radius(7px);
  }

  .login .content h3 {
    color: #eee;
  }

  .login .content h4 {
    color: #eee;
  }

  .login .content p,
  .login .content label {
    color: #fff;
  }

  .login .mt-checkbox > span:after {
    border-color: #eee;
  }

  .login .content .login-form,
  .login .content .forget-form {
    padding: 0px;
    margin: 0px;
  }

  .login .content .form-control {
    background-color: #fff;
  }

  .login .content .forget-form {
    display: none;
  }

  .login .content .register-form {
    /*display: none;*/
  }

  .login .content .form-title {
    font-weight: 300;
    margin-bottom: 25px;
  }

  .login .content .form-actions {
    background-color: transparent;
    clear: both;
    border: 0px;
    padding: 0px 30px 25px 30px;
    margin-left: -30px;
    margin-right: -30px;
  }

  .login .content .forget-form .form-actions {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 20px;
  }

  .login .content .register-form .form-actions {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0px;
  }

  .login .content .form-actions .rememberme {
    margin-top: 8px;
    display: inline-block;
  }

  .login .content .form-actions .btn {
    margin-top: 1px;
  }

  .login .content .forget-password {
    margin-top: 25px;
  }

  .login .content .create-account {
    border-top: 1px dotted #eee;
    padding-top: 10px;
    margin-top: 15px;
  }

  .login .content .create-account a {
    display: inline-block;
    margin-top: 5px;
  }

  /* select2 dropdowns */
  .login .content .select2-container i {
    display: inline-block;
    position: relative;
    color: #ccc;
    z-index: 1;
    top: 1px;
    margin: 4px 4px 0px -1px;
    width: 16px;
    height: 16px;
    font-size: 16px;
    text-align: center;
  }

  .login .content .has-error .select2-container i {
    color: #b94a48;
  }

  .login .content .select2-container a span {
    font-size: 13px;
  }

  .login .content .select2-container a span img {
    margin-left: 4px;
  }

  /* footer copyright */
  .login .copyright {
    text-align: center;
    margin: 0 auto;
    padding: 10px;
    color: #eee;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    /***
    Login page
    ***/
    .login .logo {
      margin-top: 10px;
    }

    .login .content {
      padding: 30px;
      width: 222px;
    }

    .login .content h3 {
      font-size: 22px;
    }

    .login .checkbox {
      font-size: 13px;
    }
  }

</style>

