<template>
  <div class="c-tabs">
    <div class="c-tab-control-bar">
      <div
        v-for="tab in getTabs"
        :class="['c-tab-nav', value === tab.name ? 'active' : '']"
        @click="changeTab(tab.name)"
        :key="tab._uid"
      >
        <template
          v-if="
            tab.$slots.label || typeof tab.label === 'function' || typeof tab.label === 'object'
          "
        >
          <render :vnode="tab.$slots.label || tab.label"></render>
        </template>
        <template v-else>{{ tab.label }}</template>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Render from '../../utils/render';

export default {
  name: 'CTabs',
  components: {
    Render
  },
  model: {
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      validator(data) {
        if (data && (typeof data === 'string' || typeof data === 'number')) {
          return true;
        }
        return false;
      }
    }
  },
  data() {
    return {
      tabs: []
    };
  },
  computed: {
    getTabs() {
      const tabs = [...this.tabs.filter(tab => tab.$options.name === 'CTabPane')];
      tabs.sort((a, b) => {
        return a.index - b.index;
      });
      return tabs;
    }
  },
  mounted() {
    this.tabs = this.$children;
  },
  updated() {
    this.tabs = this.$children;
  },
  methods: {
    changeTab(name) {
      this.$emit('change', name);
    }
  }
};
</script>
