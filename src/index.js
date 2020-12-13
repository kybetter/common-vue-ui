import Test from './components/test/index.js';
import Avata from './components/avata/index.js';

const components = [Test, Avata];

const install = function(Vue) {
  components.map(component => {
    Vue.use(component);
  });
};

export { Test, Avata, install };

export default {
  version: '0.0.1',
  install,
  Test,
  Avata
};
