<template>
  <div class="c-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CRow',
  props: {
    gutter: Number
  },
  data() {
    return {};
  },
  computed: {
    style() {
      const ret = {};
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  }
};
</script>
