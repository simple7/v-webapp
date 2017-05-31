<template>
    <div class="page-content-wrapper">
        <!-- BEGIN CONTENT BODY -->
        <div class="page-content">
            <!-- BEGIN PAGE HEADER-->
            <!-- BEGIN PAGE BAR -->
            <div class="page-bar">
                <ul class="page-breadcrumb">
                    <li>
                        <a href="index.html">首页</a>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <span>管理员控制台</span>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li>
                        <span>项目列表</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <!-- BEGIN PAGE TITLE-->
            <h3 class="page-title">
                项目列表
            </h3>
            <!-- END PAGE TITLE-->
            <!-- END PAGE HEADER-->
            <div class="row">
                <div class="col-md-12">
                    <div class="m-heading-1 border-green m-bordered">
                        <h3 class="block">一次应收帐款债权转让对应一个项目 </h3>
                        <p>应收帐款债权转让的流程：转让申请(供应商) -> 转让受理(保理商) -> 应收帐款确权(核心企业) -> 复核(保理商) -> 拟定合同(保理商) -> 签订合同(供应商) -> 通知确认(核心企业) -> 付款(保理商) -> 收款确认(供应商)</p>
    
                        <p>对应可能的状态：　(供应商)申请中、（保理商）待受理、(保理商)已受理/(核心企业)待确权、(保理商)受理未通过、(保理商)已拒绝、(核心企业)已确权/(保理商)待复核、(核心企业)拒绝确权、(保理商)已复核、(保理商)待签合同、(保理商)合同签订中、(供应商)合同已签订、(供应商)放弃合同签订、(核心企业)通知已确认、(核心企业)通知已拒绝、(保理商)已支付、(保理商)撤消支付、(供应商)已确认收款</p>
                    </div>
                </div>
                <div class="col-md-12">
                    <!-- Project list form -->
                    <div class="portlet light bordered " style="margin-top: 40px;">
                        <!--   <div class="portlet-title">
                                            <div class="caption font-dark">
                                                <i class="fa fa-navicon"></i>
                                                <span class="caption-subject bold">  项目列表</span>
                                            </div>
                                        </div> -->
                        <div class="portlet-body">
                            <div class="table-toolbar">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="btn-group btn-group-circle">
                                            <button type="button" class="btn btn-default ">工具</button>
                                            <button type="button" class="btn btn-circle-right btn-default dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true" aria-expanded="false">
                                                <i class="fa fa-angle-down"></i>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li>
                                                    <a href="javascript:;">
                                                        <i class="fa fa-print"></i> Print
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <i class="fa fa-file-pdf-o"></i> Save as PDF
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <i class="fa fa-file-excel-o"></i> Export to Excel
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table class="table table-striped  table-hover table-checkable order-column table-condensed flip-content table-advance datatables_new">
                                <thead>
                                    <tr>
                                        <th>
                                            <!-- <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                <input type="checkbox" class="group-checkable" data-set="#sample_1_2 .checkboxes" />
                                                                <span></span>
                                                            </label> -->
                                            项目编号
                                        </th>
                                        <th> 项目名称 </th>
                                        <th> 原债权人（公司名称） </th>
                                        <th> 债务人（公司名称） </th>
                                        <th> 保理公司名 </th>
                                        <th> 当前状态 </th>
                                        <!-- <th> 最近操作时间 </th>
                                                        <th> 详情 </th> -->
    
                                    </tr>
                                </thead>
                                <!-- <tfoot>
                                                    <tr>
                                                        <th> </th>
                                                        <th> </th>
                                                        <th> </th>
                                                        <th> </th>
                                                        <th> </th>
                                                        <th> </th>
                                                    </tr>
                                                </tfoot> -->
                                <tbody>
                                    <tr class="odd gradeX">
                                        <td class="highlight">
                                            <i class="fa fa-angle-right"></i> P201704180002 </td>
                                        <td> 工程款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center"></td>
                                        <td>
    
                                            <span class="badge badge-danger">申请中</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704180001 </td>
                                        <td> 工程款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center"></td>
                                        <td>
    
                                            <!--  <button type="button" class="btn btn-outline green-sharp  uppercase" data-style="slide-down">
                                                            <span class="ladda-label"><small>申请中</small></span>
                                                            </button> -->
                                            <span class="badge badge-success">申请中</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704180002 </td>
                                        <td> 工程款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center"></td>
                                        <td>
                                            <span class="badge badge-warning">申请中</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704170009 </td>
                                        <td> 工程款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center"></td>
                                        <td>
                                            <span class="badge badge-success">申请中</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704180002 </td>
                                        <td> 工程款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center"></td>
                                        <td>
                                            <span class="badge badge-info">申请中</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704170008 </td>
                                        <td> 货款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            佛山宏达商店
                                        </td>
                                        <td>
                                            中国石油化工集团有限公司
                                        </td>
                                        <td class="center"></td>
                                        <td>
                                            <span class="badge badge-warning">申请中</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704170007 </td>
                                        <td> 货款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            佛山宏达商店
                                        </td>
                                        <td>
                                            中国石油化工集团有限公司
                                        </td>
                                        <td class="center"></td>
                                        <td>
                                            <span class="badge badge-default">申请中</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704170006 </td>
                                        <td> 货款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            宏达商店
                                        </td>
                                        <td>
                                            中国石油化工集团有限公司
                                        </td>
                                        <td class="center"></td>
                                        <td>
                                            <span class="badge badge-primary">申请中</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704170005 </td>
                                        <td> 货款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center">保理商测试账号</td>
                                        <td>
                                            <span class="badge badge-info">代受理</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704170005 </td>
                                        <td> 货款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center">保理商测试账号</td>
                                        <td>
                                            <span class="badge badge-info">代受理</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704170005 </td>
                                        <td> 货款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center">保理商测试账号</td>
                                        <td>
                                            <span class="badge badge-info">代受理</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
                                    <tr class="odd gradeX">
                                        <td>
                                            <i class="fa fa-angle-right"></i> P201704170005 </td>
                                        <td> 货款 </td>
                                        <td>
                                            <!--  <a href="mailto:shuxer@gmail.com"> shuxer@gmail.com </a> -->
                                            供应商测试账号
                                        </td>
                                        <td>
                                            核心企业测试账号
                                        </td>
                                        <td class="center">保理商测试账号</td>
                                        <td>
                                            <span class="badge badge-info">代受理</span>
                                        </td>
                                        <!--  <td> 2017/4/18 09：52 上午</td>
                                                        <td>
                                                            <i class="fa fa-file-text"></i>
                                                        </td> -->
                                    </tr>
    
                                </tbody>
                            </table>
                            <paginate 
                                :page-count="20" 
                                :click-handler="functionName" 
                                :prev-text="'<'" 
                                :next-text="'>'" 
                                :container-class="'pagination'"
                                :initial-page="1">
                            </paginate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END CONTENT BODY -->
    </div>
</template>

<script>
import Paginate from 'vuejs-paginate'//分页组件
export default {
    components: { Paginate }
}
</script>