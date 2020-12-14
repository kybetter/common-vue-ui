<template>
  <div :class="['c-col', classList]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    pull: Number,
    push: Number
  },
  data() {
    return {};
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'CRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      let style = {};
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      let classList = [];
      ['span', 'offset', 'pull', 'push'].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          classList.push(prop !== 'span' ? `c-col-${prop}-${this[prop]}` : `c-col-${this[prop]}`);
        }
      });
      return classList;
    }
  }
};
</script>
