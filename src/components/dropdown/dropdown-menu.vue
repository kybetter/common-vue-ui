<template>
  <transition name="c-transition-drop">
    <div class="c-dropdown-menu">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CDropdownMenu',
  data() {
    return {};
  }
};
</script>
