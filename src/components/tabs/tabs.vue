<template>
  <div class="c-tabs">
    <div
      ref="control-bar"
      :class="['c-tab-control-bar', 'c-clearfix', isScrollable ? 'c-tab-scrollable' : '']"
    >
      <!-- <div ref="control-bar" class="c-tab-control-bar c-clearfix"> -->
      <span v-if="isScrollable" class="c-tab-prev" @click="scrollPrev">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2613">
          <path
            d="M275.7 490.7c-0.1 0.2-0.3 0.4-0.4 0.6-0.2 0.3-0.5 0.7-0.7 1-0.1 0.1-0.2 0.3-0.2 0.4-0.3 0.4-0.5 0.8-0.8 1.2l-0.1 0.1c-2.6 4.6-4.1 9.6-4.6 14.7v0.2c0 0.5-0.1 0.9-0.1 1.4v3.2c0 0.5 0.1 0.9 0.1 1.4v0.2c0.4 5.1 2 10.1 4.6 14.7l0.1 0.1c0.2 0.4 0.5 0.8 0.8 1.3 0.1 0.1 0.2 0.3 0.2 0.4 0.2 0.3 0.4 0.7 0.7 1 0.1 0.2 0.3 0.4 0.4 0.6 0.2 0.3 0.4 0.5 0.6 0.8 0.2 0.2 0.4 0.5 0.6 0.7 0.1 0.1 0.2 0.2 0.3 0.4 0.1 0.1 0.2 0.2 0.2 0.3 0.2 0.3 0.5 0.5 0.7 0.8 0.2 0.2 0.4 0.4 0.5 0.6l0.7 0.7 0.6 0.6c0.2 0.2 0.5 0.4 0.7 0.7l0.6 0.6 0.3 0.3 414.4 347.7c15.2 12.7 38 10.7 50.7-4.4 12.7-15.2 10.7-38-4.4-50.7L360.8 512l381.6-320.2c15.2-12.7 17.2-35.6 4.4-50.7-12.7-15.2-35.6-17.2-50.7-4.4L281.6 484.4l-0.3 0.3-0.6 0.6c-0.2 0.2-0.5 0.4-0.7 0.7l-0.6 0.6-0.7 0.7c-0.2 0.2-0.4 0.4-0.5 0.6-0.2 0.3-0.5 0.5-0.7 0.8-0.1 0.1-0.2 0.2-0.2 0.3-0.1 0.1-0.2 0.2-0.3 0.4-0.2 0.2-0.4 0.5-0.6 0.7-0.3 0.1-0.5 0.4-0.7 0.6z"
            p-id="2614"
            fill="#515a6e"
          ></path>
        </svg>
      </span>
      <span v-if="isScrollable" class="c-tab-next" @click="scrollNext">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2613">
          <path
            d="M275.7 490.7c-0.1 0.2-0.3 0.4-0.4 0.6-0.2 0.3-0.5 0.7-0.7 1-0.1 0.1-0.2 0.3-0.2 0.4-0.3 0.4-0.5 0.8-0.8 1.2l-0.1 0.1c-2.6 4.6-4.1 9.6-4.6 14.7v0.2c0 0.5-0.1 0.9-0.1 1.4v3.2c0 0.5 0.1 0.9 0.1 1.4v0.2c0.4 5.1 2 10.1 4.6 14.7l0.1 0.1c0.2 0.4 0.5 0.8 0.8 1.3 0.1 0.1 0.2 0.3 0.2 0.4 0.2 0.3 0.4 0.7 0.7 1 0.1 0.2 0.3 0.4 0.4 0.6 0.2 0.3 0.4 0.5 0.6 0.8 0.2 0.2 0.4 0.5 0.6 0.7 0.1 0.1 0.2 0.2 0.3 0.4 0.1 0.1 0.2 0.2 0.2 0.3 0.2 0.3 0.5 0.5 0.7 0.8 0.2 0.2 0.4 0.4 0.5 0.6l0.7 0.7 0.6 0.6c0.2 0.2 0.5 0.4 0.7 0.7l0.6 0.6 0.3 0.3 414.4 347.7c15.2 12.7 38 10.7 50.7-4.4 12.7-15.2 10.7-38-4.4-50.7L360.8 512l381.6-320.2c15.2-12.7 17.2-35.6 4.4-50.7-12.7-15.2-35.6-17.2-50.7-4.4L281.6 484.4l-0.3 0.3-0.6 0.6c-0.2 0.2-0.5 0.4-0.7 0.7l-0.6 0.6-0.7 0.7c-0.2 0.2-0.4 0.4-0.5 0.6-0.2 0.3-0.5 0.5-0.7 0.8-0.1 0.1-0.2 0.2-0.2 0.3-0.1 0.1-0.2 0.2-0.3 0.4-0.2 0.2-0.4 0.5-0.6 0.7-0.3 0.1-0.5 0.4-0.7 0.6z"
            p-id="2614"
            fill="#515a6e"
          ></path>
        </svg>
      </span>
      <div ref="nav" class="c-tab-nav-container">
        <div ref="nav-scroll" class="c-tab-nav-scroll" :style="scrollStyle">
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
      </div>
      <div class="c-tab-bottom-bar"></div>
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
      tabs: [],
      scrollStyle: {
        transform: ''
      },
      isScrollable: false
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
    this.updateScroll();
  },
  updated() {
    this.tabs = this.$children;
  },
  watch: {
    getTabs() {
      this.updateScroll();
    }
  },
  methods: {
    changeTab(name) {
      this.$emit('change', name);
    },
    updateScroll() {
      this.$nextTick(() => {
        const navWidth = this.$refs['nav'].offsetWidth;
        const containerWidth = this.$refs['nav-scroll'].offsetWidth;
        if (containerWidth > navWidth) {
          this.isScrollable = true;
        }
      });
    },
    scrollNext() {
      const navWidth = this.$refs['nav'].offsetWidth;
      const containerWidth = this.$refs['nav-scroll'].offsetWidth;
      const currentOffset = this.getCurrentScrollOffset();
      if (containerWidth - currentOffset <= navWidth) return;
      let newOffset =
        containerWidth - currentOffset > navWidth * 2
          ? currentOffset + navWidth
          : containerWidth - navWidth;

      this.setOffset(newOffset);
    },
    scrollPrev() {
      const navWidth = this.$refs['nav'].offsetWidth;
      const currentOffset = this.getCurrentScrollOffset();
      if (!currentOffset) return;
      let newOffset = currentOffset > navWidth ? currentOffset - navWidth : 0;

      this.setOffset(newOffset);
    },
    getCurrentScrollOffset() {
      const { scrollStyle } = this;
      return scrollStyle.transform
        ? Number(scrollStyle.transform.match(/translateX\(-(\d+(\.\d+)*)px\)/)[1])
        : 0;
    },
    setOffset(value) {
      this.scrollStyle.transform = `translateX(-${value}px)`;
    }
  }
};
</script>
