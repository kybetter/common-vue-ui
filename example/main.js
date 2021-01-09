import Vue from 'vue';
import App from './App.vue';
import CUI from '../src/index';
import '../src/styles/index.scss';
import '../src/styles/default-theme.scss';
import '../src/styles/colors.scss';
import '../src/styles/opacity.scss';

Vue.config.productionTip = false;

Vue.use(CUI);

new Vue({
  render: h => h(App)
}).$mount('#app');
