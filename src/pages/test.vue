<template>
  <div>
    <modal :size='modalSize' :title="title" :body="body" ref="modal">
    </modal>
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="page-bar">
          <breadcrumbs></breadcrumbs>
        </div>
        <div class="test-page">
        <div class="child">
          <h2>modal测试</h2>
          <div class="btn-group">
            <button class="btn btn-primary" @click="showModal">标准modal</button>
            <button class="btn btn-primary" @click="showBig">lg-modal</button>
          </div>
        </div>

        <!--toasted begin-->
        <div class="child form-horizontal">
          <h2>toasted测试</h2>
          <div class="form-group">
            <label class="col-md-3 control-label">选择显示位置：</label>
            <div class="col-md-9">
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" v-model="toastType" value="top-left"> 左上
            </label>
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" v-model="toastType" value="top-center"> 上中
            </label>
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" v-model="toastType" value="top-right"> 右上
            </label>
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio4" v-model="toastType" value="bottom-left"> 左下
            </label>
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio5" v-model="toastType"
                       value="bottom-center"> 中下
            </label>
              <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio6" v-model="toastType"
                       value="bottom-right"> 右下
          </label>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">持续时间：</label>
            <div class="col-md-9">
              <input type="number" id="toastTime" class="form-control" v-model="toastTime" min="0"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">内容：</label>
            <div class="col-md-9">
              <input type="text" class="form-control" v-model="toastText"/>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn btn-primary" @click="toast('info')">info</button>
            <button class="btn btn-success" @click="toast('success')">success</button>
            <button class="btn btn-danger" @click="toast('error')">error</button>
          </div>
        </div>
        <div class="child form-horizontal">
          <h2>confirm测试</h2>
          <div class="form-group">
            <label class="col-md-3 control-label">title：</label>
            <div class="col-md-9">
              <input type="text" class="form-control" v-model="confirmTitle"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">message：</label>
            <div class="col-md-9">
              <input type="text" class="form-control" v-model="confirmMessage"/>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn btn-primary" @click="confirm('alert')">alert</button>
            <button class="btn btn-primary" @click="confirm('confirm')">confirm</button>
            <button class="btn btn-primary" @click="confirm('prompt')">prompt</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    <!-- END CONTENT -->
  </div>
</template>

<script>
  import Modal from '@/components/modal/index'
  import Confirm from '@/components/confirm/ConfirmApi'

  export default{
    mixins: [Confirm],
    components: {Modal},
    props: {},
    data (){
      return {
        modalSize: '',
        body: `asdasf`,
        title: '提示',
        toastType: 'top-left',
        toastTime: 2000,
        toastText: '来吧骚年！',
        confirmTitle: '提示',
        confirmMessage: '终于等到你'
      }
    },
    methods: {
      showModal(){
        this.modalSize = 'normal';
        this.$refs.modal.open();
      },
      showBig(){
        this.modalSize = 'large';
        this.$refs.modal.open();
      },
      toast(type){
        switch (type) {
          case 'info':
            this.$toasted.info(this.toastText, {position: this.toastType, duration: this.toastTime});
            break;
          case 'success':
            this.$toasted.success(this.toastText, {position: this.toastType, duration: this.toastTime});
            break;
          case 'error':
            this.$toasted.error(this.toastText, {position: this.toastType, duration: this.toastTime});
        }
      },
      confirm(type){
        switch (type) {
          case 'alert':
            this.$alert(this.confirmMessage, this.confirmTitle);
            break;
          case 'confirm':
            this.$confirm(this.confirmMessage, this.confirmTitle);
            break;
          case 'prompt':
            this.$prompt(this.confirmMessage, this.confirmTitle);
            break;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test-page {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    background: #fff;
    .child {
      margin: 20px 0;
      padding: 0 20px;
      width: 30%;
      min-width: 500px;
      height: 300px;
      border: 1px dashed #b1b0d6;
      h2 {
        text-align: center;
        margin: 20px;
      }
    }
    .btn-group {
      display: table;
      margin: 30px auto;
      button {
        margin: 0 20px;
      }
    }
  }

</style>
