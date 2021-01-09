<template>
  <div ref="dropdown-menu" class="c-dropdown-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CDropdownMenu',
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$parent.$options.name, this.$parent.$options.name === 'CDropdown');
    // if (this.$parent.$options.name === 'CDropdown') {
    //   // this.$nextTick(() => {
    //     this.style.top = this.$parent.$el.offsetHeight + 'px';
    //     // console.log(this.style);
    //   // })
    // }
  }
};
</script>
