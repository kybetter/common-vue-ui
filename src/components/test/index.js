import Test from './test.vue';

Test.install = function(Vue) {
  Vue.component(Test.name, Test);
};

export default Test;
