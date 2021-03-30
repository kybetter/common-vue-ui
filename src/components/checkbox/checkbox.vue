<template>
  <label :class="wrapClass">
    <slot><span>{{label}}</span></slot>
  </label>
</template>

<script>
export default {
  name: "CCheckbox",
  data() {
    return {

    }
  },
  computed: {
    wrapClass() {
      return [
        'c-checkbox-wrapper',

      ]
    },
  },
}
</script>
