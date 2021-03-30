<template>
  <div :class="['c-dropdown-item', disabled ? 'disabled' : '']" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { findParentComponent } from '../../utils/_utils';
export default {
  name: 'CDropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      default: undefined
    }
  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.$emit('click', e);
        const dropdownMenu = findParentComponent(this, 'CDropdownMenu');
        if (dropdownMenu.$options.name === 'CDropdownMenu') {
          dropdownMenu.$emit('click', this.name);
        }
        const dropdown = findParentComponent(this, 'CDropdown');
        if (dropdown.$options.name === 'CDropdown') {
          dropdown.$emit('on-item-click', this.name);
        }
      }
    }
  }
};
</script>