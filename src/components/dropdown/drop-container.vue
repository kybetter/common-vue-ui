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
  props: {},
  data() {
    return {
      popper: null,
      popperStatus: false
    };
  },
  mounted() {
    // this.popper = new Popper(this.dropdown.$el, this.$el, {
    //   placement: 'bottom',
    //   modifiers: {
    //     computeStyle: {
    //       gpuAcceleration: false
    //     },
    //     preventOverflow: {
    //       boundariesElement: 'window',
    //       enabled: true
    //     },
    //     arrow: {
    //       enabled: false
    //     },
    //     inner: {
    //       enabled: false
    //     }
    //   },
    //   onCreate: () => {
    //     // this.resetTransformOrigin();
    //   },
    //   onUpdate: () => {
    //     // this.resetTransformOrigin();
    //   }
    // });
    // document.body.appendChild(this.$el);
    // const rect = this.triggerElm.$el.getBoundingClientRect();
    // console.log(rect);
    // this.style = {
    //   // top: rect.top + document.documentElement.scrollTop + rect.height + 'px',
    //   // left: rect.left + document.documentElement.scrollLeft + 'px'
    //   top: rect.top + rect.height + 'px',
    //   left: rect.left + 'px'
    // };
    // console.log(this.dropdown);
  },
  created() {
    // this.$on('on-update-popper', this.update);
    // this.$on('on-destroy-popper', this.destroy);
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
            placement: 'bottom',
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              },
              preventOverflow: {
                boundariesElement: 'window'
                // enabled: true
              }
              // arrow: {
              //   enabled: false
              // },
              // inner: {
              //   enabled: false
              // }
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
      // 不判断，Select 会报错，不知道为什么
      // if (!this.popper) return;

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

<style lang="less" scoped></style>
