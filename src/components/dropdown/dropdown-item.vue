<template>
  <div :class="['c-dropdown-item', disabled ? 'disabled' : '']" @click="handleClick"><slot></slot></div>
</template>

<script>
export default {
  name: 'CDropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      default: undefined,
    }
  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.$emit('click', e);
        if (this.$parent.$options.name === 'CDropdownMenu') {
          this.$parent.$emit('click', this.name);
        }
      }
    }
  }
};
</script>