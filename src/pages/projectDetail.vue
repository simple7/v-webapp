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
          供应商
        </h3>
        <!-- END PAGE TITLE-->
        <!-- END PAGE HEADER-->
        <div class="row">
          <div class="col-md-12">
            <div class="m-heading-1 border-green m-bordered">
              <h3>项目编号：P201704130003&nbsp;&nbsp;
                <span class="label label-sm label-danger circle">已受理</span>
              </h3>
              <p>应收帐款债权所有人：供应商测试帐号</p>
              <p>供应商：供应商测试帐号</p>
            </div>
          </div>
          <div class="col-md-12">
            <div class="portlet light portlet-fit">
              <div>
                <div class="mt-element-step">
                  <div class="row step-line">
                    <div class="col-xs-1 mt-step-col first active">
                      <div class="mt-step-number bg-white __web-inspector-hide-shortcut__">1</div>
                      <div class="mt-step-title uppercase font-grey-cascade">转让申请(供应商)</div>
                    </div>
                    <div class="col-xs-1 mt-step-col more">
                      <div class="mt-step-number bg-white">2</div>
                      <div class="mt-step-title uppercase font-grey-cascade">转让受理(保理商)</div>
                    </div>
                    <div class="col-xs-1 mt-step-col more">
                      <div class="mt-step-number bg-white">3</div>
                      <div class="mt-step-title uppercase font-grey-cascade">应收帐款确权(核心企业)</div>
                    </div>
                    <div class="col-xs-1 mt-step-col more">
                      <div class="mt-step-number bg-white">4</div>
                      <div class="mt-step-title uppercase font-grey-cascade">复核(保理商)</div>
                    </div>
                    <div class="col-xs-1 mt-step-col more">
                      <div class="mt-step-number bg-white">5</div>
                      <div class="mt-step-title uppercase font-grey-cascade">拟定合同(保理商)</div>
                    </div>
                    <div class="col-xs-1 mt-step-col more">
                      <div class="mt-step-number bg-white">6</div>
                      <div class="mt-step-title uppercase font-grey-cascade">签订合同(供应商)</div>
                    </div>
                    <div class="col-xs-1 mt-step-col more">
                      <div class="mt-step-number bg-white">7</div>
                      <div class="mt-step-title uppercase font-grey-cascade">通知确认(核心企业)</div>
                    </div>
                    <div class="col-xs-1 mt-step-col more">
                      <div class="mt-step-number bg-white">8</div>
                      <div class="mt-step-title uppercase font-grey-cascade">付款(保理商)</div>
                    </div>
                    <div class="col-xs-1 mt-step-col last">
                      <div class="mt-step-number bg-white">9</div>
                      <div class="mt-step-title uppercase font-grey-cascade">收款确认(供应商)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="portlet light bordered">
              <div class="portlet-title">
                <div class="caption ">
                  <span aria-hidden="true" class="icon-note font-green-haze"></span>
                  <span class="caption-subject font-green-haze bold uppercase">应收帐款转让申请</span>
                  <span class="caption-helper">2017/4/18 11:28 上午</span>
                </div>
                <div class="tools">
                  <span class="label label-sm label-danger circle pull-right">通知已确认</span>
                </div>
              </div>
              <div class="portlet-body form">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal">
                  <div class="form-body">
                    <div class="alert alert-info">
                      <strong>注意！</strong>上传文件格式要求：原件照片、扫描件或者复印件加盖企业公章后的扫描件，只支持.pdf格式，大小不超过10M。
                    </div>
                    <h4 class="form-section">应收账款相关信息</h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">项目编号：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">P201704180012</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">项目类型：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">工程款</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">债权人(公司)：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">供应商测试帐号</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">债务人(公司)：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">核心企业测试帐号</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">应收账款金额(万)：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">800</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">应收账款到期日：</label>
                          <div class="col-md-8">
                            <datepicker :bootstrapStyling="true" placeholder="Select Date" language="zh" :clear-button="true" format="yyyy年MM月dd日"></datepicker>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">转让类型：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">无商票</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">应收账款类型：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">工程款</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">申请额度(万)：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">700</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">备注信息：</label>
                          <div class="col-md-8">
                            <p class="form-control-static">给发货发挥规范化风格化规范化广泛</p>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <h4 class="form-section">应收账款明细表</h4>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="clearfix">
                          <button type="button" class="btn green pull-right">
                            <span aria-hidden="true" class="icon-eye"></span>&nbsp;&nbsp;查看应收账款明细表
                          </button>
                        </div>
                        <div class="table-scrollable">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>序号</th>
                                <th>商务合同号</th>
                                <th>合同签订日期</th>
                                <th>发票号</th>
                                <th>发票金额(元)</th>
                                <th>已收回金额(元)</th>
                                <th>应收帐款金额(元)</th>
                                <th>备注</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td> 1 </td>
                                <td> 424324 </td>
                                <td> 2017年04月18日 </td>
                                <td></td>
                                <td>7000000</td>
                                <td></td>
                                <td>7000000</td>
                                <td></td>
                              </tr>
                              <tr>
                                <td> 2 </td>
                                <td> 424324 </td>
                                <td> 2017年04月19日 </td>
                                <td></td>
                                <td>2400000</td>
                                <td></td>
                                <td>2400000</td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
  
                    <h4 class="form-section">送货单或其他可以证明收货的凭据
                      <span class="font-red-flamingo">(必填)</span>
                    </h4>
                    <div class="row">
                      <div class="col-md-9">
                        <div class="fileinput fileinput-new" data-provides="fileinput">
                          <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px;">
                            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="">
                          </div>
                          <div>
                            <span class="btn red btn-outline btn-file">
                              <span class="fileinput-new"> 选择图片上传 </span>
                              <span class="fileinput-exists"> 替换 </span>
                              <input type="file" name="..."> </span>
                            <a href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput"> 移除 </a>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <h4 class="form-section">验货单或其他可以证明收货的凭据
                      <span class="font-red-flamingo">(必填)</span>
                    </h4>
                    <div class="row">
                      <div class="col-md-9">
                        <div class="fileinput fileinput-new" data-provides="fileinput">
                          <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px;">
                            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="">
                          </div>
                          <div>
                            <span class="btn red btn-outline btn-file">
                              <span class="fileinput-new"> 选择图片上传 </span>
                              <span class="fileinput-exists"> 替换 </span>
                              <input type="file" name="..."> </span>
                            <a href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput"> 移除 </a>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <h4 class="form-section">基础合同
                      <span class="font-red-flamingo">(必填)</span>
                    </h4>
                    <div class="row">
                      <div class="col-md-9">
                        <div class="fileinput fileinput-new" data-provides="fileinput">
                          <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px;">
                            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="">
                          </div>
                          <div>
                            <span class="btn red btn-outline btn-file">
                              <span class="fileinput-new"> 选择图片上传 </span>
                              <span class="fileinput-exists"> 替换 </span>
                              <input type="file" name="..."> </span>
                            <a href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput"> 移除 </a>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <h4 class="form-section">发票(选填)</h4>
                    <div class="row">
                      <div class="col-md-9">
                        <div class="fileinput fileinput-new" data-provides="fileinput">
                          <div class="fileinput-preview thumbnail" data-trigger="fileinput" style="width: 200px; height: 150px;">
                            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="">
                          </div>
                          <div>
                            <span class="btn red btn-outline btn-file">
                              <span class="fileinput-new"> 选择图片上传 </span>
                              <span class="fileinput-exists"> 替换 </span>
                              <input type="file" name="..."> </span>
                            <a href="javascript:;" class="btn red fileinput-exists" data-dismiss="fileinput"> 移除 </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-actions">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="row">
                          <div class="col-md-9">
                            <button type="button" class="btn btn-info">
                              <span aria-hidden="true" class="icon-eye"></span>&nbsp;&nbsp;应收账款债权转让申请书
                            </button>
                            <button type="button" class="btn green-haze">
                              <span aria-hidden="true" class="icon-eye"></span>&nbsp;&nbsp;链上信息
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6"></div>
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

<script>
import Datepicker from 'vuejs-datepicker';//日期选择器组件

export default {
  data() {
    return {
      date: ''
    }
  },
  components: {
    Datepicker
  }
};
</script>
