// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales'
import bootstrap from './core/bootstrap'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themeConfig from './config/theme.config.js'
import './core/lazy_use'
// import './mock'

// 路由守卫
import './router/router-guards'
// 其他
import './styles/global.less'

// ProLayout
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
// eslint-disable-next-line camelcase
window.umi_plugin_ant_themeVar = themeConfig.theme

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  created: bootstrap,
  render: h => h(App),
}).$mount('#app')
