<template>
  <transition :name="transition">
    <div v-if="show" class="v-modal" @click.self="clickMask">
      <div class="v-dialog" :class="modalClass">
        <div class="modal-content">
          <!--Header-->
          <div class="modal-header">
            <slot name="header">
              <button type="button" class="close" @click="cancel"></button>
              <h4 class="modal-title">
                <slot name="title">
                  {{title}}


                </slot>
              </h4>
            </slot>
          </div>
          <!--Container-->
          <div class="modal-body">
            <slot>{{body}}</slot>
          </div>
          <!--Footer-->
          <div class="modal-footer">
            <slot name="footer">
              <button type="button" :class="cancelClass" @click="cancel">{{cancelText}}</button>
              <button type="button" :class="okClass" @click="ok">{{okText}}</button>
            </slot>
          </div>
        </div>
      </div>
      <!--<div claconfirmodal-backdrop in"></div>-->
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '测试'
      },
      body: {
        type: String,
        default: '测试'
      },
      size: {
        type: String,
        default: 'normal'
      },
      // 为true时无法通过点击遮罩层关闭modal
      force: {
        type: Boolean,
        default: false
      },
      // 自定义组件transition
      transition: {
        type: String,
        default: 'top'
      },
      // 确认按钮text
      okText: {
        type: String,
        default: '确认'
      },
      // 取消按钮text
      cancelText: {
        type: String,
        default: '取消'
      },
      // 确认按钮className
      okClass: {
        type: String,
        default: 'btn green'
      },
      // 取消按钮className
      cancelClass: {
        type: String,
        default: 'btn dark btn-outline'
      },
      // 点击确定时关闭Modal
      // 默认为false，由父组件控制prop.show来关闭
      closeWhenOK: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        duration: null,
        show: false
      };
    },
    computed: {
      modalClass () {
        return {
          'sm': this.size === 'small',
          'lg': this.size === 'large'
        }
      }
    },
    created () {
      if (this.show) {
        document.body.className += ' confirm-open';
      }
    },
    destroyed () {
      document.body.className = document.body.className.replace(' confirm-open', '');
    },
    watch: {
      show (value) {
        // 在显示时去掉body滚动条，防止出现双滚动条
        if (value) {
          document.body.className += ' confirm-open';
        }
        // 在modal动画结束后再加上body滚动条
        else {
          if (!this.duration) {
            this.duration = window.getComputedStyle(this.$el)['transition-duration'].replace('s', '') * 1000;
          }

          window.setTimeout(() => {
            document.body.className = document.body.className.replace(' confirm-open', '');
          }, this.duration || 0);
        }
      }
    },
    methods: {
      ok () {
        this.$emit('ok');
        if (this.closeWhenOK) {
          this.show = false;
        }
      },
      cancel () {
        this.$emit('cancel');
        this.show = false;
      },
      // 点击遮罩层
      clickMask () {
        if (!this.force) {
          this.cancel();
        }
      },
      open(){
        this.show = true;
      },
    }
  };
</script>


<style lang="scss" scoped>
  .v-modal {
    background-color: rgba(0, 0, 0, .4);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10050;
    overflow-x: hidden;
    overflow-y: auto;
    /*perspective: 500px;*/
    transition: opacity .4s ease;
  }

  .v-dialog {
    background: #FFF;
    box-shadow: 3px 5px 20px #333;
    transition: all 0.5s ease;
    position: absolute;
    margin: 30px 0;
    left: 50%;
    transform: translate(-50%, 0);
    will-change: transform;
    width: 550px;
    &.sm {
      width: 350px;
    }
    &.lg {
      width: 850px;
    }

  }

  .top-enter, .top-leave-active {
    opacity: 0;
  }

  .top-enter .v-dialog, .top-leave-active .v-dialog {
    opacity: 0;
    transform: translate(-50%, -50%);
  }


</style>
