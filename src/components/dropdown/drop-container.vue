<template>
  <div ref="drop" class="c-drop-container">
    <slot></slot>
  </div>
</template>

<script>
import Popper from '../../utils/popper/dist/umd/popper.js';

export default {
  name: 'CDropContainer',
  inject: ['dropdown'],
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    }
  },
  data() {
    return {
      popper: null,
      popperStatus: false
    };
  },
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
  },
  methods: {
    destroy() {
      if (this.popper) {
        setTimeout(() => {
          if (this.popper && !this.popperStatus) {
            this.popper.destroy();
            this.popper = null;
          }
          this.popperStatus = false;
        }, 300);
      }
    },
    update() {
      if (this.popper) {
        this.$nextTick(() => {
          this.popper.scheduleUpdate();
          this.popperStatus = true;
        });
      } else {
        this.$nextTick(() => {
          this.popper = new Popper(this.dropdown.$el, this.$el, {
            placement: this.placement,
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              },
              preventOverflow: {
                boundariesElement: 'window'
              }
            },
            onCreate: () => {
              this.resetTransformOrigin();
              this.$nextTick(this.popper.update());
            },
            onUpdate: () => {
              this.resetTransformOrigin();
            }
          });
        });
      }
    },
    resetTransformOrigin() {
      let x_placement = this.popper.popper.getAttribute('x-placement');
      let placementStart = x_placement.split('-')[0];
      let placementEnd = x_placement.split('-')[1];
      const leftOrRight = x_placement === 'left' || x_placement === 'right';
      if (!leftOrRight) {
        this.popper.popper.style.transformOrigin =
          placementStart === 'bottom' || (placementStart !== 'top' && placementEnd === 'start')
            ? 'center top'
            : 'center bottom';
      }
    }
  }
};
</script>
