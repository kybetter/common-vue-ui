import Row from './components/row/index.js';
import Col from './components/col/index.js';

const components = [Row, Col];

const install = function(Vue) {
  components.map(component => {
    Vue.use(component);
  });
};

export { Row, Col, install };

export default {
  version: require('../package.json').version,
  install,
  Row,
  Col
};
