import Vue from 'vue';
import App from './App.vue';
import CUI from '../src/index';
import '../src/style/index.scss';
import '../src/style/default-theme.scss';

Vue.config.productionTip = false;

Vue.use(CUI);

new Vue({
  render: h => h(App)
}).$mount('#app');
