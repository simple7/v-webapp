<template>
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
                设置内容
            </h3>
            <!-- END PAGE TITLE-->
            <!-- END PAGE HEADER-->
            <div class="m-heading-1 border-green m-bordered">
                <h3>配置系统选项</h3>
                <p>描述：</p>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <!-- BEGIN SAMPLE TABLE PORTLET-->
                    <div class="portlet light bordered">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-cogs font-green-haze"></i>
                                <span class="caption-subject font-green-haze bold uppercase">项目类型</span>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <div class="table-scrollable table-scrollable-borderless">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th width="10%">序号</th>
                                            <th width="30%">值</th>
                                            <th width="30%">标签</th>
                                            <th width="15%">编辑</th>
                                            <th width="15%">删除</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td>工程款</td>
                                            <td>工程款</td>
                                            <td>
                                                <span class="font-green"> <i class="fa fa-trash-o"></i> 编辑 </span>
                                            </td>
                                            <td>
                                                <span class="font-red"> <i class="fa fa-trash-o"></i> 删除 </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 1 </td>
                                            <td>
                                                <input type="text" name="name" data-required="1" class="form-control" value="工程款">
                                            </td>
                                            <td>
                                                <input type="text" name="name" data-required="1" class="form-control" value="工程款">
                                            </td>
                                            <td>
                                                <span class="font-green"> <i class="fa fa-trash-o"></i> 编辑 </span>
                                            </td>
                                            <td>
                                                <span class="font-red"> <i class="fa fa-trash-o"></i> 删除 </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="btn-group">
                                        <button id="sample_editable_1_new" class="btn green">
                                            <i class="fa fa-plus"></i>
                                            添加
                                        </button>
                                    </div>
                                    <div class="btn-group">
                                        <button id="sample_editable_1_new" class="btn green-meadow">
                                            <i class="fa fa-folder"></i>
                                            保存
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END SAMPLE TABLE PORTLET-->
                </div>
                <div class="col-md-6">
                    <!-- BEGIN SAMPLE TABLE PORTLET-->
                    <div class="portlet light bordered">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="fa fa-cogs font-red-mint"></i>
                                <span class="caption-subject font-red-mint bold uppercase">债权类型</span>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <div class="table-scrollable table-scrollable-borderless">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th width="10%">序号</th>
                                            <th width="30%">值</th>
                                            <th width="30%">标签</th>
                                            <th width="15%">编辑</th>
                                            <th width="15%">删除</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td>工程款</td>
                                            <td>工程款</td>
                                            <td>
                                                <span class="font-green"> <i class="fa fa-trash-o"></i> 编辑 </span>
                                            </td>
                                            <td>
                                                <span class="font-red"> <i class="fa fa-trash-o"></i> 删除 </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 1 </td>
                                            <td>
                                                <input type="text" name="name" data-required="1" class="form-control" value="工程款">
                                            </td>
                                            <td>
                                                <input type="text" name="name" data-required="1" class="form-control" value="工程款">
                                            </td>
                                            <td>
                                                <span class="font-green"> <i class="fa fa-trash-o"></i> 保存 </span>
                                            </td>
                                            <td>
                                                <span class="font-red"> <i class="fa fa-trash-o"></i> 删除 </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="btn-group">
                                        <button id="sample_editable_1_new" class="btn green">
                                            <i class="fa fa-plus"></i>
                                            添加
                                        </button>
                                    </div>
                                    <div class="btn-group">
                                        <button id="sample_editable_1_new" class="btn green-meadow">
                                            <i class="fa fa-folder"></i>
                                            保存
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END SAMPLE TABLE PORTLET-->
                </div>
            </div>
        </div>
        <!-- END CONTENT BODY -->
    </div>
    <!-- END CONTENT -->
</template>
