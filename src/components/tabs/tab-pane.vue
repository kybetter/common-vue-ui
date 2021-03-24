<template>
  <div class="c-tab-pane" v-if="useIf" v-show="useShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CTabPane',
  props: {
    label: {
      type: [String, Number, Function, Object],
      default: ''
    },
    name: {
      type: [String, Number],
      default: ''
    },
    forceRender: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    active() {
      return this.$parent.value;
    },
    useIf() {
      if (this.forceRender) {
        return true;
      }
      return this.active === this.name;
    },
    useShow() {
      return this.active === this.name;
    }
  }
};
</script>
