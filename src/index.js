import Row from './components/row/index.js';
import Col from './components/col/index.js';
import Button from './components/button/index.js';
import Ellipsis from './components/ellipsis/index.js';
import Affix from './components/affix/index.js';
import Dropdown from './components/dropdown/index.js';
import DropdownMenu from './components/dropdown-menu/index.js';
import DropdownItem from './components/dropdown-item/index.js';
import DropdownDivider from './components/dropdown-divider/index.js';
import Pagination from './components/pagination/index.js';

const components = {
  Row,
  Col,
  Button,
  Ellipsis,
  Affix,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  Pagination
};

const install = function(Vue, opts = {}) {
  Object.keys(components).forEach(name => {
    Vue.use(components[name]);
  });

  Vue.prototype.$CUI_CONFIG = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
};

export default {
  version: require('../package.json').version,
  install,
  ...components
};

export {
  Row,
  Col,
  Button,
  Ellipsis,
  Affix,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  Pagination
};
