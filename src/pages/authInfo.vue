<template>
    <div>
        <!-- BEGIN CONTENT -->
        <div class="page-content-wrapper">
            <!-- BEGIN CONTENT BODY -->
            <div class="page-content">
                <!-- BEGIN PAGE HEADER-->
                <!-- BEGIN PAGE BAR -->
                <div class="page-bar">
                  <breadcrumbs></breadcrumbs>
                </div>
                <!-- END PAGE BAR -->
                <!-- BEGIN PAGE TITLE-->
                <h3 class="page-title">
                    认证信息
                </h3>
                <!-- END PAGE TITLE-->
                <!-- END PAGE HEADER-->
                <div class="m-heading-1 border-green m-bordered">
                    <h3>企业认证:</h3>
                    <p>在进行业务操作之前，请先进行相关企业认证。</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="portlet light bordered">
                            <div class="portlet-title">
                                <div class="caption">
                                    <span aria-hidden="true" class="icon-user-following font-red-sunglo"></span>
                                    <span class="caption-subject font-red-sunglo bold uppercase">角色认证</span>
                                    <span class="label label-sm label-warning circle">未认证</span>
                                </div>
                            </div>
                            <div class="portlet-body form">
                                <!-- BEGIN FORM-->
                                <form action="#" class="form-horizontal">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="control-label col-md-4">选择角色：<span class="required" aria-required="true"> * </span></label>
                                                <div class="col-md-8">
                                                    <div class="input-group">
                                                        <div class="icheck-inline">
                                                            <label class="mt-radio">
                                                                <input type="radio" name="group-a[0][optionsRadios]" id="optionsRadios25" value="无商票" checked=""> 供应商
                                                                <span></span>
                                                            </label>
                                                            <label class="mt-radio">
                                                                <input type="radio" name="group-a[0][optionsRadios]" id="optionsRadios26" value="有商票"> 核心企业
                                                                <span></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-actions">
                                        <div class="row">
                                            <div class="col-md-offset-4 col-md-4">
                                                <button type="submit" class="btn green">去认证 <i class="fa fa-angle-double-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <!-- END FORM-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END CONTENT BODY -->
        </div>
        <!-- END CONTENT -->
    </div>
</template>

