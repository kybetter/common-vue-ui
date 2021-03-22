import Dropdown from './dropdown.vue';
// import DropdownMenu from './dropdown-menu.vue';
// import DropdownItem from './dropdown-item.vue';

Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
};

// DropdownMenu.install = function(Vue) {
//   Vue.component(DropdownMenu.name, DropdownMenu);
// };

// DropdownItem.install = function(Vue) {
//   Vue.component(DropdownItem.name, DropdownItem);
// }

// Dropdown.Menu = DropdownMenu;
// Dropdown.Item = DropdownItem;

export default Dropdown;
