// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'lodash'
import './style.scss'
import VueProgressBar from 'vue-progressbar'
import Toasted from './components/toast/index';
import BreadCrumbs from './components/breadcrumbs/index';
import createI18n from './i18n/index';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueProgressBar, {
  color: '#32c5d2',
  failedColor: 'red'
})
Vue.use(Toasted,{position:'top-right',duration:3000});
Vue.use(BreadCrumbs);
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, _, {value: _});
const i18n = createI18n();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {App}
});

