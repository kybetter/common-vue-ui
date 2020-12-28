<template>
  <div
    class="c-dropdown"
    v-clickoutside="onClickoutside"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div class="c-dropdown-ref" ref="reference" @click="handleClick">
      <slot></slot>
    </div>
    <slot name="dropdown"></slot>
  </div>
</template>

<script>
import Clickoutside from '../../utils/clickoutside';

export default {
  name: 'CDropdown',
  directives: { Clickoutside },
  components: {},
  props: {
    trigger: {
      type: String,
      default: 'hover',
      validator(value) {
        if (value !== 'hover' || value !== 'click') {
          return false;
        }
        return true;
      }
    },
    hideTimeout: {
      type: Number,
      default: 150
    },
    visible: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  data() {
    return {
      timeout: null,
      triggerElm: null,
      currentVisible: this.visible
    };
  },
  watch: {
    visible(val) {
      this.currentVisible = val;
    },
    currentVisible(val) {
      if (val) {
        // this.$refs.drop.update();
      }
    }
  },
  methods: {
    handleClick() {
      if (this.trigger !== 'click') {
        return false;
      }
      this.currentVisible = !this.currentVisible;
    },
    handleMouseenter() {
      if (this.trigger !== 'hover') {
        return false;
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.currentVisible = true;
      }, this.hideTimeout);
    },
    handleMounseleave() {
      if (this.trigger !== 'hover') {
        return false;
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.currentVisible = false;
      }, this.hideTimeout);
    },
    onClickoutside() {
      this.handleClose();
      // if (this.currentVisible) {
      //   this.$emit('on-clickoutside', e);
      // }
      if (this.triggerElm.disabled) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(
        () => {
          this.visible = false;
        },
        this.trigger === 'click' ? 0 : this.hideTimeout
      );
    },
    handleClose() {
      if (this.trigger !== 'click') {
        return false;
      }
      this.currentVisible = false;
    },
    hide() {
      if (this.triggerElm.disabled) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(
        () => {
          this.visible = false;
        },
        this.trigger === 'click' ? 0 : this.hideTimeout
      );
    }
  }
};
</script>
