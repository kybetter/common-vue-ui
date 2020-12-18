<template>
  <button
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    class="c-button"
    :class="[
      type ? 'c-button--' + type : '',
      buttonSize ? 'c-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading
      }
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'CButton',
  inject: {
    cForm: {
      default: ''
    },
    cFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    buttonDisabled() {
      return this.disabled || (this.cForm || {}).disabled;
    },
    _cFormItemSize() {
      return (this.cFormItem || {}).cFormItemSize;
    },
    buttonSize() {
      return this.size || this._cFormItemSize || (this.$CUI_CONFIG || {}).size;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
