<template>
  <div v-show="totalPage > 0" class="c-pagination">
    <span :class="['prev', isFirstPage ? 'disabled' : '']" @click="changePage('prev')">
      <template v-if="prev">{{prev}}</template>
      <template v-else-if="$slots.prev">
        <slot name="prev"></slot>
      </template>
      <svg
        v-else
        t="1605512343766"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1134"
        width="30"
        height="30"
      >
        <path
          d="M601.71961736 669.56087432l-27.67430422 28.64586726-193.72062125-192.7495499 193.72062125-192.7495499 27.67430422 28.64586726-163.13310298 164.10417432z"
          fill="currentColor"
          p-id="1135"
        ></path>
      </svg>
    </span>
    <span class="pager" v-for="i in pagerArr" :key="i" :class="{ active: value === i }" @click="changePage(i)">
      {{ i }}
    </span>
    <span :class="['next', isLastPage ? 'disabled' : '']" @click="changePage('next')">
      <template v-if="next">{{next}}</template>
      <template v-else-if="$slots.next">
        <slot name="next"></slot>
      </template>
      <svg
        v-else
        t="1605512343766"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1134"
        width="30"
        height="30"
      >
        <path
          d="M601.71961736 669.56087432l-27.67430422 28.64586726-193.72062125-192.7495499 193.72062125-192.7495499 27.67430422 28.64586726-163.13310298 164.10417432z"
          fill="currentColor"
          p-id="1135"
        ></path>
      </svg>
    </span>
  </div>
</template>

<script>
/**
 * 分页器
 */
export default {
  name: 'CPagination',
  model: {
    event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 0,
    },
    prev: {
      type: String,
      default: ''
    },
    next: {
      type: String,
      default: ''
    },
  },
  computed: {
    // 是否第一页
    isFirstPage() {
      return this.value === 1;
    },
    // 是否最后一页
    isLastPage() {
      return this.value === this.totalPage;
    },
    // 生成页码数组
    pagerArr() {
      const arr = [];
      if (this.totalPage <= 7) {
        for (let i = 1; i <= this.totalPage; i++) {
          arr.push(i);
        }
      } else if (this.value < 5) {
        for (let i = 1; i <= 7; i++) {
          arr.push(i);
        }
      } else if (this.value >= this.totalPage - 3) {
        for (let i = this.totalPage - 6; i <= this.totalPage; i++) {
          arr.push(i);
        }
      } else if (this.value < this.totalPage - 3) {
        for (let i = this.value - 3; i <= this.value + 3; i++) {
          arr.push(i);
        }
      }
      return arr;
    }
  },
  methods: {
    changePage(pageOrigin) {
      let page = pageOrigin;
      if (pageOrigin === 'prev') {
        if (this.value > 1) {
          page = this.value - 1;
        } else {
          return;
        }
      } else if (pageOrigin === 'next') {
        if (this.value < this.totalPage) {
          page = this.value + 1;
        } else {
          return;
        }
      } else if (pageOrigin === this.value) {
        return;
      }

      this.$emit('change', page);
    }
  }
};
</script>
