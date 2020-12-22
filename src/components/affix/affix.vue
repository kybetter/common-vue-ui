<template>
  <div class="c-affix" @click="handleClick" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CAffix',
  props: {
    top: [Number, String],
    left: [Number, String],
    right: [Number, String],
    bottom: [Number, String]
  },
  data() {
    return {};
  },
  computed: {
    style() {
      const style = {};
      ['top', 'left', 'right', 'bottom'].forEach(prop => {
        if (this[prop] !== undefined) {
          if (typeof this[prop] === 'number') {
            style[prop] = `${this[prop]}px`;
          } else {
            style[prop] = this[prop];
          }
        }
      });
      return style;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>
