<template>
  <transition name="modal">
    <div class="v-confirm" v-show="show">
      <div class="v-dialog">
        <div class="modal-content">
          <!--Header-->
          <div class="v-header">
            <slot name="header">
              <button type="button" class="close v-close" @click="cancel"></button>
              <span class="v-title">
                      <slot name="title">
                        {{title}}
                </slot>
                    </span>
            </slot>
          </div>
          <div class="v-line"></div>
          <div id="v-modal-body" class="v-body">
            <template>{{message}}</template>
            <template v-if="type == 'prompt'">
              <form @submit="onSubmitForm" class="v-modal-prompt-form">
                <input v-if="inputType == 'text'" type="text" ref="input" v-model="input" class="v-modal-input">
                <input v-if="inputType == 'number'" type="number" step="0.01" ref="input" v-model="input"
                       class="v-modal-input">
              </form>
            </template>
          </div>
          <div class="v-footer">
            <button type="button" class="btn btn-info" @click="ok()" v-show="type">确定</button>
            <button type="button" class="btn btn-default" @click="cancel()"
                    v-show="type == 'confirm' || type == 'prompt'">取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'v-confirm',
    data: function () {
      return {
        show: false,
        type: '',
        message: '',
        title: '',
        callback: null,
        input: '',
        inputType: 'text'
      }
    },
    compute: {},
    methods: {
      modal: function (message, title) {
        if (typeof message === 'string') {
          this.message = message;
        }
        this.title = title;
        this.callback = null;
        this.input = '';
        this.show = true;
      },
      modalAlert: function (params = {}) {
        this.type = 'alert';
        this.modal(params.message, params.title == null ? '提示' : params.title);
        this.callback = params.callback;
      },
      modalConfirm: function (params = {}) {
        this.type = 'confirm';
        this.modal(params.message, params.title || '确认');
        this.callback = params.callback;
      },
      modalPrompt: function (params = {}) {
        this.type = 'prompt';
        this.modal(params.message, params.title || '输入');
        this.callback = params.callback;
        this.inputType = params.options.inputType || 'text';
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      },
      ok: function () {
        var self = this;
        this.show = false;
        setTimeout(function () {
          if (self.callback) {
            self.callback(self.type == 'prompt' ? self.input : true);
          }
        }, 0);
      },
      cancel: function () {
        console.log(12);
        var self = this;
        this.show = false;
        setTimeout(function () {
          if (self.callback) {
            self.callback(self.type == 'prompt' ? undefined : false);
          }
        }, 0);
      },
      onSubmitForm: function (e) {
        e.preventDefault();
        this.ok();
        return false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "Confirm";
</style>
