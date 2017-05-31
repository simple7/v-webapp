import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en-US.json'
import zh from './zh-CN.json'

Vue.use(VueI18n)

export default function createI18n () {
  return new VueI18n({
    locale: 'zh-CN',
    messages: {
      'en-US': en,
      'zh-CN': zh
    }
  })
}
