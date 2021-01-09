import Dropdown from './dropdown.vue';
import DropdownMenu from './dropdown-menu.vue';

Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
};

DropdownMenu.install = function(Vue) {
  Vue.component(DropdownMenu.name, DropdownMenu);
};

Dropdown.Menu = DropdownMenu;

export default Dropdown;
