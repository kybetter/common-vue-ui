import Row from './components/row/index.js';
import Col from './components/col/index.js';
import Button from './components/button/index.js';

const components = [Row, Col, Button];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.use(component);
  });

  Vue.prototype.$CUI_CONFIG = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
};

export { Row, Col, Button, install };

export default {
  version: require('../package.json').version,
  install,
  Row,
  Col,
  Button
};
