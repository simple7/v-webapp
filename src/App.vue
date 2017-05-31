<template>
  <div id="app">
    <v-confirm ref="confirm"></v-confirm>
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import vConfirm from './components/confirm/Confirm.vue';
  import modalEventBind from './components/confirm/ConfirmEventBind';
  import ConfirmApi from './components/confirm/ConfirmApi';

  export default {
    name: 'app',
    components: {vConfirm},
    mixins: [ConfirmApi],
    mounted() {
      modalEventBind(this.$refs.confirm);
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
