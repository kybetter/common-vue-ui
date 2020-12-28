import Vue from 'vue';
import App from './App.vue';
import CUI from '../src/index';
import '../src/styles/index.scss';
import '../src/styles/default-theme.scss';

Vue.config.productionTip = false;

Vue.use(CUI);

new Vue({
  render: h => h(App)
}).$mount('#app');
