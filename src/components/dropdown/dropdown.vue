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
    <transition name="c-transition-drop">
      <drop-container
        ref="drop"
        v-show="currentVisible"
        v-transfer-dom
        @mouseenter.native="handleMouseenter"
        @mouseleave.native="handleMouseleave"
      >
        <slot name="dropdown"></slot>
      </drop-container>
    </transition>
  </div>
</template>

<script>
import Clickoutside from '../../utils/clickoutside';
import TransferDom from '../../utils/transfer-dom';
import DropContainer from './drop-container.vue';

export default {
  name: 'CDropdown',
  directives: { Clickoutside, TransferDom },
  components: { DropContainer },
  provide() {
    return {
      dropdown: this
    };
  },
  props: {
    trigger: {
      type: String,
      default: 'click'
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
      currentVisible: this.visible
    };
  },
  watch: {
    visible(val) {
      this.currentVisible = val;
    },
    currentVisible(val) {
      if (val) {
        this.$refs.drop.update();
      } else {
        this.$refs.drop.destroy();
      }
    }
  },
  created() {
    // this.triggerElm = this;
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
      }, 250);
    },
    handleMouseleave() {
      if (this.trigger !== 'hover') {
        return false;
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.currentVisible = false;
      }, 150);
    },
    onClickoutside() {
      if (this.trigger !== 'click') {
        return false;
      }
      // this.handleClose();
      // if (this.triggerElm.disabled) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.currentVisible = false;
      }, 0);
    }
  }
};
</script>
