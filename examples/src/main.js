import Vue from 'vue'
import App from './App.vue'
import CUI from '../../src/index';
// 基础样式[可选]，包含重置和工具样式
import '../../src/styles/base.scss';
// 全部组件样式[可选]
import '../../src/styles/default-theme.scss';
import '../../src/styles/colors.scss';

Vue.config.productionTip = false

Vue.use(CUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
