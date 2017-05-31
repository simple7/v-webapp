<template>
    <div class="login">
        <div class="user-login-5">
            <div class="row bs-reset">
                <div class="col-md-8 bs-reset mt-login-5-bsfix">
                    <div class="login-bg" >
                        <h3 class="login-logo font-white">帐融<span class="font-red-flamingo">通</span></h3>
                    </div>
                </div>
                <div class="col-md-4 login-container bs-reset mt-login-5-bsfix">
                    <div class="login-content">
                        <h1>欢迎使用<span class="font-green">帐融通</span>平台</h1>
                        <form action="javascript:;" class="login-form" method="post">
                            <div class="alert alert-danger display-hide">
                                <button class="close" data-close="alert"></button>
                                <span>Enter any username and password. </span>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <input class="form-control form-control-solid placeholder-no-fix form-group" type="text" autocomplete="off" placeholder="用户名" name="username" required="" aria-required="true"> 
                                </div>
                                <div class="col-xs-12">
                                    <input class="form-control form-control-solid placeholder-no-fix form-group" type="text" autocomplete="off" placeholder="密码" name="username" required="" aria-required="true"> 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="rem-password">
                                        <label class="rememberme mt-checkbox mt-checkbox-outline">
                                            <input type="checkbox" name="remember" value="1" /> 记住密码
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-right">
                                    <a class="btn font-green" id="forget-password">注册</a>
                                </div>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn green btn-block uppercase">登录</button>
                            </div>
                        </form>
                        <!-- BEGIN FORGOT PASSWORD FORM -->
                        <form class="forget-form" action="javascript:;" method="post">
                            <h3 class="font-green">注册</h3>
                            <div class="form-group">
                                <div class="input-icon right">
                                    <i class="fa fa-user"></i>
                                    <input type="text" class="form-control" placeholder="用户名" required="" aria-required="true"> 
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-icon right">
                                    <i class="fa fa-envelope"></i>
                                    <input type="text" class="form-control" placeholder="邮箱" required="" aria-required="true"> 
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-icon right">
                                    <i class="fa fa-lock"></i>
                                    <input type="text" class="form-control" placeholder="密码" required="" aria-required="true"> 
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-icon right">
                                    <i class="fa fa-lock"></i>
                                    <input type="text" class="form-control" placeholder="重复密码" required="" aria-required="true"> 
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-8">
                                    <label class="rememberme mt-checkbox mt-checkbox-outline">
                                        <input type="checkbox" name="remember" value="1" /> 我同意<a id="regAgm" class="font-green">《注册协议》</a>
                                        <span></span>
                                    </label>
                                </div>
                                <div class="col-xs-4">
                                    <button type="submit" class="btn btn-success uppercase pull-right">注册</button>
                                </div>
                            </div>
                            <div class="form-actions">
                                <a id="back-btn" class="font-green">已有帐号，去登录</a>
                            </div>
                        </form>
                        <!-- END FORGOT PASSWORD FORM -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .user-login-5{min-height:100vh}.user-login-5 .bs-reset{margin:0;padding:0}.user-login-5 .text-right{text-align:right}.user-login-5 .login-bg{background-position:center;background-size:cover;background-repeat:no-repeat;min-height:100vh}.user-login-5 .login-logo{position:absolute;top:2.5em;left:2.5em}.user-login-5 .login-logo.login-6{top:80px;left:80px}.user-login-5 .login-container{position:relative;min-height:100vh}.user-login-5 .login-container .login-copyright,.user-login-5 .login-container .login-social,.user-login-5 .login-container>.login-content{padding:0 80px}.user-login-5 .login-container>.login-content{margin-top:35%}.user-login-5 .login-container>.login-content>h1{font-size:30px;font-weight:300;color:#4e5a64}.user-login-5 .login-container>.login-content p{color:#a0a9b4;font-size:15px;line-height:22px}.user-login-5 .login-container>.login-content>.login-form{margin-top:80px;color:#a4aab2;font-size:13px}.user-login-5 .login-container>.login-content>.login-form .form-control{width:100%;padding:10px 0;border:#a0a9b4;border-bottom:1px solid;color:#868e97;font-size:14px;margin-bottom:30px}.user-login-5 .login-container>.login-content>.login-form .form-control:focus{outline:0}.user-login-5 .login-container>.login-content>.login-form .forgot-password,.user-login-5 .login-container>.login-content>.login-form .login-button{display:inline-block}.user-login-5 .login-container>.login-content>.login-form .rem-password{margin-top:10px}.user-login-5 .login-container>.login-content>.login-form .rem-password>p{margin:0}.user-login-5 .login-container>.login-content>.login-form .rem-password>.rem-checkbox{border-color:#a4aab2}.user-login-5 .login-container>.login-content>.login-form .forgot-password{margin-right:1em}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a{color:#a4aab2}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a:hover{color:#337ab7;text-decoration:none}.user-login-5 .login-container>.login-content>.login-form .forgot-password>a:focus{color:#a4aab2;text-decoration:none}.user-login-5 .login-container>.login-footer{position:absolute;bottom:0;width:100%;padding-bottom:10px}.user-login-5 .login-container>.login-footer .login-social{padding-right:0}.user-login-5 .login-container>.login-footer .login-social li{display:inline-block;list-style:none;margin-right:1em}.user-login-5 .login-container>.login-footer .login-social a{color:#a9b5be;font-size:18px}.user-login-5 .login-container>.login-footer .login-social a:hover{color:#337ab7;text-decoration:none}.user-login-5 .login-container>.login-footer .login-social a:focus{color:#a9b5be}.user-login-5 .login-container>.login-footer .login-copyright{padding-left:0;margin-top:6px}.user-login-5 .login-container>.login-footer .login-copyright>p{margin:0;font-size:13px;color:#a9b5be}.user-login-5 .alert{margin-top:-60px}.user-login-5 .form-group.has-error{border-bottom:2px solid #ed6b75!important}.user-login-5 .form-group.valid{border-bottom:1px solid #a0a9b4!important}@media (max-width:1365px){.user-login-5 .login-logo.login-6{top:40px;left:40px}.user-login-5 .login-container .login-copyright,.user-login-5 .login-container .login-social,.user-login-5 .login-container>.login-content{padding:0 40px}.user-login-5 .login-container .login-social{padding-right:0}.user-login-5 .login-container .login-copyright{padding-left:0}}@media (max-width:1023px){.user-login-5,.user-login-5 .login-bg,.user-login-5 .login-container{min-height:50vh}.user-login-5 .mt-login-5-bsfix{width:100%}.user-login-5 .login-logo.login-6{position:relative;margin:0 0 40px}.user-login-5 .login-container>.login-content{margin-top:60px}.user-login-5 .login-container>.login-content .login-form{margin-top:40px}.user-login-5 .login-container .rem-password{margin-bottom:1em}.user-login-5 .login-container>.login-footer{position:relative;margin-top:40px;padding-bottom:0}.user-login-5 .login-container>.login-footer .login-social li{margin-right:.5em}.user-login-5 .alert{margin-top:-20px}}@media (max-width:640px){.user-login-5 .login-container>.login-content .text-right{text-align:left}}
</style>