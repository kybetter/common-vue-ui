<template>
  <div ref="content" class="c-ellipsis" :style="style">
    <span class="c-ellipsis-html" v-if="html" v-html="htmlContent"></span>
    <span class="c-ellipsis-text" v-else-if="text" v-text="textContent"></span>
  </div>
</template>

<script>
import { isStyleSupport, pxToNumber } from '@/utils/_utils';

const isTextOverflowSupport = isStyleSupport('textOverflow');
const isLineClampSupport = isStyleSupport('webkitLineClamp');

export default {
  name: 'CEllipsis',
  props: {
    rows: {
      type: Number,
      default: 0
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      textContent: '',
      htmlContent: ''
    };
  },
  computed: {
    style() {
      if (this.canUseCSSEllipsis()) {
        if (this.rows === 1) {
          return {
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap'
          };
        } else if (this.rows > 1) {
          return {
            display: '-webkit-box',
            '-webkit-line-clamp': this.rows,
            '-webkit-box-orient': 'vertical'
          };
        }
      }
      return '';
    }
  },
  created() {
    this.textContent = this.text;
    this.htmlContent = this.html;
  },
  mounted() {
    if (!this.canUseCSSEllipsis() && this.rows > 1) {
      this.mesureNode();
    }
  },
  methods: {
    canUseCSSEllipsis() {
      if (this.rows === 1) {
        return isTextOverflowSupport;
      }
      return isLineClampSupport;
    },
    mesureNode() {
      const originStyle = window.getComputedStyle(this.$refs.content);
      const lineHeight = pxToNumber(originStyle.lineHeight);

      this.maxHeight = Math.round(
        lineHeight * (this.rows + 1) +
          pxToNumber(originStyle.paddingTop) +
          pxToNumber(originStyle.paddingBottom)
      );

      this.htmlContent = this.html;
      this.textContent = this.text;
      if (this.htmlContent) {
        this.mesureText(this.htmlContent.length, 'html');
      } else {
        this.mesureText(this.textContent.length, 'text');
      }
    },
    mesureText(length, type) {
      this.$nextTick(() => {
        if (this.$refs.content.offsetHeight < this.maxHeight || length <= 0) {
          if (type === 'html') {
            this.htmlContent = this.htmlContent + '...';
          } else {
            this.textContent = this.textContent + '...';
          }
          return;
        }
        length -= 3;
        if (type === 'html') {
          this.htmlContent = this.htmlContent.slice(0, length);
        } else {
          this.textContent = this.textContent.slice(0, length);
        }
        this.mesureText(length, type);
      });
    }
  }
};
</script>
