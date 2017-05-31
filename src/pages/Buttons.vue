<template>
    <!-- BEGIN CONTENT -->
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
                        <span>按钮</span>
                    </li>
                </ul>
            </div>
            <!-- END PAGE BAR -->
            <!-- BEGIN PAGE TITLE-->
            <h3 class="page-title">
                按钮
            </h3>
            <!-- END PAGE TITLE-->
            <!-- END PAGE HEADER-->
            <div class="row">
                <h5>提交类：</h5>
                <button type="button" class="btn green" @click="test()">
                    <i class="fa fa-spinner"></i>
                    提交
                </button>点击有loading效果
    
                <h5>保存类：</h5>
                <button id="sample_editable_1_new" class="btn green-meadow">
                    <i class="fa fa-folder"></i>
                    保存
                </button>
    
                <h5>添加内容类：</h5>
                <button type="button" class="btn green">
                    <i class="fa fa-plus"></i>
                    添加
                </button>
    
                <h5>删除类：</h5>
                <button type="button" class="btn red">
                    <i class="fa fa-trash"></i>
                    删除
                </button>
    
                <h5>上传信息类：</h5>
                <button type="button" class="btn green">
                    <i class="fa fa-cloud-upload"></i>
                    上传
                </button>
    
                <h5>下载信息类：</h5>
                <button type="button" class="btn green">
                    <i class="fa fa-cloud-download"></i>
                    下载
                </button>
    
                <h5>查看内容类：（如：查看合同，查看应收账款等）</h5>
                <button type="button" class="btn green">
                    <i class="fa fa-eye"></i>
                    查看
                </button>
    
                <h5>编辑或者修改类：（如：修改基本信息，修改银行账号等）</h5>
                <button type="button" class="btn green">
                    <i class="fa fa-pencil"></i>
                    编辑
                </button>
    
                <h5>搜索查找类：</h5>
                <button type="button" class="btn green">
                    <i class="fa fa-search"></i>
                    搜索
                </button>
    
                <h5>认证信息类：</h5>
                <button type="button" class="btn green">
                    <i class="fa fa-mail-forward"></i>
                    去认证
                </button>
    
                <h5>放弃类：</h5>
                <button type="button" class="btn red">
                    <i class="fa fa-times-circle"></i>
                    放弃
                </button>
    
                <h5>打回重新填写类：</h5>
                <button type="button" class="btn blue">
                    <i class="fa fa-reply-all"></i>
                    发回补充材料
                </button>
    
                <h5>链上信息：</h5>
                <button type="button" class="btn green-meadow">
                    <i class="fa fa-chain"></i>
                    链上信息
                </button>
            </div>
        </div>
        <!-- END CONTENT BODY -->
    </div>
    <!-- END CONTENT -->
</template>

<script>
import { login } from '../api/account'
export default {
    methods: {
        test() {
            this.$Progress.start()
            let param = { 'username': 'shuiyun', 'password': 'shuiyun' };
            login(param).then((res) => {
                console.log(res)
                this.$Progress.finish()
            }).catch((err) => {
                console.log(err)
                this.$Progress.fail()
            })
        }
    }
}
</script>