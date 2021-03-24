import CTabPane from '../tabs/tab-pane.vue';

CTabPane.install = function (Vue) {
  Vue.component(CTabPane.name, CTabPane);
}

export default CTabPane;
